---
title: "Earnings Yield vs Peers: A Canada-First Comparison Guide"
description: "How to compare earnings yields across TSX peers: normalized EPS, loss-makers kept, the median, and after-tax EBIT ÷ EV, leverage and capex columns that explain the gaps. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-15
image: "/images/investing/earnings-yield-vs-peers-canada-first-comparison.jpg"
imageAlt: "A row of stone and brick houses facing a green lawn in Quebec City under a cloudy sky"
imageCredit: "Quebec City row houses photograph by lovinkat, CC BY 2.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "mixed"
---

A peer table of P/E ratios has two well-known problems: loss-makers drop out (their P/E is undefined) and a single near-zero earner produces a huge multiple that wrecks any average. Earnings yields fix both, which is why this post builds the peer table in yield form and adds the one column P/E tables usually lack: an **after-tax EBIT ÷ EV** yield that shows how much of each peer's earnings yield comes from leverage.

The general peer method (true peers, calendarizing fiscal years, using the median) is in [P/E vs peers: a Canada-first comparison guide](/investing/valuation/pe-vs-peers-canada-first-comparison/); the EPS build is in [how to calculate P/E in CAD from filings](/investing/valuation/calculate-pe-in-cad-from-filings/). The yield-specific worksheet is [how to calculate earnings yield in CAD from filings](/investing/valuation/calculate-earnings-yield-in-cad-from-filings/). It is educational; all figures are hypothetical.

## Direct answer

Rebuild every peer's earnings yield from **normalized** diluted EPS in CAD and the same price date. Rank by yield and compare with the **peer median**; loss-makers stay in the table with a negative yield. Then add **after-tax EBIT ÷ EV**, **net debt ÷ EBITDA** and **capex ÷ depreciation** columns. A peer whose earnings yield sits far above its EBIT ÷ EV yield is cheap partly because it is levered; a peer whose capex far exceeds depreciation has earnings that overstate cash.

## Alignment rules for earnings-yield peer tables

| Rule | Why it matters |
|:--|:--|
| Normalized EPS (mid-cycle or three-year average) for all | Trailing EPS ranks cyclicals by where they are in the cycle |
| Same EPS basis: reported or one consistent adjustment | Company-defined adjusted EPS differs |
| Calendarized to the same twelve months | Fiscal years ending in different months distort growth phases |
| EPS in CAD at the average rate | USD reporters otherwise look expensive |
| Loss-makers kept, flagged | Dropping them flatters the median |
| Same tax treatment in the EBIT yield | Pre-tax vs after-tax mixing creates fake gaps |

## Peer table (hypothetical, normalized)

| Company | Earnings yield | Equivalent P/E | After-tax EBIT ÷ EV | Net debt ÷ EBITDA | Capex ÷ depreciation |
|:--|--:|--:|--:|--:|--:|
| Your company | 6.5% | 15.4x | 5.5% | 1.5x | 1.1x |
| Peer A | 5.5% | 18.2x | 5.0% | 1.0x | 1.0x |
| Peer B | 7.0% | 14.3x | 5.0% | 3.5x | 1.2x |
| Peer C | 4.5% | 22.2x | 4.8% | 0.0x | 1.9x |
| Peer D | 9.0% | 11.1x | 5.4% | 4.2x | 0.8x |
| Peer E (loss-making) | −2.0% | n/m | −0.5% | 2.0x | 1.5x |
| **Peer median (A–D)** | **6.25%** | | | | |

Peer E stays in the table so the group view is honest, but it is excluded from the median because a loss-maker's yield measures the size of the loss, not a price. The median of the four profitable peers is 6.25%.

