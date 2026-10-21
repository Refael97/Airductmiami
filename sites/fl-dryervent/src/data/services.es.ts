/**
 * Spanish content for the nine services, keyed by the same slug as
 * services.ts. Written for a Florida Spanish speaker, not translated.
 */

export interface ServiceEsContent {
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  answer: string;
  intro: string[];
  benefits: { title: string; text: string }[];
  process: { title: string; text: string }[];
  quickFacts: { label: string; value: string }[];
  faq: { question: string; answer: string }[];
}

export const serviceEsContent: Record<string, ServiceEsContent> = {
  'dryer-vent-cleaning': {
    name: 'Limpieza de Ventila de Secadora',
    shortName: 'Limpieza',
    metaTitle: 'Limpieza de Ventila de Secadora en Florida | $100 a $200',
    metaDescription:
      'Limpieza de ventila de secadora en Florida, $100 a $200. Medimos el flujo de aire afuera antes y después, limpiamos todo el tramo y le damos el precio antes de agendar.',
    answer:
      'La limpieza de la ventila de la secadora saca la pelusa acumulada en el ducto entre la secadora y la salida de afuera. En Florida cuesta entre $100 y $200, y medimos el flujo de aire en la salida antes y después para que usted vea la diferencia en un número.',
    intro: [
      'El filtro de pelusa de la secadora atrapa casi toda, no toda. La que pasa se va quedando en el ducto, más en las curvas, en las uniones y en el último tramo antes de la salida. Con la humedad de Florida esa pelusa se asienta mojada y se compacta en lugar de salir. El tiempo de secado sube tan despacio que casi nadie lo nota hasta que las toallas necesitan dos ciclos.',
      'Una ventila tapada hace que la secadora trabaje más caliente y más tiempo. Eso cuesta electricidad, desgasta la resistencia y el fusible térmico, y es la condición detrás de la causa principal de incendios de secadora en las casas, que según la Administración de Incendios de Estados Unidos es no limpiarla.',
      'La mayoría de las casas la necesita una vez al año. Un tramo largo por el ático o hasta el techo, una familia grande o mascotas que sueltan mucho pelo pueden bajar eso a cada seis o nueve meses. Se lo decimos después de medir su ventila, no antes.',
    ],
    benefits: [
      { title: 'Un número, no una opinión', text: 'Medimos el flujo en la salida antes de empezar y otra vez al terminar, con el mismo instrumento y en el mismo punto.' },
      { title: 'Todo el tramo, desde los dos lados', text: 'Cepillo rotatorio y aire comprimido desde la lavandería y desde afuera cuando el tramo lo permite, para que la pelusa salga de la casa.' },
      { title: 'Manguera y salida incluidas', text: 'La manguera detrás de la secadora y la aleta de la salida son donde está gran parte de las obstrucciones. Son parte del trabajo, no extras.' },
      { title: 'Precio antes de agendar', text: 'Le damos el precio de su tramo por teléfono. Si lo que encontramos lo cambia, se lo decimos antes de hacer algo más.' },
    ],
    process: [
      { title: 'Medir', text: 'Lectura del flujo de aire en la salida de afuera con la secadora prendida, antes de tocar nada.' },
      { title: 'Desconectar y revisar', text: 'Separamos la secadora, revisamos la manguera y la conexión en la pared, y anotamos lo que esté aplastado, roto o fuera de código.' },
      { title: 'Limpiar el tramo', text: 'Cepillo rotatorio y aire comprimido por todo el largo, desde los dos extremos cuando se puede.' },
      { title: 'Liberar la salida', text: 'Quitamos pelusa, nidos y basura de la salida y dejamos la aleta abriendo con la secadora y cerrando cuando para.' },
      { title: 'Medir otra vez y reconectar', text: 'Segunda lectura, secadora reconectada y probada, y le mostramos los dos números.' },
    ],
    quickFacts: [
      { label: 'Precio típico', value: '$100 a $200' },
      { label: 'Tiempo en su casa', value: '45 a 90 minutos' },
      { label: 'Frecuencia', value: 'Una vez al año en la mayoría de las casas' },
      { label: 'Incluye', value: 'Revisión de manguera, salida y aleta, flujo antes y después' },
    ],
    faq: [
      { question: '¿Cuánto cuesta limpiar la ventila de la secadora en Florida?', answer: 'La mayoría de las casas paga entre $100 y $200. Una ventila corta por la pared queda abajo del rango y un tramo largo por el ático hasta el techo queda arriba. Le damos el precio de su tramo antes de agendar.' },
      { question: '¿Cada cuánto hay que limpiarla?', answer: 'Una vez al año en una casa normal. Cada seis a nueve meses con un tramo largo o por el techo, varias cargas al día, o mascotas que sueltan mucho pelo.' },
      { question: '¿Cómo sé que mi ventila está tapada?', answer: 'Ropa que necesita dos ciclos, una secadora o un cuarto de lavado caliente después de una carga, olor a quemado, o una aleta afuera que casi no se mueve con la secadora prendida.' },
      { question: '¿Limpian ventilas en condominios?', answer: 'Sí. Limpiamos la parte que es suya, de la secadora a la conexión en la pared o el techo. Donde se une a un ducto compartido con otras unidades, ese ducto es de la asociación, y se lo decimos claramente.' },
    ],
  },
  'dryer-vent-repair': {
    name: 'Reparación de Ventila de Secadora',
    shortName: 'Reparación',
    metaTitle: 'Reparación y Reemplazo de Ventila de Secadora en Florida',
    metaDescription:
      'Reparación de ventila de secadora en Florida: uniones sueltas, ducto aplastado o de aluminio flexible, pelusa saliendo al ático. $200 a $600, cotizado antes de empezar.',
    answer:
      'La reparación arregla lo que una limpieza no puede: una unión que se soltó, un tramo aplastado, manguera de aluminio escondida en la pared, o un ducto que está echando pelusa al ático. En Florida cuesta entre $200 y $600, según dónde esté el daño y cuánto del tramo haya que cambiar.',
    intro: [
      'Hay ventilas que están limpias y aun así no funcionan. Una unión en el ático se separó y la secadora está soplando pelusa caliente y húmeda sobre el aislamiento. Un tramo detrás de la máquina quedó aplastado al empujar la secadora contra la pared. Un dueño anterior pasó manguera de aluminio por dentro de una pared. Limpiar eso solo mueve la pelusa de lugar.',
      'Primero encontramos la falla y después cotizamos. La lectura del flujo en la salida nos dice si el aire está saliendo, y la revisión del tramo nos dice dónde se está perdiendo. Usted ve lo que encontramos y recibe un solo precio antes de abrir nada.',
      'Reparamos o reemplazamos el ducto con metal rígido, sellamos las uniones con cinta de aluminio en lugar de tornillos que atrapan pelusa, y usamos la ruta segura más corta que permita la casa. Si el tramo es más largo de lo que permite el código de construcción de Florida para su secadora, se lo decimos.',
    ],
    benefits: [
      { title: 'Primero se ve, después se cotiza', text: 'Usted ve la unión suelta o el tramo aplastado antes de aceptar nada.' },
      { title: 'Metal rígido bien sellado', text: 'Nada de manguera de aluminio o plástico dentro de paredes o techos, nada de tornillos atravesando el ducto.' },
      { title: 'Largo revisado contra el código', text: 'Medimos el tramo contra el límite de 35 pies y sus descuentos por curva, o el límite del fabricante si permite más.' },
      { title: 'Se limpia como parte del trabajo', text: 'El tramo reparado se limpia completo antes de volver a usarse.' },
    ],
    process: [
      { title: 'Flujo y revisión', text: 'Lectura en la salida y revisión del tramo de la secadora a la salida.' },
      { title: 'Mostrar y cotizar', text: 'Qué falló, dónde, y un precio para arreglarlo.' },
      { title: 'Reparar', text: 'Tramos dañados cambiados por metal rígido, uniones ajustadas y selladas, soportes donde el ducto se descuelga.' },
      { title: 'Limpiar y probar', text: 'Tramo completo limpio, salida y aleta liberadas, flujo medido otra vez.' },
    ],
    quickFacts: [
      { label: 'Precio típico', value: '$200 a $600' },
      { label: 'Falla más común', value: 'Unión suelta o manguera aplastada' },
      { label: 'Ducto', value: 'Metal rígido de 4 pulgadas' },
      { label: 'Tiempo en su casa', value: '1 a 3 horas' },
    ],
    faq: [
      { question: '¿Cuánto cuesta reparar la ventila de la secadora?', answer: 'Entre $200 y $600 en Florida. Una manguera aplastada o una unión suelta queda abajo; cambiar un tramo largo en el ático o cambiar la ruta queda arriba. Le damos un solo precio antes de empezar.' },
      { question: '¿Se permite la manguera de aluminio flexible?', answer: 'Solo como la manguera corta de transición detrás de la secadora, de no más de 8 pies y nunca escondida dentro de una pared, piso o techo. Dentro de la estructura el ducto tiene que ser de metal rígido.' },
      { question: '¿Por qué hay pelusa en mi ático?', answer: 'Una unión del tramo se separó o el ducto está cortado o aplastado, y la secadora está echando el aire al ático. Es pelusa caliente, húmeda e inflamable junto al aislamiento y la madera, y hay que repararlo, no solo limpiarlo.' },
    ],
  },
  'dryer-vent-installation': {
    name: 'Instalación de Ventila y Ducto de Secadora',
    shortName: 'Instalación',
    metaTitle: 'Instalación de Ventila de Secadora en Florida | $200 a $600',
    metaDescription:
      'Instalación de ventila y ducto de secadora en Florida: metal rígido, la ruta legal más corta, lavanderías nuevas y reemplazos completos. $200 a $600.',
    answer:
      'La instalación pone un ducto nuevo para la secadora, sea para una lavandería en otro lugar o para reemplazar un tramo que ya no sirve. En Florida cuesta entre $200 y $600, con ducto de metal rígido de 4 pulgadas por la ruta más corta que permita la casa y dentro del límite de largo del código.',
    intro: [
      'Nos llaman por tres razones. Se está moviendo la lavandería, muchas veces al garaje, a un clóset o al segundo piso, y hace falta una ventila donde no había. El tramo viejo es de aluminio o plástico dentro de las paredes, o es tan largo y con tantas curvas que nunca va a sacar suficiente aire. O una remodelación tapó la ruta vieja y la secadora está ventilando hacia adentro de una pared.',
      'La ruta importa más que todo. Cada curva le quita largo permitido al tramo, así que la mejor instalación suele ser la que tiene menos vueltas, por una pared cuando se puede en lugar de subir al techo. Cuando el techo es la única salida, usamos una salida de techo con aleta y sin malla.',
      'Toda instalación es de metal rígido liso por dentro, con las uniones selladas con cinta de aluminio, sostenida a lo largo, y termina en una salida con aleta que funciona, a por lo menos 3 pies de cualquier ventana, puerta u otra abertura.',
    ],
    benefits: [
      { title: 'La ruta legal más corta', text: 'Planeada con el límite de 35 pies y sus descuentos por curva, o el límite más largo del fabricante cuando aplica.' },
      { title: 'Metal rígido en todo el tramo', text: 'Liso por dentro, cinta de aluminio en las uniones, sin tornillos en el paso del aire.' },
      { title: 'Salida correcta', text: 'Salida en la pared o en el techo con aleta y sin malla, lejos de ventanas y puertas.' },
      { title: 'Se mide al terminar', text: 'Probamos el tramo nuevo en la salida para que usted sepa que saca el aire que debe.' },
    ],
    process: [
      { title: 'Planear la ruta', text: 'Posición de la lavandería, punto de salida y largo del tramo, y el precio.' },
      { title: 'Cortar y montar', text: 'Abertura en la pared o el techo hecha y sellada, ducto de metal rígido instalado y sostenido.' },
      { title: 'Terminar la salida', text: 'Salida en la pared o el techo con aleta, sellada contra la lluvia de Florida.' },
      { title: 'Conectar y probar', text: 'Manguera de transición aprobada detrás de la secadora, flujo medido en la salida.' },
    ],
    quickFacts: [
      { label: 'Precio típico', value: '$200 a $600' },
      { label: 'Ducto', value: 'Metal rígido de 4 pulgadas' },
      { label: 'Largo máximo por código', value: '35 pies menos 2.5 por curva de 45° y 5 por curva de 90°' },
      { label: 'Salida', value: 'Con aleta, sin malla, a 3 pies de aberturas' },
    ],
    faq: [
      { question: '¿Cuánto cuesta instalar una ventila de secadora en Florida?', answer: 'Entre $200 y $600. Un tramo corto que sale directo por la pared queda abajo; un tramo largo por el ático hasta el techo, o una lavandería nueva que necesita ruta desde cero, queda arriba.' },
      { question: '¿Puedo mover la secadora al garaje o al segundo piso?', answer: 'Casi siempre, si hay una ruta hacia afuera dentro del largo permitido. Vemos el lugar y se lo decimos antes de que usted haga el cambio.' },
      { question: '¿Es mejor la salida por la pared o por el techo?', answer: 'Por la pared, cuando se puede. Es más corta, tiene menos curvas, es más fácil de limpiar y no junta basura del techo.' },
    ],
  },
  'roof-and-wall-vent-caps': {
    name: 'Salidas de Ventila en Techo y Pared',
    shortName: 'Salidas',
    metaTitle: 'Nidos y Aletas Trabadas en la Ventila de Secadora | Florida',
    metaDescription:
      'Salidas de ventila de secadora en Florida: sacamos nidos de pájaro, liberamos aletas trabadas, quitamos mallas que no se permiten y cambiamos salidas. Precio antes de agendar.',
    answer:
      'La salida al final del tramo es donde muchas ventilas de Florida se tapan de verdad: un nido de pájaro, una aleta oxidada y cerrada, o una malla que alguien puso y que atrapa la pelusa. Limpiarla o cambiarla entra en nuestro rango de limpieza o de reparación, $100 a $200 o $200 a $600, y se cotiza antes de agendar.',
    intro: [
      'En Florida los pájaros anidan todo el año, y la salida de una secadora es un hueco tibio y protegido en la pared. Un nido puede tapar casi toda la abertura en pocos días. La señal suele ser una secadora que de repente se pone lenta, a veces con pajaritos o basura en el piso debajo de la salida.',
      'La aleta es la otra falla. El aire salino y la humedad oxidan la bisagra hasta que la aleta no abre del todo con la secadora o no cierra cuando para, y deja entrar lluvia, insectos y aire húmedo. Las mallas son la tercera: detienen a los pájaros y atrapan la pelusa, y por eso el código no las permite en la salida de una secadora.',
    ],
    benefits: [
      { title: 'Nidos sacados enteros', text: 'Desde la salida y el primer tramo del ducto, no empujados más adentro.' },
      { title: 'Aletas que funcionan', text: 'Liberadas o cambiadas para que abran con la secadora y cierren cuando para.' },
      { title: 'Sin mallas prohibidas', text: 'Quitamos la malla y ponemos una protección hecha para salida de secadora.' },
      { title: 'Salidas de techo revisadas', text: 'Limpias e inspeccionadas cuando el techo permite subir con seguridad.' },
    ],
    process: [
      { title: 'Revisar la salida', text: 'Con la secadora prendida, vemos el flujo y el movimiento de la aleta.' },
      { title: 'Limpiar', text: 'Sacamos el nido, la pelusa y la basura de la salida y del final del ducto.' },
      { title: 'Reparar o cambiar', text: 'Aleta liberada, malla quitada, o la salida cambiada si ya no sirve.' },
      { title: 'Probar', text: 'Flujo revisado en la salida con la secadora prendida.' },
    ],
    quickFacts: [
      { label: 'Precio', value: '$100 a $200 para limpiar, $200 a $600 para cambiar' },
      { label: 'Llamada más común', value: 'Nido de pájaro en la salida de pared' },
      { label: 'Código', value: 'Aleta obligatoria, malla no permitida' },
      { label: 'Salidas de techo', value: 'Limpias donde el acceso es seguro' },
    ],
    faq: [
      { question: 'Hay un nido de pájaro en mi ventila. ¿Qué hago?', answer: 'No use la secadora hasta sacarlo, porque tapa la salida y es material seco e inflamable. No lo empuje con un palo; hay que sacarlo desde la salida.' },
      { question: '¿Puedo ponerle una malla a la ventila para los pájaros?', answer: 'No. La malla atrapa la pelusa y tapa la salida, y el código no la permite en una ventila de secadora. Lo correcto es una protección hecha para secadoras o una salida con aleta que funcione.' },
      { question: '¿Por qué la aleta de mi ventila no cierra?', answer: 'Casi siempre es pelusa en la bisagra o óxido por el aire salino. Deja entrar humedad e insectos al ducto, y muchas veces se arregla rápido en la salida.' },
    ],
  },
  'condo-and-apartment-dryer-vents': {
    name: 'Ventilas de Secadora en Condominios y Apartamentos',
    shortName: 'Condominios',
    metaTitle: 'Ventila de Secadora en Condominios y Edificios | Florida',
    metaDescription:
      'Limpieza de ventilas de secadora en condominios, apartamentos y asociaciones de Florida: por unidad o el edificio completo, cotizado por unidad antes de agendar.',
    answer:
      'En condominios y apartamentos la ventila es un tramo corto dentro de la unidad que muchas veces se une a un ducto compartido con otras unidades. Limpiamos unidades a $100 a $200 y cotizamos edificios completos por unidad para asociaciones y administradores, y le decimos claramente qué parte es suya y cuál es del edificio.',
    intro: [
      'En un edificio bajo la secadora suele ventilar un tramo corto hasta una pared exterior. En un edificio mediano o alto muchas veces se conecta a un ducto vertical que lleva el aire de varias unidades hasta el techo, a veces con un ventilador de refuerzo arriba. El dueño de la unidad es dueño del tramo de la secadora a la conexión en la pared o el techo; el ducto compartido es de la asociación.',
      'En esa línea es donde los problemas se quedan años sin dueño. El dueño limpia sus dos metros, la secadora sigue lenta, y la causa es pelusa en el ducto compartido que nadie ha programado. Le decimos de qué lado de la línea está la obstrucción antes de cotizar.',
    ],
    benefits: [
      { title: 'Responsabilidad clara', text: 'Su parte y la del edificio identificadas antes de que nadie pague por la equivocada.' },
      { title: 'Precio por unidad', text: 'Edificios cotizados por unidad, para que la junta sepa el total antes de aprobar.' },
      { title: 'Programado con los residentes', text: 'Piso por piso, con aviso, para que nadie se quede sin secadora mucho tiempo.' },
      { title: 'Registro por unidad', text: 'Flujo antes y después en cada unidad, para el archivo de mantenimiento de la asociación.' },
    ],
    process: [
      { title: 'Recorrer el edificio', text: 'Conexiones de las unidades, ductos compartidos, salidas en el techo y ventiladores.' },
      { title: 'Cotizar por unidad', text: 'Un precio por unidad y un calendario, aprobados antes de empezar.' },
      { title: 'Limpiar', text: 'Tramos de las unidades y ductos compartidos limpios, salidas liberadas, aletas funcionando.' },
      { title: 'Reportar', text: 'Flujo por unidad antes y después, y lista de lo que necesite reparación.' },
    ],
    quickFacts: [
      { label: 'Una unidad', value: '$100 a $200' },
      { label: 'Edificios', value: 'Cotizados por unidad' },
      { label: 'Parte del dueño', value: 'De la secadora a la conexión en pared o techo' },
      { label: 'Parte de la asociación', value: 'Ductos compartidos, salidas de techo, ventiladores' },
    ],
    faq: [
      { question: '¿Quién es responsable de la ventila en mi condominio?', answer: 'Normalmente usted es dueño del tramo de su secadora a la conexión en la pared o el techo, y la asociación es dueña del ducto compartido y la salida en el techo. La declaración del condominio y la junta lo confirman para su edificio.' },
      { question: 'Mi secadora sigue lenta después de limpiar. ¿Por qué?', answer: 'En un edificio con ducto compartido, la obstrucción muchas veces está en ese ducto o en el techo, no en su tramo. Eso le toca programarlo a la asociación, y le podemos decir si eso fue lo que encontramos.' },
      { question: '¿Trabajan con asociaciones y administradores?', answer: 'Sí. Cotizamos por unidad para todo el edificio, programamos piso por piso y dejamos un registro del flujo antes y después en cada unidad.' },
    ],
  },
  'dryer-vent-inspection': {
    name: 'Inspección de Ventila de Secadora',
    shortName: 'Inspección',
    metaTitle: 'Inspección de Ventila de Secadora en Florida',
    metaDescription:
      'Inspección de ventila de secadora en Florida: medimos el flujo en la salida y revisamos manguera, uniones, largo del tramo y salida según el código.',
    answer:
      'La inspección le dice si su ventila está sacando el aire que debe y, si no, dónde se está perdiendo. Medimos el flujo en la salida de afuera y revisamos la manguera, las uniones, el largo del tramo contra el límite del código y la salida en la pared o el techo. Va incluida en cada limpieza, y si la quiere sola se la cotizamos antes de agendar.',
    intro: [
      'Casi siempre nos llaman para una inspección porque algo cambió. Usted está comprando o vendiendo la casa y el reporte del inspector dice que hay que revisar la ventila de la secadora. Le instalaron una secadora nueva y la empujaron contra la pared. O la secadora empezó a mostrar un aviso de ventila tapada, algo que muchos modelos nuevos hacen cuando el aire no sale bien.',
      'Empezamos afuera, con la secadora prendida en calor alto, y tomamos una lectura del flujo en la salida de la pared o del techo. Después movemos la secadora y seguimos el ducto hasta donde se pueda ver o alcanzar: la manguera de atrás, la conexión en la pared o el piso, las uniones y los soportes en el ático, y la salida.',
      'Le entregamos por escrito de qué está hecho el tramo, cuánto mide contando las curvas y dónde está la obstrucción o la fuga, si la hay. Hay ventilas que no necesitan nada, otras que necesitan una limpieza y otras con una falla que solo se resuelve reparando o cambiando la ruta. Se lo decimos claro antes de ofrecerle cualquier trabajo.',
    ],
    benefits: [
      { title: 'Una lectura que se puede comparar', text: 'El flujo se mide en la salida con la secadora en su calor más alto, para repetir la misma prueba el año que viene en el mismo punto.' },
      { title: 'El largo bien calculado', text: 'Sumamos cada tramo recto y cada curva contra el límite de 35 pies y sus descuentos, o contra lo que permita el fabricante de la secadora si es más.' },
      { title: 'Útil al vender o comprar', text: 'Compradores, vendedores y agentes reciben una nota escrita sobre la ventila para poner junto al reporte de inspección de la casa.' },
      { title: 'Primero el diagnóstico', text: 'Si el tramo está bien, se lo decimos. Si no, el arreglo se cotiza aparte y solo se hace si usted lo aprueba.' },
    ],
    process: [
      { title: 'Lectura afuera', text: 'Secadora en calor alto y flujo medido en la salida de la pared o del techo, antes de mover nada.' },
      { title: 'Manguera y conexión', text: 'Separamos la secadora y revisamos que la manguera sea del tipo aprobado, su largo, si está doblada o aplastada, y que la conexión esté sellada.' },
      { title: 'Seguir el tramo', text: 'Material, uniones y soportes revisados en el ático, el alero o dentro de la pared, donde el ducto se pueda ver o alcanzar.' },
      { title: 'Calcular el largo', text: 'Sumamos los tramos rectos y las curvas y comparamos el total con el límite del código y las instrucciones del fabricante.' },
      { title: 'Salida y reporte', text: 'Revisamos que la aleta abra y cierre, que no haya malla y que la salida quede lejos de ventanas y puertas, y le explicamos lo encontrado por escrito.' },
    ],
    quickFacts: [
      { label: 'Precio', value: 'Incluida en cada limpieza; sola, cotizada antes de agendar' },
      { label: 'Qué se revisa', value: 'Flujo, manguera, uniones, largo del tramo, salida' },
      { label: 'Cuándo pedirla', value: 'Venta de la casa, secadora nueva, aviso de ventila en la secadora' },
      { label: 'Usted recibe', value: 'El reporte escrito y la lectura del flujo' },
    ],
    faq: [
      { question: '¿Cuánto cuesta una inspección de ventila de secadora?', answer: 'Va incluida en cada limpieza que hacemos, y la limpieza cuesta entre $100 y $200. Si solo quiere la inspección, por una venta o para una segunda opinión, cuéntenos cómo es la casa y el tramo y se la cotizamos antes de agendar.' },
      { question: '¿Vale la pena revisar la ventila al comprar una casa?', answer: 'En Florida sí, porque muchas ventilas suben por un ático caliente hasta el techo y nadie las mira. El inspector de la casa normalmente ve la salida y la manguera; nosotros seguimos el tramo y medimos el aire que de verdad sale.' },
      { question: 'Mi secadora dice que la ventila está tapada. ¿Es cierto?', answer: 'Muchas veces sí, pero no siempre. El sensor reacciona cuando el aire no sale bien, y eso puede ser pelusa en el tramo, una manguera aplastada, una aleta trabada o un tramo demasiado largo. La inspección le dice cuál es, para que no pague una limpieza que no le va a quitar el aviso.' },
      { question: 'Cambié la secadora. ¿Debo revisar la ventila?', answer: 'Es buena idea. Muchas veces conectan la secadora nueva con la manguera vieja, la doblan al empujarla o le ponen una manguera de aluminio de más de 8 pies. Una revisión detrás de la secadora encuentra casi todo eso a tiempo.' },
    ],
  },
  'roof-dryer-vent-cleaning': {
    name: 'Limpieza de Ventila de Secadora en el Techo',
    shortName: 'Ventilas de Techo',
    metaTitle: 'Limpieza de Ventila de Secadora en el Techo | $100 a $200',
    metaDescription:
      'Limpieza de ventila de secadora con salida en el techo en Florida, $100 a $200. Limpiamos todo el tramo desde los dos extremos y medimos el flujo de aire.',
    answer:
      'Cuando la secadora saca el aire por el techo, la limpieza tiene que cubrir todo el ducto: el tramo que sube por el ático y la salida de arriba. En Florida cuesta entre $100 y $200, trabajando desde el techo y desde la secadora, y los casos fuera de lo común, como un nido metido en la salida, se cotizan antes de agendar.',
    intro: [
      'Muchas casas en Florida no tienen una pared exterior cerca de la secadora. En casas de dos pisos, townhouses y lavanderías en el centro de la casa, el ducto sube por el ático y sale por el techo. Son tramos largos que suben antes de salir, y en cada pie de subida la pelusa húmeda pierde fuerza y se vuelve a asentar.',
      'La salida en el techo es donde más se tapan. Muchas tapas que se venden para extractores de baño o para ventilar el ático traen malla, y en una secadora esa malla se cubre de pelusa como un fieltro hasta que casi no sale aire. Otras quedan tan abiertas que los pájaros y las ratas hacen nido adentro. Como nadie ve el techo, la secadora puede pasar meses caliente y lenta antes de que alguien sospeche.',
      'Limpiamos estos tramos desde los dos extremos. Arriba sacamos lo que tapa la salida y cepillamos hacia abajo; desde la lavandería cepillamos y soplamos hacia arriba, con la salida ya abierta, para que la pelusa salga por el techo y no se quede en el codo del ático. En teja de barro, techos muy inclinados o mojados no pisamos donde no es seguro, y le decimos qué significa eso para el resultado.',
    ],
    benefits: [
      { title: 'Salida y tramo en una visita', text: 'Limpiamos la malla, la aleta y la boca de la salida en el techo, y también cada pie de ducto que hay debajo.' },
      { title: 'De arriba y de abajo', text: 'Trabajar desde los dos lados mantiene la pelusa saliendo por el techo y no amontonada en la curva del ático.' },
      { title: 'Cuidado con la teja', text: 'Pisamos solo donde el techo aguanta el peso y dejamos la salida sellada como estaba, o le avisamos si ya estaba fallando.' },
      { title: 'Medido en la salida', text: 'Lectura del flujo en el techo antes y después, para que vea cuánto aire más está saliendo.' },
    ],
    process: [
      { title: 'Lectura en el techo', text: 'Con la secadora en alto, medimos el flujo en la salida y vemos si tiene malla, nido o la aleta trabada.' },
      { title: 'Destapar la salida', text: 'Sacamos la pelusa apelmazada, el material del nido y la basura de la salida y del primer tramo del ducto.' },
      { title: 'Cepillar desde arriba', text: 'Bajamos el cepillo rotatorio por el tramo vertical para soltar lo que se fue asentando.' },
      { title: 'Cepillar y soplar desde abajo', text: 'Revisamos la manguera y mandamos cepillo y aire comprimido hacia arriba, por el ático, hasta la salida abierta.' },
      { title: 'Medir y reportar', text: 'Segunda lectura en el techo, secadora conectada, y cualquier problema en la salida o en las uniones del ático anotado con su precio.' },
    ],
    quickFacts: [
      { label: 'Precio típico', value: '$100 a $200' },
      { label: 'Se cotiza antes', value: 'Nido metido en la salida, salida que hay que cambiar' },
      { label: 'Cambio de salida', value: 'Trabajo de reparación, entre $200 y $600' },
      { label: 'Obstrucción más común', value: 'Pelusa apelmazada sobre una salida con malla' },
    ],
    faq: [
      { question: '¿Cuánto cuesta limpiar la ventila de la secadora en el techo?', answer: 'Entre $100 y $200 en la mayoría de las casas, el mismo rango de cualquier limpieza, y las de techo suelen quedar hacia arriba por el largo y la subida. Un nido apretado dentro de la salida se cotiza antes de agendar, y cambiar la salida es reparación, de $200 a $600.' },
      { question: '¿Por qué se me tapa tanto la ventila del techo?', answer: 'Casi siempre la salida tiene malla o rejillas muy finas para la pelusa, o el tramo es tan largo y vertical que la secadora no tiene fuerza para subirla. Quitar la malla o poner una salida hecha para secadora suele resolverlo; si el tramo pasa del largo permitido, puede hacer falta una ruta más corta.' },
      { question: '¿Es normal que la ventila de la secadora salga por el techo?', answer: 'En Florida es bastante común cuando la lavandería está en el centro de la casa o en el segundo piso. No es lo ideal, porque es más larga y más difícil de limpiar que una salida por la pared, pero funciona si el tramo está dentro del largo permitido y la salida es para secadora.' },
      { question: '¿Se puede limpiar sin subir al techo?', answer: 'En parte. Casi todo el tramo se limpia desde la secadora, pero la pelusa pegada a una malla o un nido dentro de la salida hay que sacarlos desde arriba. Si el techo no se puede pisar con seguridad, le decimos qué se alcanzó y qué no.' },
    ],
  },
  'commercial-dryer-vent-cleaning': {
    name: 'Limpieza Comercial de Ventilas de Secadora',
    shortName: 'Comercial',
    metaTitle: 'Limpieza Comercial de Ventilas de Secadora en Florida',
    metaDescription:
      'Limpieza comercial de ventilas de secadora en Florida: lavanderías de condominios, asociaciones, hoteles y residencias para mayores. Cotizado por edificio.',
    answer:
      'La limpieza comercial es para edificios donde muchas secadoras trabajan todos los días: lavanderías comunes de condominios y apartamentos, hoteles y alquileres de corto plazo, residencias para personas mayores y lavanderías pequeñas. Cotizamos cada edificio después de recorrerlo, y cada visita termina con un registro escrito de lo que se limpió y las lecturas de flujo.',
    intro: [
      'Una lavandería compartida mete más pelusa en sus ductos en una semana que una familia en varios meses. Las máquinas trabajan una tras otra, los residentes y los huéspedes no limpian el filtro, y los ductos muchas veces llegan a un ducto común o suben un trecho largo hasta el techo. El riesgo es el mismo de una casa, pero repetido en cada máquina y en cada hora de uso.',
      'Empezamos recorriendo el lugar: cuántas secadoras hay, por dónde ventila cada una, cómo se unen los ductos, por dónde salen del edificio y cómo se llega a las salidas. Con eso sabemos qué lleva la limpieza y cuánto tiempo va a estar cerrada la lavandería, y le damos un precio basado en lo que hay, no en un cálculo a ojo.',
      'La mayoría de los edificios pasa a un plan programado, con la frecuencia según cuánto se usan las máquinas. Después de cada visita el administrador recibe un registro escrito con cada secadora y cada ducto limpiado, lo que encontramos y el flujo antes y después, que es justo lo que suele pedir la junta, el dueño o la compañía de seguros.',
    ],
    benefits: [
      { title: 'Precio después del recorrido', text: 'La cotización refleja los ductos, el acceso al techo y la cantidad de máquinas reales, y se mantiene cuando empieza el trabajo.' },
      { title: 'Organizado con la lavandería', text: 'Vamos en horas de poco uso y limpiamos las máquinas por grupos, para que parte de la lavandería siga funcionando cuando el espacio lo permite.' },
      { title: 'Registro para la junta y el seguro', text: 'Un registro escrito y con fecha de cada secadora y cada ducto, con sus lecturas, listo para el archivo de mantenimiento.' },
      { title: 'Un plan, no un susto', text: 'Limpiezas cada cierto tiempo, para que nadie tenga que acordarse cuando una máquina ya se recalentó.' },
    ],
    process: [
      { title: 'Recorrido', text: 'Contamos las máquinas, ubicamos cada conexión, ducto común y salida, y vemos el acceso al techo o a la pared exterior.' },
      { title: 'Cotizar y programar', text: 'Un precio para el edificio, con fecha y hora pensadas para los residentes, los huéspedes o la rutina de cuidado.' },
      { title: 'Lecturas iniciales', text: 'Medimos el flujo en cada salida antes de limpiar, para que el registro muestre dónde estaba la peor obstrucción.' },
      { title: 'Limpiar', text: 'Separamos cada secadora y revisamos su conexión, cepillamos y soplamos los ductos y el ducto común, y liberamos salidas y aletas.' },
      { title: 'Lecturas finales y registro', text: 'Medimos otra vez en cada salida y enviamos el registro escrito al administrador o a la junta.' },
    ],
    quickFacts: [
      { label: 'Precio', value: 'Cotizado por edificio después del recorrido' },
      { label: 'Con quién trabajamos', value: 'Asociaciones, administradores, hoteles, alquileres, residencias para mayores, lavanderías pequeñas' },
      { label: 'Documentación', value: 'Registro escrito de lo limpiado, con lecturas de flujo' },
      { label: 'Frecuencia', value: 'Plan programado según el uso de las máquinas' },
    ],
    faq: [
      { question: '¿Cómo se cotiza la limpieza comercial?', answer: 'Por edificio, después de recorrerlo. La cantidad de máquinas, cómo van los ductos y cómo se llega a las salidas cambian el trabajo, así que no damos precio de un edificio por teléfono.' },
      { question: '¿Cada cuánto hay que limpiar una lavandería común?', answer: 'Más seguido que una casa. Una lavandería que trabaja casi todo el día, la de un hotel o la de una residencia normalmente necesita más de una limpieza al año, y un edificio pequeño con poco uso puede quedarse en una. Le sugerimos la frecuencia según lo que veamos en la primera visita.' },
      { question: '¿Nos pueden dar documentos para el seguro o la asociación?', answer: 'Sí. Cada visita termina con un registro escrito con la fecha, las secadoras y ductos limpiados y el flujo medido antes y después. Si el seguro o la junta piden algo en particular, díganoslo antes de la visita.' },
      { question: '¿Trabajan con dueños de alquileres de corto plazo?', answer: 'Sí. En un alquiler la secadora trabaja después de cada estadía, muchas veces con huéspedes que nunca limpian el filtro. Podemos ir entre reservas y mandar el registro directo al dueño o a la compañía que administra.' },
    ],
  },
  'dryer-booster-fan-installation': {
    name: 'Instalación de Ventilador de Refuerzo para Secadora',
    shortName: 'Ventilador de Refuerzo',
    metaTitle: 'Ventilador de Refuerzo para Secadora en Florida',
    metaDescription:
      'Instalación de ventilador de refuerzo (booster) para la ventila de la secadora en Florida: equipo aprobado, interruptor de presión. $200 a $600, cotizado.',
    answer:
      'El ventilador de refuerzo, que muchos llaman booster, va dentro del ducto y ayuda a sacar el aire cuando el tramo es más largo de lo que permite el código y no hay una ruta más corta. Instalamos ventiladores aprobados para secadora, con interruptor de presión y acceso para limpieza, dentro de nuestro rango de $200 a $600, y se cotiza antes de agendar.',
    intro: [
      'Hay lavanderías en Florida que están en el centro de la casa o dos pisos debajo del techo, y aun por la ruta más corta el tramo pasa de los 35 pies cuando se cuentan las curvas. Mover la secadora no siempre se puede. Para ese caso el código permite un tramo más largo si lleva un ventilador de extracción hecho y aprobado para secadoras, instalado según su certificación y las instrucciones del fabricante de la secadora.',
      'El refuerzo no es la solución para una secadora lenta. Si el tramo está lleno de pelusa, aplastado detrás de la máquina o roto en el ático, el ventilador solo empuja más fuerte contra el mismo problema, o saca la pelusa más rápido por la fuga. Primero revisamos el largo, el estado del ducto y el flujo, y solo lo recomendamos cuando ni la limpieza, ni la reparación, ni una ruta más corta lo resuelven.',
      'Cuando sí hace falta, lo ponemos donde se pueda abrir y limpiar, porque la pelusa se pega a las aspas y se acumula en la caja. Un interruptor de presión lo prende solo cuando la secadora está empujando aire y lo apaga cuando ella para. El ducto alrededor es de metal rígido con las uniones selladas con cinta, y termina en una salida con aleta y sin malla.',
    ],
    benefits: [
      { title: 'Solo cuando es lo correcto', text: 'Descartamos primero la limpieza, la reparación y el cambio de ruta, para que no pague por un ventilador que esconde un problema del ducto.' },
      { title: 'Aprobado para secadora', text: 'Un equipo hecho y certificado para aire caliente con pelusa, no un extractor de baño ni un ventilador de ducto cualquiera.' },
      { title: 'Funciona solo con la secadora', text: 'El interruptor de presión lo prende cuando la secadora saca aire y lo apaga al terminar el ciclo.' },
      { title: 'Fácil de limpiar', text: 'Instalado donde la caja se pueda abrir y las aspas se limpien cada vez que se limpia la ventila.' },
    ],
    process: [
      { title: 'Medir el tramo', text: 'Calculamos el largo con los descuentos por curva, medimos el flujo en la salida y revisamos el ducto por pelusa, aplastamientos y fugas.' },
      { title: 'Descartar lo más sencillo', text: 'Consideramos primero limpiar, reparar o acortar la ruta, y revisamos si las instrucciones del fabricante permiten un tramo más largo.' },
      { title: 'Cotizar', text: 'Si el refuerzo es la respuesta, un solo precio por el equipo, su montaje y el trabajo de ducto, antes de agendar.' },
      { title: 'Instalar', text: 'Equipo aprobado montado en un lugar accesible según su certificación y las instrucciones de la secadora, interruptor ajustado y uniones selladas con cinta de aluminio.' },
      { title: 'Probar', text: 'Flujo medido en la salida con la secadora y el ventilador funcionando, y el interruptor revisado para que prenda y apague con la secadora.' },
    ],
    quickFacts: [
      { label: 'Precio', value: 'Dentro de $200 a $600, cotizado antes de agendar' },
      { label: 'Cuándo aplica', value: 'Tramo más largo que el código, sin ruta más corta' },
      { label: 'Equipo', value: 'Ventilador de extracción aprobado para secadora' },
      { label: 'Obligatorio', value: 'Interruptor de presión y acceso para limpiar' },
    ],
    faq: [
      { question: '¿Cuánto cuesta instalar un booster en la ventila de la secadora?', answer: 'Entra en nuestro rango de $200 a $600 para trabajos de ventila. El precio depende del equipo, de dónde se pueda montar con acceso y de cuánto ducto haya que cambiar, y se lo damos antes de agendar.' },
      { question: '¿Un ventilador de refuerzo arregla una secadora lenta?', answer: 'Solo si el tramo está limpio, sellado y simplemente es demasiado largo. Si la causa es pelusa, una manguera aplastada o una unión suelta, el ventilador no lo resuelve, y por eso medimos y revisamos antes de recomendarlo.' },
      { question: '¿Puedo usar cualquier ventilador de ducto?', answer: 'No. El aire de la secadora lleva pelusa caliente y húmeda, y el código pide un ventilador de extracción aprobado para secadoras. Un ventilador de ducto común no está hecho para que la pelusa pase por su motor y sus aspas.' },
      { question: '¿El booster necesita mantenimiento?', answer: 'Sí. Hay que abrirlo y limpiarlo en cada limpieza de la ventila, y revisar que el interruptor lo siga prendiendo con la secadora. Un ventilador que dejó de girar se convierte en otra obstrucción.' },
    ],
  },
};
