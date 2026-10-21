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
];

export function getRegionPage(slug: string): RegionPageContent | undefined {
  return regionPages.find((r) => r.slug === slug || r.esSlug === slug);
}

export function citiesForRegionPage(r: RegionPageContent): City[] {
  return cities.filter((c) => c.region === r.region);
}
