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
};
