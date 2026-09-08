/**
 * The door model catalogue: what you can actually order, as pages.
 *
 * This is the replace buyer's half of the catalogue. The repair buyer is
 * served by /parts/ at $95 to $800; this one is $950 to $6,500, which is
 * where the money in this trade is.
 *
 * **Why configurations and not manufacturer models.** research/fl-garage/
 * CATALOGUE.md section 5c: naming a model we cannot source is worse than
 * naming none, and product lines get renamed and discontinued constantly.
 * More importantly, the decision a Florida buyer is making is not "Clopay or
 * Amarr". It is "what rating do I need at my address, insulated or not,
 * what style, and what will it cost". MARKET.md found that nobody in Florida
 * answers that plainly, which is the whole opening.
 *
 * Every configuration here can be supplied by the brands the site already
 * services, so no entry names a door we cannot get.
 *
 * **The rule that must not be broken.** No entry states a specific design
 * pressure, a specific wind speed rating, or a specific Miami-Dade NOA or
 * Florida Product Approval number. Those depend on the size, the
 * configuration and the opening, they are issued against a tested assembly,
 * and they go on the permit. Printing one here would be a code compliance
 * claim we cannot stand behind, and in this state that is the claim that
 * matters most. What the pages say instead is which approval applies, who
 * pulls it, and that the number goes on your permit.
 */

import type { DoorModel } from './types';

