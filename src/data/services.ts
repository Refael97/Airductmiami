/**
 * The 10 core services. Each object drives one page at /services/{slug}
 * (via src/pages/services/[service].astro) plus cards on hubs and the home page.
 *
 * Content is written "answer-first" (the `answer` field is a concise, quotable
 * definition an AI engine can lift verbatim) followed by depth, benefits, a
 * process, and an FAQ that also becomes FAQPage structured data.
 */

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string; // full H1 / title, e.g. "Air Duct Cleaning"
  shortName: string; // nav / card label
  icon: string; // inline emoji/glyph used as a lightweight icon
  metaTitle: string;
  metaDescription: string;
  /** One-sentence quotable definition shown first on the page. */
  answer: string;
  /** 2 to 3 intro paragraphs of supporting detail. */
  intro: string[];
  benefits: { title: string; text: string }[];
  process: { title: string; text: string }[];
  /** Extractable facts (price range, frequency, duration) for AI + featured snippets. */
  quickFacts: { label: string; value: string }[];
  faq: FAQ[];
  related: string[]; // slugs of related services
}

export const services: Service[] = [
  {
    slug: 'air-duct-cleaning',
    name: 'Air Duct Cleaning',
    shortName: 'Air Duct Cleaning',
    icon: '🌬️',
    metaTitle: 'Air Duct Cleaning in Florida | From $300',
    metaDescription:
      'Air duct cleaning across Florida from $300, to NADCA source-removal standard. You get the price before we book, not after. Licensed and insured.',
    answer:
      'Air duct cleaning is the professional removal of dust, debris, mold, and allergens from the supply and return ductwork of your HVAC system using negative-air (source-removal) equipment. In Florida, it is typically recommended every 3 to 5 years to protect indoor air quality and system efficiency.',
    intro: [
      "Over time, Florida's humidity, pollen, and fine construction dust settle inside your ductwork. Because the same air recirculates through your home 5 to 7 times a day, contaminated ducts continuously redistribute those particles into the rooms where your family breathes.",
      'If you searched for AC duct cleaning, AC vent cleaning, air vent cleaning or ductwork cleaning, this is the same service. Florida homeowners usually say "AC" because almost nobody here has a furnace, so the ducts get thought of as belonging to the air conditioner. The one phrase that means something genuinely different is dryer vent cleaning, which is a separate duct and a separate job.',
      'The work is done with a negative-air machine, either truck mounted or a portable unit we carry in. It connects to the duct system at the plenum or the main trunk and holds the whole system under continuous suction, exhausting through a HEPA filter into a sealed collection drum. That is what source removal means, and it is the method described by the NADCA ACR standard. It is a different job from a shop vacuum held at a register, which reaches the first few feet of a branch that may run twenty feet or more into the attic.',
      'With the machine running, we seal every supply and return register in the house and open them one at a time. Sealing matters more than any tool we own. If the other registers stay open, the air takes the shortest path through them and the branch being brushed barely moves. With the rest of the system closed off, all of the airflow concentrates in the single run being worked, so debris travels to the collection unit instead of into the room.',
      'Suction alone does not remove what has bonded to a duct wall, so each run also gets mechanical agitation. Rotary brushes on flexible shafts are used in sheet metal and duct board. Compressed-air whips and skipper balls are used in flexible duct, which has a thin liner over a spiral wire that a stiff brush can tear. The main trunk lines and the supply and return plenums are worked by hand and by rod where the machine cannot reach on its own.',
      'The parts most often skipped are the ones that decide how your air smells. The blower wheel, the blower housing, and the accessible face of the evaporator coil sit downstream of the filter and collect a felt of fine dust that no amount of brushing inside the ducts will ever reach. In Florida those surfaces are wet for months at a time, because the coil is condensing water any time the system runs, and wet dust is where a musty startup smell begins. A visit that never opens the blower compartment is not a cleaning.',
      'That is also why the $49 to $99 whole-house specials cannot be this service. Two technicians, a machine, and two to four hours in one house have a real cost. An advertised special at that price is either twenty minutes of vacuuming at the registers or a way through your front door, after which the number climbs. We wrote the tactic out in full, including the specific add-ons that follow, in our guide at /blog/air-duct-cleaning-scams/. Our price is $300 to $600 per system and you have it before we book.',
      'Here is what the visit is actually like. Two technicians, two to four hours for a single-system home with roughly 8 to 14 registers, a working outlet, and a clear path from where we park to the air handler for the hose. The air handler has to be reachable, which in Florida usually means a garage, a hallway closet, or an attic platform, so that closet needs to be emptied before we arrive. Nothing heavy has to move. We ask you to pull chairs, plant stands, and storage boxes off the vents, and we handle the rest. Plan to be home at the start, to point out the rooms that smell or run dusty, and at the end for the walkthrough and the photos. The collection unit is loud, close to a shop vacuum running the entire time, so it is not a good afternoon for calls in the same room.',
      'Most Florida homes belong on a 3 to 5 year cycle, and that is a maintenance interval rather than a health claim. The EPA is worth quoting plainly before you spend the money: duct cleaning has never been shown to actually prevent health problems, and dust levels in a home do not necessarily go up because the ducts are dirty. The EPA does recommend cleaning when one of three things is true, and we use the same three tests. Substantial visible mold growth inside the ducts or on other system components. Ducts infested with rodents or insects. Ducts so clogged with dust and debris that particles are actually being released into the room through the registers.',
      'So there are houses we tell not to buy this. If the system was properly cleaned two years ago, nothing is visible at the registers, there is no odor and no pest evidence, and the reason you are calling is an ad, the honest answer is to wait and put the money into a better filter or a service call on the equipment. We would rather say that on the phone than take a booking that changes nothing you can notice. What we will not do is talk you out of it when there is visible mold at a supply boot or fiberglass shedding into a room, because those are real jobs.',
      'Florida changes the work in ways a national script misses. Nearly all of the residential ductwork here is insulated flex, run through an attic that reaches 130 degrees in August, and flex sags between its supports and holds debris in the low spots. Outdoor dew points sit near 75 degrees for months, so any duct or boot with damaged insulation sweats, and that condensation lands on dust. New construction is the other common trigger: drywall sanding dust and sawdust are pulled into open returns during the build and stay in the trunk for years, which is why a two-year-old house often looks worse inside than a twenty-year-old one. Add year-round pet dander, a pollen season that never fully closes, and a house that stays sealed nine months of the year, and ducts here load faster than the same house would in a dry climate.',
      'What the visit does not include, so nothing is a surprise. We do not repair or replace ductwork, seal leaks, or re-insulate on the same call, though we photograph anything that needs it and show you. We do not remediate mold in walls, drywall, or framing, which is separate licensed work in Florida. We do not service the refrigerant side of the equipment. We do not run laboratory air testing, so we will not make a before-and-after claim about spore counts. And if the ductwork is crushed, disconnected, or the flex liner is coming apart, cleaning it is money spent on a duct that needs replacing, and we will tell you that instead of cleaning it.',
    ],
    benefits: [
      { title: 'Cleaner air at the register', text: 'Source removal takes the dust, dander, and pollen out of the system rather than moving them around inside it. What most people notice first is the smell at startup and how much less grit shows on a white cloth held at a supply vent.' },
      { title: 'The airflow the system was designed for', text: 'A loaded blower wheel and a dusty coil face are restrictions. Clearing them lets the air handler move the volume it was sized to move, which is what shortens run times. The ducts alone rarely do that.' },
      { title: 'Less dust returning to the rooms', text: 'When the trunk, the branches, and the boots are clean, the system stops delivering a small dose of settled dust to every room each time it cycles on.' },
      { title: 'Problems found while they are still cheap', text: 'We photograph the inside of the system. Crushed flex, a boot disconnected in the attic, wet insulation at the plenum, and mold at the coil are all things you would rather see in a photo than in an August power bill.' },
      { title: 'A musty smell traced to its actual source', text: 'Most Florida AC odor comes from wet dust on the coil and inside the blower housing, not from the duct runs. Cleaning those two surfaces is what removes it. Fogging without cleaning covers it for a few weeks.' },
      { title: 'A price before we book, not after', text: '$300 to $600 per system, quoted from the register count and the number of air handlers. Not from what a technician decides once he is standing in your hallway.' },
    ],
    process: [
      { title: 'Walkthrough and count', text: 'We count every supply and return, find the air handler, check the filter and the drain pan, and put a light and a camera into the trunk. You see the photos before any equipment comes off the truck.' },
      { title: 'Protect the house', text: 'Drop cloths at the air handler, shoe covers inside, the collection unit staged outside or at the door, and the hose run taped down across thresholds.' },
      { title: 'Negative-air hookup', text: 'The vacuum is connected at the plenum or the main trunk and the opening is sealed. The machine runs before any brush enters the system, so the ductwork is under suction the entire time, not part of the time.' },
      { title: 'Seal every register', text: 'Supplies and returns are closed off so the suction cannot short-circuit through them. This is the step a rushed crew skips, and skipping it is what makes the rest of the visit cosmetic.' },
      { title: 'Agitate and extract, run by run', text: 'One register is opened at a time. A rotary brush or an air whip is pushed the full length of that branch to the boot, and the debris travels to the collection drum. Then it is resealed and we move to the next.' },
      { title: 'Trunk lines and plenums', text: 'The main supply and return trunks and both plenums are cleaned directly, including the corners and takeoffs where debris settles and where a duct-only cleaning stops.' },
      { title: 'Blower compartment and coil face', text: 'The blower wheel and housing are cleaned and the accessible face of the evaporator coil is brushed and vacuumed. In Florida this is usually the dirtiest part of the system and the reason the air smells.' },
      { title: 'Registers, grilles, and boots', text: 'Covers come off and are washed, the boots behind them are cleaned by hand, and anything rusted, loose, or missing insulation is photographed for you.' },
      { title: 'Optional antimicrobial', text: 'An EPA-registered product, applied only after the system is clean and only when there is a reason for it, such as visible growth at the coil or plenum. Tell us at booking if anyone has asthma or a chemical sensitivity and we clean without it.' },
      { title: 'Verify and close out', text: 'Access points sealed, a fresh filter installed if you have one on site, the system restarted with us there, then the walkthrough with before-and-after photos of the same locations.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$300 to $600 per system' },
      { label: 'Recommended frequency', value: 'Every 3 to 5 years' },
      { label: 'Time on site', value: '2 to 4 hours' },
      { label: 'Crew size', value: 'Usually 2 technicians' },
      { label: 'Standard followed', value: 'NADCA ACR source-removal' },
      { label: 'Do you need to be home', value: 'Yes, at the start and the end' },
      { label: 'Not included', value: 'Duct repair, sealing, HVAC service' },
      { label: 'Skip it if', value: 'Cleaned under 3 years ago and nothing visible' },
    ],
    faq: [
      { question: 'How often should air ducts be cleaned in Florida?', answer: 'Every 3 to 5 years for most homes. Sooner if you have shedding pets, a recent renovation, a new build still carrying construction dust, a mold or water history at the air handler, or someone whose allergies clearly worsen indoors. If it has been under three years and nothing is visible or smells wrong, waiting is usually the right answer.' },
      { question: 'Do I actually need air duct cleaning, or is it optional?', answer: 'For most homes it is maintenance, not a repair. The EPA has stated that duct cleaning has never been shown to actually prevent health problems, and that dust levels in a home do not necessarily rise because the ducts are dirty. The EPA does recommend it in three situations: substantial visible mold inside the ducts or on system components, ducts infested by rodents or insects, and ducts clogged badly enough that debris is being released into rooms. Those are the same three tests we use.' },
      { question: 'Does air duct cleaning really improve air quality?', answer: 'It physically removes the dust, dander, and mold spores that have collected inside the system, so those specific particles stop being recirculated. It does not filter the air you already have and it does not fix a humidity problem. If measurably cleaner air is the goal, your filter, your indoor humidity, and the condition of the coil matter at least as much as the duct interiors.' },
      { question: 'How long does air duct cleaning take, and how many technicians come?', answer: 'Two to four hours for a typical single-system Florida home, usually with two technicians. One manages the collection unit and the trunk connection while the other works the registers one run at a time. A second system, a large house, or heavy buildup takes longer, and we say so before booking rather than rushing the back half of the job.' },
      { question: 'Do I need to be home during the cleaning?', answer: 'At the start and at the end. At the start you let us in and tell us which rooms smell or run dusty. At the end we walk the house with you and show the before-and-after photos of the same locations. You do not have to sit through the middle of it.' },
      { question: 'What do you need access to, and how should I prepare?', answer: 'Every supply and return register, the air handler and its closet or attic platform, an electrical outlet, and a clear path from where we park to the equipment for the hose. Please empty the air handler closet and move chairs, plant stands, and storage boxes off the vents before we arrive. That is the whole preparation list.' },
      { question: 'Is air duct cleaning messy, and how loud is it?', answer: 'The system is under suction for the entire visit, so debris travels toward the machine instead of into your rooms, and we use drop cloths at the air handler and shoe covers in the house. Noise is the real disruption. The collection unit runs at roughly the volume of a shop vacuum for two to four hours, so working or napping in the same room is not realistic.' },
      { question: 'How much does air duct cleaning cost in Florida?', answer: 'Most homes pay $300 to $600 for a full single-system cleaning. The price moves with the number of registers, the number of air handlers, and how much buildup is in the system. Larger homes, multiple systems, and heavy mold contamination cost more. You get the number before we book, not after we are inside.' },
      { question: 'Why do other companies advertise $99 air duct cleaning?', answer: 'Because it is a lead price rather than a job price. Real source-removal cleaning takes hours of labor and real equipment, so a $49 to $99 special is either twenty minutes of vacuuming at the registers or a way to get a salesperson inside, after which the total climbs several hundred dollars. Our guide at /blog/air-duct-cleaning-scams/ lists the specific upsells to expect and the questions that end the conversation early.' },
      { question: 'What is source removal, and how do I know I got it?', answer: 'Source removal means the whole duct system is held under negative pressure while each run is mechanically agitated, so the debris leaves the building instead of relocating inside it. Signs you got it: a large hose connected into the ductwork at the plenum or main trunk, every register sealed while one is worked, a brush or air whip run the full length of each branch, and an open blower compartment. Signs you did not: a household vacuum at each register and a crew finished in thirty minutes.' },
      { question: 'Do you clean the blower and the coil, or only the ducts?', answer: 'The blower wheel, the blower housing, and the accessible face of the evaporator coil are part of the visit. In Florida they are usually the dirtiest components in the system and nearly always the source of a musty smell, because the coil condenses water any time the air conditioner runs.' },
      { question: 'Is AC duct cleaning the same as air duct cleaning?', answer: 'Yes. AC duct cleaning, AC vent cleaning, air vent cleaning, and ductwork cleaning all describe this service. Florida homes rarely have a furnace, so people name the ducts after the air conditioner. Dryer vent cleaning is the term that means something genuinely different: a separate duct, separate equipment, and a separate price.' },
      { question: 'Will air duct cleaning lower my electric bill?', answer: 'It can help when the blower wheel or the coil face was restricted, because the air handler then moves more air per minute of runtime. It is not an efficiency upgrade by itself. If the bill is the actual problem, duct leakage, attic insulation, and the condition of the equipment are usually worth more than a cleaning.' },
      { question: 'Will it get rid of the musty smell when the AC starts?', answer: 'Usually, when the smell is coming from wet dust on the coil and in the blower housing, which is where most Florida AC odor starts. It will not fix a smell caused by standing water in the drain pan, a blocked condensate line, or mold in the building materials around the unit. We look for those during the inspection and tell you which one you have.' },
      { question: 'Can brushing damage flexible duct?', answer: 'It can, with the wrong tool. Flex duct is a thin liner over a spiral wire, and a stiff rotary brush can tear it. We use air whips and softer agitation in flex, keep rotary brushes for sheet metal and duct board, and if a liner is already deteriorating we stop and show you rather than finish the run and hand back a torn duct.' },
      { question: 'Do you use chemicals or antimicrobial fogging?', answer: 'Only when there is a reason, such as visible growth at the coil or in the plenum, and only after the system is clean. An antimicrobial sprayed into a dirty duct is cosmetic. The product is EPA-registered, and if you would rather skip it, say so at booking and we clean without it.' },
      { question: 'We just built or renovated. Should we clean the ducts now?', answer: 'Yes, and it is one of the clearest cases for this service. Drywall sanding dust and sawdust get pulled into open returns during construction and sit in the trunk for years afterward. Wait until the last sanding is finished, otherwise the system simply reloads with the next phase of the work.' },
      { question: 'Does anyone need duct cleaning every year?', answer: 'Almost nobody. Annual duct cleaning is an advertising schedule, not a technical one. The parts of the system that genuinely need yearly or more frequent attention are the filter, the condensate drain, and the coil in a house with pets. Duct interiors in a normal home do not reload that fast.' },
      { question: 'Do you cover my area, or do I need to bring anything to you?', answer: 'The equipment travels to the house and there is nothing for you to drop off. We work across Miami-Dade, Broward and Palm Beach counties, Central Florida and Orlando, the Tampa Bay area, Southwest Florida from Fort Myers to Naples, and Jacksonville. The city list further down this page shows where we are booking, and if your town is not on it, call and ask.' },
    ],
    related: ['dryer-vent-cleaning', 'air-duct-sanitizing', 'hvac-cleaning'],
  },
  {
    slug: 'dryer-vent-cleaning',
    name: 'Dryer Vent Cleaning',
    shortName: 'Dryer Vent Cleaning',
    icon: '🔥',
    metaTitle: 'Dryer Vent Cleaning in Florida | From $100',
    metaDescription:
      'Dryer vent cleaning across Florida from $100. Trapped lint is the number one cause of dryer fires. Upfront price, licensed and insured.',
    answer:
      'Dryer vent cleaning removes flammable lint and debris from the exhaust duct that runs from your clothes dryer to the outside of your home. It is the single most effective way to prevent dryer fires and should be done at least once a year.',
    intro: [
      'The US Fire Administration puts clothes dryer fires in residential buildings at about 2,900 a year, and names failure to clean as the leading contributing factor at 34 percent of them. Lint is highly flammable, and when it restricts airflow the dryer overheats, a risk most homeowners never see because the buildup is hidden inside the wall or roof run.',
      "Florida homes often have long, twisting vent runs to the roof, which trap lint faster. If your clothes take two cycles to dry, the top of the dryer is hot to the touch, or the laundry room feels humid, your vent is likely restricted.",
      'We disconnect the dryer, run a rotating brush and high-pressure air through the entire run to the exterior termination, clear the outside vent hood, and confirm strong airflow before we finish.',
    ],
    benefits: [
      { title: 'Prevents dryer fires', text: 'Removing lint eliminates the leading cause of dryer-related house fires.' },
      { title: 'Faster drying', text: 'Clear airflow means clothes dry in one cycle instead of two, saving time and energy.' },
      { title: 'Lower bills & longer dryer life', text: 'The dryer runs cooler and shorter, reducing wear and electricity or gas use.' },
      { title: 'Less humidity & mold', text: 'Proper venting pushes moist air outside instead of into your laundry room.' },
    ],
    process: [
      { title: 'Airflow test', text: 'We measure exhaust airflow at the vent hood to quantify the restriction.' },
      { title: 'Brush & air-sweep', text: 'A rotating brush and compressed air clear lint along the full run to the exterior.' },
      { title: 'Exterior vent clearing', text: 'We clean the outside hood and confirm the damper opens freely.' },
      { title: 'Verify', text: 'A second airflow test confirms the vent is fully clear.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$100 to $200' },
      { label: 'Recommended frequency', value: 'At least once a year' },
      { label: 'Time on site', value: '45 to 90 minutes' },
      { label: 'Top warning sign', value: 'Clothes take 2 cycles to dry' },
    ],
    faq: [
      { question: 'How often should a dryer vent be cleaned?', answer: 'At least once a year, more often for large households, homes with pets, or long vent runs common in Florida.' },
      { question: 'What are the signs of a clogged dryer vent?', answer: 'Longer drying times, a hot dryer or laundry room, a burning smell, and a vent hood flap that no longer opens fully.' },
      { question: 'Can a clogged dryer vent really cause a fire?', answer: 'Yes. Lint is highly flammable and restricted airflow makes the dryer overheat; clogged vents cause thousands of house fires every year.' },
      { question: 'How much does dryer vent cleaning cost in Florida?', answer: 'Most homes pay $100 to $200, depending on the length and complexity of the vent run.' },
    ],
    related: ['air-duct-cleaning', 'dryer-vent-installation', 'indoor-air-quality-testing'],
  },
  {
    slug: 'dryer-vent-installation',
    name: 'Dryer Vent Installation',
    shortName: 'Dryer Vent Installation',
    icon: '🛠️',
    metaTitle: 'Dryer Vent Installation in Florida',
    metaDescription:
      'Dryer vent installation across Florida: rigid metal duct, shortest safe route, sealed joints. Price agreed before we book, not after.',
    answer:
      'Dryer vent installation is the professional design and fitting of the exhaust duct that carries hot, moist air from your clothes dryer to the outside of your home. A correct installation uses rigid metal ducting on the shortest practical route with a proper exterior termination, keeps drying fast, prevents lint fires, and typically costs $200 to $600 in Florida depending on the route.',
    intro: [
      'A dryer is only as safe as the duct behind it. Flexible plastic hose, long roof runs with too many elbows, and screened vent covers are some of the most common problems we find in Florida laundry rooms, and every one of them slows drying and raises fire risk.',
      'We install and reroute dryer vents to current mechanical code: rigid or semi-rigid metal ducting, joints sealed with foil tape instead of screws that snag lint, a total run within the allowed equivalent length, and a hooded exterior termination with a working damper that keeps out rain and pests.',
      'The service covers new installations for laundry rooms and remodels, replacement of unsafe plastic or foil ducting, rerouting long or crushed runs, and repair of disconnected ducts hidden in walls, attics, and garages. Every job ends with an airflow test so you can see the result.',
    ],
    benefits: [
      { title: 'Lower fire risk', text: 'Smooth rigid metal duct on a short route gives lint nowhere to build up, removing the main cause of dryer fires.' },
      { title: 'One-cycle drying', text: 'A properly sized, sealed run restores full airflow, so clothes dry in one cycle and the dryer stops overheating.' },
      { title: 'Code-compliant work', text: 'Materials, length, and termination all follow current mechanical code, which matters for insurance and home sales.' },
      { title: 'No moisture damage', text: 'A sealed run that terminates outdoors keeps hot, humid exhaust out of your walls and attic, where it feeds mold.' },
    ],
    process: [
      { title: 'Route planning', text: 'We measure the space and choose the shortest practical route to an exterior wall or, when needed, the roof.' },
      { title: 'Ducting installation', text: 'Rigid metal duct is cut, fitted, and sealed with foil tape, with elbows kept to a minimum.' },
      { title: 'Exterior termination', text: 'We install a hooded vent cover with a free-swinging damper and weather-seal the penetration.' },
      { title: 'Airflow verification', text: 'A final airflow test confirms the new run moves air the way the dryer manufacturer intended.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$200 to $600' },
      { label: 'Max equivalent length', value: 'About 35 feet, minus 5 per elbow' },
      { label: 'Time on site', value: '1 to 3 hours' },
      { label: 'Recommended material', value: 'Rigid metal ducting' },
    ],
    faq: [
      { question: 'How much does dryer vent installation cost in Florida?', answer: 'Most installations run $200 to $600. A short wall vent sits at the low end, while rerouting a long roof run or opening walls to replace hidden ducting costs more. We quote the full price up front.' },
      { question: 'Can a dryer vent go through the roof?', answer: 'Yes, roof terminations are common in Florida homes where no exterior wall is close to the laundry. They work, but the longer run traps lint faster, so plan on cleaning at least once a year.' },
      { question: 'Who installs dryer vents?', answer: 'Air duct and dryer vent specialists like our team handle installation, rerouting, and repair. The work involves mechanical code, fire safety, and roof or wall penetrations, so it is not a typical handyman job.' },
      { question: 'What kind of duct is code for a dryer vent?', answer: 'Rigid or semi-rigid metal duct. Flexible plastic and foil accordion hose are not code-compliant for concealed runs because they trap lint, sag, and can ignite.' },
      { question: 'How do I know my current vent needs replacing?', answer: 'Plastic or foil hose anywhere in the run, clothes that need two cycles, a hot laundry room, or visible crushing behind the dryer are all signs the run should be replaced or rerouted.' },
    ],
    related: ['dryer-vent-cleaning', 'air-duct-repair', 'attic-insulation'],
  },
  {
    slug: 'hvac-cleaning',
    name: 'AC & HVAC System Cleaning',
    shortName: 'AC / HVAC Cleaning',
    icon: '❄️',
    metaTitle: 'AC Coil & Air Handler Cleaning in Florida',
    metaDescription:
      'Coil and air handler cleaning across Florida. Humidity fouls the evaporator coil here faster than anywhere. Upfront price before we book.',
    answer:
      'AC and HVAC system cleaning is the deep cleaning of the parts that move and cool your air (the evaporator coil, blower wheel, air handler, and condensate drain), not just the ducts. In humid Florida it prevents mold, restores airflow, and keeps your air conditioner running efficiently.',
    intro: [
      'Ducts are only part of the system. The evaporator coil and blower wheel sit in the constantly damp, dark air handler, the perfect environment for the black mold and biofilm that Florida homeowners so often smell when the AC kicks on.',
      'A dirty coil insulates itself with grime and cannot transfer heat efficiently, forcing longer run times and higher bills. A caked blower wheel moves dramatically less air, creating weak vents and hot rooms.',
      'We clean the coil with coil-safe cleaner, remove and detail the blower wheel, flush and treat the condensate drain line to prevent overflow shut-offs, and sanitize the air-handler cabinet.',
    ],
    benefits: [
      { title: 'Restored airflow', text: 'A clean blower and coil push noticeably more air from every vent.' },
      { title: 'Lower energy costs', text: 'A clean coil transfers heat efficiently, cutting run times in Florida heat.' },
      { title: 'Mold & odor control', text: 'Cleaning the damp coil and cabinet removes the source of musty AC smells.' },
      { title: 'Fewer breakdowns', text: 'A flushed drain line prevents the water backups that trip safety switches.' },
    ],
    process: [
      { title: 'System inspection', text: 'We assess coil, blower, drain line, and cabinet condition.' },
      { title: 'Coil cleaning', text: 'Coil-safe foaming cleaner dissolves grime for full heat transfer.' },
      { title: 'Blower & cabinet', text: 'The blower wheel is detailed and the cabinet sanitized.' },
      { title: 'Drain treatment', text: 'The condensate line is flushed and treated to prevent clogs.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$200 to $450' },
      { label: 'Recommended frequency', value: 'Annually in Florida' },
      { label: 'Time on site', value: '1.5 to 3 hours' },
      { label: 'Key benefit', value: 'Prevents coil mold & drain backups' },
    ],
    faq: [
      { question: 'Is HVAC cleaning different from air duct cleaning?', answer: 'Yes. Duct cleaning addresses the ductwork; HVAC cleaning addresses the coil, blower, air handler, and drain line where mold and efficiency losses usually originate.' },
      { question: 'Why does my AC smell musty in Florida?', answer: 'Mold and biofilm grow on the damp evaporator coil and in the air handler. Cleaning and sanitizing these components removes the odor at its source.' },
      { question: 'How often should HVAC components be cleaned?', answer: 'Annually is recommended in Florida because year-round humidity and heavy AC use accelerate coil mold and drain clogs.' },
    ],
    related: ['air-duct-cleaning', 'air-duct-sanitizing', 'indoor-air-quality-testing'],
  },
  {
    slug: 'air-duct-repair',
    name: 'Air Duct Repair & Replacement',
    shortName: 'Duct Repair',
    icon: '🛠️',
    metaTitle: 'Air Duct Repair & Sealing in Florida',
    metaDescription:
      'Air duct repair and sealing across Florida: disconnected runs, torn flex, failed insulation. You get the price before work starts.',
    answer:
      'Air duct repair and replacement fixes leaks, disconnected joints, crushed runs, and failed insulation in your ductwork. Sealing leaky ducts is one of the highest-return home efficiency upgrades, because leaks in hot Florida attics waste cooled air before it ever reaches a room.',
    intro: [
      'The average home loses 20 to 30% of the air moving through its ducts to leaks, gaps, and poor connections. In Florida, most ductwork runs through attics that reach 130°F, so every leak either dumps expensive cooled air into the attic or pulls hot, humid attic air into your system.',
      'Aging flex duct sags, tears, and its insulation degrades, while rodents and settling can crush or disconnect runs entirely. The result is uneven cooling, high bills, and rooms that never quite get comfortable.',
      'We pressure-test the system to locate leaks, then seal joints with mastic and metal tape, re-support sagging runs, replace damaged sections, and upgrade insulation to current code.',
    ],
    benefits: [
      { title: 'Stop energy waste', text: 'Sealing leaks keeps cooled air in the ducts instead of the attic, cutting bills.' },
      { title: 'Even comfort', text: 'Repaired runs deliver full airflow to previously hot or weak rooms.' },
      { title: 'Better air quality', text: 'Sealed ducts stop pulling in dusty, humid attic air.' },
      { title: 'Lower humidity', text: 'Properly sealed systems dehumidify more effectively in Florida summers.' },
    ],
    process: [
      { title: 'Pressure test', text: 'We measure duct leakage and map problem areas.' },
      { title: 'Seal & reconnect', text: 'Joints are sealed with mastic; disconnected runs are reattached.' },
      { title: 'Repair or replace', text: 'Damaged or collapsed sections are replaced with new insulated duct.' },
      { title: 'Insulate & verify', text: 'Insulation is upgraded and a re-test confirms the fix.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$250 to $2,000+ (scope-based)' },
      { label: 'Common issue', value: '20 to 30% air lost to leaks' },
      { label: 'Best for', value: 'Hot rooms, high bills, old flex duct' },
      { label: 'Attic temps', value: 'Up to 130°F in FL summers' },
    ],
    faq: [
      { question: 'How do I know if my air ducts are leaking?', answer: 'Signs include high energy bills, rooms that never cool evenly, excessive dust, and weak airflow. A duct pressure test confirms and locates leaks.' },
      { question: 'Is duct sealing worth it in Florida?', answer: 'Yes, because ducts run through very hot attics, sealing leaks is one of the highest-return efficiency upgrades available, often paying for itself in energy savings.' },
      { question: 'Should I repair or replace my ducts?', answer: 'Localized leaks and disconnects are repaired; widely deteriorated, moldy, or undersized systems are usually more cost-effective to replace.' },
    ],
    related: ['air-duct-cleaning', 'attic-insulation', 'hvac-cleaning'],
  },
  {
    slug: 'mold-remediation',
    name: 'Air Duct Mold Removal & Remediation',
    shortName: 'Mold Removal',
    icon: '🦠',
    metaTitle: 'Air Duct Mold Removal & Remediation in Florida',
    metaDescription:
      'Duct and air handler mold removal across Florida, with containment and source removal. Upfront price, nothing invented on site.',
    answer:
      'Air duct mold remediation is the identification, removal, and prevention of mold growth inside ductwork and HVAC components. Florida’s year-round humidity makes duct and coil mold especially common, and it should be addressed promptly because spores are circulated into the air you breathe.',
    intro: [
      "Florida leads the nation in indoor mold problems for one reason: humidity. When warm, moist air meets the cold surfaces inside your ducts and air handler, condensation forms, and mold needs only moisture and dust to colonize.",
      'Duct mold often shows up as a persistent musty smell that intensifies when the AC runs, visible black specks around vents, or unexplained allergy and respiratory symptoms that improve when you leave the house.',
      'We inspect and, where needed, test to confirm mold, contain the affected area, physically remove growth and contaminated materials, apply EPA-registered antimicrobial treatment, and, most importantly, correct the moisture source so it does not return.',
    ],
    benefits: [
      { title: 'Healthier air', text: 'Removing mold stops spores from circulating and triggering symptoms.' },
      { title: 'Eliminates musty odor', text: 'Source removal ends the smell that air fresheners only mask.' },
      { title: 'Protects your home', text: 'Prevents mold from spreading to drywall, insulation, and furnishings.' },
      { title: 'Moisture correction', text: 'We fix the underlying humidity issue so mold does not regrow.' },
    ],
    process: [
      { title: 'Inspect & test', text: 'We locate mold and, if needed, sample to confirm type and extent.' },
      { title: 'Contain', text: 'The work area is isolated to prevent cross-contamination.' },
      { title: 'Remove & treat', text: 'Growth is removed and surfaces treated with EPA-registered antimicrobial.' },
      { title: 'Prevent', text: 'We correct the moisture source and recommend humidity controls.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$500 to $3,000+ (severity-based)' },
      { label: 'Root cause', value: 'Humidity + condensation' },
      { label: 'Warning sign', value: 'Musty smell when AC runs' },
      { label: 'Treatment', value: 'EPA-registered antimicrobials' },
    ],
    faq: [
      { question: 'How do I know if there is mold in my air ducts?', answer: 'Common signs are a musty smell that gets stronger when the AC runs, visible black or green specks around vents, and allergy symptoms that ease when you leave home. Testing confirms it.' },
      { question: 'Why is duct mold so common in Florida?', answer: 'Year-round humidity causes condensation inside cool ducts and air handlers, and mold needs only that moisture plus dust to grow.' },
      { question: 'Can you remove mold from ducts permanently?', answer: 'Mold can be removed and its return prevented, but only if the underlying moisture source is corrected, which is why our process includes humidity control.' },
    ],
    related: ['air-duct-sanitizing', 'hvac-cleaning', 'indoor-air-quality-testing'],
  },
  {
    slug: 'air-duct-sanitizing',
    name: 'Air Duct Sanitizing & Deodorizing',
    shortName: 'Sanitizing',
    icon: '✨',
    metaTitle: 'Air Duct Sanitizing & Deodorizing in Florida',
    metaDescription:
      'Air duct sanitizing across Florida after cleaning, applied to manufacturer specification. Price agreed before we book the visit.',
    answer:
      'Air duct sanitizing applies an EPA-registered antimicrobial fog throughout cleaned ductwork to kill bacteria, mold spores, and odor-causing microbes. It is done after mechanical cleaning to treat what brushing alone cannot reach and to leave the system fresh.',
    intro: [
      'Cleaning removes the dust and debris; sanitizing treats the microscopic layer of bacteria, mold spores, and odor sources that cling to duct surfaces. In Florida’s damp climate, that biological layer is what causes lingering smells even after a thorough cleaning.',
      'We use antimicrobial products that are EPA-registered for HVAC use and safe for occupied homes, applied as a fine fog that coats the entire interior surface of the duct system.',
      'The result is a system that not only looks clean but smells fresh, a popular finishing step for homeowners with pets, smokers, allergy sufferers, or a past mold or odor problem.',
    ],
    benefits: [
      { title: 'Kills mold & bacteria', text: 'Treats microbes that mechanical cleaning cannot fully remove.' },
      { title: 'Removes odors', text: 'Neutralizes pet, smoke, and mustiness at the source rather than masking them.' },
      { title: 'Family-safe products', text: 'EPA-registered antimicrobials rated for occupied spaces.' },
      { title: 'Fresh, lasting result', text: 'Leaves the whole system noticeably fresher after cleaning.' },
    ],
    process: [
      { title: 'Clean first', text: 'Sanitizing follows a full source-removal duct cleaning for best results.' },
      { title: 'Apply antimicrobial fog', text: 'A fine fog coats every interior duct surface evenly.' },
      { title: 'Dwell & circulate', text: 'The treatment is given time to work, then the system is run to circulate fresh air.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$75 to $200 add-on' },
      { label: 'Best paired with', value: 'Air duct cleaning' },
      { label: 'Product', value: 'EPA-registered antimicrobial' },
      { label: 'Ideal for', value: 'Pets, allergies, odor, past mold' },
    ],
    faq: [
      { question: 'Is duct sanitizing safe for my family and pets?', answer: 'Yes. We use EPA-registered antimicrobial products rated for use in occupied HVAC systems and follow the manufacturer’s safety guidelines.' },
      { question: 'Do I need sanitizing if I already had my ducts cleaned?', answer: 'Cleaning removes debris; sanitizing kills the mold and bacteria that cause odors. It is optional but recommended for homes with pets, allergies, or a past odor or mold issue.' },
      { question: 'Will sanitizing get rid of pet or smoke odors?', answer: 'It neutralizes odor-causing microbes on duct surfaces at the source, which is far more effective than deodorizers that only mask smells.' },
    ],
    related: ['air-duct-cleaning', 'mold-remediation', 'hvac-cleaning'],
  },
  {
    slug: 'commercial-air-duct-cleaning',
    name: 'Commercial Air Duct Cleaning',
    shortName: 'Commercial',
    icon: '🏢',
    metaTitle: 'Commercial Air Duct Cleaning in Florida',
    metaDescription:
      'Commercial duct cleaning across Florida for offices, restaurants, condos and medical. Written quote before anything is scheduled.',
    answer:
      'Commercial air duct cleaning services larger and more complex HVAC systems in offices, restaurants, retail spaces, medical facilities, and multi-unit properties. It improves occupant health, meets indoor-air-quality compliance expectations, and is scheduled after-hours to avoid disrupting operations.',
    intro: [
      "Commercial systems move far more air than a home and serve many more people, so contaminated ductwork affects employee health, customer comfort, and, in food service and healthcare, regulatory compliance.",
      'Rooftop units, long trunk lines, VAV boxes, and continuous operation all mean commercial cleaning requires specialized equipment, trained crews, and careful scheduling. We work nights and weekends to keep your business running.',
      'Every job includes documentation, before/after photos and a scope report, that supports property management records, tenant requests, and health-inspection readiness.',
    ],
    benefits: [
      { title: 'Healthier workplace', text: 'Cleaner air reduces sick days and complaints in offices and shared spaces.' },
      { title: 'Compliance-ready', text: 'Documentation supports IAQ expectations for medical and food-service sites.' },
      { title: 'Zero downtime', text: 'After-hours and weekend scheduling keeps your operation running.' },
      { title: 'Efficiency at scale', text: 'Clean commercial systems cut significant energy costs across large square footage.' },
    ],
    process: [
      { title: 'Site survey', text: 'We assess the system, access, and scheduling needs and provide a scoped quote.' },
      { title: 'After-hours cleaning', text: 'Crews work nights/weekends with commercial negative-air equipment.' },
      { title: 'Documentation', text: 'Before/after photos and a written scope report are provided.' },
    ],
    quickFacts: [
      { label: 'Pricing', value: 'Custom quote by square footage' },
      { label: 'Scheduling', value: 'Nights & weekends available' },
      { label: 'Sectors', value: 'Office, retail, medical, food service' },
      { label: 'Includes', value: 'Full photo & scope documentation' },
    ],
    faq: [
      { question: 'Do you clean commercial systems after business hours?', answer: 'Yes. We schedule nights and weekends so cleaning never disrupts your operations, staff, or customers.' },
      { question: 'How much does commercial duct cleaning cost?', answer: 'Commercial pricing is custom-quoted based on square footage, system type, and access. We provide a written scope and estimate after a site survey.' },
      { question: 'Do you provide documentation for compliance?', answer: 'Yes. Every commercial job includes before/after photos and a written scope report suitable for property management and health-inspection records.' },
    ],
    related: ['air-duct-cleaning', 'dryer-vent-cleaning', 'hvac-cleaning'],
  },
  {
    slug: 'uv-light-installation',
    name: 'UV Light Installation',
    shortName: 'UV Air Purification',
    icon: '💡',
    metaTitle: 'HVAC UV Light Installation in Florida | Air Purification',
    metaDescription:
      'HVAC UV light installation across Florida from $300. It targets mold on the coil, which is where it starts in this climate.',
    answer:
      'HVAC UV light installation places a UV-C lamp inside your air handler to continuously kill mold, bacteria, and viruses on the evaporator coil and in the moving air. In humid Florida, UV-C is one of the most effective ways to keep the coil mold-free between cleanings.',
    intro: [
      "The evaporator coil is always cold and damp, the exact conditions mold loves. A UV-C lamp aimed at the coil sterilizes its surface around the clock, stopping the biofilm that causes musty AC smells and reduced efficiency.",
      'Because Florida runs its air conditioning nearly year-round, a coil-sterilizing UV system works far more hours here than in seasonal climates, making it especially cost-effective for local homeowners.',
      'We size the lamp to your system, mount it for maximum coil coverage, and set you up with a simple annual bulb-replacement reminder so it keeps working at full strength.',
    ],
    benefits: [
      { title: 'Keeps the coil clean', text: 'Continuous UV-C sterilization prevents the mold that fouls coils and causes odors.' },
      { title: 'Cleaner air 24/7', text: 'Reduces mold, bacteria, and viruses in the airstream whenever the system runs.' },
      { title: 'Maintains efficiency', text: 'A mold-free coil transfers heat efficiently, protecting performance.' },
      { title: 'Low maintenance', text: 'Just an annual bulb change, the system does the rest.' },
    ],
    process: [
      { title: 'System sizing', text: 'We match lamp output and placement to your air handler.' },
      { title: 'Installation', text: 'The UV-C lamp is mounted for maximum coil and airstream coverage.' },
      { title: 'Setup & guidance', text: 'We verify operation and set an annual bulb-replacement reminder.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$300 to $700 installed' },
      { label: 'Maintenance', value: 'Annual bulb replacement' },
      { label: 'Best for', value: 'Humid FL homes, coil mold, allergies' },
      { label: 'Targets', value: 'Coil mold, bacteria, viruses' },
    ],
    faq: [
      { question: 'Do UV lights really work in HVAC systems?', answer: 'Yes. Coil-mounted UV-C lamps are proven to sterilize the coil surface and reduce mold and microbes, which is especially valuable in humid Florida climates.' },
      { question: 'How often do UV bulbs need replacing?', answer: 'About once a year. The lamp still glows after that but loses germicidal strength, so annual replacement keeps it effective.' },
      { question: 'Is HVAC UV light safe?', answer: 'Yes. The lamp is enclosed inside the air handler and never exposes occupants to UV light during normal operation.' },
    ],
    related: ['mold-remediation', 'air-duct-sanitizing', 'indoor-air-quality-testing'],
  },
  {
    slug: 'indoor-air-quality-testing',
    name: 'Indoor Air Quality Testing',
    shortName: 'Air Quality Testing',
    icon: '🔬',
    metaTitle: 'Indoor Air Quality Testing in Florida',
    metaDescription:
      'Indoor air quality testing across Florida: mold, allergens, humidity and particulates, with results explained. Upfront price.',
    answer:
      'Indoor air quality (IAQ) testing measures the mold spores, allergens, humidity, and fine particulates in your home’s air and ductwork so you can identify problems and verify solutions. It is the objective way to know whether your air is healthy and whether a cleaning worked.',
    intro: [
      "Florida’s heat and humidity make it one of the hardest states to maintain healthy indoor air. Testing removes the guesswork, instead of wondering whether that musty smell is mold, you get measured, lab-verified answers.",
      'We sample the air and, where relevant, surfaces inside the ducts and around the air handler, then compare indoor readings to an outdoor baseline to reveal elevated mold, allergens, or particulates.',
      'Testing is valuable before buying a home, after a leak or mold scare, when someone in the household has unexplained respiratory symptoms, or to confirm that remediation actually resolved the problem.',
    ],
    benefits: [
      { title: 'Know what you breathe', text: 'Objective, lab-verified data on mold, allergens, and particulates.' },
      { title: 'Verify remediation', text: 'Confirm that a cleaning or mold job actually solved the problem.' },
      { title: 'Protect health', text: 'Pinpoint triggers behind allergy and respiratory symptoms.' },
      { title: 'Peace of mind', text: 'Especially valuable before a home purchase or after water damage.' },
    ],
    process: [
      { title: 'Consultation', text: 'We discuss symptoms and concerns to target the right tests.' },
      { title: 'Sampling', text: 'Air and, if needed, surface samples are collected with an outdoor baseline.' },
      { title: 'Lab analysis', text: 'Samples are lab-analyzed for mold, allergens, and particulates.' },
      { title: 'Report & plan', text: 'You receive a clear report and recommended next steps.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$200 to $500' },
      { label: 'Results', value: 'Lab-verified report' },
      { label: 'Best for', value: 'Home purchase, post-leak, symptoms' },
      { label: 'Measures', value: 'Mold, allergens, humidity, particulates' },
    ],
    faq: [
      { question: 'When should I test my indoor air quality?', answer: 'Before buying a home, after water damage or a mold scare, when someone has unexplained respiratory symptoms, or to verify that remediation worked.' },
      { question: 'Can you test specifically for mold?', answer: 'Yes. We take air and surface samples and compare them to an outdoor baseline to detect and quantify elevated mold spores.' },
      { question: 'How long do air quality test results take?', answer: 'Lab-analyzed samples typically return within a few business days, followed by a clear report and recommendations.' },
    ],
    related: ['mold-remediation', 'hvac-cleaning', 'uv-light-installation'],
  },
  {
    slug: 'attic-insulation',
    name: 'Attic Insulation Services',
    shortName: 'Attic Insulation',
    icon: '🏠',
    metaTitle: 'Attic Insulation Removal & Installation in Florida',
    metaDescription:
      'Attic insulation across Florida, blown to the right depth. It is the single biggest lever on a Florida cooling bill. Upfront price.',
    answer:
      'Attic insulation services include removing old, contaminated, or inadequate insulation and installing new insulation to the proper R-value. In Florida, well-insulated attics dramatically reduce cooling costs because they keep 130°F attic heat from radiating into your living space.',
    intro: [
      "Florida’s cooling season never really ends, and an under-insulated attic lets relentless heat pour into your home, forcing the AC to run constantly. Upgrading insulation is one of the most reliable ways to cut a high Florida power bill.",
      'Insulation also matters for air quality: rodent-contaminated, water-damaged, or moldy insulation should be removed, not covered over, because its contaminants can migrate into the air and ductwork.',
      'We remove old or contaminated insulation, air-seal the attic floor, and install new insulation to the recommended R-value for the Florida climate, often pairing it with duct sealing for maximum efficiency gains.',
    ],
    benefits: [
      { title: 'Lower cooling bills', text: 'Proper insulation blocks attic heat, cutting AC run time and cost.' },
      { title: 'Even temperatures', text: 'Rooms stay comfortable instead of fighting attic heat gain.' },
      { title: 'Healthier attic', text: 'Removing contaminated insulation eliminates a hidden air-quality source.' },
      { title: 'Pairs with duct work', text: 'Combined with duct sealing for the biggest efficiency improvement.' },
    ],
    process: [
      { title: 'Attic assessment', text: 'We measure current R-value and check for contamination or damage.' },
      { title: 'Removal', text: 'Old, contaminated, or wet insulation is safely removed.' },
      { title: 'Air seal', text: 'Gaps and penetrations in the attic floor are sealed.' },
      { title: 'Install', text: 'New insulation is installed to the recommended Florida R-value.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$1,500 to $4,000 (size-based)' },
      { label: 'FL attic heat', value: 'Up to 130°F' },
      { label: 'Best paired with', value: 'Duct sealing' },
      { label: 'Payback', value: 'Ongoing cooling-bill savings' },
    ],
    faq: [
      { question: 'Does attic insulation really lower cooling bills in Florida?', answer: 'Yes. A properly insulated attic blocks intense attic heat from radiating into your home, reducing how hard and how long your AC must run.' },
      { question: 'When should old attic insulation be removed?', answer: 'When it is water-damaged, moldy, rodent-contaminated, or compressed and ineffective, these should be removed rather than covered over.' },
      { question: 'What R-value do I need in Florida?', answer: 'Florida attics are typically insulated to around R-30 to R-38; we assess your current level and recommend the right target for your home.' },
    ],
    related: ['air-duct-repair', 'hvac-cleaning', 'air-duct-cleaning'],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
