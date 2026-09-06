/**
 * Illustration images for service, buyer's guide and home page slots.
 *
 * Two rules govern everything here.
 *
 * First, these are illustrations, not evidence. Every image is generated,
 * every page that shows one carries a note saying so, and none of them is
 * ever presented as a photograph of work this business performed. See
 * docs/TRUST-AND-CLAIMS.md. The same images must never be uploaded to a
 * Google Business Profile, where photos are read as documentation of the
 * business rather than as editorial illustration.
 *
 * Second, an entry here renders only if the file actually exists on disk.
 * `hasImage` checks `public/` at build time, which means a missing file
 * degrades to no image rather than to a broken one, and the page starts
 * showing it the moment the file lands. No template edit needed.
 *
 * Alt text is per language, because alt text is content.
 */
import fs from 'node:fs';
import path from 'node:path';
import type { Locale } from './ui';

export interface PageImage {
  /** Filename inside public/images. */
  file: string;
  /** Describes the hardware, never repeats the heading. */
  alt: string;
  altEs: string;
}

/** True when the file is present in public/images at build time. */
export function hasImage(img: PageImage | undefined): img is PageImage {
  if (!img) return false;
  return fs.existsSync(path.join(process.cwd(), 'public', 'images', img.file));
}

export const altFor = (lang: Locale, img: PageImage) => (lang === 'es' ? img.altEs : img.alt);

/** Service slug to its illustration. */
export const serviceImages: Record<string, PageImage> = {
  'garage-door-spring-replacement': {
    file: 'broken-torsion-spring.webp',
    alt: 'Snapped torsion spring on its shaft above a garage door, the coil separated with the ends splayed either side of the break',
    altEs: 'Resorte de torsión roto en su eje sobre una puerta de garaje, con el espiral separado y los extremos abiertos a cada lado de la rotura',
  },
  'garage-door-off-track-repair': {
    file: 'garage-door-off-track.webp',
    alt: 'Garage door with the top section pulled out of its vertical track and leaning inward, the roller clearly out of the rail',
    altEs: 'Puerta de garaje con la sección superior salida del riel vertical e inclinada hacia adentro, con el rodillo claramente fuera del riel',
  },
  'garage-door-cable-repair': {
    file: 'frayed-lift-cable.webp',
    alt: 'Frayed galvanised lift cable at the bottom bracket, individual wire strands broken and splayed outward with rust staining',
    altEs: 'Cable de elevación galvanizado deshilachado en el soporte inferior, con hilos rotos abiertos hacia afuera y manchas de óxido',
  },
  'garage-door-tune-up': {
    file: 'worn-garage-door-rollers.webp',
    alt: 'Worn garage door roller in its hinge, nylon wheel cracked and bearing seized, with grease staining around the stem',
    altEs: 'Rodillo de puerta de garaje desgastado en su bisagra, con la rueda de nailon agrietada y el rodamiento trabado, y manchas de grasa alrededor del vástago',
  },
  'garage-door-opener-repair': {
    file: 'opener-motor-unit.webp',
    alt: 'Chain drive opener motor unit with the light lens removed, exposing the sprocket, drive chain and safety sensor terminal block',
    altEs: 'Unidad de motor de cadena con la tapa de la luz retirada, dejando a la vista el piñón, la cadena y el bloque de terminales de los sensores',
  },
  'garage-door-opener-installation': {
    file: 'new-belt-drive-opener.webp',
    alt: 'Newly installed belt drive opener on garage ceiling joists, rubber belt running along the rail to the trolley and door arm',
    altEs: 'Motor de correa recién instalado en las vigas del techo del garaje, con la correa de goma corriendo por el riel hasta el carro y el brazo de la puerta',
  },
  'smart-garage-door-opener-installation': {
    file: 'smart-wall-console.webp',
    alt: 'Smart garage door wall console with a backlit display, motion sensor lens and a lit status indicator, mounted beside the door',
    altEs: 'Consola de pared inteligente con pantalla iluminada, sensor de movimiento e indicador de estado encendido, montada junto a la puerta',
  },
  'garage-door-panel-replacement': {
    file: 'dented-garage-door-panel.webp',
    alt: 'Garage door with the bottom section dented and creased inward across two thirds of its width, the panels above undamaged',
    altEs: 'Puerta de garaje con la sección inferior abollada y doblada hacia adentro en dos tercios de su ancho, con los paneles superiores intactos',
  },
  'new-garage-door-installation': {
    file: 'new-garage-door-installed.webp',
    alt: 'Newly installed white raised panel steel double garage door on a suburban house, closed and squarely aligned',
    altEs: 'Puerta de garaje doble de acero con paneles en relieve, blanca y recién instalada en una casa suburbana, cerrada y perfectamente alineada',
  },
  'hurricane-rated-garage-door-installation': {
    file: 'coastal-impact-garage-door.webp',
    alt: 'Impact-rated steel garage door on a concrete block house near the coast, heavy reinforcing struts visible through the open door',
    altEs: 'Puerta de garaje de acero resistente a impactos en una casa de bloque cerca de la costa, con los refuerzos horizontales visibles por la puerta abierta',
  },
  'storm-damage-garage-door-repair': {
    file: 'dented-garage-door-panel.webp',
    alt: 'Garage door sections pushed inward by wind pressure, the bottom panel creased and the track bent at the jamb',
    altEs: 'Secciones de una puerta de garaje empujadas hacia adentro por la presión del viento, con el panel inferior doblado y el riel torcido en el marco',
  },
  'emergency-garage-door-repair': {
    file: 'garage-door-stuck-at-night.webp',
    alt: 'Garage door jammed a third of the way open at night, light spilling out from inside across a wet driveway',
    altEs: 'Puerta de garaje trabada a un tercio de su recorrido de noche, con la luz saliendo del interior sobre una entrada mojada',
  },
};

