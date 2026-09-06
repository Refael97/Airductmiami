/**
 * The seven regions we cover, per research/fl-garage/BRIEF.md section 6.
 *
 * Ordering is by lead potential, which in this vertical means garage
 * density and job value. Miami-Dade and Broward are the High Velocity
 * Hurricane Zone (hvhz: true), where a replacement door needs a Miami-Dade
 * Notice of Acceptance. Everywhere else a door needs a Florida Product
 * Approval. Prices are the published list in BRIEF.md section 4 and
 * nothing else.
 */

import type { Region, FAQ } from './types';

export const regions: Region[] = [
  {
    slug: 'miami-dade-county',
    name: 'Miami-Dade County',
    inPhrase: 'in Miami-Dade County',
    county: 'Miami-Dade County',
    hvhz: true,
    metaTitle: 'Garage Door Repair in Miami-Dade County | Published Prices',
    metaDescription:
      'Same-day garage door repair in Miami, Hialeah, Kendall and Homestead. Springs from $150, NOA rated hurricane doors from $1,800, price in writing first.',
    answer:
      'Garage door repair in Miami-Dade County covers spring replacement from $150 per spring, cable repair from $95, opener repair from $95, off-track repair from $140 and hurricane-rated door installation from $1,800 with a Miami-Dade Notice of Acceptance. We offer same-day service seven days a week in Miami, Hialeah, Kendall, Homestead, Palmetto Bay, Doral and Miami Lakes, with the price in writing before work starts.',
    intro: [
      'Miami-Dade is concrete block and stucco almost everywhere, with an attached garage on a slab and no basement. The oldest doors are on the 1950s to 1970s ranch houses in Hialeah, Shenandoah, Little Havana, Coconut Grove and older Kendall: single doors, low headroom, and in Hialeah a large number of garages converted to living space with a door that still has to open. West of the Turnpike, Kendall is 1970s to 1990s doubles under HOA rules, and a large share of those doors went in during the rebuild after Hurricane Andrew in 1992, which puts them past thirty years old now. Doral is 1990s onward, gated, with townhouse singles on tight driveways. Palmetto Bay has large lots and three car garages. Homestead, Andrew\'s ground zero, has post 1992 code doors on nearly every street.',
      'This county and Broward are the High Velocity Hurricane Zone. That changes what a replacement here legally is. A new door needs a Miami-Dade Notice of Acceptance, not just a Florida Product Approval, and the permit, pulled by a licensed contractor, records the rating. Retrofit bracing kits are not the accepted route in the HVHZ; a rated door is. The garage door is the largest opening in the house, and when it fails the house pressurizes and the roof is at risk, which is why the code treats it as structural. A hurricane-rated installation here starts at $1,800 and runs to $6,500 for impact-rated and glass doors.',
      'The everyday wear is corrosion and heat. Salt air works on cables, springs, hinges and bottom brackets on the coastal side and around Biscayne Bay, and a rusted cable is the most common visible warning we see. Summer garages pass 100°F and cook opener logic boards and the plastic gears in older units. Afternoon storms put water at the bottom seal daily for half the year. When power goes out after a storm, the manual release and a battery backup are what get your car out. Spanish is the majority language at home in this county, so every page here is mirrored in Spanish and the phone is answered in both languages.',
    ],
    doorProfile: [
      'Single doors with low headroom on 1950s to 1970s ranch houses in Hialeah, Little Havana, Shenandoah and older Kendall, which limits which opener will fit',
      'A large population of doors from the 1992 to 1993 Andrew rebuild in Kendall and Homestead, now past thirty years old and past any spring rating',
      'HVHZ rules: any replacement door needs a Miami-Dade NOA and a permit pulled by a licensed contractor, and bracing kits are not the accepted route',
      'Salt and bay humidity corrode cables and bottom brackets fastest in Palmetto Bay, Coconut Grove and the coastal side of Miami',
    ],
    faq: [
      {
        question: 'How much does garage door repair cost in Miami-Dade County?',
        answer:
          'Spring replacement starts at $150 per spring and typically runs to $350, with both springs together adding $120 to $250. Cable repair starts at $95, opener repair at $95, off-track repair at $140 and panel replacement at $250 per section. A new wind-rated steel door starts at $950 installed and a hurricane-rated door with a Miami-Dade NOA starts at $1,800. Every price is a starting price for a standard single door in normal condition, and you get the number in writing before we start.',
      },
      {
        question: 'Do you offer same-day garage door repair in Miami-Dade County?',
        answer:
          'Yes, seven days a week: Monday to Friday 7:00 to 20:00, Saturday 8:00 to 18:00 and Sunday 9:00 to 17:00. Response is fastest in Miami, Kendall, Doral, Hialeah and Miami Lakes. Homestead and Palmetto Bay are a longer drive for most companies, which is exactly why we dispatch there the same day too. After-hours dispatch carries an emergency premium of $150 to $300 on top of the repair price, stated before we send anyone.',
      },
      {
        question: 'Which communities in Miami-Dade County do you cover?',
        answer:
          'We work throughout the county and publish dedicated pages for Miami, Hialeah, Kendall, Homestead, Palmetto Bay, Doral and Miami Lakes. If your neighborhood is not on that list, from Cutler Bay to Aventura, call and we will confirm the same day.',
      },
      {
        question: 'Does a new garage door in Miami-Dade need a Miami-Dade NOA?',
        answer:
          'Yes. Miami-Dade and Broward are the High Velocity Hurricane Zone, and a replacement door here needs a Miami-Dade Notice of Acceptance rather than the Florida Product Approval accepted elsewhere in the state. The permit is pulled by a licensed contractor and the rating is documented on it. Replacing only an opener normally does not need a permit. A rated door may qualify for a wind mitigation credit on your insurance; ask your insurer for the credit schedule.',
      },
    ],
    order: 1,
  },
  {
    slug: 'broward-county',
    name: 'Broward County',
    inPhrase: 'in Broward County',
    county: 'Broward County',
    hvhz: true,
    metaTitle: 'Garage Door Repair in Broward County | Published Prices',
    metaDescription:
      'Garage door repair in Fort Lauderdale, Hollywood, Coral Springs and Pembroke Pines. Springs from $150, openers from $275, same-day seven days a week.',
    answer:
      'Garage door repair in Broward County covers spring replacement from $150 per spring, cable repair from $95, opener repair from $95, opener installation from $275 and hurricane-rated door installation from $1,800 with a Miami-Dade NOA, which Broward requires as part of the HVHZ. We offer same-day service seven days a week in Fort Lauderdale, Hollywood, Coral Springs, Pembroke Pines, Pompano Beach, Weston, Davie and Miramar, with the price quoted in writing before work begins.',
    intro: [
      'Broward splits cleanly at I-95. East of it, Fort Lauderdale, Hollywood and Pompano Beach are 1950s ranch houses with single doors, canal front lots and salt air on everything. The condos along the beach have no garages, so the work east of US 1 is in the single family streets behind them, where a cable rusts through years before it would inland. West of I-95 is the suburban wave: Coral Springs built 1970s to 1990s with a double door on every house and a strict city appearance code, Pembroke Pines and Miramar from the 1990s boom, Weston master planned in the 1990s and 2000s with three car garages and carriage style doors, and Davie, still semi rural, with large lots, detached garages, barns and doors wider than anything else in the county.',
      'The western suburbs share one problem: the doors went in together and they are wearing out together. A torsion spring is rated around 10,000 cycles, which is about 7 to 10 years the way a Florida garage gets used, and a door from a 1990s subdivision is on its second or third spring by now with an opener old enough that parts are getting scarce. Century Village in Pembroke Pines and the other 55 plus communities add a second pattern: doors that cycle several times a day and openers that get used as the front door.',
      'Broward is in the High Velocity Hurricane Zone with Miami-Dade. A replacement door here needs a Miami-Dade Notice of Acceptance, the permit is pulled by a licensed contractor with the rating on it, and a bracing kit is not the accepted route. The everyday wear is the same as the rest of South Florida: summer garages over 100°F that cook logic boards, afternoon storm water at the bottom seal for half the year, and outages after storms that make the manual release and battery backup matter. We publish our starting prices, which is still unusual in this county.',
    ],
    doorProfile: [
      'Salt air east of US 1 in Fort Lauderdale, Hollywood and Pompano Beach corrodes cables, springs and bottom brackets faster than anywhere inland',
      '1970s to 1990s doubles across Coral Springs, Pembroke Pines and Miramar, installed at once and now at end of spring and opener life at once',
      'Three car garages and carriage style doors in Weston, where HOA rules set the door style and color a replacement must match',
      'Detached garages, barns and wider doors on large lots in Davie, and HVHZ rules that require a Miami-Dade NOA on any replacement door',
    ],
    faq: [
      {
        question: 'How much does garage door repair cost in Broward County?',
        answer:
          'Spring replacement starts at $150 per spring and typically runs to $350. Cable repair starts at $95 and cable with drum runs $225 to $400. Opener repair starts at $95, opener installation at $275 and a smart WiFi opener with battery backup at $350. Off-track repair starts at $140 and panel replacement at $250 per section. A new wind-rated steel door starts at $950 and a hurricane-rated door with a Miami-Dade NOA at $1,800. All are starting prices for a standard single door, quoted in writing before work.',
      },
      {
        question: 'Do you offer same-day garage door repair in Broward County?',
        answer:
          'Yes, seven days a week. Response is fastest along the I-95 and I-595 corridors: Fort Lauderdale, Hollywood, Davie, Pembroke Pines and Miramar. Coral Springs, Weston and Pompano Beach are covered the same day as well. Hours are Monday to Friday 7:00 to 20:00, Saturday 8:00 to 18:00 and Sunday 9:00 to 17:00, and after-hours dispatch carries an emergency premium of $150 to $300 stated before we send a technician.',
      },
      {
        question: 'Which communities in Broward County do you cover?',
        answer:
          'We work throughout Broward and publish dedicated pages for Fort Lauderdale, Hollywood, Coral Springs, Pembroke Pines, Pompano Beach, Weston, Davie and Miramar. Plantation, Sunrise, Tamarac, Cooper City and the rest of the county are covered on the same terms; call and we will confirm timing.',
      },
      {
        question: 'Is Broward County in the High Velocity Hurricane Zone?',
        answer:
          'Yes. Broward and Miami-Dade are the two HVHZ counties. A replacement garage door here needs a Miami-Dade Notice of Acceptance, the permit is pulled by a licensed contractor and the rating is documented on it. Retrofit bracing kits, which have Florida Product Approval in most of the state, are not the accepted route in the HVHZ; a rated door is. Replacing an opener alone normally needs no permit. A rated door is recorded on the wind mitigation inspection form and may qualify for a premium credit; ask your insurer for the schedule.',
      },
    ],
    order: 2,
  },
  {
    slug: 'palm-beach-treasure-coast',
    name: 'Palm Beach and the Treasure Coast',
    inPhrase: 'in Palm Beach County and the Treasure Coast',
    county: 'Palm Beach, Martin and St. Lucie counties',
    hvhz: false,
    metaTitle: 'Garage Door Repair Palm Beach and Treasure Coast | Prices',
    metaDescription:
      'Garage door repair in Boca Raton, West Palm Beach, Boynton Beach and Port St. Lucie. Springs from $150, wind-rated doors from $950, quoted in writing first.',
    answer:
      'Garage door repair in Palm Beach County and the Treasure Coast covers spring replacement from $150 per spring, cable repair from $95, opener installation from $275, new wind-rated door installation from $950 and impact-rated door installation from $1,800 with a Florida Product Approval. We offer same-day service seven days a week in Boca Raton, West Palm Beach, Boynton Beach, Delray Beach, Palm Beach Gardens, Jupiter, Wellington and Port St. Lucie, with every price in writing before work starts.',
    intro: [
      'This is where our phone number lives: 561 is the Palm Beach County area code, and West Palm Beach is the mix of older neighborhoods and new western subdivisions that the whole region is made of. Boca Raton west of I-95 is 1980s to 1990s gated suburbs with high value doors, and the modern remodels there are going to aluminum and full view glass. Boynton Beach is 1990s to 2000s subdivisions with a large share of 55 plus communities. Delray Beach is older on the east side and newer on the west, with coastal corrosion on the east. Palm Beach Gardens is golf communities and three car garages. Jupiter and Abacoa are coastal and affluent, with salt air on every hinge. Wellington is equestrian: large lots, big doors, barns, and an HOA with opinions about all of them.',
      'North of the county line the profile changes. Port St. Lucie is one of the fastest growing cities in the country, built mostly in the 2000s, and its doors are hitting their first spring failure right now: a 10,000 cycle torsion spring on a door that opens three or four times a day lasts about 7 to 10 years, and the math has arrived. The calls there are springs, cables and the first opener logic boards cooked by summer garages that pass 100°F.',
      'None of these counties are in the High Velocity Hurricane Zone, but the design wind pressure near the coast is still high, and the Florida Building Code requires a door rated for the pressure at your address. A replacement door here needs a Florida Product Approval, an FL number, and a permit pulled by a licensed contractor with the rating on it. Retrofit bracing kits with Florida Product Approval are an accepted option outside the HVHZ, which makes them a real choice for a door that is sound but unrated. A rated door is recorded on the wind mitigation inspection and may qualify for a premium credit; ask your insurer for the schedule.',
    ],
    doorProfile: [
      'High value doors in Boca Raton, Palm Beach Gardens and Jupiter, where aluminum, full view glass and three car garages make parts model specific',
      'Extra wide doors, barns and detached garages on equestrian lots in Wellington, usually under HOA style rules',
      '2000s builds across Port St. Lucie and Boynton Beach reaching first spring and opener failure together',
      'Coastal corrosion east of US 1 from Delray Beach to Jupiter, and Florida Product Approval rather than a Miami-Dade NOA on any replacement door',
    ],
    faq: [
      {
        question: 'How much does garage door repair cost in Palm Beach County and the Treasure Coast?',
        answer:
          'Spring replacement starts at $150 per spring and typically runs to $350, with both springs together adding $120 to $250. Cable repair starts at $95, opener repair at $95, opener installation at $275 and off-track repair at $140. A new wind-rated steel door starts at $950 installed with the permit in the quote, and an impact-rated door starts at $1,800. Aluminum and full view glass doors, common in Boca Raton and Palm Beach Gardens, run higher and are quoted in writing after we measure.',
      },
      {
        question: 'Do you offer same-day garage door repair in Palm Beach County and the Treasure Coast?',
        answer:
          'Yes, seven days a week, Monday to Friday 7:00 to 20:00, Saturday 8:00 to 18:00 and Sunday 9:00 to 17:00. Response is fastest along I-95 from Boca Raton through Delray Beach, Boynton Beach and West Palm Beach to Palm Beach Gardens and Jupiter. Wellington and Port St. Lucie are the longer runs and are still covered the same day. After-hours dispatch carries an emergency premium of $150 to $300 on top of the repair price, stated before we send anyone.',
      },
      {
        question: 'Which communities in Palm Beach County and the Treasure Coast do you cover?',
        answer:
          'We publish dedicated pages for Boca Raton, West Palm Beach, Boynton Beach, Delray Beach, Palm Beach Gardens, Jupiter, Wellington and Port St. Lucie, and we work the rest of Palm Beach, Martin and St. Lucie counties on the same terms, including Lake Worth, Royal Palm Beach, Stuart and Fort Pierce. Call and we will confirm the same day.',
      },
      {
        question: 'Do I need a hurricane-rated garage door in Palm Beach County if it is not the HVHZ?',
        answer:
          'You need a door rated for the design wind pressure at your address, which the Florida Building Code requires everywhere in the state. Outside the HVHZ that means a Florida Product Approval rather than a Miami-Dade NOA, with the permit pulled by a licensed contractor. Near the coast the pressures are high and an impact-rated door, which is also tested against large missile impact, is what most people mean by a hurricane door. For a sound but unrated door, a bracing kit with Florida Product Approval is an accepted option here. Nothing makes a door hurricane proof.',
      },
    ],
    order: 3,
  },
  {
    slug: 'tampa-bay',
    name: 'Tampa Bay',
    inPhrase: 'in Tampa Bay',
    county: 'Hillsborough, Pinellas, Pasco, Hernando and Polk counties',
    hvhz: false,
    metaTitle: 'Garage Door Repair in Tampa Bay | Published Prices',
    metaDescription:
      'Garage door repair in Tampa, St. Petersburg, Clearwater and Brandon. Springs from $150, storm damage repair from $150, same-day service seven days a week.',
    answer:
      'Garage door repair in Tampa Bay covers spring replacement from $150 per spring, cable repair from $95, opener repair from $95, off-track repair from $140, storm damage repair from $150 and new wind-rated door installation from $950. We offer same-day service seven days a week in Tampa, Brandon, Clearwater, St. Petersburg, Wesley Chapel, Riverview, Spring Hill and Lakeland, with the price in writing before work begins.',
    intro: [
      'Tampa Bay has the widest spread of housing eras we work. South Tampa and St. Petersburg are 1920s to 1950s bungalows with detached garages on alleys and low headroom, where the opener was added decades after the garage was built. Carrollwood is 1970s to 1980s, Brandon is 1980s to 2000s doubles, and New Tampa, Wesley Chapel and Riverview are 2000s to 2020s master planned subdivisions under HOA rules, mostly frame construction with stucco. Spring Hill in Hernando County is 1970s to 1990s retirement and family housing on sandy soil, and Lakeland sits in Polk County between the two metros with older neighborhoods and new subdivisions along I-4.',
      'The newest subdivisions are where the volume is right now. A door installed in Wesley Chapel or Riverview in the 2010s is on its first 10,000 cycle spring, which lasts about 7 to 10 years the way a Florida garage gets used, and the first round of spring snaps and cooked opener boards is arriving together across whole streets. Summer garages here pass 100°F, and the plastic gears in a builder grade opener do not like it.',
      'Then there are the storms. Ian in 2022, and Helene and Milton in 2024, all left damage across the region, and Helene\'s surge in particular went through garages near the water in Clearwater and St. Petersburg. Storm work here means bent panels, twisted tracks and doors pulled off track by pressure. We assess, brace or secure the opening, and quote in writing, with photos and documentation for your claim. We do not inflate storm repairs, because that is the complaint people have after every hurricane. A replacement door in any of these counties needs a Florida Product Approval and a permit pulled by a licensed contractor, and a bracing kit with Florida Product Approval is an accepted option for a sound unrated door.',
    ],
    doorProfile: [
      'Detached alley garages with low headroom in South Tampa and St. Petersburg, usually single doors with retrofitted openers, where the wrong replacement opener will not fit',
      '2000s to 2020s builder grade doors and openers across Wesley Chapel, Riverview and New Tampa reaching first spring and opener failure now',
      'Surge and wind damage from Helene and Milton in 2024 on garages near the water in Clearwater and St. Petersburg',
      'Less salt and sandy soil inland in Spring Hill, Brandon and Lakeland, where heat and cycle count, not corrosion, drive most failures',
    ],
    faq: [
      {
        question: 'How much does garage door repair cost in Tampa Bay?',
        answer:
          'Spring replacement starts at $150 per spring and typically runs to $350. Cable repair starts at $95, opener repair at $95, opener installation at $275, off-track repair at $140 and panel replacement at $250 per section when the profile is still made. Storm damage repair starts at $150 for assessment, bracing and panel or track work, with full replacement quoted separately from $950 for a wind-rated steel door. All are starting prices for a standard single door in normal condition, quoted in writing before work.',
      },
      {
        question: 'Do you offer same-day garage door repair in Tampa Bay?',
        answer:
          'Yes, seven days a week, Monday to Friday 7:00 to 20:00, Saturday 8:00 to 18:00 and Sunday 9:00 to 17:00. Response is fastest in Tampa, Brandon, Riverview and Wesley Chapel along I-4 and I-75, and across the bay in St. Petersburg and Clearwater. Spring Hill and Lakeland are the outer edges of the region and are still covered the same day. After-hours dispatch adds an emergency premium of $150 to $300, stated before we send a technician.',
      },
      {
        question: 'Which communities in Tampa Bay do you cover?',
        answer:
          'We publish dedicated pages for Tampa, Brandon, Clearwater, St. Petersburg, Wesley Chapel, Riverview, Spring Hill and Lakeland, and we work the rest of Hillsborough, Pinellas, Pasco, Hernando and Polk counties on the same terms, including Largo, Palm Harbor, Land O Lakes, Valrico and Plant City. Call and we will confirm timing.',
      },
      {
        question: 'My garage door was damaged by Helene or Milton. What do you do first?',
        answer:
          'We assess the door, brace or secure the opening so the house is closed, and give you a written quote for repair or replacement with photos you can send to your insurer. The claim is yours; we provide the documentation. Bent panels and twisted tracks are repaired from $150 when the door is worth saving, and a replacement is quoted separately with a Florida Product Approval door and the permit included. We do not inflate storm repairs, and we tell you when a door should be replaced rather than patched.',
      },
    ],
    order: 4,
  },
  {
    slug: 'central-florida',
    name: 'Central Florida',
    inPhrase: 'in Central Florida',
    county: 'Orange, Osceola, Seminole, Lake and Brevard counties',
    hvhz: false,
    metaTitle: 'Garage Door Repair in Central Florida | Published Prices',
    metaDescription:
      'Garage door repair in Orlando, Kissimmee, Oviedo and Winter Garden. Springs from $150, opener installation from $275, price in writing before any work.',
    answer:
      'Garage door repair in Central Florida covers spring replacement from $150 per spring, cable repair from $95, opener repair from $95, opener installation from $275, off-track repair from $140 and new wind-rated door installation from $950. We offer same-day service seven days a week in Orlando, Kissimmee, Oviedo, Sanford, Apopka, Clermont, Winter Garden and Melbourne, with the price in writing before work starts.',
    intro: [
      'Central Florida is the one region we cover where most of the doors are far from salt water, and the wear pattern shows it. Inland, the enemy is heat and cycle count: a summer garage in Orlando passes 100°F and cooks opener logic boards and the plastic gears in older units, and the garage is the storage room, the workshop and the second front door, so the springs cycle hard. Frame construction with stucco is the norm in the newer subdivisions here, which changes nothing about the door itself but does change how an opener is mounted and how a header is checked before a heavier door goes in.',
      'The housing runs from the College Park and Winter Park era bungalows in Orlando, through the 1980s and 1990s in Dr. Phillips, MetroWest and Oviedo, to the new construction at scale in Lake Nona, Horizon West and Winter Garden, where the doors and openers are builder grade and going in by the hundred. Clermont is 2000s to 2020s builds on the hills west of the city, Apopka is growing fast on its rural and nursery edges, and Sanford pairs a historic downtown with newer subdivisions. Kissimmee is the different case: a large Puerto Rican and Latin community, 1990s to 2000s subdivisions, and vacation rental homes where the door cycles harder than any family house because every guest treats it as the front door.',
      'Melbourne and the Space Coast bring the coast back into it: 1960s to 1980s housing plus Viera new builds, with salt corrosion on cables and hinges like the rest of the Atlantic shore. Everywhere in Central Florida the Florida Building Code requires a replacement door rated for the design wind pressure at the site, documented with a Florida Product Approval on a permit pulled by a licensed contractor. Replacing only an opener normally does not need a permit. Hurricane season runs 1 June to 30 November, and March to May is the right time for a tune-up or a replacement.',
    ],
    doorProfile: [
      'Builder grade doors and openers going in at scale across Horizon West, Winter Garden, Lake Nona and Clermont, where the first failures are gears and springs, not the door',
      'Vacation rental homes in Kissimmee and around the parks where a door cycles many times a day and wears out years ahead of a family house',
      'Inland heat rather than salt drives most failures in Orange, Seminole, Osceola and Lake counties, so logic boards and plastic gears fail before cables rust',
      'Coastal corrosion returns in Melbourne and along the Space Coast, on 1960s to 1980s housing and the Viera new builds',
    ],
    faq: [
      {
        question: 'How much does garage door repair cost in Central Florida?',
        answer:
          'Spring replacement starts at $150 per spring and typically runs to $350, with both springs together adding $120 to $250. Cable repair starts at $95, opener repair at $95, opener installation at $275 and a smart opener with battery backup at $350. Off-track repair starts at $140 and panel replacement at $250 per section. A new wind-rated steel door starts at $950 installed with the permit in the quote. A tune-up is $85 to $160. All are starting prices for a standard single door, quoted in writing before work.',
      },
      {
        question: 'Do you offer same-day garage door repair in Central Florida?',
        answer:
          'Yes, seven days a week, Monday to Friday 7:00 to 20:00, Saturday 8:00 to 18:00 and Sunday 9:00 to 17:00. Response is fastest in Orlando, Winter Garden, Kissimmee, Oviedo and Sanford. Apopka and Clermont are covered the same day, and Melbourne is the longest run from the metro but is still same-day. After-hours dispatch carries an emergency premium of $150 to $300 on top of the repair price, stated before we send anyone.',
      },
      {
        question: 'Which communities in Central Florida do you cover?',
        answer:
          'We publish dedicated pages for Orlando, Kissimmee, Oviedo, Sanford, Apopka, Clermont, Winter Garden and Melbourne, and we work the rest of Orange, Osceola, Seminole, Lake and Brevard counties on the same terms, including Winter Park, Lake Nona, Dr. Phillips, St. Cloud, Lake Mary and Palm Bay. Call and we will confirm timing.',
      },
      {
        question: 'Does an inland Central Florida home need a wind-rated garage door?',
        answer:
          'Yes. The Florida Building Code requires a garage door rated for the design wind pressure at the site everywhere in the state, and the permit for a replacement door, pulled by a licensed contractor, documents that rating with a Florida Product Approval. The pressure at your address in Orange or Lake County is lower than on the Brevard coast, but there is no address in Central Florida where an unrated door passes a permit. A wind-rated steel door starts at $950 installed; an impact-rated door, also tested against large missile impact, starts at $1,800. A bracing kit with Florida Product Approval is an accepted option for a sound unrated door here.',
      },
    ],
    order: 5,
  },
  {
    slug: 'southwest-florida',
    name: 'Southwest Florida',
    inPhrase: 'in Southwest Florida',
    county: 'Lee, Collier, Sarasota, Manatee and Charlotte counties',
    hvhz: false,
    metaTitle: 'Garage Door Repair in Southwest Florida | Published Prices',
    metaDescription:
      'Garage door repair in Fort Myers, Cape Coral, Naples and Sarasota. Springs from $150, hurricane-rated doors from $1,800, same-day service seven days a week.',
    answer:
      'Garage door repair in Southwest Florida covers spring replacement from $150 per spring, cable repair from $95, opener repair from $95, storm damage repair from $150, new wind-rated door installation from $950 and impact-rated door installation from $1,800 with a Florida Product Approval. We offer same-day service seven days a week in Fort Myers, Cape Coral, Naples, Bonita Springs, Sarasota, Bradenton, Venice and Port Charlotte, with the price in writing before work begins.',
    intro: [
      'Hurricane Ian in 2022 rebuilt or damaged a large share of the garage doors between Port Charlotte and Naples, and the region is still sorting out what that means. Port Charlotte was the landfall zone, with 1970s to 1980s housing that is now a replacement market. Cape Coral is canal lots, salt air and 1970s to 2000s housing that took Ian\'s surge. Fort Myers has the largest garage door search volume of any city in Florida because of what happened next: a huge post storm replacement market, and thousands of doors installed in 2023 that are now raising warranty questions about who set the spring tension, who pulled the permit, and who is still answering the phone.',
      'North of Charlotte Harbor the profile is retirement and coast. Bradenton is 1970s to 1990s housing, Venice is 1970s to 2000s with salt air on every hinge, and Sarasota pairs older housing in the city with new construction at Lakewood Ranch scale to the east. South, Naples and Bonita Springs are high value, gated and seasonal: three car garages, impact glass doors, and owners who find the spring snapped or the opener dead when they come back in November, because the door sat through a whole summer of 100°F garage heat and daily afternoon storm water at the seal without anyone noticing.',
      'Southwest Florida is not in the High Velocity Hurricane Zone, but Ian settled any argument about whether the rating matters. A replacement door in Lee, Collier, Sarasota, Manatee or Charlotte County needs a Florida Product Approval and a permit pulled by a licensed contractor with the rating on it, and an impact-rated door, tested against large missile impact, is what most people here mean when they ask for a hurricane door. After a named storm we assess, brace or secure the opening, and quote the repair or replacement in writing with photos for your claim. We do not inflate storm repairs, and we say so because that is the complaint people had after Ian.',
    ],
    doorProfile: [
      'A large population of doors installed in 2023 after Ian across Fort Myers, Cape Coral and Port Charlotte, where the first problems are spring tension, cable seating and opener travel limits set in a hurry',
      'Salt air and canal humidity from Cape Coral to Venice, so rusted cables and pitted bottom brackets are the most common visible warning',
      'Three car garages and impact glass doors in Naples and Bonita Springs, where parts are model specific and seasonal owners find the failure in November',
      'Florida Product Approval rather than a Miami-Dade NOA on any replacement door, with the permit pulled by a licensed contractor',
    ],
    faq: [
      {
        question: 'How much does garage door repair cost in Southwest Florida?',
        answer:
          'Spring replacement starts at $150 per spring and typically runs to $350. Cable repair starts at $95, opener repair at $95, opener installation at $275, off-track repair at $140 and panel replacement at $250 per section. Storm damage repair starts at $150 for assessment, bracing and panel or track work. A new wind-rated steel door starts at $950 installed and an impact-rated door at $1,800, running to $6,500 for the glass and high value doors common in Naples. All are starting prices for a standard single door, quoted in writing before work.',
      },
      {
        question: 'Do you offer same-day garage door repair in Southwest Florida?',
        answer:
          'Yes, seven days a week, Monday to Friday 7:00 to 20:00, Saturday 8:00 to 18:00 and Sunday 9:00 to 17:00. Response is fastest along I-75 and US 41 in Fort Myers, Cape Coral, Bonita Springs and Naples, and in Sarasota and Bradenton to the north. Venice and Port Charlotte are covered the same day as well. After-hours dispatch carries an emergency premium of $150 to $300 on top of the repair price, stated before we send anyone.',
      },
      {
        question: 'Which communities in Southwest Florida do you cover?',
        answer:
          'We publish dedicated pages for Fort Myers, Cape Coral, Naples, Bonita Springs, Sarasota, Bradenton, Venice and Port Charlotte, and we work the rest of Lee, Collier, Sarasota, Manatee and Charlotte counties on the same terms, including Estero, Lehigh Acres, Punta Gorda, North Port and Lakewood Ranch. Call and we will confirm timing.',
      },
      {
        question: 'My garage door was installed after Ian in 2023. Who covers it now?',
        answer:
          'The written warranty from the installer and the manufacturer covers it, if the installer is still answering the phone. If they are not, we service any brand and any door. The problems that show up first on a door installed in a hurry are spring tension, cable seating and opener travel limits, all of which we adjust from $85 and put in writing. If the door was installed without a permit or without a Florida Product Approval, we tell you plainly and quote what it takes to make it right. Our own work carries one year on parts and one year on labor, written on the invoice.',
      },
    ],
    order: 6,
  },
  {
    slug: 'north-florida',
    name: 'North Florida',
    inPhrase: 'in North Florida',
    county: 'Duval, St. Johns, Clay, Flagler and Alachua counties',
    hvhz: false,
    metaTitle: 'Garage Door Repair in North Florida | Published Prices',
    metaDescription:
      'Garage door repair in Jacksonville, St. Augustine, Orange Park and Gainesville. Springs from $150, opener installation from $275, quoted in writing first.',
    answer:
      'Garage door repair in North Florida covers spring replacement from $150 per spring, cable repair from $95, opener repair from $95, opener installation from $275, off-track repair from $140 and new wind-rated door installation from $950. We offer same-day service seven days a week in Jacksonville, St. Augustine, Orange Park, Palm Coast and Gainesville, with the price in writing before work starts.',
    intro: [
      'Jacksonville is the largest city by area in the country and its housing runs from the 1950s to the 2020s, with Mandarin and the Southside suburbs carrying most of the attached garages we work on. The salt exposure here is a matter of distance: the beaches and the river mouth corrode hardware the way the rest of the Florida coast does, and the inland side of Duval County gets the humidity without the salt. Orange Park in Clay County is 1970s to 2000s suburbs with a large share of military families, which means doors that get a lot of use and owners who are often away when something fails.',
      'South of the city the coast takes over. St. Augustine pairs a historic city with new subdivisions to the west, built at Nocatee scale, where the doors are new and the openers are builder grade. Palm Coast in Flagler County is a planned city with 1970s canal lots and a wave of 2000s growth, mostly retirement housing, with salt air on the canals working on cables and bottom brackets. Gainesville is the inland exception: a university city with older housing, no salt at all, and humidity under the oaks that still rusts a cable, only more slowly.',
      'The wear here is the same Florida pattern with the volume turned down on salt and up on cycle count. Springs fail from cycles, not weather, and a 10,000 cycle torsion spring lasts about 7 to 10 years in a garage that is the storage room and the second front door. Summer garages still pass 100°F and still cook opener logic boards. A replacement door anywhere in North Florida needs a Florida Product Approval and a permit pulled by a licensed contractor with the rating documented on it, and a bracing kit with Florida Product Approval is an accepted option for a sound unrated door. Hurricane season runs 1 June to 30 November here as everywhere in the state.',
    ],
    doorProfile: [
      'The widest spread of housing eras in one city in Jacksonville, from 1950s singles to 2020s three car garages in the Southside suburbs',
      'Salt on the canals in Palm Coast and along the coast at St. Augustine, and none at all inland in Gainesville, so cable rust is a coastal problem here',
      'Builder grade doors and openers going in at scale in the new subdivisions west of St. Augustine and around Nocatee',
      'Florida Product Approval rather than a Miami-Dade NOA on any replacement door, with lower design pressures inland than at the coast',
    ],
    faq: [
      {
        question: 'How much does garage door repair cost in North Florida?',
        answer:
          'Spring replacement starts at $150 per spring and typically runs to $350, with both springs together adding $120 to $250. Cable repair starts at $95, opener repair at $95, opener installation at $275 and a smart opener with battery backup at $350. Off-track repair starts at $140 and panel replacement at $250 per section. A new wind-rated steel door starts at $950 installed with the permit in the quote. A tune-up is $85 to $160. All are starting prices for a standard single door, quoted in writing before work.',
      },
      {
        question: 'Do you offer same-day garage door repair in North Florida?',
        answer:
          'Yes, seven days a week, Monday to Friday 7:00 to 20:00, Saturday 8:00 to 18:00 and Sunday 9:00 to 17:00. Response is fastest in Jacksonville, Orange Park and St. Augustine along I-95 and I-295. Palm Coast and Gainesville are the longest runs in the region and are still covered the same day. After-hours dispatch carries an emergency premium of $150 to $300 on top of the repair price, stated before we send a technician.',
      },
      {
        question: 'Which communities in North Florida do you cover?',
        answer:
          'We publish dedicated pages for Jacksonville, St. Augustine, Orange Park, Palm Coast and Gainesville, and we work the rest of Duval, St. Johns, Clay, Flagler and Alachua counties on the same terms, including Jacksonville Beach, Ponte Vedra, Nocatee, Fleming Island and Middleburg. Call and we will confirm timing.',
      },
      {
        question: 'Is a hurricane-rated garage door worth it in North Florida?',
        answer:
          'Any replacement door in North Florida must be rated for the design wind pressure at your address under the Florida Building Code, documented with a Florida Product Approval on the permit. That pressure is higher on the coast at St. Augustine and Palm Coast than inland in Gainesville, and a wind-rated steel door from $950 meets the code at most inland addresses. An impact-rated door from $1,800 is also tested against large missile impact and is recorded on the wind mitigation inspection, form OIR-B1-1802, where it may qualify for a premium credit; ask your insurer for the credit schedule. We never promise a dollar saving.',
      },
    ],
    order: 7,
  },
];

export const getRegion = (slug: string) => regions.find((r) => r.slug === slug);
