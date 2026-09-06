/**
 * Contenido en español de la guía de compra: materiales, tipos de motor y
 * marcas, con la misma clave (slug) que products.ts.
 *
 * No es una traducción. Son los mismos hechos y los mismos precios de
 * research/fl-garage/BRIEF.md, escritos en español latinoamericano neutro
 * con trato de usted, sin guiones largos y sin signos de exclamación.
 */
import type { ProductEs, BrandEs } from './types';

export const materialEs: Record<string, ProductEs> = {
  'steel-garage-doors': {
    name: 'Puertas de Garaje de Acero',
    shortName: 'Acero',
    metaTitle: 'Puertas de Garaje de Acero en Florida | Precios',
    metaDescription:
      'Puertas de garaje de acero instaladas en Florida desde $950 hasta $3,000. Calibre, galvanizado contra la humedad y el salitre, y carga de viento.',
    answer:
      'Una puerta de garaje de acero es la opción más común en Florida y se instala desde unos $950 en una puerta sencilla certificada contra viento, y hasta unos $3,000 en una puerta doble aislada con acabado decorativo. Las versiones resistentes a impactos empiezan alrededor de $1,800. El acero es fuerte, económico y de poco mantenimiento, y sus debilidades aquí son las abolladuras y el óxido en cualquier rayón que atraviese el acabado, algo que la humedad y el salitre encuentran rápido.',
    intro: [
      'El acero es el material predeterminado en Florida porque es la forma más barata de cumplir con la carga de viento que el Código de Construcción de Florida exige en su dirección. Toda puerta de acero nueva lleva una presión de diseño, una aprobación de producto de Florida fuera de Miami-Dade y Broward, y un NOA de Miami-Dade dentro de esos dos condados. La certificación cambia la puerta: láminas de calibre más grueso, refuerzos horizontales atrás de cada sección, más soportes de riel y herrajes más pesados. Una puerta de acero resistente a impactos añade la prueba de impacto de misil grande sobre la presión de diseño y empieza cerca de $1,800 instalada.',
      'El número que importa al comparar puertas de acero es el calibre, y mientras más bajo, más grueso. Una puerta de calibre 24 resiste las abolladuras mucho mejor que una de calibre 27 o 28 de las que instalan los constructores, y en un garaje de Florida que también es bodega y taller esa diferencia vale lo que cuesta. El aislamiento importa aquí por una razón distinta a la del norte del país: un núcleo de poliuretano endurece las secciones y mantiene más fresco un garaje orientado al oeste en agosto, lo cual alivia al motor y a todo lo que usted guarda adentro.',
      'Lo que hay que entender del acero en humedad y salitre es que el galvanizado y la pintura de fábrica son la protección. Cuando un rayón llega al acero desnudo, el óxido arranca en ese punto y avanza por debajo del acabado. A pocas millas de cualquiera de las dos costas, de Jupiter a Homestead y de Naples a Clearwater, ese es el modo de falla que más vemos, y aparece primero en la sección de abajo y en los tornillos de las bisagras.',
    ],
    pros: [
      'El costo instalado más bajo entre los materiales que cumplen con la carga de viento de Florida',
      'Versiones certificadas contra viento y resistentes a impactos de todos los fabricantes grandes, con aprobación de producto de Florida y opciones con NOA de Miami-Dade',
      'Se consigue aislada, lo que endurece la puerta y mantiene el garaje más fresco en verano',
      'No hay que volver a pintarla ni barnizarla, a diferencia de la madera',
    ],
    cons: [
      'Se abolla, y una sección de acero abollada casi siempre se reemplaza en vez de repararse',
      'Se oxida en cualquier rayón que atraviese el galvanizado, lo cual es un problema real cerca de la costa',
      'Una puerta delgada de grado constructor se flexiona con el viento y se abolla con un golpe cualquiera',
    ],
    bestFor:
      'La mayoría de las casas de Florida, desde las puertas dobles de los años ochenta en Coral Springs y Brandon hasta las construcciones nuevas de Wesley Chapel y Lake Nona, y cualquier caso donde la prioridad sea cumplir con el código al menor costo y no volver a pensar en la puerta por años.',
    facts: [
      { label: 'Precio instalado', value: '$950 a $3,000' },
      { label: 'Versión resistente a impactos', value: 'Desde unos $1,800' },
      { label: 'Calibre recomendado', value: 'Calibre 24 o 25' },
      { label: 'Cuidado en la costa', value: 'Enjuague el salitre, retoque los rayones' },
    ],
    faq: [
      {
        question: '¿Qué calibre de puerta de acero conviene en Florida?',
        answer:
          'Para una casa de familia, calibre 24 o 25. Las puertas de grado constructor de muchos fraccionamientos de los años dos mil son calibre 27 o 28, que son más delgadas, se abollan con un golpe cualquiera y se flexionan más con el viento. La diferencia de precio al comprar es mucho menor que el costo de reemplazar después una sección abollada, que empieza en $250.',
      },
      {
        question: '¿Una puerta certificada contra viento es lo mismo que una puerta para huracanes?',
        answer:
          'No. Una puerta certificada contra viento resiste la presión de diseño de su dirección, y toda puerta nueva en Florida debe cumplir al menos con eso. Una puerta resistente a impactos además pasa la prueba de impacto de misil grande, y eso es lo que la mayoría entiende por puerta para huracanes. El acero certificado contra viento empieza en $950 instalado y el resistente a impactos alrededor de $1,800. En Miami-Dade y Broward la puerta necesita un NOA de Miami-Dade en cualquiera de los dos casos.',
      },
      {
        question: '¿Cómo evito que una puerta de acero se oxide cerca de la costa?',
        answer:
          'Mantenga intacto el acabado de fábrica, enjuague la puerta con agua dulce cuando lave el carro y retoque los rayones la misma semana que los note, no el año siguiente. Pida bisagras, soportes y tornillos galvanizados o de acero inoxidable, porque los herrajes se oxidan mucho antes que el panel, y un soporte inferior oxidado es un problema de seguridad porque sostiene el cable bajo la tensión del resorte.',
      },
    ],
  },
  'aluminium-garage-doors': {
    name: 'Puertas de Garaje de Aluminio',
    shortName: 'Aluminio',
    metaTitle: 'Puertas de Garaje de Aluminio en Florida | Precios',
    metaDescription:
      'Puertas de garaje de aluminio en Florida desde $1,300 hasta $4,000, y de vista completa con vidrio de impacto desde $8,000. Salitre, peso y reglas de HOA.',
    answer:
      'Una puerta de garaje de aluminio cuesta entre $1,300 y $4,000 instalada en Florida, y una puerta de vista completa con vidrio resistente a impactos llega a $8,000 y más. El aluminio no se oxida, lo que lo vuelve la opción sensata en las dos costas, y pesa menos que el acero, lo cual alivia a los resortes y al motor. Se abolla más fácil que el acero y las versiones con vidrio aíslan mal contra el calor del verano.',
    intro: [
      'El aluminio se gana su lugar en dos situaciones de Florida: a pocas millas del agua salada, donde no oxidarse vale dinero real, y en casas contemporáneas donde un marco de aluminio sostiene paneles de vidrio. La puerta de vista completa ya es parte normal de las remodelaciones modernas en Boca Raton, Fort Lauderdale, Miami y Naples, y la versión que pasa el código es un marco con vidrio laminado resistente a impactos, probado a la misma carga de viento y al mismo impacto de misil grande que cualquier otra puerta certificada.',
      'El peso es la ventaja de la que poco se habla. Una puerta de aluminio pesa menos que la equivalente de acero, lo que significa un resorte más chico, menos esfuerzo para el motor y menos masa moviéndose sobre su cabeza. Menos peso también significa que la puerta abre y cierra con más facilidad en una casa que la usa ocho o diez veces al día, algo normal aquí donde el garaje es la segunda puerta principal.',
      'Las desventajas son claras. El aluminio es más blando, así que se abolla con golpes que en el acero solo dejarían una marca. No se oxida, pero en aire salino sí se corroe en la superficie, sobre todo donde toca tornillos y bisagras de acero, así que la especificación de los herrajes importa. Y una puerta de vidrio en una entrada orientada al oeste convierte el garaje en un invernadero a las 3 de la tarde en julio, a menos que el vidrio sea polarizado o aislado, y ese es un costo que conviene preguntar antes.',
    ],
    pros: [
      'No se oxida, que es todo el argumento en la costa',
      'Pesa menos que el acero, así que carga menos al motor y a los resortes',
      'Es el único marco práctico para una puerta de vista completa con vidrio resistente a impactos',
      'Mantenimiento mínimo, un enjuague con agua dulce y nada más',
    ],
    cons: [
      'Se abolla con más facilidad que el acero',
      'Cuesta más que el acero al mismo tamaño, y las versiones con vidrio de impacto cuestan mucho más',
      'Las versiones de vista completa dejan entrar el calor del verano directo al garaje',
    ],
    bestFor:
      'Casas frente al agua y cerca de la costa en Jupiter, Delray Beach, Cape Coral, Fort Lauderdale y Clearwater, y casas contemporáneas o remodeladas en Boca Raton, Miami y Naples que quieren una puerta de vista completa con vidrio resistente a impactos.',
    facts: [
      { label: 'Precio instalado', value: '$1,300 a $4,000' },
      { label: 'Vista completa con vidrio de impacto', value: '$8,000 y más' },
      { label: 'Óxido', value: 'No se oxida, puede picarse con salitre' },
      { label: 'Resistencia a abolladuras', value: 'Menor que la del acero' },
    ],
    faq: [
      {
        question: '¿El aluminio es mejor que el acero cerca del mar en Florida?',
        answer:
          'Para el panel en sí, sí, porque no puede oxidarse. Los herrajes todavía pueden, así que una puerta de aluminio en la costa se debe pedir con tornillería inoxidable o galvanizada y rodillos de nailon con balineras selladas. Enjuáguela con agua dulce cuando lave el carro y durará más que el motor.',
      },
      {
        question: '¿Cuánto cuesta una puerta de vista completa con vidrio resistente a impactos?',
        answer:
          'Están en la parte más alta del rango del aluminio y por encima de él. Una puerta de vista completa con vidrio laminado de impacto, con aprobación de producto de Florida o NOA de Miami-Dade, y a la medida de un vano de 16 pies, suele costar $8,000 o más instalada. El vidrio es la mayor parte de ese número. El vidrio polarizado o aislado sube el precio, pero mantiene el garaje utilizable en verano.',
      },
      {
        question: '¿Mi asociación de propietarios permitirá una puerta de vidrio?',
        answer:
          'Algunas sí y otras no, y la respuesta está en las normas arquitectónicas de la comunidad, no con nosotros. Las comunidades cerradas de Weston, Wellington y Lakewood Ranch a menudo limitan el estilo y el color de la puerta, y la solicitud suele pedir el plano del fabricante y el color. Consiga la aprobación por escrito antes de ordenar, porque una puerta de vidrio hecha a la medida no se puede devolver.',
      },
    ],
  },
  'wood-garage-doors': {
    name: 'Puertas de Garaje de Madera',
    shortName: 'Madera',
    metaTitle: 'Puertas de Garaje de Madera en Florida | Precios',
    metaDescription:
      'Puertas de garaje de madera en Florida desde $2,200 hasta $9,000. Termitas, pudrición en la sección inferior, barnizado al sol y el resorte más pesado.',
    answer:
      'Una puerta de garaje de madera cuesta entre $2,200 y $9,000 instalada en Florida según la especie, el tamaño y si es hecha a la medida, y una puerta de madera certificada contra viento que cumple el Código de Construcción de Florida queda en la parte alta de ese rango. La madera se ve mejor que cualquier otro material en una casa de Coral Gables, Winter Park o el Old Northeast, pesa mucho más que el acero, necesita un resorte más pesado y en Florida enfrenta termitas, pudrición y un ciclo de barnizado de uno a dos años.',
    intro: [
      'La madera es lo que la gente quiere en una casa mediterránea de los años veinte en Coral Gables, en un bungalow de College Park o en una casa cerca del centro histórico de St. Augustine, y en esas casas nada más se ve bien. También es el material que más se vende sin explicar del todo lo que implica tenerlo en Florida, que es mucho sol, mucha agua e insectos que se lo comen.',
      'Las termitas son el primer problema. Las termitas subterráneas están activas en todo el estado y las de madera seca son comunes en el sur de Florida, y una puerta de madera parada sobre una losa, con un sello inferior que pasa mojado medio año, es un blanco fácil. La pudrición es el segundo. Las tormentas de la tarde de junio a septiembre dejan agua en la sección inferior todos los días, y donde el acabado falló el agua sube por la madera y la sección se hincha. Elija una especie que aguante la humedad, mantenga sellado el canto inferior y cuide la puerta como cuida la casa.',
      'El peso es la consecuencia mecánica. Una puerta de madera puede pesar una vez y media lo que pesa una de acero del mismo tamaño, lo que significa otra especificación de resorte y muchas veces un motor más fuerte. Y la certificación aplica igual: una puerta de madera nueva necesita aprobación de producto de Florida o NOA de Miami-Dade como cualquier otra, lo que reduce la lista de modelos y sube el precio. Las puertas de acero o de material compuesto con apariencia de madera dan el mismo aspecto en una casa estilo carruaje de Weston o Palm Beach Gardens sin nada de esto, y son lo que recomendamos a la mayoría de quienes preguntan por madera.',
    ],
    pros: [
      'Es el único material que de verdad le queda a una casa de época',
      'Se puede fabricar en cualquier medida y cualquier diseño, incluso para igualar una fachada existente',
      'Se repara de formas que un panel de acero abollado no permite, porque la madera se rellena y se vuelve a acabar',
      'Es silenciosa y sólida al usarse',
    ],
    cons: [
      'El mantenimiento más alto de todos los materiales en Florida: barnizar cada uno o dos años a pleno sol, y una sección inferior que las termitas y la pudrición atacan primero',
      'Es la más pesada, así que necesita un resorte más fuerte y carga más al motor',
      'Es la más cara, y los modelos certificados contra viento o resistentes a impactos son pocos y hechos a la medida',
    ],
    bestFor:
      'Casas de época y de arquitectura específica en Coral Gables, Winter Park, College Park, el Old Northeast de St. Petersburg y el St. Augustine histórico, donde la puerta es parte de la fachada y el dueño va a mantener el acabado.',
    facts: [
      { label: 'Precio instalado', value: '$2,200 a $9,000' },
      { label: 'Peso frente al acero', value: 'Cerca de 1.5 veces' },
      { label: 'Barnizado', value: 'Cada 1 a 2 años a pleno sol' },
      { label: 'Insectos', value: 'Revisar termitas en cada servicio' },
    ],
    faq: [
      {
        question: '¿Una puerta de madera necesita otro resorte?',
        answer:
          'Sí. El tamaño del resorte se decide por el peso de la puerta, y una puerta de madera pesa bastante más que una de acero de las mismas medidas. Una puerta con un resorte de menos no se queda quieta a media altura cuando usted la levanta con la mano, y va destruyendo en silencio el motor que la mueve. Pesamos o calculamos la puerta antes de cotizar el resorte.',
      },
      {
        question: '¿Cada cuánto hay que barnizar una puerta de madera en Florida?',
        answer:
          'Cada uno o dos años en una puerta orientada al sur o al oeste, y más tiempo si está bajo un alero profundo. Las primeras 18 pulgadas desde el piso son las que más importan, porque ahí se queda la lluvia de la tarde y sube por la madera. Si el acabado está agrietado o gredoso, el agua ya está entrando.',
      },
      {
        question: '¿Puedo conseguir una puerta de madera certificada contra huracanes?',
        answer:
          'Existen puertas de madera certificadas contra viento y algunas son resistentes a impactos, pero son hechas a la medida, pesadas y caras, y la lista es corta en la zona HVHZ donde se exige un NOA de Miami-Dade. Una puerta de acero o de material compuesto con apariencia de madera y la misma certificación empieza muy por debajo, y desde la calle casi nadie nota la diferencia. Le mostramos las dos antes de que decida.',
      },
    ],
  },
  'fiberglass-garage-doors': {
    name: 'Puertas de Garaje de Fibra de Vidrio',
    shortName: 'Fibra de vidrio',
    metaTitle: 'Puertas de Garaje de Fibra de Vidrio en Florida',
    metaDescription:
      'Puertas de garaje de fibra de vidrio en Florida desde $1,400 hasta $3,800. Sin óxido ni termitas, veteado de madera y el desvanecimiento por el sol.',
    answer:
      'Una puerta de garaje de fibra de vidrio cuesta entre $1,400 y $3,800 instalada en Florida. La fibra de vidrio no se oxida, pesa poco y toma un veteado de madera muy convincente, lo que la vuelve una respuesta común para una casa en la costa que quiere el aspecto de la madera sin termitas ni barnizado. Sus debilidades aquí son el desvanecimiento por el sol en una entrada expuesta y las grietas por un golpe fuerte, y un panel agrietado se reemplaza, no se repara.',
    intro: [
      'La fibra de vidrio queda entre el aluminio y la madera. La mayoría de estas puertas son una piel de fibra de vidrio moldeada, pegada a un marco de acero con núcleo de espuma, así que la piel no se puede oxidar y el marco es el que carga la certificación de viento. Desde la calle, una buena puerta de fibra de vidrio con veteado se lee como madera, y a las termitas no les interesa, por eso aparece tanto en Melbourne, Palm Coast, Venice y otros pueblos costeros donde una puerta de madera real sería un proyecto de mantenimiento.',
      'La salvedad en Florida es el sol. La fibra de vidrio se desvanece y se pone gredosa bajo los rayos UV más rápido que una puerta de acero con acabado de fábrica, y un acabado oscuro en una entrada orientada al oeste en Cape Coral o Port St. Lucie se verá bastante más claro en diez años. Un color claro y un alero profundo lo retrasan, y una buena capa protectora lo retrasa más. Pregunte qué cubre en realidad la garantía del acabado, porque el desvanecimiento suele quedar excluido.',
      'También se agrieta en vez de abollarse. Un golpe de defensa de carro o una escalera que se cae, que en acero solo dejarían una abolladura, pueden agrietar la piel de fibra de vidrio, y una vez agrietada la sección se reemplaza en lugar de repararse. La pregunta de la certificación es igual que con cualquier material: hay puertas de fibra de vidrio certificadas contra viento con aprobación de producto de Florida, las resistentes a impactos son menos, y en Miami-Dade y Broward la puerta necesita un NOA de Miami-Dade.',
    ],
    pros: [
      'No se oxida y las termitas no se la comen, así que sirve para la costa y para el aspecto de madera a la vez',
      'Pesa poco, lo que es fácil para los resortes y para el motor',
      'Acabados con veteado de madera convincentes, sin el mantenimiento de la madera',
      'No se abolla como el acero',
    ],
    cons: [
      'Se desvanece y se pone gredosa bajo el sol de Florida, más rápido en una entrada orientada al sur o al oeste',
      'Se agrieta con un golpe fuerte, y un panel agrietado se reemplaza, no se repara',
      'Hay menos modelos certificados contra viento y resistentes a impactos que en acero, así que la elección es más corta',
    ],
    bestFor:
      'Casas costeras desde Melbourne hasta Jupiter y desde Naples hasta Palm Coast que quieren la apariencia de la madera sin termitas ni barnizado, sobre todo en una entrada sombreada o hacia el norte.',
    facts: [
      { label: 'Precio instalado', value: '$1,400 a $3,800' },
      { label: 'Óxido y termitas', value: 'Ninguno de los dos' },
      { label: 'Sol', value: 'Se desvanece, elija colores claros' },
      { label: 'Aislamiento', value: 'Depende del núcleo, pida el valor R' },
    ],
    faq: [
      {
        question: '¿La fibra de vidrio se desvanece con el sol de Florida?',
        answer:
          'Sí, más rápido que el acero pintado de fábrica. Un tono oscuro en una puerta orientada al oeste se aclara de forma visible en unos diez años. Los colores claros, un alero profundo y una buena capa protectora lo retrasan. Es un tema estético, no estructural, pero es la queja que más escuchamos sobre la fibra de vidrio.',
      },
      {
        question: '¿La fibra de vidrio aísla bien?',
        answer:
          'Eso depende del núcleo, no de la piel. Pida el valor R en vez de suponerlo. Una puerta de fibra de vidrio con núcleo de poliuretano mantiene el garaje bastante más fresco en verano y es más rígida ante el viento. Una hueca no hace ninguna de las dos cosas.',
      },
      {
        question: '¿Puedo conseguir una puerta de fibra de vidrio certificada contra huracanes?',
        answer:
          'Los fabricantes grandes venden puertas de fibra de vidrio certificadas contra viento con aprobación de producto de Florida. La lista de las resistentes a impactos es más corta, y en la zona HVHZ la puerta necesita un NOA de Miami-Dade. Revisamos la aprobación para su dirección y su zona de viento antes de cotizar, porque el mismo modelo puede estar aprobado a una presión y no a otra.',
      },
    ],
  },
  'vinyl-garage-doors': {
    name: 'Puertas de Garaje de Vinilo',
    shortName: 'Vinilo',
    metaTitle: 'Puertas de Garaje de Vinilo en Florida | Precios',
    metaDescription:
      'Puertas de garaje de vinilo en Florida desde $1,100 hasta $2,800. No se abollan ni se oxidan, no se pueden pintar y el calor manda en el color.',
    answer:
      'Una puerta de garaje de vinilo cuesta entre $1,100 y $2,800 instalada en Florida. El vinilo no se oxida, no se abolla en el uso normal y no necesita repintarse, lo que la vuelve la puerta de menor mantenimiento que se puede comprar para una comunidad de carritos de golf o para un garaje familiar muy usado. A cambio, la variedad de colores es limitada, no se puede pintar, los tonos oscuros se ablandan con el calor y hay menos modelos certificados contra viento y resistentes a impactos que en acero.',
    intro: [
      'El vinilo es la respuesta para un garaje que recibe maltrato. Se flexiona en vez de abollarse, por eso aparece en The Villages y en las comunidades de 55 años o más de Boynton Beach y Spring Hill, donde la puerta abre y cierra varias veces al día por el carrito de golf, y en garajes familiares donde bicicletas y botes de basura pasan junto a la puerta a diario. El aire salino no le hace nada.',
      'El calor es la consideración de Florida. El vinilo se expande con el calor, y un color oscuro en una entrada orientada al oeste puede ablandarse y mostrar una leve ondulación en las secciones al caer la tarde. Los fabricantes hacen casi todas las puertas de vinilo en blanco y en colores claros justamente por eso. Elija claro, y elija una puerta con respaldo rígido o núcleo de espuma en vez de una piel hueca, y se comporta bien.',
      'El color está integrado en el material en lugar de estar pintado encima, y eso es a la vez la ventaja y la limitación. No se descarapela y no se puede repintar, así que el color que compra es el color que se queda, y a una asociación de propietarios que después cambie su paleta aprobada no se le puede responder con una mano de pintura. La variedad de estilos también es más corta que en acero, igual que la lista de modelos certificados contra viento, así que revisamos la aprobación de producto de Florida para su zona de viento antes de cotizar.',
    ],
    pros: [
      'Prácticamente no se abolla en el uso normal, lo que le queda a los garajes de carritos de golf y a los garajes familiares',
      'No se oxida y no necesita barnizarse ni repintarse',
      'El color atraviesa el material en vez de quedarse encima, así que no se descarapela',
      'Las versiones con núcleo de espuma aíslan bien y mantienen el garaje más fresco en verano',
    ],
    cons: [
      'No se puede repintar, así que la elección de color es permanente',
      'Los colores oscuros se ablandan y pueden ondularse con el calor de la tarde, así que la paleta práctica es blanco y tonos claros',
      'Hay menos fabricantes y menos modelos certificados contra viento y resistentes a impactos que en acero',
    ],
    bestFor:
      'Comunidades de carritos de golf como The Villages, desarrollos de 55 años o más, y garajes familiares muy usados en Riverview, Oviedo y Port St. Lucie donde la prioridad es no volver a pensar en la puerta.',
    facts: [
      { label: 'Precio instalado', value: '$1,100 a $2,800' },
      { label: 'Resistencia a abolladuras', value: 'La más alta de todos los materiales' },
      { label: 'Calor', value: 'Elija blanco o colores claros' },
      { label: 'Repintado', value: 'No es posible' },
    ],
    faq: [
      {
        question: '¿Se puede pintar una puerta de garaje de vinilo?',
        answer:
          'No de forma confiable. El color es parte del material y la pintura no se adhiere bien. Elija el color dando por hecho que es permanente, y consiga primero la aprobación por escrito de su asociación de propietarios.',
      },
      {
        question: '¿El vinilo se deforma con el calor de Florida?',
        answer:
          'Un vinilo oscuro en una puerta orientada al oeste puede ablandarse y mostrar una ondulación al caer la tarde, y luego asentarse durante la noche. El blanco y los colores claros no lo hacen, y por eso casi toda puerta de vinilo que se vende aquí es de esos tonos. Un núcleo de espuma o un respaldo rígido mantiene planas las secciones.',
      },
      {
        question: '¿Una puerta de vinilo es certificada contra huracanes?',
        answer:
          'Algunas puertas de vinilo tienen aprobación de producto de Florida a las presiones de viento comunes tierra adentro, y la lista se acorta a las presiones de la costa y en la zona HVHZ. Si usted está a pocas millas del mar o en Miami-Dade o Broward, espere que lo llevemos hacia el acero o el aluminio. Las puertas certificadas contra huracanes de cualquier material empiezan alrededor de $1,800 instaladas.',
      },
    ],
  },
};

