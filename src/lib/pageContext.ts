/**
 * What page the help chat is sitting on, as facts rather than as a URL.
 *
 * The widget was already posting `location.pathname` and the function was
 * already accepting it and throwing it away. Handing the model a raw path
 * would not have been much better: it can guess at `/services/dryer-vent-
 * cleaning/`, but `/service-areas/palmetto-bay/` is a county it does not
 * know and `/blog/moho-en-ductos-aire/` is a topic it would be inferring
 * from a slug. Guessing is exactly what this assistant is told not to do.
 *
 * So the path is resolved here, at build time, against the same data the
 * page itself renders from. Carla is told the service she is standing on and
 * the price that page publishes, or the city and its county, and she gets it
 * from the site's own record rather than from her own reading of a URL. When
 * the price on a service page changes, what she says changes with it.
 *
 * Resolution is by slug rather than by route shape, because both languages
 * share slugs: /services/air-duct-cleaning/ and
 * /es/servicios/air-duct-cleaning/ are the same entry. That keeps this
 * working if a route is ever renamed.
 *
 * Returns null when there is nothing worth saying. A null is better than a
 * vague line, because every sentence in a system prompt costs attention.
 */
import { services } from '../data/services';
import { serviceEsContent } from '../data/services.es';
import { cities } from '../data/cities';
import { cityEsContent } from '../data/cities.es';
import type { Locale } from '../data/ui';

/**
 * The one quick fact worth putting in front of the assistant, taken from
 * the mirror the visitor is actually reading.
 *
 * Per language, not translated here: the Spanish page publishes "$300 a $600
 * por sistema" and the English one "$300 to $600 per system". Handing Carla
 * the English string on a Spanish page would have her quote a number in
 * wording the visitor cannot see on screen, which is the small kind of wrong
 * that reads as a different price.
 */
function publishedPrice(slug: string, lang: Locale): string | null {
  const facts =
    lang === 'es'
      ? (serviceEsContent[slug]?.quickFacts ?? [])
      : (services.find((s) => s.slug === slug)?.quickFacts ?? []);
  const price = facts.find((f) => /price|precio/i.test(f.label));
  return price ? price.value : null;
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
      ? 'Está en la página de inicio, así que todavía no sabe qué servicio necesitan.'
      : 'They are on the home page, so nothing here tells you which service they need.';
  }

  const service = last ? services.find((s) => s.slug === last) : undefined;
  if (service) {
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

  const city = last ? cities.find((c) => c.slug === last) : undefined;
  if (city) {
    const region = isEs ? (cityEsContent[city.slug]?.region ?? city.region) : city.region;
    return isEs
      ? `Están en la página de ${city.name}, ${city.county}, ${region}. Es casi seguro donde está la propiedad, así que no pregunte la ciudad si ya le sirve esa.`
      : `They are on the ${city.name} page, ${city.county}, ${region}. That is almost certainly where the property is, so do not ask which city if that one will do.`;
  }

  /* An article, not the index: /blog/ itself has nothing to name. */
  if (first === 'blog' && segments.length > 1) {
    /* The title is the article's own, handed down from the layout. */
    return isEs
      ? `Están leyendo un artículo del blog titulado "${title}". Llegaron con una pregunta, no con una compra.`
      : `They are reading a blog article titled "${title}". They arrived with a question, not with a purchase.`;
  }

  const named: Record<string, { en: string; es: string }> = {
    blog: {
      en: 'They are browsing the blog index, so they are reading rather than buying.',
      es: 'Están navegando el índice del blog, así que están leyendo, no comprando.',
    },
    services: {
      en: 'They are on the page that lists every service, so they are still deciding which one they need.',
      es: 'Están en la página que lista todos los servicios, así que todavía están decidiendo cuál necesitan.',
    },
    servicios: {
      en: 'They are on the page that lists every service, so they are still deciding which one they need.',
      es: 'Están en la página que lista todos los servicios, así que todavía están decidiendo cuál necesitan.',
    },
    'service-areas': {
      en: 'They are looking at which areas are covered, so the useful question is where the property is.',
      es: 'Están viendo qué zonas se cubren, así que la pregunta útil es dónde está la propiedad.',
    },
    'areas-de-servicio': {
      en: 'They are looking at which areas are covered, so the useful question is where the property is.',
      es: 'Están viendo qué zonas se cubren, así que la pregunta útil es dónde está la propiedad.',
    },
    faq: {
      en: 'They are on the FAQ, so they are checking something before they commit.',
      es: 'Están en las preguntas frecuentes, así que están comprobando algo antes de decidir.',
    },
    'preguntas-frecuentes': {
      en: 'They are on the FAQ, so they are checking something before they commit.',
      es: 'Están en las preguntas frecuentes, así que están comprobando algo antes de decidir.',
    },
    about: {
      en: 'They are on the about page, which usually means they are deciding whether to trust the company.',
      es: 'Están en la página sobre nosotros, lo que suele significar que están decidiendo si confiar en la empresa.',
    },
    nosotros: {
      en: 'They are on the about page, which usually means they are deciding whether to trust the company.',
      es: 'Están en la página sobre nosotros, lo que suele significar que están decidiendo si confiar en la empresa.',
    },
  };
  const hit = first ? named[first] : undefined;
  if (hit) return isEs ? hit.es : hit.en;

  return null;
}
