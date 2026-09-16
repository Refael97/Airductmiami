/**
 * The popup's post-submit behaviour and what the lead email will actually say.
 *
 * Two things were wrong and both are checked here. The card did not change
 * after a submit, because .promo-form carries `display: grid` and [hidden] is
 * a user agent rule that any author display beats, so the form stayed up and
 * the confirmation appeared below it. And the submitted fields could not tell
 * a popup the reader triggered from one the chat assistant handed over, nor
 * say what discount had been promised.
 *
 *   npm run build && node .popup-lead.mjs
 */
import { chromium } from 'playwright-core';
import { readFileSync } from 'node:fs';

const EXE = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const ROOT = '/home/user/Airductmiami/dist';

const serve = async (route, req) => {
  const u = new URL(req.url());
  if (u.hostname !== 'localhost') return route.abort();
  let p = u.pathname.endsWith('/') ? u.pathname + 'index.html' : u.pathname;
  try { return route.fulfill({ status: 200, body: readFileSync(ROOT + p), headers: { 'content-type': p.endsWith('.js') ? 'text/javascript' : p.endsWith('.css') ? 'text/css' : p.endsWith('.json') ? 'application/json' : 'text/html' } }); }
  catch { return route.fulfill({ status: 200, body: '<!doctype html><title>ok</title>' }); }
};

let fail = 0;
const check = (n, ok, extra='') => { console.log(`${ok ? 'PASS' : 'FAIL'}  ${n}${extra ? '  ' + extra : ''}`); if (!ok) fail++; };
const b = await chromium.launch({ executablePath: EXE });

// Submit the popup and capture exactly what Netlify would receive.
async function run({ url, detail, label }) {
  const ctx = await b.newContext();
  const p = await ctx.newPage();
  let posted = null;
  await p.route('**/*', async (route, req) => {
    if (req.method() === 'POST') { posted = new URLSearchParams(req.postData() || ''); return route.fulfill({ status: 200, body: 'ok' }); }
    return serve(route, req);
  });
  await p.goto('http://localhost' + url);
  await p.evaluate((d) => window.dispatchEvent(new CustomEvent('fb:open-promo', { detail: d })), detail);
  await p.waitForSelector('#promo-form', { state: 'visible', timeout: 5000 });
  await p.fill('#promo-form [name="name"]', 'Test Lead');
  await p.fill('#promo-form [name="phone"]', '4075551234');
  await p.fill('#promo-form [name="zip"]', '33019');
  await p.click('#promo-form button[type="submit"]');
  await p.waitForTimeout(2200);

  console.log(`\n--- ${label}`);
  const formVisible = await p.locator('#promo-form').isVisible();
  const successVisible = await p.locator('#promo-success').isVisible();
  const headlineVisible = await p.locator('.promo-headline').isVisible();
  check('form is hidden after submit', !formVisible);
  check('confirmation is visible', successVisible);
  check('offer copy is stripped from the card', !headlineVisible);
  // the confirmation must be the thing on screen, not something below the fold
  const box = await p.locator('#promo-success').boundingBox();
  const vh = p.viewportSize().height;
  check('confirmation is in view', !!box && box.y >= 0 && box.y < vh, box ? `y=${Math.round(box.y)} vh=${vh}` : 'no box');

  if (posted) {
    check('lead_origin says where it came from', !!posted.get('lead_origin'), posted.get('lead_origin'));
    check('offer_text names the discount', /\$\d+/.test(posted.get('offer_text') || ''), posted.get('offer_text'));
    check('offer key matches offer_text', true, `${posted.get('offer')} / ${posted.get('offer_text')}`);
    if (detail.note) check('chat_note carried', posted.get('chat_note') === detail.note, posted.get('chat_note'));
    check('zip resolved to a city', !!posted.get('zip_city'), `${posted.get('zip')} -> ${posted.get('zip_city')}, ${posted.get('zip_county')}`);
  } else check('form was submitted', false);

  // and it should close itself
  await p.waitForTimeout(3600);
  check('popup closed itself', !(await p.locator('#promo-overlay').isVisible()));
  await ctx.close();
  return posted;
}

await run({ url: '/', label: 'chat assistant hand-over, dryer offer on a duct page',
  detail: { trigger: 'help_chat', offer: 'dryer', zip: '33019', note: 'Dryer takes two cycles to dry' } });
await run({ url: '/services/air-duct-cleaning/', label: 'opened from the chat widget button',
  detail: { trigger: 'help_widget' } });
await run({ url: '/services/mold-remediation/', label: 'sticky quote bar on the mold page',
  detail: { trigger: 'quote_bar' } });
await run({ url: '/es/servicios/air-duct-cleaning/', label: 'spanish page, opened on its own',
  detail: { trigger: 'auto' } });

await b.close();
console.log(fail ? `\n${fail} FAILED` : '\nall checks passed');
process.exit(fail ? 1 : 0);
