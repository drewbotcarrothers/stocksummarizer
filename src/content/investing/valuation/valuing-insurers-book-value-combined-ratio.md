---
title: "Valuation for Insurers: Book Value and Combined Ratio Context"
description: "How to value Canadian insurers: justified P/B from ROE, the combined ratio for P&C, IFRS 17 CSM and adjusted book for life insurers, and LICAT/MCT capital. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-19
image: "/images/investing/valuing-insurers-book-value-combined-ratio.jpg"
imageAlt: "Bare trees and a parking lot in front of the Great-West Life buildings on Osborne Street in Winnipeg, with the sun low in the sky"
imageCredit: "Great-West Life building photograph by Robert Linsdell, CC BY 2.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Insurers do not fit the usual valuation toolkit. Revenue is premiums collected before claims are known, "debt" is mostly policyholder liabilities, and EBITDA means nothing. Most investors end up valuing them on price-to-book and return on equity, the same pairing used for banks, but with two insurance-specific pieces of context: the **combined ratio** for property and casualty (P&C) insurers and, since IFRS 17, the **contractual service margin (CSM)** for life insurers.

This post shows how those pieces fit together with hypothetical numbers. It is distinct from [valuing Canadian banks with P/B and ROE](/investing/valuation/valuing-canadian-banks-pb-roe/), which covers the bank version. It is educational; all figures are hypothetical, not any company's results.

## Direct answer

Value an insurer on **price-to-book against sustainable ROE**: a justified P/B is roughly **(ROE − g) ÷ (r − g)**. For a P&C insurer, sustainable ROE depends mostly on the **combined ratio** (claims plus expenses as a share of earned premiums; below 100% means an underwriting profit) plus investment income on the float. For a life insurer, start from book value, then consider the **CSM**, which under IFRS 17 holds expected future profit on in-force business as a liability; adding it back after tax gives a fuller picture of shareholder value. Check capital strength (LICAT for life insurers, MCT for P&C in Canada) before trusting any multiple.

## P&C: from combined ratio to ROE to P/B

| Hypothetical P&C insurer (C$M) | CR 90% | CR 93% | CR 95% | CR 97% |
|:--|--:|--:|--:|--:|
| Net earned premiums | 10,000 | 10,000 | 10,000 | 10,000 |
| Underwriting income (100% − CR) | 1,000 | 700 | 500 | 300 |
| Investment income on float and capital | 450 | 450 | 450 | 450 |
| Pre-tax income | 1,450 | 1,150 | 950 | 750 |
| Net income at 25% tax | 1,087.5 | 862.5 | 712.5 | 562.5 |
| Shareholders' equity | 7,500 | 7,500 | 7,500 | 7,500 |
| **ROE** | **14.5%** | **11.5%** | **9.5%** | **7.5%** |
| Justified P/B, r = 9%, g = 4% | 2.1x | 1.5x | 1.1x | 0.7x |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical property and casualty insurer: justified price-to-book at four combined ratios, with required return 9% and growth 4%" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0x</text><line x1="70" y1="208" x2="710" y2="208" stroke="#e2e8f0"/><text x="62" y="212" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0.5x</text><line x1="70" y1="166" x2="710" y2="166" stroke="#e2e8f0"/><text x="62" y="170" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">1x</text><line x1="70" y1="124" x2="710" y2="124" stroke="#e2e8f0"/><text x="62" y="128" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">1.5x</text><line x1="70" y1="82" x2="710" y2="82" stroke="#e2e8f0"/><text x="62" y="86" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">2x</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">2.5x</text><rect x="120" y="73.6" width="56" height="176.4" rx="3" fill="#0d9488"/><text x="148" y="67.6" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">2.1x</text><text x="150" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Combined ratio 90%</text><text x="150" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">ROE 14.5%</text><rect x="280" y="124" width="56" height="126" rx="3" fill="#0d9488"/><text x="308" y="118" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">1.5x</text><text x="310" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Combined ratio 93%</text><text x="310" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">ROE 11.5%</text><rect x="440" y="157.6" width="56" height="92.4" rx="3" fill="#0d9488"/><text x="468" y="151.6" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">1.1x</text><text x="470" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Combined ratio 95%</text><text x="470" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">ROE 9.5%</text><rect x="600" y="191.2" width="56" height="58.8" rx="3" fill="#0d9488"/><text x="628" y="185.2" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">0.7x</text><text x="630" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Combined ratio 97%</text><text x="630" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">ROE 7.5%</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Justified P/B</text></svg>
<figcaption>Hypothetical: a seven-point swing in the combined ratio (90% to 97%) takes justified P/B from 2.1x to 0.7x. Underwriting discipline is most of the valuation.</figcaption>
</figure>

That sensitivity is why a single year's combined ratio is a poor input. Catastrophe losses (wildfires, floods, hail), reserve releases from prior years and the timing of rate increases all move it. Use a multi-year average and separate:

| Combined ratio component | What it tells you | Watch for |
|:--|:--|:--|
| Current accident-year loss ratio | Pricing adequacy for business written now | Rising even as rates rise |
| Catastrophe losses | Weather and event exposure | A "normal" cat load set too low |
| Prior-year reserve development | Whether past reserves were adequate | Favourable releases flattering every year |
| Expense ratio | Distribution and operating efficiency | Gains that come from one-off items |

## Life insurers: book value, CSM and adjusted book

