/**
 * Contenido en español de cada ciudad, con la misma clave (slug) que
 * cities.ts. Un archivo por región en cities-es/, ensamblados aquí.
 *
 * Una ciudad sin entrada aquí se muestra en inglés en lugar de romper el
 * build, así que el espejo se puede escribir por regiones.
 */
import type { CityEs } from './types';
import { miamiDadeCountyCitiesEs } from './cities-es/miami-dade-county';
import { browardCountyCitiesEs } from './cities-es/broward-county';
import { palmBeachTreasureCoastCitiesEs } from './cities-es/palm-beach-treasure-coast';
import { tampaBayCitiesEs } from './cities-es/tampa-bay';
import { centralFloridaCitiesEs } from './cities-es/central-florida';
import { southwestFloridaCitiesEs } from './cities-es/southwest-florida';
import { northFloridaCitiesEs } from './cities-es/north-florida';

export const cityEs: Record<string, CityEs> = {
  ...miamiDadeCountyCitiesEs,
  ...browardCountyCitiesEs,
  ...palmBeachTreasureCoastCitiesEs,
  ...tampaBayCitiesEs,
  ...centralFloridaCitiesEs,
  ...southwestFloridaCitiesEs,
  ...northFloridaCitiesEs,
};
