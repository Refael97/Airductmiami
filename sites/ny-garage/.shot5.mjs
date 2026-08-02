import { chromium } from 'playwright-core';
const OUT = '/tmp/claude-0/-home-user-Airductmiami/f6adc180-da13-54f8-a7a4-06b618c777de/scratchpad';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
const paths = ['/', '/prices/', '/services/', '/service-areas/', '/service-areas/nassau-county/', '/service-areas/bay-ridge/', '/buyers-guide/', '/buyers-guide/jackshaft-wall-mount-openers/', '/brands/liftmaster/', '/blog/', '/blog/garage-door-repair-scams/', '/faq/', '/about/', '/contact/', '/thank-you/', '/privacy/'];
let bad = 0;
for (const path of paths) {
  for (const [dev, w, h] of [['desktop', 1440, 900], ['mobile', 390, 844]]) {
    const p = await b.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    const r = await p.goto('http://127.0.0.1:4321' + path, { waitUntil: 'domcontentloaded' });
    await p.waitForTimeout(200);
    const ov = await p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    if (r.status() !== 200 || ov > 0) { console.log('PROBLEM', path, dev, r.status(), ov); bad++; }
    await p.close();
  }
}
console.log(bad === 0 ? 'ALL OK: 16 pages, both viewports, status 200, zero horizontal overflow' : bad + ' problems');
// blog listing screenshot
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('http://127.0.0.1:4321/blog/', { waitUntil: 'networkidle' });
await p.waitForTimeout(3000);
await p.screenshot({ path: `${OUT}/ny-blog.png`, fullPage: true });
await b.close();
