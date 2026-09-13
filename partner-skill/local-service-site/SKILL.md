---
name: local-service-site
description: Build a local service business website that ranks and converts - a multi-page site with service pages, service-area pages, guides, structured data, lead capture and analytics, built data-first on Astro and deployed static. Use when starting a new site for a home-service or trade business, or when extending an existing one with new services, areas or languages.
---

# Building a local service site

_Shared under agreement with the owner. Not to be copied or passed on to anyone else without their written permission._

This is the order the work goes in and what each stage produces. It is a
build sequence, not a content plan: the decisions that make a site rank
are made from the owner's market research, and that research is the input
to stage 1, not something invented here.

Work through the stages in order. Do not start writing pages before the
brief exists and the owner has signed off the page inventory.

---

## 1. The brief comes first

Nothing gets built before there is a written brief for the market this
site is for.

The brief covers the state or metro the business serves, the service
itself and how it is actually performed, what the competition looks like
online, what customers type when they go looking, what languages they
type it in, what the work costs, and how the business takes and fulfils a
job.

**The owner supplies the research and the brief.** Ask for it. If it does
not exist yet, stop and say so rather than substituting assumptions: a
site built on a guess about the market is a site rebuilt later.

Read the brief in full before stage 2. Everything downstream refers back
to it.

---

## 2. Decide what pages exist

From the brief, agree a page inventory with the owner before building.

The inventory usually has four groups:

- **Service pages.** One per thing the business actually sells, at the
  level a customer would name it.
- **Service area pages.** One per place worth its own page.
- **Service by area pages.** A smaller set, where a specific service in a
  specific place is worth separating from the area page that already
  covers it.
- **Guides.** Longer pieces answering the questions people ask before they
  buy.

The shape to aim for is one broad page carrying the phrase with the widest
demand, and narrower pages beneath it for the specific variants. A page
should exist because there is real, recurring demand for the thing it
answers, and because it can say something the page above it does not.

**Which phrases those are is the owner's call, from the brief.** Bring the
proposed inventory back for sign-off. Do not expand it later without
asking: more pages is not better, and a page with nothing of its own to
say costs the pages around it.

---

## 3. Data first, pages second

Everything that repeats across pages lives in typed data files. Templates
render those files. No content is typed directly into a page template.

Expect a data file per kind of thing: services, areas, regions, products
or parts if the trade has them, the business's own details, and the
repeated interface copy. Each entry carries its own slug, its own titles
and description, its own body copy and its own questions.

This is the single most important structural decision in the build. It is
what lets one edit land on every page at once, what keeps 200 pages
consistent, and what makes a second language a mirror rather than a
rewrite. Sites built the other way round stop being maintainable at about
thirty pages.

---

## 4. Templates

Build one template per page type, with dynamic routes reading the data
files. The usual set:

home, service, service area, service by area, guide index and guide,
buying guide if the trade has one, prices, contact, about, FAQ, and a
thank-you page.

Templates hold layout and logic. They hold no facts.

---

## 5. Content

Every page answers its own question in the first screen, in plain words,
before it sells anything. A visitor who has to scroll to find out whether
they are in the right place leaves.

Local pages have to be genuinely local. If an area page could have any
other town's name swapped into it and still read correctly, it is a
duplicate and will be treated as one. Each needs something true and
specific about that place: the housing, the climate, the geography, how
the local rules differ.

**The owner supplies the claims policy, and it is binding.** What may be
published about reviews, ratings, credentials, history, prices and images
is decided there, not here. If something you want to write is not clearly
allowed by it, ask before writing it. This is the part of the build where
a shortcut does permanent damage.

---

## 6. Second language, if the market has one

Where the brief shows real demand in another language, build a full mirror
on its own URL prefix, with its own routes and its own data files, linked
to its counterpart both ways.

Write it for the language. A translation of English copy reads like a
translation and ranks like one, because the words people actually search
in a language are rarely the words a translator picks.

**Whether it is worth it is the owner's call.** It roughly doubles the
content work.

---

## 7. Structured data and the machine-readable surface

Two jobs, both required.

Add JSON-LD to every page type: the business, the service, the questions,
and the breadcrumb trail. It has to describe what is actually on the page.

Then publish the files that let answer engines read the site as a whole
rather than crawling it page by page, and generate them from the same data
the pages are built from so they cannot go stale. A stale summary of the
site is worse than none, because its whole purpose is to be trusted.

---

## 8. How a lead is captured

Decide the conversion surfaces with the owner and then build them to one
shape:

- a form on the contact page,
- a popup that appears on engagement rather than on arrival,
- a booking flow if the business can commit to real appointment times,
- tracked phone links.

Every form emits the same set of fields, whatever surface it came from, so
one pipeline can handle all of them. Prices shown on the site, in the
popup, and by anyone answering the phone must be the same numbers.

If the business cannot honour something a surface promises, the surface
does not promise it. A booking that is not real is worse than no booking.

---

## 9. Measurement and the pipeline

Install analytics and fire an event for each real conversion: a lead
submitted, a phone number tapped. Fire it once per actual event and carry
enough detail with it to tell one lead from another.

Then connect the leads to wherever the owner works them, carrying the
context needed to follow up quickly. Speed of first contact matters more
than almost anything else in this trade.

Confirm the events fire correctly in a real browser before calling it
done. Analytics that quietly counts the wrong thing is worse than
analytics that is missing, because decisions get made on it.

---

## 10. Deploy

Static build, deployed from the repository. One repository can hold more
than one site; if it does, make each site skip its build when nothing it
is made of has changed.

Settle on one canonical URL form and enforce it with a real redirect, not
just a tag. Duplicate URL pairs split a page's signals in half.

---

## 11. After launch

Wait for real data before changing anything. Then change one thing at a
time and write down what you changed, why, and what you expect to move.
A change log is what turns a guess into a result you can learn from.

---

## Stack

Astro for the site, TypeScript for the data files, static output, deployed
on Netlify with its forms and edge functions. Any static generator with
content collections and dynamic routes would do the same job; this is the
one the existing sites use, so a new site matching it can share components
and tooling with them.

---

## What this skill does not decide

Bring these to the owner rather than deciding them here:

- the market research, and the conclusions drawn from it
- which phrases get pages, and which do not
- prices, and how they are presented
- the claims policy, and anything it touches
- the brand and the design system
- whether a second language is worth building

The build is repeatable. The judgement behind it is not, and it is what
makes the difference between a site that ranks and a site that exists.
