---
title: "How ETF Distribution Yield Differs from Stock Dividend Yield"
description: "Trailing, annualized, holdings-weighted and SEC 30-day yields explained, with a worked covered call ETF example and a four-step way to compare ETFs with dividend stocks. Educational."
category: "dividends"
role: "Spoke"
pubDate: 2026-11-23
image: "/images/investing/etf-distribution-yield-vs-stock-dividend-yield.jpg"
imageAlt: "White Stratford water tower with the city's name and logo against a pale sky in Stratford, Ontario"
imageCredit: "Stratford water tower photograph by Chris Woodrich, CC BY-SA 4.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "mixed"
---

A stock's dividend yield and an ETF's distribution yield look like the same number on a quote page. They aren't. A stock yield is the company's declared dividend divided by its price. An ETF's "yield" can be one of several calculations, and the cash behind it can include option premiums, realized gains and return of capital as well as dividends.

This post explains the yield definitions you'll see and how to compare them fairly. It focuses on the definitions; for the strategy trade-offs, see [covered call ETFs vs owning dividend stocks directly](/investing/dividends/covered-call-etfs-vs-dividend-stocks/), and for the tax side, [return of capital distributions](/investing/dividends/return-of-capital-distributions-what-to-track/). Educational only; examples are hypothetical.

## Direct answer

A **stock dividend yield** is usually the indicated annual dividend (latest regular dividend × payments per year) divided by price. An **ETF distribution yield** is usually the latest distribution annualized, or the past 12 months of distributions, divided by price or NAV. Neither tells you whether the cash came from **income the holdings earned**. To compare an ETF with stocks, look at the **weighted dividend yield of the holdings** (gross of fees) and subtract the **MER**, then check the annual **tax character** of distributions to see how much was return of capital.

## The yield definitions

| Measure | How it's calculated | Where you see it | What it misses |
|:--|:--|:--|:--|
| Indicated dividend yield (stock) | Latest regular dividend × payments per year ÷ price | Broker and quote pages | Future raises or cuts; specials excluded (usually) |
| Trailing dividend yield (stock) | Dividends paid in past 12 months ÷ price | Screeners | Can include specials or a dividend since cut |
| Annualized distribution yield (ETF) | Latest distribution × payments per year ÷ price or NAV | ETF provider pages | Whether the payout is covered by income |
| Trailing 12-month yield (ETF) | Distributions in past 12 months ÷ price or NAV | Provider pages, factsheets | Year-end special distributions can inflate it |
| Weighted average dividend yield of holdings | Holdings' dividend yields weighted by fund weight | Some factsheets, or calculate from holdings | Fees, option income, ROC |
| SEC 30-day yield (US-listed funds) | Standardized income earned over 30 days, net of expenses | US fund pages | Not a standard for Canadian-listed ETFs |
| Yield to maturity (bond ETFs) | Weighted yield if bonds held to maturity | Bond ETF pages | Not comparable with equity dividend yields |

[How to read an ETF factsheet](/investing/indexes-etfs/how-to-read-etf-factsheet/) shows where each of these typically appears.

## Where an ETF distribution comes from

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Where an ETF distribution comes from: holdings income less fees, plus option premiums or realized gains, plus return of capital when the payout is set above income" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Holdings</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">dividends and</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">interest received</text><line x1="134.4" y1="60" x2="149.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Minus fees</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">MER and</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">trading costs</text><line x1="278.8" y1="60" x2="293.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Plus other cash</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">option premium,</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">realized gains</text><line x1="423.2" y1="60" x2="438.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Plus ROC</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">if payout set</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">above income</text><line x1="567.6" y1="60" x2="582.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Distribution</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">what the</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">yield quotes</text></svg>
<figcaption>An ETF can set its distribution above what the holdings earn. The difference is paid from other sources, often return of capital.</figcaption>
</figure>

A stock's dividend is paid from the company's cash. An ETF's distribution is a policy set by the fund manager. Many monthly-pay ETFs target a fixed amount per unit and then report the tax character after year-end: eligible Canadian dividends, foreign income, capital gains and return of capital.

## Same ETF, four yields

Take a hypothetical covered call ETF that pays C$0.12 a month at a unit price of C$15.00.

