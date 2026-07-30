# Shared lead pipeline (network standard)

One pipeline serves every site in the network. A Spanish air duct lead in
Florida and an English garage door lead in New York travel the same path, hit
the same automation, and are handled by the same AI agent. Nothing in the
pipeline is hardcoded per brand; everything the agent needs travels **with the
lead**.

```
site form  ──►  Netlify Forms  ──►  webhook  ──►  Make scenario
(any brand)     (per site)                          │
                                                    ├─►  CRM sheet (all brands, one tab)
                                                    ├─►  owner notification
                                                    └─►  AI voice agent (outbound call)
                                                              │
                                                              └─►  call outcome back to CRM
```

## 1. The lead contract

Every lead form on every site emits these fields. Names are fixed: the
pipeline reads them by key, so renaming one breaks every downstream step.

| Field | Example | Why the pipeline needs it |
|---|---|---|
| `site_id` | `fl-airduct` | Routing, reporting, dedupe |
| `vertical` | `air-duct-cleaning` | Picks the agent's question set |
| `brand` | `Florida Breeze Air Duct` | The name the agent says out loud |
| `locale` | `es` | Language the agent opens in |
| `service_area` | `Florida` | Sanity check on the caller's city |
| `timezone` | `America/New_York` | Never call at 3am local time |
| `source` | `popup` / `contact_form` | Which surface converts |
| `page` | `/es/blog/moho-en-ductos-aire/` | Intent context for the opener |
| `name`, `phone` | | Required on every form |
| `email`, `city`, `service`, `message` | | Optional, present on long forms |
| `offer` | `duct` / `dryer` | Popup only: which promotion was shown |

Implemented by `src/components/LeadMeta.astro`, which reads
`src/data/business.ts`. **Every new site copies both files and edits only the
data file.** No pipeline change is needed to onboard a site.

## 2. The AI agent is one agent, not one per brand

The agent's system prompt is written against the variables, never against a
specific business:

> You are the scheduling assistant for **{{brand}}**, a **{{vertical}}**
> company serving **{{service_area}}**. Speak **{{locale}}** unless the
> customer switches. The customer just submitted a request from
> **{{page}}**. Confirm their details, ask the qualifying questions for
> **{{vertical}}**, and offer the earliest appointment window in
> **{{timezone}}**. Never quote a final price; give the published range and
> say the technician confirms on site.

Two per-vertical assets live in a lookup table the scenario passes in:

- **Qualifying questions**: air duct → property type, number of AC systems,
  reason (smell / dust / mold / routine). Garage door → door type, symptom,
  age, one door or two.
- **Price range**: the same range published on that site, so the call never
  contradicts the website.

Adding a vertical = adding one row to that table. Adding a brand in an
existing vertical = zero work.

## 3. Rules the pipeline enforces

1. **Speed**: outbound call fires within 2 minutes of submission. This is the
   single biggest factor in close rate for home services.
2. **Quiet hours**: no calls before 8am or after 8pm in the lead's
   `timezone`. Outside the window, send the SMS/email and queue the call.
3. **Language**: `locale` decides the opening language, always. The agent may
   switch if the customer answers in another language.
4. **Retry**: no answer → retry at +20 min, then +2 h, then stop. Three
   attempts, never more.
5. **Every outcome is written back**: answered / no answer / booked /
   not interested, plus the transcript link, onto the lead's CRM row.
6. **One CRM, all brands**: a single sheet with `site_id` as a column, never
   one sheet per site. Cross-brand reporting depends on it.

## 4. CRM columns (Google Sheets to start)

`timestamp` · `site_id` · `brand` · `vertical` · `locale` · `name` · `phone` ·
`email` · `city` · `service` · `message` · `source` · `page` · `offer` ·
`call_status` · `booked_at` · `outcome` · `sold_to` · `sale_value` · `notes`

The last five are filled by the agent and by you. `sold_to` + `sale_value`
are what eventually tell you what a lead from each site is actually worth.

## 5. Onboarding a new site to the pipeline

1. Copy `LeadMeta.astro` and `business.ts`, set `siteId`, `vertical`,
   `serviceArea`, `timezone`, brand fields.
2. Point the site's Netlify form notification at the same Make webhook URL.
3. If the vertical is new, add its row (questions + price range) to the
   lookup table.
4. Submit one test lead and confirm it lands in the CRM with the right
   `site_id` and that the agent opens in the right language.

That is the whole integration. No new automation, no new agent, no new
dashboard.
