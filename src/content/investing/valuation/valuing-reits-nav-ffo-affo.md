---
title: "Valuation for REITs: NAV, FFO, AFFO Explained for Canadians"
description: "How Canadian DIY investors value REITs: why IFRS net income misleads, how FFO and AFFO are built, how to read NAV and price-to-AFFO, and a worked hypothetical with a sensitivity table — educational, not advice."
category: "valuation"
role: "Hub"
pubDate: 2026-10-30
image: "/images/investing/valuing-reits-nav-ffo-affo.jpg"
imageAlt: "The glass-roofed interior atrium of The CORE Shopping Centre in downtown Calgary, with shoppers on several retail levels"
imageCredit: "Interior of The CORE Shopping Centre, Calgary, Alberta, July 2025. Photo by Chris Woodrich, CC BY-SA 4.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Real estate investment trusts (REITs) are among the most popular income holdings on the TSX, and among the most often mis-valued. The metrics that work for an operating company — P/E, EPS growth, even EV/EBITDA on its own — break down when the main asset is a portfolio of buildings carried at fair value. This guide explains the three numbers Canadian REIT investors actually use: **FFO**, **AFFO** and **NAV**.

Educational only — not financial advice. Every number below is **hypothetical** unless stated otherwise.

## Direct answer

Value a REIT on **two anchors**: (1) **price-to-AFFO** (or its inverse, AFFO yield), which tells you what you pay for recurring, maintenance-adjusted cash flow; and (2) **price-to-NAV**, which compares the unit price with the estimated private-market value of the properties minus debt. Cross-check both against the **AFFO payout ratio** and **leverage**. Ignore IFRS net income per unit for valuation — fair-value swings make it noise.

## Why net income misleads for Canadian REITs

Most Canadian REITs report under IFRS and carry investment properties at **fair value** (IAS 40). When appraisers or management mark property values up or down, that change flows through net income — even though no cash moved.

| Quarter (hypothetical) | Rent-driven cash earnings | Fair-value change on properties | IFRS net income |
|:--|--:|--:|--:|
| Q1 | $90M | +$60M | $150M |
| Q2 | $91M | −$80M | $11M |
| Q3 | $92M | +$5M | $97M |

*Same buildings, same tenants, roughly the same cash — wildly different "earnings." A P/E on this REIT would mean nothing.*

That is why the Canadian industry body REALPAC publishes guidance on **FFO** and **AFFO**, and why most TSX REITs disclose both (as non-GAAP measures, reconciled in the MD&A). Read those reconciliations the way you'd read any adjusted metric — see [reading non-GAAP metrics critically](/investing/analyze/read-non-gaap-metrics-critically/).

## FFO and AFFO: the bridge

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="From IFRS net income to FFO to AFFO" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="102" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="61" y="38" font-size="11.2" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">IFRS net income</text><text x="61" y="70" font-size="9.9" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Includes fair-value</text><text x="61" y="82" font-size="9.9" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">gains and losses</text><line x1="114" y1="60" x2="127" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="130" y="14" width="102" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="181" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Remove noise</text><text x="181" y="63" font-size="9.9" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Fair-value changes,</text><text x="181" y="76" font-size="9.9" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">deferred tax,</text><text x="181" y="89" font-size="9.9" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">one-time gains</text><line x1="233" y1="60" x2="246" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="249" y="14" width="102" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="300" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">= FFO</text><text x="300" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Funds from</text><text x="300" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">operations</text><line x1="353" y1="60" x2="366" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="369" y="14" width="102" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="420" y="38" font-size="11.2" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Subtract upkeep</text><text x="420" y="63" font-size="10.4" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Maintenance capex,</text><text x="420" y="76" font-size="10.4" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">leasing costs,</text><text x="420" y="89" font-size="10.4" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">tenant incentives</text><line x1="473" y1="60" x2="486" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="489" y="14" width="102" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="540" y="38" font-size="11.9" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Rent smoothing</text><text x="540" y="69" font-size="11.0" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Reverse straight-</text><text x="540" y="83" font-size="11.0" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">line rent</text><line x1="592" y1="60" x2="605" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="608" y="14" width="102" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="659" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">= AFFO</text><text x="659" y="69" font-size="10.4" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Recurring,</text><text x="659" y="83" font-size="10.4" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">distributable cash</text></svg>
<figcaption>FFO strips out non-cash fair-value noise; AFFO then subtracts the recurring spending needed to keep the buildings leased. AFFO is the number distributions should be judged against.</figcaption>
</figure>

