/**
 * Single source of truth for business / NAP (Name, Address, Phone) data.
 *
 * ⚠️ PLACEHOLDERS — replace every value marked `TODO` with the real business
 * details before launch. These values feed the header, footer, contact page,
 * and — critically — the LocalBusiness structured data that Google and AI
 * engines read. Consistent NAP across the whole site is a core local-SEO
 * ranking signal, so keep this file authoritative.
 */

export interface BusinessInfo {
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
  name: 'Air Duct Florida', // TODO: real brand name
  legalName: 'Air Duct Florida LLC', // TODO
  tagline: "Florida's Trusted Air Duct & Dryer Vent Cleaning Experts",
  description:
    'Air Duct Florida provides professional air duct cleaning, dryer vent cleaning, and indoor air quality services across Florida. NADCA-standard equipment, licensed and insured technicians, and same-week appointments statewide.',
  phone: '(800) 555-0123', // TODO: real phone
  phoneHref: '+18005550123', // TODO
  email: 'info@airductflorida.com', // TODO
  address: {
    street: '123 Biscayne Blvd, Suite 100', // TODO
    city: 'Miami',
    region: 'FL',
    postalCode: '33131', // TODO
    country: 'US',
  },
  geo: {
    latitude: 25.7617, // Miami — TODO: real coordinates
    longitude: -80.1918,
  },
  hours: [
    { days: 'Monday–Friday', opens: '08:00', closes: '19:00' },
    { days: 'Saturday', opens: '09:00', closes: '17:00' },
    { days: 'Sunday', opens: '10:00', closes: '16:00' },
  ],
  priceRange: '$$',
  foundingYear: 2012,
  ratingValue: 4.9,
  reviewCount: 487,
  social: {
    facebook: 'https://www.facebook.com/', // TODO
    instagram: 'https://www.instagram.com/', // TODO
    google: 'https://www.google.com/maps', // TODO
    yelp: 'https://www.yelp.com/', // TODO
  },
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
