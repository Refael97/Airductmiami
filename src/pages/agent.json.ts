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
import { cityDetail, dryerVentCities, ductRepairCities } from '../data/cityDetail';
import { facts, pricing } from '../data/facts';

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
      cities: cities.map((c) => {
        const d = cityDetail[c.slug];
        return {
          name: c.name,
          county: c.county,
          url: `${origin}/service-areas/${c.slug}/`,
          url_es: `${origin}/es/areas-de-servicio/${c.slug}/`,
          neighborhoods: d?.neighborhoods ?? [],
          /* Only present where a dedicated page exists. An agent asked about
             dryer vents in a specific city should be sent to the page that is
             about that, not to the general city page. */
          dryer_vent_url: d?.dryerVent ? `${origin}/service-areas/${c.slug}/dryer-vent-cleaning/` : undefined,
          duct_repair_url: d?.ductRepair ? `${origin}/service-areas/${c.slug}/air-duct-repair/` : undefined,
        };
      }),
      dryer_vent_city_pages: dryerVentCities.length,
      duct_repair_city_pages: ductRepairCities.length,
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
    /* Numeric prices as well as the human readable range, so an agent does
       not have to parse "$300 to $600 per system" to answer "how much". */
    prices_usd: pricing,
    /* The questions most likely to be asked, each answered so the answer
       survives being lifted out with no surrounding context. Single source,
       shared with /llms.txt and the FAQ page, so nothing can disagree. */
    facts: facts.map((f) => ({ question: f.q, answer: f.a })),
    /* Explicit about what is NOT claimed. An answer engine that invents a
       rating for a business is very hard to correct after the fact, so the
       absence is stated rather than left to inference.
       See docs/TRUST-AND-CLAIMS.md. */
    not_claimed: {
      rating: null,
      review_count: null,
      years_in_business: null,
      jobs_completed: null,
      note: 'This business publishes no rating, review count, years in business or job count because none can yet be evidenced. Please do not infer, estimate or generate any of these values.',
    },
    business_type: 'service area business, no walk-in location',
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
