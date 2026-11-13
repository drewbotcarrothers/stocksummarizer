---
title: "When P/FCF Misleads on TSX Stocks"
description: "How price-to-free-cash-flow misleads on TSX stocks: working-capital swings, capex under-investment, growth capex phases, generous FCF definitions, acquisitions and cash tax timing. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-13
image: "/images/investing/when-p-fcf-misleads-tsx.jpg"
imageAlt: "Low water levels exposing dry, terraced banks around a mountain reservoir in Colorado"
imageCredit: "Green Mountain Reservoir low water photograph by Tony Webster, CC BY-SA 4.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

P/FCF has a reputation as the "honest" multiple because cash is harder to manipulate than earnings. Harder is not impossible. Free cash flow can be pulled forward, pushed back, defined generously or bought, and on the TSX a few sectors make it swing for perfectly innocent reasons.

This post covers the traps only. The concept and rough ranges are in [what P/FCF means for Canadian DIY investors](/investing/valuation/what-p-fcf-means-canadian-diy/); the worksheet is in [how to calculate P/FCF in CAD from filings](/investing/valuation/calculate-p-fcf-in-cad-from-filings/); reading the cash flow statement is covered in [how to analyze free cash flow](/investing/analyze/free-cash-flow-analysis/). It is educational; numbers are hypothetical.

## Direct answer

P/FCF misleads when one period's free cash flow is not a fair picture of what the business generates. The usual causes are **working-capital timing**, **capex below what the assets need**, **heavy growth capex** that hides a good business, **definition differences** (leases, interest, stock-based compensation), **acquisitions that sit outside capex**, **cyclical peaks** and **cash tax timing**. Use a multi-year average, check capex against depreciation, and apply one FCF definition to every company.

## The trap table

| Trap | What happens to P/FCF | Typical TSX setting | Quick check |
|:--|:--|:--|:--|
| Working-capital release | FCF spikes; P/FCF looks low | Distributors, industrials after a slowdown | Change in working capital line |
| Customer prepayments | Cash arrives before the work | Software, construction, travel | Contract liabilities / deferred revenue trend |
| Supplier finance and factoring | Payables stretched, receivables sold | Retail, manufacturing | IAS 7 supplier finance disclosure; receivables note |
| Capex under-investment | FCF high until assets wear out | Mature industrials, older networks | Capex ÷ depreciation below 1.0x for years |
| Growth capex phase | FCF low or negative; P/FCF looks high | Pipelines, utilities, miners building projects | Growth vs maintenance capex split in the MD&A |
| Lease principal ignored | FCF overstated after IFRS 16 | Retail, airlines, restaurants, telecom | Principal portion of lease payments in financing |
| Stock-based compensation | Real cost added back to cash flow | Tech, early-stage growth | SBC as % of operating cash flow |
| Acquisitions outside capex | "FCF" funds growth that is bought | Serial acquirers | Average acquisition spend vs FCF |
| Cyclical peak | Record FCF at peak prices | Energy, materials, building products | Mid-cycle price deck |
| Cash tax timing | Low cash taxes now, higher later | Resource issuers using tax pools | Current vs deferred tax; MD&A tax guidance |

