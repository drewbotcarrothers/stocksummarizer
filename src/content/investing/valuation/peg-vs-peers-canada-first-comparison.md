---
title: "PEG vs Peers: A Canada-First Comparison Guide"
description: "How to compare PEG ratios across TSX peers fairly: align growth source, date and window, handle low-growth outliers, use the median and add growth-quality columns. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-12
image: "/images/investing/peg-vs-peers-canada-first-comparison.jpg"
imageAlt: "Crowds and a lead car at the start gate of a city sprint race on a sunny day"
imageCredit: "Start of the Copenhagen Sprint 2025 photograph by Leif Jørgensen, CC BY-SA 4.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "mixed"
---

Comparing PEG ratios across companies adds a step that P/E comparisons do not have: every company's **growth rate** must be measured the same way. If one peer's growth comes from three-year consensus and another's from last year's rebound, the PEG table is meaningless.

The peer-selection and P/E alignment steps (same business model, same EPS basis, calendarizing fiscal years, median not mean) are covered in [P/E vs peers: a Canada-first comparison guide](/investing/valuation/pe-vs-peers-canada-first-comparison/) and [how to use peer tables without cherry-picking comps](/investing/analyze/use-peer-tables-without-cherry-picking/). This post adds the **growth alignment** that PEG needs. It is educational; figures are hypothetical.

## Direct answer

Build a peer set and align the P/E figures as you would for P/E. Then use **one growth source** (for example, three-year consensus EPS growth from the same provider on the same date) and **one window** for every company. Exclude peers with negative or near-zero growth from the median, or show them as "n/m". Compare with the **median PEG**, then check whether the gap is explained by growth **quality**: organic vs acquired, recurring vs cyclical, balance sheet strength and estimate dispersion.

<figure class="diagram">
<svg viewBox="0 0 720 234" role="img" aria-label="Hypothetical PEG ratios for a company and five peers, including one low-growth outlier" xmlns="http://www.w3.org/2000/svg"><text x="190" y="32" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer E</text><rect x="200" y="16" width="112" height="22" rx="3" fill="#94a3b8"/><text x="320.5" y="32" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">1.25</text><text x="190" y="66" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Your company</text><rect x="200" y="50" width="120" height="22" rx="3" fill="#0d9488"/><text x="327.7" y="66" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">1.33</text><text x="190" y="100" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer B</text><rect x="200" y="84" width="132" height="22" rx="3" fill="#94a3b8"/><text x="340.3" y="100" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">1.47</text><text x="190" y="134" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer A</text><rect x="200" y="118" width="135" height="22" rx="3" fill="#94a3b8"/><text x="343" y="134" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">1.50</text><text x="190" y="168" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer C</text><rect x="200" y="152" width="225" height="22" rx="3" fill="#94a3b8"/><text x="433" y="168" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">2.50</text><text x="190" y="202" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer D (low growth)</text><rect x="200" y="186" width="420" height="22" rx="3" fill="#f59e0b"/><text x="628.3" y="202" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">4.67</text></svg>
<figcaption>Hypothetical: the peer median PEG is 1.50 and the mean is 2.28 because Peer D grows only 3%. Against the median your company is about 11% cheaper per unit of growth; against the mean it looks 42% cheaper. Use the median.</figcaption>
</figure>

## Growth alignment rules

| Rule | Why it matters |
|:--|:--|
| Same growth source for all peers | Consensus from two providers can differ by several points |
| Same date for all estimates | Estimates drift; a stale number skews one peer |
| Same window (3 or 5 years) | One-year growth is too noisy for PEG |
| Same EPS basis as the P/E | Adjusted P/E with IFRS growth mixes bases |
| Same currency for growth | Measure growth in each company's reporting currency |
| Flag thin coverage | One or two analysts on a small cap is weak evidence |
| Show n/m for growth below about 3% | PEG explodes and distorts the comparison |

## Peer PEG table (hypothetical)

| Company | P/E | 3-yr EPS growth | PEG | Organic share of growth | Net debt / EBITDA | Analysts |
|:--|--:|--:|--:|--:|--:|--:|
| Your company | 16.0x | 12% | 1.33 | 90% | 1.5x | 8 |
| Peer A | 18.0x | 12% | 1.50 | 85% | 1.2x | 10 |
| Peer B | 22.0x | 15% | 1.47 | 60% | 2.8x | 7 |
| Peer C | 25.0x | 10% | 2.50 | 95% | 0.5x | 12 |
| Peer D | 14.0x | 3% | 4.67 | 100% | 2.0x | 4 |
| Peer E | 30.0x | 24% | 1.25 | 40% | 3.5x | 3 |
| **Peer median** | | | **1.50** | | | |

