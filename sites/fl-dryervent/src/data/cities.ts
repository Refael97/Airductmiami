/**
 * Every city with a page. Content lives in ./cities/batch*.ts, written per
 * city; this file only gathers it and answers lookups.
 */
import type { CityContent, RegionName } from './cityTypes';
import { cityBatchA } from './cities/batchA';
import { cityBatchB } from './cities/batchB';

export type City = CityContent;
export type { RegionName };

export const cities: City[] = [...cityBatchA, ...cityBatchB];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

/** Region display order: where the demand is, south to north. */
export const REGION_ORDER: RegionName[] = [
  'Palm Beach County',
  'Broward County',
  'Miami-Dade County',
  'Southwest Florida',
  'Central Florida',
  'Tampa Bay',
];

export const REGION_ES: Record<RegionName, string> = {
  'Palm Beach County': 'Condado de Palm Beach',
  'Broward County': 'Condado de Broward',
  'Miami-Dade County': 'Condado de Miami-Dade',
  'Southwest Florida': 'Suroeste de Florida',
  'Central Florida': 'Centro de Florida',
  'Tampa Bay': 'Tampa Bay',
};

export function citiesByRegion(): [RegionName, City[]][] {
  return REGION_ORDER.map((r) => [r, cities.filter((c) => c.region === r)] as [RegionName, City[]]).filter(
    ([, list]) => list.length > 0,
  );
}
