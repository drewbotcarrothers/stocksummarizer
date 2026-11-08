---
title: "How to Handle Currency When Analyzing CAD vs USD Results"
description: "How to separate currency effects from business performance in CAD vs USD results: translation vs transaction exposure, FX sensitivity tables, hedges and constant-currency growth. Educational, not advice."
category: "analyze"
role: "Spoke"
pubDate: 2026-11-08
image: "/images/investing/handle-currency-cad-vs-usd-results.jpg"
imageAlt: "Canadian and US flags flying on poles against a clear blue sky at Niagara"
imageCredit: "Canadian and US flags photograph by VillageHero, CC BY-SA 2.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

A Canadian company with US operations can post a great quarter just because the loonie weakened, or a disappointing one because it strengthened. If you don't separate the currency effect from the business, you'll misread both. This post is a practical workflow for reading **CAD vs USD results**.

Educational only, not financial advice. It complements [geographic revenue mix](/investing/analyze/analyze-geographic-revenue-mix-canadian-multinationals/) (where the sales come from) and [dual-listed Canadian stocks](/investing/analyze/research-dual-listed-canadian-stocks/) (which quote line to use). This post covers how FX changes the reported numbers.

## Direct answer

First, find the **presentation currency** (what the statements are reported in) and the **functional currency** of the main operations. Next, map revenue and costs by currency. Then look for the MD&A's FX sensitivity disclosure (for example, the effect of a one-cent move in USD/CAD) and the hedging policy. When the company reports **constant-currency** growth, use it alongside reported growth, but remember it's a non-GAAP measure and check the reconciliation. Record both in your notes so a currency swing doesn't look like an operating trend.

<figure class="diagram">
<svg viewBox="0 0 720 142" role="img" aria-label="Hypothetical revenue vs cost currency mix showing a natural mismatch" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="8" width="14" height="14" rx="3" fill="#0d9488"/><text x="30" y="19" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">USD</text><rect x="63.8" y="8" width="14" height="14" rx="3" fill="#94a3b8"/><text x="83.8" y="19" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">CAD</text><rect x="117.6" y="8" width="14" height="14" rx="3" fill="#f59e0b"/><text x="137.6" y="19" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Other</text><text x="180" y="59" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Revenue by currency</text><rect x="190.0" y="40" width="357.0" height="28" fill="#0d9488"/><text x="368.5" y="58.5" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">70%</text><rect x="547.0" y="40" width="127.5" height="28" fill="#94a3b8"/><text x="610.75" y="58.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">25%</text><rect x="674.5" y="40" width="25.5" height="28" fill="#f59e0b"/><text x="180" y="105" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Costs by currency</text><rect x="190.0" y="86" width="178.5" height="28" fill="#0d9488"/><text x="279.25" y="104.5" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">35%</text><rect x="368.5" y="86" width="306.0" height="28" fill="#94a3b8"/><text x="521.5" y="104.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">60%</text><rect x="674.5" y="86" width="25.5" height="28" fill="#f59e0b"/></svg>
<figcaption>Hypothetical. 70% of revenue in USD but 60% of costs in CAD, so a weaker CAD widens margins and a stronger CAD squeezes them.</figcaption>
</figure>

## Translation vs transaction exposure

| Type | What happens | Where it shows up | Investor question |
|:--|:--|:--|:--|
| Translation | Foreign subsidiaries' results converted into the presentation currency | Revenue/earnings growth; OCI for net assets | Is growth real or a currency effect? |
| Transaction | Sales or costs billed in a different currency than the entity's own | Margins; FX gains/losses in P&L | Does a CAD move change profitability? |
| Balance sheet | USD debt or cash held by a CAD-functional entity | FX gains/losses; leverage ratios | Does leverage jump when CAD weakens? |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical split of reported growth into FX effect and constant-currency growth" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0%</text><line x1="70" y1="208" x2="710" y2="208" stroke="#e2e8f0"/><text x="62" y="212" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">2%</text><line x1="70" y1="166" x2="710" y2="166" stroke="#e2e8f0"/><text x="62" y="170" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">4%</text><line x1="70" y1="124" x2="710" y2="124" stroke="#e2e8f0"/><text x="62" y="128" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">6%</text><line x1="70" y1="82" x2="710" y2="82" stroke="#e2e8f0"/><text x="62" y="86" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">8%</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">10%</text><rect x="147" y="61" width="60" height="189" rx="3" fill="#0d9488"/><text x="176.667" y="55" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">9%</text><text x="176.667" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Reported growth</text><rect x="360" y="166" width="60" height="84" rx="3" fill="#0d9488"/><text x="390" y="160" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">4%</text><text x="390" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">FX effect</text><rect x="573" y="145" width="60" height="105" rx="3" fill="#0d9488"/><text x="603.333" y="139" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">5%</text><text x="603.333" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Constant-currency growth</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Percent</text></svg>
<figcaption>Hypothetical. Nine points of reported growth, of which four came from a weaker CAD translating USD sales. The underlying growth was five.</figcaption>
</figure>

