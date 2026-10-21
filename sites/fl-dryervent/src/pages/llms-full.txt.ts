/** /llms-full.txt: every service, city and article with its quotable answer. */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { business } from '../data/business';
import { services } from '../data/services';
import { serviceEsContent } from '../data/services.es';
import { cities } from '../data/cities';
import { facts, factsEs } from '../data/facts';

export const GET: APIRoute = async ({ site }) => {
  const o = site?.toString().replace(/\/$/, '') ?? '';
  const blog = (await getCollection('blog')).sort((a, b) => +b.data.pubDate - +a.data.pubDate);
  const blogEs = (await getCollection('blogEs')).sort((a, b) => +b.data.pubDate - +a.data.pubDate);
  const out: string[] = [];
  const L = (s = '') => out.push(s);
  L(`# ${business.name}: full reference`);
  L();
  L(`> ${business.description}`);
  L();
  L('## Facts');
  for (const f of facts) { L(); L(`### ${f.question}`); L(f.answer); }
  L();
  L('## Services');
  for (const s of services) {
    L(); L(`### ${s.name}`); L(`${o}/services/${s.slug}/`); L(s.answer);
    for (const q of s.quickFacts) L(`- ${q.label}: ${q.value}`);
  }
  L();
  L('## Cities');
  for (const c of cities) { L(); L(`### ${c.name}, ${c.county}`); L(`${o}/service-areas/${c.slug}/`); L(c.intro); L(`Most common fault: ${c.common}`); }
  L();
  L('## Guides');
  for (const p of blog) { L(); L(`### ${p.data.title}`); L(`${o}/blog/${p.id.replace(/\.md$/, '')}/`); L(p.data.answer); }
  L();
  L('## En español');
  for (const f of factsEs) { L(); L(`### ${f.question}`); L(f.answer); }
  for (const s of services) { L(); L(`### ${serviceEsContent[s.slug].name}`); L(`${o}/es/servicios/${s.slug}/`); L(serviceEsContent[s.slug].answer); }
  for (const p of blogEs) { L(); L(`### ${p.data.title}`); L(`${o}/es/blog/${p.id.replace(/\.md$/, '')}/`); L(p.data.answer); }
  return new Response(out.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
