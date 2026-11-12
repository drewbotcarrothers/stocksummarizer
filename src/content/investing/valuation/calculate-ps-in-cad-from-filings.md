---
title: "How to Calculate P/S in CAD from Filings"
description: "A step-by-step price-to-sales worksheet for TSX stocks: market cap, TTM revenue, gross vs net revenue under IFRS 15, acquisitions, and average-rate currency conversion. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-12
image: "/images/investing/calculate-ps-in-cad-from-filings.jpg"
imageAlt: "Empty supermarket checkout lanes with conveyor belts and card terminals under bright store lighting"
imageCredit: "Supermarket checkout lanes photograph by Harrison Keely, CC BY 4.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

P/S uses the simplest line on the income statement, but there are still choices: which twelve months, which share count, how acquisitions and currency are handled, and whether reported revenue is **gross or net**. This post is a worksheet.

For the concept, see [what P/S means for Canadian DIY investors](/investing/valuation/what-ps-means-canadian-diy/). The TTM build and share-count steps match [how to calculate P/E in CAD from filings](/investing/valuation/calculate-pe-in-cad-from-filings/), so they are summarized here. It is educational; numbers are hypothetical.

## Direct answer

1. Market cap = share price × **latest common shares outstanding** (all classes).
2. TTM revenue = last fiscal year revenue + current year-to-date revenue − prior year-to-date revenue.
3. Check the **revenue basis**: gross or net (principal vs agent under IFRS 15), and whether acquisitions or disposals distort the period.
4. If the company reports in USD, convert revenue at the **average exchange rate** for the period (revenue is a flow, not a balance).
5. P/S = market cap (CAD) ÷ TTM revenue (CAD).

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical build of trailing twelve-month revenue from an annual and two year-to-date figures" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0</text><line x1="70" y1="208" x2="710" y2="208" stroke="#e2e8f0"/><text x="62" y="212" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">500</text><line x1="70" y1="166" x2="710" y2="166" stroke="#e2e8f0"/><text x="62" y="170" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">1,000</text><line x1="70" y1="124" x2="710" y2="124" stroke="#e2e8f0"/><text x="62" y="128" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">1,500</text><line x1="70" y1="82" x2="710" y2="82" stroke="#e2e8f0"/><text x="62" y="86" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">2,000</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">2,500</text><rect x="120" y="82" width="60" height="168" rx="3" fill="#0d9488"/><text x="150" y="76" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">2,000</text><text x="150" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Last fiscal year</text><rect x="280" y="111" width="60" height="139" rx="3" fill="#0d9488"/><text x="310" y="105.4" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">1,650</text><text x="310" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">+ Current 9 months</text><rect x="440" y="124" width="60" height="126" rx="3" fill="#0d9488"/><text x="470" y="118" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">1,500</text><text x="470" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">− Prior-year 9 months</text><rect x="600" y="69" width="60" height="181" rx="3" fill="#0d9488"/><text x="630" y="63.4" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">2,150</text><text x="630" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">= TTM revenue</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Revenue (C$M)</text></svg>
<figcaption>Hypothetical, C$ millions: last fiscal year revenue of $2,000 plus $1,650 for the current nine months, minus $1,500 for the same nine months a year earlier, gives TTM revenue of $2,150.</figcaption>
</figure>

## Worked example (hypothetical, CAD reporter)

| Step | Input | Source | Value |
|:--|:--|:--|--:|
| 1 | Share price | TSX quote | C$30.00 |
| 2 | Shares outstanding | MD&A outstanding share data | 120M |
| 3 | Market cap | 30.00 × 120 | C$3,600M |
| 4 | Last fiscal year revenue | Annual income statement | C$2,000M |
| 5 | Current 9-month revenue | Latest interim report | C$1,650M |
| 6 | Prior-year 9-month revenue | Same interim report (comparative) | C$1,500M |
| 7 | TTM revenue | 2,000 + 1,650 − 1,500 | C$2,150M |
| 8 | **P/S** | 3,600 ÷ 2,150 | **1.67x** |

## Worked example (hypothetical, USD reporter)

| Step | Input | Value |
|:--|:--|--:|
| 1 | TTM revenue | US$1,000M |
| 2 | Average USD/CAD rate over those twelve months (hypothetical) | 1.37 |
| 3 | TTM revenue in CAD | C$1,370M |
| 4 | Market cap (C$27.40 × 100M shares) | C$2,740M |
| 5 | **P/S** | 2,740 ÷ 1,370 = **2.00x** |

