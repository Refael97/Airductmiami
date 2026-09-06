/**
 * Bilingual UI strings and per-locale paths.
 *
 * English lives at the site root, Spanish under /es/. Header, Footer, the
 * shared page components and the API routes all read from here, so the two
 * languages cannot drift apart structurally. Long form copy (services,
 * cities, regions, products, articles, the core pages) lives in the data
 * files and content collections, in a `.es.ts` mirror or a `blog-es`
 * folder, keyed by the same slug.
 *
 * Spanish here is Latin American neutral, `usted` throughout, written for
 * South Florida, Central Florida and Tampa readers. No dashes anywhere.
 */

export type Locale = 'en' | 'es';

export const locales: Locale[] = ['en', 'es'];

/* ---------------------------------------------------------------------- */
/* Paths                                                                   */
/* ---------------------------------------------------------------------- */

interface Paths {
  home: string;
  services: string;
  serviceAreas: string;
  prices: string;
  buyersGuide: string;
  brands: string;
  blog: string;
  faq: string;
  about: string;
  contact: string;
  thankYou: string;
  privacy: string;
}

export const paths: Record<Locale, Paths> = {
  en: {
    home: '/',
    services: '/services/',
    serviceAreas: '/service-areas/',
    prices: '/prices/',
    buyersGuide: '/buyers-guide/',
    brands: '/brands/',
    blog: '/blog/',
    faq: '/faq/',
    about: '/about/',
    contact: '/contact/',
    thankYou: '/thank-you/',
    privacy: '/privacy/',
  },
  es: {
    home: '/es/',
    services: '/es/servicios/',
    serviceAreas: '/es/areas-de-servicio/',
    prices: '/es/precios/',
    buyersGuide: '/es/guia-de-compra/',
    brands: '/es/marcas/',
    blog: '/es/blog/',
    faq: '/es/preguntas-frecuentes/',
    about: '/es/nosotros/',
    contact: '/es/contacto/',
    thankYou: '/es/gracias/',
    privacy: '/es/privacidad/',
  },
};

/** Every slug keeps its English form under /es/; only the section changes. */
export const serviceHref = (l: Locale, slug: string) => `${paths[l].services}${slug}/`;
export const areaHref = (l: Locale, slug: string) => `${paths[l].serviceAreas}${slug}/`;
export const productHref = (l: Locale, slug: string) => `${paths[l].buyersGuide}${slug}/`;
export const brandHref = (l: Locale, slug: string) => `${paths[l].brands}${slug}/`;
/** Articles carry their own slug per language; the caller passes the right one. */
export const blogHref = (l: Locale, slug: string) => `${paths[l].blog}${slug}/`;

export const otherLocale = (l: Locale): Locale => (l === 'en' ? 'es' : 'en');

/** Money, US formatting in both languages: $1,800 reads the same in Miami. */
export const money = (n: number) => `$${n.toLocaleString('en-US')}`;

/* ---------------------------------------------------------------------- */
/* Strings                                                                 */
/* ---------------------------------------------------------------------- */

export interface Strings {
  htmlLang: string;
  ogLocale: string;
  langSwitch: string;
  skipToContent: string;

  // Header
  strip: string;
  brandSub: string;
  navServices: string;
  navPrices: string;
  navDoorsOpeners: string;
  navAreas: string;
  navGuides: string;
  navFaq: string;
  headerCta: string;
  megaRepairs: string;
  megaEveryPrice: string;
  megaEveryPriceNote: string;
  megaSeePriceList: string;
  megaAllServices: string;
  megaMaterials: string;
  megaOpenerTypes: string;
  megaBrands: string;
  megaNotSure: string;
  megaNotSureNote: string;
  megaBuyersGuide: string;
  megaSameDay: string;
  megaSameDayNote: string;
  megaAllAreas: string;
  openers: string;
  doors: string;

  // Footer
  footerMobile: (area: string) => string;
  footerBased: (county: string, region: string, country: string) => string;
  footerServing: string;
  footerNoWalkIn: string;
  footerServices: string;
  footerPricesGuides: string;
  footerPriceList: string;
  footerDoorsGuide: string;
  footerGuides: string;
  footerFaq: string;
  footerCompany: string;
  footerAllAreas: string;
  footerAbout: string;
  footerQuote: string;
  footerPrivacy: string;
  footerRights: string;
  footerServingArea: (area: string) => string;
  footerAgent: string;
  footerLicensed: string;
  footerMailQuotes: string;
  footerMailSupport: string;
  footerRequestQuote: string;

  // Shared
  from: string;
  quickAnswer: string;
  faqTitle: string;
  getFreeQuote: string;
  seePriceList: string;
  fullPriceList: string;
  fullPriceListArrow: string;
  allServicesArrow: string;
  allAreasArrow: string;
  allGuidesArrow: string;
  buyersGuideArrow: string;
  sameDay: string;
  writtenEstimateFirst: string;
  licensedInsured: string;
  oneYearWarranty: string;
  localTechs: string;
  ctaHeading: string;
  ctaText: string;
  ctaButton: string;
  illustrationNote: string;
  illustrationNoteType: string;
  breadcrumbHome: string;
  breadcrumbServices: string;
  breadcrumbAreas: string;
  breadcrumbPrices: string;
  breadcrumbDoorsOpeners: string;
  breadcrumbGuides: string;
  breadcrumbFaq: string;
  breadcrumbAbout: string;
  breadcrumbContact: string;
  breadcrumbPrivacy: string;

  // Service page
  eyebrowService: string;
  startingPrice: string;
  typicalRange: (low: string, high: string) => string;
  whatMovesPrice: string;
  whatMovesPriceText: string;
  whyPickUs: string;
  howJobRuns: string;
  serviceQuestions: (name: string) => string;
  relatedServices: string;
  guidesOnThis: string;
  whereWeWork: string;
  whereWeWorkNote: string;

