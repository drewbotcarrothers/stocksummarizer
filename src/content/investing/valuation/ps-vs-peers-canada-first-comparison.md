---
title: "P/S vs Peers: A Canada-First Comparison Guide"
description: "How to compare price-to-sales across TSX peers fairly: align the revenue basis, add margin, growth and debt columns, read gaps through implied P/E and use the median. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-13
image: "/images/investing/ps-vs-peers-canada-first-comparison.jpg"
imageAlt: "Bowls of olives and preserved foods on display at a stall in St. Lawrence Market, Toronto"
imageCredit: "St. Lawrence Market food stall, Toronto, photograph by Mark, CC BY 2.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "mixed"
---

Comparing P/S across companies only works when every company's revenue means roughly the same thing and turns into profit at a similar rate. Otherwise the "cheapest" name on the table is usually just the one with the thinnest margins.

The general peer steps (choosing true peers, calendarizing fiscal years, using the median) are in [P/E vs peers: a Canada-first comparison guide](/investing/valuation/pe-vs-peers-canada-first-comparison/) and [how to use peer tables without cherry-picking comps](/investing/analyze/use-peer-tables-without-cherry-picking/). The revenue worksheet is in [how to calculate P/S in CAD from filings](/investing/valuation/calculate-ps-in-cad-from-filings/). This post adds what P/S peer tables specifically need: **revenue-basis alignment, margin context and a leverage check**. It is educational; all figures are hypothetical.

## Direct answer

Build each peer's P/S on the **same revenue basis** (net of pass-throughs, continuing operations, TTM, average-rate FX). Then never read P/S alone: add **gross margin, net margin, revenue growth and net debt** columns. Compare with the **median**, and ask whether the gap is explained by margins (a P/S gap that matches a margin gap is not a bargain). If peers carry very different debt, switch the comparison to EV/Sales.

## Alignment rules for P/S peer tables

| Rule | Why it matters |
|:--|:--|
| Same revenue basis (gross vs net, IFRS 15) | A gross reporter can show several times the revenue of a net reporter |
| Remove pass-through items where disclosed | Fuel surcharges, excise taxes and commodity pass-throughs inflate sales |
| TTM for all, calendarized | Mixing fiscal years distorts growth and level |
| Average-rate FX for USD reporters | Revenue is a flow; see the calculation post |
| Continuing operations only | Sold businesses still sit in older periods |
| Same share count date | Latest outstanding share data from each MD&A |
| Note acquisitions inside the TTM | Part-year revenue understates the run-rate |

## Peer P/S table with context (hypothetical)

| Company | P/S | Gross margin | Net margin | Implied P/E (P/S ÷ margin) | 3-yr revenue growth | Net debt ÷ market cap |
|:--|--:|--:|--:|--:|--:|--:|
| Your company | 1.6x | 34% | 5% | 32x | 9% | 10% |
| Peer A | 0.6x | 18% | 3% | 20x | 4% | 35% |
| Peer B | 1.1x | 26% | 6% | 18x | 6% | 15% |
| Peer C | 2.0x | 40% | 9% | 22x | 11% | 5% |
| Peer D | 2.3x | 45% | 12% | 19x | 8% | 0% |
| **Peer median** | **1.55x** | | | | | |

On P/S alone your company sits right at the median. Dividing by net margin tells a different story: at a 5% margin, 1.6x sales is about **32 times earnings**, while every peer is near 18–22x. The market is pricing in margin expansion, so the question becomes "is a higher margin realistic?" rather than "is it cheap?".

<figure class="diagram">
<svg viewBox="0 0 720 340" role="img" aria-label="Hypothetical scatter of net margin against price-to-sales for five peers with a 20x P/E reference line" xmlns="http://www.w3.org/2000/svg"><line x1="80" y1="280" x2="690" y2="280" stroke="#e2e8f0"/><text x="72" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0x</text><line x1="80" y1="217.5" x2="690" y2="217.5" stroke="#e2e8f0"/><text x="72" y="221.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0.8x</text><line x1="80" y1="155" x2="690" y2="155" stroke="#e2e8f0"/><text x="72" y="159" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">1.6x</text><line x1="80" y1="92.5" x2="690" y2="92.5" stroke="#e2e8f0"/><text x="72" y="96.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">2.4x</text><line x1="80" y1="30" x2="690" y2="30" stroke="#e2e8f0"/><text x="72" y="34" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">3.2x</text><text x="80" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">0%</text><text x="202" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">3%</text><text x="324" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">6%</text><text x="446" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">9%</text><text x="568" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">12%</text><text x="690" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">15%</text><line x1="80" y1="280" x2="690" y2="280" stroke="#475569"/><line x1="80" y1="280" x2="690" y2="45.625" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 4"/><text x="686" y="37.625" font-size="11" font-weight="600" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">20x P/E line (P/S = 20 × margin)</text><circle cx="202" cy="233.125" r="7" fill="#0d9488"/><text x="213" y="237.125" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Peer A</text><circle cx="324" cy="194.062" r="7" fill="#0d9488"/><text x="335" y="198.062" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Peer B</text><circle cx="446" cy="123.75" r="7" fill="#0d9488"/><text x="457" y="127.75" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Peer C</text><circle cx="568" cy="100.312" r="7" fill="#0d9488"/><text x="579" y="104.312" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Peer D</text><circle cx="283.333" cy="155" r="7" fill="#f59e0b"/><text x="294.333" y="159" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Your company</text><text x="385" y="320" font-size="12" font-weight="600" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Net margin (%)</text><text x="18" y="155" font-size="12" font-weight="600" fill="#0f172a" text-anchor="middle" transform="rotate(-90 18 155)" font-family="system-ui, sans-serif">P/S (x)</text></svg>
<figcaption>Hypothetical: the dashed line shows where a company would sit at a 20x P/E (P/S = 20 × net margin). Peers cluster near the line; your company sits well above it, so its P/S already assumes margins well above today's 5%.</figcaption>
</figure>

