---
title: "How to Calculate EV/EBITDA in CAD from Filings"
description: "A step-by-step EV/EBITDA worksheet for TSX stocks: the EV bridge (debt, IFRS 16 leases, preferreds, NCI, cash, equity investments), TTM EBITDA, EBITDAaL and closing vs average FX. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-13
image: "/images/investing/calculate-ev-ebitda-in-cad-from-filings.jpg"
imageAlt: "Black-and-white photograph of a surveyor looking through a theodolite mounted on a tripod"
imageCredit: "Theodolite photograph (1950) from Fortepan, donated by UVATERV, CC BY-SA 3.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

EV/EBITDA is the multiple Canadian analysts reach for in pipelines, telecom, rails and industrials. It is also the multiple with the most moving parts: half a dozen balance-sheet claims on the top, a non-IFRS earnings figure on the bottom, and two different exchange rates if the company reports in US dollars. This post is the worksheet.

For why EV/EBITDA matters and how it is used by sector, see the hub: [what EV/EBITDA means for Canadian DIY investors](/investing/valuation/ev-ebitda-for-canadian-diy-investors/). The one-paragraph definition is in the [EV/EBITDA glossary entry](/investing/glossary/what-is-ev-ebitda/). It is educational; all numbers are hypothetical.

## Direct answer

1. Start with **diluted market cap** (price × shares, plus in-the-money options and convertibles via the treasury stock method).
2. **Add** interest-bearing debt (current and long-term), **lease liabilities** if EBITDA is after IFRS 16, **preferred shares**, hybrid notes and **non-controlling interests**.
3. **Subtract** cash and, where their earnings are not in EBITDA, **equity-accounted investments**.
4. Build **TTM EBITDA** = operating income + depreciation and amortization (annual + YTD − prior YTD). Decide reported vs adjusted and keep the reconciliation.
5. Use the **same balance-sheet date** for every EV item, the **closing** rate for balance-sheet items and the **average** rate for EBITDA.
6. EV/EBITDA = EV ÷ EBITDA.

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical bridge from diluted market capitalization to enterprise value" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0</text><line x1="70" y1="195" x2="710" y2="195" stroke="#e2e8f0"/><text x="62" y="199" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">1,250</text><line x1="70" y1="140" x2="710" y2="140" stroke="#e2e8f0"/><text x="62" y="144" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">2,500</text><line x1="70" y1="85" x2="710" y2="85" stroke="#e2e8f0"/><text x="62" y="89" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">3,750</text><line x1="70" y1="30" x2="710" y2="30" stroke="#e2e8f0"/><text x="62" y="34" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">5,000</text><rect x="87.3714" y="118" width="56.6857" height="132" rx="3" fill="#0d9488"/><text x="115.714" y="112" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">3,000</text><text x="115.714" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Market cap</text><text x="115.714" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">(diluted)</text><rect x="178.8" y="56.4" width="56.6857" height="61.6" rx="3" fill="#f59e0b"/><text x="207.143" y="50.4" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+1,400</text><text x="207.143" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Debt</text><rect x="270.229" y="43.2" width="56.6857" height="13.2" rx="3" fill="#f59e0b"/><text x="298.571" y="37.2" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+300</text><text x="298.571" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Lease</text><text x="298.571" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">liabilities</text><rect x="361.657" y="27.8" width="56.6857" height="15.4" rx="3" fill="#f59e0b"/><text x="390" y="21.8" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+350</text><text x="390" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Preferreds</text><text x="390" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">+ NCI</text><rect x="453.086" y="27.8" width="56.6857" height="11" rx="3" fill="#0ea5e9"/><text x="481.429" y="21.8" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−250</text><text x="481.429" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Cash</text><rect x="544.514" y="38.8" width="56.6857" height="8.8" rx="3" fill="#0ea5e9"/><text x="572.857" y="32.8" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−200</text><text x="572.857" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Equity</text><text x="572.857" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">investments</text><rect x="635.943" y="47.6" width="56.6857" height="202.4" rx="3" fill="#0f172a"/><text x="664.286" y="41.6" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">4,600</text><text x="664.286" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Enterprise</text><text x="664.286" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">value</text></svg>
<figcaption>Hypothetical, C$ millions: diluted market cap of $3,000 plus debt ($1,400), lease liabilities ($300) and preferreds plus minority interests ($350), less cash ($250) and equity-accounted investments ($200), gives enterprise value of $4,600.</figcaption>
</figure>

## Worked example (hypothetical, CAD reporter)

| Step | Input | Source in the filings | Value |
|:--|:--|:--|--:|
| 1 | Diluted market cap | Price × diluted shares (outstanding share data + option note) | C$3,000M |
| 2 | Debt, current and long-term | Balance sheet; debt note | +C$1,400M |
| 3 | Lease liabilities, current and non-current | Balance sheet; IFRS 16 note | +C$300M |
| 4 | Preferred shares | Equity section; share capital note | +C$200M |
| 5 | Non-controlling interests | Equity section | +C$150M |
| 6 | Cash and equivalents | Balance sheet | −C$250M |
| 7 | Equity-accounted investments | Balance sheet; associates/JV note | −C$200M |
| 8 | **Enterprise value** | Sum | **C$4,600M** |
| 9 | Operating income (TTM) | Income statement, annual + interim | C$380M |
| 10 | Depreciation and amortization (TTM) | Cash flow statement or notes | C$220M |
| 11 | **EBITDA (TTM)** | 380 + 220 | **C$600M** |
| 12 | **EV/EBITDA** | 4,600 ÷ 600 | **7.7x** |

## What goes into EV, and when