| Metric | What it measures | Main weakness |
|:--|:--|:--|
| **FFO** | Recurring property earnings before fair-value noise | Ignores the capex needed to keep buildings competitive |
| **AFFO** | FFO after maintenance capex, leasing costs and rent smoothing | "Maintenance" is management's estimate — definitions differ between REITs |
| **NAV** | Property values (cap-rate based) minus debt and other liabilities | Depends on appraisal cap rates that may lag the market |

### Worked AFFO bridge (hypothetical)

<figure class="diagram">
<svg viewBox="0 0 720 300" role="img" aria-label="Hypothetical REIT bridge from IFRS net income to FFO and AFFO, in millions" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="245" x2="710" y2="245" stroke="#cbd5e1"/><rect x="37" y="162" width="51" height="83" rx="3" fill="#0d9488"/><text x="62" y="154" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">40</text><text x="62" y="264" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Net</text><text x="62" y="278" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">income</text><line x1="88" y1="162" x2="122" y2="162" stroke="#cbd5e1" stroke-dasharray="3 3"/><rect x="122" y="68" width="51" height="93" rx="3" fill="#64748b"/><text x="148" y="60" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+45</text><text x="148" y="264" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Fair-value</text><text x="148" y="278" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">loss</text><line x1="173" y1="68" x2="207" y2="68" stroke="#cbd5e1" stroke-dasharray="3 3"/><rect x="207" y="58" width="51" height="10" rx="3" fill="#64748b"/><text x="232" y="50" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+5</text><text x="232" y="264" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Other</text><text x="232" y="278" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">items</text><line x1="258" y1="58" x2="292" y2="58" stroke="#cbd5e1" stroke-dasharray="3 3"/><rect x="292" y="58" width="51" height="187" rx="3" fill="#0d9488"/><text x="318" y="50" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">90</text><text x="318" y="271" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">FFO</text><line x1="343" y1="58" x2="377" y2="58" stroke="#cbd5e1" stroke-dasharray="3 3"/><rect x="377" y="58" width="51" height="25" rx="3" fill="#dc2626"/><text x="402" y="50" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">-12</text><text x="402" y="264" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Maint.</text><text x="402" y="278" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">capex</text><line x1="428" y1="83" x2="462" y2="83" stroke="#cbd5e1" stroke-dasharray="3 3"/><rect x="462" y="83" width="51" height="17" rx="3" fill="#dc2626"/><text x="488" y="75" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">-8</text><text x="488" y="264" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Leasing /</text><text x="488" y="278" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">incentives</text><line x1="513" y1="100" x2="547" y2="100" stroke="#cbd5e1" stroke-dasharray="3 3"/><rect x="547" y="100" width="51" height="6" rx="3" fill="#dc2626"/><text x="572" y="92" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">-3</text><text x="572" y="264" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Straight-</text><text x="572" y="278" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">line rent</text><line x1="598" y1="106" x2="632" y2="106" stroke="#cbd5e1" stroke-dasharray="3 3"/><rect x="632" y="106" width="51" height="139" rx="3" fill="#0d9488"/><text x="658" y="98" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">67</text><text x="658" y="271" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">AFFO</text></svg>
<figcaption>Hypothetical REIT, $ millions. A fair-value loss depresses net income to 40, but FFO is 90 and AFFO 67 once recurring capex and leasing costs are subtracted. Not real data.</figcaption>
</figure>

If this REIT has 100M units and pays $0.55 per unit a year ($55M), then:

| Measure | Per unit | Distribution payout |
|:--|--:|--:|
| FFO | $0.90 | 61% |
| AFFO | $0.67 | **82%** |

The 61% FFO payout looks comfortable; the 82% AFFO payout is the honest one. For what "too high" looks like, see [REIT distributions vs corporate dividends](/investing/dividends/reit-distributions-vs-corporate-dividends/) and [payout ratio explained](/investing/dividends/payout-ratio-explained-canadian-companies/).

