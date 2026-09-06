/**
 * The buyer's guide cluster: door materials, opener drive types, and brands.
 *
 * This exists because there are TWO buyers, not one. The repair buyer
 * converts today at $95 to $800 and is served by the service and city pages.
 * The replace buyer researches for weeks, often with a storm three days out
 * or an insurance renewal in hand, and converts at $950 to $6,500. Until
 * this cluster existed the site had nothing for them.
 *
 * Prices here are the buyer's guide installed prices from
 * research/fl-garage/BRIEF.md section 4, for a standard single door or a
 * standard installation, and carry the same starting-price disclaimer as
 * everything else on the site. Every Florida claim comes from the Florida
 * facts in the same brief.
 */

import type { DoorMaterial, OpenerType, Brand, FAQ } from './types';

export const doorMaterials: DoorMaterial[] = [
  {
    slug: 'steel-garage-doors',
    name: 'Steel Garage Doors',
    shortName: 'Steel',
    metaTitle: 'Steel Garage Doors in Florida | Cost, Pros and Cons',
    metaDescription:
      'Steel garage doors installed in Florida from $950 to $3,000. Gauge, galvanizing against humidity and salt air, wind and impact ratings, and what a rated steel door costs.',
    priceLow: 950,
    priceHigh: 3000,
    answer:
      'A steel garage door is the most common choice in Florida, installed from about $950 for a standard wind-rated single door and up to roughly $3,000 for an insulated double with a decorative finish. Impact-rated steel doors start around $1,800. Steel is strong, cheap and low maintenance, and its weaknesses here are dents and rust at any scratch through the finish, which humidity and salt air find quickly.',
    intro: [
      'Steel is the default garage door material in Florida because it is the cheapest way to meet the wind rating the Florida Building Code requires at your address. Every new steel door carries a design pressure rating, a Florida Product Approval outside Miami-Dade and Broward, and a Miami-Dade NOA inside them. The rating changes the door: heavier gauge skins, horizontal struts across the back of each section, more track brackets and heavier hardware. An impact-rated steel door adds a large missile test on top of the pressure rating and starts around $1,800 installed.',
      'The number that matters when comparing steel doors is the gauge, and lower means thicker. A 24 gauge door is noticeably more dent resistant than a 27 or 28 gauge builder-grade door, and in a Florida garage that doubles as the storage room and the workshop the difference is worth paying for. Insulation matters here for a different reason than up north: a polyurethane core stiffens the sections and keeps a west-facing garage cooler in August, which is easier on the opener and on anything you store in there.',
      'The thing to understand about steel in humidity and salt air is that the galvanized coating and the factory paint are the protection. Once a scratch goes through to bare steel, rust starts at that point and spreads under the finish. Within a few miles of either coast, from Jupiter down to Homestead and from Naples up to Clearwater, that is the failure mode we see most, and it shows up first on the bottom section and at the hinge screws.',
    ],
    pros: [
      'Lowest installed cost of any material that meets the Florida wind rating',
      'Wind-rated and impact-rated versions from every major manufacturer, with Florida Product Approval and Miami-Dade NOA options',
      'Available insulated, which stiffens the door and keeps the garage cooler in summer',
      'No refinishing, unlike wood',
    ],
    cons: [
      'Dents, and a dented steel section usually has to be replaced rather than repaired',
      'Rusts at any scratch through the galvanizing, which is a real problem near the coast',
      'A thin builder-grade door flexes in wind and dents from an ordinary knock',
    ],
    bestFor:
      'Most Florida homes, from 1980s doubles in Coral Springs and Brandon to new builds in Wesley Chapel and Lake Nona, and anywhere the priority is meeting the code at the lowest cost and not thinking about the door again for years.',
    facts: [
      { label: 'Installed price', value: '$950 to $3,000' },
      { label: 'Impact-rated version', value: 'From about $1,800' },
      { label: 'Gauge to look for', value: '24 or 25 gauge' },
      { label: 'Coastal care', value: 'Rinse salt off, touch up scratches' },
    ],
    faq: [
      {
        question: 'What gauge steel garage door should I get in Florida?',
        answer:
          'For a family home, 24 or 25 gauge. Builder-grade doors in many 2000s subdivisions are 27 or 28 gauge, which is thinner, dents from an ordinary knock and flexes more in wind. The price difference at purchase is far smaller than the cost of replacing a dented section later, which starts at $250.',
      },
      {
        question: 'Is a wind-rated steel door the same as a hurricane door?',
        answer:
          'No. A wind-rated door is built to resist the design pressure at your site, and every new door in Florida must be at least that. An impact-rated door is also tested against large missile impact, and that is what most people mean by a hurricane door. Wind-rated steel starts at $950 installed and impact-rated steel starts around $1,800. In Miami-Dade and Broward the door needs a Miami-Dade NOA either way.',
      },
      {
        question: 'How do I stop a steel door rusting near the coast?',
        answer:
          'Keep the factory finish intact, rinse the door with fresh water when you rinse the car, and touch up scratches the week you notice them rather than the year. Ask for galvanized or stainless hinges, brackets and fasteners, because the hardware rusts long before the panel does, and a rusted bottom bracket is a safety problem because it holds the cable under spring tension.',
      },
    ],
  },
  {
    slug: 'aluminium-garage-doors',
    name: 'Aluminum Garage Doors',
    shortName: 'Aluminum',
    metaTitle: 'Aluminum Garage Doors in Florida | Cost, Pros and Cons',
    metaDescription:
      'Aluminum garage doors installed in Florida from $1,300 to $4,000, with full view impact glass doors to $8,000 and above. Salt air, dents, HOA rules and when aluminum is right.',
    priceLow: 1300,
    priceHigh: 4000,
    answer:
      'An aluminum garage door costs roughly $1,300 to $4,000 installed in Florida, and a full view aluminum door with impact-rated glass runs to $8,000 and above. Aluminum does not rust, which makes it the sensible choice on both coasts, and it is lighter than steel, which is easier on the springs and opener. It dents more easily than steel, and the glass versions insulate poorly against summer heat.',
    intro: [
      'Aluminum earns its place in two Florida situations: within a few miles of salt water, where not rusting is worth real money, and on contemporary homes where an aluminum frame carries glass panels. The full view door is now a standard part of modern remodels in Boca Raton, Fort Lauderdale, Miami and Naples, and the version that passes code there is a frame holding laminated impact glass, tested for the same wind pressure and large missile impact as any other rated door.',
      'Weight is the underrated advantage. An aluminum door is lighter than the equivalent steel one, which means a smaller spring, less strain on the opener and less mass moving over your head. Lighter also means the door cycles more easily in a household that opens it eight or ten times a day, which is normal here where the garage is the second front door.',
      'The trade-offs are straightforward. Aluminum is softer, so it dents from impacts that would only mark steel. It does not rust, but in salt air it still corrodes at the surface, especially where it touches steel screws and hinges, so the hardware specification matters. And a glass door on a west-facing driveway turns the garage into a greenhouse by 3 pm in July unless the glass is tinted or insulated, which is a cost line worth asking about.',
    ],
    pros: [
      'Does not rust, which is the whole argument on the coast',
      'Lighter than steel, so less load on the opener and springs',
      'The only practical frame for a full view impact glass door',
      'Very low maintenance, a fresh water rinse and nothing else',
    ],
    cons: [
      'Dents more easily than steel',
      'Costs more than steel for the same size, and impact glass versions cost far more',
      'Full view glass versions let summer heat straight into the garage',
    ],
    bestFor:
      'Waterfront and near-coast homes in Jupiter, Delray Beach, Cape Coral, Fort Lauderdale and Clearwater, and contemporary homes and remodels in Boca Raton, Miami and Naples that want a full view door with impact glass.',
    facts: [
      { label: 'Installed price', value: '$1,300 to $4,000' },
      { label: 'Impact glass full view', value: '$8,000 and above' },
      { label: 'Rust', value: 'Does not rust, can pit in salt air' },
      { label: 'Dent resistance', value: 'Lower than steel' },
    ],
    faq: [
      {
        question: 'Is aluminum better than steel near the ocean in Florida?',
        answer:
          'For the panel itself, yes, because it cannot rust. The hardware still can, so a coastal aluminum door should be specified with stainless or galvanized fixings and nylon rollers with sealed bearings. Rinse the door with fresh water when you wash the car and it will outlast the opener.',
      },
      {
        question: 'How much is a full view impact glass garage door?',
        answer:
          'They sit at the top of the aluminum range and beyond it. A full view door with laminated impact glass, a Florida Product Approval or Miami-Dade NOA, and a size to fit a 16 foot opening commonly runs $8,000 and above installed. The glass is most of that number. Tinted or insulated glass adds more but keeps the garage usable in summer.',
      },
      {
        question: 'Will my HOA allow a full view glass door?',
        answer:
          'Some will and some will not, and the answer is in the architectural guidelines rather than with us. Gated communities in Weston, Wellington and Lakewood Ranch often restrict door style and colour, and an application usually needs the manufacturer drawing and the colour. Get the approval in writing before you order, because a custom glass door is not returnable.',
      },
    ],
  },
  {
    slug: 'wood-garage-doors',
    name: 'Wood Garage Doors',
    shortName: 'Wood',
    metaTitle: 'Wood Garage Doors in Florida | Cost, Pros and Cons',
    metaDescription:
      'Wood garage doors installed in Florida from $2,200 to $9,000. Termites, rot at the bottom section, refinishing in sun and rain, and the heavier spring a wood door needs.',
    priceLow: 2200,
    priceHigh: 9000,
    answer:
      'A wood garage door costs roughly $2,200 to $9,000 installed in Florida depending on species, size and whether it is custom, and a wind-rated wood door that meets the Florida Building Code sits toward the top of that range. Wood looks better than anything else on a Coral Gables, Winter Park or Old Northeast house, weighs far more than steel, needs a heavier spring, and in Florida faces termites, rot and a refinishing cycle of one to two years.',
    intro: [
      'Wood is the material people want on a 1920s Coral Gables Mediterranean, a College Park bungalow or a St. Augustine house near the historic district, and on those houses nothing else looks right. It is also the material most likely to be sold without a full explanation of what owning it in Florida involves, which is a lot of sun, a lot of water, and insects that eat it.',
      'Termites are the first problem. Subterranean termites are active statewide and drywood termites are common in South Florida, and a wood door sitting on a slab with a bottom seal that stays wet for half the year is an easy target. Rot is the second. Afternoon storms from June through September put water at the bottom section every day, and where the finish has failed the water wicks up and the section swells. Choose a species that handles moisture, keep the bottom edge sealed, and treat the door the way you treat the house.',
      'Weight is the mechanical consequence. A wood door can weigh half again what a steel door of the same size does, which means a different spring specification and often a heavier opener. And the rating still applies: a new wood door needs a Florida Product Approval or a Miami-Dade NOA like any other, which narrows the choice of models and raises the price. Faux wood steel and composite doors give the look on a Weston or Palm Beach Gardens carriage style house with none of this, and they are what we recommend for most people who ask about wood.',
    ],
    pros: [
      'The only material that genuinely suits a period house',
      'Can be made to any size and any design, including matching an existing elevation',
      'Repairable in ways a dented steel panel is not, since wood can be filled and refinished',
      'Naturally quiet and solid in use',
    ],
    cons: [
      'Highest maintenance of any material in Florida: refinishing every one to two years in full sun, and a bottom section that termites and rot go after first',
      'Heaviest, so it needs a heavier spring and puts more load on the opener',
      'Highest cost, and wind-rated and impact-rated wood models are limited and custom',
    ],
    bestFor:
      'Period and architecturally specific homes in Coral Gables, Winter Park, College Park, Old Northeast St. Petersburg and historic St. Augustine, where the door is part of the elevation and the owner will keep up the finish.',
    facts: [
      { label: 'Installed price', value: '$2,200 to $9,000' },
      { label: 'Weight vs steel', value: 'Roughly 1.5x' },
      { label: 'Refinishing', value: 'Every 1 to 2 years in full sun' },
      { label: 'Insects', value: 'Check for termites at every service' },
    ],
    faq: [
      {
        question: 'Does a wood door need a different spring?',
        answer:
          'Yes. Spring size is determined by door weight, and a wood door is significantly heavier than steel of the same dimensions. A door fitted with an undersized spring will not hold halfway when you lift it by hand, and it quietly destroys the opener attached to it. We weigh or calculate the door before we quote the spring.',
      },
      {
        question: 'How often does a wood garage door need refinishing in Florida?',
        answer:
          'Every one to two years for a door facing south or west, longer if it is under a deep overhang. The bottom 18 inches matter most, because that is where the afternoon rain sits and wicks up. If the finish is cracked or chalky, water is already getting in.',
      },
      {
        question: 'Can I get a hurricane-rated wood garage door?',
        answer:
          'Wind-rated wood doors exist and some are impact-rated, but they are custom, heavy and expensive, and the choice is thin in the HVHZ where a Miami-Dade NOA is required. A faux wood steel or composite door with the same rating starts far lower, and from the street most people cannot tell. We show you both before you decide.',
      },
    ],
  },
  {
    slug: 'fiberglass-garage-doors',
    name: 'Fiberglass Garage Doors',
    shortName: 'Fiberglass',
    metaTitle: 'Fiberglass Garage Doors in Florida | Cost, Pros and Cons',
    metaDescription:
      'Fiberglass garage doors installed in Florida from $1,400 to $3,800. No rust, no termites, light, convincing wood grain, and the UV fading and cracking to know about before you buy.',
    priceLow: 1400,
    priceHigh: 3800,
    answer:
      'A fiberglass garage door costs roughly $1,400 to $3,800 installed in Florida. Fiberglass cannot rust, is light, and takes a wood grain finish convincingly, which makes it a common answer for a coastal house that wants the look of wood without termites or refinishing. Its weaknesses here are UV fading on a sun-facing driveway and cracking on a hard impact, and a cracked panel is a replacement, not a repair.',
    intro: [
      'Fiberglass sits between aluminum and wood. Most fiberglass doors are a molded fiberglass skin bonded to a steel frame with a foam core, so the skin cannot rust and the frame carries the wind rating. From the street a good wood grain fiberglass door reads as timber, and termites have no interest in it, which is why it comes up so often in Melbourne, Palm Coast, Venice and other coastal towns where a real wood door would be a maintenance project.',
      'The Florida caveat is sun. Fiberglass fades and chalks under UV faster than a factory-finished steel door does, and a dark stained finish on a west-facing driveway in Cape Coral or Port St. Lucie will look noticeably lighter in ten years. A lighter colour and a deep overhang slow it down; a good quality topcoat slows it more. Ask the manufacturer what the finish warranty actually covers, because fading is often excluded.',
      'It also cracks rather than dents. An impact from a car bumper or a dropped ladder that would leave a dent in steel can crack a fiberglass skin, and once cracked the section is replaced rather than repaired. The rating question is the same as every other material: wind-rated fiberglass doors with Florida Product Approval are available, impact-rated versions are fewer, and in Miami-Dade and Broward the door needs a Miami-Dade NOA.',
    ],
    pros: [
      'Cannot rust, and termites do not eat it, so it suits the coast and the wood look together',
      'Light, which is easy on springs and opener',
      'Convincing wood grain finishes without wood maintenance',
      'Does not dent the way steel does',
    ],
    cons: [
      'Fades and chalks under Florida sun, fastest on a south or west facing driveway',
      'Cracks on a hard impact, and a cracked panel is a replacement, not a repair',
      'Fewer wind-rated and impact-rated models than steel, so the choice is narrower',
    ],
    bestFor:
      'Coastal homes from Melbourne down to Jupiter and from Naples up to Palm Coast that want the appearance of wood without termites and refinishing, particularly on a north-facing or shaded driveway.',
    facts: [
      { label: 'Installed price', value: '$1,400 to $3,800' },
      { label: 'Rust and termites', value: 'Neither' },
      { label: 'Sun', value: 'Fades under UV, choose lighter colours' },
      { label: 'Insulation', value: 'Depends on the core, ask for the R-value' },
    ],
    faq: [
      {
        question: 'Does fiberglass fade in the Florida sun?',
        answer:
          'Yes, faster than factory-painted steel. A dark stain on a west-facing door will lighten visibly over about ten years. Lighter colours, a deep overhang and a good topcoat slow it. It is cosmetic, not structural, but it is the complaint we hear most on fiberglass.',
      },
      {
        question: 'Is fiberglass well insulated?',
        answer:
          'That depends on the core, not the skin. Ask for the R-value rather than assuming. A polyurethane cored fiberglass door keeps a garage noticeably cooler in summer and is stiffer in wind; a hollow one does neither.',
      },
      {
        question: 'Can I get a hurricane-rated fiberglass door?',
        answer:
          'Wind-rated fiberglass doors with a Florida Product Approval are available from the major manufacturers. Impact-rated fiberglass is a shorter list, and in the HVHZ the door needs a Miami-Dade NOA. We check the approval for your address and wind zone before we quote, because the same model can be approved at one pressure and not another.',
      },
    ],
  },
  {
    slug: 'vinyl-garage-doors',
    name: 'Vinyl Garage Doors',
    shortName: 'Vinyl',
    metaTitle: 'Vinyl Garage Doors in Florida | Cost, Pros and Cons',
    metaDescription:
      'Vinyl garage doors installed in Florida from $1,100 to $2,800. Dent-proof and rust-proof, cannot be repainted, and softens in heat, so colour choice matters. Full pros and cons.',
    priceLow: 1100,
    priceHigh: 2800,
    answer:
      'A vinyl garage door costs roughly $1,100 to $2,800 installed in Florida. Vinyl does not rust, does not dent in normal use, and needs no refinishing, which makes it the lowest maintenance door you can buy for a golf cart community or a busy family garage. The trade-offs are limited colour choice, no repainting, heat sensitivity in dark colours, and fewer wind-rated and impact-rated models than steel.',
    intro: [
      'Vinyl is the answer for a garage that takes abuse. It flexes rather than dents, which is why it turns up in The Villages and the 55 plus communities around Boynton Beach and Spring Hill where the door cycles several times a day for the golf cart, and in family garages where bikes and bins move past the door daily. Salt air does nothing to it.',
      'Heat is the Florida consideration. Vinyl expands in heat, and a dark colour on a west-facing driveway can soften and show a slight wave across the sections by late afternoon. Manufacturers make most vinyl doors in white and light colours for exactly this reason. Choose light, and choose a door with a rigid backer or foam core rather than a hollow skin, and it behaves.',
      'The colour is molded through the material rather than painted on, which is both the advantage and the limitation. It cannot chip and it cannot be repainted, so the colour you buy is the colour you keep, and an HOA that later changes its approved palette cannot be answered with a coat of paint. Style choice is also narrower than steel, and so is the list of wind-rated models, so we check the Florida Product Approval for your wind zone before we quote.',
    ],
    pros: [
      'Effectively dent-proof in normal use, which suits golf cart garages and family garages',
      'Cannot rust and needs no refinishing',
      'Colour goes through the material rather than sitting on top, so it cannot chip',
      'Foam core versions insulate well and keep the garage cooler in summer',
    ],
    cons: [
      'Cannot be repainted, so the colour choice is permanent',
      'Dark colours soften and can wave in afternoon heat, so the practical palette is white and light',
      'Fewer manufacturers and fewer wind-rated and impact-rated models than steel',
    ],
    bestFor:
      'Golf cart communities like The Villages, 55 plus developments, and busy family garages in Riverview, Oviedo and Port St. Lucie where the priority is never thinking about the door again.',
    facts: [
      { label: 'Installed price', value: '$1,100 to $2,800' },
      { label: 'Dent resistance', value: 'Highest of any material' },
      { label: 'Heat', value: 'Choose white or light colours' },
      { label: 'Repainting', value: 'Not possible' },
    ],
    faq: [
      {
        question: 'Can a vinyl garage door be painted?',
        answer:
          'Not reliably. The colour is part of the material and paint does not bond well to it. Choose the colour on the assumption that it is permanent, and get HOA approval for it in writing first.',
      },
      {
        question: 'Does vinyl warp in Florida heat?',
        answer:
          'Dark vinyl on a west-facing door can soften and show a wave by late afternoon, then settle overnight. White and light colours do not, which is why nearly every vinyl door sold here is one of those. A foam core or rigid backer keeps the sections flat.',
      },
      {
        question: 'Is a vinyl door hurricane-rated?',
        answer:
          'Some vinyl doors carry a Florida Product Approval at the wind pressures common inland, and the list gets short at coastal pressures and in the HVHZ. If you are within a few miles of the coast or in Miami-Dade or Broward, expect us to steer you to steel or aluminum. Hurricane-rated doors of any material start around $1,800 installed.',
      },
    ],
  },
];

