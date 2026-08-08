/**
 * Single source of truth for business identity and NAP data.
 *
 * Network identity fields are read by LeadMeta.astro and agent.json.ts, so
 * every lead and every machine-readable payload carries them automatically.
 *
 * This is a Service Area Business: it travels to the customer and does not
 * receive customers at a location, so no street address is published. See
 * docs/TRUST-AND-CLAIMS.md.
 *
 * TODO before launch: confirm the brand name, buy the domain, provision the
 * phone number, and set the real email.
 */

export interface BusinessInfo {
  siteId: string;
  vertical: string;
  serviceArea: string;
  timezone: string;
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  phone: string;
  phoneHref: string;
  email: string;
  /**
   * Whether each contact channel actually works yet.
   *
   * A channel that is not live is not rendered anywhere: not on the page,
   * not in the schema, not in agent.json, not in the llms files. Publishing
   * a number nobody answers or an address that bounces is a false claim
   * about the business, the same category of problem as a fabricated
   * review. See docs/TRUST-AND-CLAIMS.md.
   *
   * Flip these to true the moment the channel is provisioned and tested.
   */
  phoneLive: boolean;
  emailLive: boolean;
  /** Service Area Business: region only, no street address. */
  area: {
    region: string; // "NY"
    country: string; // "US"
    /** County the operation centres on. Published, unlike a street address. */
    primaryCounty: string;
    counties: string[];
  };
  /** Approximate center of the service area, for schema geo hints. */
  geo: { latitude: number; longitude: number };
  hours: { days: string; opens: string; closes: string }[];
  priceRange: string;
  /** GA4 measurement ID for this site. One property per site in the network. */
  ga4Id: string;
  emergencyAvailable: boolean;
  credentials: string[];
  warranty: { labor: string; parts: string };
  social: { facebook?: string; instagram?: string; yelp?: string; google?: string };
}

export const business: BusinessInfo = {
  siteId: 'ny-garage',
  vertical: 'garage-door-repair',
  serviceArea: 'New York metro',
  timezone: 'America/New_York',

  name: 'Garage Door Fixers',
  legalName: 'Garage Door Fixers LLC',
  tagline: 'Reliable. Local. Professional.',
  description:
    'Garage Door Fixers provides garage door repair, spring replacement, opener installation, and new door installation across Long Island, Westchester, Staten Island, Queens, and Brooklyn. Published prices, a written estimate before any work, licensed and insured.',

  // TODO: provision a real number with a local area code (516, 631, 718,
  // 347 or 914) and inbound routing, then set phoneLive to true.
  phone: '(516) 000-0000',
  phoneHref: '+15160000000',
  email: 'info@garage-door-fixers.com',
  // Both false: the number is a placeholder and the mailbox does not exist
  // yet. Until they do, the quote form is the only contact channel the site
  // offers, and it says so rather than showing a number nobody answers.
  phoneLive: false,
  emailLive: false,

  area: {
    region: 'NY',
    country: 'US',
    /* The county the operation centres on, published in the footer and as
       addressLocality in schema. Nassau holds eight of the sixteen tier one
       communities and the geo point below sits inside it. No street line and
       no ZIP anywhere: a service area business does not publish one, and an
       invented one is grounds for permanent Business Profile suspension. */
    primaryCounty: 'Nassau County',
    counties: [
      'Nassau County',
      'Suffolk County',
      'Westchester County',
      'Richmond County',
      'Queens County',
      'Kings County',
      'Rockland County',
      'Bronx County',
    ],
  },
  // Rough center of the downstate service area (western Nassau).
  geo: { latitude: 40.7259, longitude: -73.6187 },

  hours: [
    { days: 'Monday to Friday', opens: '07:00', closes: '20:00' },
    { days: 'Saturday', opens: '08:00', closes: '18:00' },
    { days: 'Sunday', opens: '09:00', closes: '17:00' },
  ],

  priceRange: '$$',
  // Garage Door Fixers has its own GA4 property. Do not reuse the Florida
  // site's ID: mixed properties make every per-site number meaningless.
  ga4Id: 'G-B1T6H15GFN',
  emergencyAvailable: true,
  credentials: ['Licensed', 'Insured'],
  warranty: { labor: '1 year', parts: '1 year' },

  social: {},
};

/** Schema.org DayOfWeek arrays matching each hours block. */
export const scheduleDays: string[][] = [
  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  ['Saturday'],
  ['Sunday'],
];
