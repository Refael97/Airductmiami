/**
 * Title and description builders for the pages that live or die on click
 * through rate.
 *
 * Written against the Search Console export of 16 August 2026, which showed
 * 2,759 impressions and 18 clicks over seven days, a rate of 0.65 percent.
 * The rankings were not the problem. Bradenton sat at position 19 with 183
 * impressions and no clicks, Kendall at 24 with 52, and a query for
 * "hollywood" ranked first with none. Pages were being shown and passed over.
 *
 * Three things were wrong with what Google was displaying.
 *
 * Descriptions ran 172 to 184 characters. Google truncates around 155, so
 * the closing hook was cut off every time and nobody ever read it.
 *
 * Every city said the same sentence. "Professional air duct and dryer vent
 * cleaning in X, Y County. Licensed, insured, NADCA-standard technicians."
 * That is the sentence every competitor writes, so it gives a searcher no
 * reason to choose this result over the four above it.
 *
 * And no price appeared anywhere, even though the site publishes them in the
 * FAQ on every one of these pages. In a trade where the whole first page
 * says "call for a free quote", a number is the strongest differentiator
 * available, and it is the one thing a competitor cannot copy without
 * committing to it.
 */

/** Published Florida pricing. Single source, so a change lands everywhere. */
export const PRICES = {
  ductLow: 300,
  ductHigh: 600,
  ventLow: 100,
  ventHigh: 200,
} as const;

/** Roughly what Google renders before truncating. */
export const LIMITS = { title: 60, description: 155 } as const;

/**
 * Trims to a limit on a word boundary. Nothing here should ever hit this in
 * normal use; it exists so a long city name cannot silently ship a title
 * that Google cuts mid word.
 */
export function fit(text: string, limit: number): string {
  if (text.length <= limit) return text;
  const cut = text.slice(0, limit);
  const at = cut.lastIndexOf(' ');
  return (at > limit * 0.6 ? cut.slice(0, at) : cut).trimEnd();
}

export interface CityMetaInput {
  name: string;
  county: string;
}

/**
 * City page meta, English.
 *
 * The title leads with the service and the place, then the price. The brand
 * is dropped: Google appends the site name itself, and those characters buy
 * more as a number than as a repeat of the domain.
 *
 * "Dryer vents from $100" is in the description rather than the title
 * because the dryer vent queries are a real cluster in their own right,
 * 90 impressions on "dryer vent cleaning deerfield" alone, but the duct
 * phrase is what most searches lead with.
 */
export function cityMeta({ name, county }: CityMetaInput) {
  const title = fit(`Air Duct Cleaning in ${name}, FL | From $${PRICES.ductLow}`, LIMITS.title);
  const description = fit(
    `Air duct cleaning in ${name}, ${county} from $${PRICES.ductLow}. ` +
      `Dryer vents from $${PRICES.ventLow}. You get the price before we book, not after. Licensed and insured.`,
    LIMITS.description,
  );
  return { title, description };
}

/** City page meta, Spanish. Written for the language, not translated. */
export function cityMetaEs({ name, county }: CityMetaInput) {
  const title = fit(`Limpieza de Ductos en ${name}, FL | Desde $${PRICES.ductLow}`, LIMITS.title);
  const description = fit(
    `Limpieza de ductos en ${name} desde $${PRICES.ductLow} y ventila de secadora desde $${PRICES.ventLow}. ` +
      `Le damos el precio antes de agendar. Con licencia y seguro.`,
    LIMITS.description,
  );
  return { title, description };
}

/** Region page meta. Same logic, wider area. */
export function regionMeta(name: string) {
  return {
    title: fit(`Air Duct Cleaning in ${name} | From $${PRICES.ductLow}`, LIMITS.title),
    description: fit(
      `Air duct cleaning across ${name} from $${PRICES.ductLow}, dryer vents from $${PRICES.ventLow}. ` +
        `Upfront price before we book. Licensed, insured, NADCA standards.`,
      LIMITS.description,
    ),
  };
}

export function regionMetaEs(name: string) {
  return {
    title: fit(`Limpieza de Ductos en ${name} | Desde $${PRICES.ductLow}`, LIMITS.title),
    description: fit(
      `Limpieza de ductos en ${name} desde $${PRICES.ductLow} y ventila de secadora desde $${PRICES.ventLow}. ` +
        `Precio antes de agendar. Con licencia y seguro.`,
      LIMITS.description,
    ),
  };
}
