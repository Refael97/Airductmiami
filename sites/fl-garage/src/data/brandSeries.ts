/**
 * One page per manufacturer model series, under its brand:
 * /brands/amarr/2400-series/ and /es/marcas/amarr/2400-series/.
 *
 * Why these exist. In the Search Console export of 29 September 2026 the
 * Amarr brand page was the most seen page on the site, 239 impressions at
 * an average position of 13.3, and nearly all of it was a model number
 * plus a Palm Beach County town: "amarr 2400 wellington florida",
 * "amarr 2500 lake worth fl", "north palm fl amarr 2400". Those are people
 * sourcing a specific commercial door, and one brand page covering three
 * series and the residential range as well is a loose answer to a very
 * precise question. A page per series answers it exactly.
 *
 * Every specification here comes from the same Amarr chart the brand
 * page's table was built from (read 10 September 2026) and nothing is
 * added to it. No list prices: a commercial door is priced on the opening,
 * the construction and the wind load package, and a number printed here
 * would be wrong for almost everybody who read it.
 */

import type { FAQ } from './types';

export interface SeriesVariant {
  code: string;
  name: string;
  text: string;
}

export interface SeriesPage {
  /** Brand slug from products.ts, which is also the URL parent. */
  brand: string;
  slug: string;
  /** The series as people type it, "2400". */
  model: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  answer: string;
  intro: string[];
  variantsTitle: string;
  variants: SeriesVariant[];
  /** Index of this series in the brand page's spec table columns. */
  specColumn: number;
  fitTitle: string;
  bestFor: string[];
  notFor: string[];
  windTitle: string;
  wind: string[];
  whereTitle: string;
  where: string[];
  /** City slugs from cities.ts, linked under "where". */
  towns: string[];
  quoteTitle: string;
  quote: { title: string; text: string }[];
  faq: FAQ[];
}

export type SeriesPageEs = Omit<SeriesPage, 'brand' | 'slug' | 'model' | 'specColumn' | 'towns'>;

const palmBeachTowns = [
  'west-palm-beach',
  'lake-worth-beach',
  'north-palm-beach',
  'wellington',
  'palm-beach-gardens',
  'jupiter',
  'boynton-beach',
  'delray-beach',
  'boca-raton',
];

