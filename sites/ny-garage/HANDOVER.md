# Garage Door Fixers, build handover

Site two of the network. Built, verified, and waiting on things only you
can do. This file is the current state and the exact next actions.

## What exists

131 pages, all static, zero JavaScript except a 1KB scroll reveal.

| Cluster | Count | Path |
|---|---|---|
| Home | 1 | `/` |
| Published prices | 1 | `/prices/` |
| Services | 11 | `/services/` and 10 service pages |
| Regions | 6 | `/service-areas/{region}/` |
| Cities | 41 | `/service-areas/{city}/` |
| Buyer's guide | 11 | `/buyers-guide/` plus 5 materials and 5 opener types |
| Brands | 5 | `/brands/{brand}/` |
| Articles | 48 | `/blog/` plus 48 guides |
| Core | 5 | About, FAQ, Contact, Thank you, Privacy |
| Agent surface | 3 | `/agent.json`, `/llms.txt`, `/llms-full.txt` |

Everything renders from typed data files in `src/data/`. Change a price
in `services.ts` and it changes on the service page, the price list, the
homepage panel, every city page, `agent.json` and both llms files at
once. They cannot drift apart, which matters because publishing prices is
this site's entire differentiator.

## Blocked on you

**1. The domain.** Done. `garage-door-fixers.com`, registered at
Cloudflare on 2026-08-02. `astro.config.mjs`, `public/robots.txt` and the
business email in `src/data/business.ts` all point at it.

What is left on the domain is the connection, and it has to happen in
this order:

1. Create the Netlify site from this repo with `base = "sites/ny-garage"`
2. Take the Netlify DNS target it gives you
3. Point Cloudflare at it: a CNAME on `www` to the Netlify target, and an
   apex record. Cloudflare's CNAME flattening handles the apex, so a
   CNAME on the root works
4. Set the Cloudflare proxy to DNS only, not proxied. Netlify issues its
   own certificate and the orange cloud fights with it
5. Let Netlify provision the certificate, then verify both
   `garage-door-fixers.com` and `www.garage-door-fixers.com` resolve and
   that one 301s to the other rather than both serving

One thing worth knowing about this domain: hyphens are fine for search,
Google reads the words either way. Where they cost you is anything spoken
aloud, because "garage hyphen door hyphen fixers dot com" is hard to say
on a phone call. If you ever buy the unhyphenated version, point it at
the same site with a 301 rather than duplicating anything.

**2. A real phone number.** `src/data/business.ts` carries
`(516) 000-0000` as a placeholder and it appears in the footer, the
contact page and `agent.json`. It needs a real 516, 631, 718 or 914
number with inbound routing before launch. Per `docs/LAUNCH-CHECKLIST.md`
this is a launch gate, not a build gate.

**3. Confirm the brand name is clear.** Check there is no conflicting
registered New York business called Garage Door Fixers before anything is
printed or filed.

**4. A fulfillment partner in New York.** Per the launch checklist this
blocks launch. You said you have someone; the site needs to know their
coverage so the arrival windows we promise are real.

## Deliberately not done

**No street address.** This is a Service Area Business. The contact page
says so explicitly rather than listing a mailbox. See
`docs/TRUST-AND-CLAIMS.md`.

**No reviews, no rating, no review count.** Not on the pages, not in the
schema, not in `agent.json`, which carries `rating: null` and an explicit
note telling agents not to infer one. The FAQ answers the question
directly: we do not have enough real ones yet and we are not going to
write them.

**No before and after imagery.** The component pattern exists in the
media standard and stays unused until real jobs produce real photos.

## Next content batch

The research brief plans 55 articles and 48 exist. The remaining seven
are lower priority than everything already written:

- Garage door permits and historic districts in New York
- Best time of year to replace a garage door
- Garage door R-value explained in depth
- Single versus double door, cost and practicality
- Garage door weather seal replacement
- How often to service a garage door
- Long Island garage door repair, a regional overview

## Spanish mirror

The research says yes, full mirror, because Spanish is the largest
non-English language across Queens, the Bronx and Brooklyn and no local
competitor publishes in it. `src/data/ui.ts` still contains the Florida
site's strings and needs rewriting for this vertical before the mirror is
built. Brentwood already carries one Spanish FAQ answer as a marker.

Russian is the second candidate, and the geographic overlap with
garage-owning neighborhoods around Sheepshead Bay and Brighton Beach is
unusually clean. Phase two.

## Hosting: Netlify or Cloudflare Pages

The site runs on either. The form is what used to tie it to Netlify, and
no longer does.

Leave `PUBLIC_FORM_ENDPOINT` unset and the form uses Netlify Forms, which
is how site one works. Set it to a URL, in the host's environment
variables, and the form posts straight there instead, carrying the same
eight network lead fields. Point it at a Make webhook and any host works.

It is `PUBLIC_` because the value ends up in the HTML. That is fine for a
webhook address, which is not a credential. Never put a signing secret in
it.

### Cloudflare Pages settings

```
Root directory:   sites/ny-garage
Build command:    npm run build
Output directory: dist
```

Cloudflare Pages is free with no site limit, and the domain already lives
in the same Cloudflare account, so connecting it is one click rather than
two DNS records.

**Two things to check the moment a Cloudflare deploy is up**, because
neither is a Netlify concern and both are easy to miss:

1. **Trailing slashes.** This site canonicalises to the slash form:
   `/prices/`, not `/prices`. Every canonical tag, the sitemap and every
   internal link assume it, and on Netlify it is enforced by
   `netlify/edge-functions/trailing-slash.ts`, which Cloudflare will not
   run. Cloudflare Pages applies its own normalisation to static output,
   and if it strips the slash instead of adding it, the canonical tags
   and the served URLs disagree, which is the exact duplicate-URL problem
   that cost site one thirty page pairs in Search Console. Load `/prices`
   and `/prices/` and see which one wins before pointing the domain at
   it. If Cloudflare strips the slash, the fix is `trailingSlash` and
   `build.format` in `astro.config.mjs` plus dropping the trailing
   slashes from internal links, not fighting the platform.

2. **The edge function.** `netlify/edge-functions/trailing-slash.ts` is
   Netlify-only and is dead code on Cloudflare. Whatever the check above
   concludes replaces it.

## Running it

```
cd sites/ny-garage
npm install
npm run dev      # localhost:4321
npm run build    # writes dist/
```

Netlify deploys from `base = "sites/ny-garage"` in `netlify.toml`. The
form is Netlify Forms with a honeypot; `LeadMeta.astro` puts the eight
network lead fields on it so one pipeline and one agent can serve this
brand alongside the Florida site without per-site logic.
