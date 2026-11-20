---
title: "How to Avoid False Precision in Spreadsheet Models"
description: "Spreadsheet hygiene for stock valuation: one inputs tab, ranges not points, rounding, sensitivity tables, circular references and a version log. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-20
image: "/images/investing/avoid-false-precision-spreadsheet-models.jpg"
imageAlt: "A Faber-Castell slide rule with its logarithmic scales, shown against a plain grey background"
imageCredit: "Faber-Castell 67/54 Darmstadt slide rule photograph by Slashme, CC0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "mixed"
---

A spreadsheet will happily tell you a stock is worth $41.87. The two decimal places come from arithmetic, not knowledge. Inputs like growth, margins and the discount rate are estimates with wide error bars, and a model that hides that turns guesses into false confidence.

The case against fake precision in a DCF itself is covered in [how to build a simple DCF without fake precision](/investing/valuation/simple-dcf-without-fake-precision/), and turning outputs into a range is covered in [fair value ranges instead of price targets](/investing/valuation/fair-value-ranges-instead-of-price-targets/). This post is about the **spreadsheet hygiene** underneath: layout, rounding, input ranges, sensitivity tables, circular references and version control. It is educational; all numbers are hypothetical.

## Direct answer

Keep **every input on one tab** with its source and a low/base/high range; **never type numbers into formulas**; **round outputs** to what you actually know (usually the nearest dollar or a range); build **sensitivity tables** for the two or three inputs that move value most; **avoid circular references** or isolate them behind a switch; and keep a **version log** so you can see when and why an assumption changed. If a model's answer swings more across your input ranges than the gap between price and "value", the model has not found an edge.

## How much the inputs really move the answer

<figure class="diagram">
<svg viewBox="0 0 720 234" role="img" aria-label="Hypothetical sensitivity tornado: a model output of 41.87 dollars per share moves across wide ranges when each input is flexed within a reasonable band" xmlns="http://www.w3.org/2000/svg"><line x1="230" y1="22" x2="230" y2="174" stroke="#e2e8f0"/><text x="230" y="190" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$30</text><line x1="322" y1="22" x2="322" y2="174" stroke="#e2e8f0"/><text x="322" y="190" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$35</text><line x1="414" y1="22" x2="414" y2="174" stroke="#e2e8f0"/><text x="414" y="190" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$40</text><line x1="506" y1="22" x2="506" y2="174" stroke="#e2e8f0"/><text x="506" y="190" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$45</text><line x1="598" y1="22" x2="598" y2="174" stroke="#e2e8f0"/><text x="598" y="190" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$50</text><line x1="690" y1="22" x2="690" y2="174" stroke="#e2e8f0"/><text x="690" y="190" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$55</text><text x="220" y="47" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Revenue growth 2–4%</text><rect x="358.8" y="30" width="165.6" height="24" rx="4" fill="#0d9488"/><text x="353.8" y="47" font-size="11" font-weight="700" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">$37</text><text x="529.4" y="47" font-size="11" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">$46</text><text x="220" y="83" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Discount rate 8–10%</text><rect x="322" y="66" width="276" height="24" rx="4" fill="#0d9488"/><text x="317" y="83" font-size="11" font-weight="700" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">$35</text><text x="603" y="83" font-size="11" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">$50</text><text x="220" y="119" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Operating margin 18–22%</text><rect x="377.2" y="102" width="147.2" height="24" rx="4" fill="#0d9488"/><text x="372.2" y="119" font-size="11" font-weight="700" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">$38</text><text x="529.4" y="119" font-size="11" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">$46</text><text x="220" y="155" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Exit multiple 9–11x</text><rect x="358.8" y="138" width="184" height="24" rx="4" fill="#0d9488"/><text x="353.8" y="155" font-size="11" font-weight="700" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">$37</text><text x="547.8" y="155" font-size="11" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">$47</text><line x1="448.408" y1="22" x2="448.408" y2="174" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 4"/><text x="448.408" y="208" font-size="11.5" font-weight="700" fill="#dc2626" text-anchor="middle" font-family="system-ui, sans-serif">Model output $41.87</text></svg>
<figcaption>Hypothetical: a model output of $41.87 per share ranges from about $35 to $50 when only the discount rate moves within 8–10%, before any other input is changed.</figcaption>
</figure>

The tornado chart is the antidote to a single number. List the inputs, flex each one within a range you can defend, and sort by impact. Whatever sits at the top deserves most of your research time.

