import type { CityContent } from '../cityTypes';

export const cityBatchA: CityContent[] = [
  {
    slug: "deerfield-beach",
    name: "Deerfield Beach",
    county: "Broward County",
    region: "Broward County",
    nearby: ["pompano-beach", "boca-raton", "coconut-creek"],
    neighborhoods: ["The Cove", "Century Village", "Deer Creek", "Crystal Lake", "Independence Bay"],
    intro:
      "Deerfield Beach splits into two kinds of dryer vent: short wall exits on single storey houses, and long interior runs in the condo buildings, where the dryer sits in a closet far from any outside wall. They clog for different reasons and need different handling.",
    introEs:
      "En Deerfield Beach hay dos tipos de ventila de la secadora: las salidas cortas por la pared en casas de un piso, y los ductos largos por dentro de los edificios de condominio, donde la secadora queda en un clóset lejos de cualquier pared exterior. Se tapan por razones distintas y se trabajan de forma distinta.",
    common:
      "In the condo buildings the most common find is a run that has never been cleaned past the first few feet, because the outside end is on a wall three floors up that the owner cannot reach.",
    commonEs:
      "En los edificios de condominio lo que más encontramos es un ducto que nunca se limpió más allá de los primeros pies, porque la salida está en una pared tres pisos arriba y el dueño no tiene cómo llegar.",
    depth: [
      {
        heading: "Closets in the middle of the building",
        body: [
          "Century Village and the older condo blocks west of the interstate were designed around shared laundry rooms. Many owners later put a stacked washer and dryer in a hall closet, and the vent from that closet had to travel across a ceiling to reach the exterior. Those runs are often longer than they look and carry more turns than the original builder ever planned for.",
          "We measure airflow at the exterior hood first, from a lift or a ladder on the building side, then work the brush from the closet end. If the run turns out to be over the code length, which is 35 feet less 2.5 feet for every 45 degree bend and 5 feet for every 90, we tell the owner and the association what it would take to shorten it.",
        ],
      },
      {
        heading: "East of the Intracoastal",
        body: [
          "On the barrier island and in The Cove, the problem is salt rather than distance. Thin aluminum hoods pit and the damper flap seizes half open, so humid air drifts back into the duct when the dryer is off and lint mats against the damp wall of the pipe.",
          "We free or replace the damper and, where the hood is failing, fit a heavier one with a backdraft flap and no screen. Screens catch lint and are not allowed on a dryer termination.",
        ],
      },
      {
        heading: "Garage laundry in Deer Creek and Crystal Lake",
        body: [
          "The single family homes in these neighbourhoods mostly keep the laundry in the garage or a utility room beside it, with a short run straight out a side wall. Short runs are forgiving, but the hood often sits behind a hedge, and a foot of ixora pressed against the flap does the same job as a clog.",
          "Cleaning runs $100 to $200 here, and most garage runs take well under an hour, including the before and after airflow readings.",
        ],
      },
      {
        heading: "Booking dryer vent cleaning inside Century Village",
        body: [
          "Century Village in Deerfield Beach is a large 55 and over condo community, and its buildings run on association rules. Contractors usually have to be cleared with security in advance, work is kept to set hours, and the outside wall belongs to the association rather than to the unit owner. When you book we ask for the building, the floor and the unit number, so the gate pass and the ladder or lift plan are settled before we arrive.",
          "Who looks after the dryer duct is set by each building's condo documents, not by us. In many buildings the run from the dryer to the wall is the owner's to maintain, while the hood on the outside wall is common element. If the hood needs replacing, we give you the part details and the airflow readings to take to the board, and your own section is cleaned the same day.",
          "Owners who spend the summer up north often ask us to come the week they arrive. That timing works well: the dryer has sat unused, wasps and lizards have had months at the hood, and the first big load of towels shows straight away whether the vent can breathe. Dryer vent cleaning in a Century Village unit costs $100 to $200.",
        ],
      },
      {
        heading: "Dryer duct repair inside a closet ceiling",
        body: [
          "The closet conversions in Deerfield's older condos hide most of the dryer duct above a dropped ceiling or inside a drywall box built along the hallway. When the hidden part turns out to be foil or vinyl hose, cleaning only buys a few months. The hose sags between its supports, each sag holds lint, and a long run across a ceiling can have three or four of them.",
          "The lasting repair is to open the box, take the soft hose out and run 4 inch rigid metal duct with sealed joints and no screws into the airstream, then close it with an access panel near the bends so the next cleaning is easier. That kind of dryer duct repair runs $200 to $600 depending on the length and how much ceiling has to come down, and you get the figure before anything is cut.",
          "In the houses around Deer Creek and Crystal Lake, where the dryer sits in the garage a few feet from the wall, repair is simpler: usually a new listed transition hose, a sealed sleeve through the wall and a new hood, all in one visit.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Condominios con la secadora en el clóset",
        body: [
          "En Century Village y en los edificios más viejos, muchos dueños pusieron una lavadora y secadora apilable en un clóset del pasillo. Esa ventila cruza el techo del apartamento hasta salir por la pared del edificio, y casi siempre es más larga y tiene más codos de lo que uno se imagina.",
          "Medimos el flujo de aire en la salida exterior, desde escalera o plataforma, y después pasamos el cepillo rotativo desde el clóset. Si el ducto pasa del largo permitido por el código, se lo explicamos a usted y a la asociación con números.",
        ],
      },
      {
        heading: "Cerca del mar",
        body: [
          "En la isla y en The Cove el enemigo es la sal. La tapa de aluminio se corroe, la aleta se queda trabada a medio abrir y entra humedad al ducto, donde la pelusa se pega a la pared mojada.",
          "Cambiamos la tapa por una más resistente, con aleta antirretorno y sin malla, porque la malla atrapa pelusa y el código no la permite en la salida de una secadora.",
        ],
      },
      {
        heading: "Century Village: cómo se organiza la limpieza",
        body: [
          "Century Village es una comunidad grande de condominios para mayores de 55 años, y todo pasa por la asociación. Normalmente hay que avisar en la entrada quién viene y a qué hora, los trabajos tienen horario y la pared de afuera es área común. Cuando usted pide la cita le preguntamos el edificio, el piso y el número de la unidad, para tener listo el pase y saber si hace falta escalera o plataforma.",
          "Quién se encarga del ducto de secadora lo dicen los documentos del condominio. En muchos edificios el tramo desde la secadora hasta la pared le toca al dueño, y la tapa exterior a la asociación. Si hay que cambiar la tapa, le damos los datos de la pieza y las medidas de flujo de aire para que los presente a la junta, y su parte se limpia ese mismo día.",
          "Si usted pasa el verano fuera, lo ideal es limpiar la ventila de secadora la semana que regresa. Después de meses sin uso aparecen avispas, lagartijas y polvo en la salida, y la primera carga de toallas enseguida muestra si el aire sale o no. El precio de la limpieza en una unidad de Century Village es de $100 a $200.",
        ],
      },
      {
        heading: "Cuando el ducto va escondido en el techo del pasillo",
        body: [
          "En los condominios donde la secadora se puso después en un clóset, casi todo el ducto queda escondido sobre el techo falso o dentro de una caja de drywall a lo largo del pasillo. Si al limpiarlo vemos que esa parte es manguera de aluminio o de vinil, la limpieza dura poco: la manguera se cuelga, cada curva junta pelusa y en un tramo largo puede haber varias.",
          "La reparación de verdad es abrir la caja, sacar la manguera y poner ducto de metal rígido de 4 pulgadas con las uniones selladas, y dejar una tapa de registro cerca de los codos para que la próxima limpieza sea más fácil. Ese trabajo cuesta de $200 a $600 según el largo y cuánto techo haya que abrir, y el precio se lo damos antes de cortar.",
          "En las casas de Deer Creek y Crystal Lake, con la secadora en el garaje y unos pocos pies hasta la pared, la reparación es más sencilla: una manguera de transición nueva y aprobada, el paso por la pared bien sellado y una tapa nueva, todo en una sola visita.",
        ],
      },
    ],
    faq: [
      {
        question: "Can you clean several units in one Century Village building on the same day?",
        answer:
          "Yes. Buildings are priced per unit and quoted for the whole building, and doing them together means one lift setup on the exterior wall instead of several. The association usually sets the date and we work through the units in order.",
      },
      {
        question: "How often should a vent near the beach be cleaned?",
        answer:
          "Once a year for most households, and we check the damper at the same visit because salt is what usually stops it closing. A large family running the dryer every day may need it sooner.",
      },
      {
        question: "My dryer is in the garage. Does that make it safer?",
        answer:
          "It makes the run shorter, which helps, but the lint trap still lets lint through and it still collects in the hose and at the hood. A garage fire also spreads to the house quickly, so the same yearly cleaning applies.",
      },
    ],
    faqEs: [
      {
        question: "¿Pueden limpiar varios apartamentos del mismo edificio en un día?",
        answer:
          "Sí. Cobramos por unidad y cotizamos el edificio completo. Trabajar todo el edificio el mismo día ahorra montar la escalera o plataforma varias veces, y la asociación normalmente escoge la fecha.",
      },
      {
        question: "¿Cada cuánto se limpia una ventila cerca de la playa?",
        answer:
          "Una vez al año en la mayoría de las casas. En la misma visita revisamos la aleta, porque la sal es lo que más la traba. Si usted seca ropa todos los días, conviene antes.",
      },
      {
        question: "¿Cuánto cuesta en Deerfield Beach?",
        answer:
          "La limpieza cuesta de $100 a $200. Una reparación o un ducto nuevo cuesta de $200 a $600, y si hay que abrir una pared o sacar un nido grande se lo cotizamos antes de empezar.",
      },
    ],
  },
  {
    slug: "hollywood",
    name: "Hollywood",
    county: "Broward County",
    region: "Broward County",
    nearby: ["fort-lauderdale", "miramar", "pembroke-pines", "miami-gardens"],
    neighborhoods: ["Hollywood Lakes", "Emerald Hills", "Hollywood Hills", "Driftwood", "Hollywood Beach", "Boulevard Heights"],
    intro:
      "Hollywood has houses from almost every decade of South Florida building, and the dryer vent tends to tell you which decade. The older the house, the more likely the laundry was moved at some point and the vent was rebuilt by whoever moved it.",
    introEs:
      "Hollywood tiene casas de casi todas las épocas del sur de la Florida, y la ventila de la secadora suele delatar la edad de la casa. Mientras más vieja, más probable es que la lavandería se haya mudado y que la ventila la haya armado quien hizo la mudanza.",
    common:
      "The failure we see most in Hollywood is a relocated laundry whose vent was extended with foil or vinyl hose through the attic instead of rigid metal.",
    commonEs:
      "Lo que más vemos en Hollywood es una lavandería que se cambió de lugar y una ventila alargada con manguera de aluminio o de plástico por el ático, en vez de ducto metálico rígido.",
    depth: [
      {
        heading: "When the laundry came inside",
        body: [
          "Plenty of the older homes in Hollywood Lakes and Boulevard Heights started with the washer on a back porch or in a carport. Over the decades the porch was enclosed or the laundry was moved into a hall, and the new vent went up through the ceiling and across the attic to wherever it could get out.",
          "That route is where trouble sits. Flexible hose sags between the joists, lint settles in each low spot, and attic heat dries it to a felt. A dryer that has slowly gone from one cycle to two is often telling you about one of those sags.",
        ],
      },
      {
        heading: "Checking the run against the length rule",
        body: [
          "The Florida Building Code limits a dryer exhaust run to 35 feet, reduced by 2.5 feet for each 45 degree bend and 5 feet for each 90 degree bend, unless the dryer maker allows more. A run with three elbows is already down to 20 feet of straight duct.",
          "When we find a long attic run, we measure it and compare it with the dryer manual. If it is over, the fix is usually a shorter route through a nearer wall, built in rigid 4 inch metal with taped joints. Repairs and reroutes fall in the $200 to $600 range.",
        ],
      },
      {
        heading: "Condo towers along the Broadwalk",
        body: [
          "Hollywood Beach is mostly condominiums, and the vent from an in unit dryer runs through a dropped ceiling to the balcony wall or into a building shaft. We clean the unit section and the hood we can reach, and tell you if the building shaft needs attention from the association.",
          "Salt is constant there. We check that the damper closes every time, because a flap stuck open lets wet ocean air sit in the duct all night.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Lavanderías que se mudaron",
        body: [
          "En Hollywood Lakes y en las casas más viejas, la lavadora antes estaba en el portal de atrás o en el carport. Cuando se cerró el portal o se pasó la lavandería para adentro, la ventila nueva subió al ático y cruzó hasta donde pudo salir.",
          "Si se usó manguera de aluminio, se cuelga entre las vigas y la pelusa se acumula en cada barriga. Con el calor del ático se seca y se compacta. Si su secadora ahora necesita dos ciclos para secar, muchas veces el problema está ahí arriba.",
        ],
      },
      {
        heading: "El largo máximo",
        body: [
          "El código permite hasta 35 pies de ducto, menos 2.5 pies por cada codo de 45 grados y 5 pies por cada codo de 90, salvo que el fabricante de la secadora permita más. Medimos su ventila y le decimos si cumple.",
          "Si no cumple, buscamos una salida más cerca con ducto rígido de 4 pulgadas y uniones selladas con cinta de aluminio. Las reparaciones cuestan de $200 a $600 y la limpieza de $100 a $200.",
        ],
      },
    ],
    faq: [
      {
        question: "The previous owner moved my laundry. How do I know if the vent is safe?",
        answer:
          "We trace it from the dryer to the exterior, measure airflow at the hood, and look at what material it is made of and how long it runs. You get a plain answer: clean it, fix a section, or reroute it.",
      },
      {
        question: "Do you work in the condo buildings on Hollywood Beach?",
        answer:
          "Yes. We need access to the unit and to the exterior hood, which may mean the balcony or arranging roof access with the building manager. For a whole building we quote per unit.",
      },
      {
        question: "Is the white vinyl hose behind my dryer a problem?",
        answer:
          "Yes. Vinyl and thin foil hose are not listed for dryer use. The connector behind the dryer must be a listed transition duct no longer than 8 feet and never run inside a wall or ceiling.",
      },
    ],
    faqEs: [
      {
        question: "El dueño anterior cambió la lavandería de lugar. ¿Cómo sé si la ventila está bien?",
        answer:
          "La seguimos desde la secadora hasta la salida, medimos el flujo de aire y revisamos el material y el largo. Le decimos claro si basta con limpiar, si hay que cambiar un tramo o si conviene otra ruta.",
      },
      {
        question: "¿Trabajan en los condominios de Hollywood Beach?",
        answer:
          "Sí. Necesitamos entrar al apartamento y llegar a la salida, que puede estar en el balcón o en el techo, y eso se coordina con la administración del edificio.",
      },
      {
        question: "¿La manguera blanca de plástico detrás de la secadora sirve?",
        answer:
          "No. La manguera de plástico no está aprobada para secadoras. La conexión debe ser una manguera de transición aprobada, de no más de 8 pies, y nunca puede ir escondida dentro de una pared o del techo.",
      },
    ],
  },
  {
    slug: "sunrise",
    name: "Sunrise",
    county: "Broward County",
    region: "Broward County",
    nearby: ["plantation", "weston", "davie"],
    neighborhoods: ["Sunrise Lakes", "Welleby", "Springtree", "Sunrise Golf Village", "Sawgrass"],
    intro:
      "Sunrise mixes large garden style condo communities with single family streets from the seventies and eighties. In the condos the dryer was often an afterthought added to a unit built without one, and the vent shows it.",
    introEs:
      "Sunrise combina comunidades grandes de condominios de pocos pisos con calles de casas de los años setenta y ochenta. En los condominios la secadora muchas veces se añadió después a un apartamento que no la tenía, y la ventila lo demuestra.",
    common:
      "In Sunrise the most frequent find is a stackable dryer in a converted closet venting through a wall cap whose damper has been painted shut by the building's last exterior repaint.",
    commonEs:
      "En Sunrise lo que más encontramos es una secadora apilable en un clóset adaptado, con la tapa exterior pintada y la aleta pegada desde la última vez que pintaron el edificio.",
    depth: [
      {
        heading: "Stackables in units that were not built for them",
        body: [
          "Many of the older garden style condos in Sunrise were planned around a shared laundry room. Owners who later added their own stackable machine had to get the exhaust out somehow, and the result varies from a neat short run through the back wall to a hose snaked across a closet ceiling.",
          "Before touching anything we check what the association allows, because exterior wall openings are common property. Then we clean the run from inside, open the cap outside, and take an airflow reading at both stages so the owner can see the difference.",
        ],
      },
      {
        heading: "Paint, pressure washing and the wall cap",
        body: [
          "Condo exteriors get repainted on a cycle, and painters rarely tape over dryer caps. A coat of elastomeric paint across the hinge of the flap glues it shut or holds it open. Pressure washing then pushes water straight into the duct.",
          "Either way the dryer loses its way out. We free or replace the cap with one that has a working backdraft damper and no screen, which is what the code calls for.",
        ],
      },
      {
        heading: "Houses in Welleby and Springtree",
        body: [
          "The single family homes are simpler. Laundry is usually in the garage or a utility room on an outside wall, and the vent is short. What we find is lint packed in the last foot of the hood, a crushed transition hose behind the dryer, and sometimes a dryer pushed so far back that the hose has kinked flat.",
          "Cleaning is $100 to $200. Replacing a crushed transition hose with a listed one is part of the visit when we find it.",
        ],
      },
      {
        heading: "Apartment dryer vent cleaning in Sunrise",
        body: [
          "Sunrise has a large stock of rental apartment communities along Oakland Park Boulevard, Sunrise Boulevard, Pine Island Road and out near Sawgrass Mills, many of them two to four storey garden buildings with a washer and dryer in each unit. Every dryer has its own duct to the outside wall, and on the top floor some go up through the roof instead.",
          "In an apartment, the lint screen is the tenant's and the duct is the property's. Residents on the upper floors often have the longest runs and the hardest hoods to reach, and where the hoods sit over breezeways or stairwells, lint gathers on the walls below them where everyone can see it.",
          "For property managers we clean a building or a whole community per unit, coordinate entry notices with the office, and leave a sheet of airflow readings by unit number so maintenance knows which ones need repair. A resident who wants their own unit done can book it too, at $100 to $200, and get the readings to pass to the office.",
        ],
      },
      {
        heading: "Residential dryer vent cleaning in Sunrise houses",
        body: [
          "The single family side of Sunrise comes in two eras. The older neighbourhoods such as Sunrise Golf Village, Welleby and Springtree date from the 1960s to the 1980s and are mostly single storey with a short wall vent. The subdivisions built in the 1990s and 2000s nearer the Sawgrass Expressway are more often two storey, with the laundry upstairs and the duct running through the attic to a roof cap.",
          "The upstairs runs are where residential cleaning matters most. A two storey run climbs, has more bends, and ends at a cap on a roof the owner will never go up on, and a household with children can load that kind of duct in a year. The single storey wall vents rarely need more than a cleaning and a damper check.",
          "Either way the visit follows the same order: airflow measured at the hood or cap, the duct brushed and blown out from the laundry end and the outside end, the hood or cap cleared, and a second reading. Residential dryer vent cleaning in Sunrise costs $100 to $200 per run. If the roof cap is cracked or screened, replacing it is $200 to $600, and you hear that before any work starts.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Apilables en apartamentos sin lavandería",
        body: [
          "Muchos condominios viejos de Sunrise se hicieron con lavandería compartida. Los dueños que después pusieron su propia lavadora y secadora tuvieron que sacar el aire caliente como pudieron, a veces bien y a veces con una manguera larga por encima del clóset.",
          "Antes de cambiar nada verificamos qué permite la asociación, porque la pared exterior es área común. Después limpiamos desde adentro, abrimos la tapa de afuera y medimos el flujo antes y después.",
        ],
      },
      {
        heading: "Pintura y lavado a presión",
        body: [
          "Cuando pintan el edificio casi nunca tapan las salidas de las secadoras. La pintura pega la aleta, cerrada o abierta, y el lavado a presión mete agua al ducto.",
          "Cambiamos o liberamos la tapa y dejamos una con aleta antirretorno y sin malla. La limpieza cuesta de $100 a $200.",
        ],
      },
      {
        heading: "Casas en Welleby y Springtree",
        body: [
          "En las casas de una familia la lavandería suele estar en el garaje o en un cuarto de servicio con pared exterior, y la ventila es corta. Lo que encontramos es pelusa apretada en el último pie de la salida y la manguera de transición aplastada detrás de la secadora.",
          "Si la manguera está aplastada o es de plástico, la cambiamos por una aprobada en la misma visita. Antes y después medimos el flujo de aire para que usted vea la diferencia.",
        ],
      },
      {
        heading: "Ventilas de secadora en apartamentos de Sunrise",
        body: [
          "Sunrise tiene muchísimas comunidades de apartamentos de alquiler, por Oakland Park Boulevard, Sunrise Boulevard, Pine Island Road y cerca de Sawgrass Mills, muchas con edificios de dos a cuatro pisos y lavadora y secadora en cada unidad. Cada secadora tiene su propio ducto hasta la pared exterior, y en el último piso algunos salen por el techo.",
          "En un apartamento, el filtro de pelusa le toca al inquilino y el ducto de secadora a la propiedad. Los de los pisos altos suelen tener los ductos más largos y las salidas más difíciles de alcanzar, y cuando las salidas dan a un pasillo abierto o a una escalera, la pelusa se pega a la pared de abajo, a la vista de todos.",
          "Para los administradores limpiamos un edificio o la comunidad completa, con precio por unidad, coordinando los avisos de entrada con la oficina, y dejamos una hoja con la medida de flujo de aire de cada apartamento. Si usted vive ahí y quiere limpiar solo el suyo, también puede pedir la cita, con un precio de $100 a $200.",
        ],
      },
      {
        heading: "Casas en Sunrise: una planta o dos",
        body: [
          "Las casas de Sunrise son de dos épocas. Los barrios viejos, como Sunrise Golf Village, Welleby y Springtree, son de los sesenta a los ochenta, casi todos de una planta y con una ventila corta por la pared. Las urbanizaciones de los noventa y los dos mil, más cerca del Sawgrass Expressway, son más a menudo de dos pisos, con la lavandería arriba y el ducto cruzando el ático hasta el techo.",
          "En las de dos pisos es donde más importa la limpieza. El ducto sube, tiene más codos y termina en un techo al que el dueño nunca se va a subir, y en una casa con niños se puede llenar en un año. En las de una planta casi siempre basta con limpiar y revisar la aleta.",
          "Si busca limpieza de ventila de secadora cerca de usted en Sunrise, la visita sigue siempre el mismo orden: medimos el flujo de aire afuera, limpiamos el ducto desde adentro y desde afuera, despejamos la salida y volvemos a medir. El precio es de $100 a $200 por ducto, y cambiar una tapa de techo rota o con malla cuesta de $200 a $600.",
        ],
      },
    ],
    faq: [
      {
        question: "Our building was just repainted and my dryer runs longer. Is that related?",
        answer:
          "Quite possibly. Paint across the damper hinge can hold the flap shut. We check the cap from outside, free it or replace it, and measure airflow to confirm the dryer can breathe again.",
      },
      {
        question: "Does the association have to approve the work?",
        answer:
          "Cleaning inside your own run usually does not need approval. Changing the exterior cap or making a new wall opening often does, so we tell you before we do anything to common property.",
      },
      {
        question: "How long does a single family cleaning take?",
        answer:
          "A short garage or utility room run is typically under an hour, including the before and after airflow readings and a check of the transition hose.",
      },
    ],
    faqEs: [
      {
        question: "Pintaron el edificio y ahora la secadora se demora más. ¿Tiene que ver?",
        answer:
          "Es muy posible. Si la pintura pegó la aleta, el aire no sale. Revisamos la tapa desde afuera, la liberamos o la cambiamos y medimos el flujo para confirmar.",
      },
      {
        question: "¿Necesito permiso de la asociación?",
        answer:
          "Para limpiar su propio ducto normalmente no. Para cambiar la tapa exterior o abrir un hueco nuevo en la pared casi siempre sí, y se lo avisamos antes de tocar áreas comunes.",
      },
      {
        question: "¿Trabajan los fines de semana?",
        answer:
          "Sí. Sábados de 9am a 5pm y domingos de 10am a 4pm. De lunes a viernes, de 8am a 7pm. Normalmente hay cita la misma semana.",
      },
    ],
  },
  {
    slug: "coral-springs",
    name: "Coral Springs",
    county: "Broward County",
    region: "Broward County",
    nearby: ["coconut-creek", "sunrise", "plantation"],
    neighborhoods: ["Ramblewood", "Westchester", "Maplewood", "Eagle Trace", "Turtle Run"],
    intro:
      "Coral Springs was laid out as a planned city, so the same handful of floor plans repeat across whole neighbourhoods. Once we have cleaned one house on a street, we usually know where the vent goes in the house next door.",
    introEs:
      "Coral Springs se construyó como ciudad planificada, y los mismos modelos de casa se repiten por barrios enteros. Cuando limpiamos una casa en una calle, ya sabemos por dónde va la ventila en la casa de al lado.",
    common:
      "The failure we find most in Coral Springs is a second floor laundry venting through the roof, with the roof cap packed with lint because nobody has been up there since the house was built.",
    commonEs:
      "Lo más común en Coral Springs es una lavandería en el segundo piso con salida en el techo, y la salida llena de pelusa porque nadie ha subido desde que se construyó la casa.",
    depth: [
      {
        heading: "Floor plans that repeat",
        body: [
          "In the older sections, Ramblewood, Westchester and Maplewood, most houses are single storey with the laundry off the garage and a short run out a side wall. Those vents are easy to reach and easy to keep clear.",
          "The later communities brought more two storey plans, and with them the laundry room moved upstairs near the bedrooms. That is convenient for the household and harder on the vent, which now has to climb into the attic and exit through the roof.",
        ],
      },
      {
        heading: "Upstairs laundry and the roof cap",
        body: [
          "A roof cap sits flat to the sky. Lint that leaves the duct slowly, because airflow has already dropped, settles in the cap instead of blowing clear, and the cap fills from the outside in. Birds find the warm opening in spring.",
          "We go up, open the cap, clear it, and run the brush down through the attic section. Where the cap is the old louvered type that traps lint, we replace it with a proper dryer cap with a damper and no screen.",
        ],
      },
      {
        heading: "Households that run the dryer every day",
        body: [
          "Coral Springs is a family town, and a house with three kids in sports can run eight or ten loads a week. Lint builds in proportion. For those homes we suggest cleaning every year without waiting for symptoms.",
          "The US Fire Administration puts failure to clean as the leading cause of home dryer fires, about a third of the roughly 2,900 each year. Cleaning costs $100 to $200, and a two storey roof run takes a little longer than a garage wall run.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Lavandería arriba, salida en el techo",
        body: [
          "En las casas de dos pisos de Coral Springs la lavandería suele estar arriba, cerca de los cuartos. La ventila sube al ático y sale por el techo, y la salida en el techo se llena de pelusa porque el aire ya no tiene fuerza para empujarla.",
          "Subimos al techo, abrimos la salida, la limpiamos y pasamos el cepillo por el tramo del ático. Si la tapa es de rejillas, la cambiamos por una de secadora con aleta y sin malla.",
        ],
      },
      {
        heading: "Casas de un piso",
        body: [
          "En Ramblewood, Westchester y Maplewood casi todas las casas son de un piso, con la lavandería junto al garaje y una salida corta por la pared. Son ventilas fáciles de mantener, pero igual se limpian una vez al año.",
          "La limpieza cuesta de $100 a $200. Si la familia es grande y seca ropa todos los días, no espere a que aparezcan síntomas.",
        ],
      },
      {
        heading: "Señales de que la ventila está tapada",
        body: [
          "La ropa sale húmeda después de un ciclo completo, la secadora se siente muy caliente por fuera o el cuarto de lavar huele a quemado. En una casa de dos pisos, otra señal es no sentir aire en la salida del techo con la secadora prendida.",
          "Según la Administración de Incendios de Estados Unidos, la falta de limpieza es la causa principal de los incendios de secadoras en casas, cerca de un tercio de ellos.",
        ],
      },
    ],
    faq: [
      {
        question: "My laundry is upstairs. Do you have to go on the roof?",
        answer:
          "Usually yes, because the roof cap is where most of the lint collects. We clean from both ends where possible, so the attic run gets brushed from the laundry side and the cap gets cleared from above.",
      },
      {
        question: "My neighbour has the same model house. Will mine have the same problem?",
        answer:
          "Often, since the vent route is the same. The amount of lint depends on how much laundry each house runs, so we still measure airflow on yours before and after.",
      },
      {
        question: "There is a water stain on the ceiling under my laundry room. Could that be the vent?",
        answer:
          "It can be. A clogged roof run traps the dryer's moist air in the attic section, where it condenses and drips. We check the run and the joints when we clean.",
      },
    ],
    faqEs: [
      {
        question: "Mi lavandería está arriba. ¿Tienen que subir al techo?",
        answer:
          "Casi siempre, porque la pelusa se junta en la salida del techo. Limpiamos desde los dos lados cuando se puede: el ático desde la lavandería y la salida desde arriba.",
      },
      {
        question: "Hay una mancha de agua en el techo debajo de la lavandería. ¿Puede ser la ventila?",
        answer:
          "Puede ser. Si la salida está tapada, el aire húmedo de la secadora se queda en el ducto del ático, se condensa y gotea. Lo revisamos cuando limpiamos.",
      },
      {
        question: "¿Cada cuánto debo limpiarla?",
        answer:
          "Una vez al año para la mayoría de las familias. Si usted lava a diario o tiene niños en deportes, revise la ventila con más frecuencia.",
      },
    ],
  },
  {
    slug: "plantation",
    name: "Plantation",
    county: "Broward County",
    region: "Broward County",
    nearby: ["sunrise", "davie", "fort-lauderdale", "weston"],
    neighborhoods: ["Plantation Acres", "Jacaranda", "Plantation Isles", "Central Park", "Lauderdale West"],
    intro:
      "Plantation is a city of big trees and long driveways, and both show up at the dryer vent. Leaves, seed pods and the animals that live in the canopy end up at the outside hood, and on the larger lots the laundry can sit a long way from the nearest exterior wall.",
    introEs:
      "Plantation es una ciudad de árboles grandes y terrenos amplios, y las dos cosas se notan en la ventila de la secadora. Hojas, semillas y animales llegan a la tapa exterior, y en las casas grandes la lavandería puede quedar lejos de cualquier pared de afuera.",
    common:
      "The most common problem in Plantation is a wall or roof termination half blocked by leaf litter or nesting material rather than by lint alone.",
    commonEs:
      "Lo más común en Plantation es una salida medio tapada por hojas o por material de nido, no solo por pelusa.",
    depth: [
      {
        heading: "Under the canopy",
        body: [
          "Oaks, mahoganies and palms shade most of the older streets. Their leaves collect on low pitched roofs around a roof cap, and a hood near the ground on a side wall sits in a bed of mulch and fallen fronds. Each of those slows the exhaust a little.",
          "Squirrels and birds treat a warm vent as shelter. A flap that does not close fully is an invitation. We clear the termination, remove any nest, and fit a hood whose damper shuts on its own. A screen would keep animals out but also trap lint, which is why the code does not allow one.",
        ],
      },
      {
        heading: "Long runs in the Acres",
        body: [
          "Plantation Acres has large ranch style homes on lots measured in acres, and some have grown with additions. A laundry that started near the garage can end up in the middle of the house, with a vent that crosses the attic for thirty feet or more.",
          "We measure those runs and count the bends. The code allows 35 feet, less 2.5 feet per 45 degree bend and 5 feet per 90, unless the dryer maker permits more. Over that, the dryer struggles no matter how clean the duct is, and a shorter route is the real fix.",
        ],
      },
      {
        heading: "Condos and the over 55 communities",
        body: [
          "Lauderdale West and the condo buildings along the main roads have shorter runs but share walls and exterior openings with neighbours. We work through the association where the cap is common property.",
          "Cleaning is $100 to $200 for a typical home. Rerouting a long run in rigid metal is $200 to $600, and we quote it before starting.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Árboles, hojas y animales",
        body: [
          "En las calles más viejas de Plantation hay robles, caobas y palmas. Las hojas se acumulan alrededor de la salida en el techo y las pencas caen sobre la tapa de la pared. Las ardillas y los pájaros buscan el calor de la ventila, sobre todo si la aleta no cierra.",
          "Limpiamos la salida, sacamos cualquier nido y dejamos una tapa con aleta que cierre sola. No ponemos malla, porque atrapa la pelusa y el código no la permite.",
        ],
      },
      {
        heading: "Ductos largos en Plantation Acres",
        body: [
          "En las casas grandes de Plantation Acres, con ampliaciones de por medio, la lavandería puede quedar en el centro de la casa. Medimos el largo y contamos los codos para ver si cumple con el código.",
          "Si se pasa, la solución es una ruta más corta con ducto metálico rígido. Eso cuesta de $200 a $600. La limpieza normal cuesta de $100 a $200.",
        ],
      },
      {
        heading: "Condominios y comunidades para mayores",
        body: [
          "En Lauderdale West y en los condominios junto a las avenidas principales los ductos son más cortos, pero la tapa exterior casi siempre es área común. En esos casos coordinamos con la asociación antes de cambiar nada afuera.",
          "Si la junta quiere limpiar todo el edificio, cobramos por unidad y damos una sola cotización.",
        ],
      },
    ],
    faq: [
      {
        question: "Something is living in my dryer vent. Can you remove it?",
        answer:
          "Yes. We remove the nest material, clean the full run behind it, and replace the hood if the damper is broken. If an animal is still inside, we tell you before starting so it can be handled properly.",
      },
      {
        question: "Our house in Plantation Acres has had two additions. Is the vent too long?",
        answer:
          "It may be. We measure the developed length, count bends, and check the dryer manual. If it is over, we show you a shorter route and price it before any work.",
      },
      {
        question: "Should I trim the shrubs around the outside vent?",
        answer:
          "Keep at least a foot of clear space around the hood so the flap can swing and the air can leave. Mulch piled against a low hood also blocks it.",
      },
    ],
    faqEs: [
      {
        question: "Hay un animal en la ventila. ¿Lo pueden sacar?",
        answer:
          "Sacamos el nido, limpiamos todo el ducto y cambiamos la tapa si la aleta está rota. Si el animal sigue adentro, se lo decimos antes de empezar para manejarlo bien.",
      },
      {
        question: "¿Debo podar las plantas alrededor de la salida?",
        answer:
          "Sí. Deje por lo menos un pie libre alrededor de la tapa para que la aleta abra y el aire salga. El mulch amontonado contra una tapa baja también la tapa.",
      },
      {
        question: "¿Cómo sé si mi ventila es demasiado larga?",
        answer:
          "La medimos. El código permite 35 pies menos lo que restan los codos, salvo que el fabricante diga otra cosa. Si se pasa, le explicamos la opción más corta.",
      },
    ],
  },
  {
    slug: "miramar",
    name: "Miramar",
    county: "Broward County",
    region: "Broward County",
    nearby: ["hollywood", "pembroke-pines", "miami-gardens", "weston"],
    neighborhoods: ["Historic Miramar", "Riviera Isles", "Monarch Lakes", "Sunset Lakes"],
    intro:
      "Miramar is really two building periods side by side. The eastern part is small block houses with the dryer near an outside wall, and the western part is newer two storey homes and townhouses where the vent was installed by a production builder and has rarely been looked at since.",
    introEs:
      "Miramar son dos épocas de construcción una al lado de la otra. Al este hay casas pequeñas de bloque con la secadora cerca de una pared exterior, y al oeste casas de dos pisos y townhouses más nuevos, donde la ventila la instaló el constructor y casi nadie la ha revisado.",
    common:
      "In west Miramar the problem we find most often is a builder installation fault, usually screws driven through the duct joints, catching lint at every seam.",
    commonEs:
      "En el oeste de Miramar lo que más encontramos son fallas de instalación del constructor, sobre todo tornillos atravesando las uniones del ducto, que agarran pelusa en cada junta.",
    depth: [
      {
        heading: "The old east side and the newer west",
        body: [
          "In the older streets of Historic Miramar the houses are single storey concrete block, with the washer and dryer in a utility room or carport. The vent is short and exits low on a wall, so lint is easy to clear and the main risk is the hood itself: a cracked plastic cap, a flap missing, a wasp nest inside.",
          "On the west side, communities like Monarch Lakes and Sunset Lakes went up quickly, and many plans put the laundry upstairs or in the middle of the ground floor. Those vents are longer, run through the attic, and end at the roof.",
        ],
      },
      {
        heading: "What production builders leave behind",
        body: [
          "The Florida Building Code says duct joints must not be fastened with screws or anything else that pokes into the airstream. Screws are quick, so they show up in new construction anyway. Each one becomes a hook, and lint builds on it like a beaver dam.",
          "We also find transition hoses crushed when the dryer was first pushed into place, and joints held only by friction that have pulled apart in the attic, blowing lint straight into the insulation. Fixing a separated joint with foil tape and a proper sleeve is part of repair work, $200 to $600 depending on what needs replacing.",
        ],
      },
      {
        heading: "Townhouses with shared rooflines",
        body: [
          "In townhouse rows each unit has its own roof cap, but they sit close together and look alike. We confirm which cap belongs to which unit by measuring airflow with the dryer running before we clean anything, so we do not clear the neighbour's cap and miss yours.",
          "Most townhouse associations handle roof access through a manager. Cleaning itself is $100 to $200 per unit.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Casas nuevas con fallas de fábrica",
        body: [
          "En Monarch Lakes, Sunset Lakes y las comunidades del oeste, la ventila la puso el constructor. El código prohíbe tornillos en las uniones porque se meten en el ducto, pero igual los encontramos, y cada tornillo agarra pelusa.",
          "También vemos uniones sueltas en el ático que echan pelusa al aislamiento, y mangueras de transición aplastadas detrás de la secadora. Arreglamos con ducto rígido y cinta de aluminio. Una reparación cuesta de $200 a $600.",
        ],
      },
      {
        heading: "El Miramar original",
        body: [
          "En las calles viejas del este las casas son de bloque, de un piso, con la lavandería en un cuarto de servicio o en el carport. La ventila es corta y sale baja por la pared.",
          "Ahí el problema casi siempre es la tapa: rota, sin aleta o con un nido de avispas. La limpieza con revisión de la tapa cuesta de $100 a $200.",
        ],
      },
      {
        heading: "Townhouses",
        body: [
          "En las filas de townhouses las salidas del techo están juntas y se parecen. Prendemos la secadora y medimos el flujo para confirmar cuál es la suya antes de limpiar.",
        ],
      },
    ],
    faq: [
      {
        question: "My house is only a few years old. Does the vent really need cleaning already?",
        answer:
          "Often yes, especially if the builder used screws at the joints or a long run to the roof. New houses also start life with drywall dust in the duct. A first cleaning tells you how the run was built.",
      },
      {
        question: "Can you tell which roof cap is mine in a townhouse row?",
        answer:
          "Yes. We run your dryer and measure airflow at the caps until we find the one that responds, then clean that run from both ends.",
      },
      {
        question: "Are the screws in my duct a code problem?",
        answer:
          "The code says joints must not be fastened with screws or anything that protrudes into the duct. We replace the affected sections or joints and seal them with foil tape.",
      },
    ],
    faqEs: [
      {
        question: "Mi casa es nueva. ¿Ya hay que limpiar la ventila?",
        answer:
          "Muchas veces sí, sobre todo si tiene tornillos en las uniones o una ruta larga al techo. Las casas nuevas también traen polvo de la construcción dentro del ducto.",
      },
      {
        question: "¿Cómo saben cuál salida del techo es la mía?",
        answer:
          "Prendemos su secadora y medimos el aire en las salidas hasta encontrar la que responde. Después limpiamos ese ducto desde los dos extremos.",
      },
      {
        question: "¿Qué horario tienen?",
        answer:
          "Lunes a viernes de 8am a 7pm, sábados de 9am a 5pm y domingos de 10am a 4pm. No trabajamos 24 horas, pero casi siempre hay cita la misma semana.",
      },
    ],
  },
  {
    slug: "davie",
    name: "Davie",
    county: "Broward County",
    region: "Broward County",
    nearby: ["plantation", "weston", "hollywood", "fort-lauderdale"],
    neighborhoods: ["Forest Ridge", "Shenandoah", "Pine Island Ridge", "Rolling Hills", "Ivanhoe"],
    intro:
      "Davie still has horse trails, pasture and houses set back on large lots, along with planned subdivisions and student rentals near the college campuses. The vent problems follow the setting: wildlife and long runs out in the rural parts, heavy use in the rentals.",
    introEs:
      "Davie todavía tiene caminos para caballos, potreros y casas en terrenos grandes, además de urbanizaciones y alquileres para estudiantes cerca de las universidades. Los problemas de la ventila siguen ese patrón: animales y ductos largos en la parte rural, y mucho uso en los alquileres.",
    common:
      "The most common thing we pull out of vents in Davie is nesting material, from birds, rodents or wasps, packed into a wall hood whose flap broke off years ago.",
    commonEs:
      "Lo que más sacamos de las ventilas en Davie es material de nido, de pájaros, ratones o avispas, metido en una tapa de pared que perdió la aleta hace años.",
    depth: [
      {
        heading: "Rambling ranch houses",
        body: [
          "Many Davie homes are long single storey ranch houses that have been extended more than once. A laundry tucked behind the kitchen or added onto a back porch may vent across most of the attic, and the old route is sometimes still there, capped or not, next to the new one.",
          "We find the active run by measuring airflow at each termination with the dryer on, then clean that run and tell you what the abandoned one is doing. An open, unused vent in the attic is just a hole for animals.",
        ],
      },
      {
        heading: "Wildlife at the wall",
        body: [
          "Open land means more of everything that wants a warm, dry pocket. Sparrows and starlings build in roof caps, wasps build in wall hoods, and rodents will follow a broken flap straight into a flexible hose and chew it.",
          "The fix is a hood with a damper that shuts by gravity, kept clear so it can. Screens keep animals out but collect lint until they block, and the code does not permit them on a dryer termination. If a bird has nested, we clear the whole run, because nest material rarely stays at the opening.",
        ],
      },
      {
        heading: "Rentals near the campuses",
        body: [
          "Houses rented to students or shared by several adults run the dryer far more than a typical household, and nobody in particular owns the job of cleaning it. Landlords get calls about clothes that will not dry, which is often the first warning.",
          "For rental owners we can clean every year on a set month and report the airflow readings. Cleaning is $100 to $200 per dryer, and we quote multiple properties together.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Animales en la ventila",
        body: [
          "En Davie hay más terreno abierto y por eso más animales buscando un lugar seco y caliente. Los pájaros anidan en la salida del techo, las avispas en la tapa de la pared y los ratones entran por una aleta rota y muerden la manguera.",
          "Sacamos el nido, limpiamos todo el ducto, porque el material casi nunca se queda en la entrada, y dejamos una tapa con aleta que cierre sola y sin malla.",
        ],
      },
      {
        heading: "Casas largas con ampliaciones",
        body: [
          "Muchas casas de Davie son de un piso y se han ampliado varias veces. La lavandería puede quedar detrás de la cocina, con una ventila que cruza casi todo el ático, y a veces la ruta vieja sigue ahí al lado de la nueva.",
          "Medimos el flujo en cada salida con la secadora prendida para saber cuál es la que trabaja. Si hay que hacer una ruta más corta, cuesta de $200 a $600.",
        ],
      },
      {
        heading: "La salida vieja que nadie usa",
        body: [
          "Cuando una casa se amplió, a veces la ventila vieja sigue en la pared o en el techo, abierta y sin uso. Para los animales es una entrada directa al ático.",
          "Si la encontramos, le explicamos cómo sellarla bien, por fuera y por dentro. Es un trabajo pequeño y evita que vuelvan los nidos.",
        ],
      },
    ],
    faq: [
      {
        question: "Birds keep nesting in my roof vent. How do I stop it?",
        answer:
          "Make sure the cap is a real dryer cap with a damper that closes, not an open louvered vent, and keep the run clean so the damper shuts fully between loads. We clear the nest and replace the cap if it is the wrong type.",
      },
      {
        question: "I own a rental near the college. How often should the vent be cleaned?",
        answer:
          "With several adults sharing a dryer, once a year at minimum. We can set a fixed month each year and send you the before and after airflow figures.",
      },
      {
        question: "There are two vent openings on my house. Which one is the dryer?",
        answer:
          "We find out by running the dryer and measuring at each one. If the other is an abandoned dryer vent, we can seal it so animals do not use it.",
      },
    ],
    faqEs: [
      {
        question: "Los pájaros siguen anidando en la salida del techo. ¿Qué hago?",
        answer:
          "La salida debe ser una tapa de secadora con aleta que cierre, no una rejilla abierta. Limpiamos el nido y cambiamos la tapa si no es la correcta.",
      },
      {
        question: "Tengo una casa alquilada a estudiantes. ¿Cada cuánto se limpia?",
        answer:
          "Por lo menos una vez al año, porque la secadora se usa mucho más. Podemos fijar un mes al año y enviarle las lecturas de flujo de antes y después.",
      },
      {
        question: "¿Cuánto cuesta?",
        answer:
          "La limpieza cuesta de $100 a $200 por secadora. Si tiene varias propiedades, las cotizamos juntas.",
      },
    ],
  },
  {
    slug: "coconut-creek",
    name: "Coconut Creek",
    county: "Broward County",
    region: "Broward County",
    nearby: ["coral-springs", "deerfield-beach", "pompano-beach"],
    neighborhoods: ["Wynmoor", "Winston Park", "Regency Lakes"],
    intro:
      "A large share of Coconut Creek lives in condominiums, many of them in age restricted communities, and plenty of those owners spend the summer up north. A dryer vent that sits unused for five months behaves differently from one used every day.",
    introEs:
      "En Coconut Creek mucha gente vive en condominios, muchos de ellos para mayores de 55 años, y bastantes dueños pasan el verano en el norte. Una ventila de secadora que pasa cinco meses sin uso se comporta distinto a una que se usa a diario.",
    common:
      "The most common find in Coconut Creek is a vent that was fine in spring and blocked by autumn, because a bird or wasp moved into the quiet hood while the owner was away.",
    commonEs:
      "Lo más común en Coconut Creek es una ventila que estaba bien en primavera y tapada en otoño, porque un pájaro o unas avispas se metieron en la tapa mientras el dueño no estaba.",
    depth: [
      {
        heading: "The seasonal owner's vent",
        body: [
          "While a unit is closed for the summer, nothing pushes warm air through the dryer duct. A damper that does not close tightly becomes a doorway, and the hood is a dry, sheltered pocket in the rainy season. By the time the owner comes back, there can be a nest across the opening.",
          "The first load after a long absence is the one to watch. If clothes come out damp and the laundry room feels warm, stop and have the vent checked before running more loads. We clear the hood, check the damper and measure airflow so you know the run is open.",
        ],
      },
      {
        heading: "Working with an association",
        body: [
          "In Wynmoor and the other condo communities, the exterior wall and the hood usually belong to the association, while the duct inside the unit is the owner's. That split decides who can approve what.",
          "Many boards prefer to schedule a whole building at once, and that is how we price it: per unit, quoted per building. Doing every unit in a stack on the same day also tells the board which runs are long or damaged, so repairs can be planned instead of discovered.",
        ],
      },
      {
        heading: "Single family streets",
        body: [
          "The single family homes in Winston Park and the newer streets are typical of their era: laundry near the garage, a short wall run, or an upstairs laundry with a roof cap. They follow the usual once a year rule.",
          "Cleaning is $100 to $200 a dryer for a house, and condo units fall in the same range before any building quote.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Si usted pasa el verano fuera",
        body: [
          "Cuando el apartamento está cerrado, no sale aire caliente por la ventila. Si la aleta no cierra bien, los pájaros y las avispas encuentran un lugar seco y protegido en plena temporada de lluvia.",
          "Al regresar, fíjese en la primera tanda. Si la ropa sale húmeda y el cuarto se calienta, no siga secando. Revisamos la tapa, la aleta y el flujo de aire para confirmar que el ducto está abierto.",
        ],
      },
      {
        heading: "Con la asociación",
        body: [
          "En Wynmoor y en los demás condominios, la pared exterior y la tapa casi siempre son de la asociación, y el ducto dentro del apartamento es del dueño. Eso define quién aprueba qué.",
          "Muchas juntas prefieren hacer el edificio entero el mismo día. Cobramos por unidad y cotizamos por edificio. La limpieza de una casa o un apartamento cuesta de $100 a $200.",
        ],
      },
      {
        heading: "Casas de una familia",
        body: [
          "En Winston Park y en las calles más nuevas, la lavandería suele estar junto al garaje con una salida corta por la pared, o arriba con salida en el techo. Se limpian una vez al año, como en cualquier casa.",
          "Si su salida está en el techo, la pelusa se junta en la tapa y no se ve desde abajo. Medimos el flujo afuera para saber cómo está antes de limpiar.",
        ],
      },
    ],
    faq: [
      {
        question: "I am away every summer. When should I schedule the cleaning?",
        answer:
          "Soon after you return, before the heavy laundry of the season starts. That way anything that moved in while you were away is cleared before the dryer runs daily.",
      },
      {
        question: "Our board wants every unit done. How is that priced?",
        answer:
          "Per unit, with one quote for the building. We note the airflow for each unit and flag any run that needs repair, so the board has a list rather than surprises.",
      },
      {
        question: "Who is responsible for the outside vent cover in a condo?",
        answer:
          "Usually the association, since it is on the exterior wall, but documents differ. We tell you what we find and leave the decision about common property to the board.",
      },
    ],
    faqEs: [
      {
        question: "Paso el verano fuera. ¿Cuándo programo la limpieza?",
        answer:
          "Poco después de regresar, antes de empezar a lavar todos los días. Así se saca cualquier nido que apareció mientras usted no estaba.",
      },
      {
        question: "La junta quiere limpiar todas las unidades. ¿Cómo se cobra?",
        answer:
          "Por unidad, con una sola cotización para el edificio. Anotamos el flujo de cada apartamento y avisamos qué ductos necesitan reparación.",
      },
      {
        question: "¿Quién se encarga de la tapa exterior en un condominio?",
        answer:
          "Casi siempre la asociación, porque está en la pared de afuera, aunque depende de los documentos del condominio. Le informamos lo que encontramos y la decisión es de la junta.",
      },
    ],
  },
  {
    slug: "weston",
    name: "Weston",
    county: "Broward County",
    region: "Broward County",
    nearby: ["davie", "sunrise", "plantation", "pembroke-pines"],
    neighborhoods: ["Weston Hills", "Savanna", "The Ridges", "Indian Trace", "Bonaventure", "Windmill Ranch Estates"],
    intro:
      "Weston is almost entirely planned communities from the late eighties onward, with concrete tile roofs, strict associations and a lot of two storey homes. That combination puts many dryer vents on the roof, behind a gate, under rules about what the roof may look like.",
    introEs:
      "Weston es casi todo comunidades planificadas desde finales de los ochenta, con techos de teja de concreto, asociaciones estrictas y muchas casas de dos pisos. Por eso muchas ventilas salen por el techo, detrás de una garita y bajo reglas sobre cómo debe verse el techo.",
    common:
      "In Weston the most common failure is a roof cap clogged with lint on a tile roof, which owners avoid dealing with because walking tile is risky and the association controls replacement caps.",
    commonEs:
      "En Weston lo más común es una salida en el techo de teja llena de pelusa, que los dueños no atienden porque caminar sobre teja es riesgoso y la asociación controla el tipo de tapa.",
    depth: [
      {
        heading: "Working on concrete tile",
        body: [
          "Concrete tile breaks if you step in the wrong place. We walk the roof only where each tile is supported, and look over the tiles around the cap before starting so any old cracks are pointed out to you first. The cap itself is usually mounted on a tile flashing that has to stay sealed.",
          "Once at the cap, we open it, clear the lint, and brush down through the attic run. Then we run the dryer and take a second airflow reading at the cap to confirm the result.",
        ],
      },
      {
        heading: "Association rules for caps",
        body: [
          "Most Weston associations require exterior changes, including roof penetrations, to match an approved look. A replacement dryer cap usually needs to be the same color or style as the original.",
          "If the existing cap is the wrong type, a louvered vent that traps lint or one with a screen, we explain why it should change and give you what you need to ask the association. We do not swap caps on common elements without that approval.",
        ],
      },
      {
        heading: "Ceilings, moisture and long runs",
        body: [
          "Upstairs laundry rooms near the bedrooms are common here. When the roof run clogs, warm wet exhaust backs up in the attic section, condenses, and can leak at a loose joint. A brown ring on the ceiling of the laundry room or the hall below is a sign worth calling about.",
          "Cleaning is $100 to $200. Repairing a separated attic joint or replacing a damaged section with rigid metal is $200 to $600, quoted after we have seen it.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Techos de teja",
        body: [
          "La teja de concreto se parte si se pisa mal. Pisamos solo donde la teja tiene apoyo y revisamos las tejas alrededor de la salida antes de empezar. La salida en el techo va sobre una base sellada que debe quedar igual.",
          "Abrimos la salida, sacamos la pelusa y pasamos el cepillo hasta el ático. Después medimos el flujo con la secadora prendida para confirmar.",
        ],
      },
      {
        heading: "Las reglas de la asociación",
        body: [
          "Casi todas las asociaciones de Weston exigen que cualquier cambio en el techo tenga el color y estilo aprobados. Si su tapa es de rejillas o tiene malla, le explicamos por qué conviene cambiarla y qué debe pedir a la asociación.",
          "Una mancha de agua en el techo de la lavandería puede ser condensación de una ventila tapada. La limpieza cuesta de $100 a $200 y las reparaciones de $200 a $600.",
        ],
      },
      {
        heading: "Detrás de la garita",
        body: [
          "Casi todas las comunidades de Weston tienen entrada con garita. Al hacer la cita, avísenos si hay que dejar nuestro nombre en la entrada o si la asociación pide algún documento para trabajar en el techo.",
          "Estamos asegurados. Si la administración pide prueba del seguro antes de la visita, díganos con tiempo.",
        ],
      },
    ],
    faq: [
      {
        question: "Will you damage my tile roof getting to the vent?",
        answer:
          "We step only where the tile is supported and check the tiles around the cap before we start. Any tile that is already cracked is shown to you first.",
      },
      {
        question: "Does my association need to approve a new roof cap?",
        answer:
          "In most Weston communities, yes. We can tell you which cap we recommend and why, so you can submit it, and clean the existing one in the meantime.",
      },
      {
        question: "My upstairs laundry ceiling has a stain. Is it the dryer?",
        answer:
          "It can be. A clogged roof run traps moist exhaust in the attic where it condenses. We check the run and the joints when we clean and tell you if a section needs replacing.",
      },
    ],
    faqEs: [
      {
        question: "¿Me van a romper la teja?",
        answer:
          "Pisamos solo donde la teja tiene apoyo y revisamos las tejas alrededor de la salida antes de empezar. Si alguna ya está rota, se la mostramos primero.",
      },
      {
        question: "¿La asociación tiene que aprobar una tapa nueva?",
        answer:
          "En la mayoría de las comunidades de Weston, sí. Le decimos qué tapa recomendamos y por qué, y mientras tanto limpiamos la que tiene.",
      },
      {
        question: "¿Cada cuánto se limpia una ventila que sale por el techo?",
        answer:
          "Una vez al año. Las salidas en el techo se tapan más rápido que las de pared, porque la pelusa cae y se queda en la tapa.",
      },
    ],
  },
  {
    slug: "pompano-beach",
    name: "Pompano Beach",
    county: "Broward County",
    region: "Broward County",
    nearby: ["deerfield-beach", "fort-lauderdale", "coconut-creek"],
    neighborhoods: ["Old Pompano", "Palm Aire", "Cypress Bend", "Harbor Village", "Cresthaven", "Garden Isles"],
    intro:
      "Pompano Beach runs from oceanfront towers to canal homes to golf course condos inland, and nearly all of it sits close enough to salt water that the metal at the end of the dryer vent wears out faster than the duct behind it.",
    introEs:
      "Pompano Beach va desde edificios frente al mar hasta casas en canales y condominios junto a campos de golf, y casi todo está tan cerca del agua salada que la tapa de metal se gasta antes que el ducto.",
    common:
      "The failure we find most in Pompano Beach is a corroded exterior hood with a damper that no longer closes, letting damp air and pests into an otherwise sound duct.",
    commonEs:
      "Lo que más vemos en Pompano Beach es una tapa exterior corroída con la aleta que ya no cierra, que deja entrar humedad y bichos a un ducto que por lo demás está bien.",
    depth: [
      {
        heading: "Salt and the hood",
        body: [
          "Within a mile or two of the ocean or the Intracoastal, cheap aluminum and painted steel hoods pit and swell. The hinge of the damper is the first thing to go. Once the flap hangs open, the duct breathes ocean air all night and lint sticks to the damp inner wall.",
          "We replace failing hoods with a heavier cap that has a working backdraft damper and no screen, and keep the termination at least 3 feet from windows and doors as the code requires.",
        ],
      },
      {
        heading: "Palm Aire and the mid rise run",
        body: [
          "Palm Aire's condo buildings and the mid rises along the canals often put the dryer inside the unit with a horizontal run through a dropped ceiling to the balcony or corridor wall. Horizontal runs do not drain lint the way a vertical drop does, so it piles on the bottom of the pipe.",
          "We brush from the unit end, blow out from the exterior where we can reach it, and measure airflow before and after. Units in the same building are priced each and quoted together.",
        ],
      },
      {
        heading: "Canal homes in Harbor Village and Garden Isles",
        body: [
          "Waterfront single family homes face the same salt but also storms. After a named storm we look for hoods knocked loose, dampers jammed with debris, and caps pulled from the roof. A vent left open after a storm lets in rain as well as air.",
          "Cleaning is $100 to $200. A new hood or a replaced section is repair work in the $200 to $600 range.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "La sal y la tapa",
        body: [
          "Cerca del mar o del Intracoastal, las tapas baratas de aluminio se corroen pronto. Lo primero que falla es la bisagra de la aleta. Cuando la aleta queda abierta, entra aire húmedo toda la noche y la pelusa se pega al ducto.",
          "Cambiamos la tapa por una más fuerte, con aleta antirretorno y sin malla, y verificamos que quede por lo menos a 3 pies de ventanas y puertas, como pide el código.",
        ],
      },
      {
        heading: "Condominios en Palm Aire",
        body: [
          "En Palm Aire y en los edificios junto a los canales, la secadora está dentro del apartamento y el ducto va horizontal por el techo falso hasta el balcón. En un tramo horizontal la pelusa se asienta abajo.",
          "Cepillamos desde adentro, soplamos desde afuera cuando se puede y medimos antes y después. La limpieza cuesta de $100 a $200 y la reparación de $200 a $600.",
        ],
      },
      {
        heading: "Casas en los canales",
        body: [
          "En Harbor Village y Garden Isles las casas dan al agua y reciben la sal y el viento de las tormentas. Después de una tormenta revisamos si la tapa se aflojó, si la aleta tiene escombros o si la salida del techo se levantó.",
          "Una ventila que queda abierta después de una tormenta deja entrar lluvia además de aire, y la pelusa mojada se pega como cemento.",
        ],
      },
    ],
    faq: [
      {
        question: "My outside vent cover is rusted. Do I need a new one?",
        answer:
          "If the damper no longer swings shut on its own, yes. A hood that stays open lets humid air and animals in. Replacing it is a short job and part of a repair visit.",
      },
      {
        question: "Should I have the vent checked after a hurricane?",
        answer:
          "It is worth a look. Storms loosen hoods, jam dampers with debris and can lift roof caps. Check that the flap opens when the dryer runs and closes when it stops.",
      },
      {
        question: "Can you clean a condo vent on the 10th floor?",
        answer:
          "We clean the unit run from inside and the termination wherever it can be reached safely, from a balcony or with building access. If the vent joins a building shaft, we tell the association what we see.",
      },
    ],
    faqEs: [
      {
        question: "La tapa de afuera está oxidada. ¿Hay que cambiarla?",
        answer:
          "Si la aleta ya no cierra sola, sí. Una tapa abierta deja entrar humedad y animales. Cambiarla es un trabajo corto.",
      },
      {
        question: "¿Debo revisar la ventila después de un huracán?",
        answer:
          "Conviene. Las tormentas aflojan tapas, traban la aleta con escombros y pueden levantar la salida del techo. Fíjese que la aleta abra con la secadora prendida y cierre al apagarla.",
      },
      {
        question: "¿Limpian ventilas en pisos altos?",
        answer:
          "Sí. Limpiamos el ducto desde el apartamento y la salida donde se pueda llegar con seguridad, desde el balcón o con acceso del edificio.",
      },
    ],
  },
  {
    slug: "fort-lauderdale",
    name: "Fort Lauderdale",
    county: "Broward County",
    region: "Broward County",
    nearby: ["plantation", "hollywood", "pompano-beach"],
    neighborhoods: ["Victoria Park", "Coral Ridge", "Rio Vista", "Las Olas Isles", "Sailboat Bend", "Galt Ocean Mile"],
    intro:
      "Fort Lauderdale has old canal side cottages, renovated mid century homes and a skyline of condo towers, and each puts the dryer vent somewhere different. In a house we can usually reach both ends. In a tower, half the job is finding out where the exhaust actually goes.",
    introEs:
      "Fort Lauderdale tiene casitas viejas junto a los canales, casas de mediados de siglo renovadas y muchas torres de condominio, y en cada una la ventila de la secadora va por un lugar distinto. En una casa casi siempre llegamos a los dos extremos. En una torre, la mitad del trabajo es averiguar adónde va el aire.",
    common:
      "The failure we find most in Fort Lauderdale is a renovated house where the laundry was moved during the remodel and the new vent ran longer than the code allows.",
    commonEs:
      "Lo que más encontramos en Fort Lauderdale es una casa remodelada donde movieron la lavandería y la ventila nueva quedó más larga de lo que permite el código.",
    depth: [
      {
        heading: "Remodels and the long way out",
        body: [
          "In Victoria Park, Coral Ridge and Rio Vista, many small houses have been gutted and enlarged. Owners like the laundry near the bedrooms, so it moves to the middle of the plan, and the vent has to find a way out through an attic that may now be shared with new ductwork and recessed lights.",
          "We measure the developed length, counting 2.5 feet off the 35 foot allowance for every 45 degree bend and 5 feet for every 90, and compare it with the dryer manual. A remodel that went over can usually be corrected with a straighter route in rigid metal, which falls in the $200 to $600 repair range.",
        ],
      },
      {
        heading: "Towers with a shared exhaust",
        body: [
          "Along Galt Ocean Mile and downtown, an in unit dryer may exhaust to a balcony wall, into a vertical shaft shared by the stack, or through a long horizontal run in the corridor ceiling. The building engineer usually knows which. We clean the part that belongs to the unit and tell management if the shared part is restricting airflow.",
          "Associations that want every unit done get a per unit price and one building quote. Cleaning the whole stack at once is the only way to know the shared shaft is clear.",
        ],
      },
      {
        heading: "After the storm season",
        body: [
          "Waterfront homes on the Las Olas Isles and along the New River take the brunt of wind and spray. After a storm, check that the hood is still attached and the damper still swings. A missing flap lets rain into the duct, and wet lint sets like papier mache.",
          "Routine cleaning is $100 to $200 and includes freeing or checking the damper.",
        ],
      },
      {
        heading: "Imperial Point, Coral Ridge Isles and Riverland",
        body: [
          "Away from the water and the towers, a great deal of Fort Lauderdale is single storey ranch houses from the 1950s and 1960s, in neighbourhoods such as Imperial Point, Coral Ridge Isles and Riverland. The laundry is usually in the garage or a utility room beside it, and the dryer duct either goes straight out the garage wall or up over the garage ceiling to the roof.",
          "Over the garage is where dryer vent repair usually starts. That attic space gets used for storage, and boxes end up resting on the duct. AC technicians crawl across it to reach the air handler. Over the decades, a duct that was sound when it went in can be crushed flat in one spot, pulled off its elbow in another, and patched with foil hose by someone who did not want to climb back up.",
          "We trace the run from the dryer to the cap, replace crushed or disconnected sections with rigid metal duct and seal every joint with foil tape rather than screws. That kind of dryer vent repair runs $200 to $600 depending on how much of the run has to change. If only the transition hose behind the dryer is crushed, it is replaced as part of a $100 to $200 cleaning.",
        ],
      },
      {
        heading: "Vacation rentals near the beach",
        body: [
          "Central Beach, Victoria Park and the streets off Las Olas have plenty of homes and small apartment buildings rented by the night or the week. In a vacation rental the dryer works harder than in almost any household, because every turnover means a full set of sheets and a stack of towels, and new towels shed more lint than almost anything else that goes in a dryer.",
          "A rental dryer running several loads at each changeover can fill a vent in months rather than years. The host is rarely there when the towels take two cycles, and the cleaner simply runs them again. Guests often notice a hot laundry closet or a burning smell before anyone else does.",
          "We suggest hosts put the vent on the same calendar as the AC filter: cleaned every six months for a busy rental, with the airflow readings kept as a record. We can work between bookings. Cleaning costs $100 to $200 per dryer.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Casas remodeladas",
        body: [
          "En Victoria Park, Coral Ridge y Rio Vista muchas casas se han ampliado por completo. La lavandería se pasa al centro de la casa y la ventila tiene que cruzar el ático junto con los ductos nuevos del aire acondicionado.",
          "Medimos el largo total y lo comparamos con el código y con el manual de la secadora. Si se pasa, hacemos una ruta más recta con ducto metálico rígido, por $200 a $600.",
        ],
      },
      {
        heading: "Torres de condominio",
        body: [
          "En las torres de Galt Ocean Mile y del centro, la secadora puede salir al balcón, a un ducto vertical compartido o a un tramo largo por el techo del pasillo. Limpiamos la parte de su apartamento y avisamos a la administración si la parte común está restringiendo el aire.",
          "Para edificios completos cobramos por unidad con una sola cotización. La limpieza de una casa cuesta de $100 a $200.",
        ],
      },
      {
        heading: "Después de la temporada de huracanes",
        body: [
          "En Las Olas Isles y a lo largo del New River, las casas reciben el viento y el salitre de frente. Después de una tormenta fíjese que la tapa siga firme y que la aleta abra con la secadora prendida y cierre al apagarla.",
          "Si la aleta falta, entra lluvia al ducto y la pelusa mojada se endurece. En la limpieza de rutina siempre revisamos y liberamos la aleta.",
        ],
      },
      {
        heading: "Imperial Point, Coral Ridge Isles y Riverland",
        body: [
          "Lejos del agua y de las torres, gran parte de Fort Lauderdale son casas de una planta de los años cincuenta y sesenta, en barrios como Imperial Point, Coral Ridge Isles y Riverland. La lavandería suele estar en el garaje o en un cuarto al lado, y el ducto de secadora sale derecho por la pared del garaje o sube por encima del techo del garaje hasta el techo de la casa.",
          "Ese espacio sobre el garaje es donde empiezan casi todas las reparaciones. Se usa para guardar cosas, y las cajas terminan encima del ducto. Los técnicos del aire acondicionado pasan por ahí para llegar a la manejadora. Con los años, un ducto que estaba bien queda aplastado en un punto, zafado de un codo en otro y remendado con manguera de aluminio.",
          "Seguimos el ducto desde la secadora hasta la salida, cambiamos los tramos aplastados o sueltos por ducto metálico rígido y sellamos cada unión con cinta de aluminio, sin tornillos. Si busca reparación de ventila de secadora cerca de usted, el precio es de $200 a $600, según cuánto haya que cambiar. Si solo está aplastada la manguera de atrás, se cambia dentro de la limpieza de $100 a $200.",
        ],
      },
      {
        heading: "Casas y apartamentos de alquiler vacacional",
        body: [
          "En Central Beach, Victoria Park y las calles cerca de Las Olas hay muchas casas y edificios pequeños que se alquilan por noche o por semana. Ahí la secadora trabaja más que en casi cualquier casa de familia: cada cambio de huéspedes son sábanas y una pila de toallas, y las toallas nuevas sueltan más pelusa que casi cualquier otra cosa.",
          "Con varias cargas en cada cambio, la ventila de secadora se puede llenar en meses y no en años. El anfitrión casi nunca está cuando las toallas necesitan dos ciclos, y la persona de limpieza simplemente las vuelve a poner. Muchas veces el primero en notar el cuarto de lavado caliente o un olor a quemado es el huésped.",
          "Recomendamos poner la ventila en el mismo calendario que el filtro del aire acondicionado: limpieza cada seis meses en un alquiler con mucho movimiento, guardando las medidas de flujo de aire. Podemos ir entre una reserva y otra. La limpieza cuesta de $100 a $200 por secadora.",
        ],
      },
    ],
    faq: [
      {
        question: "We are remodeling. Where should the new laundry vent go?",
        answer:
          "As short and straight as the plan allows, in 4 inch rigid metal, ending at an exterior wall or roof at least 3 feet from any window or door. Talk to us before the drywall goes up and we can install it while the walls are open.",
      },
      {
        question: "My condo dryer vents into the building. Can you still clean it?",
        answer:
          "We clean the section from your dryer to where it joins the building system. The shared shaft is the association's, and we report what we find to management.",
      },
      {
        question: "How do I know if my vent survived a storm?",
        answer:
          "Run the dryer and look at the hood outside. The flap should open with the airflow and fall shut when the dryer stops. If it hangs open, is missing, or the hood is loose, call us.",
      },
    ],
    faqEs: [
      {
        question: "Estamos remodelando. ¿Por dónde debe ir la ventila nueva?",
        answer:
          "Lo más corta y recta posible, en ducto rígido de 4 pulgadas, con salida a por lo menos 3 pies de ventanas y puertas. Si nos llama antes de cerrar las paredes, la instalamos con todo abierto.",
      },
      {
        question: "La secadora de mi condominio sale a un ducto del edificio. ¿La pueden limpiar?",
        answer:
          "Limpiamos el tramo desde su secadora hasta donde se une al sistema del edificio. El ducto común es de la asociación y le informamos lo que vemos.",
      },
      {
        question: "¿Son asegurados?",
        answer:
          "Sí, estamos asegurados. Trabajamos de lunes a viernes de 8am a 7pm, sábados de 9am a 5pm y domingos de 10am a 4pm.",
      },
    ],
  },
  {
    slug: "miami-beach",
    name: "Miami Beach",
    county: "Miami-Dade County",
    region: "Miami-Dade County",
    nearby: ["miami", "coral-gables", "hollywood"],
    neighborhoods: ["South Beach", "Flamingo Park", "Mid-Beach", "North Beach", "Normandy Isles", "Venetian Islands"],
    intro:
      "Many of the older apartment buildings on Miami Beach were built with no laundry in the units at all. Washers and dryers added later had to vent wherever a hole could be made, and that history decides how well they work now.",
    introEs:
      "Muchos edificios viejos de Miami Beach se construyeron sin lavandería dentro de los apartamentos. Las lavadoras y secadoras que se pusieron después tuvieron que sacar el aire por donde se pudo abrir un hueco, y esa historia decide cómo funcionan hoy.",
    common:
      "In Miami Beach the problem we see most is a dryer added to an older apartment and vented through a long, improvised run, often with a section of foil hose hidden above a ceiling.",
    commonEs:
      "En Miami Beach lo que más vemos es una secadora añadida a un apartamento viejo con una ventila larga e improvisada, muchas veces con un tramo de manguera de aluminio escondido encima del techo.",
    depth: [
      {
        heading: "Low rise buildings that added a dryer",
        body: [
          "In the walkup buildings around Flamingo Park and in South Beach, an owner who wanted a dryer had to get the exhaust through masonry walls. Some went straight out the nearest window wall. Others ran a hose across a kitchen soffit or through a closet ceiling to an air shaft.",
          "A hose hidden in a ceiling is not allowed: the transition duct must stay visible and be no longer than 8 feet. When we find one, we replace the concealed part with rigid metal, or tell you plainly when there is no compliant route and a ventless dryer is the better answer.",
        ],
      },
      {
        heading: "Flooding and the low hood",
        body: [
          "Parts of the city flood at high tide and in heavy rain, and a wall hood a foot above grade on a side yard can sit in standing water. Water in the duct mixes with lint into a paste that does not brush out easily.",
          "Where a hood is that low and keeps taking water, raising the termination is often worth it. A short rigid run up the inside of the wall to a higher exit is repair work in the $200 to $600 range.",
        ],
      },
      {
        heading: "Houses on the islands",
        body: [
          "On the Venetian Islands, Normandy Isles and the residential streets of Mid-Beach, single family homes face open water. Salt eats the damper hinge within a few years. We check every flap and replace corroded hoods with heavier caps that close without a screen.",
          "Cleaning is $100 to $200. For condo associations we price per unit and quote the building.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Edificios viejos con secadora añadida",
        body: [
          "En los edificios de pocos pisos de South Beach y alrededor de Flamingo Park, quien quiso una secadora tuvo que abrir paso por paredes de mampostería. Algunos salieron directo por la pared más cercana. Otros pasaron una manguera por encima de la cocina o de un clóset.",
          "Una manguera escondida en el techo no está permitida. La manguera de transición debe quedar a la vista y medir no más de 8 pies. Cambiamos el tramo escondido por ducto rígido, o le decimos con franqueza si no hay ruta posible y una secadora sin ventila es mejor opción.",
        ],
      },
      {
        heading: "Inundaciones y la sal",
        body: [
          "En las calles que se inundan con la marea alta, una tapa a un pie del suelo puede quedar bajo el agua. El agua y la pelusa forman una pasta difícil de sacar. A veces conviene subir la salida.",
          "En las islas la sal daña la bisagra de la aleta en pocos años. La limpieza cuesta de $100 a $200 y una reparación de $200 a $600.",
        ],
      },
    ],
    faq: [
      {
        question: "My building has no outside wall near the laundry. What are the options?",
        answer:
          "We trace the existing route first. If a compliant rigid run to the exterior is not possible, a ventless condensing or heat pump dryer may be the safer choice, and we will say so rather than sell you a repair that cannot meet the code.",
      },
      {
        question: "My dryer vent floods during king tides. Can it be moved?",
        answer:
          "Often yes, by raising the exit higher on the same wall. We look at the wall construction and quote it before any work.",
      },
      {
        question: "How often should a Miami Beach vent be checked?",
        answer:
          "Clean once a year, and look at the damper after any storm or high water. Salt and flooding are what usually stop it closing.",
      },
    ],
    faqEs: [
      {
        question: "Mi apartamento no tiene pared exterior cerca de la lavandería. ¿Qué hago?",
        answer:
          "Primero seguimos la ruta que existe. Si no hay forma de llegar afuera con ducto rígido dentro del código, una secadora sin ventila puede ser lo más seguro, y se lo decimos así.",
      },
      {
        question: "La salida se inunda con la marea alta. ¿Se puede mover?",
        answer:
          "Muchas veces sí, subiéndola en la misma pared. Revisamos la pared y le damos el precio antes de empezar.",
      },
      {
        question: "¿Trabajan en condominios de Miami Beach?",
        answer:
          "Sí. Coordinamos con la administración para llegar a la salida y, si es todo el edificio, cobramos por unidad con una sola cotización.",
      },
    ],
  },
  {
    slug: "miami",
    name: "Miami",
    county: "Miami-Dade County",
    region: "Miami-Dade County",
    nearby: ["miami-beach", "coral-gables", "hialeah", "doral"],
    neighborhoods: ["Little Havana", "Shenandoah", "Coconut Grove", "Brickell", "Edgewater", "Morningside"],
    intro:
      "In Miami the dryer often lives where the house allowed it rather than where it vents well: on a back porch, in a converted carport, in a hallway closet of a duplex. The vent is usually short. The trouble is in how it was put together.",
    introEs:
      "En Miami la secadora muchas veces está donde la casa lo permitió y no donde mejor sale el aire: en el portal de atrás, en un carport cerrado, en un clóset de un dúplex. La ventila suele ser corta. El problema está en cómo se armó.",
    common:
      "The most common find in Miami is a short vent made from mismatched pieces, foil hose joined to plastic and pushed through a hole in a block wall, with lint packed at every joint.",
    commonEs:
      "Lo más común en Miami es una ventila corta hecha con piezas que no combinan, manguera de aluminio unida a plástico y metida por un hueco en la pared de bloque, con pelusa en cada unión.",
    depth: [
      {
        heading: "Back porches, carports and duplexes",
        body: [
          "In Little Havana, Shenandoah and the older blocks off Coral Way, a lot of laundry happens in spaces that were not designed for it. The washer sits on a rear porch or in a closed carport, and the dryer exhausts through whatever opening was available, sometimes into the porch itself.",
          "A dryer that blows into an enclosed room fills it with lint and humidity, and the lint coats everything nearby. We run a proper rigid duct to the exterior, keep the transition hose short and listed, and fit a hood with a damper. That kind of correction is $200 to $600.",
        ],
      },
      {
        heading: "Landlords and shared machines",
        body: [
          "Duplexes and small apartment buildings often share one dryer among several households, and it runs most of the day. Lint builds fast and no single tenant owns the problem. The first sign is usually a complaint that clothes take two cycles.",
          "We suggest owners schedule cleaning on a fixed month every year and keep the airflow readings we leave as a record. Cleaning is $100 to $200 per dryer.",
        ],
      },
      {
        heading: "Brickell, Edgewater and the Grove",
        body: [
          "In the towers of Brickell and Edgewater, the unit dryer vents through a ceiling run to a balcony wall or a building shaft, and the work is coordinated with management. In Coconut Grove and Morningside, older houses sit under heavy canopy, and leaves and nesting material at the hood are as common as lint inside.",
          "Wherever the vent is, the method is the same: airflow measured at the exterior first, brush and air through the run, hood cleared, and a second reading to show the change.",
        ],
      },
      {
        heading: "West Miami, Westchester and Flagami",
        body: [
          "West Miami is a small city of its own just off SW 8th Street, made up almost entirely of single family houses from the 1940s and 1950s. Many people who search for dryer vent cleaning in west Miami mean the whole west side, though: Flagami, Westchester and the streets out along Bird Road and Coral Way.",
          "The houses across that area are mostly concrete block ranches on modest lots, many enlarged over the years with a family room or an extra bedroom at the back. When the back of the house grew, the laundry often moved into the old carport or a utility room on the side, and the dryer vent ended up in the narrow side yard, a few feet from the fence and sometimes behind the AC condenser.",
          "A hood in a tight side yard collects leaves, gets knocked by the lawn crew's trimmer and sits in still air, where lint drops onto the ground and onto the condenser coil. We clean the run, clear the hood and the area around it, and replace the hood if it is crushed or the damper is gone. Cleaning is $100 to $200, and a new hood or a short reroute is $200 to $600.",
        ],
      },
      {
        heading: "Booking a tower unit in Brickell or Edgewater",
        body: [
          "In the newer towers the dryer sits stacked over the washer in a closet off the kitchen or hall, and the duct runs across the ceiling inside a drywall bulkhead to a louver on the balcony wall or the facade. Nothing about the route is visible from inside the unit, and the outside end is often out of reach except from the balcony or with the building's own access equipment.",
          "Most buildings want contractors scheduled through the management office, with a certificate of insurance on file, a service elevator booking and a set time window. Send us the building's vendor requirements when you book and we prepare the paperwork, so the visit does not stall at the front desk.",
          "We clean from the closet through the full run and, where the louver can be reached from your balcony, clear it from outside as well. If the louver can only be reached from the facade, we pass management the airflow reading so it can go into the building's own maintenance. Cleaning a condo dryer vent in Miami costs $100 to $200 per unit.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Portales, carports y dúplex",
        body: [
          "En La Pequeña Habana, Shenandoah y las calles viejas cerca de Coral Way, la lavandería muchas veces está en un portal de atrás o en un carport cerrado. La secadora sale por el hueco que hubo, y a veces echa el aire dentro del mismo portal.",
          "Una secadora que bota el aire adentro llena el cuarto de pelusa y humedad. Instalamos un ducto rígido hasta afuera, con manguera de transición corta y aprobada, y una tapa con aleta. Ese arreglo cuesta de $200 a $600.",
        ],
      },
      {
        heading: "Dueños de propiedades alquiladas",
        body: [
          "En los dúplex y edificios pequeños varias familias comparten una secadora que trabaja casi todo el día. La pelusa se acumula rápido y nadie se hace cargo. Lo primero que se nota es que la ropa necesita dos ciclos.",
          "Recomendamos limpiar una vez al año en un mes fijo y guardar las lecturas de flujo que le dejamos. La limpieza cuesta de $100 a $200 por secadora.",
        ],
      },
      {
        heading: "Torres y casas bajo los árboles",
        body: [
          "En Brickell y Edgewater coordinamos con la administración para llegar a la salida. En Coconut Grove, las hojas y los nidos en la tapa son tan comunes como la pelusa adentro.",
        ],
      },
      {
        heading: "West Miami, Westchester y Flagami",
        body: [
          "West Miami es una ciudad pequeña aparte, junto a la Calle Ocho, casi toda de casas de una familia de los años cuarenta y cincuenta. Pero cuando alguien busca limpieza de ventila de secadora en el oeste de Miami, muchas veces se refiere a todo el oeste: Flagami, Westchester y las calles a lo largo de Bird Road y Coral Way.",
          "Son casas de bloque de una planta, muchas ampliadas con un cuarto o una sala atrás. Al crecer la casa, la lavadora y la secadora se fueron al carport o a un cuarto de servicio al costado, y la ventila de secadora terminó en el pasillo angosto entre la casa y la cerca, a veces detrás de la unidad del aire acondicionado.",
          "En ese pasillo la salida junta hojas, el jardinero la golpea con la máquina y la pelusa cae al piso y encima de la unidad del aire. Limpiamos el ducto de secadora, despejamos la salida y, si la tapa está aplastada o ya no tiene aleta, la cambiamos. El precio de la limpieza es de $100 a $200, y una tapa nueva o un cambio corto de ruta, de $200 a $600.",
        ],
      },
      {
        heading: "Condominios en Brickell y Edgewater: cómo se coordina la visita",
        body: [
          "En las torres nuevas la secadora va apilada sobre la lavadora en un clóset, y el ducto cruza el techo dentro de una caja de drywall hasta una rejilla en la pared del balcón o en la fachada. Desde adentro no se ve nada del recorrido, y la salida muchas veces solo se alcanza desde el balcón o con el equipo del edificio.",
          "Casi todos los edificios piden que el técnico se programe con la administración, con certificado de seguro, reserva del elevador de servicio y un horario fijo. Mándenos los requisitos del edificio cuando pida la cita y preparamos los papeles, para que la visita no se quede detenida en la recepción.",
          "Limpiamos desde el clóset todo el ducto y, si la rejilla se alcanza desde su balcón, la limpiamos también por fuera. Si solo se llega por la fachada, le pasamos a la administración la medida de flujo de aire para que lo incluya en su mantenimiento. El precio por unidad es de $100 a $200.",
        ],
      },
    ],
    faq: [
      {
        question: "My dryer vents into the back porch. Is that allowed?",
        answer:
          "No. The exhaust must end outside the building, at least 3 feet from any opening, with a backdraft damper. Venting into an enclosed porch puts lint and moisture into the house. We can run it to the exterior.",
      },
      {
        question: "I own a duplex with one shared dryer. How often should it be cleaned?",
        answer:
          "At least once a year, and sooner if tenants report long drying times. A dryer running most of the day collects lint much faster than a family dryer.",
      },
      {
        question: "Why does the US Fire Administration care about lint?",
        answer:
          "Its figures put home dryer fires at about 2,900 a year in the United States, causing roughly 5 deaths, 100 injuries and $35 million in losses. Failure to clean is the leading cause, about a third of them.",
      },
    ],
    faqEs: [
      {
        question: "Mi secadora bota el aire en el portal. ¿Eso se permite?",
        answer:
          "No. La salida tiene que estar afuera, a por lo menos 3 pies de puertas y ventanas, con aleta antirretorno. Si sale adentro, la pelusa y la humedad se quedan en la casa.",
      },
      {
        question: "Tengo un dúplex con una sola secadora. ¿Cada cuánto se limpia?",
        answer:
          "Por lo menos una vez al año, y antes si los inquilinos dicen que la ropa no seca. Una secadora que trabaja todo el día junta pelusa mucho más rápido.",
      },
      {
        question: "¿Es verdad que la pelusa causa incendios?",
        answer:
          "Sí. Según la Administración de Incendios de Estados Unidos, hay unos 2,900 incendios de secadoras en casas cada año, y la falta de limpieza es la causa principal, más o menos un tercio de ellos.",
      },
    ],
  },
  {
    slug: "coral-gables",
    name: "Coral Gables",
    county: "Miami-Dade County",
    region: "Miami-Dade County",
    nearby: ["miami", "pinecrest", "kendall", "miami-beach"],
    neighborhoods: ["Cocoplum", "Gables Estates", "Gables by the Sea", "Coral Gables Riviera"],
    intro:
      "Coral Gables cares a great deal about how houses look from the street, and a dryer vent is one of the few mechanical parts that shows. The older Mediterranean homes have barrel tile roofs and thick walls, and the large waterfront homes to the south often have laundry rooms far from any exterior.",
    introEs:
      "En Coral Gables importa mucho cómo se ve la casa desde la calle, y la ventila de la secadora es de las pocas piezas mecánicas que se ven. Las casas mediterráneas viejas tienen techos de teja de barro y paredes gruesas, y las casas grandes frente al agua suelen tener la lavandería lejos de cualquier pared exterior.",
    common:
      "The failure we find most in Coral Gables is a run that is simply too long, in a large home where the laundry is deep in the plan and the vent crosses the attic with several bends.",
    commonEs:
      "Lo que más encontramos en Coral Gables es un ducto demasiado largo, en una casa grande donde la lavandería está en el centro y la ventila cruza el ático con varios codos.",
    depth: [
      {
        heading: "Barrel tile and old walls",
        body: [
          "The original Gables houses have clay barrel tile, which is brittle and slides if disturbed. Where the dryer vents through that roof, we work from the cap with care and avoid lifting tiles around the flashing. Where it vents through a wall, the wall is often thick masonry, and the hood is recessed enough that lint collects in the sleeve behind it.",
          "Coral Gables reviews exterior changes closely. If a cap or hood needs replacing on a visible elevation, check with the city about what is acceptable before we change its look.",
        ],
      },
      {
        heading: "Large homes and the length limit",
        body: [
          "In Cocoplum, Gables Estates and Gables by the Sea, homes are big and laundry rooms sit near the bedroom wing, often far from an outside wall. The code allows 35 feet of duct, less 2.5 feet for every 45 degree bend and 5 feet for every 90, unless the dryer manufacturer allows a longer run. Three or four elbows use up much of that.",
          "When a run is over, cleaning only buys time. We measure it, show the numbers, and price a shorter rigid route. Repair and rerouting fall between $200 and $600; anything that means opening finished ceilings is quoted first.",
        ],
      },
      {
        heading: "Ranch homes in the Riviera",
        body: [
          "The Riviera section and the streets around it have more mid century single storey houses, with laundry near the garage and a short wall run. Those are routine: brush, compressed air, hood and damper, and airflow readings before and after.",
          "Cleaning is $100 to $200 whichever kind of Gables home you have.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Teja de barro y paredes gruesas",
        body: [
          "Las casas originales de Coral Gables tienen teja de barro, que es frágil. Si la ventila sale por el techo, trabajamos desde la salida sin levantar tejas alrededor de la base. Si sale por la pared, la pared es gruesa y la pelusa se junta en el tramo detrás de la tapa.",
          "La ciudad revisa con cuidado los cambios en el exterior. Si hay que cambiar una tapa visible desde la calle, consulte primero con la ciudad qué se permite.",
        ],
      },
      {
        heading: "Casas grandes, ductos largos",
        body: [
          "En Cocoplum, Gables Estates y Gables by the Sea la lavandería suele estar lejos de la pared exterior. El código permite 35 pies, menos 2.5 por cada codo de 45 grados y 5 por cada codo de 90, salvo que el fabricante permita más.",
          "Si su ducto se pasa, limpiarlo solo ayuda por un tiempo. Le mostramos las medidas y le damos el precio de una ruta más corta, de $200 a $600. La limpieza cuesta de $100 a $200.",
        ],
      },
    ],
    faq: [
      {
        question: "Can you work on a barrel tile roof without breaking tiles?",
        answer:
          "We approach the cap carefully and avoid lifting tile around the flashing. Clay tile is brittle, so if one is already cracked we show you before we start.",
      },
      {
        question: "Do I need city approval to change my dryer vent cap?",
        answer:
          "Coral Gables reviews exterior appearance closely, so ask the city before changing a cap or hood that can be seen. Cleaning the existing one needs no approval.",
      },
      {
        question: "My dryer takes over an hour even after cleaning. Why?",
        answer:
          "The run may be longer than the dryer can push through. We measure developed length and airflow, and if it is over the limit we show you a shorter route.",
      },
    ],
    faqEs: [
      {
        question: "¿Pueden trabajar en un techo de teja de barro sin romperla?",
        answer:
          "Llegamos a la salida con cuidado y no levantamos tejas alrededor de la base. Si alguna ya está rota, se la mostramos antes de empezar.",
      },
      {
        question: "¿Necesito permiso de la ciudad para cambiar la tapa?",
        answer:
          "Coral Gables revisa mucho la apariencia exterior. Consulte con la ciudad antes de cambiar una tapa visible. Limpiar la que tiene no necesita permiso.",
      },
      {
        question: "Limpiaron la ventila y la secadora sigue demorando. ¿Por qué?",
        answer:
          "Puede que el ducto sea más largo de lo que la secadora puede empujar. Medimos el largo y el flujo, y si se pasa le proponemos una ruta más corta.",
      },
    ],
  },
  {
    slug: "pinecrest",
    name: "Pinecrest",
    county: "Miami-Dade County",
    region: "Miami-Dade County",
    nearby: ["coral-gables", "kendall", "homestead", "miami"],
    neighborhoods: ["Suniland", "High Pines", "Coral Pine"],
    intro:
      "Pinecrest is big lots, mature trees and houses that have been added onto over decades. A laundry that once sat by the carport now often sits well inside the house, and the vent has grown longer with every addition.",
    introEs:
      "Pinecrest es terrenos grandes, árboles maduros y casas que se han ampliado durante décadas. La lavandería que antes estaba junto al carport ahora muchas veces queda bien adentro de la casa, y la ventila se ha ido alargando con cada ampliación.",
    common:
      "In Pinecrest the most common find is a vent extended in pieces during successive additions, mixing rigid pipe, flexible hose and joints that no longer line up.",
    commonEs:
      "En Pinecrest lo más común es una ventila alargada por partes en cada ampliación, con tubo rígido, manguera flexible y uniones que ya no cuadran.",
    depth: [
      {
        heading: "Additions that moved the laundry inward",
        body: [
          "Many Pinecrest homes began as modest ranch houses on large lots. A family room went on the back, a master suite on the side, and the laundry ended up enclosed by rooms that were not there when it was installed. Each time, someone extended the vent to reach a new exterior wall or the roof.",
          "Those extensions tend to be whatever was on the truck that day. We open the run at each change of material, look for separated or sagging joints, and replace mixed sections with one continuous rigid duct where the route allows.",
        ],
      },
      {
        heading: "Trees over the roof",
        body: [
          "The canopy that makes Pinecrest pleasant drops leaves and twigs onto the roof all year. Around a roof cap they form a mat that holds lint and water. Large oaks also mean squirrels and birds with easy access to the roof.",
          "We clear the area around the cap, not just the cap itself, and check that the damper closes. A cap that stays open in a heavily treed yard tends to get a nest within a season.",
        ],
      },
      {
        heading: "Proving the result",
        body: [
          "On a long, pieced together run, we take airflow at the exterior before touching anything, then again after cleaning. If the number barely moves, the run itself is the problem, and we explain the length rule: 35 feet, less 2.5 per 45 degree bend and 5 per 90, unless the dryer maker allows more.",
          "Cleaning is $100 to $200. Replacing a mixed run with rigid metal on a shorter path is $200 to $600 and is quoted after inspection.",
        ],
      },
    ],
    depthEs: [
      {
        heading: "Ampliaciones y ventilas alargadas",
        body: [
          "Muchas casas de Pinecrest empezaron como casas sencillas de un piso en terrenos grandes. Con los años se añadió un cuarto atrás, una suite al lado, y la lavandería quedó rodeada. Cada vez alguien alargó la ventila con lo que tenía a mano.",
          "Revisamos cada cambio de material, buscamos uniones sueltas o caídas y cambiamos los tramos mezclados por un solo ducto rígido cuando la ruta lo permite.",
        ],
      },
      {
        heading: "Árboles encima del techo",
        body: [
          "Los árboles dejan caer hojas y ramitas todo el año. Alrededor de la salida en el techo forman una capa que retiene pelusa y agua, y las ardillas y los pájaros llegan fácil.",
          "Limpiamos alrededor de la salida, no solo adentro, y verificamos que la aleta cierre. La limpieza cuesta de $100 a $200 y cambiar un ducto mezclado por uno rígido, de $200 a $600.",
        ],
      },
      {
        heading: "Lo que pasa en el ático",
        body: [
          "Cuando una unión se suelta en el ático, la secadora bota pelusa y aire húmedo sobre el aislamiento. Eso no se ve desde la casa, pero se nota en que la ropa tarda más y el cuarto de lavar se calienta.",
          "Revisamos cada unión que se puede alcanzar y la sellamos con cinta de aluminio, nunca con tornillos, porque los tornillos atrapan pelusa.",
        ],
      },
    ],
    faq: [
      {
        question: "Our house has had several additions. Is the dryer vent still safe?",
        answer:
          "We trace it end to end, check each joint and material change, and measure the length. You get a clear answer on whether cleaning is enough or a section should be replaced.",
      },
      {
        question: "How do you know the cleaning actually helped?",
        answer:
          "We measure airflow at the exterior before and after. If the second reading is not much better, the problem is the run itself, not the lint, and we tell you so.",
      },
      {
        question: "Leaves cover my roof around the vent. Is that a problem?",
        answer:
          "It can be. Leaf mats hold lint and moisture around the cap and can keep the damper from closing. We clear the area when we clean.",
      },
    ],
    faqEs: [
      {
        question: "Mi casa tiene varias ampliaciones. ¿La ventila está bien?",
        answer:
          "La seguimos de punta a punta, revisamos cada unión y cada cambio de material y medimos el largo. Le decimos claro si basta con limpiar o si hay que cambiar un tramo.",
      },
      {
        question: "¿Cómo sé que la limpieza sirvió?",
        answer:
          "Medimos el flujo de aire afuera antes y después. Si la segunda lectura casi no mejora, el problema es el ducto y no la pelusa.",
      },
      {
        question: "¿Atienden en fin de semana?",
        answer:
          "Sí. Sábados de 9am a 5pm y domingos de 10am a 4pm, además de lunes a viernes de 8am a 7pm. Casi siempre hay cita la misma semana.",
      },
    ],
  },
];
