---
title: "P/B vs Peers: A Canada-First Comparison Guide"
description: "How to compare price-to-book across non-bank TSX peers: align book value basis, goodwill and accounting policies, handle IFRS 17 insurers, and read P/B against ROE. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-12
image: "/images/investing/pb-vs-peers-canada-first-comparison.jpg"
imageAlt: "A freight train of covered autorack cars on tracks beside warehouses in Brampton, Ontario"
imageCredit: "Freight train in Brampton, Ontario photograph by Milan Suvajac, CC BY-SA 4.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "mixed"
---

Comparing P/B across companies only works if their **book values are built the same way**. Two industrials can own similar plants yet report very different book values because one bought its assets recently, one made big acquisitions, or one revalues property. And P/B gaps mean little until you line them up against **ROE**.

Peer selection basics (same business model, median not mean) are in [P/E vs peers: a Canada-first comparison guide](/investing/valuation/pe-vs-peers-canada-first-comparison/) and [how to use peer tables without cherry-picking comps](/investing/analyze/use-peer-tables-without-cherry-picking/). For banks, use [valuation for banks: P/B, ROE, and why P/E alone fails](/investing/valuation/valuing-canadian-banks-pb-roe/). This post covers **non-bank asset-heavy peers**: insurers, industrials, materials and holding companies. It is educational; figures are hypothetical.

## Direct answer

Pick peers with the same business model and similar asset intensity. Align **book value**: same equity basis (attributable, preferreds removed), same treatment of goodwill, same accounting policies for property, and for insurers, the same IFRS 17 view (book with or without CSM). Then compare **P/B against ROE**, not P/B alone. A stock with a lower P/B than peers at a similar ROE deserves a closer look; one with a lower P/B and lower ROE may be priced correctly.

<figure class="diagram">
<svg viewBox="0 0 720 340" role="img" aria-label="Hypothetical scatter of return on equity against price-to-book for a company and five peers" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="290" x2="700" y2="290" stroke="#e2e8f0"/><text x="62" y="294" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0x</text><line x1="70" y1="200" x2="700" y2="200" stroke="#e2e8f0"/><text x="62" y="204" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">1x</text><line x1="70" y1="110" x2="700" y2="110" stroke="#e2e8f0"/><text x="62" y="114" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">2x</text><line x1="70" y1="20" x2="700" y2="20" stroke="#e2e8f0"/><text x="62" y="24" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">3x</text><text x="70" y="308" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">0%</text><text x="227.5" y="308" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">4%</text><text x="385" y="308" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">8%</text><text x="542.5" y="308" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">12%</text><text x="700" y="308" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">16%</text><line x1="70" y1="290" x2="700" y2="290" stroke="#475569"/><text x="385" y="332" font-size="12" font-weight="600" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Return on equity (%)</text><text x="16" y="155" font-size="12" font-weight="600" fill="#0f172a" text-anchor="middle" transform="rotate(-90 16 155)" font-family="system-ui, sans-serif">Price-to-book (x)</text><circle cx="542" cy="191" r="7" fill="#0d9488"/><text x="553.5" y="195" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">You</text><circle cx="385" cy="200" r="7" fill="#94a3b8"/><text x="396" y="204" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">A</text><circle cx="503" cy="164" r="7" fill="#94a3b8"/><text x="514.125" y="168" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">B</text><circle cx="621" cy="128" r="7" fill="#94a3b8"/><text x="632.25" y="132" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">C</text><circle cx="267" cy="227" r="7" fill="#94a3b8"/><text x="277.875" y="231" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">D</text><circle cx="582" cy="56" r="7" fill="#f59e0b"/><text x="592.875" y="60" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">E</text></svg>
<figcaption>Hypothetical: four peers line up with higher P/B for higher ROE. Peer E sits above the line (premium, perhaps less goodwill or a better franchise). Your company sits below it: a 12% ROE at only 1.1x book.</figcaption>
</figure>

## Book value alignment rules

| Rule | Why it matters |
|:--|:--|
| Same equity basis | Attributable to shareholders, preferreds and hybrids removed for all |
| Show goodwill as a % of book | Acquirers carry more book that may not earn its keep |
| Note cost vs fair value policies | IAS 16 revaluation and IAS 40 fair value raise book versus cost-model peers |
| Same date | Book values from different quarter ends drift |
| Same currency at closing rates | Convert USD reporters at the balance-sheet date |
| IFRS 17 insurers on the same view | Book alone or book plus after-tax CSM, for every insurer |
| US GAAP peers flagged | US insurers report under different long-duration rules; book is not directly comparable |
| Use mid-cycle ROE for cyclicals | Peak ROE flatters; trough ROE punishes |

## Peer P/B table (hypothetical)

