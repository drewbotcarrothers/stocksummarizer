---
title: "How to Value Growth Stocks When Earnings Are Negative"
description: "How to value a money-losing TSX growth stock: revenue path, mature margin, year-5 value, dilution and discounting, with runway checks and a reverse test. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-18
image: "/images/investing/value-growth-stocks-negative-earnings.jpg"
imageAlt: "The brick Tannery building in Kitchener, Ontario, a former leather factory converted to technology offices"
imageCredit: "Tannery building photograph by JustSomePics, CC BY-SA 3.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

When a company loses money, P/E is meaningless, earnings yield is negative and owner earnings is below zero. Yet many TSX technology, biotech and early-stage industrial companies trade at large market values with no profit at all. The market is valuing future earnings, and the honest way to do the same is to estimate what those earnings might be, what it will cost in dilution and cash to get there, and what that future is worth today.

This post shows a simple five-step method for a hypothetical TSX-listed software company, plus the checks that keep it grounded. The revenue-multiple approach is covered in [what EV/Sales means](/investing/valuation/what-ev-sales-means-canadian-diy/) and the full cash flow model in [how to build a simple DCF without fake precision](/investing/valuation/simple-dcf-without-fake-precision/). It is educational; all figures are hypothetical.

## Direct answer

(1) Project **revenue** with growth that slows over time. (2) Pick a **mature margin** the business could plausibly reach, anchored on profitable peers. (3) Value the business in a **target year** (for example year 5) as earnings × an exit multiple, plus net cash. (4) **Dilute** for the shares that will be issued along the way. (5) **Discount** back to today at a high required return. Run bear, base and bull cases, then ask what margin and multiple today's price requires. Check **cash runway** first: a company that must raise money at a low price changes every number.

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Five-step flow for valuing a growth company that has negative earnings today" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Revenue path</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Growth that</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">decelerates</text><line x1="134.4" y1="60" x2="149.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Mature margin</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">What peers</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">earn at scale</text><line x1="278.8" y1="60" x2="293.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Year-5 value</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Earnings ×</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">exit multiple</text><line x1="423.2" y1="60" x2="438.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Dilute</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Future share</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">count</text><line x1="567.6" y1="60" x2="582.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Discount</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Back to today</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">at a high r</text></svg>
<figcaption>Five steps from revenue to value per share today. Steps 2 and 4 are the ones most often skipped.</figcaption>
</figure>

## The starting point

| Hypothetical software company | Value |
|:--|--:|
| Revenue, last 12 months | C$200M |
| Revenue growth | 30% |
| Operating margin | −15% |
| Cash burn (negative free cash flow) | C$40M a year (−20% FCF margin) |
| Cash, no debt | C$150M |
| Diluted shares | 100M |
| Share price | $9.00 |
| Market cap / EV | C$900M / C$750M |
| EV/Sales | 3.75x |
| Rule of 40 (growth + FCF margin) | 30% − 20% = 10% |

Before anything else: **runway**. With C$150M of cash and C$40M of annual burn, the company has about 3.75 years if burn stays flat. If the plan requires burn to keep rising, it will need to raise equity or debt, and the price of that raise matters. See [how to spot dilution risk in Canadian issuers](/investing/analyze/spot-dilution-risk-canadian-issuers/).

## Steps 1 and 2: revenue path and mature margin

| Year (hypothetical) | Growth | Revenue (C$M) |
|:--|--:|--:|
| Today | | 200.0 |
| Year 1 | 30% | 260.0 |
| Year 2 | 25% | 325.0 |
| Year 3 | 20% | 390.0 |
| Year 4 | 17% | 456.3 |
| Year 5 | 15% | 524.7 |

Growth slows because it almost always does. The mature margin is a judgment: look at profitable peers of similar scale and business model and use their operating margin range, not the best one. [How to read unit economics when disclosed](/investing/analyze/read-unit-economics-when-disclosed/) and [customer retention in subscription businesses](/investing/analyze/evaluate-customer-retention-subscription-businesses/) help test whether the business can get there.

## Steps 3 to 5: value, dilute, discount

