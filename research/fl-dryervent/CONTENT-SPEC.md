# Dryer Vent Florida: content spec for writers

Site: dryerventflorida.com, brand "Dryer Vent Florida". A specialist that
does one thing: residential and condo dryer vents across Florida. Read
`research/fl-dryervent/BRIEF.md` first.

## Facts you may use (and only these for numbers)

- Prices: dryer vent cleaning $100 to $200. Dryer vent repair, replacement
  or new installation $200 to $600. Condo, apartment and multi-unit
  buildings: priced per unit, quoted per building. Unusual cases (a nest
  packed into a roof cap, a run that has to be opened) are quoted before
  booking. Never quote any other number, never "from $99", never a
  discount.
- Hours: Monday to Friday 8am to 7pm, Saturday 9am to 5pm, Sunday 10am to
  4pm, Eastern. Same-week appointments. Not 24 hours.
- Insured. Never write "licensed" (dryer vent work is not a licensed trade
  in Florida). No reviews, ratings, star counts, years in business or job
  counts. No invented testimonials or named customers.
- Fire data, attributed to the US Fire Administration: about 2,900 home
  clothes dryer fires a year in the US, roughly 5 deaths, 100 injuries and
  $35 million in property loss; failure to clean is the leading cause, about
  a third of them. Use only these figures.
- Code (Florida Building Code, Residential, section M1502, which follows the
  International Residential Code): exhaust duct 4 inch rigid metal with
  smooth interior, at least 0.016 inch thick; joints not fastened with
  screws or anything that protrudes into the duct; maximum developed length
  35 feet, reduced by 2.5 feet for each 45 degree bend and 5 feet for each
  90 degree bend, unless the dryer manufacturer's instructions allow a
  longer run; the transition hose behind the dryer must be listed (UL 2158A),
  no longer than 8 feet and not concealed in a wall or ceiling; termination
  at least 3 feet from any opening into the building, with a backdraft
  damper and no screen.
- The work: airflow measured at the exterior termination before and after;
  transition hose pulled and checked; rotary brush and compressed air
  through the full run, from both ends where possible; hood cleared, damper
  freed; second airflow reading. Repair and installation use rigid metal
  duct on the shortest safe route, joints sealed with foil tape.

## Voice

- Plain, specific, a technician explaining things to a homeowner. No
  marketing fluff, no "in today's fast-paced world", no exclamation marks.
- **No dashes of any kind as punctuation** (no em dash, no en dash, no
  spaced hyphen). Use commas, full stops, or "to" for ranges ("$100 to
  $200").
- Short paragraphs, 2 to 4 sentences. Concrete local detail beats general
  claims.
- Spanish is written for a Florida Spanish speaker, not translated: say
  "ventila de la secadora" (not "conducto de secadora"), "ducto", "ático",
  "pelusa", "salida en el techo", "aleta". Use "usted".

## Uniqueness, strictly

The owner's other site, Florida Breeze Air Duct (files under
`/home/user/Airductmiami/src/`), already has dryer vent text. You may read
it for facts such as neighbourhood names, but **do not reuse or closely
paraphrase any sentence, heading or structure from it**. Google treats one
owner's near-duplicate pages across sites as a doorway network. Every city
must also differ from every other city: no shared template paragraphs with
the city name swapped.

Do not invent facts about a place. Use neighbourhoods, landmarks and housing
eras you are confident are real; when unsure, describe the housing type
without naming a neighbourhood.

## City file format

Write TypeScript exactly in this shape (one exported array per file):

```ts
import type { CityContent } from '../cityTypes';

export const cityBatchA: CityContent[] = [
  {
    slug: 'deerfield-beach',
    name: 'Deerfield Beach',
    county: 'Broward County',
    region: 'Broward County', // one of: 'Broward County', 'Palm Beach County', 'Miami-Dade County', 'Southwest Florida', 'Central Florida', 'Tampa Bay'
    nearby: ['pompano-beach', 'boca-raton', 'coconut-creek'], // slugs from the city list only
    neighborhoods: ['The Cove', 'Century Village'], // 3 to 6 real ones
    intro: '...',      // 1 to 2 sentences, EN, what dryer venting is like here
    introEs: '...',    // same idea, written in Spanish
    common: '...',     // EN, one sentence: the failure we find most in this city
    commonEs: '...',
    depth: [            // EN, 3 blocks, each heading + 2 to 3 paragraphs
      { heading: '...', body: ['...', '...'] },
    ],
    depthEs: [          // ES, 2 to 3 blocks, written for the language
      { heading: '...', body: ['...', '...'] },
    ],
    faq: [              // EN, 3 questions specific to this city
      { question: '...', answer: '...' },
    ],
    faqEs: [            // ES, 3 questions
      { question: '...', answer: '...' },
    ],
  },
];
```

Each city: about 450 to 650 words of English and 350 to 550 of Spanish
across these fields. Subjects worth covering per city: the housing stock
and where the laundry and vent run usually are; condo or association rules
and shared risers if relevant; roof caps vs wall hoods; salt air, humidity,
storms, birds, landscaping; what that means for how often to clean; price
stated once per city as the published range.

## Article format

Markdown files with this frontmatter (English in `src/content/blog/`,
Spanish in `src/content/blog-es/`):

```md
---
title: "..."            # keyword first, a number if natural, under 60 characters
description: "..."      # 140 to 155 characters
answer: "..."           # one or two quotable sentences that answer the title
pubDate: 2026-10-21
category: "..."         # EN: Dryer Vent Cleaning | Fire Safety | Installation & Code | Costs & Buying Guides | Condos & Buildings
                        # ES: Limpieza de Ventilas | Prevención de Incendios | Instalación y Código | Costos y Guías | Condominios y Edificios
tags: ["...", "..."]
faq:
  - question: "..."
    answer: "..."
---
```

Body: 900 to 1,400 words, `##` headings, at least one table where a table
helps (prices, code limits, frequencies), the answer in the first
paragraph. Internal links only to paths that exist on this site:
`/services/dryer-vent-cleaning/`, `/services/dryer-vent-repair/`,
`/services/dryer-vent-installation/`, `/services/roof-and-wall-vent-caps/`,
`/services/condo-and-apartment-dryer-vents/`, `/contact/`, `/blog/{slug}/`
for other articles in the same set (Spanish: `/es/servicios/{same slugs}/`,
`/es/contacto/`, `/es/blog/{slug}/`). Never link to any other domain of the
owner's.
