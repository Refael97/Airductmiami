/**
 * Illustration images for service and buyer's guide pages.
 *
 * Two rules govern everything here.
 *
 * First, these are illustrations, not evidence. Every image is generated,
 * every page that shows one carries a note saying so, and none of them is
 * ever presented as a photograph of work this business performed. See
 * docs/TRUST-AND-CLAIMS.md. The same images must never be uploaded to a
 * Google Business Profile, where photos are read as documentation of the
 * business rather than as editorial illustration.
 *
 * Second, an entry here renders only if the file actually exists on disk.
 * Images are produced through a service whose CDN this build environment
 * cannot reach, so they arrive in the repo separately. `hasImage` checks
 * `public/` at build time, which means a missing file degrades to no image
 * rather than to a broken one, and the page starts showing it the moment
 * the file lands. No template edit needed.
 */
import fs from 'node:fs';
import path from 'node:path';

export interface PageImage {
  /** Filename inside public/images. */
  file: string;
  /** Describes the hardware, never repeats the heading. */
  alt: string;
}

/** True when the file is present in public/images at build time. */
export function hasImage(img: PageImage | undefined): img is PageImage {
  if (!img) return false;
  return fs.existsSync(path.join(process.cwd(), 'public', 'images', img.file));
}

/** Service slug to its illustration. */
export const serviceImages: Record<string, PageImage> = {
  'garage-door-spring-replacement': {
    file: 'broken-torsion-spring.webp',
    alt: 'Snapped torsion spring on its shaft above a garage door, the coil separated with the ends splayed either side of the break',
  },
  'garage-door-off-track-repair': {
    file: 'garage-door-off-track.webp',
    alt: 'Garage door with the top section pulled out of its vertical track and leaning inward, the roller clearly out of the rail',
  },
  'garage-door-cable-repair': {
    file: 'frayed-lift-cable.webp',
    alt: 'Frayed galvanised lift cable at the bottom bracket, individual wire strands broken and splayed outward with rust staining',
  },
  'garage-door-tune-up': {
    file: 'worn-garage-door-rollers.webp',
    alt: 'Worn garage door roller in its hinge, nylon wheel cracked and bearing seized, with grease staining around the stem',
  },
  'garage-door-opener-repair': {
    file: 'opener-motor-unit.webp',
    alt: 'Chain drive opener motor unit with the light lens removed, exposing the sprocket, drive chain and safety sensor terminal block',
  },
  'garage-door-opener-installation': {
    file: 'new-belt-drive-opener.webp',
    alt: 'Newly installed belt drive opener on garage ceiling joists, rubber belt running along the rail to the trolley and door arm',
  },
  'smart-garage-door-opener-installation': {
    file: 'smart-wall-console.webp',
    alt: 'Smart garage door wall console with a backlit display, motion sensor lens and a lit status indicator, mounted beside the door',
  },
  'garage-door-panel-replacement': {
    file: 'dented-garage-door-panel.webp',
    alt: 'Garage door with the bottom section dented and creased inward across two thirds of its width, the panels above undamaged',
  },
  'new-garage-door-installation': {
    file: 'new-garage-door-installed.webp',
    alt: 'Newly installed white raised panel steel double garage door on a suburban house, closed and squarely aligned',
  },
  'emergency-garage-door-repair': {
    file: 'garage-door-stuck-at-night.webp',
    alt: 'Garage door jammed a third of the way open at night, light spilling out from inside across a wet driveway',
  },
};

/** Buyer's guide slug to its illustration. Door materials and drive types. */
export const productImages: Record<string, PageImage> = {
  'steel-garage-doors': {
    file: 'steel-garage-door.webp',
    alt: 'White pressed steel raised panel garage door, showing the stamped panel texture and crisp shadow lines',
  },
  'aluminium-garage-doors': {
    file: 'aluminium-glass-garage-door.webp',
    alt: 'Contemporary flush garage door in anodised aluminium framing with wide bands of translucent frosted glass',
  },
  'wood-garage-doors': {
    file: 'wood-carriage-garage-door.webp',
    alt: 'Stained cedar carriage house garage door with visible timber grain, black strap hinges and square upper windows',
  },
  'fiberglass-garage-doors': {
    file: 'fiberglass-garage-door.webp',
    alt: 'Fiberglass garage door with a moulded woodgrain finish in oak tone, the composite sheen visible across the surface',
  },
  'vinyl-garage-doors': {
    file: 'vinyl-garage-door.webp',
    alt: 'Plain white vinyl garage door with shallow recessed panels and a soft low sheen surface',
  },
  'chain-drive-openers': {
    file: 'chain-drive-rail.webp',
    alt: 'Steel roller chain running along the top of an opener T-rail, links and sprocket in close focus',
  },
  'belt-drive-openers': {
    file: 'belt-drive-rail.webp',
    alt: 'Wide reinforced rubber belt running along an opener rail to the trolley, with no chain links anywhere',
  },
  'screw-drive-openers': {
    file: 'screw-drive-rail.webp',
    alt: 'Threaded steel screw shaft running down the centre of an opener rail, coated in white lithium grease, trolley riding on the thread',
  },
  'direct-drive-openers': {
    file: 'direct-drive-opener.webp',
    alt: 'Compact direct drive motor block riding on a fixed opener rail, with no chain, belt or exposed drive visible',
  },
  'jackshaft-wall-mount-openers': {
    file: 'jackshaft-wall-mount-opener.webp',
    alt: 'Wall mounted jackshaft opener bolted beside the door opening driving the torsion shaft, the garage ceiling left completely clear',
  },
};
