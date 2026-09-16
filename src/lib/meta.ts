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
 *
 * "AC vent" was added to the description on 13 September 2026. Search
 * Console had the city pages being shown for "ac vent cleaning deerfield
 * beach fl" at position 9.2, sixty seven times, with no clicks, and for
 * "ac duct cleaning" plus a city across Bradenton, Hollywood, Pembroke
 * Pines, Boca Raton, Sarasota and Clearwater. Those pages contained the
 * strings "AC vent", "AC duct" and "air conditioner" exactly zero times.
 *
 * The Spanish pages are the control group and they settle the argument.
 * They do carry the phrase, because "ductos de aire acondicionado" is
 * simply how it is said, and the one query that converts best on the whole
 * site is "limpieza de ductos de aire acondicionado cerca de mi": position
 * 3.8 and a 15 percent click through rate. Same business, same service,
 * same country. The difference is the vocabulary on the page.
 *
 * It goes in the description and not the title on purpose. On Deerfield the
 * duct phrasing is worth roughly 615 impressions a month against 67 for the
 * AC phrasing, and the title has room for one lead term, not two.
 */
export function cityMeta({ name, county }: CityMetaInput) {
  const title = fit(`Air Duct Cleaning in ${name}, FL | From $${PRICES.ductLow}`, LIMITS.title);
  const description = fit(
    `Air duct and AC vent cleaning in ${name}, ${county} from $${PRICES.ductLow}. ` +
      `Dryer vents from $${PRICES.ventLow}. You get the price before we book, not after.`,
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

/**
 * Dryer vent city page meta.
 *
 * Built for a cluster the site was showing up for and losing. In Deerfield
 * Beach alone, "dryer vent cleaning deerfield" carried 318 impressions at
 * position 48.3 and "deerfield dryer vent cleaning" 170 at 50.8, against an
 * air duct cleaning page that mentions dryer vents in passing. The title
 * leads with the exact phrase people type, then the price, because in this
 * cluster the competing results are almost all "call for a free estimate".
 *
 * "$100" rather than "$100 to $200" in the title: the range costs eleven
 * characters and buys nothing at a glance, and the full range is in the
 * description and on the page itself.
 */
export function dryerVentCityMeta({ name, county }: CityMetaInput) {
  const title = fit(`Dryer Vent Cleaning in ${name}, FL | From $${PRICES.ventLow}`, LIMITS.title);
  const description = fit(
    `Dryer vent cleaning in ${name}, ${county} from $${PRICES.ventLow}. ` +
      `Clogged vents cause fires and double your drying time. Price before we book.`,
    LIMITS.description,
  );
  return { title, description };
}

/**
 * Air duct repair city page meta.
 *
 * Built for a cluster that had no page at all. Roughly 450 impressions a
 * month of city plus repair queries, led by "ductwork repair bradenton" at
 * 113 impressions and position 32.1 and "duct services and repair in
 * deerfield beach" at 79. The nearest thing the site offered was a statewide
 * repair service page, which is why the ranked position for every one of
 * them sat in the thirties and eighties.
 *
 * The title leads with repair rather than cleaning because the two are
 * different purchases, and a searcher whose duct has come apart is not
 * shopping for a cleaning. No price in the title: repair genuinely varies
 * from a few hundred to a full replacement, and a "from" figure on this one
 * would be the bait pricing the site argues against everywhere else.
 */
export function ductRepairCityMeta({ name, county }: CityMetaInput) {
  const title = fit(`Air Duct Repair in ${name}, FL | Leaks and Sealing`, LIMITS.title);
  const description = fit(
    `Duct repair and sealing in ${name}, ${county}. We find the failures, show you them, ` +
      `and quote repair alongside replacement. Airflow tested before and after.`,
    LIMITS.description,
  );
  return { title, description };
}

/**
 * Dryer vent and duct repair city meta, Spanish.
 *
 * Written for the language rather than translated, on the same rule as
 * cityMetaEs. Two words earn their place: "ventila" is what a Florida
 * Spanish speaker calls a dryer vent, not "conducto de secadora", and
 * "ductos" beats the more formal "conductos" in this market, which the
 * query data bears out.
 */
export function dryerVentCityMetaEs({ name }: CityMetaInput) {
  /* Deliberately shorter than the English twin. "Limpieza de Ventila de
     Secadora en Fort Myers, FL | Desde $100" overruns the title limit and
     fit() truncates it to a dangling "| Desde", which is worse in a result
     than the shorter phrase. Spanish is simply a longer language and the
     budget has to be spent differently. */
  const title = fit(`Ventila de Secadora en ${name}, FL | Desde $${PRICES.ventLow}`, LIMITS.title);
  const description = fit(
    `Limpieza de ventila de secadora en ${name} desde $${PRICES.ventLow}. ` +
      `Una ventila tapada causa incendios y duplica el tiempo de secado. Precio antes de agendar.`,
    LIMITS.description,
  );
  return { title, description };
}

/** Duct repair city page meta, Spanish. No price, for the reason above. */
export function ductRepairCityMetaEs({ name }: CityMetaInput) {
  const title = fit(`Reparación de Ductos en ${name}, FL | Fugas y Sellado`, LIMITS.title);
  const description = fit(
    `Reparación y sellado de ductos en ${name}. Encontramos las fallas, se las mostramos, ` +
      `y le cotizamos reparar junto a reemplazar. Medimos el flujo antes y después.`,
    LIMITS.description,
  );
  return { title, description };
}