## A layout that keeps you honest

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Five-part spreadsheet layout: inputs, calculations, outputs, sensitivity tables and a version log" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Inputs</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">one tab, sourced,</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">in ranges</text><line x1="134.4" y1="60" x2="149.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Calculations</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">no typed-in</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">numbers</text><line x1="278.8" y1="60" x2="293.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Outputs</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">rounded to</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">what you know</text><line x1="423.2" y1="60" x2="438.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Sensitivity</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">tables for the</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">big drivers</text><line x1="567.6" y1="60" x2="582.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Version log</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">date, change,</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">reason</text></svg>
<figcaption>Separate inputs, calculations and outputs, then add sensitivity tables and a dated log of changes.</figcaption>
</figure>

| Tab | What goes there | Hygiene rule |
|:--|:--|:--|
| Inputs | Revenue growth, margins, capex, tax rate, discount rate, exit multiple, share count | One cell per assumption, with source, date and low/base/high |
| History | Figures copied from filings | Note the filing and page; keep reported and adjusted figures separate |
| Calculations | Forecast, cash flows, discounting | Formulas only; no hard-coded numbers |
| Outputs | Value per share, implied multiples | Rounded; show the implied multiple as a sense check |
| Sensitivity | Two-way tables (e.g., discount rate × growth) | Use the same model, not a separate copy |
| Log | Date, change, reason, effect on value | One line per change |

## Rounding rules of thumb

| Output | Display as | Why |
|:--|:--|:--|
| Value per share | Nearest dollar, or a range like $36–$46 | Inputs aren't known to the cent |
| Growth and margin inputs | Nearest 0.5 percentage point | Finer steps imply knowledge you don't have |
| Discount rate | Nearest 0.5 percentage point | See [how interest rates change what multiples can justify](/investing/valuation/interest-rates-change-justified-multiples/) |
| Implied multiples | One decimal place | Enough to compare with peers |
| Share count | Diluted, in millions to one decimal | See [how dilution changes per-share valuation math](/investing/valuation/dilution-per-share-valuation-math/) |

## A two-way sensitivity table (hypothetical)

Value per share, in dollars, for combinations of discount rate and long-run growth:

| Discount rate ↓ / growth → | 1.5% | 2.0% | 2.5% |
|:--|--:|--:|--:|
| 8.0% | 45 | 48 | 52 |
| 9.0% | 39 | 41 | 44 |
| 10.0% | 34 | 36 | 38 |

Reading across one row shows how much of the answer is the terminal growth guess. Reading down a column shows how much is the discount rate. If the current share price sits anywhere inside the table, your model is saying "plausibly fair", not "cheap" or "expensive".

## Technical traps

| Trap | What happens | Fix |
|:--|:--|:--|
| Hard-coded numbers in formulas | A changed input doesn't flow through | Find them with "show formulas"; move to the inputs tab |
| Circular references (interest depends on debt, which depends on cash flow after interest) | Unstable answers or silent iteration | Use the prior period's balance, or a clearly labelled on/off switch |
| Mixed units (thousands vs millions, CAD vs USD) | Errors of 1,000x or the exchange rate | Label units in every header; see [currency and peers that report in USD](/investing/valuation/currency-valuation-peers-report-usd/) |
| Terminal value dominating | Over 75% of value comes from beyond year 10 | Show the terminal share of value on the outputs tab |
| Copied tabs drifting apart | Two "versions" of the truth | One model, one log |

## A quick checklist

1. Can someone else find every assumption on one tab?
2. Does each input have a source and a range?
3. Is the output shown as a range, with the implied multiple next to it?
4. Do you know which two inputs drive most of the value?
5. Is there a log entry for the last change?

## Go deeper

To cross-check a model against market prices, read [triangulating multiples, DCF and peer checks](/investing/valuation/triangulating-multiples-dcf-peer-checks/). To keep research notes that build up over time, read [keep stock research notes that compound](/investing/analyze/keep-stock-research-notes-that-compound/).

## Related reading

- [Relative vs intrinsic valuation](/investing/valuation/relative-vs-intrinsic-valuation/)
- [How to use historical multiple ranges without anchoring blindly](/investing/valuation/historical-multiple-ranges-without-anchoring/)
- [Triangulate filings, sell-side notes and your own model](/investing/analyze/triangulate-filings-sell-side-notes-own-model/)
- [Stress-test a stock thesis in a recession scenario](/investing/analyze/stress-test-stock-thesis-recession-scenario/)

## Sources

- Damodaran, A., *Investment Valuation* (Wiley), chapters on estimation error and sensitivity analysis.
- Koller, T., Goedhart, M. and Wessels, D., *Valuation* (Wiley), chapter on model structure.

## Media credits

- Hero: "Faber Castell 67 54 Darmstadt slide rule no cursor slide front.jpg" by Slashme, [CC0](https://creativecommons.org/publicdomain/zero/1.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Faber_Castell_67_54_Darmstadt_slide_rule_no_cursor_slide_front.jpg). Cropped and resized to 1280x720. Real photograph of a Faber-Castell 67/54 Darmstadt slide rule, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
