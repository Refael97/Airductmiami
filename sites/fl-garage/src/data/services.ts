/**
 * The 12 Florida services. Each drives one page at /services/{slug} and its
 * Spanish mirror at /es/servicios/{slug}.
 *
 * Every price here comes from research/fl-garage/BRIEF.md section 4, the
 * only price list on the site. The same numbers appear on the homepage
 * price table, the prices page, agent.json and every article and city page.
 * They must never diverge: publishing prices is this site's differentiator,
 * and one contradiction destroys it.
 *
 * Prices are published as STARTING prices ("From $X") for a standard single
 * door in normal condition, always shown with the disclaimer in
 * components/PriceDisclaimer.astro and the per-service priceFactors list. A
 * 16 foot double door with a wind rating is not the same job as a 1960s
 * single, and the site must never let a reader assume otherwise.
 *
 * Content is answer-first: `answer` is a quotable definition an answer
 * engine can lift, followed by depth, benefits, process, extractable facts,
 * and an FAQ that becomes FAQPage structured data. Every Florida claim comes
 * from section 5 of the brief. No cold weather, no winter, no New York.
 */

import type { Service, FAQ } from './types';

export const services: Service[] = [
  {
    slug: 'garage-door-spring-replacement',
    name: 'Garage Door Spring Replacement',
    shortName: 'Spring Replacement',
    metaTitle: 'Garage Door Spring Replacement in Florida | $150 to $350',
    metaDescription:
      'Broken garage door spring? Same-day replacement across Florida, from Miami to Tampa, Orlando and Jacksonville. $150 to $350 per spring, written price before work.',
    priceLow: 150,
    priceHigh: 350,
    priceNote: 'per spring installed; both springs together adds $120 to $250',
    priceFactors: [
      'A 16 foot double door, and any wind-rated or impact-rated door, carries two heavier gauge springs, which raises the parts cost',
      'High-cycle springs, rated for 25,000 cycles or more instead of 10,000, cost more than standard',
      'Cables, drums, bearings or bottom brackets that rusted along with the spring add to the job',
      'Same-day and after-hours calls carry the emergency premium of $150 to $300',
    ],
    emergency: true,
    hurricane: false,
    answer:
      'Garage door spring replacement is the removal and installation of the torsion or extension springs that carry the weight of your door. In Florida it costs $150 to $350 per spring installed, and replacing both springs at once adds $120 to $250. It is the most common garage door repair we do and the one that most often leaves a car stuck inside.',
    intro: [
      'A garage door weighs between 130 and 350 pounds, and a 16 foot double door with a wind rating sits at the heavy end because of the extra steel in the panels and the struts. The opener does not lift that weight. The springs do. When one snaps, with a bang you hear from inside the house, the door becomes dead weight and the opener cannot move it safely.',
      'Springs fail from cycle count, not weather. A standard torsion spring is rated for about 10,000 open and close cycles, which is 7 to 10 years for a household that uses the garage as the front door, and less in a golf cart community or a home where the door runs 6 to 8 times a day. Humidity and salt air shorten that further. Within a few miles of either coast we see springs pitted with rust at 5 years, and a rust pit is where a spring cracks.',
      'This is the one repair nobody should attempt themselves. A torsion spring under tension stores enough energy to break bones. We carry the common wire sizes and lengths on the truck, including the heavier gauges that rated double doors need, so most calls in Florida are finished in one visit.',
    ],
    benefits: [
      { title: 'Same visit, most of the time', text: 'We stock the common torsion and extension sizes, including the heavier springs on wind-rated double doors, so the usual call is diagnosed and finished in one trip.' },
      { title: 'The price you were quoted', text: 'You get the range on the phone and a written number before anything is touched. It does not move once work starts.' },
      { title: 'Both springs assessed honestly', text: 'When one snaps the other has the same cycles and the same rust. We explain the case for doing both and tell you when it can wait.' },
      { title: 'Galvanized springs near the coast', text: 'On canal front and beach side homes we can fit galvanized springs, which slow the corrosion that shortens spring life in salt air.' },
    ],
    process: [
      { title: 'Inspection and quote', text: 'We measure wire size, inside diameter and length, check the cables, drums and bearings for rust, and give you a written price.' },
      { title: 'Safe tension release', text: 'Winding bars, never a screwdriver. The old spring is unwound under control and removed.' },
      { title: 'Installation and winding', text: 'The new spring is fitted and wound to the turns your door weight calls for, then the set screws are seated on the torsion tube.' },
      { title: 'Balance test', text: 'We disconnect the opener and check the door holds at waist height, then reconnect and run the full travel, including the safety reverse.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$150 to $350 per spring' },
      { label: 'Both springs', value: 'Adds $120 to $250' },
      { label: 'Time on site', value: '30 minutes to 2 hours' },
      { label: 'Spring lifespan', value: 'About 10,000 cycles, 7 to 10 years' },
    ],
    faq: [
      { question: 'How much does garage door spring replacement cost in Florida?', answer: 'Between $150 and $350 for a single spring installed. Doing both at the same time adds $120 to $250 rather than doubling, because most of the labor is shared. If you are quoted well over $600 for two standard springs on a single door, get a second opinion.' },
      { question: 'Do I need to replace one spring or both?', answer: 'If your door has two springs and one broke, the other has the same number of cycles and the same corrosion on it and usually fails within months. Replacing both is a genuine recommendation, not an upsell, but it is your call and we will do just the one if you prefer.' },
      { question: 'Can I use my garage door with a broken spring?', answer: 'No. Do not run the opener: it will strain the motor, bend panels, and can drop the door. If you must move it, lift manually with help and prop it, then stop using it until it is fixed.' },
      { question: 'Why do garage door springs break so often in Florida?', answer: 'Cycle count and corrosion. Florida doors open more often than doors in most of the country because the garage is the main entrance, and humidity and salt air pit the steel, which is where a spring cracks. A spring near the coast can be finished in 5 to 7 years rather than 10.' },
      { question: 'How long does the replacement take?', answer: 'Usually 30 minutes to 2 hours depending on the door and whether the cables, drums or bottom brackets also need work.' },
    ],
    related: ['garage-door-cable-repair', 'emergency-garage-door-repair', 'garage-door-tune-up'],
  },
  {
    slug: 'garage-door-cable-repair',
    name: 'Garage Door Cable Repair',
    shortName: 'Cable Repair',
    metaTitle: 'Garage Door Cable Repair in Florida | $95 to $300',
    metaDescription:
      'Rusted, frayed or slipped garage door cable? Same-day cable repair across Florida. $95 to $300, cable and drum together $225 to $400, written estimate before work.',
    priceLow: 95,
    priceHigh: 300,
    priceNote: 'cable and drum together $225 to $400; tension adjustment only $85 to $140',
    priceFactors: [
      'Whether the cable only slipped or actually failed, which are different jobs',
      'A drum or bottom bracket rusted or damaged along with the cable',
      'Double doors with two cable runs rather than one',
      'Seized hardware that makes removal slow, common within a few miles of the coast',
    ],
    emergency: true,
    hurricane: false,
    answer:
      'Garage door cable repair covers the steel lift cables that connect the bottom brackets of the door to the spring drums. In Florida it costs $95 to $300, or $225 to $400 when the drum is replaced at the same time. If the cable only slipped because the spring lost tension, a tension adjustment is $85 to $140.',
    intro: [
      'The cables do the pulling. When one frays, snaps or jumps off its drum, the door goes crooked in the opening and usually jams hard against the track. It looks dramatic and it is unsafe to force.',
      'In Florida the cause is almost always rust. The cable ends at the bottom bracket, a few inches above a slab that gets wet every afternoon for half the year, and salt air within a few miles of either coast finishes it. A brown, fuzzy section of cable near the bottom bracket is the most common visible warning we see on any door, and it is a cable that will break within months.',
      'Sometimes the cable itself is fine and only slipped because the spring lost tension or the door was bumped. That case is a tension adjustment at $85 to $140, not a replacement, and we tell you when that is what you are looking at.',
    ],
    benefits: [
      { title: 'Correct diagnosis first', text: 'A slipped cable and a failed cable look identical to a homeowner and cost very different amounts. We check before quoting.' },
      { title: 'Both sides checked', text: 'Cables corrode as a pair. We inspect the other side and both bottom brackets rather than leaving you a second call in a month.' },
      { title: 'Drum and bracket inspection', text: 'Rust that ate a cable usually reached the drum and the bottom bracket. We check both so the new cable does not go the same way.' },
      { title: 'Door re-balanced', text: 'The job finishes with a balance check, because an unbalanced door is what eats cables.' },
    ],
    process: [
      { title: 'Secure the door', text: 'The door is clamped and supported before any tension is touched.' },
      { title: 'Inspect cables, drums and brackets', text: 'We identify whether this is a slip, a break, or drum damage, and quote accordingly.' },
      { title: 'Replace or re-seat', text: 'New cable fitted and wound evenly onto the drum, or the existing cable re-seated and tensioned.' },
      { title: 'Balance and test', text: 'Full travel test with the opener disconnected, then reconnected.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$95 to $300' },
      { label: 'Cable and drum together', value: '$225 to $400' },
      { label: 'Tension adjustment only', value: '$85 to $140' },
      { label: 'Time on site', value: '30 to 90 minutes' },
    ],
    faq: [
      { question: 'How much does garage door cable repair cost in Florida?', answer: '$95 to $300 for cable repair or replacement. If the drum is rusted or damaged too it runs $225 to $400. If the cable only slipped and nothing is damaged, a tension adjustment is $85 to $140.' },
      { question: 'Why did my garage door cable come off?', answer: 'Rust at the bottom bracket is the first cause in Florida. Behind it: a door out of balance, a spring that lost tension, or a cable wound unevenly on the drum during an earlier repair.' },
      { question: 'Is a broken cable dangerous?', answer: 'Yes. The door can hang crooked and drop unevenly. Do not run the opener and do not try to force it level.' },
      { question: 'Should both cables be replaced together?', answer: 'Usually yes. They have the same age and the same corrosion, and the labor is largely shared, so doing both costs far less than two separate visits.' },
      { question: 'Can I stop the cables rusting?', answer: 'You can slow it. Keep the bottom seal in good condition so water does not sit at the bracket, rinse salt off the hardware a few times a year if you are near the coast, and have the cables looked at during an annual tune-up. Galvanized cables help but they still corrode; they just take longer.' },
    ],
    related: ['garage-door-spring-replacement', 'garage-door-off-track-repair', 'emergency-garage-door-repair'],
  },
  {
    slug: 'garage-door-opener-repair',
    name: 'Garage Door Opener Repair',
    shortName: 'Opener Repair',
    metaTitle: 'Garage Door Opener Repair in Florida | $95 to $300',
    metaDescription:
      'Opener not responding, door reverses, sensors blinking, board dead after a storm? Same-day garage door opener repair across Florida. Most repairs cost $95 to $300.',
    priceLow: 95,
    priceHigh: 300,
    priceNote: 'logic board, gear kit, sensors, travel limits',
    priceFactors: [
      'The part that failed, from a sensor realignment to a logic board',
      'Whether your model still has parts available',
      'Older units where the repair is close to the cost of replacement',
      'Same-day and after-hours calls carry the emergency premium of $150 to $300',
    ],
    emergency: true,
    hurricane: false,
    answer:
      'Garage door opener repair covers the motor unit and everything attached to it: safety sensors, remotes and keypads, the logic board, the gear kit, and the travel and force limits. Most opener repairs in Florida cost $95 to $300. Misaligned or sun-struck safety sensors are the most common reason a door refuses to close, and they are usually a fast fix.',
    intro: [
      'When a door will not close and reverses instead, the opener is usually doing its job. The photo eyes near the floor stop the door if anything breaks the beam, and in Florida they trigger on more than dust: a west facing garage gets low afternoon sun straight into the lens, and a bracket bumped by a bin or a bike sits a quarter inch out of line.',
      'Heat is the Florida failure. A closed garage reaches 100°F and more on a summer afternoon, and the opener hangs at the ceiling where it is hottest. That cooks logic boards, dries out capacitors and softens the plastic drive gear in older chain units until the teeth strip, which is the motor running while nothing moves. Summer lightning is the other one: a surge on the line takes out a board with no warning.',
      'We repair rather than replace where it makes sense, and say so plainly when it does not. An opener past 15 years old with a failed board is usually cheaper to replace than to fix, and it will not have the battery backup you want when the power goes out after a storm. We show you both prices.',
    ],
    benefits: [
      { title: 'Sensors fixed properly', text: 'Aligned, cleaned, bracket secured, and shaded from afternoon sun where that is the cause, so it does not drift again next month.' },
      { title: 'Repair when repair is right', text: 'Gears, capacitors, boards and limits are all repairable. We quote the repair against a replacement so you can choose.' },
      { title: 'All major brands', text: 'LiftMaster, Chamberlain, Genie, Craftsman, Linear and the rest.' },
      { title: 'Manual release tested', text: 'Every visit ends with the emergency release checked, because after a storm outage that cord is how you get the car out.' },
    ],
    process: [
      { title: 'Reproduce the fault', text: 'We run the door and watch what actually happens, rather than guessing from a description.' },
      { title: 'Test the chain of causes', text: 'Sensors, power, limits, force settings, gears, board, in the order of likelihood.' },
      { title: 'Quote the repair, and the alternative', text: 'You get the repair price and, when relevant, the replacement price side by side.' },
      { title: 'Repair and verify', text: 'Full cycle testing, safety reverse test, manual release checked, remotes re-programmed.' },
    ],
    quickFacts: [
      { label: 'Most repairs', value: '$95 to $300' },
      { label: 'Most common cause', value: 'Safety sensors, misaligned or in direct sun' },
      { label: 'Time on site', value: 'Under 1 hour for most faults' },
      { label: 'Brands serviced', value: 'LiftMaster, Chamberlain, Genie, Craftsman' },
    ],
    faq: [
      { question: 'Why does my garage door start to close then reverse?', answer: 'Almost always the safety sensors. Something is blocking the beam, the lenses are dirty, one has been knocked out of alignment, or afternoon sun is hitting the receiver. A steady light on both units means aligned; a blinking light means not.' },
      { question: 'Is it worth repairing an old opener?', answer: 'Under about 10 years old, usually yes. Past 15 years with a failed logic board, replacement at $275 to $600 is often close to the repair price, comes with a warranty, and can include battery backup for outages. We quote both so you can decide.' },
      { question: 'The motor runs but the door does not move. What is wrong?', answer: 'That is the classic symptom of a stripped drive gear. Garage heat softens the plastic gear in older chain units, and it is a common and repairable failure.' },
      { question: 'My opener is dead after a storm. Is it the board?', answer: 'Check the outlet and the breaker first, then try the wall button. If the unit has no lights at all after a storm, a surge probably took the logic board. On a unit under 10 years old that is a $95 to $300 repair; on an older unit we quote a replacement alongside it. A surge protector on the opener outlet is cheap insurance.' },
      { question: 'Can you program a universal remote or a car button?', answer: 'Yes, including HomeLink and universal remotes, and re-syncing everything after a board replacement.' },
    ],
    related: ['garage-door-opener-installation', 'smart-garage-door-opener-installation', 'garage-door-tune-up'],
  },
  {
    slug: 'garage-door-opener-installation',
    name: 'Garage Door Opener Installation',
    shortName: 'Opener Installation',
    metaTitle: 'Garage Door Opener Installation in Florida | $275 to $600',
    metaDescription:
      'New garage door opener installed across Florida. Chain, belt and wall mount jackshaft, with battery backup for storm outages. $275 to $600 installed, published pricing.',
    priceLow: 275,
    priceHigh: 600,
    priceNote: 'unit plus installation, standard rail',
    priceFactors: [
      'Drive type: chain is the entry point, belt costs more, and a wall mount jackshaft runs $450 to $800',
      'Horsepower needed for a 16 foot double door or an impact-rated door with its extra steel',
      'Battery backup, which adds $60 to $150, plus keypads and smart control',
      'Electrical work if there is no outlet at the ceiling',
    ],
    emergency: false,
    hurricane: false,
    answer:
      'Garage door opener installation is the removal of your old unit and the fitting, wiring and programming of a new one. In Florida it costs $275 to $600 installed with a standard rail. Chain drive is the entry point at $275 to $450, belt drive runs $350 to $600 and is the quiet choice for an attached garage, and battery backup adds $60 to $150 on any of them.',
    intro: [
      'Almost every Florida house has an attached garage with a bedroom or living room sharing a wall with it, and in a two story home a bedroom often sits directly above. That makes noise the deciding factor for most families. A chain drive is the cheapest and the loudest. A belt drive costs a little more and is the one to install when someone sleeps next to the garage.',
      'The second decision is battery backup. Power goes out here after every strong storm, sometimes for days, and an opener with a battery keeps working through it. Wall mount jackshaft units at $450 to $800 clear the ceiling entirely, which matters in the low headroom single garages of 1950s to 1970s neighborhoods and in garages where the ceiling is already full of storage racks.',
      'We size the horsepower to the door rather than upselling by default. A standard single steel door does not need the biggest motor in the catalog. A 16 foot impact-rated door with its extra steel does, and an undersized opener on that door burns out in a few years.',
    ],
    benefits: [
      { title: 'The right drive for your garage', text: 'Noise, ceiling height, door weight and budget decide it, and we explain the trade-off rather than defaulting to the priciest.' },
      { title: 'Old unit removed and hauled', text: 'Included in the price, not an extra line at the end.' },
      { title: 'Safety set up correctly', text: 'Photo eyes at the right height and out of direct sun, force and travel limits set, auto-reverse tested.' },
      { title: 'Everything programmed', text: 'Remotes, keypad, car buttons and the app if the unit is smart.' },
    ],
    process: [
      { title: 'Assess the door and space', text: 'Door weight, headroom, backroom, the outlet, and where the noise matters.' },
      { title: 'Remove the old unit', text: 'Disconnected, taken down, and hauled away.' },
      { title: 'Mount and wire', text: 'Rail assembled and mounted, motor hung and braced, sensors and wall control wired, battery fitted if chosen.' },
      { title: 'Program and safety test', text: 'Limits, force, auto-reverse, manual release, and every remote and keypad paired.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$275 to $600 installed' },
      { label: 'Time on site', value: '2 to 4 hours' },
      { label: 'Quietest option', value: 'Belt drive' },
      { label: 'Battery backup', value: 'Adds $60 to $150' },
    ],
    faq: [
      { question: 'How much does garage door opener installation cost in Florida?', answer: '$275 to $600 installed for most homes, unit plus installation on a standard rail. Chain drive sits at the low end, belt drive in the middle to upper part, and a wall mount jackshaft unit at $450 to $800 goes above it. Battery backup adds $60 to $150.' },
      { question: 'Belt drive or chain drive?', answer: 'Belt if the garage is attached and there is a bedroom or living space next to or above it, which is most Florida homes. Chain if the garage is detached or budget leads. The belt premium is small next to years of noise.' },
      { question: 'Do I need battery backup?', answer: 'We recommend it on any garage you rely on daily. Outages after storms are a fact of life in Florida, and the manual release is not something you want to work out in the dark with the car inside. It adds $60 to $150.' },
      { question: 'Do I need a permit to replace a garage door opener?', answer: 'Replacing only the opener normally does not require a building permit in Florida. Replacing the door itself does, and we handle that on door installations.' },
      { question: 'Can you install an opener I bought myself?', answer: 'Yes. We install customer-supplied units, though the warranty on the unit itself then sits with you and the retailer rather than with us. Our labor warranty still applies.' },
    ],
    related: ['smart-garage-door-opener-installation', 'garage-door-opener-repair', 'new-garage-door-installation'],
  },
  {
    slug: 'smart-garage-door-opener-installation',
    name: 'Smart & WiFi Garage Door Opener Installation',
    shortName: 'Smart Opener Installation',
    metaTitle: 'Smart Garage Door Opener Installation Florida | From $350',
    metaDescription:
      'WiFi garage door openers with battery backup and camera options installed across Florida. Phone control, left open alerts, works through outages. $350 to $750 installed.',
    priceLow: 350,
    priceHigh: 750,
    priceNote: 'WiFi unit with battery backup and camera options',
    priceFactors: [
      'The unit chosen: a WiFi opener with battery backup sits low in the range, a built in camera at the top',
      'Belt drive versus chain drive under the smart hardware',
      'A WiFi extender if the garage sits behind concrete block walls with weak signal',
      'Keypads, extra remotes and a second door on the same account',
    ],
    emergency: false,
    hurricane: false,
    answer:
      'A smart garage door opener connects to your home WiFi so you can open, close and check the door from your phone, and get an alert when it has been left open. In Florida a WiFi opener with battery backup costs $350 to $750 installed, with a built in camera at the top of that range. Battery backup is the feature that matters most here, because the app is worth nothing in a power outage without it.',
    intro: [
      'The feature people use is not remote opening. It is the notification. Knowing the door has been sitting open for two hours in an afternoon downpour, and closing it from your desk, is what makes these worth having. Seasonal owners in Naples, Sarasota and the Palm Beaches use the app to check the door from out of state, and vacation rental owners around Kissimmee use it to let cleaners in without handing out a code.',
      'In Florida the unit to buy has battery backup built in. After a named storm the power can be out for days, and a smart opener with a battery still opens the door from the wall button, the remote or the phone while the cell network is up. Several units also add a camera, which is useful when you are away for the season and want to see that the garage is dry after a storm.',
      'We set up the app, join it to your network, and make sure alerts reach your phone before we leave, which is the part most installations skip. If your current opener is under about ten years old and healthy, ask about a retrofit controller; we quote it against the full unit so you can compare.',
    ],
    benefits: [
      { title: 'Battery backup as standard advice', text: 'Phone control is worth little in an outage without it, so the units we recommend in Florida have it built in.' },
      { title: 'Left-open alerts that work', text: 'Configured and tested on your phone before we leave.' },
      { title: 'Shared and time limited access', text: 'Family members, a one-time code for a delivery or a contractor, and scheduled access for a cleaner at a rental.' },
      { title: 'Camera where it earns its place', text: 'Worth it for a seasonal home or a rental. Not worth it for most primary homes, and we say so.' },
    ],
    process: [
      { title: 'Check compatibility and signal', text: 'We confirm whether your opener accepts a retrofit or needs replacing, and test the WiFi at the ceiling.' },
      { title: 'Install the hardware', text: 'Controller or full opener fitted, battery installed, door position sensor mounted.' },
      { title: 'Connect and configure', text: 'Joined to your WiFi, app account set up, alerts switched on, access shared with the household.' },
      { title: 'Test on your phone', text: 'Open, close, and the left open alert all verified from your own device.' },
    ],
    quickFacts: [
      { label: 'WiFi opener with battery backup', value: '$350 to $750 installed' },
      { label: 'Camera option', value: 'Top of the range' },
      { label: 'Time on site', value: '1 to 3 hours' },
      { label: 'Needs', value: 'WiFi reaching the garage' },
    ],
    faq: [
      { question: 'Can I make my existing garage door opener smart?', answer: 'Often yes. A retrofit controller wires into most openers made in the last 15 years and adds phone control and alerts, and it costs less than a new unit. It does not add battery backup, so on an older opener without one we usually recommend the full unit at $350 to $750.' },
      { question: 'Which smart garage door system is best?', answer: 'It depends on what else you run. myQ is the default for LiftMaster and Chamberlain units, Aladdin Connect for Genie, and there are controllers that integrate more openly with other smart home systems. We fit what suits your setup rather than one brand by default.' },
      { question: 'Does it work when the internet or the power goes down?', answer: 'If the internet is down the remote and wall button keep working and only the phone control pauses. If the power is out, only a unit with battery backup keeps working at all, which is why we install those in Florida.' },
      { question: 'Is WiFi reception in a garage a problem?', answer: 'Sometimes. Concrete block walls and a steel door cut WiFi more than drywall does, so a garage at the far end of a CBS house often has weak signal. We test during the visit and tell you if you need an extender rather than leaving you with something unreliable.' },
    ],
    related: ['garage-door-opener-installation', 'garage-door-opener-repair', 'garage-door-tune-up'],
  },
  {
    slug: 'garage-door-off-track-repair',
    name: 'Off Track Garage Door Repair',
    shortName: 'Off-Track Repair',
    metaTitle: 'Garage Door Off Track Repair in Florida | $140 to $600',
    metaDescription:
      'Garage door jumped the track, hit by a car or flexed loose in a storm? Same-day off track repair across Florida. $140 to $600, quoted in writing before work starts.',
    priceLow: 140,
    priceHigh: 600,
    priceNote: 'severe cases with bent track or damaged sections run higher',
    priceFactors: [
      'Whether the track can be realigned or has to be replaced',
      'Damaged sections, rollers, hinges or brackets found once the door is secured',
      'Double doors with two full track runs',
      'Same-day and after-hours calls carry the emergency premium of $150 to $300',
    ],
    emergency: true,
    hurricane: false,
    answer:
      'Off track garage door repair puts a door that has jumped its rollers out of the track back into alignment, and replaces whatever bent or broke in the process. In Florida it costs $140 to $600, and severe cases with bent track or damaged sections run higher. Do not run the opener or try to force the door back yourself.',
    intro: [
      'Doors come off track for three reasons: something hit them, a cable failed and let one side drop, or worn rollers finally jumped a bent section of track. In Florida there is a fourth. Wind pressure during a storm flexes the door in and out of the opening, and a door with loose track bolts or worn rollers comes out of the track before the wind even peaks.',
      'Tight driveways in townhouse communities in Doral, Kendall and the newer Central Florida subdivisions produce a steady run of doors clipped by a bumper. Rust is the quieter cause: the bottom rollers and the lowest foot of track sit in water every afternoon of the rainy season, the roller stems seize, and a roller that will not turn eventually skips out of the track.',
      'Do not try to force it back. A door off track can fall, and the tension still in the springs makes it unpredictable. Keep people and cars clear until it is secured. Once it is safe the job is straightforward: realign the track, replace the rollers and any bent sections, check the cables and springs that may have caused it, and re-balance.',
    ],
    benefits: [
      { title: 'Secured before anything else', text: 'The door is clamped and supported so nothing moves while we work.' },
      { title: 'The cause found, not just the symptom', text: 'A door that jumped the track once will do it again if the seized roller or rusted cable that caused it is left in place.' },
      { title: 'Bent parts replaced, not hammered straight', text: 'Straightened track never runs the same and fails again.' },
      { title: 'Honest repair-or-replace call', text: 'If the panels are damaged past repair we show you why, with photos. On a wind-rated door we also check that the struts and track brackets still match the rating.' },
    ],
    process: [
      { title: 'Secure and assess', text: 'Door clamped, damage documented, cause identified.' },
      { title: 'Written quote', text: 'Including whether any sections or tracks need replacing.' },
      { title: 'Realign and replace', text: 'Rollers back in track, bent components replaced, hardware tightened.' },
      { title: 'Balance and cycle test', text: 'Manual balance check, then a full run with the opener.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$140 to $600' },
      { label: 'Severe damage', value: 'Bent track or damaged sections run higher' },
      { label: 'Time on site', value: '1 to 3 hours' },
      { label: 'Do not', value: 'Run the opener or force it back' },
    ],
    faq: [
      { question: 'How much does it cost to fix a garage door off its track in Florida?', answer: '$140 to $600 for most cases. If the track is bent or a section is damaged it runs higher, because parts are being replaced rather than realigned, and we quote that in writing before we start.' },
      { question: 'Can I put the door back on the track myself?', answer: 'No. The springs still hold tension and the door can fall. This is one of the genuinely dangerous DIY repairs.' },
      { question: 'My car hit the door. Can it be repaired or does it need replacing?', answer: 'Often a single damaged section can be replaced at $250 to $800 rather than the whole door, which is far cheaper. We photograph the damage and show you the options with prices for both.' },
      { question: 'Why did it come off the track?', answer: 'Impact, a rusted cable that let one side drop, seized rollers on a bent track, or wind flexing the door in a storm. Finding which one matters, otherwise it happens again.' },
      { question: 'My door came off the track during a storm. What now?', answer: 'Treat it as storm damage: keep clear of it, do not run the opener, and call us. We secure the opening first, then assess whether the track and panels can be repaired or the door needs replacing, and give you photos and a written quote you can pass to your insurer.' },
    ],
    related: ['garage-door-cable-repair', 'garage-door-panel-replacement', 'storm-damage-garage-door-repair'],
  },
  {
    slug: 'garage-door-panel-replacement',
    name: 'Garage Door Panel & Section Replacement',
    shortName: 'Panel Replacement',
    metaTitle: 'Garage Door Panel Replacement in Florida | $250 to $800',
    metaDescription:
      'Dented or rusted garage door section replaced across Florida. $250 to $800 per section, matched to the rating on your door. Honest repair or replace advice with both prices.',
    priceLow: 250,
    priceHigh: 800,
    priceNote: 'per section, when the profile is still available',
    priceFactors: [
      'The number of damaged sections',
      'Material: a steel section and a wood or aluminum section are far apart on price',
      'Whether the manufacturer still makes your profile, which decides availability and whether the rating can be kept',
      'Painting or finishing to match the rest of the door',
    ],
    emergency: false,
    hurricane: false,
    answer:
      'Garage door panel replacement swaps a single damaged section of the door rather than replacing the entire door. In Florida it costs $250 to $800 per section installed, when the manufacturer still makes that profile. It is usually the right call when one or two sections are damaged and the rest of the door is sound, and it costs a fraction of a new door at $950 to $4,200.',
    intro: [
      'Backing into the bottom section is the most common garage door accident there is, and short Florida driveways and golf carts add to it. A garage door is made of separate sections, so one damaged panel can often be swapped.',
      'The catch is availability, and in Florida there is a second catch: the rating. A section on a wind-rated or impact-rated door is part of a tested assembly. The replacement has to be the same profile and gauge from the same manufacturer for the door to keep the rating on your permit and your wind mitigation report. If the model is discontinued, the choice becomes a visible mismatch on an older unrated door, or a new rated door, and we lay out both with prices.',
      'Rust is the other reason we replace sections here. The bottom section takes the water, and on a door within a few miles of the coast the lower edge rusts through from the inside in 10 to 15 years. A rusted bottom section on an otherwise sound door is a single section swap. "This door is basically done" is the most common inflated claim in this industry, and we prove it with photos before we say it.',
    ],
    benefits: [
      { title: 'Thousands cheaper than replacement', text: 'When it applies, a section swap costs a fraction of a new installed door.' },
      { title: 'Match confirmed before you commit', text: 'We identify the manufacturer, model, profile and gauge and check availability before quoting.' },
      { title: 'Both prices, side by side', text: 'Section replacement against full replacement, so the choice is yours and it is informed.' },
      { title: 'Structure checked', text: 'Impact usually bends more than the panel. We check track, rollers, hinges and the struts too.' },
    ],
    process: [
      { title: 'Identify the door', text: 'Manufacturer, model and section, then a real availability check.' },
      { title: 'Quote both paths', text: 'Section replacement and full door replacement, with the trade-offs stated.' },
      { title: 'Install the section', text: 'Door supported, damaged section removed, new one fitted and aligned, struts and brackets refitted to the original layout.' },
      { title: 'Re-balance and test', text: 'A new section changes the door weight slightly, so spring balance is re-checked.' },
    ],
    quickFacts: [
      { label: 'Per section installed', value: '$250 to $800' },
      { label: 'New door, for comparison', value: '$950 to $4,200' },
      { label: 'Time on site', value: '2 to 4 hours' },
      { label: 'Main constraint', value: 'Whether the profile is still made' },
    ],
    faq: [
      { question: 'Can just one garage door panel be replaced?', answer: 'Yes, when the rest of the door is sound and a matching section is still available. It costs $250 to $800 installed against $950 to $4,200 for a new door.' },
      { question: 'What if my door model is discontinued?', answer: 'Then the options are a close but visible mismatch, replacing the section and repainting the whole door, or a new door. On a rated door only the manufacturer\'s matching section keeps the rating, so a discontinued rated door usually means replacement. We price every option rather than pushing the most expensive.' },
      { question: 'Does replacing a section affect the hurricane rating?', answer: 'It keeps the rating only if the replacement is the manufacturer\'s matching section with the same reinforcement. We order that section and refit the struts and brackets to the original layout. A generic section on an impact-rated door leaves you with a door that no longer matches the rating on file, and we will not do that.' },
      { question: 'My bottom section is rusted through. Can it be replaced on its own?', answer: 'Usually yes, if the rust is confined to the bottom section and the frame, track and hardware are sound. We replace the section, the bottom seal and the bottom brackets, which are usually rusted too.' },
      { question: 'How do I know if I am being told the truth about needing a new door?', answer: 'Ask for photos of the damage and a written quote for both options. Any company confident in its diagnosis will provide both without argument.' },
    ],
    related: ['garage-door-off-track-repair', 'new-garage-door-installation', 'storm-damage-garage-door-repair'],
  },
  {
    slug: 'new-garage-door-installation',
    name: 'New Garage Door Installation',
    shortName: 'New Door Installation',
    metaTitle: 'New Garage Door Installation in Florida | $950 to $4,200',
    metaDescription:
      'New wind-rated garage doors installed across Florida. Steel, aluminum, fiberglass, vinyl and wood, with the permit pulled by us. $950 to $4,200 installed, prices by material.',
    priceLow: 950,
    priceHigh: 4200,
    priceNote: 'standard wind-rated steel single, installed, permit included in quote',
    priceFactors: [
      'Material: steel, aluminum, vinyl, fiberglass and wood span a wide range',
      'Single door versus a 16 foot double, which is the biggest single factor',
      'Wind-rated versus impact-rated, and the higher design pressures near the coast and in the HVHZ',
      'Windows, insulation, hardware, custom colors and HOA required styles',
    ],
    emergency: false,
    hurricane: false,
    answer:
      'New garage door installation covers removing the old door, fitting the new door, tracks, springs and hardware, and reconnecting the opener. In Florida a standard wind-rated steel single door costs $950 to $4,200 installed, with the building permit included in the quote. Every new garage door in Florida has to be rated for the wind pressure at your address, and the permit is pulled by a licensed contractor.',
    intro: [
      'A garage door is the largest opening in a Florida house and about a third of the front elevation, so it is a mechanical decision, a code decision and a curb appeal decision at once. Material sets the price and the maintenance. Installed, steel runs $950 to $3,000, aluminum $1,300 to $4,000, fiberglass $1,400 to $3,800, vinyl $1,100 to $2,800 and wood $2,200 to $9,000.',
      'The code decision is not optional. The Florida Building Code requires the door to be rated for the design wind pressure at the site, documented on the permit. In Miami-Dade and Broward that means a door with a Miami-Dade NOA; everywhere else a Florida Product Approval number. A wind-rated door resists pressure. An impact-rated door is also tested against large missile impact and is what most people mean by a hurricane door; those start around $1,800 and we cover them on the hurricane-rated door page.',
      'Steel is the default for most homes: strongest value, available with a rating at every price point, and the insulated builds take the edge off a garage that otherwise hits 100°F in August. Aluminum and fiberglass resist salt on canal front and beach side homes in Cape Coral, Fort Lauderdale and Jupiter. Wood looks best and costs the most to keep against termites and humidity. The best time to replace is March to May, before the season starts on 1 June and before lead times stretch.',
    ],
    benefits: [
      { title: 'Prices published by material', text: 'You can see the ranges before you call, which almost nobody in this market will show you.' },
      { title: 'Permit handled', text: 'We pull the permit as the licensed contractor, the rating is documented on it, and you get the paperwork for your wind mitigation file.' },
      { title: 'Old door removed and disposed', text: 'Included, not a surprise line.' },
      { title: 'New springs sized to the new door', text: 'A rated door weighs more than the door it replaces. Reusing old springs is how new doors fail early.' },
    ],
    process: [
      { title: 'Measure and select', text: 'Opening measured, headroom and backroom checked, wind zone and exposure confirmed, material and style chosen against your budget and any HOA rule.' },
      { title: 'Written quote', text: 'Door, hardware, springs, labor, permit, removal and disposal, itemized.' },
      { title: 'Permit and lead time', text: 'We file the permit and order the door. A stock rated steel door typically takes 2 to 6 weeks; custom sizes, colors and impact glass take longer, and everything takes longer in the weeks after a storm.' },
      { title: 'Installation and inspection', text: 'Old door and track out, new sections, track, struts, springs and hardware in, opener reconnected, safety reverse tested, inspection scheduled and the permit closed.' },
    ],
    quickFacts: [
      { label: 'Installed total', value: '$950 to $4,200, standard wind-rated steel single' },
      { label: 'Steel door installed', value: '$950 to $3,000' },
      { label: 'Permit', value: 'Included in the quote, pulled by us' },
      { label: 'Time on site', value: '4 to 6 hours' },
    ],
    faq: [
      { question: 'How much does a new garage door cost installed in Florida?', answer: '$950 to $4,200 for a standard wind-rated steel single door, permit included. Aluminum, fiberglass and vinyl move within similar ranges, wood runs $2,200 to $9,000, and impact-rated doors start around $1,800. A 16 foot double costs more than a single and we quote it after measuring.' },
      { question: 'Which garage door material is best for Florida?', answer: 'Steel for most homes: strong, low maintenance, rated at every price point. Aluminum or fiberglass within a few miles of the coast for salt resistance. Wood where appearance leads and you accept the termite and humidity upkeep. Vinyl is the budget option for a rental or a workshop.' },
      { question: 'Do I need a permit for a new garage door in Florida?', answer: 'Yes. Replacing a garage door requires a building permit, pulled by a licensed contractor, with the wind rating documented on it. We handle the filing, the inspection and closing the permit, and the fee is in the quote. Replacing only the opener normally does not need one.' },
      { question: 'Is an insulated garage door worth it in Florida?', answer: 'On an attached garage, usually yes, for the opposite reason from the north. Summer garages reach 100°F and more, and the insulated door takes the edge off that, protects the opener, and is stiffer and quieter. If there is a bedroom above the garage or the air handler sits in it, it is an easy call.' },
      { question: 'Do I need a new opener with a new door?', answer: 'Not usually. If your opener is healthy and rated for the new door weight, we reconnect it. A rated door is heavier than the door it replaces, so if the opener is undersized we tell you before, not after.' },
    ],
    related: ['hurricane-rated-garage-door-installation', 'garage-door-panel-replacement', 'garage-door-opener-installation'],
  },
  {
    slug: 'hurricane-rated-garage-door-installation',
    name: 'Hurricane-Rated Garage Door Installation',
    shortName: 'Hurricane-Rated Door Installation',
    metaTitle: 'Hurricane-Rated Garage Doors in Florida | From $1,800',
    metaDescription:
      'Impact-rated and HVHZ garage doors installed across Florida with Miami-Dade NOA or Florida Product Approval. Permit handled. $1,800 to $6,500, may qualify for an insurance credit.',
    priceLow: 1800,
    priceHigh: 6500,
    priceNote: 'impact-rated or HVHZ door with Florida Product Approval or Miami-Dade NOA',
    priceFactors: [
      'Wind-rated versus impact-rated, and the design pressure at your address',
      'Single versus a 16 foot double, and the heavier springs and struts a rated double needs',
      'Windows: impact-rated glass doors run to $8,000 and above',
      'Material and finish, from stock white steel to aluminum, wood look and custom colors',
    ],
    emergency: false,
    hurricane: true,
    answer:
      'Hurricane-rated garage door installation replaces your door with one tested and approved for Florida\'s wind and impact requirements: a Miami-Dade NOA door in the High Velocity Hurricane Zone, or a Florida Product Approval door elsewhere. In Florida it costs $1,800 to $6,500 installed, permit included, with impact-rated glass doors running to $8,000 and above. A rated door may qualify you for a wind mitigation credit on your homeowners insurance.',
    intro: [
      'The garage door is the largest opening in the house. When it fails in a storm the house pressurizes, and the roof is the next thing to go, which is why the Florida Building Code treats the garage door as structural. Every door installed in Florida has to be rated for the design wind pressure at the site. Miami-Dade and Broward counties are the High Velocity Hurricane Zone (HVHZ), where the door needs a Miami-Dade Notice of Acceptance (NOA). In the rest of the state it needs a Florida Product Approval, an FL number, for your wind zone and exposure.',
      'Two ratings get confused. A wind-rated door is built and tested to resist pressure, and it is the minimum the code allows anywhere in Florida. An impact-rated door is also tested against large missile impact, the 2 by 4 fired at the panel, and it is what most homeowners mean by a hurricane door. Inside the HVHZ and along the coast where openings have to be impact protected, the practical route on a garage door is an impact-rated door, and it is the version an insurer\'s wind mitigation form (OIR-B1-1802) records as rated opening protection. We pull the permit as the licensed contractor, the rating is documented on it, and you keep the paperwork.',
      'Timing matters. Hurricane season runs 1 June to 30 November, and order books fill from May. A stock rated steel door typically takes 2 to 6 weeks; impact glass and custom colors take longer, and after a named storm lead times on everything stretch. The best window is March to May. Insurance is the other reason people call: a rated door with the paperwork can contribute to a premium credit under Florida\'s mitigation discount rules. We say it may qualify, we give you the documentation, and you ask your insurer for the credit schedule. When the My Safe Florida Home program is open it has offered grants toward opening protection, including garage doors.',
    ],
    benefits: [
      { title: 'The right approval for your county', text: 'A Miami-Dade NOA door in Miami-Dade and Broward, a Florida Product Approval door everywhere else, matched to your wind zone and exposure.' },
      { title: 'Permit and inspection handled', text: 'We file the permit with the approval number, schedule the inspection and close the permit. The fee is in the quote.' },
      { title: 'Wind-rated or impact-rated, explained', text: 'We tell you which one the code requires at your address and what the impact upgrade costs, so you choose with the numbers in front of you.' },
      { title: 'Documentation for your insurer', text: 'Approval number, permit and photos in one file for your wind mitigation inspection. A rated door may qualify for a credit; your insurer sets the schedule.' },
    ],
    process: [
      { title: 'Site check and wind zone', text: 'We measure the opening, confirm your county, wind zone and exposure category, and check any HOA style rules.' },
      { title: 'Door selection and written quote', text: 'Wind-rated or impact-rated, material, windows, color, all itemized with the permit fee.' },
      { title: 'Permit and order', text: 'We file the permit with the approval number and order the door. We tell you the real lead time, not the hopeful one.' },
      { title: 'Installation and inspection', text: 'Old door out, rated door, track, struts, springs and brackets installed to the approval drawing, opener reconnected, inspection passed and the permit closed.' },
    ],
    quickFacts: [
      { label: 'Installed price', value: '$1,800 to $6,500' },
      { label: 'Impact-rated glass doors', value: '$8,000 and above' },
      { label: 'HVHZ counties', value: 'Miami-Dade and Broward, NOA required' },
      { label: 'Best time to order', value: 'March to May' },
    ],
    faq: [
      { question: 'How much does a hurricane-rated garage door cost in Florida?', answer: '$1,800 to $6,500 installed for most homes, permit included. A wind-rated steel single sits at the low end, an impact-rated steel double in the middle, and impact-rated full view glass doors run to $8,000 and above.' },
      { question: 'What is the difference between a wind-rated and an impact-rated garage door?', answer: 'A wind-rated door is tested to resist the design pressure at your site and is the minimum the code allows anywhere in Florida. An impact-rated door is also tested against large missile impact, and it is what a hurricane door means to most homeowners and to your insurer\'s wind mitigation inspector. Impact-rated costs more and is the one we recommend near the coast and in the HVHZ.' },
      { question: 'What is the difference between a Miami-Dade NOA and a Florida Product Approval?', answer: 'Both are proof that a door was tested to the code. A Miami-Dade Notice of Acceptance is the approval Miami-Dade and Broward require in the High Velocity Hurricane Zone, and it is accepted statewide. A Florida Product Approval, the FL number, is the statewide approval and is what the rest of Florida uses. Outside the HVHZ either works; inside it, you need the NOA.' },
      { question: 'Will a hurricane-rated garage door lower my insurance?', answer: 'It may. Florida\'s wind mitigation inspection records whether openings, including the garage door, have rated protection, and a rated door can contribute to a credit under the state\'s mitigation discount rules. We give you the documentation and you ask your insurer for their credit schedule. We do not promise a dollar figure because every policy is different.' },
      { question: 'Can I brace my existing door instead of replacing it?', answer: 'Outside the HVHZ a retrofit bracing kit with a Florida Product Approval can bring an existing door up to a wind rating for a lot less than a new door, and we install them. In Miami-Dade and Broward the accepted route is a rated door. No kit makes a door hurricane proof, nothing does, and a kit does not make an unrated door impact-rated.' },
    ],
    related: ['new-garage-door-installation', 'storm-damage-garage-door-repair', 'garage-door-panel-replacement'],
  },
  {
    slug: 'storm-damage-garage-door-repair',
    name: 'Storm Damage Garage Door Repair',
    shortName: 'Storm Damage Repair',
    metaTitle: 'Storm Damage Garage Door Repair in Florida | $150 to $1,500',
    metaDescription:
      'Garage door bent, off track or hanging after a hurricane? We secure the opening, document the damage for your claim and repair at published prices. $150 to $1,500 in Florida.',
    priceLow: 150,
    priceHigh: 1500,
    priceNote: 'assessment, bracing, panel or track repair; full replacement quoted separately',
    priceFactors: [
      'How much survived: a bent bottom track is a small job, two creased sections and a twisted track is not',
      'Whether the door is rated and the matching sections are still made',
      'Water and surge damage to the opener, rollers and cables, which is separate from the wind damage',
      'After-hours dispatch in the days after a storm carries the emergency premium of $150 to $300',
    ],
    emergency: true,
    hurricane: true,
    answer:
      'Storm damage garage door repair is the assessment, securing and repair of a door hit by wind, debris or surge: panels bent inward, track twisted, a door pulled off track by pressure. In Florida it costs $150 to $1,500 for assessment, bracing and panel or track repair, and a full replacement is quoted separately in writing. We document the damage with photos for your insurance claim, and we do not inflate storm repairs.',
    intro: [
      'After a named storm the damage follows a pattern. Wind pressure bows the panels inward and pops the roller stems out of the track. Debris dents or punches through a section. On the coast, surge pushes the bottom sections in and leaves salt water in the track, the rollers and the opener rail; Helene did this across Clearwater, St. Petersburg and Cape Coral in 2024, and Ian did it from Fort Myers to Port Charlotte in 2022. A door that looks straight can still be off track on one side or hanging on one cable.',
      'The first job is the opening, not the door. An open garage after a storm is a security problem and, in the rain that follows, a water problem. We secure the door in place, brace it if the panels are compromised, and close the opening the same visit even when the permanent repair needs parts. Then we assess: whether the track, rollers, cables and springs survived, whether sections can be replaced, and whether the door and its rating are gone and a replacement is the honest answer.',
      'Every hurricane produces the same complaint: prices that double the week after. Ours do not. The repair is quoted at the same published ranges as any other month, the emergency premium if we come after hours is stated before dispatch, and you get photos, a written scope and an itemized quote you can hand to your adjuster. The claim is yours and we do not negotiate with the insurer for you; we give you the documentation to do it.',
    ],
    benefits: [
      { title: 'Opening secured first', text: 'Braced and closed the same visit, so the house is not open to the street or to the next band of rain.' },
      { title: 'Documentation for your claim', text: 'Dated photos, a written damage assessment and an itemized quote, in the form an adjuster expects.' },
      { title: 'Repair or replace, honestly', text: 'If two sections and the track are bent on an older unrated door, a new rated door is often the better spend. We show you both with prices.' },
      { title: 'Same prices as any other month', text: 'Published ranges, a stated premium, no storm surcharge.' },
    ],
    process: [
      { title: 'Triage on the phone', text: 'Is the opening open, is anyone at risk, is the door hanging. In the days after a storm we schedule by severity and tell you the real window.' },
      { title: 'Secure and assess', text: 'Door clamped, braced or closed, damage photographed, cause and extent written up.' },
      { title: 'Written quote', text: 'Repair at published ranges, or replacement quoted separately, with what your insurer will want attached.' },
      { title: 'Repair and test', text: 'Track, rollers, cables, springs and sections replaced as needed, opener checked for water and surge, full cycle and safety test.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$150 to $1,500' },
      { label: 'Full replacement', value: 'Quoted separately in writing' },
      { label: 'What you get', value: 'Photos, written assessment, itemized quote' },
      { label: 'Emergency premium', value: '$150 to $300, stated before dispatch' },
    ],
    faq: [
      { question: 'How much does it cost to repair a garage door after a hurricane?', answer: '$150 to $1,500 for assessment, bracing and the usual panel, roller or track repair, at the same ranges we publish all year. A door that needs replacing is quoted separately: $950 to $4,200 for a standard wind-rated steel single and $1,800 to $6,500 for an impact-rated door.' },
      { question: 'Will my insurance cover storm damage to the garage door?', answer: 'Wind damage is normally covered under a Florida homeowners policy, subject to your hurricane deductible, which is a percentage of your dwelling coverage rather than a flat amount and is often larger than the repair. Surge damage falls under flood insurance, not the homeowners policy. Check your declarations page before you file. We give you the photos and the quote either way.' },
      { question: 'My door is hanging off the track after the storm. What do I do right now?', answer: 'Keep everyone away from it, do not run the opener, and do not try to pull it back into the track. A door off track or on one cable can fall. Photograph it as it is before anything is moved, then call us.' },
      { question: 'Can a door that came off track in a storm be reused?', answer: 'Often, if the sections are straight and the track is only bent at the bottom. We replace the bent track, rollers and any cable that jumped, and re-balance. If a section is creased the door has lost its stiffness and, on a rated door, its rating, and we tell you that plainly.' },
      { question: 'Do you charge more after a hurricane?', answer: 'No. The repair is quoted at the same published ranges. The emergency premium of $150 to $300 applies only to same-day and after-hours dispatch, exactly as it does in March, and we tell you before we roll.' },
    ],
    related: ['hurricane-rated-garage-door-installation', 'garage-door-off-track-repair', 'garage-door-panel-replacement'],
  },
  {
    slug: 'emergency-garage-door-repair',
    name: 'Emergency Garage Door Repair',
    shortName: 'Emergency Repair',
    metaTitle: 'Emergency Garage Door Repair in Florida | Same Day, 7 Days',
    metaDescription:
      'Car stuck, spring snapped, door stuck open with a storm coming? Same-day emergency garage door repair across Florida, seven days. Premium $150 to $300, stated before dispatch.',
    priceLow: 150,
    priceHigh: 300,
    priceNote: 'call-out premium for same-day and after-hours dispatch, on top of the repair price',
    priceFactors: [
      'This is the call-out premium only. The repair itself is quoted at its own published starting price',
      'Time of day and day of week',
      'Whether parts must be sourced before the permanent repair',
      'Demand in the days around a named storm, when we schedule by severity',
    ],
    emergency: true,
    hurricane: false,
    answer:
      'Emergency garage door repair is same-day service for a door that has failed in a way you cannot wait out: a snapped spring with the car stuck inside, a door stuck open, or a door off its track. In Florida the emergency call-out premium is $150 to $300 for same-day and after-hours dispatch, stated before we roll, and the repair itself is quoted at its normal published price on top.',
    intro: [
      'Two situations make this urgent rather than annoying. The car is stuck inside and you need it in the morning, or the door is stuck open and your garage, with everything you store in it, is open to the street. A storm 48 hours out with a door that will not close is a third, and we move those to the front of the list.',
      'What we will not do is use the urgency to inflate the price. The premium is stated up front, the repair is quoted at the same published range as it would be on a Tuesday afternoon, and you approve both before anything starts. Our hours are 7:00 to 20:00 Monday to Friday, 8:00 to 18:00 Saturday and 9:00 to 17:00 Sunday, and same-day service runs seven days a week.',
      'If it is not actually an emergency, we say so and book you normally at the lower price. A door that is noisy or slow is a scheduling call, not a 10pm call. A door that will not open with a broken spring on a weekday morning usually is one, because most Florida houses have no other way to get the car out.',
    ],
    benefits: [
      { title: 'Same day, with a real window', text: 'A time window we intend to keep, and a call if anything changes.' },
      { title: 'The premium stated up front', text: 'You know the call-out cost before we dispatch, not when the invoice appears.' },
      { title: 'Standard prices still apply', text: 'The repair is quoted at its normal published range. Urgency does not change our numbers.' },
      { title: 'Told when it is not urgent', text: 'If it can safely wait until a normal appointment, we will say so and save you the premium.' },
    ],
    process: [
      { title: 'Triage on the phone', text: 'What broke, whether the car is stuck, whether the house is open, and whether this genuinely needs tonight.' },
      { title: 'Window and pricing agreed', text: 'The call-out premium and the likely repair range, before dispatch.' },
      { title: 'Make safe first', text: 'The first priority is a door that is not going to fall or leave the house open.' },
      { title: 'Repair and test', text: 'The permanent repair where parts allow, or a documented temporary secure with a return visit booked.' },
    ],
    quickFacts: [
      { label: 'Emergency premium', value: '$150 to $300' },
      { label: 'Repair cost', value: 'Normal published ranges' },
      { label: 'Availability', value: 'Same day, seven days a week' },
      { label: 'Most common call', value: 'Snapped spring, car stuck inside' },
    ],
    faq: [
      { question: 'Do you offer same-day garage door repair in Florida?', answer: 'Yes, seven days a week, from Miami-Dade and Broward through the Palm Beaches, Tampa Bay, Central Florida, Southwest Florida and North Florida. Call and you get a real arrival window plus the pricing before we dispatch.' },
      { question: 'How much does emergency garage door repair cost?', answer: 'The emergency call-out premium is $150 to $300, and the repair itself is quoted at the same published range as any other day. We do not raise repair prices because it is urgent.' },
      { question: 'My car is stuck in the garage. What do I do right now?', answer: 'Do not run the opener against a broken spring. Pull the red release cord only if you have help to lift and hold a door that weighs 130 to 350 pounds; if not, leave it and call us. Never leave a propped door unattended.' },
      { question: 'Is my house safe with the door stuck open?', answer: 'No, and in the rainy season it is also a water problem. Even when a part has to be ordered we can normally close and secure the door the same visit and come back to finish.' },
      { question: 'The power is out and the door will not open. Is that an emergency?', answer: 'Usually not. With the door fully closed, pull the red manual release on the trolley and lift by hand. If the door is very heavy to lift, the spring is broken: stop and call us. If this happens after every storm, battery backup on the opener is $60 to $150 and solves it.' },
    ],
    related: ['garage-door-spring-replacement', 'garage-door-off-track-repair', 'garage-door-cable-repair'],
  },
  {
    slug: 'garage-door-tune-up',
    name: 'Garage Door Tune-Up & Maintenance',
    shortName: 'Tune-Up',
    /* Title leads with "maintenance" deliberately: "garage door maintenance
       near me" carries one of the highest CPCs in the vertical, while almost
       nobody searches "tune-up". See docs/KEYWORD-RESEARCH.md. */
    metaTitle: 'Garage Door Maintenance & Tune-Up in Florida | From $85',
    metaDescription:
      'Garage door maintenance across Florida: balance, rollers, cables, rust check, sensors, bottom seal and manual release. $85 to $160, best done in April or May before the season.',
    priceLow: 85,
    priceHigh: 160,
    priceNote: 'annual service, best in April or May before the season',
    priceFactors: [
      'Double doors and three car garages with two doors',
      'Any parts found worn or rusted during the service, quoted separately before replacement',
      'Doors that have gone many years without service',
      'A bracing kit or hardware upgrade if you want the door readied for the season at the same visit',
    ],
    emergency: false,
    hurricane: false,
    answer:
      'A garage door tune-up is an annual service that checks and adjusts the parts that wear: spring balance, rollers, hinges, cables, tracks, bottom seal, safety sensors and opener settings. In Florida it costs $85 to $160 and the best time is April or May, before hurricane season starts on 1 June. Its real value is catching a rusted cable or a fatigued spring before it fails with the car inside.',
    intro: [
      'Almost every emergency call we take was preventable. Springs give warning as a door that is heavy to lift by hand. Cables show rust at the bottom bracket for months before they break. Rollers grind long before they jump the track. Humidity and salt air make all of this faster in Florida, and a door within a few miles of either coast should not go a year without someone looking at the hardware.',
      'April or May is the right month. The tune-up is where we confirm the door will close and lock ahead of a storm, check that the track bolts and struts on a rated door are tight, test the manual release you will need in an outage, and replace a bottom seal that has been sitting in water since last summer. Seasonal residents in Southwest Florida and the Palm Beaches often book it for the week before they leave in spring or the week they return in November.',
      'A tune-up is also where we tell you nothing is wrong, which happens often. That is a legitimate outcome and you will not be sold a part to justify the visit. Anything we do find is quoted separately before it is touched.',
    ],
    benefits: [
      { title: 'Catches failures before they strand you', text: 'A rusted cable found in April is a scheduled appointment, not a car stuck inside on a Monday morning.' },
      { title: 'Ready for the season', text: 'Door closes fully, lock engages, rated hardware tight, manual release working, before 1 June.' },
      { title: 'Quieter, smoother door', text: 'Most of the noise people live with is dry rollers, loose hardware and a chain that needs adjustment.' },
      { title: 'No invented findings', text: 'If everything is fine we tell you it is fine.' },
    ],
    process: [
      { title: 'Balance test', text: 'Opener disconnected, door checked for whether it holds at waist height.' },
      { title: 'Hardware and corrosion inspection', text: 'Rollers, hinges, bottom brackets, cables, drums and track, with a close look at anything rusting, plus every bolt that works loose over a year.' },
      { title: 'Lubrication and adjustment', text: 'Correct lubricant on the right parts, tracks cleaned, hardware tightened, bottom seal checked.' },
      { title: 'Safety and opener check', text: 'Photo eyes, auto-reverse, force and travel limits, manual release, battery backup and remote batteries.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$85 to $160' },
      { label: 'Recommended', value: 'Once a year, in April or May' },
      { label: 'Time on site', value: '45 to 90 minutes' },
      { label: 'Best value', value: 'Catching a rusted cable or a tired spring first' },
    ],
    faq: [
      { question: 'How often should a garage door be serviced in Florida?', answer: 'Once a year for a door in normal use, in April or May before the season. On a canal front or beach side home, or a door that runs 6 or more times a day, every 6 months is worth it.' },
      { question: 'What does a garage door tune-up include?', answer: 'Balance test, inspection of rollers, hinges, cables, drums, bottom brackets and track with a check for corrosion, lubrication, hardware tightening, bottom seal check, safety sensor and auto-reverse testing, manual release test, and opener force and limit checks.' },
      { question: 'Will a tune-up stop my spring from breaking?', answer: 'It cannot stop metal fatigue, but it tells you the spring is near the end so you can replace it on your schedule rather than on the morning your car is stuck inside.' },
      { question: 'My door is just noisy. Is that a tune-up?', answer: 'Usually yes. Most noise is dry rollers, loose hardware or a chain needing adjustment, all of which are tune-up items rather than repairs.' },
      { question: 'Does a tune-up prepare my door for a hurricane?', answer: 'It covers the mechanical side: the door closes fully, the lock engages, the track and strut hardware is tight, and the manual release works. It does not make an unrated door rated. If your door has no wind rating, ask us about a bracing kit or a rated door, and do that in spring, not the week a storm is named.' },
    ],
    related: ['garage-door-spring-replacement', 'garage-door-cable-repair', 'garage-door-opener-repair'],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/** Services shown in the homepage price table, in display order. */
export const priceTableOrder = [
  'garage-door-spring-replacement',
  'garage-door-cable-repair',
  'garage-door-opener-repair',
  'garage-door-opener-installation',
  'garage-door-off-track-repair',
  'hurricane-rated-garage-door-installation',
  'new-garage-door-installation',
  'emergency-garage-door-repair',
];

export type { Service, FAQ } from './types';
