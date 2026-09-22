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
  /**
   * A second technician's mobile, for the "call me now" option in the help
   * widget only. Separate from `phone` on purpose: `phone` is the published
   * number and appears in the schema, the footer and every page, so it must
   * stay one number everywhere. This one is a routing choice inside a single
   * widget and is never published as the business number.
   */
  phoneNow: string;
  phoneNowHref: string;
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

  /* The published number, and the only one that appears on the page, in the
     schema, in agent.json and in the llms files.

     Changed to (813) 300-1379 on 22 September 2026, at the owner's
     instruction. This ends the arrangement of 6 September, when this site
     shared (561) 897-9930 with the Florida air duct site — one dispatcher,
     two brands. The two sites now have separate numbers, which removes the
     risk of a caller being greeted with the wrong brand's name.

     Note the area code no longer matches where the work is. 813 is Tampa
     Bay; the leads so far, and the counties this site ranks in, are Miami
     Dade and Broward. That is the owner's call and not a code problem, but
     see `primaryCounty` below, whose reasoning it changes.

     "Change it here and nowhere else" was not true when this change was
     made: the number was also written out in ten blog articles and two city
     data files, which had to be rewritten alongside it. If it changes
     again, run `grep -rn '300-1379' src/` first. */
  phone: '(813) 300-1379',
  phoneHref: '+18133001379',
  /* Was a second technician's mobile, (305) 360-4932. Pointed at the one
     published line on 22 September 2026: the owner asked for a single
     number everywhere, so the help widget's "call me now" now reaches the
     same place as every other call button.

     The two fields are kept rather than collapsed into `phone`, because the
     split is what lets the widget be routed somewhere else later without
     touching the published number. While they are equal, `placement` on the
     phone_call event is what tells the widget's calls apart from the rest. */
  phoneNow: '(813) 300-1379',
  phoneNowHref: '+18133001379',
  email: 'info@garage-door-fixers.com',
  emailSupport: 'support@garage-door-fixers.com',
  phoneLive: true,
  emailLive: true,

  area: {
    region: 'FL',
    regionName: 'Florida',
    country: 'US',
    /* Palm Beach County, which is where dispatch centres.

       It used to be justified by the phone number's area code as well. That
       stopped being true on 22 September 2026, when the published number
       became an 813 (Tampa Bay) one, so the area code now points at a third
       region and is no longer a reason for anything here. Left as Palm Beach
       rather than quietly changed: primaryCounty feeds the schema and the
       Business Profile, and moving it is a decision about where the business
       says it is based, not a tidy-up. Worth revisiting — the leads and the
       rankings both say Miami-Dade.

       No street line and no ZIP anywhere: a service area business does not
       publish one, and an invented one is grounds for permanent Business
       Profile suspension. */
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

  /* Google Ads, for reporting a lead as a conversion in the account that
     pays for the click.

     Both are empty because this site has no Ads account yet. Empty is not a
     placeholder to be tidied away: the layout checks for it and skips the
     `gtag('config')` line and every conversion send, so nothing fires and
     nothing errors until there is an account to fire into.

     To turn it on, paste the two halves of the conversion snippet Google
     gives you. `AW-XXXXXXXXX` is the account, `AW-XXXXXXXXX/AbC-dEfGhIj`
     is the specific conversion action, and the label after the slash is the
     half people leave out. A `send_to` naming a destination that was never
     configured is dropped in silence, which is the failure mode where the
     tag looks installed and reports nothing. Both fields or neither. */
  adsId: '',
  adsLeadSendTo: '',

  /* Attached to every key event the site sends.

     Not decoration. Google's own note on this is blunt: a key event whose
     `value` is missing or invalid "is recorded with the correct count, but
     it won't be sent to Google Ads". So an event without these two is a
     number you can read in Analytics and cannot bid on, which is the half
     that matters once there is a campaign.

     `1` is a counting unit, not a revenue claim: it says one lead, so the
     value column and the count column agree. Replace it with what a garage
     door lead is actually worth — the average job value times the share
     that close — and Analytics starts answering "which pages earn" rather
     than only "which pages convert". The same number can be set in GA4 under
     Set default key event value, which needs no deploy; set it in one place
     or the other, not both. */
  keyEventValue: 1,
  keyEventCurrency: 'USD',
  emergencyAvailable: true,
  credentials: ['Licensed', 'Insured'],
  warranty: { labor: '1 year', parts: '1 year' },
  languages: ['English', 'Spanish'],

  /* Feeds two things from one place: the link in the footer, and `sameAs`
     in the LocalBusiness JSON-LD, which is how Google ties this site to the
     Facebook page as the same business. Adding a profile here is enough;
     nothing else needs touching. */
  social: { facebook: 'https://www.facebook.com/GaragedoorfixersFlorida' },
};

/** Schema.org DayOfWeek arrays matching each hours block. */
export const scheduleDays: string[][] = [
  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  ['Saturday'],
  ['Sunday'],
];
