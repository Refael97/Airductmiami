/**
 * What this site reports to GA4, and how many times it reports it.
 *
 * The sister site had two faults on exactly this ground and this site had
 * both. the lead event fired on every load of a thank-you page, so refreshes,
 * back-button returns and bookmarks were all counted as leads; and it
 * described the thank-you page rather than the form, so every lead looked
 * like it came from `contact_form` whichever surface it actually used.
 *
 * Google's rule on key events is also checked here: a key event whose
 * `value` or `currency` is missing "is recorded with the correct count, but
 * it won't be sent to Google Ads". An event that counts in Analytics and
 * cannot be bid on is half an event, so both parameters are asserted on
 * every surface.
 *
 * There is also a fault specific to this site. The quote wizard validates in
 * its own submit handler and calls preventDefault on an out-of-area ZIP, a
 * too-fast fill or a sales pitch. A rejected submission must leave no trace:
 * if it wrote a note, a later visit to the thank-you page would fire a
 * conversion for a lead that was never sent.
 *
 *   npm run build && node .ga-conversions.mjs
 */
import { chromium } from 'playwright-core';
import { readFileSync } from 'node:fs';

const EXE = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const ROOT = new URL('./dist', import.meta.url).pathname;

/* The tag skips localhost so development traffic never reaches the property,
   which is right and makes the site untestable on localhost. Served under a
   hostname that is neither, with every request answered from dist. */
const HOST = 'http://gdf.test';

const serve = async (route, req) => {
  const u = new URL(req.url());
  if (u.hostname !== 'gdf.test') return route.abort();
  const p = u.pathname.endsWith('/') ? u.pathname + 'index.html' : u.pathname;
  try {
    return route.fulfill({
      status: 200,
      body: readFileSync(ROOT + p),
      headers: {
        'content-type': p.endsWith('.js') ? 'text/javascript'
          : p.endsWith('.css') ? 'text/css'
          : p.endsWith('.json') ? 'application/json'
          : 'text/html',
      },
    });
  } catch {
    return route.fulfill({ status: 404, body: 'missing' });
  }
};

