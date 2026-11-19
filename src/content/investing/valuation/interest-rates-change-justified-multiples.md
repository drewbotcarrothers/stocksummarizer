---
title: "How Interest Rates Change What Multiples Can Justify"
description: "How bond yields change the P/E a TSX stock can justify: payout ÷ (r − g), why bond proxies and long-duration growers react most, and pass-through. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-19
image: "/images/investing/interest-rates-change-justified-multiples.jpg"
imageAlt: "The twin gold-coloured Bankers Hall office towers in downtown Calgary against a blue sky with clouds"
imageCredit: "Bankers Hall towers photograph by Bernard Spragg, CC0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

When Government of Canada bond yields move, the whole TSX re-prices, and not evenly. Utilities, pipelines, REITs and long-duration growth stocks usually move the most. The reason is arithmetic: the required return you discount future cash flows at is built on top of the risk-free rate, and the multiple a company can justify depends on the gap between that required return and its growth.

This post shows that arithmetic with hypothetical numbers, explains why different kinds of companies have different rate sensitivity, and covers the two nuances that matter most in Canada: pass-through to growth and real versus nominal rates. It is educational; all figures are hypothetical.

## Direct answer

A justified forward P/E can be written as **payout ratio ÷ (r − g)**, where **r = risk-free rate + equity risk premium**. When the risk-free rate rises and nothing else changes, r rises and the justified multiple falls. The effect is largest when **r − g is small** (slow-and-steady payers priced as bond proxies) or when **most of the value sits far in the future** (long-duration growers). It is smaller when higher rates also lift the company's growth or returns, as with some regulated businesses whose allowed returns are periodically reset.

## The formula with one hypothetical company

This is the same constant-growth arithmetic as the [dividend discount model](/investing/valuation/dividend-discount-models-tsx-income-names/), expressed as a multiple of next year's earnings.

| Input (hypothetical) | Value |
|:--|--:|
| Payout ratio | 60% |
| Long-run growth, g | 3.0% |
| Equity risk premium (illustrative) | 4.5% |

| Risk-free yield | Required return r | r − g | Justified forward P/E (0.60 ÷ (r − g)) |
|:--|--:|--:|--:|
| 2.0% | 6.5% | 3.5% | 17.1x |
| 3.0% | 7.5% | 4.5% | 13.3x |
| 4.0% | 8.5% | 5.5% | 10.9x |
| 5.0% | 9.5% | 6.5% | 9.2x |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical justified forward P/E for a company with a 60% payout and 3% growth as the risk-free yield rises from 2% to 5%" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0x</text><line x1="70" y1="197.5" x2="710" y2="197.5" stroke="#e2e8f0"/><text x="62" y="201.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">5x</text><line x1="70" y1="145" x2="710" y2="145" stroke="#e2e8f0"/><text x="62" y="149" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">10x</text><line x1="70" y1="92.5" x2="710" y2="92.5" stroke="#e2e8f0"/><text x="62" y="96.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">15x</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">20x</text><rect x="120" y="70.45" width="56" height="179.55" rx="3" fill="#0d9488"/><text x="148" y="64.45" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">17.1x</text><text x="150" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Bond yield 2%</text><text x="150" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">(r = 6.5%)</text><rect x="280" y="110.35" width="56" height="139.65" rx="3" fill="#0d9488"/><text x="308" y="104.35" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">13.3x</text><text x="310" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Bond yield 3%</text><text x="310" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">(r = 7.5%)</text><rect x="440" y="135.55" width="56" height="114.45" rx="3" fill="#0d9488"/><text x="468" y="129.55" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">10.9x</text><text x="470" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Bond yield 4%</text><text x="470" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">(r = 8.5%)</text><rect x="600" y="153.4" width="56" height="96.6" rx="3" fill="#0d9488"/><text x="628" y="147.4" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">9.2x</text><text x="630" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Bond yield 5%</text><text x="630" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">(r = 9.5%)</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Justified forward P/E</text></svg>
<figcaption>Hypothetical: the same business with the same growth justifies 17.1x when the risk-free yield is 2% and 9.2x when it is 5%. Nothing about the company changed.</figcaption>
</figure>

The first percentage point does the most damage (17.1x to 13.3x, about −22%) because r − g is smallest there. That is the core reason "bond proxy" stocks did so well in a low-rate decade and struggled when yields reset.

## The same view as an earnings yield

Flip the P/E and you get the [earnings yield](/investing/valuation/what-earnings-yield-means-canadian-diy/). Comparing it to the bond yield is a quick way to see what the market is pricing.

| Hypothetical stock | P/E | Earnings yield | 10-year bond yield (illustrative) | Spread |
|:--|--:|--:|--:|--:|
| Low-rate era | 18.0x | 5.6% | 2.0% | 3.6 pts |
| Higher-rate era, same P/E | 18.0x | 5.6% | 4.0% | 1.6 pts |
| Higher-rate era, re-rated | 13.0x | 7.7% | 4.0% | 3.7 pts |

If the spread you demand over bonds stays about the same, a higher bond yield needs a lower P/E. If the P/E has not moved, you are accepting a thinner cushion, which only makes sense if growth expectations have risen.

## Why some stocks are more rate-sensitive

