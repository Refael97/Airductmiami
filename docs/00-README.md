# Network operating manual

How a site in this network gets researched, built, launched, and grown.
Read in this order.

| Phase | File | What it covers |
|---|---|---|
| 0 | `TRUST-AND-CLAIMS.md` | What we may and may not claim. Read first, it constrains everything else |
| 1 | `RESEARCH-PROTOCOL.md` | The nine research passes, and the single brief they produce |
| 2 | `SITE-PLAYBOOK.md` | Build rules: architecture, SEO, GEO, conversion |
| 3 | `AGENT-SURFACE.md` | Making the site readable to AI agents and answer engines |
| 4 | `MEDIA-STANDARD.md` | Imagery: what we generate, what we shoot, what we never fake |
| 5 | `BUILD-PIPELINE.md` | Domain, build, deploy, forms, phone, analytics, CRM |
| 6 | `LAUNCH-CHECKLIST.md` | Phase-gated checklist with a launch gate |
| 7 | `LEAD-PIPELINE.md` | The shared lead contract and the one AI agent |
| 7a | `agents/` | Voice agent briefs, one per site, built on that contract |
| 8 | `MAINTENANCE.md` | The weekly and monthly improvement loop |
| — | `CHANGELOG-SEO.md` | Running log of every change and its result |
| — | `templates/RESEARCH-BRIEF.md` | The template phase 1 fills in |

## The one-paragraph version

Nothing gets built before the research brief is complete and analyzed. The
brief decides the architecture, the languages, the regions, the prices, the
media, and the site's character. Build follows the playbook, ships with an
agent-readable surface, and connects to the shared pipeline: one CRM, one AI
agent, one set of rules, many brands. Then it enters the weekly loop and
never stops improving.

## Site register

| Site | Vertical | Area | Locales | Status |
|---|---|---|---|---|
| `fl-airduct` — Florida Breeze Air Duct | air-duct-cleaning | Florida | en, es | Live, in maintenance |
| `fl-garage` — Garage Door Fixers | garage-door-repair | Florida | en, es | Rebuilt for Florida 6 Sep 2026, 265 pages. Blocked on the Netlify base directory and a brand name check. See `sites/fl-garage/HANDOVER.md` |

### Retired

| Site | What happened |
|---|---|
| `ny-garage` — Garage Door Fixers, New York metro | Launched August 2026, one click in three months. Re-pointed at Florida on 6 September 2026 on the same domain, because Florida had proven demand and fulfillment partners and New York had neither. The template survived; every local word was rewritten. Its research brief is kept at `research/ny-garage/BRIEF.md` as the record of how the template was designed |
