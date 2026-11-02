---
title: "Screener Literacy: Designing Filters That Match Your Process"
description: "How to design stock screener filters that match your investing process: translating rules into filters, hard filters vs ranges, a hypothetical TSX screening funnel, templates for dividend, quality and value processes, and Canadian data pitfalls (USD reporters, trusts, interlisted duplicates). Educational, not advice."
category: "brokers-tools"
role: "Spoke"
pubDate: 2026-11-02
image: "/images/investing/screener-filters-that-match-your-process.jpg"
imageAlt: "Cooked penne pasta draining in a blue colander set on top of a cooking pot"
imageCredit: "Pasta in a sieve. Photo by GRAN, CC BY 3.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "mixed"
---

A stock screener is a sieve: it keeps what fits through the holes you choose and throws away everything else. The common mistake is choosing the holes by default — a high dividend yield, a low P/E — and then treating whatever comes out as a list of ideas. **Screener literacy** means designing filters that express your own process, and knowing where the data underneath can mislead you.

Educational only — not advice. Counts and thresholds below are **hypothetical** and illustrate design, not recommended settings.

## Direct answer

Start from your process: write down the kind of business you want to own and the risks you want to avoid, then translate each into one filter. Use a few **hard filters** for must-haves (size or liquidity, positive free cash flow, leverage ceiling), then **ranges** rather than extremes for valuation and yield, and finish with **data checks** (currency, trailing vs fiscal-year figures, trusts and interlisted duplicates). Expect to end with a short list that you then research by reading filings. If a screen returns hundreds of names or none, change one filter at a time and note why.

## From process to filters

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="From investment process to screener filters to a research shortlist" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Your process</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">What kind of</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">business you want</text><line x1="134.4" y1="60" x2="151.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Must-haves</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Hard filters that</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">remove bad fits</text><line x1="278.8" y1="60" x2="295.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Ranges</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Valuation and</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">quality bands</text><line x1="423.2" y1="60" x2="440.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Data checks</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Units, currency,</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">TTM vs FY</text><line x1="567.6" y1="60" x2="584.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Shortlist</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Read filings;</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">write a brief</text></svg>
<figcaption>Design the screen from the process, not the other way round. The screener&#x27;s default columns are someone else&#x27;s process.</figcaption>
</figure>

| Process statement (hypothetical) | Filter that expresses it | Why not the obvious alternative |
|:--|:--|:--|
| "I want dividends that are paid from real cash" | FCF payout ratio below a ceiling | Yield alone rewards falling prices — see [why yield alone is a terrible screen](/investing/dividends/why-yield-alone-is-a-terrible-screen/) |
| "I don't want balance-sheet risk" | Net debt / EBITDA below a ceiling (non-financials) | Debt-to-equity breaks on companies with buybacks or write-downs |
| "I want to be able to trade in and out without moving the price" | Average daily value traded above a floor | Market cap alone misses thinly traded large holding companies |
| "I want consistent businesses" | Positive FCF in most of the last several years | One year's earnings can be a fluke |
| "I want to pay a reasonable price" | Valuation inside a range vs history or peers | "Lowest P/E" surfaces value traps — see [when P/E misleads](/investing/valuation/when-pe-misleads-tsx/) |

## A hypothetical screening funnel

<figure class="diagram">
<svg viewBox="0 0 720 268" role="img" aria-label="Hypothetical screening funnel narrowing 700 TSX stocks to 8 for manual research" xmlns="http://www.w3.org/2000/svg"><text x="290" y="32" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Starting universe (TSX-listed equities)</text><rect x="300" y="16" width="350" height="22" rx="3" fill="#0d9488"/><text x="658" y="32" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">700</text><text x="290" y="66" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Market cap above $500M</text><rect x="300" y="50" width="150" height="22" rx="3" fill="#0d9488"/><text x="458" y="66" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">300</text><text x="290" y="100" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Positive FCF in 3 of last 4 years</text><rect x="300" y="84" width="85" height="22" rx="3" fill="#0d9488"/><text x="393" y="100" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">170</text><text x="290" y="134" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Net debt / EBITDA below 3x</text><rect x="300" y="118" width="60" height="22" rx="3" fill="#0d9488"/><text x="368" y="134" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">120</text><text x="290" y="168" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">FCF payout below 80%</text><rect x="300" y="152" width="30" height="22" rx="3" fill="#0d9488"/><text x="338" y="168" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">60</text><text x="290" y="202" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Valuation inside your range</text><rect x="300" y="186" width="12" height="22" rx="3" fill="#0d9488"/><text x="320.5" y="202" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">25</text><text x="290" y="236" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Manual shortlist after reading</text><rect x="300" y="220" width="4" height="22" rx="3" fill="#0d9488"/><text x="312" y="236" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">8</text></svg>
<figcaption>Hypothetical counts for a dividend-safety process. Each filter removes a specific risk the process cares about; the last step is human reading, not another filter.</figcaption>
</figure>

