---
title: "When Price/AFFO Misleads on TSX Stocks"
description: "How price to AFFO misleads on TSX REITs: thin capex reserves, value-add labels, lease-expiry walls, DRIP payouts, capitalized interest and mismatched definitions. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-16
image: "/images/investing/when-price-affo-misleads-tsx.jpg"
imageAlt: "Construction cranes above new towers on the Toronto skyline on a grey day"
imageCredit: "Construction cranes in Toronto photograph by booledozer, Public domain, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

P/AFFO is the REIT multiple closest to cash, so it is tempting to treat it as the final word. It is not. AFFO depends on management's estimate of sustaining capex, on how spending is labelled, on distributions paid in units rather than cash, and on interest that development projects absorb. Each of these can make a REIT look cheaper, or its distribution safer, than it is.

This post covers the traps specific to P/AFFO on TSX-listed REITs and the fix for each. The worksheet (including how to rebuild AFFO on actual capex) is in [how to calculate price/AFFO in CAD from filings](/investing/valuation/calculate-price-affo-in-cad-from-filings/); the concept in [what price/AFFO means](/investing/valuation/what-price-affo-means-canadian-diy/). The traps that P/AFFO shares with P/FFO (leverage, refinancing, per-unit dilution) are in [when price/FFO misleads](/investing/valuation/when-price-ffo-misleads-tsx/) and only summarized here. It is educational; all figures are hypothetical.

## Direct answer

P/AFFO misleads when (1) the **capex reserve** is below what the buildings actually need; (2) recurring spending is labelled **value-add** and left out; (3) leasing costs are **normalized** just before a heavy lease-expiry period; (4) distributions are partly paid through a **DRIP**, so the cash payout looks lower than the economic one; (5) **capitalized interest** and development keep costs out of AFFO; or (6) AFFO **definitions differ** between the REITs you compare. Fix it by rebuilding AFFO on three-year actual spending, reading the capex classification, and using a cash payout ratio alongside the headline one.

## Trap 1: a reserve below actual spending

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical: reported price to AFFO against price to AFFO after replacing the capex reserve with average actual spending" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0x</text><line x1="70" y1="197.5" x2="710" y2="197.5" stroke="#e2e8f0"/><text x="62" y="201.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">5.5x</text><line x1="70" y1="145" x2="710" y2="145" stroke="#e2e8f0"/><text x="62" y="149" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">11x</text><line x1="70" y1="92.5" x2="710" y2="92.5" stroke="#e2e8f0"/><text x="62" y="96.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">16.5x</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">22x</text><rect x="116.667" y="116.364" width="56" height="133.636" rx="3" fill="#0d9488"/><text x="144.667" y="110.364" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">14x</text><rect x="176.667" y="111.591" width="56" height="138.409" rx="3" fill="#f59e0b"/><text x="204.667" y="105.591" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">14.5x</text><text x="176.667" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">REIT X</text><rect x="330" y="106.818" width="56" height="143.182" rx="3" fill="#0d9488"/><text x="358" y="100.818" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">15x</text><rect x="390" y="68.6364" width="56" height="181.364" rx="3" fill="#f59e0b"/><text x="418" y="62.6364" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">19x</text><text x="390" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">REIT Y</text><rect x="543.333" y="121.136" width="56" height="128.864" rx="3" fill="#0d9488"/><text x="571.333" y="115.136" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">13.5x</text><rect x="603.333" y="97.2727" width="56" height="152.727" rx="3" fill="#f59e0b"/><text x="631.333" y="91.2727" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">16x</text><text x="603.333" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">REIT Z</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Reported P/AFFO</text><rect x="235" y="10" width="14" height="14" rx="3" fill="#f59e0b"/><text x="255" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">P/AFFO on your capex basis</text></svg>
<figcaption>Hypothetical: once each REIT's capex reserve is replaced with its three-year average of actual sustaining capex, REIT Y moves from 15x to 19x AFFO. REIT X barely changes because its reserve was realistic.</figcaption>
</figure>

| Hypothetical | REIT X | REIT Y | REIT Z |
|:--|--:|--:|--:|
| Reported P/AFFO | 14.0x | 15.0x | 13.5x |
| Reserve vs 3-yr actual capex | Close | Far below | Below |
| P/AFFO on your basis | 14.5x | 19.0x | 16.0x |
| Rank on reported | 2 | 3 | 1 |
| Rank on your basis | 1 | 3 | 2 |

**Fix:** rebuild AFFO on actual three-year spending for every REIT you compare. The ranking can change.

## Trap 2: the "value-add" label

Capex that improves or repositions a building can reasonably be excluded from sustaining capex, because it should raise rent. But if a REIT reports large "value-add" or "revenue-enhancing" spending every year on the same portfolio, part of it is probably the cost of staying competitive.

| Signal | What to check |
|:--|:--|
| Value-add capex every year, similar size | Is NOI on those properties actually rising? |
| Sustaining capex per square foot or per suite falling while buildings age | Compare with peers of similar age |
| Large "repositioning" programs | Expected return disclosed, and achieved? |

**Fix:** read the capex classification in the MD&A; if value-add spending is recurring and returns are not visible, treat part of it as sustaining. [How to read capex plans in the MD&A](/investing/analyze/read-capex-plans-mdna/) helps.

## Trap 3: leasing costs before a lease-expiry wall

Normalized leasing costs smooth over the years when large leases expire. If a big share of the portfolio's leases expire in the next two years (common in office), actual tenant improvements and commissions will rise, and occupancy may dip.

| Hypothetical lease-expiry check | Value |
|:--|--:|
| Share of rent expiring in the next 24 months | 25% |
| Normalized leasing costs in AFFO | C$9M a year |
| Estimated leasing costs if 25% renews at current TI levels | C$16M a year |
| AFFO effect per unit (120M units) | −$0.06 |