The EV bridge is the same idea as the equity bridge used for book value in [how to calculate P/B in CAD](/investing/valuation/calculate-pb-in-cad-from-filings/), run in the other direction: P/B strips claims out of equity, EV adds every claim ahead of common shareholders back in.

| Item | Include? | Matching rule |
|:--|:--|:--|
| Diluted market cap | Always | Treasury stock method for options; convertibles if in the money |
| Debt (incl. current portion, commercial paper) | Always | Carrying amount is fine; fair value if far apart (note disclosure) |
| Lease liabilities | Only if EBITDA is post-IFRS 16 | Lease costs are out of EBITDA, so the liability goes into EV |
| Preferred shares and hybrids | Usually | Treat as debt-like claims |
| Non-controlling interests | If EBITDA consolidates 100% of subsidiaries | Book value is the common shortcut; market value is better if listed |
| Cash | Subtract | Unless trapped abroad or needed to run the business |
| Equity-accounted investments | Subtract | Their profit sits below EBITDA, so their value should leave EV |
| Pension deficit (after tax) | Optional, if large | Consistent across peers; see [pensions and long-term liabilities](/investing/analyze/evaluate-pension-long-term-liabilities/) |
| Decommissioning provisions | Optional, energy and mining | Consistent across peers |

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Five-step flow for calculating EV/EBITDA in Canadian dollars" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Same date</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Balance sheet at</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">latest quarter-end</text><line x1="134.4" y1="60" x2="149.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Build EV</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Debt, leases,</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">prefs, NCI, cash</text><line x1="278.8" y1="60" x2="293.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">TTM EBITDA</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Operating income</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">+ D&amp;A</text><line x1="423.2" y1="60" x2="438.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Match</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Lease basis, scope,</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">reported vs adj.</text><line x1="567.6" y1="60" x2="582.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">EV/EBITDA</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Both in CAD,</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">closing vs average</text></svg>
<figcaption>Fix the date, build EV, build TTM EBITDA, match the scope and lease basis, then divide with the right exchange rates.</figcaption>
</figure>

## Reported vs adjusted EBITDA

IFRS does not define EBITDA, so every figure you use is either your calculation or a company non-GAAP measure. Under NI 52-112 the company must reconcile its adjusted EBITDA to an IFRS line.

| Version | Build | When to use |
|:--|:--|:--|
| Your reported EBITDA | Operating income + D&A from the statements | Default for comparisons |
| Company "adjusted EBITDA" | Adds back items the company chooses | Only after reading the reconciliation; see [how to read non-GAAP metrics critically](/investing/analyze/read-non-gaap-metrics-critically/) |
| EBITDAaL (after leases) | EBITDA − lease principal and interest | When comparing with US GAAP peers or pre-2019 history |

**EBITDAaL version of the example:** remove lease liabilities from EV (C$4,600M − C$300M = C$4,300M) and subtract annual lease payments from EBITDA (C$600M − C$40M = C$560M). EV/EBITDAaL = 4,300 ÷ 560 = **7.7x**. Here the two views match; when they do not, leases are driving the multiple. The hub's IFRS 16 section explains why.

## Worked example (hypothetical, USD reporter)

| Step | Input | Rate (hypothetical) | CAD value |
|:--|:--|--:|--:|
| 1 | Net debt + other claims at quarter-end: US$900M | Closing 1.39 | C$1,251M |
| 2 | Market cap on the TSX (CAD quote) | n/a | C$2,500M |
| 3 | EV | | C$3,751M |
| 4 | TTM EBITDA: US$350M | Average 1.37 | C$479.5M |
| 5 | **EV/EBITDA** | | **7.8x** |

Balance-sheet claims are stocks measured at a point in time (closing rate); EBITDA is a flow over a year (average rate), as in the P/S and P/FCF worksheets.

## Checklist

| Step | Done when |
|:--|:--|
| Date fixed | All EV items from one quarter-end; market cap from a stated date |
| Diluted market cap | Options and convertibles checked |
| Claims added | Debt, leases (if post-IFRS 16), preferreds, hybrids, NCI |
| Deductions | Cash, equity-accounted investments |
| EBITDA | TTM, reported first, adjusted only with reconciliation |
| Lease basis matched | EV and EBITDA on the same IFRS 16 basis |
| Currency | Closing for balance sheet, average for EBITDA |

## Go deeper

Next, learn the traps in [when EV/EBITDA misleads on TSX stocks](/investing/valuation/when-ev-ebitda-misleads-tsx/), then compare fairly with [EV/EBITDA vs peers](/investing/valuation/ev-ebitda-vs-peers-canada-first-comparison/).

## Related reading

- [How to read debt notes and covenant language](/investing/analyze/read-debt-notes-covenant-language/)
- [How to analyze preferred shares and hybrid capital](/investing/analyze/analyze-preferred-shares-hybrid-capital/)
- [How to read cap tables and fully diluted share counts](/investing/analyze/read-cap-tables-fully-diluted-share-counts/)
- [How to handle currency when analyzing CAD vs USD results](/investing/analyze/handle-currency-cad-vs-usd-results/)

## Sources

- IFRS 16 *Leases*; IAS 28 *Investments in Associates and Joint Ventures*; IFRS 10 *Consolidated Financial Statements* (non-controlling interests).
- IAS 33 *Earnings per Share* (treasury stock method for dilutive options).
- IAS 21 *The Effects of Changes in Foreign Exchange Rates*.
- NI 52-112 *Non-GAAP and Other Financial Measures Disclosure*.

## Media credits

- Hero: "Theodolite Fortepan 79607.jpg" by Fortepan (donor: UVATERV), [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Theodolite_Fortepan_79607.jpg). Cropped and resized to 1280x720. Real photograph of a surveyor using a theodolite in 1950, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
