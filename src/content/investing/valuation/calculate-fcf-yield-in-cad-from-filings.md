---
title: "How to Calculate FCF Yield in CAD from Filings"
description: "An FCF-yield worksheet for TSX stocks: owner FCF after stock-based compensation, the latest diluted share count, share drift, average-rate FX and the yield on EV. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-15
image: "/images/investing/calculate-fcf-yield-in-cad-from-filings.jpg"
imageAlt: "Close-up of a water meter with its dial and counter, connected to a supply pipe"
imageCredit: "Itron water meter photograph by Ganesh Dhamodkar, CC BY 4.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

The free cash flow build itself (operating cash flow, all capex, lease principal, interest wherever IAS 7 puts it, NCI and preferred payouts) is already in [how to calculate P/FCF in CAD from filings](/investing/valuation/calculate-p-fcf-in-cad-from-filings/), and the unlevered version in [how to calculate EV/FCF in CAD from filings](/investing/valuation/calculate-ev-fcf-in-cad-from-filings/). This worksheet starts where those end, with FCF to common, and handles what decides an FCF **yield** that an owner can rely on: the **share count** you divide by, **stock-based compensation**, how the share count has **drifted** over time, and putting the yield on price and the yield on EV side by side in CAD. It is educational; all figures are hypothetical.

## Direct answer

1. Start with **FCF to common** from the P/FCF worksheet (three-year average if cash flow is lumpy).
2. Subtract **stock-based compensation** from the cash flow statement for the owner-adjusted version.
3. Divide by the **latest diluted share count** (period-end shares plus in-the-money options, RSUs and convertibles), not the weighted average.
4. Divide FCF per share by the TSX price in CAD (convert USD FCF at the **average** rate).
5. Also compute unlevered FCF ÷ EV, and compare total FCF growth with **per-share** FCF growth over three years.

## Step 1–3: from FCF to owner FCF per share (hypothetical)

| Line | Source | Value |
|:--|:--|--:|
| FCF to common (TTM) | P/FCF worksheet | C$500M |
| Stock-based compensation | Cash flow statement add-back, or share-based payment note (IFRS 2) | C$60M |
| Owner FCF (after SBC) | 500 − 60 | C$440M |
| Weighted average shares | Income statement (IAS 33) | 200M |
| Period-end shares outstanding | Balance sheet date, cover page or latest MD&A | 203M |
| Latest diluted shares | Period-end + in-the-money options, RSUs/PSUs, convertibles | 205M |

| Per-share version | Calculation | FCF per share |
|:--|:--|--:|
| Reported, weighted average | 500 ÷ 200 | $2.50 |
| Latest diluted count | 500 ÷ 205 | $2.44 |
| Owner-adjusted (after SBC, latest diluted) | 440 ÷ 205 | $2.15 |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical bridge from reported free cash flow per share to free cash flow per share after share drift and share-based compensation" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$0.00</text><line x1="70" y1="195" x2="710" y2="195" stroke="#e2e8f0"/><text x="62" y="199" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$0.75</text><line x1="70" y1="140" x2="710" y2="140" stroke="#e2e8f0"/><text x="62" y="144" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$1.50</text><line x1="70" y1="85" x2="710" y2="85" stroke="#e2e8f0"/><text x="62" y="89" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$2.25</text><line x1="70" y1="30" x2="710" y2="30" stroke="#e2e8f0"/><text x="62" y="34" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$3.00</text><rect x="115" y="66.6667" width="70" height="183.333" rx="3" fill="#0d9488"/><text x="150" y="60.6667" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$2.50</text><text x="150" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Reported</text><text x="150" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">FCF/share</text><rect x="275" y="66.6667" width="70" height="4.47333" rx="3" fill="#0ea5e9"/><text x="310" y="60.6667" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−$0.06</text><text x="310" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Share</text><text x="310" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">drift</text><rect x="435" y="71.14" width="70" height="21.4867" rx="3" fill="#0ea5e9"/><text x="470" y="65.14" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−$0.29</text><text x="470" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">SBC</text><rect x="595" y="92.6267" width="70" height="157.373" rx="3" fill="#0f172a"/><text x="630" y="86.6267" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$2.15</text><text x="630" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Owner-adjusted</text><text x="630" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">FCF/share</text></svg>
<figcaption>Hypothetical: reported FCF per share of $2.50 falls to about $2.15 once you use the latest diluted share count and subtract stock-based compensation.</figcaption>
</figure>

Why the latest diluted count: the weighted average describes the past year; you are buying a share of the company as it is today. The share-count build (treasury method for options, conversion terms for convertibles) is in [how to read cap tables and fully diluted share counts](/investing/analyze/read-cap-tables-fully-diluted-share-counts/).

## Step 4: the yields in CAD (hypothetical)

| Yield | Calculation | Value |
|:--|:--|--:|
| Reported FCF yield on price | $2.50 ÷ $40.00 | 6.25% |
| On latest diluted shares | $2.44 ÷ $40.00 | 6.10% |
| **Owner-adjusted FCF yield** | $2.15 ÷ $40.00 | **5.37%** |

For a **US-dollar reporter**, convert FCF at the average USD/CAD rate for the same twelve months (illustrative 1.37: US$365M × 1.37 ≈ C$500M) before dividing by shares and the CAD price. Dividing a US-dollar FCF per share by a Canadian-dollar price understates the yield.

## Step 5a: yield on EV, side by side (hypothetical)

