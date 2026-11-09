---
title: "How to Analyze Software Business Models on the TSX"
description: "How to analyze TSX software companies: name the model (SaaS, serial acquirer, platform, licence), then check recurring revenue, retention, SBC and capitalized development. Educational, not advice."
category: "analyze"
role: "Spoke"
pubDate: 2026-11-09
image: "/images/investing/analyze-software-business-models-tsx.jpg"
imageAlt: "Exterior of the CERN data centre building with its signage"
imageCredit: "CERN data centre photograph by Unnerving duck, CC BY-SA 4.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

The TSX has a small but varied group of software companies: subscription SaaS businesses, serial acquirers of vertical market software, commerce platforms, and older license-and-maintenance businesses moving to the cloud. A single "tech" lens does not fit all of them. The [information technology explainer](/investing/sectors/how-tech-companies-make-money/) and the [Shopify primer](/investing/primers/how-shopify-makes-money/) explain how the sector makes money; this post is the **analysis checklist** for reading a software company's filings.

Educational framing only; no company is rated here. Numbers are hypothetical.

## Direct answer

First name the business model, because the right metrics follow from it. Then check five things common to all software companies: **revenue mix** (recurring vs one-time), **retention** (net revenue retention or churn, if disclosed), **gross margin**, **stock-based compensation (SBC)** and **capitalized development costs**. Value the business on free cash flow after SBC, or on EV/sales only if you can explain the path to profit. Check whether results are reported in US dollars.

<figure class="diagram">
<svg viewBox="0 0 720 144" role="img" aria-label="Four software business models found on the TSX" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="6" width="164.5" height="132" rx="10" fill="#ffffff" stroke="#0d9488" stroke-width="2"/><rect x="10" y="6" width="164.5" height="34" rx="10" fill="#0d9488"/><rect x="10" y="30" width="164.5" height="10" fill="#0d9488"/><text x="92.25" y="28" font-size="13.5" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Subscription SaaS</text><text x="22" y="64" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">ARR and net retention</text><text x="22" y="84" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Gross margin 70%+</text><text x="22" y="104" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Deferred revenue</text><text x="22" y="124" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">SBC matters a lot</text><rect x="188.5" y="6" width="164.5" height="132" rx="10" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/><rect x="188.5" y="6" width="164.5" height="34" rx="10" fill="#f59e0b"/><rect x="188.5" y="30" width="164.5" height="10" fill="#f59e0b"/><text x="270.75" y="28" font-size="13.5" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Serial acquirer (VMS)</text><text x="200.5" y="64" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Capital deployed</text><text x="200.5" y="84" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Organic growth</text><text x="200.5" y="104" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Return on capital</text><text x="200.5" y="124" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Maintenance revenue</text><rect x="367" y="6" width="164.5" height="132" rx="10" fill="#ffffff" stroke="#0ea5e9" stroke-width="2"/><rect x="367" y="6" width="164.5" height="34" rx="10" fill="#0ea5e9"/><rect x="367" y="30" width="164.5" height="10" fill="#0ea5e9"/><text x="449.25" y="28" font-size="13.5" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Platform / commerce</text><text x="379" y="64" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">GMV and take rate</text><text x="379" y="84" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Payments mix</text><text x="379" y="104" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Merchant growth</text><text x="379" y="124" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Lower gross margin</text><rect x="545.5" y="6" width="164.5" height="132" rx="10" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/><rect x="545.5" y="6" width="164.5" height="34" rx="10" fill="#94a3b8"/><rect x="545.5" y="30" width="164.5" height="10" fill="#94a3b8"/><text x="627.75" y="28" font-size="13.5" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">License + services</text><text x="557.5" y="64" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Maintenance base</text><text x="557.5" y="84" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Services margin</text><text x="557.5" y="104" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Cloud transition</text><text x="557.5" y="124" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Debt from M&amp;A</text></svg>
<figcaption>Different models need different metrics. Name the model first, then pick the numbers.</figcaption>
</figure>

## Metrics by model

