---
title: "EV/FCF vs Peers: A Canada-First Comparison Guide"
description: "How to compare EV/FCF across TSX peers: one unlevered FCF definition, normalized yields, the median, and capex, leverage and cash tax rate columns. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-14
image: "/images/investing/ev-fcf-vs-peers-canada-first-comparison.jpg"
imageAlt: "Two grain elevators, one weathered white and one orange, standing side by side beside a rail line in Davidson, Saskatchewan"
imageCredit: "Grain elevators in Davidson, Saskatchewan, photograph by Canadian2006, CC BY-SA 3.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "mixed"
---

EV/FCF is a good peer multiple for one reason: it compares businesses before their capital structures, so a heavily indebted peer and a debt-free peer can sit in the same table. That only holds if every peer's EV and unlevered FCF are built the same way. Data screens rarely do that, and Canadian peer sets add tax pools, IFRS 16 leases and US GAAP comparables to the mix.

The general peer steps (true peers, calendarizing, median not mean) are in [P/E vs peers: a Canada-first comparison guide](/investing/valuation/pe-vs-peers-canada-first-comparison/) and [how to use peer tables without cherry-picking comps](/investing/analyze/use-peer-tables-without-cherry-picking/). The shareholder-level version, with capex intensity and cash conversion columns, is [P/FCF vs peers](/investing/valuation/p-fcf-vs-peers-canada-first-comparison/). The worksheet is in [how to calculate EV/FCF in CAD from filings](/investing/valuation/calculate-ev-fcf-in-cad-from-filings/). This post adds what unlevered comparisons need. It is educational; figures are hypothetical.

## Direct answer

Rebuild EV and **unlevered** FCF for every peer with one lease basis, one treatment of interest and investment income, the same debt-like claims and a **normalized** (three-year or mid-cycle) figure. Compare **unlevered FCF yields** (FCF ÷ EV) with the peer median. Then add **capex ÷ depreciation**, **net debt ÷ EBITDA** and **cash tax rate** columns. A high yield that comes from under-investment or from tax pools that will run out is not a discount; leverage does not distort the yield itself, but it decides how much of any mispricing reaches shareholders.

## Alignment rules for EV/FCF peer tables

| Rule | Why it matters |
|:--|:--|
| One lease basis for all | IFRS 16 peers and US GAAP peers present leases differently |
| Interest and tax shield treated the same | IAS 7 classification choices differ by company |
| Interest received and associate dividends removed where cash and investments are subtracted | Avoids double counting |
| Same debt-like claims (pensions, decommissioning) for all | Otherwise asset-heavy peers look cheaper |
| Normalized FCF window | One year of working capital is noise |
| Pro forma for recent acquisitions | EV includes the debt immediately |
| Average-rate FX for FCF, closing rate for EV | Flows vs balances |

## Peer table (hypothetical, normalized three-year unlevered FCF)

| Company | Unlevered FCF yield | EV/FCF | Capex ÷ depreciation | Net debt ÷ EBITDA | Cash tax rate |
|:--|--:|--:|--:|--:|--:|
| Your company | 6.0% | 16.7x | 1.1x | 2.5x | 22% |
| Peer A | 5.0% | 20.0x | 1.0x | 1.5x | 25% |
| Peer B | 6.5% | 15.4x | 1.2x | 3.8x | 10% |
| Peer C | 4.4% | 22.7x | 1.8x | 3.0x | 24% |
| Peer D | 7.2% | 13.9x | 0.7x | 2.2x | 26% |
| **Peer median (A–D)** | **5.75%** | | | | |

Your company yields slightly more than the median with capex in line with depreciation and a near-normal tax rate. That gap is small but looks clean. Each peer outlier has an explanation in the context columns: Peer C is investing heavily (capex 1.8x depreciation), Peer D may be under-investing (0.7x), and Peer B pays an unusually low cash tax rate.

