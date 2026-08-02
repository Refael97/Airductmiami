/**
 * The buyer's guide cluster: door materials, opener drive types, and brands.
 *
 * This exists because there are TWO buyers, not one (see the product-taxonomy
 * pass in research/ny-garage). The repair buyer converts today at $170 to
 * $700 and is served by the service and city pages. The replace buyer
 * researches for weeks and converts at $1,000 to $4,600, and until this
 * cluster existed the site had nothing for them.
 *
 * Prices here are installed prices for a standard single door or a standard
 * installation, and carry the same starting-price disclaimer as everything
 * else on the site.
 */

import type { FAQ } from './services';

export interface DoorMaterial {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  priceLow: number;
  priceHigh: number;
  answer: string;
  intro: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
  facts: { label: string; value: string }[];
  faq: FAQ[];
}

export const doorMaterials: DoorMaterial[] = [
  {
    slug: 'steel-garage-doors',
    name: 'Steel Garage Doors',
    shortName: 'Steel',
    metaTitle: 'Steel Garage Doors in New York | Cost, Pros and Cons',
    metaDescription:
      'Steel garage doors installed in the New York metro area from $1,056. What they cost, how the gauges differ, how they handle salt air, and when steel is the wrong choice.',
    priceLow: 1056,
    priceHigh: 3200,
    answer:
      'A steel garage door is the most common choice in New York, installed from about $1,056 for a standard single door and up to roughly $3,200 for an insulated double with a decorative finish. Steel is strong, low maintenance and inexpensive, and its weakness is denting and, near the water, corrosion at any scratch.',
    intro: [
      'Steel is the default garage door material in this region and for good reason. It is the cheapest way to get a door that is strong, dimensionally stable through New York temperature swings, and effectively maintenance free for years at a time.',
      'The number that matters when comparing steel doors is the gauge, and lower means thicker. A 24 gauge door is noticeably more dent resistant than a 27 or 28 gauge one, and on a door that gets used by a family with bikes and bins in the garage that difference is worth paying for.',
      'The thing to understand about steel near salt water is that the factory finish is the protection. Once it is scratched through, corrosion starts at that point and spreads under the coating. On the south shore and the coastal parts of Brooklyn and Staten Island that is the failure mode we see most.',
    ],
    pros: [
      'Lowest installed cost of any material for the same size',
      'Strong and dimensionally stable through the full New York temperature range',
      'Available insulated, which matters when the garage is under living space',
      'No refinishing, unlike wood',
    ],
    cons: [
      'Dents, and a dented steel section usually has to be replaced rather than repaired',
      'Corrodes at any scratch through the finish, which is a real issue near the water',
      'Single-skin uninsulated steel transmits both cold and noise',
    ],
    bestFor:
      'Most New York homes, and specifically anywhere the priority is cost, strength and not thinking about the door again for a decade.',
    facts: [
      { label: 'Installed price', value: '$1,056 to $3,200' },
      { label: 'Gauge to look for', value: '24 or 25 gauge' },
      { label: 'Maintenance', value: 'Wash, and touch up scratches' },
      { label: 'Typical life', value: '20 to 30 years' },
    ],
    faq: [
      {
        question: 'What gauge steel garage door should I get?',
        answer:
          'For a family home, 24 or 25 gauge. Builder-grade doors are often 27 or 28 gauge, which is thinner and dents from an ordinary knock. The price difference at the point of purchase is far smaller than the cost of replacing a dented section later.',
      },
      {
        question: 'Can a dented steel door be repaired?',
        answer:
          'Small dents can sometimes be pushed out, but the finish is usually damaged and the result is visible. On a sectional door the practical fix is replacing the affected section, which starts at $250 if the profile is still available.',
      },
      {
        question: 'Is a steel door a bad idea near the ocean?',
        answer:
          'Not bad, but it needs care. Keep the factory finish intact, touch up scratches quickly, and specify galvanised or stainless hardware, because the fixings corrode long before the panel does.',
      },
    ],
  },
  {
    slug: 'aluminium-garage-doors',
    name: 'Aluminum Garage Doors',
    shortName: 'Aluminum',
    metaTitle: 'Aluminum Garage Doors in New York | Cost, Pros and Cons',
    metaDescription:
      'Aluminum garage doors installed in New York from $1,400. Lighter than steel, does not rust, dents more easily. Full cost, pros and cons and when aluminum is the right call.',
    priceLow: 1400,
    priceHigh: 4200,
    answer:
      'An aluminum garage door costs roughly $1,400 to $4,200 installed in the New York area. Aluminum does not rust, which makes it the sensible coastal choice, and it is lighter than steel, which is easier on the opener. It dents more easily than steel, and full-view glass and aluminum doors sit at the top of that range.',
    intro: [
      'Aluminum earns its place in two situations: near salt water, where its immunity to rust is worth real money, and in contemporary full-view doors where an aluminum frame carries glass panels.',
      'Weight is the underrated advantage. An aluminum door is lighter than the equivalent steel one, which means a smaller spring, less strain on the opener and less mass moving over your head. On an older garage where the framing is questionable, that matters.',
      'The trade-off is straightforward: aluminum is softer. It dents from impacts that would leave a mark on steel and nothing more. If the garage is a working space with bikes and equipment moving past the door, that is the deciding factor.',
    ],
    pros: [
      'Does not rust, which is the whole argument on the coast',
      'Lighter than steel, so less load on the opener and springs',
      'The only practical frame for a contemporary full-view glass door',
      'Very low maintenance',
    ],
    cons: [
      'Dents more easily than steel',
      'Costs more than steel for the same size',
      'Full-view glass versions are heavy on price and low on insulation',
    ],
    bestFor:
      'Waterfront properties in Long Beach, Freeport, Howard Beach, Mill Basin and the Staten Island South Shore, and contemporary homes wanting a full-view door.',
    facts: [
      { label: 'Installed price', value: '$1,400 to $4,200' },
      { label: 'Rust', value: 'Does not rust' },
      { label: 'Dent resistance', value: 'Lower than steel' },
      { label: 'Typical life', value: '20 to 30 years' },
    ],
    faq: [
      {
        question: 'Is aluminum better than steel near the water?',
        answer:
          'For the panel itself, yes, because it cannot rust. The hardware still can, so a coastal aluminum door should be specified with galvanised or stainless fixings and nylon rollers with sealed bearings.',
      },
      {
        question: 'How much is a full-view glass and aluminum door?',
        answer:
          'They sit at the top of the aluminum range and beyond it, commonly $3,000 to $6,000 or more installed depending on glass type and size. They also insulate poorly, which matters if the garage is attached to living space.',
      },
    ],
  },
  {
    slug: 'wood-garage-doors',
    name: 'Wood Garage Doors',
    shortName: 'Wood',
    metaTitle: 'Wood Garage Doors in New York | Cost, Pros and Cons',
    metaDescription:
      'Wood garage doors installed in New York from $2,000 to $10,000. What they cost, why they need a heavier spring, and the maintenance nobody mentions before you buy.',
    priceLow: 2000,
    priceHigh: 10000,
    answer:
      'A wood garage door costs roughly $2,000 to $10,000 installed in the New York area depending on species and whether it is custom. Wood looks better than anything else on an older house, weighs considerably more than steel, needs a heavier spring, and requires refinishing every few years or the bottom section starts absorbing water.',
    intro: [
      'Wood is the material people want on a Scarsdale colonial, a Garden City carriage house or a Douglaston tudor, and on those houses nothing else looks right. It is also the material most likely to be sold without a full explanation of what owning it involves.',
      'Weight is the mechanical consequence. A wood door can weigh half again what a steel door of the same size does, which means a different spring specification. If a previous installer fitted a standard spring to save money, the door has been out of balance ever since and the opener has been paying for it.',
      'The maintenance is real. A wood door needs its finish maintained on a cycle of a few years, and the bottom edge is where neglect shows first. Water wicks up, the section swells, and a swollen bottom section on a custom door is an expensive thing to replace.',
    ],
    pros: [
      'The only material that genuinely suits a period house',
      'Can be made to any size and any design, including matching an existing elevation',
      'Repairable in ways a dented steel panel is not, since wood can be filled and refinished',
      'Naturally better at damping noise than single-skin steel',
    ],
    cons: [
      'Highest maintenance of any material, with refinishing every few years',
      'Heaviest, so it needs a heavier spring and puts more load on the opener',
      'The bottom section absorbs water if the finish is neglected',
      'Highest cost, particularly for custom sizes',
    ],
    bestFor:
      'Period and architecturally specific homes in Westchester, Garden City, Douglaston and Dyker Heights, where the door is part of the elevation.',
    facts: [
      { label: 'Installed price', value: '$2,000 to $10,000' },
      { label: 'Weight vs steel', value: 'Roughly 1.5x' },
      { label: 'Refinishing', value: 'Every 2 to 4 years' },
      { label: 'Typical life', value: '30 years or more if maintained' },
    ],
    faq: [
      {
        question: 'Does a wood door need a different spring?',
        answer:
          'Yes. Spring size is determined by door weight, and a wood door is significantly heavier than steel of the same dimensions. A door fitted with an undersized spring will not hold halfway when you lift it by hand, and it quietly destroys the opener attached to it.',
      },
      {
        question: 'How often does a wood garage door need refinishing?',
        answer:
          'Every two to four years for a south or west facing door, longer if it is sheltered. The bottom eighteen inches matter most, because that is where water sits and wicks up.',
      },
      {
        question: 'Is a wood-look composite a good compromise?',
        answer:
          'Often, yes. Composite and faux-wood steel doors give most of the appearance with none of the refinishing, and they weigh far less. On a genuinely historic elevation the difference is visible up close; from the street it usually is not.',
      },
    ],
  },
  {
    slug: 'fiberglass-garage-doors',
    name: 'Fiberglass Garage Doors',
    shortName: 'Fiberglass',
    metaTitle: 'Fiberglass Garage Doors in New York | Cost, Pros and Cons',
    metaDescription:
      'Fiberglass garage doors installed in New York from $1,500 to $4,000. Rust-proof, light, convincing wood grain, and brittle in a hard freeze. Full pros and cons.',
    priceLow: 1500,
    priceHigh: 4000,
    answer:
      'A fiberglass garage door costs roughly $1,500 to $4,000 installed in the New York area. Fiberglass cannot rust, is light, and takes a wood grain finish convincingly, which makes it a common answer for a coastal house that wants the look of wood. Its weakness is cold: fiberglass becomes brittle in a hard freeze and can crack on impact.',
    intro: [
      'Fiberglass sits between aluminum and wood. It cannot rust, which suits the coast, and modern moulded fiberglass takes a wood grain finish well enough that from the street it reads as timber.',
      'The New York caveat is temperature. Fiberglass loses toughness as it gets colder, and on the coldest mornings of a real winter it is more brittle than steel or aluminum. An impact that would dent steel can crack fiberglass, and a crack is not repairable in the way a dent is.',
      'It also fades. A dark fiberglass door on a south facing elevation will lose some colour over ten to fifteen years, more noticeably than a factory-finished steel door would.',
    ],
    pros: [
      'Cannot rust, so it suits coastal exposure',
      'Light, which is easy on springs and opener',
      'Convincing wood grain finishes without wood maintenance',
      'Does not dent the way steel does',
    ],
    cons: [
      'Becomes brittle in hard cold and can crack on impact',
      'Fades over time on sun-facing elevations',
      'A cracked panel is a replacement, not a repair',
      'Insulation depends entirely on the core, so check the R-value rather than the material',
    ],
    bestFor:
      'Coastal homes that want the appearance of wood without the maintenance, particularly on sheltered or north-facing elevations.',
    facts: [
      { label: 'Installed price', value: '$1,500 to $4,000' },
      { label: 'Rust', value: 'Cannot rust' },
      { label: 'Cold weather', value: 'Becomes brittle below freezing' },
      { label: 'Typical life', value: '15 to 25 years' },
    ],
    faq: [
      {
        question: 'Does fiberglass crack in New York winters?',
        answer:
          'It can, on impact, during a hard freeze. It is not a spontaneous failure, it is an impact resistance question. If your door regularly takes knocks, steel is the safer material here.',
      },
      {
        question: 'Is fiberglass well insulated?',
        answer:
          'That depends on the core, not the skin. Ask for the R-value rather than assuming. A polyurethane-cored fiberglass door insulates well; a hollow one does not.',
      },
    ],
  },
  {
    slug: 'vinyl-garage-doors',
    name: 'Vinyl Garage Doors',
    shortName: 'Vinyl',
    metaTitle: 'Vinyl Garage Doors in New York | Cost, Pros and Cons',
    metaDescription:
      'Vinyl garage doors installed in New York from $1,200 to $3,000. Effectively dent-proof and rust-proof, limited colour choice, and it cannot be repainted. Full pros and cons.',
    priceLow: 1200,
    priceHigh: 3000,
    answer:
      'A vinyl garage door costs roughly $1,200 to $3,000 installed in the New York area. Vinyl does not rust, does not dent in any normal use, and needs no refinishing, which makes it the lowest maintenance door available. The trade-offs are limited colour choice, no repainting, and fewer style options than steel.',
    intro: [
      'Vinyl is the answer for a garage that takes abuse. It flexes rather than dents, which is why it turns up on homes with children, bikes and equipment moving past the door daily.',
      'The colour is moulded through the material rather than painted on, which is both the advantage and the limitation. It cannot chip and it cannot be repainted, so the colour you buy is the colour you keep for the life of the door.',
      'Style choice is narrower than steel. Manufacturers make fewer vinyl models, and decorative and carriage options are limited, so on a house where the door is part of the elevation it is usually the wrong pick.',
    ],
    pros: [
      'Effectively dent-proof in normal use',
      'Cannot rust and needs no refinishing',
      'Colour goes through the material rather than sitting on top, so it cannot chip',
      'Good insulation options are widely available',
    ],
    cons: [
      'Cannot be repainted, so the colour choice is permanent',
      'Limited range of colours and styles',
      'Fewer manufacturers, so replacement sections can be harder to source years later',
    ],
    bestFor:
      'Working garages, homes with children, and anyone whose priority is never thinking about the door again.',
    facts: [
      { label: 'Installed price', value: '$1,200 to $3,000' },
      { label: 'Dent resistance', value: 'Highest of any material' },
      { label: 'Repainting', value: 'Not possible' },
      { label: 'Typical life', value: '20 to 30 years' },
    ],
    faq: [
      {
        question: 'Can a vinyl garage door be painted?',
        answer:
          'Not reliably. The colour is part of the material and paint does not bond well to it. Choose the colour on the assumption that it is permanent.',
      },
      {
        question: 'Does vinyl get brittle in the cold?',
        answer:
          'Less than fiberglass, but it is not immune. Modern vinyl door skins are formulated for cold climates and hold up well through New York winters.',
      },
    ],
  },
];

