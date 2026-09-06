/**
 * Bahía de Tampa: espejo en español de las ocho páginas de área de
 * servicio de Hillsborough, Pinellas, Pasco, Hernando y Polk, con las
 * mismas claves que cities/tampa-bay.ts.
 *
 * La región queda fuera de la Zona de Huracanes de Alta Velocidad. Una
 * puerta de reemplazo necesita una aprobación de producto de Florida
 * para la carga de viento de la dirección y un permiso de construcción,
 * no una NOA de Miami-Dade, y cada entrada lo dice a su manera porque la
 * pregunta sale en cada cotización de reemplazo.
 */

import type { CityEs } from '../types';

export const tampaBayCitiesEs: Record<string, CityEs> = {
  /* ---------------- Condado de Hillsborough ---------------- */
  'tampa': {
    metaTitle: 'Reparación de Puertas de Garaje en Tampa | Desde $150',
    metaDescription:
      'Reparación de puertas de garaje en Tampa, FL. Resortes desde $150, motor desde $275 y daño de tormenta desde $150. Servicio el mismo día en Hillsborough.',
    answer:
      'La reparación de una puerta de garaje en Tampa comienza en $150 por resorte, $95 por reparación de cable y $275 por un motor nuevo instalado. Trabajamos toda la ciudad, desde los garajes de callejón de Hyde Park y Seminole Heights hasta las dobles de Carrollwood de los años setenta y las puertas más nuevas de Westchase y Tampa Palms, con servicio el mismo día los siete días de la semana.',
    intro: [
      'Los garajes de Tampa dicen en qué década se construyó la calle. Los bungalós de South Tampa y Seminole Heights, de los años veinte a los cincuenta, tienen un garaje separado sobre el callejón, muchas veces con una puerta de 8 pies, poca altura libre y un marco de madera que lleva décadas aguantando la lluvia de la tarde. Carrollwood se construyó en los setenta y ochenta con puertas dobles pegadas a la casa, Westchase y Tampa Palms siguieron en los noventa, y New Tampa sigue agregando garajes de tres autos con una puerta doble y una sencilla. Buena parte de las puertas viejas anda con resortes que pasaron los 10,000 ciclos hace años.',
      'Las dos últimas temporadas cambiaron el trabajo aquí. La marejada de Helene, en septiembre de 2024, metió agua salada en garajes de las calles bajas de South Tampa y Davis Islands, y el viento de Milton, dos semanas después, dobló paneles y sacó puertas fuera del riel por todo el condado. Tampa queda fuera de la Zona de Huracanes de Alta Velocidad, así que una puerta de reemplazo no necesita una NOA de Miami-Dade, pero sí una aprobación de producto de Florida para la carga de viento de su dirección y un permiso de construcción, tramitado por un contratista con licencia ante la ciudad de Tampa o el condado de Hillsborough, según dónde viva usted.',
    ],
    localNotes: [
      'Garajes separados sobre callejón en Hyde Park, Seminole Heights y Palma Ceia, con poca altura libre y puertas sencillas angostas',
      'Dobles de Carrollwood y Westchase de los setenta a los noventa, al final de su vida con resortes y motores originales',
      'El agua salada de Helene en 2024 corroyó soportes inferiores, cables y tarjetas de motor en los garajes cerca de la bahía',
      'Fuera de la HVHZ: el reemplazo pide puerta con aprobación de producto de Florida y permiso, no una NOA de Miami-Dade',
    ],
    faq: [
      {
        question: 'Mi garaje en Seminole Heights está separado y da al callejón. ¿Igual pueden poner un motor?',
        answer:
          'Casi siempre sí. Estos garajes suelen tener entre 7 y 8 pies de techo, suficiente para un kit de riel de baja altura, y donde no hay nada de espacio arriba un motor de pared tipo jackshaft mueve la barra de torsión directamente. La otra pregunta es la corriente: si el garaje no tiene circuito, un electricista lo pasa primero. La instalación de motor empieza en $275 y una unidad jackshaft va de $450 a $800.',
      },
      {
        question: 'Mi garaje se inundó con Helene y la puerta todavía sirve. ¿Tengo que hacer algo?',
        answer:
          'Sí. El agua salada se queda en los soportes inferiores, en los tambores de cable, en los baleros de los rodillos y en el motor si se sumergió, y la corrosión aparece en los meses siguientes como cables deshilachados y una puerta que se traba. Un mantenimiento de $85 a $160 cubre la inspección y la lubricación, y le decimos qué se cambia ahora y qué puede esperar. Las fotos y el presupuesto por escrito son suyos para el reclamo del seguro.',
      },
      {
        question: '¿Necesito permiso para cambiar la puerta de garaje en Tampa?',
        answer:
          'Sí. Todo reemplazo de puerta de garaje en Florida necesita un permiso de construcción con la certificación de viento anotada, y la puerta necesita un número de aprobación de producto de Florida para la carga de viento del sitio. El permiso va incluido en el presupuesto escrito de una puerta nueva, que empieza en $950 para una sencilla de acero certificada. Cambiar solo el motor normalmente no requiere permiso.',
      },
    ],
  },

  'brandon': {
    metaTitle: 'Reparación de Puertas de Garaje en Brandon | Desde $150',
    metaDescription:
      'Reparación de puertas de garaje en Brandon, FL. Resortes desde $150, reparación de motor desde $95. Servicio el mismo día en Brandon, Valrico y FishHawk.',
    answer:
      'La reparación de una puerta de garaje en Brandon comienza en $150 por resorte y $275 por un motor nuevo instalado. Brandon, Valrico y FishHawk se construyeron de los años ochenta a los dos mil con una puerta doble de 16 por 7 pies en casi toda casa, y las llamadas que recibimos son las que hace una urbanización entera a la vez: resortes pasados de ciclaje y motores de línea básica con los engranajes gastados.',
    intro: [
      'Brandon es área no incorporada del condado de Hillsborough y creció por olas. Las urbanizaciones más cercanas a la State Road 60 y a Bloomingdale son de los años ochenta, Valrico se llenó durante los noventa y FishHawk Ranch, más al sur, agregó garajes de tres autos durante los dos mil. Casi todas estas casas tienen garaje pegado con una sola puerta doble de acero de 16 pies por 7, instalada por el constructor en lotes, así que también fallan en lotes.',
      'Un resorte de torsión está certificado para unos 10,000 ciclos, más o menos de 7 a 10 años en la forma en que una familia de Florida usa el garaje como puerta principal, así que una casa de los noventa ya va en su segundo o tercer juego y una de 2005 le toca el primero. La otra llamada constante es el motor: unidades de cadena de los dos mil con un engranaje plástico que lleva veinte veranos en un garaje de más de 100°F. Brandon queda fuera de la Zona de Huracanes de Alta Velocidad, así que una puerta de reemplazo necesita una aprobación de producto de Florida y un permiso del condado de Hillsborough, que tramita un contratista con licencia.',
    ],
    localNotes: [
      'Urbanizaciones de los ochenta a los dos mil con dobles de acero de 16 por 7 instaladas en lotes por el constructor',
      'Resortes en su segundo o tercer cambio en las calles viejas, y el primer cambio llegando en FishHawk y el Valrico nuevo',
      'Motores de cadena de línea básica con engranajes pelados tras veinte veranos de calor de garaje',
      'Reglas de estilo y color de la asociación en FishHawk y en los sectores cerrados más nuevos',
    ],
    faq: [
      {
        question: 'Se rompió un resorte de mi puerta doble. ¿Cambio los dos?',
        answer:
          'En una puerta doble con dos resortes de torsión lo recomendamos. Los dos se instalaron el mismo día y llevan el mismo ciclaje, así que el segundo suele romperse a los pocos meses. Un resorte cuesta de $150 a $350 instalado, y hacer los dos juntos suma de $120 a $250, menos que una segunda visita.',
      },
      {
        question: '¿Una casa en Brandon necesita una puerta reforzada para huracanes?',
        answer:
          'Necesita una puerta certificada para viento. Brandon está fuera de la HVHZ, así que el reemplazo debe llevar una aprobación de producto de Florida para la carga de viento de su dirección, y eso es lo que anota el permiso. Una puerta resistente a impactos, que es lo que casi todos entienden por puerta de huracán, aquí es decisión suya y no requisito, y empieza cerca de $1,800. Una puerta certificada puede calificar para un crédito en su formulario de mitigación de viento; pregunte a su aseguradora por la tabla.',
      },
      {
        question: 'El motor funciona pero la puerta solo sube unas pulgadas. ¿Es el motor?',
        answer:
          'Por lo general no. Jale el cordón rojo de liberación y levante la puerta a mano. Si pesa o no se queda arriba, se rompió un resorte y el motor nunca estuvo hecho para cargar ese peso. Si sigue insistiendo, pela el engranaje. El cambio de resorte va de $150 a $350 por resorte, y si el engranaje ya se fue, la reparación de motor va de $95 a $300.',
      },
    ],
  },

  'riverview': {
    metaTitle: 'Reparación de Puertas de Garaje en Riverview | $150',
    metaDescription:
      'Reparación de puertas de garaje en Riverview, FL. Resortes desde $150, cables desde $95 y motor instalado desde $275. Servicio el mismo día en Summerfield.',
    answer:
      'La reparación de una puerta de garaje en Riverview comienza en $150 por resorte, $95 por reparación de cable y $275 por un motor nuevo instalado. Riverview es la versión al sur del río de Wesley Chapel: urbanizaciones de los dos mil a los dos mil veinte con garajes de tres autos, reglas de asociación y motores de línea básica, todos llegando juntos a su primera ronda de fallas.',
    intro: [
      'Riverview es área no incorporada del condado de Hillsborough al sur del río Alafia, y casi todo se levantó después del año 2000 sobre la US 301 y Big Bend Road. Summerfield y las urbanizaciones de Boyette Road fueron la primera ola, y las comunidades hacia Balm y el corredor de Big Bend siguieron construyendo durante los dos mil diez y todavía siguen. Las casas son de marco con estuco o de bloque, de uno o dos pisos, con una doble de 16 por 7 o una doble más una sencilla, y tanto la puerta como el motor los eligió el constructor por precio.',
      'Esas puertas hoy tienen entre 10 y 20 años, justo en la vida de 10,000 ciclos de un resorte de torsión, y una calle entera puede pasar por fallas de resorte en uno o dos años. El motor muestra primero el calor, un motor de cadena con el engranaje pelado o la tarjeta cocinada en un garaje de más de 100°F, y después el apagón posterior a una tormenta revela cuáles no tenían batería de respaldo. Riverview queda fuera de la Zona de Huracanes de Alta Velocidad, así que una puerta de reemplazo necesita una aprobación de producto de Florida y un permiso del condado de Hillsborough, tramitado por un contratista con licencia, y casi toda asociación de aquí quiere aprobar el estilo antes de que se saque el permiso.',
    ],
    localNotes: [
      'Urbanizaciones de los dos mil a los dos mil veinte sobre la US 301 y Big Bend Road, con garajes de tres autos comunes',
      'Resortes de torsión llegando a sus 10,000 ciclos en calles enteras al mismo tiempo',
      'Motores de cadena de línea básica con engranajes dañados por calor y sin batería de respaldo',
      'Aprobación de estilo y color por la asociación antes de permitir la puerta de reemplazo',
    ],
    faq: [
      {
        question: 'Todas las casas de mi calle son de 2012. ¿Por qué fallan las puertas ahora?',
        answer:
          'Porque todas llevan el mismo resorte, instalado el mismo mes y con el mismo ciclaje. Un resorte de torsión de 10,000 ciclos dura de 7 a 10 años en una casa donde el garaje es la entrada principal, así que a una calle de 2012 le toca. El cambio de resorte va de $150 a $350 por resorte; en una puerta doble con dos resortes, hacer los dos suma de $120 a $250 y le ahorra la segunda visita.',
      },
      {
        question: 'Se fue la luz después de la tormenta y no pude sacar el carro. ¿Qué necesito?',
        answer:
          'Dos cosas. Primero, conocer el cordón rojo de liberación: al jalarlo la puerta sube a mano, salvo que haya un resorte roto. Segundo, una batería de respaldo, que suma de $60 a $150 a un motor nuevo y mueve la puerta durante un apagón de un día o más. Un motor inteligente con batería de respaldo instalado empieza en $350.',
      },
      {
        question: '¿Conviene revisar la puerta antes de la temporada de huracanes?',
        answer:
          'Sí, en abril o mayo. El mantenimiento cuesta de $85 a $160 y cubre el balance de resortes, el estado de los cables, la lubricación de rodillos y bisagras, el retroceso de seguridad del motor y la liberación manual. Es la visita que encuentra el cable oxidado antes de que lo encuentre la tormenta.',
      },
    ],
  },

  /* ---------------- Condado de Pinellas ---------------- */
  'clearwater': {
    metaTitle: 'Reparación de Puertas de Garaje en Clearwater | $150',
    metaDescription:
      'Reparación de puertas de garaje en Clearwater, FL. Resortes desde $150, daño de tormenta desde $150 y puertas nuevas desde $950. De la playa a Countryside.',
    answer:
      'La reparación de una puerta de garaje en Clearwater comienza en $150 por resorte, $95 por reparación de cable y $150 por la evaluación y reparación de daño de tormenta. Las puertas de Clearwater viven en aire salino y los garajes más cercanos al agua recibieron la marejada de Helene en septiembre de 2024, así que los trabajos más comunes aquí son cables y soportes inferiores corroídos, y puertas y motores que estuvieron bajo agua salada.',
    intro: [
      'Clearwater va desde las islas de barrera de Clearwater Beach, Island Estates y Sand Key, pasando por los barrios de los años cincuenta a setenta alrededor del centro y de Belleair Road, hasta Countryside, construido en los setenta y ochenta con puertas dobles pegadas a la casa. El aire salino llega a todo, más rápido del lado de la playa, y la señal visible es el óxido en los cables de izaje donde envuelven el tambor. Un cable oxidado es la falla que más vemos en Pinellas, y vale la pena agarrarla temprano, porque un cable que cede deja caer un lado de la puerta.',
      'La marejada de Helene, el 26 de septiembre de 2024, inundó plantas bajas y garajes de las playas y los canales del lado de la bahía, y Milton cruzó el condado con viento el 9 de octubre. Una puerta que estuvo en agua salada se ve bien unos meses y después se traba, porque los soportes inferiores, los baleros de los rodillos y la herrajería de torsión se corroen por dentro. Clearwater queda fuera de la Zona de Huracanes de Alta Velocidad, así que un reemplazo necesita una puerta con aprobación de producto de Florida y un permiso de la ciudad de Clearwater, tramitado por un contratista con licencia. La carga de viento en las islas de barrera es la más alta de la región y la certificación de la puerta tiene que corresponder.',
    ],
    localNotes: [
      'Aire salino en los dos lados de la península: cables y soportes inferiores oxidados son la primera falla habitual',
      'Garajes de las islas y del lado de la bahía que recibieron la marejada de Helene en 2024, con corrosión que aparece meses después',
      'Dobles de Countryside de los setenta y ochenta con sus resortes originales o los segundos',
      'La carga de viento más alta de la región está en la playa, así que la certificación de la puerta pesa en un reemplazo',
    ],
    faq: [
      {
        question: 'La puerta estuvo en agua salada durante Helene y ahora cuesta subirla. ¿Qué pasa?',
        answer:
          'Corrosión. Los soportes inferiores, los rodillos y muchas veces los tambores de cable tomaron agua salada, y conforme se agarrotan la puerta pesa más de lo que se ajustaron los resortes. Evaluamos la puerta, cambiamos la herrajería perdida y volvemos a balancear los resortes; la reparación por daño de tormenta va de $150 a $1,500 según lo que se haya mojado, y la documentamos con fotos y presupuesto escrito para su reclamo. Un motor que se sumergió se cambia, no se repara.',
      },
      {
        question: '¿Cada cuánto hay que dar servicio a una puerta cerca de la playa?',
        answer:
          'Una vez al año, en abril o mayo, antes de la temporada. El mantenimiento va de $85 a $160 y cubre lubricación, inspección de cables, balance de resortes y el retroceso de seguridad del motor. En las islas de barrera además enjuagaríamos la herrajería con agua dulce unas cuantas veces al año, porque la sal asentada sobre un cable es lo que arranca el óxido.',
      },
      {
        question: '¿Una puerta certificada puede bajar mi seguro en Clearwater?',
        answer:
          'Puede. La inspección de mitigación de viento de Florida, formulario OIR-B1-1802, registra si la puerta de garaje tiene protección certificada, y una puerta certificada puede contribuir a un crédito en la prima. No prometemos una cifra; pregunte a su aseguradora por la tabla de créditos. Una puerta nueva certificada para viento empieza en $950 instalada y una resistente a impactos cerca de $1,800, ambas con el permiso incluido en el presupuesto.',
      },
    ],
  },

  'st-petersburg': {
    metaTitle: 'Puertas de Garaje en St. Petersburg | Desde $150',
    metaDescription:
      'Reparación de puertas de garaje en St. Petersburg, FL. Resortes desde $150 y motor instalado desde $275. Garajes de poca altura libre, servicio el mismo día.',
    answer:
      'La reparación de una puerta de garaje en St. Petersburg comienza en $150 por resorte y $275 por un motor nuevo instalado. Casi toda la ciudad se construyó entre los años veinte y los sesenta, así que pasamos los días en garajes separados sobre callejón en Old Northeast y Kenwood, con techos de 7 pies, y en los ranchos de los cincuenta y sesenta de Shore Acres que se inundaron con la marejada de Helene en 2024.',
    intro: [
      'St. Petersburg tiene la vivienda más antigua que cubrimos en la bahía de Tampa. Old Northeast, Kenwood y los barrios que salen de Central Avenue se trazaron con callejones, y el garaje es una construcción separada de bloque o madera al fondo del lote, con una puerta sencilla de 8 o 9 pies y muy poco espacio arriba. Los años cincuenta y sesenta sumaron casas tipo rancho con garaje pegado de una plaza, muchas veces con 7 pies de altura libre o menos, por el norte y el este de la ciudad. La altura libre decide qué cabe: un kit de riel de baja altura, o un motor de pared tipo jackshaft donde no hay nada de espacio en el techo.',
      'La marejada de Helene, el 26 de septiembre de 2024, inundó Shore Acres, Snell Isle y las calles a lo largo de la bahía, y Milton trajo viento el 9 de octubre. Shore Acres se inunda con las mareas altas en un año cualquiera, así que sus garajes ya eran los más corroídos de la ciudad. St. Petersburg queda fuera de la Zona de Huracanes de Alta Velocidad; una puerta de reemplazo necesita certificación por aprobación de producto de Florida y un permiso de la ciudad de St. Petersburg, tramitado por un contratista con licencia, y en un garaje separado de los años veinte eso a menudo significa rehacer la jamba antes de poder anclar una puerta certificada.',
    ],
    localNotes: [
      'Garajes separados sobre callejón en Old Northeast y Kenwood, con puertas angostas y techos de 7 pies',
      'El riel de baja altura y el motor jackshaft son lo que suele caber en garajes de los años veinte a sesenta',
      'Shore Acres y las calles de la bahía tomaron agua salada con Helene, además de las inundaciones de marea de siempre',
      'Jambas viejas de madera que hay que rehacer antes de anclar una puerta certificada',
    ],
    faq: [
      {
        question: 'Mi garaje de 1925 tiene techo de 7 pies. ¿Qué motor cabe?',
        answer:
          'Un kit de riel de baja altura necesita unas 4 o 5 pulgadas sobre la puerta en vez de las 12 habituales, y con eso ya entra un motor de riel estándar. Donde no hay nada de espacio arriba, un motor de pared tipo jackshaft se monta al lado y mueve la barra de torsión directamente. Medimos el espacio antes de cotizar. La instalación de motor empieza en $275 y una unidad jackshaft va de $450 a $800.',
      },
      {
        question: '¿Cambio o reparo una puerta que se inundó?',
        answer:
          'Depende de qué se mojó. Una puerta de acero que estuvo en un pie de agua salada normalmente se limpia; la herrajería de abajo, o sea soportes, rodillos y cables, no se salva y se cambia. Un motor cuyo motor eléctrico o tarjeta se sumergió se reemplaza, de $275 a $600 instalado. Una puerta nueva certificada para viento empieza en $950, y la cotizamos por escrito para que usted la compare con la reparación y con su reclamo.',
      },
      {
        question: '¿Trabajan puertas de madera en garajes separados antiguos?',
        answer:
          'Sí. Una puerta de madera pesa más que una de acero del mismo tamaño y necesita un resorte más fuerte, y una cuyo travesaño inferior lleva años tomando lluvia pesa todavía más, así que medimos el balance en vez de suponerlo. A veces una sola sección podrida se puede cambiar de $250 a $800; una puerta podrida a lo largo del borde inferior o comida por termitas se reemplaza con una puerta certificada desde $950, con el permiso incluido en el presupuesto.',
      },
    ],
  },

  /* ---------------- Condado de Pasco ---------------- */
  'wesley-chapel': {
    metaTitle: 'Puertas de Garaje en Wesley Chapel | Desde $150',
    metaDescription:
      'Reparación de puertas de garaje en Wesley Chapel, FL. Resortes desde $150 y reparación de motor desde $95. Servicio el mismo día en Meadow Pointe y Seven Oaks.',
    answer:
      'La reparación de una puerta de garaje en Wesley Chapel comienza en $150 por resorte, $95 por reparación de motor y $275 por un motor nuevo instalado. Wesley Chapel se construyó desde finales de los noventa hasta los dos mil veinte, y las puertas de Meadow Pointe, Seven Oaks y las primeras fases de las comunidades nuevas están llegando a la vez a su primera falla de resorte y de motor.',
    intro: [
      'Wesley Chapel es área no incorporada del condado de Pasco, y casi nada de esto existía antes de que las fases de Meadow Pointe se levantaran junto a la State Road 56 a finales de los noventa y en los dos mil. Seven Oaks y las comunidades al norte de la State Road 54 vinieron después, casi todas con garaje de tres autos, una doble de 16 por 7 más una sencilla, reglas de asociación sobre estilo y color, y un motor de cadena de línea básica. Se construye más con marco y estuco que con bloque, lo que no cambia la puerta pero sí cómo se ancla una jamba de reemplazo.',
      'Un resorte de torsión está certificado para unos 10,000 ciclos, que son de 7 a 10 años en una casa de Florida donde el garaje es la puerta principal, así que a una casa de 2015 le toca ahora y una de 2008 suele ir en su segundo juego. El motor falla por calor: un garaje de Wesley Chapel pasa de 100°F una tarde de verano, y el engranaje plástico y la tarjeta lógica de una unidad de constructor no aguantan muchos veranos así. Wesley Chapel queda fuera de la Zona de Huracanes de Alta Velocidad, así que una puerta de reemplazo necesita una aprobación de producto de Florida para la carga de viento de su dirección y un permiso del condado de Pasco, tramitado por un contratista con licencia, y su asociación querrá aprobar el estilo antes de que se instale.',
    ],
    localNotes: [
      'Comunidades planificadas de finales de los noventa a los dos mil veinte, con garajes de tres autos y reglas de estilo',
      'Primera ronda de fallas de resorte en las casas de los dos mil diez y segunda ronda en Meadow Pointe y Seven Oaks',
      'Motores de cadena de línea básica con engranajes y tarjetas dañados por el calor',
      'Construcción de marco y estuco, que cambia la forma de anclar una jamba de reemplazo',
    ],
    faq: [
      {
        question: 'La casa tiene nueve años y la puerta se paró a media altura. ¿Será el resorte?',
        answer:
          'Probablemente. Jale el cordón rojo de liberación y levante la puerta a mano: si pesa o se cae, un resorte se fue, y nueve años es justo lo que dura uno de 10,000 ciclos. Deje de usar el motor, porque levantar una puerta muerta le pela el engranaje. El cambio de resorte va de $150 a $350 por resorte, y hacer los dos en una puerta doble suma de $120 a $250.',
      },
      {
        question: '¿La asociación opina sobre una puerta de reemplazo?',
        answer:
          'En casi todas las comunidades de Wesley Chapel, sí. La asociación aprueba el estilo, el color y el diseño de ventanas, y el permiso del condado registra la certificación de viento. Nosotros tramitamos el permiso y le damos la hoja técnica de la puerta para la solicitud ante la asociación. Una puerta nueva de acero certificada para viento empieza en $950 instalada, con el permiso incluido en el presupuesto.',
      },
      {
        question: 'El motor del constructor todavía sirve pero suena fuerte y el control llega mal. ¿Reparar o cambiar?',
        answer:
          'Un kit de engranajes o una tarjeta lógica nueva caen en el rango de $95 a $300 de reparación y valen la pena en una unidad de menos de diez años. En una más vieja, o en una sin batería de respaldo, un motor de banda de $350 a $600 más $60 a $150 por la batería suele ser mejor inversión, porque la batería mantiene la puerta trabajando durante el apagón que sigue a una tormenta.',
      },
    ],
  },

  /* ---------------- Condado de Hernando ---------------- */
  'spring-hill': {
    metaTitle: 'Puertas de Garaje en Spring Hill | Desde $150',
    metaDescription:
      'Reparación de puertas de garaje en Spring Hill, FL. Resortes desde $150, reparación de motor desde $95 y puerta nueva desde $950. Cobertura en todo Hernando.',
    answer:
      'La reparación de una puerta de garaje en Spring Hill comienza en $150 por resorte, $95 por reparación de motor y $950 por una puerta nueva certificada para viento instalada. Spring Hill se trazó en 1967 como comunidad de retiro y de familias y se construyó hasta los años noventa, así que casi todas las puertas de aquí son de acero de los setenta a los noventa, en su segundo o tercer juego de resortes, sobre suelo arenoso y bien lejos de la sal.',
    intro: [
      'Spring Hill es área no incorporada del condado de Hernando, trazada por la Deltona Corporation en 1967 sobre terreno arenoso de loma y construida lote por lote durante los setenta, ochenta y noventa. Las casas son ranchos de una planta, de bloque o de marco, muchas compradas para el retiro, con una puerta de acero sencilla o doble que muchas veces sigue siendo la original del constructor. El suelo arenoso drena rápido, así que el sello inferior ve menos agua parada que en la costa, y Spring Hill queda lo bastante lejos del Golfo para que la corrosión salina avance más despacio que en Pinellas. Aquí el trabajo lo hace la edad.',
      'Una puerta de los ochenta lleva tres o cuatro juegos de resortes si se le dio mantenimiento y uno solo si no, y una que ha estado trabajando con un resorte roto, dejando que el motor cargue todo, además tiene el engranaje pelado. Los motores anteriores a 1993 no traen sensores de fotocelda y esos los reemplazamos en vez de repararlos. Spring Hill queda fuera de la Zona de Huracanes de Alta Velocidad, así que una puerta de reemplazo necesita una aprobación de producto de Florida para la carga de viento de su dirección y un permiso del condado de Hernando, tramitado por un contratista con licencia.',
    ],
    localNotes: [
      'Ranchos de una planta de los setenta a los noventa con puertas de acero originales, sencillas y dobles',
      'Manda la edad y no la sal: resortes y motores gastados por ciclaje, con corrosión más lenta que en la costa',
      'Motores anteriores a 1993 sin sensores de fotocelda, que se reemplazan en vez de repararse',
      'Suelo arenoso y drenaje rápido, así que hay menos agua parada en el sello inferior que en la costa',
    ],
    faq: [
      {
        question: 'Mi motor es de 1991 y no tiene sensores junto al piso. ¿Lo pueden arreglar?',
        answer:
          'Lo reemplazamos. Los sensores de fotocelda que devuelven la puerta cuando hay un obstáculo son obligatorios en los motores nuevos desde 1993, y un motor sin ellos no se detiene por una persona, una mascota ni la defensa de un carro. Un motor de cadena nuevo va de $275 a $450 instalado, uno de banda de $350 a $600, y la batería de respaldo suma de $60 a $150.',
      },
      {
        question: '¿Vale la pena reparar la puerta de una casa de 1985 en Spring Hill?',
        answer:
          'Por lo general sí. Resortes, cables, rodillos y bisagras son todos reemplazables, y una puerta de acero de esa época con paneles sanos puede andar años con herrajería nueva. Deja de convenir cuando los paneles de abajo están picados de óxido, cuando el perfil ya no se fabrica para un reemplazo de panel de $250 a $800, o cuando usted quiere una puerta certificada por el seguro. Una puerta nueva certificada para viento empieza en $950 con el permiso incluido.',
      },
      {
        question: '¿Qué tan rápido llegan a Spring Hill?',
        answer:
          'El mismo día casi siempre, los siete días de la semana. El condado de Hernando es el borde norte de nuestro mapa de la bahía de Tampa, así que le damos una ventana de llegada cuando llama en vez de una suposición. El despacho de emergencia fuera de horario o el mismo día lleva un recargo de $150 a $300, que le decimos antes de salir.',
      },
    ],
  },

  /* ---------------- Condado de Polk ---------------- */
  'lakeland': {
    metaTitle: 'Reparación de Puertas de Garaje en Lakeland | $150',
    metaDescription:
      'Reparación de puertas de garaje en Lakeland, FL. Resortes desde $150, motor desde $275 y puerta nueva desde $950. Del centro a las urbanizaciones del I-4.',
    answer:
      'La reparación de una puerta de garaje en Lakeland comienza en $150 por resorte, $275 por un motor nuevo instalado y $950 por una puerta nueva certificada para viento. Lakeland está sobre el I-4, a media distancia entre Tampa y Orlando, y sus puertas se dividen igual: bungalós de los años veinte con garajes separados junto a Lake Morton y Lake Hollingsworth, dobles de los setenta a los noventa en el sur de la ciudad, y urbanizaciones nuevas del I-4 en su primer juego de resortes.',
    intro: [
      'Lakeland es la cabecera del condado de Polk, y su vivienda más antigua rodea los lagos: Dixieland y las calles de Lake Morton y Lake Hollingsworth son bungalós de los años diez a treinta, con garaje separado detrás de la casa, puertas angostas y techos bajos. El sur de Lakeland y Christina se llenaron de los setenta a los noventa con dobles pegadas a la casa, y el crecimiento más nuevo va por el I-4 y el lado norte, donde las urbanizaciones construidas desde 2010 tienen garaje de tres autos y motores de línea básica. Lakeland es tierra adentro, así que el problema no es la sal, sino la humedad, el calor y el conteo de ciclos.',
      'Las fallas siguen a las épocas. Los garajes separados antiguos tienen puertas de madera podridas en el travesaño inferior, o puertas de una sola hoja con resortes de extensión sin cable de seguridad. Las dobles del sur de Lakeland van por su segundo o tercer juego de resortes, y los motores de los noventa cocinaron sus tarjetas en garajes de más de 100°F. Las urbanizaciones del I-4 están llegando ahora a los 10,000 ciclos. Lakeland queda fuera de la Zona de Huracanes de Alta Velocidad; una puerta de reemplazo necesita una aprobación de producto de Florida para la carga de viento de su dirección y un permiso de la ciudad de Lakeland o del condado de Polk, tramitado por un contratista con licencia.',
    ],
    localNotes: [
      'Dixieland y los barrios de los lagos: bungalós de los años diez a treinta con garajes separados, puertas angostas y techos bajos',
      'Dobles del sur de Lakeland y Christina, de los setenta a los noventa, en su segundo o tercer juego de resortes',
      'Urbanizaciones del corredor del I-4 construidas desde 2010 que llegan a su primera falla de resorte y de motor',
      'Tierra adentro: lo que encontramos es madera podrida y tarjetas de motor cocinadas, más que corrosión salina',
    ],
    faq: [
      {
        question: '¿De verdad cubren Lakeland o solo Tampa?',
        answer:
          'Lakeland y el condado de Polk están en nuestro mapa, y Lakeland queda de paso entre los dos mercados que atendemos, así que el servicio el mismo día está disponible casi todos los días. Le damos una ventana de llegada cuando llama. El despacho de emergencia fuera de horario o el mismo día lleva un recargo de $150 a $300, que le decimos antes de salir.',
      },
      {
        question: 'Mi garaje viejo tiene una puerta con resortes de extensión sin cables de seguridad. ¿Es un problema?',
        answer:
          'Sí. Un resorte de extensión que se rompe sin un cable de seguridad por dentro sale disparado, y estas puertas se armaron hace décadas muchas veces sin él. Ponemos cables de seguridad o convertimos la puerta a resorte de torsión, que balancea mejor y es más seguro cuando falla. El cambio de resorte va de $150 a $350 por resorte.',
      },
      {
        question: 'Tengo una puerta de madera en un garaje de 1925 cerca de Lake Morton. ¿Reparar o cambiar?',
        answer:
          'Si la pudrición está solo en el travesaño inferior y el marco está sano, la respuesta honesta es reparar y poner un juego de resortes calculado para el peso real de la puerta. Si la puerta está blanda por abajo o las termitas ya entraron, una puerta certificada nueva desde $950 con el permiso incluido es mejor inversión, y en un garaje tan antiguo revisamos la jamba antes de cotizar, porque puede necesitar reconstrucción para anclar la puerta.',
      },
    ],
  },
};
