---
title: "How to Track Dividend Changes Across a Watchlist"
description: "Build a dividend change log: alert sources, event labels (raise, skipped raise, cut, special, policy change), a log template and the rules that turn pattern breaks into reviews. Educational."
category: "dividends"
role: "Spoke"
pubDate: 2026-11-23
image: "/images/investing/track-dividend-changes-watchlist-change-log.jpg"
imageAlt: "Handwritten pages of an 18th-century ship's log book with dated entries in columns"
imageCredit: "HMS Dolphin log book photograph (1765 log of John Byron), public domain, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Dividend changes are among the clearest signals a company sends, yet most investors only notice them when a price drops after a cut. A simple **dividend change log** fixes that. Every declaration on your watchlist gets one line, one label and one pre-decided action.

This post is about that log and its alert workflow. For how to structure the watchlist itself (buckets, caps and review cadence), see [how to build a watchlist process that is not noise](/investing/analyze/build-watchlist-process-not-noise/); this post assumes you already have one. Educational only; companies in the examples are hypothetical.

## Direct answer

Set an alert for each company's **dividend declaration** (news release or SEDAR+ filing). When it fires, record the **date, old amount, new amount and per cent change**, classify it as a **raise, hold, cut, suspension, special or policy change**, compare it with the company's **usual timing and size**, and apply a rule you wrote in advance: file it, flag it for the next review, or review the thesis now. The value comes from noticing **pattern breaks**, such as a skipped annual raise or a smaller-than-usual increase, before they become cuts.

## The workflow

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Dividend change log workflow: capture the declaration, log it, classify it, compare it with the usual pattern and apply a pre-written rule" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Declaration</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">news release</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">or SEDAR+ alert</text><line x1="134.4" y1="60" x2="149.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Log it</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">date, old and</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">new amount</text><line x1="278.8" y1="60" x2="293.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Classify</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">raise, hold,</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">cut, special</text><line x1="423.2" y1="60" x2="438.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Compare</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">to the usual</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">pattern</text><line x1="567.6" y1="60" x2="582.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Rule</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">review now</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">or file it</text></svg>
<figcaption>Five steps per declaration. Most entries take a minute; the point is that none are missed.</figcaption>
</figure>

### Where the alerts come from

| Source | What it catches | Notes |
|:--|:--|:--|
| Company investor relations email alerts | Declaration releases, often same day | Free; sign up on each IR page |
| SEDAR+ filing alerts | News releases and material change reports | See [SEDAR+ alerts and filing types](/investing/analyze/sedar-plus-alerts-filing-types-monitoring/) |
| Broker or quote-page dividend calendars | Upcoming ex-dates and amounts | Check against the company release |
| Quarterly results releases | Banks and many others declare with earnings | Read the dividend line in the release |

## Classify every event

<figure class="diagram">
<svg viewBox="0 0 720 180" role="img" aria-label="Four dividend event types and the action each one triggers in a change log" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="164.5" height="160" rx="12" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><rect x="10" y="10" width="164.5" height="36" rx="12" fill="#16a34a"/><rect x="10" y="34" width="164.5" height="12" fill="#16a34a"/><text x="92.25" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Raise</text><text x="92.25" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Check size vs</text><text x="92.25" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">FCF/share growth</text><text x="92.25" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Note if smaller</text><text x="92.25" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">than usual</text><rect x="188.5" y="10" width="164.5" height="160" rx="12" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/><rect x="188.5" y="10" width="164.5" height="36" rx="12" fill="#f59e0b"/><rect x="188.5" y="34" width="164.5" height="12" fill="#f59e0b"/><text x="270.75" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Hold / skipped raise</text><text x="270.75" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Was a raise</text><text x="270.75" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">expected now?</text><text x="270.75" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Read the release</text><text x="270.75" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">for wording</text><rect x="367" y="10" width="164.5" height="160" rx="12" fill="#ffffff" stroke="#dc2626" stroke-width="2"/><rect x="367" y="10" width="164.5" height="36" rx="12" fill="#dc2626"/><rect x="367" y="34" width="164.5" height="12" fill="#dc2626"/><text x="449.25" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Cut / suspend</text><text x="449.25" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Review thesis</text><text x="449.25" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">within a week</text><text x="449.25" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Log the reason</text><text x="449.25" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">management gave</text><rect x="545.5" y="10" width="164.5" height="160" rx="12" fill="#ffffff" stroke="#0ea5e9" stroke-width="2"/><rect x="545.5" y="10" width="164.5" height="36" rx="12" fill="#0ea5e9"/><rect x="545.5" y="34" width="164.5" height="12" fill="#0ea5e9"/><text x="627.75" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Special / policy</text><text x="627.75" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Strip specials</text><text x="627.75" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">from yield</text><text x="627.75" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Log any new</text><text x="627.75" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">payout target</text></svg>
<figcaption>The label decides the action. Holds and small raises at habitual raisers deserve more attention than they usually get.</figcaption>
</figure>

