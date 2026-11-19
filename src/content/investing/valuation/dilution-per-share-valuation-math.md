---
title: "How Dilution Changes Per-Share Valuation Math"
description: "Dilution math for TSX investors: treasury stock method, RSUs, warrants and convertibles, fully diluted value per share, and when a raise adds value. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-19
image: "/images/investing/dilution-per-share-valuation-math.jpg"
imageAlt: "A stone water wall and outdoor seating on the plaza at First Canadian Place in downtown Toronto"
imageCredit: "First Canadian Place plaza photograph by Ken Lund, CC BY-SA 2.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

A valuation is only as good as the share count you divide it by. Many TSX companies, especially in mining, energy, technology and other small and mid-cap sectors, have options, RSUs, warrants and convertible debentures outstanding. Divide equity value by the basic share count and the per-share value looks higher than what a shareholder will actually own. Issue new shares to fund growth and the per-share result depends on what the money earns.

This post works through the per-share math of dilution with hypothetical numbers: the treasury stock method, convertibles, and when an equity raise adds or destroys value per share. What dilution is, and how to spot issuers prone to it, are covered in [what is dilution](/investing/glossary/what-is-dilution/) and [how to spot dilution risk in Canadian issuers](/investing/analyze/spot-dilution-risk-canadian-issuers/). It is educational; all figures are hypothetical.

## Direct answer

Value per share should use the **fully diluted share count**: basic shares plus the net new shares from in-the-money options and warrants (using the **treasury stock method**), plus RSUs and other share units, plus convertibles if they are in the money (or valued separately as debt if not). For a new share issue, value per share rises only if the **value created by the use of the proceeds exceeds the discount and costs** of the issue. Always compare a company's per-share growth (FCF per diluted share, EPS) with its total growth to see what dilution is costing.

## From basic to fully diluted

The treasury stock method assumes option and warrant holders pay the exercise price, and the company uses that cash to buy back shares at the current price. Only the net shares are added.

| Hypothetical instrument (share price $40) | Count | Exercise price | Proceeds | Shares bought back at $40 | Net new shares |
|:--|--:|--:|--:|--:|--:|
| Options | 6.0M | $20 | $120M | 3.0M | 3.0M |
| RSUs and DSUs (no exercise price) | 2.0M | $0 | $0 | 0 | 2.0M |
| Warrants | 4.0M | $30 | $120M | 3.0M | 1.0M |
| Convertible debenture, C$100M at $50 | 2.0M if converted | $50 | n/a | n/a | 0 (out of the money) |
| **Fully diluted (basic 100.0M)** | | | | | **106.0M** |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical bridge from basic to fully diluted share count using the treasury stock method, in millions" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0</text><line x1="70" y1="195" x2="710" y2="195" stroke="#e2e8f0"/><text x="62" y="199" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">30</text><line x1="70" y1="140" x2="710" y2="140" stroke="#e2e8f0"/><text x="62" y="144" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">60</text><line x1="70" y1="85" x2="710" y2="85" stroke="#e2e8f0"/><text x="62" y="89" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">90</text><line x1="70" y1="30" x2="710" y2="30" stroke="#e2e8f0"/><text x="62" y="34" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">120</text><rect x="99" y="66.6667" width="70" height="183.333" rx="3" fill="#0d9488"/><text x="134" y="60.6667" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">100</text><text x="134" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Basic</text><text x="134" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">shares</text><rect x="227" y="61.1667" width="70" height="5.5" rx="3" fill="#f59e0b"/><text x="262" y="55.1667" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+3</text><text x="262" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Options</text><text x="262" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">(TSM)</text><rect x="355" y="57.5" width="70" height="3.66667" rx="3" fill="#f59e0b"/><text x="390" y="51.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+2</text><text x="390" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">RSUs</text><rect x="483" y="55.6667" width="70" height="1.83333" rx="3" fill="#f59e0b"/><text x="518" y="49.6667" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+1</text><text x="518" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Warrants</text><text x="518" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">(TSM)</text><rect x="611" y="55.6667" width="70" height="194.333" rx="3" fill="#0f172a"/><text x="646" y="49.6667" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">106</text><text x="646" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Fully</text><text x="646" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">diluted</text></svg>
<figcaption>Hypothetical: options, RSUs and warrants add a net 6M shares to 100M basic shares. The out-of-the-money convertible is kept as debt for now.</figcaption>
</figure>

The convertible needs a second look. At $40 it is likely to stay debt, so include it in net debt at face value. If the share price rises above $50, it becomes 2M more shares and the debt disappears. In a bull case, model it as converted; in a bear case, as debt that must be repaid or refinanced.

## How much the count matters

| Hypothetical equity value C$4,800M | Shares | Value per share |
|:--|--:|--:|
| Basic count | 100.0M | $48.00 |
| Fully diluted | 106.0M | $45.28 |
| Difference | | −5.7% |

