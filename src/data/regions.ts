/**
 * Regional (multi-city) landing pages. Search Console showed real queries at
 * the region level ("duct cleaning south florida", "air duct cleaning broward",
 * "air duct cleaning palm beach") that no single city page targets, so these
 * pages cover the county / metro layer between the service-areas hub and the
 * 38 city pages.
 *
 * Each entry drives one English page at /service-areas/{slug} and one Spanish
 * page at /es/areas-de-servicio/{esSlug}, both rendered by
 * src/components/RegionPage.astro.
 */

import { business } from './business';

import type { FAQ } from './services';
import { cities, type City } from './cities';

export interface RegionPageContent {
  slug: string;
  esSlug: string;
  name: string;
  esName: string;
  /** Filter: match by cities.ts `region` label or by county name(s). */
  region?: City['region'];
  counties?: string[];
  metaTitle: string;
  metaDescription: string;
  esMetaTitle: string;
  esMetaDescription: string;
  /** Full quotable paragraph for the answer box (business name included). */
  answer: string;
  esAnswer: string;
  body: string[];
  esBody: string[];
  faq: FAQ[];
  esFaq: FAQ[];
}

export const regionPages: RegionPageContent[] = [
  {
    slug: 'south-florida',
    esSlug: 'sur-de-florida',
    name: 'South Florida',
    esName: 'Sur de Florida',
    region: 'South Florida',
    metaTitle: 'Air Duct Cleaning in South Florida | Miami-Dade, Broward & Palm Beach',
    metaDescription:
      'Professional air duct and dryer vent cleaning across South Florida. One licensed, insured team covering Miami-Dade, Broward, and Palm Beach counties. Free quotes, same-week service.',
    esMetaTitle: 'Limpieza de Ductos en el Sur de Florida | Miami-Dade, Broward y Palm Beach',
    esMetaDescription:
      'Limpieza profesional de ductos de aire y de secadora en todo el sur de Florida. Un solo equipo con licencia y seguro para los condados de Miami-Dade, Broward y Palm Beach. Cotización gratis.',
    answer:
      'Florida Breeze Air Duct provides professional air duct cleaning, dryer vent cleaning, and indoor air quality services across the entire South Florida tri-county area: Miami-Dade, Broward, and Palm Beach. One licensed, insured team, NADCA source-removal equipment, free quotes, and same-week appointments throughout the region.',
    esAnswer:
      'Florida Breeze Air Duct ofrece limpieza profesional de ductos de aire, limpieza del ducto de secadora y servicios de calidad del aire interior en toda la zona de los tres condados del sur de Florida: Miami-Dade, Broward y Palm Beach. Un solo equipo con licencia y seguro, equipo NADCA de extracción en la fuente, cotizaciones gratis y citas en la misma semana.',
    body: [
      'South Florida is the hardest environment in the country for ductwork. Air conditioners run practically every day of the year, coastal humidity hovers near 75 percent, and salt air moves miles inland. That combination feeds coil mold, packs ducts with dust and pollen, and quietly drives up cooling bills from Homestead to Jupiter.',
      'We built our coverage around the whole tri-county area rather than a single city. The same crews, the same negative-air source-removal equipment, and the same pricing serve high-rise condos on Brickell and Fort Lauderdale Beach, golf communities in Boca Raton and Delray Beach, and family neighborhoods in Kendall, Pembroke Pines, and West Palm Beach.',
      'Every South Florida job follows NADCA standards: the system goes under continuous suction, each run is agitated with rotary brushes and air whips, and everything we remove ends up in a sealed HEPA collection unit instead of your living room. If we find mold at the coil or in the ducts, we document it with photos and explain the remediation options before any extra work.',
    ],
    esBody: [
      'El sur de Florida es el entorno más exigente del país para los ductos. El aire acondicionado funciona casi todos los días del año, la humedad costera ronda el 75 por ciento y el aire con sal llega varias millas tierra adentro. Esa combinación alimenta el moho en el serpentín, llena los ductos de polvo y polen y sube las facturas de enfriamiento sin que nadie lo note, desde Homestead hasta Jupiter.',
      'Organizamos nuestra cobertura alrededor de los tres condados completos y no de una sola ciudad. Las mismas cuadrillas, el mismo equipo de aire negativo con extracción en la fuente y los mismos precios atienden los condominios de Brickell y de la playa de Fort Lauderdale, las comunidades de golf de Boca Raton y Delray Beach y los vecindarios familiares de Kendall, Pembroke Pines y West Palm Beach.',
      'Cada trabajo en el sur de Florida sigue las normas NADCA: el sistema queda bajo succión continua, cada tramo se agita con cepillos rotativos y látigos de aire, y todo lo que retiramos termina en una unidad de recolección sellada con filtro HEPA y no en su sala. Si encontramos moho en el serpentín o en los ductos, lo documentamos con fotos y le explicamos las opciones de remediación antes de cualquier trabajo adicional.',
    ],
    faq: [
      { question: 'How much does air duct cleaning cost in South Florida?', answer: 'A complete single-system cleaning runs $300 to $600 across Miami-Dade, Broward, and Palm Beach counties. Dryer vent cleaning runs $100 to $200. Condo high-rises and multi-system homes get a custom quote up front.' },
      { question: 'How often should air ducts be cleaned in South Florida?', answer: 'Every 3 to 5 years for most homes, and every 2 to 3 years if you have pets, allergies, or any history of mold. South Florida humidity accelerates buildup compared to the rest of the country.' },
      { question: 'Which South Florida cities do you serve?', answer: 'All of Miami-Dade, Broward, and Palm Beach counties, including Miami, Fort Lauderdale, Hollywood, Pembroke Pines, Boca Raton, Boynton Beach, Delray Beach, and West Palm Beach. If you are anywhere in the tri-county area, we cover you.' },
      { question: 'Do you offer same-week appointments in South Florida?', answer: 'Yes. Crews work throughout the tri-county area every day, so most South Florida jobs are scheduled within the same week, often within a couple of days.' },
    ],
    esFaq: [
      { question: 'Cuánto cuesta la limpieza de ductos en el sur de Florida?', answer: 'Una limpieza completa de un solo sistema cuesta entre $300 y $600 en los condados de Miami-Dade, Broward y Palm Beach. La limpieza del ducto de secadora cuesta entre $100 y $200. Las torres de condominios y las casas con varios sistemas reciben una cotización personalizada por adelantado.' },
      { question: 'Cada cuánto se deben limpiar los ductos en el sur de Florida?', answer: 'Cada 3 a 5 años en la mayoría de las casas, y cada 2 a 3 años si tiene mascotas, alergias o antecedentes de moho. La humedad del sur de Florida acelera la acumulación en comparación con el resto del país.' },
      { question: 'Qué ciudades del sur de Florida atienden?', answer: 'Todo Miami-Dade, Broward y Palm Beach, incluidos Miami, Fort Lauderdale, Hollywood, Pembroke Pines, Boca Raton, Boynton Beach, Delray Beach y West Palm Beach. Si está en cualquier punto de los tres condados, lo cubrimos.' },
      { question: 'Ofrecen citas en la misma semana en el sur de Florida?', answer: 'Sí. Nuestras cuadrillas trabajan todos los días en los tres condados, así que la mayoría de los trabajos se agenda dentro de la misma semana, muchas veces en un par de días.' },
    ],
  },
  {
    slug: 'broward-county',
    esSlug: 'condado-de-broward',
    name: 'Broward County',
    esName: 'Condado de Broward',
    counties: ['Broward County'],
    metaTitle: 'Air Duct Cleaning in Broward County, FL | Fort Lauderdale to Coral Springs',
    metaDescription:
      'Air duct and dryer vent cleaning across Broward County: Fort Lauderdale, Hollywood, Pembroke Pines, Plantation, Coral Springs, and more. Licensed, insured, NADCA standards. Free quotes.',
    esMetaTitle: 'Limpieza de Ductos en el Condado de Broward, FL | Fort Lauderdale y Más',
    esMetaDescription:
      'Limpieza de ductos de aire y de secadora en todo el condado de Broward: Fort Lauderdale, Hollywood, Pembroke Pines, Plantation, Coral Springs y más. Con licencia y seguro. Cotización gratis.',
    answer:
      'Florida Breeze Air Duct serves all of Broward County with professional air duct cleaning, dryer vent cleaning, and mold remediation, from the beach condos of Fort Lauderdale and Hollywood to the inland suburbs of Pembroke Pines, Plantation, Sunrise, and Coral Springs. Licensed and insured, NADCA source-removal standards, free quotes.',
    esAnswer:
      'Florida Breeze Air Duct atiende todo el condado de Broward con limpieza profesional de ductos de aire, limpieza del ducto de secadora y remediación de moho, desde los condominios de playa de Fort Lauderdale y Hollywood hasta los suburbios de Pembroke Pines, Plantation, Sunrise y Coral Springs. Con licencia y seguro, normas NADCA de extracción en la fuente y cotizaciones gratis.',
    body: [
      'Broward County homes work their air conditioning hard. Coastal cities like Fort Lauderdale, Hollywood, and Pompano Beach deal with salt air and constant humidity, while the big inland suburbs, Pembroke Pines, Miramar, Plantation, Sunrise, and Coral Springs, are full of family homes where the AC runs around the clock and ducts fill with dust, dander, and pollen.',
      'A lot of Broward housing dates from the 1970s through the 1990s, which means original ductwork that has never been opened, flexible runs that sag and tear in hot attics, and dryer vents routed long distances to the roof. Those are exactly the problems our crews handle every day: source-removal duct cleaning, duct repair and rerouting, and dryer vent cleaning and installation.',
      'We quote the full price before work starts, show up in the window we promise, and finish with before and after photos. Whether you are near the beach in Deerfield Beach or inland in Coconut Creek, the same licensed, insured team covers you.',
    ],
    esBody: [
      'Las casas del condado de Broward exigen mucho a su aire acondicionado. Las ciudades costeras como Fort Lauderdale, Hollywood y Pompano Beach lidian con aire salado y humedad constante, mientras que los grandes suburbios del interior, Pembroke Pines, Miramar, Plantation, Sunrise y Coral Springs, están llenos de casas familiares donde el aire funciona sin parar y los ductos se llenan de polvo, caspa de mascotas y polen.',
      'Buena parte de las viviendas de Broward se construyó entre los años 70 y 90. Eso significa ductos originales que nunca se han abierto, tramos flexibles que se cuelgan y se rompen en áticos calientes y ductos de secadora con recorridos largos hasta el techo. Son exactamente los problemas que nuestras cuadrillas resuelven a diario: limpieza por extracción en la fuente, reparación y reubicación de ductos, y limpieza e instalación del ducto de secadora.',
      'Cotizamos el precio completo antes de empezar, llegamos en la ventana de tiempo prometida y terminamos con fotos de antes y después. Ya sea cerca de la playa en Deerfield Beach o en el interior en Coconut Creek, lo atiende el mismo equipo con licencia y seguro.',
    ],
    faq: [
      { question: 'How much does air duct cleaning cost in Broward County?', answer: 'Most Broward homes pay $300 to $600 for a complete single-system cleaning and $100 to $200 for dryer vent cleaning. You get the exact price up front, with no add-ons invented on site.' },
      { question: 'Which Broward County cities do you cover?', answer: 'All of them, including Fort Lauderdale, Hollywood, Pembroke Pines, Miramar, Pompano Beach, Plantation, Davie, Sunrise, Coral Springs, Coconut Creek, and Deerfield Beach.' },
      { question: 'Are your Broward technicians licensed and insured?', answer: 'Yes. Every technician working in Broward County is licensed and insured, and every cleaning follows NADCA source-removal standards.' },
      { question: 'How fast can you get to a Broward County home?', answer: `Crews are in Broward daily, so most appointments land within the same week. Call ${business.phone} and we will give you the next available window for your city.` },
    ],
    esFaq: [
      { question: 'Cuánto cuesta la limpieza de ductos en el condado de Broward?', answer: 'La mayoría de las casas de Broward paga entre $300 y $600 por la limpieza completa de un sistema y entre $100 y $200 por la limpieza del ducto de secadora. Le damos el precio exacto por adelantado, sin cargos inventados en sitio.' },
      { question: 'Qué ciudades del condado de Broward cubren?', answer: 'Todas, incluidas Fort Lauderdale, Hollywood, Pembroke Pines, Miramar, Pompano Beach, Plantation, Davie, Sunrise, Coral Springs, Coconut Creek y Deerfield Beach.' },
      { question: 'Sus técnicos en Broward tienen licencia y seguro?', answer: 'Sí. Cada técnico que trabaja en el condado de Broward cuenta con licencia y seguro, y cada limpieza sigue las normas NADCA de extracción en la fuente.' },
      { question: 'Qué tan rápido pueden llegar a una casa en Broward?', answer: `Tenemos cuadrillas en Broward todos los días, así que la mayoría de las citas queda dentro de la misma semana. Llame al ${business.phone} y le damos la próxima ventana disponible para su ciudad.` },
    ],
  },
  {
    slug: 'palm-beach-county',
    esSlug: 'condado-de-palm-beach',
    name: 'Palm Beach County',
    esName: 'Condado de Palm Beach',
    counties: ['Palm Beach County'],
    metaTitle: 'Air Duct Cleaning in Palm Beach County, FL | West Palm Beach Area Pros',
    metaDescription:
      'Air duct cleaning, dryer vent cleaning, and duct mold removal across Palm Beach County: West Palm Beach, Boca Raton, Boynton Beach, and Delray Beach. Local 561 team. Free quotes.',
    esMetaTitle: 'Limpieza de Ductos en el Condado de Palm Beach, FL | West Palm Beach',
    esMetaDescription:
      'Limpieza de ductos de aire, ducto de secadora y eliminación de moho en ductos en el condado de Palm Beach: West Palm Beach, Boca Raton, Boynton Beach y Delray Beach. Equipo local 561. Cotización gratis.',
    answer:
      'Florida Breeze Air Duct is a local Palm Beach County team, reachable at our 561 number, providing air duct cleaning, dryer vent cleaning, and air duct mold removal throughout West Palm Beach, Boca Raton, Boynton Beach, Delray Beach, and the surrounding communities. Licensed, insured, NADCA standards, free quotes.',
    esAnswer:
      'Florida Breeze Air Duct es un equipo local del condado de Palm Beach, con número 561, que ofrece limpieza de ductos de aire, limpieza del ducto de secadora y eliminación de moho en ductos en West Palm Beach, Boca Raton, Boynton Beach, Delray Beach y las comunidades cercanas. Con licencia, seguro, normas NADCA y cotizaciones gratis.',
    body: [
      'Palm Beach County is home base for us. Our phone number starts with 561 because our crews start their mornings here, from downtown West Palm Beach to the gated communities west of Boynton Beach and the golf course neighborhoods of Boca Raton and Delray Beach.',
      'The county mixes two very different duct problems. Older coastal homes and condos east of I-95 fight humidity and salt air, which show up as musty AC smells and mold at the coil. Newer construction west of the turnpike has long flexible duct runs through hot attics that leak, sag, and fill with construction dust. We clean, repair, and treat both every week.',
      'Duct mold is the request we hear most in Palm Beach County. Our process is honest: we camera-inspect first, show you what we find, and only then quote remediation. Cleaning with negative-air equipment removes the contamination, an EPA-registered antimicrobial treats the surfaces, and a coil UV light can keep it from coming back.',
    ],
    esBody: [
      'El condado de Palm Beach es nuestra base. Nuestro número de teléfono empieza con 561 porque nuestras cuadrillas comienzan la mañana aquí, desde el centro de West Palm Beach hasta las comunidades cerradas al oeste de Boynton Beach y los vecindarios con campos de golf de Boca Raton y Delray Beach.',
      'El condado combina dos problemas de ductos muy distintos. Las casas y condominios costeros más antiguos, al este de la I-95, pelean contra la humedad y el aire salado, que se manifiestan como olor a humedad en el aire acondicionado y moho en el serpentín. La construcción más nueva, al oeste del turnpike, tiene tramos largos de ducto flexible que cruzan áticos calientes y que gotean, se cuelgan y se llenan de polvo de obra. Limpiamos, reparamos y tratamos ambos casos cada semana.',
      'La eliminación de moho en ductos es la solicitud que más escuchamos en el condado de Palm Beach. Nuestro proceso es honesto: primero inspeccionamos con cámara, le mostramos lo que encontramos y solo entonces cotizamos la remediación. La limpieza con equipo de aire negativo retira la contaminación, un antimicrobiano registrado por la EPA trata las superficies y una luz UV en el serpentín puede evitar que regrese.',
    ],
    faq: [
      { question: 'Do you remove mold from air ducts in Palm Beach County?', answer: 'Yes. Air duct mold removal is one of our most requested Palm Beach County services. We inspect with a camera, clean with negative-air source-removal equipment, apply an EPA-registered antimicrobial, and can install a coil UV light to prevent regrowth.' },
      { question: 'How much does air duct cleaning cost in West Palm Beach and Boca Raton?', answer: 'The range is the same across the county: $300 to $600 for a complete single-system cleaning, $100 to $200 for dryer vent cleaning, and custom quotes for mold remediation based on what the inspection finds.' },
      { question: 'Which Palm Beach County cities do you serve?', answer: 'West Palm Beach, Boca Raton, Boynton Beach, Delray Beach, and the surrounding communities, including Lake Worth Beach, Wellington, Jupiter, Palm Beach Gardens, and Royal Palm Beach.' },
      { question: 'Are you actually local to Palm Beach County?', answer: 'Yes. Our number is a local 561 number and our crews are based in the county, which is why most Palm Beach appointments can be scheduled within a few days.' },
    ],
    esFaq: [
      { question: 'Eliminan moho de los ductos en el condado de Palm Beach?', answer: 'Sí. La eliminación de moho en ductos es uno de los servicios que más nos piden en el condado de Palm Beach. Inspeccionamos con cámara, limpiamos con equipo de aire negativo de extracción en la fuente, aplicamos un antimicrobiano registrado por la EPA y podemos instalar una luz UV en el serpentín para evitar que regrese.' },
      { question: 'Cuánto cuesta la limpieza de ductos en West Palm Beach y Boca Raton?', answer: 'El rango es el mismo en todo el condado: $300 a $600 por la limpieza completa de un sistema, $100 a $200 por el ducto de secadora y cotizaciones personalizadas para la remediación de moho según lo que encuentre la inspección.' },
      { question: 'Qué ciudades del condado de Palm Beach atienden?', answer: 'West Palm Beach, Boca Raton, Boynton Beach, Delray Beach y las comunidades cercanas, incluidas Lake Worth Beach, Wellington, Jupiter, Palm Beach Gardens y Royal Palm Beach.' },
      { question: 'De verdad son locales del condado de Palm Beach?', answer: 'Sí. Nuestro número es un 561 local y nuestras cuadrillas tienen base en el condado. Por eso la mayoría de las citas en Palm Beach se puede agendar en pocos días.' },
    ],
  },
];

export function getRegionPage(slug: string): RegionPageContent | undefined {
  return regionPages.find((r) => r.slug === slug || r.esSlug === slug);
}

export function citiesForRegionPage(r: RegionPageContent): City[] {
  return cities.filter((c) =>
    r.counties ? r.counties.includes(c.county) : c.region === r.region,
  );
}