<figure class="diagram">
<svg viewBox="0 0 720 240" role="img" aria-label="Hypothetical unlevered free cash flow yields for five peers with the peer median marked" xmlns="http://www.w3.org/2000/svg"><text x="240" y="47" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer C</text><rect x="250" y="30" width="225.238" height="24" rx="4" fill="#0d9488"/><text x="483.238" y="47" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">4.4%</text><text x="240" y="81" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer A</text><rect x="250" y="64" width="255.952" height="24" rx="4" fill="#0d9488"/><text x="513.952" y="81" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">5.0%</text><text x="240" y="115" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Your company</text><rect x="250" y="98" width="307.143" height="24" rx="4" fill="#f59e0b"/><text x="565.143" y="115" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">6.0%</text><text x="240" y="149" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer B</text><rect x="250" y="132" width="332.738" height="24" rx="4" fill="#0d9488"/><text x="590.738" y="149" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">6.5%</text><text x="240" y="183" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer D</text><rect x="250" y="166" width="368.571" height="24" rx="4" fill="#0d9488"/><text x="626.571" y="183" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">7.2%</text><line x1="544.345" y1="22" x2="544.345" y2="200" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5 4"/><text x="544.345" y="218" font-size="11.5" font-weight="700" fill="#b45309" text-anchor="middle" font-family="system-ui, sans-serif">Peer median 5.75%</text></svg>
<figcaption>Hypothetical: normalized unlevered FCF yields with the 5.75% median of the four peers marked.</figcaption>
</figure>

<figure class="diagram">
<svg viewBox="0 0 720 340" role="img" aria-label="Hypothetical scatter of cash tax rate against unlevered free cash flow yield, with a zone where tax pools may flatter the yield" xmlns="http://www.w3.org/2000/svg"><rect x="80" y="30" width="305" height="250" fill="#fde68a" opacity="0.45"/><text x="232.5" y="46" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle" font-family="system-ui, sans-serif">Tax pools may flatter FCF</text><line x1="80" y1="280" x2="690" y2="280" stroke="#e2e8f0"/><text x="72" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">3%</text><line x1="80" y1="230" x2="690" y2="230" stroke="#e2e8f0"/><text x="72" y="234" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">4%</text><line x1="80" y1="180" x2="690" y2="180" stroke="#e2e8f0"/><text x="72" y="184" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">5%</text><line x1="80" y1="130" x2="690" y2="130" stroke="#e2e8f0"/><text x="72" y="134" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">6%</text><line x1="80" y1="80" x2="690" y2="80" stroke="#e2e8f0"/><text x="72" y="84" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">7%</text><line x1="80" y1="30" x2="690" y2="30" stroke="#e2e8f0"/><text x="72" y="34" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">8%</text><text x="80" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">0%</text><text x="181.667" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">5%</text><text x="283.333" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">10%</text><text x="385" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">15%</text><text x="486.667" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">20%</text><text x="588.333" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">25%</text><text x="690" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">30%</text><line x1="80" y1="280" x2="690" y2="280" stroke="#475569"/><circle cx="588.333" cy="180" r="7" fill="#0d9488"/><text x="599.333" y="184" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Peer A</text><circle cx="283.333" cy="105" r="7" fill="#0d9488"/><text x="294.333" y="109" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Peer B</text><circle cx="568" cy="210" r="7" fill="#0d9488"/><text x="579" y="214" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Peer C</text><circle cx="608.667" cy="70" r="7" fill="#0d9488"/><text x="619.667" y="74" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Peer D</text><circle cx="527.333" cy="130" r="7" fill="#f59e0b"/><text x="538.333" y="134" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Your company</text><text x="385" y="320" font-size="12" font-weight="600" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Cash tax rate (% of pre-tax profit)</text><text x="18" y="155" font-size="12" font-weight="600" fill="#0f172a" text-anchor="middle" transform="rotate(-90 18 155)" font-family="system-ui, sans-serif">Unlevered FCF yield (%)</text></svg>
<figcaption>Hypothetical: plotting cash tax rate against FCF yield isolates Peer B. Its yield sits in the zone where tax pools or losses may be flattering cash flow; the income tax note will say how long that can last.</figcaption>
</figure>

