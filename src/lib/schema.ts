/**
 * Structured-data (JSON-LD) builders. These produce schema.org objects that
 * Google and AI answer engines read to understand the business, services,
 * articles, FAQs, and site hierarchy. Emitted via the <JsonLd> component.
 */
import { business, openingHoursSpec } from '../data/business';
import { cities } from '../data/cities';

type Json = Record<string, unknown>;

/** Stable @id for the organization, referenced by other nodes. */
export function orgId(siteUrl: string): string {
  return `${siteUrl.replace(/\/$/, '')}/#business`;
}

/** LocalBusiness / HVACBusiness node — emitted site-wide. */
export function localBusinessSchema(siteUrl: string): Json {
  const base = siteUrl.replace(/\/$/, '');
  return {
    '@context': 'https://schema.org',
    '@type': ['HVACBusiness', 'LocalBusiness'],
    '@id': orgId(siteUrl),
    name: business.name,
    legalName: business.legalName,
    description: business.description,
    url: base,
    telephone: business.phoneHref,
    email: business.email,
    priceRange: business.priceRange,
    foundingDate: String(business.foundingYear),
    image: `${base}/og-image.svg`,
    logo: `${base}/og-image.svg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: cities.map((c) => ({
      '@type': 'City',
      name: `${c.name}, FL`,
    })),
    openingHoursSpecification: openingHoursSpec.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: business.ratingValue,
      reviewCount: business.reviewCount,
    },
    sameAs: Object.values(business.social).filter(Boolean),
  };
}

/** Service node for a service page. */
export function serviceSchema(
  siteUrl: string,
  opts: { name: string; description: string; url: string; slug: string }
): Json {
  const base = siteUrl.replace(/\/$/, '');
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    serviceType: opts.name,
    provider: { '@id': orgId(siteUrl) },
    areaServed: { '@type': 'State', name: 'Florida' },
    image: `${base}/og-image.svg`,
  };
}

/** Article node for a blog post. */
export function articleSchema(
  siteUrl: string,
  opts: {
    headline: string;
    description: string;
    url: string;
    datePublished: string;
    dateModified?: string;
  }
): Json {
  const base = siteUrl.replace(/\/$/, '');
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    mainEntityOfPage: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    image: `${base}/og-image.svg`,
    author: { '@type': 'Organization', name: business.name, '@id': orgId(siteUrl) },
    publisher: { '@id': orgId(siteUrl) },
  };
}

/** FAQPage node from a list of Q&As. */
export function faqSchema(faq: { question: string; answer: string }[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

/** BreadcrumbList node from [{name,url}] crumbs. */
export function breadcrumbSchema(
  crumbs: { name: string; url: string }[]
): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

/** WebSite node with SearchAction — helps establish the site entity. */
export function websiteSchema(siteUrl: string): Json {
  const base = siteUrl.replace(/\/$/, '');
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: business.name,
    url: base,
    publisher: { '@id': orgId(siteUrl) },
  };
}
