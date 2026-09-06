/**
 * The 52 service-area pages, per research/fl-garage/BRIEF.md section 6.
 *
 * Selection is weighted by search volume (Semrush, 6 September 2026),
 * garage density and job value. Every city carries genuinely local copy:
 * a templated city page with the name swapped in is thin content and
 * Google treats it that way, so each entry states something true about
 * the housing stock, the garages, the storms, or the failures we see.
 *
 * Cities live in one file per region so they can be written and reviewed
 * independently. This file only assembles them.
 */

import type { City } from './types';
import { miamiDadeCountyCities } from './cities/miami-dade-county';
import { browardCountyCities } from './cities/broward-county';
import { palmBeachTreasureCoastCities } from './cities/palm-beach-treasure-coast';
import { tampaBayCities } from './cities/tampa-bay';
import { centralFloridaCities } from './cities/central-florida';
import { southwestFloridaCities } from './cities/southwest-florida';
import { northFloridaCities } from './cities/north-florida';

export type { City } from './types';

export const cities: City[] = [
  ...miamiDadeCountyCities,
  ...browardCountyCities,
  ...palmBeachTreasureCoastCities,
  ...tampaBayCities,
  ...centralFloridaCities,
  ...southwestFloridaCities,
  ...northFloridaCities,
];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug);

/** Cities grouped by region, in region order, tier order within. */
export const citiesByRegion = (regionSlug: string) =>
  cities.filter((c) => c.region === regionSlug).sort((a, b) => a.tier - b.tier);

/** Ordered for the hub page: highest lead potential first. */
export const citiesByPotential = () =>
  [...cities].sort((a, b) => a.tier - b.tier || a.name.localeCompare(b.name));
