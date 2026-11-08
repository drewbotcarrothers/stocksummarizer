---
title: "How to Read Cap Tables and Fully Diluted Share Counts"
description: "How to build a fully diluted share count from a cap table: basic shares, RSUs, options and warrants (treasury stock method), convertibles and exchangeables. Educational, not advice."
category: "analyze"
role: "Spoke"
pubDate: 2026-11-08
image: "/images/investing/read-cap-tables-fully-diluted-share-counts.jpg"
imageAlt: "Green engraved specimen stock certificate for the Lehigh Coal and Navigation Company"
imageCredit: "Specimen stock certificate photograph by Downingsf, CC BY-SA 3.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Per-share numbers depend on getting the share count right. The basic count on a quote page can leave out a lot: options, restricted and performance share units, warrants, convertible debentures, exchangeable units and multiple share classes. A **cap table** (capitalization table) lists every class of security that is or could become equity. The **fully diluted share count** tells you how many owners you might end up sharing the business with.

Educational only, not financial advice. This post is about counting accurately. For spotting *future* dilution before an issue, see [dilution risk in Canadian issuers](/investing/analyze/spot-dilution-risk-canadian-issuers/). For the definition, see [What is dilution?](/investing/glossary/what-is-dilution/). Buybacks are in [share buyback disclosures](/investing/analyze/read-share-buyback-disclosures-canada/).

## Direct answer

Start with the **outstanding share data** section in the MD&A, which lists shares and convertible securities as of a recent date. Add equity awards (RSUs, PSUs, DSUs, options), warrants, convertibles and any exchangeable units. For options and warrants, use the treasury stock method. For convertibles, use the if-converted method. Compare your total with the **diluted** share count used for diluted EPS (IAS 33), which leaves out anti-dilutive instruments. Use the more conservative number for valuation, and check the gap every year.

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Building a fully diluted share count step by step" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Basic shares</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">MD&amp;A outstanding</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">share data</text><line x1="134.4" y1="60" x2="151.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="12.9" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+ Equity awards</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">RSU, PSU, DSU</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">options (TSM)</text><line x1="278.8" y1="60" x2="295.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+ Warrants</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Strike vs</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">price</text><line x1="423.2" y1="60" x2="440.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+ Convertibles</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">If-converted</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">method</text><line x1="567.6" y1="60" x2="584.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="12.9" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+ Exchangeables</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">LP units,</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">exchangeable shs</text></svg>
<figcaption>Start with the outstanding share data section in the MD&amp;A, then add each class of potential shares.</figcaption>
</figure>

## What goes in the cap table

| Security | Where disclosed | How to count (simplified) | Watch-outs |
|:--|:--|:--|:--|
| Common / subordinate voting shares | MD&A outstanding share data; equity note | Full count | Multiple classes may have different votes but similar economics |
| Multiple voting shares | Equity note; AIF / circular | Usually counted economically | Control vs economic ownership; see the [circular](/investing/analyze/read-management-information-circular/) |
| Stock options | Share-based payment note (IFRS 2) | Treasury stock method: net new shares if in the money | Large out-of-the-money overhang still matters if the price rises |
| RSUs / PSUs / DSUs | Share-based payment note | Shares that may be issued (some settle in cash) | Settlement method: treasury shares vs market purchases |
| Warrants | Equity note; prospectus | Treasury stock method | Common after financings; check expiry dates |
| Convertible debentures / preferreds | Debt note; prospectus | If-converted: add shares, remove interest | Forced-conversion clauses |
| Exchangeable shares / LP units | Equity note; structure section of the AIF | Add as if exchanged | Often excluded from the basic count shown on quote pages |

<figure class="diagram">
<svg viewBox="0 0 720 96" role="img" aria-label="Hypothetical fully diluted share count build-up" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="8" width="14" height="14" rx="3" fill="#0d9488"/><text x="30" y="19" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Basic shares</text><rect x="123.19999999999999" y="8" width="14" height="14" rx="3" fill="#94a3b8"/><text x="143.2" y="19" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">RSUs/PSUs/DSUs</text><rect x="249.59999999999997" y="8" width="14" height="14" rx="3" fill="#f59e0b"/><text x="269.6" y="19" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Options (TSM net)</text><rect x="395.79999999999995" y="8" width="14" height="14" rx="3" fill="#0ea5e9"/><text x="415.8" y="19" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Warrants</text><rect x="482.59999999999997" y="8" width="14" height="14" rx="3" fill="#a855f7"/><text x="502.6" y="19" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Convertibles</text><text x="140" y="59" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Hypothetical issuer</text><rect x="150.0" y="40" width="484.0" height="28" fill="#0d9488"/><text x="392" y="58.5" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">88%</text><rect x="634.0" y="40" width="16.5" height="28" fill="#94a3b8"/><rect x="650.5" y="40" width="11.0" height="28" fill="#f59e0b"/><rect x="661.5" y="40" width="16.5" height="28" fill="#0ea5e9"/><rect x="678.0" y="40" width="22.0" height="28" fill="#a855f7"/></svg>
<figcaption>Hypothetical. 88M basic shares become 100M fully diluted, so per-share value falls about 12% before anything changes in the business.</figcaption>
</figure>