## Where to find FX information

| Disclosure | Typical location | Use it for |
|:--|:--|:--|
| Functional / presentation currency | Significant accounting policies note | Knowing which way the effect runs |
| FX sensitivity | MD&A risk section or financial instruments note (IFRS 7) | Size of the effect per unit of FX move |
| Average and closing rates used | MD&A or notes | Recreating the translation |
| Hedging programme | Financial instruments note; hedge accounting (IFRS 9) | How much of next year is locked in |
| Constant-currency KPIs | MD&A, press release (non-GAAP) | Underlying growth, after checking the [non-GAAP reconciliation](/investing/analyze/read-non-gaap-metrics-critically/) |

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Five-step currency workup for a Canadian issuer" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="12.9" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Find currencies</text><text x="71.2" y="69" font-size="10.9" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Presentation &amp;</text><text x="71.2" y="83" font-size="10.9" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">functional (IAS 21)</text><line x1="134.4" y1="60" x2="151.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Map exposure</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Revenue vs cost</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">currency mix</text><line x1="278.8" y1="60" x2="295.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="12.1" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Find sensitivity</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">MD&amp;A FX table</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">or note</text><line x1="423.2" y1="60" x2="440.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Check hedges</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Forwards, natural</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">hedges, debt</text><line x1="567.6" y1="60" x2="584.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="12.1" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Adjust your view</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Constant-currency</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">KPIs in your log</text></svg>
<figcaption>Do this once per holding, then update it only when the mix or hedging policy changes.</figcaption>
</figure>

## Worked example (hypothetical)

A hypothetical CAD-reporting company earns US$400M of revenue. The average USD/CAD rate moves from 1.30 to 1.38.

| Line | Prior year | Current year | Change |
|:--|--:|--:|--:|
| US revenue (USD) | 400 | 400 | 0% |
| Translated to CAD | 520 | 552 | +6.2% |
| CAD-denominated costs | 300 | 300 | 0% |
| Contribution (CAD) | 220 | 252 | +14.5% |

Nothing changed operationally, yet contribution rose 14.5%. If the rate reverses, it falls the same way. This is why your [quarter-over-quarter log](/investing/analyze/track-stock-thesis-over-quarters/) should carry a constant-currency column.

## Related reading

- [How to analyze geographic revenue mix for Canadian multinationals](/investing/analyze/analyze-geographic-revenue-mix-canadian-multinationals/)
- [How to compare a TSX stock to its US peer fairly](/investing/valuation/compare-tsx-stock-to-us-peer/)
- [How to read non-GAAP metrics critically](/investing/analyze/read-non-gaap-metrics-critically/)
- [How to analyze operating leverage in a simple business model](/investing/analyze/analyze-operating-leverage/)
- [How to read debt notes and covenant language simply](/investing/analyze/read-debt-notes-covenant-language/)

## Sources

- IAS 21 *The Effects of Changes in Foreign Exchange Rates* (functional currency, translation, OCI).
- IFRS 7 *Financial Instruments: Disclosures* (market risk sensitivity) and IFRS 9 (hedge accounting).
- NI 52-112 *Non-GAAP and Other Financial Measures Disclosure* (constant-currency measures need labelling and reconciliation). Confirm the current text on the CSA website.

## Media credits

- Hero: "Niagara - CAN & US flags (45191461702).jpg" by VillageHero from Ulm, Germany, [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Niagara_-_CAN_%26_US_flags_(45191461702).jpg). Cropped and resized to 1280x720. Real photograph, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
