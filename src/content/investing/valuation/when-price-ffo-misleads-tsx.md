---
title: "When Price/FFO Misleads on TSX Stocks"
description: "How price to FFO misleads on TSX REITs: capex-heavy property types, leverage, debt about to reprice, total vs per-unit growth, definition drift and wrong peers. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-16
image: "/images/investing/when-price-ffo-misleads-tsx.jpg"
imageAlt: "An empty open-plan office floor with grey carpet, ceiling tiles and bare walls"
imageCredit: "Empty office photograph by Ged Carroll, CC BY 2.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

P/FFO fixes the biggest problem with P/E for REITs: property revaluations. But it brings its own blind spots. FFO is an earnings measure, before the capex and leasing costs that keep buildings rented; it is after interest, so leverage flatters it; and it is backward-looking, so cheap debt that is about to be refinanced is still in the number.

This post covers the ways P/FFO misleads on TSX-listed REITs and the fix for each. The worksheet is in [how to calculate price/FFO in CAD from filings](/investing/valuation/calculate-price-ffo-in-cad-from-filings/); the concept in [what price/FFO means](/investing/valuation/what-price-ffo-means-canadian-diy/). It is educational; all figures are hypothetical.

## Direct answer

P/FFO misleads when (1) **capex and leasing costs** differ a lot between REITs, so the same P/FFO hides different cash earnings; (2) **leverage** lifts FFO per unit and makes indebted REITs look cheap; (3) **debt maturing soon** will reprice and cut FFO; (4) total FFO grows through **unit issuance** while FFO per unit stalls; (5) FFO includes **non-standard adjustments** or **capitalized interest**; or (6) you compare **different property types** or Canadian and US FFO definitions. The fixes: add P/AFFO, a leverage column, a refinancing check, and per-unit growth.

## Trap 1: FFO is not cash

Office and some retail REITs spend heavily on tenant improvements, leasing commissions and building capex to keep space leased. Industrial and multi-family REITs usually spend less per dollar of FFO. P/FFO ignores the difference.

| Hypothetical | Industrial REIT | Office REIT |
|:--|--:|--:|
| P/FFO | 10.0x | 10.0x |
| AFFO ÷ FFO (conversion) | 90% | 65% |
| **P/AFFO** | **11.1x** | **15.4x** |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical: two REITs at the same price to FFO look very different on price to AFFO once capex and leasing costs are deducted" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0x</text><line x1="70" y1="180" x2="710" y2="180" stroke="#e2e8f0"/><text x="62" y="184" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">6x</text><line x1="70" y1="110" x2="710" y2="110" stroke="#e2e8f0"/><text x="62" y="114" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">12x</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">18x</text><rect x="170" y="133.333" width="56" height="116.667" rx="3" fill="#0d9488"/><text x="198" y="127.333" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">10x</text><rect x="230" y="120.5" width="56" height="129.5" rx="3" fill="#f59e0b"/><text x="258" y="114.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">11.1x</text><text x="230" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Industrial REIT</text><rect x="490" y="133.333" width="56" height="116.667" rx="3" fill="#0d9488"/><text x="518" y="127.333" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">10x</text><rect x="550" y="70.3333" width="56" height="179.667" rx="3" fill="#f59e0b"/><text x="578" y="64.3333" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">15.4x</text><text x="550" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Office REIT</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">P/FFO</text><rect x="165" y="10" width="14" height="14" rx="3" fill="#f59e0b"/><text x="185" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">P/AFFO</text></svg>
<figcaption>Hypothetical: identical P/FFO, very different P/AFFO. The office REIT keeps only 65 cents of each dollar of FFO after capex and leasing costs.</figcaption>
</figure>

**Fix:** always show P/AFFO next to P/FFO, and add an AFFO-to-FFO conversion column. See [what price/AFFO means](/investing/valuation/what-price-affo-means-canadian-diy/).

## Trap 2: leverage makes FFO per unit look cheap

FFO is after interest, but the unit price only covers the equity. A REIT that funds more of its properties with debt has fewer units per dollar of property, so FFO per unit is higher and P/FFO lower, even if the buildings are identical.

| Hypothetical, same property portfolio | REIT L | REIT M |
|:--|--:|--:|
| Debt ÷ gross book value | 55% | 35% |
| P/FFO | 10.5x | 13.0x |
| EV ÷ EBITDA | 17.5x | 17.5x |
| Read | Cheap on P/FFO because of debt | Same business price on EV/EBITDA |

**Fix:** add debt-to-gross-book-value and EV/EBITDA columns. [When EV/EBITDA misleads](/investing/valuation/when-ev-ebitda-misleads-tsx/) explains the enterprise-value side, and [how to analyze interest coverage for levered TSX companies](/investing/analyze/analyze-interest-coverage-levered-tsx/) the coverage side.

## Trap 3: debt that is about to reprice

Trailing FFO reflects the interest rates on today's debt. If a large share of mortgages or debentures matures in the next two years at rates below current market rates, FFO will fall when they are refinanced.

| Hypothetical refinancing check | Value |
|:--|--:|
| Debt maturing within two years | C$400M |
| Current average rate on that debt | 3.0% |
| Assumed refinancing rate (illustrative) | 5.0% |
| Extra annual interest | C$8M |
| Units (incl. Class B LP) | 120M |
| FFO per unit: trailing → after refinancing | $1.20 → $1.13 |
| P/FFO at $15.00: trailing → after refinancing | 12.5x → 13.2x |

