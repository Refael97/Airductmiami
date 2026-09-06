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
 * History: built as the New York metro site (ny-garage) in August 2026 and
 * re-pointed at Florida on 6 September 2026, when the Florida air duct site
 * was producing five to six organic leads a week and the New York site had
 * one click in three months. Fulfillment partners exist in Florida. See
 * research/fl-garage/BRIEF.md.
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
  /** Second mailbox. Different kind of message, not a different department. */
  emailSupport: string;
  /**
   * Whether each contact channel actually works yet.
   *
   * A channel that is not live is not rendered anywhere: not on the page,
   * not in the schema, not in agent.json, not in the llms files. Publishing
   * a number nobody answers or an address that bounces is a false claim
   * about the business, the same category of problem as a fabricated
   * review. See docs/TRUST-AND-CLAIMS.md.
   */
  phoneLive: boolean;
  emailLive: boolean;
  /** Service Area Business: state only, no street address. */
  area: {
    region: string; // "FL"
    regionName: string; // "Florida"
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
  languages: string[];
  social: { facebook?: string; instagram?: string; yelp?: string; google?: string };
}

export const business: BusinessInfo = {
  siteId: 'fl-garage',
  vertical: 'garage-door-repair',
  serviceArea: 'Florida',
  timezone: 'America/New_York',

  name: 'Garage Door Fixers',
  legalName: 'Garage Door Fixers LLC',
  tagline: 'Published prices. Written estimate first.',
  description:
    'Garage Door Fixers provides garage door repair, spring replacement, opener installation, hurricane-rated door installation and storm damage repair across Florida, from Miami-Dade and Broward to Tampa Bay, Orlando, Southwest Florida and Jacksonville. Published starting prices, a written estimate before any work, licensed and insured, in English and Spanish.',

  /* The number rings a technician's mobile phone directly. It is the same
     number the Florida air duct site uses, at the owner's decision on
     6 September 2026: one dispatcher, two brands. Whoever answers must not
     greet callers with the other brand's name. If a dedicated number is
     provisioned later, change it here and nowhere else. */
  phone: '(561) 897-9930',
  phoneHref: '+15618979930',
  email: 'info@garage-door-fixers.com',
  emailSupport: 'support@garage-door-fixers.com',
  phoneLive: true,
  emailLive: true,

  area: {
    region: 'FL',
    regionName: 'Florida',
    country: 'US',
    /* Palm Beach County: the phone number's area code and where the
       dispatch centres. No street line and no ZIP anywhere: a service area
       business does not publish one, and an invented one is grounds for
       permanent Business Profile suspension. */
    primaryCounty: 'Palm Beach County',
    counties: [
      'Miami-Dade County',
      'Broward County',
      'Palm Beach County',
      'St. Lucie County',
      'Hillsborough County',
      'Pinellas County',
      'Pasco County',
      'Hernando County',
      'Polk County',
      'Orange County',
      'Osceola County',
      'Seminole County',
      'Lake County',
      'Brevard County',
      'Lee County',
      'Collier County',
      'Sarasota County',
      'Manatee County',
      'Charlotte County',
      'Duval County',
      'St. Johns County',
      'Clay County',
      'Flagler County',
      'Alachua County',
    ],
  },
  // Rough center of the South Florida dispatch area (western Palm Beach County).
  geo: { latitude: 26.7153, longitude: -80.0534 },

  hours: [
    { days: 'Monday to Friday', opens: '07:00', closes: '20:00' },
    { days: 'Saturday', opens: '08:00', closes: '18:00' },
    { days: 'Sunday', opens: '09:00', closes: '17:00' },
  ],

  priceRange: '$$',
  /* The GA4 property was created for garage-door-fixers.com, and the
     domain has not changed, so the property carries over. Do not reuse
     the Florida air duct site's ID: mixed properties make every per-site
     number meaningless. */
  ga4Id: 'G-B1T6H15GFN',
  emergencyAvailable: true,
  credentials: ['Licensed', 'Insured'],
  warranty: { labor: '1 year', parts: '1 year' },
  languages: ['English', 'Spanish'],

  social: {},
};

/** Schema.org DayOfWeek arrays matching each hours block. */
export const scheduleDays: string[][] = [
  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  ['Saturday'],
  ['Sunday'],
];
