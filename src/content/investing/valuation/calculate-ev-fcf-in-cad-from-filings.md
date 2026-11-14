---
title: "How to Calculate EV/FCF in CAD from Filings"
description: "A step-by-step EV/FCF worksheet for TSX stocks: unlevered FCF from operating cash flow, IAS 7 interest and dividend classification, the tax shield, lease basis and FX. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-14
image: "/images/investing/calculate-ev-fcf-in-cad-from-filings.jpg"
imageAlt: "Maple trees in a snowy woodland with metal buckets hung on taps to collect sap"
imageCredit: "Maple sap buckets photograph by Dave Pape, public domain, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

EV/FCF needs two things that data screens rarely build correctly: an enterprise value with every claim on the business, and a free cash flow figure **before** those claims are paid. The second part is the hard one, because IAS 7 lets companies put interest paid, interest received and dividends received in different sections of the cash flow statement.

This post is the worksheet. The concept, and why EV/FCF is the unlevered cousin of P/FCF, is in [what EV/FCF means for Canadian DIY investors](/investing/valuation/what-ev-fcf-means-canadian-diy/). The EV bridge is built step by step in [how to calculate EV/EBITDA in CAD from filings](/investing/valuation/calculate-ev-ebitda-in-cad-from-filings/), and the TTM cash flow build and the shareholder-level FCF are in [how to calculate P/FCF in CAD from filings](/investing/valuation/calculate-p-fcf-in-cad-from-filings/). It is educational; all numbers are hypothetical.

## Direct answer

1. Build **EV**: diluted market cap + debt + lease liabilities + preferreds + NCI − cash − equity-accounted investments, all at one balance-sheet date and the **closing** rate.
2. Start from **TTM operating cash flow** (annual + YTD − prior YTD).
3. **Add back interest paid** if it sits in operating activities. **Remove interest received** and **dividends from associates** if they sit there and the matching cash or investment was subtracted from EV.
4. **Subtract the tax shield**: net interest × an illustrative tax rate, because unlevered FCF assumes no debt.
5. **Subtract all capex** (property, plant and equipment plus intangibles).
6. Leases: if lease liabilities are in EV, **do not** deduct lease payments; if not, deduct them.
7. Convert at the **average** rate for the period. EV/FCF = EV ÷ unlevered FCF.

## Worked example (hypothetical, C$ millions)

The company classifies interest paid, interest received and dividends from associates in operating activities. An illustrative 26.5% tax rate is used.

| Unlevered FCF build | C$M |
|:--|--:|
| TTM operating cash flow, as reported | 700 |
| + Interest paid (in operating) | +60 |
| − Interest received (in operating) | −10 |
| − Dividends received from associates (in operating) | −15 |
| − Tax shield on net interest ((60 − 10) × 26.5%) | −13 |
| − Capex: property, plant and equipment | −280 |
| − Capex: intangible assets | −30 |
| **Unlevered FCF** | **412** |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical bridge from reported operating cash flow to unlevered free cash flow" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0</text><line x1="70" y1="195" x2="710" y2="195" stroke="#e2e8f0"/><text x="62" y="199" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">200</text><line x1="70" y1="140" x2="710" y2="140" stroke="#e2e8f0"/><text x="62" y="144" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">400</text><line x1="70" y1="85" x2="710" y2="85" stroke="#e2e8f0"/><text x="62" y="89" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">600</text><line x1="70" y1="30" x2="710" y2="30" stroke="#e2e8f0"/><text x="62" y="34" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">800</text><rect x="87.3714" y="57.5" width="56.6857" height="192.5" rx="3" fill="#0d9488"/><text x="115.714" y="51.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">700</text><text x="115.714" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Operating</text><text x="115.714" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">cash flow</text><rect x="178.8" y="41" width="56.6857" height="16.5" rx="3" fill="#f59e0b"/><text x="207.143" y="35" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+60</text><text x="207.143" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Interest</text><text x="207.143" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">paid</text><rect x="270.229" y="41" width="56.6857" height="2.75" rx="3" fill="#0ea5e9"/><text x="298.571" y="35" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−10</text><text x="298.571" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Interest</text><text x="298.571" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">received</text><rect x="361.657" y="43.75" width="56.6857" height="4.125" rx="3" fill="#0ea5e9"/><text x="390" y="37.75" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−15</text><text x="390" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Associate</text><text x="390" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">dividends</text><rect x="453.086" y="47.875" width="56.6857" height="3.575" rx="3" fill="#0ea5e9"/><text x="481.429" y="41.875" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−13</text><text x="481.429" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Tax shield</text><text x="481.429" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">on interest</text><rect x="544.514" y="51.45" width="56.6857" height="85.25" rx="3" fill="#0ea5e9"/><text x="572.857" y="45.45" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−310</text><text x="572.857" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Capex</text><rect x="635.943" y="136.7" width="56.6857" height="113.3" rx="3" fill="#0f172a"/><text x="664.286" y="130.7" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">412</text><text x="664.286" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Unlevered</text><text x="664.286" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">FCF</text></svg>
<figcaption>Hypothetical, C$ millions: from C$700M of reported operating cash flow to C$412M of unlevered FCF. Interest and investment income come out, the tax benefit of debt comes out, and all capex is charged.</figcaption>
</figure>

| EV build | C$M |
|:--|--:|
| Diluted market cap | 5,000 |
| + Debt | 1,800 |
| + Lease liabilities | 250 |
| + Preferred shares | 200 |
| + Non-controlling interests | 100 |
| − Cash | −300 |
| − Equity-accounted investments | −250 |
| **Enterprise value** | **6,800** |
| **EV/FCF** | **16.5x** |
| Unlevered FCF yield (FCF ÷ EV) | 6.1% |