## Normalizing tax and capex

Two adjustments do most of the work in an EV/FCF peer table.

| Hypothetical | Reported | Adjusted | Adjustment |
|:--|--:|--:|:--|
| Peer B unlevered FCF yield | 6.5% | 5.3% | Cash taxes at a 25% normalized rate instead of 10% |
| Peer D unlevered FCF yield | 7.2% | 5.9% | Capex raised to about depreciation |
| Peer C unlevered FCF yield | 4.4% | 6.0% | Growth capex excluded (maintenance view), flagged |

After adjusting, the spread narrows from 4.4–7.2% to roughly 5.0–6.0%, and your company's 6.0% sits near the top of a much tighter range. Keep both versions in your notes: the adjusted view is a judgment, and the capex plans in each MD&A should back it up; see [how to read capex plans in an MD&A](/investing/analyze/read-capex-plans-mdna/).

## Why yields, not multiples

Yields are linear and handle near-zero FCF better: a company with very low FCF has an enormous EV/FCF that wrecks an average, but a yield near zero sits quietly at the bottom of the table. Yields also line up naturally with a cost of capital, which the [EV/FCF checklist](/investing/valuation/use-ev-fcf-simple-valuation-checklist/) uses to set a fair multiple.

## Canada-first issues for EV/FCF peer sets

| Issue | What to do |
|:--|:--|
| US GAAP peers | Operating-lease payments are inside US operating cash flow; use the leases-excluded basis for Canadian peers, or add US lease liabilities to EV and add back their lease cost; see [comparing a TSX stock to its US peer](/investing/valuation/compare-tsx-stock-to-us-peer/) |
| Resource issuers with tax pools | Show a normalized-tax column |
| Pipelines and utilities in build phases | Compare maintenance-capex views, flagged |
| Holding companies and partnerships | Decide whether associates stay in EV, and apply it to all |
| Few TSX peers | Add US peers after the lease adjustment, flagged |

## Checklist

| Step | Done when |
|:--|:--|
| Peers chosen | Same business model, reasons written |
| EV rebuilt | Same claims (including debt-like items), same date |
| Unlevered FCF rebuilt | Same interest, lease and investment-income treatment |
| Normalized | Three-year average or mid-cycle, pro forma for deals |
| Context columns added | Capex ÷ depreciation, leverage, cash tax rate |
| Median used | Yields compared with the median |
| Gap explained | One sentence covering investment, tax and leverage |

## Go deeper

Rebuilding five peers' cash flow statements over three years is much faster on a broker platform that exports financials; compare options in [how to compare Canadian discount brokers](/investing/brokers-tools/compare-canadian-discount-brokers/). Then turn the comparison into a price range with [how to use EV/FCF in a simple valuation checklist](/investing/valuation/use-ev-fcf-simple-valuation-checklist/).

## Related reading

- [What EV/FCF means for Canadian DIY investors](/investing/valuation/what-ev-fcf-means-canadian-diy/)
- [When EV/FCF misleads on TSX stocks](/investing/valuation/when-ev-fcf-misleads-tsx/)
- [How to compare two TSX peers side by side](/investing/analyze/compare-two-tsx-peers/)
- [How to analyze free cash flow for stock decisions](/investing/analyze/free-cash-flow-analysis/)

## Sources

- IAS 7 *Statement of Cash Flows*; IAS 12 *Income Taxes*.
- IFRS 16 *Leases*; FASB ASC 842 *Leases* (US peers).
- IAS 21 *The Effects of Changes in Foreign Exchange Rates*.

## Media credits

- Hero: "Grain Elevators Davidson Saskatchewan.jpg" by Canadian2006, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Grain_Elevators_Davidson_Saskatchewan.jpg). Cropped and resized to 1280x720. Real photograph of grain elevators in Davidson, Saskatchewan, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
