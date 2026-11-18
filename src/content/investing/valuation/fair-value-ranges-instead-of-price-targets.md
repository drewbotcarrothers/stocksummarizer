---
title: "How to Think About Fair Value Ranges Instead of Price Targets"
description: "Why a fair value range beats a single price target: a football field of methods, probability-weighted scenarios, action zones and what should move the range. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-18
image: "/images/investing/fair-value-ranges-instead-of-price-targets.jpg"
imageAlt: "The neoclassical columned facade of the former Montreal Stock Exchange building on Saint-François-Xavier Street in Old Montreal"
imageCredit: "Former Montreal Stock Exchange building photograph by Jeangagnon, CC BY-SA 3.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

A price target is a single number: "fair value $47." It looks precise and it is easy to quote, which is why headlines use them. But every valuation input (growth, margins, the required return, the multiple a market will pay) is uncertain, and a single number hides how uncertain. A fair value **range** shows it, and it leads to better decisions about when to buy, hold or trim.

This post shows how to build a range from several methods, how to weight scenarios, and how to turn the range into action zones. It ties together the checklists in this valuation series and the method in [triangulating multiples, DCF and peer checks](/investing/valuation/triangulating-multiples-dcf-peer-checks/). It is educational; all figures are hypothetical.

## Direct answer

(1) Value the company with **two to four methods** suited to its business. (2) Give each method a **range** from bear to bull assumptions, not a point. (3) Plot them together (a "football field") and find the **overlap**. (4) Optionally, **probability-weight** bear, base and bull scenarios. (5) Set **action zones**: a price well below the range where you would buy, the overlap where you hold, and a price above the range where you would trim or re-check your thesis. (6) Write down what would move the range, and update it when that happens, not when the price moves.

## Why a single target misleads

| Feature of a price target | Problem |
|:--|:--|
| One number | Hides the spread of reasonable outcomes |
| Usually a 12-month horizon | Mixes valuation with a guess about short-term sentiment |
| Often revised after the price moves | Can follow the price instead of the business |
| Rarely shows assumptions | You cannot tell which input drives it |
| Consensus averages targets | Averages can hide wide disagreement between analysts |

Analyst targets can still be useful as information about what others assume. Read them as one input; see [how to triangulate filings, sell-side notes and your own model](/investing/analyze/triangulate-filings-sell-side-notes-own-model/).

## Step 1 to 3: a football field

For a hypothetical TSX industrial company priced at $44.00:

| Method (hypothetical) | Bear | Bull | Notes |
|:--|--:|--:|:--|
| DCF, three scenarios | $38 | $55 | Range mainly from margin and discount rate; see [simple DCF](/investing/valuation/simple-dcf-without-fake-precision/) |
| Peer EV/EBITDA, interquartile range | $40 | $50 | See [comparable company analysis](/investing/valuation/comparable-company-analysis-canadian-sectors/) |
| P/E vs the company's own 10-year range | $36 | $52 | Anchored on normalized EPS |
| Dividend discount model | $42 | $58 | Sensitive to r − g; see [DDM fit and fail](/investing/valuation/dividend-discount-models-tsx-income-names/) |
| **Overlap of all four** | **$42** | **$50** | |

