/** Shape of one city's content. Written per city, never templated. */
export type RegionName =
  | 'Broward County'
  | 'Palm Beach County'
  | 'Miami-Dade County'
  | 'Southwest Florida'
  | 'Central Florida'
  | 'Tampa Bay';

export interface Block {
  heading: string;
  body: string[];
}

export interface QA {
  question: string;
  answer: string;
}

export interface CityContent {
  slug: string;
  name: string;
  county: string;
  region: RegionName;
  nearby: string[];
  neighborhoods: string[];
  intro: string;
  introEs: string;
  common: string;
  commonEs: string;
  depth: Block[];
  depthEs: Block[];
  faq: QA[];
  faqEs: QA[];
}
