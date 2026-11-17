---
title: "When Normalized EPS Misleads on TSX Stocks"
description: "How normalized EPS misleads on TSX stocks: peak-heavy windows, recurring one-offs, margins never earned, share drift, tax and interest, and structural change. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-17
image: "/images/investing/when-normalized-eps-misleads-tsx.jpg"
imageAlt: "Aerial view of a kraft paper mill with steam plumes and a rail line in The Pas, Manitoba"
imageCredit: "Canadian Kraft Paper mill aerial photograph by Quintin Soloviev, CC BY 4.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Normalized EPS exists to stop you from buying a cyclical at the peak because its P/E looks low. Done carelessly, it does the opposite: a generous averaging window, a "one-time" charge that shows up every year or a mid-cycle margin the business never sustained can make an expensive stock look cheap with an air of rigour.

This page lists the ways normalized EPS misleads on TSX stocks, with a fix for each. The build is in [how to calculate normalized EPS in CAD from filings](/investing/valuation/calculate-normalized-eps-in-cad-from-filings/); the general P/E traps are in [when P/E misleads](/investing/valuation/when-pe-misleads-tsx/) and are not repeated here. It is educational; all figures are hypothetical.

## Direct answer

Normalized EPS misleads when: (1) the **averaging window** is not a full cycle or includes a business that no longer exists; (2) **"one-time" charges recur**; (3) the **mid-cycle margin** was never sustained; (4) old EPS is averaged without adjusting for **share count drift**; (5) the **tax rate** is normalized while loss carryforwards keep cash taxes low, or the reverse; (6) **interest** is based on old debt levels; (7) the company has had a **structural change** (new capacity, divestiture, new commodity regime); or (8) you adopt **management's adjusted EPS** as if it were normalized. Each has a fix.

## 1. The averaging window

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical: the averaging window alone moves normalized earnings per share from 1.10 to 1.65 dollars" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$0</text><line x1="70" y1="197.5" x2="710" y2="197.5" stroke="#e2e8f0"/><text x="62" y="201.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$0.5</text><line x1="70" y1="145" x2="710" y2="145" stroke="#e2e8f0"/><text x="62" y="149" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$1</text><line x1="70" y1="92.5" x2="710" y2="92.5" stroke="#e2e8f0"/><text x="62" y="96.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$1.5</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$2</text><rect x="146.667" y="76.75" width="56" height="173.25" rx="3" fill="#0d9488"/><text x="174.667" y="70.75" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$1.65</text><text x="176.667" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">5 years</text><text x="176.667" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">incl. 2 peaks</text><rect x="360" y="116.65" width="56" height="133.35" rx="3" fill="#0d9488"/><text x="388" y="110.65" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$1.27</text><text x="390" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">8 years</text><text x="390" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">full cycle</text><rect x="573.333" y="134.5" width="56" height="115.5" rx="3" fill="#0d9488"/><text x="601.333" y="128.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$1.10</text><text x="603.333" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">10 years</text><text x="603.333" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">incl. old capacity</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Normalized EPS from averaging</text></svg>
<figcaption>Hypothetical: the same company's normalized EPS is $1.65 on a five-year window with two peak years, $1.27 on an eight-year full cycle and $1.10 on a ten-year window that includes years before a capacity cut.</figcaption>
</figure>

| Window (hypothetical) | Normalized EPS | P/E at $14.00 | Problem |
|:--|--:|--:|:--|
| 5 years, includes 2 peaks and no trough | $1.65 | 8.5x | Not a full cycle; flatters |
| 8 years, peak to peak with a trough | $1.27 | 11.0x | Reasonable |
| 10 years, includes 2 years before mills were closed | $1.10 | 12.7x | Mixes in a different business |

**Fix:** pick a window that runs from one peak (or trough) to the next, check that it includes at least one downturn, and restate early years to today's capacity or drop them. Show the result on two windows so you can see how sensitive it is.

## 2. One-offs that recur

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical: restructuring charges labelled one-time appear in six years out of six" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0</text><line x1="70" y1="197.5" x2="710" y2="197.5" stroke="#e2e8f0"/><text x="62" y="201.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">6</text><line x1="70" y1="145" x2="710" y2="145" stroke="#e2e8f0"/><text x="62" y="149" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">12</text><line x1="70" y1="92.5" x2="710" y2="92.5" stroke="#e2e8f0"/><text x="62" y="96.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">18</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">24</text><rect x="93.3333" y="145" width="56" height="105" rx="3" fill="#f59e0b"/><text x="121.333" y="139" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">12</text><text x="123.333" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Y1</text><rect x="200" y="92.5" width="56" height="157.5" rx="3" fill="#f59e0b"/><text x="228" y="86.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">18</text><text x="230" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Y2</text><rect x="306.667" y="171.25" width="56" height="78.75" rx="3" fill="#f59e0b"/><text x="334.667" y="165.25" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">9</text><text x="336.667" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Y3</text><rect x="413.333" y="118.75" width="56" height="131.25" rx="3" fill="#f59e0b"/><text x="441.333" y="112.75" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">15</text><text x="443.333" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Y4</text><rect x="520" y="75" width="56" height="175" rx="3" fill="#f59e0b"/><text x="548" y="69" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">20</text><text x="550" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Y5</text><rect x="626.667" y="110" width="56" height="140" rx="3" fill="#f59e0b"/><text x="654.667" y="104" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">16</text><text x="656.667" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Y6</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#f59e0b"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Restructuring charge (C$M)</text></svg>
<figcaption>Hypothetical: restructuring charges described as one-time appear in all six years, averaging C$15M a year.</figcaption>
</figure>

