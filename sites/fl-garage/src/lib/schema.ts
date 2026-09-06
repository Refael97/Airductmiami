/**
 * JSON-LD builders. Service Area Business: no postal address is published,
 * areaServed carries the coverage instead. No aggregateRating until real
 * reviews exist (docs/TRUST-AND-CLAIMS.md).
 */
import { business, scheduleDays } from '../data/business';
import { cities } from '../data/cities';
import type { Locale } from '../data/ui';

const languageNames = ['English', 'Spanish'];

export function localBusinessSchema(site: string, lang: Locale = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${site}/#business`,
    name: business.name,
    legalName: business.legalName,
    description: business.description,
    url: site,
    // A contact channel that does not work is omitted rather than published.
    ...(business.phoneLive ? { telephone: business.phone } : {}),
    ...(business.emailLive ? { email: business.email } : {}),
    contactPoint: [
      ...(business.phoneLive
        ? [
            {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              telephone: business.phoneHref,
              areaServed: business.area.region,
              availableLanguage: languageNames,
            },
          ]
        : []),
      ...(business.emailLive
        ? [
            {
              '@type': 'ContactPoint',
              contactType: 'sales',
              email: business.email,
              areaServed: business.area.region,
              availableLanguage: languageNames,
            },
            {
              '@type': 'ContactPoint',
              contactType: 'customer support',
              email: business.emailSupport,
              areaServed: business.area.region,
              availableLanguage: languageNames,
            },
          ]
        : []),
    ],
    knowsLanguage: ['en', 'es'],
    priceRange: business.priceRange,
    image: `${site}/og-image.png`,
    /* The state, every county, and every community we publish a page for.
       A service area business is judged on how specifically it declares
       its coverage. */
    areaServed: [
      { '@type': 'State', name: business.area.regionName },
      ...business.area.counties.map((c) => ({
        '@type': 'AdministrativeArea',
        name: c,
        containedInPlace: { '@type': 'State', name: business.area.regionName },
      })),
      ...cities.map((c) => ({
        '@type': 'City',
        name: c.name,
        containedInPlace: { '@type': 'AdministrativeArea', name: c.county },
      })),
    ],
    /* No streetAddress and no postalCode. addressLocality carries the
       county the operation centres on, which is true. */
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.area.primaryCounty,
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
    inLanguage: lang === 'es' ? 'es-US' : 'en-US',
  };
}

export function websiteSchema(site: string, lang: Locale = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site}/#website`,
    name: business.name,
    url: site,
    inLanguage: lang === 'es' ? 'es-US' : 'en-US',
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
    areaServed: [
      { '@type': 'State', name: business.area.regionName },
      ...business.area.counties.map((c) => ({ '@type': 'AdministrativeArea', name: c })),
    ],
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

export function articleSchema(
  site: string,
  a: { headline: string; description: string; url: string; datePublished: string; dateModified: string; lang: Locale },
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.headline,
    description: a.description,
    datePublished: a.datePublished,
    dateModified: a.dateModified,
    inLanguage: a.lang === 'es' ? 'es-US' : 'en-US',
    author: { '@type': 'Organization', name: business.name },
    publisher: { '@id': `${site}/#business` },
    mainEntityOfPage: a.url,
  };
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
