/**
 * Wave 6, 16 November 2026. Two more depth blocks per city for the pages the
 * owner's Search Console export shows at positions 10 to 30 with no clicks:
 * Boca Raton, West Palm Beach, Fort Lauderdale, Pompano Beach, Pembroke Pines,
 * Miami Beach, Boynton Beach, Delray Beach, Coral Springs, Lake Worth Beach,
 * Bonita Springs and Deerfield Beach in English; six of them in Spanish.
 * Each heading carries the city's searched phrase. Rendered after the blocks
 * in cityDetail.ts and cityDepthExtra.ts / cityDepthEsExtra.ts.
 * Plain text only. Published prices only.
 */

export const cityDepthWave6: Record<string, { heading: string; body: string[] }[]> = {
/*
 * Wave 6 (16 November 2026), English, part A: two more depth blocks for Boca
 * Raton, West Palm Beach, Fort Lauderdale, Pompano Beach, Pembroke Pines and
 * Miami Beach, answering the Search Console queries those pages are shown for
 * at positions 12 to 30 with no clicks: "air duct cleaning {city}", "duct
 * cleaning {city}", "air duct cleaning services {city}", "vent cleaning boca
 * raton", "residential air duct cleaning west palm beach fl", "air duct cleaner
 * west palm beach fl", "hvac duct cleaning fort lauderdale / pembroke pines",
 * "ac duct cleaning pembroke pines", and "dryer vent cleaning {fort
 * lauderdale, pompano beach, miami beach}". West Palm Beach furnace cleaning
 * is already answered in the existing extra, so it is not repeated. Published
 * prices only. Written per city; no paragraph is shared between pages.
 * NOTE: boca-raton, west-palm-beach, pompano-beach and miami-beach already
 * have keys in cityDepthExtra; append these blocks to those arrays.
 */

  "boca-raton": [
    {
      heading: "Air duct cleaning services in Boca Raton: what is included on the day",
      body: [
        "Air duct cleaning services in Boca Raton are quoted per system, $300 to $600, and the useful question is what that figure buys. On our visits it buys the whole air path: every supply run and return, the trunks and plenums, the blower wheel and its housing, the face of the evaporator coil, and every grille taken down and washed. The system is held under negative air from a collection unit connected at the plenum, the NADCA source-removal method, so loosened dust travels to the machine instead of into the room.",
        "Air duct cleaning in Boca Raton often starts at a gatehouse. In Boca West, Broken Sound, Woodfield Country Club and the other gated communities, the guard needs our names on your visitor list for the day, and some communities set hours for contractors. A condominium near Mizner Park or along A1A usually wants a certificate of insurance on file and the service elevator reserved. Sorting that out the day before keeps the morning from starting late.",
        "Inside, the house sets the pace. A single system home with eight to fourteen registers takes two to four hours. Many of the newer houses west of Military Trail have living room ceilings of twelve feet or more, which means taller ladders and a slower pass at each grille, and an air handler on an attic platform adds time in the heat. You get camera images of the same spots before and after, so you can see the result rather than take it on trust.",
        "Anything beyond the cleaning is quoted on its own line before the visit is booked. Sanitizing, at $75 to $200, is added only when there is a reason for it. Growth found on the coil or inside the ducts is air duct mold removal, priced on severity from $500 to $3,000.",
      ],
    },
    {
      heading: "Vent cleaning in Boca Raton, FL: the grey shadow around the ceiling grilles",
      body: [
        "Vent cleaning is what most Boca Raton owners search for when a grey shadow spreads across the ceiling around a supply grille, or a dark line appears along the edge of its frame. It shows most on the white ceilings of the larger houses, and the grille itself is rarely the whole story. Part of it is fine dust carried in the supply air and pressed against the paint as the air fans out. The rest usually comes from a gap between the duct boot and the drywall, where air moves between the room and the attic past the edge of the frame and leaves its dust behind.",
        "Duct cleaning in Boca Raton deals with the first cause, and the same visit deals with the second. When each grille comes off to be washed, we look at the seam between the boot and the ceiling, and where there is a gap we seal it with mastic before the grille goes back. In houses where the drywall was cut generously around the boot and the grille trim was expected to hide it, that gap is a common find.",
        "Candles, and a fireplace lit a few nights each winter, add soot that settles in exactly the same pattern. If the shadow returns within weeks of a cleaning, it is worth asking what is burning in the house before paying for another one. Painting over the stain without dealing with either cause only buys a season.",
        "Returns get the same attention. In a Boca condominium the return is usually one large grille with the filter behind it, and in a two storey house there is often one on each floor. A vent cleaning in Boca Raton is therefore the full duct cleaning, $300 to $600 per system, with every supply and return grille removed, washed and refitted and the boots behind them cleaned by hand.",
      ],
    },
  ],

  "west-palm-beach": [
    {
      heading: "Residential air duct cleaning in West Palm Beach: cost by type of home",
      body: [
        "Residential air duct cleaning in West Palm Beach is $300 to $600 per system, and the kind of home decides most of where a job falls in that range. We give you the figure before booking, from a short description: where the air handler sits, how many supply and return grilles there are, and roughly when the system was last opened.",
        "The bottom of the range is a townhouse, a villa or a condominium apartment. One air handler in a closet, a return in the hallway and ten or fewer short supply runs is a morning's work, and the time goes mostly into the blower wheel and the coil rather than the ducts themselves.",
        "The older single family streets land in the middle even when the house is small. In Grandview Heights, Prospect Park and Northwood Hills the houses were finished long before anyone planned a duct system for them, so the runs that were added later are tucked into tight attics, closets and soffits. Reaching every boot in a house like that is slower work than the register count suggests, and the price reflects the access rather than the square footage.",
        "The top of the range is a house that has gone many years without a cleaning, one that was renovated with the system running, or a larger home with a long register count. A house with two air handlers is two systems, each priced on its own. Sanitizing at $75 to $200 is added only when there is a reason for it, and growth on the coil or inside the ducts is quoted separately as air duct mold removal, from $500 to $3,000.",
      ],
    },
    {
      heading: "Hiring an air duct cleaner in West Palm Beach, FL: five questions to ask first",
      body: [
        "An air duct cleaner in West Palm Beach, FL should be able to answer five questions on the phone, before anyone parks in your driveway, and the answers tell you more than any advertisement. The first is the price: per system, stated before booking, with anything extra on its own line. Ours is $300 to $600 per system.",
        "Air duct cleaning services in West Palm Beach also differ in method, which is the second question. Ask where the vacuum connects. Source removal, the NADCA method, connects a collection unit at the plenum or the main trunk and holds the whole system under suction while each run is worked. A vacuum held at a register reaches the first few feet of a branch that may run twenty feet or more across the attic.",
        "Third, ask whether the blower wheel and the face of the coil are part of the job. In this humidity the blower wheel is often the dirtiest part of the system, and clean ducts fed by a dirty wheel are dusty again within weeks. Fourth, ask for photos of the same spots before and after. Fifth, if you live in a condominium on Flagler Drive or in a gated community out west, ask whether the company will send a certificate of insurance to the association, since most boards want one before work starts in a unit.",
        "Duct cleaning in West Palm Beach that passes those five questions is worth booking. A whole house price far below the cost of cleaning one system properly, a sanitizer added to every job, or mold found on every call deserves a second look. We are insured, we answer all five before booking, and we would rather you ask than take our word for it.",
      ],
    },
  ],

  "fort-lauderdale": [
    {
      heading: "Air duct cleaning in Fort Lauderdale: cost for a beach condo, a ranch house or a canal home",
      body: [
        "Air duct cleaning in Fort Lauderdale is $300 to $600 per system, the same figure anywhere in the city, and what moves a home within it is the building rather than the address. You get the number before booking, after a few questions about where the air handler sits and how many grilles the home has.",
        "The condominium towers along Galt Ocean Mile and the beach sit at the bottom. A closet air handler, a hallway return and a handful of short supply runs is a morning's work, and much of that morning goes into the coil and the blower, which take the salt first a block from the ocean. The association's rules on the service elevator and working hours set the start time, and a portable collection unit comes up in the elevator rather than hose being run from the street.",
        "The single storey ranch houses of Imperial Point, Coral Ridge Country Club Estates and the older streets west of Federal Highway land in the middle. Most were built in the fifties and sixties with the air handler in a garage or utility room and the ducts in a low attic, and getting a hose and a technician to every boot in that space takes longer than the register count suggests.",
        "Waterfront houses on the Las Olas Isles, in Rio Vista and along the canals off Bayview Drive are more often rebuilt two storey homes with two air handlers, and each system is priced on its own. When the camera finds growth on the coil or in the ducts, which is more likely in a canal house closed up for the summer, that is air duct mold removal at $500 to $3,000, quoted separately. Sanitizing, at $75 to $200, is added only when there is a reason for it.",
      ],
    },
    {
      heading: "Duct cleaning in Fort Lauderdale, and dryer vent cleaning on the same visit",
      body: [
        "Duct cleaning in Fort Lauderdale often turns up a problem that is not in the ducts at all: lint. In the ranch houses on the north side of the city, around Imperial Point, Coral Ridge and Lake Ridge, the air handler frequently shares a garage or a utility room with the washer and dryer. When the transition hose behind the dryer is torn or has slipped off its collar, every load blows warm, damp, lint heavy air into that room, and the air handler cabinet and its return draw it straight in.",
        "HVAC duct cleaning in Fort Lauderdale shows the result plainly. The lint is on the blower wheel and matted into the face of the coil, where it holds water and grows a film. Cleaning the wheel and the coil removes it, but leaving the dryer connection as it is puts it back within months. So when the air handler and the dryer share a room, we look at both and tell you what we found on each.",
        "Dryer vent cleaning in Fort Lauderdale, FL is its own line at $100 to $200, and when it is booked alongside our air duct cleaning services it is done on the same visit, usually adding 45 to 90 minutes. It covers the transition, the run through the wall or the attic and the hood outside, with the airflow checked at the end. If the transition is foil or plastic, or the run is crushed, replacing it is dryer vent repair at $200 to $600, quoted before any work starts.",
        "The signs worth mentioning when you call are the same complaint seen from two sides: clothes taking two cycles, a laundry room that stays warm and humid, lint on the floor behind the dryer, and a dusty smell from the air handler next to it.",
      ],
    },
  ],

  "pompano-beach": [
    {
      heading: "Air duct cleaning in Pompano Beach: how long it takes and what to expect",
      body: [
        "Air duct cleaning in Pompano Beach takes two to four hours for a single system house and less for most condominium apartments, and the time goes where the system is hardest to reach rather than where it is dirtiest. A Palm Aire apartment with a closet air handler and short runs is usually finished in a morning. A Pompano Highlands or Cresthaven house with its ducts spread across the attic takes the longer end, and a house with two systems takes most of the day.",
        "How the equipment gets in depends on the building. At a house, the collection unit usually stays in the driveway with hose run through the garage to the air handler. In a mid rise, where hose from the street cannot reach, a portable unit comes up in the elevator and connects at the plenum inside the closet. Either way the whole system is held under negative air, every register is sealed, and each run is worked back toward the machine one at a time before the blower wheel and coil face are cleaned and the grilles are washed and refitted.",
        "Duct cleaning in Pompano Beach asks little of you beforehand. Clear the air handler closet or the path to the attic hatch, move boxes and furniture off the grilles, and let the management office know if your building keeps a contractor list. The collection unit is about as loud as a shop vacuum for the whole visit, so it is not a good morning for calls in the next room.",
        "The price, $300 to $600 per system, is set before the day. If the camera shows something that changes the job, such as growth on the coil or a run that has come apart in the attic, we stop, show you the images and give you the new figure on its own line before going further.",
      ],
    },
    {
      heading: "Dryer vent cleaning in Pompano Beach: houses, villas and condo units",
      body: [
        "Dryer vent cleaning in Pompano Beach is $100 to $200 and takes 45 to 90 minutes, and the route the lint takes depends on the kind of home. On the single family streets of Pompano Highlands and Kendall Green, the dryer usually sits in the garage or a utility room on an outside wall, and the vent passes through the block to a hood on the side or back of the house.",
        "Those wall hoods have a local enemy, which is the landscaping. A hedge or a row of crotons planted along the side of the house grows over the hood within a few seasons, and the damper flap can no longer open all the way. Irrigation spray hitting the hood every morning turns the lint at its mouth wet and sticky. A hood you cannot see from the yard is the first thing worth checking.",
        "In the villas and the older condominium buildings, the in unit run is short but usually built from whatever fit the laundry closet, often a foil accordion hose bent hard behind a stacked washer and dryer. We pull the machine out, clean the run to the wall or the building connection, and check the airflow before it goes back. Replacing a crushed or foil transition with a listed one is dryer vent repair, quoted within the $200 to $600 range before we touch it.",
        "The signs that it is time: towels needing a second cycle, the top of the dryer hot to the touch, a laundry room that stays humid after a load, or a smell of hot lint. A dryer pushing against a blocked vent runs longer and hotter on every load, which is both the fire risk and a power bill that creeps up.",
      ],
    },
  ],

  "pembroke-pines": [
    {
      heading: "Air duct cleaning in Pembroke Pines: what it costs from Century Village to Silver Lakes",
      body: [
        "Air duct cleaning in Pembroke Pines is $300 to $600 per system, and the city's housing covers the whole of that range. We quote it before booking from where the air handler sits, how many grilles there are and roughly when the home was built, and we tell you which end of the range it should land on before anyone arrives.",
        "A Century Village apartment sits at the bottom. One air handler in a closet, a return in the hallway and short runs to the living room and one or two bedrooms is usually a morning's work. The community has its own rules on contractor access and hours, and the visit is scheduled inside them.",
        "The single storey houses in Pembroke Lakes and the older neighborhoods on the east side of the city land in the middle. They run one system, usually with the air handler in the garage, and the ducts cross an attic that is easy enough to work in. Buildup and the number of grilles are what move the figure there.",
        "The top of the range is the larger house out west. In Chapel Trail, Silver Lakes and Pembroke Falls, the long runs to the far bedrooms mean more duct in each system and more time on each run, and the two storey models often have a second air handler, which is priced as its own system. Sanitizing at $75 to $200 is added only when the camera gives a reason for it, and growth on the coil or inside the ducts is quoted separately as air duct mold removal, from $500 to $3,000.",
      ],
    },
    {
      heading: "HVAC duct cleaning in Pembroke Pines: starting with the air handler in the garage",
      body: [
        "HVAC duct cleaning in Pembroke Pines usually has to start in the garage, because that is where most of the city's air handlers are. In the subdivisions built from the eighties onward, the unit stands on a raised platform in a corner of the garage or in a small closet off it, and in many houses the platform itself is the return: a box framed under the air handler, with the return grille cut into its side or into the wall of the house.",
        "AC duct cleaning in Pembroke Pines that skips that platform misses the most common leak in the house. A return box framed from wood and drywall rarely stays sealed for long, and once its seams open the system pulls garage air every time it runs: dust off the floor, fumes from the car, grass and fertilizer from the mower, and heat well above 100 degrees on a summer afternoon. That air reaches the coil first and every room after it.",
        "So duct cleaning in Pembroke Pines, as we do it, includes the return platform along with the supply ducts. The inside of the return box is cleaned, the blower wheel and the coil face are cleaned, and the seams of the platform and the cabinet are checked by eye and by camera. Where they are open you see the photos, and sealing them is quoted before it is done.",
        "The garage is also where the filter is easiest to forget. When it sits in the platform grille, it is out of sight behind the car and the bicycles, and a clogged filter on a garage system pulls even harder through every gap. A filter you can reach without moving anything, and a reminder on your phone, do more between cleanings than any service we sell.",
      ],
    },
  ],

  "miami-beach": [
    {
      heading: "Air duct cleaning in Miami Beach condos: how long it takes and what is included",
      body: [
        "Air duct cleaning in Miami Beach is mostly condominium work, and in a typical tower unit it takes a morning rather than a day. The air handler is in a closet, the return grille is in the hallway and the supply runs above the dropped ceilings are short. What takes the time is reaching the unit, so the elevator booking and the work window are agreed with the management office before the day.",
        "A truck mounted unit cannot reach a fifteenth floor, so in the towers along Collins Avenue and Indian Creek Drive a portable collection unit with HEPA filtration comes up in the service elevator and connects at the plenum inside the closet. The whole system is held under negative pressure, the NADCA source-removal method, and each supply run is worked back toward it in turn.",
        "What the $300 to $600 for one system includes: every supply run and the return, the plenum, the blower wheel and its housing, the face of the coil, every grille taken down and washed, and photos of the same spots before and after. In Miami Beach units the coil and the blower usually carry more than the ducts do, so they get the most time. Renovated units often have new floors and millwork, so drop cloths go down at the closet and under each grille.",
        "The best times to book it are before a seasonal owner comes back, so the unit does not open to a closed up smell, after any renovation done with the system running, and whenever dust is back on the furniture within days of cleaning. In the walk ups around Flamingo Park, where the air handler may be squeezed into a soffit or a hall closet, access is tighter and the visit runs longer.",
      ],
    },
    {
      heading: "Dryer vent cleaning in Miami Beach high rises and condos",
      body: [
        "Dryer vent cleaning in Miami Beach, FL is usually condominium work, and it starts with a laundry closet built to the minimum size. In many towers along Collins Avenue and in the newer buildings at the north end, the washer and dryer are stacked in a hall closet with a few inches between the back of the dryer and the wall, and the connection to the building exhaust sits behind them where no one can see it.",
        "Those few inches are where most of the trouble is. The transition hose gets squeezed every time the machine is pushed back, and lint packs into the fold. We ease the stacked unit out with the floor protected, clean the in unit run from the dryer to the wall connection, and check the airflow before it goes back, in 45 to 90 minutes for $100 to $200. If the hose is crushed or made of foil, replacing it with a listed transition is dryer vent repair, quoted in the $200 to $600 range before we do it.",
        "Dryer vent cleaning in a Miami Beach high rise also depends on the building. Where your connection joins a shared exhaust, the vertical run and any fan on the roof belong to the association, and many associations have the risers cleaned for the whole building on a schedule. Booking your own unit in the same week is the efficient way to do it, since a clean riser behind a packed hose, or the reverse, leaves the dryer just as slow.",
        "In the low rise walk ups of South Beach and North Beach, the dryer was often added long after the building went up, and the vent may cross a wall to an alley or a side yard. Signs it is time anywhere on the island: towels needing a second cycle, a laundry closet that is hot after a load, or a unit that turns humid every time the dryer runs.",
      ],
    },
  ],

  /*
   * Added 16 November 2026, wave 6 (part b): two more blocks for six Palm Beach,
   * Broward and Lee County pages that already carry extra depth but still rank
   * 10 to 30 on their own city queries in the owner's Search Console export:
   * "dryer vent cleaning boynton beach", "dryer duct cleaning boynton beach",
   * "furnace cleaning boynton beach", "ductwork services in boynton beach",
   * "dryer vent cleaning west delray beach fl", "dryer duct cleaning delray
   * beach", "dryer vent maintenance delray beach", "residential dryer vent
   * cleaning coral springs", "ac vent cleaning coral springs fl", "dryer vent
   * cleaning lake worth beach", "air duct cleaning lake worth fl", "dryer vent
   * cleaning bonita springs", "air duct cleaning services bonita springs",
   * "hvac duct repair deerfield beach fl", "air duct sealing deerfield beach
   * fl" and "duct services & repair in deerfield beach". These are meant to be
   * appended after the two blocks each slug already has. Written per city.
   */
  "boynton-beach": [
    {
      heading: "Dryer vent cleaning in Boynton Beach: dryer duct cleaning from the machine to the hood",
      body: [
        "Dryer vent cleaning in Boynton Beach and dryer duct cleaning are the same job under two names, and it costs $100 to $200. The vent is the whole path the hot, wet air takes out of the house: the short hose behind the dryer, the duct inside the wall, ceiling or attic, and the hood or cap where it leaves. A cleaning that stops at the lint screen, or at the few feet a vacuum reaches, leaves most of that path untouched.",
        "How the run is built depends on where in Boynton you live. In the villas and condos of Leisureville, Hunters Run and the other 55 plus communities, the dryer usually vents a short distance to an outside wall, and on an upper floor the hood is out of reach without a ladder and the association's agreement. In the houses west of the turnpike, built later, the laundry often sits on an inside wall and the duct climbs through the attic to a cap on the roof. That longer run, with an elbow at each change of direction, is where lint builds.",
        "On the visit the dryer is pulled out and disconnected, airflow is read at the outside end, and a rotary brush and compressed air are run through the full length of the duct. The lint is collected, not blown into the attic or the yard. The hood flap or roof cap is cleared and checked to see that it opens and closes, the dryer is reconnected, and airflow is read again so you can compare. If the duct turns out to be plastic foil, crushed inside a wall, or longer than the dryer is built to push through, cleaning will not cure it, and rerouting or replacing it is quoted as dryer vent repair or installation at $200 to $600.",
        "The signs are easy to read once you know them: towels that need a second cycle, a dryer top hot to the touch, a laundry room that turns humid while it runs, or lint gathering around the outside hood. For a couple running a few loads a week, every year or two is usually enough. A household doing daily loads, or a house with a long attic run to the roof, is better checked every year.",
      ],
    },
    {
      heading: "Air duct cleaning in Boynton Beach, FL: how long it takes and what happens on the day",
      body: [
        "Air duct cleaning in Boynton Beach, FL takes most of a morning or an afternoon for one system, and the clock depends less on the size of the home than on where the air handler and the ducts sit. A closet unit in a Leisureville villa with short runs is the quick end. A house in one of the gated communities west of the turnpike, with the air handler in the garage and flex fanned across a deep attic, takes longer, and a second system adds its own time.",
        "Duct cleaning in Boynton Beach runs in a set order. Floor protection goes down along the path to the air handler, a camera goes into the trunk, and a few spots are photographed that will be photographed again at the end. The collection unit goes on at the plenum, every register is sealed, and each branch is opened and brushed back to the trunk in turn. The grilles come off and are washed, the blower wheel and coil face are cleaned, and the system is switched back on and checked at the registers. Have the closet or garage unit clear, the attic hatch free of storage, and furniture moved back from under the ceiling grilles.",
        "Ductwork services in Boynton Beach beyond the cleaning go on separate lines, only when the camera gives a reason: air duct mold removal at $500 to $3,000 for growth inside the ducts or air handler, sanitizing at $75 to $200 after a cleaning, and repair for runs that have separated or collapsed, quoted after testing. Mold on drywall or inside a wall is not duct work. That is licensed mold remediation, which we do not do, and we say so on the spot.",
        "Furnace cleaning in Boynton Beach, for the homes that ask for it, fits inside the same visit. The heat strips sit in the air handler cabinet just past the blower, so while the cabinet is open the strip compartment is vacuumed and looked over. Mention it when you book. If anything in there looks like an electrical fault rather than dust, we leave it alone and tell you to call an HVAC contractor.",
      ],
    },
  ],
  "delray-beach": [
    {
      heading: "Dryer vent cleaning in West Delray Beach, FL: the gated communities west of the Turnpike",
      body: [
        "Dryer vent cleaning in West Delray Beach, FL mostly means one kind of home: the gated communities that run west of Florida's Turnpike along Atlantic Avenue and out toward State Road 7, many of them 55 plus. Most of that area sits outside the city limits and still carries a Delray Beach address. The houses and villas there were built later than Kings Point and the older city, are mostly single storey, and usually have an indoor laundry room on an inside wall under a concrete tile roof.",
        "That combination decides where the lint goes. With the laundry on an inside wall, the dryer duct runs up into the attic and across it to a vent on the roof, and on a tile roof that vent is a special tile or a raised cap that nobody looks at from the ground. The run is longer and has more turns than a wall vent, and the cap is the part that clogs: lint packs against the outlet, and some caps were fitted with a screen, which a dryer outlet should never have. A dryer that once finished a load in one cycle starts needing two.",
        "Dryer duct cleaning in Delray Beach starts inside. The dryer is pulled out, the run is brushed and blown from the laundry end, and the lint is drawn out rather than pushed toward the roof. The cap is cleared from the roof where it can be reached without cracking tile, or from the attic side where it cannot, and airflow is measured at the outlet before and after. The cleaning is $100 to $200. A cracked cap or a run that has come apart in the attic is quoted as dryer vent repair at $200 to $600 before anything is touched.",
        "Dryer vent maintenance in Delray Beach for a seasonal household is mostly about timing. A dryer used lightly all winter and left idle all summer leaves its lint sitting in a hot, humid attic for months, so the useful moment for a cleaning is the autumn, before the house fills up again. Gatehouses here want visitor names in advance, so give us the community when you call and add us to the guest list.",
      ],
    },
    {
      heading: "Air duct cleaning in Delray Beach, FL: what's included in a visit, and what is not",
      body: [
        "Air duct cleaning in Delray Beach, FL covers the whole air path, at $300 to $600 per system. Included: a camera look into the trunk and a few branches before anything starts, negative air at the plenum with every register sealed, each supply and return run brushed back to the trunk, the return plenum cleaned, every grille removed and washed, and the blower wheel and coil face cleaned. You get before and after photos of the same spots, and the system is switched back on and checked at the registers before the crew leaves.",
        "Duct cleaning in Delray Beach is not the same visit in every home, and the differences are mostly about access. A house in the West Delray communities usually has its air handler in the garage and flex across an attic under a tile roof, where summer heat limits how long anyone can work up there, so the attic part is done early in the day. A Kings Point unit with a closet air handler and short runs goes quickly.",
        "Some things fall outside a duct cleaning altogether. Mold on drywall, inside a wall cavity or on the ceiling around a grille is a building problem for licensed mold remediation, which we do not do; we photograph it and tell you. Replacing duct insulation, moving a register or adding a return is repair work, quoted separately. And we do not spray fragrance into the ducts in place of cleaning them.",
        "The quickest route to an accurate figure is to count thermostats, since each one usually means a system, and to tell us where each air handler is: closet, garage or attic. With that, the price you hear on the phone is the price on the day, unless the camera finds something extra and you approve it first.",
      ],
    },
  ],
  "coral-springs": [
    {
      heading: "Residential dryer vent cleaning in Coral Springs, FL: from the laundry room to the roof",
      body: [
        "Residential dryer vent cleaning in Coral Springs, FL is $100 to $200, and where a house lands in that range comes down to one question: does the vent leave through a wall or through the roof? A laundry off the garage in Ramblewood or Westchester, with a short run through the block wall, is the quick end. An upstairs laundry in a two storey house in Eagle Trace or Turtle Run, venting up through the attic to the roof, is longer and has more work at both ends.",
        "Dryer vent cleaning in Coral Springs on an upstairs laundry has a problem of its own. The duct rises from behind the dryer, turns into the attic and crosses it to a roof cap, and lint that loses speed on the way settles in the attic stretch and in the elbow behind the machine. With the laundry above the bedrooms, a blocked run also means hot, wet air forced into a wall cavity or an attic over living space. We clean it from the laundry end with a rotary brush and air, collect the lint at the bottom, and clear the cap.",
        "Busy households are the reason to keep to a schedule. Sports uniforms, towels and bedding mean a dryer running most days, and a run that was clear in January can be restricted by the end of the school year. Once a year suits a family house; a household of two can stretch it. Between visits, empty the lint screen every load, wash it with soap now and then if dryer sheets leave a film, and look at the outside hood or cap every few months.",
        "Some runs cannot be cleaned into good shape. Vinyl or foil hose, a duct crushed behind the dryer, or an attic run that has come apart at a joint and is blowing lint into the insulation is repair, not cleaning. That is quoted on its own line as dryer vent repair or installation at $200 to $600, and if the fix changes anything outside the house, you hear that before work starts so the HOA question is settled first.",
      ],
    },
    {
      heading: "AC vent cleaning in Coral Springs, FL: what is behind the grille, and how long air duct cleaning takes",
      body: [
        "AC vent cleaning in Coral Springs, FL usually starts with a call about the ceiling grilles: grey dust on the louvers in a child's room, a dark ring on the ceiling around a supply, or a hallway return gone furry. Washing the grille takes minutes. What made it dirty is in the branch behind it, the trunk and the air handler, and that is where the visit goes.",
        "In the older Coral Springs houses the grilles are often the originals, painted over more than once, with the paint bonding them to a textured ceiling. We cut the paint line before pulling them so the ceiling does not tear, wash them, and refit them. Where the gap between the duct boot and the ceiling is open, that gap is often what draws attic dust onto the paint around the grille, so we show it to you: sealing it is a small fix that keeps the ring from coming back.",
        "Air duct cleaning in Coral Springs, FL takes most of a morning for one system, longer in a two storey house with a vertical trunk or an air handler in the attic. The order is the same in every house: camera inspection, negative air at the plenum, registers sealed, each branch brushed back to the trunk, blower wheel and coil face cleaned, grilles washed, then the system back on and checked room by room.",
        "Is cleaning only the vents ever enough? Rarely, but the question is worth asking. If one or two grilles are dirty and the rest of the house is clean, the cause may be a leaking boot or a single crushed branch rather than dirty ducts, and that is worth knowing before paying for a full job. The camera answers it, and we tell you which it is.",
      ],
    },
  ],
  "lake-worth": [
    {
      heading: "Dryer vent cleaning in Lake Worth Beach, FL: price, what is done, and when cleaning is not enough",
      body: [
        "Dryer vent cleaning in Lake Worth Beach, FL is $100 to $200, and the same applies whether your address reads Lake Worth Beach or plain Lake Worth. The city took the Beach name in 2019, and much of the suburban land to the west, between Lake Worth Road and Lantana Road, still uses a Lake Worth address without being inside the city. We cover both.",
        "In the downtown cottages and the small apartment buildings off Lake Avenue and Lucerne Avenue, the laundry usually arrived long after the building did, and the vent leaves where it could: under a raised floor, along a soffit, or out the back of a converted porch. Those routes are cleaned from the laundry end and, where it can be reached, from the outside hood back, so the lint comes out instead of being pushed further along a run nobody can see. The flap at the hood is checked to see that it closes, because an open one lets damp night air and insects back in.",
        "Cleaning is not always the answer, and the visit says so when it is not. Two dryers joined into one duct, plastic foil hose used as the permanent run, or a duct that has come loose under the floor cannot be cleaned into safe shape. Rerouting or replacing that run is quoted as dryer vent installation or repair at $200 to $600, and the photos go to the owner, which matters in a city with this many rentals.",
        "For landlords, the sensible moment is between tenants, with the unit empty and the laundry closet clear. A tenant who notices clothes taking two cycles, a hot dryer cabinet or a burnt smell during a load should stop using the dryer and tell the owner. The fix is usually simple, and lint is what burns in a dryer fire.",
      ],
    },
    {
      heading: "Air duct cleaning in Lake Worth, FL: how often a cottage, a rental or a suburban house needs it",
      body: [
        "Air duct cleaning in Lake Worth, FL does not run on one calendar. The three to five years usually quoted for Florida homes is a starting point, and here the type of house pushes it in both directions.",
        "A small cottage near the water, with a compact air handler and a handful of registers, often stays reasonably clean inside the ducts for longer than that, because the runs are short and little air moves through them. Its coil tends to need attention well before its ducts do, so a cottage owner can usually leave the duct cleaning at the long end of the range and let the camera confirm it.",
        "Rentals and divided houses sit at the short end. Every change of tenant brings a different household's pets, cooking and smoking, and a cleaning between tenants, with the rooms empty, is the easiest time to do it and hands the next tenant a clean system. Where a house has been split and each unit has its own air handler, each is cleaned on its own schedule, at $300 to $600 per system.",
        "Duct cleaning in Lake Worth, FL for the suburban houses west of the city, the single storey homes off Lake Worth Road and Jog Road, follows the usual Palm Beach County pattern: attic flex, an air handler in a closet or the garage, and buildup that tracks pets, renovations and how well the filter fits. Between cleanings, a filter that seals in its frame and is changed on schedule, plus a return grille vacuumed now and then, does more than anything else to stretch the interval. If the camera shows clean runs, we tell you the cleaning can wait.",
      ],
    },
  ],
  "bonita-springs": [
    {
      heading: "Dryer vent cleaning in Bonita Springs, FL: tile roofs, roof caps and reroofed homes",
      body: [
        "Dryer vent cleaning in Bonita Springs, FL is $100 to $200, and in most homes here the part that decides the job is on the roof. In Pelican Landing, Palmira, Spanish Wells and the other gated communities, the typical house is single storey under a concrete tile roof, with the dryer duct running up through the attic to a cap set among the tiles. That cap is the hardest part of the run to see and the easiest to forget.",
        "Many roofs in Lee County have been replaced since Hurricane Ian in 2022, and a new roof is a common reason a dryer vent stops working properly. The roofer has to lift and reset the dryer cap, and it does not always go back the way it came off. Typical results are a cap partly blocked by underlayment, a duct pulled off the cap in the attic so lint and moist air blow into the insulation, or a replacement cap fitted with a screen, which a dryer outlet should not have. If drying has slowed since the roof was done, that is the first place to look.",
        "On the visit the run is cleaned from the laundry end, the duct brushed and blown through and the lint collected, and the cap is cleared and checked from the roof where the tile allows it or from the attic where it does not. Airflow is measured at the outlet before and after, so you can see the difference. A run that has come apart in the attic, or a cap that has to be replaced, is quoted as dryer vent repair at $200 to $600 before any of it is done.",
        "For seasonal owners the cap is also where summer visitors move in. A vent unused from spring to autumn can collect a bird's nest or wasps behind the flap, and the first load of the season pushes hot air straight into it. A cleaning booked for the week you arrive, before the first wash, settles that.",
      ],
    },
    {
      heading: "Air duct cleaning services in Bonita Springs, FL after a reroof, a storm or a renovation",
      body: [
        "Air duct cleaning services in Bonita Springs often follow other work on the house. A new roof, attic repairs after a storm, or a kitchen and floor renovation all put fine debris where the air system can reach it, and the attic, where the ducts and often the air handler sit, is where most of it lands.",
        "Duct cleaning in Bonita Springs after a reroof starts with a camera, because dust is not the only risk. Roofers and the crews after them work in the attic, and flex gets stepped on, pinched against trusses or pulled loose at a boot. A run pulled off its collar keeps drawing attic air and roofing grit into the return, or dumps cooled air into the insulation, and no cleaning changes that. Those are photographed and quoted as repair, and the cleaning comes after.",
        "Homes near the Imperial River and in the lower parts of the city that took water in a storm need a different conversation. Ducts or an air handler that sat in floodwater are replaced, not cleaned, and that is work for an HVAC contractor. Attic ducts that stayed dry but ran while the house was being gutted and dried out are a cleaning job, worth doing once the drywall and flooring are finished. Mold on walls or framing is licensed mold remediation, which we do not do. Growth inside the ducts or air handler is quoted as air duct mold removal at $500 to $3,000.",
        "Air duct cleaning in Bonita Springs, FL is $300 to $600 per system. Tell us when you call what work the house has had and when it finished, and we will tell you whether the timing is right or whether to wait until the last trade has gone.",
      ],
    },
  ],
  "deerfield-beach": [
    {
      heading: "HVAC duct repair in Deerfield Beach, FL: what the pressure test finds, and how it is fixed",
      body: [
        "HVAC duct repair in Deerfield Beach, FL starts with a measurement, not a guess. With the registers sealed and the duct pressurized, a leakage test shows how much air the system is losing, and a camera or smoke shows where. That decides whether you need a few joints redone or a run replaced, and the quote follows the test rather than coming before it.",
        "In the houses and townhomes of Deer Creek, Crystal Lake and Independence Bay, the usual findings are in the attic: a flex run slipped off its collar, a boot pulled away from the ceiling, a run crushed flat by storage or by someone crossing the attic. Each is fixed by refitting the connection with a mechanical fastener, sealing it with mastic and insulating over the joint so it does not sweat. A run whose liner has torn, or whose jacket has crumbled in the attic heat, is replaced rather than patched.",
        "Duct services and repair in Deerfield Beach follow a set order when a home needs both: repair first, then cleaning. Air duct cleaning in Deerfield Beach on a run still open to the attic only pulls more attic dust into it, and repairing after a cleaning disturbs the surfaces just cleaned. When the scope is small, both can be done on one visit, each priced on its own line.",
        "You can often tell repair from cleaning before anyone comes out. One room that never cools, a bill that has climbed while your habits have not, or dust that returns within weeks of a cleaning all point to air going missing on the way. Grey grilles all through the house, with strong airflow at each one, point to dirt instead. The test settles it either way.",
      ],
    },
    {
      heading: "Air duct sealing in Deerfield Beach, FL: the return, the filter slot and the attic joints",
      body: [
        "Air duct sealing in Deerfield Beach, FL begins on the return side, because that is where a leak does the most harm. A supply leak loses cooled air. A return leak pulls in whatever sits next to it: attic air in a house, or in a condo the air of a closet shared with the water heater, and in both cases humidity and dust that reach the coil without passing a filter.",
        "In many seventies condominium closets the air handler sits on a return box built of wood and drywall, with the filter slid into a slot in the side. Over the decades the seams open, the slot gaps around the filter, and the cover panel no longer fits tight. Sealing it means closing the seams with mastic, replacing any section that has crumbled, and making the filter slot fit so air cannot slip around the filter.",
        "In a house, air duct sealing covers the joints and boots across the attic. Each connection is fastened mechanically, then coated with mastic or covered with rated foil tape, and each boot is sealed to the ceiling so the grille is not drawing from the attic. Cloth duct tape is not used, because attic heat dries it out and it lets go within a few summers.",
        "Sealing is quoted after the pressure test, on its own line, and owners usually notice it in a coil that stays clean longer and a system that runs shorter cycles. It pairs naturally with AC vent cleaning in Deerfield Beach, FL. If the grilles are grey again within months of a cleaning, a leaking return is usually why, and sealing it is what makes the cleaning last.",
      ],
    },
  ],

};

