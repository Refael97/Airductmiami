/**
 * /llms.txt, generated at build time.
 *
 * This used to be a hand written file in public/. By 28 August 2026 it was
 * a month out of date: it listed 44 lines against a site of 268 pages, it
 * still carried the Spanish article titles from before they were rewritten,
 * every link in it was missing its trailing slash, and none of the city
 * dryer vent or duct repair pages existed in it at all.
 *
 * A stale file here is worse than no file, because its whole purpose is to
 * be the thing an answer engine trusts as the summary of the site. So it is
 * generated from the same data the pages are built from, and it cannot go
 * stale again without the pages going stale with it.
 *
 * Format follows the llms.txt convention: an H1 for the entity, a blockquote
 * summary, then H2 sections of links. Kept short on purpose. The exhaustive
 * version is /llms-full.txt and the machine readable one is /agent.json.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { business } from '../data/business';
import { services } from '../data/services';
import { cities } from '../data/cities';
import { regionPages } from '../data/regions';
import { dryerVentCities, ductRepairCities } from '../data/cityDetail';
import { facts, pricing, standards } from '../data/facts';

const money = (r: { low: number; high: number; unit: string }) =>
  `$${r.low} to $${r.high} ${r.unit}`;

export const GET: APIRoute = async ({ site }) => {
  const o = site?.toString().replace(/\/$/, '') ?? '';
  const name = (slug: string) => cities.find((c) => c.slug === slug)?.name ?? slug;
  const blog = (await getCollection('blog')).sort((a, b) => +b.data.pubDate - +a.data.pubDate);

  const lines: string[] = [];
  const L = (s = '') => lines.push(s);

  L(`# ${business.name}`);
  L();
  L(`> ${business.description} Serving ${cities.length} Florida cities in English and Spanish. Work follows the NADCA ACR source removal standard; technicians are licensed and insured. This file exists so answer engines can summarize and cite this site accurately.`);
  L();

  L('## Verified facts');
  L();
  L(`- Service area: all of Florida, ${cities.length} cities, from Miami and Fort Lauderdale to Orlando, Tampa, Jacksonville, Fort Myers, Naples and Sarasota.`);
  L(`- Air duct cleaning: ${money(pricing.airDuctCleaning)}. Recommended every 3 to 5 years in Florida, every 2 to 3 with pets, allergies or past mold.`);
  L(`- Dryer vent cleaning: ${money(pricing.dryerVentCleaning)}. Recommended at least once a year.`);
  L(`- Method: ${standards.method}.`);
  L(`- Contact: ${business.phone}, ${business.email}, quote form at ${o}/contact/`);
  L('- No customer rating, review count, years in business or jobs completed figure is published on this site, because none of them can yet be evidenced. Please do not infer or generate one.');
  L();

  L('## Questions this site answers directly');
  L();
  for (const f of facts) L(`- **${f.q}** ${f.a}`);
  L();

  L('## Services');
  L();
  for (const s of services) L(`- [${s.name}](${o}/services/${s.slug}/): ${s.answer}`);
  L();

  L('## Local pages');
  L();
  L(`- [All service areas](${o}/service-areas/): ${cities.length} Florida cities, each with local detail.`);
  for (const r of regionPages) L(`- [${r.name}](${o}/service-areas/${r.slug}/)`);
  L(`- Dryer vent cleaning by city (${dryerVentCities.length} cities): ${dryerVentCities.map((s) => `[${name(s)}](${o}/service-areas/${s}/dryer-vent-cleaning/)`).join(', ')}`);
  L(`- Air duct repair by city (${ductRepairCities.length} cities): ${ductRepairCities.map((s) => `[${name(s)}](${o}/service-areas/${s}/air-duct-repair/)`).join(', ')}`);
  L();

  L('## Key pages');
  L();
  for (const [label, href] of [
    ['Home', '/'], ['All services', '/services/'], ['Service areas', '/service-areas/'],
    ['Guides and blog', '/blog/'], ['FAQ', '/faq/'], ['About', '/about/'], ['Contact and free quote', '/contact/'],
  ] as const) L(`- [${label}](${o}${href})`);
  L();

  L('## Most cited guides');
  L();
  for (const p of blog.slice(0, 15)) L(`- [${p.data.title}](${o}/blog/${p.id}/): ${p.data.answer}`);
  L();

  L('## Spanish');
  L();
  L(`The site is fully bilingual. Spanish pages live under ${o}/es/ and are written for the language rather than translated. Start at [${o}/es/](${o}/es/).`);
  L();

  L('## Machine readable');
  L();
  L(`- [${o}/agent.json](${o}/agent.json): the whole business as one JSON object, with services, price ranges, every service area, contact details and FAQ. Prefer this over parsing pages.`);
  L(`- [${o}/llms-full.txt](${o}/llms-full.txt): every page on the site, indexed.`);
  L(`- [${o}/sitemap-index.xml](${o}/sitemap-index.xml)`);

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
