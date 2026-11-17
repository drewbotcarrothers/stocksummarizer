---
title: "How to Calculate Normalized EPS in CAD from Filings"
description: "A normalized EPS worksheet for a TSX cyclical: one-offs after tax, a tax-rate check, mid-cycle margin x revenue, today's diluted shares and a reconciliation. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-17
image: "/images/investing/calculate-normalized-eps-in-cad-from-filings.jpg"
imageAlt: "Historic black-and-white photograph of a sawmill at Coal Creek, British Columbia, with logs in the mill pond and mountains behind"
imageCredit: "British Columbia sawmill at Coal Creek photograph, unknown photographer, public domain, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Normalized EPS sounds like an analyst's black box. It is mostly arithmetic on numbers already in the annual report: the one-off items in the notes, the tax rate reconciliation, eight or ten years of revenue and margins, and the diluted share count. This worksheet builds it step by step for a hypothetical TSX-listed forest products company in Canadian dollars, using three methods and then reconciling them.

The concept and the five methods are in [what normalized EPS means](/investing/valuation/what-normalized-eps-means-canadian-diy/); the ordinary P/E worksheet is in [how to calculate P/E in CAD from filings](/investing/valuation/calculate-pe-in-cad-from-filings/). It is educational; all figures are hypothetical.

## Direct answer

(1) Start from **reported diluted EPS** under IAS 33. (2) **Remove one-off items after tax**, using the notes and the company's non-GAAP reconciliation as a map, not as the answer. (3) **Check the tax rate** against the statutory rate in the income tax note. (4) Build a **mid-cycle estimate**: average operating margin over a full cycle × revenue at today's capacity, less normal interest and tax. (5) Cross-check with the **multi-year average of adjusted net income divided by today's diluted shares**. (6) Reconcile the methods and pick a base case, then compute P/E on it.

## Where each input lives

| Input | Where to find it |
|:--|:--|
| Diluted EPS, net income to common, diluted shares | Income statement and EPS note (IAS 33) |
| Impairments | Impairment note (IAS 36); often a separate line on the income statement |
| Restructuring | Provisions note (IAS 37) and MD&A |
| Gains and losses on asset sales | Other income note; cash flow statement (proceeds) |
| Tax effect of each item | Non-GAAP reconciliation in the MD&A (NI 52-112); tax note |
| Statutory and effective tax rate | Income tax note, rate reconciliation (IAS 12) |
| Revenue and operating margin by year | Past annual reports on SEDAR+; segment note (IFRS 8) |
| Net debt and interest rate | Long-term debt note; MD&A liquidity section |

## Steps 1 to 3: reported to adjusted

| Line (TTM, hypothetical) | C$M |
|:--|--:|
| Revenue | 2,400 |
| Reported net income to common | 96 |
| Diluted weighted average shares | 120M |
| **Reported diluted EPS** | **$0.80** |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical forest products company: bridge from reported net income to net income excluding one-off items, after tax, in Canadian dollar millions" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0</text><line x1="70" y1="195" x2="710" y2="195" stroke="#e2e8f0"/><text x="62" y="199" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">40</text><line x1="70" y1="140" x2="710" y2="140" stroke="#e2e8f0"/><text x="62" y="144" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">80</text><line x1="70" y1="85" x2="710" y2="85" stroke="#e2e8f0"/><text x="62" y="89" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">120</text><line x1="70" y1="30" x2="710" y2="30" stroke="#e2e8f0"/><text x="62" y="34" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">160</text><rect x="90.2667" y="118" width="66.1333" height="132" rx="3" fill="#0d9488"/><text x="123.333" y="112" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">96</text><text x="123.333" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Reported</text><text x="123.333" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">NI</text><rect x="196.933" y="67.125" width="66.1333" height="50.875" rx="3" fill="#f59e0b"/><text x="230" y="61.125" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+37</text><text x="230" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Impairment</text><rect x="303.6" y="50.625" width="66.1333" height="16.5" rx="3" fill="#f59e0b"/><text x="336.667" y="44.625" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+12</text><text x="336.667" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Restruct-</text><text x="336.667" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">uring</text><rect x="410.267" y="50.625" width="66.1333" height="24.75" rx="3" fill="#0ea5e9"/><text x="443.333" y="44.625" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−18</text><text x="443.333" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Gain on</text><text x="443.333" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">sale</text><rect x="516.933" y="75.375" width="66.1333" height="20.625" rx="3" fill="#0ea5e9"/><text x="550" y="69.375" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−15</text><text x="550" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Deferred tax</text><text x="550" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">recovery</text><rect x="623.6" y="96" width="66.1333" height="154" rx="3" fill="#0f172a"/><text x="656.667" y="90" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">112</text><text x="656.667" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Adjusted</text><text x="656.667" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">NI</text></svg>
<figcaption>Hypothetical, C$ millions: adding back the after-tax impairment and restructuring and removing the after-tax gain and a one-time deferred tax recovery takes net income from 96 to 112.</figcaption>
</figure>