A gap of this size is not unusual for a company that pays heavily in stock or has recently financed with warrants, and for some junior issuers it can be far larger. Check the full list in the equity and share-based payment notes; see [how to read cap tables and fully diluted share counts](/investing/analyze/read-cap-tables-fully-diluted-share-counts/).

## When a share issue adds or destroys value

Suppose the company issues 10M new shares at $36 (a discount to the $40 price) to fund a project, raising C$360M (ignore fees for simplicity).

| Scenario (hypothetical) | Equity value after | Shares after | Value per share | vs $45.28 |
|:--|--:|--:|--:|--:|
| Project NPV = 0 | 4,800 + 360 = 5,160 | 116.0M | $44.48 | −1.8% |
| Project NPV = +C$300M | 5,160 + 300 = 5,460 | 116.0M | $47.07 | +3.9% |
| Break-even NPV | about 5,253 | 116.0M | $45.28 | 0.0% |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical equity value per share on basic and fully diluted counts and after a 10 million share raise at $36" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$0</text><line x1="70" y1="197.5" x2="710" y2="197.5" stroke="#e2e8f0"/><text x="62" y="201.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$15</text><line x1="70" y1="145" x2="710" y2="145" stroke="#e2e8f0"/><text x="62" y="149" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$30</text><line x1="70" y1="92.5" x2="710" y2="92.5" stroke="#e2e8f0"/><text x="62" y="96.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$45</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$60</text><rect x="120" y="82" width="56" height="168" rx="3" fill="#0d9488"/><text x="148" y="76" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$48.00</text><text x="150" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Basic</text><text x="150" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">count</text><rect x="280" y="91.52" width="56" height="158.48" rx="3" fill="#0d9488"/><text x="308" y="85.52" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$45.28</text><text x="310" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Fully</text><text x="310" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">diluted</text><rect x="440" y="94.32" width="56" height="155.68" rx="3" fill="#0d9488"/><text x="468" y="88.32" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$44.48</text><text x="470" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">After raise</text><text x="470" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">(NPV $0)</text><rect x="600" y="85.255" width="56" height="164.745" rx="3" fill="#0d9488"/><text x="628" y="79.255" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$47.07</text><text x="630" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">After raise</text><text x="630" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">(NPV $300M)</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Value per share</text></svg>
<figcaption>Hypothetical: issuing shares at a discount for a project that only earns its cost of capital lowers value per share. The project needs about C$93M of NPV just to break even for existing holders.</figcaption>
</figure>

The lessons: issuing below intrinsic value per share is a cost that the project has to earn back, and fees and the discount widen that gap. Raises to fund losses with no project at all are pure dilution of value per share. Rights offerings change the arithmetic for holders who take up their rights; see [how to analyze rights offerings](/investing/analyze/analyze-rights-offerings-dilution/).

## Dilution over time

| Hypothetical company, 5 years | Total | Per diluted share |
|:--|--:|--:|
| Free cash flow growth | +80% | +38% |
| Diluted share count | +30% | |
| Implied per-share growth rate | | about 6.7% a year instead of 12.5% |

Total growth is what the company reports; per-share growth is what you own. A company that grows FCF 12.5% a year while adding 5.4% to its share count each year delivers only about 6.7% a year per share.

## Where to look

| Item | Where in the filings |
|:--|:--|
| Options and RSUs outstanding, exercise prices | Share-based payment note |
| Warrants | Share capital note, recent prospectuses |
| Convertible debentures and conversion price | Debt note, prospectus |
| Shares reserved under plans | Management information circular |
| Recent issues and prices | Statement of changes in equity, press releases; see [how to read a prospectus](/investing/analyze/read-prospectus-secondary-offerings/) |

## Go deeper

Buybacks are the mirror image of dilution; read [how buybacks change per-share valuation math](/investing/valuation/buybacks-per-share-valuation-math/). For how convertibles and other claims sit between enterprise and equity value, read [net debt adjustments Canadians often miss](/investing/valuation/net-debt-adjustments-canadians-miss/).

## Related reading

- [How to spot red flags in junior mining and energy filings](/investing/analyze/spot-red-flags-junior-mining-energy-filings/)
- [How to research TSX Venture small caps](/investing/analyze/research-tsx-venture-small-caps/)
- [How to value growth stocks when earnings are negative](/investing/valuation/value-growth-stocks-negative-earnings/)
- [How to read the management information circular](/investing/analyze/read-management-information-circular/)

## Sources

- IFRS Foundation, IAS 33 *Earnings per Share* (treasury stock method for diluted EPS) and IFRS 2 *Share-based Payment*.
- Damodaran, A., *Investment Valuation* (Wiley), chapter on employee options and per-share value.

## Media credits

- Hero: "First Canadian Place, Toronto, Ontario (29375077974).jpg" by Ken Lund, [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:First_Canadian_Place,_Toronto,_Ontario_(29375077974).jpg). Cropped and resized to 1280x720. Real photograph of the plaza at First Canadian Place in Toronto, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
