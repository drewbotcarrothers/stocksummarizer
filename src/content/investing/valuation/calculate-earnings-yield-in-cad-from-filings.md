---
title: "How to Calculate Earnings Yield in CAD from Filings"
description: "An earnings-yield worksheet for TSX stocks: TTM diluted EPS from the P/E build, average-rate FX for USD reporters, adjusted EPS labelled, and an after-tax EBIT ÷ EV version. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-15
image: "/images/investing/calculate-earnings-yield-in-cad-from-filings.jpg"
imageAlt: "Two vintage mechanical adding machines displayed on a white pedestal in a museum"
imageCredit: "Vintage adding machine photograph by Jeremy Nacario, CC BY-SA 4.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Earnings yield uses the same EPS as P/E, so the hard part (building trailing diluted EPS from four quarters, spotting one-offs, handling a fiscal year that does not end in December) is already done in [how to calculate P/E in CAD from filings](/investing/valuation/calculate-pe-in-cad-from-filings/). This worksheet takes that EPS and adds what is specific to the yield form: getting price and EPS into one currency, choosing reported or adjusted EPS, and building the **EBIT ÷ EV** variant with an after-tax version so it can sit next to the shareholder-level yield. It is educational; all figures are hypothetical.

## Direct answer

1. Take **trailing twelve-month diluted EPS** from the P/E worksheet (IAS 33 figure; adjusted EPS only as a labelled second line).
2. Put EPS and price in the **same currency**: convert a US-dollar EPS at the **average** rate for the period, then divide by the TSX price in CAD.
3. Earnings yield = EPS ÷ price.
4. For the capital-neutral view, divide **TTM EBIT** by **enterprise value** (built as in the EV/EBITDA worksheet), and also show EBIT × (1 − tax rate) ÷ EV so it compares with the after-tax earnings yield.

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Five-step flow for calculating earnings yield in Canadian dollars" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Diluted EPS</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">TTM, from the</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">P/E worksheet</text><line x1="134.4" y1="60" x2="149.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Same currency</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Average-rate FX</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">for USD reporters</text><line x1="278.8" y1="60" x2="293.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Price</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Latest TSX close</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">in CAD</text><line x1="423.2" y1="60" x2="438.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Earnings yield</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">EPS ÷ price</text><line x1="567.6" y1="60" x2="582.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">EBIT ÷ EV</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Optional</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">capital-neutral view</text></svg>
<figcaption>Five steps for earnings yield in Canadian dollars; the last step is optional but useful for levered companies.</figcaption>
</figure>

## Worked example: CAD reporter (hypothetical)

| Input | Where to find it | Value |
|:--|:--|--:|
| TTM diluted EPS | Last four quarterly reports (or annual + latest quarters), per the P/E worksheet | $2.80 |
| Share price | Latest TSX close | $40.00 |
| **Earnings yield** | $2.80 ÷ $40.00 | **7.0%** |
| Equivalent P/E | $40.00 ÷ $2.80 | 14.3x |
| Adjusted EPS (company non-GAAP) | MD&A, reconciled per NI 52-112 | $3.10 |
| Adjusted earnings yield (label it) | $3.10 ÷ $40.00 | 7.75% |

Keep both lines. If adjusted EPS is consistently above reported, read [how to read non-GAAP metrics critically](/investing/analyze/read-non-gaap-metrics-critically/) before using the higher yield.

## Worked example: USD reporter on the TSX (hypothetical)

Some TSX-listed companies report in US dollars. EPS is a flow over the year, so convert it at the **average** exchange rate for the same twelve months; the share price is already in CAD.

| Input | Value |
|:--|--:|
| TTM diluted EPS (US$) | US$2.00 |
| Average USD/CAD for the twelve months (illustrative) | 1.37 |
| TTM diluted EPS (C$) | C$2.74 |
| TSX share price | C$45.00 |
| **Earnings yield** | **6.09%** |

Dividing US$2.00 by C$45.00 would give 4.4%, which understates the yield by about a quarter. The currency steps are explained in [how to handle currency when analyzing CAD vs USD results](/investing/analyze/handle-currency-cad-vs-usd-results/). Use the Bank of Canada's published rates.

## The EBIT ÷ EV variant (hypothetical)

Build enterprise value as in [how to calculate EV/EBITDA in CAD from filings](/investing/valuation/calculate-ev-ebitda-in-cad-from-filings/): diluted market cap plus debt, lease liabilities, preferreds and non-controlling interests, minus cash. Then:

