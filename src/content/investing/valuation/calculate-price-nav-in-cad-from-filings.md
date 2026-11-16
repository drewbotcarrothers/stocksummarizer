---
title: "How to Calculate Price/NAV in CAD from Filings"
description: "A price-to-NAV worksheet for TSX miners: NI 43-101 mine values re-based to your deck, risked projects, closure, hedges, streams, G&A, CAD and diluted shares. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-16
image: "/images/investing/calculate-price-nav-in-cad-from-filings.jpg"
imageAlt: "Aerial view of the Beacon gold mill and mine headframe surrounded by boreal forest near Val-d'Or, Quebec"
imageCredit: "Beacon gold mill and mine photograph by Quintin Soloviev, CC BY 4.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

[What price/NAV means](/investing/valuation/what-price-nav-means-canadian-diy/) explained the idea: compare the share price with the value of a company's assets, valued one by one, less everything that has a claim on them. This post is the worksheet. It shows where each input lives in Canadian filings, how to re-base a technical report to your own assumptions, which claims people forget, and how to get to a per-share figure in Canadian dollars.

The example is a hypothetical gold producer that reports in US dollars, which is common for TSX-listed miners. The same steps work for oil and gas producers (using NI 51-101 reserves reports) and, with a cap-rate build instead of mine models, for REITs, covered in [valuation for REITs: NAV, FFO, AFFO explained](/investing/valuation/valuing-reits-nav-ffo-affo/). It is educational; all figures are hypothetical.

## Direct answer

Build NAV in five steps: (1) value each producing mine from its **NI 43-101 technical report** economics, re-based to **your** price deck and discount rate; (2) add development projects at a **risked** value, exploration, and cash; (3) subtract debt, the **reclamation provision**, out-of-the-money **hedges**, the cost of any **stream or royalty sold**, and the present value of **corporate G&A**; (4) convert to CAD at a stated exchange rate; (5) divide by **diluted** shares and compare with the share price. Write every assumption beside the number, because P/NAV is only meaningful at stated assumptions.

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Five-step flow for calculating price to net asset value in Canadian dollars from filings" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Mine NPVs</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Technical report,</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">your deck &amp; rate</text><line x1="134.4" y1="60" x2="149.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Other assets</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Projects risked,</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">exploration, cash</text><line x1="278.8" y1="60" x2="293.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Claims</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Debt, reclamation,</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">hedges, streams</text><line x1="423.2" y1="60" x2="438.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Corporate</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">G&amp;A over</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">mine life</text><line x1="567.6" y1="60" x2="582.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Per share</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">CAD, diluted</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">÷ price</text></svg>
<figcaption>The worksheet in five steps. The order matters: mine values first, then everything else that has a claim on them, then per share.</figcaption>
</figure>

## Where each input lives

| Input | Where to find it | What to check |
|:--|:--|:--|
| Mine-level NPV, mine life, costs | NI 43-101 technical report (economic analysis section) on SEDAR+ | Report date, metal price and discount rate used, after-tax or pre-tax |
| Sensitivity to metal price | Same report (sensitivity tables) | Lets you re-base to your deck without rebuilding the model |
| Reserves and resources | Reserve and resource statement (AIF and technical report) | NAV usually uses reserves for producing mines; resources only if you risk them |
| Cash and debt | Latest balance sheet and debt note | Convertibles, leases, drawn credit facilities |
| Reclamation (closure) provision | Provisions note (IAS 37) | Discounted amount; whether the mine NPV already includes closure costs |
| Hedges | Derivatives note (IFRS 9, IFRS 7) | Fair value of gold, currency and fuel hedges |
| Streams and royalties sold | Deferred revenue or stream note (IFRS 15), MD&A | Ounces owed below spot price over the mine life |
| Diluted shares | Share capital note, options and warrants table (IAS 33), MD&A outstanding share data | In-the-money options and warrants, convertibles |

How to find these documents is covered in [how to use SEDAR+ for stock research](/investing/analyze/use-sedar-plus-for-stock-research/); for reserve statements and early-stage filings, see [red flags in junior mining and energy filings](/investing/analyze/spot-red-flags-junior-mining-energy-filings/).

## Step 1: re-base each mine to your assumptions

Technical reports state the metal price, exchange rate and discount rate they used. Those may be years old and rarely match your view. The report's sensitivity table lets you re-base.

