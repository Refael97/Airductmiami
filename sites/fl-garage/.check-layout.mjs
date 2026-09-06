/**
 * Layout check: horizontal overflow at real phone widths.
 *
 * The launch checklist requires zero horizontal overflow at 375px and
 * 390px, verified in a real browser rather than by reading a media query.
 * A page that scrolls sideways on a phone is the most common way a build
 * that looks fine on a laptop is broken for most of its visitors.
 *
 * Also reports the widest element on any page that overflows, because
 * "the page is 40px too wide" is not actionable and "the price table is
 * 40px too wide" is.
 *
 * Run against a preview server: `npm run preview` then `node .check-layout.mjs`.
 */
import { chromium } from 'playwright-core';

const BASE = process.env.BASE ?? 'http://127.0.0.1:4321';
const WIDTHS = [375, 390, 1280];

/** A page from each template, in both languages. */
const PAGES = [
  '/',
  '/prices/',
  '/services/',
  '/services/hurricane-rated-garage-door-installation/',
  '/service-areas/',
  '/service-areas/miami-dade-county/',
  '/service-areas/hialeah/',
  '/buyers-guide/',
  '/buyers-guide/steel-garage-doors/',
  '/brands/liftmaster/',
  '/blog/',
  '/blog/hurricane-rated-garage-door-cost/',
  '/faq/',
  '/about/',
  '/contact/',
  '/thank-you/',
  '/privacy/',
  '/404/',
  '/es/',
  '/es/precios/',
  '/es/servicios/hurricane-rated-garage-door-installation/',
  '/es/areas-de-servicio/hialeah/',
  '/es/guia-de-compra/steel-garage-doors/',
  '/es/blog/costo-puerta-garaje-para-huracanes/',
  '/es/preguntas-frecuentes/',
  '/es/contacto/',
];

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  args: ['--no-sandbox'],
});

let failures = 0;

for (const width of WIDTHS) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  const bad = [];

  for (const path of PAGES) {
    const res = await page.goto(BASE + path, { waitUntil: 'load' });
    if (!res || res.status() >= 400) {
      bad.push({ path, note: `HTTP ${res ? res.status() : 'no response'}` });
      continue;
    }
    const result = await page.evaluate((vw) => {
      const doc = document.documentElement;
      const overflow = doc.scrollWidth - vw;
      if (overflow <= 1) return null;
      // Name the widest offender rather than just the page.
      let worst = null;
      for (const el of document.querySelectorAll('body *')) {
        const r = el.getBoundingClientRect();
        const right = r.right + window.scrollX;
        if (right > vw + 1 && (!worst || right > worst.right)) {
          worst = {
            right: Math.round(right),
            tag: el.tagName.toLowerCase(),
            cls: (el.className || '').toString().split(' ').filter(Boolean).slice(0, 2).join('.'),
          };
        }
      }
      return { overflow, worst };
    }, width);
    if (result) {
      bad.push({
        path,
        note: `overflows by ${result.overflow}px, widest: ${result.worst ? `${result.worst.tag}.${result.worst.cls} to ${result.worst.right}px` : 'unknown'}`,
      });
    }
  }

  if (bad.length === 0) {
    console.log(`${width}px: ${PAGES.length} pages, no horizontal overflow.`);
  } else {
    failures += bad.length;
    console.log(`${width}px: ${bad.length} of ${PAGES.length} pages have a problem`);
    for (const b of bad) console.log(`  ${b.path}\n    ${b.note}`);
  }
  await page.close();
}

await browser.close();
process.exit(failures === 0 ? 0 : 1);
