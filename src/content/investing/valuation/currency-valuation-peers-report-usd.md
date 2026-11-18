---
title: "How Currency Affects Valuation When Peers Report in USD"
description: "How the CAD/USD exchange rate affects valuation of TSX stocks that report in US dollars: one currency per ratio, which rate, FX sensitivity and constant currency. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-18
image: "/images/investing/currency-valuation-peers-report-usd.jpg"
imageAlt: "Container cranes and ships at the Port of Vancouver seen across the blue water of Burrard Inlet"
imageCredit: "Vancouver container port photograph by seriouslycr8ive, CC0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

A large share of the TSX reports in US dollars: many gold and base metal miners, a number of energy producers, and some industrials, technology and financial companies. Their shares trade in Canadian dollars, their US peers trade in US dollars, and their earnings depend on an exchange rate that moves every day. Currency touches valuation in more places than the obvious one.

This post goes beyond the basic "convert before you compare" rule (step 1 of [how to compare a TSX stock to its US peer fairly](/investing/valuation/compare-tsx-stock-to-us-peer/)) and covers which rate to use, how exchange rates change earnings and growth, and how to keep the discount rate consistent. Reading the currency disclosures in results is covered in [how to handle CAD vs USD results](/investing/analyze/handle-currency-cad-vs-usd-results/). It is educational; all figures and exchange rates are hypothetical.

## Direct answer

(1) **Put price and per-share results in the same currency** before computing any multiple. (2) Use the **right rate for the right line**: period-average rates for income statement figures, the closing rate for balance sheet items such as net debt, and today's rate for today's price. (3) Know whether a company is **naturally hedged** (revenue and costs in the same currency) or **exposed** (US$ revenue, C$ costs), because exposed companies' earnings and fair value move with the rate. (4) Use **constant-currency** growth when you judge the business. (5) Discount **US$ cash flows at a US$ rate** and C$ cash flows at a C$ rate.

## Mistake 1: mixing currencies in one ratio

| Hypothetical miner | Value |
|:--|--:|
| TSX share price | C$40.00 |
| Diluted EPS, as reported | US$2.00 |
| USD/CAD (C$ per US$1, illustrative) | 1.40 |
| P/E mixing currencies (40.00 ÷ 2.00) | 20.0x |
| **P/E in one currency (40.00 ÷ 2.80, or 28.57 ÷ 2.00)** | **14.3x** |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical: dividing a Canadian dollar share price by US dollar earnings overstates the price to earnings ratio" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0x</text><line x1="70" y1="208" x2="710" y2="208" stroke="#e2e8f0"/><text x="62" y="212" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">5x</text><line x1="70" y1="166" x2="710" y2="166" stroke="#e2e8f0"/><text x="62" y="170" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">10x</text><line x1="70" y1="124" x2="710" y2="124" stroke="#e2e8f0"/><text x="62" y="128" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">15x</text><line x1="70" y1="82" x2="710" y2="82" stroke="#e2e8f0"/><text x="62" y="86" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">20x</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">25x</text><rect x="146.667" y="82" width="56" height="168" rx="3" fill="#0d9488"/><text x="174.667" y="76" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">20x</text><text x="176.667" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">C$ price ÷ US$ EPS</text><text x="176.667" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">(mixed)</text><rect x="360" y="129.88" width="56" height="120.12" rx="3" fill="#0d9488"/><text x="388" y="123.88" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">14.3x</text><text x="390" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">C$ price ÷ EPS</text><text x="390" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">in C$ at 1.40</text><rect x="573.333" y="129.88" width="56" height="120.12" rx="3" fill="#0d9488"/><text x="601.333" y="123.88" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">14.3x</text><text x="603.333" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">US$ price ÷ US$ EPS</text><text x="603.333" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">(at 1.40)</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">P/E, same company</text></svg>
<figcaption>Hypothetical: dividing a Canadian dollar price by US dollar earnings overstates P/E by the exchange rate, 20.0x instead of 14.3x.</figcaption>
</figure>

Screeners and data sites usually convert, but not always, and not always at the same date. Check one ratio by hand for any US$ reporter you own.

## Which rate for which line

IAS 21 translates a company's income statement at average rates for the period and its balance sheet at the closing rate. Your valuation should follow the same logic.

| Item | Rate to use | Why |
|:--|:--|:--|
| Trailing EPS, EBITDA, FCF | Average rate for the period (as reported) | That is the rate at which the profit was earned |
| Forward estimates | Today's rate, or the rate in your scenario, stated explicitly | Future profit converts at future rates |
| Net debt, cash, lease liabilities | Closing (period-end) rate, or today's rate if it moved a lot | Balance sheet amounts are at a point in time |
| Share price | Today's price in its own currency | Convert the price, or the results, not both |

A US$ reporter with US$1,000M of debt adds C$50M to its enterprise value for every 0.05 rise in USD/CAD. If you use a stale closing rate after a big currency move, EV will be off.

## How the exchange rate changes earnings

Companies with US$ revenue and mostly C$ costs (many exporters, miners with Canadian mines, energy producers) earn more in C$ when the US dollar is strong.

