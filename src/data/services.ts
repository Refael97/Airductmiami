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
      'Air duct cleaning across Florida from $300, to NADCA source-removal standard. You get the price before we book, not after. Insured, NADCA source-removal standard.',
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
      'Dryer vent cleaning across Florida from $100. Trapped lint is the number one cause of dryer fires. Upfront price, insured, and the NADCA source-removal standard.',
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
      'A dryer is only as safe as the duct behind it. The US Fire Administration counts about 2,900 clothes dryer fires in residential buildings each year and names failure to clean as the leading contributing factor, at 34% of them. What that statistic does not say is that a badly installed run makes the cleaning interval much shorter, because every elbow, every sag and every rough interior surface is a place lint stops moving and starts collecting.',
      'The route is the whole job. A dryer can push its exhaust about 35 feet of equivalent length, and every 90 degree elbow subtracts roughly 5 feet from that budget. A run with four elbows has spent 20 of its 35 feet before a single straight section is counted. This is why long attic runs in wide Florida floor plans clog again within a year of being cleaned: the run was never within budget to begin with, and cleaning treats the symptom.',
      'Four things go wrong in Florida laundry rooms more than anywhere else. Flexible plastic or foil accordion hose is used on a concealed run, where its ribbed interior catches lint and its wall can sag into a low spot. The termination is a louvered or screened cover, which is a lint trap facing the wrong way. The run is taken to the roof because no exterior wall is close, which is legal and workable but doubles the maintenance. And the transition behind the dryer is crushed flat when the machine is pushed back against the wall, which can cost more airflow than the entire rest of the run.',
      'The humidity makes all of it worse here. A dryer works by moving moisture out of the clothes and into the air it exhausts, and ambient air that is already at 70% relative humidity gives that air less room to carry water. A Florida dryer is working harder on the same load than the same machine in a dry climate, which is exactly the condition under which a marginal duct run stops being good enough.',
      'A correct installation is unglamorous and specific. Rigid or semi-rigid metal duct on the concealed portion, because smooth wall is what keeps lint moving. Joints assembled so the male end points downstream, in the direction of the airflow, so that lint passes the seam instead of catching on it. Joints sealed with foil tape rather than screws, because a screw head inside the duct is a snag point that builds a lint dam around itself. And the shortest practical route to an exterior wall, chosen before anything is cut.',
      'The transition piece behind the dryer is its own item and it is the one most often wrong. It should be a listed transition duct, exposed rather than concealed, kept short, and never run through a wall or ceiling. If the dryer has to sit close to the wall, a recessed dryer vent box lets the duct turn inside the wall cavity rather than being crushed behind the machine.',
      'The exterior termination matters more than people expect. A hooded cover with a free-swinging damper keeps rain, wind-driven water and pests out while offering nothing for lint to catch on. A screen does the opposite: it is the single most common reason a newly cleaned vent performs badly within weeks, and in Florida it is also where birds and wasps build. The damper needs to swing freely when the dryer runs and fall closed when it stops.',
      'Where a run cannot be brought inside the length budget, the answer is either a different route or a booster fan designed for dryer exhaust, sized and installed so that it is serviceable. It is not a longer run with more elbows and a hope. A duct that cannot move the air will overheat the dryer, and an overheating dryer shortens its own life long before it ever starts a fire.',
      'Never vent a dryer into an attic, a crawlspace, a garage or a soffit. It is not a shortcut, it is a humidity source aimed at the part of a Florida house least able to handle it, and the lint that lands with it is fuel. For a gas dryer there is a second reason: the exhaust carries combustion products, and a disconnected or indoor-terminating run puts them in the house.',
      'Every job ends with an airflow test, because a dryer vent is one of the few home systems where the result is measurable on the spot. The number before and the number after is what tells you whether the route you paid for is doing what it was supposed to do, and it is what separates an installation from a length of duct pushed through a hole.',
    ],
    benefits: [
      { title: 'Lower fire risk', text: 'Smooth rigid metal duct on a short route gives lint nowhere to build up, which addresses the factor behind about a third of residential dryer fires.' },
      { title: 'One-cycle drying', text: 'A properly sized, sealed run restores full airflow, so clothes dry in one cycle and the dryer stops overheating itself trying.' },
      { title: 'Within the length budget', text: 'The route is planned against the roughly 35 foot equivalent length a dryer can actually push, counting 5 feet for each elbow, before anything is cut.' },
      { title: 'A termination that is not a lint trap', text: 'A hooded cover with a free-swinging damper instead of a screen, which is what keeps performance from degrading within weeks of a clean.' },
      { title: 'No moisture damage', text: 'A sealed run that terminates outdoors keeps hot, humid exhaust out of your walls and attic, where it feeds mold.' },
      { title: 'Measured, not asserted', text: 'An airflow test at the end means the new route is shown to work rather than described as working.' },
    ],
    process: [
      { title: 'Route planning', text: 'We measure the space and work out the equivalent length of each possible route, then choose the shortest practical one to an exterior wall or, when there is no other option, the roof.' },
      { title: 'Remove what is not code', text: 'Plastic or foil accordion hose on concealed runs, screened covers and crushed sections come out rather than being worked around.' },
      { title: 'Ducting installation', text: 'Rigid metal duct is cut and fitted with elbows kept to a minimum, with each joint assembled so the male end points downstream.' },
      { title: 'Seal without snag points', text: 'Joints are sealed with foil tape rather than screws, because a screw head inside the duct builds a lint dam around itself.' },
      { title: 'Transition behind the dryer', text: 'A listed transition duct, kept short and left exposed, or a recessed vent box where the machine has to sit tight to the wall.' },
      { title: 'Exterior termination', text: 'A hooded vent cover with a free-swinging damper, and the wall or roof penetration weather-sealed properly.' },
      { title: 'Airflow verification', text: 'A final airflow test confirms the new run moves air the way the dryer manufacturer intended, and you see the number.' },
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
      { question: 'How long can a dryer vent run be?', answer: 'About 35 feet of equivalent length, and every 90 degree elbow subtracts roughly 5 feet from that budget. A run with four elbows has spent 20 of its 35 feet before any straight duct is counted, which is why long attic runs in wide Florida floor plans clog again within a year of being cleaned.' },
      { question: 'Why does my vent clog again so soon after cleaning?', answer: 'Usually because the route is over its length budget, or because the termination is a screened or louvered cover that catches lint from the inside. Cleaning a run that was never within budget treats the symptom. Re-routing it, or replacing the cover with a hooded one that has a free-swinging damper, is what fixes it.' },
      { question: 'Can I vent my dryer into the attic or garage?', answer: 'No. It is a humidity source aimed at the part of a Florida house least able to handle it, and the lint that lands with it is fuel. On a gas dryer there is a second reason: the exhaust carries combustion products, so an indoor termination puts them in the house.' },
      { question: 'Why should the joints not have screws?', answer: 'A screw head inside the duct is a snag point. Lint catches on it, builds a dam around it and narrows the duct at exactly the place you cannot see. Joints are sealed with foil tape instead, and assembled with the male end pointing downstream so lint passes the seam rather than catching on it.' },
      { question: 'What is the duct behind the dryer called, and does it matter?', answer: 'It is the transition duct, and it is the piece most often wrong. It should be a listed transition duct, kept short and left exposed rather than run through a wall or ceiling. Crushed flat when the dryer is pushed back, it can cost more airflow than the entire rest of the run. A recessed dryer vent box solves it where the machine has to sit tight to the wall.' },
      { question: 'Is a booster fan a good idea?', answer: 'Where a route genuinely cannot be brought inside the length budget, a booster fan made for dryer exhaust, sized properly and installed where it can be serviced, is the right answer. It is not a substitute for a sensible route, and it is not a reason to accept more elbows.' },
      { question: 'Does Florida humidity affect dryer venting?', answer: 'Yes, and it is underrated. A dryer works by moving moisture into the air it exhausts, and air already at 70% relative humidity has less room to carry water. The same machine works harder here on the same load, which is exactly when a marginal duct run stops being good enough.' },
      { question: 'How long does a dryer vent installation take?', answer: 'One to three hours for most jobs. A short run to a nearby exterior wall is at the quick end. A reroute that involves opening a wall, or taking a new run to the roof, takes longer and we say so before booking rather than after arriving.' },
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
      'A typical Florida home with unsealed ductwork loses 20% to 30% of its conditioned air before it reaches a room. That air does not disappear: it is paid for at the meter and then delivered to an attic. In a Florida attic that means cooling a space which reaches 120°F to 140°F on a summer afternoon, which is why duct sealing frequently pays for itself faster than any equipment upgrade a contractor will try to sell you first.',
      'Duct systems fail differently in Florida than they do anywhere else, and the reason is the attic. Flexible duct is rated for a long service life, but it realistically lasts 10 to 15 years in a Florida attic rather than the 20 to 25 the rating implies. Heat degrades the outer jacket, and it degrades the tape and mastic at the joints faster still. Well installed rigid metal duct lasts considerably longer, though its joints and its insulation wrap age on the same timescale as everything else up there.',
      'There are four ways a duct run actually fails, and they need different repairs. A joint comes apart at the collar, usually because the original installer relied on tape rather than a strap and mastic, and the run now dumps its entire output into the attic. The jacket tears, often where the duct rubs a truss or where somebody stepped near it while running cable. A run gets crushed or kinked, by storage, by a later trade, or by its own sag once a support strap lets go. Or the insulation gives up, which is the quietest failure of the four and the one most often missed.',
      'That last one matters more in Florida than most places. Duct carrying 55°F air through air at 90°F and 70% relative humidity sits below the dew point. Intact insulation keeps the surface above it. Once the insulation is compressed, wet or torn away, the duct sweats, the condensation soaks the jacket and the ceiling below it, and what began as an efficiency problem becomes a mold problem and eventually a drywall problem. Brown staining on a ceiling below an attic run is almost never a roof leak.',
      'The symptoms a homeowner notices come in a predictable order. One room never cools while the rest of the house is fine. The bill climbs without the thermostat moving. The system runs longer and longer cycles and still leaves the house feeling sticky, because a leaking system moves air but loses the dehumidification that comes with a proper cycle. Dust returns within days of cleaning, because the return side is pulling attic air through a gap instead of pulling house air through a filter.',
      'Finding the leaks is the part most quotes skip. A visual inspection finds a disconnected run and nothing else, because the joints that leak worst are the ones wrapped in insulation and hidden behind it. A duct pressure test seals the registers, pressurises the system with a calibrated fan and measures how much air the system cannot hold. That gives a number to work against before the repair and a second number after it, which is the only honest way to say whether a repair worked.',
      'The repair itself is unglamorous and the details decide whether it lasts. Joints are sealed with mastic, not tape. Cloth backed duct tape is the single most common bad repair in a Florida attic: the adhesive is not rated for the heat, it releases within a season or two, and the joint is open again while the tape still looks like it is doing something. Mastic is a brushed on compound that stays flexible, and where a mechanical connection is needed it is a strap at the collar rather than adhesive holding the duct on.',
      'Insulation is put back to a real R-value rather than wrapped loosely and hoped over. Supply runs in an unconditioned attic want R-6 to R-8 depending on where the run sits and which code cycle the house was built under. Insulation that is compressed by storage, or crushed where a run rests on a joist, is not doing its rated job no matter what is printed on the jacket.',
      'The honest repair-or-replace rule is this. Localised leaks, a handful of disconnected collars and torn sections in an otherwise sound system are repaired, and the repair is good value. A system where the flex is brittle across the whole attic, where the insulation is saturated, or where the duct is simply undersized for the equipment it serves, is replaced, because sealing a system that cannot move enough air only makes the static pressure problem worse. Where duct insulation is saturated, that section is replaced rather than cleaned, because porous insulation cannot be cleaned back to a safe state.',
      'What it costs is driven by scope rather than by square footage. A handful of reconnected collars and sealed joints sits at the bottom of the range. A full attic of replaced flex with new supports and new insulation sits at the top. We pressure-test first and give you the number before any work starts, because a duct quote given from a doorway is a guess.',
    ],
    benefits: [
      { title: 'Stop energy waste', text: 'Sealing leaks keeps cooled air in the ducts instead of the attic. On a system losing 20% to 30%, this is usually the highest-return efficiency work available on the house.' },
      { title: 'Even comfort', text: 'Repaired runs deliver full airflow to the rooms that never quite cooled, which is almost always a duct problem rather than an undersized air conditioner.' },
      { title: 'Better air quality', text: 'A sealed return stops pulling dusty, humid attic air past the filter instead of through it.' },
      { title: 'Lower humidity', text: 'A system that holds its air completes proper cycles, and a proper cycle is what actually dehumidifies a Florida house.' },
      { title: 'Stops the sweating', text: 'Restored insulation keeps the duct surface above the dew point, which is what ends the condensation, the ceiling stains and the mold that follows them.' },
      { title: 'A number, before and after', text: 'A pressure test before the work and a re-test after it means the result is measured rather than asserted.' },
    ],
    process: [
      { title: 'Pressure test', text: 'Registers are sealed and the system is pressurised with a calibrated fan, which measures total leakage and maps where it is.' },
      { title: 'Inspect the whole run', text: 'Every accessible run is checked at the collar, along the jacket, at the supports and at the insulation, because the worst joints are the hidden ones.' },
      { title: 'Reconnect and strap', text: 'Disconnected runs go back on the collar mechanically, with a strap, before anything is sealed.' },
      { title: 'Seal with mastic', text: 'Joints are sealed with brushed mastic rather than tape, because tape adhesive is not rated for a Florida attic and releases within a season or two.' },
      { title: 'Replace what cannot be repaired', text: 'Crushed, brittle or saturated sections are replaced with new insulated duct rather than patched.' },
      { title: 'Re-support the runs', text: 'Sagging runs are re-hung so they are not resting on joists or holding a low spot where condensate can collect.' },
      { title: 'Insulate and re-test', text: 'Insulation is restored to R-6 to R-8 for attic runs, then the system is tested again so the improvement is a measurement rather than a promise.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$250 to $2,000+ (scope-based)' },
      { label: 'Common issue', value: '20 to 30% air lost to leaks' },
      { label: 'Best for', value: 'Hot rooms, high bills, old flex duct' },
      { label: 'Attic temps', value: 'Up to 130°F in FL summers' },
    ],
    faq: [
      { question: 'How do I know if my air ducts are leaking?', answer: 'The usual signs are one room that never cools while the rest of the house is fine, an energy bill that climbs without the thermostat moving, dust that returns within days of cleaning, and a house that stays sticky even when the thermostat is satisfied. All four are consistent with duct leakage, and a duct pressure test is what confirms it and locates it.' },
      { question: 'Is duct sealing worth it in Florida?', answer: 'Usually yes, and more so here than almost anywhere else. A typical Florida home loses 20% to 30% of its conditioned air to duct leaks, and the air is being lost into an attic that reaches 120°F to 140°F. Sealing that frequently pays for itself faster than any equipment upgrade.' },
      { question: 'Should I repair or replace my ducts?', answer: 'Localised leaks, disconnected collars and torn sections in an otherwise sound system are repaired, and the repair is good value. A system where the flex is brittle across the whole attic, where insulation is saturated, or where the duct is undersized for the equipment, is replaced. Sealing an undersized system only raises its static pressure.' },
      { question: 'How long does flex duct last in a Florida attic?', answer: 'Realistically 10 to 15 years, at the low end of its rating. Attic temperatures of 120°F to 140°F degrade the outer jacket, and they degrade the tape and mastic at the joints faster still. Well installed rigid metal duct lasts considerably longer, though its joints and insulation wrap age on the same timescale.' },
      { question: 'Why are my air ducts sweating?', answer: 'Because the duct surface has dropped below the dew point. A run carrying 55°F air through attic air at 90°F and high humidity will condense on its outside unless the insulation keeps the surface warm enough. Sweating ducts mean the insulation is compressed, wet or torn, and it is the failure most often missed.' },
      { question: 'There is a brown stain on my ceiling under the attic. Is that the roof?', answer: 'Often it is not. A duct run that has lost its insulation sweats, the condensation soaks the jacket and then the drywall below it, and the stain looks like a slow roof leak. It is worth having the duct above that spot checked before anyone goes on the roof.' },
      { question: 'Can I just use duct tape on a loose joint?', answer: 'It will look fixed and it will not stay fixed. Cloth-backed duct tape is the most common bad repair in a Florida attic: the adhesive is not rated for the heat, it releases within a season or two, and the joint is open again while the tape is still in place. Joints want a mechanical strap at the collar and brushed mastic over it.' },
      { question: 'What is a duct pressure test?', answer: 'The registers are sealed, the duct system is pressurised with a calibrated fan, and the fan measures how much air the system cannot hold. It gives a leakage number before the repair and a second number after it, which is the only honest way to show a repair worked. A visual inspection finds a disconnected run and misses the wrapped joints that leak worst.' },
      { question: 'What R-value should duct insulation be in Florida?', answer: 'Supply runs in an unconditioned attic generally want R-6 to R-8, depending on where the run sits and which code cycle the house was built under. Insulation that is compressed by storage, or crushed where a run rests on a joist, is not delivering its rated value whatever is printed on the jacket.' },
      { question: 'Will sealing my ducts make my air conditioner colder?', answer: 'It will make more of the cold you are already paying for arrive in the room, which is usually what people mean. It does not change the equipment. If the house still does not cool after a sealed, properly sized duct system is delivering full airflow, the problem is the equipment or the load, not the ducts.' },
      { question: 'How long does duct repair take?', answer: 'A handful of reconnected collars and sealed joints is a few hours. A full attic of replaced flex with new supports and new insulation runs one to two days depending on the size of the system and how accessible the attic is.' },
      { question: 'Do you give the price before starting?', answer: 'Yes. We pressure-test first and the number comes before any work does. A duct quote given from a doorway, without a test and without going into the attic, is a guess.' },
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
      'A UV light on an air conditioner is often worth it in Florida specifically, and considerably less so elsewhere. That is the honest version and it is worth starting with, because this is a product category where a lot is claimed. The reason it earns its place here is narrow and physical: the evaporator coil is cold, wet and dark for most of the Florida year, that is the first place growth establishes, and a UV-C lamp aimed at it holds that surface down continuously rather than once a year when somebody cleans it.',
      'There are two quite different things sold as HVAC UV, and only one of them has a strong case. A coil lamp is mounted inside the air handler and pointed at the coil face and the drain pan. It works on a fixed surface, around the clock, for as long as the system runs, so the dose it delivers to that surface is enormous. An in-duct air sterilisation lamp is meant to treat the air passing by, and air passes a lamp in a fraction of a second, so the dose any single particle receives is tiny. The coil lamp is the one we fit and the one worth buying.',
      'Florida changes the arithmetic because of run hours. A system that runs most of the year gives a coil lamp most of the year of operation, while the same lamp in a seasonal climate spends much of its life switched off next to a dry coil that was not growing anything anyway. The cost is $300 to $700 installed and the case rests on those hours.',
      'It is equally important to be clear about what a UV lamp does not do, because this is where the category earns its bad reputation. It does not filter dust or pollen: it is not a substitute for a decent filter, and MERV 8 to MERV 11 is still what handles particulate in most Florida homes. It does not clean debris already sitting in your ducts: a lamp at the air handler has no effect fifteen feet down a supply run, and if the system needs cleaning it needs cleaning. And it does not fix a musty smell whose real source is standing water in a blocked drain pan, which is a drain problem wearing a mold problem costume.',
      'Placement is most of the value. The lamp wants line of sight to the coil face and to the drain pan, because the pan is the other place growth establishes and the one people forget. A lamp mounted where it illuminates mostly sheet metal is a lamp doing very little, and that is a common outcome when the fitting is treated as a box to be mounted rather than an aim to be taken.',
      'Two practical cautions. UV degrades some materials over time, so wiring insulation, flexible duct liner and plastic components within the lamp’s line of sight need to be checked and shielded where necessary rather than left to embrittle. And some lamps are sold on the basis that they produce ozone. Ozone is a lung irritant, it is not something to generate deliberately in an occupied home, and the lamps worth fitting do not do it. It is a fair question to ask of any unit quoted to you.',
      'Maintenance is one item a year and it is the item people skip. A UV-C lamp continues to glow long after its germicidal output has fallen away, so a lamp that looks like it is working is not evidence that it is. Output falls off over roughly twelve months of continuous service, which is why the bulb is changed annually rather than when it goes dark. A lamp installed in 2024 and never touched since is a blue night light.',
      'Where this fits alongside everything else: if the coil is already fouled, it is cleaned first, because a lamp holds a clean surface clean rather than removing what is already there. If humidity in the house is running above 60%, that is dealt with too, because 60% is the ceiling at which mold finds what it needs on cool surfaces, and no lamp out-argues a humidity problem. The lamp is what keeps the coil from going back to where it was.',
    ],
    benefits: [
      { title: 'Keeps the coil clean', text: 'Continuous UV-C on the coil face holds down the growth that fouls a coil and causes the musty smell, between cleanings rather than instead of them.' },
      { title: 'Works the hours Florida gives it', text: 'A system running most of the year gives a coil lamp most of the year of operation, which is why the case is stronger here than in a seasonal climate.' },
      { title: 'Treats the drain pan too', text: 'Aimed properly, the lamp covers the pan as well as the coil, and the pan is the other place growth establishes and the one usually forgotten.' },
      { title: 'Maintains efficiency', text: 'A coil that stays clean keeps transferring heat at the rate it was designed to, rather than drifting downward between services.' },
      { title: 'Low maintenance', text: 'One bulb a year. The lamp keeps glowing after its germicidal output has gone, so it is changed on a date rather than when it looks dead.' },
      { title: 'Honest about its limits', text: 'It is not a filter, it does not clean ducts, and it does not fix a blocked drain. We will say so before selling you one.' },
    ],
    process: [
      { title: 'Check whether it is the right answer', text: 'If the smell is a blocked drain pan, or the house is running above 60% humidity, we deal with that instead. A lamp does not out-argue either one.' },
      { title: 'Clean the coil first', text: 'A lamp holds a clean surface clean. Where the coil is already fouled, it is cleaned before the lamp goes in, or the lamp is fighting something it cannot win.' },
      { title: 'System sizing', text: 'Lamp output is matched to the air handler and the coil area it has to cover.' },
      { title: 'Aim, not just mount', text: 'The lamp is placed for line of sight to the coil face and the drain pan, rather than wherever the bracket happens to fit.' },
      { title: 'Shield what UV damages', text: 'Wiring insulation, flexible liner and plastics in the lamp’s line of sight are checked and shielded where needed rather than left to embrittle.' },
      { title: 'Verify and date it', text: 'We confirm operation, confirm the interlock cuts the lamp when the panel opens, and label it with the date the bulb is due.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$300 to $700 installed' },
      { label: 'Maintenance', value: 'Annual bulb replacement' },
      { label: 'Best for', value: 'Humid FL homes, coil mold, allergies' },
      { label: 'Targets', value: 'Coil mold, bacteria, viruses' },
    ],
    faq: [
      { question: 'Do UV lights really work in HVAC systems?', answer: 'A coil-mounted lamp does the job it is sold for: it holds down growth on the evaporator coil surface, continuously, which is worth real money in a climate that keeps that surface wet. An in-duct lamp sold to sterilise the passing air is a much weaker proposition, because air passes a lamp in a fraction of a second and the dose is correspondingly small. We fit the first kind.' },
      { question: 'How often do UV bulbs need replacing?', answer: 'About once a year, and this is the item people skip. The lamp goes on glowing long after its germicidal output has fallen away, so a lamp that looks like it is working is not evidence that it is. It is changed on a date rather than when it goes dark.' },
      { question: 'Is HVAC UV light safe?', answer: 'In normal operation, yes: the lamp is enclosed inside the air handler and there is no exposure to anyone in the house. Do not look at an energised lamp with the panel open, and the unit should have an interlock that cuts it when the panel comes off. Ask whether a lamp you are quoted produces ozone, because some are sold on that basis and ozone is a lung irritant you should not be generating deliberately in an occupied house.' },
      { question: 'Will a UV light clean my air ducts?', answer: 'No, and this is the most common misunderstanding about them. A lamp at the air handler has no effect fifteen feet down a supply run. It holds the coil clean; it does nothing about debris already sitting in the ductwork. If the system needs cleaning, it needs cleaning.' },
      { question: 'Can a UV light replace my air filter?', answer: 'No. It does not filter dust or pollen at all, and those are what most people are actually reacting to. MERV 8 to MERV 11 is still what handles particulate in most Florida homes; the lamp is doing a different job entirely.' },
      { question: 'Will it get rid of the musty smell from my AC?', answer: 'It will, if the smell is growth on the coil, which it usually is. It will not if the smell is standing water in a blocked drain pan, which is a drain problem rather than a mold problem, and which a lamp cannot reach. We check which one it is before recommending anything.' },
      { question: 'Is a UV light worth it in Florida?', answer: 'Often yes here specifically, and less so elsewhere. The lamp controls the mold and bacteria that grow on a permanently damp surface, which is the condition Florida creates and drier climates do not, and a system that runs most of the year gives the lamp most of the year of operation. $300 to $700 installed.' },
      { question: 'Where should the lamp be mounted?', answer: 'With line of sight to the coil face and to the drain pan. The pan is the other place growth establishes and the one most often left out. A lamp mounted where it mostly illuminates sheet metal is a lamp doing very little, which is what happens when fitting is treated as mounting a box rather than taking an aim.' },
      { question: 'Can UV damage anything inside the air handler?', answer: 'It can, over time. UV embrittles some plastics and wiring insulation, so anything in the lamp’s line of sight is checked and shielded where needed. It is a known part of doing the job properly rather than a reason to avoid the product.' },
      { question: 'Should I clean the coil first or just fit the lamp?', answer: 'Clean first. A lamp holds a clean surface clean; it does not strip a coil that is already fouled. Fitting a lamp to a dirty coil is paying for something and then asking it to do a job it was not designed for.' },
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
  {
    slug: 'sliding-glass-door-repair',
    name: 'Sliding Glass Door Repair',
    shortName: 'Sliding Door Repair',
    icon: '🚪',
    metaTitle: 'Sliding Glass Door Repair in Florida | $150 to $400',
    metaDescription:
      'Sliding glass door repair across Florida, $150 to $400 for most roller and track jobs. Stainless rollers near the coast, tracks capped. Price before we book.',
    answer:
      'Sliding glass door repair restores a patio slider that drags, sticks, jumps the track, or will not lock, by replacing the rollers, repairing or capping the bottom track, and replacing worn handles and locks. Most Florida repairs run $150 to $400 and finish in one visit. Replacing the whole door assembly is different work that requires a licensed contractor, a building permit, and a Florida Product Approval or a Miami-Dade Notice of Acceptance.',
    intro: [
      'Almost every call about a sliding door starts the same way. It takes two hands, or a shoulder, or a foot braced against the frame. That is not a strength problem and it is not the house settling. A slider carries its entire weight on two, sometimes four, small wheels at the bottom of the panel. Each wheel is a nylon or steel tire on a sealed bearing, riding a strip of aluminum about an inch wide. When those bearings seize, the wheels stop turning and the panel starts dragging, so you are no longer rolling 90 to 150 pounds of glass, you are sliding it across metal. A door that needs two hands is a roller job.',
      'Sliding doors are the largest single share of the US patio door market, 43.4 percent of revenue in 2024 according to Grand View Research. In Florida they are how a house opens onto a patio, a lanai, or a condo balcony, which means the same door is also the one taking the salt, the sand, the sun and the storm shutters year after year. It is the busiest moving part in the building envelope and the one nobody services until it stops.',
      'Two things kill sliders here, and they are not the same thing. Within a few miles of either coast the problem is corrosion. Salt-laden air attacks the steel inside roller bearings and pits the aluminum track, and a bearing that has rusted internally will not turn no matter how clean you keep the track. That is why stainless rollers are specified near the water and plain steel ones are not, and it is why the first thing we ask is the address. What we will not do is publish a number of months for how long a roller lasts by the beach. The figures in circulation come from competitor marketing pages, they contradict each other, and none of them cites a test. The mechanism is real. The countdown is not something anyone has measured honestly.',
      'The other killer is grit, and it works everywhere in the state. Sand, lawn clippings and construction dust land in the bottom track, and every pass of the door grinds them into the aluminum. It behaves like a lapping paste. Over a few years it cuts a shallow groove down the travel path, and once there is a groove the roller rides on its edges instead of its face, wears unevenly, and starts climbing out. That is why a track is usually worn only across the four or five feet the door actually travels and looks new at the ends. It is also why a stiff brush and a vacuum in the track twice a year does more for the hardware than anything else you can do without tools.',
      'A worn track does not usually mean a new door. A stainless steel track cap is a thin channel set over the damaged aluminum, bedded down and fastened, giving the rollers a fresh hard flat surface to run on. The part itself is inexpensive, a six foot cover retails around $11 and an eight foot stainless repair cap around $37, and the value is entirely in the fit. A cap laid on a dirty or uneven track telegraphs every flaw underneath and the door feels wrong again within a year. Replacing the track itself instead of capping it means taking the frame apart, and that crosses out of repair and into replacement, with the permit and product approval that come with it.',
      'Yes, the door comes out of the frame. There is no way to change rollers otherwise. The panel is lifted straight up into the head channel, which is cut deep enough to swallow it, then the bottom swings clear into the room and the panel lifts out. It goes back the same way. A standard six foot residential panel is roughly 90 to 130 pounds and takes two people to handle safely. A laminated impact panel can exceed 150 pounds, which is why impact doors get two technicians, suction cups and a padded landing spot rather than a wall to lean against.',
      'A door that will not lock is usually not a broken lock. The mortise lock in a slider throws a hook into a keeper mounted on the jamb, and that hook only reaches the keeper if the panel is sitting at the height it was set at. Dead rollers let the panel drop a quarter of an inch, the hook lands under the keeper instead of inside it, and the door will not latch. Replace the rollers, set the height, and the lock starts working again with no new lock parts. When the lock genuinely is the problem, a snapped hook, a seized cylinder, a bent keeper, the part and the labor sit inside the $125 to $300 band.',
      'There are doors we tell people not to repair. If the frame is racked or bent, new rollers feel right for about a month, because the panel is running in an opening that is no longer a rectangle and the rollers go back to taking the load unevenly. A frame can sometimes be shimmed back into square and sometimes it cannot, and $400 spent on a door that needs replacing is $400 gone. The same goes for a fogged insulated glass unit, which is a failed edge seal and is fixed by replacing the glass, not by treating it, at $250 to $600 for the panel. Corrosion that has eaten through the sill, a fixed panel loose in its frame, or a door you are already planning to make impact rated are all cases where the money belongs in the replacement, not in the repair.',
      'The code matters here more than most people expect. Sliding glass doors are glazed openings. In the Wind-Borne Debris Region, and in the High-Velocity Hurricane Zone that covers Miami-Dade and Broward counties, exterior glazed openings have to be impact resistant or protected. Florida Building Code Residential section R301.2.1.2 points glazed openings at TAS 201, 202 and 203 or at ASTM E1886 and E1996, with the large missile test applying within 30 feet of grade and the small missile test above it. Garage doors fall under the same rule and a different test standard, ANSI/DASMA 115. So a slider and a garage door face the identical requirement to protect the opening, and anyone telling you they are tested the same way is wrong about the detail.',
      'Replacement brings a permit and a product approval with it. A permit is required for impact window and door installation in effectively every Florida jurisdiction, and the unit has to carry a Florida Product Approval, or in Miami-Dade a Notice of Acceptance. An NOA unit carries a permanent label reading Miami-Dade County Product Control Approved, and the full NOA has to be available at the job site if the building official asks for it. Two further rules catch homeowners by surprise. In Miami-Dade and Broward you cannot pull a permit to put a non impact unit back into an opening. And the 25 percent rule means that if you replace more than a quarter of the total glazed opening area of the house inside twelve months in the WBDR or HVHZ, every replacement unit has to meet current impact standards. A three panel slider is a large share of the glass in a small house, so that rule bites harder on sliders than on windows.',
      'Now the licensing, stated plainly. Florida removed glass and glazing from the mandatory state license types in 2012, so hardware repair and non structural glass work do not require a state contractor license. Installing doors and windows, and anything structurally anchored into the opening, still requires a Division I contractor license or an appropriate specialty license, and counties and cities may require a local license on top of that. The line does not run between small jobs and big jobs. It runs at the anchors. Rollers, tracks, handles, locks, weatherstrip and screens sit on the repair side of it. Pulling the assembly out of the wall does not. Repairs are done by our technicians. Replacements go to a licensed partner contractor who pulls the permit under their own license, and whose product approval or NOA goes on that permit. We do not print a license number on this page, and a number printed on any website proves nothing on its own. Ask for it in writing on the quote and look it up in the DBPR license search before work starts.',
      'Whether a specific repair needs a permit is a local question and worth one phone call. The consistent position across Florida jurisdictions is that servicing hardware does not trigger a permit and replacing the assembly does, because the permit attaches to altering the opening and its ability to carry wind load rather than to changing a wheel. Building departments do set their own rules, so if you want certainty before we arrive, call yours and ask about hardware repair on an existing slider.',
      'What a fair price looks like, and what a bait quote looks like. Labor in this trade runs $60 to $150 an hour, and most companies carry a minimum service charge of $100 to $250, so a truck, a technician and an hour on your patio already accounts for most of a $150 to $400 roller job before a single part goes in. That arithmetic is why a $69 roller special cannot be the finished price. It is a door opener, and the number moves once the panel is out and your door is lying on the living room floor. A real quote names things: how many panels, which roller is going in and whether it is stainless, whether the track is being cleaned, capped or replaced, whether the lock and keeper are included, and what the price does if the frame turns out to be racked. A quote that is one number and a promise is not a quote.',
      'What this service does not cover, so nothing is a surprise. We do not enlarge or alter openings, which is structural work for a general contractor. We do not install impact doors ourselves, because that is permitted, product approved work that belongs to the licensed partner. We do not service French doors, swing patio doors, frameless shower doors or storefront glass. We do not reseal a fogged insulated glass unit, because that repair does not exist. And we do not quote a replacement sight unseen, because the panel count, the opening size and whether you sit inside the HVHZ move that number by thousands of dollars.',
    ],
    benefits: [
      { title: 'A door that moves with one finger', text: 'New rollers on a clean, flat track is what turns a two-handed shove back into a one-finger slide. That is the whole point of the visit and it is testable in front of you before we leave.' },
      { title: 'The roller matched to your address', text: 'Stainless bearings near the coast, where salt air is what actually kills the hardware, and the standard roller inland where wear and grit are the problem. The wrong roller three miles from the water is a repeat visit you pay for twice.' },
      { title: 'The track capped instead of the frame torn out', text: 'A stainless cap over a grooved track gives the rollers a hard flat surface again and keeps the job inside the $175 to $400 range. Replacing the track means opening the frame, which is replacement work with a permit attached.' },
      { title: 'A lock that latches because the door sits right', text: 'Most sliders that will not lock have a height problem, not a lock problem. Setting the panel back to its original height usually fixes the latch with no new lock parts and no locksmith.' },
      { title: 'A straight answer on repair versus replace', text: 'A bent frame, a fogged glass unit, or a corroded sill are cases where repair money is wasted, and we say so on site. We would rather lose a $300 booking than hand back a door that feels right for a month.' },
      { title: 'The price before we book, not after', text: '$150 to $400 covers most rollers, tracks, handles and locks, quoted from the panel count and what the door is doing. Not decided by a technician standing in your living room with the glass already out.' },
    ],
    process: [
      { title: 'Diagnose on the panel, not on the phone', text: 'We slide the door end to end, lift it to check play in the rollers, look down the track for a groove, and test the lock against the keeper. Two minutes of that tells us whether this is rollers, track, height, or a frame that is out of square.' },
      { title: 'Take the panel out safely', text: 'The panel lifts into the head channel and swings clear at the bottom. Two technicians and suction cups on anything impact rated, blankets and a prepared landing spot inside, never a wall or a tile floor.' },
      { title: 'Clear the track and decide on it', text: 'Years of sand, grit and old lubricant come out of the bottom track first, because you cannot judge aluminum you cannot see. Then we show you the groove, if there is one, and tell you whether it takes a stainless cap or has gone past capping.' },
      { title: 'Set the new rollers, not just fit them', text: 'Rollers go in matched to the door brand and to the coast, then both adjustment screws are set so the panel sits plumb to the jamb and level in the opening. A roller fitted without setting the height is half a repair.' },
      { title: 'Lock, keeper and weatherstrip', text: 'The hook is aligned to the keeper and the keeper reset if it has moved, the handle is refitted or replaced, and the brush pile weatherstrip is replaced where it has flattened, because that is where the water and the noise come in.' },
      { title: 'Rehang, test and hand back', text: 'The panel goes back, we run it end to end at least twenty times, lock and unlock from both sides, and walk you through what was replaced and what we found. The price you were quoted is the price on the invoice.' },
    ],
    quickFacts: [
      { label: 'Typical repair price', value: '$150 to $400' },
      { label: 'Time on site', value: '1 to 2 hours for rollers and track' },
      { label: 'Crew size', value: '2 technicians on impact panels' },
      { label: 'Permit needed', value: 'No to repair hardware, yes to replace the door' },
      { label: 'Near the coast', value: 'Stainless rollers, not plain steel' },
      { label: 'Full replacement', value: '$1,200 to $4,000 non-impact, $2,500 to $9,000 impact' },
    ],
    faq: [
      { question: 'How much does sliding glass door repair cost in Florida?', answer: 'Most repairs land between $150 and $400. Roller replacement is $150 to $400, track repair or capping added to a roller job is $175 to $400, and a handle or lock replacement is $125 to $300. A glass panel is $250 to $600. Labor across the trade runs $60 to $150 an hour with a minimum service charge of $100 to $250, which is why the very cheap advertised specials never survive contact with the actual door.' },
      { question: 'My door takes two hands to open. Is that the rollers?', answer: 'Almost always, yes. The panel rides on two to four small wheels on sealed bearings. When the bearings seize the wheels stop turning and the panel drags along the aluminum instead of rolling on it, which is exactly the resistance you are feeling. It is a hardware failure, not a sign that the door is too heavy or that you need to be careful with it.' },
      { question: 'How long does a sliding door repair take?', answer: 'One to two hours for a typical roller and track job on a two panel door. A four panel slider, a pocket door, or a track that needs capping across its full length takes longer. If the frame turns out to be racked we stop and talk to you before spending your money, rather than finishing a repair that will not hold.' },
      { question: 'Does the door have to come out of the frame?', answer: 'Yes. The rollers are underneath the panel and there is no way to reach them otherwise. The panel is lifted up into the head channel, swung out at the bottom, and set down inside on blankets. A standard six foot panel is roughly 90 to 130 pounds and a laminated impact panel can exceed 150 pounds, so it is a two person lift and we send two technicians for impact doors.' },
      { question: 'Can a worn track be repaired, or does the whole door have to go?', answer: 'Most worn tracks can be capped. A stainless steel cap is a thin channel set over the damaged aluminum so the rollers run on a fresh hard surface again, and it costs far less than opening the frame. It is not a fix for every track. If the aluminum is cut through, corroded away at the sill, or the frame is bent, capping only hides the problem and we will tell you that instead of selling it.' },
      { question: 'What happens if the frame is bent or out of square?', answer: 'New rollers will feel correct for a few weeks and then the door goes back to dragging, because the panel is running in an opening that is no longer rectangular and the load returns to one corner. Sometimes the frame can be shimmed and squared. When it cannot, repair is money spent twice, and the honest answer is replacement. We tell you which one you have while the panel is out and you can see it.' },
      { question: 'When is a sliding door not worth repairing?', answer: 'Four situations. A frame that is bent or racked past shimming. A sill corroded through, which is common close to the water. An insulated glass unit fogged between the panes, which is a failed seal fixed only by replacing the glass. And a non impact door in the HVHZ or the Wind-Borne Debris Region that you already intend to make impact rated, where repair money is spent on a door you are about to remove.' },
      { question: 'Do I need a permit to repair my sliding glass door?', answer: 'Servicing hardware, rollers, tracks, handles, locks, weatherstrip and screens, does not trigger a permit in Florida jurisdictions as a rule, because a permit attaches to altering the opening and its ability to carry wind load. Replacing the door assembly does require one. Building departments set their own rules, so if you want certainty, call yours and ask about hardware repair on an existing slider before we arrive.' },
      { question: 'Does sliding door repair require a contractor license in Florida?', answer: 'Repair generally does not. Florida removed glass and glazing from the mandatory state license types in 2012, so hardware repair and non structural glass work do not require a state contractor license, though a county or city may still require a local one. Installing a door assembly anchored into the opening does require a Division I contractor license or an appropriate specialty license. Repairs are done by our technicians, and replacements go to a licensed partner contractor who pulls the permit under their own license. Ask for the license number in writing on your quote and look it up in the DBPR license search, whoever you hire.' },
      { question: 'What does a full sliding glass door replacement cost?', answer: 'A non impact slider is $1,200 to $4,000 installed. An impact rated two panel unit is $2,500 to $5,000, and a three or four panel impact slider is $4,000 to $9,000. Large architectural units run higher again. The gap between a $300 repair and a $4,000 replacement is why we would rather diagnose the door properly than quote either one over the phone.' },
      { question: 'If I replace my slider, do I have to go impact?', answer: 'In Miami-Dade and Broward, which are the High-Velocity Hurricane Zone, yes. Once a permit is pulled you cannot put a non impact unit back into the opening. Elsewhere in the Wind-Borne Debris Region the opening has to be impact resistant or protected, so shutters remain an option on some units. The 25 percent rule also applies: replace more than a quarter of the total glazed opening area of the house within twelve months and every replacement unit has to meet current impact standards. A three panel slider is a large share of the glass in a small house, so that rule catches sliders more often than windows.' },
      { question: 'Is an impact slider covered by the same code as a garage door?', answer: 'Same rule, different test. Both are openings that have to be impact resistant or protected in the Wind-Borne Debris Region and the HVHZ. A sliding door is a glazed opening tested to TAS 201, 202 and 203 or to ASTM E1886 and E1996, with the large missile test applying within 30 feet of grade. Garage doors are tested to ANSI/DASMA 115. Both need a Florida Product Approval, or a Miami-Dade Notice of Acceptance inside that county.' },
      { question: 'Why does my door fail so much faster near the beach?', answer: 'Salt air corrodes the steel inside roller bearings and pits the aluminum track, and a bearing rusted on the inside will not turn no matter how clean the track is. That is why stainless rollers are specified near the water. We will not quote you a number of months, because the figures floating around online come from marketing pages that disagree with each other and cite no testing. What we will do is put the corrosion resistant part in when your address calls for it.' },
      { question: 'What should a fair quote include, and what does a bait quote look like?', answer: 'A fair quote names the panel count, the specific roller going in and whether it is stainless, whether the track is being cleaned, capped or replaced, whether the lock and keeper are included, and what happens to the price if the frame is found to be racked. A bait quote is one low number with none of that behind it. With labor at $60 to $150 an hour and minimum service charges of $100 to $250, an advertised price well under $150 is a way through your front door, not a price for the work.' },
    ],
    related: ['air-duct-repair', 'attic-insulation', 'hvac-cleaning'],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
