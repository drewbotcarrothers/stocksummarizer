---
title: "P/FCF vs Peers: A Canada-First Comparison Guide"
description: "How to compare price-to-free-cash-flow across TSX peers: one FCF definition, normalized yields, the median, and capex intensity, cash conversion and leverage columns. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-13
image: "/images/investing/p-fcf-vs-peers-canada-first-comparison.jpg"
imageAlt: "Orange gantry cranes at the Centerm container terminal across the water in Vancouver harbour"
imageCredit: "Centerm terminal, Vancouver, photograph by Dietmar Rabich, CC BY-SA 4.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "mixed"
---

A P/FCF peer table is only as good as its weakest definition. If one peer subtracts lease payments and another does not, or one is in a heavy build phase while another is coasting, the multiples are not comparable no matter how carefully you pull them.

The general peer steps (true peers, calendarizing, median not mean) are in [P/E vs peers: a Canada-first comparison guide](/investing/valuation/pe-vs-peers-canada-first-comparison/) and [how to use peer tables without cherry-picking comps](/investing/analyze/use-peer-tables-without-cherry-picking/). The definition and worksheet are in [how to calculate P/FCF in CAD from filings](/investing/valuation/calculate-p-fcf-in-cad-from-filings/), and the concept is in [what P/FCF means](/investing/valuation/what-p-fcf-means-canadian-diy/). This post adds what P/FCF comparisons specifically need. It is educational; figures are hypothetical.

## Direct answer

Rebuild every peer's FCF with **one definition** (after all capex, lease principal, interest and minority claims), use a **normalized** figure (three-year average or mid-cycle), and compare **FCF yields** against the peer median. Then add three context columns: **capex ÷ depreciation** (investment phase), **FCF ÷ net income** (cash conversion) and **net debt ÷ EBITDA** (risk). A high FCF yield that comes from under-investment or high leverage is not a discount.

## Definition alignment rules

| Rule | Why it matters |
|:--|:--|
| One FCF definition, rebuilt by you | Company-defined FCF varies; see [non-GAAP metrics](/investing/analyze/read-non-gaap-metrics-critically/) |
| Interest subtracted wherever classified | IAS 7 lets peers put interest paid in operating or financing |
| Lease principal subtracted | Otherwise lease-heavy peers look cheaper |
| Minority distributions and preferred dividends subtracted | Equity multiple needs FCF to common |
| Same window for all (3-year average) | One year is too noisy for working capital |
| SBC treatment the same for all | Show both if tech peers are in the set |
| Average-rate FX for USD reporters | Cash flow is a flow |

## Peer table (hypothetical, normalized 3-year FCF)

| Company | FCF yield | P/FCF | Capex ÷ depreciation | FCF ÷ net income | Net debt ÷ EBITDA |
|:--|--:|--:|--:|--:|--:|
| Your company | 6.1% | 16.4x | 1.0x | 95% | 1.8x |
| Peer A | 4.2% | 23.8x | 0.9x | 105% | 1.2x |
| Peer B | 5.0% | 20.0x | 1.1x | 90% | 2.0x |
| Peer C | 7.4% | 13.5x | 1.6x | 70% | 3.6x |
| Peer D | 3.1% | 32.3x | 2.2x | 45% | 2.9x |
| **Peer median** | **4.6%** | | | | |

Comparing yields is easier than comparing multiples because the yield scale is linear (and it handles low-FCF outliers better). Your company's 6.1% yield is above the 4.6% median while its capex is in line with depreciation and its cash conversion is high: that gap looks more solid. Peer C's high yield comes with the most leverage and lower conversion, and Peer D's low yield reflects a heavy build phase, not necessarily an expensive business.

<figure class="diagram">
<svg viewBox="0 0 720 240" role="img" aria-label="Hypothetical normalized free cash flow yields for five peers with the median marked" xmlns="http://www.w3.org/2000/svg"><text x="240" y="47" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer A</text><rect x="250" y="30" width="200.667" height="24" rx="4" fill="#0d9488"/><text x="458.667" y="47" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">4.2%</text><text x="240" y="81" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Your company</text><rect x="250" y="64" width="291.444" height="24" rx="4" fill="#f59e0b"/><text x="549.444" y="81" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">6.1%</text><text x="240" y="115" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer B</text><rect x="250" y="98" width="238.889" height="24" rx="4" fill="#0d9488"/><text x="496.889" y="115" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">5.0%</text><text x="240" y="149" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer C</text><rect x="250" y="132" width="353.556" height="24" rx="4" fill="#0d9488"/><text x="611.556" y="149" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">7.4%</text><text x="240" y="183" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer D</text><rect x="250" y="166" width="148.111" height="24" rx="4" fill="#0d9488"/><text x="406.111" y="183" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">3.1%</text><line x1="469.778" y1="22" x2="469.778" y2="200" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5 4"/><text x="469.778" y="218" font-size="11.5" font-weight="700" fill="#b45309" text-anchor="middle" font-family="system-ui, sans-serif">Peer median 4.6%</text></svg>
<figcaption>Hypothetical: normalized FCF yields with the 4.6% peer median marked. Your company sits above the median; the context columns decide whether that is a discount or a warning.</figcaption>
</figure>

