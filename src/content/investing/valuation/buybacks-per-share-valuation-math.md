---
title: "How Buybacks Change Per-Share Valuation Math"
description: "Buyback math for TSX investors: EPS accretion vs value per share, cash vs debt funding, gross vs net buybacks and the price-vs-value test. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-19
image: "/images/investing/buybacks-per-share-valuation-math.jpg"
imageAlt: "The glass-walled entrance pavilion and towers of Scotia Plaza in Toronto's financial district on a sunny day"
imageCredit: "Scotia Plaza photograph by Jeff Hitchcock, CC BY 2.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Share buybacks are a large part of how many TSX companies return cash, often through a normal course issuer bid (NCIB). They are usually described with one number: earnings per share went up. EPS accretion is real, but it is not the same as value creation. A buyback can raise EPS and still make every remaining shareholder poorer, if the company pays more for its shares than they are worth.

This post works through the per-share math with hypothetical numbers: EPS accretion, value per share, cash vs debt funding, and gross vs net buybacks. How to read the disclosures themselves is covered in [how to read share buyback disclosures in Canada](/investing/analyze/read-share-buyback-disclosures-canada/). It is educational; all figures are hypothetical.

## Direct answer

A buyback **adds value per remaining share only if the price paid is below intrinsic value per share**. It **raises EPS** whenever the earnings yield on the shares bought (1 ÷ P/E) is higher than the after-tax cost of the cash or debt used, which is a much lower bar. So judge buybacks on **price paid vs value**, on **net** share count reduction after stock-based compensation, and on **what else the cash could have done** (debt reduction, reinvestment, dividends).

## The hypothetical company

| Before the buyback | Value |
|:--|--:|
| Net income | C$500M |
| Shares outstanding | 100M |
| EPS | $5.00 |
| Share price | $75.00 |
| P/E / earnings yield | 15.0x / 6.67% |
| Cash available | C$750M, earning 4% pre-tax |
| Tax rate | 26.5% |

The company spends C$750M buying back 10M shares at $75.

## EPS accretion

| After the buyback | Funded with cash | Funded with new debt at 5% |
|:--|--:|--:|
| After-tax income lost or interest added | −C$22.1M (4% × 750 × 0.735) | −C$27.6M (5% × 750 × 0.735) |
| Net income | C$477.9M | C$472.4M |
| Shares | 90M | 90M |
| **EPS** | **$5.31 (+6.2%)** | **$5.25 (+5.0%)** |

EPS rises either way because the 6.67% earnings yield on the shares retired is far above the 2.9% to 3.7% after-tax cost of the money. That would be true even if the shares were badly overpriced.

## Value per share: the test that matters

Value per share after = (equity value before − cash spent) ÷ shares after.

| Intrinsic equity value before | Per share before | After: (value − 750) ÷ 90M | Change |
|:--|--:|--:|--:|
| C$6.0B | $60.00 | $58.33 | −2.8% |
| C$7.5B | $75.00 | $75.00 | 0.0% |
| C$9.0B | $90.00 | $91.67 | +1.9% |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical value per share before and after a $750 million buyback at $75 a share, for three different intrinsic values" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$0</text><line x1="70" y1="197.5" x2="710" y2="197.5" stroke="#e2e8f0"/><text x="62" y="201.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$25</text><line x1="70" y1="145" x2="710" y2="145" stroke="#e2e8f0"/><text x="62" y="149" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$50</text><line x1="70" y1="92.5" x2="710" y2="92.5" stroke="#e2e8f0"/><text x="62" y="96.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$75</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$100</text><rect x="116.667" y="124" width="56" height="126" rx="3" fill="#94a3b8"/><text x="144.667" y="118" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$60.00</text><rect x="176.667" y="127.507" width="56" height="122.493" rx="3" fill="#0d9488"/><text x="204.667" y="121.507" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$58.33</text><text x="176.667" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Intrinsic value</text><text x="176.667" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$60/share</text><rect x="330" y="92.5" width="56" height="157.5" rx="3" fill="#94a3b8"/><text x="358" y="86.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$75.00</text><rect x="390" y="92.5" width="56" height="157.5" rx="3" fill="#0d9488"/><text x="418" y="86.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$75.00</text><text x="390" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Intrinsic value</text><text x="390" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$75/share</text><rect x="543.333" y="61" width="56" height="189" rx="3" fill="#94a3b8"/><text x="571.333" y="55" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$90.00</text><rect x="603.333" y="57.493" width="56" height="192.507" rx="3" fill="#0d9488"/><text x="631.333" y="51.493" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$91.67</text><text x="603.333" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Intrinsic value</text><text x="603.333" y="286" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$90/share</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#94a3b8"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Before buyback</text><rect x="228" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="248" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">After buyback at $75</text></svg>
<figcaption>Hypothetical: the same buyback at $75 transfers value to selling shareholders if the shares are worth $60, and to remaining shareholders if they are worth $90. EPS rises 6.2% in all three cases.</figcaption>
</figure>