<figure class="diagram">
<svg viewBox="0 0 720 240" role="img" aria-label="Hypothetical normalized earnings yields for five peers with the peer median marked" xmlns="http://www.w3.org/2000/svg"><text x="240" y="47" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer C</text><rect x="250" y="30" width="175.909" height="24" rx="4" fill="#0d9488"/><text x="433.909" y="47" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">4.5%</text><text x="240" y="81" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer A</text><rect x="250" y="64" width="215" height="24" rx="4" fill="#0d9488"/><text x="473" y="81" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">5.5%</text><text x="240" y="115" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Your company</text><rect x="250" y="98" width="254.091" height="24" rx="4" fill="#f59e0b"/><text x="512.091" y="115" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">6.5%</text><text x="240" y="149" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer B</text><rect x="250" y="132" width="273.636" height="24" rx="4" fill="#0d9488"/><text x="531.636" y="149" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">7.0%</text><text x="240" y="183" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer D</text><rect x="250" y="166" width="351.818" height="24" rx="4" fill="#0d9488"/><text x="609.818" y="183" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">9.0%</text><line x1="494.318" y1="22" x2="494.318" y2="200" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5 4"/><text x="494.318" y="218" font-size="11.5" font-weight="700" fill="#b45309" text-anchor="middle" font-family="system-ui, sans-serif">Peer median 6.25%</text></svg>
<figcaption>Hypothetical: normalized earnings yields for the profitable peers with the 6.25% median marked. Peer D looks cheapest on this view alone.</figcaption>
</figure>

## The leverage check

Earnings yield is measured after interest, so debt raises it: shareholders get more earnings per dollar of share price because lenders funded part of the business. The after-tax EBIT ÷ EV yield removes that effect.

<figure class="diagram">
<svg viewBox="0 0 720 340" role="img" aria-label="Hypothetical scatter of after-tax EBIT to enterprise value against earnings yield; points far above the line get their high earnings yield from leverage" xmlns="http://www.w3.org/2000/svg"><line x1="80" y1="280" x2="690" y2="280" stroke="#e2e8f0"/><text x="72" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">3%</text><line x1="80" y1="244.286" x2="690" y2="244.286" stroke="#e2e8f0"/><text x="72" y="248.286" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">4%</text><line x1="80" y1="208.571" x2="690" y2="208.571" stroke="#e2e8f0"/><text x="72" y="212.571" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">5%</text><line x1="80" y1="172.857" x2="690" y2="172.857" stroke="#e2e8f0"/><text x="72" y="176.857" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">6%</text><line x1="80" y1="137.143" x2="690" y2="137.143" stroke="#e2e8f0"/><text x="72" y="141.143" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">7%</text><line x1="80" y1="101.429" x2="690" y2="101.429" stroke="#e2e8f0"/><text x="72" y="105.429" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">8%</text><line x1="80" y1="65.7143" x2="690" y2="65.7143" stroke="#e2e8f0"/><text x="72" y="69.7143" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">9%</text><line x1="80" y1="30" x2="690" y2="30" stroke="#e2e8f0"/><text x="72" y="34" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">10%</text><text x="80" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">3%</text><text x="167.143" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">4%</text><text x="254.286" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">5%</text><text x="341.429" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">6%</text><text x="428.571" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">7%</text><text x="515.714" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">8%</text><text x="602.857" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">9%</text><text x="690" y="298" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">10%</text><line x1="80" y1="280" x2="690" y2="280" stroke="#475569"/><line x1="80" y1="280" x2="690" y2="30" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 4"/><text x="686" y="22" font-size="11" font-weight="600" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">Same yield either way</text><circle cx="254.286" cy="190.714" r="7" fill="#0d9488"/><text x="265.286" y="194.714" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Peer A</text><circle cx="254.286" cy="137.143" r="7" fill="#0d9488"/><text x="265.286" y="141.143" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Peer B</text><circle cx="236.857" cy="226.429" r="7" fill="#0d9488"/><text x="247.857" y="230.429" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Peer C</text><circle cx="289.143" cy="65.7143" r="7" fill="#0d9488"/><text x="300.143" y="69.7143" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Peer D</text><circle cx="297.857" cy="155" r="7" fill="#f59e0b"/><text x="308.857" y="159" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Your company</text><text x="385" y="320" font-size="12" font-weight="600" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">After-tax EBIT ÷ EV (%)</text><text x="18" y="155" font-size="12" font-weight="600" fill="#0f172a" text-anchor="middle" transform="rotate(-90 18 155)" font-family="system-ui, sans-serif">Earnings yield (%)</text></svg>
<figcaption>Hypothetical: on an after-tax EBIT ÷ EV basis the peers are bunched between 4.8% and 5.5%. Peer B and Peer D sit far above the line: most of their earnings-yield advantage comes from leverage, not a lower price for the business.</figcaption>
</figure>