<figure class="diagram">
<svg viewBox="0 0 720 270" role="img" aria-label="Hypothetical football-field chart of fair value ranges from four methods, with the overlap zone and today’s share price" xmlns="http://www.w3.org/2000/svg"><rect x="387.714" y="20" width="105.143" height="190" fill="#fde68a" opacity="0.45"/><line x1="230" y1="22" x2="230" y2="210" stroke="#e2e8f0"/><text x="230" y="226" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$30</text><line x1="295.714" y1="22" x2="295.714" y2="210" stroke="#e2e8f0"/><text x="295.714" y="226" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$35</text><line x1="361.429" y1="22" x2="361.429" y2="210" stroke="#e2e8f0"/><text x="361.429" y="226" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$40</text><line x1="427.143" y1="22" x2="427.143" y2="210" stroke="#e2e8f0"/><text x="427.143" y="226" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$45</text><line x1="492.857" y1="22" x2="492.857" y2="210" stroke="#e2e8f0"/><text x="492.857" y="226" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$50</text><line x1="558.571" y1="22" x2="558.571" y2="210" stroke="#e2e8f0"/><text x="558.571" y="226" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$55</text><line x1="624.286" y1="22" x2="624.286" y2="210" stroke="#e2e8f0"/><text x="624.286" y="226" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$60</text><line x1="690" y1="22" x2="690" y2="210" stroke="#e2e8f0"/><text x="690" y="226" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$65</text><text x="220" y="47" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">DCF (3 scenarios)</text><rect x="335.143" y="30" width="223.429" height="24" rx="4" fill="#0d9488"/><text x="330.143" y="47" font-size="11" font-weight="700" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">$38</text><text x="563.571" y="47" font-size="11" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">$55</text><text x="220" y="83" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer EV/EBITDA (IQR)</text><rect x="361.429" y="66" width="131.429" height="24" rx="4" fill="#0d9488"/><text x="356.429" y="83" font-size="11" font-weight="700" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">$40</text><text x="497.857" y="83" font-size="11" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">$50</text><text x="220" y="119" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Own P/E history</text><rect x="308.857" y="102" width="210.286" height="24" rx="4" fill="#0d9488"/><text x="303.857" y="119" font-size="11" font-weight="700" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">$36</text><text x="524.143" y="119" font-size="11" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">$52</text><text x="220" y="155" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Dividend discount</text><rect x="387.714" y="138" width="210.286" height="24" rx="4" fill="#0d9488"/><text x="382.714" y="155" font-size="11" font-weight="700" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">$42</text><text x="603" y="155" font-size="11" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">$58</text><text x="220" y="191" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Bear to bull scenarios</text><rect x="282.571" y="174" width="341.714" height="24" rx="4" fill="#f59e0b"/><text x="277.571" y="191" font-size="11" font-weight="700" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">$34</text><text x="629.286" y="191" font-size="11" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">$60</text><line x1="414" y1="22" x2="414" y2="210" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 4"/><text x="414" y="244" font-size="11.5" font-weight="700" fill="#dc2626" text-anchor="middle" font-family="system-ui, sans-serif">Price today $44</text></svg>
<figcaption>Hypothetical football field: four methods overlap between $42 and $50 (shaded). The $44 share price sits inside the overlap.</figcaption>
</figure>

The overlap is not the "answer," but it is where several independent approaches agree. If one method sits far outside the others, find out why before averaging it in; the gap is usually an assumption you have not made consistent.

## Step 4: probability-weighted value

| Scenario (hypothetical) | What happens | Value | Probability | Weighted |
|:--|:--|--:|--:|--:|
| Bear | Margins return to trough, multiple compresses | $34 | 25% | $8.50 |
| Base | Margins hold, mid-single-digit growth | $46 | 50% | $23.00 |
| Bull | New contracts lift growth and margins | $60 | 25% | $15.00 |
| **Expected value** | | | | **$46.50** |

The expected value of $46.50 is only 6% above the $44.00 price, while the bear case is 23% below it. That asymmetry, not the single expected value, is what matters for position sizing. Writing the scenario descriptions in words forces you to say what each case requires; [stress-testing a thesis in a recession scenario](/investing/analyze/stress-test-stock-thesis-recession-scenario/) helps with the bear case.

## Step 5: action zones

