---
title: "When EV/FCF Misleads on TSX Stocks"
description: "How EV/FCF misleads on TSX stocks: acquisition timing gaps, claims counted twice, tax pools running out, capitalized interest and debt-like obligations, with a quick check. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-14
image: "/images/investing/when-ev-fcf-misleads-tsx.jpg"
imageAlt: "A snow-covered frozen river winding between dark spruce forest under a blue winter sky in northern British Columbia"
imageCredit: "Frozen Liard River photograph by Bruce McKay, CC BY-SA 2.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

EV/FCF removes the leverage distortion that makes levered companies look cheap on P/FCF. In exchange it introduces mismatches of its own, because the numerator is a snapshot of claims on one day and the denominator is a year of cash flow built with several judgment calls. On the TSX, where acquisitions, tax pools and long-lived assets are common, those mismatches are easy to miss.

The traps EV/FCF shares with P/FCF (working-capital swings, under-investment, build phases, generous FCF definitions, cash tax timing in general) are covered in [when P/FCF misleads on TSX stocks](/investing/valuation/when-p-fcf-misleads-tsx/). The worksheet is in [how to calculate EV/FCF in CAD from filings](/investing/valuation/calculate-ev-fcf-in-cad-from-filings/). This post covers the problems specific to the unlevered version. It is educational; figures are hypothetical.

## Direct answer

EV/FCF misleads when **EV and FCF cover different periods or claims**: debt-funded acquisitions in EV without a full year of the target's cash flow, lease liabilities in EV while lease payments are also deducted, cash subtracted from EV while its interest stays in FCF, and debt-like obligations (pensions, decommissioning) left out of EV. It also misleads when **cash taxes are temporarily low** because of tax pools, and when **capitalized interest** hides inside capex. Check each before trusting the multiple.

## Trap 1: the acquisition timing gap

When a company borrows to buy another business late in its fiscal year, the new debt is in EV immediately, but trailing FCF includes only a few months of the target's cash flow.

| Hypothetical, C$ millions | Reported TTM | Pro forma |
|:--|--:|--:|
| Enterprise value (includes C$1,000M acquisition debt) | 6,000 | 6,000 |
| Unlevered FCF from the existing business | 220 | 220 |
| Target's unlevered FCF included | 20 (three months) | 80 (full year) |
| Total unlevered FCF | 240 | 300 |
| **EV/FCF** | **25.0x** | **20.0x** |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical: an acquisition financed with debt mid-year makes trailing EV/FCF look higher than the pro forma figure" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0x</text><line x1="70" y1="180" x2="710" y2="180" stroke="#e2e8f0"/><text x="62" y="184" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">10x</text><line x1="70" y1="110" x2="710" y2="110" stroke="#e2e8f0"/><text x="62" y="114" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">20x</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">30x</text><rect x="200" y="75" width="56" height="175" rx="3" fill="#0d9488"/><text x="228" y="69" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">25.0x</text><text x="230" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Reported TTM</text><rect x="520" y="110" width="56" height="140" rx="3" fill="#0d9488"/><text x="548" y="104" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">20.0x</text><text x="550" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Pro forma</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">EV/FCF</text></svg>
<figcaption>Hypothetical: the same company looks 25% more expensive on trailing figures than on a pro forma basis. Business acquisition reports and MD&A pro forma disclosures help close the gap.</figcaption>
</figure>

The reverse also happens: after a large disposal, EV has fallen (debt repaid) but trailing FCF still includes the sold business. Use the pro forma figures, and read [how to analyze M&A track records for serial acquirers](/investing/analyze/analyze-ma-track-records-serial-acquirers/) for whether the acquired cash flow is likely to hold.

## Trap 2: claims counted twice, or not at all

| Mismatch | Effect | Fix |
|:--|:--|:--|
| Lease liabilities in EV **and** lease payments deducted from FCF | EV/FCF too high | One lease basis |
| Cash subtracted from EV, interest income left in FCF | EV/FCF too low | Remove interest received |
| Equity investments subtracted, associate dividends left in FCF | EV/FCF too low | Remove the dividends, or keep the investment in EV |
| Pension deficit or decommissioning liability ignored | EV too low | Add as debt-like claims, after tax where appropriate |
| Preferreds or NCI in EV, their payouts deducted | EV/FCF too high | Do not deduct them |

## Trap 3: tax pools that run out

Unlevered FCF is after tax. Many Canadian resource and growth issuers pay little cash tax for years because of accumulated losses or resource tax pools (capital cost allowance, Canadian exploration and development expense). FCF looks strong until the pools are used up.

