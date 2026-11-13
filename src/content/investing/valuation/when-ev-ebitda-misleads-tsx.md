---
title: "When EV/EBITDA Misleads on TSX Stocks"
description: "How EV/EBITDA misleads on TSX stocks: capital intensity, IFRS 16 vs US GAAP leases, joint-venture and minority scope mismatches, adjusted EBITDA add-backs and costs below EBITDA. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-13
image: "/images/investing/when-ev-ebitda-misleads-tsx.jpg"
imageAlt: "Self-service check-in kiosks along a long glass-walled concourse at Québec City Jean Lesage International Airport"
imageCredit: "Québec City Jean Lesage International Airport photograph by Wilfredor, CC0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

EV/EBITDA fixes the biggest weakness of P/E by counting debt. In exchange it brings its own blind spots: EBITDA ignores capital spending, taxes and interest, it is not defined by IFRS, and on the TSX the IFRS 16 lease change and widespread joint ventures make it easy to divide the wrong numerator by the wrong denominator.

This post covers the traps. The application guide, including the basic IFRS 16 example and the leverage cross-check, is the hub: [what EV/EBITDA means for Canadian DIY investors](/investing/valuation/ev-ebitda-for-canadian-diy-investors/). The worksheet is [how to calculate EV/EBITDA in CAD from filings](/investing/valuation/calculate-ev-ebitda-in-cad-from-filings/), and the definition is in the [glossary](/investing/glossary/what-is-ev-ebitda/). It is educational; numbers are hypothetical.

## Direct answer

EV/EBITDA misleads when EBITDA is not a fair proxy for the cash the business can hand to all its capital providers, or when EV and EBITDA cover different things. The main traps are **capital intensity** (EBITDA ignores capex), **lease-basis mismatches** between peers or periods, **scope mismatches** (joint ventures, minority interests, acquisitions mid-period), **generous adjusted EBITDA**, **cyclical peak EBITDA** and **costs below EBITDA** such as cash taxes, interest and decommissioning. Cross-check with EV ÷ (EBITDA − capex) and FCF.

## The trap table

| Trap | Effect on EV/EBITDA | Typical TSX setting | Quick check |
|:--|:--|:--|:--|
| Capital intensity | Capex-heavy names look as cheap as capex-light ones | Telecom, rails, producers, utilities | EV ÷ (EBITDA − capex) |
| IFRS 16 vs US GAAP peers | Canadian lessees look cheaper | Retail, airlines, restaurants, telecom | Compare on EBITDAaL |
| Pre-2019 history | Today's multiple looks low vs history | Any big lessee | Restate history or use EBITDAaL |
| Equity-accounted JVs | Their value is in EV but their profit is not in EBITDA | Pipelines, miners, real estate | Subtract equity investments from EV |
| Non-controlling interests | 100% of subsidiary EBITDA, but NCI missing from EV | Holding companies, utilities | Add NCI to EV |
| Mid-period acquisition | New debt in EV, only part-year EBITDA | Serial acquirers | Pro forma TTM EBITDA (company-disclosed) |
| Adjusted EBITDA add-backs | Multiple shrinks as add-backs grow | Roll-ups, tech | Reported vs adjusted gap over 3 years |
| Cyclical peak | Record EBITDA, low multiple | Energy services, materials, building products | Mid-cycle EBITDA |
| Costs below EBITDA | Taxes, interest, decommissioning ignored | Resource issuers, levered names | FCF and net debt ÷ EBITDA |

