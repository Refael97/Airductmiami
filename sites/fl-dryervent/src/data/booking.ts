/**
 * Words for the four step booking form, both languages. Kept out of ui.ts
 * because only the booking components read them.
 */
import { photos, type Photo } from './images';
import type { Locale } from './ui';

export interface BookingStrings {
  modalTitle: string;
  modalLead: string;
  close: string;
  step1: string; step2: string; step3: string; step4: string;
  jobLegend: string;
  jobs: { value: string; title: string; note: string; photo: Photo }[];
  zip: string; zipTitle: string;
  slotsHeading: string; slotsNote: string; slotsNone: string;
  windowLabel: string; windowNote: string; windows: string[];
  today: string; tomorrow: string;
  name: string; phone: string; email: string;
  area: string; areaSelect: string; areaOther: string;
  symptom: string; symptoms: string[];
  service: string; serviceNotSure: string;
  message: string; messagePlaceholder: string;
  reviewHeading: string; apptLabel: string;
  confirmNote: string; bookCta: string; note: string;
  next: string; back: string;
  pickJob: string; pickSlot: string;
  errFill: string; errFormat: string; errFast: string; errZip: string; errPitch: string;
  requiredField: string; honeypot: string;
  thankYou: string; contact: string;
}

export const booking: Record<Locale, BookingStrings> = {
  en: {
    modalTitle: 'Book a technician',
    modalLead: 'Four short steps. No call needed.',
    close: 'Close',
    step1: 'Service', step2: 'Appointment', step3: 'Your details', step4: 'Confirm',
    jobLegend: 'What brings you here?',
    jobs: [
      { value: 'cleaning', title: 'Clean my dryer vent', note: 'Slow drying, lint, yearly cleaning', photo: photos.cleaningInside },
      { value: 'repair', title: 'Repair or new duct', note: 'Crushed, come apart, new run', photo: photos.foilTape },
      { value: 'cap', title: 'Roof or wall vent', note: 'Bird nest, stuck flap, screen', photo: photos.roofCap },
    ],
    zip: 'ZIP code', zipTitle: 'Five digits, for example 33431',
    slotsHeading: 'Choose an arrival window',
    slotsNote: 'Times are Florida time. We call to confirm before anyone is on the road.',
    slotsNone: 'No windows left this week online. Pick Next and leave your number, and we will call you with the first opening.',
    windowLabel: 'Best time for you', windowNote: 'We call to confirm the time.',
    windows: ['Morning', 'Midday', 'Afternoon', 'Any time'],
    today: 'Today', tomorrow: 'Tomorrow',
    name: 'Your name', phone: 'Phone', email: 'Email',
    area: 'Area', areaSelect: 'Select your area', areaOther: 'Somewhere else in Florida',
    symptom: 'What is going on',
    symptoms: ['Dryer takes two cycles', 'Clothes come out hot and damp', 'Burning smell', 'Lint around the outside vent', 'Birds or a nest in the vent', 'Yearly cleaning', 'Something else'],
    service: 'Service you think you need', serviceNotSure: 'Not sure, tell me',
    message: 'Anything else', messagePlaceholder: 'Where the vent comes out, condo or house, gate code',
    reviewHeading: 'Your booking', apptLabel: 'Arrival window',
    confirmNote: 'We call you to confirm the time and the price for your vent before anyone comes out.',
    bookCta: 'Book my appointment', note: 'Cleaning $100 to $200. Repair or a new run $200 to $600. No obligation.',
    next: 'Next', back: 'Back',
    pickJob: 'Pick what you need help with.', pickSlot: 'Pick an arrival window.',
    errFill: 'Please fill in: %s', errFormat: 'Please check the format.',
    errFast: 'That was very fast. Please take a second and send it again.',
    errZip: 'That ZIP code is outside Florida. Call us if you are close by.',
    errPitch: 'This form is for dryer vent appointments only.',
    requiredField: 'a required field', honeypot: 'Do not fill this in:',
    thankYou: '/thank-you/', contact: '/contact/',
  },
  es: {
    modalTitle: 'Agende un técnico',
    modalLead: 'Cuatro pasos cortos. Sin llamar.',
    close: 'Cerrar',
    step1: 'Servicio', step2: 'Cita', step3: 'Sus datos', step4: 'Confirmar',
    jobLegend: '¿Qué necesita?',
    jobs: [
      { value: 'cleaning', title: 'Limpiar mi ventila', note: 'Seca lento, pelusa, limpieza anual', photo: photos.cleaningInside },
      { value: 'repair', title: 'Reparar o ducto nuevo', note: 'Aplastado, suelto, tramo nuevo', photo: photos.foilTape },
      { value: 'cap', title: 'Salida de techo o pared', note: 'Nido, aleta trabada, malla', photo: photos.roofCap },
    ],
    zip: 'Código postal', zipTitle: 'Cinco dígitos, por ejemplo 33431',
    slotsHeading: 'Elija un horario de llegada',
    slotsNote: 'Horario de Florida. Le llamamos para confirmar antes de salir.',
    slotsNone: 'No quedan horarios en línea esta semana. Pulse Siguiente, deje su número y le llamamos con el primer espacio.',
    windowLabel: 'Mejor horario para usted', windowNote: 'Le llamamos para confirmar la hora.',
    windows: ['Mañana', 'Mediodía', 'Tarde', 'Cualquier hora'],
    today: 'Hoy', tomorrow: 'Mañana',
    name: 'Su nombre', phone: 'Teléfono', email: 'Correo',
    area: 'Zona', areaSelect: 'Elija su zona', areaOther: 'Otra parte de Florida',
    symptom: 'Qué está pasando',
    symptoms: ['La secadora necesita dos ciclos', 'La ropa sale caliente y húmeda', 'Olor a quemado', 'Pelusa en la salida de afuera', 'Pájaros o nido en la ventila', 'Limpieza anual', 'Otra cosa'],
    service: 'Servicio que cree necesitar', serviceNotSure: 'No estoy seguro',
    message: 'Algo más', messagePlaceholder: 'Dónde sale la ventila, condominio o casa, código del portón',
    reviewHeading: 'Su cita', apptLabel: 'Horario de llegada',
    confirmNote: 'Le llamamos para confirmar la hora y el precio de su ventila antes de ir.',
    bookCta: 'Agendar mi cita', note: 'Limpieza $100 a $200. Reparación o tramo nuevo $200 a $600. Sin compromiso.',
    next: 'Siguiente', back: 'Atrás',
    pickJob: 'Elija con qué necesita ayuda.', pickSlot: 'Elija un horario de llegada.',
    errFill: 'Por favor complete: %s', errFormat: 'Revise el formato.',
    errFast: 'Fue muy rápido. Tómese un segundo y envíelo de nuevo.',
    errZip: 'Ese código postal está fuera de Florida. Llámenos si está cerca.',
    errPitch: 'Este formulario es solo para citas de ventila de secadora.',
    requiredField: 'un campo obligatorio', honeypot: 'No llene esto:',
    thankYou: '/es/gracias/', contact: '/es/contacto/',
  },
};
