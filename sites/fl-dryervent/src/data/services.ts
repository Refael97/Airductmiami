/**
 * The nine services. One trade, split the way people search for it.
 *
 * Prices are the published network prices for dryer vent work and must not
 * drift from them: $100 to $200 to clean, $200 to $600 to repair, replace
 * or install. See research/fl-dryervent/BRIEF.md.
 */

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  /** One or two quotable sentences shown first on the page. */
  answer: string;
  intro: string[];
  benefits: { title: string; text: string }[];
  process: { title: string; text: string }[];
  quickFacts: { label: string; value: string }[];
  faq: FAQ[];
  related: string[];
}

export const PRICE = {
  cleanLow: 100,
  cleanHigh: 200,
  workLow: 200,
  workHigh: 600,
} as const;

export const services: Service[] = [
  {
    slug: 'dryer-vent-cleaning',
    name: 'Dryer Vent Cleaning',
    shortName: 'Vent Cleaning',
    icon: 'clean',
    metaTitle: 'Dryer Vent Cleaning in Florida | $100 to $200',
    metaDescription:
      'Dryer vent cleaning across Florida, $100 to $200. Airflow measured at the outside hood before and after, the whole run cleaned, price given before we book.',
    answer:
      'Dryer vent cleaning removes the lint packed along the duct between your dryer and the outside hood. In Florida it costs $100 to $200, and we measure airflow at the hood before and after so you can see the difference in a number.',
    intro: [
      'The lint screen in the dryer catches most of it, not all of it. What gets past settles along the duct, thickest at bends, joints and the last few feet before the hood, and in a humid Florida run it settles damp and packs instead of blowing out. Drying times creep up so slowly that most people only notice when a towel load takes two cycles.',
      'A restricted vent makes the dryer run hotter and longer. That costs electricity, wears the heating element and the thermal fuse, and is the condition behind the leading cause of home dryer fires, which the US Fire Administration identifies as failure to clean.',
      'Most homes need it once a year. A long attic or roof run, a large household, or pets that shed can make that every six to nine months. We tell you which applies to your run after we have measured it, not before.',
    ],
    benefits: [
      { title: 'A number, not an opinion', text: 'Airflow is read at the hood before we start and again when we finish, with the same instrument in the same spot.' },
      { title: 'The whole run, both ends', text: 'Rotary brush and compressed air from the laundry side and from the outside where the run allows it, so lint leaves the house instead of moving deeper.' },
      { title: 'Transition and hood included', text: 'The hose behind the dryer and the damper at the hood are where a large share of blockages sit. Both are part of the job, not extras.' },
      { title: 'Price before booking', text: 'You hear the figure for your run on the phone. If what we find changes it, you hear that before any extra work starts.' },
    ],
    process: [
      { title: 'Measure', text: 'Airflow reading at the exterior termination with the dryer running, before anything is touched.' },
      { title: 'Disconnect and inspect', text: 'Pull the dryer, check the transition hose and the wall connection, note anything crushed, split or illegal.' },
      { title: 'Clean the run', text: 'Rotary brush and compressed air through the full length, working from both ends where we can reach them.' },
      { title: 'Clear the hood', text: 'Remove lint, nests and debris from the cap and free the damper so it opens with the dryer and closes when it stops.' },
      { title: 'Measure again and reconnect', text: 'Second airflow reading, dryer reconnected and tested, and the before and after numbers shown to you.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$100 to $200' },
      { label: 'Time on site', value: '45 to 90 minutes' },
      { label: 'How often', value: 'Once a year for most homes' },
      { label: 'Included', value: 'Transition hose check, hood and damper, airflow before and after' },
    ],
    faq: [
      { question: 'How much does dryer vent cleaning cost in Florida?', answer: 'Most homes pay $100 to $200. A short wall vent sits at the bottom of the range and a long attic run to a roof cap at the top. You get the figure for your run before we book.' },
      { question: 'How often should a dryer vent be cleaned?', answer: 'Once a year for a typical household. Every six to nine months with a long or roof run, several loads a day, or pets that shed heavily.' },
      { question: 'How do I know my dryer vent is clogged?', answer: 'Clothes needing two cycles, a dryer or laundry room that is hot after a load, a burning smell, or an outside flap that barely moves while the dryer runs.' },
      { question: 'Can I clean it myself?', answer: 'You can clean the lint screen every load and the first few feet of the transition hose. A full run, especially through an attic or to the roof, needs the right brush and a way to clear the hood, and a kit pushed the wrong way can pack lint deeper.' },
      { question: 'Do you clean condo dryer vents?', answer: 'Yes. We clean the part you own, from the dryer to the wall or ceiling connection. Where it joins a riser shared with other units, that riser belongs to the association, and we say so rather than clean your section and call the problem solved.' },
    ],
    related: ['dryer-vent-repair', 'roof-and-wall-vent-caps', 'condo-and-apartment-dryer-vents'],
  },
  {
    slug: 'dryer-vent-repair',
    name: 'Dryer Vent Repair',
    shortName: 'Vent Repair',
    icon: 'repair',
    metaTitle: 'Dryer Vent Repair & Replacement in Florida | $200 to $600',
    metaDescription:
      'Dryer vent repair across Florida: separated joints, crushed or foil duct, runs that leak lint into walls or attics. $200 to $600, quoted before any work.',
    answer:
      'Dryer vent repair fixes a duct that cleaning cannot: a joint that has separated, a section crushed flat, foil hose hidden in a wall, or a run dumping lint into the attic. In Florida it costs $200 to $600 depending on where the damage is and how much of the run has to change.',
    intro: [
      'Some vents are clean enough and still do not work. A joint in the attic has pulled apart and the dryer is blowing warm, wet lint into the insulation. A section behind the dryer has been crushed by the machine being pushed back. A previous owner ran foil hose through a wall cavity. Cleaning those runs moves lint around; it does not fix the airflow.',
      'We find the failure before quoting. The airflow reading at the hood tells us whether air is getting out, and inspecting the run tells us where it is getting lost. You see what we found, and you get one price for the repair before anything is opened.',
      'Repairs and dryer duct replacement use rigid metal duct, joints sealed with foil tape rather than screws that catch lint, and the shortest safe route the house allows. Where a run is longer than the Florida Building Code allows for your dryer, we tell you, because no amount of cleaning makes an over length run work.',
    ],
    benefits: [
      { title: 'Found, then quoted', text: 'You see the separated joint or the crushed section before you agree to anything.' },
      { title: 'Rigid metal, sealed properly', text: 'No foil or plastic hose inside walls or ceilings, no screws through the duct, joints taped.' },
      { title: 'Code length checked', text: 'We measure the run against the 35 foot rule and its bend deductions, and the dryer maker\'s limit where it allows more.' },
      { title: 'Cleaned as part of it', text: 'A repaired run is cleaned end to end before it goes back into service.' },
    ],
    process: [
      { title: 'Airflow and inspection', text: 'Reading at the hood, then the run checked from the dryer to the termination.' },
      { title: 'Show and quote', text: 'What failed, where, and one price to fix it.' },
      { title: 'Repair', text: 'Damaged sections replaced with rigid metal, joints refitted and taped, supports added where the run sags.' },
      { title: 'Clean and test', text: 'Full run cleaned, hood and damper cleared, airflow measured again and shown to you.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$200 to $600' },
      { label: 'Most common fault', value: 'Separated joint or crushed transition' },
      { label: 'Duct used', value: '4 inch rigid metal' },
      { label: 'Time on site', value: '1 to 3 hours' },
    ],
    faq: [
      { question: 'How much does dryer vent repair cost?', answer: '$200 to $600 in Florida. A crushed transition or one separated joint sits at the bottom; replacing a long attic section or rerouting a run sits at the top. You get one price before work starts.' },
      { question: 'Is foil dryer hose allowed?', answer: 'Only as the short listed transition behind the dryer, no longer than 8 feet and never concealed inside a wall, floor or ceiling. Inside the structure the duct has to be rigid metal.' },
      { question: 'Why is there lint in my attic?', answer: 'A joint in the run has separated or the duct has been cut or crushed, so the dryer is exhausting into the attic. That is warm, wet, flammable lint next to insulation and wood, and it should be repaired rather than cleaned.' },
      { question: 'Can a dryer vent be too long?', answer: 'Yes. The code limit is 35 feet, less 2.5 feet for every 45 degree bend and 5 feet for every 90 degree bend, unless the dryer maker allows longer. A run past its limit stays slow however clean it is.' },
    ],
    related: ['dryer-vent-installation', 'dryer-vent-cleaning', 'roof-and-wall-vent-caps'],
  },
  {
    slug: 'dryer-vent-installation',
    name: 'Dryer Vent & Dryer Duct Installation',
    shortName: 'Installation',
    icon: 'install',
    metaTitle: 'Dryer Vent & Dryer Duct Installation in Florida',
    metaDescription:
      'New dryer vent and dryer duct installation across Florida: rigid metal, shortest legal route, new laundry locations and full replacements. $200 to $600.',
    answer:
      'Dryer vent installation puts in a new exhaust duct, for a new laundry location or to replace a run that is past saving. In Florida it costs $200 to $600, using 4 inch rigid metal duct on the shortest route the house allows, within the Florida Building Code length limit.',
    intro: [
      'Three situations bring us in. A laundry is being moved, often into a garage, a closet or upstairs, and needs a vent where there was none. An old run is foil or plastic inside the walls, or so long and bent that it can never move enough air. Or a remodel has closed off the old route and the dryer is venting into a cavity.',
      'The route matters more than anything else. Every bend costs length under the code, so the best installation is usually the one with the fewest turns, through a wall where possible rather than up to the roof. Where the roof is the only way out, we use a proper roof cap with a damper and no screen.',
      'Every installation is rigid metal with a smooth interior, joints sealed with foil tape, supported along its length, and ends at a hood with a working damper at least 3 feet from any window, door or other opening.',
    ],
    benefits: [
      { title: 'Shortest legal route', text: 'Planned around the 35 foot limit and its bend deductions, or the dryer maker\'s longer limit where it applies.' },
      { title: 'Rigid metal throughout', text: 'Smooth interior, foil tape at the joints, no screws into the airflow.' },
      { title: 'Proper termination', text: 'A wall hood or roof cap with a damper and no screen, clear of windows and doors.' },
      { title: 'Measured when done', text: 'The new run is tested at the hood so you know it moves the air it should.' },
    ],
    process: [
      { title: 'Plan the route', text: 'Laundry position, exit point and run length worked out, and the price given.' },
      { title: 'Cut and fit', text: 'Wall or roof penetration made and sealed, duct run in rigid metal and supported.' },
      { title: 'Terminate', text: 'Hood or roof cap fitted with a working damper, flashed or sealed against Florida rain.' },
      { title: 'Connect and test', text: 'Listed transition fitted behind the dryer, airflow measured at the termination.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$200 to $600' },
      { label: 'Duct', value: '4 inch rigid metal, 0.016 inch or heavier' },
      { label: 'Code length limit', value: '35 ft less 2.5 ft per 45° bend and 5 ft per 90° bend' },
      { label: 'Termination', value: 'Damper, no screen, 3 ft from openings' },
    ],
    faq: [
      { question: 'How much does dryer vent installation cost in Florida?', answer: '$200 to $600. A short run straight through an exterior wall is at the bottom; a long attic run to a roof cap, or a new laundry location that needs a route from scratch, is at the top.' },
      { question: 'Can I move my dryer to the garage or upstairs?', answer: 'Usually, as long as there is a route out within the length limit. We look at the location and tell you before you commit to the move.' },
      { question: 'Is a roof vent or a wall vent better?', answer: 'A wall vent, where one is possible. It is shorter, has fewer bends, is easier to clean and does not collect roof debris. Roof terminations are for runs that have no reachable wall.' },
      { question: 'What duct do you use?', answer: 'Four inch rigid metal with a smooth interior, joined and sealed with foil tape. Flexible foil or plastic is never used inside walls or ceilings.' },
    ],
    related: ['dryer-vent-repair', 'roof-and-wall-vent-caps', 'dryer-vent-cleaning'],
  },
  {
    slug: 'roof-and-wall-vent-caps',
    name: 'Roof & Wall Dryer Vent Caps',
    shortName: 'Vent Caps',
    icon: 'cap',
    metaTitle: 'Dryer Vent Caps, Bird Nests & Stuck Dampers | Florida',
    metaDescription:
      'Dryer vent hoods and roof caps across Florida: bird nests removed, stuck dampers freed, illegal screens taken off, caps replaced. Priced before we book.',
    answer:
      'The hood or roof cap at the end of the run is where many Florida dryer vents actually block: a bird nest, a damper rusted shut, a screen someone added that traps lint. Clearing or replacing it is priced within our cleaning or repair range, $100 to $200 or $200 to $600, and quoted before we book.',
    intro: [
      'Birds in Florida nest year round, and a dryer vent hood is a warm, sheltered hole in a wall. A nest can block most of the opening within days. The sign is usually a dryer that suddenly gets slow, sometimes with chirping or debris on the ground under the hood.',
      'The damper is the other failure. Salt air and humidity corrode the hinge until the flap no longer opens fully with the dryer or no longer closes when it stops, letting in rain, insects and humid air. Screens are a third: they keep birds out and catch lint, which is why the code does not allow them on dryer terminations.',
      'Roof caps add access. They are out of sight, so a blocked one goes unnoticed for years. We clear and inspect them from the roof where it is safe to do so, and replace caps that are cracked, missing their damper or wrong for a dryer.',
    ],
    benefits: [
      { title: 'Nests removed whole', text: 'Pulled out from the hood and the first section of duct, not pushed further in.' },
      { title: 'Dampers that work', text: 'Freed or replaced so they open with the dryer and close when it stops.' },
      { title: 'No illegal screens', text: 'Lint catching screens removed and replaced with a guard designed for dryer exhaust.' },
      { title: 'Roof caps checked', text: 'Cleared and inspected where the roof allows safe access.' },
    ],
    process: [
      { title: 'Inspect the termination', text: 'Hood or cap checked with the dryer running for airflow and damper movement.' },
      { title: 'Clear', text: 'Nest, lint and debris removed from the hood and the end of the duct.' },
      { title: 'Repair or replace', text: 'Damper freed, screen removed, or the hood or cap replaced if it is past saving.' },
      { title: 'Test', text: 'Airflow checked at the termination with the dryer running.' },
    ],
    quickFacts: [
      { label: 'Price', value: 'Within $100 to $200 to clear, $200 to $600 to replace' },
      { label: 'Most common call', value: 'Bird nest in a wall hood' },
      { label: 'Code', value: 'Damper required, screen not allowed' },
      { label: 'Roof caps', value: 'Cleared where access is safe' },
    ],
    faq: [
      { question: 'There is a bird nest in my dryer vent. What should I do?', answer: 'Stop using the dryer until it is cleared, because the nest blocks the exhaust and is dry, flammable material. Do not push it in with a pole; it has to come out from the hood end.' },
      { question: 'Can I put a screen over my dryer vent to keep birds out?', answer: 'No. A screen catches lint and blocks the exhaust, and the code does not allow one on a dryer termination. A guard made for dryer vents, or a hood with a working damper, is the right fix.' },
      { question: 'Why does my vent flap not close?', answer: 'Usually lint built up on the hinge, or corrosion from salt air. It lets humid air and insects into the duct, and it is often a quick fix at the hood.' },
      { question: 'Do you clean roof dryer vents?', answer: 'Yes, where the roof can be reached and walked safely. On steep or fragile roofs we clean from the inside and tell you if the cap itself needs attention.' },
    ],
    related: ['dryer-vent-cleaning', 'dryer-vent-repair', 'dryer-vent-installation'],
  },
  {
    slug: 'condo-and-apartment-dryer-vents',
    name: 'Condo & Apartment Dryer Vents',
    shortName: 'Condos & Buildings',
    icon: 'building',
    metaTitle: 'Condo & Apartment Dryer Vent Cleaning in Florida',
    metaDescription:
      'Dryer vent cleaning for Florida condos, apartments and associations: unit owners and whole buildings, priced per unit and quoted per building before booking.',
    answer:
      'Condo and apartment dryer vents are short runs in the unit that often join a shared duct or riser serving other units. We clean individual units at $100 to $200 and quote whole buildings per unit for associations and managers, and we tell you clearly which part is yours and which belongs to the building.',
    intro: [
      'In a low rise building the dryer usually vents a short distance to an exterior wall. In a mid or high rise it often connects to a vertical riser that carries exhaust from several units to the roof, sometimes with a booster fan at the top. The unit owner owns the part from the dryer to the wall or ceiling connection; the riser is the association\'s.',
      'That line is where problems sit unowned for years. A unit owner cleans their six feet, the dryer is still slow, and the cause is lint packed in a shared riser that nobody has scheduled. We tell you which side of the line the restriction is on before quoting.',
      'For associations and property managers we quote whole buildings per unit, schedule floor by floor to keep disruption down, and leave a record of every unit with before and after airflow.',
    ],
    benefits: [
      { title: 'Clear ownership', text: 'Your section and the building\'s section identified before anyone pays for the wrong one.' },
      { title: 'Per unit pricing', text: 'Buildings quoted per unit, so the board knows the total before approving.' },
      { title: 'Scheduled around residents', text: 'Floor by floor, with notice, so units are not left without a dryer for long.' },
      { title: 'A record per unit', text: 'Before and after airflow for each unit, for the association\'s maintenance file.' },
    ],
    process: [
      { title: 'Walk the building', text: 'Unit connections, risers, roof terminations and any booster fans inspected.' },
      { title: 'Quote per unit', text: 'One price per unit and a schedule, approved before work starts.' },
      { title: 'Clean', text: 'Unit runs and shared risers cleaned, terminations cleared, dampers freed.' },
      { title: 'Report', text: 'Airflow per unit before and after, and anything that needs repair listed.' },
    ],
    quickFacts: [
      { label: 'Single unit', value: '$100 to $200' },
      { label: 'Buildings', value: 'Quoted per unit' },
      { label: 'Owner\'s part', value: 'Dryer to the wall or ceiling connection' },
      { label: 'Association\'s part', value: 'Shared risers, roof terminations, booster fans' },
    ],
    faq: [
      { question: 'Who is responsible for my condo dryer vent?', answer: 'Usually you own the run from your dryer to where it connects to the wall or ceiling, and the association owns any shared riser and the roof termination. Your declaration and the board can confirm it for your building.' },
      { question: 'My dryer is slow even after cleaning. Why?', answer: 'In a building with a shared riser, the restriction is often in the riser or at the roof, not in your section. That is the association\'s to schedule, and we can tell you if that is what we found.' },
      { question: 'Do you work with associations and property managers?', answer: 'Yes. We quote per unit for the whole building, schedule floor by floor, and leave a per unit record of airflow before and after.' },
      { question: 'How often should a building clean its dryer vents?', answer: 'Once a year for most buildings, more often where risers serve many units or carry heavy daily use.' },
    ],
    related: ['dryer-vent-cleaning', 'roof-and-wall-vent-caps', 'dryer-vent-repair'],
  },
  {
    slug: 'dryer-vent-inspection',
    name: 'Dryer Vent Inspection',
    shortName: 'Inspection',
    icon: 'inspect',
    metaTitle: 'Dryer Vent Inspection in Florida | Airflow Tested',
    metaDescription:
      'Dryer vent inspection across Florida: airflow tested at the hood, then the transition hose, joints, run length and termination checked against the code.',
    answer:
      'A dryer vent inspection tells you whether your vent moves the air it should and, if it does not, where the air is being lost. We read airflow at the outside termination and check the transition hose, the joints, the run length against the code limit and the hood or cap. It is part of every cleaning we do, and on its own it is quoted before booking.',
    intro: [
      'Most inspections are booked because something changed. A house is being bought or sold and the home inspection report flags the dryer vent for further evaluation. A new dryer went in and the installer shoved it back against the wall. Or a newer machine has started showing a vent warning, which many dryers now do when they sense restricted exhaust.',
      'We start outside with the dryer on high heat and take an airflow reading at the hood or roof cap. Then the dryer comes out and we follow the duct as far as it can be seen or reached: the hose behind the machine, the wall or floor connection, joints and supports in the attic or soffit, and the termination itself.',
      'You get a plain written account of what the run is made of, how long it is once the bends are counted, and where any restriction or leak sits. Some runs need nothing. Some need a cleaning. Some have a fault that only a repair or a new route will solve, and we tell you which before any work is offered.',
    ],
    benefits: [
      { title: 'A reading you can compare', text: 'Airflow taken at the termination on the hottest setting, so the same check can be repeated next year at the same spot.' },
      { title: 'Length worked out on paper', text: 'Every straight section and bend added up against the 35 foot limit and its deductions, or the dryer manufacturer\'s figure where that is longer.' },
      { title: 'Useful at a sale', text: 'Buyers, sellers and agents get a short written note on the vent that can sit next to the home inspection report.' },
      { title: 'Findings first, fixes second', text: 'If the run is sound we say so. If it is not, the fix is priced separately and only done when you agree to it.' },
    ],
    process: [
      { title: 'Outside reading', text: 'Dryer on high heat, airflow measured at the hood or roof cap before anything is moved.' },
      { title: 'Transition and connection', text: 'Dryer pulled out, the hose behind it checked for a listed type, its length, kinks and crush, and the connection checked for a seal.' },
      { title: 'Follow the run', text: 'Material, joints and supports checked through the attic, soffit or chase wherever the duct can be seen or reached.' },
      { title: 'Count the length', text: 'Straight runs and every bend totalled and compared with the code limit and the dryer manufacturer\'s instructions.' },
      { title: 'Termination and write up', text: 'Damper movement, screen and clearance from openings checked at the hood, then the findings written down and walked through with you.' },
    ],
    quickFacts: [
      { label: 'Price', value: 'Included in every cleaning; on its own, quoted before booking' },
      { label: 'What is checked', value: 'Airflow, transition hose, joints, run length, termination' },
      { label: 'Good times to book', value: 'Home sale, new dryer, vent warning on the dryer' },
      { label: 'You receive', value: 'Written findings and the airflow reading' },
    ],
    faq: [
      { question: 'How much does a dryer vent inspection cost?', answer: 'It is built into every dryer vent cleaning we do, and those run $100 to $200. If you only want the inspection, for a sale or a second opinion, tell us about the house and the run and we quote it before booking.' },
      { question: 'Should I have the dryer vent inspected when buying a house?', answer: 'In Florida it is worth it, because so many vents run through a hot attic to the roof where nobody looks. A general home inspector usually sees the hood and the visible hose; we follow the run and measure what actually comes out.' },
      { question: 'My dryer shows a vent warning. Is the vent really blocked?', answer: 'Often, not always. The sensor reacts to restricted exhaust, which can be lint in the run, a crushed hose behind the machine, a stuck damper or a run that is simply too long. An inspection tells you which, so you do not pay for a cleaning that will not clear the warning.' },
      { question: 'Do I need an inspection after replacing my dryer?', answer: 'It is a good idea. A new machine is often connected with the old hose, kinked as it is pushed into place, or given a foil hose longer than the 8 feet allowed. A check behind the dryer catches most of that early.' },
      { question: 'What happens if the inspection finds a problem?', answer: 'You get the finding and a price to put it right: a cleaning at $100 to $200 or repair work at $200 to $600. Nothing is done until you say yes.' },
    ],
    related: ['dryer-vent-cleaning', 'dryer-vent-repair', 'roof-dryer-vent-cleaning'],
  },
  {
    slug: 'roof-dryer-vent-cleaning',
    name: 'Roof Dryer Vent Cleaning',
    shortName: 'Roof Vents',
    icon: 'roof',
    metaTitle: 'Roof Dryer Vent Cleaning in Florida | $100 to $200',
    metaDescription:
      'Roof dryer vent cleaning in Florida, $100 to $200. The full run from dryer to roof cap cleaned from both ends, felted lint cleared, airflow measured.',
    answer:
      'Roof dryer vent cleaning clears the whole duct when your dryer exhausts through the roof: the vertical run through the attic and the cap on top. In Florida it costs $100 to $200, worked from the roof and from the dryer, with unusual cases such as a nest packed into the cap quoted before booking.',
    intro: [
      'Plenty of Florida homes have no outside wall the dryer can reach. Two story houses, townhomes and interior laundry rooms often send the duct up through the attic to a cap on the roof. Those runs are long, they climb before they leave, and every foot of lift is a place where damp lint loses speed and settles back down.',
      'The cap is where they tend to choke. Many roof caps sold for bath fans or attic ventilation come with a screen, and on a dryer that screen felts over with lint until very little gets through. Others are open enough for birds and rodents to build in. Because the cap sits out of sight on tile or shingle, a dryer can run hot and slow for months before anyone thinks to look up.',
      'We clean these runs from both ends. From the roof we clear the cap and brush downward; from the laundry we brush and blow upward toward the open cap, so lint leaves the house instead of packing into the attic elbow. On barrel tile, steep pitches or wet roofs we stay off anything that will not bear weight safely, and tell you what that means for the result.',
    ],
    benefits: [
      { title: 'Cap and run in one visit', text: 'The screen, damper and throat of the roof cap are cleared, and so is every foot of duct below it.' },
      { title: 'Top and bottom', text: 'Brushing from both ends keeps lint moving out through the roof rather than piling up where the duct turns in the attic.' },
      { title: 'Care on tile and shingle', text: 'Weight placed only where the roof will take it, and the cap left sealed as we found it, or flagged if it was already failing.' },
      { title: 'Measured at the cap', text: 'Airflow read at the roof termination before and after, so you see how much more air now reaches the outside.' },
    ],
    process: [
      { title: 'Reading at the cap', text: 'With the dryer on high, airflow measured at the roof termination and the cap checked for a screen, a nest or a stuck damper.' },
      { title: 'Clear the cap', text: 'Felted lint, nesting material and debris lifted out of the cap and the first feet of duct beneath it.' },
      { title: 'Brush from the roof', text: 'Rotary brush run down the vertical section from the top, loosening what has settled on the way up.' },
      { title: 'Brush and blow from the dryer', text: 'Transition hose checked, then brush and compressed air sent up through the attic run toward the open cap.' },
      { title: 'Measure and report', text: 'Second reading at the cap, dryer reconnected, and any problem with the cap or the attic joints noted with a price.' },
    ],
    quickFacts: [
      { label: 'Typical price', value: '$100 to $200' },
      { label: 'Quoted before booking', value: 'A nest packed into the cap, a cap that must be replaced' },
      { label: 'Cap replacement', value: 'Repair work, within $200 to $600' },
      { label: 'Most common blockage', value: 'Lint felted over a screened cap' },
    ],
    faq: [
      { question: 'How much does roof dryer vent cleaning cost?', answer: '$100 to $200 for most homes, the same range as any dryer vent cleaning, with roof runs usually toward the top because of their length and the climb. A nest packed solid into the cap is quoted before booking, and a cap that has to be replaced is repair work at $200 to $600.' },
      { question: 'Why does my dryer roof vent keep clogging?', answer: 'Usually the cap has a screen or louvers too fine for lint, or the run is so long and vertical that the dryer cannot push lint all the way up. Taking the screen off or fitting a cap made for dryer exhaust often solves it; a run past its length limit may also need a shorter route.' },
      { question: 'Is it normal to have the dryer vent on the roof?', answer: 'It is common in Florida where the laundry sits in the middle of the house or upstairs. It is not ideal, being longer and harder to clean than a wall vent, but it works when the run stays within its length limit and the cap is built for a dryer.' },
      { question: 'Can a roof vent be cleaned without going on the roof?', answer: 'Partly. Most of the run can be cleaned from the dryer, but lint felted onto a cap screen or a nest inside the cap has to come out from above. If the roof cannot be walked safely, we tell you what was reached and what was not.' },
      { question: 'Do you replace dryer roof caps?', answer: 'Yes. A cap with a screen, a broken damper or a cracked housing is swapped for one designed for dryer exhaust and sealed to the roof. That falls under our repair range of $200 to $600 and is quoted before the work.' },
    ],
    related: ['roof-and-wall-vent-caps', 'dryer-vent-cleaning', 'dryer-vent-inspection'],
  },
  {
    slug: 'commercial-dryer-vent-cleaning',
    name: 'Commercial Dryer Vent Cleaning',
    shortName: 'Commercial',
    icon: 'commercial',
    metaTitle: 'Commercial Dryer Vent Cleaning in Florida | Quoted per Site',
    metaDescription:
      'Commercial dryer vent cleaning in Florida for condo laundry rooms, HOAs, hotels, assisted living and laundromats. Quoted per building after a walk through.',
    answer:
      'Commercial dryer vent cleaning covers buildings where many dryers run every day: condo and apartment laundry rooms, hotels and short term rentals, assisted living and small laundromats. Each site is quoted per building after a walk through, and every visit ends with a written record of what was cleaned and the airflow readings.',
    intro: [
      'A shared laundry room puts more lint through its ducts in a week than most families put through theirs in months. Machines run back to back, residents and guests skip the lint screen, and the ducts often feed a common header or a long climb to the roof. The hazard is the same one found in a house, repeated at every machine for every hour it runs.',
      'We begin with a walk through: how many dryers there are, where each one vents, how the ducts join, where they leave the building and how we reach the terminations. That shows what a cleaning involves and how long the room will be out of use, and it is how we price the building from what is there rather than from a guess.',
      'Most sites settle into a scheduled plan, with the interval set by how hard the machines are worked. After each visit the manager receives a written record listing every dryer and duct cleaned, what we found, and the airflow before and after, which is usually the document a board, an owner or an insurer asks to see.',
    ],
    benefits: [
      { title: 'Priced from a walk through', text: 'The quote reflects the real ducts, roof access and number of machines, so it holds when the work starts.' },
      { title: 'Planned around the laundry', text: 'Visits timed for quiet hours, and machines cleaned in groups so part of the room stays usable where the layout allows.' },
      { title: 'Records for boards and insurers', text: 'A dated, written record of each dryer and duct cleaned with its airflow readings, ready for the maintenance file.' },
      { title: 'A schedule instead of a scare', text: 'Recurring cleanings on a set interval, so nobody has to remember until a machine overheats.' },
    ],
    process: [
      { title: 'Walk through', text: 'Machines counted, every connection, shared duct and termination located, and access to the roof or outside wall checked.' },
      { title: 'Quote and schedule', text: 'One price for the building, and a date and time chosen around residents, guests or the care routine.' },
      { title: 'Baseline readings', text: 'Airflow measured at each termination before cleaning, so the record shows where the worst restriction was.' },
      { title: 'Clean', text: 'Each dryer pulled and its connection checked, ducts and any shared header brushed and blown through, terminations and dampers cleared.' },
      { title: 'Readings and record', text: 'Airflow measured again at every termination and the written record sent to the manager or the board.' },
    ],
    quickFacts: [
      { label: 'Price', value: 'Quoted per building after a walk through' },
      { label: 'Who we work with', value: 'Associations, property managers, hotels, rental operators, assisted living, small laundromats' },
      { label: 'Documentation', value: 'Written record of what was cleaned, with airflow readings' },
      { label: 'Schedule', value: 'Recurring plan, interval set by how much the machines run' },
    ],
    faq: [
      { question: 'How is commercial dryer vent cleaning priced?', answer: 'Per building, after we have walked the site. The number of machines, how the ducts are laid out and how the terminations are reached all change the work, so we do not price a building from a phone call.' },
      { question: 'How often should a common laundry room be cleaned?', answer: 'More often than a house. A room that runs most of the day, a hotel laundry or a care facility will usually need more than one cleaning a year, while a small building with light use may manage with one. We suggest an interval from what the first visit shows.' },
      { question: 'Can you provide paperwork for our insurer or association?', answer: 'Yes. Every visit ends with a written record of the date, which dryers and ducts were cleaned, and the airflow measured before and after. If your insurer or board wants something specific on it, tell us before the visit.' },
      { question: 'Do you work with short term rental hosts?', answer: 'Yes. A rental runs the dryer after every stay, often for guests who never touch the lint screen. We can schedule between bookings and send the record straight to the owner or the management company.' },
      { question: 'Do you clean laundromat dryer vents?', answer: 'For small laundromats, yes. We look at the machines and the exhaust layout on the walk through and tell you plainly if the setup needs equipment or access beyond what we bring.' },
    ],
    related: ['condo-and-apartment-dryer-vents', 'dryer-vent-inspection', 'roof-dryer-vent-cleaning'],
  },
  {
    slug: 'dryer-booster-fan-installation',
    name: 'Dryer Booster Fan Installation',
    shortName: 'Booster Fans',
    icon: 'fan',
    metaTitle: 'Dryer Booster Fan Installation in Florida | $200 to $600',
    metaDescription:
      'Dryer vent booster fan installation in Florida for runs past code length: a listed unit, a pressure switch and cleaning access. $200 to $600, quoted first.',
    answer:
      'A dryer booster fan is an inline fan that helps exhaust travel a duct longer than the code allows when no shorter route exists. We install listed dryer exhaust duct power ventilators with a pressure switch and cleaning access, within our $200 to $600 range for vent work, and quote the job before booking.',
    intro: [
      'Some Florida laundries sit deep inside the house or two floors below the roof, and even the shortest route out is past the 35 foot limit once the bends are counted. Moving the dryer is not always possible. For that case the code allows a longer run when it is served by a dryer exhaust duct power ventilator, a booster made and listed for dryer exhaust, installed according to its listing and the dryer manufacturer\'s instructions.',
      'A booster is not a cure for a slow dryer. If the run is full of lint, crushed behind the machine or split in the attic, a fan just pushes harder against the same fault, or blows lint out of the leak faster. We check length, condition and airflow first, and recommend one only when cleaning, repair or a shorter route cannot make the run work.',
      'Where a booster is the right answer, it goes where it can be opened and cleaned, because lint gathers on its blades and inside its housing. A pressure switch starts it only when the dryer is pushing air and stops it when the dryer does. The duct around it is rigid metal with taped joints, ending at a damper with no screen.',
    ],
    benefits: [
      { title: 'Only when it is the right fix', text: 'Cleaning, repair and rerouting are ruled out first, so you do not pay for a fan that hides a duct problem.' },
      { title: 'Listed for dryer exhaust', text: 'A power ventilator built and listed for hot, damp lint, not a bathroom fan or a general purpose duct fan.' },
      { title: 'Runs only with the dryer', text: 'A pressure switch brings it on when the dryer pushes air and shuts it off when the cycle ends.' },
      { title: 'Reachable for cleaning', text: 'Mounted where the housing can be opened and the blades cleaned at every vent cleaning.' },
    ],
    process: [
      { title: 'Measure the run', text: 'Developed length worked out with bend deductions, airflow read at the termination, and the duct checked for lint, crush and leaks.' },
      { title: 'Rule out simpler fixes', text: 'Cleaning, a repair or a shorter route considered first, and the dryer manufacturer\'s instructions checked for their own length allowance.' },
      { title: 'Quote', text: 'If a booster is the answer, one price for the unit, its mounting and any duct work, given before booking.' },
      { title: 'Install', text: 'Listed unit fitted in an accessible spot per its listing and the dryer maker\'s instructions, pressure switch set, joints sealed with foil tape.' },
      { title: 'Test', text: 'Airflow measured at the termination with dryer and fan running, and the switch checked to start and stop with the dryer.' },
    ],
    quickFacts: [
      { label: 'Price', value: 'Within $200 to $600, quoted before booking' },
      { label: 'When it fits', value: 'Run past the code length with no shorter route' },
      { label: 'Unit required', value: 'Listed dryer exhaust duct power ventilator' },
      { label: 'Must have', value: 'Pressure switch and cleaning access' },
    ],
    faq: [
      { question: 'How much does dryer booster fan installation cost?', answer: 'It falls within our $200 to $600 range for vent work. The figure depends on the unit, where it can be mounted with access, and how much of the duct has to change, and you get it before booking.' },
      { question: 'Will a booster fan fix my slow dryer?', answer: 'Only if the run is clean, sealed and simply too long. When lint, a crushed hose or a separated joint is the cause, a fan will not solve it, which is why we measure and inspect before recommending one.' },
      { question: 'Can any inline fan be used as a dryer vent booster fan?', answer: 'No. Dryer exhaust carries hot, damp lint, and the code calls for a dryer exhaust duct power ventilator listed for that job. A general purpose duct fan is not built for lint passing over its motor and blades.' },
      { question: 'Does a booster fan need maintenance?', answer: 'Yes. It should be opened and cleaned at every vent cleaning, and the pressure switch checked so the fan still starts when the dryer does. A fan that has stopped turning becomes a restriction of its own.' },
      { question: 'Is rerouting better than a booster fan?', answer: 'When a shorter route exists, yes. Fewer feet and fewer bends work without any moving parts, and a reroute is installation work in the same $200 to $600 range.' },
    ],
    related: ['dryer-vent-installation', 'dryer-vent-repair', 'dryer-vent-inspection'],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
