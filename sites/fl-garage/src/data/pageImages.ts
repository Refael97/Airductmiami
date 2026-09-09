/**
 * Illustration images for service, buyer's guide and home page slots.
 *
 * Two rules govern everything here.
 *
 * First, these are illustrations, not evidence. None of them is ever
 * presented as a photograph of work this business performed. The statement
 * saying so lives once, on the privacy page under "About the images on this
 * site", rather than under every grid of pictures: a disclaimer repeated at
 * every turn reads as an apology and nobody finishes it. What the rule
 * actually protects is that no image here claims a customer, a technician, a
 * certificate or a completed job. See docs/TRUST-AND-CLAIMS.md.
 *
 * These must never be uploaded to a Google Business Profile, where photos
 * are read as documentation of the business rather than as illustration.
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

/**
 * Parts catalogue illustrations.
 *
 * Studio product shots on a near white ground rather than cut out to
 * transparency, because every surface that renders one sits on a white card.
 * On white, a clean studio background and a transparent one are the same
 * picture, and the studio version keeps its contact shadow, which is what
 * stops a component from looking like it is floating.
 *
 * Several deliberately show the failed state rather than the new part: a
 * stripped drive gear, a frayed cable, a dented section. Someone searching
 * for a part is looking at a broken one, and matching what they can see in
 * their own garage is the job.
 */
export const partImages: Record<string, PageImage> = {
  'torsion-spring': {
    file: 'part-torsion-spring.webp',
    alt: 'Garage door torsion spring on a short length of shaft, a tight helical coil of square section steel wire with a red winding cone at one end',
    altEs: 'Resorte de torsión de puerta de garaje sobre un tramo de eje, un espiral apretado de alambre de acero de sección cuadrada con un cono de tensado rojo en un extremo',
  },
  'extension-spring': {
    file: 'part-extension-spring.webp',
    alt: 'Pair of garage door extension springs with hooked loop ends, one threaded with a safety containment cable through the centre of the coil',
    altEs: 'Par de resortes de extensión de puerta de garaje con extremos de gancho, uno con el cable de seguridad pasado por el centro del espiral',
  },
  'lift-cable': {
    file: 'part-lift-cable.webp',
    alt: 'Coiled galvanised garage door lift cable with a swaged stop ball at one end, and a section where the wire strands have frayed and splayed outward',
    altEs: 'Cable de elevación galvanizado enrollado con una bola de tope prensada en un extremo, y un tramo donde los hilos se deshilacharon y se abrieron',
  },
  roller: {
    file: 'part-roller.webp',
    alt: 'Three garage door rollers side by side, a white nylon wheel on a sealed bearing, a black nylon one and a bare steel one, each on a long stem',
    altEs: 'Tres rodillos de puerta de garaje uno al lado del otro, uno de nailon blanco con rodamiento sellado, uno de nailon negro y uno de acero, cada uno con vástago largo',
  },
  hinge: {
    file: 'part-hinge.webp',
    alt: 'Two galvanised steel garage door hinges lying flat, a flat leaf section hinge with a roller carrier tube and a taller end hinge bracket',
    altEs: 'Dos bisagras de acero galvanizado de puerta de garaje planas, una bisagra de sección con tubo portarrodillo y un soporte de bisagra de extremo más alto',
  },
  'bottom-seal': {
    file: 'part-bottom-seal.webp',
    alt: 'Black rubber U shaped garage door bottom seal, partly coiled, beside the aluminium retainer track it slides into',
    altEs: 'Sello inferior de goma negra en forma de U para puerta de garaje, parcialmente enrollado, junto al riel de aluminio en el que se desliza',
  },
  'weather-seal': {
    file: 'part-weather-seal.webp',
    alt: 'White vinyl garage door perimeter stop moulding with the integral flexible flap gasket along one edge shown in profile',
    altEs: 'Moldura de tope de vinilo blanco para el perímetro de la puerta de garaje, con la aleta flexible integrada mostrada de perfil',
  },
  track: {
    file: 'part-track.webp',
    alt: 'Garage door track sections crossing, a curved radius piece and a straight vertical piece with punched bolt slots, plus a horizontal piece with a dent and a bend',
    altEs: 'Secciones de riel de puerta de garaje cruzadas, una pieza curva de radio y una vertical recta con ranuras troqueladas, más una pieza horizontal abollada y doblada',
  },
  'opener-drive-gear': {
    file: 'part-opener-drive-gear.webp',
    alt: 'Garage door opener drive gear with several nylon teeth stripped away, beside its steel worm shaft, with fine white plastic shavings scattered around',
    altEs: 'Engranaje de motor de puerta de garaje con varios dientes de nailon arrancados, junto a su tornillo sinfín de acero y virutas finas de plástico blanco alrededor',
  },
  'safety-sensor': {
    file: 'part-safety-sensor.webp',
    alt: 'Pair of garage door photo eye safety sensors in adjustable steel brackets, each with a round lens and an indicator light, thin bell wire trailing from the back',
    altEs: 'Par de sensores fotoeléctricos de seguridad de puerta de garaje en soportes de acero ajustables, cada uno con lente redonda y luz indicadora, con cable delgado saliendo por detrás',
  },
  remote: {
    file: 'part-remote.webp',
    alt: 'Two garage door remotes, a three button visor remote with a metal clip and a smaller two button keyfob on a split ring',
    altEs: 'Dos controles de puerta de garaje, uno de visera de tres botones con clip metálico y un llavero más pequeño de dos botones en una argolla',
  },
  keypad: {
    file: 'part-keypad.webp',
    alt: 'Wireless garage door keypad with the flip up weather cover raised, showing the grid of rubber buttons on its backplate',
    altEs: 'Teclado inalámbrico de puerta de garaje con la tapa abatible levantada, mostrando la cuadrícula de botones de goma sobre su placa trasera',
  },
  panel: {
    file: 'part-panel.webp',
    alt: 'Single white steel garage door section standing upright, with two raised panel embossings, an end stile, a top edge hinge bracket and a deep dent creasing the lower half',
    altEs: 'Sección individual de puerta de garaje de acero blanco de pie, con dos relieves rectangulares, un montante lateral, un soporte de bisagra en el borde superior y una abolladura profunda en la mitad inferior',
  },
};

