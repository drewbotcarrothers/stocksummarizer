---
title: "When FCF Yield Misleads on TSX Stocks"
description: "How FCF yield misleads on TSX stocks: leverage on the yield on price, debt that reprices, stock-based pay and share drift, the dividend gap and shrinking businesses. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-15
image: "/images/investing/when-fcf-yield-misleads-tsx.jpg"
imageAlt: "A red and white sign reading Danger Thin Ice Keep Off planted on a slushy frozen shoreline"
imageCredit: "Danger thin ice sign photograph by Dano, CC BY 2.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

The cash-flow traps behind any FCF figure (working-capital releases, prepayments, supplier finance, under-investment, generous company definitions, acquisitions, cash-tax timing) are covered in [when P/FCF misleads on TSX stocks](/investing/valuation/when-p-fcf-misleads-tsx/), and the unlevered ones (claims counted twice, tax pools, capitalized interest) in [when EV/FCF misleads](/investing/valuation/when-ev-fcf-misleads-tsx/). They all apply to FCF yield too, and are only summarized here. This post covers the traps that come from the **yield form**: leverage dressing up the yield on price, refinancing that resets it, stock-based pay and share drift, treating the gap over the dividend yield as free money, and high yields on shrinking businesses. It is educational; all figures are hypothetical.

## Direct answer

FCF yield misleads when (1) a high yield on price comes from **debt** rather than a cheap business, (2) cheap debt is about to **reprice**, (3) **SBC and share issuance** are ignored, (4) the gap between FCF yield and dividend yield is treated as spare cash when debt maturities or acquisitions already claim it, (5) a high yield sits on a business whose FCF is **shrinking**, or (6) the FCF itself is flattered by the cash-flow traps in the P/FCF post. Check the yield on EV, use owner-adjusted FCF per share, and ask what growth rate the yield implies.

## Trap 1: leverage dresses up the yield on price

Debt takes interest out of free cash flow but takes even more out of market cap, so the yield on price rises with leverage even when the business is identical.

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical: the same business looks cheaper on FCF yield on price when it carries more debt, while the yield on EV is unchanged" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0%</text><line x1="70" y1="197.5" x2="710" y2="197.5" stroke="#e2e8f0"/><text x="62" y="201.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">2%</text><line x1="70" y1="145" x2="710" y2="145" stroke="#e2e8f0"/><text x="62" y="149" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">4%</text><line x1="70" y1="92.5" x2="710" y2="92.5" stroke="#e2e8f0"/><text x="62" y="96.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">6%</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">8%</text><rect x="170" y="118.75" width="56" height="131.25" rx="3" fill="#0d9488"/><text x="198" y="112.75" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">5.0%</text><rect x="230" y="118.75" width="56" height="131.25" rx="3" fill="#f59e0b"/><text x="258" y="112.75" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">5.0%</text><text x="230" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Company A</text><text x="230" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">no debt</text><rect x="490" y="118.75" width="56" height="131.25" rx="3" fill="#0d9488"/><text x="518" y="112.75" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">5.0%</text><rect x="550" y="84.625" width="56" height="165.375" rx="3" fill="#f59e0b"/><text x="578" y="78.625" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">6.3%</text><text x="550" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Company B</text><text x="550" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">half debt</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Unlevered FCF yield (on EV)</text><rect x="319" y="10" width="14" height="14" rx="3" fill="#f59e0b"/><text x="339" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">FCF yield on price</text></svg>
<figcaption>Hypothetical: two businesses with the same C$1,000M enterprise value and C$50M of unlevered FCF. Company B funds half with debt at 5% (26.5% illustrative tax rate). Its yield on price is 6.3% against Company A's 5.0%, yet both yield 5.0% on EV.</figcaption>
</figure>

The extra 1.3 points is compensation for carrying the debt risk, not a discount. Fix: always show the yield on EV next to the yield on price; see [what EV/FCF means](/investing/valuation/what-ev-fcf-means-canadian-diy/).