  // Area page
  eyebrowRegion: string;
  areaH1: (inPhrase: string) => string;
  pricesIn: (inPhrase: string) => string;
  doorsLike: (inPhrase: string) => string;
  whatWeSee: (name: string) => string;
  servicesWeProvide: (inPhrase: string) => string;
  allServicesCost: string;
  areaQuestions: (inPhrase: string) => string;
  nearbyAreas: string;
  allOf: (name: string) => string;
  communitiesIn: (name: string) => string;
  beforeYouCall: string;
  beforeYouCallNote: string;
  emergencyQ: string;
  emergencyNote: string;
  emergencyService: string;
  areaCtaHeading: (inPhrase: string) => string;
  areaCtaText: (area: string) => string;
  regionPage: string;

  // Buyer's guide and brands
  eyebrowMaterial: string;
  eyebrowOpener: string;
  installedPrice: string;
  noise: string;
  bestFor: string;
  compareAll: string;
  goodAt: string;
  badAt: string;
  otherMaterials: string;
  otherDriveTypes: string;
  readyToFit: string;
  readyToFitNote: string;
  newDoorInstall: string;
  openerInstall: string;
  materialsHeading: string;
  materialsLead: string;
  openersHeading: string;
  openersLead: string;
  brandsHeading: string;
  brandsLead: string;
  installed: string;
  choosingQuestions: string;
  buyersCtaHeading: string;
  buyersCtaText: string;
  eyebrowOpenerBrand: string;
  eyebrowDoorBrand: string;
  brandH1: (name: string, isOpener: boolean) => string;
  brandDisclosure: (name: string) => string;
  brandUsuallyWrong: (name: string) => string;
  whatItCosts: string;
  brandQuestions: (name: string) => string;
  otherBrands: string;

  // Prices page
  eyebrowPrices: string;
  colService: string;
  colStarting: string;
  colRange: string;
  colCovers: string;
  commonAdditions: string;
  colItem: string;
  colPrice: string;
  colWhen: string;
  promiseWritten: string;
  promiseWrittenText: string;
  promiseNoBait: string;
  promiseNoBaitText: string;
  promiseShown: string;
  promiseShownText: string;
  pricingQuestions: string;
  pricesCtaHeading: string;
  pricesCtaText: string;
  pricesCaption: string;
  addOnsCaption: string;

  // Hubs
  eyebrowServices: string;
  repairsHeading: string;
  installMaintenanceHeading: string;
  hurricaneHeading: string;
  aboutOurServices: string;
  eyebrowAreas: string;
  coverageQuestions: string;
  eyebrowGuides: string;
  eyebrowBuyersGuide: string;
  eyebrowQuestions: string;
  eyebrowAbout: string;
  eyebrowFreeQuote: string;
  whatYouGet: string;

  // Blog
  clusterLabels: Record<string, string>;
  clusterBlurbs: Record<string, { label: string; blurb: string }>;
  published: string;
  updated: string;
  relatedQuestions: string;
  servicesInGuide: string;
  needThisFixed: string;
  needThisFixedText: string;
  moreLikeThis: string;
  dateLocale: string;

  // Contact
  formName: string;
  formPhone: string;
  formEmail: string;
  formZip: string;
  formZipTitle: string;
  formArea: string;
  formAreaSelect: string;
  formAreaOther: string;
  formUrgency: string;
  formSymptom: string;
  formService: string;
  formServiceNotSure: string;
  formMessage: string;
  formMessagePlaceholder: string;
  formSubmit: string;
  formNote: string;
  formHoneypot: string;
  whatWeSendBack: string;
  sendBack: string[];
  contactHeading: string;
  contactSevenDays: string;
  contactEmailNote: string;
  contactSupportNote: string;
  contactAreaNote: string;
  hoursHeading: string;
  hoursNote: string;
  aboutGettingQuote: string;
  errFill: (field: string) => string;
  errFormat: string;
  errFast: string;
  errZip: string;
  errPitch: string;
  requiredField: string;

  // Thank you
  thanksTitle: string;
  thanksDescription: string;
  thanksH1: string;
  thanksLead: string;
  thanksNext: string;
  thanksSteps: string[];
  thanksUrgent: (phone: string) => string;
  thanksWhileYouWait: string;
  thanksFullList: string;

  // Privacy
  privacyTitle: string;
  privacyDescription: string;
  privacySections: { heading: string; text: string }[];
  privacyH1: string;
  privacyLead: string;
  privacyRemoval: (email: string) => string;
  privacyChoices: (email: string) => string;
  privacyContact: (email: string) => string;

  // 404
  notFoundTitle: string;
  notFoundText: string;
}

