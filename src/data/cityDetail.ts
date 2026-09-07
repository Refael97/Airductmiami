/**
 * Neighborhood-level and dryer-vent-specific detail per city.
 *
 * Why this file exists, separately from cities.ts:
 *
 * The Search Console export of 26 August 2026 showed the city pages pulling
 * 10,727 impressions and 48 clicks. Deerfield Beach alone carried roughly
 * 1,100 impressions a month at average positions between 26 and 51. A page
 * sitting at position 45 on a query it is nominally built for is not being
 * beaten on links, it is being beaten on relevance: Google has looked at the
 * page and decided a competitor answers the query better.
 *
 * Two gaps explained it.
 *
 * First, the city pages named the city and the county and nothing smaller.
 * Every competitor does that. Naming the actual neighborhoods, the housing
 * stock and the failure mode particular to that place is the part that is
 * expensive to copy, and it is what a searcher in The Cove is looking for.
 *
 * Second, and larger: the dryer vent queries. "dryer vent cleaning deerfield"
 * at 318 impressions and position 48.3, "deerfield dryer vent cleaning" at 170
 * and position 50.8, "dryer vent cleaning deerfield beach" at 69 and 32.6.
 * That is roughly 557 impressions a month for one service in one city, and the
 * only page we offered was an air duct cleaning page that mentions dryer vents
 * in passing. Position 48 is what Google does with a near miss. The fix is a
 * page that is actually about the thing being searched for.
 *
 * The `dryerVent` block is therefore deliberately not filled in for every
 * city. A city page per service per city, generated from a template, is a
 * doorway pattern and Google treats it as one. A page is built here only
 * where there is either query evidence or enough genuinely distinct local
 * substance to justify it, and the copy below is written per city, not
 * interpolated from a pattern.
 */

export interface CityDetail {
  /** Real neighborhoods, districts or communities. Used on both page types. */
  neighborhoods: string[];
  /**
   * Extra hand written depth for the air duct city page, added only for the
   * cities carrying real impression volume. Bradenton was pulling 658
   * impressions a month at position 19.1 with zero clicks and a 960 word
   * page; the Spanish equivalent of the same city page ranked fifteen places
   * higher on a longer page. Depth is written per city because the thing
   * being fixed is thinness, and a shared paragraph repeated across ten
   * pages does not fix thinness.
   */
  depth?: { heading: string; body: string[] }[];
  /**
   * The same, in Spanish, for /es/areas-de-servicio/{slug}.
   *
   * Added 30 August 2026 after a week where four of the five pages that
   * received a click were Spanish, and /es/areas-de-servicio/kissimmee/ took
   * 2 clicks from 5 impressions. The Spanish pages are the ones converting
   * and they were the ones running 300 to 470 words shorter than their
   * English equivalents, because the depth written for the English city
   * pages was never given a Spanish counterpart.
   *
   * Written for the language, not translated. A reader in Hialeah and a
   * reader in Bradenton do not recognise the same examples.
   */
  depthEs?: { heading: string; body: string[] }[];
  /**
   * Present only for cities that get a dedicated dryer vent page at
   * /service-areas/{slug}/dryer-vent-cleaning/. Absence means no page.
   */
  dryerVent?: {
    /** Two or three sentences on what dryer venting is actually like here. */
    local: string[];
    /** The single failure mode that comes up most in this city. */
    common: string;
  };
  /**
   * Present only for cities that get a dedicated repair page at
   * /service-areas/{slug}/air-duct-repair/. Roughly 450 impressions of city
   * plus repair queries were landing on nothing: "ductwork repair bradenton"
   * at 113 impressions and position 32.1, "duct services and repair in
   * deerfield beach" at 79, Winter Park at 55. Same rule as dryerVent, a page
   * exists only where there is evidence and something specific to say.
   */
  ductRepair?: {
    local: string[];
    common: string;
  };
}

