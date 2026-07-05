/**
 * The Florida cities we build local landing pages for. Each drives one page at
 * /service-areas/{slug} (via src/pages/service-areas/[city].astro).
 *
 * The `intro` and `local` fields give every page genuinely unique, locally
 * relevant copy so the pages are not thin duplicates, a requirement for local
 * SEO. `region` groups cities for the service-areas hub.
 */

export interface City {
  slug: string;
  name: string;
  county: string;
  region: 'South Florida' | 'Central Florida' | 'Tampa Bay' | 'Southwest Florida' | 'North Florida' | 'Treasure Coast';
  /** Short unique intro used on the city page and in the schema description. */
  intro: string;
  /** A locally specific hook (climate, housing stock, geography). */
  local: string;
  nearby: string[]; // slugs of nearby cities for internal linking
}

export const cities: City[] = [
  // ---- South Florida ----
  { slug: 'miami', name: 'Miami', county: 'Miami-Dade County', region: 'South Florida',
    intro: 'Miami’s intense heat and coastal humidity keep air conditioners running nearly year-round, which makes clean, efficient ductwork essential for both comfort and health.',
    local: 'From high-rise condos on Brickell to single-family homes in the suburbs, Miami’s salt air and humidity accelerate mold growth inside ducts and coils, one of the most common issues we treat here.',
    nearby: ['miami-beach', 'hialeah', 'coral-gables', 'north-miami'] },
  { slug: 'miami-beach', name: 'Miami Beach', county: 'Miami-Dade County', region: 'South Florida',
    intro: 'Miami Beach’s oceanfront location means constant salt air and humidity that take a toll on HVAC systems and ductwork.',
    local: 'Historic Art Deco condos and beachfront residences here are especially prone to duct mold, and salt-laden air can corrode and foul HVAC components faster than inland.',
    nearby: ['miami', 'north-miami', 'hialeah', 'coral-gables'] },
  { slug: 'hialeah', name: 'Hialeah', county: 'Miami-Dade County', region: 'South Florida',
    intro: 'Hialeah’s dense mix of older homes and multi-family housing makes regular air duct and dryer vent maintenance especially important for safety and air quality.',
    local: 'Many Hialeah homes have older HVAC systems and long dryer vent runs, so lint buildup and duct dust are frequent concerns for the families we serve.',
    nearby: ['miami', 'miami-beach', 'north-miami', 'coral-gables'] },
  { slug: 'coral-gables', name: 'Coral Gables', county: 'Miami-Dade County', region: 'South Florida',
    intro: 'Coral Gables’ historic Mediterranean-style homes deserve careful, professional air duct care that protects both indoor air quality and the character of the property.',
    local: 'The Gables’ mature tree canopy adds pollen and organic debris to the air, while older ductwork in its landmark homes benefits from expert cleaning and sealing.',
    nearby: ['miami', 'miami-beach', 'hialeah', 'kendall'] },
  { slug: 'kendall', name: 'Kendall', county: 'Miami-Dade County', region: 'South Florida',
    intro: 'Kendall’s sprawling suburban neighborhoods rely on hard-working central AC systems that benefit from regular duct cleaning and maintenance.',
    local: 'Family homes across Kendall often run their AC around the clock in summer, making coil mold and duct dust common, and duct efficiency a real factor in cooling bills.',
    nearby: ['miami', 'coral-gables', 'homestead', 'pinecrest'] },
  { slug: 'homestead', name: 'Homestead', county: 'Miami-Dade County', region: 'South Florida',
    intro: 'Homestead’s agricultural surroundings and warm climate mean extra dust and pollen that settle into home ductwork over time.',
    local: 'Proximity to farmland brings fine field dust and seasonal pollen indoors, so Homestead homeowners often notice faster dust buildup around their vents.',
    nearby: ['kendall', 'miami', 'pinecrest', 'coral-gables'] },
  { slug: 'pinecrest', name: 'Pinecrest', county: 'Miami-Dade County', region: 'South Florida',
    intro: 'Pinecrest’s spacious homes and lush landscaping call for thorough duct care to keep indoor air clean and systems efficient.',
    local: 'Large lots with heavy vegetation mean more pollen and organic debris reaching the HVAC system in this leafy village south of Miami.',
    nearby: ['kendall', 'coral-gables', 'miami', 'homestead'] },
  { slug: 'north-miami', name: 'North Miami', county: 'Miami-Dade County', region: 'South Florida',
    intro: 'North Miami’s coastal humidity and established housing stock make routine duct cleaning and mold prevention a smart investment.',
    local: 'A mix of aging single-family homes and condos here often hides duct dust and early coil mold that our source-removal cleaning resolves.',
    nearby: ['miami', 'miami-beach', 'hialeah', 'aventura'] },
  { slug: 'aventura', name: 'Aventura', county: 'Miami-Dade County', region: 'South Florida',
    intro: 'Aventura’s high-rise condo living comes with shared and individual HVAC systems that benefit from professional duct and coil cleaning.',
    local: 'Oceanfront towers here face salt air and constant humidity, and condo air handlers are prime spots for the coil mold we specialize in removing.',
    nearby: ['north-miami', 'hollywood', 'miami-beach', 'hallandale-beach'] },
  { slug: 'fort-lauderdale', name: 'Fort Lauderdale', county: 'Broward County', region: 'South Florida',
    intro: 'Fort Lauderdale’s waterfront lifestyle and year-round humidity make clean, mold-free ductwork essential for healthy indoor air.',
    local: 'With hundreds of miles of canals and constant coastal moisture, Fort Lauderdale homes are especially susceptible to duct and air-handler mold.',
    nearby: ['hollywood', 'pompano-beach', 'plantation', 'davie'] },
  { slug: 'hollywood', name: 'Hollywood', county: 'Broward County', region: 'South Florida',
    intro: 'Hollywood’s beachside neighborhoods and older homes make regular air duct and dryer vent service important for comfort and safety.',
    local: 'Salt air from the Atlantic plus a stock of mid-century homes means duct sealing and mold prevention are frequent needs among Hollywood homeowners.',
    nearby: ['fort-lauderdale', 'hallandale-beach', 'pembroke-pines', 'davie'] },
  { slug: 'pembroke-pines', name: 'Pembroke Pines', county: 'Broward County', region: 'South Florida',
    intro: 'Pembroke Pines’ large master-planned communities depend on efficient central AC, where clean ducts translate directly into lower cooling bills.',
    local: 'The city’s many newer subdivisions still accumulate construction dust and pollen in their ductwork, and long dryer vent runs are common in two-story homes.',
    nearby: ['hollywood', 'miramar', 'davie', 'fort-lauderdale'] },
  { slug: 'miramar', name: 'Miramar', county: 'Broward County', region: 'South Florida',
    intro: 'Miramar’s fast-growing neighborhoods and warm climate make duct cleaning and dryer vent maintenance a practical part of home care.',
    local: 'Many Miramar homes are large two-story builds with lengthy dryer vents, where annual cleaning is important for fire safety and drying efficiency.',
    nearby: ['pembroke-pines', 'hollywood', 'davie', 'hialeah'] },
  { slug: 'pompano-beach', name: 'Pompano Beach', county: 'Broward County', region: 'South Florida',
    intro: 'Pompano Beach’s coastal setting exposes home HVAC systems to salt air and humidity that encourage mold and reduce efficiency.',
    local: 'Beachfront condos and inland homes alike face the humidity that drives coil and duct mold along this stretch of the Broward coast.',
    nearby: ['fort-lauderdale', 'deerfield-beach', 'boca-raton', 'plantation'] },
  { slug: 'plantation', name: 'Plantation', county: 'Broward County', region: 'South Florida',
    intro: 'Plantation’s tree-lined, established neighborhoods benefit from professional duct cleaning that removes accumulated pollen and dust.',
    local: 'The city’s abundant mature trees mean more airborne pollen and debris entering HVAC systems, a common trigger for the allergy complaints we help resolve.',
    nearby: ['fort-lauderdale', 'davie', 'sunrise', 'pembroke-pines'] },
  { slug: 'davie', name: 'Davie', county: 'Broward County', region: 'South Florida',
    intro: 'Davie’s semi-rural character and warm climate bring extra dust and pollen that make regular duct cleaning worthwhile.',
    local: 'With its equestrian properties and open land, Davie homes often see more field dust and organic debris reach the ductwork than typical suburban areas.',
    nearby: ['plantation', 'pembroke-pines', 'fort-lauderdale', 'sunrise'] },
  { slug: 'sunrise', name: 'Sunrise', county: 'Broward County', region: 'South Florida',
    intro: 'Sunrise’s suburban homes rely on constant air conditioning, making clean ducts and coils key to efficiency and air quality.',
    local: 'Year-round AC use in Sunrise means air handlers stay damp and prone to coil mold, one of the top issues we address for local homeowners.',
    nearby: ['plantation', 'davie', 'fort-lauderdale', 'coral-springs'] },
  { slug: 'coral-springs', name: 'Coral Springs', county: 'Broward County', region: 'South Florida',
    intro: 'Coral Springs’ family neighborhoods and lush landscaping make routine duct cleaning a smart way to protect indoor air quality.',
    local: 'This master-planned city’s greenery adds pollen to the air, and its many two-story homes have long dryer vents that benefit from annual cleaning.',
    nearby: ['sunrise', 'coconut-creek', 'plantation', 'boca-raton'] },
  { slug: 'coconut-creek', name: 'Coconut Creek', county: 'Broward County', region: 'South Florida',
    intro: 'Coconut Creek’s green, butterfly-friendly neighborhoods still see pollen and dust that settle into home ductwork over time.',
    local: 'Known as the “Butterfly Capital,” Coconut Creek’s heavy landscaping means extra airborne organic material for HVAC filters and ducts to catch.',
    nearby: ['coral-springs', 'pompano-beach', 'deerfield-beach', 'sunrise'] },
  { slug: 'deerfield-beach', name: 'Deerfield Beach', county: 'Broward County', region: 'South Florida',
    intro: 'Deerfield Beach’s oceanfront humidity and salt air make mold-free ductwork and clean coils especially important.',
    local: 'Coastal condos and homes here contend with the salt and moisture that accelerate HVAC mold and corrosion along the Broward to Palm Beach line.',
    nearby: ['pompano-beach', 'boca-raton', 'coconut-creek', 'coral-springs'] },
  { slug: 'boca-raton', name: 'Boca Raton', county: 'Palm Beach County', region: 'South Florida',
    intro: 'Boca Raton’s upscale homes and coastal climate deserve meticulous duct care to protect air quality and system efficiency.',
    local: 'From gated communities to beachfront estates, Boca’s humidity drives coil and duct mold, while its mature landscaping adds pollen to the mix.',
    nearby: ['delray-beach', 'deerfield-beach', 'boynton-beach', 'pompano-beach'] },
  { slug: 'delray-beach', name: 'Delray Beach', county: 'Palm Beach County', region: 'South Florida',
    intro: 'Delray Beach’s coastal charm comes with humidity that makes regular duct and coil cleaning a wise part of home maintenance.',
    local: 'Historic bungalows and newer condos alike face the salt air and moisture that foster mold in ductwork along this Palm Beach County shoreline.',
    nearby: ['boca-raton', 'boynton-beach', 'west-palm-beach', 'deerfield-beach'] },
  { slug: 'boynton-beach', name: 'Boynton Beach', county: 'Palm Beach County', region: 'South Florida',
    intro: 'Boynton Beach’s mix of coastal and inland homes benefits from professional duct cleaning to combat humidity-driven mold and dust.',
    local: 'Growing communities here run their AC hard against the coastal heat, keeping air handlers damp and duct maintenance relevant year-round.',
    nearby: ['delray-beach', 'west-palm-beach', 'boca-raton', 'lake-worth'] },
  { slug: 'west-palm-beach', name: 'West Palm Beach', county: 'Palm Beach County', region: 'South Florida',
    intro: 'West Palm Beach’s waterfront setting and warm climate make clean, efficient ductwork important for both comfort and health.',
    local: 'A blend of downtown condos and historic neighborhoods means varied HVAC systems, all facing the coastal humidity that promotes duct mold.',
    nearby: ['delray-beach', 'boynton-beach', 'lake-worth', 'palm-beach-gardens'] },
  // ---- Tampa Bay ----
  { slug: 'tampa', name: 'Tampa', county: 'Hillsborough County', region: 'Tampa Bay',
    intro: 'Tampa’s hot, humid Gulf Coast climate keeps AC systems working overtime, making clean ducts and mold-free coils essential.',
    local: 'From historic Hyde Park bungalows to New Tampa’s modern subdivisions, humidity off the bay makes coil and duct mold a frequent concern for homeowners.',
    nearby: ['st-petersburg', 'clearwater', 'brandon', 'brandon'] },
  { slug: 'st-petersburg', name: 'St. Petersburg', county: 'Pinellas County', region: 'Tampa Bay',
    intro: 'St. Petersburg’s peninsula climate surrounds homes with humid Gulf air that encourages mold in ductwork and HVAC systems.',
    local: 'Surrounded by water on three sides, St. Pete homes deal with especially high humidity, making duct and coil mold prevention a priority.',
    nearby: ['tampa', 'clearwater', 'largo', 'pinellas-park'] },
  { slug: 'clearwater', name: 'Clearwater', county: 'Pinellas County', region: 'Tampa Bay',
    intro: 'Clearwater’s beachside humidity and salt air make regular duct cleaning and coil maintenance a smart defense against mold.',
    local: 'Gulf-front condos and inland homes here share the same challenge: constant moisture that fuels HVAC mold and reduces efficiency.',
    nearby: ['st-petersburg', 'tampa', 'largo', 'palm-harbor'] },
  // ---- Central Florida ----
  { slug: 'orlando', name: 'Orlando', county: 'Orange County', region: 'Central Florida',
    intro: 'Orlando’s hot, humid climate and rapid growth mean many homes with hard-working AC systems that benefit from professional duct care.',
    local: 'Central Florida humidity drives coil mold and duct dust, while Orlando’s booming new construction leaves fine building debris inside fresh ductwork.',
    nearby: ['kissimmee', 'winter-park', 'sanford', 'winter-garden'] },
  { slug: 'kissimmee', name: 'Kissimmee', county: 'Osceola County', region: 'Central Florida',
    intro: 'Kissimmee’s warm climate and many vacation and rental homes make regular duct and dryer vent maintenance especially valuable.',
    local: 'High-turnover rental and vacation properties here see heavy HVAC and dryer use, making routine cleaning important for safety and guest comfort.',
    nearby: ['orlando', 'winter-garden', 'sanford', 'winter-park'] },
  { slug: 'winter-park', name: 'Winter Park', county: 'Orange County', region: 'Central Florida',
    intro: 'Winter Park’s historic homes and mature tree canopy make thorough duct cleaning worthwhile for cleaner, healthier air.',
    local: 'The city’s celebrated oak canopy adds abundant pollen and leaf debris to the air, which settles into ductwork and triggers allergies.',
    nearby: ['orlando', 'sanford', 'winter-garden', 'kissimmee'] },
  { slug: 'lakeland', name: 'Lakeland', county: 'Polk County', region: 'Central Florida',
    intro: 'Lakeland’s many lakes and humid climate create the moist conditions that encourage mold growth in home ductwork.',
    local: 'With more than 30 named lakes, Lakeland’s ambient humidity is high, making duct and coil mold prevention particularly relevant here.',
    nearby: ['orlando', 'kissimmee', 'tampa', 'winter-garden'] },
  { slug: 'jacksonville', name: 'Jacksonville', county: 'Duval County', region: 'North Florida',
    intro: 'Jacksonville’s humid subtropical climate and sprawling neighborhoods make clean, efficient ductwork important year-round.',
    local: 'As Florida’s largest city by area, Jacksonville spans coastal and inland homes that all face the humidity driving duct dust and coil mold.',
    nearby: ['orlando', 'sanford', 'gainesville', 'gainesville'] },
  // ---- Southwest Florida ----
  { slug: 'fort-myers', name: 'Fort Myers', county: 'Lee County', region: 'Southwest Florida',
    intro: 'Fort Myers’ hot Gulf Coast climate and seasonal population make routine duct cleaning and mold prevention a smart investment.',
    local: 'Snowbird-season homes that sit closed and humid for months are prone to duct and coil mold that we frequently remediate in the Fort Myers area.',
    nearby: ['cape-coral', 'naples', 'bonita-springs', 'estero'] },
  { slug: 'cape-coral', name: 'Cape Coral', county: 'Lee County', region: 'Southwest Florida',
    intro: 'Cape Coral’s canal-lined neighborhoods and Gulf humidity make mold-free ductwork essential for healthy indoor air.',
    local: 'With more canals than any city in the world, Cape Coral’s waterfront humidity is relentless, ideal conditions for the HVAC mold we specialize in.',
    nearby: ['fort-myers', 'naples', 'bonita-springs', 'estero'] },
  { slug: 'naples', name: 'Naples', county: 'Collier County', region: 'Southwest Florida',
    intro: 'Naples’ upscale coastal homes and warm, humid climate call for meticulous duct care to protect air quality and efficiency.',
    local: 'Luxury estates and seasonal residences here often sit closed and humid in the off-season, encouraging duct and coil mold that needs professional attention.',
    nearby: ['bonita-springs', 'fort-myers', 'cape-coral', 'estero'] },
  { slug: 'bonita-springs', name: 'Bonita Springs', county: 'Lee County', region: 'Southwest Florida',
    intro: 'Bonita Springs’ Gulf Coast humidity makes regular duct and coil cleaning a practical safeguard against mold and inefficiency.',
    local: 'Between Naples and Fort Myers, Bonita Springs shares the coastal moisture that keeps air handlers damp and duct maintenance important.',
    nearby: ['naples', 'fort-myers', 'cape-coral', 'estero'] },
  { slug: 'sarasota', name: 'Sarasota', county: 'Sarasota County', region: 'Southwest Florida',
    intro: 'Sarasota’s beautiful Gulf beaches come with humidity and salt air that make clean, mold-free ductwork important for local homes.',
    local: 'Barrier-island condos and mainland homes alike face the coastal humidity that fuels HVAC mold along Sarasota’s stretch of the Gulf.',
    nearby: ['bradenton', 'fort-myers', 'tampa', 'venice'] },
  { slug: 'bradenton', name: 'Bradenton', county: 'Manatee County', region: 'Southwest Florida',
    intro: 'Bradenton’s riverfront and Gulf-adjacent location surrounds homes with the humidity that encourages mold in ductwork.',
    local: 'Along the Manatee River and near the Gulf, Bradenton’s moisture-rich air makes duct and coil mold prevention especially worthwhile.',
    nearby: ['sarasota', 'tampa', 'st-petersburg', 'venice'] },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

/** Cities grouped by region, for the service-areas hub. */
export function citiesByRegion(): Record<string, City[]> {
  return cities.reduce<Record<string, City[]>>((acc, city) => {
    (acc[city.region] ??= []).push(city);
    return acc;
  }, {});
}
