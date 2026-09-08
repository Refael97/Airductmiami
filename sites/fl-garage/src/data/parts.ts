/**
 * The parts catalogue: one page per replaceable part.
 *
 * Why this exists, from research/fl-garage/CATALOGUE.md. No Florida garage
 * door service company gives an individual part its own page. The companies
 * that own "buy a garage door spring" are national DIY retailers and the big
 * box stores, and that is a query we cannot win and do not want: the person
 * typing it intends to do the job themselves, and this site publishes an
 * article arguing that nobody should replace a torsion spring themselves.
 *
 * So these pages are aimed one step earlier in the same person's day. The
 * visitor worth having is the one whose door failed an hour ago, who does not
 * know the part is called a torsion spring, and who is searching the noise it
 * made. `symptoms` is what earns that visit. The button then offers what they
 * actually want, which is somebody to arrive with the part fitted to their
 * door.
 *
 * Three rules for anyone editing this file:
 *
 * 1. **No part-only prices.** Every price shown comes from the matching
 *    service in services.ts and is an installed price. We do not sell parts
 *    over a counter and a part price we cannot honour breaks the rule that
 *    the site, the popup and the phone must agree.
 * 2. **The DIY answer is honest even when it costs us a job.** A bottom seal
 *    is a genuine DIY job and the page says so. A torsion spring can kill
 *    somebody and the page says that instead of hedging to win the work.
 * 3. **No Product or Offer schema.** These are service pages, and they emit
 *    Service and FAQPage like every other service page on the site. Google's
 *    Product type requires a price we are not going to invent.
 */

import type { Part } from './types';

