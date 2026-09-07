/**
 * Contenido en español para las 10 páginas de servicios.
 * La clave de cada entrada es el MISMO slug que en services.ts.
 * Traducción en español latinoamericano neutro, tratamiento de "usted".
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
 'air-duct-cleaning': {
 name: 'Limpieza de Conductos de Aire',
 shortName: 'Limpieza de Conductos',
 metaTitle: 'Limpieza de Ductos en Florida | Desde $300',
 metaDescription:
 'Limpieza de ductos en Florida desde $300, con equipo de presión negativa y estándar NADCA. Le damos el precio antes de agendar. Con licencia y seguro.',
 answer:
 'La limpieza de conductos de aire es la extracción profesional de polvo, residuos, moho y alérgenos de los ductos de suministro y retorno de su sistema HVAC mediante equipo de aire negativo (extracción en la fuente). En Florida suele recomendarse cada 3 a 5 años para proteger la calidad del aire interior y la eficiencia del sistema.',
 intro: [
 'Con el paso del tiempo, la humedad, el polen y el polvo fino de construcción propios de Florida se acumulan dentro de sus ductos. Como el mismo aire recircula por la casa entre 5 y 7 veces al día, unos conductos contaminados reparten esas partículas una y otra vez en las habitaciones donde respira su familia.',
 'Si buscó limpieza de ductos de aire acondicionado, limpieza de ventilas de AC o limpieza de conductos, es el mismo servicio. En Florida se dice "aire acondicionado" porque casi nadie tiene calefacción de gas, así que los ductos se piensan como parte del aire. Lo único que sí es distinto es la limpieza de la ventila del secador, que es otro ducto y otro trabajo.',
 'El trabajo se hace con una máquina de aire negativo, montada en camión o portátil, que traemos hasta su casa. Se conecta al sistema en el plenum o en la línea troncal principal y mantiene todo el ducto bajo succión continua, descargando a través de un filtro HEPA hacia un tambor de recolección sellado. Eso es la extracción en la fuente, el método que describe la norma NADCA ACR. Es un trabajo distinto al de una aspiradora sostenida en la rejilla, que alcanza apenas el primer metro de un ramal que puede medir seis metros o más dentro del ático.',
 'Con la máquina encendida, sellamos todas las rejillas de suministro y retorno de la casa y las vamos abriendo de una en una. Sellar importa más que cualquier herramienta que tengamos. Si las demás rejillas quedan abiertas, el aire toma el camino más corto por ellas y el ramal que se está cepillando casi no se mueve. Con el resto del sistema cerrado, toda la succión se concentra en el tramo que se está trabajando y los residuos viajan a la unidad de recolección en lugar de entrar a la habitación.',
 'La succión por sí sola no despega lo que ya está pegado a la pared del ducto, así que cada tramo recibe agitación mecánica. Usamos cepillos rotativos con eje flexible en ducto de lámina y en duct board, y látigos de aire comprimido o bolas percutoras en el ducto flexible, que es un forro delgado sobre un alambre en espiral y se rompe con un cepillo rígido. Las troncales principales y los plenums de suministro y retorno se trabajan a mano y con varilla donde la máquina no llega sola.',
 'Las piezas que más se saltan son justo las que deciden a qué huele su aire. La rueda del soplador, su carcasa y la cara accesible del serpentín evaporador quedan después del filtro y acumulan una capa de polvo fino que ningún cepillado dentro de los ductos alcanza. En Florida esas superficies pasan meses mojadas, porque el serpentín condensa agua cada vez que el sistema trabaja, y el polvo mojado es donde empieza ese olor a humedad al arrancar. Una visita que nunca abre el compartimiento del soplador no es una limpieza.',
 'Por eso también los especiales de $49 a $99 por toda la casa no pueden ser este servicio. Dos técnicos, una máquina y de 2 a 4 horas dentro de una casa tienen un costo real. Un anuncio a ese precio es o veinte minutos de aspirado en las rejillas, o una forma de entrar a su casa para que después el número suba. Explicamos la táctica completa, con los cargos adicionales que suelen venir después, en nuestra guía en /es/blog/estafas-limpieza-ductos/. Nuestro precio es de $300 a $600 por sistema y usted lo tiene antes de agendar.',
 'Así se ve la visita en la práctica. Dos técnicos, de 2 a 4 horas en una casa de un solo sistema con unas 8 a 14 rejillas, un tomacorriente disponible y un paso libre desde donde estacionamos hasta la manejadora para la manguera. La manejadora tiene que estar accesible, que en Florida casi siempre significa el garaje, un clóset del pasillo o una plataforma en el ático, así que ese clóset hay que vaciarlo antes de que lleguemos. No hay que mover nada pesado. Le pedimos que retire sillas, macetas y cajas de encima de las rejillas, y del resto nos encargamos nosotros. Conviene que esté en casa al principio, para señalarnos los cuartos que huelen o que se llenan de polvo, y al final para el recorrido y las fotos. La unidad de recolección es ruidosa, parecida a una aspiradora industrial encendida todo el tiempo, así que no es la mejor tarde para tomar llamadas en esa misma habitación.',
 'La mayoría de las casas en Florida va en un ciclo de 3 a 5 años, y eso es un intervalo de mantenimiento, no una promesa de salud. Vale la pena citar a la EPA con todas sus letras antes de que usted gaste el dinero: nunca se ha demostrado que la limpieza de ductos prevenga problemas de salud, y el nivel de polvo de una casa no necesariamente sube porque los ductos estén sucios. Lo que la EPA sí recomienda es limpiar cuando se cumple una de tres condiciones, y nosotros usamos esas mismas tres. Moho visible en cantidad importante dentro de los ductos o en otros componentes del sistema. Ductos con plaga de roedores o insectos. Ductos tan tapados de polvo y residuos que las partículas salen por las rejillas hacia las habitaciones.',
 'Por eso hay casas a las que les decimos que no compren este servicio. Si el sistema se limpió bien hace dos años, no se ve nada en las rejillas, no hay olor ni rastro de plagas, y usted está llamando por un anuncio, la respuesta honesta es esperar y poner ese dinero en un mejor filtro o en una revisión del equipo. Preferimos decirlo por teléfono antes que tomar una cita que no le va a cambiar nada que usted pueda notar. Lo que no vamos a hacer es quitarle la idea cuando hay moho visible en la caja de una rejilla o fibra de vidrio desprendiéndose hacia el cuarto, porque eso sí es trabajo.',
 'Florida cambia el trabajo de maneras que un guion nacional no contempla. Casi todo el ducto residencial de aquí es flexible con aislamiento, tendido por un ático que en agosto llega a 130 grados, y el flexible se pandea entre soportes y guarda residuos en las partes bajas. El punto de rocío exterior se mantiene cerca de 75 grados durante meses, así que cualquier ducto o caja con el aislamiento dañado suda, y esa condensación cae sobre el polvo. La construcción nueva es el otro caso típico: el polvo de lijar drywall y el aserrín entran por los retornos abiertos durante la obra y se quedan años en la troncal, y por eso una casa de dos años suele estar peor por dentro que una de veinte. Sume la caspa de mascotas todo el año, un polen que nunca cierra temporada del todo y una casa que permanece sellada nueve meses al año, y los ductos de aquí se cargan más rápido que los de la misma casa en un clima seco.',
 'Lo que la visita no incluye, para que nada sea sorpresa. No reparamos ni reemplazamos ductos, no sellamos fugas y no reponemos aislamiento en la misma cita, aunque sí fotografiamos todo lo que lo necesita y se lo mostramos. No hacemos remediación de moho en paredes, drywall ni estructura, que en Florida es un trabajo aparte con licencia propia. No damos servicio al lado de refrigerante del equipo. No hacemos pruebas de laboratorio del aire, así que no vamos a afirmar nada sobre conteos de esporas antes y después. Y si el ducto está aplastado, desconectado o el forro flexible se está deshaciendo, limpiarlo es gastar dinero en un ducto que hay que reemplazar, y se lo decimos en vez de limpiarlo.',
 ],
 benefits: [
 { title: 'Aire más limpio en la rejilla', text: 'La extracción en la fuente saca el polvo, la caspa y el polen del sistema en lugar de moverlos de lugar. Lo primero que la gente nota es el olor al arrancar y la cantidad de tierra que ya no aparece en un trapo blanco puesto en la rejilla de suministro.' },
 { title: 'El flujo de aire para el que se diseñó el sistema', text: 'Una rueda de soplador cargada y un serpentín con polvo son una restricción. Al limpiarlos, la manejadora vuelve a mover el volumen de aire para el que fue calculada, y eso es lo que acorta los ciclos. Los ductos solos rara vez lo logran.' },
 { title: 'Menos polvo de regreso a los cuartos', text: 'Cuando la troncal, los ramales y las cajas de rejilla están limpios, el sistema deja de repartir una dosis de polvo asentado en cada habitación cada vez que enciende.' },
 { title: 'Problemas detectados cuando todavía son baratos', text: 'Fotografiamos el interior del sistema. Un flexible aplastado, una caja desconectada en el ático, aislamiento mojado en el plenum o moho en el serpentín son cosas que usted prefiere ver en una foto y no en la factura eléctrica de agosto.' },
 { title: 'El olor a humedad rastreado hasta su origen', text: 'Casi todo el olor del aire acondicionado en Florida viene del polvo mojado del serpentín y de la carcasa del soplador, no de los tramos de ducto. Limpiar esas dos superficies es lo que lo quita. Rociar sin limpiar solo lo tapa unas semanas.' },
 { title: 'Un precio antes de agendar, no después', text: 'De $300 a $600 por sistema, calculado por la cantidad de rejillas y de manejadoras. No por lo que decida un técnico ya parado en su pasillo.' },
 ],
 process: [
 { title: 'Recorrido y conteo', text: 'Contamos cada rejilla de suministro y retorno, ubicamos la manejadora, revisamos el filtro y la bandeja de condensado, y metemos luz y cámara a la troncal. Usted ve las fotos antes de que bajemos el equipo del camión.' },
 { title: 'Protección de la casa', text: 'Lonas en el área de la manejadora, cubrezapatos adentro, la unidad de recolección afuera o en la puerta, y la manguera pegada al piso en los pasos.' },
 { title: 'Conexión de aire negativo', text: 'La aspiración se conecta en el plenum o en la troncal principal y la abertura se sella. La máquina arranca antes de que entre cualquier cepillo, para que el ducto esté bajo succión todo el tiempo y no solo una parte del tiempo.' },
 { title: 'Sellado de todas las rejillas', text: 'Suministros y retornos se tapan para que la succión no se escape por ellos. Este es el paso que se salta una cuadrilla apurada, y saltárselo es lo que vuelve cosmética el resto de la visita.' },
 { title: 'Agitación y extracción, tramo por tramo', text: 'Se abre una rejilla a la vez. Un cepillo rotativo o un látigo de aire recorre ese ramal completo hasta la caja, y los residuos se van al tambor de recolección. Luego se vuelve a sellar y se pasa al siguiente.' },
 { title: 'Troncales y plenums', text: 'Las troncales de suministro y retorno y ambos plenums se limpian directamente, incluidas las esquinas y las derivaciones donde se asientan los residuos y donde se detiene una limpieza que solo toca los ramales.' },
 { title: 'Compartimiento del soplador y serpentín', text: 'Se limpian la rueda del soplador y su carcasa, y se cepilla y aspira la cara accesible del serpentín evaporador. En Florida esta suele ser la parte más sucia del sistema y la razón del olor.' },
 { title: 'Rejillas, parrillas y cajas', text: 'Se quitan las cubiertas y se lavan, se limpian a mano las cajas que quedan detrás, y se fotografía todo lo que esté oxidado, flojo o sin aislamiento.' },
 { title: 'Antimicrobiano opcional', text: 'Un producto registrado por la EPA, aplicado solo después de que el sistema está limpio y solo cuando hay motivo, por ejemplo crecimiento visible en el serpentín o en el plenum. Avísenos al agendar si alguien tiene asma o sensibilidad química y limpiamos sin aplicarlo.' },
 { title: 'Verificación y cierre', text: 'Sellamos los puntos de acceso, instalamos filtro nuevo si usted lo tiene en casa, encendemos el sistema con usted presente y hacemos el recorrido final con las fotos de antes y después de los mismos puntos.' },
 ],
 quickFacts: [
 { label: 'Precio típico', value: '$300 a $600 por sistema' },
 { label: 'Frecuencia recomendada', value: 'Cada 3 a 5 años' },
 { label: 'Tiempo en sitio', value: '2 a 4 horas' },
 { label: 'Personal', value: 'Normalmente 2 técnicos' },
 { label: 'Norma seguida', value: 'Extracción en la fuente NADCA ACR' },
 { label: 'Debe estar en casa', value: 'Sí, al inicio y al final' },
 { label: 'No incluye', value: 'Reparación, sellado ni servicio del equipo' },
 { label: 'Mejor esperar si', value: 'Se limpió hace menos de 3 años y no se ve nada' },
 ],
 faq: [
 { question: 'Con qué frecuencia se deben limpiar los conductos de aire en Florida?', answer: 'Cada 3 a 5 años en la mayoría de las casas. Antes si tiene mascotas que sueltan pelo, una remodelación reciente, una casa nueva que todavía carga polvo de obra, antecedentes de agua o moho en la manejadora, o alguien cuyas alergias empeoran claramente dentro de la casa. Si han pasado menos de tres años y no se ve nada ni huele mal, lo normal es esperar.' },
 { question: 'De verdad necesito limpiar los ductos o es opcional?', answer: 'En la mayoría de las casas es mantenimiento, no una reparación. La EPA ha dicho que nunca se ha demostrado que la limpieza de ductos prevenga problemas de salud, y que el nivel de polvo de una casa no necesariamente sube porque los ductos estén sucios. La EPA sí la recomienda en tres situaciones: moho visible en cantidad importante dentro de los ductos o en componentes del sistema, ductos con plaga de roedores o insectos, y ductos tan tapados que los residuos salen por las rejillas. Nosotros usamos esas mismas tres pruebas.' },
 { question: 'Realmente mejora la calidad del aire la limpieza de conductos?', answer: 'Retira de forma física el polvo, la caspa y las esporas de moho acumuladas dentro del sistema, así que esas partículas dejan de recircular. Lo que no hace es filtrar el aire que ya tiene ni resolver un problema de humedad. Si su meta es un aire medible más limpio, el filtro, la humedad interior y el estado del serpentín pesan al menos tanto como el interior de los ductos.' },
 { question: 'Cuánto tarda la limpieza y cuántos técnicos llegan?', answer: 'De 2 a 4 horas en una casa típica de Florida con un solo sistema, normalmente con dos técnicos. Uno maneja la unidad de recolección y la conexión a la troncal mientras el otro trabaja las rejillas de una en una. Un segundo sistema, una casa grande o mucha acumulación toman más tiempo, y se lo decimos antes de agendar en vez de correr en la segunda mitad del trabajo.' },
 { question: 'Tengo que estar en casa durante el servicio?', answer: 'Al inicio y al final. Al inicio nos da acceso y nos dice qué cuartos huelen o se llenan de polvo. Al final recorremos la casa con usted y le mostramos las fotos de antes y después de los mismos puntos. No tiene que quedarse a ver toda la parte de en medio.' },
 { question: 'A qué necesitan acceso y cómo me preparo?', answer: 'A todas las rejillas de suministro y retorno, a la manejadora y su clóset o plataforma en el ático, a un tomacorriente y a un paso libre desde donde estacionamos hasta el equipo para la manguera. Por favor vacíe el clóset de la manejadora y quite sillas, macetas y cajas de encima de las rejillas antes de que lleguemos. Esa es toda la preparación.' },
 { question: 'Es sucio el trabajo y qué tan ruidoso es?', answer: 'El sistema está bajo succión durante toda la visita, así que los residuos viajan hacia la máquina y no hacia sus cuartos, y usamos lonas junto a la manejadora y cubrezapatos dentro de la casa. El ruido sí es la molestia real: la unidad de recolección suena como una aspiradora industrial encendida de 2 a 4 horas, así que trabajar o dormir en esa habitación no es realista.' },
 { question: 'Cuánto cuesta la limpieza de conductos de aire en Florida?', answer: 'La mayoría de las casas paga entre $300 y $600 por la limpieza completa de un solo sistema. El precio se mueve según la cantidad de rejillas, la cantidad de manejadoras y qué tanta acumulación hay. Las casas más grandes, con varios sistemas o con mucha contaminación por moho cuestan más. Usted recibe el número antes de agendar, no cuando ya estamos adentro.' },
 { question: 'Por qué otras compañías anuncian limpieza de ductos en $99?', answer: 'Porque es un precio para conseguir la cita, no para hacer el trabajo. La extracción en la fuente lleva horas de mano de obra y equipo real, así que un especial de $49 a $99 es o veinte minutos de aspirado en las rejillas, o la manera de meter a un vendedor a su casa para que el total suba varios cientos de dólares. Nuestra guía en /es/blog/estafas-limpieza-ductos/ enumera los cargos adicionales típicos y las preguntas que terminan esa conversación temprano.' },
 { question: 'Qué es la extracción en la fuente y cómo sé que me la hicieron?', answer: 'Extracción en la fuente significa que todo el sistema se mantiene en presión negativa mientras cada tramo recibe agitación mecánica, de modo que los residuos salen del edificio en vez de cambiarse de lugar adentro. Señales de que sí se la hicieron: una manguera gruesa conectada al ducto en el plenum o la troncal, todas las rejillas selladas mientras se trabaja una, un cepillo o látigo recorriendo el ramal completo, y el compartimiento del soplador abierto. Señales de que no: una aspiradora doméstica en cada rejilla y una cuadrilla que termina en treinta minutos.' },
 { question: 'Limpian el soplador y el serpentín o solo los ductos?', answer: 'La rueda del soplador, su carcasa y la cara accesible del serpentín evaporador son parte de la visita. En Florida suelen ser los componentes más sucios del sistema y casi siempre son el origen del olor a humedad, porque el serpentín condensa agua cada vez que el aire acondicionado trabaja.' },
 { question: 'La limpieza de ductos de aire acondicionado es lo mismo?', answer: 'Sí. Limpieza de ductos de aire acondicionado, limpieza de ventilas de AC, limpieza de conductos y limpieza de ductos describen el mismo servicio. En Florida casi ninguna casa tiene calefacción de gas, así que la gente nombra los ductos por el aire acondicionado. La limpieza de la ventila del secador es el término que sí significa otra cosa: otro ducto, otro equipo y otro precio.' },
 { question: 'Me va a bajar la factura de electricidad?', answer: 'Puede ayudar cuando la rueda del soplador o la cara del serpentín estaban restringidas, porque la manejadora vuelve a mover más aire por minuto de operación. No es por sí sola una mejora de eficiencia. Si el problema real es la factura, las fugas en los ductos, el aislamiento del ático y el estado del equipo suelen valer más que una limpieza.' },
 { question: 'Va a quitar el olor a humedad cuando arranca el aire?', answer: 'Normalmente sí, cuando el olor viene del polvo mojado del serpentín y de la carcasa del soplador, que es donde empieza casi todo el olor del aire acondicionado en Florida. No arregla un olor causado por agua estancada en la bandeja, una línea de condensado tapada o moho en los materiales de construcción alrededor del equipo. Buscamos esas causas durante la inspección y le decimos cuál tiene.' },
 { question: 'El cepillado puede dañar el ducto flexible?', answer: 'Puede, con la herramienta equivocada. El ducto flexible es un forro delgado sobre un alambre en espiral y un cepillo rígido lo rompe. Usamos látigos de aire y agitación más suave en el flexible, dejamos los cepillos rotativos para lámina y duct board, y si el forro ya viene deshaciéndose paramos y se lo mostramos en vez de terminar el tramo y devolverle un ducto roto.' },
 { question: 'Usan químicos o nebulización antimicrobiana?', answer: 'Solo cuando hay motivo, por ejemplo crecimiento visible en el serpentín o en el plenum, y solo después de que el sistema está limpio. Un antimicrobiano rociado dentro de un ducto sucio es puro maquillaje. El producto está registrado por la EPA y, si usted prefiere omitirlo, dígalo al agendar y limpiamos sin aplicarlo.' },
 { question: 'Acabamos de construir o remodelar. Conviene limpiar ahora?', answer: 'Sí, y es uno de los casos más claros para este servicio. El polvo de lijar drywall y el aserrín entran por los retornos abiertos durante la obra y se quedan años en la troncal. Espere a que termine la última lijada, porque si no el sistema se vuelve a cargar con la siguiente etapa del trabajo.' },
 { question: 'Alguien necesita limpiar los ductos cada año?', answer: 'Casi nadie. La limpieza anual de ductos es un calendario de publicidad, no técnico. Lo que sí necesita atención cada año o más seguido es el filtro, el drenaje de condensado y el serpentín en una casa con mascotas. El interior de los ductos de una casa normal no se vuelve a cargar tan rápido.' },
 { question: 'Atienden mi zona o tengo que llevarles algo?', answer: 'El equipo viaja hasta su casa y usted no tiene que llevar nada a ningún lado. Trabajamos en los condados de Miami-Dade, Broward y Palm Beach, en Orlando y el centro de Florida, en el área de Tampa Bay, en el suroeste desde Fort Myers hasta Naples, y en Jacksonville. La lista de ciudades más abajo en esta página muestra dónde estamos agendando, y si su ciudad no aparece, llámenos y pregunte.' },
 ],
 },
 'dryer-vent-cleaning': {
 name: 'Limpieza de Ductos de Secadora',
 shortName: 'Limpieza de Ductos de Secadora',
 metaTitle: 'Limpieza de Ventila de Secadora en Florida | Desde $100',
 metaDescription:
 'Limpieza de la ventila de la secadora en Florida desde $100. La pelusa acumulada es la causa número uno de incendios de secadora. Precio por adelantado.',
 answer:
 'La limpieza del ducto de secadora retira la pelusa inflamable y los residuos del conducto de escape que va desde su secadora de ropa hasta el exterior de la casa. Es la forma más eficaz de prevenir incendios de secadora y debe hacerse al menos una vez al año.',
 intro: [
 'La Administración de Bomberos de Estados Unidos reporta unos 2,900 incendios al año por secadoras en edificios residenciales, y señala la falta de limpieza como el factor principal, en el 34 por ciento de los casos. La pelusa es muy inflamable y, cuando restringe el flujo de aire, la secadora se recalienta. Es un riesgo que la mayoría nunca ve porque la acumulación queda oculta dentro de la pared o del tramo del techo.',
 'Las casas de Florida a menudo tienen tramos de ducto largos y con muchas curvas hacia el techo, que atrapan la pelusa más rápido. Si su ropa tarda dos ciclos en secarse, si la parte superior de la secadora está caliente al tacto o si el cuarto de lavado se siente húmedo, es probable que el ducto esté restringido.',
 'Desconectamos la secadora, pasamos un cepillo giratorio y aire a alta presión por todo el tramo hasta la salida al exterior, limpiamos la campana de ventilación exterior y confirmamos un buen flujo de aire antes de terminar.',
 ],
 benefits: [
 { title: 'Previene incendios de secadora', text: 'Retirar la pelusa elimina la principal causa de incendios domésticos relacionados con secadoras.' },
 { title: 'Secado más rápido', text: 'Un flujo de aire despejado hace que la ropa se seque en un solo ciclo en vez de dos, lo que ahorra tiempo y energía.' },
 { title: 'Facturas más bajas y secadora más duradera', text: 'La secadora trabaja más fresca y por menos tiempo, lo que reduce el desgaste y el consumo de electricidad o gas.' },
 { title: 'Menos humedad y moho', text: 'Una ventilación correcta empuja el aire húmedo hacia afuera en lugar de dejarlo en el cuarto de lavado.' },
 ],
 process: [
 { title: 'Prueba de flujo de aire', text: 'Medimos el flujo de escape en la campana de ventilación para cuantificar la restricción.' },
 { title: 'Cepillado y barrido con aire', text: 'Un cepillo giratorio y aire comprimido despejan la pelusa a lo largo de todo el tramo hasta el exterior.' },
 { title: 'Limpieza de la salida exterior', text: 'Limpiamos la campana exterior y confirmamos que la compuerta abra con libertad.' },
 { title: 'Verificación', text: 'Una segunda prueba de flujo de aire confirma que el ducto quedó totalmente despejado.' },
 ],
 quickFacts: [
 { label: 'Precio típico', value: '$100 a $200' },
 { label: 'Frecuencia recomendada', value: 'Al menos una vez al año' },
 { label: 'Tiempo en sitio', value: '45 a 90 minutos' },
 { label: 'Principal señal de alerta', value: 'La ropa tarda 2 ciclos en secarse' },
 ],
 faq: [
 { question: 'Con qué frecuencia se debe limpiar el ducto de la secadora?', answer: 'Al menos una vez al año, y con más frecuencia en hogares numerosos, con mascotas o con tramos de ducto largos, comunes en Florida.' },
 { question: 'Cuáles son las señales de un ducto de secadora tapado?', answer: 'Tiempos de secado más largos, una secadora o un cuarto de lavado calientes, olor a quemado y una compuerta de ventilación que ya no abre por completo.' },
 { question: 'Un ducto de secadora tapado realmente puede causar un incendio?', answer: 'Sí. La pelusa es muy inflamable y un flujo de aire restringido hace que la secadora se recaliente. Los ductos tapados causan miles de incendios domésticos cada año.' },
 { question: 'Cuánto cuesta la limpieza del ducto de secadora en Florida?', answer: 'La mayoría de las casas paga entre $100 y $200, según la longitud y la complejidad del tramo del ducto.' },
 ],
 },
 'dryer-vent-installation': {
 name: 'Instalación de Ducto de Secadora',
 shortName: 'Instalación de Ducto de Secadora',
 metaTitle: 'Instalación de Ducto de Secadora en Florida',
 metaDescription:
 'Instalación de ventila de secadora en Florida con ducto rígido de pared lisa, la salida más corta posible y sellado correcto. Precio antes de agendar.',
 answer:
 'La instalación del ducto de secadora es el diseño y montaje profesional del conducto de escape que lleva el aire caliente y húmedo desde su secadora hasta el exterior de la casa. Una instalación correcta usa ducto de metal rígido en la ruta más corta posible, con una salida exterior adecuada. Mantiene el secado rápido, previene incendios por pelusa y en Florida suele costar entre $200 y $600 según la ruta.',
 intro: [
 'Una secadora es tan segura como el ducto que tiene detrás. Manguera plástica flexible, tramos largos hacia el techo con demasiados codos y salidas cubiertas con malla son de los problemas más comunes que encontramos en los cuartos de lavado de Florida, y cada uno de ellos alarga el secado y aumenta el riesgo de incendio.',
 'Instalamos y reubicamos ductos de secadora conforme al código mecánico vigente: ducto de metal rígido o semirrígido, uniones selladas con cinta de aluminio en lugar de tornillos que atrapan pelusa, un tramo total dentro de la longitud equivalente permitida y una salida exterior con campana y compuerta funcional que bloquea la lluvia y las plagas.',
 'El servicio cubre instalaciones nuevas para cuartos de lavado y remodelaciones, reemplazo de ductos inseguros de plástico o aluminio flexible, reubicación de tramos largos o aplastados y reparación de ductos desconectados ocultos en paredes, áticos y garajes. Cada trabajo termina con una prueba de flujo de aire para que usted vea el resultado.',
 ],
 benefits: [
 { title: 'Menor riesgo de incendio', text: 'Un ducto de metal rígido y liso en una ruta corta no le deja lugar a la pelusa para acumularse, y así se elimina la causa principal de incendios de secadora.' },
 { title: 'Secado en un solo ciclo', text: 'Un tramo bien dimensionado y sellado recupera todo el flujo de aire, la ropa se seca en un ciclo y la secadora deja de recalentarse.' },
 { title: 'Trabajo conforme al código', text: 'Los materiales, la longitud y la salida cumplen el código mecánico vigente, algo que importa para el seguro y para la venta de la casa.' },
 { title: 'Sin daños por humedad', text: 'Un tramo sellado que termina en el exterior mantiene el aire caliente y húmedo fuera de sus paredes y su ático, donde alimenta el moho.' },
 ],
 process: [
 { title: 'Planeación de la ruta', text: 'Medimos el espacio y elegimos la ruta más corta posible hacia una pared exterior o, cuando hace falta, hacia el techo.' },
 { title: 'Instalación del ducto', text: 'El ducto de metal rígido se corta, se ajusta y se sella con cinta de aluminio, con la menor cantidad de codos posible.' },
 { title: 'Salida exterior', text: 'Instalamos una campana de ventilación con compuerta de giro libre y sellamos la penetración contra el clima.' },
 { title: 'Verificación del flujo', text: 'Una prueba final de flujo de aire confirma que el tramo nuevo mueve el aire como lo especifica el fabricante de la secadora.' },
 ],
 quickFacts: [
 { label: 'Precio típico', value: '$200 a $600' },
 { label: 'Longitud equivalente máxima', value: 'Unos 35 pies, menos 5 por codo' },
 { label: 'Tiempo en sitio', value: '1 a 3 horas' },
 { label: 'Material recomendado', value: 'Ducto de metal rígido' },
 ],
 faq: [
 { question: 'Cuánto cuesta instalar un ducto de secadora en Florida?', answer: 'La mayoría de las instalaciones cuesta entre $200 y $600. Una salida corta por la pared queda en el extremo bajo, mientras que reubicar un tramo largo hacia el techo o abrir paredes para reemplazar ducto oculto cuesta más. Le damos el precio completo por adelantado.' },
 { question: 'Puede un ducto de secadora salir por el techo?', answer: 'Sí. Las salidas por el techo son comunes en casas de Florida donde no hay una pared exterior cerca del cuarto de lavado. Funcionan, pero el tramo más largo atrapa pelusa más rápido, así que conviene limpiarlo al menos una vez al año.' },
 { question: 'Quién instala ductos de secadora?', answer: 'Especialistas en ductos de aire y de secadora como nuestro equipo se encargan de la instalación, la reubicación y la reparación. El trabajo involucra código mecánico, seguridad contra incendios y penetraciones en techo o pared, así que no es un trabajo típico de mantenimiento general.' },
 { question: 'Qué tipo de ducto exige el código para la secadora?', answer: 'Ducto de metal rígido o semirrígido. La manguera flexible de plástico o de aluminio tipo acordeón no cumple el código en tramos ocultos porque atrapa pelusa, se cuelga y puede encenderse.' },
 { question: 'Cómo sé si mi ducto actual necesita reemplazo?', answer: 'Manguera de plástico o de aluminio en cualquier parte del tramo, ropa que necesita dos ciclos, un cuarto de lavado caliente o un ducto visiblemente aplastado detrás de la secadora son señales de que el tramo debe reemplazarse o reubicarse.' },
 ],
 },
 'hvac-cleaning': {
 name: 'Limpieza del Aire Acondicionado (Sistema HVAC)',
 shortName: 'Limpieza de AC',
 metaTitle: 'Limpieza de Serpentina y Manejadora en Florida',
 metaDescription:
 'Limpieza de serpentina y manejadora en Florida. La humedad del estado ensucia la serpentina y le quita eficiencia al equipo. Precio por adelantado.',
 answer:
 'La limpieza del aire acondicionado y del sistema HVAC es la limpieza profunda de las piezas que mueven y enfrían su aire (el serpentín evaporador, la turbina del ventilador, la manejadora y el drenaje de condensado), no solo los ductos. En el clima húmedo de Florida previene el moho, recupera el flujo de aire y mantiene su aire acondicionado funcionando con eficiencia.',
 intro: [
 'Los ductos son solo una parte del sistema. El serpentín evaporador y la turbina del ventilador están dentro de la manejadora de aire, un lugar oscuro y siempre húmedo, el ambiente perfecto para el moho negro y la biopelícula que tantas veces huelen los dueños de casa en Florida cuando enciende el aire acondicionado.',
 'Un serpentín sucio se aísla con la suciedad y no puede transferir el calor de forma eficiente, lo que obliga a ciclos más largos y facturas más altas. Una turbina de ventilador incrustada mueve muchísimo menos aire, lo que crea rejillas débiles y habitaciones calientes.',
 'Limpiamos el serpentín con un limpiador seguro para serpentines, retiramos y detallamos la turbina del ventilador, lavamos y tratamos la línea de drenaje de condensado para evitar los cortes por desbordamiento, y desinfectamos el gabinete de la manejadora de aire.',
 ],
 benefits: [
 { title: 'Flujo de aire recuperado', text: 'Un ventilador y un serpentín limpios empujan mucho más aire por cada rejilla.' },
 { title: 'Menor costo de energía', text: 'Un serpentín limpio transfiere el calor con eficiencia y reduce los ciclos de funcionamiento en el calor de Florida.' },
 { title: 'Control de moho y olores', text: 'Limpiar el serpentín húmedo y el gabinete elimina la fuente de los olores a humedad del aire acondicionado.' },
 { title: 'Menos averías', text: 'Una línea de drenaje despejada previene los reboses de agua que activan los interruptores de seguridad.' },
 ],
 process: [
 { title: 'Inspección del sistema', text: 'Evaluamos el estado del serpentín, el ventilador, la línea de drenaje y el gabinete.' },
 { title: 'Limpieza del serpentín', text: 'Un limpiador espumoso seguro para serpentines disuelve la suciedad para lograr una transferencia de calor completa.' },
 { title: 'Ventilador y gabinete', text: 'Detallamos la turbina del ventilador y desinfectamos el gabinete.' },
 { title: 'Tratamiento del drenaje', text: 'Lavamos y tratamos la línea de condensado para prevenir obstrucciones.' },
 ],
 quickFacts: [
 { label: 'Precio típico', value: '$200 a $450' },
 { label: 'Frecuencia recomendada', value: 'Anualmente en Florida' },
 { label: 'Tiempo en sitio', value: '1.5 a 3 horas' },
 { label: 'Beneficio clave', value: 'Previene moho en serpentín y reboses' },
 ],
 faq: [
 { question: 'Es diferente la limpieza de HVAC de la limpieza de conductos?', answer: 'Sí. La limpieza de conductos trata los ductos; la limpieza de HVAC trata el serpentín, el ventilador, la manejadora de aire y la línea de drenaje, que es donde suelen originarse el moho y las pérdidas de eficiencia.' },
 { question: 'Por qué mi aire acondicionado huele a humedad en Florida?', answer: 'El moho y la biopelícula crecen en el serpentín evaporador húmedo y dentro de la manejadora de aire. Limpiar y desinfectar estos componentes elimina el olor desde su origen.' },
 { question: 'Con qué frecuencia se deben limpiar los componentes del HVAC?', answer: 'En Florida se recomienda hacerlo cada año, porque la humedad de todo el año y el uso intenso del aire acondicionado aceleran el moho en el serpentín y las obstrucciones del drenaje.' },
 ],
 },
 'air-duct-repair': {
 name: 'Reparación y Reemplazo de Conductos de Aire',
 shortName: 'Reparación de Ductos',
 metaTitle: 'Reparación de Ductos en Florida | Sellado y Fugas',
 metaDescription:
 'Reparación y sellado de ductos en Florida: ductos desprendidos, rasgados o con fugas en el ático. Le damos el precio antes de empezar el trabajo.',
 answer:
 'La reparación y el reemplazo de conductos de aire corrigen fugas, uniones desconectadas, tramos aplastados y aislamiento dañado en sus ductos. Sellar los ductos con fugas es una de las mejoras del hogar con mayor retorno, porque las fugas en los áticos calientes de Florida desperdician aire frío antes de que llegue a una habitación.',
 intro: [
 'La casa promedio pierde entre el 20 y el 30 por ciento del aire que se mueve por sus ductos a causa de fugas, espacios abiertos y malas conexiones. En Florida, la mayoría de los ductos pasan por áticos que llegan a los 130 grados Fahrenheit, así que cada fuga o bien descarga aire frío costoso al ático o bien jala aire caliente y húmedo del ático hacia su sistema.',
 'Con los años, el ducto flexible se descuelga, se rasga y su aislamiento se degrada, mientras que los roedores y los asentamientos pueden aplastar o desconectar tramos por completo. El resultado es un enfriamiento disparejo, facturas altas y habitaciones que nunca terminan de sentirse cómodas.',
 'Hacemos una prueba de presión al sistema para localizar las fugas, luego sellamos las uniones con mastique y cinta metálica, volvemos a sujetar los tramos descolgados, reemplazamos las secciones dañadas y actualizamos el aislamiento al código vigente.',
 ],
 benefits: [
 { title: 'Detenga el desperdicio de energía', text: 'Sellar las fugas mantiene el aire frío dentro de los ductos en lugar del ático, lo que reduce las facturas.' },
 { title: 'Confort parejo', text: 'Los tramos reparados entregan flujo de aire completo a habitaciones que antes estaban calientes o débiles.' },
 { title: 'Mejor calidad del aire', text: 'Unos ductos sellados dejan de jalar aire polvoriento y húmedo del ático.' },
 { title: 'Menos humedad', text: 'Un sistema bien sellado deshumidifica con más eficacia durante los veranos de Florida.' },
 ],
 process: [
 { title: 'Prueba de presión', text: 'Medimos la fuga de los ductos y trazamos las zonas con problemas.' },
 { title: 'Sellado y reconexión', text: 'Sellamos las uniones con mastique y volvemos a conectar los tramos desconectados.' },
 { title: 'Reparar o reemplazar', text: 'Las secciones dañadas o colapsadas se reemplazan con ducto aislado nuevo.' },
 { title: 'Aislar y verificar', text: 'Se mejora el aislamiento y una nueva prueba confirma la reparación.' },
 ],
 quickFacts: [
 { label: 'Precio típico', value: '$250 a $2,000 o más (según alcance)' },
 { label: 'Problema común', value: '20 a 30% de aire perdido por fugas' },
 { label: 'Ideal para', value: 'Habitaciones calientes, facturas altas, ducto flexible viejo' },
 { label: 'Temperatura del ático', value: 'Hasta 130 grados F en verano en FL' },
 ],
 faq: [
 { question: 'Cómo sé si mis conductos de aire tienen fugas?', answer: 'Las señales incluyen facturas de energía altas, habitaciones que nunca enfrían de manera pareja, polvo excesivo y flujo de aire débil. Una prueba de presión de ductos confirma y localiza las fugas.' },
 { question: 'Vale la pena sellar los ductos en Florida?', answer: 'Sí. Como los ductos pasan por áticos muy calientes, sellar las fugas es una de las mejoras de eficiencia de mayor retorno disponibles, y a menudo se paga sola con el ahorro de energía.' },
 { question: 'Debo reparar o reemplazar mis ductos?', answer: 'Las fugas y desconexiones puntuales se reparan; los sistemas muy deteriorados, con moho o de tamaño insuficiente por lo general resultan más rentables de reemplazar.' },
 ],
 },
 'mold-remediation': {
 name: 'Eliminación de Moho en Ductos de Aire',
 shortName: 'Eliminación de Moho',
 metaTitle: 'Eliminación de Moho en Ductos en Florida',
 metaDescription:
 'Eliminación de moho en ductos y manejadora en Florida, con contención y extracción por fuente. Precio por adelantado, sin cargos inventados en sitio.',
 answer:
 'La remediación de moho en conductos de aire es la identificación, eliminación y prevención del crecimiento de moho dentro de los ductos y los componentes del HVAC. La humedad de todo el año en Florida hace que el moho en ductos y serpentines sea especialmente común, y debe atenderse pronto porque las esporas circulan hacia el aire que usted respira.',
 intro: [
 'Florida encabeza el país en problemas de moho interior por una sola razón: la humedad. Cuando el aire cálido y húmedo se encuentra con las superficies frías dentro de sus ductos y de la manejadora de aire, se forma condensación, y al moho solo le hace falta humedad y polvo para colonizar.',
 'El moho en los ductos suele manifestarse como un olor persistente a humedad que se intensifica cuando funciona el aire acondicionado, como puntos negros visibles alrededor de las rejillas, o como síntomas de alergia y respiratorios sin explicación que mejoran cuando usted sale de casa.',
 'Inspeccionamos y, cuando hace falta, hacemos pruebas para confirmar el moho, contenemos la zona afectada, retiramos de forma física el crecimiento y los materiales contaminados, aplicamos tratamiento antimicrobiano registrado por la EPA y, lo más importante, corregimos la fuente de humedad para que no regrese.',
 ],
 benefits: [
 { title: 'Aire más saludable', text: 'Eliminar el moho detiene la circulación de esporas que provocan síntomas.' },
 { title: 'Elimina el olor a humedad', text: 'La eliminación en la fuente acaba con el olor que los aromatizantes solo encubren.' },
 { title: 'Protege su hogar', text: 'Evita que el moho se propague a paneles de yeso, aislamiento y mobiliario.' },
 { title: 'Corrección de la humedad', text: 'Solucionamos el problema de humedad de fondo para que el moho no vuelva a crecer.' },
 ],
 process: [
 { title: 'Inspeccionar y probar', text: 'Localizamos el moho y, si hace falta, tomamos muestras para confirmar el tipo y el alcance.' },
 { title: 'Contener', text: 'Aislamos el área de trabajo para prevenir la contaminación cruzada.' },
 { title: 'Eliminar y tratar', text: 'Retiramos el crecimiento y tratamos las superficies con antimicrobiano registrado por la EPA.' },
 { title: 'Prevenir', text: 'Corregimos la fuente de humedad y recomendamos controles de humedad.' },
 ],
 quickFacts: [
 { label: 'Precio típico', value: '$500 a $3,000 o más (según gravedad)' },
 { label: 'Causa de fondo', value: 'Humedad más condensación' },
 { label: 'Señal de alerta', value: 'Olor a humedad al funcionar el AC' },
 { label: 'Tratamiento', value: 'Antimicrobianos registrados por la EPA' },
 ],
 faq: [
 { question: 'Cómo sé si hay moho en mis conductos de aire?', answer: 'Las señales comunes son un olor a humedad que se intensifica cuando funciona el aire acondicionado, puntos negros o verdes visibles alrededor de las rejillas y síntomas de alergia que ceden al salir de casa. Una prueba lo confirma.' },
 { question: 'Por qué es tan común el moho en los ductos en Florida?', answer: 'La humedad de todo el año provoca condensación dentro de los ductos frescos y de las manejadoras de aire, y al moho solo le hace falta esa humedad más polvo para crecer.' },
 { question: 'Se puede eliminar el moho de los ductos de forma permanente?', answer: 'El moho se puede eliminar y prevenir su regreso, pero solo si se corrige la fuente de humedad de fondo, y por eso nuestro proceso incluye el control de humedad.' },
 ],
 },
 'air-duct-sanitizing': {
 name: 'Desinfección y Desodorización de Conductos de Aire',
 shortName: 'Desinfección',
 metaTitle: 'Sanitización de Ductos de Aire en Florida',
 metaDescription:
 'Sanitización de ductos en Florida después de la limpieza, con producto aprobado y aplicación según especificación. Precio antes de agendar.',
 answer:
 'La desinfección de conductos de aire aplica una niebla antimicrobiana registrada por la EPA en todos los ductos ya limpios para eliminar bacterias, esporas de moho y microbios que causan olores. Se hace después de la limpieza mecánica para tratar lo que el cepillado por sí solo no alcanza y dejar el sistema fresco.',
 intro: [
 'La limpieza retira el polvo y los residuos; la desinfección trata la capa microscópica de bacterias, esporas de moho y fuentes de olor que se adhieren a las superficies de los ductos. En el clima húmedo de Florida, esa capa biológica es la que provoca los olores persistentes incluso después de una limpieza a fondo.',
 'Usamos productos antimicrobianos registrados por la EPA para uso en HVAC y seguros para hogares habitados, aplicados como una niebla fina que recubre toda la superficie interior del sistema de ductos.',
 'El resultado es un sistema que no solo se ve limpio, sino que huele fresco. Es un paso final muy solicitado por dueños de casa con mascotas, fumadores, personas alérgicas o con un problema previo de moho u olor.',
 ],
 benefits: [
 { title: 'Elimina moho y bacterias', text: 'Trata los microbios que la limpieza mecánica no puede retirar por completo.' },
 { title: 'Quita los olores', text: 'Neutraliza los olores de mascotas, humo y humedad desde su origen en lugar de encubrirlos.' },
 { title: 'Productos seguros para la familia', text: 'Antimicrobianos registrados por la EPA y aptos para espacios habitados.' },
 { title: 'Resultado fresco y duradero', text: 'Deja todo el sistema notablemente más fresco después de la limpieza.' },
 ],
 process: [
 { title: 'Limpiar primero', text: 'La desinfección va después de una limpieza completa de ductos por extracción en la fuente para lograr mejores resultados.' },
 { title: 'Aplicar niebla antimicrobiana', text: 'Una niebla fina recubre de manera uniforme cada superficie interior del ducto.' },
 { title: 'Reposo y circulación', text: 'Se da tiempo al tratamiento para que actúe y luego se pone en marcha el sistema para hacer circular aire fresco.' },
 ],
 quickFacts: [
 { label: 'Precio típico', value: '$75 a $200 como complemento' },
 { label: 'Mejor combinación', value: 'Limpieza de conductos de aire' },
 { label: 'Producto', value: 'Antimicrobiano registrado por la EPA' },
 { label: 'Ideal para', value: 'Mascotas, alergias, olores, moho previo' },
 ],
 faq: [
 { question: 'Es segura la desinfección de ductos para mi familia y mis mascotas?', answer: 'Sí. Usamos productos antimicrobianos registrados por la EPA y aptos para uso en sistemas HVAC habitados, y seguimos las pautas de seguridad del fabricante.' },
 { question: 'Necesito la desinfección si ya limpiaron mis ductos?', answer: 'La limpieza retira los residuos; la desinfección elimina el moho y las bacterias que causan olores. Es opcional, pero se recomienda en hogares con mascotas, alergias o un problema previo de olor o moho.' },
 { question: 'La desinfección eliminará los olores de mascotas o de humo?', answer: 'Neutraliza en la fuente los microbios que causan los olores en las superficies de los ductos, lo cual es mucho más eficaz que los desodorizantes que solo encubren los olores.' },
 ],
 },
 'commercial-air-duct-cleaning': {
 name: 'Limpieza Comercial de Conductos de Aire',
 shortName: 'Comercial',
 metaTitle: 'Limpieza Comercial de Ductos en Florida',
 metaDescription:
 'Limpieza de ductos comercial en Florida: oficinas, restaurantes, condominios y edificios. Cotización por escrito antes de programar el trabajo.',
 answer:
 'La limpieza comercial de conductos de aire atiende sistemas HVAC más grandes y complejos en oficinas, restaurantes, comercios, centros médicos y propiedades de varias unidades. Mejora la salud de los ocupantes, cumple con las expectativas de calidad del aire interior y se programa fuera del horario de operación para no interrumpir el funcionamiento.',
 intro: [
 'Los sistemas comerciales mueven mucho más aire que una casa y sirven a muchas más personas, así que unos ductos contaminados afectan la salud de los empleados, la comodidad de los clientes y, en el servicio de alimentos y la atención médica, el cumplimiento normativo.',
 'Las unidades de techo, las líneas troncales largas, las cajas VAV y la operación continua hacen que la limpieza comercial requiera equipo especializado, cuadrillas capacitadas y una programación cuidadosa. Trabajamos noches y fines de semana para mantener su negocio en marcha.',
 'Cada trabajo incluye documentación (fotos de antes y después y un informe de alcance) que respalda los registros de administración de propiedades, las solicitudes de los inquilinos y la preparación para inspecciones de salud.',
 ],
 benefits: [
 { title: 'Lugar de trabajo más saludable', text: 'Un aire más limpio reduce las ausencias por enfermedad y las quejas en oficinas y espacios compartidos.' },
 { title: 'Listo para cumplir normas', text: 'La documentación respalda las expectativas de calidad del aire interior en sitios médicos y de servicio de alimentos.' },
 { title: 'Cero tiempo inactivo', text: 'La programación fuera de horario y en fines de semana mantiene su operación en marcha.' },
 { title: 'Eficiencia a gran escala', text: 'Unos sistemas comerciales limpios reducen costos de energía importantes en grandes superficies.' },
 ],
 process: [
 { title: 'Inspección del sitio', text: 'Evaluamos el sistema, el acceso y las necesidades de programación, y entregamos una cotización con alcance definido.' },
 { title: 'Limpieza fuera de horario', text: 'Las cuadrillas trabajan noches y fines de semana con equipo comercial de aire negativo.' },
 { title: 'Documentación', text: 'Entregamos fotos de antes y después y un informe escrito del alcance.' },
 ],
 quickFacts: [
 { label: 'Precios', value: 'Cotización a medida por metraje' },
 { label: 'Programación', value: 'Noches y fines de semana disponibles' },
 { label: 'Sectores', value: 'Oficina, comercio, médico, alimentos' },
 { label: 'Incluye', value: 'Documentación completa de fotos y alcance' },
 ],
 faq: [
 { question: 'Limpian los sistemas comerciales fuera del horario de atención?', answer: 'Sí. Programamos noches y fines de semana para que la limpieza nunca interrumpa su operación, su personal ni sus clientes.' },
 { question: 'Cuánto cuesta la limpieza comercial de ductos?', answer: 'El precio comercial se cotiza a medida según el metraje, el tipo de sistema y el acceso. Entregamos un alcance escrito y un presupuesto después de una inspección del sitio.' },
 { question: 'Ofrecen documentación para el cumplimiento de normas?', answer: 'Sí. Cada trabajo comercial incluye fotos de antes y después y un informe escrito de alcance apto para los registros de administración de propiedades y de inspecciones de salud.' },
 ],
 },
 'uv-light-installation': {
 name: 'Instalación de Luz UV',
 shortName: 'Purificación de Aire UV',
 metaTitle: 'Instalación de Luz UV para el Aire en Florida',
 metaDescription:
 'Instalación de luz UV germicida en la manejadora, desde $300 en Florida. Ataca el moho en la serpentina, que es donde empieza en este clima.',
 answer:
 'La instalación de luz UV para HVAC coloca una lámpara UV-C dentro de su manejadora de aire para eliminar de forma continua moho, bacterias y virus en el serpentín evaporador y en el aire en movimiento. En la húmeda Florida, la UV-C es una de las formas más eficaces de mantener el serpentín libre de moho entre limpiezas.',
 intro: [
 'El serpentín evaporador siempre está frío y húmedo, las condiciones exactas que el moho adora. Una lámpara UV-C apuntada al serpentín esteriliza su superficie las 24 horas y detiene la biopelícula que causa los olores a humedad del aire acondicionado y la reducción de la eficiencia.',
 'Como Florida usa el aire acondicionado casi todo el año, un sistema UV que esteriliza el serpentín trabaja muchas más horas aquí que en climas de estaciones marcadas, lo que lo hace especialmente rentable para los dueños de casa locales.',
 'Dimensionamos la lámpara para su sistema, la montamos para lograr la máxima cobertura del serpentín y le dejamos un recordatorio sencillo de reemplazo anual del bulbo para que siga trabajando a plena potencia.',
 ],
 benefits: [
 { title: 'Mantiene limpio el serpentín', text: 'La esterilización UV-C continua previene el moho que ensucia los serpentines y causa olores.' },
 { title: 'Aire más limpio las 24 horas', text: 'Reduce el moho, las bacterias y los virus en el aire en movimiento siempre que el sistema funciona.' },
 { title: 'Conserva la eficiencia', text: 'Un serpentín libre de moho transfiere el calor con eficiencia y protege el rendimiento.' },
 { title: 'Poco mantenimiento', text: 'Solo un cambio de bulbo al año, el sistema hace el resto.' },
 ],
 process: [
 { title: 'Dimensionamiento del sistema', text: 'Ajustamos la potencia y la ubicación de la lámpara a su manejadora de aire.' },
 { title: 'Instalación', text: 'Montamos la lámpara UV-C para lograr la máxima cobertura del serpentín y del aire en movimiento.' },
 { title: 'Configuración y orientación', text: 'Verificamos el funcionamiento y dejamos un recordatorio de reemplazo anual del bulbo.' },
 ],
 quickFacts: [
 { label: 'Precio típico', value: '$300 a $700 instalada' },
 { label: 'Mantenimiento', value: 'Reemplazo anual del bulbo' },
 { label: 'Ideal para', value: 'Casas húmedas de FL, moho en serpentín, alergias' },
 { label: 'Objetivos', value: 'Moho del serpentín, bacterias, virus' },
 ],
 faq: [
 { question: 'Realmente funcionan las luces UV en los sistemas HVAC?', answer: 'Sí. Está comprobado que las lámparas UV-C montadas en el serpentín esterilizan la superficie del serpentín y reducen el moho y los microbios, algo especialmente valioso en el clima húmedo de Florida.' },
 { question: 'Con qué frecuencia hay que reemplazar los bulbos UV?', answer: 'Alrededor de una vez al año. La lámpara sigue encendida después de ese tiempo, pero pierde potencia germicida, así que el reemplazo anual la mantiene eficaz.' },
 { question: 'Es segura la luz UV para HVAC?', answer: 'Sí. La lámpara va encerrada dentro de la manejadora de aire y nunca expone a los ocupantes a la luz UV durante el funcionamiento normal.' },
 ],
 },
 'indoor-air-quality-testing': {
 name: 'Pruebas de Calidad del Aire Interior',
 shortName: 'Pruebas de Calidad del Aire',
 metaTitle: 'Prueba de Calidad del Aire Interior en Florida',
 metaDescription:
 'Prueba de calidad del aire interior en Florida: muestreo de partículas y moho con resultados que se explican. Precio antes de agendar la visita.',
 answer:
 'Las pruebas de calidad del aire interior miden las esporas de moho, los alérgenos, la humedad y las partículas finas en el aire y los ductos de su casa para que pueda identificar problemas y verificar soluciones. Es la forma objetiva de saber si su aire es saludable y si una limpieza dio resultado.',
 intro: [
 'El calor y la humedad de Florida la convierten en uno de los estados más difíciles para mantener un aire interior saludable. Las pruebas eliminan las conjeturas: en lugar de preguntarse si ese olor a humedad es moho, obtiene respuestas medidas y verificadas en laboratorio.',
 'Tomamos muestras del aire y, cuando corresponde, de superficies dentro de los ductos y alrededor de la manejadora de aire, luego comparamos las lecturas interiores con una referencia exterior para revelar niveles elevados de moho, alérgenos o partículas.',
 'Las pruebas son valiosas antes de comprar una casa, después de una fuga o un susto de moho, cuando alguien del hogar tiene síntomas respiratorios sin explicación o para confirmar que una remediación realmente resolvió el problema.',
 ],
 benefits: [
 { title: 'Sepa qué respira', text: 'Datos objetivos y verificados en laboratorio sobre moho, alérgenos y partículas.' },
 { title: 'Verifique la remediación', text: 'Confirme que una limpieza o un trabajo de moho realmente resolvió el problema.' },
 { title: 'Proteja la salud', text: 'Identifique con precisión los disparadores detrás de los síntomas de alergia y respiratorios.' },
 { title: 'Tranquilidad', text: 'Especialmente valioso antes de comprar una casa o después de un daño por agua.' },
 ],
 process: [
 { title: 'Consulta', text: 'Conversamos sobre los síntomas y las inquietudes para elegir las pruebas adecuadas.' },
 { title: 'Toma de muestras', text: 'Recolectamos muestras de aire y, si hace falta, de superficies, con una referencia exterior.' },
 { title: 'Análisis de laboratorio', text: 'Las muestras se analizan en laboratorio en busca de moho, alérgenos y partículas.' },
 { title: 'Informe y plan', text: 'Usted recibe un informe claro y los siguientes pasos recomendados.' },
 ],
 quickFacts: [
 { label: 'Precio típico', value: '$200 a $500' },
 { label: 'Resultados', value: 'Informe verificado en laboratorio' },
 { label: 'Ideal para', value: 'Compra de casa, tras una fuga, síntomas' },
 { label: 'Mide', value: 'Moho, alérgenos, humedad, partículas' },
 ],
 faq: [
 { question: 'Cuándo debo hacer una prueba de calidad del aire interior?', answer: 'Antes de comprar una casa, después de un daño por agua o un susto de moho, cuando alguien tiene síntomas respiratorios sin explicación, o para verificar que la remediación dio resultado.' },
 { question: 'Pueden hacer una prueba específica de moho?', answer: 'Sí. Tomamos muestras de aire y de superficies y las comparamos con una referencia exterior para detectar y cuantificar niveles elevados de esporas de moho.' },
 { question: 'Cuánto tardan los resultados de la prueba de calidad del aire?', answer: 'Las muestras analizadas en laboratorio suelen regresar en unos pocos días hábiles, seguidas de un informe claro y recomendaciones.' },
 ],
 },
 'attic-insulation': {
 name: 'Servicios de Aislamiento de Ático',
 shortName: 'Aislamiento de Ático',
 metaTitle: 'Retiro e Instalación de Aislamiento de Ático en Florida',
 metaDescription:
 'Aislamiento de ático en Florida, soplado a la profundidad correcta. Es lo que más baja la factura del aire acondicionado. Precio por adelantado.',
 answer:
 'Los servicios de aislamiento de ático incluyen retirar el aislamiento viejo, contaminado o insuficiente e instalar aislamiento nuevo con el valor R adecuado. En Florida, los áticos bien aislados reducen mucho los costos de enfriamiento porque impiden que el calor de 130 grados del ático irradie hacia su espacio habitado.',
 intro: [
 'La temporada de enfriamiento de Florida casi nunca termina, y un ático mal aislado deja que el calor implacable entre a su casa y obligue al aire acondicionado a funcionar sin parar. Mejorar el aislamiento es una de las formas más confiables de reducir una factura de luz alta en Florida.',
 'El aislamiento también importa para la calidad del aire: el aislamiento contaminado por roedores, dañado por agua o con moho debe retirarse, no cubrirse, porque sus contaminantes pueden migrar hacia el aire y los ductos.',
 'Retiramos el aislamiento viejo o contaminado, sellamos el aire en el piso del ático e instalamos aislamiento nuevo con el valor R recomendado para el clima de Florida, y a menudo lo combinamos con el sellado de ductos para lograr la máxima ganancia de eficiencia.',
 ],
 benefits: [
 { title: 'Facturas de enfriamiento más bajas', text: 'Un aislamiento adecuado bloquea el calor del ático y reduce el tiempo de funcionamiento y el costo del aire acondicionado.' },
 { title: 'Temperaturas parejas', text: 'Las habitaciones se mantienen cómodas en lugar de luchar contra la ganancia de calor del ático.' },
 { title: 'Ático más saludable', text: 'Retirar el aislamiento contaminado elimina una fuente oculta que afecta la calidad del aire.' },
 { title: 'Se combina con el trabajo de ductos', text: 'Junto con el sellado de ductos logra la mayor mejora de eficiencia.' },
 ],
 process: [
 { title: 'Evaluación del ático', text: 'Medimos el valor R actual y revisamos si hay contaminación o daño.' },
 { title: 'Retiro', text: 'Retiramos de forma segura el aislamiento viejo, contaminado o mojado.' },
 { title: 'Sellado de aire', text: 'Sellamos los espacios y las penetraciones en el piso del ático.' },
 { title: 'Instalación', text: 'Instalamos aislamiento nuevo con el valor R recomendado para Florida.' },
 ],
 quickFacts: [
 { label: 'Precio típico', value: '$1,500 a $4,000 (según tamaño)' },
 { label: 'Calor del ático en FL', value: 'Hasta 130 grados F' },
 { label: 'Mejor combinación', value: 'Sellado de ductos' },
 { label: 'Retorno', value: 'Ahorro continuo en la factura de enfriamiento' },
 ],
 faq: [
 { question: 'Realmente reduce el aislamiento del ático las facturas de enfriamiento en Florida?', answer: 'Sí. Un ático bien aislado bloquea el intenso calor del ático para que no irradie hacia su casa, lo que reduce cuánto y por cuánto tiempo debe funcionar el aire acondicionado.' },
 { question: 'Cuándo se debe retirar el aislamiento viejo del ático?', answer: 'Cuando está dañado por agua, con moho, contaminado por roedores o comprimido e inservible. En esos casos se debe retirar en lugar de cubrirlo.' },
 { question: 'Qué valor R necesito en Florida?', answer: 'Los áticos de Florida suelen aislarse a alrededor de R-30 a R-38; evaluamos su nivel actual y recomendamos el objetivo adecuado para su casa.' },
 ],
 },
};
