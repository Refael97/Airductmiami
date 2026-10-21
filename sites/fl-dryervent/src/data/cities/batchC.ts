import type { CityContent } from '../cityTypes';

/*
 * Spanish first markets. These cities were chosen because Spanish searches
 * come from them, so the Spanish fields carry three full depth blocks and
 * use the words people actually type: limpieza de ventila de secadora,
 * ducto de la secadora, precio, cerca de usted.
 */
export const cityBatchC: CityContent[] = [
  {
    slug: "hialeah",
    name: "Hialeah",
    county: "Miami-Dade County",
    region: "Miami-Dade County",
    nearby: ["miami", "doral", "miami-gardens"],
    neighborhoods: ["East Hialeah", "West Hialeah", "Milander", "Westland", "Hialeah Park"],
    intro:
      "Hialeah is block houses built close together from the 1950s into the 1970s, and very few of them still have the floor plan they started with. Rooms, efficiencies and covered patios have been added over the years, and the dryer usually ended up wherever there was space left.",
    introEs:
      "Hialeah es casas de bloque pegadas unas a otras, construidas entre los años cincuenta y setenta, y casi ninguna conserva el plano original. Con los años se añadieron cuartos, eficiencias y terrazas techadas, y la secadora terminó donde quedó espacio. Por eso la limpieza de ventila de secadora aquí casi nunca es igual de una casa a otra.",
    common:
      "The failure we find most in Hialeah is a dryer moved into an addition or onto a back patio, still exhausting through a short piece of foil hose that ends a few inches from a window, a door or a neighbour's wall.",
    commonEs:
      "Lo que más encontramos en Hialeah es una secadora que se mudó a una ampliación o a la terraza de atrás y sigue botando el aire por un pedazo corto de manguera de aluminio, a pocas pulgadas de una ventana, una puerta o la pared del vecino.",
    depth: [
      {
        heading: "Additions, efficiencies and the patio laundry",
        body: [
          "On the streets of East Hialeah and around Hialeah Park, a typical lot holds the original house, a rear addition and often an efficiency rented to a relative or a tenant. The laundry has moved more than once along the way, and it is common to find the dryer under the roof of a back terrace with its exhaust aimed at the yard through a hose a couple of feet long.",
          "That arrangement clogs quickly and leaves lint and damp air right where the family sits. The code wants the exhaust to end outside the building, at least 3 feet from any opening, with a backdraft damper and no screen. Usually a short rigid run through the block wall and a proper hood fixes it, which falls in the $200 to $600 repair range.",
        ],
      },
      {
        heading: "One dryer, two households",
        body: [
          "Where an efficiency shares the main house's laundry, the dryer can run every day for two families. Lint builds with the number of loads, not with the months on the calendar, so a vent that would last a year in a quiet house can be choked in six months here.",
          "Towels that need a second cycle, or a laundry corner that turns hot and sticky while the dryer runs, point at the vent before they point at the dryer. A cleaning is $100 to $200, which costs less than a service call for a dryer that has nothing wrong with it.",
        ],
      },
      {
        heading: "Narrow side yards and hidden hoods",
        body: [
          "Hialeah houses sit close to each other, and many dryer vents come out into a side yard a few feet wide, behind a fence gate, a water heater or whatever is being stored there. A hood that nobody sees is a hood that nobody clears.",
          "We need a clear path to that outside hood, because that is where we take the first airflow reading and where most of the lint collects. We clean from the hood and from the dryer, free the damper, and confirm the termination keeps its distance from your own doors and windows.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Ampliaciones, eficiencias y la secadora en la terraza",
        body: [
          "En East Hialeah y en las calles alrededor de Hialeah Park, un lote típico tiene la casa original, una ampliación atrás y muchas veces una eficiencia alquilada a un familiar o a un inquilino. La lavandería se ha mudado más de una vez, y es común encontrar la secadora debajo del techo de la terraza, botando el aire al patio por una manguera de dos pies.",
          "Así la pelusa y el aire húmedo se quedan donde la familia se sienta. El código pide que la salida esté afuera de la casa, a por lo menos 3 pies de puertas y ventanas, con aleta antirretorno y sin malla. Casi siempre se resuelve con un ducto de la secadora rígido y corto a través de la pared de bloque y una tapa como debe ser. Ese arreglo tiene un precio de $200 a $600.",
        ],
      },
      {
        heading: "Una secadora para dos familias",
        body: [
          "Cuando la eficiencia usa la misma lavandería de la casa, la secadora trabaja todos los días para dos familias. La pelusa se acumula según las cargas, no según los meses, y una ventila que en otra casa aguanta un año aquí puede taparse en seis meses.",
          "Si las toallas necesitan dos ciclos o el rincón de la lavandería se pone caliente y húmedo mientras la secadora trabaja, lo primero que hay que revisar es la ventila. La limpieza de ventila de secadora cuesta de $100 a $200, menos que la visita de un técnico para una secadora que no tiene nada roto.",
        ],
      },
      {
        heading: "Pasillos estrechos y salidas escondidas",
        body: [
          "Las casas de Hialeah están muy cerca unas de otras, y muchas ventilas salen a un pasillo lateral de pocos pies, detrás de una reja, del calentador de agua o de cosas guardadas. Una salida que nadie ve es una salida que nadie limpia.",
          "Necesitamos llegar a esa salida, porque allí medimos el flujo de aire primero y allí se junta casi toda la pelusa. Limpiamos desde afuera y desde la secadora, soltamos la aleta y volvemos a medir. Si busca quien limpie la ventila cerca de usted en Hialeah, tenemos citas la misma semana, también sábados y domingos.",
        ],
      },
    ],
    faq: [
      {
        question: "My dryer is on the back patio and blows into the yard. Is that a problem?",
        answer:
          "Often it is. Under a covered patio and near a door or window, lint and moisture settle against the house. The exhaust should end outside the building, 3 feet from any opening, with a damper. A short rigid run to an outside wall is the usual fix.",
      },
      {
        question: "I rent out an efficiency that uses the same dryer. How often should the vent be cleaned?",
        answer:
          "With two households on one dryer, start with every six months. The airflow readings from the first visit show how fast lint builds at your house, and you can adjust from there.",
      },
      {
        question: "Do you need to get into the side yard?",
        answer:
          "Yes. The first airflow reading is taken at the outside hood, and that is also where most lint collects. If the hood is behind a locked gate or stored items, clearing the way before we arrive saves time.",
      },
    ],
    faqEs: [
      {
        question: "¿Cuál es el precio de la limpieza de ventila de secadora en Hialeah?",
        answer:
          "Entre $100 y $200 por secadora. Si hay que cambiar el ducto de la secadora o sacarlo por otra pared, el trabajo cuesta de $200 a $600, y le damos el precio antes de agendar.",
      },
      {
        question: "Mi secadora está en la terraza y bota el aire al patio. ¿Está bien así?",
        answer:
          "Casi nunca. Debajo de un techo y cerca de una puerta o ventana, la pelusa y la humedad se quedan pegadas a la casa. La salida debe estar afuera, a 3 pies de cualquier abertura, con aleta. Un ducto rígido corto hasta una pared exterior lo resuelve.",
      },
      {
        question: "Alquilo una eficiencia que usa la misma secadora. ¿Cada cuánto hay que limpiar?",
        answer:
          "Con dos familias usando una sola secadora, empiece con una limpieza cada seis meses. Las lecturas de flujo de la primera visita le dicen qué tan rápido se acumula la pelusa en su casa.",
      },
    ],
  },
  {
    slug: "kendall",
    name: "Kendall",
    county: "Miami-Dade County",
    region: "Miami-Dade County",
    nearby: ["pinecrest", "coral-gables", "doral", "homestead"],
    neighborhoods: ["Dadeland", "Kendale Lakes", "Devon Aire", "Country Walk", "The Hammocks", "Kendall West"],
    intro:
      "Kendall spread west from Dadeland between the 1970s and the 1990s: first single storey block houses with a garage, then townhouse and villa communities toward The Hammocks and Kendall West. Most dryers here vent through a garage wall or climb through the attic to the roof.",
    introEs:
      "Kendall creció hacia el oeste desde Dadeland entre los setenta y los noventa: primero casas de bloque de un piso con garaje, después comunidades de townhouses y villas hacia The Hammocks y Kendall West. Casi todas las secadoras sacan el aire por la pared del garaje o suben por el ático hasta el techo.",
    common:
      "In Kendall the most common find is an attic duct that has slipped off a joint on its way to the roof, so part of every load's lint and moisture lands on the insulation instead of going outside.",
    commonEs:
      "En Kendall lo más común es un ducto de la secadora que se zafó de una unión dentro del ático, de modo que parte de la pelusa y la humedad de cada carga cae sobre el aislamiento en vez de salir.",
    depth: [
      {
        heading: "Garage laundries in the older sections",
        body: [
          "In Kendale Lakes, Devon Aire and the streets off Kendall Drive built in the 1970s and early 1980s, the washer and dryer usually stand in the garage. When the dryer backs onto an outside wall, the vent is a few feet long and simple to service. When it backs onto the wall shared with the house, the duct often goes up and across the garage ceiling to reach the roof or a soffit.",
          "Soffit endings are the ones we like least. Lint blown into a soffit tends to drift back into the attic along with the damp air, which is the opposite of what the duct is for. Where we find one, we price moving the termination to a wall or roof cap with a proper damper.",
        ],
      },
      {
        heading: "Townhouses in The Hammocks and Kendall West",
        body: [
          "The townhouse and villa communities farther west put the laundry in a closet off the kitchen, under the stairs or on the second floor. The duct runs between floors or across a ceiling to an outside wall, and the hood often sits high on a wall above a neighbour's patio or a shared walkway.",
          "Reaching that hood takes a ladder and sometimes the association's permission. We can line up several units in one community on the same day at a per unit price, which makes access simpler for owners and for the board.",
        ],
      },
      {
        heading: "Thirty years after Andrew",
        body: [
          "Country Walk and much of south Kendall were badly damaged by Hurricane Andrew in 1992, and many roofs and laundry rooms were rebuilt in the years after. Those rebuilds are now old enough that plastic roof caps have gone brittle and the tape on attic joints has let go.",
          "Cleaning is $100 to $200. If attic joints have separated or a cap is broken, repair is $200 to $600 and is quoted before we book. Either way you get the airflow numbers from before and after the work.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "La lavandería en el garaje",
        body: [
          "En Kendale Lakes, Devon Aire y las calles cerca de Kendall Drive construidas en los setenta y principios de los ochenta, la lavadora y la secadora casi siempre están en el garaje. Si la secadora está contra una pared exterior, la ventila mide pocos pies y se limpia fácil. Si está contra la pared de la casa, el ducto sube y cruza el techo del garaje hasta el techo de la casa o el alero.",
          "Las salidas en el alero son las que menos nos gustan, porque la pelusa y el aire húmedo vuelven a entrar al ático. Cuando encontramos una, le damos el precio de moverla a una pared o al techo con una tapa que tenga aleta.",
        ],
      },
      {
        heading: "Townhouses en The Hammocks y Kendall West",
        body: [
          "En las comunidades de townhouses y villas del oeste, la lavandería está en un clóset junto a la cocina, debajo de la escalera o en el segundo piso. El ducto de la secadora pasa entre pisos o por el techo hasta una pared exterior, y la salida muchas veces queda alta, encima del patio de un vecino o de un pasillo común.",
          "Para llegar hace falta escalera y a veces permiso de la asociación. Podemos hacer varias unidades de la misma comunidad el mismo día, con precio por unidad, y así el acceso es más sencillo para todos.",
        ],
      },
      {
        heading: "Después de Andrew",
        body: [
          "Country Walk y gran parte del sur de Kendall sufrieron mucho con el huracán Andrew en 1992, y muchos techos y lavanderías se reconstruyeron después. Hoy esas tapas de plástico están quebradizas y la cinta de las uniones en el ático ya se despegó.",
          "La limpieza de ventila de secadora cuesta de $100 a $200, y la reparación de $200 a $600. Medimos el flujo antes y después para que vea el cambio. Trabajamos en Kendall toda la semana, así que hay cita cerca de usted casi siempre la misma semana.",
        ],
      },
    ],
    faq: [
      {
        question: "Can dryer lint really end up in my attic?",
        answer:
          "Yes, when a joint in the attic has separated. The dryer keeps running, but part of the exhaust goes into the attic with every load. We check every joint we can reach and reseal with foil tape, never with screws.",
      },
      {
        question: "My townhouse vent comes out on the second floor. Can you reach it?",
        answer:
          "In most cases, with a ladder outside and from the laundry closet inside. If the association controls access, we coordinate with it, and neighbouring units can be done the same day.",
      },
      {
        question: "How often should a Kendall house have the dryer vent cleaned?",
        answer:
          "Once a year for a typical family. Every six months if the duct climbs through the attic to the roof or the dryer runs most days.",
      },
    ],
    faqEs: [
      {
        question: "¿Qué precio tiene la limpieza de ventila de secadora en Kendall?",
        answer:
          "De $100 a $200 en la mayoría de las casas y townhouses. Si hay que reparar o cambiar el ducto, de $200 a $600, con el precio claro antes de agendar.",
      },
      {
        question: "¿De verdad la pelusa puede terminar en mi ático?",
        answer:
          "Sí, si una unión del ducto se soltó allá arriba. La secadora sigue funcionando, pero parte del aire se queda en el ático con cada carga. Revisamos las uniones que se alcanzan y las sellamos con cinta de aluminio, nunca con tornillos.",
      },
      {
        question: "Mi townhouse tiene la salida en el segundo piso. ¿Pueden llegar?",
        answer:
          "Casi siempre, con escalera por fuera y desde el clóset de la lavandería por dentro. Si la asociación controla el acceso, coordinamos con ella.",
      },
    ],
  },
  {
    slug: "doral",
    name: "Doral",
    county: "Miami-Dade County",
    region: "Miami-Dade County",
    nearby: ["hialeah", "miami", "kendall"],
    neighborhoods: ["Downtown Doral", "Doral Isles", "Doral Park", "Costa del Sol", "Islands at Doral"],
    intro:
      "Doral is newer than most of Miami-Dade: townhouse communities and mid rise condo buildings, mostly built from the 1990s onward, set between the golf courses and the warehouse streets near the airport. The dryer is nearly always indoors in a closet, and the vent runs through ceilings and walls you never see.",
    introEs:
      "Doral es más nuevo que casi todo Miami-Dade: comunidades de townhouses y edificios de condominios de mediana altura, construidos sobre todo desde los noventa, entre los campos de golf y las calles de almacenes cerca del aeropuerto. La secadora casi siempre está adentro, en un clóset, y el ducto de la secadora pasa por techos y paredes que usted nunca ve.",
    common:
      "The failure we find most in Doral is a closet dryer pushed tight against the wall, its transition hose folded flat behind it, feeding a concealed run that has not been cleaned since the first owner moved in.",
    commonEs:
      "Lo que más encontramos en Doral es una secadora empujada contra la pared del clóset, con la manguera de atrás aplastada, conectada a un ducto escondido que nadie ha limpiado desde que llegó el primer dueño.",
    depth: [
      {
        heading: "Shallow closets and crushed hoses",
        body: [
          "Doral builders gave laundry closets very little depth, so the dryer gets pushed back until the door will close. The transition hose behind it, which the code says must be listed, no longer than 8 feet and never hidden in a wall, ends up folded flat. A crushed hose can choke airflow even when the duct beyond it is clean.",
          "We pull the dryer out, inspect the hose and replace it if it has been kinked or flattened. Where the closet is simply too shallow, a recessed dryer box set into the wall gives the hose room to bend without collapsing.",
        ],
      },
      {
        heading: "Mid rise condos around Downtown Doral",
        body: [
          "In the mid rise buildings, each unit's duct usually crosses a ceiling soffit to an outside wall and ends on a balcony or a wall several floors up. An owner can have the inside section cleaned, but the hood end normally needs the building's cooperation.",
          "For associations we price the whole building per unit and work floor by floor. For a single owner we clean the run inside the unit, clear the hood if the balcony reaches it, and say plainly when the restriction is in a part that belongs to the building.",
        ],
      },
      {
        heading: "Townhouse roofs near the golf courses",
        body: [
          "In Doral Isles, Costa del Sol and the townhouse rows by the golf courses, a second floor laundry often vents up through a tile roof. Those caps sit in full sun, and Doral has had construction going on somewhere nearby for two decades, so fine dust joins the damp lint at the damper.",
          "Cleaning a townhouse or condo unit is $100 to $200. Repair, a new hose box or a new run is $200 to $600, with the figure given before we book.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Clósets estrechos y mangueras aplastadas",
        body: [
          "En Doral los constructores hicieron los clósets de lavandería muy poco profundos, y la secadora se empuja hasta que cierra la puerta. La manguera de transición de atrás, que según el código debe ser aprobada, medir 8 pies como máximo y nunca ir dentro de la pared, queda doblada y aplastada. Una manguera así ahoga el flujo aunque el ducto de la secadora esté limpio.",
          "Sacamos la secadora, revisamos la manguera y la cambiamos si está doblada. Si el clóset es demasiado estrecho, una caja empotrada en la pared le da espacio a la manguera para doblarse sin aplastarse.",
        ],
      },
      {
        heading: "Condominios de mediana altura",
        body: [
          "En los edificios de Downtown Doral, el ducto de cada unidad cruza un falso techo hasta una pared exterior y termina en el balcón o en una pared varios pisos arriba. El dueño puede limpiar la parte de adentro, pero la salida casi siempre necesita al edificio.",
          "Para asociaciones damos el precio del edificio completo por unidad y trabajamos piso por piso. Para un dueño solo, limpiamos el tramo de la unidad, la salida si se alcanza desde el balcón, y le decimos claro si la obstrucción está en la parte del edificio.",
        ],
      },
      {
        heading: "Townhouses con salida en el techo",
        body: [
          "En Doral Isles, Costa del Sol y los townhouses junto a los campos de golf, la lavandería del segundo piso muchas veces sale por un techo de tejas. Esas salidas reciben sol todo el día, y con tanta construcción alrededor por tantos años, el polvo fino se pega a la pelusa húmeda en la aleta.",
          "La limpieza de ventila de secadora en un townhouse o un apartamento cuesta de $100 a $200. Si busca este servicio cerca de usted en Doral, hay citas la misma semana, de lunes a viernes de 8am a 7pm y también sábados y domingos.",
        ],
      },
    ],
    faq: [
      {
        question: "My dryer sits in a narrow closet. Is the hose behind it a problem?",
        answer:
          "Often. When the dryer is pushed tight to the wall the hose folds flat and airflow drops. We check it on every visit and replace it if it is crushed. A recessed dryer box can solve the space problem for good.",
      },
      {
        question: "Can I have my condo dryer vent cleaned without involving the building?",
        answer:
          "The section inside your unit, yes. The hood end is usually on a building wall or a balcony, and if it cannot be reached from your unit we tell you so management can arrange access.",
      },
      {
        question: "We bought a townhouse built in the 2000s. Should the vent be cleaned now?",
        answer:
          "Yes, unless the seller has records of cleaning. Resale townhouses here often have years of lint in the run, and the first visit gives you a baseline airflow reading.",
      },
    ],
    faqEs: [
      {
        question: "¿Cuánto es el precio de limpiar la ventila de la secadora en Doral?",
        answer:
          "De $100 a $200 por unidad. Si hay que cambiar la manguera, poner una caja empotrada o hacer un ducto nuevo, de $200 a $600, con el precio antes de agendar.",
      },
      {
        question: "Mi secadora está en un clóset estrecho. ¿La manguera de atrás es un problema?",
        answer:
          "Muchas veces sí. Cuando la secadora queda pegada a la pared, la manguera se aplasta y el aire no sale. La revisamos en cada visita y la cambiamos si hace falta.",
      },
      {
        question: "Compramos un townhouse de los dos mil. ¿Hay que limpiar la ventila?",
        answer:
          "Sí, salvo que el vendedor tenga constancia de una limpieza. En las reventas es normal encontrar años de pelusa, y la primera visita le deja una lectura de flujo para comparar después.",
      },
    ],
  },
  {
    slug: "homestead",
    name: "Homestead",
    county: "Miami-Dade County",
    region: "Miami-Dade County",
    nearby: ["kendall", "pinecrest", "coral-gables"],
    neighborhoods: ["Downtown Homestead", "Keys Gate", "Waterstone", "Silver Palm", "Redland"],
    intro:
      "Homestead was largely flattened by Hurricane Andrew in 1992, rebuilt in the years that followed, and then grew quickly in the 2000s with large subdivisions such as Keys Gate and Waterstone. Older block houses near downtown sit a few minutes from brand new streets, and the dryer vents are just as mixed.",
    introEs:
      "Homestead quedó casi destruido por el huracán Andrew en 1992, se reconstruyó en los años siguientes y después creció muy rápido en los dos mil con subdivisiones grandes como Keys Gate y Waterstone. Las casas de bloque viejas cerca del centro quedan a pocos minutos de calles nuevas, y las ventilas de secadora son igual de distintas.",
    common:
      "In Homestead the failure we find most is a cap blocked from the outside, by wasps, birds or dust and seed blown in from the nurseries and fields to the west, while the duct behind it is only moderately dirty.",
    commonEs:
      "En Homestead lo que más encontramos es una salida tapada por fuera, por avispas, pájaros o el polvo y las semillas que llegan de los viveros y los campos del oeste, mientras el ducto de la secadora por dentro está apenas sucio.",
    depth: [
      {
        heading: "Rebuilt after Andrew",
        body: [
          "Much of the housing near Downtown Homestead and along Krome Avenue was repaired or rebuilt after Andrew. Those houses are now more than thirty years past the storm, and many dryer vents put in during the rebuild, often in a hurry with whatever material was on hand, have never been touched since.",
          "We trace the run from end to end and look for what rushed work tends to leave behind: foil or plastic hose hidden inside a wall, screws through the duct that catch lint, and more elbows than the route needs. Replacing a bad run with 4 inch rigid metal on a shorter path is $200 to $600.",
        ],
      },
      {
        heading: "The newer subdivisions",
        body: [
          "Keys Gate, Waterstone and the subdivisions built since the 2000s are mostly slab homes of one or two storeys, with the laundry in the garage or an interior room. Builders usually sent the vent straight up through the roof, which puts the cap out of sight and out of mind.",
          "A roof cap here gets full sun and heavy summer rain with nothing to shade it. Plastic dampers crack, and once the flap stays open, birds and mud building wasps move in. We clear the cap, test that the damper closes, and replace it when it no longer does.",
        ],
      },
      {
        heading: "Dust from the Redland",
        body: [
          "West toward the Redland, nurseries and groves put dust, pollen and seed into the air, and much of it sticks to the damp lint at the hood. Rural lots often have the laundry in a utility room off the carport, with a short wall vent that is easy to clean and easy to forget.",
          "Cleaning is $100 to $200 in Homestead as everywhere else in the county. We take an airflow reading at the outside termination before we start and again when we finish, so you can see the difference in numbers.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Casas reconstruidas después de Andrew",
        body: [
          "Gran parte de las casas cerca del centro de Homestead y por Krome Avenue se repararon o se reconstruyeron después de Andrew. Ya pasaron más de treinta años, y muchas ventilas que se pusieron en la reconstrucción, a la carrera y con lo que había, nunca se han vuelto a revisar.",
          "Seguimos el ducto de la secadora de punta a punta y buscamos lo que deja el trabajo apurado: manguera de aluminio o de plástico metida en la pared, tornillos que atraviesan el ducto y atrapan pelusa, y más codos de los necesarios. Cambiar un tramo malo por ducto rígido de metal de 4 pulgadas por una ruta más corta cuesta de $200 a $600.",
        ],
      },
      {
        heading: "Las subdivisiones nuevas",
        body: [
          "En Keys Gate, Waterstone y las subdivisiones de los dos mil para acá, las casas son de uno o dos pisos, con la lavandería en el garaje o en un cuarto interior. Los constructores casi siempre sacaron la ventila derecho por el techo, y nadie se acuerda de esa salida.",
          "Allá arriba la salida recibe sol fuerte y aguaceros todo el verano. La aleta de plástico se raja, se queda abierta y entran pájaros y avispas a hacer nido. Limpiamos la salida, probamos que la aleta cierre y la cambiamos si ya no sirve.",
        ],
      },
      {
        heading: "Polvo del Redland",
        body: [
          "Hacia el Redland, los viveros y los sembrados llenan el aire de polvo, polen y semillas, y todo eso se pega a la pelusa húmeda en la salida. En los terrenos grandes la lavandería suele estar en un cuarto junto al carport, con una ventila corta en la pared que es fácil de limpiar y fácil de olvidar.",
          "La limpieza de ventila de secadora en Homestead tiene el mismo precio que en el resto del condado, de $100 a $200. No tiene que buscar lejos un servicio cerca de usted: Homestead está dentro de nuestra zona de Miami-Dade, con citas la misma semana.",
        ],
      },
    ],
    faq: [
      {
        question: "My house was rebuilt after Andrew. Should the dryer vent be checked?",
        answer:
          "Yes. Vents installed during the rebuild were often done quickly with whatever was available. We trace the whole run, check for hose hidden in walls and screws in the duct, and tell you whether cleaning is enough.",
      },
      {
        question: "There is a wasp nest in my dryer vent cap. Can you deal with it?",
        answer:
          "Yes, clearing the hood is part of every cleaning. If a nest is packed deep into a roof cap we may quote that before booking, and we replace the cap if the damper can no longer close.",
      },
      {
        question: "Is Homestead inside your service area?",
        answer:
          "Yes. Homestead is part of our Miami-Dade coverage, with same week appointments, Monday to Friday 8am to 7pm, Saturday 9am to 5pm and Sunday 10am to 4pm.",
      },
    ],
    faqEs: [
      {
        question: "¿Cuál es el precio de limpiar la ventila de la secadora en Homestead?",
        answer:
          "De $100 a $200 en la mayoría de las casas. Si el ducto hay que repararlo o cambiarlo, de $200 a $600, y le damos el precio antes de agendar.",
      },
      {
        question: "Hay un nido de avispas en la salida de la secadora. ¿Lo pueden sacar?",
        answer:
          "Sí, limpiar la salida es parte de cada limpieza. Si el nido está muy metido en la salida del techo, puede que le demos el precio antes, y cambiamos la tapa si la aleta ya no cierra.",
      },
      {
        question: "Mi casa se reconstruyó después de Andrew. ¿Hay que revisar la ventila?",
        answer:
          "Sí. Muchas ventilas de esa época se pusieron rápido y con lo que había. Revisamos todo el tramo y le decimos si basta con limpiar o si conviene cambiarlo.",
      },
    ],
  },
  {
    slug: "miami-gardens",
    name: "Miami Gardens",
    county: "Miami-Dade County",
    region: "Miami-Dade County",
    nearby: ["hialeah", "miramar", "hollywood", "miami"],
    neighborhoods: ["Carol City", "Norland", "Andover", "Lake Lucerne", "Scott Lake", "Bunche Park"],
    intro:
      "Miami Gardens is mostly single family block houses from the 1960s to the 1980s, in neighbourhoods like Carol City, Norland, Andover and Scott Lake. Many had a carport closed in at some point, and the laundry now sits in that converted space with a vent through the block wall at knee height.",
    introEs:
      "Miami Gardens es sobre todo casas de bloque de una familia, de los sesenta a los ochenta, en barrios como Carol City, Norland, Andover y Scott Lake. Muchas cerraron el carport en algún momento, y la lavandería quedó en ese espacio, con la ventila saliendo por la pared de bloque a la altura de la rodilla.",
    common:
      "The failure we find most in Miami Gardens is a low wall hood buried behind hedges or crotons, its damper stuck open and the opening packed with lint, leaves and grass clippings.",
    commonEs:
      "Lo que más encontramos en Miami Gardens es una salida baja en la pared, escondida detrás de los arbustos o los crotos, con la aleta trabada abierta y la boca llena de pelusa, hojas y grama cortada.",
    depth: [
      {
        heading: "Converted carports and garages",
        body: [
          "When a carport or garage becomes a laundry room or a bedroom, the dryer usually goes against the old exterior wall, and someone cores a hole through the block for the vent. The run is short, which is good, but the hood was often the cheapest one on the shelf and the hole was never sealed around the duct.",
          "Gaps around the duct let water and insects into the wall, and a cheap hood with a light flap does not close tightly. We clean the run, seal the penetration, and fit a hood with a working backdraft damper when the old one has failed.",
        ],
      },
      {
        heading: "Hoods at ground level",
        body: [
          "Because the vent comes out low, it sits right in the landscaping. Hedges grow over it, mulch piles against it, and every pass of the mower or the leaf blower sends clippings toward the opening. A wall hood blocked from outside makes the dryer run hot no matter how clean the duct is inside.",
          "Keep a clear space around the hood and look at it now and then while the dryer runs. If you cannot feel air coming out, or the flap does not move, that is the moment to call, not after the next load.",
        ],
      },
      {
        heading: "Old duct material",
        body: [
          "In houses from the 1960s and 1970s, the dryer was often added years after construction, and some still have the white plastic or thin foil duct that was common then. The code calls for 4 inch rigid metal duct with a smooth interior, and only a short listed transition hose behind the dryer.",
          "Swapping plastic or foil for rigid metal on a short wall run is a modest job within the $200 to $600 range. A routine cleaning, airflow measured before and after, is $100 to $200.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Carports y garajes convertidos",
        body: [
          "Cuando el carport o el garaje se convierte en lavandería o en cuarto, la secadora se pone contra la pared exterior vieja y se abre un hueco en el bloque para la ventila. El ducto de la secadora queda corto, eso está bien, pero la tapa casi siempre fue la más barata y el hueco nunca se selló alrededor.",
          "Por esas rendijas entran agua e insectos a la pared, y una tapa barata con aleta liviana no cierra bien. Limpiamos el tramo, sellamos alrededor del ducto y ponemos una tapa con aleta que funcione cuando la vieja ya no sirve.",
        ],
      },
      {
        heading: "Salidas a ras del suelo",
        body: [
          "Como la ventila sale baja, queda metida en el jardín. Los arbustos crecen encima, el mantillo se amontona y cada pasada de la cortadora o de la sopladora tira grama hacia la boca. Si la salida está tapada por fuera, la secadora se calienta aunque el ducto esté limpio por dentro.",
          "Deje espacio libre alrededor de la salida y mírela de vez en cuando con la secadora prendida. Si no siente el aire o la aleta no se mueve, ese es el momento de llamar. Hay citas la misma semana cerca de usted en Miami Gardens, también sábados y domingos.",
        ],
      },
      {
        heading: "Ductos viejos de plástico o aluminio",
        body: [
          "En las casas de los sesenta y setenta la secadora muchas veces se puso años después, y algunas todavía tienen el ducto blanco de plástico o el de aluminio fino que se usaba entonces. El código pide ducto rígido de metal de 4 pulgadas, liso por dentro, y solo una manguera de transición corta y aprobada detrás de la secadora.",
          "Cambiar el plástico o el aluminio por metal rígido en un tramo corto de pared es un trabajo sencillo, con un precio dentro de los $200 a $600. La limpieza de ventila de secadora normal cuesta de $100 a $200, y medimos el flujo antes y después.",
        ],
      },
    ],
    faq: [
      {
        question: "My dryer vent hood is behind the bushes. Does that matter?",
        answer:
          "Yes. Plants and clippings over a low hood block the exhaust from outside, and the dryer runs hot even with a clean duct. Trim back a clear space around it and we will clear the hood when we clean.",
      },
      {
        question: "I still have the white plastic dryer duct. Should it be replaced?",
        answer:
          "Yes. The code calls for rigid metal duct with a smooth interior. On a short wall run in a converted carport, the swap is usually quick and falls within the $200 to $600 repair range.",
      },
      {
        question: "What happens during a cleaning visit?",
        answer:
          "We measure airflow at the outside hood, pull the dryer and check the transition hose, run a rotary brush and compressed air through the duct from both ends where possible, clear the hood and free the damper, then measure again.",
      },
    ],
    faqEs: [
      {
        question: "¿Qué precio tiene la limpieza de ventila de secadora en Miami Gardens?",
        answer:
          "De $100 a $200 en la mayoría de las casas. Cambiar un ducto viejo de plástico o poner una tapa nueva cuesta de $200 a $600, y le damos el precio antes de agendar.",
      },
      {
        question: "La salida de mi secadora está detrás de las matas. ¿Importa?",
        answer:
          "Sí. Las plantas y la grama cortada tapan la salida por fuera y la secadora se calienta aunque el ducto esté limpio. Deje un espacio libre alrededor y nosotros limpiamos la salida en la visita.",
      },
      {
        question: "Todavía tengo el ducto blanco de plástico. ¿Hay que cambiarlo?",
        answer:
          "Sí. El código pide ducto rígido de metal liso por dentro. En un tramo corto de pared el cambio suele ser rápido.",
      },
    ],
  },
  {
    slug: "pembroke-pines",
    name: "Pembroke Pines",
    county: "Broward County",
    region: "Broward County",
    nearby: ["miramar", "weston", "hollywood", "davie"],
    neighborhoods: ["Century Village", "Pembroke Lakes", "Pembroke Falls", "Silver Lakes", "Chapel Trail", "Towngate"],
    intro:
      "Most of Pembroke Pines went up as planned communities between the 1980s and the 2000s, moving west past I-75 to Silver Lakes and Chapel Trail. It also holds one of Broward's largest 55 plus condominium communities in Century Village, and a great many townhouses.",
    introEs:
      "Casi todo Pembroke Pines se construyó como comunidades planificadas entre los ochenta y los dos mil, avanzando al oeste de la I-75 hasta Silver Lakes y Chapel Trail. También tiene una de las comunidades de condominios para mayores de 55 más grandes de Broward, Century Village, y muchísimos townhouses.",
    common:
      "In the two storey houses west of I-75 the most common find is a long attic run from an upstairs laundry to a tile roof cap, packed with lint at every elbow.",
    commonEs:
      "En las casas de dos pisos al oeste de la I-75 lo más común es un ducto largo por el ático, desde la lavandería de arriba hasta la salida en el techo de tejas, con pelusa acumulada en cada codo.",
    depth: [
      {
        heading: "Upstairs laundries west of I-75",
        body: [
          "In Silver Lakes, Chapel Trail and Pembroke Falls, many builders put the laundry on the second floor next to the bedrooms. The vent then crosses the attic and exits through the tile roof, and with three or four elbows the run gets close to what the code allows: 35 feet, less 2.5 feet for each 45 degree bend and 5 feet for each 90, unless the dryer maker permits more.",
          "Long runs like that collect lint at every turn, and in a hot attic the damp lint packs hard. For an upstairs laundry we suggest cleaning every six to twelve months, and we show you the airflow numbers so the interval rests on something real.",
        ],
      },
      {
        heading: "Century Village and the 55 plus buildings",
        body: [
          "Century Village and the other adult communities are low rise condominium buildings where units with their own dryer usually vent a short distance to an outside wall. The duct is short, but the hood may be on a second or third floor wall that the owner cannot reach.",
          "Associations can have a whole building done in one visit, priced per unit. Residents who cannot move a heavy dryer do not need to: we pull it out, check the hose and push it back.",
        ],
      },
      {
        heading: "Townhouses and association rules",
        body: [
          "The townhouse communities around Pembroke Lakes and Towngate vent through a side wall or the roof depending on where the laundry closet sits. Many associations here control what can be mounted on the outside of a building, colour and style included.",
          "Cleaning the existing hood or cap needs no approval. If one has to be replaced on a visible wall, check with your association first and we will match what it requires. Cleaning is $100 to $200, and repair or replacement $200 to $600.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Lavandería arriba, ducto largo",
        body: [
          "En Silver Lakes, Chapel Trail y Pembroke Falls muchos constructores pusieron la lavandería en el segundo piso, junto a los cuartos. El ducto de la secadora cruza el ático y sale por el techo de tejas, y con tres o cuatro codos se acerca al límite del código: 35 pies, menos 2.5 por cada codo de 45 grados y 5 por cada codo de 90, salvo que el fabricante permita más.",
          "Un tramo así junta pelusa en cada curva, y con el calor del ático la pelusa húmeda se endurece. Para una lavandería en el segundo piso recomendamos limpiar cada seis a doce meses, y le dejamos las lecturas de flujo para que decida con datos.",
        ],
      },
      {
        heading: "Century Village y los edificios para mayores de 55",
        body: [
          "Century Village y las otras comunidades para adultos son edificios de condominios de pocos pisos, y cuando la unidad tiene su propia secadora la ventila suele ir corta hasta una pared exterior. El ducto es corto, pero la salida puede quedar en el segundo o tercer piso, donde el dueño no llega.",
          "La asociación puede hacer el edificio completo en una visita, con precio por unidad. Si usted no puede mover una secadora pesada, no se preocupe: la sacamos, revisamos la manguera y la volvemos a poner en su lugar.",
        ],
      },
      {
        heading: "Townhouses y reglas de la asociación",
        body: [
          "En los townhouses de Pembroke Lakes y Towngate la ventila sale por una pared lateral o por el techo, según dónde esté el clóset de lavar. Muchas asociaciones controlan lo que se pone en el exterior, hasta el color y el modelo de la tapa.",
          "Limpiar la tapa que ya tiene no necesita permiso. Si hay que cambiarla en una pared que se ve, consulte primero con la asociación. La limpieza de ventila de secadora cuesta de $100 a $200, y si busca este servicio cerca de usted en Pembroke Pines, hay citas la misma semana.",
        ],
      },
    ],
    faq: [
      {
        question: "My laundry room is upstairs. How often should the vent be cleaned?",
        answer:
          "Every six to twelve months. An upstairs laundry usually means a long attic run with several elbows, and those clog faster than a short wall vent. The first set of airflow readings shows where in that range your house falls.",
      },
      {
        question: "Can you clean every unit in our condo building?",
        answer:
          "Yes. We quote the building per unit and work through it in one visit or over consecutive days, and we tell the board which part of each run belongs to the owner and which to the association.",
      },
      {
        question: "Does my HOA need to approve a new dryer vent cap?",
        answer:
          "Cleaning the existing cap needs nothing. Replacing a cap or hood on a visible wall or roof may need association approval for style and colour, so check first and we will fit what they require.",
      },
    ],
    faqEs: [
      {
        question: "¿Cuál es el precio de la limpieza de ventila de secadora en Pembroke Pines?",
        answer:
          "De $100 a $200 en la mayoría de las casas, townhouses y condominios. Reparar o cambiar el ducto cuesta de $200 a $600, y los edificios se cotizan por unidad.",
      },
      {
        question: "Mi lavandería está en el segundo piso. ¿Cada cuánto se limpia?",
        answer:
          "Cada seis a doce meses. Un ducto que cruza el ático con varios codos se tapa más rápido que una ventila corta en la pared.",
      },
      {
        question: "¿Pueden limpiar todas las unidades de nuestro edificio?",
        answer:
          "Sí. Damos el precio por unidad, hacemos el edificio en una visita o en días seguidos, y le decimos a la junta qué parte de cada ducto es del dueño y cuál de la asociación.",
      },
    ],
  },
];