export const openerEs: Record<string, ProductEs> = {
  'chain-drive-openers': {
    name: 'Motores de Cadena para Puerta de Garaje',
    shortName: 'Motor de cadena',
    metaTitle: 'Motor de Cadena para Puerta de Garaje en Florida',
    metaDescription:
      'Motores de cadena para puerta de garaje instalados en Florida desde $275 hasta $450. La tracción más barata y resistente, y también la más ruidosa.',
    noise: 'Ruidoso',
    answer:
      'Un motor de cadena para puerta de garaje cuesta de $275 a $450 instalado en Florida, y el respaldo de batería para los apagones de tormenta añade $60 a $150. Mueve la puerta con una cadena de metal, lo que lo vuelve el tipo de tracción más barato y más resistente, y también el más ruidoso. Es la opción correcta para un garaje separado o un taller, y la incorrecta para un garaje debajo de una recámara.',
    intro: [
      'El motor de cadena es el abridor original y sigue siendo el más común en los garajes de Florida, sobre todo en los fraccionamientos de los años ochenta y noventa de Coral Springs, Pembroke Pines, Brandon y Kendall, donde los constructores los instalaron por millares. Una cadena de metal corre por el riel y jala el carro, un mecanismo sencillo con muy poco que fallar.',
      'Es ruidoso, y el ruido es estructural, no incidental: cadena de metal contra riel de metal, transmitido a la estructura de la casa. En un garaje separado o debajo de un cuarto donde nadie duerme, eso no molesta. Debajo de una recámara sí, y un motor de correa cuesta apenas $75 a $150 más.',
      'El desgaste de Florida es el calor, no la cadena. Un garaje cerrado aquí llega a 100 grados F y más durante todo el verano, y lo que falla en un motor de cadena viejo es el engrane plástico dentro de la cabeza del motor, que se barre y deja el motor corriendo mientras la puerta no se mueve. Un juego de engranes es una reparación de $95 a $300. La cadena en sí necesita una lubricación ligera una vez al año, de preferencia en la afinación anual.',
    ],
    pros: [
      'El tipo de tracción más barato de comprar e instalar',
      'El más resistente, sobre todo en una puerta pesada certificada contra viento o resistente a impactos',
      'Las refacciones se consiguen en todas partes, y un juego de engranes es reparación del mismo día',
      'Se consigue con respaldo de batería y WiFi en los modelos actuales',
    ],
    cons: [
      'Es el más ruidoso por un margen claro',
      'Transmite vibración a la estructura de la casa',
      'El engrane plástico de las unidades viejas se desgasta más rápido en un garaje caliente',
    ],
    bestFor:
      'Garajes separados, talleres y cualquier garaje de Florida que no esté debajo ni al lado de una recámara, en especial donde la puerta es pesada.',
    facts: [
      { label: 'Precio instalado', value: '$275 a $450' },
      { label: 'Respaldo de batería', value: 'Añade $60 a $150' },
      { label: 'Ruido', value: 'Ruidoso' },
      { label: 'Vida típica', value: '10 a 15 años' },
    ],
    faq: [
      {
        question: '¿Un motor de cadena es demasiado ruidoso para un garaje adosado?',
        answer:
          'Depende de lo que haya arriba. Casi todos los garajes de Florida son adosados y la mayoría son de una planta, sin nada encima, y ahí un motor de cadena está bien. En una casa de dos plantas con una recámara o un cuarto de juegos sobre el garaje, la mayoría se arrepiente. El motor de correa es la mejora directa si el ruido importa.',
      },
      {
        question: '¿Cuánto dura un motor de cadena en Florida?',
        answer:
          'De diez a quince años en uso normal, siempre que la puerta esté balanceada. El calor del verano acorta la vida del engrane plástico y de la tarjeta electrónica, y una puerta desbalanceada acorta la vida de cualquier motor sin importar el tipo de tracción. Una puerta que no se queda a media altura cuando usted la levanta con la mano es lo primero que hay que arreglar.',
      },
      {
        question: '¿Le conviene un respaldo de batería a un motor de cadena?',
        answer:
          'Sí, si el garaje es su entrada principal a la casa, que es el caso en la mayoría de los hogares de Florida. Los apagones después de una tormenta pueden durar días, y el liberador manual es incómodo con el carro estacionado debajo de la puerta. El respaldo de batería añade $60 a $150 y le da una cantidad limitada de ciclos, por lo general unos 20 en las primeras 24 horas.',
      },
    ],
  },
  'belt-drive-openers': {
    name: 'Motores de Correa para Puerta de Garaje',
    shortName: 'Motor de correa',
    metaTitle: 'Motor de Correa para Puerta de Garaje en Florida',
    metaDescription:
      'Motores de correa para puerta de garaje en Florida desde $350 hasta $600. Casi sin ruido, sin lubricación, y la opción correcta si duermen arriba.',
    noise: 'Muy silencioso',
    answer:
      'Un motor de correa para puerta de garaje cuesta de $350 a $600 instalado en Florida, y el respaldo de batería añade $60 a $150. Usa una correa de hule reforzada con acero en lugar de una cadena, lo que lo vuelve mucho más silencioso y libre de mantenimiento. Es la opción correcta siempre que haya una recámara o un cuarto de juegos sobre el garaje, que es el caso de casi toda casa de dos plantas construida en Florida desde los años noventa.',
    intro: [
      'Un motor de correa es mecánicamente la misma idea que uno de cadena, con la cadena reemplazada por una correa de hule reforzada con acero. Ese único cambio elimina casi todo el ruido y toda la lubricación.',
      'Es nuestra recomendación por defecto para las casas de dos plantas que llenan los fraccionamientos de los noventa y los dos mil en Weston, Wellington, Wesley Chapel, Oviedo y Lake Nona, donde el cuarto de juegos o una recámara queda justo sobre el garaje y la puerta es lo primero que se oye a las 6 de la mañana. Casi todos los motores de correa que se venden hoy traen WiFi y una aplicación tipo MyQ, y el respaldo de batería viene incluido o como accesorio, algo que aquí importa más que en cualquier otro lugar.',
      'La duda que la gente tiene sobre la correa es el calor, y la respuesta es que una correa reforzada con acero aguanta un garaje a 100 grados F sin problema y por lo general dura más que el motor. Lo que el calor sí afecta es la tarjeta electrónica de la cabeza del motor, igual que en cualquier tipo de tracción, y por eso montamos la unidad donde el calor del ático pega menos y ponemos un supresor de picos donde los rayos son frecuentes, que en el centro de Florida es en todas partes.',
    ],
    pros: [
      'Mucho más silencioso que la cadena, casi sin ruido al usarse',
      'No hay que lubricar cadena, así que en la práctica no necesita mantenimiento',
      'Recorrido más suave, lo que es mejor para los herrajes de la puerta',
      'Se consigue con facilidad con respaldo de batería, WiFi y cámara',
    ],
    cons: [
      'Cuesta de $75 a $150 más que un motor de cadena',
      'En una puerta doble muy pesada resistente a impactos, la cadena o el motor lateral de pared siguen siendo más duraderos',
      'La tarjeta electrónica es tan sensible al calor como la de cualquier otro motor',
    ],
    bestFor:
      'Casas de dos plantas con una recámara o un cuarto de juegos sobre el garaje, y cualquier garaje adosado donde alguien duerme cerca de la puerta.',
    facts: [
      { label: 'Precio instalado', value: '$350 a $600' },
      { label: 'Respaldo de batería', value: 'Añade $60 a $150' },
      { label: 'Ruido', value: 'Muy silencioso' },
      { label: 'Mantenimiento', value: 'Ninguno en la correa' },
    ],
    faq: [
      {
        question: '¿Vale la pena pagar más por un motor de correa?',
        answer:
          'Si hay una recámara o un cuarto de juegos sobre el garaje o junto a él, sí sin dudarlo. Si el garaje está separado o la casa es de una planta y no hay nada cerca de la puerta, lo que paga de más le compra poco más que un recorrido suave.',
      },
      {
        question: '¿Las correas se rompen con el calor?',
        answer:
          'Rara vez. Una correa reforzada con acero en uso residencial suele durar más que el motor que la mueve, y el calor del garaje en Florida no cambia eso. Lo que sí rompe correas es una puerta desbalanceada, que carga la correa en cada ciclo, así que revisamos el balance de los resortes antes de colgar la unidad.',
      },
      {
        question: '¿El motor de correa trae respaldo de batería?',
        answer:
          'Muchos modelos actuales lo incluyen y el resto acepta una batería como accesorio. En cualquier caso añade $60 a $150 al precio instalado y mueve la puerta una cantidad limitada de ciclos durante un apagón por tormenta, por lo general unos 20 el primer día. La batería es una pieza de desgaste y hay que cambiarla cada dos o tres años en un garaje caliente.',
      },
    ],
  },
  'screw-drive-openers': {
    name: 'Motores de Tornillo Sinfín para Puerta de Garaje',
    shortName: 'Motor de tornillo sinfín',
    metaTitle: 'Motor de Tornillo Sinfín para Puerta de Garaje en Florida',
    metaDescription:
      'Motores de tornillo sinfín para puerta de garaje en Florida desde $300 hasta $500. Pocas piezas móviles, buen levante, y qué le hace el calor a la grasa.',
    noise: 'Moderado',
    answer:
      'Un motor de tornillo sinfín para puerta de garaje cuesta de $300 a $500 instalado en Florida, y el respaldo de batería añade $60 a $150. Mueve el carro a lo largo de una barra de acero roscada, lo que significa muy pocas piezas móviles y buena fuerza de levante en una puerta pesada. Su debilidad es el calor: la grasa de la barra se adelgaza y escurre en un garaje de verano, y una barra seca desgasta rápido el carro de plástico.',
    intro: [
      'Un motor de tornillo sinfín usa una barra de acero roscada en lugar de una cadena o una correa. Menos piezas móviles significan menos cosas que fallan, y la rosca directa le da fuerza real de levante, lo que le queda a una puerta pesada resistente a impactos. Genie fabrica la mayoría de los tornillos sinfín que vemos en los garajes de Florida.',
      'El problema en Florida es la grasa de esa barra. En un garaje que pasa la tarde a 100 grados F, el lubricante equivocado se adelgaza, escurre por la barra y junta polvo, y la barra queda seca justo donde se desliza el carro. Una barra seca se come el carro de plástico, lo que se nota primero como un rechinido y después como una puerta que se detiene a medio camino. La solución es la grasa correcta de alta temperatura una vez al año, no un motor nuevo.',
      'Los tornillos sinfín modernos manejan esto mucho mejor que las unidades de los años noventa, y un tornillo sinfín bien lubricado es un abridor confiable y rápido. Es más ruidoso que una correa y más silencioso que una cadena, y tiene menos modelos con respaldo de batería y WiFi, que es la razón principal por la que hoy instalamos menos de estos que antes.',
    ],
    pros: [
      'Muy pocas piezas móviles',
      'Buena fuerza de levante, lo que le queda a puertas pesadas certificadas contra viento o resistentes a impactos',
      'Recorrido más rápido que la cadena o la correa en la mayoría de los modelos',
      'Poco mantenimiento de rutina, más allá de una lubricación al año',
    ],
    cons: [
      'La grasa de la barra se adelgaza con el calor del verano, y una barra seca desgasta el carro rápido',
      'Más ruidoso que la correa, aunque más silencioso que la cadena',
      'Menos modelos con respaldo de batería y WiFi que en cadena o correa',
    ],
    bestFor:
      'Puertas pesadas o de medida especial en una casa de una planta sin nada encima del garaje, y dueños que van a cumplir con la lubricación anual.',
    facts: [
      { label: 'Precio instalado', value: '$300 a $500' },
      { label: 'Respaldo de batería', value: 'Añade $60 a $150 en modelos actuales' },
      { label: 'Ruido', value: 'Moderado' },
      { label: 'Mantenimiento', value: 'Grasa de alta temperatura en la barra una vez al año' },
    ],
    faq: [
      {
        question: '¿Mi motor de tornillo sinfín rechina y se para a medio camino?',
        answer:
          'Por lo general no está acabado. Una barra seca y un carro de plástico gastado son la causa más común, y un carro nuevo más una lubricación correcta de alta temperatura lo resuelve por $95 a $300. Si aun así batalla, lo siguiente que revisamos es el ajuste de fuerza y el balance de los resortes.',
      },
      {
        question: '¿Qué grasa se le pone a un tornillo sinfín en Florida?',
        answer:
          'El lubricante de litio o de silicón que indique el fabricante, no aceite en aerosol ni grasa de uso general. El aceite en aerosol se evapora en semanas en un garaje caliente y la grasa espesa junta polvo. Una capa delgada a lo largo de toda la barra una vez al año, de preferencia en la afinación anual, es suficiente.',
      },
      {
        question: '¿Le puedo agregar respaldo de batería a un tornillo sinfín?',
        answer:
          'En los modelos actuales sí, y añade $60 a $150. Los tornillos sinfín viejos casi nunca la aceptan, y si su preocupación principal son los apagones después de una tormenta, un motor de correa o de cadena con batería incluida es mejor compra al mismo precio.',
      },
    ],
  },
  'direct-drive-openers': {
    name: 'Motores de Transmisión Directa para Puerta de Garaje',
    shortName: 'Transmisión directa',
    metaTitle: 'Motor de Transmisión Directa en Florida | Precios',
    metaDescription:
      'Motores de transmisión directa para puerta de garaje en Florida desde $400 hasta $600. Una sola pieza móvil, muy silencioso y sin engrane plástico.',
    noise: 'Muy silencioso',
    answer:
      'Un motor de transmisión directa para puerta de garaje cuesta de $400 a $600 instalado en Florida, y el respaldo de batería añade $60 a $150 donde se ofrece. El motor mismo viaja por el riel, así que todo el sistema tiene una sola pieza móvil y no lleva engrane plástico que se barra en un garaje caliente. Es muy silencioso, muy confiable y tiene las garantías más largas de todos los tipos de tracción.',
    intro: [
      'La transmisión directa invierte el arreglo de siempre. En lugar de un motor fijo que jala una cadena o una correa, el motor va montado en el carro y se impulsa a sí mismo sobre una cadena fija dentro del riel.',
      'Una sola pieza móvil es todo el argumento, y funciona. Los motores de transmisión directa están entre los más confiables que se venden y suelen traer las garantías de fábrica más largas de la categoría. Para un garaje de Florida eso es una ventaja real, porque la pieza que falla primero en un motor de cadena o de correa después de años a 100 grados F es el engrane plástico de la cabeza, y la transmisión directa no lo tiene.',
      'Son silenciosos, del mismo nivel que un motor de correa, y le quedan a las mismas casas de dos plantas con una recámara sobre el garaje. La razón por la que son menos comunes aquí es simplemente el precio y el número más chico de fabricantes que los hacen, lo que también significa menos opciones de respaldo de batería y WiFi y más refacciones específicas de marca.',
    ],
    pros: [
      'Una sola pieza móvil, así que hay muy poco que falle',
      'No lleva engrane plástico, que es la pieza que el calor mata en otros motores',
      'Muy silencioso, comparable al motor de correa',
      'Las garantías más largas de la categoría',
    ],
    cons: [
      'Más caro que la cadena o la correa',
      'Menos fabricantes, así que menos opciones de respaldo de batería y WiFi',
      'Las refacciones son específicas de marca y pueden tardar días en llegar',
    ],
    bestFor:
      'Garajes adosados donde importan tanto el silencio como la confiabilidad a largo plazo, y dueños que prefieren pagar una vez en lugar de cambiar un juego de engranes en el año seis.',
    facts: [
      { label: 'Precio instalado', value: '$400 a $600' },
      { label: 'Respaldo de batería', value: 'Añade $60 a $150 donde se ofrece' },
      { label: 'Ruido', value: 'Muy silencioso' },
      { label: 'Piezas móviles', value: 'Una' },
    ],
    faq: [
      {
        question: '¿Transmisión directa o motor de correa?',
        answer:
          'Los dos son silenciosos. La transmisión directa tiene garantía más larga y no lleva engrane que se barra con el calor. El motor de correa tiene más modelos, y el respaldo de batería y el WiFi vienen de serie en más de ellos. Para la mayoría de las casas de Florida cualquiera de los dos es buena respuesta, y le decimos cuál instalaríamos en su garaje y por qué.',
      },
      {
        question: '¿La transmisión directa tiene respaldo de batería?',
        answer:
          'Algunos modelos lo ofrecen y añade $60 a $150 donde está disponible. Si un apagón por tormenta es su primera preocupación, revise que la unidad específica acepte batería antes de elegir transmisión directa, porque son menos las que la aceptan que entre los motores de correa.',
      },
      {
        question: '¿Cuánto dura un motor de transmisión directa?',
        answer:
          'Quince años o más en uso residencial normal, y las garantías de fábrica lo reflejan. La tarjeta electrónica sigue siendo electrónica dentro de un garaje caliente, así que un supresor de picos en el contacto es un seguro barato en los meses de rayos, de junio a septiembre.',
      },
    ],
  },
  'jackshaft-wall-mount-openers': {
    name: 'Motores Laterales de Pared (Jackshaft)',
    shortName: 'Motor lateral de pared',
    metaTitle: 'Motor Lateral de Pared (Jackshaft) en Florida',
    metaDescription:
      'Motores laterales de pared jackshaft en Florida desde $450 hasta $800. Liberan el techo, caben con poca altura libre y giran el tubo de torsión.',
    noise: 'Silencioso',
    answer:
      'Un motor lateral de pared, o jackshaft, cuesta de $450 a $800 instalado en Florida, y el respaldo de batería añade $60 a $150 cuando no viene incluido. Se monta en la pared junto a la puerta y gira directamente el tubo de torsión, así que no necesita riel en el techo y solo pide unas pulgadas de altura libre. Es la respuesta para un garaje de los años cincuenta con poca altura, para un garaje de techo alto con tapanco de almacenamiento y para una puerta pesada resistente a impactos con sistema de torsión.',
    intro: [
      'Un motor jackshaft elimina por completo el riel del techo. Se atornilla a la pared junto a la puerta y gira directamente el tubo de torsión, lo que libera todo el techo y solo necesita unas pulgadas de espacio arriba de la puerta.',
      'Eso resuelve dos garajes de Florida muy distintos. El primero es la puerta sencilla de los años cincuenta a setenta en Hialeah, el Kendall viejo, el este de Hollywood, St. Petersburg y los barrios viejos de Orlando, donde no hay espacio arriba de la puerta para un riel estándar. El segundo es lo contrario: las construcciones nuevas de Lake Nona, Wesley Chapel, Parkland y Cape Coral con techos de 10 y 12 pies, donde el dueño quiere racks de almacenamiento o un tapanco y un riel en medio del techo le estorba.',
      'Requiere un sistema de resortes de torsión, porque gira el tubo, y requiere una puerta bien balanceada. Eso lo vuelve buena pareja para una puerta pesada resistente a impactos, que casi siempre va en torsión, y mala pareja para una puerta vieja de resortes de extensión, a menos que convirtamos los resortes como parte del trabajo. Casi todas estas unidades incluyen respaldo de batería o lo aceptan, y el cerrojo automático que traen es una ventaja de seguridad real en una puerta que además es la entrada principal.',
    ],
    pros: [
      'Casi no necesita altura libre, así que cabe donde nada más cabe',
      'Libera todo el techo del garaje para racks de almacenamiento o un tapanco',
      'Gira directamente el tubo de torsión, lo que le queda a puertas pesadas resistentes a impactos',
      'Silencioso, con cerrojo automático y respaldo de batería en casi todos los modelos',
    ],
    cons: [
      'Cuesta más que cualquier motor montado en riel',
      'Requiere resortes de torsión, no de extensión',
      'Requiere una puerta bien balanceada y no tolera una en mal estado',
    ],
    bestFor:
      'Garajes de poca altura de los años cincuenta a setenta en Hialeah, Kendall, Hollywood y St. Petersburg, garajes de techo alto con tapanco en los fraccionamientos nuevos, y puertas pesadas resistentes a impactos con sistema de torsión.',
    facts: [
      { label: 'Precio instalado', value: '$450 a $800' },
      { label: 'Respaldo de batería', value: 'Añade $60 a $150, incluido en algunos modelos' },
      { label: 'Altura libre necesaria', value: 'Unas pocas pulgadas' },
      { label: 'Tipo de resorte requerido', value: 'Torsión' },
    ],
    faq: [
      {
        question: '¿Cuánta altura libre necesita un motor estándar?',
        answer:
          'Un motor de riel estándar suele necesitar de 12 a 14 pulgadas arriba de la puerta, y los kits de perfil bajo lo reducen a unas 8. Por debajo de eso, el motor lateral de pared es la respuesta, y en los garajes viejos de puerta sencilla de Hialeah y St. Petersburg muchas veces es el único que cabe.',
      },
      {
        question: '¿Le puedo poner un jackshaft a cualquier puerta?',
        answer:
          'Necesita un sistema de resortes de torsión y una puerta correctamente balanceada. Si su puerta trabaja con resortes de extensión, la conversión a torsión es parte del trabajo y se cotiza aparte en lugar de esconderse en el total. Una puerta pesada certificada contra huracanes con resortes de torsión es el caso ideal.',
      },
      {
        question: '¿Un jackshaft funciona durante un apagón?',
        answer:
          'Con respaldo de batería sí, por una cantidad limitada de ciclos. Sin él, el liberador manual es un cordón en el motor sobre la pared en lugar de una manija en medio del techo, así que se alcanza más fácil con el carro debajo de la puerta. Casi todas estas unidades incluyen la batería o la aceptan por $60 a $150.',
      },
    ],
  },
};

