---
title: "How to Calculate Price/FFO in CAD from Filings"
description: "A price-to-FFO worksheet for TSX REITs: the MD&A reconciliation under NI 52-112, REALPAC items, trailing twelve months, Class B LP units and price in the same currency. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-16
image: "/images/investing/calculate-price-ffo-in-cad-from-filings.jpg"
imageAlt: "A large warehouse and rail lands near Toronto's waterfront, seen from above with downtown buildings behind"
imageCredit: "LCBO warehouse site photograph by booledozer, CC0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Data sites will show you a P/FFO for most TSX REITs, but you rarely know which FFO they used: trailing or forward, the REIT's own figure or a standardized one, per trust unit or including exchangeable units. Building it yourself from the filings takes about fifteen minutes and tells you far more than the number itself.

This post is the worksheet. The concept is in [what price/FFO means](/investing/valuation/what-price-ffo-means-canadian-diy/), and the definition of FFO in [what is FFO?](/investing/glossary/what-is-ffo/). It does not repeat the FFO-to-AFFO bridge, which is in [valuation for REITs: NAV, FFO, AFFO explained](/investing/valuation/valuing-reits-nav-ffo-affo/). It is educational; all figures are hypothetical.

## Direct answer

(1) Open the latest **MD&A** and find the non-GAAP section with the **FFO reconciliation** to net income. (2) Check that it follows the **REALPAC** definition and note any extra adjustments. (3) Add the last **four quarters** of FFO to get a trailing twelve-month (TTM) figure. (4) Divide by the **weighted average diluted units**, including exchangeable LP units if the REIT adds back their distributions. (5) Divide the unit price by FFO per unit, using a price in the same currency.

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Five-step flow for calculating price to FFO in Canadian dollars from REIT filings" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Find it</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">MD&amp;A non-GAAP</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">section</text><line x1="134.4" y1="60" x2="149.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Reconcile</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Net income to FFO,</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">REALPAC basis?</text><line x1="278.8" y1="60" x2="293.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">TTM</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Sum four</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">quarters</text><line x1="423.2" y1="60" x2="438.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Per unit</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Weighted diluted,</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">incl. LP units</text><line x1="567.6" y1="60" x2="582.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">P/FFO</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Price ÷ FFO</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">per unit</text></svg>
<figcaption>The P/FFO worksheet in five steps. Steps 2 and 4 are where most of the differences between data sources come from.</figcaption>
</figure>

## Step 1 and 2: find and read the reconciliation

Under National Instrument 52-112, an issuer that reports FFO must explain how it is calculated and reconcile it to the most directly comparable IFRS measure, usually net income. Canadian REITs put this in the MD&A, often with a statement that FFO is calculated in accordance with REALPAC's white paper.

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical REIT bridge from IFRS net income to FFO over twelve months, in Canadian dollar millions" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0</text><line x1="70" y1="195" x2="710" y2="195" stroke="#e2e8f0"/><text x="62" y="199" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">40</text><line x1="70" y1="140" x2="710" y2="140" stroke="#e2e8f0"/><text x="62" y="144" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">80</text><line x1="70" y1="85" x2="710" y2="85" stroke="#e2e8f0"/><text x="62" y="89" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">120</text><line x1="70" y1="30" x2="710" y2="30" stroke="#e2e8f0"/><text x="62" y="34" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">160</text><rect x="85.2" y="167.5" width="49.6" height="82.5" rx="3" fill="#0d9488"/><text x="110" y="161.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">60</text><text x="110" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Net</text><text x="110" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">income</text><rect x="165.2" y="71.25" width="49.6" height="96.25" rx="3" fill="#f59e0b"/><text x="190" y="65.25" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+70</text><text x="190" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Fair value</text><text x="190" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">loss</text><rect x="245.2" y="60.25" width="49.6" height="11" rx="3" fill="#f59e0b"/><text x="270" y="54.25" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+8</text><text x="270" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Class B</text><text x="270" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">distrib.</text><rect x="325.2" y="60.25" width="49.6" height="13.75" rx="3" fill="#0ea5e9"/><text x="350" y="54.25" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−10</text><text x="350" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Class B</text><text x="350" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">FV gain</text><rect x="405.2" y="74" width="49.6" height="8.25" rx="3" fill="#0ea5e9"/><text x="430" y="68" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−6</text><text x="430" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Disposal</text><text x="430" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">gain</text><rect x="485.2" y="79.5" width="49.6" height="2.75" rx="3" fill="#f59e0b"/><text x="510" y="73.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+2</text><text x="510" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Transaction</text><text x="510" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">costs</text><rect x="565.2" y="52" width="49.6" height="27.5" rx="3" fill="#f59e0b"/><text x="590" y="46" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+20</text><text x="590" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">JV to</text><text x="590" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">FFO basis</text><rect x="645.2" y="52" width="49.6" height="198" rx="3" fill="#0f172a"/><text x="670" y="46" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">144</text><text x="670" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">FFO</text></svg>
<figcaption>Hypothetical REIT, twelve months, C$ millions: net income of 60 becomes FFO of 144 after removing a 70 fair-value loss, adding back distributions on exchangeable units, removing gains, and putting joint ventures on an FFO basis.</figcaption>
</figure>

