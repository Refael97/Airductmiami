/**
 * Spend guards for the chat endpoint.
 *
 * The token caps in chat.mts bound what one request can cost. They do not
 * bound how many requests one visitor can send, and nothing else did either:
 * the 24 message limit is a history window, not a request limit. A script
 * looping on the endpoint was the difference between a few dollars a day and
 * an unbounded overnight bill, which is the only reason this file exists.
 *
 * Two guards, because they fail differently.
 *
 * The per visitor cap stops one bad actor without touching anyone else. The
 * daily cap is the backstop for everything the first one misses: a botnet on
 * many addresses, a bug on our side that retries in a loop, or simply a day
 * with far more real traffic than expected. Whatever the cause, the site
 * stops spending and starts showing the phone number.
 *
 * Counting is deliberately approximate. Read then write is not atomic, so
 * two requests arriving in the same instant can both read the same count and
 * both be allowed. That costs at most a few extra requests under a race,
 * which is nothing against what this prevents, and the alternative is a
 * locking scheme with its own failure modes on a path that must stay fast.
 *
 * If the blob store is unavailable the request is ALLOWED. A visitor with a
 * broken garage door should not be turned away because a counter is down,
 * and the daily cap is the thing standing between us and a real bill anyway.
 */
import { getStore } from '@netlify/blobs';

/** Messages one address may send in a rolling window. */
export const PER_IP_LIMIT = 30;
export const PER_IP_WINDOW_MS = 60 * 60 * 1000;

/**
 * Messages the whole site may send in a day. At the worst case cost of one
 * request this is a bounded daily exposure rather than an open tap; at
 * realistic cost it is far more than a day of genuine traffic.
 */
export const DAILY_LIMIT = 2000;

export type Verdict =
  | { ok: true }
  | { ok: false; reason: 'per_ip' | 'daily'; retryAfter: number };

interface Counter {
  count: number;
  resetAt: number;
}

/** The address Netlify resolves for the client, however the request arrived. */
export function clientIp(request: Request): string {
  return (
    request.headers.get('x-nf-client-connection-ip') ||
    (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() ||
    'unknown'
  );
}

/** UTC day key. A fixed boundary everywhere beats a local one that moves. */
function today(): string {
  return new Date().toISOString().slice(0, 10);
}

async function bump(
  store: ReturnType<typeof getStore>,
  key: string,
  limit: number,
  windowMs: number,
  now: number,
): Promise<{ allowed: boolean; retryAfter: number }> {
  const existing = (await store.get(key, { type: 'json', consistency: 'strong' })) as Counter | null;

  const counter: Counter =
    existing && existing.resetAt > now ? existing : { count: 0, resetAt: now + windowMs };

  if (counter.count >= limit) {
    return { allowed: false, retryAfter: Math.ceil((counter.resetAt - now) / 1000) };
  }

  counter.count += 1;
  await store.setJSON(key, counter);
  return { allowed: true, retryAfter: 0 };
}

/**
 * Counts this request against both limits and says whether to serve it.
 * Call once per request, before spending anything upstream.
 */
export async function check(request: Request): Promise<Verdict> {
  const now = Date.now();

  let store: ReturnType<typeof getStore>;
  try {
    store = getStore({ name: 'chat-limits', consistency: 'strong' });
  } catch {
    return { ok: true };
  }

  try {
    /* Daily first. When the site is over its budget for the day, nobody gets
       through, so there is no reason to touch the per address counter. */
    const day = await bump(store, `day:${today()}`, DAILY_LIMIT, 24 * 60 * 60 * 1000, now);
    if (!day.allowed) return { ok: false, reason: 'daily', retryAfter: day.retryAfter };

    const ip = await bump(store, `ip:${clientIp(request)}`, PER_IP_LIMIT, PER_IP_WINDOW_MS, now);
    if (!ip.allowed) return { ok: false, reason: 'per_ip', retryAfter: ip.retryAfter };

    return { ok: true };
  } catch {
    /* Fail open. See the note at the top: a counter being down is not a
       reason to refuse someone whose door is stuck. */
    return { ok: true };
  }
}
