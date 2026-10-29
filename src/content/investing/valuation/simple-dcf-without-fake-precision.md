---
title: "How to Build a Simple DCF Without Fake Precision"
description: "A plain-English, five-input discounted cash flow (DCF) for Canadian DIY investors: free cash flow, growth, discount rate, terminal value and a sensitivity grid — with a fully worked hypothetical example and the traps that create fake precision."
category: "valuation"
role: "Hub"
pubDate: 2026-10-29
image: "/images/investing/simple-dcf-without-fake-precision.jpg"
imageAlt: "The neoclassical columned facade of the Bank of Montreal head office on Place d'Armes in Old Montreal"
imageCredit: "Bank of Montreal head office, Place d'Armes, Montréal, August 2022. Photo by D. Benjamin Miller, CC0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

A discounted cash flow (DCF) model estimates what a business is worth today based on the cash it might generate in the future. Done badly, it produces a precise-looking number ($47.83!) built on guesses. Done well, it produces a **range** and tells you which assumption the price depends on.

Educational only — not financial advice. Every number below is **hypothetical**.

## Direct answer

Use five inputs: **starting free cash flow, a growth rate for 5 years, a discount rate, a terminal growth rate, and net debt + share count**. Discount each year's FCF, add a terminal value, subtract net debt, divide by shares. Then build a **sensitivity grid** and report a range. If most of the value comes from the terminal value (it usually does), your real bet is on the long-term assumptions — be honest about that.

## The five-input model

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="The five-step simple DCF" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">1. Starting FCF</text><text x="71" y="69" font-size="10.9" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Normalized,</text><text x="71" y="83" font-size="10.9" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">trailing or mid-cycle</text><line x1="134" y1="60" x2="151" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154" y="14" width="122" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="216" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">2. Grow 5 years</text><text x="216" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">One growth rate</text><text x="216" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">you can defend</text><line x1="279" y1="60" x2="296" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="299" y="14" width="122" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">3. Discount</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Required return</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">(e.g. 8–10%)</text><line x1="423" y1="60" x2="440" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443" y="14" width="122" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504" y="38" font-size="12.0" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">4. Terminal value</text><text x="504" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Modest perpetual</text><text x="504" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">growth (1–3%)</text><line x1="568" y1="60" x2="585" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="588" y="14" width="122" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="649" y="38" font-size="12.0" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">5. Equity / share</text><text x="649" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Subtract net debt,</text><text x="649" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">divide by shares</text></svg>
<figcaption>Keep it this simple. Adding twenty line items rarely improves accuracy; it mostly hides assumptions.</figcaption>
</figure>

| Input | Hypothetical choice | How to choose yours |
|:--|:--|:--|
| Starting FCF | $100M (year 1) | Normalized FCF from [FCF analysis](/investing/analyze/free-cash-flow-analysis/); mid-cycle for cyclicals |
| Growth, years 1–5 | 5% a year | Anchor on history and guidance; be skeptical above long-run revenue growth |
| Discount rate | 9% | Your required return; higher for riskier, more levered or cyclical names |
| Terminal growth | 2% | At or below long-run nominal economic growth; never above the discount rate |
| Net debt / shares | $400M / 50M shares | Latest balance sheet; diluted shares |

## Worked example (hypothetical)

| Year | FCF ($M) | Discount factor at 9% | Present value ($M) |
|:--|--:|--:|--:|
| 1 | 100.0 | 0.917 | 91.7 |
| 2 | 105.0 | 0.842 | 88.4 |
| 3 | 110.3 | 0.772 | 85.1 |
| 4 | 115.8 | 0.708 | 82.0 |
| 5 | 121.6 | 0.650 | 79.0 |
| *Sum, years 1–5* | | | *426.3* |

**Terminal value** at end of year 5 = FCF₅ × (1 + g) ÷ (r − g) = 121.6 × 1.02 ÷ (0.09 − 0.02) ≈ **$1,771M**, worth ≈ **$1,151M** today (× 0.650).

| Step | $M |
|:--|--:|
| PV of years 1–5 | 426 |
| PV of terminal value | 1,151 |
| **Enterprise value** | **1,577** |
| − Net debt | −400 |
| **Equity value** | **1,177** |
| ÷ 50M shares | **≈ $23.5 per share** |

