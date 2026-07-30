# Build pipeline

From an approved research brief to a live site in the network. Steps run in
order; each one has a verification that must pass before moving on.

## 0. Prerequisites

- [ ] `research/{site-id}/BRIEF.md` complete, with the action plan section
      filled in
- [ ] Fulfillment partner confirmed for the area
- [ ] Brand name decided, checked against existing businesses in the area so
      we are not stepping on a real company's name

## 1. Domain

Register or add the domain in Cloudflare, DNS only (grey cloud) for the
Netlify records. Cloudflare Registrar requires a payment method on the
account; if registrar access is unavailable, register elsewhere and add the
zone to Cloudflare for DNS.

Records after the Netlify site exists:

```
A     @      75.2.60.5
CNAME www    {netlify-subdomain}.netlify.app
```

Both **DNS only**, never proxied: the orange cloud breaks Netlify's
certificate issuance.

**Verify**: `dig` resolves, and Netlify shows the custom domain as verified
with SSL issued.

## 2. Repo

Clone the template from the reference site (`fl-airduct`) and strip it to the
skeleton:

Keep: layouts, components, `lib/schema.ts`, `data/ui.ts`, `LeadMeta.astro`,
`agent.json.ts`, styles, `netlify.toml`, the trailing-slash edge function.

Replace: `business.ts`, `services.ts`, `cities.ts`, `regions.ts`, all
content, logo, colors, imagery.

**Set immediately** in `business.ts`: `siteId`, `vertical`, `serviceArea`,
`timezone`, name, phone, email. No street address (see
`TRUST-AND-CLAIMS.md`).

## 3. Design adaptation

The layout system carries over; the identity does not. Per site:

- Color tokens in `global.css`: primary, accent, ink, gradients. Pick from
  the vertical's expectations found in research, not from taste
- Typography: keep the display + body pairing structure, change the faces
- Logo and favicon
- Service icons: the icon component's slugs change with the service list
- Hero imagery per `MEDIA-STANDARD.md`

**Every layout is verified at 375px, 390px, and 1280px before launch.**
Desktop-first or mobile-first is not the question; both must be right.

## 4. Content

Built from the action plan: services, cities, regions, articles, second
language if approved. Voice from the brief's "site character" section, human
writing rules from `SITE-PLAYBOOK.md`, no em dashes.

## 5. Deploy

Netlify: new site from the repo, build `npm run build`, publish `dist`,
Node 20. Add the custom domain, wait for SSL.

**Verify**: home, a service, a city, a region, an article load over HTTPS in
every language.

## 6. Forms and lead contract

- Contact form + thank-you page per language, `data-netlify`, honeypot
- `LeadMeta.astro` inside every form with the right `source`
- Popup and sticky quote bar wired
- Netlify form notifications on, pointed at the shared pipeline webhook and
  at an inbox that is read

**Verify**: submit a real test lead. It must arrive with the correct
`site_id`, `vertical`, `locale`.

## 7. Phone

Each site gets its own number, provisioned in the telephony account with a
local area code from the target market.

Requirements:
- **Inbound must work.** A number that only dials out is a dead end for
  anyone who calls back. Inbound routes to the AI agent, which can take a
  message or book, and forwards urgent calls
- Outbound caller ID uses the same number, so callbacks return to us
- The number goes in `business.ts` only, and flows to header, footer,
  schema, and `agent.json` from there

**Verify**: call the number from a phone. It answers.

## 8. Measurement

- GA4 property, tag in `BaseLayout`, events `phone_call`, `generate_lead`,
  `popup_view`, `popup_close`
- Mark `generate_lead` and `phone_call` as Key Events
- Search Console domain property, sitemap submitted
- GA4 linked to Search Console

**Verify**: Realtime shows your own visit; a test submission produces
`generate_lead`.

## 9. Agent surface

`agent.json`, `llms.txt`, `llms-full.txt`, `robots.txt` with AI crawlers
allowed, footer link. See `AGENT-SURFACE.md`.

**Verify**: `/agent.json` returns valid JSON with correct prices and a full
service and area list.

## 10. Pipeline connection

- Netlify form webhook points at the shared Make scenario
- Site row added to the CRM's site register
- If the vertical is new, its row is added to the agent's question and price
  lookup
- Site character from the brief added to the agent's persona table

**Verify**: end-to-end test lead reaches the CRM and triggers a call in the
right language.

## 11. Handover to maintenance

Add the site to `00-README.md`'s register, open its `CHANGELOG-SEO.md`, and
start the weekly loop in `MAINTENANCE.md`.

First 30 days per `LAUNCH-CHECKLIST.md` phase 6: manual indexing requests,
citations, first review request from the first completed job.
