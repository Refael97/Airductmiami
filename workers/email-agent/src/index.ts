/**
 * Email agent for info@floridabreezeairduct.com and info@garage-door-fixers.com.
 *
 *   customer email ─► Cloudflare Email Routing ─► this Worker
 *                                                   ├─► copy to the owner's Gmail (always, first)
 *                                                   └─► Grok drafts a reply
 *                                                         └─► Telegram: ✅ send / ✏️ edit / 🗑 ignore
 *                                                               └─► Resend sends it from info@
 *
 * Nothing reaches a customer without the owner pressing Send. The Gmail
 * copy is made before anything else runs, so a failure anywhere in the
 * agent can never cost a lead: the worst case is the inbox as it is today.
 */

import PostalMime from 'postal-mime';
import { BRANDS, brandForAddress, type Brand } from './brands.ts';
import { draftReply, type Inbound } from './grok.ts';
import { copyDestinations, parseNetlifyLead, readApproval, renderApproval, replySubject, skipReason, DRAFT_START, type DraftMeta } from './logic.ts';
import { notify, sendEmail, tg, APPROVAL_BUTTONS, type Env } from './services.ts';

export default {
  async email(message: ForwardableEmailMessage, env: Env, _ctx: ExecutionContext): Promise<void> {
    // Copies first: the owner's Gmail, then COPY_TO (the inbox the owner's
    // own bot reads). Each one separately, so one bad address cannot stop
    // the others.
    for (const to of copyDestinations(env.FORWARD_TO, env.COPY_TO)) {
      try {
        await message.forward(to);
      } catch (err) {
        console.error(`forward to ${to} failed`, err);
        await safeNotify(env, `⚠️ העברת מייל ל-${to} נכשלה (${message.to}). בדוק שהכתובת מאומתת ב-Email Routing.\n${String(err)}`);
      }
    }

    // Without an xAI key the built-in drafting is off and the Worker only copies.
    if (!env.XAI_API_KEY) return;

    try {
      const raw = await new Response(message.raw).arrayBuffer();
      await handleInbound(raw, message, env);
    } catch (err) {
      console.error('agent failed', err);
      await safeNotify(env, `⚠️ הסוכן לא הצליח לטפל במייל ל-${message.to} מ-${message.from}. המייל הגיע ל-Gmail כרגיל.\n${String(err).slice(0, 500)}`);
    }
  },

  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/setup' && request.method === 'GET') {
      if (!env.TELEGRAM_WEBHOOK_SECRET || url.searchParams.get('secret') !== env.TELEGRAM_WEBHOOK_SECRET) {
        return new Response('forbidden', { status: 403 });
      }
      const result = await tg(env, 'setWebhook', {
        url: `${url.origin}/telegram`,
        secret_token: env.TELEGRAM_WEBHOOK_SECRET,
        allowed_updates: ['message', 'callback_query'],
      });
      return Response.json({ ok: true, result });
    }

    if (url.pathname === '/telegram' && request.method === 'POST') {
      if (request.headers.get('X-Telegram-Bot-Api-Secret-Token') !== env.TELEGRAM_WEBHOOK_SECRET) {
        return new Response('forbidden', { status: 403 });
      }
      try {
        await handleTelegram((await request.json()) as TelegramUpdate, env);
      } catch (err) {
        console.error('telegram update failed', err);
      }
      // Always 200, or Telegram keeps retrying the same update.
      return new Response('ok');
    }

    return new Response('email-agent ok');
  },
};

/* ------------------------------------------------------------------ */
/* Inbound mail                                                        */
/* ------------------------------------------------------------------ */

async function handleInbound(raw: ArrayBuffer, message: ForwardableEmailMessage, env: Env) {
  const parsed = await PostalMime.parse(raw);
  const brand = brandForAddress(message.to) ?? brandForAddress(parsed.to?.[0]?.address ?? '');
  if (!brand) return;

  const fromAddress = (parsed.from?.address || message.from || '').toLowerCase();
  const replyFrom = brandForAddress(message.to)?.domain === brand.domain ? message.to.toLowerCase() : brand.defaultFrom;
  const text = (parsed.text || stripHtml(parsed.html || '')).trim();

  let inbound: Inbound;
  let meta: DraftMeta;

  if (fromAddress.endsWith('@netlify.com')) {
    // A website form lead. Netlify mail is automated, so this check runs
    // before the automated-sender filter rather than being caught by it.
    const lead = parseNetlifyLead(text);
    if (!lead?.email) {
      await notify(env, `📋 ${brand.name}: ליד מהאתר בלי כתובת מייל, רק טלפון. כדאי להתקשר.\n\n${text.slice(0, 1500)}`);
      return;
    }
    inbound = {
      kind: 'form',
      fromAddress: lead.email,
      fromName: lead.name,
      subject: `Quote request: ${lead.service ?? brand.name}`,
      text: [
        lead.name && `Name: ${lead.name}`,
        lead.phone && `Phone: ${lead.phone}`,
        lead.city && `City: ${lead.city}`,
        lead.zip && `ZIP: ${lead.zip}`,
        lead.service && `Service: ${lead.service}`,
        lead.message && `Message: ${lead.message}`,
      ].filter(Boolean).join('\n'),
    };
    meta = { brand: brand.key, to: lead.email, from: replyFrom, subject: `Your ${brand.name} quote request`, ref: '' };
  } else {
    const skip = skipReason(fromAddress, (h) => message.headers.get(h));
    if (skip) {
      console.log(`no draft for ${fromAddress}: ${skip}`);
      return;
    }
    inbound = { kind: 'email', fromAddress, fromName: parsed.from?.name, subject: parsed.subject ?? '', text };
    meta = { brand: brand.key, to: fromAddress, from: replyFrom, subject: replySubject(parsed.subject ?? ''), ref: parsed.messageId ?? '' };
  }

  const draft = await draftReply(env, brand, inbound);
  const who = inbound.fromName ? `${inbound.fromName} <${inbound.fromAddress}>` : inbound.fromAddress;
  const kindLabel = inbound.kind === 'form' ? 'ליד מהאתר' : 'מייל חדש';

  if (draft.action === 'ignore') {
    await notify(env, `🚫 ${brand.name} | סומן כלא רלוונטי\nמאת: ${who}\nנושא: ${inbound.subject || '(ללא)'}\nסיבה: ${draft.reason ?? draft.summary}\n\nהמייל נמצא ב-Gmail אם זו טעות.`);
    return;
  }

  const header = `📩 ${brand.name} | ${kindLabel}\nמאת: ${who}\nנושא: ${inbound.subject || '(ללא)'}\n\n📝 ${draft.summary}`;
  await notify(env, renderApproval(header, draft.body!, meta), true);
}

