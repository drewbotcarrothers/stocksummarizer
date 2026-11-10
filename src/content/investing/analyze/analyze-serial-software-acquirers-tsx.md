---
title: "How to Analyze Serial Software Acquirers on the TSX"
description: "How to analyze TSX vertical market software acquirers: capital deployed, hurdle rates, organic growth, ROIC and reinvestment runway. Educational, not advice."
category: "analyze"
role: "Spoke"
pubDate: 2026-11-10
image: "/images/investing/analyze-serial-software-acquirers-tsx.jpg"
imageAlt: "Close-up of colourful program code on a computer monitor"
imageCredit: "Code on a computer monitor photograph by Markus Spiske, CC0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

The TSX has an unusual group of **serial software acquirers**: companies that buy many small **vertical market software (VMS)** businesses (software made for one industry, such as transit agencies, golf clubs or utilities) and keep them for a long time. They look like software companies, but the real question is about **capital allocation**: how much cash they deploy into acquisitions, at what return, and whether the acquired businesses grow after the deal.

This post narrows two existing guides to that VMS question. For software economics in general, read [how to analyze software business models on the TSX](/investing/analyze/analyze-software-business-models-tsx/). For acquisition habits in any sector, read [how to analyze M&A track records for serial acquirers](/investing/analyze/analyze-ma-track-records-serial-acquirers/). It is educational and does not rate any company; all numbers are hypothetical.

## Direct answer

Track five things over several years: (1) **capital deployed** on acquisitions each year; (2) the **hurdle rate** or return target management describes; (3) **organic growth** of the existing portfolio, especially maintenance and recurring revenue; (4) **return on invested capital** with acquired intangibles included; and (5) the **reinvestment runway**: whether the company can keep deploying its cash without lowering standards. A rising deal count is not success if organic growth turns negative or returns fall.

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Capital deployment loop for a vertical market software acquirer" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Cash generated</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Maintenance and</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">recurring revenue</text><line x1="134.4" y1="60" x2="151.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="12.1" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Capital deployed</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Many small deals</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Per-year total</text><line x1="278.8" y1="60" x2="295.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Hurdle rate</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Price discipline</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Target return</text><line x1="423.2" y1="60" x2="440.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Organic growth</text><text x="504.4" y="69" font-size="10.4" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Do acquired units</text><text x="504.4" y="83" font-size="10.4" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">grow after the deal?</text><line x1="567.6" y1="60" x2="584.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Returns</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">ROIC over time</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Reinvestment room</text></svg>
<figcaption>A serial software acquirer is a capital allocation machine: cash from existing businesses funds new deals. Each step leaves clues in the MD&amp;A and notes.</figcaption>
</figure>

## What changes from a normal software analysis

| Normal software habit | Why it is incomplete for VMS acquirers | Better check |
|:--|:--|:--|
| Total revenue growth | Mostly acquired | Organic growth, split by revenue type |
| Net revenue retention, ARR | Often not reported this way | Maintenance and recurring revenue organic growth |
| EBITDA margin | Amortization of acquired intangibles is large | Free cash flow and ROIC including acquired intangibles |
| GAAP net income | Depressed by intangible amortization | Cash flow per share, reconciled to reported figures |
| Growth via product launches | Growth comes from deals | Capital deployed per year and its expected return |

## Where to find the clues

| Clue | Where |
|:--|:--|
| Acquisition spending and number of deals | Cash flow statement (investing); business acquisitions note |
| Organic growth | MD&A; some companies disclose organic growth by revenue type |
| Contingent consideration and holdbacks | Business combinations note (IFRS 3) |
| Goodwill and intangible assets | Intangibles note; impairment testing |
| Pay alignment with returns | [Management information circular](/investing/analyze/read-management-information-circular/) |
| Capital allocation philosophy | President's letter, annual meeting materials |

