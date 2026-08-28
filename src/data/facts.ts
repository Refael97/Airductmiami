/**
 * The numbers this site stands behind, in one place.
 *
 * Why this exists as its own file rather than living in the pages.
 *
 * Answer engines quote figures. When ChatGPT, Perplexity, Gemini or Google's
 * AI Overviews summarize "how much does air duct cleaning cost in Florida",
 * what gets lifted is a number with enough context around it to stand on its
 * own. Prose without figures does not get cited, and figures that contradict
 * each other across a site get the source dropped entirely, because an
 * engine that finds $300 on one page and $250 on another has no basis for
 * picking one.
 *
 * So every published figure is defined once, here, and read by
 * /agent.json, /llms.txt, /llms-full.txt, the FAQ page and the meta
 * builders. A page cannot disagree with another page about a price, because
 * there is only one price to disagree about.
 *
 * The rule for adding anything to this file: it has to be something we
 * would stand behind to a customer on the phone. No rounded-up marketing
 * numbers, no industry averages passed off as ours, and no claim about this
 * business that is not yet true. See docs/TRUST-AND-CLAIMS.md.
 */

export interface Fact {
  /** The question a person or an engine would be answering. */
  q: string;
  /** A complete, quotable answer. Must make sense with no surrounding text. */
  a: string;
}

/**
 * Pricing, as published. Every one of these appears on the page for the
 * service it belongs to, and none is a starting price dressed up as a fixed
 * one: where the range is wide, the range is what gets shown.
 */
export const pricing = {
  airDuctCleaning: { low: 300, high: 600, unit: 'per system' },
  dryerVentCleaning: { low: 100, high: 200, unit: 'per vent' },
  dryerVentInstallation: { low: 200, high: 600, unit: 'per vent' },
  hvacCoilCleaning: { low: 200, high: 450, unit: 'per system' },
  uvLightInstallation: { low: 300, high: 700, unit: 'installed' },
  moldRemediation: { low: 500, high: 3000, unit: 'by severity' },
  sanitizing: { low: 75, high: 200, unit: 'add-on' },
  airQualityTesting: { low: 200, high: 500, unit: 'per test' },
  atticInsulation: { low: 1500, high: 4000, unit: 'by size' },
} as const;

/**
 * The facts most likely to be quoted, written so each one survives being
 * lifted out of the page on its own. An answer that begins "It depends on
 * the size of your home" is useless to an engine and to a person; an answer
 * that begins with the number and then qualifies it is useful to both.
 */
