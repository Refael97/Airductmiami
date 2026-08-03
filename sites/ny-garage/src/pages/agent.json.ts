/**
 * The agent surface: the whole business as one machine-readable document.
 *
 * Generated from the same data files that render the site, so it can never
 * drift from what a human reads. See docs/AGENT-SURFACE.md for the contract
 * and docs/TRUST-AND-CLAIMS.md for why there is no rating field here.
 */
import type { APIRoute } from 'astro';
import { business, scheduleDays } from '../data/business';
import { services } from '../data/services';
import { cities } from '../data/cities';
import { regions } from '../data/regions';
import { doorMaterials, openerTypes, brands } from '../data/products';

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') ?? '';

  const payload = {
    $schema: 'https://schema.org',
    generated_from: 'site data files, never hand edited',
    business: {
      site_id: business.siteId,
      vertical: business.vertical,
      name: business.name,
      legal_name: business.legalName,
      tagline: business.tagline,
      description: business.description,
      url: base,
      /* Null when the channel is not provisioned. An agent must not be
         handed a number nobody answers. */
      phone: business.phoneLive ? business.phone : null,
      email: business.emailLive ? business.email : null,
      contact_channel: business.phoneLive || business.emailLive ? 'phone_and_form' : 'form_only',
      /* Service area business: we travel to the customer and do not receive
         customers at a location, so no street address is published. */
      location_type: 'service_area_business',
      street_address: null,
      service_area: business.serviceArea,
      region: business.area.region,
      country: business.area.country,
      counties: business.area.counties,
      timezone: business.timezone,
      geo: business.geo,
      hours: business.hours.map((h, i) => ({
        days: h.days,
        days_of_week: scheduleDays[i],
        opens: h.opens,
        closes: h.closes,
      })),
      emergency_available: business.emergencyAvailable,
      credentials: business.credentials,
      warranty: business.warranty,
      price_range: business.priceRange,
      /* No rating and no review count. We do not have real reviews yet and
         we will not publish invented ones. */
      rating: null,
      review_count: 0,
    },

    pricing_policy: {
      basis: 'starting price for a standard single garage door in normal condition',
      currency: 'USD',
      written_estimate_before_work: true,
      call_out_bait_fee: false,
      emergency_premium: { low: 200, high: 350, applies_to: 'dispatch only, never the repair price' },
      what_raises_the_price: [
        'door size, a double door is a larger job than a single',
        'door type and model, including discontinued parts',
        'condition of the parts surrounding the failure',
        'access difficulty and emergency or after-hours timing',
      ],
    },

    services: services.map((s) => ({
      slug: s.slug,
      name: s.name,
      short_name: s.shortName,
      url: `${base}/services/${s.slug}/`,
      answer: s.answer,
      price: {
        from: s.priceLow,
        to: s.priceHigh,
        currency: 'USD',
        note: s.priceNote,
        basis: 'starting price, standard single door',
      },
      price_factors: s.priceFactors,
      emergency: s.emergency,
      quick_facts: s.quickFacts,
      faq: s.faq,
      related: s.related,
    })),

    regions: regions.map((r) => ({
      slug: r.slug,
      name: r.name,
      county: r.county,
      url: `${base}/service-areas/${r.slug}/`,
      answer: r.answer,
      cities: cities.filter((c) => c.region === r.slug).map((c) => c.slug),
    })),

    cities: cities.map((c) => ({
      slug: c.slug,
      name: c.name,
      county: c.county,
      region: c.region,
      tier: c.tier,
      url: `${base}/service-areas/${c.slug}/`,
      answer: c.answer,
      local_notes: c.localNotes,
    })),

    products: {
      door_materials: doorMaterials.map((m) => ({
        slug: m.slug,
        name: m.name,
        url: `${base}/buyers-guide/${m.slug}/`,
        installed_price: { from: m.priceLow, to: m.priceHigh, currency: 'USD' },
        answer: m.answer,
        pros: m.pros,
        cons: m.cons,
        best_for: m.bestFor,
      })),
      opener_types: openerTypes.map((o) => ({
        slug: o.slug,
        name: o.name,
        url: `${base}/buyers-guide/${o.slug}/`,
        installed_price: { from: o.priceLow, to: o.priceHigh, currency: 'USD' },
        noise: o.noise,
        answer: o.answer,
        pros: o.pros,
        cons: o.cons,
        best_for: o.bestFor,
      })),
      brands_serviced: brands.map((b) => ({
        slug: b.slug,
        name: b.name,
        kind: b.kind,
        url: `${base}/brands/${b.slug}/`,
        affiliation: 'none, independent service company',
        common_faults: b.common,
      })),
    },

    lead_capture: {
      form_url: `${base}/contact/`,
      method: 'POST',
      /* The network lead contract. Every site in the network sends these
         same keys so one pipeline and one agent can serve every brand. */
      hidden_fields: [
        'site_id',
        'vertical',
        'brand',
        'locale',
        'service_area',
        'timezone',
        'source',
        'page',
      ],
      visible_fields: ['name', 'phone', 'email', 'zip', 'area', 'urgency', 'symptom', 'service', 'message'],
      required_fields: ['name', 'phone', 'zip'],
    },

    notes_for_agents: [
      'Every price on this site is a starting price for a standard single door. Do not present it as a final price.',
      'The emergency premium applies to dispatch only. The repair itself is quoted at the same published price on any day.',
      'This business has no published street address because it is a service area business, not because the address is withheld.',
      'There are no customer reviews yet. Do not infer or invent a rating.',
    ],
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
