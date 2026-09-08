/**
 * Contenido en español del catálogo de repuestos, emparejado con
 * src/data/parts.ts por el mismo `slug`.
 *
 * Escrito, no traducido. El lector en español que llega aquí tiene la misma
 * puerta rota que el lector en inglés, pero busca con otras palabras: "puerta
 * de garaje no abre", "resorte roto", "ruido fuerte en el garaje". Los campos
 * `symptoms` son los que ganan esa visita, así que están escritos con las
 * palabras que la gente realmente escribe y no con la traducción literal.
 *
 * Las mismas tres reglas que en el archivo en inglés: ningún precio de pieza
 * suelta, la respuesta sobre hacerlo uno mismo es honesta aunque nos cueste
 * el trabajo, y ningún esquema Product.
 */

import type { PartEs } from './types';

export const partEs: Record<string, PartEs> = {
  'torsion-spring': {
    name: 'Resorte de Torsión de Puerta de Garaje',
    shortName: 'Resorte de torsión',
    metaTitle: 'Cambio de Resorte de Torsión en Florida | Señales y Precio',
    metaDescription:
      'Cómo saber que se rompió el resorte de torsión, por qué fallan en Florida y cuánto cuesta el cambio instalado. El técnico llega con el resorte correcto para su puerta.',
    answer:
      'El resorte de torsión es la barra enrollada que va montada horizontalmente arriba del marco de la puerta, y carga casi todo el peso de la puerta. Cuando se rompe casi siempre se oye: un estruendo seco en el garaje, muchas veces de noche o en la primera apertura de una mañana fresca. Después la puerta no sube, o pesa muchísimo al levantarla a mano, y el motor forcejea sin moverla. El cambio cuesta entre 150 y 350 dólares instalado, y no es un trabajo para hacer usted mismo.',
    intro: [
      'Casi todo el levantamiento de una puerta de garaje lo hacen los resortes, no el motor. El motor es una guía que le dice a una puerta equilibrada hacia dónde ir. El resorte de torsión es lo que hace que la puerta esté equilibrada, y por eso una puerta de 70 kilos se puede levantar con una mano cuando todo funciona.',
      'Esa energía almacenada es la razón por la que un resorte roto suena tan fuerte y la razón por la que uno tensado es peligroso. Un resorte de torsión bajo tensión guarda fuerza suficiente para romper huesos, y la suelta toda de golpe si las barras de tensado se resbalan. Cada año llegan manos y caras a urgencias por exactamente este trabajo.',
      'Normalmente usted puede confirmar el diagnóstico desde el piso sin tocar nada. Mire la barra que va arriba de la puerta. Un resorte entero es una espiral continua. Uno roto tiene una separación visible de cinco a ocho centímetros donde se partió, y las dos mitades quedaron separadas sobre la barra.',
    ],
    symptoms: [
      'Un estruendo fuerte en el garaje sin que se vea nada roto después',
      'La puerta no abre, o sube unos centímetros y se detiene',
      'El motor funciona y forcejea pero la puerta no se mueve',
      'La puerta pesa muchísimo al levantarla a mano con la liberación manual',
      'Una separación visible de cinco a ocho centímetros en la espiral de arriba',
      'La puerta se cae rápido en vez de quedarse quieta cuando la suelta a media altura',
    ],
    whyItFails: [
      'Los resortes se miden en ciclos, no en años. Uno estándar es de unos 10,000 ciclos, y un ciclo es una apertura y un cierre. Una familia que entra y sale cuatro veces al día llega a eso en unos siete años, y por eso tantos se rompen sin aviso más o menos a la misma edad.',
      'La humedad de Florida y el aire salino de la costa corroen el acero de afuera hacia adentro. Una espiral picada por corrosión concentra el esfuerzo en la picadura y se rompe antes de llegar a su número de ciclos, y en las casas a pocos kilómetros del agua esto se ve claramente.',
      'El calor también cuenta. Un garaje que llega a 43 grados durante un verano de Florida dilata y contrae el acero todos los días, y la fatiga del metal se acumula.',
    ],
    diyNote:
      'Este es el único trabajo de este sitio que le decimos directamente que no haga. Un resorte de torsión tensado guarda energía suficiente para romperle un brazo o algo peor, las barras de tensado tienen que ser del diámetro correcto y estar bien metidas, y un resorte que no corresponde al peso de la puerta le deja una puerta que no se queda quieta. Si lo que le preocupa es el dinero, la comparación honesta es 150 a 350 dólares por el trabajo bien hecho contra una visita a la sala de emergencias.',
    quickFacts: [
      { label: 'Vida típica', value: '10,000 ciclos, unos 7 años' },
      { label: 'Precio instalado', value: 'Desde $150' },
      { label: 'Tiempo en sitio', value: '60 a 90 minutos' },
      { label: '¿Hacerlo usted?', value: 'No' },
      { label: 'Cambiar en par', value: 'Sí, en puerta de dos resortes' },
    ],
    faq: [
      {
        question: 'Se rompió uno. ¿Tengo que cambiar los dos?',
        answer:
          'En una puerta de dos resortes, sí, y vale la pena entender por qué en vez de creerlo sin más. Los dos tienen la misma edad y han hecho los mismos ciclos, así que el segundo no está lejos. Cambiar uno solo significa pagar otra visita dentro de uno o dos años, y mientras tanto deja la puerta jalando disparejo, lo cual desgasta los cables y los rodamientos de un lado. Nosotros cotizamos los dos y le decimos por qué.',
      },
      {
        question: '¿Puedo abrir la puerta con el resorte roto?',
        answer:
          'Se puede, con la liberación manual, pero tenga cuidado y pida ayuda. Sin el resorte usted está levantando el peso completo de la puerta, que son entre 60 y 160 kilos según el tamaño y el material. Apuntálela con algo firme en vez de confiar en que se quede arriba, porque sin resorte baja tan rápido como la gravedad lo permita.',
      },
      {
        question: '¿Cómo sé si tengo resortes de torsión o de extensión?',
        answer:
          'Fíjese dónde están. Los de torsión van sobre una barra horizontal arriba del marco de la puerta. Los de extensión corren a lo largo de los rieles horizontales a cada lado, paralelos al techo. La mayoría de los garajes de Florida construidos desde los ochenta usan torsión, que es el sistema más fuerte y más seguro de los dos.',
      },
    ],
  },

  'extension-spring': {
    name: 'Resorte de Extensión de Puerta de Garaje',
    shortName: 'Resorte de extensión',
    metaTitle: 'Cambio de Resorte de Extensión en Florida | Señales y Precio',
    metaDescription:
      'Los resortes de extensión corren por los rieles laterales y se estiran al cerrar. Cómo detectar uno roto, por qué importa el cable de seguridad y cuánto cuesta instalado.',
    answer:
      'Los resortes de extensión son los resortes largos que corren por los rieles horizontales a cada lado de la puerta, paralelos al techo. Se estiran cuando la puerta baja y la jalan de regreso hacia arriba. Se ven sobre todo en puertas de Florida más antiguas y más ligeras, y cuando uno se rompe la puerta sube chueca, se atora de un lado, o no sube. El cambio cuesta entre 150 y 350 dólares instalado, siempre en par, y cualquier resorte de extensión sin cable de seguridad por dentro debe tratarse como urgente.',
    intro: [
      'Un resorte de extensión trabaja estirándose y no torciéndose. Con la puerta abajo el resorte está en su máxima extensión y guardando la mayor energía, y a medida que la puerta sube el resorte se relaja. Dos resortes, uno de cada lado, se reparten la carga.',
      'El punto de seguridad importante es el cable de contención. Un cable de acero debe pasar por dentro de cada resorte de extensión y anclarse en los dos extremos. Su única función es atrapar el resorte si se revienta, porque un resorte tensado que se suelta se convierte en un pedazo de acero cruzando el garaje a velocidad. Muchas instalaciones antiguas de Florida no tienen ningún cable de contención, y si la suya no lo tiene, vale la pena resolverlo se haya roto el resorte o no.',
      'Esto lo puede revisar desde el piso. Párese atrás con la puerta cerrada y mire a lo largo de cada riel. Un resorte roto es evidente: está separado, quedó flojo, o un lado se ve claramente más largo que el otro.',
    ],
    symptoms: [
      'La puerta sube chueca, con un lado claramente más alto que el otro',
      'Un resorte cuelga flojo o se ve claramente separado',
      'La puerta se traba y raspa en el riel de un lado',
      'El motor forcejea, o la puerta se detiene a medio camino',
      'Un chasquido fuerte y después la puerta se cae o se atora',
      'Un resorte se ve notablemente más estirado y más largo que el otro',
    ],
    whyItFails: [
      'Igual que los de torsión, los de extensión se miden en ciclos y no en años, y llegan al final de esa cuenta juntos porque han hecho el mismo trabajo.',
      'Una puerta con resortes de extensión suele ser una puerta vieja de Florida, lo que significa que los resortes ya pasaron veinte veranos húmedos o más. La corrosión pica el acero y el resorte se rompe en la picadura en vez de por la cuenta de ciclos.',
      'El desgaste disparejo remata el asunto. Una vez que un resorte se debilita, el otro carga más de lo que le toca, así que la segunda falla llega mucho más rápido de lo que tardó la primera.',
    ],
    diyNote:
      'No es trabajo para el dueño de casa. Un resorte de extensión completamente estirado con la puerta cerrada guarda energía suficiente para causar una lesión seria, y los resortes, las poleas y los cables tienen que salir y volver en el orden correcto y con la tensión pareja. Si sus resortes no tienen cable de seguridad por dentro, dígalo cuando llame, porque eso lo instalamos como parte del trabajo.',
    quickFacts: [
      { label: 'Vida típica', value: '10,000 ciclos, unos 7 años' },
      { label: 'Precio instalado', value: 'Desde $150' },
      { label: 'Tiempo en sitio', value: '60 a 90 minutos' },
      { label: '¿Hacerlo usted?', value: 'No' },
      { label: 'Cable de seguridad', value: 'Obligatorio en cada resorte' },
    ],
    faq: [
      {
        question: '¿Para qué sirve el cable que va por dentro del resorte?',
        answer:
          'Contiene el resorte si se rompe. Un resorte de extensión bajo carga que se revienta sin cable por dentro sale disparado por el garaje con fuerza real, y el cable convierte eso en un resorte colgando inofensivamente de un alambre. Muchas puertas viejas de Florida se instalaron sin ellos o los perdieron en alguna reparación anterior. Nosotros los ponemos de serie y le decimos si a la suya le faltan.',
      },
      {
        question: '¿Debería cambiarme a un sistema de torsión?',
        answer:
          'Muchas veces vale la pena cotizarlo, y le decimos con honestidad si en su puerta conviene. La torsión es más segura, dura más, equilibra mejor y hace menos ruido. También cuesta más porque necesita barra, soportes y montaje, así que en una puerta pequeña y ligera que ya está por el final de su propia vida, la respuesta suele ser cambiar los resortes de extensión y gastar la diferencia en otra cosa.',
      },
      {
        question: '¿Se puede cambiar solo un resorte de extensión?',
        answer:
          'Físicamente se puede y no lo recomendamos. Los dos tienen la misma edad y los mismos ciclos, así que la segunda falla viene atrás. Peor todavía, un resorte nuevo junto a uno cansado jala disparejo, y entonces la puerta desgasta más rápido los rodamientos y el cable del lado débil.',
      },
    ],
  },

  'lift-cable': {
    name: 'Cable de Puerta de Garaje',
    shortName: 'Cable',
    metaTitle: 'Cambio de Cable de Puerta de Garaje en Florida | Deshilachado y Roto',
    metaDescription:
      'Los cables de acero que levantan la puerta se deshilachan, se salen del tambor y se revientan. Cómo saberlo, por qué la humedad de Florida los castiga y cuánto cuesta instalado.',
    answer:
      'Los cables son los dos cables de acero que van del soporte inferior de la puerta hasta un tambor en cada extremo de la barra de resortes. Convierten la tensión del resorte en levantamiento. Cuando uno se deshilacha o se sale de su tambor, la puerta queda chueca, se atora en el riel, o cuelga inclinada. El cambio cuesta entre 95 y 300 dólares instalado, y una puerta con un cable suelto no se debe seguir usando.',
    intro: [
      'El cable es el eslabón entre el resorte y la puerta. El resorte guarda la energía, el tambor enrolla el cable, y el cable jala hacia arriba la esquina inferior de la puerta. Dos cables, uno en cada esquina, la mantienen pareja.',
      'Por eso un problema de cable siempre se ve como un problema de nivel. Si un cable se sale del tambor o se rompe, esa esquina deja de ser jalada mientras la otra sigue, y la puerta se atraviesa de inmediato en el riel. Y por eso también seguir usando el motor lo empeora: cada ciclo saca la puerta más de escuadra.',
      'Los cables son baratos y la mano de obra es corta. La razón para atenderlo rápido no es el costo de la pieza, es que una puerta atravesada dobla rieles y daña rodamientos y paneles, y esas sí son las piezas caras.',
    ],
    symptoms: [
      'La puerta cuelga inclinada, con un lado más abajo que el otro',
      'Un cable se ve flojo, colgando o fuera de su tambor',
      'Hilos deshilachados o manchas de óxido donde corre el cable',
      'La puerta se atora a medio camino y rechina en el riel',
      'Un chasquido y después la puerta se cae de un lado',
      'La puerta cierra dispareja y deja una cuña de luz en un borde',
    ],
    whyItFails: [
      'La humedad de Florida es el enemigo principal. Un cable galvanizado resiste la corrosión hasta que el recubrimiento se raya o se desgasta en el tambor, y a partir de ahí los hilos se oxidan por dentro, donde usted no los ve.',
      'La sal de la costa lo acelera muchísimo. En comunidades de playa vemos cables fallar años antes que el mismo cable tierra adentro, y la falla es corrosión y no desgaste.',
      'La desalineación hace el resto. Una puerta un poco fuera de escuadra, o un tambor que se aflojó en la barra, hace que el cable roce donde debería rodar, y un cable que roza se deshilacha en ese punto hasta que se parte.',
    ],
    diyNote:
      'Cambiar un cable significa primero quitar la tensión del resorte, y eso lo devuelve al terreno del resorte de torsión con los mismos riesgos. Además hay que dejarlo con la misma cantidad de cable en los dos tambores, o la puerta nunca va a quedar a escuadra. Esto es trabajo corto para un técnico con la herramienta correcta y una tarde muy mala para cualquier otra persona.',
    quickFacts: [
      { label: 'Precio instalado', value: 'Desde $95' },
      { label: 'Tiempo en sitio', value: '45 a 90 minutos' },
      { label: 'Cambiar en par', value: 'Recomendado' },
      { label: '¿Hacerlo usted?', value: 'No' },
      { label: '¿Seguir usándola?', value: 'No, deténgase hasta repararla' },
    ],
    faq: [
      {
        question: 'El cable se salió del tambor pero no está roto. ¿Sale más barato?',
        answer:
          'A veces sí, y se lo decimos en sitio en lugar de adivinar por teléfono. Si el cable está sano y solo se brincó del tambor, volver a enrollarlo y tensarlo es todo el trabajo. Pero un cable rara vez se brinca sin motivo, así que buscamos qué lo permitió: un tambor flojo, un riel doblado, un balero gastado o una puerta fuera de escuadra. Arreglar el síntoma y dejar la causa significa que usted nos vuelve a llamar.',
      },
      {
        question: '¿Puedo seguir usando la puerta hasta que lleguen?',
        answer:
          'Por favor no. Cada ciclo con un cable suelto saca la puerta más de escuadra, y eso convierte un trabajo de cable en uno de cable, rodamientos, riel y posiblemente panel. Jale la liberación manual, deje la puerta abajo si puede, y estacione afuera si hace falta.',
      },
      {
        question: '¿Cuánto deberían durar los cables en Florida?',
        answer:
          'Tierra adentro, más o menos lo mismo que los resortes, unos siete a diez años. A pocos kilómetros del agua salada, menos, y espere que la falla sea corrosión y no desgaste. Vale la pena revisarlos cada vez que se le da servicio a cualquier otra cosa de la puerta, que es parte de lo que cubre un mantenimiento.',
      },
    ],
  },

  roller: {
    name: 'Rodamientos de Puerta de Garaje',
    shortName: 'Rodamientos',
    metaTitle: 'Cambio de Rodamientos de Puerta de Garaje en Florida | Puerta Ruidosa',
    metaDescription:
      'Los rodamientos gastados son la razón más común de que una puerta de garaje haga ruido. Qué hacen, cómo saber que los suyos terminaron y cuánto cuestan los de nailon instalados.',
    answer:
      'Los rodamientos son las ruedas pequeñas con vástago que permiten que cada sección de la puerta corra por el riel. Una puerta típica tiene entre diez y doce. Cuando se les acaban los baleros la puerta se vuelve ruidosa, vibra al moverse y desgasta el riel. Son de las piezas más baratas de la puerta y de las que más diferencia hacen, y cambiar el juego completo normalmente se hace dentro de un mantenimiento desde 85 dólares.',
    intro: [
      'Cada panel de la puerta lleva un rodamiento de cada lado, y cada rodamiento tiene un balero pequeño dentro de la rueda. Cuando esos baleros están bien la puerta se desliza. Cuando están secos o rotos la rueda patina sobre el riel en vez de rodar, y eso es el rechinido que usted oye.',
      'Hay dos tipos que vale la pena conocer. Los de acero con balero expuesto son los que pone la mayoría de los constructores porque cuestan menos, y son los ruidosos. Los de nailon con balero sellado cuestan un poco más, corren mucho más callados y no se oxidan, lo cual en este estado importa bastante.',
      'Esta es la mejora útil más barata que existe en una puerta de garaje. La gente que lleva años viviendo con una puerta ruidosa muchas veces se sorprende de que la solución sean unas ruedas pequeñas y no un motor nuevo.',
    ],
    symptoms: [
      'La puerta hace ruido, rechina o retumba al moverse',
      'La puerta vibra o da tirones en vez de moverse parejo',
      'Un rodamiento se ve bailando, o una rueda ya se desarmó',
      'Polvo negro o limadura de metal a lo largo del riel',
      'Óxido en los vástagos de los rodamientos o dentro del riel',
      'La puerta se traba siempre en el mismo punto del recorrido',
    ],
    whyItFails: [
      'Los baleros de los rodamientos de acero están expuestos, y un balero expuesto en la humedad de Florida se oxida. Una vez que el balero se traba la rueda deja de girar y empieza a patinar, y ahí empieza el ruido.',
      'El aire salino de la costa lo hace más rápido y se lo hace también a los vástagos, no solo a las ruedas.',
      'Los ciclos hacen el resto. Los rodamientos son la pieza en movimiento constante, así que en una casa con mucho movimiento se acaban bastante antes de que cualquier otra cosa de la puerta pida atención.',
    ],
    diyNote:
      'Los rodamientos de en medio los puede cambiar razonablemente un dueño de casa cuidadoso, con la puerta abajo, el motor desconectado y uno a la vez. Los de abajo son otra cosa, porque el soporte inferior donde van está bajo la tensión completa del cable, y ese soporte es el que lastima gente. Nuestra recomendación es que si quiere hacer los de en medio, hágalos, y deje el par de abajo para alguien que tenga la puerta apuntalada y la tensión liberada.',
    quickFacts: [
      { label: 'Rodamientos por puerta', value: '10 a 12 normalmente' },
      { label: 'Precio instalado', value: 'Desde $85 con mantenimiento' },
      { label: 'Tiempo en sitio', value: '45 a 60 minutos' },
      { label: 'Nailon vs acero', value: 'El nailon es más callado y no se oxida' },
      { label: '¿Hacerlo usted?', value: 'Los de en medio sí, los de abajo no' },
    ],
    faq: [
      {
        question: '¿Valen la pena los rodamientos de nailon?',
        answer:
          'En Florida sí, y esta es de las pocas mejoras que sí recomendamos. Los baleros sellados de nailon no se oxidan con humedad ni con aire salino, corren notablemente más callados, y duran bastante más que los rodamientos de acero de obra con los que sale de fábrica la mayoría de las puertas. La diferencia de costo es chica y la diferencia de ruido es de las que se notan esa misma noche.',
      },
      {
        question: '¿Los rodamientos gastados pueden dañar otra cosa?',
        answer:
          'Sí, y por eso conviene hacerlos antes de que se acaben del todo. Un rodamiento trabado patina y raya el interior del riel, y un riel rayado se come el siguiente juego de rodamientos más rápido. Si se deja bastante tiempo saca la puerta de alineación, y entonces usted paga trabajo de riel y posiblemente un cable encima.',
      },
      {
        question: '¿Cada cuánto se cambian los rodamientos?',
        answer:
          'Cada cinco a siete años los de acero en este clima, más los de nailon sellado. Una regla más simple: si oye la puerta desde adentro de la casa con la puerta del garaje cerrada, los rodamientos normalmente son la razón.',
      },
    ],
  },

  hinge: {
    name: 'Bisagras de Puerta de Garaje',
    shortName: 'Bisagras',
    metaTitle: 'Cambio de Bisagras de Puerta de Garaje en Florida | Rotas y Gastadas',
    metaDescription:
      'Las bisagras unen las secciones de la puerta y sostienen los rodamientos. Cómo detectar una bisagra rota o con los barrenos ovalados y cuánto cuesta el cambio.',
    answer:
      'Las bisagras unen una sección de la puerta con la siguiente y sostienen los rodamientos que corren por el riel. Van numeradas por posición y el número importa, porque una bisagra en la posición equivocada cambia cómo pasa la puerta por la curva. Una bisagra rota se nota como un chasquido, una separación entre paneles, o una puerta que se traba siempre en el mismo punto. El cambio normalmente se hace dentro de un mantenimiento desde 85 dólares.',
    intro: [
      'Una puerta seccional son cuatro o cinco paneles separados que tienen que comportarse como una sola puerta al subir y como una cadena flexible al dar la vuelta hacia el riel horizontal. Las bisagras son lo que hace ciertas las dos cosas al mismo tiempo.',
      'Vienen marcadas con un número, y el número es una posición, no una medida. La bisagra número uno va en la unión de abajo, la dos arriba de ella, y así. Poner el número equivocado en una posición cambia un poco el desplazamiento del rodamiento, y un poco alcanza para que la puerta se trabe en la curva.',
      'La mayoría de las fallas de bisagra se ven desde el piso con la puerta cerrada. Revise cada unión horizontal buscando grietas en el acero, bisagras que se despegaron del panel, y barrenos de tornillo que se ovalaron, que suele ser la primera señal.',
    ],
    symptoms: [
      'Un chasquido metálico en el mismo punto de cada ciclo',
      'Grietas visibles en una bisagra, normalmente en el doblez',
      'Una separación que crece entre dos secciones de la puerta',
      'Barrenos ovalados, o tornillos que se van aflojando',
      'La puerta se traba o titubea en la curva del riel',
      'Óxido escurriendo desde atrás de una bisagra sobre el panel',
    ],
    whyItFails: [
      'La humedad oxida el acero desde el perno hacia afuera, y un perno oxidado se traba en vez de girar, lo cual manda la carga a la placa de la bisagra en lugar del pivote.',
      'El aire salino de la costa ataca el recubrimiento, y una vez que el recubrimiento se va, la corrosión avanza rápido.',
      'El movimiento hace el resto. Una bisagra flexiona en cada ciclo, así que una bisagra corroída se agrieta en el doblez, y un barreno ovalado deja que el panel se mueva un poco más cada vez hasta que la unión ya no queda a escuadra.',
    ],
    diyNote:
      'Las bisagras de en medio son razonables para un dueño de casa cuidadoso: puerta cerrada, motor desconectado, una bisagra a la vez para que la puerta nunca pierda su forma, y la de repuesto tiene que traer el mismo número que la que salió. La bisagra de abajo es otro asunto, porque en la mayoría de las puertas va combinada con el soporte inferior que ancla el cable bajo tensión completa. Esa no la toque.',
    quickFacts: [
      { label: 'Bisagras por puerta', value: '8 a 12 normalmente' },
      { label: 'Precio instalado', value: 'Desde $85 con mantenimiento' },
      { label: 'Tiempo en sitio', value: '30 a 60 minutos' },
      { label: 'Numeración', value: 'Por posición, tiene que coincidir' },
      { label: '¿Hacerlo usted?', value: 'Las de en medio sí, la de abajo no' },
    ],
    faq: [
      {
        question: '¿Por qué están numeradas las bisagras?',
        answer:
          'El número es la posición, no la medida. Cada número define un desplazamiento distinto del rodamiento para que los paneles se mantengan a escuadra al subir y aun así articulen bien en la curva hacia el riel horizontal. Ponga una número tres donde va una número dos y la puerta se va a trabar en la curva, normalmente con un golpe, y va a gastar ese rodamiento antes de tiempo.',
      },
      {
        question: '¿De verdad importa una sola bisagra rota?',
        answer:
          'Sí, porque la carga que llevaba se va a algún lado. Se la reparten las bisagras vecinas y el panel, y los paneles son mucho más caros que las bisagras. Una bisagra rota detectada a tiempo es un trabajo chico; la misma bisagra dejada un año suele ser bisagra más panel.',
      },
      {
        question: 'La bisagra está bien pero los barrenos están ovalados. ¿Eso es problema?',
        answer:
          'Lo es, y es la versión más común de esta falla. Los barrenos ovalados dejan que el panel se mueva un poco en cada ciclo, lo cual afloja más los tornillos y con el tiempo parte el acero alrededor. La solución depende de qué tan avanzado esté: a veces una placa de refuerzo, a veces pasar a un respaldo sólido, y de vez en cuando el panel mismo.',
      },
    ],
  },

  'bottom-seal': {
    name: 'Hule Inferior de Puerta de Garaje',
    shortName: 'Hule inferior',
    metaTitle: 'Cambio de Hule Inferior de Puerta de Garaje en Florida | Agua y Plagas',
    metaDescription:
      'La tira de hule del borde inferior detiene la lluvia, los insectos y el calor. Cómo saber que el suyo ya no sirve, y la única pieza de este sitio que sí le decimos que intente.',
    answer:
      'El hule inferior es la tira flexible de hule o vinilo del borde de abajo de la puerta que cierra el espacio contra el piso. En Florida trabaja más que en cualquier otro lado: detiene la lluvia que entra de lado, las cucarachas y lagartijas, y buena parte del calor. Se endurece, se agrieta y se rompe, y honestamente es la única pieza de este sitio que sí le sugerimos cambiar usted mismo.',
    intro: [
      'La mayoría de las puertas de Florida usan un hule de punta en T o de bulbo que se desliza dentro de un riel retenedor fijado a lo largo del panel de abajo. El hule es flexible para poder aplastarse contra las irregularidades de una losa de concreto que nunca está perfectamente plana.',
      'Vale la pena ser específico sobre lo que está deteniendo aquí. La lluvia de una tormenta de la tarde llega en horizontal, y un hule vencido es por donde el agua cruza el piso del garaje. También es la puerta de entrada de cucarachas, hormigas y lagartijas chicas, y es una parte real de cuánto se calienta el garaje.',
      'También es lo más barato de la puerta y lo más fácil de revisar. Cierre la puerta, métase al garaje, apague la luz de día y mire a lo largo del borde de abajo. Luz de día en el borde es un hule vencido.',
    ],
    symptoms: [
      'Se ve luz de día en el borde inferior con la puerta cerrada',
      'Agua cruzando el piso del garaje después de una tormenta',
      'Insectos, lagartijas u hojas entrando con la puerta cerrada',
      'El hule está duro, agrietado, partido o roto',
      'El hule se salió del retenedor en un extremo',
      'El garaje se siente notablemente más caliente que antes',
    ],
    whyItFails: [
      'La luz ultravioleta es la causa principal aquí. Una puerta que da al sur o al oeste en el sol de Florida hornea el hule hasta que pierde su flexibilidad, y un hule que no se puede aplastar no puede sellar.',
      'Los ciclos de calor lo rematan. El hule se dilata y se contrae todos los días, y después de unos años de eso el material se agrieta en la línea de flexión.',
      'La losa también cuenta. Las losas de Florida se asientan, y un piso que desarrolló un hundimiento deja el hule salvando un hueco para el que nunca fue dimensionado, así que esa sección se desgasta primero.',
    ],
    diyNote:
      'Esta sí la puede hacer. No hay tensión de resorte de por medio, no hay nada bajo carga, y todo el trabajo es sacar el hule viejo del retenedor y meter el nuevo con un poco de agua jabonosa como lubricante. Mida el ancho de la puerta, lleve el pedazo viejo para poder igualar el perfil de punta en T o de bulbo, y hágalo en una mañana fresca cuando el hule no esté blando. Si su riel retenedor está doblado o corroído, esa parte sí vale un técnico.',
    quickFacts: [
      { label: 'Vida típica', value: '3 a 5 años con sol de Florida' },
      { label: 'Precio instalado', value: 'Desde $85 con mantenimiento' },
      { label: 'Tiempo en sitio', value: '20 a 40 minutos' },
      { label: '¿Hacerlo usted?', value: 'Sí' },
      { label: 'Cómo revisarlo', value: 'Busque luz de día en el borde' },
    ],
    faq: [
      {
        question: '¿Un hule nuevo va a detener el agua que entra?',
        answer:
          'Detiene la mayor parte, y no lo arregla todo. Si el agua entra por debajo del hule porque el hule ya falló, uno nuevo lo resuelve. Si su losa tiene pendiente hacia el garaje o se asentó formando un hundimiento, el hule está salvando un hueco y quizá también necesite una tira de umbral pegada al piso. Podemos decirle cuál de las dos tiene mirando por dónde entra el agua realmente.',
      },
      {
        question: '¿Cuál es la diferencia entre el hule inferior y el burlete?',
        answer:
          'El hule inferior corre por el borde de abajo de la puerta contra el piso. El burlete es la tira flexible en las jambas y el cabezal, sellando los lados y la parte de arriba contra el marco. Fallan por las mismas razones en este clima y normalmente conviene hacerlos en la misma visita.',
      },
      {
        question: '¿Cómo sé qué perfil comprar?',
        answer:
          'Lleve el viejo. Saque unos centímetros del retenedor e iguálelo en la tienda, porque los perfiles de punta en T, de cordón y de bulbo se parecen y no son intercambiables. Y mida el ancho completo de la puerta en vez de suponer una medida estándar, porque un hule corto le deja exactamente el hueco que quería cerrar.',
      },
    ],
  },

  'weather-seal': {
    name: 'Burlete de Puerta de Garaje',
    shortName: 'Burlete',
    metaTitle: 'Burlete de Puerta de Garaje en Florida | Sellos de Jamba y Cabezal',
    metaDescription:
      'Los sellos de los lados y de arriba del marco detienen lluvia, calor e insectos. Cómo saber que el suyo falló y cuánto cuesta el cambio.',
    answer:
      'El burlete es la tira flexible fijada a las jambas y al cabezal, sellando los lados y la parte de arriba del marco donde el hule inferior se encarga del piso. En Florida está peleando contra lluvia que entra de lado, insectos y calor, y falla por exposición al sol más que por uso. El cambio normalmente se hace junto con el hule inferior dentro de un mantenimiento desde 85 dólares.',
    intro: [
      'El burlete es normalmente una aleta de vinilo o hule sobre un tope de madera o PVC, colocada de modo que la puerta cerrada haga contacto ligero con ella en todo el perímetro. Ese contacto ligero es el sello.',
      'Como falla por sol y no por movimiento, se acaba a distinto ritmo en distintos lados de la misma puerta. El lado que recibe el sol de la tarde se endurece y se agrieta años antes que el lado con sombra, y por eso muchas veces se ve un borde bueno y uno malo en el mismo marco.',
      'La revisión es igual que la del hule inferior. Cierre la puerta, párese adentro con luz de día, y mire a lo largo de los dos lados y de arriba. Luz significa hueco, y hueco significa agua e insectos.',
    ],
    symptoms: [
      'Luz de día en los lados o arriba con la puerta cerrada',
      'Lluvia entrando por los bordes en una tormenta de la tarde',
      'El vinilo está duro, gredoso, agrietado o partido',
      'La tira se despegó del tope o cuelga suelta',
      'Insectos y hojas entrando alrededor del marco',
      'Ruido de viento alrededor de la puerta durante una tormenta',
    ],
    whyItFails: [
      'La exposición ultravioleta es toda la historia aquí. El sol de Florida degrada el vinilo y el hule sin parar, y el material se pone gredoso, después tieso, después agrietado.',
      'La dilatación por calor afloja las fijaciones. El tope y la tira se dilatan y se contraen todos los días, y eso va sacando clavos y grapas de la madera en unas cuantas temporadas.',
      'Humedad en el tope de madera de atrás. Si la madera está blanda o podrida, un burlete nuevo fijado ahí no va a aguantar, y hay que hacer el tope primero.',
    ],
    diyNote:
      'Cambiar solo la tira flexible sobre un tope en buen estado es un trabajo razonable con una barreta, un martillo y un flexómetro. Deja de serlo si la madera de atrás está blanda, podrida o ya la clavaron muchas veces, porque entonces el trabajo es carpintería y el sello nuevo va a aguantar solo tanto como aguante aquello donde está fijado. Revise la madera con un desarmador antes de comprar nada.',
    quickFacts: [
      { label: 'Vida típica', value: '3 a 6 años con sol de Florida' },
      { label: 'Precio instalado', value: 'Desde $85 con mantenimiento' },
      { label: 'Tiempo en sitio', value: '30 a 60 minutos' },
      { label: '¿Hacerlo usted?', value: 'Sí, si el tope está sano' },
      { label: 'Hágalo junto con', value: 'El hule inferior, misma visita' },
    ],
    faq: [
      {
        question: '¿El burlete ayuda con el calor?',
        answer:
          'Ayuda, y no es la palanca principal. Sellar los huecos detiene el intercambio de aire caliente por los bordes, lo cual vale la pena, sobre todo si el garaje está pegado y comparte pared con un cuarto que usted enfría. El factor mucho más grande es si la puerta misma tiene aislamiento, y ninguna cantidad de sello en los bordes convierte una puerta sin aislamiento en una aislada.',
      },
      {
        question: 'El sello se ve bien pero sigue entrando lluvia. ¿Qué más puede ser?',
        answer:
          'Normalmente la puerta no está apoyando pareja contra el tope, así que el sello toca de un lado y queda separado del otro. Eso es un tema de alineación y no de sello, y cambiar el hule no lo va a resolver. También puede ser que el tope mismo se haya movido, o agua bajando por la pared arriba del cabezal y entrando por detrás del marco.',
      },
      {
        question: '¿El burlete debe apretar fuerte contra la puerta?',
        answer:
          'Contacto ligero en todo el perímetro es lo correcto. Muy apretado arrastra en cada ciclo, se desgasta antes de tiempo y hace trabajar más al motor, y en un día de viento puede alcanzar para que se dispare el reverso de seguridad. Muy flojo no sella nada. Ese equilibrio es la mayor parte del oficio al instalarlo.',
      },
    ],
  },

  track: {
    name: 'Riel de Puerta de Garaje',
    shortName: 'Riel',
    metaTitle: 'Reparación de Riel de Puerta de Garaje en Florida | Doblado y Fuera del Riel',
    metaDescription:
      'Los rieles verticales y horizontales guían los rodamientos. Cómo saber que un riel está doblado o desalineado, y por qué una puerta fuera del riel no se debe usar.',
    answer:
      'El riel es el canal de acero por donde corren los rodamientos: vertical a cada lado del marco, curvándose hacia horizontal por el techo. Cuando se dobla, se afloja o se desalinea, la puerta se traba, rechina, o se sale del riel por completo. La reparación cuesta entre 140 y 600 dólares instalado según si el riel se puede enderezar o hay que cambiarlo, y una puerta que se salió del riel no se debe operar en absoluto.',
    intro: [
      'El trabajo de riel es trabajo de precisión, lo cual sorprende a la gente porque la pieza se ve tosca. Los dos rieles verticales tienen que estar a plomo, paralelos, y a la misma distancia entre sí arriba y abajo, y las secciones horizontales tienen que estar a nivel y bien espaciadas. Medio centímetro de diferencia arriba alcanza para que una puerta se trabe.',
      'Y por eso también una puerta que se sale del riel rara vez es el riel fallando solo. Casi siempre algo lo causó: un cable que se soltó, un carro que golpeó el riel, un rodamiento trabado, o fijaciones que se aflojaron con años de vibración.',
      'La parte urgente es qué hacer enseguida. Una puerta fuera del riel perdió lo que la mantenía en el marco. No use el motor, jale la liberación manual, y si la puerta quedó a media altura, no se pare ni estacione debajo.',
    ],
    symptoms: [
      'La puerta rechina, se traba o titubea siempre en el mismo punto',
      'Un doblez, torcedura o punto plano visible en el riel',
      'Un espacio entre los rodamientos y la pared del riel',
      'La puerta se salió del riel de uno o de los dos lados',
      'La puerta queda chueca dentro del marco',
      'Soportes de riel flojos, o fijaciones salidas de la pared',
    ],
    whyItFails: [
      'El impacto es la causa más común y casi siempre es un vehículo: una defensa, un espejo, el manubrio de una bicicleta pegándole al riel vertical al pasar.',
      'Una falla de cable o de resorte atraviesa la puerta y dobla el riel en el proceso, y por eso el daño de riel y el de cable llegan tan seguido juntos.',
      'Corrosión y vibración. La humedad de Florida oxida el riel por dentro donde se junta la mugre, y años de ciclos van aflojando los tornillos en la estructura hasta que el riel puede moverse bajo carga.',
    ],
    diyNote:
      'Regresar una puerta a su riel significa quitarle el peso, y quitarle el peso significa lidiar con tensión de resorte. Más allá del tema de seguridad, esto es trabajo de medición: a plomo, paralelo, bien espaciado, y si la alineación no queda bien la puerta se va a trabar y a comerse rodamientos y cables mientras usted la siga usando. Enderezar un riel doblado a mano casi nunca devuelve el perfil que el rodamiento necesita.',
    quickFacts: [
      { label: 'Precio instalado', value: '$140 a $600' },
      { label: 'Tiempo en sitio', value: '1 a 3 horas' },
      { label: '¿Enderezar o cambiar?', value: 'Depende del doblez' },
      { label: '¿Hacerlo usted?', value: 'No' },
      { label: '¿Seguir usándola?', value: 'No, deténgase de inmediato' },
    ],
    faq: [
      {
        question: '¿Un riel doblado se endereza o hay que cambiarlo?',
        answer:
          'Depende de dónde está el doblez y qué tan cerrado sea. Una curvatura suave en un tramo recto muchas veces se corrige bien. Una torcedura, una sección aplastada, o daño en la parte curva donde el vertical se une al horizontal normalmente necesita sección nueva, porque esa curva es un perfil de fábrica y doblarla de regreso a mano deja una forma con la que el rodamiento pelea en cada ciclo. Le decimos cuál de las dos tiene antes de empezar.',
      },
      {
        question: '¿Qué hago ahora mismo si la puerta se salió del riel?',
        answer:
          'Deje de usar el motor, y no trate de forzar la puerta de regreso. Jale la liberación manual para desconectar el motor, y si la puerta quedó a media altura, déjela y mantenga a la gente y a los carros fuera de abajo. Una puerta fuera del riel perdió parte de lo que la sostiene en el marco, y usar el motor la saca más y convierte un trabajo de riel en uno de panel.',
      },
      {
        question: '¿Por qué mi puerta se sale siempre del mismo lado?',
        answer:
          'Porque algo de ese lado no se ha arreglado. Los sospechosos de siempre son un soporte de riel flojo, un rodamiento trabado en esa esquina, un cable con un poco menos de tensión que su par, o una puerta fuera de escuadra que carga más de un lado. Regresarla sin encontrar esa causa garantiza que vuelva a pasar.',
      },
    ],
  },

  'opener-drive-gear': {
    name: 'Engrane del Motor de Puerta de Garaje',
    shortName: 'Engrane del motor',
    metaTitle: 'Cambio de Engrane del Motor en Florida | El Motor Suena y la Puerta No Se Mueve',
    metaDescription:
      'Cuando el motor funciona pero la puerta no se mueve, normalmente se barrió el engrane de plástico. Cuánto cuesta repararlo y cuándo conviene un motor nuevo.',
    answer:
      'El engrane es la pieza de plástico dentro de un motor de cadena o de banda que transmite el movimiento al eje. Está hecho a propósito como la pieza más débil, para que se barra antes de que se queme el motor. La señal es inconfundible: el motor funciona normal, suena sano, y la puerta no se mueve nada. La reparación cuesta entre 95 y 300 dólares instalado, y en un motor de más de quince años muchas veces conviene más un equipo nuevo.',
    intro: [
      'Los fabricantes hacen este engrane de nailon a propósito. Es la pieza sacrificable: cuando algo se traba o la puerta se pone pesada, el engrane cede y el motor caro sobrevive. Encontrar los dientes barridos no es señal de un motor mal hecho.',
      'La señal es muy específica y vale la pena conocerla antes de llamar a nadie. Si el motor funciona sus segundos normales, suena exactamente como siempre, y la puerta no se mueve ni un poco, eso es un engrane barrido. Si el motor zumba y forcejea o bota el breaker, esa es otra falla y normalmente significa que la puerta se puso pesada.',
      'La otra pista es viruta de plástico blanca o gris en el piso del garaje debajo de la cabeza del motor, que son los dientes del engrane que ya no están donde deberían.',
    ],
    symptoms: [
      'El motor funciona normal pero la puerta no se mueve nada',
      'Un sonido de rechinido o zumbido en la cabeza del motor',
      'Viruta de plástico blanca o gris en el piso debajo del motor',
      'La cadena o la banda no se mueve mientras el motor funciona',
      'La puerta funciona con la liberación manual pero no con el motor',
      'El motor corre su ciclo completo sin que pase nada',
    ],
    whyItFails: [
      'Edad y ciclos. El nailon se desgasta y los dientes se redondean, y un motor de quince años normalmente ya se lo ganó.',
      'Una puerta pesada o mal equilibrada es la causa de fondo más seguido de lo que la gente cree. Si los resortes están cansados, el motor está levantando un peso para el que nunca se hizo, y el engrane lo paga. Cambiar el engrane sin corregir el equilibrio significa volver a hacerlo.',
      'El calor del garaje. El techo de un garaje de Florida en agosto es el lugar más caliente de la casa, y el calor ablanda el nailon, lo cual acelera el desgaste.',
    ],
    diyNote:
      'Se venden kits de engrane y una persona con maña mecánica puede ponerlo: desconecte el equipo, abra la cabeza, y sea metódico con el orden en que salen las piezas. Las razones para pensarlo dos veces son que es trabajo incómodo por encima de la cabeza, y que un engrane barrido muchas veces es síntoma de una puerta que se puso pesada y no la enfermedad. Si no se corrige el equilibrio, el engrane nuevo se va por el mismo camino. Nosotros revisamos el equilibrio como parte del trabajo.',
    quickFacts: [
      { label: 'Precio instalado', value: '$95 a $300' },
      { label: 'Tiempo en sitio', value: '60 a 90 minutos' },
      { label: '¿Reparar o cambiar?', value: 'Equipo nuevo si pasa de 15 años' },
      { label: '¿Hacerlo usted?', value: 'Posible, y revise el equilibrio' },
      { label: 'Causa de fondo', value: 'Seguido una puerta desequilibrada' },
    ],
    faq: [
      {
        question: '¿Reparo el engrane o compro un motor nuevo?',
        answer:
          'La regla gruesa es la edad del equipo. Menos de unos diez años, repárelo. Más de quince, un motor nuevo normalmente es mejor inversión, porque además le da control con código rodante, reverso de seguridad moderno, respaldo de batería para los apagones y muchas veces banda silenciosa, y la instalación cuesta entre 275 y 600 dólares. Entre diez y quince depende del estado del resto del equipo, y le damos una respuesta directa en vez de irnos por defecto a la venta más grande.',
      },
      {
        question: 'El motor zumba pero no pasa nada. ¿Es el engrane?',
        answer:
          'Probablemente no, y la diferencia importa. Un engrane barrido deja que el motor gire libre a su velocidad y su sonido normales. Un motor que zumba, forcejea o bota el breaker está tratando de levantar más de lo que puede, y eso normalmente significa un resorte roto o una puerta fuera de equilibrio. Mismo síntoma para el dueño, distinta reparación y distinto precio.',
      },
      {
        question: '¿Un engrane nuevo va a arreglar un motor ruidoso?',
        answer:
          'Solo si el ruido viene del engrane. La mayor parte del ruido de motor en un garaje de Florida en realidad es la puerta: rodamientos de acero gastados, bisagras secas, una cadena floja. Eso sale más barato de resolver que cualquier cosa dentro de la cabeza del motor, y por eso revisamos la puerta antes de venderle piezas de motor.',
      },
    ],
  },

  'safety-sensor': {
    name: 'Sensores de Seguridad de Puerta de Garaje',
    shortName: 'Sensores de seguridad',
    metaTitle: 'Reparación de Sensores de Puerta de Garaje en Florida | La Puerta No Cierra',
    metaDescription:
      'Los ojos fotoeléctricos cerca del piso impiden que la puerta cierre sobre algo. Por qué una puerta que se regresa casi siempre son los sensores, y cómo revisarlos.',
    answer:
      'Los sensores de seguridad son los dos ojos fotoeléctricos montados a unos centímetros del piso a cada lado del marco, mandando un haz invisible entre ellos. La ley federal los exige en todo motor vendido desde 1993. Si el haz está interrumpido, desalineado o sucio, la puerta no cierra, y es por mucho la razón más común de que una puerta de garaje se niegue a cerrar. La reparación cuesta entre 95 y 300 dólares, y varias de las causas no cuestan nada y las puede resolver usted.',
    intro: [
      'Un sensor manda y el otro recibe. Si el receptor no ve el haz, el motor se niega a cerrar la puerta, y si el haz se interrumpe mientras la puerta baja, se regresa de inmediato. Ese comportamiento es lo que evita que un niño o una mascota queden atrapados debajo.',
      'Como el requisito es federal y viene de 1993, cualquier motor que usted tenga los trae. También por eso puentearlos es una idea genuinamente mala y no un tecnicismo: el reverso es la última línea de protección en una puerta que pesa más que la persona parada debajo.',
      'La buena noticia es qué tan seguido esto sale gratis. La mayoría de las fallas de sensor son una telaraña sobre el lente, un soporte golpeado por una bicicleta, o el sol pegándole al receptor de lado, y las tres son problemas de cinco minutos.',
    ],
    symptoms: [
      'La puerta empieza a bajar y se regresa de inmediato',
      'No cierra con el control pero sí con el botón de pared sostenido',
      'La luz de un sensor está apagada o parpadeando y la del otro fija',
      'La luz del motor parpadea cierto número de veces al intentar cerrar',
      'Cierra bien en la mañana y se niega en la tarde',
      'Solo cierra si usted mantiene apretado el botón de pared',
    ],
    whyItFails: [
      'La desalineación es la causa mayor y hace falta muy poco. Una bicicleta, un bote de basura, la manguera de la aspiradora o un pie pegándole al soporte lo mueve unos grados y el haz ya no llega.',
      'Mugre de Florida en el lente. Polvo, telarañas, pasto cortado y película salina se acumulan en el plástico, y una telaraña cruzando el lente alcanza para cortar el haz.',
      'Sol bajo. Un sensor que ve al poniente se puede encandilar con el sol directo de la tarde, y esa es exactamente la razón de que una puerta se porte bien toda la mañana y se niegue a las cinco.',
      'Cableado. Grapas atravesando el cable, daño de roedores y terminales corroídas en un garaje húmedo producen una falla intermitente que va y viene.',
    ],
    diyNote:
      'Intente esto antes de llamar a nadie. Limpie los dos lentes con un trapo suave y seco. Mire la luz indicadora de cada uno: las dos deben estar encendidas y fijas, y una parpadeando normalmente significa alineación. Afloje la mariposa, mueva el soporte poquito hasta que las dos queden fijas, y apriete. Revise que no haya nada estacionado en el haz. Si la falla aparece solo a cierta hora, una viserita sobre el receptor muchas veces la termina. Si las dos luces están muertas, eso es cableado y vale un técnico.',
    quickFacts: [
      { label: 'Obligatorios desde', value: '1993, ley federal' },
      { label: 'Precio instalado', value: '$95 a $300' },
      { label: 'Tiempo en sitio', value: '30 a 60 minutos' },
      { label: '¿Hacerlo usted?', value: 'Sí, limpieza y alineación' },
      { label: 'Nunca', value: 'Puentearlos ni desconectarlos' },
    ],
    faq: [
      {
        question: '¿Puedo simplemente desconectar los sensores?',
        answer:
          'No, y nosotros tampoco lo vamos a hacer. Son obligatorios por ley federal en todo motor vendido desde 1993, y son la razón por la que una puerta se regresa en vez de cerrar sobre un niño, una mascota o un pie. Una puerta que no cierra es una molestia de un día. Lo que los sensores evitan no se recupera. Si los suyos están fallando, los reparamos o los cambiamos.',
      },
      {
        question: '¿Por qué cierra en la mañana pero no en la tarde?',
        answer:
          'Casi siempre es el sol bajo pegándole al sensor receptor. El sol de la tarde entrando directo al lente lo satura y deja de ver el haz de su pareja. Una viserita sobre el receptor, o moverlo un poco, normalmente lo resuelve de forma permanente. Es una falla genuinamente común en Florida en garajes que dan al poniente.',
      },
      {
        question: 'Las dos luces de los sensores están completamente apagadas. ¿Qué significa?',
        answer:
          'Que no les está llegando corriente, o sea cableado y no alineación. Las causas comunes son una grapa atravesada en el cable durante algún otro trabajo, daño de roedores, una terminal corroída en la cabeza del motor en un garaje húmedo, o un cable que se safó. Eso sí vale un técnico, porque significa trabajar en las terminales del motor.',
      },
    ],
  },

  remote: {
    name: 'Control Remoto de Puerta de Garaje',
    shortName: 'Control remoto',
    metaTitle: 'Control de Puerta de Garaje No Funciona en Florida | Cambio y Programación',
    metaDescription:
      'Cuando un control deja de funcionar normalmente es la pila, la programación o el alcance. Cómo saber cuál, y cuándo el problema es el receptor y no el control.',
    answer:
      'El control remoto es un transmisor emparejado con un receptor dentro de la cabeza del motor. Cuando deja de funcionar la causa casi siempre es una de cuatro: pila agotada, programación perdida, algo interfiriendo la señal, o un receptor fallado. Las dos primeras usted normalmente las resuelve en unos minutos. La reparación, cuando hace falta, cuesta entre 95 y 300 dólares.',
    intro: [
      'Todo lo fabricado desde mediados de los noventa usa código rodante, o sea que el control y el motor acuerdan un código nuevo en cada oprimida. Eso es lo que impide que alguien grabe su señal y la repita, y también es por lo que a veces hay que volver a emparejar un control después de cambiarle la pila o después de un apagón.',
      'Diagnosticar esto es sobre todo descartar, y usted puede hacer casi todo. Si el botón de pared funciona y el control no, el motor y la puerta están bien y el problema está en el control, su pila, o el emparejamiento. Si no funciona ninguno de los dos, revise el motor.',
      'El alcance también le dice algo. Un control que funciona a un metro pero no desde la entrada normalmente tiene pila débil o un problema de antena, y no una falla de emparejamiento.',
    ],
    symptoms: [
      'El control no hace nada mientras el botón de pared funciona normal',
      'Hay que estar muy cerca de la puerta para que responda',
      'Funciona a veces sí y a veces no, sin patrón',
      'Un control funciona y el segundo no',
      'Dejó de funcionar después de un apagón o de cambiar la pila',
      'La luz del motor parpadea al oprimir pero la puerta no se mueve',
    ],
    whyItFails: [
      'Las pilas, la mayoría de las veces. El calor acorta la vida de la pila y la guantera de un carro en Florida es un lugar caliente para guardar un control.',
      'Programación perdida después de una interrupción de corriente, un rayo cerca, o una pila que se quedó fuera demasiado tiempo.',
      'Interferencia. Los focos LED dentro o cerca del motor son un culpable bien conocido y pueden reducir el alcance a un par de metros. También un transmisor cercano en una frecuencia parecida.',
      'El receptor y no el control. Una tarjeta lógica en un garaje húmedo y caliente no dura para siempre, y cuando el receptor se va, ningún control funciona aunque el botón de pared sí.',
    ],
    diyNote:
      'Vaya en este orden. Cambie la pila, revisando que quede en la posición correcta y bien asentada. Intente volver a emparejar: oprima y suelte el botón Learn en la cabeza del motor, y oprima el control dentro de los siguientes treinta segundos. Si tiene focos LED en el motor, quite uno y pruebe, porque interfieren más seguido de lo que la gente cree. Si una pila nueva y el emparejamiento no funcionan con ningún control, el receptor es la falla probable y eso es nuestro.',
    quickFacts: [
      { label: 'Precio instalado', value: '$95 a $300' },
      { label: 'Tiempo en sitio', value: '30 a 60 minutos' },
      { label: 'Pruebe primero', value: 'Pila, después emparejar' },
      { label: '¿Hacerlo usted?', value: 'Sí' },
      { label: 'Culpable común', value: 'Focos LED en el motor' },
    ],
    faq: [
      {
        question: '¿Cómo reprogramo un control?',
        answer:
          'En casi todos los motores modernos el método es el mismo. Busque el botón Learn o Smart en la cabeza del motor, normalmente cerca de donde sale la antena y muchas veces bajo la tapa de la luz. Oprímalo y suéltelo, y tiene unos treinta segundos para oprimir y sostener el botón del control hasta que las luces del motor parpadeen o se oiga un clic. Si está emparejando un control de repuesto, tiene que ser compatible con la marca de su motor y con la época de su código rodante.',
      },
      {
        question: '¿De verdad los focos LED pueden dejar sin funcionar mi control?',
        answer:
          'Sí, y es de las llamadas más comunes que recibimos después de que alguien cambia un foco. Los LED baratos emiten ruido de radiofrecuencia justo en la banda que usa el control, y con uno puesto en la cabeza del motor el alcance puede caer casi a nada. Quite el foco y pruebe. Si eso lo arregla, compre un foco específicamente marcado como compatible con motores de puerta de garaje.',
      },
      {
        question: 'Mi control funciona pero solo pegado a la puerta.',
        answer:
          'Empiece por la pila, porque una débil pierde alcance antes de dejar de funcionar del todo. Si una pila nueva no lo arregla, revise el cable de antena que cuelga de la cabeza del motor: debe colgar libre y derecho hacia abajo, no enrollado, ni pegado con cinta, ni metido dentro de la carcasa. Y revise si hay focos LED, que es la otra respuesta de siempre.',
      },
    ],
  },

  keypad: {
    name: 'Teclado Exterior de Puerta de Garaje',
    shortName: 'Teclado',
    metaTitle: 'Reparación de Teclado de Puerta de Garaje en Florida | No Funciona o Borrado',
    metaDescription:
      'El teclado exterior aguanta lo peor del clima de Florida. Por qué fallan las teclas, cuándo es la pila, y cuánto cuesta el cambio instalado.',
    answer:
      'El teclado es el panel numérico exterior montado junto al marco que abre la puerta con un código. Es el único componente del motor permanentemente expuesto al sol, la lluvia y el aire salino de Florida, y es el que envejece más rápido. La mayoría de las fallas son la pila, teclas gastadas, o programación perdida. La reparación o el cambio cuesta entre 95 y 300 dólares instalado.',
    intro: [
      'Un teclado es un transmisor con pila, exactamente igual que un control pero atornillado por fuera de su casa. Se empareja con el mismo receptor de la cabeza del motor y manda el mismo tipo de código rodante.',
      'O sea que hereda todas las debilidades del control y le suma el clima. El sol directo destruye el plástico y la impresión de las teclas, la lluvia encuentra el camino por el sello, y el aire salino corroe los contactos de abajo. Un teclado en una pared que da al poniente en Florida tiene una vida dura.',
      'El patrón que la mayoría nota primero es que ciertos números dejan de responder mientras otros siguen funcionando. Eso es el contacto debajo de esa tecla y no todo el aparato fallando, aunque en un teclado castigado normalmente es el principio del final.',
    ],
    symptoms: [
      'Algunas teclas funcionan y otras no responden',
      'Los números se borraron por completo de las teclas',
      'No hay luz ni sonido al oprimir una tecla',
      'El código se acepta pero la puerta no se mueve',
      'Funciona de forma intermitente, muchas veces peor después de la lluvia',
      'Dejó de funcionar después de un apagón o de un reinicio del motor',
    ],
    whyItFails: [
      'La pila primero, siempre. El calor acorta la vida de la pila y un teclado bajo el sol de Florida se calienta todas las tardes.',
      'Daño ultravioleta en la cara del teclado. Primero se va la impresión, después el plástico se vuelve quebradizo y se agrieta, y una vez agrietado entra el agua.',
      'Humedad y sal en los contactos debajo de las teclas, que es la razón de que los números individuales se vayan antes que el aparato, y de que la falla empeore justo después de llover.',
      'Emparejamiento perdido después de una interrupción de corriente o después de que el motor se reinició por cualquier otro motivo.',
    ],
    diyNote:
      'Cambie la pila primero, y revise el sello y el empaque mientras está abierto, porque un teclado que ha estado dejando entrar agua se va a seguir comiendo las pilas. Si aun así no responde, intente volver a emparejarlo con el motor igual que haría con un control. Si hay teclas muertas o la cara está agrietada, el aparato llegó a su fin y cambiarlo es sencillo, aunque el nuevo tiene que ser compatible con la marca de su motor y con su época de código.',
    quickFacts: [
      { label: 'Vida típica', value: '5 a 8 años a la intemperie en Florida' },
      { label: 'Precio instalado', value: '$95 a $300' },
      { label: 'Tiempo en sitio', value: '30 a 45 minutos' },
      { label: 'Pruebe primero', value: 'Pila, después emparejar' },
      { label: '¿Hacerlo usted?', value: 'Sí' },
    ],
    faq: [
      {
        question: '¿Cómo cambio el código del teclado?',
        answer:
          'El método varía por marca, y en la mayoría significa meter el código actual, oprimir una tecla de programa o enter, y meter el nuevo. Vale la pena hacerlo si le dio el código a un contratista, a alguien de limpieza o a un inquilino anterior. Si perdió el código actual, casi todos los teclados se pueden reiniciar contra el motor desde cero volviéndolos a emparejar en el botón Learn.',
      },
      {
        question: 'Solo funcionan algunas teclas. ¿Tiene arreglo?',
        answer:
          'Normalmente ya toca aparato nuevo. Teclas muertas significan contactos corroídos debajo de la membrana, y en un teclado que pasó años a la intemperie en Florida, las que todavía funcionan van por el mismo camino. Cambiar el teclado cuesta menos que una segunda visita por la siguiente tecla.',
      },
      {
        question: '¿Puedo poner cualquier teclado?',
        answer:
          'No, tiene que coincidir con su motor. La compatibilidad depende de la marca y de la generación del código rodante, así que un teclado hecho para un equipo reciente no se empareja con un motor de los noventa y al revés tampoco. Díganos la marca y más o menos la edad del motor y llevamos uno que sí empareje.',
      },
    ],
  },

  panel: {
    name: 'Panel de Puerta de Garaje',
    shortName: 'Panel',
    metaTitle: 'Cambio de Panel de Puerta de Garaje en Florida | Golpes, Óxido y Tormenta',
    metaDescription:
      'Una sección dañada muchas veces se puede cambiar sin comprar una puerta completa. Cuándo funciona, cuándo no, y cuánto cuesta en Florida.',
    answer:
      'Una puerta de garaje seccional está hecha de cuatro o cinco paneles separados, y uno dañado muchas veces se puede cambiar solo, en vez de comprar la puerta completa. Funciona cuando la puerta es lo bastante reciente para que todavía se consiga el panel, y deja de funcionar cuando el modelo se descontinuó o cuando hay más de una o dos secciones dañadas. El cambio cuesta entre 250 y 800 dólares instalado.',
    intro: [
      'Las dos preguntas que deciden esto son disponibilidad y cantidad. Si el fabricante todavía hace su puerta en su color y su perfil, cambiar un panel es directo. Si el modelo se descontinuó, un panel parecido pero no idéntico se va a ver desde la calle todo el tiempo que usted tenga la casa.',
      'La cantidad importa por economía y no por posibilidad. Un panel casi siempre vale la pena cambiarlo. Dos es cuestión de criterio. Tres en una puerta de cuatro paneles y usted ya está cerca del precio de una puerta nueva, con garantía, que combina consigo misma y que se puede pedir con una certificación de viento actual.',
      'Ese último punto vale la pena pesarlo en Florida específicamente. Si su puerta es anterior al código actual y de todos modos va a gastar en ella, cambiar la puerta completa le permite tener una certificada, y esa es una conversación distinta a una reparación.',
    ],
    symptoms: [
      'Un golpe, doblez o abolladura en una sección, normalmente de un vehículo',
      'Óxido perforando un panel, casi siempre en el borde de abajo',
      'Una sección agrietada o partida alrededor de las fijaciones de la bisagra',
      'Daño de tormenta: un panel pandeado o roto después de viento fuerte',
      'La puerta ya no cierra pareja porque una sección perdió su forma',
      'Agua o luz pasando por un agujero en la lámina',
    ],
    whyItFails: [
      'El impacto de vehículo es la causa más común por mucho, y casi siempre es el panel de abajo.',
      'Óxido de abajo hacia arriba. Agua parada contra el borde inferior, sobre todo donde falló el hule inferior, atraviesa el recubrimiento y después la lámina. El aire salino lo hace mucho más rápido.',
      'Viento. Una puerta sin certificación para la presión de su dirección se pandea hacia adentro en una tormenta fuerte, y un panel pandeado no regresa.',
      'Fijaciones de bisagra arrancándose con el tiempo y partiendo la lámina alrededor, que empieza como un barreno ovalado y termina como un panel agrietado.',
    ],
    diyNote:
      'Sacar una sección significa desarmar una puerta que se mantiene en equilibrio por resortes bajo tensión, y meter la nueva significa dejarla a escuadra con las secciones de arriba y de abajo. También significa igualar el panel correctamente desde el principio, para lo cual hace falta el fabricante, el modelo, el perfil y el color exacto. Este es trabajo de técnico desde la etapa de medir en adelante.',
    quickFacts: [
      { label: 'Precio instalado', value: '$250 a $800' },
      { label: 'Tiempo en sitio', value: '2 a 4 horas' },
      { label: 'Tiempo de entrega', value: 'El panel normalmente se pide' },
      { label: 'Conviene hasta', value: 'Una o dos secciones' },
      { label: '¿Hacerlo usted?', value: 'No' },
    ],
    faq: [
      {
        question: '¿El panel de repuesto va a combinar con el resto de mi puerta?',
        answer:
          'Si el modelo es actual, sí. Si se descontinuó, puede que no exista un igual exacto y uno parecido se va a notar, sobre todo en una puerta que lleva una década destiñéndose con el sol de Florida mientras el panel nuevo no. Nosotros revisamos disponibilidad antes de cotizar y le decimos con honestidad cómo va a quedar la puerta, porque enterarse después es la peor versión de este trabajo.',
      },
      {
        question: '¿Cuándo conviene más una puerta nueva completa?',
        answer:
          'Tres pruebas. Más de dos secciones dañadas, y usted ya se está acercando al costo de una puerta nueva. Un modelo descontinuado donde la diferencia se va a notar. O una puerta anterior al código de viento actual, donde cambiar todo le da una puerta certificada y la conversación con el seguro que viene con eso. Repasamos esas tres con usted en vez de irnos por defecto al trabajo más grande.',
      },
      {
        question: 'El seguro va a cubrir daño de tormenta. ¿Eso cambia algo?',
        answer:
          'Cambia qué conviene documentar. Fotografíe el daño antes de tocar nada, guarde el número de reclamo, y pida la cotización desglosada por sección para que el ajustador vea qué se está cambiando y por qué. Con gusto la desglosamos así. Lo que no vamos a hacer es inflar una reparación de tormenta, que es algo que pasa después de cada tormenta en Florida y es la razón por la que los ajustadores revisan estos reclamos con lupa.',
      },
    ],
  },
};
