---
title: "How to Calculate P/E in CAD from Filings"
description: "Step-by-step: build trailing twelve month diluted EPS from Canadian filings, convert USD reporters to CAD, and calculate a P/E you can trust. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-11
image: "/images/investing/calculate-pe-in-cad-from-filings.jpg"
imageAlt: "Grey Aurora electronic desk calculator with a zero on its display"
imageCredit: "Aurora electronic calculator photograph by Coyau, CC BY-SA 3.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Data sites show a P/E for every TSX stock, but they rarely tell you **which earnings** they used, whether the figure was converted from US dollars, or whether a one-time gain is inside it. Calculating P/E yourself from filings takes about ten minutes and makes every later comparison more honest.

This post is the hands-on companion to [what P/E means for Canadian DIY investors](/investing/valuation/what-pe-means-canadian-diy/) and [when P/E misleads on TSX stocks](/investing/valuation/when-pe-misleads-tsx/). It is educational; the worked example is hypothetical.

## Direct answer

Take **diluted EPS** from the income statement (IAS 33 requires it on the face of the statement). Build **trailing twelve months (TTM)**: last annual EPS + current year-to-date EPS − prior year-to-date EPS. If the company reports in **US dollars** but trades in Canadian dollars, convert EPS to CAD at a current exchange rate (or convert the price to USD). Divide the share price by TTM EPS. Record the EPS type, period, exchange rate and date next to the result.

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Flow for building trailing twelve month EPS from filings and dividing price by it" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Annual EPS</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Last fiscal year,</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">diluted, IFRS</text><line x1="134.4" y1="60" x2="151.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+ YTD now</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Current year</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">to date</text><line x1="278.8" y1="60" x2="295.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="12.9" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">− YTD last year</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Same months</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">prior year</text><line x1="423.2" y1="60" x2="440.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">= TTM EPS</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Trailing</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">12 months</text><line x1="567.6" y1="60" x2="584.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Price ÷ EPS</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Same currency</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">same share class</text></svg>
<figcaption>Build trailing twelve month (TTM) EPS from the last annual report plus the current year-to-date, minus the same period last year. Then divide the share price by EPS in the same currency.</figcaption>
</figure>

## Where each input comes from

| Input | Where to find it | Notes |
|:--|:--|:--|
| Annual diluted EPS | Audited annual financial statements, income statement | Already after preferred dividends and non-controlling interests |
| Year-to-date EPS | Latest interim report (IAS 34) | Use year-to-date columns, not just the quarter |
| Prior year-to-date EPS | Same interim report, comparative column | May be restated; use the restated figure |
| Reporting currency | Note 1 or 2 (basis of presentation) | Many TSX issuers report in USD |
| Share price | Exchange quote for the class you would buy | Match the share class to the EPS |
| Exchange rate | Bank of Canada daily rate | Note the date used |

## Worked example (hypothetical)

| Step | Figure |
|:--|--:|
| Annual diluted EPS, last fiscal year (USD) | 2.40 |
| + Year-to-date diluted EPS, 9 months this year (USD) | 1.95 |
| − Year-to-date diluted EPS, 9 months last year (USD) | 1.70 |
| = TTM diluted EPS (USD) | 2.65 |
| × USD/CAD exchange rate (hypothetical) | 1.38 |
| = TTM diluted EPS (CAD) | 3.66 |
| TSX share price (CAD) | 55.00 |
| **P/E (55.00 ÷ 3.66)** | **15.0x** |

If you skip the currency step and divide C$55 by US$2.65, you get 20.8x, about 38% too high. Currency is the most common error on TSX names that report in USD; see [how to handle currency when analyzing CAD vs USD results](/investing/analyze/handle-currency-cad-vs-usd-results/).

<figure class="diagram">
<svg viewBox="0 0 720 166" role="img" aria-label="Hypothetical P/E for the same company and price using four different EPS figures" xmlns="http://www.w3.org/2000/svg"><text x="240" y="32" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Basic EPS, IFRS</text><rect x="250" y="16" width="313" height="22" rx="3" fill="#0d9488"/><text x="570.727" y="32" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">17.2x</text><text x="240" y="66" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Diluted EPS, IFRS</text><rect x="250" y="50" width="320" height="22" rx="3" fill="#0d9488"/><text x="578" y="66" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">17.6x</text><text x="240" y="100" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Diluted, ex one-time gain</text><rect x="250" y="84" width="353" height="22" rx="3" fill="#0d9488"/><text x="610.727" y="100" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">19.4x</text><text x="240" y="134" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Adjusted EPS (company)</text><rect x="250" y="118" width="273" height="22" rx="3" fill="#0d9488"/><text x="530.727" y="134" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">15.0x</text></svg>
<figcaption>Hypothetical: one company at one share price shows a P/E between 15.0x and 19.4x depending on which EPS you use. Always write down which EPS your P/E is based on.</figcaption>
</figure>

## Choices that change the answer

| Choice | Options | Default for most DIY work |
|:--|:--|:--|
| Basic vs diluted | Diluted includes options, convertibles, warrants | Diluted |
| IFRS vs adjusted | Adjusted removes items management chooses | IFRS first, adjusted as a second column |
| Trailing period | Last fiscal year or TTM | TTM, unless the last quarter is distorted |
| One-time items | Leave in or strip out | Show both; see [one-time items](/investing/analyze/spot-one-time-items-canadian-statements/) |
| Share class | Multiple voting or subordinate classes | Use the class you would buy; EPS is usually the same across classes |
| Currency | Convert EPS or price | Pick one and keep it consistent |

If you calculate from net income instead of EPS, subtract **preferred dividends** and **non-controlling interests** first, then divide by **weighted average diluted shares**, not the period-end count. This matters for banks, insurers and utilities that issue preferred shares; see [preferred shares and hybrid capital](/investing/analyze/analyze-preferred-shares-hybrid-capital/).

## Checklist

| Step | Done when |
|:--|:--|
| EPS type chosen | Diluted, IFRS, with adjusted as a second view |
| TTM built | Annual + YTD − prior YTD, using restated comparatives |
| Currency matched | EPS and price in the same currency, rate and date noted |
| One-time items noted | Large unusual items listed with their per-share effect |
| Result logged | P/E, inputs and date saved in your notes |
| Sanity check | Your figure compared with a data site; any gap explained |

## Go deeper

Once you trust the number, compare it fairly with competitors in [P/E vs peers: a Canada-first comparison guide](/investing/valuation/pe-vs-peers-canada-first-comparison/) and use it in [a simple P/E valuation checklist](/investing/valuation/use-pe-simple-valuation-checklist/).

## Related reading

- [What P/E means for Canadian DIY investors](/investing/valuation/what-pe-means-canadian-diy/)
- [How to read quarterly earnings for TSX companies](/investing/analyze/how-to-read-quarterly-earnings-tsx/)
- [How to read cap tables and fully diluted share counts](/investing/analyze/read-cap-tables-fully-diluted-share-counts/)
- [What is dilution?](/investing/glossary/what-is-dilution/)

## Sources

- IAS 33 *Earnings per Share* (basic and diluted EPS; presentation on the face of the income statement).
- IAS 34 *Interim Financial Reporting* (year-to-date and comparative periods).
- Bank of Canada daily exchange rates.

## Media credits

- Hero: "Aurora electronic calculator DT210 07.jpg" by Coyau, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Aurora_electronic_calculator_DT210_07.jpg). Cropped and resized to 1280x720. Real photograph of an electronic desk calculator, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
