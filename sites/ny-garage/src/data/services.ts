/**
 * The 9 repair services. Each drives one page at /services/{slug}.
 *
 * Every price range here is real New York market data from
 * research/ny-garage/BRIEF.md section 9a. These same numbers appear on the
 * homepage price table, in agent.json, and in the AI agent's script. They
 * must never diverge: publishing prices is this site's whole differentiator,
 * and a contradiction destroys it.
 *
 * Content is answer-first: `answer` is a quotable definition an AI engine can
 * lift, followed by depth, benefits, process, extractable facts, and an FAQ
 * that becomes FAQPage structured data.
 */

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  /** Published price range. Shown on the page and in the price table. */
  priceLow: number;
  priceHigh: number;
  priceNote: string;
  /** True for the services that drive the emergency cluster. */
  emergency: boolean;
  answer: string;
  intro: string[];
  benefits: { title: string; text: string }[];
  process: { title: string; text: string }[];
  quickFacts: { label: string; value: string }[];
  faq: FAQ[];
  related: string[];
}

export const services: Service[] = [
  {
    slug: 'garage-door-spring-replacement',
    name: 'Garage Door Spring Replacement',
    shortName: 'Spring Replacement',
    metaTitle: 'Garage Door Spring Replacement in New York | $170 to $400',
    metaDescription:
      'Broken garage door spring? Same-day replacement across Long Island, Westchester, Staten Island, Queens and Brooklyn. Published prices, written estimate before work. $170 to $400 per spring.',
    priceLow: 170,
    priceHigh: 400,
    priceNote: 'per spring installed; both springs together adds $150 to $300',
    emergency: true,
    answer:
      'Garage door spring replacement is the removal and installation of the torsion or extension springs that carry the weight of your door. In New York it costs $170 to $400 per spring installed, and replacing both springs at once adds $150 to $300. It is the most common garage door repair and the one that most often traps a car inside.',
    intro: [
      'A garage door weighs between 130 and 350 pounds. The opener does not lift that weight; the springs do. When a spring snaps, usually with a bang loud enough to hear from inside the house, the door becomes a dead weight and the opener cannot move it safely.',
      'Springs fail from fatigue, not neglect. A standard torsion spring is rated for about 10,000 open and close cycles, which for most households is seven to ten years. Cold accelerates it, which is why New York sees a clear winter spike in broken springs.',
      'This is the one repair nobody should attempt themselves. A torsion spring under tension stores enough energy to break bones, and every year emergency rooms see the results. We carry the common sizes on the truck so most calls are finished in one visit.',
    ],
    benefits: [
      { title: 'Same visit, most of the time', text: 'We stock the common torsion and extension sizes, so the usual call is diagnosed and finished in one trip.' },
      { title: 'The price you were quoted', text: 'You get the range on the phone and a written number before anything is touched. It does not move once work starts.' },
      { title: 'Both springs assessed honestly', text: 'When one snaps the other has identical wear, so we explain the case for doing both. We also tell you when it can wait.' },
      { title: 'Balanced door, longer opener life', text: 'A correctly sized spring means the opener stops fighting the door, which is what burns out motors early.' },
    ],
    process: [
      { title: 'Inspection and quote', text: 'We measure the wire size, inside diameter and length, check the cables and drums, and give you a written price.' },
      { title: 'Safe tension release', text: 'Winding bars, never a screwdriver. The old spring is unwound under control and removed.' },
      { title: 'Installation and winding', text: 'The new spring is fitted and wound to the exact turns your door weight calls for.' },
      { title: 'Balance test', text: 'We disconnect the opener and check the door holds at waist height, then reconnect and test the full travel.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$170 to $400 per spring' },
      { label: 'Both springs', value: 'Adds $150 to $300' },
      { label: 'Time on site', value: '30 minutes to 2 hours' },
      { label: 'Spring lifespan', value: 'About 10,000 cycles, 7 to 10 years' },
    ],
    faq: [
      { question: 'How much does garage door spring replacement cost in New York?', answer: 'Between $170 and $400 for a single spring installed. Doing both at the same time adds $150 to $300 rather than doubling, because most of the labor is shared. If you are quoted well over $700 for two standard springs, get a second opinion.' },
      { question: 'Do I need to replace one spring or both?', answer: 'If your door has two springs and one broke, the other has the same number of cycles on it and usually fails within months. Replacing both is a genuine recommendation, not an upsell, but it is your call and we will do just the one if you prefer.' },
      { question: 'Can I use my garage door with a broken spring?', answer: 'No. Do not run the opener: it will strain the motor, bend panels, and can drop the door. If you must move it, lift manually with help and prop it, then stop using it until it is fixed.' },
      { question: 'Why did my spring break in winter?', answer: 'Cold makes steel more brittle and thickens the grease in the system, so a spring already near the end of its cycle life tends to give way on the first hard freeze.' },
      { question: 'How long does the replacement take?', answer: 'Usually 30 minutes to 2 hours depending on the door and whether the cables and drums also need work.' },
    ],
    related: ['garage-door-cable-repair', 'emergency-garage-door-repair', 'garage-door-tune-up'],
  },
  {
    slug: 'garage-door-cable-repair',
    name: 'Garage Door Cable Repair',
    shortName: 'Cable Repair',
    metaTitle: 'Garage Door Cable Repair in New York | $100 to $350',
    metaDescription:
      'Cable came off the drum or snapped? Same-day cable repair and replacement across the New York metro. $100 to $350, written estimate before work starts.',
    priceLow: 100,
    priceHigh: 350,
    priceNote: 'cable repair or replacement; with drum replacement $250 to $425',
    emergency: true,
    answer:
      'Garage door cable repair covers the steel lift cables that connect the bottom of the door to the spring drums. In New York it costs $100 to $350, or $250 to $425 when a damaged drum has to be replaced as well. A cable that slips off its drum leaves the door hanging crooked and stuck.',
    intro: [
      'The cables do the actual pulling. When one frays, snaps, or jumps off its drum, the door goes crooked in the opening, often jamming hard against the track. It looks dramatic and it is genuinely unsafe to force.',
      'Most cable failures come from one of three causes: rust where the cable meets the bottom bracket, a door that has been running out of balance, or a previous repair where the cable was wound onto the drum unevenly.',
      'Sometimes the cable itself is fine and only slipped because the spring lost tension. That case is a tension adjustment at $95 to $150, not a replacement, and we will tell you when that is what you are looking at.',
    ],
    benefits: [
      { title: 'Correct diagnosis first', text: 'A slipped cable and a failed cable look identical to a homeowner and cost very different amounts. We check before quoting.' },
      { title: 'Both sides checked', text: 'Cables wear as a pair. We inspect the other side rather than leaving you a second call in a month.' },
      { title: 'Drum and bracket inspection', text: 'A frayed cable usually has a cause. We find it so the new cable does not go the same way.' },
      { title: 'Door re-balanced', text: 'The job finishes with a balance check, because an unbalanced door is what eats cables.' },
    ],
    process: [
      { title: 'Secure the door', text: 'The door is clamped and supported before any tension is touched.' },
      { title: 'Inspect cables, drums and brackets', text: 'We identify whether this is a slip, a break, or drum damage, and quote accordingly.' },
      { title: 'Replace or re-seat', text: 'New cable fitted and wound evenly onto the drum, or the existing cable re-seated and tensioned.' },
      { title: 'Balance and test', text: 'Full travel test with the opener disconnected, then reconnected.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$100 to $350' },
      { label: 'With drum replacement', value: '$250 to $425' },
      { label: 'Tension adjustment only', value: '$95 to $150' },
      { label: 'Time on site', value: '30 minutes to 90 minutes' },
    ],
    faq: [
      { question: 'How much does garage door cable repair cost?', answer: 'In New York, $100 to $350 for cable repair or replacement. If the drum is damaged too it runs $250 to $425. If the cable only slipped and nothing is damaged, a tension adjustment is $95 to $150.' },
      { question: 'Why did my garage door cable come off?', answer: 'Usually because the door was out of balance, the spring lost tension, or the cable was wound unevenly on the drum during an earlier repair. Rust at the bottom bracket is the other common cause.' },
      { question: 'Is a broken cable dangerous?', answer: 'Yes. The door can hang crooked and drop unevenly. Do not run the opener and do not try to force it level.' },
      { question: 'Should both cables be replaced together?', answer: 'Usually yes. They have the same age and the same wear, and the labor is largely shared, so doing both costs far less than two separate visits.' },
    ],
    related: ['garage-door-spring-replacement', 'garage-door-off-track-repair', 'emergency-garage-door-repair'],
  },
  {
    slug: 'garage-door-opener-repair',
    name: 'Garage Door Opener Repair',
    shortName: 'Opener Repair',
    metaTitle: 'Garage Door Opener Repair in New York | Sensors, Remotes, Motors',
    metaDescription:
      'Opener not responding, door reverses, sensors blinking? Same-day opener repair across the New York metro. Most repairs $100 to $350, written estimate first.',
    priceLow: 100,
    priceHigh: 350,
    priceNote: 'most opener repairs; full replacement is quoted separately',
    emergency: false,
    answer:
      'Garage door opener repair covers the motor unit and its accessories: safety sensors, remotes and keypads, circuit boards, gears, and travel limits. Most opener repairs in New York cost $100 to $350. Misaligned safety sensors are the single most common cause of a door that refuses to close, and they are often a fast fix.',
    intro: [
      'When a door will not close and reverses instead, the opener is usually doing its job. The photo eyes near the floor are designed to stop the door if anything breaks the beam, and they trigger on dust, a leaf, a bumped bracket, or direct sun on the lens.',
      'Beyond the sensors, the usual failures are worn plastic drive gears (the motor runs but nothing moves), a dead capacitor, travel limits knocked out of adjustment, a failing logic board, or simply a remote that lost its pairing.',
      'We repair rather than replace where it makes sense, and say so plainly when it does not. An opener past 15 years old with a failed board is usually cheaper to replace than to fix, and we will show you the math instead of just selling you a new unit.',
    ],
    benefits: [
      { title: 'Sensors fixed properly', text: 'Aligned, cleaned, and the bracket secured, so it does not drift out again next month.' },
      { title: 'Repair when repair is right', text: 'Gears, capacitors, boards and limits are all repairable. We quote the repair against a replacement so you can choose.' },
      { title: 'All major brands', text: 'LiftMaster, Chamberlain, Genie, Craftsman, Sommer and the rest.' },
      { title: 'Remotes and keypads programmed', text: 'Including universal remotes and re-syncing after a board change.' },
    ],
    process: [
      { title: 'Reproduce the fault', text: 'We run the door and watch what actually happens, rather than guessing from a description.' },
      { title: 'Test the chain of causes', text: 'Sensors, power, limits, force settings, gears, board, in the order of likelihood.' },
      { title: 'Quote the repair, and the alternative', text: 'You get the repair price and, when relevant, the replacement price side by side.' },
      { title: 'Repair and verify', text: 'Full cycle testing, safety reverse test, and remotes re-programmed.' },
    ],
    quickFacts: [
      { label: 'Most repairs', value: '$100 to $350' },
      { label: 'Most common cause', value: 'Misaligned safety sensors' },
      { label: 'Time on site', value: 'Under 1 hour for most faults' },
      { label: 'Brands serviced', value: 'LiftMaster, Chamberlain, Genie, Craftsman' },
    ],
    faq: [
      { question: 'Why does my garage door start to close then reverse?', answer: 'Almost always the safety sensors. Something is blocking the beam, the lenses are dirty, or one has been knocked out of alignment. A steady light on both units means aligned; a blinking light means not.' },
      { question: 'Is it worth repairing an old opener?', answer: 'Under about 10 years old, usually yes. Past 15 years with a failed logic board, replacement is often cheaper than the repair and comes with a warranty. We quote both so you can decide.' },
      { question: 'The motor runs but the door does not move. What is wrong?', answer: 'That is the classic symptom of a stripped drive gear. It is a common and repairable failure on chain and belt units.' },
      { question: 'Can you program a universal remote or a car button?', answer: 'Yes, including HomeLink and universal remotes, and re-syncing everything after a board replacement.' },
    ],
    related: ['garage-door-opener-installation', 'smart-garage-door-opener-installation', 'garage-door-tune-up'],
  },
  {
    slug: 'garage-door-opener-installation',
    name: 'Garage Door Opener Installation',
    shortName: 'Opener Installation',
    metaTitle: 'Garage Door Opener Installation in New York | $281 to $630',
    metaDescription:
      'New garage door opener installed across the New York metro. Chain, belt, screw and wall-mount jackshaft. $281 to $630 installed, published pricing, no bait fees.',
    priceLow: 281,
    priceHigh: 630,
    priceNote: 'installed, including haul away of the old unit',
    emergency: false,
    answer:
      'Garage door opener installation is the removal of your old unit and the fitting, wiring, and programming of a new one. In New York it costs $281 to $630 installed. The right drive type depends mostly on your garage: belt drive for an attached garage with a room above it, chain for a detached garage, wall-mount jackshaft where headroom is tight.',
    intro: [
      'Most New York homes with an attached garage have living space directly above or beside it, which makes noise the deciding factor. A chain drive is the cheapest and the loudest. A belt drive costs more upfront and is the one you install when someone sleeps over the garage.',
      'Screw drives lift heavy and oversized doors quickly, but they are more sensitive to temperature swings, which matters in a real winter. Wall-mount jackshaft units clear the ceiling entirely, which is worth a lot in the small garages common across the outer boroughs.',
      'We size the horsepower to the door rather than upselling by default. A standard single steel door does not need the biggest motor in the catalog; a heavy insulated double door does.',
    ],
    benefits: [
      { title: 'The right drive for your garage', text: 'Noise, ceiling height, door weight and budget decide it, and we explain the trade-off rather than defaulting to the priciest.' },
      { title: 'Old unit removed and hauled', text: 'Included in the price, not an extra line at the end.' },
      { title: 'Safety set up correctly', text: 'Photo eyes at the right height, force and travel limits set, auto-reverse tested.' },
      { title: 'Everything programmed', text: 'Remotes, keypad, car buttons and the app if the unit is smart.' },
    ],
    process: [
      { title: 'Assess the door and space', text: 'Door weight, headroom, backroom, and where the noise matters.' },
      { title: 'Remove the old unit', text: 'Disconnected, taken down, and hauled away.' },
      { title: 'Mount and wire', text: 'Rail assembled and mounted, motor hung and braced, sensors and wall control wired.' },
      { title: 'Program and safety test', text: 'Limits, force, auto-reverse, and every remote and keypad paired.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$281 to $630 installed' },
      { label: 'Time on site', value: '2 to 4 hours' },
      { label: 'Quietest option', value: 'Belt drive' },
      { label: 'Tight headroom option', value: 'Wall-mount jackshaft' },
    ],
    faq: [
      { question: 'How much does garage door opener installation cost in New York?', answer: '$281 to $630 installed for most homes, including removal of the old unit. Wall-mount jackshaft units and high-horsepower models sit at the top of that range or slightly above.' },
      { question: 'Belt drive or chain drive?', answer: 'Belt if the garage is attached and there is a bedroom or living space above or next to it. Chain if the garage is detached and budget matters. The belt premium is small next to years of noise.' },
      { question: 'Do I need battery backup?', answer: 'It is not required in New York, but after a storm outage it is the difference between getting the car out and not. It is worth the modest extra on any attached garage you rely on daily.' },
      { question: 'Can you install an opener I bought myself?', answer: 'Yes. We install customer-supplied units, though the warranty then sits with you and the retailer rather than with us on the unit itself.' },
    ],
    related: ['smart-garage-door-opener-installation', 'garage-door-opener-repair', 'new-garage-door-installation'],
  },
  {
    slug: 'smart-garage-door-opener-installation',
    name: 'Smart & WiFi Garage Door Opener Installation',
    shortName: 'Smart Opener',
    metaTitle: 'Smart WiFi Garage Door Opener Installation in New York',
    metaDescription:
      'WiFi garage door openers and smart controllers installed across the New York metro. Phone control, alerts, and battery backup. New units $350 to $700, retrofit from $150.',
    priceLow: 150,
    priceHigh: 700,
    priceNote: 'retrofit controller from $150; full smart opener $350 to $700 installed',
    emergency: false,
    answer:
      'A smart garage door opener connects to your home WiFi so you can open, close, and monitor the door from your phone, and get an alert when it has been left open. In New York a full smart opener runs $350 to $700 installed, and a retrofit controller added to an existing opener starts around $150.',
    intro: [
      'You do not always need a new opener. If your current unit is under about ten years old and works fine, a retrofit smart controller wires into it and adds phone control and alerts for a fraction of the price of replacement.',
      'The feature that people actually use is not remote opening, it is the notification. Knowing the door has been sitting open for two hours, and being able to close it from the train, is what makes these worth having.',
      'We set up the app, connect it to your network, and make sure alerts actually reach your phone before we leave, which is the part most installations skip.',
    ],
    benefits: [
      { title: 'Retrofit before replacing', text: 'If your opener is healthy, we add smart control to it instead of selling you a new motor.' },
      { title: 'Left-open alerts that work', text: 'Configured and tested on your phone before we leave.' },
      { title: 'Shared access', text: 'Family members, and one-time access for a delivery or a contractor.' },
      { title: 'Battery backup option', text: 'Phone control is worth little in an outage without it. We fit both together where it matters.' },
    ],
    process: [
      { title: 'Check compatibility', text: 'Not every older opener accepts a retrofit controller. We confirm before quoting.' },
      { title: 'Install the hardware', text: 'Controller or full opener fitted, plus the door position sensor.' },
      { title: 'Connect and configure', text: 'Joined to your WiFi, app account set up, alerts switched on.' },
      { title: 'Test on your phone', text: 'Open, close, and alert all verified from your own device.' },
    ],
    quickFacts: [
      { label: 'Retrofit controller', value: 'From $150 installed' },
      { label: 'Full smart opener', value: '$350 to $700 installed' },
      { label: 'Time on site', value: '1 to 3 hours' },
      { label: 'Needs', value: 'WiFi reaching the garage' },
    ],
    faq: [
      { question: 'Can I make my existing garage door opener smart?', answer: 'Usually yes. A retrofit controller wires into most openers made in the last 15 years and adds phone control and alerts from about $150 installed. We check compatibility first.' },
      { question: 'Which smart garage door system is best?', answer: 'It depends on what else you run. myQ is the default for LiftMaster and Chamberlain units, and there are alternatives that integrate more openly with other smart home systems. We fit what suits your setup rather than one brand by default.' },
      { question: 'Does it still work if the internet goes down?', answer: 'The remote and wall button keep working normally. Only the phone control and alerts pause until the connection returns.' },
      { question: 'Is WiFi reception in a garage a problem?', answer: 'Sometimes, especially in a detached garage or behind a steel door. We test signal during the visit and tell you if you need an extender rather than leaving you with something unreliable.' },
    ],
    related: ['garage-door-opener-installation', 'garage-door-opener-repair', 'garage-door-tune-up'],
  },
  {
    slug: 'garage-door-off-track-repair',
    name: 'Off Track Garage Door Repair',
    shortName: 'Off Track Repair',
    metaTitle: 'Off Track Garage Door Repair in New York | $150 to $700',
    metaDescription:
      'Garage door jumped the track or was hit by a car? Same-day off-track repair across the New York metro. $150 to $700 depending on damage, quoted before work.',
    priceLow: 150,
    priceHigh: 700,
    priceNote: 'severe cases with bent tracks or damaged sections can exceed $1,000',
    emergency: true,
    answer:
      'Off track garage door repair puts a door that has jumped its rollers out of the track back into alignment, and replaces whatever bent or broke in the process. In New York it costs $150 to $700, and severe cases with bent tracks or damaged sections can exceed $1,000.',
    intro: [
      'Doors come off track for three reasons: something hit them, a cable failed and let one side drop, or worn rollers finally jumped a bent section of track. Whatever the cause, the door is now unsupported and unsafe to operate.',
      'Do not try to force it back. A door off track can fall, and the tension still in the springs makes it unpredictable. Leave it where it is and keep people and cars clear until it is secured.',
      'Once the door is safe, the job is straightforward: realign the track, replace the rollers and any bent sections, check the cables and springs that may have caused it, and re-balance.',
    ],
    benefits: [
      { title: 'Secured before anything else', text: 'The door is clamped and supported so nothing moves while we work.' },
      { title: 'The cause found, not just the symptom', text: 'A door that jumped the track once will do it again if the cable or roller that caused it is left in place.' },
      { title: 'Bent parts replaced, not hammered straight', text: 'Straightened track never runs the same and fails again.' },
      { title: 'Honest repair-or-replace call', text: 'If the panels are damaged past repair we show you why, with photos, rather than announcing it.' },
    ],
    process: [
      { title: 'Secure and assess', text: 'Door clamped, damage documented, cause identified.' },
      { title: 'Written quote', text: 'Including whether any sections or tracks need replacing.' },
      { title: 'Realign and replace', text: 'Rollers back in track, bent components replaced, hardware tightened.' },
      { title: 'Balance and cycle test', text: 'Manual balance check, then a full run with the opener.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$150 to $700' },
      { label: 'Severe damage', value: 'Can exceed $1,000' },
      { label: 'Time on site', value: '1 to 3 hours' },
      { label: 'Do not', value: 'Run the opener or force it back' },
    ],
    faq: [
      { question: 'How much does it cost to fix a garage door off its track?', answer: '$150 to $700 in New York for most cases. If the tracks are bent or a section is damaged, it can pass $1,000 because parts are being replaced rather than realigned.' },
      { question: 'Can I put the door back on the track myself?', answer: 'No. The springs still hold tension and the door can fall. This is one of the genuinely dangerous DIY repairs.' },
      { question: 'My car hit the door. Can it be repaired or does it need replacing?', answer: 'Often a single damaged section can be replaced rather than the whole door, which is far cheaper. We photograph the damage and show you the options with prices for both.' },
      { question: 'Why did it come off the track?', answer: 'Impact, a snapped cable that dropped one side, or worn rollers on a bent track. Finding which one matters, otherwise it happens again.' },
    ],
    related: ['garage-door-cable-repair', 'garage-door-panel-replacement', 'emergency-garage-door-repair'],
  },
  {
    slug: 'garage-door-panel-replacement',
    name: 'Garage Door Panel & Section Replacement',
    shortName: 'Panel Replacement',
    metaTitle: 'Garage Door Panel Replacement in New York | Repair or Replace',
    metaDescription:
      'Dented or cracked garage door section replaced across the New York metro. Often far cheaper than a whole new door. Honest repair-or-replace advice with both prices.',
    priceLow: 250,
    priceHigh: 900,
    priceNote: 'per section installed, depending on material and whether the model is still made',
    emergency: false,
    answer:
      'Garage door panel replacement swaps a single damaged section of the door rather than replacing the entire door. In New York it costs $250 to $900 per section installed. It is usually the right call when one or two sections are damaged and the rest of the door is sound, and it saves thousands compared to full replacement.',
    intro: [
      'Backing into the bottom section is the most common garage door accident there is. The good news is that a garage door is made of separate sections, so one damaged panel can often be swapped out.',
      'The catch is availability. If your door model is still in production, matching a section is straightforward. If it is 20 years old and discontinued, the choice becomes a visible mismatch, a repaint, or a new door, and we will lay out all three honestly with prices.',
      '"This door is basically done" is the most common inflated claim in this industry. Sometimes it is true. We prove it with photos of the actual damage before we say it.',
    ],
    benefits: [
      { title: 'Thousands cheaper than replacement', text: 'When it applies, a section swap costs a fraction of a new installed door.' },
      { title: 'Match confirmed before you commit', text: 'We identify the manufacturer and model and check availability before quoting.' },
      { title: 'Both prices, side by side', text: 'Section replacement against full replacement, so the choice is yours and it is informed.' },
      { title: 'Structure checked', text: 'Impact usually bends more than the panel. We check track, rollers and hinges too.' },
    ],
    process: [
      { title: 'Identify the door', text: 'Manufacturer, model and section, then a real availability check.' },
      { title: 'Quote both paths', text: 'Section replacement and full door replacement, with the trade-offs stated.' },
      { title: 'Install the section', text: 'Door supported, damaged section removed, new one fitted and aligned.' },
      { title: 'Re-balance and test', text: 'A new section changes the door weight slightly, so spring balance is re-checked.' },
    ],
    quickFacts: [
      { label: 'Per section installed', value: '$250 to $900' },
      { label: 'New door, for comparison', value: '$1,056 to $4,620' },
      { label: 'Time on site', value: '2 to 4 hours' },
      { label: 'Main constraint', value: 'Whether the model is still made' },
    ],
    faq: [
      { question: 'Can just one garage door panel be replaced?', answer: 'Yes, when the rest of the door is sound and a matching section is still available. It costs $250 to $900 installed against $1,056 to $4,620 for a new door.' },
      { question: 'What if my door model is discontinued?', answer: 'Then the options are a close but visible mismatch, replacing the section and repainting the whole door, or a new door. We price all three rather than pushing the most expensive.' },
      { question: 'I dented the bottom section backing out. Is that structural?', answer: 'Often not, but the impact usually knocks the track, rollers or hinges too, so the whole bottom assembly gets checked, not just the visible dent.' },
      { question: 'How do I know if I am being told the truth about needing a new door?', answer: 'Ask for photos of the damage and a written quote for both options. Any company confident in its diagnosis will provide both without argument.' },
    ],
    related: ['garage-door-off-track-repair', 'new-garage-door-installation', 'garage-door-tune-up'],
  },
  {
    slug: 'new-garage-door-installation',
    name: 'New Garage Door Installation',
    shortName: 'New Door Installation',
    metaTitle: 'New Garage Door Installation in New York | $1,056 to $4,620',
    metaDescription:
      'New garage doors installed across the New York metro. Steel, aluminum, wood, fiberglass and vinyl, insulated options for attached garages. Published price ranges by material.',
    priceLow: 1056,
    priceHigh: 4620,
    priceNote: 'installed, depending on material, size and insulation',
    emergency: false,
    answer:
      'New garage door installation covers removing the old door, fitting the new door, tracks, springs and hardware, and setting up the opener. In New York it costs $1,056 to $4,620 installed. Steel is the value choice at $800 to $2,000 for the door, insulated doors add $600 to $3,000, and an insulated door genuinely pays back on an attached garage in this climate.',
    intro: [
      'A garage door is usually the largest moving object in a house and a third of the front elevation, so it is both a mechanical decision and a curb-appeal one. Material sets the price, the maintenance, and how it handles a New York winter.',
      'Steel is the default for good reason: strongest value, low maintenance, and available in layered insulated builds. Aluminum resists rust and suits coastal homes on the South Shore and the Rockaways. Wood looks best and costs the most to keep. Fiberglass resists rot but has a low R-value and can crack in deep cold, which matters here.',
      'Insulation is the decision people underestimate. If your garage is attached, and especially if there is a room above it, an insulated door changes what the heating system has to fight all winter.',
    ],
    benefits: [
      { title: 'Prices published by material', text: 'You can see the ranges before you call, which almost nobody in this market will show you.' },
      { title: 'Insulation advice with a reason', text: 'We tell you when R-value pays back on your layout and when it genuinely does not.' },
      { title: 'Old door removed and disposed', text: 'Included, not a surprise line.' },
      { title: 'New springs sized to the new door', text: 'A new door weighs differently. Reusing old springs is how new doors fail early.' },
    ],
    process: [
      { title: 'Measure and select', text: 'Opening measured, headroom and backroom checked, material and style chosen against your budget and layout.' },
      { title: 'Written quote', text: 'Door, hardware, springs, labor, removal and disposal, itemized.' },
      { title: 'Removal and installation', text: 'Old door and track out, new sections, track, springs and hardware in.' },
      { title: 'Opener setup and handover', text: 'Opener reconnected or replaced, limits and force set, safety reverse tested, and we walk you through maintenance.' },
    ],
    quickFacts: [
      { label: 'Installed total', value: '$1,056 to $4,620' },
      { label: 'Steel door', value: '$800 to $2,000' },
      { label: 'Insulation premium', value: '$600 to $3,000' },
      { label: 'Time on site', value: '4 to 6 hours' },
    ],
    faq: [
      { question: 'How much does a new garage door cost installed in New York?', answer: '$1,056 to $4,620 for most homes. Material, size, insulation and window options move it within that range, and custom wood doors go above it.' },
      { question: 'Which garage door material is best for New York?', answer: 'Steel for most homes: strong, low maintenance and available insulated. Aluminum near the water for rust resistance. Wood where appearance leads and you accept the upkeep. Fiberglass is the one we hesitate on here, because of the low R-value and cold-weather cracking.' },
      { question: 'Is an insulated garage door worth it?', answer: 'On an attached garage, especially with living space above, yes. It cuts the heat loss the furnace has to make up and it makes the garage usable in January. On a detached garage used for storage, it is a much weaker case.' },
      { question: 'Do I need a new opener with a new door?', answer: 'Not usually. If your opener is healthy and correctly sized for the new door weight, we reconnect it. If the new door is significantly heavier, we will tell you before, not after.' },
    ],
    related: ['garage-door-panel-replacement', 'garage-door-opener-installation', 'garage-door-tune-up'],
  },
  {
    slug: 'emergency-garage-door-repair',
    name: 'Emergency Garage Door Repair',
    shortName: 'Emergency Repair',
    metaTitle: 'Emergency Garage Door Repair New York | Same Day, Car Trapped',
    metaDescription:
      'Car trapped, spring snapped, door stuck open? Same-day emergency garage door repair across the New York metro. Real arrival windows and the price quoted before work.',
    priceLow: 200,
    priceHigh: 350,
    priceNote: 'emergency call-out premium; the repair itself is quoted at its normal published range',
    emergency: true,
    answer:
      'Emergency garage door repair is same-day service for a door that has failed in a way you cannot wait out: a snapped spring with the car trapped inside, a door stuck open overnight, or a door off its track. In New York the emergency call-out runs $200 to $350, and the repair itself is quoted at its normal published price on top of that.',
    intro: [
      'Two situations make this urgent rather than annoying. The car is trapped inside and you need it tomorrow morning, or the door is stuck open and your house is standing open to the street. Both are worth a same-day call.',
      'What we will not do is use the urgency to inflate the price. The emergency premium is stated up front, the repair is quoted at the same published range as it would be on a Tuesday afternoon, and you approve both before anything starts.',
      'If it is not actually an emergency, we say so and book you normally at the lower price. A door that is noisy or slow is a scheduling call, not a 10pm call.',
    ],
    benefits: [
      { title: 'Same day, with a real window', text: 'A time window we intend to keep, and a call if anything changes.' },
      { title: 'The premium stated up front', text: 'You know the call-out cost before we dispatch, not when the invoice appears.' },
      { title: 'Standard prices still apply', text: 'The repair is quoted at its normal published range. Urgency does not change our numbers.' },
      { title: 'Told when it is not urgent', text: 'If it can safely wait until a normal appointment, we will say so and save you the premium.' },
    ],
    process: [
      { title: 'Triage on the phone', text: 'What broke, whether the car is trapped, whether the house is open, and whether this genuinely needs tonight.' },
      { title: 'Window and pricing agreed', text: 'The call-out premium and the likely repair range, before dispatch.' },
      { title: 'Make safe first', text: 'The first priority is a door that is not going to fall or leave the house open.' },
      { title: 'Repair and test', text: 'The permanent repair where parts allow, or a documented temporary secure with a return visit booked.' },
    ],
    quickFacts: [
      { label: 'Emergency call-out', value: '$200 to $350' },
      { label: 'Repair cost', value: 'Normal published ranges' },
      { label: 'Availability', value: 'Same day, seven days' },
      { label: 'Most common call', value: 'Snapped spring, car trapped' },
    ],
    faq: [
      { question: 'Do you offer same-day garage door repair?', answer: 'Yes, seven days a week across the metro area. Call and you will get a real arrival window plus the pricing before we dispatch.' },
      { question: 'How much does emergency garage door repair cost?', answer: 'The emergency call-out is $200 to $350, and the repair itself is quoted at the same published range as any other day. We do not raise repair prices because it is urgent.' },
      { question: 'My car is trapped in the garage. What do I do right now?', answer: 'Do not run the opener against a broken spring. If the door has a manual release and someone can help you lift safely, prop it fully open and leave it. Otherwise leave it alone and call us.' },
      { question: 'Is my house safe with the door stuck open?', answer: 'Not really, which is why this counts as an emergency. Even when parts must be ordered, we can usually secure the opening the same visit and return to finish.' },
    ],
    related: ['garage-door-spring-replacement', 'garage-door-off-track-repair', 'garage-door-cable-repair'],
  },
  {
    slug: 'garage-door-tune-up',
    name: 'Garage Door Tune-Up & Maintenance',
    shortName: 'Tune-Up',
    metaTitle: 'Garage Door Tune-Up in New York | $95 to $180 Annual Service',
    metaDescription:
      'Annual garage door maintenance across the New York metro: balance, rollers, hinges, cables, sensors and lubrication. $95 to $180, and it catches the failures before winter.',
    priceLow: 95,
    priceHigh: 180,
    priceNote: 'annual service visit; parts quoted separately if anything is found',
    emergency: false,
    answer:
      'A garage door tune-up is an annual service that checks and adjusts the parts that wear: spring balance, rollers, hinges, cables, tracks, safety sensors and opener settings. In New York it costs $95 to $180 and its real value is catching a fatigued spring or a fraying cable before it fails on the coldest morning of the year.',
    intro: [
      'Almost every emergency call we take was preventable. Springs give warning in the form of a door that is heavy to lift by hand, cables fray visibly for months, and rollers grind long before they jump the track.',
      'The best time in New York is autumn. Cold is what finishes off a spring that is already at the end of its cycle life, so a check in October is worth more than the same check in April.',
      'A tune-up is also where we tell you nothing is wrong, which happens often. That is a legitimate outcome and you will not be sold a part to justify the visit.',
    ],
    benefits: [
      { title: 'Catches failures before they strand you', text: 'A fatigued spring found in the fall is a scheduled appointment, not a trapped car in January.' },
      { title: 'Quieter, smoother door', text: 'Most of the noise people live with is lubrication and worn rollers.' },
      { title: 'Safety verified', text: 'Auto-reverse and photo eyes tested properly, which most homeowners never check.' },
      { title: 'No invented findings', text: 'If everything is fine we tell you it is fine.' },
    ],
    process: [
      { title: 'Balance test', text: 'Opener disconnected, door checked for whether it holds at waist height.' },
      { title: 'Hardware inspection', text: 'Rollers, hinges, brackets, cables, drums and track, plus every bolt that works loose over a year.' },
      { title: 'Lubrication and adjustment', text: 'Correct lubricant on the right parts, tracks cleaned, hardware tightened.' },
      { title: 'Safety and opener check', text: 'Photo eyes, auto-reverse, force and travel limits, and remote batteries.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$95 to $180' },
      { label: 'Recommended', value: 'Once a year, ideally in autumn' },
      { label: 'Time on site', value: '45 to 90 minutes' },
      { label: 'Best value', value: 'Catching a spring before it snaps' },
    ],
    faq: [
      { question: 'How often should a garage door be serviced?', answer: 'Once a year for a door in normal daily use. Autumn is the best timing in New York, because cold weather is what pushes a tired spring over the edge.' },
      { question: 'What does a garage door tune-up include?', answer: 'Balance test, inspection of rollers, hinges, cables, drums, brackets and track, lubrication, hardware tightening, safety sensor and auto-reverse testing, and opener force and limit checks.' },
      { question: 'Will a tune-up stop my spring from breaking?', answer: 'It cannot stop metal fatigue, but it tells you the spring is near the end so you can replace it on your schedule rather than on the morning your car is trapped.' },
      { question: 'My door is just noisy. Is that a tune-up?', answer: 'Usually yes. Most noise is dry rollers, loose hardware or a chain needing adjustment, all of which are tune-up items rather than repairs.' },
    ],
    related: ['garage-door-spring-replacement', 'garage-door-opener-repair', 'garage-door-cable-repair'],
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
  'garage-door-tune-up',
  'new-garage-door-installation',
  'emergency-garage-door-repair',
];
