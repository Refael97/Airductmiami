/**
 * 301-redirect extensionless paths to their trailing-slash form so Google
 * sees exactly one URL per page. Search Console showed 30 page pairs
 * (/page and /page/) each collecting separate impressions, and on some
 * Google overrode the canonical tag, so a real server-side redirect is
 * needed.
 *
 * Why an edge function and not [[redirects]] in netlify.toml: Netlify's
 * redirect matcher ignores trailing slashes, so a forced /page -> /page/
 * rule matches its own target and loops forever (this happened on
 * /thank-you/). This function compares the raw pathname string, and its
 * target always ends with a slash, which the condition never matches, so
 * a loop is impossible by construction.
 */
export default (request: Request) => {
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
  excludedPath: ['/images/*', '/_astro/*', '/*.xml', '/*.txt', '/*.svg', '/*.png', '/*.ico', '/*.webp'],
};
