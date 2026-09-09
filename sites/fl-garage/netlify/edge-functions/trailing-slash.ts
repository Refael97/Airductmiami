/**
 * 301-redirect extensionless paths to their trailing-slash form so Google
 * sees exactly one URL per page. Search Console showed 30 page pairs
 * (/page and /page/) each collecting separate impressions, and on some
 * Google overrode the canonical tag, so a real server-side redirect is
 * needed.
 *
 * Two things this must not touch. Anything under /api/ is a function, not
 * a page: a 301 there is silently destructive, because a browser following
 * a redirect for a POST reissues it as a GET, so the request arrives at the
 * endpoint with its method changed and its body gone. That is exactly what
 * broke the help widget's chat, which posts to /api/chat. And any request
 * that is not a GET or a HEAD has nothing to do with canonical page URLs
 * in the first place, so it is left alone whatever its path.
 *
 * Why an edge function and not [[redirects]] in netlify.toml: Netlify's
 * redirect matcher ignores trailing slashes, so a forced /page -> /page/
 * rule matches its own target and loops forever (this happened on
 * /thank-you/). This function compares the raw pathname string, and its
 * target always ends with a slash, which the condition never matches, so
 * a loop is impossible by construction.
 */
export default (request: Request) => {
  // Canonicalisation is a GET concern. A POST, PUT or DELETE cannot survive
  // a 301 with its method and body intact, so it never gets one.
  if (request.method !== 'GET' && request.method !== 'HEAD') return undefined;

  const url = new URL(request.url);
  const { pathname } = url;
  // Skip the root, paths already ending in a slash, and real files (.xml,
  // .txt, .png, ...). Everything else is an Astro page served from
  // /path/index.html, so the slash form is the canonical one.
  if (!pathname.endsWith('/') && !/\.[^/]+$/.test(pathname)) {
    url.pathname = `${pathname}/`;
    return Response.redirect(url.toString(), 301);
  }
  // Fall through to normal static serving.
  return undefined;
};

export const config = {
  path: '/*',
  excludedPath: [
    '/api/*',
    '/images/*', '/_astro/*', '/*.xml', '/*.txt', '/*.svg', '/*.png', '/*.ico', '/*.webp',
  ],
};
