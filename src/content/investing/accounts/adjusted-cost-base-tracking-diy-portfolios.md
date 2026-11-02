---
title: "Adjusted Cost Base (ACB) Tracking for DIY Stock Portfolios"
description: "How to track adjusted cost base (ACB) for Canadian DIY stock portfolios: average cost for identical shares, commissions, DRIPs, return of capital, reinvested ETF distributions, US-dollar conversions, multiple brokers and a simple ledger. Worked hypothetical example. Educational, not tax advice."
category: "accounts"
role: "Spoke"
pubDate: 2026-11-02
image: "/images/investing/adjusted-cost-base-tracking-diy-portfolios.jpg"
imageAlt: "Two old wooden abacuses with rows of beads displayed in a museum case"
imageCredit: "Abacuses used at the State Department Store in Ulaanbaatar from 1923 to 1970, September 2025. Photo by K.F., CC BY-SA 4.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Adjusted cost base (ACB) is the number your capital gain or loss is measured against when you sell a stock in a **taxable** (non-registered) account. Brokers show a "book value", but for Canadian tax purposes **you** are responsible for the ACB — and for active DIY stock pickers with multiple purchases, DRIPs, return of capital and more than one broker, the two numbers drift apart more often than people expect.

Educational only — not tax advice. Examples are **hypothetical**. ACB tracking only matters for non-registered accounts; TFSA and RRSP trades have no capital gains to report.

## Direct answer

