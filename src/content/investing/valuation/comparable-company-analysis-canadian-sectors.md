---
title: "Comparable Company Analysis for Canadian Sectors"
description: "A comps hub for TSX investors: build a peer set, pick the right multiple for each Canadian sector, use the median and range, and explain the gap before calling it cheap. Educational."
category: "valuation"
role: "Hub"
pubDate: 2026-11-18
image: "/images/investing/comparable-company-analysis-canadian-sectors.jpg"
imageAlt: "Stephen Avenue pedestrian mall in downtown Calgary with sandstone buildings, banners and office towers"
imageCredit: "Stephen Avenue photograph by Jan Mosimann, CC BY 2.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "mixed"
---

Comparable company analysis ("comps") values a stock by looking at what the market pays for similar companies. It is the most common valuation method in sell-side research and the easiest to misuse: pick the wrong peers or the wrong multiple and you can make almost any stock look cheap.

This hub shows the workflow, which multiple suits which Canadian sector, and where on StockSummarizer each multiple is covered in detail. The peer-selection discipline itself is in [how to use peer tables without cherry-picking](/investing/analyze/use-peer-tables-without-cherry-picking/). It is educational; examples are hypothetical.

## Direct answer

(1) Build a **peer set** of companies with the same business model, similar size and comparable listing. (2) Choose the **multiple that matches the sector's economics** (P/TBV for banks, P/AFFO for REITs, P/NAV for miners, EV/EBITDA for pipelines and industrials, and so on). (3) Put every peer on **one basis**: same period, currency and adjustments. (4) Use the **median and interquartile range**, not the average. (5) **Explain the gap** between your company and the median with growth, returns, risk and leverage before calling it cheap or expensive. (6) Cross-check against an intrinsic method.

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Five-step workflow for comparable company analysis" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Peer set</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Same business,</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">size, listing</text><line x1="134.4" y1="60" x2="149.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Right multiple</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Pick by</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">sector economics</text><line x1="278.8" y1="60" x2="293.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">One basis</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Same period,</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">currency, rules</text><line x1="423.2" y1="60" x2="438.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Median + IQR</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Not the</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">average</text><line x1="567.6" y1="60" x2="582.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Explain gaps</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Growth, risk,</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">returns, debt</text></svg>
<figcaption>Five steps of comparable company analysis. Most mistakes happen at the first and third steps.</figcaption>
</figure>

## Which multiple for which Canadian sector

| Sector (TSX examples of the type) | Primary multiples | Comparison guides |
|:--|:--|:--|
| Banks and lenders | P/TBV with ROTCE, P/B with ROE | [Tangible book vs peers](/investing/valuation/tangible-book-vs-peers-canada-first-comparison/), [P/B vs peers](/investing/valuation/pb-vs-peers-canada-first-comparison/), [valuing banks](/investing/valuation/valuing-canadian-banks-pb-roe/) |
| REITs | P/AFFO, P/FFO, P/NAV | [P/AFFO vs peers](/investing/valuation/price-affo-vs-peers-canada-first-comparison/), [P/FFO vs peers](/investing/valuation/price-ffo-vs-peers-canada-first-comparison/) |
| Gold and base metal miners | P/NAV, EV/EBITDA at a common price deck | [P/NAV vs peers](/investing/valuation/price-nav-vs-peers-canada-first-comparison/) |
| Pipelines, utilities, telecom | EV/EBITDA, dividend yield with coverage, P/FCF | [EV/EBITDA vs peers](/investing/valuation/ev-ebitda-vs-peers-canada-first-comparison/), [dividend yield vs peers](/investing/valuation/dividend-yield-vs-peers-canada-first-comparison/) |
| Rails, industrials, consumer | P/E, forward P/E, EV/EBITDA, EV/FCF | [P/E vs peers](/investing/valuation/pe-vs-peers-canada-first-comparison/), [forward P/E vs peers](/investing/valuation/forward-pe-vs-peers-canada-first-comparison/), [EV/FCF vs peers](/investing/valuation/ev-fcf-vs-peers-canada-first-comparison/) |
| Cyclicals (forestry, chemicals, steel) | Normalized P/E, EV/mid-cycle EBITDA | [Normalized EPS vs peers](/investing/valuation/normalized-eps-vs-peers-canada-first-comparison/) |
| Software and growth | EV/Sales with growth and margin, PEG, P/S | [EV/Sales vs peers](/investing/valuation/ev-sales-vs-peers-canada-first-comparison/), [PEG vs peers](/investing/valuation/peg-vs-peers-canada-first-comparison/), [P/S vs peers](/investing/valuation/ps-vs-peers-canada-first-comparison/) |
| Capital-heavy mature businesses | Price to owner earnings, P/FCF | [Owner earnings vs peers](/investing/valuation/owner-earnings-vs-peers-canada-first-comparison/), [P/FCF vs peers](/investing/valuation/p-fcf-vs-peers-canada-first-comparison/) |
| Any sector, as a yield view | Earnings yield | [Earnings yield vs peers](/investing/valuation/earnings-yield-vs-peers-canada-first-comparison/) |

Use one primary multiple and one or two secondary ones. If they disagree, that disagreement is information: a stock cheap on EV/EBITDA but expensive on P/FCF probably has heavy capex or high interest costs.

## A worked comps table (hypothetical)

A hypothetical industrial company has EBITDA of C$500M, net debt of C$1,500M and 100M diluted shares. At $30.00 a share its market capitalization is C$3,000M and its EV is C$4,500M: **9.0x EV/EBITDA**.

