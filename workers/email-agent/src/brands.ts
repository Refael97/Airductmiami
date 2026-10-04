/**
 * What the agent is allowed to say about each business.
 *
 * Copied from the sites' own data files (src/data/services.ts at the repo
 * root, sites/fl-garage/src/data/services.ts and both business.ts files) on
 * 4 October 2026. If a published price changes on a site, change it here
 * too: the whole point of the prompt is that the agent never quotes a number
 * the website does not.
 */

export interface Brand {
  key: 'airduct' | 'garage';
  name: string;
  domain: string;
  /** The address replies go out from unless the customer wrote to another one of ours. */
  defaultFrom: string;
  phone: string;
  site: string;
  hours: string;
  area: string;
  /** One line per service, price as published. */
  services: string[];
  /** Things this business must never claim. */
  never: string[];
}

export const BRANDS: Record<string, Brand> = {
  'floridabreezeairduct.com': {
    key: 'airduct',
    name: 'Florida Breeze Air Duct',
    domain: 'floridabreezeairduct.com',
    defaultFrom: 'info@floridabreezeairduct.com',
    phone: '(561) 897-9930',
    site: 'https://floridabreezeairduct.com',
    hours: 'Monday to Friday 8am to 7pm, Saturday 9am to 5pm, Sunday 10am to 4pm, Eastern time',
    area: 'All of Florida, mainly South Florida (Miami-Dade, Broward, Palm Beach), Tampa Bay, Central and Southwest Florida',
    services: [
      'Air duct cleaning: $300 to $600 per system (NADCA source removal)',
      'Dryer vent cleaning: $100 to $200',
      'Dryer vent installation or repair: $200 to $600',
      'AC / HVAC cleaning (coil, blower, air handler, drain): $200 to $450',
      'Air duct repair and sealing: from $250, depends on scope, quoted after inspection',
      'Duct sanitizing: $75 to $200 as an add-on',
      'HVAC UV light installation: $300 to $700 installed',
      'Indoor air quality testing: $200 to $500',
      'Mold in ducts: quoted after inspection; licensed mold remediation is referred to a licensed contractor',
      'Commercial duct cleaning: quoted after a site visit',
      'Sliding glass door repair: $150 to $400',
    ],
    never: [
      'Do not say the company is "licensed": air duct cleaning is not a licensed trade in Florida. "Insured" is true.',
      'Do not quote AC repair, refrigerant, or AC installation. The company does not do those.',
      'Do not invent a star rating, years in business or number of jobs.',
    ],
  },
  'garage-door-fixers.com': {
    key: 'garage',
    name: 'Garage Door Fixers',
    domain: 'garage-door-fixers.com',
    defaultFrom: 'info@garage-door-fixers.com',
    phone: '(813) 300-1379',
    site: 'https://garage-door-fixers.com',
    hours: 'Monday to Friday 7am to 8pm, Saturday 8am to 6pm, Sunday 9am to 5pm, Eastern time. Same-day service seven days a week. Not open 24 hours.',
    area: 'Florida, mainly Miami-Dade, Broward and Palm Beach, plus Tampa Bay, Central, Southwest and North Florida',
    services: [
      'Spring replacement: $150 to $350 per spring',
      'Cable repair: $95 to $300',
      'Opener repair: $95 to $300',
      'Opener installation: $275 to $600',
      'Smart / WiFi opener installation: $350 to $750',
      'Off-track repair: $140 to $600',
      'Panel (section) replacement: $250 to $800 per section',
      'New wind-rated door installed: $950 to $4,200',
      'Hurricane / impact-rated door installed: $1,800 to $6,500, permit included',
      'Storm damage repair: $150 to $1,500',
      'Emergency same-day call-out premium: $150 to $300 on top of the repair price',
      'Tune-up and maintenance: $85 to $160',
      'Commercial doors such as the Amarr 2400 and 2500 series: quoted after measuring',
    ],
    never: [
      'Do not claim to be an authorized dealer of any brand. The company is independent.',
      'Do not say the company is open 24 hours.',
      'Do not invent a star rating, years in business or number of jobs.',
    ],
  },
};

export function brandForAddress(address: string): Brand | undefined {
  const domain = address.split('@')[1]?.toLowerCase().trim();
  return domain ? BRANDS[domain] : undefined;
}

export const OUR_DOMAINS = Object.keys(BRANDS);