## NAV: what the buildings are worth

NAV (net asset value) estimates what the portfolio would fetch in the private market, minus debt. The core input is the **capitalization rate** (cap rate): net operating income (NOI) ÷ property value.

| Step (hypothetical) | Amount |
|:--|--:|
| Stabilized NOI | $150M |
| ÷ Cap rate | 5.5% |
| = Property value | $2,727M |
| − Debt and other liabilities | −$1,200M |
| = NAV | $1,527M |
| ÷ 100M units | **≈ $15.27 per unit** |

If the units trade at $12.50, the REIT is at roughly an **18% discount to NAV**. That might be an opportunity, or the market might be telling you the cap rate is too low.

### Cap-rate sensitivity is the whole game

| Cap rate | Property value ($M) | NAV per unit |
|:--|--:|--:|
| 5.0% | 3,000 | $18.00 |
| 5.5% | 2,727 | $15.27 |
| 6.0% | 2,500 | $13.00 |
| 6.5% | 2,308 | $11.08 |

*A one-point move in cap rate shifts NAV by roughly 30% here, because leverage magnifies the change in property values. Always ask which cap rate the market is implying at today's price.*

## Price-to-AFFO and AFFO yield

Price-to-AFFO is the REIT equivalent of [P/FCF](/investing/valuation/what-p-fcf-means-canadian-diy/). At $12.50 and $0.67 of AFFO, this hypothetical REIT trades at about **18.7× AFFO**, an AFFO yield of about **5.4%**.

| Reading | What it suggests |
|:--|:--|
| Low P/AFFO + large NAV discount | Market doubts values, growth, or the balance sheet — find out which |
| High P/AFFO + NAV premium | Market expects growth (development, rent upside) — check it's funded |
| Low P/AFFO + NAV premium | Rare; recheck your numbers |

Compare only within a property type. Industrial, multi-family, retail, office, seniors housing and diversified REITs trade on very different multiples for good reasons. Our [real estate & REITs sector deep dive](/sectors/real-estate-reits/) groups TSX names this way.

## Leverage and the balance-sheet check

Two REITs with the same AFFO yield are not equally safe if one carries much more debt. Check:

- **Debt-to-gross-book-value** (or debt-to-total-assets) as the REIT defines it
- **Debt-to-EBITDA** for a cash-flow view of leverage (see [EV/EBITDA for Canadians](/investing/valuation/ev-ebitda-for-canadian-diy-investors/))
- **Interest coverage** and the **debt maturity ladder** — refinancing at higher rates can quietly shrink AFFO
- **Variable-rate debt** share and any development commitments

## A five-step REIT valuation routine

1. Pull the latest MD&A from SEDAR+ ([how-to](/investing/analyze/use-sedar-plus-for-stock-research/)); find the FFO/AFFO reconciliation.
2. Recompute the AFFO payout ratio yourself; note how "maintenance capex" is defined.
3. Compute P/AFFO and compare with 3–5 same-type peers ([peer comparison method](/investing/analyze/compare-two-tsx-peers/)).
4. Rebuild NAV at three cap rates and see which one the price implies.
5. Check leverage and maturities; write a bull / bear / watch note ([template](/investing/analyze/stock-brief-template-bull-bear-watch/)).

## Common mistakes

- Using P/E or EPS growth for a REIT.
- Treating FFO payout as distribution safety (use AFFO).
- Comparing AFFO across REITs without checking definitions.
- Trusting NAV without testing the cap rate.
- Ignoring tax character — REIT distributions are not dividends for tax purposes. See [REIT distributions vs corporate dividends](/investing/dividends/reit-distributions-vs-corporate-dividends/).

## Soft CTA

A REIT valuation worksheet (AFFO bridge, NAV at three cap rates, payout check) is planned for the **Valuation Without Fake Precision** ebook. The method above is complete and free.

## Media credits

- Hero: “CORE Shopping Centre, Calgary, Alberta, 2025-07-14 01.jpg” by Chris Woodrich, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:CORE_Shopping_Centre,_Calgary,_Alberta,_2025-07-14_01.jpg). Cropped and resized to 1280×720. Real photograph, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
