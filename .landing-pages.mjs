/**
 * The campaign brief's pre-launch checklist, run against a fresh build.
 *
 * The brief's own warning is the reason this exists: "if the events don't
 * fire from these pages, the campaign is blind". A landing page that looks
 * right and reports nothing spends money for a week before anyone notices.
 *
 *   npm run build && node .landing-pages.mjs
 */
import { chromium } from 'playwright-core';
import { readFileSync } from 'node:fs';

const ROOT = '/home/user/Airductmiami/dist';
const PAGES = ['/musty-ac-smell/', '/mold-in-air-ducts/'];
const AW = 'AW-18122873644/MAlUCPvq0vkcEKy21MFD';

let fail = 0;
const check = (n, ok, extra = '') => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${n}${extra ? '  ' + extra : ''}`);
  if (!ok) fail++;
};

const serve = async (route, req) => {
  const u = new URL(req.url());
  if (u.hostname !== 'localhost') return route.abort();
  let f = u.pathname.endsWith('/') ? u.pathname + 'index.html' : u.pathname;
  const type = f.endsWith('.js') ? 'text/javascript' : f.endsWith('.css') ? 'text/css'
    : f.endsWith('.json') ? 'application/json' : f.endsWith('.webp') ? 'image/webp'
    : f.endsWith('.svg') ? 'image/svg+xml' : f.endsWith('.woff2') ? 'font/woff2' : 'text/html';
  try { return route.fulfill({ status: 200, body: readFileSync(ROOT + f), headers: { 'content-type': type } }); }
  catch { return route.fulfill({ status: 404, body: 'x' }); }
};

const dl = (p) => p.evaluate(() => (window.dataLayer || []).map((a) => Array.prototype.slice.call(a)));
const events = (d, n) => d.filter((a) => a[0] === 'event' && a[1] === n);

const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });

for (const path of PAGES) {
  console.log(`\n=== ${path}`);
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const p = await ctx.newPage();
  let posted = null;
  await p.route('**/*', async (route, req) => {
    if (req.method() === 'POST') { posted = new URLSearchParams(req.postData() || ''); return route.fulfill({ status: 200, body: 'ok' }); }
    return serve(route, req);
  });
  await p.goto('http://localhost' + path, { waitUntil: 'networkidle' });

  // 1. the sticky call bar, and it dials
  const bar = p.locator('#call-bar');
  check('sticky call bar visible on mobile', await bar.isVisible());
  check('call bar is a tel: link', (await bar.getAttribute('href') || '').startsWith('tel:'));
  const box = await bar.boundingBox();
  check('call bar is at least 56px tall', !!box && box.height >= 56, box ? `${Math.round(box.height)}px` : 'none');

  // 5. one exit only
  const out = await p.evaluate(() =>
    [...document.querySelectorAll('a[href]')]
      .map((a) => a.getAttribute('href'))
      .filter((h) => h && !h.startsWith('tel:') && !h.startsWith('#') && !h.startsWith('mailto:')));
  const allowed = out.every((h) => h === '/' || h === '/privacy/');
  check('no exit links except logo and privacy', allowed, out.join(' | '));
  check('no nav menu', (await p.locator('header nav a').count()) === 0);
  check('no popup on the page', (await p.locator('#promo-overlay').count()) === 0);
  check('no chat widget on the page', (await p.locator('.hc').count()) === 0);

  // indexable: the brief is explicit that these must not be noindex
  check('indexable', (await p.locator('meta[name="robots"]').count()) === 0);

  // 3. phone_call fires
  await p.evaluate(() => {
    const a = document.getElementById('call-bar');
    a.addEventListener('click', (e) => e.preventDefault(), true);
    a.click();
  });
  const afterCall = await dl(p);
  const calls = events(afterCall, 'phone_call');
  check('phone_call fires from the call bar', calls.length === 1, `n=${calls.length}`);
  check('phone_call placement is the call bar', calls[0]?.[2]?.placement === 'sticky_call_bar', calls[0]?.[2]?.placement);

  // 2. the form reports a lead and the Ads conversion
  await p.locator('#lqf-form [name="name"]').fill('Test Lead');
  await p.locator('#lqf-form [name="phone"]').fill('(407) 555-1234');
  await p.locator('#lqf-form [name="city"]').fill('Hollywood');
  await p.locator('#lqf-form button[type="submit"]').click();
  await p.waitForTimeout(1500);

  const after = await dl(p);
  const leads = events(after, 'generate_lead');
  const convs = events(after, 'conversion');
  check('generate_lead fires once', leads.length === 1, `n=${leads.length}`);
  check('Google Ads conversion fires once', convs.length === 1, `n=${convs.length}`);
  check('conversion send_to is the campaign action', convs[0]?.[2]?.send_to === AW, convs[0]?.[2]?.send_to);
  check('AW destination configured', after.filter((a) => a[0] === 'config').map((a) => a[1]).includes('AW-18122873644'));

  // the confirmation replaces the form and shows the phone number
  check('form hidden after submit', !(await p.locator('#lqf-form').isVisible()));
  check('confirmation shown', await p.locator('#lqf-done').isVisible());
  check('confirmation echoes their number', (await p.locator('#lqf-echo').textContent()) === '(407) 555-1234');
  check('confirmation offers the phone number', (await p.locator('#lqf-done a[href^="tel:"]').count()) === 1);

  // the lead email will say where it came from
  check('lead reaches Netlify with an origin', !!posted?.get('lead_origin'), posted?.get('lead_origin'));
  check('lead names the campaign', !!posted?.get('campaign'), posted?.get('campaign'));

  await ctx.close();
}

await b.close();
console.log(fail ? `\n${fail} FAILED` : '\nall checks passed');
process.exit(fail ? 1 : 0);