| Input | Where to find it | Value |
|:--|:--|--:|
| TTM EBIT (operating income) | Income statement, four quarters | C$600M |
| Enterprise value | EV worksheet | C$7,500M |
| **EBIT ÷ EV (pre-tax)** | 600 ÷ 7,500 | **8.0%** |
| Illustrative tax rate | Statutory or normalized | 26.5% |
| **EBIT × (1 − t) ÷ EV** | 441 ÷ 7,500 | **5.88%** |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical: one company measured three ways gives three different yields" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0%</text><line x1="70" y1="197.5" x2="710" y2="197.5" stroke="#e2e8f0"/><text x="62" y="201.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">2.5%</text><line x1="70" y1="145" x2="710" y2="145" stroke="#e2e8f0"/><text x="62" y="149" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">5%</text><line x1="70" y1="92.5" x2="710" y2="92.5" stroke="#e2e8f0"/><text x="62" y="96.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">7.5%</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">10%</text><rect x="146.667" y="103" width="56" height="147" rx="3" fill="#0d9488"/><text x="174.667" y="97" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">7.0%</text><text x="176.667" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Earnings yield</text><text x="176.667" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">(EPS ÷ price)</text><rect x="360" y="82" width="56" height="168" rx="3" fill="#0d9488"/><text x="388" y="76" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">8.0%</text><text x="390" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">EBIT ÷ EV</text><text x="390" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">(pre-tax)</text><rect x="573.333" y="126.52" width="56" height="123.48" rx="3" fill="#0d9488"/><text x="601.333" y="120.52" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">5.9%</text><text x="603.333" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">EBIT × (1 − t) ÷ EV</text><text x="603.333" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">(after tax)</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Yield</text></svg>
<figcaption>Hypothetical: the same company shows a 7.0% earnings yield, an 8.0% pre-tax EBIT yield and a 5.9% after-tax EBIT yield. Compare like with like: pre-tax with pre-tax, after-tax with after-tax.</figcaption>
</figure>

When the after-tax EBIT yield is well below the earnings yield, as here, leverage is boosting the shareholder-level yield: shareholders get a higher yield in exchange for carrying the debt risk.

## Choices that change the answer

| Choice | Option A | Option B | Rule |
|:--|:--|:--|:--|
| EPS | Reported diluted | Adjusted | Reported first; adjusted labelled |
| EBIT | Reported operating income | Excluding one-offs | Match the treatment across peers |
| Lease effect | IFRS 16 EBIT (lease interest below EBIT) | US GAAP operating-lease cost inside EBIT | If lease liabilities are in EV, use IFRS-style EBIT; see [comparing a TSX stock to its US peer](/investing/valuation/compare-tsx-stock-to-us-peer/) |
| Equity-accounted income | Inside EBIT | Excluded | If investments are subtracted from EV, exclude their income |
| Tax rate | Statutory | Cash or normalized | State which; show both if they differ a lot |
| Period | Trailing | Forward | Trailing for the worksheet; forward is covered in [what forward P/E means](/investing/valuation/what-forward-pe-means-canadian-diy/) |

## Checklist

| Step | Done when |
|:--|:--|
| EPS | TTM diluted from the P/E worksheet; adjusted labelled |
| Currency | EPS converted at the average rate if needed |
| Price | Latest TSX close, same date as peers |
| Earnings yield | EPS ÷ price |
| EBIT ÷ EV | EV built with all claims; EBIT scope matches EV |
| After-tax version | Tax rate stated |

## Go deeper

The traps (bond comparisons, peak earnings, one-offs, D&A that understates capex) are in [when earnings yield misleads on TSX stocks](/investing/valuation/when-earnings-yield-misleads-tsx/). To compare the result across peers, see [earnings yield vs peers](/investing/valuation/earnings-yield-vs-peers-canada-first-comparison/).

## Related reading

- [What earnings yield means for Canadian DIY investors](/investing/valuation/what-earnings-yield-means-canadian-diy/)
- [How to spot one-time items in Canadian financial statements](/investing/analyze/spot-one-time-items-canadian-statements/)
- [How to read cap tables and fully diluted share counts](/investing/analyze/read-cap-tables-fully-diluted-share-counts/)
- [How to read quarterly earnings for TSX companies](/investing/analyze/how-to-read-quarterly-earnings-tsx/)

## Sources

- IAS 33 *Earnings per Share*; IAS 34 *Interim Financial Reporting*.
- IAS 21 *The Effects of Changes in Foreign Exchange Rates* (average rates for income items).
- IFRS 16 *Leases*; FASB ASC 842 *Leases* (US peers); IAS 12 *Income Taxes*.
- National Instrument 52-112 *Non-GAAP and Other Financial Measures Disclosure*.
- Bank of Canada exchange rates.

## Media credits

- Hero: "Vintage Adding Machine.JPG" by Jeremy Nacario, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Vintage_Adding_Machine.JPG). Cropped and resized to 1280x720. Real photograph of vintage adding machines on display, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
