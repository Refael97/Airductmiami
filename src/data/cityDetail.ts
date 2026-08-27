/**
 * Neighborhood-level and dryer-vent-specific detail per city.
 *
 * Why this file exists, separately from cities.ts:
 *
 * The Search Console export of 26 August 2026 showed the city pages pulling
 * 10,727 impressions and 48 clicks. Deerfield Beach alone carried roughly
 * 1,100 impressions a month at average positions between 26 and 51. A page
 * sitting at position 45 on a query it is nominally built for is not being
 * beaten on links, it is being beaten on relevance: Google has looked at the
 * page and decided a competitor answers the query better.
 *
 * Two gaps explained it.
 *
 * First, the city pages named the city and the county and nothing smaller.
 * Every competitor does that. Naming the actual neighborhoods, the housing
 * stock and the failure mode particular to that place is the part that is
 * expensive to copy, and it is what a searcher in The Cove is looking for.
 *
 * Second, and larger: the dryer vent queries. "dryer vent cleaning deerfield"
 * at 318 impressions and position 48.3, "deerfield dryer vent cleaning" at 170
 * and position 50.8, "dryer vent cleaning deerfield beach" at 69 and 32.6.
 * That is roughly 557 impressions a month for one service in one city, and the
 * only page we offered was an air duct cleaning page that mentions dryer vents
 * in passing. Position 48 is what Google does with a near miss. The fix is a
 * page that is actually about the thing being searched for.
 *
 * The `dryerVent` block is therefore deliberately not filled in for every
 * city. A city page per service per city, generated from a template, is a
 * doorway pattern and Google treats it as one. A page is built here only
 * where there is either query evidence or enough genuinely distinct local
 * substance to justify it, and the copy below is written per city, not
 * interpolated from a pattern.
 */

export interface CityDetail {
  /** Real neighborhoods, districts or communities. Used on both page types. */
  neighborhoods: string[];
  /**
   * Extra hand written depth for the air duct city page, added only for the
   * cities carrying real impression volume. Bradenton was pulling 658
   * impressions a month at position 19.1 with zero clicks and a 960 word
   * page; the Spanish equivalent of the same city page ranked fifteen places
   * higher on a longer page. Depth is written per city because the thing
   * being fixed is thinness, and a shared paragraph repeated across ten
   * pages does not fix thinness.
   */
  depth?: { heading: string; body: string[] }[];
  /**
   * Present only for cities that get a dedicated dryer vent page at
   * /service-areas/{slug}/dryer-vent-cleaning/. Absence means no page.
   */
  dryerVent?: {
    /** Two or three sentences on what dryer venting is actually like here. */
    local: string[];
    /** The single failure mode that comes up most in this city. */
    common: string;
  };
}

