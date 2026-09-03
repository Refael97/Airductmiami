/**
 * Illustration images for service pages, shared by both languages.
 *
 * Two rules, the same ones the garage site runs on.
 *
 * First, these are illustrations, not evidence. Each one shows the condition
 * or the equipment a service page describes, never a job this business
 * performed. The real before and after photographs on the home page came
 * from the customer and are the only images on this site presented as proof
 * of work. See docs/MEDIA-STANDARD.md, which draws that line explicitly, and
 * note that none of these may be uploaded to a Google Business Profile,
 * where photos are read as documentation of the business.
 *
 * Second, an entry renders only if the file exists on disk. Images are
 * produced through a service whose CDN this build environment cannot reach,
 * so they arrive in the repo separately from the code that references them.
 * `hasImage` checks public/images at build time, so a missing file degrades
 * to no image rather than to a broken one, and a page starts showing its
 * illustration the moment the file lands, with no template edit.
 */
import fs from 'node:fs';
import path from 'node:path';

export interface PageImage {
  file: string;
  /** English alt. Describes the condition, never repeats the heading. */
  alt: string;
  /** Spanish alt, for the /es/ mirror. */
  altEs: string;
}

export function hasImage(img: PageImage | undefined): img is PageImage {
  if (!img) return false;
  return fs.existsSync(path.join(process.cwd(), 'public', 'images', img.file));
}

export const serviceImages: Record<string, PageImage> = {
  'air-duct-cleaning': {
    file: 'duct-interior-dust.webp',
    alt: 'Flexible air duct opened at an access point, the interior wall coated in a heavy grey blanket of dust, with a negative air machine hose connected to the trunk line',
    altEs: 'Ducto flexible abierto en un punto de acceso, la pared interior cubierta por una gruesa capa gris de polvo, con la manguera de una máquina de presión negativa conectada al ducto principal',
  },
  'dryer-vent-cleaning': {
    file: 'dryer-vent-lint-blockage.webp',
    alt: 'Dryer vent duct pulled from the wall packed solid with compacted grey lint, more lint spilling onto the laundry room floor',
    altEs: 'Ducto de la ventila de la secadora retirado de la pared, completamente tapado con pelusa gris compactada que se derrama al piso del cuarto de lavado',
  },
  'dryer-vent-installation': {
    file: 'new-dryer-vent-duct.webp',
    alt: 'Newly installed rigid smooth wall metal dryer vent running from behind the dryer through the exterior wall, joints sealed with foil tape',
    altEs: 'Ventila de secadora nueva de metal rígido de pared lisa, instalada desde atrás de la secadora hacia la pared exterior, con uniones selladas con cinta de aluminio',
  },
  'hvac-cleaning': {
    file: 'dirty-evaporator-coil.webp',
    alt: 'Evaporator coil inside an opened air handler, the aluminium fins matted with grey biological grime and dark staining, moisture in the drain pan below',
    altEs: 'Serpentina del evaporador dentro de una manejadora abierta, las aletas de aluminio cubiertas de suciedad biológica gris y manchas oscuras, con humedad en la bandeja de drenaje',
  },
  'air-duct-repair': {
    file: 'disconnected-flex-duct.webp',
    alt: 'Flexible duct come apart at its collar in an attic, the insulated sleeve torn open and hanging loose from the sheet metal boot with a visible gap',
    altEs: 'Ducto flexible desprendido de su collarín en el ático, la funda aislante rasgada y colgando suelta de la bota metálica, con una separación visible',
  },
  'mold-remediation': {
    file: 'mold-on-supply-register.webp',
    alt: 'Ceiling supply register removed and set down, heavy black mould growth across the back of the louvres and around the boot opening above',
    altEs: 'Rejilla de suministro del techo retirada, con abundante moho negro en la parte posterior de las persianas y alrededor de la abertura de la bota',
  },
  'air-duct-sanitizing': {
    file: 'duct-sanitizing-fog.webp',
    alt: 'Looking along the clean sheet metal interior of a duct trunk line after cleaning, a fine sanitising mist drifting through and catching the work light',
    altEs: 'Vista a lo largo del interior limpio de un ducto principal de lámina después de la limpieza, con una fina niebla sanitizante flotando e iluminada por la lámpara de trabajo',
  },
  'commercial-air-duct-cleaning': {
    file: 'commercial-rooftop-unit.webp',
    alt: 'Rooftop HVAC package unit on a Florida commercial building with an access panel open, showing wide rectangular supply ductwork and the filter rack inside',
    altEs: 'Unidad paquete de aire acondicionado en la azotea de un edificio comercial en Florida con el panel de acceso abierto, mostrando ductos rectangulares de suministro y el portafiltros interior',
  },
  'uv-light-installation': {
    file: 'uv-lamp-in-air-handler.webp',
    alt: 'Germicidal UV lamp mounted above the evaporator coil inside an air handler, glowing deep violet blue with the coil fins lit below it',
    altEs: 'Lámpara UV germicida instalada sobre la serpentina del evaporador dentro de una manejadora, encendida en azul violeta intenso e iluminando las aletas de la serpentina',
  },
  'indoor-air-quality-testing': {
    file: 'air-quality-sampling-pump.webp',
    alt: 'Indoor air quality sampling pump on a tripod in a living room, intake tube and cassette filter head fitted, a handheld particle counter on the table beside it',
    altEs: 'Bomba de muestreo de calidad del aire sobre un tripié en una sala, con tubo de entrada y cabezal de casete instalados, y un contador de partículas portátil en la mesa',
  },
  'attic-insulation': {
    file: 'blown-attic-insulation.webp',
    alt: 'Freshly blown loose fill insulation covering the joists of a Florida attic in an even thick layer, a depth marker standing in it, radiant barrier decking above',
    altEs: 'Aislamiento soplado nuevo cubriendo las viguetas de un ático en Florida en una capa gruesa y pareja, con un marcador de profundidad y barrera radiante en el techo',
  },
};

/**
 * The home page hero.
 *
 * The hero shipped as a flat SVG illustration, which read as a placeholder
 * next to the photographic illustrations on every service page. Same
 * existence guard as everything else here: until the webp lands in
 * public/images the page keeps the SVG, so a missing file never produces a
 * broken hero on the site's most important page.
 *
 * Slot is 800x620 in the layout, so the file should be roughly 4:3 and about
 * 1600px wide before compression.
 */
export const heroImage: PageImage & { fallback: string } = {
  file: 'hero-florida-living-room.webp',
  fallback: 'hero-home.svg',
  alt: 'Bright Florida living room in late morning light, sliding doors open onto a palm-shaded patio, a ceiling supply register above delivering clean cool air',
  altEs: 'Sala luminosa de una casa en Florida a media mañana, con puertas corredizas abiertas hacia un patio con palmeras y una rejilla de techo entregando aire limpio y fresco',
};

/**
 * The promo popup's desktop side panel.
 *
 * Desktop only by design. On mobile the visual collapses to a short banner
 * above the form, where a portrait crop would either be unreadable or would
 * push the form below the fold, and the form is the entire point of the
 * popup.
 *
 * The overlaid $50 badge stays HTML rather than being part of the image, so
 * it stays translatable for the Spanish popup and stays selectable text.
 * Anything dropped in here should therefore have no lettering baked in.
 * See docs/MEDIA-STANDARD.md.
 */
export const promoAsideImage: PageImage = {
  file: 'promo-aside.webp',
  alt: '',
  altEs: '',
};
