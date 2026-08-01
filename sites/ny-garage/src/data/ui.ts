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
}

/** Locale-aware path builder: prefixes /es for Spanish, root for English. */
export function localizedPaths(locale: Locale) {
 const p = locale === 'es' ? '/es' : '';
 return {
 home: `${p}/` || '/',
 services: locale === 'es' ? '/es/servicios' : '/services',
 serviceAreas: locale === 'es' ? '/es/areas-de-servicio' : '/service-areas',
 blog: `${p}/blog`,
 about: locale === 'es' ? '/es/nosotros' : '/about',
 faq: locale === 'es' ? '/es/preguntas-frecuentes' : '/faq',
 contact: locale === 'es' ? '/es/contacto' : '/contact',
 privacy: locale === 'es' ? '/es/privacidad' : '/privacy',
 };
}

export function serviceHref(locale: Locale, slug: string) {
 return locale === 'es' ? `/es/servicios/${slug}` : `/services/${slug}`;
}
export function cityHref(locale: Locale, slug: string) {
 return locale === 'es'
 ? `/es/areas-de-servicio/${slug}`
 : `/service-areas/${slug}`;
}
export function blogHref(locale: Locale, slug: string) {
 return locale === 'es' ? `/es/blog/${slug}` : `/blog/${slug}`;
}

export const ui: Record<Locale, LocaleStrings> = {
 en: {
 htmlLang: 'en',
 ogLocale: 'en_US',
 home: '/',
 services: '/services',
 serviceAreas: '/service-areas',
 blog: '/blog',
 about: '/about',
 faq: '/faq',
 contact: '/contact',
 privacy: '/privacy',
 nav: [
 { label: 'Services', href: '/services' },
 { label: 'Service Areas', href: '/service-areas' },
 { label: 'Blog', href: '/blog' },
 { label: 'About', href: '/about' },
 { label: 'FAQ', href: '/faq' },
 { label: 'Contact', href: '/contact' },
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
 },
 es: {
 htmlLang: 'es',
 ogLocale: 'es_US',
 home: '/es/',
 services: '/es/servicios',
 serviceAreas: '/es/areas-de-servicio',
 blog: '/es/blog',
 about: '/es/nosotros',
 faq: '/es/preguntas-frecuentes',
 contact: '/es/contacto',
 privacy: '/es/privacidad',
 nav: [
 { label: 'Servicios', href: '/es/servicios' },
 { label: 'Áreas de Servicio', href: '/es/areas-de-servicio' },
 { label: 'Blog', href: '/es/blog' },
 { label: 'Nosotros', href: '/es/nosotros' },
 { label: 'Preguntas', href: '/es/preguntas-frecuentes' },
 { label: 'Contacto', href: '/es/contacto' },
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
 },
};