<figure class="diagram">
<svg viewBox="0 0 720 190" role="img" aria-label="Hypothetical action zones built from a fair value range instead of a single price target" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#0d9488" stroke-width="2"/><rect x="10" y="10" width="164.5" height="36" rx="12" fill="#0d9488"/><rect x="10" y="34" width="164.5" height="12" fill="#0d9488"/><text x="92.25" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Below $38</text><text x="92.25" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Margin of safety</text><text x="92.25" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">vs the overlap;</text><text x="92.25" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">add if thesis</text><text x="92.25" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">intact</text><rect x="188.5" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#0ea5e9" stroke-width="2"/><rect x="188.5" y="10" width="164.5" height="36" rx="12" fill="#0ea5e9"/><rect x="188.5" y="34" width="164.5" height="12" fill="#0ea5e9"/><text x="270.75" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">$38 to $42</text><text x="270.75" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Lower edge;</text><text x="270.75" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">fine to start</text><text x="270.75" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">a small</text><text x="270.75" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">position</text><rect x="367" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/><rect x="367" y="10" width="164.5" height="36" rx="12" fill="#f59e0b"/><rect x="367" y="34" width="164.5" height="12" fill="#f59e0b"/><text x="449.25" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">$42 to $50</text><text x="449.25" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Inside the</text><text x="449.25" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">overlap: hold,</text><text x="449.25" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">do nothing</text><text x="449.25" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">new</text><rect x="545.5" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#dc2626" stroke-width="2"/><rect x="545.5" y="10" width="164.5" height="36" rx="12" fill="#dc2626"/><rect x="545.5" y="34" width="164.5" height="12" fill="#dc2626"/><text x="627.75" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Above $50</text><text x="627.75" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Needs bull case;</text><text x="627.75" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">trim or check</text><text x="627.75" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">what you</text><text x="627.75" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">are missing</text></svg>
<figcaption>Hypothetical action zones built from the range: buy with a margin of safety below $38, start small to $42, hold inside the $42–$50 overlap, and re-check or trim above $50.</figcaption>
</figure>

| Zone (hypothetical) | Price | What you do | Why |
|:--|:--|:--|:--|
| Margin of safety | Below $38 | Buy or add, if the thesis is intact | Below every method's low end except the bear scenario |
| Lower edge | $38–$42 | Start a small position | Below the overlap |
| Fair range | $42–$50 | Hold; do nothing new | Inside the overlap |
| Above range | Above $50 | Re-check the thesis; consider trimming | Requires bull-case assumptions |

Zones translate valuation into decisions without pretending to know the exact value. They also fit with [position sizing for DIY stock pickers](/investing/process/position-sizing-diy-stock-pickers/) and [documenting sell criteria before you buy](/investing/process/document-sell-criteria-before-you-buy/).

## Step 6: what moves the range

| Event | Effect on the range |
|:--|:--|
| Quarterly results change your margin or growth view | Update the scenarios that depend on it |
| Interest rates move a lot | Revisit the required return; see what each 0.5 point does |
| Peers re-rate | Update the comps range, but ask whether the group was mispriced |
| Share price moves with no news | No change; this is the point of a range |
| A thesis kill criterion is hit | Rebuild from scratch; see [thesis, catalyst, kill criteria](/investing/frameworks/thesis-catalyst-kill-criteria-card/) |

## A one-line summary for your notes

"Fair value range $42–$50 (overlap of DCF, comps, P/E history, DDM); expected value $46.50; bear $34. At $44: hold. Add below $38; review above $50. Key inputs: margin and required return." Put it in the valuation block of your [stock brief](/investing/analyze/stock-brief-template-bull-bear-watch/).

## Go deeper

Every checklist in this series ends in a bear / base / bull range that feeds this step; for example [how to use owner earnings in a simple valuation checklist](/investing/valuation/use-owner-earnings-simple-valuation-checklist/) and [how to use EV/EBITDA in a simple valuation checklist](/investing/valuation/use-ev-ebitda-simple-valuation-checklist/). For the distinction between relative and intrinsic methods, see [relative vs intrinsic valuation](/investing/valuation/relative-vs-intrinsic-valuation/).

## Related reading

- [Framework: Bull / Bear / Watch decision card](/investing/frameworks/bull-bear-watch-decision-card/)
- [Behavioural biases for stock pickers](/investing/process/behavioural-biases-stock-pickers/)
- [How to track a stock thesis over multiple quarters](/investing/analyze/track-stock-thesis-over-quarters/)
- [How to use normalized EPS in a simple valuation checklist](/investing/valuation/use-normalized-eps-simple-valuation-checklist/)

## Sources

- Graham, B., *The Intelligent Investor* (revised ed., HarperCollins), on margin of safety.
- Damodaran, A., *Narrative and Numbers* (Columbia Business School Publishing), on scenarios and ranges in valuation.
- CFA Institute, *Equity Asset Valuation*, on combining valuation methods.

## Media credits

- Hero: "Montreal Stock Exchange 02.jpg" by Jeangagnon, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Montreal_Stock_Exchange_02.jpg). Cropped and resized to 1280x720. Real photograph of the former Montreal Stock Exchange building in Old Montreal, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