<figure class="diagram">
<svg viewBox="0 0 720 186" role="img" aria-label="Hypothetical percentage drop in justified P/E when the required return rises by one percentage point, by company type" xmlns="http://www.w3.org/2000/svg"><text x="240" y="47" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Long-duration grower</text><rect x="250" y="30" width="351.371" height="24" rx="4" fill="#dc2626"/><text x="609.371" y="47" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">−28.6%</text><text x="240" y="81" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Regulated-style payer</text><rect x="250" y="64" width="223.6" height="24" rx="4" fill="#f59e0b"/><text x="481.6" y="81" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">−18.2%</text><text x="240" y="115" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Mature bank-style payer</text><rect x="250" y="98" width="205.171" height="24" rx="4" fill="#0ea5e9"/><text x="463.171" y="115" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">−16.7%</text><text x="240" y="149" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Low-multiple cyclical</text><rect x="250" y="132" width="122.857" height="24" rx="4" fill="#0d9488"/><text x="380.857" y="149" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">−10%</text></svg>
<figcaption>Hypothetical drop in justified P/E when r rises one point: long-duration grower (30% payout, g 6%, r 8.5% to 9.5%), regulated-style payer (60%, g 3%, r 7.5% to 8.5%), mature bank-style payer (50%, g 4%, r 9% to 10%), low-multiple cyclical (60%, g 1%, r 10% to 11%).</figcaption>
</figure>

| Company type (hypothetical) | Starting P/E | P/E after +1 pt in r | Change |
|:--|--:|--:|--:|
| Long-duration grower | 12.0x | 8.6x | −28.6% |
| Regulated-style payer | 13.3x | 10.9x | −18.2% |
| Mature bank-style payer | 10.0x | 8.3x | −16.7% |
| Low-multiple cyclical | 6.7x | 6.0x | −10.0% |

The pattern: the closer g is to r, the more a one-point move in r matters. Growers have high g; bond proxies have low r. Both end up with a small gap and high sensitivity. Cyclicals already priced at a big discount have a wide gap and lower sensitivity, though their earnings carry other risks.

## Two Canadian nuances

| Nuance | What it means | How to apply it |
|:--|:--|:--|
| Pass-through to growth or returns | For some regulated utilities and pipelines, allowed returns on equity are set or reset with reference to interest rates and inflation over time | Do not hold g fixed when r rises; ask whether allowed ROE or contracted tolls adjust, and with what lag |
| Real vs nominal rates | If yields rise because inflation expectations rose, nominal growth may rise too | Keep r and g in the same terms (both nominal or both real) |
| Balance sheet | Higher rates raise interest cost on floating or refinanced debt | Check debt maturities and fixed vs floating mix in the debt note |
| Currency | US-dollar reporters are discounted with US rates in mind | See [currency and valuation](/investing/valuation/currency-valuation-peers-report-usd/) |

Pass-through is rarely complete or immediate. Regulatory decisions lag, contracts have fixed escalators, and refinancing at higher rates can squeeze cash flow in the meantime. The point is to think about it rather than assume g never moves.

## A quick rate check before you buy a "cheap" payer

| Question | Where to look | Warning sign |
|:--|:--|:--|
| What r − g does today's price imply? | Reverse the formula: r = payout ÷ forward P/E + g | Implied r barely above the bond yield |
| How much debt reprices in the next three years? | Debt note maturity table | Large maturities at much lower coupons |
| Does the business pass inflation or rates through? | MD&A, rate case filings, contract descriptions | Fixed tolls with rising costs |
| Is the dividend covered after higher interest? | [FCF coverage of dividends](/investing/dividends/fcf-coverage-of-dividends/) | Coverage relies on new debt |

## Go deeper

For a hands-on version focused on utilities and pipelines, read [how to analyze pipelines and utilities as bond proxies](/investing/analyze/analyze-pipelines-utilities-bond-proxies/). To compare earnings yields across a peer group, see [earnings yield vs peers](/investing/valuation/earnings-yield-vs-peers-canada-first-comparison/) and [how to use earnings yield in a simple valuation checklist](/investing/valuation/use-earnings-yield-simple-valuation-checklist/).

## Related reading

- [When earnings yield misleads on TSX stocks](/investing/valuation/when-earnings-yield-misleads-tsx/)
- [Mean reversion myths in valuation multiples](/investing/valuation/mean-reversion-myths-valuation-multiples/)
- [Valuation for pipelines: cash flow multiples and distribution coverage](/investing/valuation/valuing-pipelines-cash-flow-multiples-coverage/)
- [How utilities make money](/investing/sectors/how-utilities-make-money/)

## Sources

- Gordon, M. J. (1959), "Dividends, Earnings, and Stock Prices," *Review of Economics and Statistics* 41(2).
- Damodaran, A., *Investment Valuation* (Wiley), chapters on the risk-free rate, equity risk premiums and relative valuation.
- Bank of Canada, Government of Canada benchmark bond yields (published data series).

## Media credits

- Hero: "Bankers Hall Towers, Calgary, Canada; 2012.jpg" by Bernard Spragg. NZ, [CC0](https://creativecommons.org/publicdomain/zero/1.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bankers_Hall_Towers,_Calgary,_Canada;_2012.jpg). Cropped and resized to 1280x720. Real photograph of the Bankers Hall towers in downtown Calgary, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