<figure class="diagram">
<svg viewBox="0 0 720 274" role="img" aria-label="Hypothetical industrial peers on EV/EBITDA with the peer median marked" xmlns="http://www.w3.org/2000/svg"><text x="240" y="47" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer A</text><rect x="250" y="30" width="322.5" height="24" rx="4" fill="#0d9488"/><text x="580.5" y="47" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">10.5x</text><text x="240" y="81" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer B</text><rect x="250" y="64" width="245.714" height="24" rx="4" fill="#0d9488"/><text x="503.714" y="81" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">8x</text><text x="240" y="115" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer C</text><rect x="250" y="98" width="368.571" height="24" rx="4" fill="#0d9488"/><text x="626.571" y="115" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">12x</text><text x="240" y="149" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer D</text><rect x="250" y="132" width="291.786" height="24" rx="4" fill="#0d9488"/><text x="549.786" y="149" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">9.5x</text><text x="240" y="183" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer E</text><rect x="250" y="166" width="337.857" height="24" rx="4" fill="#0d9488"/><text x="595.857" y="183" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">11x</text><text x="240" y="217" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Target company</text><rect x="250" y="200" width="276.429" height="24" rx="4" fill="#f59e0b"/><text x="534.429" y="217" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">9x</text><line x1="572.5" y1="22" x2="572.5" y2="234" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5 4"/><text x="572.5" y="252" font-size="11.5" font-weight="700" fill="#b45309" text-anchor="middle" font-family="system-ui, sans-serif">Peer median 10.5x</text></svg>
<figcaption>Hypothetical: five peers range from 8.0x to 12.0x EV/EBITDA with a median of 10.5x. The target trades at 9.0x.</figcaption>
</figure>

| From peer multiple to implied price (hypothetical) | 25th percentile | Median | 75th percentile |
|:--|--:|--:|--:|
| Peer EV/EBITDA | 9.5x | 10.5x | 11.0x |
| Implied EV (× C$500M EBITDA) | C$4,750M | C$5,250M | C$5,500M |
| Less net debt | −C$1,500M | −C$1,500M | −C$1,500M |
| Implied equity value | C$3,250M | C$3,750M | C$4,000M |
| **Implied price per share** | **$32.50** | **$37.50** | **$40.00** |

On the surface the stock is 20% below the median-implied price, or 25% upside. Before believing that, explain the gap.

## Explain the gap before you call it cheap

| Possible reason the target trades below the median | Evidence to check |
|:--|:--|
| Slower growth | Revenue and EBITDA growth vs peers over 3–5 years |
| Lower returns on capital | ROIC vs peers; see [what is ROE?](/investing/glossary/what-is-roe/) |
| Higher leverage | Net debt ÷ EBITDA; covenant headroom |
| Customer or geographic concentration | Segment note; see [customer concentration risk](/investing/analyze/analyze-customer-concentration-risk/) |
| Governance or share structure | Dual-class shares, controlling holder |
| Smaller and less liquid | Market cap and trading volume vs peers |
| Different accounting | IFRS vs US GAAP, leases; see [IFRS quirks in multiples](/investing/valuation/adjust-multiples-ifrs-quirks/) |
| Nothing obvious | Possibly a real opportunity; test it with an intrinsic method |

If the target has more debt and slower growth than the peers, a discount is normal and the "25% upside" disappears.

## Common comps mistakes on the TSX

| Mistake | Fix |
|:--|:--|
| Small peer set dominated by one or two large companies | Use the median, show the range, and add US peers carefully |
| Mixing currencies or fiscal periods | One currency, one TTM or forward period; see [currency and valuation](/investing/valuation/currency-valuation-peers-report-usd/) |
| Using averages pulled up by one outlier | Median and interquartile range |
| Comparing holding companies with operating companies | Value holdcos with [sum-of-the-parts](/investing/valuation/sum-of-the-parts-valuation-conglomerates-holdcos/) |
| Treating the median as fair value | The median is what the market pays, not what a business is worth |
| Picking peers after seeing the answer | Write the peer list down before you calculate anything |

## Where comps sit in a valuation

Comps are relative: they tell you whether a stock is cheap compared with similar stocks, not whether the whole group is cheap. Pair them with an intrinsic method (a DCF, DDM or owner earnings model) and settle on a range; see [relative vs intrinsic valuation](/investing/valuation/relative-vs-intrinsic-valuation/) and [triangulating multiples, DCF and peer checks](/investing/valuation/triangulating-multiples-dcf-peer-checks/).

## Go deeper

For a side-by-side of two names, read [how to compare two TSX peers](/investing/analyze/compare-two-tsx-peers/). For cross-border peers, read [how to compare a TSX stock to its US peer fairly](/investing/valuation/compare-tsx-stock-to-us-peer/). To turn comps output into a decision, see [fair value ranges instead of price targets](/investing/valuation/fair-value-ranges-instead-of-price-targets/).

## Related reading

- [How to use peer tables without cherry-picking](/investing/analyze/use-peer-tables-without-cherry-picking/)
- [How to build a sector research checklist library](/investing/analyze/build-sector-research-checklist-library/)
- [Screener filters that match your process](/investing/brokers-tools/screener-filters-that-match-your-process/)
- [EV/EBITDA for Canadian DIY investors](/investing/valuation/ev-ebitda-for-canadian-diy-investors/)

## Sources

- Damodaran, A., *Investment Valuation* (Wiley), chapters on relative valuation.
- Koller, T., Goedhart, M. and Wessels, D., *Valuation: Measuring and Managing the Value of Companies* (McKinsey & Company, Wiley), chapter on using multiples.
- CFA Institute, *Equity Asset Valuation*, on market-based valuation and comparables.

## Media credits

- Hero: "Stephen Avenue, Calgary 2018 (27593229258).jpg" by Jan Mosimann, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Stephen_Avenue,_Calgary_2018_(27593229258).jpg). Cropped and resized to 1280x720. Real photograph of Stephen Avenue in downtown Calgary, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
