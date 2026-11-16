---
title: "When Price/NAV Misleads on TSX Stocks"
description: "How price to NAV misleads on TSX stocks: mismatched price decks, stale technical reports, developer dilution, missing claims, holdco discounts and REIT cap-rate drift. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-16
image: "/images/investing/when-price-nav-misleads-tsx.jpg"
imageAlt: "Old mine buildings at the Giant Mine site near Yellowknife, Northwest Territories, during remediation work"
imageCredit: "Giant Mine remediation photograph by CambridgeBayWeather, CC BY-SA 4.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Price/NAV looks objective: a ratio below 1.0x seems to say the market values a miner, REIT or holding company at less than its assets are worth. In practice, P/NAV misleads more often than most multiples, because NAV is not reported anywhere. It is an estimate built from a price deck, a discount rate, a cap rate or a private-stake value, and whoever built it chose those inputs.

This post lists the traps specific to P/NAV on TSX stocks and the fix for each. The NAV build itself is in [how to calculate price/NAV in CAD from filings](/investing/valuation/calculate-price-nav-in-cad-from-filings/), and the concept in [what price/NAV means](/investing/valuation/what-price-nav-means-canadian-diy/). It is educational; all figures are hypothetical.

## Direct answer

P/NAV misleads when (1) the NAVs being compared use **different price decks or discount rates**; (2) the NAV relies on a **stale technical report**; (3) a developer's NAV ignores the **dilution and financing** needed to build; (4) **closure, hedge and stream** claims are left out; (5) a **holding-company discount** is treated as a bargain; or (6) a REIT's NAV rests on **appraisal cap rates** that lag the market. Before reading any P/NAV, ask: whose NAV, at what assumptions, as of when, and per which share count?

## Trap 1: different decks, different answers

The most common error is comparing P/NAV figures from different sources. One analyst uses a conservative deck and a 7% rate; another a higher deck and 5%. At the same share price, the ratios can span a wide range.

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical: the same company at the same share price shows three different price to NAV ratios from three sources" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0x</text><line x1="70" y1="197.5" x2="710" y2="197.5" stroke="#e2e8f0"/><text x="62" y="201.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0.35x</text><line x1="70" y1="145" x2="710" y2="145" stroke="#e2e8f0"/><text x="62" y="149" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0.7x</text><line x1="70" y1="92.5" x2="710" y2="92.5" stroke="#e2e8f0"/><text x="62" y="96.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">1.05x</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">1.4x</text><rect x="146.667" y="85" width="56" height="165" rx="3" fill="#0d9488"/><text x="174.667" y="79" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">1.10x</text><text x="176.667" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Source A</text><text x="176.667" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">low deck, 7%</text><rect x="360" y="122.5" width="56" height="127.5" rx="3" fill="#0d9488"/><text x="388" y="116.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">0.85x</text><text x="390" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Source B</text><text x="390" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">base deck, 5%</text><rect x="573.333" y="148" width="56" height="102" rx="3" fill="#0d9488"/><text x="601.333" y="142" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">0.68x</text><text x="603.333" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Source C</text><text x="603.333" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">high deck, 5%</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">P/NAV at the same share price</text></svg>
<figcaption>Hypothetical: one company, one share price, three NAVs. On a low deck and 7% rate it trades at 1.10x NAV; on a high deck at 5%, at 0.68x. None of these is "the" P/NAV.</figcaption>
</figure>

| Source | Price deck | Discount rate | NAV/share | P/NAV at $10.00 |
|:--|:--|--:|--:|--:|
| A | Low | 7% | $9.09 | 1.10x |
| B | Base | 5% | $11.76 | 0.85x |
| C | High | 5% | $14.71 | 0.68x |

**Fix:** build or adjust every NAV to one deck and one rate before comparing. If a source does not state its deck, do not use its P/NAV.

## Trap 2: stale technical reports

NI 43-101 technical reports are point-in-time documents. A report from several years ago may assume lower operating costs, lower sustaining capex and a different exchange rate than today.

| Sign of a stale NAV input | What to check |
|:--|:--|
| Report date several years back | Latest MD&A cost guidance and capex vs the report |
| Costs in the report below current AISC guidance | Re-estimate cash flow at current costs |
| Mine plan changed (new pit, underground transition) | Updated mine plan or a newer report |
| Exchange rate assumption far from today's | Re-base the US dollar costs and revenue |

**Fix:** treat the report as a starting point and adjust to current guidance; flag the NAV as low-confidence if the gap is large.

## Trap 3: developers and the cost of building

A developer often trades at a deep discount to the NPV of its project. Part of that discount is rational: the NPV usually assumes the mine is financed and built, but the company still has to raise the money, often by issuing shares below NAV.

