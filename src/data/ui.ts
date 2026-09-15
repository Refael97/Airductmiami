/**
 * Bilingual UI strings and per-locale paths. English lives at the site root;
 * Spanish lives under /es/. Both Header, Footer, and page templates read from
 * here so the two languages stay in sync.
 *
 * Note: Spanish copy is written in a natural, human voice with no dashes.
 */

export type Locale = 'en' | 'es';

export interface NavItem {
 label: string;
 href: string;
}

export interface LocaleStrings {
 htmlLang: string;
 ogLocale: string;
 // routing
 home: string;
 services: string;
 serviceAreas: string;
 blog: string;
 about: string;
 faq: string;
 contact: string;
 privacy: string;
 // labels
 nav: NavItem[];
 callLabel: (phone: string) => string;
 quoteLabel: string;
 requestQuote: string;
 allServices: string;
 allAreas: string;
 quickAnswer: string;
 faqTitle: string;
 learnMore: string;
 relatedServices: string;
 nearbyAreas: string;
 breadcrumbHome: string;
 langSwitch: string; // label of the OTHER language, e.g. "Español"
 footerServices: string;
 footerAreas: string;
 footerCompany: string;
 licensedInsured: string;
 servingFlorida: string;
 ctaHeading: string;
 ctaText: string;
 // floating help widget
 chatBubble: string;
 chatTeaser: string;
 chatTeaserSub: string;
 chatGreeting: string;
 chatGreetingSub: string;
 chatBack: string;
 chatClose: string;
 chatPickChat: string;
 chatPickChatNote: string;
 chatPickCall: string;
 chatPickCallNote: string;
 chatPickQuote: string;
 chatPickQuoteNote: string;
 chatAgent: string;
 chatOpener: string;
 chatPlaceholder: string;
 chatSend: string;
 chatThinking: string;
 chatDisclosure: string;
 chatOffline: string;
 chatBusy: string;
 chatError: string;
 chatOpenedForm: string;
}

/** Locale-aware path builder: prefixes /es for Spanish, root for English. */
export function localizedPaths(locale: Locale) {
 const p = locale === 'es' ? '/es' : '';
 return {
 home: `${p}/` || '/',
 services: locale === 'es' ? '/es/servicios/' : '/services/',
 serviceAreas: locale === 'es' ? '/es/areas-de-servicio/' : '/service-areas/',
 blog: `${p}/blog/`,
 about: locale === 'es' ? '/es/nosotros/' : '/about/',
 faq: locale === 'es' ? '/es/preguntas-frecuentes/' : '/faq/',
 contact: locale === 'es' ? '/es/contacto/' : '/contact/',
 privacy: locale === 'es' ? '/es/privacidad/' : '/privacy/',
 };
}

export function serviceHref(locale: Locale, slug: string) {
 return locale === 'es' ? `/es/servicios/${slug}/` : `/services/${slug}/`;
}
export function cityHref(locale: Locale, slug: string) {
 return locale === 'es'
 ? `/es/areas-de-servicio/${slug}/`
 : `/service-areas/${slug}/`;
}
export function blogHref(locale: Locale, slug: string) {
 return locale === 'es' ? `/es/blog/${slug}/` : `/blog/${slug}/`;
}