export const brandEs: Record<string, BrandEs> = {
  liftmaster: {
    metaTitle: 'Reparación de Motores LiftMaster en Florida | Desde $95',
    metaDescription:
      'Reparación e instalación de motores LiftMaster en toda Florida. Reparación desde $95, instalación desde $275, respaldo de batería y MyQ configurados.',
    answer:
      'Reparamos e instalamos motores LiftMaster para puerta de garaje en toda Florida. La reparación empieza en $95 y un LiftMaster nuevo instalado empieza en $275, con el respaldo de batería añadiendo $60 a $150. LiftMaster es la marca de canal profesional del mismo fabricante que Chamberlain, y la disponibilidad de refacciones es la mejor de la categoría. Somos una empresa independiente, no un distribuidor ni un centro de servicio autorizado de LiftMaster.',
    intro: [
      'LiftMaster es la marca que más instalan los técnicos profesionales, y es la que más vemos en los garajes de Florida, desde los motores de cadena que los constructores colgaron en los años noventa hasta los de correa y los laterales de pared que hoy se ponen en casas nuevas. Comparte fabricante con Chamberlain, que vende al detalle, y muchos componentes son intercambiables entre las dos.',
      'La ventaja práctica son las refacciones. Las tarjetas electrónicas, los módulos de recorrido, los sensores de seguridad, los juegos de engrane y catarina, las baterías y los controles para unidades LiftMaster se consiguen con facilidad, lo que significa que reparar una unidad de diez años o más es posible de verdad y no solo en teoría. LiftMaster también vende respaldo de batería y WiFi MyQ en casi toda su línea, que son las dos funciones que más importan en un estado con apagones por tormenta y un garaje que además es la puerta principal.',
      'Somos una empresa independiente de reparación e instalación. No somos distribuidor ni centro de servicio autorizado de LiftMaster y no decimos serlo. Instalamos y reparamos LiftMaster porque es lo que hay en la mayoría de los garajes y lo que más nos piden, y cotizamos cada trabajo por escrito antes de tocarlo.',
    ],
    common: [
      'Desgaste del engrane y la catarina en motores de cadena después de años en un garaje caliente, que se nota como un motor que corre sin mover la puerta',
      'Falla de la tarjeta electrónica después de un pico por rayo, lo más común de junio a septiembre',
      'Fallas de los sensores de seguridad, por desalineación o por el sol bajo de la tarde pegando en el ojo eléctrico de una puerta orientada al oeste',
      'Baterías de respaldo que ya no retienen carga después de dos o tres veranos',
    ],
    faq: [
      {
        question: '¿Vale la pena reparar mi LiftMaster?',
        answer:
          'Por lo general sí, si tiene menos de unos quince años y la falla es un juego de engranes, un sensor, una batería o una tarjeta. Si la reparación se acerca a la mitad del precio de una unidad nueva, o si el motor es anterior a 1993 y no tiene ojos de seguridad, el reemplazo desde $275 es mejor gasto y se lo decimos.',
      },
      {
        question: '¿Puedo usar un control Chamberlain con un motor LiftMaster?',
        answer:
          'Muchas veces sí, porque comparten fabricante y sistema de códigos. Depende del año y del sistema de seguridad de su unidad, y el color del botón de aprendizaje en la cabeza del motor nos dice cuál tiene.',
      },
    ],
  },
  chamberlain: {
    metaTitle: 'Reparación de Motores Chamberlain en Florida | Desde $95',
    metaDescription:
      'Reparación e instalación de motores Chamberlain en toda Florida. Reparación desde $95, instalación desde $275, MyQ y respaldo de batería configurados.',
    answer:
      'Reparamos e instalamos motores Chamberlain para puerta de garaje en toda Florida. La reparación empieza en $95 y la instalación en $275, con el respaldo de batería añadiendo $60 a $150. Chamberlain es la marca de venta al detalle del mismo fabricante que LiftMaster, así que la mayoría de las piezas internas son compartidas. Somos una empresa independiente, no un distribuidor ni un centro de servicio autorizado de Chamberlain.',
    intro: [
      'Chamberlain es la contraparte de venta al detalle de LiftMaster, hecha por el mismo fabricante y vendida en las tiendas grandes que anclan cada suburbio de Florida. Muchas veces son el mismo mecanismo en otra carcasa, lo cual es buena noticia para la reparación.',
      'Las llamadas de Chamberlain que más recibimos son de unidades compradas e instaladas por el propio dueño, donde la falla resulta ser la instalación y no el motor: sensores montados demasiado alto, límites de recorrido que nunca se ajustaron a la puerta, o la unidad colgada de un travesaño del techo que nunca se hizo para cargarla. En un garaje caliente aparecen las mismas fallas de engrane y de tarjeta que en LiftMaster, y en el mismo calendario.',
      'Somos una empresa independiente de reparación e instalación, no un distribuidor ni un centro de servicio autorizado de Chamberlain, y lo decimos. Si su unidad está dentro de la garantía del fabricante se lo avisamos antes de empezar, porque una pieza en garantía de Chamberlain más nuestra mano de obra suele ser el camino más barato.',
    ],
    common: [
      'Sensores de seguridad montados por arriba de las 6 pulgadas recomendadas, así que no detectan obstrucciones, o cegados por el sol bajo en una entrada orientada al oeste',
      'Límites de recorrido y de fuerza dejados en los valores de fábrica en lugar de ajustarse a la puerta',
      'Desgaste de engrane y catarina en unidades de cadena viejas después de años de calor de verano',
      'Problemas de conexión MyQ después de cambiar de router o de un apagón',
    ],
    faq: [
      {
        question: '¿Instalé yo mismo un Chamberlain y la puerta se regresa?',
        answer:
          'Casi siempre los sensores de seguridad están desalineados o montados demasiado alto, o la fuerza de bajada está muy baja para la puerta. Las dos cosas se corrigen rápido. También vale la pena revisar que la puerta esté balanceada, porque un motor peleando con una puerta pesada dispara sus propios límites de seguridad.',
      },
      {
        question: '¿Mi MyQ de Chamberlain dejó de funcionar después de la tormenta?',
        answer:
          'Por lo general el motor perdió el enlace WiFi cuando volvió la luz, o el router tomó una dirección nueva. Volver a enlazarlo toma unos minutos. Si la unidad no enciende del todo, lo siguiente que revisamos es la tarjeta o la batería, y un pico de corriente durante el apagón suele ser la causa.',
      },
    ],
  },
  genie: {
    metaTitle: 'Reparación de Motores Genie en Florida | Desde $95',
    metaDescription:
      'Reparación e instalación de motores Genie en toda Florida. Reparación desde $95, instalación desde $275, lubricación del tornillo sinfín y controles.',
    answer:
      'Reparamos e instalamos motores Genie para puerta de garaje en toda Florida. La reparación empieza en $95 y la instalación en $275, con el respaldo de batería añadiendo $60 a $150. Genie es la principal alternativa a la familia LiftMaster y Chamberlain, y está detrás de la mayoría de los motores de tornillo sinfín de los garajes de Florida. Somos una empresa independiente, no un distribuidor ni un centro de servicio autorizado de Genie.',
    intro: [
      'Genie es la mayor alternativa independiente a la familia LiftMaster y lleva décadas en los garajes de este país. Buena parte de los motores de tornillo sinfín que vemos en los fraccionamientos de Florida de los años noventa y dos mil son unidades Genie, y las líneas actuales de correa y de motor lateral de pared aparecen en construcciones nuevas.',
      'Dos cosas salen en las llamadas de Genie más que en otras marcas. La primera es la barra del tornillo sinfín quedándose seca con el calor del verano, lo que desgasta el carro y hace rechinar la unidad. La segunda son los controles: los modelos Genie viejos usaron un sistema de códigos distinto al de la familia LiftMaster, y esa es la fuente más común de confusión cuando alguien compra un control de repuesto en una ferretería. Lo que hace que un control funcione es que el sistema de códigos coincida con la unidad, no la marca de la caja.',
      'Somos una empresa independiente de reparación e instalación, no un distribuidor ni un centro de servicio autorizado de Genie. Llevamos los juegos de carro, los sensores y los controles más comunes de las unidades que más vemos, y cada trabajo se cotiza por escrito antes de empezar.',
    ],
    common: [
      'Desgaste del carro y del riel en unidades de tornillo sinfín cuando la barra se queda seca con el calor',
      'Fallas al enlazar controles y teclados después de cambiar la pila o por un sistema de códigos que no coincide',
      'Fallas del haz de seguridad en sensores Safe-T-Beam viejos, y reflejo del sol en puertas orientadas al oeste',
      'Falla de la tarjeta electrónica en unidades de más de unos doce años, muchas veces después de un pico por rayo',
    ],
    faq: [
      {
        question: '¿Por qué mi control nuevo no se enlaza con el Genie?',
        answer:
          'Casi siempre es un sistema de códigos que no coincide. Genie ha usado varios a lo largo de los años, y el control tiene que coincidir con el de su unidad. El número de modelo en la carcasa del motor nos dice cuál tiene.',
      },
      {
        question: '¿Mi Genie de tornillo sinfín rechina en verano?',
        answer:
          'Por lo general no está acabado. La grasa de la barra se adelgazó y escurrió con el calor, y el carro de plástico se está desgastando sobre una barra seca. Un carro nuevo más una lubricación correcta de alta temperatura es una reparación de $95 a $300. Si el motor mismo está fallando en una unidad de más de doce años, el reemplazo desde $275 es mejor gasto.',
      },
    ],
  },
  clopay: {
    metaTitle: 'Puertas de Garaje Clopay en Florida | Reparación',
    metaDescription:
      'Reparación, cambio de sección e instalación de puertas Clopay en Florida. Puertas nuevas desde $950, secciones desde $250, WindCode y NOA por escrito.',
    answer:
      'Reparamos e instalamos puertas de garaje Clopay en toda Florida. El reemplazo de sección empieza en $250 y una puerta Clopay nueva certificada contra viento e instalada empieza en $950, con las resistentes a impactos desde unos $1,800. Clopay es el fabricante residencial de puertas más grande de Norteamérica, su programa WindCode cubre las presiones de viento de Florida y la disponibilidad de secciones suele ser buena. Somos una empresa independiente, no un distribuidor de Clopay.',
    intro: [
      'Clopay es el fabricante de puertas de garaje residenciales más grande de Norteamérica, y es la marca detrás de buena parte de las puertas de las casas de Florida, incluidas muchas vendidas con nombre de tienda. Su programa WindCode es la forma en que Clopay clasifica las puertas por presión de viento, y sus líneas para Florida llevan aprobación de producto de Florida, con versiones con NOA de Miami-Dade para la zona HVHZ. Ajustamos la certificación a su dirección y su zona de viento y la documentamos en el permiso.',
      'Para las reparaciones, esa escala es una ventaja. Los perfiles de sección se mantienen en producción más tiempo que en fabricantes chicos, así que reemplazar un panel dañado en una puerta Clopay de diez años es posible con más frecuencia que en una marca de nicho. El detalle en una puerta de Florida es el color: diez años de sol desvanecen el acabado, y una sección nueva junto a una desvanecida se nota desde la calle.',
      'Somos una empresa independiente de reparación e instalación. No somos distribuidor ni instalador autorizado de Clopay y no decimos serlo. Instalamos Clopay porque se consigue, está certificada y es reparable, y le mostramos el documento de aprobación de la puerta que cotizamos.',
    ],
    common: [
      'Daño en la sección inferior por la lluvia diaria en el sello y por golpes, reemplazable si el perfil sigue vigente',
      'Óxido en bisagras, rodillos y soporte inferior en puertas a pocas millas de la costa',
      'Colores descontinuados difíciles de igualar en puertas desvanecidas de más de unos diez años',
      'Refuerzos y soportes de riel faltantes o flojos, de los que depende la certificación de viento',
    ],
    faq: [
      {
        question: '¿Pueden conseguir una sección Clopay para una puerta vieja?',
        answer:
          'Muchas veces sí, porque Clopay mantiene sus perfiles en producción más tiempo que la mayoría. El color es lo difícil de igualar en una puerta que lleva una década desvaneciéndose bajo el sol de Florida. Revisamos la disponibilidad y le mostramos la comparación honesta antes de que se comprometa, y le decimos cuándo conviene más una puerta nueva certificada desde $950.',
      },
      {
        question: '¿Una puerta Clopay WindCode es una puerta para huracanes?',
        answer:
          'WindCode es el sistema de clasificación, no un producto en particular. Una puerta WindCode clasificada para la presión de diseño de su casa está certificada contra viento y cumple el Código de Construcción de Florida. Una puerta resistente a impactos añade la prueba de misil grande y es lo que la mayoría entiende por puerta para huracanes. Las dos existen en la línea Clopay, y en Miami-Dade y Broward la puerta debe llevar un NOA de Miami-Dade.',
      },
    ],
  },
  amarr: {
    metaTitle: 'Puertas de Garaje Amarr en Florida | Reparación',
    metaDescription:
      'Reparación, cambio de sección e instalación de puertas Amarr en Florida. Puertas nuevas desde $950, secciones desde $250, estilo carruaje y NOA.',
    answer:
      'Reparamos e instalamos puertas de garaje Amarr en toda Florida. El reemplazo de sección empieza en $250 y una puerta Amarr nueva certificada contra viento e instalada empieza en $950, con las resistentes a impactos desde unos $1,800. Amarr es conocida por su línea estilo carruaje, común en Weston, Palm Beach Gardens y Lakewood Ranch, y sus líneas para Florida llevan aprobación de producto de Florida y NOA de Miami-Dade. Somos una empresa independiente, no un distribuidor de Amarr.',
    intro: [
      'Amarr es un fabricante grande de Norteamérica cuya línea estilo carruaje aparece seguido en el tipo de casa donde la puerta es parte de la fachada, que en Florida son las comunidades planeadas de Weston, Wellington, Palm Beach Gardens, Lakewood Ranch y Naples. Sus líneas certificadas contra viento llevan aprobación de producto de Florida, con versiones con NOA de Miami-Dade para la zona HVHZ, y ajustamos la aprobación a su zona de viento antes de cotizar.',
      'El estilo carruaje cambia el panorama de la reparación. Los herrajes decorativos y los perfiles de panel específicos están ligados al modelo, así que una sección dañada en una puerta de carruaje es primero una pregunta de disponibilidad y después de precio. Las manijas y las bisagras tipo correa decorativas también son lo primero que se oxida en una puerta costera, y cambiarlas por las versiones de acero inoxidable es un trabajo chico que mantiene la puerta viéndose bien.',
      'Somos una empresa independiente de reparación e instalación, no un distribuidor ni instalador autorizado de Amarr, y lo decimos. Cada sección, juego de herrajes y puerta nueva se cotiza por escrito con el documento de aprobación adjunto.',
    ],
    common: [
      'Herrajes decorativos oxidándose por el aire salino en puertas estilo carruaje',
      'Disponibilidad del perfil de sección en modelos viejos descontinuados',
      'Desgaste normal de bisagras, rodillos y balineras, más rápido en las costas',
      'Errores en la especificación del resorte, donde una puerta aislada o resistente a impactos, que pesa más, quedó con un resorte estándar',
    ],
    faq: [
      {
        question: '¿Una puerta estilo carruaje es más difícil de reparar?',
        answer:
          'El mecanismo es igual al de cualquier puerta seccional. Lo que cambia son las piezas: los herrajes decorativos y los perfiles de panel están ligados al modelo, así que hay que revisar la disponibilidad antes de darle un número real. El herraje es la parte fácil. Un perfil descontinuado puede significar una puerta nueva.',
      },
      {
        question: '¿Una puerta de carruaje Amarr pasa mi asociación de propietarios y el código de viento?',
        answer:
          'La pregunta de la asociación es de estilo y color, y vive en sus normas arquitectónicas. La pregunta del código es de certificación, y Amarr vende estilos de carruaje en versiones certificadas contra viento y resistentes a impactos, con aprobación de producto de Florida o NOA de Miami-Dade. Le entregamos el plano del fabricante y el número de aprobación para las dos solicitudes.',
      },
    ],
  },
  'wayne-dalton': {
    metaTitle: 'Puertas de Garaje Wayne Dalton en Florida | Reparación',
    metaDescription:
      'Reparación, cambio de sección e instalación de puertas Wayne Dalton en Florida. Puertas nuevas desde $950, secciones desde $250, resortes TorqueMaster.',
    answer:
      'Reparamos e instalamos puertas de garaje Wayne Dalton en toda Florida. El reemplazo de sección empieza en $250 y una puerta Wayne Dalton nueva certificada contra viento e instalada empieza en $950, con las resistentes a impactos desde unos $1,800. Wayne Dalton es conocida por su sistema de resortes cerrado TorqueMaster, y sus líneas certificadas contra viento llevan aprobación de producto de Florida y NOA de Miami-Dade. Somos una empresa independiente, no un distribuidor de Wayne Dalton.',
    intro: [
      'Wayne Dalton es uno de los fabricantes grandes de puertas residenciales y fue una elección común de los constructores en los fraccionamientos de los años noventa y dos mil de Pembroke Pines, Brandon, Oviedo y Port St. Lucie. Sus líneas certificadas contra viento llevan aprobación de producto de Florida, con versiones con NOA de Miami-Dade para la zona HVHZ, y las uniones de sección que no pellizcan los dedos, presentes en muchas de sus puertas de acero, son una ventaja de seguridad real en una puerta que usan niños.',
      'Lo que distingue a Wayne Dalton para la reparación es el sistema de resortes TorqueMaster, que mete los resortes dentro del tubo de torsión en lugar de ponerlos encima. Es más limpio y más seguro en el uso normal, pero cuando un resorte se rompe las piezas son específicas de ese sistema y el procedimiento de tensado es distinto, y muchas empresas no lo tocan. Nosotros sí, y donde las piezas ya no existen cotizamos la conversión a un sistema de torsión estándar para que la puerta siga funcionando.',
      'Somos una empresa independiente de reparación e instalación, no un distribuidor ni instalador autorizado de Wayne Dalton, y lo decimos. Resortes, secciones y puertas nuevas se cotizan por escrito, y en una puerta nueva le mostramos la aprobación de producto de Florida o el NOA para su zona de viento.',
    ],
    common: [
      'Fallas de resortes TorqueMaster, con piezas específicas del sistema y un procedimiento de tensado que muchas empresas evitan',
      'Daño en la sección inferior y en el sello por la lluvia diaria de la temporada húmeda',
      'Óxido en bisagras, rodillos y soportes en puertas costeras',
      'Disponibilidad del perfil de sección en puertas de los años noventa y principios de los dos mil',
    ],
    faq: [
      {
        question: '¿Se rompió mi resorte Wayne Dalton y dos empresas no lo quisieron tocar?',
        answer:
          'Casi con seguridad es un sistema TorqueMaster, con los resortes encerrados en el tubo. Las piezas y el procedimiento de tensado son distintos a los de un resorte de torsión estándar, y muchos técnicos no están equipados para eso. Nosotros los reemplazamos dentro del rango de $150 a $350 por resorte, hacia la parte alta por el costo de las piezas, y donde ya no hay piezas convertimos a torsión estándar y lo cotizamos por escrito.',
      },
      {
        question: '¿Puedo conseguir una puerta Wayne Dalton certificada para Miami-Dade?',
        answer:
          'Sí. Wayne Dalton vende puertas con NOA de Miami-Dade para la zona HVHZ y con aprobación de producto de Florida para el resto del estado. Cuál le corresponde depende de su presión de diseño y de si quiere certificada contra viento o resistente a impactos, y documentamos la aprobación en el permiso.',
      },
    ],
  },
};
