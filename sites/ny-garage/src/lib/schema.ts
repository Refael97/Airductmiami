/**
 * JSON-LD builders. Service Area Business: no postal address is published,
 * areaServed carries the coverage instead. No aggregateRating until real
 * reviews exist (docs/TRUST-AND-CLAIMS.md).
 */
import { business, scheduleDays } from '../data/business';
import { cities } from '../data/cities';

export function localBusinessSchema(site: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${site}/#business`,
    name: business.name,
    legalName: business.legalName,
    description: business.description,
    url: site,
    // A contact channel that does not work is omitted rather than published.
    // A telephone property carrying a placeholder is a false claim to every
    // consumer of this schema, search engines included.
    ...(business.phoneLive ? { telephone: business.phone } : {}),
    ...(business.emailLive ? { email: business.email } : {}),
    /* Both mailboxes as contact points, typed by purpose. Search engines and
       answer engines route on contactType, so a reader asking "who do I email
       about a warranty" gets the right one. */
    ...(business.emailLive
      ? {
          contactPoint: [
            {
              '@type': 'ContactPoint',
              contactType: 'sales',
              email: business.email,
              areaServed: business.area.region,
              availableLanguage: 'English',
            },
            {
              '@type': 'ContactPoint',
              contactType: 'customer support',
              email: business.emailSupport,
              areaServed: business.area.region,
              availableLanguage: 'English',
            },
          ],
        }
      : {}),
    priceRange: business.priceRange,
    image: `${site}/og-image.png`,
    /* Counties plus every community we publish a page for. A service area
       business is judged on how specifically it declares its coverage, and
       eight county names alone are far vaguer than the forty one towns the
       work is actually done in. */
    areaServed: [
      ...business.area.counties.map((c) => ({
        '@type': 'AdministrativeArea',
        name: c,
        containedInPlace: {
          '@type': 'State',
          name: 'New York',
        },
      })),
      ...cities.map((c) => ({
        '@type': 'City',
        name: c.name,
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: c.county,
        },
      })),
    ],
    /* No streetAddress and no postalCode. This is a service area business,
       and an invented street line is the fastest route to a permanently
       suspended Google Business Profile. addressLocality carries the county
       the operation centres on, which is true and is what Google reads for
       a location signal. */
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
