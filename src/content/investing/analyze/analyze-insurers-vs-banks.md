---
title: "How to Analyze Insurers Differently from Banks"
description: "Why insurers are not banks: float vs loans, combined ratio, IFRS 17 CSM, LICAT and MCT capital, reserve development. A checklist for Canadian life and P&C insurers. Educational, not advice."
category: "analyze"
role: "Spoke"
pubDate: 2026-11-09
image: "/images/investing/analyze-insurers-vs-banks.jpg"
imageAlt: "Sun Life Building in Montreal seen above autumn trees"
imageCredit: "Sun Life Building photograph by Guilhem Vellut, CC BY 2.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Banks and insurers are both regulated financials, and both sit in the financials sector of the S&P/TSX Composite, so it is tempting to read them the same way. They are mirror images. A bank lends first and hopes to collect. An insurer collects premiums first and pays claims later, investing the money (the **float**) in the meantime. That flips the main risks: for banks, credit losses and funding; for insurers, how accurately claims were estimated, interest rates over long periods, and catastrophes.

This is an **analysis checklist** that builds on our [insurance explainer](/investing/sectors/how-insurers-make-money/) and the [bank checklist](/investing/analyze/analyze-banks-vs-operating-companies/). It is educational only.

## Direct answer

Split insurers into **life** (Manulife, Sun Life, Great-West Lifeco, iA) and **property and casualty (P&C)** (Intact, Definity, Fairfax and others), then use different tools. For P&C, the key metric is the **combined ratio** (claims plus expenses as a share of premiums) and reserve development. For life insurers, under **IFRS 17** look at the **insurance service result**, the **contractual service margin (CSM)** and new business CSM. For both, check regulatory capital: **LICAT** for life insurers and **MCT** for P&C insurers, both set by OSFI for federally regulated companies. Price-to-book and ROE still apply, as for banks.

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="How an insurer earns money from premiums and float" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Premiums</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Collected</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">up front</text><line x1="134.4" y1="60" x2="151.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Float invested</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Bonds, mortgages,</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">equities</text><line x1="278.8" y1="60" x2="295.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="11.4" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Claims &amp; benefits</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Paid later,</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">sometimes decades</text><line x1="423.2" y1="60" x2="440.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="12.1" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Insurance result</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">IFRS 17</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">service result</text><line x1="567.6" y1="60" x2="584.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="11.4" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Investment result</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Yield minus</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">finance expense</text></svg>
<figcaption>Insurers collect first and pay later; banks lend first and collect later. That timing flips which risks matter most.</figcaption>
</figure>

## Bank vs insurer: what to track

| Topic | Bank | Insurer |
|:--|:--|:--|
| Main risk | Borrowers do not repay | Claims cost more than estimated |
| Timing | Lends first, collects later | Collects first, pays later |
| Key margin | Net interest margin | Combined ratio (P&C); CSM release and insurance service result (life) |
| Capital test | CET1 ratio (OSFI CAR) | LICAT total ratio (life); MCT (P&C) |
| Rate sensitivity | Net interest income | Asset-liability matching over long durations |
| Tail risk | Recession credit cycle | Catastrophes, pandemics, longevity, reserve strengthening |
| Accounting standard to know | IFRS 9 | IFRS 17 (since 2023) and IFRS 9 |

<figure class="diagram">
<svg viewBox="0 0 720 142" role="img" aria-label="Hypothetical P&amp;C combined ratio components" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="8" width="14" height="14" rx="3" fill="#0d9488"/><text x="30" y="19" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Claims (loss ratio)</text><rect x="169.39999999999998" y="8" width="14" height="14" rx="3" fill="#94a3b8"/><text x="189.4" y="19" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Expenses</text><rect x="256.2" y="8" width="14" height="14" rx="3" fill="#f59e0b"/><text x="276.2" y="19" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Underwriting margin</text><text x="220" y="59" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Hypothetical P&amp;C insurer</text><rect x="230.0" y="40" width="305.5" height="28" fill="#0d9488"/><text x="382.75" y="58.5" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">65%</text><rect x="535.5" y="40" width="141.0" height="28" fill="#94a3b8"/><text x="606" y="58.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">30%</text><rect x="676.5" y="40" width="23.5" height="28" fill="#f59e0b"/><text x="220" y="105" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Hypothetical catastrophe year</text><rect x="230.0" y="86" width="329.0" height="28" fill="#0d9488"/><text x="394.5" y="104.5" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">70%</text><rect x="559.0" y="86" width="141.0" height="28" fill="#94a3b8"/><text x="629.5" y="104.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">30%</text><rect x="700.0" y="86" width="0.0" height="28" fill="#f59e0b"/></svg>
<figcaption>Hypothetical. A 95% combined ratio leaves a 5% underwriting margin. Five extra points of catastrophe claims take it to 100%, and anything above that is an underwriting loss, leaving only investment income.</figcaption>
</figure>

## P&C checklist items

| Item | What to look for |
|:--|:--|
| Combined ratio, with and without catastrophe losses | Underlying trend vs one-off events |
| Prior-year reserve development | Favourable (earlier estimates were cautious) or adverse (too optimistic) |
| Premium growth: rate vs exposure | Price increases can mask shrinking policy counts |
| Reinsurance | How much risk is passed on and at what cost |
| Investment income | Yield on the portfolio vs the bond market |

## Life checklist items

| Item | What to look for |
|:--|:--|
| Core or underlying earnings vs net income | Market-driven noise removed; read [non-GAAP critically](/investing/analyze/read-non-gaap-metrics-critically/) |
| CSM balance and new business CSM | Future profit stored on the balance sheet, and how much is being added |
| Experience gains and losses | Claims and lapses vs assumptions |
| Assumption changes | Large one-time changes in reserves |
| Asia, US and wealth mix | Where growth and risk come from; see [segment reporting](/investing/analyze/read-segment-reporting-canadian-filings/) |
| LICAT ratio | Buffer above OSFI's supervisory target |

## Checklist

| Step | Done when |
|:--|:--|
| Life vs P&C identified | Right toolkit chosen |
| Capital ratio logged | LICAT or MCT vs target |
| Core profitability measured | Combined ratio trend or insurance service result trend |
| Reserve history checked | Development or assumption changes over three years |
| Valuation framed | P/B and ROE vs peers |
| Tail risks noted | Catastrophe, rate and longevity exposures |

## Go deeper

The [insurance sector explainer](/investing/sectors/how-insurers-make-money/) covers how money is made; this checklist covers what to check. For capital-heavy financials more broadly, read [valuing banks with P/B and ROE](/investing/valuation/valuing-canadian-banks-pb-roe/), which uses the same P/B logic.

## Related reading

- [How to analyze banks differently from operating companies](/investing/analyze/analyze-banks-vs-operating-companies/)
- [Financials – Insurance: industry structure and how money is made](/investing/sectors/how-insurers-make-money/)
- [How diversified financials make money](/investing/sectors/how-diversified-financials-make-money/)
- [What is ROE?](/investing/glossary/what-is-roe/)

## Sources

- IFRS 17 *Insurance Contracts* (effective January 1, 2023): contractual service margin, insurance service result.
- OSFI *Life Insurance Capital Adequacy Test* (LICAT) and *Minimum Capital Test* (MCT) guidelines.
- Company annual reports for the segment and metric definitions they use. Confirm current OSFI targets on the OSFI website.

## Media credits

- Hero: "Sun Life Building @ Montreal (30288567912).jpg" by Guilhem Vellut, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sun_Life_Building_@_Montreal_(30288567912).jpg). Cropped and resized to 1280x720. Real photograph, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