If a company books restructuring, "integration" or "transformation" costs every year, they are a cost of doing business. Adding them back every year raises normalized EPS permanently. **Fix:** if an item appears in three or more of the last five years, keep its average as a cost. [How to spot one-time items in Canadian statements](/investing/analyze/spot-one-time-items-canadian-statements/) has the checklist.

## 3. A mid-cycle margin that never existed

The mid-cycle margin should be one the business has actually earned on average, not the midpoint between its best year and a hoped-for recovery. **Fix:** use the simple average over the full window and compare it with the median year. If the average is pulled up by one exceptional year, use the median, and check the margin trend in [how to analyze gross margin trends](/investing/analyze/analyze-gross-margin-trends/).

| Margin choice (hypothetical) | Value | Mid-cycle EPS |
|:--|--:|--:|
| Average of peak years only | 13.5% | $2.00 |
| Simple average, full cycle | 9.0% | $1.27 |
| Median year | 8.5% | $1.18 |

## 4 to 6. Shares, tax and interest

| Trap | Example | Fix |
|:--|:--|:--|
| Share count drift | Averaging EPS printed in old reports after the share count rose 20% | Average net income, divide by today's diluted shares; see [spot dilution risk](/investing/analyze/spot-dilution-risk-canadian-issuers/) |
| Tax rate normalized up, ignoring tax losses | Company will pay little cash tax for five years | Normalize EPS at the statutory rate, but value the tax losses separately |
| Tax rate left too low | One-time recovery or foreign income that is ending | Use the statutory rate from the tax note |
| Interest on old debt | Debt doubled after an acquisition or rates rose | Charge interest on today's net debt at today's rates |

## 7. Structural change

Normalization assumes the next cycle looks like the last one. That fails when the business has changed: a producer that sold its best mine, a manufacturer that lost a major customer, an energy company whose commodity has moved to a new price range, or a lender that changed its loan mix.

**Fix:** ask whether the old years describe today's business. If not, use margin × revenue at today's capacity and mix, or a pro forma history. [How to evaluate moat durability over a full cycle](/investing/analyze/evaluate-moat-durability-full-cycle/) helps judge whether margins can return.

## 8. Management's adjusted EPS is not normalized EPS

Company "adjusted EPS" removes items management chooses, under NI 52-112 disclosure rules, and usually does nothing about the cycle. Some companies also add back amortization of acquired intangibles or share-based pay. **Fix:** start from the company's reconciliation, accept or reject each item on your own rules, then normalize for the cycle yourself. [How to read non-GAAP metrics critically](/investing/analyze/read-non-gaap-metrics-critically/) covers the first part.

## A six-question check

| Question | If no |
|:--|:--|
| Does the window cover a full cycle, including a downturn? | Extend or change it |
| Are recurring "one-time" items kept as costs? | Put their average back in |
| Is the mid-cycle margin one the business actually averaged? | Use the full-cycle average or median |
| Is everything on today's diluted share count? | Recalculate |
| Are tax and interest at today's sustainable levels? | Adjust, and value tax losses separately |
| Does the history describe today's business? | Use margin × revenue on current capacity |

## Go deeper

With the traps handled, compare fairly in [normalized EPS vs peers](/investing/valuation/normalized-eps-vs-peers-canada-first-comparison/). For the downturn side of the story, see [how to stress-test a stock thesis with a recession scenario](/investing/analyze/stress-test-stock-thesis-recession-scenario/).

## Related reading

- [What normalized EPS means for Canadian DIY investors](/investing/valuation/what-normalized-eps-means-canadian-diy/)
- [When earnings yield misleads on TSX stocks](/investing/valuation/when-earnings-yield-misleads-tsx/)
- [How to identify recurring vs cyclical revenue](/investing/analyze/identify-recurring-vs-cyclical-revenue/)
- [How to read commodity price sensitivity for resource issuers](/investing/analyze/read-commodity-price-sensitivity-resource-issuers/)

## Sources

- IAS 33 *Earnings per Share*; IAS 12 *Income Taxes*; IAS 37 *Provisions, Contingent Liabilities and Contingent Assets*.
- National Instrument 52-112 *Non-GAAP and Other Financial Measures Disclosure*.
- Graham, B. and Dodd, D., *Security Analysis* (1934), on averaging earnings over a cycle.

## Media credits

- Hero: "Canadian Kraft Paper mill (The Pas, MB).jpg" by Quintin Soloviev, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Canadian_Kraft_Paper_mill_(The_Pas,_MB).jpg). Cropped and resized to 1280x720. Real photograph of the Canadian Kraft Paper mill in The Pas, Manitoba, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
