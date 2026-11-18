---
title: "How Dividend Discount Models Fit (and Fail) for TSX Income Names"
description: "How the dividend discount model works for TSX utilities, pipelines and other payers: the Gordon formula, r minus g sensitivity, two-stage DDM and where it fails. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-18
image: "/images/investing/dividend-discount-models-tsx-income-names.jpg"
imageAlt: "Aerial view of a concrete hydroelectric dam and spillway on a river between forested hills in Quebec"
imageCredit: "Manic-3 generating station photograph by Quintin Soloviev, CC BY 4.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

The dividend discount model (DDM) is the oldest valuation formula most investors meet: a share is worth the dividends it will pay, discounted back to today. For a steady TSX utility or pipeline, it is a useful sanity check. For a REIT paying more than it earns, a bank buying back shares, or a resource company with a variable dividend, it can give a confident wrong answer.

This post shows how the model works, where it fits and fails on Canadian income names, and how to use it as a cross-check rather than a price target. The fuller cash flow version is in [how to build a simple DCF without fake precision](/investing/valuation/simple-dcf-without-fake-precision/); dividend yield as a multiple is covered in [what dividend yield means](/investing/valuation/what-dividend-yield-means-canadian-diy/). It is educational; all figures, including required returns, are hypothetical.

## Direct answer

The constant-growth (Gordon) DDM says **value = next year's dividend ÷ (required return − dividend growth)**, or *P = D1 ÷ (r − g)*. It fits companies with **stable payout ratios, predictable growth well below r, and dividends that are the main way cash reaches owners**: regulated utilities, pipelines and some mature consumer and telecom names. It fails when **g is close to r**, when **buybacks** return much of the cash, when the dividend is **not covered** by earnings or free cash flow, or when the dividend is **variable**. Its best use on the TSX is backwards: solve for the growth or return the current price implies.

## The formula on one hypothetical utility

| Input (hypothetical) | Value |
|:--|--:|
| Current annual dividend, D0 | $2.00 |
| Expected dividend growth, g | 4.0% |
| Next year's dividend, D1 = 2.00 × 1.04 | $2.08 |
| Required return, r (illustrative) | 7.5% |
| **Value = 2.08 ÷ (0.075 − 0.040)** | **$59.43** |

Now change only r by half a percentage point either way.

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical utility: dividend discount model value per share at four required returns with growth held at 4%" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$0</text><line x1="70" y1="197.5" x2="710" y2="197.5" stroke="#e2e8f0"/><text x="62" y="201.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$20</text><line x1="70" y1="145" x2="710" y2="145" stroke="#e2e8f0"/><text x="62" y="149" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$40</text><line x1="70" y1="92.5" x2="710" y2="92.5" stroke="#e2e8f0"/><text x="62" y="96.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$60</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$80</text><rect x="120" y="68.0088" width="56" height="181.991" rx="3" fill="#0d9488"/><text x="148" y="62.0088" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$69.33</text><text x="150" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">r = 7.0%</text><rect x="280" y="93.9963" width="56" height="156.004" rx="3" fill="#0d9488"/><text x="308" y="87.9963" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$59.43</text><text x="310" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">r = 7.5%</text><rect x="440" y="113.5" width="56" height="136.5" rx="3" fill="#0d9488"/><text x="468" y="107.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$52.00</text><text x="470" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">r = 8.0%</text><rect x="600" y="128.673" width="56" height="121.327" rx="3" fill="#0d9488"/><text x="628" y="122.673" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$46.22</text><text x="630" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">r = 8.5%</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Gordon value per share (D1 $2.08, g 4%)</text></svg>
<figcaption>Hypothetical: with growth at 4%, moving the required return from 7.0% to 8.5% cuts the value from $69.33 to $46.22, a 33% drop from a 1.5-point change.</figcaption>
</figure>

| Value per share | g = 3.5% | g = 4.0% | g = 4.5% |
|:--|--:|--:|--:|
| r = 7.0% | $59.14 | $69.33 | $83.60 |
| r = 7.5% | $51.75 | $59.43 | $69.67 |
| r = 8.0% | $46.00 | $52.00 | $59.71 |

That grid is the most important output. The model is extremely sensitive to the gap between r and g. A small change in either is enough to move the "value" by 15% to 40%, which is why a single DDM number should never be treated as fair value.

## Use it backwards: what does the price assume?

Rearranging the formula gives **r = D1 ÷ P + g**: expected return equals forward dividend yield plus growth.

| Reverse check (hypothetical) | Value |
|:--|--:|
| Share price | $52.00 |
| Forward yield (2.08 ÷ 52.00) | 4.0% |
| + growth assumption | 4.0% |
| **Implied return** | **8.0%** |
| Growth implied if you require 7.5% ((52.00 × 0.075 − 2.00) ÷ (52.00 + 2.00)) | about 3.5% |

This is often the most honest way to use the model. Instead of asking "what is it worth?", ask "is 3.5% dividend growth realistic for this company, given its rate base growth, payout ratio and balance sheet?"

## Two-stage version for faster near-term growth

Many TSX utilities and pipelines publish dividend growth guidance for the next few years that is faster than anything sustainable forever. A two-stage model handles that.

| Two-stage DDM (hypothetical) | Value |
|:--|--:|
| Years 1–5: dividend grows 6% from $2.00 | PV of dividends $9.59 |
| Year 6 onward: 3% growth, r = 7.5% | Terminal value at year 5 = $61.26 |
| PV of terminal value | $42.67 |
| **Total value** | **$52.26** |

Notice that 82% of the value still comes from the terminal value. Guidance for the next five years matters less than what you assume after it.

