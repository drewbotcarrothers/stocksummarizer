---
title: "How to Calculate EV/Sales in CAD from Filings"
description: "A step-by-step EV/Sales worksheet for TSX stocks: the EV bridge, convertibles counted once, revenue scope matched to EV, TTM revenue and closing vs average FX for USD reporters. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-14
image: "/images/investing/calculate-ev-sales-in-cad-from-filings.jpg"
imageAlt: "Close-up of an antique brass cash register with rows of red and black number keys"
imageCredit: "Old cash register photograph by TANAKA Juuyoh, CC BY 2.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

EV/Sales has two halves. The top is an enterprise value, built the same way as for EV/EBITDA. The bottom is twelve months of revenue, built the same way as for P/S. Most mistakes come from the seam between them: revenue and EV that do not cover the same business, convertibles counted twice, or a US-dollar balance sheet mixed with a Canadian-dollar share price.

This post is the worksheet. The concept (the debt and cash bridge, and EV/Sales = EV/EBITDA × EBITDA margin) is in [what EV/Sales means for Canadian DIY investors](/investing/valuation/what-ev-sales-means-canadian-diy/). The full EV build is in [how to calculate EV/EBITDA in CAD from filings](/investing/valuation/calculate-ev-ebitda-in-cad-from-filings/), and the revenue basis (gross vs net, IFRS 15, average-rate FX) is in [how to calculate P/S in CAD from filings](/investing/valuation/calculate-ps-in-cad-from-filings/). Here we only add what is specific to EV/Sales. It is educational; all numbers are hypothetical.

## Direct answer

1. **Diluted market cap**: latest share count from the most recent filing or news release, plus in-the-money options and convertibles, times the TSX price.
2. **Add** debt, IFRS 16 lease liabilities, preferred shares and non-controlling interests (NCI). Count convertible debentures **once**: as debt if out of the money, as shares if in the money.
3. **Subtract** cash and any investments whose revenue is **not** in the top line (equity-accounted associates and joint ventures).
4. Build **TTM revenue** (annual + year to date − prior year to date) on the same consolidated scope as EV.
5. Convert balance-sheet items at the **closing** rate and revenue at the **average** rate for the period.
6. EV/Sales = EV ÷ TTM revenue.

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Five-step flow for calculating EV/Sales in Canadian dollars" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Market cap</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Diluted shares</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">× TSX price</text><line x1="134.4" y1="60" x2="149.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+ Claims</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Debt, leases,</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">converts, prefs, NCI</text><line x1="278.8" y1="60" x2="293.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">− Cash</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">And investments</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">outside revenue</text><line x1="423.2" y1="60" x2="438.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Revenue</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">TTM, same scope,</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">average-rate FX</text><line x1="567.6" y1="60" x2="582.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">EV/Sales</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">EV ÷</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">TTM revenue</text></svg>
<figcaption>The top of the ratio is a stock (balance-sheet items on one date); the bottom is a flow (twelve months of revenue). Each needs its own exchange rate.</figcaption>
</figure>

## Worked example: a US-dollar reporter listed on the TSX

Many TSX technology and industrial names report in US dollars while their shares trade in Canadian dollars. The example below uses hypothetical figures and a hypothetical closing rate of 1.38 and average rate of 1.36 CAD per USD.

| Item (hypothetical) | Reported | Rate | C$ |
|:--|--:|--:|--:|
| Share price (TSX) | C$24.00 | | |
| Diluted shares | 150M | | |
| **Market cap** | | | **C$3,600M** |
| Debt | US$400M | 1.38 closing | +C$552M |
| Lease liabilities | US$50M | 1.38 closing | +C$69M |
| Convertible debentures (out of the money) | US$100M | 1.38 closing | +C$138M |
| Non-controlling interests | US$30M | 1.38 closing | +C$41M |
| Cash | US$300M | 1.38 closing | −C$414M |
| **Enterprise value** | | | **C$3,986M** |
| TTM revenue | US$1,100M | 1.36 average | C$1,496M |
| **EV/Sales** | | | **2.66x** |
| P/S, for comparison | | | 2.41x |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical bridge from diluted market capitalization to enterprise value for a US-dollar reporter, in Canadian dollars" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0</text><line x1="70" y1="195" x2="710" y2="195" stroke="#e2e8f0"/><text x="62" y="199" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">1,125</text><line x1="70" y1="140" x2="710" y2="140" stroke="#e2e8f0"/><text x="62" y="144" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">2,250</text><line x1="70" y1="85" x2="710" y2="85" stroke="#e2e8f0"/><text x="62" y="89" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">3,375</text><line x1="70" y1="30" x2="710" y2="30" stroke="#e2e8f0"/><text x="62" y="34" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">4,500</text><rect x="87.3714" y="74" width="56.6857" height="176" rx="3" fill="#0d9488"/><text x="115.714" y="68" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">3,600</text><text x="115.714" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Market cap</text><text x="115.714" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">(diluted)</text><rect x="178.8" y="47.0133" width="56.6857" height="26.9867" rx="3" fill="#f59e0b"/><text x="207.143" y="41.0133" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+552</text><text x="207.143" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Debt</text><rect x="270.229" y="43.64" width="56.6857" height="3.37333" rx="3" fill="#f59e0b"/><text x="298.571" y="37.64" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+69</text><text x="298.571" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Lease</text><text x="298.571" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">liabilities</text><rect x="361.657" y="36.8933" width="56.6857" height="6.74667" rx="3" fill="#f59e0b"/><text x="390" y="30.8933" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+138</text><text x="390" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Convertible</text><text x="390" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">debentures</text><rect x="453.086" y="34.8889" width="56.6857" height="2.00444" rx="3" fill="#f59e0b"/><text x="481.429" y="28.8889" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+41</text><text x="481.429" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">NCI</text><rect x="544.514" y="34.8889" width="56.6857" height="20.24" rx="3" fill="#0ea5e9"/><text x="572.857" y="28.8889" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−414</text><text x="572.857" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Cash</text><rect x="635.943" y="55.1289" width="56.6857" height="194.871" rx="3" fill="#0f172a"/><text x="664.286" y="49.1289" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">3,986</text><text x="664.286" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Enterprise</text><text x="664.286" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">value</text></svg>
<figcaption>Hypothetical, C$ millions: a C$3,600M market cap plus debt, leases, convertibles and NCI, less C$414M of cash, gives an enterprise value of C$3,986M, about 11% above the market cap.</figcaption>
</figure>

