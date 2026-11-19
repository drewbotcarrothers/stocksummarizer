---
title: "How to Use Historical Multiple Ranges Without Anchoring Blindly"
description: "How to build percentile bands on a TSX stock's own P/E history, cut them at regime breaks, turn them into prices and avoid anchoring. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-19
image: "/images/investing/historical-multiple-ranges-without-anchoring.jpg"
imageAlt: "A black-and-white 1913 postcard view of the stone Royal Canadian Mint building in Ottawa above a rock embankment"
imageCredit: "1913 postcard of the Royal Canadian Mint, Ottawa, from Community Archives, public domain, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "mixed"
---

"It is cheap versus its own history" is one of the most common lines in stock research, and one of the easiest to misuse. A company's past valuation range is useful context: it tells you how the market has priced this business through good and bad years. It becomes a trap when the history is measured badly, spans a business that has changed, or turns into an anchor that replaces thinking about the business today.

This post is the how-to: building percentile bands on a company's own multiple history, cutting them at real breaks, and turning them into a range of prices. Why multiples sometimes never return to old levels is covered in [mean reversion myths in valuation multiples](/investing/valuation/mean-reversion-myths-valuation-multiples/). It is educational; all figures are hypothetical.

## Direct answer

Collect **five to ten years of monthly multiples** (P/E, EV/EBITDA or whatever fits the sector), make sure the **denominator is clean**, **split the history at real regime breaks**, then compute **percentile bands** (10th, 25th, median, 75th, 90th) and see where today sits. Use the median rather than the mean, use bands rather than a single average, and always explain **why** the stock is where it is in its range before calling it cheap or expensive.

## The five steps

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Five-step process for building historical multiple bands" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Collect</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif"> 5–10 yrs of</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">monthly P/E</text><line x1="134.4" y1="60" x2="149.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Clean</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Fix the EPS</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">denominator</text><line x1="278.8" y1="60" x2="293.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Split</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Cut at real</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">regime breaks</text><line x1="423.2" y1="60" x2="438.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Band</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">p10, p25, p50,</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">p75, p90</text><line x1="567.6" y1="60" x2="582.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Explain</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Why is it</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">there today?</text></svg>
<figcaption>Build bands in five steps. The "Explain" step is what stops a percentile from becoming an anchor.</figcaption>
</figure>

| Step | What to do | Common mistake |
|:--|:--|:--|
| Collect | Month-end price and the matching multiple for 60–120 months | Using a handful of year-end points |
| Clean | Use [normalized EPS](/investing/valuation/what-normalized-eps-means-canadian-diy/) or adjusted EBITDA consistently; drop or flag months with negative or tiny denominators | Including a year when EPS collapsed, which produces a 60x spike |
| Split | Cut the series where the business or accounting changed (major acquisition, divestiture, IFRS 16, a new reporting currency) | Blending two different companies into one average |
| Band | Compute p10, p25, p50, p75, p90 | Using the mean, which outliers distort |
| Explain | List what is different today vs the band's history | Treating a low percentile as a buy signal by itself |

## Full history vs post-break history

Imagine a company that made a large acquisition five years ago, adding a lower-margin, slower-growth division.

| Hypothetical P/E percentiles | Full 10 years | Post-acquisition (5 years) |
|:--|--:|--:|
| 10th percentile | 11.8x | 9.5x |
| 25th percentile | 13.5x | 10.8x |
| Median | 15.2x | 12.0x |
| 75th percentile | 17.0x | 13.4x |
| 90th percentile | 19.1x | 14.6x |
| **Today: 12.9x sits at about the** | **20th percentile** | **68th percentile** |