**Fix:** read the debt maturity ladder in the MD&A or debt note, reprice the near-term maturities at a rate you can defend, and use the adjusted FFO. [How to read debt notes and covenant language](/investing/analyze/read-debt-notes-covenant-language/) shows where to look.

## Trap 4: growth in total FFO, not per unit

REITs grow by buying properties, often funded by issuing units. Total FFO can rise every year while FFO per unit goes nowhere.

| Hypothetical | Year 1 | Year 3 |
|:--|--:|--:|
| Total FFO | C$120M | C$145M |
| Units | 100M | 121M |
| FFO per unit | $1.20 | $1.20 |

**Fix:** track FFO **per unit**, and separate same-property NOI growth from acquisitions. [How to compare organic vs acquisition growth](/investing/analyze/compare-organic-vs-acquisition-growth/) applies here.

## Trap 5: definition drift and capitalized interest

| Issue | Where it shows | Fix |
|:--|:--|:--|
| Adjustments beyond REALPAC (restructuring, "normalized" items) | MD&A reconciliation | Use the REALPAC FFO line for comparisons |
| Definition changed between years | Footnotes to the reconciliation | Restate prior years on the new basis or note it |
| Interest capitalized to developments | Finance cost note | Treat a large capitalized amount as a cost that will hit FFO when projects complete |
| Income guarantees or vendor support | MD&A, acquisition notes | Remove from recurring FFO |

## Trap 6: wrong comparisons

Comparing an industrial REIT's P/FFO with an office REIT's, or a Canadian REIT's REALPAC FFO with a US REIT's Nareit FFO, mixes different businesses or different definitions. [Price/FFO vs peers](/investing/valuation/price-ffo-vs-peers-canada-first-comparison/) sets out the alignment rules.

<figure class="diagram">
<svg viewBox="0 0 720 190" role="img" aria-label="Four ways price to FFO misleads on TSX REITs and the fix for each" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#0d9488" stroke-width="2"/><rect x="10" y="10" width="164.5" height="36" rx="12" fill="#0d9488"/><rect x="10" y="34" width="164.5" height="12" fill="#0d9488"/><text x="92.25" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Not cash</text><text x="92.25" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Capex and</text><text x="92.25" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">leasing costs</text><text x="92.25" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">left out</text><text x="92.25" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Fix: P/AFFO</text><rect x="188.5" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#0ea5e9" stroke-width="2"/><rect x="188.5" y="10" width="164.5" height="36" rx="12" fill="#0ea5e9"/><rect x="188.5" y="34" width="164.5" height="12" fill="#0ea5e9"/><text x="270.75" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Debt</text><text x="270.75" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Leverage lifts</text><text x="270.75" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">FFO per unit</text><text x="270.75" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Fix: debt/GBV,</text><text x="270.75" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">EV/EBITDA</text><rect x="367" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/><rect x="367" y="10" width="164.5" height="36" rx="12" fill="#f59e0b"/><rect x="367" y="34" width="164.5" height="12" fill="#f59e0b"/><text x="449.25" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Refinancing</text><text x="449.25" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Old cheap debt</text><text x="449.25" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">in trailing FFO</text><text x="449.25" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Fix: reprice</text><text x="449.25" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">the maturities</text><rect x="545.5" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#dc2626" stroke-width="2"/><rect x="545.5" y="10" width="164.5" height="36" rx="12" fill="#dc2626"/><rect x="545.5" y="34" width="164.5" height="12" fill="#dc2626"/><text x="627.75" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Unit growth</text><text x="627.75" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Total FFO up,</text><text x="627.75" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">per unit flat</text><text x="627.75" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Fix: track</text><text x="627.75" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">per unit</text></svg>
<figcaption>Four of the most common P/FFO traps and the fix for each: add P/AFFO, add leverage, reprice maturing debt, and track per-unit growth.</figcaption>
</figure>

## Quick checklist

| Check | Pass if |
|:--|:--|
| P/AFFO shown next to P/FFO | Yes, with conversion ratio |
| Leverage column | Debt/GBV and EV/EBITDA in line with peers, or the difference explained |
| Maturities in the next two years repriced | FFO adjusted |
| FFO per unit growth, not total | Positive over three years, or the reason understood |
| REALPAC basis | No material extra adjustments |
| Same property type and definition | Yes |

## Go deeper

For a full REIT analysis routine beyond multiples, read [how to analyze REITs differently from ordinary equities](/investing/analyze/analyze-reits-vs-ordinary-equities/). For the distribution side, see [REIT distributions vs corporate dividends](/investing/dividends/reit-distributions-vs-corporate-dividends/).

## Related reading

- [What is FFO?](/investing/glossary/what-is-ffo/)
- [Valuation for REITs: NAV, FFO, AFFO explained](/investing/valuation/valuing-reits-nav-ffo-affo/)
- [When P/E misleads on TSX stocks](/investing/valuation/when-pe-misleads-tsx/)
- [How REITs make money](/investing/sectors/how-reits-make-money/)

## Sources

- REALPAC, *White Paper on Funds From Operations (FFO) & Adjusted Funds From Operations (AFFO) for IFRS* (current edition), [realpac.ca](https://realpac.ca/).
- National Instrument 52-112 *Non-GAAP and Other Financial Measures Disclosure*.
- IAS 23 *Borrowing Costs* (capitalized interest); IAS 40 *Investment Property*; IFRS 7 *Financial Instruments: Disclosures* (maturity analysis).

## Media credits

- Hero: "Empty office.jpg" by Ged Carroll, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Empty_office.jpg). Cropped and resized to 1280x720. Real photograph of an empty office floor, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
