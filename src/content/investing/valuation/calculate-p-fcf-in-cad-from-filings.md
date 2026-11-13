---
title: "How to Calculate P/FCF in CAD from Filings"
description: "A step-by-step price-to-free-cash-flow worksheet for TSX stocks: TTM operating cash flow, all capex, IFRS 16 lease principal, IAS 7 interest classification, minority claims and average-rate FX. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-13
image: "/images/investing/calculate-p-fcf-in-cad-from-filings.jpg"
imageAlt: "Black-and-white 1897 photograph of a worker weighing and counting coins in the coiners' department of the New Orleans Mint"
imageCredit: "Weighing and counting at the New Orleans Mint (1897) photograph by E. S. Gardner, public domain, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Price-to-free-cash-flow is simple to state and easy to get wrong, because "free cash flow" has no single IFRS definition. Each company chooses where interest paid sits, how much lease cash is visible, and what it calls capex. This post is a worksheet for building P/FCF the same way every time.

For what P/FCF tells you and where it works, see the hub: [what P/FCF means for Canadian DIY investors](/investing/valuation/what-p-fcf-means-canadian-diy/). For reading the cash flow statement itself, see [how to analyze free cash flow for stock decisions](/investing/analyze/free-cash-flow-analysis/) and the [FCF glossary entry](/investing/glossary/what-is-free-cash-flow/). The TTM and share-count steps match [how to calculate P/E in CAD from filings](/investing/valuation/calculate-pe-in-cad-from-filings/). It is educational; numbers are hypothetical.

## Direct answer

1. TTM operating cash flow = last fiscal year + current year-to-date − prior year-to-date.
2. Subtract **capex**: purchases of property, plant and equipment **and** of intangible assets (software, licences).
3. Subtract **lease principal** payments (IFRS 16 puts them in financing).
4. If the company reports **interest paid in financing**, subtract it too, so every peer is measured after interest.
5. Subtract distributions to **non-controlling interests** and **preferred dividends** to get FCF to common shareholders.
6. Convert USD figures at the **average rate** for the period; P/FCF = market cap (CAD) ÷ FCF to common (CAD).

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical bridge from operating cash flow to free cash flow available to common shareholders" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0</text><line x1="70" y1="195" x2="710" y2="195" stroke="#e2e8f0"/><text x="62" y="199" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">175</text><line x1="70" y1="140" x2="710" y2="140" stroke="#e2e8f0"/><text x="62" y="144" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">350</text><line x1="70" y1="85" x2="710" y2="85" stroke="#e2e8f0"/><text x="62" y="89" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">525</text><line x1="70" y1="30" x2="710" y2="30" stroke="#e2e8f0"/><text x="62" y="34" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">700</text><rect x="90.2667" y="55.1429" width="66.1333" height="194.857" rx="3" fill="#0d9488"/><text x="123.333" y="49.1429" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">620</text><text x="123.333" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Operating</text><text x="123.333" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">cash flow</text><rect x="196.933" y="55.1429" width="66.1333" height="72.2857" rx="3" fill="#0ea5e9"/><text x="230" y="49.1429" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−230</text><text x="230" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Capex</text><rect x="303.6" y="127.429" width="66.1333" height="12.5714" rx="3" fill="#0ea5e9"/><text x="336.667" y="121.429" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−40</text><text x="336.667" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Lease</text><text x="336.667" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">principal</text><rect x="410.267" y="140" width="66.1333" height="9.42857" rx="3" fill="#0ea5e9"/><text x="443.333" y="134" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−30</text><text x="443.333" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Interest</text><text x="443.333" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">(if financing)</text><rect x="516.933" y="149.429" width="66.1333" height="6.28571" rx="3" fill="#0ea5e9"/><text x="550" y="143.429" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−20</text><text x="550" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">NCI and</text><text x="550" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">pref. divs</text><rect x="623.6" y="155.714" width="66.1333" height="94.2857" rx="3" fill="#0f172a"/><text x="656.667" y="149.714" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">300</text><text x="656.667" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">FCF to</text><text x="656.667" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">common</text></svg>
<figcaption>Hypothetical, C$ millions: operating cash flow of $620 less capex ($230), lease principal ($40), interest reported in financing ($30) and distributions to minority holders and preferred shareholders ($20) leaves $300 of free cash flow for common shareholders.</figcaption>
</figure>

## Worked example (hypothetical, CAD reporter)

| Step | Input | Source in the filings | Value |
|:--|:--|:--|--:|
| 1 | Share price | TSX quote | C$24.00 |
| 2 | Shares outstanding | MD&A outstanding share data | 200M |
| 3 | Market cap | 24.00 × 200 | C$4,800M |
| 4 | Operating cash flow (TTM) | Cash flow statement, annual + interim | C$620M |
| 5 | Purchases of PP&E and intangibles | Investing activities | −C$230M |
| 6 | Principal portion of lease payments | Financing activities | −C$40M |
| 7 | Interest paid (classified in financing) | Financing activities or cash flow note | −C$30M |
| 8 | NCI distributions and preferred dividends | Financing activities | −C$20M |
| 9 | FCF to common | 620 − 230 − 40 − 30 − 20 | C$300M |
| 10 | **P/FCF** | 4,800 ÷ 300 | **16.0x** |
| 11 | FCF yield | 300 ÷ 4,800 | 6.25% |

