/**
 * Tampa Bay: the eight service-area pages for Hillsborough, Pinellas,
 * Pasco, Hernando and Polk counties, per research/fl-garage/BRIEF.md
 * section 6.
 *
 * Tampa Bay is outside the High Velocity Hurricane Zone. A replacement
 * door here needs a Florida Product Approval for the design wind pressure
 * at the address and a building permit pulled by a licensed contractor,
 * not a Miami-Dade NOA. Every entry says so in its own words because the
 * question comes up on every replacement quote.
 *
 * Every entry states something true about the housing era, the garages,
 * or the failures we see there. Where a detail is not certain, the entry
 * says something true about the county or the era instead.
 */

import type { City } from '../types';

export const tampaBayCities: City[] = [
  /* ---------------- Hillsborough County ---------------- */
  {
    slug: 'tampa',
    name: 'Tampa',
    region: 'tampa-bay',
    county: 'Hillsborough County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Tampa, FL | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Tampa, FL. Springs from $150, opener installation from $275, storm damage repair from $150. Same-day service across Hillsborough County.',
    answer:
      'Garage door repair in Tampa starts at $150 per spring, $95 for cable repair and $275 for a new opener installed. We work the whole city, from detached alley garages in Hyde Park and Seminole Heights to 1970s Carrollwood doubles and the 1990s and newer doors of Westchase and Tampa Palms, with same-day service seven days a week.',
    intro: [
      'Tampa garages tell you when the street was built. South Tampa and Seminole Heights bungalows from the 1920s to the 1950s have a detached garage on the alley, often with an 8 foot door, low headroom and a wood frame that has taken afternoon rain for decades. Carrollwood was built out in the 1970s and 1980s with attached doubles, Westchase and Tampa Palms followed in the 1990s, and New Tampa keeps adding three car garages with a double and a single. A large share of the older doors are on springs that passed 10,000 cycles years ago.',
      'The last two seasons changed the work here. Helene\'s surge in September 2024 put saltwater into garages on the low streets of South Tampa and Davis Islands, and Milton\'s wind two weeks later bent panels and pulled doors off track across the county. Tampa sits outside the High Velocity Hurricane Zone, so a replacement door does not need a Miami-Dade NOA, but it still needs a Florida Product Approval for the wind pressure at your address and a permit, pulled by a licensed contractor through the City of Tampa or Hillsborough County depending on where you are.',
    ],
    localNotes: [
      'Detached alley garages in Hyde Park, Seminole Heights and Palma Ceia with low headroom and narrow single doors',
      'Carrollwood and Westchase doubles from the 1970s to 1990s reaching end of life on original springs and openers',
      'Saltwater from Helene in 2024 corroded bottom brackets, cables and opener boards in garages near the bay',
      'Outside the HVHZ: a replacement needs a Florida Product Approval door and a permit, not a Miami-Dade NOA',
    ],
    nearby: ['brandon', 'riverview', 'wesley-chapel', 'clearwater'],
    faq: [
      {
        question: 'My garage in Seminole Heights is detached and on the alley. Can you still put an opener in?',
        answer:
          'Usually yes. Most of these garages have 7 to 8 feet of ceiling, which is enough for a low headroom rail kit, and where there is no ceiling room at all a wall mounted jackshaft opener drives the torsion bar directly. Power is the other question: if the garage has no circuit, an electrician runs one first. Opener installation starts at $275, and a jackshaft unit runs $450 to $800.',
      },
      {
        question: 'My garage flooded during Helene. The door still works. Do I need to do anything?',
        answer:
          'Yes. Saltwater sits in the bottom brackets, the cable drums, the roller bearings and the opener if it went under, and the corrosion shows up over the following months as frayed cables and a door that binds. A tune-up at $85 to $160 covers the inspection and lubrication, and we tell you what needs replacing now and what can wait. The photos and the written quote are yours for the insurance claim.',
      },
      {
        question: 'Do I need a permit to replace my garage door in Tampa?',
        answer:
          'Yes. Any garage door replacement in Florida needs a building permit with the wind rating recorded on it, and the door itself needs a Florida Product Approval number for the design pressure at your site. We include the permit in the written quote for a new door, which starts at $950 for a wind-rated steel single. Replacing only the opener does not normally need a permit.',
      },
    ],
  },
  {
    slug: 'brandon',
    name: 'Brandon',
    region: 'tampa-bay',
    county: 'Hillsborough County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Brandon, FL | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Brandon, FL. Springs from $150, opener repair from $95, new openers from $275. Same-day service in Brandon, Valrico and FishHawk.',
    answer:
      'Garage door repair in Brandon starts at $150 per spring and $275 for a new opener installed. Brandon, Valrico and FishHawk were built out from the 1980s to the 2000s with a 16 by 7 double door on nearly every house, and the calls we get are the calls a whole subdivision makes at once: springs past their cycle count and builder grade openers with worn gears.',
    intro: [
      'Brandon is unincorporated Hillsborough County, and it grew in waves. The subdivisions closest to State Road 60 and Bloomingdale date from the 1980s, Valrico filled in through the 1990s, and FishHawk Ranch to the south added three car garages through the 2000s. Almost every one of these houses has an attached garage with a single 16 foot by 7 foot steel double door, and the doors were installed by the builder in batches, so they fail in batches too.',
      'A torsion spring is rated for about 10,000 cycles, roughly 7 to 10 years the way a Florida family uses the garage as the front door, so a 1990s house is on its second or third set by now and a 2005 house is due for its first. The other steady call is the opener: chain drive units from the 2000s with a plastic drive gear that has spent twenty summers in a garage over 100°F. Brandon sits outside the High Velocity Hurricane Zone, so a replacement door needs a Florida Product Approval and a Hillsborough County permit, which a licensed contractor pulls.',
    ],
    localNotes: [
      '1980s to 2000s subdivisions with 16 by 7 steel doubles installed in batches by the builder',
      'Springs on their second or third replacement in the older streets, first replacement due in FishHawk and newer Valrico',
      'Builder grade chain drive openers with stripped gears after twenty summers of garage heat',
      'HOA rules on door style and color in FishHawk and the newer gated sections',
    ],
    nearby: ['tampa', 'riverview', 'lakeland', 'wesley-chapel'],
    faq: [
      {
        question: 'One spring broke on my double door. Do I replace both?',
        answer:
          'On a double door with two torsion springs we recommend it. Both springs went in the same day and have the same cycle count, so the second usually goes within months. One spring is $150 to $350 installed, and doing both together adds $120 to $250, which is less than a second call-out.',
      },
      {
        question: 'Does a house in Brandon need a hurricane rated door?',
        answer:
          'It needs a wind-rated door. Brandon is outside the HVHZ, so a replacement must carry a Florida Product Approval for the wind pressure at your address, and that is what the permit records. An impact-rated door, the one most people mean by hurricane door, is your choice rather than a requirement here and starts around $1,800. A rated door may qualify for a credit on your wind mitigation form; ask your insurer for the schedule.',
      },
      {
        question: 'The opener runs but the door only moves a few inches. Is that the opener?',
        answer:
          'Usually not. Pull the red release cord and lift the door by hand. If it is heavy or will not stay up, a spring has broken and the opener was never meant to lift that weight. Keep running it and you strip the gear. Spring replacement is $150 to $350 per spring, and if the gear is already gone an opener repair runs $95 to $300.',
      },
    ],
  },
  {
    slug: 'riverview',
    name: 'Riverview',
    region: 'tampa-bay',
    county: 'Hillsborough County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Riverview, FL | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Riverview, FL. Springs from $150, cable repair from $95, opener installation from $275. Same-day service in Summerfield and along US 301.',
    answer:
      'Garage door repair in Riverview starts at $150 per spring, $95 for cable repair and $275 for a new opener installed. Riverview is the south of the river version of Wesley Chapel: 2000s to 2020s subdivisions with three car garages, HOA rules and builder grade openers, all reaching their first round of spring and opener failures together.',
    intro: [
      'Riverview is unincorporated Hillsborough County south of the Alafia River, and almost all of it went up after 2000 along US 301 and Big Bend Road. Summerfield and the subdivisions off Boyette Road were the first wave, and the communities toward Balm and along the Big Bend corridor kept building through the 2010s and are still going. The houses are frame with stucco or block, one story or two, with a 16 by 7 double or a double plus a single, and the door and opener were chosen by the builder on price.',
      'Those doors are now 10 to 20 years old, which puts them right at the 10,000 cycle life of a torsion spring, and a whole street can go through spring failures inside a year or two. The openers show the heat first, a chain drive whose gear has stripped or whose board has cooked in a garage over 100°F, and then the outage after a storm shows which ones had no battery backup. Riverview is outside the High Velocity Hurricane Zone, so a replacement door needs a Florida Product Approval and a Hillsborough County permit, pulled by a licensed contractor, and most HOAs here want the style approved before the permit is pulled.',
    ],
    localNotes: [
      'Subdivisions from the 2000s to the 2020s along US 301 and Big Bend Road, with three car garages common',
      'Torsion springs reaching their 10,000 cycle life across whole streets at once',
      'Builder grade chain drive openers with heat damaged gears and no battery backup',
      'HOA approval on style and color before a replacement door is permitted',
    ],
    nearby: ['brandon', 'tampa', 'lakeland'],
    faq: [
      {
        question: 'Every house on my street was built in 2012. Why are all the doors failing now?',
        answer:
          'Because they all have the same spring, installed the same month, with the same cycle rating. A 10,000 cycle torsion spring lasts 7 to 10 years in a house where the garage is the main entrance, so a 2012 street is due. Spring replacement is $150 to $350 per spring; on a double door with two springs, doing both adds $120 to $250 and saves the second visit.',
      },
      {
        question: 'The power went out after the storm and I could not get the car out. What do I need?',
        answer:
          'Two things. First, know the red release cord: pull it and the door lifts by hand, unless a spring is broken. Second, a battery backup, which adds $60 to $150 to a new opener and runs the door through an outage of a day or more. A smart opener with battery backup installed starts at $350.',
      },
      {
        question: 'Should I have the door checked before hurricane season?',
        answer:
          'Yes, in April or May. A tune-up is $85 to $160 and covers spring balance, cable condition, roller and hinge lubrication, the opener safety reverse and the manual release. It is the visit that finds the rusted cable before the storm does.',
      },
    ],
  },

  /* ---------------- Pinellas County ---------------- */
  {
    slug: 'clearwater',
    name: 'Clearwater',
    region: 'tampa-bay',
    county: 'Pinellas County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Clearwater, FL | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Clearwater, FL. Springs from $150, storm damage repair from $150, wind-rated doors from $950. Same-day service, beach to Countryside.',
    answer:
      'Garage door repair in Clearwater starts at $150 per spring, $95 for cable repair and $150 for a storm damage assessment and repair. Clearwater doors live in salt air, and the garages nearest the water took Helene\'s surge in September 2024, so the most common jobs here are corroded cables and bottom brackets, and doors and openers that stood in saltwater.',
    intro: [
      'Clearwater runs from the barrier islands at Clearwater Beach, Island Estates and Sand Key, across the 1950s to 1970s neighborhoods around downtown and Belleair Road, to Countryside, which was built out in the 1970s and 1980s with attached doubles. Salt air reaches all of it, fastest on the beach side, and the visible sign is rust on the lift cables where they wrap the drum. A rusted cable is the failure we see most in Pinellas, and it is the one worth catching early, because a cable that lets go drops one side of the door.',
      'Helene\'s surge on 26 September 2024 flooded ground floors and garages along the beaches and the bayside canals, and Milton crossed the county with wind on 9 October. A door that stood in saltwater looks fine for a few months and then binds, because the bottom brackets, roller bearings and torsion hardware corrode from the inside. Clearwater is outside the High Velocity Hurricane Zone, so a replacement needs a Florida Product Approval door and a City of Clearwater permit, pulled by a licensed contractor. Wind pressures on the barrier islands are the highest in the region, and the door rating has to match them.',
    ],
    localNotes: [
      'Salt air on both sides of the peninsula: rusted cables and bottom brackets are the usual first failure',
      'Barrier island and bayside garages that took Helene\'s surge in 2024, with corrosion showing up months later',
      'Countryside doubles from the 1970s and 1980s on original or second springs',
      'Highest wind pressures in the region on the beach, so the door rating matters on replacement',
    ],
    nearby: ['st-petersburg', 'tampa', 'brandon'],
    faq: [
      {
        question: 'The door was in saltwater during Helene and now it is hard to lift. What is happening?',
        answer:
          'Corrosion. The bottom brackets, the rollers and often the cable drums took saltwater, and as they seize the door gets heavier than the springs were set for. We assess the door, replace the hardware that is gone and rebalance the springs; storm damage repair runs $150 to $1,500 depending on what took the water, and we document it with photos and a written quote for your claim. An opener that went under is replaced, not repaired.',
      },
      {
        question: 'How often should a door near the beach be serviced?',
        answer:
          'Once a year, in April or May before the season. A tune-up is $85 to $160 and covers lubrication, cable inspection, spring balance and the opener safety reverse. On the barrier islands we would also rinse the hardware with fresh water a few times a year, because salt sitting on a cable is what starts the rust.',
      },
      {
        question: 'Can a rated door lower my insurance in Clearwater?',
        answer:
          'It may. Florida\'s wind mitigation inspection, form OIR-B1-1802, records whether the garage door has rated protection, and a rated door can contribute to a premium credit. We do not promise a dollar figure; ask your insurer for the credit schedule. A new wind-rated door starts at $950 installed and an impact-rated door starts around $1,800, both with the permit in the quote.',
      },
    ],
  },
  {
    slug: 'st-petersburg',
    name: 'St. Petersburg',
    region: 'tampa-bay',
    county: 'Pinellas County',
    tier: 1,
    metaTitle: 'Garage Door Repair in St. Petersburg, FL | From $150',
    metaDescription:
      'Garage door repair in St. Petersburg, FL. Springs from $150, openers from $275, storm damage repair from $150. Alley garages and low headroom handled, same day.',
    answer:
      'Garage door repair in St. Petersburg starts at $150 per spring and $275 for a new opener installed. Most of the city was built between the 1920s and the 1960s, so we spend our days in detached alley garages in the Old Northeast and Kenwood with 7 foot ceilings, and in the 1950s and 1960s ranches of Shore Acres that flooded in Helene\'s surge in 2024.',
    intro: [
      'St. Petersburg is the oldest housing we cover in Tampa Bay. The Old Northeast, Kenwood and the neighborhoods off Central Avenue were platted with alleys, and the garage is a detached block or frame building at the back of the lot with a single door of 8 or 9 feet and very little room above it. The 1950s and 1960s added ranch houses with attached single garages, often 7 feet of headroom or less, across the north and east of the city. Headroom decides what fits: a low headroom track kit, or a wall mounted jackshaft opener where there is no ceiling room at all.',
      'Helene\'s surge on 26 September 2024 flooded Shore Acres, Snell Isle and the streets along Tampa Bay, and Milton brought wind on 9 October. Shore Acres floods on high tides in an ordinary year, so its garages were already the most corroded in the city. St. Petersburg is outside the High Velocity Hurricane Zone; a replacement door needs a Florida Product Approval rating and a City of St. Petersburg permit, pulled by a licensed contractor, and on a 1920s detached garage that often means rebuilding the jamb before a rated door can be anchored to it.',
    ],
    localNotes: [
      'Detached alley garages in the Old Northeast and Kenwood with narrow doors and 7 foot ceilings',
      'Low headroom track and jackshaft openers are the usual fit in 1920s to 1960s garages',
      'Shore Acres and the bayside streets took saltwater in Helene, on top of routine tidal flooding',
      'Old wood jambs that need rebuilding before a rated door can be anchored',
    ],
    nearby: ['clearwater', 'tampa', 'brandon', 'riverview'],
    faq: [
      {
        question: 'My 1920s garage has a 7 foot ceiling. What opener fits?',
        answer:
          'A low headroom track kit needs about 4 to 5 inches above the door instead of the usual 12, and a standard rail opener then fits. Where there is no room above the door at all, a wall mounted jackshaft opener mounts beside it and drives the torsion bar directly. We measure the clearance before quoting. Opener installation starts at $275, and a jackshaft unit runs $450 to $800.',
      },
      {
        question: 'Should I replace a flooded garage door or repair it?',
        answer:
          'It depends on what took the water. A steel door that stood in a foot of saltwater usually cleans up; the hardware at the bottom, the brackets, rollers and cables, does not and gets replaced. An opener whose motor or board went under is replaced, $275 to $600 installed. A new wind-rated door starts at $950, and we quote it in writing so you can set it against the repair figure and against your claim.',
      },
      {
        question: 'Do you work on wood doors on old detached garages?',
        answer:
          'Yes. A wood door is heavier than a steel door of the same size and needs a heavier spring, and a door whose bottom rail has taken rain for years is heavier still, so we weigh the balance rather than assume it. A single rotted section can sometimes be replaced at $250 to $800; a door rotted along the bottom or eaten by termites is replaced with a rated door from $950, with the permit in the quote.',
      },
    ],
  },

  /* ---------------- Pasco County ---------------- */
  {
    slug: 'wesley-chapel',
    name: 'Wesley Chapel',
    region: 'tampa-bay',
    county: 'Pasco County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Wesley Chapel, FL | From $150',
    metaDescription:
      'Garage door repair in Wesley Chapel, FL. Springs from $150, opener repair from $95, new openers from $275. Same-day service in Meadow Pointe and Seven Oaks.',
    answer:
      'Garage door repair in Wesley Chapel starts at $150 per spring, $95 for opener repair and $275 for a new opener installed. Wesley Chapel was built from the late 1990s to the 2020s, and the doors installed in Meadow Pointe, Seven Oaks and the first phases of the newer communities are reaching their first spring and opener failures at the same time.',
    intro: [
      'Wesley Chapel is unincorporated Pasco County, and most of it did not exist before the Meadow Pointe phases went in around State Road 56 in the late 1990s and 2000s. Seven Oaks and the communities north of State Road 54 followed, most with three car garages, a 16 by 7 double and a single, HOA rules on door style and color, and a builder grade chain drive opener. The construction is frame with stucco more often than block, which does not change the door but does change how a replacement jamb is anchored.',
      'A torsion spring is rated for about 10,000 cycles, which is 7 to 10 years in a Florida house where the garage is the front door, so a 2015 house is due now and a 2008 house is often on its second set. The opener fails from heat: a Wesley Chapel garage sits over 100°F on a summer afternoon, and the plastic gear and the logic board in a builder unit do not survive many summers of it. Wesley Chapel is outside the High Velocity Hurricane Zone, so a replacement door needs a Florida Product Approval for the wind pressure at your address and a Pasco County permit, pulled by a licensed contractor, and your HOA will want the style approved before it goes in.',
    ],
    localNotes: [
      'Master planned communities from the late 1990s to the 2020s with three car garages and HOA rules on door style',
      'First round of spring failures arriving on 2010s builds, second round in Meadow Pointe and Seven Oaks',
      'Builder grade chain drive openers with heat damaged gears and logic boards',
      'Frame and stucco construction, which changes how a replacement jamb is anchored',
    ],
    nearby: ['tampa', 'spring-hill', 'brandon'],
    faq: [
      {
        question: 'The house is nine years old and the door stopped halfway. Is that the spring?',
        answer:
          'Probably. Pull the red release cord and lift the door by hand: if it is heavy or drops, a spring has gone, and nine years is right on schedule for a 10,000 cycle spring. Stop running the opener, because lifting a dead door strips its gear. Spring replacement is $150 to $350 per spring, and doing both on a double door adds $120 to $250.',
      },
      {
        question: 'Does my HOA get a say in a replacement door?',
        answer:
          'In most Wesley Chapel communities, yes. The HOA approves style, color and window layout, and the county permit records the wind rating. We handle the permit and give you the door specification sheet for the HOA application. A new wind-rated steel door starts at $950 installed with the permit in the quote.',
      },
      {
        question: 'The builder opener still works but it is loud and the remote range is poor. Repair or replace?',
        answer:
          'A gear kit or a new logic board falls in the $95 to $300 repair range and is worth it on a unit under ten years old. On an older unit, or one with no battery backup, a belt drive at $350 to $600 plus $60 to $150 for battery backup is usually the better money, because the battery keeps the door working through the outage after a storm.',
      },
    ],
  },

  /* ---------------- Hernando County ---------------- */
  {
    slug: 'spring-hill',
    name: 'Spring Hill',
    region: 'tampa-bay',
    county: 'Hernando County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Spring Hill, FL | From $150',
    metaDescription:
      'Garage door repair in Spring Hill, FL. Springs from $150, opener repair from $95, new doors from $950. Same-day service across Hernando County.',
    answer:
      'Garage door repair in Spring Hill starts at $150 per spring, $95 for opener repair and $950 for a new wind-rated door installed. Spring Hill was platted as a retirement and family community in 1967 and built out through the 1990s, so most doors here are 1970s to 1990s steel singles and doubles on their second or third spring, in sandy soil and well inland from the salt.',
    intro: [
      'Spring Hill is unincorporated Hernando County, laid out by the Deltona Corporation in 1967 on sandy ridge land and built out lot by lot through the 1970s, 1980s and 1990s. The houses are one story block or frame ranches, many bought for retirement, with a single or double steel door that is often the builder original. Sandy soil drains fast, so the bottom seal sees less standing water than the coast, and Spring Hill sits far enough from the Gulf that salt corrosion is slower than in Pinellas. Age does the work instead.',
      'A 1980s door has been through three or four sets of springs if it was maintained and one if it was not, and a door that has been running on a broken spring with the opener doing the lifting has a stripped gear as well. Openers from before 1993 have no photo eye sensors, and we replace those rather than repair them. Spring Hill is outside the High Velocity Hurricane Zone, so a replacement door needs a Florida Product Approval for the wind pressure at your address and a Hernando County permit, pulled by a licensed contractor.',
    ],
    localNotes: [
      '1970s to 1990s one story ranches with builder original steel doors, singles and doubles',
      'Age rather than salt: springs and openers wearing out on cycle count, with slower corrosion than the coast',
      'Openers from before 1993 with no photo eye sensors, replaced rather than repaired',
      'Sandy soil and fast drainage, so less standing water at the bottom seal than on the coast',
    ],
    nearby: ['wesley-chapel', 'tampa', 'clearwater'],
    faq: [
      {
        question: 'My opener is from 1991 and has no sensors at the floor. Can you fix it?',
        answer:
          'We replace it. Photo eye sensors that reverse the door on an obstruction have been required on new openers since 1993, and an opener without them will not stop for a person, a pet or a car bumper. A new chain drive is $275 to $450 installed, a belt drive $350 to $600, and battery backup adds $60 to $150.',
      },
      {
        question: 'Is the door on a 1985 Spring Hill house worth repairing?',
        answer:
          'Usually. Springs, cables, rollers and hinges are all replaceable, and a steel door from that era with sound panels can run for years on new hardware. It stops being worth it when the bottom panels have rusted through, when the profile is no longer made for a panel replacement at $250 to $800, or when you want a rated door for insurance. A new wind-rated door starts at $950 with the permit in the quote.',
      },
      {
        question: 'How fast can you get to Spring Hill?',
        answer:
          'Same day most days, seven days a week. Hernando County is the north edge of our Tampa Bay map, so we give you an arrival window when you call rather than a guess. After-hours and same-day emergency dispatch carries a call-out premium of $150 to $300, stated before we roll.',
      },
    ],
  },

  /* ---------------- Polk County ---------------- */
  {
    slug: 'lakeland',
    name: 'Lakeland',
    region: 'tampa-bay',
    county: 'Polk County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Lakeland, FL | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Lakeland, FL. Springs from $150, openers from $275, new doors from $950. Same-day service from the lakes to the I-4 subdivisions.',
    answer:
      'Garage door repair in Lakeland starts at $150 per spring, $275 for a new opener installed and $950 for a new wind-rated door. Lakeland sits on I-4 halfway between Tampa and Orlando, and its doors split the same way: 1920s bungalows with detached garages around Lake Morton and Lake Hollingsworth, 1970s to 1990s doubles in south Lakeland and Christina, and new subdivisions along I-4 on their first set of springs.',
    intro: [
      'Lakeland is the Polk County seat, and its oldest housing rings the lakes: Dixieland and the streets around Lake Morton and Lake Hollingsworth are 1910s to 1930s bungalows with detached garages behind the house, narrow doors and low ceilings. South Lakeland and Christina filled in from the 1970s to the 1990s with attached doubles, and the newest growth is along I-4 and the north side, where subdivisions built since 2010 have three car garages and builder grade openers. Lakeland is inland, so salt is not the problem; humidity, heat and cycle count are.',
      'The failures follow the eras. Old detached garages have wood doors rotted at the bottom rail, or one piece doors on extension springs with no safety cables. South Lakeland doubles are on their second or third set of springs, and openers from the 1990s have cooked their boards in garages over 100°F. The I-4 subdivisions are reaching the 10,000 cycle mark now. Lakeland is outside the High Velocity Hurricane Zone; a replacement door needs a Florida Product Approval for the wind pressure at your address and a City of Lakeland or Polk County permit, pulled by a licensed contractor.',
    ],
    localNotes: [
      'Dixieland and the lake neighborhoods: 1910s to 1930s bungalows with detached garages, narrow doors and low ceilings',
      'South Lakeland and Christina doubles from the 1970s to 1990s on second or third springs',
      'I-4 corridor subdivisions built since 2010 reaching their first spring and opener failures',
      'Inland, so rot on wood doors and cooked opener boards are the usual finds rather than salt corrosion',
    ],
    nearby: ['brandon', 'riverview', 'tampa'],
    faq: [
      {
        question: 'Do you actually cover Lakeland, or only Tampa?',
        answer:
          'Lakeland and Polk County are on our map, and Lakeland is on the way between the two metros we serve, so same-day service is available most days. We give you an arrival window when you call. After-hours or same-day emergency dispatch carries a call-out premium of $150 to $300, stated before we dispatch.',
      },
      {
        question: 'My old garage has a door on extension springs with no safety cables. Is that a problem?',
        answer:
          'Yes. An extension spring that breaks without a safety cable through it becomes a projectile, and these doors were often set up decades ago without one. We add safety cables or convert the door to a torsion spring, which balances better and is safer when it fails. Spring replacement is $150 to $350 per spring.',
      },
      {
        question: 'I have a wood door on a 1920s garage near Lake Morton. Repair or replace?',
        answer:
          'If the rot is confined to the bottom rail and the frame is sound, a repair and a heavier spring set for the true weight of the door is the honest answer. If the door is soft along the bottom or termites have been at it, a new rated door from $950 with the permit in the quote is the better money, and on a garage that old we check the jamb before we quote, because it may need rebuilding to anchor the door.',
      },
    ],
  },
];