The aim isn't the biggest possible list. It's a list small enough that you'll actually **read** each company's MD&A and build a brief.

## Three hypothetical screen templates

| Filter | Dividend safety | Quality compounder | Deep value (with guardrails) |
|:--|:--|:--|:--|
| Size / liquidity | Market cap and daily value floor | Same | Same, lower floor |
| Cash generation | Positive FCF most years | High and stable FCF margin | Positive FCF now |
| Leverage | Net debt / EBITDA ceiling | Low leverage | Ceiling to avoid distressed names |
| Profitability | Payout below 80% of FCF | High ROE or ROIC over several years (see [what is ROE?](/investing/glossary/what-is-roe/)) | Not loss-making |
| Valuation | Yield inside a band, not the top | Valuation not extreme vs own history | Low EV/EBITDA or P/FCF vs peers |
| Exclusions | Financials screened separately | Financials screened separately | Exclude companies with going-concern notes |

Financials need their own screen: banks and insurers don't have EBITDA or conventional debt ratios. Use P/B, ROE and capital ratios instead — see [valuing Canadian banks](/investing/valuation/valuing-canadian-banks-pb-roe/).

## Data pitfalls in Canadian screeners

| Pitfall | What goes wrong | Fix |
|:--|:--|:--|
| Currency | Some TSX companies report in US dollars; ratios mixing CAD price and USD figures go wrong | Check the reporting currency |
| Trailing vs fiscal-year | TTM and last-FY numbers mixed in one screen | Use one basis consistently |
| Negative earnings | P/E is blank, so the stock silently drops out of a "P/E below X" filter | Decide deliberately how to treat losses |
| Trusts and REITs | EPS and payout ratios are misleading for flow-through entities | Use FFO/AFFO-based screens — see [valuing REITs](/investing/valuation/valuing-reits-nav-ffo-affo/) |
| Interlisted and multiple share classes | Same company appears twice | De-duplicate before ranking |
| Adjusted vs reported figures | Data vendor may use "adjusted" numbers | Spot-check with the filings |
| Stale or missing data | Small caps update slowly | Verify the latest quarter before acting |

## Habits that keep screens honest

| Habit | Why |
|:--|:--|
| Save each screen with its date and settings | Results are reproducible and comparable over time |
| Change one filter at a time | You learn which filter is doing the work |
| Look at what got excluded | Some of your best ideas may fail a filter for a fixable reason |
| Never buy straight from the screen | The screen is the start of research, not the end |

## Common mistakes

| Mistake | Why it hurts | Fix |
|:--|:--|:--|
| Sorting by highest yield | Surfaces dividend traps | Use yield bands plus payout and leverage |
| Stacking ten filters | Over-fits; returns nothing or noise | Three to six filters that each match a process rule |
| Using defaults | Someone else's process | Write the process first |
| Mixing financials with industrials | Ratios don't compare | Screen them separately |

## Soft CTA

A set of saved-screen templates mapped to common DIY processes is planned for the **Research** ebook. If you're choosing a broker partly for its screener and data exports, see [how to compare Canadian discount brokers](/investing/brokers-tools/compare-canadian-discount-brokers/).

## Related reading

- [How to research a TSX stock from scratch](/investing/analyze/research-tsx-stock-from-scratch/)
- [How to evaluate third-party stock score apps critically](/investing/brokers-tools/evaluate-stock-score-apps-critically/)
- [How to compare two TSX peers side by side](/investing/analyze/compare-two-tsx-peers/)
- [Free cash flow coverage of dividends](/investing/dividends/fcf-coverage-of-dividends/)

## Sources

- Company filings on [SEDAR+](https://www.sedarplus.ca/) for spot-checking screener data (reporting currency, adjusted vs IFRS figures).
- National Instrument 52-112 *Non-GAAP and Other Financial Measures Disclosure* (why "adjusted" figures need reconciliation).

## Media credits

- Hero: “Sieve pasta.jpg” by GRAN, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sieve_pasta.jpg). Cropped and resized to 1280×720. Real photograph, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