<figure class="diagram">
<svg viewBox="0 0 720 340" role="img" aria-label="Hypothetical serial acquirers plotted by organic growth and return on invested capital" xmlns="http://www.w3.org/2000/svg"><rect x="322" y="20" width="378" height="135" fill="#ccfbf1" opacity="0.35"/><text x="511" y="36" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Compounding zone</text><line x1="70" y1="290" x2="700" y2="290" stroke="#e2e8f0"/><text x="62" y="294" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0%</text><line x1="70" y1="200" x2="700" y2="200" stroke="#e2e8f0"/><text x="62" y="204" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">10%</text><line x1="70" y1="110" x2="700" y2="110" stroke="#e2e8f0"/><text x="62" y="114" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">20%</text><line x1="70" y1="20" x2="700" y2="20" stroke="#e2e8f0"/><text x="62" y="24" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">30%</text><text x="70" y="308" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">-4%</text><text x="196" y="308" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">-2%</text><text x="322" y="308" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">0%</text><text x="448" y="308" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">2%</text><text x="574" y="308" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">4%</text><text x="700" y="308" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">6%</text><line x1="70" y1="290" x2="700" y2="290" stroke="#475569"/><text x="385" y="332" font-size="12" font-weight="600" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Organic growth (%)</text><text x="16" y="155" font-size="12" font-weight="600" fill="#0f172a" text-anchor="middle" transform="rotate(-90 16 155)" font-family="system-ui, sans-serif">ROIC (%)</text><circle cx="511" cy="65" r="7" fill="#0d9488"/><text x="522" y="69" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">A</text><circle cx="196" cy="92" r="7" fill="#f59e0b"/><text x="207" y="96" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">B</text><circle cx="637" cy="182" r="7" fill="#0ea5e9"/><text x="648" y="186" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">C</text><circle cx="133" cy="218" r="7" fill="#dc2626"/><text x="144" y="222" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">D</text><circle cx="385" cy="137" r="7" fill="#94a3b8"/><text x="396" y="141" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">E</text></svg>
<figcaption>Hypothetical companies: high returns with flat or negative organic growth (B) can mean the acquired businesses are being harvested; low returns with negative organic growth (D) is the weakest mix.</figcaption>
</figure>

## Red flags for serial VMS acquirers

| Red flag | Why it matters |
|:--|:--|
| Organic growth negative for several years | Acquired businesses may be shrinking |
| Larger, pricier deals replacing many small ones | Hurdle rate may be slipping |
| Rising leverage to fund deals | Less margin of safety |
| Goodwill impairments | Past deals did not earn their price |
| Frequent changes in organic growth definition | Harder to compare over time |
| Pay tied to revenue size, not returns | Incentive to buy growth |

## Checklist

| Step | Done when |
|:--|:--|
| Capital deployed logged | Acquisition spending for at least five years |
| Organic growth logged | By revenue type, same definition each year |
| Returns estimated | ROIC with acquired intangibles included |
| Incentives read | Bonus metrics in the circular |
| Runway judged | Cash generated vs capital deployed |

## Go deeper

To compare organic and acquired growth in any company, see [how to compare organic growth vs acquisition growth](/investing/analyze/compare-organic-vs-acquisition-growth/). For dilution from share-based deals or spin-offs, see [how to evaluate spin-offs](/investing/analyze/evaluate-spin-offs-corporate-separations/) and [cap tables and fully diluted share counts](/investing/analyze/read-cap-tables-fully-diluted-share-counts/).

## Related reading

- [How to analyze software business models on the TSX](/investing/analyze/analyze-software-business-models-tsx/)
- [How to analyze M&A track records for serial acquirers](/investing/analyze/analyze-ma-track-records-serial-acquirers/)
- [What is owner earnings?](/investing/glossary/what-is-owner-earnings/)
- [How to evaluate executive compensation alignment](/investing/analyze/evaluate-executive-compensation-alignment/)

## Sources

- IFRS 3 *Business Combinations* (contingent consideration, purchase price allocation); IAS 38 *Intangible Assets*; IAS 36 *Impairment of Assets*.
- IFRS 15 *Revenue from Contracts with Customers* (maintenance and recurring revenue).
- NI 52-112 *Non-GAAP and Other Financial Measures Disclosure* (organic growth and other non-GAAP ratios). Confirm current texts with the IFRS Foundation and the CSA.

## Media credits

- Hero: "Code on computer monitor (Unsplash).jpg" by Markus Spiske, [CC0](https://creativecommons.org/publicdomain/zero/1.0/deed.en), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Code_on_computer_monitor_(Unsplash).jpg). Cropped and resized to 1280x720. Real photograph of program code on a computer monitor, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
