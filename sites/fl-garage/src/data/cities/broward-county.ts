/**
 * Broward County: eight service-area pages, per research/fl-garage/BRIEF.md
 * section 6.
 *
 * All of Broward is inside the High Velocity Hurricane Zone. Every door
 * replacement here needs a Miami-Dade NOA rated door and a building permit
 * pulled by a licensed contractor. Repairs to springs, cables, rollers and
 * openers do not need a permit, and that distinction comes up on almost
 * every call, so each entry states it plainly.
 *
 * Every entry says something true about the housing era, the garages, or
 * the failures we actually see in that city. Where a city-level detail was
 * not certain, the copy says something true about the county instead.
 */

import type { City } from '../types';

export const browardCountyCities: City[] = [
  {
    slug: 'fort-lauderdale',
    name: 'Fort Lauderdale',
    region: 'broward-county',
    county: 'Broward County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Fort Lauderdale, FL | From $150',
    metaDescription:
      'Garage door repair in Fort Lauderdale, FL. Springs from $150, cable repair from $95, openers installed from $275. Same-day service, written estimate first.',
    answer:
      'Garage door repair in Fort Lauderdale starts at $150 per spring, $95 for cable repair and $275 for a new opener installed. Same-day service is available across the city, and you get a written estimate before anything is touched. Fort Lauderdale is inside the High Velocity Hurricane Zone, so a replacement door needs a Miami-Dade NOA rating and a permit.',
    intro: [
      'The garage work in Fort Lauderdale is in the single family neighborhoods, not the towers on the beach. Victoria Park, Rio Vista and the older blocks of Coral Ridge are 1950s and 1960s concrete block ranches with a single door and low headroom, and many of those doors have been replaced at least once since Hurricane Wilma in 2005. The canal front streets off Las Olas and the Intracoastal run larger, with doubles and three car garages on rebuilt lots.',
      'Salt is the story east of US 1. A cable that would last fifteen years inland shows rust strands within seven or eight here, and bottom brackets, hinges and the torsion tube go with it. The most common call we get in Fort Lauderdale is a door that stopped halfway and is hanging crooked, which is a frayed cable or a snapped spring on hardware that corroded from the outside in. We replace both cables and both springs when one has gone, because the other is the same age and has seen the same air.',
    ],
    localNotes: [
      '1950s and 1960s CBS ranches with single doors and low headroom east of US 1',
      'Salt air corrodes cables, bottom brackets and torsion tubes fastest near the Intracoastal',
      'Replacement doors need a Miami-Dade NOA rating and a building permit',
      'Condo and townhouse work is limited to units with a private door of their own',
    ],
    nearby: ['hollywood', 'pompano-beach', 'davie', 'weston'],
    faq: [
      {
        question: 'My house is east of US 1. Does that change what you install?',
        answer:
          'Yes. Within a mile or two of the Intracoastal we specify galvanized or stainless cables, coated springs and stainless fasteners, and we tell you which parts are upgraded on the estimate. The labor is the same. The difference is a few dollars in hardware that buys years of life.',
      },
      {
        question: 'Do I need a permit to replace my garage door in Fort Lauderdale?',
        answer:
          'Yes. Fort Lauderdale is in the High Velocity Hurricane Zone, so a replacement door must carry a Miami-Dade Notice of Acceptance and the permit is pulled by a licensed contractor with the rating on it. A spring, cable, roller or opener repair does not need a permit. Hurricane-rated installation starts at $1,800 with the permit included in the quote.',
      },
      {
        question: 'How fast can you get to Fort Lauderdale?',
        answer:
          'Same day in most cases, seven days a week. Fort Lauderdale sits in the middle of our Broward coverage, so it is usually one of the shortest response times on our map. If you need after-hours dispatch, the emergency premium of $150 to $300 is stated before we send anyone.',
      },
    ],
  },
  {
    slug: 'hollywood',
    name: 'Hollywood',
    region: 'broward-county',
    county: 'Broward County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Hollywood, FL | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Hollywood, FL. Springs from $150, opener repair from $95, off-track repair from $140. Same-day service on both sides of I-95.',
    answer:
      'Garage door repair in Hollywood starts at $150 per spring, $95 for opener repair and $140 for an off-track door. Same-day service covers the whole city from the beach to I-75. Hollywood is in the High Velocity Hurricane Zone, so a replacement door needs a Miami-Dade NOA rating and a permit, while repairs do not.',
    intro: [
      'Hollywood splits at I-95. East of it, from Hollywood Lakes by the Intracoastal to the 1950s blocks along US 1 and Dixie Highway, the houses are concrete block ranches with a single 8 or 9 foot door, often under 7 feet of headroom, and often with a garage that has been half converted into a room. West of I-95, Emerald Hills and the subdivisions out toward Sheridan Street and I-75 were built in the 1970s through the 1990s with a 16 foot double on a two car garage, and those doors are now at or past the 10,000 cycle life of their original springs.',
      'The east side problem is corrosion. Salt air off the Atlantic and the Intracoastal eats cables, bottom brackets and the torsion tube, and a rusted cable is the most common thing we find when a Hollywood door stops crooked. The west side problem is age. Springs installed in the 1990s, openers with plastic gears that have spent thirty summers in a 100°F garage, and sections that have started to bow. We carry parts for both kinds of call on the truck.',
    ],
    localNotes: [
      '1950s CBS singles with low headroom east of I-95, many with partial garage conversions',
      '1970s to 1990s doubles in Emerald Hills and the west side, on original springs',
      'Salt corrosion on cables and brackets from Hollywood Lakes to the beach',
      'Replacement doors need a Miami-Dade NOA rating and a permit; repairs do not',
    ],
    nearby: ['fort-lauderdale', 'pembroke-pines', 'miramar', 'davie'],
    faq: [
      {
        question: 'My east Hollywood garage has very little headroom. Can you still fit an opener?',
        answer:
          'Usually yes. Many 1950s Hollywood garages have 6 to 8 inches above the door, which is too little for a standard torsion setup and rail. A low headroom track kit or a wall mounted jackshaft opener solves it. We measure first and tell you which one your garage takes before quoting. Jackshaft units run $450 to $800 installed.',
      },
      {
        question: 'The door in our Emerald Hills house is original from the 1990s. Repair or replace?',
        answer:
          'If the sections are straight and not rusted through, repair. A pair of springs is $150 to $350 each with $120 to $250 added for doing both together, and that door has years left. If the sections are bowed, the door is not rated for the current code, and you want it to survive a storm, a Miami-Dade NOA rated replacement starts at $1,800 with the permit in the quote. We tell you which case you are in.',
      },
    ],
  },
  {
    slug: 'coral-springs',
    name: 'Coral Springs',
    region: 'broward-county',
    county: 'Broward County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Coral Springs, FL | From $150',
    metaDescription:
      'Garage door repair in Coral Springs, FL. Springs from $150, openers installed from $275, new doors from $950. Same-day service, city code and HOA handled.',
    answer:
      'Garage door repair in Coral Springs starts at $150 per spring, $275 for a new opener installed and $950 for a new wind-rated door. Almost every house in Coral Springs has a 16 foot double door installed between the 1970s and the 1990s, and those doors are reaching the end of their life together. A replacement must be Miami-Dade NOA rated, permitted, and acceptable under the city appearance code.',
    intro: [
      'Coral Springs was built almost all at once. The city went from pasture to full subdivisions between the early 1970s and the late 1990s, and nearly every house in Ramblewood, Eagle Trace, Wyndham Lakes and the older sections off University Drive got a two car garage with a single double door. The Heron Bay side in the north came later, in the 1990s and 2000s, with three car garages. Because so many doors went in within the same twenty years, the failures arrive in waves: the springs are past 10,000 cycles, the rollers are the original nylon or steel, and the openers are chain drives from the 1990s with plastic drive gears that have stripped.',
      'Coral Springs is known for the strictest appearance code in Broward, and most of the subdivisions add an HOA on top of it. A replacement door has to match the house and the neighborhood in color and style, and some associations want to approve the window layout before it goes in. We quote doors that pass, we give you the manufacturer sheet for the HOA packet, and we handle the permit, which in Coral Springs as everywhere in the HVHZ requires a Miami-Dade NOA rated door with the rating on the permit. The city is far enough inland that salt is not the enemy here. Cycle count and heat are.',
    ],
    localNotes: [
      '1970s to 1990s doubles on nearly every house, failing in waves at similar ages',
      'City appearance code plus HOA rules govern door color, style and window layout',
      'Inland, so heat and cycle count kill parts rather than salt',
      'Replacement doors need a Miami-Dade NOA rating and a permit',
    ],
    nearby: ['pompano-beach', 'weston', 'fort-lauderdale', 'davie'],
    faq: [
      {
        question: 'Will a new garage door pass the Coral Springs appearance code and my HOA?',
        answer:
          'Yes, if it is chosen for it. We quote doors in the standard colors and panel styles the code and most Coral Springs associations accept, and we give you the manufacturer specification sheet and color sample for your HOA application before you order. Wind-rated steel doors start at $950 installed and Miami-Dade NOA hurricane-rated doors start at $1,800, permit included.',
      },
      {
        question: 'My neighbors have all had spring failures recently. Should I replace mine before it breaks?',
        answer:
          'If the house was built in the 1980s or 1990s and the springs have never been changed, yes. A spring on a daily-use double door lasts about 10,000 cycles, roughly 7 to 10 years, and yours is likely well past it. Replacing both springs on your schedule is $150 to $350 per spring plus $120 to $250 for doing the pair. Replacing one after it snaps on a Sunday adds the emergency premium of $150 to $300.',
      },
    ],
  },
  {
    slug: 'pembroke-pines',
    name: 'Pembroke Pines',
    region: 'broward-county',
    county: 'Broward County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Pembroke Pines, FL | From $150',
    metaDescription:
      'Garage door repair in Pembroke Pines, FL. Springs from $150, cable repair from $95, openers installed from $275. Same-day service, written estimate first.',
    answer:
      'Garage door repair in Pembroke Pines starts at $150 per spring, $95 for cable repair and $275 for a new opener installed. Most of western Pembroke Pines was built in a single 1990s wave, so the doors in Silver Lakes, Chapel Trail and Pembroke Falls are hitting spring and opener failure at the same time. Pembroke Pines is in the HVHZ, so a replacement door needs a Miami-Dade NOA rating and a permit.',
    intro: [
      'Pembroke Pines has two housing stocks. East of University Drive, the neighborhoods near Hollywood are 1960s and 1970s concrete block ranches with a single door and the low headroom that comes with that era. West of Flamingo Road, Silver Lakes, Chapel Trail, Pembroke Falls and the gated communities out toward I-75 went up in one 1990s boom, almost all with a 16 foot double door on a two car garage, and the three car garages in the later sections have a double and a single. Century Village is condominiums, so the calls from there are for the single family streets around it rather than the buildings themselves.',
      'When thousands of doors are installed in the same five years, they fail in the same five years. A torsion spring is good for about 10,000 cycles, and a family garage in Pembroke Pines that opens four to six times a day burned through that long ago. The calls we get in the western communities are a snapped spring, a chain drive opener from 1996 with a stripped gear, and sections that have bowed from thirty summers of heat. Most of these subdivisions have HOA rules on door color and style, so a replacement has to match the street as well as carry the Miami-Dade NOA rating the permit requires.',
    ],
    localNotes: [
      '1990s doubles across Silver Lakes, Chapel Trail and Pembroke Falls, aging together',
      '1960s and 1970s singles with low headroom in the eastern neighborhoods',
      'HOA color and style rules in most western communities',
      'Replacement doors need a Miami-Dade NOA rating and a permit; repairs do not',
    ],
    nearby: ['miramar', 'hollywood', 'davie', 'weston'],
    faq: [
      {
        question: 'Our Silver Lakes door was installed when the house was built in the 1990s. What usually goes first?',
        answer:
          'The springs, then the opener. A 1990s double on original springs is far past its 10,000 cycle rating, and replacement is $150 to $350 per spring with $120 to $250 added to do both together, which we recommend. The chain drive openers of that era strip their plastic drive gear in the summer heat; a gear kit is $95 to $300, and a new belt drive opener is $350 to $600 installed.',
      },
      {
        question: 'Does my HOA need to approve a replacement door in Pembroke Pines?',
        answer:
          'In most of the western communities, yes. Associations there typically require the door to match the house color and the style on the street. We give you the manufacturer sheet and color sample for the application and we do not order until the approval is in. The city permit is separate, and because Pembroke Pines is in the HVHZ it requires a door with a Miami-Dade NOA. Hurricane-rated doors start at $1,800 with the permit in the quote.',
      },
    ],
  },
  {
    slug: 'pompano-beach',
    name: 'Pompano Beach',
    region: 'broward-county',
    county: 'Broward County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Pompano Beach, FL | From $150',
    metaDescription:
      'Garage door repair in Pompano Beach, FL. Springs from $150, cable repair from $95, opener repair from $95. Same-day service, rust-resistant parts on the coast.',
    answer:
      'Garage door repair in Pompano Beach starts at $150 per spring, $95 for cable repair and $95 for opener repair. Pompano Beach is coastal and its housing is mostly 1950s to 1970s concrete block, so the failures we see are corroded cables, brackets and springs on single doors that are decades old. As part of the HVHZ, any replacement door needs a Miami-Dade NOA rating and a permit.',
    intro: [
      'Pompano Beach is older than most of Broward. The blocks between Federal Highway and the Intracoastal, and the streets around Cresthaven and the older sections west of Dixie Highway, were built from the 1950s into the 1970s as concrete block ranches with a single door. Palm Aire and the golf course communities on the west side came in the 1970s and 1980s with doubles. Some of the older single doors are still wood, and wood at the bottom edge of a Pompano garage takes on water every afternoon for half the year.',
      'Salt does the damage here. Within two miles of the beach we find cables that have gone orange and stiff, bottom brackets that crumble when touched, and springs with pitting along the coil that makes them snap early. A door that has been cycled on a corroded cable will usually also have a damaged drum. We price cable and drum together at $225 to $400 so you know the full number, and we use galvanized or stainless hardware on the coastal side as standard.',
    ],
    localNotes: [
      '1950s to 1970s CBS singles near the coast, 1970s and 1980s doubles in Palm Aire',
      'Coastal corrosion on cables, drums, brackets and springs is the leading failure',
      'Some remaining wood doors with water damage at the bottom edge',
      'Replacement doors need a Miami-Dade NOA rating and a permit',
    ],
    nearby: ['fort-lauderdale', 'coral-springs', 'hollywood', 'davie'],
    faq: [
      {
        question: 'The cable on my garage door is rusty but not broken. Should I wait?',
        answer:
          'No. A rusted cable is the most common visible warning we see in Pompano Beach, and it fails without further notice, usually with the door halfway up. Replacing it now is $95 to $300; replacing it after it drops the door and bends a section is that plus $250 to $800 per panel. We replace both cables at once because the other one has seen the same air.',
      },
      {
        question: 'Can you repair an older wood door in Pompano Beach, or does it have to go?',
        answer:
          'If the sections are sound we repair it, and a wood door needs a heavier spring than a steel one the same size, which we set for. If the bottom section is rotted or the door has no wind rating, replacement is the honest answer. In the HVHZ that means a Miami-Dade NOA rated door with a permit, from $1,800 installed, and a wood look is available in steel if you want to keep the appearance.',
      },
    ],
  },
  {
    slug: 'weston',
    name: 'Weston',
    region: 'broward-county',
    county: 'Broward County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Weston, FL | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Weston, FL. Springs from $150, openers installed from $275, hurricane-rated doors from $1,800. HOA approved styles, same-day service.',
    answer:
      'Garage door repair in Weston starts at $150 per spring, $275 for a new opener installed and $1,800 for a Miami-Dade NOA rated hurricane door. Weston was master planned from the 1980s to the 2000s, and its two and three car garages carry some of the largest and most expensive doors in Broward, under HOA rules that govern color and style in nearly every community.',
    intro: [
      'Weston is a planned city on the edge of the Everglades, and the garages show it. Weston Hills, The Ridges and Savanna were built from the late 1980s through the 2000s with three car garages on many lots, which means a 16 foot double next to a single, both often in a carriage style with windows across the top section. Bonaventure, the older section in the west, dates to the 1970s and 1980s and runs to doubles. The doors are heavy, the springs are sized for it, and the openers are doing more work per cycle than a standard door asks of them.',
      'Almost every Weston community has an association with a door standard, and many will not accept a replacement without an approved color and panel design. We quote from the styles that pass and we supply the paperwork. The city is inland, so salt is not the problem here; heat and cycle count are, plus the storm code. Weston is in the High Velocity Hurricane Zone, so a replacement must carry a Miami-Dade NOA and a permit, and on a wide carriage door that means a heavier, reinforced section than most homeowners expect. We price it in writing before you decide.',
    ],
    localNotes: [
      'Three car garages with a double and a single across Weston Hills, The Ridges and Savanna',
      'Carriage style and windowed doors are the norm and the HOA usually specifies them',
      '1970s and 1980s doubles in Bonaventure',
      'Replacement doors need a Miami-Dade NOA rating and a permit',
    ],
    nearby: ['davie', 'pembroke-pines', 'coral-springs', 'miramar'],
    faq: [
      {
        question: 'My HOA in Weston requires a specific door style. Can you match it?',
        answer:
          'Yes. Most Weston associations specify a carriage or raised panel design in an approved color, sometimes with a window pattern. We quote from doors that carry both the style and a Miami-Dade NOA, and we give you the specification sheet for the architectural review before anything is ordered. Hurricane-rated doors start at $1,800 installed; a wide carriage door with decorative hardware and glass runs higher and is quoted in writing.',
      },
      {
        question: 'Do heavier carriage doors need different springs?',
        answer:
          'Yes. Spring size is set by door weight, and an insulated carriage door with windows weighs considerably more than a plain steel door of the same size. We weigh the door and match the spring rather than assuming. Spring replacement is $150 to $350 per spring, and on a Weston double we recommend doing both, which adds $120 to $250.',
      },
      {
        question: 'We lose power in storms. What keeps the garage usable?',
        answer:
          'A battery backup on the opener, which adds $60 to $150 to any unit and cycles the door several times on its own power. Every opener also has a manual release cord, and we show you how it works before we leave. If the door is stuck after an outage, opener repair starts at $95.',
      },
    ],
  },
  {
    slug: 'davie',
    name: 'Davie',
    region: 'broward-county',
    county: 'Broward County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Davie, FL | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Davie, FL. Springs from $150, off-track repair from $140, new doors from $950. Wide doors, barns and detached garages, same-day service.',
    answer:
      'Garage door repair in Davie starts at $150 per spring, $140 for an off-track door and $950 for a new wind-rated door. Davie is the semi rural part of Broward, with large lots, detached garages, barns and doors wider than the county standard. Davie is inside the HVHZ, so any replacement door needs a Miami-Dade NOA rating and a permit, whatever building it hangs on.',
    intro: [
      'Davie kept its acreage when the rest of Broward was subdivided, and the garage work follows. Along Orange Drive, Flamingo Road and the equestrian streets there are detached garages, workshops, barns and RV bays with 18 foot doors and taller openings than the 7 foot standard, on lots big enough that the garage is the working building of the property. Forest Ridge and the subdivisions along University Drive and Nova Drive are conventional 1980s and 1990s doubles, and Pine Island Ridge is mostly townhouses and condominiums with single doors.',
      'Wide doors are heavier and their springs are bigger, and an off-track call on an 18 foot door is a two person job, which is why our off-track price runs from $140 to $600 depending on what bent. Detached garages and barns are also where we find the oldest hardware in the county, sometimes original extension springs with no safety cables, and openers that have never had the travel limits set. Davie is inland enough that salt is not the issue, but a barn door on a dirt floor sees more grit in the rollers and tracks than any residential door in Broward.',
    ],
    localNotes: [
      'Detached garages, barns and RV bays with 18 foot and taller doors on large lots',
      'Older extension spring setups without safety cables on outbuildings',
      '1980s and 1990s doubles in Forest Ridge and along University Drive',
      'Replacement doors need a Miami-Dade NOA rating and a permit on any building',
    ],
    nearby: ['weston', 'pembroke-pines', 'hollywood', 'fort-lauderdale'],
    faq: [
      {
        question: 'Do you work on barn and workshop doors, not just house garages?',
        answer:
          'Yes. A sectional door on a barn, workshop or RV bay uses the same springs, cables, tracks and openers as a house door, sized up. We carry springs for 18 foot and taller doors. What we do not do is one piece swing doors or agricultural sliding doors, which are a different trade. Tell us the door width and height when you call and we bring the right parts.',
      },
      {
        question: 'My detached garage has springs along the sides of the tracks, not above the door. Is that a problem?',
        answer:
          'Those are extension springs, and they are fine as long as each one has a safety cable running through it. A lot of older Davie outbuildings do not. Without the cable, a spring that snaps becomes a projectile. We add safety cables during any spring service, and if the door is heavy enough we recommend converting to torsion springs, which is quoted in writing first.',
      },
    ],
  },
  {
    slug: 'miramar',
    name: 'Miramar',
    region: 'broward-county',
    county: 'Broward County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Miramar, FL | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Miramar, FL. Springs from $150, cable repair from $95, openers installed from $275. Same-day service east to west, written estimate first.',
    answer:
      'Garage door repair in Miramar starts at $150 per spring, $95 for cable repair and $275 for a new opener installed. Western Miramar was built from the 1990s into the 2000s with a 16 foot double on nearly every house, and those doors are now hitting their first spring and opener failures at the same time. Miramar is inside the HVHZ, so a replacement door needs a Miami-Dade NOA rating and a permit.',
    intro: [
      'Miramar runs 14 miles from east to west and the doors change along the way. The eastern city near US 441 and Miramar Parkway is 1950s and 1960s concrete block with single doors and low headroom, the same era as its Hollywood neighbors. West of I-75, SilverLakes, Sunset Lakes, Silver Shores, Riviera Isles and Huntington were built in the 1990s and 2000s as gated communities with doubles, three car garages in the larger sections, and HOA rules on door color and style. That western wave is where most of our Miramar calls come from now.',
      'A 1990s door has done its 10,000 cycles. A 2000s door on a busy family garage is close. The pattern we see in western Miramar is a snapped torsion spring on a double, then within a year the opener gives out because it spent that year lifting an unbalanced door. We check balance on every spring job so the opener does not become the next call. Miramar is inland and salt is not the main problem here; heat, cycle count and the afternoon rain at the bottom seal are. We serve the city in English and Spanish.',
    ],
    localNotes: [
      '1990s and 2000s gated communities west of I-75 with doubles and three car garages',
      '1950s and 1960s singles with low headroom in the eastern neighborhoods',
      'HOA color and style rules across the western communities',
      'Replacement doors need a Miami-Dade NOA rating and a permit; repairs do not',
    ],
    nearby: ['pembroke-pines', 'hollywood', 'weston', 'davie'],
    faq: [
      {
        question: 'Our door in SilverLakes is original to the house. What should we budget for?',
        answer:
          'Springs first. Both springs on a 1990s or 2000s double is $150 to $350 per spring plus $120 to $250 to do the pair, and we recommend the pair because the second one is the same age. If the opener is also original, a gear kit or logic board is $95 to $300, and a new belt drive opener with battery backup is $350 to $600 plus $60 to $150 for the battery. A written estimate covers all of it before we start.',
      },
      {
        question: 'Do you offer service in Spanish in Miramar?',
        answer:
          'Yes. You can call (561) 897-9930 and speak Spanish, and every page on this site has a Spanish version. The estimate, the invoice and the one year parts and labor warranty are written the same way in either language.',
      },
    ],
  },
];
