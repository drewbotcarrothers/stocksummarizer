---
title: "How to Value Dual-Class Share Structures"
description: "How to value dual-class TSX companies: count every class, compare votes with economics, read coattails and sunsets, and judge a governance discount. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-19
image: "/images/investing/value-dual-class-share-structures.jpg"
imageAlt: "A modern glass office tower beside older stone buildings on Saint-Jacques Street in Old Montreal"
imageCredit: "Saint-Jacques Street office building photograph by Jeangagnon, CC BY-SA 3.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Dual-class shares are common on the TSX. A founding family or controlling shareholder holds **multiple voting shares** with several votes each, while public investors buy **subordinate voting** (or restricted or non-voting) shares with one vote or none. The economic rights are usually the same per share; the control is not. That raises two valuation questions: are you counting the whole company, and should control change what a public share is worth?

This post covers the mechanics with hypothetical numbers: getting market cap and per-share value right across classes, measuring the gap between economic interest and votes, and deciding whether a governance discount belongs in your valuation. It is educational; all figures are hypothetical and no company is being described.

## Direct answer

Value the company **on all share classes combined**, not just the listed class, then divide by the total economic share count. Check whether the classes have **equal economic rights** (dividends, liquidation) and whether the subordinate shares have **coattail protection** in a takeover. Then decide whether a **governance discount** is warranted, based on the controller's track record, related-party dealings, board independence and succession, rather than applying one by default. Dual-class companies can be excellent long-term holdings; the structure shifts risk to how well the controller behaves.

## Count every class

| Hypothetical company | Class A (multiple voting) | Class B (subordinate voting) | Total |
|:--|--:|--:|--:|
| Shares | 20M | 180M | 200M |
| Votes per share | 10 | 1 | |
| Total votes | 200M | 180M | 380M |
| Share of equity | 10.0% | 90.0% | 100% |
| Share of votes | 52.6% | 47.4% | 100% |
| Listed? | No (or thinly traded) | Yes, $30.00 | |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical dual-class company: Class A holds 10% of the equity but 52.6% of the votes" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0%</text><line x1="70" y1="197.5" x2="710" y2="197.5" stroke="#e2e8f0"/><text x="62" y="201.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">25%</text><line x1="70" y1="145" x2="710" y2="145" stroke="#e2e8f0"/><text x="62" y="149" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">50%</text><line x1="70" y1="92.5" x2="710" y2="92.5" stroke="#e2e8f0"/><text x="62" y="96.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">75%</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">100%</text><rect x="170" y="229" width="56" height="21" rx="3" fill="#0ea5e9"/><text x="198" y="223" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">10%</text><rect x="230" y="139.54" width="56" height="110.46" rx="3" fill="#f59e0b"/><text x="258" y="133.54" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">52.6%</text><text x="230" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Class A</text><text x="230" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">(multiple voting)</text><rect x="490" y="61" width="56" height="189" rx="3" fill="#0ea5e9"/><text x="518" y="55" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">90%</text><rect x="550" y="150.46" width="56" height="99.54" rx="3" fill="#f59e0b"/><text x="578" y="144.46" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">47.4%</text><text x="550" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Class B</text><text x="550" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">(subordinate voting)</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0ea5e9"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Share of equity</text><rect x="235" y="10" width="14" height="14" rx="3" fill="#f59e0b"/><text x="255" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Share of votes</text></svg>
<figcaption>Hypothetical: Class A owns 10% of the economics and controls 52.6% of the votes.</figcaption>
</figure>

The most common error is computing market cap from the listed class only.

| Hypothetical, net income C$400M | Using Class B only | Using all classes |
|:--|--:|--:|
| Shares counted | 180M | 200M |
| Market cap at $30 | C$5.4B | C$6.0B |
| P/E | 13.5x (wrong) | 15.0x |
| EPS used | | $2.00 |

If the multiple voting shares have the same economic rights, they are part of the equity whether or not they trade. Data providers do not always get this right, so check the share capital note and the cover of the annual information form.

## Read the share terms

| Term | What to check | Why it matters |
|:--|:--|:--|
| Economic rights | Equal dividends and liquidation rights per share? | If not, value each class on its own entitlement |
| Votes per share | Ratio between classes | Higher ratios let a small stake control the company |
| Coattail provisions | Do subordinate holders participate in a takeover bid for the controlling shares? | Without them, a control premium can go to one holder only |
| Sunset clauses | Do multiple votes fall away on sale, death or a time limit? | Limits how long control lasts |
| Conversion rights | Can Class A convert to Class B? | Affects future share count and control |
| Class A ownership | Who holds it, any voting trust? | Succession and family disputes are real risks |

