/**
 * Checks that the Google Ads lead conversion fires exactly once per lead,
 * on every route a lead can take, and never on anything else.
 *
 * There are only two places a lead is confirmed on this site: the popup,
 * which submits over fetch and stays on the page, and a normal form, which
 * lands on /thank-you/ or /es/gracias/. The chat has no form of its own, it
 * opens the popup, so it is covered by the first. Both report generate_lead
 * to GA4 and the conversion to Google Ads from the same spot, so the two
 * accounts are counting the same events.
 *
 * generate_lead has already been double counted once on this site, 26 events
 * from 13 users, so the reload case below is not hypothetical.
 *
 * Run against a fresh build:
 *   npm run build && node .ads-conversion.mjs
 *
 * Nothing leaves the machine: every request is served from dist/ and the
 * real gtag.js is aborted, so the assertions read window.dataLayer rather
 * than anything Google received.
 */
import { chromium } from 'playwright-core';
import { readFileSync } from 'node:fs';

const EXE = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const ROOT = '/home/user/Airductmiami/dist';
const AW = 'AW-18122873644/MAlUCPvq0vkcEKy21MFD';

const serve = async (route, req) => {
  const u = new URL(req.url());
  if (u.hostname !== 'localhost') return route.abort();          // no real gtag.js
  let p = u.pathname.endsWith('/') ? u.pathname + 'index.html' : u.pathname;
  try { return route.fulfill({ status: 200, body: readFileSync(ROOT + p), headers: { 'content-type': p.endsWith('.js') ? 'text/javascript' : p.endsWith('.css') ? 'text/css' : p.endsWith('.json') ? 'application/json' : 'text/html' } }); }
  catch { return route.fulfill({ status: 200, body: '<!doctype html><title>ok</title>' }); }
};

const conversions = (dl) => dl.filter(a => a[0] === 'event' && a[1] === 'conversion').map(a => a[2]);
const leads       = (dl) => dl.filter(a => a[0] === 'event' && a[1] === 'generate_lead');
const dump = (p) => p.evaluate(() => (window.dataLayer || []).map(a => Array.prototype.slice.call(a)));

const b = await chromium.launch({ executablePath: EXE });
let fail = 0;
const check = (n, ok, extra='') => { console.log(`${ok ? 'PASS' : 'FAIL'}  ${n}${extra ? '  ' + extra : ''}`); if (!ok) fail++; };

// ---------- 1. POPUP PATH ----------
{
  const ctx = await b.newContext();
  const p = await ctx.newPage();
  await p.route('**/*', serve);
  await p.goto('http://localhost/services/air-duct-cleaning/');
  await p.evaluate(() => { try { sessionStorage.removeItem('fbPromoShown'); } catch {} });
  await p.evaluate(() => window.dispatchEvent(new CustomEvent('fb:open-promo', { detail: { trigger: 'test', zip: '32801' } })));
  await p.waitForSelector('#promo-form', { state: 'visible', timeout: 5000 });
  await p.fill('#promo-form [name="name"]', 'Test Lead');
  await p.fill('#promo-form [name="phone"]', '4075551234');
  const zip = await p.$('#promo-form [name="zip"]'); if (zip) await zip.fill('32801');
  await p.click('#promo-form button[type="submit"]');
  await p.waitForTimeout(2500);
  const dl = await dump(p);
  const cv = conversions(dl);
  check('popup: exactly one conversion', cv.length === 1, `got ${cv.length}`);
  check('popup: exactly one generate_lead', leads(dl).length === 1, `got ${leads(dl).length}`);
  if (cv[0]) {
    check('popup: send_to', cv[0].send_to === AW, cv[0].send_to);
    check('popup: value 1.0', cv[0].value === 1.0, String(cv[0].value));
    check('popup: currency ILS', cv[0].currency === 'ILS', cv[0].currency);
    check('popup: has transaction_id', typeof cv[0].transaction_id === 'string' && cv[0].transaction_id.startsWith('lead-'), cv[0].transaction_id);
  }
  const cfg = dl.filter(a => a[0] === 'config').map(a => a[1]);
  check('AW destination configured', cfg.includes('AW-18122873644'), cfg.join(','));
  await ctx.close();
}

// ---------- 2. FORM -> THANK YOU PATH ----------
{
  const ctx = await b.newContext();
  const p = await ctx.newPage();
  await p.route('**/*', serve);
  await p.goto('http://localhost/contact/');
  await p.fill('form[name="quote"] [name="name"]', 'Test Lead');
  await p.fill('form[name="quote"] [name="phone"]', '4075551234');
  await p.fill('form[name="quote"] [name="city"]', 'Orlando');
  await Promise.all([p.waitForURL('**/thank-you/**', { timeout: 8000 }), p.click('form[name="quote"] button[type="submit"]')]);
  await p.waitForTimeout(1200);
  const dl = await dump(p);
  const cv = conversions(dl);
  check('thank-you: exactly one conversion', cv.length === 1, `got ${cv.length}`);
  check('thank-you: exactly one generate_lead', leads(dl).length === 1, `got ${leads(dl).length}`);
  if (cv[0]) check('thank-you: send_to', cv[0].send_to === AW, cv[0].send_to);
  const gl = leads(dl)[0];
  if (gl) check('thank-you: lead_id kept OUT of the GA4 event', !('lead_id' in gl[2]), Object.keys(gl[2]).join(','));

  // reload /thank-you/ : must NOT fire a second conversion
  await p.reload();
  await p.waitForTimeout(800);
  check('thank-you: reload fires nothing', conversions(await dump(p)).length === 0);
  await ctx.close();
}

// ---------- 3. SPANISH FORM -> /es/gracias/ ----------
{
  const ctx = await b.newContext();
  const p = await ctx.newPage();
  await p.route('**/*', serve);
  await p.goto('http://localhost/es/contacto/');
  await p.fill('form[name="quote-es"] [name="name"]', 'Prueba');
  await p.fill('form[name="quote-es"] [name="phone"]', '4075551234');
  await Promise.all([p.waitForURL('**/es/gracias/**', { timeout: 8000 }), p.click('form[name="quote-es"] button[type="submit"]')]);
  await p.waitForTimeout(1200);
  const dl = await dump(p);
  const cv = conversions(dl);
  check('es/gracias: exactly one conversion', cv.length === 1, `got ${cv.length}`);
  check('es/gracias: exactly one generate_lead', leads(dl).length === 1, `got ${leads(dl).length}`);
  if (cv[0]) check('es/gracias: send_to', cv[0].send_to === AW, cv[0].send_to);
  await ctx.close();
}

await b.close();
console.log(fail ? `\n${fail} FAILED` : '\nall checks passed');
process.exit(fail ? 1 : 0);
