#!/usr/bin/env python3
"""
Static SEO audit of one built site (an Astro `dist` folder).

Run after `npm run build`, before any push:

    python3 scripts/seo-audit.py dist                      # air duct (repo root)
    python3 scripts/seo-audit.py sites/fl-garage/dist
    python3 scripts/seo-audit.py sites/fl-dryervent/dist

Hard failures (exit 1) are the things that must never ship:
  - an internal link or asset that does not resolve inside dist
  - two indexable pages with the same <title>
  - AggregateRating or Review schema (no real reviews exist yet)

Everything else is a warning with examples, so the daily routine can pick
the worst offenders without the build going red over legacy pages.

`--json` prints a machine readable summary instead of text.
"""
import json
import os
import re
import sys
from collections import Counter, defaultdict

TITLE_MAX = 60
DESC_MIN, DESC_MAX = 120, 158


def main() -> int:
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    as_json = '--json' in sys.argv
    if not args:
        print(__doc__)
        return 2
    root = args[0].rstrip('/')
    if not os.path.isdir(root):
        print(f'no such build folder: {root} (run npm run build first)')
        return 2

    files = set()
    for dp, _, fs in os.walk(root):
        for f in fs:
            files.add(os.path.relpath(os.path.join(dp, f), root))

    def resolves(href: str) -> bool:
        p = href.lstrip('/')
        return p == '' or p in files or (p.rstrip('/') + '/index.html') in files

    hard = defaultdict(list)
    warn = defaultdict(list)
    titles = defaultdict(list)
    descs = defaultdict(list)
    pages = 0

    for dp, _, fs in os.walk(root):
        for f in fs:
            if not f.endswith('.html'):
                continue
            path = os.path.join(dp, f)
            url = '/' + os.path.relpath(path, root).replace('index.html', '')
            html = open(path, encoding='utf-8', errors='replace').read()

            for href in re.findall(r'(?:href|src)="(/[^"#?]*)', html):
                if href.startswith('/api/') or href.startswith('//'):
                    continue
                if not resolves(href):
                    hard['broken_internal_link'].append(f'{url} -> {href}')
                last = href.rstrip('/').split('/')[-1]
                if href != '/' and not href.endswith('/') and '.' not in last:
                    warn['href_without_trailing_slash'].append(f'{url} -> {href}')

            lds = ' '.join(re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.S))
            if re.search(r'"@type":\s*"(AggregateRating|Review)"', lds):
                hard['review_or_rating_schema'].append(url)

            text = re.sub(r'<script.*?</script>|<style.*?</style>', ' ', html, flags=re.S)
            text = re.sub(r'<[^>]+>', ' ', text)
            # A licence claim is a warning, not a failure: "dryer vent work is
            # not a licensed trade" is correct copy, and some trades are
            # licensed. The routine reads each hit in context.
            for m in re.finditer(r'.{0,60}\b(licensed|licenciad[oa]s?)\b.{0,40}', text, re.I | re.S):
                snippet = ' '.join(m.group(0).split())
                if not re.search(r'\b(not|no|never|isn.t|nadie|ning[uú]n)\b', snippet, re.I):
                    warn['licence_wording_to_review'].append(f'{url}: ...{snippet}...')
                    break

            if re.search(r'<meta name="robots" content="[^"]*noindex', html):
                continue
            pages += 1

            t = re.search(r'<title>(.*?)</title>', html, re.S)
            title = (t.group(1).strip() if t else '').replace('&amp;', '&')
            d = re.search(r'<meta name="description" content="(.*?)"', html)
            desc = (d.group(1) if d else '').replace('&amp;', '&')
            titles[title].append(url)
            descs[desc].append(url)

            if not title:
                warn['missing_title'].append(url)
            elif len(title) > TITLE_MAX:
                warn['title_over_60'].append(f'{len(title)} {url} "{title}"')
            if not desc:
                warn['missing_description'].append(url)
            elif not DESC_MIN <= len(desc) <= DESC_MAX:
                warn['description_length'].append(f'{len(desc)} {url}')

            is_es = url.startswith('/es/')
            if not is_es and 'hreflang="es"' not in html:
                warn['no_spanish_alternate'].append(url)
            if is_es and 'hreflang="en"' not in html:
                warn['no_english_alternate'].append(url)

            bare = url[3:] if is_es else url
            deep = bare.count('/') >= 3 and any(k in url for k in ('/service', '/areas-de-servicio/', '/servicios/', '/blog/'))
            if deep and 'FAQPage' not in lds:
                warn['deep_page_without_faq_schema'].append(url)

    for title, urls in titles.items():
        if title and len(urls) > 1:
            hard['duplicate_title'].append(f'"{title}" on {", ".join(urls[:4])}')
    for desc, urls in descs.items():
        if desc and len(urls) > 1:
            warn['duplicate_description'].append(f'{", ".join(urls[:4])}')

    summary = {
        'build': root,
        'indexable_pages': pages,
        'hard': {k: len(v) for k, v in hard.items()},
        'warn': {k: len(v) for k, v in warn.items()},
        'examples': {k: v[:8] for k, v in {**hard, **warn}.items()},
    }
    if as_json:
        print(json.dumps(summary, indent=2, ensure_ascii=False))
    else:
        print(f'{root}: {pages} indexable pages')
        print('HARD FAILURES:' if hard else 'Hard failures: none')
        for k, v in hard.items():
            print(f'  {k}: {len(v)}')
            for e in v[:8]:
                print(f'    - {e}')
        print('Warnings:' if warn else 'Warnings: none')
        for k, v in sorted(warn.items(), key=lambda kv: -len(kv[1])):
            print(f'  {k}: {len(v)}')
            for e in v[:5]:
                print(f'    - {e}')
    return 1 if hard else 0


if __name__ == '__main__':
    sys.exit(main())
