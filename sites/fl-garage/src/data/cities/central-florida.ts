/**
 * Central Florida service-area pages, per research/fl-garage/BRIEF.md
 * section 6. Orange, Osceola, Seminole, Lake and Brevard counties.
 *
 * Central Florida is inland except for Brevard, so the wear story here is
 * heat, cycle count and humidity rather than salt. Every entry states
 * something true about the housing era, the garages, or the failures we
 * actually see in that place.
 */

import type { City } from '../types';

export const centralFloridaCities: City[] = [
  /* ---------------- Orange County ---------------- */
  {
    slug: 'orlando',
    name: 'Orlando',
    region: 'central-florida',
    county: 'Orange County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Orlando, FL | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Orlando, FL. Springs from $150, opener repair from $95, wind-rated doors from $950. Same-day service metro-wide, written quote first.',
    answer:
      'Garage door repair in Orlando starts at $150 per spring, $95 for cable or opener repair and $275 for a new opener installed. We cover the whole metro, from College Park bungalows to Lake Nona new builds, same day seven days a week, with a written quote before any work starts.',
    intro: [
      'Orlando\'s garages tell you the decade the house was built. College Park and the older streets toward Winter Park have 1920s to 1950s bungalows with narrow single doors and low headroom. Conway and the neighborhoods off Curry Ford Road are 1950s to 1970s ranches on slab. Dr. Phillips, MetroWest and Hunters Creek were built in the 1980s and 1990s with 16 foot double doors that are now on their second or third spring. Baldwin Park, Lake Nona and Horizon West are 2000s to 2020s builds with builder grade chain drive openers, and those are the units we are now replacing as the plastic drive gears strip.',
      'Orlando is inland, so salt is not the enemy it is on the coasts. Heat is. A closed garage here runs past 100°F from June to September, which cooks opener logic boards and dries the lubricant on hinges and rollers, and the afternoon storms put water against the bottom seal most days for half the year. Parts of Orlando flooded during Ian in September 2022, and doors that sat in water lost bottom brackets and cables to rust within months. Any full door replacement needs a Florida Product Approval door and a permit, which we pull as a licensed contractor and include in the quote.',
    ],
    localNotes: [
      '1920s to 1950s bungalows in College Park with narrow singles and low headroom',
      '1980s to 1990s double doors in Dr. Phillips, MetroWest and Hunters Creek on their second or third spring',
      'Builder grade chain drive openers in Lake Nona and Horizon West stripping plastic gears',
      'Garages past 100°F in summer, the main cause of opener logic board failure here',
    ],
    nearby: ['kissimmee', 'winter-garden', 'apopka', 'oviedo'],
    faq: [
      {
        question: 'Do I need a permit to replace my garage door in Orlando?',
        answer:
          'Yes. Replacing a garage door anywhere in Florida requires a building permit, and the door has to carry a Florida Product Approval for the wind pressure at your address. We pull the permit as a licensed contractor and include it in the quote, which starts at $950 for a wind-rated steel single. Replacing only the opener does not normally need a permit.',
      },
      {
        question: 'My HOA in Lake Nona or Horizon West has rules about the door. Can you work within them?',
        answer:
          'Yes. Most HOAs in the newer parts of Orlando regulate door style, color and window pattern, and some require an approval before a replacement goes in. Send us the guideline or the approved list and we quote a door that matches it. A repair on the existing door, springs, cables or the opener, needs no HOA approval.',
      },
      {
        question: 'How fast can you get to Orlando?',
        answer:
          'Same day in most cases, seven days a week. Orlando is the center of our Central Florida map, so response times from Conway to MetroWest are among the shortest we run. After-hours dispatch carries a $150 to $300 premium that we state before anyone drives.',
      },
    ],
  },
  {
    slug: 'apopka',
    name: 'Apopka',
    region: 'central-florida',
    county: 'Orange County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Apopka, FL | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Apopka, FL. Springs from $150, opener repair from $95, new doors from $950. Same-day service from Rock Springs Ridge to the rural edges.',
    answer:
      'Garage door repair in Apopka starts at $150 per spring, $95 for opener repair and $275 for a new opener installed. We cover the new subdivisions off SR 429 and Kelly Park Road, the older streets near downtown and the nursery and rural edges the same day, with a written quote before any work.',
    intro: [
      'Apopka is one of the fastest growing cities in Orange County, and most of its doors are new. Rock Springs Ridge, the subdivisions off Kelly Park Road and Ponkan Road and the builds along the Wekiva Parkway are 2000s to 2020s houses with 16 foot double doors, three car garages on the larger lots and builder grade chain drive openers. Errol Estate and the streets around downtown are 1970s to 1990s and older. Beyond the subdivisions Apopka is still the foliage capital, with nurseries and acreage lots where the garage is a workshop or a barn and the door is wider and taller than standard.',
      'New doors fail in predictable ways. The first torsion spring on a 2010 build is reaching its 10,000 cycles about now, and the builder grade opener next to it is stripping its plastic gear in a garage that holds 100°F all summer. On the rural lots the problems are dust, a door that was never balanced for its size and rollers that have run dry. Apopka is inland, so cables rust from humidity and the daily storm rather than salt, more slowly than on the coast but they still rust. A full door replacement needs a Florida Product Approval door and a permit, which we include in the quote.',
    ],
    localNotes: [
      '2000s to 2020s double doors in Rock Springs Ridge and along the Wekiva Parkway reaching first spring failure',
      'Nursery and acreage lots with oversized doors on workshops and barns',
      'Builder grade chain drive openers stripping plastic gears in summer heat',
      '1970s to 1990s doors in Errol Estate and near downtown on original hardware',
    ],
    nearby: ['orlando', 'winter-garden', 'sanford', 'clermont'],
    faq: [
      {
        question: 'Can you replace a spring on a 10 or 12 foot tall door on my workshop?',
        answer:
          'Yes. Oversized doors take heavier or paired springs sized to the door\'s weight, and we weigh the door rather than guess. The price starts at the same $150 per spring; the spring itself costs more on a tall or wide door, and we give you the exact number before we start.',
      },
      {
        question: 'Do you come out to the rural side of Apopka, toward Zellwood and Plymouth?',
        answer:
          'Yes. Zellwood, Plymouth and the acreage north and west of the city are on the Apopka run. Give us the street address and we confirm the arrival window, same day in most cases.',
      },
    ],
  },
  {
    slug: 'winter-garden',
    name: 'Winter Garden',
    region: 'central-florida',
    county: 'Orange County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Winter Garden, FL | From $150',
    metaDescription:
      'Garage door repair in Winter Garden, FL. Springs from $150, opener repair from $95, new openers from $275. Horizon West builder grade doors, same-day service.',
    answer:
      'Garage door repair in Winter Garden starts at $150 per spring, $95 for opener repair and $275 for a new opener installed. Horizon West, Independence, Summerlake and Hamlin were built at scale from the mid 2000s onward with builder grade doors and openers, and those are the doors and openers we are now repairing.',
    intro: [
      'Winter Garden has an old downtown on the West Orange Trail with 1920s to 1950s houses and single door garages, and then it has Horizon West, one of the largest master planned areas in the country and where most of the city\'s doors actually are. Independence, Summerlake, Hamlin and the villages around them went up from the mid 2000s through the 2020s, thousands of houses at a time, with the same 16 foot steel double door and the same builder grade chain drive opener on street after street. When one of those parts fails, its neighbors are not far behind.',
      'The first Horizon West springs are reaching 10,000 cycles now. The openers are going first: the plastic drive gear in a builder grade chain unit does not tolerate a garage that holds 100°F from June to September, and we replace the gear kit at $95 to $300 or the whole unit at $275 to $600. Every Horizon West community has an HOA with rules on door style, color and windows, and a full door replacement needs a Florida Product Approval door and a permit on top of that approval. Winter Garden is inland, so rust arrives from humidity and the daily storm rather than salt, slower than on the coast.',
    ],
    localNotes: [
      'Horizon West, Independence, Summerlake and Hamlin built at scale with identical builder grade doors and openers',
      'First torsion springs on mid 2000s builds reaching their 10,000 cycle rating now',
      'HOA approval needed for door style, color and windows on nearly every replacement',
      '1920s to 1950s single doors downtown near the West Orange Trail',
    ],
    nearby: ['orlando', 'clermont', 'apopka', 'kissimmee'],
    faq: [
      {
        question: 'My HOA in Horizon West has rules about garage doors. What do I need before a replacement?',
        answer:
          'Most Horizon West HOAs require an architectural approval for a new door and specify the style, color and window pattern. Send us the guideline and we quote a door that meets it and matches the neighbors, then we pull the permit as a licensed contractor. Repairs to the existing door, springs, cables, rollers or the opener, need no approval.',
      },
      {
        question: 'The opener that came with our house is grinding and the door barely moves. Repair or replace?',
        answer:
          'If it is a builder grade chain drive and the gear has stripped, a gear kit at $95 to $300 usually fixes it. If the logic board has also gone from heat, or the unit is over 10 years old, a new belt drive at $350 to $600 with battery backup added at $60 to $150 is the better spend, and we tell you which before touching it.',
      },
    ],
  },

  /* ---------------- Osceola County ---------------- */
  {
    slug: 'kissimmee',
    name: 'Kissimmee',
    region: 'central-florida',
    county: 'Osceola County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Kissimmee, FL | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Kissimmee, FL. Springs from $150, opener repair from $95. Spanish-speaking technicians, vacation rental turnaround, same-day service.',
    answer:
      'Garage door repair in Kissimmee starts at $150 per spring, $95 for opener repair and $275 for a new opener installed. We serve Buenaventura Lakes, Poinciana and the vacation rental communities along US 192 the same day, in English or Spanish, with a written quote before any work.',
    intro: [
      'Kissimmee\'s housing is mostly 1980s to 2000s subdivisions, Buenaventura Lakes and the streets off Boggy Creek Road on the older end, Poinciana and the communities south of the city on the newer end, nearly all with a 16 foot double door on a two car garage. Kissimmee also has one of the largest Puerto Rican communities in the state, and a large share of our calls here come in Spanish. We take them in Spanish and we send a technician who speaks it.',
      'The other thing that sets Kissimmee apart is the vacation rental stock west of the city along US 192 and toward Four Corners. A rental home\'s door cycles with every guest turnover, every cleaner and every delivery, and a spring rated for 10,000 cycles that would last a family 7 to 10 years can be gone in 3 to 4. Owners and property managers call us because a stuck door means a guest who cannot park and a complaint the owner has to answer from another state. Heat is the other wear factor, with garages past 100°F from June to September cooking opener boards, and any full door replacement needs a Florida Product Approval door and a permit.',
    ],
    localNotes: [
      'Large Puerto Rican and Latin community, with Spanish-speaking technicians on request',
      'Vacation rental homes along US 192 with doors that cycle several times a day',
      '1980s to 2000s double doors in Buenaventura Lakes and Poinciana reaching second spring failure',
      'Property manager accounts with several homes serviced on one visit',
    ],
    nearby: ['orlando', 'winter-garden', 'clermont'],
    faq: [
      {
        question: 'Do you have a Spanish-speaking technician for Kissimmee?',
        answer:
          'Yes. Ask for Spanish when you call and we send a technician who speaks it. The quote, the invoice and the one year parts and labor warranty are written the same way in either language, and the prices are identical.',
      },
      {
        question: 'How fast can you turn around a vacation rental door between guests?',
        answer:
          'Same day in most cases, seven days a week, and we work with property managers to hit a checkout to check-in window. Springs, cables, sensors and opener parts are on the truck, so most rental calls are one visit. We can also put a home on an annual tune-up at $85 to $160, which for a door cycling this often is the cheapest call you will make.',
      },
      {
        question: 'My Poinciana home is on the Polk County side. Do you still come?',
        answer:
          'Yes. Poinciana sits across the Osceola and Polk line and we cover all of it from the Kissimmee side. Give us the street address and we confirm the arrival window.',
      },
    ],
  },

  /* ---------------- Seminole County ---------------- */
  {
    slug: 'oviedo',
    name: 'Oviedo',
    region: 'central-florida',
    county: 'Seminole County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Oviedo, FL | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Oviedo, FL. Springs from $150, opener repair from $95, new openers from $275. Same-day service in Alafaya, written quote first.',
    answer:
      'Garage door repair in Oviedo starts at $150 per spring, $95 for opener repair and $275 for a new opener installed. Most Oviedo doors are 16 foot doubles on 1990s and 2000s houses, which means two torsion springs, and we quote both springs together at $120 to $250 above the first because the second is rarely far behind.',
    intro: [
      'Oviedo grew from a small town into a family suburb in about fifteen years, and the housing shows it: Alafaya Woods, the subdivisions off Lockwood Boulevard and Mitchell Hammock Road, and the streets on the UCF side are mostly 1990s to 2000s frame and stucco houses with two car garages, a 16 foot by 7 foot double door and an HOA. Tuscawilla, next door in Winter Springs, is the same era on larger lots. Many of these doors are still on their original springs, and a spring installed in 1998 is well past its 10,000 cycle rating.',
      'The failures we see in Oviedo follow that age. Torsion springs snap, usually one first, and the door goes heavy or will not lift. Chain drive openers from the same build years strip their plastic gears in the summer heat, when a closed garage here holds 100°F or more. Rust shows up on cables and bottom brackets from humidity and the daily afternoon storm even this far inland. A full door replacement needs a Florida Product Approval door and a permit, and most Oviedo HOAs want to see the style and color before it goes in.',
    ],
    localNotes: [
      '1990s to 2000s frame and stucco houses with 16 foot double doors and HOAs',
      'Original torsion springs from the late 1990s reaching the end of their 10,000 cycle life',
      'Chain drive openers of the same era stripping plastic gears in summer heat',
      'Rust on cables and bottom brackets from humidity, even without salt',
    ],
    nearby: ['sanford', 'orlando', 'apopka'],
    faq: [
      {
        question: 'One spring broke on my double door. Should I replace both?',
        answer:
          'On a double door with two torsion springs, yes, almost always. Both springs have the same cycle count, so the second is usually within months of the first. Replacing both together adds $120 to $250 to the $150 to $350 first spring and saves a second call-out. If one was replaced recently we say so and leave it.',
      },
      {
        question: 'Do you cover Winter Springs and Chuluota as well as Oviedo?',
        answer:
          'Yes. Winter Springs, Tuscawilla and Chuluota are on the same run as Oviedo, and same-day service applies to all of them, seven days a week.',
      },
    ],
  },
  {
    slug: 'sanford',
    name: 'Sanford',
    region: 'central-florida',
    county: 'Seminole County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Sanford, FL | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Sanford, FL. Springs from $150, cable repair from $95, openers from $275. Historic district and subdivision doors, same-day service.',
    answer:
      'Garage door repair in Sanford starts at $150 per spring, $95 for cable repair and $275 for a new opener installed. We work the historic district\'s older detached garages and the 1990s to 2020s subdivisions along Rinehart Road and SR 417 the same day, with a written quote before any work.',
    intro: [
      'Sanford has two kinds of garages and not much in between. The historic district around downtown and Lake Monroe has 1900s to 1940s houses with detached garages that were added later, often with 8 or 9 foot single doors and headroom that rules out a standard rail opener. West and south of downtown, from Lake Mary Heights out to the subdivisions along Rinehart Road, SR 46 and SR 417, the houses are 1990s to 2020s with 16 foot double doors, HOAs and builder grade openers.',
      'The calls split the same way. Downtown it is old hardware: a cable that rusted through at the bottom bracket, a wood door that has taken water at the bottom edge for years and is heavier than its spring, an opener with nowhere to mount. In the subdivisions it is the standard Central Florida list: a torsion spring at the end of its 10,000 cycles, a chain drive opener that stripped its gear in a 100°F garage, sensors knocked out of line. Any full door replacement in Sanford needs a Florida Product Approval door and a permit, and on a historic district house the door style may also need city review, which we tell you before quoting.',
    ],
    localNotes: [
      '1900s to 1940s detached garages in the historic district with narrow singles and low headroom',
      '1990s to 2020s double doors in the subdivisions off Rinehart Road and SR 417',
      'Wood doors downtown heavier than their springs after years of water at the bottom edge',
      'Historic district exterior changes may need city review before a door replacement',
    ],
    nearby: ['oviedo', 'apopka', 'orlando'],
    faq: [
      {
        question: 'My detached garage downtown has no room above the door for an opener. What fits?',
        answer:
          'A wall-mounted jackshaft opener mounts beside the door and drives the torsion tube directly, so it needs almost no headroom. Installed it runs $450 to $800. Low-profile rail kits cover moderate clearance. We measure before quoting and tell you which one your garage actually takes.',
      },
      {
        question: 'Do you cover Lake Mary and Heathrow as well as Sanford?',
        answer:
          'Yes. Lake Mary, Heathrow and the Seminole County side of the I-4 corridor are on the same run as Sanford, same day seven days a week.',
      },
    ],
  },

  /* ---------------- Lake County ---------------- */
  {
    slug: 'clermont',
    name: 'Clermont',
    region: 'central-florida',
    county: 'Lake County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Clermont, FL | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Clermont, FL. Springs from $150, opener repair from $95, tune-ups from $85. Kings Ridge and the US 27 corridor, same-day service.',
    answer:
      'Garage door repair in Clermont starts at $150 per spring, $95 for opener repair and $85 for an annual tune-up. Clermont\'s doors are mostly 2000s to 2020s builds along US 27 and SR 50, and the first wave of them is reaching spring and opener failure now. Same-day service seven days a week, written quote first.',
    intro: [
      'Clermont sits on the hills of south Lake County, and nearly all of its housing went up after 2000. Kings Ridge is a 55 plus golf community where the golf cart lives in the garage and the door cycles several times a day. The family subdivisions along US 27 south of SR 50 and around Lake Minneola are 2000s to 2020s frame and stucco houses with 16 foot double doors, three car garages on many of them and an HOA on nearly all. Older Clermont, near downtown and the lake, has a smaller stock of 1950s to 1980s houses with single doors.',
      'Because so much was built in the same fifteen years, the failures arrive together. A torsion spring installed in 2006 has used its 10,000 cycles, and in Kings Ridge, where the door opens for every cart trip, it used them sooner. The builder grade openers of the same years are losing logic boards and plastic gears to garages that hold 100°F through the summer. Clermont is well inland, so rust comes from humidity and the afternoon storms rather than salt and arrives slower than on the coast. A full door replacement needs a Florida Product Approval door and a permit, and the HOA usually wants the style approved first.',
    ],
    localNotes: [
      '55 plus golf cart communities like Kings Ridge where doors cycle several times a day',
      '2000s to 2020s double doors along US 27 reaching first spring failure together',
      'HOA rules on door style and color in nearly every subdivision',
      'Builder grade openers losing logic boards and gears in summer heat',
    ],
    nearby: ['winter-garden', 'apopka', 'kissimmee', 'orlando'],
    faq: [
      {
        question: 'Our door in Kings Ridge opens six times a day for the golf cart. How often does it need a spring?',
        answer:
          'At six cycles a day a 10,000 cycle spring lasts about 4 to 5 years, not the 7 to 10 a typical family door gets. When we replace it we can fit a higher cycle spring, quoted in writing next to the standard one, and an annual tune-up at $85 to $160 catches the cables, rollers and opener before they follow.',
      },
      {
        question: 'Do you cover Minneola, Groveland and Four Corners?',
        answer:
          'Yes. Minneola, Groveland and the Four Corners area where Lake, Orange, Osceola and Polk meet are all on the Clermont run, same day seven days a week.',
      },
    ],
  },

  /* ---------------- Brevard County ---------------- */
  {
    slug: 'melbourne',
    name: 'Melbourne',
    region: 'central-florida',
    county: 'Brevard County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Melbourne, FL | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Melbourne, FL. Springs from $150, hurricane-rated doors from $1,800. Salt air corrosion on the Space Coast, same-day service.',
    answer:
      'Garage door repair in Melbourne starts at $150 per spring, $95 for cable repair and $1,800 for a hurricane-rated door installed. Melbourne is coastal, so springs, cables and bottom brackets rust faster here than anywhere else in Central Florida, and rust on a cable is the most common warning we see before a failure.',
    intro: [
      'Melbourne\'s housing came with the space program. Eau Gallie, the streets between US 1 and the Indian River and the neighborhoods off Babcock Street and Wickham Road are 1960s to 1980s concrete block houses with single and double doors, many on original tracks and some on their third set of springs. Suntree, planned in the 1970s and built out through the 1990s, and Viera, built from the 1990s to today, have 16 foot doubles and three car garages with HOAs and, in Viera, builder grade openers now reaching their first failures.',
      'Salt is the difference between Melbourne and the rest of Central Florida. The Indian River Lagoon and the Atlantic put salt air over the whole city, and on the beachside and east of US 1 it eats springs, cables, hinges, bottom brackets and torsion tubes within a few years. A rusted cable that lets go drops one side of the door and bends the track, which turns a $95 repair into a $140 to $600 off-track job. Brevard County is outside the High Velocity Hurricane Zone but the design wind pressure here is high, so a replacement door needs a Florida Product Approval for the pressure at your address and a permit. A rated door may also qualify for a wind mitigation credit on your insurance; ask your insurer for the schedule.',
    ],
    localNotes: [
      'Salt air corrosion on springs, cables and bottom brackets, worst beachside and east of US 1',
      '1960s to 1980s concrete block houses in Eau Gallie and off Babcock Street on aging tracks and hardware',
      'Suntree and Viera doubles and three car garages with HOA rules and builder grade openers',
      'High design wind pressure, so replacement doors need a Florida Product Approval for the address',
    ],
    nearby: ['orlando', 'oviedo', 'kissimmee'],
    faq: [
      {
        question: 'How often should a door near the beach be serviced?',
        answer:
          'Once a year at minimum, and April or May is the right time, before the season starts on 1 June. A tune-up at $85 to $160 covers lubrication, spring balance, cable inspection and the opener, and on a beachside door it is where we catch the rusted cable before it drops the door.',
      },
      {
        question: 'Do you cover Palm Bay, Satellite Beach and Indialantic?',
        answer:
          'Yes. Palm Bay, West Melbourne, Satellite Beach, Indialantic and Melbourne Beach are all on the Melbourne run, same day seven days a week. The beachside towns get the same prices; there is no coastal surcharge.',
      },
      {
        question: 'Will a hurricane-rated door lower my insurance?',
        answer:
          'It may. Florida\'s wind mitigation inspection records whether the garage door has rated protection, and a rated door can contribute to a premium credit. The amount depends on your insurer and the rest of the house, so ask them for the credit schedule. We do not promise a dollar figure, and we give you the door\'s approval documents for the inspection.',
      },
    ],
  },
];