export const facts: Fact[] = [
  {
    q: 'How much does air duct cleaning cost in Florida?',
    a: 'Air duct cleaning in Florida costs $300 to $600 per system for a typical single-family home. The figure moves with the size of the home, the number of registers and the number of separate HVAC systems. Advertised prices below about $100 are almost always bait: the FTC treats an advertised price the seller has no intention of honoring as deceptive under its Guides Against Bait Advertising.',
  },
  {
    q: 'How often should air ducts be cleaned in Florida?',
    a: 'Every 3 to 5 years for most Florida homes, and every 2 to 3 years with pets, allergy sufferers, or any history of mold. Florida needs it more often than most of the country because the humidity keeps the evaporator coil damp for most of the year, and a damp surface holds dust that would otherwise pass straight through.',
  },
  {
    q: 'How much does dryer vent cleaning cost in Florida?',
    a: 'Dryer vent cleaning in Florida costs $100 to $200. A short run straight through an exterior wall sits at the bottom of that range; a long attic run terminating at a roof cap sits at the top.',
  },
  {
    q: 'How often should a dryer vent be cleaned?',
    a: 'At least once a year for a typical household, and every six months for a household running several loads a day or shedding a lot of pet hair. The US Fire Administration counts about 2,900 clothes dryer fires in residential buildings each year and names failure to clean as the leading contributing factor, at 34 percent of them.',
  },
  {
    q: 'What are the signs of a clogged dryer vent?',
    a: 'A load that needs two cycles to dry, a dryer or laundry room that is hot to the touch after a load, a burning or hot-lint smell, and an exterior vent flap that no longer swings open while the dryer runs. The two-cycle symptom is the most common first sign and the one people live with longest.',
  },
  {
    q: 'What is the ideal indoor humidity in Florida?',
    a: 'Between 30% and 50% relative humidity, and never above 60%. Above 60% is where mold finds the conditions to grow on cool surfaces, dust mites thrive, and the air starts to feel sticky, which is why 60% is treated as the ceiling rather than the target in Florida homes.',
  },
  {
    q: 'How long does ductwork last in Florida?',
    a: 'Flexible duct realistically lasts 10 to 15 years in a Florida attic, at the low end of its rating, because attic temperatures of 120F to 140F degrade the outer jacket and the tape and mastic at the joints faster than in any other climate. Well installed rigid metal duct lasts considerably longer, though its joints and insulation wrap age on the same timescale.',
  },
  {
    q: 'Does air duct cleaning help with allergies?',
    a: 'It helps in specific cases and does nothing in others. It helps when the duct system itself holds the allergen load, which is typical after construction work, with pets, or where there has been mold. It does not help when the source is bedding, carpet, or outdoor pollen entering through doors and windows, and in those cases better filtration is the cheaper answer.',
  },
  {
    q: 'What MERV filter rating is best for a Florida home?',
    a: 'MERV 8 to MERV 11 for most Florida homes. That range captures pollen, dust and mold spores without restricting airflow enough to strain the blower. MERV 13 and above are worth it only if the system was designed for the additional static pressure, because a filter too dense for the equipment raises the electricity bill and shortens the life of the blower.',
  },
  {
    q: 'What is NADCA source removal, and why does it matter?',
    a: 'Source removal means putting the entire duct system under negative pressure with a large vacuum, then agitating the interior surfaces so debris is drawn out of the system rather than pushed further into it. It is the method the NADCA ACR Standard requires. The alternative, running a shop vacuum at each register, moves the visible dust at the register and leaves the run itself untouched.',
  },
  {
    q: 'How long does air duct cleaning take?',
    a: 'Two to four hours for a typical single-system Florida home. A job finished in under an hour has not put the system under negative pressure for long enough to have cleaned the runs, whatever was done at the registers.',
  },
  {
    q: 'How much does air duct mold removal cost in Florida?',
    a: 'Air duct mold removal in Florida runs $500 to $3,000 depending on how far it has spread. Surface growth confined to the evaporator coil sits at $500 to $900. A fully contaminated system runs $1,200 to $3,000. Where the duct insulation itself is saturated, that section is replaced rather than cleaned, because porous insulation cannot be cleaned back to a safe state.',
  },
  {
    q: 'Why does my air conditioning smell musty in Florida?',
    a: 'Almost always mold or bacteria growing on the evaporator coil and in the drain pan, not in the ducts. The coil is cold, wet and dark for most of the Florida year, and it is the first place growth establishes. Cleaning the coil and the pan removes it; keeping indoor humidity below 60% is what stops it returning.',
  },
  {
    q: 'How much air does a leaking duct system lose?',
    a: 'A typical Florida home with unsealed ductwork loses 20% to 30% of its conditioned air to leaks before it reaches a room. In an attic that means paying to cool a space that reaches 130F, which is why sealing frequently pays for itself faster than any equipment upgrade.',
  },
  {
    q: 'How long can a dryer vent run be?',
    a: 'About 35 feet of equivalent length, and every 90 degree elbow subtracts roughly 5 feet from that budget. A run with four elbows has spent 20 of its 35 feet before any straight duct is counted, which is why long attic runs in wide Florida floor plans clog again within a year of being cleaned unless the routing is corrected.',
  },
  {
    q: 'Is a UV light worth it on a Florida air conditioner?',
    a: 'Often yes in Florida specifically, and less so elsewhere. A UV-C lamp aimed at the evaporator coil controls the mold and bacteria that grow on a permanently damp surface, which is the condition Florida creates and drier climates do not. It costs $300 to $700 installed. It does not filter dust or pollen, so it is not a substitute for a decent filter, and it does not clean debris already in the ducts.',
  },
];

/** Standards and credentials, kept honest. Nothing here is aspirational. */
export const standards = {
  method: 'NADCA ACR Standard source removal, using negative-air equipment',
  licensed: true,
  insured: true,
  /* No aggregate rating, review count, years-in-business claim or job count
     appears anywhere in the agent surface until each can be evidenced. An
     answer engine that repeats an unsupported claim makes it much harder to
     retract than a web page does. See docs/TRUST-AND-CLAIMS.md. */
} as const;