## The IAS 7 classification adjustments

Two companies with identical cash flows can show different operating cash flow purely because of classification choices. The adjustments below put them on one basis.

<figure class="diagram">
<svg viewBox="0 0 720 190" role="img" aria-label="Four IAS 7 classification adjustments when building unlevered free cash flow" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#0d9488" stroke-width="2"/><rect x="10" y="10" width="164.5" height="36" rx="12" fill="#0d9488"/><rect x="10" y="34" width="164.5" height="12" fill="#0d9488"/><text x="92.25" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Interest paid</text><text x="92.25" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">In operating:</text><text x="92.25" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">add it back</text><text x="92.25" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">In financing:</text><text x="92.25" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">already out</text><rect x="188.5" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#0ea5e9" stroke-width="2"/><rect x="188.5" y="10" width="164.5" height="36" rx="12" fill="#0ea5e9"/><rect x="188.5" y="34" width="164.5" height="12" fill="#0ea5e9"/><text x="270.75" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Tax shield</text><text x="270.75" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Either way,</text><text x="270.75" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">subtract interest</text><text x="270.75" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">× tax rate</text><text x="270.75" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">(cash taxes saved)</text><rect x="367" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/><rect x="367" y="10" width="164.5" height="36" rx="12" fill="#f59e0b"/><rect x="367" y="34" width="164.5" height="12" fill="#f59e0b"/><text x="449.25" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Interest received</text><text x="449.25" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">If cash is</text><text x="449.25" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">subtracted in EV,</text><text x="449.25" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">remove it</text><text x="449.25" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">from cash flow</text><rect x="545.5" y="10" width="164.5" height="170" rx="12" fill="#ffffff" stroke="#dc2626" stroke-width="2"/><rect x="545.5" y="10" width="164.5" height="36" rx="12" fill="#dc2626"/><rect x="545.5" y="34" width="164.5" height="12" fill="#dc2626"/><text x="627.75" y="33" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Associate dividends</text><text x="627.75" y="70" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">If investments are</text><text x="627.75" y="89" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">subtracted in EV,</text><text x="627.75" y="108" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">remove them</text><text x="627.75" y="127" font-size="11.5" font-weight="400" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">from cash flow</text></svg>
<figcaption>Wherever the company classifies interest and dividends, the goal is the same: operating cash flow before financing, with no income from assets you already subtracted in EV.</figcaption>
</figure>

| Item | Classified in operating | Classified in financing or investing |
|:--|:--|:--|
| Interest paid | Add it back | Already excluded; do nothing |
| Tax shield on interest | Subtract | Subtract (cash taxes were still lowered by the deduction) |
| Interest received | Remove, if cash is subtracted in EV | Already excluded |
| Dividends from associates | Remove, if investments are subtracted in EV | Already excluded |
| Capitalized interest inside capex | Treat as interest, not capex, if material | Same |

From 2027, IFRS 18 amends IAS 7 so that most non-financial companies classify interest paid as financing and interest and dividends received as investing, which will remove much of this work for future periods. Until then, read the accounting policy note.

## Lease basis: pick one and stick to it

| Hypothetical | Leases in EV | Leases excluded |
|:--|--:|--:|
| Enterprise value | C$6,800M | C$6,550M |
| Unlevered FCF | C$412M | C$360M (after C$45M principal and C$7M after-tax lease interest) |
| EV/FCF | 16.5x | 18.2x |

Both are defensible; mixing them across peers is not. The leases-excluded basis is closer to how US GAAP companies present operating leases, which helps when the peer set includes US names.

## Canada-first notes

| Issue | What to do |
|:--|:--|
| USD reporters | Cash flows at the average rate, EV items at the closing rate (Bank of Canada rates) |
| Tax rate for the shield | Use the company's statutory rate from the income tax note, labelled as an assumption |
| Resource issuers paying little cash tax | Show unlevered FCF at the actual and at a normalized tax rate |
| Holding companies | Associates' dividends may be the main cash inflow; keep investments in EV instead of subtracting them |
| Decommissioning and pension deficits | Consider adding them to EV as debt-like claims, and keep the matching cash payments in FCF |

## Go deeper

Before trusting the figure, run it through [when EV/FCF misleads on TSX stocks](/investing/valuation/when-ev-fcf-misleads-tsx/), then compare it in [EV/FCF vs peers: a Canada-first comparison guide](/investing/valuation/ev-fcf-vs-peers-canada-first-comparison/).

## Related reading

- [How to analyze free cash flow for stock decisions](/investing/analyze/free-cash-flow-analysis/)
- [What is free cash flow?](/investing/glossary/what-is-free-cash-flow/)
- [How to read IFRS notes that trip up US-trained readers](/investing/analyze/read-ifrs-notes-us-trained-readers/)
- [How to handle currency when analyzing CAD vs USD results](/investing/analyze/handle-currency-cad-vs-usd-results/)

## Sources

- IAS 7 *Statement of Cash Flows*; IFRS 18 *Presentation and Disclosure in Financial Statements* (amendments to IAS 7).
- IFRS 16 *Leases*; IAS 23 *Borrowing Costs*; IAS 12 *Income Taxes*.
- IAS 28 *Investments in Associates and Joint Ventures*; IAS 21 *The Effects of Changes in Foreign Exchange Rates*; Bank of Canada exchange rates.

## Media credits

- Hero: "Maple sap buckets - Beaver Meadow Audubon Center.jpg" by Dave Pape, public domain, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Maple_sap_buckets_-_Beaver_Meadow_Audubon_Center.jpg). Cropped and resized to 1280x720. Real photograph of maple trees tapped with sap buckets, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
