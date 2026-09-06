# Imagery

Generated illustrations. Per `docs/MEDIA-STANDARD.md` these may
illustrate and may not impersonate: they show the kinds of door and the
kinds of failure common in Florida, and every page that carries one says
so in a caption underneath. None of them is presented as our own work,
and none of them may ever be uploaded to a Google Business Profile or a
directory listing, where photos are read as documentation of the
business rather than as editorial illustration.

The build environment cannot reach the generation CDN, so these files
are uploaded to the repository by hand rather than fetched. Until a file
is present the page lays out correctly without it: `hasImage()` in
`src/data/pageImages.ts` checks `public/images` at build time, so a
missing file degrades to no image rather than to a broken one, and the
page starts showing it the moment the file lands. No template edit
needed.

Alt text is written per language in `pageImages.ts`. Alt text is
content, so it is written, not translated.

## Still needed

The three homepage door cards and the hurricane service illustration.
The New York equivalents were deleted when the site moved, because a
Brooklyn stoop and a Westchester carriage house illustrate nothing about
a Florida garage.

| File | Used by | What it shows |
|---|---|---|
| `florida-cbs-double-door.webp` | Doors band, card 1, and the Miami-Dade region | 1980s concrete block and stucco house, barrel tile roof, single sixteen foot white steel double door, a palm in the yard |
| `coastal-impact-garage-door.webp` | Doors band, card 2, the hurricane-rated service page, and the homepage storm band background | Impact-rated steel door on a coastal block house, heavy horizontal reinforcing struts visible through the open door |
| `new-build-three-car-garage.webp` | Doors band, card 3, and Central Florida | Master planned subdivision, new two storey house, a double door and a single door in matching tan |

The storm band falls back to a flat navy gradient without its image, so
nothing breaks while they are missing.

## Already in the repository

Twenty one files covering the failures and the buyer's guide: the
snapped torsion spring, the frayed lift cable, the off-track door, the
worn rollers, the dented panel, the opener motor unit, the new belt
drive opener, the smart wall console, the door stuck at night, the parts
overview, the new door installed, five door materials and five opener
drive types. These are all mechanism and hardware shots, so they carried
over from the New York build unchanged: a torsion spring looks the same
in Naples as it does in Nassau.

## Generation rules that apply

From the media standard, and they are not optional:

- Prompt for the region. Florida houses are concrete block and stucco
  with barrel tile or shingle, low pitched roofs, no basements, palms
  and St. Augustine grass. Not clapboard, not brick rowhouses, not snow.
- Match the brand palette so generated imagery sits inside it.
- No visible text in generated images. Text is added in HTML so it stays
  translatable and searchable.
- No recognizable faces presented as staff or customers.
- No fabricated brand names, license plates or signage.
- Generate at 2x the display size, then convert to WebP and optimize.
  The display slot is 4:3, so generate at 2400x1800 and ship about
  1200x900.
- Explicit width and height on every image, which the templates already
  set, so a slow image cannot shift the layout.

## When real photos arrive

The first completed jobs produce real before and after photos, and those
are the only images on this site that may be presented as our own work.
They go in a gallery of their own, labelled with the city and the
service, and they replace the illustrations on the pages they cover.
The before and after component pattern exists in the media standard and
stays unused until then.
