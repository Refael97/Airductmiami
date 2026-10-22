# Daily SEO routine: setup

## The prompt (paste as the routine's instructions)

```
Run the daily SEO routine for the three Florida sites in this repo.

Follow .claude/skills/daily-seo/SKILL.md exactly, step by step: set up,
health check every site, pull Search Console and GA4 through Composio,
judge ledger rows that are due, ship at most three data backed change sets,
update docs/SEO-LEDGER.md and docs/CHANGELOG-SEO.md, write
docs/seo-reports/<today>.md, commit and push to claude/website-help-0x9abn.

Do not create a pull request. Do not ask me questions during the run: when
something needs my decision, put it under "צריך ממך" in the report and
carry on with the rest. Finish with the report, in Hebrew.
```

## Settings

| Setting | Value |
|---|---|
| Repository | `refael97/airductmiami` |
| Branch | `claude/website-help-0x9abn` (the branch Netlify builds from) |
| Schedule | daily, 07:13 Israel time (`CRON_TZ=Asia/Jerusalem 13 7 * * *`) |
| Connectors | Composio (Google Search Console and Google Analytics) |
| Each run | a new session |
| Notifications | on, so the Hebrew report reaches the phone |

## What it needs from the owner once

- Composio connected to the Google account that owns both Search Console
  properties and both GA4 properties, and the Dryer Vent Florida GA4
  property added to that account.
- `dryerventflorida.com` is verified in Search Console (done 21 Oct 2026).
  The Composio Google account must have access to that property too.
