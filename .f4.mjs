import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
const posts = [];
p.on('request', r => { if (r.method() === 'POST') posts.push({ url: r.url(), body: r.postData() }); });
await p.goto('http://127.0.0.1:4321/contact/', { waitUntil: 'networkidle' });

await p.fill('#name', 'Test User');
await p.fill('#phone', '5165551234');
await p.fill('#zip', '11550');
await p.selectOption('#symptom', { index: 1 });
console.log('form valid before click:', await p.evaluate(() => document.querySelector('form[name="quote"]').checkValidity()));
await p.click('button[type="submit"]');
await p.waitForTimeout(2500);

console.log('POST requests fired:', posts.length);
if (posts.length) {
  const body = posts[0].body || '';
  console.log('  to        :', new URL(posts[0].url).pathname);
  console.log('  form-name :', /form-name=([^&]*)/.exec(body)?.[1]);
  console.log('  site_id   :', /site_id=([^&]*)/.exec(body)?.[1]);
  console.log('  vertical  :', /vertical=([^&]*)/.exec(body)?.[1]);
  console.log('  zip       :', /(?:^|&)zip=([^&]*)/.exec(body)?.[1]);
  console.log('  bot-field :', JSON.stringify(/bot-field=([^&]*)/.exec(body)?.[1]));
}
await b.close();