## Read the gap through margins, growth and debt

| Gap pattern | Likely explanation | What to do |
|:--|:--|:--|
| Lower P/S, lower margin | Fair; thin margins deserve low P/S | Compare P/E or EV/EBITDA |
| Lower P/S, similar margin | Possible discount | Check growth, debt and revenue quality |
| Higher P/S, higher margin | Fair if margins hold | Check margin durability over a cycle |
| Higher P/S, lower margin | Market expects margin catch-up | Write down the margin needed and test it |
| Similar P/S, much more debt | Levered name is more expensive | Use EV/Sales |

<figure class="diagram">
<svg viewBox="0 0 720 240" role="img" aria-label="Hypothetical peer price-to-sales ratios with the peer median marked" xmlns="http://www.w3.org/2000/svg"><text x="240" y="47" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer A</text><rect x="250" y="30" width="99.2308" height="24" rx="4" fill="#0d9488"/><text x="357.231" y="47" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">0.6x</text><text x="240" y="81" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer B</text><rect x="250" y="64" width="181.923" height="24" rx="4" fill="#0d9488"/><text x="439.923" y="81" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">1.1x</text><text x="240" y="115" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Your company</text><rect x="250" y="98" width="264.615" height="24" rx="4" fill="#f59e0b"/><text x="522.615" y="115" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">1.6x</text><text x="240" y="149" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer C</text><rect x="250" y="132" width="330.769" height="24" rx="4" fill="#0d9488"/><text x="588.769" y="149" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">2.0x</text><text x="240" y="183" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer D</text><rect x="250" y="166" width="380.385" height="24" rx="4" fill="#0d9488"/><text x="638.385" y="183" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">2.3x</text><line x1="506.346" y1="22" x2="506.346" y2="200" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5 4"/><text x="506.346" y="218" font-size="11.5" font-weight="700" fill="#b45309" text-anchor="middle" font-family="system-ui, sans-serif">Peer median 1.55x</text></svg>
<figcaption>Hypothetical: ranking peers by P/S puts your company just above the 1.55x median. The ranking only matters after the margin column explains, or fails to explain, each gap.</figcaption>
</figure>

## Canada-first issues for P/S peer sets

| Issue | What to do |
|:--|:--|
| Few TSX peers in a niche | Add US peers, flagged; see [how to compare a TSX stock to its US peer fairly](/investing/valuation/compare-tsx-stock-to-us-peer/) |
| US GAAP vs IFRS revenue | Both use the same revenue standard (ASC 606 / IFRS 15) but presentation of taxes and pass-throughs can differ; read the notes |
| Cross-listed peers reporting in USD | Convert revenue at average rates, market cap at the spot rate on the same date |
| Heavy segment mix (e.g. a conglomerate) | Compare segment by segment; see [segment reporting](/investing/analyze/read-segment-reporting-canadian-filings/) |
| Commodity-linked revenue | P/S tables add little; use EV/EBITDA at a stated price deck |

## Checklist

| Step | Done when |
|:--|:--|
| Peers chosen | Same business model, reasons written down |
| Revenue aligned | Same basis, TTM, continuing ops, average-rate FX |
| Margin columns added | Gross and net, plus implied P/E |
| Growth and debt columns added | Organic growth if available; net debt ÷ market cap |
| Median used | Not the mean |
| Gap explained | In one sentence, including margin |

## Go deeper

Pulling consistent revenue, margin and debt figures for five peers is much faster with a broker research platform that exports to a spreadsheet; compare options in [how to compare Canadian discount brokers](/investing/brokers-tools/compare-canadian-discount-brokers/). Then run the result through [how to use P/S in a simple valuation checklist](/investing/valuation/use-ps-simple-valuation-checklist/).

## Related reading

- [When P/S misleads on TSX stocks](/investing/valuation/when-ps-misleads-tsx/)
- [What P/S means for Canadian DIY investors](/investing/valuation/what-ps-means-canadian-diy/)
- [How to compare two TSX peers side by side](/investing/analyze/compare-two-tsx-peers/)
- [What EV/Sales means for Canadian DIY investors](/investing/valuation/what-ev-sales-means-canadian-diy/)

## Sources

- IFRS 15 *Revenue from Contracts with Customers*; FASB ASC 606 (US peers).
- IAS 21 *The Effects of Changes in Foreign Exchange Rates*.
- IFRS 8 *Operating Segments*.
- Form 51-102F1 *Management's Discussion & Analysis* (outstanding share data).

## Media credits

- Hero: "St. Lawrence Market - Toronto (39308265695).jpg" by Mark, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:St._Lawrence_Market_-_Toronto_(39308265695).jpg). Cropped and resized to 1280x720. Real photograph of a food stall at St. Lawrence Market in Toronto, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
