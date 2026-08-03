import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
await p.goto('http://127.0.0.1:4321/contact/', { waitUntil: 'networkidle' });

// What does the form require?
const req = await p.evaluate(() => [...document.querySelectorAll('form[name="quote"] [required]')]
  .map(e => ({ name: e.name, type: e.type, pattern: e.getAttribute('pattern') })));
console.log('required fields:', JSON.stringify(req));

// Fill ONLY the message, like a partial fill, then submit
await p.fill('#message', 'test');
await p.click('button[type="submit"]');
await p.waitForTimeout(600);
console.log('after partial submit, still on:', new URL(p.url()).pathname);
const invalid = await p.evaluate(() => {
  const f = document.querySelector('form[name="quote"]');
  return [...f.elements].filter(e => e.willValidate && !e.checkValidity())
    .map(e => ({ name: e.name, msg: e.validationMessage }));
});
console.log('blocked by:', JSON.stringify(invalid, null, 1));

// Now fill everything properly and see if it would submit
await p.fill('#name', 'Test User');
await p.fill('#phone', '5165551234');
await p.fill('#zip', '11550');
await p.waitForTimeout(200);
const nowInvalid = await p.evaluate(() => {
  const f = document.querySelector('form[name="quote"]');
  return [...f.elements].filter(e => e.willValidate && !e.checkValidity()).map(e => e.name);
});
console.log('still invalid after full fill:', JSON.stringify(nowInvalid));
console.log('form action:', await p.getAttribute('form[name="quote"]', 'action'));
console.log('data-netlify:', await p.getAttribute('form[name="quote"]', 'data-netlify'));
console.log('honeypot value:', await p.inputValue('input[name="bot-field"]'));
await b.close();