export const doorModels: DoorModel[] = [
  {
    slug: 'wind-rated-steel',
    name: 'Wind-Rated Steel Garage Door',
    shortName: 'Wind-rated steel',
    metaTitle: 'Wind-Rated Steel Garage Door in Florida | Cost Installed',
    metaDescription:
      'The standard new door in most of Florida: single layer steel, rated for wind pressure, installed from $950. What the rating means and where it is not enough.',
    priceLow: 950,
    priceHigh: 1800,
    construction: 'Single layer steel',
    windRated: true,
    impactRated: false,
    hvhz: 'no',
    insulation: 'None. Single skin steel with no insulating layer.',
    answer:
      'A wind-rated single layer steel door is what most of Florida outside the High Velocity Hurricane Zone puts on a house, installed from about $950 for a standard single car opening. It is rated to hold against wind pressure, which is what the code asks for in most of the state, and it is not impact rated, which is what Miami-Dade and Broward generally want. It is the cheapest door you can legally install new, and for an inland garage that is often exactly the right answer.',
    intro: [
      'Wind rating and impact rating are two different tests and confusing them is the most expensive mistake a Florida homeowner makes on this purchase. Wind rating is about pressure: can the door stay in its opening when the storm pushes and pulls on it. Impact rating adds a second question: can it survive being hit by flying debris.',
      'Most of Florida requires the first. Miami-Dade and Broward, the High Velocity Hurricane Zone, generally require both. Which one applies to you is decided by your address, not by your preference, and it is settled at the permit stage rather than by anything a salesperson says.',
      'For an inland garage this door is not a compromise, it is the correct specification. Buying impact rating you are not required to have is money that would do more good spent on insulation, which you will feel every day, or on a better opener.',
    ],
    bestFor: [
      'Inland Florida addresses outside the High Velocity Hurricane Zone',
      'Detached garages and workshops that are not conditioned',
      'Rental property and flips where the budget is fixed',
      'Replacing a door that failed and needs to meet current code at least cost',
    ],
    tradeoffs: [
      'No insulation at all, so an attached garage will run hot and the room over it will feel it',
      'Single skin steel dents easily, and a dent in the bottom panel is permanent',
      'Not impact rated, so it is generally not the door for a Miami-Dade or Broward permit',
      'The thinnest steel is also the loudest, and it shows every knock',
    ],
    material: 'steel-garage-doors',
    quickFacts: [
      { label: 'Installed price', value: '$950 to $1,800' },
      { label: 'Wind rated', value: 'Yes' },
      { label: 'Impact rated', value: 'No' },
      { label: 'Insulation', value: 'None' },
      { label: 'HVHZ', value: 'Generally not accepted' },
    ],
    faq: [
      {
        question: 'Is a wind-rated door enough for a hurricane?',
        answer:
          'It depends entirely on your address, and that is not a dodge. Outside the High Velocity Hurricane Zone a wind-rated door is what the code asks for and it is a real, tested rating rather than a marketing word. Inside Miami-Dade and Broward the code generally wants impact rating too, because the risk being designed against there is debris and not only pressure. We check which applies to your address before quoting.',
      },
      {
        question: 'How do I know the door is actually rated?',
        answer:
          'By the paperwork, not by the brochure. A rated door carries either a Florida Product Approval or a Miami-Dade Notice of Acceptance, issued against a tested assembly at specific sizes and configurations. That number goes on your permit. Ask for it in writing on the quote, and if a company will not put it there, that tells you something.',
      },
      {
        question: 'Can I add insulation to this door later?',
        answer:
          'You can buy kits and they help a little, and they are not the same thing as an insulated door. A factory insulated door bonds the insulation between steel skins, which adds stiffness as well as R-value. A retrofit kit is a panel stuck to the inside face, which does not add stiffness and can affect the balance the springs were set for. If insulation matters to you, it is cheaper to buy it built in than to add it twice.',
      },
    ],
    related: ['insulated-steel', 'impact-rated-steel', 'carriage-house-steel'],
  },

  {
    slug: 'insulated-steel',
    name: 'Insulated Steel Garage Door',
    shortName: 'Insulated steel',
    metaTitle: 'Insulated Steel Garage Door in Florida | Cost and Whether It Is Worth It',
    metaDescription:
      'Two and three layer insulated steel doors installed from $1,400. When insulation pays for itself in Florida and when it is money spent on a detached garage.',
    priceLow: 1400,
    priceHigh: 3000,
    construction: 'Two or three layer steel with bonded insulation',
    windRated: true,
    impactRated: false,
    hvhz: 'available',
    insulation: 'Polystyrene or polyurethane bonded between steel skins.',
    answer:
      'An insulated steel door sandwiches insulation between steel skins, installed from about $1,400. In Florida the case for it is not the heating bill, it is the attached garage: a garage that runs at 110 degrees pushes heat into the rooms next to it and above it all summer. It is also stiffer and considerably quieter than a single layer door. On a detached garage the same money usually does more good elsewhere.',
    intro: [
      'There are two constructions worth knowing apart. A two layer door is steel with insulation bonded to the back. A three layer door is steel, insulation, steel, and the second skin is what makes it markedly stiffer, quieter and more dent resistant as well as better insulated.',
      'The Florida argument for insulation is different from the northern one. Nobody here is keeping heat in. What you are doing is stopping a west facing garage from becoming a 110 degree box that radiates into the bedroom above it from mid afternoon until well after dark.',
      'That is why the honest answer depends on the building rather than the budget. Attached garage with living space beside or above it, insulation earns its money. Detached garage you park in and leave, it does not, and we will say so.',
    ],
    bestFor: [
      'Attached garages with a conditioned room beside or above them',
      'Garages used as a gym, workshop, office or laundry',
      'Anyone who wants a markedly quieter door, which insulation delivers as a side effect',
      'Houses where the garage wall is a shared wall with a bedroom',
    ],
    tradeoffs: [
      'Costs meaningfully more than single layer steel for a benefit you only feel if the garage is attached',
      'Heavier, so the springs and the opener are working harder over the life of the door',
      'Insulation does nothing about air leaking round a failed seal, which is cheaper to fix first',
      'On a detached garage the payback is close to nothing',
    ],
    material: 'steel-garage-doors',
    quickFacts: [
      { label: 'Installed price', value: '$1,400 to $3,000' },
      { label: 'Wind rated', value: 'Yes' },
      { label: 'Impact rated', value: 'Available as an option' },
      { label: 'Insulation', value: 'Bonded, two or three layer' },
      { label: 'Also delivers', value: 'A much quieter door' },
    ],
    faq: [
      {
        question: 'Will an insulated door lower my electricity bill?',
        answer:
          'On an attached garage, usually yes, and modestly rather than dramatically. What people actually notice first is comfort: the room over the garage stops being the hot room in the afternoon. If somebody quotes you a specific percentage saving, ask how they calculated it, because it depends on your garage, your orientation, your insulation elsewhere and your habits, and an invented number is easier to produce than a real one.',
      },
      {
        question: 'Is a higher R-value always better?',
        answer:
          'Not by itself. R-value is measured through the middle of the panel and says nothing about the seals, the frame or how the door was installed, and heat comes through those too. A well sealed mid range insulated door on a properly aligned frame will outperform a very high R-value door with a failed bottom seal, and cost less.',
      },
      {
        question: 'Can an insulated door also be impact rated?',
        answer:
          'Yes, and that combination is common in Miami-Dade and Broward where the code generally wants impact rating anyway. It costs more than either on its own. The approval number for the rated assembly goes on the permit, and the licensed contractor who pulls the permit is the one who puts it there.',
      },
    ],
    related: ['wind-rated-steel', 'impact-rated-steel', 'carriage-house-steel'],
  },

  {
    slug: 'impact-rated-steel',
    name: 'Impact-Rated Steel Garage Door',
    shortName: 'Impact-rated steel',
    metaTitle: 'Impact-Rated Garage Door in Florida | HVHZ, NOA and Cost',
    metaDescription:
      'Impact-rated steel doors for Miami-Dade, Broward and the HVHZ, installed from $2,400. What impact rating tests, how it differs from wind rating, and who pulls the approval.',
    priceLow: 2400,
    priceHigh: 5000,
    construction: 'Reinforced steel, tested to an impact standard',
    windRated: true,
    impactRated: true,
    hvhz: 'yes',
    insulation: 'Available insulated or not, insulated is the common specification.',
    answer:
      'An impact-rated door is tested against flying debris as well as wind pressure, and it is what Miami-Dade and Broward generally require inside the High Velocity Hurricane Zone. Installed from about $2,400. The rating lives in the approval issued against the tested assembly, either a Miami-Dade Notice of Acceptance or a Florida Product Approval, and that number goes on your building permit rather than on a website.',
    intro: [
      'The test is the thing worth understanding. Impact rating means the assembly was hit with a projectile and then cycled under pressure to see whether the breach opened up. Wind rating alone does not include that, which is why a door can be genuinely wind rated and still not be acceptable in the HVHZ.',
      'The reason the code cares is what happens after a breach. A garage door is the largest opening in most houses. If it fails in a storm the pressure gets inside, and the way houses fail after that is the roof, not the door. The door is being protected because the house is.',
      'Which rating your address needs is not a preference. It is set by where you are, confirmed at the permit stage, and the approval number for the exact assembly and size goes on that permit. We do not print approval numbers on this site, because a number here proves nothing about the door that ends up on your house.',
    ],
    bestFor: [
      'Any address inside the High Velocity Hurricane Zone, which is Miami-Dade and Broward',
      'Coastal properties elsewhere in Florida where the exposure justifies it',
      'Homeowners pursuing a wind mitigation credit on their insurance',
      'Replacing a pre-code door on a house that has never been upgraded',
    ],
    tradeoffs: [
      'Two to three times the cost of a basic wind-rated door',
      'Heavier, which means heavier duty springs and a stronger opener',
      'Glass inserts complicate the rating and can affect an all-or-nothing insurance credit',
      'Outside the HVHZ it is often more rating than the code asks you to buy',
    ],
    material: 'steel-garage-doors',
    quickFacts: [
      { label: 'Installed price', value: '$2,400 to $5,000' },
      { label: 'Wind rated', value: 'Yes' },
      { label: 'Impact rated', value: 'Yes' },
      { label: 'HVHZ', value: 'Yes, this is the HVHZ specification' },
      { label: 'Approval', value: 'Miami-Dade NOA or Florida Product Approval, on the permit' },
    ],
    faq: [
      {
        question: 'What is the difference between an NOA and a Florida Product Approval?',
        answer:
          'They are two approval routes for the same purpose. A Miami-Dade Notice of Acceptance is issued by Miami-Dade County and is what the HVHZ works from. A Florida Product Approval is the statewide route. Both are issued against a tested assembly at specific sizes and configurations, and both are referenced on the permit. Which one your job uses depends on your county and on what the manufacturer holds for that door in that size.',
      },
      {
        question: 'Will an impact-rated door get me an insurance discount?',
        answer:
          'It can, and the rule catches people out: the wind mitigation credit for opening protection is generally all or nothing. Protecting the garage door and leaving windows unprotected typically earns nothing, because the credit is assessed on the whole envelope. Worth talking to your insurer before assuming the door pays for itself, and worth knowing that a solid door with no glass does not create a glazed opening to protect.',
      },
      {
        question: 'Do you print your approval numbers on the site?',
        answer:
          'No, deliberately, and we would treat a company that does with some suspicion. An approval is issued against a specific assembly at specific sizes, so a number on a web page tells you nothing about the door that ends up on your opening. What matters is the number on your permit for your door, pulled by the licensed contractor doing the installation. Ask for it in writing on your quote.',
      },
    ],
    related: ['insulated-steel', 'wind-rated-steel', 'full-view-aluminium'],
  },

  {
    slug: 'carriage-house-steel',
    name: 'Carriage House Steel Garage Door',
    shortName: 'Carriage house steel',
    metaTitle: 'Carriage House Garage Door in Florida | Steel, Cost Installed',
    metaDescription:
      'Carriage house styling in steel: the look of swing-out doors on a normal sectional, installed from $1,600. Why steel is the sensible version in this climate.',
    priceLow: 1600,
    priceHigh: 3500,
    construction: 'Steel with applied carriage house detailing',
    windRated: true,
    impactRated: false,
    hvhz: 'available',
    insulation: 'Commonly insulated, available without.',
    answer:
      'A carriage house steel door gives you the look of old swing-out barn doors on a door that still lifts up like a normal sectional. Installed from about $1,600. In Florida the steel version is the sensible one: it takes the humidity and the salt far better than real wood, it needs no refinishing, and it is available wind rated and, where the HVHZ requires it, impact rated.',
    intro: [
      'The style is applied rather than structural. Underneath it is an ordinary sectional door that rolls up on tracks, and the carriage detailing is overlay panels, strap hinges and handles that do not actually swing anything. That is the point: the look without giving up the mechanism or the ceiling space.',
      'It is by a wide margin the most requested style on Florida houses built since the nineties, which is why almost every manufacturer makes a version and why the price band is competitive.',
      'The Florida specific argument is against doing it in real wood. A wood carriage door in this humidity needs refinishing on a schedule most owners abandon after the second year, and near salt water it needs it sooner. Steel with a carriage face gets you the look with none of that.',
    ],
    bestFor: [
      'Mediterranean, Spanish and traditional Florida houses where a flat door looks wrong',
      'Neighbourhoods with an HOA that specifies a style',
      'Anyone who wants the wood look without the refinishing',
      'Kerb appeal ahead of a sale, where the door is the largest thing a buyer sees',
    ],
    tradeoffs: [
      'Costs more than a plain panel door for a difference that is purely appearance',
      'Applied overlays give water somewhere to sit, so the finish matters more near the coast',
      'Decorative glass inserts complicate the rating and the insurance question',
      'Some HOAs specify a style you cannot deviate from, so check before you choose',
    ],
    material: 'steel-garage-doors',
    quickFacts: [
      { label: 'Installed price', value: '$1,600 to $3,500' },
      { label: 'Wind rated', value: 'Yes' },
      { label: 'Impact rated', value: 'Available' },
      { label: 'Insulation', value: 'Commonly insulated' },
      { label: 'Mechanism', value: 'Normal sectional, it lifts up' },
    ],
    faq: [
      {
        question: 'Do carriage house doors actually swing open?',
        answer:
          'Almost never, and the ones that do are a different product. What is sold as a carriage house door in Florida is a standard sectional that rolls up on tracks with carriage styling applied to the face. Genuine swing-out doors need clear space in front, they are harder to automate, and they are a poor fit for a Florida driveway.',
      },
      {
        question: 'Can I get carriage styling and impact rating together?',
        answer:
          'Yes, and it is common in Miami-Dade and Broward. What changes the answer is glass: decorative window inserts are frequently what stops a carriage door being straightforwardly rated, and they also create a glazed opening for the insurance conversation. Solid carriage doors are the simpler specification if you are inside the HVHZ.',
      },
      {
        question: 'Is it worth doing in real wood?',
        answer:
          'In Florida, rarely, and we will talk you out of it more often than into it. Real wood in this humidity needs refinishing every two to three years, and within a few miles of salt water sooner than that. Most owners keep it up for a couple of cycles and then stop, and a neglected wood door looks considerably worse than a steel one. If you want genuine wood, budget for the maintenance rather than hoping.',
      },
    ],
    related: ['composite-carriage-house', 'insulated-steel', 'wood-door'],
  },

  {
    slug: 'composite-carriage-house',
    name: 'Composite Carriage House Garage Door',
    shortName: 'Composite carriage',
    metaTitle: 'Composite Garage Door in Florida | Faux Wood, Cost Installed',
    metaDescription:
      'Composite overlay doors give a convincing wood grain on a steel core, installed from $2,600. The closest thing to real wood that survives Florida humidity.',
    priceLow: 2600,
    priceHigh: 6500,
    construction: 'Insulated steel core with moulded composite overlay',
    windRated: true,
    impactRated: false,
    hvhz: 'available',
    insulation: 'Insulated core as standard on nearly all of them.',
    answer:
      'A composite carriage door is an insulated steel door with a moulded composite overlay that reproduces wood grain convincingly enough that most people cannot tell from the kerb. Installed from about $2,600. It is the premium end of what makes sense in Florida: it gives you the wood look, it does not rot, swell or need refinishing, and it can be specified stained or painted.',
    intro: [
      'The construction is the reason it works here. The strength and the rating come from the steel core, and the appearance comes from a composite overlay that does not absorb water. Real wood in this climate moves with the humidity, and a door that swells is a door that binds in its own tracks.',
      'The grain and the stain are considerably better than they were a decade ago. At kerb distance these read as wood to almost everybody, and unlike wood they read the same way in year eight.',
      'It is genuinely expensive, and the honest framing is that you are buying appearance. A composite carriage door and an insulated steel carriage door will keep the same amount of heat out and hold against the same wind. The difference is what it looks like, which on the largest visible surface of most houses is not nothing.',
    ],
    bestFor: [
      'Houses where the garage door is the dominant feature from the street',
      'Owners who want wood and have been warned off it by the maintenance',
      'Higher value properties where the door should not undercut the house',
      'Anyone who tried real wood in Florida once and is not doing it again',
    ],
    tradeoffs: [
      'The most expensive configuration here short of genuine wood',
      'Heavy, which means heavier springs and a stronger opener',
      'The performance is the steel core, so you are paying for appearance',
      'Overlay damage is harder to repair invisibly than a plain steel dent',
    ],
    material: 'steel-garage-doors',
    quickFacts: [
      { label: 'Installed price', value: '$2,600 to $6,500' },
      { label: 'Wind rated', value: 'Yes' },
      { label: 'Impact rated', value: 'Available' },
      { label: 'Insulation', value: 'Insulated core, standard' },
      { label: 'Maintenance', value: 'None. No refinishing.' },
    ],
    faq: [
      {
        question: 'Does it really look like wood?',
        answer:
          'From the street, to almost everybody, yes. Standing at the door with your hand on it, you can tell. The more useful comparison is against wood at eight years old in Florida humidity, because that is when the composite is still exactly as it was and the wood is not.',
      },
      {
        question: 'Is it worth more than double a plain steel door?',
        answer:
          'Only if appearance is what you are buying, and we will say that plainly. A composite door and an insulated steel door of the same rating keep out the same heat and hold against the same wind. What you are paying for is the largest visible surface on the front of your house. On some houses that is worth it and on others it is not, and it is your call rather than ours.',
      },
      {
        question: 'What happens if a panel gets damaged?',
        answer:
          'It is repairable and it is fussier than steel. A dent in plain steel can sometimes be worked or the panel swapped with a good match. A composite overlay has a grain and a stain that have to line up with the panels beside it, so an exact match matters more and a discontinued finish is a bigger problem. Worth keeping the model and finish details somewhere you will find them.',
      },
    ],
    related: ['carriage-house-steel', 'wood-door', 'insulated-steel'],
  },

  {
    slug: 'full-view-aluminium',
    name: 'Full-View Aluminium and Glass Garage Door',
    shortName: 'Full-view glass',
    metaTitle: 'Full-View Glass Garage Door in Florida | Aluminium, Cost Installed',
    metaDescription:
      'Aluminium frame and glass doors installed from $2,800. Where they work in Florida, what the glass does to the rating, and the salt air question.',
    priceLow: 2800,
    priceHigh: 6500,
    construction: 'Aluminium frame with glass or acrylic panels',
    windRated: true,
    impactRated: false,
    hvhz: 'available',
    insulation: 'Minimal. Insulated glazing is available and is not the same as an insulated door.',
    answer:
      'A full-view door is an aluminium frame filled with glass, installed from about $2,800. It is the contemporary look, it is used a great deal on Florida patios, showrooms and modern builds, and it comes with two Florida specific questions that a salesperson may not raise: what the glass does to your rating and your insurance credit, and how the aluminium behaves in salt air.',
    intro: [
      'The frame is aluminium because it does not rust, which in coastal Florida is a real advantage over steel. Aluminium corrodes rather than rusting, and near salt water it will pit and chalk over time, more slowly than steel rusts but visibly.',
      'The glass is where the Florida complications live. Glazing has to be considered separately in the rating, impact rated glass is available and expensive, and any glazed opening is part of the all-or-nothing wind mitigation assessment your insurer applies. A solid door creates no glazed opening. This one does.',
      'None of that is a reason not to buy it. It is a reason to have the conversation before rather than after, particularly if you are inside the HVHZ or pursuing an insurance credit.',
    ],
    bestFor: [
      'Contemporary and modern Florida houses where a panelled door looks wrong',
      'Garages converted to gyms, studios or bars where daylight is the point',
      'Commercial frontage, showrooms and restaurants opening onto a patio',
      'Coastal properties where aluminium outlasts steel in the frame',
    ],
    tradeoffs: [
      'Very little insulation value, so an attached garage will run hot',
      'Glass complicates the rating, the permit and the insurance credit',
      'Heavy, and glass makes it heavier, so springs and opener are specified up',
      'Privacy has to be solved with the glazing choice: frosted, tinted or obscure',
    ],
    material: 'aluminium-garage-doors',
    quickFacts: [
      { label: 'Installed price', value: '$2,800 to $6,500' },
      { label: 'Wind rated', value: 'Yes' },
      { label: 'Impact rated', value: 'Available, glazing dependent' },
      { label: 'Insulation', value: 'Minimal' },
      { label: 'Coastal', value: 'Aluminium frame does not rust' },
    ],
    faq: [
      {
        question: 'Can a glass door be impact rated in the HVHZ?',
        answer:
          'Impact rated glazing exists and full-view doors are installed inside the HVHZ, so the answer is yes with care and at a price. The specification is more involved than a solid door because the glazing is assessed as part of the assembly, and the approval is issued against that exact configuration. This is one where the licensed contractor pulling the permit needs to be in the conversation early rather than at the end.',
      },
      {
        question: 'How does the glass affect my insurance?',
        answer:
          'A glazed opening is part of the wind mitigation assessment, and the opening protection credit is generally all or nothing across the whole envelope. Putting in a full-view door with non-impact glazing can affect a credit you were relying on elsewhere. Ask your insurer specifically about this door before ordering, because finding out afterwards is expensive.',
      },
      {
        question: 'Will the aluminium corrode near the beach?',
        answer:
          'It will weather, and it will not rust the way steel does. Expect chalking of the finish and some pitting over years within a few miles of the water, faster on the ocean side. Anodised and powder coated finishes hold up better than painted, and rinsing the door with fresh water when you rinse anything else outside genuinely extends it.',
      },
    ],
    related: ['impact-rated-steel', 'insulated-steel', 'commercial-sectional'],
  },

  {
    slug: 'fiberglass-door',
    name: 'Fiberglass Garage Door',
    shortName: 'Fiberglass',
    metaTitle: 'Fiberglass Garage Door in Florida | Coastal, Cost Installed',
    metaDescription:
      'Fiberglass doors resist salt corrosion completely and installed from $1,800. Where they beat steel in Florida and where the sun beats them.',
    priceLow: 1800,
    priceHigh: 4000,
    construction: 'Fiberglass skin over an aluminium or steel frame',
    windRated: true,
    impactRated: false,
    hvhz: 'available',
    insulation: 'Available insulated, commonly specified that way here.',
    answer:
      'A fiberglass door is a moulded fiberglass skin over a frame, installed from about $1,800. Its one decisive Florida advantage is that fiberglass does not corrode at all, which makes it worth a serious look within sight of salt water where steel doors rust and aluminium pits. Its weakness is also Florida: ultraviolet light fades and eventually embrittles it, so the finish quality matters more than the price.',
    intro: [
      'Fiberglass sits between steel and composite. It can be moulded with a wood grain convincingly, it is much lighter than steel, and it does not rust, dent or corrode.',
      'On a barrier island or an oceanfront street that immunity is the whole argument. Steel rusts at every scratch in salt air and aluminium chalks and pits. Fiberglass simply does not care, and that is worth paying for in the places where it matters.',
      'The counter argument is the same sun. Cheap fiberglass fades and can become brittle after years of direct Florida exposure, and a brittle panel cracks rather than dents. The finish and the resin quality are what separate a door that lasts from one that does not, which makes this a poor category to buy at the bottom of the price band.',
    ],
    bestFor: [
      'Barrier island, oceanfront and intracoastal properties',
      'Anywhere a previous steel door rusted out early',
      'Owners who want a wood look lighter and cheaper than composite',
      'Openings where the reduced weight helps an older opener',
    ],
    tradeoffs: [
      'Ultraviolet fading and eventual embrittlement in full Florida sun',
      'Cracks rather than dents on a hard impact, and cracks are harder to repair',
      'Cheap fiberglass ages badly, so the bottom of the price band is a false economy',
      'Fewer style and colour options than steel',
    ],
    material: 'fiberglass-garage-doors',
    quickFacts: [
      { label: 'Installed price', value: '$1,800 to $4,000' },
      { label: 'Wind rated', value: 'Yes' },
      { label: 'Impact rated', value: 'Available' },
      { label: 'Corrosion', value: 'None. Does not rust or pit.' },
      { label: 'Watch for', value: 'UV fade on cheap finishes' },
    ],
    faq: [
      {
        question: 'Is fiberglass better than steel in Florida?',
        answer:
          'Near salt water, often yes. Inland, usually not. The advantage is corrosion immunity, and corrosion is only a real problem where the air carries salt. On an inland house a good insulated steel door will outlast a mid range fiberglass one and cost less, because the thing that kills fiberglass here is the sun, and the sun is everywhere.',
      },
      {
        question: 'How long does it last in Florida sun?',
        answer:
          'It depends heavily on the quality of the finish and on the orientation. A good door on a north facing opening will look right for a long time. A cheap one facing west takes direct afternoon sun year round and will show fading, and eventually brittleness, considerably sooner. This is the category where paying up front actually buys years.',
      },
      {
        question: 'Can fiberglass be impact rated?',
        answer:
          'Yes, impact rated fiberglass assemblies exist and are installed inside the HVHZ. As with every rated door, the approval is issued against the tested assembly at specific sizes, the number goes on the permit, and the licensed contractor who pulls the permit is the one who puts it there.',
      },
    ],
    related: ['wind-rated-steel', 'vinyl-door', 'impact-rated-steel'],
  },

  {
    slug: 'vinyl-door',
    name: 'Vinyl Garage Door',
    shortName: 'Vinyl',
    metaTitle: 'Vinyl Garage Door in Florida | Dent Proof, Cost Installed',
    metaDescription:
      'Vinyl doors do not rust, dent or need painting, installed from $1,500. Where they make sense in Florida and the honest limits.',
    priceLow: 1500,
    priceHigh: 3200,
    construction: 'Vinyl skin over a steel or aluminium frame',
    windRated: true,
    impactRated: false,
    hvhz: 'no',
    insulation: 'Usually insulated, since the vinyl skin needs a core behind it.',
    answer:
      'A vinyl door is a vinyl skin over a frame, installed from about $1,500. Its case is durability of appearance rather than performance: it does not rust, it does not dent the way steel does, the colour goes through the material so scratches do not show white, and it never needs painting. It is a sensible choice for a busy household and a poor one if you need HVHZ impact rating.',
    intro: [
      'The construction matters. The vinyl is a skin, and the strength comes from the frame and the insulating core behind it. A vinyl door is therefore almost always insulated, because there has to be something in there.',
      'The reason people like them is bikes and basketballs. Vinyl flexes and recovers where steel takes a permanent dent, and because the colour is through the material rather than painted on, a scratch does not show as a bright line the way a scratch through steel paint does.',
      'The limits are honest ones. The colour range is narrow, the style range is narrower, and options at the impact rated end are thin, so inside Miami-Dade and Broward this is usually not the category.',
    ],
    bestFor: [
      'Households with children, bikes and a busy driveway',
      'Owners tired of repainting or touching up a steel door',
      'Inland Florida where impact rating is not required',
      'Rental property where low maintenance beats appearance',
    ],
    tradeoffs: [
      'Limited colours and styles compared with steel',
      'Impact rated options are limited, so generally not an HVHZ door',
      'Vinyl can become brittle after long ultraviolet exposure',
      'Not the choice if kerb appeal is the reason you are replacing the door',
    ],
    material: 'vinyl-garage-doors',
    quickFacts: [
      { label: 'Installed price', value: '$1,500 to $3,200' },
      { label: 'Wind rated', value: 'Yes' },
      { label: 'Impact rated', value: 'Limited options' },
      { label: 'Insulation', value: 'Usually insulated' },
      { label: 'Maintenance', value: 'None. Never needs painting.' },
    ],
    faq: [
      {
        question: 'Is vinyl actually dent proof?',
        answer:
          'Dent resistant rather than dent proof, and the difference is real. A basketball or a bike handlebar that would leave a permanent crease in single layer steel will usually leave nothing at all in vinyl. A car reversing into it will still damage it, and vinyl damage tends to be a crack rather than a dent, which is harder to make invisible.',
      },
      {
        question: 'Can I paint a vinyl door a different colour?',
        answer:
          'Generally not, and this is worth knowing before you buy rather than after. The colour is through the material, which is the advantage, and paint does not adhere to vinyl reliably. Choose the colour you want to live with, because changing your mind means changing the door.',
      },
      {
        question: 'Will vinyl hold up in Florida sun?',
        answer:
          'Better than most people expect on colour, because there is no paint to fade off, and the material itself does degrade with long ultraviolet exposure and can become brittle over many years. It is a durable choice in this climate rather than a permanent one, and the same caution about buying at the very bottom of the price band applies.',
      },
    ],
    related: ['fiberglass-door', 'wind-rated-steel', 'insulated-steel'],
  },

  {
    slug: 'wood-door',
    name: 'Wood Garage Door',
    shortName: 'Wood',
    metaTitle: 'Wood Garage Door in Florida | Real Wood, Cost and Maintenance',
    metaDescription:
      'Real wood doors installed from $3,000. Nothing else looks like it and nothing else asks this much of a Florida owner. The honest maintenance picture.',
    priceLow: 3000,
    priceHigh: 6500,
    construction: 'Solid or clad timber, cedar, mahogany or hemlock',
    windRated: true,
    impactRated: false,
    hvhz: 'no',
    insulation: 'Wood insulates somewhat by itself, and less than a bonded insulated steel door.',
    answer:
      'A real wood door is timber, installed from about $3,000 and easily beyond that for a custom one. Nothing else looks like it. It is also the configuration that asks the most of a Florida owner: humidity swells it, ultraviolet strips the finish, and salt air accelerates both. If you want it, budget for refinishing every two to three years and buy it knowing that.',
    intro: [
      'This page is going to talk you out of it more often than into it, and that is deliberate. We install wood doors and we would rather install one for somebody who knows what they are taking on than replace one for somebody who did not.',
      'The Florida problem is moisture cycling. Wood takes up humidity and gives it back, which means it moves, and a door that swells binds in the tracks it was fitted to. The finish is what keeps the moisture out, and Florida ultraviolet is what takes the finish off.',
      'Realistically that means refinishing every two to three years, sooner within sight of salt water. Owners who keep that up have doors that look extraordinary at year ten. Owners who do not have doors that look tired at year four and grey at year seven, and refinishing then is a much bigger job than maintaining would have been.',
    ],
    bestFor: [
      'Architecturally significant houses where composite would be obvious and wrong',
      'Historic districts and HOAs that specify genuine materials',
      'Owners who actively want the material and accept the schedule',
      'Sheltered openings that do not take direct afternoon sun',
    ],
    tradeoffs: [
      'Refinishing every two to three years, sooner near the coast, and it is not optional',
      'Swells and moves with Florida humidity, which affects how it runs in the tracks',
      'Heavy, so springs and opener are specified up and wear faster',
      'Impact rated options are limited, so generally not an HVHZ door',
    ],
    material: 'wood-garage-doors',
    quickFacts: [
      { label: 'Installed price', value: '$3,000 to $6,500 and up' },
      { label: 'Wind rated', value: 'Yes' },
      { label: 'Impact rated', value: 'Limited options' },
      { label: 'Refinishing', value: 'Every 2 to 3 years, sooner near salt' },
      { label: 'Honest alternative', value: 'Composite carriage, for the look without the schedule' },
    ],
    faq: [
      {
        question: 'How often does a wood door really need refinishing in Florida?',
        answer:
          'Every two to three years inland and sooner within a few miles of salt water, and a west facing door sooner again. That is the honest number rather than the brochure one. If that schedule sounds like something you will not keep to, the composite carriage door gets you most of the appearance and asks nothing of you, and we would rather tell you that now.',
      },
      {
        question: 'Can a wood door be hurricane rated?',
        answer:
          'Wind rated wood doors exist. Impact rated options are considerably more limited, which is why wood is generally not the material inside the High Velocity Hurricane Zone. If you are in Miami-Dade or Broward and set on the look, the composite carriage route is usually the way to get there while still meeting what the permit wants.',
      },
      {
        question: 'Is composite really that close?',
        answer:
          'At kerb distance, close enough that most people cannot tell. Up close and with your hand on it, no. The fair comparison though is not new against new, it is year eight against year eight, and by then the maintained wood door looks better than the composite while the unmaintained one looks considerably worse.',
      },
    ],
    related: ['composite-carriage-house', 'carriage-house-steel', 'insulated-steel'],
  },

  {
    slug: 'commercial-sectional',
    name: 'Commercial Sectional Garage Door',
    shortName: 'Commercial sectional',
    metaTitle: 'Commercial Garage Door in Florida | Warehouse and Shop, Cost Installed',
    metaDescription:
      'Heavy duty sectional doors for warehouses, workshops and storefronts, installed from $2,200. Cycle life, spring specification and what commercial actually changes.',
    priceLow: 2200,
    priceHigh: 6500,
    construction: 'Heavy gauge steel, commercial track and hardware',
    windRated: true,
    impactRated: false,
    hvhz: 'available',
    insulation: 'Available insulated or not, depending on whether the space is conditioned.',
    answer:
      'A commercial sectional is the same idea as a residential door built to take far more cycles, installed from about $2,200. What changes is not mainly the panel, it is everything that moves: heavier gauge steel, commercial track and hardware, and springs specified for the cycle count the business will actually put through it. Specifying a residential door for a commercial opening is the single most common and most expensive mistake here.',
    intro: [
      'Cycle life is the whole conversation. A house opens its garage four times a day. A workshop, a delivery bay or a storage unit can do that before nine in the morning, and a standard 10,000 cycle spring that lasts a household seven years lasts that business a matter of months.',
      'So the specification starts with a real number: how many times a day does this door open, and for how long does it need to run before anybody touches it. High cycle springs cost more up front and are cheaper on any door that gets used properly.',
      'The rest follows from the building. Conditioned space wants insulation, unconditioned does not. A door in the wind path of a Florida coast needs the same rating conversation as a house. And a commercial permit is its own process, pulled by the licensed contractor doing the work.',
    ],
    bestFor: [
      'Warehouses, workshops, delivery bays and storage facilities',
      'Auto shops and any opening cycling many times a day',
      'Storefronts and restaurants where the door is part of the frontage',
      'Any opening where a residential door has already worn out early',
    ],
    tradeoffs: [
      'Costs more than a residential door of the same size, and that is the point',
      'Heavier, so the opener and the structure both have to be specified for it',
      'Commercial permits and inspections are their own process',
      'Overspecifying a low use opening is money that does nothing',
    ],
    quickFacts: [
      { label: 'Installed price', value: '$2,200 to $6,500' },
      { label: 'Wind rated', value: 'Yes' },
      { label: 'Impact rated', value: 'Available' },
      { label: 'Springs', value: 'Specified to your real cycle count' },
      { label: 'Key question', value: 'How many times a day does it open' },
    ],
    faq: [
      {
        question: 'What actually makes a door commercial?',
        answer:
          'The hardware and the cycle rating rather than the badge. Heavier gauge steel, commercial track, heavier duty hinges and rollers, and springs specified for the cycles the door will really do. You can put a residential door on a commercial opening and it will work, briefly, and then it will start costing you a service call at a time.',
      },
      {
        question: 'Are high cycle springs worth the extra?',
        answer:
          'On any door that opens more than a few times a day, yes, and the arithmetic is not close. A standard spring is around 10,000 cycles. High cycle options run to 25,000, 50,000 and beyond. A business doing forty cycles a day burns through a standard spring in well under a year, and each replacement is a call-out plus the downtime, which is usually the more expensive half.',
      },
      {
        question: 'Do commercial doors need the same hurricane rating?',
        answer:
          'The same rules apply by address, and the stakes are often higher because the opening is bigger. A large commercial door is a large hole in the building envelope, and inside the High Velocity Hurricane Zone the impact requirement applies to it as it does to a house. The approval goes on the commercial permit, pulled by the licensed contractor.',
      },
    ],
    related: ['impact-rated-steel', 'wind-rated-steel', 'full-view-aluminium'],
  },
];

/** Slug lookup for templates and internal links. */
export const doorBySlug = Object.fromEntries(doorModels.map((d) => [d.slug, d]));
