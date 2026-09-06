/**
 * English copy for the core pages: home, prices, hubs, FAQ, about, contact.
 *
 * Every price here comes from research/fl-garage/BRIEF.md section 4 and
 * nowhere else. Every Florida claim comes from section 5 of the same file.
 * The Spanish mirror lives in copy.es.ts and carries the same facts.
 */

import type { PageCopy } from './types';

export const copyEn: PageCopy = {
  home: {
    metaTitle: 'Garage Door Repair in Florida | Prices | Garage Door Fixers',
    metaDescription:
      'Same-day garage door repair across South Florida, Tampa Bay, Orlando and Fort Myers. Springs from $150, openers from $275, hurricane-rated doors from $1,800.',
    h1Line1: 'Here is what it costs.',
    h1Line2: 'Before you call.',
    lead:
      'Garage door repair across Miami-Dade, Broward, Palm Beach and the Treasure Coast, Tampa Bay, Central Florida, Southwest Florida and North Florida. Starting prices published up front, a written estimate before anything is touched, and the price we quote is the price you pay.',
    panelTitle: 'What repairs actually cost',
    panelSub: 'Real Florida starting prices. No "call for pricing".',
    stormHeading: 'Storm season is June to November. Is your door rated?',
    stormText:
      'Same-day emergency service seven days a week. The call-out premium is $150 to $300 and it is stated before we dispatch; the repair itself is quoted at the same published price as any other day. Storm damage repair starts at $150 for assessment and bracing. A hurricane-rated door with Florida Product Approval or a Miami-Dade NOA installs from $1,800, and March to May is the time to do it.',
    stormCta: 'Hurricane-rated doors',
    doorsHeading: 'Florida does not have one kind of garage',
    doorsLead:
      'A 1960s single on a Hialeah block house, an impact-rated double on a Cape Coral canal lot and a builder grade three car garage in Wesley Chapel are different jobs with different parts and different prices. That is why the price list says "starting at".',
    doorCards: [
      {
        title: 'CBS doubles in the HVHZ',
        text: 'Miami-Dade and Broward. A 1970s to 1990s concrete block house with one 16 foot door, which needs a Miami-Dade NOA the day it is replaced.',
        href: '/service-areas/miami-dade-county/',
        img: 'florida-cbs-double-door.webp',
        alt: 'Single 16 foot double garage door on a concrete block and stucco house built between the 1970s and 1990s, the usual arrangement in Kendall and Coral Springs',
      },
      {
        title: 'Coastal and impact-rated',
        text: 'Cape Coral, Naples and Sarasota. Salt air eats cables and bottom brackets, and a large share of these doors went in during the rebuild after Ian in 2022.',
        href: '/service-areas/southwest-florida/',
        img: 'coastal-impact-garage-door.webp',
        alt: 'Impact-rated garage door on a coastal Southwest Florida home, the type installed in the rebuild after Hurricane Ian',
      },
      {
        title: 'New build three car garages',
        text: 'Lake Nona, Horizon West and Clermont. Built 2010 onward with a builder grade opener that is reaching its first failure now.',
        href: '/service-areas/central-florida/',
        img: 'new-build-three-car-garage.webp',
        alt: 'Three car garage with a double and a single door on a 2010s master planned community house in Central Florida, fitted with a builder grade chain drive opener',
      },
    ],
    faultsHeading: 'Four failures cover most of what we are called out for',
    faultsLead:
      'Springs go from cycle count, cables go from rust, and openers cook in a garage that reaches 100°F. If one of these looks like yours, the price is already on this page. You should not have to let anyone in to find out what it costs.',
    whyEyebrow: 'Why our prices are on the website',
    whyHeading: 'Because the alternative is how this industry got its reputation',
    whyParagraphs: [
      'The pattern is familiar to anyone in Florida who has been through it. A $29 service call advertised on a truck or a search ad, and then a technician who finds cables, drums, bearings and rollers that all need replacing. People have been quoted several times the $270 to $600 it costs to replace two springs properly.',
      'It gets worse after a hurricane. Out of state crews arrive behind the storm, quote whatever the week will bear, and are gone before anyone asks about the permit. We assess the door, brace or secure the opening, and put the repair or replacement in writing at the same prices that are on this site. We do not inflate storm work, and we say so because that is the complaint people have after every named storm.',
      'We are a newer company. We cannot tell you we have been here since Andrew, and we are not going to pretend otherwise. What we can do is publish every price before you call, put the estimate in writing before we touch anything, and show you the failed part rather than describing it. If a recommendation genuinely costs you more, such as replacing both springs when one snapped, we explain why and let you decide.',
    ],
    faq: [
      {
        question: 'How much does garage door repair cost in Florida?',
        answer:
          'Spring replacement starts at $150 per spring, cable repair at $95, opener repair at $95, opener installation at $275, and a new wind-rated door installed at $950. Those are starting prices for a standard single door. A 16 foot double, an unusual model, or additional corroded parts will cost more, and you get a written quote before any work starts.',
      },
      {
        question: 'Do you offer same-day garage door repair?',
        answer:
          'Yes, seven days a week across all seven regions we cover. You get a real arrival window and the pricing before we dispatch, including the emergency call-out premium of $150 to $300 if it applies.',
      },
      {
        question: 'Can I still use my garage door with a broken spring?',
        answer:
          'No. Do not run the opener, because it will strain the motor, bend panels, and can drop the door. Pull the manual release only if you need to lift the door by hand with a second person, then leave it and call us.',
      },
      {
        question: 'Does my garage door need to be hurricane rated?',
        answer:
          'If it is replaced, yes. The Florida Building Code requires a garage door rated for the design wind pressure at the site, with the rating documented on a permit pulled by a licensed contractor. In Miami-Dade and Broward that means a door with a Miami-Dade NOA; elsewhere a Florida Product Approval. A rated door installs from $1,800, and it is included in every replacement quote we write.',
      },
      {
        question: 'Are you licensed and insured?',
        answer:
          'Yes, and every job comes with a written estimate before work starts plus a one year warranty on parts and labor, written on the invoice.',
      },
    ],
  },

  prices: {
    metaTitle: 'Garage Door Repair Prices in Florida | Garage Door Fixers',
    metaDescription:
      'Published garage door prices for Florida. Springs from $150, cable repair from $95, openers from $275, new doors from $950, hurricane-rated doors from $1,800.',
    h1: 'What garage door repair costs in Florida',
    lead:
      'Every price we charge is on this page. It is the thing this company was built to do differently, so it is not buried in a form or held back until a technician is standing in your driveway.',
    answer:
      'Garage door repair in Florida starts at $150 per spring, $95 for cable repair, $95 for opener repair, $275 for opener installation, $350 for a smart opener installed, $140 for off-track repair, $250 per panel replaced, $950 for a new wind-rated door installed, $1,800 for a hurricane-rated door installed, $150 for storm damage repair and $85 for a tune-up. Emergency and after-hours dispatch adds $150 to $300. These are starting prices for a standard single door in normal condition, and every job is quoted in writing before work begins.',
    addOns: [
      {
        name: 'Both springs replaced together',
        price: 'Adds $120 to $250',
        note: 'Rather than doubling, because most of the labor is shared',
      },
      {
        name: 'Cable and drum together',
        price: '$225 to $400',
        note: 'When the drum is corroded or damaged as well as the cable',
      },
      {
        name: 'Cable tension adjustment only',
        price: '$85 to $140',
        note: 'When the cable slipped off the drum but is not damaged',
      },
      {
        name: 'Emergency or after-hours call-out',
        price: '$150 to $300',
        note: 'Stated before we dispatch, never added afterwards',
      },
      {
        name: 'Labor, where quoted hourly',
        price: '$45 to $120 per hour',
        note: 'Florida market rate, used only for non-standard work',
      },
    ],
    faq: [
      {
        question: 'Are these your real prices or an advertisement?',
        answer:
          'They are real starting prices for a standard single garage door in normal condition. The final number depends on the door, the model and what we find, and you get it in writing before any work starts. What we will not do is name a low number to get in the door and raise it once the door is apart.',
      },
      {
        question: 'Why does nobody else publish prices?',
        answer:
          'Because a published price is a commitment and a quote given in your driveway is not. It is also why cost searches are dominated by directories rather than by garage door companies: the question gets asked constantly and almost nobody in the trade answers it.',
      },
      {
        question: 'What is a fair price for two garage door springs in Florida?',
        answer:
          'Roughly $270 to $600 installed for a standard door: $150 to $350 for the first spring and $120 to $250 to do the second at the same visit. Quotes well above that for two standard springs are worth a second opinion. High-cycle springs and oversized doors legitimately cost more, and anyone quoting them should say which one applies.',
      },
      {
        question: 'Do your prices go up after a hurricane?',
        answer:
          'No. The price list is the same the week after a named storm as it is in March. Storm damage repair starts at $150 for the assessment and bracing, panel and track work is quoted from the same published prices, and a full replacement is quoted separately in writing. We photograph and document the damage for your insurance claim, and we do not inflate the repair to match a payout.',
      },
      {
        question: 'Is the building permit included in a replacement quote?',
        answer:
          'Yes. Replacing a garage door in Florida requires a permit, pulled by a licensed contractor, with the wind rating documented on it. Our new door price from $950 and hurricane-rated door price from $1,800 both include the permit. Replacing only the opener normally does not need one, which is why opener installation from $275 does not carry that cost.',
      },
      {
        question: 'Do you offer a warranty?',
        answer:
          'One year on parts and one year on labor for the work we do. The warranty is written on the invoice rather than promised verbally.',
      },
    ],
  },

  servicesHub: {
    metaTitle: 'Florida Garage Door Services | Prices | Garage Door Fixers',
    metaDescription:
      'Every garage door service we offer in Florida with its starting price: springs from $150, openers from $275, storm damage repair from $150, hurricane-rated doors from $1,800.',
    h1: 'Garage door services in Florida',
    lead:
      'Every service below has its starting price published, and every service page explains what pushes a job above that starting point. That is the whole idea: you should know roughly what this costs before you pick up the phone.',
    answer:
      'We repair and install garage doors and openers across Florida, from Miami-Dade to Jacksonville. Spring replacement starts at $150 per spring, cable repair at $95, opener repair at $95, opener installation at $275, panel replacement at $250, a new wind-rated door at $950 installed and a hurricane-rated door at $1,800 installed. Every job is quoted in writing before work begins.',
    faq: [
      {
        question: 'What garage door services do you offer in Florida?',
        answer:
          'Spring replacement, cable and drum repair, opener repair, opener installation, smart and WiFi opener installation, off-track repair, panel replacement, new door installation, hurricane-rated door installation, storm damage repair, annual tune-ups, and same-day emergency service. Every one has its starting price published on this site.',
      },
      {
        question: 'Which repair is most common?',
        answer:
          'Torsion spring replacement, by a wide margin. A standard spring is rated for about 10,000 cycles, about seven to ten years, and Florida doors cycle hard because the garage is the storage room, the workshop and the second front door. Springs do not fail from cold here; they fail from cycle count, with humidity and salt air corroding the spring and the cable beside it.',
      },
      {
        question: 'Do you charge to come out and look?',
        answer:
          'We quote before we dispatch, based on what you describe, and the number does not change on arrival unless we find something you did not know about, in which case we tell you before doing anything. We do not use a $29 advertised call-out fee to get in the door.',
      },
      {
        question: 'Do you work on commercial garage doors?',
        answer:
          'Our published prices cover residential doors. We do take commercial enquiries, but a rolling steel or high-cycle commercial door is a different job with different parts and a different wind load calculation, so it is quoted individually rather than from this list.',
      },
    ],
  },

  areasHub: {
    metaTitle: 'Garage Door Service Areas in Florida | Garage Door Fixers',
    metaDescription:
      'Where we work: 52 cities across seven Florida regions, from Miami-Dade to Tampa Bay, Orlando, Fort Myers and Jacksonville. Same-day repair with published prices.',
    h1: 'Where we work',
    lead:
      '52 cities across seven regions. The list is weighted by where garages actually are and where doors actually fail, which is why Fort Myers and Kendall sit alongside Miami, Tampa and Orlando.',
    answer:
      'Garage Door Fixers covers Florida in seven regions: Miami-Dade County, Broward County, Palm Beach and the Treasure Coast, Tampa Bay, Central Florida, Southwest Florida and North Florida. Same-day garage door repair is available in all seven, with the same published starting prices everywhere: $150 per spring, $95 for cable repair and $275 for opener installation.',
    faq: [
      {
        question: 'Do you cover the whole state?',
        answer:
          'We work in seven regions: Miami-Dade, Broward, Palm Beach and the Treasure Coast, Tampa Bay, Central Florida, Southwest Florida and North Florida. If your city is not listed, send the address with your quote request and we will tell you honestly whether we can reach you and what the arrival window looks like. Response is fastest in South Florida, Tampa Bay, Orlando and Fort Myers.',
      },
      {
        question: 'Are prices different in different areas?',
        answer:
          'No. The published starting prices are the same in Hialeah as in Naples. What changes the final number is the door, not the ZIP code. A 1960s single on a slab in St. Petersburg is simply a smaller job than a 16 foot impact-rated double in Weston.',
      },
      {
        question: 'What is different about Miami-Dade and Broward?',
        answer:
          'They are the High Velocity Hurricane Zone, the HVHZ, under the Florida Building Code. A replacement door there needs a Miami-Dade Notice of Acceptance rather than a Florida Product Approval, and the accepted route for an unrated door is a rated door rather than a retrofit bracing kit. Repairs cost the same as anywhere else; the rating rule only bites when the door is replaced.',
      },
      {
        question: 'How fast can you reach me?',
        answer:
          'Same day in most of the service area, seven days a week. Response is fastest in the South Florida corridor from Homestead to Jupiter, across Tampa Bay, in the Orlando metro and in Lee and Collier counties, and slightly longer at the edges: Palm Coast, Gainesville, Spring Hill and Melbourne.',
      },
    ],
  },

  buyersGuide: {
    metaTitle: "Garage Door Buyer's Guide for Florida | Garage Door Fixers",
    metaDescription:
      'Which garage door material and opener to choose in Florida, what each costs installed, what wind-rated and impact-rated mean, and what each option is bad at.',
    h1: 'Choosing a garage door and opener in Florida',
    lead:
      'Two decisions, made once, that you live with for twenty years and through every hurricane season in between. This is the honest version: what each material and each drive type actually costs installed in Florida, and what each one is bad at.',
    answer:
      'For most Florida homes a wind-rated steel door is the right choice, installed from $950 for a single, and from about $1,800 for an impact-rated version. Within a few miles of either coast, aluminum or fiberglass avoids the rust problem. Every replacement door needs a Florida Product Approval, or a Miami-Dade NOA in Miami-Dade and Broward, and a building permit. For the opener, choose belt drive if anyone sleeps beside the garage, and add battery backup for $60 to $150, because the power goes out after every storm.',
    faq: [
      {
        question: 'Which garage door material is best for Florida?',
        answer:
          'Steel for most homes, because it is the cheapest strong option and is available wind-rated and impact-rated at every price point, $950 to $3,000 installed. Aluminum or fiberglass within a few miles of the coast, where salt air rusts steel from the bottom section up. Wood only where the house genuinely calls for it, because termites, rot and daily water at the bottom seal are hard on it here. Vinyl where the garage takes abuse.',
      },
      {
        question: 'Which opener should I choose?',
        answer:
          'Belt drive if there is living space beside the garage, because the noise difference is dramatic. Chain drive if noise does not matter, because nothing lasts longer for less. Jackshaft if you have the low headroom of a 1950s to 1970s garage. Whatever the drive, add battery backup: after a storm the power is out and the manual release is not something you want to be finding in the dark.',
      },
      {
        question: 'How much should a new garage door cost in Florida?',
        answer:
          'A new wind-rated door installed starts at $950 and runs to $4,200 depending on size, material, insulation and hardware, with the permit included. A hurricane-rated door with Florida Product Approval or a Miami-Dade NOA runs $1,800 to $6,500, and impact-rated full view glass doors run to $8,000 and above.',
      },
      {
        question: 'What is the difference between wind-rated and impact-rated?',
        answer:
          'A wind-rated door is built to resist the design wind pressure at your site, which every replacement door in Florida must be. An impact-rated door is also tested against large missile impact, and it is what most homeowners mean by a hurricane door. Both come with a Florida Product Approval, or a Miami-Dade NOA in the HVHZ, and both are documented on the permit.',
      },
    ],
  },

  blogHub: {
    metaTitle: 'Garage Door Guides and Costs | Florida | Garage Door Fixers',
    metaDescription:
      'Straight answers on garage door costs, hurricane ratings, storm damage, rust, symptoms, maintenance and how to spot a bait quote, written for Florida homes.',
    h1: 'Garage door guides and costs',
    lead:
      'Written to answer the question rather than to get you on the phone. If a guide here saves you a call, or gets your door ready before the season, that is a fair outcome.',
  },

  faqPage: {
    metaTitle: 'Garage Door FAQ | Florida | Garage Door Fixers',
    metaDescription:
      'What people ask before hiring a garage door company in Florida: what it costs, how fast we get there, hurricane ratings, permits, insurance credits and bait quotes.',
    h1: 'Garage door questions, answered properly',
    lead:
      'These are the things people actually ask before hiring someone, including the ones the trade tends to talk around and the ones that only come up the week before a storm.',
    groups: [
      {
        title: 'Cost',
        items: [
          {
            question: 'How much does garage door repair cost in Florida?',
            answer:
              'Spring replacement starts at $150 per spring, cable repair at $95, opener repair at $95, opener installation at $275, off-track repair at $140, panel replacement at $250, storm damage repair at $150, a new wind-rated door installed at $950 and a hurricane-rated door installed at $1,800. Those are starting prices for a standard single door in normal condition.',
          },
          {
            question: 'What is a fair price for two garage door springs?',
            answer:
              'Roughly $270 to $600 installed for a standard door in this market: $150 to $350 for the first spring and $120 to $250 to do the second at the same visit. Quotes well above that for two standard springs are worth a second opinion. High-cycle springs and 16 foot doubles legitimately cost more, and whoever is quoting should tell you which applies.',
          },
          {
            question: 'Why does my quote differ from the published price?',
            answer:
              'Four things move a job above the starting price: door size, door type and model, the condition of the parts around the failure, and access or timing. In Florida the third one is usually corrosion: a rusted cable often comes with a rusted drum and bottom bracket. We tell you which of those applies before we start, not after.',
          },
          {
            question: 'Do you charge a service call fee?',
            answer:
              'Not as a separate bait fee. We quote the job before dispatch based on what you describe. Genuine emergency or after-hours dispatch carries a $150 to $300 call-out premium, stated before we send anyone.',
          },
          {
            question: 'How much does a hurricane-rated garage door cost?',
            answer:
              'From $1,800 installed for a single impact-rated steel door, running to $6,500 for larger, insulated or HVHZ doors, with the permit included. Impact-rated full view glass runs to $8,000 and above. Storm damage repair on an existing door starts at $150, and a retrofit bracing kit with Florida Product Approval is an option outside Miami-Dade and Broward.',
          },
        ],
      },
      {
        title: 'Speed and emergencies',
        items: [
          {
            question: 'Can you come today?',
            answer:
              'Usually, seven days a week, Monday to Friday 7:00 to 20:00, Saturday 8:00 to 18:00 and Sunday 9:00 to 17:00. You get a real arrival window before we dispatch rather than a vague promise, and if it slips we tell you.',
          },
          {
            question: 'My car is trapped in the garage. What do I do?',
            answer:
              'Do not run the opener. If a spring has snapped the door is dead weight and forcing it can bend panels or drop the door. Most doors have a manual release cord, and with a second person the door can usually be lifted and propped. Then stop using it and call us.',
          },
          {
            question: 'The door is stuck open and I cannot secure the house. Is that an emergency?',
            answer:
              'Yes, and we treat it as one. An open garage on an attached house is a security problem, not an inconvenience. Same-day emergency service is available with the $150 to $300 call-out premium stated up front.',
          },
          {
            question: 'The power is out after a storm and the door will not open. Is that an emergency?',
            answer:
              'Usually not a repair at all. Pull the red manual release cord and lift the door by hand; a balanced door lifts easily. If it will not lift or the door is bent or off its track, that is storm damage and we assess it from $150. An opener with battery backup, $60 to $150 extra at installation, avoids the problem next time.',
          },
        ],
      },
      {
        title: 'Safety and using the door',
        items: [
          {
            question: 'Can I use my garage door with a broken spring?',
            answer:
              'No. The springs carry the weight, not the opener. Running the opener on a broken spring strains the motor, bends panels and can drop the door. Leave it alone until it is fixed.',
          },
          {
            question: 'Why should I not replace a torsion spring myself?',
            answer:
              'A torsion spring under tension stores enough energy to break bones, and it releases that energy instantly if it is not unwound under control with winding bars. Emergency rooms see the results of this every year. It is the one job on a garage door that genuinely should not be attempted.',
          },
          {
            question: 'My door reverses immediately after it closes. Why?',
            answer:
              'Usually the photo eye safety sensors are misaligned or something is breaking the beam, or the down force is set too low. Both are quick to correct. It can also mean the door is out of balance and the opener is tripping its own safety limit.',
          },
          {
            question: 'How do I know if my door is balanced?',
            answer:
              'Pull the manual release, lift the door halfway by hand, and let go. A balanced door stays put. If it drops or rises on its own, the spring is not matched to the door, and the opener has been doing work it was never meant to do.',
          },
        ],
      },
      {
        title: 'Hurricanes, code and insurance',
        items: [
          {
            question: 'Does my garage door have to be hurricane rated?',
            answer:
              'Any replacement door does. The Florida Building Code requires the door to be rated for the design wind pressure at the site, because the garage door is the largest opening in the house and when it fails the house pressurizes and the roof is at risk. An older unrated door can stay in service, and a retrofit bracing kit with Florida Product Approval is an option in most of the state, though nothing makes a door hurricane proof.',
          },
          {
            question: 'What is the difference between wind-rated and impact-rated?',
            answer:
              'A wind-rated door is built to resist pressure. An impact-rated door is also tested against large missile impact and is what most people mean by a hurricane door. Both carry a Florida Product Approval, an FL number, or a Miami-Dade NOA in the HVHZ. Impact-rated doors install from $1,800.',
          },
          {
            question: 'What is the HVHZ and why does the Miami-Dade NOA matter?',
            answer:
              'Miami-Dade and Broward counties are the High Velocity Hurricane Zone. A replacement door there needs a Miami-Dade Notice of Acceptance, which is a stricter approval than the Florida Product Approval used elsewhere, and the accepted route for an unrated door is a rated door rather than a bracing kit. If a quote in Coral Springs or Kendall does not mention the NOA, ask.',
          },
          {
            question: 'Do I need a permit to replace my garage door in Florida?',
            answer:
              'Yes. The permit is pulled by a licensed contractor and the wind rating is documented on it. It is included in our replacement quotes from $950. Replacing only the opener normally does not need a permit. A door installed without one is a problem at sale time and at claim time, which is the trap out of state crews leave behind after a storm.',
          },
          {
            question: 'Will a rated garage door lower my insurance?',
            answer:
              'It may. The wind mitigation inspection, form OIR-B1-1802, records whether openings including the garage door have rated protection, and a rated door can contribute to a premium credit under the mitigation discount rules. Ask your insurer for the credit schedule; we do not promise a dollar figure. When the My Safe Florida Home program is open it has offered grants toward opening protection, including garage doors.',
          },
        ],
      },
      {
        title: 'Repair or replace',
        items: [
          {
            question: 'Should I repair my door or replace it?',
            answer:
              'Repair when the sections are sound and only wear parts have failed, which is most of the time. Replace when sections are rusted through or bent beyond a matchable panel, when the door has no wind rating and you want the mitigation credit, or when the repair cost approaches half the price of a new door. The best months to replace are March to May, before the season.',
          },
          {
            question: 'How long do garage door springs last?',
            answer:
              'A standard torsion spring is rated for about 10,000 open and close cycles, which for most households is seven to ten years. High-cycle springs are rated for 20,000 or more. In Florida the count runs faster: the garage is the second front door, golf cart communities cycle several times a day, and salt air within a few miles of the coast corrodes the spring before it wears out.',
          },
          {
            question: 'How old is too old for an opener?',
            answer:
              'Anything made before 1993 has no photo eye safety sensors and should be replaced on that basis alone. Past about twenty years, parts availability becomes the deciding factor. Florida garages reach 100°F and more in summer, which cooks logic boards and the plastic gears in older units, so a repair costing more than half a new unit is not worth doing. A new opener installs from $275.',
          },
          {
            question: 'Do I need one spring replaced or both?',
            answer:
              'If the door has two and one broke, both have the same cycle count and the survivor usually follows within months. Replacing both together adds $120 to $250 rather than doubling the cost, because most of the labor is shared. It is your call, and we will do just the one if you prefer.',
          },
        ],
      },
      {
        title: 'Trust',
        items: [
          {
            question: 'How do I spot a bait quote?',
            answer:
              'The tell is a very low advertised number for the visit rather than for the work, the $29 service call being the classic. Ask for the full price of the actual repair, in writing, before anyone is dispatched. A company that will not give you that before arriving is telling you something.',
          },
          {
            question: 'How do I avoid a storm chaser after a hurricane?',
            answer:
              'Ask three things: who is pulling the permit, what the Florida Product Approval or Miami-Dade NOA number of the door is, and for the price in writing before work starts. A crew that cannot answer all three is passing through. Our storm work is quoted from the same published prices as any other week, and we document the damage for your claim.',
          },
          {
            question: 'Are you licensed and insured?',
            answer:
              'Yes. Ask any contractor for both and expect a real answer rather than a slogan on a truck. Every job also carries one year on parts and one year on labor, written on the invoice.',
          },
          {
            question: 'Why do you not show customer reviews?',
            answer:
              'Because we do not have enough real ones yet, and we are not going to write them. When customers leave genuine reviews they will appear here with their names attached. Until then, judge us on the published prices and the written estimate.',
          },
          {
            question: 'Where are you based?',
            answer:
              'We are a service area business covering Florida in seven regions. We travel to the customer and do not receive customers at a location, so we do not publish a street address. We would rather say that than list a mailbox as a showroom.',
          },
        ],
      },
    ],
  },

  about: {
    metaTitle: 'About Garage Door Fixers | Garage Door Repair in Florida',
    metaDescription:
      'Who we are, what we promise and what we will not claim. A newer Florida garage door company that publishes its prices rather than pretending to be old.',
    h1: 'Fast when it breaks, honest when it is quoted',
    lead:
      'Garage Door Fixers repairs and installs garage doors across Florida. We are a newer company, and the whole reason this site publishes its prices is that we cannot win on being old.',
    answer:
      'Garage Door Fixers is a licensed and insured garage door repair and installation company serving Miami-Dade County, Broward County, Palm Beach and the Treasure Coast, Tampa Bay, Central Florida, Southwest Florida and North Florida. We publish our starting prices, provide a written estimate before any work begins, pull the permit on every door replacement, and carry a one year warranty on parts and labor.',
    sections: [
      {
        heading: 'What we are not going to tell you',
        paragraphs: [
          'Every established garage door company in Florida leads with its age. Since 1985. Here before Andrew. Three generations, family owned. Those claims are usually true and they are genuinely worth something.',
          'We do not have them. We are new, and inventing a founding date would be the first dishonest thing we did, which is a poor way to start a relationship with someone who is about to let us into their garage.',
          'So we compete on the thing the established companies will not do. Every price is published before you call. The estimate is written before anything is touched. If a part failed, you get shown the part. Those are not slogans, they are the specific complaints people make about this trade, turned around.',
        ],
      },
      {
        heading: 'Why the prices are on the website',
        paragraphs: [
          'Search for what a garage door repair costs and the results are dominated by directories and cost-estimate sites, not by garage door companies. That is not an accident. The question gets asked constantly and almost nobody in the trade answers it, because a published price is a commitment and a number given in your driveway is not.',
          'The result is the pattern everybody in Florida recognises: a $29 service call, and then a technician who finds cables, drums, bearings and rollers that all need replacing. People have been quoted several times the $270 to $600 it costs to replace two springs properly.',
          'Our answer is the price list. It is not marketing, it is the product.',
        ],
      },
      {
        heading: 'What we will always tell you',
        paragraphs: [
          'When a recommendation genuinely costs you more, we explain why and let you decide. Replacing both springs when one snapped is the clearest example: the surviving spring has the same cycle count as the one that broke and usually follows within months. That is a real recommendation, not an upsell, and the way you can tell the difference is that we will do just the one if you prefer.',
          'The reverse holds too. When a repair is the better spend than a replacement, we say so, even though a replacement is worth several times more to us.',
          'And after a storm we say the same things we say in March. Storm damage repair starts at $150, a replacement is quoted separately in writing with the permit and the rating included, and the numbers do not move because a hurricane came through. We photograph the damage for your claim and we do not inflate the repair to fit the payout. That is the complaint people have after every named storm, and it is the one we are most determined not to earn.',
        ],
      },
      {
        heading: 'How we work',
        paragraphs: [
          'We are a service area business. We travel to you and we do not receive customers at a location, so there is no showroom address published on this site. We would rather say that plainly than list an address that is really a mailbox.',
          'We are licensed and insured, we carry the common spring, cable, roller and hinge sizes so most calls finish in one visit, and we work seven days a week from Miami-Dade to Jacksonville. On every door replacement the permit is pulled by a licensed contractor and the Florida Product Approval or Miami-Dade NOA is documented on it.',
        ],
      },
    ],
    promises: [
      {
        icon: 'price',
        title: 'Prices published before you call',
        text: 'Every price we charge is on the site. You should be able to work out roughly what this costs without speaking to anyone.',
      },
      {
        icon: 'quote',
        title: 'A written estimate before work starts',
        text: 'Not a verbal number in a driveway. Written, before anything is touched, and it does not move once the door is apart.',
      },
      {
        icon: 'warning',
        title: 'No bait call-out fee',
        text: 'We do not advertise a $29 visit and make the margin on parts quoted once the door is in pieces. That pattern is why this trade has the reputation it has.',
      },
      {
        icon: 'shield',
        title: 'The failed part, shown to you',
        text: 'If we say something failed, we show it to you. A rusted cable or a cooked logic board is easy to see. A recommendation you cannot see is a recommendation you cannot check.',
      },
      {
        icon: 'clock',
        title: 'A real arrival window',
        text: 'A window you can plan around, not a day you have to write off, and we tell you if it slips. The same is true the week after a storm.',
      },
      {
        icon: 'check',
        title: 'One year on parts and labor',
        text: 'Written on the invoice rather than promised verbally.',
      },
    ],
  },

  contact: {
    metaTitle: 'Get a Garage Door Quote in Florida | Garage Door Fixers',
    metaDescription:
      'Tell us what happened and we will give you the price before we send anyone. Same-day service across South Florida, Tampa Bay, Orlando and Southwest Florida.',
    h1: 'Tell us what happened',
    lead:
      'The more you tell us, the closer the number we can give you before anyone leaves the yard. There is no obligation and no technician is dispatched until you have agreed the price.',
    symptoms: [
      'Spring snapped, loud bang',
      'Door will not open',
      'Door will not close',
      'Door is off the track',
      'Door stuck halfway',
      'Cable came off',
      'Opener runs but door does not move',
      'Door is noisy',
      'Damaged or dented panel',
      'Storm damage to the door',
      'I want a new door',
      'I want a new opener',
      'Something else',
    ],
    urgency: [
      'Emergency, car trapped or door open',
      'Today if possible',
      'This week',
      'Just getting a price',
    ],
    faq: [
      {
        question: 'What happens after I send this?',
        answer:
          'We read what you wrote, come back to you with a price range for that specific problem, and give you an arrival window. Nobody is dispatched and nothing is charged until you have the number and have said yes.',
      },
      {
        question: 'How quickly will you reply?',
        answer:
          'Within business hours, quickly. Outside them, first thing the next morning unless you have marked it as an emergency, in which case we treat it as one. In the days after a named storm we answer in the order requests arrive and tell you honestly where you are in the queue.',
      },
      {
        question: 'Do I have to phone?',
        answer:
          'No. This form is enough. Leave a number if you would rather talk it through, and leave an email if you would rather have the quote in writing to read at your own pace. If it is storm damage, a photo of the door helps us quote it accurately.',
      },
    ],
  },
};
