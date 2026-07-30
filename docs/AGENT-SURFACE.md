# Agent surface standard

Increasingly the visitor is not a person. It is an assistant comparing
options for its owner, or an answer engine deciding who to cite. Those
readers want structure, not prose. Every site in the network ships a
machine-readable surface alongside the human one.

## Required files

| File | Purpose |
|---|---|
| `/agent.json` | The whole business as one structured object. The canonical machine answer |
| `/llms.txt` | Short markdown map for LLMs: what the site is, key pages |
| `/llms-full.txt` | Fuller index: every service, area, and article URL |
| `/sitemap-index.xml` | Standard crawler sitemap |
| `/robots.txt` | Allows all major crawlers **and** AI crawlers explicitly |

## `/agent.json` contract

Generated from site data at build time, never hand-maintained. Must include:

```
{
  "site_id", "brand", "vertical", "description",
  "contact": { "phone", "phone_href", "email", "quote_url" },
  "service_area": { "region", "areas": [...] },
  "services": [ { "name", "slug", "url", "summary", "price_range", "typical_duration" } ],
  "pricing_note",           // how quotes work, what changes the price
  "faq": [ { "question", "answer" } ],
  "languages": ["en", ...],
  "hours",
  "standards",              // e.g. "NADCA source removal"
  "updated"
}
```

Rules:

1. **Prices in `agent.json` match the site exactly.** An agent quoting a
   different range than the page is worse than no file.
2. **No claims here that are not on the site**, and none that violate
   `TRUST-AND-CLAIMS.md`. No ratings without real reviews.
3. Every URL absolute, so a fetched fragment stays usable.
4. Regenerated on every build. `updated` reflects build time.

## The visible entry point

A discreet link in the footer of every page, labelled for what it is:

> **For AI agents:** structured business data (JSON)

It exists for two reasons: an agent scanning the page finds the structured
route without guessing, and a human who wants to hand the site to their own
assistant has something to copy.

Do not make it a loud button competing with the lead CTAs. It is
infrastructure, not marketing.

## robots.txt

Allow the AI crawlers explicitly rather than relying on a blanket allow, and
point at both the sitemap and the agent file:

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /
# ... ClaudeBot, PerplexityBot, Google-Extended, CCBot, etc.

Sitemap: https://{domain}/sitemap-index.xml
```

We want to be read, quoted, and recommended. Blocking AI crawlers on a
lead-generation site is self-harm.

## Page-level AEO rules

These belong to every page, not just the JSON:

- Answer-first opening paragraph, quotable standalone
- FAQ block wired to `FAQPage` schema
- Facts in tables: prices, frequencies, durations, limits
- `Service`, `LocalBusiness`, `Article`, `BreadcrumbList` schema as
  applicable
- Self-contained sentences: no "as mentioned above", no "click here"

## Reference implementation

`fl-airduct` ships all of the above. `src/pages/agent.json.ts` is the
generator; copy it and it works from the new site's data files with no
changes.
