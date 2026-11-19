---
title: "Valuation for Pipelines: Cash Flow Multiples and Distribution Coverage"
description: "How to value TSX pipelines: EV/EBITDA, price to distributable cash flow, dividend coverage, leverage and contract quality checked together. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-19
image: "/images/investing/valuing-pipelines-cash-flow-multiples-coverage.jpg"
imageAlt: "Silhouetted above-ground pipes and valves at an oil pipeline pumping station against an orange sunset sky"
imageCredit: "Keystone pipeline pumping station photograph by shannonpatrick17, CC BY 2.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Pipeline companies are among the most widely held stocks in Canadian income portfolios, and they are hard to value with P/E. Large depreciation charges, deferred taxes and non-cash items make net income a poor guide to the cash available for shareholders. Most investors and the companies themselves use cash flow measures instead: **EV/EBITDA** for the whole business, **price to distributable cash flow (DCF) per share** for shareholders, and **dividend coverage** to judge the payout.

This post shows how those three fit together with hypothetical numbers, with a focus on coverage and contract quality rather than repeating EV/EBITDA basics. It is educational; all figures are hypothetical, and company-defined metrics like DCF differ in practice.

## Direct answer

Value a pipeline on **three numbers checked together**: EV/EBITDA against peers and leverage, P/DCF per share against peers and history, and **coverage = DCF per share ÷ dividend per share**. Then weight those numbers by **cash flow quality**: how much EBITDA is contracted (take-or-pay or cost-of-service) versus exposed to volumes and commodity prices, how long contracts run, and how much debt sits ahead of shareholders. A low multiple with thin coverage and high leverage is not cheap; it is pricing risk.

## From EBITDA to distributable cash flow

Distributable cash flow is a non-GAAP measure, so each company defines it in its own MD&A. A typical bridge looks like this.

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical pipeline company: bridge from EBITDA to distributable cash flow, in Canadian dollar millions" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0</text><line x1="70" y1="195" x2="710" y2="195" stroke="#e2e8f0"/><text x="62" y="199" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">2,000</text><line x1="70" y1="140" x2="710" y2="140" stroke="#e2e8f0"/><text x="62" y="144" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">4,000</text><line x1="70" y1="85" x2="710" y2="85" stroke="#e2e8f0"/><text x="62" y="89" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">6,000</text><line x1="70" y1="30" x2="710" y2="30" stroke="#e2e8f0"/><text x="62" y="34" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">8,000</text><rect x="90.2667" y="85" width="66.1333" height="165" rx="3" fill="#0d9488"/><text x="123.333" y="79" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">6,000</text><text x="123.333" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">EBITDA</text><rect x="196.933" y="85" width="66.1333" height="41.25" rx="3" fill="#0ea5e9"/><text x="230" y="79" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−1,500</text><text x="230" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Interest</text><rect x="303.6" y="126.25" width="66.1333" height="16.5" rx="3" fill="#0ea5e9"/><text x="336.667" y="120.25" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−600</text><text x="336.667" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Maintenance</text><text x="336.667" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">capex</text><rect x="410.267" y="142.75" width="66.1333" height="8.25" rx="3" fill="#0ea5e9"/><text x="443.333" y="136.75" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−300</text><text x="443.333" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Cash</text><text x="443.333" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">taxes</text><rect x="516.933" y="151" width="66.1333" height="8.25" rx="3" fill="#0ea5e9"/><text x="550" y="145" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−300</text><text x="550" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Preferred and</text><text x="550" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">NCI payouts</text><rect x="623.6" y="159.25" width="66.1333" height="90.75" rx="3" fill="#0f172a"/><text x="656.667" y="153.25" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">3,300</text><text x="656.667" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Distributable</text><text x="656.667" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">cash flow</text></svg>
<figcaption>Hypothetical pipeline company: EBITDA C$6.0B less interest, maintenance capex, cash taxes and payouts to preferred shareholders and non-controlling interests leaves C$3.3B of distributable cash flow.</figcaption>
</figure>

| Hypothetical pipeline (C$M unless stated) | Value |
|:--|--:|
| EBITDA | 6,000 |
| Interest expense | −1,500 |
| Maintenance capex | −600 |
| Cash taxes | −300 |
| Preferred dividends and distributions to non-controlling interests | −300 |
| **Distributable cash flow** | **3,300** |
| Shares outstanding (millions) | 1,000 |
| DCF per share | $3.30 |
| Dividend per share | $2.40 |
| **Payout of DCF / coverage** | **72.7% / 1.38x** |

Growth capex is excluded from DCF by design, which is why the measure flatters companies with large build programs. Those projects are usually funded with debt, retained DCF, asset sales or new equity, so check the funding plan before relying on coverage.

## Turning it into multiples

| Hypothetical at a $45 share price | Value |
|:--|--:|
| Market cap | C$45.0B |
| Net debt | C$30.0B |
| Preferred shares + non-controlling interests | C$5.0B |
| **Enterprise value** | **C$80.0B** |
| EV/EBITDA | 13.3x |
| P/DCF ($45 ÷ $3.30) | 13.6x |
| Dividend yield ($2.40 ÷ $45) | 5.3% |
| Net debt / EBITDA | 5.0x |

Note the preferred shares and minority interests in EV. Canadian pipelines often have both, and leaving them out understates EV and makes EV/EBITDA look cheaper. See [EV vs equity value](/investing/valuation/enterprise-value-vs-equity-value-when-each-matters/) for the full bridge.