| Hypothetical exporter | USD/CAD 1.30 | 1.35 | 1.40 | 1.45 |
|:--|--:|--:|--:|--:|
| Revenue US$1,000M in C$M | 1,300 | 1,350 | 1,400 | 1,450 |
| Costs: C$800M + US$200M, in C$M | 1,060 | 1,070 | 1,080 | 1,090 |
| Pre-tax income (C$M) | 240 | 280 | 320 | 360 |
| Net income at 26% tax (C$M) | 177.6 | 207.2 | 236.8 | 266.4 |
| **EPS in C$ (100M shares)** | **$1.78** | **$2.07** | **$2.37** | **$2.66** |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical exporter with US dollar revenue and mostly Canadian dollar costs: earnings per share in Canadian dollars at four exchange rates" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$0</text><line x1="70" y1="197.5" x2="710" y2="197.5" stroke="#e2e8f0"/><text x="62" y="201.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$0.75</text><line x1="70" y1="145" x2="710" y2="145" stroke="#e2e8f0"/><text x="62" y="149" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$1.5</text><line x1="70" y1="92.5" x2="710" y2="92.5" stroke="#e2e8f0"/><text x="62" y="96.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$2.25</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$3</text><rect x="120" y="125.4" width="56" height="124.6" rx="3" fill="#0d9488"/><text x="148" y="119.4" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$1.78</text><text x="150" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">USD/CAD 1.30</text><rect x="280" y="105.1" width="56" height="144.9" rx="3" fill="#0d9488"/><text x="308" y="99.1" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$2.07</text><text x="310" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">USD/CAD 1.35</text><rect x="440" y="84.1" width="56" height="165.9" rx="3" fill="#0d9488"/><text x="468" y="78.1" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$2.37</text><text x="470" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">USD/CAD 1.40</text><rect x="600" y="63.8" width="56" height="186.2" rx="3" fill="#0d9488"/><text x="628" y="57.8" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$2.66</text><text x="630" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">USD/CAD 1.45</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">EPS in C$</text></svg>
<figcaption>Hypothetical exporter: each 0.05 move in USD/CAD changes C$ earnings per share by roughly 12% to 17%, with no change in the business.</figcaption>
</figure>

Two things follow. A P/E computed at a favourable rate makes the stock look cheaper than it would at a normal rate. And part of any "fair value" is a currency forecast; say which rate you assumed. Many companies disclose this sensitivity in the MD&A (for example, the effect on earnings of a one-cent change in the exchange rate), and the financial instruments note shows how much is hedged.

## Constant-currency growth

| Hypothetical US segment | Last year | This year |
|:--|--:|--:|
| Revenue in US$ | 500 | 500 |
| Average USD/CAD | 1.30 | 1.40 |
| Revenue in C$ | 650 | 700 |
| Reported growth in C$ | | +7.7% |
| **Constant-currency growth** | | **0.0%** |

A growth multiple such as PEG or EV/Sales with growth should use constant-currency growth, which most companies with large foreign operations disclose as a non-GAAP measure. Otherwise a weaker loonie looks like business momentum. See [what PEG means](/investing/valuation/what-peg-means-canadian-diy/).

## Discount rate consistency

| Cash flows in | Discount at | Common mistake |
|:--|:--|:--|
| US$ | A US$ required return (US risk-free rate + equity premium) | Discounting US$ flows at a C$ rate and converting at today's rate |
| C$ | A C$ required return | Mixing a C$ rate with US$ terminal growth |
| Converted to C$ at a forecast rate | C$ rate, with the FX forecast consistent with the interest rate differential | Assuming a permanently strong or weak loonie |

For most DIY valuations, the simplest consistent approach is to value a US$ reporter entirely in US$ and convert the final per-share value at today's rate.

## Dual listings and price parity

Many TSX companies also trade in New York. The two prices should be roughly equal after converting at today's rate; small gaps reflect timing and trading costs. Value the company once, then compare with either price in the matching currency. See [how to research dual-listed Canadian stocks](/investing/analyze/research-dual-listed-canadian-stocks/) and the FX cost of buying in US$ in [commission-free trading and FX spreads](/investing/brokers-tools/commission-free-trading-fx-spreads/).

## Checklist

| Check | Done? |
|:--|:--|
| Reporting currency confirmed on the face of the statements | |
| Price and per-share figures in one currency | |
| Average rate for trailing results, closing or current rate for net debt | |
| Revenue and cost currency mix known; sensitivity read from the MD&A | |
| Hedge book checked in the financial instruments note | |
| Growth measured in constant currency | |
| Discount rate matches the currency of the cash flows | |
| Exchange rate assumption written down | |

## Go deeper

For peers that report in different currencies, the peer tables in [P/E vs peers](/investing/valuation/pe-vs-peers-canada-first-comparison/) and [EV/EBITDA vs peers](/investing/valuation/ev-ebitda-vs-peers-canada-first-comparison/) assume this conversion has been done. For the effect of geography on revenue, read [how to analyze geographic revenue mix](/investing/analyze/analyze-geographic-revenue-mix-canadian-multinationals/).

## Related reading

- [How to handle CAD vs USD results](/investing/analyze/handle-currency-cad-vs-usd-results/)
- [SEDAR+ vs EDGAR when you own US stocks from Canada](/investing/analyze/sedar-plus-vs-edgar-us-stocks/)
- [Comparable company analysis for Canadian sectors](/investing/valuation/comparable-company-analysis-canadian-sectors/)
- [How to read commodity price sensitivity for resource issuers](/investing/analyze/read-commodity-price-sensitivity-resource-issuers/)

## Sources

- IAS 21 *The Effects of Changes in Foreign Exchange Rates*; IFRS 9 *Financial Instruments* (hedge accounting); IFRS 7 *Financial Instruments: Disclosures* (IFRS Foundation).
- National Instrument 52-112 *Non-GAAP and Other Financial Measures Disclosure*, on constant-currency measures.
- Bank of Canada, daily exchange rates: [bankofcanada.ca/rates/exchange/daily-exchange-rates](https://www.bankofcanada.ca/rates/exchange/daily-exchange-rates/).

## Media credits

- Hero: "Vancouver container port-433954.jpg" by seriouslycr8ive (Pixabay), [CC0](https://creativecommons.org/publicdomain/zero/1.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Vancouver_container_port-433954.jpg). Cropped and resized to 1280x720. Real photograph of the container port in Vancouver, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