/**
 * Door catalogue illustrations.
 *
 * Each one is on the kind of Florida house that door actually goes on: CBS
 * and barrel tile for the wind rated steel, a coastal block house for the
 * impact rated one, a tilt wall industrial unit for the commercial door.
 * A door photographed against a house it would never be fitted to teaches
 * the reader the wrong thing about their own street.
 */
export const doorImages: Record<string, PageImage> = {
  'wind-rated-steel': {
    file: 'door-wind-rated-steel.webp',
    alt: 'Wind rated white steel garage door with short raised panels, closed on a single storey concrete block and stucco house with a barrel tile roof and sabal palms',
    altEs: 'Puerta de garaje de acero blanco resistente al viento con paneles en relieve cortos, cerrada en una casa de un piso de bloque y estuco con techo de teja y palmas',
  },
  'insulated-steel': {
    file: 'door-insulated-steel.webp',
    alt: 'Almond coloured insulated steel garage door with long raised panels and four small windows across the top, closed on a two storey stucco house with a shingle roof',
    altEs: 'Puerta de garaje de acero aislado color almendra con paneles largos en relieve y cuatro ventanas pequeñas en la parte superior, cerrada en una casa de dos pisos de estuco con techo de tejas asfálticas',
  },
  'impact-rated-steel': {
    file: 'door-impact-rated-steel.webp',
    alt: 'Impact rated white steel garage door standing half open on a coastal block house, the heavy horizontal reinforcing struts and galvanised vertical tracks visible on the inside face',
    altEs: 'Puerta de garaje de acero blanco resistente a impactos entreabierta en una casa costera de bloque, con los refuerzos horizontales pesados y los rieles verticales galvanizados visibles por dentro',
  },
  'carriage-house-steel': {
    file: 'door-carriage-house-steel.webp',
    alt: 'Steel carriage house garage door finished as dark stained timber with cross buck overlays, black strap hinges and four arched windows, on a Mediterranean stucco house',
    altEs: 'Puerta de garaje de acero estilo carruaje con acabado de madera oscura, refuerzos cruzados aplicados, herrajes negros y cuatro ventanas de arco, en una casa mediterránea de estuco',
  },
  'composite-carriage-house': {
    file: 'door-composite-carriage-house.webp',
    alt: 'Composite carriage house garage door with a deep walnut woodgrain texture, cross buck overlays and grille windows, on a coastal cottage with white lap siding and a metal roof',
    altEs: 'Puerta de garaje compuesta estilo carruaje con textura profunda de veta color nogal, refuerzos cruzados y ventanas con cuadrícula, en una casa costera con forro blanco y techo metálico',
  },
  'full-view-aluminium': {
    file: 'door-full-view-aluminium.webp',
    alt: 'Full view garage door with a black anodised aluminium frame and sixteen frosted glass panels, closed on a modern flat roofed white stucco Florida house',
    altEs: 'Puerta de garaje de vista completa con marco de aluminio anodizado negro y dieciséis paneles de vidrio esmerilado, cerrada en una casa moderna de estuco blanco con techo plano',
  },
  'fiberglass-door': {
    file: 'door-fiberglass-door.webp',
    alt: 'Fiberglass garage door with an oak woodgrain finish in honey tone, flush panels and a row of rectangular windows near the top, on a single storey stucco house with a tile roof',
    altEs: 'Puerta de garaje de fibra de vidrio con acabado de veta de roble en tono miel, paneles lisos y una fila de ventanas rectangulares arriba, en una casa de un piso de estuco con techo de teja',
  },
  'vinyl-door': {
    file: 'door-vinyl-door.webp',
    alt: 'White vinyl garage door with a smooth flush surface and long shallow raised panels, on a modest single storey stucco house under a live oak in an older inland neighbourhood',
    altEs: 'Puerta de garaje de vinilo blanco con superficie lisa y paneles largos poco pronunciados, en una casa sencilla de un piso de estuco bajo un roble en un vecindario interior más antiguo',
  },
  'wood-door': {
    file: 'door-wood-door.webp',
    alt: 'Solid cedar garage door in a clear finish showing real vertical plank grain and visible joinery, with three windows in the top rail, on a coastal house with a standing seam metal roof',
    altEs: 'Puerta de garaje de cedro macizo con acabado transparente que muestra la veta vertical real y la ensambladura, con tres ventanas en el travesaño superior, en una casa costera con techo metálico',
  },
  'commercial-sectional': {
    file: 'door-commercial-sectional.webp',
    alt: 'Wide ribbed white steel commercial sectional door in a concrete tilt wall unit of a Florida industrial park, with a loading apron and a bollard either side',
    altEs: 'Puerta seccional comercial ancha de acero blanco acanalado en una nave de concreto de un parque industrial de Florida, con plataforma de carga y un bolardo a cada lado',
  },
};