export const seriesPages: SeriesPage[] = [
  {
    brand: 'amarr',
    slug: '2400-series',
    model: '2400',
    metaTitle: 'Amarr 2400 Commercial Door | 2402, 2412, 2422 | Palm Beach',
    metaDescription:
      'Amarr 2400 series heavy duty 24 gauge commercial doors, 2402, 2412 and 2422, supplied and installed in West Palm Beach, Wellington, Lake Worth Beach and North Palm Beach.',
    h1: 'Amarr 2400 series commercial doors in Palm Beach County',
    answer:
      'The Amarr 2400 series is a heavy duty steel sectional commercial door in 24 gauge steel, 2 inches thick, and it takes the widest standard opening of Amarr\'s three commercial series, up to 30 ft 2 in wide and 26 ft 1 in tall. It comes as the 2402 (single layer, no insulation), the 2412 (two layer) and the 2422 (three layer), with the insulated versions at R 7.0. We supply and install it across Palm Beach County, from West Palm Beach, Lake Worth Beach and North Palm Beach to Wellington, and it is quoted after we measure the opening, with the wind load option specified at order and the Florida Product Approval on the permit.',
    intro: [
      'The 2400 is the door most commercial openings in Palm Beach County end up with, and the reason is the size range rather than the steel. The 2500 series stops at 20 ft 2 in wide, so any bay wider than that is already out of its reach, and the 2000 series is 20 gauge extra heavy duty steel that most warehouses, service bays and storage buildings do not need. The 2400 sits between them: heavy duty 24 gauge steel, the same deep ribbed smooth panel as its two siblings, and a standard width that runs all the way to 30 ft 2 in.',
      'Most of the searches that reach us for this door are a model number and a town, "amarr 2400 wellington" or "2400 north palm", which usually means a spec has already been written by an architect, a property manager or the last contractor, and what is wanted is somebody local who will measure, order the right construction with the wind load package, pull the permit and hang it. That is the job we do. We are an independent installer, not an Amarr dealer, and we say so on every quote.',
      'The one decision the model number does not make for you is the construction. The last two digits carry it: 02 is single layer, 12 is two layer, 22 is three layer. That choice is about how much the door gets knocked, how much heat the building can take through it, and how quiet it needs to be, and it is covered below.',
    ],
    variantsTitle: '2402, 2412 or 2422: choosing the construction',
    variants: [
      {
        code: '2402',
        name: 'Single layer',
        text: 'Bare 24 gauge steel with no insulation. The lowest cost way into the 2400 series and the right door for an unconditioned building: a boat or equipment store, a covered bay that is open on another side anyway, a barn. The trade off is stiffness. A single skin section dents more easily at the bottom, where forklifts, trailers and carts meet it.',
      },
      {
        code: '2412',
        name: 'Two layer',
        text: 'Steel with vinyl-coated polystyrene insulation behind it, R 7.0. The common middle choice in Palm Beach County: stiffer than the 2402, quieter in use, and it stops a west facing bay from turning into a radiator in the afternoon, which matters as soon as the space behind the door is air conditioned.',
      },
      {
        code: '2422',
        name: 'Three layer',
        text: 'Steel on both faces with the insulation between, also R 7.0. The finished interior face is the reason to choose it: it looks right in a showroom or a customer facing service bay, it cleans easily, and a steel inside face takes knocks from the inside that a vinyl back would not.',
      },
    ],
    specColumn: 1,
    fitTitle: 'When the 2400 is the right door, and when it is not',
    bestFor: [
      'Openings wider than 20 ft 2 in, which the 2500 series cannot take',
      'Warehouse, distribution and light industrial bays that cycle through the working day',
      'Service and repair bays where an insulated door keeps an air conditioned shop workable',
      'Marina, boat and equipment storage buildings where a wide opening matters more than heavy gauge steel',
      'Equestrian and farm buildings in Wellington and the western county that take trailers',
    ],
    notFor: [
      'An opening that takes real abuse every day from forklifts or trucks, where the 20 gauge 2000 series is worth the extra',
      'A small bay under 20 ft wide on a tight budget, where the 2500 series does the same job for less',
      'A house. The 2400 is a commercial door, and a residential opening is better served by a residential wind rated door',
    ],
    windTitle: 'Wind load in Palm Beach County',
    wind: [
      'Palm Beach County is outside the High Velocity Hurricane Zone, but the design wind pressure is still high and it rises as you get closer to the coast, so a door on a building in Lake Worth Beach or North Palm Beach is working against more than the same door out in Wellington. A replacement commercial door needs a Florida Product Approval that covers the design pressure at the address, and a building permit pulled by a licensed contractor.',
      'Amarr lists wind load as an option on the 2400 series, not the default, and that is the single thing most worth getting right. It has to be specified when the door is ordered, because the approval covers the assembly that was tested, with its reinforcement and its track, not a standard door with parts added later. We confirm the current approval for the size and pressure before we quote, and it goes on the permit. For a building in Broward or Miami-Dade, inside the HVHZ, the requirement is a Miami-Dade NOA instead, and we confirm one exists for the size before anything is ordered.',
    ],
    whereTitle: 'Where we install the 2400 in Palm Beach County',
    where: [
      'Across the county, and the permit goes to whichever building department holds the address. West Palm Beach, Lake Worth Beach, Riviera Beach, North Palm Beach, Palm Beach Gardens, Jupiter and Wellington each have their own. The large unincorporated areas, including the Lake Worth addresses west of the city and much of the western county, go through Palm Beach County, and we check which one applies before the quote so the timeline is real.',
      'Close to the water, salt air is the other local factor. On a building within a few miles of the Intracoastal, we specify galvanized or stainless hardware where it is offered and look at the bottom bracket and cable on the old door, because that is usually what failed first.',
    ],
    towns: palmBeachTowns,
    quoteTitle: 'How a 2400 quote works',
    quote: [
      {
        title: 'We measure the opening',
        text: 'Width, height, headroom above the door, sideroom each side and backroom behind it. The track configuration and the spring follow from those numbers, and a quote without them is a guess.',
      },
      {
        title: 'We confirm the construction and the wind load',
        text: 'Single, two or three layer, and the approval that covers the design pressure at your address. If the building is inside the HVHZ we confirm the NOA exists for the size.',
      },
      {
        title: 'You get one written price',
        text: 'Door, wind load package, springs sized to the finished door weight, operator if you want one, removal of the old door, permit and installation. No list price and no surprises after the order.',
      },
      {
        title: 'We order, permit and install',
        text: 'The permit is pulled while the door is in production, and it is inspected after installation as the department requires.',
      },
    ],
    faq: [
      {
        question: 'How much does an Amarr 2400 commercial door cost?',
        answer:
          'It depends on the opening, the construction and the wind load package, which is why we quote after measuring rather than from a list. A 2402 costs less than a 2412, which costs less than a 2422 of the same size, and the wind load option adds to all three. The quote you get is one written number covering the door, the wind load package, springs sized to the finished door, removal of the old door, the permit and installation.',
      },
      {
        question: 'What is the difference between the Amarr 2400 and the 2500?',
        answer:
          'Duty rating and size. The 2400 is heavy duty 24 gauge steel and takes openings up to 30 ft 2 in wide and 26 ft 1 in tall. The 2500 is medium duty in nominal 24 gauge, aimed at budget sensitive work, and stops at 20 ft 2 in wide and 16 ft 1 in tall. Both are 2 inches thick, both come in single, two and three layer versions, and both have an R 7.0 insulated option and a 10 year limited warranty. If the opening is wider than 20 ft 2 in, it is a 2400 or a 2000 regardless of budget.',
      },
      {
        question: 'Is the Amarr 2400 rated for hurricanes in Florida?',
        answer:
          'It can be, when it is ordered with the wind load option. Wind load is an option on the 2400 series, not the default, and in Palm Beach County a replacement commercial door needs a Florida Product Approval covering the design pressure at the address. The option has to be specified at order, because the approval covers the tested assembly, not a standard door upgraded afterwards.',
      },
      {
        question: 'Do you install the Amarr 2400 in Wellington, Lake Worth and North Palm Beach?',
        answer:
          'Yes, and across the rest of Palm Beach County: West Palm Beach, Riviera Beach, Palm Beach Gardens, Jupiter, Boynton Beach, Delray Beach and Boca Raton, plus the unincorporated county. We check which building department holds the address before we quote, because the permit goes there.',
      },
      {
        question: 'Should I get the 2402, the 2412 or the 2422?',
        answer:
          'The 2402 for a building that is not air conditioned and where the door does not take knocks. The 2412 for most working bays, because the insulation at R 7.0 makes it stiffer and quieter and keeps afternoon heat out of a conditioned space. The 2422 when the inside face will be seen by customers or needs to take knocks from the inside, because it is steel on both faces.',
      },
      {
        question: 'Can you repair an existing Amarr 2400 door rather than replace it?',
        answer:
          'Usually. Springs, cables, rollers, hinges, bottom seals and operators are all repairable, and a single damaged section can often be replaced when the same series and construction is still made. We look at the door and tell you plainly whether repair or replacement is the better money, in writing, before any work.',
      },
    ],
  },
  {
    brand: 'amarr',
    slug: '2500-series',
    model: '2500',
    metaTitle: 'Amarr 2500 Commercial Door | 2502, 2512, 2522 | Palm Beach',
    metaDescription:
      'Amarr 2500 series medium duty commercial doors, 2502, 2512 and 2522, up to 20 ft 2 in wide. Supplied and installed in West Palm Beach, Wellington, Lake Worth Beach and North Palm Beach.',
    h1: 'Amarr 2500 series commercial doors in Palm Beach County',
    answer:
      'The Amarr 2500 series is a medium duty steel sectional commercial door in nominal 24 gauge steel, 2 inches thick, made for budget sensitive work, and it takes openings up to 20 ft 2 in wide and 16 ft 1 in tall. It comes as the 2502 (single layer, no insulation), the 2512 (two layer) and the 2522 (three layer), with the insulated versions at R 7.0. We supply and install it across Palm Beach County, including West Palm Beach, Lake Worth Beach, North Palm Beach and Wellington, quoted after we measure, with the wind load option specified at order.',
    intro: [
      'The 2500 is the most economical of Amarr\'s three commercial series, and on the right opening it is the sensible door. Storage units, small workshops, a single service bay, a garage on a commercial property, a utility building: openings that are under 20 ft wide and under 16 ft tall, that do not see forklift traffic, and where the owner wants a proper commercial sectional door without paying for heavy duty steel the building will never need.',
      'The size limit is the whole story, so it is worth being plain about. The standard 2500 stops at 20 ft 2 in wide and 16 ft 1 in tall. A bay wider or taller than that is a 2400 or a 2000 whatever the budget, and discovering it after a price has been agreed is the most common reason a commercial specification changes between quote and order. We measure first for exactly this reason.',
      'Like the 2400, the 2500 is sold in three constructions and the last two digits say which: 2502 single layer, 2512 two layer, 2522 three layer. Most of the searches that reach us are the model number and a town, "amarr 2500 lake worth" or "wellington amarr 2500", and what is usually wanted is somebody local to measure it, order it with the wind load package and install it with the permit. We are an independent installer, not an Amarr dealer.',
    ],
    variantsTitle: '2502, 2512 or 2522: choosing the construction',
    variants: [
      {
        code: '2502',
        name: 'Single layer',
        text: 'Bare steel with no insulation, the lowest cost door in the Amarr commercial range. It suits storage and outbuildings that are not air conditioned, where the door is opened a few times a day and nothing drives into it.',
      },
      {
        code: '2512',
        name: 'Two layer',
        text: 'Steel with vinyl-coated polystyrene insulation behind it, R 7.0. Stiffer and quieter than the 2502, and the one to choose when the space behind the door is cooled, because an uninsulated steel door facing the afternoon sun in Palm Beach County puts heat straight into the building.',
      },
      {
        code: '2522',
        name: 'Three layer',
        text: 'Steel on both faces with insulation between, R 7.0. Chosen when the inside of the door is on show, in a small showroom or a customer facing unit, or when it needs a tougher inside face.',
      },
    ],
    specColumn: 2,
    fitTitle: 'When the 2500 is the right door, and when it is not',
    bestFor: [
      'Openings up to 20 ft 2 in wide and 16 ft 1 in tall',
      'Self storage and small warehouse units where cost per door matters',
      'Single service bays, workshops and utility buildings with light daily use',
      'Commercial garages on mixed use and residential style properties',
      'Barns and outbuildings in Wellington and the western county that do not need a tall trailer opening',
    ],
    notFor: [
      'Any opening wider than 20 ft 2 in or taller than 16 ft 1 in, which is a 2400 or a 2000',
      'A bay with forklift or truck traffic, where heavier steel pays for itself in avoided section replacements',
      'A door that cycles all day, where a heavy duty door with high cycle springs is the better long term cost',
    ],
    windTitle: 'Wind load in Palm Beach County',
    wind: [
      'Palm Beach County is outside the High Velocity Hurricane Zone, but the design wind pressure is still high and highest near the coast. A replacement commercial door needs a Florida Product Approval covering the design pressure at the address, and a building permit pulled by a licensed contractor.',
      'Amarr lists wind load as an option on the 2500 series. It is not the default, and it has to be specified at order, because the approval covers the tested assembly with its reinforcement and track rather than a standard door with parts added afterwards. We confirm the current approval for the size and pressure before we quote. Inside the HVHZ, in Broward and Miami-Dade, the requirement is a Miami-Dade NOA, and we confirm one exists for the size before ordering.',
    ],
    whereTitle: 'Where we install the 2500 in Palm Beach County',
    where: [
      'Across the county. The permit goes to the building department that holds the address: West Palm Beach, Lake Worth Beach, Riviera Beach, North Palm Beach, Palm Beach Gardens, Jupiter and Wellington each run their own, and the unincorporated areas, including the Lake Worth addresses west of the city, go through Palm Beach County. We check before quoting so the timeline you are given is the real one.',
      'On a coastal building, the hardware matters as much as the door. Within a few miles of the Intracoastal we specify galvanized or stainless hardware where it is offered, because salt air takes out cables and bottom brackets long before it touches a steel section.',
    ],
    towns: palmBeachTowns,
    quoteTitle: 'How a 2500 quote works',
    quote: [
      {
        title: 'We measure the opening first',
        text: 'Width and height decide whether the 2500 is possible at all. Headroom, sideroom and backroom then set the track and the spring.',
      },
      {
        title: 'We confirm construction and wind load',
        text: 'Single, two or three layer, and the approval that covers the design pressure at your address.',
      },
      {
        title: 'You get one written price',
        text: 'Door, wind load package, correctly sized springs, operator if wanted, removal of the old door, permit and installation, in one number.',
      },
      {
        title: 'We order, permit and install',
        text: 'The permit runs while the door is made, and the job is inspected after installation as the department requires.',
      },
    ],
    faq: [
      {
        question: 'How much does an Amarr 2500 commercial door cost?',
        answer:
          'Less than a 2400 or a 2000 of the same size, which is the point of the series, but the number still depends on the opening, the construction and the wind load package, so we quote after measuring. A 2502 is the lowest cost, then the 2512, then the 2522. The written quote covers the door, the wind load package, springs, removal of the old door, the permit and installation.',
      },
      {
        question: 'What is the largest door the Amarr 2500 series comes in?',
        answer:
          'The standard 2500 goes up to 20 ft 2 in wide and 16 ft 1 in tall. Anything bigger is a 2400, which goes to 30 ft 2 in wide and 26 ft 1 in tall, or a 2000, which goes to 26 ft 2 in wide and 26 ft 1 in tall.',
      },
      {
        question: 'Amarr 2500 or 2400: which do I need?',
        answer:
          'Measure the opening first. If it is over 20 ft 2 in wide or 16 ft 1 in tall, it has to be the 2400 or the 2000. If it fits the 2500, the question is use: the 2500 is medium duty in nominal 24 gauge steel for budget sensitive work, and the 2400 is heavy duty 24 gauge. A storage unit or a light use workshop is well served by the 2500. A working bay that cycles all day or takes knocks is a 2400.',
      },
      {
        question: 'Is the Amarr 2500 wind rated for Florida?',
        answer:
          'When it is ordered with the wind load option. Wind load is an option on the 2500 series, and in Palm Beach County a replacement commercial door needs a Florida Product Approval for the design pressure at the address. It has to be specified at order.',
      },
      {
        question: 'Do you install the Amarr 2500 in Lake Worth, Wellington and West Palm Beach?',
        answer:
          'Yes, and in North Palm Beach, Riviera Beach, Palm Beach Gardens, Jupiter, Boynton Beach, Delray Beach, Boca Raton and the unincorporated county. We check which building department holds the address before we quote.',
      },
      {
        question: 'Is the insulated 2512 worth it over the 2502?',
        answer:
          'If the space behind the door is air conditioned, yes. An uninsulated steel door facing the afternoon sun puts heat straight into the building, and the two layer 2512 at R 7.0 is also stiffer and quieter. For a storage building that is not cooled, the 2502 is the sensible saving.',
      },
    ],
  },
];

