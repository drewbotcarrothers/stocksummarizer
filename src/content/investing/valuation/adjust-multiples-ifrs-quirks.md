---
title: "How to Adjust Valuation Multiples for IFRS Quirks"
description: "The IFRS quirks that change TSX valuation multiples: IFRS 16 leases in EV/EBITDA, IAS 40 fair value gains in P/E, IFRS 15 timing and capitalized costs. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-18
image: "/images/investing/adjust-multiples-ifrs-quirks.jpg"
imageAlt: "The glass-roofed galleria of the Toronto Eaton Centre with shoppers on several levels"
imageCredit: "Toronto Eaton Centre interior photograph by Dillan Payne, CC BY-SA 4.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Most Canadian companies report under IFRS, and several IFRS standards change what the numbers inside a valuation multiple mean. Two companies with identical economics can show different EV/EBITDA, P/E or P/S ratios simply because of how a standard treats leases, property, revenue timing or development costs. These are not one-time items; they recur every year and they are easy to miss.

This post covers the IFRS quirks that matter most for common multiples and how to adjust for them. It does not repeat one-off adjustments ([how to spot one-time items](/investing/analyze/spot-one-time-items-canadian-statements/)) or cycle normalization ([normalized EPS](/investing/valuation/what-normalized-eps-means-canadian-diy/)). For reading the notes themselves, see [how to read IFRS notes for US-trained readers](/investing/analyze/read-ifrs-notes-us-trained-readers/). It is educational; all figures are hypothetical.

## Direct answer

Before you trust a multiple on an IFRS reporter, check five things: (1) **IFRS 16 leases**: EBITDA excludes lease costs, so enterprise value must include lease liabilities, or use EBITDA after leases. (2) **IAS 40 investment property**: fair value gains run through net income, so P/E on a real estate owner can look far too low. (3) **IFRS 15 revenue timing**: over-time vs point-in-time recognition shifts revenue and profit between years. (4) **IAS 38 and IAS 23**: capitalized development costs and borrowing costs lift EBITDA and EPS relative to peers that expense them. (5) **IAS 41 and IFRS 9**: fair value changes on biological assets and some investments add noise to earnings.

<figure class="diagram">
<svg viewBox="0 0 720 190" role="img" aria-label="Four IFRS standards that change what common valuation multiples mean" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#0d9488" stroke-width="2"/><rect x="10" y="10" width="164.5" height="36" rx="12" fill="#0d9488"/><rect x="10" y="34" width="164.5" height="12" fill="#0d9488"/><text x="92.25" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">IFRS 16</text><text x="92.25" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Leases move out</text><text x="92.25" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">of opex: EBITDA</text><text x="92.25" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">up, EV must</text><text x="92.25" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">include leases</text><rect x="188.5" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#0ea5e9" stroke-width="2"/><rect x="188.5" y="10" width="164.5" height="36" rx="12" fill="#0ea5e9"/><rect x="188.5" y="34" width="164.5" height="12" fill="#0ea5e9"/><text x="270.75" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">IAS 40</text><text x="270.75" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Property fair-</text><text x="270.75" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">value gains in</text><text x="270.75" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">net income: P/E</text><text x="270.75" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">looks too low</text><rect x="367" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/><rect x="367" y="10" width="164.5" height="36" rx="12" fill="#f59e0b"/><rect x="367" y="34" width="164.5" height="12" fill="#f59e0b"/><text x="449.25" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">IFRS 15</text><text x="449.25" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Over-time vs</text><text x="449.25" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">point-in-time</text><text x="449.25" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">revenue shifts</text><text x="449.25" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">P/S and P/E</text><rect x="545.5" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#dc2626" stroke-width="2"/><rect x="545.5" y="10" width="164.5" height="36" rx="12" fill="#dc2626"/><rect x="545.5" y="34" width="164.5" height="12" fill="#dc2626"/><text x="627.75" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">IAS 38 / 23</text><text x="627.75" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Capitalized dev.</text><text x="627.75" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">costs and interest</text><text x="627.75" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">lift EBITDA and</text><text x="627.75" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">EPS vs US peers</text></svg>
<figcaption>Four groups of IFRS standards that change the meaning of everyday multiples. Each recurs every year.</figcaption>
</figure>