| Hypothetical Mine A | Technical report | Your assumptions |
|:--|:--|:--|
| Gold price | Report deck (stated in the report) | Your long-term deck, lower than the report's |
| Discount rate | 5% | 5% (same, for comparability) |
| After-tax NPV | US$1,400M | US$1,200M (read from the sensitivity table at your price) |
| Report date | Three years ago | Check costs and capex against the latest MD&A guidance |

If costs have risen since the report, lower the NPV again. A rough way: estimate the change in annual cash flow from the cost increase and discount it over the remaining mine life. When the report is stale, note it as a risk rather than pretending the number is precise. [How to read commodity price sensitivity for resource issuers](/investing/analyze/read-commodity-price-sensitivity-resource-issuers/) explains how price changes flow through cash flow.

## Step 2 and 3: the full worksheet (hypothetical, US$ millions)

| Line | Basis | US$M |
|:--|:--|--:|
| Mine A (producing) | After-tax NPV at 5%, your deck | 1,200 |
| Mine B (producing) | Same | 450 |
| Project C (development) | NPV of US$400M risked at 50% for permitting and financing | 200 |
| Exploration | In-situ value for resources outside the mine plans | 50 |
| Cash | Balance sheet | 220 |
| Debt (incl. drawn facility and leases) | Balance sheet | −450 |
| Reclamation provision | IAS 37 provision not already in the mine NPVs | −80 |
| Hedge book | Fair value of out-of-the-money hedges | −20 |
| Stream sold on Mine A | PV of ounces delivered below spot (if the mine NPV is before the stream) | −150 |
| Corporate G&A | Head-office costs over the mine lives, discounted | −170 |
| **NAV** | | **1,250** |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical net asset value worksheet for a gold producer in US dollar millions, from mine values to NAV" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0</text><line x1="70" y1="195" x2="710" y2="195" stroke="#e2e8f0"/><text x="62" y="199" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">600</text><line x1="70" y1="140" x2="710" y2="140" stroke="#e2e8f0"/><text x="62" y="144" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">1,200</text><line x1="70" y1="85" x2="710" y2="85" stroke="#e2e8f0"/><text x="62" y="89" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">1,800</text><line x1="70" y1="30" x2="710" y2="30" stroke="#e2e8f0"/><text x="62" y="34" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">2,400</text><rect x="81.0545" y="140" width="36.0727" height="110" rx="3" fill="#0d9488"/><text x="99.0909" y="134" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">1,200</text><text x="99.0909" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Mine A</text><rect x="139.236" y="98.75" width="36.0727" height="41.25" rx="3" fill="#f59e0b"/><text x="157.273" y="92.75" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+450</text><text x="157.273" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Mine B</text><rect x="197.418" y="80.4167" width="36.0727" height="18.3333" rx="3" fill="#f59e0b"/><text x="215.455" y="74.4167" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+200</text><text x="215.455" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Project C</text><text x="215.455" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">(risked)</text><rect x="255.6" y="75.8333" width="36.0727" height="4.58333" rx="3" fill="#f59e0b"/><text x="273.636" y="69.8333" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+50</text><text x="273.636" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Explor-</text><text x="273.636" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">ation</text><rect x="313.782" y="55.6667" width="36.0727" height="20.1667" rx="3" fill="#f59e0b"/><text x="331.818" y="49.6667" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+220</text><text x="331.818" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Cash</text><rect x="371.964" y="55.6667" width="36.0727" height="41.25" rx="3" fill="#0ea5e9"/><text x="390" y="49.6667" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−450</text><text x="390" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Debt</text><rect x="430.145" y="96.9167" width="36.0727" height="7.33333" rx="3" fill="#0ea5e9"/><text x="448.182" y="90.9167" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−80</text><text x="448.182" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Reclam-</text><text x="448.182" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">ation</text><rect x="488.327" y="104.25" width="36.0727" height="1.83333" rx="3" fill="#0ea5e9"/><text x="506.364" y="98.25" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−20</text><text x="506.364" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Hedges</text><rect x="546.509" y="106.083" width="36.0727" height="13.75" rx="3" fill="#0ea5e9"/><text x="564.545" y="100.083" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−150</text><text x="564.545" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Stream</text><text x="564.545" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">sold</text><rect x="604.691" y="119.833" width="36.0727" height="15.5833" rx="3" fill="#0ea5e9"/><text x="622.727" y="113.833" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−170</text><text x="622.727" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">G&amp;A</text><rect x="662.873" y="135.417" width="36.0727" height="114.583" rx="3" fill="#0f172a"/><text x="680.909" y="129.417" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">1,250</text><text x="680.909" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">NAV</text></svg>
<figcaption>Hypothetical, US$ millions: two producing mines, a risked project, exploration and cash give US$2,120M; debt, reclamation, hedges, the stream and corporate costs bring NAV to US$1,250M.</figcaption>
</figure>

