/**
 * Spanish content for the five services, keyed by the same slug as
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
    metaTitle: 'Reparación de Ventila de Secadora en Florida | $200 a $600',
    metaDescription:
      'Reparación de ventila de secadora en Florida: uniones sueltas, ducto aplastado o de aluminio flexible, pelusa saliendo al ático. $200 a $600, cotizado antes de empezar.',
    answer:
      'La reparación arregla lo que una limpieza no puede: una unión que se soltó, un tramo aplastado, manguera de aluminio escondida en la pared, o un ducto que está echando pelusa al ático. En Florida cuesta entre $200 y $600, según dónde esté el daño y cuánto del tramo haya que cambiar.',
    intro: [
      'Hay ventilas que están limpias y aun así no funcionan. Una unión en el ático se separó y la secadora está soplando pelusa caliente y húmeda sobre el aislamiento. Un tramo detrás de la máquina quedó aplastado al empujar la secadora contra la pared. Un dueño anterior pasó manguera de aluminio por dentro de una pared. Limpiar eso solo mueve la pelusa de lugar.',
      'Primero encontramos la falla y después cotizamos. La lectura del flujo en la salida nos dice si el aire está saliendo, y la revisión del tramo nos dice dónde se está perdiendo. Usted ve lo que encontramos y recibe un solo precio antes de abrir nada.',
      'Reparamos con ducto rígido de metal, sellamos las uniones con cinta de aluminio en lugar de tornillos que atrapan pelusa, y usamos la ruta segura más corta que permita la casa. Si el tramo es más largo de lo que permite el código de construcción de Florida para su secadora, se lo decimos.',
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
};