| Label | Definition | Default action (example rule) |
|:--|:--|:--|
| Raise | Regular dividend per share increased | File it; note size vs the past three raises |
| Hold | Unchanged where a raise was not expected | File it |
| Skipped raise | Unchanged in the quarter the company usually raises | Flag for the next review; read the release wording |
| Cut | Regular dividend reduced | Review the thesis within a week |
| Suspension | Dividend stopped | Review the thesis within a week |
| Special | One-time payment on top of the regular dividend | Exclude from yield; see [special dividends](/investing/dividends/special-dividends-how-to-treat-in-analysis/) |
| Policy change | New payout range, frequency change or base-plus-variable switch | Flag; re-read the capital allocation section |
| DRIP change | Discount added, removed or treasury issuance switched | Flag; it can signal capital needs |

## The log template

| Date | Company | Label | Old (per qtr) | New (per qtr) | Change | Usual pattern | Pattern break? | Action |
|:--|:--|:--|--:|--:|--:|:--|:--|:--|
| Hypothetical | Company A | Raise | $0.50 | $0.53 | +6.0% | Raises in Q4, about 6–7% | No | File |
| Hypothetical | Company B | Skipped raise | $0.80 | $0.80 | 0% | Raises every Q2 for 10+ years | Yes | Flag for review |
| Hypothetical | Company C | Raise | $0.40 | $0.41 | +2.5% | Raises about 8% a year | Yes (smaller) | Flag; check FCF/share |
| Hypothetical | Company D | Special | $0.25 | $0.25 + $1.00 special | n/a | Occasional specials | No | Strip special from yield |

The "usual pattern" column is the key. A 2.5% raise is good news at a company that normally holds the dividend flat. At a company that has raised about 8% a year for a decade, it may be the first hint that management sees tighter cash ahead. [How to read a dividend history chart](/investing/dividends/read-dividend-history-chart-beyond-streak/) shows how to establish that baseline.

## What to read when a flag fires

| Flag | First document to read | Question to answer |
|:--|:--|:--|
| Skipped or smaller raise | The declaration release and latest MD&A | Did management give a reason or a timeline? |
| Policy change | Investor presentation or capital allocation section | What payout range now, measured on which earnings? |
| DRIP discount added | DRIP terms and recent financing | Does the company need equity? |
| Cut or suspension | Release, call transcript, credit rating news | Is this a reset to a sustainable level, or the start of a slide? |

For tone changes in the calls that often precede these events, see [how management tone on dividends shows up in earnings calls](/investing/dividends/management-tone-dividends-earnings-calls/).

## Yearly roll-up

Once a year, summarize the log per company: number of raises, average raise, any pattern breaks. That roll-up is what feeds a dividend safety review. It's also a reality check on index labels; [Canadian Dividend Aristocrats explained](/investing/dividends/canadian-dividend-aristocrats-explained/) covers how streaks are defined.

## Common mistakes

- Logging only cuts. The early warning is usually a hold or a smaller raise.
- Relying on a quote page's yield instead of the company release.
- Mixing specials into the regular dividend history.
- Letting flags pile up with no review date.

## Go deeper

Pair the log with [FCF coverage of dividends](/investing/dividends/fcf-coverage-of-dividends/) so each flag has numbers behind it, and with [how to track a stock thesis over quarters](/investing/analyze/track-stock-thesis-over-quarters/) for the bigger picture.

## Related reading

- [When a dividend freeze is healthier than a raise](/investing/dividends/when-dividend-freeze-healthier-than-raise/)
- [Dividend policy as a capital allocation signal](/investing/dividends/dividend-policy-capital-allocation-signal/)
- [Ex-dividend date mechanics for TSX stocks](/investing/dividends/ex-dividend-date-mechanics-tsx/)

## Sources

- Company dividend declaration news releases and investor relations alert services.
- SEDAR+ (Canadian Securities Administrators) filing search and alert features.

## Media credits

- Hero: "HMS Dolphin - Log Book 1.jpg" by John Byron (log author); photographer unknown, public domain, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:HMS_Dolphin_-_Log_Book_1.jpg). Cropped and resized to 1280x720. Real photograph, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
