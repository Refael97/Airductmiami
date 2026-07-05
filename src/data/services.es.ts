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
 metaTitle: 'Limpieza de Conductos de Aire en Florida | Limpieza Profesional de Ductos HVAC',
 metaDescription:
 'Limpieza profesional de conductos de aire en toda Florida. Con equipo de aire negativo bajo norma NADCA retiramos polvo, moho y alérgenos de su sistema HVAC. Cotizaciones gratis y servicio en la misma semana.',
 answer:
 'La limpieza de conductos de aire es la extracción profesional de polvo, residuos, moho y alérgenos de los ductos de suministro y retorno de su sistema HVAC mediante equipo de aire negativo (extracción en la fuente). En Florida suele recomendarse cada 3 a 5 años para proteger la calidad del aire interior y la eficiencia del sistema.',
 intro: [
 'Con el paso del tiempo, la humedad, el polen y el polvo fino de construcción propios de Florida se acumulan dentro de sus ductos. Como el mismo aire recircula por la casa entre 5 y 7 veces al día, unos conductos contaminados reparten esas partículas una y otra vez en las habitaciones donde respira su familia.',
 'Nuestros técnicos usan máquinas de aire negativo, montadas en camión o portátiles, que colocan todo el sistema de ductos bajo succión. Luego agitamos cada tramo con cepillos rotativos y látigos de aire comprimido para que los residuos queden atrapados (no dispersos) y sean llevados a una unidad de recolección sellada con filtro HEPA.',
 'Una visita completa cubre cada rejilla de suministro y retorno, las líneas troncales principales, el plenum y el compartimiento del ventilador. Termina con una aplicación opcional de niebla antimicrobiana registrada por la EPA para tratar el moho y los olores desde su origen.',
 ],
 benefits: [
 { title: 'Aire interior más limpio', text: 'Retira el polvo, la caspa de mascotas y el polen que disparan alergias y asma, algo muy valioso en las casas de Florida que permanecen selladas y con aire acondicionado.' },
 { title: 'Facturas de energía más bajas', text: 'Un sistema limpio mueve el aire con menos resistencia, así que el aire acondicionado llega a la temperatura deseada más rápido y funciona en ciclos más cortos.' },
 { title: 'Mayor vida útil del HVAC', text: 'Menos residuos en el ventilador y en el serpentín significan menos esfuerzo y menos fallas prematuras.' },
 { title: 'Menos polvo que limpiar', text: 'Cuando los ductos dejan de soplar polvo acumulado hacia las habitaciones, las superficies se mantienen limpias por más tiempo.' },
 ],
 process: [
 { title: 'Inspección', text: 'Revisamos el sistema con cámara, confirmamos los puntos de acceso e identificamos cualquier moho o daño antes de empezar.' },
 { title: 'Instalación de aire negativo', text: 'Conectamos la unidad de recolección para que todo el sistema quede bajo succión continua, de modo que nada escape hacia el interior de su casa.' },
 { title: 'Agitación y extracción', text: 'Los cepillos rotativos y los látigos de aire despegan la acumulación de cada tramo mientras se aspira al mismo tiempo.' },
 { title: 'Desinfección y verificación', text: 'Tratamiento antimicrobiano opcional y, al terminar, un recorrido de revisión con fotos de antes y después.' },
 ],
 quickFacts: [
 { label: 'Precio típico', value: '$300 a $600 por sistema' },
 { label: 'Frecuencia recomendada', value: 'Cada 3 a 5 años' },
 { label: 'Tiempo en sitio', value: '2 a 4 horas' },
 { label: 'Norma seguida', value: 'Extracción en la fuente NADCA ACR' },
 ],
 faq: [
 { question: 'Con qué frecuencia se deben limpiar los conductos de aire en Florida?', answer: 'Cada 3 a 5 años en la mayoría de las casas, y con más frecuencia si tiene mascotas, alergias, una remodelación reciente o antecedentes de moho. La humedad de Florida acelera la acumulación de moho y polvo.' },
 { question: 'Realmente mejora la calidad del aire la limpieza de conductos?', answer: 'Sí. La limpieza por extracción en la fuente retira de manera física el polvo, la caspa y las esporas de moho acumuladas en los ductos, de modo que dejan de recircular hacia los espacios habitados.' },
 { question: 'Cuánto tarda la limpieza de conductos de aire?', answer: 'Una casa típica de Florida con un solo sistema toma de 2 a 4 horas, según la cantidad de rejillas y el nivel de acumulación.' },
 { question: 'Cuánto cuesta la limpieza de conductos de aire en Florida?', answer: 'La mayoría de las casas paga entre $300 y $600 por la limpieza completa de un solo sistema. Las casas más grandes, con varios sistemas o con mucha contaminación por moho cuestan más.' },
 ],
 },
 'dryer-vent-cleaning': {
 name: 'Limpieza de Ductos de Secadora',
 shortName: 'Limpieza de Ductos de Secadora',
 metaTitle: 'Limpieza de Ductos de Secadora en Florida | Prevenga Incendios',
 metaDescription:
 'Limpieza profesional de ductos de secadora en toda Florida. Retiramos la pelusa atrapada para prevenir incendios, reducir el tiempo de secado y bajar el consumo de energía. Con licencia, asegurados y servicio en la misma semana.',
 answer:
 'La limpieza del ducto de secadora retira la pelusa inflamable y los residuos del conducto de escape que va desde su secadora de ropa hasta el exterior de la casa. Es la forma más eficaz de prevenir incendios de secadora y debe hacerse al menos una vez al año.',
 intro: [
 'Los ductos de secadora tapados causan un estimado de más de 13,000 incendios domésticos al año en Estados Unidos. La pelusa es muy inflamable y, cuando restringe el flujo de aire, la secadora se recalienta. Es un riesgo serio que la mayoría de las personas nunca ve porque la acumulación queda oculta dentro de la pared o del tramo del techo.',
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
 'hvac-cleaning': {
 name: 'Limpieza del Aire Acondicionado (Sistema HVAC)',
 shortName: 'Limpieza de AC',
 metaTitle: 'Limpieza del Aire Acondicionado en Florida | Serpentín y Manejadora',
 metaDescription:
 'Limpieza profesional del aire acondicionado (AC) y sistema HVAC en Florida: serpentín evaporador, ventilador, manejadora y línea de drenaje. Recupere la eficiencia y detenga el moho. Con licencia y seguro.',
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
 metaTitle: 'Reparación y Reemplazo de Conductos de Aire en Florida | Sellado y Aislamiento',
 metaDescription:
 'Reparación, sellado y reemplazo de conductos de aire en toda Florida. Corregimos fugas, tramos aplastados y aislamiento dañado para detener la pérdida de energía y mejorar el flujo de aire. Evaluaciones gratis.',
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
 name: 'Remediación de Moho en Conductos de Aire',
 shortName: 'Remediación de Moho',
 metaTitle: 'Eliminación y Remediación de Moho en Conductos de Aire en Florida',
 metaDescription:
 'Remediación de moho en conductos de aire en toda Florida. Identificamos, eliminamos y prevenimos el moho en ductos y sistemas HVAC con antimicrobianos registrados por la EPA. Inspecciones gratis.',
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
 metaTitle: 'Desinfección y Desodorización de Conductos de Aire en Florida',
 metaDescription:
 'Desinfección y desodorización de conductos de aire en Florida con niebla antimicrobiana registrada por la EPA para eliminar bacterias, moho y olores después de la limpieza. Segura para familias y mascotas.',
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
 metaTitle: 'Limpieza Comercial de Conductos de Aire en Florida | Oficinas, Comercios y Más',
 metaDescription:
 'Limpieza comercial de conductos de aire en toda Florida para oficinas, restaurantes, comercios, centros médicos y propiedades de varias unidades. Horarios fuera de operación, normas NADCA y documentación completa.',
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
 metaTitle: 'Instalación de Luz UV para HVAC en Florida | Purificación de Aire',
 metaDescription:
 'Instalación de luz UV para HVAC en toda Florida. La purificación UV-C elimina moho y bacterias en el serpentín y en el aire en movimiento, ideal para las casas húmedas de Florida. Cotizaciones gratis.',
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
 metaTitle: 'Pruebas de Calidad del Aire Interior en Florida | Análisis de Moho y Alérgenos',
 metaDescription:
 'Pruebas de calidad del aire interior en toda Florida. Medimos moho, alérgenos, humedad y partículas para que sepa qué hay en su aire y cómo corregirlo. Resultados de laboratorio rápidos.',
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
 'Retiro e instalación de aislamiento de ático en toda Florida. Retiramos el aislamiento contaminado y agregamos aislamiento que ahorra energía para reducir las facturas de enfriamiento en el calor de Florida. Cotizaciones gratis.',
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
