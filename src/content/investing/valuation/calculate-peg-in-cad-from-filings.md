---
title: "How to Calculate PEG in CAD from Filings"
description: "A step-by-step PEG worksheet for TSX stocks: build P/E in CAD, choose and compute a compound growth rate from filings or estimates, and keep currency out of the growth math. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-12
image: "/images/investing/calculate-peg-in-cad-from-filings.jpg"
imageAlt: "A vintage white slide rule lying diagonally on a plain light background"
imageCredit: "Slide rule photograph by Jacek Halicki, CC BY-SA 4.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

PEG is easy to quote and easy to get wrong, because the growth rate can come from several places and each gives a different answer. This post is a **worksheet**: build the P/E, pick a growth rate you can defend, convert currency where needed, and write down what you chose.

For the concept and rules of thumb, see [what PEG means for Canadian DIY investors](/investing/valuation/what-peg-means-canadian-diy/). The trailing EPS steps (TTM build, diluted EPS, USD to CAD) are covered in [how to calculate P/E in CAD from filings](/investing/valuation/calculate-pe-in-cad-from-filings/), and forward EPS in [how to calculate forward P/E in CAD](/investing/valuation/calculate-forward-pe-in-cad-from-filings/), so they are only summarized here. It is educational; numbers are hypothetical.

## Direct answer

1. Calculate P/E in CAD (price ÷ TTM or forward EPS).
2. Choose **one** growth rate: historical compound EPS growth from filings, consensus or guidance-based forward growth, or your own estimate. Use a 3–5 year window, not one year.
3. Calculate compound annual growth: (ending EPS ÷ starting EPS)^(1 ÷ years) − 1.
4. Compute the growth rate **in the company's reporting currency**, so exchange-rate moves do not look like business growth.
5. PEG = P/E ÷ (growth rate × 100). Record the EPS basis, growth source and window beside the number.

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Five-step flow from share price and EPS to P/E, growth rate and PEG" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Share price</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">C$48.00</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">TSX quote</text><line x1="134.4" y1="60" x2="151.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">TTM EPS</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">C$2.40</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">from filings</text><line x1="278.8" y1="60" x2="295.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">P/E</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">20.0x</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">price ÷ EPS</text><line x1="423.2" y1="60" x2="440.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Growth rate</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">9.9% / 11.8%</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">history / forward</text><line x1="567.6" y1="60" x2="584.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">PEG</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">2.02 / 1.69</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">P/E ÷ growth</text></svg>
<figcaption>Hypothetical worksheet flow: build the P/E first, choose and document one growth rate, then divide. The growth choice moves PEG more than anything else.</figcaption>
</figure>

## Worked example: step by step (hypothetical)

| Step | Input | Calculation | Result |
|:--|:--|:--|--:|
| 1 | Share price | TSX quote | C$48.00 |
| 2 | TTM diluted EPS | Last annual + current YTD − prior YTD | C$2.40 |
| 3 | Trailing P/E | 48.00 ÷ 2.40 | 20.0x |
| 4a | Historical growth | (2.40 ÷ 1.50)^(1/5) − 1 | 9.9% |
| 4b | Forward growth | FY2 estimate $3.00 vs TTM $2.40 over 2 years: (3.00 ÷ 2.40)^(1/2) − 1 | 11.8% |
| 5a | PEG on history | 20.0 ÷ 9.9 | 2.02 |
| 5b | PEG on forward growth | 20.0 ÷ 11.8 | 1.69 |
| 5c | Forward PEG | Forward P/E (48.00 ÷ FY1 $2.70 = 17.8x) ÷ 11.8 | 1.51 |

Three defensible answers from one company: 2.02, 1.69 and 1.51. None is wrong, but you must compare like with like across stocks and over time.

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical diluted EPS over five years used to calculate a compound growth rate" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0.00</text><line x1="70" y1="180" x2="710" y2="180" stroke="#e2e8f0"/><text x="62" y="184" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">1.00</text><line x1="70" y1="110" x2="710" y2="110" stroke="#e2e8f0"/><text x="62" y="114" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">2.00</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">3.00</text><rect x="93" y="145" width="60" height="105" rx="3" fill="#0d9488"/><text x="123.333" y="139" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">1.50</text><text x="123.333" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Year −5</text><rect x="200" y="137" width="60" height="113" rx="3" fill="#0d9488"/><text x="230" y="130.6" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">1.62</text><text x="230" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Year −4</text><rect x="307" y="120" width="60" height="130" rx="3" fill="#0d9488"/><text x="336.667" y="114.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">1.85</text><text x="336.667" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Year −3</text><rect x="413" y="131" width="60" height="119" rx="3" fill="#0d9488"/><text x="443.333" y="125" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">1.70</text><text x="443.333" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Year −2</text><rect x="520" y="103" width="60" height="147" rx="3" fill="#0d9488"/><text x="550" y="97" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">2.10</text><text x="550" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Year −1</text><rect x="627" y="82" width="60" height="168" rx="3" fill="#0d9488"/><text x="656.667" y="76" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">2.40</text><text x="656.667" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Latest TTM</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Diluted EPS (C$)</text></svg>
<figcaption>Hypothetical: EPS rose from $1.50 to $2.40 over five years, a compound annual growth rate of about 9.9%. The dip in Year −2 shows why you should use compound growth between endpoints and also look at the path.</figcaption>
</figure>

