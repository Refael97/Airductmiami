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
 'Limpieza de ductos en Florida desde $300, con equipo de presión negativa y estándar NADCA. Le damos el precio antes de agendar. Asegurados, norma NADCA.',
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
 'La Administración de Incendios de Estados Unidos contabiliza unos 2,900 incendios de secadora al año en viviendas y señala la falta de limpieza como el factor principal, en el 34% de ellos. Lo que ese dato no dice es que una instalación mal hecha acorta muchísimo el intervalo de limpieza, porque cada codo, cada descolgado y cada superficie interior rugosa es un lugar donde la pelusa deja de moverse y empieza a acumularse.',
 'La ruta es todo el trabajo. Una secadora puede empujar su escape unos 35 pies de longitud equivalente, y cada codo de 90 grados le resta alrededor de 5 pies a ese presupuesto. Un tramo con cuatro codos ya gastó 20 de sus 35 pies antes de contar un solo tramo recto. Por eso los recorridos largos por el ático en las casas anchas de Florida se vuelven a tapar al año de haberlos limpiado: la ruta nunca estuvo dentro del presupuesto, y limpiar trata el síntoma.',
 'La humedad empeora todo esto aquí. Una secadora funciona sacando la humedad de la ropa y pasándola al aire que expulsa, y un aire ambiente que ya está al 70% de humedad relativa le deja menos espacio para cargar agua. Una secadora en Florida trabaja más que la misma máquina en un clima seco con la misma carga de ropa, que es justo la condición en la que un ducto apenas suficiente deja de alcanzar.',
 'Una instalación correcta es poco vistosa y muy específica. Ducto de metal rígido o semirrígido en la parte oculta, porque la pared lisa es lo que mantiene la pelusa en movimiento. Uniones armadas con el extremo macho apuntando en el sentido del flujo, para que la pelusa pase la costura en vez de engancharse. Uniones selladas con cinta de aluminio y no con tornillos, porque la cabeza de un tornillo dentro del ducto es un punto de enganche que construye una presa de pelusa a su alrededor. Y la ruta más corta posible hacia una pared exterior, elegida antes de cortar nada.',
 'El tramo de transición detrás de la secadora es un tema aparte y es el que más veces está mal. Debe ser un ducto de transición certificado, a la vista y no oculto, corto, y nunca pasando por una pared o un cielorraso. Si la secadora tiene que quedar pegada a la pared, una caja empotrada para ventila de secadora permite que el ducto gire dentro del muro en lugar de quedar aplastado detrás de la máquina.',
 'La salida exterior importa más de lo que la gente cree. Una campana con compuerta de giro libre bloquea la lluvia, el agua que empuja el viento y las plagas, sin ofrecerle nada a la pelusa donde engancharse. Una malla hace lo contrario: es la razón más común de que una ventila recién limpiada rinda mal a las pocas semanas, y en Florida es además donde anidan pájaros y avispas. La compuerta tiene que abrir sola cuando la secadora corre y cerrar cuando se detiene.',
 'Nunca ventile una secadora hacia el ático, un entrepiso, el garaje o un alero. No es un atajo: es una fuente de humedad apuntada a la parte de una casa de Florida que peor la tolera, y la pelusa que cae ahí es combustible. En una secadora de gas hay una segunda razón: el escape lleva productos de combustión, y un tramo desconectado o que termina adentro los deja en la casa.',
 ],
 benefits: [
 { title: 'Menor riesgo de incendio', text: 'Un ducto de metal rígido y liso en una ruta corta no le deja lugar a la pelusa para acumularse, y así se elimina la causa principal de incendios de secadora.' },
 { title: 'Secado en un solo ciclo', text: 'Un tramo bien dimensionado y sellado recupera todo el flujo de aire, la ropa se seca en un ciclo y la secadora deja de recalentarse.' },
 { title: 'Trabajo conforme al código', text: 'Los materiales, la longitud y la salida cumplen el código mecánico vigente, algo que importa para el seguro y para la venta de la casa.' },
 { title: 'Sin daños por humedad', text: 'Un tramo sellado que termina en el exterior mantiene el aire caliente y húmedo fuera de sus paredes y su ático, donde alimenta el moho.' },
 { title: 'Dentro del presupuesto de longitud', text: 'La ruta se planea contra los 35 pies de longitud equivalente que una secadora realmente puede empujar, contando 5 pies por cada codo, antes de cortar nada.' },
 { title: 'Una salida que no atrapa pelusa', text: 'Campana con compuerta de giro libre en lugar de malla, que es lo que evita que el rendimiento se caiga a las pocas semanas de una limpieza.' },
 ],
 process: [
 { title: 'Planeación de la ruta', text: 'Medimos el espacio y calculamos la longitud equivalente de cada ruta posible, luego elegimos la más corta hacia una pared exterior o, cuando no hay otra opción, hacia el techo.' },
 { title: 'Retirar lo que no cumple', text: 'La manguera de plástico o aluminio en tramos ocultos, las cubiertas con malla y las secciones aplastadas se quitan en lugar de rodearse.' },
 { title: 'Instalación del ducto', text: 'El ducto de metal rígido se corta y se ajusta con la menor cantidad de codos posible, con cada unión armada con el extremo macho apuntando en el sentido del flujo.' },
 { title: 'Sellar sin puntos de enganche', text: 'Las uniones se sellan con cinta de aluminio y no con tornillos, porque la cabeza de un tornillo dentro del ducto construye una presa de pelusa a su alrededor.' },
 { title: 'Transición detrás de la secadora', text: 'Un ducto de transición certificado, corto y a la vista, o una caja empotrada donde la máquina tenga que quedar pegada a la pared.' },
 { title: 'Salida exterior', text: 'Una campana de ventilación con compuerta de giro libre, y la penetración de pared o techo sellada correctamente contra el clima.' },
 { title: 'Verificación del flujo', text: 'Una prueba final de flujo de aire confirma que el tramo nuevo mueve el aire como lo especifica el fabricante, y usted ve el número.' },
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
 { question: 'Qué tan largo puede ser el ducto de una secadora?', answer: 'Unos 35 pies de longitud equivalente, y cada codo de 90 grados le resta alrededor de 5 pies a ese presupuesto. Un tramo con cuatro codos gastó 20 de sus 35 pies antes de contar ducto recto, y por eso los recorridos largos por el ático en casas anchas de Florida se tapan otra vez al año de limpiarlos.' },
 { question: 'Por qué se me vuelve a tapar tan pronto después de limpiarlo?', answer: 'Casi siempre porque la ruta está por encima de su presupuesto de longitud, o porque la salida tiene malla o rejilla que atrapa pelusa desde adentro. Limpiar un tramo que nunca estuvo dentro del presupuesto trata el síntoma. Reubicarlo, o cambiar la cubierta por una campana con compuerta de giro libre, es lo que lo resuelve.' },
 { question: 'Puedo ventilar la secadora al ático o al garaje?', answer: 'No. Es una fuente de humedad apuntada a la parte de una casa de Florida que peor la tolera, y la pelusa que cae ahí es combustible. En una secadora de gas hay una segunda razón: el escape lleva productos de combustión, así que una salida interior los deja dentro de la casa.' },
 { question: 'Por qué las uniones no deben llevar tornillos?', answer: 'La cabeza de un tornillo dentro del ducto es un punto de enganche. La pelusa se atora ahí, construye una presa alrededor y angosta el ducto justo donde usted no puede verlo. En su lugar las uniones se sellan con cinta de aluminio, y se arman con el extremo macho apuntando en el sentido del flujo para que la pelusa pase la costura.' },
 { question: 'El ducto detrás de la secadora importa?', answer: 'Es el tramo de transición, y es el que más veces está mal. Debe ser un ducto de transición certificado, corto y a la vista, no pasando por pared ni cielorraso. Aplastado cuando se empuja la secadora contra la pared, puede costar más flujo de aire que todo el resto del recorrido. Una caja empotrada lo resuelve donde la máquina tiene que quedar pegada al muro.' },
 { question: 'Sirve un ventilador de refuerzo?', answer: 'Donde una ruta de verdad no se puede meter dentro del presupuesto de longitud, un ventilador de refuerzo hecho para escape de secadora, del tamaño correcto e instalado donde se le pueda dar servicio, es la respuesta correcta. No sustituye una ruta sensata ni justifica más codos.' },
 { question: 'La humedad de Florida afecta la ventilación de la secadora?', answer: 'Sí, y se subestima. Una secadora trabaja pasando humedad al aire que expulsa, y un aire que ya está al 70% de humedad relativa tiene menos espacio para cargar agua. La misma máquina trabaja más aquí con la misma carga, que es justo cuando un ducto apenas suficiente deja de alcanzar.' },
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
 'Una casa típica de Florida con ductos sin sellar pierde entre el 20% y el 30% del aire acondicionado antes de que llegue a una habitación. Ese aire no desaparece: usted lo paga en el medidor y termina entregándolo al ático. En un ático de Florida eso significa enfriar un espacio que llega a 120°F o 140°F en una tarde de verano, y por eso sellar los ductos suele pagarse solo más rápido que cualquier cambio de equipo que un contratista le ofrezca primero.',
 'Los sistemas de ductos fallan distinto en Florida que en el resto del país, y la razón es el ático. El ducto flexible está clasificado para una vida larga, pero en un ático de Florida dura de manera realista entre 10 y 15 años en lugar de los 20 o 25 que sugiere su clasificación. El calor degrada la cubierta exterior, y degrada todavía más rápido la cinta y el mastique de las uniones. El ducto metálico rígido bien instalado dura bastante más, aunque sus uniones y su envoltura aislante envejecen en el mismo plazo que todo lo demás allá arriba.',
 'Hay cuatro formas en que un tramo de ducto falla de verdad, y cada una necesita una reparación distinta. Una unión se suelta del collarín, casi siempre porque quien lo instaló confió en la cinta en lugar de una abrazadera con mastique, y ese tramo ahora descarga todo su aire en el ático. La cubierta se rasga, con frecuencia donde el ducto roza una viga o donde alguien pisó cerca mientras pasaba cable. Un tramo se aplasta o se dobla, por cajas guardadas, por otro oficio que pasó después, o por su propio peso cuando una correa de soporte cede. O el aislamiento se rinde, que es la falla más silenciosa de las cuatro y la que más se pasa por alto.',
 'Esa última importa más en Florida que en casi cualquier otro lugar. Un ducto que lleva aire a 55°F a través de un ático a 90°F con 70% de humedad relativa queda por debajo del punto de rocío. El aislamiento íntegro mantiene la superficie por encima de ese punto. Cuando el aislamiento está comprimido, mojado o arrancado, el ducto suda, la condensación empapa la cubierta y el cielorraso debajo, y lo que empezó como un problema de eficiencia se vuelve un problema de moho y con el tiempo un problema de drywall. Una mancha café en el techo debajo de un tramo del ático casi nunca es una gotera del tejado.',
 'Los síntomas que nota un propietario aparecen en un orden previsible. Una habitación nunca enfría mientras el resto de la casa está bien. La factura sube sin que nadie mueva el termostato. El sistema corre ciclos cada vez más largos y aun así la casa se siente pegajosa, porque un sistema con fugas mueve aire pero pierde la deshumidificación que viene con un ciclo completo. El polvo regresa a los pocos días de limpiar, porque el lado de retorno está jalando aire del ático por una abertura en lugar de jalar aire de la casa por el filtro.',
 'Encontrar las fugas es la parte que casi todas las cotizaciones se saltan. Una inspección visual encuentra un tramo desconectado y nada más, porque las uniones que peor fugan son justamente las que están envueltas en aislamiento y escondidas detrás de él. Una prueba de presión sella las rejillas, presuriza el sistema con un ventilador calibrado y mide cuánto aire el sistema no logra retener. Eso da un número antes de la reparación y un segundo número después, que es la única manera honesta de decir si la reparación funcionó.',
 'La reparación en sí no tiene nada de vistoso, y son los detalles los que deciden si dura. Las uniones se sellan con mastique, no con cinta. La cinta de tela para ductos es la reparación mal hecha más común en un ático de Florida: su adhesivo no está clasificado para ese calor, se suelta en una o dos temporadas, y la unión vuelve a quedar abierta mientras la cinta todavía parece estar haciendo algo. El mastique es un compuesto que se aplica con brocha y se mantiene flexible, y donde hace falta una conexión mecánica va una abrazadera en el collarín, no un adhesivo sosteniendo el ducto.',
 'El aislamiento se repone a un valor R real, no se envuelve flojo y se deja así. Los tramos de suministro en un ático sin acondicionar piden R-6 a R-8 según dónde corra el tramo y bajo qué ciclo de código se construyó la casa. Un aislamiento comprimido por cajas guardadas, o aplastado donde el ducto descansa sobre una viga, no está dando su valor nominal por más que lo diga la etiqueta.',
 'La regla honesta de reparar o reemplazar es esta. Las fugas puntuales, un puñado de collarines desconectados y secciones rasgadas en un sistema por lo demás sano se reparan, y esa reparación es buena inversión. Un sistema donde el flexible está quebradizo en todo el ático, donde el aislamiento está saturado, o donde el ducto simplemente es chico para el equipo que sirve, se reemplaza, porque sellar un sistema que no puede mover suficiente aire solo empeora la presión estática. Donde el aislamiento del ducto está saturado, esa sección se reemplaza en lugar de limpiarse, porque un aislamiento poroso no se puede devolver a un estado seguro con limpieza.',
 'El costo lo define el alcance, no los metros cuadrados de la casa. Un puñado de collarines reconectados y uniones selladas queda en la parte baja del rango. Un ático completo de flexible reemplazado con soportes y aislamiento nuevos queda en la parte alta. Hacemos la prueba de presión primero y le damos el número antes de empezar, porque una cotización de ductos dada desde la puerta es una adivinanza.',
 ],
 benefits: [
 { title: 'Detenga el desperdicio de energía', text: 'Sellar las fugas mantiene el aire frío dentro de los ductos en lugar del ático, lo que reduce las facturas.' },
 { title: 'Confort parejo', text: 'Los tramos reparados entregan flujo de aire completo a habitaciones que antes estaban calientes o débiles.' },
 { title: 'Mejor calidad del aire', text: 'Unos ductos sellados dejan de jalar aire polvoriento y húmedo del ático.' },
 { title: 'Menos humedad', text: 'Un sistema que retiene su aire completa ciclos enteros, y un ciclo entero es lo que de verdad deshumidifica una casa en Florida.' },
 { title: 'Se acaba el sudor del ducto', text: 'Restaurar el aislamiento mantiene la superficie del ducto por encima del punto de rocío, que es lo que termina con la condensación, las manchas en el techo y el moho que viene detrás.' },
 { title: 'Un número, antes y después', text: 'Una prueba de presión antes del trabajo y otra después significa que el resultado se mide en lugar de afirmarse.' },
 ],
 process: [
 { title: 'Prueba de presión', text: 'Se sellan las rejillas y se presuriza el sistema con un ventilador calibrado, que mide la fuga total y dónde está.' },
 { title: 'Revisar todo el tramo', text: 'Cada tramo accesible se revisa en el collarín, a lo largo de la cubierta, en los soportes y en el aislamiento, porque las peores uniones son las escondidas.' },
 { title: 'Reconectar con abrazadera', text: 'Los tramos desconectados vuelven al collarín de forma mecánica, con abrazadera, antes de sellar nada.' },
 { title: 'Sellar con mastique', text: 'Las uniones se sellan con mastique aplicado con brocha y no con cinta, porque el adhesivo de la cinta no está clasificado para un ático de Florida y se suelta en una o dos temporadas.' },
 { title: 'Reemplazar lo que no se repara', text: 'Las secciones aplastadas, quebradizas o saturadas se reemplazan con ducto aislado nuevo en lugar de parcharse.' },
 { title: 'Volver a colgar los tramos', text: 'Los tramos descolgados se vuelven a sujetar para que no descansen sobre vigas ni formen un punto bajo donde se acumule condensado.' },
 { title: 'Aislar y repetir la prueba', text: 'El aislamiento se restaura a R-6 o R-8 en tramos de ático y el sistema se prueba otra vez, para que la mejora sea una medición y no una promesa.' },
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
 { question: 'Debo reparar o reemplazar mis ductos?', answer: 'Las fugas puntuales, los collarines desconectados y las secciones rasgadas en un sistema por lo demás sano se reparan, y esa reparación es buena inversión. Un sistema donde el flexible está quebradizo en todo el ático, donde el aislamiento está saturado, o donde el ducto es chico para el equipo, se reemplaza. Sellar un sistema de tamaño insuficiente solo sube su presión estática.' },
 { question: 'Cuánto dura el ducto flexible en un ático de Florida?', answer: 'De manera realista entre 10 y 15 años, en el extremo bajo de su clasificación. Un ático a 120°F o 140°F degrada la cubierta exterior, y degrada todavía más rápido la cinta y el mastique de las uniones. El ducto metálico rígido bien instalado dura bastante más, aunque sus uniones y su envoltura envejecen en el mismo plazo.' },
 { question: 'Por qué sudan mis ductos?', answer: 'Porque la superficie del ducto quedó por debajo del punto de rocío. Un tramo que lleva aire a 55°F a través de aire de ático a 90°F con alta humedad va a condensar por fuera, salvo que el aislamiento mantenga la superficie lo bastante tibia. Un ducto que suda significa aislamiento comprimido, mojado o roto, y es la falla que más se pasa por alto.' },
 { question: 'Hay una mancha café en mi techo debajo del ático. Es el tejado?', answer: 'Muchas veces no lo es. Un tramo de ducto que perdió su aislamiento suda, la condensación empapa la cubierta y después el drywall debajo, y la mancha parece una gotera lenta del tejado. Vale la pena revisar el ducto que pasa por encima de ese punto antes de que alguien se suba al techo.' },
 { question: 'Puedo usar cinta para ductos en una unión suelta?', answer: 'Va a parecer arreglado y no va a quedar arreglado. La cinta de tela para ductos es la reparación mal hecha más común en un ático de Florida: el adhesivo no está clasificado para ese calor, se suelta en una o dos temporadas, y la unión vuelve a estar abierta con la cinta todavía puesta. Una unión pide abrazadera mecánica en el collarín y mastique con brocha encima.' },
 { question: 'Qué es una prueba de presión de ductos?', answer: 'Se sellan las rejillas, se presuriza el sistema de ductos con un ventilador calibrado, y el ventilador mide cuánto aire el sistema no logra retener. Da un número de fuga antes de la reparación y otro después, que es la única forma honesta de mostrar que la reparación sirvió. Una inspección visual encuentra un tramo desconectado y se pierde las uniones envueltas, que son las que peor fugan.' },
 { question: 'Qué valor R debe tener el aislamiento de ductos en Florida?', answer: 'Los tramos de suministro en un ático sin acondicionar por lo general piden R-6 a R-8, según dónde corra el tramo y bajo qué ciclo de código se construyó la casa. Un aislamiento comprimido por cajas, o aplastado donde el ducto descansa sobre una viga, no entrega su valor nominal por más que lo diga la etiqueta.' },
 { question: 'Sellar los ductos va a hacer que el aire salga más frío?', answer: 'Va a hacer que llegue a la habitación más del frío que usted ya está pagando, que suele ser lo que la gente quiere decir. No cambia el equipo. Si la casa sigue sin enfriar con un sistema de ductos sellado y del tamaño correcto entregando todo el flujo, el problema es el equipo o la carga térmica, no los ductos.' },
 { question: 'Cuánto tarda una reparación de ductos?', answer: 'Un puñado de collarines reconectados y uniones selladas toma unas horas. Un ático completo de flexible reemplazado con soportes y aislamiento nuevos toma de uno a dos días, según el tamaño del sistema y qué tan accesible sea el ático.' },
 { question: 'Dan el precio antes de empezar?', answer: 'Sí. Hacemos la prueba de presión primero y el número llega antes que el trabajo. Una cotización de ductos dada desde la puerta, sin prueba y sin subir al ático, es una adivinanza.' },
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
 'Una luz UV en el aire acondicionado muchas veces vale la pena en Florida en particular, y bastante menos en otros lados. Esa es la versión honesta y conviene empezar por ahí, porque en esta categoría se promete mucho. La razón por la que aquí sí se justifica es estrecha y física: el serpentín evaporador está frío, mojado y a oscuras la mayor parte del año en Florida, ahí es donde el crecimiento empieza, y una lámpara UV-C apuntada a esa superficie la mantiene controlada de forma continua en lugar de una vez al año cuando alguien la limpia.',
 'Se venden dos cosas bastante distintas bajo el nombre de UV para HVAC, y solo una tiene un caso sólido. Una lámpara de serpentín se monta dentro de la manejadora y apunta a la cara del serpentín y a la bandeja de drenaje. Trabaja sobre una superficie fija, todo el tiempo que el sistema corre, así que la dosis que entrega a esa superficie es enorme. Una lámpara de ducto pensada para esterilizar el aire que pasa es otra cosa: el aire pasa junto a la lámpara en una fracción de segundo, y la dosis que recibe cualquier partícula es diminuta. La de serpentín es la que instalamos y la que vale la pena comprar.',
 'Florida cambia la aritmética por las horas de uso. Un sistema que corre casi todo el año le da a la lámpara casi todo el año de funcionamiento, mientras que la misma lámpara en un clima de estaciones marcadas pasa buena parte de su vida apagada junto a un serpentín seco que de todos modos no estaba criando nada. Cuesta entre $300 y $700 instalada, y el argumento descansa en esas horas.',
 'Es igual de importante ser claros sobre lo que una lámpara UV no hace, porque ahí es donde esta categoría se ganó su mala fama. No filtra polvo ni polen: no sustituye un buen filtro, y un MERV 8 a MERV 11 sigue siendo lo que maneja las partículas en la mayoría de las casas de Florida. No limpia la suciedad que ya está en sus ductos: una lámpara en la manejadora no tiene ningún efecto a cinco metros por un ramal de suministro, y si el sistema necesita limpieza, necesita limpieza. Y no resuelve un olor a humedad cuyo origen real es agua estancada en una bandeja de drenaje tapada, que es un problema de drenaje disfrazado de problema de moho.',
 'La ubicación es la mayor parte del valor. La lámpara necesita línea de vista a la cara del serpentín y a la bandeja de drenaje, porque la bandeja es el otro lugar donde el crecimiento se establece y el que la gente olvida. Una lámpara montada donde alumbra sobre todo lámina metálica es una lámpara haciendo muy poco, y eso es lo que pasa cuando la instalación se trata como montar una caja en vez de tomar una puntería.',
 'Dos advertencias prácticas. La UV degrada ciertos materiales con el tiempo, así que el aislamiento de cables, el forro flexible y los plásticos que queden en la línea de vista de la lámpara hay que revisarlos y protegerlos en lugar de dejar que se vuelvan quebradizos. Y algunas lámparas se venden justamente porque producen ozono. El ozono irrita las vías respiratorias, no es algo que convenga generar a propósito en una casa habitada, y las lámparas que vale la pena instalar no lo hacen. Es una pregunta legítima para cualquier equipo que le coticen.',
 'El mantenimiento es un solo punto al año y es el que la gente se salta. Una lámpara UV-C sigue encendida mucho después de que su potencia germicida se haya caído, así que una lámpara que parece estar funcionando no es prueba de que lo esté. La salida decae a lo largo de unos doce meses de servicio continuo, y por eso el bulbo se cambia por fecha y no cuando se apaga. Una lámpara instalada en 2024 y nunca tocada desde entonces es una luz de noche azul.',
 'Dónde encaja esto junto con todo lo demás: si el serpentín ya está sucio, primero se limpia, porque una lámpara mantiene limpia una superficie limpia en lugar de quitar lo que ya está ahí. Si la humedad de la casa anda por encima del 60%, eso también se atiende, porque el 60% es el techo a partir del cual el moho encuentra lo que necesita en las superficies frías, y ninguna lámpara le gana a un problema de humedad. La lámpara es lo que evita que el serpentín vuelva a donde estaba.',
 ],
 benefits: [
 { title: 'Mantiene limpio el serpentín', text: 'La esterilización UV-C continua previene el moho que ensucia los serpentines y causa olores.' },
 { title: 'Aire más limpio las 24 horas', text: 'Reduce el moho, las bacterias y los virus en el aire en movimiento siempre que el sistema funciona.' },
 { title: 'Conserva la eficiencia', text: 'Un serpentín libre de moho transfiere el calor con eficiencia y protege el rendimiento.' },
 { title: 'Poco mantenimiento', text: 'Un bulbo al año. La lámpara sigue encendida después de que se fue su potencia germicida, así que se cambia por fecha y no cuando se ve apagada.' },
 { title: 'También atiende la bandeja', text: 'Bien apuntada, la lámpara cubre la bandeja de drenaje además del serpentín, y la bandeja es el otro lugar donde empieza el crecimiento y el que normalmente se olvida.' },
 { title: 'Honesta sobre sus límites', text: 'No es un filtro, no limpia ductos y no arregla un drenaje tapado. Se lo decimos antes de venderle una.' },
 ],
 process: [
 { title: 'Revisar si es la respuesta correcta', text: 'Si el olor viene de una bandeja de drenaje tapada, o la casa anda por encima del 60% de humedad, atendemos eso en su lugar. Una lámpara no le gana a ninguno de los dos.' },
 { title: 'Limpiar el serpentín primero', text: 'Una lámpara mantiene limpia una superficie limpia. Si el serpentín ya está sucio, se limpia antes de instalarla, o la lámpara pelea una batalla que no puede ganar.' },
 { title: 'Dimensionamiento del sistema', text: 'La potencia de la lámpara se ajusta a la manejadora y al área de serpentín que tiene que cubrir.' },
 { title: 'Apuntar, no solo montar', text: 'La lámpara se coloca con línea de vista a la cara del serpentín y a la bandeja de drenaje, y no donde simplemente quepa el soporte.' },
 { title: 'Proteger lo que la UV daña', text: 'El aislamiento de cables, el forro flexible y los plásticos en la línea de vista se revisan y se protegen donde haga falta en vez de dejarlos volverse quebradizos.' },
 { title: 'Verificar y ponerle fecha', text: 'Confirmamos el funcionamiento, confirmamos que el interruptor de seguridad corte la lámpara al abrir el panel, y la etiquetamos con la fecha en que toca el bulbo.' },
 ],
 quickFacts: [
 { label: 'Precio típico', value: '$300 a $700 instalada' },
 { label: 'Mantenimiento', value: 'Reemplazo anual del bulbo' },
 { label: 'Ideal para', value: 'Casas húmedas de FL, moho en serpentín, alergias' },
 { label: 'Objetivos', value: 'Moho del serpentín, bacterias, virus' },
 ],
 faq: [
 { question: 'Realmente funcionan las luces UV en los sistemas HVAC?', answer: 'Una lámpara montada en el serpentín hace el trabajo para el que se vende: mantiene controlado el crecimiento en la superficie del serpentín, de forma continua, y eso vale dinero real en un clima que mantiene esa superficie mojada. Una lámpara de ducto vendida para esterilizar el aire que pasa es una propuesta mucho más débil, porque el aire pasa junto a la lámpara en una fracción de segundo y la dosis es proporcionalmente pequeña. Nosotros instalamos la primera.' },
 { question: 'Con qué frecuencia hay que reemplazar los bulbos UV?', answer: 'Alrededor de una vez al año, y este es el punto que la gente se salta. La lámpara sigue encendida mucho después de que su potencia germicida se haya caído, así que una lámpara que parece estar funcionando no es prueba de que lo esté. Se cambia por fecha, no cuando se apaga.' },
 { question: 'Es segura la luz UV para HVAC?', answer: 'En funcionamiento normal sí: la lámpara va encerrada dentro de la manejadora y nadie en la casa queda expuesto. No mire una lámpara encendida con el panel abierto, y el equipo debe tener un interruptor de seguridad que la corte al quitar el panel. Pregunte si la lámpara que le cotizan produce ozono, porque algunas se venden por eso y el ozono irrita las vías respiratorias.' },
 { question: 'Una luz UV limpia mis ductos?', answer: 'No, y este es el malentendido más común. Una lámpara en la manejadora no tiene ningún efecto a cinco metros por un ramal de suministro. Mantiene limpio el serpentín; no hace nada con la suciedad que ya está en los ductos. Si el sistema necesita limpieza, necesita limpieza.' },
 { question: 'Puede una luz UV reemplazar mi filtro de aire?', answer: 'No. No filtra polvo ni polen en absoluto, y eso es a lo que la mayoría de la gente realmente reacciona. Un MERV 8 a MERV 11 sigue siendo lo que maneja las partículas en la mayoría de las casas de Florida; la lámpara hace un trabajo completamente distinto.' },
 { question: 'Va a quitar el olor a humedad del aire acondicionado?', answer: 'Sí, si el olor viene del crecimiento en el serpentín, que suele ser el caso. No, si viene de agua estancada en una bandeja de drenaje tapada, que es un problema de drenaje y no de moho, y al que la lámpara no llega. Revisamos cuál de los dos es antes de recomendar nada.' },
 { question: 'Vale la pena una luz UV en Florida?', answer: 'Muchas veces sí aquí en particular, y menos en otros lados. La lámpara controla el moho y las bacterias que crecen sobre una superficie permanentemente húmeda, que es la condición que crea Florida y no los climas secos, y un sistema que corre casi todo el año le da a la lámpara casi todo el año de funcionamiento. $300 a $700 instalada.' },
 { question: 'Dónde debe montarse la lámpara?', answer: 'Con línea de vista a la cara del serpentín y a la bandeja de drenaje. La bandeja es el otro lugar donde se establece el crecimiento y el que más se deja fuera. Una lámpara montada donde alumbra sobre todo lámina metálica es una lámpara haciendo muy poco.' },
 { question: 'La UV puede dañar algo dentro de la manejadora?', answer: 'Con el tiempo sí puede. La UV vuelve quebradizos ciertos plásticos y aislamientos de cable, así que todo lo que quede en la línea de vista se revisa y se protege donde haga falta. Es parte de hacer bien el trabajo, no una razón para descartar el producto.' },
 { question: 'Limpio el serpentín primero o solo instalo la lámpara?', answer: 'Primero se limpia. La lámpara mantiene limpia una superficie limpia; no le quita la suciedad a un serpentín que ya está sucio. Instalarla sobre un serpentín sucio es pagar por algo y después pedirle un trabajo para el que no fue diseñada.' },
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
 'sliding-glass-door-repair': {
 name: 'Reparación de Puertas Corredizas de Vidrio',
 shortName: 'Puertas Corredizas',
 metaTitle: 'Reparación de Puertas Corredizas en Florida | $150 a $400',
 metaDescription:
 'Reparación de puertas corredizas de vidrio en Florida, de $150 a $400 en la mayoría de los casos. Rodillos de acero inoxidable cerca de la costa. Precio antes de agendar.',
 answer:
 'La reparación de puertas corredizas de vidrio devuelve el movimiento a una puerta de patio que se traba, arrastra, se sale del riel o ya no cierra con llave, cambiando los rodillos, reparando o encamisando el riel inferior y reemplazando manijas y cerraduras gastadas. En Florida la mayoría de las reparaciones cuesta de $150 a $400 y se resuelve en una sola visita. Reemplazar la puerta completa es otro trabajo: requiere un contratista con licencia, un permiso de construcción y una Aprobación de Producto de Florida o un Aviso de Aceptación (NOA) de Miami-Dade.',
 intro: [
 'Casi todas las llamadas por una puerta corrediza empiezan igual. Hay que abrirla con las dos manos, con el hombro o con el pie apoyado en el marco. Eso no es falta de fuerza ni es que la casa se haya asentado. Una puerta corrediza carga todo su peso sobre dos, a veces cuatro, ruedas pequeñas en la parte baja del panel. Cada rueda es una llanta de nylon o de acero montada sobre un balero sellado, que rueda sobre una tira de aluminio de unos dos centímetros y medio de ancho. Cuando esos baleros se traban, las ruedas dejan de girar y el panel empieza a arrastrarse, así que usted ya no está rodando de 90 a 150 libras de vidrio, las está empujando sobre metal. Una puerta que necesita dos manos es un trabajo de rodillos.',
 'Las puertas corredizas son el mayor segmento del mercado de puertas de patio en Estados Unidos, con el 43.4 por ciento de los ingresos en 2024 según Grand View Research. En Florida son la manera en que una casa se abre al patio, al lanai o al balcón del condominio, y por eso son también la parte del cerramiento que recibe el salitre, la arena, el sol y los paneles de huracán año tras año. Es la pieza móvil que más se usa en toda la casa y la que nadie atiende hasta que deja de funcionar.',
 'Aquí hay dos cosas que acaban con una corrediza, y no son la misma. A pocas millas de cualquiera de las dos costas, el problema es la corrosión. El aire cargado de salitre ataca el acero dentro de los baleros y pica el aluminio del riel, y un balero oxidado por dentro no va a girar por muy limpio que usted mantenga el riel. Por eso cerca del agua se especifican rodillos de acero inoxidable y no los de acero común, y por eso lo primero que preguntamos es la dirección. Lo que no vamos a hacer es publicar cuántos meses dura un rodillo frente a la playa. Las cifras que circulan salen de páginas de publicidad de la competencia, se contradicen entre ellas y ninguna cita una prueba. El mecanismo es real. La cuenta regresiva no la ha medido nadie con seriedad.',
 'El otro enemigo es la arena, y ese trabaja en todo el estado. Arena, restos de pasto y polvo de obra caen al riel inferior, y cada vez que la puerta pasa los muele contra el aluminio. Funciona igual que una pasta de esmerilar. En unos pocos años abre un surco poco profundo justo en el tramo por donde la puerta corre, y con el surco ya hecho el rodillo apoya en los bordes en vez de en la cara, se desgasta disparejo y empieza a salirse. Por eso un riel casi siempre está gastado solo en el metro y medio que la puerta recorre y se ve nuevo en las puntas. Y por eso pasar un cepillo duro y la aspiradora por el riel dos veces al año le sirve más a la puerta que cualquier otra cosa que usted pueda hacer sin herramientas.',
 'Un riel gastado casi nunca significa puerta nueva. La camisa de acero inoxidable es un canal delgado que se coloca sobre el aluminio dañado, se asienta y se fija, y le devuelve a los rodillos una superficie dura y plana por donde correr. La pieza en sí es barata, una cubierta de seis pies se vende alrededor de $11 y una camisa de reparación de acero inoxidable de ocho pies alrededor de $37, y todo el valor está en cómo queda puesta. Una camisa colocada sobre un riel sucio o disparejo copia cada defecto de abajo y en menos de un año la puerta vuelve a sentirse mal. Cambiar el riel completo en lugar de encamisarlo obliga a desarmar el marco, y eso ya sale de la reparación y entra en el reemplazo, con el permiso y la aprobación de producto que eso implica.',
 'Sí, la puerta se saca del marco. No hay otra forma de llegar a los rodillos. El panel se levanta hacia el canal superior, que es lo bastante profundo para tragarlo, luego la parte de abajo se saca hacia adentro de la casa y el panel sale. Se vuelve a colocar igual. Un panel residencial de seis pies pesa entre 90 y 130 libras y necesita dos personas para moverse con seguridad. Un panel laminado de impacto puede pasar de 150 libras, y por eso en puertas de impacto van dos técnicos, con ventosas y un lugar preparado y acolchado donde apoyarlo, nunca la pared ni el piso de loseta.',
 'Una puerta que ya no cierra con llave casi nunca tiene la cerradura rota. La cerradura de una corrediza mete un gancho dentro de un recibidor atornillado al marco, y ese gancho solo alcanza el recibidor si el panel está a la altura en la que quedó ajustado. Con los rodillos muertos el panel baja un cuarto de pulgada, el gancho llega por debajo del recibidor en vez de meterse en él, y la puerta no cierra. Se cambian los rodillos, se ajusta la altura, y la cerradura vuelve a funcionar sin cambiar una sola pieza de la cerradura. Cuando el problema sí es la cerradura, un gancho partido, un cilindro trabado o un recibidor doblado, la pieza y la mano de obra caen dentro del rango de $125 a $300.',
 'Hay puertas que le decimos que no repare. Si el marco está torcido o fuera de escuadra, los rodillos nuevos se sienten bien más o menos un mes, porque el panel corre dentro de un hueco que ya no es un rectángulo y la carga vuelve a caer en una esquina. A veces el marco se puede calzar y volver a escuadrar y a veces no, y $400 gastados en una puerta que hay que reemplazar son $400 perdidos. Lo mismo pasa con un vidrio termopanel empañado por dentro: eso es un sello de borde vencido y se arregla cambiando el vidrio, no tratándolo, de $250 a $600 por panel. La corrosión que ya se comió el umbral, un panel fijo flojo dentro del marco, o una puerta que usted de todos modos piensa convertir a impacto, son casos donde el dinero pertenece al reemplazo y no a la reparación.',
 'Aquí el código pesa más de lo que la gente espera. Las puertas corredizas de vidrio son aberturas acristaladas. En la Región de Escombros Arrastrados por el Viento, y en la Zona de Huracanes de Alta Velocidad (HVHZ) que cubre los condados de Miami-Dade y Broward, toda abertura acristalada exterior tiene que ser resistente al impacto o estar protegida. El Código de Construcción de Florida, Residencial, sección R301.2.1.2, remite las aberturas acristaladas a las normas TAS 201, 202 y 203 o a ASTM E1886 y E1996, con la prueba de misil grande aplicable hasta 30 pies sobre el nivel del terreno y la de misil pequeño por encima de esa altura. Las puertas de garaje caen bajo la misma regla pero con otra norma de prueba, ANSI/DASMA 115. O sea que una corrediza y una puerta de garaje tienen la misma obligación de proteger la abertura, y quien le diga que se prueban igual está equivocado en el detalle.',
 'El reemplazo trae permiso y aprobación de producto. En la práctica, todas las jurisdicciones de Florida exigen permiso para instalar ventanas y puertas de impacto, y la unidad tiene que contar con una Aprobación de Producto de Florida o, en Miami-Dade, con un Aviso de Aceptación (NOA). Una unidad con NOA lleva una etiqueta permanente que dice Miami-Dade County Product Control Approved, y el NOA completo debe estar disponible en la obra si el inspector lo pide. Hay dos reglas más que toman por sorpresa a los dueños. En Miami-Dade y Broward no se puede sacar un permiso para volver a poner una unidad sin impacto en la abertura. Y la regla del 25 por ciento dice que si usted reemplaza más de una cuarta parte del área total de vidrio de la casa dentro de doce meses en la WBDR o la HVHZ, cada unidad reemplazada tiene que cumplir las normas de impacto vigentes. Una corrediza de tres paneles es una parte grande del vidrio de una casa chica, así que esa regla pega más fuerte en corredizas que en ventanas.',
 'Ahora las licencias, dicho sin rodeos. Florida sacó el vidrio y la vidriería de las licencias estatales obligatorias en 2012, así que la reparación de herrajes y el trabajo de vidrio no estructural no requieren licencia estatal de contratista, aunque el condado o la ciudad sí pueden exigir una licencia local. Instalar puertas y ventanas, y cualquier cosa anclada estructuralmente a la abertura, sigue requiriendo licencia de contratista de División I o una licencia de especialidad apropiada. La línea no separa trabajos chicos de trabajos grandes. La línea está en los anclajes. Rodillos, rieles, manijas, cerraduras, burletes y mosquiteros quedan del lado de la reparación. Sacar el conjunto de la pared, no. Las reparaciones las hacen nuestros técnicos. Los reemplazos pasan a un contratista socio con licencia, que saca el permiso bajo su propia licencia y cuya aprobación de producto o NOA es la que va en ese permiso. En esta página no publicamos ningún número de licencia, y un número impreso en cualquier sitio web no prueba nada por sí solo. Pídalo por escrito en la cotización y búsquelo en el registro de licencias del DBPR antes de que empiece el trabajo.',
 'Si una reparación puntual necesita permiso o no es una pregunta local y vale una llamada. La posición constante en las jurisdicciones de Florida es que dar servicio a los herrajes no genera permiso y reemplazar el conjunto sí, porque el permiso se ata a modificar la abertura y su capacidad de resistir la carga de viento, no a cambiar una rueda. Cada departamento de construcción pone sus propias reglas, así que si usted quiere certeza antes de que lleguemos, llame al suyo y pregunte por reparación de herrajes en una corrediza existente.',
 'Cómo se ve un precio justo y cómo se ve un precio gancho. La mano de obra en este oficio va de $60 a $150 la hora, y la mayoría de las compañías cobra un mínimo de servicio de $100 a $250, así que una camioneta, un técnico y una hora en su patio ya se comen buena parte de un trabajo de rodillos de $150 a $400 antes de poner una sola pieza. Esa cuenta es la razón por la que un especial de rodillos en $69 no puede ser el precio final. Es un precio para entrar, y el número se mueve cuando el panel ya está afuera y su puerta está acostada en la sala. Una cotización de verdad nombra cosas: cuántos paneles, qué rodillo se va a poner y si es de acero inoxidable, si el riel se va a limpiar, encamisar o cambiar, si la cerradura y el recibidor están incluidos, y qué pasa con el precio si el marco resulta estar torcido. Una cotización que es un solo número y una promesa no es una cotización.',
 'Lo que este servicio no incluye, para que nada sea sorpresa. No ampliamos ni modificamos aberturas, que es trabajo estructural de un contratista general. No instalamos puertas de impacto nosotros mismos, porque eso es trabajo con permiso y aprobación de producto que le corresponde al socio con licencia. No atendemos puertas francesas, puertas de patio abatibles, puertas de baño sin marco ni vidrio de local comercial. No volvemos a sellar un termopanel empañado, porque esa reparación no existe. Y no cotizamos un reemplazo sin ver la puerta, porque la cantidad de paneles, el tamaño de la abertura y si usted está dentro de la HVHZ mueven ese número por miles de dólares.',
 ],
 benefits: [
 { title: 'Una puerta que se mueve con un dedo', text: 'Rodillos nuevos sobre un riel limpio y plano es lo que convierte un empujón con las dos manos en un deslizamiento con un dedo. Ese es el punto de la visita y usted lo comprueba con nosotros antes de que nos vayamos.' },
 { title: 'El rodillo que corresponde a su dirección', text: 'Baleros de acero inoxidable cerca de la costa, donde lo que mata el herraje es el salitre, y el rodillo estándar tierra adentro, donde el problema es el desgaste y la arena. El rodillo equivocado a tres millas del agua es una segunda visita que usted paga dos veces.' },
 { title: 'El riel encamisado en vez del marco desarmado', text: 'Una camisa de acero inoxidable sobre un riel con surco le devuelve a los rodillos una superficie dura y plana y mantiene el trabajo dentro del rango de $175 a $400. Cambiar el riel obliga a abrir el marco, y eso ya es reemplazo con permiso.' },
 { title: 'Una cerradura que cierra porque la puerta está a su altura', text: 'La mayoría de las corredizas que no cierran con llave tienen un problema de altura, no de cerradura. Devolver el panel a su altura original suele resolver el cierre sin piezas nuevas y sin cerrajero.' },
 { title: 'Una respuesta directa sobre reparar o reemplazar', text: 'Un marco torcido, un termopanel empañado o un umbral corroído son casos donde el dinero de la reparación se pierde, y se lo decimos en el sitio. Preferimos perder un trabajo de $300 antes que devolverle una puerta que va a durar bien un mes.' },
 { title: 'El precio antes de agendar, no después', text: 'De $150 a $400 cubre la mayoría de rodillos, rieles, manijas y cerraduras, calculado por la cantidad de paneles y por lo que está haciendo la puerta. No lo decide un técnico parado en su sala con el vidrio ya afuera.' },
 ],
 process: [
 { title: 'Diagnóstico en el panel, no por teléfono', text: 'Corremos la puerta de punta a punta, la levantamos para medir el juego de los rodillos, revisamos el riel a contraluz buscando el surco y probamos la cerradura contra el recibidor. Dos minutos de eso nos dicen si es rodillo, riel, altura o un marco fuera de escuadra.' },
 { title: 'Sacar el panel con seguridad', text: 'El panel sube al canal superior y sale por abajo hacia adentro. Dos técnicos y ventosas en todo lo que sea de impacto, cobijas y un lugar preparado adentro, nunca recargado en la pared ni sobre la loseta.' },
 { title: 'Limpiar el riel y decidir sobre él', text: 'Primero sale del riel inferior la arena, la tierra y el lubricante viejo de años, porque no se puede juzgar un aluminio que no se ve. Después le mostramos el surco, si lo hay, y le decimos si acepta una camisa de acero inoxidable o si ya pasó de ese punto.' },
 { title: 'Poner los rodillos y ajustarlos', text: 'Los rodillos entran según la marca de la puerta y según la costa, y luego se ajustan los dos tornillos de altura para que el panel quede a plomo con el marco y nivelado en la abertura. Un rodillo puesto sin ajustar la altura es media reparación.' },
 { title: 'Cerradura, recibidor y burlete', text: 'Se alinea el gancho con el recibidor y se reubica el recibidor si se movió, se ajusta o se cambia la manija, y se reemplaza el burlete de cepillo donde ya está aplastado, porque por ahí es por donde entran el agua y el ruido.' },
 { title: 'Colgar, probar y entregar', text: 'El panel vuelve a su lugar, la corremos de punta a punta por lo menos veinte veces, cerramos y abrimos con llave por los dos lados y le explicamos qué se cambió y qué encontramos. El precio que le cotizamos es el precio de la factura.' },
 ],
 quickFacts: [
 { label: 'Precio típico de reparación', value: '$150 a $400' },
 { label: 'Tiempo en sitio', value: '1 a 2 horas en rodillos y riel' },
 { label: 'Personal', value: '2 técnicos en paneles de impacto' },
 { label: 'Permiso', value: 'No para reparar herrajes, sí para cambiar la puerta' },
 { label: 'Cerca de la costa', value: 'Rodillos de acero inoxidable, no de acero común' },
 { label: 'Reemplazo completo', value: '$1,200 a $4,000 sin impacto, $2,500 a $9,000 con impacto' },
 ],
 faq: [
 { question: 'Cuánto cuesta reparar una puerta corrediza de vidrio en Florida?', answer: 'La mayoría de las reparaciones queda entre $150 y $400. El cambio de rodillos va de $150 a $400, la reparación o el encamisado del riel sumado a un trabajo de rodillos va de $175 a $400, y el cambio de manija o cerradura va de $125 a $300. Un panel de vidrio va de $250 a $600. La mano de obra del oficio va de $60 a $150 la hora, con un mínimo de servicio de $100 a $250, y por eso los especiales muy baratos nunca sobreviven al contacto con la puerta real.' },
 { question: 'Mi puerta necesita las dos manos para abrir. Son los rodillos?', answer: 'Casi siempre, sí. El panel corre sobre dos a cuatro ruedas pequeñas montadas en baleros sellados. Cuando los baleros se traban, las ruedas dejan de girar y el panel se arrastra sobre el aluminio en vez de rodar sobre él, que es exactamente la resistencia que usted siente. Es una falla del herraje, no señal de que la puerta sea muy pesada ni de que haya que tratarla con cuidado.' },
 { question: 'Cuánto tarda la reparación?', answer: 'De una a dos horas en un trabajo típico de rodillos y riel en una puerta de dos paneles. Una corrediza de cuatro paneles, una puerta de bolsillo o un riel que hay que encamisar en todo su largo toman más. Si resulta que el marco está torcido, paramos y hablamos con usted antes de gastar su dinero, en lugar de terminar una reparación que no va a durar.' },
 { question: 'Hay que sacar la puerta del marco?', answer: 'Sí. Los rodillos van por debajo del panel y no hay otra forma de llegar a ellos. El panel se levanta hacia el canal superior, se saca por abajo hacia adentro y se apoya sobre cobijas. Un panel de seis pies pesa entre 90 y 130 libras y uno laminado de impacto puede pasar de 150 libras, así que es un levantamiento de dos personas y en puertas de impacto mandamos dos técnicos.' },
 { question: 'Se puede reparar un riel gastado o hay que cambiar la puerta?', answer: 'La mayoría de los rieles gastados se pueden encamisar. La camisa de acero inoxidable es un canal delgado que se monta sobre el aluminio dañado para que los rodillos vuelvan a correr sobre una superficie dura, y cuesta mucho menos que abrir el marco. No sirve para todos los casos. Si el aluminio está cortado, si la corrosión ya se comió el umbral o si el marco está torcido, la camisa solo tapa el problema, y se lo decimos en vez de vendérsela.' },
 { question: 'Qué pasa si el marco está torcido o fuera de escuadra?', answer: 'Los rodillos nuevos se van a sentir bien unas semanas y después la puerta vuelve a arrastrarse, porque el panel corre dentro de un hueco que ya no es rectangular y la carga regresa a una esquina. A veces el marco se puede calzar y volver a escuadrar. Cuando no se puede, reparar es gastar dos veces, y la respuesta honesta es el reemplazo. Se lo decimos con el panel afuera, cuando usted mismo lo puede ver.' },
 { question: 'Cuándo ya no vale la pena reparar una puerta corrediza?', answer: 'En cuatro situaciones. Un marco torcido que ya no se puede escuadrar. Un umbral corroído de lado a lado, cosa común cerca del agua. Un termopanel empañado entre los vidrios, que es un sello vencido y solo se arregla cambiando el vidrio. Y una puerta sin impacto en la HVHZ o en la Región de Escombros Arrastrados por el Viento que usted ya piensa convertir a impacto, donde el dinero de la reparación se gasta en una puerta que va a salir de todos modos.' },
 { question: 'Necesito permiso para reparar mi puerta corrediza?', answer: 'Dar servicio a los herrajes, rodillos, rieles, manijas, cerraduras, burletes y mosquiteros, por regla general no genera permiso en las jurisdicciones de Florida, porque el permiso se ata a modificar la abertura y su capacidad de resistir el viento. Reemplazar el conjunto de la puerta sí lo requiere. Cada departamento de construcción fija sus propias reglas, así que si usted quiere certeza, llame al suyo y pregunte por reparación de herrajes en una corrediza existente antes de que lleguemos.' },
 { question: 'La reparación de puertas corredizas requiere licencia de contratista en Florida?', answer: 'La reparación por lo general no. Florida sacó el vidrio y la vidriería de las licencias estatales obligatorias en 2012, así que la reparación de herrajes y el vidrio no estructural no requieren licencia estatal de contratista, aunque un condado o una ciudad pueden exigir una licencia local. Instalar un conjunto de puerta anclado a la abertura sí requiere licencia de contratista de División I o una licencia de especialidad apropiada. Las reparaciones las hacen nuestros técnicos y los reemplazos pasan a un contratista socio con licencia que saca el permiso bajo su propia licencia. Pida el número de licencia por escrito en su cotización y búsquelo en el registro del DBPR, contrate a quien contrate.' },
 { question: 'Cuánto cuesta reemplazar la puerta corrediza completa?', answer: 'Una corrediza sin impacto va de $1,200 a $4,000 instalada. Una unidad de impacto de dos paneles va de $2,500 a $5,000, y una de impacto de tres o cuatro paneles va de $4,000 a $9,000. Las unidades arquitectónicas grandes suben más. Esa distancia entre una reparación de $300 y un reemplazo de $4,000 es la razón por la que preferimos diagnosticar bien la puerta antes que cotizar cualquiera de los dos por teléfono.' },
 { question: 'Si reemplazo la puerta, tengo que ponerla de impacto?', answer: 'En Miami-Dade y Broward, que son la Zona de Huracanes de Alta Velocidad, sí. Una vez que se saca el permiso, no se puede volver a poner una unidad sin impacto en esa abertura. En el resto de la Región de Escombros Arrastrados por el Viento la abertura tiene que ser resistente al impacto o estar protegida, así que en algunas unidades los paneles o persianas siguen siendo opción. También aplica la regla del 25 por ciento: si reemplaza más de una cuarta parte del área total de vidrio de la casa dentro de doce meses, cada unidad reemplazada tiene que cumplir las normas de impacto vigentes. Una corrediza de tres paneles es una parte grande del vidrio de una casa chica, así que esa regla atrapa más a las corredizas que a las ventanas.' },
 { question: 'Una corrediza de impacto cae bajo el mismo código que una puerta de garaje?', answer: 'Misma regla, prueba distinta. Las dos son aberturas que tienen que ser resistentes al impacto o estar protegidas en la Región de Escombros Arrastrados por el Viento y en la HVHZ. La puerta corrediza es una abertura acristalada y se prueba bajo TAS 201, 202 y 203 o bajo ASTM E1886 y E1996, con la prueba de misil grande aplicable hasta 30 pies sobre el terreno. Las puertas de garaje se prueban bajo ANSI/DASMA 115. Las dos necesitan Aprobación de Producto de Florida, o un Aviso de Aceptación de Miami-Dade dentro de ese condado.' },
 { question: 'Por qué mi puerta se daña mucho más rápido cerca de la playa?', answer: 'El salitre corroe el acero dentro de los baleros y pica el aluminio del riel, y un balero oxidado por dentro no gira por muy limpio que esté el riel. Por eso cerca del agua se especifican rodillos de acero inoxidable. No le vamos a dar un número de meses, porque las cifras que circulan en internet salen de páginas de publicidad que se contradicen entre sí y no citan ninguna prueba. Lo que sí hacemos es poner la pieza resistente a la corrosión cuando su dirección lo pide.' },
 { question: 'Qué debe incluir una cotización justa y cómo se ve un precio gancho?', answer: 'Una cotización justa nombra la cantidad de paneles, el rodillo específico que se va a poner y si es de acero inoxidable, si el riel se limpia, se encamisa o se cambia, si la cerradura y el recibidor están incluidos, y qué pasa con el precio si el marco resulta torcido. Un precio gancho es un solo número bajo sin nada de eso detrás. Con mano de obra de $60 a $150 la hora y mínimos de servicio de $100 a $250, un precio anunciado muy por debajo de $150 es una forma de entrar a su casa, no un precio por el trabajo.' },
 ],
 },
};
