/**
 * County pages: the layer between the state and the city. Queries like
 * "dryer vent cleaning broward" have no city to land on, and a state page
 * does not feel local. Titles and descriptions come from lib/meta.ts.
 */
import type { FAQ } from './services';
import { cities, type City } from './cities';

export interface RegionPageContent {
  slug: string;
  esSlug: string;
  name: string;
  esName: string;
  region: City['region'];
  answer: string;
  esAnswer: string;
  body: string[];
  esBody: string[];
  faq: FAQ[];
  esFaq: FAQ[];
}

export const regionPages: RegionPageContent[] = [
  {
    slug: 'palm-beach-county',
    esSlug: 'condado-de-palm-beach',
    name: 'Palm Beach County',
    esName: 'el Condado de Palm Beach',
    region: 'Palm Beach County',
    answer:
      'Dryer Vent Florida cleans, repairs and installs dryer vents across Palm Beach County, from the condos along the coast to the newer two storey houses out west. Cleaning costs $100 to $200, repair or a new run $200 to $600, and the crews start most mornings in the county.',
    esAnswer:
      'Dryer Vent Florida limpia, repara e instala ventilas de secadora en todo el condado de Palm Beach, desde los condominios de la costa hasta las casas de dos pisos más nuevas del oeste. La limpieza cuesta entre $100 y $200, y la reparación o un tramo nuevo entre $200 y $600.',
    body: [
      'Palm Beach County has two kinds of dryer vent and they fail in opposite ways. East of I-95 a great deal of the housing is condominium and older single storey homes, where the vent is short but often ends at a wall hood nobody can reach, or joins a shared riser that belongs to the association. West of the turnpike the houses are newer and larger, the laundry is often upstairs or on an interior wall, and the vent climbs through a hot attic to a roof cap.',
      'Short runs clog at the hood. Long runs clog along the way, at every bend and every sag in the duct, and in this humidity the lint packs damp instead of blowing out. Either way the dryer slows down gradually enough that it is usually noticed as towels needing a second cycle.',
      'We measure airflow at the outside termination before and after every job, so you can see what changed. If the run is damaged or longer than the Florida Building Code allows for your dryer, we tell you that before quoting a cleaning that would not fix it.',
    ],
    esBody: [
      'En el condado de Palm Beach hay dos tipos de ventila de secadora, y fallan al revés. Al este de la I-95 gran parte de la vivienda son condominios y casas viejas de un piso, con una ventila corta que muchas veces termina en una salida de pared que nadie alcanza, o que se une a un ducto compartido que es de la asociación. Al oeste del turnpike las casas son más nuevas y grandes, la lavandería muchas veces está arriba o en una pared interior, y la ventila sube por un ático caliente hasta el techo.',
      'Los tramos cortos se tapan en la salida. Los largos se tapan en el camino, en cada curva y en cada parte descolgada, y con esta humedad la pelusa se compacta mojada en lugar de salir. Medimos el flujo de aire afuera antes y después de cada trabajo para que usted vea qué cambió.',
    ],
    faq: [
      { question: 'How much does dryer vent cleaning cost in Palm Beach County?', answer: '$100 to $200 for most homes, the same across the county. A short condo or wall run is at the bottom; a long attic run to a roof cap is at the top. Repairs and new runs are $200 to $600.' },
      { question: 'Do you clean dryer vents in Palm Beach County condos?', answer: 'Yes, unit by unit or whole buildings for associations. We clean the section the owner owns and tell you plainly if the restriction is in a shared riser that belongs to the building.' },
      { question: 'Which cities in Palm Beach County do you cover?', answer: 'All of them, including Boca Raton, Delray Beach, Boynton Beach, Lake Worth Beach, Greenacres, West Palm Beach, Wellington, Royal Palm Beach, Palm Beach Gardens and Jupiter.' },
    ],
    esFaq: [
      { question: '¿Cuánto cuesta limpiar la ventila de la secadora en el condado de Palm Beach?', answer: 'Entre $100 y $200 en la mayoría de las casas, igual en todo el condado. Las reparaciones y los tramos nuevos cuestan entre $200 y $600.' },
      { question: '¿Limpian ventilas en condominios de Palm Beach?', answer: 'Sí, por unidad o el edificio completo para asociaciones. Limpiamos la parte del dueño y le decimos claramente si la obstrucción está en un ducto compartido del edificio.' },
    ],
  },
  {
    slug: 'broward-county',
    esSlug: 'condado-de-broward',
    name: 'Broward County',
    esName: 'el Condado de Broward',
    region: 'Broward County',
    answer:
      'Dryer Vent Florida cleans, repairs and installs dryer vents across Broward County, from the 55 plus communities and coastal condos to the two storey suburbs in the west. Cleaning costs $100 to $200 and repair or a new run $200 to $600, with the price given before we book.',
    esAnswer:
      'Dryer Vent Florida limpia, repara e instala ventilas de secadora en todo el condado de Broward, desde las comunidades para mayores de 55 y los condominios de la costa hasta los suburbios de dos pisos del oeste. La limpieza cuesta entre $100 y $200, con el precio antes de agendar.',
    body: [
      'Broward is where we see the widest spread of dryer vent setups in one county. The large 55 plus communities and the coastal condominiums have short runs and shared infrastructure. The older single storey neighbourhoods have laundries that were moved into garages and closets years after the house was built, with vents that went wherever there was a wall. The western suburbs, Weston, Coral Springs, Sunrise and the rest, have long attic runs and plenty of second floor laundry rooms.',
      'The most common problem we find in the county is not a dirty duct but a blocked end: a hood packed with lint, a damper rusted half shut, or a bird nest. The second most common is a transition hose behind the dryer crushed flat against the wall. Both are part of every cleaning.',
      'Every job starts and ends with an airflow reading at the outside termination, so the result is a number and not an impression.',
    ],
    esBody: [
      'Broward es donde vemos más variedad de ventilas en un solo condado. Las comunidades grandes para mayores de 55 y los condominios de la costa tienen tramos cortos y ductos compartidos. Los barrios viejos de un piso tienen lavanderías que se movieron al garaje o a un clóset años después, con ventilas que salieron por donde hubo pared. Los suburbios del oeste tienen tramos largos por el ático y muchas lavanderías en el segundo piso.',
      'El problema más común en el condado no es un ducto sucio sino una salida tapada: llena de pelusa, con la aleta oxidada a medio cerrar, o con un nido. Las dos cosas son parte de cada limpieza, y medimos el flujo antes y después.',
    ],
    faq: [
      { question: 'How much does dryer vent cleaning cost in Broward County?', answer: '$100 to $200 for most homes. Repairs, replacements and new runs are $200 to $600. You get the figure for your vent before we book.' },
      { question: 'Do you work in 55 plus communities and condo buildings?', answer: 'Yes. We clean individual units and quote whole buildings per unit, and we tell owners and boards which part of the run belongs to whom.' },
      { question: 'Which Broward cities do you cover?', answer: 'All of Broward, including Fort Lauderdale, Hollywood, Pompano Beach, Deerfield Beach, Coconut Creek, Coral Springs, Sunrise, Plantation, Davie, Weston and Miramar.' },
    ],
    esFaq: [
      { question: '¿Cuánto cuesta limpiar la ventila de la secadora en Broward?', answer: 'Entre $100 y $200 en la mayoría de las casas. Reparaciones, reemplazos y tramos nuevos entre $200 y $600.' },
      { question: '¿Trabajan en comunidades para mayores de 55 y edificios de condominios?', answer: 'Sí. Limpiamos unidades y cotizamos edificios completos por unidad, y le decimos a dueños y juntas qué parte del tramo es de quién.' },
    ],
  },
  {
    slug: 'miami-dade-county',
    esSlug: 'condado-de-miami-dade',
    name: 'Miami-Dade County',
    esName: 'el Condado de Miami-Dade',
    region: 'Miami-Dade County',
    answer:
      'Dryer Vent Florida cleans, repairs and installs dryer vents across Miami-Dade, from beachfront towers and Art Deco buildings to the single family neighbourhoods of the south county. Cleaning costs $100 to $200 and repair or a new run $200 to $600.',
    esAnswer:
      'Dryer Vent Florida limpia, repara e instala ventilas de secadora en todo Miami-Dade, desde las torres frente al mar y los edificios Art Deco hasta los barrios de casas solas del sur del condado. La limpieza cuesta entre $100 y $200 y la reparación o un tramo nuevo entre $200 y $600.',
    body: [
      'Miami-Dade puts more dryers inside multi-unit buildings than anywhere else we work. In a tower the dryer usually connects to a shared riser, and the most useful thing we can do is tell the owner whether the restriction is in their section or the building\'s. In the older single family neighbourhoods the laundry is often in a converted garage or a back room, and the vent goes straight out through block, which is short and easy to clean but exposed to salt and birds at the hood.',
      'Salt air is the county\'s particular problem. It corrodes hood dampers until they stick, and a damper stuck open lets humid air and insects into the duct all day. A damper stuck closed is worse. We free or replace them as part of the work.',
    ],
    esBody: [
      'En Miami-Dade hay más secadoras dentro de edificios que en ningún otro lugar donde trabajamos. En una torre la secadora casi siempre va a un ducto compartido, y lo más útil que podemos hacer es decirle al dueño si la obstrucción está en su parte o en la del edificio. En los barrios viejos de casas solas la lavandería muchas veces está en un garaje convertido o un cuarto de atrás, y la ventila sale directo por el bloque: corta y fácil de limpiar, pero expuesta a la sal y a los pájaros en la salida.',
      'El aire salino es el problema propio del condado. Oxida las aletas de las salidas hasta que se traban, y una aleta trabada abierta deja entrar humedad e insectos al ducto todo el día. Las liberamos o las cambiamos como parte del trabajo.',
    ],
    faq: [
      { question: 'How much does dryer vent cleaning cost in Miami-Dade?', answer: '$100 to $200 for most homes and condo units. Repairs and new runs are $200 to $600, quoted before we book.' },
      { question: 'Do you clean dryer vents in high rise condos?', answer: 'Yes. We clean the unit\'s section and, for associations, the shared risers, quoted per unit for the building.' },
    ],
    esFaq: [
      { question: '¿Cuánto cuesta limpiar la ventila de la secadora en Miami-Dade?', answer: 'Entre $100 y $200 en la mayoría de las casas y unidades de condominio. Reparaciones y tramos nuevos entre $200 y $600.' },
      { question: '¿Limpian ventilas en condominios de muchos pisos?', answer: 'Sí. Limpiamos la parte de la unidad y, para asociaciones, los ductos compartidos, cotizado por unidad para el edificio.' },
    ],
  },
  {
    slug: 'central-florida',
    esSlug: 'centro-de-florida',
    name: 'Central Florida',
    esName: 'el Centro de Florida',
    region: 'Central Florida',
    answer:
      'Dryer Vent Florida cleans, repairs and installs dryer vents across Central Florida, in Orlando, Kissimmee and Winter Park, from vacation rentals along US 192 to older homes under the oaks. Cleaning costs $100 to $200 and repair or a new run $200 to $600, with the price given before we book.',
    esAnswer:
      'Dryer Vent Florida limpia, repara e instala ventilas de secadora en el Centro de Florida, en Orlando, Kissimmee y Winter Park, desde las casas de alquiler vacacional de la 192 hasta las casas de familia de Buenaventura Lakes. La limpieza de ventila de secadora cuesta de $100 a $200, y la reparación o un ducto nuevo de $200 a $600.',
    body: [
      'Central Florida is a long way from the beach, so salt is not the enemy it is in Miami or Naples. Heat is. Most houses built here since the 1980s put the laundry upstairs or in the middle of the plan, and the vent crosses an attic that bakes all summer before it reaches a roof cap. Lint leaves the dryer damp, settles at every bend and dries hard where it lands.',
      'Around Kissimmee and the attractions corridor the other big factor is short term rentals. A home turned over every few days pushes sheets and towels through the dryer at a pace no family matches, and the vent fills in months rather than years. Owners who live elsewhere usually hear about it first as a housekeeping complaint that loads are not drying.',
      'Closer to downtown Orlando and in Winter Park the houses are older, with the laundry in a garage or utility room and a short wall vent under heavy tree cover. Those runs are quick to clean, and leaves and nests at the hood are as much of the job as the lint inside. Whatever the house, the airflow at the outside termination is measured before and after.',
    ],
    esBody: [
      'El Centro de Florida queda lejos de la playa, así que aquí el enemigo no es la sal sino el calor. Casi todas las casas construidas desde los ochenta tienen la lavandería en el segundo piso o en medio de la casa, y el ducto de la secadora cruza un ático que se cocina todo el verano antes de salir por el techo. La pelusa sale húmeda, se pega en cada codo y allí se endurece.',
      'En Kissimmee, Buenaventura Lakes y la zona de la 192 muchas casas son de alquiler vacacional. Una casa que cambia de huéspedes cada pocos días seca sábanas y toallas sin parar, y la ventila se llena en meses, no en años. Si usted alquila o administra una casa así, una limpieza cada tres o cuatro meses evita que el problema le llegue como queja del equipo de limpieza porque la ropa no seca.',
      'En las casas de familia de Orlando y Kissimmee, con la lavandería en el garaje o en un clóset, una limpieza al año suele bastar. Medimos el flujo de aire afuera antes y después para que usted vea el cambio en números, y hay citas la misma semana cerca de usted, también sábados y domingos.',
    ],
    faq: [
      { question: 'How much does dryer vent cleaning cost in Central Florida?', answer: '$100 to $200 for most homes in Orlando, Kissimmee and Winter Park. Repairs, replacements and new runs are $200 to $600, and you get the figure before we book.' },
      { question: 'How often should a vacation rental dryer vent be cleaned?', answer: 'Every three to four months for a home turned over every few days. Towel and sheet loads fill a vent far faster than family laundry, and the before and after airflow numbers give an owner who lives away something concrete to go on.' },
      { question: 'Which Central Florida areas do you cover?', answer: 'Orlando, Kissimmee and Winter Park, each with its own page, and the neighbourhoods around them such as College Park, Baldwin Park, Lake Nona, Buenaventura Lakes and Celebration. Give us your ZIP code when you book and we will confirm.' },
    ],
    esFaq: [
      { question: '¿Cuál es el precio de limpiar la ventila de la secadora en Orlando o Kissimmee?', answer: 'De $100 a $200 en la mayoría de las casas. Si hay que reparar o cambiar el ducto de la secadora, de $200 a $600. Le damos el precio antes de agendar.' },
      { question: 'Tengo una casa de alquiler vacacional. ¿Cada cuánto se limpia la ventila?', answer: 'Cada tres o cuatro meses si la casa cambia de huéspedes cada pocos días. Las toallas y las sábanas sueltan mucha pelusa, y le dejamos las lecturas de flujo de antes y después aunque usted viva lejos.' },
      { question: '¿Tienen servicio cerca de mí en Kissimmee u Orlando?', answer: 'Sí. Atendemos Orlando, Kissimmee y Winter Park y los barrios de alrededor, como Buenaventura Lakes, Celebration, Lake Nona y College Park. Díganos su código postal al agendar y se lo confirmamos.' },
    ],
  },
  {
    slug: 'tampa-bay',
    esSlug: 'bahia-de-tampa',
    name: 'Tampa Bay',
    esName: 'la Bahía de Tampa',
    region: 'Tampa Bay',
    answer:
      'Dryer Vent Florida cleans, repairs and installs dryer vents around Tampa Bay, in Tampa and St. Petersburg, from 1920s bungalows to two storey suburbs and waterfront homes repaired after the 2024 storms. Cleaning costs $100 to $200 and repair or a new run $200 to $600.',
    esAnswer:
      'Dryer Vent Florida limpia, repara e instala ventilas de secadora en la Bahía de Tampa, en Tampa y St. Petersburg, desde las casitas de los años veinte hasta los suburbios de dos pisos y las casas junto al agua reparadas después de las tormentas de 2024. La limpieza cuesta de $100 a $200.',
    body: [
      'The bay area has two housing stocks that could hardly be more different. In Hyde Park, Seminole Heights, Historic Kenwood and the Old Northeast, the bungalows were built before anyone owned a dryer, so the laundry sits in a back porch addition or a converted garage with a short run through a frame wall. In Westchase, Carrollwood, New Tampa and the newer parts of Pinellas, builders put the laundry upstairs and the vent through the roof.',
      'The short runs fail at the hood, where old plastic goes brittle and cracks. The long ones fail along the way and at the cap, where damper flaps split and hinge pins rust. After the 2024 storms, a great many low lying homes had laundry rooms stripped and rebuilt, and a vent put back in a hurry deserves a look even if the dryer seems fine.',
      'We measure airflow at the outside termination before and after every job. In apartment communities and condo buildings the vent belongs to the property, so we work with management and price the building per unit.',
    ],
    esBody: [
      'En la Bahía de Tampa hay dos tipos de casa muy distintos. En Hyde Park, Seminole Heights, Historic Kenwood y Old Northeast, las casitas viejas se hicieron antes de que existieran las secadoras, y la lavandería quedó en un portal de atrás o en un garaje convertido, con una ventila corta por una pared de madera. En Westchase, Carrollwood y New Tampa la lavandería está arriba y el ducto de la secadora sale por el techo.',
      'Los tramos cortos fallan en la salida, donde el plástico viejo se raja. Los largos fallan en el camino y en el techo, donde la aleta se parte y la bisagra se oxida. Después de las tormentas de 2024 muchas lavanderías junto al agua se rehicieron a la carrera, y vale la pena revisar esa ventila aunque la secadora parezca bien.',
      'La limpieza de ventila de secadora tiene un precio de $100 a $200, y la reparación o un ducto nuevo de $200 a $600. Medimos el flujo de aire afuera antes y después, y hay citas la misma semana cerca de usted, de lunes a domingo.',
    ],
    faq: [
      { question: 'How much does dryer vent cleaning cost in the Tampa Bay area?', answer: '$100 to $200 for most homes in Tampa and St. Petersburg. Repairs, replacements and new runs are $200 to $600, and condo and apartment buildings are priced per unit.' },
      { question: 'Our laundry room was rebuilt after flooding. Should the vent be checked?', answer: 'Yes. Vents reconnected during a fast rebuild often have a crushed hose, a loose joint or a hood that no longer closes. We trace the run, clean it and measure airflow so you know where it stands.' },
      { question: 'Which Tampa Bay areas do you cover?', answer: 'Tampa and St. Petersburg, each with its own page, and the neighbourhoods around them, from South Tampa and Seminole Heights to Westchase, Carrollwood, Snell Isle and Shore Acres. Give us your ZIP code when you book and we will confirm.' },
    ],
    esFaq: [
      { question: '¿Cuánto cuesta limpiar la ventila de la secadora en Tampa o St. Petersburg?', answer: 'De $100 a $200 en la mayoría de las casas. Reparaciones, reemplazos y ductos nuevos de $200 a $600, y los edificios se cotizan por unidad.' },
      { question: 'La lavandería se rehízo después de una inundación. ¿Hay que revisar la ventila?', answer: 'Sí. En un arreglo rápido la manguera queda aplastada, una unión suelta o la aleta sin cerrar. Revisamos el tramo completo, lo limpiamos y medimos el flujo.' },
    ],
  },
  {
    slug: 'southwest-florida',
    esSlug: 'suroeste-de-florida',
    name: 'Southwest Florida',
    esName: 'el Suroeste de Florida',
    region: 'Southwest Florida',
    answer:
      'Dryer Vent Florida cleans, repairs and installs dryer vents across Southwest Florida, in Fort Myers, Cape Coral, Bonita Springs and Naples, from Gulf front condo towers to canal homes with the laundry in the garage. Cleaning costs $100 to $200 and repair or a new run $200 to $600.',
    esAnswer:
      'Dryer Vent Florida limpia, repara e instala ventilas de secadora en el Suroeste de Florida, en Fort Myers, Cape Coral, Bonita Springs y Naples, desde las torres de condominios frente al Golfo hasta las casas de canal con la lavandería en el garaje. La limpieza cuesta de $100 a $200.',
    body: [
      'Southwest Florida divides into three kinds of dryer vent. Cape Coral and much of Fort Myers are single storey block homes with the washer and dryer in the garage and a vent a few feet long through the side wall. Bonita Springs and the gated communities around it have coach homes, where the upstairs unit vents through a long run in the floor framing. Naples and the Gulf front of Bonita have condo towers, where the outside end of the duct is usually on a balcony or a wall only the building can reach.',
      'Salt and humidity work on all three. Damper hinges near the Gulf and the canals corrode until the flap sticks, and after Hurricane Ian many laundry rooms in Fort Myers and Cape Coral were rebuilt quickly enough that the vent deserves a second look. Many owners here are seasonal, so October or November, before the house fills up, is the sensible time to clean.',
    ],
    esBody: [
      'En el Suroeste de Florida hay tres tipos de ventila. En Cape Coral y gran parte de Fort Myers son casas de bloque de una planta con la secadora en el garaje y un ducto de pocos pies por la pared lateral. En Bonita Springs hay muchas coach homes, donde la unidad de arriba saca el aire por un ducto largo entre pisos. En Naples hay torres de condominios, donde la salida está en el balcón o en una pared a la que solo llega el edificio.',
      'La sal y la humedad atacan a las tres: la aleta se oxida y se traba. Después del huracán Ian muchas lavanderías se rehicieron a la carrera, y conviene revisar el ducto de la secadora. Si usted pasa aquí solo la temporada, octubre o noviembre es buen momento para la limpieza de ventila de secadora, con un precio de $100 a $200 y cita la misma semana cerca de usted.',
    ],
    faq: [
      { question: 'How much does dryer vent cleaning cost in Southwest Florida?', answer: '$100 to $200 for most homes and condo units in Fort Myers, Cape Coral, Bonita Springs and Naples. Repairs and new runs are $200 to $600, and condo buildings are priced per unit.' },
      { question: 'I only live here in season. When should the vent be cleaned?', answer: 'October or November, before the house is in daily use again. If you rent it out in the winter months, clean again when the season ends.' },
      { question: 'Which Southwest Florida areas do you cover?', answer: 'Fort Myers, Cape Coral, Bonita Springs and Naples, each with its own page, and the communities around them. Give us your ZIP code when you book and we will confirm.' },
    ],
    esFaq: [
      { question: '¿Cuánto cuesta limpiar la ventila de la secadora en Fort Myers, Cape Coral o Naples?', answer: 'De $100 a $200 en la mayoría de las casas y unidades de condominio. Reparaciones y ductos nuevos de $200 a $600, y los edificios se cotizan por unidad.' },
      { question: 'Solo vivo aquí en temporada. ¿Cuándo conviene limpiar?', answer: 'En octubre o noviembre, antes de volver a usar la casa todos los días. Si la alquila en invierno, límpiela otra vez cuando termine la temporada.' },
    ],
  },
];

export function getRegionPage(slug: string): RegionPageContent | undefined {
  return regionPages.find((r) => r.slug === slug || r.esSlug === slug);
}

export function citiesForRegionPage(r: RegionPageContent): City[] {
  return cities.filter((c) => c.region === r.region);
}
