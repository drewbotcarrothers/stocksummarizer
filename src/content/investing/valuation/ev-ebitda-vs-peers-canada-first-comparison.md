---
title: "EV/EBITDA vs Peers: A Canada-First Comparison Guide"
description: "How to compare EV/EBITDA across TSX peers fairly: one lease basis and scope, reported EBITDA, calendarized TTM, the median, and capex and leverage columns. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-13
image: "/images/investing/ev-ebitda-vs-peers-canada-first-comparison.jpg"
imageAlt: "A tall lattice communications tower with antennas standing in a flat field near Saskatoon under a pale sky"
imageCredit: "SaskTel communications tower near Saskatoon photograph by SSPWXR, CC BY-SA 4.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "mixed"
---

EV/EBITDA is the default peer multiple in capital-heavy Canadian sectors, which is exactly why peer tables built from a data screen go wrong so often: each company's EV and EBITDA can be built on a different lease basis, scope and adjustment policy, and the screen will not tell you.

The general peer steps (true peers, calendarizing fiscal years, median not mean) are in [P/E vs peers: a Canada-first comparison guide](/investing/valuation/pe-vs-peers-canada-first-comparison/) and [how to use peer tables without cherry-picking comps](/investing/analyze/use-peer-tables-without-cherry-picking/). The EV bridge and EBITDA build are in [how to calculate EV/EBITDA in CAD from filings](/investing/valuation/calculate-ev-ebitda-in-cad-from-filings/); the hub is [what EV/EBITDA means for Canadian DIY investors](/investing/valuation/ev-ebitda-for-canadian-diy-investors/). This post adds the alignment that EV/EBITDA peer sets need. It is educational; figures are hypothetical.

## Direct answer

Rebuild EV and EBITDA for every peer on **one basis**: same balance-sheet date, same lease treatment (all post-IFRS 16 with lease liabilities in EV, or all EBITDAaL), same scope (NCI added, equity-accounted investments subtracted) and **reported** rather than company-adjusted EBITDA. Calendarize to the same twelve months. Compare with the **median**, then add **capex ÷ EBITDA**, **net debt ÷ EBITDA** and **EBITDA growth** columns. A discount that lines up with higher capital needs or higher leverage is usually deserved.

## Alignment rules for EV/EBITDA peer tables

| Rule | Why it matters |
|:--|:--|
| Same balance-sheet date for all EV items | Debt and cash move quarter to quarter |
| Same lease basis | IFRS 16 lifts EBITDA; US GAAP operating leases do not |
| NCI added where EBITDA consolidates 100% | Otherwise EV is too small |
| Equity-accounted investments subtracted | Their profit is not in EBITDA |
| Reported EBITDA first | Company add-backs differ; see [non-GAAP metrics](/investing/analyze/read-non-gaap-metrics-critically/) |
| Calendarized TTM | Fiscal year-ends differ across peers |
| Pro forma for big acquisitions | New debt is in EV immediately; EBITDA lags |
| CAD throughout | Closing rate for EV items, average rate for EBITDA |

## Peer table (hypothetical, lease-consistent)

| Company | EV/EBITDA | Capex ÷ EBITDA | EV ÷ (EBITDA − capex) | Net debt ÷ EBITDA | 3-yr EBITDA growth |
|:--|--:|--:|--:|--:|--:|
| Your company | 7.9x | 35% | 12.2x | 2.4x | 5% |
| Peer A | 7.2x | 50% | 14.4x | 1.8x | 3% |
| Peer B | 8.4x | 30% | 12.0x | 3.0x | 6% |
| Peer C | 9.6x | 25% | 12.8x | 4.6x | 8% |
| Peer D | 11.5x | 20% | 14.4x | 5.4x | 9% |
| **Peer median** | **9.0x** | | **13.6x** | | |

Your company trades about 12% below the 9.0x median on EV/EBITDA. On EV ÷ (EBITDA − capex) the discount is still about 10% (12.2x vs 13.6x). Peer A looks cheapest on EV/EBITDA but loses its edge once its heavy capex is counted. Peers C and D carry far more debt: their equity is more sensitive to any EBITDA miss.

<figure class="diagram">
<svg viewBox="0 0 720 240" role="img" aria-label="Hypothetical lease-consistent EV/EBITDA multiples for five peers with the median marked" xmlns="http://www.w3.org/2000/svg"><text x="240" y="47" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer A</text><rect x="250" y="30" width="238.154" height="24" rx="4" fill="#0d9488"/><text x="496.154" y="47" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">7.2x</text><text x="240" y="81" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer B</text><rect x="250" y="64" width="277.846" height="24" rx="4" fill="#0d9488"/><text x="535.846" y="81" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">8.4x</text><text x="240" y="115" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Your company</text><rect x="250" y="98" width="261.308" height="24" rx="4" fill="#f59e0b"/><text x="519.308" y="115" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">7.9x</text><text x="240" y="149" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer C</text><rect x="250" y="132" width="317.538" height="24" rx="4" fill="#0d9488"/><text x="575.538" y="149" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">9.6x</text><text x="240" y="183" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer D</text><rect x="250" y="166" width="380.385" height="24" rx="4" fill="#0d9488"/><text x="638.385" y="183" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">11.5x</text><line x1="547.692" y1="22" x2="547.692" y2="200" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5 4"/><text x="547.692" y="218" font-size="11.5" font-weight="700" fill="#b45309" text-anchor="middle" font-family="system-ui, sans-serif">Peer median 9.0x</text></svg>
<figcaption>Hypothetical: lease-consistent EV/EBITDA for five peers with the 9.0x median marked. Your company sits below the median; the next step is checking whether capex or leverage explains it.</figcaption>
</figure>