export interface OpenerType {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  priceLow: number;
  priceHigh: number;
  noise: string;
  answer: string;
  intro: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
  facts: { label: string; value: string }[];
  faq: FAQ[];
}

export const openerTypes: OpenerType[] = [
  {
    slug: 'chain-drive-openers',
    name: 'Chain Drive Garage Door Openers',
    shortName: 'Chain drive',
    metaTitle: 'Chain Drive Garage Door Openers in New York | Cost and Noise',
    metaDescription:
      'Chain drive garage door openers installed in New York from $281. The cheapest and toughest drive type, and the loudest. When a chain drive is the right choice.',
    priceLow: 281,
    priceHigh: 450,
    noise: 'Loud',
    answer:
      'A chain drive garage door opener costs $281 to $450 installed in New York. It uses a metal chain to move the door, which makes it the cheapest and most durable drive type and also the loudest. It is the right choice for a detached garage and the wrong one for a garage under a bedroom.',
    intro: [
      'The chain drive is the original and still the most common opener in America. A metal chain runs along the rail and pulls the trolley, which is a simple mechanism with very little to go wrong.',
      'It is loud, and the noise is structural rather than incidental: metal chain against metal rail, transmitted into the framing. In a detached garage nobody cares. Under a bedroom, everybody does.',
      'For pure durability, particularly on a heavy door, chain is still the drive that lasts. If your garage is separate from the house there is no strong argument for spending more.',
    ],
    pros: [
      'Cheapest drive type to buy and install',
      'Most durable, especially on heavy doors',
      'Parts are universally available',
      'Handles cold and temperature swings without issue',
    ],
    cons: [
      'Loudest option by a clear margin',
      'Transmits vibration into the building structure',
      'Needs occasional lubrication of the chain',
    ],
    bestFor: 'Detached garages, and any garage that is not under or beside a bedroom.',
    facts: [
      { label: 'Installed price', value: '$281 to $450' },
      { label: 'Noise', value: 'Loud' },
      { label: 'Best for', value: 'Detached garages, heavy doors' },
      { label: 'Typical life', value: '10 to 15 years' },
    ],
    faq: [
      {
        question: 'Is a chain drive too loud for an attached garage?',
        answer:
          'It depends what is above it. Over a garage with living space directly overhead, most people regret it. Over a garage with a utility room or nothing above, it is fine. Belt drive is the direct upgrade if noise matters.',
      },
      {
        question: 'How long does a chain drive opener last?',
        answer:
          'Ten to fifteen years in normal residential use, and often longer, provided the door itself is balanced. An out-of-balance door shortens the life of any opener regardless of drive type.',
      },
    ],
  },
  {
    slug: 'belt-drive-openers',
    name: 'Belt Drive Garage Door Openers',
    shortName: 'Belt drive',
    metaTitle: 'Belt Drive Garage Door Openers in New York | Cost and Noise',
    metaDescription:
      'Belt drive garage door openers installed in New York from $350. Near silent, no lubrication, and the right answer when there is a bedroom above the garage.',
    priceLow: 350,
    priceHigh: 630,
    noise: 'Very quiet',
    answer:
      'A belt drive garage door opener costs $350 to $630 installed in New York. It uses a reinforced rubber belt instead of a chain, which makes it dramatically quieter and maintenance free. It is the correct choice whenever there is living space above or beside the garage.',
    intro: [
      'A belt drive is mechanically the same idea as a chain drive with the chain replaced by a steel-reinforced rubber belt. That single change removes almost all of the noise and all of the lubrication.',
      'It is the default recommendation for any attached garage in this region, and specifically for the under-house garages that are standard in Bay Ridge, Marine Park and New Dorp, where the door is directly below the living space.',
      'The premium over a chain drive is modest, roughly seventy to a hundred and fifty dollars in most cases, and it is one of the few upgrades that people consistently say afterwards was worth it.',
    ],
    pros: [
      'Far quieter than chain, close to silent in use',
      'No chain lubrication, so effectively maintenance free',
      'Smoother travel, which is easier on the door hardware',
      'Widely available with battery backup and WiFi',
    ],
    cons: [
      'Costs more than a chain drive',
      'Belts can be affected by extreme temperature swings in an uninsulated garage',
      'On very heavy doors, chain is still the more durable choice',
    ],
    bestFor:
      'Attached garages, under-house garages, and any home where somebody sleeps near the door.',
    facts: [
      { label: 'Installed price', value: '$350 to $630' },
      { label: 'Noise', value: 'Very quiet' },
      { label: 'Maintenance', value: 'None on the belt' },
      { label: 'Typical life', value: '10 to 15 years' },
    ],
    faq: [
      {
        question: 'Is a belt drive worth the extra money?',
        answer:
          'If there is a bedroom over or beside the garage, yes without hesitation. If the garage is detached, the extra buys you very little.',
      },
      {
        question: 'Do belts break?',
        answer:
          'Rarely. A steel-reinforced belt in residential use typically outlives the motor driving it. Extreme heat and cold in an uninsulated garage shorten its life somewhat.',
      },
    ],
  },
  {
    slug: 'screw-drive-openers',
    name: 'Screw Drive Garage Door Openers',
    shortName: 'Screw drive',
    metaTitle: 'Screw Drive Garage Door Openers in New York | Cost and Cold Weather',
    metaDescription:
      'Screw drive garage door openers installed in New York from $300. Few moving parts and strong lift, but temperature sensitive, which matters in a New York winter.',
    priceLow: 300,
    priceHigh: 500,
    noise: 'Moderate',
    answer:
      'A screw drive garage door opener costs $300 to $500 installed in New York. It drives the trolley along a threaded steel rod, which means very few moving parts and strong lifting power. Its weakness is temperature sensitivity, which is a genuine consideration in an uninsulated New York garage.',
    intro: [
      'A screw drive uses a threaded steel rod rather than a chain or belt. Fewer moving parts means less to fail, and the direct thread gives it real lifting power on a heavy door.',
      'The New York problem is the grease on that rod. In an uninsulated garage it thickens in the cold and thins in summer heat, and a screw drive that is running rough in January is usually telling you the lubricant is wrong for the season rather than that the unit is failing.',
      'Modern screw drives handle this far better than older ones did, but in a climate with real winters it is still the drive type we recommend least often for an unheated garage.',
    ],
    pros: [
      'Very few moving parts',
      'Strong lift, which suits heavy and oversized doors',
      'Faster travel than chain or belt on most models',
      'Little routine maintenance beyond periodic lubrication',
    ],
    cons: [
      'Temperature sensitive, which matters in an uninsulated New York garage',
      'Louder than belt, though quieter than chain',
      'Fewer models available than chain or belt',
    ],
    bestFor: 'Heavy or oversized doors in an insulated or heated garage.',
    facts: [
      { label: 'Installed price', value: '$300 to $500' },
      { label: 'Noise', value: 'Moderate' },
      { label: 'Cold weather', value: 'Sensitive if uninsulated' },
      { label: 'Typical life', value: '10 to 15 years' },
    ],
    faq: [
      {
        question: 'My screw drive struggles in winter. Is it dying?',
        answer:
          'Usually not. Thickened grease on the drive rod is the most common cause, and re-lubricating with the correct low-temperature product fixes it. If it still struggles after that, the force settings or the spring balance are the next things to check.',
      },
    ],
  },
  {
    slug: 'direct-drive-openers',
    name: 'Direct Drive Garage Door Openers',
    shortName: 'Direct drive',
    metaTitle: 'Direct Drive Garage Door Openers in New York | Cost and Noise',
    metaDescription:
      'Direct drive garage door openers installed in New York from $400. The motor travels along the rail, which means one moving part and very quiet operation.',
    priceLow: 400,
    priceHigh: 630,
    noise: 'Very quiet',
    answer:
      'A direct drive garage door opener costs $400 to $630 installed in New York. The motor itself travels along the rail, so the whole system has a single moving part. It is very quiet, very reliable, and carries the longest warranties in the category.',
    intro: [
      'A direct drive inverts the usual arrangement. Instead of a stationary motor pulling a chain or belt, the motor rides in the trolley and drives itself along a fixed chain inside the rail.',
      'One moving part is the entire pitch, and it holds up: direct drives are among the most reliable openers sold and typically carry the longest manufacturer warranties of any drive type.',
      'They are quiet, in the same class as a belt drive, and they suit the same situations. The reason they are less common is simply price and the smaller number of manufacturers making them.',
    ],
    pros: [
      'A single moving part, so very little to fail',
      'Very quiet, comparable to belt drive',
      'Longest warranties in the category',
      'Smooth and consistent travel',
    ],
    cons: [
      'More expensive than chain or belt',
      'Fewer manufacturers, so less choice of features',
      'Service parts are more brand-specific',
    ],
    bestFor: 'Attached garages where quiet and long-term reliability both matter.',
    facts: [
      { label: 'Installed price', value: '$400 to $630' },
      { label: 'Noise', value: 'Very quiet' },
      { label: 'Moving parts', value: 'One' },
      { label: 'Typical life', value: '15 years or more' },
    ],
    faq: [
      {
        question: 'Direct drive or belt drive?',
        answer:
          'Both are quiet. Direct drive typically has a longer warranty and fewer parts; belt drive has more model choice and more features at a given price. For most homes either is a good answer, and we will tell you which one we would fit in your garage and why.',
      },
    ],
  },
  {
    slug: 'jackshaft-wall-mount-openers',
    name: 'Jackshaft and Wall Mount Openers',
    shortName: 'Jackshaft',
    metaTitle: 'Jackshaft Wall Mount Garage Door Openers in New York | Cost',
    metaDescription:
      'Wall mounted jackshaft garage door openers installed in New York from $450. The answer for low headroom garages in Bay Ridge, Marine Park, New Dorp and Levittown.',
    priceLow: 450,
    priceHigh: 800,
    noise: 'Quiet',
    answer:
      'A jackshaft or wall mount garage door opener costs $450 to $800 installed in New York. It mounts on the wall beside the door and drives the torsion bar directly, so it needs almost no ceiling clearance. In low headroom garages it is frequently the only opener that will physically fit.',
    intro: [
      'A jackshaft opener does away with the ceiling rail entirely. It bolts to the wall next to the door and turns the torsion bar directly, which frees the whole ceiling and needs only a few inches of headroom above the door.',
      'In this region that is not a luxury feature, it is a solution to a very common problem. Under-house garages in Bay Ridge, Marine Park, New Dorp and Sheepshead Bay routinely lack the clearance for a standard rail, and so do many of the converted garages in Levittown.',
      'It requires a torsion spring system rather than extension springs, and it needs the door to be properly balanced, because it drives the bar directly. On a door that is out of balance it will complain immediately, which is arguably a feature.',
    ],
    pros: [
      'Needs almost no headroom, so it fits where nothing else will',
      'Frees the entire garage ceiling for storage',
      'Quiet, since there is no rail above your head',
      'Usually includes an integrated deadbolt lock on the door',
    ],
    cons: [
      'Costs more than any rail-mounted drive',
      'Requires a torsion spring system, not extension springs',
      'Requires a well-balanced door, and will not tolerate a bad one',
      'Not every door and track configuration suits one',
    ],
    bestFor:
      'Low headroom and under-house garages across Brooklyn and Staten Island, and converted garages in Levittown.',
    facts: [
      { label: 'Installed price', value: '$450 to $800' },
      { label: 'Headroom needed', value: 'A few inches' },
      { label: 'Spring type required', value: 'Torsion' },
      { label: 'Noise', value: 'Quiet' },
    ],
    faq: [
      {
        question: 'How much headroom does a standard opener need?',
        answer:
          'A standard rail opener typically needs around twelve to fourteen inches above the door, and low-profile kits get that down to about eight. Below that, a wall mounted jackshaft is the answer.',
      },
      {
        question: 'Can I fit a jackshaft to any door?',
        answer:
          'It needs a torsion spring system and a door that is correctly balanced. If your door runs on extension springs, converting to torsion is part of the job and it is priced separately rather than hidden in the total.',
      },
    ],
  },
];