export const cityDepthEsWave6: Record<string, { heading: string; body: string[] }[]> = {
/* 16 de noviembre de 2026, wave 6 (cityDepthEsExtra): dos bloques por ciudad para las páginas en español
   de Fort Lauderdale, Boca Raton, West Palm Beach, Pembroke Pines, Miami Beach y Lake Worth Beach.
   En este sitio las búsquedas en español convierten mucho más que las de inglés, y las que dan clics son de
   precio y de cercanía ("limpieza de ductos de aire acondicionado precio", "... cerca de mí"). Bloque 1: el
   precio por tipo de vivienda en esa ciudad. Bloque 2: un ángulo local que las páginas todavía no cubrían.
   Coral Springs y Pompano Beach se omiten porque ya tienen entrada en este archivo. Solo precios publicados. */

  "fort-lauderdale": [
    {
      heading: "¿Cuánto cuesta la limpieza de ductos de aire acondicionado en Fort Lauderdale?",
      body: [
        "La limpieza de ductos de aire acondicionado en Fort Lauderdale tiene un precio de 300 a 600 dólares por sistema, y en esta ciudad el tipo de vivienda casi siempre dice en qué parte del rango va a quedar. Un apartamento en una torre de Galt Ocean Mile, sobre A1A o en el centro cerca de Las Olas tiene normalmente una manejadora en un clóset, un retorno en el pasillo y pocas rejillas con tramos cortos. Es el caso más sencillo y queda en la parte baja.",
        "Las casas de bloque de una planta al oeste de la 95, en Melrose Park o Riverland, casi siempre son un solo sistema, y lo que mueve el número es el acceso al ático y cuánto se ha juntado adentro. Las casas viejas de Victoria Park, Sailboat Bend y Poinsettia Heights, donde el aire se puso décadas después de construirlas, tienen rejillas que se fueron agregando con cada remodelación y tramos que pasan por clósets y plafones. Llegar a cada caja toma más tiempo, y eso las lleva hacia la mitad del rango.",
        "En Coral Ridge, Rio Vista y Las Olas Isles muchas casas junto al canal son grandes o se reconstruyeron en dos plantas, con dos o tres manejadoras. Cada sistema lleva su propio precio dentro del mismo rango, y se limpian todos en la misma visita.",
        "Lo que se puede sumar va en su propio renglón y se lo decimos antes: la desinfección, de 75 a 200 dólares, solo cuando hay una razón; el moho dentro del ducto o en la manejadora, que es eliminación de moho en ductos, de 500 a 3,000 dólares según cuánto se extendió; y la ventila de la secadora, de 100 a 200 dólares, si la quiere en la misma cita. Si busca limpieza de ductos cerca de usted en Fort Lauderdale, díganos cuántas rejillas cuenta y dónde está la manejadora, y tiene la cifra antes de agendar.",
      ],
    },
    {
      heading: "Limpieza de ductos en un condominio de Fort Lauderdale: lo que pide la asociación",
      body: [
        "La limpieza de ductos en un condominio de Fort Lauderdale empieza antes de llegar al apartamento, en la oficina de la administración. Casi todos los edificios de la playa y del centro piden un certificado de seguro antes de dejar entrar a un contratista, muchas veces con la asociación nombrada en el certificado, y se lo mandamos con anticipación para que la cita no se caiga en la recepción.",
        "Además del certificado, muchos edificios piden reservar el elevador de servicio, trabajar solo en horario de días hábiles, proteger el pasillo y registrarse con el personal de seguridad. El estacionamiento para vehículos de servicio en Galt Ocean Mile y sobre A1A suele ser limitado. Cuando llame, díganos qué pide su edificio y lo arreglamos con la administración desde antes.",
        "Adentro trabajamos solo lo que es suyo: la manejadora del clóset, los ductos dentro de su techo y sus paredes, las rejillas, el filtro y la línea de drenaje. El tramo vertical que sirve a varios pisos, el extractor del techo y el ducto de la secadora que sube por el edificio son de la asociación. Si la cámara muestra que el polvo o el olor viene de ese lado, se lo enseñamos en fotos para que lo presente a la junta, en vez de cobrarle por limpiar algo que no le resuelve el problema.",
        "Si el apartamento es de temporada y usted está fuera, alguien de la administración o de su confianza nos abre, y usted recibe las fotos del antes y el después de los mismos puntos: la turbina del ventilador, la cara del serpentín, el pleno y las cajas de las rejillas.",
      ],
    },
  ],

  "boca-raton": [
    {
      heading: "¿Cuánto cuesta la limpieza de ductos de aire acondicionado en Boca Raton?",
      body: [
        "En Boca Raton la limpieza de ductos de aire acondicionado cuesta de 300 a 600 dólares por sistema, y el precio de su casa depende sobre todo del lado de la I-95 en que esté y de cuántos equipos tenga. Al este, en los condominios cerca de Mizner Park, sobre el Intracoastal o frente a la playa, lo normal es una manejadora en clóset con tramos cortos, y el precio queda en la parte baja del rango.",
        "Al oeste, en Boca Del Mar, Broken Sound, Boca Woods o Millpond, hay de todo. Las villas y las casas de una planta con un solo sistema caen hacia la mitad. Las casas de dos plantas con un equipo abajo y otro en el ático se cotizan por sistema, y el de arriba suele llevar más trabajo porque se atiende desde una plataforma en el calor. En Sandalfoot Cove las unidades son más viejas y más chicas, y casi siempre se trata de un sistema sencillo.",
        "Lo que se puede agregar va aparte y se lo decimos antes de agendar. La desinfección, de 75 a 200 dólares, solo cuando hay una razón para aplicarla. Si la cámara encuentra moho dentro del ducto, en el serpentín o en la bandeja de una casa que pasó el verano cerrada, eso es eliminación de moho en ductos, de 500 a 3,000 dólares según la extensión. El moho en el drywall o dentro de una pared es otro trabajo, de remediación con licencia, que nosotros no hacemos.",
        "Para darle el precio por teléfono nos basta con tres datos: cuántos sistemas tiene, cuántas rejillas cuenta en cada uno y dónde está cada manejadora. Si busca limpieza de ductos cerca de usted en Boca Raton, con eso tiene la cifra completa antes de que lleguemos.",
      ],
    },
    {
      heading: "Limpieza de ductos en Boca Raton antes de regresar: cómo dejarla hecha a distancia",
      body: [
        "Mucha gente con casa en Boca Raton pasa el verano en el norte y busca la limpieza de ductos desde allá, en septiembre u octubre, para encontrar la casa lista al llegar. Se puede hacer sin que usted esté. Necesitamos a alguien que abra, el pase de entrada en la caseta si la comunidad es cerrada, y saber dónde está cada manejadora y dónde va cada filtro.",
        "El momento importa. Lo mejor es agendar dos o tres semanas antes de su regreso y no la víspera. Así, si la cámara encuentra algo en el serpentín o en la bandeja después de meses de humedad, queda tiempo para resolverlo antes de que usted duerma en la casa, y no tiene que elegir entre llegar a un olor o mudarse unos días.",
        "Todo se lo mandamos por teléfono o por correo. Primero el precio por sistema, antes de agendar. Al terminar, las fotos del antes y el después de los mismos puntos: la turbina del ventilador, la cara del serpentín, el tronco y las cajas de las rejillas. Si aparece algo que pide otra decisión, como moho dentro del ducto o un tramo que hay que cambiar, se lo enseñamos en foto y no se hace nada hasta que usted lo apruebe.",
        "En muchas comunidades de Boca la asociación pide que el contratista esté anotado en la caseta, que trabaje en días hábiles y que el vehículo no se quede en la calle. Díganos el nombre de su comunidad al agendar y lo coordinamos con quien le cuida la casa. Si quiere, limpiamos también la ventila de la secadora en la misma entrada, de 100 a 200 dólares, para no coordinar dos visitas desde lejos.",
      ],
    },
  ],

  "west-palm-beach": [
    {
      heading: "¿Cuánto cuesta la limpieza de ductos de aire acondicionado en West Palm Beach?",
      body: [
        "El precio de la limpieza de ductos de aire acondicionado en West Palm Beach es de 300 a 600 dólares por sistema, y aquí vale la pena explicarlo por tipo de vivienda, porque la ciudad tiene casi un siglo de construcción distinta. En los apartamentos de Century Village y en las torres del centro sobre Flagler, la manejadora está en un clóset, los tramos son cortos y el trabajo queda en la parte baja.",
        "En El Cid, Flamingo Park y Northwood las casas son de los años veinte y treinta, y el ducto se les metió después. Suelen tener pocas rejillas, pero los tramos pasan por clósets, por plafones bajados y a veces por debajo del piso, y llegar a cada caja toma más tiempo del que sugiere el conteo. Por eso una casa histórica chica puede quedar a la mitad del rango y no abajo.",
        "Al oeste, en Ibis, Andros Isle y las comunidades más allá del turnpike, la casa es más nueva y más grande, el flexible va por el ático y la manejadora en el garaje o en un clóset. Si hay un equipo por planta, cada uno es un sistema con su precio.",
        "En la cifra entra el sistema completo: suministro y retorno, troncos, pleno, cajas de las rejillas, turbina del ventilador y cara del serpentín, con presión negativa y el método de extracción en la fuente de NADCA. Aparte, y solo si hay razón o usted lo pide: desinfección de 75 a 200 dólares y la ventila de la secadora de 100 a 200. Si busca limpieza de ductos cerca de usted en West Palm Beach, le damos el número por teléfono antes de agendar.",
      ],
    },
    {
      heading: "Limpieza de ductos después de una remodelación en West Palm Beach",
      body: [
        "La limpieza de ductos después de una remodelación es una de las llamadas más comunes en West Palm Beach, porque en El Cid, Flamingo Park, Northwood y Grandview Heights muchas casas viejas se están arreglando por dentro, y en el centro los condominios se renuevan unidad por unidad. Lijar yeso, cortar drywall, quitar piso o cambiar gabinetes levanta un polvo muy fino, y si el aire estuvo prendido durante la obra, el retorno se lo llevó al sistema.",
        "Las señales aparecen semanas después: polvo blanco o gris sobre los muebles un día después de limpiar, un filtro que se tapa en días y no en meses, y una capa clara en las aletas de las rejillas. El polvo de drywall pasa por un filtro común, se pega a la turbina del ventilador y al serpentín, y ahí le quita flujo de aire al equipo.",
        "Lo que conviene es limpiar cuando la obra termine del todo, después del último lijado y de la pintura, no a la mitad. Mientras siga la obra, tape las rejillas de suministro y de retorno con plástico y cinta, apague el equipo los días de más polvo y cambie el filtro al cerrar cada etapa. Así la limpieza final sale más sencilla y se queda dentro del mismo precio de 300 a 600 dólares por sistema.",
        "En una casa histórica la remodelación muchas veces abre paredes y techos, y ese es el mejor momento para mirar el ducto: tramos aplastados, uniones abiertas o un ramal que quedó suelto. Si la cámara lo encuentra, se lo enseñamos antes de que se cierre el plafón. En un condominio, avise a la administración que habrá una visita después de la obra, porque muchas piden el certificado de seguro también para eso.",
      ],
    },
  ],

  "pembroke-pines": [
    {
      heading: "¿Cuánto cuesta la limpieza de ductos de aire acondicionado en Pembroke Pines?",
      body: [
        "La limpieza de ductos de aire acondicionado en Pembroke Pines cuesta de 300 a 600 dólares por sistema, y en una ciudad hecha de comunidades planeadas el tipo de casa casi decide el precio solo. En Century Village y en los condominios de poca altura la manejadora está en un clóset, los tramos son cortos y las rejillas pocas, así que el trabajo queda en la parte baja del rango.",
        "Las villas, las casas adosadas y las casas de una planta alrededor de Towngate suelen ser un sistema, con la manejadora en el garaje o en un clóset del pasillo, y caen hacia la mitad. Ahí lo que más pesa es si el sistema se ha limpiado alguna vez y cuántas rejillas se agregaron con los años.",
        "Las casas anchas de Chapel Trail, Pembroke Falls y Silver Lakes tienen tramos largos por el ático, y muchas de dos plantas llevan dos equipos. Cada sistema se cotiza por separado dentro del mismo rango. Un tronco largo con muchas salidas lleva más tiempo que uno corto, y en estas casas eso pesa más en el número que los pies cuadrados.",
        "Lo que se agrega va aparte y solo si hace falta: desinfección de 75 a 200 dólares, eliminación de moho en ductos de 500 a 3,000 dólares si la cámara lo encuentra adentro del sistema, y la ventila de la secadora de 100 a 200 dólares. Si busca limpieza de ductos cerca de usted en Pembroke Pines, díganos su comunidad, cuántos equipos tiene y cuántas rejillas cuenta, y le damos el precio antes de agendar.",
      ],
    },
    {
      heading: "Ventila de la secadora en Pembroke Pines: por qué limpiarla junto con los ductos",
      body: [
        "La ventila de la secadora en Pembroke Pines es el trabajo que más conviene sumar a la limpieza de ductos, porque en las casas de los fraccionamientos del oeste el tramo es largo y nadie lo ve. La lavandería está adentro, el ducto sube al ático, lo cruza y sale por el techo, y en las casas de dos plantas con lavandería arriba la subida es todavía más larga.",
        "Las señales se repiten: la ropa necesita dos ciclos, la secadora está muy caliente por fuera, el cuarto de lavado se siente húmedo o hay un olor leve a quemado. La pelusa se queda donde el aire pierde velocidad, en cada codo, en cada punto donde el flexible se descuelga entre las vigas y en la rejilla de la salida del techo. La pelusa acumulada es la causa más común de incendios de secadora.",
        "La limpieza cuesta de 100 a 200 dólares e incluye el tramo completo y la manguera de atrás de la máquina. Si el tramo está aplastado, es de aluminio flexible de los que no deben ir en un ático, o es más largo de lo que la secadora admite, cambiarlo o acortar la ruta es reparación o instalación de ventila, de 200 a 600 dólares, y se lo enseñamos en foto antes de hacer nada.",
        "En las comunidades con asociación, la salida en el techo o en la pared tiene reglas de apariencia, y una salida nueva o movida puede necesitar aprobación. Si hace falta, le damos las medidas y la ubicación para que la pida. En Century Village y en los condominios, el tramo que se une al edificio es de la asociación, y se lo aclaramos antes de cotizar.",
      ],
    },
  ],

  "miami-beach": [
    {
      heading: "¿Cuánto cuesta la limpieza de ductos de aire acondicionado en Miami Beach?",
      body: [
        "En Miami Beach la limpieza de ductos de aire acondicionado cuesta de 300 a 600 dólares por sistema, y como casi todo aquí es apartamento, la mayoría de los precios queda en la parte baja. Un apartamento en una torre de Collins Avenue, en South of Fifth o en North Beach tiene casi siempre una manejadora en un clóset, el retorno en el pasillo y unas pocas rejillas con tramos cortos.",
        "Los edificios bajos de antes de la guerra alrededor de Flamingo Park y Española Way son otro caso. Ahí el ducto se agregó después, por plafones bajados y registros estrechos, y aunque las rejillas sean pocas, llegar a cada una toma más tiempo. Un apartamento chico de esos puede quedar hacia la mitad del rango.",
        "Las casas de Sunset Islands, Venetian Islands, Normandy Isles y las calles residenciales de Mid-Beach tienen muchas veces dos o tres manejadoras, y cada sistema lleva su propio precio. Una manejadora en un ático difícil o en un cuarto mecánico apretado también se nota en el número.",
        "Lo demás va en su propio renglón y solo con una razón. La desinfección cuesta de 75 a 200 dólares. Si el apartamento pasó el verano cerrado y la cámara encuentra moho dentro del ducto o en la bandeja, es eliminación de moho en ductos, de 500 a 3,000 dólares según la extensión. La ventila de la secadora, de 100 a 200 dólares, cubre su tramo y no el del edificio. Si busca limpieza de ductos cerca de usted en Miami Beach, le damos el precio por teléfono con el tipo de edificio y el número de rejillas.",
      ],
    },
    {
      heading: "Limpieza de ductos en Miami Beach cuando su edificio está en obra",
      body: [
        "Muchos edificios de Miami Beach están en inspecciones y reparaciones de concreto en balcones, fachadas y garajes, y la limpieza de ductos en un apartamento durante o después de esa obra tiene su propia lógica. Picar y reparar concreto levanta un polvo de cemento muy fino que entra por las puertas del balcón, por las rendijas y por el pasillo, y el retorno del clóset lo jala directo al sistema.",
        "Las señales son claras: polvo gris en el piso y en los muebles aunque las puertas estén cerradas, un filtro que se pone gris en pocas semanas y una capa clara sobre las aletas de las rejillas. Cerca del mar ese polvo se mezcla con la sal y la humedad sobre el serpentín y forma una costra que retiene agua y le quita aire al equipo.",
        "Mientras la obra esté en su piso, cambie el filtro más seguido, mantenga cerrado el balcón y tape con plástico las rejillas más cercanas a la puerta los días de trabajo pesado. La limpieza completa conviene cuando termine la obra de su lado del edificio, no a la mitad, porque si no hay que repetirla.",
        "Coordínelo con la administración. Durante una obra grande el elevador de servicio y los horarios para contratistas están más ocupados, y la asociación puede volver a pedir el certificado de seguro. Si la cámara muestra que el polvo llega por algo del edificio, como el aire del pasillo o un extractor compartido, se lo enseñamos en foto para llevarlo a la junta, que es quien maneja la obra.",
      ],
    },
  ],

  "lake-worth": [
    {
      heading: "¿Cuánto cuesta la limpieza de ductos de aire acondicionado en Lake Worth Beach?",
      body: [
        "La limpieza de ductos de aire acondicionado en Lake Worth Beach cuesta de 300 a 600 dólares por sistema, y como aquí la casa típica es chica, muchos precios quedan en la parte baja. Una casita de College Park, Bryant Park o del centro suele tener una manejadora pequeña y un puñado de rejillas, con un solo retorno.",
        "Lo que puede subir el número es por dónde va el ducto. En las casas de los años veinte y treinta, donde el aire se puso después, hay tramos debajo del piso en las casas levantadas sobre pilotes, tramos dentro de un plafón sobre el pasillo o encima de los gabinetes de la cocina, y llegar a cada caja toma más tiempo que en una casa nueva del mismo tamaño.",
        "Una casa dividida en dos o tres unidades puede tener un equipo por unidad o uno solo que reparte a todas, y cada sistema es un precio. Hacia Lake Osborne y Tropical Ridge las casas son más nuevas, sobre losa, con flexible en el ático y la manejadora en un clóset o en el garaje, y caen hacia la mitad del rango.",
        "Si la casa se enfría con unidades de ventana o con un sistema sin ductos, no hay nada que limpiar y se lo decimos por teléfono. La desinfección, de 75 a 200 dólares, y la ventila de la secadora, de 100 a 200, van aparte. Si busca limpieza de ductos cerca de usted en Lake Worth Beach, díganos la zona, el número de rejillas y dónde está la manejadora, y le damos la cifra antes de agendar.",
      ],
    },
    {
      heading: "Limpieza de ductos en Lake Worth Beach después de la temporada de huracanes",
      body: [
        "La temporada de huracanes va del 1 de junio al 30 de noviembre, y en Lake Worth Beach las preguntas sobre limpieza de ductos llegan casi siempre al final, cuando la casa pasó días sin luz o tomó agua por el techo o por debajo. En una casa vieja, con el ducto metido donde se pudo, eso pesa más que en una casa nueva.",
        "Cuando se va la luz varios días en pleno verano, la humedad de adentro sube muy por encima de 60 por ciento, el polvo del ducto y del serpentín se moja, y al regresar la luz el aire sopla ese olor por la casa. Si el olor se va en uno o dos días con el aire corriendo y un filtro nuevo, probablemente no hace falta más que eso.",
        "El agua es otra cosa. En las casitas levantadas sobre pilotes, la lluvia con viento o una calle inundada puede llegar al espacio debajo del piso donde corre el ducto, y un tramo que estuvo en el agua no se limpia, se cambia. Lo mismo un ducto de ático empapado por una filtración del techo, porque el aislamiento mojado no se seca dentro de la cubierta. Eso es reparación, y se cotiza aparte después de verlo con la cámara.",
        "Antes de llamar, revise si hay manchas en el techo cerca de las rejillas, agua en la bandeja debajo de la manejadora o puntos negros en las rejillas. Si la cámara encuentra moho dentro del ducto, es eliminación de moho en ductos, de 500 a 3,000 dólares. Si está en la pared o en el drywall, es remediación con licencia, un trabajo aparte que no hacemos. Y si la casa todavía tiene puestas las persianas de tormenta, quite al menos las de la entrada antes de la visita.",
      ],
    },
  ],

};