export const cityDetail: Record<string, CityDetail> = {
  // ---- Miami-Dade ----
  miami: {
    depth: [
      {
        heading: 'Condo towers and single family homes are not the same job',
        body: [
          'Miami\'s building stock is more vertical than anywhere else in the state, and a high rise duct system has almost nothing in common with a house. In a Brickell or Edgewater tower, the air handler is in a closet, the duct runs are short, and the fresh air comes from a building system rather than from outside your own walls. The whole system can be cleaned properly in a few hours, and the improvement in a small sealed space is usually obvious immediately.',
          'In Coral Way, Coconut Grove or the older parts of Little Havana, you have an attic, long runs, and a house that breathes. Those are the systems where leaks matter, because a leak in the attic is pulling in air at 130 degrees and whatever is floating in it.',
        ],
      },
      {
        heading: 'Salt, humidity and why Miami coils grow mold',
        body: [
          'Miami holds humidity above 70 percent for a large part of the year, and the evaporator coil in a system that runs most of the day is wet more or less continuously. Wet, dark, in the airflow, with a steady supply of organic dust arriving: that is a description of ideal growing conditions, and it is why the musty smell when the air conditioning kicks on is the single most common complaint we get in this city.',
          'The smell is worth taking seriously not because it is dangerous in itself but because it is a reliable signal. It means there is biological growth on a wet surface in your system. Cleaning the coil and the drain pan removes it. Getting the indoor humidity below 60 percent is what stops it coming back.',
        ],
      },
    ],
    neighborhoods: ['Brickell', 'Coconut Grove', 'Little Havana', 'Coral Way', 'Edgewater', 'Wynwood'],
    dryerVent: {
      local: [
        'Miami splits into two completely different dryer vent problems, and which one you have depends on whether you live in a tower or a house. In a Brickell or Edgewater high rise, your dryer does not vent out a wall behind the machine. It pushes lint into a horizontal run that joins a shared riser serving every unit stacked above and below you, often with a booster fan somewhere in the middle. When that riser loads up, every apartment on the stack starts drying slowly at once, and no amount of cleaning the lint screen changes it.',
        'In the single family neighborhoods, Coral Way and Coconut Grove and the older parts of Little Havana, the vent usually leaves the laundry room, turns up into the attic, and terminates through the roof. Those runs sit in an attic that reaches 130 degrees on a July afternoon, and the lint that settles in them bakes onto the duct wall rather than blowing clear.',
      ],
      common: 'Roof terminations with the damper flap corroded open, which lets humid outside air back down the duct at night and turns loose lint into a packed crust.',
    },
  },
  'miami-beach': {
    neighborhoods: ['South Beach', 'Mid-Beach', 'North Beach', 'Sunset Islands', 'Venetian Islands'],
  },
  hialeah: {
    neighborhoods: ['West Hialeah', 'Palm Springs North', 'Amelia', 'Hialeah Acres'],
    dryerVent: {
      local: [
        'A large share of Hialeah housing was built between the late sixties and the early eighties, and the laundry hookups in those homes were often placed on an interior wall rather than an exterior one. That single decision turns what should be a four foot vent run into twenty or thirty feet with two or three elbows, and every elbow is a place lint stops moving.',
        'The multi family stock adds a second issue. Where a duplex or a small apartment building shares a wall between two laundry closets, the two vents frequently join before they exit, so one neighbour\'s blockage becomes yours.',
      ],
      common: 'Long interior runs with flexible foil duct instead of rigid metal, which sags between supports and collects lint in the low spots.',
    },
  },
  'coral-gables': {
    neighborhoods: ['Coral Gables Riviera', 'Old Cutler', 'Ponce Davis', 'Coral Bay', 'Golden Gate'],
  },
  kendall: {
    depth: [
      {
        heading: 'Kendall runs its air conditioning harder than almost anywhere in Miami-Dade',
        body: [
          'Kendall is inland, which sounds like it should mean less humidity than the coast. In practice it means less sea breeze, and less sea breeze means the air conditioning runs longer to reach the same temperature. Systems in The Hammocks and Country Walk routinely run fifteen or sixteen hours a day through August.',
          'A system running that much moves an enormous volume of air through the ductwork, and everything that air is carrying, construction dust from a neighbour\'s renovation, pollen, pet dander, drywall dust from your own ceiling, gets deposited along the way. This is the mechanism people miss: the duct does not get dirty because dirt falls into it. It gets dirty because your system is pulling several thousand cubic feet of air a minute past its surfaces.',
        ],
      },
      {
        heading: 'The townhouse and second floor question',
        body: [
          'Much of Kendall west of the turnpike is two storey townhouse construction, and two storeys introduce a problem single storey homes do not have. The upstairs is served by the same air handler as the downstairs, usually through a trunk that runs vertically inside a chase, and hot air rises regardless of what the thermostat wants.',
          'Balancing that is a duct question before it is an equipment question. If your upstairs is consistently three or four degrees warmer than downstairs, the first things worth checking are whether the upstairs supply runs are actually open, whether the return upstairs is adequate, and whether the vertical trunk has come apart inside the chase where nobody can see it. We check all three as part of the job rather than treating the system as a set of ducts to be brushed.',
        ],
      },
    ],
    neighborhoods: ['Kendall West', 'The Hammocks', 'Sunset', 'Country Walk', 'Devon-Aire', 'Three Lakes'],
    dryerVent: {
      local: [
        'Kendall is built almost entirely of eighties and nineties single family homes and townhouse communities, and in both the laundry sits in the garage or in an interior utility closet with the vent routed up into the attic. Those attic runs are the ones that matter. Kendall attics hold heat late into the evening, the duct expands and contracts every day, and joints that were taped rather than clamped work themselves loose.',
        'In the townhouse communities around The Hammocks and Country Walk, the second floor laundry is common, which puts the vent run at its longest and gives lint the most opportunity to settle before it reaches open air.',
      ],
      common: 'A disconnected joint inside the attic, blowing hot lint into the insulation instead of outside. Homeowners notice it as a laundry room that never cools down.',
    },
  },
  homestead: {
    neighborhoods: ['Keys Gate', 'Silver Palm', 'Malibu Bay', 'Waterstone'],
  },
  pinecrest: {
    neighborhoods: ['Pinecrest Village', 'Suniland', 'Evergreen', 'High Pines'],
  },
  'north-miami': {
    neighborhoods: ['Keystone Point', 'Sans Souci Estates', 'Griffing Park', 'Arch Creek'],
  },
  aventura: {
    neighborhoods: ['Williams Island', 'Aventura Lakes', 'Turnberry', 'Hidden Bay'],
    dryerVent: {
      local: [
        'Aventura is a condominium city, which means almost every dryer here vents into a shared riser rather than straight outside. Those risers run the full height of the building and are cleaned, when they are cleaned at all, by the association rather than by the unit owner. The in unit portion, the run from behind your machine to the wall connection, is yours, and it is where most of the accessible lint sits.',
        'The salt air matters more here than inland. Terminations and dampers on the ocean side corrode quickly, and a damper that no longer closes lets humid air sit in the duct overnight.',
      ],
      common: 'A crushed transition hose behind the machine, because the dryer has been pushed back tight against the wall to fit the closet.',
    },
  },

  // ---- Broward ----
  'fort-lauderdale': {
    depth: [
      {
        heading: 'Waterfront property, canal air and what it does indoors',
        body: [
          'Fort Lauderdale has more linear feet of canal frontage than almost any city in the country, and living on the water changes the air your system is working with. Humidity next to a canal is measurably higher than a few blocks inland, and it stays higher overnight when the air cools and the relative humidity climbs.',
          'For a duct system this means the hours when the air conditioning is off are the hours that matter. A system that has been running all day has cold duct surfaces, and when it shuts off and warm damp air reaches those surfaces, they sweat. Rio Vista, the Las Olas Isles and the Victoria Park canal blocks all show this pattern more than the inland neighborhoods.',
        ],
      },
      {
        heading: 'Older houses, newer systems, and the gap between them',
        body: [
          'Much of Victoria Park, Sailboat Bend and Poinsettia Heights predates central air conditioning, which means every system in those houses has been fitted after the fact and often replaced several times since. Each replacement tends to address the equipment and leave the distribution alone, so it is entirely normal here to find a two year old air handler connected to duct installed in the sixties.',
          'That combination is where we find the largest gains. The equipment is fine. The duct is leaking, restricted, or both, and the homeowner has been told repeatedly that the system is simply old.',
        ],
      },
    ],
    neighborhoods: ['Victoria Park', 'Coral Ridge', 'Rio Vista', 'Las Olas Isles', 'Sailboat Bend', 'Poinsettia Heights'],
    dryerVent: {
      local: [
        'Fort Lauderdale has an unusually wide spread of housing ages for one city, and the dryer vent tells you which era you are in. The mid century houses in Victoria Park and Poinsettia Heights were often built before a laundry room was standard, so the washer and dryer went into a converted porch or a carport bay later, and the vent was run wherever it could go rather than where it should.',
        'The waterfront properties in Rio Vista and along the Las Olas Isles bring the opposite issue. Newer construction, correct rigid duct, but a roof or soffit termination that faces salt air year round and a damper that stops sealing within a few seasons.',
      ],
      common: 'Retrofitted vent runs from a converted laundry space, with more elbows than the manufacturer allows for the length.',
    },
  },
  hollywood: {
    depth: [
      {
        heading: 'Three eras of Hollywood housing, three different duct systems',
        body: [
          'Hollywood covers more housing history than most South Florida cities, and it shows up directly in what we find. The Hollywood Lakes bungalows from the twenties and thirties were built before central air existed at all, so every duct system in them is a retrofit, routed through whatever space was available rather than designed into the structure. Those are the houses where a duct run turns up inside a closet or a dropped soffit.',
          'The fifties and sixties ranch homes in Driftwood and Boulevard Heights were built with ducting, usually in the attic, and much of that original ducting is still there. Sixty year old flex duct has a jacket that has gone brittle, and brittle jackets crack.',
          'The condominium towers east of Federal are a third case again: air handlers in closets, short runs, and a building envelope that means outside air only reaches the system through the equipment rather than through the structure.',
        ],
      },
      {
        heading: 'What salt air does to a Hollywood system',
        body: [
          'Everything within a mile or so of the beach is exposed to salt, and salt is not just a corrosion problem for the condenser outside. Air drawn in through any gap in the return path carries it, and it settles on the evaporator coil along with everything else. A coil with a salt and dust layer on it transfers heat worse and stays wet longer, which is the exact condition that grows mold.',
          'This is the honest reason coastal systems need attention more often than inland ones, and it is worth understanding rather than being told your system is dangerous. A Hollywood beachside condo on a three year cleaning cycle is not being over serviced. The same unit in Weston probably would be.',
        ],
      },
    ],
    neighborhoods: ['Hollywood Lakes', 'Emerald Hills', 'Hollywood Hills', 'Beverly Hills', 'Boulevard Heights', 'Driftwood'],
    dryerVent: {
      local: [
        'Hollywood runs from beachfront condominium towers to fifties bungalows in Hollywood Lakes to seventies ranch homes in Driftwood and Boulevard Heights, and the vent problem changes with each. The bungalows almost always have a short run straight through an exterior wall, which is the best case, except that the exterior hood is usually the original one and the flap has long since stopped moving.',
        'East of Federal, the older condominium buildings have shared risers with booster fans, and a booster fan that has failed is invisible from inside the apartment. The only symptom is that everything takes two cycles.',
      ],
      common: 'A painted over exterior vent hood. Repainting the house sealed the flap shut, and the dryer has been fighting it ever since.',
    },
  },
  'pembroke-pines': {
    depth: [
      {
        heading: 'Long duct runs are the defining Pembroke Pines problem',
        body: [
          'Pembroke Pines expanded west in large planned communities, and the floor plans that came with that expansion are wide. Chapel Trail, Pembroke Falls and Silver Lakes are full of houses where the air handler sits in a garage or a utility room at one end and the furthest bedroom is sixty or seventy feet away.',
          'Every foot of that run is duct sitting in an attic that reaches 130 degrees in July. Air leaving the handler at 55 degrees does not arrive at 55 degrees at the far end, and the gap between the two is why so many houses here have one bedroom that is always warmer than the rest. Homeowners usually assume the system is undersized. Frequently the system is fine and the duct is losing the cooling on the way.',
          'Duct cleaning does not fix an undersized system, and we will tell you if that is what you have. What it does fix is the part of the loss caused by restriction and by leaks that have opened up in a run that long.',
        ],
      },
      {
        heading: 'Century Village and the condominium side',
        body: [
          'The Century Village community in Pembroke Pines has the same characteristics as its Deerfield counterpart: compact systems, short runs, shared walls and buildings old enough that the original ductwork is at the end of its service life rather than the middle. In a unit like that the whole system can be cleaned properly in a morning, and the result is usually more noticeable than in a large house simply because there is less of it to dilute the improvement.',
        ],
      },
    ],
    neighborhoods: ['Chapel Trail', 'Pembroke Falls', 'Silver Lakes', 'Towngate', 'Century Village'],
    dryerVent: {
      local: [
        'Pembroke Pines grew west in large planned communities, and in Chapel Trail, Pembroke Falls and Silver Lakes the standard build puts the laundry in an interior room with the vent taken up through the attic and out the roof. That is a long run by design, frequently over twenty five feet once the elbows are counted, and it is at the limit of what a domestic dryer can push before lint starts dropping out of the airstream.',
        'Century Village adds the condominium version of the same problem, with stacked units feeding a common riser and an in unit connection that is rarely inspected.',
      ],
      common: 'Long attic runs that exceed the manufacturer\'s maximum equivalent length, so the vent clogs again within a year of being cleaned unless the routing is corrected.',
    },
  },
  miramar: {
    neighborhoods: ['Historic Miramar', 'Riviera Isles', 'Vizcaya', 'Silver Lakes', 'Monarch Lakes'],
    dryerVent: {
      local: [
        'Miramar is two cities in one for this purpose. East of University, Historic Miramar is fifties and sixties construction with short exterior wall vents and original hoods. West of the turnpike, Riviera Isles and Monarch Lakes are two thousands construction with two storey homes, upstairs laundry rooms, and vent runs that travel the full depth of the house before reaching the roof.',
        'The newer homes look like the safer case and often are not. A twenty foot vertical run holds lint in a way a four foot horizontal one never does.',
      ],
      common: 'Upstairs laundry rooms venting through a long vertical run, where lint falls back down the duct every time the dryer stops.',
    },
  },
  'pompano-beach': {
    neighborhoods: ['Old Pompano', 'Cypress Bend', 'Palm Aire', 'Harbor Village', 'Cresthaven'],
    dryerVent: {
      local: [
        'Pompano Beach has one of the densest concentrations of mid rise condominium buildings in Broward, and Cypress Bend and Palm Aire between them account for thousands of units on shared vent risers. In a building like that, the association handles the riser and the owner handles everything from the machine to the wall, and the boundary between the two is where problems go unowned for years.',
        'The single family pockets in Old Pompano and Cresthaven are older, smaller houses where the vent usually goes straight out the back wall, which is the easiest configuration to service and the one most often ignored because it looks fine from the outside.',
      ],
      common: 'Lint packed in the last three feet before the exterior hood, where the duct cools and the moisture in the exhaust condenses.',
    },
  },
  plantation: {
    neighborhoods: ['Plantation Acres', 'Jacaranda', 'Plantation Isles', 'Central Park', 'Hawaiian Gardens'],
    dryerVent: {
      local: [
        'Plantation is largely seventies and eighties single family construction on generous lots, and the houses are wide rather than tall. A wide single storey house with the laundry near the middle produces exactly the vent run you do not want: long, horizontal, in the attic, with a roof termination at the far end.',
        'Plantation Acres adds larger properties still, and on the bigger houses the run can pass thirty feet. At that length the dryer is no longer moving air fast enough to carry lint, and the duct fills from the far end backwards.',
      ],
      common: 'Horizontal attic runs with a slight sag between joists, which turns each low point into a lint trap.',
    },
  },
  davie: {
    neighborhoods: ['Forest Ridge', 'Ivanhoe', 'Long Lake Estates', 'Shenandoah', 'Orange Park'],
  },
  sunrise: {
    depth: [
      {
        heading: 'Sunrise has some of the oldest housing in west Broward',
        body: [
          'Sunrise Lakes and Sunrise Golf Village were built in the seventies, and a great deal of that housing is low rise condominium and villa construction that has never had a significant HVAC overhaul. The air handlers have been replaced, usually more than once, but the ductwork they connect to is frequently original.',
          'That matters because a new, more efficient air handler moves air differently than the one the duct was sized for. Put a modern variable speed system on fifty year old duct and you often get noise, uneven cooling and pressure problems that look like an equipment fault and are not. We see homeowners who have had the equipment replaced twice chasing a problem that was in the duct the whole time.',
        ],
      },
      {
        heading: 'The furnace question, in a place that barely has winters',
        body: [
          'Sunrise generates a steady trickle of searches for furnace cleaning, which is worth addressing plainly because Florida confuses the terminology. Very few homes here have a gas furnace. What most people mean is the air handler, the indoor half of the system, which contains the blower, the evaporator coil and in many cases an electric heat strip for the handful of cold nights a year.',
          'That heat strip is the part worth thinking about. It sits in the airstream, it is almost never used, and dust settles on it for eleven months of the year. The first genuinely cold night in January is when that dust burns off, which is the source of the burning smell that generates a wave of calls every winter. Cleaning the air handler removes it. It is a real service, it is just not a furnace.',
        ],
      },
    ],
    neighborhoods: ['Sunrise Lakes', 'Welleby', 'Sawgrass', 'Bonaventure', 'Sunrise Golf Village'],
    dryerVent: {
      local: [
        'Sunrise Lakes and Sunrise Golf Village are among the oldest housing in west Broward, and a great deal of it is low rise condominium and villa construction from the seventies. In those buildings the dryer vent frequently runs through the attic space above a shared corridor before terminating at a gable end, and that shared attic is not anybody\'s obvious responsibility.',
        'Welleby and Bonaventure are newer single family and townhouse stock with conventional roof terminations, but the same Florida attic heat applies: the duct sits in an unconditioned space that runs well above a hundred degrees for six months of the year.',
      ],
      common: 'Bird and wasp nests built into gable end terminations, which block the flap completely and are the most common single cause of a dryer that suddenly stopped drying.',
    },
  },
  'coral-springs': {
    neighborhoods: ['Eagle Trace', 'Ramblewood', 'Coral Creek', 'Turtle Run', 'Westchester'],
    dryerVent: {
      local: [
        'Coral Springs was built fast and to a pattern, which is useful here because it means the same vent configuration repeats across whole neighborhoods. In Ramblewood and Westchester the laundry sits off the garage with a short run to a side wall. In the later communities, Eagle Trace and Turtle Run, the two storey plans put the laundry upstairs and vent through the roof.',
        'The city\'s tree canopy is heavier than most of Broward, and roof terminations under mature trees collect leaf debris on top of the lint problem.',
      ],
      common: 'Roof vent caps obstructed from above by leaf litter and seed debris, so the duct is clear but the exit is not.',
    },
  },
  'coconut-creek': {
    neighborhoods: ['Winston Park', 'Wynmoor', 'Regency Lakes', 'Cocobay', 'Township'],
  },
  'deerfield-beach': {
    depth: [
      {
        heading: 'Deerfield Beach: condominium systems and coastal systems are different jobs',
        body: [
          'Deerfield splits cleanly in two, and which half you live in determines almost everything about what your duct system needs. West of the interstate, Century Village and the communities around it are low rise condominium buildings from the seventies with compact air handlers in a closet, short duct runs, and neighbours on every side. Those systems are small enough that a single blocked return affects the whole unit within days, and the air handler closet is often shared with the water heater, which adds heat and humidity to a space that should have neither.',
          'East of Federal Highway, The Cove and the Hillsboro side are single family homes close enough to the Atlantic that salt reaches the roof, the exterior equipment and anything with a metal flap on it. Salt does two things to a duct system. It corrodes the outdoor components, and more importantly it means the outside air being drawn in through any leak is carrying salt as well as moisture.',
        ],
      },
      {
        heading: 'The Century Village pattern',
        body: [
          'We see the same sequence in Century Village units often enough to describe it as a pattern. The unit has not had the ducts touched since it was built. The owner notices the air conditioning is not keeping up and calls for service. The technician finds the coil restricted, cleans the coil, and the system runs better for a season.',
          'The reason it comes back is that the coil was not the source. A coil gets dirty because unfiltered air is reaching it, and in these buildings that is almost always because the return duct or the filter housing is not sealing. Clean the coil and leave the return, and you have bought yourself eight months.',
          'This is worth knowing before you book anyone, because it changes what you should be asking for. A duct cleaning that does not include an inspection of the return path and the filter seal is not solving the problem you actually have.',
        ],
      },
    ],
    neighborhoods: ['The Cove', 'Deer Creek', 'Century Village', 'Independence Bay', 'Crystal Lake', 'Hillsboro'],
    dryerVent: {
      local: [
        'Deerfield Beach has more dryer vent work per household than almost anywhere else we serve, and the reason is Century Village. Several thousand units, built in the seventies, stacked in low rise buildings, with vent runs that were laid out when nobody expected a dryer to run four loads on a Sunday. Those runs are short but they are shared, and in a stacked configuration the unit at the bottom of the riser inherits every unit above it.',
        'East of Federal, The Cove and the Hillsboro side are single family homes close enough to the water that salt reaches the roof and wall terminations. Dampers seize open, humid night air travels back down the duct, and the lint that was loose in the morning is a damp mat by the following week.',
        'Deer Creek, Independence Bay and Crystal Lake are the newer end of the city, mostly two storey homes and townhouses with upstairs laundry and long vertical runs to the roof.',
      ],
      common: 'Seized damper flaps on coastal terminations. The dryer exhausts fine but nothing stops outside humidity coming back in, and the duct never dries out between loads.',
    },
  },

  // ---- Palm Beach ----
  'boca-raton': {
    neighborhoods: ['Boca Del Mar', 'Broken Sound', 'Sandalfoot Cove', 'Mizner Park', 'Boca Woods', 'Millpond'],
    dryerVent: {
      local: [
        'Boca Raton is dominated by association managed communities, and that shapes the work more than the housing age does. In Boca Del Mar, Broken Sound and the country club communities, the vent run is usually correct as built, rigid metal, properly clamped, sensible length. What goes wrong is time. Nobody owns the maintenance, twelve years pass, and a correctly built duct is just as blocked as a badly built one.',
        'The condominium buildings along the coast and around Mizner Park bring shared risers, and Sandalfoot Cove at the western edge brings older, smaller units where the run is short but the duct is often the original flexible foil.',
      ],
      common: 'Correctly installed ducts that have simply never been cleaned, where the lint layer has reduced a four inch duct to an inch and a half of usable diameter.',
    },
  },
  'delray-beach': {
    neighborhoods: ['Pineapple Grove', 'Lake Ida', 'Delray Shores', 'Kings Point', 'Tropic Isle'],
    dryerVent: {
      local: [
        'Kings Point alone accounts for a large share of Delray dryer vent work. It is a big fifty five plus community of low rise buildings and villas from the seventies and eighties, and the vent configurations there are short, shared, and old. In a community that size the same three or four failure patterns repeat building after building.',
        'The single family side, Lake Ida and Delray Shores, is mid century construction with the laundry usually in the garage and a short run to a side wall. Tropic Isle and the barrier island properties add salt exposure to the same picture.',
      ],
      common: 'Original flexible foil transition duct behind the machine, crushed where the dryer sits against the wall, which chokes the run before it has even left the room.',
    },
  },
  'boynton-beach': {
    neighborhoods: ['Hunters Run', 'Leisureville', 'Quantum Village', 'Chapel Hill', 'Renaissance Commons'],
  },
  'west-palm-beach': {
    neighborhoods: ['El Cid', 'Flamingo Park', 'Northwood', 'Ibis', 'Andros Isle', 'SoSo'],
    dryerVent: {
      local: [
        'The historic districts, El Cid, Flamingo Park and Northwood, are twenties and thirties houses where the laundry was added generations after the house was built. Vent runs in those homes were improvised, and we regularly find them routed through a crawl space, a closet, or in a few cases terminating into an attic with no exit at all.',
        'Out west, Ibis and Andros Isle are modern planned communities with two storey homes, upstairs laundry rooms and long roof runs. Different century, same physics: the longer the run, the more lint falls out of the air before it gets outside.',
      ],
      common: 'In the historic districts, vents that terminate inside the structure rather than outside it, which is both a fire risk and the reason the laundry room feels damp.',
    },
  },

  // ---- Tampa Bay ----
  tampa: {
    neighborhoods: ['South Tampa', 'Hyde Park', 'Seminole Heights', 'Westchase', 'Carrollwood', 'New Tampa'],
    dryerVent: {
      local: [
        'Tampa\'s older bungalow districts, Seminole Heights and parts of Hyde Park, are raised houses on piers, and that changes the vent route entirely. Instead of going up into an attic, the run often drops into the crawl space and travels under the floor, where it is out of sight, unsupported, and frequently damaged by anything that has been under there.',
        'Westchase, Carrollwood and New Tampa are conventional slab construction with attic runs and roof terminations, the same configuration as most of South Florida, with the same attic heat problem.',
      ],
      common: 'Crawl space runs that have separated at a joint, discharging warm damp lint under the house instead of outside.',
    },
  },
  'st-petersburg': {
    neighborhoods: ['Old Northeast', 'Historic Kenwood', 'Snell Isle', 'Jungle Terrace', 'Shore Acres'],
  },
  clearwater: {
    neighborhoods: ['Countryside', 'Island Estates', 'Clearwater Beach', 'Feather Sound', 'Sand Key'],
  },

  // ---- Central Florida ----
  orlando: {
    neighborhoods: ['Baldwin Park', 'College Park', 'Dr. Phillips', 'Lake Nona', 'Conway', 'Delaney Park'],
    dryerVent: {
      local: [
        'Orlando has less salt air than the coasts and more pollen, and the pollen matters. Oak and pine load the outside air heavily in spring, and an exterior vent hood that sits at ground level collects that debris on the outside of the flap while lint builds on the inside.',
        'The newer communities, Lake Nona and much of Dr. Phillips, are two storey homes with second floor laundry rooms. College Park and Delaney Park are older single storey houses where the run is shorter but the duct is often original.',
      ],
      common: 'Ground level exterior hoods blocked from outside by pollen, mulch and landscaping that has grown up around them.',
    },
  },
  kissimmee: {
    neighborhoods: ['Celebration', 'Buenaventura Lakes', 'Poinciana', 'Kissimmee Bay'],
  },
  'winter-park': {
    neighborhoods: ['Hannibal Square', 'Windsong', 'Orwin Manor', 'Lake Killarney'],
  },
  lakeland: {
    neighborhoods: ['Lake Morton', 'Dixieland', 'Grasslands', 'Christina'],
  },
  jacksonville: {
    neighborhoods: ['Riverside', 'San Marco', 'Mandarin', 'Ortega', 'Southside', 'Avondale'],
  },

  // ---- Southwest Florida ----
  'fort-myers': {
    neighborhoods: ['McGregor', 'Whiskey Creek', 'Gateway', 'Pelican Preserve', 'Iona'],
  },
  'cape-coral': {
    neighborhoods: ['Cape Harbour', 'Pelican', 'Tarpon Point', 'Sandoval', 'Burnt Store'],
  },
  naples: {
    neighborhoods: ['Old Naples', 'Park Shore', 'Pelican Bay', 'Golden Gate', 'Vineyards'],
  },
  'bonita-springs': {
    neighborhoods: ['Bonita Bay', 'Pelican Landing', 'Spanish Wells', 'Bonita Farms'],
  },
  sarasota: {
    neighborhoods: ['Downtown Sarasota', 'Gulf Gate', 'Palmer Ranch', 'Siesta Key', 'Arlington Park'],
  },
  bradenton: {
    depth: [
      {
        heading: 'Why Bradenton ductwork loads up faster than it should',
        body: [
          'Manatee County sits between the Gulf and the Braden and Manatee rivers, and the air here holds moisture for most of the year. That matters inside the ductwork for a specific reason: the supply air leaving your air handler is cold, the metal or flex duct carrying it runs through an attic or a crawl space that is not, and the difference between those two temperatures is where condensation forms. Dust that would otherwise blow straight through sticks to a damp surface and stays.',
          'Bradenton\'s housing stock makes this worse than average. A large share of West Bradenton, Bayshore Gardens and Samoset was built between the fifties and the seventies, before duct insulation standards were what they are now, and a good deal of the original ductwork is still in service. Older flex duct with a degraded outer jacket sweats far more readily than a modern equivalent.',
          'The practical effect is that a Bradenton house on its original system will show visible dust around the supply registers within a couple of years of a cleaning, while the same house with sealed, insulated duct will go five. If you are seeing grey fanning marks on the ceiling around your vents, that is not dirt from the room settling. That is your duct system leaking conditioned air into the attic and pulling attic air back in.',
        ],
      },
      {
        heading: 'What we usually find in Bradenton homes',
        body: [
          'Three things come up more here than anywhere else on the Gulf coast we serve. The first is disconnected returns. In houses of this era the return air path is often the wall cavity or the floor joist bay itself rather than a sealed duct, and once the panel sealing it has come loose the system is drawing air directly from the crawl space or the wall.',
          'The second is coil mold in systems that run continuously through summer. Manatee County humidity keeps the evaporator coil wet, and a wet coil in the dark with a constant supply of dust is where mold grows first, before it appears anywhere in the ducts.',
          'The third is the seasonal one. A lot of Bradenton properties are part year residences, and a house closed up for four months with the thermostat at 80 is a house with a duct system that never dries out. Returning owners almost always notice the smell before they notice anything else.',
        ],
      },
    ],
    neighborhoods: ['Palma Sola', 'Bayshore Gardens', 'West Bradenton', 'Village of the Arts', 'Braden River', 'Samoset'],
    dryerVent: {
      local: [
        'Bradenton\'s housing skews older than the Gulf coast communities around it, and West Bradenton and Bayshore Gardens in particular are full of fifties and sixties single storey homes where the laundry sits in a carport, a utility room or the garage. Those are short vent runs, four to eight feet through an exterior wall, and short runs are the ones people assume are fine.',
        'They are usually not. A short run means the duct never gets warm enough along its whole length to keep moisture moving, so the last foot before the hood stays damp and lint sticks to it rather than passing through.',
        'Palma Sola and the properties nearer the bay add salt exposure, and Braden River on the east side is newer two storey construction with the long upstairs runs that come with it.',
      ],
      common: 'Exterior wall hoods on short runs where the last twelve inches have packed solid, which looks like nothing from inside the house.',
    },
  },
};

/** Detail for a city, or an empty record if none has been written yet. */
export function detailFor(slug: string): CityDetail {
  return cityDetail[slug] ?? { neighborhoods: [] };
}

/** Slugs that have a dedicated dryer vent page. Drives getStaticPaths. */
export const dryerVentCities = Object.keys(cityDetail).filter((s) => cityDetail[s].dryerVent);
