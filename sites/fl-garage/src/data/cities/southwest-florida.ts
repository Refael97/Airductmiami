/**
 * Southwest Florida: the eight service-area pages for Lee, Collier,
 * Sarasota, Manatee and Charlotte counties, per research/fl-garage/BRIEF.md
 * section 6.
 *
 * This is the part of the state where Hurricane Ian (28 September 2022)
 * rebuilt or damaged a large share of the garage doors, and where Helene
 * and Milton (September and October 2024) did it again along the Sarasota
 * and Manatee coast. Every entry states something true about the housing
 * era, the salt, the storms, or the doors installed in the 2023 wave.
 */

import type { City } from '../types';

export const southwestFloridaCities: City[] = [
  /* ---------------- Lee County ---------------- */
  {
    slug: 'fort-myers',
    name: 'Fort Myers',
    region: 'southwest-florida',
    county: 'Lee County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Fort Myers, FL | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Fort Myers, FL. Spring replacement from $150, storm damage repair from $150, opener installation from $275. Same day across Lee County, written quote first.',
    answer:
      'Garage door repair in Fort Myers starts at $150 per spring, $95 for cable repair and $275 for a new opener installed. Same-day service is available across Lee County seven days a week, and on storm damage we assess the door, secure the opening and put the repair or replacement price in writing before any work.',
    intro: [
      'Hurricane Ian came ashore at Cayo Costa on 28 September 2022 as a Category 4 storm with sustained winds near 150 mph, pushed a surge of more than 10 feet through Fort Myers Beach and up the Caloosahatchee, and put hurricane force wind across the rest of Lee County. The garage door was the opening that failed most often. In 2023 more doors were replaced in and around Fort Myers than in any normal decade, most of them wind-rated steel singles and 16 foot doubles fitted fast by crews from all over the state. Those doors are now three years old. The ones we open up show a pattern: a permit that was pulled but never closed, springs sized by guess rather than by door weight, and a rating label that nobody kept.',
      'The housing under those doors ranges widely. The McGregor corridor and Whiskey Creek are 1960s and 1970s ranches with single doors and low headroom, often on the third or fourth set of springs of their life. Gateway and Pelican Preserve are 1990s and 2000s builds with doubles and three car garages behind HOA rules on color and style. Salt air off the river and the Gulf rusts cables and bottom brackets on the older stock, and summer garages above 100°F cook the logic boards in openers of every age. Southwest Florida is outside the HVHZ, so a replacement door here needs a Florida Product Approval number rather than a Miami-Dade NOA, and it still needs a permit pulled by a licensed contractor.',
    ],
    localNotes: [
      'The largest post-Ian replacement wave in the state: thousands of doors installed in 2023 by crews that have since left',
      'McGregor corridor and Whiskey Creek: 1960s and 1970s singles with low headroom',
      'Gateway and Pelican Preserve: 1990s and 2000s doubles and three car garages under HOA rules',
      'River and Gulf salt air, so a rusted cable at the bottom bracket is the most common warning we find',
    ],
    nearby: ['cape-coral', 'bonita-springs', 'naples', 'port-charlotte'],
    faq: [
      {
        question: 'My door was installed in 2023 after Ian. Is it still under warranty?',
        answer:
          'Two warranties were involved and they behave differently. The manufacturer warranty on the door and its hardware follows the door, and the label on the inside of a section, usually on an end stile or the top panel, gives the maker, the model and the date we need to check it. The labor warranty came from the installer, and many of the companies that worked Lee County in 2023 no longer answer the phone here. We cannot honor another company\'s labor warranty. We can tell you what actually failed, fix it at our published prices, and if the failure looks like a manufacturer defect we say so and give you the photos for the claim. A spring on a 10,000 cycle door that opens six to eight times a day reaches its rating in about four to five years, so a 2023 spring failing now is usually wear, not a defect.',
      },
      {
        question: 'We are still dealing with storm damage. Will you tell us honestly whether the door can be repaired?',
        answer:
          'Yes, and in writing. Storm damage repair starts at $150 for the assessment and bracing. If one section is bent and the track is straight, panel replacement runs $250 to $800 per section while the profile is still made. If two or more sections are pushed inward and the track is twisted, the honest answer is a replacement, quoted separately from $950 for a wind-rated steel door with the permit included. We do not inflate storm repairs. The insurance claim is yours; we give you the photos and the itemized quote your adjuster asks for.',
      },
      {
        question: 'Does a new door in Fort Myers need a permit?',
        answer:
          'Yes. Replacing a garage door anywhere in Florida needs a building permit pulled by a licensed contractor, with the wind rating documented on the permit. In Lee County that means a door with a Florida Product Approval number; the Miami-Dade NOA is only required in the HVHZ counties. Replacing only the opener normally does not need a permit. A new wind-rated door starts at $950 installed and an impact-rated door at $1,800, permit included in the quote.',
      },
    ],
  },
  {
    slug: 'cape-coral',
    name: 'Cape Coral',
    region: 'southwest-florida',
    county: 'Lee County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Cape Coral, FL | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Cape Coral, FL. Spring replacement from $150, cable repair from $95, new wind-rated door from $950. Salt air hardware on canal lots, same day, written quote first.',
    answer:
      'Garage door repair in Cape Coral starts at $150 per spring, $95 for cable repair and $275 for a new opener installed. We cover the whole city, from Cape Harbour and the southwest canals to the newer blocks north of Pine Island Road, same day, seven days a week, with corrosion resistant hardware for doors that face salt water.',
    intro: [
      'Cape Coral was platted in the late 1950s around more than 400 miles of canals, and the houses came in waves: the Yacht Club area and the southeast first, the southwest through the 1970s and 1980s, and the blocks north of Pine Island Road mostly since 2000. Almost every house is a single story CBS ranch on a slab with an attached two car garage and one 16 foot door. On a canal lot that door faces salt water on at least one side, and the hardware shows it. Cables fray at the bottom bracket, hinges seize, rollers lock in the track, and the torsion tube pits under a spring that still looks fine from the floor.',
      'Ian pushed surge up the canals on 28 September 2022 and put hurricane force wind across the whole city. Doors on the southwest and southeast canals took water; doors everywhere took wind. A large share of Cape Coral\'s doors were replaced in 2023, many by out of town crews on a permit that was pulled in a hurry. When we open one of those now, we check the spring size against the door weight, the track anchoring in the block, and whether the Florida Product Approval label is still on the door, because that label is what an insurer or a wind mitigation inspector will ask for. Southwest Florida is outside the HVHZ, but a replacement here still needs an FL number and a county permit pulled by a licensed contractor.',
    ],
    localNotes: [
      'Canal lots on more than 400 miles of waterway, so salt corrosion on cables, hinges and bottom brackets is the normal condition',
      'Single story CBS ranches with one 16 foot double door, 1970s in the southwest through 2000s north of Pine Island Road',
      'Heavy 2023 replacement after Ian\'s surge; we check spring sizing, anchoring and the rating label on those doors',
      'Galvanized or stainless hardware is the right replacement within a few blocks of the water',
    ],
    nearby: ['fort-myers', 'bonita-springs', 'port-charlotte', 'naples'],
    faq: [
      {
        question: 'The bottom of my door sat in surge water during Ian and was never replaced. Is it still safe?',
        answer:
          'Have it looked at. Salt water in the bottom section attacks the bottom brackets, and the bottom bracket is the part under full spring and cable tension. A bracket that lets go drops one side of the door. We inspect the brackets, cables and bottom section on a service call. If the section is sound and only the hardware has rusted, cable and bracket work runs $95 to $300. If the bottom section itself has rusted through, panel replacement is $250 to $800 while the profile is still made, and if the section, track and brackets have all gone the honest number is a new door from $950.',
      },
      {
        question: 'Can you use hardware that will not rust on a canal lot?',
        answer:
          'We can slow it down a great deal. Galvanized or stainless cables, galvanized hinges, nylon rollers with sealed bearings and a coated torsion spring all last longer in Cape Coral air than plain steel. Nothing is rust proof this close to salt water, so the other half of the answer is an annual tune-up, $85 to $160, in April or May before the season, where we lubricate and check every wear point.',
      },
      {
        question: 'How fast can you get to Cape Coral?',
        answer:
          'Same day in most cases, seven days a week. The city covers more than 100 square miles and the bridges over the river slow everything down at rush hour, so give us the cross street when you call and we will confirm the arrival window for your part of the Cape. Emergency dispatch carries a call-out premium of $150 to $300, stated before we leave.',
      },
    ],
  },
  {
    slug: 'bonita-springs',
    name: 'Bonita Springs',
    region: 'southwest-florida',
    county: 'Lee County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Bonita Springs, FL | From $150',
    metaDescription:
      'Garage door repair in Bonita Springs, FL. Springs from $150, opener installation from $275, new door from $950 with permit. Gate access arranged in advance and a written quote before work.',
    answer:
      'Garage door repair in Bonita Springs starts at $150 per spring, $95 for cable repair and $275 for a new opener installed. We work inside the gates at Bonita Bay, Pelican Landing and the communities along Bonita Beach Road, same day, with gate access arranged before we drive out and invoices sent to owners who are out of state.',
    intro: [
      'Bonita Springs sits between Fort Myers and Naples on the Lee County line, and most of its housing is 1980s to 2010s and behind a gate. Bonita Bay alone covers about 2,400 acres of golf communities with three car garages and carriage style doors under HOA color rules; Pelican Landing, Spanish Wells and the communities along Bonita Beach Road follow the same pattern at different price points. East of I-75 the lots are larger and the doors are more often builder grade steel doubles from the 2000s. Most owners are seasonal. The door that fails in July is found in November, often by the neighbor who noticed it stopped half open.',
      'Ian\'s surge came up the Imperial River and across Bonita Beach in September 2022, and the wind reached every community in the city. The doors replaced in 2023 are now three years old, and the questions we get are about warranty, about permits that were pulled and never closed, and about doors installed without the wind rating the community required. Southwest Florida is outside the HVHZ, so a door here needs a Florida Product Approval number rather than a Miami-Dade NOA, but the county permit is still mandatory and the HOA architectural review usually is too. We handle the county side and give you the spec sheet the HOA asks for.',
    ],
    localNotes: [
      'Gated golf communities from Bonita Bay to Pelican Landing, with HOA rules on door style and color',
      'Three car garages and carriage style doors in the 1990s to 2010s builds',
      'Seasonal owners, so a failure can wait months and we coordinate access through gates and property managers',
      'Ian surge along the Imperial River and Bonita Beach in 2022, and a 2023 replacement wave now outside most labor warranties',
    ],
    nearby: ['naples', 'fort-myers', 'cape-coral'],
    faq: [
      {
        question: 'Can you get through the gate in a gated community?',
        answer:
          'Yes. Add us to the guest list at the gatehouse, give us the gate code, or have your property manager meet us. We call ahead with the technician\'s name and arrival window so the gate has it on file. If you are out of state, we can do the whole job through your manager or caretaker and send the written estimate, the photos and the invoice by email.',
      },
      {
        question: 'My HOA has to approve a new door. Do you handle that?',
        answer:
          'We give you what the review board needs: the manufacturer spec sheet, the Florida Product Approval number, the color and panel style, and a drawing where the HOA asks for one. You submit it, because the HOA deals with the owner. Once it is approved we pull the Lee County permit and install. A new wind-rated steel door starts at $950 installed and an impact-rated door at $1,800, both with the permit in the quote.',
      },
      {
        question: 'The company that replaced our door in 2023 is gone. Who honors the warranty?',
        answer:
          'The manufacturer parts warranty stays with the door and can still be claimed through any dealer for that brand; the labor warranty left with the installer. We are not able to honor another company\'s labor promise. What we do is diagnose the failure, fix it at the published prices, and tell you if it looks like a defect worth a manufacturer claim. Our own work carries one year on parts and one year on labor, written on the invoice.',
      },
    ],
  },
  /* ---------------- Collier County ---------------- */
  {
    slug: 'naples',
    name: 'Naples',
    region: 'southwest-florida',
    county: 'Collier County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Naples, FL | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Naples, FL. Spring replacement from $150, opener installation from $275, impact-rated door from $1,800. Three car garages, seasonal owners, same day, written quote.',
    answer:
      'Garage door repair in Naples starts at $150 per spring, $275 for a new opener installed and $1,800 for an impact-rated door installed with a permit. We work the three car garages, full view glass doors and gated communities from Pelican Bay to Lely, and we schedule around seasonal residents who are not here to open the door for us.',
    intro: [
      'Naples has more three car garages and more high value doors per street than anywhere else we cover in Southwest Florida. Pelican Bay, Park Shore and the North Naples communities are 1980s to 2000s builds, many with a double and a single door, some with full view aluminum and impact glass doors that run above $8,000 installed. Golden Gate Estates is the opposite: large lots east of Collier Boulevard on well water, with detached garages and workshop doors that cycle hard. Lely and East Naples fall in between, 1970s to 2000s subdivisions with the standard 16 foot double. Collier County\'s design wind pressures along the coast are among the highest in the state outside the HVHZ, so a replacement door here is specified for pressure and, for most of our customers, for impact as well.',
      'A large share of Naples leaves in May and comes back in November, and that is when the calls arrive. A spring that snapped in August sat under a locked door for three months; an opener whose logic board failed in a July power outage is discovered by the caretaker or by the owner on the first evening back. Ian\'s surge in September 2022 reached Port Royal, Old Naples and the low streets along Naples Bay, and doors that took water then and were dried out rather than replaced are the ones failing at the bottom brackets now. We coordinate with property managers, take keypad and gate codes in advance, and send the photos and the written invoice to an owner in another state.',
    ],
    localNotes: [
      'Three car garages with a double and a single door are the norm in builds after 2000',
      'Full view aluminum and impact glass doors in Pelican Bay, Park Shore and the beach communities',
      'Golden Gate Estates: large lots, detached garages and workshop doors on well water',
      'Seasonal owners: we work through property managers and send photos and invoices out of state',
    ],
    nearby: ['bonita-springs', 'fort-myers', 'cape-coral'],
    faq: [
      {
        question: 'I am out of state until November. Can you fix the door without me there?',
        answer:
          'Yes. Your property manager, caretaker or a neighbor with the gate code lets us in, we send you the written estimate with photos by email, and nothing is touched until you approve it by reply. When the work is done you get the invoice and the after photos the same day. Most seasonal owners have us do the tune-up, $85 to $160, in October so the door is right before they arrive.',
      },
      {
        question: 'Is an impact-rated glass door worth it here?',
        answer:
          'If you want a full view door in Naples it has to be impact-rated anyway; the wind pressures on the Collier coast rule out the ordinary version. An impact-rated glass door with Florida Product Approval is tested against large missile impact as well as pressure, and it runs $8,000 and above installed for a full view double. It counts as rated opening protection on a wind mitigation inspection, form OIR-B1-1802, which may qualify you for a premium credit. Ask your insurer for the credit schedule; we never promise a dollar figure.',
      },
      {
        question: 'Ian put water in my garage but the door still works. Should I worry?',
        answer:
          'Have the bottom of the door checked before the next season. Salt water sits in the bottom brackets, the cable ends and the roller bearings, and those parts rust from the inside where you cannot see it. The bottom bracket carries the full spring load, so a corroded one is the part we least want to find by accident. A tune-up at $85 to $160 covers the inspection; if cables and brackets need replacing that runs $95 to $300.',
      },
    ],
  },
  /* ---------------- Sarasota County ---------------- */
  {
    slug: 'sarasota',
    name: 'Sarasota',
    region: 'southwest-florida',
    county: 'Sarasota County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Sarasota, FL | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Sarasota, FL. Spring replacement from $150, cable repair from $95, storm damage repair from $150. Same day from the city to Lakewood Ranch, written quote before work.',
    answer:
      'Garage door repair in Sarasota starts at $150 per spring, $95 for cable repair and $275 for a new opener installed. We cover the city\'s 1950s ranches, Palmer Ranch to the south and the new construction east toward Lakewood Ranch, same day, seven days a week, with a written estimate before any work.',
    intro: [
      'Sarasota\'s housing splits by decade as you drive east. The city itself has 1920s Mediterranean revival blocks and a large stock of 1950s and 1960s ranches, some of them Sarasota School mid century houses with flat roofs and low garages that were never meant for a modern sectional door with a rail opener. Palmer Ranch to the south is 1980s to 2000s master planned, with doubles and three car garages under HOA rules. Lakewood Ranch, across the county line in Manatee, has been adding thousands of houses a year, and its builder grade doors and chain drive openers from the 2000s and 2010s are reaching their first spring and gear failures together.',
      'Sarasota was on the edge of Ian in 2022, then took Helene\'s surge along the barrier islands in September 2024 and Milton\'s landfall at Siesta Key on 9 October 2024. The doors we see now show all three: salt water damage at the bottom section on Siesta Key, Lido and the bayfront streets, wind damage inland from Milton, and hardware that has been rusting in Gulf air for decades on the older ranches. Southwest Florida is outside the HVHZ, so a replacement needs a Florida Product Approval number and a permit from the city or the county, pulled by a licensed contractor. Replacing only the opener normally does not need one.',
    ],
    localNotes: [
      '1950s and 1960s ranches in the city, some with headroom so low that a jackshaft opener is the only fit',
      'Palmer Ranch and Lakewood Ranch: master planned doubles and three car garages with builder grade openers aging at once',
      'Helene surge on Siesta Key, Lido and the bayfront in September 2024, then Milton\'s landfall at Siesta Key on 9 October 2024',
      'Gulf salt air on every door west of US 41',
    ],
    nearby: ['bradenton', 'venice', 'port-charlotte'],
    faq: [
      {
        question: 'Milton bent my door but it still opens. Do I need to do anything?',
        answer:
          'Yes. A section that has been pushed inward has lost the stiffness the wind rating depends on, so the door will open and close and still fail in the next storm. Storm damage repair starts at $150 for the assessment. One bent section with a straight track is a panel replacement at $250 to $800 while the profile is still made. Two or more sections plus a twisted track is a replacement, quoted separately from $950 for a wind-rated door with the permit included. We tell you which one it is before you decide.',
      },
      {
        question: 'My 1950s house has almost no room above the door. What are the options?',
        answer:
          'Two things fit. A low headroom track kit moves the curve of the track and the spring so the door clears the ceiling, and a wall mounted jackshaft opener, $450 to $800 installed, drives the torsion bar from beside the door with no rail overhead. We measure the headroom, the side room and the backroom and tell you which one your garage actually takes before we quote.',
      },
      {
        question: 'When should I have the door serviced before hurricane season?',
        answer:
          'March to May. Hurricane season runs 1 June to 30 November, and a tune-up at $85 to $160 in the spring finds the rusted cable, the loose track lag or the worn spring while there is time to fix it at the normal price rather than as an emergency after a storm.',
      },
    ],
  },
  {
    slug: 'venice',
    name: 'Venice',
    region: 'southwest-florida',
    county: 'Sarasota County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Venice, FL | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Venice, FL. Spring replacement from $150, cable repair from $95, opener installation from $275. Island, Venice Gardens and South Venice, same day, written quote first.',
    answer:
      'Garage door repair in Venice starts at $150 per spring, $95 for cable repair and $275 for a new opener installed. We cover the island, Venice Gardens, South Venice and the newer communities east of I-75, same day, seven days a week, and we say plainly when the right answer is a spring rather than a door.',
    intro: [
      'Venice has one of the oldest median ages of any city in Florida, and its garage doors are on a schedule. The island and Venice Gardens are 1950s to 1970s ranches with a single door and often a converted or half converted garage; South Venice is the same era at a lower price; the communities east of I-75 are 1990s to 2020s, with doubles, HOA rules and openers bought in bulk by builders. A door in a retirement household cycles at least twice a day for errands, golf and the dog, and many of the older ones are still on springs installed in the 1990s. Salt air off the Gulf and the Intracoastal does the rest, and a rusted cable at the bottom bracket is the most common thing we find on a service call here.',
      'Milton came ashore at Siesta Key on 9 October 2024, about 15 miles up the coast, and Venice took hurricane force wind; Helene\'s surge two weeks earlier had already put water into garages along the Intracoastal. Two years on we still open doors with bent top sections and tracks that were pushed back into line rather than replaced. Southwest Florida is outside the HVHZ, so a replacement here needs a Florida Product Approval door and a Sarasota County or city permit pulled by a licensed contractor, and we quote the permit inside the price. We also tell you when the right answer is a $150 spring rather than a $950 door, because that is the question everyone here asks first.',
    ],
    localNotes: [
      'The island and Venice Gardens: 1950s to 1970s singles, many still on springs installed in the 1990s',
      'Retirement households cycle doors several times a day, so springs reach 10,000 cycles early',
      'Gulf and Intracoastal salt air; a rusted cable at the bottom bracket is the standard finding',
      'Milton in October 2024 and Helene in September 2024 left bent top sections still in service',
    ],
    nearby: ['sarasota', 'bradenton', 'port-charlotte'],
    faq: [
      {
        question: 'Is it the spring, or do I need a whole new door?',
        answer:
          'Usually the spring. A broken torsion spring on a sound door is $150 to $350 installed, and if the second spring is the same age we recommend doing both together, which adds $120 to $250 and saves a second visit within the year. We recommend a new door, from $950, only when sections are rusted through or bent, the track is beyond straightening, or the door has no wind rating and you want one before the season. We show you the reason on the door, not on a brochure.',
      },
      {
        question: 'I only come down for the season. Can you service the door before I arrive?',
        answer:
          'Yes. A caretaker, property manager or neighbor lets us in, we do the tune-up at $85 to $160, and we email you the findings with photos. If something needs replacing we send the written estimate and wait for your approval; nothing beyond the tune-up is done without it.',
      },
      {
        question: 'How fast can you get to Venice?',
        answer:
          'Same day in most cases, seven days a week. Venice sits between Sarasota and Port Charlotte on our map, so a technician is usually already on that stretch of US 41 or I-75. Emergency dispatch carries a call-out premium of $150 to $300, stated before we leave.',
      },
    ],
  },
  /* ---------------- Manatee County ---------------- */
  {
    slug: 'bradenton',
    name: 'Bradenton',
    region: 'southwest-florida',
    county: 'Manatee County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Bradenton, FL | From $150 | Same Day',
    metaDescription:
      'Garage door repair in Bradenton, FL. Spring replacement from $150, opener installation from $275, new wind-rated door from $950. West Bradenton to Lakewood Ranch, same day, written quote.',
    answer:
      'Garage door repair in Bradenton starts at $150 per spring, $95 for cable repair and $275 for a new opener installed. We cover West Bradenton\'s 1970s ranches, the 55 plus communities along State Road 70 and Lakewood Ranch to the east, same day, seven days a week, with a written estimate before any work.',
    intro: [
      'Bradenton is the Manatee County seat, and its housing is mostly 1970s to 1990s: West Bradenton and the neighborhoods toward Anna Maria Island are single story CBS ranches with one double door, and a large share of the owners are retired. The 55 plus and golf cart communities along State Road 70 run their doors several times a day, which is why a 10,000 cycle spring that lasted 15 years elsewhere lasts seven or eight here. East of I-75, Lakewood Ranch is the other Bradenton, 1990s to today, with three car garages, HOA color rules and builder grade openers that are reaching gear and logic board failures in batches.',
      'Salt air comes off the Gulf and Tampa Bay, and the bottom of a Bradenton door shows it: rusted cables, bottom brackets with the galvanizing gone, and rollers seized in the track. Helene\'s surge in September 2024 put water into garages on Anna Maria Island, in Cortez and on the low streets near the Manatee River, and Milton crossed the county the next month. Southwest Florida is outside the HVHZ, so a replacement here needs a Florida Product Approval door and a Manatee County or city permit pulled by a licensed contractor. Bracing kits with an FL number are a legitimate option on a sound older door, and we say which case applies before quoting.',
    ],
    localNotes: [
      'West Bradenton: 1970s and 1980s CBS ranches with single 16 foot doors',
      '55 plus and golf cart communities that cycle doors several times a day',
      'Lakewood Ranch: builder grade doors and openers from the 2000s and 2010s failing in batches',
      'Helene surge on Anna Maria Island, Cortez and the river streets in September 2024',
    ],
    nearby: ['sarasota', 'venice', 'port-charlotte'],
    faq: [
      {
        question: 'I am retired and on a fixed budget. Will you tell me if it is only a spring?',
        answer:
          'Yes. A spring is $150 to $350 installed and that is what most calls in Bradenton turn out to be. If the second spring is the same age we explain why doing both together, an extra $120 to $250, is cheaper than a second call-out in a few months, and you decide. We do not turn a spring call into a door sale when the door is sound. When a door genuinely needs replacing we show you why on the door itself.',
      },
      {
        question: 'Do I need a hurricane door, or is a bracing kit enough?',
        answer:
          'Outside the HVHZ a retrofit bracing kit with a Florida Product Approval is a legitimate way to bring a sound older door up to a wind rating, and it costs far less than a door. It does not make the door hurricane proof; nothing does. If the sections are rusted, bent or delaminating, bracing a weak door is wasted money and the answer is a new wind-rated door from $950 or an impact-rated door from $1,800, permit included. We assess the door and tell you which case you are in.',
      },
      {
        question: 'Will a rated door lower my insurance?',
        answer:
          'It may. Florida\'s wind mitigation inspection, form OIR-B1-1802, records whether the garage door has rated protection, and a rated door can contribute to a premium credit under the state\'s mitigation discount rules. The amount depends on your insurer and the rest of the house, so ask your insurer for the credit schedule. We give you the product approval documentation the inspector needs.',
      },
    ],
  },
  /* ---------------- Charlotte County ---------------- */
  {
    slug: 'port-charlotte',
    name: 'Port Charlotte',
    region: 'southwest-florida',
    county: 'Charlotte County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Port Charlotte, FL | From $150',
    metaDescription:
      'Garage door repair in Port Charlotte, FL. Spring replacement from $150, storm damage repair from $150, new wind-rated door from $950 with permit. Honest post-Ian assessments, same day.',
    answer:
      'Garage door repair in Port Charlotte starts at $150 per spring, $95 for cable repair and $275 for a new opener installed. Charlotte County took Ian\'s second landfall in 2022 and Charley\'s direct hit in 2004, so we assess storm damage honestly, secure the opening, and quote the repair or the replacement in writing before any work.',
    intro: [
      'Port Charlotte was platted by General Development in the 1950s, and most of its houses were built in the 1970s and 1980s: single story CBS ranches on quarter acre lots with an attached garage and a 16 foot door, many on canals that reach Charlotte Harbor. Deep Creek to the north is 1980s and 1990s and deed restricted; Punta Gorda Isles across the harbor is canal front with larger doors and more three car garages. Charlotte County has been through this twice. Hurricane Charley crossed the harbor on 13 August 2004 and replaced a generation of doors; Ian made its second Florida landfall near Punta Gorda on 28 September 2022 and did it again. So the door on a Port Charlotte house today is usually a 2005 door, a 2023 door, or an original that somehow survived both.',
      'The 2005 doors are twenty years old and their springs are at the end of their cycle life. The 2023 doors were installed in a hurry, often by crews that are no longer in the county, and the calls we get are about springs that were never sized to the door, tracks lagged into soft block, and permits that still show as open. Southwest Florida is outside the HVHZ, so a replacement door here needs a Florida Product Approval number and a Charlotte County permit pulled by a licensed contractor. Salt air from the harbor and the canals corrodes cables and bottom brackets on every era of door, and the afternoon storms keep water at the bottom seal from June through November.',
    ],
    localNotes: [
      '1970s and 1980s CBS ranches with single 16 foot doors, many on canals to Charlotte Harbor',
      'Doors replaced after Charley in 2004 and 2005 are now at spring end of life',
      'Doors replaced after Ian in 2023 come with warranty and permit questions we answer plainly',
      'Deep Creek and Punta Gorda Isles: deed restricted and canal front, with larger doors',
    ],
    nearby: ['fort-myers', 'cape-coral', 'venice', 'sarasota'],
    faq: [
      {
        question: 'How do I find out whether the permit on my post-Ian door was ever closed?',
        answer:
          'Charlotte County\'s building division can look up the permit by address and tell you whether a final inspection was passed. If the permit is still open, the contractor who pulled it is the one who has to call for the final, and if that company has left the area the county will tell you what your options are. What we can do right away is inspect the door, check the rating label, the spring sizing and the track anchoring, and tell you in writing whether the installation is sound. That is the first thing you need to know either way.',
      },
      {
        question: 'Will you inflate a storm repair so the insurance covers more?',
        answer:
          'No. That is the complaint people in Charlotte County have after every hurricane and we will not be the reason for it. Storm damage repair starts at $150 for the assessment and bracing, a repair is quoted at the same published prices as any other day, and a replacement is quoted separately from $950. The claim is yours. We give you the photos, the itemized quote and the product approval documents, and the adjuster sees the same numbers you do.',
      },
      {
        question: 'My door went in after Charley. Should I replace the springs or the whole door?',
        answer:
          'Usually the springs. A door installed in 2004 or 2005 was built under the Florida Building Code that took effect in 2002, so it is normally wind-rated and carries a label saying so. If the label is there and the sections and track are sound, new springs at $150 to $350 each, and fresh cables and rollers if the salt has had them, give you years more service. If the label is gone, the bottom section is rusted through or the door has been pushed out of square, a new door from $950 with the permit included is the better spend. We check all of that on the first visit.',
      },
    ],
  },
];
