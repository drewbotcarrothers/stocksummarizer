---
title: "How to Read Commodity Price Sensitivity for Resource Issuers"
description: "How to read commodity price sensitivity tables for producers and miners: realized vs benchmark price, royalties, hedges, operating leverage and FCF breakevens. Educational, not advice."
category: "analyze"
role: "Spoke"
pubDate: 2026-11-08
image: "/images/investing/read-commodity-price-sensitivity-resource-issuers.jpg"
imageAlt: "Large electric mining shovel at the bottom of an open-pit copper mine"
imageCredit: "Open-pit copper mine photograph by Jet6581, CC BY-SA 3.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

For producers, miners and many royalty or service companies, the commodity price is the largest input you don't control. Management usually tells you how much it matters. The MD&A often includes a **sensitivity table** showing the effect of a $1 or 10% move in the benchmark on cash flow or earnings. Learning to read that table, and the steps between the benchmark and cash in the bank, is basic literacy for resource issuers.

Educational only, not financial advice. For how these businesses make money, start with the sector explainers for [oil and gas producers](/investing/sectors/how-oil-gas-producers-make-money/), [gold miners](/investing/sectors/how-gold-miners-make-money/) and [base metals](/investing/sectors/how-base-metals-miners-make-money/). This post covers only how to measure the sensitivity.

## Direct answer

Find the sensitivity table in the MD&A and note the per-unit effect for each benchmark (oil, gas, gold, copper and so on) and for FX. Then trace the benchmark to the **realized** price (differentials, by-product credits, currency), check which costs and royalties move with price, and read the hedge book. Finally, estimate the price at which free cash flow stops covering sustaining capex, dividends and debt service. That breakeven, not the spot price, is what to track in your thesis.

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="How a benchmark commodity price flows through to cash flow" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="12.9" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Benchmark price</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">WTI, gold,</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">copper, etc.</text><line x1="134.4" y1="60" x2="151.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Realized price</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Differentials,</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">by-products, FX</text><line x1="278.8" y1="60" x2="295.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="11.4" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Royalties &amp; taxes</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Often scale</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">with price</text><line x1="423.2" y1="60" x2="440.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Costs &amp; capex</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Mostly fixed</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">near term</text><line x1="567.6" y1="60" x2="584.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Hedges</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Floors, collars,</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">swaps</text></svg>
<figcaption>Each step can magnify or dampen the headline price move. Read each one in the MD&amp;A and notes.</figcaption>
</figure>

## Reading a sensitivity table

| Sensitivity line (typical format) | What it tells you | Watch-outs |
|:--|:--|:--|
| ±US$1/bbl WTI → ±$X M cash flow | Earnings power per unit of price | Linear approximation; doesn't hold at extremes |
| ±$0.01 USD/CAD → ±$Y M | FX effect on USD-priced output with CAD costs | Often as large as the commodity line |
| ±$X differential (e.g. heavy oil) | Local pricing vs the benchmark | Can widen when benchmarks are strong |
| ±US$100/oz gold → ±$Z M | Margin leverage for miners | Check whether royalties or streams take a cut |
| Hedged volumes and prices | Share of next 12 months locked in | Hedges cap the upside as well as the downside |

<figure class="diagram">
<svg viewBox="0 0 720 200" role="img" aria-label="Hypothetical: a 10% commodity price drop amplified down the cash-flow waterfall" xmlns="http://www.w3.org/2000/svg"><text x="290" y="32" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Benchmark price</text><rect x="300" y="16" width="70" height="22" rx="3" fill="#94a3b8"/><text x="378" y="32" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">−10%</text><text x="290" y="66" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Realized price (after differential)</text><rect x="300" y="50" width="84" height="22" rx="3" fill="#94a3b8"/><text x="392" y="66" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">−12%</text><text x="290" y="100" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Revenue</text><rect x="300" y="84" width="84" height="22" rx="3" fill="#f59e0b"/><text x="392" y="100" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">−12%</text><text x="290" y="134" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Operating cash flow</text><rect x="300" y="118" width="182" height="22" rx="3" fill="#f59e0b"/><text x="490" y="134" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">−26%</text><text x="290" y="168" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Free cash flow</text><rect x="300" y="152" width="336" height="22" rx="3" fill="#dc2626"/><text x="644" y="168" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">−48%</text></svg>
<figcaption>Hypothetical producer. Fixed costs and sustaining capex make cash flow far more sensitive than revenue.</figcaption>
</figure>

## The amplification chain

