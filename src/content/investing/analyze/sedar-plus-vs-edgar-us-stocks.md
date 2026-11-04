---
title: "SEDAR+ vs EDGAR: What Changes When You Own US Stocks from Canada"
description: "A translation guide from SEDAR+ to EDGAR for Canadian investors who own US or interlisted stocks: 10-K, 10-Q, 8-K, Form 4, 20-F and 40-F versus AIF, MD&A and SEDI, plus deadlines, IFRS vs US GAAP and a five-minute EDGAR routine. Educational, not advice."
category: "analyze"
role: "Spoke"
pubDate: 2026-11-04
image: "/images/investing/sedar-plus-vs-edgar-us-stocks.jpg"
imageAlt: "Ornate street lamps in front of the curved glass facade of the U.S. Securities and Exchange Commission headquarters"
imageCredit: "Facade of the U.S. Securities and Exchange Commission headquarters, Washington, D.C., October 2008. Photo by David (dbking), CC BY 2.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "mixed"
---

If you own only TSX stocks, [SEDAR+](/investing/analyze/use-sedar-plus-for-stock-research/) is your filing library. The moment you buy a US stock — or a Canadian company also listed in New York — you'll also need **EDGAR**, the SEC's free filing database. The documents have different names, deadlines and accounting rules.

Educational only — not financial advice. This guide maps SEDAR+ habits onto EDGAR so you don't miss what you're used to finding.

## Direct answer

EDGAR is the US equivalent of SEDAR+. US companies file a **10-K** (annual), **10-Q** (quarterly) and **8-K** (current events), with insider trades on **Form 4** and executive pay in the **proxy (DEF 14A)**. Foreign companies usually file a **20-F** and **6-K** instead, and many large Canadian interlisted companies use the cross-border **MJDS** system to file a **40-F** that wraps their Canadian AIF, financial statements and MD&A. Search EDGAR by company name or ticker; full-text search covers filings back to 2001.

## The translation table

| What you want | On SEDAR+ (Canada) | On EDGAR (US domestic filer) |
|:--|:--|:--|
| Business description and risks | Annual Information Form (AIF) | 10-K Part I (Business, Risk Factors) |
| Management's analysis | MD&A | 10-K Item 7 / 10-Q Item 2 (MD&A) |
| Annual financial statements | Audited annual statements | 10-K Item 8 |
| Quarterly results | Interim statements + MD&A | 10-Q |
| Significant events | Material change report, news release | 8-K (specific listed triggers) |
| Executive pay, board, votes | Management information circular | Proxy statement (DEF 14A) |
| Insider trades | SEDI (within 5 calendar days) | Form 4 (within 2 business days) |
| Large holders | Early warning report (10% threshold) | Schedule 13D / 13G (5% threshold) |
| Offerings | Prospectus / prospectus supplement | S-1, S-3, 424B prospectus |

## Which forms a company files depends on its status

<figure class="diagram">
<svg viewBox="0 0 720 200" role="img" aria-label="Three cards comparing the filings of a US domestic filer, a foreign private issuer, and a Canadian MJDS filer on EDGAR" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="6" width="224" height="188" rx="10" fill="#ffffff" stroke="#0d9488" stroke-width="2"/><rect x="10" y="6" width="224" height="34" rx="10" fill="#0d9488"/><rect x="10" y="30" width="224" height="10" fill="#0d9488"/><text x="122" y="28" font-size="13.5" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">US DOMESTIC FILER</text><text x="22" y="64" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">10-K annual report</text><text x="22" y="84" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">10-Q quarterly reports</text><text x="22" y="104" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">8-K current reports</text><text x="22" y="124" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">DEF 14A proxy</text><text x="22" y="144" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Form 4 insider trades</text><text x="22" y="164" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">US GAAP</text><rect x="248" y="6" width="224" height="188" rx="10" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/><rect x="248" y="6" width="224" height="34" rx="10" fill="#f59e0b"/><rect x="248" y="30" width="224" height="10" fill="#f59e0b"/><text x="360" y="28" font-size="13.5" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">FOREIGN PRIVATE ISSUER</text><text x="260" y="64" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">20-F annual report</text><text x="260" y="84" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">6-K (home-country</text><text x="260" y="104" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">  news, furnished)</text><text x="260" y="124" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">No 10-Q required</text><text x="260" y="144" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">No Form 4 required</text><text x="260" y="164" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">IFRS allowed</text><rect x="486" y="6" width="224" height="188" rx="10" fill="#ffffff" stroke="#334155" stroke-width="2"/><rect x="486" y="6" width="224" height="34" rx="10" fill="#334155"/><rect x="486" y="30" width="224" height="10" fill="#334155"/><text x="598" y="28" font-size="13.5" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">CANADIAN MJDS FILER</text><text x="498" y="64" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">40-F wraps Canadian</text><text x="498" y="84" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">  AIF + statements</text><text x="498" y="104" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">  + MD&amp;A</text><text x="498" y="124" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">6-K for interim docs</text><text x="498" y="144" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Insiders file on SEDI</text><text x="498" y="164" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">IFRS or US GAAP</text></svg>
<figcaption>Which forms you&#x27;ll find on EDGAR depends on the issuer&#x27;s status. Many large Canadian interlisted companies file a 40-F; some, like Shopify and Enbridge, file 10-Ks.</figcaption>
</figure>

## What changes for your analysis

