import { chromium } from 'playwright-core';
const OUT = '/tmp/claude-0/-home-user-Airductmiami/f6adc180-da13-54f8-a7a4-06b618c777de/scratchpad';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
for (const [name, path] of [['prices','/prices/'],['service','/services/garage-door-spring-replacement/'],['city','/service-areas/hempstead/'],['contact','/contact/']]) {
  const p = await b.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  await p.goto('http://127.0.0.1:4321' + path, { waitUntil: 'networkidle' });
  await p.waitForTimeout(3000);
  const hidden = await p.evaluate(() => [...document.querySelectorAll('[data-anim]')].filter(e => !e.classList.contains('is-in')).length);
  console.log(name, 'still hidden:', hidden);
  await p.screenshot({ path: `${OUT}/ny-${name}.png`, fullPage: true });
  await p.close();
}
await b.close();
