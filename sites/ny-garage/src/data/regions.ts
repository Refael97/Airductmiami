/**
 * The six regions we cover, per research/ny-garage/BRIEF.md section 8.
 *
 * Ordering is by lead potential, which in this vertical means garage
 * density and job value, not population. Manhattan is deliberately absent:
 * residential private garages barely exist there.
 */

export interface Region {
  slug: string;
  name: string;
  /** How the region is named in running copy, e.g. "on Long Island". */
  inPhrase: string;
  county: string;
  metaTitle: string;
  metaDescription: string;
  answer: string;
  intro: string[];
  /** What is distinctive about the doors here. Feeds city pages too. */
  doorProfile: string[];
  order: number;
}

export const regions: Region[] = [
  {
    slug: 'nassau-county',
    name: 'Nassau County',
    inPhrase: 'in Nassau County',
    county: 'Nassau County',
    metaTitle: 'Garage Door Repair in Nassau County, NY | Published Prices',
    metaDescription:
      'Same-day garage door repair across Nassau County. Spring replacement from $170, opener installation from $281, written estimate before any work. Hempstead, Levittown, Hicksville, Freeport and the rest of the county.',
    answer:
      'Garage door repair in Nassau County covers spring replacement, cable and drum repair, opener repair and installation, off-track correction, panel replacement and full door replacement. Spring replacement starts at $170 per spring and opener installation at $281, with a written estimate before any work begins.',
    intro: [
      'Nassau County is the densest garage market in the state. Almost every house has an attached garage, most of them built between the late 1940s and the 1970s, and most of them on their second or third door by now. That mix is why we see more spring failures per household here than anywhere else we work.',
      'The pattern is consistent: a door installed in the 1990s, a standard 10,000 cycle torsion spring, two openings a day, and a snap somewhere between year eight and year twelve. It usually happens on the first genuinely cold morning of the season, because cold steel is less forgiving of a spring that has already fatigued.',
      'We publish our starting prices for every one of those jobs. That is unusual in this county, where the going answer to "how much" is still "we will have to see it".',
    ],
    doorProfile: [
      'Postwar Cape and ranch housing, so single doors between seven and nine feet wide dominate',
      'A large second wave of 1980s and 1990s colonials with 16 foot double doors and two-car garages',
      'Salt air off both shores accelerates hardware corrosion in the south shore communities',
      'Older Levitt-era garages often have low headroom, which limits which opener will fit',
    ],
    order: 1,
  },
  {
    slug: 'suffolk-county',
    name: 'Suffolk County',
    inPhrase: 'in Suffolk County',
    county: 'Suffolk County',
    metaTitle: 'Garage Door Repair in Suffolk County, NY | Published Prices',
    metaDescription:
      'Garage door repair across Suffolk County, from Huntington to Riverhead. Spring replacement from $170, same-day service, and a written estimate before any work starts.',
    answer:
      'Garage door repair in Suffolk County covers springs, cables, openers, off-track doors, damaged panels and full replacement. Prices start at $170 per spring, $100 for cable repair and $281 for opener installation, quoted in writing before work begins.',
    intro: [
      'Suffolk is the largest and the most varied of the areas we serve. The western towns look like Nassau, with dense postwar housing and double doors on two-car garages. Head east and the housing gets newer, larger and further apart, and the doors get taller, wider and more often wood or fiberglass.',
      'Distance changes the job here in a way it does not in the boroughs. A part that is standard in Hicksville can mean a second trip out in Riverhead, so we confirm what we are bringing before we dispatch rather than after.',
      'Storm damage is a bigger factor here too. A nor’easter that peels a section off a door or drives it off its track is a Suffolk problem far more often than a Queens one.',
    ],
    doorProfile: [
      'Newer construction east of the Sagtikos, meaning taller doors and heavier insulated sections',
      'More wood and fiberglass doors than anywhere else we cover, which changes both weight and parts cost',
      'Detached garages are common, so opener wiring and remote range come up more often',
      'Coastal wind exposure makes track alignment and hinge wear a recurring issue',
    ],
    order: 2,
  },
  {
    slug: 'staten-island',
    name: 'Staten Island',
    inPhrase: 'on Staten Island',
    county: 'Richmond County',
    metaTitle: 'Garage Door Repair on Staten Island, NY | Published Prices',
    metaDescription:
      'Garage door repair across Staten Island: Great Kills, Tottenville, New Dorp, Annadale and Eltingville. Spring replacement from $170, same-day service, written estimate first.',
    answer:
      'Garage door repair on Staten Island covers spring replacement from $170, cable repair from $100, opener repair from $100 and opener installation from $281. Same-day service is available across the borough, with the price quoted in writing before work starts.',
    intro: [
      'Staten Island has the highest car ownership rate in New York City, and the housing stock to match. The South Shore in particular is a borough of driveways and attached garages, which makes it the one part of the five boroughs where this trade behaves like the suburbs rather than the city.',
      'A lot of the work here is on doors from the 1980s and 1990s building boom. Those doors are now well past the point where the original spring was rated to last, and a good share of them carry an opener old enough that parts are no longer made for it.',
      'The other Staten Island pattern is the semi-attached and attached row, where garages sit under the living space. Headroom is tight, the opener is often a low-clearance model, and the wrong replacement simply will not fit.',
    ],
    doorProfile: [
      'Dense 1980s and 1990s construction, so a large population of doors at end of spring life',
      'Under-house garages with limited headroom, favouring jackshaft and low-profile openers',
      'Semi-attached homes with narrow single doors, often eight feet wide',
      'South Shore flood exposure means bottom sections and weather seals wear faster',
    ],
    order: 3,
  },
  {
    slug: 'queens',
    name: 'Queens',
    inPhrase: 'in Queens',
    county: 'Queens County',
    metaTitle: 'Garage Door Repair in Queens, NY | Published Prices',
    metaDescription:
      'Garage door repair in Queens: Bayside, Douglaston, Whitestone, Forest Hills, Howard Beach and more. Spring replacement from $170 and a written estimate before any work.',
    answer:
      'Garage door repair in Queens covers springs, cables, openers, off-track doors and panel damage. Spring replacement starts at $170, cable repair at $100 and opener installation at $281, with the price confirmed in writing before we begin.',
    intro: [
      'Queens is not one garage market, it is a dozen. The eastern neighborhoods are effectively suburban, with driveways and attached garages on almost every block. Closer in, garages are detached, sit at the back of the lot off a shared alley, and are often older than the people using them.',
      'That second category produces a specific kind of call. A detached garage on an alley usually has a single door, an opener added long after the garage was built, and hardware that has never been serviced. When something fails there it is rarely just the one part.',
      'We work the whole borough, but the honest answer is that our fastest response is in the eastern neighborhoods where the density of this work is highest.',
    ],
    doorProfile: [
      'Detached alley garages in the older neighborhoods, usually single doors with retrofitted openers',
      'Suburban attached garages east of the Clearview, with standard sixteen foot double doors',
      'A high share of manual doors converted to automatic decades ago, with mismatched hardware',
      'Tight alley access affects how a full door replacement is scheduled and priced',
    ],
    order: 4,
  },
  {
    slug: 'westchester-county',
    name: 'Westchester County',
    inPhrase: 'in Westchester County',
    county: 'Westchester County',
    metaTitle: 'Garage Door Repair in Westchester County, NY | Published Prices',
    metaDescription:
      'Garage door repair across Westchester: White Plains, Yonkers, New Rochelle, Scarsdale, Rye and Mount Vernon. Published starting prices and a written estimate before work.',
    answer:
      'Garage door repair in Westchester County covers spring replacement from $170, cable repair from $100, opener installation from $281 and full door replacement from $1,056. Every job is quoted in writing before work starts.',
    intro: [
      'Westchester has the highest average job value of any area we cover, and it is not close. The housing is older, larger and better maintained, the doors are more often carriage house or wood, and a replacement here is frequently a design decision rather than a repair of last resort.',
      'It is also the least crowded market of the six on the web. Long Island is thick with competitors; the Westchester corridor is served mostly by a handful of long-established operators and by the same thin lead-generation sites that blanket everywhere else.',
      'What that means for a customer here is that a straight answer on price is even harder to get than usual. Ours are on the site.',
    ],
    doorProfile: [
      'Large share of custom and carriage house doors, where parts are model-specific and lead times matter',
      'Older homes with detached garages set back from the street, so opener wiring runs long',
      'Steep and curved driveways, which affects access for a full door delivery',
      'More wood doors than any other region, which changes both weight and the spring specification',
    ],
    order: 5,
  },
  {
    slug: 'brooklyn',
    name: 'Brooklyn',
    inPhrase: 'in Brooklyn',
    county: 'Kings County',
    metaTitle: 'Garage Door Repair in Brooklyn, NY | Published Prices',
    metaDescription:
      'Garage door repair in Brooklyn: Bay Ridge, Dyker Heights, Marine Park, Mill Basin and Sheepshead Bay. Spring replacement from $170 with a written estimate before any work.',
    answer:
      'Garage door repair in Brooklyn covers spring replacement from $170, cable repair from $100, opener repair from $100 and opener installation from $281. We work the neighborhoods where private garages are common, and quote in writing before starting.',
    intro: [
      'Brooklyn is a selective market for this trade. Most of the borough has no private garage at all, and then there are specific neighborhoods where nearly every house does. Bay Ridge, Dyker Heights, Marine Park, Mill Basin and the streets around Sheepshead Bay are where this work actually lives.',
      'The doors there are mostly narrow singles under the front stoop, eight or nine feet wide, sitting below the living space. Headroom is the constant constraint. A standard rail opener often will not fit, and the answer is a jackshaft mounted on the wall beside the door.',
      'Because the garage is under the house, a door that jams is not only a trapped car, it is a security problem. That is why same-day matters more here than the raw number of jobs would suggest.',
    ],
    doorProfile: [
      'Narrow single doors under the living space, typically eight to nine feet wide',
      'Very limited headroom, so wall-mounted jackshaft openers are frequently the only fit',
      'Shared driveways in the row-house blocks, which restricts truck access',
      'Coastal exposure near Sheepshead Bay and Gerritsen Beach corrodes bottom hardware quickly',
    ],
    order: 6,
  },
];

export const getRegion = (slug: string) => regions.find((r) => r.slug === slug);
