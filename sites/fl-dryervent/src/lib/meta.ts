/**
 * Titles and descriptions for the pages that live on click through rate.
 * Keyword first, then the price: the competing results in this trade are
 * almost all "call for a free estimate", and a number is the difference.
 */
import { PRICE } from '../data/services';

export const LIMITS = { title: 60, description: 155 } as const;

/** Trims to a limit on a word boundary so nothing ships cut mid word. */
export function fit(text: string, limit: number): string {
  if (text.length <= limit) return text;
  const cut = text.slice(0, limit);
  const at = cut.lastIndexOf(' ');
  return (at > limit * 0.6 ? cut.slice(0, at) : cut).trimEnd();
}

/**
 * The first candidate that fits whole with the price, else the first that
 * fits without it. Lets the long, searched phrasing win when the city name
 * is short and fall back to a shorter phrasing when it is not.
 */
function titled(bases: string | string[], price: string): string {
  const list = Array.isArray(bases) ? bases : [bases];
  for (const b of list) {
    const full = `${b} | ${price}`;
    if (full.length <= LIMITS.title) return full;
  }
  return fit(list.find((b) => b.length <= LIMITS.title) ?? list[list.length - 1], LIMITS.title);
}

export function cityMeta(name: string) {
  return {
    title: titled(`Dryer Vent Cleaning in ${name}, FL`, `$${PRICE.cleanLow} to $${PRICE.cleanHigh}`),
    description: fit(
      `Dryer vent and dryer duct cleaning in ${name}, $${PRICE.cleanLow} to $${PRICE.cleanHigh}. Repair or a new run $${PRICE.workLow} to $${PRICE.workHigh}. Airflow measured before and after, price before we book.`,
      LIMITS.description,
    ),
  };
}

export function cityMetaEs(name: string) {
  return {
    title: titled(
      [`Limpieza de Ventila de Secadora en ${name}`, `Limpieza de Ventila en ${name}, FL`, `Ventila de Secadora en ${name}, FL`],
      `$${PRICE.cleanLow} a $${PRICE.cleanHigh}`,
    ),
    description: fit(
      `Limpieza de ventila y ducto de secadora en ${name}, cerca de usted. Precio: $${PRICE.cleanLow} a $${PRICE.cleanHigh}. Reparación o tramo nuevo $${PRICE.workLow} a $${PRICE.workHigh}. Flujo medido antes y después.`,
      LIMITS.description,
    ),
  };
}

export function regionMeta(name: string) {
  return {
    title: titled(`Dryer Vent Cleaning in ${name}`, `$${PRICE.cleanLow} to $${PRICE.cleanHigh}`),
    description: fit(
      `Dryer vent and dryer duct cleaning, repair and installation across ${name}. Cleaning $${PRICE.cleanLow} to $${PRICE.cleanHigh}, price before we book, airflow measured.`,
      LIMITS.description,
    ),
  };
}

export function regionMetaEs(name: string) {
  /* "en el Condado de Broward" reads right; drop the article only when the
     priced title would not otherwise fit. */
  const bare = name.replace(/^(el|la) /, '');
  return {
    title: titled(
      [`Limpieza de Ventila de Secadora en ${name}`, `Ventila de Secadora en ${name}`, `Ventila de Secadora en ${bare}`],
      `$${PRICE.cleanLow} a $${PRICE.cleanHigh}`,
    ),
    description: fit(
      `Limpieza, reparación e instalación de ventilas y ductos de secadora en ${name}. Precio de la limpieza: $${PRICE.cleanLow} a $${PRICE.cleanHigh}, confirmado antes de agendar.`,
      LIMITS.description,
    ),
  };
}