Revenue roughly tracks price, but cash flow moves more because many costs are fixed in the short run. That's operating leverage, covered in [operating leverage in a simple business model](/investing/analyze/analyze-operating-leverage/). For miners, compare all-in sustaining cost with the price. See [What is AISC?](/investing/glossary/what-is-aisc/).

| Step | Moves with price? | Note to record |
|:--|:--|:--|
| Benchmark | Yes, fully | Your price deck (low / base / high) |
| Realized price | Mostly | Average differential over several years |
| Royalties / production taxes | Often yes, sometimes stepped | Price- or payout-linked thresholds |
| Operating costs | Mostly fixed | Per-unit cost trend |
| Sustaining capex | Fixed | From [capex plans in the MD&A](/investing/analyze/read-capex-plans-mdna/) |
| Interest and dividends | Fixed | Breakeven price that covers them |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical free cash flow versus fixed commitments across commodity price decks" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0</text><line x1="70" y1="190" x2="710" y2="190" stroke="#e2e8f0"/><text x="62" y="194" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">100</text><line x1="70" y1="130" x2="710" y2="130" stroke="#e2e8f0"/><text x="62" y="134" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">200</text><line x1="70" y1="70" x2="710" y2="70" stroke="#e2e8f0"/><text x="62" y="74" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">300</text><rect x="88" y="226" width="60" height="24" rx="3" fill="#0d9488"/><text x="118.5" y="220" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">40</text><rect x="152" y="142" width="60" height="108" rx="3" fill="#f59e0b"/><text x="181.5" y="136" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">180</text><text x="150" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$60</text><rect x="248" y="166" width="60" height="84" rx="3" fill="#0d9488"/><text x="278.5" y="160" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">140</text><rect x="312" y="142" width="60" height="108" rx="3" fill="#f59e0b"/><text x="341.5" y="136" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">180</text><text x="310" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$70</text><rect x="408" y="106" width="60" height="144" rx="3" fill="#0d9488"/><text x="438.5" y="100" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">240</text><rect x="472" y="142" width="60" height="108" rx="3" fill="#f59e0b"/><text x="501.5" y="136" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">180</text><text x="470" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$80</text><rect x="568" y="46" width="60" height="204" rx="3" fill="#0d9488"/><text x="598.5" y="40" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">340</text><rect x="632" y="142" width="60" height="108" rx="3" fill="#f59e0b"/><text x="661.5" y="136" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">180</text><text x="630" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$90</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Hypothetical FCF ($M)</text><rect x="267" y="10" width="14" height="14" rx="3" fill="#f59e0b"/><text x="287" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Dividend + sustaining needs ($M)</text></svg>
<figcaption>Hypothetical. At $60 the company can&#x27;t fund its commitments from FCF. That breakeven belongs in your notes.</figcaption>
</figure>

## Turning it into notes

- Record the company's own sensitivity lines and the date of the table.
- Build three price decks (low / base / high) with hypothetical FCF for each, and keep them in a separate valuation section, per [separating price from fundamentals](/investing/analyze/separate-price-action-from-fundamentals/).
- Add a kill criterion tied to breakeven, such as "dividend not covered at the low deck for 2+ quarters." Use the [Thesis → Catalyst → Kill card](/investing/frameworks/thesis-catalyst-kill-criteria-card/).
- Stress-test it with a [recession scenario](/investing/analyze/stress-test-stock-thesis-recession-scenario/).

## Related reading

- [How oil & gas producers make money](/investing/sectors/how-oil-gas-producers-make-money/)
- [How gold miners make money](/investing/sectors/how-gold-miners-make-money/)
- [How base metals miners make money](/investing/sectors/how-base-metals-miners-make-money/)
- [How Canadian Natural Resources (CNQ) makes money](/investing/primers/how-canadian-natural-resources-makes-money/)
- [How to handle currency when analyzing CAD vs USD results](/investing/analyze/handle-currency-cad-vs-usd-results/)

## Sources

- NI 51-102 and Form 51-102F1 (MD&A discussion of known trends, risks and sensitivities). Confirm the current text on the CSA website.
- IFRS 7 *Financial Instruments: Disclosures* (market risk sensitivity analysis, including commodity derivatives).
- NI 51-101 (oil and gas disclosure) and NI 43-101 (mineral project disclosure) for reserve and resource context.

## Media credits

- Hero: "Bingham Canyon Open Pit Copper Mine 2012-09-17 21-25-59.jpg" by Jet6581, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bingham_Canyon_Open_Pit_Copper_Mine_2012-09-17_21-25-59.jpg). Cropped and resized to 1280x720. Real photograph, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