| Company | P/B | ROE (3-yr avg) | P/B ÷ ROE | Goodwill % of book | Policy note |
|:--|--:|--:|--:|--:|:--|
| Your company | 1.10x | 12% | 0.092 | 10% | Cost model |
| Peer A | 1.00x | 8% | 0.125 | 15% | Cost model |
| Peer B | 1.40x | 11% | 0.127 | 20% | Cost model |
| Peer C | 1.80x | 14% | 0.129 | 25% | Cost model |
| Peer D | 0.70x | 5% | 0.140 | 35% | Cost model |
| Peer E | 2.60x | 13% | 0.200 | 5% | Revalues some property |
| **Peer median** | **1.40x** | **11%** | **0.129** | | |

On P/B alone, your company is 21% below the peer median (1.10 vs 1.40). Against ROE, the gap is wider: at the median 0.129 per point of ROE, a 12% ROE implies about 1.5x. Before calling that a bargain, ask why: smaller size, a weaker balance sheet, a cyclical ROE that looks better than it will be, or a lower-quality asset base.

<figure class="diagram">
<svg viewBox="0 0 720 234" role="img" aria-label="Hypothetical P/B per point of ROE for a company and five peers" xmlns="http://www.w3.org/2000/svg"><text x="190" y="32" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer A</text><rect x="200" y="16" width="256" height="22" rx="3" fill="#94a3b8"/><text x="463.682" y="32" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">0.125</text><text x="190" y="66" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer B</text><rect x="200" y="50" width="260" height="22" rx="3" fill="#94a3b8"/><text x="467.773" y="66" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">0.127</text><text x="190" y="100" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer C</text><rect x="200" y="84" width="264" height="22" rx="3" fill="#94a3b8"/><text x="471.864" y="100" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">0.129</text><text x="190" y="134" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer D</text><rect x="200" y="118" width="286" height="22" rx="3" fill="#94a3b8"/><text x="494.364" y="134" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">0.140</text><text x="190" y="168" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer E</text><rect x="200" y="152" width="409" height="22" rx="3" fill="#f59e0b"/><text x="617.091" y="168" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">0.200</text><text x="190" y="202" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Your company</text><rect x="200" y="186" width="188" height="22" rx="3" fill="#0d9488"/><text x="396.182" y="202" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">0.092</text></svg>
<figcaption>Hypothetical: dividing P/B by ROE gives a rough &#x27;price per point of return&#x27;. The peer median is about 0.129; applied to your company&#x27;s 12% ROE it implies about 1.5x book versus 1.1x today. A crude cross-check, not a target.</figcaption>
</figure>

## Canada-first issues for P/B peer sets

| Issue | What to do |
|:--|:--|
| Few TSX peers in a niche | Add US or global peers, flagged; see [how to compare a TSX stock to its US peer fairly](/investing/valuation/compare-tsx-stock-to-us-peer/) |
| Life insurers under IFRS 17 | Compare book plus after-tax CSM for all, and see [how to analyze insurers differently from banks](/investing/analyze/analyze-insurers-vs-banks/) |
| Holding companies | Compare discount to NAV, not P/B, when holdings are at cost or equity method |
| Resource issuers | P/B depends on impairment history; pair with price/NAV |
| REITs | Book is close to NAV under IAS 40; see [valuing REITs](/investing/valuation/valuing-reits-nav-ffo-affo/) |

## Checklist

| Step | Done when |
|:--|:--|
| Peers chosen | Same business model and asset intensity |
| Book aligned | Basis, date, currency, goodwill and policies noted |
| ROE added | Mid-cycle or 3-year average |
| Median used | Not the mean |
| P/B vs ROE checked | Scatter or P/B ÷ ROE ratio |
| Gap explained | Size, leverage, cyclicality, asset quality |
| Conclusion written | Discount or premium, and whether it looks justified |

## Go deeper

A good screener or broker research tool can pull P/B and ROE for a peer set quickly; compare options in [how to compare Canadian discount brokers](/investing/brokers-tools/compare-canadian-discount-brokers/) and set up filters with [screener filters that match your process](/investing/brokers-tools/screener-filters-that-match-your-process/). Then run the result through [how to use P/B in a simple valuation checklist](/investing/valuation/use-pb-simple-valuation-checklist/).

## Related reading

- [What P/B means for Canadian DIY investors](/investing/valuation/what-pb-means-canadian-diy/)
- [When P/B misleads on TSX stocks](/investing/valuation/when-pb-misleads-tsx/)
- [How to compare two TSX peers side by side](/investing/analyze/compare-two-tsx-peers/)
- [What is ROE?](/investing/glossary/what-is-roe/)

## Sources

- IAS 16 *Property, Plant and Equipment* (cost and revaluation models); IAS 40 *Investment Property*.
- IFRS 3 *Business Combinations* (goodwill); IFRS 17 *Insurance Contracts*.
- IAS 21 *The Effects of Changes in Foreign Exchange Rates*.

## Media credits

- Hero: "Brampton ON Freight-Train 2022-07-05 (5).jpg" by Milan Suvajac, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Brampton_ON_Freight-Train_2022-07-05_(5).jpg). Cropped and resized to 1280x720. Real photograph of a freight train in Brampton, Ontario, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
