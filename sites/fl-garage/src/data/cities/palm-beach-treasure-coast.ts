/**
 * Palm Beach and the Treasure Coast: ten service-area pages. The first
 * eight are per research/fl-garage/BRIEF.md section 6; Lake Worth Beach
 * and North Palm Beach were added on 29 September 2026 because Search
 * Console showed those two towns named in dozens of queries with no page
 * to answer them.
 *
 * Palm Beach and St. Lucie counties are outside the High Velocity Hurricane
 * Zone, but the design wind pressure is still high, highest along the
 * coast. Every replacement door here needs a Florida Product Approval
 * number and a building permit pulled by a licensed contractor. Many
 * "West Boca", "west Boynton" and "west Delray" addresses are
 * unincorporated Palm Beach County, so the permit goes through the county
 * rather than the city, and the copy says so where it matters.
 */

import type { City } from '../types';

export const palmBeachTreasureCoastCities: City[] = [
  {
    slug: 'boca-raton',
    name: 'Boca Raton',
    region: 'palm-beach-treasure-coast',
    county: 'Palm Beach County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Boca Raton, FL | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Boca Raton, FL. Springs from $150, opener installation from $275, hurricane-rated doors from $1,800. Same day, written estimate first.',
    answer:
      'Garage door repair in Boca Raton starts at $150 per spring, $95 for cable repair and $275 for a new opener installed. Same-day service covers east Boca and the West Boca suburbs seven days a week, and you get a written estimate before we touch the door.',
    intro: [
      'Boca Raton splits along I-95. East of it are the 1950s to 1970s neighborhoods around Mizner Park and the Intracoastal, where many houses have been remodeled and the original steel door has been swapped for aluminum or full view glass. West of it, from Boca West and Broken Sound out to the 441 corridor, are the 1980s and 1990s gated subdivisions, most with a 16 by 7 double door on a two car garage and many still on the opener that came with the house.',
      'The two sides fail differently. East Boca is close enough to the ocean that salt air rusts cables, bottom brackets and torsion tubes, and a glass door carries more weight than the spring it was sold with. West Boca doors are aging together: a subdivision built in 1988 has springs that have been replaced once, an opener with a logic board cooked by thirty summers at 100°F in the garage, and an HOA that wants the replacement to match the street. Palm Beach County is outside the HVHZ, but the wind zone is still high, so a replacement door needs a Florida Product Approval number and a permit pulled by a licensed contractor.',
    ],
    localNotes: [
      'Aluminum and full view glass doors on east Boca remodels, heavier than the original steel',
      'West Boca 1980s to 1990s doubles in gated communities with HOA style and color rules',
      'Salt corrosion on cables and bottom brackets east of I-95',
      'Many West Boca addresses are unincorporated, so the permit goes through Palm Beach County rather than the city',
    ],
    nearby: ['delray-beach', 'boynton-beach', 'wellington', 'west-palm-beach'],
    faq: [
      {
        question: 'My HOA in West Boca has rules about the door. Can you handle that?',
        answer:
          'Yes. Most gated communities in West Boca regulate the door style, color and sometimes the window pattern, and the HOA approval is separate from the building permit. We give you the manufacturer spec sheet and the Florida Product Approval number for the door we propose so you can submit it, and we do not order until the approval is in hand.',
      },
      {
        question: 'Does a full view glass door need a hurricane rating in Boca Raton?',
        answer:
          'Yes. Every replacement garage door in Palm Beach County has to be rated for the wind pressure at the site, and the rating is recorded on the permit. An aluminum full view door starts around $1,300 installed, hurricane-rated versions start around $1,800, and impact-rated glass doors run to $8,000 and above. We quote the options in writing.',
      },
      {
        question: 'My east Boca door has rust on the cable. How urgent is that?',
        answer:
          'Urgent enough to book this week. A rusted cable is the most common visible warning we see near the coast, and when it lets go the door drops on one side and usually bends a track. Cable repair starts at $95, cable and drum together is $225 to $400, and both cables are replaced at once so the door stays level.',
      },
    ],
  },
  {
    slug: 'west-palm-beach',
    name: 'West Palm Beach',
    region: 'palm-beach-treasure-coast',
    county: 'Palm Beach County',
    tier: 1,
    metaTitle: 'West Palm Beach Garage Door Repair | From $150 | Same Day',
    metaDescription:
      'Garage door repair in West Palm Beach, FL. Springs from $150, cable repair from $95, opener installation from $275. Same-day service, written estimate first.',
    answer:
      'Garage door repair in West Palm Beach starts at $150 per spring, $95 for cable repair and $275 for a new opener installed. Same-day service runs seven days a week from the older neighborhoods east of I-95 to the subdivisions west of the Turnpike, with a written estimate before any work.',
    intro: [
      'West Palm Beach has the widest spread of housing we cover in Palm Beach County. East of I-95 are the 1920s to 1950s neighborhoods, Flamingo Park, El Cid and Northwood among them, where garages are small, often detached, and sometimes too low for a standard rail opener. West of the Turnpike along Okeechobee Boulevard are the 1990s and 2000s gated subdivisions with two and three car garages and doors that all went in within a few years of each other.',
      'In the older neighborhoods the calls are about cables, rollers and rust on single doors that have been cycling for decades, and about openers that were bolted on years after the house was built. In the western communities it is cycle count: a door installed in 1998 with a 10,000 cycle spring is on its second or third set by now, and the opener that came with the house has a logic board that has spent 25 summers at 100°F. West Palm Beach is outside the HVHZ, but Palm Beach County is still a high wind zone, so a replacement door needs a Florida Product Approval number and a permit from the city building department, pulled by a licensed contractor.',
    ],
    localNotes: [
      'Prewar and 1950s neighborhoods east of I-95 with small, sometimes detached garages and low headroom',
      '1990s to 2000s gated subdivisions west of the Turnpike with doors aging in bulk',
      'Salt air within a few miles of the Intracoastal rusts cables and bottom brackets first',
      'City permit for a door replacement inside the city limits; unincorporated addresses go through the county',
    ],
    nearby: ['palm-beach-gardens', 'lake-worth-beach', 'north-palm-beach', 'wellington', 'boynton-beach', 'jupiter'],
    faq: [
      {
        question: 'My garage in Flamingo Park is small and old. Can it take a modern opener?',
        answer:
          'Usually, but not always a standard one. Older garages east of I-95 can have less than the 12 inches of headroom a rail opener needs above the door. A low headroom track kit or a wall mounted jackshaft opener, $450 to $800 installed, solves that. We measure before we quote and tell you which one your garage takes.',
      },
      {
        question: 'Do you cover the whole city or just part of it?',
        answer:
          'All of it, plus the unincorporated county pockets with a West Palm Beach mailing address. The number rings our dispatch line, not an answering service. Give us the street when you call and we confirm the arrival window for that side of the city.',
      },
    ],
  },
  {
    slug: 'boynton-beach',
    name: 'Boynton Beach',
    region: 'palm-beach-treasure-coast',
    county: 'Palm Beach County',
    tier: 1,
    metaTitle: 'Boynton Beach Garage Door Repair | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Boynton Beach, FL. Springs from $150, opener repair from $95. Same-day service in 55 plus communities, written estimate first.',
    answer:
      'Garage door repair in Boynton Beach starts at $150 per spring, $95 for opener repair and $275 for a new opener installed. We cover the gated and 55 plus communities west of Jog Road as well as the older streets near the Intracoastal, same day, seven days a week.',
    intro: [
      'Most of Boynton Beach was built in one long push from the late 1980s through the 2000s, and a large share of it is 55 plus. Aberdeen, the Valencia communities and the neighborhoods along Jog Road and Hagen Ranch Road were sold with the same builder grade steel door and chain drive opener on house after house, which means whole streets reach the end of a spring set in the same year.',
      'A retirement household uses the garage door as the front door. Golf carts, daily errands and a car that never sits outside push a door past 1,500 cycles a year, so a 10,000 cycle spring that the brochure called ten years lasts closer to seven. The calls we take here are snapped torsion springs, worn chain drive gear kits, and openers whose logic boards gave out after twenty summers. Palm Beach County is outside the HVHZ but still sits in a high wind zone, so a replacement door needs a Florida Product Approval number and a permit whether the address is in the city or in the unincorporated county to the west.',
    ],
    localNotes: [
      'Large 55 plus communities where doors cycle several times a day and fail in the same years',
      'Builder grade steel doubles and chain drive openers from the 1990s and 2000s',
      'HOA approval on top of the building permit in nearly every gated community',
      'West Boynton addresses are unincorporated Palm Beach County, so the permit goes through the county',
    ],
    nearby: ['lake-worth-beach', 'delray-beach', 'boca-raton', 'wellington', 'west-palm-beach'],
    faq: [
      {
        question: 'We are in a 55 plus community. Does the HOA have to approve a new door?',
        answer:
          'Almost always. The HOA controls the look, the building department controls the wind rating, and they are two separate approvals. We supply the spec sheet, color and Florida Product Approval number for the door we propose, and we do not order until the HOA has signed off.',
      },
      {
        question: 'How long does a spring last with a golf cart going in and out every day?',
        answer:
          'A standard 10,000 cycle torsion spring at four to five cycles a day lasts about five to seven years. A high cycle spring rated for 25,000 cycles or more sits at the upper end of the $150 to $350 range but lasts two to three times longer, and on a door that busy it is usually the better buy. We tell you the cycle rating of what we fit.',
      },
      {
        question: 'When is the best time for a tune-up here?',
        answer:
          'April or May, before hurricane season starts on 1 June. A tune-up is $85 to $160 and covers balance, spring tension, cables, rollers and the opener force settings. If you leave for the summer, that is the visit that keeps a tired spring from snapping on an empty house.',
      },
    ],
  },
  {
    slug: 'delray-beach',
    name: 'Delray Beach',
    region: 'palm-beach-treasure-coast',
    county: 'Palm Beach County',
    tier: 2,
    metaTitle: 'Delray Beach Garage Door Repair | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Delray Beach, FL. Springs from $150, cable repair from $95, storm damage repair from $150. Salt corrosion east of I-95 handled, same day.',
    answer:
      'Garage door repair in Delray Beach starts at $150 per spring, $95 for cable repair and $275 for a new opener installed. Salt air east of I-95 is behind most of our Delray calls, and rusted cables and bottom brackets are the parts we replace here most often.',
    intro: [
      'Delray Beach has two housing stocks. East of I-95, around Lake Ida and the streets off Atlantic Avenue, are 1950s to 1970s houses with single doors, low headroom and a few blocks between the garage and the ocean. West of Military Trail and out along Atlantic toward the Turnpike are the 1980s to 2000s golf and gated communities, with double doors, three car garages and an HOA that has an opinion about the door.',
      'On the east side we replace rusted cables, bottom brackets and hinges, and the torsion tube itself when a rusted set screw has been chewing it. A cable with visible rust is the warning we ask you to look for. On the west side it is cycle count and heat: springs past 10,000 cycles and openers with cooked logic boards. Delray Beach is outside the HVHZ, but a replacement door in Palm Beach County still needs a Florida Product Approval number and a permit, and the design wind pressure rises toward the beach, so an oceanside address needs a door rated higher than one in the western suburbs.',
    ],
    localNotes: [
      '1950s to 1970s single doors east of I-95 with heavy salt corrosion',
      'Rust on cables, bottom brackets and torsion tubes is the most common visible failure',
      '1980s to 2000s golf and gated communities west of Military Trail',
      'Design wind pressure rises toward the beach, so the rated door differs by address',
    ],
    nearby: ['boynton-beach', 'boca-raton', 'wellington', 'west-palm-beach'],
    faq: [
      {
        question: 'How often should cables be replaced this close to the ocean?',
        answer:
          'Look at them every year and replace them at the first sign of rust or a broken strand. Within a few miles of the coast a standard galvanized cable can start rusting in a few years. Cable repair starts at $95, cable and drum together is $225 to $400, and we replace both cables at once so the door stays level.',
      },
      {
        question: 'Do you help with the paperwork after a storm?',
        answer:
          'Yes. We photograph the damage, brace or secure the opening, and put the repair or replacement quote in writing, which is what your insurer will ask for. The claim is yours; we provide the documentation. Storm damage repair starts at $150 for assessment and bracing, and a full replacement is quoted separately.',
      },
    ],
  },
  {
    slug: 'palm-beach-gardens',
    name: 'Palm Beach Gardens',
    region: 'palm-beach-treasure-coast',
    county: 'Palm Beach County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Palm Beach Gardens, FL | From $150',
    metaDescription:
      'Garage door repair in Palm Beach Gardens, FL. Springs from $150, opener installation from $275, new doors from $950. Three car garages, same-day service.',
    answer:
      'Garage door repair in Palm Beach Gardens starts at $150 per spring, $275 for a new opener installed and $950 for a new wind-rated door. Three car garages with a double and a single are the norm in the golf communities here, and we quote each door separately.',
    intro: [
      'Palm Beach Gardens is golf community housing at scale. PGA National, BallenIsles, Mirasol and the newer neighborhoods off Donald Ross Road were built from the 1980s onward with three car garages, a 16 foot double next to a single, and doors chosen to match the house rather than to be cheap. Carriage style steel, insulated sections and custom colors are common, and the HOA in nearly every one of them has to approve a replacement.',
      'Two doors on one house mean two spring sets and two openers reaching the end of life within a year or two of each other, and a golf cart that uses the single door several times a day wears that one out first. We see snapped torsion springs on the busy single, worn gear kits on 1990s chain drives, and opener logic boards that did not survive twenty summers at 100°F. Palm Beach Gardens is outside the HVHZ, but it is still a high wind zone, so a replacement door needs a Florida Product Approval number and a permit from the city building department, pulled by a licensed contractor.',
    ],
    localNotes: [
      'Three car garages with a double and a single, each on its own spring set and opener',
      'Carriage style, insulated and custom color doors that the HOA has to approve',
      'The golf cart door cycles several times a day and fails first',
      'High value doors where a matching section at $250 to $800 beats replacing the whole door',
    ],
    nearby: ['north-palm-beach', 'jupiter', 'west-palm-beach', 'wellington'],
    faq: [
      {
        question: 'Can you replace one damaged section on a carriage style door?',
        answer:
          'Usually, if the manufacturer still makes that profile. Panel replacement runs $250 to $800 per section, and on a high value door it is far cheaper than a new door. On a door older than ten to fifteen years the profile may be discontinued, and we tell you that before you decide.',
      },
      {
        question: 'Should I replace both doors at the same time?',
        answer:
          'Only if both need it. Doors on the same house are usually the same age, so if one spring set has failed the other is close, and replacing both on the same visit saves a second trip. A full door replacement is quoted per door, and one permit can cover both doors when they are replaced together.',
      },
    ],
  },
  {
    slug: 'jupiter',
    name: 'Jupiter',
    region: 'palm-beach-treasure-coast',
    county: 'Palm Beach County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Jupiter, FL | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Jupiter, FL. Springs from $150, hurricane-rated doors from $1,800. Salt corrosion in Abacoa and on the water handled, same-day service.',
    answer:
      'Garage door repair in Jupiter starts at $150 per spring, $95 for cable repair and $1,800 for a hurricane-rated door installed. Salt air off the inlet and the Intracoastal is the main reason Jupiter doors fail early, and rusted cables and bottom brackets are what we replace here most.',
    intro: [
      'Jupiter is coastal on three sides, with the ocean, the inlet and the Loxahatchee River all within a few miles of most houses, and the hardware shows it. Cables, bottom brackets, hinges and the torsion tube corrode faster here than in the western suburbs. Abacoa, built from the late 1990s on, holds a large share of the town, many of its houses with garages on rear alleys, and its first generation of doors and openers is now 20 to 25 years old.',
      'Beyond Abacoa the stock runs from 1970s and 1980s waterfront ranches with single doors to gated golf communities and the large lots of Jupiter Farms, where detached garages and workshops take wider doors. We see cables fraying at the drum, bottom brackets rotted where they meet the slab, and springs that were never touched because nothing ever failed loudly. Jupiter is outside the HVHZ, but the design wind pressure on the coast here is among the highest in Palm Beach County, so a replacement door needs a Florida Product Approval number and a permit from the town, pulled by a licensed contractor.',
    ],
    localNotes: [
      'Salt air from the ocean, the inlet and the river rusts cables and bottom brackets within a few years',
      'Abacoa 1990s and 2000s houses, many with alley loaded garages and original openers',
      'Jupiter Farms large lots with detached garages and wider doors',
      'Coastal addresses carry higher design wind pressure, so the rated door depends on the street',
    ],
    nearby: ['north-palm-beach', 'palm-beach-gardens', 'west-palm-beach', 'port-st-lucie'],
    faq: [
      {
        question: 'Why do my bottom brackets keep rusting?',
        answer:
          'They sit an inch off a slab that gets wet every afternoon for half the year, in salt air. The bracket is what the cable pulls on, so a rotted one is a safety problem, not a cosmetic one. We replace them with new galvanized brackets as part of cable repair, $95 to $300, and check the torsion tube and drums at the same time.',
      },
      {
        question: 'Is a wind-rated door enough in Jupiter, or do I need impact-rated?',
        answer:
          'Code requires a door rated for the wind pressure at your address, and near the coast that pressure is high. A wind-rated door meets code from $950 installed. An impact-rated door from $1,800 is also tested against flying debris, is what many owners on the water choose when they replace, and may qualify for a wind mitigation credit. Ask your insurer for the credit schedule.',
      },
    ],
  },
  {
    slug: 'wellington',
    name: 'Wellington',
    region: 'palm-beach-treasure-coast',
    county: 'Palm Beach County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Wellington, FL | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Wellington, FL. Springs from $150, opener installation from $275. Equestrian lots and oversized doors covered, same-day service.',
    answer:
      'Garage door repair in Wellington starts at $150 per spring, $275 for a new opener installed and $950 for a new wind-rated door. Wellington has more oversized doors, detached garages and barns than anywhere else in Palm Beach County, and we size springs by the door weight in front of us rather than by the catalog.',
    intro: [
      'Wellington grew in the 1980s and 1990s wave, from the equestrian lots of Palm Beach Polo and Saddle Trail to family subdivisions along Forest Hill Boulevard and the gated 2000s streets of Olympia. The village has appearance rules and so does nearly every HOA inside it, and on the equestrian side the garage is often one of several outbuildings, with a barn, a trailer bay or a detached workshop in the mix.',
      'Big lots mean big doors. Doors 12 feet and taller for trailers, 18 foot wide doubles and doors on detached barns take heavier springs and longer torsion tubes than a standard 16 by 7, and a spring sized for the catalog rather than the actual door weight is the most common thing we correct on a Wellington door someone else has worked on. On the subdivision side it is age: springs and openers from the 1990s and 2000s failing street by street. Wellington is outside the HVHZ, but it is still a high wind zone, so a replacement door needs a Florida Product Approval number and a permit from the village building department, pulled by a licensed contractor.',
    ],
    localNotes: [
      'Oversized doors on equestrian lots: taller for trailers, wider for barns and workshops',
      'Palm Beach Polo, Olympia and the other HOAs regulate door style and color',
      '1980s to 2000s subdivision doubles reaching their second and third spring sets',
      'Detached garages and barns with no opener at all, or one added years later',
    ],
    nearby: ['west-palm-beach', 'lake-worth-beach', 'boynton-beach', 'palm-beach-gardens', 'delray-beach'],
    faq: [
      {
        question: 'Do you work on barn and trailer bay doors, not just the house?',
        answer:
          'Yes, as long as it is a sectional overhead door. Oversized doors are quoted on the measured weight and dimensions. Springs for a door that size sit at the upper end of the $150 to $350 range and most take a pair, which adds $120 to $250 for the second spring. We measure and quote in writing before ordering anything.',
      },
      {
        question: 'Can you come during show season, and what about when we leave?',
        answer:
          'Same day, seven days a week, through the season. If you are a seasonal household, the best time to have the door checked is before you leave in April or May. A tune-up at $85 to $160 catches a tired spring before it snaps on an empty house, and it is also the right time to test the manual release and the battery backup ahead of hurricane season.',
      },
    ],
  },
  {
    slug: 'lake-worth-beach',
    name: 'Lake Worth Beach',
    region: 'palm-beach-treasure-coast',
    county: 'Palm Beach County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Lake Worth Beach, FL | From $150',
    metaDescription:
      'Garage door repair in Lake Worth Beach and suburban Lake Worth, FL. Springs from $150, cables from $95, openers installed from $275, commercial doors quoted. Same-day service.',
    answer:
      'Garage door repair in Lake Worth Beach starts at $150 per spring, $95 for cable repair and $275 for a new opener installed, with same-day service seven days a week. We cover the city itself and the unincorporated Lake Worth addresses west of it, and we install commercial doors, including the Amarr 2400 and 2500 series, for the warehouse and service bays in the area. A replacement door needs a Florida Product Approval and a permit from the right building department, which is the city inside the limits and Palm Beach County outside them.',
    intro: [
      'Lake Worth Beach is two places that share a name. The city, renamed from Lake Worth in 2019, is some of the oldest housing in Palm Beach County: 1920s to 1950s bungalows and cottages in College Park, Mango Groves, Tropical Ridge and the streets between Dixie Highway and the Lake Worth Lagoon, where a garage, if there is one, is often small, detached and set at the back of a narrow lot. West of the city, "Lake Worth" on an envelope usually means unincorporated Palm Beach County, mile after mile of 1970s to 1990s subdivisions along Lake Worth Road, Lantana Road and Jog Road with attached two car garages and 16 foot doubles.',
      'The failures follow the housing. In the old city it is age and salt: single doors that have been cycling for decades, cables and bottom brackets rusting within a couple of miles of the lagoon, and openers that were added long after the garage was built, sometimes in less headroom than a standard rail needs. Out west it is volume: thousands of doors that went in within a few years of each other now on their second or third set of springs, and 1990s chain drive openers stripping their gears in summer heat. The area also has a working side, with light industrial and warehouse buildings along the rail corridor and around Boutwell Road, and those bays are where commercial doors like the Amarr 2400 and 2500 series come in.',
    ],
    localNotes: [
      '1920s to 1950s bungalows in the old city with small, often detached garages and low headroom',
      '1970s to 1990s subdivisions in unincorporated Lake Worth with doubles aging in bulk',
      'Salt air near the Lake Worth Lagoon rusts cables and bottom brackets first',
      'City permit inside the limits, Palm Beach County permit for unincorporated Lake Worth addresses',
      'Commercial bays in the light industrial areas, where we quote Amarr 2400 and 2500 series doors',
    ],
    nearby: ['west-palm-beach', 'boynton-beach', 'wellington', 'delray-beach'],
    faq: [
      {
        question: 'My address says Lake Worth but I am not in the city. Do you still cover it?',
        answer:
          'Yes. Most "Lake Worth" addresses west of the city limits are unincorporated Palm Beach County, and we cover all of it. The only practical difference is the permit for a replacement door, which goes through the county rather than the city. Repairs such as springs, cables and openers need no permit either way.',
      },
      {
        question: 'Do you install commercial doors in Lake Worth Beach?',
        answer:
          'Yes. We supply and install commercial steel sectional doors, including the Amarr 2400 series for openings up to 30 ft 2 in wide and the more economical 2500 series for openings up to 20 ft 2 in wide. Every commercial door is quoted after we measure, with the wind load option specified at order and the Florida Product Approval on the permit.',
      },
      {
        question: 'Our old detached garage has very little space above the door. Can it take an opener?',
        answer:
          'Usually. A standard rail opener needs about 12 inches of headroom above the door, which many of the older garages in the city do not have. A low headroom track kit or a wall mounted jackshaft opener, $450 to $800 installed, solves it in most cases. We measure first and tell you which one fits.',
      },
    ],
  },
  {
    slug: 'north-palm-beach',
    name: 'North Palm Beach',
    region: 'palm-beach-treasure-coast',
    county: 'Palm Beach County',
    tier: 3,
    metaTitle: 'Garage Door Repair in North Palm Beach, FL | From $150',
    metaDescription:
      'Garage door repair in North Palm Beach, FL. Springs from $150, rusted cables from $95, impact-rated doors from $1,800, commercial doors quoted. Same-day service near the water.',
    answer:
      'Garage door repair in North Palm Beach starts at $150 per spring, $95 for cable repair and $1,800 for an impact-rated door installed. Almost every house in the village is within a short distance of the Intracoastal or a canal, so salt corrosion on cables, bottom brackets and springs is the main reason doors fail early here. A replacement door needs a Florida Product Approval for the design pressure at the address and a permit from the village building department.',
    intro: [
      'North Palm Beach is a small village between Palm Beach Gardens and Juno Beach, built largely from the late 1950s through the 1970s along the Intracoastal and a network of canals, with Lost Tree Village and newer rebuilds on the larger waterfront lots. The original houses are single story concrete block with attached one and two car garages, and a lot of them have since been remodeled or rebuilt, which means a mix of 60 year old openings and brand new impact doors on the same street.',
      'Being on the water is the whole story for the doors. Salt air turns cables orange and stiff, rots bottom brackets where they meet a damp slab and pits spring coils until they break early, and a door with a corroded cable usually has a damaged drum too. Coastal addresses also carry some of the highest design wind pressure in the county, so the rating a replacement door needs depends on the street. The village also has marinas, boat storage and commercial buildings along U.S. 1 and the Intracoastal, and those wider openings are where commercial doors such as the Amarr 2400 and 2500 series are specified.',
    ],
    localNotes: [
      '1950s to 1970s concrete block houses on canals and the Intracoastal, many remodeled or rebuilt',
      'Salt corrosion on cables, drums, bottom brackets and springs is the leading failure',
      'High coastal design wind pressure, so the rated door depends on the address',
      'Village permit for a replacement door; repairs need none',
      'Marina, boat storage and commercial openings along U.S. 1 where we quote Amarr commercial doors',
    ],
    nearby: ['palm-beach-gardens', 'jupiter', 'west-palm-beach', 'wellington'],
    faq: [
      {
        question: 'Everything on my garage door is rusting. What should be replaced first?',
        answer:
          'The cables and bottom brackets, because they carry the load and fail without warning. Cable repair is $95 to $300, and on a corroded door we price cable and drum together at $225 to $400 so there is no second visit. We fit galvanized or stainless hardware on the coast as standard and check the springs for pitting at the same time.',
      },
      {
        question: 'Should I choose an impact-rated door on the water in North Palm Beach?',
        answer:
          'Code requires a door rated for the wind pressure at your address, and on the water that pressure is high. A wind-rated door meets code from $950 installed. An impact-rated door, from $1,800, is also tested against flying debris, and it is what most owners on the Intracoastal and the canals choose when they replace. Ask your insurer whether it earns a wind mitigation credit.',
      },
      {
        question: 'Do you install commercial and boat storage doors in North Palm Beach?',
        answer:
          'Yes, as long as it is a sectional overhead door. We supply and install commercial doors including the Amarr 2400 series for openings up to 30 ft 2 in wide and the 2500 series up to 20 ft 2 in wide, quoted after we measure, with the wind load option and the Florida Product Approval on the permit.',
      },
    ],
  },
  {
    slug: 'port-st-lucie',
    name: 'Port St. Lucie',
    region: 'palm-beach-treasure-coast',
    county: 'St. Lucie County',
    tier: 2,
    metaTitle: 'Port St. Lucie Garage Door Repair | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Port St. Lucie, FL. Springs from $150, opener installation from $275. Tradition and St. Lucie West covered, same-day service, written estimate.',
    answer:
      'Garage door repair in Port St. Lucie starts at $150 per spring, $95 for opener repair and $275 for a new opener installed. A very large share of Port St. Lucie doors went in between 2000 and 2008, and their springs and openers are failing across whole neighborhoods at once.',
    intro: [
      'Port St. Lucie was platted in the 1960s and built out mostly after 2000. St. Lucie West filled in through the 1990s and 2000s, Tradition opened west of I-95 in the mid 2000s and is still adding streets, and the older General Development lots east of the interstate were built one at a time from the 1980s on. The result is a city where a very large share of garage doors are builder grade steel doubles installed between 2000 and 2008, with the chain drive opener the builder chose.',
      'Those doors are hitting their failures now. A door that cycled twice a day since 2005 is past 15,000 cycles, well beyond the 10,000 cycle spring it was sold with, and a door used lightly is only now reaching its first failure. Snapped torsion springs, stripped plastic gears in the original opener and logic boards cooked by twenty summers at 100°F are the three calls we take most. Port St. Lucie is outside the HVHZ, but St. Lucie County is still a high wind zone, so a replacement door needs a Florida Product Approval number and a permit from the city building department, pulled by a licensed contractor.',
    ],
    localNotes: [
      'Builder grade steel doubles and chain drive openers installed 2000 to 2008, failing in bulk',
      'Tradition and the newer western streets are HOA governed with door style and color rules',
      'Older east side lots with single doors and openers added years after the house',
      'Less salt than the beach, but the same heat and daily afternoon water at the bottom seal',
    ],
    nearby: ['jupiter', 'palm-beach-gardens', 'west-palm-beach'],
    faq: [
      {
        question: 'The opener that came with the house in 2006 is grinding. Repair or replace?',
        answer:
          'If it is a stripped plastic gear, a gear kit is within the $95 to $300 opener repair range and the unit runs for years more. If the logic board is gone on a twenty year old unit, a new chain or belt drive from $275 installed is the better spend, and battery backup adds $60 to $150, which matters after a storm. We tell you which one applies before we start.',
      },
      {
        question: 'Is Port St. Lucie far for you?',
        answer:
          'No. It is inside our Treasure Coast coverage and we dispatch same day, seven days a week. The emergency premium of $150 to $300 for after-hours calls is stated before we leave. Give us the street, since Tradition and the older east side are a long drive apart, and we confirm the arrival window.',
      },
    ],
  },
];