## Quirk 1: IFRS 16 leases in EV/EBITDA

Since 2019, IFRS 16 has put almost all leases on the balance sheet. Rent disappears from operating expenses and is replaced by right-of-use depreciation and lease interest, both below EBITDA. The cross-border version of this trap is in [how to compare a TSX stock to its US peer fairly](/investing/valuation/compare-tsx-stock-to-us-peer/); here is the within-Canada version, where the mistake is mixing data sources.

| Hypothetical retailer | C$M |
|:--|--:|
| Market capitalization | 2,400 |
| Net debt excluding leases | 400 |
| Lease liabilities | 900 |
| EBITDA (IFRS 16 basis) | 500 |
| Lease payments (cash) | 140 |
| EBITDA after leases (EBITDAaL) | 360 |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical retailer: mixing pre-lease enterprise value with post-IFRS 16 EBITDA makes the multiple look cheaper than either consistent version" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0x</text><line x1="70" y1="197.5" x2="710" y2="197.5" stroke="#e2e8f0"/><text x="62" y="201.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">2.5x</text><line x1="70" y1="145" x2="710" y2="145" stroke="#e2e8f0"/><text x="62" y="149" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">5x</text><line x1="70" y1="92.5" x2="710" y2="92.5" stroke="#e2e8f0"/><text x="62" y="96.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">7.5x</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">10x</text><rect x="146.667" y="132.4" width="56" height="117.6" rx="3" fill="#0d9488"/><text x="174.667" y="126.4" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">5.6x</text><text x="176.667" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Mixed: EV ex leases</text><text x="176.667" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">÷ IFRS 16 EBITDA</text><rect x="360" y="94.6" width="56" height="155.4" rx="3" fill="#0d9488"/><text x="388" y="88.6" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">7.4x</text><text x="390" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Consistent: EV incl.</text><text x="390" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">leases ÷ EBITDA</text><rect x="573.333" y="86.2" width="56" height="163.8" rx="3" fill="#0d9488"/><text x="601.333" y="80.2" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">7.8x</text><text x="603.333" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Consistent: EV ex</text><text x="603.333" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">leases ÷ EBITDAaL</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">EV/EBITDA, same company</text></svg>
<figcaption>Hypothetical: a data provider's EV without leases divided by IFRS 16 EBITDA gives 5.6x. Either consistent version gives 7.4x to 7.8x.</figcaption>
</figure>

| Version | Calculation | EV/EBITDA |
|:--|:--|--:|
| Mixed (common in screeners) | 2,800 ÷ 500 | 5.6x |
| Consistent: EV including leases | 3,700 ÷ 500 | 7.4x |
| Consistent: EV excluding leases ÷ EBITDAaL | 2,800 ÷ 360 | 7.8x |

Two further effects. **Net debt ÷ EBITDA** looks lower on the mixed basis for the same reason. And IFRS 16 **front-loads expense**: depreciation plus interest on a new lease exceeds the cash rent in early years, so a company that just signed many leases shows lower EPS than its cash flow suggests. The leases note shows lease additions and the maturity of lease liabilities.

## Quirk 2: IAS 40 fair value gains in P/E

Under IAS 40, a company can carry investment property at fair value and run changes through net income. Real estate companies, some REITs that report under IFRS, and diversified companies with property portfolios often do.

| Hypothetical real estate owner | C$M |
|:--|--:|
| Market capitalization | 3,000 |
| Net income as reported | 300 |
| of which fair value gains on investment property | 180 |
| Net income excluding fair value gains | 120 |
| **P/E as reported** | **10.0x** |
| **P/E excluding fair value gains** | **25.0x** |

A P/E of 10x looks cheap until you see that most of the "earnings" were appraisal changes. For property owners, use FFO, AFFO or NAV instead; see [valuing REITs: NAV, FFO, AFFO](/investing/valuation/valuing-reits-nav-ffo-affo/). For diversified companies, strip the fair value line from earnings and value the property separately.

## Quirk 3: IFRS 15 revenue timing

IFRS 15 recognizes revenue when control passes to the customer, either **over time** (as work progresses) or **at a point in time** (on delivery). Construction, engineering, software licences and homebuilding can fall on either side depending on contract terms.