| Scenario (hypothetical) | Bear | Base | Bull |
|:--|--:|--:|--:|
| Year-5 operating margin | 12% | 20% | 25% |
| Year-5 after-tax earnings at 26% tax (C$M) | 46.6 | 77.7 | 97.1 |
| Exit P/E | 15x | 20x | 25x |
| Equity value in year 5, incl. C$50M net cash (C$M) | 749 | 1,603 | 2,477 |
| Diluted shares in year 5 (5% a year) | 127.6M | 127.6M | 127.6M |
| Value per share in year 5 | $5.87 | $12.56 | $19.41 |
| **Discounted at 12% for 5 years (÷ 1.762)** | **$3.33** | **$7.13** | **$11.01** |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical software company: value per share today in three scenarios for year-five margin and exit multiple, against the share price" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$0</text><line x1="70" y1="197.5" x2="710" y2="197.5" stroke="#e2e8f0"/><text x="62" y="201.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$3</text><line x1="70" y1="145" x2="710" y2="145" stroke="#e2e8f0"/><text x="62" y="149" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$6</text><line x1="70" y1="92.5" x2="710" y2="92.5" stroke="#e2e8f0"/><text x="62" y="96.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$9</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$12</text><rect x="116.667" y="191.725" width="56" height="58.275" rx="3" fill="#0d9488"/><text x="144.667" y="185.725" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$3.33</text><rect x="176.667" y="92.5" width="56" height="157.5" rx="3" fill="#94a3b8"/><text x="204.667" y="86.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$9.00</text><text x="176.667" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Bear</text><text x="176.667" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">12% margin, 15x</text><rect x="330" y="125.225" width="56" height="124.775" rx="3" fill="#0d9488"/><text x="358" y="119.225" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$7.13</text><rect x="390" y="92.5" width="56" height="157.5" rx="3" fill="#94a3b8"/><text x="418" y="86.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$9.00</text><text x="390" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Base</text><text x="390" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">20% margin, 20x</text><rect x="543.333" y="57.325" width="56" height="192.675" rx="3" fill="#0d9488"/><text x="571.333" y="51.325" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$11.01</text><rect x="603.333" y="92.5" width="56" height="157.5" rx="3" fill="#94a3b8"/><text x="631.333" y="86.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$9.00</text><text x="603.333" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Bull</text><text x="603.333" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">25% margin, 25x</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Value per share today</text><rect x="277" y="10" width="14" height="14" rx="3" fill="#94a3b8"/><text x="297" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Share price today</text></svg>
<figcaption>Hypothetical: today's value per share is $3.33, $7.13 or $11.01 depending on the margin and multiple reached by year 5. The $9.00 share price sits between base and bull.</figcaption>
</figure>

Three notes. The 12% required return is deliberately higher than for a mature company, because the outcome is uncertain and the company is not yet self-funding. Dilution of 5% a year (share-based pay plus a small raise) cuts year-5 value per share by about 22%. And the bear case is not the worst case: if the company never reaches profit, the value is what is left after the cash runs out.

## Reverse check: what does $9.00 require?

At a 20x exit multiple, a 12% required return and 5% annual dilution, a $9.00 share price requires a year-5 operating margin of about **25%** on C$525M of revenue. That is the bull case margin. Ask whether profitable peers at that scale actually earn 25%, and whether this company's gross margin, customer retention and sales efficiency point that way.

## Other tools and their limits

| Tool | Useful for | Limit |
|:--|:--|:--|
| EV/Sales vs peers with growth | Quick relative check; see [EV/Sales vs peers](/investing/valuation/ev-sales-vs-peers-canada-first-comparison/) | Ignores the path to profit |
| EV/Gross profit | Adjusts for different gross margins | Still ignores operating costs |
| Rule of 40 | Balances growth and cash burn | A screen, not a valuation |
| Price to sales by stage | Comparing with past companies | Survivor bias |
| Cash runway and burn multiple | Survival risk | Says nothing about value |

## Red flags

| Red flag | Why it matters |
|:--|:--|
| Gross margin falling while revenue grows | Growth may be bought, not earned |
| Burn rising faster than revenue | Mature margin may never arrive |
| Share-based pay above 15% of revenue | Dilution higher than modelled |
| Adjusted EBITDA positive, free cash flow deeply negative | Capitalized costs or working capital hiding the burn |
| Runway under 18 months | Financing on poor terms likely |

## Go deeper

For mature companies, earnings-based methods work better; see [how to value mature dividend payers](/investing/valuation/value-mature-dividend-payers-beyond-yield/). To present the result as a range rather than a target, read [fair value ranges instead of price targets](/investing/valuation/fair-value-ranges-instead-of-price-targets/).

## Related reading

- [How to analyze software business models on the TSX](/investing/analyze/analyze-software-business-models-tsx/)
- [When EV/Sales misleads on TSX stocks](/investing/valuation/when-ev-sales-misleads-tsx/)
- [How to research TSX Venture small caps](/investing/analyze/research-tsx-venture-small-caps/)
- [How to read cap tables and fully diluted share counts](/investing/analyze/read-cap-tables-fully-diluted-share-counts/)

## Sources

- Damodaran, A., *The Dark Side of Valuation* (FT Press), on valuing young and money-losing companies.
- Koller, T., Goedhart, M. and Wessels, D., *Valuation: Measuring and Managing the Value of Companies* (McKinsey & Company, Wiley), on high-growth companies.
- IFRS 2 *Share-based Payment*; National Instrument 52-112 *Non-GAAP and Other Financial Measures Disclosure*.

## Media credits

- Hero: "Tannery building Kitchener Ontario 2014.jpg" by JustSomePics, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Tannery_building_Kitchener_Ontario_2014.jpg). Cropped and resized to 1280x720. Real photograph of the Tannery building in Kitchener, Ontario, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
