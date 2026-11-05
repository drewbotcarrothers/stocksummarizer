---
title: "How to Analyze Operating Leverage in a Simple Business Model"
description: "A napkin-model DIY guide to operating leverage: fixed vs variable costs, +/-10% revenue cases, EBIT sensitivity, cash confirmation, and downside questions for the MD&A. Educational, not advice."
category: "analyze"
role: "Spoke"
pubDate: 2026-11-05
image: "/images/investing/analyze-operating-leverage.jpg"
imageAlt: "Wide view of an aircraft assembly plant floor with rows of fuselages"
imageCredit: "Bell Airacobra P-39 assembly plant, Library of Congress public domain photograph via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

In a simple business — one product family, visible fixed costs, limited finance engineering — **operating leverage** is often the hidden driver of earnings surprises. Model it crudely before you treat a profit beat as permanent.

Educational only — not financial advice. All dollar figures are **hypothetical**.

## Direct answer

Split costs into roughly fixed vs variable, run +/-10% revenue cases on a napkin model, and see how EBIT moves. Confirm whether cash from operations tells the same story. Write the downside case into your thesis: what happens if volume stalls while fixed costs remain.

## Workflow

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Operating-leverage workflow for a simple business model" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Map cost shape</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Fixed vs</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">variable</text><line x1="134.4" y1="60" x2="151.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="10.8" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Build simple model</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Revenue up/down</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">cases</text><line x1="278.8" y1="60" x2="295.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Watch opex</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Does opex lag</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">revenue?</text><line x1="423.2" y1="60" x2="440.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Check cash</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Same story in</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">cash flow?</text><line x1="567.6" y1="60" x2="584.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Write the risk</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">What if volume</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">stalls?</text></svg>
<figcaption>Operating leverage is a double-edged sword: profits rise fast when volume works, and fall fast when it does not.</figcaption>
</figure>

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical operating leverage: EBIT sensitivity to a 10% revenue swing" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0</text><line x1="70" y1="190" x2="710" y2="190" stroke="#e2e8f0"/><text x="62" y="194" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">10</text><line x1="70" y1="130" x2="710" y2="130" stroke="#e2e8f0"/><text x="62" y="134" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">20</text><line x1="70" y1="70" x2="710" y2="70" stroke="#e2e8f0"/><text x="62" y="74" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">30</text><rect x="147" y="130" width="60" height="120" rx="3" fill="#0d9488"/><text x="176.667" y="124" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">20</text><text x="176.667" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Base</text><rect x="360" y="58" width="60" height="192" rx="3" fill="#0d9488"/><text x="390" y="52" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">32</text><text x="390" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Rev +10%</text><rect x="573" y="202" width="60" height="48" rx="3" fill="#0d9488"/><text x="603.333" y="196" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">8</text><text x="603.333" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Rev -10%</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">EBIT $M (hyp.)</text></svg>
<figcaption>Hypothetical simple manufacturer with high fixed costs. A 10% revenue rise lifts EBIT from $20M to $32M; a 10% drop cuts EBIT to $8M.</figcaption>
</figure>

## Hypothetical napkin model

| Item | Base | Rev +10% | Rev -10% |
|:--|:--|:--|:--|
| Revenue | $200M | $220M | $180M |
| Variable costs (60%) | $120M | $132M | $108M |
| Fixed costs | $60M | $60M | $60M |
| EBIT | $20M | $28M* | $12M* |
| EBIT margin | 10% | 12.7% | 6.7% |

*Illustration; the chart above uses a slightly higher fixed-cost case ($20M/$32M/$8M) to show a steeper lever. Rebuild with the company's own cost shape.

## Questions to answer in the MD&A

| Question | Where to look |
|:--|:--|
| Which costs management calls fixed? | MD&A, cost notes |
| Utilization / volume commentary | MD&A operations |
| Step-fixed costs (new plant, headcount) | Capex plans, opex bridges |
| Does FCF leverage match EBIT leverage? | Cash flow statement |

See also [gross margin trends](/investing/analyze/analyze-gross-margin-trends/) and [free cash flow analysis](/investing/analyze/free-cash-flow-analysis/).

## Related reading

- [How to analyze gross margin trends](/investing/analyze/analyze-gross-margin-trends/)
- [How to analyze free cash flow](/investing/analyze/free-cash-flow-analysis/)
- [How to read capex plans in an MD&A](/investing/analyze/read-capex-plans-mdna/)
- [How to read an MD&A](/investing/analyze/how-to-read-mdna/)

## Sources

- IFRS Foundation, IAS 1 *Presentation of Financial Statements*.
- National Instrument 51-102 *Continuous Disclosure Obligations* (MD&A requirements for discussion of results and liquidity).

## Media credits

- Hero: "Airacobra P39 Assembly LOC 02902u.jpg", U.S. Library of Congress / public domain, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Airacobra_P39_Assembly_LOC_02902u.jpg). Cropped and resized to 1280x720. Historical photograph, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
