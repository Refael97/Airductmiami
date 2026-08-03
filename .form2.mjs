import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
await p.goto('http://127.0.0.1:4321/contact/', { waitUntil: 'networkidle' });
await p.locator('button[type="submit"]').scrollIntoViewIfNeeded();
await p.fill('#message', 'spring snapped this morning');
await p.click('button[type="submit"]');
await p.waitForTimeout(900);
console.log('error shown :', await p.locator('#form-error').isVisible());
console.log('error text  :', (await p.locator('#form-error').textContent()).trim());
console.log('focused     :', await p.evaluate(() => document.activeElement && document.activeElement.name));
console.log('field in view:', await p.locator('#name').isInViewport());

await p.fill('#name', 'Test User'); await p.fill('#phone', '5165551234'); await p.fill('#zip', '115');
await p.locator('button[type="submit"]').scrollIntoViewIfNeeded();
await p.click('button[type="submit"]');
await p.waitForTimeout(700);
console.log('bad zip msg :', (await p.locator('#form-error').textContent()).trim());

await p.fill('#zip', '11550');
await p.waitForTimeout(300);
console.log('cleared     :', await p.locator('#form-error').isHidden());
const nav = p.waitForNavigation({ timeout: 4000 }).then(() => 'submitted').catch(() => 'BLOCKED');
await p.click('button[type="submit"]');
console.log('valid submit:', await nav);
await b.close();