| Reconciling item (hypothetical, C$M) | Amount | REALPAC item? | What to check |
|:--|--:|:--|:--|
| Net income (IFRS) | 60 | Starting point | |
| Fair-value loss on investment properties | +70 | Yes | Non-cash appraisal change |
| Distributions on Class B LP units recorded as finance costs | +8 | Yes | Means the units must be in the unit count |
| Fair-value gain on Class B LP units | −10 | Yes | Unit liability revalued with the unit price |
| Gain on property disposals | −6 | Yes | Not recurring rent |
| Transaction costs on acquisitions | +2 | Yes | One-off |
| Equity-accounted joint ventures restated to FFO | +20 | Yes | Replaces IFRS share of income |
| **FFO** | **144** | | |

Items **not** on the REALPAC list deserve a closer look: restructuring costs added back every year, "non-recurring" leasing costs, or income guarantees from vendors. REITs often present an "FFO" and a "normalized" or "adjusted" FFO; use the REALPAC one for comparisons and note the other. [How to read non-GAAP metrics critically](/investing/analyze/read-non-gaap-metrics-critically/) has a general method.

## Step 3: trailing twelve months

| Quarter | FFO per unit (hypothetical) |
|:--|--:|
| Q4 last year | $0.29 |
| Q1 | $0.30 |
| Q2 | $0.31 |
| Q3 (latest) | $0.30 |
| **TTM** | **$1.20** |

Use the per-unit figures the REIT reports or recompute from total FFO and the weighted units for each quarter. Do not annualize a single quarter if the business is seasonal (seniors housing, some retail) or if a large acquisition closed mid-year.

## Step 4: the right unit count

| Unit count choice | Units | FFO per unit | P/FFO at $15.00 |
|:--|--:|--:|--:|
| Trust units only | 110M | $1.31 | 11.5x |
| **Trust units plus Class B LP units** | **120M** | **$1.20** | **12.5x** |

If FFO adds back the LP units' distributions (as above), the units have to be in the denominator, or FFO per unit is overstated and P/FFO looks a full turn cheaper. Most REITs show a diluted weighted-average count that includes them; check the footnote. Convertible debentures are included only if the REIT's diluted calculation includes them, with the interest added back to FFO. [How to read cap tables and fully diluted share counts](/investing/analyze/read-cap-tables-fully-diluted-share-counts/) covers the dilution logic.

## Step 5: price, currency and date

| Check | Rule |
|:--|:--|
| Price date | Use one date for every REIT you compare |
| Currency | Some TSX-listed REITs report in US dollars or have US-dollar units; put price and FFO in the same currency at the Bank of Canada rate for that date |
| Forward vs trailing | If you use a forward FFO estimate, label it and use forward for every peer |
| IFRS 16 | REITs are mostly lessors; lessee effects (ground leases, head-office leases) are usually small, but check whether FFO treats lease payments consistently across peers |

## The finished worksheet

| Line | Hypothetical |
|:--|--:|
| TTM FFO (REALPAC basis) | C$144M |
| Weighted average diluted units incl. Class B LP | 120M |
| FFO per unit | $1.20 |
| Unit price (TSX, same date) | $15.00 |
| **P/FFO** | **12.5x** |
| FFO yield | 8.0% |
| Non-REALPAC adjustments noted | None material |

## Go deeper

The traps that make a correct P/FFO misleading (capex-heavy property types, refinancing, leverage and per-unit dilution) are in [when price/FFO misleads on TSX stocks](/investing/valuation/when-price-ffo-misleads-tsx/). To find the MD&A, see [how to use SEDAR+ for stock research](/investing/analyze/use-sedar-plus-for-stock-research/).

## Related reading

- [How to read an MD&A like a DIY investor](/investing/analyze/how-to-read-mdna/)
- [How to calculate P/E in CAD from filings](/investing/valuation/calculate-pe-in-cad-from-filings/)
- [How to analyze REITs differently from ordinary equities](/investing/analyze/analyze-reits-vs-ordinary-equities/)
- [REIT distributions vs corporate dividends](/investing/dividends/reit-distributions-vs-corporate-dividends/)

## Sources

- REALPAC, *White Paper on Funds From Operations (FFO) & Adjusted Funds From Operations (AFFO) for IFRS* (current edition), [realpac.ca](https://realpac.ca/).
- National Instrument 52-112 *Non-GAAP and Other Financial Measures Disclosure*.
- IAS 40 *Investment Property*; IAS 32 *Financial Instruments: Presentation*; IAS 28 *Investments in Associates and Joint Ventures*; IFRS 16 *Leases*; IAS 33 *Earnings per Share*.
- Bank of Canada, daily exchange rates.

## Media credits

- Hero: "This big LCBO warehouse is going to be the centre of an 11 acre knot of condos, 2017 07 06 (35015460513).jpg" by booledozer, [CC0](https://creativecommons.org/publicdomain/zero/1.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:This_big_LCBO_warehouse_is_going_to_be_the_centre_of_an_11_acre_knot_of_condos,_2017_07_06_(35015460513).jpg). Cropped and resized to 1280x720. Real photograph of a large warehouse site near Toronto's waterfront, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