## Trap 2: cheap debt that is about to reprice

The yield on price depends on today's interest cost. If debt was issued when rates were lower and matures soon, the yield can fall without the business changing.

| Hypothetical (EV C$1,000M, debt C$500M, equity C$500M) | Before refinancing | After refinancing |
|:--|--:|--:|
| Interest rate on the debt | 3.0% | 6.0% |
| After-tax interest | C$11.0M | C$22.1M |
| Levered FCF (unlevered C$50M less interest) | C$39.0M | C$27.9M |
| **FCF yield on price** | **7.8%** | **5.6%** |

Fix: read the maturity table in the debt note and re-run the yield at a current borrowing cost you estimate yourself; see [how to read debt notes and covenant language](/investing/analyze/read-debt-notes-covenant-language/).

## Trap 3: stock-based pay and share drift

FCF adds back stock-based compensation, and total FCF can grow while FCF per share does not. A reported yield of 6.25% can be about 5.4% for an owner once SBC is subtracted and the latest diluted count is used, as worked through in [how to calculate FCF yield in CAD from filings](/investing/valuation/calculate-fcf-yield-in-cad-from-filings/).

| Signal | What it means |
|:--|:--|
| SBC above about 10% of FCF | Owner-adjusted yield is materially lower |
| Diluted shares rising every year | Per-share FCF lags total FCF |
| Buybacks roughly equal to SBC | The "buyback yield" is really paying staff |

## Trap 4: the gap over the dividend is not free

A 6% FCF yield and a 2% dividend yield look like 4 points of spare cash. Before counting it as buyback capacity or a cushion:

| Claim on the gap | Where to find it |
|:--|:--|
| Debt maturities without committed refinancing | Debt note, liquidity section of the MD&A |
| Announced acquisitions or growth capex above maintenance | MD&A outlook; see [how to read capex plans in an MD&A](/investing/analyze/read-capex-plans-mdna/) |
| Lease and pension commitments | Notes; see [how to evaluate pension and other long-term liabilities](/investing/analyze/evaluate-pension-long-term-liabilities/) |
| Preferred dividends and NCI distributions | Should already be in FCF to common; check |

The dividend side of the comparison is in [FCF coverage of dividends](/investing/dividends/fcf-coverage-of-dividends/).

## Trap 5: high yield on a shrinking business

A yield is a return only if FCF holds. Roughly, expected return ≈ next year's FCF yield + FCF growth. If FCF is shrinking, the decline comes off the top.

| Hypothetical | Stable business | Shrinking business |
|:--|--:|--:|
| FCF yield today | 6.0% | 10.0% |
| Long-run FCF growth | +3% | −5% |
| Rough expected return (yield × (1 + g) + g) | 9.2% | 4.5% |

The 10% yield delivers less than the 6% one. Declining print media, legacy telecom lines or depleting resource assets without replacement can look like this.