Since 1987, TSX policy has generally required coattail protection for new restricted-voting structures, but older structures and companies listed elsewhere can differ. The details are in the articles of the company, the annual information form and the [management information circular](/investing/analyze/read-management-information-circular/).

## Should you apply a governance discount?

Academic research on dual-class firms is mixed: some studies find discounts linked to the gap between control and economic ownership, others find dual-class firms perform well, especially while founders are active. A practical approach is to estimate economic value first, then decide on a discount based on evidence.

| Hypothetical economic value per share | Discount | Value per Class B share |
|:--|--:|--:|
| $34.00 | 0% | $34.00 |
| $34.00 | 5% | $32.30 |
| $34.00 | 10% | $30.60 |
| $34.00 | 15% | $28.90 |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical value per subordinate voting share after applying governance discounts of 0% to 15% to a $34 economic value" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$0</text><line x1="70" y1="197.5" x2="710" y2="197.5" stroke="#e2e8f0"/><text x="62" y="201.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$10</text><line x1="70" y1="145" x2="710" y2="145" stroke="#e2e8f0"/><text x="62" y="149" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$20</text><line x1="70" y1="92.5" x2="710" y2="92.5" stroke="#e2e8f0"/><text x="62" y="96.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$30</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$40</text><rect x="120" y="71.5" width="56" height="178.5" rx="3" fill="#0d9488"/><text x="148" y="65.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$34.00</text><text x="150" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">No discount</text><rect x="280" y="80.425" width="56" height="169.575" rx="3" fill="#0d9488"/><text x="308" y="74.425" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$32.30</text><text x="310" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">5% discount</text><rect x="440" y="89.35" width="56" height="160.65" rx="3" fill="#0d9488"/><text x="468" y="83.35" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$30.60</text><text x="470" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">10% discount</text><rect x="600" y="98.275" width="56" height="151.725" rx="3" fill="#0d9488"/><text x="628" y="92.275" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$28.90</text><text x="630" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">15% discount</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Value per Class B share</text></svg>
<figcaption>Hypothetical: with an economic value of $34, a 10% governance discount brings the value close to a $30 share price. The discount you choose can decide whether the stock looks cheap.</figcaption>
</figure>

| Evidence for little or no discount | Evidence for a larger discount |
|:--|:--|
| Long record of returns on capital above cost of capital | Value-destroying acquisitions or diversification |
| Minimal related-party transactions, fully disclosed | Frequent related-party deals; see [related-party disclosures](/investing/analyze/read-related-party-disclosures/) |
| Independent board majority, independent chair or lead director | Board dominated by family members or insiders |
| Controller owns a large economic stake | Votes far exceed economic ownership |
| Clear succession plan | Unclear succession, family disputes |
| Coattails and sunset provisions | No coattails, no sunset |
| Pay aligned with per-share results | Pay unrelated to performance; see [executive compensation alignment](/investing/analyze/evaluate-executive-compensation-alignment/) |

## When both classes trade

Some companies list both classes. The price gap between them reflects voting value, liquidity, index eligibility and coattail terms. A persistent premium for the voting class is common; a sudden change usually signals takeover speculation or a change in control rules. Compare the classes on the same economic basis, and remember that the cheaper class is not automatically the better buy if it has weaker takeover protection or lower liquidity.

## Go deeper

For how insider control shows up in the numbers, read [how to analyze insider ownership](/investing/analyze/analyze-insider-ownership/). For the rest of the equity bridge, read [enterprise value vs equity value: when each matters](/investing/valuation/enterprise-value-vs-equity-value-when-each-matters/) and [net debt adjustments Canadians often miss](/investing/valuation/net-debt-adjustments-canadians-miss/).

## Related reading

- [How to read the annual information form](/investing/analyze/how-to-read-annual-information-form/)
- [How to evaluate spin-offs and corporate separations](/investing/analyze/evaluate-spin-offs-corporate-separations/)
- [Sum-of-the-parts valuation for conglomerates and holding companies](/investing/valuation/sum-of-the-parts-valuation-conglomerates-holdcos/)
- [How to research dual-listed Canadian stocks](/investing/analyze/research-dual-listed-canadian-stocks/) (a different topic: one share class listed in two countries)

## Sources

- Toronto Stock Exchange Company Manual, provisions on restricted shares and takeover protection (coattails).
- Canadian Coalition for Good Governance, *Dual Class Share Policy*.
- Gompers, P., Ishii, J. and Metrick, A. (2010), "Extreme Governance: An Analysis of Dual-Class Firms in the United States," *Review of Financial Studies* 23(3).

## Media credits

- Hero: "Edifice Quebecor 11.jpg" by Jeangagnon, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Edifice_Quebecor_11.jpg). Cropped and resized to 1280x720. Real photograph of the Quebecor head office building on Saint-Jacques Street in Montreal, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
