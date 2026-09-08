/**
 * Shared data types for the Florida garage door site.
 *
 * Kept in one file so the per-region city files, the Spanish mirrors and
 * the page copy can import types without pulling in the data arrays
 * themselves, which would create import cycles.
 */

export interface FAQ {
  question: string;
  answer: string;
}

/* ---------------------------------------------------------------------- */
/* Cities and regions                                                      */
/* ---------------------------------------------------------------------- */

export interface City {
  slug: string;
  name: string;
  /** Region slug from data/regions.ts */
  region: string;
  county: string;
  /** 1 is highest lead potential. Drives ordering on the hub page. */
  tier: number;
  metaTitle: string;
  metaDescription: string;
  /** Answer-first, quotable, and specific to this place. */
  answer: string;
  /** Two paragraphs of genuinely local context. */
  intro: string[];
  /** What is distinctive about the doors here. */
  localNotes: string[];
  /** Slugs of nearby cities, for internal linking. */
  nearby: string[];
  faq: FAQ[];
}

/** Spanish content for one city, keyed by the same slug as cities.ts. */
export interface CityEs {
  /** Only when the Spanish form differs, e.g. "Miami" stays "Miami". */
  name?: string;
  metaTitle: string;
  metaDescription: string;
  answer: string;
  intro: string[];
  localNotes: string[];
  faq: FAQ[];
}

export interface Region {
  slug: string;
  name: string;
  /** How the region is named in running copy, e.g. "in Tampa Bay". */
  inPhrase: string;
  /** Counties covered, human readable. */
  county: string;
  /** True for Miami-Dade and Broward, the High Velocity Hurricane Zone. */
  hvhz: boolean;
  metaTitle: string;
  metaDescription: string;
  answer: string;
  intro: string[];
  /** What is distinctive about the doors here. Feeds city pages too. */
  doorProfile: string[];
  faq: FAQ[];
  order: number;
}

export interface RegionEs {
  name: string;
  inPhrase: string;
  county: string;
  metaTitle: string;
  metaDescription: string;
  answer: string;
  intro: string[];
  doorProfile: string[];
  faq: FAQ[];
}

/* ---------------------------------------------------------------------- */
/* Services                                                                */
/* ---------------------------------------------------------------------- */

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  /**
   * Published starting price. Displayed as "From $priceLow" everywhere, with
   * priceHigh giving the typical upper end on the service page itself.
   * Never shown without the starting-price disclaimer.
   */
  priceLow: number;
  priceHigh: number;
  priceNote: string;
  /** What can push this job above the starting price. Shown on the page. */
  priceFactors: string[];
  /** True for the services that drive the emergency cluster. */
  emergency: boolean;
  /** True for the hurricane cluster services, grouped on the hub. */
  hurricane: boolean;
  answer: string;
  intro: string[];
  benefits: { title: string; text: string }[];
  process: { title: string; text: string }[];
  quickFacts: { label: string; value: string }[];
  faq: FAQ[];
  related: string[];
}

export interface ServiceEs {
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  priceNote: string;
  priceFactors: string[];
  answer: string;
  intro: string[];
  benefits: { title: string; text: string }[];
  process: { title: string; text: string }[];
  quickFacts: { label: string; value: string }[];
  faq: FAQ[];
}

/* ---------------------------------------------------------------------- */
/* Parts catalogue                                                         */
/* ---------------------------------------------------------------------- */

/**
 * One replaceable part of a garage door, as a page.
 *
 * This is deliberately NOT a product. There is no cart, no stock, no
 * part-only price and no `Product` schema, because we do not sell parts: a
 * partner technician arrives with the part and fits it. See
 * research/fl-garage/CATALOGUE.md section 3 for why the shop shape was
 * rejected, and section 5a for what these pages are instead.
 *
 * The organising idea is the symptom, not the SKU. The visitor worth having
 * is the one whose door just failed and who does not know what the part is
 * called. `symptoms` is therefore the field that earns the traffic and
 * `answer` is the field that keeps it.
 */