export const ui: Record<Locale, Strings> = {
  en: {
    htmlLang: 'en-US',
    ogLocale: 'en_US',
    langSwitch: 'Español',
    skipToContent: 'Skip to content',

    strip: 'Broken spring or car trapped? Same-day service across Florida, seven days a week.',
    brandSub: 'Published prices · Florida',
    navServices: 'Services',
    navPrices: 'Prices',
    navDoorsOpeners: 'Doors & Openers',
    navAreas: 'Service Areas',
    navGuides: 'Guides',
    navFaq: 'FAQ',
    headerCta: 'Free quote',
    megaRepairs: 'Repairs, installation and storm work',
    megaEveryPrice: 'Every price, published',
    megaEveryPriceNote:
      'We publish our starting prices instead of saying "call for a quote". Written estimate before any work begins.',
    megaSeePriceList: 'See the price list',
    megaAllServices: 'All services →',
    megaMaterials: 'Door materials',
    megaOpenerTypes: 'Opener drive types',
    megaBrands: 'Brands we service',
    megaNotSure: 'Not sure what fits?',
    megaNotSureNote:
      'Wind zone, headroom, salt air and the HOA all narrow the choice more than the showroom does.',
    megaBuyersGuide: "Buyer's guide",
    megaSameDay: 'Same-day, seven days',
    megaSameDayNote:
      'Prices are identical everywhere we work. The door changes the number, not the city.',
    megaAllAreas: 'All service areas →',
    openers: 'Openers',
    doors: 'Doors',

    footerMobile: (area) => `Mobile garage door service across ${area}`,
    footerBased: (county, region, country) => `Based in ${county}, ${region}, ${country}`,
    footerServing: 'Serving',
    footerNoWalkIn: 'We travel to the customer. There is no walk-in location.',
    footerServices: 'Services',
    footerPricesGuides: 'Prices & guides',
    footerPriceList: 'Published price list',
    footerDoorsGuide: 'Doors & openers guide',
    footerGuides: 'Guides & costs',
    footerFaq: 'Questions answered',
    footerCompany: 'Company',
    footerAllAreas: 'All service areas',
    footerAbout: 'About us',
    footerQuote: 'Request a quote',
    footerPrivacy: 'Privacy',
    footerRights: 'All rights reserved.',
    footerServingArea: (area) => `Serving all of ${area}.`,
    footerAgent: 'For AI agents: structured business data (JSON)',
    footerLicensed: 'Licensed & insured',
    footerMailQuotes: 'quotes and new enquiries',
    footerMailSupport: 'existing jobs, warranty and scheduling',
    footerRequestQuote: 'Request a free quote',

    from: 'from',
    quickAnswer: 'Quick answer',
    faqTitle: 'Frequently Asked Questions',
    getFreeQuote: 'Get a free quote',
    seePriceList: 'See the price list',
    fullPriceList: 'Full price list',
    fullPriceListArrow: 'Full price list →',
    allServicesArrow: 'All services →',
    allAreasArrow: 'All service areas →',
    allGuidesArrow: 'All guides →',
    buyersGuideArrow: "Buyer's guide →",
    sameDay: 'Same-day service',
    writtenEstimateFirst: 'Written estimate first',
    licensedInsured: 'Licensed & insured',
    oneYearWarranty: '1 year parts & labor',
    localTechs: 'Local Florida technicians',
    ctaHeading: 'Tell us what happened and we will tell you what it costs',
    ctaText: 'Free quote, no obligation, and a real arrival window if you need us today.',
    ctaButton: 'Get a free quote',
    illustrationNote: 'Illustration of the fault described. Not a photograph of our own work.',
    illustrationNoteType: 'Illustration of the type described. Not a photograph of our own work.',
    breadcrumbHome: 'Home',
    breadcrumbServices: 'Services',
    breadcrumbAreas: 'Service Areas',
    breadcrumbPrices: 'Prices',
    breadcrumbDoorsOpeners: 'Doors & Openers',
    breadcrumbGuides: 'Guides',
    breadcrumbFaq: 'FAQ',
    breadcrumbAbout: 'About',
    breadcrumbContact: 'Contact',
    breadcrumbPrivacy: 'Privacy',

    eyebrowService: 'Service',
    startingPrice: 'Starting price',
    typicalRange: (low, high) => `Typical range ${low} to ${high}`,
    whatMovesPrice: 'What moves this price',
    whatMovesPriceText:
      'The starting price above is for a standard single garage door in normal condition. These are the things that put a job above it, and we tell you which ones apply before we start rather than after.',
    whyPickUs: 'Why customers pick us for this',
    howJobRuns: 'How the job runs',
    serviceQuestions: (name) => `${name} questions`,
    relatedServices: 'Related services',
    guidesOnThis: 'Guides on this',
    whereWeWork: 'Where we work',
    whereWeWorkNote: 'Same-day service across Florida.',

    eyebrowRegion: 'Region',
    areaH1: (inPhrase) => `Garage door repair ${inPhrase}`,
    pricesIn: (inPhrase) => `Prices ${inPhrase}`,
    doorsLike: (inPhrase) => `What the doors are like ${inPhrase}`,
    whatWeSee: (name) => `What we see in ${name}`,
    servicesWeProvide: (inPhrase) => `Services we provide ${inPhrase}`,
    allServicesCost: 'All services and what each one costs →',
    areaQuestions: (inPhrase) => `Garage door questions ${inPhrase}`,
    nearbyAreas: 'Nearby areas',
    allOf: (name) => `All of ${name} →`,
    communitiesIn: (name) => `Communities in ${name}`,
    beforeYouCall: 'Before you call anyone',
    beforeYouCallNote:
      'Work out what has actually failed, and what it should cost, before you pick up the phone.',
    emergencyQ: 'Emergency?',
    emergencyNote:
      'Car trapped or door stuck open? Same-day service seven days a week. The call-out premium is $150 to $300 and it is stated before we dispatch.',
    emergencyService: 'Emergency service',
    areaCtaHeading: (inPhrase) => `Get a garage door quote ${inPhrase}`,
    areaCtaText: (area) =>
      `Tell us what happened and we will give you the number before we send anyone. Serving ${area}.`,
    regionPage: 'Region page',

    eyebrowMaterial: 'Door material',
    eyebrowOpener: 'Opener drive type',
    installedPrice: 'Installed price',
    noise: 'Noise',
    bestFor: 'Best for',
    compareAll: 'Compare all options',
    goodAt: 'What it is good at',
    badAt: 'What it is bad at',
    otherMaterials: 'Other materials',
    otherDriveTypes: 'Other drive types',
    readyToFit: 'Ready to fit one?',
    readyToFitNote:
      'We publish the installation price and put the estimate in writing before anything is ordered.',
    newDoorInstall: 'New door installation',
    openerInstall: 'Opener installation',
    materialsHeading: 'Garage door materials',
    materialsLead: 'Five materials, ranked here by how often they are the right answer in Florida.',
    openersHeading: 'Opener drive types',
    openersLead:
      'The drive type decides how loud the opener is and how it copes with a Florida garage in August.',
    brandsHeading: 'Brands we service',
    brandsLead: 'The brands we see most in Florida garages, and what typically goes wrong with each.',
    installed: 'installed',
    choosingQuestions: 'Choosing questions',
    buyersCtaHeading: 'Not sure which one fits your garage?',
    buyersCtaText:
      'Describe the opening and what is there now, and we will tell you what actually fits and what rating it needs before anyone quotes you a door.',
    eyebrowOpenerBrand: 'Opener brand',
    eyebrowDoorBrand: 'Door brand',
    brandH1: (name, isOpener) => `${name} ${isOpener ? 'opener' : 'door'} repair and installation`,
    brandDisclosure: (name) =>
      `We are an independent repair company. We are not affiliated with ${name} and we do not represent them. We service and install their products.`,
    brandUsuallyWrong: (name) => `What usually goes wrong with ${name}`,
    whatItCosts: 'What it costs',
    brandQuestions: (name) => `${name} questions`,
    otherBrands: 'Other brands we service',

    eyebrowPrices: 'Published prices',
    colService: 'Service',
    colStarting: 'Starting price',
    colRange: 'Typical range',
    colCovers: 'What the price covers',
    commonAdditions: 'Common additions',
    colItem: 'Item',
    colPrice: 'Price',
    colWhen: 'When it applies',
    promiseWritten: 'Written before, not after',
    promiseWrittenText:
      'You get the price in writing before anything is touched, and that number is what the invoice says.',
    promiseNoBait: 'No bait call-out fee',
    promiseNoBaitText:
      'We do not advertise a $29 visit and make the money on parts quoted once your door is in pieces.',
    promiseShown: 'The failed part, shown',
    promiseShownText:
      'If we say a part failed we show it to you. A recommendation you cannot see is a recommendation you cannot check.',
    pricingQuestions: 'Questions about pricing',
    pricesCtaHeading: 'Describe the problem and we will give you the number',
    pricesCtaText: 'No obligation, and no technician sent before you know what it costs.',
    pricesCaption: 'Published starting prices by service',
    addOnsCaption: 'Additional line items',

    eyebrowServices: 'Services',
    repairsHeading: 'Repairs',
    installMaintenanceHeading: 'Installation and maintenance',
    hurricaneHeading: 'Hurricane and storm',
    aboutOurServices: 'About our services',
    eyebrowAreas: 'Service areas',
    coverageQuestions: 'Coverage questions',
    eyebrowGuides: 'Guides',
    eyebrowBuyersGuide: "Buyer's guide",
    eyebrowQuestions: 'Questions',
    eyebrowAbout: 'About us',
    eyebrowFreeQuote: 'Free quote',
    whatYouGet: 'What you get, every time',

    clusterLabels: {
      cost: 'Cost guide',
      symptom: 'Symptom guide',
      product: 'Choosing guide',
      trust: 'Hiring guide',
      safety: 'Safety',
      maintenance: 'Maintenance',
      hurricane: 'Hurricane and code',
    },
    clusterBlurbs: {
      hurricane: {
        label: 'Hurricanes, code and insurance',
        blurb: 'Rated doors, permits, bracing, storm damage and the wind mitigation credit, explained plainly.',
      },
      cost: { label: 'What things cost', blurb: 'Real Florida numbers, not national averages.' },
      symptom: { label: 'Something is wrong', blurb: 'Work out what has failed before anyone quotes you.' },
      maintenance: { label: 'Lifespan and maintenance', blurb: 'How long parts last in Florida heat and salt, and what shortens them.' },
      safety: { label: 'Safety', blurb: 'What is genuinely dangerous and what is not.' },
      trust: { label: 'Hiring and trust', blurb: 'How to tell an honest quote from a bait quote, and a real contractor from a storm chaser.' },
      product: { label: 'Choosing doors and openers', blurb: 'Comparisons for the replacement decision.' },
    },
    published: 'Published',
    updated: 'Updated',
    relatedQuestions: 'Related questions',
    servicesInGuide: 'Services in this guide',
    needThisFixed: 'Need this fixed?',
    needThisFixedText: 'Tell us what happened and we will give you the number before anyone is dispatched.',
    moreLikeThis: 'More like this',
    dateLocale: 'en-US',

    formName: 'Your name',
    formPhone: 'Phone',
    formEmail: 'Email',
    formZip: 'ZIP code',
    formZipTitle: 'Five digits, for example 33431',
    formArea: 'Area',
    formAreaSelect: 'Select your area',
    formAreaOther: 'Somewhere else in Florida',
    formUrgency: 'How urgent',
    formSymptom: 'What is wrong',
    formService: 'Service you think you need',
    formServiceNotSure: 'Not sure, tell me',
    formMessage: 'Anything else',
    formMessagePlaceholder:
      'Single or double door? Roughly how old? What did it sound like when it failed? Is it a storm repair?',
    formSubmit: 'Send and get my price',
    formNote:
      'We use these details to quote your job and nothing else. No marketing lists, no sharing with third parties.',
    formHoneypot: 'Do not fill this in:',
    whatWeSendBack: 'What we will send back',
    sendBack: [
      'A price range for your specific problem',
      'An arrival window, not a whole day',
      'The emergency premium up front if it applies',
      'A written estimate before any work starts',
    ],
    contactHeading: 'Contact',
    contactSevenDays: 'Seven days a week, in English and Spanish',
    contactEmailNote:
      'Quotes and new enquiries. The form is faster, because it asks for the ZIP and the symptom up front.',
    contactSupportNote: 'Existing jobs, warranty claims and rescheduling.',
    contactAreaNote:
      'We travel to you. There is no walk-in location, so we do not publish a street address we do not receive customers at.',
    hoursHeading: 'Hours',
    hoursNote:
      'Emergency service outside these hours carries a $150 to $300 call-out premium, stated before we dispatch.',
    aboutGettingQuote: 'About getting a quote',
    errFill: (field) => `Please fill in ${field} before sending.`,
    errFormat: 'please check the format.',
    errFast: 'That went through faster than a form can be filled in. Give it a moment and press send again.',
    errZip:
      'That ZIP code is outside Florida. Check it, or tell us in the message where the door actually is.',
    errPitch: 'This form is for garage door work only. For anything else, use the email address in the footer.',
    requiredField: 'a required field',

    thanksTitle: 'Thanks, we have your request',
    thanksDescription: 'We have your quote request and will come back to you with a price and an arrival window.',
    thanksH1: 'We have it',
    thanksLead:
      'Your request is in. We will come back to you with a price range for your specific problem and an arrival window. Nobody is dispatched and nothing is charged until you have that number and have said yes.',
    thanksNext: 'What happens next',
    thanksSteps: [
      'We read what you sent and work out what the job actually is.',
      'You get a price range for that problem, not a generic one.',
      'You get an arrival window, and the emergency premium up front if it applies.',
      'If you go ahead, you get the estimate in writing before anything is touched.',
    ],
    thanksUrgent: (phone) =>
      `If your car is trapped or the door is stuck open, call ${phone} rather than waiting on the reply.`,
    thanksWhileYouWait: 'While you wait',
    thanksFullList: 'The full published price list',

    privacyTitle: 'Privacy Policy',
    privacyDescription: 'How we handle the information you send us, in plain language.',
    privacyH1: 'Privacy policy',
    privacyLead:
      'Short version: we use what you send us to quote and carry out your job. We do not sell it and we do not add you to a marketing list.',
    privacySections: [
      {
        heading: 'What we collect',
        text: 'When you submit the quote form we collect your name, phone number, ZIP code, and optionally your email address, your area, and whatever you write in the message field. The form also records which page you submitted from, which language you used, and which brand and service area the request belongs to, so that the right person handles it. We use Google Analytics to understand how people find and move around the site. That collects the usual anonymised traffic information: pages viewed, approximate location, device type and referring source. It does not tell us who you are.',
      },
      {
        heading: 'What we do with it',
        text: 'We use your contact details to quote your job, arrange a visit, and follow up on the work. We use the site analytics to decide which pages to improve. That is the whole list.',
      },
      {
        heading: 'What we do not do',
        text: 'We do not sell your information. We do not share it with third parties for their own marketing. We do not add you to a mailing list because you asked for a quote.',
      },
      {
        heading: 'Who else can see it',
        text: 'Form submissions are processed by our hosting provider and stored in the system we use to manage jobs. Where a job is carried out by a partner technician in your area, that technician receives the details needed to do the work and nothing else.',
      },
      {
        heading: 'Cookies',
        text: 'The site uses analytics cookies. It does not use advertising cookies or tracking pixels for third party remarketing. You can block cookies in your browser and the site will still work.',
      },
    ],
    privacyRemoval: (email) =>
      `Quote requests and job records are kept for as long as we need them for service history, warranty claims and tax records. If you want your details removed sooner, email ${email} and we will do it.`,
    privacyChoices: (email) =>
      `You can ask us what we hold about you, ask us to correct it, or ask us to delete it. Email ${email} and we will respond.`,
    privacyContact: (email) => `Questions about this policy go to ${email}.`,

    notFoundTitle: 'Page not found',
    notFoundText: 'That page does not exist. The price list and the service pages are the fastest way back.',
  },

  es: {
    htmlLang: 'es-US',
    ogLocale: 'es_US',
    langSwitch: 'English',
    skipToContent: 'Ir al contenido',

    strip: '¿Resorte roto o carro atrapado? Servicio el mismo día en toda Florida, los siete días de la semana.',
    brandSub: 'Precios publicados · Florida',
    navServices: 'Servicios',
    navPrices: 'Precios',
    navDoorsOpeners: 'Puertas y Motores',
    navAreas: 'Áreas de Servicio',
    navGuides: 'Guías',
    navFaq: 'Preguntas',
    headerCta: 'Cotización gratis',
    megaRepairs: 'Reparaciones, instalación y trabajos por tormenta',
    megaEveryPrice: 'Todos los precios, publicados',
    megaEveryPriceNote:
      'Publicamos nuestros precios iniciales en lugar de decir "llame para cotizar". Presupuesto por escrito antes de empezar cualquier trabajo.',
    megaSeePriceList: 'Ver la lista de precios',
    megaAllServices: 'Todos los servicios →',
    megaMaterials: 'Materiales de puerta',
    megaOpenerTypes: 'Tipos de motor',
    megaBrands: 'Marcas que atendemos',
    megaNotSure: '¿No sabe cuál le conviene?',
    megaNotSureNote:
      'La zona de viento, el espacio sobre la puerta, el aire salino y la asociación de vecinos reducen las opciones más que cualquier catálogo.',
    megaBuyersGuide: 'Guía de compra',
    megaSameDay: 'El mismo día, los siete días',
    megaSameDayNote:
      'Los precios son los mismos en todos los lugares donde trabajamos. Lo que cambia el número es la puerta, no la ciudad.',
    megaAllAreas: 'Todas las áreas de servicio →',
    openers: 'Motores',
    doors: 'Puertas',

    footerMobile: (area) => `Servicio móvil de puertas de garaje en toda ${area}`,
    footerBased: (county, region, country) => `Con base en ${county}, ${region}, ${country}`,
    footerServing: 'Atendemos',
    footerNoWalkIn: 'Vamos hasta el cliente. No tenemos local de atención al público.',
    footerServices: 'Servicios',
    footerPricesGuides: 'Precios y guías',
    footerPriceList: 'Lista de precios publicada',
    footerDoorsGuide: 'Guía de puertas y motores',
    footerGuides: 'Guías y costos',
    footerFaq: 'Preguntas respondidas',
    footerCompany: 'Empresa',
    footerAllAreas: 'Todas las áreas de servicio',
    footerAbout: 'Nosotros',
    footerQuote: 'Solicitar cotización',
    footerPrivacy: 'Privacidad',
    footerRights: 'Todos los derechos reservados.',
    footerServingArea: (area) => `Servicio en toda ${area}.`,
    footerAgent: 'Para agentes de IA: datos estructurados del negocio (JSON)',
    footerLicensed: 'Con licencia y seguro',
    footerMailQuotes: 'cotizaciones y consultas nuevas',
    footerMailSupport: 'trabajos en curso, garantía y citas',
    footerRequestQuote: 'Solicite una cotización gratis',

    from: 'desde',
    quickAnswer: 'Respuesta rápida',
    faqTitle: 'Preguntas frecuentes',
    getFreeQuote: 'Cotización gratis',
    seePriceList: 'Ver la lista de precios',
    fullPriceList: 'Lista de precios completa',
    fullPriceListArrow: 'Lista de precios completa →',
    allServicesArrow: 'Todos los servicios →',
    allAreasArrow: 'Todas las áreas de servicio →',
    allGuidesArrow: 'Todas las guías →',
    buyersGuideArrow: 'Guía de compra →',
    sameDay: 'Servicio el mismo día',
    writtenEstimateFirst: 'Presupuesto por escrito primero',
    licensedInsured: 'Con licencia y seguro',
    oneYearWarranty: '1 año en piezas y mano de obra',
    localTechs: 'Técnicos locales en Florida',
    ctaHeading: 'Cuéntenos qué pasó y le decimos cuánto cuesta',
    ctaText: 'Cotización gratis, sin compromiso, y una ventana de llegada real si nos necesita hoy.',
    ctaButton: 'Cotización gratis',
    illustrationNote: 'Ilustración de la falla descrita. No es una fotografía de nuestro trabajo.',
    illustrationNoteType: 'Ilustración del tipo descrito. No es una fotografía de nuestro trabajo.',
    breadcrumbHome: 'Inicio',
    breadcrumbServices: 'Servicios',
    breadcrumbAreas: 'Áreas de servicio',
    breadcrumbPrices: 'Precios',
    breadcrumbDoorsOpeners: 'Puertas y motores',
    breadcrumbGuides: 'Guías',
    breadcrumbFaq: 'Preguntas',
    breadcrumbAbout: 'Nosotros',
    breadcrumbContact: 'Contacto',
    breadcrumbPrivacy: 'Privacidad',

    eyebrowService: 'Servicio',
    startingPrice: 'Precio inicial',
    typicalRange: (low, high) => `Rango típico de ${low} a ${high}`,
    whatMovesPrice: 'Qué cambia este precio',
    whatMovesPriceText:
      'El precio inicial de arriba corresponde a una puerta de garaje sencilla estándar en condiciones normales. Estas son las cosas que llevan un trabajo por encima de ese número, y le decimos cuáles aplican antes de empezar, no después.',
    whyPickUs: 'Por qué los clientes nos eligen para esto',
    howJobRuns: 'Cómo se hace el trabajo',
    serviceQuestions: (name) => `Preguntas sobre ${name.toLowerCase()}`,
    relatedServices: 'Servicios relacionados',
    guidesOnThis: 'Guías sobre este tema',
    whereWeWork: 'Dónde trabajamos',
    whereWeWorkNote: 'Servicio el mismo día en toda Florida.',

    eyebrowRegion: 'Región',
    areaH1: (inPhrase) => `Reparación de puertas de garaje ${inPhrase}`,
    pricesIn: (inPhrase) => `Precios ${inPhrase}`,
    doorsLike: (inPhrase) => `Cómo son las puertas ${inPhrase}`,
    whatWeSee: (name) => `Lo que vemos en ${name}`,
    servicesWeProvide: (inPhrase) => `Servicios que ofrecemos ${inPhrase}`,
    allServicesCost: 'Todos los servicios y lo que cuesta cada uno →',
    areaQuestions: (inPhrase) => `Preguntas sobre puertas de garaje ${inPhrase}`,
    nearbyAreas: 'Áreas cercanas',
    allOf: (name) => `Todo ${name} →`,
    communitiesIn: (name) => `Comunidades en ${name}`,
    beforeYouCall: 'Antes de llamar a cualquiera',
    beforeYouCallNote:
      'Averigüe qué falló realmente, y cuánto debería costar, antes de levantar el teléfono.',
    emergencyQ: '¿Emergencia?',
    emergencyNote:
      '¿Carro atrapado o puerta trabada abierta? Servicio el mismo día, los siete días de la semana. El recargo por salida es de $150 a $300 y se lo decimos antes de enviar a alguien.',
    emergencyService: 'Servicio de emergencia',
    areaCtaHeading: (inPhrase) => `Pida una cotización de puerta de garaje ${inPhrase}`,
    areaCtaText: (area) =>
      `Cuéntenos qué pasó y le damos el número antes de enviar a alguien. Servicio en toda ${area}.`,
    regionPage: 'Página de la región',

    eyebrowMaterial: 'Material de puerta',
    eyebrowOpener: 'Tipo de motor',
    installedPrice: 'Precio instalado',
    noise: 'Ruido',
    bestFor: 'Ideal para',
    compareAll: 'Comparar todas las opciones',
    goodAt: 'En qué es bueno',
    badAt: 'En qué es malo',
    otherMaterials: 'Otros materiales',
    otherDriveTypes: 'Otros tipos de motor',
    readyToFit: '¿Listo para instalar uno?',
    readyToFitNote:
      'Publicamos el precio de instalación y ponemos el presupuesto por escrito antes de pedir cualquier cosa.',
    newDoorInstall: 'Instalación de puerta nueva',
    openerInstall: 'Instalación de motor',
    materialsHeading: 'Materiales de puertas de garaje',
    materialsLead: 'Cinco materiales, ordenados según la frecuencia con que son la respuesta correcta en Florida.',
    openersHeading: 'Tipos de motor',
    openersLead:
      'El tipo de transmisión decide qué tan ruidoso es el motor y cómo aguanta un garaje de Florida en agosto.',
    brandsHeading: 'Marcas que atendemos',
    brandsLead: 'Las marcas que más vemos en los garajes de Florida, y lo que suele fallar en cada una.',
    installed: 'instalada',
    choosingQuestions: 'Preguntas para elegir',
    buyersCtaHeading: '¿No sabe cuál le queda a su garaje?',
    buyersCtaText:
      'Describa el vano y lo que hay ahora, y le decimos qué cabe realmente y qué certificación necesita antes de que alguien le cotice una puerta.',
    eyebrowOpenerBrand: 'Marca de motor',
    eyebrowDoorBrand: 'Marca de puerta',
    brandH1: (name, isOpener) =>
      `Reparación e instalación de ${isOpener ? 'motores' : 'puertas'} ${name}`,
    brandDisclosure: (name) =>
      `Somos una empresa de reparación independiente. No tenemos vínculo con ${name} ni la representamos. Reparamos e instalamos sus productos.`,
    brandUsuallyWrong: (name) => `Lo que suele fallar en ${name}`,
    whatItCosts: 'Cuánto cuesta',
    brandQuestions: (name) => `Preguntas sobre ${name}`,
    otherBrands: 'Otras marcas que atendemos',

    eyebrowPrices: 'Precios publicados',
    colService: 'Servicio',
    colStarting: 'Precio inicial',
    colRange: 'Rango típico',
    colCovers: 'Qué cubre el precio',
    commonAdditions: 'Adicionales comunes',
    colItem: 'Concepto',
    colPrice: 'Precio',
    colWhen: 'Cuándo aplica',
    promiseWritten: 'Por escrito antes, no después',
    promiseWrittenText:
      'Recibe el precio por escrito antes de que toquemos nada, y ese número es el que dice la factura.',
    promiseNoBait: 'Sin tarifa de salida engañosa',
    promiseNoBaitText:
      'No anunciamos una visita de $29 para ganar el dinero con piezas cotizadas cuando su puerta ya está desarmada.',
    promiseShown: 'La pieza que falló, a la vista',
    promiseShownText:
      'Si decimos que una pieza falló, se la mostramos. Una recomendación que usted no puede ver es una recomendación que no puede comprobar.',
    pricingQuestions: 'Preguntas sobre precios',
    pricesCtaHeading: 'Describa el problema y le damos el número',
    pricesCtaText: 'Sin compromiso, y sin enviar un técnico antes de que sepa cuánto cuesta.',
    pricesCaption: 'Precios iniciales publicados por servicio',
    addOnsCaption: 'Conceptos adicionales',

    eyebrowServices: 'Servicios',
    repairsHeading: 'Reparaciones',
    installMaintenanceHeading: 'Instalación y mantenimiento',
    hurricaneHeading: 'Huracanes y tormentas',
    aboutOurServices: 'Sobre nuestros servicios',
    eyebrowAreas: 'Áreas de servicio',
    coverageQuestions: 'Preguntas sobre cobertura',
    eyebrowGuides: 'Guías',
    eyebrowBuyersGuide: 'Guía de compra',
    eyebrowQuestions: 'Preguntas',
    eyebrowAbout: 'Nosotros',
    eyebrowFreeQuote: 'Cotización gratis',
    whatYouGet: 'Lo que recibe, siempre',

    clusterLabels: {
      cost: 'Guía de costos',
      symptom: 'Guía de síntomas',
      product: 'Guía para elegir',
      trust: 'Guía para contratar',
      safety: 'Seguridad',
      maintenance: 'Mantenimiento',
      hurricane: 'Huracanes y código',
    },
    clusterBlurbs: {
      hurricane: {
        label: 'Huracanes, código e seguro',
        blurb: 'Puertas certificadas, permisos, refuerzos, daños por tormenta y el crédito de mitigación de viento, explicados con claridad.',
      },
      cost: { label: 'Cuánto cuestan las cosas', blurb: 'Números reales de Florida, no promedios nacionales.' },
      symptom: { label: 'Algo anda mal', blurb: 'Averigüe qué falló antes de que alguien le cotice.' },
      maintenance: { label: 'Vida útil y mantenimiento', blurb: 'Cuánto duran las piezas con el calor y la sal de Florida, y qué las acorta.' },
      safety: { label: 'Seguridad', blurb: 'Qué es realmente peligroso y qué no.' },
      trust: { label: 'Contratar con confianza', blurb: 'Cómo distinguir una cotización honesta de una engañosa, y un contratista real de un cazatormentas.' },
      product: { label: 'Elegir puertas y motores', blurb: 'Comparaciones para la decisión de reemplazo.' },
    },
    published: 'Publicado el',
    updated: 'Actualizado el',
    relatedQuestions: 'Preguntas relacionadas',
    servicesInGuide: 'Servicios en esta guía',
    needThisFixed: '¿Necesita arreglar esto?',
    needThisFixedText: 'Cuéntenos qué pasó y le damos el número antes de enviar a nadie.',
    moreLikeThis: 'Más como esto',
    dateLocale: 'es-US',

    formName: 'Su nombre',
    formPhone: 'Teléfono',
    formEmail: 'Correo electrónico',
    formZip: 'Código postal (ZIP)',
    formZipTitle: 'Cinco dígitos, por ejemplo 33012',
    formArea: 'Área',
    formAreaSelect: 'Seleccione su área',
    formAreaOther: 'Otro lugar de Florida',
    formUrgency: 'Qué tan urgente',
    formSymptom: 'Qué anda mal',
    formService: 'Servicio que cree necesitar',
    formServiceNotSure: 'No estoy seguro, díganme ustedes',
    formMessage: 'Algo más',
    formMessagePlaceholder:
      '¿Puerta sencilla o doble? ¿Más o menos qué edad tiene? ¿Qué sonido hizo al fallar? ¿Es un daño por tormenta?',
    formSubmit: 'Enviar y recibir mi precio',
    formNote:
      'Usamos estos datos para cotizar su trabajo y nada más. Sin listas de marketing, sin compartir con terceros.',
    formHoneypot: 'No llene este campo:',
    whatWeSendBack: 'Lo que le enviaremos',
    sendBack: [
      'Un rango de precio para su problema específico',
      'Una ventana de llegada, no un día entero',
      'El recargo de emergencia por adelantado, si aplica',
      'Un presupuesto por escrito antes de empezar cualquier trabajo',
    ],
    contactHeading: 'Contacto',
    contactSevenDays: 'Los siete días de la semana, en español y en inglés',
    contactEmailNote:
      'Cotizaciones y consultas nuevas. El formulario es más rápido, porque pide el código postal y el síntoma desde el principio.',
    contactSupportNote: 'Trabajos en curso, reclamos de garantía y cambios de cita.',
    contactAreaNote:
      'Vamos hasta usted. No tenemos local de atención al público, así que no publicamos una dirección en la que no recibimos clientes.',
    hoursHeading: 'Horario',
    hoursNote:
      'El servicio de emergencia fuera de este horario tiene un recargo por salida de $150 a $300, que se informa antes de enviar a alguien.',
    aboutGettingQuote: 'Sobre cómo obtener una cotización',
    errFill: (field) => `Por favor complete ${field} antes de enviar.`,
    errFormat: 'revise el formato.',
    errFast: 'Eso se envió más rápido de lo que se puede llenar un formulario. Espere un momento y vuelva a presionar enviar.',
    errZip:
      'Ese código postal está fuera de Florida. Revíselo, o díganos en el mensaje dónde está la puerta realmente.',
    errPitch: 'Este formulario es solo para trabajos de puertas de garaje. Para cualquier otra cosa, use el correo del pie de página.',
    requiredField: 'un campo obligatorio',

    thanksTitle: 'Gracias, recibimos su solicitud',
    thanksDescription: 'Recibimos su solicitud de cotización y le responderemos con un precio y una ventana de llegada.',
    thanksH1: 'Ya la tenemos',
    thanksLead:
      'Su solicitud llegó. Le responderemos con un rango de precio para su problema específico y una ventana de llegada. No se envía a nadie ni se cobra nada hasta que usted tenga ese número y haya dicho que sí.',
    thanksNext: 'Qué sigue',
    thanksSteps: [
      'Leemos lo que envió y determinamos cuál es el trabajo realmente.',
      'Recibe un rango de precio para ese problema, no uno genérico.',
      'Recibe una ventana de llegada, y el recargo de emergencia por adelantado si aplica.',
      'Si decide seguir, recibe el presupuesto por escrito antes de que toquemos nada.',
    ],
    thanksUrgent: (phone) =>
      `Si su carro está atrapado o la puerta quedó trabada abierta, llame al ${phone} en lugar de esperar la respuesta.`,
    thanksWhileYouWait: 'Mientras espera',
    thanksFullList: 'La lista de precios publicada completa',

    privacyTitle: 'Política de privacidad',
    privacyDescription: 'Cómo manejamos la información que nos envía, en lenguaje claro.',
    privacyH1: 'Política de privacidad',
    privacyLead:
      'Versión corta: usamos lo que nos envía para cotizar y realizar su trabajo. No lo vendemos y no lo agregamos a ninguna lista de marketing.',
    privacySections: [
      {
        heading: 'Qué recopilamos',
        text: 'Cuando envía el formulario de cotización recopilamos su nombre, número de teléfono, código postal y, opcionalmente, su correo electrónico, su área y lo que escriba en el campo de mensaje. El formulario también registra desde qué página lo envió, en qué idioma, y a qué marca y área de servicio pertenece la solicitud, para que la atienda la persona correcta. Usamos Google Analytics para entender cómo la gente encuentra y recorre el sitio. Eso recopila la información de tráfico anónima habitual: páginas vistas, ubicación aproximada, tipo de dispositivo y fuente de referencia. No nos dice quién es usted.',
      },
      {
        heading: 'Qué hacemos con ella',
        text: 'Usamos sus datos de contacto para cotizar su trabajo, coordinar una visita y dar seguimiento al trabajo. Usamos las estadísticas del sitio para decidir qué páginas mejorar. Esa es toda la lista.',
      },
      {
        heading: 'Qué no hacemos',
        text: 'No vendemos su información. No la compartimos con terceros para su propio marketing. No lo agregamos a una lista de correo por haber pedido una cotización.',
      },
      {
        heading: 'Quién más puede verla',
        text: 'Los envíos del formulario los procesa nuestro proveedor de alojamiento y se guardan en el sistema que usamos para gestionar los trabajos. Cuando un trabajo lo realiza un técnico asociado en su zona, ese técnico recibe los datos necesarios para hacer el trabajo y nada más.',
      },
      {
        heading: 'Cookies',
        text: 'El sitio usa cookies de analítica. No usa cookies publicitarias ni píxeles de seguimiento para remarketing de terceros. Puede bloquear las cookies en su navegador y el sitio seguirá funcionando.',
      },
    ],
    privacyRemoval: (email) =>
      `Las solicitudes de cotización y los registros de trabajos se conservan mientras los necesitemos para el historial de servicio, reclamos de garantía y registros fiscales. Si quiere que sus datos se eliminen antes, escriba a ${email} y lo haremos.`,
    privacyChoices: (email) =>
      `Puede preguntarnos qué información tenemos sobre usted, pedir que la corrijamos o pedir que la eliminemos. Escriba a ${email} y le responderemos.`,
    privacyContact: (email) => `Las preguntas sobre esta política van a ${email}.`,

    notFoundTitle: 'Página no encontrada',
    notFoundText: 'Esa página no existe. La lista de precios y las páginas de servicios son el camino más rápido de regreso.',
  },
};