<figure class="diagram">
<svg viewBox="0 0 720 340" role="img" aria-label="Hypothetical scatter of capex-to-depreciation ratio against price-to-free-cash-flow for five peers" xmlns="http://www.w3.org/2000/svg"><rect x="476.5" y="30" width="213.5" height="250" fill="#fde68a" opacity="0.45"/><text x="583.25" y="46" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle" font-family="system-ui, sans-serif">Heavy growth capex</text><line x1="80" y1="280" x2="690" y2="280" stroke="#e2e8f0"/><text x="72" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0x</text><line x1="80" y1="217.5" x2="690" y2="217.5" stroke="#e2e8f0"/><text x="72" y="221.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">9x</text><line x1="80" y1="155" x2="690" y2="155" stroke="#e2e8f0"/><text x="72" y="159" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">18x</text><line x1="80" y1="92.5" x2="690" y2="92.5" stroke="#e2e8f0"/><text x="72" y="96.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">27x</text><line x1="80" y1="30" x2="690" y2="30" stroke="#e2e8f0"/><text x="72" y="34" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">36x</text><text x="80" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">0.5x</text><text x="232.5" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">1x</text><text x="385" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">1.5x</text><text x="537.5" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">2x</text><text x="690" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">2.5x</text><line x1="80" y1="280" x2="690" y2="280" stroke="#475569"/><circle cx="202" cy="114.722" r="7" fill="#0d9488"/><text x="213" y="118.722" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Peer A</text><circle cx="263" cy="141.111" r="7" fill="#0d9488"/><text x="274" y="145.111" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Peer B</text><circle cx="415.5" cy="186.25" r="7" fill="#0d9488"/><text x="426.5" y="190.25" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Peer C</text><circle cx="598.5" cy="55.6944" r="7" fill="#0d9488"/><text x="609.5" y="59.6944" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Peer D</text><circle cx="232.5" cy="166.111" r="7" fill="#f59e0b"/><text x="243.5" y="170.111" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Your company</text><text x="385" y="320" font-size="12" font-weight="600" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Capex ÷ depreciation (x)</text><text x="18" y="155" font-size="12" font-weight="600" fill="#0f172a" text-anchor="middle" transform="rotate(-90 18 155)" font-family="system-ui, sans-serif">P/FCF (x)</text></svg>
<figcaption>Hypothetical: plotting capex intensity against P/FCF separates "expensive" from "investing". Peer D's 32x multiple sits in the heavy growth capex zone, so its FCF may rise when projects finish.</figcaption>
</figure>

## Adjusting for investment phase

For peers in a build phase, add a second view that replaces actual capex with an estimate of maintenance capex (management disclosure if available, or depreciation as a rough proxy).

| Hypothetical, Peer D | Reported | Maintenance view |
|:--|--:|--:|
| Operating cash flow after leases and interest | C$400M | C$400M |
| Capex used | C$330M (total) | C$150M (≈ depreciation) |
| FCF | C$70M | C$250M |
| Market cap | C$2,260M | C$2,260M |
| P/FCF | 32.3x | 9.0x |

The truth sits between the two: growth capex only becomes value if the projects earn more than their cost of capital. Keep both columns and judge the projects separately; see [how to read capex plans in an MD&A](/investing/analyze/read-capex-plans-mdna/).

## Canada-first issues for P/FCF peer sets

| Issue | What to do |
|:--|:--|
| US GAAP peers (operating leases stay in operating cash flow) | US operating-lease payments already reduce operating cash flow, so subtract IFRS 16 lease principal from Canadian peers to match; see [comparing a TSX stock to its US peer](/investing/valuation/compare-tsx-stock-to-us-peer/) |
| Pipelines and utilities report "distributable cash flow" | Use their reconciliation, but rebuild to your definition for cross-sector checks |
| Energy producers' FCF depends on the price deck | Compare at one stated mid-cycle deck |
| Holding companies with many minority interests | Subtract NCI distributions to keep the scope consistent |
| Few TSX peers | Add US peers, flagged, after the lease adjustment |

## Checklist

| Step | Done when |
|:--|:--|
| Peers chosen | Same business model, reasons written |
| FCF rebuilt | One definition for all, from the cash flow statements |
| Normalized | Three-year average or mid-cycle |
| Context columns added | Capex ÷ depreciation, conversion, leverage |
| Median used | Yields compared with the median |
| Gap explained | One sentence covering investment phase and leverage |

## Go deeper

Pulling five years of cash flow statements for five peers is much faster with a broker platform that exports financials; compare options in [how to compare Canadian discount brokers](/investing/brokers-tools/compare-canadian-discount-brokers/). Then turn the comparison into a price range with [how to use P/FCF in a simple valuation checklist](/investing/valuation/use-p-fcf-simple-valuation-checklist/).

## Related reading

- [When P/FCF misleads on TSX stocks](/investing/valuation/when-p-fcf-misleads-tsx/)
- [How to analyze free cash flow for stock decisions](/investing/analyze/free-cash-flow-analysis/)
- [How to compare two TSX peers side by side](/investing/analyze/compare-two-tsx-peers/)
- [What is free cash flow?](/investing/glossary/what-is-free-cash-flow/)

## Sources

- IAS 7 *Statement of Cash Flows*.
- IFRS 16 *Leases*; FASB ASC 842 *Leases* (US peers).
- NI 52-112 *Non-GAAP and Other Financial Measures Disclosure*.
- IAS 21 *The Effects of Changes in Foreign Exchange Rates*.

## Media credits

- Hero: "Vancouver (BC, Canada), Vancouver Centerm Terminal -- 2022 -- 1902.jpg" by Dietmar Rabich, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Vancouver_(BC,_Canada),_Vancouver_Centerm_Terminal_--_2022_--_1902.jpg). Cropped and resized to 1280x720. Real photograph of the Centerm container terminal in Vancouver harbour, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