## Trap 1: same EBITDA, very different cash

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical: three businesses with the same EBITDA but very different cash left after capital spending" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0</text><line x1="70" y1="197.5" x2="710" y2="197.5" stroke="#e2e8f0"/><text x="62" y="201.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">30</text><line x1="70" y1="145" x2="710" y2="145" stroke="#e2e8f0"/><text x="62" y="149" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">60</text><line x1="70" y1="92.5" x2="710" y2="92.5" stroke="#e2e8f0"/><text x="62" y="96.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">90</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">120</text><rect x="116.667" y="75" width="56" height="175" rx="3" fill="#0d9488"/><text x="144.667" y="69" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">100</text><rect x="176.667" y="89" width="56" height="161" rx="3" fill="#f59e0b"/><text x="204.667" y="83" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">92</text><text x="176.667" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Software-style</text><rect x="330" y="75" width="56" height="175" rx="3" fill="#0d9488"/><text x="358" y="69" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">100</text><rect x="390" y="171.25" width="56" height="78.75" rx="3" fill="#f59e0b"/><text x="418" y="165.25" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">45</text><text x="390" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Telecom-style</text><rect x="543.333" y="75" width="56" height="175" rx="3" fill="#0d9488"/><text x="571.333" y="69" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">100</text><rect x="603.333" y="197.5" width="56" height="52.5" rx="3" fill="#f59e0b"/><text x="631.333" y="191.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">30</text><text x="603.333" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Producer-style</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">EBITDA (C$M)</text><rect x="214" y="10" width="14" height="14" rx="3" fill="#f59e0b"/><text x="234" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">EBITDA − capex (C$M)</text></svg>
<figcaption>Hypothetical, C$ millions: all three businesses earn $100M of EBITDA, but after capital spending a software-style business keeps $92M, a telecom-style network $45M and a producer-style business $30M.</figcaption>
</figure>

Give all three the same enterprise value of C$800M and they share an **8.0x** EV/EBITDA. Divide by EBITDA minus capex instead and the multiples are **8.7x**, **17.8x** and **26.7x**. Only the first is cheap in any real sense. Comparing EV/EBITDA across sectors with different capital needs is the most common misuse of the multiple; within a sector, add a capex ÷ EBITDA column. See [how to read capex plans in an MD&A](/investing/analyze/read-capex-plans-mdna/).

## Trap 2: leases, beyond the basic example

The hub shows how IFRS 16 lifts EBITDA. Three follow-on problems catch DIY investors:

| Situation | What goes wrong | Fix |
|:--|:--|:--|
| Canadian IFRS peer vs US GAAP peer | US operating-lease cost stays above EBITDA, so the US peer's EBITDA is lower | Put both on EBITDAaL, or add capitalized US leases to EV and add back lease cost |
| Company reports "EBITDA excluding IFRS 16" | Mixing its non-GAAP figure with a data provider's post-IFRS 16 EV | Use the same basis top and bottom |
| Sale-leaseback | Asset sold, lease liability created; EBITDA can rise | Check the lease note for new leases |

## Trap 3: scope mismatches

Many TSX companies hold big stakes in joint ventures and associates (pipelines, LNG, mining JVs, real estate partnerships). Under IAS 28 their profit appears as one line below operating income, outside EBITDA, while their value is embedded in the share price and therefore in EV.

| Hypothetical | Unadjusted | Adjusted |
|:--|--:|--:|
| EV | C$10,000M | C$10,000M − C$1,500M JV stakes = C$8,500M |
| EBITDA (excludes JV profit) | C$1,000M | C$1,000M |
| EV/EBITDA | 10.0x | 8.5x |

The unadjusted multiple overstates how expensive the company is. The mirror error happens with non-controlling interests: EBITDA includes 100% of a part-owned subsidiary, so EV must include the minority holders' share.

<figure class="diagram">
<svg viewBox="0 0 720 190" role="img" aria-label="Four ways EV/EBITDA misleads on TSX stocks and the fix for each" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#0d9488" stroke-width="2"/><rect x="10" y="10" width="164.5" height="36" rx="12" fill="#0d9488"/><rect x="10" y="34" width="164.5" height="12" fill="#0d9488"/><text x="92.25" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Leases</text><text x="92.25" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">IFRS 16 lifts EBITDA</text><text x="92.25" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">US GAAP peers differ</text><text x="92.25" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Fix: EBITDAaL</text><text x="92.25" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">or add leases to EV</text><rect x="188.5" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/><rect x="188.5" y="10" width="164.5" height="36" rx="12" fill="#f59e0b"/><rect x="188.5" y="34" width="164.5" height="12" fill="#f59e0b"/><text x="270.75" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Capex</text><text x="270.75" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">EBITDA ignores</text><text x="270.75" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">reinvestment</text><text x="270.75" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Fix: EV ÷</text><text x="270.75" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">(EBITDA − capex)</text><rect x="367" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#0ea5e9" stroke-width="2"/><rect x="367" y="10" width="164.5" height="36" rx="12" fill="#0ea5e9"/><rect x="367" y="34" width="164.5" height="12" fill="#0ea5e9"/><text x="449.25" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Scope</text><text x="449.25" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">JV value in EV,</text><text x="449.25" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">not in EBITDA</text><text x="449.25" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Fix: subtract</text><text x="449.25" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">equity investments</text><rect x="545.5" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#dc2626" stroke-width="2"/><rect x="545.5" y="10" width="164.5" height="36" rx="12" fill="#dc2626"/><rect x="545.5" y="34" width="164.5" height="12" fill="#dc2626"/><text x="627.75" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Add-backs</text><text x="627.75" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Adjusted EBITDA</text><text x="627.75" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">grows each year</text><text x="627.75" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Fix: reported</text><text x="627.75" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">and reconciled</text></svg>
<figcaption>Four common traps, each with a one-line fix. When the fix changes the multiple by more than a turn, it matters for your conclusion.</figcaption>
</figure>