## Trap 1: working capital makes single years swing

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical free cash flow swinging with working capital compared with a rolling three-year average" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0</text><line x1="70" y1="208" x2="710" y2="208" stroke="#e2e8f0"/><text x="62" y="212" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">70</text><line x1="70" y1="166" x2="710" y2="166" stroke="#e2e8f0"/><text x="62" y="170" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">140</text><line x1="70" y1="124" x2="710" y2="124" stroke="#e2e8f0"/><text x="62" y="128" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">210</text><line x1="70" y1="82" x2="710" y2="82" stroke="#e2e8f0"/><text x="62" y="86" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">280</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">350</text><rect x="94" y="142" width="52" height="108" rx="3" fill="#0d9488"/><text x="120" y="136" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">180</text><rect x="150" y="250" width="52" height="0" rx="3" fill="#94a3b8"/><text x="176" y="244" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif"></text><text x="150" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Year 1</text><rect x="254" y="196" width="52" height="54" rx="3" fill="#0d9488"/><text x="280" y="190" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">90</text><rect x="310" y="250" width="52" height="0" rx="3" fill="#94a3b8"/><text x="336" y="244" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif"></text><text x="310" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Year 2</text><rect x="414" y="64" width="52" height="186" rx="3" fill="#0d9488"/><text x="440" y="58" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">310</text><rect x="470" y="134.2" width="52" height="115.8" rx="3" fill="#94a3b8"/><text x="496" y="128.2" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">193</text><text x="470" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Year 3</text><rect x="574" y="166" width="52" height="84" rx="3" fill="#0d9488"/><text x="600" y="160" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">140</text><rect x="630" y="142" width="52" height="108" rx="3" fill="#94a3b8"/><text x="656" y="136" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">180</text><text x="630" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Year 4</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Reported FCF (C$M)</text><rect x="256" y="10" width="14" height="14" rx="3" fill="#94a3b8"/><text x="276" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">3-year average (C$M)</text></svg>
<figcaption>Hypothetical, C$ millions: reported FCF swings between $90M and $310M as inventory and receivables build and release. The three-year average is far more stable, around $180–$195M.</figcaption>
</figure>

With a market cap of C$3,000M, the same company trades at **9.7x** Year 3 FCF but **21.4x** Year 4 FCF, and about **16x** the three-year average. Two of those numbers are noise. Read [how to analyze working capital swings quarterly](/investing/analyze/analyze-working-capital-swings-quarterly/) and [inventory turns and receivables quality](/investing/analyze/analyze-inventory-turns-receivables-quality/) to tell whether a release is one-off or structural.

## Trap 2: capex that is too low, or very high

| Hypothetical | Under-investor | Builder |
|:--|--:|--:|
| Operating cash flow | C$500M | C$500M |
| Depreciation | C$250M | C$250M |
| Capex | C$150M | C$450M |
| Capex ÷ depreciation | 0.6x | 1.8x |
| Reported FCF | C$350M | C$50M |
| FCF if capex = depreciation | C$250M | C$250M |

The under-investor looks cheap, but its FCF will fall when it has to catch up on spending. The builder looks expensive, but its FCF may rise when projects come online. Neither reported P/FCF is a fair measure. Depreciation is only a rough proxy for maintenance capex; use management's split when disclosed and see [how to read capex plans in an MD&A](/investing/analyze/read-capex-plans-mdna/).

<figure class="diagram">
<svg viewBox="0 0 720 190" role="img" aria-label="Four ways price-to-free-cash-flow misleads and how to fix each" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#0d9488" stroke-width="2"/><rect x="10" y="10" width="164.5" height="36" rx="12" fill="#0d9488"/><rect x="10" y="34" width="164.5" height="12" fill="#0d9488"/><text x="92.25" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Timing</text><text x="92.25" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Working capital,</text><text x="92.25" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">tax and prepayment</text><text x="92.25" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">swings</text><text x="92.25" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Fix: 3-year average</text><rect x="188.5" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/><rect x="188.5" y="10" width="164.5" height="36" rx="12" fill="#f59e0b"/><rect x="188.5" y="34" width="164.5" height="12" fill="#f59e0b"/><text x="270.75" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Under-spend</text><text x="270.75" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Capex cut below</text><text x="270.75" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">depreciation</text><text x="270.75" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Fix: capex ÷ D&amp;A</text><text x="270.75" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">over 5 years</text><rect x="367" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#0ea5e9" stroke-width="2"/><rect x="367" y="10" width="164.5" height="36" rx="12" fill="#0ea5e9"/><rect x="367" y="34" width="164.5" height="12" fill="#0ea5e9"/><text x="449.25" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Definitions</text><text x="449.25" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Leases, interest</text><text x="449.25" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">and SBC treated</text><text x="449.25" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">differently</text><text x="449.25" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Fix: one definition</text><rect x="545.5" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#dc2626" stroke-width="2"/><rect x="545.5" y="10" width="164.5" height="36" rx="12" fill="#dc2626"/><rect x="545.5" y="34" width="164.5" height="12" fill="#dc2626"/><text x="627.75" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Bought growth</text><text x="627.75" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Acquisitions sit</text><text x="627.75" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">outside capex</text><text x="627.75" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Fix: subtract</text><text x="627.75" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">average M&amp;A spend</text></svg>
<figcaption>Each trap has a simple cross-check. When the cross-check and the headline P/FCF disagree, the cross-check is usually right.</figcaption>
</figure>