Under IFRS 17 (effective in Canada from 2023), a life insurer recognizes profit on a contract over the period it provides coverage. Profit that is expected but not yet earned sits in the **CSM**, a liability. Some investors add the after-tax CSM to book value to see total shareholder value, then remove goodwill and intangibles for a tangible view.

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical life insurer: bridge from reported book value to an adjusted book that adds the after-tax contractual service margin and removes intangibles, in Canadian dollar millions" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0</text><line x1="70" y1="195" x2="710" y2="195" stroke="#e2e8f0"/><text x="62" y="199" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">7,500</text><line x1="70" y1="140" x2="710" y2="140" stroke="#e2e8f0"/><text x="62" y="144" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">15,000</text><line x1="70" y1="85" x2="710" y2="85" stroke="#e2e8f0"/><text x="62" y="89" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">22,500</text><line x1="70" y1="30" x2="710" y2="30" stroke="#e2e8f0"/><text x="62" y="34" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">30,000</text><rect x="115" y="103.333" width="70" height="146.667" rx="3" fill="#0d9488"/><text x="150" y="97.3333" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">20,000</text><text x="150" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Reported</text><text x="150" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">book</text><rect x="275" y="59.3333" width="70" height="44" rx="3" fill="#f59e0b"/><text x="310" y="53.3333" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+6,000</text><text x="310" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">CSM after</text><text x="310" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">tax</text><rect x="435" y="59.3333" width="70" height="22" rx="3" fill="#0ea5e9"/><text x="470" y="53.3333" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−3,000</text><text x="470" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Goodwill and</text><text x="470" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">intangibles</text><rect x="595" y="81.3333" width="70" height="168.667" rx="3" fill="#0f172a"/><text x="630" y="75.3333" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">23,000</text><text x="630" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Adjusted</text><text x="630" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">tangible book</text></svg>
<figcaption>Hypothetical life insurer: reported book C$20.0B plus after-tax CSM C$6.0B (C$8.0B pre-tax at 25%) minus goodwill and intangibles C$3.0B gives an adjusted tangible book of C$23.0B.</figcaption>
</figure>

| Hypothetical life insurer, market cap C$30.0B | Book measure | Multiple |
|:--|--:|--:|
| Price / reported book | 20,000 | 1.50x |
| Price / book + after-tax CSM | 26,000 | 1.15x |
| Price / adjusted tangible book | 23,000 | 1.30x |

None of these is "the" answer. The CSM is an estimate built on actuarial assumptions about mortality, lapse and expenses, and companies' disclosures differ. The point is to know which book you are comparing and to compare like with like across peers. For the tangible side, see [what tangible book means](/investing/valuation/what-tangible-book-means-canadian-diy/) and [tangible book vs peers](/investing/valuation/tangible-book-vs-peers-canada-first-comparison/).

## Capital: the gate before the multiple

Canadian insurers report regulatory capital ratios set by OSFI: the **Life Insurance Capital Adequacy Test (LICAT)** for life insurers and the **Minimum Capital Test (MCT)** for P&C insurers. A cheap P/B means little if the company is close to its internal targets and may need to raise equity or slow buybacks.

| Check | Where | Warning sign |
|:--|:--|:--|
| LICAT or MCT ratio vs management's own target | MD&A capital section | Falling toward the target range |
| Reserve development | Claims development tables in the notes | Repeated adverse development |
| Investment portfolio risk | Investment note | Rising share of illiquid or lower-rated assets |
| Sensitivity disclosures | MD&A market and insurance risk tables | Large equity or rate sensitivity relative to capital |
| Source of book value growth | Statement of changes in equity | Growth driven by unrealized gains rather than earnings |

## Banks vs insurers in one table

| Feature | Banks | P&C insurers | Life insurers |
|:--|:--|:--|:--|
| Core multiple | P/B with ROE | P/B with ROE | P/B, P/E, book + CSM |
| Profit driver | Net interest margin, fees, credit losses | Combined ratio + investment income | Insurance service result, spread, fees |
| Key accounting standard | IFRS 9 | IFRS 17 | IFRS 17 |
| Regulatory capital | CET1 ratio | MCT | LICAT |

## Go deeper

For the business-model side, read [how insurers make money](/investing/sectors/how-insurers-make-money/) and [how to analyze insurers vs banks](/investing/analyze/analyze-insurers-vs-banks/). To compare book multiples across a peer group, see [P/B vs peers](/investing/valuation/pb-vs-peers-canada-first-comparison/).

## Related reading

- [When tangible book misleads on TSX stocks](/investing/valuation/when-tangible-book-misleads-tsx/)
- [What is ROE?](/investing/glossary/what-is-roe/)
- [How diversified financials make money](/investing/sectors/how-diversified-financials-make-money/)
- [How to read IFRS notes for US-trained readers](/investing/analyze/read-ifrs-notes-us-trained-readers/)

## Sources

- IFRS Foundation, IFRS 17 *Insurance Contracts*.
- Office of the Superintendent of Financial Institutions (OSFI), Life Insurance Capital Adequacy Test (LICAT) and Minimum Capital Test (MCT) guidelines.
- Damodaran, A., *Investment Valuation* (Wiley), chapter on valuing financial service firms.

## Media credits

- Hero: "Great West Life, 100 Osborne St, Winnipeg (500118) (12580945465).jpg" by Robert Linsdell, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Great_West_Life,_100_Osborne_St,_Winnipeg_(500118)_(12580945465).jpg). Cropped and resized to 1280x720. Real photograph of the Great-West Life building on Osborne Street in Winnipeg, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
