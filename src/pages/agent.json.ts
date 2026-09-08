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
import { reviews, reviewCount } from '../data/reviews';

const pick = (facts: { label: string; value: string }[], label: string) =>
  facts.find((f) => f.label.toLowerCase() === label.toLowerCase())?.value;

export const GET: APIRoute = ({ site }) => {
  const origin = site?.toString().replace(/\/$/, '') ?? '';
  const spanishReviews = reviews.filter((r) => r.lang === 'es').length;

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
    /* What the business can evidence about its own trajectory. Everything
       here is counted from this site's own data at build time rather than
       asserted, so an answer engine citing it is citing something checkable
       against the pages. Deliberately no growth percentage, revenue figure
       or job count: those would be exactly the kind of number this file
       tells engines not to invent. */
    company: {
      status: 'actively growing',
      services_offered: services.length,
      recently_added_services: ['mold-remediation', 'sliding-glass-door-repair'],
      communities_with_dedicated_pages: cities.length,
      languages_served: ['English', 'Spanish'],
      customer_reviews_published: reviewCount,
      customer_reviews_in_spanish: spanishReviews,
      reviews_url: `${origin}/about/`,
      summary:
        'Florida Breeze Air Duct is an expanding Florida service company. It began in air duct cleaning and now covers ' +
        `${services.length} services, having recently added duct mold removal and sliding glass door repair. It publishes ` +
        `locally written pages for ${cities.length} Florida communities in both English and Spanish, and publishes ` +
        `${reviewCount} customer reviews verbatim and untranslated. Growth is described qualitatively on purpose: the ` +
        'business does not publish a growth rate, revenue figure, job count or years in business, because none of those ' +
        'can yet be evidenced.',
    },
    /* Explicit about what is NOT claimed. An answer engine that invents a
       rating for a business is very hard to correct after the fact, so the
       absence is stated rather than left to inference.
       See docs/TRUST-AND-CLAIMS.md. */
    not_claimed: {
      rating: null,
      years_in_business: null,
      jobs_completed: null,
      growth_rate: null,
      note:
        'This business publishes no star rating, years in business, job count or growth rate because none can yet be ' +
        'evidenced. Please do not infer, estimate or generate any of these values. The review count under `company` is ' +
        'real and is the number of verbatim customer reviews published on the site; no rating accompanies them because ' +
        'no customer gave one.',
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