export const parts: Part[] = [
  {
    slug: 'torsion-spring',
    name: 'Garage Door Torsion Spring',
    shortName: 'Torsion spring',
    metaTitle: 'Garage Door Torsion Spring Replacement in Florida | Symptoms and Cost',
    metaDescription:
      'How to tell a torsion spring has broken, why they fail in Florida, and what replacement costs installed. A technician arrives with the spring matched to your door.',
    service: 'garage-door-spring-replacement',
    answer:
      'The torsion spring is the tightly wound bar mounted horizontally above the door opening, and it carries almost the entire weight of the door. When it breaks you usually hear it: a single loud bang from the garage, often at night or during the first opening of a cold morning. After that the door either will not lift at all or feels impossibly heavy by hand, and the opener strains without moving it. Replacement runs $150 to $350 installed, and it is not a job to attempt yourself.',
    intro: [
      'Nearly all the lifting in a garage door is done by the springs, not by the opener. The opener is a guide that tells a balanced door where to go. A torsion spring stores the energy that makes the door balanced in the first place, which is why a 150 pound door can be raised with one hand when everything is working.',
      'That energy is the reason a broken spring is loud and the reason a wound one is dangerous. A torsion spring under tension holds enough force to break bones, and it releases all of it at once if the winding bars slip. Every year emergency departments see hands and faces from exactly this job.',
      'You can usually confirm the diagnosis from the floor without touching anything. Look at the bar above the door. A whole spring is a continuous coil. A broken one has a visible gap of two or three inches where the break is, and the two halves have separated along the bar.',
    ],
    symptoms: [
      'A single loud bang from the garage with nothing obviously wrong afterwards',
      'The door will not open, or lifts a few inches and stops',
      'The opener motor runs and strains but the door does not move',
      'The door is extremely heavy to lift by hand after pulling the manual release',
      'A visible two to three inch gap in the coil on the bar above the door',
      'The door drops fast instead of staying put when you stop it halfway',
    ],
    whyItFails: [
      'Springs are rated in cycles rather than years. A standard spring is around 10,000 cycles, and one cycle is one open and one close. A household that comes and goes four times a day reaches that in about seven years, which is why so many break with no warning at roughly the same age.',
      'Florida humidity and coastal salt air corrode the steel from the outside in. A pitted coil concentrates stress at the pit and breaks earlier than its cycle rating, and garages within a few miles of the water see this plainly.',
      'Heat matters too. A garage that reaches 110 degrees through a Florida summer expands and contracts the steel daily, and metal fatigue is cumulative.',
    ],
    diy: 'no',
    diyNote:
      'This is the one job on this site we tell people flatly not to do. A wound torsion spring stores enough energy to break an arm or worse, the winding bars have to be the right diameter and fully seated, and a spring that is even slightly mismatched to the door weight leaves you with a door that will not stay put. If your only concern is the money, the honest comparison is $150 to $350 for the job done properly against an emergency room visit.',
    quickFacts: [
      { label: 'Typical life', value: '10,000 cycles, about 7 years' },
      { label: 'Installed price', value: 'From $150' },
      { label: 'Time on site', value: '60 to 90 minutes' },
      { label: 'Safe to DIY', value: 'No' },
      { label: 'Replace in pairs', value: 'Yes, on a two spring door' },
    ],
    faq: [
      {
        question: 'One spring broke. Do I have to replace both?',
        answer:
          'On a two spring door, yes, and this is worth understanding rather than taking on trust. Both springs are the same age and have taken the same number of cycles, so the second one is not far behind. Replacing one means paying a second call-out within a year or two, and it also leaves the door pulling unevenly in the meantime, which wears the cables and the rollers on one side. We quote both and we say why.',
      },
      {
        question: 'Can I open the door with a broken spring?',
        answer:
          'You can, using the manual release, but be careful and get help. Without the spring you are lifting the full weight of the door, which is 130 to 350 pounds depending on the size and material. Prop it open with something solid rather than trusting it to stay, because with no spring it will come down as fast as gravity allows.',
      },
      {
        question: 'How do I know if I have torsion or extension springs?',
        answer:
          'Look at where they sit. Torsion springs mount on a horizontal bar above the door opening. Extension springs run along the horizontal tracks on either side of the door, parallel to the ceiling. Most Florida garages built since the eighties use torsion, which is the stronger and safer arrangement of the two.',
      },
    ],
    related: ['extension-spring', 'lift-cable', 'roller'],
  },

  {
    slug: 'extension-spring',
    name: 'Garage Door Extension Spring',
    shortName: 'Extension spring',
    metaTitle: 'Garage Door Extension Spring Replacement in Florida | Symptoms and Cost',
    metaDescription:
      'Extension springs run along the side tracks and stretch as the door closes. How to spot a broken one, why safety cables matter, and what replacement costs installed.',
    service: 'garage-door-spring-replacement',
    answer:
      'Extension springs are the long springs running along the horizontal tracks on each side of the door, parallel to the ceiling. They stretch as the door comes down and pull it back up. They are found mostly on older and lighter Florida doors, and when one breaks the door goes crooked, drags on one side, or refuses to lift. Replacement runs $150 to $350 installed, always in pairs, and any extension spring without a safety cable through it should be treated as urgent.',
    intro: [
      'An extension spring works by stretching rather than twisting. When the door is down the spring is at full extension and holding the most energy, and as the door rises the spring relaxes. Two springs, one each side, share the load.',
      'The important safety point is the containment cable. A steel cable should run through the middle of every extension spring and anchor at both ends. Its only job is to catch the spring if it snaps, because a spring under tension that lets go becomes a length of steel travelling across the garage at speed. Older Florida installations frequently have no containment cable at all, and if yours does not, that is worth fixing whether or not the spring has failed.',
      'You can inspect these from the floor. Stand back with the door closed and look along each track. A broken spring is obvious: it has separated, gone slack, or one side sits visibly longer than the other.',
    ],
    symptoms: [
      'The door lifts crooked, with one side clearly higher than the other',
      'One spring hangs loose or has visibly separated',
      'The door binds and scrapes in the track on one side',
      'The opener strains, or the door stops partway',
      'A loud snap followed by the door dropping or jamming',
      'One spring looks noticeably stretched and longer than the other',
    ],
    whyItFails: [
      'Like torsion springs, extension springs are rated in cycles rather than years, and they arrive at the end of that rating together because they have done the same work.',
      'A door running on extension springs is usually an older Florida door, which means the springs have often had twenty or more humid summers. Corrosion pits the steel and the spring fails at the pit rather than at the cycle count.',
      'Uneven wear compounds it. Once one spring weakens the other carries more than its share, so the second failure follows the first much faster than the first took to arrive.',
    ],
    diy: 'no',
    diyNote:
      'Not a homeowner job. An extension spring at full stretch with the door closed holds enough energy to cause serious injury, and the springs, the pulleys and the cables all have to come off and go back in the right order and at matched tension. If your springs have no safety containment cable running through them, say so when you call, because we fit those as part of the job.',
    quickFacts: [
      { label: 'Typical life', value: '10,000 cycles, about 7 years' },
      { label: 'Installed price', value: 'From $150' },
      { label: 'Time on site', value: '60 to 90 minutes' },
      { label: 'Safe to DIY', value: 'No' },
      { label: 'Safety cable', value: 'Required through every spring' },
    ],
    faq: [
      {
        question: 'What is the safety cable inside the spring for?',
        answer:
          'It contains the spring if it breaks. An extension spring under load that snaps without a cable through it travels across the garage with real force, and the cable turns that into a spring hanging harmlessly on a wire. Many older Florida doors were installed without them or lost them during a previous repair. We fit them as standard and we will tell you if yours are missing.',
      },
      {
        question: 'Should I convert to a torsion system?',
        answer:
          'Often it is worth pricing, and we will tell you honestly whether it is worth it on your door. Torsion is safer, lasts longer, balances better and is quieter. It also costs more because it needs a header bar, brackets and mounting, so on a small light door near the end of its own life the answer is usually to replace the extension springs and spend the difference elsewhere.',
      },
      {
        question: 'Can only one extension spring be replaced?',
        answer:
          'It is physically possible and we do not recommend it. Both springs are the same age with the same cycles on them, so the second failure is close behind. Worse, a new spring next to a tired one pulls unevenly, and the door then wears its rollers and cables faster on the weaker side.',
      },
    ],
    related: ['torsion-spring', 'lift-cable', 'track'],
  },

  {
    slug: 'lift-cable',
    name: 'Garage Door Lift Cable',
    shortName: 'Lift cable',
    metaTitle: 'Garage Door Cable Replacement in Florida | Frayed and Snapped Cables',
    metaDescription:
      'The steel cables that lift the door fray, slip off the drum, and snap. How to tell, why Florida humidity is hard on them, and what replacement costs installed.',
    service: 'garage-door-cable-repair',
    answer:
      'The lift cables are the two steel cables running from the bottom bracket of the door up to a drum at each end of the spring bar. They translate the spring tension into lift. When one frays or comes off its drum, the door goes crooked, jams in the track, or hangs at an angle. Replacement runs $95 to $300 installed, and a door with one cable off should not be operated until it is fixed.',
    intro: [
      'The cable is the link between the spring and the door. The spring stores the energy, the drum winds the cable, and the cable pulls the bottom corner of the door upward. Two cables, one at each corner, keep it level.',
      'This is why a cable problem always looks like a levelness problem. If one cable slips off its drum or breaks, that corner stops being pulled up while the other keeps going, and the door immediately racks in the track. That is also why continuing to run the opener makes it worse: every cycle drags the door further out of square.',
      'Cables are cheap and the labour is short. The reason to deal with it quickly is not the cost of the part, it is that a racked door bends tracks and damages rollers and panels, and those are the expensive items.',
    ],
    symptoms: [
      'The door hangs at an angle, with one side lower than the other',
      'A cable is visibly loose, slack, or hanging off its drum',
      'Frayed strands or rust stains where the cable runs',
      'The door jams partway and grinds in the track',
      'A snapping sound followed by the door dropping on one side',
      'The door closes unevenly and leaves a wedge of light along one edge',
    ],
    whyItFails: [
      'Florida humidity is the main enemy. A galvanised cable resists corrosion until the coating is scratched or worn at the drum, and after that the strands rust from the inside where you cannot see them.',
      'Coastal salt accelerates it sharply. In beach communities we see cables fail years earlier than the same cable would inland, and the failure is usually corrosion rather than wear.',
      'Misalignment does the rest. A door that is slightly out of square, or a drum that has loosened on the bar, makes the cable rub where it should roll, and a rubbing cable frays at that one spot until it parts.',
    ],
    diy: 'no',
    diyNote:
      'Changing a cable means relieving spring tension first, and that puts you back in torsion spring territory with the same risks. It also has to be set so both drums carry equal cable, or the door will never sit square. This is short work for a technician with the right tools and a bad afternoon for anyone else.',
    quickFacts: [
      { label: 'Installed price', value: 'From $95' },
      { label: 'Time on site', value: '45 to 90 minutes' },
      { label: 'Replace in pairs', value: 'Recommended' },
      { label: 'Safe to DIY', value: 'No' },
      { label: 'Keep using the door', value: 'No, stop until fixed' },
    ],
    faq: [
      {
        question: 'My cable came off the drum but is not broken. Is that cheaper?',
        answer:
          'Sometimes, and we will tell you on site rather than guessing on the phone. If the cable is sound and simply jumped its drum, rewinding and re-tensioning it is the whole job. But a cable rarely jumps for no reason, so we look for what let it happen: a loose drum, a bent track, a worn bearing or a door that is out of square. Fixing the symptom and leaving the cause means you call us again.',
      },
      {
        question: 'Can I keep using the door until you arrive?',
        answer:
          'Please do not. Every cycle with one cable off drags the door further out of square, and that turns a cable job into a cable, roller, track and possibly panel job. Pull the manual release, leave the door down if you can, and park outside if you need to.',
      },
      {
        question: 'How long should cables last in Florida?',
        answer:
          'Inland, roughly as long as the springs, so around seven to ten years. Within a few miles of salt water, expect less, and expect the failure to be corrosion rather than wear. Cables are worth a look every time anything else on the door is serviced, which is part of what a tune-up covers.',
      },
    ],
    related: ['torsion-spring', 'roller', 'track'],
  },

  {
    slug: 'roller',
    name: 'Garage Door Rollers',
    shortName: 'Rollers',
    metaTitle: 'Garage Door Roller Replacement in Florida | Noisy and Worn Rollers',
    metaDescription:
      'Worn rollers are the most common reason a garage door is loud. What they do, how to tell yours are finished, and what nylon replacements cost installed.',
    service: 'garage-door-tune-up',
    answer:
      'Rollers are the small wheels on stems that let each section of the door ride in the track. A typical door has ten to twelve. When the bearings wear out the door becomes loud, shudders as it moves, and wears the track. Rollers are one of the least expensive parts on the door and one of the biggest differences you will notice, and replacing a full set is usually done as part of a tune-up from $85.',
    intro: [
      'Every panel of the door has a roller at each side, and each roller has a small bearing inside its wheel. When those bearings are good the door glides. When they are dry or broken the wheel skids along the track instead of rolling, and that is the grinding you hear.',
      'There are two kinds worth knowing about. Steel rollers with exposed bearings are what most builders fit because they cost the least, and they are the loud ones. Nylon rollers with sealed bearings cost a little more, run far quieter, and do not rust, which matters a great deal in this state.',
      'This is the cheapest meaningful upgrade available on a garage door. People who have lived with a loud door for years are often surprised that the fix is a set of small wheels rather than a new opener.',
    ],
    symptoms: [
      'The door is loud, grinding or rumbling as it moves',
      'The door shudders or jerks instead of moving smoothly',
      'Visible wobble in a roller, or a wheel that has come apart',
      'Black dust or metal filings along the track',
      'Rust on the roller stems or in the track',
      'The door binds at the same point in the travel every time',
    ],
    whyItFails: [
      'Steel roller bearings are exposed, and exposed bearings in Florida humidity rust. Once a bearing seizes the wheel stops turning and starts skidding, which is when the noise starts.',
      'Salt air near the coast does it faster and does it to the stems as well as the wheels.',
      'Cycles do the rest. Rollers are the part in constant motion, so a busy household wears them out well before anything else on the door needs attention.',
    ],
    diy: 'depends',
    diyNote:
      'The middle rollers can reasonably be changed by a careful homeowner with the door down and the opener disconnected, one at a time. The bottom rollers are different, because the bottom bracket they sit in is under full cable tension, and that bracket is the one that injures people. Our advice is that if you want to do the middle ones yourself, do them, and leave the bottom pair to somebody with the door supported and the tension relieved.',
    quickFacts: [
      { label: 'Rollers per door', value: '10 to 12 typically' },
      { label: 'Installed price', value: 'From $85 with a tune-up' },
      { label: 'Time on site', value: '45 to 60 minutes' },
      { label: 'Nylon vs steel', value: 'Nylon is quieter and does not rust' },
      { label: 'Safe to DIY', value: 'Middle rollers yes, bottom rollers no' },
    ],
    faq: [
      {
        question: 'Are nylon rollers worth the extra?',
        answer:
          'In Florida, yes, and this is one of the few upgrades we push. Sealed nylon bearings do not rust in humid or salt air, they run markedly quieter, and they last considerably longer than the builder-grade steel rollers most doors leave the factory with. The difference in cost is small and the difference in noise is the sort of thing people notice the same evening.',
      },
      {
        question: 'Can worn rollers damage anything else?',
        answer:
          'Yes, which is why they are worth doing before they fail completely. A seized roller skids and scores the inside of the track, and a scored track then chews through the next set of rollers faster. Left long enough it pulls the door out of alignment, and then you are paying for track work and possibly a cable on top.',
      },
      {
        question: 'How often should rollers be replaced?',
        answer:
          'Every five to seven years for steel rollers in this climate, longer for sealed nylon. A simpler rule: if you can hear the door from inside the house with the door to the garage closed, the rollers are usually the reason.',
      },
    ],
    related: ['hinge', 'track', 'lift-cable'],
  },

  {
    slug: 'hinge',
    name: 'Garage Door Hinges',
    shortName: 'Hinges',
    metaTitle: 'Garage Door Hinge Replacement in Florida | Cracked and Worn Hinges',
    metaDescription:
      'Hinges join the door sections and carry the rollers. How to spot a cracked or elongated hinge, why they fail here, and what replacement costs installed.',
    service: 'garage-door-tune-up',
    answer:
      'Hinges join one section of the door to the next and hold the rollers that ride in the track. They are numbered by position and the numbers matter, because a hinge in the wrong position changes how the door tracks around the curve. A cracked hinge shows up as a snapping noise, a gap between panels, or a door that catches at the same point every cycle. Replacement is usually done as part of a tune-up from $85.',
    intro: [
      'A sectional garage door is four or five separate panels that have to behave like one door going up and like a flexible chain going round the curve into the horizontal track. Hinges are what make both true at once.',
      'They are stamped with a number, and the number is a position rather than a size. A number one hinge sits at the bottom joint, a two above it, and so on. Fitting the wrong number in a position changes the roller offset by a small amount, and a small amount is enough to make the door bind on the curve.',
      'Most hinge failures are visible from the floor with the door closed. Look along each horizontal joint for cracks in the steel, for a hinge that has pulled away from the panel, and for the screw holes going oval, which is the usual first sign.',
    ],
    symptoms: [
      'A metallic snap or pop at the same point in every cycle',
      'Visible cracks in a hinge, usually at the bend',
      'A widening gap between two door sections',
      'Screw holes gone oval, or screws working loose',
      'The door catches or hesitates on the curve of the track',
      'Rust bleeding out from behind a hinge onto the panel',
    ],
    whyItFails: [
      'Humidity rusts the steel from the pin outward, and a rusted pin binds instead of pivoting, which puts the load into the hinge plate rather than the pivot.',
      'Salt air near the coast attacks the plating, and once the plating is gone the corrosion moves fast.',
      'Movement does the rest. A hinge flexes on every cycle, so a corroded hinge cracks at the bend, and an oval screw hole lets the panel shift a little more each time until the joint no longer holds square.',
    ],
    diy: 'depends',
    diyNote:
      'Middle hinges are reasonable for a careful homeowner: door closed, opener disconnected, one hinge at a time so the door never loses its shape, and the replacement must carry the same number as the one that came out. The bottom hinge is a different matter, because on most doors it is combined with the bottom bracket that anchors the lift cable under full tension. Leave that one alone.',
    quickFacts: [
      { label: 'Hinges per door', value: '8 to 12 typically' },
      { label: 'Installed price', value: 'From $85 with a tune-up' },
      { label: 'Time on site', value: '30 to 60 minutes' },
      { label: 'Numbering', value: 'Position specific, must match' },
      { label: 'Safe to DIY', value: 'Middle hinges yes, bottom hinge no' },
    ],
    faq: [
      {
        question: 'Why are the hinges numbered?',
        answer:
          'The number is the position, not the size. Each number sets a slightly different roller offset so that the panels stay square going up and still articulate correctly around the curve into the horizontal track. Put a number three where a number two belongs and the door will bind on the curve, usually with a bang, and it will wear that roller out early.',
      },
      {
        question: 'Can one cracked hinge really matter?',
        answer:
          'Yes, because the load it was carrying goes somewhere. The neighbouring hinges and the panel take it instead, and panels are far more expensive than hinges. A cracked hinge caught early is a small job; the same hinge left for a year is often a hinge plus a panel.',
      },
      {
        question: 'The hinge is fine but the screw holes are oval. Is that a problem?',
        answer:
          'It is, and it is the most common version of this fault. Oval holes let the panel move slightly on every cycle, which loosens the screws further and eventually splits the steel around them. The fix depends on how far it has gone: sometimes a repair plate, sometimes moving to a solid backing, and occasionally the panel itself.',
      },
    ],
    related: ['roller', 'panel', 'track'],
  },

  {
    slug: 'bottom-seal',
    name: 'Garage Door Bottom Seal',
    shortName: 'Bottom seal',
    metaTitle: 'Garage Door Bottom Seal Replacement in Florida | Water, Pests and Heat',
    metaDescription:
      'The rubber strip along the bottom of the door keeps out driving rain, insects and heat. How to tell yours has gone, and the one part on this site we tell you to try yourself.',
    service: 'garage-door-tune-up',
    answer:
      'The bottom seal is the flexible rubber or vinyl strip along the bottom edge of the door that closes the gap against the floor. In Florida it is doing more work than anywhere else: keeping out wind-driven rain, palmetto bugs and lizards, and a good part of the heat. It hardens, cracks and tears, and it is genuinely the one part on this site we suggest you try replacing yourself.',
    intro: [
      'Most Florida doors use a T-end or bulb seal that slides into a retainer track fixed along the bottom of the bottom panel. The seal is flexible so it can squash into the unevenness of a concrete slab that is never perfectly flat.',
      'What it is holding back here is worth being specific about. Driving rain in an afternoon storm arrives horizontally, and a failed seal is how water gets across the garage floor. It is also the front door for palmetto bugs, ants and small lizards, and it is a real part of how much the garage heats up.',
      'It is also the cheapest thing on the door and the easiest to check. Close the door, go inside, turn the lights off in the daytime and look along the bottom. Daylight along the edge is a failed seal.',
    ],
    symptoms: [
      'Daylight visible along the bottom of a closed door',
      'Water crossing the garage floor after a storm',
      'Insects, lizards or leaves getting in with the door shut',
      'The rubber is hard, cracked, split or torn',
      'The seal has pulled out of its retainer at one end',
      'The garage runs noticeably hotter than it used to',
    ],
    whyItFails: [
      'Ultraviolet light is the main cause here. A south or west facing door in Florida sun bakes the rubber until it loses its flexibility, and a seal that cannot squash cannot seal.',
      'Heat cycling compounds it. The rubber expands and contracts every day, and after a few years of that the material cracks along the flex line.',
      'The slab plays a part. Florida slabs settle, and a floor that has developed a dip leaves the seal bridging a gap it was never sized for, so that section wears through first.',
    ],
    diy: 'safe',
    diyNote:
      'This one you can genuinely do. There is no spring tension involved, nothing is under load, and the whole job is sliding the old seal out of its retainer and the new one in with a little soapy water as lubricant. Measure the door width, take the old piece with you so you can match the T-end or bulb profile, and do it on a cool morning when the rubber is not soft. If your retainer track itself is bent or corroded, that part is worth a technician.',
    quickFacts: [
      { label: 'Typical life', value: '3 to 5 years in Florida sun' },
      { label: 'Installed price', value: 'From $85 with a tune-up' },
      { label: 'Time on site', value: '20 to 40 minutes' },
      { label: 'Safe to DIY', value: 'Yes' },
      { label: 'Check it', value: 'Look for daylight along the bottom' },
    ],
    faq: [
      {
        question: 'Will a new bottom seal stop water coming in?',
        answer:
          'It stops most of it, and it will not fix everything. If the water is coming under the seal because the rubber has failed, a new seal solves it. If your slab slopes toward the garage or has settled into a dip, the seal is bridging a gap and you may also need a threshold strip bonded to the floor. We can tell which one you have by looking at where the water actually enters.',
      },
      {
        question: 'What is the difference between the bottom seal and weather stripping?',
        answer:
          'The bottom seal runs along the bottom edge of the door against the floor. Weather stripping is the flexible strip on the door jambs and the header, sealing the sides and the top against the frame. They fail for the same reasons in this climate and they are usually worth doing at the same visit.',
      },
      {
        question: 'How do I know which profile to buy?',
        answer:
          'Take the old one with you. Slide a few inches out of the retainer and match it in the shop, because the T-end, bead and bulb profiles look similar and do not interchange. Also measure the full door width rather than assuming a standard, since a seal cut short leaves exactly the gap you were trying to close.',
      },
    ],
    related: ['weather-seal', 'track', 'panel'],
  },

  {
    slug: 'weather-seal',
    name: 'Garage Door Weather Stripping',
    shortName: 'Weather stripping',
    metaTitle: 'Garage Door Weather Stripping in Florida | Jamb and Header Seals',
    metaDescription:
      'The seals on the sides and top of the opening keep out rain, heat and insects. How to tell yours has failed and what replacement costs.',
    service: 'garage-door-tune-up',
    answer:
      'Weather stripping is the flexible strip fixed to the door jambs and the header, sealing the sides and top of the opening where the bottom seal handles the floor. In Florida it is fighting driving rain, insects and heat, and it fails from ultraviolet exposure rather than from use. Replacement is usually done alongside the bottom seal as part of a tune-up from $85.',
    intro: [
      'The stripping is normally a vinyl or rubber flap on a wooden or PVC stop moulding, positioned so the closed door presses lightly against it the whole way round. That light contact is the seal.',
      'Because it fails from sunlight rather than movement, it goes at different rates on different sides of the same door. The side that takes the afternoon sun hardens and cracks years before the shaded side, which is why you often see one good edge and one bad one on the same opening.',
      'The check is the same as the bottom seal. Close the door, stand inside in daylight, and look along both sides and the top. Light means a gap, and a gap means water and insects.',
    ],
    symptoms: [
      'Daylight along the sides or the top of a closed door',
      'Rain driving in at the edges during an afternoon storm',
      'The vinyl is hard, chalky, cracked or split',
      'The strip has pulled away from the moulding or is hanging loose',
      'Insects and leaves getting in around the frame',
      'Wind noise around the door in a storm',
    ],
    whyItFails: [
      'Ultraviolet exposure is the whole story here. Florida sun degrades vinyl and rubber steadily, and the material goes chalky, then stiff, then cracked.',
      'Heat expansion loosens the fixings. The moulding and the strip expand and contract daily, which works nails and staples out of the wood over a few seasons.',
      'Moisture in the wooden stop moulding behind it. If the timber is soft or rotting, new stripping fixed to it will not hold, and the moulding needs doing first.',
    ],
    diy: 'depends',
    diyNote:
      'Replacing just the flexible strip on sound moulding is a reasonable homeowner job with a pry bar, a hammer and a tape measure. It stops being one if the wooden stop moulding behind it is soft, rotten or has been nailed through repeatedly, because then the job is carpentry and the new seal will only hold as well as what it is fixed to. Check the wood with a screwdriver before you buy anything.',
    quickFacts: [
      { label: 'Typical life', value: '3 to 6 years in Florida sun' },
      { label: 'Installed price', value: 'From $85 with a tune-up' },
      { label: 'Time on site', value: '30 to 60 minutes' },
      { label: 'Safe to DIY', value: 'Yes if the moulding is sound' },
      { label: 'Do it with', value: 'The bottom seal, same visit' },
    ],
    faq: [
      {
        question: 'Does weather stripping help with the heat?',
        answer:
          'It helps, and it is not the main lever. Sealing the gaps stops the hot air exchange around the edges, which is worth having, especially if the garage is attached and shares a wall with a room you cool. The far bigger factor is whether the door itself is insulated, and no amount of edge sealing turns an uninsulated door into an insulated one.',
      },
      {
        question: 'The seal looks fine but rain still gets in. What else could it be?',
        answer:
          'Usually the door is not sitting square against the stop, so the seal is touching on one side and standing off on the other. That is an alignment issue rather than a seal issue, and replacing the rubber will not fix it. It can also be the stop moulding itself having moved, or water tracking down the wall above the header and coming in behind the frame.',
      },
      {
        question: 'Should the stripping touch the door hard?',
        answer:
          'Light contact all the way round is correct. Set too tight it drags on every cycle, wears through early and makes the opener work harder, and on a windy day it can be enough to make the safety reverse trip. Set too loose it seals nothing. That balance is most of the skill in fitting it.',
      },
    ],
    related: ['bottom-seal', 'panel', 'track'],
  },

  {
    slug: 'track',
    name: 'Garage Door Track',
    shortName: 'Track',
    metaTitle: 'Garage Door Track Repair in Florida | Bent, Misaligned and Off Track',
    metaDescription:
      'The vertical and horizontal tracks guide the rollers. How to tell a track is bent or out of alignment, and why a door off its track should not be operated.',
    service: 'garage-door-off-track-repair',
    answer:
      'The track is the steel channel the rollers run in: vertical on each side of the opening, curving into horizontal along the ceiling. When it bends, loosens or falls out of alignment the door binds, grinds, or comes off the track entirely. Repair runs $140 to $600 installed depending on whether the track can be straightened or has to be replaced, and a door that has jumped its track should not be operated at all.',
    intro: [
      'Track work is precision work, which surprises people because the part looks crude. The two vertical tracks have to be plumb, parallel, and the same distance apart top and bottom, and the horizontal sections have to be level and correctly spaced. A quarter inch out at the top is enough to make a door bind.',
      'That is also why a door coming off its track is rarely the track failing on its own. Something usually caused it: a cable that let go, a car that clipped the track, a roller that seized, or fixings that worked loose over years of vibration.',
      'The urgent part is what to do next. A door off its track has lost the thing keeping it in the opening. Do not run the opener, pull the manual release, and if the door is partly up, do not stand or park under it.',
    ],
    symptoms: [
      'The door grinds, binds or hesitates at the same point every time',
      'A visible bend, kink or flat spot in the track',
      'A gap between the rollers and the track wall',
      'The door has come out of the track on one or both sides',
      'The door sits crooked in the opening',
      'Track brackets are loose, or fixings have pulled out of the wall',
    ],
    whyItFails: [
      'Impact is the most common cause and usually a vehicle: a bumper, a mirror, a bike handlebar catching the vertical track on the way past.',
      'A cable or spring failure racks the door and bends the track as it goes, which is why track damage and cable damage so often arrive together.',
      'Corrosion and vibration. Florida humidity rusts the track from the inside where dirt collects, and years of cycling works the lag bolts loose in the framing until the track can shift under load.',
    ],
    diy: 'no',
    diyNote:
      'Getting a door back into its track means taking the weight off it, and taking the weight off it means dealing with spring tension. Beyond the safety issue, this is measuring work: plumb, parallel, correctly spaced, and if the alignment is not right the door will bind and wear out rollers and cables for as long as you keep it. Straightening a bent track by hand almost never restores the profile the roller needs.',
    quickFacts: [
      { label: 'Installed price', value: '$140 to $600' },
      { label: 'Time on site', value: '1 to 3 hours' },
      { label: 'Straighten or replace', value: 'Depends on the bend' },
      { label: 'Safe to DIY', value: 'No' },
      { label: 'Keep using the door', value: 'No, stop immediately' },
    ],
    faq: [
      {
        question: 'Can a bent track be straightened or does it need replacing?',
        answer:
          'It depends on where the bend is and how sharp. A gentle bow in a straight run can often be corrected properly. A kink, a crushed section, or damage on the curved part where the vertical meets the horizontal usually needs a new section, because that curve is a manufactured profile and bending it back by hand leaves a shape the roller fights every cycle. We tell you which one you have before starting.',
      },
      {
        question: 'What do I do right now if the door is off its track?',
        answer:
          'Stop using the opener, and do not try to force the door back. Pull the manual release so the opener is disconnected, and if the door is partway up, leave it and keep people and cars from under it. A door off its track has lost part of what holds it in the opening, and running the motor drags it further out and turns a track job into a panel job.',
      },
      {
        question: 'Why does my door keep coming off the same side?',
        answer:
          'Because something on that side has not been fixed. The usual suspects are a loose track bracket, a seized roller on that corner, a cable with slightly less tension than its pair, or a door that is out of square so it loads one side harder. Putting it back without finding that cause guarantees it happens again.',
      },
    ],
    related: ['roller', 'lift-cable', 'hinge'],
  },

  {
    slug: 'opener-drive-gear',
    name: 'Garage Door Opener Drive Gear',
    shortName: 'Drive gear',
    metaTitle: 'Garage Door Opener Gear Replacement in Florida | Motor Runs, Door Stays Put',
    metaDescription:
      'When the opener hums but the door does not move, the plastic drive gear has usually stripped. What it costs to repair and when a new opener is the better buy.',
    service: 'garage-door-opener-repair',
    answer:
      'The drive gear is the plastic gear inside a chain or belt opener that transfers the motor to the drive shaft. It is deliberately the weakest part, so it strips before the motor burns out. The signature is unmistakable: the motor runs normally, sounds healthy, and the door does not move at all. Repair runs $95 to $300 installed, and on an opener over fifteen years old a replacement unit is often the better spend.',
    intro: [
      'Manufacturers make this gear from nylon on purpose. It is the sacrificial part: when something jams or the door gets heavy, the gear gives way and the expensive motor survives. Finding stripped gear teeth is therefore not a sign of a badly made opener.',
      'The tell is very specific and worth knowing before you call anyone. If the motor runs for its normal few seconds, sounds exactly as it always has, and the door does not move even slightly, that is a stripped gear. If the motor hums and struggles or trips a breaker, that is a different fault and usually means the door itself has gone heavy.',
      'The other clue is white or grey plastic shavings on the garage floor underneath the opener head, which is the gear teeth that are no longer where they should be.',
    ],
    symptoms: [
      'The motor runs normally but the door does not move at all',
      'A grinding or whirring sound from the opener head',
      'White or grey plastic shavings on the floor under the opener',
      'The chain or belt does not move while the motor runs',
      'The door works on the manual release but not on the opener',
      'The opener runs on for its full cycle with nothing happening',
    ],
    whyItFails: [
      'Age and cycles. Nylon wears and the teeth round off, and a fifteen year old opener has usually earned it.',
      'A heavy or badly balanced door is the underlying cause more often than people expect. If the springs are tired the opener is lifting weight it was never meant to carry, and the gear pays for that. Replacing the gear without fixing the balance means doing it again.',
      'Garage heat. A Florida garage ceiling in August is the hottest place in the house, and heat softens nylon, which accelerates the wear.',
    ],
    diy: 'depends',
    diyNote:
      'Gear kits are sold and a mechanically confident person can fit one: unplug the unit, open the head, and be methodical about the order the parts come out. The reasons to think twice are that it is fiddly overhead work, and that a stripped gear is often a symptom of a door that has gone heavy rather than the disease. If the balance is not corrected the new gear goes the same way. We check the balance as part of the job.',
    quickFacts: [
      { label: 'Installed price', value: '$95 to $300' },
      { label: 'Time on site', value: '60 to 90 minutes' },
      { label: 'Repair or replace', value: 'Replace the unit if over 15 years' },
      { label: 'Safe to DIY', value: 'Possible, and check the balance' },
      { label: 'Root cause', value: 'Often a heavy or unbalanced door' },
    ],
    faq: [
      {
        question: 'Should I repair the gear or buy a new opener?',
        answer:
          'The rough rule is the age of the unit. Under about ten years, repair it. Over fifteen, a new opener is usually the better spend, because you also get a rolling code remote, a modern safety reverse, battery backup for outages, and often quiet belt drive, and installation runs $275 to $600. Between ten and fifteen it depends on the condition of the rest of the unit, and we will give you a straight answer rather than defaulting to the bigger sale.',
      },
      {
        question: 'The motor hums but nothing happens. Is that the gear?',
        answer:
          'Probably not, and the difference matters. A stripped gear lets the motor run freely at its normal speed and sound. A motor that hums, struggles, or trips the breaker is being asked to lift more than it can, and that usually means a broken spring or a door that has gone out of balance. Same symptom to a homeowner, different repair and a different price.',
      },
      {
        question: 'Will a new gear fix a noisy opener?',
        answer:
          'Only if the noise is coming from the gear. Most opener noise in a Florida garage is actually the door: worn steel rollers, dry hinges, a loose chain. Those are cheaper to sort than anything inside the opener head, which is why we look at the door first before selling you opener parts.',
      },
    ],
    related: ['safety-sensor', 'remote', 'roller'],
  },

  {
    slug: 'safety-sensor',
    name: 'Garage Door Safety Sensors',
    shortName: 'Safety sensors',
    metaTitle: 'Garage Door Safety Sensor Repair in Florida | Door Will Not Close',
    metaDescription:
      'The photo eyes near the floor stop the door closing on anything in the way. Why a door that reverses is almost always the sensors, and how to check yours.',
    service: 'garage-door-opener-repair',
    answer:
      'Safety sensors are the two small photo eyes mounted a few inches above the floor on each side of the opening, sending an invisible beam between them. Federal law has required them on every opener sold since 1993. If the beam is broken, misaligned or dirty the door will not close, and it is by a wide margin the most common reason a garage door refuses to shut. Repair runs $95 to $300, and several of the causes cost nothing to fix yourself.',
    intro: [
      'One sensor sends, the other receives. If the receiver does not see the beam, the opener refuses to close the door, and if the beam breaks while the door is coming down it reverses immediately. That is the behaviour keeping a child or a pet from being caught underneath.',
      'Because the requirement is federal and dates from 1993, every opener you are likely to have has them. It is also why bypassing them is a genuinely bad idea rather than a technicality: the reverse is the last line of protection on a door that weighs more than the person standing under it.',
      'The good news is how often this is free to fix. Most sensor faults are a lens with a cobweb across it, a bracket knocked by a bike, or sunlight hitting the receiver at a low angle, and all three are five minute problems.',
    ],
    symptoms: [
      'The door starts down then immediately goes back up',
      'The door will not close from the remote but will from the wall button held down',
      'One sensor light is off, or flickering, when the other is steady',
      'The opener light flashes a set number of times when you try to close',
      'The door closes fine in the morning and refuses in the late afternoon',
      'The door only closes if you hold the wall button the whole way',
    ],
    whyItFails: [
      'Misalignment is the biggest cause and it takes very little. A bike, a bin, a vacuum hose or a foot catching a bracket moves it a few degrees and the beam misses.',
      'Florida grime on the lens. Dust, cobwebs, lawn clippings and salt film build up on the plastic, and a spider web across the lens is enough to break the beam.',
      'Low sun. A sensor facing west can be blinded by direct afternoon sunlight, which is exactly why a door that behaves all morning refuses at five o clock.',
      'Wiring. Staples through the cable, rodent damage, and corroded terminals in a humid garage all produce an intermittent fault that comes and goes.',
    ],
    diy: 'safe',
    diyNote:
      'Try this before you call anybody. Wipe both lenses with a soft dry cloth. Look at the indicator light on each: they should both be on and steady, and one blinking usually means alignment. Loosen the wing nut, move the bracket slightly until both are steady, and tighten. Check nothing is parked in the beam. If the fault only appears at a particular time of day, a small sun shield on the receiver often ends it. If both lights are dead, that is wiring and worth a technician.',
    quickFacts: [
      { label: 'Required since', value: '1993, federal law' },
      { label: 'Installed price', value: '$95 to $300' },
      { label: 'Time on site', value: '30 to 60 minutes' },
      { label: 'Safe to DIY', value: 'Yes, cleaning and alignment' },
      { label: 'Never', value: 'Bypass or disable them' },
    ],
    faq: [
      {
        question: 'Can I just disable the sensors?',
        answer:
          'No, and we will not do it either. They are federally required on every opener sold since 1993, and they are the reason a door reverses instead of closing on a child, a pet or a foot. A door that will not close is an inconvenience for a day. The thing the sensors prevent is not recoverable. If yours are faulty we fix or replace them.',
      },
      {
        question: 'Why does the door close in the morning but not the afternoon?',
        answer:
          'Almost always low sunlight hitting the receiving sensor. Late afternoon sun coming straight into the lens overwhelms it and it stops seeing the beam from its partner. A small shield or hood over the receiver, or repositioning it slightly, usually solves it permanently. It is a genuinely common Florida fault on west facing garages.',
      },
      {
        question: 'Both sensor lights are off completely. What does that mean?',
        answer:
          'No power reaching them, which is wiring rather than alignment. Common causes are a staple driven through the cable during some other work, rodent damage, a corroded terminal at the opener head in a humid garage, or a wire pulled loose. That is worth a technician, because it means working at the opener terminals.',
      },
    ],
    related: ['opener-drive-gear', 'remote', 'keypad'],
  },

  {
    slug: 'remote',
    name: 'Garage Door Remote Control',
    shortName: 'Remote',
    metaTitle: 'Garage Door Remote Not Working in Florida | Replace and Reprogram',
    metaDescription:
      'When a remote stops working it is usually the battery, the programming or the range. How to tell which, and when the receiver rather than the remote is at fault.',
    service: 'garage-door-opener-repair',
    answer:
      'The remote is a transmitter paired to a receiver in the opener head. When it stops working the cause is almost always one of four things: a flat battery, lost programming, something interfering with the signal, or a failed receiver. The first two you can usually sort yourself in a few minutes. Repair, where it is needed, runs $95 to $300.',
    intro: [
      'Anything made since the mid nineties uses a rolling code, meaning the remote and the opener agree a new code on every press. That is what stops somebody recording your signal and replaying it, and it is also why a remote sometimes needs re-pairing after a battery change or a power cut.',
      'Diagnosing this is mostly a process of elimination and you can do most of it. If the wall button works and the remote does not, the opener and the door are fine and the problem is in the remote, its battery, or the pairing. If neither works, look at the opener.',
      'Range tells you something too. A remote that works at three feet but not from the driveway is usually a weak battery or an antenna problem rather than a pairing fault.',
    ],
    symptoms: [
      'The remote does nothing while the wall button works normally',
      'You have to be very close to the door for it to work',
      'It works sometimes and not others, with no pattern',
      'One remote works and a second one does not',
      'It stopped after a power cut or a battery change',
      'The opener light flashes when you press but the door does not move',
    ],
    whyItFails: [
      'Batteries, most of the time. Heat shortens battery life and a Florida car glovebox is a hot place to keep a remote.',
      'Lost programming after a power interruption, a lightning surge nearby, or a battery left out too long.',
      'Interference. LED bulbs in or near the opener are a well known culprit and can cut the usable range to a few feet. So can a nearby transmitter on a similar frequency.',
      'The receiver rather than the remote. A logic board in a humid, hot garage does not last forever, and when the receiver goes, no remote will work while the wall button still does.',
    ],
    diy: 'safe',
    diyNote:
      'Work through it in this order. Change the battery, making sure it is the right way round and properly seated. Try re-pairing: press and release the Learn button on the opener head, then press the remote button within thirty seconds. If you have LED bulbs in the opener, take one out and test, because they interfere more often than people believe. If a fresh battery and re-pairing do not work on any remote, the receiver is the likely fault and that is ours.',
    quickFacts: [
      { label: 'Installed price', value: '$95 to $300' },
      { label: 'Time on site', value: '30 to 60 minutes' },
      { label: 'Try first', value: 'Battery, then re-pair' },
      { label: 'Safe to DIY', value: 'Yes' },
      { label: 'Common culprit', value: 'LED bulbs in the opener' },
    ],
    faq: [
      {
        question: 'How do I reprogram a remote?',
        answer:
          'On nearly every modern opener the method is the same. Find the Learn or Smart button on the opener head, usually near where the antenna wire comes out and often under a light cover. Press and release it, and you have about thirty seconds to press and hold the button on the remote until the opener lights flash or you hear a click. If you are pairing a replacement remote it has to be compatible with your opener brand and the era of its rolling code.',
      },
      {
        question: 'Can LED bulbs really stop my remote working?',
        answer:
          'Yes, and it is one of the most common calls we get after somebody changes a bulb. Cheap LED bulbs emit radio frequency noise across the band the remote uses, and with one in the opener head the range can drop to almost nothing. Take the bulb out and test. If that fixes it, buy a bulb specifically rated as garage door opener compatible.',
      },
      {
        question: 'My remote works but only right next to the door.',
        answer:
          'Start with the battery, because a weak one loses range before it stops working entirely. If a fresh battery does not fix it, look at the antenna wire hanging down from the opener head: it should hang free and straight down, not be coiled, taped up, or tucked into the housing. And check for LED bulbs, which is the other usual answer.',
      },
    ],
    related: ['keypad', 'safety-sensor', 'opener-drive-gear'],
  },

  {
    slug: 'keypad',
    name: 'Garage Door Keypad',
    shortName: 'Keypad',
    metaTitle: 'Garage Door Keypad Repair in Florida | Not Working or Faded',
    metaDescription:
      'The outdoor keypad takes the worst of the Florida weather. Why buttons fail, when it is the battery, and what replacement costs installed.',
    service: 'garage-door-opener-repair',
    answer:
      'The keypad is the outdoor number pad mounted by the door frame that opens the door with a code. It is the one opener component permanently exposed to Florida sun, rain and salt air, and it is the one that ages fastest. Most failures are the battery, worn buttons, or lost programming. Repair or replacement runs $95 to $300 installed.',
    intro: [
      'A keypad is a battery powered transmitter, exactly like a remote but bolted to the outside of your house. It pairs to the same receiver in the opener head and sends the same kind of rolling code.',
      'Which means it inherits every weakness of the remote and adds weather. Direct sun destroys the plastic and the printing on the buttons, rain finds its way past the seal, and salt air corrodes the contacts underneath. A keypad in a west facing wall in Florida has a hard life.',
      'The pattern most people notice first is that certain digits stop responding while others still work. That is the contact under that button, not the whole unit failing, though on a weathered keypad it is usually the beginning of the end.',
    ],
    symptoms: [
      'Some buttons work and others do not respond',
      'The numbers have faded off the buttons entirely',
      'No light or beep when you press a key',
      'The code is accepted but the door does not move',
      'It works intermittently, often worse after rain',
      'It stopped after a power cut or an opener reset',
    ],
    whyItFails: [
      'Battery first, always. Heat shortens battery life and a keypad in Florida sun runs hot every afternoon.',
      'Ultraviolet damage to the keypad face. The printing goes first, then the plastic goes brittle and cracks, and once it cracks water gets in.',
      'Moisture and salt on the contacts under the buttons, which is why individual digits go before the unit does, and why the fault is often worse right after rain.',
      'Lost pairing after a power interruption or after the opener was reset for some other reason.',
    ],
    diy: 'safe',
    diyNote:
      'Change the battery first, and check the seal and gasket while it is open, because a keypad that has been letting water in will keep eating batteries. If it still does not respond, try re-pairing it to the opener the same way you would a remote. If individual buttons are dead or the face is cracked, the unit has reached the end and replacing it is straightforward, though a new one has to be compatible with your opener brand and its code era.',
    quickFacts: [
      { label: 'Typical life', value: '5 to 8 years outdoors in Florida' },
      { label: 'Installed price', value: '$95 to $300' },
      { label: 'Time on site', value: '30 to 45 minutes' },
      { label: 'Try first', value: 'Battery, then re-pair' },
      { label: 'Safe to DIY', value: 'Yes' },
    ],
    faq: [
      {
        question: 'How do I change the keypad code?',
        answer:
          'The method varies by brand, and on most units it means entering the existing code, pressing a program or enter key, then entering the new one. Worth doing if you have given the code to a contractor, a cleaner or a former tenant. If you have lost the existing code, most keypads can be reset back to the opener from scratch by re-pairing at the Learn button.',
      },
      {
        question: 'Only some of the buttons work. Is that fixable?',
        answer:
          'Usually it is time for a new unit. Dead individual buttons mean corroded contacts under the membrane, and on a keypad that has spent years in Florida weather the ones still working are on the same path. Replacing the keypad costs less than a second visit for the next button.',
      },
      {
        question: 'Can I fit any keypad?',
        answer:
          'No, it has to match your opener. Compatibility depends on the brand and on the rolling code generation, so a keypad meant for a recent unit will not pair with a nineties opener and the reverse is also true. Tell us the brand and roughly the age of the opener and we will bring one that pairs.',
      },
    ],
    related: ['remote', 'safety-sensor', 'opener-drive-gear'],
  },

  {
    slug: 'panel',
    name: 'Garage Door Panel',
    shortName: 'Panel',
    metaTitle: 'Garage Door Panel Replacement in Florida | Dents, Rust and Storm Damage',
    metaDescription:
      'One damaged section can often be replaced without a whole new door. When that works, when it does not, and what it costs in Florida.',
    service: 'garage-door-panel-replacement',
    answer:
      'A sectional garage door is made of four or five separate panels, and a single damaged one can often be replaced on its own rather than buying a whole new door. It works when the door is recent enough that the panel can still be matched, and it stops working when the model is discontinued or when more than one or two sections are damaged. Replacement runs $250 to $800 installed.',
    intro: [
      'The two questions that decide this are availability and count. If the manufacturer still makes your door in your colour and profile, a single panel swap is straightforward. If the model is discontinued, a close-but-not-exact panel will be visible from the street for as long as you own the house.',
      'The count matters because of economics rather than possibility. One panel is nearly always worth replacing. Two is a judgement call. Three on a four panel door and you are close to the price of a new door that is under warranty, matches itself, and can be specified to a current wind rating.',
      'That last point is worth weighing in Florida specifically. If your door predates the current code and you are already spending on it, replacing the whole door lets you get a rated one, which is a different conversation from a repair.',
    ],
    symptoms: [
      'A dent, crease or buckle in one section, usually from a vehicle',
      'Rust perforating a panel, most often along the bottom edge',
      'A section cracked or split around the hinge fixings',
      'Storm damage: a bowed or torn panel after high wind',
      'The door no longer closes flush because one section is out of shape',
      'Water or light coming through a hole in the steel',
    ],
    whyItFails: [
      'Vehicle impact is the commonest cause by a wide margin, and it is nearly always the bottom panel.',
      'Rust from the bottom up. Water standing against the bottom edge, especially where a bottom seal has failed, works through the coating and then through the steel. Salt air makes it much faster.',
      'Wind. A door not rated for the pressure at your address bows inward in a strong storm, and once a panel has bowed it does not go back.',
      'Hinge fixings tearing out over time and splitting the steel around them, which starts as an oval screw hole and ends as a cracked panel.',
    ],
    diy: 'no',
    diyNote:
      'Taking a section out means dismantling a door that is held in balance by springs under tension, and putting the new one in means getting it square with the sections above and below it. It also means matching the panel correctly in the first place, which needs the manufacturer, the model, the profile and the exact colour. This is a technician job from the measuring stage onward.',
    quickFacts: [
      { label: 'Installed price', value: '$250 to $800' },
      { label: 'Time on site', value: '2 to 4 hours' },
      { label: 'Lead time', value: 'Panel usually ordered in' },
      { label: 'Worth it up to', value: 'One or two sections' },
      { label: 'Safe to DIY', value: 'No' },
    ],
    faq: [
      {
        question: 'Will a replacement panel match the rest of my door?',
        answer:
          'If the model is current, yes. If it is discontinued, an exact match may not exist and a near match will be visible, especially on a door that has faded in Florida sun for a decade while the new panel has not. We check availability before quoting and we tell you honestly what the finished door will look like, because finding out afterwards is the worst version of this job.',
      },
      {
        question: 'When is a whole new door the better buy?',
        answer:
          'Three tests. More than two damaged sections, and you are approaching the cost of a new door anyway. A discontinued model where the match will be obvious. Or a door that predates the current wind code, where replacing the lot gets you a rated door and the insurance conversation that comes with it. We will run those three with you rather than defaulting to the bigger job.',
      },
      {
        question: 'Insurance is covering storm damage. Does that change anything?',
        answer:
          'It changes what is worth documenting. Photograph the damage before anything is touched, keep the claim number, and get the quote itemised by section so the adjuster can see what is being replaced and why. We are happy to itemise that way. What we will not do is inflate a storm repair, which is a thing that happens after every Florida storm and is the reason adjusters scrutinise these claims.',
      },
    ],
    related: ['hinge', 'bottom-seal', 'track'],
  },
];

/** Slug lookup for the page templates and internal links. */
export const partBySlug = Object.fromEntries(parts.map((p) => [p.slug, p]));
