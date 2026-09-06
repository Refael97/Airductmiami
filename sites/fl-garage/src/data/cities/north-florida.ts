/**
 * North Florida service-area pages, per research/fl-garage/BRIEF.md section 6.
 *
 * Duval, St. Johns, Clay, Flagler and Alachua counties. None of these are in
 * the High Velocity Hurricane Zone, but every replacement door here still
 * needs a Florida Product Approval and a permit. The wear pattern is cycle
 * count and heat inland, salt on top of that within a few miles of the ocean
 * and the Intracoastal. Matthew (October 2016) and Irma (September 2017) are
 * the storms people here remember.
 */

import type { City } from '../types';

export const northFloridaCities: City[] = [
  {
    slug: 'jacksonville',
    name: 'Jacksonville',
    region: 'north-florida',
    county: 'Duval County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Jacksonville, FL | From $150',
    metaDescription:
      'Garage door repair in Jacksonville, FL. Springs from $150, openers installed from $275. Same-day service from Mandarin to Oceanway, written estimate first.',
    answer:
      'Garage door repair in Jacksonville starts at $150 per spring, $95 for cable repair and $275 for a new opener installed. We cover all of Duval County, from Mandarin and the Southside to the Beaches, Arlington, the Westside and Oceanway, with same-day service seven days a week and a written estimate before any work.',
    intro: [
      'Jacksonville has been one city with Duval County since 1968 and covers about 875 square miles, the largest land area of any city in the contiguous United States. The drive from Oceanway on the Northside to Mandarin on the south end is close to 30 miles, and the doors change along the way. Riverside, Avondale, San Marco and Ortega have 1910s to 1950s houses with narrow single doors, some on detached garages behind the house. Arlington, the Westside and the Northside are mostly 1950s to 1970s ranches with a single door and low headroom. Mandarin and the Southside are the 1970s to 2000s suburban wave, two car garages with a 16 foot double door, many of them in HOA communities.',
      'Salt air is the dividing line. Within a few miles of the ocean at the Beaches and Mayport, cables rust, bottom brackets pit and springs lose years of life. Inland, in Mandarin, Baymeadows or Argyle, the door lasts longer but the garage still reaches 100°F on a July afternoon, which is what kills opener logic boards and the plastic gears in older units. Hurricane Irma in September 2017 pushed the St. Johns River to record levels and put water into garages in Riverside and San Marco, and Matthew the year before hit the Beaches with surge and wind. Jacksonville is outside the High Velocity Hurricane Zone, but a replacement door still needs Florida Product Approval and a permit, and we pull that permit as a licensed contractor.',
    ],
    localNotes: [
      'Older single doors with low headroom in Riverside, Avondale, San Marco, Arlington and the Westside',
      '1970s to 2000s doubles in Mandarin, Baymeadows and the Southside, many now on their original springs',
      'Salt corrosion on cables, bottom brackets and springs at the Beaches and Mayport',
      'Water in the garage from summer storms and from the river in Irma, which rusts the bottom section and the bottom brackets first',
    ],
    nearby: ['orange-park', 'st-augustine', 'palm-coast', 'gainesville'],
    faq: [
      {
        question: 'Do you cover the Beaches and the Northside as well as the Southside?',
        answer:
          'Yes. Jacksonville Beach, Atlantic Beach, Neptune Beach, Mayport and Oceanway are all inside our Duval County coverage, along with Mandarin, Arlington, Riverside and the Westside. Because the city is so large we give you an arrival window for your address rather than a citywide promise, and same-day service is available seven days a week.',
      },
      {
        question: 'Does a new garage door in Jacksonville need a hurricane rating?',
        answer:
          'It needs to meet the design wind pressure for your address under the Florida Building Code, documented with a Florida Product Approval number on the permit. Duval County is not in the HVHZ, so a Miami-Dade NOA is not required, but a plain unrated door cannot be installed legally. A standard wind-rated steel door runs $950 to $4,200 installed, and an impact-rated door starts around $1,800.',
      },
      {
        question: 'My garage flooded during a storm. What should I check on the door?',
        answer:
          'The bottom section, the bottom brackets, the bottom rollers and the cable ends at the drums, in that order. Water sits in the bottom brackets and on the cable ends, and rust shows there first. If the door feels heavier than it was, or the opener strains to lift it, have it looked at before a cable lets go. Storm damage assessment starts at $150.',
      },
    ],
  },
  {
    slug: 'st-augustine',
    name: 'St. Augustine',
    region: 'north-florida',
    county: 'St. Johns County',
    tier: 2,
    metaTitle: 'Garage Door Repair in St. Augustine, FL | From $150',
    metaDescription:
      'Garage door repair in St. Augustine, FL. Springs from $150, hurricane-rated doors from $1,800. Historic core, Nocatee and World Golf Village, same day.',
    answer:
      'Garage door repair in St. Augustine starts at $150 per spring, $95 for cable repair and $275 for a new opener installed. We cover the city, Anastasia Island, Vilano Beach, St. Augustine Beach and the St. Johns County subdivisions west of I-95, including World Golf Village and Nocatee, with same-day service seven days a week.',
    intro: [
      'St. Augustine has two different garage door markets. The historic core and the older streets around it have narrow lots and houses from the 1880s to the 1950s, many with no garage at all or a small detached one on a lane, and the doors there are singles with low headroom and awkward hardware. West of I-95 is the other St. Augustine: World Golf Village from 1998 onward, then the subdivisions that have made St. Johns County one of the fastest growing counties in Florida, and Nocatee to the north, where thousands of houses went up after 2006 with three car garages and builder grade doors and openers. Those doors are now reaching their first 10,000 cycle spring failure.',
      'The coast is close everywhere here. Davis Shores, Anastasia Island, Vilano Beach and St. Augustine Beach get salt on every surface, and a cable or bottom bracket that would last 15 years inland can show rust in five. Hurricane Matthew in October 2016 put storm surge into downtown and Davis Shores, and Irma followed in September 2017. After both we saw doors pushed in by wind pressure and bottom sections rusted through months later where salt water had sat. St. Johns County is outside the High Velocity Hurricane Zone, but a replacement door still needs Florida Product Approval and a building permit pulled by a licensed contractor, and on the barrier island the design pressure is higher than it is at World Golf Village.',
    ],
    localNotes: [
      'Old single doors and detached garages in the historic core and the Lincolnville and North City streets around it',
      'Builder grade doors and openers from 2006 onward in Nocatee and the subdivisions west of I-95, reaching first spring failure',
      'Salt corrosion on Anastasia Island, Vilano Beach and at St. Augustine Beach',
      'Higher design wind pressure on the barrier island than inland, which changes the door specification',
    ],
    nearby: ['jacksonville', 'palm-coast', 'orange-park'],
    faq: [
      {
        question: 'Do you cover Nocatee and World Golf Village?',
        answer:
          'Yes. Nocatee, World Golf Village and the other St. Johns County communities west of I-95 are inside our service area, along with the city itself and the beaches. Most of the calls from those subdivisions are the first spring or opener failure on a door installed when the house was built.',
      },
      {
        question: 'Can I put any door on a house on Anastasia Island?',
        answer:
          'No. The door has to be rated for the design wind pressure at your address, which is higher on the barrier island than inland, and the rating goes on the permit. We quote a wind-rated steel door from $950 and an impact-rated door from $1,800, both with the Florida Product Approval number and the permit included in the written quote.',
      },
      {
        question: 'Does the historic district add any restriction?',
        answer:
          'If your house is inside one of the city historic preservation districts, an exterior change visible from the street can need city review before the permit is issued. We tell you before you order whether your address is affected and what the review needs. A repair that keeps the existing door does not go through it.',
      },
    ],
  },
  {
    slug: 'orange-park',
    name: 'Orange Park',
    region: 'north-florida',
    county: 'Clay County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Orange Park, FL | From $150',
    metaDescription:
      'Garage door repair in Orange Park and Fleming Island, FL. Springs from $150, openers installed from $275. Same-day service across Clay County.',
    answer:
      'Garage door repair in Orange Park starts at $150 per spring, $95 for opener repair and $275 for a new opener installed. We cover the town and the Clay County suburbs around it, including Fleming Island, Eagle Harbor, Lakeside, Bellair and Oakleaf, with same-day service seven days a week.',
    intro: [
      'Orange Park is a small town on the St. Johns River, but the name covers most of northern Clay County, and that is where the garages are. The neighborhoods off Kingsley Avenue and Blanding Boulevard went up in the 1960s to 1980s, mostly single story houses with a two car garage and a 16 foot door. Fleming Island and Eagle Harbor followed in the 1990s and 2000s, and Oakleaf Plantation after that, so within a few miles you go from doors that are 40 years old to doors that are on their second spring.',
      'NAS Jacksonville sits just across the county line on US 17, and a large share of the households here are Navy families who move every two or three years. That shapes the work: a door that has to be right before a house goes on the market, a seller who wants the opener replaced rather than repaired, a buyer whose inspector flagged a frayed cable. The area is far enough from the ocean that salt is not the main problem. Cycle count is, along with garages that hit 100°F in summer and cook the opener board, and water at the bottom seal from the afternoon storms. Clay County is outside the High Velocity Hurricane Zone, but a replacement door still needs Florida Product Approval and a permit, which we pull as a licensed contractor.',
    ],
    localNotes: [
      '1960s to 1980s doubles off Kingsley Avenue and Blanding Boulevard, many on original hardware',
      '1990s and 2000s doors in Fleming Island, Eagle Harbor and Oakleaf, hitting first spring and opener failures',
      'Navy families from NAS Jacksonville, so pre-sale repairs and inspection items are a big part of the work',
      'Less salt than the coast, more heat and humidity, so opener boards and gears fail before cables do',
    ],
    nearby: ['jacksonville', 'st-augustine', 'gainesville'],
    faq: [
      {
        question: 'Do you cover Fleming Island and Oakleaf?',
        answer:
          'Yes. Fleming Island, Eagle Harbor, Lakeside, Bellair, Oakleaf Plantation and Middleburg are all inside our Clay County coverage, and so is the town of Orange Park itself. Give us the address and we confirm an arrival window for it.',
      },
      {
        question: 'My home inspector flagged the garage door before closing. Can you fix it quickly?',
        answer:
          'Usually the same day. The common inspection items are a frayed cable, a door out of balance, safety sensors that do not reverse the door, and a missing or torn bottom seal. Cable repair starts at $95, a tension adjustment runs $85 to $140, and a tune-up that covers balance, sensors and lubrication runs $85 to $160. You get the invoice with the one year parts and labor warranty for the file.',
      },
      {
        question: 'Is it worth repairing an opener from the 1990s?',
        answer:
          'If it is a gear or a sensor, yes, opener repair starts at $95. If the logic board has failed on a unit that old, the part is often unavailable and a new opener from $275 installed is the better spend. It also brings the door up to current safety reversing standards, which an inspector will check.',
      },
    ],
  },
  {
    slug: 'palm-coast',
    name: 'Palm Coast',
    region: 'north-florida',
    county: 'Flagler County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Palm Coast, FL | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Palm Coast, FL. Springs from $150, cable repair from $95, openers from $275. Canal sections to Grand Haven, same-day service.',
    answer:
      'Garage door repair in Palm Coast starts at $150 per spring, $95 for cable repair and $275 for a new opener installed. We cover every lettered section of the city, Grand Haven, the Hammock and Flagler Beach, with same-day service seven days a week and a written estimate before any work.',
    intro: [
      'Palm Coast was laid out by ITT starting in 1970 as a planned community of lettered sections on quarter acre lots, and it did not become a city until 1999. The earliest houses, from the 1970s and 1980s, sit in the sections along the saltwater canals off the Intracoastal, where the salt gets to every piece of hardware on the door. Then came the growth: the population more than doubled between 2000 and 2010 as the remaining lots filled in with concrete block houses on slabs, two car garages with a 16 foot door, and builder grade openers. Grand Haven added a gated golf community on the Intracoastal in the same years.',
      'A large share of the people who bought here are retired, and a garage door that will not open is not a minor problem when it is the door you use every day. Hurricane Matthew in October 2016 hit Flagler County directly, took out a section of A1A in Flagler Beach and left the city without power for days. Irma followed in September 2017. Since then the most common storm call we get is a door pushed off track by wind pressure, or a bottom section that rusted out after salt water sat on it. Flagler County is outside the High Velocity Hurricane Zone, but any replacement door still needs Florida Product Approval for the design pressure at the site and a permit pulled by a licensed contractor.',
    ],
    localNotes: [
      '1970s and 1980s doors on the saltwater canal sections, with heavy corrosion on cables, springs and bottom brackets',
      '2000s builder grade doors and openers across the inland sections, reaching first spring and opener failure together',
      'Retirees who depend on the door daily and who ask about battery backup after Matthew and Irma',
      'Hurricane-rated replacement doors in demand on the Hammock and near the Intracoastal',
    ],
    nearby: ['st-augustine', 'jacksonville', 'orange-park'],
    faq: [
      {
        question: 'Do you cover the Hammock and Flagler Beach as well as Palm Coast?',
        answer:
          'Yes. The lettered sections of Palm Coast, Grand Haven, the Hammock, Flagler Beach and Bunnell are all in our Flagler County coverage. Response inside the city is usually the same day.',
      },
      {
        question: 'Why does the door on my canal house need parts so often?',
        answer:
          'Salt. The canals connect to the Intracoastal and the air over them carries salt onto the springs, cables, hinges and the torsion tube. Cables fray and bottom brackets pit years earlier than they do a few miles inland. Galvanized or stainless hardware and a coated spring last longer, and a tune-up in March to May, $85 to $160, catches the rust before it becomes a broken cable at $95 to $300.',
      },
      {
        question: 'The power went out after the storm and I could not get the car out. What are the options?',
        answer:
          'Every opener has a manual release, the red cord on the trolley, which lets you lift the door by hand as long as the springs are balanced. For the longer outages after storms, a battery backup adds $60 to $150 to a new opener and gives you roughly 20 cycles over 24 hours with the power out, enough to get the cars in and out. A smart opener with battery backup installed starts at $350.',
      },
    ],
  },
  {
    slug: 'gainesville',
    name: 'Gainesville',
    region: 'north-florida',
    county: 'Alachua County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Gainesville, FL | From $150',
    metaDescription:
      'Garage door repair in Gainesville, FL. Springs from $150, openers installed from $275. Haile Plantation to the Duckpond, same-day service across Alachua County.',
    answer:
      'Garage door repair in Gainesville starts at $150 per spring, $95 for opener repair and $275 for a new opener installed. We cover the city and Alachua County, from Haile Plantation and Northwest Gainesville to the Duckpond and the older streets east of downtown, with same-day service seven days a week.',
    intro: [
      'Gainesville is a university city more than 50 miles from either coast, so the wear on a garage door here is humidity and heat, not salt. The University of Florida brings more than 50,000 students, and a lot of the housing around campus is 1950s to 1970s ranches, many built with a carport rather than a garage, and some with the carport enclosed later and a garage door hung on a frame that was never designed for it. The Duckpond, northeast of downtown, has houses from the 1880s to the 1920s with small detached garages on the alley behind the house. Northwest Gainesville is the 1960s to 1980s suburb, and Haile Plantation to the southwest is the planned community built from the 1980s through the 2000s with two and three car garages.',
      'The trees are the other local fact. Gainesville sits under a canopy of live oaks and laurel oaks, and in the summer storms and in Hurricane Irma in September 2017 limbs came down on garage roofs and doors across the city, with power out for days in parts of Alachua County. Shade keeps garages a little cooler than in a treeless subdivision, but the humidity is high year round and the door hardware rusts slowly and steadily. The common calls are a spring that reached its cycle count, an opener from the 1990s with a stripped gear, and a door out of balance because the bottom section has been taking water at the seal every afternoon since June. Alachua County is outside the High Velocity Hurricane Zone, but a replacement door still needs Florida Product Approval and a permit pulled by a licensed contractor.',
    ],
    localNotes: [
      'Carports enclosed into garages on 1950s to 1970s houses near campus, with doors hung on undersized framing',
      'Detached alley garages in the Duckpond with old single doors and low headroom',
      '1980s to 2000s doubles in Haile Plantation and Northwest Gainesville, many on original springs',
      'Oak limbs on doors after summer storms, and humidity rust rather than salt rust on the hardware',
    ],
    nearby: ['jacksonville', 'orange-park', 'st-augustine'],
    faq: [
      {
        question: 'Do you cover the towns around Gainesville?',
        answer:
          'Yes. Alachua, Newberry, High Springs, Archer, Micanopy and Hawthorne are inside our Alachua County coverage, along with every part of the city. Same-day service is available seven days a week.',
      },
      {
        question: 'A tree limb came down on my garage door. Is it repairable?',
        answer:
          'Often. If the damage is a dented top section and the track is straight, panel replacement runs $250 to $800 per section when the profile is still made. If the track is bent and the door is off its rollers, off-track repair starts at $140. If the limb crushed two or more sections, a new door from $950 installed is usually the better spend. Storm damage assessment starts at $150, and we photograph everything for your insurance claim.',
      },
      {
        question: 'My converted carport door never worked right. Can it be fixed?',
        answer:
          'Usually, but the door is rarely the whole problem. A carport enclosure often has a header that was not sized for a door and a frame that is out of square, so the door binds and the springs never balance. We check the opening first and tell you whether a tune-up, $85 to $160, will do it or whether the framing needs a carpenter before a new door goes in.',
      },
    ],
  },
];