| Line | Value |
|:--|--:|
| Diluted market cap (205M × $40.00) | C$8,200M |
| Net debt, leases, preferreds, NCI (EV worksheet) | C$1,200M |
| Enterprise value | C$9,400M |
| FCF to common | C$500M |
| Add back after-tax interest (C$60M × (1 − 26.5%), illustrative rate) | C$44M |
| Unlevered FCF | C$544M |
| **Unlevered FCF yield (on EV)** | **5.79%** |
| Unlevered, after SBC (C$484M) | 5.15% |

Here the yield on price (6.10% on diluted shares) is above the yield on EV (5.79%) because debt is part of the capital structure. Keep both; the EV version is the one to compare with peers that carry different debt, as in [EV/FCF vs peers](/investing/valuation/ev-fcf-vs-peers-canada-first-comparison/).

## Step 5b: total vs per-share growth (hypothetical)

| Year | FCF to common | Diluted shares | FCF per share |
|:--|--:|--:|--:|
| Year 1 | C$400M | 180M | $2.22 |
| Year 2 | C$452M | 192M | $2.35 |
| Year 3 | C$500M | 205M | $2.44 |
| Growth, year 1 to 3 | +25% | +14% | +10% |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical: total free cash flow grows faster than free cash flow per share when the share count rises" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0</text><line x1="70" y1="197.5" x2="710" y2="197.5" stroke="#e2e8f0"/><text x="62" y="201.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">35</text><line x1="70" y1="145" x2="710" y2="145" stroke="#e2e8f0"/><text x="62" y="149" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">70</text><line x1="70" y1="92.5" x2="710" y2="92.5" stroke="#e2e8f0"/><text x="62" y="96.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">105</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">140</text><rect x="116.667" y="100" width="56" height="150" rx="3" fill="#0d9488"/><text x="144.667" y="94" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">100</text><rect x="176.667" y="100" width="56" height="150" rx="3" fill="#f59e0b"/><text x="204.667" y="94" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">100</text><text x="176.667" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Year 1</text><rect x="330" y="80.5" width="56" height="169.5" rx="3" fill="#0d9488"/><text x="358" y="74.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">113</text><rect x="390" y="91" width="56" height="159" rx="3" fill="#f59e0b"/><text x="418" y="85" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">106</text><text x="390" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Year 2</text><rect x="543.333" y="62.5" width="56" height="187.5" rx="3" fill="#0d9488"/><text x="571.333" y="56.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">125</text><rect x="603.333" y="85" width="56" height="165" rx="3" fill="#f59e0b"/><text x="631.333" y="79" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">110</text><text x="603.333" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Year 3</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Total FCF (index)</text><rect x="249" y="10" width="14" height="14" rx="3" fill="#f59e0b"/><text x="269" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">FCF per share (index)</text></svg>
<figcaption>Hypothetical: total FCF grew 25% over two years, but because the share count rose 14% (acquisitions paid in shares, equity raises, compensation), FCF per share grew only about 10%.</figcaption>
</figure>

Growth assumptions in a yield-based valuation should use the per-share figure. Where shares come from is covered in [how to spot dilution risk in Canadian equity issuers](/investing/analyze/spot-dilution-risk-canadian-issuers/) and [what dilution is](/investing/glossary/what-is-dilution/); buybacks that shrink the count are in [how to read share buyback disclosures in Canada](/investing/analyze/read-share-buyback-disclosures-canada/).

## Choices that change the answer

| Choice | Option A | Option B | Rule |
|:--|:--|:--|:--|
| Share count | Weighted average | Latest diluted | Latest diluted for yield; note both |
| SBC | Left in (reported FCF) | Subtracted | Show both; owner-adjusted for SBC-heavy companies |
| Cash-settled awards | Already in operating cash flow | n/a | Do not subtract twice |
| Buybacks to offset dilution | Ignored | Treated as the cash cost of SBC | Use one method, not both |
| Window | TTM | Three-year average | Three-year when working capital swings |
| Basis | Yield on price | Yield on EV | Both, labelled |

## Checklist

| Step | Done when |
|:--|:--|
| FCF to common | Taken from the P/FCF worksheet, window stated |
| SBC | Found and subtracted for the owner version |
| Share count | Latest diluted, sources noted |
| Currency | FCF at average rate; price in CAD |
| Yields | Reported, diluted and owner-adjusted shown |
| EV version | Unlevered yield with the same claims as the EV worksheet |
| Per-share trend | Three years of total vs per-share growth |

## Go deeper

The traps (leverage, SBC, working capital, capex gaps) are in [when FCF yield misleads on TSX stocks](/investing/valuation/when-fcf-yield-misleads-tsx/). For the concept and the dividend comparison, see [what FCF yield means for Canadian DIY investors](/investing/valuation/what-fcf-yield-means-canadian-diy/).

## Related reading

- [What P/FCF means for Canadian DIY investors](/investing/valuation/what-p-fcf-means-canadian-diy/)
- [What is free cash flow?](/investing/glossary/what-is-free-cash-flow/)
- [FCF for stock decisions: a quick decision checklist](/investing/analyze/fcf-stock-decisions-quick-checklist/)
- [How to handle currency when analyzing CAD vs USD results](/investing/analyze/handle-currency-cad-vs-usd-results/)

## Sources

- IAS 7 *Statement of Cash Flows*; IFRS 2 *Share-based Payment*.
- IAS 33 *Earnings per Share* (weighted average and diluted shares; treasury stock method).
- IAS 21 *The Effects of Changes in Foreign Exchange Rates*; IAS 12 *Income Taxes*.
- National Instrument 52-112 *Non-GAAP and Other Financial Measures Disclosure*.
- Bank of Canada exchange rates.

## Media credits

- Hero: "Itron Water Meter.jpg" by Ganesh Dhamodkar, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Itron_Water_Meter.jpg). Cropped and resized to 1280x720. Real photograph of a water meter, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