## Building TTM revenue

| Piece (hypothetical, US$M) | Source | Amount |
|:--|:--|--:|
| Last fiscal year revenue | Annual financial statements | 1,000 |
| + Current year to date (nine months) | Latest interim statements | 860 |
| − Prior year to date (nine months) | Comparative column in the same interim | 760 |
| **TTM revenue** | | **1,100** |

Use the comparative column printed in the latest interim report, not the number from last year's report, because companies sometimes restate. For gross vs net presentation and pass-through revenue, follow the P/S worksheet.

## Matching revenue scope to EV scope

The most common EV/Sales error is a numerator and denominator that describe different businesses.

| Item | In consolidated revenue? | EV treatment |
|:--|:--|:--|
| Subsidiary that is 60% owned | Yes, 100% of its revenue | Add NCI to EV |
| Associate or joint venture (equity method) | No | Subtract the investment from EV |
| Business classified as held for sale or discontinued | Usually not in continuing revenue | Subtract expected proceeds, or exclude both |
| Acquisition closed after the period end | No (not yet) | Add the debt or shares used, plus pro forma revenue, or neither |
| Equity raise after the period end | No effect | Add the new shares **and** the new cash |

## Convertible debentures: debt or shares, never both

Convertibles are common among TSX and TSX Venture issuers. Treat them by moneyness:

| Hypothetical, conversion price C$30 | Share price C$24 (out of the money) | Share price C$36 (in the money) |
|:--|:--|:--|
| Treatment | Debt at face value | Shares on conversion |
| Effect on EV | +C$138M as debt | +4.6M shares × C$36 = +C$165.6M market cap; no debt |
| Common error | Adding the shares too | Leaving the debt in as well |

The share count after conversion comes from the indenture terms in the notes; see [how to read cap tables and fully diluted share counts](/investing/analyze/read-cap-tables-fully-diluted-share-counts/).

## Canada-first notes

| Issue | What to do |
|:--|:--|
| USD reporter with a TSX quote | Convert every EV item at the closing rate, revenue at the average rate; or work entirely in USD with the US-listed price |
| Small caps reporting half-yearly or with long gaps | Use the latest balance sheet, then check news releases for financings since |
| Cash held in trust or restricted | Do not subtract it in full |
| Deferred revenue in subscription businesses | Leave it out of EV; it is an operating liability, not debt |
| Exchange rates | Use the Bank of Canada daily and average rates for the dates and period you need |

## Go deeper

Once the number is built, check whether it can be trusted in [when EV/Sales misleads on TSX stocks](/investing/valuation/when-ev-sales-misleads-tsx/), then line it up against peers in [EV/Sales vs peers: a Canada-first comparison guide](/investing/valuation/ev-sales-vs-peers-canada-first-comparison/).

## Related reading

- [How to handle currency when analyzing CAD vs USD results](/investing/analyze/handle-currency-cad-vs-usd-results/)
- [How to read debt notes and covenant language](/investing/analyze/read-debt-notes-covenant-language/)
- [How to analyze revenue quality for Canadian issuers](/investing/analyze/analyze-revenue-quality-canadian-issuers/)
- [What EV/EBITDA means for Canadian DIY investors](/investing/valuation/ev-ebitda-for-canadian-diy-investors/)

## Sources

- IFRS 15 *Revenue from Contracts with Customers*; IFRS 10 *Consolidated Financial Statements*; IAS 28 *Investments in Associates and Joint Ventures*.
- IAS 32 *Financial Instruments: Presentation* (convertible instruments); IAS 33 *Earnings per Share*; IFRS 16 *Leases*.
- IAS 21 *The Effects of Changes in Foreign Exchange Rates*; Bank of Canada exchange rates.

## Media credits

- Hero: "Old cash register 金銭登録機(きんせんとうろくき).jpg" by TANAKA Juuyoh, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Old_cash_register_%E9%87%91%E9%8A%AD%E7%99%BB%E9%8C%B2%E6%A9%9F(%E3%81%8D%E3%82%93%E3%81%9B%E3%82%93%E3%81%A8%E3%81%86%E3%82%8D%E3%81%8F%E3%81%8D).jpg). Cropped and resized to 1280x720. Real photograph of an antique cash register, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