## Coverage across peers

<figure class="diagram">
<svg viewBox="0 0 720 172" role="img" aria-label="Hypothetical dividend coverage by distributable cash flow for three pipeline companies, against an illustrative 1.2x comfort line" xmlns="http://www.w3.org/2000/svg"><text x="240" y="47" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Pipeline A (95% contracted)</text><rect x="250" y="30" width="296.7" height="24" rx="4" fill="#0d9488"/><text x="554.7" y="47" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">1.38x</text><text x="240" y="81" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Pipeline B (70% contracted)</text><rect x="250" y="64" width="236.5" height="24" rx="4" fill="#f59e0b"/><text x="494.5" y="81" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">1.10x</text><text x="240" y="115" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Pipeline C (85% contracted)</text><rect x="250" y="98" width="354.75" height="24" rx="4" fill="#0ea5e9"/><text x="612.75" y="115" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">1.65x</text><line x1="508" y1="22" x2="508" y2="132" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5 4"/><text x="508" y="150" font-size="11.5" font-weight="700" fill="#b45309" text-anchor="middle" font-family="system-ui, sans-serif">Illustrative comfort line 1.2x</text></svg>
<figcaption>Hypothetical coverage for three pipelines. The 1.2x line is illustrative, not a rule; what is "comfortable" depends on how contracted and how levered the cash flow is.</figcaption>
</figure>

| Hypothetical peer | EV/EBITDA | P/DCF | Coverage | Net debt/EBITDA | Contracted EBITDA | Avg contract life |
|:--|--:|--:|--:|--:|--:|--:|
| Pipeline A | 13.3x | 13.6x | 1.38x | 5.0x | 95% | 12 yrs |
| Pipeline B | 10.5x | 9.8x | 1.10x | 4.6x | 70% | 6 yrs |
| Pipeline C | 11.8x | 11.0x | 1.65x | 3.9x | 85% | 9 yrs |

Pipeline B looks cheapest on every multiple, but it also has the thinnest coverage, the most volume and commodity exposure and the shortest contracts. Pipeline C sits in the middle on price with the strongest coverage and the lowest leverage. The comparison is only useful once you explain those gaps; see [EV/EBITDA vs peers](/investing/valuation/ev-ebitda-vs-peers-canada-first-comparison/) for the method.

## Contract quality matters as much as the multiple

| Revenue type | How it works | Cash flow risk |
|:--|:--|:--|
| Cost-of-service (regulated) | Tolls set to recover costs plus an allowed return on rate base | Low volume risk; regulatory and allowed-return risk |
| Take-or-pay contracts | Shippers pay for reserved capacity whether used or not | Low volume risk; counterparty and renewal risk |
| Fee-based, volume-dependent | Paid per unit moved or processed | Moderate; tied to producer activity |
| Commodity-exposed (marketing, processing spreads) | Margin depends on prices or spreads | High; deserves a lower multiple |

Also check counterparty credit quality (investment-grade shippers vs smaller producers), recontracting dates, and how much of the cash flow comes from minority stakes the company does not control.

## Valuation cross-checks

| Cross-check | What it adds |
|:--|:--|
| [Dividend discount model](/investing/valuation/dividend-discount-models-tsx-income-names/) | Implied return from yield + growth; very sensitive to r − g |
| [Mature dividend payer lens](/investing/valuation/value-mature-dividend-payers-beyond-yield/) | Return, price, safety and runway in one card |
| Sum-of-the-parts | Useful when liquids, gas, utility and power segments have very different risk |
| Interest-rate sensitivity | Bond-proxy pricing; see [how interest rates change what multiples can justify](/investing/valuation/interest-rates-change-justified-multiples/) |

## Go deeper

For the business model, read [how midstream pipelines make money](/investing/sectors/how-midstream-pipelines-make-money/) and [how to analyze pipelines and utilities as bond proxies](/investing/analyze/analyze-pipelines-utilities-bond-proxies/). For the EV/EBITDA mechanics, see [how to calculate EV/EBITDA in CAD from filings](/investing/valuation/calculate-ev-ebitda-in-cad-from-filings/) and [when EV/EBITDA misleads](/investing/valuation/when-ev-ebitda-misleads-tsx/).

## Related reading

- [FCF coverage of dividends](/investing/dividends/fcf-coverage-of-dividends/)
- [How to analyze oil and gas producers vs midstream services](/investing/analyze/analyze-oil-gas-producers-midstream-services/)
- [How to read non-GAAP metrics critically](/investing/analyze/read-non-gaap-metrics-critically/)
- [How to read debt notes and covenant language](/investing/analyze/read-debt-notes-covenant-language/)

## Sources

- Canadian Securities Administrators, National Instrument 52-112 *Non-GAAP and Other Financial Measures Disclosure*.
- Canada Energy Regulator, overview of pipeline tolls and tariffs (public information pages).
- Damodaran, A., *Investment Valuation* (Wiley), chapters on enterprise value multiples.

## Media credits

- Hero: "Trans Canada Keystone Oil Pipeline (8480337530).jpg" by shannonpatrick17, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Trans_Canada_Keystone_Oil_Pipeline_(8480337530).jpg). Cropped and resized to 1280x720. Real photograph of an oil pipeline pumping station on the Keystone system in rural Nebraska, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