### Where the value comes from

<figure class="diagram">
<svg viewBox="0 0 720 300" role="img" aria-label="Share of DCF value from explicit years vs terminal value" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0 $M</text><line x1="70" y1="195" x2="710" y2="195" stroke="#e2e8f0"/><text x="62" y="199" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">500 $M</text><line x1="70" y1="140" x2="710" y2="140" stroke="#e2e8f0"/><text x="62" y="144" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">1000 $M</text><line x1="70" y1="85" x2="710" y2="85" stroke="#e2e8f0"/><text x="62" y="89" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">1500 $M</text><line x1="70" y1="30" x2="710" y2="30" stroke="#e2e8f0"/><text x="62" y="34" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">2000 $M</text><rect x="114" y="203" width="122" height="47" rx="4" fill="#94a3b8"/><text x="175" y="195" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">426 $M</text><text x="175" y="270" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">PV years</text><text x="175" y="282" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">1–5</text><rect x="324" y="123" width="122" height="127" rx="4" fill="#0d9488"/><text x="385" y="115" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">1151 $M</text><text x="385" y="270" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">PV terminal</text><text x="385" y="282" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">value</text><rect x="534" y="77" width="122" height="173" rx="4" fill="#94a3b8"/><text x="595" y="69" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">1577 $M</text><text x="595" y="270" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Enterprise</text><text x="595" y="282" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">value</text></svg>
<figcaption>In this hypothetical, about 73% of enterprise value comes from the terminal value — the years you can&#x27;t see.</figcaption>
</figure>

## The sensitivity grid — your real output

Enterprise value ($M) as the discount rate and terminal growth change (5% growth in years 1–5, hypothetical):

| Discount rate ↓ / terminal growth → | 1% | 2% | 3% |
|:--|--:|--:|--:|
| 8% | 1,632 | 1,844 | 2,142 |
| 9% | 1,424 | **1,577** | 1,782 |
| 10% | 1,262 | 1,377 | 1,526 |

Per share after $400M net debt and 50M shares, that's roughly **$17 to $35** — with the base case at about $23.5. A one-point change in the discount rate moves value by ~13–20%. That's why a single-number DCF target is fake precision.

| Growth in years 1–5 (r = 9%, g = 2%) | 2% | 5% | 8% |
|:--|--:|--:|--:|
| Enterprise value ($M) | 1,429 | 1,577 | 1,739 |

*Near-term growth matters less than most people expect; the discount rate and terminal assumptions dominate.*

## Turning the range into a decision

| Price vs your DCF range | Reasonable reading |
|:--|:--|
| Below the low end | Market is more pessimistic than your worst case — check what you're missing, then consider it |
| Inside the range | Fairly priced on your assumptions; other factors decide |
| Above the high end | Market assumes more than your best case — need a reason you're too conservative |

You can also **reverse** the DCF: solve for the growth rate the current price implies, and ask whether that's believable.

## Fake-precision traps

1. Cents in the output (report a range, rounded).
2. Terminal growth near the discount rate — value explodes toward infinity.
3. Peak-cycle FCF as the starting point for a producer or miner.
4. Forgetting net debt, leases, preferreds, or dilution.
5. Using a DCF for banks — use [P/B and ROE](/investing/valuation/valuing-canadian-banks-pb-roe/) instead.
6. Ignoring the market: always compare to [relative multiples](/investing/valuation/relative-vs-intrinsic-valuation/) like [P/FCF](/investing/valuation/what-p-fcf-means-canadian-diy/) and [EV/EBITDA](/investing/valuation/ev-ebitda-for-canadian-diy-investors/).

Put the final range into the valuation block of your [stock brief](/investing/analyze/stock-brief-template-bull-bear-watch/).

## Soft CTA

A spreadsheet version of this five-input DCF is planned for the **Valuation Without Fake Precision** ebook. The free method above is complete.

## Media credits

- Hero: “Bank of Montreal Head Office, Aug 31 2022.jpg” by D. Benjamin Miller, [CC0](https://creativecommons.org/publicdomain/zero/1.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bank_of_Montreal_Head_Office,_Aug_31_2022.jpg). Cropped and resized to 1280×720. Real photograph, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
