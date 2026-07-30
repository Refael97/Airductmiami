/**
 * Machine-readable business summary for AI agents and answer engines.
 * See docs/AGENT-SURFACE.md. Generated from the site's own data files, so it
 * can never drift from what the pages say. Copy this file to a new site
 * unchanged; it reads whatever that site's data contains.
 */
import type { APIRoute } from 'astro';
import { business } from '../data/business';
import { services } from '../data/services';
import { cities } from '../data/cities';
import { regionPages } from '../data/regions';

const pick = (facts: { label: string; value: string }[], label: string) =>
  facts.find((f) => f.label.toLowerCase() === label.toLowerCase())?.value;

export const GET: APIRoute = ({ site }) => {
  const origin = site?.toString().replace(/\/$/, '') ?? '';

  const payload = {
    site_id: business.siteId,
    brand: business.name,
    vertical: business.vertical,
    description: business.description,
    url: origin || undefined,
    languages: ['en', 'es'],
    contact: {
      phone: business.phone,
      phone_href: `tel:${business.phoneHref}`,
      email: business.email,
      quote_url: `${origin}/contact/`,
      quote_url_es: `${origin}/es/contacto/`,
    },
    service_area: {
      region: business.serviceArea,
      timezone: business.timezone,
      regions: regionPages.map((r) => ({
        name: r.name,
        url: `${origin}/service-areas/${r.slug}/`,
      })),
      cities: cities.map((c) => ({
        name: c.name,
        county: c.county,
        url: `${origin}/service-areas/${c.slug}/`,
      })),
    },
    services: services.map((s) => ({
      name: s.name,
      slug: s.slug,
      url: `${origin}/services/${s.slug}/`,
      summary: s.answer,
      price_range: pick(s.quickFacts, 'Typical price'),
      typical_duration: pick(s.quickFacts, 'Time on site'),
      recommended_frequency: pick(s.quickFacts, 'Recommended frequency'),
    })),
    pricing_note:
      'Prices are typical ranges for a single system. The final price is confirmed on site after inspection, and quotes are free with no obligation. Beware of whole-home specials advertised under $100; they do not cover real source-removal cleaning.',
    standards: ['NADCA ACR source removal'],
    credentials: ['Licensed', 'Insured'],
    faq: services.flatMap((s) =>
      s.faq.slice(0, 2).map((f) => ({
        question: f.question,
        answer: f.answer,
        service: s.slug,
      })),
    ),
    hours: business.hours.map((h) => ({ days: h.days, opens: h.opens, closes: h.closes })),
    updated: new Date().toISOString(),
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