/* ------------------------------------------------------------------ */
/* Telegram: approve, edit, ignore                                     */
/* ------------------------------------------------------------------ */

interface TelegramMessage {
  message_id: number;
  chat: { id: number };
  text?: string;
  reply_to_message?: TelegramMessage;
}
interface TelegramUpdate {
  message?: TelegramMessage;
  callback_query?: { id: string; data?: string; message?: TelegramMessage };
}

async function handleTelegram(update: TelegramUpdate, env: Env) {
  const owner = String(env.TELEGRAM_CHAT_ID || '');

  if (update.message) {
    const msg = update.message;
    if (msg.text?.startsWith('/start')) {
      await tg(env, 'sendMessage', { chat_id: msg.chat.id, text: `ה-chat id שלך: ${msg.chat.id}\nשמור אותו כסוד TELEGRAM_CHAT_ID.` });
      return;
    }
    if (String(msg.chat.id) !== owner) return;

    // Editing: the owner replies to a draft with the corrected text, and
    // gets a fresh draft with the same recipient and buttons.
    const original = msg.reply_to_message?.text ? readApproval(msg.reply_to_message.text) : null;
    if (original && msg.text) {
      const header = msg.reply_to_message!.text!.split(DRAFT_START)[0].trim() + '\n✏️ נוסח מתוקן';
      await notify(env, renderApproval(header, msg.text.trim(), original.meta), true);
      await tg(env, 'editMessageReplyMarkup', { chat_id: msg.chat.id, message_id: msg.reply_to_message!.message_id, reply_markup: { inline_keyboard: [] } }).catch(() => {});
    }
    return;
  }

  const cq = update.callback_query;
  if (!cq?.message || String(cq.message.chat.id) !== owner) return;
  const chat_id = cq.message.chat.id;
  const message_id = cq.message.message_id;
  const text = cq.message.text ?? '';

  if (cq.data === 'edit') {
    await tg(env, 'answerCallbackQuery', { callback_query_id: cq.id, text: 'השב (Reply) להודעה הזו עם הנוסח המתוקן, ותקבל טיוטה חדשה לאישור.', show_alert: true });
    return;
  }

  if (cq.data === 'ignore') {
    await tg(env, 'editMessageText', { chat_id, message_id, text: `${text}\n\n🗑 לא נשלח`, reply_markup: { inline_keyboard: [] } });
    await tg(env, 'answerCallbackQuery', { callback_query_id: cq.id, text: 'סומן' });
    return;
  }

  if (cq.data === 'send') {
    const draft = readApproval(text);
    const brand: Brand | undefined = draft ? BRANDS[draft.meta.from.split('@')[1]] : undefined;
    if (!draft || !brand) {
      await tg(env, 'answerCallbackQuery', { callback_query_id: cq.id, text: 'לא הצלחתי לקרוא את הטיוטה מההודעה.', show_alert: true });
      return;
    }
    // Buttons off first, so a double tap cannot send twice.
    await tg(env, 'editMessageReplyMarkup', { chat_id, message_id, reply_markup: { inline_keyboard: [] } });
    try {
      await sendEmail(env, {
        fromName: brand.name,
        from: draft.meta.from,
        to: draft.meta.to,
        subject: draft.meta.subject,
        text: draft.body,
        inReplyTo: draft.meta.ref || undefined,
      });
      await tg(env, 'editMessageText', { chat_id, message_id, text: `${text}\n\n✅ נשלח ל-${draft.meta.to}` });
      await tg(env, 'answerCallbackQuery', { callback_query_id: cq.id, text: 'נשלח' });
    } catch (err) {
      await tg(env, 'editMessageReplyMarkup', { chat_id, message_id, reply_markup: APPROVAL_BUTTONS }).catch(() => {});
      await tg(env, 'answerCallbackQuery', { callback_query_id: cq.id, text: `השליחה נכשלה: ${String(err).slice(0, 150)}`, show_alert: true });
    }
  }
}

/* ------------------------------------------------------------------ */

function stripHtml(html: string): string {
  return html
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|tr|li|h\d)>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\n{3,}/g, '\n\n');
}

async function safeNotify(env: Env, text: string) {
  try {
    if (env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID) await notify(env, text);
  } catch (err) {
    console.error('notify failed', err);
  }
}
