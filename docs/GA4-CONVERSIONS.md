# Conversion tracking, and the one part of it that is not code

Written 13 September 2026, after the owner asked for every lead to be
reported as a conversion in Google Analytics.

Property: `properties/545663484`, measurement ID `G-EK5SGJE8MP`.

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
   Event, once each for `service`, `lead_city`, `source`, `form_type` and
   `placement`. GA4 collects the parameters either way, but it will not
   break a report down by one until it is registered, and registration is
   not retroactive.

Nothing above changes what is collected. It changes what is countable.
