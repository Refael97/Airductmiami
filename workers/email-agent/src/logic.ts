/**
 * The pure parts of the agent: deciding whether a message should get a
 * reply at all, reading a website lead out of a Netlify notification, and
 * the text format of the Telegram approval message.
 *
 * Kept free of Worker APIs so it can be tested with plain `node --test`.
 */

import { OUR_DOMAINS } from './brands.ts';

export type HeaderLookup = (name: string) => string | null;

/**
 * Mail that must never get an automatic draft. Everything still reaches the
 * owner's Gmail; this only decides whether Grok is asked to write a reply.
 *
 * The reason is loops and noise. A reply to an out of office reply produces
 * another out of office reply, and two automated mailboxes will happily
 * write to each other all night.
 */
export function skipReason(fromAddress: string, header: HeaderLookup): string | null {
  const from = fromAddress.toLowerCase();
  const domain = from.split('@')[1] ?? '';
  const local = from.split('@')[0] ?? '';

  if (OUR_DOMAINS.includes(domain)) return 'sent from one of our own domains';
  if (/^(no-?reply|do-?not-?reply|mailer-daemon|postmaster|bounces?|notifications?|alerts?)([+.-]|$)/.test(local)) {
    return 'automated sender';
  }

  const autoSubmitted = header('auto-submitted');
  if (autoSubmitted && autoSubmitted.toLowerCase() !== 'no') return 'auto-submitted message';
  const precedence = (header('precedence') ?? '').toLowerCase();
  if (['bulk', 'list', 'junk', 'auto_reply'].includes(precedence)) return `precedence ${precedence}`;
  if (header('list-unsubscribe') || header('list-id')) return 'mailing list or newsletter';
  if (header('x-autoreply') || header('x-autorespond')) return 'auto reply';

  return null;
}

export interface FormLead {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  zip?: string;
  service?: string;
  message?: string;
}

/**
 * Netlify form notifications arrive from formresponses@netlify.com with the
 * fields laid out as "Label:" on one line and the value on the next (or on
 * the same line). The customer's own address is in there, so a website
 * lead can be answered by email too, which is the fastest reply most of
 * them will get from anyone.
 */
export function parseNetlifyLead(text: string): FormLead | null {
  const lines = text.replace(/\r/g, '').split('\n').map((l) => l.trim());
  const fields: Record<string, string> = {};
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^([A-Za-z][A-Za-z _-]{0,30}):\s*(.*)$/);
    if (!m) continue;
    const key = m[1].toLowerCase().replace(/[\s-]+/g, '_');
    let value = m[2];
    if (!value) {
      // Value on the following non-empty line, unless that line is itself a label.
      let j = i + 1;
      while (j < lines.length && !lines[j]) j++;
      if (j < lines.length && !/^[A-Za-z][A-Za-z _-]{0,30}:\s*/.test(lines[j])) value = lines[j];
    }
    if (value && !(key in fields)) fields[key] = value;
  }
  const email = fields.email?.match(/[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+/)?.[0];
  if (!email) return null;
  return {
    name: fields.name,
    email,
    phone: fields.phone,
    city: fields.city,
    zip: fields.zip,
    service: fields.service,
    message: fields.message,
  };
}

/* ------------------------------------------------------------------ */
/* Telegram approval message                                           */
/* ------------------------------------------------------------------ */

/**
 * Everything needed to send the reply later is written into the approval
 * message itself, below a marker, so there is no database to keep in step.
 * The owner sees exactly what will be sent and to whom.
 */
export interface DraftMeta {
  brand: string;
  to: string;
  from: string;
  subject: string;
  ref: string;
}

export const DRAFT_START = '──── טיוטה ────';
export const META_START = '──── פרטי שליחה ────';

export function renderApproval(header: string, body: string, meta: DraftMeta): string {
  const metaLines = [
    `#to ${meta.to}`,
    `#from ${meta.from}`,
    `#subject ${meta.subject}`,
    `#brand ${meta.brand}`,
    `#ref ${meta.ref || '-'}`,
  ].join('\n');
  // Telegram's limit is 4096 characters; the draft is what gets trimmed.
  const room = 3900 - header.length - metaLines.length;
  const draft = body.length > room ? body.slice(0, room) : body;
  return `${header}\n\n${DRAFT_START}\n${draft}\n\n${META_START}\n${metaLines}`;
}

export function readApproval(text: string): { body: string; meta: DraftMeta } | null {
  const d = text.indexOf(DRAFT_START);
  const m = text.indexOf(META_START);
  if (d < 0 || m < 0 || m < d) return null;
  const body = text.slice(d + DRAFT_START.length, m).trim();
  const metaText = text.slice(m + META_START.length);
  const get = (k: string) => metaText.match(new RegExp(`^#${k} (.*)$`, 'm'))?.[1]?.trim() ?? '';
  const meta: DraftMeta = {
    to: get('to'),
    from: get('from'),
    subject: get('subject'),
    brand: get('brand'),
    ref: get('ref') === '-' ? '' : get('ref'),
  };
  if (!meta.to || !meta.from || !body) return null;
  return { body, meta };
}

export function replySubject(subject: string): string {
  const s = (subject || '').trim();
  if (!s) return 'Your request';
  return /^re:/i.test(s) ? s : `Re: ${s}`;
}

/**
 * Every address a message is copied to: the owner's Gmail first, then each
 * address in COPY_TO (comma separated), without duplicates.
 */
export function copyDestinations(forwardTo: string | undefined, copyTo: string | undefined): string[] {
  const all = [forwardTo ?? '', ...(copyTo ?? '').split(',')]
    .map((a) => a.trim().toLowerCase())
    .filter((a) => a.includes('@'));
  return [...new Set(all)];
}
