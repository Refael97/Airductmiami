import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });

// 1. localhost must be skipped
const l = await b.newPage();
await l.goto('http://127.0.0.1:4321/', { waitUntil: 'domcontentloaded' });
await l.waitForTimeout(400);
console.log('on 127.0.0.1  -> gtag defined:', await l.evaluate(() => typeof window.gtag === 'function'), '(want false)');
await l.close();

// 2. a production-looking hostname must initialise. Map the real host to the
//    local server so the guard sees the production hostname.
const ctx = await b.newContext();
await ctx.route('**/gtag/js*', r => r.fulfill({ status: 200, contentType: 'application/javascript', body: '' }));
const p = await ctx.newPage();
await p.route('https://garage-door-fixers.com/**', async (route) => {
  const path = new URL(route.request().url()).pathname;
  const res = await fetch('http://127.0.0.1:4321' + path);
  route.fulfill({ status: 200, contentType: 'text/html', body: await res.text() });
});
await p.goto('https://garage-door-fixers.com/', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(400);
console.log('on prod host  -> gtag defined:', await p.evaluate(() => typeof window.gtag === 'function'), '(want true)');
console.log('               dataLayer entries:', await p.evaluate(() => (window.dataLayer || []).length), '(want 2: js + config)');
console.log('               config id:', await p.evaluate(() => { const c=[...window.dataLayer].find(a=>a[0]==='config'); return c ? c[1] : 'none'; }));

// 3. phone_call fires on a tel: click
await p.evaluate(() => {
  const a = document.createElement('a');
  a.href = 'tel:+15160000000'; a.textContent = 'x'; a.id = 'tel-probe';
  document.body.appendChild(a);
});
await p.evaluate(() => document.getElementById('tel-probe').click());
console.log('               phone_call pushed:', await p.evaluate(() => [...window.dataLayer].some(a => a[1] === 'phone_call')), '(want true)');
await b.close();