<figure class="diagram">
<svg viewBox="0 0 720 234" role="img" aria-label="Hypothetical percentile bands of a company’s P/E over the full ten years and after a business change, with today’s multiple" xmlns="http://www.w3.org/2000/svg"><line x1="230" y1="22" x2="230" y2="174" stroke="#e2e8f0"/><text x="230" y="190" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">8x</text><line x1="306.667" y1="22" x2="306.667" y2="174" stroke="#e2e8f0"/><text x="306.667" y="190" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">10x</text><line x1="383.333" y1="22" x2="383.333" y2="174" stroke="#e2e8f0"/><text x="383.333" y="190" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">12x</text><line x1="460" y1="22" x2="460" y2="174" stroke="#e2e8f0"/><text x="460" y="190" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">14x</text><line x1="536.667" y1="22" x2="536.667" y2="174" stroke="#e2e8f0"/><text x="536.667" y="190" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">16x</text><line x1="613.333" y1="22" x2="613.333" y2="174" stroke="#e2e8f0"/><text x="613.333" y="190" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">18x</text><line x1="690" y1="22" x2="690" y2="174" stroke="#e2e8f0"/><text x="690" y="190" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">20x</text><text x="220" y="47" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Full 10 yrs, p10–p90</text><rect x="375.667" y="30" width="279.833" height="24" rx="4" fill="#0d9488"/><text x="370.667" y="47" font-size="11" font-weight="700" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">11.8x</text><text x="660.5" y="47" font-size="11" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">19.1x</text><text x="220" y="83" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Full 10 yrs, p25–p75</text><rect x="440.833" y="66" width="134.167" height="24" rx="4" fill="#0d9488"/><text x="435.833" y="83" font-size="11" font-weight="700" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">13.5x</text><text x="580" y="83" font-size="11" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">17x</text><text x="220" y="119" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Post-break, p10–p90</text><rect x="287.5" y="102" width="195.5" height="24" rx="4" fill="#f59e0b"/><text x="282.5" y="119" font-size="11" font-weight="700" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">9.5x</text><text x="488" y="119" font-size="11" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">14.6x</text><text x="220" y="155" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Post-break, p25–p75</text><rect x="337.333" y="138" width="99.6667" height="24" rx="4" fill="#f59e0b"/><text x="332.333" y="155" font-size="11" font-weight="700" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">10.8x</text><text x="442" y="155" font-size="11" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">13.4x</text><line x1="417.833" y1="22" x2="417.833" y2="174" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 4"/><text x="417.833" y="208" font-size="11.5" font-weight="700" fill="#dc2626" text-anchor="middle" font-family="system-ui, sans-serif">Today 12.9x</text></svg>
<figcaption>Hypothetical: on the full ten-year history, 12.9x looks cheap. On the history of the business as it exists now, it sits in the upper half of its range.</figcaption>
</figure>

Same stock, same price, opposite conclusions. The post-acquisition window is shorter and noisier, so you would treat it with care, but it describes the company you would actually be buying.

## Turning bands into prices

Multiply the bands you trust by a forward EPS you believe in. Using the post-break bands and a hypothetical forward EPS of $3.10:

| Band | P/E | Implied price |
|:--|--:|--:|
| 25th percentile | 10.8x | $33.48 |
| Median | 12.0x | $37.20 |
| Today | 12.9x | $40.00 |
| 75th percentile | 13.4x | $41.54 |

This gives a historical-multiple range of roughly $33 to $42, with today's price near the upper part of it. That range is one input into a [fair value range](/investing/valuation/fair-value-ranges-instead-of-price-targets/), alongside peer multiples and a cash flow check, not a target on its own.

## How to avoid anchoring blindly

| Anchor trap | Better habit |
|:--|:--|
| "It used to trade at 18x" | Ask what returns, growth and rates looked like when it did |
| Only checking one multiple | Check two that fit the business (for example P/E and EV/EBITDA) and see if they agree |
| Using the all-time high as "fair" | Use the median of a relevant window |
| Ignoring the rate backdrop | Note whether the history was set in a low-rate period; see [interest rates and multiples](/investing/valuation/interest-rates-change-justified-multiples/) |
| Ignoring EPS quality | A low P/E on peak earnings is not low; see [when P/E misleads](/investing/valuation/when-pe-misleads-tsx/) |
| Stopping at the percentile | Write one sentence on why the market is pricing it there |

Anchoring is one of the best-documented biases in decision-making; for more on how it shows up in stock picking, see [behavioural biases for stock pickers](/investing/process/behavioural-biases-stock-pickers/).

## Where to get the data

Free charting tools and many brokerage research platforms show historical P/E and EV/EBITDA, but check how they define EPS (trailing GAAP, adjusted or forward) and whether they adjust for currency. Building your own from annual reports and month-end prices is slower but lets you control the denominator. See [how to use library tools for free deep company data](/investing/analyze/use-library-tools-free-deep-company-data/).

## Go deeper

To see how much of a stock's past return came from multiple expansion, read [how to spot multiple expansion hopes vs earnings growth](/investing/valuation/multiple-expansion-hopes-vs-earnings-growth/). To compare against peers instead of history, read [comparable company analysis for Canadian sectors](/investing/valuation/comparable-company-analysis-canadian-sectors/).

## Related reading

- [How to use P/E in a simple valuation checklist](/investing/valuation/use-pe-simple-valuation-checklist/)
- [How to use normalized EPS in a simple valuation checklist](/investing/valuation/use-normalized-eps-simple-valuation-checklist/)
- [How to use peer tables without cherry-picking](/investing/analyze/use-peer-tables-without-cherry-picking/)
- [How to adjust valuation multiples for IFRS quirks](/investing/valuation/adjust-multiples-ifrs-quirks/)

## Sources

- Tversky, A. and Kahneman, D. (1974), "Judgment under Uncertainty: Heuristics and Biases," *Science* 185(4157).
- Damodaran, A., *Investment Valuation* (Wiley), chapters on relative valuation over time.

## Media credits

- Hero: "379. The Royal Canadian Mint, Ottawa, Ont, 1913 (28742715090).jpg" by Community Archives, public domain, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:379._The_Royal_Canadian_Mint,_Ottawa,_Ont,_1913_(28742715090).jpg). Cropped and resized to 1280x720. Real photograph of the Royal Canadian Mint in Ottawa in 1913 (scanned postcard), not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