<figure class="diagram">
<svg viewBox="0 0 720 340" role="img" aria-label="Hypothetical scatter of net debt to EBITDA against EV/EBITDA for five peers" xmlns="http://www.w3.org/2000/svg"><rect x="455.385" y="30" width="234.615" height="250" fill="#fde68a" opacity="0.45"/><text x="572.692" y="46" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle" font-family="system-ui, sans-serif">Leverage check zone</text><line x1="80" y1="280" x2="690" y2="280" stroke="#e2e8f0"/><text x="72" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">4x</text><line x1="80" y1="224.444" x2="690" y2="224.444" stroke="#e2e8f0"/><text x="72" y="228.444" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">6x</text><line x1="80" y1="168.889" x2="690" y2="168.889" stroke="#e2e8f0"/><text x="72" y="172.889" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">8x</text><line x1="80" y1="113.333" x2="690" y2="113.333" stroke="#e2e8f0"/><text x="72" y="117.333" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">10x</text><line x1="80" y1="57.7778" x2="690" y2="57.7778" stroke="#e2e8f0"/><text x="72" y="61.7778" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">12x</text><text x="80" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">0x</text><text x="173.846" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">1x</text><text x="267.692" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">2x</text><text x="361.538" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">3x</text><text x="455.385" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">4x</text><text x="549.231" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">5x</text><text x="643.077" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">6x</text><line x1="80" y1="280" x2="690" y2="280" stroke="#475569"/><circle cx="248.923" cy="191.111" r="7" fill="#0d9488"/><text x="259.923" y="195.111" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Peer A</text><circle cx="361.538" cy="157.778" r="7" fill="#0d9488"/><text x="372.538" y="161.778" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Peer B</text><circle cx="511.692" cy="124.444" r="7" fill="#0d9488"/><text x="522.692" y="128.444" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Peer C</text><circle cx="586.769" cy="71.6667" r="7" fill="#0d9488"/><text x="597.769" y="75.6667" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Peer D</text><circle cx="305.231" cy="171.667" r="7" fill="#f59e0b"/><text x="316.231" y="175.667" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Your company</text><text x="385" y="320" font-size="12" font-weight="600" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Net debt ÷ EBITDA (x)</text><text x="18" y="155" font-size="12" font-weight="600" fill="#0f172a" text-anchor="middle" transform="rotate(-90 18 155)" font-family="system-ui, sans-serif">EV/EBITDA (x)</text></svg>
<figcaption>Hypothetical: higher multiples cluster with higher leverage in this peer set. Peers C and D sit in the leverage check zone, so their equity value is more exposed to a change in the multiple or in EBITDA.</figcaption>
</figure>

## Why leverage changes how to read the gap

The same change in EBITDA moves equity value much more when debt is a large share of EV. The hub has a simple example; in peer work, add a line showing each company's equity share of EV (market cap ÷ EV) next to the multiple. A peer with a 50% equity share needs only a modest multiple drop to lose a large share of its market value.

## Canada-first issues for EV/EBITDA peer sets

| Issue | What to do |
|:--|:--|
| US GAAP peers | Put everyone on EBITDAaL, or capitalize US operating leases into EV and add back lease cost; see [comparing a TSX stock to its US peer](/investing/valuation/compare-tsx-stock-to-us-peer/) |
| Pipelines with large JV stakes | Subtract equity investments, or add proportionate JV EBITDA if disclosed |
| Utilities with regulated and unregulated parts | Compare segments where possible; rate base growth matters more than the multiple |
| Energy producers | Compare at one stated price deck; EV per flowing barrel as a second view |
| Telecom spectrum purchases | Lumpy capex; use a multi-year capex ÷ EBITDA average |
| Hybrid notes and preferreds | Treat consistently as debt-like for every peer |

## Checklist

| Step | Done when |
|:--|:--|
| Peers chosen | Same business model, reasons written |
| EV rebuilt | Same date, debt, leases, preferreds, NCI, minus cash and equity investments |
| EBITDA rebuilt | Reported, TTM, calendarized, same lease basis |
| Context columns added | Capex ÷ EBITDA, net debt ÷ EBITDA, growth |
| Median used | For EV/EBITDA and EV ÷ (EBITDA − capex) |
| Gap explained | One sentence covering capex and leverage |

## Go deeper

Rebuilding EV for five peers means pulling debt, lease, preferred and NCI lines from each balance sheet; a broker platform that exports financials saves hours. Compare options in [how to compare Canadian discount brokers](/investing/brokers-tools/compare-canadian-discount-brokers/). Then turn the comparison into a price range with [how to use EV/EBITDA in a simple valuation checklist](/investing/valuation/use-ev-ebitda-simple-valuation-checklist/).

## Related reading

- [When EV/EBITDA misleads on TSX stocks](/investing/valuation/when-ev-ebitda-misleads-tsx/)
- [What is EV/EBITDA?](/investing/glossary/what-is-ev-ebitda/)
- [How to analyze pipelines and utilities as bond proxies](/investing/analyze/analyze-pipelines-utilities-bond-proxies/)
- [How to compare two TSX peers side by side](/investing/analyze/compare-two-tsx-peers/)

## Sources

- IFRS 16 *Leases*; FASB ASC 842 *Leases*.
- IAS 28 *Investments in Associates and Joint Ventures*; IFRS 10 *Consolidated Financial Statements*.
- NI 52-112 *Non-GAAP and Other Financial Measures Disclosure*.
- IAS 21 *The Effects of Changes in Foreign Exchange Rates*.

## Media credits

- Hero: "SaskTel Communications Tower in Saskatoon.jpg" by SSPWXR, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:SaskTel_Communications_Tower_in_Saskatoon.jpg). Cropped and resized to 1280x720. Real photograph of a SaskTel communications tower near Saskatoon, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
