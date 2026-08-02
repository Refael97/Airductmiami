/**
 * The 40 service-area pages, per research/ny-garage/BRIEF.md section 8.
 *
 * Ordering and selection are weighted by GARAGE DENSITY and job value, not
 * by population. That is why Manhattan does not appear at all, why five
 * Brooklyn neighborhoods appear instead of the borough, and why Scarsdale
 * outranks far larger places.
 *
 * Every city carries genuinely local copy. A templated city page with the
 * name swapped in is thin content and Google treats it that way, so each
 * entry states something true about the housing stock, the garages, or the
 * failures we actually see there.
 */

import type { FAQ } from './services';

export interface City {
  slug: string;
  name: string;
  /** Region slug from data/regions.ts */
  region: string;
  county: string;
  /** 1 is highest lead potential. Drives ordering on the hub page. */
  tier: number;
  metaTitle: string;
  metaDescription: string;
  /** Answer-first, quotable, and specific to this place. */
  answer: string;
  /** Two paragraphs of genuinely local context. */
  intro: string[];
  /** What is distinctive about the doors here. */
  localNotes: string[];
  /** Slugs of nearby cities, for internal linking. */
  nearby: string[];
  faq: FAQ[];
}

export const cities: City[] = [
  /* ---------------- Nassau County ---------------- */
  {
    slug: 'hempstead',
    name: 'Hempstead',
    region: 'nassau-county',
    county: 'Nassau County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Hempstead, NY | From $170 | Same Day',
    metaDescription:
      'Garage door repair in Hempstead, NY. Spring replacement from $170, cable repair from $100, opener installation from $281. Same-day service and a written estimate before any work.',
    answer:
      'Garage door repair in Hempstead starts at $170 per spring, $100 for cable repair and $281 for a new opener installed. Same-day service is available across the town, and you get a written estimate before anything is touched.',
    intro: [
      'The Town of Hempstead covers more households than most American cities, and the garage stock runs the full range: prewar detached garages in the village, block after block of postwar attached singles, and newer double-door builds toward the south shore. We work all of it.',
      'The most common call we get here is the same one we get everywhere in Nassau, a torsion spring that snapped on a door installed twenty or more years ago. The difference in Hempstead is volume. On a cold week in January this is the busiest part of our map.',
    ],
    localNotes: [
      'Heavy mix of prewar detached garages and postwar attached singles',
      'A large share of doors are on their original 10,000 cycle springs',
      'South shore addresses see faster hardware corrosion from salt air',
    ],
    nearby: ['freeport', 'valley-stream', 'garden-city', 'mineola'],
    faq: [
      {
        question: 'Do you cover the villages inside the Town of Hempstead?',
        answer:
          'Yes. The town contains dozens of incorporated villages and unincorporated hamlets, and we service all of them. Give us the street address when you request a quote and we will confirm the arrival window for that specific area.',
      },
      {
        question: 'How fast can you get to Hempstead?',
        answer:
          'Same day in most cases, seven days a week. Hempstead sits in the densest part of our service area, so it is usually one of the shortest response times on our map.',
      },
    ],
  },
  {
    slug: 'levittown',
    name: 'Levittown',
    region: 'nassau-county',
    county: 'Nassau County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Levittown, NY | From $170 | Same Day',
    metaDescription:
      'Garage door repair in Levittown, NY. Spring replacement from $170 and opener installation from $281, with a written estimate first. Same-day service across Nassau County.',
    answer:
      'Garage door repair in Levittown starts at $170 per spring and $281 for opener installation. Most Levittown garages are converted or added on rather than original, which affects headroom and which opener will fit, so we confirm the model before quoting a replacement.',
    intro: [
      'Levittown is the most distinctive garage market in Nassau County, because the original houses did not have garages at all. Almost every garage here was added later, converted from a carport, or built into an expansion, and that history shows up in the work.',
      'What it means in practice is that Levittown doors are rarely standard. Headroom is often tight, the framing is not always square, and the opener that came with the conversion may have been sized for a lighter door than the one hanging there now. We measure before we quote a replacement rather than assuming.',
    ],
    localNotes: [
      'Garages are almost always additions or conversions, not original construction',
      'Non-standard openings are common, so door and track sizing needs measuring',
      'Low headroom favours low-clearance or wall-mounted openers',
    ],
    nearby: ['hicksville', 'massapequa', 'hempstead', 'garden-city'],
    faq: [
      {
        question: 'My Levittown garage was a conversion. Does that change the price?',
        answer:
          'It can. Conversions often have non-standard opening widths and reduced headroom, which affects the track kit, the spring specification and sometimes the opener type. It does not change our starting prices for a straightforward spring or cable job, but it does matter for a full door or a new opener, and we confirm it on site before quoting.',
      },
      {
        question: 'Can you fit an opener in a low-headroom Levittown garage?',
        answer:
          'Yes. A wall-mounted jackshaft opener mounts beside the door instead of on the ceiling and needs almost no headroom. It costs more than a standard chain drive, and we will say so before you commit.',
      },
    ],
  },
  {
    slug: 'hicksville',
    name: 'Hicksville',
    region: 'nassau-county',
    county: 'Nassau County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Hicksville, NY | From $170 | Same Day',
    metaDescription:
      'Garage door repair in Hicksville, NY. Published prices: springs from $170, cables from $100, openers from $281. Same-day service with a written estimate before work.',
    answer:
      'Garage door repair in Hicksville starts at $170 per spring, $100 for cable repair and $281 for opener installation. Same-day service is available, and the price is confirmed in writing before any work begins.',
    intro: [
      'Hicksville sits in the middle of the county and in the middle of our service map, which makes it one of the areas we can reach fastest. The housing is mostly postwar ranch and split level with attached single-car garages, plus a later layer of expanded homes with double doors.',
      'The split levels are worth a note. A split level garage often sits half a storey below the living space, which puts the opener rail in an awkward relationship to the ceiling joists. It is a routine job, but it is not a five minute one, and anyone quoting it as such has not looked.',
    ],
    localNotes: [
      'Postwar ranch and split level housing with attached garages',
      'Split level garages often need custom opener mounting',
      'Many original doors have been replaced once already, so hardware ages are mismatched',
    ],
    nearby: ['levittown', 'mineola', 'garden-city', 'massapequa'],
    faq: [
      {
        question: 'Do you service Hicksville on weekends?',
        answer:
          'Yes, seven days a week. Weekend calls are quoted at the same published prices; only genuine after-hours and emergency dispatch carries the call-out premium of $200 to $350, and we tell you before we send anyone.',
      },
      {
        question: 'How long does a spring replacement take in a Hicksville split level?',
        answer:
          'A standard torsion spring replacement runs about an hour once we are on site. A split level with awkward mounting can add half an hour. Neither changes the quoted price.',
      },
    ],
  },
  {
    slug: 'freeport',
    name: 'Freeport',
    region: 'nassau-county',
    county: 'Nassau County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Freeport, NY | From $170 | Same Day',
    metaDescription:
      'Garage door repair in Freeport, NY. Spring replacement from $170, cable repair from $100. Salt-air corrosion is common here, and we quote in writing before any work.',
    answer:
      'Garage door repair in Freeport starts at $170 per spring and $100 for cable repair. Freeport is a waterfront community, so corroded rollers, hinges and bottom brackets are found more often here than inland, and we show you the failed part rather than describing it.',
    intro: [
      'Freeport is on the water, and that shapes the work. Salt air corrodes galvanised hardware faster than anywhere inland, so rollers seize, hinges bind, and bottom brackets rust at the fixing points. A door that binds in Freeport is often a hardware problem rather than a spring problem.',
      'The other Freeport factor is flooding. Homes that took water in past storms often have bottom sections and weather seals that never fully recovered, and a swollen or delaminated bottom panel changes what a repair looks like.',
    ],
    localNotes: [
      'Salt-air corrosion on rollers, hinges and bottom brackets is routine here',
      'Flood-affected bottom sections and weather seals are common on older doors',
      'Canal-front properties often have detached garages with long opener runs',
    ],
    nearby: ['valley-stream', 'long-beach', 'hempstead', 'massapequa'],
    faq: [
      {
        question: 'My rollers are rusted solid. Is that a repair or a replacement?',
        answer:
          'Almost always a repair. Rollers are a wear part and replacing a full set is straightforward. If the track has corroded through at the fixing points, that section of track gets replaced too, and we quote it before touching anything.',
      },
      {
        question: 'Does salt air mean I need to replace hardware more often in Freeport?',
        answer:
          'Yes, and it is worth doing on purpose rather than waiting for a failure. Nylon rollers with sealed bearings and galvanised or stainless fixings last considerably longer near the water than the standard steel parts most doors ship with.',
      },
    ],
  },
  {
    slug: 'valley-stream',
    name: 'Valley Stream',
    region: 'nassau-county',
    county: 'Nassau County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Valley Stream, NY | From $170 | Same Day',
    metaDescription:
      'Garage door repair in Valley Stream, NY. Springs from $170, openers from $281, same-day service and a written estimate before any work starts.',
    answer:
      'Garage door repair in Valley Stream starts at $170 per spring, $100 for cable repair and $281 for opener installation. Same-day service is available and the estimate is written before work starts.',
    intro: [
      'Valley Stream is dense, close to the Queens border, and full of the narrow attached garages that came with 1920s through 1950s development. A lot of them are eight feet wide, which puts them below the standard sixteen foot double most price guides assume.',
      'A narrow door is a lighter door, which means a lighter spring, which means the price guides written for a national average tend to overstate the job here. Our starting price reflects a standard single, and a Valley Stream single is usually exactly that.',
    ],
    localNotes: [
      'Predominantly narrow single doors, often eight or nine feet wide',
      'Dense street parking makes truck access a scheduling factor',
      'Close to the Queens line, so we frequently combine calls with Howard Beach',
    ],
    nearby: ['freeport', 'hempstead', 'howard-beach', 'long-beach'],
    faq: [
      {
        question: 'Is a single door cheaper to repair than a double?',
        answer:
          'Yes, and materially so. A single door carries less weight, usually one spring rather than two, and fewer sections. Our published starting prices assume a standard single door, which is what most Valley Stream homes have.',
      },
      {
        question: 'Can you get a truck down my street?',
        answer:
          'For a repair, yes, we work from a service van. For a full door replacement on a narrow street with heavy parking we schedule the delivery window deliberately, and we will raise it with you rather than discovering it on the day.',
      },
    ],
  },
  {
    slug: 'garden-city',
    name: 'Garden City',
    region: 'nassau-county',
    county: 'Nassau County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Garden City, NY | From $170 | Same Day',
    metaDescription:
      'Garage door repair in Garden City, NY. Spring replacement from $170, new door installation from $1,056. Carriage house and custom doors handled, written estimate first.',
    answer:
      'Garage door repair in Garden City starts at $170 per spring and $281 for opener installation. Garden City has an unusually high share of carriage house and custom doors, where parts are model-specific, so we identify the door before quoting a replacement section.',
    intro: [
      'Garden City has older, larger and better maintained housing than most of Nassau, and the doors reflect that. Carriage house styling, wood and wood-composite construction, and custom widths are all more common here than in the surrounding towns.',
      'That changes one thing in particular: panel replacement. On a standard steel door a damaged section is a stock part. On a fifteen year old custom or discontinued door it may not be available at all, and the honest answer is sometimes that replacing the whole door is the better spend. We say that when it is true, and we say it before you have paid for anything.',
    ],
    localNotes: [
      'High share of carriage house, wood and custom doors',
      'Discontinued models mean panel availability has to be checked before quoting',
      'Detached garages set back from the street, so opener wiring runs long',
    ],
    nearby: ['mineola', 'hempstead', 'hicksville', 'levittown'],
    faq: [
      {
        question: 'Can you match a section on a fifteen year old custom door?',
        answer:
          'Sometimes. Manufacturers discontinue panel profiles and colours, and a near match on a visible front elevation usually looks worse than a full replacement. We check availability first and tell you honestly which way the money is better spent.',
      },
      {
        question: 'Do you work on wood garage doors?',
        answer:
          'Yes. Wood doors are heavier than steel, which means a different spring specification, and they need their finish maintained or the bottom section absorbs water. Both of those affect what a repair costs, and both get explained before we quote.',
      },
    ],
  },
  {
    slug: 'massapequa',
    name: 'Massapequa',
    region: 'nassau-county',
    county: 'Nassau County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Massapequa, NY | From $170 | Same Day',
    metaDescription:
      'Garage door repair in Massapequa, NY. Springs from $170, cables from $100, openers from $281. Same-day service with a written estimate before any work.',
    answer:
      'Garage door repair in Massapequa starts at $170 per spring, $100 for cable repair and $281 for opener installation. Same-day service is available seven days a week across Massapequa, Massapequa Park and North Massapequa.',
    intro: [
      'Massapequa is postwar Long Island at its most typical: split levels and ranches from the 1950s and 1960s, attached garages on nearly every house, and a lot of doors that were replaced once in the 1990s and have not been touched since.',
      'A door replaced thirty years ago is now well past its spring life, and the hardware around it is the original. That is why so many calls here turn out to be a spring plus a set of seized rollers rather than a spring alone. We quote both before we replace either.',
    ],
    localNotes: [
      'Dense 1950s and 1960s split level and ranch housing with attached garages',
      'Large population of 1990s replacement doors now at end of spring life',
      'South shore canal properties see salt-driven hardware corrosion',
    ],
    nearby: ['levittown', 'hicksville', 'freeport', 'babylon'],
    faq: [
      {
        question: 'The spring broke. Why are you also quoting rollers?',
        answer:
          'Because on a thirty year old door they are usually the original ones and they have the same wear as everything else. We quote them separately so you can see the cost and decline it. What we will not do is replace them without asking and put them on the bill.',
      },
      {
        question: 'Do you cover Massapequa Park and North Massapequa?',
        answer:
          'Yes, all three, plus East Massapequa. Response times across them are effectively the same.',
      },
    ],
  },
  {
    slug: 'mineola',
    name: 'Mineola',
    region: 'nassau-county',
    county: 'Nassau County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Mineola, NY | From $170 | Same Day',
    metaDescription:
      'Garage door repair in Mineola, NY. Spring replacement from $170, opener installation from $281, same-day service and a written estimate before work.',
    answer:
      'Garage door repair in Mineola starts at $170 per spring and $281 for opener installation. Mineola has a high share of older detached garages, which affects opener wiring and remote range, and we confirm the setup before quoting.',
    intro: [
      'Mineola is older than most of the county around it, and it shows in the garages. Detached garages at the back of the lot are common here, some of them predating the war, many of them with an opener that was added decades after the building went up.',
      'A detached garage brings its own issues: a long power run, a remote that has to reach further, and framing that was never designed to carry an opener. When we quote an opener replacement on a detached Mineola garage we look at the header and the wiring first, because that is where the surprises live.',
    ],
    localNotes: [
      'Older housing stock with a high share of detached garages',
      'Long power runs and remote range issues on detached buildings',
      'Original framing sometimes needs reinforcement before an opener is mounted',
    ],
    nearby: ['garden-city', 'hicksville', 'hempstead', 'valley-stream'],
    faq: [
      {
        question: 'My detached garage has no power. Can you still fit an opener?',
        answer:
          'The opener itself is straightforward, but it needs a dedicated circuit, and running that is electrical work. We will tell you what is needed and coordinate with a licensed electrician rather than improvising it.',
      },
      {
        question: 'My remote only works from the driveway. Is that fixable?',
        answer:
          'Usually. Range problems on a detached garage are most often a damaged or badly routed antenna wire, or interference from an LED bulb in the opener itself. Both are cheap fixes and we check them before suggesting a new opener.',
      },
    ],
  },
  {
    slug: 'long-beach',
    name: 'Long Beach',
    region: 'nassau-county',
    county: 'Nassau County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Long Beach, NY | From $170 | Same Day',
    metaDescription:
      'Garage door repair in Long Beach, NY. Springs from $170, cables from $100. Salt and flood exposure handled properly, with a written estimate before any work.',
    answer:
      'Garage door repair in Long Beach starts at $170 per spring and $100 for cable repair. Long Beach is a barrier island, so corrosion and past flood damage are the dominant issues here rather than ordinary wear.',
    intro: [
      'Long Beach is a barrier island, and every piece of steel on a garage door here lives in salt air year round. Rollers seize, springs corrode at the coils, and bottom brackets rust at the exact point where the cable puts them under the most load. That last one is a safety issue, not a cosmetic one.',
      'Sandy is still visible in this housing stock. Doors that were submerged were often replaced, but the tracks, brackets and openers around them frequently were not, which leaves a newer door hanging on older compromised hardware.',
    ],
    localNotes: [
      'Constant salt exposure, so corrosion-resistant hardware is worth specifying',
      'Post-flood repairs often left new doors on old tracks and brackets',
      'Elevated and rebuilt homes have non-standard opening heights',
    ],
    nearby: ['freeport', 'valley-stream', 'hempstead', 'massapequa'],
    faq: [
      {
        question: 'Is a corroded bottom bracket dangerous?',
        answer:
          'Yes. The bottom bracket anchors the lift cable and it is under the full tension of the spring system. It is one of the few parts on a garage door that should never be touched by anyone without the right tools, and a corroded one should be replaced rather than watched.',
      },
      {
        question: 'What hardware lasts longest near the ocean?',
        answer:
          'Nylon rollers with sealed bearings, galvanised or stainless fixings, and a door with a factory finish rather than a painted one. It costs more up front and it is the difference between servicing hardware every few years and servicing it every year.',
      },
    ],
  },

  /* ---------------- Suffolk County ---------------- */
  {
    slug: 'huntington',
    name: 'Huntington',
    region: 'suffolk-county',
    county: 'Suffolk County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Huntington, NY | From $170 | Same Day',
    metaDescription:
      'Garage door repair in Huntington, NY. Spring replacement from $170, new door installation from $1,056. Same-day service and a written estimate before any work.',
    answer:
      'Garage door repair in Huntington starts at $170 per spring, $100 for cable repair and $281 for opener installation. Huntington has an unusually high share of wood and custom doors, which carry a different spring specification and a different price.',
    intro: [
      'Huntington has some of the oldest and most varied housing in western Suffolk, and a lot of it sits on wooded lots with detached or side-entry garages. Wood doors are more common here than almost anywhere else we work.',
      'Wood matters mechanically, not just visually. A wood door weighs considerably more than a steel one of the same size, so it needs a heavier spring, and if a previous installer fitted a standard spring to save money the door will have been fighting itself for years. We check the weight before we replace a spring rather than matching whatever was there.',
    ],
    localNotes: [
      'High share of wood and wood-composite doors, needing heavier spring specification',
      'Wooded lots and side-entry garages, with long opener power runs',
      'Older homes where the original opener predates modern safety sensors',
    ],
    nearby: ['smithtown', 'commack', 'babylon', 'islip'],
    faq: [
      {
        question: 'How do I know if my spring is sized for my door?',
        answer:
          'A correctly balanced door will hold its position when you disconnect the opener and lift it halfway by hand. If it drops or flies up, the spring is not matched to the door weight. That is a five second test and we do it on every visit.',
      },
      {
        question: 'My opener has no photo eyes. Should it be replaced?',
        answer:
          'Yes. Photo eye safety sensors became mandatory on new openers in 1993. An opener old enough to lack them is old enough that parts are no longer made for it, and it has no reliable way to stop for a child or a pet.',
      },
    ],
  },
  {
    slug: 'babylon',
    name: 'Babylon',
    region: 'suffolk-county',
    county: 'Suffolk County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Babylon, NY | From $170 | Same Day',
    metaDescription:
      'Garage door repair in Babylon, NY. Springs from $170, cables from $100, openers from $281. Same-day service across the Town of Babylon with a written estimate first.',
    answer:
      'Garage door repair in Babylon starts at $170 per spring, $100 for cable repair and $281 for opener installation. We cover the whole Town of Babylon including Lindenhurst, West Babylon, North Babylon, Deer Park, Wyandanch and Copiague.',
    intro: [
      'The Town of Babylon runs from the Great South Bay up to the Southern State, and the housing changes considerably along the way. The waterfront villages have older homes and salt exposure; the northern half is postwar tract housing with attached single garages on a fairly uniform pattern.',
      'That uniformity is useful. In North Babylon and West Babylon we usually know the door specification before we arrive, which means we carry the right spring on the van and the job is finished in one visit rather than two.',
    ],
    localNotes: [
      'Uniform postwar tract housing in the northern half, so parts are predictable',
      'Waterfront villages carry salt corrosion and past flood damage',
      'Large share of doors installed in the 1990s now at end of spring life',
    ],
    nearby: ['islip', 'massapequa', 'huntington', 'brentwood'],
    faq: [
      {
        question: 'Which hamlets does your Babylon coverage include?',
        answer:
          'Babylon Village, West Babylon, North Babylon, Lindenhurst, Deer Park, Wyandanch, Copiague, Amityville and East Farmingdale. Response times across them are similar.',
      },
      {
        question: 'Can you finish a spring replacement in one visit?',
        answer:
          'In this area, almost always. The housing is uniform enough that we can carry the common spring sizes, so a standard replacement is a single visit. If your door turns out to need a non-stock spring we tell you on the spot and give you the date.',
      },
    ],
  },
  {
    slug: 'islip',
    name: 'Islip',
    region: 'suffolk-county',
    county: 'Suffolk County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Islip, NY | From $170 | Same Day',
    metaDescription:
      'Garage door repair in Islip, NY. Spring replacement from $170, opener installation from $281. Same-day service across the Town of Islip, written estimate before work.',
    answer:
      'Garage door repair in Islip starts at $170 per spring and $281 for opener installation. The Town of Islip is the largest population we serve in Suffolk, covering Bay Shore, Central Islip, Brentwood, Sayville, Bayport and Holbrook among others.',
    intro: [
      'The Town of Islip is the biggest single chunk of Suffolk we cover, and it spans everything from waterfront in Sayville and Bayport to dense postwar housing in Central Islip and Brentwood.',
      'Volume here is dominated by two jobs: spring replacement on doors from the 1970s and 1980s, and opener replacement on units that predate photo eye sensors. The second one is not urgent until it is, and we would rather you replace an unsafe opener on a Tuesday than after something goes wrong.',
    ],
    localNotes: [
      'Very wide housing range, from waterfront to dense postwar tract',
      'Large population of pre-1993 openers without photo eye safety sensors',
      'Detached garages common in the older waterfront hamlets',
    ],
    nearby: ['brentwood', 'babylon', 'patchogue', 'smithtown'],
    faq: [
      {
        question: 'How old is too old for a garage door opener?',
        answer:
          'If it was made before 1993 it has no photo eye sensors and should be replaced on safety grounds alone. If it is over about twenty years old, parts availability becomes the deciding factor: a repair that costs more than half of a new unit is not worth doing.',
      },
      {
        question: 'Do you cover all of the Town of Islip?',
        answer:
          'Yes, including Bay Shore, Brentwood, Central Islip, Sayville, Bayport, Holbrook, Holtsville, Ronkonkoma, Oakdale and West Islip.',
      },
    ],
  },
  {
    slug: 'smithtown',
    name: 'Smithtown',
    region: 'suffolk-county',
    county: 'Suffolk County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Smithtown, NY | From $170 | Same Day',
    metaDescription:
      'Garage door repair in Smithtown, NY. Springs from $170, new doors from $1,056. Same-day service with a written estimate before any work starts.',
    answer:
      'Garage door repair in Smithtown starts at $170 per spring and $281 for opener installation. Smithtown has a high share of two-car garages with sixteen foot double doors, which carry two springs and cost more than a single door job.',
    intro: [
      'Smithtown is where Suffolk starts to feel like new construction rather than postwar tract. Two-car garages with a single sixteen foot double door are the norm, and that changes the arithmetic on nearly every job.',
      'A double door weighs roughly twice what a single does, usually runs two torsion springs, and needs both replaced together when one fails. That is not an upsell, it is physics: the surviving spring has the same cycle count as the one that broke and typically follows within months.',
    ],
    localNotes: [
      'Predominantly sixteen foot double doors on two-car garages',
      'Two-spring systems, so both are replaced together when one fails',
      'Newer construction means insulated sectional doors with heavier sections',
    ],
    nearby: ['commack', 'huntington', 'islip', 'patchogue'],
    faq: [
      {
        question: 'One spring broke. Do I really need both replaced?',
        answer:
          'On a two-spring door, yes in almost every case. Both springs were installed on the same day and have cycled the same number of times. Replacing one leaves you with a part that is already at the end of its rated life, and the second failure usually arrives within a few months.',
      },
      {
        question: 'How much more is a double door than a single?',
        answer:
          'For spring replacement, doing both springs together adds roughly $150 to $300 over a single spring job. For a full door replacement the difference is much larger, because a double door is a bigger and heavier product.',
      },
    ],
  },
  {
    slug: 'commack',
    name: 'Commack',
    region: 'suffolk-county',
    county: 'Suffolk County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Commack, NY | From $170 | Same Day',
    metaDescription:
      'Garage door repair in Commack, NY. Spring replacement from $170, opener installation from $281, same-day service and a written estimate before work.',
    answer:
      'Garage door repair in Commack starts at $170 per spring and $281 for opener installation. Commack is dominated by 1960s and 1970s colonials with attached two-car garages, most of them now on their second door.',
    intro: [
      'Commack was built out mainly in the 1960s and 1970s, and the housing is remarkably consistent: colonials and splits with attached two-car garages, most of them originally fitted with a pair of single doors or one wide double.',
      'The consistency means we can usually predict the job from the address. Where it gets interesting is the homes that were converted from two singles to one double at some point, because the header framing and the track layout from that conversion are not always what a standard installation assumes.',
    ],
    localNotes: [
      '1960s and 1970s colonials with attached two-car garages',
      'Some conversions from twin single doors to one double, with non-standard framing',
      'Second-generation doors from the 1990s now at end of spring life',
    ],
    nearby: ['smithtown', 'huntington', 'islip', 'brentwood'],
    faq: [
      {
        question: 'Can two single doors be converted to one double?',
        answer:
          'Structurally it is possible, but it means removing the centre post, which is often load bearing, and fitting a header that can carry the span. That is a construction job with a garage door at the end of it, not a garage door job, and we will tell you that plainly rather than quoting it as a door swap.',
      },
      {
        question: 'Do you stock parts for older Commack doors?',
        answer:
          'Springs, cables, rollers, hinges and bearings for common door sizes, yes, on the van. Model-specific panels and discontinued opener parts have to be ordered, and we confirm availability before quoting.',
      },
    ],
  },
  {
    slug: 'patchogue',
    name: 'Patchogue',
    region: 'suffolk-county',
    county: 'Suffolk County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Patchogue, NY | From $170 | Same Day',
    metaDescription:
      'Garage door repair in Patchogue, NY. Springs from $170, cables from $100. Same-day service across central Suffolk with a written estimate before any work.',
    answer:
      'Garage door repair in Patchogue starts at $170 per spring, $100 for cable repair and $281 for opener installation. Patchogue mixes older village housing with detached garages and newer development with attached two-car garages.',
    intro: [
      'Patchogue village has older housing than the areas around it, with detached garages on narrow lots and a fair number of doors that were converted from manual to automatic long after they were built. Outside the village the development is newer and more standard.',
      'The village conversions are where we see the most mismatched hardware. An opener added to a door that was designed to be lifted by hand will work, but the spring balance is often wrong, and an unbalanced door quietly destroys the opener it is attached to.',
    ],
    localNotes: [
      'Older village housing with narrow lots and detached garages',
      'Manual-to-automatic conversions with mismatched spring balance',
      'Newer surrounding development with standard attached two-car garages',
    ],
    nearby: ['islip', 'smithtown', 'brentwood', 'commack'],
    faq: [
      {
        question: 'My opener keeps burning out. Why?',
        answer:
          'Nine times out of ten the door is out of balance and the opener is doing work the springs are supposed to do. An opener is meant to guide a balanced door, not lift a heavy one. Fixing the spring balance is cheaper than the openers you will keep replacing.',
      },
      {
        question: 'Can an old manual door be automated safely?',
        answer:
          'Often yes, provided the door is sound, the tracks are straight and the spring is sized for the door weight. If any of those are not true we say so, because automating a bad door only breaks it faster.',
      },
    ],
  },
  {
    slug: 'brentwood',
    name: 'Brentwood',
    region: 'suffolk-county',
    county: 'Suffolk County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Brentwood, NY | From $170 | Same Day',
    metaDescription:
      'Garage door repair in Brentwood, NY. Spring replacement from $170, cable repair from $100. Same-day service and a written estimate before any work begins.',
    answer:
      'Garage door repair in Brentwood starts at $170 per spring, $100 for cable repair and $281 for opener installation. Brentwood is one of the largest hamlets in Suffolk and one of the areas where the published-price approach matters most.',
    intro: [
      'Brentwood is one of the biggest hamlets in Suffolk County and one of the areas most heavily targeted by the bait-pricing operators. The pattern is always the same: a very low advertised service charge, then a technician who finds several hundred dollars of parts once the door is apart.',
      'Our answer to that is the price list on this site. A standard spring replacement here starts at $170 and the number you are quoted before we dispatch is the number on the invoice.',
    ],
    localNotes: [
      'Dense postwar and later tract housing with attached single garages',
      'Heavily targeted by low-advertised-fee operators, so published pricing matters',
      'Large Spanish-speaking community, and we take quote requests in Spanish',
    ],
    nearby: ['islip', 'babylon', 'commack', 'patchogue'],
    faq: [
      {
        question: 'A company quoted me $29 for the service call. Is that real?',
        answer:
          'The $29 is real. What follows usually is not. The advertised fee gets a technician to your door and the money is made on the parts quoted once the door is apart. Ask for the full price of the actual repair before anyone is dispatched, and get it in writing.',
      },
      {
        question: '¿Atienden en español?',
        answer:
          'Sí. Puede dejar sus datos en el formulario y le devolvemos la llamada en español. Los precios publicados en este sitio son los mismos sin importar el idioma en que nos contacte.',
      },
    ],
  },

  /* ---------------- Staten Island ---------------- */
  {
    slug: 'great-kills',
    name: 'Great Kills',
    region: 'staten-island',
    county: 'Richmond County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Great Kills, Staten Island | From $170',
    metaDescription:
      'Garage door repair in Great Kills, Staten Island. Springs from $170, openers from $281, same-day service and a written estimate before any work.',
    answer:
      'Garage door repair in Great Kills starts at $170 per spring and $281 for opener installation. Great Kills is one of the densest garage neighborhoods on Staten Island, with a large population of 1980s doors now past their spring life.',
    intro: [
      'Great Kills is South Shore Staten Island at its most typical: detached and semi-attached homes on regular lots, a driveway and a garage on nearly every one, and a housing stock that filled in heavily through the 1970s and 1980s.',
      'Doors from that period are now well past the point where a standard spring was rated to last, which is why spring replacement is the single most common job we do in this neighborhood. The doors themselves are often still perfectly sound.',
    ],
    localNotes: [
      'Dense 1970s and 1980s detached and semi-attached housing',
      'Very high proportion of original doors on original spring hardware',
      'Marina and waterfront streets see additional salt exposure',
    ],
    nearby: ['eltingville', 'annadale', 'new-dorp', 'tottenville'],
    faq: [
      {
        question: 'My door is from the 1980s. Is it worth repairing?',
        answer:
          'Usually yes. Steel sectional doors from that era are often structurally fine, and springs, cables and rollers are all wear parts with standard replacements. Replacement makes more sense when sections are rusted through, when the door is not insulated and you want it to be, or when panels are no longer available.',
      },
      {
        question: 'How quickly can you reach Great Kills?',
        answer:
          'Same day in most cases. The South Shore is a concentrated part of our map, so we are usually able to give a tighter arrival window here than in outlying areas.',
      },
    ],
  },
  {
    slug: 'tottenville',
    name: 'Tottenville',
    region: 'staten-island',
    county: 'Richmond County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Tottenville, Staten Island | From $170',
    metaDescription:
      'Garage door repair in Tottenville, Staten Island. Spring replacement from $170, cable repair from $100, written estimate before any work starts.',
    answer:
      'Garage door repair in Tottenville starts at $170 per spring and $100 for cable repair. Tottenville sits at the southern tip of Staten Island with significant shoreline exposure, so corrosion and past storm damage are common findings.',
    intro: [
      'Tottenville is the southernmost neighborhood in New York City and it took the worst of Sandy on Staten Island. A decade on, the effects are still visible in the housing: elevated rebuilds, replaced doors on original tracks, and hardware that spent time underwater.',
      'The rebuilt homes bring their own quirk. Raising a house changes the garage opening height, and a door that was ordered to the old dimension does not sit right on the new one. If yours has never quite closed evenly since, that is usually why.',
    ],
    localNotes: [
      'Significant post-Sandy rebuilding, with elevated homes and non-standard opening heights',
      'Shoreline salt exposure on hardware and bottom sections',
      'Mix of older village housing and newer subdivision construction',
    ],
    nearby: ['annadale', 'great-kills', 'eltingville', 'new-dorp'],
    faq: [
      {
        question: 'My door does not close evenly on one side. What causes that?',
        answer:
          'Most often an out-of-level opening, a stretched or mis-set cable on one side, or a bent track. All three are diagnosable in a few minutes, and all three get worse if the door keeps being run that way.',
      },
      {
        question: 'Do you handle doors on elevated homes?',
        answer:
          'Yes. The main difference is that the opening dimensions frequently are not standard after a raise, so the door and track kit have to be measured rather than ordered from a catalogue size.',
      },
    ],
  },
  {
    slug: 'new-dorp',
    name: 'New Dorp',
    region: 'staten-island',
    county: 'Richmond County',
    tier: 2,
    metaTitle: 'Garage Door Repair in New Dorp, Staten Island | From $170',
    metaDescription:
      'Garage door repair in New Dorp, Staten Island. Springs from $170, openers from $281. Same-day service with a written estimate before work begins.',
    answer:
      'Garage door repair in New Dorp starts at $170 per spring and $281 for opener installation. New Dorp has a high share of attached and semi-attached homes with under-house garages, where headroom limits which opener will fit.',
    intro: [
      'New Dorp is a mix of freestanding houses and long rows of attached and semi-attached homes with the garage tucked under the living space. That second type is the one that shapes most of the work here.',
      'An under-house garage usually has very little clearance above the door, which rules out a standard ceiling-mounted rail opener. A wall-mounted jackshaft unit solves it, and it is the right answer often enough here that we quote it as the default rather than the exception.',
    ],
    localNotes: [
      'Many under-house garages with limited headroom',
      'Jackshaft and low-profile openers are frequently the only workable fit',
      'Narrow single doors, typically eight to nine feet wide',
    ],
    nearby: ['great-kills', 'eltingville', 'annadale', 'tottenville'],
    faq: [
      {
        question: 'What is a jackshaft opener and why would I need one?',
        answer:
          'It mounts on the wall beside the door and drives the torsion bar directly, so it needs almost no ceiling clearance. On an under-house garage with a low header it is often the only opener that will physically fit. It costs more than a chain drive, and we say so before you commit.',
      },
      {
        question: 'Is my garage too small for an opener at all?',
        answer:
          'Very rarely. Between low-profile rail kits and wall-mounted units there is almost always a workable option. We measure the headroom and the side room and tell you which one applies.',
      },
    ],
  },
  {
    slug: 'annadale',
    name: 'Annadale',
    region: 'staten-island',
    county: 'Richmond County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Annadale, Staten Island | From $170',
    metaDescription:
      'Garage door repair in Annadale, Staten Island. Spring replacement from $170, opener installation from $281, written estimate before any work.',
    answer:
      'Garage door repair in Annadale starts at $170 per spring and $281 for opener installation. Annadale is mostly detached single-family housing with attached garages, and double doors are more common here than elsewhere on the island.',
    intro: [
      'Annadale is one of the more suburban parts of Staten Island, with detached single-family houses on regular lots and attached garages that are more often two-car than the borough average.',
      'That means more double doors, which means two-spring systems, which means the honest quote is usually for the pair rather than the one that snapped. We explain why rather than simply adding it to the bill.',
    ],
    localNotes: [
      'Detached single-family housing with a higher share of two-car garages',
      'More sixteen foot double doors than elsewhere on Staten Island',
      'Newer construction, so insulated sectional doors are common',
    ],
    nearby: ['eltingville', 'great-kills', 'tottenville', 'new-dorp'],
    faq: [
      {
        question: 'Are insulated doors harder to repair?',
        answer:
          'Not harder, but heavier. An insulated sectional door weighs more than a single-skin one of the same size, so the spring specification is different and a section replacement costs more. Neither is a problem, it just needs to be priced correctly.',
      },
      {
        question: 'Do you offer maintenance before something breaks?',
        answer:
          'Yes. A tune-up starts at $95 and covers spring balance, cable condition, roller and hinge wear, track alignment, safety sensor alignment and opener force settings. It is the cheapest thing on our list and it prevents the most expensive things on it.',
      },
    ],
  },
  {
    slug: 'eltingville',
    name: 'Eltingville',
    region: 'staten-island',
    county: 'Richmond County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Eltingville, Staten Island | From $170',
    metaDescription:
      'Garage door repair in Eltingville, Staten Island. Springs from $170, cables from $100, same-day service with a written estimate before work.',
    answer:
      'Garage door repair in Eltingville starts at $170 per spring, $100 for cable repair and $281 for opener installation. Same-day service is available across the South Shore.',
    intro: [
      'Eltingville sits between Great Kills and Annadale and shares the housing pattern of both: dense South Shore development from the 1970s and 1980s, driveways on nearly every property, and attached garages as standard.',
      'The most frequent call here is a door that has started making noise. Noise is worth taking seriously, because a grinding roller or a dry bearing is a cheap fix and the failure it leads to is not.',
    ],
    localNotes: [
      '1970s and 1980s South Shore development with attached garages',
      'High volume of roller, hinge and bearing wear from age rather than damage',
      'Mostly single and narrow double doors',
    ],
    nearby: ['great-kills', 'annadale', 'new-dorp', 'tottenville'],
    faq: [
      {
        question: 'My door has started grinding. Is that urgent?',
        answer:
          'Not an emergency, but do not ignore it. Grinding is usually a dry or failing roller bearing, or a worn end bearing plate. Both are inexpensive to replace and both cause much more expensive damage if they seize while the door is moving.',
      },
      {
        question: 'What does a noisy door usually cost to fix?',
        answer:
          'A tune-up starts at $95 and resolves most noise complaints. If rollers or bearings need replacing, that is quoted on top and shown to you before anything is fitted.',
      },
    ],
  },

  /* ---------------- Queens ---------------- */
  {
    slug: 'bayside',
    name: 'Bayside',
    region: 'queens',
    county: 'Queens County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Bayside, Queens | From $170 | Same Day',
    metaDescription:
      'Garage door repair in Bayside, Queens. Spring replacement from $170, opener installation from $281, same-day service with a written estimate first.',
    answer:
      'Garage door repair in Bayside starts at $170 per spring, $100 for cable repair and $281 for opener installation. Bayside is one of the most garage-dense neighborhoods in Queens, with a mix of detached garages and attached single-car garages.',
    intro: [
      'Bayside is suburban Queens. Detached single-family houses, driveways, and garages on the large majority of properties, which makes it one of the busiest parts of the borough for this trade.',
      'The split here is between older detached garages at the back of the lot, often with a door added or automated decades after the building went up, and newer attached garages built into the house. The first group produces most of our calls, because that is where the oldest hardware is.',
    ],
    localNotes: [
      'Very high garage density for a New York City neighborhood',
      'Older detached garages with retrofitted openers and mismatched hardware',
      'A mix of single doors and narrow doubles',
    ],
    nearby: ['douglaston', 'whitestone', 'fresh-meadows', 'forest-hills'],
    faq: [
      {
        question: 'Do you service detached garages in Bayside?',
        answer:
          'Yes, and they are a large part of what we do here. The main differences are the power run and the remote range, both of which we check before quoting an opener.',
      },
      {
        question: 'How fast can you get to Bayside?',
        answer:
          'Same day in most cases, seven days a week. Northeast Queens is a dense part of our service map.',
      },
    ],
  },
  {
    slug: 'douglaston',
    name: 'Douglaston',
    region: 'queens',
    county: 'Queens County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Douglaston, Queens | From $170',
    metaDescription:
      'Garage door repair in Douglaston, Queens. Springs from $170, new door installation from $1,056. Historic district requirements handled, written estimate first.',
    answer:
      'Garage door repair in Douglaston starts at $170 per spring and $281 for opener installation. Parts of Douglaston sit within a designated historic district, which can restrict what a replacement door may look like.',
    intro: [
      'Douglaston has some of the oldest and most architecturally distinctive housing in Queens, and parts of it are within a designated historic district. That is not a detail you can ignore when a door needs replacing.',
      'In a historic district the appearance of a street-facing door can be regulated, which narrows the options and lengthens the timeline. A repair is unaffected, but a replacement needs to be planned rather than ordered. We raise it before you choose a door, not after.',
    ],
    localNotes: [
      'Portions fall within a designated historic district, restricting replacement door appearance',
      'Older housing with detached and side-entry garages',
      'High share of wood and carriage-style doors',
    ],
    nearby: ['bayside', 'whitestone', 'fresh-meadows', 'forest-hills'],
    faq: [
      {
        question: 'Can I replace a garage door in a historic district?',
        answer:
          'Usually yes, but the appearance of a street-facing door may need approval, which affects both the choice and the timeline. Repairs to an existing door are not restricted in the same way. We will tell you which category your job falls into before you spend anything.',
      },
      {
        question: 'Do you work on wood carriage doors?',
        answer:
          'Yes. They are heavier than steel, so the spring specification is different, and hardware is often model-specific. Both get confirmed before we quote.',
      },
    ],
  },
  {
    slug: 'whitestone',
    name: 'Whitestone',
    region: 'queens',
    county: 'Queens County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Whitestone, Queens | From $170',
    metaDescription:
      'Garage door repair in Whitestone, Queens. Spring replacement from $170, cable repair from $100, same-day service and a written estimate before work.',
    answer:
      'Garage door repair in Whitestone starts at $170 per spring, $100 for cable repair and $281 for opener installation. Whitestone is largely detached single-family housing with attached garages, plus waterfront streets with additional salt exposure.',
    intro: [
      'Whitestone is detached houses on regular lots with garages on most of them, which puts it in the top tier of Queens neighborhoods for this work alongside Bayside.',
      'The waterfront streets along the East River add a salt factor that the rest of the neighborhood does not have. If your garage faces the water, expect roller and hinge corrosion sooner than a neighbor two blocks inland.',
    ],
    localNotes: [
      'Detached single-family housing with attached and detached garages',
      'Waterfront streets see faster hardware corrosion',
      'Mix of original mid-century doors and 1990s replacements',
    ],
    nearby: ['bayside', 'douglaston', 'fresh-meadows', 'middle-village'],
    faq: [
      {
        question: 'Why do my rollers keep failing?',
        answer:
          'Either they are the original steel rollers with unsealed bearings, or the track is out of alignment and forcing them to run at an angle. We check the track before replacing the rollers, because replacing them without fixing the alignment just buys you the same failure again.',
      },
      {
        question: 'Do you offer same-day service in Whitestone?',
        answer:
          'Yes, seven days a week, subject to how the day is booked. You get a real arrival window before we dispatch rather than a vague promise.',
      },
    ],
  },
  {
    slug: 'forest-hills',
    name: 'Forest Hills',
    region: 'queens',
    county: 'Queens County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Forest Hills, Queens | From $170',
    metaDescription:
      'Garage door repair in Forest Hills, Queens. Springs from $170, openers from $281. Detached and shared-driveway garages handled, written estimate before work.',
    answer:
      'Garage door repair in Forest Hills starts at $170 per spring and $281 for opener installation. Many Forest Hills garages are detached and reached from a shared driveway or alley, which affects access for larger jobs.',
    intro: [
      'Forest Hills has a distinctive garage pattern. A great many of the houses have a detached garage at the back of the lot, reached by a driveway shared with the neighbor, and in Forest Hills Gardens the architecture is regulated on top of that.',
      'Shared access is the practical constraint. A repair is a van and a technician, so it is rarely an issue. A full door replacement means getting a large panel down that shared driveway, and we schedule that deliberately rather than turning up and discovering it.',
    ],
    localNotes: [
      'Detached rear garages reached by shared driveways',
      'Forest Hills Gardens has private architectural restrictions',
      'Older garages with retrofitted openers and non-standard framing',
    ],
    nearby: ['middle-village', 'fresh-meadows', 'howard-beach', 'bayside'],
    faq: [
      {
        question: 'My garage is behind the house on a shared driveway. Is that a problem?',
        answer:
          'Not for a repair. For a full door replacement it affects delivery access and scheduling, which we plan in advance. It does not change the price of the door.',
      },
      {
        question: 'Are there restrictions in Forest Hills Gardens?',
        answer:
          'Yes. Forest Hills Gardens is privately managed and has its own architectural review for exterior changes. A replacement door facing the street may need approval, and we will flag it before you order anything.',
      },
    ],
  },
  {
    slug: 'howard-beach',
    name: 'Howard Beach',
    region: 'queens',
    county: 'Queens County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Howard Beach, Queens | From $170',
    metaDescription:
      'Garage door repair in Howard Beach, Queens. Spring replacement from $170, cable repair from $100. Salt and flood damage handled, written estimate before work.',
    answer:
      'Garage door repair in Howard Beach starts at $170 per spring and $100 for cable repair. Howard Beach is a waterfront neighborhood with significant past flood exposure, so corroded hardware and damaged bottom sections are common findings.',
    intro: [
      'Howard Beach is built on and around the water, and it was hit hard by Sandy. Both facts show up in the doors: corrosion on every piece of untreated steel, and bottom sections on older doors that absorbed water and never recovered.',
      'A swollen or delaminated bottom section is not repairable in place. On a sectional door it can often be replaced on its own, provided the model is still available, and that check is the first thing we do rather than the last.',
    ],
    localNotes: [
      'Waterfront neighborhood with heavy salt exposure on all hardware',
      'Past flood damage affecting bottom sections and weather seals',
      'Many attached garages under living space, so headroom is limited',
    ],
    nearby: ['middle-village', 'valley-stream', 'forest-hills', 'fresh-meadows'],
    faq: [
      {
        question: 'My bottom panel is swollen and rusted. Can it be replaced alone?',
        answer:
          'Often yes, if the model and colour are still made. Section replacement starts at $250. If the profile has been discontinued, a mismatched section on the front of the house usually looks worse than a full replacement, and we will say so.',
      },
      {
        question: 'What can I do about constant corrosion?',
        answer:
          'Specify nylon rollers with sealed bearings and galvanised or stainless fixings at the next replacement, keep the weather seal intact, and rinse the bottom of the door after storm surges. It will not stop corrosion, but it changes the interval from annual to occasional.',
      },
    ],
  },
  {
    slug: 'middle-village',
    name: 'Middle Village',
    region: 'queens',
    county: 'Queens County',
    tier: 3,
    metaTitle: 'Garage Door Repair in Middle Village, Queens | From $170',
    metaDescription:
      'Garage door repair in Middle Village, Queens. Springs from $170, openers from $281. Narrow alley garages handled, written estimate before any work.',
    answer:
      'Garage door repair in Middle Village starts at $170 per spring and $281 for opener installation. Middle Village has a high concentration of narrow detached garages on rear alleys, typically with single doors under nine feet wide.',
    intro: [
      'Middle Village is row and semi-detached housing with garages at the back, reached from service alleys. The doors are narrow, often eight feet or less, and many of them are older than the openers attached to them.',
      'Narrow and old is actually good news on price. A small light door needs a smaller spring and fewer parts, so the standard jobs here sit at the lower end of our published ranges rather than the upper.',
    ],
    localNotes: [
      'Narrow detached garages on rear service alleys',
      'Doors frequently under nine feet wide, so lighter spring specification',
      'Alley access restricts truck size for full replacements',
    ],
    nearby: ['forest-hills', 'howard-beach', 'fresh-meadows', 'whitestone'],
    faq: [
      {
        question: 'Is a small garage door cheaper to fix?',
        answer:
          'Generally yes. A narrower, lighter door uses a smaller spring, fewer sections and less hardware. Our published starting prices assume a standard single door, and most Middle Village doors are at or below that size.',
      },
      {
        question: 'Can you get to a garage on an alley?',
        answer:
          'Yes for repairs, which are done from a service van. For a full door replacement we check the alley access before scheduling the delivery.',
      },
    ],
  },
  {
    slug: 'fresh-meadows',
    name: 'Fresh Meadows',
    region: 'queens',
    county: 'Queens County',
    tier: 3,
    metaTitle: 'Garage Door Repair in Fresh Meadows, Queens | From $170',
    metaDescription:
      'Garage door repair in Fresh Meadows, Queens. Spring replacement from $170, cable repair from $100, same-day service and a written estimate first.',
    answer:
      'Garage door repair in Fresh Meadows starts at $170 per spring, $100 for cable repair and $281 for opener installation. Same-day service is available across northeast Queens.',
    intro: [
      'Fresh Meadows mixes large postwar garden apartment development with detached single-family blocks, and it is the second group that keeps us busy. Those houses have driveways and attached garages on the standard northeast Queens pattern.',
      'Most of what we do here is straightforward and predictable: springs, cables, rollers and openers on doors that are twenty to forty years old and have never had a service. A tune-up at $95 would have prevented a fair share of the calls we get.',
    ],
    localNotes: [
      'Detached single-family blocks with attached garages, plus large apartment development',
      'Doors typically twenty to forty years old with no service history',
      'Standard single and narrow double door sizes',
    ],
    nearby: ['bayside', 'middle-village', 'forest-hills', 'whitestone'],
    faq: [
      {
        question: 'How often should a garage door be serviced?',
        answer:
          'Once a year for a door used daily. A tune-up checks spring balance, cable condition, rollers, hinges, track alignment, safety sensors and opener force settings. It starts at $95 and it catches the things that otherwise turn into emergency calls.',
      },
      {
        question: 'What is included in a tune-up?',
        answer:
          'Balance test, cable and drum inspection, roller and hinge check, hardware tightening, track alignment, lubrication of moving parts, photo eye alignment, and setting the opener force and travel limits correctly.',
      },
    ],
  },

  /* ---------------- Brooklyn ---------------- */
  {
    slug: 'bay-ridge',
    name: 'Bay Ridge',
    region: 'brooklyn',
    county: 'Kings County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Bay Ridge, Brooklyn | From $170',
    metaDescription:
      'Garage door repair in Bay Ridge, Brooklyn. Springs from $170, openers from $281. Low-headroom under-house garages handled, written estimate before work.',
    answer:
      'Garage door repair in Bay Ridge starts at $170 per spring and $281 for opener installation. Most Bay Ridge garages sit under the living space with very limited headroom, which usually means a wall-mounted jackshaft opener rather than a ceiling rail.',
    intro: [
      'Bay Ridge is one of the few Brooklyn neighborhoods where private garages are the norm rather than the exception. They are almost all under the house, reached by a short driveway cut into the front, and they are almost all tight.',
      'Headroom is the defining constraint. There is frequently not enough clearance above the door for a standard rail opener, so the correct answer is a wall-mounted jackshaft that drives the torsion bar directly. It costs more, it is often the only thing that fits, and we say which one applies before quoting.',
    ],
    localNotes: [
      'Under-house garages with very limited headroom',
      'Jackshaft and low-profile openers are frequently the only fit',
      'Narrow single doors, typically eight to nine feet wide',
    ],
    nearby: ['dyker-heights', 'marine-park', 'sheepshead-bay', 'mill-basin'],
    faq: [
      {
        question: 'There is no room above my door for an opener. What are the options?',
        answer:
          'A wall-mounted jackshaft opener mounts beside the door and drives the torsion bar, so it needs almost no headroom. There are also low-profile rail kits for moderate clearance. We measure and tell you which one your garage actually takes.',
      },
      {
        question: 'My garage is under the house and the door jammed. Is that urgent?',
        answer:
          'Treat it as urgent. A jammed door on an under-house garage is both a trapped car and an opening in the building envelope. Same-day emergency service is available seven days a week, with the call-out premium of $200 to $350 stated before we dispatch.',
      },
    ],
  },
  {
    slug: 'dyker-heights',
    name: 'Dyker Heights',
    region: 'brooklyn',
    county: 'Kings County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Dyker Heights, Brooklyn | From $170',
    metaDescription:
      'Garage door repair in Dyker Heights, Brooklyn. Spring replacement from $170, new doors from $1,056. Custom and decorative doors handled, written estimate first.',
    answer:
      'Garage door repair in Dyker Heights starts at $170 per spring and $281 for opener installation. Dyker Heights has a higher share of custom and decorative doors than the rest of Brooklyn, where parts are model-specific.',
    intro: [
      'Dyker Heights is detached and semi-detached houses on generous lots by Brooklyn standards, with garages on most of them and a noticeably higher standard of exterior finish than the neighborhoods around it.',
      'That shows up in the doors. Custom widths, decorative hardware, carriage styling and wood-look composite are all more common here, which matters when a section is damaged: a stock steel panel will not match, and the honest comparison is between a full replacement and living with a mismatch.',
    ],
    localNotes: [
      'Higher share of custom, decorative and carriage-style doors',
      'Detached and semi-detached housing with more two-car garages than the borough average',
      'Model-specific parts, so availability is checked before quoting a section',
    ],
    nearby: ['bay-ridge', 'marine-park', 'mill-basin', 'sheepshead-bay'],
    faq: [
      {
        question: 'Can you match a decorative panel?',
        answer:
          'Only if the profile and finish are still in production. We check before quoting. Where a match is not available we lay out the two real options, a visible mismatch or a full replacement, with the price of each.',
      },
      {
        question: 'How much is a new garage door in Dyker Heights?',
        answer:
          'New door installation starts at $1,056 and runs to $4,620 depending on size, material, insulation and hardware. Custom and carriage styles sit in the upper part of that range.',
      },
    ],
  },
  {
    slug: 'marine-park',
    name: 'Marine Park',
    region: 'brooklyn',
    county: 'Kings County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Marine Park, Brooklyn | From $170',
    metaDescription:
      'Garage door repair in Marine Park, Brooklyn. Springs from $170, cables from $100, same-day service and a written estimate before any work.',
    answer:
      'Garage door repair in Marine Park starts at $170 per spring, $100 for cable repair and $281 for opener installation. Marine Park is one of the more garage-dense Brooklyn neighborhoods, mostly attached homes with under-house garages.',
    intro: [
      'Marine Park is rows of attached and semi-attached brick houses with the garage below the living space, which is the classic south Brooklyn arrangement. Nearly every house has one, which makes this one of the more productive Brooklyn neighborhoods for this work.',
      'These doors are small, they are used constantly, and the openers attached to them are often working harder than they should be because the spring has lost tension. That combination is why opener failures are so common here.',
    ],
    localNotes: [
      'Attached and semi-attached brick housing with under-house garages',
      'Small doors in constant daily use, so spring cycles accumulate quickly',
      'Frequent opener failures caused by lost spring tension rather than opener faults',
    ],
    nearby: ['mill-basin', 'sheepshead-bay', 'bay-ridge', 'dyker-heights'],
    faq: [
      {
        question: 'My opener strains but the door still opens. What is wrong?',
        answer:
          'Almost always the springs, not the opener. Disconnect the opener and lift the door by hand. If it is heavy or will not stay halfway, the spring has lost tension and the opener has been compensating. Replacing the spring fixes it; replacing the opener does not.',
      },
      {
        question: 'How long do springs last on a door used several times a day?',
        answer:
          'A standard spring is rated for about 10,000 cycles. At four openings a day that is roughly seven years. High-cycle springs are rated for 20,000 or more and cost more up front, which is usually worth it on a door used this heavily.',
      },
    ],
  },
  {
    slug: 'mill-basin',
    name: 'Mill Basin',
    region: 'brooklyn',
    county: 'Kings County',
    tier: 3,
    metaTitle: 'Garage Door Repair in Mill Basin, Brooklyn | From $170',
    metaDescription:
      'Garage door repair in Mill Basin, Brooklyn. Spring replacement from $170, cable repair from $100. Waterfront corrosion handled, written estimate before work.',
    answer:
      'Garage door repair in Mill Basin starts at $170 per spring and $100 for cable repair. Mill Basin is surrounded by water on three sides, so hardware corrosion and past flood damage are the dominant issues.',
    intro: [
      'Mill Basin is almost an island, with water on three sides, larger detached homes than most of Brooklyn, and a good number of two-car garages. It also takes the full force of coastal weather.',
      'Corrosion is the theme. Springs rust at the coils, cables fray where they run over the drum, and bottom brackets corrode at the exact fixing that carries the load. A visual check of those three parts costs nothing and tells us most of what we need to know.',
    ],
    localNotes: [
      'Water on three sides, so salt corrosion affects every steel component',
      'Larger detached homes with more two-car garages than the Brooklyn average',
      'Past flood damage to bottom sections and openers mounted low',
    ],
    nearby: ['marine-park', 'sheepshead-bay', 'bay-ridge', 'dyker-heights'],
    faq: [
      {
        question: 'How do I know if a cable is about to fail?',
        answer:
          'Look for fraying where the cable wraps the drum at the top, and for kinks or rust near the bottom bracket. A frayed cable is a same-week job, not a same-year one, because when it goes the door drops on one side and can come off the track.',
      },
      {
        question: 'Should I replace the opener after flooding?',
        answer:
          'If the unit itself went under water, yes. Motors and boards that have been submerged fail unpredictably afterwards, and a wall-mounted or ceiling unit that was above the water line is usually fine.',
      },
    ],
  },
  {
    slug: 'sheepshead-bay',
    name: 'Sheepshead Bay',
    region: 'brooklyn',
    county: 'Kings County',
    tier: 3,
    metaTitle: 'Garage Door Repair in Sheepshead Bay, Brooklyn | From $170',
    metaDescription:
      'Garage door repair in Sheepshead Bay, Brooklyn. Springs from $170, openers from $281, same-day service with a written estimate before any work.',
    answer:
      'Garage door repair in Sheepshead Bay starts at $170 per spring and $281 for opener installation. Sheepshead Bay mixes attached homes with under-house garages and waterfront properties with heavier corrosion exposure.',
    intro: [
      'Sheepshead Bay is a mix: attached brick homes with garages under the living space in the inland blocks, and older waterfront housing closer to the bay itself where the salt does its work.',
      'It is also one of the neighborhoods where a straight answer matters most. This part of Brooklyn is worked hard by the low-advertised-fee operators, and a published price list is a genuinely unusual thing to be handed here.',
    ],
    localNotes: [
      'Attached housing with under-house garages inland, waterfront exposure near the bay',
      'Heavily worked by bait-pricing operators, so published prices stand out',
      'Large Russian-speaking community, and the housing here has private garages',
    ],
    nearby: ['marine-park', 'mill-basin', 'bay-ridge', 'dyker-heights'],
    faq: [
      {
        question: 'Why do your prices look higher than the ad I saw?',
        answer:
          'Because the ad is usually a service call fee, not a repair price. Ours is the price of the actual job. Compare like for like: ask the other company what the finished spring replacement costs, in writing, before anyone is dispatched.',
      },
      {
        question: 'Do you serve the waterfront streets?',
        answer:
          'Yes. Expect more corrosion-related findings there than a few blocks inland, and we show you the parts rather than describing them.',
      },
    ],
  },

  /* ---------------- Westchester County ---------------- */
  {
    slug: 'white-plains',
    name: 'White Plains',
    region: 'westchester-county',
    county: 'Westchester County',
    tier: 1,
    metaTitle: 'Garage Door Repair in White Plains, NY | From $170 | Same Day',
    metaDescription:
      'Garage door repair in White Plains, NY. Spring replacement from $170, opener installation from $281, same-day service and a written estimate before work.',
    answer:
      'Garage door repair in White Plains starts at $170 per spring, $100 for cable repair and $281 for opener installation. White Plains is the centre of our Westchester coverage, with same-day service available across the county from here.',
    intro: [
      'White Plains sits at the middle of Westchester and at the middle of our coverage in the county. The housing runs from prewar homes with detached garages to newer development with attached two-car garages, so the work is varied.',
      'What is consistent across Westchester is job value. Doors here are larger, more often insulated, more often wood or custom, and the replacement decision is more often about how the house looks than about whether the door still moves. That does not change our starting prices, but it does mean we spend more time on the difference between repairing and replacing.',
    ],
    localNotes: [
      'Wide range from prewar detached garages to newer attached two-car construction',
      'Higher share of insulated and custom doors than the boroughs',
      'Steep and curved driveways affect access for full door delivery',
    ],
    nearby: ['scarsdale', 'new-rochelle', 'yonkers', 'harrison'],
    faq: [
      {
        question: 'Repair or replace? How do I decide?',
        answer:
          'Repair when the sections are sound and only wear parts have failed. Replace when sections are rusted through or damaged beyond a matchable panel, when the door is uninsulated and the garage is attached to living space, or when the repair cost approaches half the price of a new door.',
      },
      {
        question: 'Do you cover all of Westchester from White Plains?',
        answer:
          'Yes, the whole county plus lower Rockland. Response times are shortest in the central corridor and slightly longer at the northern end.',
      },
    ],
  },
  {
    slug: 'yonkers',
    name: 'Yonkers',
    region: 'westchester-county',
    county: 'Westchester County',
    tier: 1,
    metaTitle: 'Garage Door Repair in Yonkers, NY | From $170 | Same Day',
    metaDescription:
      'Garage door repair in Yonkers, NY. Springs from $170, cables from $100, openers from $281. Same-day service and a written estimate before any work.',
    answer:
      'Garage door repair in Yonkers starts at $170 per spring, $100 for cable repair and $281 for opener installation. Yonkers is the largest city in Westchester and has the widest range of garage types in the county.',
    intro: [
      'Yonkers is the biggest city in Westchester and it has the housing mix to match: prewar multifamily with tucked-under garages, hillside houses with garages built into the slope, and postwar single-family blocks on the eastern side.',
      'The hillside garages are the interesting ones. When a garage is cut into a slope the driveway is steep, the opening is often below street level, and water management around the bottom seal matters far more than it does on a flat lot.',
    ],
    localNotes: [
      'Hillside garages cut into slopes, with steep driveways and drainage issues at the bottom seal',
      'Prewar multifamily with tucked-under garages',
      'Postwar single-family blocks on the east side with standard attached garages',
    ],
    nearby: ['mount-vernon', 'white-plains', 'new-rochelle', 'scarsdale'],
    faq: [
      {
        question: 'Water runs under my garage door. Is that a door problem?',
        answer:
          'Partly. A worn bottom seal or an uneven slab will let water under, and both are fixable. On a steep driveway that drains toward the door, no seal will fully solve it and the real answer is a drain or a threshold seal at the slab.',
      },
      {
        question: 'Do you serve all of Yonkers?',
        answer:
          'Yes, the whole city, including the hillside neighborhoods where access is tighter.',
      },
    ],
  },
  {
    slug: 'new-rochelle',
    name: 'New Rochelle',
    region: 'westchester-county',
    county: 'Westchester County',
    tier: 2,
    metaTitle: 'Garage Door Repair in New Rochelle, NY | From $170',
    metaDescription:
      'Garage door repair in New Rochelle, NY. Spring replacement from $170, new doors from $1,056. Same-day service with a written estimate before work.',
    answer:
      'Garage door repair in New Rochelle starts at $170 per spring and $281 for opener installation. New Rochelle has a large stock of prewar homes with detached garages, where opener wiring and framing need checking before a quote.',
    intro: [
      'New Rochelle has a deep stock of prewar and interwar housing, and with it a lot of detached garages that were built for cars considerably smaller than what is parked in them now.',
      'Two things follow. Openings are often narrow, which limits door choice on a replacement, and the framing was never designed to carry an opener, so the header sometimes needs reinforcing before one goes up. We look at both before quoting rather than after.',
    ],
    localNotes: [
      'Deep stock of prewar and interwar homes with detached garages',
      'Narrow original openings that limit replacement door sizing',
      'Original framing sometimes needs reinforcement to carry an opener',
    ],
    nearby: ['larchmont', 'mount-vernon', 'white-plains', 'scarsdale'],
    faq: [
      {
        question: 'My garage opening is narrower than standard. What are my options?',
        answer:
          'Doors are made in a wide range of sizes and a non-standard width is usually a made-to-measure order rather than a stock one. It costs more and takes longer, and we give you the real number and the real lead time rather than a stock price.',
      },
      {
        question: 'Does an old garage need work before an opener is fitted?',
        answer:
          'Sometimes. The header above the door has to carry the opener load, and on an old timber-framed garage it occasionally needs reinforcing. We check it on the visit and include it in the written quote if it applies.',
      },
    ],
  },
  {
    slug: 'scarsdale',
    name: 'Scarsdale',
    region: 'westchester-county',
    county: 'Westchester County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Scarsdale, NY | From $170',
    metaDescription:
      'Garage door repair in Scarsdale, NY. Springs from $170, new door installation from $1,056. Custom and wood doors handled, written estimate before work.',
    answer:
      'Garage door repair in Scarsdale starts at $170 per spring and $281 for opener installation. Scarsdale has one of the highest shares of custom and wood doors in the region, which changes both the spring specification and the parts lead time.',
    intro: [
      'Scarsdale has larger, older and more architecturally specific houses than almost anywhere else we cover, and the garage doors follow. Wood, wood-composite and custom carriage doors are common, and many of them are model-specific down to the hardware.',
      'Wood doors need a heavier spring than steel doors of the same size, and they need their finish maintained. A door whose bottom edge has been drinking water for a few winters will be heavier than the spring was ever set for, which is why the first thing we do is weigh the balance rather than assume it.',
    ],
    localNotes: [
      'High share of wood, wood-composite and custom carriage doors',
      'Model-specific hardware, so lead times matter on replacement parts',
      'Long detached driveways and side-entry garages',
    ],
    nearby: ['white-plains', 'new-rochelle', 'harrison', 'yonkers'],
    faq: [
      {
        question: 'Does a wood door need a different spring?',
        answer:
          'Yes. Spring size is set by door weight, and a wood door is considerably heavier than a steel one of the same dimensions. Fitting a standard spring to a wood door leaves it permanently out of balance and shortens the life of everything attached to it.',
      },
      {
        question: 'How long do custom parts take?',
        answer:
          'Standard hardware is same-day. Model-specific panels and custom-order doors run from a couple of weeks to several, depending on the manufacturer. We give you the actual lead time before you commit, not an optimistic one.',
      },
    ],
  },
  {
    slug: 'mount-vernon',
    name: 'Mount Vernon',
    region: 'westchester-county',
    county: 'Westchester County',
    tier: 2,
    metaTitle: 'Garage Door Repair in Mount Vernon, NY | From $170',
    metaDescription:
      'Garage door repair in Mount Vernon, NY. Spring replacement from $170, cable repair from $100, same-day service and a written estimate before work.',
    answer:
      'Garage door repair in Mount Vernon starts at $170 per spring, $100 for cable repair and $281 for opener installation. Mount Vernon is dense older housing with a high proportion of narrow detached garages.',
    intro: [
      'Mount Vernon is dense, older and tightly built, with a lot of narrow detached garages on small lots and a good number of shared driveways between neighboring houses.',
      'The doors are small and light, which keeps the standard jobs at the lower end of our ranges. The complication is access rather than the door itself, and it is worth raising when you book so we can plan the visit properly.',
    ],
    localNotes: [
      'Dense older housing with narrow detached garages on small lots',
      'Shared driveways between neighboring properties affect access',
      'Small light doors, so standard jobs sit at the lower end of our ranges',
    ],
    nearby: ['yonkers', 'new-rochelle', 'white-plains', 'larchmont'],
    faq: [
      {
        question: 'Is your price different in Mount Vernon than in Scarsdale?',
        answer:
          'The published starting prices are the same everywhere we work. What differs is the door: a small single door in Mount Vernon is a smaller job than a custom wood double in Scarsdale, so the final number lands in a different part of the range.',
      },
      {
        question: 'Can you work on a shared driveway?',
        answer:
          'Yes. Repairs are done from a service van and need very little space. For a full door replacement we confirm access before scheduling the delivery.',
      },
    ],
  },
  {
    slug: 'rye',
    name: 'Rye',
    region: 'westchester-county',
    county: 'Westchester County',
    tier: 3,
    metaTitle: 'Garage Door Repair in Rye, NY | From $170',
    metaDescription:
      'Garage door repair in Rye, NY. Springs from $170, new door installation from $1,056. Coastal exposure and custom doors handled, written estimate first.',
    answer:
      'Garage door repair in Rye starts at $170 per spring and $281 for opener installation. Rye combines coastal salt exposure with a high share of custom and wood doors, so corrosion-resistant hardware is worth specifying here.',
    intro: [
      'Rye sits on the Sound, which puts salt in the air, and it has the kind of housing where a garage door is part of the elevation rather than just a way in. Those two facts pull in opposite directions.',
      'The practical consequence is that standard hardware ages faster here than the door does. Specifying nylon rollers with sealed bearings and corrosion-resistant fixings on an expensive door is a small addition to the bill and it protects a much larger investment.',
    ],
    localNotes: [
      'Coastal salt exposure on all steel hardware',
      'High share of custom, wood and carriage-style doors',
      'Long driveways and detached or side-entry garages',
    ],
    nearby: ['harrison', 'larchmont', 'white-plains', 'scarsdale'],
    faq: [
      {
        question: 'Is upgraded hardware worth the cost?',
        answer:
          'Near the water, yes. Sealed-bearing nylon rollers and corrosion-resistant fixings add a modest amount to a job and materially extend the interval between hardware failures. On a custom door it also protects the finish, because a seized roller drags.',
      },
      {
        question: 'Do you install carriage house doors?',
        answer:
          'Yes. They are heavier and often model-specific, so the spring specification and the lead time both differ from a stock steel door. Both are stated in the written quote.',
      },
    ],
  },
  {
    slug: 'larchmont',
    name: 'Larchmont',
    region: 'westchester-county',
    county: 'Westchester County',
    tier: 3,
    metaTitle: 'Garage Door Repair in Larchmont, NY | From $170',
    metaDescription:
      'Garage door repair in Larchmont, NY. Spring replacement from $170, opener installation from $281, written estimate before any work starts.',
    answer:
      'Garage door repair in Larchmont starts at $170 per spring and $281 for opener installation. Larchmont has predominantly older housing with detached garages, many with original framing that predates automatic openers.',
    intro: [
      'Larchmont is largely prewar and interwar housing on the Sound, with detached garages set back from the street and driveways that were laid out for a single car.',
      'Older garages come with older framing, and framing that was never designed to carry an opener sometimes needs reinforcing before one is mounted. It is a small job when it is identified in advance and an annoying one when it is discovered halfway through an installation.',
    ],
    localNotes: [
      'Prewar and interwar housing with detached garages',
      'Original framing occasionally needs reinforcement before an opener is fitted',
      'Coastal air adds corrosion to untreated hardware',
    ],
    nearby: ['new-rochelle', 'rye', 'mount-vernon', 'harrison'],
    faq: [
      {
        question: 'How long does an opener installation take?',
        answer:
          'A straightforward replacement is around two hours. A first installation on an older garage takes longer, because the header has to be checked, the mounting has to be built, and the power supply has to be right.',
      },
      {
        question: 'Do you take away the old opener?',
        answer:
          'Yes, removal and disposal of the old unit is included in the installation.',
      },
    ],
  },
  {
    slug: 'harrison',
    name: 'Harrison',
    region: 'westchester-county',
    county: 'Westchester County',
    tier: 3,
    metaTitle: 'Garage Door Repair in Harrison, NY | From $170',
    metaDescription:
      'Garage door repair in Harrison, NY. Springs from $170, cables from $100, openers from $281. Written estimate before any work begins.',
    answer:
      'Garage door repair in Harrison starts at $170 per spring, $100 for cable repair and $281 for opener installation. Harrison spans dense village housing and large-lot residential, so door sizes vary widely across the town.',
    intro: [
      'Harrison is two different places in one town. The village end is dense and older, with narrow lots and small garages. Purchase and the northern part is large-lot residential with multi-car garages and doors to match.',
      'That range is worth knowing when reading a price list. A standard single door in the village and a pair of insulated doubles in Purchase are not the same job, and our starting prices describe the first, not the second.',
    ],
    localNotes: [
      'Dense village housing at one end, large-lot multi-car garages at the other',
      'Wide range of door sizes, from narrow singles to insulated doubles',
      'Longer driveways in the northern section affect access for deliveries',
    ],
    nearby: ['rye', 'white-plains', 'scarsdale', 'larchmont'],
    faq: [
      {
        question: 'I have three garage doors. Is there a price break?',
        answer:
          'Yes. Multiple doors at the same address in one visit cost less per door than three separate calls, because the travel and setup are shared. The saving is stated in the written quote rather than assumed.',
      },
      {
        question: 'Do you service multi-car garages?',
        answer:
          'Yes. The most common finding on a multi-door garage is that only one door has ever been serviced, and the others are quietly on the same clock.',
      },
    ],
  },
];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug);

/** Cities grouped by region, in region order, tier order within. */
export const citiesByRegion = (regionSlug: string) =>
  cities.filter((c) => c.region === regionSlug).sort((a, b) => a.tier - b.tier);

/** Ordered for the hub page: highest lead potential first. */
export const citiesByPotential = () =>
  [...cities].sort((a, b) => a.tier - b.tier || a.name.localeCompare(b.name));
