/**
 * Contenido en español del catálogo de puertas, emparejado con
 * src/data/doors.ts por el mismo `slug`.
 *
 * Escrito, no traducido. Aplica la misma regla que el archivo en inglés y
 * conviene repetirla aquí porque es la que más importa en este estado:
 * ninguna entrada da un número de aprobación NOA de Miami-Dade ni de
 * Aprobación de Producto de Florida, ni una presión de diseño específica.
 * Esos se emiten contra un ensamble probado en medidas concretas y van en el
 * permiso. Publicar uno aquí sería una afirmación de cumplimiento de código
 * que no podemos sostener.
 */

import type { DoorModelEs } from './types';

export const doorModelEs: Record<string, DoorModelEs> = {
  'wind-rated-steel': {
    name: 'Puerta de Garaje de Acero Certificada para Viento',
    shortName: 'Acero certificado para viento',
    metaTitle: 'Puerta de Garaje Certificada para Viento en Florida | Precio Instalada',
    metaDescription:
      'La puerta nueva estándar en casi toda Florida: acero de una capa, certificada para presión de viento, instalada desde $950. Qué significa la certificación y dónde no alcanza.',
    construction: 'Acero de una sola capa',
    insulation: 'Ninguno. Lámina de acero sencilla sin capa aislante.',
    answer:
      'Una puerta de acero de una capa certificada para viento es lo que se instala en casi toda Florida fuera de la Zona de Huracanes de Alta Velocidad, desde unos $950 para un marco estándar de un carro. Está certificada para resistir presión de viento, que es lo que pide el código en la mayor parte del estado, y no está certificada contra impacto, que es lo que Miami-Dade y Broward normalmente exigen. Es la puerta más barata que se puede instalar nueva de forma legal, y para un garaje tierra adentro muchas veces es exactamente la respuesta correcta.',
    intro: [
      'Certificación de viento y certificación de impacto son dos pruebas distintas, y confundirlas es el error más caro que comete un dueño de casa en Florida en esta compra. La de viento es sobre presión: ¿la puerta se queda en su marco cuando la tormenta la empuja y la jala? La de impacto agrega una segunda pregunta: ¿sobrevive a que la golpee un objeto volando?',
      'La mayor parte de Florida pide la primera. Miami-Dade y Broward, o sea la Zona de Huracanes de Alta Velocidad, normalmente piden las dos. Cuál le aplica a usted lo decide su dirección y no su preferencia, y se define en el permiso y no en lo que diga un vendedor.',
      'Para un garaje tierra adentro esta puerta no es un compromiso, es la especificación correcta. Comprar certificación de impacto que no está obligado a tener es dinero que rendiría más en aislamiento, que sí va a sentir todos los días, o en un mejor motor.',
    ],
    bestFor: [
      'Direcciones tierra adentro fuera de la Zona de Huracanes de Alta Velocidad',
      'Garajes separados y talleres que no están climatizados',
      'Propiedades de renta y remodelaciones con presupuesto cerrado',
      'Cambiar una puerta que falló y tiene que cumplir el código al menor costo',
    ],
    tradeoffs: [
      'Cero aislamiento, así que un garaje pegado a la casa se calienta y el cuarto de arriba lo siente',
      'El acero de una capa se abolla fácil, y una abolladura en el panel de abajo es permanente',
      'No es certificada contra impacto, así que normalmente no es la puerta para un permiso de Miami-Dade o Broward',
      'El acero más delgado también es el más ruidoso y marca cada golpe',
    ],
    quickFacts: [
      { label: 'Precio instalada', value: '$950 a $1,800' },
      { label: 'Certificada para viento', value: 'Sí' },
      { label: 'Certificada contra impacto', value: 'No' },
      { label: 'Aislamiento', value: 'Ninguno' },
      { label: 'HVHZ', value: 'Normalmente no se acepta' },
    ],
    faq: [
      {
        question: '¿Una puerta certificada para viento alcanza para un huracán?',
        answer:
          'Depende por completo de su dirección, y eso no es una evasiva. Fuera de la Zona de Huracanes de Alta Velocidad una puerta certificada para viento es lo que pide el código y es una certificación real y probada, no una palabra de mercadotecnia. Dentro de Miami-Dade y Broward el código normalmente quiere también certificación de impacto, porque ahí el riesgo contra el que se diseña son los escombros y no solo la presión. Revisamos cuál le aplica antes de cotizar.',
      },
      {
        question: '¿Cómo sé que la puerta de verdad está certificada?',
        answer:
          'Por el papeleo, no por el folleto. Una puerta certificada tiene una Aprobación de Producto de Florida o un Aviso de Aceptación de Miami-Dade, emitido contra un ensamble probado en medidas y configuraciones específicas. Ese número va en su permiso. Pídalo por escrito en la cotización, y si una empresa no lo quiere poner ahí, eso ya le dice algo.',
      },
      {
        question: '¿Le puedo agregar aislamiento después?',
        answer:
          'Se venden kits, ayudan un poco, y no son lo mismo que una puerta aislada. Una puerta aislada de fábrica lleva el aislante pegado entre dos láminas de acero, lo cual agrega rigidez además de valor R. Un kit es un panel pegado en la cara interior, que no agrega rigidez y puede afectar el equilibrio para el que se ajustaron los resortes. Si el aislamiento le importa, sale más barato comprarlo integrado que ponerlo dos veces.',
      },
    ],
  },

  'insulated-steel': {
    name: 'Puerta de Garaje de Acero Aislada',
    shortName: 'Acero aislado',
    metaTitle: 'Puerta de Garaje Aislada en Florida | Precio y Si Vale la Pena',
    metaDescription:
      'Puertas de acero aisladas de dos y tres capas instaladas desde $1,400. Cuándo el aislamiento se paga solo en Florida y cuándo es dinero tirado en un garaje separado.',
    construction: 'Acero de dos o tres capas con aislante integrado',
    insulation: 'Poliestireno o poliuretano pegado entre láminas de acero.',
    answer:
      'Una puerta de acero aislada lleva el aislante entre dos láminas de acero, instalada desde unos $1,400. En Florida el argumento no es la calefacción, es el garaje pegado a la casa: un garaje que llega a 43 grados empuja calor a los cuartos de al lado y de arriba todo el verano. También es más rígida y bastante más silenciosa que una de una capa. En un garaje separado el mismo dinero normalmente rinde más en otra cosa.',
    intro: [
      'Hay dos construcciones que vale la pena distinguir. Una puerta de dos capas es acero con aislante pegado por detrás. Una de tres capas es acero, aislante, acero, y esa segunda lámina es lo que la hace notablemente más rígida, más silenciosa y más resistente a abolladuras, además de mejor aislada.',
      'El argumento del aislamiento en Florida es distinto al del norte. Aquí nadie está reteniendo calor. Lo que usted hace es evitar que un garaje que da al poniente se convierta en una caja de 43 grados que irradia hacia la recámara de arriba desde media tarde hasta bien entrada la noche.',
      'Por eso la respuesta honesta depende del edificio y no del presupuesto. Garaje pegado con espacio habitable al lado o arriba: el aislamiento se gana su dinero. Garaje separado donde usted estaciona y se va: no, y se lo vamos a decir.',
    ],
    bestFor: [
      'Garajes pegados a la casa con un cuarto climatizado al lado o arriba',
      'Garajes usados como gimnasio, taller, oficina o lavandería',
      'Quien quiera una puerta notablemente más silenciosa, que es un efecto secundario del aislamiento',
      'Casas donde la pared del garaje es pared compartida con una recámara',
    ],
    tradeoffs: [
      'Cuesta bastante más que el acero de una capa por un beneficio que solo se siente si el garaje está pegado',
      'Más pesada, así que los resortes y el motor trabajan más durante toda la vida de la puerta',
      'El aislamiento no hace nada contra el aire que entra por un sello vencido, que sale más barato arreglar primero',
      'En un garaje separado el retorno es casi nulo',
    ],
    quickFacts: [
      { label: 'Precio instalada', value: '$1,400 a $3,000' },
      { label: 'Certificada para viento', value: 'Sí' },
      { label: 'Certificada contra impacto', value: 'Disponible como opción' },
      { label: 'Aislamiento', value: 'Integrado, dos o tres capas' },
      { label: 'También le da', value: 'Una puerta mucho más silenciosa' },
    ],
    faq: [
      {
        question: '¿Una puerta aislada me va a bajar el recibo de luz?',
        answer:
          'En un garaje pegado a la casa normalmente sí, de forma moderada y no dramática. Lo que la gente nota primero es la comodidad: el cuarto de arriba del garaje deja de ser el cuarto caliente de la tarde. Si alguien le da un porcentaje exacto de ahorro, pregunte cómo lo calculó, porque depende de su garaje, su orientación, su aislamiento en otras partes y sus costumbres, y un número inventado es más fácil de producir que uno real.',
      },
      {
        question: '¿Más valor R siempre es mejor?',
        answer:
          'Por sí solo no. El valor R se mide por en medio del panel y no dice nada de los sellos, del marco ni de cómo se instaló, y el calor también entra por ahí. Una puerta aislada de gama media bien sellada sobre un marco bien alineado va a rendir más que una de valor R muy alto con el hule inferior vencido, y cuesta menos.',
      },
      {
        question: '¿Una puerta aislada puede ser también certificada contra impacto?',
        answer:
          'Sí, y esa combinación es común en Miami-Dade y Broward donde el código normalmente quiere impacto de todos modos. Cuesta más que cualquiera de las dos por separado. El número de aprobación del ensamble certificado va en el permiso, y el contratista con licencia que saca el permiso es quien lo pone ahí.',
      },
    ],
  },

  'impact-rated-steel': {
    name: 'Puerta de Garaje de Acero Certificada Contra Impacto',
    shortName: 'Acero contra impacto',
    metaTitle: 'Puerta de Garaje Contra Impacto en Florida | HVHZ, NOA y Precio',
    metaDescription:
      'Puertas de acero certificadas contra impacto para Miami-Dade, Broward y la HVHZ, instaladas desde $2,400. Qué prueba la certificación de impacto y quién saca la aprobación.',
    construction: 'Acero reforzado, probado contra un estándar de impacto',
    insulation: 'Disponible aislada o sin aislar; aislada es la especificación común.',
    answer:
      'Una puerta certificada contra impacto se prueba contra escombros volando además de presión de viento, y es lo que Miami-Dade y Broward normalmente exigen dentro de la Zona de Huracanes de Alta Velocidad. Instalada desde unos $2,400. La certificación vive en la aprobación emitida contra el ensamble probado, ya sea un Aviso de Aceptación de Miami-Dade o una Aprobación de Producto de Florida, y ese número va en su permiso de construcción y no en una página web.',
    intro: [
      'La prueba es lo que vale la pena entender. Certificación de impacto significa que al ensamble le dispararon un proyectil y después lo ciclaron bajo presión para ver si la perforación se abría. La certificación de viento sola no incluye eso, y por eso una puerta puede estar legítimamente certificada para viento y aun así no ser aceptable en la HVHZ.',
      'La razón por la que al código le importa es lo que pasa después de una perforación. La puerta del garaje es la abertura más grande de casi cualquier casa. Si falla en una tormenta, la presión entra, y la forma en que las casas fallan después de eso es por el techo, no por la puerta. Se protege la puerta porque se está protegiendo la casa.',
      'Qué certificación necesita su dirección no es una preferencia. Lo define dónde está usted, se confirma en el permiso, y el número de aprobación del ensamble y la medida exactos va en ese permiso. Nosotros no imprimimos números de aprobación en este sitio, porque un número aquí no prueba nada sobre la puerta que termina en su casa.',
    ],
    bestFor: [
      'Cualquier dirección dentro de la Zona de Huracanes de Alta Velocidad, o sea Miami-Dade y Broward',
      'Propiedades costeras en el resto de Florida donde la exposición lo justifique',
      'Dueños que buscan un crédito de mitigación de viento en su seguro',
      'Cambiar una puerta anterior al código en una casa que nunca se ha actualizado',
    ],
    tradeoffs: [
      'Dos a tres veces el costo de una puerta básica certificada para viento',
      'Más pesada, lo que significa resortes de mayor capacidad y un motor más fuerte',
      'Los vidrios decorativos complican la certificación y pueden afectar un crédito de seguro que es todo o nada',
      'Fuera de la HVHZ muchas veces es más certificación de la que el código le pide comprar',
    ],
    quickFacts: [
      { label: 'Precio instalada', value: '$2,400 a $5,000' },
      { label: 'Certificada para viento', value: 'Sí' },
      { label: 'Certificada contra impacto', value: 'Sí' },
      { label: 'HVHZ', value: 'Sí, esta es la especificación de HVHZ' },
      { label: 'Aprobación', value: 'NOA de Miami-Dade o Aprobación de Producto de Florida, en el permiso' },
    ],
    faq: [
      {
        question: '¿Cuál es la diferencia entre un NOA y una Aprobación de Producto de Florida?',
        answer:
          'Son dos caminos de aprobación para el mismo fin. Un Aviso de Aceptación de Miami-Dade lo emite el condado de Miami-Dade y es con lo que trabaja la HVHZ. Una Aprobación de Producto de Florida es el camino estatal. Los dos se emiten contra un ensamble probado en medidas y configuraciones específicas, y los dos se referencian en el permiso. Cuál usa su trabajo depende de su condado y de lo que el fabricante tenga para esa puerta en esa medida.',
      },
      {
        question: '¿Una puerta contra impacto me da descuento en el seguro?',
        answer:
          'Puede, y la regla agarra desprevenida a la gente: el crédito de mitigación de viento por protección de aberturas normalmente es todo o nada. Proteger la puerta del garaje y dejar las ventanas sin protección típicamente no gana nada, porque el crédito se evalúa sobre toda la envolvente. Vale la pena hablar con su aseguradora antes de suponer que la puerta se paga sola, y vale saber que una puerta sólida sin vidrio no crea una abertura acristalada que haya que proteger.',
      },
      {
        question: '¿Publican sus números de aprobación en el sitio?',
        answer:
          'No, a propósito, y a una empresa que sí lo haga la veríamos con cierta sospecha. Una aprobación se emite contra un ensamble específico en medidas específicas, así que un número en una página web no le dice nada sobre la puerta que termina en su marco. Lo que importa es el número en su permiso para su puerta, sacado por el contratista con licencia que hace la instalación. Pídalo por escrito en su cotización.',
      },
    ],
  },

  'carriage-house-steel': {
    name: 'Puerta de Garaje Estilo Carruaje en Acero',
    shortName: 'Estilo carruaje en acero',
    metaTitle: 'Puerta de Garaje Estilo Carruaje en Florida | Acero, Precio Instalada',
    metaDescription:
      'El estilo de puertas de granero sobre una puerta seccional normal, instalada desde $1,600. Por qué en acero es la versión sensata en este clima.',
    construction: 'Acero con detalles aplicados estilo carruaje',
    insulation: 'Comúnmente aislada, disponible sin aislar.',
    answer:
      'Una puerta estilo carruaje en acero le da el aspecto de las viejas puertas de granero que abren hacia afuera, sobre una puerta que sigue subiendo como una seccional normal. Instalada desde unos $1,600. En Florida la versión en acero es la sensata: aguanta la humedad y la sal mucho mejor que la madera real, no necesita rebarnizado, y se consigue certificada para viento y, donde la HVHZ lo exige, contra impacto.',
    intro: [
      'El estilo es aplicado y no estructural. Por debajo es una puerta seccional común que sube por rieles, y el detalle de carruaje son paneles sobrepuestos, bisagras de correa y manijas que en realidad no abren nada. Ese es justamente el punto: el aspecto sin renunciar al mecanismo ni al espacio del techo.',
      'Es por mucho el estilo más pedido en casas de Florida construidas desde los noventa, y por eso casi todos los fabricantes hacen una versión y por eso el rango de precio es competitivo.',
      'El argumento propio de Florida es en contra de hacerla en madera real. Una puerta de carruaje de madera con esta humedad necesita rebarnizado en un calendario que la mayoría de los dueños abandona al segundo año, y cerca del agua salada lo necesita antes. El acero con cara de carruaje le da el aspecto sin nada de eso.',
    ],
    bestFor: [
      'Casas mediterráneas, españolas y tradicionales de Florida donde una puerta lisa se ve mal',
      'Fraccionamientos con asociación que especifica un estilo',
      'Quien quiera el aspecto de madera sin el rebarnizado',
      'Atractivo de venta, donde la puerta es lo más grande que ve un comprador',
    ],
    tradeoffs: [
      'Cuesta más que una puerta de panel liso por una diferencia puramente de apariencia',
      'Los sobrepuestos le dan al agua dónde asentarse, así que el acabado importa más cerca de la costa',
      'Los vidrios decorativos complican la certificación y el tema del seguro',
      'Algunas asociaciones especifican un estilo del que no se puede desviar, así que revise antes de elegir',
    ],
    quickFacts: [
      { label: 'Precio instalada', value: '$1,600 a $3,500' },
      { label: 'Certificada para viento', value: 'Sí' },
      { label: 'Certificada contra impacto', value: 'Disponible' },
      { label: 'Aislamiento', value: 'Comúnmente aislada' },
      { label: 'Mecanismo', value: 'Seccional normal, sube hacia arriba' },
    ],
    faq: [
      {
        question: '¿Las puertas estilo carruaje de verdad abren hacia los lados?',
        answer:
          'Casi nunca, y las que sí lo hacen son otro producto. Lo que se vende como puerta de carruaje en Florida es una seccional estándar que sube por rieles con el estilo aplicado en la cara. Las que de verdad abren hacia afuera necesitan espacio libre al frente, son más difíciles de automatizar, y encajan mal en una entrada de Florida.',
      },
      {
        question: '¿Puedo tener estilo carruaje y certificación contra impacto a la vez?',
        answer:
          'Sí, y es común en Miami-Dade y Broward. Lo que cambia la respuesta es el vidrio: los vidrios decorativos son con frecuencia lo que impide que una puerta de carruaje se certifique de forma sencilla, y además crean una abertura acristalada para la conversación del seguro. Las puertas de carruaje sólidas son la especificación más simple si usted está dentro de la HVHZ.',
      },
      {
        question: '¿Vale la pena hacerla en madera real?',
        answer:
          'En Florida, rara vez, y lo vamos a disuadir más seguido de lo que lo vamos a convencer. La madera real con esta humedad necesita rebarnizado cada dos o tres años, y a pocos kilómetros del agua salada antes. La mayoría de los dueños lo sostiene un par de ciclos y después lo deja, y una puerta de madera descuidada se ve bastante peor que una de acero. Si quiere madera genuina, presuponga el mantenimiento en lugar de esperar que no haga falta.',
      },
    ],
  },

  'composite-carriage-house': {
    name: 'Puerta de Garaje de Compuesto Estilo Carruaje',
    shortName: 'Compuesto estilo carruaje',
    metaTitle: 'Puerta de Garaje de Compuesto en Florida | Imitación Madera, Precio',
    metaDescription:
      'Las puertas con sobrepuesto de compuesto dan una veta de madera convincente sobre un núcleo de acero, desde $2,600. Lo más parecido a la madera que sobrevive la humedad de Florida.',
    construction: 'Núcleo de acero aislado con sobrepuesto de compuesto moldeado',
    insulation: 'Núcleo aislado de serie en casi todas.',
    answer:
      'Una puerta de compuesto estilo carruaje es una puerta de acero aislada con un sobrepuesto de compuesto moldeado que reproduce la veta de la madera lo bastante bien como para que casi nadie note la diferencia desde la banqueta. Instalada desde unos $2,600. Es el extremo premium de lo que tiene sentido en Florida: le da el aspecto de madera, no se pudre, no se hincha ni necesita rebarnizado, y se puede pedir teñida o pintada.',
    intro: [
      'La construcción es la razón por la que funciona aquí. La resistencia y la certificación vienen del núcleo de acero, y la apariencia viene de un sobrepuesto de compuesto que no absorbe agua. La madera real en este clima se mueve con la humedad, y una puerta que se hincha es una puerta que se traba en sus propios rieles.',
      'La veta y el tinte están bastante mejor que hace una década. A distancia de banqueta estas se leen como madera para casi todo el mundo, y a diferencia de la madera se leen igual en el año ocho.',
      'Es genuinamente cara, y el planteamiento honesto es que usted está comprando apariencia. Una puerta de compuesto y una de acero aislada estilo carruaje van a dejar fuera la misma cantidad de calor y aguantar el mismo viento. La diferencia es cómo se ve, lo cual en la superficie visible más grande de casi cualquier casa no es poca cosa.',
    ],
    bestFor: [
      'Casas donde la puerta del garaje es el elemento dominante desde la calle',
      'Dueños que quieren madera y a quienes ya les advirtieron del mantenimiento',
      'Propiedades de mayor valor donde la puerta no debería desmerecer la casa',
      'Quien ya intentó madera real en Florida una vez y no lo va a repetir',
    ],
    tradeoffs: [
      'La configuración más cara aquí, después de la madera genuina',
      'Pesada, lo que significa resortes más fuertes y un motor más potente',
      'El desempeño lo da el núcleo de acero, así que usted está pagando por apariencia',
      'El daño al sobrepuesto es más difícil de reparar de forma invisible que una abolladura en acero liso',
    ],
    quickFacts: [
      { label: 'Precio instalada', value: '$2,600 a $6,500' },
      { label: 'Certificada para viento', value: 'Sí' },
      { label: 'Certificada contra impacto', value: 'Disponible' },
      { label: 'Aislamiento', value: 'Núcleo aislado, de serie' },
      { label: 'Mantenimiento', value: 'Ninguno. Sin rebarnizado.' },
    ],
    faq: [
      {
        question: '¿De verdad parece madera?',
        answer:
          'Desde la calle, para casi todo el mundo, sí. Parado junto a la puerta con la mano encima, se nota. La comparación más útil es contra madera de ocho años en la humedad de Florida, porque ahí el compuesto sigue exactamente igual y la madera no.',
      },
      {
        question: '¿Vale más del doble que una puerta de acero lisa?',
        answer:
          'Solo si lo que usted está comprando es apariencia, y lo decimos con todas sus letras. Una puerta de compuesto y una de acero aislada con la misma certificación dejan fuera el mismo calor y aguantan el mismo viento. Lo que paga es la superficie visible más grande del frente de su casa. En algunas casas eso vale la pena y en otras no, y la decisión es suya y no nuestra.',
      },
      {
        question: '¿Qué pasa si se daña un panel?',
        answer:
          'Se repara y es más delicado que en acero. Una abolladura en acero liso a veces se trabaja o se cambia el panel con una buena coincidencia. Un sobrepuesto de compuesto tiene veta y tinte que tienen que alinear con los paneles de al lado, así que la coincidencia exacta importa más y un acabado descontinuado es un problema mayor. Vale la pena guardar los datos del modelo y del acabado en algún lugar donde los vaya a encontrar.',
      },
    ],
  },

  'full-view-aluminium': {
    name: 'Puerta de Garaje de Aluminio y Vidrio',
    shortName: 'Aluminio y vidrio',
    metaTitle: 'Puerta de Garaje de Vidrio en Florida | Aluminio, Precio Instalada',
    metaDescription:
      'Puertas de marco de aluminio y vidrio instaladas desde $2,800. Dónde funcionan en Florida, qué le hace el vidrio a la certificación, y el tema del aire salino.',
    construction: 'Marco de aluminio con paneles de vidrio o acrílico',
    insulation: 'Mínimo. Existe vidrio aislante y no es lo mismo que una puerta aislada.',
    answer:
      'Una puerta de vista completa es un marco de aluminio lleno de vidrio, instalada desde unos $2,800. Es el aspecto contemporáneo, se usa mucho en patios, salas de exhibición y construcción moderna de Florida, y trae dos preguntas propias de este estado que un vendedor quizá no le plantee: qué le hace el vidrio a su certificación y a su crédito de seguro, y cómo se comporta el aluminio con aire salino.',
    intro: [
      'El marco es de aluminio porque no se oxida, lo cual en la Florida costera es una ventaja real sobre el acero. El aluminio se corroe en lugar de oxidarse, y cerca del agua salada se pica y se pone gredoso con el tiempo, más despacio de lo que se oxida el acero pero de forma visible.',
      'El vidrio es donde viven las complicaciones de Florida. El acristalamiento se considera aparte en la certificación, el vidrio certificado contra impacto existe y es caro, y cualquier abertura acristalada entra en la evaluación de todo o nada de mitigación de viento que aplica su aseguradora. Una puerta sólida no crea una abertura acristalada. Esta sí.',
      'Nada de eso es razón para no comprarla. Es razón para tener la conversación antes y no después, sobre todo si usted está dentro de la HVHZ o busca un crédito de seguro.',
    ],
    bestFor: [
      'Casas contemporáneas y modernas de Florida donde una puerta de paneles se ve mal',
      'Garajes convertidos en gimnasio, estudio o bar donde la luz natural es el punto',
      'Fachadas comerciales, salas de exhibición y restaurantes que abren a un patio',
      'Propiedades costeras donde el aluminio dura más que el acero en el marco',
    ],
    tradeoffs: [
      'Muy poco valor de aislamiento, así que un garaje pegado a la casa se va a calentar',
      'El vidrio complica la certificación, el permiso y el crédito de seguro',
      'Pesada, y el vidrio la hace más pesada, así que resortes y motor se especifican más arriba',
      'La privacidad hay que resolverla con el tipo de vidrio: esmerilado, polarizado u opaco',
    ],
    quickFacts: [
      { label: 'Precio instalada', value: '$2,800 a $6,500' },
      { label: 'Certificada para viento', value: 'Sí' },
      { label: 'Certificada contra impacto', value: 'Disponible, depende del vidrio' },
      { label: 'Aislamiento', value: 'Mínimo' },
      { label: 'Costa', value: 'El marco de aluminio no se oxida' },
    ],
    faq: [
      {
        question: '¿Una puerta de vidrio puede certificarse contra impacto en la HVHZ?',
        answer:
          'El vidrio certificado contra impacto existe y sí se instalan puertas de vista completa dentro de la HVHZ, así que la respuesta es sí con cuidado y con costo. La especificación es más compleja que en una puerta sólida porque el acristalamiento se evalúa como parte del ensamble, y la aprobación se emite contra esa configuración exacta. Esta es de las que el contratista con licencia que saca el permiso tiene que estar en la conversación desde temprano y no al final.',
      },
      {
        question: '¿Cómo afecta el vidrio a mi seguro?',
        answer:
          'Una abertura acristalada entra en la evaluación de mitigación de viento, y el crédito por protección de aberturas normalmente es todo o nada sobre toda la envolvente. Poner una puerta de vista completa con vidrio no certificado puede afectar un crédito con el que usted contaba por otras aberturas. Pregúntele a su aseguradora específicamente por esta puerta antes de ordenar, porque enterarse después sale caro.',
      },
      {
        question: '¿El aluminio se va a corroer cerca de la playa?',
        answer:
          'Se va a desgastar, y no se va a oxidar como el acero. Espere que el acabado se ponga gredoso y algo de picadura con los años a pocos kilómetros del agua, más rápido del lado del océano. Los acabados anodizados y con pintura en polvo aguantan mejor que los pintados, y enjuagar la puerta con agua dulce cuando enjuaga cualquier otra cosa afuera de verdad le alarga la vida.',
      },
    ],
  },

  'fiberglass-door': {
    name: 'Puerta de Garaje de Fibra de Vidrio',
    shortName: 'Fibra de vidrio',
    metaTitle: 'Puerta de Garaje de Fibra de Vidrio en Florida | Costa, Precio',
    metaDescription:
      'La fibra de vidrio no se corroe en absoluto, instalada desde $1,800. Dónde le gana al acero en Florida y dónde le gana el sol a ella.',
    construction: 'Piel de fibra de vidrio sobre un bastidor de aluminio o acero',
    insulation: 'Disponible aislada, y aquí se especifica así normalmente.',
    answer:
      'Una puerta de fibra de vidrio es una piel moldeada de fibra sobre un bastidor, instalada desde unos $1,800. Su única ventaja decisiva en Florida es que la fibra de vidrio no se corroe en absoluto, lo que la hace digna de considerar en serio a la vista del agua salada donde las puertas de acero se oxidan y el aluminio se pica. Su debilidad también es Florida: la luz ultravioleta la destiñe y con el tiempo la vuelve quebradiza, así que la calidad del acabado importa más que el precio.',
    intro: [
      'La fibra de vidrio queda entre el acero y el compuesto. Se puede moldear con veta de madera de forma convincente, es mucho más ligera que el acero, y no se oxida, no se abolla ni se corroe.',
      'En una isla de barrera o una calle frente al mar esa inmunidad es todo el argumento. El acero se oxida en cada rayón con aire salino y el aluminio se pone gredoso y se pica. A la fibra de vidrio simplemente no le importa, y eso vale la pena pagarlo en los lugares donde importa.',
      'El contraargumento es el mismo sol. La fibra de vidrio barata se destiñe y puede volverse quebradiza después de años de exposición directa en Florida, y un panel quebradizo se raja en vez de abollarse. La calidad del acabado y de la resina es lo que separa una puerta que dura de una que no, lo cual hace de esta una mala categoría para comprar en el fondo del rango de precio.',
    ],
    bestFor: [
      'Islas de barrera, propiedades frente al mar y frente al intracostero',
      'Cualquier lugar donde una puerta de acero anterior se oxidó antes de tiempo',
      'Dueños que quieren aspecto de madera más ligero y más barato que el compuesto',
      'Marcos donde el menor peso ayuda a un motor viejo',
    ],
    tradeoffs: [
      'Desteñido por ultravioleta y con el tiempo fragilidad bajo el sol pleno de Florida',
      'Se raja en vez de abollarse con un golpe fuerte, y las rajaduras son más difíciles de reparar',
      'La fibra barata envejece mal, así que el fondo del rango de precio es un ahorro falso',
      'Menos opciones de estilo y color que el acero',
    ],
    quickFacts: [
      { label: 'Precio instalada', value: '$1,800 a $4,000' },
      { label: 'Certificada para viento', value: 'Sí' },
      { label: 'Certificada contra impacto', value: 'Disponible' },
      { label: 'Corrosión', value: 'Ninguna. No se oxida ni se pica.' },
      { label: 'Cuidado con', value: 'El desteñido en acabados baratos' },
    ],
    faq: [
      {
        question: '¿La fibra de vidrio es mejor que el acero en Florida?',
        answer:
          'Cerca del agua salada, muchas veces sí. Tierra adentro, normalmente no. La ventaja es la inmunidad a la corrosión, y la corrosión solo es un problema real donde el aire trae sal. En una casa tierra adentro una buena puerta de acero aislada va a durar más que una de fibra de gama media y va a costar menos, porque lo que mata a la fibra aquí es el sol, y el sol está en todos lados.',
      },
      {
        question: '¿Cuánto dura bajo el sol de Florida?',
        answer:
          'Depende mucho de la calidad del acabado y de la orientación. Una buena puerta en un marco que da al norte se va a ver bien mucho tiempo. Una barata que da al poniente recibe sol directo de la tarde todo el año y va a mostrar desteñido, y con el tiempo fragilidad, bastante antes. Esta es la categoría donde pagar más al principio de verdad le compra años.',
      },
      {
        question: '¿La fibra de vidrio puede certificarse contra impacto?',
        answer:
          'Sí, existen ensambles de fibra de vidrio certificados contra impacto y se instalan dentro de la HVHZ. Como con toda puerta certificada, la aprobación se emite contra el ensamble probado en medidas específicas, el número va en el permiso, y el contratista con licencia que saca el permiso es quien lo pone ahí.',
      },
    ],
  },

  'vinyl-door': {
    name: 'Puerta de Garaje de Vinilo',
    shortName: 'Vinilo',
    metaTitle: 'Puerta de Garaje de Vinilo en Florida | No Se Abolla, Precio',
    metaDescription:
      'Las puertas de vinilo no se oxidan, no se abollan y no necesitan pintura, instaladas desde $1,500. Dónde tienen sentido en Florida y los límites honestos.',
    construction: 'Piel de vinilo sobre un bastidor de acero o aluminio',
    insulation: 'Normalmente aislada, porque la piel de vinilo necesita un núcleo detrás.',
    answer:
      'Una puerta de vinilo es una piel de vinilo sobre un bastidor, instalada desde unos $1,500. Su argumento es la durabilidad de la apariencia y no el desempeño: no se oxida, no se abolla como el acero, el color va en todo el material así que los rayones no se ven blancos, y nunca necesita pintura. Es una buena opción para una casa con mucho movimiento y una mala si necesita certificación contra impacto para la HVHZ.',
    intro: [
      'La construcción importa. El vinilo es una piel, y la resistencia viene del bastidor y del núcleo aislante que va detrás. Por eso una puerta de vinilo casi siempre es aislada, porque algo tiene que haber ahí adentro.',
      'La razón por la que a la gente le gustan son las bicicletas y los balones. El vinilo cede y se recupera donde el acero se queda con una abolladura permanente, y como el color está en el material y no pintado encima, un rayón no deja la línea brillante que deja un rayón sobre pintura de acero.',
      'Los límites son honestos. La gama de colores es corta, la de estilos más corta, y las opciones en el extremo certificado contra impacto son escasas, así que dentro de Miami-Dade y Broward normalmente esta no es la categoría.',
    ],
    bestFor: [
      'Casas con niños, bicicletas y una entrada con mucho movimiento',
      'Dueños cansados de repintar o retocar una puerta de acero',
      'Florida tierra adentro donde no se exige certificación contra impacto',
      'Propiedades de renta donde el bajo mantenimiento le gana a la apariencia',
    ],
    tradeoffs: [
      'Colores y estilos limitados comparado con el acero',
      'Las opciones certificadas contra impacto son escasas, así que normalmente no es puerta de HVHZ',
      'El vinilo puede volverse quebradizo tras larga exposición ultravioleta',
      'No es la opción si el atractivo visual es la razón por la que está cambiando la puerta',
    ],
    quickFacts: [
      { label: 'Precio instalada', value: '$1,500 a $3,200' },
      { label: 'Certificada para viento', value: 'Sí' },
      { label: 'Certificada contra impacto', value: 'Opciones limitadas' },
      { label: 'Aislamiento', value: 'Normalmente aislada' },
      { label: 'Mantenimiento', value: 'Ninguno. Nunca necesita pintura.' },
    ],
    faq: [
      {
        question: '¿El vinilo de verdad no se abolla?',
        answer:
          'Resistente a abolladuras más que a prueba de abolladuras, y la diferencia es real. Un balón o el manubrio de una bicicleta que dejarían un pliegue permanente en acero de una capa normalmente no dejan nada en vinilo. Un carro echándose en reversa contra ella sí la va a dañar, y el daño en vinilo tiende a ser una rajadura y no una abolladura, lo cual es más difícil de dejar invisible.',
      },
      {
        question: '¿Puedo pintar una puerta de vinilo de otro color?',
        answer:
          'Por lo general no, y esto conviene saberlo antes de comprar y no después. El color está en todo el material, que es la ventaja, y la pintura no se adhiere al vinilo de forma confiable. Elija el color con el que quiera vivir, porque cambiar de opinión significa cambiar la puerta.',
      },
      {
        question: '¿El vinilo aguanta el sol de Florida?',
        answer:
          'Mejor de lo que la gente espera en cuanto a color, porque no hay pintura que se destiña, y el material sí se degrada con exposición ultravioleta prolongada y puede volverse quebradizo con muchos años. Es una opción durable en este clima más que permanente, y aplica la misma advertencia de no comprar en el fondo del rango de precio.',
      },
    ],
  },

  'wood-door': {
    name: 'Puerta de Garaje de Madera',
    shortName: 'Madera',
    metaTitle: 'Puerta de Garaje de Madera en Florida | Precio y Mantenimiento',
    metaDescription:
      'Puertas de madera real instaladas desde $3,000. Nada más se ve así y nada más le pide tanto a un dueño en Florida. El panorama honesto del mantenimiento.',
    construction: 'Madera sólida o recubierta: cedro, caoba o abeto',
    insulation: 'La madera aísla algo por sí sola, y menos que una puerta de acero aislada.',
    answer:
      'Una puerta de madera real es madera, instalada desde unos $3,000 y fácilmente más si es a la medida. Nada más se ve así. También es la configuración que más le pide a un dueño en Florida: la humedad la hincha, el ultravioleta le quita el acabado, y el aire salino acelera las dos cosas. Si la quiere, presuponga rebarnizado cada dos o tres años y cómprela sabiendo eso.',
    intro: [
      'Esta página lo va a disuadir más veces de las que lo va a convencer, y es a propósito. Sí instalamos puertas de madera y preferimos instalarle una a alguien que sabe en qué se está metiendo, que reemplazársela a alguien que no lo sabía.',
      'El problema en Florida es el ciclo de humedad. La madera toma humedad y la devuelve, o sea que se mueve, y una puerta que se hincha se traba en los rieles a los que se ajustó. El acabado es lo que mantiene la humedad afuera, y el ultravioleta de Florida es lo que le quita el acabado.',
      'En la práctica eso significa rebarnizar cada dos o tres años, antes a la vista del agua salada. Los dueños que lo sostienen tienen puertas que se ven extraordinarias en el año diez. Los que no, tienen puertas que se ven cansadas en el año cuatro y grises en el año siete, y rebarnizar entonces es un trabajo mucho mayor de lo que habría sido mantenerla.',
    ],
    bestFor: [
      'Casas con valor arquitectónico donde el compuesto se notaría y se vería mal',
      'Distritos históricos y asociaciones que especifican materiales genuinos',
      'Dueños que de verdad quieren el material y aceptan el calendario',
      'Marcos protegidos que no reciben sol directo de la tarde',
    ],
    tradeoffs: [
      'Rebarnizado cada dos o tres años, antes cerca de la costa, y no es opcional',
      'Se hincha y se mueve con la humedad de Florida, lo que afecta cómo corre en los rieles',
      'Pesada, así que resortes y motor se especifican más arriba y se desgastan más rápido',
      'Las opciones certificadas contra impacto son escasas, así que normalmente no es puerta de HVHZ',
    ],
    quickFacts: [
      { label: 'Precio instalada', value: '$3,000 a $6,500 y más' },
      { label: 'Certificada para viento', value: 'Sí' },
      { label: 'Certificada contra impacto', value: 'Opciones limitadas' },
      { label: 'Rebarnizado', value: 'Cada 2 a 3 años, antes cerca de la sal' },
      { label: 'Alternativa honesta', value: 'Compuesto estilo carruaje, el aspecto sin el calendario' },
    ],
    faq: [
      {
        question: '¿Cada cuánto hay que rebarnizar una puerta de madera en Florida?',
        answer:
          'Cada dos o tres años tierra adentro y antes a pocos kilómetros del agua salada, y una puerta que da al poniente antes todavía. Ese es el número honesto y no el del folleto. Si ese calendario suena a algo que usted no va a sostener, la puerta de compuesto estilo carruaje le da casi toda la apariencia y no le pide nada, y preferimos decírselo ahora.',
      },
      {
        question: '¿Una puerta de madera puede certificarse para huracán?',
        answer:
          'Existen puertas de madera certificadas para viento. Las opciones certificadas contra impacto son bastante más limitadas, y por eso la madera normalmente no es el material dentro de la Zona de Huracanes de Alta Velocidad. Si usted está en Miami-Dade o Broward y quiere ese aspecto, el camino del compuesto estilo carruaje normalmente es como llegar ahí cumpliendo lo que pide el permiso.',
      },
      {
        question: '¿El compuesto de verdad se le acerca tanto?',
        answer:
          'A distancia de banqueta, lo bastante como para que casi nadie note la diferencia. De cerca y con la mano encima, no. La comparación justa, eso sí, no es nueva contra nueva, es año ocho contra año ocho, y para entonces la madera mantenida se ve mejor que el compuesto mientras que la no mantenida se ve bastante peor.',
      },
    ],
  },

  'commercial-sectional': {
    name: 'Puerta Seccional Comercial',
    shortName: 'Seccional comercial',
    metaTitle: 'Puerta de Garaje Comercial en Florida | Bodega y Taller, Precio',
    metaDescription:
      'Puertas seccionales de uso rudo para bodegas, talleres y locales, instaladas desde $2,200. Vida útil en ciclos, especificación de resortes y qué cambia realmente.',
    construction: 'Acero de calibre grueso, riel y herrajes comerciales',
    insulation: 'Disponible aislada o sin aislar, según si el espacio está climatizado.',
    answer:
      'Una seccional comercial es la misma idea que una puerta residencial construida para aguantar muchos más ciclos, instalada desde unos $2,200. Lo que cambia no es principalmente el panel, es todo lo que se mueve: acero de calibre más grueso, riel y herrajes comerciales, y resortes especificados para la cantidad de ciclos que el negocio realmente le va a dar. Especificar una puerta residencial para un marco comercial es el error más común y más caro de esta categoría.',
    intro: [
      'La vida en ciclos es toda la conversación. Una casa abre su garaje cuatro veces al día. Un taller, un andén de carga o una bodega puede hacer eso antes de las nueve de la mañana, y un resorte estándar de 10,000 ciclos que a una familia le dura siete años a ese negocio le dura cuestión de meses.',
      'Así que la especificación empieza con un número real: cuántas veces al día abre esta puerta, y cuánto tiempo tiene que funcionar antes de que alguien la toque. Los resortes de alto ciclaje cuestan más al principio y salen más baratos en cualquier puerta que se use de verdad.',
      'El resto se desprende del edificio. Espacio climatizado quiere aislamiento, sin climatizar no. Una puerta en la trayectoria del viento de la costa de Florida necesita la misma conversación de certificación que una casa. Y un permiso comercial es su propio proceso, sacado por el contratista con licencia que hace el trabajo.',
    ],
    bestFor: [
      'Bodegas, talleres, andenes de carga e instalaciones de almacenamiento',
      'Talleres automotrices y cualquier marco que cicle muchas veces al día',
      'Locales y restaurantes donde la puerta es parte de la fachada',
      'Cualquier marco donde una puerta residencial ya se desgastó antes de tiempo',
    ],
    tradeoffs: [
      'Cuesta más que una puerta residencial del mismo tamaño, y ese es justamente el punto',
      'Más pesada, así que el motor y la estructura tienen que especificarse para ella',
      'Los permisos e inspecciones comerciales son su propio proceso',
      'Sobreespecificar un marco de poco uso es dinero que no hace nada',
    ],
    quickFacts: [
      { label: 'Precio instalada', value: '$2,200 a $6,500' },
      { label: 'Certificada para viento', value: 'Sí' },
      { label: 'Certificada contra impacto', value: 'Disponible' },
      { label: 'Resortes', value: 'Especificados a su conteo real de ciclos' },
      { label: 'Pregunta clave', value: 'Cuántas veces al día abre' },
    ],
    faq: [
      {
        question: '¿Qué hace que una puerta sea comercial?',
        answer:
          'Los herrajes y la clasificación de ciclos, no la etiqueta. Acero de calibre más grueso, riel comercial, bisagras y rodamientos de mayor capacidad, y resortes especificados para los ciclos que la puerta va a hacer de verdad. Usted puede poner una puerta residencial en un marco comercial y va a funcionar, brevemente, y después le va a empezar a costar una visita de servicio a la vez.',
      },
      {
        question: '¿Valen la pena los resortes de alto ciclaje?',
        answer:
          'En cualquier puerta que abra más de unas pocas veces al día, sí, y la cuenta no está ni cerca. Un resorte estándar son unos 10,000 ciclos. Las opciones de alto ciclaje llegan a 25,000, 50,000 y más. Un negocio que hace cuarenta ciclos diarios se acaba un resorte estándar en bastante menos de un año, y cada cambio es una visita más el tiempo detenido, que normalmente es la mitad más cara.',
      },
      {
        question: '¿Las puertas comerciales necesitan la misma certificación para huracán?',
        answer:
          'Aplican las mismas reglas según la dirección, y lo que está en juego muchas veces es mayor porque el marco es más grande. Una puerta comercial grande es un agujero grande en la envolvente del edificio, y dentro de la Zona de Huracanes de Alta Velocidad el requisito de impacto le aplica igual que a una casa. La aprobación va en el permiso comercial, sacado por el contratista con licencia.',
      },
    ],
  },
};
