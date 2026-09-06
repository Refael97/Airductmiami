/**
 * Contenido en español de las 12 páginas de servicios, con la MISMA clave
 * (slug) que services.ts. Los precios son idénticos al inglés y vienen de
 * research/fl-garage/BRIEF.md. Español latinoamericano neutro, trato de
 * usted, sin guiones largos.
 */
import type { ServiceEs } from './types';

export const serviceEs: Record<string, ServiceEs> = {
  'garage-door-spring-replacement': {
    name: 'Cambio de Resortes de Puerta de Garaje',
    shortName: 'Cambio de Resortes',
    metaTitle: 'Cambio de Resortes de Puerta de Garaje | $150 a $350',
    metaDescription:
      '¿Resorte roto en la puerta de garaje? Cambio el mismo día en toda Florida, de Miami a Tampa y Orlando. De $150 a $350 por resorte, con precio por escrito.',
    priceNote: 'por resorte instalado; los dos resortes juntos suman $120 a $250',
    priceFactors: [
      'Una puerta doble de 16 pies, y cualquier puerta con carga de viento o resistente a impactos, lleva dos resortes de calibre más grueso y eso sube el costo de la pieza',
      'Los resortes de alto ciclaje, calificados para 25,000 ciclos o más en lugar de 10,000, cuestan más que los estándar',
      'Cables, tambores, baleros o soportes inferiores que se oxidaron junto con el resorte agregan trabajo',
      'Las visitas del mismo día y fuera de horario llevan el recargo de emergencia de $150 a $300',
    ],
    answer:
      'El cambio de resortes de puerta de garaje es el retiro y la instalación de los resortes de torsión o de extensión que cargan el peso de su puerta. En Florida cuesta de $150 a $350 por resorte instalado, y cambiar los dos a la vez suma $120 a $250. Es la reparación más común que hacemos y la que con más frecuencia deja un carro encerrado en el garaje.',
    intro: [
      'Una puerta de garaje pesa entre 130 y 350 libras, y una puerta doble de 16 pies con carga de viento queda en el extremo pesado por el acero adicional de los paneles y los refuerzos. El motor no levanta ese peso. Lo levantan los resortes. Cuando uno se revienta, con un golpe que se oye desde dentro de la casa, la puerta se convierte en peso muerto y el abridor ya no la puede mover con seguridad.',
      'Los resortes fallan por conteo de ciclos, no por el clima. Un resorte de torsión estándar está calificado para unos 10,000 ciclos de apertura y cierre, que son 7 a 10 años en una casa donde el garaje es la entrada principal, y menos en una comunidad de carritos de golf o donde la puerta corre 6 a 8 veces al día. La humedad y el aire salino acortan ese plazo. A pocas millas de cualquiera de las dos costas vemos resortes picados de óxido a los 5 años, y una picadura de óxido es justo donde el resorte se parte.',
      'Esta es la reparación que nadie debe intentar por su cuenta. Un resorte de torsión bajo tensión guarda energía suficiente para romper huesos. Llevamos en el camión los calibres y largos más comunes, incluidos los más gruesos que piden las puertas dobles certificadas, así que la mayoría de las visitas en Florida se resuelve en un solo viaje.',
    ],
    benefits: [
      { title: 'En la misma visita, casi siempre', text: 'Tenemos en existencia las medidas comunes de torsión y de extensión, incluidos los resortes más pesados de las puertas dobles con carga de viento, así que la llamada normal se diagnostica y se termina en un viaje.' },
      { title: 'El precio que le cotizamos', text: 'Usted recibe el rango por teléfono y un número por escrito antes de que toquemos nada. No se mueve una vez que empieza el trabajo.' },
      { title: 'Los dos resortes evaluados con honestidad', text: 'Cuando uno se revienta, el otro tiene los mismos ciclos y el mismo óxido. Le explicamos por qué conviene hacer los dos y le decimos cuándo puede esperar.' },
      { title: 'Resortes galvanizados cerca de la costa', text: 'En casas de canal y de primera línea de playa podemos instalar resortes galvanizados, que frenan la corrosión que acorta la vida del resorte en el aire salino.' },
    ],
    process: [
      { title: 'Inspección y cotización', text: 'Medimos calibre del alambre, diámetro interior y largo, revisamos cables, tambores y baleros en busca de óxido, y le damos un precio por escrito.' },
      { title: 'Liberación segura de la tensión', text: 'Con barras de tensado, nunca con un desarmador. El resorte viejo se destensa bajo control y se retira.' },
      { title: 'Instalación y tensado', text: 'Se coloca el resorte nuevo y se tensa con las vueltas que pide el peso de su puerta, y luego se asientan los prisioneros sobre el tubo de torsión.' },
      { title: 'Prueba de balance', text: 'Desconectamos el abridor y verificamos que la puerta se sostenga a la altura de la cintura, luego reconectamos y corremos el recorrido completo, incluida la reversa de seguridad.' },
    ],
    quickFacts: [
      { label: 'Precio típico', value: '$150 a $350 por resorte' },
      { label: 'Los dos resortes', value: 'Suma $120 a $250' },
      { label: 'Tiempo en sitio', value: '30 minutos a 2 horas' },
      { label: 'Vida útil del resorte', value: 'Unos 10,000 ciclos, 7 a 10 años' },
    ],
    faq: [
      { question: '¿Cuánto cuesta cambiar los resortes de una puerta de garaje en Florida?', answer: 'Entre $150 y $350 por un resorte instalado. Hacer los dos al mismo tiempo suma $120 a $250 en lugar de duplicar el precio, porque la mano de obra es la misma. Si le cotizan bastante más de $600 por dos resortes estándar en una puerta sencilla, pida una segunda opinión.' },
      { question: '¿Debo cambiar un resorte o los dos?', answer: 'Si su puerta tiene dos resortes y uno se rompió, el otro acumuló los mismos ciclos y la misma corrosión, y por lo general falla en cuestión de meses. Cambiar los dos es una recomendación real, no una venta adicional, pero la decisión es suya y hacemos solo uno si así lo prefiere.' },
      { question: '¿Puedo usar la puerta de garaje con un resorte roto?', answer: 'No. No use el abridor: fuerza el motor, dobla paneles y puede dejar caer la puerta. Si tiene que moverla, levántela a mano con ayuda y apuntálela, y no la vuelva a usar hasta que quede reparada.' },
      { question: '¿Por qué se rompen tanto los resortes en Florida?', answer: 'Por conteo de ciclos y por corrosión. Las puertas de Florida abren más seguido que en casi todo el país porque el garaje es la entrada principal, y la humedad y el aire salino pican el acero, que es donde el resorte se parte. Cerca de la costa un resorte puede terminar su vida en 5 a 7 años en vez de 10.' },
      { question: '¿Cuánto tarda el cambio?', answer: 'Normalmente de 30 minutos a 2 horas, según la puerta y según si los cables, los tambores o los soportes inferiores también necesitan trabajo.' },
    ],
  },
  'garage-door-cable-repair': {
    name: 'Reparación de Cables de Puerta de Garaje',
    shortName: 'Reparación de Cables',
    metaTitle: 'Reparación de Cables de Puerta de Garaje | $95 a $300',
    metaDescription:
      '¿Cable oxidado, deshilachado o salido del tambor? Reparación el mismo día en toda Florida. De $95 a $300, cable y tambor juntos $225 a $400, precio por escrito.',
    priceNote: 'cable y tambor juntos $225 a $400; solo ajuste de tensión $85 a $140',
    priceFactors: [
      'Si el cable solo se salió o de verdad falló, que son dos trabajos distintos',
      'Un tambor o un soporte inferior oxidado o dañado junto con el cable',
      'Puertas dobles con dos corridas de cable en lugar de una',
      'Herrajes trabados que hacen lento el desmontaje, algo común a pocas millas de la costa',
    ],
    answer:
      'La reparación de cables de puerta de garaje cubre los cables de acero que van de los soportes inferiores de la puerta a los tambores de los resortes. En Florida cuesta de $95 a $300, o de $225 a $400 cuando también se cambia el tambor. Si el cable solo se salió porque el resorte perdió tensión, el ajuste de tensión cuesta de $85 a $140.',
    intro: [
      'Los cables son los que jalan. Cuando uno se deshilacha, se revienta o se sale de su tambor, la puerta se ladea en el marco y casi siempre se atora contra el riel. Se ve alarmante y es peligroso forzarla.',
      'En Florida la causa es casi siempre el óxido. El cable termina en el soporte inferior, a unas pulgadas de una losa que se moja todas las tardes durante medio año, y el aire salino a pocas millas de cualquiera de las dos costas hace el resto. Un tramo de cable café y áspero cerca del soporte inferior es la señal visible más común que vemos en cualquier puerta, y es un cable que se va a romper en cuestión de meses.',
      'A veces el cable está bien y solo se salió porque el resorte perdió tensión o porque la puerta recibió un golpe. Ese caso es un ajuste de tensión de $85 a $140 y no un cambio, y se lo decimos cuando eso es lo que tiene enfrente.',
    ],
    benefits: [
      { title: 'Primero el diagnóstico correcto', text: 'Un cable salido y un cable roto se ven iguales desde afuera y cuestan muy distinto. Revisamos antes de cotizar.' },
      { title: 'Los dos lados revisados', text: 'Los cables se corroen en pareja. Revisamos el otro lado y los dos soportes inferiores en vez de dejarle una segunda visita para dentro de un mes.' },
      { title: 'Tambor y soporte inspeccionados', text: 'El óxido que se comió un cable casi siempre llegó al tambor y al soporte inferior. Revisamos los dos para que el cable nuevo no termine igual.' },
      { title: 'Puerta rebalanceada', text: 'El trabajo cierra con una prueba de balance, porque una puerta desbalanceada es lo que se come los cables.' },
    ],
    process: [
      { title: 'Asegurar la puerta', text: 'La puerta se sujeta con prensas y se apoya antes de tocar cualquier tensión.' },
      { title: 'Revisar cables, tambores y soportes', text: 'Identificamos si esto es un cable salido, un cable roto o un tambor dañado, y cotizamos según lo que sea.' },
      { title: 'Cambiar o reasentar', text: 'Cable nuevo instalado y enrollado parejo en el tambor, o el cable existente reasentado y tensado.' },
      { title: 'Balance y prueba', text: 'Recorrido completo con el abridor desconectado y luego reconectado.' },
    ],
    quickFacts: [
      { label: 'Precio típico', value: '$95 a $300' },
      { label: 'Cable y tambor juntos', value: '$225 a $400' },
      { label: 'Solo ajuste de tensión', value: '$85 a $140' },
      { label: 'Tiempo en sitio', value: '30 a 90 minutos' },
    ],
    faq: [
      { question: '¿Cuánto cuesta reparar el cable de una puerta de garaje en Florida?', answer: 'De $95 a $300 por la reparación o el cambio del cable. Si el tambor también está oxidado o dañado, el trabajo va de $225 a $400. Si el cable solo se salió y nada está dañado, el ajuste de tensión cuesta de $85 a $140.' },
      { question: '¿Por qué se salió el cable de mi puerta de garaje?', answer: 'El óxido en el soporte inferior es la primera causa en Florida. Detrás vienen una puerta fuera de balance, un resorte que perdió tensión o un cable que quedó mal enrollado en el tambor en una reparación anterior.' },
      { question: '¿Es peligroso un cable roto?', answer: 'Sí. La puerta puede quedar ladeada y bajar despareja. No use el abridor y no trate de emparejarla a la fuerza.' },
      { question: '¿Se deben cambiar los dos cables juntos?', answer: 'Por lo general sí. Tienen la misma edad y la misma corrosión, y la mano de obra es prácticamente la misma, así que hacer los dos cuesta mucho menos que dos visitas separadas.' },
      { question: '¿Puedo evitar que los cables se oxiden?', answer: 'Puede frenarlo. Mantenga el sello inferior en buen estado para que el agua no se quede en el soporte, enjuague la sal de los herrajes unas cuantas veces al año si vive cerca de la costa, y haga revisar los cables en el mantenimiento anual. Los cables galvanizados ayudan, aunque también se corroen, solo que tardan más.' },
    ],
  },
  'garage-door-opener-repair': {
    name: 'Reparación de Motor de Puerta de Garaje',
    shortName: 'Reparación de Motor',
    metaTitle: 'Reparación de Motor de Puerta de Garaje | $95 a $300',
    metaDescription:
      '¿El motor no responde, la puerta se devuelve, los sensores parpadean o la tarjeta murió tras una tormenta? Reparación el mismo día en Florida, de $95 a $300.',
    priceNote: 'tarjeta lógica, kit de engranes, sensores, límites de recorrido',
    priceFactors: [
      'La pieza que falló, desde alinear un sensor hasta cambiar la tarjeta lógica',
      'Si su modelo todavía tiene refacciones disponibles',
      'Equipos viejos donde la reparación se acerca al costo de reemplazarlos',
      'Las visitas del mismo día y fuera de horario llevan el recargo de emergencia de $150 a $300',
    ],
    answer:
      'La reparación del motor de puerta de garaje cubre la unidad y todo lo que va conectado a ella: sensores de seguridad, controles y teclado, tarjeta lógica, kit de engranes y los límites de recorrido y de fuerza. En Florida la mayoría de estas reparaciones cuesta de $95 a $300. Los sensores desalineados o golpeados por el sol son la razón más común de que una puerta se niegue a cerrar, y suelen ser un arreglo rápido.',
    intro: [
      'Cuando una puerta no cierra y se devuelve, casi siempre el abridor está haciendo su trabajo. Las fotoceldas cerca del piso detienen la puerta si algo corta el haz, y en Florida se activan por más que polvo: un garaje orientado al oeste recibe el sol bajo de la tarde directo en el lente, y un soporte golpeado por un bote de basura o una bicicleta queda un cuarto de pulgada fuera de línea.',
      'El calor es la falla de Florida. Un garaje cerrado pasa de los 100 grados F en una tarde de verano, y el abridor cuelga del techo, que es donde más calienta. Eso cocina tarjetas lógicas, seca capacitores y ablanda el engrane plástico de las unidades de cadena viejas hasta que se barren los dientes, que es cuando el motor suena pero nada se mueve. Los rayos del verano son la otra causa: un pico de voltaje se lleva una tarjeta sin aviso.',
      'Reparamos en lugar de reemplazar cuando tiene sentido, y decimos con claridad cuando no lo tiene. Un abridor de más de 15 años con la tarjeta quemada normalmente sale más barato de reemplazar que de reparar, y además no va a tener la batería de respaldo que usted quiere cuando se va la luz después de una tormenta. Le mostramos los dos precios.',
    ],
    benefits: [
      { title: 'Sensores arreglados bien', text: 'Alineados, limpios, con el soporte firme y protegidos del sol de la tarde cuando esa es la causa, para que no se vuelvan a desviar el mes que viene.' },
      { title: 'Reparar cuando reparar conviene', text: 'Engranes, capacitores, tarjetas y límites tienen arreglo. Cotizamos la reparación junto al reemplazo para que usted elija.' },
      { title: 'Todas las marcas principales', text: 'LiftMaster, Chamberlain, Genie, Craftsman, Linear y las demás.' },
      { title: 'Liberación manual probada', text: 'Cada visita termina con la prueba del cordón de emergencia, porque después de un apagón por tormenta ese cordón es como saca el carro.' },
    ],
    process: [
      { title: 'Reproducir la falla', text: 'Corremos la puerta y vemos qué pasa en realidad, en lugar de adivinar por la descripción.' },
      { title: 'Descartar causa por causa', text: 'Sensores, corriente, límites, ajuste de fuerza, engranes y tarjeta, en orden de probabilidad.' },
      { title: 'Cotizar la reparación y la alternativa', text: 'Usted recibe el precio de la reparación y, cuando aplica, el del reemplazo, lado a lado.' },
      { title: 'Reparar y verificar', text: 'Ciclos completos de prueba, reversa de seguridad, revisión de la liberación manual y controles reprogramados.' },
    ],
    quickFacts: [
      { label: 'La mayoría de reparaciones', value: '$95 a $300' },
      { label: 'Causa más común', value: 'Sensores desalineados o con sol directo' },
      { label: 'Tiempo en sitio', value: 'Menos de 1 hora en casi todas las fallas' },
      { label: 'Marcas atendidas', value: 'LiftMaster, Chamberlain, Genie, Craftsman' },
    ],
    faq: [
      { question: '¿Por qué mi puerta de garaje empieza a cerrar y se devuelve?', answer: 'Casi siempre son los sensores de seguridad. Algo bloquea el haz, los lentes están sucios, uno quedó fuera de alineación o el sol de la tarde le pega al receptor. Luz fija en las dos unidades significa alineados; luz parpadeando significa que no.' },
      { question: '¿Vale la pena reparar un abridor viejo?', answer: 'Con menos de unos 10 años, por lo general sí. Pasados los 15 años y con la tarjeta lógica quemada, el reemplazo de $275 a $600 suele quedar cerca del precio de la reparación, viene con garantía y puede incluir batería de respaldo para los apagones. Cotizamos las dos opciones para que usted decida.' },
      { question: 'El motor suena pero la puerta no se mueve. ¿Qué pasa?', answer: 'Ese es el síntoma clásico de un engrane barrido. El calor del garaje ablanda el engrane plástico de las unidades de cadena viejas, y es una falla común y reparable.' },
      { question: 'Mi motor quedó muerto después de una tormenta. ¿Es la tarjeta?', answer: 'Revise primero el tomacorriente y el breaker, y luego pruebe el botón de pared. Si la unidad no enciende ninguna luz después de una tormenta, es probable que un pico de voltaje se haya llevado la tarjeta lógica. En un equipo de menos de 10 años eso es una reparación de $95 a $300; en uno más viejo cotizamos el reemplazo al lado. Un supresor de picos en el tomacorriente del abridor es un seguro barato.' },
      { question: '¿Pueden programar un control universal o el botón del carro?', answer: 'Sí, incluidos HomeLink y controles universales, y volvemos a sincronizar todo después de cambiar una tarjeta.' },
    ],
  },
  'garage-door-opener-installation': {
    name: 'Instalación de Motor de Puerta de Garaje',
    shortName: 'Instalación de Motor',
    metaTitle: 'Instalación de Motor de Puerta de Garaje | $275 a $600',
    metaDescription:
      'Motor de puerta de garaje nuevo instalado en toda Florida: cadena, banda y montaje en pared, con batería de respaldo para apagones. De $275 a $600 instalado.',
    priceNote: 'unidad más instalación, riel estándar',
    priceFactors: [
      'Tipo de tracción: la cadena es la entrada, la banda cuesta más y el modelo de pared va de $450 a $800',
      'La potencia que pide una puerta doble de 16 pies o una puerta resistente a impactos con su acero adicional',
      'La batería de respaldo, que suma $60 a $150, más teclados y control inteligente',
      'Trabajo eléctrico si no hay tomacorriente en el techo',
    ],
    answer:
      'La instalación del motor de puerta de garaje es el retiro de su unidad vieja y el montaje, cableado y programación de una nueva. En Florida cuesta de $275 a $600 instalado con riel estándar. La tracción por cadena es la entrada, de $275 a $450; la de banda va de $350 a $600 y es la opción silenciosa para un garaje anexo; y la batería de respaldo suma $60 a $150 en cualquiera de ellas.',
    intro: [
      'Casi toda casa de Florida tiene garaje anexo con una recámara o una sala pegada a la pared del garaje, y en una casa de dos pisos muchas veces hay una recámara justo encima. Por eso el ruido es lo que decide para la mayoría de las familias. La cadena es la más barata y la más ruidosa. La banda cuesta un poco más y es la que hay que instalar cuando alguien duerme junto al garaje.',
      'La segunda decisión es la batería de respaldo. Aquí la luz se va después de cada tormenta fuerte, a veces por días, y un abridor con batería sigue funcionando. Los modelos de montaje en pared, de $450 a $800, liberan el techo por completo, algo que importa en los garajes sencillos de techo bajo de los barrios de los años cincuenta a setenta y en garajes donde el techo ya está lleno de racks de almacenamiento.',
      'Ajustamos la potencia a la puerta en lugar de vender de más por costumbre. Una puerta sencilla de acero estándar no necesita el motor más grande del catálogo. Una puerta de 16 pies resistente a impactos, con su acero adicional, sí lo necesita, y un motor subdimensionado en esa puerta se quema en pocos años.',
    ],
    benefits: [
      { title: 'La tracción correcta para su garaje', text: 'El ruido, la altura del techo, el peso de la puerta y el presupuesto lo deciden, y le explicamos el intercambio en vez de irnos por lo más caro.' },
      { title: 'Retiramos y nos llevamos el equipo viejo', text: 'Va incluido en el precio y no aparece como una línea extra al final.' },
      { title: 'Seguridad configurada como debe ser', text: 'Fotoceldas a la altura correcta y fuera del sol directo, límites de fuerza y de recorrido ajustados, reversa automática probada.' },
      { title: 'Todo programado', text: 'Controles, teclado, botones del carro y la aplicación si la unidad es inteligente.' },
    ],
    process: [
      { title: 'Evaluar la puerta y el espacio', text: 'Peso de la puerta, altura libre, espacio al fondo, el tomacorriente y dónde importa el ruido.' },
      { title: 'Retirar la unidad vieja', text: 'Se desconecta, se baja y se la llevamos.' },
      { title: 'Montar y cablear', text: 'Riel armado y montado, motor colgado y arriostrado, sensores y control de pared cableados, batería instalada si la eligió.' },
      { title: 'Programar y probar seguridad', text: 'Límites, fuerza, reversa automática, liberación manual y cada control y teclado emparejado.' },
    ],
    quickFacts: [
      { label: 'Precio típico', value: '$275 a $600 instalado' },
      { label: 'Tiempo en sitio', value: '2 a 4 horas' },
      { label: 'La opción más silenciosa', value: 'Tracción por banda' },
      { label: 'Batería de respaldo', value: 'Suma $60 a $150' },
    ],
    faq: [
      { question: '¿Cuánto cuesta instalar un motor de puerta de garaje en Florida?', answer: 'De $275 a $600 instalado en la mayoría de las casas, unidad más instalación con riel estándar. La cadena queda en la parte baja del rango, la banda de la parte media hacia arriba, y el modelo de montaje en pared, de $450 a $800, va por encima. La batería de respaldo suma $60 a $150.' },
      { question: '¿Banda o cadena?', answer: 'Banda si el garaje es anexo y hay una recámara o una sala junto a él o encima, que es el caso de la mayoría de las casas de Florida. Cadena si el garaje es separado o si manda el presupuesto. La diferencia de precio de la banda es pequeña frente a años de ruido.' },
      { question: '¿Necesito batería de respaldo?', answer: 'La recomendamos en cualquier garaje del que usted dependa a diario. Los apagones después de las tormentas son parte de la vida en Florida, y la liberación manual no es algo que quiera resolver a oscuras con el carro adentro. Suma $60 a $150.' },
      { question: '¿Necesito permiso para cambiar el motor de la puerta de garaje?', answer: 'Cambiar solo el motor normalmente no requiere permiso de construcción en Florida. Cambiar la puerta sí lo requiere, y nosotros lo tramitamos en las instalaciones de puerta.' },
      { question: '¿Pueden instalar un motor que yo compré?', answer: 'Sí. Instalamos unidades compradas por el cliente, aunque en ese caso la garantía del equipo queda entre usted y la tienda y no con nosotros. Nuestra garantía de mano de obra sigue aplicando.' },
    ],
  },
  'smart-garage-door-opener-installation': {
    name: 'Instalación de Motor Inteligente WiFi para Puerta de Garaje',
    shortName: 'Motor Inteligente',
    metaTitle: 'Motor Inteligente para Puerta de Garaje | Desde $350',
    metaDescription:
      'Motores WiFi con batería de respaldo y opción de cámara instalados en Florida. Control desde el celular, aviso de puerta abierta y respaldo en apagones.',
    priceNote: 'unidad WiFi con batería de respaldo y opciones de cámara',
    priceFactors: [
      'La unidad elegida: un motor WiFi con batería de respaldo queda en la parte baja del rango y uno con cámara integrada en la parte alta',
      'Tracción por banda o por cadena debajo del equipo inteligente',
      'Un extensor de WiFi si el garaje queda detrás de paredes de bloque con señal débil',
      'Teclados, controles adicionales y una segunda puerta en la misma cuenta',
    ],
    answer:
      'Un motor inteligente de puerta de garaje se conecta al WiFi de su casa para que usted pueda abrir, cerrar y revisar la puerta desde el celular, y recibir un aviso cuando quedó abierta. En Florida una unidad WiFi con batería de respaldo cuesta de $350 a $750 instalada, y las de cámara integrada quedan en la parte alta del rango. La batería de respaldo es la función que más importa aquí, porque sin ella la aplicación no sirve de nada en un apagón.',
    intro: [
      'Lo que la gente de verdad usa no es abrir a distancia. Es la notificación. Saber que la puerta lleva dos horas abierta bajo un aguacero de la tarde, y cerrarla desde el escritorio, es lo que hace que valgan la pena. Los dueños de temporada en Naples, Sarasota y los Palm Beaches usan la aplicación para revisar la puerta desde otro estado, y los dueños de casas de renta vacacional cerca de Kissimmee la usan para dejar entrar al personal de limpieza sin repartir códigos.',
      'En Florida la unidad que conviene comprar trae batería de respaldo integrada. Después de una tormenta con nombre la luz puede faltar por días, y un motor inteligente con batería sigue abriendo desde el botón de pared, el control o el celular mientras la red celular esté arriba. Varias unidades añaden cámara, que sirve cuando usted está fuera toda la temporada y quiere ver que el garaje quedó seco después de una tormenta.',
      'Configuramos la aplicación, la conectamos a su red y verificamos que los avisos lleguen a su celular antes de irnos, que es la parte que casi ninguna instalación hace. Si su abridor actual tiene menos de unos diez años y está sano, pregunte por un control de adaptación; se lo cotizamos junto a la unidad completa para que compare.',
    ],
    benefits: [
      { title: 'Batería de respaldo como recomendación fija', text: 'El control desde el celular vale poco en un apagón sin ella, así que las unidades que recomendamos en Florida la traen integrada.' },
      { title: 'Avisos de puerta abierta que sí funcionan', text: 'Configurados y probados en su celular antes de que nos vayamos.' },
      { title: 'Acceso compartido y por tiempo limitado', text: 'Para la familia, un código de una sola vez para una entrega o un contratista, y acceso programado para el personal de limpieza de una renta.' },
      { title: 'Cámara donde de verdad sirve', text: 'Vale la pena en una casa de temporada o de renta. No vale la pena en la mayoría de las casas principales, y se lo decimos.' },
    ],
    process: [
      { title: 'Revisar compatibilidad y señal', text: 'Confirmamos si su abridor acepta un control de adaptación o necesita reemplazo, y medimos el WiFi a la altura del techo.' },
      { title: 'Instalar el equipo', text: 'Control o motor completo montado, batería instalada, sensor de posición de la puerta colocado.' },
      { title: 'Conectar y configurar', text: 'Enlazado a su WiFi, cuenta de la aplicación creada, avisos activados y acceso compartido con la casa.' },
      { title: 'Probar en su celular', text: 'Abrir, cerrar y el aviso de puerta abierta, todo verificado desde su propio equipo.' },
    ],
    quickFacts: [
      { label: 'Motor WiFi con batería de respaldo', value: '$350 a $750 instalado' },
      { label: 'Opción de cámara', value: 'Parte alta del rango' },
      { label: 'Tiempo en sitio', value: '1 a 3 horas' },
      { label: 'Requisito', value: 'Que el WiFi llegue al garaje' },
    ],
    faq: [
      { question: '¿Puedo hacer inteligente el motor que ya tengo?', answer: 'Muchas veces sí. Un control de adaptación se conecta a la mayoría de los abridores fabricados en los últimos 15 años y agrega control desde el celular y avisos, y cuesta menos que una unidad nueva. No agrega batería de respaldo, así que en un abridor viejo sin ella normalmente recomendamos la unidad completa de $350 a $750.' },
      { question: '¿Cuál sistema inteligente es el mejor?', answer: 'Depende de qué más use en su casa. myQ es lo natural para las unidades LiftMaster y Chamberlain, Aladdin Connect para Genie, y hay controles que se integran de forma más abierta con otros sistemas de casa inteligente. Instalamos lo que le convenga a su configuración y no una marca por costumbre.' },
      { question: '¿Funciona si se cae el internet o se va la luz?', answer: 'Si el internet está caído, el control y el botón de pared siguen funcionando y solo se pausa el control desde el celular. Si no hay luz, únicamente una unidad con batería de respaldo sigue trabajando, y por eso son las que instalamos en Florida.' },
      { question: '¿La recepción de WiFi en el garaje es un problema?', answer: 'A veces. Las paredes de bloque de concreto y una puerta de acero cortan el WiFi más que el panel de yeso, así que un garaje en el extremo de una casa de bloque suele tener señal débil. Lo medimos durante la visita y le decimos si necesita un extensor, en vez de dejarle algo que no va a ser confiable.' },
    ],
  },
  'garage-door-off-track-repair': {
    name: 'Reparación de Puerta de Garaje Fuera del Riel',
    shortName: 'Puerta Fuera del Riel',
    metaTitle: 'Puerta de Garaje Fuera del Riel | $140 a $600',
    metaDescription:
      '¿La puerta se salió del riel, la golpeó un carro o se zafó con el viento? Reparación el mismo día en toda Florida, de $140 a $600, cotizada por escrito antes.',
    priceNote: 'los casos graves con riel doblado o secciones dañadas cuestan más',
    priceFactors: [
      'Si el riel se puede alinear o hay que cambiarlo',
      'Secciones, rodillos, bisagras o soportes dañados que aparecen una vez asegurada la puerta',
      'Puertas dobles con dos corridas completas de riel',
      'Las visitas del mismo día y fuera de horario llevan el recargo de emergencia de $150 a $300',
    ],
    answer:
      'La reparación de una puerta de garaje fuera del riel devuelve a su lugar una puerta cuyos rodillos se salieron y cambia lo que se dobló o se rompió en el proceso. En Florida cuesta de $140 a $600, y los casos graves con riel doblado o secciones dañadas cuestan más. No use el abridor ni trate de meter la puerta de regreso usted mismo.',
    intro: [
      'Las puertas se salen del riel por tres razones: algo las golpeó, un cable falló y dejó caer un lado, o unos rodillos gastados terminaron brincando en un tramo de riel doblado. En Florida hay una cuarta. La presión del viento durante una tormenta flexiona la puerta hacia adentro y hacia afuera del marco, y una puerta con tornillos de riel flojos o rodillos gastados se sale antes de que el viento llegue a su punto máximo.',
      'Las entradas angostas de las comunidades de townhouses en Doral, Kendall y las subdivisiones nuevas de Florida Central producen una corriente constante de puertas rozadas por una defensa. El óxido es la causa más silenciosa: los rodillos de abajo y el último pie de riel se quedan en el agua todas las tardes de la temporada de lluvias, los vástagos se traban, y un rodillo que ya no gira termina saliéndose del riel.',
      'No trate de meterla a la fuerza. Una puerta fuera del riel puede caerse, y la tensión que sigue en los resortes la vuelve impredecible. Mantenga lejos a las personas y a los carros hasta que quede asegurada. Ya en seguridad el trabajo es directo: alinear el riel, cambiar los rodillos y las secciones dobladas, revisar los cables y los resortes que pudieron causarlo, y rebalancear.',
    ],
    benefits: [
      { title: 'Asegurada antes que nada', text: 'La puerta se sujeta con prensas y se apoya para que nada se mueva mientras trabajamos.' },
      { title: 'Encontramos la causa, no solo el síntoma', text: 'Una puerta que se salió del riel una vez lo va a volver a hacer si se deja puesto el rodillo trabado o el cable oxidado que lo provocó.' },
      { title: 'Piezas dobladas cambiadas, no enderezadas a martillazos', text: 'Un riel enderezado nunca vuelve a correr igual y falla otra vez.' },
      { title: 'Decisión honesta entre reparar y reemplazar', text: 'Si los paneles están dañados sin arreglo, le mostramos por qué, con fotos. En una puerta con carga de viento también revisamos que los refuerzos y los soportes de riel sigan correspondiendo a la certificación.' },
    ],
    process: [
      { title: 'Asegurar y evaluar', text: 'Puerta sujeta, daño documentado, causa identificada.' },
      { title: 'Cotización por escrito', text: 'Incluye si hay que cambiar secciones o rieles.' },
      { title: 'Alinear y cambiar', text: 'Rodillos de vuelta en el riel, componentes doblados cambiados, herrajes apretados.' },
      { title: 'Balance y prueba de ciclo', text: 'Prueba de balance manual y luego un recorrido completo con el abridor.' },
    ],
    quickFacts: [
      { label: 'Precio típico', value: '$140 a $600' },
      { label: 'Daño severo', value: 'Riel doblado o secciones dañadas cuestan más' },
      { label: 'Tiempo en sitio', value: '1 a 3 horas' },
      { label: 'No haga esto', value: 'Usar el abridor ni forzar la puerta de regreso' },
    ],
    faq: [
      { question: '¿Cuánto cuesta arreglar una puerta de garaje fuera del riel en Florida?', answer: 'De $140 a $600 en la mayoría de los casos. Si el riel está doblado o una sección está dañada, el precio sube, porque se cambian piezas en lugar de alinearlas, y eso se lo cotizamos por escrito antes de empezar.' },
      { question: '¿Puedo meter la puerta al riel yo mismo?', answer: 'No. Los resortes siguen con tensión y la puerta se puede caer. Esta es una de las reparaciones caseras verdaderamente peligrosas.' },
      { question: 'Mi carro golpeó la puerta. ¿Se repara o hay que cambiarla?', answer: 'Muchas veces se puede cambiar solo la sección dañada, de $250 a $800, en lugar de la puerta completa, y sale mucho más barato. Fotografiamos el daño y le mostramos las opciones con el precio de cada una.' },
      { question: '¿Por qué se salió del riel?', answer: 'Un golpe, un cable oxidado que dejó caer un lado, rodillos trabados sobre un riel doblado o el viento flexionando la puerta en una tormenta. Saber cuál de las cuatro fue importa, porque si no vuelve a pasar.' },
      { question: 'Mi puerta se salió del riel durante una tormenta. ¿Qué hago?', answer: 'Trátelo como daño de tormenta: manténgase lejos, no use el abridor y llámenos. Primero aseguramos el vano y luego evaluamos si el riel y los paneles se pueden reparar o si la puerta se debe cambiar, y le damos fotos y una cotización por escrito para su aseguradora.' },
    ],
  },
  'garage-door-panel-replacement': {
    name: 'Cambio de Paneles y Secciones de Puerta de Garaje',
    shortName: 'Cambio de Paneles',
    metaTitle: 'Cambio de Paneles de Puerta de Garaje | $250 a $800',
    metaDescription:
      'Cambio de secciones abolladas u oxidadas de puerta de garaje en toda Florida. De $250 a $800 por sección, igualada a la certificación de su puerta.',
    priceNote: 'por sección, cuando el perfil todavía se fabrica',
    priceFactors: [
      'La cantidad de secciones dañadas',
      'El material: una sección de acero y una de madera o aluminio están muy lejos en precio',
      'Si el fabricante todavía produce su perfil, lo que decide la disponibilidad y si se puede conservar la certificación',
      'Pintura o acabado para igualar el resto de la puerta',
    ],
    answer:
      'El cambio de panel de puerta de garaje sustituye una sola sección dañada en lugar de la puerta completa. En Florida cuesta de $250 a $800 por sección instalada, cuando el fabricante todavía produce ese perfil. Suele ser la decisión correcta cuando una o dos secciones están dañadas y el resto de la puerta está sano, y cuesta una fracción de una puerta nueva de $950 a $4,200.',
    intro: [
      'Retroceder contra la sección de abajo es el accidente más común que existe con una puerta de garaje, y las entradas cortas de Florida y los carritos de golf lo hacen más frecuente. Una puerta de garaje está hecha de secciones separadas, así que muchas veces se puede cambiar solo el panel dañado.',
      'El detalle es la disponibilidad, y en Florida hay un segundo detalle: la certificación. Una sección de una puerta con carga de viento o resistente a impactos es parte de un conjunto probado. El repuesto tiene que ser el mismo perfil y el mismo calibre del mismo fabricante para que la puerta conserve la certificación que aparece en su permiso y en su informe de mitigación de viento. Si el modelo ya no se fabrica, la decisión queda entre una diferencia visible en una puerta vieja sin certificación o una puerta nueva certificada, y le ponemos las dos opciones con precio.',
      'El óxido es la otra razón por la que cambiamos secciones aquí. La sección de abajo es la que recibe el agua, y en una puerta a pocas millas de la costa el borde inferior se oxida de adentro hacia afuera en 10 a 15 años. Una sección inferior oxidada en una puerta por lo demás sana es un cambio de una sola sección. Decir que la puerta ya no da para más es la exageración más común de esta industria, y nosotros lo demostramos con fotos antes de decirlo.',
    ],
    benefits: [
      { title: 'Miles de dólares menos que reemplazar', text: 'Cuando aplica, cambiar una sección cuesta una fracción de una puerta nueva instalada.' },
      { title: 'Confirmamos la coincidencia antes de que usted se comprometa', text: 'Identificamos fabricante, modelo, perfil y calibre y revisamos disponibilidad real antes de cotizar.' },
      { title: 'Los dos precios, lado a lado', text: 'Cambio de sección frente a cambio de puerta completa, para que la decisión sea suya y esté informada.' },
      { title: 'Estructura revisada', text: 'Un golpe casi siempre dobla más que el panel. Revisamos riel, rodillos, bisagras y los refuerzos.' },
    ],
    process: [
      { title: 'Identificar la puerta', text: 'Fabricante, modelo y sección, y luego una verificación real de disponibilidad.' },
      { title: 'Cotizar los dos caminos', text: 'Cambio de sección y cambio de puerta completa, con las ventajas y desventajas dichas.' },
      { title: 'Instalar la sección', text: 'Puerta apoyada, sección dañada retirada, sección nueva colocada y alineada, refuerzos y soportes montados según la configuración original.' },
      { title: 'Rebalancear y probar', text: 'Una sección nueva cambia un poco el peso de la puerta, así que se vuelve a revisar el balance de los resortes.' },
    ],
    quickFacts: [
      { label: 'Por sección instalada', value: '$250 a $800' },
      { label: 'Puerta nueva, como referencia', value: '$950 a $4,200' },
      { label: 'Tiempo en sitio', value: '2 a 4 horas' },
      { label: 'Principal limitante', value: 'Si el perfil todavía se fabrica' },
    ],
    faq: [
      { question: '¿Se puede cambiar solo un panel de la puerta de garaje?', answer: 'Sí, cuando el resto de la puerta está sano y todavía hay una sección que coincida. Cuesta de $250 a $800 instalada, frente a $950 a $4,200 por una puerta nueva.' },
      { question: '¿Qué pasa si mi modelo de puerta ya no se fabrica?', answer: 'Entonces las opciones son una coincidencia cercana pero visible, cambiar la sección y repintar toda la puerta, o una puerta nueva. En una puerta certificada solo la sección del fabricante conserva la certificación, así que una puerta certificada descontinuada casi siempre significa reemplazo. Cotizamos cada opción en lugar de empujar la más cara.' },
      { question: '¿Cambiar una sección afecta la certificación contra huracanes?', answer: 'Conserva la certificación solo si el repuesto es la sección del fabricante con el mismo refuerzo. Pedimos esa sección y montamos los refuerzos y los soportes según la configuración original. Una sección genérica en una puerta resistente a impactos lo deja con una puerta que ya no coincide con la certificación registrada, y eso no lo hacemos.' },
      { question: 'Mi sección de abajo está oxidada por completo. ¿Se puede cambiar sola?', answer: 'Por lo general sí, si el óxido está limitado a la sección inferior y el marco, el riel y los herrajes están sanos. Cambiamos la sección, el sello inferior y los soportes inferiores, que casi siempre también están oxidados.' },
      { question: '¿Cómo sé si es cierto que necesito una puerta nueva?', answer: 'Pida fotos del daño y una cotización por escrito de las dos opciones. Cualquier empresa segura de su diagnóstico le da las dos cosas sin discutir.' },
    ],
  },
  'new-garage-door-installation': {
    name: 'Instalación de Puerta de Garaje Nueva',
    shortName: 'Puerta Nueva',
    metaTitle: 'Instalación de Puerta de Garaje | $950 a $4,200',
    metaDescription:
      'Puertas de garaje nuevas con carga de viento instaladas en toda Florida: acero, aluminio, fibra de vidrio, vinilo y madera, con el permiso incluido.',
    priceNote: 'puerta sencilla de acero con carga de viento, instalada, permiso incluido en la cotización',
    priceFactors: [
      'El material: acero, aluminio, vinilo, fibra de vidrio y madera cubren un rango amplio',
      'Puerta sencilla frente a doble de 16 pies, que es el factor más importante de todos',
      'Carga de viento frente a resistente a impactos, y las presiones de diseño más altas cerca de la costa y en la HVHZ',
      'Ventanas, aislamiento, herrajes, colores especiales y estilos exigidos por la asociación de vecinos',
    ],
    answer:
      'La instalación de una puerta de garaje nueva cubre retirar la puerta vieja, montar la puerta nueva con sus rieles, resortes y herrajes, y reconectar el motor. En Florida una puerta sencilla de acero con carga de viento cuesta de $950 a $4,200 instalada, con el permiso de construcción incluido en la cotización. Toda puerta de garaje nueva en Florida debe estar certificada para la presión de viento de su dirección, y el permiso lo saca un contratista con licencia.',
    intro: [
      'La puerta de garaje es el vano más grande de una casa de Florida y cerca de un tercio de la fachada, así que la decisión es mecánica, de código y de apariencia al mismo tiempo. El material fija el precio y el mantenimiento. Instalados, el acero va de $950 a $3,000, el aluminio de $1,300 a $4,000, la fibra de vidrio de $1,400 a $3,800, el vinilo de $1,100 a $2,800 y la madera de $2,200 a $9,000.',
      'La parte de código no es opcional. El Código de Construcción de Florida exige que la puerta esté certificada para la presión de viento de diseño del sitio, documentada en el permiso. En Miami-Dade y Broward eso significa una puerta con NOA de Miami-Dade; en el resto del estado, un Florida Product Approval con su número FL. Una puerta con carga de viento resiste presión. Una puerta resistente a impactos además se prueba contra el impacto de un proyectil grande y es lo que casi todos entienden por puerta de huracán; esas empiezan alrededor de $1,800 y las cubrimos en la página de puertas reforzadas para huracanes.',
      'El acero es la opción normal para la mayoría de las casas: mejor valor, disponible con certificación en todos los niveles de precio, y las versiones aisladas le bajan a un garaje que en agosto llega a 100 grados F. El aluminio y la fibra de vidrio resisten mejor la sal en casas de canal y de playa en Cape Coral, Fort Lauderdale y Jupiter. La madera se ve mejor y es la más cara de mantener frente a termitas y humedad. El mejor momento para cambiarla es de marzo a mayo, antes de que empiece la temporada el 1 de junio y antes de que se alarguen los tiempos de entrega.',
    ],
    benefits: [
      { title: 'Precios publicados por material', text: 'Usted ve los rangos antes de llamar, algo que casi nadie en este mercado le muestra.' },
      { title: 'Permiso resuelto', text: 'Sacamos el permiso como contratista con licencia, la certificación queda documentada en él y usted se queda con el papeleo para su expediente de mitigación de viento.' },
      { title: 'Puerta vieja retirada y desechada', text: 'Incluido, no una sorpresa en la factura.' },
      { title: 'Resortes nuevos calculados para la puerta nueva', text: 'Una puerta certificada pesa más que la que reemplaza. Reutilizar resortes viejos es la razón por la que las puertas nuevas fallan antes de tiempo.' },
    ],
    process: [
      { title: 'Medir y elegir', text: 'Vano medido, altura libre y espacio al fondo revisados, zona de viento y exposición confirmadas, material y estilo elegidos según su presupuesto y las reglas de la asociación de vecinos.' },
      { title: 'Cotización por escrito', text: 'Puerta, herrajes, resortes, mano de obra, permiso, retiro y desecho, todo desglosado.' },
      { title: 'Permiso y tiempo de entrega', text: 'Tramitamos el permiso y pedimos la puerta. Una puerta de acero certificada de línea suele tardar de 2 a 6 semanas; las medidas especiales, los colores y el vidrio de impacto tardan más, y todo tarda más en las semanas posteriores a una tormenta.' },
      { title: 'Instalación e inspección', text: 'Sale la puerta y el riel viejos, entran secciones, riel, refuerzos, resortes y herrajes nuevos, se reconecta el motor, se prueba la reversa de seguridad, se agenda la inspección y se cierra el permiso.' },
    ],
    quickFacts: [
      { label: 'Total instalado', value: '$950 a $4,200, puerta sencilla de acero con carga de viento' },
      { label: 'Puerta de acero instalada', value: '$950 a $3,000' },
      { label: 'Permiso', value: 'Incluido en la cotización, tramitado por nosotros' },
      { label: 'Tiempo en sitio', value: '4 a 6 horas' },
    ],
    faq: [
      { question: '¿Cuánto cuesta una puerta de garaje nueva instalada en Florida?', answer: 'De $950 a $4,200 por una puerta sencilla de acero con carga de viento, permiso incluido. El aluminio, la fibra de vidrio y el vinilo se mueven en rangos parecidos, la madera va de $2,200 a $9,000, y las puertas resistentes a impactos empiezan alrededor de $1,800. Una puerta doble de 16 pies cuesta más que una sencilla y se cotiza después de medir.' },
      { question: '¿Cuál es el mejor material de puerta de garaje para Florida?', answer: 'El acero para la mayoría de las casas: fuerte, de bajo mantenimiento y certificado en todos los niveles de precio. Aluminio o fibra de vidrio a pocas millas de la costa por la resistencia a la sal. Madera cuando manda la apariencia y usted acepta el mantenimiento contra termitas y humedad. El vinilo es la opción económica para una renta o un taller.' },
      { question: '¿Necesito permiso para una puerta de garaje nueva en Florida?', answer: 'Sí. Cambiar una puerta de garaje requiere permiso de construcción, tramitado por un contratista con licencia, con la certificación de viento documentada en él. Nosotros hacemos el trámite, la inspección y el cierre del permiso, y el costo va en la cotización. Cambiar solo el motor normalmente no lo requiere.' },
      { question: '¿Vale la pena una puerta de garaje aislada en Florida?', answer: 'En un garaje anexo, por lo general sí, por la razón contraria a la del norte. Los garajes de verano pasan de los 100 grados F, y una puerta aislada le baja a eso, protege el abridor y además es más rígida y más silenciosa. Si hay una recámara arriba del garaje o el manejador de aire está adentro, la decisión es fácil.' },
      { question: '¿Necesito un motor nuevo con la puerta nueva?', answer: 'Normalmente no. Si su abridor está sano y aguanta el peso de la puerta nueva, lo reconectamos. Una puerta certificada pesa más que la que reemplaza, así que si el abridor queda corto se lo decimos antes y no después.' },
    ],
  },
  'hurricane-rated-garage-door-installation': {
    name: 'Instalación de Puerta de Garaje Reforzada para Huracanes',
    shortName: 'Puerta Reforzada para Huracanes',
    metaTitle: 'Puertas de Garaje para Huracanes | Desde $1,800',
    metaDescription:
      'Puertas resistentes a impactos y para la HVHZ instaladas en Florida con NOA de Miami-Dade o Florida Product Approval. Permiso incluido, de $1,800 a $6,500.',
    priceNote: 'puerta resistente a impactos o para la HVHZ con Florida Product Approval o NOA de Miami-Dade',
    priceFactors: [
      'Carga de viento frente a resistente a impactos, y la presión de diseño de su dirección',
      'Puerta sencilla frente a doble de 16 pies, y los resortes y refuerzos más pesados que pide una doble certificada',
      'Ventanas: las puertas con vidrio resistente a impactos llegan a $8,000 y más',
      'Material y acabado, desde acero blanco de línea hasta aluminio, imitación madera y colores especiales',
    ],
    answer:
      'La instalación de una puerta de garaje reforzada para huracanes cambia su puerta por una probada y aprobada para los requisitos de viento e impacto de Florida: una puerta con NOA de Miami-Dade en la Zona de Huracanes de Alta Velocidad, o una puerta con Florida Product Approval en el resto del estado. En Florida cuesta de $1,800 a $6,500 instalada, con permiso incluido, y las puertas con vidrio resistente a impactos llegan a $8,000 y más. Una puerta certificada puede calificar para un crédito de mitigación de viento en su seguro de casa.',
    intro: [
      'La puerta de garaje es el vano más grande de la casa. Cuando falla en una tormenta la casa se presuriza y lo siguiente en irse es el techo, y por eso el Código de Construcción de Florida trata la puerta de garaje como elemento estructural. Toda puerta instalada en Florida debe estar certificada para la presión de viento de diseño del sitio. Miami-Dade y Broward son la Zona de Huracanes de Alta Velocidad (HVHZ), donde la puerta necesita un Aviso de Aceptación de Miami-Dade, el NOA. En el resto del estado necesita un Florida Product Approval, un número FL, para su zona de viento y su exposición.',
      'Dos certificaciones se confunden. Una puerta con carga de viento está construida y probada para resistir presión, y es el mínimo que permite el código en cualquier parte de Florida. Una puerta resistente a impactos además se prueba contra el impacto de un proyectil grande, el madero de 2 por 4 disparado contra el panel, y es lo que casi todos los dueños de casa entienden por puerta de huracán. Dentro de la HVHZ y a lo largo de la costa, donde los vanos deben tener protección de impacto, el camino práctico en una puerta de garaje es una puerta resistente a impactos, y es la versión que el formato de mitigación de viento de su aseguradora, el OIR-B1-1802, registra como protección certificada del vano. Sacamos el permiso como contratista con licencia, la certificación queda documentada en él y usted se queda con el papeleo.',
      'El calendario importa. La temporada de huracanes va del 1 de junio al 30 de noviembre, y las agendas se llenan desde mayo. Una puerta de acero certificada de línea suele tardar de 2 a 6 semanas; el vidrio de impacto y los colores especiales tardan más, y después de una tormenta con nombre los tiempos de todo se alargan. La mejor ventana es de marzo a mayo. El seguro es la otra razón por la que la gente llama: una puerta certificada con su papeleo puede contribuir a un crédito en la prima bajo las reglas de descuentos por mitigación de Florida. Decimos que puede calificar, le entregamos la documentación y usted le pide a su aseguradora la tabla de créditos. Cuando el programa My Safe Florida Home está abierto, ha ofrecido apoyos para protección de vanos, incluidas las puertas de garaje.',
    ],
    benefits: [
      { title: 'La aprobación correcta para su condado', text: 'Una puerta con NOA de Miami-Dade en Miami-Dade y Broward, y una puerta con Florida Product Approval en el resto, ajustada a su zona de viento y su exposición.' },
      { title: 'Permiso e inspección resueltos', text: 'Tramitamos el permiso con el número de aprobación, agendamos la inspección y cerramos el permiso. El costo va en la cotización.' },
      { title: 'Carga de viento o resistente a impactos, explicado', text: 'Le decimos cuál exige el código en su dirección y cuánto cuesta subir a impacto, para que elija con los números enfrente.' },
      { title: 'Documentación para su aseguradora', text: 'Número de aprobación, permiso y fotos en un solo expediente para su inspección de mitigación de viento. Una puerta certificada puede calificar para un crédito; la tabla la define su aseguradora.' },
    ],
    process: [
      { title: 'Revisión del sitio y zona de viento', text: 'Medimos el vano, confirmamos su condado, su zona de viento y su categoría de exposición, y revisamos las reglas de estilo de la asociación de vecinos.' },
      { title: 'Elección de puerta y cotización por escrito', text: 'Carga de viento o resistente a impactos, material, ventanas y color, todo desglosado con el costo del permiso.' },
      { title: 'Permiso y pedido', text: 'Tramitamos el permiso con el número de aprobación y pedimos la puerta. Le decimos el tiempo de entrega real y no el optimista.' },
      { title: 'Instalación e inspección', text: 'Sale la puerta vieja, entran la puerta certificada, el riel, los refuerzos, los resortes y los soportes según el plano de la aprobación, se reconecta el motor, se pasa la inspección y se cierra el permiso.' },
    ],
    quickFacts: [
      { label: 'Precio instalado', value: '$1,800 a $6,500' },
      { label: 'Puertas con vidrio de impacto', value: '$8,000 y más' },
      { label: 'Condados de la HVHZ', value: 'Miami-Dade y Broward, se exige NOA' },
      { label: 'Mejor momento para pedirla', value: 'De marzo a mayo' },
    ],
    faq: [
      { question: '¿Cuánto cuesta una puerta de garaje reforzada para huracanes en Florida?', answer: 'De $1,800 a $6,500 instalada en la mayoría de las casas, con permiso incluido. Una puerta sencilla de acero con carga de viento queda en la parte baja, una doble de acero resistente a impactos en la parte media, y las puertas de vidrio completo resistentes a impactos llegan a $8,000 y más.' },
      { question: '¿Cuál es la diferencia entre una puerta con carga de viento y una resistente a impactos?', answer: 'Una puerta con carga de viento se prueba para resistir la presión de diseño de su sitio y es el mínimo que permite el código en cualquier parte de Florida. Una puerta resistente a impactos además se prueba contra el impacto de un proyectil grande, y es lo que significa puerta de huracán para casi todos los dueños de casa y para el inspector de mitigación de viento de su aseguradora. La resistente a impactos cuesta más y es la que recomendamos cerca de la costa y en la HVHZ.' },
      { question: '¿Cuál es la diferencia entre un NOA de Miami-Dade y un Florida Product Approval?', answer: 'Los dos son la prueba de que la puerta se ensayó según el código. El Aviso de Aceptación de Miami-Dade es la aprobación que exigen Miami-Dade y Broward en la Zona de Huracanes de Alta Velocidad, y se acepta en todo el estado. El Florida Product Approval, el número FL, es la aprobación estatal y es la que usa el resto de Florida. Fuera de la HVHZ sirve cualquiera de las dos; dentro, se necesita el NOA.' },
      { question: '¿Una puerta reforzada para huracanes baja mi seguro?', answer: 'Puede hacerlo. La inspección de mitigación de viento de Florida registra si los vanos, incluida la puerta de garaje, tienen protección certificada, y una puerta certificada puede contribuir a un crédito bajo las reglas estatales de descuentos por mitigación. Le damos la documentación y usted le pide a su aseguradora su tabla de créditos. No prometemos una cifra en dólares porque cada póliza es distinta.' },
      { question: '¿Puedo reforzar mi puerta actual en lugar de cambiarla?', answer: 'Fuera de la HVHZ, un kit de refuerzo con Florida Product Approval puede llevar una puerta existente a una certificación de viento por mucho menos que una puerta nueva, y nosotros los instalamos. En Miami-Dade y Broward el camino aceptado es una puerta certificada. Ningún kit hace que una puerta sea a prueba de huracanes, nada lo es, y un kit no convierte una puerta sin certificación en una resistente a impactos.' },
    ],
  },
  'storm-damage-garage-door-repair': {
    name: 'Reparación de Puerta de Garaje por Daños de Tormenta',
    shortName: 'Daños de Tormenta',
    metaTitle: 'Daños de Tormenta en Puerta de Garaje | $150 a $1,500',
    metaDescription:
      '¿Puerta doblada, fuera del riel o colgando tras un huracán? Aseguramos el vano, documentamos el daño para su reclamo y reparamos de $150 a $1,500 en Florida.',
    priceNote: 'evaluación, apuntalamiento y reparación de panel o riel; el reemplazo completo se cotiza aparte',
    priceFactors: [
      'Cuánto sobrevivió: un riel inferior doblado es un trabajo chico, dos secciones marcadas y un riel torcido no lo son',
      'Si la puerta está certificada y si todavía se fabrican las secciones que coinciden',
      'Daño por agua y marejada en el abridor, los rodillos y los cables, que es aparte del daño por viento',
      'El envío fuera de horario en los días posteriores a una tormenta lleva el recargo de emergencia de $150 a $300',
    ],
    answer:
      'La reparación de puerta de garaje por daños de tormenta es la evaluación, el aseguramiento y la reparación de una puerta golpeada por viento, escombros o marejada: paneles doblados hacia adentro, riel torcido, una puerta sacada del riel por la presión. En Florida cuesta de $150 a $1,500 la evaluación, el apuntalamiento y la reparación de panel o riel, y el reemplazo completo se cotiza aparte por escrito. Documentamos el daño con fotos para su reclamo de seguro y no inflamos las reparaciones de tormenta.',
    intro: [
      'Después de una tormenta con nombre el daño sigue un patrón. La presión del viento arquea los paneles hacia adentro y saca los vástagos de los rodillos del riel. Los escombros abollan o perforan una sección. En la costa, la marejada empuja hacia adentro las secciones de abajo y deja agua salada en el riel, en los rodillos y en el carril del abridor; Helene hizo esto en Clearwater, St. Petersburg y Cape Coral en 2024, e Ian lo hizo de Fort Myers a Port Charlotte en 2022. Una puerta que se ve derecha puede estar fuera del riel de un lado o colgando de un solo cable.',
      'El primer trabajo es el vano, no la puerta. Un garaje abierto después de una tormenta es un problema de seguridad y, con la lluvia que sigue, un problema de agua. Aseguramos la puerta en su lugar, la apuntalamos si los paneles están comprometidos y cerramos el vano en la misma visita, incluso cuando la reparación definitiva necesita piezas. Después evaluamos: si el riel, los rodillos, los cables y los resortes sobrevivieron, si las secciones se pueden cambiar, y si la puerta y su certificación se perdieron y el reemplazo es la respuesta honesta.',
      'Cada huracán produce la misma queja: precios que se duplican la semana siguiente. Los nuestros no. La reparación se cotiza en los mismos rangos publicados de cualquier otro mes, el recargo de emergencia por venir fuera de horario se dice antes de salir, y usted recibe fotos, un alcance por escrito y una cotización desglosada que puede entregarle a su ajustador. El reclamo es suyo y no negociamos con la aseguradora por usted; le damos la documentación para que lo haga.',
    ],
    benefits: [
      { title: 'Primero se asegura el vano', text: 'Apuntalado y cerrado en la misma visita, para que la casa no quede abierta a la calle ni a la siguiente banda de lluvia.' },
      { title: 'Documentación para su reclamo', text: 'Fotos con fecha, una evaluación de daños por escrito y una cotización desglosada, en la forma que espera un ajustador.' },
      { title: 'Reparar o reemplazar, con honestidad', text: 'Si hay dos secciones y el riel doblados en una puerta vieja sin certificación, una puerta nueva certificada suele ser el mejor gasto. Le mostramos las dos con precio.' },
      { title: 'Los mismos precios de cualquier otro mes', text: 'Rangos publicados, un recargo dicho por adelantado y ningún sobreprecio por tormenta.' },
    ],
    process: [
      { title: 'Clasificación por teléfono', text: 'Si el vano está abierto, si hay alguien en riesgo, si la puerta está colgando. En los días posteriores a una tormenta programamos por gravedad y le decimos la ventana real.' },
      { title: 'Asegurar y evaluar', text: 'Puerta sujeta, apuntalada o cerrada, daño fotografiado, causa y alcance escritos.' },
      { title: 'Cotización por escrito', text: 'Reparación en los rangos publicados, o reemplazo cotizado aparte, con lo que su aseguradora va a pedir adjunto.' },
      { title: 'Reparar y probar', text: 'Riel, rodillos, cables, resortes y secciones cambiados según haga falta, abridor revisado por agua y por pico de voltaje, ciclo completo y prueba de seguridad.' },
    ],
    quickFacts: [
      { label: 'Precio típico', value: '$150 a $1,500' },
      { label: 'Reemplazo completo', value: 'Cotizado aparte por escrito' },
      { label: 'Lo que usted recibe', value: 'Fotos, evaluación escrita y cotización desglosada' },
      { label: 'Recargo de emergencia', value: '$150 a $300, dicho antes de salir' },
    ],
    faq: [
      { question: '¿Cuánto cuesta reparar una puerta de garaje después de un huracán?', answer: 'De $150 a $1,500 por la evaluación, el apuntalamiento y la reparación normal de panel, rodillos o riel, en los mismos rangos que publicamos todo el año. Una puerta que necesita reemplazo se cotiza aparte: de $950 a $4,200 por una puerta sencilla de acero con carga de viento y de $1,800 a $6,500 por una resistente a impactos.' },
      { question: '¿Mi seguro cubre el daño de tormenta en la puerta de garaje?', answer: 'El daño por viento normalmente está cubierto por una póliza de casa de Florida, sujeto a su deducible de huracán, que es un porcentaje de la cobertura de la vivienda y no un monto fijo, y muchas veces resulta mayor que la reparación. El daño por marejada cae en el seguro contra inundación y no en la póliza de casa. Revise su carátula de póliza antes de reclamar. De cualquier forma le damos las fotos y la cotización.' },
      { question: 'Mi puerta quedó colgando del riel después de la tormenta. ¿Qué hago ahora?', answer: 'Mantenga a todos lejos, no use el abridor y no trate de jalarla de regreso al riel. Una puerta fuera del riel o colgando de un cable se puede caer. Fotografíela tal como quedó antes de mover nada y luego llámenos.' },
      { question: '¿Se puede volver a usar una puerta que se salió del riel en una tormenta?', answer: 'Muchas veces sí, si las secciones están derechas y el riel solo está doblado abajo. Cambiamos el riel doblado, los rodillos y cualquier cable que se haya salido, y rebalanceamos. Si una sección quedó marcada, la puerta perdió rigidez y, si estaba certificada, perdió la certificación, y se lo decimos con claridad.' },
      { question: '¿Cobran más después de un huracán?', answer: 'No. La reparación se cotiza en los mismos rangos publicados. El recargo de emergencia de $150 a $300 aplica solo al envío del mismo día y fuera de horario, igual que en marzo, y se lo decimos antes de salir.' },
    ],
  },
  'emergency-garage-door-repair': {
    name: 'Reparación de Emergencia de Puerta de Garaje',
    shortName: 'Reparación de Emergencia',
    metaTitle: 'Reparación de Emergencia de Puerta de Garaje | 7 Días',
    metaDescription:
      '¿Carro encerrado, resorte roto o puerta atorada con tormenta en camino? Servicio el mismo día en Florida, los 7 días. Recargo de $150 a $300 dicho antes.',
    priceNote: 'recargo de salida por servicio el mismo día y fuera de horario, adicional al precio de la reparación',
    priceFactors: [
      'Este es solo el recargo de salida. La reparación se cotiza en su propio precio inicial publicado',
      'La hora del día y el día de la semana',
      'Si hay que conseguir piezas antes de la reparación definitiva',
      'La demanda en los días alrededor de una tormenta con nombre, cuando programamos por gravedad',
    ],
    answer:
      'La reparación de emergencia de puerta de garaje es servicio el mismo día para una puerta que falló de una forma que usted no puede esperar: un resorte roto con el carro encerrado, una puerta atorada abierta o una puerta fuera del riel. En Florida el recargo de salida de emergencia es de $150 a $300 por el envío del mismo día y fuera de horario, dicho antes de salir, y la reparación se cotiza aparte en su precio publicado normal.',
    intro: [
      'Dos situaciones hacen que esto sea urgente y no solo molesto. El carro quedó encerrado y usted lo necesita en la mañana, o la puerta quedó atorada abierta y su garaje, con todo lo que guarda ahí, quedó abierto a la calle. Una tormenta a 48 horas con una puerta que no cierra es la tercera, y esas las movemos al frente de la lista.',
      'Lo que no hacemos es usar la urgencia para inflar el precio. El recargo se dice por adelantado, la reparación se cotiza en el mismo rango publicado que tendría un martes por la tarde, y usted aprueba las dos cosas antes de que empiece nada. Nuestro horario es de 7:00 a 20:00 de lunes a viernes, de 8:00 a 18:00 el sábado y de 9:00 a 17:00 el domingo, y el servicio el mismo día corre los siete días de la semana.',
      'Si en realidad no es una emergencia, se lo decimos y lo agendamos normal al precio más bajo. Una puerta ruidosa o lenta es una cita programada y no una llamada de las 10 de la noche. Una puerta que no abre por un resorte roto un martes en la mañana casi siempre sí lo es, porque en la mayoría de las casas de Florida no hay otra forma de sacar el carro.',
    ],
    benefits: [
      { title: 'El mismo día, con una ventana real', text: 'Una ventana de horario que pensamos cumplir y una llamada si algo cambia.' },
      { title: 'El recargo dicho por adelantado', text: 'Usted conoce el costo de la salida antes de que enviemos a alguien, no cuando llega la factura.' },
      { title: 'Los precios normales siguen aplicando', text: 'La reparación se cotiza en su rango publicado de siempre. La urgencia no cambia nuestros números.' },
      { title: 'Le decimos cuando no es urgente', text: 'Si puede esperar con seguridad a una cita normal, se lo decimos y le ahorramos el recargo.' },
    ],
    process: [
      { title: 'Clasificación por teléfono', text: 'Qué se rompió, si el carro quedó encerrado, si la casa quedó abierta y si esto de verdad necesita resolverse hoy.' },
      { title: 'Ventana y precio acordados', text: 'El recargo de salida y el rango probable de la reparación, antes de enviar a alguien.' },
      { title: 'Primero dejarlo seguro', text: 'La prioridad es una puerta que no se vaya a caer ni deje la casa abierta.' },
      { title: 'Reparar y probar', text: 'La reparación definitiva cuando las piezas lo permiten, o un cierre temporal documentado con una segunda visita agendada.' },
    ],
    quickFacts: [
      { label: 'Recargo de emergencia', value: '$150 a $300' },
      { label: 'Costo de la reparación', value: 'Rangos publicados normales' },
      { label: 'Disponibilidad', value: 'El mismo día, los siete días' },
      { label: 'Llamada más común', value: 'Resorte roto con el carro encerrado' },
    ],
    faq: [
      { question: '¿Ofrecen reparación de puerta de garaje el mismo día en Florida?', answer: 'Sí, los siete días de la semana, desde Miami-Dade y Broward, pasando por los Palm Beaches, Tampa Bay, Florida Central y el suroeste, hasta el norte de Florida. Llame y recibe una ventana real de llegada y el precio antes de que enviemos a alguien.' },
      { question: '¿Cuánto cuesta una reparación de emergencia de puerta de garaje?', answer: 'El recargo de salida de emergencia es de $150 a $300, y la reparación se cotiza en el mismo rango publicado que cualquier otro día. No subimos el precio de la reparación por ser urgente.' },
      { question: 'Mi carro quedó encerrado en el garaje. ¿Qué hago ahora?', answer: 'No use el abridor contra un resorte roto. Jale el cordón rojo de liberación solo si tiene ayuda para levantar y sostener una puerta que pesa de 130 a 350 libras; si no, déjela y llámenos. Nunca deje sola una puerta apuntalada.' },
      { question: '¿Mi casa está segura con la puerta atorada abierta?', answer: 'No, y en la temporada de lluvias además es un problema de agua. Incluso cuando hay que pedir una pieza, normalmente podemos cerrar y asegurar la puerta en la misma visita y volver a terminar.' },
      { question: 'Se fue la luz y la puerta no abre. ¿Eso es una emergencia?', answer: 'Por lo general no. Con la puerta totalmente cerrada, jale el cordón rojo de liberación manual del carro del riel y levante a mano. Si la puerta pesa muchísimo al levantarla, el resorte está roto: deténgase y llámenos. Si esto pasa después de cada tormenta, la batería de respaldo en el abridor cuesta de $60 a $150 y lo resuelve.' },
    ],
  },
  'garage-door-tune-up': {
    name: 'Mantenimiento y Ajuste de Puerta de Garaje',
    shortName: 'Mantenimiento',
    metaTitle: 'Mantenimiento de Puerta de Garaje | Desde $85',
    metaDescription:
      'Mantenimiento de puerta de garaje en Florida: balance, rodillos, cables, revisión de óxido, sensores y sello inferior. De $85 a $160, ideal en abril o mayo.',
    priceNote: 'servicio anual, ideal en abril o mayo antes de la temporada',
    priceFactors: [
      'Puertas dobles y garajes de tres carros con dos puertas',
      'Cualquier pieza que se encuentre gastada u oxidada durante el servicio, cotizada aparte antes de cambiarla',
      'Puertas que llevan muchos años sin servicio',
      'Un kit de refuerzo o una mejora de herrajes si quiere dejar la puerta lista para la temporada en la misma visita',
    ],
    answer:
      'El mantenimiento de puerta de garaje es un servicio anual que revisa y ajusta las piezas que se desgastan: balance de los resortes, rodillos, bisagras, cables, rieles, sello inferior, sensores de seguridad y ajustes del motor. En Florida cuesta de $85 a $160 y el mejor momento es abril o mayo, antes de que empiece la temporada de huracanes el 1 de junio. Su valor real es encontrar un cable oxidado o un resorte cansado antes de que falle con el carro adentro.',
    intro: [
      'Casi todas las llamadas de emergencia que recibimos se podían evitar. Los resortes avisan con una puerta pesada de levantar a mano. Los cables muestran óxido en el soporte inferior durante meses antes de romperse. Los rodillos rechinan mucho antes de brincar el riel. La humedad y el aire salino hacen todo eso más rápido en Florida, y una puerta a pocas millas de cualquiera de las dos costas no debería pasar un año sin que alguien revise los herrajes.',
      'Abril o mayo es el mes correcto. El mantenimiento es donde confirmamos que la puerta va a cerrar y a trabar antes de una tormenta, revisamos que los tornillos de riel y los refuerzos de una puerta certificada estén apretados, probamos la liberación manual que va a necesitar en un apagón y cambiamos un sello inferior que lleva desde el verano pasado parado en el agua. Los residentes de temporada en el suroeste de Florida y los Palm Beaches suelen agendarlo la semana antes de irse en primavera o la semana en que regresan en noviembre.',
      'El mantenimiento también es donde le decimos que no hay nada mal, cosa que pasa seguido. Ese es un resultado legítimo y no le vamos a vender una pieza para justificar la visita. Lo que sí encontremos se cotiza aparte antes de tocarlo.',
    ],
    benefits: [
      { title: 'Encuentra las fallas antes de que lo dejen a pie', text: 'Un cable oxidado encontrado en abril es una cita programada y no un carro encerrado un lunes en la mañana.' },
      { title: 'Lista para la temporada', text: 'La puerta cierra por completo, la traba entra, los herrajes certificados quedan apretados y la liberación manual funciona, antes del 1 de junio.' },
      { title: 'Puerta más silenciosa y más suave', text: 'Casi todo el ruido con el que la gente vive son rodillos secos, herrajes flojos y una cadena que necesita ajuste.' },
      { title: 'Sin hallazgos inventados', text: 'Si todo está bien, le decimos que todo está bien.' },
    ],
    process: [
      { title: 'Prueba de balance', text: 'Abridor desconectado y puerta revisada para ver si se sostiene a la altura de la cintura.' },
      { title: 'Inspección de herrajes y corrosión', text: 'Rodillos, bisagras, soportes inferiores, cables, tambores y riel, con atención especial a todo lo que esté oxidándose, además de cada tornillo que se afloja en un año.' },
      { title: 'Lubricación y ajuste', text: 'El lubricante correcto en las piezas correctas, rieles limpios, herrajes apretados y sello inferior revisado.' },
      { title: 'Revisión de seguridad y del motor', text: 'Fotoceldas, reversa automática, límites de fuerza y de recorrido, liberación manual, batería de respaldo y pilas de los controles.' },
    ],
    quickFacts: [
      { label: 'Precio típico', value: '$85 a $160' },
      { label: 'Recomendado', value: 'Una vez al año, en abril o mayo' },
      { label: 'Tiempo en sitio', value: '45 a 90 minutos' },
      { label: 'Mayor beneficio', value: 'Encontrar primero un cable oxidado o un resorte cansado' },
    ],
    faq: [
      { question: '¿Cada cuánto se le debe dar servicio a una puerta de garaje en Florida?', answer: 'Una vez al año en una puerta de uso normal, en abril o mayo antes de la temporada. En una casa de canal o de primera línea de playa, o en una puerta que corre 6 o más veces al día, cada 6 meses vale la pena.' },
      { question: '¿Qué incluye el mantenimiento de una puerta de garaje?', answer: 'Prueba de balance, inspección de rodillos, bisagras, cables, tambores, soportes inferiores y riel con revisión de corrosión, lubricación, apriete de herrajes, revisión del sello inferior, prueba de los sensores de seguridad y de la reversa automática, prueba de la liberación manual y revisión de la fuerza y los límites del abridor.' },
      { question: '¿El mantenimiento evita que se rompa el resorte?', answer: 'No puede detener la fatiga del metal, pero le avisa que el resorte está cerca del final para que lo cambie cuando a usted le convenga y no la mañana en que el carro quedó encerrado.' },
      { question: 'Mi puerta solo hace ruido. ¿Eso es mantenimiento?', answer: 'Por lo general sí. Casi todo el ruido viene de rodillos secos, herrajes flojos o una cadena que necesita ajuste, y todo eso son puntos de mantenimiento y no reparaciones.' },
      { question: '¿El mantenimiento prepara mi puerta para un huracán?', answer: 'Cubre la parte mecánica: que la puerta cierre por completo, que la traba entre, que los herrajes del riel y los refuerzos estén apretados y que la liberación manual funcione. No convierte una puerta sin certificación en una certificada. Si su puerta no tiene carga de viento, pregúntenos por un kit de refuerzo o por una puerta certificada, y hágalo en primavera y no la semana en que le ponen nombre a una tormenta.' },
    ],
  },
};
