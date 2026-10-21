/**
 * The canonical answers. The FAQ page, /llms.txt and /agent.json all read
 * from here so the site never gives two different answers to one question.
 */
import { PRICE } from './services';

export interface Fact { question: string; answer: string }

export const facts: Fact[] = [
  { question: 'How much does dryer vent cleaning cost in Florida?', answer: `$${PRICE.cleanLow} to $${PRICE.cleanHigh} for most homes. A short wall vent sits at the bottom of the range and a long attic run to a roof cap at the top. The price is given before booking.` },
  { question: 'How much does dryer vent repair or installation cost?', answer: `$${PRICE.workLow} to $${PRICE.workHigh} in Florida, depending on the length of the run, where it exits and how much of it has to change. Quoted before any work.` },
  { question: 'How often should a dryer vent be cleaned?', answer: 'Once a year for most households. Every six to nine months with a long or roof run, a large household doing several loads a day, or pets that shed heavily.' },
  { question: 'What are the signs of a clogged dryer vent?', answer: 'Clothes needing two cycles, a dryer or laundry room that is hot after a load, a burning smell, lint around the door or the outside hood, and an outside flap that barely opens while the dryer runs.' },
  { question: 'Are clogged dryer vents a fire risk?', answer: 'Yes. The US Fire Administration counts about 2,900 home clothes dryer fires a year in the US, with failure to clean as the leading cause, about a third of them.' },
  { question: 'How long can a dryer vent be?', answer: 'Under the Florida Building Code the exhaust duct may be up to 35 feet, less 2.5 feet for each 45 degree bend and 5 feet for each 90 degree bend, unless the dryer manufacturer allows a longer run.' },
  { question: 'Is foil or plastic dryer hose allowed?', answer: 'Only as the listed transition behind the dryer, no longer than 8 feet and never concealed in a wall, floor or ceiling. Inside the structure the duct must be 4 inch rigid metal.' },
  { question: 'Can a screen be put over a dryer vent to keep birds out?', answer: 'No. The termination needs a backdraft damper and must not have a screen, because a screen catches lint and blocks the exhaust.' },
  { question: 'Who is responsible for a condo dryer vent?', answer: 'Usually the unit owner owns the run from the dryer to the wall or ceiling connection, and the association owns shared risers and the roof termination. The declaration confirms it for each building.' },
  { question: 'Is dryer vent cleaning a licensed trade in Florida?', answer: 'No. There is no state licence for dryer vent cleaning. Dryer Vent Florida is insured and does not claim a licence that does not exist.' },
];

export const factsEs: Fact[] = [
  { question: '¿Cuánto cuesta limpiar la ventila de la secadora en Florida?', answer: `Entre $${PRICE.cleanLow} y $${PRICE.cleanHigh} en la mayoría de las casas. Una ventila corta por la pared queda abajo del rango y un tramo largo hasta el techo queda arriba. El precio se da antes de agendar.` },
  { question: '¿Cuánto cuesta reparar o instalar una ventila de secadora?', answer: `Entre $${PRICE.workLow} y $${PRICE.workHigh} en Florida, según el largo del tramo, por dónde sale y cuánto haya que cambiar. Se cotiza antes de empezar.` },
  { question: '¿Cada cuánto hay que limpiar la ventila?', answer: 'Una vez al año en la mayoría de las casas. Cada seis a nueve meses con un tramo largo o por el techo, muchas cargas al día o mascotas que sueltan mucho pelo.' },
  { question: '¿Cuáles son las señales de una ventila tapada?', answer: 'Ropa que necesita dos ciclos, una secadora o un cuarto de lavado caliente después de una carga, olor a quemado, pelusa alrededor de la puerta o de la salida, y una aleta afuera que casi no abre con la secadora prendida.' },
  { question: '¿Una ventila tapada puede causar un incendio?', answer: 'Sí. La Administración de Incendios de Estados Unidos cuenta unos 2,900 incendios de secadora en casas cada año, y la causa principal, más o menos un tercio, es no limpiarla.' },
  { question: '¿Qué largo puede tener la ventila?', answer: 'Según el código de construcción de Florida, hasta 35 pies, menos 2.5 pies por cada curva de 45 grados y 5 pies por cada curva de 90 grados, salvo que el fabricante de la secadora permita más.' },
  { question: '¿Se permite la manguera de aluminio o plástico?', answer: 'Solo como la manguera de transición aprobada detrás de la secadora, de no más de 8 pies y nunca escondida en una pared, piso o techo. Dentro de la estructura el ducto debe ser de metal rígido de 4 pulgadas.' },
  { question: '¿Quién es responsable de la ventila en un condominio?', answer: 'Normalmente el dueño de la unidad es dueño del tramo de la secadora a la conexión en la pared o el techo, y la asociación de los ductos compartidos y la salida en el techo.' },
];
