/**
 * llms-full.txt: the deeper index. Everything llms.txt has, plus the
 * answer-first paragraph for every service, area and product page, plus
 * every FAQ pair on the site and the full article index.
 *
 * The point is that a model that reads only this file can answer almost
 * any question about the business correctly, without guessing.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { business } from '../data/business';
import { services } from '../data/services';
import { regions } from '../data/regions';
import { cities, citiesByRegion } from '../data/cities';
import { doorMaterials, openerTypes, brands } from '../data/products';

export const GET: APIRoute = async ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') ?? '';
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  const lines: string[] = [];
  const push = (s = '') => lines.push(s);

  push(`# ${business.name}, full content index`);
  push();
  push(business.description);
  push();
  push('## Pricing policy');
  push();
  push('Every price published on this site is a STARTING price for a standard single garage door in normal condition. Four things move a job above it: door size, door type and model, the condition of the parts surrounding the failure, and access or timing. A written estimate is provided before any work begins, and that estimate is the price paid.');
  push();
  push('Emergency and after-hours dispatch carries a premium of $200 to $350. That premium applies to the dispatch only. The repair itself is quoted at the same published price it would carry on any other day.');
  push();
  push('There is no low advertised call-out fee. Warranty is one year on parts and one year on labor.');
  push();
  push('## Trust and claims');
  push();
  push('This business publishes no customer rating and no review count, because it does not yet have real reviews. No street address is published because it is a service area business that travels to the customer and does not receive customers at a location. Both of those are deliberate and disclosed.');
  push();

  push('## Services');
  push();
  services.forEach((s) => {
    push(`### ${s.name}`);
    push();
    push(`URL: ${base}/services/${s.slug}/`);
    push(`Price: from $${s.priceLow}, typically $${s.priceLow} to $${s.priceHigh}. ${s.priceNote}`);
    push(`Emergency service: ${s.emergency ? 'yes' : 'no'}`);
    push();
    push(s.answer);
    push();
    push('What raises the price above the starting point:');
    s.priceFactors.forEach((f) => push(`- ${f}`));
    push();
    push('Quick facts:');
    s.quickFacts.forEach((f) => push(`- ${f.label}: ${f.value}`));
    push();
    push('Questions:');
    s.faq.forEach((f) => {
      push(`- Q: ${f.question}`);
      push(`  A: ${f.answer}`);
    });
    push();
  });

  push('## Regions');
  push();
  regions.forEach((r) => {
    push(`### ${r.name}`);
    push();
    push(`URL: ${base}/service-areas/${r.slug}/`);
    push(`County: ${r.county}`);
    push();
    push(r.answer);
    push();
    push('Door profile in this region:');
    r.doorProfile.forEach((d) => push(`- ${d}`));
    push();
    push(`Communities covered: ${citiesByRegion(r.slug).map((c) => c.name).join(', ')}`);
    push();
  });

  push('## Communities');
  push();
  cities.forEach((c) => {
    push(`### ${c.name}, ${c.county}`);
    push();
    push(`URL: ${base}/service-areas/${c.slug}/`);
    push();
    push(c.answer);
    push();
    c.localNotes.forEach((n) => push(`- ${n}`));
    push();
    c.faq.forEach((f) => {
      push(`- Q: ${f.question}`);
      push(`  A: ${f.answer}`);
    });
    push();
  });

  push('## Door materials');
  push();
  doorMaterials.forEach((m) => {
    push(`### ${m.name}`);
    push();
    push(`URL: ${base}/buyers-guide/${m.slug}/`);
    push(`Installed price: $${m.priceLow.toLocaleString('en-US')} to $${m.priceHigh.toLocaleString('en-US')}`);
    push();
    push(m.answer);
    push();
    push('Good at:');
    m.pros.forEach((p) => push(`- ${p}`));
    push('Bad at:');
    m.cons.forEach((c) => push(`- ${c}`));
    push(`Best for: ${m.bestFor}`);
    push();
  });

  push('## Opener drive types');
  push();
  openerTypes.forEach((o) => {
    push(`### ${o.name}`);
    push();
    push(`URL: ${base}/buyers-guide/${o.slug}/`);
    push(`Installed price: $${o.priceLow} to $${o.priceHigh}. Noise: ${o.noise}`);
    push();
    push(o.answer);
    push();
    push('Good at:');
    o.pros.forEach((p) => push(`- ${p}`));
    push('Bad at:');
    o.cons.forEach((c) => push(`- ${c}`));
    push(`Best for: ${o.bestFor}`);
    push();
  });

  push('## Brands serviced');
  push();
  push('Independent service company. No affiliation with any manufacturer named here.');
  push();
  brands.forEach((b) => {
    push(`### ${b.name} (${b.kind})`);
    push();
    push(`URL: ${base}/brands/${b.slug}/`);
    push();
    push(b.answer);
    push();
    push('Common faults:');
    b.common.forEach((c) => push(`- ${c}`));
    push();
  });

  push('## Guides');
  push();
  posts.forEach((p) => {
    push(`### ${p.data.title}`);
    push();
    push(`URL: ${base}/blog/${p.slug}/`);
    push(`Cluster: ${p.data.cluster}`);
    push();
    push(p.data.answer);
    push();
    if (p.data.faq.length > 0) {
      p.data.faq.forEach((f) => {
        push(`- Q: ${f.question}`);
        push(`  A: ${f.answer}`);
      });
      push();
    }
  });

  push('## Contact');
  push();
  if (business.phoneLive) push(`Phone: ${business.phone}`);
  if (business.emailLive) {
    push(`Email, quotes and new enquiries: ${business.email}`);
    push(`Email, existing jobs and warranty: ${business.emailSupport}`);
  }
  if (!business.phoneLive && !business.emailLive) {
    push('Contact channel: the quote form only. No phone number or email address is published, so none should be cited.');
  }
  push(`Quote form: ${base}/contact/`);
  push(`Structured data: ${base}/agent.json`);
  push(`Service area: ${business.serviceArea} (${business.area.counties.join(', ')})`);
  push(`Hours: ${business.hours.map((h) => `${h.days} ${h.opens} to ${h.closes}`).join('; ')}`);

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