export const cityDetail: Record<string, CityDetail> = {
  // ---- Miami-Dade ----
  miami: {
    depthEs: [
      {
        heading: 'Un condominio y una casa no son el mismo trabajo',
        body: [
          'Miami es la ciudad más vertical del estado, y el sistema de un edificio no se parece en nada al de una casa. En una torre de Brickell o Edgewater la manejadora está en un clóset, los tramos de ducto son cortos, y el aire de renovación viene del edificio y no de sus propias paredes. Todo el sistema se limpia bien en unas horas, y en un espacio pequeño y sellado la mejora se nota de inmediato.',
          'En Coral Way, Coconut Grove o las partes viejas de La Pequeña Habana hay ático, tramos largos, y una casa que respira. Ahí las fugas sí importan, porque una fuga en el ático mete aire a 130 grados con todo lo que trae.',
        ],
      },
      {
        heading: 'Sal, humedad, y por qué el serpentín en Miami cría moho',
        body: [
          'Miami pasa buena parte del año con humedad arriba del 70 por ciento, y el serpentín de un sistema que corre casi todo el día está mojado de forma prácticamente continua. Mojado, oscuro, en el paso del aire, y con polvo orgánico llegando sin parar: esa es la descripción de las condiciones ideales de crecimiento, y es la razón por la que el olor a humedad al encender el aire es la queja número uno que recibimos en esta ciudad.',
          'El olor importa no porque sea peligroso en sí, sino porque es una señal confiable. Significa que hay crecimiento biológico sobre una superficie mojada dentro de su sistema. Limpiar el serpentín y la bandeja lo quita. Bajar la humedad interior de 60 por ciento es lo que evita que regrese.',
        ],
      },
    ],
    depth: [
      {
        heading: 'Condo towers and single family homes are not the same job',
        body: [
          'Miami\'s building stock is more vertical than anywhere else in the state, and a high rise duct system has almost nothing in common with a house. In a Brickell or Edgewater tower, the air handler is in a closet, the duct runs are short, and the fresh air comes from a building system rather than from outside your own walls. The whole system can be cleaned properly in a few hours, and the improvement in a small sealed space is usually obvious immediately.',
          'In Coral Way, Coconut Grove or the older parts of Little Havana, you have an attic, long runs, and a house that breathes. Those are the systems where leaks matter, because a leak in the attic is pulling in air at 130 degrees and whatever is floating in it.',
        ],
      },
      {
        heading: 'Salt, humidity and why Miami coils grow mold',
        body: [
          'Miami holds humidity above 70 percent for a large part of the year, and the evaporator coil in a system that runs most of the day is wet more or less continuously. Wet, dark, in the airflow, with a steady supply of organic dust arriving: that is a description of ideal growing conditions, and it is why the musty smell when the air conditioning kicks on is the single most common complaint we get in this city.',
          'The smell is worth taking seriously not because it is dangerous in itself but because it is a reliable signal. It means there is biological growth on a wet surface in your system. Cleaning the coil and the drain pan removes it. Getting the indoor humidity below 60 percent is what stops it coming back.',
        ],
      },
    ],
    neighborhoods: ['Brickell', 'Coconut Grove', 'Little Havana', 'Coral Way', 'Edgewater', 'Wynwood'],
    dryerVent: {
      local: [
        'Miami splits into two completely different dryer vent problems, and which one you have depends on whether you live in a tower or a house. In a Brickell or Edgewater high rise, your dryer does not vent out a wall behind the machine. It pushes lint into a horizontal run that joins a shared riser serving every unit stacked above and below you, often with a booster fan somewhere in the middle. When that riser loads up, every apartment on the stack starts drying slowly at once, and no amount of cleaning the lint screen changes it.',
        'In the single family neighborhoods, Coral Way and Coconut Grove and the older parts of Little Havana, the vent usually leaves the laundry room, turns up into the attic, and terminates through the roof. Those runs sit in an attic that reaches 130 degrees on a July afternoon, and the lint that settles in them bakes onto the duct wall rather than blowing clear.',
      ],
      common: 'Roof terminations with the damper flap corroded open, which lets humid outside air back down the duct at night and turns loose lint into a packed crust.',
    },
  },
  'miami-beach': {
    dryerVent: {
      local: [
        'Almost every dryer on Miami Beach is in a building rather than a house, which means the run behind your machine joins a riser serving the units above and below you. When that riser loads up, every apartment on the stack starts drying slowly at once, and cleaning your own six feet changes nothing.',
        'The oceanfront position makes the terminations worse than anywhere inland. Salt corrodes roof stacks and damper flaps quickly, and a damper stuck open lets humid Atlantic air sit in the duct all night.',
      ],
      common: 'A crushed transition hose in a laundry closet built to the minimum dimension, combined with a riser the association has not touched in years.',
    },
    neighborhoods: ['South Beach', 'Mid-Beach', 'North Beach', 'Sunset Islands', 'Venetian Islands'],
  },
  hialeah: {
    depthEs: [
      {
        heading: 'La lavandería quedó en la pared equivocada',
        body: [
          'Buena parte de Hialeah se construyó entre finales de los sesenta y principios de los ochenta, y en esas casas la conexión de lavandería quedó muchas veces en una pared interior en lugar de una exterior. Esa sola decisión convierte lo que debería ser un tramo de cuatro pies en uno de veinte o treinta con dos o tres codos, y cada codo es un lugar donde la pelusa se detiene.',
          'En los dúplex y edificios pequeños hay un segundo problema. Donde dos clósets de lavandería comparten pared, las dos salidas frecuentemente se unen antes de salir, así que la obstrucción del vecino se vuelve la suya.',
        ],
      },
      {
        heading: 'Equipo nuevo sobre ductos viejos',
        body: [
          'Es el patrón que más vemos en Hialeah. La manejadora se ha cambiado dos o tres veces, y el ducto al que se conecta es el original. El equipo falla de forma visible y el ducto no, así que la distribución envejece en silencio hasta pasar el punto donde el equipo puede compensar.',
          'El resultado son casas donde un equipo moderno y bien dimensionado rinde mal, y al dueño le han dicho tres veces que el problema es la unidad. Frecuentemente no lo es, y vale la pena medir el flujo en las rejillas antes de gastar en equipo otra vez.',
        ],
      },
    ],
    neighborhoods: ['West Hialeah', 'Palm Springs North', 'Amelia', 'Hialeah Acres'],
    dryerVent: {
      local: [
        'A large share of Hialeah housing was built between the late sixties and the early eighties, and the laundry hookups in those homes were often placed on an interior wall rather than an exterior one. That single decision turns what should be a four foot vent run into twenty or thirty feet with two or three elbows, and every elbow is a place lint stops moving.',
        'The multi family stock adds a second issue. Where a duplex or a small apartment building shares a wall between two laundry closets, the two vents frequently join before they exit, so one neighbour\'s blockage becomes yours.',
      ],
      common: 'Long interior runs with flexible foil duct instead of rigid metal, which sags between supports and collects lint in the low spots.',
    },
  },
  'coral-gables': {
    neighborhoods: ['Coral Gables Riviera', 'Old Cutler', 'Ponce Davis', 'Coral Bay', 'Golden Gate'],
  },
  kendall: {
    depthEs: [
      {
        heading: 'En Kendall el aire acondicionado trabaja más que en casi todo Miami-Dade',
        body: [
          'Kendall está tierra adentro, lo que suena a menos humedad que la costa. En la práctica significa menos brisa marina, y menos brisa significa que el aire corre más horas para llegar a la misma temperatura. En The Hammocks y Country Walk es normal que un sistema trabaje quince o dieciséis horas al día en agosto.',
          'Un sistema que corre así mueve un volumen enorme de aire por el ducto, y todo lo que ese aire trae se va depositando en el camino. Ese es el mecanismo que la gente no ve: el ducto no se ensucia porque le caiga tierra, se ensucia porque su sistema empuja miles de pies cúbicos por minuto contra sus superficies.',
        ],
      },
      {
        heading: 'El segundo piso y los townhouses',
        body: [
          'Gran parte de Kendall al oeste del turnpike son townhouses de dos pisos, y dos pisos traen un problema que una casa de una planta no tiene. Arriba y abajo los sirve la misma manejadora, normalmente por un tronco vertical dentro de un ducto de registro, y el aire caliente sube sin importar lo que diga el termostato.',
          'Balancear eso es una pregunta de ductos antes que de equipo. Si el segundo piso está siempre tres o cuatro grados más caliente, lo primero que hay que revisar es si las salidas de arriba están realmente abiertas, si el retorno de arriba alcanza, y si el tronco vertical se separó dentro del registro donde nadie lo ve.',
        ],
      },
    ],
    depth: [
      {
        heading: 'Kendall runs its air conditioning harder than almost anywhere in Miami-Dade',
        body: [
          'Kendall is inland, which sounds like it should mean less humidity than the coast. In practice it means less sea breeze, and less sea breeze means the air conditioning runs longer to reach the same temperature. Systems in The Hammocks and Country Walk routinely run fifteen or sixteen hours a day through August.',
          'A system running that much moves an enormous volume of air through the ductwork, and everything that air is carrying, construction dust from a neighbour\'s renovation, pollen, pet dander, drywall dust from your own ceiling, gets deposited along the way. This is the mechanism people miss: the duct does not get dirty because dirt falls into it. It gets dirty because your system is pulling several thousand cubic feet of air a minute past its surfaces.',
        ],
      },
      {
        heading: 'The townhouse and second floor question',
        body: [
          'Much of Kendall west of the turnpike is two storey townhouse construction, and two storeys introduce a problem single storey homes do not have. The upstairs is served by the same air handler as the downstairs, usually through a trunk that runs vertically inside a chase, and hot air rises regardless of what the thermostat wants.',
          'Balancing that is a duct question before it is an equipment question. If your upstairs is consistently three or four degrees warmer than downstairs, the first things worth checking are whether the upstairs supply runs are actually open, whether the return upstairs is adequate, and whether the vertical trunk has come apart inside the chase where nobody can see it. We check all three as part of the job rather than treating the system as a set of ducts to be brushed.',
        ],
      },
    ],
    neighborhoods: ['Kendall West', 'The Hammocks', 'Sunset', 'Country Walk', 'Devon-Aire', 'Three Lakes'],
    dryerVent: {
      local: [
        'Kendall is built almost entirely of eighties and nineties single family homes and townhouse communities, and in both the laundry sits in the garage or in an interior utility closet with the vent routed up into the attic. Those attic runs are the ones that matter. Kendall attics hold heat late into the evening, the duct expands and contracts every day, and joints that were taped rather than clamped work themselves loose.',
        'In the townhouse communities around The Hammocks and Country Walk, the second floor laundry is common, which puts the vent run at its longest and gives lint the most opportunity to settle before it reaches open air.',
      ],
      common: 'A disconnected joint inside the attic, blowing hot lint into the insulation instead of outside. Homeowners notice it as a laundry room that never cools down.',
    },
  },
  homestead: {
    depthEs: [
      {
        heading: 'El polvo aquí no es el polvo de una ciudad',
        body: [
          'Homestead está rodeado de campo agrícola, y eso cambia lo que entra al sistema. El polvo fino de los campos y el polen de temporada llegan en volúmenes que una casa en Miami no ve, y se acumulan alrededor de las rejillas mucho más rápido.',
          'Las familias que se mudan aquí desde el norte del condado casi siempre lo notan en los primeros meses: el mismo hábito de limpieza y el doble de polvo sobre las superficies. No es imaginación, y no se resuelve limpiando más seguido adentro de la casa.',
        ],
      },
      {
        heading: 'Casas nuevas, ductos con escombro de obra',
        body: [
          'Keys Gate, Malibu Bay y Waterstone son desarrollos relativamente nuevos, y en construcción nueva el problema no es el desgaste. Es el polvo de drywall, el aserrín y la fibra de aislamiento que entraron al ducto antes de que la casa se entregara.',
          'La primera temporada de aire acondicionado reparte todo eso por la casa. Es la razón por la que una familia que se acaba de mudar a una casa nueva empieza con alergias que no tenía, y la razón por la que una limpieza en casa nueva sí vale la pena aunque el sistema tenga dos años.',
        ],
      },
    ],
    neighborhoods: ['Keys Gate', 'Silver Palm', 'Malibu Bay', 'Waterstone'],
  },
  pinecrest: {
    ductRepair: {
      local: [
        'Pinecrest houses sit on large lots and are wide rather than tall, which produces the run nobody wants: long, horizontal, in the attic, with the furthest bedroom sixty feet or more from the air handler.',
        'At that length the losses compound. The run leaks, the insulation is working against a 75 degree gradient the whole way, and the air arriving at the far register is nothing like the air that left. Homeowners read that as an undersized system and replace equipment that was fine.',
      ],
      common: 'Long horizontal attic runs sagging between joists, where every low point is both a restriction and a place condensation collects.',
    },
    neighborhoods: ['Pinecrest Village', 'Suniland', 'Evergreen', 'High Pines'],
  },
  'north-miami': {
    neighborhoods: ['Keystone Point', 'Sans Souci Estates', 'Griffing Park', 'Arch Creek'],
  },
  aventura: {
    neighborhoods: ['Williams Island', 'Aventura Lakes', 'Turnberry', 'Hidden Bay'],
    dryerVent: {
      local: [
        'Aventura is a condominium city, which means almost every dryer here vents into a shared riser rather than straight outside. Those risers run the full height of the building and are cleaned, when they are cleaned at all, by the association rather than by the unit owner. The in unit portion, the run from behind your machine to the wall connection, is yours, and it is where most of the accessible lint sits.',
        'The salt air matters more here than inland. Terminations and dampers on the ocean side corrode quickly, and a damper that no longer closes lets humid air sit in the duct overnight.',
      ],
      common: 'A crushed transition hose behind the machine, because the dryer has been pushed back tight against the wall to fit the closet.',
    },
  },

  // ---- Broward ----
  'fort-lauderdale': {
    depth: [
      {
        heading: 'Waterfront property, canal air and what it does indoors',
        body: [
          'Fort Lauderdale has more linear feet of canal frontage than almost any city in the country, and living on the water changes the air your system is working with. Humidity next to a canal is measurably higher than a few blocks inland, and it stays higher overnight when the air cools and the relative humidity climbs.',
          'For a duct system this means the hours when the air conditioning is off are the hours that matter. A system that has been running all day has cold duct surfaces, and when it shuts off and warm damp air reaches those surfaces, they sweat. Rio Vista, the Las Olas Isles and the Victoria Park canal blocks all show this pattern more than the inland neighborhoods.',
        ],
      },
      {
        heading: 'Older houses, newer systems, and the gap between them',
        body: [
          'Much of Victoria Park, Sailboat Bend and Poinsettia Heights predates central air conditioning, which means every system in those houses has been fitted after the fact and often replaced several times since. Each replacement tends to address the equipment and leave the distribution alone, so it is entirely normal here to find a two year old air handler connected to duct installed in the sixties.',
          'That combination is where we find the largest gains. The equipment is fine. The duct is leaking, restricted, or both, and the homeowner has been told repeatedly that the system is simply old.',
        ],
      },
    ],
    neighborhoods: ['Victoria Park', 'Coral Ridge', 'Rio Vista', 'Las Olas Isles', 'Sailboat Bend', 'Poinsettia Heights'],
    dryerVent: {
      local: [
        'Fort Lauderdale has an unusually wide spread of housing ages for one city, and the dryer vent tells you which era you are in. The mid century houses in Victoria Park and Poinsettia Heights were often built before a laundry room was standard, so the washer and dryer went into a converted porch or a carport bay later, and the vent was run wherever it could go rather than where it should.',
        'The waterfront properties in Rio Vista and along the Las Olas Isles bring the opposite issue. Newer construction, correct rigid duct, but a roof or soffit termination that faces salt air year round and a damper that stops sealing within a few seasons.',
      ],
      common: 'Retrofitted vent runs from a converted laundry space, with more elbows than the manufacturer allows for the length.',
    },
  },
  hollywood: {
    depthEs: [
      {
        heading: 'Tres épocas de vivienda, tres sistemas distintos',
        body: [
          'Hollywood cubre más historia de construcción que la mayoría de las ciudades del sur de Florida. Los bungalows de Hollywood Lakes de los años veinte y treinta se construyeron antes de que existiera el aire acondicionado central, así que todo sistema en ellos es una adaptación posterior, con el ducto pasando por donde había espacio y no por donde debía.',
          'Las casas de los cincuenta y sesenta en Driftwood y Boulevard Heights sí se construyeron con ductos, casi siempre en el ático, y buena parte de ese ducto original sigue ahí. Un ducto flexible de sesenta años tiene la cubierta quebradiza, y las cubiertas quebradizas se rompen.',
          'Las torres al este de Federal son un tercer caso: manejadoras en clóset, tramos cortos, y un edificio donde el aire de afuera solo entra por el equipo.',
        ],
      },
      {
        heading: 'Lo que la sal le hace a un sistema en Hollywood',
        body: [
          'Todo lo que está a una milla de la playa recibe sal, y la sal no es solo un problema de corrosión para el condensador de afuera. El aire que entra por cualquier hueco en el retorno la trae, y se deposita sobre el serpentín junto con el polvo. Un serpentín con una capa de sal y polvo transfiere calor peor y se queda mojado más tiempo, que es exactamente la condición que cría moho.',
          'Esa es la razón honesta por la que un sistema en la costa necesita atención más seguido que uno tierra adentro. Un condominio frente al mar en Hollywood con limpieza cada tres años no está siendo sobre atendido. El mismo apartamento en Weston probablemente sí.',
        ],
      },
      {
        heading: 'Vivir en edificio: dónde termina su sistema y dónde empieza el del condominio',
        body: [
          'Buena parte de Hollywood vive en edificio y no en casa, desde las torres frente al Broadwalk hasta los condominios de Hillcrest y las asociaciones de dos y tres pisos cerca de Hollywood Boulevard. En casi todos, la manejadora está dentro del apartamento, en un clóset con puerta de rejilla en el pasillo, y el filtro queda en una rejilla de retorno en el techo a pocos pies. Los tramos de ducto son cortos, a veces veinte pies en total, y el sistema completo se limpia bien en una mañana.',
          'Lo que conviene saber antes de llamar a cualquiera es hasta dónde llega lo suyo. La manejadora, los ductos dentro de sus paredes y su techo, la rejilla del filtro y la línea de drenaje son suyos. Lo compartido, un tiro vertical que cruza varios pisos o un equipo en la azotea que sirve las áreas comunes, es de la asociación. Le decimos de qué lado de esa línea está su problema antes de cotizar, incluso cuando la respuesta es que le toca a la administración pagarlo y no a usted.',
          'El clóset explica además una queja que oímos casi a diario en estos edificios. La manejadora jala el aire de retorno por una rejilla de pasillo que suele quedar a pocos pies de la cocina, así que la grasa de cocinar llega al filtro y después al serpentín mucho más rápido que en una casa. Un serpentín con grasa retiene el polvo en lugar de soltarlo, y cuando esa capa ya está ahí, cambiar el filtro no resuelve nada.',
        ],
      },
      {
        heading: 'La casa que se quedó cerrada todo el verano',
        body: [
          'Hollywood tiene mucha gente que pasa aquí solo parte del año, y una casa cerrada de mayo a noviembre se comporta distinto a una donde vive alguien. La instrucción de siempre para quien la cuida es dejar el termostato en 80 grados. En 80 el equipo casi no enciende, y un equipo que casi no enciende no le quita agua al aire, así que la casa puede pasar cuatro meses a 80 grados con 70 por ciento de humedad adentro.',
          'Ese es el número que importa. El moho no necesita agua encharcada, necesita una superficie por encima de 60 por ciento de humedad relativa y algo orgánico de qué vivir, y el serpentín, la bandeja de drenaje y el interior de un ducto flexible se lo dan completo. Quien regresa en noviembre lo cuenta casi con las mismas palabras: la casa está tal como la dejó y huele a encierro los primeros diez minutos después de encender el aire.',
          'Lo que evita que se repita el año siguiente no es una limpieza más fuerte sino el ajuste. Un termostato con control de humedad, o un deshumidificador pequeño conectado a un drenaje, mantiene la casa entre 55 y 60 por ciento por una fracción de lo que cuesta dejar el aire en 74 todo el verano. Limpiamos lo que ya creció y le decimos en qué dejarlo, para no volver a hacer el mismo trabajo el próximo noviembre.',
        ],
      },
    ],
    ductRepair: {
      local: [
        'Hollywood covers three eras of housing and each fails differently. The Hollywood Lakes bungalows from the twenties and thirties have entirely retrofitted systems routed through whatever space existed. The Driftwood and Boulevard Heights ranch homes have original attic ducting from the fifties and sixties, now well past its service life. The beachside condominiums have short runs in a sealed envelope.',
        'Within a mile of the ocean, add salt to all three. Salt reaches the indoor coil through any gap in the return path, and a coil carrying salt and dust stays wet longer than a clean one.',
      ],
      common: 'Sixty year old flexible duct with a jacket that has gone brittle and split, which is a replacement rather than a repair.',
    },
    depth: [
      {
        heading: 'Three eras of Hollywood housing, three different duct systems',
        body: [
          'Hollywood covers more housing history than most South Florida cities, and it shows up directly in what we find. The Hollywood Lakes bungalows from the twenties and thirties were built before central air existed at all, so every duct system in them is a retrofit, routed through whatever space was available rather than designed into the structure. Those are the houses where a duct run turns up inside a closet or a dropped soffit.',
          'The fifties and sixties ranch homes in Driftwood and Boulevard Heights were built with ducting, usually in the attic, and much of that original ducting is still there. Sixty year old flex duct has a jacket that has gone brittle, and brittle jackets crack.',
          'The condominium towers east of Federal are a third case again: air handlers in closets, short runs, and a building envelope that means outside air only reaches the system through the equipment rather than through the structure.',
        ],
      },
      {
        heading: 'What salt air does to a Hollywood system',
        body: [
          'Everything within a mile or so of the beach is exposed to salt, and salt is not just a corrosion problem for the condenser outside. Air drawn in through any gap in the return path carries it, and it settles on the evaporator coil along with everything else. A coil with a salt and dust layer on it transfers heat worse and stays wet longer, which is the exact condition that grows mold.',
          'This is the honest reason coastal systems need attention more often than inland ones, and it is worth understanding rather than being told your system is dangerous. A Hollywood beachside condo on a three year cleaning cycle is not being over serviced. The same unit in Weston probably would be.',
        ],
      },
      {
        heading: 'Living in a building, and where your system actually stops',
        body: [
          'A large share of Hollywood lives in a building rather than a house, from the towers along the Broadwalk to the Hillcrest blocks and the two and three storey associations off Hollywood Boulevard. In almost all of them the air handler sits in a closet inside the unit, usually behind a louvered door off the hallway, with the filter behind a return grille in the ceiling a few feet away. The supply runs are short, sometimes twenty feet from end to end, and the whole system can be cleaned properly in a morning.',
          'The thing worth knowing before you call anybody is where your system stops. The air handler, the duct inside your walls and ceiling, the filter grille and the drain line are yours. Anything shared, a riser passing through several floors or a rooftop unit serving the common areas, belongs to the association. We tell you which side of that line your problem is on before we quote, including the times when the answer is that your board should be paying for it rather than you.',
          'The closet position also explains a complaint we hear constantly in these buildings. A closet air handler pulls its return through a hallway grille that is usually a few feet from the kitchen, so cooking grease reaches the filter and then the coil far faster than it would in a house with the return in a bedroom hall. A coil with a greasy film holds dust instead of shedding it, and once that layer is there a filter change does nothing.',
        ],
      },
      {
        heading: 'The house that was closed all summer',
        body: [
          'Hollywood has a large part year population, and a house or an apartment shut up from May to November behaves nothing like one somebody lives in. The usual instruction to whoever checks on the place is to leave the thermostat at 80 degrees. At 80 the system barely runs, and a system that barely runs removes very little water from the air, so the house can sit for four months at 80 degrees with the indoor humidity at 70 percent.',
          'That is the number that matters. Mold does not need standing water, it needs a surface held above roughly 60 percent relative humidity and something organic to feed on, and the coil, the drain pan and the inside of a flex duct supply all of it. Owners coming back in November describe the same thing almost word for word: the place looks exactly as they left it and it smells like a basement for the first ten minutes after the air conditioning starts.',
          'What stops it happening again is not a harder cleaning, it is the setting. A thermostat with a humidity control, or a small dehumidifier plumbed to a drain, holds the house between 55 and 60 percent for a fraction of what it costs to run the air conditioning at 74 all summer. We clean out what has grown and then tell you what to leave it on, so we are not back doing the same job next November.',
        ],
      },
    ],
    neighborhoods: ['Hollywood Lakes', 'Emerald Hills', 'Hollywood Hills', 'Beverly Hills', 'Boulevard Heights', 'Driftwood', 'Hollywood Beach', 'Hillcrest', 'Liberia'],
    dryerVent: {
      local: [
        'Hollywood runs from beachfront condominium towers to fifties bungalows in Hollywood Lakes to seventies ranch homes in Driftwood and Boulevard Heights, and the vent problem changes with each. The bungalows almost always have a short run straight through an exterior wall, which is the best case, except that the exterior hood is usually the original one and the flap has long since stopped moving.',
        'East of Federal, the older condominium buildings have shared risers with booster fans, and a booster fan that has failed is invisible from inside the apartment. The only symptom is that everything takes two cycles.',
      ],
      common: 'A painted over exterior vent hood. Repainting the house sealed the flap shut, and the dryer has been fighting it ever since.',
    },
  },
  'pembroke-pines': {
    depthEs: [
      {
        heading: 'Los tramos largos son el problema que define a Pembroke Pines',
        body: [
          'Pembroke Pines creció hacia el oeste en comunidades planeadas grandes, y las casas que vinieron con ese crecimiento son anchas. Chapel Trail, Pembroke Falls y Silver Lakes están llenas de casas donde la manejadora está en la cochera o en un cuarto de servicio en un extremo, y la recámara más lejana queda a sesenta o setenta pies de distancia.',
          'Cada pie de ese recorrido es ducto tendido en un ático que en julio llega a 130 grados. El aire que sale de la manejadora a 55 grados no llega a 55 grados al otro extremo, y esa diferencia es la razón por la que tantas casas de aquí tienen una recámara que siempre está más caliente que el resto. El dueño casi siempre supone que el equipo quedó chico. Con frecuencia el equipo está bien y lo que pasa es que el enfriamiento se pierde en el camino.',
          'Le vamos a decir con claridad si su equipo de verdad quedó chico, porque una limpieza no arregla eso. Lo que sí arregla es la parte de la pérdida que viene de la restricción y de las uniones que se abrieron en un tramo así de largo.',
        ],
      },
      {
        heading: 'Cómo saber si es el ducto o es el equipo',
        body: [
          'Antes de gastar en equipo hay tres cosas que se revisan y que cuestan poco. La primera es si las salidas de la parte lejana de la casa realmente están entregando aire, y con cuánta fuerza comparadas con las que están cerca de la manejadora. Una diferencia grande entre la primera salida y la última no es normal y no es culpa del termostato.',
          'La segunda es el retorno. En estas casas anchas el retorno suele ser uno solo y central, y si está restringido todo el sistema trabaja con más presión y la salida más lejana es la primera en rendirse. La tercera es el ático mismo: buscar uniones abiertas, aislamiento caído y tramos flexibles que se doblaron sobre una viga y quedaron estrangulados durante veinte años.',
          'Si las tres salen bien y aun así la casa no enfría, entonces sí conviene hablar del equipo. En ese orden se gasta menos y se acierta más seguido.',
        ],
      },
      {
        heading: 'El lado de los condominios y Century Village',
        body: [
          'Century Village en Pembroke Pines tiene las mismas características que su comunidad hermana en Deerfield: sistemas compactos, tramos cortos, paredes compartidas y edificios con la edad suficiente para que el ducto original esté al final de su vida útil y no a la mitad.',
          'En un apartamento así el sistema completo se limpia bien en una mañana, y el resultado normalmente se nota más que en una casa grande por una razón simple: hay menos sistema para diluir la mejora. En un espacio chico y cerrado, un serpentín limpio y un retorno que sella se sienten el mismo día.',
        ],
      },
    ],
    depth: [
      {
        heading: 'Long duct runs are the defining Pembroke Pines problem',
        body: [
          'Pembroke Pines expanded west in large planned communities, and the floor plans that came with that expansion are wide. Chapel Trail, Pembroke Falls and Silver Lakes are full of houses where the air handler sits in a garage or a utility room at one end and the furthest bedroom is sixty or seventy feet away.',
          'Every foot of that run is duct sitting in an attic that reaches 130 degrees in July. Air leaving the handler at 55 degrees does not arrive at 55 degrees at the far end, and the gap between the two is why so many houses here have one bedroom that is always warmer than the rest. Homeowners usually assume the system is undersized. Frequently the system is fine and the duct is losing the cooling on the way.',
          'Duct cleaning does not fix an undersized system, and we will tell you if that is what you have. What it does fix is the part of the loss caused by restriction and by leaks that have opened up in a run that long.',
        ],
      },
      {
        heading: 'Century Village and the condominium side',
        body: [
          'The Century Village community in Pembroke Pines has the same characteristics as its Deerfield counterpart: compact systems, short runs, shared walls and buildings old enough that the original ductwork is at the end of its service life rather than the middle. In a unit like that the whole system can be cleaned properly in a morning, and the result is usually more noticeable than in a large house simply because there is less of it to dilute the improvement.',
        ],
      },
    ],
    neighborhoods: ['Chapel Trail', 'Pembroke Falls', 'Silver Lakes', 'Towngate', 'Century Village'],
    dryerVent: {
      local: [
        'Pembroke Pines grew west in large planned communities, and in Chapel Trail, Pembroke Falls and Silver Lakes the standard build puts the laundry in an interior room with the vent taken up through the attic and out the roof. That is a long run by design, frequently over twenty five feet once the elbows are counted, and it is at the limit of what a domestic dryer can push before lint starts dropping out of the airstream.',
        'Century Village adds the condominium version of the same problem, with stacked units feeding a common riser and an in unit connection that is rarely inspected.',
      ],
      common: 'Long attic runs that exceed the manufacturer\'s maximum equivalent length, so the vent clogs again within a year of being cleaned unless the routing is corrected.',
    },
  },
  miramar: {
    neighborhoods: ['Historic Miramar', 'Riviera Isles', 'Vizcaya', 'Silver Lakes', 'Monarch Lakes'],
    dryerVent: {
      local: [
        'Miramar is two cities in one for this purpose. East of University, Historic Miramar is fifties and sixties construction with short exterior wall vents and original hoods. West of the turnpike, Riviera Isles and Monarch Lakes are two thousands construction with two storey homes, upstairs laundry rooms, and vent runs that travel the full depth of the house before reaching the roof.',
        'The newer homes look like the safer case and often are not. A twenty foot vertical run holds lint in a way a four foot horizontal one never does.',
      ],
      common: 'Upstairs laundry rooms venting through a long vertical run, where lint falls back down the duct every time the dryer stops.',
    },
  },
  'pompano-beach': {
    depthEs: [
      {
        heading: 'Los condominios de Pompano y la línea que divide lo suyo de lo de la asociación',
        body: [
          'Pompano Beach tiene una de las concentraciones más altas de edificios de condominio de mediana altura de todo Broward. Cypress Bend y Palm Aire suman entre las dos miles de apartamentos, y en un edificio así su ducto no termina en su pared: se une a un tramo vertical que sirve a las unidades de arriba y de abajo.',
          'Ahí la asociación se encarga del tramo compartido y usted del suyo, y la frontera entre los dos es justamente donde los problemas se quedan sin dueño durante años, porque cada lado supone que el otro lo está atendiendo. Cuando ese tramo vertical se carga, todos los apartamentos de la columna empiezan a fallar al mismo tiempo, y limpiar los seis pies que le tocan a usted no cambia nada.',
          'Le decimos de qué lado de la línea está su problema antes de cotizarle, incluso cuando la respuesta es que le conviene llevarlo a su junta. Preferimos eso a cobrarle una limpieza que usted va a volver a necesitar en dos meses.',
        ],
      },
      {
        heading: 'Old Pompano y Cresthaven: casas chicas con aire acondicionado puesto después',
        body: [
          'Los sectores de casas solas, Old Pompano y Cresthaven, son construcción más vieja y más compacta, de los años cincuenta y sesenta, levantada antes de que el aire central fuera lo normal. En esas casas el sistema se adaptó después, y el ducto se metió por donde cupo: plafones bajados, clósets y un ático de poca altura.',
          'Un ducto adaptado tiene más uniones y más transiciones que uno proyectado desde el principio, y cada una de ellas es un punto que se puede abrir con el tiempo. Cuando se abre en el ático, el sistema empieza a jalar aire a 120 grados y todo lo que ese aire trae, y su equipo trabaja de más para compensar una fuga que usted no puede ver.',
          'La señal desde adentro es la de siempre: un cuarto que no alcanza a los demás, polvo que regresa a los pocos días de haber limpiado, y un recibo de luz que subió sin que cambiara nada más en la casa.',
        ],
      },
      {
        heading: 'La sal, y por qué en Pompano el serpentín se ensucia más rápido',
        body: [
          'Todo lo que está cerca de la playa y del Intracoastal, incluido Harbor Village, recibe sal de forma constante. La sal no solo corroe el equipo de afuera. Entra con el aire por cualquier abertura del retorno y se deposita sobre el serpentín junto con el polvo.',
          'Un serpentín con esa capa transfiere calor peor y se mantiene mojado más tiempo después de cada ciclo, y mojado durante horas es exactamente la condición que necesita el crecimiento biológico. Esa es la razón honesta por la que un sistema en la costa necesita atención más seguido que uno tierra adentro, y no es una recomendación de venta: es el mismo motivo por el que las aletas de las salidas se traban abiertas aquí y no en Coral Springs.',
          'Si al encender el aire hay olor a humedad los primeros minutos, esa es la señal más confiable de que hay algo creciendo sobre una superficie mojada dentro de su sistema. Limpiar el serpentín y la bandeja lo quita. Sellar el retorno y mantener la humedad de la casa abajo de 60 por ciento es lo que evita que regrese.',
        ],
      },
    ],
    neighborhoods: ['Old Pompano', 'Cypress Bend', 'Palm Aire', 'Harbor Village', 'Cresthaven'],
    dryerVent: {
      local: [
        'Pompano Beach has one of the densest concentrations of mid rise condominium buildings in Broward, and Cypress Bend and Palm Aire between them account for thousands of units on shared vent risers. In a building like that, the association handles the riser and the owner handles everything from the machine to the wall, and the boundary between the two is where problems go unowned for years.',
        'The single family pockets in Old Pompano and Cresthaven are older, smaller houses where the vent usually goes straight out the back wall, which is the easiest configuration to service and the one most often ignored because it looks fine from the outside.',
      ],
      common: 'Lint packed in the last three feet before the exterior hood, where the duct cools and the moisture in the exhaust condenses.',
    },
  },
  plantation: {
    depth: [
      {
        heading: 'Three building waves, and equipment newer than the duct in all of them',
        body: [
          'Plantation was built in roughly three passes and you can read them off a map. The eastern side, Plantation Park and the streets around Sunset Park, is late fifties and sixties. The middle of the city, Jacaranda and the neighborhoods either side of Pine Island Road, is seventies and eighties. The western edge toward the Sawgrass and the outer parts of the Acres finished in the nineties. That is close to forty years of housing, and the ductwork spans the same forty years.',
          'What all three waves have in common is the sequence that follows. The air handler gets replaced, usually twice over that span, and the duct it connects to is never touched, because equipment fails in a way you notice and ductwork does not. It is entirely normal in this city to find a three year old system connected to distribution that went in when the house was framed.',
          'That matters more than it sounds. A modern variable speed air handler moves air differently from the one the duct was sized around, so a new system on old duct produces noise, uneven rooms and static pressure problems that read as an equipment fault and are not. Before anyone sells you a third system, it is worth measuring what is actually coming out of the registers.',
        ],
      },
      {
        heading: 'One central return, and why the far bedroom loses',
        body: [
          'Houses of this era in Plantation were usually built with a single large return grille in a hallway, sized for the equipment of the day and never revisited. Every cubic foot of air the system moves has to come back through that one opening, which makes it the narrowest point in the whole loop.',
          'When that return is restricted, and there are several ordinary ways for it to be restricted, the entire system runs at higher static pressure and the longest supply run is the one that gives up first. That is the bedroom at the far end of the hall, the room the owner has been told is simply hard to cool. The common causes are a filter far denser than the system was designed for, a grille that has been painted over more than once, and a return duct behind the grille that is kinked or partly collapsed where it turns.',
          'Bedroom doors are the other half of it. If the return is in the hallway and the bedroom doors are shut at night, air that goes into those rooms has no path back, and the rooms pressurise slightly and stop taking supply. Undercut doors or a transfer grille fix that, and it costs nothing compared with a system replacement.',
        ],
      },
      {
        heading: 'Plantation Acres: large lots, well irrigation and what comes in from outside',
        body: [
          'The Acres, west of Flamingo Road, is a different kind of Broward neighborhood: lots of an acre and more, plenty of them on private wells for irrigation, open ground, unpaved edges and in places livestock. The houses are wide, low and set well back, and the systems in them are working against conditions the rest of the city does not have.',
          'Well water in west Broward carries iron and dissolved minerals. Sprinklers throw it as a fine spray, the water evaporates, and what is left is the rust coloured film you see on driveways, walls and window screens out here. That same film settles on the outdoor coil and on everything near the intake side of the system, and it reaches the indoor coil through any gap on the return path.',
          'Add fine soil dust from open lots and unpaved driveways and the load on a filter in the Acres is genuinely heavier than the load on an identical filter three miles east in Jacaranda. If a one inch filter in your house is grey inside of a month, that is not a defective filter, that is the actual air your system is being asked to handle.',
        ],
      },
      {
        heading: 'The tree canopy the city is named for',
        body: [
          'Plantation carries one of the heaviest mature canopies in Broward. Live oak, mahogany and black olive over the older streets in Plantation Park, Sunset Park and Hawaiian Gardens shade the roofs, which genuinely helps the attic and the duct running through it. Everything else the canopy does is a maintenance problem.',
          'Roof terminations and vent caps collect leaf litter and seed debris from above, so a duct can be completely clear while its exit is blocked, and the symptom looks identical to a blocked duct from inside the house. Oak pollen through February and March is the other half: it comes in on shoes, through doors held open, and through any leak on the return, and it ends up on the coil and in the first ten or fifteen feet of supply duct where the air slows down.',
          'The practical version of this is simple. If the allergy season inside your house tracks the one outside instead of being milder than it, the return path and the coil are where to look, not the filter aisle at the hardware store.',
        ],
      },
    ],
    depthEs: [
      {
        heading: 'Tres etapas de construcción, y en todas el equipo es más nuevo que el ducto',
        body: [
          'Plantation se construyó en tres etapas y se notan en el mapa. El lado este, Plantation Park y las calles alrededor de Sunset Park, es de finales de los cincuenta y de los sesenta. El centro de la ciudad, Jacaranda y los barrios a ambos lados de Pine Island Road, es de los setenta y ochenta. El borde oeste, hacia el Sawgrass y las partes exteriores de los Acres, se terminó en los noventa. Son casi cuarenta años de vivienda, y el ducto abarca esos mismos cuarenta años.',
          'Lo que tienen en común las tres etapas es lo que vino después. La manejadora se cambió, normalmente dos veces en ese periodo, y el ducto al que se conecta nunca se tocó, porque el equipo falla de una forma que usted nota y el ducto no. Es completamente normal en esta ciudad encontrar un sistema de tres años conectado a una distribución que se instaló cuando se levantó la casa.',
          'Eso pesa más de lo que parece. Una manejadora moderna de velocidad variable mueve el aire distinto a aquella para la que se dimensionó el ducto, así que un equipo nuevo sobre ducto viejo da ruido, cuartos disparejos y problemas de presión que parecen falla del equipo y no lo son. Antes de que alguien le venda un tercer sistema, vale la pena medir qué está saliendo de verdad por las rejillas.',
        ],
      },
      {
        heading: 'Un solo retorno central, y por qué pierde la recámara del fondo',
        body: [
          'Las casas de esa época en Plantation se construyeron casi siempre con una sola rejilla de retorno grande en el pasillo, dimensionada para el equipo de entonces y nunca revisada desde entonces. Todo el aire que mueve el sistema tiene que regresar por esa única abertura, lo que la convierte en el punto más estrecho de todo el circuito.',
          'Cuando ese retorno está restringido, y hay varias maneras normales de que lo esté, el sistema entero trabaja con más presión y el tramo de suministro más largo es el primero que se rinde. Esa es la recámara del fondo del pasillo, el cuarto que a usted le han dicho que simplemente es difícil de enfriar. Las causas más comunes son un filtro mucho más denso de lo que el sistema aguanta, una rejilla pintada dos o tres veces, y un ducto de retorno doblado o medio aplastado detrás de la rejilla.',
          'Las puertas de las recámaras son la otra mitad del asunto. Si el retorno está en el pasillo y las puertas se cierran de noche, el aire que entra a esos cuartos no tiene por dónde regresar, los cuartos se presurizan un poco y dejan de recibir. Recortar la parte de abajo de la puerta o poner una rejilla de transferencia lo resuelve, y cuesta una fracción de lo que cuesta cambiar un equipo.',
        ],
      },
      {
        heading: 'Plantation Acres: terrenos grandes, riego de pozo y lo que entra de afuera',
        body: [
          'Los Acres, al oeste de Flamingo Road, son otro tipo de barrio de Broward: terrenos de un acre o más, muchos con pozo propio para el riego, terreno abierto, orillas sin pavimentar y en algunas partes animales. Las casas son anchas, bajas y quedan retiradas de la calle, y sus sistemas trabajan contra condiciones que el resto de la ciudad no tiene.',
          'El agua de pozo en el oeste de Broward trae hierro y minerales disueltos. Los aspersores la avientan en gotas finas, el agua se evapora y lo que queda es esa película color óxido que usted ve en las entradas de carro, en las paredes y en los mosquiteros. Esa misma película se asienta sobre el condensador de afuera y sobre todo lo que está cerca de la toma del sistema, y llega al serpentín de adentro por cualquier abertura del retorno.',
          'Súmele el polvo fino de los lotes abiertos y de los caminos sin pavimentar y la carga sobre un filtro en los Acres es de verdad mayor que sobre un filtro idéntico tres millas al este, en Jacaranda. Si el filtro de una pulgada de su casa está gris al mes, no es un filtro defectuoso, es el aire que su sistema está moviendo.',
        ],
      },
      {
        heading: 'El arbolado que le da el nombre a la ciudad',
        body: [
          'Plantation tiene uno de los arbolados maduros más densos de Broward. Los robles, la caoba y el olivo negro sobre las calles viejas de Plantation Park, Sunset Park y Hawaiian Gardens dan sombra al techo, lo cual sí ayuda al ático y al ducto que pasa por ahí. Todo lo demás que hace el arbolado es trabajo de mantenimiento.',
          'Las salidas del techo y sus tapas juntan hojas y semillas desde arriba, así que el ducto puede estar perfectamente limpio y la salida bloqueada, y desde adentro de la casa el síntoma se ve igual que un ducto tapado. El polen de roble de febrero y marzo es la otra mitad: entra en los zapatos, por las puertas y por cualquier fuga del retorno, y termina en el serpentín y en los primeros diez o quince pies de ducto, donde el aire baja de velocidad.',
          'La versión práctica de esto es sencilla. Si su temporada de alergias adentro de la casa sigue el mismo calendario que la de afuera en lugar de ser más leve, lo que hay que revisar es el retorno y el serpentín, no el pasillo de filtros de la ferretería.',
        ],
      },
    ],
    neighborhoods: ['Plantation Acres', 'Jacaranda', 'Plantation Isles', 'Central Park', 'Hawaiian Gardens', 'Sunset Park', 'Plantation Gardens', 'Lauderdale West'],
    dryerVent: {
      local: [
        'Plantation is largely seventies and eighties single family construction on generous lots, and the houses are wide rather than tall. A wide single storey house with the laundry near the middle produces exactly the vent run you do not want: long, horizontal, in the attic, with a roof termination at the far end.',
        'Plantation Acres adds larger properties still, and on the bigger houses the run can pass thirty feet. At that length the dryer is no longer moving air fast enough to carry lint, and the duct fills from the far end backwards.',
      ],
      common: 'Horizontal attic runs with a slight sag between joists, which turns each low point into a lint trap.',
    },
  },
  davie: {
    dryerVent: {
      local: [
        'Davie has more large lot and equestrian property than anywhere else in Broward, and the houses on them are wide single storey builds. A wide house with the laundry near the middle produces the worst case run: long, horizontal, in the attic, terminating at the far end through the roof.',
        'The rural setting adds something the coastal cities do not have. Gable and roof terminations out here collect nesting far more often, and a wasp or bird nest in a termination blocks the flap completely.',
      ],
      common: 'Nesting in gable and roof terminations, which is the most common single cause of a dryer that worked last week and does not this week.',
    },
    neighborhoods: ['Forest Ridge', 'Ivanhoe', 'Long Lake Estates', 'Shenandoah', 'Orange Park'],
  },
  sunrise: {
    depth: [
      {
        heading: 'Sunrise has some of the oldest housing in west Broward',
        body: [
          'Sunrise Lakes and Sunrise Golf Village were built in the seventies, and a great deal of that housing is low rise condominium and villa construction that has never had a significant HVAC overhaul. The air handlers have been replaced, usually more than once, but the ductwork they connect to is frequently original.',
          'That matters because a new, more efficient air handler moves air differently than the one the duct was sized for. Put a modern variable speed system on fifty year old duct and you often get noise, uneven cooling and pressure problems that look like an equipment fault and are not. We see homeowners who have had the equipment replaced twice chasing a problem that was in the duct the whole time.',
        ],
      },
      {
        heading: 'The furnace question, in a place that barely has winters',
        body: [
          'Sunrise generates a steady trickle of searches for furnace cleaning, which is worth addressing plainly because Florida confuses the terminology. Very few homes here have a gas furnace. What most people mean is the air handler, the indoor half of the system, which contains the blower, the evaporator coil and in many cases an electric heat strip for the handful of cold nights a year.',
          'That heat strip is the part worth thinking about. It sits in the airstream, it is almost never used, and dust settles on it for eleven months of the year. The first genuinely cold night in January is when that dust burns off, which is the source of the burning smell that generates a wave of calls every winter. Cleaning the air handler removes it. It is a real service, it is just not a furnace.',
        ],
      },
      {
        heading: 'Sunrise Lakes and the 55 plus buildings',
        body: [
          'Sunrise Lakes is one of the largest 55 plus communities in Broward, several thousand units spread across four phases of low rise buildings put up in the seventies and eighties, and the systems inside them are all built the same way. The air handler sits in a closet in the apartment, usually off the hallway, the filter is behind a return grille a few feet from it, and the supply runs are short enough that the entire system is twenty or thirty feet of duct.',
          'Short runs are why a cleaning in one of these units is a morning of work rather than a full day, and they are also why the result is easy to feel. There is less system for the improvement to get lost in. What we find most often is a return grille that has never come off the ceiling, a coil with a felted layer of dust on the entering side, and a drain pan that has held water long enough to have a rim on it.',
          'The ownership line matters here more than anywhere else we work. In these associations the equipment inside your unit is yours and anything shared is the association\'s, and the fastest way to spend money on nothing is to clean your own twenty feet when the problem sits in a shared path. We say which one it is before we quote, and we would rather send you to your board than sell you a job that will not fix what you called about.',
        ],
      },
      {
        heading: 'Welleby, Sawgrass and the attic half of the city',
        body: [
          'The single family half of Sunrise, from Welleby and Springtree out to the newer streets near Sawgrass, is eighties and nineties slab construction with the air handler in a garage or a utility room and flexible duct run across the attic. That attic is most of the story. It passes 120 degrees on a summer afternoon while the duct inside it carries air at 55 degrees, and the gap between those two numbers drives nearly everything that goes wrong up there.',
          'Flex duct sags between the trusses as the outer jacket ages, and every sag is a low point where the air slows down and dust drops out of it. Long runs to the back bedrooms lose cooling on the way, which is why the room at the end of the house reads three or four degrees warmer than the thermostat. The usual conclusion is that the system is undersized, and it gets replaced. Often the equipment was fine and the loss was in the last thirty feet of duct.',
          'Afternoon storm season supplies the other half. A June or July storm puts outdoor humidity back at saturation in twenty minutes, and a house with leaks in the attic portion of its duct pulls that air in through the leaks rather than through the filter. It is the reason a system can be correctly sized, properly serviced, and still leave the house feeling damp through August.',
        ],
      },
    ],
    depthEs: [
      {
        heading: 'Sunrise tiene de la vivienda más vieja del oeste de Broward',
        body: [
          'Sunrise Lakes y Sunrise Golf Village se construyeron en los años setenta, y buena parte de eso son condominios bajos y villas que nunca han tenido un cambio serio del sistema de aire. Las manejadoras sí se han cambiado, casi siempre más de una vez, pero el ducto al que se conectan muchas veces sigue siendo el original.',
          'Eso importa porque una manejadora nueva y más eficiente mueve el aire de otra manera que aquella para la que se dimensionó el ducto. Al poner un equipo moderno de velocidad variable sobre ducto de hace cincuenta años aparecen ruido, cuartos disparejos y problemas de presión que parecen falla del equipo y no lo son. Vemos gente que ya cambió el equipo dos veces persiguiendo un problema que siempre estuvo en el ducto.',
          'Por eso, antes de vender nada, revisamos si el ducto puede con el equipo que usted ya tiene. Si la respuesta es que no, se lo decimos, aunque eso signifique que la limpieza sola no le va a resolver el problema.',
        ],
      },
      {
        heading: 'La calefacción, en un lugar donde casi no hay invierno',
        body: [
          'En Sunrise nos preguntan seguido por la limpieza de la calefacción, y vale la pena aclararlo porque en Florida el vocabulario confunde. Casi ninguna casa de aquí tiene un horno de gas. Lo que la mayoría llama calefacción es la manejadora, la mitad interior del sistema, donde están el ventilador, el serpentín y, en muchos casos, unas resistencias eléctricas para las pocas noches frías del año.',
          'Esas resistencias son la parte que sí conviene pensar. Están en el paso del aire, casi nunca se usan, y el polvo se les acumula encima once meses seguidos. La primera noche de verdad fría de enero es cuando ese polvo se quema, y de ahí viene el olor a quemado que nos genera una tanda de llamadas cada invierno. Limpiar la manejadora lo quita. Es un servicio real, solo que no es un horno.',
        ],
      },
      {
        heading: 'Sunrise Lakes y los edificios de 55 años y más',
        body: [
          'Sunrise Lakes es una de las comunidades de 55 años y más grandes de Broward, con miles de apartamentos repartidos en cuatro fases de edificios bajos levantados en los años setenta y ochenta, y todos los sistemas están armados igual. La manejadora va en un clóset dentro del apartamento, casi siempre en el pasillo, el filtro queda detrás de una rejilla de retorno a pocos pies, y los tramos de suministro son tan cortos que todo el sistema son veinte o treinta pies de ducto.',
          'Por eso una limpieza aquí es cosa de una mañana y no de un día, y por eso también se siente el cambio: hay menos sistema donde se diluya la mejora. Lo que más encontramos es una rejilla de retorno que nunca se ha bajado del techo, un serpentín con una capa de polvo apelmazada del lado por donde entra el aire, y una bandeja de drenaje que lleva tanto tiempo con agua que ya tiene marca.',
          'Aquí la línea de responsabilidad importa más que en cualquier otro lado. En estas asociaciones lo que está dentro de su apartamento es suyo y lo compartido es de la asociación, y la manera más rápida de gastar dinero en nada es limpiar sus veinte pies cuando el problema está en un tramo común. Le decimos cuál de los dos es antes de cotizar, y preferimos mandarlo con la administración que venderle un trabajo que no le va a resolver nada.',
        ],
      },
      {
        heading: 'Welleby, Sawgrass y el lado de la ciudad que tiene ático',
        body: [
          'La mitad de casas individuales de Sunrise, desde Welleby y Springtree hasta las calles más nuevas cerca de Sawgrass, es construcción sobre losa de los años ochenta y noventa, con la manejadora en el garaje o en un cuarto de servicio y ducto flexible tendido por el ático. Ese ático es casi toda la historia. Pasa de 120 grados una tarde de verano mientras el ducto que va adentro lleva aire a 55 grados, y esa diferencia provoca casi todo lo que falla allá arriba.',
          'El ducto flexible se descuelga entre las vigas conforme envejece la cubierta, y cada tramo colgado es un punto bajo donde el aire se frena y se deposita el polvo. Los tramos largos hacia los cuartos del fondo pierden frío en el camino, y por eso el cuarto del extremo marca tres o cuatro grados más que el termostato. La conclusión de siempre es que el equipo quedó chico, y se cambia. Muchas veces el equipo estaba bien y lo que se perdía estaba en los últimos treinta pies de ducto.',
          'La temporada de tormentas de la tarde pone la otra mitad. Una tormenta de junio o julio deja la humedad de afuera al tope en veinte minutos, y una casa con fugas en la parte del ducto que va por el ático jala ese aire por las fugas y no por el filtro. Es la razón por la que un sistema bien dimensionado y bien atendido puede dejarle la casa sintiéndose húmeda en agosto.',
        ],
      },
    ],
    neighborhoods: ['Sunrise Lakes', 'Welleby', 'Sawgrass', 'Bonaventure', 'Sunrise Golf Village', 'Springtree', 'Sunset Strip'],
    dryerVent: {
      local: [
        'Sunrise Lakes and Sunrise Golf Village are among the oldest housing in west Broward, and a great deal of it is low rise condominium and villa construction from the seventies. In those buildings the dryer vent frequently runs through the attic space above a shared corridor before terminating at a gable end, and that shared attic is not anybody\'s obvious responsibility.',
        'Welleby and Bonaventure are newer single family and townhouse stock with conventional roof terminations, but the same Florida attic heat applies: the duct sits in an unconditioned space that runs well above a hundred degrees for six months of the year.',
      ],
      common: 'Bird and wasp nests built into gable end terminations, which block the flap completely and are the most common single cause of a dryer that suddenly stopped drying.',
    },
  },
  'coral-springs': {
    neighborhoods: ['Eagle Trace', 'Ramblewood', 'Coral Creek', 'Turtle Run', 'Westchester'],
    dryerVent: {
      local: [
        'Coral Springs was built fast and to a pattern, which is useful here because it means the same vent configuration repeats across whole neighborhoods. In Ramblewood and Westchester the laundry sits off the garage with a short run to a side wall. In the later communities, Eagle Trace and Turtle Run, the two storey plans put the laundry upstairs and vent through the roof.',
        'The city\'s tree canopy is heavier than most of Broward, and roof terminations under mature trees collect leaf debris on top of the lint problem.',
      ],
      common: 'Roof vent caps obstructed from above by leaf litter and seed debris, so the duct is clear but the exit is not.',
    },
  },
  'coconut-creek': {
    neighborhoods: ['Winston Park', 'Wynmoor', 'Regency Lakes', 'Cocobay', 'Township'],
  },
  'deerfield-beach': {
    depthEs: [
      {
        heading: 'En Deerfield hay dos ciudades, y su sistema depende de en cuál vive usted',
        body: [
          'Deerfield Beach se parte en dos de forma muy limpia, y de qué lado esté su casa define casi todo lo que su sistema necesita. Al oeste de la interestatal, Century Village y las comunidades de alrededor son edificios bajos de condominio de los años setenta, con manejadoras compactas dentro de un clóset, tramos de ducto cortos y vecinos por los cuatro costados. Esos sistemas son lo bastante chicos como para que un solo retorno bloqueado afecte todo el apartamento en cuestión de días, y el clóset de la manejadora muchas veces comparte espacio con el calentador de agua, que le suma calor y humedad a un lugar que no debería tener ninguno de los dos.',
          'Al este de Federal Highway, The Cove y el lado de Hillsboro son casas solas, lo bastante cerca del Atlántico como para que la sal alcance el techo, el equipo de afuera y cualquier pieza con una aleta metálica. La sal hace dos cosas. Corroe los componentes de afuera, y lo más importante, significa que el aire que entra por cualquier fuga viene cargado de sal además de humedad.',
          'Deer Creek, Independence Bay y Crystal Lake son la parte más nueva de la ciudad, casas de dos pisos y townhouses donde el problema no es la sal sino la distancia: tramos largos por un ático que en julio pasa de 120 grados.',
        ],
      },
      {
        heading: 'El patrón de Century Village: le limpian el serpentín y el problema vuelve',
        body: [
          'Vemos la misma secuencia en los apartamentos de Century Village con la frecuencia suficiente para llamarla un patrón. Al apartamento nunca le han tocado los ductos desde que se construyó. El dueño nota que el aire ya no alcanza y llama al servicio. El técnico encuentra el serpentín restringido, lo limpia, y el sistema trabaja mejor durante una temporada.',
          'La razón por la que regresa es que el serpentín no era el origen. Un serpentín se ensucia porque le está llegando aire sin filtrar, y en estos edificios eso casi siempre es porque el ducto de retorno o la caja del filtro no sella. Si le limpian el serpentín y dejan el retorno como estaba, lo que compró fueron ocho meses.',
          'Vale la pena saberlo antes de contratar a nadie, porque cambia lo que usted debe pedir. Una limpieza de ductos que no incluye revisar el camino del retorno y el sello del filtro no está resolviendo el problema que usted tiene en realidad.',
        ],
      },
      {
        heading: 'Qué preguntar antes de contratar',
        body: [
          'Tres preguntas separan un trabajo real de uno rápido, y las tres se contestan por teléfono. Si el equipo pone todo el sistema bajo succión, o solo pasa un cepillo por las rejillas. Si el serpentín y la bandeja de condensado entran en el trabajo o se cotizan aparte. Y si le van a revisar el retorno, no solo las salidas.',
          'En condominio hay una cuarta pregunta, que es de quién es cada parte. La manejadora, el ducto dentro de sus paredes y el filtro son suyos; los tramos compartidos son de la asociación. Se lo decimos antes de cotizarle, incluso cuando la respuesta es que le toca hablar con su junta y no con nosotros.',
        ],
      },
    ],
    ductRepair: {
      local: [
        'Deerfield splits between Century Village condominium systems, where the ducting is short, shared and original to the seventies, and the coastal single family homes east of Federal where salt reaches everything with a metal component.',
        'In the condominiums the repair question is usually about the boundary: which part is yours and which belongs to the association. On the coastal side it is corrosion, and specifically terminations and dampers that no longer seal, which lets humid air travel back into the system every night.',
      ],
      common: 'In the condominiums, a return or filter housing that no longer seals, which is why the coil keeps getting dirty after it has been cleaned.',
    },
    depth: [
      {
        heading: 'Deerfield Beach: condominium systems and coastal systems are different jobs',
        body: [
          'Deerfield splits cleanly in two, and which half you live in determines almost everything about what your duct system needs. West of the interstate, Century Village and the communities around it are low rise condominium buildings from the seventies with compact air handlers in a closet, short duct runs, and neighbours on every side. Those systems are small enough that a single blocked return affects the whole unit within days, and the air handler closet is often shared with the water heater, which adds heat and humidity to a space that should have neither.',
          'East of Federal Highway, The Cove and the Hillsboro side are single family homes close enough to the Atlantic that salt reaches the roof, the exterior equipment and anything with a metal flap on it. Salt does two things to a duct system. It corrodes the outdoor components, and more importantly it means the outside air being drawn in through any leak is carrying salt as well as moisture.',
        ],
      },
      {
        heading: 'The Century Village pattern',
        body: [
          'We see the same sequence in Century Village units often enough to describe it as a pattern. The unit has not had the ducts touched since it was built. The owner notices the air conditioning is not keeping up and calls for service. The technician finds the coil restricted, cleans the coil, and the system runs better for a season.',
          'The reason it comes back is that the coil was not the source. A coil gets dirty because unfiltered air is reaching it, and in these buildings that is almost always because the return duct or the filter housing is not sealing. Clean the coil and leave the return, and you have bought yourself eight months.',
          'This is worth knowing before you book anyone, because it changes what you should be asking for. A duct cleaning that does not include an inspection of the return path and the filter seal is not solving the problem you actually have.',
        ],
      },
    ],
    neighborhoods: ['The Cove', 'Deer Creek', 'Century Village', 'Independence Bay', 'Crystal Lake', 'Hillsboro'],
    dryerVent: {
      local: [
        'Deerfield Beach has more dryer vent work per household than almost anywhere else we serve, and the reason is Century Village. Several thousand units, built in the seventies, stacked in low rise buildings, with vent runs that were laid out when nobody expected a dryer to run four loads on a Sunday. Those runs are short but they are shared, and in a stacked configuration the unit at the bottom of the riser inherits every unit above it.',
        'East of Federal, The Cove and the Hillsboro side are single family homes close enough to the water that salt reaches the roof and wall terminations. Dampers seize open, humid night air travels back down the duct, and the lint that was loose in the morning is a damp mat by the following week.',
        'Deer Creek, Independence Bay and Crystal Lake are the newer end of the city, mostly two storey homes and townhouses with upstairs laundry and long vertical runs to the roof.',
      ],
      common: 'Seized damper flaps on coastal terminations. The dryer exhausts fine but nothing stops outside humidity coming back in, and the duct never dries out between loads.',
    },
  },

  // ---- Palm Beach ----
  'boca-raton': {
    neighborhoods: ['Boca Del Mar', 'Broken Sound', 'Sandalfoot Cove', 'Mizner Park', 'Boca Woods', 'Millpond'],
    dryerVent: {
      local: [
        'Boca Raton is dominated by association managed communities, and that shapes the work more than the housing age does. In Boca Del Mar, Broken Sound and the country club communities, the vent run is usually correct as built, rigid metal, properly clamped, sensible length. What goes wrong is time. Nobody owns the maintenance, twelve years pass, and a correctly built duct is just as blocked as a badly built one.',
        'The condominium buildings along the coast and around Mizner Park bring shared risers, and Sandalfoot Cove at the western edge brings older, smaller units where the run is short but the duct is often the original flexible foil.',
      ],
      common: 'Correctly installed ducts that have simply never been cleaned, where the lint layer has reduced a four inch duct to an inch and a half of usable diameter.',
    },
  },
  'delray-beach': {
    neighborhoods: ['Pineapple Grove', 'Lake Ida', 'Delray Shores', 'Kings Point', 'Tropic Isle'],
    dryerVent: {
      local: [
        'Kings Point alone accounts for a large share of Delray dryer vent work. It is a big fifty five plus community of low rise buildings and villas from the seventies and eighties, and the vent configurations there are short, shared, and old. In a community that size the same three or four failure patterns repeat building after building.',
        'The single family side, Lake Ida and Delray Shores, is mid century construction with the laundry usually in the garage and a short run to a side wall. Tropic Isle and the barrier island properties add salt exposure to the same picture.',
      ],
      common: 'Original flexible foil transition duct behind the machine, crushed where the dryer sits against the wall, which chokes the run before it has even left the room.',
    },
  },
  'boynton-beach': {
    depthEs: [
      {
        heading: 'Boynton es en buena medida una ciudad de comunidades de cincuenta y cinco años y más',
        body: [
          'Hunters Run, Leisureville y las comunidades de alrededor representan una parte muy grande de la vivienda de Boynton Beach, y comparten el mismo perfil: construidas entre los setenta y los noventa, de una planta o de pocos pisos, con sistemas compactos y con residentes que muchas veces llevan décadas en la misma casa.',
          'Ese último dato es el que importa. Un sistema que lleva veinticinco años con un solo dueño normalmente ya tuvo cambio de equipo y nunca tuvo cambio de distribución, porque el equipo falla de forma visible y el ducto no. Encontramos seguido ducto original de los setenta u ochenta conectado a una manejadora de tercera generación, y el dueño lleva años oyendo que el problema es la unidad.',
          'Es también el grupo más expuesto a las tácticas de susto por las que este oficio tiene mala fama. Por eso publicamos nuestros precios, y por eso el técnico que llega a su casa no gana comisión por lo que le venda.',
        ],
      },
      {
        heading: 'La costa y el oeste de Boynton no son el mismo trabajo',
        body: [
          'Al este de Federal, las propiedades de la isla barrera y la vivienda vieja cerca de la playa reciben sal en cada componente exterior y por cada abertura del camino de retorno. Las salidas y las aletas se corroen, dejan de sellar, y el aire húmedo de afuera se mete al ducto durante la noche, cuando el sistema está apagado y las superficies del ducto siguen frías.',
          'Al oeste del turnpike, las comunidades más nuevas son construcción convencional sobre losa, con el ducto en el ático y salidas por el techo. Ahí lo que degrada al sistema es el calor: uniones que se abren, cinta que se despega y aislamiento que se vuelve quebradizo después de veinte veranos.',
          'Son dos diagnósticos distintos y conviene saber cuál le toca, porque la reparación no se parece. En la costa se trabaja sobre terminaciones, aletas y sellado del retorno. Tierra adentro se trabaja sobre uniones y sobre el tramo de ático que perdió su aislamiento.',
        ],
      },
      {
        heading: 'Lo que cambia adentro cuando el retorno sella',
        body: [
          'La queja más común que recibimos en Boynton no es el polvo, es el olor a humedad al encender el aire, y casi siempre viene del mismo lugar: un serpentín mojado con polvo encima, alimentado por aire que no pasó por el filtro.',
          'Sellar el camino del retorno cambia esa ecuación de raíz. El aire vuelve a entrar por donde debe, el filtro por fin hace su trabajo, y el serpentín se mantiene limpio mucho más tiempo del que dura si solo se limpia. Bajar la humedad de la casa de 60 por ciento es la otra mitad, y es lo que evita que el olor regrese el próximo verano.',
        ],
      },
    ],
    ductRepair: {
      local: [
        'Boynton\'s fifty five plus communities share a pattern: equipment that has been replaced two or three times connected to ductwork that has never been touched. Equipment fails visibly and ductwork does not, so the distribution quietly ages past the point where the equipment can compensate.',
        'The result is systems where a modern, correctly sized air handler underperforms badly, and the owner has been told the unit is the problem. Frequently it is not.',
      ],
      common: 'Original seventies or eighties ducting connected to a third generation air handler, where the new equipment cannot deliver through the old distribution.',
    },
    dryerVent: {
      local: [
        'The fifty five plus communities that make up much of Boynton are low rise and villa construction from the seventies and eighties, where laundry closets are compact and the dryer is usually pushed back hard against the wall to fit. That crushes the flexible transition hose behind the machine, which chokes the run before it has left the room.',
        'East of Federal, the coastal properties have the salt problem on the terminations: dampers corrode, stop sealing, and let humid outside air travel back down the duct overnight.',
      ],
      common: 'A flattened transition hose behind the machine. It is the cheapest thing on the whole run to fix and the one that most often causes the symptom.',
    },
    depth: [
      {
        heading: 'Boynton is largely a fifty five plus city, and that shapes the work',
        body: [
          'Hunters Run, Leisureville and the communities around them account for a very large share of Boynton Beach housing, and they share a profile: built between the seventies and the nineties, single storey or low rise, compact systems, and residents who have often been in the same unit for a long time.',
          'Long tenancy is the relevant part. A system that has run for twenty five years under one owner has usually had the equipment replaced and the distribution left alone, because equipment fails visibly and ductwork does not. We regularly find original ducting connected to a third generation air handler.',
          'It is also the group most exposed to the scare tactics this trade is known for. We publish our prices for that reason, and the technician who comes out is not paid on what he sells.',
        ],
      },
      {
        heading: 'Coastal and inland Boynton are not the same job',
        body: [
          'East of Federal, the barrier island properties and the older beachside housing get salt on every exterior component and through every gap in the return path. West of the turnpike, the newer communities are conventional slab construction with attic runs and roof terminations.',
          'The failure modes diverge accordingly: corroded terminations and dampers that no longer seal on the coast, and heat degraded joints in the attic inland.',
        ],
      },
    ],
    neighborhoods: ['Hunters Run', 'Leisureville', 'Quantum Village', 'Chapel Hill', 'Renaissance Commons'],
  },
  'west-palm-beach': {
    neighborhoods: ['El Cid', 'Flamingo Park', 'Northwood', 'Ibis', 'Andros Isle', 'SoSo'],
    dryerVent: {
      local: [
        'The historic districts, El Cid, Flamingo Park and Northwood, are twenties and thirties houses where the laundry was added generations after the house was built. Vent runs in those homes were improvised, and we regularly find them routed through a crawl space, a closet, or in a few cases terminating into an attic with no exit at all.',
        'Out west, Ibis and Andros Isle are modern planned communities with two storey homes, upstairs laundry rooms and long roof runs. Different century, same physics: the longer the run, the more lint falls out of the air before it gets outside.',
      ],
      common: 'In the historic districts, vents that terminate inside the structure rather than outside it, which is both a fire risk and the reason the laundry room feels damp.',
    },
  },

  // ---- Tampa Bay ----
  tampa: {
    depthEs: [
      {
        heading: 'En Tampa el ducto va debajo de la casa, no arriba',
        body: [
          'Seminole Heights, partes de Hyde Park, Tampa Heights y Ybor son casas de madera levantadas sobre pilotes, y ese solo dato cambia todo. En lugar de correr por un ático, el ducto corre en el espacio bajo el piso.',
          'Ese espacio es más fresco que un ático, lo cual suena a ventaja y no lo es. También es más húmedo, en la mayoría de estas casas no está sellado del terreno, y todo lo que ha pasado por debajo en ochenta años ha estado en contacto con el ducto. Encontramos tramos separados en una unión que llevan años descargando ahí abajo, y tramos aplastados por almacenamiento o por algún oficio anterior.',
          'La señal desde adentro es una rejilla de piso que entrega notablemente menos que las demás, o un olor a humedad que se hace más fuerte en el cuarto más cercano a la trampilla.',
        ],
      },
      {
        heading: 'La otra mitad de la ciudad, y lo que dejan las tormentas',
        body: [
          'Westchase, Carrollwood y New Tampa son construcción sobre losa con ducto en el ático, la misma configuración que casi todo el sur de Florida y con el mismo problema de calor.',
          'Lo específico de la bahía de Tampa es el agua. El sur de Tampa y las zonas bajas reciben marea de tormenta e inundación, y la consecuencia en el ducto aparece semanas después, no durante la tormenta. El aislamiento que se mojó no se seca dentro de una cubierta sellada. Crece, y la primera señal suele ser un olor en una casa que por fuera se ve perfecta.',
          'Si su casa se inundó alguna vez, vale la pena revisar el ducto aunque los pisos ya se hayan resuelto. Es la parte de la casa que nadie abre.',
        ],
      },
    ],
    ductRepair: {
      local: [
        'Tampa\'s raised bungalow districts put the ductwork in the crawl space, and crawl space repair is a different job from attic repair. The runs are unsupported over long spans, they are within reach of anything that has been under the house, and they are in permanently damper air than an attic.',
        'The slab neighborhoods north of the city have conventional attic ducting with conventional attic failures. What is specific to Tampa Bay is flood exposure: if a house has taken water, the duct system is the part of the building nobody opens, and wet insulation inside a jacket does not dry.',
      ],
      common: 'Crawl space runs that have separated at a joint and spent years discharging under the house, which the homeowner experiences only as one cold room.',
    },
    depth: [
      {
        heading: 'Tampa\'s bungalows put the ductwork under the house, not above it',
        body: [
          'Seminole Heights, parts of Hyde Park, Tampa Heights and Ybor are raised wood frame houses on piers, and that single structural fact changes everything about their duct systems. Instead of running through an attic, the ducts run in the crawl space under the floor.',
          'A crawl space is cooler than an attic, which sounds like an improvement and is not. It is also damper, it is unsealed to the ground in most of these houses, and anything that has been under there over the last eighty years has been in contact with the ductwork. We find runs that have separated at a joint and spent years discharging into the crawl space, and runs that have been crushed by storage or by a previous trade working under the house.',
          'The tell from inside is a floor register that delivers noticeably less than the others, or a persistent musty note that gets stronger in the room nearest the access hatch.',
        ],
      },
      {
        heading: 'The slab half of the city, and what storms leave behind',
        body: [
          'Westchase, Carrollwood, New Tampa and the northern suburbs are conventional slab construction with attic ducting, the same configuration as most of South Florida and with the same attic heat problem.',
          'What is specific to Tampa Bay is water. South Tampa and the low lying areas near the bay take surge and flooding in a way inland Florida does not, and the duct consequence shows up weeks later rather than during the storm. Insulation that got wet does not dry out inside a sealed duct jacket. It grows, and the first sign is usually a smell in a house that otherwise looks fine.',
          'If your house has taken water at any point, the ductwork is worth inspecting even if the floors were dealt with. It is the part of the building nobody opens.',
        ],
      },
    ],
    neighborhoods: ['South Tampa', 'Hyde Park', 'Seminole Heights', 'Westchase', 'Carrollwood', 'New Tampa'],
    dryerVent: {
      local: [
        'Tampa\'s older bungalow districts, Seminole Heights and parts of Hyde Park, are raised houses on piers, and that changes the vent route entirely. Instead of going up into an attic, the run often drops into the crawl space and travels under the floor, where it is out of sight, unsupported, and frequently damaged by anything that has been under there.',
        'Westchase, Carrollwood and New Tampa are conventional slab construction with attic runs and roof terminations, the same configuration as most of South Florida, with the same attic heat problem.',
      ],
      common: 'Crawl space runs that have separated at a joint, discharging warm damp lint under the house instead of outside.',
    },
  },
  'st-petersburg': {
    ductRepair: {
      local: [
        'The Old Northeast and Historic Kenwood bungalows have air conditioning that was added decades after the houses were built, with runs that frequently drop into the crawl space rather than rising into an attic. Those runs are out of sight, usually unsupported, and take damage from anything that has been under there.',
        'Shore Acres and the low lying neighborhoods add flood exposure. A duct that took water has insulation that cannot dry, and that is a replacement rather than a seal.',
      ],
      common: 'Unsupported crawl space runs sagging between piers, where each low point holds moisture and eventually opens at a joint.',
    },
    dryerVent: {
      local: [
        'The bungalow districts, Old Northeast and Historic Kenwood, are raised houses where the laundry was added later and the vent frequently drops into the crawl space rather than rising into an attic. A run under the floor is out of sight, usually unsupported, and takes damage from anything that has been under there.',
        'The downtown condominium towers are the opposite case: short runs joining a shared riser that serves every unit on the stack, where the portion you own ends at the wall.',
      ],
      common: 'Crawl space runs that have separated at a joint and are discharging warm damp lint under the house rather than outside it.',
    },
    depth: [
      {
        heading: 'Water on three sides, and a housing stock that predates air conditioning',
        body: [
          'St Petersburg sits on a peninsula with the Gulf on one side and the bay on the other, which keeps humidity high day and night and keeps it high overnight in particular. Overnight is when it matters for ductwork: the system has been running all day, duct surfaces are cold, and when it cycles off and warm damp air reaches them, they sweat.',
          'The Old Northeast and Historic Kenwood are full of twenties and thirties bungalows where the air conditioning was added long after construction, with the same improvised routing that produces leaks and dust intake. Shore Acres and the low lying neighborhoods add flood exposure to the same picture.',
        ],
      },
      {
        heading: 'The downtown towers are a different building entirely',
        body: [
          'The condominium buildings along the waterfront and through downtown are sealed envelopes with compact air handlers in closets and short duct runs. The whole system can be cleaned properly in a few hours, and the improvement is usually more noticeable than in a house simply because there is less system to dilute it.',
          'What those buildings do have is shared infrastructure, and where your run joins something serving other units, that part is the association\'s. We will say so rather than clean your six feet and call the problem solved.',
        ],
      },
    ],
    neighborhoods: ['Old Northeast', 'Historic Kenwood', 'Snell Isle', 'Jungle Terrace', 'Shore Acres'],
  },
  clearwater: {
    ductRepair: {
      local: [
        'Clearwater\'s high proportion of condominium and villa housing makes the first repair question an ownership question. In most buildings the air handler, the ducting inside your walls and the filter housing are yours, while risers and anything shared belong to the association.',
        'That boundary is where problems sit unowned for years, because both sides reasonably assume the other is handling it. On the barrier island, Clearwater Beach and Sand Key, add salt: terminations corrode, dampers stop sealing, and the system draws salt laden air through every gap in the return.',
      ],
      common: 'A return path that is not sealed, letting the system pull unfiltered air from a wall cavity or a corridor rather than through the filter.',
    },
    dryerVent: {
      local: [
        'Clearwater\'s condominium and villa stock puts most dryers on short runs to an exterior wall or into a shared riser, and short runs are the ones people assume are fine. They usually are not: a short duct never warms along its whole length, so the last foot before the hood stays damp and lint sticks to it instead of passing through.',
        'On the barrier island, Clearwater Beach and Sand Key, salt seizes the damper flaps within a few seasons, and a damper that will not close lets humid Gulf air back down the duct every night.',
      ],
      common: 'The last twelve inches before an exterior hood packed solid, on a run that looks far too short to have a problem.',
    },
    depth: [
      {
        heading: 'A barrier island and a mainland, with different problems',
        body: [
          'Clearwater Beach, Sand Key and Island Estates are on the sand, and everything about their HVAC is shaped by salt. Salt reaches the outdoor equipment, the roof terminations and anything with a metal flap, and it reaches the indoor coil too, carried in through any gap in the return path. A coil carrying a salt and dust layer holds moisture longer, which is the condition mold needs.',
          'Countryside and the mainland neighborhoods are conventional inland construction with attic ducting, and their issue is the ordinary Florida one: a duct system in a space that runs above 120 degrees for half the year.',
        ],
      },
      {
        heading: 'The condominium question in Pinellas',
        body: [
          'Clearwater has a very high proportion of condominium and villa housing, much of it from the seventies and eighties, and condominium systems raise a question single family homes do not: what is yours.',
          'In most buildings the air handler, the ductwork inside your walls and the filter are yours, while risers, corridors and anything shared belong to the association. That boundary is where problems go unowned for years, because each side reasonably assumes the other is handling it. We will tell you which side of the line your problem is on before quoting anything, including when the answer is that you should be talking to your board rather than to us.',
        ],
      },
      {
        heading: 'Houses from the twenties to the sixties, with the air conditioning added later',
        body: [
          'Harbor Oaks and the streets on the bluff south of downtown are twenties and thirties houses, built decades before central air conditioning existed anywhere in Florida. Skycrest, Morningside Estates and most of the blocks east of Missouri Avenue are fifties and sixties ranch houses, many of which started on window units and were converted to a central system later. In both cases the ductwork was fitted into a house that was never designed to carry any, so the runs go through closets, soffits, furred down ceilings and an attic with three feet of clearance at the ridge.',
          'Retrofitted duct leaks, and not because the installer was careless. A run assembled around obstacles has more joints, more transitions and more places for a connection to work loose as the building moves. Where that happens matters as much as how much. A joint that has opened in the attic pulls in air at well over 120 degrees. A joint that has opened inside a soffit or a wall cavity pulls in whatever is in the cavity, which is insulation fibre and sixty years of dust.',
          'From inside the house the signs are consistent: one room that never keeps up with the rest, a return grille that whistles when the system starts, and a film of dust that is back on furniture within a few days of cleaning. All three point at the distribution rather than the equipment.',
        ],
      },
      {
        heading: 'What the September 2024 surge left in ground floor air handlers',
        body: [
          'When Hurricane Helene ran up the Gulf coast in late September 2024, the surge it pushed into Pinellas flooded ground floors along Clearwater Beach, Island Estates, Sand Key and the low mainland streets near the water. In a large share of those homes and ground floor condominium units, the air handler sits in a closet or a garage at floor level, which means it sat in salt water.',
          'The visible repairs got done. Drywall was cut back, flooring was replaced, and units were swapped where they had to be. The part that usually did not get done is the duct. Fibreglass insulation inside a duct jacket does not dry after it has been submerged, because the jacket is a vapour barrier and it holds the water in. It stays wet, it holds salt, and it grows. Galvanized fittings and the bottom of a return plenum that stood in brackish water corrode from the inside, where nobody looks.',
          'If your ground floor took water in 2024 and nobody opened the ductwork afterwards, that is the first thing worth checking, particularly if a musty smell came back some weeks after the remediation was signed off. Sometimes the answer is a cleaning. Sometimes the section that was under water has to be replaced, and we will tell you that rather than clean a duct that needs cutting out.',
        ],
      },
    ],
    depthEs: [
      {
        heading: 'La isla y el continente son dos trabajos distintos',
        body: [
          'Clearwater Beach, Sand Key e Island Estates están sobre la arena, y todo lo que pasa con el aire acondicionado ahí lo define la sal. La sal llega al equipo de afuera, a las salidas del techo y a cualquier pieza metálica con aleta, y también llega al serpentín de adentro, porque el sistema jala aire por cualquier abertura del retorno. Un serpentín con una capa de sal y polvo transfiere calor peor y se queda mojado más tiempo, que es exactamente la condición que el moho necesita.',
          'Countryside y los barrios del continente son construcción normal tierra adentro, con el ducto tendido en el ático. Ahí el problema no es la sal sino el calor: medio año con la distribución metida en un espacio que pasa de 120 grados, y un aislamiento que se vuelve quebradizo antes de lo que la gente supone.',
        ],
      },
      {
        heading: 'De quién es el ducto: la pregunta del condominio en Pinellas',
        body: [
          'Clearwater tiene una de las proporciones más altas de condominios y villas de todo Pinellas, y buena parte de ese inventario es de los años setenta y ochenta. Un sistema en condominio plantea una pregunta que una casa sola no plantea: qué parte es suya.',
          'En la mayoría de los edificios la manejadora, el ducto que corre dentro de sus paredes y el filtro son suyos, mientras que los tramos verticales compartidos, los pasillos y las salidas del techo son de la asociación. Esa frontera es donde los problemas se quedan sin dueño durante años, porque cada lado supone con razón que el otro se está haciendo cargo.',
          'Le decimos de qué lado de la línea está su problema antes de cotizarle nada, incluso cuando la respuesta es que le conviene hablar con su junta y no con nosotros. Limpiarle a usted seis pies de ducto cuando la obstrucción está en el tramo compartido no le resuelve nada y usted lo va a notar en dos meses.',
        ],
      },
      {
        heading: 'Casas de los años veinte a los sesenta con aire puesto después',
        body: [
          'Harbor Oaks y las calles del acantilado al sur del centro son casas de los años veinte y treinta, levantadas mucho antes de que existiera el aire acondicionado central. Skycrest, Morningside Estates y casi todo lo que está al este de Missouri Avenue son casas de una planta de los cincuenta y sesenta, muchas de ellas empezaron con unidades de ventana y se pasaron a sistema central después. En los dos casos el ducto se metió en una casa que no se diseñó para llevarlo, así que va por clósets, plafones bajados y un ático con tres pies de altura.',
          'Un ducto adaptado tiene fugas, y no por descuido de quien lo instaló. Un tramo armado esquivando obstáculos tiene más uniones y más transiciones, y cada una es un punto que se puede aflojar con los años. Dónde está la fuga importa tanto como su tamaño: una unión abierta en el ático mete aire de más de 120 grados, y una abierta dentro de una pared o un plafón mete fibra de aislamiento y polvo de sesenta años.',
          'Desde adentro las señales son las mismas siempre: un cuarto que nunca alcanza a los demás, una rejilla de retorno que silba al arrancar el sistema, y una capa de polvo que vuelve a los muebles a los pocos días de haber limpiado.',
        ],
      },
      {
        heading: 'Lo que dejó la marea de septiembre de 2024 en las manejadoras de planta baja',
        body: [
          'Cuando el huracán Helene subió por la costa del Golfo a finales de septiembre de 2024, la marea que empujó hacia Pinellas inundó las plantas bajas de Clearwater Beach, Island Estates, Sand Key y las calles bajas del continente cerca del agua. En buena parte de esas casas y de esos condominios de planta baja la manejadora está en un clóset o en la cochera al nivel del piso, así que estuvo dentro del agua salada.',
          'La reparación visible sí se hizo. Se cortó el panel de yeso, se cambió el piso y se reemplazó el equipo donde no quedó otra. Lo que casi nunca se hizo fue abrir el ducto. El aislamiento de fibra de vidrio dentro de la cubierta de un ducto no se seca después de estar sumergido, porque esa cubierta es una barrera de vapor y retiene el agua adentro. Se queda húmedo, retiene sal, y crece. Las piezas galvanizadas y el fondo del plenum de retorno que estuvo en agua salobre se corroen desde adentro, donde nadie mira.',
          'Si su planta baja tomó agua en 2024 y nadie abrió los ductos después, ese es el primer lugar donde hay que revisar, sobre todo si el olor a humedad regresó unas semanas después de que le entregaron el trabajo de remediación. A veces la respuesta es una limpieza. A veces el tramo que estuvo bajo el agua hay que cambiarlo, y se lo vamos a decir en lugar de limpiar un ducto que se tiene que cortar.',
        ],
      },
    ],
    neighborhoods: ['Countryside', 'Island Estates', 'Clearwater Beach', 'Feather Sound', 'Sand Key', 'Harbor Oaks', 'Skycrest', 'Morningside Estates', 'Coachman Ridge'],
  },

  // ---- Central Florida ----
  orlando: {
    depthEs: [
      {
        heading: 'Las casas de renta corta son el caso especial de Orlando',
        body: [
          'Al sur y al oeste de la ciudad, hacia Kissimmee y Davenport, hay decenas de miles de casas de renta vacacional, y su aire acondicionado se desgasta distinto. La casa se ocupa unos días, se desocupa, y entre reservaciones se queda cerrada con el termostato en 78 u 80.',
          'Un sistema que apenas enciende no deshumidifica. La humedad interior se queda arriba del 60 por ciento durante meses, que es todo lo que el moho necesita en el serpentín, en la bandeja de condensado y en la superficie interior del ducto.',
        ],
      },
      {
        heading: 'Polen, construcción nueva, y el Orlando viejo',
        body: [
          'Fuera del negocio de renta, Orlando se divide en dos. Lake Nona y Horizon West son casas de menos de quince años, y ahí el problema es el escombro de construcción que quedó dentro del ducto.',
          'College Park, Delaney Park y Colonialtown son lo contrario: casas de los años veinte a los cincuenta bajo robles maduros, con aire acondicionado instalado décadas después de construida la casa. El roble suelta una carga de polen en primavera que la costa no tiene.',
          'Ninguno de los dos es el problema que la gente espera. En Orlando la humedad es real pero es secundaria frente al polen y al polvo de obra.',
        ],
      },
    ],
    ductRepair: {
      local: [
        'Orlando\'s duct repair work divides between two housing types that fail for opposite reasons. The newer subdivisions east and west of the city were built fast, and speed shows up in the distribution rather than the equipment: runs that were kinked during construction and never straightened, joints taped rather than sealed, and boots that were never properly fastened to the ceiling.',
        'The older neighborhoods, College Park, Delaney Park and Colonialtown, have the opposite problem. The systems are retrofits into twenties through fifties houses, and the ducting has been added to and worked around by several generations of trades.',
      ],
      common: 'In the newer builds, boots that were never properly sealed to the ceiling, which shows as grey fanning marks on the paint around the register.',
    },
    depth: [
      {
        heading: 'Orlando has a duct problem the coasts do not: the vacation rental',
        body: [
          'Central Florida holds tens of thousands of short term rental homes, concentrated south and west of the city toward Kissimmee and Davenport, and they age their air conditioning differently from anything else in the state. A rental turns over every few days, the thermostat gets set wherever the last guest left it, and between bookings the house sits closed with the system idling at 78 or 80 degrees.',
          'That is the exact condition that grows mold. The system is not running long enough to pull humidity down, the house is sealed, and there is nobody in it to notice the smell. Owners usually find out from a review rather than from the equipment.',
          'The practical consequence is that a rental needs the coil and the ducts looked at on a much shorter cycle than an owner occupied house, and the reason is occupancy pattern rather than square footage. We treat them as a different job because they are one.',
        ],
      },
      {
        heading: 'Pollen, new construction, and the old Orlando neighborhoods',
        body: [
          'Away from the rentals, Orlando splits in two. Lake Nona, Horizon West and the newer eastern growth are homes under fifteen years old, and the duct problem there is construction debris. Drywall dust, sawdust and insulation fibre get into the ductwork before the house is finished, and no builder cleans it out. The first full cooling season redistributes all of it.',
          'College Park, Delaney Park and Colonialtown are the other end: twenties through fifties houses under a heavy oak canopy, with air conditioning fitted decades after the house was built. Ducting in those homes was routed through whatever space existed, and the oak canopy means a spring pollen load that inland Florida takes seriously and the coasts do not.',
          'Neither problem is the one people expect. Orlando homeowners tend to assume humidity is the whole story because that is what they hear about Florida. Here it is genuinely secondary to pollen and to construction dust.',
        ],
      },
    ],
    neighborhoods: ['Baldwin Park', 'College Park', 'Dr. Phillips', 'Lake Nona', 'Conway', 'Delaney Park'],
    dryerVent: {
      local: [
        'Orlando has less salt air than the coasts and more pollen, and the pollen matters. Oak and pine load the outside air heavily in spring, and an exterior vent hood that sits at ground level collects that debris on the outside of the flap while lint builds on the inside.',
        'The newer communities, Lake Nona and much of Dr. Phillips, are two storey homes with second floor laundry rooms. College Park and Delaney Park are older single storey houses where the run is shorter but the duct is often original.',
      ],
      common: 'Ground level exterior hoods blocked from outside by pollen, mulch and landscaping that has grown up around them.',
    },
  },
  kissimmee: {
    depth: [
      {
        heading: 'Kissimmee has a duct problem the rest of Florida does not',
        body: [
          'The corridor running from Kissimmee through Celebration to Poinciana holds tens of thousands of short term rental homes, and they age their air conditioning in a way an owner occupied house never does. The house turns over every few days, the thermostat ends up wherever the last guest left it, and between bookings it sits closed with the system idling at 78 or 80 degrees.',
          'That is the exact condition that grows mold. The system is not running long enough to pull humidity down, the house is sealed, and there is nobody in it to notice the smell. Owners find out from a review rather than from the equipment.',
          'The practical consequence is that a rental needs the coil and the ducts looked at on a much shorter cycle than a family home, and the driver is the occupancy pattern rather than the square footage. We treat them as a different job because they are one.',
        ],
      },
      {
        heading: 'Buenaventura Lakes, Poinciana, and the new builds',
        body: [
          'The other Kissimmee is the one where people live year round. Buenaventura Lakes is seventies and eighties construction with interior laundry rooms and ductwork now past its service life, and much of Poinciana is under twenty years old.',
          'In the newer homes the problem is not wear, it is what was left behind. Drywall dust, sawdust and insulation fibre get into the ductwork before the house is finished, and no builder removes it. The first full cooling season distributes all of it through the house.',
          'It is why families who have just moved into a brand new home call us about allergies. The house is clean. The ductwork is not.',
        ],
      },
    ],
    depthEs: [
      {
        heading: 'Kissimmee tiene un problema de ductos que el resto de Florida no tiene',
        body: [
          'El corredor entre Kissimmee, Celebration y Poinciana concentra decenas de miles de casas de renta corta, y esas casas envejecen el aire acondicionado de una manera completamente distinta a una casa donde vive una familia. La casa cambia de huéspedes cada pocos días, el termostato queda donde lo dejó el último, y entre reservaciones la casa se queda cerrada con el sistema apenas encendiendo a 78 u 80 grados.',
          'Esa es exactamente la condición que produce moho. El equipo no corre lo suficiente para bajar la humedad, la casa está sellada, y no hay nadie adentro que note el olor. Los dueños se enteran por una reseña, no por el equipo.',
          'En la práctica significa que una casa de renta necesita revisión del serpentín y de los ductos mucho más seguido que una casa habitada, y la razón es el patrón de ocupación, no el tamaño. Lo tratamos como un trabajo distinto porque lo es.',
        ],
      },
      {
        heading: 'Buenaventura Lakes, Poinciana y las casas nuevas',
        body: [
          'Del otro lado están los barrios donde sí vive gente todo el año. Buenaventura Lakes es de los años setenta y ochenta, con lavandería interior y ductos que ya pasaron su vida útil, y en Poinciana buena parte de la construcción tiene menos de veinte años.',
          'En las casas nuevas el problema no es el desgaste sino lo que quedó adentro. El polvo de construcción, el aserrín y la fibra del aislamiento entran al ducto antes de que la casa se termine, y ninguna constructora los saca. La primera temporada completa de aire acondicionado los reparte por toda la casa.',
          'Es la razón por la que familias que se acaban de mudar a una casa nueva nos llaman por alergias. La casa está limpia. El ducto no.',
        ],
      },
    ],
    neighborhoods: ['Celebration', 'Buenaventura Lakes', 'Poinciana', 'Kissimmee Bay'],
  },
  'winter-park': {
    ductRepair: {
      local: [
        'Every duct system in Winter Park\'s older housing is a retrofit. The houses around Hannibal Square, Orwin Manor and the lakes were built before residential air conditioning existed, so the ducting was routed afterwards through closets, soffits and knee walls rather than designed into the structure.',
        'Improvised routing produces improvised joints, and improvised joints are what fail. We find runs passing through unconditioned space with no insulation, runs that turn more corners than the length allows, and connections that were taped rather than mechanically fastened and have worked loose over decades of thermal cycling.',
      ],
      common: 'Runs passing through unconditioned or semi conditioned space, which both leak and sweat, and which no amount of cleaning improves.',
    },
    dryerVent: {
      local: [
        'Winter Park\'s older housing puts the laundry wherever it fitted when it was added, which in a ninety year old house is usually not against an exterior wall. Runs through interior walls and up into the attic are the norm here rather than the exception, and each of those runs is longer and turns more corners than the manufacturer intended.',
        'The oak canopy adds the second problem. Roof and gable terminations under mature trees collect leaf litter and seed debris on top of the flap, so the duct can be perfectly clear while the exit is not.',
      ],
      common: 'Roof terminations obstructed from outside by leaf and seed debris, on runs that are already longer than they should be.',
    },
    depth: [
      {
        heading: 'Ninety year old houses with air conditioning added later',
        body: [
          'Winter Park\'s older housing predates residential air conditioning entirely. The houses around Hannibal Square, Orwin Manor and the lakes were built in the twenties and thirties, and every duct system in them has been fitted afterwards, often more than once, into a structure that was not designed to carry one.',
          'That produces routing you do not see in newer construction: runs through closets, through dropped soffits, through knee walls, and occasionally through spaces that are not conditioned and not sealed. Each of those transitions is a place air escapes and dust enters.',
          'It also produces systems where the equipment is modern and the distribution is not. A high efficiency air handler moving air through ducting laid out in 1974 will underperform its rating, and the fault is almost never in the equipment.',
        ],
      },
      {
        heading: 'The oak canopy is the other half of the story',
        body: [
          'Winter Park\'s tree cover is denser than almost anywhere in Central Florida, and mature live oaks put out a heavy spring pollen load along with a constant fall of fine organic debris. That reaches the system two ways: through the return, and through any leak in the attic portion of the duct run.',
          'Households here often describe a seasonal pattern, where allergy symptoms rise in spring and stay elevated indoors long after the outdoor count has dropped. That lag is the tell. Outdoor pollen falls when the season ends; pollen that has settled inside a duct system does not, and gets redistributed every time the system runs.',
        ],
      },
    ],
    neighborhoods: ['Hannibal Square', 'Windsong', 'Orwin Manor', 'Lake Killarney'],
  },
  lakeland: {
    neighborhoods: ['Lake Morton', 'Dixieland', 'Grasslands', 'Christina'],
  },
  jacksonville: {
    neighborhoods: ['Riverside', 'San Marco', 'Mandarin', 'Ortega', 'Southside', 'Avondale'],
  },

  // ---- Southwest Florida ----
  'fort-myers': {
    ductRepair: {
      local: [
        'A large share of Lee County housing has been restored in the last few years, and duct systems are the item most often left out of that work. The floors, the drywall and the kitchen get replaced; the ductwork that was in the attic or the wall during the water event stays.',
        'Wet duct insulation is the specific failure. It sits sealed inside a jacket where it cannot dry, and it supports growth that is invisible until the system runs. That is a replacement question rather than a repair question, and we would rather tell you that plainly than seal a run that needs to come out.',
      ],
      common: 'Duct insulation that took water during a storm event and was never opened up, inside a house that was otherwise fully restored.',
    },
    depth: [
      {
        heading: 'Lee County housing is still working through what the storms did',
        body: [
          'A large share of the housing stock in and around Fort Myers has been repaired, remediated or rebuilt in the last few years, and duct systems are the part of that work most often skipped. A house gets new floors, new drywall and a new kitchen, and the ductwork that was in the attic or the wall during the water event is still the ductwork in the attic.',
          'Wet duct insulation is the specific problem. It is sealed inside a jacket, it does not dry, and the growth it supports is invisible until the system runs. Homeowners often describe it as the house smelling fine for months and then not.',
          'If your home was affected and the duct system was not inspected as part of the restoration, that is worth closing. It is not an upsell, it is the most commonly missed item on a remediation.',
        ],
      },
      {
        heading: 'Half the year empty, and what that does to a system',
        body: [
          'Fort Myers has one of the highest seasonal residency rates in the state. A house closed from May to November sits through the entire wet season with the thermostat held around 80 and the system barely cycling.',
          'A system that barely cycles does not dehumidify. Indoor humidity climbs past 60 percent and stays there for months, which is all mold needs on a coil, in a drain pan, or on the inside surface of a duct. Returning owners describe it as the house smelling closed up, and assume it will air out. It does not, because the source is inside the system.',
          'A humidistat set properly, or a dehumidifier on a timer, prevents most of this. It is worth more than any cleaning we could sell you, and we would rather you did that than call us every November.',
        ],
      },
    ],
    neighborhoods: ['McGregor', 'Whiskey Creek', 'Gateway', 'Pelican Preserve', 'Iona'],
  },
  'cape-coral': {
    neighborhoods: ['Cape Harbour', 'Pelican', 'Tarpon Point', 'Sandoval', 'Burnt Store'],
  },
  naples: {
    neighborhoods: ['Old Naples', 'Park Shore', 'Pelican Bay', 'Golden Gate', 'Vineyards'],
  },
  'bonita-springs': {
    dryerVent: {
      local: [
        'Bonita Springs is largely single storey construction in gated communities, with the laundry off the garage or in an interior utility room and the vent taken up into the attic and out through the roof. Those attic runs sit in a space that holds heat well into the evening for most of the year.',
        'The seasonal pattern matters here as much as it does for the air conditioning. A dryer that is unused from April to November leaves a duct full of lint sitting in humid air for six months, and the lint that was loose in April is a damp mat by the time anyone runs a load in November.',
      ],
      common: 'Compacted lint in runs that have sat unused through a wet season, which behaves nothing like the loose lint a monthly user would have.',
    },
    depth: [
      {
        heading: 'A seasonal city, and a seasonal failure mode',
        body: [
          'Bonita Springs empties out for the summer more completely than almost anywhere in Southwest Florida. Bonita Bay, Pelican Landing and the gated communities around them hold a very high proportion of part year residences, and a house closed from April to November behaves nothing like one that is lived in.',
          'The system runs just enough to hold 80 degrees and no more, which means short cycles, which means it never runs long enough to dehumidify. Indoor humidity sits above 60 percent for six months. That is not a marginal condition, it is the textbook one for growth on the coil, in the drain pan and on the inner surface of the supply duct.',
          'Owners come back in November, turn the thermostat down, and get a smell they did not leave behind. The house did not do that in a week. It did it over the summer, quietly.',
        ],
      },
      {
        heading: 'What to do about it, including the parts we do not sell',
        body: [
          'The most effective fix here is not a cleaning. It is a humidistat set to hold humidity rather than temperature, or a whole house dehumidifier on a timer, so the system actually removes moisture while you are away. That prevents the problem instead of treating it, and we would rather tell you that than clean the same system every November.',
          'Where growth is already established, cleaning the coil, the pan and the ducts removes it. But if the house goes back to sitting at 80 with the humidity uncontrolled, it will be back the following season. The two go together.',
        ],
      },
    ],
    neighborhoods: ['Bonita Bay', 'Pelican Landing', 'Spanish Wells', 'Bonita Farms'],
  },
  sarasota: {
    neighborhoods: ['Downtown Sarasota', 'Gulf Gate', 'Palmer Ranch', 'Siesta Key', 'Arlington Park'],
  },
  bradenton: {
    ductRepair: {
      local: [
        'Bradenton generates more duct repair searches than any other city we serve, and the housing stock explains it. West Bradenton, Bayshore Gardens and Samoset are largely fifties through seventies construction, and a great deal of the original ductwork is still in service well past the fifteen years flexible duct realistically lasts in this climate.',
        'What that means in practice is that a lot of Bradenton systems are past the point where sealing a joint solves anything. The jacket has gone brittle, the insulation inside has absorbed moisture from decades of Manatee County humidity, and the run leaks along its length rather than at one identifiable place.',
      ],
      common: 'Return air paths built from the wall cavity or the joist bay rather than sealed duct, where the closing panel has come loose and the system is drawing straight from the crawl space.',
    },
    depth: [
      {
        heading: 'Why Bradenton ductwork loads up faster than it should',
        body: [
          'Manatee County sits between the Gulf and the Braden and Manatee rivers, and the air here holds moisture for most of the year. That matters inside the ductwork for a specific reason: the supply air leaving your air handler is cold, the metal or flex duct carrying it runs through an attic or a crawl space that is not, and the difference between those two temperatures is where condensation forms. Dust that would otherwise blow straight through sticks to a damp surface and stays.',
          'Bradenton\'s housing stock makes this worse than average. A large share of West Bradenton, Bayshore Gardens and Samoset was built between the fifties and the seventies, before duct insulation standards were what they are now, and a good deal of the original ductwork is still in service. Older flex duct with a degraded outer jacket sweats far more readily than a modern equivalent.',
          'The practical effect is that a Bradenton house on its original system will show visible dust around the supply registers within a couple of years of a cleaning, while the same house with sealed, insulated duct will go five. If you are seeing grey fanning marks on the ceiling around your vents, that is not dirt from the room settling. That is your duct system leaking conditioned air into the attic and pulling attic air back in.',
        ],
      },
      {
        heading: 'What we usually find in Bradenton homes',
        body: [
          'Three things come up more here than anywhere else on the Gulf coast we serve. The first is disconnected returns. In houses of this era the return air path is often the wall cavity or the floor joist bay itself rather than a sealed duct, and once the panel sealing it has come loose the system is drawing air directly from the crawl space or the wall.',
          'The second is coil mold in systems that run continuously through summer. Manatee County humidity keeps the evaporator coil wet, and a wet coil in the dark with a constant supply of dust is where mold grows first, before it appears anywhere in the ducts.',
          'The third is the seasonal one. A lot of Bradenton properties are part year residences, and a house closed up for four months with the thermostat at 80 is a house with a duct system that never dries out. Returning owners almost always notice the smell before they notice anything else.',
        ],
      },
      {
        heading: 'East of I-75 is a different house with different problems',
        body: [
          'Braden River, Tara and the Lakewood Ranch side of Manatee County are the newer half of what we cover, most of it built from the nineties onward on slab, with the air handler in a garage or a utility closet and flexible duct fanned out across the attic. Nothing in a house like that is worn out. The problems there were built in rather than aged in.',
          'The first is the attic itself. A Manatee County attic passes 120 degrees on a July afternoon while the duct inside it carries air at 55 degrees. A lot of that construction went in with R-6 flex, the outer jacket sags between the trusses over twenty years, and every sag is a low point where the air slows and dust settles out of it. If the bedroom at the far end of the house is always three or four degrees warmer than the thermostat, that is usually where it is happening rather than in the equipment.',
          'The second is what the builder left behind. Drywall dust, sawdust and insulation fibre get into open duct while the house is going up, and nobody takes them out, so a house that is only five years old can still be distributing the material it was built from. Families who move in east of the interstate and start noticing allergies within a season are usually reacting to that rather than to anything they brought with them.',
        ],
      },
      {
        heading: 'Palma Sola, the bay side, and what the Gulf adds',
        body: [
          'West of 75th Street the air changes. Palma Sola, the blocks off Cortez Road and everything running out toward Anna Maria Island sit in salt air, and salt does more indoors than most people expect. It reaches the outdoor condenser first, which you can see, and then it reaches the evaporator coil inside through every gap in the return path, which you cannot.',
          'A coil carrying a film of salt and dust transfers heat worse and stays wet longer between cycles, and staying wet longer is the whole mechanism behind a musty smell. That is the honest reason a house two blocks from the bay wants the coil looked at sooner than the same house in Braden Woods, and the difference is a year or two on the cycle rather than anything dramatic.',
          'Salt also takes the moving parts. Dampers, roof terminations and the flap on an exterior hood corrode until they stop closing, and a damper stuck open lets humid outside air sit in the duct all night. On the water side of Bradenton we check those before quoting anything, because a clean duct behind a seized damper fills straight back up.',
        ],
      },
    ],
    depthEs: [
      {
        heading: 'Por qué el ducto en Bradenton se ensucia más rápido de lo que debería',
        body: [
          'El condado de Manatee está entre el Golfo y los ríos Manatee y Braden, y el aire de aquí carga humedad casi todo el año. Adentro del ducto eso importa por una razón concreta: el aire que sale de la manejadora va frío, el ducto que lo lleva cruza un ático o un espacio bajo el piso que no lo está, y en esa diferencia de temperatura se forma condensación. El polvo que en seco pasaría de largo se pega a una superficie húmeda y se queda ahí.',
          'La vivienda de Bradenton empeora el asunto. Buena parte de West Bradenton, Bayshore Gardens y Samoset se levantó entre los años cincuenta y setenta, antes de que existieran las normas de aislamiento de hoy, y mucho de ese ducto original sigue trabajando. Un ducto flexible viejo, con la cubierta exterior ya degradada, suda bastante más que uno moderno.',
          'El efecto práctico es que una casa de Bradenton con el sistema original vuelve a mostrar polvo alrededor de las rejillas en un par de años, mientras que la misma casa con ducto sellado y aislado aguanta cinco. Si ve marcas grises en forma de abanico en el techo alrededor de una rejilla, eso no es polvo del cuarto asentándose. Es su ducto perdiendo aire frío hacia el ático y jalando aire del ático de regreso.',
        ],
      },
      {
        heading: 'Lo que más encontramos en las casas de aquí',
        body: [
          'Tres cosas salen más en Bradenton que en el resto de la costa del Golfo donde trabajamos. La primera es el retorno desconectado. En casas de esta época el camino de retorno muchas veces no es un ducto sellado sino la cavidad de la pared o el espacio entre viguetas, y en cuanto el panel que lo cerraba se afloja, el sistema empieza a jalar aire directo de la pared o de abajo de la casa.',
          'La segunda es moho en el serpentín de los sistemas que corren sin parar todo el verano. La humedad de Manatee mantiene el serpentín mojado, y un serpentín mojado, a oscuras y con polvo llegando todo el tiempo es donde el moho aparece primero, antes que en cualquier ducto.',
          'La tercera tiene que ver con el calendario. Muchas propiedades aquí se usan solo parte del año, y una casa cerrada cuatro meses con el termostato en 80 es una casa cuyo sistema nunca se seca. Quien regresa lo nota por el olor antes que por cualquier otra cosa, y casi siempre lo nota en los primeros diez minutos después de encender el aire.',
        ],
      },
      {
        heading: 'Al este de la I-75 la casa es otra y falla distinto',
        body: [
          'Braden River, Tara y el lado de Lakewood Ranch son la mitad nueva de lo que atendemos: casi todo construido de los años noventa en adelante, sobre losa, con la manejadora en el garaje o en un clóset de servicio y ducto flexible repartido por el ático. En una casa así nada está desgastado. Los problemas vienen de fábrica.',
          'El primero es el ático. Un ático en Manatee pasa de 120 grados una tarde de julio, y ahí adentro va el ducto que lleva aire a 55 grados. En mucha de esa construcción se usó ducto flexible R-6, la cubierta se descuelga entre las vigas con los años, y cada tramo colgado es un punto bajo donde el aire se frena y cae el polvo. Si el cuarto del extremo de la casa siempre está tres o cuatro grados más caliente que el termostato, casi siempre es eso y no el equipo.',
          'El segundo es lo que dejó la constructora. Polvo de drywall, aserrín y fibra de aislamiento entran al ducto abierto mientras se levanta la casa, y nadie los saca después. Una casa de cinco años puede seguir repartiendo el material con el que fue construida. Las familias que se mudan al este de la interestatal y en una temporada ya andan con alergias casi siempre están reaccionando a eso.',
        ],
      },
      {
        heading: 'Palma Sola, el lado de la bahía y lo que agrega el Golfo',
        body: [
          'Pasando la calle 75 el aire cambia. Palma Sola, las cuadras cerca de Cortez Road y todo lo que va hacia Anna Maria Island están en aire salino, y la sal hace más adentro de la casa de lo que la gente supone. Primero llega al condensador de afuera, que se ve, y después llega al serpentín de adentro por cualquier hueco del retorno, que no se ve.',
          'Un serpentín con una película de sal y polvo transfiere calor peor y se queda mojado más tiempo entre ciclos, y quedarse mojado más tiempo es todo el mecanismo detrás del olor a humedad. Esa es la razón honesta por la que una casa a dos cuadras de la bahía necesita revisión del serpentín antes que la misma casa en Braden Woods, y hablamos de un año o dos de diferencia en el ciclo, no de algo dramático.',
          'La sal también se come las piezas que se mueven. Las compuertas, las terminaciones de techo y la tapa de la ventila exterior se corroen hasta que dejan de cerrar, y una compuerta trabada abierta deja entrar aire húmedo de afuera al ducto toda la noche. Del lado del agua revisamos eso antes de cotizar, porque un ducto limpio detrás de una compuerta trabada se vuelve a llenar.',
        ],
      },
    ],
    neighborhoods: ['Palma Sola', 'Bayshore Gardens', 'West Bradenton', 'Village of the Arts', 'Braden River', 'Samoset', 'Downtown Bradenton', 'Braden Woods', 'Tara'],
    dryerVent: {
      local: [
        'Bradenton\'s housing skews older than the Gulf coast communities around it, and West Bradenton and Bayshore Gardens in particular are full of fifties and sixties single storey homes where the laundry sits in a carport, a utility room or the garage. Those are short vent runs, four to eight feet through an exterior wall, and short runs are the ones people assume are fine.',
        'They are usually not. A short run means the duct never gets warm enough along its whole length to keep moisture moving, so the last foot before the hood stays damp and lint sticks to it rather than passing through.',
        'Palma Sola and the properties nearer the bay add salt exposure, and Braden River on the east side is newer two storey construction with the long upstairs runs that come with it.',
      ],
      common: 'Exterior wall hoods on short runs where the last twelve inches have packed solid, which looks like nothing from inside the house.',
    },
  },
};

/** Detail for a city, or an empty record if none has been written yet. */
export function detailFor(slug: string): CityDetail {
  return cityDetail[slug] ?? { neighborhoods: [] };
}

/** Slugs that have a dedicated dryer vent page. Drives getStaticPaths. */
export const dryerVentCities = Object.keys(cityDetail).filter((s) => cityDetail[s].dryerVent);

/** Slugs that have a dedicated air duct repair page. Drives getStaticPaths. */
export const ductRepairCities = Object.keys(cityDetail).filter((s) => cityDetail[s].ductRepair);