**Fix:** read the lease-maturity table in the MD&A and adjust leasing costs for heavy expiry years.

## Trap 4: DRIP flatters the cash payout

With a distribution reinvestment plan (DRIP), some unitholders take new units instead of cash. The REIT's cash payout falls, but the unit count grows.

| Hypothetical | Value |
|:--|--:|
| AFFO per unit | $0.97 |
| Distribution per unit | $0.84 |
| Headline AFFO payout | 87% |
| Share taken in units through the DRIP | 20% |
| Cash payout ratio | 70% |

The 70% cash payout looks comfortable, but the 87% economic payout is the honest one, and DRIP units dilute future AFFO per unit. **Fix:** judge coverage on the full distribution, and track AFFO per unit, not total AFFO.

## Trap 5: capitalized interest and development

Under IAS 23, interest on money borrowed to build properties is capitalized into the cost of the development rather than expensed. That keeps it out of FFO and AFFO until the project is complete. A REIT with a large development program can show a lower P/AFFO than its stabilized earnings justify, or a higher one if the developments are not yet earning rent.

| Check | Where |
|:--|:--|
| Capitalized interest amount | Finance cost note |
| Development pipeline and expected yields | MD&A development section |
| Timing of completions | MD&A |

**Fix:** treat capitalized interest as a cost when judging distribution coverage, and value large development pipelines separately (for example, at cost or at NAV).

## Trap 6: definitions that do not match

There is no single, mandatory AFFO definition. REITs differ on reserves, on whether they deduct unit-based compensation or amortized financing costs, and on how they treat joint ventures. Comparing P/AFFO across REITs without checking the reconciliation compares different numbers.

<figure class="diagram">
<svg viewBox="0 0 720 190" role="img" aria-label="Four ways price to AFFO misleads on TSX REITs and the fix for each" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#0d9488" stroke-width="2"/><rect x="10" y="10" width="164.5" height="36" rx="12" fill="#0d9488"/><rect x="10" y="34" width="164.5" height="12" fill="#0d9488"/><text x="92.25" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Thin reserve</text><text x="92.25" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Reserve below</text><text x="92.25" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">actual capex</text><text x="92.25" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Fix: three-year</text><text x="92.25" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">actual average</text><rect x="188.5" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#0ea5e9" stroke-width="2"/><rect x="188.5" y="10" width="164.5" height="36" rx="12" fill="#0ea5e9"/><rect x="188.5" y="34" width="164.5" height="12" fill="#0ea5e9"/><text x="270.75" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Growth label</text><text x="270.75" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Capex called</text><text x="270.75" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">value-add</text><text x="270.75" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Fix: read the</text><text x="270.75" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">capex note</text><rect x="367" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/><rect x="367" y="10" width="164.5" height="36" rx="12" fill="#f59e0b"/><rect x="367" y="34" width="164.5" height="12" fill="#f59e0b"/><text x="449.25" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">DRIP</text><text x="449.25" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Units issued</text><text x="449.25" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">instead of cash</text><text x="449.25" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Fix: cash</text><text x="449.25" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">payout ratio</text><rect x="545.5" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#dc2626" stroke-width="2"/><rect x="545.5" y="10" width="164.5" height="36" rx="12" fill="#dc2626"/><rect x="545.5" y="34" width="164.5" height="12" fill="#dc2626"/><text x="627.75" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Capitalized</text><text x="627.75" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Interest moved</text><text x="627.75" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">to development</text><text x="627.75" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Fix: add it</text><text x="627.75" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">back as a cost</text></svg>
<figcaption>Four P/AFFO traps and their fixes: rebuild the capex reserve on actual spending, read the capex labels, use the full payout ratio despite the DRIP, and add back capitalized interest as a cost.</figcaption>
</figure>

## Shared traps with P/FFO (summary)

| Trap | Short fix |
|:--|:--|
| Leverage lifts AFFO per unit | Add debt ÷ GBV and EV/EBITDA |
| Debt maturing at higher rates | Reprice near-term maturities |
| Growth in total, not per unit | Track AFFO per unit over three years |

Details are in [when price/FFO misleads on TSX stocks](/investing/valuation/when-price-ffo-misleads-tsx/).

## Go deeper

For distribution safety beyond the payout ratio, see [REIT distributions vs corporate dividends](/investing/dividends/reit-distributions-vs-corporate-dividends/) and [how to avoid dividend traps on the TSX](/investing/dividends/avoid-dividend-traps-tsx/). For the REIT analysis routine, read [how to analyze REITs differently from ordinary equities](/investing/analyze/analyze-reits-vs-ordinary-equities/).

## Related reading

- [Valuation for REITs: NAV, FFO, AFFO explained](/investing/valuation/valuing-reits-nav-ffo-affo/)
- [What is FFO?](/investing/glossary/what-is-ffo/)
- [When P/FCF misleads on TSX stocks](/investing/valuation/when-p-fcf-misleads-tsx/)
- [How REITs make money](/investing/sectors/how-reits-make-money/)

## Sources

- REALPAC, *White Paper on Funds From Operations (FFO) & Adjusted Funds From Operations (AFFO) for IFRS* (current edition), [realpac.ca](https://realpac.ca/).
- National Instrument 52-112 *Non-GAAP and Other Financial Measures Disclosure*.
- IAS 23 *Borrowing Costs*; IAS 40 *Investment Property*; IAS 33 *Earnings per Share*.

## Media credits

- Hero: "Distant construction cranes in Toronto, 2014 12 03 (2).jpg" by booledozer, public domain, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Distant_construction_cranes_in_Toronto,_2014_12_03_(2).jpg). Cropped and resized to 1280x720. Real photograph of construction cranes on the Toronto skyline, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