export const ui: Record<Locale, LocaleStrings> = {
 en: {
 htmlLang: 'en',
 ogLocale: 'en_US',
 home: '/',
 services: '/services/',
 serviceAreas: '/service-areas/',
 blog: '/blog/',
 about: '/about/',
 faq: '/faq/',
 contact: '/contact/',
 privacy: '/privacy/',
 nav: [
 { label: 'Services', href: '/services/' },
 { label: 'Service Areas', href: '/service-areas/' },
 { label: 'Blog', href: '/blog/' },
 { label: 'About', href: '/about/' },
 { label: 'FAQ', href: '/faq/' },
 { label: 'Contact', href: '/contact/' },
 ],
 callLabel: (phone) => phone,
 quoteLabel: 'Get a Free Quote',
 requestQuote: 'Request a Quote',
 allServices: 'All services',
 allAreas: 'All areas',
 quickAnswer: 'Quick answer',
 faqTitle: 'Frequently Asked Questions',
 learnMore: 'Learn more',
 relatedServices: 'Related services',
 nearbyAreas: 'Nearby Areas We Serve',
 breadcrumbHome: 'Home',
 langSwitch: 'Español',
 footerServices: 'Services',
 footerAreas: 'Service Areas',
 footerCompany: 'Company',
 licensedInsured: 'Licensed & Insured · Serving all of Florida',
 servingFlorida: 'Serving all of Florida',
 ctaHeading: 'Ready for cleaner, healthier air?',
 ctaText:
 'Get a fast, no-obligation quote from Florida’s trusted air duct professionals.',
 chatBubble: 'We can help',
 chatTeaser: 'Question about your ducts?',
 chatTeaserSub: 'Ask us here, or get a price in under a minute.',
 chatGreeting: 'How can we help?',
 chatGreetingSub: 'Pick whichever is quickest for you.',
 chatBack: 'Back',
 chatClose: 'Close',
 chatPickChat: 'Message us now',
 chatPickChatNote: 'Describe the problem and get an answer straight away.',
 chatPickCall: 'Call us now',
 chatPickCallNote: 'Talk to someone about your property.',
 chatPickQuote: 'Get a free quote',
 chatPickQuoteNote: 'Leave your details and we call you back.',
 chatAgent: 'Carla · Florida Breeze',
 chatOpener:
 'Hi, I am Carla from Florida Breeze. Tell me what is going on, a smell, dust, allergies, or a dryer taking two cycles, and I will tell you what it usually is and what it costs.',
 chatPlaceholder: 'Type your message',
 chatSend: 'Send',
 chatThinking: 'Typing',
 chatDisclosure:
 'You are chatting with an AI assistant. It gives published prices and never books a time: the office confirms that when they call you back.',
 chatOffline: 'Chat is not open right now. Call us and we will sort it out:',
 chatBusy: 'We are getting a lot of messages right now. The fastest way through is to call:',
 chatError: 'Something went wrong on our end. Please call us:',
 chatOpenedForm: 'I have opened the quote form for you. Fill in your name and number and we will call you back.',
 },
 es: {
 htmlLang: 'es',
 ogLocale: 'es_US',
 home: '/es/',
 services: '/es/servicios/',
 serviceAreas: '/es/areas-de-servicio/',
 blog: '/es/blog/',
 about: '/es/nosotros/',
 faq: '/es/preguntas-frecuentes/',
 contact: '/es/contacto/',
 privacy: '/es/privacidad/',
 nav: [
 { label: 'Servicios', href: '/es/servicios/' },
 { label: 'Áreas de Servicio', href: '/es/areas-de-servicio/' },
 { label: 'Blog', href: '/es/blog/' },
 { label: 'Nosotros', href: '/es/nosotros/' },
 { label: 'Preguntas', href: '/es/preguntas-frecuentes/' },
 { label: 'Contacto', href: '/es/contacto/' },
 ],
 callLabel: (phone) => phone,
 quoteLabel: 'Cotización Gratis',
 requestQuote: 'Solicitar Cotización',
 allServices: 'Todos los servicios',
 allAreas: 'Todas las áreas',
 quickAnswer: 'Respuesta rápida',
 faqTitle: 'Preguntas Frecuentes',
 learnMore: 'Más información',
 relatedServices: 'Servicios relacionados',
 nearbyAreas: 'Áreas cercanas que atendemos',
 breadcrumbHome: 'Inicio',
 langSwitch: 'English',
 footerServices: 'Servicios',
 footerAreas: 'Áreas de Servicio',
 footerCompany: 'Empresa',
 licensedInsured: 'Con licencia y asegurados · Servicio en toda Florida',
 servingFlorida: 'Servicio en toda Florida',
 ctaHeading: '¿Listo para un aire más limpio y saludable?',
 ctaText:
 'Reciba una cotización rápida y sin compromiso de los profesionales de ductos de confianza en Florida.',
 chatBubble: 'Le ayudamos',
 chatTeaser: '¿Duda sobre sus ductos?',
 chatTeaserSub: 'Pregúntenos aquí, o reciba un precio en menos de un minuto.',
 chatGreeting: '¿Cómo le ayudamos?',
 chatGreetingSub: 'Elija lo que le resulte más rápido.',
 chatBack: 'Atrás',
 chatClose: 'Cerrar',
 chatPickChat: 'Escríbanos ahora',
 chatPickChatNote: 'Cuéntenos qué pasa y reciba respuesta de inmediato.',
 chatPickCall: 'Llámenos ahora',
 chatPickCallNote: 'Hable con alguien sobre su propiedad.',
 chatPickQuote: 'Cotización gratis',
 chatPickQuoteNote: 'Deje sus datos y le devolvemos la llamada.',
 chatAgent: 'Carla · Florida Breeze',
 chatOpener:
 'Hola, soy Carla de Florida Breeze. Cuénteme qué está pasando, un olor, polvo, alergias, o una secadora que necesita dos ciclos, y le digo qué suele ser y cuánto cuesta.',
 chatPlaceholder: 'Escriba su mensaje',
 chatSend: 'Enviar',
 chatThinking: 'Escribiendo',
 chatDisclosure:
 'Está conversando con un asistente de IA. Da los precios publicados y nunca agenda una hora: eso lo confirma la oficina cuando le devuelven la llamada.',
 chatOffline: 'El chat no está abierto ahora. Llámenos y lo resolvemos:',
 chatBusy: 'Estamos recibiendo muchos mensajes. La vía más rápida es llamar:',
 chatError: 'Algo falló de nuestro lado. Por favor llámenos:',
 chatOpenedForm: 'Le abrí el formulario de cotización. Ponga su nombre y su número y le devolvemos la llamada.',
 },
};