<figure class="diagram">
<svg viewBox="0 0 720 190" role="img" aria-label="Four ways FCF yield misleads on TSX stocks and the fix for each" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#0d9488" stroke-width="2"/><rect x="10" y="10" width="164.5" height="36" rx="12" fill="#0d9488"/><rect x="10" y="34" width="164.5" height="12" fill="#0d9488"/><text x="92.25" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Leverage</text><text x="92.25" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Debt lifts the</text><text x="92.25" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">yield on price</text><text x="92.25" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Fix: check the</text><text x="92.25" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">yield on EV</text><rect x="188.5" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#0ea5e9" stroke-width="2"/><rect x="188.5" y="10" width="164.5" height="36" rx="12" fill="#0ea5e9"/><rect x="188.5" y="34" width="164.5" height="12" fill="#0ea5e9"/><text x="270.75" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">SBC</text><text x="270.75" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Share-based pay</text><text x="270.75" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">added back</text><text x="270.75" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Fix: subtract</text><text x="270.75" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">it per share</text><rect x="367" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/><rect x="367" y="10" width="164.5" height="36" rx="12" fill="#f59e0b"/><rect x="367" y="34" width="164.5" height="12" fill="#f59e0b"/><text x="449.25" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Working capital</text><text x="449.25" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">One-year cash</text><text x="449.25" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">release</text><text x="449.25" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Fix: three-year</text><text x="449.25" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">average</text><rect x="545.5" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#dc2626" stroke-width="2"/><rect x="545.5" y="10" width="164.5" height="36" rx="12" fill="#dc2626"/><rect x="545.5" y="34" width="164.5" height="12" fill="#dc2626"/><text x="627.75" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Capex gap</text><text x="627.75" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Capex below</text><text x="627.75" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">depreciation</text><text x="627.75" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Fix: normalize</text><text x="627.75" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">maintenance capex</text></svg>
<figcaption>Four ways FCF yield misleads on TSX stocks, and the fix for each. The FCF-quality traps from the P/FCF post sit underneath all of them.</figcaption>
</figure>

## Trap 6: FCF quality (summary)

| Trap | Covered in |
|:--|:--|
| Working-capital release, prepayments, supplier finance | [When P/FCF misleads](/investing/valuation/when-p-fcf-misleads-tsx/) |
| Capex below depreciation (under-investment) | [When P/FCF misleads](/investing/valuation/when-p-fcf-misleads-tsx/) |
| Company-defined FCF that excludes real costs | [How to read non-GAAP metrics critically](/investing/analyze/read-non-gaap-metrics-critically/) |
| Tax pools running out, capitalized interest | [When EV/FCF misleads](/investing/valuation/when-ev-fcf-misleads-tsx/) |

## 60-second check

| Question | If yes |
|:--|:--|
| Is the yield on price well above the yield on EV? | Leverage is part of the yield |
| Does debt mature in the next two or three years at a low coupon? | Re-run the yield at a higher rate |
| Is SBC large, or is the share count rising? | Use owner-adjusted FCF per share |
| Is the dividend-yield gap already committed? | Do not count it as spare cash |
| Is FCF shrinking? | Subtract the decline from the yield |
| Was this year's FCF helped by working capital? | Use a three-year average |

## Go deeper

The concept, including the dividend comparison, is in [what FCF yield means for Canadian DIY investors](/investing/valuation/what-fcf-yield-means-canadian-diy/). For peer comparisons, use [P/FCF vs peers](/investing/valuation/p-fcf-vs-peers-canada-first-comparison/) (yield on price) and [EV/FCF vs peers](/investing/valuation/ev-fcf-vs-peers-canada-first-comparison/) (yield on EV).

## Related reading

- [How to analyze free cash flow for stock decisions](/investing/analyze/free-cash-flow-analysis/)
- [How to analyze interest coverage for levered TSX names](/investing/analyze/analyze-interest-coverage-levered-tsx/)
- [How to spot dilution risk in Canadian equity issuers](/investing/analyze/spot-dilution-risk-canadian-issuers/)
- [How to avoid dividend traps on the TSX](/investing/dividends/avoid-dividend-traps-tsx/)

## Sources

- IAS 7 *Statement of Cash Flows* (including the 2023 supplier finance disclosure amendments); IFRS 2 *Share-based Payment*.
- IFRS 7 *Financial Instruments: Disclosures* (maturity analysis of financial liabilities); IAS 33 *Earnings per Share*.
- Gordon, M. J. (1959). "Dividends, Earnings, and Stock Prices." *Review of Economics and Statistics* (yield plus growth).

## Media credits

- Hero: "Danger thin ice keep off (287326530).jpg" by Dano from Winnipeg, Canada, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Danger_thin_ice_keep_off_(287326530).jpg). Cropped and resized to 1280x720. Real photograph of a thin-ice warning sign on a frozen shoreline, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