export interface Brand {
  slug: string;
  name: string;
  kind: 'opener' | 'door';
  metaTitle: string;
  metaDescription: string;
  answer: string;
  intro: string[];
  common: string[];
  faq: FAQ[];
}

export const brands: Brand[] = [
  {
    slug: 'liftmaster',
    name: 'LiftMaster',
    kind: 'opener',
    metaTitle: 'LiftMaster Garage Door Opener Repair and Installation | New York',
    metaDescription:
      'LiftMaster opener repair and installation across the New York metro area. Repairs from $100, new installation from $281, with a written estimate before any work.',
    answer:
      'We repair and install LiftMaster garage door openers across the New York metro area. Repair starts at $100 and a new LiftMaster installed starts at $281. LiftMaster is the professional-channel brand from the same manufacturer as Chamberlain, and parts availability is the best in the category.',
    intro: [
      'LiftMaster is the brand most professional installers fit, and it is the one we see most often in this region. It shares its manufacturer with Chamberlain, which sells through retail, and many components are interchangeable between the two.',
      'The practical advantage is parts. Logic boards, travel modules, safety sensors, gear and sprocket kits and remotes for LiftMaster units are widely available, which means a repair is genuinely possible on units that are ten or more years old rather than only in theory.',
    ],
    common: [
      'Gear and sprocket wear on chain drive units, which shows up as a motor that runs without moving the door',
      'Logic board failure after a power surge',
      'Safety sensor misalignment, which makes the door reverse immediately after closing',
      'Travel limit drift, so the door stops short or presses too hard at the floor',
    ],
    faq: [
      {
        question: 'Is my LiftMaster worth repairing?',
        answer:
          'Usually, if it is under about fifteen years old and the fault is a gear kit, a sensor or a board. If the repair approaches half the price of a new unit, or if the opener predates 1993 and has no photo eye sensors, replacement is the better spend and we will say so.',
      },
      {
        question: 'Can I use a Chamberlain remote with a LiftMaster opener?',
        answer:
          'Often yes, because they share a manufacturer and frequency systems. It depends on the year and the security code system in your unit, and we can confirm from the model number.',
      },
    ],
  },
  {
    slug: 'chamberlain',
    name: 'Chamberlain',
    kind: 'opener',
    metaTitle: 'Chamberlain Garage Door Opener Repair and Installation | New York',
    metaDescription:
      'Chamberlain opener repair and installation in New York. Repairs from $100, new installation from $281, with a written estimate before any work starts.',
    answer:
      'We repair and install Chamberlain garage door openers across the New York metro area. Repair starts at $100 and installation at $281. Chamberlain is the retail brand from the same manufacturer as LiftMaster, so most internal parts are shared.',
    intro: [
      'Chamberlain is the retail counterpart to LiftMaster, made by the same manufacturer. The units are frequently the same mechanism in a different housing, which is good news for repairability.',
      'The most common Chamberlain calls we take are on units bought and self-installed, where the fault turns out to be installation rather than the opener: sensors mounted too high, travel limits never set correctly, or the unit fixed to framing that was never designed to carry it.',
    ],
    common: [
      'Safety sensors mounted above the recommended six inches, so they miss obstructions',
      'Travel and force limits left at factory defaults rather than set to the door',
      'Gear and sprocket wear on older chain units',
      'MyQ connectivity problems after a router change',
    ],
    faq: [
      {
        question: 'I installed a Chamberlain myself and it reverses. Why?',
        answer:
          'Most often the safety sensors are misaligned or mounted too high, or the down force is set too low for the door. Both are quick to correct. It is also worth checking that the door itself is balanced, because an opener fighting a heavy door will trip its own safety limits.',
      },
    ],
  },
  {
    slug: 'genie',
    name: 'Genie',
    kind: 'opener',
    metaTitle: 'Genie Garage Door Opener Repair and Installation | New York',
    metaDescription:
      'Genie garage door opener repair and installation across New York. Repairs from $100, installation from $281, written estimate before any work.',
    answer:
      'We repair and install Genie garage door openers across the New York metro area. Repair starts at $100 and installation at $281. Genie is the main alternative to the LiftMaster and Chamberlain family and is common on screw drive installations in this region.',
    intro: [
      'Genie is the largest independent alternative to the LiftMaster family and has been in American garages for decades. A good share of the screw drive openers we see in this region are Genie units.',
      'Older Genie models used a different remote coding system from the LiftMaster family, which is the single most common source of confusion when someone buys a replacement remote from a hardware store. Matching the code system to the unit is what makes a remote work, not the brand on the box.',
    ],
    common: [
      'Carriage and rail wear on screw drive units',
      'Remote and keypad pairing failures after a battery change',
      'Safety beam failures on older Safe-T-Beam sensors',
      'Circuit board failure on units over about twelve years old',
    ],
    faq: [
      {
        question: 'Why will my new remote not pair with my Genie?',
        answer:
          'Almost always a code system mismatch. Genie has used several over the years, and a remote has to match the one in your unit. The model number on the motor housing tells us which one you have.',
      },
    ],
  },
  {
    slug: 'clopay',
    name: 'Clopay',
    kind: 'door',
    metaTitle: 'Clopay Garage Door Repair and Installation | New York',
    metaDescription:
      'Clopay garage door repair, section replacement and installation across New York. New doors from $1,056, sections from $250, with a written estimate first.',
    answer:
      'We repair and install Clopay garage doors across the New York metro area. Section replacement starts at $250 and a new Clopay door installed starts at $1,056. Clopay is the largest residential door manufacturer in North America, which means section availability is generally good.',
    intro: [
      'Clopay is the biggest residential garage door manufacturer in North America, and it is the brand behind a large share of the doors on New York houses, including many sold under retail store names.',
      'For repairs, that scale is an advantage. Section profiles stay in production longer than smaller manufacturers manage, so replacing one damaged panel on a ten year old Clopay door is more often possible than it would be on a boutique brand.',
    ],
    common: [
      'Bottom section damage from water and impact, replaceable if the profile is current',
      'Hinge and roller wear on doors over fifteen years old',
      'Discontinued colour matching on older decorative models',
      'Insulated section delamination on very old units',
    ],
    faq: [
      {
        question: 'Can you match a Clopay section on an older door?',
        answer:
          'Often, because Clopay keeps profiles in production longer than most. Colour is the harder match on a door that has weathered for a decade. We check availability and show you the honest comparison before you commit.',
      },
    ],
  },
  {
    slug: 'amarr',
    name: 'Amarr',
    kind: 'door',
    metaTitle: 'Amarr Garage Door Repair and Installation | New York',
    metaDescription:
      'Amarr garage door repair, section replacement and installation in New York. New doors from $1,056 and sections from $250, quoted in writing before work.',
    answer:
      'We repair and install Amarr garage doors across the New York metro area. Section replacement starts at $250 and a new Amarr door installed starts at $1,056. Amarr is best known for its carriage house range, which is common on Westchester and Long Island homes.',
    intro: [
      'Amarr is a major North American manufacturer whose carriage house range turns up frequently on the kind of houses where the door is part of the elevation, which in our area means Westchester, Garden City and Dyker Heights.',
      'Carriage styling changes the repair picture. Decorative hardware and specific panel profiles are model-linked, so a damaged section on a carriage door is a question of availability first and price second.',
    ],
    common: [
      'Decorative hardware damage on carriage style doors',
      'Section profile availability on older discontinued models',
      'Standard hinge, roller and bearing wear',
      'Spring specification errors where a heavier insulated door was fitted with a standard spring',
    ],
    faq: [
      {
        question: 'Is a carriage house door harder to repair?',
        answer:
          'The mechanism is the same as any sectional door. What differs is the parts: decorative hardware and specific panel profiles are model-linked, so availability has to be checked before we can give you a real number.',
      },
    ],
  },
];

export const getDoorMaterial = (slug: string) => doorMaterials.find((d) => d.slug === slug);
export const getOpenerType = (slug: string) => openerTypes.find((o) => o.slug === slug);
export const getBrand = (slug: string) => brands.find((b) => b.slug === slug);