## The IAS 7 classification choices that change FCF

Under IAS 7, companies other than financial institutions may classify interest paid, interest received and dividends received in operating, investing or financing activities, as long as they are consistent. That means two identical companies can report different operating cash flow.

| Item | Where it can sit today | What to do |
|:--|:--|:--|
| Interest paid | Operating or financing | Always subtract it to get a post-interest FCF |
| Interest received | Operating or investing | Keep it in if cash is a real part of the business; note it |
| Dividends received (from associates) | Operating or investing | Include only if recurring |
| Lease principal (IFRS 16) | Financing | Always subtract |
| Lease interest | Follows the company's interest policy | Subtract if in financing |
| Taxes paid | Operating, unless tied to investing or financing | Leave as reported; note big one-off refunds |

IFRS 18 *Presentation and Disclosure in Financial Statements* (effective for annual periods beginning on or after January 1, 2027) also amends IAS 7 and removes most of these choices for non-financial companies, generally placing interest paid in financing. Expect presentation changes in 2027 filings; rebuild comparatives on the same basis.

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Five-step flow for calculating price-to-free-cash-flow in Canadian dollars" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">TTM cash flow</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Annual + YTD</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">− prior YTD</text><line x1="134.4" y1="60" x2="149.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Subtract</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Capex (PP&amp;E</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">+ intangibles)</text><line x1="278.8" y1="60" x2="293.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Align</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Leases, interest,</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">NCI, preferreds</text><line x1="423.2" y1="60" x2="438.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Convert</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Average rate</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">for the period</text><line x1="567.6" y1="60" x2="582.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">P/FCF</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Market cap ÷</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">FCF to common</text></svg>
<figcaption>Build TTM cash flow, subtract all capex, align leases, interest and minority claims, convert at average rates, then divide.</figcaption>
</figure>

## Worked example (hypothetical, USD reporter)

| Step | Input | Value |
|:--|:--|--:|
| 1 | FCF to common (TTM) | US$250M |
| 2 | Average USD/CAD rate over those twelve months (hypothetical) | 1.37 |
| 3 | FCF to common in CAD | C$342.5M |
| 4 | Market cap (C$41.10 × 125M shares) | C$5,137.5M |
| 5 | **P/FCF** | 5,137.5 ÷ 342.5 = **15.0x** |

Cash flow is a flow, so use average rates (as for revenue). A quick cross-check: USD price ÷ USD FCF per share should give the same multiple if the CAD price matches the USD listing at today's rate.

## Choices that change the answer

| Choice | Effect | Default |
|:--|:--|:--|
| TTM vs multi-year average | One year can be distorted by working capital | Calculate both; see [when P/FCF misleads](/investing/valuation/when-p-fcf-misleads-tsx/) |
| Include stock-based compensation? | SBC is added back in operating cash flow | Show P/FCF with and without SBC deducted for tech names |
| Growth vs maintenance capex | Subtracting only maintenance capex flatters FCF | Subtract all capex; discuss maintenance separately |
| Acquisitions | Sit outside capex in investing | Exclude from FCF but note average acquisition spend |
| Basic vs diluted share count | Diluted raises market cap | Basic, dilution checked separately |
| Market cap vs EV | P/FCF is an equity measure | Use FCF after interest with market cap; EV/FCF uses FCF before interest |

## Checklist

| Step | Done when |
|:--|:--|
| TTM operating cash flow | Annual + YTD − prior YTD |
| Capex | PP&E **and** intangibles subtracted |
| Leases | Principal subtracted |
| Interest | Subtracted wherever it is classified |
| Minority claims | NCI distributions and preferred dividends subtracted |
| Currency | Average rate for the period |
| P/FCF recorded | With date, definition and notes |

## Go deeper

Once you can build it consistently, the [FCF quick checklist for stock decisions](/investing/analyze/fcf-stock-decisions-quick-checklist/) covers whether the cash flow is durable, and [how to use P/FCF in a simple valuation checklist](/investing/valuation/use-p-fcf-simple-valuation-checklist/) turns it into a price range.

## Related reading

- [How to read CFO vs net income](/investing/analyze/read-cfo-vs-net-income/)
- [How to read capex plans in an MD&A](/investing/analyze/read-capex-plans-mdna/)
- [How to analyze working capital swings quarterly](/investing/analyze/analyze-working-capital-swings-quarterly/)
- [P/FCF vs peers: a Canada-first comparison guide](/investing/valuation/p-fcf-vs-peers-canada-first-comparison/)

## Sources

- IAS 7 *Statement of Cash Flows* (classification of interest and dividends).
- IFRS 16 *Leases* (principal and interest portions of lease payments).
- IFRS 18 *Presentation and Disclosure in Financial Statements* (consequential amendments to IAS 7; confirm effective date and transition in the current standard).
- IAS 21 *The Effects of Changes in Foreign Exchange Rates*; Bank of Canada exchange rates.
- Form 51-102F1 *Management's Discussion & Analysis* (outstanding share data).

## Media credits

- Hero: "Weighing and Counting - Coiners Dept New Orleans Mint 1897.jpg" by E.S. Gardner, public domain, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Weighing_and_Counting_-_Coiners_Dept_New_Orleans_Mint_1897.jpg). Cropped and resized to 1280x720. Real photograph of workers weighing and counting coins at the New Orleans Mint in 1897, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