## Trap 4: adjusted EBITDA that keeps growing

Company "adjusted EBITDA" can add back stock-based compensation, restructuring, acquisition costs, "non-recurring" legal costs and more. NI 52-112 requires a reconciliation, so read it and track the gap.

| Add-back | Accept? |
|:--|:--|
| Impairments (non-cash, usually inside operating income under IFRS) | Usually, but note them and check how often they recur |
| Stock-based compensation | No for comparisons; it is a real cost paid in shares |
| Restructuring every year | No; recurring "one-offs" are operating costs |
| Acquisition and integration costs at a serial acquirer | No; they are part of the strategy |
| Unrealized hedging gains or losses | Usually yes, consistently |

If adjusted EBITDA exceeds reported EBITDA by more than about 10% for several years, compare on reported. Habits for this are in [how to read non-GAAP metrics critically](/investing/analyze/read-non-gaap-metrics-critically/) and [how to spot one-time items](/investing/analyze/spot-one-time-items-canadian-statements/).

## Trap 5: what sits below EBITDA

| Cost below EBITDA | Why it matters | Where to look |
|:--|:--|:--|
| Cash taxes | Two firms at the same multiple can keep very different after-tax cash | Tax note; MD&A |
| Interest | High leverage eats the cash before equity sees it | [Interest coverage](/investing/analyze/analyze-interest-coverage-levered-tsx/) |
| Decommissioning and reclamation | Energy and mining liabilities paid in cash later | Provisions note |
| Working capital | Growth consumes cash not seen in EBITDA | [Working capital swings](/investing/analyze/analyze-working-capital-swings-quarterly/) |

## Go deeper

Once the traps are handled, compare fairly in [EV/EBITDA vs peers: a Canada-first comparison guide](/investing/valuation/ev-ebitda-vs-peers-canada-first-comparison/) and turn it into a price range with [how to use EV/EBITDA in a simple valuation checklist](/investing/valuation/use-ev-ebitda-simple-valuation-checklist/).

## Related reading

- [When P/FCF misleads on TSX stocks](/investing/valuation/when-p-fcf-misleads-tsx/)
- [How to analyze off-balance-sheet commitments](/investing/analyze/analyze-off-balance-sheet-commitments/)
- [How to analyze telecoms using ARPU, churn and capex cycles](/investing/analyze/analyze-telecoms-arpu-churn-capex/)
- [How to analyze oil and gas producers vs midstream vs services](/investing/analyze/analyze-oil-gas-producers-midstream-services/)

## Sources

- IFRS 16 *Leases*; FASB ASC 842 *Leases* (US peers).
- IAS 28 *Investments in Associates and Joint Ventures*; IFRS 11 *Joint Arrangements*; IFRS 10 *Consolidated Financial Statements*.
- IAS 37 *Provisions, Contingent Liabilities and Contingent Assets* (decommissioning).
- NI 52-112 *Non-GAAP and Other Financial Measures Disclosure*.

## Media credits

- Hero: "Québec City Jean Lesage International Airport 03.jpg" by Wilfredor, [CC0](https://creativecommons.org/publicdomain/zero/1.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Qu%C3%A9bec_City_Jean_Lesage_International_Airport_03.jpg). Cropped and resized to 1280x720. Real photograph of the check-in hall at Québec City Jean Lesage International Airport, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
