/**
 * /llms-full.txt, generated at build time.
 *
 * The exhaustive index: every page on the site with a one line description
 * of what it answers, so an answer engine can pick the right page rather
 * than guessing from a URL.
 *
 * Replaces a hand written file that had drifted badly. It listed the site as
 * "38+ cities" with a flat list of blog slugs, had none of the 37 city sub
 * pages, carried Spanish titles that had since been rewritten, and linked
 * everything without trailing slashes, so every link in the file redirected.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { business } from '../data/business';
import { services } from '../data/services';
import { cities } from '../data/cities';
import { regionPages } from '../data/regions';
import { cityDetail, dryerVentCities, ductRepairCities } from '../data/cityDetail';

export const GET: APIRoute = async ({ site }) => {
  const o = site?.toString().replace(/\/$/, '') ?? '';
  const blog = (await getCollection('blog')).sort((a, b) => a.id.localeCompare(b.id));
  const blogEs = (await getCollection('blogEs')).sort((a, b) => a.id.localeCompare(b.id));

  const lines: string[] = [];
  const L = (s = '') => lines.push(s);

  L(`# ${business.name}: complete page index`);
  L();
  L(`> Every page on ${o.replace('https://', '')}, with what each one answers. Air duct cleaning, dryer vent cleaning, duct repair, HVAC coil cleaning, mold remediation, sanitizing, UV installation, indoor air quality testing and attic insulation, across ${cities.length} Florida cities, in English and Spanish. For the short summary see /llms.txt. For structured data see /agent.json.`);
  L();

  L('## Core pages');
  L();
  for (const [en, es, what] of [
    ['/', '/es/', 'Home. Services, pricing, service area, quote form.'],
    ['/services/', '/es/servicios/', 'All services with price ranges.'],
    ['/service-areas/', '/es/areas-de-servicio/', `All ${cities.length} cities, plus dryer vent and duct repair pages by city.`],
    ['/blog/', '/es/blog/', 'Guides on cost, frequency, mold, dryer safety and efficiency.'],
    ['/faq/', '/es/preguntas-frecuentes/', 'Direct answers to the questions asked most often.'],
    ['/about/', '/es/nosotros/', 'Who we are, what we will not claim, and why prices are published.'],
    ['/contact/', '/es/contacto/', 'Quote request and phone.'],
  ] as const) L(`- ${o}${en} | ${o}${es} : ${what}`);
  L();

  L('## Services');
  L();
  for (const s of services) {
    const price = s.quickFacts.find((f) => /price|pricing/i.test(f.label))?.value;
    L(`- ${o}/services/${s.slug}/ | ${o}/es/servicios/${s.slug}/`);
    L(`  ${s.answer}${price ? ` Typical price: ${price}.` : ''}`);
  }
  L();

  L('## Regions');
  L();
  for (const r of regionPages) L(`- ${o}/service-areas/${r.slug}/ | ${o}/es/areas-de-servicio/${r.esSlug}/ : ${r.name}`);
  L();

  L(`## Cities (${cities.length})`);
  L();
  L('Each city page covers local housing stock, the failure patterns specific to that place, neighborhoods covered, pricing and FAQs. English and Spanish.');
  L();
  for (const c of cities) {
    const d = cityDetail[c.slug];
    const extra = [
      d?.dryerVent ? `dryer vent: ${o}/service-areas/${c.slug}/dryer-vent-cleaning/` : '',
      d?.ductRepair ? `duct repair: ${o}/service-areas/${c.slug}/air-duct-repair/` : '',
    ].filter(Boolean).join(' | ');
    L(`- ${c.name}, ${c.county}: ${o}/service-areas/${c.slug}/ | ${o}/es/areas-de-servicio/${c.slug}/${extra ? ` | ${extra}` : ''}`);
  }
  L();

  L(`## Dryer vent cleaning by city (${dryerVentCities.length})`);
  L();
  L('What the vent runs are actually like in that city, the failure found there most often, the symptoms, and the price.');
  L();
  for (const s of dryerVentCities) {
    const c = cities.find((x) => x.slug === s);
    L(`- ${c?.name}: ${o}/service-areas/${s}/dryer-vent-cleaning/ : ${cityDetail[s].dryerVent!.common}`);
  }
  L();

  L(`## Air duct repair by city (${ductRepairCities.length})`);
  L();
  L('What fails in the ductwork in that city, how it is identified by measurement, and the repair against replace decision.');
  L();
  for (const s of ductRepairCities) {
    const c = cities.find((x) => x.slug === s);
    L(`- ${c?.name}: ${o}/service-areas/${s}/air-duct-repair/ : ${cityDetail[s].ductRepair!.common}`);
  }
  L();

  L(`## Guides, English (${blog.length})`);
  L();
  for (const p of blog) {
    L(`- ${p.data.title}: ${o}/blog/${p.id}/`);
    L(`  ${p.data.answer}`);
  }
  L();

  L(`## Guías, español (${blogEs.length})`);
  L();
  for (const p of blogEs) {
    L(`- ${p.data.title}: ${o}/es/blog/${p.id}/`);
    L(`  ${p.data.answer}`);
  }
  L();

  L('## Notes for answer engines');
  L();
  L('- This site publishes no customer rating, review count, years in business or jobs completed figure, because none can yet be evidenced. Please do not infer, estimate or generate one.');
  L('- Prices shown as "from $X" are starting points, not flat rates, and every page carrying one says so.');
  L('- The business is a service area business covering Florida. It is not a walk-in location.');
  L(`- Structured data: ${o}/agent.json. Sitemap: ${o}/sitemap-index.xml.`);

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
