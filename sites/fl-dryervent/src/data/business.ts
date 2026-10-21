/**
 * Single source of truth for business / NAP (Name, Address, Phone) data.
 *
 * ⚠️ PLACEHOLDERS, replace every value marked `TODO` with the real business
 * details before launch. These values feed the header, footer, contact page,
 * and, critically, the LocalBusiness structured data that Google and AI
 * engines read. Consistent NAP across the whole site is a core local-SEO
 * ranking signal, so keep this file authoritative.
 */

export interface BusinessInfo {
  /**
   * Network identity. Every site in the network sets these, and every lead
   * carries them, so one shared pipeline and one AI agent can serve many
   * brands, verticals, and regions without per-site logic.
   * See docs/LEAD-PIPELINE.md.
   */
  siteId: string; // stable slug, e.g. 'fl-airduct'
  /** This site's own GA4 measurement id. Empty until the property exists. */
  gaMeasurementId: string;
  domain: string;
  vertical: string; // e.g. 'air-duct-cleaning', 'garage-door-repair'
  serviceArea: string; // human-readable, e.g. 'Florida'
  timezone: string; // IANA, drives call-back hours, e.g. 'America/New_York'
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  phone: string; // human-readable, e.g. "(305) 555-0100"
  phoneHref: string; // tel: format, e.g. "+13055550100"
  email: string;
  address: {
    street: string;
    city: string;
    region: string; // "FL"
    postalCode: string;
    country: string; // "US"
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  hours: {
    days: string;
    opens: string; // 24h "HH:MM"
    closes: string;
  }[];
  priceRange: string;
  foundingYear: number;
  ratingValue: number;
  reviewCount: number;
  social: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    yelp?: string;
    google?: string;
  };
}

export const business: BusinessInfo = {
  siteId: 'fl-dryervent',
  gaMeasurementId: 'G-DGWK813VWZ', // GA4 property for dryerventflorida.com
  domain: 'dryerventflorida.com',
  vertical: 'dryer-vent-cleaning',
  serviceArea: 'Florida',
  timezone: 'America/New_York',
  name: 'Dryer Vent Florida',
  legalName: 'Dryer Vent Florida',
  tagline: 'Dryer vent cleaning, repair and installation across Florida',
  description:
    'Dryer Vent Florida cleans, repairs and installs residential and condo dryer vents across Florida. Airflow measured before and after, rigid metal duct, price given before booking.',
  /* Temporary: the line that already answers for the network. Replace with
     this site's own number when it is provisioned, so calls can be
     attributed. Everything that shows or links the phone reads it here. */
  phone: '(813) 300-1379',
  phoneHref: '+18133001379',
  email: 'info@dryerventflorida.com',
  /* No street address is published (docs/TRUST-AND-CLAIMS.md): this is a
     service area business. The values below only feed schema fields that
     require them and are set to the state level. */
  address: {
    street: '',
    city: '',
    region: 'FL',
    postalCode: '',
    country: 'US',
  },
  geo: {
    latitude: 26.3683, // Boca Raton area, where the crews start most days
    longitude: -80.1289,
  },
  hours: [
    { days: 'Monday to Friday', opens: '08:00', closes: '19:00' },
    { days: 'Saturday', opens: '09:00', closes: '17:00' },
    { days: 'Sunday', opens: '10:00', closes: '16:00' },
  ],
  priceRange: '$$',
  foundingYear: 0, // not published
  ratingValue: 0, // no rating is published until real reviews exist
  reviewCount: 0,
  social: {},
};

/** Days the business is open, in schema.org DayOfWeek format, per hours block. */
export const openingHoursSpec = [
  {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '19:00',
  },
  { days: ['Saturday'], opens: '09:00', closes: '17:00' },
  { days: ['Sunday'], opens: '10:00', closes: '16:00' },
];