| One-off item (hypothetical) | Pre-tax | Tax effect | After tax | Keep or remove? |
|:--|--:|--:|--:|:--|
| Impairment of a closed mill | +50 | −13 | +37 | Remove: non-cash, specific to one asset |
| Restructuring | +16 | −4 | +12 | Remove only if it does not recur (check the past five years) |
| Gain on sale of land | −24 | +6 | −18 | Remove |
| Deferred tax recovery from a rate change | | | −15 | Remove |
| **Adjusted net income** | | | **112** | |
| **Adjusted EPS (÷ 120M)** | | | **$0.93** | |

**Tax check.** Reported pre-tax income was 112 with tax of 16, an effective rate of about 14%, flattered by the deferred tax recovery. After the adjustments, pre-tax income is 154 and tax 42, about 27%, in line with the combined statutory rate the company cites in its tax note. No further tax adjustment is needed. If the adjusted rate were far from the statutory rate, find out why (loss carryforwards, foreign operations, non-deductible items) before replacing it.

## Step 4: mid-cycle margin × revenue

| Year (hypothetical) | Revenue (C$M) | EBIT margin |
|:--|--:|--:|
| Y1 | 2,500 | 6.0% |
| Y2 | 2,600 | 9.0% |
| Y3 | 3,200 | 14.0% |
| Y4 | 2,900 | 11.0% |
| Y5 | 2,200 | 3.0% |
| Y6 | 2,600 | 8.0% |
| Y7 | 3,200 | 13.0% |
| Y8 (TTM) | 2,400 | 7.9% |
| **Average** | **2,700** | **9.0%** |

The eight years cover a full cycle (two peaks, one trough) and capacity has not changed much, so the average revenue is a fair mid-cycle figure. If the company had added or closed mills, restate revenue to today's capacity first.

| Mid-cycle build | C$M |
|:--|--:|
| Mid-cycle revenue | 2,700 |
| × mid-cycle EBIT margin 9.0% | 243 |
| Less normal interest (net debt of 700 × 5%) | −35 |
| Pre-tax income | 208 |
| Less tax at 27% | −56 |
| Net income | 152 |
| **Mid-cycle EPS (÷ 120M current diluted shares)** | **$1.27** |

## Step 5: multi-year average cross-check

| Measure (hypothetical) | Value |
|:--|--:|
| Average adjusted net income, Y1–Y8 | C$165M |
| ÷ average diluted shares over the period (108M) | $1.53 |
| **÷ today's diluted shares (120M)** | **$1.38** |

The company issued shares during the period, so averaging the EPS figures printed in old annual reports gives $1.53, about 11% more than the same earnings spread over today's share count. Always divide by today's diluted shares.