export const openerTypes: OpenerType[] = [
  {
    slug: 'chain-drive-openers',
    name: 'Chain Drive Garage Door Openers',
    shortName: 'Chain drive',
    metaTitle: 'Chain Drive Garage Door Openers in Florida | Cost, Noise',
    metaDescription:
      'Chain drive garage door openers installed in Florida from $275 to $450. The cheapest and toughest drive, the loudest, and how it holds up in a 100°F garage. Battery backup adds $60 to $150.',
    priceLow: 275,
    priceHigh: 450,
    noise: 'Loud',
    answer:
      'A chain drive garage door opener costs $275 to $450 installed in Florida, and battery backup for storm outages adds $60 to $150. It uses a metal chain to move the door, which makes it the cheapest and most durable drive type and also the loudest. It is the right choice for a detached garage or a workshop and the wrong one for a garage under a bedroom.',
    intro: [
      'The chain drive is the original opener and still the most common in Florida garages, particularly in the 1980s and 1990s subdivisions of Coral Springs, Pembroke Pines, Brandon and Kendall where builders fitted them by the thousand. A metal chain runs along the rail and pulls the trolley, which is a simple mechanism with very little to go wrong.',
      'It is loud, and the noise is structural rather than incidental: metal chain against metal rail, transmitted into the framing. In a detached garage or under a bonus room nobody sleeps in, that is fine. Under a bedroom it is not, and a belt drive costs only $75 to $150 more.',
      'Heat is the Florida wear item, not the chain. A closed garage here reaches 100°F and more all summer, and what fails in an older chain drive is the plastic drive gear inside the motor head, which strips and leaves the motor running while the door sits still. A gear kit is a $95 to $300 repair. The chain itself needs a light lubrication once a year, ideally at the spring tune-up.',
    ],
    pros: [
      'Cheapest drive type to buy and install',
      'Most durable, especially on a heavy wind-rated or impact-rated door',
      'Parts are universally available, and gear kits are a same-day repair',
      'Available with battery backup and WiFi on current models',
    ],
    cons: [
      'Loudest option by a clear margin',
      'Transmits vibration into the building structure',
      'The plastic drive gear in older units wears faster in a hot garage',
    ],
    bestFor:
      'Detached garages, workshops, and any Florida garage that is not under or beside a bedroom, especially where the door is heavy.',
    facts: [
      { label: 'Installed price', value: '$275 to $450' },
      { label: 'Battery backup', value: 'Adds $60 to $150' },
      { label: 'Noise', value: 'Loud' },
      { label: 'Typical life', value: '10 to 15 years' },
    ],
    faq: [
      {
        question: 'Is a chain drive too loud for an attached garage?',
        answer:
          'It depends what is above it. Most Florida garages are attached, and most are single story with nothing above them, where a chain drive is fine. In a two-story house with a bedroom or bonus room over the garage, most people regret it. Belt drive is the direct upgrade if noise matters.',
      },
      {
        question: 'How long does a chain drive opener last in Florida?',
        answer:
          'Ten to fifteen years in normal use, provided the door itself is balanced. Summer heat shortens the life of the plastic gear and the logic board, and an out of balance door shortens the life of any opener regardless of drive type. A door that will not hold halfway when you lift it by hand is the first thing to fix.',
      },
      {
        question: 'Should I add battery backup to a chain drive?',
        answer:
          'Yes if the garage is your main way in and out of the house, which it is for most Florida homes. Power outages after storms can last days, and the manual release is awkward with a car parked under the door. Battery backup adds $60 to $150 and gives you a limited number of cycles, usually around 20 in the first 24 hours.',
      },
    ],
  },
  {
    slug: 'belt-drive-openers',
    name: 'Belt Drive Garage Door Openers',
    shortName: 'Belt drive',
    metaTitle: 'Belt Drive Garage Door Openers in Florida | Cost and Noise',
    metaDescription:
      'Belt drive garage door openers installed in Florida from $350 to $600. Near silent, no lubrication, and the right answer when a bedroom or bonus room sits over the garage.',
    priceLow: 350,
    priceHigh: 600,
    noise: 'Very quiet',
    answer:
      'A belt drive garage door opener costs $350 to $600 installed in Florida, and battery backup adds $60 to $150. It uses a steel-reinforced rubber belt instead of a chain, which makes it far quieter and maintenance free. It is the correct choice whenever a bedroom or bonus room sits above the garage, which is most two-story Florida houses built since the 1990s.',
    intro: [
      'A belt drive is mechanically the same idea as a chain drive with the chain replaced by a steel-reinforced rubber belt. That single change removes almost all of the noise and all of the lubrication.',
      'It is our default recommendation for the two-story houses that fill the 1990s and 2000s subdivisions in Weston, Wellington, Wesley Chapel, Oviedo and Lake Nona, where the bonus room or a bedroom sits directly over the garage and the door is the first thing anyone hears at 6 am. Most belt drives sold now come with WiFi and a MyQ or equivalent app, and battery backup is either included or an add-on, which matters here more than anywhere.',
      'Heat is the question people ask about the belt, and the answer is that a steel-reinforced belt handles a 100°F garage without trouble and usually outlives the motor. What the heat does affect is the logic board in the motor head, the same as any drive type, which is why we mount the unit where the attic heat is least and fit a surge protector where lightning is common, which in Central Florida is everywhere.',
    ],
    pros: [
      'Far quieter than chain, close to silent in use',
      'No chain lubrication, so effectively maintenance free',
      'Smoother travel, which is easier on the door hardware',
      'Widely available with battery backup, WiFi and a camera',
    ],
    cons: [
      'Costs $75 to $150 more than a chain drive',
      'On a very heavy impact-rated double, a chain or a jackshaft is still the more durable choice',
      'The logic board is as heat sensitive as any other opener',
    ],
    bestFor:
      'Two-story homes with a bedroom or bonus room over the garage, and any attached garage where somebody sleeps near the door.',
    facts: [
      { label: 'Installed price', value: '$350 to $600' },
      { label: 'Battery backup', value: 'Adds $60 to $150' },
      { label: 'Noise', value: 'Very quiet' },
      { label: 'Maintenance', value: 'None on the belt' },
    ],
    faq: [
      {
        question: 'Is a belt drive worth the extra money?',
        answer:
          'If there is a bedroom or bonus room over or beside the garage, yes without hesitation. If the garage is detached or the house is single story with nothing near the door, the extra buys you very little except smoother travel.',
      },
      {
        question: 'Do belts break in the heat?',
        answer:
          'Rarely. A steel-reinforced belt in residential use typically outlives the motor driving it, and Florida garage heat does not change that. What does break belts is a door out of balance, which loads the belt every cycle, so we check the spring balance before we hang the unit.',
      },
      {
        question: 'Does a belt drive come with battery backup?',
        answer:
          'Many current models include it, and the rest accept an add-on battery. Either way it adds $60 to $150 to the installed price and runs the door for a limited number of cycles during a storm outage, usually around 20 in the first day. The battery is a wear item and needs replacing every two to three years in a hot garage.',
      },
    ],
  },
  {
    slug: 'screw-drive-openers',
    name: 'Screw Drive Garage Door Openers',
    shortName: 'Screw drive',
    metaTitle: 'Screw Drive Garage Door Openers in Florida | Cost and Heat',
    metaDescription:
      'Screw drive garage door openers installed in Florida from $300 to $500. Few moving parts, strong lift, and how the grease on the rod behaves in a 100°F garage. Battery backup options.',
    priceLow: 300,
    priceHigh: 500,
    noise: 'Moderate',
    answer:
      'A screw drive garage door opener costs $300 to $500 installed in Florida, and battery backup adds $60 to $150. It drives the trolley along a threaded steel rod, which means very few moving parts and strong lifting power on a heavy door. Its weakness is heat: the grease on the rod thins and runs in a summer garage, and a dry rod wears the plastic carriage fast.',
    intro: [
      'A screw drive uses a threaded steel rod rather than a chain or belt. Fewer moving parts means less to fail, and the direct thread gives it real lifting power, which suits a heavy impact-rated door. Genie makes most of the screw drives we see in Florida garages.',
      'The Florida problem is the grease on that rod. In a garage that sits at 100°F all afternoon, the wrong lubricant thins, runs down the rod and collects dust, and the rod ends up dry where the carriage rides. A dry rod chews the plastic carriage, which shows up as a grinding noise and then a door that stops partway. The fix is the right high-temperature grease applied once a year, not a new opener.',
      'Modern screw drives handle this far better than the units from the 1990s did, and a well-lubricated screw drive is a reliable, fast opener. It is louder than a belt and quieter than a chain, and it has fewer models with battery backup and WiFi, which is the main reason we fit fewer of them than we used to.',
    ],
    pros: [
      'Very few moving parts',
      'Strong lift, which suits heavy wind-rated and impact-rated doors',
      'Faster travel than chain or belt on most models',
      'Little routine maintenance beyond a yearly lubrication',
    ],
    cons: [
      'The rod grease thins in summer heat, and a dry rod wears the carriage quickly',
      'Louder than belt, though quieter than chain',
      'Fewer models with battery backup and WiFi than chain or belt',
    ],
    bestFor:
      'Heavy or oversized doors in a single story home with nothing over the garage, and owners who will keep up the yearly lubrication.',
    facts: [
      { label: 'Installed price', value: '$300 to $500' },
      { label: 'Battery backup', value: 'Adds $60 to $150 on current models' },
      { label: 'Noise', value: 'Moderate' },
      { label: 'Maintenance', value: 'High-temperature grease on the rod once a year' },
    ],
    faq: [
      {
        question: 'My screw drive grinds and stops partway. Is it dying?',
        answer:
          'Usually not. A dry rod and a worn plastic carriage are the most common cause, and a carriage plus a proper high-temperature lubrication fixes it for $95 to $300. If it still struggles after that, the force settings or the spring balance are the next things to check.',
      },
      {
        question: 'What grease should I use on a screw drive in Florida?',
        answer:
          'The lithium or silicone based lubricant the manufacturer specifies, not a spray oil and not general purpose grease. Spray oil evaporates in a hot garage within weeks and thick grease collects dust. A thin coat along the full rod once a year, ideally at the spring tune-up, is enough.',
      },
      {
        question: 'Can I add battery backup to a screw drive?',
        answer:
          'On current models, yes, and it adds $60 to $150. Older screw drives usually cannot take one, and if outages after storms are your main worry, a belt or chain drive with a battery included is the better buy at the same price.',
      },
    ],
  },
  {
    slug: 'direct-drive-openers',
    name: 'Direct Drive Garage Door Openers',
    shortName: 'Direct drive',
    metaTitle: 'Direct Drive Garage Door Openers in Florida | Cost, Noise',
    metaDescription:
      'Direct drive garage door openers installed in Florida from $400 to $600. The motor rides the rail, so one moving part, very quiet, and no plastic gear to strip in the heat.',
    priceLow: 400,
    priceHigh: 600,
    noise: 'Very quiet',
    answer:
      'A direct drive garage door opener costs $400 to $600 installed in Florida, and battery backup adds $60 to $150 where it is offered. The motor itself travels along the rail, so the whole system has a single moving part and no plastic drive gear to strip in a hot garage. It is very quiet, very reliable, and carries the longest warranties of any drive type.',
    intro: [
      'A direct drive inverts the usual arrangement. Instead of a stationary motor pulling a chain or belt, the motor rides in the trolley and drives itself along a fixed chain inside the rail.',
      'One moving part is the entire pitch, and it holds up. Direct drives are among the most reliable openers sold and typically carry the longest manufacturer warranties of any drive type. For a Florida garage that is a real advantage, because the part that fails first in a chain or belt drive after years at 100°F is the plastic gear in the motor head, and a direct drive does not have one.',
      'They are quiet, in the same class as a belt drive, and suit the same two-story houses with a bedroom over the garage. The reason they are less common here is simply price and the smaller number of manufacturers making them, which also means fewer battery backup and WiFi options and more brand-specific service parts.',
    ],
    pros: [
      'A single moving part, so very little to fail',
      'No plastic drive gear, which is the part heat kills in other openers',
      'Very quiet, comparable to belt drive',
      'Longest warranties in the category',
    ],
    cons: [
      'More expensive than chain or belt',
      'Fewer manufacturers, so fewer battery backup and WiFi options',
      'Service parts are brand specific and can take days to source',
    ],
    bestFor:
      'Attached garages where quiet and long-term reliability both matter, and owners who would rather pay once than replace a gear kit in year six.',
    facts: [
      { label: 'Installed price', value: '$400 to $600' },
      { label: 'Battery backup', value: 'Adds $60 to $150 where offered' },
      { label: 'Noise', value: 'Very quiet' },
      { label: 'Moving parts', value: 'One' },
    ],
    faq: [
      {
        question: 'Direct drive or belt drive?',
        answer:
          'Both are quiet. Direct drive has a longer warranty and no gear to strip in the heat; belt drive has more model choice, and battery backup and WiFi come standard on more of them. For most Florida homes either is a good answer, and we will tell you which one we would fit in your garage and why.',
      },
      {
        question: 'Does a direct drive have battery backup?',
        answer:
          'Some models offer it, and it adds $60 to $150 where it is available. If a storm outage is your first concern, check that the specific unit takes a battery before you choose direct drive, because fewer of them do than belt drives.',
      },
      {
        question: 'How long does a direct drive opener last?',
        answer:
          'Fifteen years or more in normal residential use, and the manufacturer warranties reflect that. The logic board is still electronics in a hot garage, so a surge protector on the outlet is cheap insurance in the lightning months from June through September.',
      },
    ],
  },
  {
    slug: 'jackshaft-wall-mount-openers',
    name: 'Jackshaft and Wall Mount Openers',
    shortName: 'Jackshaft',
    metaTitle: 'Jackshaft Wall Mount Garage Door Openers in Florida | Cost',
    metaDescription:
      'Wall mount jackshaft garage door openers installed in Florida from $450 to $800. Frees the ceiling for storage, fits low headroom 1950s garages, and needs a torsion tube to drive.',
    priceLow: 450,
    priceHigh: 800,
    noise: 'Quiet',
    answer:
      'A jackshaft or wall mount garage door opener costs $450 to $800 installed in Florida, and battery backup adds $60 to $150 unless it is included. It mounts on the wall beside the door and turns the torsion tube directly, so it needs no ceiling rail and only a few inches of headroom. It is the answer for a low headroom 1950s garage, for a high ceiling garage with a storage loft, and for a heavy impact-rated door on a torsion system.',
    intro: [
      'A jackshaft opener does away with the ceiling rail entirely. It bolts to the wall next to the door and turns the torsion tube directly, which frees the whole ceiling and needs only a few inches of clearance above the door.',
      'That solves two very different Florida garages. The first is the 1950s to 1970s single door in Hialeah, older Kendall, east Hollywood, St. Petersburg and the older Orlando neighborhoods, where there is no room above the door for a standard rail. The second is the opposite: the newer builds in Lake Nona, Wesley Chapel, Parkland and Cape Coral with 10 and 12 foot ceilings, where the owner wants overhead storage racks or a loft and a rail down the middle of the ceiling is in the way.',
      'It requires a torsion spring system, because it drives the tube, and it requires a door that is properly balanced. That makes it a good match for a heavy impact-rated door, which is nearly always on a torsion system, and a poor match for an old extension spring door unless we convert the springs as part of the job. Most jackshaft units include battery backup or accept one, and the automatic deadbolt they carry is a genuine security feature on a door that is also the front door.',
    ],
    pros: [
      'Needs almost no headroom, so it fits where nothing else will',
      'Frees the entire garage ceiling for storage racks or a loft',
      'Drives the torsion tube directly, which suits heavy impact-rated doors',
      'Quiet, with an automatic deadbolt and battery backup on most models',
    ],
    cons: [
      'Costs more than any rail-mounted drive',
      'Requires a torsion spring system, not extension springs',
      'Requires a well-balanced door, and will not tolerate a bad one',
    ],
    bestFor:
      'Low headroom 1950s to 1970s garages in Hialeah, Kendall, Hollywood and St. Petersburg, high ceiling garages with storage lofts in the newer subdivisions, and heavy impact-rated doors on a torsion system.',
    facts: [
      { label: 'Installed price', value: '$450 to $800' },
      { label: 'Battery backup', value: 'Adds $60 to $150, included on some models' },
      { label: 'Headroom needed', value: 'A few inches' },
      { label: 'Spring type required', value: 'Torsion' },
    ],
    faq: [
      {
        question: 'How much headroom does a standard opener need?',
        answer:
          'A standard rail opener typically needs around 12 to 14 inches above the door, and low-profile kits get that down to about 8. Below that, a wall-mounted jackshaft is the answer, and in the older single door garages around Hialeah and St. Petersburg it is often the only opener that fits.',
      },
      {
        question: 'Can I fit a jackshaft to any door?',
        answer:
          'It needs a torsion spring system and a door that is correctly balanced. If your door runs on extension springs, converting to torsion is part of the job and it is priced separately rather than hidden in the total. A heavy hurricane-rated door on torsion springs is the ideal case.',
      },
      {
        question: 'Does a jackshaft work in a power outage?',
        answer:
          'With battery backup, yes, for a limited number of cycles. Without it, the manual release is a cord at the opener on the wall rather than a handle in the middle of the ceiling, so it is easier to reach with a car under the door. Most jackshaft units include the battery or accept one for $60 to $150.',
      },
    ],
  },
];

