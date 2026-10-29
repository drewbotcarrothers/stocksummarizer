---
title: "How to Read Non-GAAP Metrics Critically (Adjusted EBITDA and Friends)"
description: "How to read adjusted EBITDA, adjusted EPS, distributable cash flow, AFFO and other non-GAAP measures in Canadian filings: NI 52-112 rules, reconciliations, legitimate vs suspicious adjustments, and a 3-year bridge check."
category: "analyze"
role: "Spoke"
pubDate: 2026-10-29
image: "/images/investing/read-non-gaap-metrics-critically.jpg"
imageAlt: "The dark tower of the Tour de la Bourse, Montreal's Stock Exchange Tower, rising between older buildings in Old Montreal"
imageCredit: "Tour de la Bourse (Stock Exchange Tower), Montréal, September 2015. Photo by Jeangagnon, CC BY-SA 3.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Almost every TSX company reports at least one number that isn't defined by IFRS: **adjusted EBITDA, adjusted EPS, core earnings, distributable cash flow, FFO, AFFO, all-in sustaining cost**. Some of these are genuinely more useful than the IFRS figure. Others exist mainly to make the quarter look better. Your job is to tell the difference.

Educational only — not financial advice. Examples are **hypothetical**.

## Direct answer

Non-GAAP measures are fine **if you read the reconciliation**. Find the bridge from the IFRS number, list every adjustment, and ask: is this truly non-recurring, non-cash, or outside the core business? Track the adjustments over three years. If the same "one-time" items recur, or the gap between adjusted and IFRS keeps widening, discount the adjusted figure.

## What Canadian rules require

National Instrument 52-112 (in force since 2021) sets disclosure rules for non-GAAP and other financial measures in Canadian documents:

| Requirement | What it means for you |
|:--|:--|
| Clear label | The measure must not be called something misleading (e.g. "net income") |
| Equal or less prominence | The IFRS measure must be at least as prominent |
| Reconciliation | A quantitative bridge to the most directly comparable IFRS measure |
| Explanation | Why management thinks the measure is useful |
| Comparative period | Shown for the prior period too |
| Composition | What's included or excluded |

*These protect you only if you use them. The reconciliation is usually in the MD&A, often near the end — see [how to read an MD&A](/investing/analyze/how-to-read-mdna/).*

## The common family of measures

| Measure | Typical users on the TSX | What it tries to show | Watch out for |
|:--|:--|:--|:--|
| Adjusted EBITDA | Pipelines, telecom, industrials | Operating earnings before capital structure | Ignores capex and leases; "adjustments" creep |
| Adjusted EPS / core EPS | Banks, insurers, industrials | Earnings ex one-offs | Recurring "one-offs"; amortization of acquired intangibles excluded |
| Distributable cash flow (DCF) | Midstream | Cash available to pay distributions | Definitions vary between peers |
| FFO / AFFO | REITs | Property cash earnings | AFFO maintenance capex assumptions differ |
| AISC | Gold miners | Cost to sustain production per ounce | Excludes growth capex and some overheads |

Sector context: [midstream](/sectors/midstream-pipelines/), [REITs](/sectors/real-estate-reits/), [gold](/sectors/gold-precious-metals/).

## Rebuild the bridge (hypothetical)