Two double-counting checks: if the technical report already deducts closure costs, do not subtract the full provision again; if the mine NPV already reflects the stream deliveries, do not subtract the stream again. Read the report's assumptions page before filling in the claims.

## Step 4 and 5: CAD and per share

| Step | Hypothetical |
|:--|--:|
| NAV | US$1,250M |
| Exchange rate (illustrative, use the Bank of Canada rate for your date) | 1.40 |
| NAV in CAD | C$1,750M |
| Basic shares | 136M |
| In-the-money options and warrants (treasury method) | +4M |
| Diluted shares | 140M |
| **NAV per share** | **C$12.50** |
| TSX share price | C$10.00 |
| **P/NAV** | **0.80x** |

Use the share price and the exchange rate from the same date. Out-of-the-money convertibles stay in debt; if they are in the money, count the shares and remove the debt, not both. [How to read cap tables and fully diluted share counts](/investing/analyze/read-cap-tables-fully-diluted-share-counts/) covers the treasury method in more detail.

## Variants for other sectors

| Sector | NAV source | Key adjustments |
|:--|:--|:--|
| Oil and gas producers | NI 51-101 reserves report (Form 51-101F1 in the AIF): NPV of proved plus probable reserves at the evaluator's forecast prices | Before-tax vs after-tax values, abandonment and reclamation costs, your own price forecast, net debt |
| REITs | Fair value of investment properties (IAS 40) or your own NOI ÷ cap rate | Debt, development at cost vs value, exchangeable LP units in the unit count |
| Holding companies | Listed stakes at market, private stakes at your estimate | Holdco debt, PV of holdco costs, tax on unrealized gains |

## Common mistakes

| Mistake | Fix |
|:--|:--|
| Using the technical report's price deck as if it were yours | Re-base from the sensitivity table |
| Mixing pre-tax and after-tax mine values | Use after-tax for every mine |
| Forgetting streams, hedges or closure costs | Read the notes, not just the balance sheet |
| Using basic shares | Use diluted shares on the latest count |
| Comparing your NAV with an analyst's NAV built on another deck | Compare only like with like |

## Go deeper

The traps that make a correctly calculated P/NAV misleading (stale reports, developer dilution, holding-company discounts) are in [when price/NAV misleads on TSX stocks](/investing/valuation/when-price-nav-misleads-tsx/). For how miners are compared beyond NAV, see [how to analyze gold miners without only watching the spot price](/investing/analyze/analyze-gold-miners-beyond-spot-price/).

## Related reading

- [How gold miners make money](/investing/sectors/how-gold-miners-make-money/)
- [What is AISC?](/investing/glossary/what-is-aisc/)
- [How to build a simple DCF without fake precision](/investing/valuation/simple-dcf-without-fake-precision/)
- [How to handle currency when analyzing CAD vs USD results](/investing/analyze/handle-currency-cad-vs-usd-results/)

## Sources

- National Instrument 43-101 *Standards of Disclosure for Mineral Projects* and Form 43-101F1 (technical report economic analysis).
- National Instrument 51-101 *Standards of Disclosure for Oil and Gas Activities* and Form 51-101F1 (reserves data).
- IAS 37 *Provisions, Contingent Liabilities and Contingent Assets*; IFRS 9 *Financial Instruments* and IFRS 7 *Financial Instruments: Disclosures*; IFRS 15 *Revenue from Contracts with Customers* (streams); IAS 33 *Earnings per Share*; IAS 40 *Investment Property*.
- Bank of Canada, daily exchange rates.

## Media credits

- Hero: "Beacon gold mill and mine (Val-d’Or).jpg" by Quintin Soloviev, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Beacon_gold_mill_and_mine_(Val-d%E2%80%99Or).jpg). Cropped and resized to 1280x720. Real photograph of the Beacon gold mill and mine near Val-d'Or, Quebec, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
