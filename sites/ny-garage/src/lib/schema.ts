/**
 * JSON-LD builders. Service Area Business: no postal address is published,
 * areaServed carries the coverage instead. No aggregateRating until real
 * reviews exist (docs/TRUST-AND-CLAIMS.md).
 */
import { business, scheduleDays } from '../data/business';

export function localBusinessSchema(site: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${site}/#business`,
    name: business.name,
    legalName: business.legalName,
    description: business.description,
    url: site,
    telephone: business.phone,
    email: business.email,
    priceRange: business.priceRange,
    image: `${site}/og-image.png`,
    areaServed: business.area.counties.map((c) => ({
      '@type': 'AdministrativeArea',
      name: c,
    })),
    address: {
      '@type': 'PostalAddress',
      addressRegion: business.area.region,
      addressCountry: business.area.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHoursSpecification: business.hours.map((h, i) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: scheduleDays[i],
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: Object.values(business.social).filter(Boolean),
  };
}

export function websiteSchema(site: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site}/#website`,
    name: business.name,
    url: site,
    inLanguage: 'en-US',
  };
}

export function serviceSchema(
  site: string,
  s: { name: string; description: string; url: string; slug: string; priceLow?: number; priceHigh?: number },
) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${s.url}#service`,
    name: s.name,
    description: s.description,
    url: s.url,
    serviceType: s.name,
    provider: { '@id': `${site}/#business` },
    areaServed: business.area.counties.map((c) => ({ '@type': 'AdministrativeArea', name: c })),
  };
  if (s.priceLow && s.priceHigh) {
    schema.offers = {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: s.priceLow,
      highPrice: s.priceHigh,
    };
  }
  return schema;
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.question,
      acceptedAnswer: { '@type': 'Answer', text: i.answer },
    })),
  };
}

export function breadcrumbSchema(site: string, crumbs: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${site}${c.href}`,
    })),
  };
}