<figure class="diagram">
<svg viewBox="0 0 720 300" role="img" aria-label="Hypothetical bridge from IFRS net income to adjusted EBITDA in millions" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="245" x2="710" y2="245" stroke="#cbd5e1"/><rect x="34" y="196" width="41" height="49" rx="3" fill="#0d9488"/><text x="54" y="188" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">100</text><text x="54" y="264" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Net</text><text x="54" y="278" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">income</text><line x1="74" y1="196" x2="102" y2="196" stroke="#cbd5e1" stroke-dasharray="3 3"/><rect x="102" y="176" width="41" height="20" rx="3" fill="#64748b"/><text x="122" y="168" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+40</text><text x="122" y="271" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Tax</text><line x1="142" y1="176" x2="170" y2="176" stroke="#cbd5e1" stroke-dasharray="3 3"/><rect x="170" y="147" width="41" height="30" rx="3" fill="#64748b"/><text x="190" y="139" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+60</text><text x="190" y="271" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Interest</text><line x1="210" y1="147" x2="238" y2="147" stroke="#cbd5e1" stroke-dasharray="3 3"/><rect x="238" y="97" width="41" height="49" rx="3" fill="#64748b"/><text x="258" y="89" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+100</text><text x="258" y="271" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">D&amp;A</text><line x1="278" y1="97" x2="306" y2="97" stroke="#cbd5e1" stroke-dasharray="3 3"/><rect x="306" y="97" width="41" height="148" rx="3" fill="#0d9488"/><text x="326" y="89" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">300</text><text x="326" y="271" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">EBITDA</text><line x1="346" y1="97" x2="374" y2="97" stroke="#cbd5e1" stroke-dasharray="3 3"/><rect x="374" y="85" width="41" height="12" rx="3" fill="#64748b"/><text x="394" y="77" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+25</text><text x="394" y="264" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Share</text><text x="394" y="278" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">comp</text><line x1="414" y1="85" x2="442" y2="85" stroke="#cbd5e1" stroke-dasharray="3 3"/><rect x="442" y="70" width="41" height="15" rx="3" fill="#64748b"/><text x="462" y="62" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+30</text><text x="462" y="264" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Restruct-</text><text x="462" y="278" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">uring</text><line x1="482" y1="70" x2="510" y2="70" stroke="#cbd5e1" stroke-dasharray="3 3"/><rect x="510" y="63" width="41" height="7" rx="3" fill="#64748b"/><text x="530" y="55" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+15</text><text x="530" y="264" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Acquisition</text><text x="530" y="278" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">costs</text><line x1="550" y1="63" x2="578" y2="63" stroke="#cbd5e1" stroke-dasharray="3 3"/><rect x="578" y="58" width="41" height="5" rx="3" fill="#64748b"/><text x="598" y="50" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+10</text><text x="598" y="264" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Impair-</text><text x="598" y="278" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">ment</text><line x1="618" y1="58" x2="646" y2="58" stroke="#cbd5e1" stroke-dasharray="3 3"/><rect x="646" y="58" width="41" height="187" rx="3" fill="#0d9488"/><text x="666" y="50" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">380</text><text x="666" y="264" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Adjusted</text><text x="666" y="278" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">EBITDA</text></svg>
<figcaption>Hypothetical company, $ millions. EBITDA of 300 becomes &quot;adjusted EBITDA&quot; of 380 — the 80 of adjustments are where your skepticism belongs.</figcaption>
</figure>

| Adjustment | $M | Legitimate? | Question to ask |
|:--|--:|:--|:--|
| Share-based compensation | +25 | **Questionable** | It's a real cost paid in shares — does dilution show up? |
| Restructuring | +30 | Depends | Was there restructuring last year too? And the year before? |
| Acquisition costs | +15 | Depends | Is acquiring companies the strategy? Then it's a business cost |
| Impairment | +10 | Usually yes (non-cash) | But it signals past capital was overpaid |

## Legitimate vs suspicious adjustments

| Usually reasonable to exclude | Be skeptical when excluded |
|:--|:--|
| Gains/losses on asset sales | Restructuring charges that recur every year |
| Non-cash impairments (note them separately) | Stock-based compensation |
| Unrealized FX or derivative mark-to-market | "Integration costs" for a serial acquirer |
| Legal settlements that are truly unusual | Inventory write-downs in a cyclical business |
| Acquisition accounting (for comparability) | Costs labelled "strategic" or "transformation" |

## The 3-year bridge check

| | Year 1 | Year 2 | Year 3 |
|:--|--:|--:|--:|
| IFRS measure | | | |
| Total adjustments | | | |
| Adjustments as % of IFRS measure | | | |
| Same items recurring? | | | |

Fill this for any company you own. A rising percentage is a warning sign even if each adjustment sounds reasonable.

## How this changes your valuation

If you value a company on adjusted EBITDA, the multiple you pay is only as honest as the adjustments. In the hypothetical above, an EV/EBITDA of 10× on adjusted EBITDA (380) becomes about 12.7× on unadjusted EBITDA (300). More in [what EV/EBITDA means for Canadian DIY investors](/investing/valuation/ev-ebitda-for-canadian-diy-investors/). Cash-based cross-checks like [free cash flow](/investing/analyze/free-cash-flow-analysis/) and [P/FCF](/investing/valuation/what-p-fcf-means-canadian-diy/) are harder to adjust away.

## Media credits

- Hero: “Tour de la Bourse Montreal 07.JPG” by Jeangagnon, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Tour_de_la_Bourse_Montreal_07.JPG). Cropped and resized to 1280×720. Real photograph, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