## Worked example (hypothetical)

| Item | Count / terms | Treatment | Shares added (M) |
|:--|:--|:--|--:|
| Basic shares | 88.0M | Full | 88.0 |
| RSU/PSU/DSU | 3.0M units | Full (assume share-settled) | 3.0 |
| Options | 4.0M at $20 strike; price $40 | TSM: 4.0 − (4.0 × 20 ÷ 40) | 2.0 |
| Warrants | 6.0M at $20; price $40 | TSM: 6.0 − (6.0 × 20 ÷ 40) | 3.0 |
| Convertible debentures | $100M at $25 conversion | If-converted: 100 ÷ 25 | 4.0 |
| **Fully diluted** | | | **100.0** |

With hypothetical net income of $200M, EPS is about $2.27 on basic shares but $2.00 on fully diluted shares. Use the diluted figure when you compare P/E, as discussed in [when P/E misleads on TSX stocks](/investing/valuation/when-pe-misleads-tsx/).

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical basic, IAS 33 diluted and fully diluted share counts" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0</text><line x1="70" y1="202" x2="710" y2="202" stroke="#e2e8f0"/><text x="62" y="206.273" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">25</text><line x1="70" y1="155" x2="710" y2="155" stroke="#e2e8f0"/><text x="62" y="158.545" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">50</text><line x1="70" y1="107" x2="710" y2="107" stroke="#e2e8f0"/><text x="62" y="110.818" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">75</text><line x1="70" y1="59" x2="710" y2="59" stroke="#e2e8f0"/><text x="62" y="63.0909" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">100</text><rect x="147" y="82" width="60" height="168" rx="3" fill="#0d9488"/><text x="176.667" y="76" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">88</text><text x="176.667" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Basic</text><rect x="360" y="71" width="60" height="179" rx="3" fill="#0d9488"/><text x="390" y="64.5455" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">94</text><text x="390" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Diluted (IAS 33)</text><rect x="573" y="59" width="60" height="191" rx="3" fill="#0d9488"/><text x="603.333" y="53.0909" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">100</text><text x="603.333" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Fully diluted (all in)</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Shares (M)</text></svg>
<figcaption>Hypothetical. The IAS 33 diluted EPS count leaves out anti-dilutive instruments. A conservative fully diluted count includes everything that could convert.</figcaption>
</figure>

## Checklist

| Check | Done when |
|:--|:--|
| Outstanding share data read | You have the date and count for each class |
| Equity award pool sized | Units outstanding + annual grant rate (from the circular) |
| In-the-money options and warrants computed | TSM applied at the current price |
| Convertibles mapped | Conversion price, maturity, forced-conversion terms |
| Exchangeables included | Any LP or exchangeable units added |
| Basic vs diluted vs fully diluted logged | Gap tracked year over year in your [notes](/investing/analyze/keep-stock-research-notes-that-compound/) |

## Related reading

- [How to spot dilution risk in Canadian equity issuers](/investing/analyze/spot-dilution-risk-canadian-issuers/)
- [What is dilution? A plain-English guide](/investing/glossary/what-is-dilution/)
- [How to read share buyback disclosures in Canada](/investing/analyze/read-share-buyback-disclosures-canada/)
- [How to evaluate executive compensation alignment](/investing/analyze/evaluate-executive-compensation-alignment/)
- [How to read a management information circular for investors](/investing/analyze/read-management-information-circular/)

## Sources

- IAS 33 *Earnings per Share* (diluted EPS, treasury stock method, if-converted method, anti-dilution).
- IFRS 2 *Share-based Payment* (options, RSUs, PSUs, DSUs disclosure).
- NI 51-102 and Form 51-102F1 (MD&A disclosure of outstanding share data). Confirm the current text on the CSA website.

## Media credits

- Hero: "Lehigh Coal and Navigation Company Stock Certificate.jpg" by Downingsf, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Lehigh_Coal_and_Navigation_Company_Stock_Certificate.jpg). Cropped and resized to 1280x720. Real photograph of a specimen stock certificate, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
