---
title: "How to Calculate P/B in CAD from Filings"
description: "A step-by-step P/B worksheet for non-bank TSX issuers: the right equity figure, preferreds and minority interests, the latest share count, and closing-rate currency conversion. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-12
image: "/images/investing/calculate-pb-in-cad-from-filings.jpg"
imageAlt: "Antique hanging balance scales and cast weights displayed in a museum alcove"
imageCredit: "Weighing scales and weights, Pereslavl museum photograph by Лапоть, CC0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

P/B looks simpler than P/E because there is no trailing twelve-month build: book value is a single balance-sheet number. The work is in taking the **right** equity figure, the **right** share count and, for companies that report in US dollars, the **right exchange rate**. This post is a worksheet for non-bank issuers.

For the concept, see [what P/B means for Canadian DIY investors](/investing/valuation/what-pb-means-canadian-diy/). The share-count and currency habits are the same as in [how to calculate P/E in CAD from filings](/investing/valuation/calculate-pe-in-cad-from-filings/), so this post focuses on what is different for book value. It is educational; numbers are hypothetical.

## Direct answer

1. From the latest balance sheet, take **equity attributable to shareholders of the company** (not total equity, which includes non-controlling interests).
2. Subtract **preferred shares** and other equity instruments that rank ahead of common shares.
3. Divide by **common shares outstanding** from the most recent date you can find (the MD&A's outstanding share data section).
4. If the company reports in USD, convert book value per share at the **closing rate on the balance-sheet date**.
5. P/B = **CAD share price ÷ CAD book value per share**.

<figure class="diagram">
<svg viewBox="0 0 720 166" role="img" aria-label="Hypothetical bridge from total equity to common equity in millions of dollars" xmlns="http://www.w3.org/2000/svg"><text x="250" y="32" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Total equity</text><rect x="260" y="16" width="362" height="22" rx="3" fill="#94a3b8"/><text x="630.143" y="32" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">$5,200M</text><text x="250" y="66" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Less: preferred shares</text><rect x="260" y="50" width="28" height="22" rx="3" fill="#f59e0b"/><text x="295.857" y="66" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">$400M</text><text x="250" y="100" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Less: non-controlling interests</text><rect x="260" y="84" width="21" height="22" rx="3" fill="#f59e0b"/><text x="288.893" y="100" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">$300M</text><text x="250" y="134" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">= Common equity</text><rect x="260" y="118" width="313" height="22" rx="3" fill="#0d9488"/><text x="581.393" y="134" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">$4,500M</text></svg>
<figcaption>Hypothetical, C$ millions: total equity of $5,200 includes $400 of preferred shares and $300 belonging to minority owners of subsidiaries. Only $4,500 belongs to common shareholders.</figcaption>
</figure>

## Worked example (hypothetical, CAD reporter)

| Step | Input | Source | Value |
|:--|:--|:--|--:|
| 1 | Total equity | Balance sheet | C$5,200M |
| 2 | Less non-controlling interests | Balance sheet (equity section) | −C$300M |
| 3 | Less preferred shares | Balance sheet or share capital note | −C$400M |
| 4 | Common equity | 5,200 − 300 − 400 | C$4,500M |
| 5 | Common shares outstanding | MD&A outstanding share data | 300M |
| 6 | Book value per share | 4,500 ÷ 300 | C$15.00 |
| 7 | Share price | TSX quote | C$18.00 |
| 8 | **P/B** | 18.00 ÷ 15.00 | **1.20x** |

## Worked example (hypothetical, USD reporter)

| Step | Input | Value |
|:--|:--|--:|
| 1 | Common equity | US$3,000M |
| 2 | Common shares outstanding | 200M |
| 3 | BVPS in USD | US$15.00 |
| 4 | USD/CAD closing rate on the balance-sheet date (hypothetical) | 1.38 |
| 5 | BVPS in CAD | 15.00 × 1.38 = C$20.70 |
| 6 | TSX share price | C$24.84 |
| 7 | **P/B** | 24.84 ÷ 20.70 = **1.20x** |

Book value is a balance-sheet figure, so it uses the **closing** rate on that date, not the average rate you would use for earnings. Exchange rates are published by the Bank of Canada. If the stock also trades in New York, you can instead divide the USD price by USD book value; you should get nearly the same answer.

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Five-step flow for calculating P/B in Canadian dollars" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Balance sheet</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Common equity</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">at quarter end</text><line x1="134.4" y1="60" x2="151.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">MD&amp;A</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Shares outstanding</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">latest date</text><line x1="278.8" y1="60" x2="295.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">BVPS</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Equity ÷ shares</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">reporting currency</text><line x1="423.2" y1="60" x2="440.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Convert</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Spot rate at the</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">balance sheet date</text><line x1="567.6" y1="60" x2="584.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">P/B</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">CAD price ÷</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">CAD BVPS</text></svg>
<figcaption>Use the latest balance sheet, the most recent share count, and the exchange rate on the balance sheet date if the company reports in another currency.</figcaption>
</figure>

## Where each input comes from

| Input | Where to find it | Watch for |
|:--|:--|:--|
| Equity attributable to shareholders | Balance sheet, equity section | Some issuers label it "owners of the parent" |
| Non-controlling interests | Balance sheet, equity section | Large for companies with partly owned subsidiaries |
| Preferred shares and hybrids | Balance sheet or share capital note | Some hybrid notes sit in equity; treat them like preferreds. See [preferred shares and hybrid capital](/investing/analyze/analyze-preferred-shares-hybrid-capital/) |
| Shares outstanding | MD&A outstanding share data (Form 51-102F1) or cover of the AIF | Use the latest date; buybacks or issues change it |
| Multiple share classes | Share capital note | Add all classes that share equally in equity |
| Goodwill and intangibles | Balance sheet | Needed later for tangible book, a separate measure |

## Choices that change the answer

| Choice | Effect | Default |
|:--|:--|:--|
| Total vs attributable equity | Including NCI overstates book per share | Attributable to shareholders |
| Preferreds left in | Overstates common book value | Subtract them |
| Old share count | Misses buybacks or new issues | Latest outstanding share data |
| Basic vs diluted shares | Diluted lowers BVPS if options are in the money | Basic for book; check dilution with [cap tables and fully diluted share counts](/investing/analyze/read-cap-tables-fully-diluted-share-counts/) |
| Average vs closing FX rate | Average rate is wrong for a balance sheet | Closing rate |
| Insurer book plus CSM | Raises book for IFRS 17 insurers | Show both, labelled |

## Checklist

| Step | Done when |
|:--|:--|
| Equity figure | Attributable to shareholders, latest quarter end |
| Preferreds removed | Preferred shares and equity-classified hybrids subtracted |
| Share count | Latest outstanding share data, all common classes |
| Currency | Closing rate at the balance-sheet date if not CAD |
| P/B recorded | With date, equity basis and any CSM adjustment noted |

## Go deeper

With a P/B in hand, compare it fairly using [P/B vs peers](/investing/valuation/pb-vs-peers-canada-first-comparison/), and check the accounting traps in [when P/B misleads on TSX stocks](/investing/valuation/when-pb-misleads-tsx/).

## Related reading

- [Valuation for banks: P/B, ROE, and why P/E alone fails](/investing/valuation/valuing-canadian-banks-pb-roe/)
- [How to handle currency when analyzing CAD vs USD results](/investing/analyze/handle-currency-cad-vs-usd-results/)
- [How to read share buyback disclosures in Canada](/investing/analyze/read-share-buyback-disclosures-canada/)
- [How to read a Canadian annual report](/investing/analyze/read-canadian-annual-report/)

## Sources

- IAS 1 *Presentation of Financial Statements* (equity attributable to owners of the parent and non-controlling interests).
- IAS 21 *The Effects of Changes in Foreign Exchange Rates* (closing rate for assets and liabilities).
- Form 51-102F1 *Management's Discussion & Analysis* (outstanding share data).
- Bank of Canada daily exchange rates.

## Media credits

- Hero: "Weighing scales and weights - Goritsky monastery, Pereslavl museum.jpg" by Лапоть, [CC0](https://creativecommons.org/publicdomain/zero/1.0/deed.en), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Weighing_scales_and_weights_-_Goritsky_monastery,_Pereslavl_museum.jpg). Cropped and resized to 1280x720. Real photograph of antique weighing scales and weights, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