| Metric | What it tells you | Where to find it | Caution |
|:--|:--|:--|:--|
| ARR / recurring revenue share | How much revenue repeats | MD&A key performance indicators | Definitions vary; read the [non-GAAP note](/investing/analyze/read-non-gaap-metrics-critically/) |
| Net revenue retention | Growth from existing customers after churn | MD&A or investor deck | Not always disclosed; compare definitions |
| Deferred revenue / contract liabilities | Cash collected ahead of service | Balance sheet; IFRS 15 note | Billing timing can move it |
| Gross margin | Hosting, support and service costs | Income statement | Services-heavy mix lowers it |
| Organic growth (acquirers) | Growth without acquisitions | MD&A | See [organic vs acquisition growth](/investing/analyze/compare-organic-vs-acquisition-growth/) |
| Capital deployed and returns (acquirers) | How well acquisitions pay off | MD&A, annual letters | See [M&A track records](/investing/analyze/analyze-ma-track-records-serial-acquirers/) |
| GMV and take rate (platforms) | Volume flowing through and the share kept | MD&A | Payments revenue has lower margins |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical free cash flow margin before and after stock-based compensation and capitalized development" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0%</text><line x1="70" y1="180" x2="710" y2="180" stroke="#e2e8f0"/><text x="62" y="184" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">10%</text><line x1="70" y1="110" x2="710" y2="110" stroke="#e2e8f0"/><text x="62" y="114" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">20%</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">30%</text><rect x="147" y="75" width="60" height="175" rx="3" fill="#0d9488"/><text x="176.667" y="69" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">25%</text><text x="176.667" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Reported FCF</text><rect x="360" y="131" width="60" height="119" rx="3" fill="#0d9488"/><text x="390" y="125" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">17%</text><text x="390" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Minus SBC</text><rect x="573" y="152" width="60" height="98" rx="3" fill="#0d9488"/><text x="603.333" y="146" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">14%</text><text x="603.333" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Minus capitalized dev.</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Hypothetical FCF margin (%)</text></svg>
<figcaption>Hypothetical. Free cash flow can look generous until you subtract stock-based compensation, which is a real cost paid in shares, and development spending that was capitalized.</figcaption>
</figure>

## Accounting points to check

| Item | Why it matters |
|:--|:--|
| Capitalized development costs (IAS 38) | Under IFRS some development spending is put on the balance sheet, which lifts EBITDA and operating cash flow; US GAAP issuers capitalize less |
| Stock-based compensation | Excluded from many adjusted metrics, but it dilutes owners; see [cap tables](/investing/analyze/read-cap-tables-fully-diluted-share-counts/) |
| Acquired intangibles amortization | Often removed in adjusted EPS; check if acquisitions are the business model |
| Currency | Many TSX software names report in USD; see [CAD vs USD](/investing/analyze/handle-currency-cad-vs-usd-results/) |
| Revenue recognition (IFRS 15) | Multi-year contracts, licences and services recognised on different schedules |

## Rule of 40 and other shortcuts

The **Rule of 40** adds revenue growth and a profit margin (often FCF margin) and treats 40% or more as healthy. It is a quick screen, not a valuation. Decide which margin you use, subtract SBC if you want a stricter test, and compare companies with the same definition. Treat it as one row in your [peer table](/investing/analyze/use-peer-tables-without-cherry-picking/).

## Checklist

| Step | Done when |
|:--|:--|
| Model named | SaaS, serial acquirer, platform or licence/maintenance |
| Recurring share logged | Recurring vs one-time revenue |
| Retention noted | NRR, churn or renewal rates if disclosed |
| SBC-adjusted FCF computed | FCF minus SBC, as a margin |
| Capitalized development checked | Amount and trend vs R&D expense |
| Reporting currency confirmed | CAD or USD |

## Go deeper

The [unit economics guide](/investing/analyze/read-unit-economics-when-disclosed/) and [recurring vs cyclical revenue](/investing/analyze/identify-recurring-vs-cyclical-revenue/) go deeper on two of the checks above.

## Related reading

- [Information technology: industry structure and how money is made](/investing/sectors/how-tech-companies-make-money/)
- [How Shopify (SHOP) makes money](/investing/primers/how-shopify-makes-money/)
- [How to analyze M&A track records for serial acquirers](/investing/analyze/analyze-ma-track-records-serial-acquirers/)
- [How to read unit economics when a company discloses them](/investing/analyze/read-unit-economics-when-disclosed/)

## Sources

- IFRS 15 *Revenue from Contracts with Customers* (contract liabilities, licences).
- IAS 38 *Intangible Assets* (capitalization of development costs).
- IFRS 2 *Share-based Payment*; NI 52-112 (non-GAAP and other financial measures).

## Media credits

- Hero: "CERN data centre.jpg" by Unnerving duck, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:CERN_data_centre.jpg). Cropped and resized to 1280x720. Real photograph, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