/** Buyer's guide slug to its illustration. Door materials and drive types. */
export const productImages: Record<string, PageImage> = {
  'steel-garage-doors': {
    file: 'steel-garage-door.webp',
    alt: 'White pressed steel raised panel garage door, showing the stamped panel texture and crisp shadow lines',
    altEs: 'Puerta de garaje de acero prensado con paneles en relieve, blanca, con la textura estampada y líneas de sombra marcadas',
  },
  'aluminium-garage-doors': {
    file: 'aluminium-glass-garage-door.webp',
    alt: 'Contemporary flush garage door in anodised aluminium framing with wide bands of translucent frosted glass',
    altEs: 'Puerta de garaje contemporánea con marco de aluminio anodizado y franjas anchas de vidrio esmerilado translúcido',
  },
  'wood-garage-doors': {
    file: 'wood-carriage-garage-door.webp',
    alt: 'Stained cedar carriage house garage door with visible timber grain, black strap hinges and square upper windows',
    altEs: 'Puerta de garaje estilo cochera en cedro teñido con la veta visible, bisagras negras de correa y ventanas cuadradas superiores',
  },
  'fiberglass-garage-doors': {
    file: 'fiberglass-garage-door.webp',
    alt: 'Fiberglass garage door with a moulded woodgrain finish in oak tone, the composite sheen visible across the surface',
    altEs: 'Puerta de garaje de fibra de vidrio con acabado moldeado imitación madera en tono roble, con el brillo del compuesto visible en la superficie',
  },
  'vinyl-garage-doors': {
    file: 'vinyl-garage-door.webp',
    alt: 'Plain white vinyl garage door with shallow recessed panels and a soft low sheen surface',
    altEs: 'Puerta de garaje de vinilo blanco liso con paneles poco profundos y superficie de brillo suave',
  },
  'chain-drive-openers': {
    file: 'chain-drive-rail.webp',
    alt: 'Steel roller chain running along the top of an opener T-rail, links and sprocket in close focus',
    altEs: 'Cadena de acero corriendo por la parte superior del riel en T de un motor, con los eslabones y el piñón en primer plano',
  },
  'belt-drive-openers': {
    file: 'belt-drive-rail.webp',
    alt: 'Wide reinforced rubber belt running along an opener rail to the trolley, with no chain links anywhere',
    altEs: 'Correa ancha de goma reforzada corriendo por el riel de un motor hasta el carro, sin eslabones de cadena a la vista',
  },
  'screw-drive-openers': {
    file: 'screw-drive-rail.webp',
    alt: 'Threaded steel screw shaft running down the centre of an opener rail, coated in white lithium grease, trolley riding on the thread',
    altEs: 'Eje roscado de acero por el centro del riel de un motor, cubierto de grasa de litio blanca, con el carro montado sobre la rosca',
  },
  'direct-drive-openers': {
    file: 'direct-drive-opener.webp',
    alt: 'Compact direct drive motor block riding on a fixed opener rail, with no chain, belt or exposed drive visible',
    altEs: 'Bloque compacto de motor de transmisión directa montado sobre un riel fijo, sin cadena, correa ni transmisión a la vista',
  },
  'jackshaft-wall-mount-openers': {
    file: 'jackshaft-wall-mount-opener.webp',
    alt: 'Wall mounted jackshaft opener bolted beside the door opening driving the torsion shaft, the garage ceiling left completely clear',
    altEs: 'Motor lateral de pared atornillado junto al vano de la puerta, moviendo el eje de torsión, con el techo del garaje completamente despejado',
  },
};

/**
 * Home page door-type cards. The files are generated per docs/MEDIA-STANDARD.md
 * and arrive in the repo separately; a card whose file is missing renders
 * without an image rather than with a broken one.
 */
export const homeImages: Record<string, PageImage> = {
  'florida-cbs-double-door.webp': {
    file: 'florida-cbs-double-door.webp',
    alt: 'Single sixteen foot white steel double garage door on a 1980s concrete block and stucco house with a barrel tile roof and a palm in the yard',
    altEs: 'Puerta de garaje doble de acero blanca de dieciséis pies en una casa de bloque y estuco de los años 80 con techo de teja y una palma en el patio',
  },
  'coastal-impact-garage-door.webp': {
    file: 'coastal-impact-garage-door.webp',
    alt: 'Impact-rated steel garage door on a concrete block house near the coast, heavy reinforcing struts visible through the open door',
    altEs: 'Puerta de garaje de acero resistente a impactos en una casa de bloque cerca de la costa, con los refuerzos horizontales visibles por la puerta abierta',
  },
  'new-build-three-car-garage.webp': {
    file: 'new-build-three-car-garage.webp',
    alt: 'Three car garage on a new two storey house in a master planned Florida subdivision, a double door and a single door in matching tan',
    altEs: 'Garaje para tres carros en una casa nueva de dos pisos en una urbanización planificada de Florida, con una puerta doble y una sencilla del mismo color',
  },
};
