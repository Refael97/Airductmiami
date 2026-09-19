# Conversion tracking on the garage door site

Written 19 September 2026, after the owner asked for the same conversions and
tracking the air duct site got on 13 September.

Site: `garage-door-fixers.com` (`sites/fl-garage/`).
Property: measurement ID `G-B1T6H15GFN`.

The air duct site's equivalent is `docs/GA4-CONVERSIONS.md`. The two are kept
deliberately close — same event names, same parameter names — so one habit
reads both properties. Where they differ, this file says why.

## What was wrong

Both faults the air duct site had, this site had too.

**It counted the wrong thing.** `generate_lead` fired on every load of
`/thank-you/` or `/es/gracias/`. That counts a refresh, a back-button return
and anyone who bookmarked the page. On the sister property that turned 13
real leads into 26 recorded ones: roughly twice the truth, on the one number
the business steers by.

**It described the wrong thing.** The event was hard-coded with
`source: 'contact_form'` and `page_path` read from the thank-you page. So a
lead from the parts request form, the door request form or the quote modal
all arrived looking identical, and none of them said which page the visitor
had been reading when they decided to ask.

A third gap: **no lead detail at all.** No service, no job type, no symptom,
no ZIP. The property could say how many leads arrived and nothing about what
any of them wanted.

## How it counts now

The form leaves a note in `sessionStorage` on its way out, and the thank-you
page fires the event only if it finds one, then deletes it. No note, no
conversion. A refresh finds nothing. A direct visit finds nothing. A note
older than ten minutes is ignored, because it is not this visit's lead.

Two things are specific to this site and both matter.

**The note is written in the bubble phase, and skipped when
`defaultPrevented`.** The quote wizard validates in its own submit handler
and calls `preventDefault()` on an out-of-area ZIP, a fill faster than four
seconds, or a message that scores as a sales pitch. A capture-phase listener
runs *before* that handler, so it would have written a note for a submission
the browser never sent — and that note would then fire a conversion if the
visitor reached the thank-you page by any other route within ten minutes.
Bubble phase lets the form have its say first.

**The note is keyed on `site_id`, not on `data-netlify`.** `site_id` is the
network lead contract that every lead form carries through `LeadMeta.astro`,
so this keeps working if the site is ever switched to post to a direct
endpoint instead of Netlify Forms.

The popup is excluded from the mechanism by id. It submits over `fetch`,
stays on the page, and reports its own `generate_lead` when Netlify confirms
the submission. Without the exclusion its note would sit in storage and fire
on some unrelated visit to `/thank-you/` weeks later.

## The parameters

Every lead surface reports the same shape, so one report covers all four and
"which job" does not depend on which form the lead came through.

| Parameter | Example | Notes |
|---|---|---|
| `form_type` | `quote`, `popup_special`, `part-request`, `door-request` | Which surface. Taken from the form's `form-name`, except the popup which names itself `popup_special` |
| `service` | `Garage Door Spring Replacement` | Selected on the quote form; derived from the offer in the popup |
| `job_type` | `repair`, `new_door`, `opener` | The wizard's first question. Empty from the popup |
| `symptom` | `Door will not open` | What is actually wrong. Empty from the popup |
| `lead_zip` | `33012` | The geography this site collects |
| `lead_city` | | **Always empty here.** Kept in the shape so one report can cover both sites; this site asks for a ZIP and never for a city, and a city guessed from a ZIP is not worth the column until the lookup is ported |
| `urgency` | `Today if possible` | From the wizard. Empty from the popup |
| `source` | `contact_form`, `popup`, `part_request`, `door_request` | From `LeadMeta.astro` |
| `site_language` | `en`, `es` | |
| `page_path` | `/services/garage-door-spring-replacement/` | The page the form was on, **not** the thank-you page |

`lead_id` is minted per submission and deliberately **not** in the GA4 event.
It exists for Google Ads deduplication only, and adding it here would mean a
custom dimension with one distinct value per lead.

## Every event this site emits

| Event | Fires when | Should be a key event |
|---|---|---|
| `generate_lead` | A lead is confirmed, once | **Yes** |
| `phone_call_tap` | Any `tel:` link is tapped, with `placement` | **Yes** |
| `phone_call` | Alongside the above | No — kept only so the existing history stays one continuous series |
| `conversion` | A lead, sent to Google Ads | n/a, this one is for Ads |
| `quote_start` | First interaction with the wizard | No |
| `quote_step` | Each step of the wizard is reached | No — this is the funnel |
| `quote_blocked` | A required field stopped the submit | No |
| `quote_blocked_spam` | The wizard rejected the submission | No |
| `booking_open` | The quote modal is opened | No |
| `popup_view` / `popup_close` | The promo popup | No |
| `help_open` / `help_route` | The floating help widget, and which of the three ways in was taken | No |

`quote_step` is the most useful of the non-conversion events and nobody has
looked at it yet: it says which step of the three-step wizard people give up
on, which is the cheapest conversion-rate work available on this site.

## Google Ads

Wired and inert. `business.adsId` and `business.adsLeadSendTo` in
`sites/fl-garage/src/data/business.ts` are both empty strings, and while
they are empty the layout skips the `gtag('config')` line and every
conversion send. Nothing fires and nothing errors.

To switch it on, paste both halves of the conversion snippet Google gives
you:

```ts
adsId: 'AW-XXXXXXXXX',
adsLeadSendTo: 'AW-XXXXXXXXX/AbC-dEfGhIj',
```

The label after the slash is the half people leave out. A `send_to` naming a
destination that was never configured is dropped in silence — the failure
mode where the tag looks installed and reports nothing.

Note the currency is `USD` here, against `ILS` on the air duct site. That is
not a considered choice on either side; whoever sets up the Ads account
should make the two agree with the account's own currency.

## What is not code, and is still not done

Registering a custom dimension is a UI action with no API, and **it is not
retroactive**: a dimension registered tomorrow shows nothing for today. Until
these exist, every parameter above is collected and then discarded at report
time.

In GA4 → Admin → Custom definitions → Create custom dimension, event-scoped:

`form_type` · `service` · `job_type` · `symptom` · `lead_zip` · `urgency` ·
`source` · `site_language` · `page_path` · `placement` · `route` · `step`

Then in Admin → Events, mark as key events:

- `generate_lead`
- `phone_call_tap`

The same list is outstanding on the air duct property. Doing both in one
sitting is twenty minutes and is the single highest-value unbilled action on
either site.

## Verified

`sites/fl-garage/.ga-conversions.mjs`, in a real browser against the built
site. 29 checks: one lead per submission and none for a reload, a second
visit or a direct visit; the event describing the form rather than the
thank-you page; a wizard-rejected submission leaving no note and firing
nothing; the popup reporting itself once and leaving no note behind; phone
taps carrying a placement; and Google Ads staying silent while the id is
empty.
