import { chromium } from 'playwright-core';
const OUT = '/tmp/claude-0/-home-user-Airductmiami/f6adc180-da13-54f8-a7a4-06b618c777de/scratchpad';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
for (const [n, w, h] of [['d', 1440, 900], ['m', 390, 844]]) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  await p.goto('http://127.0.0.1:4321/', { waitUntil: 'networkidle' });
  await p.waitForTimeout(3000);
  const ov = await p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  console.log(n, 'overflow', ov);
  if (n === 'd') {
    await p.locator('.doors-band').scrollIntoViewIfNeeded();
    await p.waitForTimeout(700);
    await p.screenshot({ path: `${OUT}/doors-band.png` });
    await p.locator('.emergency-band').scrollIntoViewIfNeeded();
    await p.waitForTimeout(500);
    await p.screenshot({ path: `${OUT}/emerg-band.png` });
  }
  await p.close();
}
await b.close();
