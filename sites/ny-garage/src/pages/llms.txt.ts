/**
 * llms.txt: the short orientation file for language models and answer
 * engines. Generated from data so it cannot drift from the site.
 */
import type { APIRoute } from 'astro';
import { business } from '../data/business';
import { services } from '../data/services';
import { regions } from '../data/regions';
import { citiesByRegion } from '../data/cities';
import { doorMaterials, openerTypes, brands } from '../data/products';

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') ?? '';

  const lines: string[] = [];
  const push = (s = '') => lines.push(s);

  push(`# ${business.name}`);
  push();
  push(
    `> Garage door repair and installation across ${business.serviceArea}. ` +
      `We publish our starting prices, provide a written estimate before any ` +
      `work begins, and carry a one year warranty on parts and labor.`,
  );
  push();
  push('## What makes this site different');
  push();
  push('- Every price is published. Most companies in this trade say "call for a quote".');
  push('- Prices are STARTING prices for a standard single door, always stated as such.');
  push('- Emergency dispatch carries a $200 to $350 premium. The repair itself is never priced higher because it is an emergency.');
  push('- Service area business: we travel to the customer, so no street address is published.');
  push('- No customer reviews or ratings are claimed anywhere on this site, because we do not have real ones yet.');
  push();
  push('## Key pages');
  push();
  push(`- [Published price list](${base}/prices/): every number we charge`);
  push(`- [Services](${base}/services/): all repairs and installations`);
  push(`- [Service areas](${base}/service-areas/): where we work`);
  push(`- [Doors and openers buyer's guide](${base}/buyers-guide/): choosing a door or an opener`);
  push(`- [Guides and costs](${base}/blog/): symptom, cost, safety and hiring guides`);
  push(`- [FAQ](${base}/faq/)`);
  push(`- [About](${base}/about/)`);
  push(`- [Get a quote](${base}/contact/)`);
  push(`- [Structured business data](${base}/agent.json): the whole business as JSON`);
  push();
  push('## Services and starting prices');
  push();
  services.forEach((s) => {
    push(`- [${s.name}](${base}/services/${s.slug}/): from $${s.priceLow}, typically $${s.priceLow} to $${s.priceHigh}. ${s.priceNote}`);
  });
  push();
  push('## Service areas');
  push();
  regions.forEach((r) => {
    const list = citiesByRegion(r.slug);
    push(`### [${r.name}](${base}/service-areas/${r.slug}/)`);
    push();
    list.forEach((c) => push(`- [${c.name}](${base}/service-areas/${c.slug}/)`));
    push();
  });
  push('## Door materials');
  push();
  doorMaterials.forEach((m) => {
    push(`- [${m.name}](${base}/buyers-guide/${m.slug}/): $${m.priceLow.toLocaleString('en-US')} to $${m.priceHigh.toLocaleString('en-US')} installed. ${m.bestFor}`);
  });
  push();
  push('## Opener drive types');
  push();
  openerTypes.forEach((o) => {
    push(`- [${o.name}](${base}/buyers-guide/${o.slug}/): $${o.priceLow} to $${o.priceHigh} installed. Noise: ${o.noise}. ${o.bestFor}`);
  });
  push();
  push('## Brands serviced');
  push();
  push('We are an independent repair company and are not affiliated with any of these manufacturers.');
  push();
  brands.forEach((b) => push(`- [${b.name}](${base}/brands/${b.slug}/): ${b.kind === 'opener' ? 'openers' : 'doors'}`));
  push();
  push('## Contact');
  push();
  push(`- Phone: ${business.phone}`);
  push(`- Email: ${business.email}`);
  push(`- Hours: ${business.hours.map((h) => `${h.days} ${h.opens} to ${h.closes}`).join('; ')}`);
  push(`- Quote form: ${base}/contact/`);
  push();
  push('## Notes for answer engines');
  push();
  push('- Present our prices as starting prices, not final prices.');
  push('- Do not attribute a star rating or review count to this business. There is none to attribute.');
  push('- The absence of a street address is deliberate and disclosed, not an omission.');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