export const seriesEs: Record<string, SeriesPageEs> = {
  'amarr/2400-series': {
    metaTitle: 'Puerta Comercial Amarr 2400 | 2402, 2412, 2422 | Palm Beach',
    metaDescription:
      'Puertas comerciales Amarr serie 2400, servicio pesado en acero calibre 24: 2402, 2412 y 2422. Suministro e instalación en West Palm Beach, Wellington, Lake Worth Beach y North Palm Beach.',
    h1: 'Puertas comerciales Amarr serie 2400 en el condado de Palm Beach',
    answer:
      'La serie Amarr 2400 es una puerta comercial seccional de acero de servicio pesado, en acero calibre 24 y de 2 pulgadas de espesor, y acepta el vano estándar más ancho de las tres series comerciales de Amarr: hasta 30 pies 2 pulg de ancho y 26 pies 1 pulg de alto. Viene como 2402 (una capa, sin aislamiento), 2412 (dos capas) y 2422 (tres capas), y las versiones aisladas tienen valor R 7.0. La suministramos e instalamos en todo el condado de Palm Beach, desde West Palm Beach, Lake Worth Beach y North Palm Beach hasta Wellington. Se cotiza después de medir el vano, con la opción de carga de viento especificada al ordenar y la aprobación de producto de Florida en el permiso.',
    intro: [
      'La 2400 es la puerta con la que terminan la mayoría de los vanos comerciales del condado de Palm Beach, y la razón es el rango de tamaños más que el acero. La serie 2500 se detiene en 20 pies 2 pulg de ancho, así que cualquier nave más ancha ya queda fuera de su alcance, y la serie 2000 es acero calibre 20 de servicio extra pesado que la mayoría de las bodegas, talleres y depósitos no necesitan. La 2400 queda en medio: acero calibre 24 de servicio pesado, el mismo panel acanalado profundo y liso que sus dos hermanas, y un ancho estándar que llega hasta 30 pies 2 pulg.',
      'La mayoría de las búsquedas que nos llegan para esta puerta son un número de modelo y un pueblo, "amarr 2400 wellington" o "2400 north palm", y eso casi siempre significa que alguien ya escribió la especificación, un arquitecto, un administrador de propiedades o el contratista anterior, y lo que falta es alguien local que mida, pida la construcción correcta con el paquete de carga de viento, tramite el permiso y la instale. Ese es el trabajo que hacemos. Somos un instalador independiente, no un distribuidor de Amarr, y lo decimos en cada cotización.',
      'La única decisión que el número de modelo no toma por usted es la construcción. La llevan los dos últimos dígitos: 02 es una capa, 12 son dos capas, 22 son tres capas. Esa elección depende de cuántos golpes recibe la puerta, cuánto calor puede entrar al edificio a través de ella y qué tan silenciosa tiene que ser, y la explicamos abajo.',
    ],
    variantsTitle: '2402, 2412 o 2422: cómo elegir la construcción',
    variants: [
      {
        code: '2402',
        name: 'Una capa',
        text: 'Acero calibre 24 sin aislamiento. La forma más económica de entrar a la serie 2400 y la puerta correcta para un edificio sin aire acondicionado: un depósito de lanchas o de equipo, una nave abierta por otro lado, un establo. La contrapartida es la rigidez. Una sección de una sola lámina se abolla más fácil en la parte baja, donde pegan los montacargas, los tráileres y los carritos.',
      },
      {
        code: '2412',
        name: 'Dos capas',
        text: 'Acero con aislamiento de poliestireno recubierto de vinilo por detrás, R 7.0. La opción intermedia más común en el condado de Palm Beach: más rígida que la 2402, más silenciosa, y evita que una nave orientada al oeste se convierta en un radiador por la tarde, algo que importa en cuanto el espacio detrás de la puerta tiene aire acondicionado.',
      },
      {
        code: '2422',
        name: 'Tres capas',
        text: 'Acero en las dos caras con el aislamiento en medio, también R 7.0. La cara interior terminada es la razón para elegirla: se ve bien en una sala de exhibición o en un taller que atiende clientes, se limpia fácil, y una cara interior de acero aguanta golpes desde adentro que un respaldo de vinilo no aguantaría.',
      },
    ],
    fitTitle: 'Cuándo la 2400 es la puerta correcta y cuándo no',
    bestFor: [
      'Vanos de más de 20 pies 2 pulg de ancho, que la serie 2500 no acepta',
      'Bodegas, centros de distribución y naves de industria ligera que abren y cierran toda la jornada',
      'Talleres de servicio donde una puerta aislada mantiene trabajable un espacio con aire acondicionado',
      'Marinas y depósitos de lanchas o equipo donde el ancho del vano importa más que un acero más grueso',
      'Construcciones ecuestres y agrícolas en Wellington y el oeste del condado que reciben tráileres',
    ],
    notFor: [
      'Un vano que recibe golpes todos los días de montacargas o camiones, donde la serie 2000 en calibre 20 vale lo que cuesta de más',
      'Una nave chica de menos de 20 pies de ancho con presupuesto ajustado, donde la serie 2500 hace el mismo trabajo por menos',
      'Una casa. La 2400 es una puerta comercial, y un garaje residencial queda mejor con una puerta residencial certificada contra viento',
    ],
    windTitle: 'Carga de viento en el condado de Palm Beach',
    wind: [
      'El condado de Palm Beach está fuera de la zona HVHZ, pero la presión de diseño sigue siendo alta y sube a medida que uno se acerca a la costa, así que una puerta en un edificio de Lake Worth Beach o North Palm Beach trabaja contra más viento que la misma puerta en Wellington. Una puerta comercial de reemplazo necesita una aprobación de producto de Florida que cubra la presión de diseño de la dirección, y un permiso de construcción tramitado por un contratista con licencia.',
      'Amarr ofrece la carga de viento como opción en la serie 2400, no como lo predeterminado, y es lo que más vale la pena hacer bien. Hay que especificarla al ordenar la puerta, porque la aprobación cubre el conjunto que se probó, con su refuerzo y su riel, y no una puerta estándar a la que se le agregan piezas después. Confirmamos la aprobación vigente para el tamaño y la presión antes de cotizar, y va en el permiso. Para un edificio en Broward o Miami-Dade, dentro de la HVHZ, el requisito es un NOA de Miami-Dade, y confirmamos que existe para el tamaño antes de ordenar.',
    ],
    whereTitle: 'Dónde instalamos la 2400 en el condado de Palm Beach',
    where: [
      'En todo el condado, y el permiso va al departamento de construcción que corresponde a la dirección. West Palm Beach, Lake Worth Beach, Riviera Beach, North Palm Beach, Palm Beach Gardens, Jupiter y Wellington tienen cada uno el suyo. Las zonas grandes no incorporadas, incluidas las direcciones de Lake Worth al oeste de la ciudad y buena parte del oeste del condado, van por el condado de Palm Beach, y lo revisamos antes de cotizar para que el plazo que le damos sea el real.',
      'Cerca del agua, el aire salino es el otro factor local. En un edificio a pocas millas del Intracoastal especificamos herrajes galvanizados o de acero inoxidable donde se ofrecen y revisamos el soporte inferior y el cable de la puerta vieja, porque casi siempre fue lo primero que falló.',
    ],
    quoteTitle: 'Cómo funciona una cotización de la 2400',
    quote: [
      {
        title: 'Medimos el vano',
        text: 'Ancho, alto, espacio libre arriba de la puerta, espacio a cada lado y fondo detrás. La configuración del riel y el resorte salen de esas medidas, y una cotización sin ellas es una adivinanza.',
      },
      {
        title: 'Confirmamos la construcción y la carga de viento',
        text: 'Una, dos o tres capas, y la aprobación que cubre la presión de diseño de su dirección. Si el edificio está dentro de la HVHZ, confirmamos que el NOA existe para el tamaño.',
      },
      {
        title: 'Usted recibe un solo precio por escrito',
        text: 'Puerta, paquete de carga de viento, resortes calculados para el peso real de la puerta terminada, operador si lo quiere, retiro de la puerta vieja, permiso e instalación. Sin precio de lista y sin sorpresas después del pedido.',
      },
      {
        title: 'Ordenamos, tramitamos el permiso e instalamos',
        text: 'El permiso se tramita mientras la puerta se fabrica, y se inspecciona después de la instalación según lo pida el departamento.',
      },
    ],
    faq: [
      {
        question: '¿Cuánto cuesta una puerta comercial Amarr 2400?',
        answer:
          'Depende del vano, de la construcción y del paquete de carga de viento, y por eso cotizamos después de medir y no desde una lista. Una 2402 cuesta menos que una 2412, y esta menos que una 2422 del mismo tamaño, y la opción de carga de viento suma en las tres. La cotización que recibe es un solo número por escrito que cubre la puerta, el paquete de carga de viento, los resortes calculados para la puerta terminada, el retiro de la puerta vieja, el permiso y la instalación.',
      },
      {
        question: '¿Cuál es la diferencia entre la Amarr 2400 y la 2500?',
        answer:
          'La clasificación de servicio y el tamaño. La 2400 es de servicio pesado en acero calibre 24 y acepta vanos de hasta 30 pies 2 pulg de ancho y 26 pies 1 pulg de alto. La 2500 es de servicio mediano en calibre 24 nominal, pensada para proyectos ajustados de presupuesto, y se detiene en 20 pies 2 pulg de ancho y 16 pies 1 pulg de alto. Las dos miden 2 pulgadas de espesor, vienen en una, dos y tres capas, y tienen opción aislada R 7.0 y garantía limitada de 10 años. Si el vano pasa de 20 pies 2 pulg de ancho, es una 2400 o una 2000 sin importar el presupuesto.',
      },
      {
        question: '¿La Amarr 2400 está certificada para huracanes en Florida?',
        answer:
          'Puede estarlo, cuando se ordena con la opción de carga de viento. La carga de viento es una opción en la serie 2400, no lo predeterminado, y en el condado de Palm Beach una puerta comercial de reemplazo necesita una aprobación de producto de Florida que cubra la presión de diseño de la dirección. La opción hay que especificarla al ordenar, porque la aprobación cubre el conjunto probado y no una puerta estándar mejorada después.',
      },
      {
        question: '¿Instalan la Amarr 2400 en Wellington, Lake Worth y North Palm Beach?',
        answer:
          'Sí, y en el resto del condado de Palm Beach: West Palm Beach, Riviera Beach, Palm Beach Gardens, Jupiter, Boynton Beach, Delray Beach y Boca Raton, más las zonas no incorporadas del condado. Revisamos qué departamento de construcción corresponde a la dirección antes de cotizar, porque el permiso va ahí.',
      },
      {
        question: '¿Me conviene la 2402, la 2412 o la 2422?',
        answer:
          'La 2402 para un edificio sin aire acondicionado donde la puerta no recibe golpes. La 2412 para la mayoría de las naves de trabajo, porque el aislamiento R 7.0 la hace más rígida y silenciosa y mantiene el calor de la tarde fuera de un espacio climatizado. La 2422 cuando la cara interior la van a ver los clientes o tiene que aguantar golpes desde adentro, porque es de acero en las dos caras.',
      },
      {
        question: '¿Pueden reparar una puerta Amarr 2400 existente en lugar de cambiarla?',
        answer:
          'Casi siempre. Los resortes, cables, rodillos, bisagras, sellos inferiores y operadores se reparan, y una sola sección dañada muchas veces se puede reemplazar cuando la misma serie y construcción se sigue fabricando. Revisamos la puerta y le decimos claramente, por escrito y antes de cualquier trabajo, si conviene más reparar o reemplazar.',
      },
    ],
  },
  'amarr/2500-series': {
    metaTitle: 'Puerta Comercial Amarr 2500 | 2502, 2512, 2522 | Palm Beach',
    metaDescription:
      'Puertas comerciales Amarr serie 2500 de servicio mediano, 2502, 2512 y 2522, hasta 20 pies 2 pulg de ancho. Suministro e instalación en West Palm Beach, Wellington, Lake Worth Beach y North Palm Beach.',
    h1: 'Puertas comerciales Amarr serie 2500 en el condado de Palm Beach',
    answer:
      'La serie Amarr 2500 es una puerta comercial seccional de acero de servicio mediano, en acero calibre 24 nominal y de 2 pulgadas de espesor, hecha para proyectos ajustados de presupuesto, y acepta vanos de hasta 20 pies 2 pulg de ancho y 16 pies 1 pulg de alto. Viene como 2502 (una capa, sin aislamiento), 2512 (dos capas) y 2522 (tres capas), y las versiones aisladas tienen valor R 7.0. La suministramos e instalamos en todo el condado de Palm Beach, incluidos West Palm Beach, Lake Worth Beach, North Palm Beach y Wellington, cotizada después de medir y con la opción de carga de viento especificada al ordenar.',
    intro: [
      'La 2500 es la más económica de las tres series comerciales de Amarr, y en el vano correcto es la puerta sensata. Depósitos de almacenamiento, talleres chicos, una sola nave de servicio, un garaje en una propiedad comercial, un edificio de servicios: vanos de menos de 20 pies de ancho y de menos de 16 pies de alto, sin tráfico de montacargas, donde el dueño quiere una puerta comercial seccional de verdad sin pagar por un acero de servicio pesado que el edificio nunca va a necesitar.',
      'El límite de tamaño lo es todo, así que conviene decirlo claro. La 2500 estándar se detiene en 20 pies 2 pulg de ancho y 16 pies 1 pulg de alto. Una nave más ancha o más alta es una 2400 o una 2000 sin importar el presupuesto, y descubrirlo después de acordar un precio es la razón más común por la que una especificación comercial cambia entre la cotización y el pedido. Medimos primero justamente por eso.',
      'Igual que la 2400, la 2500 se vende en tres construcciones y los dos últimos dígitos dicen cuál: 2502 una capa, 2512 dos capas, 2522 tres capas. La mayoría de las búsquedas que nos llegan son el número de modelo y un pueblo, "amarr 2500 lake worth" o "wellington amarr 2500", y casi siempre lo que se busca es alguien local que la mida, la pida con el paquete de carga de viento y la instale con el permiso. Somos un instalador independiente, no un distribuidor de Amarr.',
    ],
    variantsTitle: '2502, 2512 o 2522: cómo elegir la construcción',
    variants: [
      {
        code: '2502',
        name: 'Una capa',
        text: 'Acero sin aislamiento, la puerta de menor costo de toda la línea comercial de Amarr. Sirve para depósitos y construcciones sin aire acondicionado, donde la puerta se abre unas pocas veces al día y nada le pega.',
      },
      {
        code: '2512',
        name: 'Dos capas',
        text: 'Acero con aislamiento de poliestireno recubierto de vinilo por detrás, R 7.0. Más rígida y más silenciosa que la 2502, y la que conviene cuando el espacio detrás de la puerta está climatizado, porque una puerta de acero sin aislamiento frente al sol de la tarde en el condado de Palm Beach mete el calor directo al edificio.',
      },
      {
        code: '2522',
        name: 'Tres capas',
        text: 'Acero en las dos caras con aislamiento en medio, R 7.0. Se elige cuando el interior de la puerta está a la vista, en una sala de exhibición chica o un local que atiende clientes, o cuando hace falta una cara interior más resistente.',
      },
    ],
    fitTitle: 'Cuándo la 2500 es la puerta correcta y cuándo no',
    bestFor: [
      'Vanos de hasta 20 pies 2 pulg de ancho y 16 pies 1 pulg de alto',
      'Depósitos de autoalmacenamiento y bodegas chicas donde importa el costo por puerta',
      'Naves de servicio individuales, talleres y edificios de servicios con uso diario ligero',
      'Garajes comerciales en propiedades de uso mixto o de estilo residencial',
      'Establos y construcciones auxiliares en Wellington y el oeste del condado que no necesitan un vano alto para tráileres',
    ],
    notFor: [
      'Cualquier vano de más de 20 pies 2 pulg de ancho o de más de 16 pies 1 pulg de alto, que es una 2400 o una 2000',
      'Una nave con tráfico de montacargas o camiones, donde el acero más grueso se paga solo con las secciones que no hay que cambiar',
      'Una puerta que abre y cierra todo el día, donde una puerta de servicio pesado con resortes de ciclo alto sale mejor a largo plazo',
    ],
    windTitle: 'Carga de viento en el condado de Palm Beach',
    wind: [
      'El condado de Palm Beach está fuera de la zona HVHZ, pero la presión de diseño sigue siendo alta y es más alta cerca de la costa. Una puerta comercial de reemplazo necesita una aprobación de producto de Florida que cubra la presión de diseño de la dirección, y un permiso de construcción tramitado por un contratista con licencia.',
      'Amarr ofrece la carga de viento como opción en la serie 2500. No es lo predeterminado y hay que especificarla al ordenar, porque la aprobación cubre el conjunto probado con su refuerzo y su riel, y no una puerta estándar a la que se le agregan piezas después. Confirmamos la aprobación vigente para el tamaño y la presión antes de cotizar. Dentro de la HVHZ, en Broward y Miami-Dade, el requisito es un NOA de Miami-Dade, y confirmamos que existe para el tamaño antes de ordenar.',
    ],
    whereTitle: 'Dónde instalamos la 2500 en el condado de Palm Beach',
    where: [
      'En todo el condado. El permiso va al departamento de construcción que corresponde a la dirección: West Palm Beach, Lake Worth Beach, Riviera Beach, North Palm Beach, Palm Beach Gardens, Jupiter y Wellington tienen cada uno el suyo, y las zonas no incorporadas, incluidas las direcciones de Lake Worth al oeste de la ciudad, van por el condado de Palm Beach. Lo revisamos antes de cotizar para que el plazo que le damos sea el real.',
      'En un edificio costero, los herrajes importan tanto como la puerta. A pocas millas del Intracoastal especificamos herrajes galvanizados o de acero inoxidable donde se ofrecen, porque el aire salino acaba con los cables y los soportes inferiores mucho antes de tocar una sección de acero.',
    ],
    quoteTitle: 'Cómo funciona una cotización de la 2500',
    quote: [
      {
        title: 'Primero medimos el vano',
        text: 'El ancho y el alto deciden si la 2500 es posible. El espacio arriba, a los lados y detrás define después el riel y el resorte.',
      },
      {
        title: 'Confirmamos construcción y carga de viento',
        text: 'Una, dos o tres capas, y la aprobación que cubre la presión de diseño de su dirección.',
      },
      {
        title: 'Usted recibe un solo precio por escrito',
        text: 'Puerta, paquete de carga de viento, resortes del tamaño correcto, operador si lo quiere, retiro de la puerta vieja, permiso e instalación, en un solo número.',
      },
      {
        title: 'Ordenamos, tramitamos e instalamos',
        text: 'El permiso avanza mientras se fabrica la puerta, y el trabajo se inspecciona después de la instalación según lo pida el departamento.',
      },
    ],
    faq: [
      {
        question: '¿Cuánto cuesta una puerta comercial Amarr 2500?',
        answer:
          'Menos que una 2400 o una 2000 del mismo tamaño, que es la razón de ser de la serie, pero el número igual depende del vano, de la construcción y del paquete de carga de viento, así que cotizamos después de medir. La 2502 es la de menor costo, luego la 2512 y luego la 2522. La cotización por escrito cubre la puerta, el paquete de carga de viento, los resortes, el retiro de la puerta vieja, el permiso y la instalación.',
      },
      {
        question: '¿Cuál es la puerta más grande de la serie Amarr 2500?',
        answer:
          'La 2500 estándar llega hasta 20 pies 2 pulg de ancho y 16 pies 1 pulg de alto. Algo más grande es una 2400, que llega a 30 pies 2 pulg de ancho y 26 pies 1 pulg de alto, o una 2000, que llega a 26 pies 2 pulg de ancho y 26 pies 1 pulg de alto.',
      },
      {
        question: 'Amarr 2500 o 2400: ¿cuál necesito?',
        answer:
          'Mida primero el vano. Si pasa de 20 pies 2 pulg de ancho o de 16 pies 1 pulg de alto, tiene que ser la 2400 o la 2000. Si cabe la 2500, la pregunta es el uso: la 2500 es de servicio mediano en calibre 24 nominal para proyectos ajustados de presupuesto, y la 2400 es de servicio pesado en calibre 24. Un depósito o un taller de uso ligero queda bien con la 2500. Una nave de trabajo que abre y cierra todo el día o recibe golpes es una 2400.',
      },
      {
        question: '¿La Amarr 2500 está certificada contra viento para Florida?',
        answer:
          'Cuando se ordena con la opción de carga de viento. La carga de viento es una opción en la serie 2500, y en el condado de Palm Beach una puerta comercial de reemplazo necesita una aprobación de producto de Florida para la presión de diseño de la dirección. Hay que especificarla al ordenar.',
      },
      {
        question: '¿Instalan la Amarr 2500 en Lake Worth, Wellington y West Palm Beach?',
        answer:
          'Sí, y en North Palm Beach, Riviera Beach, Palm Beach Gardens, Jupiter, Boynton Beach, Delray Beach, Boca Raton y las zonas no incorporadas del condado. Revisamos qué departamento de construcción corresponde a la dirección antes de cotizar.',
      },
      {
        question: '¿Vale la pena la 2512 aislada en lugar de la 2502?',
        answer:
          'Si el espacio detrás de la puerta tiene aire acondicionado, sí. Una puerta de acero sin aislamiento frente al sol de la tarde mete el calor directo al edificio, y la 2512 de dos capas con R 7.0 además es más rígida y más silenciosa. Para un depósito que no se climatiza, la 2502 es el ahorro sensato.',
      },
    ],
  },
};

export const seriesForBrand = (brand: string) => seriesPages.filter((s) => s.brand === brand);

export function seriesOf(lang: 'en' | 'es', s: SeriesPage): SeriesPage {
  const es = lang === 'es' ? seriesEs[`${s.brand}/${s.slug}`] : undefined;
  return es ? { ...s, ...es } : s;
}