| Two hypothetical builders, identical projects | Over time | Point in time |
|:--|--:|--:|
| Year 1 revenue | 400 | 0 |
| Year 2 revenue | 400 | 0 |
| Year 3 revenue | 400 | 1,200 |
| P/S in year 2 (market cap 1,000) | 2.5x | not meaningful |

Neither is wrong; they describe the same economics on different schedules. Check the revenue note for the recognition method, the size of **contract assets and liabilities**, and the **remaining performance obligations** (backlog) disclosure, then compare peers over several years, not one. See [how to read order backlog and book-to-bill](/investing/analyze/read-order-backlog-book-to-bill/).

## Quirk 4: capitalized development and borrowing costs

| Standard | What it allows | Effect on multiples | Adjustment |
|:--|:--|:--|:--|
| IAS 38 development costs | Capitalize development once criteria are met (US GAAP generally expenses R&D) | Higher EBITDA and EPS than an expensing peer | Add capitalized development to expenses for comparison; see the intangibles note |
| IAS 23 borrowing costs | Capitalize interest on assets under construction | Lower interest expense, higher EPS during big builds | Add capitalized interest back to interest expense; check the borrowing costs note |
| IAS 16 componentization | Separate depreciation of major components | Can change D&A timing vs peers | Compare D&A ÷ gross PP&E across peers |

A software company that capitalizes C$30M of development a year on EBITDA of C$150M has C$120M of EBITDA on an expensing basis. At an EV of C$1,800M that is 12.0x vs 15.0x.

## Quirk 5: fair value noise in earnings

- **IAS 41 biological assets** (agriculture, aquaculture, and formerly cannabis growers) can book fair value gains before anything is sold. Use earnings before fair value adjustments.
- **IFRS 9 investments** at fair value through profit or loss make earnings move with markets; equity investments designated at fair value through OCI do not. Check which policy the company uses before comparing P/E with a peer.
- **IFRS 2 share-based payments** are expensed under both IFRS and US GAAP, but companies often exclude them from "adjusted" figures. Keep them in.

## A quick adjustment checklist

| Multiple | IFRS checks |
|:--|:--|
| EV/EBITDA | Leases in EV or EBITDAaL; capitalized development; capitalized interest |
| P/E | IAS 40 and IAS 41 fair value gains; IFRS 9 investment gains; capitalized interest |
| P/S | IFRS 15 recognition method; gross vs net (principal vs agent) presentation |
| P/B | Revaluation model vs cost model for property; goodwill; see [tangible book](/investing/valuation/what-tangible-book-means-canadian-diy/) |
| P/FCF | IFRS 16 moves lease principal to financing, which flatters CFO; subtract it |

## Go deeper

For a hub of which multiple fits each sector, see [comparable company analysis for Canadian sectors](/investing/valuation/comparable-company-analysis-canadian-sectors/). For the EV/EBITDA basics, read [EV/EBITDA for Canadian DIY investors](/investing/valuation/ev-ebitda-for-canadian-diy-investors/) and [when EV/EBITDA misleads](/investing/valuation/when-ev-ebitda-misleads-tsx/).

## Related reading

- [How to read IFRS notes for US-trained readers](/investing/analyze/read-ifrs-notes-us-trained-readers/)
- [How to read non-GAAP metrics critically](/investing/analyze/read-non-gaap-metrics-critically/)
- [How to analyze REITs vs ordinary equities](/investing/analyze/analyze-reits-vs-ordinary-equities/)
- [How to analyze off-balance-sheet commitments](/investing/analyze/analyze-off-balance-sheet-commitments/)

## Sources

- IFRS 16 *Leases*; IAS 40 *Investment Property*; IFRS 15 *Revenue from Contracts with Customers*; IAS 38 *Intangible Assets*; IAS 23 *Borrowing Costs*; IAS 41 *Agriculture*; IFRS 9 *Financial Instruments*; IFRS 2 *Share-based Payment* (IFRS Foundation).
- FASB ASC 842 *Leases* and ASC 730 *Research and Development*, for the US GAAP comparison.

## Media credits

- Hero: "Interior of the Toronto Eaton Centre, March 18 2026 (01).jpg" by Dillan Payne, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Interior_of_the_Toronto_Eaton_Centre,_March_18_2026_(01).jpg). Cropped and resized to 1280x720. Real photograph of the interior of the Toronto Eaton Centre, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
