---
title: "How to Calculate Forward P/E in CAD from Filings"
description: "Build your own forward EPS from company guidance and filing notes, convert USD reporters to CAD, and calculate a forward P/E range. Educational, with a worked example."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-11
image: "/images/investing/calculate-forward-pe-in-cad-from-filings.jpg"
imageAlt: "Close-up of an aneroid barometer dial with a needle and hectopascal scale"
imageCredit: "Aneroid barometer photograph by Ka23 13, CC BY 4.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Data sites quote a forward P/E based on analyst consensus you cannot see inside. Building your own forward EPS from **company guidance and the filings** shows you which assumptions matter, and gives you something to compare with consensus. It also handles the common TSX issue of companies that **report in US dollars**.

This post is the forward version of [how to calculate P/E in CAD from filings](/investing/valuation/calculate-pe-in-cad-from-filings/). Read [what forward P/E means](/investing/valuation/what-forward-pe-means-canadian-diy/) first if the term is new. It is educational; the example is hypothetical.

## Direct answer

Start with the company's **guidance** (from the MD&A outlook, earnings release or investor day). Turn it into net income step by step: revenue × margin = operating profit; subtract **depreciation and amortization** and **interest**; apply the **effective tax rate**; divide by **diluted shares** (adjusted for buybacks or issuance). Convert to CAD if the company reports in USD. Calculate forward P/E at the **low, midpoint and high** end of guidance, then compare with consensus.

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Flow for building a forward EPS estimate from company guidance and filings" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Guidance</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Revenue, volumes,</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">margins, capex</text><line x1="134.4" y1="60" x2="151.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="12.1" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Operating profit</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Less D&amp;A</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">from notes</text><line x1="278.8" y1="60" x2="295.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Pre-tax profit</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Less interest</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">on current debt</text><line x1="423.2" y1="60" x2="440.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Net income</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Less tax at</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">effective rate</text><line x1="567.6" y1="60" x2="584.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">EPS in CAD</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">÷ diluted shares,</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">× USD/CAD</text></svg>
<figcaption>Build forward EPS from what the company tells you: guidance for revenue and margins, then depreciation, interest and tax from the notes, divided by diluted shares and converted to CAD if needed.</figcaption>
</figure>

## Worked example (hypothetical, company reports in USD)

| Line | Source | Midpoint |
|:--|:--|--:|
| Revenue | Guidance US$2.0–2.2B | US$2,100M |
| × EBITDA margin | Guidance 25% | US$525M |
| − Depreciation and amortization | Last year's note, adjusted for capex | US$150M |
| − Interest expense | Debt note × average rate | US$60M |
| = Pre-tax income | | US$315M |
| − Tax at 26% effective rate | Tax note, last two years | US$82M |
| = Net income to common | After preferred dividends, if any | US$233M |
| ÷ Diluted shares | Latest diluted count, less planned buybacks | 100M |
| = Forward EPS (USD) | | US$2.33 |
| × USD/CAD (hypothetical) | Bank of Canada rate, dated | 1.38 |
| = Forward EPS (CAD) | | C$3.22 |
| TSX price | | C$45.00 |
| **Forward P/E** | 45.00 ÷ 3.22 | **14.0x** |

<figure class="diagram">
<svg viewBox="0 0 720 132" role="img" aria-label="Hypothetical forward P/E at the low, midpoint and high end of company revenue guidance" xmlns="http://www.w3.org/2000/svg"><text x="250" y="32" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Low guidance (revenue US$2.0B)</text><rect x="260" y="16" width="349" height="22" rx="3" fill="#0d9488"/><text x="616.706" y="32" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">15.2x</text><text x="250" y="66" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Midpoint (US$2.1B)</text><rect x="260" y="50" width="321" height="22" rx="3" fill="#0d9488"/><text x="589.176" y="66" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">14.0x</text><text x="250" y="100" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">High guidance (US$2.2B)</text><rect x="260" y="84" width="298" height="22" rx="3" fill="#0d9488"/><text x="566.235" y="100" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">13.0x</text></svg>
<figcaption>Hypothetical: the same C$45 share price gives a forward P/E from 13.0x to 15.2x across the guidance range. Showing the range is more honest than quoting one number.</figcaption>
</figure>

## Where each assumption comes from

| Assumption | Best source | Common mistake |
|:--|:--|:--|
| Revenue or volumes | MD&A outlook, guidance table | Ignoring the guidance range |
| Margin | Guidance or recent margin trend | Using a peak-year margin |
| D&A | PP&E and intangibles notes; capex plans | Forgetting acquisition amortization |
| Interest | Debt note: balances, rates, maturities | Missing refinancing at higher rates |
| Tax rate | Income tax note (effective rate reconciliation) | Using the statutory rate only |
| Share count | Diluted shares; buyback (NCIB) or issuance plans | Using basic or period-end shares |
| Currency | Reporting currency in note 1 | Dividing a CAD price by USD EPS |

Companies that issue guidance must follow **NI 51-102 Part 4A**: forward-looking information needs a reasonable basis, the material assumptions must be disclosed, and the company should update it when events change. The assumptions list in the outlook section is often the most useful part.

## Building NTM from two fiscal years

If you need next-twelve-months EPS and the company is 4 months into its fiscal year:

| Piece | Weight | Example |
|:--|:--|--:|
| Current fiscal year (FY1) estimate | 8 ÷ 12 | 2.33 × 0.667 = 1.55 |
| Next fiscal year (FY2) estimate | 4 ÷ 12 | 2.55 × 0.333 = 0.85 |
| **NTM EPS (USD)** | | **2.40** |

## Checklist

| Step | Done when |
|:--|:--|
| Guidance found | Ranges and stated assumptions copied with source and date |
| Model built | Revenue to EPS in six lines, inputs sourced from notes |
| Range shown | Low, midpoint and high forward P/E calculated |
| Currency matched | EPS and price in the same currency |
| Consensus compared | Your EPS vs consensus; gap explained |
| Revisit date set | Model updated at the next quarterly report |

## Go deeper

Compare your number with others' in [forward P/E vs peers](/investing/valuation/forward-pe-vs-peers-canada-first-comparison/), and check the warning signs in [when forward P/E misleads on TSX stocks](/investing/valuation/when-forward-pe-misleads-tsx/). For multi-year cash flows, see [how to build a simple DCF without fake precision](/investing/valuation/simple-dcf-without-fake-precision/).

## Related reading

- [How to evaluate management guidance language](/investing/analyze/evaluate-management-guidance-language/)
- [How to read capex plans in the MD&A](/investing/analyze/read-capex-plans-mdna/)
- [How to read share buyback disclosures in Canada](/investing/analyze/read-share-buyback-disclosures-canada/)
- [How to handle currency when analyzing CAD vs USD results](/investing/analyze/handle-currency-cad-vs-usd-results/)

## Sources

- NI 51-102 *Continuous Disclosure Obligations*, Part 4A (forward-looking information and FOFI).
- IAS 33 *Earnings per Share*; IAS 12 *Income Taxes* (effective tax rate reconciliation).
- Bank of Canada daily exchange rates.

## Media credits

- Hero: "Barometer 20191005 210534.jpg" by Ka23 13, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Barometer_20191005_210534.jpg). Cropped and resized to 1280x720. Real photograph of an aneroid barometer dial, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