let fail = 0;
const check = (n, ok, extra = '') => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${n}${extra ? '  ' + extra : ''}`);
  if (!ok) fail++;
};

const b = await chromium.launch({ executablePath: EXE });

/**
 * A context that swallows real network calls.
 *
 * Nothing is stubbed. The layout defines its own `gtag` and calls that local
 * function directly, so intercepting `window.gtag` would have watched a door
 * nobody uses — which is exactly what the first version of this file did, and
 * it reported zero events while the site was working correctly. Every path,
 * the layout's and the popup's alike, ends in a push to `dataLayer`, so that
 * is what gets read. gtag.js itself never loads here (the route handler
 * aborts anything off-host), which leaves dataLayer a plain array.
 */
async function session() {
  const ctx = await b.newContext();
  const p = await ctx.newPage();
  await p.route('**/*', async (route, req) => {
    if (req.method() === 'POST') return route.fulfill({ status: 200, body: 'ok' });
    return serve(route, req);
  });
  return { ctx, p };
}

const events = (p, name) =>
  p.evaluate(
    (n) =>
      Array.from(window.dataLayer || [])
        .map((a) => Array.prototype.slice.call(a))
        .filter((a) => a[0] === 'event' && a[1] === n)
        .map((a) => ({ name: a[1], params: a[2] || {} })),
    name,
  );

/* ---- 1. The quote wizard: one lead, described by the form -------------- */
{
  console.log('\n--- quote wizard, valid submission');
  const { ctx, p } = await session();
  await p.goto(HOST + '/contact/');
  // The wizard rejects a fill faster than four seconds as a bot.
  await p.waitForTimeout(4300);
  const wrote = await p.evaluate(() => {
    const f = document.querySelector('form[data-booking]');
    if (!f) return 'no form';
    const set = (n, v) => { const el = f.querySelector(`[name="${n}"]`); if (el) el.value = v; };
    set('zip', '33012');
    set('name', 'Test Lead');
    set('phone', '3055551234');
    const radio = f.querySelector('[name="job_type"]');
    if (radio) radio.checked = true;
    const svc = f.querySelector('[name="service"]');
    if (svc && svc.options.length) svc.selectedIndex = 1;
    f.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    try { return sessionStorage.getItem('gdLeadPending'); } catch { return 'storage blocked'; }
  });
  check('a valid submit leaves a note', !!wrote && wrote.startsWith('{'), String(wrote).slice(0, 70));
  const note = JSON.parse(wrote);
  check('the note names the form, not the thank-you page', note.page_path === '/contact/', `page_path=${note.page_path}`);
  check('the note carries the source', note.source === 'contact_form' || !!note.source, `source=${note.source}`);
  check('the note carries the ZIP', note.lead_zip === '33012', `lead_zip=${note.lead_zip}`);
  check('the note carries a lead id', typeof note.lead_id === 'string' && note.lead_id.startsWith('lead-'));

  // Same session, now land on the thank-you page as the form would.
  await p.goto(HOST + '/thank-you/');
  let leads = await events(p, 'new_lead');
  check('thank-you fires exactly one new_lead', leads.length === 1, `got ${leads.length}`);
  if (leads.length) {
    const prm = leads[0].params;
    check('the event describes the form', prm.page_path === '/contact/', `page_path=${prm.page_path}`);
    check('lead_id is kept out of the GA4 event', !('lead_id' in prm));
    check('the shape matches the documented dimensions',
      ['form_type', 'service', 'lead_city', 'source', 'site_language', 'page_path'].every((k) => k in prm));
    check('it carries a numeric value', typeof prm.value === 'number', `value=${prm.value}`);
    check('and a currency, or Ads drops it', prm.currency === 'USD', `currency=${prm.currency}`);
  }

  // The bug this replaces: a reload used to count as a second lead.
  await p.reload();
  leads = await events(p, 'new_lead');
  check('a reload fires nothing', leads.length === 0, `got ${leads.length}`);
  await p.goto(HOST + '/thank-you/');
  leads = await events(p, 'new_lead');
  check('a second visit fires nothing', leads.length === 0, `got ${leads.length}`);
  await ctx.close();
}

/* ---- 2. A direct visit in a clean session ------------------------------ */
{
  console.log('\n--- thank-you reached with no lead behind it');
  const { ctx, p } = await session();
  await p.goto(HOST + '/thank-you/');
  check('a direct visit fires nothing', (await events(p, 'new_lead')).length === 0);
  await p.goto(HOST + '/es/gracias/');
  check('the Spanish page fires nothing either', (await events(p, 'new_lead')).length === 0);
  await ctx.close();
}

/* ---- 3. A submission the wizard rejected ------------------------------- */
{
  console.log('\n--- quote wizard, rejected submission');
  const { ctx, p } = await session();
  await p.goto(HOST + '/contact/');
  await p.waitForTimeout(4300);
  const wrote = await p.evaluate(() => {
    const f = document.querySelector('form[data-booking]');
    const set = (n, v) => { const el = f.querySelector(`[name="${n}"]`); if (el) el.value = v; };
    /* A Californian ZIP: outside the service area, so the wizard stops it. */
    set('zip', '90210');
    set('name', 'Test Lead');
    set('phone', '3055551234');
    f.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    try { return sessionStorage.getItem('gdLeadPending'); } catch { return null; }
  });
  check('a rejected submit leaves no note', wrote === null, `note=${wrote}`);
  await p.goto(HOST + '/thank-you/');
  check('and so fires no conversion', (await events(p, 'new_lead')).length === 0);
  await ctx.close();
}

/* ---- 4. The popup reports itself, once -------------------------------- */
{
  console.log('\n--- promo popup');
  const { ctx, p } = await session();
  await p.goto(HOST + '/services/garage-door-spring-replacement/');
  await p.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight * 0.6));
  await p.waitForSelector('#promo-form', { state: 'visible', timeout: 5000 });
  await p.fill('#promo-form [name="name"]', 'Test Lead');
  await p.fill('#promo-form [name="phone"]', '3055551234');
  await p.fill('#promo-form [name="zip"]', '33012');
  await p.click('#promo-form button[type="submit"]');
  await p.waitForTimeout(1200);

  check('the form is hidden after submit', !(await p.locator('#promo-form').isVisible()));
  check('the confirmation is visible', await p.locator('#promo-success').isVisible());

  const leads = await events(p, 'new_lead');
  check('the popup fires exactly one new_lead', leads.length === 1, `got ${leads.length}`);
  if (leads.length) {
    const prm = leads[0].params;
    check('it is named as the popup', prm.form_type === 'popup_special', `form_type=${prm.form_type}`);
    check('the offer maps to a job', prm.service === 'Garage Door Spring Repair', `service=${prm.service}`);
    check('it carries the ZIP', prm.lead_zip === '33012', `lead_zip=${prm.lead_zip}`);
    check('it reports the page it was shown on',
      prm.page_path === '/services/garage-door-spring-replacement/', `page_path=${prm.page_path}`);
    check('it carries a numeric value', typeof prm.value === 'number', `value=${prm.value}`);
    check('and a currency, or Ads drops it', prm.currency === 'USD', `currency=${prm.currency}`);
  }

  // The popup stays on the page, so it must not also leave a note.
  const note = await p.evaluate(() => { try { return sessionStorage.getItem('gdLeadPending'); } catch { return null; } });
  check('the popup leaves no note to fire later', note === null, `note=${note}`);
  await p.goto(HOST + '/thank-you/');
  check('so the thank-you page stays silent', (await events(p, 'new_lead')).length === 0);
  await ctx.close();
}

/* ---- 5. Phone taps, with the surface that earned them ------------------ */
{
  console.log('\n--- phone taps');
  const { ctx, p } = await session();
  await p.goto(HOST + '/');
  /* Whichever tel: link the page puts first. Asserting on `header` here
     would have been asserting on the home page's layout: it carries no
     click-to-call inside <header> at all, which is worth knowing and is not
     this file's business. */
  const tapped = await p.evaluate(() => {
    const a = document.querySelector('a[href^="tel:"]');
    if (!a) return false;
    a.removeAttribute('target');
    a.addEventListener('click', (e) => e.preventDefault());
    a.click();
    return true;
  });
  check('the page has a click-to-call at all', tapped);
  const taps = await events(p, 'phone_call');
  check('a tap is recorded', taps.length === 1, `got ${taps.length}`);
  if (taps.length) {
    const known = ['help_widget', 'header', 'footer', 'promo_popup', 'booking_modal', 'sidebar', 'page_body'];
    check('and says which surface earned it', known.includes(taps[0].params.placement), `placement=${taps[0].params.placement}`);
    check('it carries a numeric value', typeof taps[0].params.value === 'number', `value=${taps[0].params.value}`);
    check('and a currency, or Ads drops it', taps[0].params.currency === 'USD', `currency=${taps[0].params.currency}`);
    /* The old second event on the same click is gone: two names for one tap
       is how a property ends up with two call numbers and no tie-breaker. */
    check('no second event fires on the same tap', (await events(p, 'phone_call_tap')).length === 0);
  }
  await ctx.close();
}

/* ---- 6. Google Ads stays inert until there is an account --------------- */
{
  console.log('\n--- google ads');
  const { ctx, p } = await session();
  await p.goto(HOST + '/');
  const conv = await events(p, 'conversion');
  check('no conversion is sent while adsId is empty', conv.length === 0, `got ${conv.length}`);
  const wired = await p.evaluate(() => typeof window.gdLeadConversion === 'function' && typeof window.gdNewLeadId === 'function');
  check('but the hooks exist, ready for the id', wired);
  await ctx.close();
}

await b.close();
console.log(fail ? `\n${fail} FAILED` : '\nall checks passed');
process.exit(fail ? 1 : 0);