| Peer | Earnings yield − after-tax EBIT ÷ EV | Read |
|:--|--:|:--|
| Your company | 1.0 pt | Modest leverage effect |
| Peer A | 0.5 pt | Little debt, little effect |
| Peer B | 2.0 pts | Leverage explains most of the gap to the median |
| Peer C | −0.3 pt | Net cash; earnings yield slightly below EBIT yield |
| Peer D | 3.6 pts | High leverage and under-investment; not a clean discount |

On the business-level yield, your company (5.5%) is at the top of a tight range. That is a cleaner signal than its earnings yield rank.

## Canada-first issues

| Issue | What to do |
|:--|:--|
| Few TSX peers in a sector | Add US peers, with US GAAP lease cost and tax rates aligned; see [comparing a TSX stock to its US peer](/investing/valuation/compare-tsx-stock-to-us-peer/) |
| Resource issuers at different cycle points | Normalize EPS over the cycle before ranking |
| Insurers and banks | Use [P/B and ROE](/investing/valuation/valuing-canadian-banks-pb-roe/) instead; EBIT ÷ EV does not apply |
| Holding companies | Compare on NAV; see [what Price/NAV means](/investing/valuation/what-price-nav-means-canadian-diy/) |
| Different tax rates across provinces and countries | Use after-tax EBIT with each peer's normalized rate, flagged |

## Checklist

| Step | Done when |
|:--|:--|
| Peers chosen | Same business model, reasons written |
| EPS normalized | Same window and basis for all |
| Currency aligned | CAD at average rates |
| Yields ranked | Loss-makers kept and flagged |
| Median used | Profitable peers only |
| Leverage check | After-tax EBIT ÷ EV and net debt ÷ EBITDA added |
| Investment check | Capex ÷ depreciation added |
| Gap explained | One sentence: price, leverage or investment? |

## Go deeper

Building a six-company table with normalized EPS and enterprise values is faster on a broker platform that exports multi-year financials; compare options in [how to compare Canadian discount brokers](/investing/brokers-tools/compare-canadian-discount-brokers/). Then turn the comparison into a price range with [how to use earnings yield in a simple valuation checklist](/investing/valuation/use-earnings-yield-simple-valuation-checklist/).

## Related reading

- [What earnings yield means for Canadian DIY investors](/investing/valuation/what-earnings-yield-means-canadian-diy/)
- [When earnings yield misleads on TSX stocks](/investing/valuation/when-earnings-yield-misleads-tsx/)
- [EV/EBITDA vs peers](/investing/valuation/ev-ebitda-vs-peers-canada-first-comparison/)
- [How to compare two TSX peers side by side](/investing/analyze/compare-two-tsx-peers/)

## Sources

- IAS 33 *Earnings per Share*; IAS 21 *The Effects of Changes in Foreign Exchange Rates*.
- IFRS 16 *Leases*; FASB ASC 842 *Leases* (US peers); IAS 12 *Income Taxes*.
- Greenblatt, J. (2005). *The Little Book That Beats the Market* (EBIT ÷ enterprise value).

## Media credits

- Hero: "Quebec CIty row houses (8990226083).jpg" by lovinkat, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Quebec_CIty_row_houses_(8990226083).jpg). Cropped and resized to 1280x720. Real photograph of row houses in Quebec City, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
