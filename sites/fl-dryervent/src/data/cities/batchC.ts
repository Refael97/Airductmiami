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
      {
        heading: "West Hialeah and Westland: condos and townhouses",
        body: [
          "In West Hialeah, around Westland Mall and along West 49th Street, whole neighbourhoods are condo buildings and townhouses from the 1980s and 1990s. In the condos the laundry is a closet off the kitchen. In the townhouses it is often under the stairs or in a closet upstairs, and the dryer duct runs through a ceiling to an outside wall.",
          "In those buildings the hood is on the association's wall, often on the second or third floor above a parking area. Units change hands and tenants often, and a duct that has served three or four families has rarely been cleaned beyond the hose. Lint grows on the stucco under the hood, and a damper that stays open lets in lizards and the afternoon rain.",
          "The association decides about the outside wall and usually about who may work on it. Owners can still book their own unit: we clean from the closet and, where a ladder can reach it, from the hood. For a board that wants a whole building done, we price per unit and give each owner their own readings. Cleaning is $100 to $200 per unit.",
        ],
      },
      {
        heading: "Flat roof additions and the gooseneck pipe",
        body: [
          "Many Hialeah additions, the back room, the efficiency, the enclosed terrace, were built with a flat or nearly flat roof, and when the laundry moved into one, the dryer vent often went up through that roof. On a lot of them the termination is not a dryer cap at all but a length of pipe bent over like a gooseneck and sealed to the roof with tar.",
          "A gooseneck has no damper, so rain blows in and lizards and wasps move in. The tar around it cracks in the sun and water finds its way to the ceiling of the room below. On a flat roof, leaves and rainwater sit around the base of the pipe, and lint that drops out of the bend stays right there on the roof.",
          "The repair is a proper dryer roof cap with a damper, set on a flashing that a roofer can seal into the flat roof, with rigid duct below it. Where the room has a block wall facing outside, a wall exit is often the better answer and keeps the vent off the roof altogether. Either one is $200 to $600. If the cap is already right, cleaning the run is $100 to $200.",
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
      {
        heading: "West Hialeah y Westland: condominios y townhouses",
        body: [
          "En West Hialeah, alrededor de Westland Mall y por la West 49th Street, hay barrios enteros de edificios de condominio y townhouses de los ochenta y noventa. En los condominios la lavandería es un clóset junto a la cocina. En los townhouses muchas veces está debajo de la escalera o en un clóset arriba, y el ducto de secadora cruza un techo hasta una pared exterior.",
          "En esos edificios la tapa está en la pared de la asociación, muchas veces en el segundo o tercer piso, encima del parqueo. Las unidades cambian de dueño y de inquilino a menudo, y un ducto que ha servido a tres o cuatro familias casi nunca se ha limpiado más allá de la manguera. La pelusa se pega al estuco debajo de la tapa, y una aleta que se queda abierta deja entrar lagartijas y el aguacero de la tarde.",
          "La asociación decide sobre la pared de afuera y casi siempre sobre quién puede trabajar en ella. Usted igual puede pedir la limpieza de su unidad: limpiamos desde el clóset y, si la escalera alcanza, desde la tapa. Si la junta quiere el edificio completo, damos precio por unidad y cada dueño recibe sus medidas. La limpieza de ventila de secadora cuesta de $100 a $200 por unidad.",
        ],
      },
      {
        heading: "Ampliaciones con techo plano y el tubo de cuello de ganso",
        body: [
          "Muchas ampliaciones en Hialeah, el cuarto de atrás, la eficiencia, la terraza cerrada, se hicieron con techo plano o casi plano, y cuando la lavandería se mudó para allá, la ventila de la secadora muchas veces subió por ese techo. En bastantes casas la salida no es una tapa de secadora, sino un tubo doblado como cuello de ganso y pegado al techo con brea.",
          "El cuello de ganso no tiene aleta, así que entra la lluvia y se meten lagartijas y avispas. La brea alrededor se raja con el sol y el agua termina en el techo del cuarto de abajo. En un techo plano, las hojas y el agua se quedan alrededor del tubo, y la pelusa que cae de la curva se queda allí mismo, sobre el techo.",
          "La reparación es una tapa de techo para secadora con aleta, montada sobre una base que un techero pueda sellar al techo plano, con ducto rígido debajo. Si el cuarto tiene una pared de bloque que da afuera, muchas veces es mejor sacar la ventila por la pared y olvidarse del techo. Cualquiera de las dos tiene un precio de $200 a $600, y si la tapa ya está bien, la limpieza cuesta de $100 a $200. Estamos cerca de usted en todo Hialeah.",
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
      {
        heading: "Dadeland: towers by the Metrorail",
        body: [
          "Around Dadeland Mall and the Dadeland North and Dadeland South Metrorail stations, Kendall has added a cluster of apartment and condo towers over the last twenty years, with more still going up. Units have their own stacked washer and dryer in a closet, and the duct runs inside a ceiling bulkhead to a louver on the balcony wall or the facade.",
          "In a rental tower the duct belongs to the building, while the lint screen and the dryer are in the hands of whoever lives there, and the run between them is rarely checked between leases. Some buildings fit a fine screen behind the louver to keep birds out, and a screened louver several floors up clogs within months. The resident sees towels coming out damp and assumes the dryer is tired.",
          "For building management we work floor by floor, priced per unit, and the readings show which louvers are screened or blocked. A resident can book their own unit for $100 to $200, and we clear the louver from the balcony where it is within reach. Replacing a screened louver with one that has a proper damper is $200 to $600.",
        ],
      },
      {
        heading: "Storm panels and the dryer hood",
        body: [
          "Most Kendall houses have hurricane protection of some kind: aluminum panels that slot into tracks, accordion shutters, or impact windows added in the years since Andrew. On many of the older block homes the dryer hood sits low on a wall right beside a window or a sliding door, inside the area a panel covers.",
          "When the panels go up for a storm warning, the hood is sometimes boxed in behind one, and in a busy season they can stay up for days or weeks. The household keeps drying clothes through the clean up, with the exhaust trapped behind aluminum and nowhere to go but back down the duct. Panel tracks screwed into the wall over the years can also pinch a hood or stop its flap from opening fully.",
          "Before the season, check that your panels and tracks leave the hood clear, and if they do not, avoid running the dryer while they are up. Moving a hood a couple of feet along the block wall so it sits outside the panel area is a short job at $200 to $600. A cleaning after storm season, with airflow readings, is $100 to $200.",
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
      {
        heading: "Dadeland: torres junto al Metrorail",
        body: [
          "Alrededor de Dadeland Mall y de las estaciones Dadeland North y Dadeland South del Metrorail, Kendall ha sumado en los últimos veinte años un grupo de torres de apartamentos y condominios, y siguen construyendo. Cada unidad tiene lavadora y secadora apilada en un clóset, y el ducto de secadora va dentro de un cajón del techo hasta una rejilla en la pared del balcón o en la fachada.",
          "En una torre de alquiler el ducto es del edificio, mientras que el filtro y la secadora quedan en manos de quien vive allí, y casi nadie revisa lo que hay entre los dos cuando cambia el inquilino. Algunos edificios ponen una malla fina detrás de la rejilla para que no entren pájaros, y una rejilla con malla varios pisos arriba se tapa en pocos meses. El inquilino ve las toallas salir húmedas y piensa que la secadora está vieja.",
          "Para la administración trabajamos piso por piso, con precio por unidad, y las medidas muestran qué rejillas tienen malla o están tapadas. Un residente puede pedir la limpieza de ventila de secadora de su unidad por $100 a $200, y despejamos la rejilla desde el balcón cuando se alcanza. Cambiar una rejilla con malla por una con aleta cuesta de $200 a $600.",
        ],
      },
      {
        heading: "Paneles de huracán y la tapa de la secadora",
        body: [
          "Casi todas las casas de Kendall tienen alguna protección contra huracanes: paneles de aluminio que entran en rieles, persianas de acordeón, o ventanas de impacto puestas en los años después de Andrew. En muchas casas de bloque viejas la tapa de la secadora está baja en la pared, al lado de una ventana o de una puerta corrediza, justo donde va un panel.",
          "Cuando se ponen los paneles por un aviso de tormenta, a veces la tapa queda encerrada detrás, y en una temporada movida pueden quedarse puestos días o semanas. La familia sigue secando ropa mientras recoge, con el aire atrapado detrás del aluminio y sin más salida que regresar por el ducto. Los rieles atornillados a la pared con los años también pueden apretar una tapa o no dejar que la aleta abra completa.",
          "Antes de la temporada, fíjese que los paneles y los rieles dejen libre la tapa, y si no, no use la secadora mientras estén puestos. Mover la tapa un par de pies por la pared de bloque para que quede fuera del panel es un trabajo corto con un precio de $200 a $600. Una limpieza después de la temporada, con medidas de flujo de aire, cuesta de $100 a $200. Hay citas cerca de usted en todo Kendall.",
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
      {
        heading: "Doral Park and the older single family streets",
        body: [
          "Before the towers and the townhouse rows, Doral was a golf resort with a few neighbourhoods around it, and Doral Park dates from the 1980s. Its single family homes are mostly single storey block houses with tile or shingle roofs, the laundry in the garage or in a room off the kitchen.",
          "Those ducts are around forty years old and have been through several roof replacements and a few rounds of renovation. On roof runs the original cap has often been swapped by a roofer, and in the attic the duct may now be a mix of the original galvanized pipe and a length of foil added when the kitchen or the laundry was redone. Wall runs through the garage are simpler, but the hood has usually been knocked by a car or a mower at least once.",
          "We trace the whole run, clean from both ends and read airflow at the cap or hood. A sound run needs only cleaning, at $100 to $200. Where the attic section is mixed or a joint has separated, replacing it with rigid metal duct and sealed joints is $200 to $600, quoted before we start.",
        ],
      },
      {
        heading: "Owners abroad, tenants at home",
        body: [
          "A good share of Doral's condos and townhouses belong to owners who live somewhere else, in another part of Florida or in another country, and are rented through a local agent. The tenant handles the lint screen, the owner pays for repairs, and the dryer vent falls somewhere in between.",
          "The tenant is the one who sees the symptoms, and rarely knows the vent is a separate thing from the dryer. A clear arrangement helps everyone: the lease or the agent's notes say who books a vent cleaning and when, ideally between tenants, when the closet is empty and the run can be done without moving anyone's things.",
          "We work directly with agents and owners who are not in Miami. The agent or the tenant lets us in, the owner gets the price beforehand and the airflow readings afterwards, and the invoice goes to whoever is paying. Cleaning is $100 to $200 per unit, and repairing a crushed hose or a ceiling section is $200 to $600.",
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
      {
        heading: "Doral Park y las calles de casas más viejas",
        body: [
          "Antes de las torres y de las filas de townhouses, Doral era un club de golf con unos pocos barrios alrededor, y Doral Park es de los años ochenta. Sus casas de una familia son casi todas de bloque y de un piso, con techo de tejas o de shingle, y la lavandería en el garaje o en un cuarto junto a la cocina.",
          "Esos ductos tienen unos cuarenta años y han pasado por varios cambios de techo y alguna remodelación. En los que salen por el techo, muchas veces el techero cambió la tapa original, y en el ático el ducto de secadora puede ser una mezcla del tubo galvanizado de entonces y un pedazo de aluminio que se añadió al remodelar la cocina o la lavandería. Los que salen por la pared del garaje son más sencillos, pero la tapa casi siempre ha recibido algún golpe del carro o de la cortadora.",
          "Seguimos el tramo completo, limpiamos por los dos lados y medimos el aire en la salida. Si el ducto está sano, solo necesita limpieza, de $100 a $200. Si el tramo del ático está mezclado o una unión se separó, cambiarlo por ducto rígido con uniones selladas tiene un precio de $200 a $600, cotizado antes de empezar.",
        ],
      },
      {
        heading: "El dueño fuera, el inquilino en casa",
        body: [
          "Buena parte de los condominios y townhouses de Doral son de dueños que viven en otro lugar, en otra parte de la Florida o en otro país, y se alquilan con un agente local. El inquilino limpia el filtro, el dueño paga las reparaciones, y la ventila de secadora queda en el medio.",
          "El inquilino es quien ve las señales y casi nunca sabe que la ventila es algo aparte de la secadora. Ayuda dejar claro, en el contrato o en las notas del agente, quién pide la limpieza y cada cuánto, idealmente entre un inquilino y otro, cuando el clóset está vacío y se puede trabajar sin mover las cosas de nadie.",
          "Trabajamos directo con agentes y dueños que no están en Miami. El agente o el inquilino nos abre, el dueño recibe el precio antes y las medidas de flujo de aire después, y la factura va a quien paga. La limpieza cuesta de $100 a $200 por unidad, y arreglar una manguera aplastada o un tramo del techo, de $200 a $600. Si busca el servicio cerca de usted en Doral, hay citas en la semana.",
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
      {
        heading: "Renters, landlords and the air base",
        body: [
          "Homestead Air Reserve Base keeps service members and civilian staff moving through town, and many of them rent houses and townhomes in the newer subdivisions. Add the families who rent while they work in the nurseries and farms west of town, and a large share of Homestead homes change households every year or two.",
          "Each move leaves the dryer vent a little worse off. One tenant brings a dryer and pushes it tight to the wall, crushing the hose. The next takes the dryer and leaves the hose hanging. A third connects a new machine to the old, flattened hose. Nobody owns the job of cleaning the duct itself, and a landlord who lives elsewhere hears about it only as a complaint.",
          "The simplest fix is to make it part of the turnover. Between tenants, with the closet empty, we clean the run, fit a listed transition hose and record the airflow, which gives the landlord a record and the next tenant a dryer that works. Cleaning with the hose check is $100 to $200, and any repair beyond it is $200 to $600.",
        ],
      },
      {
        heading: "Keys Gate townhomes and condos",
        body: [
          "Keys Gate is a gated community built around a golf course, mostly in the 2000s, and alongside its single family homes it has large sections of townhomes and condos. In the two storey townhomes the laundry is usually upstairs, and the duct goes out through the outside wall at second floor height or up through the roof.",
          "A hood on the second floor of a townhome faces the full south Florida sun, and the cheap plastic ones builders favoured go chalky and brittle and lose their flaps. With the hood out of reach, owners rely on the association, and the association's landscaping and painting crews work around it without cleaning it. Lint builds on the wall below, often right over the front door.",
          "We need gate access, which you can arrange with the guardhouse when you book, and room for a ladder at the wall. We clean from the closet and from the hood, replace a broken hood with a metal one in the colour the association allows, and read airflow before and after. Cleaning is $100 to $200, and hood replacement is $200 to $600.",
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
      {
        heading: "Inquilinos, dueños y la base aérea",
        body: [
          "La base Homestead Air Reserve Base mantiene un ir y venir de militares y empleados civiles, y muchos alquilan casas y townhouses en las subdivisiones nuevas. Si se suman las familias que alquilan mientras trabajan en los viveros y sembrados del oeste, una buena parte de las casas de Homestead cambia de familia cada uno o dos años.",
          "Cada mudanza deja la ventila de secadora un poco peor. Un inquilino trae su secadora y la empuja contra la pared, y aplasta la manguera. El siguiente se lleva la secadora y deja la manguera colgando. Otro conecta una máquina nueva a esa manguera vieja y aplastada. Nadie se encarga de limpiar el ducto, y el dueño que vive lejos solo se entera cuando hay una queja.",
          "Lo más sencillo es hacerlo parte del cambio de inquilino. Con el clóset vacío, limpiamos el ducto de secadora, ponemos una manguera de transición aprobada y anotamos el flujo de aire, y así el dueño tiene un registro y el próximo inquilino una secadora que seca. La limpieza con la revisión de la manguera cuesta de $100 a $200, y cualquier reparación aparte, de $200 a $600.",
        ],
      },
      {
        heading: "Townhouses y condominios en Keys Gate",
        body: [
          "Keys Gate es una comunidad con garita construida alrededor de un campo de golf, casi toda en los dos mil, y además de casas de una familia tiene secciones grandes de townhouses y condominios. En los townhouses de dos pisos la lavandería suele estar arriba, y el ducto sale por la pared a la altura del segundo piso o sube por el techo.",
          "Una tapa en el segundo piso recibe todo el sol del sur de la Florida, y las de plástico barato que ponían los constructores se ponen blancuzcas y quebradizas y pierden la aleta. Como el dueño no la alcanza, depende de la asociación, y los jardineros y pintores trabajan alrededor sin limpiarla. La pelusa se acumula en la pared de abajo, muchas veces justo encima de la puerta de entrada.",
          "Necesitamos el pase en la garita, que usted puede dejar listo al pedir la cita, y espacio para la escalera en la pared. Limpiamos desde el clóset y desde la tapa, cambiamos una tapa rota por una de metal del color que permite la asociación, y medimos el aire antes y después. La limpieza tiene un precio de $100 a $200, y cambiar la tapa, de $200 a $600. Estamos cerca de usted en Homestead.",
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
      {
        heading: "Wall air conditioners next to the dryer hood",
        body: [
          "Plenty of the older houses in Carol City and Norland still cool a room or two with a window or through the wall air conditioner, often in a bedroom that was added on or in the converted carport where the laundry also lives. Because both need an outside wall, the dryer hood and the air conditioner often end up a few feet apart on the same side of the house.",
          "Then the air conditioner breathes the dryer's exhaust. Warm, damp, lint laden air leaves the hood and is pulled straight into the unit's intake, where the lint coats the filter and the coil, and the room it is meant to cool gets the humidity back. A unit that has to be cleaned every few weeks, or ices up in summer, is often sitting next to a dryer hood.",
          "If the hood is within a few feet of an air conditioner, moving it is usually a short job through the block wall, to a spot where the exhaust can clear the house. That costs $200 to $600. A cleaning on a run that already ends in a good spot is $100 to $200.",
        ],
      },
      {
        heading: "Andover and Lake Lucerne: the laundry moves indoors",
        body: [
          "In the later houses in Miami Gardens, many of them in Andover, Lake Lucerne and the streets built through the 1970s and 1980s, the laundry more often sits inside, in a closet off the kitchen or a hall between the garage and the bedrooms. With no outside wall at hand, the dryer duct goes up into the attic and across to the roof or a high wall.",
          "That is a longer and hotter run than the converted carport vents elsewhere in the city. In a Miami summer the attic gets far hotter than the house, lint dries hard in the bends, and a run with several elbows loses airflow a little faster every year. The cap sits on the roof where nobody sees it, often a plastic one that has cracked or a louvered vent that holds lint.",
          "We read airflow at the cap first, clean from the closet and from the roof, and read it again so you can see the change. Cleaning is $100 to $200. A cracked or louvered cap replaced with a proper dryer cap with a damper is $200 to $600, and a run that is simply too long can sometimes be shortened through a nearer wall.",
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
      {
        heading: "Aires de pared al lado de la tapa de la secadora",
        body: [
          "Muchas casas viejas de Carol City y Norland todavía enfrían uno o dos cuartos con un aire de ventana o de pared, muchas veces en un cuarto añadido o en el carport convertido donde también está la lavandería. Como los dos necesitan una pared exterior, la tapa de la secadora y el aire acondicionado terminan a pocos pies uno del otro, en el mismo lado de la casa.",
          "Entonces el aire acondicionado respira lo que bota la secadora. El aire caliente, húmedo y con pelusa sale por la tapa y entra directo por la toma del aparato, la pelusa cubre el filtro y el serpentín, y el cuarto que debería enfriarse recibe otra vez la humedad. Un aire que hay que limpiar cada pocas semanas, o que se congela en verano, muchas veces está al lado de la ventila de secadora.",
          "Si la tapa está a pocos pies de un aire acondicionado, moverla suele ser un trabajo corto por la pared de bloque, hasta un lugar donde el aire pueda alejarse de la casa, por un precio de $200 a $600. La limpieza de un ducto que ya sale en buen lugar cuesta de $100 a $200.",
        ],
      },
      {
        heading: "Andover y Lake Lucerne: la lavandería se mudó adentro",
        body: [
          "En las casas más nuevas de Miami Gardens, muchas en Andover, Lake Lucerne y las calles construidas en los setenta y ochenta, la lavandería suele estar adentro, en un clóset junto a la cocina o en el pasillo entre el garaje y los cuartos. Sin una pared exterior a mano, el ducto de secadora sube al ático y cruza hasta el techo o una pared alta.",
          "Ese tramo es más largo y más caliente que las ventilas de los carports convertidos en otras partes de la ciudad. En el verano de Miami el ático se pone mucho más caliente que la casa, la pelusa se endurece en las curvas, y un tramo con varios codos pierde un poco más de aire cada año. La tapa está en el techo donde nadie la ve, muchas veces de plástico rajado o una rejilla de persiana que atrapa la pelusa.",
          "Medimos el aire en la salida primero, limpiamos desde el clóset y desde el techo, y volvemos a medir para que usted vea el cambio. Limpiar la ventila de secadora le cuesta de $100 a $200. Cambiar una tapa rajada o de rejilla por una tapa de secadora con aleta cuesta de $200 a $600, y un tramo demasiado largo a veces se puede acortar por una pared más cercana. Estamos cerca de usted en Miami Gardens.",
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
      {
        heading: "The east end, where the city started",
        body: [
          "Pembroke Pines was incorporated in 1960, and its oldest streets sit east of Flamingo Road, with single storey block houses from the 1960s and 1970s. In most of them the laundry is in the garage or a utility room beside it, and the dryer vents a short way out through the side wall.",
          "The usual problem here is the hood itself. On many of these houses the original was a metal box with fixed louvers rather than a damper, and it has been painted along with the house every few years, until the louvers barely pass air and lint builds behind them. Where a flap hood was fitted later, a coat of paint across the hinge works like glue and holds the flap half shut.",
          "When we find a painted or louvered hood, we free it if it can be freed and replace it if it cannot, with a hood whose flap swings by its own weight, painted only on the frame. That is $200 to $600 when the hood is replaced. Cleaning a short wall run with a working hood is $100 to $200.",
        ],
      },
      {
        heading: "Century Village half the year",
        body: [
          "Many Century Village owners in Pembroke Pines live there through the winter and go north for the summer, and some rent the unit while they are away. A dryer that runs every day from November to April may then stand idle for months, or be used by someone who does not know how long the run is or where its hood sits.",
          "Before you leave for the summer, empty the lint screen, run the empty dryer for a minute and check from outside that the hood flap closes once it stops, and ask a neighbour to glance at the hood now and then. If the unit is rented, leave a note by the dryer about the lint screen, because summer tenants rarely know the hood is up on the outside wall.",
          "We can come in October or November, just before or just after you arrive, and the gate will need your name and ours ahead of the visit. Cleaning a Century Village unit costs $100 to $200. A hood on the outside wall that needs replacing goes to the association first, and once approved it is $200 to $600.",
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
      {
        heading: "El este, donde empezó la ciudad",
        body: [
          "Pembroke Pines se incorporó como ciudad en 1960, y sus calles más viejas quedan al este de Flamingo Road, con casas de bloque de un piso de los sesenta y setenta. En casi todas la lavandería está en el garaje o en un cuarto al lado, y la secadora sale por la pared lateral en un tramo corto.",
          "Aquí el problema casi siempre es la tapa. En muchas casas la original era una caja de metal con rejillas fijas, sin aleta, y se ha pintado junto con la casa cada pocos años, hasta que las rejillas casi no dejan pasar aire y la pelusa se acumula detrás. Donde después se puso una tapa con aleta, una capa de pintura sobre la bisagra funciona como pegamento y deja la aleta medio cerrada.",
          "Cuando encontramos una tapa pintada o de rejilla, la soltamos si se puede y si no la cambiamos por una con aleta que cierra por su propio peso, pintada solo en el marco. Cambiar la tapa tiene un precio de $200 a $600. La limpieza de ventila de secadora en un tramo corto con una tapa que funciona cuesta de $100 a $200.",
        ],
      },
      {
        heading: "Medio año en Century Village",
        body: [
          "Muchos dueños de Century Village en Pembroke Pines viven allí el invierno y se van al norte en el verano, y algunos alquilan la unidad mientras están fuera. Una secadora que trabaja todos los días de noviembre a abril puede quedarse meses parada, o en manos de alguien que no sabe lo largo que es el ducto de secadora ni dónde queda la tapa.",
          "Antes de irse en el verano, vacíe el filtro, prenda la secadora vacía un minuto y mire desde afuera que la aleta cierre cuando se apaga, y pídale a un vecino que le eche un ojo a la tapa de vez en cuando. Si alquila la unidad, deje una nota junto a la secadora sobre el filtro, porque el inquilino de verano casi nunca sabe que la tapa está arriba en la pared de afuera.",
          "Podemos ir en octubre o noviembre, justo antes o justo después de que usted llegue, y en la entrada tienen que tener su nombre y el nuestro antes de la visita. La limpieza en una unidad de Century Village cuesta de $100 a $200. Si hay que cambiar la tapa de la pared exterior, primero lo aprueba la asociación, y después el precio es de $200 a $600. Estamos cerca de usted en todo Pembroke Pines.",
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
