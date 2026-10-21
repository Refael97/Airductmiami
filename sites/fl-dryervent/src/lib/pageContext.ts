/**
 * What page the help chat is sitting on, as facts rather than as a URL.
 *
 * Handing the model a raw path would make it guess: it can read
 * `/services/dryer-vent-repair/`, but `/service-areas/deerfield-beach/` is a
 * county it may not place and `/es/blog/nido-de-pajaro-en-la-ventila/` is a
 * topic it would be inferring from a slug. Guessing is exactly what this
 * assistant is told not to do.
 *
 * So the path is resolved here, at build time, against the same data the
 * page itself renders from. Nina is told the service she is standing on and
 * the price that page publishes, or the city and its county, and she gets it
 * from the site's own record rather than from her own reading of a URL. When
 * the price on a service page changes, what she says changes with it.
 *
 * Services and cities resolve by slug rather than by route shape, because
 * both languages share those slugs: /services/dryer-vent-repair/ and
 * /es/servicios/dryer-vent-repair/ are the same entry. County pages have
 * their own Spanish slug, and getRegionPage accepts either.
 *
 * Returns null when there is nothing worth saying. A null is better than a
 * vague line, because every sentence in a system prompt costs attention.
 */
import { services } from '../data/services';
import { serviceEsContent } from '../data/services.es';
import { cities, REGION_ES } from '../data/cities';
import { getRegionPage } from '../data/regions';
import type { Locale } from '../data/ui';

/**
 * The one quick fact worth putting in front of the assistant, taken from
 * the mirror the visitor is actually reading. Per language, not translated
 * here: the Spanish page publishes "$100 a $200" and the English one
 * "$100 to $200", and Nina should quote the wording on screen.
 */
function publishedPrice(slug: string, lang: Locale): string | null {
  const facts =
    lang === 'es'
      ? (serviceEsContent[slug]?.quickFacts ?? [])
      : (services.find((s) => s.slug === slug)?.quickFacts ?? []);
  const price = facts.find((f) => /price|precio/i.test(f.label));
  return price ? price.value : null;
}

/** "Broward County" as a Spanish page would say it. */
function countyEs(county: string): string {
  const m = county.match(/^(.+) County$/);
  return m ? `Condado de ${m[1]}` : county;
}

export function pageContext(path: string, title: string, lang: Locale): string | null {
  const isEs = lang === 'es';
  const segments = path.split('/').filter(Boolean);
  /* Drop the language prefix so the same lookup serves both mirrors. */
  if (segments[0] === 'es') segments.shift();
  const last = segments[segments.length - 1];
  const first = segments[0];

  if (segments.length === 0) {
    return isEs
      ? 'Están en la página de inicio, así que nada aquí le dice qué servicio necesitan.'
      : 'They are on the home page, so nothing here tells you which service they need.';
  }

  const service = last ? services.find((s) => s.slug === last) : undefined;
  if (service && (first === 'services' || first === 'servicios')) {
    const name = isEs ? (serviceEsContent[service.slug]?.name ?? service.name) : service.name;
    const price = publishedPrice(service.slug, lang);
    const priceLine = price
      ? isEs
        ? ` Esa página publica este precio: ${price}. Es el número que están mirando ahora mismo.`
        : ` That page publishes this price: ${price}. It is the number in front of them right now.`
      : '';
    return isEs
      ? `Están leyendo la página del servicio "${name}".${priceLine}`
      : `They are reading the "${name}" service page.${priceLine}`;
  }

  if (first === 'service-areas' || first === 'areas-de-servicio') {
    const region = last ? getRegionPage(last) : undefined;
    if (region) {
      return isEs
        ? `Están en la página ${region.esName.startsWith('el ') ? 'del ' + region.esName.slice(3) : 'de ' + region.esName}. La propiedad probablemente está en ese condado, así que la pregunta útil es en qué ciudad o código postal.`
        : `They are on the ${region.name} page. The property is probably in that county, so the useful question is which city or ZIP.`;
    }

    const city = last ? cities.find((c) => c.slug === last) : undefined;
    if (city) {
      const sameAsRegion = city.county === city.region;
      if (isEs) {
        const where = sameAsRegion
          ? countyEs(city.county)
          : `${countyEs(city.county)}, ${REGION_ES[city.region] ?? city.region}`;
        return `Están en la página de ${city.name}, ${where}. Es casi seguro donde está la propiedad, así que no pregunte la ciudad si ya le sirve esa.`;
      }
      const where = sameAsRegion ? city.county : `${city.county}, ${city.region}`;
      return `They are on the ${city.name} page, ${where}. That is almost certainly where the property is, so do not ask which city if that one will do.`;
    }
  }

  /* An article, not the index: /blog/ itself has nothing to name. */
  if (first === 'blog' && segments.length > 1) {
    /* The title is the article's own, handed down from the layout. Drop the
       brand suffix so the model reads the topic, not the site name. */
    const topic = title.replace(/\s*\|\s*Dryer Vent Florida\s*$/i, '').trim() || title;
    return isEs
      ? `Están leyendo un artículo del blog titulado "${topic}". Llegaron con una pregunta, no con una compra.`
      : `They are reading a blog article titled "${topic}". They arrived with a question, not with a purchase.`;
  }

  const LIST_SERVICES = {
    en: 'They are on the page that lists every service, so they are still deciding which one they need.',
    es: 'Están en la página que lista todos los servicios, así que todavía están decidiendo cuál necesitan.',
  };
  const LIST_AREAS = {
    en: 'They are looking at which areas are covered, so the useful question is where the property is.',
    es: 'Están viendo qué zonas se cubren, así que la pregunta útil es dónde está la propiedad.',
  };
  const FAQ = {
    en: 'They are on the FAQ, so they are checking something before they commit.',
    es: 'Están en las preguntas frecuentes, así que están comprobando algo antes de decidir.',
  };
  const ABOUT = {
    en: 'They are on the about page, which usually means they are deciding whether to trust the company.',
    es: 'Están en la página sobre nosotros, lo que suele significar que están decidiendo si confiar en la empresa.',
  };
  const CONTACT = {
    en: 'They are on the contact page, so they have mostly decided and want a price and a call back.',
    es: 'Están en la página de contacto, así que casi ya decidieron y quieren un precio y una llamada.',
  };

  const named: Record<string, { en: string; es: string }> = {
    blog: {
      en: 'They are browsing the blog index, so they are reading rather than buying.',
      es: 'Están navegando el índice del blog, así que están leyendo, no comprando.',
    },
    services: LIST_SERVICES,
    servicios: LIST_SERVICES,
    'service-areas': LIST_AREAS,
    'areas-de-servicio': LIST_AREAS,
    faq: FAQ,
    'preguntas-frecuentes': FAQ,
    about: ABOUT,
    nosotros: ABOUT,
    contact: CONTACT,
    contacto: CONTACT,
  };
  const hit = first ? named[first] : undefined;
  if (hit) return isEs ? hit.es : hit.en;

  return null;
}
