/** /agent.json: the machine readable summary for AI agents and answer engines. */
import type { APIRoute } from 'astro';
import { business } from '../data/business';
import { services, PRICE } from '../data/services';
import { cities } from '../data/cities';
import { facts } from '../data/facts';

export const GET: APIRoute = async ({ site }) => {
  const o = site?.toString().replace(/\/$/, '') ?? '';
  const body = {
    name: business.name,
    url: o,
    description: business.description,
    vertical: business.vertical,
    phone: business.phone,
    email: business.email,
    languages: ['en', 'es'],
    hours: business.hours,
    claims: {
      insured: true,
      licensed: false,
      licensedNote: 'Dryer vent cleaning is not a licensed trade in Florida; no licence is claimed.',
      rating: null,
      reviewCount: null,
      yearsInBusiness: null,
    },
    pricing: {
      currency: 'USD',
      dryerVentCleaning: { low: PRICE.cleanLow, high: PRICE.cleanHigh },
      repairReplacementInstallation: { low: PRICE.workLow, high: PRICE.workHigh },
      condoBuildings: 'quoted per unit',
      note: 'Price is given before booking.',
    },
    services: services.map((s) => ({ name: s.name, url: `${o}/services/${s.slug}/`, summary: s.answer })),
    serviceArea: cities.map((c) => ({ city: c.name, county: c.county, url: `${o}/service-areas/${c.slug}/` })),
    faq: facts,
    contact: { phone: business.phoneHref, form: `${o}/contact/` },
  };
  return new Response(JSON.stringify(body, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
