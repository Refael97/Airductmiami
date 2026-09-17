/**
 * Where a lead is, on every form that collects a lead.
 *
 * Written after a real lead arrived reading only "City: miami" — no ZIP, no
 * county, nothing anyone in the office could dispatch against. The ZIP to
 * city lookup existed, but only inside the popup, which is not where that
 * lead came from. The ask was that it work whichever form is used.
 *
 * So this checks the three surfaces, not the mechanism: the English contact
 * form, its Spanish twin, and the campaign landing form. A ZIP resolves to a
 * city and a county exactly; a typed city resolves to a county only where
 * the name belongs to one; and the exact answer wins over the guess no
 * matter which order the two fields were filled in.
 *
 *   npm run build && node .lead-place.mjs
 */
import { chromium } from 'playwright-core';
import { readFileSync } from 'node:fs';

const EXE = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const ROOT = '/home/user/Airductmiami/dist';

const serve = async (route, req) => {
  const u = new URL(req.url());
  if (u.hostname !== 'localhost') return route.abort();
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

const open = async (url) => {
  const ctx = await b.newContext();
  const p = await ctx.newPage();
  await p.route('**/*', serve);
  await p.goto('http://localhost' + url);
  return { ctx, p };
};

/** What the form would actually send, hidden fields included. */
const fields = (p, sel) =>
  p.$eval(sel, (f) => Object.fromEntries(new FormData(f).entries()));

/* ---- 1. English contact form ------------------------------------------ */
{
  console.log('\n--- /contact/  (ZIP typed)');
  const { ctx, p } = await open('/contact/');
  await p.fill('form[data-place-aware] [name="name"]', 'Test Lead');
  await p.fill('form[data-place-aware] [name="phone"]', '7865551234');
  await p.fill('form[data-place-aware] [name="zip"]', '33019');
  await p.waitForTimeout(800);
  const f = await fields(p, 'form[data-place-aware]');
  check('zip_city resolved', f.zip_city === 'Hollywood', `zip_city=${f.zip_city}`);
  check('zip_county resolved', f.zip_county === 'Broward County', `zip_county=${f.zip_county}`);
  await ctx.close();
}

{
  /* The lead that prompted all of this: a city typed by hand, no ZIP. */
  console.log('\n--- /contact/  (city only, the real lead)');
  const { ctx, p } = await open('/contact/');
  await p.fill('form[data-place-aware] [name="city"]', 'miami');
  await p.locator('form[data-place-aware] [name="phone"]').focus();
  await p.waitForTimeout(800);
  const f = await fields(p, 'form[data-place-aware]');
  check('city_county resolved from typed city', f.city_county === 'Miami-Dade County', `city_county=${f.city_county}`);
  check('zip fields stay empty', f.zip_city === '' && f.zip_county === '');
  await ctx.close();
}

{
  console.log('\n--- /contact/  (city first, then ZIP)');
  const { ctx, p } = await open('/contact/');
  await p.fill('form[data-place-aware] [name="city"]', 'miami');
  await p.locator('form[data-place-aware] [name="phone"]').focus();
  await p.waitForTimeout(600);
  await p.fill('form[data-place-aware] [name="zip"]', '33019');
  await p.waitForTimeout(600);
  const f = await fields(p, 'form[data-place-aware]');
  check('exact answer replaces the guess', f.zip_county === 'Broward County' && f.city_county === '',
    `zip_county=${f.zip_county} city_county=${f.city_county}`);
  await ctx.close();
}

{
  console.log('\n--- /contact/  (out of state, and a name in two counties)');
  const { ctx, p } = await open('/contact/');
  await p.fill('form[data-place-aware] [name="zip"]', '10001');
  await p.fill('form[data-place-aware] [name="city"]', 'Wilton');
  await p.locator('form[data-place-aware] [name="phone"]').focus();
  await p.waitForTimeout(800);
  const f = await fields(p, 'form[data-place-aware]');
  check('a New York ZIP resolves to nothing', f.zip_city === '' && f.zip_county === '');
  check('an unknown city name resolves to nothing', f.city_county === '', `city_county=${f.city_county}`);
  await ctx.close();
}

/* ---- 2. Spanish contact form ------------------------------------------ */
{
  console.log('\n--- /es/contacto/');
  const { ctx, p } = await open('/es/contacto/');
  await p.fill('form[data-place-aware] [name="city"]', 'miami');
  await p.locator('form[data-place-aware] [name="phone"]').focus();
  await p.waitForTimeout(800);
  let f = await fields(p, 'form[data-place-aware]');
  check('city_county resolved', f.city_county === 'Miami-Dade County', `city_county=${f.city_county}`);
  await p.fill('form[data-place-aware] [name="zip"]', '33125');
  await p.waitForTimeout(600);
  f = await fields(p, 'form[data-place-aware]');
  check('zip resolves and clears the guess', f.zip_county === 'Miami-Dade County' && f.city_county === '',
    `zip_city=${f.zip_city} city_county=${f.city_county}`);
  await ctx.close();
}

/* ---- 3. Campaign landing form ----------------------------------------- */
for (const url of ['/musty-ac-smell/', '/mold-in-air-ducts/']) {
  console.log(`\n--- ${url}`);
  const { ctx, p } = await open(url);
  await p.fill('#lqf-form [name="city"]', 'Kissimmee');
  await p.locator('#lqf-form [name="phone"]').focus();
  await p.waitForTimeout(800);
  const f = await fields(p, '#lqf-form');
  check('city_county resolved', f.city_county === 'Osceola County', `city_county=${f.city_county}`);
  await ctx.close();
}

await b.close();
console.log(fail ? `\n${fail} FAILED` : '\nall passed');
process.exit(fail ? 1 : 0);