## Where it fits and where it fails

<figure class="diagram">
<svg viewBox="0 0 720 190" role="img" aria-label="Where dividend discount models fit and fail for TSX stocks" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#0d9488" stroke-width="2"/><rect x="10" y="10" width="164.5" height="36" rx="12" fill="#0d9488"/><rect x="10" y="34" width="164.5" height="12" fill="#0d9488"/><text x="92.25" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Fits</text><text x="92.25" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Utilities, pipelines,</text><text x="92.25" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">mature payers with</text><text x="92.25" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">steady payout</text><text x="92.25" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">and slow growth</text><rect x="188.5" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#0ea5e9" stroke-width="2"/><rect x="188.5" y="10" width="164.5" height="36" rx="12" fill="#0ea5e9"/><rect x="188.5" y="34" width="164.5" height="12" fill="#0ea5e9"/><text x="270.75" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Needs care</text><text x="270.75" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Banks and insurers:</text><text x="270.75" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">buybacks matter,</text><text x="270.75" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">use total payout</text><text x="270.75" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">not dividends only</text><rect x="367" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/><rect x="367" y="10" width="164.5" height="36" rx="12" fill="#f59e0b"/><rect x="367" y="34" width="164.5" height="12" fill="#f59e0b"/><text x="449.25" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Poor fit</text><text x="449.25" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">REITs on payout</text><text x="449.25" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">above AFFO; resource</text><text x="449.25" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">payers with variable</text><text x="449.25" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">dividends</text><rect x="545.5" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#dc2626" stroke-width="2"/><rect x="545.5" y="10" width="164.5" height="36" rx="12" fill="#dc2626"/><rect x="545.5" y="34" width="164.5" height="12" fill="#dc2626"/><text x="627.75" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Fails</text><text x="627.75" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Non-payers, low</text><text x="627.75" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">payout growers,</text><text x="627.75" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">g near or above r,</text><text x="627.75" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">planned cuts</text></svg>
<figcaption>The model fits steady payers with covered dividends and slow growth. It fails for non-payers, variable payers and anything where g approaches r.</figcaption>
</figure>

| Situation | Problem | Better approach |
|:--|:--|:--|
| Regulated utility, pipeline | Usually a fair fit | Check g against rate base growth and payout |
| Bank or insurer with buybacks | Dividends understate cash returned | Use total payout (dividends + net buybacks) or P/B with ROE |
| REIT paying above AFFO | Current dividend not sustainable | Value on AFFO; see [P/AFFO](/investing/valuation/what-price-affo-means-canadian-diy/) |
| Resource company with base + variable dividend | Dividend follows commodity prices | Mid-cycle cash flow or P/NAV |
| Low payout grower | Most value is in reinvestment | DCF or owner earnings with reinvestment |
| g close to or above r | Formula explodes or turns negative | Two-stage model with a low terminal g |

## Checks before you trust the dividend

| Check | Where | Warning sign |
|:--|:--|:--|
| Payout ratio on earnings | Income statement, EPS | Above about 80% for non-utilities; see [payout ratio](/investing/dividends/payout-ratio-explained-canadian-companies/) |
| Coverage by free cash flow | Cash flow statement | Dividends funded with debt or equity; see [FCF coverage](/investing/dividends/fcf-coverage-of-dividends/) |
| DRIP share and discount | MD&A, dividend policy | Heavy DRIP participation hides a cash shortfall |
| Leverage trend | Debt note | Rising debt while the dividend grows |
| Growth source | Investor presentation, rate base | Growth guidance with no funding plan |

## Canada-specific notes

- Eligible dividends from Canadian corporations get the dividend tax credit in non-registered accounts; that changes your after-tax return, not the company's value. See [eligible vs ordinary dividends](/investing/dividends/eligible-vs-ordinary-dividends/).
- US-listed payers held in a TFSA face withholding tax that reduces your realized yield; see [US dividend withholding tax](/investing/dividends/us-dividend-withholding-tax-tfsa-rrsp-taxable/).
- Rate sensitivity: the same r − g arithmetic is why utility and pipeline prices move when bond yields move.

## Go deeper

To compare yields across a peer group, see [dividend yield vs peers](/investing/valuation/dividend-yield-vs-peers-canada-first-comparison/) and [how to use dividend yield in a simple valuation checklist](/investing/valuation/use-dividend-yield-simple-valuation-checklist/). For a broader view of mature payers, read [how to value mature dividend payers without only chasing yield](/investing/valuation/value-mature-dividend-payers-beyond-yield/).

## Related reading

- [When dividend yield misleads on TSX stocks](/investing/valuation/when-dividend-yield-misleads-tsx/)
- [How to analyze pipelines and utilities as bond proxies](/investing/analyze/analyze-pipelines-utilities-bond-proxies/)
- [Dividend growth vs high yield](/investing/dividends/dividend-growth-vs-high-yield/)
- [Why yield alone is a terrible stock screen](/investing/dividends/why-yield-alone-is-a-terrible-screen/)

## Sources

- Gordon, M. J. (1959), "Dividends, Earnings, and Stock Prices," *Review of Economics and Statistics* 41(2).
- Williams, J. B. (1938), *The Theory of Investment Value*, Harvard University Press.
- Damodaran, A., *Investment Valuation* (Wiley), chapters on dividend discount models.

## Media credits

- Hero: "Manic-3 generating station (Hydro-Québec).jpg" by Quintin Soloviev, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Manic-3_generating_station_(Hydro-Qu%C3%A9bec).jpg). Cropped and resized to 1280x720. Real photograph of the Manic-3 (René-Lévesque) generating station in Quebec, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