| Hypothetical, C$ millions | Year 1 | Year 2 | Year 3 | Year 4 |
|:--|--:|--:|--:|--:|
| Unlevered FCF before cash taxes | 400 | 400 | 400 | 400 |
| Cash taxes | 0 | 0 | 40 | 80 |
| Unlevered FCF | 400 | 400 | 360 | 320 |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical: unlevered free cash flow falls as tax pools run out and cash taxes start" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0</text><line x1="70" y1="180" x2="710" y2="180" stroke="#e2e8f0"/><text x="62" y="184" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">150</text><line x1="70" y1="110" x2="710" y2="110" stroke="#e2e8f0"/><text x="62" y="114" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">300</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">450</text><rect x="94" y="250" width="52" height="0" rx="3" fill="#f59e0b"/><text x="120" y="244" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">0</text><rect x="150" y="63.3333" width="52" height="186.667" rx="3" fill="#0d9488"/><text x="176" y="57.3333" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">400</text><text x="150" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Year 1</text><rect x="254" y="250" width="52" height="0" rx="3" fill="#f59e0b"/><text x="280" y="244" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">0</text><rect x="310" y="63.3333" width="52" height="186.667" rx="3" fill="#0d9488"/><text x="336" y="57.3333" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">400</text><text x="310" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Year 2</text><rect x="414" y="231.333" width="52" height="18.6667" rx="3" fill="#f59e0b"/><text x="440" y="225.333" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">40</text><rect x="470" y="82" width="52" height="168" rx="3" fill="#0d9488"/><text x="496" y="76" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">360</text><text x="470" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Year 3</text><rect x="574" y="212.667" width="52" height="37.3333" rx="3" fill="#f59e0b"/><text x="600" y="206.667" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">80</text><rect x="630" y="100.667" width="52" height="149.333" rx="3" fill="#0d9488"/><text x="656" y="94.6667" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">320</text><text x="630" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Year 4</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#f59e0b"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Cash taxes (C$M)</text><rect x="242" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="262" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Unlevered FCF (C$M)</text></svg>
<figcaption>Hypothetical: as tax pools are exhausted, cash taxes rise and unlevered FCF falls 20% with no change in the business. The income tax note discloses unused losses and deductible temporary differences.</figcaption>
</figure>

Run EV/FCF at the actual tax rate and at a normalized rate (the statutory rate in the income tax note). If the company only looks cheap on the first, the "cheapness" is a timing benefit.

## Trap 4: capitalized interest inside capex

During construction, IAS 23 requires borrowing costs on qualifying assets to be capitalized. That interest shows up in capex (investing), not in interest paid. If you add back only the expensed interest, unlevered FCF is understated for pipelines, utilities, miners and real estate developers in a build phase. Where it is material, the borrowing costs note gives the amount; treat it as interest, not capex.

## Trap 5: the wrong tool for the sector

| Sector | Why EV/FCF struggles | Better starting point |
|:--|:--|:--|
| Utilities and pipelines in heavy build | Growth capex pushes FCF low or negative | [EV/EBITDA](/investing/valuation/ev-ebitda-for-canadian-diy-investors/) plus capex plans |
| Banks and insurers | Debt is operating, not financing | [P/B and ROE](/investing/valuation/valuing-canadian-banks-pb-roe/) |
| REITs | Industry uses FFO and AFFO | [REIT NAV, FFO and AFFO](/investing/valuation/valuing-reits-nav-ffo-affo/) |
| Junior miners and developers | No steady FCF | Project NAV |

## 60-second check

| Question | If the answer is yes |
|:--|:--|
| Big acquisition or disposal in the last year? | Use pro forma FCF |
| Leases in EV? | Do not deduct lease payments |
| Interest received or associate dividends in operating cash flow? | Remove them |
| Large pension deficit or decommissioning liability? | Add to EV as debt-like |
| Cash tax rate far below the statutory rate? | Show a normalized-tax version |
| Construction under way? | Check capitalized interest |

## Go deeper

The cash-flow quality checks that sit underneath any FCF multiple are in [how to analyze free cash flow for stock decisions](/investing/analyze/free-cash-flow-analysis/). For debt-like items, see [how to evaluate pension and other long-term liabilities](/investing/analyze/evaluate-pension-long-term-liabilities/) and [how to analyze off-balance-sheet commitments simply](/investing/analyze/analyze-off-balance-sheet-commitments/).

## Related reading

- [What EV/FCF means for Canadian DIY investors](/investing/valuation/what-ev-fcf-means-canadian-diy/)
- [EV/FCF vs peers: a Canada-first comparison guide](/investing/valuation/ev-fcf-vs-peers-canada-first-comparison/)
- [How to read capex plans in an MD&A](/investing/analyze/read-capex-plans-mdna/)
- [What is free cash flow?](/investing/glossary/what-is-free-cash-flow/)

## Sources

- IAS 7 *Statement of Cash Flows*; IAS 23 *Borrowing Costs*; IAS 12 *Income Taxes*.
- IFRS 16 *Leases*; IAS 19 *Employee Benefits*; IAS 37 *Provisions, Contingent Liabilities and Contingent Assets*.
- IFRS 3 *Business Combinations*; Form 51-102F4 *Business Acquisition Report*.

## Media credits

- Hero: "Frozen Liard River -a.jpg" by Bruce McKay, [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Frozen_Liard_River_-a.jpg). Cropped and resized to 1280x720. Real photograph of the frozen Liard River in northern British Columbia, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
