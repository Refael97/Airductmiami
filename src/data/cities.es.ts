/**
 * Contenido en español (intro y local) para cada ciudad de Florida.
 * Va emparejado con src/data/cities.ts por el mismo `slug`.
 *
 * Se usa para servir versiones en español de las páginas locales de
 * /service-areas/{slug}, manteniendo detalles locales (clima, humedad,
 * barrios, aire salino) para que cada página tenga texto único.
 */

export interface CityEsContent {
 intro: string;
 local: string;
 region: string; // Etiqueta de región en español
}

export const cityEsContent: Record<string, CityEsContent> = {
 // ---- Sur de Florida ----
 'miami': {
 intro: 'El calor intenso y la humedad costera de Miami mantienen los aires acondicionados funcionando casi todo el año, así que tener ductos limpios y eficientes es clave tanto para su comodidad como para su salud.',
 local: 'Desde los condominios de gran altura en Brickell hasta las casas unifamiliares de los suburbios, el aire salino y la humedad de Miami aceleran la formación de moho dentro de los ductos y las serpentinas, uno de los problemas más comunes que tratamos por aquí.',
 region: 'Sur de Florida',
 },
 'miami-beach': {
 intro: 'La ubicación frente al mar de Miami Beach significa aire salino y humedad constantes que desgastan los sistemas de aire acondicionado y los ductos.',
 local: 'Los históricos condominios Art Deco y las residencias frente a la playa son especialmente propensos al moho en los ductos, y el aire cargado de sal puede corroer y ensuciar los componentes del aire acondicionado más rápido que tierra adentro.',
 region: 'Sur de Florida',
 },
 'hialeah': {
 intro: 'La densa mezcla de casas antiguas y viviendas multifamiliares de Hialeah hace que el mantenimiento regular de ductos de aire y de tubos de secadora sea muy importante para la seguridad y la calidad del aire.',
 local: 'Muchas casas de Hialeah tienen sistemas de aire acondicionado antiguos y tramos largos de tubo de secadora, así que la acumulación de pelusa y el polvo en los ductos son preocupaciones frecuentes para las familias que atendemos.',
 region: 'Sur de Florida',
 },
 'coral-gables': {
 intro: 'Las históricas casas de estilo mediterráneo de Coral Gables merecen un cuidado profesional y cuidadoso de los ductos, que proteja tanto la calidad del aire interior como el carácter de la propiedad.',
 local: 'La copa madura de los árboles en Coral Gables agrega polen y residuos orgánicos al aire, mientras que los ductos antiguos de sus casas emblemáticas se benefician de una limpieza y un sellado expertos.',
 region: 'Sur de Florida',
 },
 'kendall': {
 intro: 'Los extensos vecindarios suburbanos de Kendall dependen de sistemas centrales de aire acondicionado que trabajan mucho y se benefician de la limpieza y el mantenimiento regular de los ductos.',
 local: 'Las casas familiares por todo Kendall suelen usar el aire acondicionado sin parar en verano, lo que hace comunes el moho en las serpentinas y el polvo en los ductos, y convierte la eficiencia de los ductos en un factor real de la factura de enfriamiento.',
 region: 'Sur de Florida',
 },
 'homestead': {
 intro: 'El entorno agrícola de Homestead y su clima cálido implican polvo y polen adicionales que, con el tiempo, se depositan en los ductos del hogar.',
 local: 'La cercanía a los campos de cultivo trae polvo fino y polen de temporada al interior, así que los propietarios de Homestead suelen notar una acumulación de polvo más rápida alrededor de sus rejillas de ventilación.',
 region: 'Sur de Florida',
 },
 'pinecrest': {
 intro: 'Las amplias casas y el frondoso paisajismo de Pinecrest requieren un cuidado minucioso de los ductos para mantener el aire interior limpio y los sistemas eficientes.',
 local: 'Los lotes grandes con vegetación abundante hacen que llegue más polen y residuo orgánico al sistema de aire acondicionado en este apacible pueblo al sur de Miami.',
 region: 'Sur de Florida',
 },
 'north-miami': {
 intro: 'La humedad costera de North Miami y su parque de viviendas ya establecido hacen que la limpieza rutinaria de ductos y la prevención del moho sean una inversión inteligente.',
 local: 'Una mezcla de casas unifamiliares y condominios que van envejeciendo suele esconder polvo en los ductos y moho temprano en las serpentinas, que nuestra limpieza con remoción de origen resuelve.',
 region: 'Sur de Florida',
 },
 'aventura': {
 intro: 'La vida en condominios de gran altura de Aventura viene con sistemas de aire acondicionado compartidos e individuales que se benefician de una limpieza profesional de ductos y serpentinas.',
 local: 'Las torres frente al mar por aquí enfrentan aire salino y humedad constante, y los manejadores de aire de los condominios son puntos ideales para el moho en las serpentinas que nos especializamos en eliminar.',
 region: 'Sur de Florida',
 },
 'fort-lauderdale': {
 intro: 'El estilo de vida junto al agua de Fort Lauderdale y la humedad durante todo el año hacen que tener ductos limpios y libres de moho sea esencial para un aire interior saludable.',
 local: 'Con cientos de millas de canales y una humedad costera constante, las casas de Fort Lauderdale son especialmente propensas al moho en los ductos y en el manejador de aire.',
 region: 'Sur de Florida',
 },
 'hollywood': {
 intro: 'Los vecindarios junto a la playa y las casas más antiguas de Hollywood hacen importante el servicio regular de ductos de aire y de tubos de secadora, por comodidad y por seguridad.',
 local: 'El aire salino del Atlántico, sumado a un parque de casas de mediados del siglo pasado, hace que el sellado de ductos y la prevención del moho sean necesidades frecuentes entre los propietarios de Hollywood.',
 region: 'Sur de Florida',
 },
 'pembroke-pines': {
 intro: 'Las grandes comunidades planificadas de Pembroke Pines dependen de un aire acondicionado central eficiente, donde ductos limpios se traducen directamente en facturas de enfriamiento más bajas.',
 local: 'Las numerosas urbanizaciones nuevas de la ciudad igual acumulan polvo de construcción y polen en sus ductos, y los tramos largos de tubo de secadora son comunes en las casas de dos pisos.',
 region: 'Sur de Florida',
 },
 'miramar': {
 intro: 'Los vecindarios de rápido crecimiento de Miramar y su clima cálido hacen del mantenimiento de ductos y de tubos de secadora una parte práctica del cuidado del hogar.',
 local: 'Muchas casas de Miramar son construcciones grandes de dos pisos con tubos de secadora extensos, donde la limpieza anual es importante para prevenir incendios y para secar con eficiencia.',
 region: 'Sur de Florida',
 },
 'pompano-beach': {
 intro: 'El entorno costero de Pompano Beach expone los sistemas de aire acondicionado del hogar al aire salino y a la humedad que favorecen el moho y reducen la eficiencia.',
 local: 'Tanto los condominios frente a la playa como las casas tierra adentro enfrentan la humedad que impulsa el moho en serpentinas y ductos a lo largo de este tramo de la costa de Broward.',
 region: 'Sur de Florida',
 },
 'plantation': {
 intro: 'Los vecindarios establecidos y arbolados de Plantation se benefician de una limpieza profesional de ductos que elimina el polen y el polvo acumulados.',
 local: 'La abundancia de árboles maduros de la ciudad hace que entre más polen y residuos al sistema de aire acondicionado, un desencadenante común de las quejas por alergias que ayudamos a resolver.',
 region: 'Sur de Florida',
 },
 'davie': {
 intro: 'El carácter semirrural de Davie y su clima cálido traen polvo y polen adicionales que hacen que valga la pena una limpieza regular de ductos.',
 local: 'Con sus propiedades ecuestres y sus terrenos abiertos, las casas de Davie suelen ver llegar más polvo de campo y residuo orgánico a los ductos que en las zonas suburbanas típicas.',
 region: 'Sur de Florida',
 },
 'sunrise': {
 intro: 'Las casas suburbanas de Sunrise dependen de un aire acondicionado constante, lo que hace que ductos y serpentinas limpios sean clave para la eficiencia y la calidad del aire.',
 local: 'El uso del aire acondicionado durante todo el año en Sunrise mantiene los manejadores de aire húmedos y propensos al moho en las serpentinas, uno de los principales problemas que atendemos para los propietarios locales.',
 region: 'Sur de Florida',
 },
 'coral-springs': {
 intro: 'Los vecindarios familiares y el frondoso paisajismo de Coral Springs hacen de la limpieza rutinaria de ductos una forma inteligente de proteger la calidad del aire interior.',
 local: 'El verdor de esta ciudad planificada agrega polen al aire, y sus numerosas casas de dos pisos tienen tubos de secadora largos que se benefician de una limpieza anual.',
 region: 'Sur de Florida',
 },
 'coconut-creek': {
 intro: 'Los verdes vecindarios de Coconut Creek, amigables con las mariposas, igual reciben polen y polvo que con el tiempo se depositan en los ductos del hogar.',
 local: 'Conocida como la Capital de las Mariposas, el abundante paisajismo de Coconut Creek significa material orgánico adicional en el aire que los filtros y ductos del aire acondicionado deben atrapar.',
 region: 'Sur de Florida',
 },
 'deerfield-beach': {
 intro: 'La humedad frente al mar y el aire salino de Deerfield Beach hacen especialmente importante tener ductos libres de moho y serpentinas limpias.',
 local: 'Los condominios y las casas costeras de aquí lidian con la sal y la humedad que aceleran el moho y la corrosión del aire acondicionado en el límite entre Broward y Palm Beach.',
 region: 'Sur de Florida',
 },
 'boca-raton': {
 intro: 'Las casas de alto nivel de Boca Raton y su clima costero merecen un cuidado meticuloso de los ductos para proteger la calidad del aire y la eficiencia del sistema.',
 local: 'Desde comunidades cerradas hasta mansiones frente a la playa, la humedad de Boca impulsa el moho en serpentinas y ductos, mientras que su paisajismo maduro agrega polen a la mezcla.',
 region: 'Sur de Florida',
 },
 'delray-beach': {
 intro: 'El encanto costero de Delray Beach viene con una humedad que hace de la limpieza regular de ductos y serpentinas una parte sensata del mantenimiento del hogar.',
 local: 'Tanto los bungalós históricos como los condominios más nuevos enfrentan el aire salino y la humedad que favorecen el moho en los ductos a lo largo de esta costa del condado de Palm Beach.',
 region: 'Sur de Florida',
 },
 'boynton-beach': {
 intro: 'La mezcla de casas costeras e interiores de Boynton Beach se beneficia de una limpieza profesional de ductos para combatir el moho y el polvo impulsados por la humedad.',
 local: 'Las comunidades en crecimiento de aquí usan mucho el aire acondicionado contra el calor costero, lo que mantiene húmedos los manejadores de aire y hace relevante el mantenimiento de ductos todo el año.',
 region: 'Sur de Florida',
 },
 'west-palm-beach': {
 intro: 'El entorno frente al agua de West Palm Beach y su clima cálido hacen que tener ductos limpios y eficientes sea importante tanto para la comodidad como para la salud.',
 local: 'Una combinación de condominios del centro y vecindarios históricos implica sistemas de aire acondicionado variados, todos enfrentando la humedad costera que favorece el moho en los ductos.',
 region: 'Sur de Florida',
 },
 // ---- Bahía de Tampa ----
 'tampa': {
 intro: 'El clima caluroso y húmedo de la costa del Golfo en Tampa mantiene los sistemas de aire acondicionado trabajando de más, lo que hace esenciales unos ductos limpios y serpentinas libres de moho.',
 local: 'Desde los bungalós históricos de Hyde Park hasta las urbanizaciones modernas de New Tampa, la humedad que viene de la bahía hace del moho en serpentinas y ductos una preocupación frecuente para los propietarios.',
 region: 'Bahía de Tampa',
 },
 'st-petersburg': {
 intro: 'El clima peninsular de St. Petersburg rodea las casas con aire húmedo del Golfo que favorece el moho en los ductos y en los sistemas de aire acondicionado.',
 local: 'Rodeadas de agua por tres lados, las casas de St. Pete lidian con una humedad especialmente alta, lo que hace de la prevención del moho en ductos y serpentinas una prioridad.',
 region: 'Bahía de Tampa',
 },
 'clearwater': {
 intro: 'La humedad junto a la playa y el aire salino de Clearwater hacen de la limpieza regular de ductos y del mantenimiento de serpentinas una defensa inteligente contra el moho.',
 local: 'Los condominios frente al Golfo y las casas tierra adentro comparten el mismo reto: una humedad constante que alimenta el moho del aire acondicionado y reduce la eficiencia.',
 region: 'Bahía de Tampa',
 },
 // ---- Centro de Florida ----
 'orlando': {
 intro: 'El clima caluroso y húmedo de Orlando, junto con su rápido crecimiento, significa muchas casas con sistemas de aire acondicionado que trabajan duro y se benefician de un cuidado profesional de los ductos.',
 local: 'La humedad del centro de Florida impulsa el moho en las serpentinas y el polvo en los ductos, mientras que el auge de la construcción nueva en Orlando deja residuos finos de obra dentro de los ductos recién instalados.',
 region: 'Centro de Florida',
 },
 'kissimmee': {
 intro: 'El clima cálido de Kissimmee y sus muchas casas de vacaciones y de alquiler hacen que el mantenimiento regular de ductos y de tubos de secadora sea especialmente valioso.',
 local: 'Las propiedades de alquiler y vacacionales, con mucha rotación de huéspedes, tienen un uso intenso del aire acondicionado y la secadora, así que la limpieza rutinaria es importante para la seguridad y la comodidad de quienes se hospedan.',
 region: 'Centro de Florida',
 },
 'winter-park': {
 intro: 'Las casas históricas de Winter Park y su copa madura de árboles hacen que valga la pena una limpieza minuciosa de ductos para un aire más limpio y saludable.',
 local: 'La célebre copa de robles de la ciudad agrega abundante polen y residuos de hojas al aire, que se depositan en los ductos y provocan alergias.',
 region: 'Centro de Florida',
 },
 'lakeland': {
 intro: 'Los numerosos lagos de Lakeland y su clima húmedo crean las condiciones de humedad que favorecen la formación de moho en los ductos del hogar.',
 local: 'Con más de 30 lagos con nombre, la humedad ambiental de Lakeland es alta, lo que hace la prevención del moho en ductos y serpentinas particularmente relevante por aquí.',
 region: 'Centro de Florida',
 },
 'jacksonville': {
 intro: 'El clima subtropical húmedo de Jacksonville y sus extensos vecindarios hacen que tener ductos limpios y eficientes sea importante durante todo el año.',
 local: 'Como la ciudad más grande de Florida por superficie, Jacksonville abarca casas costeras e interiores que enfrentan la humedad que impulsa el polvo en los ductos y el moho en las serpentinas.',
 region: 'Norte de Florida',
 },
 // ---- Suroeste de Florida ----
 'fort-myers': {
 intro: 'El clima caluroso de la costa del Golfo en Fort Myers y su población de temporada hacen de la limpieza rutinaria de ductos y de la prevención del moho una inversión inteligente.',
 local: 'Las casas de temporada que permanecen cerradas y húmedas durante meses son propensas al moho en ductos y serpentinas que remediamos con frecuencia en el área de Fort Myers.',
 region: 'Suroeste de Florida',
 },
 'cape-coral': {
 intro: 'Los vecindarios bordeados de canales de Cape Coral y la humedad del Golfo hacen que tener ductos libres de moho sea esencial para un aire interior saludable.',
 local: 'Con más canales que cualquier ciudad del mundo, la humedad junto al agua de Cape Coral es implacable, condiciones ideales para el moho del aire acondicionado en el que nos especializamos.',
 region: 'Suroeste de Florida',
 },
 'naples': {
 intro: 'Las casas costeras de alto nivel de Naples y su clima cálido y húmedo requieren un cuidado meticuloso de los ductos para proteger la calidad del aire y la eficiencia.',
 local: 'Las mansiones de lujo y las residencias de temporada de aquí suelen permanecer cerradas y húmedas fuera de temporada, lo que favorece el moho en ductos y serpentinas que necesita atención profesional.',
 region: 'Suroeste de Florida',
 },
 'bonita-springs': {
 intro: 'La humedad de la costa del Golfo en Bonita Springs hace de la limpieza regular de ductos y serpentinas una protección práctica contra el moho y la falta de eficiencia.',
 local: 'Entre Naples y Fort Myers, Bonita Springs comparte la humedad costera que mantiene húmedos los manejadores de aire y hace importante el mantenimiento de los ductos.',
 region: 'Suroeste de Florida',
 },
 'sarasota': {
 intro: 'Las hermosas playas del Golfo en Sarasota vienen con humedad y aire salino que hacen importante tener ductos limpios y libres de moho en las casas locales.',
 local: 'Tanto los condominios en las islas de barrera como las casas del continente enfrentan la humedad costera que alimenta el moho del aire acondicionado a lo largo del tramo de Sarasota en el Golfo.',
 region: 'Suroeste de Florida',
 },
 'bradenton': {
 intro: 'La ubicación de Bradenton, junto al río y cerca del Golfo, rodea las casas con la humedad que favorece el moho en los ductos.',
 local: 'A lo largo del río Manatee y cerca del Golfo, el aire cargado de humedad de Bradenton hace que la prevención del moho en ductos y serpentinas valga especialmente la pena.',
 region: 'Suroeste de Florida',
 },
};