The extra columns change the story. Peer E has the lowest PEG, but most of its growth is acquired, debt is high and only three analysts cover it. Your company's small discount to the median looks more solid because its growth is mostly organic and its balance sheet is moderate.

<figure class="diagram">
<svg viewBox="0 0 720 340" role="img" aria-label="Hypothetical scatter of expected EPS growth against P/E for six companies" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="290" x2="700" y2="290" stroke="#e2e8f0"/><text x="62" y="294" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0x</text><line x1="70" y1="213" x2="700" y2="213" stroke="#e2e8f0"/><text x="62" y="216.857" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">10x</text><line x1="70" y1="136" x2="700" y2="136" stroke="#e2e8f0"/><text x="62" y="139.714" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">20x</text><line x1="70" y1="59" x2="700" y2="59" stroke="#e2e8f0"/><text x="62" y="62.5714" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">30x</text><text x="70" y="308" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">0%</text><text x="175" y="308" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">5%</text><text x="280" y="308" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">10%</text><text x="385" y="308" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">15%</text><text x="490" y="308" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">20%</text><text x="595" y="308" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">25%</text><text x="700" y="308" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">30%</text><line x1="70" y1="290" x2="700" y2="290" stroke="#475569"/><text x="385" y="332" font-size="12" font-weight="600" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Expected EPS growth (% per year)</text><text x="16" y="155" font-size="12" font-weight="600" fill="#0f172a" text-anchor="middle" transform="rotate(-90 16 155)" font-family="system-ui, sans-serif">P/E (x)</text><circle cx="322" cy="167" r="7" fill="#0d9488"/><text x="333" y="170.571" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">You</text><circle cx="322" cy="151" r="7" fill="#94a3b8"/><text x="333" y="155.143" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">A</text><circle cx="385" cy="120" r="7" fill="#94a3b8"/><text x="396" y="124.286" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">B</text><circle cx="280" cy="97" r="7" fill="#94a3b8"/><text x="291" y="101.143" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">C</text><circle cx="133" cy="182" r="7" fill="#f59e0b"/><text x="144" y="186" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">D</text><circle cx="574" cy="59" r="7" fill="#94a3b8"/><text x="585" y="62.5714" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">E</text></svg>
<figcaption>Hypothetical: plotting growth against P/E shows the same story as the PEG table, plus context. Peer D sits far left (little growth), Peer C looks expensive for its growth, and your company sits slightly below the cluster.</figcaption>
</figure>

## Canada-first issues for PEG peer sets

| Issue | What to do |
|:--|:--|
| Only 3–4 TSX peers | Add US or global peers, flagged, and see [how to compare a TSX stock to its US peer fairly](/investing/valuation/compare-tsx-stock-to-us-peer/) |
| US peers have more analyst coverage | Consensus growth for TSX small caps may rest on few estimates; note the count |
| Different fiscal year ends | Calendarize EPS before measuring growth (see the P/E peer guide) |
| Cyclical sectors (energy, materials) | PEG peer tables add little; use mid-cycle multiples instead |
| Dividend-heavy sectors | Compare PEGY alongside PEG |

## Checklist

| Step | Done when |
|:--|:--|
| Peers chosen | Same business model, reasons written down |
| P/E aligned | Same EPS basis, period, currency, calendarized |
| Growth aligned | One source, one date, one window for all |
| Outliers handled | Near-zero or negative growth shown as n/m |
| Median used | Not the mean |
| Quality columns added | Organic share, leverage, coverage |
| Conclusion written | Gap and whether growth quality explains it |

## Go deeper

A broker with a good research platform makes it easier to pull consensus growth for every peer on the same date; compare options in [how to compare Canadian discount brokers](/investing/brokers-tools/compare-canadian-discount-brokers/). Then run the result through [how to use PEG in a simple valuation checklist](/investing/valuation/use-peg-simple-valuation-checklist/).

## Related reading

- [How to calculate PEG in CAD from filings](/investing/valuation/calculate-peg-in-cad-from-filings/)
- [Forward P/E vs peers](/investing/valuation/forward-pe-vs-peers-canada-first-comparison/)
- [How to compare two TSX peers side by side](/investing/analyze/compare-two-tsx-peers/)
- [How to compare organic growth vs acquisition growth](/investing/analyze/compare-organic-vs-acquisition-growth/)

## Sources

- IAS 33 *Earnings per Share*.
- Company annual reports and MD&A for fiscal year ends, reporting currency and acquisition disclosures.

## Media credits

- Hero: "Start of Copenhagen Sprint for women 2025 01.jpg" by Leif Jørgensen, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Start_of_Copenhagen_Sprint_for_women_2025_01.jpg). Cropped and resized to 1280x720. Real photograph of the start of a city sprint race, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
