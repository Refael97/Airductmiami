# Research protocol

No site is built before this is done. Nine passes, one output file, one
analysis, one action plan. The research decides the architecture; we do not
decide the architecture and then look for research to support it.

Output goes in `research/{site-id}/BRIEF.md`, built from
`docs/templates/RESEARCH-BRIEF.md`. Raw findings (competitor crawls, keyword
exports, review scrapes) go beside it in the same folder.

---

## Pass 1 — Market general

What the service is, who buys it, what triggers a purchase, seasonality,
typical job value, how urgent a typical job is (emergency vs planned). Local
regulation or licensing that affects the pitch.

**Output**: half a page of market shape, plus the seasonality curve if one
exists.

## Pass 2 — Competitors, general

The national and multi-region players in the vertical. What their sites do,
how they structure services, what they lead with.

**Output**: 5 to 10 competitors, one line each on their angle.

## Pass 3 — Competitors, local

Who actually serves the target geography. Include the small operators, not
just the polished ones: they show what customers in that market expect.

**Output**: 10 to 20 local competitors with URL, size signal, and coverage.

## Pass 4 — Competitors, top organic

The sites ranking top 3 for the money queries. These are the blueprint.

**Output**: for the top 5, a full crawl (see below).

## Full-crawl requirement

Passes 3 and 4 require reading the competitor sites properly, not glancing at
homepages. For each:

- Page inventory: how many service pages, city pages, articles, and what URL
  patterns
- Homepage structure section by section, and the order of sections
- Which services are treated as headline vs secondary
- Price disclosure: published, ranges, "call us", or hidden
- Trust block: what they use, and what they claim
- Media: photo types, counts, video presence, before/after usage
- CTAs: what, where, how many, phone vs form
- Schema present, and page title patterns
- Content depth: word counts on money pages, FAQ presence
- Languages offered

**Output**: one table per competitor, plus a "what they all do" and "what
none of them do" list. The second list is where the opening is.

## Pass 5 — SEO landscape

Domain age and authority of the leaders, backlink profile shape (real
citations vs directory spam), how strong the local pack is, whether
directories (Yelp, Angi, Thumbtack) own the top results. Directory-dominated
SERPs are the easiest markets to enter.

## Pass 6 — Keywords

Head terms, city modifiers, service modifiers, question queries, cost
queries, emergency queries. Volume, difficulty, and above all **commercial
intent**. Only invest in keywords that can produce a lead.

**Output**: a keyword table grouped into money terms, local terms, and
informational clusters, each mapped to the page type that will target it.

## Pass 7 — Languages

Speaker population in the service area, and whether competitors publish in
that language. The pattern from site one: large Spanish-speaking population +
English-only competitors = pages ranking on page 1 within weeks.

For New York specifically, check Spanish and also Russian, Polish, Chinese,
and Korean concentrations by borough before deciding.

**Output**: go / no-go per language, with the evidence.

## Pass 8 — Geography and economics

Which cities, boroughs, or counties are worth pages. Weigh population,
housing type and age (which drives the service need), median income, and
competitor density. A dense wealthy area with weak competitors beats a bigger
area with strong incumbents.

**Output**: ranked list of 30 to 40 target areas, plus the 3 to 5 regional
groupings for the region pages.

## Pass 9 — Prices, media, and how the business actually works

**Prices**: real ranges by job type in that market, from competitor sites,
directory quotes, and review mentions. These become the site's published
ranges and the AI agent's script. They must be real.

**Media**: what this vertical's customers expect to see. Before/after? Work
in progress? Equipment? Team? Atmosphere only? Video walkthroughs? UGC? Note
counts and placement.

**How it works**: read the Google Business Profile reviews of the top local
players, several dozen at least. Extract:
- What products/services actually get sold, and what gets upsold
- The questions customers ask before buying
- The complaints (these become our differentiators and our FAQ)
- The compliments (these become our trust block and our promises)
- The words customers use, which become our copy

**Output**: price table, media plan, and a "voice of customer" list of the
top 15 recurring questions, complaints, and compliments.

---

## Analysis and action plan

Only after the brief is complete:

1. **Architecture**: page counts by bucket, derived from what the top organic
   competitors have plus the gaps they leave.
2. **Languages**: confirmed from pass 7.
3. **Target areas**: from pass 8, with the region groupings.
4. **Service list and prices**: from pass 9.
5. **Content plan**: article clusters mapped from pass 6 and the customer
   questions in pass 9.
6. **Differentiation**: taken directly from competitor complaints. If every
   review complains about no-shows, the site sells punctuality.
7. **Site character**: the brand's personality, tone, and promise, written
   explicitly, because it feeds both the copy and the AI agent's persona.
8. **Media plan**: what gets generated, what must be shot for real, and what
   the site launches without.

The action plan is a section of the brief, not a separate document. Build
starts from it.
