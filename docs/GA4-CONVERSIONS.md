# Conversion tracking, and the one part of it that is not code

Written 13 September 2026, after the owner asked for every lead to be
reported as a conversion in Google Analytics.

Property: `properties/545663484`, measurement ID `G-EK5SGJE8MP`.

This file is the air duct site. The garage door site got the same treatment
on 19 September and has its own: `docs/GA4-CONVERSIONS-GARAGE.md`. Event and
parameter names are deliberately shared between the two, so a change to one
should be considered for the other.

## What was actually wrong

The tag was installed and `generate_lead` was already firing. Two things
were broken anyway.

**It was counting the wrong thing.** The event fired on every load of
`/thank-you/` or `/es/gracias/`. That counts a refresh, a back-button
return, and anyone who ever bookmarked the page. Over the 30 days to
13 September GA4 recorded 26 `generate_lead` events from 13 users, which
is the doubling you would expect, against 2 `form_submit` events. The
number the business would have steered by was roughly twice the truth.

**Nothing was marked as a conversion.** The property's key events were
`purchase`, `close_convert_lead` and `qualify_lead`, which are the GA4
defaults for a lead-gen property. None of the three has ever fired here,
and none of them ever will. So the conversion column read zero while real
leads were arriving.

## How it counts now

The form leaves a note in `sessionStorage` on its way out, and the
thank-you page fires the event only if it finds one, then deletes it. No
note, no conversion. A refresh finds nothing. A direct visit finds nothing.
A note older than ten minutes is ignored, because it is not this visit's
lead.

The popup is deliberately excluded from that mechanism: it submits over
`fetch`, stays on the page, and reports its own `generate_lead` when
Netlify confirms the submission. Without the exclusion its note would sit
in storage and fire on some unrelated visit to `/thank-you/` weeks later.

Verified in a real browser: submit then land on the thank-you page fires
once, two further loads of the same page fire nothing, and a direct visit
in a clean session fires nothing.

## The parameters

Both forms now report the same shape, so one report covers both and
"which city" does not depend on which form the lead came through.

| Parameter | Example | Notes |
|---|---|---|
| `form_type` | `quote`, `popup_special` | Which surface |
| `service` | `Dryer Vent Cleaning` | Selected on the contact form, derived from the offer in the popup |
| `lead_city` | `Hollywood` | Typed on the contact form; resolved from the ZIP in the popup |
| `source` | `contact_form`, `popup` | From `LeadMeta.astro` |
| `site_language` | `en`, `es` | |
| `page_path` | `/service-areas/naples/` | The page the form was on, not the thank-you page |

`phone_call` also gained `placement` (`header`, `footer`, `promo_popup`,
`sidebar`, `page_body`), `phone_number` and `site_language`. Eleven calls
and eleven calls of which nine came from the footer are different facts.

## What the owner has to do by hand

There is no Google Analytics Admin API for creating a key event. It exists
in the UI only, so this part cannot be automated and has to be clicked.

1. GA4 → **Admin** → **Events** (under Data display).
2. Find `generate_lead` in the list. Toggle **Mark as key event** on.
3. Do the same for `phone_call`.
4. Optionally, Admin → Key events → remove `purchase`,
   `close_convert_lead` and `qualify_lead`. They have never fired and they
   make the report look like there are five conversion types when there
   are two.

Then, so the parameters above are reportable rather than just collected:

5. Admin → **Custom definitions** → **Create custom dimension**, scope
   Event, once each for `service`, `lead_city`, `source`, `form_type`,
   `placement`, `route` and `site_language`. GA4 collects the parameters
   either way, but it will not break a report down by one until it is
   registered, and registration is not retroactive.

   `route` and `site_language` were missing from this list until 16
   September 2026, which was an omission in this document rather than in the
   code. Both have been firing since the widget shipped. `route` is the one
   that matters most and the one nobody would miss: it carries `chat`,
   `quote`, `call` and `chat_to_quote`, and without it registered you can
   see how many people opened the help bubble but not which of the three
   things they chose to do next. That is the whole question the widget
   exists to answer.

Nothing above changes what is collected. It changes what is countable.

## Google Ads, added 16 September 2026

The owner supplied a conversion snippet from the ad account and asked for it
on every lead, "whether it is the popup, a form, or the chat".

Conversion: `AW-18122873644/MAlUCPvq0vkcEKy21MFD`, value `1.0`, currency
`ILS`. The currency is the ad account's, not the customer's; the value is a
flat placeholder that counts each lead as one. If leads ever get scored, the
value is the field to change.

**It fires wherever `generate_lead` fires, and nowhere else.** That is the
whole design. Both numbers come from the same two lines of code, so the ad
account and GA4 cannot drift apart, and the de-duplication described above
protects both. Pasting the snippet onto the thank-you page instead would
have reintroduced exactly the refresh-counting bug this document opens with,
and would have missed the popup entirely.

The chat needs no wiring: it has no form of its own. Its "get a quote" route
opens the popup, and falls back to `/contact/` on the pages where the popup
is excluded. Both of those already report.

Two things were needed beyond the snippet:

- **`gtag('config', 'AW-18122873644')`.** One `gtag.js` serves several
  destinations, but only those it has been configured for. Without this line
  a `send_to` naming the ad account is dropped silently, which is the failure
  where the tag looks installed and reports nothing.
- **`transaction_id`.** Minted once when the lead is submitted and carried
  with it, so both sends of one lead would carry the same id and Google keeps
  one. A fresh random id per call fills the field and defeats its purpose. It
  is kept out of the GA4 event so the parameter table above still holds.

Verified in a real browser against a fresh build, fifteen assertions in
`.ads-conversion.mjs`: one conversion and one `generate_lead` from the popup,
from `/thank-you/` and from `/es/gracias/`; correct `send_to`, value and
currency; the AW destination actually configured; `lead_id` absent from the
GA4 event; and a reload of the thank-you page firing nothing.

Nothing to click for this one. Google Ads conversion actions are created in
the ad account, and this one already exists, which is where the snippet came
from.


## The help widget's own events

| Event | Fires when | Parameters |
|---|---|---|
| `help_open` | The floating bubble is opened | `page_path`, `site_language` |
| `help_route` | A route is chosen inside it | `route`, `site_language` |

`route` takes `chat`, `quote`, `call` or `chat_to_quote`, the last being the
assistant deciding it has understood the job and opening the quote form
itself rather than the visitor picking it.

`help_open` fires on every open, so closing and reopening the bubble counts
twice. That is the right behaviour, and it means the number to read in GA4 is
Users rather than Event count.

Verified in a real browser by `.chat-events.mjs`, which exists because these
two calls sit inside a click handler that also does the visible work: if the
gtag call stops firing, nothing about the widget looks broken.
