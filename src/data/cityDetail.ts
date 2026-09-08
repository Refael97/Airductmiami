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
    depthEs: [
      {
        heading: 'El aire salino y el serpentín que usted no ve',
        body: [
          'Miami Beach es casi todo edificio y no casa, desde los edificios de antes de la guerra cerca de Flamingo Park hasta las torres de los años cincuenta sobre Collins y la construcción nueva del extremo norte. En casi todos, la manejadora está en un clóset dentro del apartamento, el filtro queda detrás de una rejilla de retorno en el pasillo a pocos pies, y los tramos de ducto son cortos. Esa parte es sencilla. La que no lo es tiene que ver con el aire que entra, porque el edificio está sobre una barra de arena frente al Atlántico y el aire que pasa por ese retorno trae sal todas las horas del año.',
          'La sal sobre el serpentín es la parte que nadie ve. Un serpentín con una película de sal y polvo transfiere calor peor que uno limpio y se queda mojado más tiempo entre ciclos, y una superficie mojada, a oscuras y con polvo orgánico llegando sin parar es donde empieza el crecimiento. Ese es el mecanismo detrás del olor a encierro en los primeros diez minutos después de encender el aire, y es la razón por la que aquí el serpentín importa más que el ducto en la mayoría de los apartamentos.',
          'También es la razón honesta por la que un apartamento a dos cuadras del mar necesita revisión antes que el mismo apartamento en Kendall. Hablamos de un año o dos de diferencia en el ciclo, no de un servicio distinto.',
        ],
      },
      {
        heading: 'Edificios terminados antes de que existiera el aire central',
        body: [
          'Los edificios de Flamingo Park, Española Way y buena parte de South Beach se levantaron en los años veinte, treinta y cuarenta, cuando ninguno tenía aire acondicionado central. Todo sistema que hay ahí se instaló después, y el ducto se metió por el espacio que el edificio ya tenía: un plafón bajado sobre el pasillo, el fondo de un clóset, un registro que originalmente era para plomería. Encontramos con frecuencia un tramo de suministro por encima de los gabinetes de la cocina o detrás del plafón del baño, porque ese era el único camino.',
          'De ahí salen dos consecuencias. El instalador usó el diámetro que cabía en el registro y no el que el cuarto necesitaba, así que una recámara alimentada por un flexible de cinco pulgadas con dos codos cerrados nunca va a igualar a otra con un tramo recto de siete, sin importar dónde ponga el termostato. Y el ducto no se ve desde ningún cuarto, así que quien le diga por teléfono lo que hay adentro no lo ha mirado.',
          'Las torres de los cincuenta y sesenta sobre Collins e Indian Creek están mejor, porque ahí el ducto sí fue parte del diseño, pero casi todos esos apartamentos se han remodelado por lo menos una vez. La remodelación cambia cocina, baños y casi siempre la manejadora, y deja la distribución donde estaba. Una manejadora de dos años conectada a ducto de una remodelación de los ochenta es un hallazgo normal aquí.',
        ],
      },
      {
        heading: 'El apartamento cerrado en verano, y lo que pide la asociación',
        body: [
          'Muchos apartamentos de Miami Beach se ocupan solo parte del año. La instrucción de siempre para quien los cuida es dejar el termostato en 80 grados, y en 80 el equipo casi no enciende. Un equipo que casi no enciende no le quita agua al aire, así que un apartamento cerrado puede pasar de mayo a noviembre en 80 grados con la humedad interior cerca del 70 por ciento. Quien regresa en noviembre lo cuenta igual todas las veces: todo está tal como lo dejó y huele a cerrado los primeros diez minutos.',
          'Lo que evita que se repita no es una limpieza más fuerte sino el ajuste. Un termostato con control de humedad, o un deshumidificador pequeño conectado a un drenaje, mantiene el apartamento entre 55 y 60 por ciento por una fracción de lo que cuesta dejar el aire en 74 todo el verano.',
          'La otra parte propia de Miami Beach es el edificio. Casi todas las asociaciones piden certificado de seguro antes de que alguien trabaje adentro, que se reserve el elevador de servicio, y que el trabajo se haga entre semana dentro de un horario, y eso lo arreglamos nosotros con la administración. Conviene además saber dónde termina lo suyo: la manejadora, el ducto dentro de sus paredes y su techo, la rejilla del filtro y la línea de drenaje son suyos; un tiro vertical que cruza varios pisos o un equipo en la azotea son de la asociación. Si todos los apartamentos de su columna se quejan de lo mismo, el problema no está en su clóset.',
        ],
      },
    ],
    depth: [
      {
        heading: 'Oceanfront buildings and the salt that reaches the coil',
        body: [
          'Miami Beach is almost entirely apartments rather than houses, from the prewar walk ups around Flamingo Park to the midcentury towers along Collins and the newer construction at the north end. In nearly all of them the air handler sits in a closet inside the unit, the filter is behind a return grille in the hallway a few feet away, and the supply runs are short. That part is straightforward. The part that is not is where the air comes from, because the building sits on a barrier island and the air moving through that return carries salt every hour of the year.',
          'Salt on the evaporator coil is the piece owners never see. A coil carrying a film of salt and dust transfers heat worse than a clean one and stays wet longer between cycles, and a wet surface in the dark with organic dust arriving steadily is where growth starts. That is the mechanism behind the smell in the first ten minutes after the air conditioning comes on, and it is why the coil matters more than the duct in most Miami Beach units.',
          'It is also the honest reason a unit two blocks from the ocean wants attention sooner than an identical unit in Kendall. The difference is a year or two on the cycle rather than a different service.',
        ],
      },
      {
        heading: 'Buildings that were finished before central air existed',
        body: [
          'The buildings around Flamingo Park, Espanola Way and much of South Beach went up in the twenties, thirties and forties, before any of them had central air conditioning. Every system in those buildings was fitted afterwards, and the duct was routed through whatever space the building already had: a dropped soffit over a hallway, the back of a closet, a chase originally cut for plumbing. We regularly find a supply run above kitchen cabinets or behind a bathroom soffit because that was the only path available.',
          'Two things follow from that. The installer used the duct size that fit the chase rather than the size the room needed, so a bedroom fed by a five inch flex run through two tight bends will never keep up with one fed by a straight seven inch run, whatever the thermostat is set to. And the duct is not visible from any room, so anyone who tells you over the phone what is inside it has not looked.',
          'The midcentury towers on Collins and Indian Creek are a step better, since ducting was part of the design, but most of those units have been gutted at least once since. A renovation replaces the kitchen, the bathrooms and usually the air handler, and leaves the distribution where it is. A two year old air handler connected to duct from an early eighties remodel is a normal find here.',
        ],
      },
      {
        heading: 'Seasonal owners, association rules and how the work gets scheduled',
        body: [
          'A large share of Miami Beach units are lived in for part of the year. The standing instruction to whoever checks on the place is to leave the thermostat at 80 degrees, and at 80 the system barely runs. A system that barely runs removes very little water from the air, so a closed unit can sit from May to November at 80 degrees with the indoor humidity near 70 percent. Owners coming back in November describe it the same way every time: the place looks exactly as they left it and it smells closed up for the first ten minutes.',
          'What stops that happening again is the setting rather than a harder cleaning. A thermostat with a humidity control, or a small dehumidifier plumbed to a drain, holds the unit between 55 and 60 percent for a fraction of what it costs to run the air conditioning at 74 all summer.',
          'The other Miami Beach specific part is the building itself. Most associations want a certificate of insurance on file before anyone works in a unit, the service elevator reserved, and the work done on a weekday inside set hours, and we handle that with the management office. It is also worth knowing where your system stops. The air handler, the duct inside your walls and ceiling, the filter grille and the drain line are yours, while a riser crossing several floors or equipment on the roof belongs to the association. If every unit on your stack has the same complaint, the problem is not in your closet.',
        ],
      },
    ],
    dryerVent: {
      local: [
        'Almost every dryer on Miami Beach is in a building rather than a house, which means the run behind your machine joins a riser serving the units above and below you. When that riser loads up, every apartment on the stack starts drying slowly at once, and cleaning your own six feet changes nothing.',
        'The oceanfront position makes the terminations worse than anywhere inland. Salt corrodes roof stacks and damper flaps quickly, and a damper stuck open lets humid Atlantic air sit in the duct all night.',
      ],
      common: 'A crushed transition hose in a laundry closet built to the minimum dimension, combined with a riser the association has not touched in years.',
    },
    neighborhoods: ['South Beach', 'Mid-Beach', 'North Beach', 'Sunset Islands', 'Venetian Islands', 'South of Fifth', 'Flamingo Park', 'Normandy Isles', 'Bayshore'],
  },
  hialeah: {
    depth: [
      {
        heading: 'One return for a house that has been added onto twice',
        body: [
          'Most of Hialeah was built between the early fifties and the late seventies, single storey, on slab, and the original plans were small. Two bedrooms, one bathroom, eleven or twelve hundred square feet, and one central return in the hallway sized for exactly that. Over the fifty years since, the Florida room got enclosed, the carport or garage became a bedroom, and a room went on the back. Every one of those rooms got a supply run off the existing trunk, and none of them got a return.',
          'The result is a system trying to serve thirty or forty percent more house on the return it started with. You can usually hear it before anyone measures it: the added rooms never quite cool, interior doors pull themselves shut when the system starts, the return grille whistles, and the filter goes dark in three weeks instead of eight. None of that is the equipment failing. It is a system starved of the air it needs to move.',
          'This is worth checking before anybody sells you a bigger unit. A larger air handler pushing through the same undersized return moves less air rather than more, and it short cycles on top of it. We measure what the registers are actually delivering and tell you whether the fix is the duct, the return, or nothing at all.',
        ],
      },
      {
        heading: 'The added room and the duct that was run to it',
        body: [
          'The supply serving a converted garage or an enclosed porch is almost always the newest and the cheapest part of the system. It is usually flexible duct, usually undersized, usually longer than it needed to be because it had to get around whatever was already there, and it often runs above a dropped ceiling or along the roof line rather than through conditioned space.',
          'Flex duct in that position sags between supports, and every sag is both a restriction and a low point where dust settles out of the moving air. We find runs crushed flat where they pass a truss, runs with the inner liner pulled loose from the collar so half the air is blowing into the ceiling cavity, and runs that were simply laid on top of a ceiling tile grid. From inside the room all of those look identical: a register that barely moves a sheet of paper held up to it.',
          'When the room nobody can cool is the room that was added, the duct is where to look first, and it is usually correctable without touching the equipment at all.',
        ],
      },
      {
        heading: 'A full house, cooking every day, and a coil that never dries out',
        body: [
          'Plenty of Hialeah homes hold more people than the plan was drawn for, which is not a problem in itself, but it changes the load on the system. More occupants means cooking most nights, laundry most days and more showers, and every one of those puts water into the air. In a small single storey house the return grille is usually in the hallway a few steps from the kitchen, so cooking grease reaches the filter and then the coil far faster than it would in a larger house.',
          'A coil with a greasy film on it holds dust instead of shedding it, and it stays wet longer between cycles. Wet, dark, coated, with a steady supply of organic dust arriving: that is a description of the conditions mold needs, and it is why the musty smell when the air conditioning starts is the most common call we take in this city.',
          'Cleaning the coil and the drain pan removes what is there. Holding the indoor humidity under 60 percent, and getting enough return air back to the equipment, is what keeps it from coming back. A stronger air freshener covers the smell for a week and changes nothing underneath it.',
        ],
      },
    ],
    depthEs: [
      {
        heading: 'Un solo retorno para una casa que creció dos veces',
        body: [
          'Casi toda Hialeah se construyó entre principios de los cincuenta y finales de los setenta: una sola planta, sobre losa, y con planos chicos. Dos recámaras, un baño, mil doscientos pies cuadrados, y un solo retorno en el pasillo dimensionado justo para eso. En los cincuenta años siguientes se cerró el Florida room, la cochera o el garaje se volvió recámara, y se agregó un cuarto atrás. Cada uno de esos cuartos recibió una salida de aire colgada del tronco que ya existía, y ninguno recibió retorno.',
          'El resultado es un sistema que intenta servir treinta o cuarenta por ciento más casa con el retorno con el que empezó. Se oye antes de medirlo: los cuartos agregados nunca enfrían bien, las puertas interiores se cierran solas cuando arranca el equipo, la rejilla de retorno chifla, y el filtro se pone negro en tres semanas en lugar de ocho. Nada de eso es el equipo fallando. Es un sistema al que le falta aire.',
          'Vale la pena revisarlo antes de que alguien le venda una unidad más grande. Una manejadora más grande empujando por el mismo retorno chico mueve menos aire, no más, y encima prende y apaga a cada rato. Medimos lo que están entregando las rejillas y le decimos si el arreglo es el ducto, el retorno, o ninguno de los dos.',
        ],
      },
      {
        heading: 'El cuarto agregado y el ducto que le llegó',
        body: [
          'La salida que alimenta un garaje convertido o un porche cerrado casi siempre es la parte más nueva y más barata del sistema. Normalmente es ducto flexible, normalmente de menos diámetro del que tocaba, más largo de lo necesario porque tuvo que rodear lo que ya estaba, y muchas veces va por encima de un plafón o pegado al techo en lugar de cruzar espacio con aire acondicionado.',
          'Un flexible en esa posición se descuelga entre apoyos, y cada tramo colgado es a la vez una restricción y un punto bajo donde el polvo se cae del aire. Encontramos tramos aplastados donde pasan una viga, tramos con el forro interior desprendido del collarín, de manera que la mitad del aire se va al plafón, y tramos que simplemente acostaron sobre la rejilla del cielo falso. Desde adentro del cuarto todos se ven igual: una rejilla que apenas mueve la hoja de papel que usted le pone enfrente.',
          'Cuando el cuarto que nadie logra enfriar es justo el que se agregó, el ducto es lo primero que hay que mirar, y casi siempre se corrige sin tocar el equipo.',
        ],
      },
      {
        heading: 'Casa llena, cocina todos los días, y un serpentín que no se seca',
        body: [
          'En muchas casas de Hialeah vive más gente de la que suponía el plano, y eso cambia la carga del sistema. Más personas es más cocina, lavadora casi a diario y más baños, y todo eso mete agua al aire. En una casa de una planta el retorno casi siempre queda en el pasillo a unos pasos de la cocina, así que la grasa de cocinar llega al filtro y después al serpentín mucho más rápido que en una casa grande.',
          'Un serpentín con película de grasa retiene el polvo en lugar de soltarlo, y se queda mojado más tiempo entre ciclos. Mojado, a oscuras, cubierto y con polvo orgánico llegando todo el día: esa es la descripción de las condiciones donde crece el moho, y es la razón por la que el olor a humedad al encender el aire es la llamada más común que recibimos en esta ciudad.',
          'Limpiar el serpentín y la bandeja quita lo que ya está. Mantener la humedad de la casa por debajo de 60 por ciento, y devolverle al equipo suficiente aire de retorno, es lo que evita que regrese. Un aromatizante más fuerte tapa el olor una semana y no cambia nada de fondo.',
        ],
      },
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
    neighborhoods: ['West Hialeah', 'East Hialeah', 'Palm Springs North', 'Amelia', 'Hialeah Acres', 'Westland', 'Milander'],
    dryerVent: {
      local: [
        'A large share of Hialeah housing was built between the late sixties and the early eighties, and the laundry hookups in those homes were often placed on an interior wall rather than an exterior one. That single decision turns what should be a four foot vent run into twenty or thirty feet with two or three elbows, and every elbow is a place lint stops moving.',
        'The multi family stock adds a second issue. Where a duplex or a small apartment building shares a wall between two laundry closets, the two vents frequently join before they exit, so one neighbour\'s blockage becomes yours.',
      ],
      common: 'Long interior runs with flexible foil duct instead of rigid metal, which sags between supports and collects lint in the low spots.',
    },
  },
  'coral-gables': {
    depthEs: [
      {
        heading: 'Meterle ductos a una casa que nunca los tuvo',
        body: [
          'Las casas de estilo mediterráneo que le dan carácter a Coral Gables se construyeron en los años veinte y treinta, con muros de mampostería, acabados de yeso, teja de barro y muy poco ático. Ninguna se construyó con ductos, porque el aire acondicionado central todavía no existía. Todo sistema en una casa de esa época se instaló décadas después, y el ducto se metió por donde había lugar: un plafón bajado sobre el pasillo, el fondo de un clóset, un registro levantado en la esquina de una recámara, a veces un ático con treinta pulgadas de altura en la cumbrera.',
          'De ahí salen dos cosas. La primera es que el instalador usó el diámetro que cabía en el registro y no el que el cuarto pedía, así que los cuartos al final de un tramo apretado llevan tres o cuatro grados de diferencia desde el día en que se instaló el sistema. La segunda es que buena parte del sistema está detrás del yeso. Limpiamos por las rejillas y por el plenum con el sistema bajo succión, y cuando un tramo no se puede alcanzar sin abrir un techo se lo decimos, en lugar de cobrarle la casa completa.',
          'La mitad nueva de la ciudad se comporta distinto. Las cuadras de posguerra cerca de Riviera y Coral Bay, y las casas frente al agua rumbo a Gables by the Sea, son de losa con ducto flexible en ático ventilado, y sus problemas son los normales del sur de Florida: el flexible descolgado, el calor del ático y un retorno dimensionado para el plano y no para cómo se vive la casa.',
        ],
      },
      {
        heading: 'Lo que los árboles le meten al retorno',
        body: [
          'Coral Gables tiene una de las coberturas de árboles más densas de Miami-Dade, y ese follaje es la razón por la que el aire de afuera aquí carga más material orgánico que el de una milla más allá. Polen de roble en primavera, semilla y hoja seca casi todo el año, y sombra que mantiene el suelo húmedo, lo que sostiene el conteo de esporas más alto que sobre una calle abierta.',
          'En una casa sellada eso importaría poco, y una casa de 1926 no está sellada. Las ventanas originales, los huecos donde un registro de ducto atraviesa un muro de yeso, y un camino de retorno que jala parte de su aire por la construcción y no por la rejilla del filtro hacen que toda esa carga llegue al serpentín. Por eso un filtro de una pulgada en una casa del Gables se satura en seis semanas durante la primavera, y por eso encontramos serpentines sucios en casas donde el dueño cambia el filtro religiosamente.',
          'Cuando el filtro se satura, el sistema no deja de jalar. Jala por los lados, por los huecos del marco de la rejilla, y ese aire entra sin filtrar y va directo a un serpentín mojado. Un filtro bien ajustado, de un grado que el equipo sí pueda respirar, sirve más en una casa del Gables que uno de mayor rango que lo ahogue.',
        ],
      },
      {
        heading: 'Casas con dos o tres sistemas, y lo que la ciudad espera ver',
        body: [
          'Muchas casas de Coral Gables, sobre todo en Ponce Davis, Old Cutler y Cocoplum, son lo bastante grandes para trabajar con dos o tres sistemas independientes, uno por ala o por piso. Cada uno es un trabajo completo con su serpentín, su filtro, su drenaje y su ducto, y limpiar uno solo le resuelve una tercera parte de la casa. Cotizamos por sistema y no por casa, y le decimos cuál es el que está dando el problema, que casi siempre es el que sirve la cocina y la sala.',
          'El ala que nadie usa falla al revés. Un sistema que casi no enciende casi no deshumidifica, así que un ala de visitas cerrada puede pasar el verano de Miami en 65 o 70 por ciento de humedad relativa, con un serpentín que se ve limpio y sin uso y que por dentro va creciendo. Es un hallazgo común en las casas grandes de aquí y no se nota hasta que alguien abre esa puerta en noviembre.',
          'La última parte propia del Gables es la ciudad. Aquí los cambios exteriores se revisan con más cuidado que en el resto del condado, así que una terminación nueva en el techo, una ventila en una fachada que da a la calle o cualquier cosa que cambie el aspecto del edificio es primero un asunto de permisos y después un asunto de ductos. Mantenemos el trabajo por dentro cuando se puede, y cuando algo de verdad tiene que pasar por la ciudad se lo decimos antes de empezar y no después.',
        ],
      },
    ],
    depth: [
      {
        heading: 'Ducting a house that was built without any',
        body: [
          'The Mediterranean revival houses that give Coral Gables its character were built in the twenties and thirties, with masonry walls, plaster interiors, barrel tile roofs and very little attic. None of them were built with ductwork, because central air conditioning did not exist yet. Every system in a house of that era was fitted decades later, and the duct went wherever there was room: a dropped soffit over a hallway, the back of a closet, a chase built out into the corner of a bedroom, occasionally an attic with thirty inches of clearance at the ridge.',
          'Two things follow. The first is that the installer used the duct size that fit the chase rather than the size the room called for, so the rooms at the end of a tight run have been three or four degrees off since the day the system went in. The second is that a good part of the system sits behind plaster. We clean through the registers and the plenum with the system under negative pressure, and where a run cannot be reached without opening a ceiling we say so rather than telling you the whole house was done.',
          'The newer half of the city behaves differently. The post war blocks near Riviera and Coral Bay and the waterfront builds out toward Gables by the Sea are slab on grade with flexible duct in a vented attic, and their problems are the ordinary South Florida ones: sag, attic heat, and a return sized to the plan rather than to the way the house is lived in.',
        ],
      },
      {
        heading: 'What the canopy puts into the return',
        body: [
          'Coral Gables has one of the densest tree canopies in Miami-Dade, and that canopy is why the outdoor air here carries more organic material than the air a mile away. Oak pollen in spring, seed and leaf debris most of the year, and shade that keeps the ground damp, which keeps mold spore counts in outdoor air higher than they are over open pavement.',
          'That would matter little in a sealed house, and a 1926 house is not sealed. Original casement windows, gaps where a duct chase passes through a plaster wall, and a return path that draws part of its air through the building rather than through the filter grille all mean the outdoor load reaches the coil. It is why a one inch filter in a Gables house can load in six weeks through the spring, and why we find dirty coils in houses where the owner changes filters religiously.',
          'When a filter loads, the system does not stop pulling. It pulls around the filter through the gaps in the grille frame, and that air is unfiltered and going straight onto a wet coil. A tight fitting filter of a grade the system can actually breathe through does more for a Gables house than a higher rated one that starves it.',
        ],
      },
      {
        heading: 'Two and three system houses, and what the city expects to see',
        body: [
          'A lot of Coral Gables houses, particularly in Ponce Davis, Old Cutler and Cocoplum, are large enough to run on two or three separate systems, one per wing or floor. Each of those is a complete job in its own right with its own coil, filter, drain line and duct, and cleaning one of them gives you a third of a result. We quote per system rather than per house and tell you which one is actually causing the complaint, which is usually the one serving the kitchen and the main living space.',
          'The wing nobody uses fails the opposite way. A system that hardly runs hardly dehumidifies, so a closed guest wing can sit through a Miami summer at 65 or 70 percent relative humidity with a coil that looks clean and unused and is quietly growing. That is a common find in the larger houses here and it stays invisible until somebody opens the door in November.',
          'The last Coral Gables specific thing is the city. Exterior changes here are looked at more closely than in most of the county, so a new roof termination, a vent hood on an elevation facing the street, or anything else that alters how the building reads is a permitting question before it is a duct question. We keep the work inside the building where it can be kept inside, and when something genuinely needs to go through the city we say so before we start rather than after.',
        ],
      },
    ],
    neighborhoods: ['Coral Gables Riviera', 'Old Cutler', 'Ponce Davis', 'Coral Bay', 'Golden Gate', 'Cocoplum', 'Gables by the Sea'],
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
    depth: [
      {
        heading: 'Rebuilt after 1992, which is why the systems are younger than the streets',
        body: [
          'Hurricane Andrew crossed south Miami-Dade in August 1992 and took a great deal of Homestead with it. Much of what stands here now was built from 1993 onward, under a code written in response to what happened, which is why the city reads older on a map than it does on the ground. In practical terms that means slab construction, an air handler in a garage or a utility closet, and flexible duct fanned out across a vented attic.',
          'Nothing in a house like that is worn out. The problems were built in rather than aged in, and attic heat is the main one. A Homestead attic passes 120 degrees on a July afternoon while the duct inside it carries air at around 55 degrees, and twenty five years of that cycle leaves the outer jacket sagging between the trusses. Every sag slows the air and drops dust out of it.',
          'The rebuilt houses are also tighter than the ones they replaced. A tight house recirculates the same air more times before any of it leaves, so whatever is living in the duct system stays in the house instead of being diluted by leakage. That is good for the power bill and it is a reason to care what is inside the duct.',
        ],
      },
      {
        heading: 'Field dust from the Redland is not house dust',
        body: [
          'Homestead sits at the edge of the largest block of farmland left in Miami-Dade. West and south of the city the Redland is under nursery, row crop and grove, and the ground there is worked, disced and irrigated year round. Fine soil dust and seasonal pollen travel a long way on the wind, and they arrive in volumes a house in the middle of the county never sees.',
          'Inside a house that shows up in three places. Filters load faster, sometimes at half the interval that works elsewhere in the county. Fine mineral dust settles on the evaporator coil, where it holds moisture against the fins instead of letting them dry between cycles. And the visible dust is back on furniture within days of cleaning, which is the part families notice first and usually blame on their own housekeeping.',
          'None of that is solved by cleaning more often inside the house. It is solved at the filter grille and at the coil, and by making sure the return is pulling through the filter rather than around it.',
        ],
      },
      {
        heading: 'Keys Gate, Waterstone and the first five years of a new house',
        body: [
          'Keys Gate, Malibu Bay, Waterstone and the subdivisions around them are the newer end of Homestead, and new construction has one duct problem that older houses do not. Drywall dust, sawdust, insulation fibre and the cut ends of flexible duct get into open ductwork while the house is going up, and nothing removes them before the family moves in. The first full cooling season distributes all of it.',
          'That is why a two year old house can have a dirtier duct system than a thirty year old one, and why families who move into a new build and start reacting to something within a season are usually reacting to the house rather than to anything they brought with them.',
          'The second thing about these subdivisions is the return. Builder plans of this era commonly run one or two large central returns in a hallway and rely on the gap under bedroom doors to get the air back. Everyone closes bedroom doors at night, and half an inch of undercut is not a return, so the room the family sleeps in is the room fighting the system. If one bedroom is always warmer and stuffier with the door shut, that is the return path, not the equipment.',
        ],
      },
    ],
    depthEs: [
      {
        heading: 'Reconstruida después de 1992, y por eso los sistemas son más nuevos que las calles',
        body: [
          'El huracán Andrew cruzó el sur de Miami-Dade en agosto de 1992 y se llevó buena parte de Homestead. Mucho de lo que hoy está en pie se construyó de 1993 en adelante, bajo un código escrito en respuesta a lo que pasó, y por eso la ciudad se ve más vieja en el mapa que en la calle. En términos prácticos eso significa construcción sobre losa, manejadora en el garaje o en un clóset de servicio, y ducto flexible repartido por un ático ventilado.',
          'En una casa así nada está desgastado. Los problemas vienen de fábrica, y el principal es el calor del ático. Un ático de Homestead pasa de 120 grados una tarde de julio mientras el ducto que va adentro lleva aire a unos 55 grados, y veinticinco años de ese ciclo dejan la cubierta exterior descolgada entre las vigas. Cada tramo colgado frena el aire y le tira el polvo encima.',
          'Las casas reconstruidas además están mejor selladas que las que reemplazaron. Una casa bien sellada recircula el mismo aire más veces antes de que salga, así que lo que vive dentro del ducto se queda en la casa en lugar de diluirse. Eso es bueno para el recibo de la luz y es una razón para saber qué hay adentro del ducto.',
        ],
      },
      {
        heading: 'El retorno del constructor y la puerta que todos cierran',
        body: [
          'Los planos de esta época casi siempre ponen uno o dos retornos grandes en el pasillo y confían en el espacio debajo de las puertas para que el aire de las recámaras regrese al equipo. Media pulgada de holgura no es un retorno.',
          'Con la puerta cerrada de noche, que es como duerme todo el mundo, esa recámara trabaja contra una restricción justo en las horas en que la familia está adentro. El cuarto se queda dos o tres grados arriba, se siente pesado, y el dueño concluye que el equipo quedó chico.',
          'Antes de cambiar equipo conviene revisar tres cosas: si las salidas de ese cuarto están abiertas y sin aplastar, si existe alguna vía real de retorno, y si el tramo que lo alimenta sigue conectado allá arriba en el ático. Casi siempre la respuesta está en una de esas tres y no en la unidad.',
        ],
      },
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
    neighborhoods: ['Keys Gate', 'Silver Palm', 'Malibu Bay', 'Waterstone', 'Downtown Homestead', 'The Villages of Homestead', 'Redland'],
  },
  pinecrest: {
    depthEs: [
      {
        heading: 'Una casa, dos o tres sistemas',
        body: [
          'Los lotes de Pinecrest son grandes y las casas se extienden a lo ancho en lugar de crecer hacia arriba, y por eso muchas trabajan con dos o hasta tres sistemas de aire independientes en lugar de uno. Cada sistema tiene su manejadora, su serpentín, su filtro, su línea de drenaje y su ducto, y casi siempre son de edades distintas porque se fueron cambiando en años distintos.',
          'Eso importa a la hora de agendar el trabajo. Limpiar un sistema en una casa que tiene tres le resuelve una tercera parte de la casa, y el olor o el polvo casi siempre vienen de un sistema en particular y no de los tres. Recorremos la casa primero, vemos cuántos hay y cuál está cargando el trabajo, y los cotizamos por separado para que usted haga el que importa ahora y los demás después si quiere.',
          'El que carga el trabajo casi siempre es el que sirve la cocina y el área social, porque ahí están la humedad y la grasa de cocinar, y ahí es donde se abre la puerta al patio.',
        ],
      },
      {
        heading: 'El sistema del ala que nadie usa',
        body: [
          'El otro lado de una casa con varios sistemas es el sistema que casi no trabaja. Un ala de visitas, un segundo piso cerrado, una casita de piscina o una oficina que se usa dos veces por semana tienen el termostato alto y una manejadora que enciende unos minutos al día.',
          'Un sistema que casi no enciende casi no deshumidifica. Esa parte de la casa puede pasar el verano de Miami-Dade en 65 o 70 por ciento de humedad relativa, con un serpentín que se ve limpio y sin uso, y un serpentín a esa humedad y a oscuras cría lo mismo que uno que trabaja duro, solo que más despacio y sin nadie en el cuarto que lo huela. La primera señal suele ser alguien que abre esa puerta en noviembre y da un paso atrás.',
          'Ahí la solución es un ajuste antes que un servicio. Poner ese sistema a ciclar con un horario, o instalarle un humidistato, mantiene el espacio por debajo de 60 por ciento. Limpiamos lo que ya creció y le decimos en qué dejarlo, para que esa misma ala no sea el mismo problema el año que entra.',
        ],
      },
      {
        heading: 'Árboles grandes, tramos largos y la recámara del fondo',
        body: [
          'Pinecrest tiene sombra densa en casi todas sus calles, y esa vegetación mete polen, pedazos de hoja y semilla al aire de afuera de forma continua. Parte de eso llega al serpentín por el camino de retorno y parte cae sobre la unidad exterior, donde a un condensador bajo un roble se le llenan las aletas de basura vegetal y transfiere calor peor. Un condensador que transfiere calor peor obliga al sistema a correr más horas, y un sistema que corre más horas pasa más aire por cada superficie del ducto.',
          'El plano de la casa pone la otra mitad. Una casa ancha de una sola planta deja la recámara más lejana a sesenta pies o más de ducto horizontal en el ático, y a esa distancia las pérdidas se suman: el tramo tiene fugas en el camino, el aislamiento trabaja contra una diferencia de setenta grados todo el trayecto, y el aire que llega a la última rejilla no se parece al que salió del plenum.',
          'El dueño lee eso como un equipo chico y cambia una unidad que estaba bien. Antes de que alguien le cotice equipo nuevo conviene medir lo que esa rejilla está entregando de verdad, porque con frecuencia la respuesta es un ducto que se desconectó en el ático donde nadie mira.',
        ],
      },
    ],
    depth: [
      {
        heading: 'One house, two or three systems',
        body: [
          'Pinecrest lots run large and the houses on them spread out rather than up, which is why so many of them are on two or even three separate air conditioning systems instead of one. Each system has its own air handler, its own coil, its own filter, its own drain line and its own duct, and they are usually of different ages because they were replaced at different times.',
          'That matters when you are booking work. Cleaning one system in a three system house gives you a third of a house, and the smell or the dust complaint is nearly always coming from one particular system rather than all of them. We walk the house first, find how many there are and which one is doing the work, and quote them separately so you can do the one that matters now and the others later if you want to.',
          'The one carrying the load is almost always the system serving the kitchen and the main living space, because that is where the moisture and the cooking grease are and where the doors to the patio open.',
        ],
      },
      {
        heading: 'The system in the wing nobody uses',
        body: [
          'The other side of a multiple system house is the system that hardly runs. A guest wing, a second floor that is closed off, a pool house or an office used twice a week has a thermostat set high and an air handler that comes on for a few minutes a day.',
          'A system that hardly runs hardly dehumidifies. That part of the house can sit through a Miami-Dade summer at 65 or 70 percent relative humidity with a coil that looks clean and unused, and a coil held at that humidity in the dark grows the same thing a hard working one does, just more slowly and with nobody in the room to smell it. The first sign is usually somebody opening that door in November and stepping back.',
          'The fix there is a setting rather than a service. Running that system on a schedule so it cycles properly, or putting a humidistat on it, holds the space under 60 percent. We clean out what has grown and tell you what to leave it on, so the same wing is not the same problem next year.',
        ],
      },
      {
        heading: 'Big trees, long runs and the bedroom at the far end',
        body: [
          'Pinecrest has heavy tree cover on most of its streets, and the canopy puts a continuous load of pollen, leaf fragments and seed debris into the outdoor air. Some of that reaches the coil through the return path and some lands on the outdoor unit, where a condenser sitting under an oak packs its fins with debris and rejects heat worse. A condenser rejecting heat worse makes the system run longer, and a system running longer pulls more air past every surface inside the duct.',
          'The layout supplies the other half. A wide single storey house puts the furthest bedroom sixty feet or more of horizontal attic run from the air handler, and at that length the losses compound. The run leaks along its way, the insulation is working against a seventy degree gradient the whole distance, and the air arriving at the last register is nothing like the air that left the plenum.',
          'Owners read that as an undersized system and replace equipment that was fine. Before anyone quotes you a new unit it is worth measuring what the far register is actually delivering, because the answer is frequently a run that came apart in the attic where nobody looks.',
        ],
      },
    ],
    ductRepair: {
      local: [
        'Pinecrest houses sit on large lots and are wide rather than tall, which produces the run nobody wants: long, horizontal, in the attic, with the furthest bedroom sixty feet or more from the air handler.',
        'At that length the losses compound. The run leaks, the insulation is working against a 75 degree gradient the whole way, and the air arriving at the far register is nothing like the air that left. Homeowners read that as an undersized system and replace equipment that was fine.',
      ],
      common: 'Long horizontal attic runs sagging between joists, where every low point is both a restriction and a place condensation collects.',
    },
    neighborhoods: ['Pinecrest Village', 'Suniland', 'Evergreen', 'High Pines', 'Devonwood', 'Coral Pine'],
  },
  'north-miami': {
    depthEs: [
      {
        heading: 'Casas de los cincuenta y sesenta, con el ducto de esa época',
        body: [
          'El corazón de North Miami, Griffing Park, Sunkist Grove, Arch Creek y las cuadras de alrededor, se levantó en los años cincuenta y sesenta: una sola planta, sobre losa, pisos de terrazo y un ático bajo debajo de un techo de poca pendiente. El aire central llegó a esas casas con la obra o poco después, así que buena parte de North Miami sigue trabajando con una distribución que ya tiene sesenta años.',
          'Dos cosas de esa época salen todo el tiempo. La primera es el ducto rígido de fibra de vidrio, usado para plenums y a veces para troncos completos, que funciona bien mientras está entero y suelta fibra por los bordes cortados cuando la superficie ya se erosionó. La segunda es el tamaño del retorno. Un solo retorno central en el pasillo era el estándar, y ese estándar se dibujó para una casa con menos aparatos, menos gente y mucha más infiltración natural de la que tiene la misma casa hoy, después de ventanas nuevas y techo nuevo.',
          'Esa combinación, una distribución vieja dentro de una casa que se apretó alrededor de ella, es la razón por la que tantas casas de North Miami tienen una manejadora nueva y eficiente y ninguna mejora en confort. El equipo nunca fue el límite.',
        ],
      },
      {
        heading: 'Keystone Point, Arch Creek y lo que agrega el agua',
        body: [
          'North Miami baja hasta la bahía de Biscayne, y mientras más cerca del agua está la casa, más húmedo y más salino es el aire con el que trabaja su sistema. Keystone Point, las cuadras de Sans Souci y las propiedades sobre Arch Creek son el caso más claro. La humedad junto al agua abierta es medible y más alta que una milla tierra adentro, y sube de noche cuando baja la temperatura.',
          'Para un ducto, las horas que importan son las que el aire está apagado. Las superficies del ducto siguen frías después de un día de trabajo, les llega aire tibio y húmedo, y sudan. El polvo que en seco habría pasado de largo se pega a una superficie mojada y ahí se queda. Es la misma razón por la que en la costa aparecen marcas grises alrededor de las rejillas antes que tierra adentro.',
          'La sal hace el resto. Llega primero al condensador de afuera, que se ve, y después al serpentín de adentro por cualquier hueco del retorno, que no se ve. Las compuertas y las terminaciones de techo se corroen hasta que dejan de cerrar, y una compuerta trabada abierta deja el ducto conectado al aire de afuera toda la noche.',
        ],
      },
      {
        heading: 'Dúplex, edificios chicos y casas de renta',
        body: [
          'Buena parte de la vivienda de North Miami son dúplex, edificios pequeños de apartamentos y casas que se rentan en lugar de habitarlas el dueño, y eso cambia lo que encontramos. El filtro se cambia cuando alguien se acuerda, el sistema lo usa quien vive ahí y lo paga alguien más, y nadie ha subido al ático en años.',
          'Para el propietario lo útil es saber qué sí hay que hacer entre un inquilino y otro. El serpentín y la bandeja de drenaje son donde vive el olor, y son justo lo que una mano de pintura no toca. Una bandeja tapada o con biopelícula es además la causa más común de que el sistema se apague solo por el flotador y de que la llamada de emergencia caiga en pleno agosto.',
          'Para el inquilino vale la pena saber que un olor a humedad al arrancar no se limpia desde el cuarto. Es una superficie mojada más arriba de la rejilla, y eso es una reparación del propietario y no un asunto de limpieza de la casa.',
        ],
      },
    ],
    depth: [
      {
        heading: 'Fifties and sixties houses, with the ducting of that era',
        body: [
          'The core of North Miami, Griffing Park, Sunkist Grove, Arch Creek and the blocks around them, went up in the fifties and sixties: single storey, slab on grade, terrazzo floors and a shallow attic under a low pitched roof. Central air reached those houses either with the build or shortly after, which means a great deal of North Miami is still running distribution that is now sixty years old.',
          'Two things from that era come up constantly. The first is fibreglass duct board, used for plenums and sometimes for whole trunks, which is fine while it is intact and sheds fibre from its cut edges once the surface has eroded. The second is the size of the return. One central hallway return was the standard, and that standard was drawn for a house with fewer appliances, fewer occupants and a great deal more natural leakage than the same house has now after new windows and a new roof.',
          'That combination, old distribution inside a house that has been tightened around it, is why so many North Miami homes have a new efficient air handler and no improvement in comfort. The equipment was never the limit.',
        ],
      },
      {
        heading: 'Keystone Point, Arch Creek and what the water adds',
        body: [
          'North Miami runs down to Biscayne Bay, and the closer a house sits to the water the more humid and more salt bearing the air its system is working with. Keystone Point, the Sans Souci blocks and the properties along Arch Creek are the clearest cases. Humidity next to open water is measurably higher than a mile inland, and it climbs overnight as the temperature falls.',
          'For a duct system the hours the air conditioning is off are the hours that matter. The duct surfaces are still cold from a day of running, warm damp air reaches them, and they sweat. Dust that would have blown straight through sticks to a damp surface and stays. It is the same reason coastal systems in this county show grey fanning marks around the supply registers sooner than inland ones.',
          'Salt does the rest. It reaches the outdoor condenser first, which is visible, and the indoor coil second through every gap in the return path, which is not. Dampers and roof terminations corrode until they no longer close, and a damper stuck open leaves the duct connected to outdoor air all night.',
        ],
      },
      {
        heading: 'Duplexes, small buildings and rented houses',
        body: [
          'A large share of North Miami housing is duplexes, small apartment buildings and single family homes that are rented rather than owner occupied, and that changes what we find. Filters get changed when somebody remembers, the system is run by whoever lives there and paid for by somebody else, and nobody has been in the attic in years.',
          'For an owner the useful thing to know is what actually needs doing between tenants. The coil and the drain pan are where the smell lives, and they are the part a turnover paint job never touches. A blocked or biologically fouled drain pan is also the most common reason a system shuts itself off on a float switch and turns into an emergency call in August.',
          'For a tenant it is worth knowing that a musty smell at start up is not something you can clean out of the vents from the room side. It is a wet surface upstream of the register, and it is a landlord repair rather than a housekeeping problem.',
        ],
      },
    ],
    neighborhoods: ['Keystone Point', 'Sans Souci Estates', 'Griffing Park', 'Arch Creek', 'Sunkist Grove', 'Cloverleaf', 'San Michel'],
  },
  aventura: {
    depthEs: [
      {
        heading: 'Una ciudad de torres y una manejadora en el clóset',
        body: [
          'Aventura es casi todo condominio, y un sistema de condominio es un trabajo distinto al de una casa. La manejadora está en un clóset dentro del apartamento, normalmente detrás de una puerta de rejilla, el filtro queda detrás de una rejilla de retorno en el techo del pasillo a pocos pies, y los tramos de suministro son cortos, a veces veinte pies en total. Todo el sistema se limpia bien en una mañana.',
          'Como los tramos son cortos, aquí el serpentín importa más que el ducto, y la posición del clóset explica por qué. La manejadora jala su aire de retorno por una rejilla de pasillo que en la mayoría de los planos queda a unos pasos de la cocina, así que la grasa de cocinar llega al filtro y después al serpentín mucho más rápido que en una casa con el retorno junto a las recámaras. Un serpentín con película de grasa retiene el polvo en lugar de soltarlo, y cuando esa capa ya está, cambiar el filtro no cambia nada.',
          'Esa es la razón honesta por la que la limpieza en un condominio vale la pena, y también la razón por la que no debe venderse como si fuera una casa completa. Hay menos ducto. El valor está en el serpentín, la bandeja, la turbina del ventilador y el plenum.',
        ],
      },
      {
        heading: 'Dónde termina su apartamento y dónde empieza el edificio',
        body: [
          'Lo más útil que puede saber antes de llamar a cualquiera en Aventura es de qué lado de la línea está su problema. La manejadora, el ducto dentro de sus paredes y su techo, la rejilla del filtro y su línea de drenaje son suyos. Los tiros verticales que cruzan varios pisos, la presurización de los pasillos, el aire de reposición y los equipos de azotea son de la asociación.',
          'La prueba práctica son sus vecinos. Si los apartamentos de arriba y de abajo tienen la misma queja al mismo tiempo, es un sistema del edificio, y ningún trabajo dentro de su unidad lo va a resolver. Se lo decimos cuando esa es la respuesta, incluso cuando significa que le toca pagar a la administración y no a usted.',
          'Trabajar dentro de un edificio de Aventura además tiene su logística. Casi todas las asociaciones piden certificado de seguro antes de que entre un contratista, que se reserve el elevador de servicio con anticipación, y que el trabajo se haga entre semana dentro de un horario. Nosotros lo arreglamos directo con la administración para que la cita no se caiga en el muelle de carga.',
        ],
      },
      {
        heading: 'La sal, el drenaje y el apartamento que pasa seis meses vacío',
        body: [
          'Aventura está lo bastante cerca del mar para que la sal llegue al serpentín de adentro y no solo al equipo de afuera, por el camino de retorno y por el aire de reposición que mete el edificio. Un serpentín con película de sal y polvo transfiere calor peor y se queda mojado más tiempo entre ciclos, y quedarse mojado más tiempo es todo el mecanismo detrás del olor a humedad al arrancar.',
          'El drenaje es el otro problema propio de un edificio alto. El condensado de una manejadora de clóset baja a un bajante compartido, y una línea parcialmente tapada le regresa el agua a la bandeja. Lo que el dueño ve es un sistema que se apaga solo por el flotador, o agua en el piso del clóset, y lo que hay en realidad es una biopelícula en la bandeja que además es la fuente del olor. Destapar la línea sin limpiar la bandeja compra unas semanas.',
          'Y está la mitad estacional del edificio. Un apartamento cerrado de mayo a noviembre con el termostato en 80 corre tan poco que casi no le quita agua al aire, y puede pasar cuatro meses cerca del 70 por ciento de humedad interior. Un termostato con control de humedad, o un deshumidificador pequeño conectado al drenaje, lo mantiene entre 55 y 60 por ciento, y esa es la diferencia entre volver en noviembre a un apartamento limpio y volver a uno que huele a cerrado.',
        ],
      },
    ],
    depth: [
      {
        heading: 'A city of towers, and an air handler in a closet',
        body: [
          'Aventura is almost entirely condominium, and a condominium system is a different job from a house. The air handler sits in a closet inside the unit, usually behind a louvered door, the filter is behind a return grille in the hallway ceiling a few feet away, and the supply runs are short, sometimes twenty feet from end to end. The whole system can be cleaned properly in a morning.',
          'Because the runs are short, the coil matters more here than the duct, and the closet position is the reason. A closet air handler pulls its return through a hallway grille that in most floor plans is a few steps from the kitchen, so cooking grease reaches the filter and then the coil far faster than it would in a house with the return by the bedrooms. A coil with a greasy film holds dust instead of shedding it, and once that layer is there a filter change does nothing about it.',
          'That is the honest reason a condo cleaning is worth doing and also the reason it should not be sold as a whole house job. There is less duct. The value is in the coil, the drain pan, the blower wheel and the plenum.',
        ],
      },
      {
        heading: 'Where your unit ends and the building begins',
        body: [
          'The single most useful thing to know before you call anybody in Aventura is which side of the line your problem is on. The air handler, the duct inside your walls and ceiling, the filter grille and your drain line are yours. Risers passing through several floors, corridor pressurisation, makeup air and rooftop equipment belong to the association.',
          'The practical test is your neighbours. If the units above and below you have the same complaint at the same time, it is a building system, and no amount of work inside your unit will fix it. We say so when that is the answer, including when it means the board should be paying rather than you.',
          'Working in an Aventura building also carries its own logistics. Most associations want a certificate of insurance on file before a contractor enters a unit, the service elevator reserved in advance, and the work done on a weekday inside set hours. We deal with the management office directly so the appointment does not fail at the loading dock.',
        ],
      },
      {
        heading: 'Salt, the drain line, and the unit that sits empty for six months',
        body: [
          'Aventura is close enough to the ocean that salt reaches the indoor coil and not just the outdoor equipment, through the return path and through whatever makeup air the building brings in. A coil carrying a film of salt and dust transfers heat worse and stays wet longer between cycles, and staying wet longer is the entire mechanism behind a musty smell at start up.',
          'The drain side is the other problem specific to a high rise. Condensate from a closet air handler runs to a shared stack, and a partly blocked line backs water into the pan. What the owner sees is a system shutting itself off on a float switch, or water on the closet floor, and what is actually there is a biofilm in the pan that is also the source of the smell. Clearing the line without cleaning the pan buys a few weeks.',
          'Then there is the seasonal half of the building. A unit closed from May to November with the thermostat at 80 runs so little that it removes almost no water from the air, and it can sit for four months near 70 percent indoor humidity. A thermostat with a humidity control, or a small dehumidifier plumbed to the drain, holds it between 55 and 60 percent, and that is the difference between coming back in November to a clean unit and coming back to one that smells closed.',
        ],
      },
    ],
    neighborhoods: ['Williams Island', 'Aventura Lakes', 'Turnberry', 'Hidden Bay', 'The Waterways', 'Mystic Pointe', 'Porto Vita'],
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
    depthEs: [
      {
        heading: 'Melrose Park, Riverland y las casas de bloque de los años cincuenta',
        body: [
          'Al oeste de la 95 hay barrios enteros de casas de bloque de una planta levantadas entre los cincuenta y los sesenta. Son sólidas y siguen en pie sin problema, pero se construyeron con techos bajos y áticos de muy poca altura, y el aire acondicionado central llegó a ellas años después de terminadas.',
          'Eso deja el ducto metido en un espacio donde apenas cabe un brazo. Se nota en dos cosas: los tramos se instalaron doblados más de lo que deberían porque no había por dónde más pasarlos, y cuando algo falla, el técnico anterior probablemente trabajó a ciegas. Encontramos uniones cerradas con cinta de tela que se secó hace quince años y tramos apoyados directamente sobre el cielo raso.',
          'También es la razón por la que en estas casas el cuarto más lejano del manejador nunca enfría igual. No siempre es falta de capacidad del equipo. Muchas veces es que el aire se está quedando en el camino.',
        ],
      },
      {
        heading: 'Los edificios de la playa y las unidades que pasan medio año vacías',
        body: [
          'Buena parte de la vivienda cerca del agua se alquila por temporada o se ocupa solo unos meses al año. La costumbre es dejar el aire apagado o en 80 grados mientras no hay nadie, que es lo lógico para la factura y lo peor posible para el sistema.',
          'Un apartamento cerrado en agosto sin equipo trabajando llega a niveles de humedad que no bajan solos. La humedad se asienta en el aislamiento del ducto, en el serpentín y en la bandeja de condensado, y quien abre la puerta en noviembre entra a un olor que no estaba en marzo.',
          'Si el suyo es un apartamento de temporada, el momento de limpiarlo es antes de que empiece la ocupación, no después de que alguien se queje. Y si va a quedar vacío, dejar el termostato en 77 con el ventilador en automático cuesta mucho menos que resolver el problema después.',
        ],
      },
      {
        heading: 'Cuando el olor no viene del ducto',
        body: [
          'Vale la pena decirlo aunque no nos convenga: no todo olor a humedad se arregla limpiando el ducto. En muchas casas de Fort Lauderdale el origen está en el serpentín del evaporador o en la bandeja de condensado, que en este clima se ensucian antes que el ducto mismo.',
          'La diferencia se nota en el patrón. Si el olor aparece cuando arranca el equipo y se va disipando, suele venir del serpentín. Si es constante y más fuerte en un cuarto específico, ahí sí el ducto es el sospechoso. Y si es un olor dulce o de tierra mojada cerca del manejador, revise el desagüe antes que nada.',
          'Cuando vamos a una casa y el problema es el serpentín, lo decimos y cotizamos eso, que es un trabajo distinto y más barato. Limpiar un ducto que está bien para no contradecir a nadie es la manera más rápida de que el cliente nos llame otra vez con el mismo olor.',
        ],
      },
    ],
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
    depthEs: [
      {
        heading: 'Al oeste del turnpike: ducto flexible en un ático muy caliente',
        body: [
          'La mitad oeste de Miramar, Riviera Isles, Vizcaya, Silver Lakes, Monarch Lakes y Sunset Lakes, se levantó entre mediados de los noventa y finales de los dos mil, y toda se construyó igual: losa, dos pisos, manejadora en el garaje o en un clóset de arriba, y ducto flexible repartido por un ático ventilado. En una casa así nada está desgastado, y por eso sorprende tanto cuando el problema resulta ser el ducto.',
          'El ático es la razón. Un ático de Broward pasa de 120 grados una tarde de julio mientras el ducto que va adentro lleva aire a unos 55 grados, y veinte años de eso dejan la cubierta del flexible R-6 descolgada entre las vigas. Cada tramo colgado es un punto bajo: el aire se frena y lo que trae se cae ahí. Si la recámara del extremo de la casa siempre está tres o cuatro grados arriba de lo que marca el termostato, la respuesta casi siempre está en el ático.',
          'El otro asunto de fábrica es el retorno. Estos planos suelen tener uno o dos retornos centrales grandes y confían en el espacio debajo de las puertas para que el aire regrese. Todo el mundo cierra las puertas de las recámaras de noche, y una puerta cerrada con media pulgada de holgura es una restricción, así que el cuarto donde duerme la familia es justo el que está peleando con el sistema.',
        ],
      },
      {
        heading: 'Historic Miramar es otra casa por completo',
        body: [
          'Al este de University Drive, los barrios originales de Miramar son de los años cincuenta y sesenta, de una sola planta y en lotes chicos, y casi nada se comporta como en el lado oeste. Las casas son más bajas, los áticos más apretados, los tramos de ducto más cortos, y buena parte de la distribución es la original o se cambió una sola vez hace décadas.',
          'Lo que encontramos ahí es lo mismo que en el resto del Broward y el Miami-Dade viejos: un solo retorno central dimensionado para el plano original, cuartos agregados o cerrados después con salida de aire y sin retorno, y ducto flexible con la cubierta tan quebradiza que se raja al moverla. En un tramo así, sellar una unión no es una reparación, porque el tramo pierde aire a lo largo y no en un punto.',
          'La distinción útil para el dueño es esta: en el lado este el problema es la edad y en el lado oeste es el diseño. La edad se reemplaza. El diseño se corrige, normalmente en el retorno y en los dos o tres tramos peores, y casi siempre por bastante menos que un sistema nuevo.',
        ],
      },
      {
        heading: 'Una casa con más gente de la que suponía el plano',
        body: [
          'Muchas casas de Miramar tienen más gente adentro de la que dibujó el constructor, con frecuencia dos o tres generaciones, y el sistema se dimensionó para el plano y no para la familia. Más personas es cocinar casi todas las noches, lavadora casi todos los días y más baños, y cada una de esas cosas mete agua al aire que después el aire acondicionado tiene que sacar.',
          'Un sistema al que ya le falta retorno tiene menos capacidad para hacerlo, así que la casa se siente fría y pegajosa en lugar de fría y seca. Una humedad interior arriba de 60 por ciento es lo que hace sentir que el termostato miente, y es también lo que mantiene el serpentín, la bandeja y el interior del ducto en la condición que el moho necesita.',
          'La medida que vale la pena tener no es la temperatura sino la humedad, y un medidor sencillo en la barra de la cocina la contesta. Abajo de 60 por ciento, el sistema va bien. Arriba de 60 por ciento de forma constante, con el filtro limpio, el problema es de flujo de aire, y eso es un asunto de ductos y no de equipo.',
        ],
      },
    ],
    depth: [
      {
        heading: 'West of the turnpike: flexible duct in a very hot attic',
        body: [
          'The western half of Miramar, Riviera Isles, Vizcaya, Silver Lakes, Monarch Lakes and Sunset Lakes, went up between the mid nineties and the late two thousands, and it was all built the same way: slab, two storeys, an air handler in a garage or an upstairs closet, and flexible duct fanned out across a vented attic. Nothing about a house like that is worn out, which is exactly why owners are surprised when the duct turns out to be the problem.',
          'The attic is the reason. A Broward attic passes 120 degrees on a July afternoon while the duct inside it carries air at around 55 degrees, and twenty years of that leaves the outer jacket of R-6 flex sagging between the trusses. Every sag is a low point where the air slows and what it is carrying settles out. If the bedroom at the far end of the house is always three or four degrees warmer than the thermostat says, the attic is usually where the answer is.',
          'The other built in issue is the return. These plans commonly run one or two large central returns and rely on the gap under the bedroom doors to get the air back. Everyone closes bedroom doors at night, and a closed door with a half inch undercut is a restriction, so the room the family sleeps in is the room fighting the system.',
        ],
      },
      {
        heading: 'Historic Miramar is a different house entirely',
        body: [
          'East of University Drive, the original Miramar neighbourhoods are fifties and sixties single storey construction on small lots, and almost nothing about them behaves like the west side. The houses are lower, the attics are shallower, the duct runs are shorter, and much of the distribution is either original or was replaced once decades ago.',
          'What we find there is what we find across older Broward and Miami-Dade: one central return sized for the original plan, rooms added or enclosed since with a supply run and no return, and flexible duct with a jacket gone brittle enough to crack when it is moved. On a run that old, sealing a joint is not a repair, because the run is leaking along its length rather than at one identifiable place.',
          'The useful distinction for an owner is that the east side problems are age and the west side problems are design. Age gets replaced. Design gets corrected, usually at the return and at the two or three worst runs, and usually for a good deal less than a new system.',
        ],
      },
      {
        heading: 'A house holding more people than the plan assumed',
        body: [
          'Plenty of Miramar houses hold more people than the builder drew for, often across two or three generations, and the system was sized to the plan rather than to the household. More occupants means cooking most nights, laundry most days and more showers, and every one of those puts water into the air that the air conditioning then has to take back out.',
          'A system already short on return air has less capacity to do that, so the house runs cool and clammy rather than cool and dry. Indoor humidity above 60 percent is what makes a house feel like the thermostat is lying, and it is also what keeps the coil, the drain pan and the inside of the duct in the condition mold needs.',
          'The measurement worth having is not the temperature, it is the humidity, and an inexpensive meter on the kitchen counter answers it. Under 60 percent and the system is keeping up. Consistently over 60 percent in a house with a clean filter, and the problem is airflow, which is a duct question rather than an equipment one.',
        ],
      },
    ],
    neighborhoods: ['Historic Miramar', 'Riviera Isles', 'Vizcaya', 'Silver Lakes', 'Monarch Lakes', 'Sunset Lakes', 'Huntington'],
    dryerVent: {
      local: [
        'Miramar is two cities in one for this purpose. East of University, Historic Miramar is fifties and sixties construction with short exterior wall vents and original hoods. West of the turnpike, Riviera Isles and Monarch Lakes are two thousands construction with two storey homes, upstairs laundry rooms, and vent runs that travel the full depth of the house before reaching the roof.',
        'The newer homes look like the safer case and often are not. A twenty foot vertical run holds lint in a way a four foot horizontal one never does.',
      ],
      common: 'Upstairs laundry rooms venting through a long vertical run, where lint falls back down the duct every time the dryer stops.',
    },
  },
  'pompano-beach': {
    depth: [
      {
        heading: 'Cypress Bend, Palm Aire and where your ductwork stops being yours',
        body: [
          'Pompano Beach carries one of the densest concentrations of mid rise condominium buildings in Broward County. Cypress Bend and Palm Aire between them account for thousands of apartments, and in a building of that kind your ductwork does not end at your wall. It joins a riser that serves the units above and below you.',
          'The association owns the shared portion and you own yours, and the line between the two is where problems sit unowned for years, because each side reasonably assumes the other is handling it. When a riser loads up, every apartment on the stack starts underperforming in the same season, and cleaning the six feet that belong to you changes nothing.',
          'We tell you which side of that line your problem is on before quoting anything, including when the answer is that you should be taking it to your board rather than paying us. That is a better outcome than selling you a cleaning you would need again in two months.',
        ],
      },
      {
        heading: 'Old Pompano and Cresthaven: small houses that got air conditioning later',
        body: [
          'The single family pockets, Old Pompano and Cresthaven among them, are compact fifties and sixties construction built before central air conditioning was standard on this coast. The system in those houses was fitted afterwards, and the ductwork went wherever it would fit: dropped ceilings, closets, and an attic with very little headroom at the eaves.',
          'Retrofitted duct has more joints and more transitions than duct designed into a house from the start, and every one of them is a place a connection can work loose over sixty years of expanding and contracting. Where it opens decides what happens next. A joint that has come apart in the attic pulls air at well over 120 degrees, along with everything that air is carrying.',
          'From inside the house the signs are the same every time: one room that never keeps up with the rest, dust back on the furniture within days of cleaning, and a power bill that climbed without anything else in the house changing.',
        ],
      },
      {
        heading: 'Two blocks from the beach, the coil is the part that suffers',
        body: [
          'Everything near the beach and the Intracoastal, Harbor Village included, takes salt continuously. Salt does not stop at the outdoor condenser where you can see it on the fins. It travels in with the air through any gap in the return path and settles on the evaporator coil along with the dust.',
          'A coil carrying that film transfers heat worse and stays wet longer between cycles, and staying wet for hours at a time is exactly the condition biological growth needs. That is the honest reason a system on the coast wants attention sooner than the same system in Coral Springs, and it is the same reason exterior damper flaps seize open here and do not there.',
          'If there is a musty smell for the first few minutes after the air comes on, that is the most reliable indicator that something is growing on a wet surface inside your system. Cleaning the coil and the drain pan removes it. Sealing the return and holding indoor humidity under 60 percent is what stops it coming back.',
        ],
      },
    ],
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
    neighborhoods: ['Old Pompano', 'Cypress Bend', 'Palm Aire', 'Harbor Village', 'Cresthaven', 'Kendall Green', 'Garden Isles'],
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
    depthEs: [
      {
        heading: 'Terreno abierto, corrales y lo que entra con eso',
        body: [
          'Davie tiene más propiedad de lote grande y de caballos que cualquier otra ciudad de Broward, y el aire afuera de esas casas trae cosas que el aire suburbano no. Caminos de arena y entradas sin pavimentar, corrales y arenas que se trabajan y se rastrillan, paja y viruta, y pastizal abierto que se seca entre lluvias meten polvo fino al aire, y buena parte llega adentro sobre la ropa y las botas antes de acercarse siquiera a una rejilla de retorno.',
          'Una vez adentro, el sistema lo mueve. Todo lo que cae al piso se vuelve a levantar y se va hacia el retorno, y lo que no se queda en el filtro aterriza en el serpentín. Las casas con caballos nos dicen siempre lo mismo: el filtro está gris en tres semanas y hay una película fina sobre los muebles dos días después de limpiar.',
          'Eso es un problema de filtración y de flujo de aire antes que de limpieza. Un filtro de mayor rango por el que el equipo no puede respirar empeora las cosas, porque entonces el sistema jala aire sin filtrar por los lados del marco. Sellar la rejilla del filtro y usar un filtro que le quede al equipo sirve más que subir de rango a ciegas.',
        ],
      },
      {
        heading: 'Agua de pozo, riego y el equipo de afuera',
        body: [
          'Muchas propiedades de Davie riegan con pozo propio, y el agua de pozo de esta zona de Broward trae hierro y minerales disueltos. Donde eso importa para un sistema de aire es afuera: el rocío de los aspersores que alcanza el condensador deja sarro y manchas de óxido en las aletas, y un condensador con sarro transfiere calor peor que uno limpio.',
          'La cadena a partir de ahí es directa. Un condensador que transfiere calor peor obliga al sistema a correr más tiempo para llegar a la misma temperatura, y un sistema que corre más tiempo pasa más aire por cada superficie de adentro del ducto, hora tras hora. El ducto se ensucia más rápido porque el equipo de afuera está trabajando de más.',
          'Vale la pena ver hacia dónde tiran los aspersores antes de suponer que el problema está adentro. Mover una cabeza de riego, o ponerle una protección a la unidad, es un trabajo mucho menor que cualquiera de las alternativas.',
        ],
      },
      {
        heading: 'Casas manufacturadas y modulares',
        body: [
          'Davie tiene una cantidad real de casas manufacturadas y modulares, y su sistema de ductos no se parece en nada al de una casa construida en sitio. El ducto va en el piso, dentro del vientre de la casa debajo de la membrana de aislamiento, y las rejillas de suministro están en el piso y no en el techo. Todo el servicio cambia, empezando porque desde adentro no se ve nada.',
          'Dominan dos fallas. La primera es la membrana del vientre: en cuanto se rompe, el ducto queda expuesto al terreno y el sistema empieza a jalar aire húmedo y polvo de tierra de abajo de la casa. La segunda es el ducto de cruce, el tramo flexible que lleva el aire de una mitad a la otra en una casa doble por debajo del centro, que se descuelga, lo aplasta un soporte o se sale del collarín por completo. Cuando media casa doble no enfría, el cruce es lo primero que hay que revisar.',
          'Le decimos con honestidad cuándo un sistema de ducto en el piso ya pasó el punto de limpiarse. Un ducto abierto al terreno debajo de la casa necesita que se cierre esa abertura antes de que tenga sentido limpiar lo que hay adentro.',
        ],
      },
    ],
    depth: [
      {
        heading: 'Open land, paddocks and what comes in with it',
        body: [
          'Davie has more large lot and equestrian property than anywhere else in Broward, and the air outside those houses carries things suburban air does not. Sand roads and unpaved drives, arenas and paddocks that get worked and dragged, hay and bedding, and open pasture that dries out between rains all put fine dust into the air, and a good part of it comes indoors on clothes and boots before it ever reaches a return grille.',
          'Once it is inside, the system moves it. Everything that lands on a floor gets stirred up again and pulled toward the return, and whatever does not stop at the filter lands on the coil. Households with horses tell us the same thing every time: the filter is grey in three weeks and there is a fine film back on the furniture two days after cleaning.',
          'That is a filtration and airflow problem before it is a cleaning problem. A higher rated filter the system cannot breathe through makes it worse rather than better, because the system then pulls unfiltered air around the frame. Sealing the filter grille and matching the filter to the equipment does more than upgrading the filter on its own.',
        ],
      },
      {
        heading: 'Well water, irrigation and the equipment outside',
        body: [
          'A lot of Davie properties irrigate from a private well, and well water in this part of Broward carries iron and dissolved minerals. Where that matters for an air conditioning system is outdoors: sprinkler spray reaching the condenser leaves mineral scale and rust staining on the fins, and a scaled condenser rejects heat worse than a clean one.',
          'The chain from there is direct. A condenser rejecting heat worse makes the system run longer to reach the same temperature, and a system running longer pulls more air past every surface inside the duct, hour after hour. The duct gets dirty faster because the equipment outside is working harder.',
          'It is worth looking at where the sprinkler heads throw before assuming the indoor system is at fault. Moving one head, or shielding the unit, is a far smaller job than any of the alternatives.',
        ],
      },
      {
        heading: 'Manufactured and older modular homes',
        body: [
          'Davie has a real stock of manufactured and modular homes, and their duct systems are nothing like a site built house. The duct runs in the floor, inside the belly of the home under the insulation membrane, and the supply registers are in the floor rather than the ceiling. Everything about servicing one is different, starting with the fact that none of it is visible from inside.',
          'Two failures dominate. The first is the belly membrane. Once it tears, the duct is exposed to the ground, and the system starts pulling humid air and soil dust from under the home. The second is the crossover duct, the flexible section carrying air between the two halves of a double wide under the middle of the house, which sags, gets crushed by a support, or comes off its collar entirely. When half a double wide will not cool, the crossover is the first thing to check.',
          'We tell you honestly when a floor duct system is past the point of cleaning. A duct that is open to the ground under the home needs that opening closed before there is any point in cleaning what is inside it.',
        ],
      },
    ],
    dryerVent: {
      local: [
        'Davie has more large lot and equestrian property than anywhere else in Broward, and the houses on them are wide single storey builds. A wide house with the laundry near the middle produces the worst case run: long, horizontal, in the attic, terminating at the far end through the roof.',
        'The rural setting adds something the coastal cities do not have. Gable and roof terminations out here collect nesting far more often, and a wasp or bird nest in a termination blocks the flap completely.',
      ],
      common: 'Nesting in gable and roof terminations, which is the most common single cause of a dryer that worked last week and does not this week.',
    },
    neighborhoods: ['Forest Ridge', 'Ivanhoe', 'Long Lake Estates', 'Shenandoah', 'Orange Park', 'Pine Island Ridge', 'Rolling Hills'],
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
    depthEs: [
      {
        heading: 'Una ciudad construida en veinte años, que se desgasta al mismo tiempo',
        body: [
          'Coral Springs pasó de casi nada a ciudad completa entre principios de los setenta y mediados de los noventa, y se construyó rápido y con un patrón. Ramblewood, Westchester y Maplewood son el extremo viejo; Eagle Trace, Turtle Run y Coral Creek el nuevo. La consecuencia útil es que barrios enteros comparten la misma construcción, la misma distribución de ductos y la misma edad.',
          'La consecuencia incómoda es que también llegan juntos al final de su vida útil. En un ático del sur de Florida el ducto flexible da alrededor de quince años antes de que la cubierta exterior se ponga quebradiza y el forro interior empiece a soltarse de los collarines, y la mayoría de estas casas van en su segunda o tercera manejadora con su primer juego de ductos. Una casa de 1985 con una manejadora de 2021 es aquí el caso normal, no la excepción.',
          'Esa diferencia es de donde salen las quejas. El equipo está bien, la distribución no, y al dueño ya le dijeron dos veces que el sistema simplemente está viejo. Antes de que alguien cotice una cuarta manejadora conviene medir lo que están entregando las rejillas, porque muchas veces la respuesta es un tramo que se separó en el ático hace años.',
        ],
      },
      {
        heading: 'Casas de dos pisos y la puerta que todos cierran',
        body: [
          'Buena parte de la vivienda de Coral Springs es de dos pisos, y dos pisos crean un problema que una casa de una planta no tiene. Los dos niveles los sirve la misma manejadora, el aire caliente sube sin importar lo que quiera el termostato, y el retorno casi siempre son una o dos rejillas grandes abajo.',
          'Eso deja a las recámaras de arriba devolviendo su aire por el espacio debajo de una puerta cerrada. Media pulgada de holgura no es un retorno, así que una recámara de arriba con la puerta cerrada trabaja contra una restricción toda la noche, que es justo cuando la familia está adentro. Si arriba corre tres o cuatro grados más caliente que abajo, revise si las salidas de arriba están abiertas y si existe alguna vía real de retorno antes de mirar el equipo.',
          'El tronco vertical que alimenta el segundo piso también hay que revisarlo. Va dentro de un registro donde nadie lo ve, y cuando se separa en una unión el aire se va a la cavidad de la pared en lugar de a la recámara. Esa falla no se ve desde ningún cuarto de la casa y es común a esta edad.',
        ],
      },
      {
        heading: 'Lo que puede y lo que no puede cambiar por fuera de la casa',
        body: [
          'Coral Springs cuida el aspecto de la ciudad y aplica sus normas de apariencia con más mano que casi todo Broward, y encima de la ciudad casi siempre hay una asociación de propietarios con reglas propias. Cualquier cosa que cambie el exterior, una terminación nueva en el techo, una ventila en una pared que da a la calle, una tapa de otro color, es primero un asunto de aprobación y después uno técnico.',
          'Eso define cómo trabajamos. Cuando el trabajo se puede hacer desde adentro, por las rejillas, el plenum y el gabinete de la manejadora, lo hacemos desde adentro. Cuando de verdad hay que cambiar algo por fuera, le decimos qué aprobación necesita antes de empezar, en lugar de dejarle una notificación de violación junto con el trabajo terminado.',
          'La arboleda es el otro factor de afuera. Coral Springs tiene más sombra que casi todo el condado, y las tapas y terminaciones de techo bajo árboles maduros juntan hoja y semilla encima de lo que esté haciendo el ducto por dentro. Un ducto limpio detrás de una salida obstruida rinde igual que uno tapado.',
        ],
      },
    ],
    depth: [
      {
        heading: 'A city built in twenty years, wearing out on the same schedule',
        body: [
          'Coral Springs went from almost nothing to a full city between the early seventies and the middle nineties, and it was built fast and to a pattern. Ramblewood, Westchester and Maplewood are the older end, Eagle Trace, Turtle Run and Coral Creek the later one. The useful consequence is that whole neighbourhoods share the same construction, the same duct layout and the same age.',
          'The awkward consequence is that they reach the end of their service life together. Flexible duct in a South Florida attic realistically gives about fifteen years before the outer jacket goes brittle and the inner liner starts pulling away from the collars, and most of these houses are on their second or third air handler and their first set of duct. A 1985 house with a 2021 air handler is the normal case here, not the exception.',
          'That gap is where the complaints come from. The equipment is fine, the distribution is not, and the owner has been told twice that the system is simply old. Before anyone quotes a fourth air handler it is worth measuring what the registers are delivering, because the answer is often a run that separated in the attic years ago.',
        ],
      },
      {
        heading: 'Two storey plans and the door everybody closes',
        body: [
          'A large share of Coral Springs housing is two storey, and two storeys create a problem a single storey house does not have. Both floors are served by the same air handler, hot air rises regardless of what the thermostat wants, and the return is usually one or two large grilles downstairs.',
          'That leaves the upstairs bedrooms pushing their return air back through the gap under a closed door. Half an inch of undercut is not a return, so an upstairs bedroom with the door shut runs against a restriction all night, which is exactly when the family is in it. If your upstairs runs three or four degrees warmer than downstairs, check whether the upstairs supply runs are open and whether there is any real return path up there before you look at the equipment.',
          'The vertical trunk feeding upstairs is worth checking too. It runs inside a chase where nobody can see it, and when it separates at a joint the air goes into the wall cavity instead of the bedroom. That failure is invisible from every room in the house and it is common at this age.',
        ],
      },
      {
        heading: 'What can and cannot change on the outside of the house',
        body: [
          'Coral Springs takes the appearance of the city seriously and enforces its community standards more actively than most of Broward, and on top of the city there is usually a homeowners association with rules of its own. Anything that changes the exterior, a new roof termination, a vent hood on a street facing wall, a cap in a different colour, is an approval question before it is a technical one.',
          'That shapes how we approach the work. Where a job can be done from inside the house, through the registers, the plenum and the air handler cabinet, we do it from inside. When something genuinely has to change outside, we tell you what approval it needs before we start rather than leaving you with a violation notice and a finished job.',
          'The canopy is the other outdoor factor. Coral Springs has heavier tree cover than most of the county, and roof caps and terminations under mature trees collect leaf litter and seed debris on top of whatever the duct itself is doing. A clear duct behind an obstructed exit performs the same as a blocked one.',
        ],
      },
    ],
    neighborhoods: ['Eagle Trace', 'Ramblewood', 'Coral Creek', 'Turtle Run', 'Westchester', 'Maplewood', 'Cypress Run'],
    dryerVent: {
      local: [
        'Coral Springs was built fast and to a pattern, which is useful here because it means the same vent configuration repeats across whole neighborhoods. In Ramblewood and Westchester the laundry sits off the garage with a short run to a side wall. In the later communities, Eagle Trace and Turtle Run, the two storey plans put the laundry upstairs and vent through the roof.',
        'The city\'s tree canopy is heavier than most of Broward, and roof terminations under mature trees collect leaf debris on top of the lint problem.',
      ],
      common: 'Roof vent caps obstructed from above by leaf litter and seed debris, so the duct is clear but the exit is not.',
    },
  },
  'coconut-creek': {
    depthEs: [
      {
        heading: 'Wynmoor y los edificios de asociación: todo el complejo envejece al mismo tiempo',
        body: [
          'Wynmoor es una comunidad grande para mayores de 55 años, y funciona menos como un conjunto de apartamentos que como una sola instalación. Las unidades se construyeron en los mismos años, se equiparon igual, y llegan al final de la vida útil del equipo con pocas temporadas de diferencia entre una y otra.',
          'Para el propietario eso tiene una consecuencia práctica. El manejador va en un clóset, los tramos son cortos, y una limpieza completa se hace en unas horas. Pero donde su ducto se conecta con algo compartido, la responsabilidad cruza una línea que está escrita en los documentos de la asociación, no en el edificio. Esa línea la revisamos antes de cotizar y se la explicamos, incluso cuando la respuesta es que le toca a la asociación.',
          'También significa que si tres unidades del mismo edificio tienen la misma queja el mismo verano, eso rara vez son tres casualidades. Casi siempre es la edad del equipo, y limpiar una sola unidad no lo resuelve.',
        ],
      },
      {
        heading: 'Winston Park y Regency Lakes: el ducto flexible que aguantó veinte años',
        body: [
          'La parte de casas unifamiliares de Coconut Creek es construcción sobre losa de los años ochenta y noventa, con ducto flexible repartido por el ático y rejillas en el cielo raso. Es un diseño correcto y no falla de golpe. Se degrada.',
          'El flexible se descuelga entre las vigas con las décadas, y cada punto bajo es donde el aire pierde velocidad y suelta el polvo que traía. El sellado de las uniones se pone quebradizo en un ático que en julio pasa de 120 grados. Ninguna de las dos cosas produce un día en que el sistema se detiene: producen una casa que enfría un poco peor cada año hasta que el dueño concluye que el equipo se le quedó chico.',
          'Antes de cambiar un manejador que está cumpliendo, vale la pena saber qué está pasando entre él y los cuartos. Un equipo nuevo empujando aire por una distribución de veinticinco años no va a dar el número que trae en la etiqueta.',
        ],
      },
      {
        heading: 'El patio con malla no filtra nada, y de dónde viene el polvo de verdad',
        body: [
          'Casi todas las casas de aquí tienen patio cerrado con malla, y es común suponer que eso es lo que mantiene limpio el interior. Detiene hojas e insectos. No hace absolutamente nada con las partículas del tamaño que importa adentro, y de todos modos no está en el camino del aire.',
          'Las entradas reales se ven menos. En este tipo de vivienda el retorno suele ser una sola rejilla grande en un pasillo, y lo que hay detrás muchas veces es la estructura de la pared, no un conducto sellado. Todo lo que esté en esa pared, y todo lo que esté en el ático por encima, entra al sistema cada vez que arranca el ventilador.',
          'Por eso aparecen sombras grises alrededor de una rejilla en una casa que se limpia cada semana. Ese polvo no está entrando por la malla del patio. Está saliendo de adentro del edificio, por el retorno, y el sistema lo reparte.',
        ],
      },
    ],
    depth: [
      {
        heading: 'Wynmoor and the association buildings: a whole city block on one maintenance clock',
        body: [
          'Wynmoor is a large age restricted community of low rise buildings, and it behaves less like a set of apartments than like a single piece of infrastructure. The units were built in the same years, fitted with the same equipment, and they reach the end of that equipment life within a few seasons of each other.',
          'That matters when you are the owner. The air handler sits in a closet, the runs are short, and a proper cleaning takes a few hours. But where your ducting meets anything shared, the responsibility crosses a line that is written in the association documents rather than in the building. We read that line before quoting, and we tell you when the answer is that the association owns the problem.',
          'It also means neighbours compare notes, which is useful. If three units in a building have the same complaint in the same summer, that is rarely three coincidences. It is usually the age of the equipment, and cleaning one unit will not settle it.',
        ],
      },
      {
        heading: 'Winston Park, Regency Lakes and the flex duct that was fine for twenty years',
        body: [
          'The single family side of Coconut Creek is mostly eighties and nineties slab construction with flexible duct fanned across the attic and supply registers in the ceiling. It is a sound design and it does not fail dramatically. It degrades.',
          'R-6 flex sags between the trusses over two decades, and every sag becomes a low point where air slows and dust drops out of it. The mastic and tape at the joints go brittle in an attic that passes 120 degrees in July. Neither of those produces a day where the system stops. They produce a house that cools slightly worse every year until the owner concludes the equipment is undersized.',
          'Before replacing an air handler that is doing its job, it is worth knowing what is happening between it and the rooms. A new system pushing air through twenty five year old distribution will not reach the number on its label.',
        ],
      },
      {
        heading: 'The screened enclosure question, and where the dust is actually coming from',
        body: [
          'Almost every home here has a screened patio, and homeowners often assume that is what keeps the inside clean. It filters leaves and insects. It does nothing at all for the particles small enough to matter indoors, and it is not part of the air path anyway.',
          'The real entry points are less visible. In this housing stock the return is usually a single large grille in a hallway, and the cavity behind it is often the wall framing rather than sealed sheet metal. Anything in that wall, and anything in the attic above it, gets pulled into the system every time the blower runs.',
          'That is why grey shadowing appears around a supply register in a house that is cleaned every week. The dust is not coming past the screen. It is coming from inside the building, through the return, and being redistributed.',
        ],
      },
    ],
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
    depth: [
      {
        heading: 'Two systems in one house, and one of them is always worse',
        body: [
          'A large share of Boca Raton housing west of I-95 is big enough to need two air handlers, one for the ground floor and one for upstairs, and the two do not age at the same rate. The downstairs unit usually sits in a garage or a utility closet at floor level. The upstairs one is very often in the attic itself.',
          'An attic mounted air handler in Palm Beach County spends half the year in a space that passes 120 degrees. It sweats harder, the sealing at its cabinet seams lets go sooner, and the flexible duct fanning out from it sags between the trusses. Every sag is a low point where the air slows down and dust drops out of it.',
          'The practical result is a house that is comfortable downstairs and runs three or four degrees warm in the upstairs bedrooms no matter where the thermostat is set. Owners assume the upstairs unit is undersized. Usually it is not, and the distribution is doing the losing.',
        ],
      },
      {
        heading: 'Boca Del Mar, Broken Sound and what was built between 1985 and 2000',
        body: [
          'The country club and gated communities west of the interstate went up over roughly fifteen years to a consistent specification: slab construction, air handler in a garage or an attic, and R-6 flexible duct run out across the attic to ceiling registers. Nothing in a house like that is worn out. What is wrong with it was built in rather than aged in.',
          'Two things follow. Twenty five Palm Beach County summers make the outer jacket brittle and let the mastic at the joints go, so the system loses conditioned air into the attic and pulls attic air back through the same openings. And there is what the builder left: drywall dust, sawdust and insulation fibre that went into open duct while the house was being framed and that no step in a normal build removes.',
          'In association managed communities there is a third factor, which is that nobody owns the duct maintenance. The landscaping is on a schedule and the ductwork is not, so a correctly installed system reaches twenty years without anyone having opened it once.',
        ],
      },
      {
        heading: 'The house that is empty from May to November',
        body: [
          'Boca has a high proportion of part year residences, and a house closed through the wet season is a different problem from one that is lived in. With the thermostat parked at 80 the system runs in short cycles, and a short cycle does not last long enough to pull moisture out of the air.',
          'Indoor humidity then sits above 60 percent for five or six months. That is the textbook condition for growth on the evaporator coil, in the drain pan and on the inner surface of the supply duct. Owners come back in the autumn, turn the temperature down, and get a smell they did not leave behind.',
          'The fix that actually works is not a cleaning. It is a humidistat set to hold humidity rather than temperature, or a dehumidifier on a timer, so the house keeps drying itself while you are away. Where growth is already established we clean the coil, the pan and the ducts, but if the house goes back to sitting at 80 with the humidity uncontrolled it will be back next season.',
        ],
      },
    ],
    depthEs: [
      {
        heading: 'Dos sistemas en una sola casa, y siempre hay uno peor',
        body: [
          'Buena parte de la vivienda de Boca Raton al oeste de la I-95 es lo bastante grande para necesitar dos manejadoras, una para la planta baja y otra para la de arriba, y no envejecen igual. La de abajo casi siempre está en la cochera o en un clóset de servicio al nivel del piso. La de arriba, muy seguido, está metida en el ático.',
          'Una manejadora en el ático del condado de Palm Beach pasa medio año en un espacio que supera los 120 grados. Suda más, el sellado de las uniones del gabinete se suelta antes, y el ducto flexible que sale de ella se descuelga entre las vigas. Cada tramo colgado es un punto bajo donde el aire se frena y el polvo se cae.',
          'Lo que usted nota es una casa cómoda abajo y recámaras arriba que se quedan tres o cuatro grados más calientes, sin importar dónde ponga el termostato. Casi todos suponen que la unidad de arriba quedó chica. Normalmente no es eso: lo que está perdiendo es la distribución.',
        ],
      },
      {
        heading: 'Boca Del Mar, Broken Sound y lo que se construyó entre 1985 y 2000',
        body: [
          'Las comunidades cerradas y de club al oeste de la interestatal se levantaron en unos quince años y con una receta muy pareja: losa, manejadora en cochera o en ático, y ducto flexible R-6 repartido por el ático hasta las rejillas del techo. En una casa así nada está desgastado. Lo que falla venía de fábrica.',
          'De ahí salen dos cosas. Veinticinco veranos de ático en Palm Beach dejan la cubierta exterior quebradiza y sueltan el sellador de las uniones, así que el sistema pierde aire frío hacia el ático y jala aire del ático de regreso por la misma abertura. Y está lo que dejó la constructora: polvo de drywall, aserrín y fibra de aislamiento que entraron al ducto abierto mientras se armaba la casa y que ningún paso de una obra normal saca después.',
          'En comunidades con asociación hay un tercer factor: el mantenimiento del ducto no tiene dueño. El jardín se atiende con calendario y el ducto no, así que un sistema bien instalado llega a los veinte años sin que nadie lo haya abierto una sola vez.',
        ],
      },
      {
        heading: 'La casa que se queda sola de mayo a noviembre',
        body: [
          'Boca tiene mucha vivienda de temporada, y una casa cerrada durante toda la temporada de lluvias no se parece a una casa habitada. Con el termostato en 80 el equipo arranca y para en ciclos cortos, y un ciclo corto no dura lo suficiente para sacarle humedad al aire.',
          'Entonces la humedad de adentro se queda arriba de 60 por ciento cinco o seis meses seguidos. Esa es la condición exacta para que crezca algo sobre el serpentín, en la bandeja de condensado y en la cara interior del ducto de suministro. El dueño regresa en otoño, baja la temperatura, y le sale un olor que no dejó.',
          'Lo que de verdad resuelve esto no es una limpieza. Es un humidistato configurado para controlar humedad y no temperatura, o un deshumidificador con temporizador, de modo que la casa siga secándose mientras usted no está. Cuando ya hay crecimiento limpiamos serpentín, bandeja y ductos, pero si la casa vuelve a quedarse en 80 sin control de humedad, el año que entra va a estar igual. Se lo decimos así en lugar de venderle la misma limpieza cada temporada.',
        ],
      },
    ],
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
    depth: [
      {
        heading: 'East of Swinton the houses are older and the air is saltier',
        body: [
          'Del-Ida Park, Osceola Park and the blocks around Lake Ida are the older half of Delray Beach, much of it built between the twenties and the fifties, decades before central air conditioning was ordinary anywhere in Florida. The ducting in those houses was added later and routed around whatever was already in the way: closets, furred down ceilings and low attics.',
          'Improvised routing means more joints, longer runs and more corners than the equipment was sized for, and it is the joints that eventually fail. A connection that was taped rather than mechanically fastened works loose over forty years of expanding and contracting, and where it opens decides what the system starts breathing.',
          'Being close to the water adds the second half. Salt reaches the outdoor equipment first, then reaches the indoor coil through every unsealed gap in the return path. A coil holding a layer of salt and dust stays wet longer after each cycle, and that is the whole mechanism behind a musty smell in the first minutes after start up.',
        ],
      },
      {
        heading: 'Kings Point and the fifty five plus half of the city',
        body: [
          'Kings Point on its own accounts for a large share of the housing west of the city, and the low rise buildings and villas around it share a profile: seventies and eighties construction, compact systems, and residents who have often been in the same unit for twenty years or more.',
          'Long tenancy is the part that matters. A system under one owner for that long has almost always had the equipment replaced at least once and the distribution left completely alone, because equipment fails visibly and ductwork does not. We regularly find original seventies duct connected to a second or third generation air handler, in a home where the owner has been told for years that the unit is the problem.',
          'It is also the group most exposed to the scare tactics this trade is known for. Our prices are published for that reason, and the technician who comes to your door is not paid on what he sells you.',
        ],
      },
      {
        heading: 'Tropic Isle, the barrier island, and the parts that stop moving',
        body: [
          'On the island and along the Intracoastal the failure mode moves off the duct itself and onto the hardware at the ends of it. Dampers, roof terminations and the flap on an exterior hood corrode in salt air until they no longer close.',
          'A damper stuck open lets humid outside air sit in the duct all night while the system is off and the duct surfaces are still cold. That is condensation on the inside of a duct, every night, for months, and no cleaning schedule outruns it.',
          'So on the water side of Delray we check the terminations and the return sealing before quoting anything. A clean duct behind a seized damper fills straight back up, and you would notice it within a season.',
        ],
      },
    ],
    depthEs: [
      {
        heading: 'Al este de Swinton la casa es vieja y el aire trae más sal',
        body: [
          'Del-Ida Park, Osceola Park y las cuadras alrededor de Lake Ida son la mitad vieja de Delray Beach. Mucho de eso se construyó entre los años veinte y cincuenta, décadas antes de que el aire acondicionado central fuera normal en Florida. El ducto se puso después y se fue acomodando donde cupo: clósets, plafones bajados y áticos de poca altura.',
          'Un ducto acomodado así tiene más uniones, más vueltas y más metros de los que el equipo tenía calculados, y las uniones son las que terminan fallando. Una conexión que se pegó con cinta en lugar de fijarse mecánicamente se afloja después de cuarenta años de dilatar y contraer, y el lugar donde se abre decide qué empieza a respirar el sistema.',
          'Estar cerca del agua agrega la otra mitad. La sal llega primero al equipo de afuera y después al serpentín de adentro, por cada abertura del retorno que no quedó sellada. Un serpentín con capa de sal y polvo se queda mojado más tiempo después de cada ciclo, y eso es todo el mecanismo detrás del olor a humedad de los primeros minutos.',
        ],
      },
      {
        heading: 'Kings Point y la mitad de la ciudad que tiene cincuenta y cinco años o más',
        body: [
          'Kings Point por sí solo representa una parte grande de la vivienda al oeste de la ciudad, y los edificios bajos y las villas de alrededor comparten el mismo perfil: construcción de los años setenta y ochenta, sistemas compactos, y vecinos que llevan veinte años o más en la misma unidad.',
          'Ese último dato es el importante. Un sistema con un solo dueño durante tanto tiempo casi siempre ya tuvo cambio de equipo por lo menos una vez y nunca tuvo cambio de distribución, porque el equipo falla a la vista y el ducto no. Encontramos seguido ducto original de los setenta conectado a una manejadora de segunda o tercera generación, en casas donde al dueño le llevan años diciendo que el problema es la unidad.',
          'Es además el grupo más expuesto a las tácticas de susto por las que este oficio tiene mala fama. Por eso publicamos los precios, y por eso el técnico que toca su puerta no gana comisión sobre lo que le venda.',
        ],
      },
      {
        heading: 'Tropic Isle, la isla barrera y las piezas que dejan de moverse',
        body: [
          'En la isla y a lo largo del Intracoastal el problema se corre del ducto hacia las piezas de los extremos. Las compuertas, las salidas de techo y la tapa de la ventila exterior se corroen en aire salino hasta que ya no cierran.',
          'Una compuerta trabada abierta deja que el aire húmedo de afuera se quede dentro del ducto toda la noche, con el sistema apagado y las superficies del ducto todavía frías. Eso es condensación adentro del ducto, cada noche, durante meses, y ninguna limpieza le gana a eso.',
          'Por eso, del lado del agua, revisamos primero las terminaciones y el sellado del retorno antes de cotizar cualquier cosa. Un ducto limpio detrás de una compuerta trabada se vuelve a llenar y usted lo va a notar en una sola temporada.',
        ],
      },
    ],
    neighborhoods: ['Pineapple Grove', 'Lake Ida', 'Delray Shores', 'Kings Point', 'Tropic Isle', 'Osceola Park', 'Del-Ida Park'],
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
    depthEs: [
      {
        heading: 'Westgate, Roosevelt Estates y las casas divididas en apartamentos',
        body: [
          'Buena parte de la vivienda al oeste del centro son casas de los cincuenta y sesenta que en algún momento se dividieron en dos o tres unidades. Por fuera siguen siendo una casa. Por dentro hay paredes nuevas, cocinas nuevas y, casi siempre, un solo manejador de aire repartiendo a espacios que hoy pertenecen a familias distintas.',
          'Eso importa más de lo que parece. Cuando el ducto se divide entre unidades, el olor de una cocina llega a la otra, y lo que uno de los inquilinos hace con la humedad lo respiran todos. Cuando alguien cerró una rejilla o tapó un retorno para ganar espacio, el sistema entero trabaja desequilibrado y el cuarto del fondo nunca enfría.',
          'La pregunta que más nos hacen aquí es de quién es la responsabilidad. El ducto es parte del inmueble, no del contrato de alquiler, así que en la práctica corresponde al dueño. Si usted alquila, lo que sí puede hacer es pedir un presupuesto por escrito con el conteo de rejillas y llevárselo al propietario. Se lo damos sin costo y sin que usted quede comprometido a nada.',
        ],
      },
      {
        heading: 'Century Village y los edificios de condominio: dónde termina lo suyo',
        body: [
          'En los condominios de West Palm Beach el manejador va en un clóset, los tramos son cortos y el trabajo se hace en unas pocas horas. Es de los casos donde la diferencia se nota antes, sencillamente porque hay menos sistema donde diluirla.',
          'Lo que esos edificios sí tienen es infraestructura compartida. Donde su tramo se une al montante que sirve a otras unidades, esa parte es de la asociación, y ese límite es exactamente donde los problemas se quedan años sin dueño porque cada lado supone que el otro lo está atendiendo.',
          'Le decimos de qué lado de la línea está su problema antes de cotizar, incluso cuando la respuesta es que le toca a la junta. Limpiar sus dos metros cuando la obstrucción está más arriba no arregla nada, y usted nos estaría llamando otra vez antes de que termine la temporada.',
        ],
      },
      {
        heading: 'Cuánto cuesta y qué es lo que mueve el precio',
        body: [
          'Una limpieza completa cuesta entre 300 y 600 dólares por sistema. Lo que mueve el número dentro de ese rango es el conteo de rejillas, cuánta acumulación hay adentro y qué tan accesible está el manejador. Nada de eso se decide cuando el técnico ya está en su pasillo: se lo decimos antes de agendar.',
          'La palabra importante es por sistema. Muchas casas de dos plantas al oeste de la autopista tienen dos manejadores, uno por piso, y son dos trabajos. Un apartamento con un solo equipo es un precio. Conviene aclararlo por teléfono para que nadie se lleve una sorpresa.',
          'Si le ofrecen la casa completa por 49 o 99 dólares, ese no es el precio del trabajo, es el precio de entrar. Dos técnicos, una máquina y tres horas en una casa cuestan lo que cuestan. Lo que sigue a ese anuncio es media hora de aspirar las rejillas, o una lista de cargos adicionales una vez que ya están adentro.',
        ],
      },
    ],
    depth: [
      {
        heading: 'El Cid, Flamingo Park and Northwood: houses older than air conditioning',
        body: [
          'The historic districts near the water are twenties and thirties construction, built when the answer to a Florida summer was a ceiling fan and a cross breeze. Every duct system in them arrived decades later, and in a good number of those houses it has been replaced once or twice since, each time fitted into a structure that was never designed to carry one.',
          'That produces routing you do not see in newer housing: runs through closets, through dropped soffits, through knee walls, and in some cases through spaces that are neither conditioned nor sealed. Each transition is a place conditioned air escapes and unfiltered air enters, and a run passing through unconditioned space sweats as well as leaks.',
          'It also produces systems where the equipment is modern and the distribution is not. A high efficiency air handler pushing air through ducting laid out in 1978 will not reach the rating on its label, and the fault is almost never in the box that was just replaced.',
        ],
      },
      {
        heading: 'Ibis, Andros Isle and the subdivisions west of the turnpike',
        body: [
          'The western half of West Palm Beach is a different century. Ibis, Andros Isle and the planned communities around them are slab construction from the nineties onward, mostly two storey, frequently on two systems, with flexible duct fanned out across an attic and registers in the ceiling.',
          'Nothing there is worn out, so the problems are the ones that get built in. R-6 flex sags between the trusses over two decades and every sag is a low point where air slows and dust settles out of it. Joint sealing goes brittle in an attic that passes 120 degrees in July. And builder debris, drywall dust and sawdust and insulation fibre, went into open duct while the house was framed and is still being distributed twenty years later.',
          'Families who move into a newer house and start noticing allergy symptoms within a season are usually reacting to that rather than to anything they brought with them. The house is new. What is inside the ductwork is exactly as old as the house.',
        ],
      },
      {
        heading: 'Downtown towers, and knowing which part of the system is yours',
        body: [
          'The condominium buildings along Flagler and through downtown are sealed envelopes with compact air handlers in closets and short duct runs. They can be cleaned properly in a few hours, and the difference is usually easier to notice than in a house, simply because there is less system to dilute it.',
          'What those buildings do have is shared infrastructure. Where your run joins a riser serving other units, that part belongs to the association, and the boundary is where problems sit unowned for years because both sides assume the other is dealing with it.',
          'We will tell you which side of the line your problem is on before quoting, including when the answer is that it belongs to your board. Cleaning your six feet when the restriction is upstream of them fixes nothing, and you would be calling us again by the end of the season.',
        ],
      },
    ],
    neighborhoods: ['El Cid', 'Flamingo Park', 'Northwood', 'Ibis', 'Andros Isle', 'SoSo'],
    dryerVent: {
      local: [
        'The historic districts, El Cid, Flamingo Park and Northwood, are twenties and thirties houses where the laundry was added generations after the house was built. Vent runs in those homes were improvised, and we regularly find them routed through a crawl space, a closet, or in a few cases terminating into an attic with no exit at all.',
        'Out west, Ibis and Andros Isle are modern planned communities with two storey homes, upstairs laundry rooms and long roof runs. Different century, same physics: the longer the run, the more lint falls out of the air before it gets outside.',
      ],
      common: 'In the historic districts, vents that terminate inside the structure rather than outside it, which is both a fire risk and the reason the laundry room feels damp.',
    },
  },

  doral: {
    depthEs: [
      {
        heading: 'Una ciudad que todavía se está construyendo, y lo que eso deja adentro',
        body: [
          'Doral es de las ciudades más jóvenes del condado y sigue levantando obra. Eso cambia el diagnóstico por completo: aquí casi nada está gastado, así que cuando un sistema no rinde, el motivo rara vez es la edad.',
          'Lo que sí encontramos es escombro de la etapa de construcción. Mientras la casa estaba en obra el ducto quedó abierto, y por ahí entró polvo de drywall, aserrín y fibra de aislamiento que el sistema lleva años repartiendo. En una torre o en un townhouse recién entregado esto es la norma, no la excepción.',
          'Y hay una segunda fuente que la gente no asocia: la obra del vecino. En una zona que no ha parado de construir, el polvo fino de las obras cercanas entra por cada rendija del camino de retorno cada vez que arranca el ventilador. Por eso una casa nueva y limpia puede tener sombras grises alrededor de las rejillas al segundo año.',
        ],
      },
      {
        heading: 'Downtown Doral, Doral Isles y los edificios con manejador en clóset',
        body: [
          'Buena parte de la vivienda de Doral es de mediana altura, con el manejador metido en un clóset y tramos de ducto cortos. Es una configuración que se limpia bien y rápido, y donde la diferencia se nota antes porque hay menos sistema donde diluirla.',
          'Pero en esa configuración el serpentín pesa más que el ducto. Está a centímetros del filtro, trabaja casi todo el año, y en este clima se ensucia antes que los tramos. Cuando alguien nos llama por un olor en un apartamento de Doral, el origen está en el serpentín o en la bandeja de condensado más veces de las que está en el ducto.',
          'Se lo decimos y cotizamos eso, que es un trabajo distinto y más barato. Limpiar un ducto que está bien para no contradecir a nadie es la manera más rápida de que usted nos vuelva a llamar por el mismo olor.',
        ],
      },
      {
        heading: 'Dos plantas, dos sistemas, dos precios',
        body: [
          'Muchos townhouses de Doral tienen un equipo por piso. Eso no es un detalle técnico, es la diferencia entre un precio y dos: el trabajo se cotiza por sistema, y una casa con dos manejadores son dos limpiezas.',
          'Conviene aclararlo por teléfono antes de agendar. Nuestro rango publicado es de 300 a 600 dólares por sistema, y preferimos que usted sepa desde el principio si en su caso son uno o dos que enterarse cuando el técnico ya está adentro.',
          'También vale saber que en una casa de dos plantas el piso de arriba casi siempre enfría peor. Antes de concluir que el equipo se quedó chico, vale la pena ver qué está pasando en el camino entre él y los cuartos.',
        ],
      },
    ],
    depth: [
      {
        heading: 'A city still under construction, and what that leaves behind',
        body: [
          'Doral is one of the youngest cities in the county and it is still building. That changes the diagnosis entirely: almost nothing here is worn out, so when a system underperforms, age is rarely the reason.',
          'What we do find is debris from the construction stage. While the house was being framed the ductwork sat open, and drywall dust, sawdust and insulation fibre went into it. The system has been redistributing that ever since. In a recently delivered townhome or tower this is the norm rather than the exception.',
          'There is a second source people do not connect: the neighbour\u2019s construction. In an area that has never stopped building, fine site dust enters through every gap in the return path each time the blower runs. That is how a clean, new house ends up with grey shadowing around its registers by the second year.',
        ],
      },
      {
        heading: 'Downtown Doral, Doral Isles and the closet air handler',
        body: [
          'A large share of Doral housing is mid-rise, with the air handler in a closet and short duct runs. It is a configuration that cleans properly and quickly, and the difference is easier to notice than in a house because there is less system to dilute it.',
          'In that configuration the coil matters more than the ductwork. It sits inches from the filter, it runs most of the year, and in this climate it fouls before the runs do. When someone calls us about a smell in a Doral apartment, the source is the evaporator coil or the condensate pan more often than it is the duct.',
          'We say so and quote that instead, which is a different and cheaper job. Cleaning a duct that is fine in order to avoid contradicting anyone is the fastest way to have you calling us again about the same smell.',
        ],
      },
      {
        heading: 'Two floors, two systems, two prices',
        body: [
          'Many Doral townhomes run one system per floor. That is not a technical footnote, it is the difference between one price and two: the work is quoted per system, and a house with two air handlers is two cleanings.',
          'It is worth settling on the phone before booking. Our published range is $300 to $600 per system, and we would rather you knew from the start whether yours is one or two than find out once a technician is already inside.',
          'It is also worth knowing that in a two storey house the upper floor almost always cools worse. Before concluding the equipment is undersized, it is worth seeing what is happening between it and the rooms.',
        ],
      },
    ],
    neighborhoods: ['Downtown Doral', 'Doral Isles', 'Islands at Doral', 'Costa del Sol', 'Doral Park', 'Vintage Estates'],
  },

  sweetwater: {
    depthEs: [
      {
        heading: 'Casas que crecieron por partes, con el ducto original',
        body: [
          'La mayoría de las casas de Sweetwater son de bloque, de una planta, de los sesenta y setenta, y a casi todas se les agregó algo con los años: un cuarto atrás, un garaje cerrado, una cocina ampliada.',
          'El problema es que el ducto casi nunca creció con la casa. Se le colgó un tramo flexible al sistema existente para alimentar el cuarto nuevo, y ese tramo suele ser el más largo, el peor sostenido y el que menos entrega. Es la razón número uno por la que en estas casas hay un cuarto que nunca enfría igual que los demás.',
          'Y el retorno se queda igual que siempre. Una casa que empezó con dos cuartos y hoy tiene cuatro sigue jalando aire por una sola rejilla de pasillo del tamaño original, y un sistema que no puede jalar suficiente aire tampoco puede entregarlo.',
        ],
      },
      {
        heading: 'Los alquileres cerca de la universidad',
        body: [
          'La zona cercana a la universidad tiene mucha casa dividida y mucho alquiler, y ahí el ducto es de nadie. El inquilino no lo manda a limpiar porque no es suyo, y el propietario no lo ve porque no vive ahí.',
          'El resultado es previsible: sistemas que llevan diez años o más sin que nadie los abra, filtros que se cambian cuando alguien se acuerda, y olores que el siguiente inquilino hereda junto con las llaves.',
          'Si usted alquila, el ducto es parte del inmueble y no del contrato, así que en la práctica le toca al dueño. Lo que sí puede hacer es pedirnos un presupuesto por escrito con el conteo de rejillas y llevárselo. Se lo damos sin costo y sin que usted quede comprometido a nada.',
        ],
      },
      {
        heading: 'Terreno bajo, humedad alta',
        body: [
          'Sweetwater está en la parte baja y occidental del condado, cerca del borde de los Everglades, y el nivel freático aquí es alto. Eso no le afecta el ducto directamente, pero sí le sube la humedad de fondo dentro de la casa.',
          'Un equipo que trabaja contra más humedad tiene el serpentín mojado más horas al día, y un serpentín que casi nunca se seca es donde empieza el olor. Si el suyo huele más fuerte en los primeros minutos después de que arranca, mire ahí antes que en los tramos.',
          'Lo mismo aplica a la bandeja de condensado y a su desagüe. Es la pieza más barata de atender del sistema entero y la que más seguido resulta ser el origen de la queja.',
        ],
      },
    ],
    depth: [
      {
        heading: 'Houses that grew in pieces, on their original ductwork',
        body: [
          'Most Sweetwater housing is single storey block construction from the sixties and seventies, and nearly all of it has been added to: a room at the back, an enclosed garage, an extended kitchen.',
          'The problem is that the ductwork almost never grew with the house. A flexible run was hung off the existing system to feed the new room, and that run tends to be the longest, the least supported and the weakest delivering. It is the single most common reason one room in these houses never cools like the others.',
          'The return stays exactly as it was. A house that started with two bedrooms and now has four is still pulling air through one hallway grille sized for the original plan, and a system that cannot draw enough air cannot deliver it either.',
        ],
      },
      {
        heading: 'The rentals near the university',
        body: [
          'The area near the university has a lot of divided housing and a lot of renting, and ductwork there belongs to nobody. The tenant does not have it cleaned because it is not theirs, and the owner does not see it because they do not live there.',
          'The result is predictable: systems nobody has opened in a decade or more, filters changed when someone remembers, and smells the next tenant inherits along with the keys.',
          'If you rent, the ductwork is part of the building rather than part of the lease, so in practice it is the owner\u2019s. What you can do is ask us for a written quote with the register count and take it to them. We give it at no cost and it commits you to nothing.',
        ],
      },
      {
        heading: 'Low ground, high humidity',
        body: [
          'Sweetwater sits on the low western side of the county near the edge of the Everglades, and the water table here is high. That does not reach your ductwork directly, but it does raise the background humidity inside the house.',
          'Equipment working against more humidity keeps a wet coil for more hours of the day, and a coil that rarely dries is where the smell starts. If yours is strongest in the first minutes after the system kicks on, look there before looking at the runs.',
          'The same goes for the condensate pan and its drain. It is the cheapest part of the whole system to deal with and the one that most often turns out to be the source of the complaint.',
        ],
      },
    ],
    neighborhoods: ['Sweetwater Estates', 'West Flagler', 'Coral Way corridor', 'FIU area', 'NW 107th Avenue'],
  },

  'hialeah-gardens': {
    depthEs: [
      {
        heading: 'Más nueva que Hialeah, con problemas distintos',
        body: [
          'Es fácil meter a Hialeah Gardens en el mismo saco que su vecina grande, y es un error. Hialeah tiene vivienda que en buena parte es de los cincuenta y sesenta. Aquí lo que domina es construcción de los ochenta en adelante, sobre losa, con el ducto en el ático.',
          'Eso significa que la falla no es desgaste sino diseño y calor. El flexible R-6 se descuelga entre las vigas con las décadas, y cada punto bajo es donde el aire pierde velocidad y suelta el polvo que traía. El sellado de las uniones se pone quebradizo en un ático que en julio pasa de 120 grados.',
          'Ninguna de las dos cosas produce un día en que el sistema se detiene. Producen una casa que enfría un poco peor cada año, hasta que el dueño concluye que el equipo se le quedó chico y cambia una caja que estaba cumpliendo.',
        ],
      },
      {
        heading: 'Vivir al lado de bodegas e industria ligera',
        body: [
          'Hialeah Gardens tiene zonas de bodegas, talleres e industria ligera pegadas a la vivienda, y eso mete al aire residencial más polvo del que cargaría un suburbio tierra adentro. Súmele el tráfico pesado de Okeechobee Road.',
          'Ese polvo no se queda afuera. Entra por el camino de retorno cada vez que arranca el ventilador, y en este tipo de casa el retorno suele ser una rejilla grande de pasillo con la estructura de la pared detrás en lugar de un conducto sellado. Todo lo que esté en esa pared, y en el ático encima, entra al sistema.',
          'Por eso aquí sellar el retorno rinde más que limpiar seguido. Con el camino cerrado el filtro por fin hace su trabajo. Limpiar un sistema que sigue jalando polvo sin filtrar le compra una buena semana.',
        ],
      },
      {
        heading: 'Qué revisar usted mismo antes de llamarnos',
        body: [
          'Hay tres cosas que puede verificar en diez minutos y que le pueden ahorrar una visita. La primera es el filtro: si lleva más de tres meses puesto, cámbielo y espere una semana antes de concluir nada, porque un filtro saturado da exactamente los mismos síntomas que un ducto obstruido.',
          'La segunda es pasar la mano por cada rejilla y comparar. Si todas entregan poco, el asunto está en el equipo o en el filtro. Si una entrega mucho menos que el resto, está en ese tramo y sí es trabajo nuestro.',
          'La tercera es mirar si alguna rejilla tiene manchas grises alrededor del marco. Eso es polvo que pasó de largo, y significa que hay aire entrando al sistema por donde no debería. Con esas tres respuestas le podemos decir por teléfono si conviene que vayamos.',
        ],
      },
    ],
    depth: [
      {
        heading: 'Newer than Hialeah, with different problems',
        body: [
          'It is easy to file Hialeah Gardens with its larger neighbour, and it is a mistake. A good share of Hialeah housing is fifties and sixties. What dominates here is eighties onward construction, on slab, with the ductwork in the attic.',
          'That means the failure is design and heat rather than wear. R-6 flex sags between the trusses over decades, and every sag is a low point where air slows and dust drops out of it. Joint sealing goes brittle in an attic that passes 120 degrees in July.',
          'Neither produces a day when the system stops. They produce a house that cools slightly worse every year, until the owner concludes the equipment is undersized and replaces a box that was doing its job.',
        ],
      },
      {
        heading: 'Living next to warehouses and light industry',
        body: [
          'Hialeah Gardens has warehouse, workshop and light industrial blocks up against its housing, and that puts more dust into the residential air than an inland suburb would carry. Add the heavy traffic on Okeechobee Road.',
          'That dust does not stay outside. It comes in through the return path every time the blower runs, and in this housing type the return is usually a large hallway grille with wall framing behind it rather than sealed sheet metal. Anything in that wall, and in the attic above it, gets pulled into the system.',
          'That is why sealing the return pays better here than cleaning more often. With the path closed the filter finally does its job. Cleaning a system that keeps drawing unfiltered dust buys you one good week.',
        ],
      },
      {
        heading: 'What to check yourself before calling us',
        body: [
          'There are three things you can check in ten minutes that may save you a visit. The first is the filter: if it has been in more than three months, change it and wait a week before concluding anything, because a loaded filter produces exactly the symptoms of a restricted duct.',
          'The second is to pass your hand across every register and compare. If they all deliver poorly, the issue is the equipment or the filter. If one delivers far less than the rest, it is in that run and it is genuinely our work.',
          'The third is to look for grey shadowing around any register frame. That is dust that got past the filter, which means air is entering the system where it should not. With those three answers we can tell you on the phone whether a visit is worth it.',
        ],
      },
    ],
    neighborhoods: ['Okeechobee Road corridor', 'NW 87th Avenue', 'Palm Springs North', 'Country Club', 'West 84th Street'],
  },

  'miami-lakes': {
    depthEs: [
      {
        heading: 'Los árboles son la razón por la que su filtro se satura antes',
        body: [
          'Miami Lakes se planificó alrededor de sus árboles, y esa copa madura es lo que hace agradable al pueblo y lo que le complica el sistema. Un suburbio pelado no suelta lo que suelta esto: polen, semilla, hoja triturada y residuo orgánico fino, todo el año y en cantidad.',
          'Nada de eso entra por la puerta. Entra por el camino de retorno, y en la mayoría de estas casas el retorno es una rejilla grande de pasillo con la estructura de la pared detrás. Si esa cavidad no está sellada, el sistema jala directamente de la pared y del ático.',
          'La señal desde adentro es un filtro que se ve sucio antes de tiempo. Si el suyo llega gris al mes en lugar de a los tres, no está exagerando y no es mala suerte: es que está entrando aire sin filtrar por algún lado.',
        ],
      },
      {
        heading: 'Los lagos, y la humedad que se queda abajo',
        body: [
          'El agua que le da el nombre al pueblo también le sube la humedad de fondo, sobre todo en las casas más cercanas a los lagos y en las plantas bajas. El equipo trabaja contra más humedad, el serpentín pasa más horas mojado, y un serpentín que casi nunca se seca es donde empieza el olor.',
          'Distinguirlo es sencillo por el patrón. Si el olor aparece cuando arranca el equipo y después se disipa, viene del serpentín o de la bandeja. Si es constante y más fuerte en un cuarto específico, ahí sí el ducto es el sospechoso.',
          'Vale decirlo aunque no nos convenga: cuando el problema es el serpentín, eso cotizamos, y es un trabajo distinto y más barato que una limpieza completa de ductos.',
        ],
      },
      {
        heading: 'Tres épocas de vivienda en un mismo pueblo',
        body: [
          'Miami Lakes tiene casas de una planta de los sesenta y setenta, vivienda de los ochenta y noventa, y townhouses recientes, y cada época falla distinto. Vale saber en cuál está usted antes de decidir qué hacer.',
          'En las casas más antiguas el equipo ya se cambió una o dos veces sobre una distribución que nunca se rediseñó. Un equipo moderno sobre ducto original no va a dar el número de su etiqueta, y la falla casi nunca está en la caja que se acaba de instalar.',
          'En las más nuevas nada está gastado, así que lo que hay es lo que vino de fábrica: descuelgue, uniones quebradizas y polvo de construcción que sigue circulando. Ahí una limpieza normalmente resuelve la queja por sí sola, porque el sistema está sano y lo único que tiene es el escombro con el que nació.',
        ],
      },
    ],
    depth: [
      {
        heading: 'The trees are why your filter loads early',
        body: [
          'Miami Lakes was planned around its trees, and that mature canopy is both what makes the town pleasant and what complicates its air systems. A bare suburb does not shed what this does: pollen, seed, shredded leaf and fine organic debris, year round and in quantity.',
          'None of it comes in through the front door. It comes in through the return path, and in most of these houses the return is a large hallway grille with wall framing behind it. If that cavity is unsealed, the system draws straight from the wall and the attic.',
          'The tell from inside is a filter that looks dirty early. If yours is grey at one month instead of three, you are not imagining it and it is not bad luck: unfiltered air is getting in somewhere.',
        ],
      },
      {
        heading: 'The lakes, and the humidity that stays low',
        body: [
          'The water the town is named for also raises the background humidity, particularly in the houses nearest the lakes and on ground floors. Equipment works against more moisture, the coil stays wet for more hours, and a coil that rarely dries is where a smell begins.',
          'Telling them apart is simple from the pattern. If the smell appears when the system starts and then fades, it is the coil or the pan. If it is constant and strongest in one particular room, the ductwork is the suspect.',
          'Worth saying even though it does not suit us: when the problem is the coil, that is what we quote, and it is a different and cheaper job than a full duct cleaning.',
        ],
      },
      {
        heading: 'Three eras of housing in one town',
        body: [
          'Miami Lakes has single storey houses from the sixties and seventies, eighties and nineties housing, and recent townhomes, and each era fails differently. It is worth knowing which one you are in before deciding what to do.',
          'In the older houses the equipment has already been replaced once or twice onto a distribution layout that was never redesigned. Modern equipment on original ducting will not reach the number on its label, and the fault is almost never in the box that was just installed.',
          'In the newer ones nothing is worn out, so what you have is what came with it: sag, brittle joints and construction dust still in circulation. There a cleaning usually settles the complaint on its own, because the system is sound and simply full of the debris it started with.',
        ],
      },
    ],
    neighborhoods: ['Miami Lakes Town Center', 'Loch Lomond', 'Royal Oaks', 'Lake Martha', 'Bull Run', 'Lake Sarah'],
  },

  poinciana: {
    depthEs: [
      {
        heading: 'Casas nuevas, escombro viejo',
        body: [
          'Poinciana es de las comunidades más nuevas que atendemos, y eso invierte el diagnóstico. Aquí casi nada está gastado, así que cuando un sistema no rinde el motivo rara vez es la edad del equipo.',
          'Lo que encontramos es lo que entró durante la obra. Mientras la casa estaba en construcción el ducto estuvo abierto, y por ahí pasó polvo de drywall, aserrín y fibra de aislamiento. Ese material no se va solo: el sistema lo lleva repartiendo desde el día que usted se mudó.',
          'Por eso una familia que llega a una casa recién construida y empieza con alergias en la primera temporada casi siempre está reaccionando a eso, no a algo que trajo consigo. La casa es nueva. Lo que hay adentro del ducto tiene exactamente la edad de la casa.',
        ],
      },
      {
        heading: 'El ático de Florida y el flexible que se descuelga',
        body: [
          'Todo el ducto aquí va por el ático, y un ático en Poinciana en julio pasa de 120 grados. El flexible R-6 aguanta, pero se descuelga entre las vigas con los años, y cada punto bajo es donde el aire pierde velocidad y suelta el polvo que traía.',
          'El sellado de las uniones se pone quebradizo con ese mismo calor. Ninguna de las dos cosas produce un día en que el sistema se detiene: producen una casa que enfría un poco peor cada año.',
          'La consecuencia práctica es que mucha gente cambia un equipo que estaba cumpliendo. Antes de gastar en una caja nueva vale la pena ver qué está pasando entre ella y los cuartos, porque un equipo moderno empujando aire por una distribución que se descolgó no va a dar el número de su etiqueta.',
        ],
      },
      {
        heading: 'Lejos de todo, y qué significa eso para una visita',
        body: [
          'Poinciana es enorme y está bastante separada de Kissimmee y de Orlando. Lo decimos porque afecta algo concreto: agendamos por zona, y conviene que le digamos qué días estamos por allá en lugar de prometerle una hora que después no se sostiene.',
          'Lo que no cambia es el precio. Nuestro rango publicado es de 300 a 600 dólares por sistema, y no le cobramos más por vivir lejos. Lo que sí le pedimos es flexibilidad con el día.',
          'Y si tiene vecinos con la misma necesidad, dígannoslo. Varias casas de la misma zona el mismo día es más fácil de agendar para todos.',
        ],
      },
    ],
    depth: [
      {
        heading: 'New houses, old debris',
        body: [
          'Poinciana is among the newest communities we serve, and that inverts the diagnosis. Almost nothing here is worn out, so when a system underperforms the reason is rarely the age of the equipment.',
          'What we find is what went in during construction. While the house was being framed the ductwork sat open, and drywall dust, sawdust and insulation fibre went into it. That material does not leave on its own: the system has been distributing it since the day you moved in.',
          'A family that moves into a newly built house and starts noticing allergy symptoms within a season is usually reacting to that rather than to anything they brought with them. The house is new. What is inside the ductwork is exactly as old as the house.',
        ],
      },
      {
        heading: 'The Florida attic and the flex that sags',
        body: [
          'All of the ducting here runs through the attic, and a Poinciana attic in July passes 120 degrees. R-6 flex survives that, but it sags between the trusses over the years, and every sag is a low point where air slows and drops the dust it was carrying.',
          'Joint sealing goes brittle in the same heat. Neither produces a day when the system stops: they produce a house that cools slightly worse every year.',
          'The practical consequence is that a lot of people replace equipment that was doing its job. Before spending on a new box it is worth seeing what is happening between it and the rooms, because modern equipment pushing air through a distribution that has sagged will not reach the number on its label.',
        ],
      },
      {
        heading: 'Out on its own, and what that means for a visit',
        body: [
          'Poinciana is very large and sits a fair way out from Kissimmee and Orlando. We mention it because it affects something concrete: we schedule by area, and we would rather tell you which days we are out there than promise an hour that does not hold.',
          'What it does not change is the price. Our published range is $300 to $600 per system, and we do not charge more for distance. What we do ask for is some flexibility on the day.',
          'And if neighbours need the same work, say so. Several houses in one area on one day is easier to schedule for everybody.',
        ],
      },
    ],
    neighborhoods: ['Solivita', 'Poinciana Village', 'Cypress Woods', 'Marigold', 'Bellalago', 'Deerwood'],
  },

  'buenaventura-lakes': {
    depthEs: [
      {
        heading: 'Treinta veranos sobre el mismo ducto',
        body: [
          'La mayoría de las casas de Buenaventura Lakes son del auge de los ochenta y noventa, y esa es exactamente la edad en la que el ducto empieza a pedir atención. No está roto. Está cansado.',
          'Lo que vemos aquí una y otra vez es flexible descolgado entre las vigas, uniones cuyo sellado se puso quebradizo con treinta julios encima, y aislamiento que se separó de la cubierta en algún tramo. Cada una de esas cosas se lleva un poco del aire que usted paga por enfriar.',
          'La señal más común desde adentro es que la casa tarda más en llegar a la temperatura que antes alcanzaba, y que el cuarto más lejano del manejador ya no llega nunca. Es fácil culpar al equipo, y muchas veces el equipo está bien.',
        ],
      },
      {
        heading: 'El retorno que se quedó en el tamaño original',
        body: [
          'En este tipo de casa el retorno suele ser una sola rejilla grande en un pasillo, y detrás de ella muchas veces está la estructura de la pared en lugar de un conducto sellado. Todo lo que esté en esa pared, y en el ático por encima, entra al sistema cada vez que arranca el ventilador.',
          'Por eso aparecen sombras grises alrededor de una rejilla en una casa que se limpia cada semana. Ese polvo no está entrando por la puerta: está saliendo de adentro del edificio y el sistema lo reparte.',
          'Sellar el camino de retorno rinde más que limpiar seguido, porque con el camino cerrado el filtro por fin puede hacer su trabajo. Si su filtro llega gris al mes en lugar de a los tres, eso es lo que le está pasando.',
        ],
      },
      {
        heading: 'Casas llenas, sistemas del tamaño de otra época',
        body: [
          'Muchas casas de aquí albergan hoy a más gente de la que el plano original contemplaba, con familias de tres generaciones bajo el mismo techo. Es común y no tiene nada de malo, pero el sistema fue dimensionado para otra cosa.',
          'Más personas significa más humedad adentro: cocinar, duchas, ropa lavada. El equipo trabaja más horas contra más humedad, el serpentín pasa más tiempo mojado, y un serpentín que casi nunca se seca es donde empieza el olor.',
          'Si el olor aparece cuando arranca el equipo y luego se disipa, mire el serpentín y la bandeja de condensado antes que los tramos. Es un trabajo distinto y más barato, y se lo decimos aunque no nos convenga.',
        ],
      },
    ],
    depth: [
      {
        heading: 'Thirty summers on the same ductwork',
        body: [
          'Most Buenaventura Lakes housing comes from the eighties and nineties boom, and that is exactly the age at which ductwork starts asking for attention. It is not broken. It is tired.',
          'What we see here repeatedly is flex sagging between the trusses, joints whose sealing went brittle under thirty Julys, and insulation that has separated from the jacket somewhere along a run. Each of those takes a little of the air you are paying to cool.',
          'The most common tell from inside is that the house takes longer to reach a temperature it used to hit, and that the room furthest from the air handler no longer gets there at all. It is easy to blame the equipment, and often the equipment is fine.',
        ],
      },
      {
        heading: 'A return still sized for the original plan',
        body: [
          'In this housing type the return is usually one large hallway grille, and behind it is often wall framing rather than sealed sheet metal. Anything in that wall, and in the attic above it, enters the system every time the blower runs.',
          'That is why grey shadowing appears around a register in a house that is cleaned every week. The dust is not coming through the front door: it is coming from inside the building and the system is redistributing it.',
          'Sealing the return path pays better than cleaning more often, because with the path closed the filter can finally do its job. If your filter is grey at one month instead of three, that is what is happening.',
        ],
      },
      {
        heading: 'Full houses on systems sized for another era',
        body: [
          'Many houses here hold more people than the original plan assumed, with three generations under one roof. That is common and there is nothing wrong with it, but the system was sized for something else.',
          'More people means more moisture indoors: cooking, showers, laundry. Equipment runs more hours against more humidity, the coil stays wet longer, and a coil that rarely dries is where a smell begins.',
          'If the smell arrives when the system starts and then fades, look at the coil and the condensate pan before the runs. It is a different and cheaper job, and we say so even though it does not suit us.',
        ],
      },
    ],
    neighborhoods: ['Buenaventura Boulevard', 'Robert McLane', 'Lakeside Village', 'Simpson Road', 'Boggy Creek'],
  },

  'town-n-country': {
    depthEs: [
      {
        heading: 'Uno de los suburbios más antiguos de este lado de Tampa',
        body: [
          'Town \u2019n\u2019 Country se construyó en los sesenta y setenta, y eso decide casi todo. Son casas de una planta sobre losa, con el ducto en el ático, y en muchas de ellas el trazado sigue siendo el original aunque el equipo ya se haya cambiado una o dos veces.',
          'Esa combinación es la que más vemos fallar: una caja moderna y eficiente empujando aire por una distribución diseñada para otro equipo, en otra década. No va a dar el rendimiento de su etiqueta, y la falla casi nunca está en lo que se acaba de instalar.',
          'Vale revisarlo antes de gastar otra vez. Cambiar el equipo por segunda vez sin tocar el ducto suele repetir el mismo resultado.',
        ],
      },
      {
        heading: 'Cerca de la bahía: humedad todo el año',
        body: [
          'La cercanía a la bahía mantiene el aire húmedo aquí durante todo el año, no solo en verano. El equipo trabaja contra esa humedad de forma constante, el serpentín pasa más horas mojado, y el aislamiento del ducto en un ático caliente y húmedo es un sitio donde las cosas crecen.',
          'Si su casa ha tomado agua alguna vez, por tormenta o por inundación, el ducto vale una revisión aunque los pisos ya se hayan resuelto. El aislamiento que se mojó dentro de una cubierta sellada no se seca, y la primera señal suele ser un olor semanas después.',
          'Es la parte de la casa que nadie abre, y por eso es la que más tarda en descubrirse.',
        ],
      },
      {
        heading: 'Qué mueve el precio y qué no',
        body: [
          'Una limpieza completa cuesta entre 300 y 600 dólares por sistema. Lo que mueve el número dentro de ese rango es el conteo de rejillas, cuánta acumulación hay adentro y qué tan accesible está el manejador. Se lo decimos antes de agendar, no cuando el técnico ya está en su pasillo.',
          'Casi todas las casas de Town \u2019n\u2019 Country son de un solo sistema, así que en general es un precio y no dos. Si la suya tiene una ampliación con su propio equipo, eso sí cambia la cuenta y conviene mencionarlo por teléfono.',
          'Si le ofrecen la casa completa por 49 o 99 dólares, ese no es el precio del trabajo, es el precio de entrar. Dos técnicos, una máquina y tres horas cuestan lo que cuestan.',
        ],
      },
    ],
    depth: [
      {
        heading: 'One of the oldest suburbs on this side of Tampa',
        body: [
          'Town \u2019n\u2019 Country was built through the sixties and seventies, and that decides most of it. These are single storey slab houses with attic ducting, and in many of them the layout is still the original one even though the equipment has been replaced once or twice.',
          'That combination is the one we most often see fail: a modern, efficient box pushing air through a distribution designed for different equipment in another decade. It will not deliver its rated performance, and the fault is almost never in the thing that was just installed.',
          'It is worth checking before spending again. Replacing the equipment a second time without touching the ductwork usually repeats the same result.',
        ],
      },
      {
        heading: 'Close to the bay, humid all year',
        body: [
          'Being near the bay keeps the air humid here year round rather than only in summer. Equipment works against that constantly, the coil stays wet for more hours, and duct insulation in a hot damp attic is somewhere things grow.',
          'If your house has ever taken water, from a storm or a flood, the ductwork is worth inspecting even if the floors were dealt with. Insulation that got wet inside a sealed jacket does not dry out, and the first sign is usually a smell weeks later.',
          'It is the part of the building nobody opens, which is why it is the last thing anyone finds.',
        ],
      },
      {
        heading: 'What moves the price and what does not',
        body: [
          'A full cleaning runs $300 to $600 per system. What moves the number within that range is the register count, how much buildup is in there, and how accessible the air handler is. We tell you before booking, not once a technician is standing in your hallway.',
          'Almost every Town \u2019n\u2019 Country house is a single system, so it is generally one price rather than two. If yours has an addition with its own equipment, that does change the arithmetic and it is worth mentioning on the phone.',
          'If you are offered the whole house for $49 or $99, that is not the price of the job, it is the price of getting in the door. Two technicians, a machine and three hours cost what they cost.',
        ],
      },
    ],
    neighborhoods: ['Country Way', 'Bay Crest Park', 'Twin Lakes', 'Woodbridge', 'Sweetwater Creek', 'Bayside West'],
  },

  'lake-worth': {
    depthEs: [
      {
        heading: 'Casas de los años veinte que nunca se dibujaron con ducto',
        body: [
          'El centro histórico y las calles cercanas al agua son casitas y bungalows de los años veinte y treinta. Se construyeron cuando la respuesta a un verano de Florida era un ventilador de techo y una brisa cruzada, y todo el sistema de aire que hay hoy llegó décadas después.',
          'Eso produce trazados que no se ven en vivienda más nueva: tramos por clósets, por plafones bajados, por paredes bajas de ático y a veces por espacios que no están ni acondicionados ni sellados. Cada transición de esas es un punto por donde se escapa aire frío y entra aire sin filtrar.',
          'También produce casas donde el equipo es moderno y la distribución no. Un manejador eficiente empujando aire por un ducto trazado en 1975 no va a dar lo que dice su etiqueta, y la falla casi nunca está en la caja que se acaba de instalar.',
        ],
      },
      {
        heading: 'Cerca del agua, y lo que la sal hace tierra adentro',
        body: [
          'Lake Worth Beach está lo bastante cerca del mar para que el aire traiga sal todos los días, no solo durante las tormentas. Llega al serpentín por el camino de retorno y llega al condensador directamente.',
          'Lo que produce es corrosión en las aletas de aluminio del serpentín, que entonces retiene humedad y suciedad más fácilmente que uno limpio, lo cual restringe el flujo, lo cual hace que todo el sistema trabaje más para dar menos. El equipo costero no suele fallar antes de tiempo: primero rinde mal durante años.',
          'Por eso aquí revisamos el serpentín y la bandeja antes de cotizar una limpieza de ductos. Cerca del agua, el serpentín es el origen de la queja más seguido que el ducto, y es un trabajo distinto y más barato.',
        ],
      },
      {
        heading: 'Casas divididas y alquileres: de quién es el ducto',
        body: [
          'Mucha de la vivienda antigua de aquí se dividió en algún momento en dos o tres unidades, y otra parte se alquila entera. En ambos casos el ducto termina siendo de nadie: el inquilino no lo manda a limpiar porque no es suyo y el dueño no lo ve porque no vive ahí.',
          'Cuando un solo manejador reparte a espacios que hoy pertenecen a familias distintas, el olor de una cocina llega a la otra y la humedad que genera uno la respiran todos. Y cuando alguien cerró una rejilla o tapó un retorno para ganar espacio, el sistema entero queda desequilibrado.',
          'El ducto es parte del inmueble y no del contrato de alquiler, así que en la práctica le toca al propietario. Si usted alquila, pídanos un presupuesto por escrito con el conteo de rejillas y lléveselo. Se lo damos sin costo y sin compromiso.',
        ],
      },
    ],
    depth: [
      {
        heading: 'Twenties houses that were never drawn with ductwork',
        body: [
          'The historic downtown and the streets near the water are cottages and bungalows from the twenties and thirties. They were built when the answer to a Florida summer was a ceiling fan and a cross breeze, and every air system in them arrived decades later.',
          'That produces routing you do not see in newer housing: runs through closets, through dropped soffits, through knee walls, and in some cases through spaces that are neither conditioned nor sealed. Each of those transitions is a place cooled air escapes and unfiltered air enters.',
          'It also produces houses where the equipment is modern and the distribution is not. An efficient air handler pushing air through ducting laid out in 1975 will not reach the number on its label, and the fault is almost never in the box that was just installed.',
        ],
      },
      {
        heading: 'Close to the water, and what salt does inland',
        body: [
          'Lake Worth Beach is near enough to the ocean that the air carries salt every day, not only during storms. It reaches the coil through the return path and it reaches the condenser directly.',
          'What it produces is corrosion on the aluminium fins of the coil, which then holds moisture and dirt more readily than a clean coil, which restricts airflow, which makes the whole system work harder for less. Coastal equipment does not usually fail early: it underperforms for years first.',
          'That is why we look at the coil and the pan here before quoting a duct cleaning. Near the water the coil is the source of the complaint more often than the ductwork, and it is a different and cheaper job.',
        ],
      },
      {
        heading: 'Divided houses and rentals: whose ductwork is it',
        body: [
          'A lot of the older housing here was split into two or three units at some point, and much of the rest is rented whole. In both cases the ductwork ends up belonging to nobody: the tenant does not have it cleaned because it is not theirs and the owner does not see it because they do not live there.',
          'When one air handler feeds spaces that now belong to different families, one kitchen\u2019s smell reaches the other and the moisture one household makes is breathed by all of them. And where someone closed a register or blocked a return to gain space, the whole system runs out of balance.',
          'The ductwork is part of the building rather than part of the lease, so in practice it is the owner\u2019s. If you rent, ask us for a written quote with the register count and take it to them. We give it at no cost and it commits you to nothing.',
        ],
      },
    ],
    neighborhoods: ['Downtown Lake Worth', 'College Park', 'Bryant Park', 'Parrot Cove', 'Tropical Ridge', 'Lake Osborne'],
  },

  greenacres: {
    depthEs: [
      {
        heading: 'La edad exacta a la que el ducto empieza a pedir atención',
        body: [
          'La mayoría de la vivienda de Greenacres es de los setenta a los noventa, y esa es precisamente la edad a la que un sistema de ductos empieza a fallar sin romperse. No está roto. Está cansado.',
          'Lo que vemos aquí una y otra vez es flexible descolgado entre las vigas, uniones cuyo sellado se puso quebradizo con treinta julios encima, y aislamiento separado de la cubierta en algún tramo. Cada una de esas cosas se lleva un poco del aire que usted paga por enfriar.',
          'La señal desde adentro es que la casa tarda más en llegar a una temperatura que antes alcanzaba, y que el cuarto más lejano del manejador ya no llega nunca. Es fácil culpar al equipo, y muchas veces el equipo está bien.',
        ],
      },
      {
        heading: 'Los condominios bajos y el límite con la asociación',
        body: [
          'Greenacres tiene bastante condominio de poca altura, y ahí el manejador va en un clóset con tramos cortos. Se limpia bien en unas horas, y la diferencia se nota antes porque hay menos sistema donde diluirla.',
          'Lo que esos edificios tienen es infraestructura compartida. Donde su tramo se une a algo que sirve a otras unidades, esa parte es de la asociación, y ese límite es donde los problemas se quedan años sin dueño porque cada lado supone que el otro lo atiende.',
          'Le decimos de qué lado de la línea está su problema antes de cotizar, incluso cuando la respuesta es que le toca a la junta. Limpiar sus dos metros cuando la obstrucción está más arriba no arregla nada.',
        ],
      },
      {
        heading: 'Cuánto cuesta, y por qué desconfiar de los 99 dólares',
        body: [
          'Una limpieza completa cuesta entre 300 y 600 dólares por sistema. Lo que mueve el número es el conteo de rejillas, cuánta acumulación hay adentro y qué tan accesible está el manejador. Se lo decimos antes de agendar, no cuando el técnico ya está en su pasillo.',
          'Casi todas las casas de una planta de aquí son de un solo sistema, así que en general es un precio y no dos. Si su condominio comparte algo con el edificio, eso lo aclaramos antes.',
          'Si le ofrecen la casa completa por 49 o 99 dólares, ese no es el precio del trabajo, es el precio de entrar por su puerta. Dos técnicos, una máquina y tres horas cuestan lo que cuestan, y lo que sigue a ese anuncio es media hora de aspirar rejillas o una lista de cargos adicionales.',
        ],
      },
    ],
    depth: [
      {
        heading: 'The exact age at which ductwork starts asking for attention',
        body: [
          'Most Greenacres housing is seventies through nineties, and that is precisely the age at which a duct system starts failing without breaking. It is not broken. It is tired.',
          'What we see here repeatedly is flex sagging between the trusses, joints whose sealing went brittle under thirty Julys, and insulation separated from the jacket somewhere along a run. Each of those takes a little of the air you are paying to cool.',
          'The tell from inside is that the house takes longer to reach a temperature it used to hit, and the room furthest from the air handler no longer gets there at all. It is easy to blame the equipment, and often the equipment is fine.',
        ],
      },
      {
        heading: 'The low rise condominiums and the association boundary',
        body: [
          'Greenacres has a good deal of low rise condominium, and there the air handler sits in a closet with short runs. It cleans properly in a few hours, and the difference shows sooner because there is less system to dilute it.',
          'What those buildings do have is shared infrastructure. Where your run joins anything serving other units, that part belongs to the association, and that boundary is where problems sit unowned for years because each side assumes the other is dealing with it.',
          'We tell you which side of the line your problem is on before quoting, including when the answer is that it belongs to your board. Cleaning your six feet when the restriction is upstream fixes nothing.',
        ],
      },
      {
        heading: 'What it costs, and why to distrust the $99 offer',
        body: [
          'A full cleaning runs $300 to $600 per system. What moves the number is the register count, how much buildup is in there, and how accessible the air handler is. We tell you before booking, not once a technician is standing in your hallway.',
          'Almost every single storey house here is one system, so it is generally one price rather than two. If your condominium shares anything with the building, we settle that first.',
          'If you are offered the whole house for $49 or $99, that is not the price of the job, it is the price of getting through your door. Two technicians, a machine and three hours cost what they cost, and what follows that advert is half an hour of vacuuming at the registers or a list of add-ons.',
        ],
      },
    ],
    neighborhoods: ['Original Greenacres', 'Rainbow Lakes', 'Pine Ridge', 'Jefferson Green', 'River Bridge', 'Sherbrooke Estates'],
  },

  weston: {
    depthEs: [
      {
        heading: 'Construido sobre los Everglades, y el agua no se fue',
        body: [
          'Weston se levantó sobre terreno drenado de los Everglades. El agua se manejó, no desapareció: el nivel freático aquí sigue alto y eso mantiene arriba la humedad de fondo dentro de las casas durante todo el año.',
          'Un equipo que trabaja contra más humedad tiene el serpentín mojado más horas al día, y un serpentín que casi nunca se seca es donde empieza el olor. Si el suyo huele más fuerte en los primeros minutos después de arrancar, mire ahí antes que en los tramos.',
          'La bandeja de condensado y su desagüe entran en la misma categoría. Es la pieza más barata de atender del sistema entero y la que más seguido resulta ser el origen real de la queja.',
        ],
      },
      {
        heading: 'Dos plantas, dos sistemas, dos precios',
        body: [
          'Buena parte de Weston es de dos plantas y muchas casas tienen un equipo por piso. No es un detalle técnico: el trabajo se cotiza por sistema, y una casa con dos manejadores son dos limpiezas y dos precios.',
          'Conviene aclararlo por teléfono antes de agendar. Nuestro rango publicado es de 300 a 600 dólares por sistema, y preferimos que usted lo sepa desde el principio.',
          'También vale saber que en una casa de dos plantas el piso de arriba casi siempre enfría peor, porque el aire tiene que subir y el ático está a 120 grados encima de él. Antes de concluir que el equipo se quedó chico, vale ver qué pasa en el camino.',
        ],
      },
      {
        heading: 'Casas nuevas, escombro de obra, y reglas de asociación',
        body: [
          'Aquí casi nada está gastado, así que lo que encontramos es lo que vino de fábrica: polvo de drywall, aserrín y fibra de aislamiento que entraron mientras la casa estaba en obra y que el sistema lleva años repartiendo.',
          'Familias que se mudan a una casa nueva y empiezan con alergias en la primera temporada suelen estar reaccionando a eso y no a algo que trajeron. La casa es nueva. Lo que hay adentro del ducto tiene exactamente la edad de la casa.',
          'Y un detalle práctico de Weston: casi todo aquí tiene asociación, con reglas de horario y de acceso para contratistas. Díganos cuál es la suya cuando agende y nos ajustamos, en lugar de que un camión llegue y se encuentre con una caseta que no lo deja pasar.',
        ],
      },
    ],
    depth: [
      {
        heading: 'Built on the Everglades, and the water did not leave',
        body: [
          'Weston was raised on drained Everglades land. The water was managed rather than removed: the table here is still high, and that keeps the background humidity inside the houses up all year.',
          'Equipment working against more moisture keeps a wet coil for more hours of the day, and a coil that rarely dries is where a smell begins. If yours is strongest in the first minutes after the system starts, look there before looking at the runs.',
          'The condensate pan and its drain fall in the same category. It is the cheapest part of the whole system to deal with and the one that most often turns out to be the real source of the complaint.',
        ],
      },
      {
        heading: 'Two floors, two systems, two prices',
        body: [
          'A large share of Weston is two storey and many houses run one system per floor. That is not a technical footnote: the work is quoted per system, and a house with two air handlers is two cleanings and two prices.',
          'It is worth settling on the phone before booking. Our published range is $300 to $600 per system, and we would rather you knew from the start.',
          'It is also worth knowing that in a two storey house the upper floor almost always cools worse, because the air has to climb and the attic is at 120 degrees above it. Before concluding the equipment is undersized, it is worth seeing what happens on the way.',
        ],
      },
      {
        heading: 'New houses, construction debris, and association rules',
        body: [
          'Almost nothing here is worn out, so what we find is what came with it: drywall dust, sawdust and insulation fibre that went in while the house was being framed and that the system has been redistributing ever since.',
          'Families who move into a new house and start noticing allergy symptoms within a season are usually reacting to that rather than to anything they brought with them. The house is new. What is inside the ductwork is exactly as old as the house.',
          'And one practical Weston detail: nearly everything here has an association, with hours and contractor access rules. Tell us which one is yours when you book and we will work to it, rather than having a truck arrive and meet a gate that will not let it through.',
        ],
      },
    ],
    neighborhoods: ['Weston Hills', 'Savanna', 'Windmill Ranch Estates', 'The Ridges', 'Bonaventure', 'Indian Trace'],
  },

  'cutler-bay': {
    depthEs: [
      {
        heading: 'Andrew dejó una línea clara en la vivienda de aquí',
        body: [
          'El huracán Andrew pasó por esta zona en 1992 y buena parte de lo que hoy está en pie se construyó o se reconstruyó después. Eso le da al pueblo una línea inusualmente limpia: construcción posterior a 1992 bajo un código más exigente de un lado, y casas más antiguas que sobrevivieron del otro.',
          'La diferencia se nota en el ducto. Lo que se levantó después suele tener el sistema mejor sujetado y mejor sellado, porque se instaló bajo reglas más estrictas. Lo anterior a Andrew que quedó en pie suele conservar trazado original bajo un equipo que ya se cambió una o dos veces.',
          'Por eso la primera pregunta que hacemos por teléfono es de qué año es la casa. La respuesta cambia lo que vamos a buscar y lo que le vamos a recomendar.',
        ],
      },
      {
        heading: 'Costa baja: la humedad no baja sola',
        body: [
          'Cutler Bay está bajo y cerca del agua, y eso mantiene la humedad de fondo alta durante todo el año. El equipo trabaja contra ella de forma constante y el aislamiento del ducto en un ático caliente y húmedo es un sitio donde las cosas crecen.',
          'Si su casa ha tomado agua alguna vez, por marejada o por inundación, el ducto vale una revisión aunque los pisos ya se hayan resuelto. El aislamiento que se mojó dentro de una cubierta sellada no se seca, y la primera señal suele ser un olor semanas más tarde en una casa que por fuera se ve reparada.',
          'Es la parte de la casa que nadie abre, y por eso es la última que alguien encuentra.',
        ],
      },
      {
        heading: 'Antes de la temporada, no después',
        body: [
          'En una zona que ya sabe lo que es una tormenta grande, el momento de revisar el sistema es antes de la temporada y no durante ella. Después de un evento todo el mundo llama a la vez y las agendas se llenan.',
          'Lo que sí conviene saber: nosotros no somos su respuesta de emergencia por daño de tormenta. Si entró agua a la casa, eso es trabajo de otro oficio primero. Nosotros venimos después, cuando ya se sabe qué se mojó y qué no.',
          'Lo que hacemos es lo de siempre, con precio antes de empezar: 300 a 600 dólares por sistema, según el conteo de rejillas y lo que haya adentro.',
        ],
      },
    ],
    depth: [
      {
        heading: 'Andrew left a clear line through the housing here',
        body: [
          'Hurricane Andrew came through this area in 1992 and a great deal of what stands today was built or rebuilt after it. That gives the town an unusually clean line: post-1992 construction to a tougher code on one side, and surviving older houses on the other.',
          'The difference shows in the ductwork. What went up afterwards usually has the system better supported and better sealed, because it was installed under stricter rules. What predates Andrew and survived tends to keep its original layout under equipment that has been replaced once or twice.',
          'That is why the first question we ask on the phone is what year the house is. The answer changes what we go looking for and what we recommend.',
        ],
      },
      {
        heading: 'Low coast: the humidity does not come down on its own',
        body: [
          'Cutler Bay sits low and close to the water, and that keeps the background humidity high all year. Equipment works against it constantly, and duct insulation in a hot damp attic is somewhere things grow.',
          'If your house has ever taken water, from surge or flooding, the ductwork is worth inspecting even if the floors were dealt with. Insulation that got wet inside a sealed jacket does not dry out, and the first sign is usually a smell weeks later in a house that otherwise looks repaired.',
          'Ductwork is the one part of a house nobody has reason to open, so damage inside it outlasts every repair made around it.',
        ],
      },
      {
        heading: 'Before the season rather than after it',
        body: [
          'In an area that already knows what a large storm is, the time to look at the system is before the season rather than during it. After an event everybody calls at once and the calendar fills.',
          'Worth being clear about: we are not your storm damage emergency response. If water got into the house, that is another trade first. We come afterwards, once it is known what got wet and what did not.',
          'What we do is the ordinary work, with the price before we start: $300 to $600 per system, set by the register count and what is actually in there.',
        ],
      },
    ],
    neighborhoods: ['Lakes by the Bay', 'Saga Bay', 'Cutler Ridge', 'Bel Aire', 'Whispering Pines', 'Old Cutler Road'],
  },

  davenport: {
    depthEs: [
      {
        heading: 'La casa que pasa cerrada la mitad del año',
        body: [
          'Davenport está en el corredor de casas de vacaciones, y buena parte de la vivienda aquí se ocupa solo unas semanas al año o se renta por temporadas cortas. La costumbre al cerrar es apagar el aire o subirlo a 80 grados, que es razonable para la factura y es lo peor posible para el edificio.',
          'Una casa cerrada en agosto sin equipo trabajando alcanza niveles de humedad que no bajan solos. Se asienta en el aislamiento del ducto, en el serpentín y en la bandeja de condensado, y quien abre la puerta en noviembre entra a un olor que en abril no existía.',
          'Si la casa va a quedar vacía, dejar el termostato en 77 con el ventilador en automático cuesta una fracción de lo que cuesta arreglar la consecuencia después.',
        ],
      },
      {
        heading: 'Si la renta, el ducto es parte de la reseña',
        body: [
          'En una casa de renta corta el olor no es un detalle privado: aparece en las reseñas, y una reseña que menciona humedad cuesta reservas durante meses. Es la razón práctica por la que a los dueños de por aquí les conviene revisar el sistema antes de la temporada.',
          'El momento correcto es antes de que empiece la ocupación, no después de que un huésped ya se quejó. Un sistema limpio y una casa que huele neutra es la diferencia entre una reseña de cinco estrellas y una que menciona el aire.',
          'Si maneja varias propiedades, dígalo. Varias casas de la misma zona el mismo día es más fácil de agendar y le organizamos la visita completa.',
        ],
      },
      {
        heading: 'Construcción nueva, escombro de fábrica',
        body: [
          'Davenport lleva años construyendo sin parar, así que aquí casi nada está gastado. Cuando un sistema no rinde, el motivo rara vez es la edad del equipo.',
          'Lo que encontramos es lo que entró durante la obra: polvo de drywall, aserrín y fibra de aislamiento que quedaron dentro del ducto mientras la casa estaba abierta. El sistema lo lleva repartiendo desde el primer día.',
          'Y hay una segunda fuente en una zona que sigue construyendo: el polvo fino de la obra del vecino entra por cada rendija del camino de retorno cada vez que arranca el ventilador. Por eso una casa nueva puede tener sombras grises alrededor de las rejillas al segundo año.',
        ],
      },
    ],
    depth: [
      {
        heading: 'The house that sits closed half the year',
        body: [
          'Davenport is in the vacation home corridor, and much of the housing here is occupied for a few weeks a year or let on short stays. The habit when closing up is to switch the air off or set it to 80, which is sensible for the bill and the worst thing available for the building.',
          'A closed house in August with no equipment running reaches humidity levels that do not come back down on their own. It settles into duct insulation, into the coil and into the condensate pan, and whoever opens the door in November walks into a smell that was not there in April.',
          'If the house is going to be empty, leaving the thermostat at 77 with the fan on auto costs a fraction of what it costs to deal with the consequence later.',
        ],
      },
      {
        heading: 'If you let it, the ductwork is part of the review',
        body: [
          'In a short let a smell is not a private detail: it turns up in reviews, and a review that mentions damp costs bookings for months. That is the practical reason owners around here are better off looking at the system before the season.',
          'The right moment is before occupancy starts, not after a guest has already complained. A clean system and a house that smells of nothing is the difference between a five star review and one that mentions the air.',
          'If you manage several properties, say so. Several houses in one area on one day is easier to schedule and we will plan the whole visit around it.',
        ],
      },
      {
        heading: 'New construction, factory-fresh debris',
        body: [
          'Davenport has been building without pause for years, so almost nothing here is worn out. When a system underperforms, the reason is rarely the age of the equipment.',
          'What we find is what went in during construction: drywall dust, sawdust and insulation fibre left inside the ductwork while the house stood open. The system has been distributing it since day one.',
          'And there is a second source in an area still building: fine site dust from the neighbour\u2019s construction enters through every gap in the return path each time the blower runs. That is how a new house ends up with grey shadowing around its registers by the second year.',
        ],
      },
    ],
    neighborhoods: ['Champions Gate', 'Providence', 'Loma del Sol', 'Westside', 'Ridgewood Lakes', 'Bella Vida'],
  },

  immokalee: {
    depthEs: [
      {
        heading: 'Campo abierto por todos lados, y el polvo entra',
        body: [
          'Immokalee es una comunidad agrícola tierra adentro, y la carga de polvo aquí no se parece a nada más que atendamos en la costa del Golfo. Campo abierto en todas direcciones, caminos sin pavimentar y trabajo de tierra durante buena parte del año.',
          'Ese polvo no se queda afuera. Entra por el camino de retorno cada vez que arranca el ventilador, y en la mayoría de estas casas el retorno es una sola rejilla con la estructura de la pared detrás en lugar de un conducto sellado.',
          'La consecuencia práctica es que aquí el filtro es su primera línea y conviene revisarlo cada mes, no cada tres. Es el gasto más pequeño de todo el sistema y el que más le devuelve.',
        ],
      },
      {
        heading: 'Casas prefabricadas: el ducto va por debajo',
        body: [
          'Una parte importante de la vivienda de aquí es prefabricada, y en ese tipo de casa el ducto principal corre por debajo del piso, dentro de la envoltura inferior. Es una configuración completamente distinta a un ático y falla distinto.',
          'Lo que vemos es la envoltura rota o colgando, tramos aplastados, y roedores que entraron por ahí. Cuando esa envoltura se abre, el sistema deja de repartir aire acondicionado a los cuartos y empieza a acondicionar el espacio bajo la casa.',
          'La señal desde adentro es una casa que nunca llega a la temperatura por más que el equipo trabaje, y una factura que sube sin explicación. Vale mirar debajo antes de concluir que el equipo se quedó chico.',
        ],
      },
      {
        heading: 'Precio claro, y qué no hacemos',
        body: [
          'Nuestro rango es de 300 a 600 dólares por sistema, y usted lo tiene antes de que agendemos. No cobramos más por la distancia, pero sí le pedimos flexibilidad con el día, porque agendamos por zona.',
          'Y decimos con claridad lo que no hacemos, para que nada sea sorpresa. No reparamos ni reemplazamos ductos en la misma visita, aunque le fotografiamos lo que lo necesite y se lo mostramos. Si el ducto está aplastado o desconectado, limpiarlo es dinero gastado en algo que hay que reemplazar, y se lo decimos en lugar de limpiarlo.',
          'Tampoco hacemos pruebas de laboratorio, así que no vamos a hacerle una afirmación de antes y después sobre conteo de esporas que no podamos sostener.',
        ],
      },
    ],
    depth: [
      {
        heading: 'Open field on every side, and the dust gets in',
        body: [
          'Immokalee is an inland farming community, and the dust load here is unlike anything else we serve on the Gulf coast. Open field in every direction, unpaved roads, and ground work through much of the year.',
          'That dust does not stay outside. It comes in through the return path every time the blower runs, and in most of these houses the return is a single grille with wall framing behind it rather than sealed sheet metal.',
          'The practical consequence is that the filter is your first line here and it is worth checking monthly rather than quarterly. It is the smallest expense in the whole system and the one that returns the most.',
        ],
      },
      {
        heading: 'Manufactured housing: the ductwork runs underneath',
        body: [
          'A significant share of the housing here is manufactured, and in that construction the main duct runs below the floor inside the belly wrap. It is a completely different configuration from an attic and it fails differently.',
          'What we see is belly wrap torn or hanging, runs crushed, and rodents that got in through the gap. Once that wrap opens, the system stops delivering conditioned air to the rooms and starts conditioning the space under the house.',
          'The tell from inside is a house that never reaches temperature however hard the equipment works, and a bill that climbs without explanation. It is worth looking underneath before concluding the equipment is undersized.',
        ],
      },
      {
        heading: 'A clear price, and what we do not do',
        body: [
          'Our range is $300 to $600 per system and you have it before we book. We do not charge more for distance, but we do ask for flexibility on the day, because we schedule by area.',
          'And we say plainly what we do not do, so nothing is a surprise. We do not repair or replace ductwork on the same visit, though we photograph anything that needs it and show you. If a duct is crushed or disconnected, cleaning it is money spent on something that needs replacing, and we tell you that instead of cleaning it.',
          'We also do not run laboratory testing, so we will not make a before and after claim about spore counts that we cannot stand behind.',
        ],
      },
    ],
    neighborhoods: ['Main Street', 'Farm Worker Village', 'Lake Trafford', 'Immokalee Road', 'Eden Park', 'Carson Road'],
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
    depthEs: [
      {
        heading: 'Shore Acres y las zonas que se inundan: el problema aparece después',
        body: [
          'St. Petersburg tiene agua en tres lados y barrios que se inundan con marejada y con lluvia fuerte. Shore Acres es el ejemplo conocido, pero no es el único. Lo que casi nadie revisa después de una inundación es el ducto.',
          'La razón es que el daño no se ve. Los pisos se secan, las paredes se reparan, y el aislamiento que se mojó dentro de la cubierta del ducto se queda mojado, porque una cubierta sellada no ventila. Semanas más tarde aparece un olor en una casa que ya se veía reparada, y nadie relaciona una cosa con la otra.',
          'Si su casa tomó agua en algún momento, aunque haya sido hace dos temporadas, el ducto vale una revisión. Es la parte de la casa que nadie abre y la única que puede seguir húmeda mucho después de que todo lo demás se secó.',
        ],
      },
      {
        heading: 'Old Northeast e Historic Kenwood: aire acondicionado en casas de los años veinte',
        body: [
          'Old Northeast y Historic Kenwood son bungalows de madera de los años veinte, muchos sobre pilotes y con espacio abierto debajo del piso. Se construyeron con ventilación cruzada, techos altos y ningún ducto, porque el aire acondicionado central no existía cuando se levantaron.',
          'Todo el sistema que hay hoy se agregó después, y se agregó por donde se pudo: por el espacio bajo el piso, por un clóset, por un plafón bajado en un pasillo. Los tramos bajo la casa quedan sin soporte entre pilote y pilote, se descuelgan con los años, y cada punto bajo es donde se queda la humedad hasta que la unión se abre.',
          'Desde adentro se siente como una sola rejilla que entrega menos que las demás, o un olor a tierra que se hace más fuerte en el cuarto que queda sobre la trampilla de acceso. Un tramo separado puede llevar años enfriando el espacio debajo de la casa antes de que alguien lo note.',
        ],
      },
      {
        heading: 'Qué revisar usted mismo antes de llamarnos',
        body: [
          'Hay tres cosas que puede verificar en diez minutos y que evitan una visita que no necesita. La primera es el filtro. Si lleva más de tres meses puesto, cámbielo y espere una semana antes de concluir cualquier cosa, porque un filtro saturado produce exactamente los mismos síntomas que un ducto obstruido.',
          'La segunda es pasar por cada rejilla con la mano y comparar. Si todas entregan poco, el problema está en el equipo o en el filtro. Si una entrega mucho menos que el resto, el problema está en ese tramo y sí es trabajo nuestro.',
          'La tercera es mirar si alguna rejilla tiene manchas grises alrededor del marco. Eso es polvo que pasó de largo, y significa que hay aire entrando al sistema por donde no debería, casi siempre en el retorno. Con esas tres respuestas podemos decirle por teléfono si conviene que vayamos.',
        ],
      },
    ],
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
    depthEs: [
      {
        heading: 'Casas de noventa años con el aire puesto mucho después',
        body: [
          'La vivienda vieja de Winter Park es anterior al aire acondicionado residencial. Las casas de Hannibal Square, Orwin Manor y las calles de los lagos se levantaron en los años veinte y treinta, y todo sistema de ducto que tienen se les instaló después, a veces más de una vez, dentro de una estructura que no fue pensada para llevarlo.',
          'Eso produce recorridos que no se ven en construcción nueva: ducto por clósets, por plafones bajados, por muros bajos de ático, y a veces por espacios que no están climatizados ni sellados. Cada una de esas transiciones es un punto por donde se escapa aire frío y entra aire sin filtrar, y un tramo que cruza espacio sin climatizar además suda.',
          'También produce casas con equipo moderno y distribución que no lo es. Una manejadora de alta eficiencia empujando aire por un ducto trazado en 1974 nunca va a dar lo que dice su etiqueta, y la falla casi nunca está en el equipo que se acaba de cambiar.',
        ],
      },
      {
        heading: 'Los robles son la otra mitad de la historia',
        body: [
          'La cubierta de árboles de Winter Park es más densa que casi cualquier otra del centro de Florida, y un roble maduro suelta una carga fuerte de polen en primavera y una lluvia constante de material orgánico fino el resto del año. Eso entra al sistema por dos caminos: por el retorno, y por cualquier fuga del tramo que va por el ático.',
          'Las familias de aquí describen seguido un patrón de calendario: las alergias suben en primavera y adentro de la casa se quedan altas mucho después de que el conteo de polen de afuera ya bajó. Ese retraso es la señal. El polen exterior baja cuando termina la temporada; el que ya se asentó dentro del ducto no baja, y se vuelve a repartir cada vez que arranca el sistema.',
          'Las salidas de techo y de frontón que quedan debajo de los árboles juntan hojas y semillas encima de la tapa, así que el ducto puede estar perfectamente limpio y la salida no. Eso lo revisamos desde afuera antes de proponerle cualquier trabajo adentro.',
        ],
      },
      {
        heading: 'La otra mitad de la ciudad, la que se construyó después',
        body: [
          'Winter Park no es solo casas históricas. Las calles del lado de Lakemont y buena parte de Winter Park Pines son construcción de los años sesenta y setenta sobre losa, y desde entonces se han ido llenando lotes sueltos con casas nuevas bastante más grandes que las vecinas.',
          'En esa vivienda el ducto sí se proyectó junto con la casa, así que las uniones improvisadas dejan de ser el tema. Lo que aparece en su lugar es el ático: ducto flexible R-6 que se descuelga entre las vigas con los años, y cada tramo colgado es un punto bajo donde el aire se frena y suelta el polvo. Si el cuarto del fondo se queda tres o cuatro grados arriba del termostato, ahí es donde hay que buscar antes de tocar el equipo.',
          'En las casas de relleno más recientes lo que encontramos es material de obra: polvo de drywall, aserrín y fibra de aislamiento que entraron al ducto abierto durante la construcción y que nadie sacó al final. Una casa de cinco años puede seguir repartiendo aquello con lo que se construyó.',
        ],
      },
    ],
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
    neighborhoods: ['Hannibal Square', 'Windsong', 'Orwin Manor', 'Lake Killarney', 'Winter Park Pines', 'Lakemont', 'Kenilworth Shores'],
  },
  lakeland: {
    depth: [
      {
        heading: 'Inland Polk County, which changes what goes wrong',
        body: [
          'Lakeland sits roughly halfway between Tampa and Orlando with no coast on either side, and that removes the single biggest thing we deal with in the Gulf and Atlantic cities. There is no salt here corroding dampers and terminations. What replaces it is heat, and a great deal of standing fresh water.',
          'There are more than thirty named lakes inside the city, and they hold ambient humidity high overnight as well as through the day. Inside the ductwork that matters for one reason: the supply air leaving your air handler is cold, the duct carrying it runs through an attic that is not, and condensation forms on the difference. Dust that would blow straight through a dry duct sticks to a damp one and stays.',
          'A Polk County attic passes 120 degrees on a July afternoon while the duct inside it carries air at 55 degrees. That gap works on the insulation and the joint sealing every day of the summer, and twenty summers of it is usually what we are looking at when we open a system here.',
        ],
      },
      {
        heading: 'Dixieland, Lake Morton and Cleveland Heights: air conditioning added later',
        body: [
          'The older core of Lakeland was built between the twenties and the fifties, before central air conditioning was standard anywhere in the state. The ducting in those houses was fitted afterwards and routed around what was already there: closets, furred down ceilings, and attics with very little headroom at the eaves.',
          'Retrofitted duct has more joints and more transitions than duct designed into a house from the start, and it is the joints that open. Where they open decides what happens. A joint that has come apart in the attic pulls air at well over 120 degrees along with everything that space contains. A joint that has opened inside a wall cavity pulls insulation fibre and eighty years of accumulated dust.',
          'From inside the house the pattern is consistent: one room that never keeps up with the rest, a return grille that whistles when the system starts, and dust back on the furniture within days of cleaning. All three point at the distribution rather than the equipment.',
        ],
      },
      {
        heading: 'The new construction along the I-4 corridor',
        body: [
          'Grasslands, Christina, Oakbridge and the subdivisions that have gone up along the interstate are the other Lakeland, and they fail differently. Nothing there is worn out. The problem in a five year old house is what went into the ductwork while the house was being built.',
          'Drywall dust, sawdust and insulation fibre get into open duct during framing and finishing, and there is no step in a normal build where anybody takes them out again. A house that is genuinely new can still be distributing the material it was made from, every time the system runs. Families who move in and start noticing allergies within a season are usually reacting to that.',
          'The other one is the flexible duct itself. R-6 flex sags between the trusses within a decade or two, and each sag is a low point where the air slows and drops what it is carrying. If the bedroom at the far end of the house sits three or four degrees above the thermostat, that is usually a sagging run rather than an undersized unit.',
        ],
      },
    ],
    depthEs: [
      {
        heading: 'Tierra adentro en Polk County, y por eso el problema es otro',
        body: [
          'Lakeland queda más o menos a la mitad entre Tampa y Orlando, sin costa de ningún lado, y eso quita de la ecuación lo que más trabajo nos da en las ciudades del Golfo y del Atlántico. Aquí no hay sal comiéndose las compuertas ni las salidas del techo. Lo que hay en su lugar es calor, y mucha agua dulce quieta.',
          'Dentro de la ciudad hay más de treinta lagos con nombre, y eso mantiene la humedad ambiental alta de noche igual que de día. Adentro del ducto eso importa por una razón concreta: el aire que sale de la manejadora va frío, el ducto que lo lleva cruza un ático que no lo está, y en esa diferencia se forma condensación. El polvo que en un ducto seco pasaría de largo, en uno húmedo se pega y se queda.',
          'Un ático de Polk County pasa los 120 grados una tarde de julio mientras el ducto de adentro lleva aire a 55. Esa diferencia trabaja todos los días del verano sobre el aislamiento y sobre el sellado de las uniones, y cuando abrimos un sistema aquí normalmente estamos viendo veinte veranos de eso.',
        ],
      },
      {
        heading: 'Dixieland, Lake Morton y Cleveland Heights: el aire llegó después que la casa',
        body: [
          'El centro viejo de Lakeland se construyó entre los años veinte y cincuenta, antes de que el aire acondicionado central fuera lo normal en el estado. En esas casas el ducto se instaló después y se fue acomodando alrededor de lo que ya estaba: clósets, plafones bajados y áticos con muy poca altura en los aleros.',
          'Un ducto adaptado tiene más uniones y más transiciones que uno proyectado desde el principio, y las uniones son las que terminan abriéndose. Dónde se abren decide lo que pasa después. Una unión suelta en el ático mete aire de más de 120 grados con todo lo que ese espacio tenga adentro. Una unión suelta dentro de una pared mete fibra de aislamiento y ochenta años de polvo.',
          'Desde adentro de la casa el patrón es siempre el mismo: un cuarto que nunca alcanza a los demás, una rejilla de retorno que silba cuando arranca el equipo, y polvo que regresa a los muebles a los pocos días de haber limpiado. Las tres cosas apuntan a la distribución y no al equipo.',
        ],
      },
      {
        heading: 'La construcción nueva junto a la I-4',
        body: [
          'Grasslands, Christina, Oakbridge y los fraccionamientos que han crecido junto a la interestatal son el otro Lakeland, y fallan distinto. Ahí nada está desgastado. El problema de una casa de cinco años es lo que se metió al ducto mientras la estaban construyendo.',
          'Polvo de drywall, aserrín y fibra de aislamiento entran al ducto abierto durante la obra, y no hay ningún paso en una construcción normal donde alguien los saque. Una casa nueva puede seguir repartiendo por toda la vivienda el material con el que fue hecha, cada vez que arranca el sistema. Las familias que se mudan y en una temporada ya andan con alergias casi siempre están reaccionando a eso.',
          'Lo otro es el ducto flexible. El R-6 se descuelga entre las vigas en una o dos décadas, y cada tramo colgado es un punto bajo donde el aire se frena y suelta lo que trae. Si la recámara del fondo se queda tres o cuatro grados arriba del termostato, casi siempre es un tramo descolgado y no una unidad chica.',
        ],
      },
    ],
    neighborhoods: ['Lake Morton', 'Dixieland', 'Grasslands', 'Christina', 'Lake Hollingsworth', 'Cleveland Heights', 'Oakbridge'],
  },
  jacksonville: {
    depthEs: [
      {
        heading: 'En Jacksonville sí hay invierno, y eso cambia todo el sistema',
        body: [
          'Esta es la única parte de nuestra cobertura donde la calefacción no es un detalle. Jacksonville tiene noches bajo cero casi todos los inviernos, así que aquí las casas usan bomba de calor o calefacción de gas en serio, durante semanas, no para un frente frío aislado.',
          'Un sistema que trabaja en los dos sentidos somete al ducto a un cambio de temperatura que el ducto del sur de Florida nunca vive. Uniones que se sellaron a 95 grados se van aflojando con los años de dilatarse y contraerse, y un tramo que cruza un espacio sin acondicionar pelea contra 40 grados de diferencia en enero en lugar de ignorarlos.',
          'También hace que el primer ciclo de calefacción del año diga bastante. Ese olor a polvo quemado que todo el mundo reconoce en octubre es polvo real sobre un intercambiador real, y si dura más de una hora o vuelve cada vez que enciende, eso sí conviene revisarlo.',
        ],
      },
      {
        heading: 'Riverside, Avondale y San Marco: casas sobre pilotes, no sobre losa',
        body: [
          'Los barrios históricos junto al río son casas de madera de entre 1910 y 1930, levantadas sobre pilotes con un espacio abierto debajo del piso. Ese solo dato las separa de casi todo lo demás que atendemos en Florida, donde la construcción sobre losa manda el ducto para arriba.',
          'Aquí buena parte de la distribución corre por debajo, y ese espacio es más húmedo que un ático, en la mayoría de estas casas no está aislado del terreno, y lo alcanza cualquier cosa que haya pasado por ahí en un siglo. Encontramos tramos separados en una unión que llevan años acondicionando la tierra, y tramos aplastados por almacenamiento o por un plomero que necesitó el espacio más que el ducto.',
          'Desde adentro se siente como una rejilla de piso que entrega bastante menos que las demás, o un olor a humedad más fuerte en el cuarto que queda junto a la trampilla. El dueño casi siempre culpa al cuarto. El cuarto está bien.',
        ],
      },
      {
        heading: 'Mandarin y Southside: aquí el tema es el polen',
        body: [
          'Al sur y al este del centro histórico la vivienda es losa con ducto en el ático, y las fallas son las de siempre: flexible descolgado, sellado quebradizo y escombro de obra que sigue circulando desde que se construyó la casa.',
          'Lo propio del norte de Florida es la primavera. La carga de polen de pino y roble aquí es más pesada que en cualquier punto más al sur, y durante varias semanas lo cubre todo afuera y entra por cada rendija del camino de retorno. Una casa cómoda once meses del año puede ser genuinamente difícil en marzo.',
          'La respuesta útil no es limpiar más seguido. Es encontrar por dónde está entrando aire sin filtrar al sistema, porque con el retorno sellado el filtro por fin puede hacer su trabajo. Limpiar un sistema que sigue jalando polen por un retorno con fugas le compra una buena semana.',
        ],
      },
    ],
    depth: [
      {
        heading: 'Jacksonville actually has a winter, and that changes the whole system',
        body: [
          'This is the one part of our coverage where the heating side is not decorative. Jacksonville sees freezing nights most winters, so homes here run heat pumps or gas furnaces in earnest for weeks at a time rather than for the odd cold snap.',
          'A system that runs in both directions puts the ductwork through a temperature swing that South Florida ducting never sees. Joints that are sealed at 95 degrees are worked loose over years of expanding and contracting, and a run passing through an unconditioned crawl space or attic is fighting a 40 degree difference in January instead of ignoring it.',
          'It also means the first heating cycle of the season is genuinely informative. The burnt dust smell that everyone recognises in October is real dust on a real heat exchanger, and if it lasts more than an hour or comes back every time, that is worth a look rather than worth ignoring.',
        ],
      },
      {
        heading: 'Riverside, Avondale and San Marco: houses on crawl spaces, not slabs',
        body: [
          'The historic districts along the river are wood frame houses from the nineteen tens through the thirties, raised on piers with an open crawl space beneath. That single fact separates them from almost everything else we work on in Florida, where slab construction puts the ducting overhead.',
          'Here a good share of the distribution runs under the floor, and a crawl space is damper than an attic, unsealed to the ground in most of these houses, and reachable by anything that has been under there in a century. We find runs separated at a joint that have spent years conditioning the dirt, and runs crushed by storage or by a plumber who needed the space more than the duct did.',
          'From inside, it reads as one floor register that delivers noticeably less than the others, or a musty note that is strongest in the room nearest the access hatch. Owners usually blame the room. The room is fine.',
        ],
      },
      {
        heading: 'Mandarin, Southside and the newer suburbs, where the pollen is the story',
        body: [
          'South and east of the historic core the housing is conventional slab with attic ducting, and the failures are the ordinary ones: sagging flex, brittle joint sealing, and builder debris from the framing stage still in circulation.',
          'What is specific to North Florida is the spring. The pine and oak pollen load here is heavier than anywhere further south, and for several weeks it coats everything outdoors and gets pulled indoors through every gap in the return path. A house that is comfortable eleven months of the year can be genuinely difficult in March.',
          'The useful response is not more cleaning. It is finding where unfiltered air is entering the system, because a sealed return path means the filter gets to do its job. Cleaning a system that keeps drawing pollen through a leaky return buys you one good week.',
        ],
      },
    ],
    neighborhoods: ['Riverside', 'San Marco', 'Mandarin', 'Ortega', 'Southside', 'Avondale'],
  },

  // ---- Southwest Florida ----
  'fort-myers': {
    depthEs: [
      {
        heading: 'Lo que dejó Ian en los ductos del condado de Lee',
        body: [
          'El huracán Ian tocó tierra en el condado de Lee en septiembre de 2022, y buena parte de la vivienda de Fort Myers se reparó, se remedió o se reconstruyó en los años siguientes. El ducto es la parte de ese trabajo que más seguido se salta. La casa recibió piso nuevo, panel de yeso nuevo y cocina nueva, y el ducto que estaba en el ático o en la pared durante la inundación sigue siendo el mismo ducto.',
          'El aislamiento mojado es el problema concreto. Va sellado dentro de una cubierta que funciona como barrera de vapor, así que no se seca, y lo que crece ahí adentro no se ve hasta que el sistema arranca. Los dueños lo cuentan igual siempre: la casa olió bien varios meses y de pronto dejó de oler bien.',
          'Si su casa se afectó y el ducto no se revisó como parte de la restauración, ese pendiente vale la pena cerrarlo. No es un extra que le queramos vender: es el punto que más se olvida en una remediación, y es el que no se arregla solo con el tiempo.',
        ],
      },
      {
        heading: 'Medio año vacía, y lo que eso le hace al sistema',
        body: [
          'Fort Myers tiene una de las tasas más altas de residencia de temporada del estado. Una casa cerrada de mayo a noviembre pasa toda la temporada de lluvias con el termostato en 80 y el equipo arrancando apenas.',
          'Un equipo que arranca apenas no deshumidifica, porque quitar humedad depende del tiempo que corre y no de la temperatura que marca. La humedad de adentro se va arriba de 60 por ciento y se queda ahí meses, que es exactamente lo que necesita el moho sobre el serpentín, en la bandeja de condensado o en la cara interior del ducto. Quien regresa dice que la casa huele a encierro y supone que se va a ventilar sola. No se ventila, porque el origen está dentro del sistema.',
          'Un humidistato bien configurado, o un deshumidificador con temporizador, evita casi todo esto. Vale más que cualquier limpieza que le podamos vender, y preferimos que haga eso a que nos llame cada noviembre.',
        ],
      },
      {
        heading: 'El corredor McGregor y las casas nuevas del este',
        body: [
          'En cuanto al ducto, Fort Myers son dos ciudades. A lo largo de McGregor Boulevard, en Dean Park y en las cuadras viejas cerca del río, la casa es anterior al aire acondicionado central y el sistema se le adaptó después, por clósets, plafones bajados y áticos de poca altura. Ese ducto tiene más uniones de las que debería, y son las uniones las que se abren.',
          'Del otro lado, Gateway, Pelican Preserve y lo que se ha construido hacia el este son fraccionamientos sobre losa con ducto flexible tendido por el ático. Ahí nada está viejo, pero un ático de Lee County pasa de 120 grados medio año, el sellado de las uniones se vuelve quebradizo, y el ducto se descuelga entre las vigas hasta formar puntos bajos donde cae el polvo.',
          'Saber en cuál de las dos está su casa cambia lo que hay que revisar primero. En la vieja empezamos por las uniones y por el sellado del retorno. En la nueva empezamos por el tramo de ático y por lo que dejó la constructora dentro del ducto cuando la casa se levantó.',
        ],
      },
    ],
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
    neighborhoods: ['McGregor', 'Whiskey Creek', 'Gateway', 'Pelican Preserve', 'Iona', 'Dean Park', 'Fort Myers Villas'],
  },
  'cape-coral': {
    depth: [
      {
        heading: 'A canal lot is a salt air lot',
        body: [
          'Cape Coral is built around a canal network longer than any other city has, and most of those canals connect through to the river and the Gulf, which means the water at the end of the yard is brackish rather than fresh. Salt air does not need a beach. It needs moving salt water, and in this city almost every block has some.',
          'Salt reaches the outdoor condenser first, where you can see it on the fins. Then it reaches the evaporator coil indoors, carried in through every unsealed gap in the return path, and it settles there together with the dust. A coil holding that film transfers heat worse and stays wet longer after each cycle.',
          'Staying wet longer is the entire mechanism behind a musty smell at start up. It also explains why the moving parts go first here. Dampers, roof terminations and exterior hood flaps corrode until they stop closing, and a damper stuck open lets humid outside air sit in the duct all night. A clean duct behind a seized damper fills straight back up.',
        ],
      },
      {
        heading: 'What Ian left in ground floor air handlers',
        body: [
          'Hurricane Ian came ashore in September 2022 and pushed surge up the canal system into ground floors right across the Cape. Where a house or a ground floor unit took water, the air handler took it too, because in this city the air handler is normally in a garage or a floor level closet rather than an attic.',
          'Restoration crews handled what was visible. Flooring, drywall and cabinets came out, and equipment was replaced where it had failed outright. Ductwork is the item that gets left, and it is the one that does not recover on its own. The insulation inside a flex duct is wrapped in a vapour barrier, so once it has been under water it cannot dry through the jacket. It stays damp, it keeps the salt that arrived with the water, and galvanized fittings begin corroding on the inner face where nothing is visible.',
          'The pattern we hear now is a house that was fully restored, smelled fine for a while, and started smelling closed up again some weeks or months later. If that describes yours, open the duct before spending on anything else. Sometimes it cleans. Sometimes the run that was under water has to be cut out and replaced, and we would rather say that than take money for cleaning it.',
        ],
      },
      {
        heading: 'Seventies houses and two thousands houses, on the same street',
        body: [
          'Cape Coral filled in over more than thirty years, so lots from different decades sit side by side. The older half, small single storey slab houses from the seventies and eighties, has short duct runs, a floor level air handler, and a return that is very often a grille in a hallway wall rather than a sealed duct.',
          'An unsealed return is the most consequential thing we find in those houses, because it means the system is pulling part of its air from a wall cavity or a garage instead of through the filter. Everything downstream of that point, coil, blower and duct, gets loaded with material the filter never saw. Sealing it costs little and changes more than a cleaning does on its own.',
          'The newer half, the two thousands construction around Sandoval and out toward Burnt Store, is larger, often two storey, and runs flexible duct through the attic. There the issues are attic heat on the joint sealing, sagging runs that collect dust at their low points, and construction debris that went in during the build and stayed.',
        ],
      },
    ],
    depthEs: [
      {
        heading: 'Un lote con canal es un lote con aire salino',
        body: [
          'Cape Coral está construida alrededor de una red de canales más larga que la de cualquier otra ciudad, y la mayoría de esos canales conecta con el río y con el Golfo, así que el agua del fondo del terreno es salobre y no dulce. Para tener aire con sal no hace falta una playa. Hace falta agua salada en movimiento, y aquí casi todas las cuadras tienen.',
          'La sal llega primero al condensador de afuera, donde se alcanza a ver sobre las aletas. Después llega al serpentín de adentro, empujada por el aire que el sistema jala por cada abertura del retorno que no quedó sellada, y ahí se deposita junto con el polvo. Un serpentín con esa capa transfiere calor peor y se queda mojado más tiempo después de cada ciclo.',
          'Quedarse mojado más tiempo es todo el mecanismo detrás del olor a humedad de los primeros minutos. También explica por qué aquí lo primero que se pierde son las piezas que se mueven: compuertas, salidas de techo y tapas de ventila se corroen hasta que dejan de cerrar. Una compuerta trabada abierta deja entrar aire húmedo al ducto toda la noche, y un ducto limpio detrás de una compuerta trabada se vuelve a llenar.',
        ],
      },
      {
        heading: 'Lo que dejó Ian en las manejadoras de planta baja',
        body: [
          'El huracán Ian tocó tierra en septiembre de 2022 y metió la marea por el sistema de canales hasta las plantas bajas de toda la ciudad. Donde la casa o el departamento de abajo tomó agua, la manejadora también la tomó, porque aquí casi siempre está en la cochera o en un clóset a nivel de piso y no en el ático.',
          'Las cuadrillas de restauración atendieron lo que se veía. Salieron pisos, panel de yeso y gabinetes, y se cambió el equipo que de plano ya no servía. El ducto es lo que se queda, y es justo lo que no se recupera solo. El aislamiento de un ducto flexible va envuelto en una barrera de vapor, así que una vez que estuvo bajo el agua no se puede secar a través de la cubierta. Se queda húmedo, conserva la sal que entró con el agua, y las piezas galvanizadas empiezan a corroerse por la cara interior, donde nadie mira.',
          'Lo que nos cuentan ahora es siempre parecido: una casa restaurada por completo que olió bien un tiempo y después volvió a oler a encierro, unas semanas o unos meses más tarde. Si esa es su casa, abra el ducto antes de gastar en otra cosa. A veces se limpia. A veces el tramo que estuvo bajo el agua hay que cortarlo y reponerlo, y preferimos decírselo a cobrarle una limpieza que no le va a servir.',
        ],
      },
      {
        heading: 'Casas de los setenta y casas de los dos mil, en la misma calle',
        body: [
          'Cape Coral se fue llenando durante más de treinta años, así que lotes de décadas distintas quedaron uno junto al otro. La mitad vieja, casas chicas de una planta sobre losa de los años setenta y ochenta, tiene tramos de ducto cortos, la manejadora a nivel de piso, y un retorno que muchas veces es una rejilla en la pared del pasillo y no un ducto sellado.',
          'Un retorno sin sellar es lo más importante que encontramos en esas casas, porque significa que el sistema está jalando parte de su aire de una pared o de la cochera en lugar de pasarlo por el filtro. Todo lo que viene después, serpentín, ventilador y ducto, se carga con material que el filtro nunca vio. Sellarlo cuesta poco y cambia más que una limpieza por sí sola.',
          'La mitad nueva, lo construido en los dos mil por Sandoval y hacia Burnt Store, es más grande, muchas veces de dos plantas, y lleva ducto flexible por el ático. Ahí el problema es el calor sobre el sellado de las uniones, los tramos descolgados que juntan polvo en sus puntos bajos, y los residuos de obra que entraron durante la construcción y se quedaron.',
        ],
      },
    ],
    neighborhoods: ['Cape Harbour', 'Pelican', 'Tarpon Point', 'Sandoval', 'Burnt Store', 'Yacht Club', 'Four Mile Cove'],
  },
  'lehigh-acres': {
    depthEs: [
      {
        heading: 'Dos Lehigh distintos, y hay que saber en cuál está usted',
        body: [
          'Lehigh Acres se lotéo a mediados del siglo pasado y se construyó en dos oleadas muy separadas. Hay casas modestas y antiguas en lotes de aquella época, y hay calles enteras levantadas durante el auge de los dos mil. Fallan de manera completamente distinta.',
          'En las antiguas el equipo ya se cambió una o dos veces sobre una distribución que nunca se rediseñó, y muchas veces el ducto original sigue ahí debajo de una caja nueva. En las del auge nada está gastado, así que lo que hay es lo que vino de fábrica.',
          'Por eso la primera pregunta que hacemos por teléfono es de qué año es la casa. La respuesta cambia lo que vamos a buscar y cambia lo que le vamos a recomendar.',
        ],
      },
      {
        heading: 'Lo que dejó una construcción rápida',
        body: [
          'Las casas del auge se levantaron deprisa, y eso se nota adentro del ducto. Encontramos tramos con más curvas de las necesarias porque era el camino más rápido, uniones selladas a medias, y bastante escombro de obra que entró mientras la casa estaba abierta.',
          'También encontramos algo específico de la construcción apurada: retornos que se resolvieron dejando espacio bajo las puertas en lugar de instalar un conducto propio. Funciona a medias, y significa que el sistema jala aire de donde puede en vez de de donde debería.',
          'Nada de eso es un defecto que se note el primer año. Se nota al décimo, cuando la casa enfría peor de lo que enfriaba y nadie sabe por qué.',
        ],
      },
      {
        heading: 'Polvo, terreno abierto y pozo',
        body: [
          'Lehigh Acres tiene mucho lote sin construir y muchos caminos sin pavimentar, y ese polvo fino entra por cada rendija del camino de retorno. Es una carga que un suburbio cerrado no tiene.',
          'Además buena parte de la zona se riega con pozo, y el agua de pozo aquí es dura. Deja depósitos minerales en el condensador y en cualquier cosa que la rocíe con regularidad, lo cual no ensucia el ducto pero sí hace que el equipo trabaje más para dar lo mismo.',
          'Si su casa está en una calle sin pavimentar o cerca de lote abierto, el filtro es su primera línea y conviene revisarlo mensualmente y no cada tres meses. Es el gasto más pequeño del sistema y el que más devuelve.',
        ],
      },
    ],
    depth: [
      {
        heading: 'Two different Lehighs, and it matters which one you are in',
        body: [
          'Lehigh Acres was platted in the middle of the last century and built out in two widely separated waves. There are modest older houses on lots from that era, and there are whole streets put up during the two thousands boom. They fail in completely different ways.',
          'In the older ones the equipment has been replaced once or twice onto a distribution that was never redesigned, and often the original ductwork is still there under a new box. In the boom houses nothing is worn out, so what you have is what came with it.',
          'That is why the first question we ask on the phone is what year the house is. The answer changes what we go looking for and what we end up recommending.',
        ],
      },
      {
        heading: 'What fast construction left behind',
        body: [
          'The boom houses went up quickly, and it shows inside the ductwork. We find runs with more bends than they need because that was the fastest route, joints sealed halfway, and a fair amount of construction debris that went in while the house was open.',
          'We also find something specific to rushed building: returns solved by leaving a gap under the doors instead of running dedicated ducting. It half works, and it means the system draws air from wherever it can rather than from where it should.',
          'None of that is a fault you notice in year one. You notice it in year ten, when the house cools worse than it used to and nobody can say why.',
        ],
      },
      {
        heading: 'Dust, open land and well water',
        body: [
          'Lehigh Acres has a great deal of undeveloped lot and a great many unpaved roads, and that fine dust comes in through every gap in the return path. It is a load a closed suburb does not carry.',
          'A large part of the area also irrigates from a well, and the well water here is hard. It leaves mineral deposits on the condenser and on anything it sprays regularly, which does not dirty the ductwork but does make the equipment work harder for the same result.',
          'If your house is on an unpaved street or near open lot, the filter is your first line and it is worth checking monthly rather than quarterly. It is the smallest expense in the system and the one that returns the most.',
        ],
      },
    ],
    neighborhoods: ['Mirror Lakes', 'Westminster', 'Lehigh Estates', 'Greenbriar', 'Country Lakes', 'Bell Boulevard'],
  },

  naples: {
    depth: [
      {
        heading: 'Big houses, three car garages, and where the air handler ends up',
        body: [
          'A very large share of Naples housing puts the air handler in the garage. In a house with a three car garage that is a practical decision and it works, provided the return path from the house to the unit is genuinely sealed. Where it is not, the system draws part of every cubic foot it moves out of the garage itself.',
          'What is in a Collier County garage is not what you want in the bedrooms. Vehicle exhaust, lawn and pool chemicals, paint, and whatever the outside air carries in every time the door goes up. None of it passes through the filter, because it enters the system downstream of the filter.',
          'This is the most common thing we find on the coastal side of Collier and it is also among the cheapest to correct. Sealing the return platform and the closet or plenum penetrations costs very little relative to the system, and it does more for the air in the house than a cleaning does on its own.',
        ],
      },
      {
        heading: 'A house closed all summer, opened in November',
        body: [
          'Naples has one of the highest rates of part year residency in Florida. A house closed in April and reopened in November has been through the entire wet season with the thermostat held near 80 and the system barely cycling.',
          'A system that barely cycles does not dehumidify, because dehumidification is a function of run time rather than of the temperature on the display. Indoor humidity climbs past 60 percent and stays there for six months, which is everything mold needs on a coil, in a drain pan, or on the inner surface of a supply duct. The house does not get there in a week. It gets there quietly over the summer.',
          'Prevention is worth more than anything we could sell you: a humidistat set to control humidity rather than temperature, or a dehumidifier on a timer. If the house goes back to sitting at 80 uncontrolled next summer, a cleaning this November buys you one season and no more.',
        ],
      },
      {
        heading: 'Old Naples, Park Shore and the coastal blocks after 2022',
        body: [
          'Ian put surge into the low coastal streets of Naples in September 2022, and along Gulf Shore Boulevard, through Old Naples and across Park Shore a great many ground floors took salt water. Restoration in those homes was thorough on the visible items and much less consistent on the ductwork.',
          'Duct insulation that has been submerged does not dry inside its jacket, and any run or plenum that stood in brackish water is corroding on its inner face where an ordinary inspection does not reach. If a musty smell returned some weeks after the work was signed off, that is usually where it is coming from.',
          'Further inland, Golden Gate and the Vineyards side were not flooded and have the ordinary Collier County problem instead: flexible duct in an attic that passes 120 degrees for half the year, joint sealing that has gone brittle, and runs that sag into low points where dust collects.',
        ],
      },
    ],
    depthEs: [
      {
        heading: 'Casas grandes, cocheras de tres autos, y dónde termina la manejadora',
        body: [
          'En una parte muy grande de la vivienda de Naples la manejadora está en la cochera. En una casa con cochera de tres autos esa decisión es práctica y funciona, siempre y cuando el camino de retorno de la casa hasta el equipo esté sellado de verdad. Cuando no lo está, el sistema saca parte de todo el aire que mueve de la cochera misma.',
          'Lo que hay en una cochera del condado de Collier no es lo que usted quiere en las recámaras. Humo del carro, químicos de jardín y de alberca, pintura, y lo que entra de la calle cada vez que se abre el portón. Nada de eso pasa por el filtro, porque entra al sistema después del filtro.',
          'Es lo que más encontramos del lado costero de Collier y también es de lo más barato de corregir. Sellar la plataforma de retorno y las penetraciones del clóset o del plenum cuesta poco comparado con el sistema, y le hace más al aire de la casa que una limpieza por sí sola.',
        ],
      },
      {
        heading: 'Una casa cerrada todo el verano y abierta en noviembre',
        body: [
          'Naples tiene una de las proporciones más altas de residencia de temporada de todo el estado. Una casa que se cierra en abril y se vuelve a abrir en noviembre pasó la temporada de lluvias completa con el termostato cerca de 80 y el equipo arrancando apenas lo indispensable.',
          'Un equipo que arranca apenas no deshumidifica, porque quitar humedad depende del tiempo que corre y no de la temperatura que marca la pantalla. La humedad de adentro sube arriba de 60 por ciento y se queda ahí seis meses, que es todo lo que el moho necesita sobre el serpentín, en la bandeja o en la cara interior del ducto. La casa no llega a eso en una semana. Llega poco a poco durante el verano, sin que nadie esté para notarlo.',
          'Prevenirlo vale más que cualquier cosa que podamos venderle: un humidistato configurado para controlar humedad en lugar de temperatura, o un deshumidificador con temporizador. Si el próximo verano la casa se vuelve a quedar en 80 sin control de humedad, la limpieza de este noviembre le alcanza para una temporada y nada más.',
        ],
      },
      {
        heading: 'Old Naples, Park Shore y las cuadras de la costa después de 2022',
        body: [
          'Ian metió marea en las calles bajas de la costa de Naples en septiembre de 2022, y sobre Gulf Shore Boulevard, en Old Naples y por Park Shore muchísimas plantas bajas tomaron agua salada. La restauración en esas casas fue completa en lo que se ve y bastante despareja en los ductos.',
          'El aislamiento de un ducto que estuvo sumergido no se seca dentro de su cubierta, y cualquier tramo o plenum que estuvo en agua salobre se está corroyendo por la cara interior, donde una revisión normal no llega. Si el olor a humedad regresó unas semanas después de que le entregaron el trabajo, de ahí suele venir.',
          'Más tierra adentro, del lado de Golden Gate y Vineyards no hubo inundación y el problema es el normal de Collier: ducto flexible en un ático que pasa de 120 grados medio año, sellado de uniones quebradizo, y tramos descolgados que forman puntos bajos donde se junta el polvo.',
        ],
      },
    ],
    neighborhoods: ['Old Naples', 'Park Shore', 'Pelican Bay', 'Golden Gate', 'Vineyards', 'Aqualane Shores', 'The Moorings'],
  },
  'bonita-springs': {
    depthEs: [
      {
        heading: 'Una ciudad de temporada, con una falla de temporada',
        body: [
          'Bonita Springs se vacía en verano más que casi cualquier otro lugar del suroeste de Florida. Bonita Bay, Pelican Landing y las comunidades cerradas de alrededor concentran una proporción muy alta de casas que se usan solo parte del año, y una casa cerrada de abril a noviembre no se comporta como una habitada.',
          'El equipo corre lo justo para sostener 80 grados y nada más, o sea ciclos cortos, o sea que nunca corre el tiempo suficiente para deshumidificar. La humedad de adentro se queda arriba de 60 por ciento durante seis meses. Eso no es una condición marginal: es la condición de manual para que crezca algo sobre el serpentín, en la bandeja de condensado y en la cara interior del ducto de suministro.',
          'El dueño regresa en noviembre, baja el termostato, y le sale un olor que él no dejó ahí. La casa no hizo eso en una semana. Lo hizo durante todo el verano, sin que nadie estuviera para notarlo.',
        ],
      },
      {
        heading: 'Qué hacer, incluido lo que no le vendemos',
        body: [
          'Lo más eficaz aquí no es una limpieza. Es un humidistato configurado para controlar humedad en lugar de temperatura, o un deshumidificador de casa completa con temporizador, para que el sistema sí le saque agua al aire mientras usted no está. Eso previene el problema en lugar de tratarlo, y preferimos decírselo a limpiarle el mismo sistema cada noviembre.',
          'Cuando el crecimiento ya está establecido, limpiar el serpentín, la bandeja y los ductos lo quita. Pero si la casa vuelve a quedarse en 80 con la humedad suelta, va a regresar la temporada siguiente. Las dos cosas van juntas y ninguna funciona sola.',
          'Lo mismo aplica a la ventila de la secadora, aunque casi nadie lo piensa. Un ducto lleno de pelusa que pasa seis meses en aire húmedo no le entrega en noviembre la pelusa suelta que dejó en abril, sino una capa apelmazada pegada a la pared del ducto.',
        ],
      },
      {
        heading: 'La costa, las compuertas y el ducto de ático en casas de una planta',
        body: [
          'Bonita Springs está sobre la costa, entre Naples y Fort Myers, y todo lo que queda cerca del agua recibe sal de forma constante. La sal llega al condensador de afuera, a las salidas del techo y a cualquier pieza metálica con aleta, y también entra al serpentín por cada abertura del retorno que no quedó sellada.',
          'Lo primero que se pierde son las piezas que se mueven. Las compuertas y las tapas exteriores se corroen hasta que dejan de cerrar, y una compuerta trabada abierta deja entrar aire húmedo al ducto toda la noche, con el equipo apagado y las superficies del ducto todavía frías. Eso es condensación adentro del ducto todas las noches durante meses.',
          'Casi toda la vivienda de aquí es de una planta, con la manejadora junto a la cochera o en un cuarto de servicio interior y el ducto tendido por el ático. Ese ático sostiene calor hasta bien entrada la noche la mayor parte del año, así que la distribución trabaja entre dos extremos todos los días: aire a 55 grados por dentro y más de 120 por fuera.',
        ],
      },
    ],
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
    neighborhoods: ['Bonita Bay', 'Pelican Landing', 'Spanish Wells', 'Bonita Farms', 'Bonita Beach', 'Vanderbilt Lakes', 'Palmira'],
  },
  sarasota: {
    depthEs: [
      {
        heading: 'La casa que pasa vacía de mayo a octubre',
        body: [
          'Sarasota tiene una de las poblaciones de temporada más fuertes del estado, y buena parte de la vivienda se ocupa solo unos meses al año. La costumbre al cerrar es subir el termostato o apagarlo, que es razonable para la factura y es lo peor posible para el edificio.',
          'Una casa cerrada durante semanas en plena temporada de lluvias llega a niveles de humedad que ya no bajan por sí solos. La humedad se instala en el aislamiento del ducto, en el serpentín y en la bandeja, y el olor que encuentra el siguiente huésped se formó mientras no había nadie.',
          'Si la casa va a quedar vacía, dejar el termostato en 77 con el ventilador en automático cuesta una fracción de lo que cuesta arreglar la consecuencia. Y el momento de limpiar una casa de temporada es antes de que empiece la temporada, no después de que alguien ya se quejó.',
        ],
      },
      {
        heading: 'Siesta Key y Bird Key: la sal no descansa',
        body: [
          'En las islas de barrera el aire trae sal todos los días del año, no solo durante las tormentas. Llega al serpentín por el camino del retorno y llega al condensador directamente, y el efecto es acumulativo, no dramático.',
          'Lo que produce es corrosión en las aletas de aluminio del serpentín, que entonces retiene humedad y suciedad más fácilmente que uno limpio, lo cual restringe el flujo de aire, lo cual hace que todo el sistema trabaje más para dar menos. El equipo costero no suele fallar antes de tiempo. Primero rinde mal durante años.',
          'Por eso en las islas revisamos el serpentín y la bandeja antes de cotizar una limpieza de ductos. En una propiedad de isla, el serpentín es más seguido el origen de la queja que el ducto, y es un trabajo distinto y más barato.',
        ],
      },
      {
        heading: 'Gulf Gate, Arlington Park y Palmer Ranch: tres décadas, tres problemas distintos',
        body: [
          'Gulf Gate y Arlington Park son construcción de los sesenta y setenta, y sus equipos ya se cambiaron una o dos veces sobre una distribución que nunca se rediseñó. Un equipo moderno sobre ducto original no va a rendir lo que dice su etiqueta, y la falla casi nunca está en la caja que se acaba de instalar.',
          'Palmer Ranch y las comunidades planificadas al este son de los noventa en adelante, de dos plantas, muchas veces con dos sistemas y flexible repartido por el ático. Ahí nada está gastado, así que los problemas son los que vinieron de fábrica: descuelgue, uniones quebradizas y polvo de construcción que sigue moviéndose por la casa veinte años después.',
          'La diferencia práctica está en lo que logra una limpieza. En las casas viejas suele ser el paso que le dice si la distribución necesita trabajo o no. En las nuevas normalmente resuelve la queja por sí sola, porque el sistema está sano y lo único que tiene es el escombro con el que nació.',
        ],
      },
    ],
    depth: [
      {
        heading: 'The house that sits empty from May to October',
        body: [
          'Sarasota has one of the strongest seasonal populations in the state, and a large share of the housing is occupied for part of the year. The habit when closing up is to set the thermostat high or switch it off, which is sensible for the electricity bill and is the worst thing available for the building.',
          'A closed Florida house in August with no equipment running reaches humidity levels that do not come back down on their own. It settles into duct insulation, into the evaporator coil, and into the condensate pan, and the owner who opens the door in November walks into a smell that was not there in April.',
          'If a house is going to be empty, leaving the thermostat at 77 with the fan on auto costs a fraction of what it costs to deal with the consequences. And the time to clean a seasonal house is before the season starts, not after someone has already noticed.',
        ],
      },
      {
        heading: 'Siesta Key, Bird Key and the salt that never stops',
        body: [
          'On the barrier islands the air carries salt every day of the year, not only during storms. It reaches the evaporator coil through the return path and it reaches the condenser directly, and the effect is cumulative rather than dramatic.',
          'What it produces is corrosion on the aluminium fins of the coil, which then holds moisture and dirt more readily than a clean coil does, which then restricts airflow, which then makes the whole system work harder for less. Coastal equipment does not usually fail early. It underperforms for years first.',
          'This is also why on the islands we look at the coil and the pan before we quote a duct cleaning. On a barrier island property the coil is more often the source of a complaint than the ductwork is, and it is a different and cheaper job.',
        ],
      },
      {
        heading: 'Gulf Gate, Arlington Park and Palmer Ranch: three different decades, three different problems',
        body: [
          'Gulf Gate and Arlington Park are sixties and seventies construction, and their systems have usually been replaced once or twice into a distribution layout that was never redesigned. Modern equipment on original ducting will not reach its rating, and the fault is almost never in the box that was just installed.',
          'Palmer Ranch and the planned communities east of the trail are nineties onward, two storey, often on two systems, with flex fanned across the attic. Nothing is worn out there, so the problems are the ones that were built in: sag, brittle joints, and drywall dust from the framing stage still moving through the house twenty years later.',
          'The practical difference is what a cleaning achieves. In the older houses it is often the step that tells you whether the distribution needs work at all. In the newer ones it usually resolves the complaint on its own, because the system is sound and simply full of the debris it started with.',
        ],
      },
    ],
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