## Where each input comes from

| Input | Where to find it | Note |
|:--|:--|:--|
| Annual diluted EPS (5+ years) | Income statement in each annual report on SEDAR+ | Use the latest restated figures if prior years were restated |
| YTD EPS for TTM | Latest interim report | Same EPS basis as the annual figure |
| Adjusted EPS (if used) | MD&A non-GAAP section | NI 52-112 requires a reconciliation to IFRS; use the same adjustments every year |
| Consensus estimates | Broker research platforms, data providers | Note the date and number of analysts |
| Company guidance | MD&A outlook, investor-day material | Many issuers guide inputs (volumes, margins), not EPS |
| CAD/USD rate | Bank of Canada daily exchange rates | Needed only for converting EPS to CAD for the P/E |

## Currency: do the growth math in one currency

A company that reports in US dollars grew EPS from US$2.00 to US$2.60 over three years (9.1% a year). If the Canadian dollar weakened over the same period, the EPS converted to CAD each year would show faster growth, even though the business did not change. So:

| Item | Currency to use | Why |
|:--|:--|:--|
| P/E | CAD price ÷ EPS converted to CAD (or USD price ÷ USD EPS) | Price and EPS must match |
| Growth rate | Reporting currency (USD here) | Removes exchange-rate noise |
| PEG | Either P/E ÷ reporting-currency growth | The ratio has no currency |

For more on currency, see [how to handle currency when analyzing CAD vs USD results](/investing/analyze/handle-currency-cad-vs-usd-results/).

## Choices that change the answer

| Choice | Effect on PEG | Recommended default |
|:--|:--|:--|
| 1-year vs 3–5-year growth | 1-year growth swings wildly | 3–5 years |
| Start year at a trough or peak | Trough start inflates growth; peak start deflates it | Check the path, not just endpoints |
| Adjusted vs IFRS EPS | Can change both P/E and growth | Match the basis; prefer IFRS diluted unless one-time items distort it |
| Growth from buybacks | EPS grows faster than net income | Also check net income growth |
| Acquisitions in the window | Growth may be bought, not organic | Note it; see [organic vs acquisition growth](/investing/analyze/compare-organic-vs-acquisition-growth/) |

## Checklist

| Step | Done when |
|:--|:--|
| P/E built in CAD | Price and EPS in the same currency, basis recorded |
| Growth source chosen | History, consensus, guidance or own estimate, written down |
| Window set | 3–5 years, start and end years noted |
| Path checked | No trough or peak distorting the endpoints |
| Growth in reporting currency | No FX effect in the growth rate |
| PEG recorded | With basis, source and date beside it |

## Go deeper

Once you have a PEG, compare it fairly with [PEG vs peers: a Canada-first comparison guide](/investing/valuation/peg-vs-peers-canada-first-comparison/), and check it against the traps in [when PEG misleads on TSX stocks](/investing/valuation/when-peg-misleads-tsx/).

## Related reading

- [How to spot one-time items in Canadian financial statements](/investing/analyze/spot-one-time-items-canadian-statements/)
- [How to read share buyback disclosures in Canada](/investing/analyze/read-share-buyback-disclosures-canada/)
- [How to read non-GAAP metrics critically](/investing/analyze/read-non-gaap-metrics-critically/)
- [How to use SEDAR+ for stock research](/investing/analyze/use-sedar-plus-for-stock-research/)

## Sources

- IAS 33 *Earnings per Share* (diluted EPS).
- IAS 34 *Interim Financial Reporting* (year-to-date figures for TTM).
- NI 52-112 *Non-GAAP and Other Financial Measures Disclosure*.
- Bank of Canada daily exchange rates.

## Media credits

- Hero: "2023 Suwak logarytmiczny (1).jpg" by Jacek Halicki, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:2023_Suwak_logarytmiczny_(1).jpg). Cropped and resized to 1280x720. Real photograph of a vintage slide rule, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
