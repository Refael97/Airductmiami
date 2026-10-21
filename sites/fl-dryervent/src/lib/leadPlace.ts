/**
 * Turning what a visitor typed into a place, in the browser.
 *
 * Two forms of the same question. A ZIP is exact, so it gives back a city
 * and a county. A city typed by hand is not, so it gives back a county only
 * where the name is unambiguous, and nothing where it is not.
 *
 * Both tables are fetched rather than imported. Between them they are about
 * 53KB of JSON, which would otherwise be bundled into the JavaScript of all
 * 351 pages to serve the small fraction of visits that fill a form in. Here
 * they cost nothing until somebody starts typing, and each is fetched at
 * most once per page.
 *
 * Everything here fails to an empty string. A lead that arrives without a
 * county is a lead. A lead lost because a lookup threw is not.
 */

let zips: Promise<Record<string, string>> | null = null;
let cities: Promise<Record<string, string>> | null = null;

const grab = (url: string) =>
  fetch(url)
    .then((r) => (r.ok ? r.json() : {}))
    .catch(() => ({}));

/** Warm the tables. Call when a form opens or is first focused. */
export function preloadPlaces(): void {
  zips ??= grab('/data/fl-zip-cities.json');
  cities ??= grab('/data/fl-city-counties.json');
}

export interface Place {
  city: string;
  /** Already carries the word "County", or empty. */
  county: string;
}

/** Exact. Empty strings for a non-Florida ZIP or a typo. */
export async function placeFromZip(zip: string): Promise<Place> {
  const key = String(zip || '').trim().slice(0, 5);
  if (!/^\d{5}$/.test(key)) return { city: '', county: '' };
  zips ??= grab('/data/fl-zip-cities.json');
  const hit = (await zips)[key];
  if (!hit) return { city: '', county: '' };
  const [city, county] = hit.split('|');
  return { city, county: county ? `${county} County` : '' };
}

/**
 * Inexact, and labelled as such by the caller. Empty for out of state, a
 * typo, or one of the handful of Florida city names that sit in two
 * counties at once, where the server-side index omits the name rather than
 * pick a side.
 */
export async function countyFromCity(name: string): Promise<string> {
  const key = String(name || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z\s]/g, ' ')
    .replace(/\bft\b/g, 'fort')
    .replace(/\bst\b/g, 'saint')
    .replace(/\s+/g, ' ')
    .trim();
  if (!key) return '';
  cities ??= grab('/data/fl-city-counties.json');
  const county = (await cities)[key];
  return county ? `${county} County` : '';
}

/** Set a hidden input by name, if the form has one. */
export function setHidden(form: HTMLFormElement, name: string, value: string): void {
  const el = form.querySelector(`input[name="${name}"]`) as HTMLInputElement | null;
  if (el) el.value = value;
}