This is the core point: **a buyback is an investment in the company's own shares at the market price**. It is a good investment when the price is below value, neutral at fair value and a poor one above it. Your view of intrinsic value, from a [simple DCF](/investing/valuation/simple-dcf-without-fake-precision/) or [owner earnings](/investing/valuation/calculate-owner-earnings-in-cad-from-filings/), decides which.

## Gross vs net buybacks

Many companies buy back shares while issuing new ones for stock options, RSUs and other stock-based compensation. Only the net reduction benefits per-share value.

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical share count bridge: gross buyback of 10 million shares partly offset by 4 million shares issued for stock-based compensation, in millions" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0</text><line x1="70" y1="195" x2="710" y2="195" stroke="#e2e8f0"/><text x="62" y="199" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">30</text><line x1="70" y1="140" x2="710" y2="140" stroke="#e2e8f0"/><text x="62" y="144" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">60</text><line x1="70" y1="85" x2="710" y2="85" stroke="#e2e8f0"/><text x="62" y="89" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">90</text><line x1="70" y1="30" x2="710" y2="30" stroke="#e2e8f0"/><text x="62" y="34" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">120</text><rect x="115" y="66.6667" width="70" height="183.333" rx="3" fill="#0d9488"/><text x="150" y="60.6667" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">100</text><text x="150" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Shares at</text><text x="150" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">start</text><rect x="275" y="66.6667" width="70" height="18.3333" rx="3" fill="#0ea5e9"/><text x="310" y="60.6667" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−10</text><text x="310" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Repurchased</text><text x="310" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">(gross)</text><rect x="435" y="77.6667" width="70" height="7.33333" rx="3" fill="#f59e0b"/><text x="470" y="71.6667" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+4</text><text x="470" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Issued for</text><text x="470" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">SBC</text><rect x="595" y="77.6667" width="70" height="172.333" rx="3" fill="#0f172a"/><text x="630" y="71.6667" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">94</text><text x="630" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Shares at</text><text x="630" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">end</text></svg>
<figcaption>Hypothetical: a gross buyback of 10M shares shrinks the count by only 6M after 4M shares are issued for compensation. Forty percent of the spending offset dilution rather than shrinking the share count.</figcaption>
</figure>

| Hypothetical | Value |
|:--|--:|
| Shares repurchased (gross) | 10.0M |
| Shares issued for SBC and options | 4.0M |
| Net reduction | 6.0M (6.0%) |
| Cash spent | C$750M |
| Cash spent per net share retired | $125.00 |

Spending C$750M to retire a net 6M shares works out to $125 per share retired, not $75. Watch the diluted share count over several years; see [what is dilution](/investing/glossary/what-is-dilution/) and [how dilution changes per-share valuation math](/investing/valuation/dilution-per-share-valuation-math/).

## Buybacks vs other uses of cash

| Use of C$750M | Per-share effect | When it tends to win |
|:--|:--|:--|
| Buyback | Raises value per share if price < value | Shares clearly undervalued, balance sheet strong |
| Debt repayment | Lowers risk; raises equity value by the debt repaid | Leverage high or rising rates |
| Reinvest in the business | Value depends on return vs cost of capital | High-return projects available |
| Special or higher dividend | Neutral to value; cash in hand for holders | No better use, shares not cheap |
| Acquisition | Depends on price paid and integration | Clear strategic fit at a fair price |

Debt-funded buybacks deserve extra care. They add leverage, which raises the risk on the remaining equity even if EPS rises. Check covenants and coverage in [how to analyze interest coverage for levered TSX companies](/investing/analyze/analyze-interest-coverage-levered-tsx/).

## Canadian specifics

- An **NCIB** is permission to buy, not a commitment; compare shares actually bought with the maximum announced.
- **Substantial issuer bids** (tender offers) buy a block at a set price or range; the per-share math is the same.
- Check the MD&A and the statement of changes in equity for the average price paid each year, and compare it with your own value estimate at the time.

## Go deeper

To check whether a company has a habit of issuing shares that buybacks then offset, read [how to spot dilution risk in Canadian issuers](/investing/analyze/spot-dilution-risk-canadian-issuers/) and [how to read cap tables and fully diluted share counts](/investing/analyze/read-cap-tables-fully-diluted-share-counts/).

## Related reading

- [How to read share buyback disclosures in Canada](/investing/analyze/read-share-buyback-disclosures-canada/)
- [How to evaluate executive compensation alignment](/investing/analyze/evaluate-executive-compensation-alignment/)
- [Enterprise value vs equity value: when each matters](/investing/valuation/enterprise-value-vs-equity-value-when-each-matters/)
- [How to value mature dividend payers without only chasing yield](/investing/valuation/value-mature-dividend-payers-beyond-yield/)

## Sources

- Toronto Stock Exchange Company Manual, sections on normal course issuer bids.
- Koller, T., Goedhart, M. and Wessels, D., *Valuation* (Wiley), chapter on payout and buybacks.

## Media credits

- Hero: "Scotia Plaza (26891246009).jpg" by Jeff Hitchcock, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Scotia_Plaza_(26891246009).jpg). Cropped and resized to 1280x720. Real photograph of Scotia Plaza in Toronto, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
