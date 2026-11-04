/**
 * Extra Spanish depth for the city pages that convert.
 *
 * Added 26 October 2026. Over the 60 days to that date the Spanish city
 * pages for these eight cities sat between positions 3 and 10 and produced
 * more calls and leads per visit than anything else on the site. The queries
 * landing on them are price and proximity queries ("limpieza de ductos de
 * aire acondicionado precio", "cuánto cuesta limpiar los ductos de aire
 * acondicionado", "cerca de mí"), so these blocks answer what moves the price
 * for the housing in each city, what the visit involves, and how to book.
 *
 * Rendered after the existing depthEs blocks from cityDetail.ts, same shape:
 * heading becomes an H2, each body string a plain text paragraph.
 * Written per city. Prices are only the published ones (src/lib/meta.ts,
 * src/data/services.ts).
 */
export const cityDepthEsExtra: Record<string, { heading: string; body: string[] }[]> = {
  'cape-coral': [
    {
      heading: 'Qué mueve el precio de la limpieza de conductos en Cape Coral',
      body: [
        'En Cape Coral el precio se fija por sistema, entre 300 y 600 dólares, y lo que decide dónde cae su casa dentro de ese rango es cuántas rejillas tiene, cuántos equipos y cuánto se ha acumulado adentro. Las casas de una planta de los setenta y ochenta, con la manejadora en el garaje o en un clóset a nivel de piso y tramos cortos, tienen pocas rejillas y quedan más cerca del piso del rango. Las casas de los dos mil hacia Sandoval y Burnt Store son más grandes, y si tienen un equipo por planta se cotiza cada sistema por separado.',
        'Lo que no sube el precio es la sal ni el canal. Sube cuando aparece algo que ya no es limpieza. Un tramo de flexible que estuvo bajo el agua con Ian no se limpia, se cambia, y eso es reparación de ductos con su propia cotización. Moho visible dentro del ducto o en la manejadora es nuestro servicio de eliminación de moho, también aparte. La desinfección, de 75 a 200 dólares, solo se la recomendamos cuando hay una razón para aplicarla. Todo eso se lo enseñamos en foto antes de que usted decida, y puede decir que no.',
        'Para darle el número le vamos a preguntar cuántas rejillas de suministro y de retorno cuenta, dónde está la manejadora, si la casa tomó agua en 2022, y si quiere que limpiemos la ventila de secadora en la misma visita. En muchas casas de aquí esa ventila sube desde la lavandería del garaje y cruza el ático hasta el techo. La limpieza cuesta de 100 a 200 dólares e incluye la manguera de atrás de la secadora.',
      ],
    },
    {
      heading: '¿Por qué mi casa de Cape Coral huele a humedad cuando regreso?',
      body: [
        'Muchas casas de Cape Coral pasan el verano cerradas mientras sus dueños están fuera, y el regreso en otoño trae casi siempre la misma llamada: la casa huele a encierro y el olor sale por las rejillas. Es lo que pasa cuando el aire acondicionado pasa meses apagado o casi sin correr en la época más húmeda del año.',
        'Sin el equipo trabajando, nada saca el agua del aire de adentro. La humedad sube, el polvo que ya estaba en el serpentín y en los conductos se moja, y empieza a crecer donde nadie lo ve. Al volver usted prende el aire y lo primero que sale es eso. Antes de llamar revise tres cosas: puntitos negros en las rejillas del techo o en el marco alrededor, agua quieta en la bandeja debajo de la manejadora, y un olor fuerte los primeros minutos que después baja.',
        'Si tiene alguna de las tres, la limpieza tiene sentido. Si no tiene ninguna y el olor se va en un día con el aire corriendo, probablemente basta con cambiar el filtro y destapar la línea de drenaje. Para el próximo verano lo que más ayuda no es una temperatura en el termostato sino la humedad: un medidor de pocos dólares en la sala le dice si la casa se mantuvo por debajo de 60 por ciento mientras usted no estaba, y si alguien de confianza lo mira una vez al mes, sabrá a tiempo si algo falló.',
      ],
    },
  ],

  tampa: [
    {
      heading: 'Precio por tipo de casa en Tampa: bungalow, casa sobre losa y casa de dos plantas',
      body: [
        'El rango en Tampa es el mismo que en el resto de Florida, de 300 a 600 dólares por sistema, pero las casas de esta ciudad caen en lugares muy distintos de ese rango. Un bungalow de madera en Seminole Heights, Tampa Heights o parte de Hyde Park casi siempre tiene un solo equipo y rejillas en el piso, y no son muchas. Lo que cambia la cotización ahí no es el tamaño sino el estado de lo que corre debajo de la casa.',
        'Las rejillas de piso son trampas. Les cae arena, comida, juguetes y todo lo que se barre, y la caja de abajo lo guarda por años. Eso se saca a mano como parte de la visita. Lo que no entra en la limpieza es un tramo despegado o aplastado debajo del piso. Lo encontramos con la cámara, se lo enseñamos, y se cotiza aparte como reparación de ductos, porque limpiar un ducto que descarga en el espacio bajo la casa no le cambia nada.',
        'En Westchase, Carrollwood y New Tampa la cuenta es otra. Son casas sobre losa con el ducto en el ático, con más rejillas por casa y muchas de dos plantas. Cuando hay un equipo para cada planta, cada uno se cotiza como un sistema. En las casas más nuevas de New Tampa lo que solemos sacar es polvo de la obra, y esa primera limpieza es la que más se nota.',
      ],
    },
    {
      heading: 'Limpieza de ductos cerca de mí en Tampa: cómo se agenda y qué pasa ese día',
      body: [
        'Atendemos South Tampa, Hyde Park, Seminole Heights, Westchase, Carrollwood, New Tampa y el área de Hillsborough alrededor. Usted llama o llena el formulario, nos dice cuántas rejillas tiene y cuántos equipos, y le damos el precio antes de poner fecha. Muchas veces hay cita la misma semana.',
        'Llegan dos técnicos y el trabajo toma de dos a cuatro horas en una casa de un sistema. Primero revisamos con luz y cámara y le enseñamos las fotos. Después la máquina de presión negativa se conecta al pleno, se tapan todas las rejillas, y cada ramal se cepilla de punta a punta mientras el sistema está bajo succión. Al final se limpian el ventilador y la cara del serpentín, se lavan las rejillas, y recorremos la casa con usted con las fotos del antes y el después.',
        'En un bungalow necesitamos llegar a la trampilla del espacio bajo el piso, así que conviene despejarla. En cualquier casa, vacíe el clóset de la manejadora y quite muebles y alfombras de encima de las rejillas. Si la ventila de secadora lleva un par de años sin limpiarse, pídala junto con los ductos: cuesta de 100 a 200 dólares y se hace en la misma visita.',
      ],
    },
  ],

  orlando: [
    {
      heading: '¿Cuánto cuesta limpiar los ductos de una casa de renta vacacional en Orlando?',
      body: [
        'Una casa de renta se cotiza igual que cualquier otra: de 300 a 600 dólares por sistema, según cuántas rejillas tiene, cuántos equipos y cuánta suciedad hay. La diferencia es el tamaño. Las casas de renta al sur y al oeste de la ciudad muchas veces tienen más recámaras que una casa de familia, con una rejilla en cada una, y las más grandes tienen dos equipos. Cada equipo se cotiza aparte, y se lo decimos antes de agendar.',
        'En una casa de renta lo que más pesa no es el ducto sino el serpentín. Un equipo que pasa días corriendo poco con la casa vacía se queda mojado, y ahí empieza el olor que reportan los huéspedes. La visita incluye el ventilador y la cara del serpentín, que es donde casi siempre está el problema. Si la cámara muestra moho activo dentro del sistema, se lo enseñamos en foto y se cotiza aparte como eliminación de moho antes de hacer nada.',
        'Para no perder reservaciones, agende en un día sin huéspedes. El trabajo toma de dos a cuatro horas y la máquina suena como una aspiradora de taller todo el tiempo, así que no se puede hacer con gente adentro. Si usted vive fuera de Florida, quien administre la casa puede abrirnos al principio y hacer el recorrido con las fotos al final. La ventila de secadora de una casa de renta trabaja mucho más que la de una familia, y limpiarla en la misma visita cuesta de 100 a 200 dólares.',
      ],
    },
    {
      heading: 'Limpieza de ductos de aire acondicionado cerca de mí en Orlando: señales según su zona',
      body: [
        'Trabajamos en Baldwin Park, College Park, Dr. Phillips, Lake Nona, Conway, Delaney Park y el resto de Orange County, y cada zona avisa de manera distinta que los conductos necesitan atención.',
        'En College Park y Delaney Park, bajo los robles, la señal llega en primavera: un polvo amarillo verdoso en las rejillas de suministro y un filtro que se pone amarillo en pocas semanas. Si el filtro está bien puesto y aun así ese polvo aparece en las rejillas, hay aire entrando al sistema por donde no debería, casi siempre por el retorno.',
        'En Lake Nona y en las casas de menos de quince años la señal es un polvo fino, gris o blanco, que vuelve a los muebles a los pocos días de sacudir, sobre todo el primer verano. Es polvo de construcción y la limpieza lo saca de una vez.',
        'En cualquier zona, un olor a humedad en los primeros minutos de prender el aire, manchas oscuras alrededor de las rejillas o agua en la bandeja de la manejadora son razones para revisar. Si la casa se limpió hace menos de tres años y no ve ninguna de esas señales, se lo vamos a decir: todavía no le toca.',
      ],
    },
  ],

  hialeah: [
    {
      heading: '¿Por qué el precio de limpiar los ductos cambia de una casa a otra en Hialeah?',
      body: [
        'La mayoría de las casas de Hialeah son de bloque de concreto, de una planta, construidas entre los cincuenta y los setenta con planos chicos. Una casa así, tal como salió del plano, tiene pocas rejillas y un solo equipo, y queda más cerca del piso del rango de 300 a 600 dólares por sistema.',
        'Lo que mueve el número son las ampliaciones. Cada cuarto agregado, cada garaje convertido y cada Florida room cerrado suma rejillas, y muchas veces suma tramos de flexible largos y descolgados que juntan más polvo que el resto de la casa. Si atrás hay un efficiency con su propio equipo, ese es otro sistema y se cotiza aparte. Lo mismo en un dúplex: cada unidad con su manejadora es un sistema.',
        'Hay cosas que encontramos aquí y que no son limpieza. Un ramal aplastado o con el forro despegado se cambia, y eso es reparación de ductos con su propio precio. Un serpentín con grasa de cocina sí entra en la visita, porque la cara del serpentín y el ventilador se limpian siempre. Si hay moho visible dentro del sistema, se lo enseñamos en foto y se cotiza como eliminación de moho antes de tocar nada.',
      ],
    },
    {
      heading: 'Lo que le preguntamos por teléfono para darle el precio exacto en Hialeah',
      body: [
        'No mandamos a nadie a ver la casa para después darle un número. El precio se lo damos antes de agendar, y para eso necesitamos cinco datos que usted puede reunir en diez minutos.',
        'Cuántas rejillas de suministro hay, contando las de los cuartos agregados. Cuántos retornos, que en muchas casas de Hialeah es uno solo en el pasillo. Cuántos equipos tiene la propiedad, incluyendo el del efficiency si lo hay. Dónde está la manejadora: clóset, garaje o ático. Y cuándo fue la última limpieza, si alguna vez se hizo.',
        'Con eso le decimos la cifra. Si además la secadora necesita más de una vuelta para secar las toallas, pida también la ventila de secadora. Cuesta de 100 a 200 dólares, se hace en la misma visita, e incluye la manguera de atrás de la máquina, que en una lavandería metida en el garaje o en un cuarto de atrás muchas veces está aplastada contra la pared.',
      ],
    },
  ],

  lakeland: [
    {
      heading: 'Precio de limpiar los conductos en las casas viejas de Lakeland, cerca de los lagos',
      body: [
        'En Lake Morton, Lake Hollingsworth, Dixieland y Cleveland Heights casi todas las casas tienen un solo equipo, y dentro del precio por sistema, de 300 a 600 dólares, pesa más el estado del ducto que el tamaño de la casa. Un sistema adaptado hace décadas, con muchas uniones y cambios de dirección, acumula polvo en cada codo, y esa carga es parte de lo que se cotiza.',
        'En esas casas el ático suele ser bajo en los aleros, y eso no impide la limpieza: la máquina se conecta al pleno y cada ramal se trabaja desde su rejilla, desde adentro de la casa. Lo que hacemos con cuidado es la revisión con cámara, porque en un ducto adaptado las uniones son las que se abren. Si encontramos una suelta, se la enseñamos en foto. Reconectarla y sellarla es reparación de ductos y se cotiza aparte, porque limpiar sin cerrarla deja el sistema jalando aire del ático al día siguiente.',
        'En Grasslands, Christina y Oakbridge las casas son más grandes y más nuevas, con más rejillas, y algunas con dos equipos que se cotizan cada uno como sistema. Ahí la primera limpieza después de la mudanza es la que más saca, porque lo que hay adentro es polvo de la obra.',
      ],
    },
    {
      heading: '¿Cómo saber si los ductos de su casa en Lakeland necesitan limpieza?',
      body: [
        'Con tanta agua dulce alrededor, en Lakeland las señales tienen que ver más con humedad que con sal. La primera es una rejilla de suministro que suda en verano, con gotas o una sombra húmeda en el techo alrededor. Eso es aire frío pasando por un ducto o una caja cuyo aislamiento ya no aguanta, y el polvo se pega justo ahí.',
        'La segunda son puntos oscuros en el marco de las rejillas o en el techo junto a ellas. La tercera es un olor a humedad que aparece en los primeros minutos de cada ciclo y luego se va. La cuarta, en los barrios viejos bajo los robles, es una capa de polen en las rejillas cada primavera aunque el filtro esté nuevo, señal de aire que entra sin pasar por el filtro.',
        'Si no tiene ninguna de esas señales, nadie en la casa tiene alergias que empeoren adentro y la última limpieza fue hace menos de tres años, lo honesto es esperar y gastar en un buen filtro. Si sí las tiene, llame o escriba con el número de rejillas y de equipos y le damos el precio antes de agendar. La ventila de secadora, de 100 a 200 dólares, se puede sumar a la misma visita.',
      ],
    },
  ],

  miami: [
    {
      heading: 'Precio de limpiar los ductos en un condominio de Brickell o en una casa de Coral Way',
      body: [
        'En un apartamento de torre en Brickell o Edgewater el sistema es uno, con la manejadora en un clóset, tramos cortos y pocas rejillas. Eso lo pone en la parte baja del rango de 300 a 600 dólares por sistema. En una casa de Coral Way, Coconut Grove o La Pequeña Habana el ducto corre por el ático, hay más rejillas, y en las casas grandes puede haber dos equipos, cada uno cotizado como un sistema.',
        'Lo que encarece en Miami no es el código postal sino lo que se encuentra adentro. Un serpentín con moho activo, una bandeja con agua estancada o un retorno que jala aire del ático cambian el trabajo. Se lo enseñamos con fotos antes de seguir, y lo que no es limpieza, como la reparación de ductos o la eliminación de moho, se cotiza aparte para que usted decida.',
      ],
    },
    {
      heading: 'Limpieza de ductos cerca de mí en Miami: lo que pide el edificio antes de la cita',
      body: [
        'En un condominio la cita empieza con la administración. Muchos edificios piden el certificado de seguro del contratista antes de dejarlo subir, y le mandamos el nuestro antes de la cita. Muchos también exigen reservar el elevador de carga y solo permiten trabajos de contratistas en ciertos horarios entre semana. Pregúntelo en la oficina y agendamos dentro de ese horario.',
        'Dentro del apartamento lo que hay que preparar es el clóset de la manejadora, que en Miami casi siempre termina lleno de cajas, aspiradoras y maletas. Vacíelo antes de que lleguemos y quite lo que esté pegado a las rejillas. La máquina suena como una aspiradora de taller durante toda la visita, así que si trabaja desde casa no es el día para llamadas.',
        'La ventila de secadora en edificio tiene su propia regla. Si su secadora descarga a un ducto compartido, ese tramo es de la asociación, y le decimos de qué lado está la obstrucción antes de cotizar. En casa sola la ventila completa es suya y la limpieza cuesta de 100 a 200 dólares. Atendemos Brickell, Coconut Grove, La Pequeña Habana, Coral Way, Edgewater, Wynwood y el resto de la ciudad.',
      ],
    },
  ],

  'hialeah-gardens': [
    {
      heading: 'Precio de la limpieza de conductos en Hialeah Gardens: qué lo sube y qué no',
      body: [
        'Las casas de Hialeah Gardens, sobre losa y de los ochenta en adelante, casi siempre tienen un equipo y el ducto flexible en el ático. Con un solo sistema el precio cae entre 300 y 600 dólares, y la cuenta de rejillas es lo primero que lo mueve: una casa de tres recámaras no se cotiza igual que una de cinco con sala familiar.',
        'Lo segundo es cuánto polvo ha entrado. Con bodegas y talleres cerca y el tráfico de Okeechobee Road, aquí el retorno y su pleno suelen estar más cargados que los ramales de suministro, y ese trabajo se refleja en la cotización. Vivir cerca de la industria no sube el precio por sí solo. Lo sube lo que encontramos adentro, y se lo enseñamos en foto.',
        'Hay algo que no entra en ningún precio de limpieza: sellar un retorno abierto a la pared o cambiar flexible descolgado. Eso es reparación de ductos, se cotiza aparte, y en esta ciudad muchas veces es lo que más rinde.',
      ],
    },
    {
      heading: '¿Limpiar, reparar o cambiar los ductos en Hialeah Gardens?',
      body: [
        'Mucha gente en Hialeah Gardens busca instalación de ductos cuando lo que tiene es un ducto que ya cumplió su tiempo. El flexible en un ático de Miami-Dade dura de diez a quince años, menos de lo que promete la etiqueta, por el calor. En una casa de los ochenta o noventa que nunca ha cambiado el ducto, es razonable preguntarse si conviene limpiarlo o cambiarlo.',
        'La regla que usamos es simple. Si el flexible está entero, bien colgado y con el aislamiento seco, se limpia. Si hay unas cuantas uniones sueltas o un par de tramos rotos en un sistema sano, se reparan, y la reparación sale a cuenta. Si el flexible está quebradizo en todo el ático o el aislamiento está mojado, limpiarlo es tirar el dinero, y le decimos que se cambie.',
        'La cámara de la visita de limpieza le dice en cuál de los tres casos está. Para una reparación medimos antes con una prueba de presión cuánto aire pierde el sistema, y el número se lo damos antes de empezar. Si el ducto está bien y solo necesita limpieza, la ventila de secadora se puede limpiar en la misma visita por 100 a 200 dólares.',
      ],
    },
  ],

  kissimmee: [
    {
      heading: 'Limpieza de ventila de secadora cerca de mí en Kissimmee: precio y señales',
      body: [
        'En Kissimmee mucha gente nos encuentra buscando la ventila de secadora antes que los ductos, y tiene sentido. La limpieza cuesta de 100 a 200 dólares e incluye desconectar y limpiar la manguera de atrás de la secadora y el tramo completo hasta la salida de afuera, sea en la pared o en el techo.',
        'Las señales son concretas. Las toallas necesitan una segunda vuelta. La secadora se siente muy caliente por arriba. Afuera, la tapa de la salida casi no se abre con la máquina corriendo, o tiene pelusa pegada alrededor. En una casa de renta hay una más: el personal de limpieza dice que el cambio de huéspedes se le alarga porque la ropa de cama no termina de secarse.',
        'Si la salida está en el techo, no intente limpiarla usted. Subimos nosotros. Y si la manguera de atrás es de aluminio delgado, aplastada o rota, se la enseñamos y le damos el precio de cambiarla antes de hacerlo, y usted puede decir que no.',
      ],
    },
    {
      heading: 'Precio de la limpieza de ductos en Kissimmee según el tipo de casa',
      body: [
        'El precio por sistema es de 300 a 600 dólares, y en Kissimmee hay tres tipos de casa que caen en lugares distintos. Las casas de renta del corredor hacia Celebration y Poinciana tienen muchas recámaras y a veces dos equipos, y cada equipo se cotiza como un sistema. Las casas de Buenaventura Lakes, de los setenta y ochenta, son más chicas y con menos rejillas, pero ahí puede aparecer un ducto que ya pasó su vida útil, y si limpiarlo no tiene sentido se lo decimos. Las casas nuevas de Poinciana traen polvo de obra adentro, y la primera limpieza es la que más saca.',
        'A un dueño de renta lo que más le conviene es juntar todo en una sola visita, en un día sin huéspedes: ductos, serpentín y ventila de secadora. Son de dos a cuatro horas para un sistema más el tiempo de la secadora, y la casa queda lista para la siguiente reservación. Le damos el total antes de agendar.',
        'Para darle ese número necesitamos saber cuántas recámaras y rejillas tiene la casa, cuántos equipos, dónde sale la ventila de secadora, y si algún huésped ha reportado olor. No hay que mover muebles. Basta con vaciar el clóset de la manejadora y dejar libres las rejillas.',
      ],
    },
  ],

  /*
   * 4 de noviembre de 2026: trece ciudades más, las que recibieron depth en
   * inglés el 29 de octubre. Las ocho de arriba subieron en una semana (ES
   * Miami 7.6 a 4.6, ES Orlando 6.3 a 3.5). Misma regla: precio dentro de 300 a
   * 600 por sistema según la vivienda de cada ciudad, qué incluye la visita, y
   * un ángulo local. Escrito por ciudad, sin repetir lo que ya dice depthEs.
   */
  bradenton: [
    {
      heading: '¿Cuánto cuesta la limpieza de ductos de aire acondicionado en Bradenton?',
      body: [
        'La respuesta corta es de 300 a 600 dólares por sistema, y en Bradenton lo que decide el número es la casa. Una casa de bloque de una planta en West Bradenton o en Bayshore Gardens, con la manejadora en un clóset del pasillo y ocho o diez rejillas, suele quedar en la parte baja. Una casa de dos plantas en Braden River, Tara o del lado de Lakewood Ranch, con un segundo equipo para arriba, son dos sistemas, y cada uno lleva su propio renglón en la cotización.',
        'Dentro del rango, el precio sube con el número de rejillas, con lo difícil que sea llegar al ático o al clóset, y con cuánto polvo ha juntado un sistema que quizás nunca se ha limpiado. Lo que ya es otro trabajo no se cobra como limpieza. Si el retorno de una casa de los sesenta jala aire por la cavidad de la pared, hay que cerrarlo primero, y eso es reparación de ductos: se mide con una prueba de presión y se cotiza según lo que salga, desde 250 dólares hasta más de 2,000 en un ático completo. Si la cámara encuentra moho en el serpentín o dentro del ducto, se cotiza aparte como eliminación de moho, y usted decide.',
        'En el Village of the Arts muchas casas viejas son vivienda y taller a la vez. Si en la suya se lija, se corta madera o se trabaja barro, díganoslo al llamar. Ese polvo fino llega al retorno antes que a cualquier otro lado, y conviene mirar el filtro y el ventilador con más cuidado.',
      ],
    },
    {
      heading: 'Si usted pasa el verano fuera de Bradenton: cómo dejar agendada la limpieza',
      body: [
        'Mucha gente en Bradenton vive aquí solo de noviembre a abril. Para esas casas el mejor momento de la limpieza no es cuando el dueño ya llegó y siente el olor, sino unas semanas antes, para que el sistema esté limpio cuando la casa se vuelva a llenar.',
        'No hace falta que usted esté. Quien le cuide la casa, un vecino o la persona que la revisa cada mes, nos abre al principio, y al final hacemos el recorrido con esa persona y las fotos del antes y el después en los mismos puntos. El precio ya se lo dimos por teléfono antes de agendar, así que nadie tiene que aprobar un número en la puerta. Si la cámara muestra algo que no es limpieza, como un tramo despegado en el ático, se para ahí, se toma la foto y la decisión queda para usted.',
        'Para darle el número necesitamos saber cuántas rejillas hay, cuántos equipos, dónde está la manejadora y si la casa se quedó cerrada con el aire en 80. Si además la ventila de secadora sube al techo, que aquí es lo normal, la podemos limpiar en la misma visita por 100 a 200 dólares, con la manguera de atrás de la máquina incluida.',
      ],
    },
  ],

  'deerfield-beach': [
    {
      heading: 'Precio de la limpieza de conductos en Deerfield Beach: Century Village, The Cove o Deer Creek',
      body: [
        'En Deerfield el rango es el de siempre, de 300 a 600 dólares por sistema, pero cada parte de la ciudad cae en un lugar distinto. Un apartamento de Century Village tiene una manejadora compacta en un clóset y unos pocos tramos cortos, y queda en la parte baja. Muchas veces ni siquiera es la limpieza completa lo que le conviene. Si la cámara muestra los conductos limpios y el problema está en el serpentín y la bandeja, la limpieza del equipo, de 200 a 450 dólares, puede ser suficiente, y se lo decimos.',
        'En The Cove y del lado de Hillsboro las casas solas tienen más rejillas y el ducto en el ático. Ahí lo que mueve el precio, además del tamaño, es la sal: rejillas oxidadas con los tornillos pegados, una compuerta trabada, una salida de techo que ya no cierra. Lo oxidado se fotografía y cambiarlo es decisión suya. En Deer Creek, Independence Bay y Crystal Lake, con casas de dos pisos y townhouses, un equipo por planta son dos sistemas y dos precios.',
      ],
    },
    {
      heading: 'Ventila de secadora cerca de mí en Deerfield Beach: en el condominio y en la casa',
      body: [
        'Mucha gente en Deerfield nos busca por la secadora antes que por los conductos. La limpieza de la ventila cuesta de 100 a 200 dólares y cubre la manguera de atrás de la máquina, el tramo completo y la tapa de afuera. Si además le toca la limpieza de ductos, las dos se hacen en la misma visita.',
        'En condominio, lo primero es saber a dónde descarga su secadora. Si sale a una pared exterior desde su apartamento, el tramo es suyo y se limpia completo. Si descarga a un ducto del edificio, ese ducto es de la asociación, y lo que hacemos es limpiar su parte y decirle de qué lado está la obstrucción. Muchas administraciones piden además el certificado de seguro antes de dejarnos entrar y solo permiten trabajos entre semana, así que díganos el edificio y el número de apartamento cuando llame.',
        'En una casa de The Cove el tramo suele subir al ático y salir por el techo, y cerca del mar la tapa se traba con la sal. Si la tapa no abre o la manguera de atrás está aplastada contra la pared, se la enseñamos en foto. Cambiar la manguera o la tapa es una reparación de ventila, de 200 a 600 dólares según el trabajo, y usted decide antes de que toquemos nada.',
      ],
    },
  ],

  'boynton-beach': [
    {
      heading: 'Cuánto cuesta limpiar los ductos en Boynton Beach: villa, condominio o casa al oeste',
      body: [
        'Una villa de Hunters Run o una casa de una planta en Leisureville casi siempre tiene un solo equipo y pocos tramos, y con un precio de 300 a 600 dólares por sistema queda en la parte baja del rango. Los apartamentos de Renaissance Commons tienen la manejadora en un clóset y tramos cortos, y lo único que hay que coordinar es el horario del edificio. Las casas grandes de las comunidades cerradas al oeste del turnpike muchas veces tienen dos equipos, y son dos sistemas con dos precios.',
        'Dentro del rango, lo que sube el número es la cantidad de rejillas y lo que haya adentro. En las villas de los setenta y ochenta, con el ducto original conectado a una manejadora nueva, la cámara decide más que el tamaño. Si el ducto está sano, se limpia. Si pierde aire por las uniones, se lo enseñamos en foto, y sellarlo es reparación de ductos con su propio precio después de una prueba de presión. Y si los conductos salen limpios, le vamos a decir que este año le rinde más limpiar el serpentín que pagar una limpieza completa.',
      ],
    },
    {
      heading: 'Si usted llega a Boynton para el invierno: la visita antes de abrir la casa',
      body: [
        'En Boynton mucha gente baja del norte en noviembre y se va en abril. La casa pasa el verano cerrada, y el primer día con el aire prendido es cuando se nota el olor a encierro. Lo que mejor funciona es agendar la visita para las semanas antes de su llegada, o para los primeros días, antes de que la casa vuelva a estar llena.',
        'En una comunidad cerrada eso tiene tres pasos. Avisar en la caseta que vamos, con el nombre de la compañía y el día. Confirmar con la asociación si pide el certificado de seguro, que le mandamos antes de la cita. Y que alguien nos abra: un vecino, la persona que le cuida la casa o un familiar. Esa persona hace con nosotros el recorrido final con las fotos.',
        'La visita incluye los ductos de suministro y de retorno bajo succión, las rejillas lavadas, y el ventilador y la cara del serpentín limpios. Si la manejadora tiene resistencias eléctricas para las noches frías, el polvo que juntaron todo el año es lo que huele a quemado la primera vez que se usa la calefacción, y la limpieza completa de la manejadora, de 200 a 450 dólares, lo quita antes de que usted llegue. La ventila de secadora, de 100 a 200 dólares, se suma en la misma visita.',
      ],
    },
  ],

  'fort-myers': [
    {
      heading: 'Precio de la limpieza de ductos en Fort Myers según el barrio y lo que dejó Ian',
      body: [
        'En Fort Myers la limpieza de ductos de aire acondicionado cuesta de 300 a 600 dólares por sistema. En Whiskey Creek, con casas de una planta, la manejadora en el garaje o en un clóset y el ducto por el ático, la mayoría queda en la mitad baja del rango. En Dean Park y en las casas viejas cerca de McGregor el ducto se metió después y tiene más uniones, y ahí pesa más lo que muestra la cámara que el tamaño de la casa. En Gateway y Pelican Preserve las casas son más grandes y con más rejillas, y si hay un segundo equipo se cotiza como otro sistema.',
        'Hay una pregunta que hacemos en cada casa de Fort Myers: si el ático o la casa tomó agua con Ian y si el ducto se cambió después. Un ducto con el aislamiento mojado no se limpia, se cambia, y eso es reparación de ductos, cotizada aparte según una prueba de presión. Moho dentro del sistema se cotiza como eliminación de moho, de 500 a más de 3,000 dólares según cuánto se haya extendido. Si los ductos salen bien en la cámara y el olor viene del serpentín, limpiar solo la manejadora, de 200 a 450 dólares, puede ser todo lo que la casa necesita.',
      ],
    },
    {
      heading: 'Lo que incluye la visita en Fort Myers cuando la manejadora está en el garaje',
      body: [
        'Cuando la manejadora está en el garaje, que en Fort Myers es lo más común, la visita empieza ahí y no en la sala. Con luz y cámara revisamos la base o caja de retorno debajo del equipo y el marco del filtro. Si tienen huecos, el sistema está jalando aire del garaje, y en agosto ese aire llega caliente y cargado con el polvo del carro, de la podadora y de todo lo que se guarda ahí. Se lo enseñamos en foto antes de limpiar, porque sellar esa base es lo que hace que la limpieza dure.',
        'Después viene la limpieza en sí. La máquina se conecta al pleno, todas las rejillas se tapan, cada ramal del ático se trabaja hasta el tronco con el sistema bajo succión, y al final se limpian el ventilador y la cara del serpentín. En una casa de un solo equipo son de dos a cuatro horas con dos técnicos. Si guarda el cloro de la piscina en el garaje, póngalo lejos de la manejadora: los vapores dañan el serpentín, y moverlo no le cuesta nada.',
        'Si usted pasa el verano fuera, conviene dejar la visita para antes de su regreso en otoño. Quien le cuide la casa puede abrir el garaje y hacer el recorrido con las fotos. La ventila de secadora, que aquí muchas veces cruza el ático hasta el techo o el alero, se limpia en la misma visita por 100 a 200 dólares.',
      ],
    },
  ],

  'bonita-springs': [
    {
      heading: '¿Cuánto cuesta limpiar los ductos de aire acondicionado en Bonita Springs?',
      body: [
        'De 300 a 600 dólares por sistema. La mayoría de las casas de Pelican Landing, Spanish Wells y Palmira son de una planta, con la manejadora junto al garaje o en un cuarto de servicio, y quedan en la mitad baja del rango. Lo que las sube es el tamaño, un ala de visitas con su propio equipo, que se cotiza como otro sistema, o un ático difícil de recorrer. En las torres y villas de Bonita Bay el sistema es compacto y de tramos cortos, y muchas veces lo que pide trabajo es el serpentín y no el ducto.',
        'Lo que más mueve el precio aquí es cuánto tiempo pasó la casa cerrada. Una casa que estuvo de abril a noviembre con el aire en 80 puede traer crecimiento en el serpentín o en la bandeja. Si la cámara lo muestra, se para y se cotiza aparte como eliminación de moho antes de seguir. Si solo es polvo, entra en la limpieza normal. Y si el ducto está limpio, le decimos que con la limpieza de la manejadora, de 200 a 450 dólares, le basta.',
      ],
    },
    {
      heading: 'Si usted cuida casas de temporada en Bonita Springs',
      body: [
        'Mucha de la gente que nos llama en Bonita no es la dueña de la casa sino quien se la cuida mientras el dueño está en el norte: la persona que pasa cada semana, la que limpia, o la compañía que atiende varias casas en la misma comunidad. Si ese es su caso, hay cosas que puede revisar en cada vuelta y que avisan a tiempo.',
        'Mire el termostato: si el dueño dejó el control de humedad encendido, que siga así. Revise afuera la salida de la línea de drenaje, que debe gotear cuando el equipo corre. Abra el clóset de la manejadora y fíjese si el filtro está gris o si hay olor ahí adentro. Y si en la casa se lava ropa de cama entre visitas, cuente las vueltas de la secadora: cuando las toallas piden dos, la ventila ya necesita limpieza, que cuesta de 100 a 200 dólares.',
        'Para agendar no hace falta el dueño. Usted nos da la comunidad y la dirección, avisa en la caseta, y si la asociación pide el certificado de seguro lo mandamos antes. El precio se le da al dueño o a usted antes de la cita. El día de la visita usted nos abre, y al final hacemos el recorrido con las fotos del antes y el después, que le sirven para contarle al dueño lo que se hizo.',
      ],
    },
  ],

  'pompano-beach': [
    {
      heading: 'Precio de limpiar los conductos en Pompano Beach: Palm Aire, Cypress Bend o una casa de Cresthaven',
      body: [
        'En Pompano la limpieza de ductos cuesta de 300 a 600 dólares por sistema, y un apartamento de Palm Aire o de Cypress Bend queda en la parte baja: una manejadora en clóset y unos pocos pies de ducto que son suyos, porque el tramo que sube por el edificio es de la asociación. Si la cámara muestra ese poco ducto limpio y el olor sale del equipo, lo que le conviene es la limpieza del serpentín, el ventilador y la bandeja, de 200 a 450 dólares, y no la limpieza completa.',
        'En Old Pompano y Cresthaven, donde el aire se le puso a la casa después, el precio depende de cuántas rejillas se fueron agregando y de cuántas uniones tiene el ducto. Una unión abierta en el ático no se limpia, se repara, y eso se cotiza aparte después de medir con una prueba de presión. En Garden Isles y alrededor de Harbor Village, una casa original de una planta junto al canal suele ser un sistema, y una casa reconstruida de dos pisos en la misma calle puede ser dos.',
      ],
    },
    {
      heading: 'Lo que incluye la visita en Pompano Beach, y lo que se queda fuera',
      body: [
        'La visita incluye los ductos de suministro y de retorno, los troncos y el pleno, todo bajo succión, más el ventilador y la cara del serpentín. Las rejillas se quitan y se lavan. Cerca de la playa y de los canales muchas rejillas de metal ya tienen óxido, y si una no queda limpia se fotografía para que usted decida si cambiarla.',
        'En un edificio de Palm Aire o Cypress Bend la cita se arregla primero con la administración. Muchas piden el certificado de seguro y que se reserve el elevador, y el certificado se lo mandamos antes. Adentro trabajamos solo lo suyo: el clóset, su ducto y sus rejillas. Si la cámara muestra que el problema viene del tramo vertical del edificio, se lo decimos con fotos para que lo lleve a la junta.',
        'Lo que no incluye es el lado del refrigerante ni la parte eléctrica del equipo, que son trabajo de su técnico de aire acondicionado. Tampoco tomamos muestras de aire. Si el olor a humedad regresa cada verano por mucho que limpie, la visita de calidad del aire, de 200 a 500 dólares, mide la humedad cuarto por cuarto, revisa con cámara el serpentín, la bandeja y los ductos, y le deja un informe con fotos para saber de dónde viene antes de pagar otra limpieza.',
      ],
    },
  ],

  hollywood: [
    {
      heading: 'Cuánto cuesta la limpieza de ductos en Hollywood: Hollywood Lakes, Emerald Hills o un condominio frente al mar',
      body: [
        'En Hollywood se cobra por sistema, de 300 a 600 dólares, y la ciudad tiene casas en todos los puntos del rango. Un condominio frente al Broadwalk o en Hillcrest, con la manejadora en el clóset del pasillo y unos veinte pies de ducto, queda abajo. Una casa de una planta en Hollywood Hills, Driftwood o Boulevard Heights, con el ducto en el ático desde hace décadas, cae en el medio. En Emerald Hills hay casas lo bastante grandes para dos equipos, y cada uno es un sistema con su precio.',
        'En los bungalows de Hollywood Lakes la cuenta es otra. El aire se les puso después y el ducto pasa por clósets y plafones, así que el precio depende de cuánto del sistema se alcanza desde las rejillas y el pleno, y lo que no se alcanza no se cobra como limpiado. Y si un tramo de flexible de los sesenta en Driftwood tiene la cubierta rajada, limpiarlo no tiene sentido: se cambia, y se cotiza como reparación de ductos antes de tocar nada.',
      ],
    },
    {
      heading: 'Apartamentos de renta cerca de Hollywood Beach: la limpieza entre inquilinos',
      body: [
        'Buena parte de lo que hay entre el Intracoastal y la playa se renta, por temporada o por mes. En un apartamento que cambia de inquilino seguido, el filtro se cambia tarde o nunca, el aire corre a veces con la puerta del balcón abierta, y el serpentín junta sal, arena y polvo más rápido que en una casa donde vive la misma familia todo el año.',
        'El mejor momento es el hueco entre una renta y la siguiente, con el apartamento vacío. En un sistema de clóset la visita es cosa de una mañana: rejillas fuera y lavadas, ductos bajo succión, ventilador y cara del serpentín limpios, y fotos del antes y el después que le quedan a usted para el archivo del apartamento, por si el próximo inquilino reporta algo.',
        'Si el edificio pide certificado de seguro o reservar el elevador, se arregla antes con la administración. Si el apartamento tiene secadora propia, la ventila se limpia en la misma visita por 100 a 200 dólares, y si descarga a un tramo del edificio le decimos de quién es antes de cotizar. Y si usted vive fuera de Florida, quien le administre la propiedad puede abrirnos y hacer el recorrido final.',
      ],
    },
  ],

  'delray-beach': [
    {
      heading: 'Precio de la limpieza de ductos de aire acondicionado en Delray Beach, barrio por barrio',
      body: [
        'Una limpieza completa en Delray cuesta de 300 a 600 dólares por sistema. En Kings Point, con villas y edificios bajos de manejadora en clóset y tramos cortos, la mayoría queda en la parte baja, y si la cámara muestra el ducto limpio, a veces basta con limpiar el serpentín, el ventilador y la bandeja, de 200 a 450 dólares.',
        'En Lake Ida, Del-Ida Park y Osceola Park el ducto se acomodó después en casas de los años veinte a los cincuenta, y la limpieza va con una revisión de cada unión. Una unión pegada con cinta que ya se soltó se repara antes de limpiar, y la reparación se cotiza aparte después de una prueba de presión, desde 250 dólares. Alrededor de Pineapple Grove hay casas adosadas y condominios nuevos donde lo que sale del ducto es polvo de obra, y si la manejadora está en el ático y no en un clóset, el trabajo toma más tiempo y el precio lo refleja.',
      ],
    },
    {
      heading: 'Si usted agenda la limpieza para sus padres en Kings Point',
      body: [
        'Muchas de las llamadas que recibimos para Kings Point las hace un hijo o una hija que vive en otra ciudad y quiere resolverle el aire a su mamá o a su papá. Se puede hacer todo desde lejos. Usted nos da la dirección y, si lo sabe, cuántas rejillas hay, y le damos el precio antes de agendar. A su familiar no le van a presentar en la puerta un número distinto.',
        'Lo que sí ayuda es avisar en la caseta con el día y el nombre de la compañía, y preguntar en la asociación si piden el certificado de seguro, que le mandamos antes. Si su familiar prefiere no estar solo con dos técnicos, un vecino puede acompañar el recorrido final, o usted puede estar al teléfono. Las fotos del antes y el después se las explicamos a quien esté presente.',
        'Y una advertencia que en esta comunidad vale más que en otras. Si alguien llega a la puerta ofreciendo limpieza de ductos por 49 o 99 dólares, o diciendo que encontró moho peligroso sin enseñar una foto, lo más seguro es no dejarlo pasar. Nuestro precio es de 300 a 600 dólares por sistema, se da antes de la cita, y el técnico no gana comisión por lo que venda.',
      ],
    },
  ],

  'coral-gables': [
    {
      heading: 'Precio de la limpieza de ductos en Coral Gables: casa de los años veinte, casa de Riviera o casa con tres equipos',
      body: [
        'En Coral Gables el precio es de 300 a 600 dólares por sistema, y en una casa de la época de Merrick lo que más lo decide es cuánto del sistema se alcanza. Limpiamos desde las rejillas y el pleno con el sistema bajo succión. Si un tramo encajonado en un plafón de yeso no se alcanza sin abrir el techo, se lo decimos antes y no se le cobra como limpiado. Dentro de la casa ponemos lonas junto a la manejadora y cubrezapatos, y la manguera se fija en los umbrales, que en un piso de madera o de losa antigua importa.',
        'En las casas de posguerra cerca de Riviera y Coral Bay, sobre losa y con flexible en el ático, la cuenta es la normal: un equipo, el número de rejillas y lo que muestre la cámara. En Cocoplum, Ponce Davis y Old Cutler hay casas con dos o tres equipos, y cada uno es un sistema con su precio. No hace falta limpiar los tres a la vez si solo uno da el problema. Lo que no es limpieza va en su propio renglón: la reparación de ductos, desde 250 dólares según una prueba de presión, y el moho dentro del sistema, como eliminación de moho.',
      ],
    },
    {
      heading: '¿Huele a humedad el ala que no se usa? La visita de calidad del aire en Coral Gables',
      body: [
        'En una casa grande del Gables pasa seguido que el olor está en una sola parte: el ala de visitas, el cuarto de arriba que se abre en diciembre, la suite que nadie usa en verano. Antes de pagar la limpieza de tres sistemas, vale la pena saber cuál de ellos tiene el problema y por qué.',
        'Para eso está la visita de calidad del aire, de 200 a 500 dólares. Medimos la humedad y la temperatura en cada cuarto y en las rejillas de suministro, revisamos con cámara los ductos de suministro y de retorno, la cara del serpentín, la bandeja, el ventilador y el pleno, y le dejamos un informe con fotos y un precio por escrito para lo que haga falta. No tomamos muestras de aire ni mandamos nada a laboratorio, y no le vamos a decir qué especie de moho tiene.',
        'Lo que salga define el siguiente paso. Si hay crecimiento dentro de los ductos o en la manejadora, es nuestro servicio de eliminación de moho. Si el moho está en el yeso, en la madera o en las paredes, es trabajo aparte de un contratista con licencia en Florida, y se lo decimos. Y si lo que hace falta es un deshumidificador o aire fresco controlado, eso le toca a un contratista de aire acondicionado.',
      ],
    },
  ],

  sunrise: [
    {
      heading: '¿Cuánto cuesta limpiar los ductos en Sunrise cuando el ducto es el original?',
      body: [
        'El precio es de 300 a 600 dólares por sistema, y en Sunrise lo que más lo mueve no es el tamaño sino la edad del ducto. En Sunrise Golf Village, en Sunrise Lakes y en buena parte de la ciudad, el sistema sigue con la distribución con la que se construyó, conectada a una manejadora que ya se cambió una o dos veces. Un ducto así puede llevar décadas de polvo en cada codo, y ese trabajo se refleja en la cotización.',
        'El tipo de ducto también cuenta. El ducto de cartón de fibra de esos años se limpia con más cuidado que el flexible, y si la cámara lo muestra deshaciéndose por dentro o con las uniones de tela sueltas, limpiarlo solo suelta más fibra. En ese caso no le cobramos una limpieza. Le enseñamos las fotos y le cotizamos la reparación o el cambio del tramo, que se mide con una prueba de presión y va desde 250 dólares hasta más de 2,000 si hay que cambiar todo el sistema.',
        'En las casas de Welleby y Springtree, con flexible en el ático, el número lo suben la cantidad de rejillas y un ático difícil de recorrer. Si la casa tiene un segundo equipo, es otro sistema.',
      ],
    },
    {
      heading: 'La visita en un apartamento de Sunrise Lakes: cómo se coordina y qué se hace',
      body: [
        'En Sunrise Lakes lo primero es la asociación. Pregunte en la oficina de su fase si piden el certificado de seguro del contratista y en qué horario se permite trabajar, y le mandamos el certificado antes de la cita. Díganos en qué piso está y si hay elevador, porque la máquina y la manguera tienen que llegar hasta su puerta.',
        'Adentro no hay que mover muebles pesados. Basta con vaciar el clóset de la manejadora, que muchas veces se usa para guardar cosas, y quitar lo que esté delante de las rejillas. Se bajan y se lavan la rejilla de retorno y las de suministro, se pone el sistema bajo succión, se limpian los tramos, y luego el ventilador y la cara del serpentín. Si la bandeja tiene agua estancada o marca, se la enseñamos.',
        'La máquina suena como una aspiradora de taller toda la visita. Si en la casa hay alguien delicado de salud o que duerme de día, díganoslo y buscamos la hora que menos moleste. Al final hacemos el recorrido con las fotos, y si su secadora descarga a una pared exterior, la ventila se limpia en la misma visita por 100 a 200 dólares.',
      ],
    },
  ],

  plantation: [
    {
      heading: 'Lo que mueve el precio de la limpieza de ductos en Plantation',
      body: [
        'El precio por sistema es de 300 a 600 dólares. En una casa de una planta de Plantation Park o de Sunset Park, con un equipo y un solo retorno grande en el pasillo, el número sale del conteo de rejillas y de lo que encuentre la cámara. En Jacaranda las casas son más grandes y los tramos a las recámaras del fondo más largos. En las unidades de Lauderdale West el sistema es compacto y queda en la parte baja. En Plantation Acres hay casas con dos o tres equipos, y cada uno se cotiza por separado.',
        'Lo que más trabajo agrega en esta ciudad es el retorno. Una rejilla central pintada varias veces, un filtro más grueso de lo que el equipo aguanta, o un ducto de retorno medio aplastado detrás de la rejilla hacen que el sistema jale polvo por los lados. Lo revisamos al principio, y si hay que sellar el marco o corregir el ducto, se lo enseñamos en foto y con precio aparte antes de limpiar. En los Acres, la película mineral del riego de pozo y el polvo de los lotes sobre el serpentín entran en la limpieza. Si lo que hay es crecimiento y no polvo, se cotiza aparte como eliminación de moho.',
      ],
    },
    {
      heading: 'Cuándo agendar la limpieza en Plantation: el polen de roble y el calendario',
      body: [
        'En Plantation el polen de roble llega en febrero y marzo, y entra a la casa con la gente, por las puertas y por cualquier fuga del retorno. Si usted limpia los conductos en enero, en dos meses el polen ya está otra vez en el serpentín y en los primeros pies de ducto. Por eso, si no hay olor ni moho que lo apure, conviene agendar cuando ya pasó la temporada del roble, en abril o mayo, antes de que el aire empiece a correr sin parar.',
        'Si hay olor a humedad, puntos oscuros en las rejillas o alguien con alergias que empeoran adentro, no espere al calendario. Eso se revisa cuanto antes. Y si la cámara dice que los conductos están limpios, se lo vamos a decir, aunque eso signifique que la visita termina en la manejadora.',
        'Entre limpiezas, dos cosas sirven más que cualquier servicio: un filtro MERV 8 a 11 bien ajustado en su marco, cambiado a tiempo durante la primavera, que es cuando más se carga, y aspirar la rejilla de retorno cada pocas semanas. La ventila de secadora, sobre todo si sale por un alero bajo un árbol, se puede limpiar en la misma visita por 100 a 200 dólares, y de paso revisamos que la tapa no tenga hojas ni un nido.',
      ],
    },
  ],

  davie: [
    {
      heading: 'Precio de la limpieza de conductos en Davie: lote grande, Forest Ridge o casa manufacturada',
      body: [
        'La limpieza de ductos de aire acondicionado en Davie cuesta de 300 a 600 dólares por sistema, y aquí las casas varían más que en casi todo Broward. Una casa de Forest Ridge o de Shenandoah con un equipo suele quedar en el medio del rango. Si su casa en Ivanhoe o en Long Lake Estates tiene dos equipos, son dos sistemas con dos precios.',
        'En las propiedades con caballos o con entrada de arena, lo que mueve el número es la carga. El retorno y el ventilador llegan más sucios que los ramales de suministro, porque ahí cae primero lo que se levanta del piso, y limpiar las aspas del ventilador va dentro de la limpieza. Si el serpentín necesita más que limpiarle la cara, la limpieza completa de la manejadora cuesta de 200 a 450 dólares.',
        'Una casa manufacturada no se cotiza a ciegas. El ducto va en el piso, debajo de la membrana, y primero hay que ver si la membrana y el ducto de cruce están enteros. Si el ducto está abierto al terreno, cerrarlo es reparación y va antes que la limpieza, y se lo decimos antes de darle el número.',
      ],
    },
    {
      heading: 'Casa con caballos en Davie: cómo preparar el día de la visita',
      body: [
        'La limpieza en una propiedad con corral es la misma que en cualquier casa: las rejillas se tapan, la máquina se conecta al pleno, cada ramal se limpia con el sistema bajo succión, y se termina con el ventilador y el serpentín. Lo que cambia es lo que conviene hacer antes.',
        'Ese día no es buen día para rastrillar la arena ni para mover paja cerca de la casa, porque la puerta se va a abrir varias veces para pasar la manguera. Si hay botas y ropa del establo junto a la entrada o en la lavandería, sáquelas de ese camino. Y si tiene un apartamento sobre el establo o una casa de huéspedes con su propio equipo, díganoslo al llamar: es otro sistema, y se puede hacer en la misma visita con su propio precio.',
        'Al final le enseñamos las fotos del antes y el después. Si el filtro de su casa se pone gris en tres semanas, le recomendamos uno que le quede bien al marco y que el equipo pueda respirar, en lugar de uno más denso. La ventila de secadora, de 100 a 200 dólares, se suma a la misma visita. En una casa de lote grande el tramo suele ser largo y la tapa de afuera recibe el polvo de la tierra.',
      ],
    },
  ],

  'coral-springs': [
    {
      heading: 'Cuánto cuesta la limpieza de ductos en Coral Springs si la casa es de dos pisos',
      body: [
        'En Coral Springs la limpieza cuesta de 300 a 600 dólares por sistema, y la primera pregunta es cuántos equipos tiene la casa. En Ramblewood, Westchester y Maplewood muchas casas son de una planta con un equipo en el garaje o en un clóset, y quedan en la mitad baja o media. En Eagle Trace, Turtle Run y Coral Creek hay casas de dos pisos que trabajan con un solo equipo para las dos plantas, y otras con un segundo equipo para arriba, muchas veces en el ático. Ese segundo equipo es otro sistema.',
        'Dentro del rango, en una casa de dos pisos el precio lo suben el tronco vertical que lleva el aire arriba, que va dentro de un registro y se limpia completo, y una manejadora en el ático, que toma más tiempo que una en el garaje. A esta edad, treinta y tantos años, también es común que la cámara encuentre un tramo separado del collarín. Eso no se limpia: se repara, con precio aparte después de una prueba de presión.',
      ],
    },
    {
      heading: 'La visita en una casa de Coral Springs: horario escolar, mascotas y la ventila de secadora',
      body: [
        'Muchas familias de Coral Springs agendan en horario escolar, y tiene sentido. La máquina suena como una aspiradora de taller durante toda la visita, las rejillas de los cuartos se quitan para lavarlas, y la manguera pasa por la puerta principal. Con la casa vacía en la mañana, el trabajo de un sistema, de dos a cuatro horas con dos técnicos, se termina antes de la salida de la escuela.',
        'Lo que hay que preparar es poco: despejar el clóset o el espacio del garaje alrededor de la manejadora, quitar camas de mascotas y juguetes de encima de las rejillas, y avisar si hay un perro que tenga que quedarse en un cuarto. Usted está al principio para decirnos qué cuartos tienen polvo u olor, y al final para el recorrido con las fotos.',
        'Si su asociación pide aviso de contratistas, se lo damos con tiempo, y como el trabajo se hace desde adentro, por las rejillas y el pleno, no cambia nada del exterior. La ventila de secadora, que en estas casas sube al ático y sale por el techo, se limpia en la misma visita por 100 a 200 dólares, con la manguera de atrás incluida. Si un tramo de treinta años se ve aplastado o roto, se lo enseñamos antes de cambiar nada.',
      ],
    },
  ],
};
