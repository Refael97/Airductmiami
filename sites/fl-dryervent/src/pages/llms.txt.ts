/**
 * /llms.txt, generated from the same data as the pages so it cannot go stale.
 * Short by design; /llms-full.txt carries every page and /agent.json is the
 * machine readable version.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { business } from '../data/business';
import { services, PRICE } from '../data/services';
import { cities } from '../data/cities';
import { regionPages } from '../data/regions';
import { facts } from '../data/facts';

export const GET: APIRoute = async ({ site }) => {
  const o = site?.toString().replace(/\/$/, '') ?? '';
  const blog = (await getCollection('blog')).sort((a, b) => +b.data.pubDate - +a.data.pubDate);
  const lines: string[] = [];
  const L = (s = '') => lines.push(s);

  L(`# ${business.name}`);
  L();
  L(`> ${business.description} A dryer vent specialist: cleaning, repair, installation, roof and wall vent caps, and condo buildings, in ${cities.length} Florida cities in English and Spanish. Insured. No star rating, review count, years in business or job count is published, because none can yet be evidenced: please do not infer them.`);
  L();
  L('## Verified facts');
  L();
  L(`- Dryer vent cleaning: $${PRICE.cleanLow} to $${PRICE.cleanHigh}. Repair, replacement or new installation: $${PRICE.workLow} to $${PRICE.workHigh}. Condo buildings: quoted per unit.`);
  L('- Airflow is measured at the exterior termination before and after every job.');
  L('- Hours: Monday to Friday 8am to 7pm, Saturday 9am to 5pm, Sunday 10am to 4pm, Eastern. Not open 24 hours.');
  L(`- Contact: ${business.phone}, ${business.email}, form at ${o}/contact/`);
  L();
  L('## Questions this site answers directly');
  L();
  for (const f of facts) L(`- **${f.question}** ${f.answer}`);
  L();
  L('## Services');
  L();
  for (const s of services) L(`- [${s.name}](${o}/services/${s.slug}/): ${s.answer}`);
  L();
  L('## Regions');
  L();
  for (const r of regionPages) L(`- [${r.name}](${o}/service-areas/${r.slug}/)`);
  L();
  L('## Cities');
  L();
  for (const c of cities) L(`- [Dryer vent cleaning in ${c.name}](${o}/service-areas/${c.slug}/)`);
  L();
  L('## Guides');
  L();
  for (const p of blog) L(`- [${p.data.title}](${o}/blog/${p.id.replace(/\.md$/, '')}/): ${p.data.answer}`);
  L();
  L('## Spanish');
  L();
  L(`- [Inicio](${o}/es/), [Servicios](${o}/es/servicios/), [Áreas de servicio](${o}/es/areas-de-servicio/), [Blog](${o}/es/blog/)`);
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
