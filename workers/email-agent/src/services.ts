/** Thin wrappers over the Telegram Bot API and the Resend API. */

export interface Env {
  XAI_API_KEY: string;
  GROK_MODEL: string;
  RESEND_API_KEY: string;
  TELEGRAM_BOT_TOKEN: string;
  TELEGRAM_CHAT_ID: string;
  TELEGRAM_WEBHOOK_SECRET: string;
  FORWARD_TO: string;
}

/* ------------------------------ Telegram ------------------------------ */

export const APPROVAL_BUTTONS = {
  inline_keyboard: [
    [
      { text: '✅ שלח', callback_data: 'send' },
      { text: '✏️ ערוך', callback_data: 'edit' },
      { text: '🗑 התעלם', callback_data: 'ignore' },
    ],
  ],
};

export async function tg(env: Env, method: string, payload: Record<string, unknown>): Promise<any> {
  const res = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = (await res.json()) as { ok: boolean; description?: string; result?: unknown };
  if (!data.ok) throw new Error(`Telegram ${method}: ${data.description}`);
  return data.result;
}

/** Plain text on purpose: no parse_mode, so nothing in an email can break the formatting. */
export function notify(env: Env, text: string, withButtons = false) {
  return tg(env, 'sendMessage', {
    chat_id: env.TELEGRAM_CHAT_ID,
    text: text.slice(0, 4096),
    disable_web_page_preview: true,
    ...(withButtons ? { reply_markup: APPROVAL_BUTTONS } : {}),
  });
}

/* ------------------------------- Resend ------------------------------- */

export interface Outgoing {
  fromName: string;
  from: string;
  to: string;
  subject: string;
  text: string;
  /** Message-ID of the customer's email, so the reply lands in the same thread. */
  inReplyTo?: string;
}

export async function sendEmail(env: Env, m: Outgoing): Promise<string> {
  const headers: Record<string, string> = {};
  if (m.inReplyTo) {
    headers['In-Reply-To'] = m.inReplyTo;
    headers['References'] = m.inReplyTo;
  }
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: `${m.fromName} <${m.from}>`,
      to: [m.to],
      reply_to: m.from,
      subject: m.subject,
      text: m.text,
      headers,
    }),
  });
  const data = (await res.json()) as { id?: string; message?: string };
  if (!res.ok || !data.id) throw new Error(`Resend ${res.status}: ${data.message ?? 'unknown error'}`);
  return data.id;
}