export const brands: Brand[] = [
  {
    slug: 'liftmaster',
    name: 'LiftMaster',
    kind: 'opener',
    metaTitle: 'LiftMaster Garage Door Opener Repair in Florida | From $95',
    metaDescription:
      'LiftMaster opener repair and installation across Florida. Repairs from $95, new installation from $275, battery backup and MyQ set up, written estimate before any work starts.',
    answer:
      'We repair and install LiftMaster garage door openers across Florida. Repair starts at $95 and a new LiftMaster installed starts at $275, with battery backup adding $60 to $150. LiftMaster is the professional-channel brand from the same manufacturer as Chamberlain, and parts availability is the best in the category. We are an independent company, not a LiftMaster dealer or authorized service center.',
    intro: [
      'LiftMaster is the brand most professional installers fit, and it is the one we see most often in Florida garages, from the chain drives builders hung in the 1990s to the belt drive and wall mount units going into new houses now. It shares its manufacturer with Chamberlain, which sells through retail, and many components are interchangeable between the two.',
      'The practical advantage is parts. Logic boards, travel modules, safety sensors, gear and sprocket kits, batteries and remotes for LiftMaster units are widely available, which means a repair is genuinely possible on a unit that is ten or more years old rather than only in theory. LiftMaster also sells battery backup and MyQ WiFi across most of the range, which are the two features that matter most in a state with storm outages and a garage that doubles as the front door.',
      'We are an independent repair and installation company. We are not a LiftMaster dealer, distributor or authorized service center, and we do not claim to be. We fit and repair LiftMaster because it is what is in most garages and what most customers ask for, and we quote every job in writing before we touch it.',
    ],
    common: [
      'Gear and sprocket wear on chain drive units after years in a hot garage, which shows up as a motor that runs without moving the door',
      'Logic board failure after a lightning surge, most common from June through September',
      'Safety sensor faults, from misalignment or from low afternoon sun hitting the photo eye on a west-facing door',
      'Battery backup batteries that no longer hold a charge after two or three summers',
    ],
    faq: [
      {
        question: 'Is my LiftMaster worth repairing?',
        answer:
          'Usually, if it is under about fifteen years old and the fault is a gear kit, a sensor, a battery or a board. If the repair approaches half the price of a new unit, or if the opener predates 1993 and has no photo eye sensors, replacement at $275 and up is the better spend and we will say so.',
      },
      {
        question: 'Can I use a Chamberlain remote with a LiftMaster opener?',
        answer:
          'Often yes, because they share a manufacturer and their code systems. It depends on the year and the security system in your unit, and the colour of the learn button on the motor head tells us which one you have.',
      },
    ],
  },
  {
    slug: 'chamberlain',
    name: 'Chamberlain',
    kind: 'opener',
    metaTitle: 'Chamberlain Garage Door Opener Repair in Florida | From $95',
    metaDescription:
      'Chamberlain opener repair and installation across Florida. Repairs from $95, new installation from $275, MyQ and battery backup set up, written estimate before any work starts.',
    answer:
      'We repair and install Chamberlain garage door openers across Florida. Repair starts at $95 and installation at $275, with battery backup adding $60 to $150. Chamberlain is the retail brand from the same manufacturer as LiftMaster, so most internal parts are shared. We are an independent company, not a Chamberlain dealer or authorized service center.',
    intro: [
      'Chamberlain is the retail counterpart to LiftMaster, made by the same manufacturer and sold through the big box stores that anchor every Florida suburb. The units are frequently the same mechanism in a different housing, which is good news for repairability.',
      'The most common Chamberlain calls we take are on units bought and self-installed, where the fault turns out to be installation rather than the opener: sensors mounted too high, travel limits never set to the door, or the unit hung from a piece of ceiling framing that was never meant to carry it. In a hot garage the same gear and board failures as LiftMaster show up on the same schedule.',
      'We are an independent repair and installation company, not a Chamberlain dealer or authorized service center, and we say so. If your unit is under the manufacturer warranty we tell you before we start, because a warranty part from Chamberlain and our labor is often the cheaper route.',
    ],
    common: [
      'Safety sensors mounted above the recommended 6 inches, so they miss obstructions, or blinded by low sun on a west-facing driveway',
      'Travel and force limits left at factory defaults rather than set to the door',
      'Gear and sprocket wear on older chain units after years of summer heat',
      'MyQ connectivity problems after a router change or a power outage',
    ],
    faq: [
      {
        question: 'I installed a Chamberlain myself and it reverses. Why?',
        answer:
          'Most often the safety sensors are misaligned or mounted too high, or the down force is set too low for the door. Both are quick to correct. It is also worth checking that the door itself is balanced, because an opener fighting a heavy door will trip its own safety limits.',
      },
      {
        question: 'My Chamberlain MyQ stopped working after the storm. What happened?',
        answer:
          'Usually the opener lost its WiFi pairing when the power came back, or the router got a new address. Re-pairing takes a few minutes. If the unit will not power up at all, the board or the battery is the next thing we check, and a surge during the outage is the usual cause.',
      },
    ],
  },
  {
    slug: 'genie',
    name: 'Genie',
    kind: 'opener',
    metaTitle: 'Genie Garage Door Opener Repair in Florida | From $95',
    metaDescription:
      'Genie garage door opener repair and installation across Florida. Repairs from $95, installation from $275, screw drive lubrication and remote pairing, written estimate first.',
    answer:
      'We repair and install Genie garage door openers across Florida. Repair starts at $95 and installation at $275, with battery backup adding $60 to $150. Genie is the main alternative to the LiftMaster and Chamberlain family and is behind most of the screw drive openers in Florida garages. We are an independent company, not a Genie dealer or authorized service center.',
    intro: [
      'Genie is the largest independent alternative to the LiftMaster family and has been in American garages for decades. A good share of the screw drive openers we see in 1990s and 2000s Florida subdivisions are Genie units, and the current belt drive and wall mount ranges turn up in newer builds.',
      'Two things come up on Genie calls more than on other brands. The first is the screw drive rod running dry in summer heat, which wears the carriage and makes the unit grind. The second is remotes: older Genie models used a different code system from the LiftMaster family, which is the single most common source of confusion when someone buys a replacement remote from a hardware store. Matching the code system to the unit is what makes a remote work, not the brand on the box.',
      'We are an independent repair and installation company, not a Genie dealer or authorized service center. We carry the common carriage kits, sensors and remotes for the units we see most, and every job is quoted in writing before work starts.',
    ],
    common: [
      'Carriage and rail wear on screw drive units when the rod runs dry in the heat',
      'Remote and keypad pairing failures after a battery change or a code system mismatch',
      'Safety beam failures on older Safe-T-Beam sensors, and sun glare on west-facing doors',
      'Circuit board failure on units over about twelve years old, often after a lightning surge',
    ],
    faq: [
      {
        question: 'Why will my new remote not pair with my Genie?',
        answer:
          'Almost always a code system mismatch. Genie has used several over the years, and a remote has to match the one in your unit. The model number on the motor housing tells us which one you have.',
      },
      {
        question: 'My Genie screw drive grinds in summer. Is it finished?',
        answer:
          'Usually not. The grease on the rod has thinned and run in the heat, and the plastic carriage is wearing on a dry rod. A carriage and a proper high-temperature lubrication is a $95 to $300 repair. If the motor itself is failing on a unit over twelve years old, replacement from $275 is the better spend.',
      },
    ],
  },
  {
    slug: 'clopay',
    name: 'Clopay',
    kind: 'door',
    metaTitle: 'Clopay Garage Doors in Florida | Repair and Installation',
    metaDescription:
      'Clopay garage door repair, section replacement and installation across Florida. New wind-rated doors from $950, sections from $250, WindCode and NOA doors quoted in writing.',
    answer:
      'We repair and install Clopay garage doors across Florida. Section replacement starts at $250 and a new wind-rated Clopay door installed starts at $950, with impact-rated doors from about $1,800. Clopay is the largest residential door manufacturer in North America, its WindCode program covers the Florida wind pressures, and section availability is generally good. We are an independent company, not a Clopay dealer.',
    intro: [
      'Clopay is the biggest residential garage door manufacturer in North America, and it is the brand behind a large share of the doors on Florida houses, including many sold under retail store names. Its WindCode program is how Clopay rates doors for wind pressure, and its Florida lines carry Florida Product Approvals, with Miami-Dade NOA versions for the HVHZ. We match the rating to your address and wind zone and document it on the permit.',
      'For repairs, that scale is an advantage. Section profiles stay in production longer than smaller manufacturers manage, so replacing one damaged panel on a ten year old Clopay door is more often possible than it would be on a boutique brand. The catch on a Florida door is colour: ten years of sun fades the finish, and a new section next to a faded one is visible from the street.',
      'We are an independent repair and installation company. We are not a Clopay dealer or a Clopay authorized installer, and we do not claim to be. We install Clopay because it is available, rated and repairable, and we show you the approval document for the door we quote.',
    ],
    common: [
      'Bottom section damage from daily rain at the seal and from impact, replaceable if the profile is current',
      'Hinge, roller and bottom bracket rust on doors within a few miles of the coast',
      'Discontinued colour matching on faded doors over about ten years old',
      'Struts and track brackets missing or loosened, which the wind rating depends on',
    ],
    faq: [
      {
        question: 'Can you match a Clopay section on an older door?',
        answer:
          'Often, because Clopay keeps profiles in production longer than most. Colour is the harder match on a door that has faded for a decade in Florida sun. We check availability and show you the honest comparison before you commit, and we tell you when the better spend is a new rated door from $950.',
      },
      {
        question: 'Is a Clopay WindCode door a hurricane door?',
        answer:
          'WindCode is the rating system, not a single product. A WindCode door rated for your design pressure is wind-rated and meets the Florida Building Code. An impact-rated door adds the large missile test and is what most people mean by a hurricane door. Both exist in the Clopay range, and in Miami-Dade and Broward the door must carry a Miami-Dade NOA.',
      },
    ],
  },
  {
    slug: 'amarr',
    name: 'Amarr',
    kind: 'door',
    metaTitle: 'Amarr Garage Doors in Florida | Repair and Installation',
    metaDescription:
      'Amarr garage door repair, section replacement and installation across Florida. New wind-rated doors from $950, sections from $250, carriage house styles, quoted in writing first.',
    answer:
      'We repair and install Amarr garage doors across Florida. Section replacement starts at $250 and a new wind-rated Amarr door installed starts at $950, with impact-rated doors from about $1,800. Amarr is best known for its carriage house range, which is common in Weston, Palm Beach Gardens and Lakewood Ranch, and its Florida lines carry Florida Product Approvals and Miami-Dade NOAs. We are an independent company, not an Amarr dealer.',
    intro: [
      'Amarr is a major North American manufacturer whose carriage house range turns up frequently on the kind of houses where the door is part of the elevation, which in Florida means the master planned communities of Weston, Wellington, Palm Beach Gardens, Lakewood Ranch and Naples. Its wind-rated lines carry Florida Product Approvals, with Miami-Dade NOA versions for the HVHZ, and we match the approval to your wind zone before we quote.',
      'Carriage styling changes the repair picture. Decorative hardware and specific panel profiles are model-linked, so a damaged section on a carriage door is a question of availability first and price second. The decorative handles and strap hinges are also the first thing to rust on a coastal door, and swapping them for the stainless versions is a small job that keeps the door looking right.',
      'We are an independent repair and installation company, not an Amarr dealer or authorized installer, and we say so. Every section, hardware set and new door is quoted in writing with the approval document attached.',
    ],
    common: [
      'Decorative hardware rusting in salt air on carriage style doors',
      'Section profile availability on older discontinued models',
      'Standard hinge, roller and bearing wear, faster on the coasts',
      'Spring specification errors where a heavier insulated or impact door was fitted with a standard spring',
    ],
    faq: [
      {
        question: 'Is a carriage house door harder to repair?',
        answer:
          'The mechanism is the same as any sectional door. What differs is the parts: decorative hardware and specific panel profiles are model-linked, so availability has to be checked before we can give you a real number. Hardware is the easy part; a discontinued profile can mean a new door.',
      },
      {
        question: 'Will an Amarr carriage door pass my HOA and the wind code?',
        answer:
          'The HOA question is about style and colour and lives in your architectural guidelines. The code question is about the rating, and Amarr sells carriage styles in wind-rated and impact-rated versions with Florida Product Approval or a Miami-Dade NOA. We give you the manufacturer drawing and the approval number for both applications.',
      },
    ],
  },
  {
    slug: 'wayne-dalton',
    name: 'Wayne Dalton',
    kind: 'door',
    metaTitle: 'Wayne Dalton Garage Doors in Florida | Repair and Install',
    metaDescription:
      'Wayne Dalton garage door repair, section replacement and installation across Florida. New wind-rated doors from $950, sections from $250, TorqueMaster springs handled, written quotes.',
    answer:
      'We repair and install Wayne Dalton garage doors across Florida. Section replacement starts at $250 and a new wind-rated Wayne Dalton door installed starts at $950, with impact-rated doors from about $1,800. Wayne Dalton is known for its enclosed TorqueMaster spring system, and its wind-rated lines carry Florida Product Approvals and Miami-Dade NOAs. We are an independent company, not a Wayne Dalton dealer.',
    intro: [
      'Wayne Dalton is one of the big residential door manufacturers and a common builder choice in the 1990s and 2000s subdivisions across Pembroke Pines, Brandon, Oviedo and Port St. Lucie. Its wind-rated lines carry Florida Product Approvals, with Miami-Dade NOA versions for the HVHZ, and the pinch-resistant section joints on many of its steel doors are a real safety feature on a door children use.',
      'The thing that sets Wayne Dalton apart for repair is the TorqueMaster spring system, which puts the springs inside the torsion tube rather than on it. It is tidier and safer in normal use, but when a spring breaks the parts are specific to that system and the winding procedure is different, and many companies will not touch it. We do, and where the parts are no longer available we quote a conversion to a standard torsion setup so the door keeps working.',
      'We are an independent repair and installation company, not a Wayne Dalton dealer or authorized installer, and we say so. Springs, sections and new doors are quoted in writing, and on a new door we show you the Florida Product Approval or NOA for your wind zone.',
    ],
    common: [
      'TorqueMaster spring failures, with parts that are specific to the system and a winding procedure many companies avoid',
      'Bottom section and seal damage from daily rain in the wet season',
      'Hinge, roller and bracket rust on coastal doors',
      'Section profile availability on doors from the 1990s and early 2000s',
    ],
    faq: [
      {
        question: 'My Wayne Dalton spring broke and two companies would not touch it. Why?',
        answer:
          'It is almost certainly a TorqueMaster system, with the springs enclosed in the tube. The parts and the winding procedure are different from a standard torsion spring and many technicians are not set up for it. We replace them within the $150 to $350 per spring range, toward the top because of the parts, and where parts are gone we convert to standard torsion and quote that in writing.',
      },
      {
        question: 'Can I get a Wayne Dalton door rated for Miami-Dade?',
        answer:
          'Yes. Wayne Dalton sells doors with Miami-Dade NOAs for the HVHZ and Florida Product Approvals for the rest of the state. The right one depends on your design pressure and whether you want wind-rated or impact-rated, and we document the approval on the permit.',
      },
    ],
  },
];

export const getDoorMaterial = (slug: string) => doorMaterials.find((d) => d.slug === slug);
export const getOpenerType = (slug: string) => openerTypes.find((o) => o.slug === slug);
export const getBrand = (slug: string) => brands.find((b) => b.slug === slug);

export type { DoorMaterial, OpenerType, Brand } from './types';