This differs from P/B, where the balance-sheet figure uses the closing rate (see [how to calculate P/B in CAD](/investing/valuation/calculate-pb-in-cad-from-filings/)). Averages of the Bank of Canada's daily rates over the period are a reasonable approximation; for a quick check, divide the USD price by USD revenue per share instead.

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Five-step flow for calculating price-to-sales in Canadian dollars" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Market cap</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Price × latest</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">share count</text><line x1="134.4" y1="60" x2="151.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">TTM revenue</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Annual + YTD</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">− prior YTD</text><line x1="278.8" y1="60" x2="295.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Check basis</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Gross vs net,</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">acquisitions</text><line x1="423.2" y1="60" x2="440.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Convert</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Average rate</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">for the period</text><line x1="567.6" y1="60" x2="584.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">P/S</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Market cap ÷</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">CAD revenue</text></svg>
<figcaption>Build market cap and TTM revenue, check what counts as revenue, convert at average rates if needed, then divide.</figcaption>
</figure>

## Revenue basis: what counts as "sales"

| Issue | Example of the effect | What to do |
|:--|:--|:--|
| Principal vs agent (IFRS 15) | A marketplace booking gross sales shows far higher revenue than one booking only its commission | Compare peers on the same basis; read the revenue note |
| Excise taxes and duties | Some issuers show gross revenue and subtract taxes separately | Use the net revenue line consistently |
| Pass-through costs | Fuel surcharges or pass-through costs lift revenue without profit | Note them; compare margins too |
| Acquisitions in the period | TTM includes only part of a year of the acquired business | Use pro forma revenue if disclosed, or note it |
| Disposals and discontinued operations | Revenue from sold businesses may still be in history | Use continuing operations |
| Segment mix | Low- and high-margin segments blended | Consider P/S by segment; see [segment reporting](/investing/analyze/read-segment-reporting-canadian-filings/) |

## Choices that change the answer

| Choice | Effect | Default |
|:--|:--|:--|
| Last fiscal year vs TTM | Fiscal year can be up to a year stale | TTM |
| Forward revenue | Lower P/S if growth is expected | Label it; see [forward P/E](/investing/valuation/what-forward-pe-means-canadian-diy/) for estimate caveats |
| Basic vs diluted shares | Diluted raises market cap | Basic, with dilution checked separately |
| Closing vs average FX | Closing rate is wrong for revenue | Average rate |
| Market cap vs enterprise value | Market cap ignores debt and cash | P/S for equity; EV/Sales for levered firms |

## Checklist

| Step | Done when |
|:--|:--|
| Market cap | Latest share count, all common classes |
| TTM revenue | Annual + YTD − prior YTD, continuing operations |
| Revenue basis | Gross/net, taxes and pass-throughs checked |
| Acquisitions | Pro forma or noted |
| Currency | Average rate for the period |
| P/S recorded | With date, basis and notes |

## Go deeper

P/S is most useful next to margins and growth. For the growth side, see [what PEG means](/investing/valuation/what-peg-means-canadian-diy/); for revenue quality, see [how to analyze revenue quality for Canadian issuers](/investing/analyze/analyze-revenue-quality-canadian-issuers/).

## Related reading

- [How to handle currency when analyzing CAD vs USD results](/investing/analyze/handle-currency-cad-vs-usd-results/)
- [How to compare organic growth vs acquisition growth](/investing/analyze/compare-organic-vs-acquisition-growth/)
- [How to read quarterly earnings for TSX companies](/investing/analyze/how-to-read-quarterly-earnings-tsx/)
- [What EV/EBITDA means for Canadian DIY investors](/investing/valuation/ev-ebitda-for-canadian-diy-investors/)

## Sources

- IFRS 15 *Revenue from Contracts with Customers* (principal vs agent, variable consideration).
- IAS 21 *The Effects of Changes in Foreign Exchange Rates* (average rates for income and expenses).
- IAS 34 *Interim Financial Reporting* (year-to-date comparatives).
- Form 51-102F1 *Management's Discussion & Analysis* (outstanding share data).
- Bank of Canada daily exchange rates.

## Media credits

- Hero: "Aldi Süd supermarket checkout lanes in Franklin, North Carolina, US 14.jpg" by Harrison Keely, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Aldi_S%C3%BCd_supermarket_checkout_lanes_in_Franklin,_North_Carolina,_US_14.jpg). Cropped and resized to 1280x720. Real photograph of supermarket checkout lanes, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