| Topic | Canada | US | What to do |
|:--|:--|:--|:--|
| **Accounting** | IFRS for most issuers | US GAAP for domestic filers; foreign issuers may use IFRS | Don't compare IFRS and US GAAP margins blindly — leases, impairment reversals and some classifications differ |
| **Quarterly detail** | Interim MD&A every quarter | 10-Q every quarter | Foreign private issuers on 20-F may report only semi-annually |
| **Insider data** | SEDI | Form 4 | Interlisted Canadian MJDS filers' insiders report on SEDI, not Form 4 |
| **Currency** | Often CAD, sometimes USD | USD | Note the reporting currency before comparing — see [compare a TSX stock to its US peer](/investing/valuation/compare-tsx-stock-to-us-peer/) |
| **Risk factors** | AIF | 10-K Item 1A (usually long and legalistic) | Look for *new* risk factors year over year |

## Deadlines at a glance

<figure class="diagram">
<svg viewBox="0 0 720 336" role="img" aria-label="Approximate filing deadlines in days for common US and Canadian disclosure documents" xmlns="http://www.w3.org/2000/svg"><text x="220" y="32" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Form 4 (US insider)</text><rect x="230" y="16" width="7" height="22" rx="3" fill="#0d9488"/><text x="244.72" y="32" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">2 days</text><text x="220" y="66" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">8-K (US current report)</text><rect x="230" y="50" width="13" height="22" rx="3" fill="#0d9488"/><text x="251.44" y="66" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">4 days</text><text x="220" y="100" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">SEDI (Cdn insider)</text><rect x="230" y="84" width="17" height="22" rx="3" fill="#0d9488"/><text x="254.8" y="100" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">5 days</text><text x="220" y="134" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">10-Q (accelerated filers)</text><rect x="230" y="118" width="134" height="22" rx="3" fill="#0d9488"/><text x="372.4" y="134" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">40 days</text><text x="220" y="168" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">10-Q (non-accelerated)</text><rect x="230" y="152" width="151" height="22" rx="3" fill="#0d9488"/><text x="389.2" y="168" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">45 days</text><text x="220" y="202" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">10-K (large accelerated)</text><rect x="230" y="186" width="202" height="22" rx="3" fill="#0d9488"/><text x="439.6" y="202" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">60 days</text><text x="220" y="236" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">10-K (non-accelerated)</text><rect x="230" y="220" width="302" height="22" rx="3" fill="#0d9488"/><text x="540.4" y="236" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">90 days</text><text x="220" y="270" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Cdn annual (non-venture)</text><rect x="230" y="254" width="302" height="22" rx="3" fill="#0d9488"/><text x="540.4" y="270" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">90 days</text><text x="220" y="304" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">20-F (foreign private)</text><rect x="230" y="288" width="403" height="22" rx="3" fill="#0d9488"/><text x="641.2" y="304" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">120 days</text></svg>
<figcaption>Approximate deadlines after the event or period end. Form 4 and 8-K are business days; others are calendar days (20-F is four months). Canadian interim filings are due within 45 days for non-venture issuers.</figcaption>
</figure>

## Dual-listed Canadian companies

| Situation | Where to look first |
|:--|:--|
| Canadian MJDS filer (40-F) | SEDAR+ — the EDGAR filing is largely the same Canadian documents |
| Canadian company filing a 10-K (e.g. Shopify, Enbridge) | Either — the 10-K is the primary annual document; check SEDAR+ for Canadian-only items |
| US company with a TSX listing or Canadian Depositary Receipt | EDGAR |

Buying US-listed shares also brings FX costs and US withholding on dividends — see [commission-free trading: what you still pay in FX and spreads](/investing/brokers-tools/commission-free-trading-fx-spreads/) and [account location for US dividend stocks](/investing/accounts/account-location-us-dividend-stocks/).

## A five-minute EDGAR routine

| Step | Action |
|:--|:--|
| 1 | Search the company on EDGAR; note whether it files 10-K, 20-F or 40-F |
| 2 | Open the latest annual filing; read Business, Risk Factors and MD&A |
| 3 | Open the latest 10-Q or 6-K for the current quarter |
| 4 | Scan 8-Ks since the last quarter for events |
| 5 | Check Form 4s (or SEDI) for insider buying and selling patterns |

## Related reading

- [How to use SEDAR+ for stock research](/investing/analyze/use-sedar-plus-for-stock-research/)
- [SEDAR+ alerts and filing types: monitoring stocks you already own](/investing/analyze/sedar-plus-alerts-filing-types-monitoring/)
- [How to read a Canadian annual report](/investing/analyze/read-canadian-annual-report/)
- [Framework: source hierarchy](/investing/frameworks/source-hierarchy-filings-transcripts-commentary/)

## Sources

- U.S. Securities and Exchange Commission, [EDGAR — Search and Access](https://www.sec.gov/search-filings) and EDGAR full-text search (filings since 2001).
- SEC, Form 10-K, Form 10-Q, Form 8-K, Form 20-F and Form 40-F general instructions (filing deadlines; MJDS eligibility).
- SEC, Section 16 insider reporting (Form 4 within two business days); Regulation 13D-G (beneficial ownership above 5%).
- National Instrument 51-102 *Continuous Disclosure Obligations*; National Instrument 55-104 *Insider Reporting Requirements and Exemptions* (SEDI, five calendar days); National Instrument 62-104 and 62-103 (early warning, 10%).

## Media credits

- Hero: “Facade of the U.S. Securities and Exchange Commission headquarters, Washington, D.C.jpg” by David (Flickr user dbking), [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Facade_of_the_U.S._Securities_and_Exchange_Commission_headquarters,_Washington,_D.C.jpg). Cropped and resized to 1280×720. Real photograph, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