## Step 6: reconcile and choose

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical: five versions of earnings per share for the same company, from reported to normalized" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$0</text><line x1="70" y1="180" x2="710" y2="180" stroke="#e2e8f0"/><text x="62" y="184" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$0.6</text><line x1="70" y1="110" x2="710" y2="110" stroke="#e2e8f0"/><text x="62" y="114" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$1.2</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$1.8</text><rect x="104" y="156.667" width="56" height="93.3333" rx="3" fill="#0d9488"/><text x="132" y="150.667" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$0.80</text><text x="134" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Reported</text><text x="134" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">(IAS 33)</text><rect x="232" y="141.5" width="56" height="108.5" rx="3" fill="#0d9488"/><text x="260" y="135.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$0.93</text><text x="262" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">One-offs</text><text x="262" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">removed</text><rect x="360" y="101.833" width="56" height="148.167" rx="3" fill="#0d9488"/><text x="388" y="95.8333" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$1.27</text><text x="390" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Mid-cycle</text><text x="390" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">margin × sales</text><rect x="488" y="71.5" width="56" height="178.5" rx="3" fill="#0d9488"/><text x="516" y="65.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$1.53</text><text x="518" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">8-yr average</text><text x="518" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">old share counts</text><rect x="616" y="89" width="56" height="161" rx="3" fill="#0d9488"/><text x="644" y="83" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$1.38</text><text x="646" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">8-yr average</text><text x="646" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">current shares</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">EPS</text></svg>
<figcaption>Hypothetical: five versions of EPS for the same company, from $0.80 reported to $1.53 on old share counts. The base case uses the mid-cycle figure of $1.27.</figcaption>
</figure>

| Method | EPS | P/E at $14.00 |
|:--|--:|--:|
| Reported (IAS 33) | $0.80 | 17.5x |
| One-offs removed | $0.93 | 15.1x |
| **Mid-cycle margin × revenue** | **$1.27** | **11.0x** |
| 8-yr average, today's shares | $1.38 | 10.1x |

The two normalized methods agree within about 9%, which is close enough. The mid-cycle build is lower because it charges interest on today's higher debt; use it as the base case. If the methods disagreed by more than about 20%, find out why (a structural change, a peak-heavy window, a different interest burden) before choosing. [When normalized EPS misleads](/investing/valuation/when-normalized-eps-misleads-tsx/) lists the usual causes.

## Variants

| Situation | What to change |
|:--|:--|
| Company reports in US dollars | Normalize in US$, convert EPS at a mid-cycle or current rate, and state which |
| Commodity producer | Replace mid-cycle margin with margins at a mid-cycle price deck; see [commodity price sensitivity](/investing/analyze/read-commodity-price-sensitivity-resource-issuers/) |
| Recent large acquisition | Use pro forma history, or margin × revenue only |
| Share-based pay large | Decide whether to keep it as a cost (usually yes) |

## Go deeper

To compare normalized multiples across a peer group, see [normalized EPS vs peers](/investing/valuation/normalized-eps-vs-peers-canada-first-comparison/). For the first step, read [how to spot one-time items in Canadian statements](/investing/analyze/spot-one-time-items-canadian-statements/).

## Related reading

- [What normalized EPS means for Canadian DIY investors](/investing/valuation/what-normalized-eps-means-canadian-diy/)
- [How to read non-GAAP metrics critically](/investing/analyze/read-non-gaap-metrics-critically/)
- [How to read cap tables and fully diluted share counts](/investing/analyze/read-cap-tables-fully-diluted-share-counts/)
- [How to calculate earnings yield in CAD from filings](/investing/valuation/calculate-earnings-yield-in-cad-from-filings/)

## Sources

- IAS 33 *Earnings per Share*; IAS 36 *Impairment of Assets*; IAS 37 *Provisions, Contingent Liabilities and Contingent Assets*; IAS 12 *Income Taxes*; IFRS 8 *Operating Segments*.
- National Instrument 52-112 *Non-GAAP and Other Financial Measures Disclosure*.
- Graham, B. and Dodd, D., *Security Analysis* (1934), on averaging earnings.

## Media credits

- Hero: "A British Columbia sawmill at Coal Creek.jpg" by an unknown photographer, public domain, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:A_British_Columbia_sawmill_at_Coal_Creek.jpg). Cropped and resized to 1280x720. Real photograph of a sawmill at Coal Creek, British Columbia, around 1910, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
