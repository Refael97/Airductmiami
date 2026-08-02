import { chromium } from 'playwright-core';
const OUT = '/tmp/claude-0/-home-user-Airductmiami/f6adc180-da13-54f8-a7a4-06b618c777de/scratchpad';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
const pages = [
  ['prices', '/prices/'],
  ['service', '/services/garage-door-spring-replacement/'],
  ['city', '/service-areas/hempstead/'],
  ['guide', '/buyers-guide/steel-garage-doors/'],
  ['contact', '/contact/'],
  ['article', '/blog/garage-door-spring-replacement-cost/'],
];
for (const [name, path] of pages) {
  for (const [dev, w, h] of [['d', 1440, 900], ['m', 390, 844]]) {
    const p = await b.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    const r = await p.goto('http://127.0.0.1:4321' + path, { waitUntil: 'networkidle' });
    const ov = await p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    console.log(name, dev, 'status', r.status(), 'overflow', ov);
    if (dev === 'd') await p.screenshot({ path: `${OUT}/ny-${name}.png`, fullPage: true });
    await p.close();
  }
}
await b.close();
