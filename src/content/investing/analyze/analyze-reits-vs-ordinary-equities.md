---
title: "How to Analyze REITs Differently from Ordinary Equities"
description: "Which ordinary-equity habits to drop for Canadian REITs (EPS, P/E, earnings payout) and what to use instead: FFO/AFFO, NAV, debt/GBV, same-property NOI. Educational, not advice."
category: "analyze"
role: "Spoke"
pubDate: 2026-11-09
image: "/images/investing/analyze-reits-vs-ordinary-equities.jpg"
imageAlt: "Apartment towers on Lake Shore Boulevard in Toronto seen across snow from High Park"
imageCredit: "Apartment buildings viewed from High Park, photograph by Chicken4War, CC BY-SA 4.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

A Canadian REIT owns income-producing property and passes most of its cash to unitholders. That structure breaks several ordinary-equity habits. **EPS** is distorted by fair-value gains and losses on property. **Free cash flow** mixes maintenance spending with acquisitions and developments. **P/E** is therefore often meaningless. And distributions can include a **return of capital**, which changes your tax picture.

This post is an **analysis checklist** for switching from the ordinary-equity lens. The metrics themselves are explained in [valuing REITs with NAV, FFO and AFFO](/investing/valuation/valuing-reits-nav-ffo-affo/), [What is FFO?](/investing/glossary/what-is-ffo/) and the [REIT sector explainer](/investing/sectors/how-reits-make-money/); this guide links them rather than repeating them. It is educational and does not rate any REIT.

## Direct answer

Swap five habits: (1) use **FFO and AFFO per unit** instead of EPS; (2) use **NAV and the implied cap rate** instead of P/E; (3) use the **AFFO payout ratio** instead of an earnings payout ratio; (4) use **debt to gross book value and interest coverage**, plus the debt maturity ladder, instead of net debt/EBITDA alone; and (5) read **same-property NOI, occupancy and lease expiries** instead of revenue growth. Then check how distributions are taxed.

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="REIT cash flow chain from rent to distribution" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Rent</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Leases with</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">tenants</text><line x1="134.4" y1="60" x2="151.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">NOI</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Rent minus</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">property costs</text><line x1="278.8" y1="60" x2="295.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">FFO</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Minus interest,</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">G&amp;A; no FV gains</text><line x1="423.2" y1="60" x2="440.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">AFFO</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Minus maintenance</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">capex, leasing</text><line x1="567.6" y1="60" x2="584.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Distribution</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Paid from</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">AFFO</text></svg>
<figcaption>Use NOI, FFO and AFFO in place of EBITDA, EPS and FCF. Definitions follow REALPAC guidance; issuers may adjust them.</figcaption>
</figure>

## Habit swap table

