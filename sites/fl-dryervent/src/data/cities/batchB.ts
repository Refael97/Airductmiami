import type { CityContent } from "../cityTypes";

export const cityBatchB: CityContent[] = [
  {
    slug: "boynton-beach",
    name: "Boynton Beach",
    county: "Palm Beach County",
    region: "Palm Beach County",
    nearby: ["delray-beach", "lake-worth-beach", "greenacres", "boca-raton"],
    neighborhoods: ["Hunters Run", "Leisureville", "Chapel Hill", "Renaissance Commons", "Quantum Village"],
    intro:
      "Much of Boynton Beach is villas, garden condos and single storey homes in older adult communities, where the dryer runs fewer loads than in a family house but the vent can sit unused for half the year. Here the trouble usually starts at the outside hood, not deep in the duct.",
    introEs:
      "Buena parte de Boynton Beach son villas, condominios de pocos pisos y casas de una planta en comunidades para adultos mayores. La secadora trabaja menos que en una casa con niños, pero la ventila puede pasar medio año sin uso, y casi siempre el problema empieza en la salida de afuera y no dentro del ducto.",
    common:
      "A wall hood or roof cap with a nest built inside it while the owners were up north for the summer, discovered when the first load of the season takes two cycles to dry.",
    commonEs:
      "Una salida en la pared o en el techo con un nido adentro, hecho mientras los dueños pasaban el verano en el norte, y que se descubre cuando la primera carga de la temporada necesita dos ciclos para secar.",
    depth: [
      {
        heading: "The empty months are when birds move in",
        body: [
          "From May to October a lot of Boynton units are closed. The dryer never runs, so the damper on the hood hangs still for months, and a quiet, sheltered opening is exactly what sparrows and starlings look for. By the time the owner returns, the hood can be packed with grass and twigs.",
          "None of this shows from inside. The first sign is a dryer that runs hot and leaves clothes damp, or a faint smell of scorched lint in the laundry closet. If that happens on your first load back, stop using the dryer until the hood has been looked at.",
          "We pull the nest from outside, free the damper, and then run the brush through the whole duct, because nesting material rarely stays at the mouth. Any guard must leave the damper free to swing, and code rules out a screen at a dryer termination because it catches lint.",
        ],
      },
      {
        heading: "A dozen hoods on one wall, and which one is yours",
        body: [
          "In attached villas and two or three storey condo buildings, the vents often come out side by side on one exterior wall or cluster on a flat roof. They are almost never labelled, and we have met owners who paid for years to have a neighbour's vent cleaned.",
          "The airflow meter settles it. Your dryer runs, and the hood that moves air is yours. That reading also becomes your before number for the cleaning.",
        ],
      },
      {
        heading: "West toward the turnpike, roof caps and longer runs",
        body: [
          "The newer single family neighbourhoods west of Interstate 95 are a different job. The laundry is often upstairs or in the middle of the house, so the duct climbs into the attic and leaves through a roof cap. These runs have more bends and come closest to the code limit of 35 feet, less an allowance for each elbow.",
          "Cleaning a standard run costs $100 to $200, and repair or rerouting costs $200 to $600. A roof cap with a nest packed deep inside is quoted before we book. Associations that want every unit done together get a per unit price and one quote for the building.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Cuando la casa se queda cerrada en verano",
        body: [
          "Muchas unidades de Boynton pasan de mayo a octubre sin nadie. La secadora no se usa, la aleta de la salida se queda quieta durante meses, y una abertura tranquila y protegida es justo lo que buscan los gorriones para hacer nido. Cuando el dueño regresa, la boca de la ventila puede estar llena de paja y ramitas.",
          "La primera señal es una secadora que se calienta de más y deja la ropa húmeda, o un olor leve a pelusa quemada en el cuarto de lavado. Si eso le pasa con la primera carga, no vuelva a usarla hasta que revisemos la salida.",
          "Sacamos el nido por fuera, liberamos la aleta y pasamos el cepillo por todo el ducto, porque el material del nido casi nunca se queda solo en la boca. Una malla sobre la salida no está permitida por el código, porque atrapa la pelusa.",
        ],
      },
      {
        heading: "Muchas salidas en una sola pared",
        body: [
          "En las villas pegadas y en los edificios de dos o tres pisos, las ventilas salen una al lado de la otra en la misma pared o en el techo plano, y nadie las marcó. Hemos conocido dueños que pagaron durante años por limpiar la ventila del vecino.",
          "Lo resolvemos con el medidor de flujo de aire: se prende su secadora y la salida que sopla es la suya.",
          "La limpieza cuesta de $100 a $200 y la reparación o un cambio de ruta de $200 a $600. Si la asociación quiere hacer todo el edificio, cobramos por unidad y le damos una sola cotización por el edificio.",
        ],
      },
    ],
    faq: [
      {
        question: "I only use my dryer in the winter months. How often does the vent need cleaning?",
        answer:
          "At that level of use lint builds slowly, so once a year is usually enough, ideally the week you come back and before the first full load. When you arrive, glance at the outside hood: if the damper does not lift while the dryer runs, call before using it again.",
      },
      {
        question: "My vent comes out on the second floor of the building. Can you still reach it?",
        answer:
          "Usually, yes. We clean the full run from inside the unit and reach the outside hood by ladder where the building allows. If the hood is over a pool deck or on a roof that only maintenance can open, we arrange access with the association before the visit.",
      },
      {
        question: "Should I block the hood before I leave for the summer to keep birds out?",
        answer:
          "Please do not. If anyone runs the dryer while you are away, the hot exhaust has nowhere to go. The better protection is a damper that closes fully, and if birds have been a problem before, a guard made for your type of hood that does not trap lint.",
      },
    ],
    faqEs: [
      {
        question: "Solo uso la secadora en los meses de invierno. ¿Cada cuánto hay que limpiar la ventila?",
        answer:
          "Con ese uso la pelusa se acumula despacio, así que una vez al año suele bastar. Lo ideal es hacerlo la semana en que usted regresa, antes de la primera carga grande, y fijarse si la aleta de afuera se levanta cuando la secadora está prendida.",
      },
      {
        question: "Mi salida está en el segundo piso del edificio. ¿La pueden limpiar?",
        answer:
          "En la mayoría de los casos sí. Limpiamos el ducto completo desde adentro y llegamos a la salida con escalera cuando el edificio lo permite. Si la salida da a la piscina o a un techo que solo abre mantenimiento, coordinamos el acceso con la asociación antes de la cita.",
      },
      {
        question: "¿Puedo tapar la salida antes de irme para que no entren pájaros?",
        answer:
          "No se lo recomendamos. Si alguien usa la secadora mientras usted no está, el aire caliente no tiene por dónde salir. Lo correcto es que la aleta cierre bien y, si ya tuvo pájaros antes, poner una protección hecha para ese tipo de salida que no atrape la pelusa.",
      },
    ],
  },
  {
    slug: "lake-worth-beach",
    name: "Lake Worth Beach",
    county: "Palm Beach County",
    region: "Palm Beach County",
    nearby: ["greenacres", "west-palm-beach", "boynton-beach", "wellington"],
    neighborhoods: ["Downtown Lake Worth Beach", "College Park", "Bryant Park", "Parrot Cove", "Tropical Ridge", "Lake Osborne"],
    intro:
      "Lake Worth Beach is a city of small older houses, frame cottages and duplexes, most of them built long before anyone planned a spot for a clothes dryer. Wherever the laundry ended up, the vent was fitted afterwards, and in the raised floor cottages it often runs under the house.",
    introEs:
      "Lake Worth Beach es una ciudad de casas pequeñas y viejas, cabañas de madera y dúplex, casi todas construidas mucho antes de que alguien pensara en un lugar para la secadora. Donde haya terminado el cuarto de lavado, la ventila se puso después, y en las casas de piso elevado muchas veces pasa por debajo.",
    common:
      "A foil or vinyl hose threaded through the crawl space under a raised floor, sagging between the joists and holding a pocket of wet lint at its lowest point.",
    commonEs:
      "Una manguera de aluminio o de vinil tendida por debajo del piso elevado, colgando entre las vigas y con un charco de pelusa mojada en la parte más baja.",
    depth: [
      {
        heading: "Under the floor, where nobody looks",
        body: [
          "A good number of the older cottages around College Park, Bryant Park and the blocks near downtown sit on raised floors with a crawl space beneath. When a dryer was added in a back room or an enclosed porch, the easy route was straight down through the floorboards and out through the skirting.",
          "Under the house it is damp and dark, and a soft hose sags into loops. Warm, wet exhaust cools in the low spots, water condenses there, and lint sticks to the wet section until it closes off. Some of the hoses we pull from crawl spaces are heavier with water than with lint.",
          "Code does not allow it. The flexible transition hose belongs behind the dryer, no more than 8 feet long, and everything past it should be 4 inch rigid metal duct. Under a floor that means rigid duct hung from the joists with a steady fall to the outside, joints sealed with foil tape and no screws poking into the airstream.",
        ],
      },
      {
        heading: "Duplexes, garage apartments and dryers on the back porch",
        body: [
          "Lake Worth Beach has plenty of divided houses and small rental buildings. A dryer squeezed onto a back porch, or into a utility room two units share, is normal here, and so is a vent that ends a foot from a window or right beside a door.",
          "The termination needs to be at least 3 feet from any opening into the building, with a backdraft damper that shuts. On a porch, that sometimes means moving the hood a few feet along the wall, which is a modest repair rather than a renovation.",
          "If you rent, the vent belongs to the landlord, but you can still book the visit. You will get the before and after airflow readings to hand to the owner.",
        ],
      },
      {
        heading: "Salt on the lagoon side",
        body: [
          "Parrot Cove and the streets closest to the Lake Worth Lagoon take salt air on every metal part outdoors. A damper hinged on a corroded pin stops closing, and an open damper lets in humid air, wasps and the odd lizard.",
          "Cleaning a standard run costs $100 to $200. Replacing a crawl space hose with rigid duct, or moving a hood away from a window, falls between $200 and $600, and you know which before we start.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Debajo del piso, donde nadie mira",
        body: [
          "Muchas de las casas viejas de College Park, Bryant Park y las cuadras cerca del centro están montadas sobre un piso elevado con un espacio libre por debajo. Cuando se agregó la secadora en un cuarto del fondo o en un porche cerrado, lo más fácil fue bajar la ventila por el piso y sacarla por el zócalo de la casa.",
          "Ahí abajo hay humedad y oscuridad, y la manguera blanda se cuelga en curvas. El aire caliente y húmedo se enfría en las partes bajas, el agua se condensa y la pelusa se pega a ese tramo mojado hasta que lo tapa.",
          "El código no lo permite. La manguera flexible va solo detrás de la secadora, con un máximo de 8 pies, y de ahí en adelante el ducto tiene que ser de metal rígido de 4 pulgadas, colgado de las vigas con caída hacia afuera, las uniones selladas con cinta de aluminio y sin tornillos que entren al ducto.",
        ],
      },
      {
        heading: "Dúplex, apartamentos y la secadora en el porche",
        body: [
          "En Lake Worth Beach hay muchas casas divididas y edificios pequeños de alquiler. Es común ver la secadora en el porche de atrás o en un cuarto de lavado que comparten dos unidades, con la salida a un pie de una ventana o al lado de la puerta.",
          "La salida tiene que quedar a por lo menos 3 pies de cualquier abertura de la casa y llevar una aleta que cierre.",
          "La limpieza cuesta de $100 a $200. Cambiar una manguera de debajo del piso por ducto rígido, o mover la salida lejos de una ventana, cuesta de $200 a $600, y usted sabe el precio antes de que empecemos.",
        ],
      },
    ],
    faq: [
      {
        question: "My house is on a crawl space. How can I tell if the dryer vent runs under the floor?",
        answer:
          "Slide the dryer out and follow the hose. If it drops into a hole in the floor instead of going into the wall, the run is under the house. Drying times that creep up month after month and a musty smell near the laundry are the usual signs that a low spot down there is holding water.",
      },
      {
        question: "Can the foil hose under my floor just be cleaned?",
        answer:
          "We can clear it, but it fills again quickly because the sag is still there. The lasting fix is rigid metal duct, supported and sloped to the outside. After that it only needs ordinary cleaning.",
      },
      {
        question: "Is it all right to keep the dryer on an enclosed porch?",
        answer:
          "The dryer can live there. What matters is the vent: rigid duct past the transition hose, a hood with a damper that closes, and an exit at least 3 feet from any window or door into the house.",
      },
    ],
    faqEs: [
      {
        question: "Mi casa tiene el piso elevado. ¿Cómo sé si la ventila pasa por debajo?",
        answer:
          "Corra la secadora y siga la manguera con la vista. Si baja por un hueco en el piso en vez de entrar a la pared, el ducto va por debajo de la casa. Si la ropa tarda cada vez más y huele a humedad cerca de la lavandería, seguramente hay agua en una parte baja.",
      },
      {
        question: "¿Se puede limpiar la manguera de aluminio que va debajo del piso?",
        answer:
          "Se puede destapar, pero se vuelve a llenar pronto porque la curva sigue ahí. La solución que dura es ducto de metal rígido, bien sostenido y con caída hacia afuera. Después de eso solo necesita la limpieza normal.",
      },
      {
        question: "Alquilo un dúplex. ¿Puedo pedir la limpieza yo mismo?",
        answer:
          "Sí. La ventila es del dueño, pero usted puede hacer la cita, y le dejamos las medidas de flujo de aire de antes y de después para que se las muestre. Si encontramos algo que requiere reparación, se lo explicamos para que lo hable con el dueño.",
      },
    ],
  },
  {
    slug: "delray-beach",
    name: "Delray Beach",
    county: "Palm Beach County",
    region: "Palm Beach County",
    nearby: ["boynton-beach", "boca-raton", "deerfield-beach"],
    neighborhoods: ["Pineapple Grove", "Lake Ida", "Kings Point", "Tropic Isle", "Osceola Park", "Del-Ida Park"],
    intro:
      "Delray Beach has two kinds of housing growing side by side: ranch homes and condos from the sixties and seventies, and the townhomes and rebuilt houses going up near Atlantic Avenue and Pineapple Grove. The newer buildings put the laundry upstairs, and that is where vent length starts to matter.",
    introEs:
      "En Delray Beach conviven dos tipos de vivienda: las casas de una planta y los condominios de los sesenta y setenta, y las casas adosadas y casas reconstruidas que se levantan cerca de Atlantic Avenue y Pineapple Grove. En lo nuevo el cuarto de lavado está arriba, y ahí el largo del ducto se vuelve un problema.",
    common:
      "A townhome duct that climbs two floors and turns four or five times on its way to the roof, longer than code allows for that many bends, with lint settled at every elbow.",
    commonEs:
      "Un ducto de casa adosada que sube dos pisos y dobla cuatro o cinco veces antes de llegar al techo, más largo de lo que el código permite con tantos codos, con pelusa asentada en cada uno.",
    depth: [
      {
        heading: "Doing the arithmetic on a townhome run",
        body: [
          "The Florida Building Code gives a dryer duct 35 feet of developed length to start with. Each 90 degree bend takes 5 feet off that figure and each 45 degree bend takes 2.5 feet, unless the dryer maker's instructions allow a longer run for that model.",
          "Picture a laundry closet on the second floor of a three storey townhome. The duct leaves the wall, turns up, turns to cross a ceiling, turns up into the attic and turns once more to meet the roof cap. Those four 90 degree bends use 20 feet, leaving just 15 feet of straight duct. Plenty of new runs in Delray are longer than that.",
          "An over length run still dries clothes while it is new and clean. It just has no margin, so a thin coat of lint on the elbows is enough to slow it down. If a run still reads low after a thorough clean, we show you the length calculation and the options, starting with what your dryer's manual allows.",
        ],
      },
      {
        heading: "Kings Point and the older condo communities",
        body: [
          "West of town, Kings Point and the condo communities along the main roads were built for retirees, with stacked units venting through a shared outside wall. The runs are short, but the hoods sit high on the building where owners cannot reach them.",
          "Associations there usually want the whole building done in one visit. We price per unit, quote the building, and leave each owner the airflow reading for their own vent.",
        ],
      },
      {
        heading: "Lake Ida, Tropic Isle and the canal streets",
        body: [
          "The ranch houses around Lake Ida and on the canal streets of Tropic Isle mostly vent through a side wall near the garage. Those runs are short and easy, so the work is mostly at the hood: salt, mulch beds banked up against the wall, and a damper that sticks.",
          "Cleaning costs $100 to $200. If a run needs rerouting or a section replaced, that is $200 to $600, quoted before anything is cut.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "La cuenta del largo en una casa adosada",
        body: [
          "El código de construcción de Florida le da al ducto de la secadora 35 pies de largo como punto de partida. Cada codo de 90 grados le resta 5 pies y cada codo de 45 grados le resta 2.5, salvo que el manual de la secadora permita un tramo más largo para ese modelo.",
          "Piense en un cuarto de lavado en el segundo piso de una casa de tres pisos. El ducto sale de la pared, sube, cruza un techo, entra al ático y dobla otra vez para llegar a la salida en el techo. Con cuatro codos de 90 grados ya se gastaron 20 pies y quedan 15 de ducto recto. Muchos ductos nuevos en Delray pasan de eso.",
          "Un ducto demasiado largo seca bien mientras está nuevo y limpio, pero no tiene margen, y una capa fina de pelusa en los codos basta para que la ropa salga húmeda. Si después de limpiar la medida de flujo de aire sigue baja, le mostramos la cuenta y las opciones.",
        ],
      },
      {
        heading: "Kings Point y los condominios del oeste",
        body: [
          "En Kings Point y los condominios a lo largo de las avenidas principales, las unidades están una encima de otra y ventilan por una pared exterior compartida. Los ductos son cortos, pero las salidas quedan altas, fuera del alcance de los dueños.",
          "La limpieza cuesta de $100 a $200 y la reparación o el cambio de ruta de $200 a $600. Para edificios completos cobramos por unidad y cotizamos el edificio, y cada dueño recibe la medida de su propia ventila.",
        ],
      },
    ],
    faq: [
      {
        question: "Our townhome is only a few years old. Why would the dryer vent already be a problem?",
        answer:
          "Because new does not mean short. Many new townhome runs use most or all of the length the code allows before any lint is in them, so a small amount of buildup has an outsized effect. Longer drying times in a new home are worth an airflow reading, not just a new dryer.",
      },
      {
        question: "Can an over length run be fixed without opening walls?",
        answer:
          "Often it can. Replacing a crushed or flexible section in the attic, or moving the roof termination to cut out a bend, is done from the attic and the roof. Where the problem is inside a wall, we explain what opening it would involve and quote it before any work.",
      },
      {
        question: "How often should a vent be cleaned in Delray?",
        answer:
          "A long upstairs run in a busy household, every six months to a year. A short side wall vent in a single storey home can usually go a year or more. The before reading tells us which group your house belongs in.",
      },
    ],
    faqEs: [
      {
        question: "La casa es nueva. ¿Cómo va a tener problemas la ventila?",
        answer:
          "Nuevo no quiere decir corto. Muchos ductos de casas adosadas nuevas usan casi todo el largo que permite el código desde el primer día, así que un poco de pelusa ya se nota. Si la ropa tarda en secar en una casa nueva, conviene medir el flujo de aire antes de cambiar la secadora.",
      },
      {
        question: "¿Se puede arreglar un ducto muy largo sin abrir paredes?",
        answer:
          "Muchas veces sí. Cambiar un tramo aplastado o flexible en el ático, o mover la salida en el techo para quitar un codo, se hace desde el ático y desde el techo. Si el problema está dentro de la pared, le explicamos qué hay que abrir y le damos el precio antes de tocar nada.",
      },
      {
        question: "¿Cada cuánto se limpia la ventila en Delray?",
        answer:
          "Un ducto largo en el segundo piso, con una familia que lava mucho, cada seis meses a un año. Una salida corta por la pared en una casa de una planta puede ir un año o más. La primera medida nos dice en qué grupo está su casa.",
      },
    ],
  },
  {
    slug: "boca-raton",
    name: "Boca Raton",
    county: "Palm Beach County",
    region: "Palm Beach County",
    nearby: ["deerfield-beach", "delray-beach", "coconut-creek", "coral-springs"],
    neighborhoods: ["Boca Del Mar", "Broken Sound", "Boca Woods", "Sandalfoot Cove", "Royal Palm Yacht and Country Club", "Camino Gardens"],
    intro:
      "Boca Raton runs from the 1970s condos of Boca Del Mar to the large homes behind the gates of Broken Sound and Boca Woods. In the houses the dryer usually vents through a concrete tile roof, and the cap up there is the part of the system owners know least about.",
    introEs:
      "Boca Raton va desde los condominios de los setenta en Boca Del Mar hasta las casas grandes de Broken Sound y Boca Woods. En las casas la secadora casi siempre ventila por un techo de teja de concreto, y la salida en el techo es la parte que el dueño menos conoce.",
    common:
      "A low profile roof cap among concrete tiles with a bird screen added to it, matted over with lint until the dryer is pushing against a felt pad.",
    commonEs:
      "Una salida en el techo de teja a la que alguien le puso una malla contra pájaros, cubierta de pelusa hasta quedar como un fieltro que la secadora no puede empujar.",
    depth: [
      {
        heading: "What is actually on a tile roof",
        body: [
          "A dryer termination on a tile roof is a low profile cap set among the tiles, often painted to match. Most have a flap that should lift while the dryer runs and drop shut when it stops. Over the years lint coats the flap and its hinge until it only opens partway.",
          "The bigger problem is mesh. Roofers and handymen sometimes add a screen to keep birds out, and it works for a few weeks until lint bridges across it. Code calls for a backdraft damper and specifically no screen at a dryer termination, and the screened caps we find in Boca can be close to solid.",
          "We clear the cap from the roof, take off any screen, make sure the damper moves freely, and replace the cap if it is cracked. Tile breaks easily underfoot, which is part of why so few owners have ever seen their own cap.",
        ],
      },
      {
        heading: "Large houses, central laundry rooms, sometimes two dryers",
        body: [
          "In the bigger homes in Broken Sound, the Royal Palm Yacht and Country Club and the gated communities west of the turnpike, the laundry room tends to sit in the middle of the house, and some homes have a second one upstairs. Each dryer has its own run to the roof, and each is long.",
          "Long central runs are hard to clean from one end. We go in from the laundry room and from the roof cap with the rotary brush and compressed air, so lint in the middle of the run has nowhere to stay, and we measure airflow at the cap before and after.",
        ],
      },
      {
        heading: "Condo buildings east and west",
        body: [
          "Boca Del Mar, Sandalfoot Cove and the buildings near the beach vent through a wall, often high up. The runs are short, but the hoods belong to the building and so does the access. We price those per unit and quote the building as a whole.",
          "For a single home, cleaning costs $100 to $200 per run and repair or replacement costs $200 to $600.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Lo que hay arriba, en un techo de teja",
        body: [
          "La salida de la secadora en un techo de teja es una tapa baja metida entre las tejas, muchas veces pintada del mismo color. Casi todas tienen una aleta que se levanta cuando la secadora está prendida y cae cuando se apaga. Con los años la pelusa cubre la aleta y la bisagra, y deja de abrir completa.",
          "Lo peor es la malla. Hay techadores que le ponen una malla para que no entren pájaros, y funciona unas semanas hasta que la pelusa la tapa. El código pide una aleta antirretorno y prohíbe la malla en la salida de la secadora, y en Boca encontramos tapas con malla casi selladas.",
          "Limpiamos la tapa desde el techo, quitamos la malla, revisamos que la aleta se mueva libre y cambiamos la tapa si está rota.",
        ],
      },
      {
        heading: "Casas grandes y edificios",
        body: [
          "En las casas grandes de Broken Sound y de las comunidades cerradas del oeste, el cuarto de lavado suele estar en el centro de la casa y a veces hay un segundo arriba. Cada secadora tiene su propio ducto hasta el techo, largo, y lo limpiamos desde las dos puntas.",
          "La limpieza cuesta de $100 a $200 por ducto y la reparación o el cambio de $200 a $600. En los edificios de Boca Del Mar y cerca de la playa cobramos por unidad y cotizamos el edificio completo.",
        ],
      },
    ],
    faq: [
      {
        question: "There is a screen on my roof vent. Was it put there for a reason?",
        answer:
          "It was meant to keep birds out, but it does not belong on a dryer termination. A screen collects lint, and code calls for a backdraft damper with no screen. A cap with a damper that closes properly keeps birds out without choking the dryer.",
      },
      {
        question: "Do you have to go on the roof to clean my vent?",
        answer:
          "For a roof termination, yes. Cleaning only from the laundry room pushes lint toward the cap, which is the part most likely to be blocked already. We clear and check the cap on every roof vent.",
      },
      {
        question: "Will my HOA need to approve a replacement roof cap?",
        answer:
          "Swapping a cap for the same type and colour rarely needs anything, but some Boca associations want to be told about any roof work. Check with your management office, and we can give you the cap details to send them.",
      },
    ],
    faqEs: [
      {
        question: "Mi salida en el techo tiene una malla. ¿Hay que quitarla?",
        answer:
          "Sí. Se puso para que no entraran pájaros, pero en la salida de una secadora la malla atrapa la pelusa, y el código pide una aleta antirretorno sin malla. Una tapa con una aleta que cierre bien mantiene afuera a los pájaros sin ahogar la secadora.",
      },
      {
        question: "¿Tienen que subir al techo para limpiar la ventila?",
        answer:
          "Si la salida está en el techo, sí. Limpiar solo desde el cuarto de lavado empuja la pelusa hacia la tapa, que es justamente la parte que más se tapa. En cada salida en el techo limpiamos y revisamos la tapa.",
      },
      {
        question: "¿Necesito permiso de la asociación para cambiar la tapa del techo?",
        answer:
          "Cambiar la tapa por otra del mismo tipo y color casi nunca lo requiere, pero algunas asociaciones de Boca piden que se les avise de cualquier trabajo en el techo. Consulte con la administración y le damos los datos de la tapa para que se los mande.",
      },
    ],
  },
  {
    slug: "west-palm-beach",
    name: "West Palm Beach",
    county: "Palm Beach County",
    region: "Palm Beach County",
    nearby: ["lake-worth-beach", "greenacres", "wellington"],
    neighborhoods: ["El Cid", "Flamingo Park", "Northwood", "Grandview Heights", "Ibis", "SoSo"],
    intro:
      "West Palm Beach mixes 1920s houses in El Cid, Flamingo Park and Northwood with condo towers downtown and newer suburbs out toward Ibis. In the old houses the laundry arrived decades after the house did, and where the vent comes out is often the real problem.",
    introEs:
      "West Palm Beach combina casas de los años veinte en El Cid, Flamingo Park y Northwood con torres de condominios en el centro y urbanizaciones nuevas hacia Ibis. En las casas viejas el cuarto de lavado llegó décadas después que la casa, y el problema muchas veces es por dónde sale la ventila.",
    common:
      "A wall hood placed under a window or beside a porch door, close enough that warm, lint laden exhaust drifts back into the house.",
    commonEs:
      "Una salida en la pared justo debajo de una ventana o al lado de la puerta del porche, tan cerca que el aire caliente con pelusa se vuelve a meter a la casa.",
    depth: [
      {
        heading: "Historic houses with laundries added later",
        body: [
          "When a 1920s house in Flamingo Park or Grandview Heights got a washer and dryer, they went wherever there was room: a back porch, a pantry, a corner of the garage. The vent took the shortest way to daylight, which was often under a kitchen window or a step from the back door.",
          "The code wants the termination at least 3 feet from any opening into the building. Closer than that, warm exhaust and fine lint come back in through the window screen, and the moisture stains the sill and swells the wood. Moving those hoods is one of the most frequent jobs we do in the historic districts.",
          "A move is usually a short reroute in 4 inch rigid metal duct with the joints sealed in foil tape. On old masonry or wood siding we look for a route along a side or rear wall that keeps the run short and leaves the front of the house alone.",
        ],
      },
      {
        heading: "Towers downtown and along Flagler Drive",
        body: [
          "In the condo towers the dryer vents to an outside wall, sometimes through a ceiling soffit that runs the length of the entry hall. We clean those from inside the unit through the full run and work with the building to reach the outside end where that is possible.",
          "Buildings that want every unit done in one visit get a per unit price and a single quote for the property, and each owner gets their own before and after airflow numbers.",
        ],
      },
      {
        heading: "Northwood and the streets by the Intracoastal",
        body: [
          "The smaller homes in Northwood and the blocks near the water get salt air and heavy plantings. Hoods tucked behind hibiscus or crotons collect leaves and lint together, and the dampers seize either open or shut.",
          "Cleaning a standard run costs $100 to $200. Moving a hood or replacing a section of duct costs $200 to $600, and we tell you which applies before we start.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Casas históricas con lavandería agregada",
        body: [
          "Cuando a una casa de los años veinte en Flamingo Park o Grandview Heights le pusieron lavadora y secadora, las metieron donde cupieron: el porche de atrás, la despensa, una esquina del garaje. La ventila salió por el camino más corto, muchas veces debajo de la ventana de la cocina o a un paso de la puerta.",
          "El código pide que la salida quede a por lo menos 3 pies de cualquier abertura de la casa. Más cerca, el aire caliente y la pelusa fina vuelven a entrar por el mosquitero de la ventana, y la humedad mancha el marco. Mover esas salidas es de los trabajos que más hacemos en los barrios históricos.",
        ],
      },
      {
        heading: "Torres del centro y casas cerca del agua",
        body: [
          "En las torres de condominios la secadora ventila hacia una pared exterior, a veces por un falso techo que cruza todo el pasillo de entrada. Las limpiamos desde adentro de la unidad y coordinamos con el edificio para llegar a la salida de afuera cuando se puede. Para el edificio completo cobramos por unidad.",
          "En Northwood y las calles cerca del Intracoastal, la sal y las matas tapan las salidas de pared y traban la aleta. La limpieza cuesta de $100 a $200, y mover una salida o cambiar un tramo de ducto cuesta de $200 a $600.",
        ],
      },
    ],
    faq: [
      {
        question: "My dryer vent comes out right under the kitchen window. Is that a problem?",
        answer:
          "Yes, if it is closer than 3 feet. Exhaust and lint drift back in through the window, and the moisture works on the frame. Moving the hood along the wall is normally a short reroute.",
      },
      {
        question: "Can you keep a new vent off the front of my historic house?",
        answer:
          "Usually. We look for a side or rear wall that meets the 3 foot rule and keeps the run short. If your house is in a historic district, check with the city before a new opening is cut. Cleaning or replacing an existing hood in the same spot rarely raises questions.",
      },
      {
        question: "Do I need the association's permission to have my condo vent cleaned?",
        answer:
          "For work inside your own unit, generally not, though most buildings want contractors registered at the front desk. Anything on the outside wall has to go through the association, which arranges the access.",
      },
    ],
    faqEs: [
      {
        question: "La ventila sale justo debajo de la ventana de la cocina. ¿Es un problema?",
        answer:
          "Sí, si está a menos de 3 pies. El aire y la pelusa se vuelven a meter por la ventana y la humedad daña el marco. Mover la salida por la misma pared suele ser un cambio de ruta corto.",
      },
      {
        question: "Vivo en un condominio del centro. ¿Necesito permiso para limpiar la ventila?",
        answer:
          "Para trabajar dentro de su unidad, por lo general no, aunque casi todos los edificios piden registrar al técnico en la recepción. Lo que haya que hacer en la pared de afuera lo coordina la asociación.",
      },
      {
        question: "¿Cómo sé si la ventila de mi casa vieja está bien instalada?",
        answer:
          "Fíjese en tres cosas: que detrás de la secadora haya una sola manguera corta y visible, que afuera la aleta se levante cuando la secadora está prendida, y que la salida no quede pegada a una ventana o puerta. Si alguna falla, conviene que la revisemos.",
      },
    ],
  },
  {
    slug: "greenacres",
    name: "Greenacres",
    county: "Palm Beach County",
    region: "Palm Beach County",
    nearby: ["lake-worth-beach", "wellington", "west-palm-beach", "boynton-beach"],
    neighborhoods: ["Jog Road corridor", "Lake Worth Road corridor", "Melaleuca Lane", "Forest Hill Boulevard"],
    intro:
      "Greenacres is single family homes, townhomes and large apartment and condo communities strung along Jog Road, Lake Worth Road and Forest Hill Boulevard. Many households here are families, and the dryer runs most days of the week.",
    introEs:
      "Greenacres es casas, casas adosadas y grandes comunidades de apartamentos y condominios a lo largo de Jog Road, Lake Worth Road y Forest Hill Boulevard. Aquí viven muchas familias, y la secadora trabaja casi todos los días.",
    common:
      "A run with nothing broken in it at all, simply loaded with a year of lint from a household drying a load or two every day.",
    commonEs:
      "Un ducto sin nada roto, simplemente lleno con un año de pelusa de una familia que seca una o dos cargas todos los días.",
    depth: [
      {
        heading: "Count the loads, not the years",
        body: [
          "Lint follows use. A couple drying three loads a week and a family of five drying ten are on different schedules, even in identical townhomes on the same street.",
          "In a busy Greenacres household we often find the duct half closed at the one year mark, with the heaviest lint at the first elbow inside the wall and packed behind the hood damper. The dryer still works. It just takes longer, and that extra time is heat sitting in the duct with the lint.",
          "For homes like that, cleaning every six months is reasonable. The airflow reading at the hood before we clean tells you whether the visit was due, and if the number had barely dropped, we will tell you to wait longer next time.",
        ],
      },
      {
        heading: "Townhomes and apartment buildings",
        body: [
          "The townhome communities off Jog Road and Melaleuca Lane mostly have the laundry on the second floor, with the duct running into the attic and out a roof cap. The apartment and condo buildings vent from a hall closet through an outside wall.",
          "In a rental the vent usually belongs to the landlord or the association. Tenants can book us anyway, and we leave the readings for you to show the owner. For whole properties we price per unit and quote the community.",
        ],
      },
      {
        heading: "The numbers behind the advice",
        body: [
          "The US Fire Administration counts about 2,900 home clothes dryer fires a year in the United States, with failure to clean as the leading cause, behind about a third of them. Busy laundry rooms are where that risk concentrates.",
          "Cleaning costs $100 to $200. If we find foil hose or a crushed section inside a wall, replacing it with rigid metal duct costs $200 to $600, and we tell you before doing it.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Lo que cuenta son las cargas, no los años",
        body: [
          "La pelusa va de acuerdo con el uso. Una pareja que seca tres cargas por semana y una familia de cinco que seca diez no necesitan la misma limpieza, aunque vivan en casas iguales en la misma calle.",
          "En las casas de Greenacres donde se lava mucho, al año encontramos el ducto medio tapado, con la pelusa más gruesa en el primer codo dentro de la pared y detrás de la aleta de la salida. La secadora sigue funcionando, pero tarda más, y ese tiempo extra es calor que se queda en el ducto junto con la pelusa.",
          "Para esas familias, limpiar cada seis meses tiene sentido. La medida de flujo de aire antes de limpiar le dice si ya hacía falta, y si casi no había bajado, le decimos que puede esperar más la próxima vez.",
        ],
      },
      {
        heading: "Casas adosadas, apartamentos y precio",
        body: [
          "En las casas adosadas cerca de Jog Road y Melaleuca Lane el cuarto de lavado casi siempre está en el segundo piso y el ducto sale por el ático a una salida en el techo. En los apartamentos sale por una pared exterior desde un clóset del pasillo.",
          "Según la Administración de Bomberos de Estados Unidos, hay unos 2,900 incendios de secadoras en hogares cada año en el país, y la causa principal, en cerca de un tercio de los casos, es no limpiarlas. La limpieza cuesta de $100 a $200, y cambiar manguera de aluminio o un tramo aplastado por ducto rígido cuesta de $200 a $600.",
        ],
      },
    ],
    faq: [
      {
        question: "We do laundry every day. How often should our vent be cleaned?",
        answer:
          "Every six months is a sensible starting point for a household that size. After the first visit, the before reading tells us whether that interval is right for your run or whether you can stretch it.",
      },
      {
        question: "I rent my townhome. Who pays for the vent cleaning?",
        answer:
          "That depends on your lease, but the vent is part of the property, so most owners cover it. You can book the visit yourself or have the owner book it. Either way, the before and after readings go to whoever needs them.",
      },
      {
        question: "Does the lint screen not catch everything?",
        answer:
          "It catches a good share, not all of it. Fine lint passes the screen and settles in the duct, mostly at bends and at the hood. Cleaning the screen every load is still worth doing, it just does not replace cleaning the run.",
      },
    ],
    faqEs: [
      {
        question: "En mi casa se lava todos los días. ¿Cada cuánto hay que limpiar la ventila?",
        answer:
          "Cada seis meses es un buen punto de partida para una familia grande. Después de la primera visita, la medida de antes nos dice si ese tiempo le queda bien a su ducto o si puede esperar más.",
      },
      {
        question: "Alquilo. ¿Quién paga la limpieza de la ventila de la secadora?",
        answer:
          "Depende del contrato, pero la ventila es parte de la propiedad y casi siempre la paga el dueño. Usted puede hacer la cita o pedírsela al dueño, y las medidas de antes y después se le entregan a quien las necesite.",
      },
      {
        question: "Si limpio el filtro de pelusa en cada carga, ¿hace falta limpiar el ducto?",
        answer:
          "Sí. El filtro atrapa buena parte, pero no toda. La pelusa fina pasa y se asienta en los codos y en la salida. Limpiar el filtro en cada carga es buena costumbre, pero no reemplaza la limpieza del ducto.",
      },
    ],
  },
  {
    slug: "wellington",
    name: "Wellington",
    county: "Palm Beach County",
    region: "Palm Beach County",
    nearby: ["greenacres", "west-palm-beach", "lake-worth-beach"],
    neighborhoods: ["Palm Beach Polo", "Olympia", "Binks Forest", "Aero Club", "Equestrian Preserve"],
    intro:
      "Wellington is golf communities, large family homes and, in the Equestrian Preserve, barns with their own laundry rooms. A dryer that handles saddle pads and horse blankets loads its vent faster than any household machine.",
    introEs:
      "Wellington es comunidades de golf, casas familiares grandes y, en la zona ecuestre, establos con su propio cuarto de lavado. Una secadora que seca mantas de caballo y sudaderos llena la ventila mucho más rápido que cualquier secadora de casa.",
    common:
      "A barn or groom's apartment dryer vent matted with horse hair and arena dust as much as lint, often within a single winter show season.",
    commonEs:
      "La ventila de la secadora de un establo o del apartamento de los mozos, apelmazada con pelo de caballo y polvo de la pista además de pelusa, muchas veces en una sola temporada de invierno.",
    depth: [
      {
        heading: "Saddle pads, wraps and blankets",
        body: [
          "Through the winter show season the barns around the Equestrian Preserve wash saddle pads, polo wraps and blankets every day. Horse hair is stiffer than clothing lint, and it weaves into a mat that clings to the duct wall and to the damper flap.",
          "Barn dryers usually sit in a tack room or utility room with a short run through the wall. Short is not the same as clean. The hood also takes in dust from the arena and the shavings, and a damper coated in hair and dust stops closing.",
          "We clean barn vents from both ends, clear and check the hood, and take airflow readings before and after. A barn dryer in daily use is worth a visit before the season and another partway through it.",
        ],
      },
      {
        heading: "Family houses in Olympia and Binks Forest",
        body: [
          "The homes in Olympia, Binks Forest and the newer communities are mostly two storey, with the laundry upstairs or off the kitchen and the duct going up through the attic to a roof cap. Long runs, busy households and a cap nobody ever looks at.",
          "Houses on the golf course lots at Palm Beach Polo and Binks Forest get sprinkler spray and grass clippings on the wall hoods, and wet clippings glue lint to the damper. A quick look at the hood when the dryer is running tells you a lot: the flap should lift and stay up.",
        ],
      },
      {
        heading: "Booking house and barn together",
        body: [
          "Each dryer is its own run and is priced as one. Cleaning is $100 to $200 per run, and repair or replacement is $200 to $600. A property with several barn dryers is quoted before booking.",
          "We work Saturdays 9am to 5pm and Sundays 10am to 4pm as well as weekdays, which helps when a barn manager is tied up during the week.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Mantas, vendas y sudaderos",
        body: [
          "En la temporada de competencias de invierno, los establos alrededor de la zona ecuestre lavan sudaderos, vendas y mantas todos los días. El pelo de caballo es más duro que la pelusa de la ropa y forma una especie de fieltro que se pega a la pared del ducto y a la aleta.",
          "La secadora del establo casi siempre está en el cuarto de monturas o de servicio, con un ducto corto por la pared. Corto no quiere decir limpio: la salida también recibe el polvo de la pista y de la viruta, y una aleta cubierta de pelo deja de cerrar. Recomendamos una limpieza antes de la temporada y otra a mitad.",
        ],
      },
      {
        heading: "Las casas de Olympia y Binks Forest",
        body: [
          "Las casas de Olympia, Binks Forest y las comunidades nuevas son casi todas de dos pisos, con el cuarto de lavado arriba y el ducto subiendo por el ático hasta la salida en el techo. Son ductos largos, en casas donde se lava mucho.",
          "Cada secadora es un ducto aparte y se cobra por separado. La limpieza cuesta de $100 a $200 por ducto y la reparación o el cambio de $200 a $600. Trabajamos también sábados y domingos.",
        ],
      },
    ],
    faq: [
      {
        question: "How often should the dryer vent in a barn be cleaned?",
        answer:
          "If the dryer runs daily through the season, before the season starts and again midway. A barn dryer that only runs a few times a week can go once a year. The airflow reading after the first visit gives us a baseline to judge by.",
      },
      {
        question: "Is horse hair really worse than ordinary lint?",
        answer:
          "In a vent, yes. It is coarser, it knits together, and it catches dust from the arena. The mat it forms clings to the duct and the damper and does not blow out on its own the way loose lint sometimes does.",
      },
      {
        question: "Can you do the house and the barn on the same visit?",
        answer:
          "Yes. It saves a second trip. Each dryer is a separate run with its own readings, and we tell you before we start which ones need more than a cleaning.",
      },
    ],
    faqEs: [
      {
        question: "¿Cada cuánto se limpia la ventila de la secadora de un establo?",
        answer:
          "Si la secadora trabaja todos los días durante la temporada, antes de que empiece y otra vez a mitad. Si se usa pocas veces por semana, una vez al año alcanza. La medida de flujo de aire de la primera visita nos sirve de referencia.",
      },
      {
        question: "¿El pelo de caballo es peor que la pelusa normal?",
        answer:
          "En una ventila, sí. Es más grueso, se teje con el polvo de la pista y se pega al ducto y a la aleta. No sale solo con el aire como a veces sale la pelusa suelta.",
      },
      {
        question: "¿Pueden limpiar la casa y el establo en la misma visita?",
        answer:
          "Sí, y así se ahorra una segunda visita. Cada secadora es un ducto aparte, con sus propias medidas, y antes de empezar le decimos cuál necesita algo más que limpieza.",
      },
    ],
  },
  {
    slug: "bonita-springs",
    name: "Bonita Springs",
    county: "Lee County",
    region: "Southwest Florida",
    nearby: ["naples", "fort-myers", "cape-coral"],
    neighborhoods: ["Bonita Bay", "Pelican Landing", "Palmira", "Spanish Wells", "Bonita Beach"],
    intro:
      "Bonita Springs is mostly gated golf communities built from the 1980s onward, Bonita Bay, Pelican Landing, Palmira and Spanish Wells among them, with a large share of coach homes and mid rise condos alongside the single family houses. In a coach home, the two floors of the same building vent very differently.",
    introEs:
      "Bonita Springs es sobre todo comunidades cerradas de golf construidas desde los años ochenta, como Bonita Bay, Pelican Landing, Palmira y Spanish Wells, con muchas coach homes y condominios de mediana altura junto a las casas. En una coach home, el piso de arriba y el de abajo ventilan de forma muy distinta.",
    common:
      "The upstairs coach home vent, a long run through the floor framing with several bends, packed at the elbows while the downstairs neighbour's short wall vent is still nearly clean.",
    commonEs:
      "La ventila de la coach home de arriba, un ducto largo entre los pisos con varios codos, tapada en las curvas mientras la del vecino de abajo, corta y por la pared, sigue casi limpia.",
    depth: [
      {
        heading: "Upstairs and downstairs in a coach home",
        body: [
          "A coach home building usually holds four homes, two up and two down, each with its own garage. The downstairs laundry vents through a short run to an outside wall. The upstairs laundry has to get out through the floor framing or up through the roof, and that run can be three or four times as long.",
          "Because both homes share a building, a roof and a landscaper, owners assume their vents age together. They do not. We regularly measure the upper home's run at half its proper airflow while the lower one is close to clean.",
          "Each run gets its own before and after reading. When an association books a whole building, the price is per unit with one quote for the building, and every owner gets their own numbers.",
        ],
      },
      {
        heading: "Clean before the guests arrive, not after",
        body: [
          "Season in Bonita means visitors, and visitors mean beach towels, pool towels and sheets for the guest rooms. A dryer that idles most of the summer can run two or three times a day from January to April.",
          "The sensible time to clean is October or November, before that rush, so the run starts the busy months clear. If your dryer already takes two cycles by February, do not wait for the season to end.",
        ],
      },
      {
        heading: "Roof caps on the single family homes",
        body: [
          "The single family homes in these communities mostly vent through a tile or metal roof. Caps near the Gulf and the Imperial River take salt and humidity all year, and the damper hinge is usually the first thing to go.",
          "Cleaning costs $100 to $200 per run. A cracked cap, a seized damper or a section of crushed duct in the attic falls in the $200 to $600 repair range, quoted before we start.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Arriba y abajo en una coach home",
        body: [
          "Un edificio de coach homes suele tener cuatro casas, dos arriba y dos abajo, cada una con su garaje. La lavandería de abajo ventila por un ducto corto a la pared. La de arriba tiene que salir entre los pisos o subir al techo, y ese ducto puede ser tres o cuatro veces más largo.",
          "Como comparten edificio y jardinero, los dueños creen que las ventilas envejecen igual. No es así. Seguido medimos la de arriba con la mitad del flujo de aire que debería tener, mientras la de abajo está casi limpia. Cada una lleva su propia medida, y si la asociación quiere el edificio completo cobramos por unidad.",
        ],
      },
      {
        heading: "Limpie antes de que lleguen las visitas",
        body: [
          "La temporada en Bonita trae visitas, y las visitas traen toallas de playa, toallas de piscina y sábanas. Una secadora que casi no se usa en verano puede trabajar dos o tres veces al día de enero a abril.",
          "El mejor momento para limpiar es octubre o noviembre, antes de ese movimiento. La limpieza cuesta de $100 a $200 por ducto, y una tapa rota, una aleta trabada o un tramo aplastado en el ático cuesta de $200 a $600.",
        ],
      },
    ],
    faq: [
      {
        question: "We live in the upstairs coach home. Why does our dryer take longer than our neighbours'?",
        answer:
          "Most likely because your vent is much longer. The upper unit's duct has to cross the floor framing or climb to the roof, with more bends, and lint settles at each one. An airflow reading at your hood will show how much it has lost.",
      },
      {
        question: "Can the association schedule all the coach homes at once?",
        answer:
          "Yes, and it is the easiest way to reach the upstairs hoods and roof caps. We price per unit, quote the building, and leave each owner the readings for their own vent.",
      },
      {
        question: "When is the best month to clean the vent in Bonita?",
        answer:
          "October or November, before the guests and the heavy laundry of the season. A run cleaned then goes into the busy months with full airflow.",
      },
    ],
    faqEs: [
      {
        question: "Vivimos en la coach home de arriba. ¿Por qué nuestra secadora tarda más que la del vecino?",
        answer:
          "Lo más probable es que su ducto sea mucho más largo. El de arriba tiene que cruzar entre los pisos o subir al techo, con más codos, y la pelusa se asienta en cada uno. La medida de flujo de aire en su salida lo confirma.",
      },
      {
        question: "¿La asociación puede programar todas las unidades juntas?",
        answer:
          "Sí, y es la forma más fácil de llegar a las salidas de arriba y a las del techo. Cobramos por unidad, cotizamos el edificio y cada dueño recibe las medidas de su propia ventila.",
      },
      {
        question: "¿En qué mes conviene limpiar la ventila?",
        answer:
          "En octubre o noviembre, antes de las visitas y de las cargas grandes de la temporada. Así la secadora empieza los meses de más uso con el ducto despejado.",
      },
    ],
  },
  {
    slug: "fort-myers",
    name: "Fort Myers",
    county: "Lee County",
    region: "Southwest Florida",
    nearby: ["cape-coral", "bonita-springs", "naples"],
    neighborhoods: ["McGregor", "Dean Park", "Whiskey Creek", "Fort Myers Villas", "Gateway", "Pelican Preserve"],
    intro:
      "Fort Myers has 1950s and 1960s block houses along McGregor Boulevard and in Dean Park, 1970s neighbourhoods like Whiskey Creek, and big newer communities such as Gateway and Pelican Preserve. After Hurricane Ian, a great many laundry rooms in the older parts of town were stripped and rebuilt, and the dryer vent went back together in a hurry.",
    introEs:
      "Fort Myers tiene casas de bloque de los cincuenta y sesenta por McGregor Boulevard y Dean Park, barrios de los setenta como Whiskey Creek y comunidades grandes y nuevas como Gateway y Pelican Preserve. Después del huracán Ian, muchísimos cuartos de lavado en la parte vieja se desarmaron y se rehicieron, y la ventila de la secadora se volvió a armar a la carrera.",
    common:
      "A vent reconnected during storm repairs with screws through the duct joints, or a short piece of foil hose closed up inside new drywall.",
    commonEs:
      "Una ventila reconectada durante las reparaciones del huracán con tornillos atravesando las uniones, o un pedazo de manguera de aluminio encerrado dentro de la pared nueva.",
    depth: [
      {
        heading: "What happens to a vent during a rebuild",
        body: [
          "When a laundry room is opened down to the block and finished again, the dryer duct is usually disconnected and put back by whoever is hanging drywall that day. That is how screws end up through the joints, each one a small spike that snags lint, and how a length of foil hose ends up sealed inside a wall because it was the piece on the truck.",
          "Both are against code. Duct joints may not be fastened with screws or anything else that sticks into the duct, and the flexible transition hose may not be concealed in a wall or ceiling. If your laundry room was rebuilt, have the vent checked within the first year rather than waiting for a symptom.",
          "We read airflow at the hood, clean from both ends, and read it again. A run that is still low right after a rebuild almost always has one of those two faults, and we can usually tell you which before anything is opened.",
        ],
      },
      {
        heading: "Utility rooms off the carport",
        body: [
          "Many of the older houses put the laundry in a utility room off the carport or in the garage, venting through a block wall. The run is short, and the hood often sits under the carport roof, where lint drifts onto the ceiling and soffit instead of blowing clear.",
          "Grey fuzz on a carport ceiling means the hood or damper is restricted, and it is fuel sitting next to a car. We clear the hood, free the damper, and if the hood is in a dead air corner we can move it somewhere the exhaust can escape.",
        ],
      },
      {
        heading: "Gateway, Pelican Preserve and the newer builds",
        body: [
          "The newer communities are slab homes with the laundry indoors, venting through the roof or a side wall. Construction is tidy, but the caps are often basic plastic ones whose damper hinges crack in the sun.",
          "Cleaning costs $100 to $200 per run. Rebuilding a storm repaired section in rigid metal duct, or replacing a cap, costs $200 to $600, quoted before we start.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Qué le pasa a la ventila en una reconstrucción",
        body: [
          "Cuando un cuarto de lavado se abre hasta el bloque y se vuelve a terminar, el ducto de la secadora casi siempre lo desconecta y lo vuelve a poner el que está colgando la tablaroca ese día. Así terminan los tornillos atravesando las uniones, cada uno un gancho que agarra pelusa, y así termina un pedazo de manguera de aluminio encerrado en la pared.",
          "Las dos cosas van contra el código. Las uniones no se pueden fijar con tornillos ni con nada que entre al ducto, y la manguera flexible no puede quedar escondida en una pared o en el techo. Si su cuarto de lavado se reconstruyó, revise la ventila durante el primer año.",
        ],
      },
      {
        heading: "El cuarto de lavado junto al carport",
        body: [
          "En muchas casas viejas la lavandería está en un cuarto junto al carport o en el garaje, con la salida por la pared de bloque. Si la salida queda debajo del techo del carport, la pelusa se pega al techo en vez de salir. Esa pelusa gris es señal de que la salida está restringida, y además está al lado del carro.",
          "La limpieza cuesta de $100 a $200 por ducto. Rehacer en metal rígido un tramo armado después del huracán, o cambiar una tapa, cuesta de $200 a $600, y le damos el precio antes de empezar.",
        ],
      },
    ],
    faq: [
      {
        question: "Our laundry room was redone after Ian. Should the vent be checked?",
        answer:
          "Yes. Rebuilds are where we most often find screws through the joints and foil hose hidden in walls. A before reading and a look at the transition and the hood will show whether it went back together properly.",
      },
      {
        question: "There is lint stuck to the ceiling of my carport. Is that from the dryer?",
        answer:
          "Almost certainly. It means exhaust is not leaving the hood cleanly, usually because the damper is stuck partly closed or the hood is in a sheltered corner. It should be cleared, both for the dryer's sake and because lint near a parked car is a fire load.",
      },
      {
        question: "Can you tell whether there are screws in the duct without opening the wall?",
        answer:
          "Often. Screws catch the brush in a way we can feel, and the lint pattern at the joints gives them away. If we suspect a concealed problem, we explain what we found and quote any opening up before doing it.",
      },
    ],
    faqEs: [
      {
        question: "Rehicieron el cuarto de lavado después de Ian. ¿Hay que revisar la ventila?",
        answer:
          "Sí. En las reconstrucciones es donde más encontramos tornillos en las uniones y manguera de aluminio escondida en la pared. Con la medida de antes y una revisión de la manguera y la salida sabemos si quedó bien armada.",
      },
      {
        question: "Tengo pelusa pegada al techo del carport. ¿Viene de la secadora?",
        answer:
          "Casi seguro que sí. Quiere decir que el aire no está saliendo bien, casi siempre porque la aleta está medio trabada o la salida está en una esquina sin corriente. Hay que destaparla, por la secadora y porque esa pelusa al lado del carro es material que se quema.",
      },
      {
        question: "¿Pueden saber si hay tornillos en el ducto sin abrir la pared?",
        answer:
          "Muchas veces sí. El cepillo se engancha en los tornillos de una manera que se siente, y la forma en que se acumula la pelusa en las uniones los delata. Si sospechamos algo escondido, se lo explicamos y le damos el precio antes de abrir.",
      },
    ],
  },
  {
    slug: "cape-coral",
    name: "Cape Coral",
    county: "Lee County",
    region: "Southwest Florida",
    nearby: ["fort-myers", "bonita-springs"],
    neighborhoods: ["Cape Harbour", "Tarpon Point", "Yacht Club", "Pelican", "Sandoval", "Four Mile Cove"],
    intro:
      "Cape Coral is a long grid of single storey block homes, most built from the 1970s through the 2000s, many of them backing onto canals. The laundry is very often in the garage, and the vent goes straight out through the garage wall into the side yard.",
    introEs:
      "Cape Coral es una cuadrícula enorme de casas de bloque de una planta, casi todas construidas entre los setenta y los dos mil, muchas con el patio dando al canal. La lavandería casi siempre está en el garaje, y la ventila sale derecho por la pared del garaje hacia el costado de la casa.",
    common:
      "A garage wall hood half buried behind a hedge or sitting inside the pool cage, with lint and wet leaves holding the damper partly shut.",
    commonEs:
      "Una salida en la pared del garaje medio escondida detrás de una mata o dentro de la jaula de la piscina, con pelusa y hojas mojadas trabando la aleta.",
    depth: [
      {
        heading: "The garage laundry and the forgotten side yard",
        body: [
          "In a typical Cape house the washer and dryer stand against the garage wall that faces the side yard. The duct is only a few feet long and the hood is on the side of the house where nobody walks.",
          "That is why it gets forgotten. The side yard is where the air conditioning condenser, the pool pump and the hedge all live, and a hood crowded by shrubs cannot push its damper open. Lint and leaves settle in the louvers, the damper stays partly closed, and the dryer slows down without anything looking wrong from inside.",
          "Clearing the hood and cutting back what grows in front of it is often most of the fix. The run itself still gets the full clean with the rotary brush and compressed air, and the hood gets an airflow reading before and after.",
        ],
      },
      {
        heading: "When the vent ends under the pool cage",
        body: [
          "Some homes had the laundry moved indoors during a remodel, and the new vent ends on the lanai under the screen enclosure. Lint and moisture then pour into a covered space next to the sliding doors.",
          "The termination must be at least 3 feet from any opening into the house, and lanai sliders count. Lint under a screened roof also lands on the pool deck and in the water. Rerouting to an outside wall is usually a short job.",
        ],
      },
      {
        heading: "Salt water canals and hood hardware",
        body: [
          "Homes on the salt water canals in the south Cape, around Cape Harbour, Tarpon Point and the Yacht Club, see the most corrosion on hood hardware. Plastic hoods turn brittle in the sun and metal ones rust at the hinge. In both cases the damper is what fails first.",
          "Cleaning costs $100 to $200. Moving a vent out of the lanai, or replacing a hood and a section of duct, costs $200 to $600.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "La lavandería en el garaje y el costado olvidado",
        body: [
          "En la casa típica de Cape Coral la lavadora y la secadora están contra la pared del garaje que da al costado. El ducto mide pocos pies y la salida queda del lado de la casa por donde nadie pasa.",
          "Por eso se olvida. En ese costado están el condensador del aire, la bomba de la piscina y la cerca de matas, y una salida tapada por las plantas no puede abrir la aleta. La pelusa y las hojas se acumulan, la aleta se queda medio cerrada y la secadora se pone lenta sin que se note nada desde adentro.",
          "Muchas veces la solución es limpiar la salida y podar lo que tiene enfrente, además de la limpieza completa del ducto con cepillo rotativo y aire comprimido.",
        ],
      },
      {
        heading: "Cuando la ventila sale dentro de la jaula de la piscina",
        body: [
          "En algunas casas remodeladas la lavandería se pasó adentro y la nueva ventila termina en el lanai, debajo de la malla. La pelusa y la humedad caen en un espacio cubierto, al lado de las puertas corredizas, y en la piscina.",
          "La salida tiene que quedar a por lo menos 3 pies de cualquier abertura de la casa, y las corredizas cuentan. La limpieza cuesta de $100 a $200, y sacar la ventila del lanai o cambiar una salida y un tramo de ducto cuesta de $200 a $600.",
        ],
      },
    ],
    faq: [
      {
        question: "My dryer is in the garage and the vent is only a few feet long. Does it really need cleaning?",
        answer:
          "Short runs need it less often, usually once a year, but they still need it. On Cape houses the restriction is usually at the hood, where lint, leaves and landscaping meet, and a blocked hood stops a short run just as surely as a long one.",
      },
      {
        question: "Our vent comes out inside the pool cage. Is that allowed?",
        answer:
          "Not if it is within 3 feet of the sliding doors or any other opening, and it is a poor spot regardless, since lint and moisture collect under the screen roof. We can reroute it to an outside wall.",
      },
      {
        question: "How close can plants be to the dryer hood?",
        answer:
          "Close enough to brush it is too close. Keep at least a clear foot or so in front of the hood so the damper can swing fully open and the exhaust can get away from the wall.",
      },
    ],
    faqEs: [
      {
        question: "La secadora está en el garaje y el ducto es cortito. ¿De verdad hay que limpiarlo?",
        answer:
          "Un ducto corto necesita limpieza con menos frecuencia, normalmente una vez al año, pero la necesita. En las casas de Cape Coral la obstrucción casi siempre está en la salida, donde se juntan pelusa, hojas y plantas.",
      },
      {
        question: "La ventila sale dentro de la jaula de la piscina. ¿Está permitido?",
        answer:
          "No si queda a menos de 3 pies de las puertas corredizas o de otra abertura, y aunque esté más lejos no es buen lugar, porque la pelusa y la humedad se quedan debajo de la malla. Podemos llevarla a una pared exterior.",
      },
      {
        question: "¿Qué tan cerca pueden estar las plantas de la salida?",
        answer:
          "Si la rozan, están demasiado cerca. Deje por lo menos un pie libre frente a la salida para que la aleta abra completa y el aire se aleje de la pared.",
      },
    ],
  },
  {
    slug: "naples",
    name: "Naples",
    county: "Collier County",
    region: "Southwest Florida",
    nearby: ["bonita-springs", "fort-myers"],
    neighborhoods: ["Old Naples", "Park Shore", "Pelican Bay", "The Moorings", "Aqualane Shores", "Port Royal"],
    intro:
      "Naples housing divides into condo towers along Gulf Shore Boulevard and in Pelican Bay, and single family streets in Old Naples, Park Shore, The Moorings, Aqualane Shores and Port Royal. In the towers, the dryer vent is as much the building's business as the owner's.",
    introEs:
      "La vivienda en Naples se divide entre las torres de condominios de Gulf Shore Boulevard y Pelican Bay, y las calles de casas en Old Naples, Park Shore, The Moorings, Aqualane Shores y Port Royal. En las torres, la ventila de la secadora es tanto asunto del edificio como del dueño.",
    common:
      "A condo duct running the length of a hall ceiling to the outside wall, longer than its bends allow, with the heaviest lint at the far end where no owner can reach.",
    commonEs:
      "Un ducto de condominio que recorre todo el techo del pasillo hasta la pared exterior, más largo de lo que permiten sus codos, con la pelusa más gruesa en la punta de afuera, donde ningún dueño llega.",
    depth: [
      {
        heading: "How a Gulf front tower vents",
        body: [
          "In most towers each unit has its own dryer duct, running from a laundry closet across a ceiling soffit to an exterior wall or a balcony. On a high floor, the outside end can only be reached from the balcony or with the building's own access equipment.",
          "That makes cleaning a building decision. When management organises it, every unit is done in one visit, the outside ends are reached once, and each owner gets their own before and after airflow readings. We price per unit and quote the building as a whole.",
          "Owners can still book their own unit. We clean the full run from inside, and if the outside end needs attention, we tell you and management what we found.",
        ],
      },
      {
        heading: "Working with the calendar",
        body: [
          "Many owners are in Naples from November to April and the buildings quiet down over the summer. Summer is the easier time to do a building: service elevators are free, absent owners can leave a key at the front desk, and the vents are clear before the season's laundry starts.",
          "We work Monday to Friday 8am to 7pm, Saturday 9am to 5pm and Sunday 10am to 4pm, and we can spread a large building over several days so no floor is without a dryer for long.",
        ],
      },
      {
        heading: "The single family streets",
        body: [
          "The older cottages in Old Naples and the 1960s and 1970s houses in The Moorings and Park Shore mostly vent through a wall or a low roof with short runs. The larger rebuilt homes in Port Royal and Aqualane Shores have long central runs and sometimes two laundry rooms.",
          "Near the Gulf and the bay, salt reaches every outside hood, and dampers seize either open or closed. Cleaning costs $100 to $200 per run, and repair or replacement costs $200 to $600.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Cómo ventila una torre frente al Golfo",
        body: [
          "En casi todas las torres cada unidad tiene su propio ducto, que va del clóset de lavado por un falso techo hasta una pared exterior o el balcón. En un piso alto, la punta de afuera solo se alcanza desde el balcón o con el equipo del edificio.",
          "Por eso la limpieza la decide el edificio. Cuando la administración la organiza, se hacen todas las unidades en una visita y cada dueño recibe sus medidas de flujo de aire de antes y después. Cobramos por unidad y cotizamos el edificio completo.",
        ],
      },
      {
        heading: "El verano y las casas",
        body: [
          "Muchos dueños están en Naples de noviembre a abril. El verano es el mejor momento para hacer un edificio: los ascensores de servicio están libres, quien no está puede dejar la llave en la recepción y las ventilas quedan limpias antes de la temporada.",
          "En las casas de Old Naples, The Moorings y Park Shore los ductos son cortos, por la pared o por un techo bajo. Las casas grandes de Port Royal tienen ductos largos y a veces dos lavanderías. La limpieza cuesta de $100 a $200 por ducto, y la reparación o el cambio de $200 a $600.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I have my condo vent cleaned without involving the building?",
        answer:
          "For the run inside your unit, yes, though most buildings ask that contractors check in at the front desk. If the outside end on the wall or balcony needs work, that goes through management.",
      },
      {
        question: "Why does the far end of my condo duct get so much lint?",
        answer:
          "By the time exhaust has crossed a long ceiling run it has slowed and cooled, and slower, cooler air drops its lint, so the far end collects the most. It is also the end owners never see.",
      },
      {
        question: "When is the best time to schedule a whole building?",
        answer:
          "Summer, when many owners are away and elevators and halls are quiet. The vents are then clear before the November to April season.",
      },
    ],
    faqEs: [
      {
        question: "¿Puedo limpiar la ventila de mi condominio sin pasar por el edificio?",
        answer:
          "El ducto dentro de su unidad, sí, aunque casi todos los edificios piden que el técnico se registre en la recepción. Si hay que trabajar la punta de afuera, en la pared o el balcón, eso va por la administración.",
      },
      {
        question: "No estoy en Naples en verano. ¿Pueden limpiar sin mí?",
        answer:
          "Sí, si el edificio permite dejar la llave en la recepción. Le mandamos las medidas de antes y después y le contamos lo que encontramos.",
      },
      {
        question: "¿Cuándo conviene programar el edificio completo?",
        answer:
          "En verano, cuando muchos dueños están fuera y los pasillos y ascensores están tranquilos. Así las ventilas quedan limpias para la temporada de noviembre a abril.",
      },
    ],
  },
  {
    slug: "winter-park",
    name: "Winter Park",
    county: "Orange County",
    region: "Central Florida",
    nearby: ["orlando", "kissimmee"],
    neighborhoods: ["Hannibal Square", "Orwin Manor", "Lakemont", "Windsong", "Kenilworth Shores", "Winter Park Pines"],
    intro:
      "Winter Park is old trees and older houses: brick streets, live oaks spread over the roofs, homes from the 1920s to the 1960s in Orwin Manor, Lakemont and around Hannibal Square, and newer rebuilds on the lake lots. Under that canopy, roof caps and wall hoods catch a lot more than lint.",
    introEs:
      "Winter Park es árboles viejos y casas viejas: calles de ladrillo, robles sobre los techos, casas de los años veinte a los sesenta en Orwin Manor, Lakemont y alrededor de Hannibal Square, y casas nuevas en los lotes junto a los lagos. Debajo de esos árboles, las salidas de la secadora recogen mucho más que pelusa.",
    common:
      "A roof cap clogged with oak leaves, pollen strands and acorns on top of lint, so the damper can only open a crack.",
    commonEs:
      "Una salida en el techo tapada con hojas de roble, flores secas y bellotas encima de la pelusa, con la aleta que apenas se abre.",
    depth: [
      {
        heading: "What comes down from the oaks",
        body: [
          "Live oaks drop their old leaves in late winter and early spring, then long pollen strands, then acorns later in the year. On a low pitch roof all of it gathers around anything that sticks up, and the dryer cap is usually the first thing in its path. Wet leaves pressed against a damper hold it nearly shut.",
          "Spanish moss blows into wall hoods and lodges behind the flap, and a hood that stays half open is an invitation to the squirrels. By the time a homeowner notices longer drying times, the cap can be packed solid.",
          "Here the best time to clean is late spring, after the leaf drop and the pollen, with a quick check of the cap in the fall if the roof sits under heavy canopy.",
        ],
      },
      {
        heading: "Old houses that have been added to",
        body: [
          "Many Winter Park homes have been enlarged more than once. The laundry often moved from a back porch or garage into a new mudroom or upstairs, and the vent was extended rather than rerouted. We find runs with an old section, a newer section and an unsealed joint between them, sometimes with a length of flexible duct bridging the gap.",
          "The repair is 4 inch rigid metal duct on the shortest safe route, joints sealed with foil tape and no screws into the airstream. Where the old route is too long for its bends, a new exit closer to the laundry is usually the better answer.",
        ],
      },
      {
        heading: "Condos and townhomes near Park Avenue",
        body: [
          "The condos and townhomes near Park Avenue and Hannibal Square are newer, with laundry closets venting through a wall or the roof. Associations there can have every unit done in one visit at a per unit price.",
          "For a house, cleaning costs $100 to $200 and repair or rerouting costs $200 to $600. A cap packed with debris that has to be cut out is quoted before we book.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Lo que cae de los robles",
        body: [
          "Los robles botan la hoja vieja al final del invierno y a principios de la primavera, después las flores secas y más tarde las bellotas. En un techo de poca pendiente todo eso se junta alrededor de lo que sobresale, y la salida de la secadora es lo primero que encuentra. Las hojas mojadas pegadas a la aleta la dejan casi cerrada.",
          "El musgo español se mete en las salidas de pared y se queda detrás de la aleta, y una salida medio abierta atrae a las ardillas. El mejor momento para limpiar aquí es a finales de la primavera, cuando ya cayeron las hojas y el polen.",
        ],
      },
      {
        heading: "Casas que crecieron con los años",
        body: [
          "Muchas casas de Winter Park se han ampliado más de una vez. La lavandería pasó del porche o del garaje a un cuarto nuevo o al segundo piso, y la ventila se alargó en vez de cambiarle la ruta. Encontramos ductos con un tramo viejo, uno nuevo y una unión sin sellar entre los dos.",
          "La reparación es ducto de metal rígido de 4 pulgadas por la ruta segura más corta, con cinta de aluminio en las uniones. La limpieza cuesta de $100 a $200 y la reparación o el cambio de ruta de $200 a $600.",
        ],
      },
    ],
    faq: [
      {
        question: "We have big oaks over the house. How often should the roof cap be checked?",
        answer:
          "Clean the vent once a year in late spring, after the leaf drop, and have someone look at the cap in the fall. Under heavy canopy the cap can block well before the duct itself is dirty.",
      },
      {
        question: "Our laundry moved upstairs in a renovation. Is the old vent still being used?",
        answer:
          "Often part of it is, extended with new duct. That joint and the extra length are where we look first. An airflow reading at the outside end shows whether the combined run is performing.",
      },
      {
        question: "Is there a squirrel in my dryer vent?",
        answer:
          "If you hear scratching near the laundry wall, or see chewed material at the hood, it is possible. Do not run the dryer until it is checked. We clear the hood and the run and make sure the damper closes, which is what keeps animals out.",
      },
    ],
    faqEs: [
      {
        question: "Tenemos robles grandes encima de la casa. ¿Cada cuánto hay que revisar la salida en el techo?",
        answer:
          "Limpie la ventila una vez al año a finales de la primavera y pida que revisen la salida en el otoño. Con tanto árbol, la salida se puede tapar mucho antes de que el ducto esté sucio.",
      },
      {
        question: "Pasamos la lavandería al segundo piso. ¿Se sigue usando la ventila vieja?",
        answer:
          "Muchas veces sí, alargada con ducto nuevo. Esa unión y el largo extra son lo primero que revisamos, y la medida de flujo de aire afuera nos dice si el conjunto funciona.",
      },
      {
        question: "Oigo ruidos en la pared de la lavandería. ¿Puede ser un animal en la ventila?",
        answer:
          "Puede ser. No use la secadora hasta que la revisemos. Limpiamos la salida y el ducto y nos aseguramos de que la aleta cierre bien, que es lo que mantiene afuera a los animales.",
      },
    ],
  },
  {
    slug: "kissimmee",
    name: "Kissimmee",
    county: "Osceola County",
    region: "Central Florida",
    nearby: ["orlando", "winter-park"],
    neighborhoods: ["Buenaventura Lakes", "Kissimmee Bay", "Celebration", "Champions Gate", "Downtown Kissimmee"],
    intro:
      "Around Kissimmee a very large number of homes are vacation rentals, from pool houses off US 192 to resort communities like Champions Gate, alongside settled neighbourhoods such as Buenaventura Lakes and Kissimmee Bay. A rental dryer can do in one month what a family dryer does in a season.",
    introEs:
      "En Kissimmee muchísimas casas son de alquiler vacacional, desde las casas con piscina cerca de la 192 hasta comunidades como Champions Gate, y al lado están los barrios de siempre como Buenaventura Lakes y Kissimmee Bay. La secadora de una casa de alquiler puede hacer en un mes lo que la de una familia hace en una temporada.",
    common:
      "A vacation home vent loaded with towel lint within a few months, because every guest changeover means several loads of sheets, bath towels and pool towels.",
    commonEs:
      "La ventila de una casa vacacional llena de pelusa de toallas en pocos meses, porque cada cambio de huéspedes son varias cargas de sábanas, toallas de baño y toallas de piscina.",
    depth: [
      {
        heading: "Turnover laundry adds up fast",
        body: [
          "A six bedroom vacation home turned every few days washes sheets for every bed and towels for every guest, plus the pool towels. That can be six to ten loads per changeover, and towels shed more lint than almost anything else that goes in a dryer.",
          "Housekeepers clear the lint screen, which helps, but the screen only stops part of it. The rest goes down the duct, and in a busy rental the run can be heavily loaded within three or four months.",
          "For homes on that kind of schedule we suggest a cleaning every three to four months. Each visit comes with before and after airflow numbers, which gives an owner who lives far away something concrete to go on.",
        ],
      },
      {
        heading: "Between the owner, the manager and the cleaners",
        body: [
          "Owners who live up north or abroad rely on a property manager and a cleaning crew, and the dryer vent tends to fall between them. A dryer that needs two cycles per load costs the crew time on every turnover, so the problem usually reaches the manager as a housekeeping complaint before anyone thinks of the vent.",
          "We can work directly with the manager on access and timing, and put several homes on the same schedule. Same week appointments are normal, and we work weekends too: Saturday 9am to 5pm and Sunday 10am to 4pm.",
        ],
      },
      {
        heading: "Buenaventura Lakes and Kissimmee Bay",
        body: [
          "The established neighbourhoods are mostly 1980s and 1990s single storey homes, with the laundry in the garage or an interior closet venting through a side wall. Those are ordinary family runs, and once a year is usually right.",
          "Cleaning costs $100 to $200 per run, and repair or replacement costs $200 to $600. A vacation home with two laundry rooms, or a manager with several houses, gets a quote before booking.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "La ropa de cada cambio de huéspedes",
        body: [
          "Una casa vacacional de seis cuartos que cambia de huéspedes cada pocos días lava sábanas para todas las camas, toallas para cada huésped y las toallas de la piscina. Pueden ser de seis a diez cargas en cada cambio, y las toallas sueltan más pelusa que casi cualquier otra cosa.",
          "El personal de limpieza saca la pelusa del filtro, y eso ayuda, pero el filtro no atrapa todo. Lo demás se va al ducto, y en una casa con mucho movimiento el ducto puede estar bastante tapado en tres o cuatro meses. Para esas casas recomendamos limpiar cada tres o cuatro meses.",
        ],
      },
      {
        heading: "Buenaventura Lakes, Kissimmee Bay y las casas de familia",
        body: [
          "En Buenaventura Lakes y Kissimmee Bay la mayoría son casas de una planta de los ochenta y noventa, con la lavandería en el garaje o en un clóset y la ventila por la pared del costado. Para una familia, una limpieza al año suele bastar.",
          "Trabajamos también sábados de 9am a 5pm y domingos de 10am a 4pm. La limpieza cuesta de $100 a $200 por ducto y la reparación o el cambio de $200 a $600. Si usted administra varias casas, le damos el precio antes de agendar.",
        ],
      },
    ],
    faq: [
      {
        question: "How often should the dryer vent in a vacation rental be cleaned?",
        answer:
          "Every three to four months if the home turns over weekly or more. Lightly booked homes can go six months. After the first visit, the before reading tells us how fast your run loads up.",
      },
      {
        question: "I manage several rental homes. Can you schedule them together?",
        answer:
          "Yes. We can set up a route with you, handle access through your lockbox or office, and send each owner the before and after readings for their own house.",
      },
      {
        question: "Our cleaners say the dryer takes forever. Is it the dryer or the vent?",
        answer:
          "In a rental with heavy towel loads, the vent is the first suspect. An airflow reading at the outside hood answers the question in a few minutes, before anyone pays for a dryer repair.",
      },
    ],
    faqEs: [
      {
        question: "¿Cada cuánto se limpia la ventila de una casa de alquiler vacacional?",
        answer:
          "Cada tres o cuatro meses si la casa cambia de huéspedes cada semana o más seguido. Si se alquila poco, cada seis meses. Después de la primera visita, la medida de antes nos dice qué tan rápido se llena su ducto.",
      },
      {
        question: "Administro varias casas. ¿Pueden hacerlas el mismo día?",
        answer:
          "Sí. Armamos la ruta con usted, coordinamos el acceso con su caja de llaves u oficina y le mandamos a cada dueño las medidas de su casa.",
      },
      {
        question: "El personal de limpieza dice que la secadora no seca. ¿Es la secadora o la ventila?",
        answer:
          "En una casa de alquiler con tantas toallas, lo primero que se revisa es la ventila. La medida de flujo de aire en la salida lo aclara en pocos minutos, antes de pagar la reparación de la secadora.",
      },
    ],
  },
  {
    slug: "orlando",
    name: "Orlando",
    county: "Orange County",
    region: "Central Florida",
    nearby: ["winter-park", "kissimmee"],
    neighborhoods: ["College Park", "Delaney Park", "Conway", "Baldwin Park", "Lake Nona", "Dr. Phillips"],
    intro:
      "Orlando's housing runs from the bungalows of College Park and Delaney Park and the mid century homes in Conway to newer planned neighbourhoods like Baldwin Park and Lake Nona, plus a very large stock of apartments. In the newer houses the laundry is usually upstairs, and the vent is out of sight from end to end.",
    introEs:
      "En Orlando hay de todo: casitas viejas en College Park y Delaney Park, casas de mediados de siglo en Conway, barrios planificados nuevos como Baldwin Park y Lake Nona, y una cantidad enorme de apartamentos. En las casas nuevas la lavandería suele estar arriba, y la ventila no se ve en ninguna parte.",
    common:
      "An upstairs laundry venting through the roof, choked so gradually that a load now takes two cycles and nobody suspects the vent because nothing looks wrong.",
    commonEs:
      "Una lavandería en el segundo piso con la ventila por el techo, que se fue tapando tan despacio que ahora cada carga necesita dos ciclos y nadie sospecha de la ventila porque no se ve nada raro.",
    depth: [
      {
        heading: "Why we measure instead of guessing",
        body: [
          "With an upstairs laundry the duct disappears into the wall, rises into the attic and leaves through a roof cap. You cannot see any of it, and neither can we without measuring. The only honest way to judge it is the air leaving the cap with the dryer running.",
          "So we read airflow at the termination before touching anything. Then the transition hose is pulled and checked, the rotary brush and compressed air go through the full run, from both ends where the roof allows, the cap is cleared and the damper freed. Then a second reading.",
          "If the number does not come up the way it should, something besides lint is wrong, usually a crushed section in the attic or a run too long for its bends. That second reading is how you know the job is actually finished.",
        ],
      },
      {
        heading: "Signs that point at the vent, not the dryer",
        body: [
          "A load that needs a second cycle. A dryer top that is hot to the touch. A laundry room that turns warm and humid during a load. A scorched smell when the dryer starts. Any one of those, and certainly two together, is worth an airflow reading before you book an appliance repair.",
          "The US Fire Administration puts home clothes dryer fires at about 2,900 a year nationally, causing roughly 5 deaths, 100 injuries and $35 million in property loss. Failure to clean is the leading cause.",
        ],
      },
      {
        heading: "Apartments and the older neighbourhoods",
        body: [
          "In apartment communities the vent belongs to the property, so requests go through management, and whole buildings are priced per unit. In College Park and Conway the laundry is usually in the garage or a utility room with a short wall run: easy to clean, and often skipped for years for that reason.",
          "Cleaning costs $100 to $200 per run. Repairing a crushed attic section or rerouting a run that is too long costs $200 to $600.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Por qué medimos en vez de adivinar",
        body: [
          "Con la lavandería arriba, el ducto se mete en la pared, sube al ático y sale por el techo. Nada de eso se ve. La única forma seria de saber cómo está es medir el aire que sale por la salida en el techo con la secadora prendida.",
          "Medimos antes de tocar nada. Después revisamos la manguera de atrás, pasamos el cepillo rotativo y el aire comprimido por todo el ducto, desde las dos puntas cuando el techo lo permite, limpiamos la salida y liberamos la aleta. Y medimos otra vez. Si el número no sube como debe, hay algo más que pelusa, casi siempre un tramo aplastado en el ático.",
        ],
      },
      {
        heading: "Señales de que el problema es la ventila",
        body: [
          "Una carga que necesita dos ciclos, la parte de arriba de la secadora muy caliente, el cuarto de lavado que se pone caliente y húmedo, un olor a quemado al arrancar. Con cualquiera de esas, vale la pena medir antes de llamar al técnico de la secadora.",
          "En los apartamentos la ventila es de la propiedad y se pide por la administración, y los edificios completos se cobran por unidad. En una casa, la limpieza cuesta de $100 a $200 por ducto y la reparación o el cambio de ruta de $200 a $600.",
        ],
      },
    ],
    faq: [
      {
        question: "What does the airflow reading actually tell me?",
        answer:
          "How freely exhaust is leaving your house compared with what a clear run of that layout should manage. The before reading shows how restricted the vent was. The after reading shows whether cleaning fixed it or whether there is a physical problem left to deal with.",
      },
      {
        question: "Our house in Lake Nona is new. Why would the vent need cleaning already?",
        answer:
          "Upstairs runs are long, and new homes sometimes have construction debris or a crushed section in the attic from the start. A busy household can also load a long run within a year or two.",
      },
      {
        question: "I rent an apartment and my dryer takes two cycles. What should I do?",
        answer:
          "Tell management in writing that the dryer is slow and ask for the vent to be checked. Clean the lint screen every load in the meantime, and do not leave the dryer running when you go out.",
      },
    ],
    faqEs: [
      {
        question: "¿Qué me dice la medida de flujo de aire?",
        answer:
          "Qué tan libre sale el aire de su casa comparado con lo que debería sacar un ducto limpio de ese recorrido. La medida de antes muestra qué tan tapada estaba la ventila, y la de después si la limpieza lo resolvió o si queda un problema físico.",
      },
      {
        question: "Mi casa en Lake Nona es nueva. ¿Por qué tendría que limpiar la ventila?",
        answer:
          "Los ductos que salen del segundo piso son largos, y en las casas nuevas a veces quedan escombros de la obra o un tramo aplastado en el ático. Además, una familia que lava mucho puede llenar un ducto largo en uno o dos años.",
      },
      {
        question: "Vivo en un apartamento y la secadora necesita dos ciclos. ¿Qué hago?",
        answer:
          "Avísele por escrito a la administración y pida que revisen la ventila. Mientras tanto, limpie el filtro de pelusa en cada carga y no deje la secadora prendida cuando salga.",
      },
    ],
  },
  {
    slug: "st-petersburg",
    name: "St. Petersburg",
    county: "Pinellas County",
    region: "Tampa Bay",
    nearby: ["tampa"],
    neighborhoods: ["Historic Kenwood", "Old Northeast", "Crescent Lake", "Snell Isle", "Shore Acres", "Pinellas Point"],
    intro:
      "St. Petersburg has 1920s bungalows in Historic Kenwood and the Old Northeast, mid century block homes across the west side, and low lying waterfront streets like Shore Acres and Snell Isle, where many houses flooded in the 2024 storms and are being repaired, rebuilt or raised.",
    introEs:
      "St. Petersburg tiene casitas de los años veinte en Historic Kenwood y Old Northeast, casas de bloque de mediados de siglo en el oeste, y calles bajas junto al agua como Shore Acres y Snell Isle, donde muchas casas se inundaron con las tormentas de 2024 y ahora se reparan, se reconstruyen o se elevan.",
    common:
      "A raised or rebuilt house where the laundry moved and the new vent route came out longer, with more bends, than anyone checked against the code.",
    commonEs:
      "Una casa elevada o reconstruida donde la lavandería cambió de lugar y la nueva ventila quedó más larga y con más codos de lo que nadie comparó con el código.",
    depth: [
      {
        heading: "Raised and rebuilt houses",
        body: [
          "When a flooded house in Shore Acres is lifted or rebuilt, the laundry often moves up a level or into a different room. The dryer duct then needs a whole new route, and the easiest route for a busy crew is not always the shortest.",
          "A run that drops through the floor, crosses under the raised house and climbs an outside wall can use up its allowance quickly: 35 feet to start, less 5 feet for each 90 degree bend, unless the dryer's instructions allow more. We check the finished route, measure airflow, and tell you plainly if it is over.",
          "New stairs, landings and decks also crowd the old hood positions. The termination has to stay at least 3 feet from any door or window into the house.",
        ],
      },
      {
        heading: "Bungalows in Kenwood and the Old Northeast",
        body: [
          "In the 1920s bungalows the laundry often lives in a back porch addition, a converted garage or a small rear room. The runs are short, but many still pass through the original wood frame wall behind a plastic hood that has gone brittle and cracked.",
          "A cracked hood lets rain into the wall cavity around the duct, and a broken damper lets humid bay air back in at night. Replacing the hood with a sound one with a working damper is a small job that protects old framing.",
        ],
      },
      {
        heading: "Salt air on the bay side",
        body: [
          "Snell Isle, Shore Acres and Pinellas Point sit right on the water and get salt on every exposed hinge. Dampers corrode and freeze in position, and metal hoods pit through.",
          "Cleaning costs $100 to $200 per run. Rerouting a rebuilt house's vent or replacing a failed hood costs $200 to $600, quoted before work begins.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Casas elevadas y reconstruidas",
        body: [
          "Cuando una casa inundada en Shore Acres se eleva o se reconstruye, la lavandería muchas veces sube un nivel o cambia de cuarto. El ducto de la secadora necesita una ruta nueva, y la más cómoda para el contratista no siempre es la más corta.",
          "Un ducto que baja por el piso, cruza por debajo de la casa elevada y sube por una pared exterior se come rápido lo que permite el código: 35 pies, menos 5 por cada codo de 90 grados, salvo que el manual de la secadora permita más. Revisamos la ruta, medimos el flujo de aire y le decimos con claridad si se pasa. Además, la salida tiene que quedar a por lo menos 3 pies de puertas y ventanas, y las escaleras nuevas a veces quedan encima.",
        ],
      },
      {
        heading: "Las casitas de Kenwood y la sal de la bahía",
        body: [
          "En las casitas de los años veinte la lavandería suele estar en un porche cerrado o un cuarto de atrás, con ductos cortos que salen por la pared de madera original detrás de una tapa plástica ya rajada. Por ahí entra la lluvia a la pared.",
          "Cerca del agua, en Snell Isle y Pinellas Point, la sal traba las aletas. La limpieza cuesta de $100 a $200 por ducto, y cambiar la ruta de una casa reconstruida o una salida dañada cuesta de $200 a $600.",
        ],
      },
    ],
    faq: [
      {
        question: "Our house was raised after the 2024 flooding. Should we have the dryer vent checked?",
        answer:
          "Yes, once you are moved back in and using the dryer. Raised and rebuilt houses are where we most often find runs that are too long for their bends or hoods that ended up too close to a new door. A before reading and a look at the route will tell you.",
      },
      {
        question: "The plastic hood on my bungalow is cracked. Is that urgent?",
        answer:
          "Not an emergency, but it should be replaced soon. Rain gets into the wall around the duct, and a damper that no longer closes lets humid air and insects in.",
      },
      {
        question: "Was my vent damaged if the house took on water?",
        answer:
          "Possibly. Duct that sat in flood water can hold silt and debris, and any foil hose should be replaced. We check the full run and tell you whether it can be cleaned or should be renewed.",
      },
    ],
    faqEs: [
      {
        question: "Elevaron nuestra casa después de las inundaciones de 2024. ¿Hay que revisar la ventila?",
        answer:
          "Sí, cuando ya estén viviendo ahí y usando la secadora. En las casas elevadas o reconstruidas es donde más encontramos ductos demasiado largos para sus codos o salidas que quedaron pegadas a una puerta nueva.",
      },
      {
        question: "La tapa plástica de la salida está rajada. ¿Es urgente?",
        answer:
          "No es una emergencia, pero conviene cambiarla pronto. Por la rajadura entra la lluvia a la pared, y una aleta que ya no cierra deja pasar humedad e insectos.",
      },
      {
        question: "Si la casa se inundó, ¿se dañó la ventila?",
        answer:
          "Puede ser. Un ducto que estuvo bajo agua puede guardar lodo y basura, y cualquier manguera de aluminio hay que cambiarla. Revisamos todo el ducto y le decimos si se puede limpiar o si hay que cambiarlo.",
      },
    ],
  },
  {
    slug: "tampa",
    name: "Tampa",
    county: "Hillsborough County",
    region: "Tampa Bay",
    nearby: ["st-petersburg"],
    neighborhoods: ["South Tampa", "Hyde Park", "Seminole Heights", "Channel District", "Westchase", "Carrollwood", "New Tampa"],
    intro:
      "Much of Tampa's newer housing is townhomes, apartments and infill homes in South Tampa, the Channel District and Seminole Heights, while Westchase, Carrollwood and New Tampa are suburbs built in the 1980s to the 2000s. In the newer units, a stacked washer and dryer squeezed into a closet is the norm.",
    introEs:
      "Gran parte de la vivienda nueva de Tampa son casas adosadas, apartamentos y casas nuevas entre las viejas en South Tampa, el Channel District y Seminole Heights, mientras que Westchase, Carrollwood y New Tampa son urbanizaciones de los ochenta a los dos mil. En lo nuevo, lo normal es una lavadora y secadora apiladas dentro de un clóset.",
    common:
      "A transition hose shoved into the wall cavity behind a stacked dryer so the closet door will close, where it folds flat and nobody can see it.",
    commonEs:
      "La manguera de la secadora metida a la fuerza dentro de la pared, detrás de una secadora apilada, para que cierre la puerta del clóset, donde se dobla y nadie la ve.",
    depth: [
      {
        heading: "The closet problem",
        body: [
          "A stacked washer and dryer in a laundry closet barely fits, and the flexible hose behind the dryer has nowhere to go. Installers push it back into the wall opening, where it folds and flattens, and the dryer is choked before the exhaust ever reaches the real duct.",
          "Code is specific about that hose. It has to be listed for the purpose under UL 2158A, no longer than 8 feet, and never concealed inside a wall or ceiling. The usual fix is a recessed dryer box set into the wall, which gives the hose room to connect without folding, with rigid metal duct beyond it.",
          "This is one of the few vent problems you can check yourself. With the dryer pulled out, the hose should be visible from the dryer to the wall, with no part of it disappearing into the cavity.",
        ],
      },
      {
        heading: "Westchase, Carrollwood and New Tampa",
        body: [
          "The suburbs to the north and west are mostly two storey houses where the builder put the laundry upstairs. Their vents go through the roof, and many of those caps have reached the age where plastic damper flaps crack and metal hinge pins rust.",
          "A cracked flap hangs open, and an open termination lets humid air, insects and the occasional bird into the duct. The cap is the cheapest part of the system to replace and the part most often ignored.",
        ],
      },
      {
        heading: "Apartments, management and price",
        body: [
          "In apartment communities and condo buildings the vent belongs to the property. We work with management, price per unit and quote the building, and residents can be told in advance which day their closet will be opened.",
          "For a house or townhome, cleaning costs $100 to $200 per run. Fitting a recessed dryer box, replacing a crushed section or renewing a roof cap costs $200 to $600.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "El problema del clóset",
        body: [
          "Una lavadora y secadora apiladas apenas caben en el clóset, y la manguera de atrás no tiene dónde ir. Muchos instaladores la empujan dentro del hueco de la pared, donde se dobla y se aplasta, y la secadora queda ahogada antes de que el aire llegue al ducto de verdad.",
          "El código es claro: esa manguera tiene que ser aprobada para ese uso según UL 2158A, de no más de 8 pies, y nunca escondida dentro de una pared o del techo. Lo normal es instalar una caja empotrada en la pared que le da espacio a la manguera para conectarse sin doblarse, con ducto de metal rígido después.",
          "Usted mismo lo puede revisar: con la secadora afuera, la manguera tiene que verse completa desde la secadora hasta la pared, sin que ninguna parte se pierda adentro.",
        ],
      },
      {
        heading: "Las casas de dos pisos y los apartamentos",
        body: [
          "En Westchase, Carrollwood y New Tampa la lavandería suele estar arriba y la ventila sale por el techo. Muchas de esas salidas ya tienen la aleta rajada o la bisagra oxidada, y una aleta abierta deja entrar humedad, insectos y hasta pájaros.",
          "En los apartamentos la ventila es de la propiedad, y cobramos por unidad con una cotización por edificio. En una casa, la limpieza cuesta de $100 a $200 por ducto, y una caja empotrada, un tramo nuevo o una salida nueva en el techo cuesta de $200 a $600.",
        ],
      },
    ],
    faq: [
      {
        question: "My stacked dryer is in a closet. How do I know if the hose is crushed?",
        answer:
          "Pull the unit forward if you can and look. The hose should run in a gentle curve from the dryer to the wall, fully visible. If it vanishes into the wall or is pressed flat against it, it needs fixing, usually with a recessed dryer box.",
      },
      {
        question: "Is the white vinyl hose behind my dryer acceptable?",
        answer:
          "No. The transition hose has to be a listed dryer transition duct, and plain vinyl is not. Replace it with a listed metal one no longer than 8 feet, kept out of the wall.",
      },
      {
        question: "How often should a Tampa townhome vent be cleaned?",
        answer:
          "Once a year for most households, and every six months if the dryer runs daily or the run goes up through the roof. The before reading on the first visit tells you which applies.",
      },
    ],
    faqEs: [
      {
        question: "Mi secadora apilada está en un clóset. ¿Cómo sé si la manguera está aplastada?",
        answer:
          "Si puede, saque la unidad hacia adelante y mire. La manguera tiene que hacer una curva suave desde la secadora hasta la pared, y verse completa. Si se pierde dentro de la pared o está pegada y aplastada, hay que arreglarla, casi siempre con una caja empotrada.",
      },
      {
        question: "¿Sirve la manguera blanca de vinil que tengo detrás de la secadora?",
        answer:
          "No. La manguera tiene que ser una de transición aprobada para secadoras, y la de vinil no lo es. Cámbiela por una de metal aprobada, de no más de 8 pies, que no entre en la pared.",
      },
      {
        question: "¿Cada cuánto se limpia la ventila en una casa adosada de Tampa?",
        answer:
          "Una vez al año para la mayoría, y cada seis meses si la secadora trabaja todos los días o si el ducto sale por el techo. La medida de la primera visita le dice cuál es su caso.",
      },
    ],
  },
];
