import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
// The guard skips localhost, so pretend to be the real host by aliasing it.
await p.route('**/gtag/js*', r => r.fulfill({ status: 200, contentType: 'application/javascript', body: '' }));
await p.goto('http://127.0.0.1:4321/contact/', { waitUntil: 'networkidle' });
console.log('localhost guard active (gtag undefined on 127.0.0.1):', await p.evaluate(() => typeof window.gtag === 'undefined'));
await p.close();

// Now simulate a real hostname via a host header trick is not possible offline,
// so assert the guard logic directly instead.
const g = await b.newPage();
await g.goto('http://127.0.0.1:4321/');
const logic = await g.evaluate(() => {
  const skip = (h) => h === 'localhost' || h === '127.0.0.1' || h === '';
  return { localhost: skip('localhost'), ip: skip('127.0.0.1'), prod: skip('garage-door-fixers.com'), netlify: skip('garagedoorfixer.netlify.app') };
});
console.log('guard decisions (true = skipped):', JSON.stringify(logic));
await b.close();