For identical shares, Canada uses the **average cost** method: total ACB ÷ number of shares. Purchases add their full cost including commissions; sales remove shares at the current average cost (the average itself doesn't change); reinvested dividends add new cost; return of capital reduces ACB; and selling costs reduce your proceeds. ACB is averaged across **all** your non-registered accounts holding the same security, even at different brokers. For US-dollar stocks, convert each purchase and sale to Canadian dollars at the exchange rate for that day. Keep your own spreadsheet; don't rely on broker book value alone.

## The events that change ACB

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Five portfolio events and how each changes adjusted cost base" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Buy</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Add cost +</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">commissions</text><line x1="134.4" y1="60" x2="151.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Sell</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Remove average</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">cost per share</text><line x1="278.8" y1="60" x2="295.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">DRIP</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Add each</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">reinvestment</text><line x1="423.2" y1="60" x2="440.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="11.4" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Return of capital</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Subtract from</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">total ACB</text><line x1="567.6" y1="60" x2="584.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Split / merger</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Shares change;</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">check the notice</text></svg>
<figcaption>Each event changes either the total ACB, the share count, or both. Selling never changes the average cost per share of the shares you keep.</figcaption>
</figure>

| Event | Effect on total ACB | Effect on share count | Watch out for |
|:--|:--|:--|:--|
| Purchase | + price × shares + commission | + shares | Include every fee you paid to buy |
| Sale | − average cost × shares sold | − shares | Commission reduces proceeds, not ACB |
| DRIP / reinvested dividend | + reinvested amount | + shares | Each one is a separate purchase |
| Return of capital (ROC) | − ROC amount | No change | Common on REITs and some ETFs; see your T3 |
| Reinvested capital gains distribution (ETFs) | + distribution amount | Usually no change (consolidated) | Often missing from broker book value |
| Stock split or consolidation | No change | × split ratio | ACB per share changes; total doesn't |
| Merger / spin-off | Allocated per company notice | New shares | Use the issuer's tax-information page |
| ACB goes below zero (large ROC) | Negative amount is a deemed capital gain; ACB resets to zero | — | Rare, but possible with high-ROC payers |

## A worked example (hypothetical)

| Date | Event | Shares | Total ACB | ACB / share | Note |
|:--|:--|--:|--:|--:|:--|
| Jan | Buy 100 at $40.00 + $10 commission | 100 | $4,010.00 | $40.10 | |
| Apr | Buy 50 at $50.00 + $10 commission | 150 | $6,520.00 | $43.47 | Average rises |
| Aug | Sell 60 at $55.00, $10 commission | 90 | $3,912.00 | $43.47 | Proceeds $3,290 − ACB $2,608 = **$682 gain** |
| Sep | DRIP: 2 shares at $52.00 | 92 | $4,016.00 | $43.65 | New purchase |
| Dec | ROC of $0.50 per share | 92 | $3,970.00 | $43.15 | ACB reduced by $46 |

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical ACB per share after each event in the worked example" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$0</text><line x1="70" y1="208" x2="710" y2="208" stroke="#e2e8f0"/><text x="62" y="212" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$10</text><line x1="70" y1="166" x2="710" y2="166" stroke="#e2e8f0"/><text x="62" y="170" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$20</text><line x1="70" y1="124" x2="710" y2="124" stroke="#e2e8f0"/><text x="62" y="128" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$30</text><line x1="70" y1="82" x2="710" y2="82" stroke="#e2e8f0"/><text x="62" y="86" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$40</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$50</text><rect x="104" y="82" width="60" height="168" rx="3" fill="#0d9488"/><text x="134" y="75.58" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$40.10</text><text x="134" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Buy 100</text><rect x="232" y="67" width="60" height="183" rx="3" fill="#0d9488"/><text x="262" y="61.426" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$43.47</text><text x="262" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Buy 50</text><rect x="360" y="67" width="60" height="183" rx="3" fill="#0d9488"/><text x="390" y="61.426" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$43.47</text><text x="390" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Sell 60</text><rect x="488" y="67" width="60" height="183" rx="3" fill="#0d9488"/><text x="518" y="60.67" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$43.65</text><text x="518" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">DRIP 2</text><rect x="616" y="69" width="60" height="181" rx="3" fill="#0d9488"/><text x="646" y="62.77" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$43.15</text><text x="646" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">ROC $0.50</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">ACB per share</text></svg>
<figcaption>Hypothetical worked example from the table below. Averaging is why a later, more expensive purchase lifts the cost of every share you own, and why a sale leaves the average unchanged.</figcaption>
</figure>

Note what the sale did: it removed $2,608 of ACB (60 × $43.47) and left the average unchanged. Only purchases, DRIPs, ROC and other distributions move the average.

## US-dollar stocks: convert every leg

Each purchase is converted to Canadian dollars at the exchange rate on that transaction's date, and each sale the same way. A hypothetical example:

| Leg | USD amount | Exchange rate (hypothetical) | CAD amount |
|:--|--:|--:|--:|
| Buy | US$1,000 | 1.35 | C$1,350 |
| Sell | US$1,100 | 1.30 | C$1,430 |
| Capital gain | US$100 | — | **C$80** |

A US$100 gain becomes a C$80 gain because the Canadian dollar strengthened. The reverse can turn a small USD loss into a CAD gain. Bank of Canada daily rates are a common, reasonable reference. See [account location for US dividend stocks](/investing/accounts/account-location-us-dividend-stocks/) for when USD holdings belong in taxable at all.

## Why broker book value isn't enough

| Problem | Why the broker's number can be wrong |
|:--|:--|
| Same stock at two brokers | Each broker averages only its own shares; your ACB averages both |
| Transfers between brokers | Book value is sometimes reset to market value or left blank |
| Return of capital and phantom distributions | Often posted months later, from T3 data, or not at all |
| Shares bought in a TFSA too | Registered shares are excluded from your taxable ACB — but count for the [superficial loss rule](/investing/accounts/superficial-loss-rule-stock-swaps/) |
| Corporate actions | Spin-offs and mergers need the issuer's allocation |

## A simple tracking setup

| Column | Why |
|:--|:--|
| Date (trade and settlement) | Tax uses the settlement date |
| Security and account | Separate taxable from registered |
| Event type | Buy, sell, DRIP, ROC, distribution, split |
| Shares and price (with currency) | Builds the ledger |
| Commission / fees | Added to cost or deducted from proceeds |
| FX rate (for USD) | Converts each leg |
| Running shares, total ACB, ACB/share | The numbers you report |
| Realized gain or loss | Feeds Schedule 3 at tax time |

Update it after every trade and once a year when T3/T5 slips arrive with ROC and distribution details.

## Common mistakes

| Mistake | Why it hurts | Fix |
|:--|:--|:--|
| Using broker book value without checking | Can overstate or understate gains | Reconcile once a year |
| FIFO thinking ("I sold my oldest shares") | Canada averages identical shares | Use average cost |
| Forgetting reinvested ETF distributions | You pay tax twice on the same amount | Add them to ACB from the T3 |
| Ignoring ROC | Understates your eventual gain | Reduce ACB as ROC is reported |
| Mixing accounts | Registered trades don't belong in ACB | Track taxable accounts only |

## Soft CTA

A copy-ready ACB ledger template (with USD columns and ROC handling) is planned for the **DIY Process** ebook. If you're comparing brokers on tax-lot and export features, see [how to compare Canadian discount brokers](/investing/brokers-tools/compare-canadian-discount-brokers/).

## Related reading

- [Superficial loss rule for stock swaps and replacements](/investing/accounts/superficial-loss-rule-stock-swaps/)
- [REIT distributions vs corporate dividends](/investing/dividends/reit-distributions-vs-corporate-dividends/)
- [Account location for Canadian dividend stocks](/investing/accounts/account-location-canadian-dividend-stocks/)
- [How to read an ETF factsheet before you buy](/investing/indexes-etfs/how-to-read-etf-factsheet/)

## Sources

- Canada Revenue Agency, Guide T4037 *Capital Gains* (adjusted cost base, identical properties and average cost, outlays and expenses, foreign currency).
- Income Tax Act, section 47 (identical properties) and paragraph 53(2)(h) (return of capital reduces ACB of trust units); subsection 40(3) (negative ACB deemed gain).

## Media credits

- Hero: “Abacus of State Department Store.jpg” by K.F., [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Abacus_of_State_Department_Store.jpg). Cropped and resized to 1280×720. Real photograph, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
