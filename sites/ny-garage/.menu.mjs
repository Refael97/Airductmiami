import { chromium } from 'playwright-core';
const OUT = '/tmp/claude-0/-home-user-Airductmiami/f6adc180-da13-54f8-a7a4-06b618c777de/scratchpad';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });

for (const [label, idx] of [['services', 0], ['doors', 1], ['areas', 2]]) {
  const p = await b.newPage({ viewport: { width: 1440, height: 950 } });
  await p.goto('http://127.0.0.1:4321/', { waitUntil: 'networkidle' });
  await p.waitForTimeout(400);
  const items = p.locator('.has-menu');
  await items.nth(idx).locator('.nav-link').hover();
  await p.waitForTimeout(450);
  const vis = await items.nth(idx).locator('.mega').isVisible();
  const ov = await p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  console.log(label, 'panel visible:', vis, '| overflow:', ov);
  await p.screenshot({ path: `${OUT}/menu-${label}.png` });
  await p.close();
}

// keyboard: tab into the first menu link and confirm the panel opens
const k = await b.newPage({ viewport: { width: 1440, height: 950 } });
await k.goto('http://127.0.0.1:4321/', { waitUntil: 'networkidle' });
await k.locator('.has-menu').first().locator('.nav-link').focus();
await k.waitForTimeout(350);
console.log('keyboard focus opens panel:', await k.locator('.has-menu').first().locator('.mega').isVisible());
await k.close();

// mobile: panels must be off and nav still usable
const m = await b.newPage({ viewport: { width: 390, height: 844 } });
await m.goto('http://127.0.0.1:4321/', { waitUntil: 'networkidle' });
const megaShown = await m.evaluate(() => [...document.querySelectorAll('.mega')].some(e => getComputedStyle(e).display !== 'none'));
const navCount = await m.locator('.site-nav .nav-link').count();
const mov = await m.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
console.log('mobile: any panel displayed:', megaShown, '| nav links:', navCount, '| overflow:', mov);
await m.screenshot({ path: `${OUT}/menu-mobile.png` });
await b.close();
