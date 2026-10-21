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

/** Uses the priced title only when it fits whole. */
function titled(base: string, price: string): string {
  const full = `${base} | ${price}`;
  return full.length <= LIMITS.title ? full : fit(base, LIMITS.title);
}

export function cityMeta(name: string) {
  return {
    title: titled(`Dryer Vent Cleaning in ${name}, FL`, `$${PRICE.cleanLow} to $${PRICE.cleanHigh}`),
    description: fit(
      `Dryer vent cleaning in ${name} for $${PRICE.cleanLow} to $${PRICE.cleanHigh}, repair and new dryer duct installation $${PRICE.workLow} to $${PRICE.workHigh}. Airflow measured before and after.`,
      LIMITS.description,
    ),
  };
}

export function cityMetaEs(name: string) {
  return {
    title: titled(`Ventila de Secadora en ${name}, FL`, `$${PRICE.cleanLow} a $${PRICE.cleanHigh}`),
    description: fit(
      `Limpieza de ventila de secadora en ${name} por $${PRICE.cleanLow} a $${PRICE.cleanHigh}, reparación e instalación $${PRICE.workLow} a $${PRICE.workHigh}. Medimos el flujo antes y después.`,
      LIMITS.description,
    ),
  };
}

export function regionMeta(name: string) {
  return {
    title: titled(`Dryer Vent Cleaning in ${name}`, `$${PRICE.cleanLow} to $${PRICE.cleanHigh}`),
    description: fit(
      `Dryer vent cleaning, repair and installation across ${name}. Cleaning $${PRICE.cleanLow} to $${PRICE.cleanHigh}, price before we book, airflow measured before and after.`,
      LIMITS.description,
    ),
  };
}

export function regionMetaEs(name: string) {
  return {
    title: titled(`Ventila de Secadora en ${name}`, `$${PRICE.cleanLow} a $${PRICE.cleanHigh}`),
    description: fit(
      `Limpieza, reparación e instalación de ventilas de secadora en ${name}. Limpieza $${PRICE.cleanLow} a $${PRICE.cleanHigh}, precio antes de agendar.`,
      LIMITS.description,
    ),
  };
}