<figure class="diagram">
<svg viewBox="0 0 720 186" role="img" aria-label="Hypothetical covered call ETF: annualized distribution yield 9.6 percent and trailing 12 month yield 9.1 percent versus a holdings dividend yield of 3.4 percent, or 2.75 percent after fees" xmlns="http://www.w3.org/2000/svg"><text x="240" y="47" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Annualized latest distribution</text><rect x="250" y="30" width="375.273" height="24" rx="4" fill="#f59e0b"/><text x="633.273" y="47" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">9.6%</text><text x="240" y="81" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Trailing 12-month distribution</text><rect x="250" y="64" width="355.727" height="24" rx="4" fill="#f59e0b"/><text x="613.727" y="81" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">9.1%</text><text x="240" y="115" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Weighted dividend yield of holdings</text><rect x="250" y="98" width="132.909" height="24" rx="4" fill="#0d9488"/><text x="390.909" y="115" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">3.4%</text><text x="240" y="149" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Holdings yield minus MER (0.65%)</text><rect x="250" y="132" width="107.5" height="24" rx="4" fill="#0d9488"/><text x="365.5" y="149" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">2.75%</text></svg>
<figcaption>Hypothetical figures. The quoted yield is almost three times what the underlying stocks pay in dividends.</figcaption>
</figure>

| Hypothetical yield measure | Value | What it represents |
|:--|--:|:--|
| Annualized latest distribution | 9.6% | C$0.12 × 12 ÷ C$15.00 |
| Trailing 12-month distribution | 9.1% | Includes lower payments earlier in the year |
| Weighted dividend yield of holdings | 3.4% | What the stocks themselves pay |
| Holdings yield minus 0.65% MER | 2.75% | Dividend income left after fees |

The 6.85-point gap between 9.6% and 2.75% is filled by option premiums, realized gains or return of capital. None of these is wrong in itself, but they're different from a growing dividend paid out of company profits. Option premiums cap upside, and return of capital can mean you're getting your own money back. See [MER, TER and tracking difference](/investing/indexes-etfs/mer-ter-tracking-difference/) for how fees show up.

## Stock vs ETF yield, side by side

| Question | Dividend stock | Dividend or covered call ETF |
|:--|:--|:--|
| Who sets the payout? | Company board | Fund manager's distribution policy |
| Source of cash | Company earnings and cash flow | Holdings income, option premiums, gains, ROC |
| Can it grow? | Yes, if the business grows | Often fixed per unit; changes when policy changes |
| What signals trouble? | Payout above FCF, rising debt | NAV declining while distribution holds steady |
| Tax character | Usually eligible dividends (Canadian payers) | Mix reported annually; check the T3 or provider breakdown |
| Fees | None at the company level | MER every year |

## A fair comparison in four steps

1. Find the ETF's **weighted holdings dividend yield**, or calculate it from the holdings file.
2. Subtract the **MER** to get the dividend income an investor actually keeps.
3. Check the last three years of **tax character** to see the return-of-capital share.
4. Compare the **NAV trend** over the same years. A steady distribution with a falling NAV means part of the payout is coming from capital.

## Common mistakes

- Comparing a 9% ETF distribution yield with a 4% bank dividend yield as if they measured the same thing.
- Using a trailing yield boosted by a year-end capital gains distribution.
- Assuming a monthly distribution is safer than a quarterly dividend; see [monthly vs quarterly dividends](/investing/dividends/monthly-vs-quarterly-dividends/).
- Ignoring US withholding inside ETFs that hold US stocks; see [US withholding tax in Canadian vs US-listed ETFs](/investing/indexes-etfs/us-withholding-tax-canadian-vs-us-listed-etfs/).

## Go deeper

If you're deciding between funds and stocks for income, [Canadian equity ETFs vs individual stocks](/investing/indexes-etfs/canadian-equity-etfs-vs-individual-stocks/) and the [ETF investor to stock picker playbook](/investing/pathways/etf-investor-to-stock-picker/) walk through the trade-offs. Our [discount broker comparison](/investing/brokers-tools/compare-canadian-discount-brokers/) covers ETF trading costs.

## Related reading

- [Why yield alone is a terrible screen](/investing/dividends/why-yield-alone-is-a-terrible-screen/)
- [Building an income sleeve without abandoning total return](/investing/dividends/income-sleeve-without-abandoning-total-return/)
- [What dividend yield means for Canadian DIY investors](/investing/valuation/what-dividend-yield-means-canadian-diy/)

## Sources

- ETF provider product pages, factsheets and annual distribution tax-character breakdowns.
- US SEC Form N-1A instructions for the standardized 30-day yield (US-registered funds).
- CRA guidance on T3 slips and return of capital.

## Media credits

- Hero: "Stratford Water Tower, Stratford, Ontario, 2025-08-04 01.jpg" by Chris Woodrich, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Stratford_Water_Tower,_Stratford,_Ontario,_2025-08-04_01.jpg). Cropped and resized to 1280x720. Real photograph, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