| Ordinary-equity habit | Why it fails for REITs | REIT replacement | Read this |
|:--|:--|:--|:--|
| EPS and P/E | IAS 40 fair-value changes swing net income | FFO/AFFO per unit; P/FFO, P/AFFO | [What is FFO?](/investing/glossary/what-is-ffo/) |
| Book value | Property at fair value is a starting point, not a market price | NAV per unit; implied cap rate | [NAV, FFO, AFFO](/investing/valuation/valuing-reits-nav-ffo-affo/) |
| Earnings payout ratio | Depreciation and fair-value items distort earnings | AFFO payout ratio | [REIT distributions vs dividends](/investing/dividends/reit-distributions-vs-corporate-dividends/) |
| Revenue growth | Acquisitions inflate it | Same-property NOI growth | [Organic vs acquisition growth](/investing/analyze/compare-organic-vs-acquisition-growth/) |
| Net debt / EBITDA only | Asset-heavy, long-lived collateral | Debt / GBV, interest coverage, maturity ladder, fixed vs variable debt | [Debt notes](/investing/analyze/read-debt-notes-covenant-language/) |
| Capex as one line | Maintenance vs growth matters for AFFO | Maintenance capex, leasing costs, development pipeline | [Capex plans](/investing/analyze/read-capex-plans-mdna/) |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical NAV per unit at different cap rates" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$0</text><line x1="70" y1="198" x2="710" y2="198" stroke="#e2e8f0"/><text x="62" y="201.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$6</text><line x1="70" y1="145" x2="710" y2="145" stroke="#e2e8f0"/><text x="62" y="149" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$12</text><line x1="70" y1="92" x2="710" y2="92" stroke="#e2e8f0"/><text x="62" y="96.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$18</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$24</text><rect x="147" y="75" width="60" height="175" rx="3" fill="#0d9488"/><text x="176.667" y="69" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$20</text><text x="176.667" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Cap rate 5.0%</text><rect x="360" y="99" width="60" height="151" rx="3" fill="#0d9488"/><text x="390" y="92.625" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$17.3</text><text x="390" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Cap rate 5.5%</text><rect x="573" y="119" width="60" height="131" rx="3" fill="#0d9488"/><text x="603.333" y="112.75" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$15</text><text x="603.333" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Cap rate 6.0%</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Hypothetical NAV per unit ($)</text></svg>
<figcaption>Hypothetical: $150M NOI, $1.0B debt, 100M units. A half-point rise in the cap rate cuts NAV per unit by about 14%, more than the roughly 9% drop in property value, because of leverage.</figcaption>
</figure>

## REIT-specific questions

| Question | Where to look |
|:--|:--|
| What property types and cities? | Portfolio section of the MD&A or AIF |
| How much rent rolls over in the next three years, and at what spread to market? | Lease maturity table; renewal spreads |
| Who are the largest tenants? | Top tenants table; [customer concentration](/investing/analyze/analyze-customer-concentration-risk/) |
| What cap rate is used in the IFRS valuation? | Investment property note |
| How is the distribution taxed? | Annual tax allocation (return of capital, capital gains, other income) |
| Does it still qualify for the REIT exception from SIFT tax? | AIF risk factors and tax section |

## Tax: the ordinary-equity gap

Corporate dividends are often eligible dividends. REIT distributions are usually a mix of other income, capital gains and **return of capital (ROC)**. ROC is not taxed when received in a taxable account but lowers your adjusted cost base. Track it in your [ACB records](/investing/accounts/adjusted-cost-base-tracking-diy-portfolios/).

## Checklist

| Step | Done when |
|:--|:--|
| Earnings metrics switched | FFO/AFFO per unit in place of EPS |
| NAV and implied cap rate noted | Compared with the REIT's own IFRS cap rate |
| AFFO payout calculated | Distribution per unit ÷ AFFO per unit |
| Leverage and maturities logged | Debt/GBV, coverage, next three years of maturities |
| Same-property NOI trend | Four to eight quarters |
| Distribution tax mix saved | ROC share recorded for ACB |

## Go deeper

Rate moves hit REITs much like they hit utilities and pipelines; see [analyzing pipelines and utilities as bond proxies](/investing/analyze/analyze-pipelines-utilities-bond-proxies/) for the rate-sensitivity lens.

## Related reading

- [Valuation for REITs: NAV, FFO, AFFO explained](/investing/valuation/valuing-reits-nav-ffo-affo/)
- [What is FFO?](/investing/glossary/what-is-ffo/)
- [Real Estate – REITs: industry structure and how money is made](/investing/sectors/how-reits-make-money/)
- [REIT distributions vs corporate dividends](/investing/dividends/reit-distributions-vs-corporate-dividends/)

## Sources

- IAS 40 *Investment Property* (fair-value model).
- REALPAC *White Paper on Funds From Operations & Adjusted Funds From Operations for IFRS*; NI 52-112 (non-GAAP disclosure).
- Income Tax Act (Canada), s.122.1 (SIFT rules and the REIT exception). Confirm current rules with the CRA.

## Media credits

- Hero: "Apartment buildings viewed from High Park, 2026.jpg" by Chicken4War, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Apartment_buildings_viewed_from_High_Park,_2026.jpg). Cropped and resized to 1280x720. Real photograph, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