## Trap 3: generous definitions

Company-reported "free cash flow" is a non-GAAP measure. Under NI 52-112 it must be defined and reconciled to the nearest IFRS measure, but companies can still choose what to include.

| Definition choice | Effect on FCF | Your fix |
|:--|:--|:--|
| Only "maintenance" capex subtracted | Higher | Subtract all capex |
| Lease principal not subtracted | Higher | Subtract it |
| Interest paid in financing, not subtracted | Higher | Subtract it |
| Distributions to minority partners ignored | Higher | Subtract them for FCF to common |
| SBC added back | Higher | Show both versions |
| "Before working capital" | Smoother but not cash | Use after working capital, averaged |

Read the reconciliation with the habits in [how to read non-GAAP metrics critically](/investing/analyze/read-non-gaap-metrics-critically/).

## Trap 4: bought growth

Acquisitions are an investing outflow but are not capex, so a serial acquirer can show strong FCF while spending more than all of it on deals. If the growth story depends on acquisitions, subtract average annual acquisition spend (net of disposals) as a second view. See [how to analyze M&A track records of serial acquirers](/investing/analyze/analyze-ma-track-records-serial-acquirers/).

## A 60-second P/FCF sanity check

| Question | If "no" |
|:--|:--|
| Is FCF within about 25% of its 3-year average? | Use the average |
| Has capex ÷ depreciation been between roughly 0.8x and 1.5x? | Adjust for under- or over-investment |
| Are leases, interest and NCI subtracted? | Rebuild with one definition |
| Is SBC under about 10% of operating cash flow? | Show P/FCF after SBC |
| Is FCF positive without acquisitions mattering? | Add average acquisition spend |
| Are commodity prices near mid-cycle? | Use a stated mid-cycle deck |

## Go deeper

The durability questions are collected in the [FCF quick checklist for stock decisions](/investing/analyze/fcf-stock-decisions-quick-checklist/). Then compare fairly in [P/FCF vs peers](/investing/valuation/p-fcf-vs-peers-canada-first-comparison/) and value it with [how to use P/FCF in a simple valuation checklist](/investing/valuation/use-p-fcf-simple-valuation-checklist/).

## Related reading

- [What is free cash flow?](/investing/glossary/what-is-free-cash-flow/)
- [Free cash flow coverage of dividends](/investing/dividends/fcf-coverage-of-dividends/)
- [How to read CFO vs net income](/investing/analyze/read-cfo-vs-net-income/)
- [When P/E misleads on TSX stocks](/investing/valuation/when-pe-misleads-tsx/)

## Sources

- IAS 7 *Statement of Cash Flows*, including the 2023 supplier finance arrangement disclosure amendments.
- IFRS 16 *Leases*.
- IFRS 15 *Revenue from Contracts with Customers* (contract liabilities).
- NI 52-112 *Non-GAAP and Other Financial Measures Disclosure*.
- IAS 12 *Income Taxes*.

## Media credits

- Hero: "Green Mountain Reservoir Low Water Levels, Colorado.jpg" by Tony Webster, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Green_Mountain_Reservoir_Low_Water_Levels,_Colorado.jpg). Cropped and resized to 1280x720. Real photograph of low water levels at Green Mountain Reservoir in Colorado, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