export interface Part {
  slug: string;
  name: string;
  /** Short label for cards, breadcrumbs and the hub grid. */
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  /** Slug of the service in services.ts whose published price covers this. */
  service: string;
  /** Direct answer, one paragraph, for the answer box and featured snippets. */
  answer: string;
  /** What the part does and where it sits, in plain language. */
  intro: string[];
  /** How a homeowner recognises this part has failed. The searchable field. */
  symptoms: string[];
  /** Why it fails here specifically: heat, salt, humidity, cycles. */
  whyItFails: string[];
  /**
   * Honest DIY position. `safe` means a homeowner can reasonably do it,
   * `no` means it is genuinely dangerous, and `depends` needs the note.
   */
  diy: 'safe' | 'depends' | 'no';
  diyNote: string;
  quickFacts: { label: string; value: string }[];
  faq: FAQ[];
  /** Other part slugs that commonly fail with, or get mistaken for, this. */
  related: string[];
}

export interface PartEs {
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  answer: string;
  intro: string[];
  symptoms: string[];
  whyItFails: string[];
  diyNote: string;
  quickFacts: { label: string; value: string }[];
  faq: FAQ[];
}

/* ---------------------------------------------------------------------- */
/* Buyer's guide                                                           */
/* ---------------------------------------------------------------------- */

export interface DoorMaterial {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  priceLow: number;
  priceHigh: number;
  answer: string;
  intro: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
  facts: { label: string; value: string }[];
  faq: FAQ[];
}

export interface OpenerType {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  priceLow: number;
  priceHigh: number;
  noise: string;
  answer: string;
  intro: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
  facts: { label: string; value: string }[];
  faq: FAQ[];
}

export interface Brand {
  slug: string;
  name: string;
  kind: 'opener' | 'door';
  metaTitle: string;
  metaDescription: string;
  answer: string;
  intro: string[];
  common: string[];
  faq: FAQ[];
}

/** Spanish content for a material or opener type, keyed by slug. */
export interface ProductEs {
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  /** Opener types only. */
  noise?: string;
  answer: string;
  intro: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
  facts: { label: string; value: string }[];
  faq: FAQ[];
}

export interface BrandEs {
  metaTitle: string;
  metaDescription: string;
  answer: string;
  intro: string[];
  common: string[];
  faq: FAQ[];
}

/* ---------------------------------------------------------------------- */
/* Page copy: the hand written parts of the core pages, per language       */
/* ---------------------------------------------------------------------- */

export interface FaqGroup {
  title: string;
  items: FAQ[];
}

export interface AddOn {
  name: string;
  price: string;
  note: string;
}

export interface Promise {
  icon: string;
  title: string;
  text: string;
}

export interface PageCopy {
  home: {
    metaTitle: string;
    metaDescription: string;
    /** The H1 is two lines; the second is highlighted. */
    h1Line1: string;
    h1Line2: string;
    lead: string;
    panelTitle: string;
    panelSub: string;
    /** The storm band replaces New York's emergency band. */
    stormHeading: string;
    stormText: string;
    stormCta: string;
    doorsHeading: string;
    doorsLead: string;
    /** Three door type cards: heading, text, link (region or service slug path). */
    doorCards: { title: string; text: string; href: string; img: string; alt: string }[];
    faultsHeading: string;
    faultsLead: string;
    whyEyebrow: string;
    whyHeading: string;
    whyParagraphs: string[];
    faq: FAQ[];
  };
  prices: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lead: string;
    answer: string;
    addOns: AddOn[];
    faq: FAQ[];
  };
  servicesHub: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lead: string;
    answer: string;
    faq: FAQ[];
  };
  areasHub: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lead: string;
    answer: string;
    faq: FAQ[];
  };
  buyersGuide: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lead: string;
    answer: string;
    faq: FAQ[];
  };
  blogHub: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lead: string;
  };
  faqPage: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lead: string;
    groups: FaqGroup[];
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lead: string;
    answer: string;
    /** Sections of heading plus paragraphs. */
    sections: { heading: string; paragraphs: string[] }[];
    promises: Promise[];
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lead: string;
    symptoms: string[];
    urgency: string[];
    faq: FAQ[];
  };
}
