/**
 * Every photo on the site, with alt text in both languages. Pages ask for a
 * photo by role (a service, a city) rather than by file name, so swapping a
 * picture is a one line change here.
 *
 * Each photo ships in two widths: `src` (large) and `small` for srcset.
 */
export interface Photo {
  src: string;
  small: string;
  w: number;
  h: number;
  alt: string;
  altEs: string;
}

function photo(name: string, w: number, h: number, smallW: number, alt: string, altEs: string): Photo {
  return { src: `/images/${name}.webp`, small: `/images/${name}-${smallW}.webp`, w, h, alt, altEs };
}

export const photos = {
  hero: photo('technician-cleaning-wall-vent', 1600, 1063, 800,
    'Technician running a rotary brush into an outside dryer vent hood on a Florida home',
    'Técnico pasando un cepillo rotativo por la salida de la ventila de secadora en una casa de Florida'),
  cleaningInside: photo('laundry-room-vent-cleaning', 1200, 896, 640,
    'Dryer pulled out and a rotary brush going into the wall duct, lint on the floor',
    'Secadora separada de la pared y cepillo rotativo entrando al ducto, con pelusa en el piso'),
  cloggedHood: photo('clogged-wall-vent-hood', 1200, 896, 640,
    'Outside dryer vent hood packed with lint on a stucco wall',
    'Salida de ventila en pared de estuco tapada de pelusa'),
  roofCap: photo('roof-vent-cap-bird-nest', 1200, 896, 640,
    'Roof dryer vent cap opened on a tile roof, packed with lint and nest material',
    'Salida de ventila en techo de tejas abierta, llena de pelusa y restos de nido'),
  condoCloset: photo('condo-laundry-closet', 1200, 896, 640,
    'Technician checking the transition duct behind a stacked washer and dryer in a condo closet',
    'Técnico revisando el ducto detrás de una lavadora y secadora apiladas en un clóset de condominio'),
  airflowMeter: photo('airflow-meter-reading', 1200, 896, 640,
    'Airflow meter held at an outside dryer vent hood',
    'Medidor de flujo de aire frente a la salida de la ventila de secadora'),
  foilTape: photo('rigid-duct-foil-tape', 1200, 896, 640,
    'Joint of a new rigid metal dryer duct being sealed with foil tape in an attic',
    'Unión de un ducto rígido de metal sellada con cinta de aluminio en el ático'),
  condoBuilding: photo('florida-condo-building', 1200, 896, 640,
    'Mid rise condominium building in South Florida',
    'Edificio de condominios en el sur de Florida'),
  lintBehindDryer: photo('lint-behind-dryer', 1080, 806, 640,
    'Foil transition hose behind a dryer packed with lint',
    'Manguera de aluminio detrás de la secadora llena de pelusa'),
  newRigidDuct: photo('new-rigid-dryer-duct', 1080, 806, 640,
    'New rigid metal dryer duct installed from the dryer to the wall',
    'Ducto rígido de metal nuevo instalado de la secadora a la pared'),
  atticSeparated: photo('attic-duct-separated', 1080, 806, 640,
    'Duct that has come apart in an attic, blowing into the insulation',
    'Ducto separado en el ático soplando sobre el aislamiento'),
  foilClogged: photo('foil-duct-clogged', 1080, 806, 640,
    'Crushed foil duct in an attic, clogged with lint',
    'Ducto de aluminio aplastado en el ático, tapado de pelusa'),
  runBefore: photo('vent-run-before', 1000, 666, 560,
    'Inside of a dryer vent run lined with lint before cleaning',
    'Interior del ducto de la secadora cubierto de pelusa antes de limpiar'),
  runAfter: photo('vent-run-after', 1000, 666, 560,
    'Inside of the same vent run after cleaning',
    'Interior del mismo ducto después de limpiar'),
  roofCleaning: photo('roof-dryer-vent-cleaning', 1200, 896, 640,
    'Technician on a tile roof running a brush into a roof dryer vent cap',
    'Técnico en un techo de tejas pasando el cepillo por la salida de la ventila'),
  commercialLaundry: photo('commercial-laundry-room', 1200, 896, 640,
    'Common laundry room with stacked washers and dryers in a Florida apartment building',
    'Lavandería común con lavadoras y secadoras apiladas en un edificio de Florida'),
  boosterFan: photo('dryer-booster-fan', 1200, 896, 640,
    'Inline dryer booster fan installed in a rigid metal dryer duct',
    'Extractor auxiliar instalado en un ducto rígido de metal de la secadora'),
  inspectionCamera: photo('dryer-vent-inspection-camera', 1200, 896, 640,
    'Technician checking inside a dryer vent run behind the dryer',
    'Técnico revisando el interior del ducto detrás de la secadora'),
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

/** The lead photo for each service page and service card. */
export const servicePhoto: Record<string, Photo> = {
  'dryer-vent-cleaning': photos.cleaningInside,
  'dryer-vent-repair': photos.foilTape,
  'dryer-vent-installation': photos.newRigidDuct,
  'roof-and-wall-vent-caps': photos.roofCap,
  'condo-and-apartment-dryer-vents': photos.condoCloset,
  'dryer-vent-inspection': photos.inspectionCamera,
  'roof-dryer-vent-cleaning': photos.roofCleaning,
  'commercial-dryer-vent-cleaning': photos.commercialLaundry,
  'dryer-booster-fan-installation': photos.boosterFan,
};

/**
 * City pages: a photo picked from a pool by the slug, so neighbouring
 * cities do not all open with the same picture. Stable between builds.
 */
const cityPool: Photo[] = [
  photos.cloggedHood, photos.cleaningInside, photos.airflowMeter, photos.roofCap,
  photos.lintBehindDryer, photos.condoCloset, photos.atticSeparated, photos.hero,
];
export function cityPhoto(slug: string): Photo {
  let h = 0;
  for (const ch of slug) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return cityPool[h % cityPool.length];
}

export function altFor(p: Photo, lang: 'en' | 'es' = 'en'): string {
  return lang === 'es' ? p.altEs : p.alt;
}

/** Blog cards and article headers: one photo per category, both languages. */
const categoryPhotos: Record<string, Photo> = {
  'Dryer Vent Cleaning': photos.cleaningInside,
  'Limpieza de Ventilas': photos.cleaningInside,
  'Fire Safety': photos.lintBehindDryer,
  'Prevención de Incendios': photos.lintBehindDryer,
  'Installation & Code': photos.foilTape,
  'Instalación y Código': photos.foilTape,
  'Costs & Buying Guides': photos.airflowMeter,
  'Costos y Guías': photos.airflowMeter,
  'Condos & Buildings': photos.condoBuilding,
  'Condominios y Edificios': photos.condoBuilding,
};
export function categoryPhoto(category: string): Photo {
  return categoryPhotos[category] ?? photos.cloggedHood;
}
