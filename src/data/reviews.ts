/**
 * Customer reviews.
 *
 * These are real, collected from leads the site produced between July and
 * September 2026, and supplied by the owner on 7 September 2026. Nothing
 * here is written, paraphrased or translated by us. The `text` field is the
 * customer's own words exactly as they were given, which is the whole point
 * of the field. See docs/TRUST-AND-CLAIMS.md.
 *
 * Rules for anyone editing this file:
 *
 * 1. **Never add an entry for someone who was not a customer.** One of the
 *    eleven supplied was dropped on the owner's own note that it was not an
 *    air duct lead, came from Nassau County New York, and looked like SEO
 *    spam. It was also the only one that never named the business.
 * 2. **Never write, improve or translate a review.** A Spanish review shows
 *    in Spanish on the English pages too. The moment we rewrite a
 *    customer's words they stop being the customer's words, and the FTC
 *    rule on fake and misleading reviews (16 CFR part 465) reaches
 *    substantially altered ones, not only invented ones.
 * 3. **Only claim a location we can stand behind.** Where the customer's
 *    stated city and their ZIP disagreed the ZIP decided it, because the ZIP
 *    is the record. Where they disagreed by state, the city is omitted
 *    rather than guessed: one reviewer's page said Miami and their ZIP was
 *    Brooklyn, which is a plausible Florida second home but not something
 *    to assert.
 * 4. **No star ratings.** None of these customers gave one. That is why
 *    there is no `rating` field, no `AggregateRating` schema anywhere on
 *    the site, and no "rated 5 stars" claim. When real star ratings exist,
 *    add the field and the schema together.
 * 5. **Surnames are reduced to an initial.** These came in as private
 *    service enquiries rather than as public reviews, so the full name is
 *    not ours to publish.
 */

export interface Review {
  /** First name plus surname initial. Never the full surname. */
  name: string;
  /**
   * City we are willing to assert. Undefined where the record disagreed
   * with itself; the ticker then shows the name alone.
   */
  city?: string;
  /** The language the customer actually wrote in. Never translated. */
  lang: 'en' | 'es';
  /** The customer's own words, verbatim. */
  text: string;
}

export const reviews: Review[] = [
  {
    name: 'Ben',
    // Page said Miami, ZIP said Brooklyn. Plausible second home, not assertable.
    lang: 'en',
    text: 'Florida Breeze came out the same week. They cleaned everything properly and that weird AC smell is finally gone. Price was clear upfront, no surprises.',
  },
  {
    name: 'Tierra',
    city: 'Lake Worth',
    lang: 'en',
    text: 'I booked Florida Breeze for duct cleaning. They showed up on time, were respectful in the house, and showed me before and after. The air already feels better.',
  },
  {
    name: 'Luis S.',
    // Stated Lakeland, ZIP 33837 is Davenport in Polk County. ZIP decides.
    city: 'Davenport',
    lang: 'es',
    text: 'Excelente servicio de Florida Breeze. Limpiaron los ductos con cuidado, el precio fue claro desde el principio, y el aire se siente mucho mejor.',
  },
  {
    name: 'Albany A.',
    // Stated Orlando, ZIP 33604 is Tampa. ZIP decides.
    city: 'Tampa',
    lang: 'es',
    text: 'Muy contenta con Florida Breeze. Contestaron rápido, trabajaron limpio, y me explicaron todo sin presión.',
  },
  {
    name: 'Yosdany Ll.',
    city: 'Hialeah',
    lang: 'es',
    text: 'Florida Breeze hizo una limpieza profesional. Llegaron puntuales, fueron honestos con el precio, y se nota la diferencia en el aire.',
  },
  {
    name: 'Steven H.',
    city: 'Naples',
    lang: 'en',
    text: 'Really solid experience with Florida Breeze. Transparent quote, careful work, and the musty smell from the vents is gone.',
  },
  {
    name: 'Marcos E.',
    city: 'Lehigh Acres',
    lang: 'es',
    text: 'Recomiendo Florida Breeze. La limpieza salió bien, los técnicos fueron amables, y no hubo costos ocultos.',
  },
  {
    name: 'Radcliffe R.',
    city: 'Port St. Lucie',
    lang: 'en',
    text: 'Florida Breeze scheduled me quickly and were careful in the house. The ducts look clean and the airflow feels stronger.',
  },
  {
    name: 'Carmen M.',
    // Stated Coconut Creek, ZIP 33063 is Margate. ZIP decides.
    city: 'Margate',
    lang: 'es',
    text: 'Muy buen servicio. Limpiaron los ductos, dejaron todo ordenado, y el olor a humedad desapareció.',
  },
  {
    name: 'Marco D.',
    city: 'Royal Palm Beach',
    lang: 'en',
    text: 'Called Florida Breeze for duct cleaning in Royal Palm Beach. Professional crew, clear pricing, great result.',
  },
];

/** How many we actually have. Never hardcode this number in copy. */
export const reviewCount = reviews.length;