| Hypothetical developer | Before financing | After financing |
|:--|--:|--:|
| Project NPV (after capex), plus net cash, less G&A | C$1,000M | C$1,000M |
| Equity raised at $4.00 per share | | +C$320M |
| Financing costs (fees, stream or royalty terms, interest) | | −C$100M |
| NAV | C$1,000M | C$1,220M |
| Shares | 100M | 180M |
| **NAV per share** | **$10.00** | **$6.78** |
| P/NAV at $4.00 | 0.40x | 0.59x |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical developer: NAV per share falls once the equity raise and financing costs needed to build the mine are included" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$0</text><line x1="70" y1="197.5" x2="710" y2="197.5" stroke="#e2e8f0"/><text x="62" y="201.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$3</text><line x1="70" y1="145" x2="710" y2="145" stroke="#e2e8f0"/><text x="62" y="149" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$6</text><line x1="70" y1="92.5" x2="710" y2="92.5" stroke="#e2e8f0"/><text x="62" y="96.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$9</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$12</text><rect x="170" y="75" width="56" height="175" rx="3" fill="#0d9488"/><text x="198" y="69" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$10.00</text><rect x="230" y="180" width="56" height="70" rx="3" fill="#94a3b8"/><text x="258" y="174" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$4.00</text><text x="230" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Before financing</text><rect x="490" y="131.35" width="56" height="118.65" rx="3" fill="#0d9488"/><text x="518" y="125.35" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$6.78</text><rect x="550" y="180" width="56" height="70" rx="3" fill="#94a3b8"/><text x="578" y="174" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$4.00</text><text x="550" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">After equity and</text><text x="550" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">financing costs</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">NAV per share</text><rect x="221" y="10" width="14" height="14" rx="3" fill="#94a3b8"/><text x="241" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Share price</text></svg>
<figcaption>Hypothetical: issuing 80 million shares at $4.00 and paying financing costs cuts NAV per share from $10.00 to $6.78. The "0.40x" discount was partly the market pricing the dilution ahead of time.</figcaption>
</figure>

**Fix:** for developers, estimate the funding gap and calculate NAV per share **after** financing. [How to read prospectus documents for secondary offerings](/investing/analyze/read-prospectus-secondary-offerings/) and [spotting dilution risk in Canadian issuers](/investing/analyze/spot-dilution-risk-canadian-issuers/) explain how to read the raise.

## Trap 4: missing claims

| Claim often left out | Where it hides | Effect if missed |
|:--|:--|:--|
| Reclamation and closure costs | Provisions note (IAS 37) | NAV too high, worst for older or closing mines |
| Hedge book losses | Derivatives note | NAV too high when hedges are out of the money |
| Streams and royalties sold | Stream or deferred revenue note | Revenue per ounce lower than the deck implies |
| Leases and equipment financing | Lease and debt notes (IFRS 16) | Net debt understated |
| Convertibles and warrants | Share capital and debt notes | Per-share NAV overstated |

**Fix:** run through the notes before trusting any NAV, yours or anyone else's.

## Trap 5: holding-company discounts

Canadian holding companies with listed and private stakes often trade below the sum of their parts for long periods. A "40% discount" can persist for years if nothing changes.

| Hypothetical holdco | C$M |
|:--|--:|
| Listed stakes at market | 1,500 |
| Private stakes at management's value | 600 |
| Holdco debt | −300 |
| PV of head-office costs (often omitted) | −200 |
| NAV including costs | 1,600 |

Leaving out head-office costs alone overstates NAV by 12.5% here, and private stakes marked by management add more uncertainty. **Fix:** include holdco costs, haircut private-stake values, and look for a reason the discount would narrow (buybacks at a discount, asset sales, a simplification).

## Trap 6: REIT cap-rate drift

REITs carry properties at fair value under IAS 40, usually from appraisals and internal models. When interest rates or transaction markets move, the cap rates behind those values can lag. A REIT may look like it trades at a 25% discount to IFRS NAV while the market is simply applying a higher cap rate. [Valuation for REITs](/investing/valuation/valuing-reits-nav-ffo-affo/) shows how much NAV moves per point of cap rate. **Fix:** rebuild NAV at two or three cap rates and work out the cap rate the unit price implies.

## Six-question check before trusting a P/NAV

| Question | Pass if |
|:--|:--|
| Whose NAV? | Built by you, or a source that states its inputs |
| Which price deck and discount rate (or cap rate)? | Same as the peers you compare with |
| As of when? | Technical inputs updated to current guidance |
| What claims are included? | Debt, closure, hedges, streams, leases, G&A |
| Which share count? | Diluted, after any financing still needed |
| Why would the gap close? | A specific catalyst, not "it's cheap" |

## Go deeper

To compare miners on a level basis, see [price/NAV vs peers: a Canada-first comparison guide](/investing/valuation/price-nav-vs-peers-canada-first-comparison/). For the broader miner analysis that sits around NAV, read [how to analyze gold miners without only watching the spot price](/investing/analyze/analyze-gold-miners-beyond-spot-price/).

## Related reading

- [Red flags in junior mining and energy filings](/investing/analyze/spot-red-flags-junior-mining-energy-filings/)
- [How to read contingent liability disclosures](/investing/analyze/read-contingent-liability-disclosures/)
- [When P/B misleads on TSX stocks](/investing/valuation/when-pb-misleads-tsx/)
- [How to analyze REITs differently from ordinary equities](/investing/analyze/analyze-reits-vs-ordinary-equities/)

## Sources

- National Instrument 43-101 *Standards of Disclosure for Mineral Projects* (technical reports and their effective dates).
- National Instrument 51-101 *Standards of Disclosure for Oil and Gas Activities*.
- IAS 37 *Provisions, Contingent Liabilities and Contingent Assets*; IAS 40 *Investment Property*; IFRS 16 *Leases*; IAS 33 *Earnings per Share*.

## Media credits

- Hero: "Giant Mine remediation project 01.JPG" by CambridgeBayWeather, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Giant_Mine_remediation_project_01.JPG). Cropped and resized to 1280x720. Real photograph of mine buildings at the Giant Mine site near Yellowknife during remediation, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
