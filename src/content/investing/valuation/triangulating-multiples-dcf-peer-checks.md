---
title: "Triangulating Multiples, DCF, and Peer Checks"
description: "How Canadian DIY investors combine three valuation methods — trailing and forward multiples, a simple DCF, and peer comparisons — into one honest value range, with a hypothetical football-field chart and decision rules. Educational, not advice."
category: "valuation"
role: "Hub"
pubDate: 2026-10-30
image: "/images/investing/triangulating-multiples-dcf-peer-checks.jpg"
imageAlt: "Black-and-white 1968 photograph of a surveyor sighting through a Wild T2 theodolite, a precision instrument for measuring angles"
imageCredit: "Wild T2 theodolite in use, July 1968. Photo from Queensland State Archives, public domain, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Surveyors don't fix a position from one sighting. They take angles from several known points and see where the lines cross. Valuation works the same way. Any single method — a P/E, a DCF, a peer table — has blind spots. Use **three independent methods** and pay attention to where they agree and where they don't. That gives you a far more honest answer than any one model run to two decimal places.

Educational only — not financial advice. All figures are **hypothetical**.

## Direct answer

Estimate value three ways: (1) the stock's **own history** of multiples, (2) a **simple DCF** with a sensitivity grid, and (3) a **peer multiple** range. Plot the three ranges side by side (a "football field"). If they overlap, the overlap is your working fair-value zone. If they don't, the disagreement *is* the finding — work out which method is wrong for this business before you act.

## Why one method isn't enough

| Method | What it captures | Blind spot |
|:--|:--|:--|
| Own-history multiples | What the market has typically paid for *this* business | Assumes the business and interest rates haven't changed |
| Simple DCF | Cash the business can generate, discounted for risk | Very sensitive to discount rate and terminal growth |
| Peer multiples | What the market pays today for similar businesses | The whole group can be mispriced; "peers" may not be comparable |

Each method fails in a different way. Combining them won't make you right, but it makes you **less likely to be confidently wrong**. Background on the split between relative and intrinsic methods is in [relative vs intrinsic valuation](/investing/valuation/relative-vs-intrinsic-valuation/).

## The triangulation workflow

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Four-step valuation triangulation" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="158" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="89" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">1. History</text><text x="89" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">5–10 yr multiple</text><text x="89" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">range for this stock</text><line x1="170" y1="60" x2="188" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="190" y="14" width="158" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="270" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">2. DCF</text><text x="270" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Five inputs</text><text x="270" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">+ sensitivity grid</text><line x1="351" y1="60" x2="368" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="371" y="14" width="158" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="450" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">3. Peers</text><text x="450" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">3–6 true peers,</text><text x="450" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">same multiple</text><line x1="532" y1="60" x2="548" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="552" y="14" width="158" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="631" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">4. Overlay</text><text x="631" y="62" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Plot ranges,</text><text x="631" y="76" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">find overlap,</text><text x="631" y="90" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">explain gaps</text></svg>
<figcaption>Steps 1 to 3 are independent on purpose: do the DCF before you look at the peer table so one doesn&#x27;t anchor the other.</figcaption>
</figure>

### Step 1 — Own-history multiple range

Pick the multiple that fits the industry ([P/E](/investing/valuation/what-pe-means-canadian-diy/), [P/FCF](/investing/valuation/what-p-fcf-means-canadian-diy/), [EV/EBITDA](/investing/valuation/ev-ebitda-for-canadian-diy-investors/), [P/B for banks](/investing/valuation/valuing-canadian-banks-pb-roe/), [P/AFFO for REITs](/investing/valuation/valuing-reits-nav-ffo-affo/)). Note the low and high of the past 5–10 years, excluding obvious one-off spikes. Apply that range to **normalized** current earnings or cash flow.

### Step 2 — DCF range

Use the [five-input DCF](/investing/valuation/simple-dcf-without-fake-precision/). Take the value range from your sensitivity grid (for example, discount rate ±1 point and terminal growth ±1 point), not a single point estimate.

### Step 3 — Peer range

Use 3–6 genuinely comparable companies ([how to pick and align peers](/investing/analyze/compare-two-tsx-peers/); for US peers see [comparing a TSX stock with a US peer](/investing/valuation/compare-tsx-stock-to-us-peer/)). Apply the peer group's interquartile range of the multiple to your company's metric.

### Step 4 — Overlay

Plot the three ranges on one chart with the current price as a line. Look for the overlap, then explain any method that sits outside it.

## Worked example: a hypothetical TSX industrial

Assumptions (all hypothetical): normalized FCF per share $2.40; normalized EPS $3.00; current price $44.

| Method | Inputs | Value range per share |
|:--|:--|--:|
| Own-history P/E | 13×–18× on $3.00 EPS | $39–$54 |
| DCF | 8–10% discount, 1–3% terminal growth | $36–$58 |
| Peer P/FCF | Peer range 15×–20× on $2.40 FCF | $36–$48 |
| **Overlap** | | **$39–$48** |

<figure class="diagram">
<svg viewBox="0 0 720 256" role="img" aria-label="Hypothetical football-field chart of three valuation ranges against the current price" xmlns="http://www.w3.org/2000/svg"><line x1="200" y1="14" x2="200" y2="200" stroke="#e2e8f0"/><text x="200" y="220" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$30</text><line x1="270" y1="14" x2="270" y2="200" stroke="#e2e8f0"/><text x="270" y="220" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$35</text><line x1="340" y1="14" x2="340" y2="200" stroke="#e2e8f0"/><text x="340" y="220" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$40</text><line x1="410" y1="14" x2="410" y2="200" stroke="#e2e8f0"/><text x="410" y="220" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$45</text><line x1="480" y1="14" x2="480" y2="200" stroke="#e2e8f0"/><text x="480" y="220" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$50</text><line x1="550" y1="14" x2="550" y2="200" stroke="#e2e8f0"/><text x="550" y="220" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$55</text><line x1="620" y1="14" x2="620" y2="200" stroke="#e2e8f0"/><text x="620" y="220" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$60</text><line x1="690" y1="14" x2="690" y2="200" stroke="#e2e8f0"/><text x="690" y="220" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">$65</text><text x="188" y="46" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">History P/E</text><rect x="326" y="31" width="210" height="22" rx="5" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="320" y="46" font-size="11" font-weight="700" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">39</text><text x="542" y="46" font-size="11" font-weight="700" fill="#475569" text-anchor="start" font-family="system-ui, sans-serif">54</text><text x="188" y="90" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">DCF</text><rect x="284" y="75" width="308" height="22" rx="5" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="278" y="90" font-size="11" font-weight="700" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">36</text><text x="598" y="90" font-size="11" font-weight="700" fill="#475569" text-anchor="start" font-family="system-ui, sans-serif">58</text><text x="188" y="134" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer P/FCF</text><rect x="284" y="119" width="168" height="22" rx="5" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="278" y="134" font-size="11" font-weight="700" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">36</text><text x="458" y="134" font-size="11" font-weight="700" fill="#475569" text-anchor="start" font-family="system-ui, sans-serif">48</text><text x="188" y="178" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Overlap</text><rect x="326" y="163" width="126" height="22" rx="5" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="320" y="178" font-size="11" font-weight="700" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">39</text><text x="458" y="178" font-size="11" font-weight="700" fill="#475569" text-anchor="start" font-family="system-ui, sans-serif">48</text><line x1="396" y1="10" x2="396" y2="200" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 4"/><text x="396" y="238" font-size="11.5" font-weight="700" fill="#dc2626" text-anchor="middle" font-family="system-ui, sans-serif">Current price $44</text></svg>
<figcaption>Hypothetical stock. The three methods overlap between about $39 and $48; the current price of $44 sits inside the overlap, which reads as &quot;roughly fair&quot; rather than cheap or expensive.</figcaption>
</figure>

**Reading:** the price sits in the middle of the overlap. On these assumptions the stock looks roughly fairly valued. A compelling opportunity would usually show the price **below the low end of the overlap** — with a reason you can name for why the market is too pessimistic.

## When the methods disagree

Disagreement is information. Common patterns:

| Pattern | Likely explanation | What to check |
|:--|:--|:--|
| DCF far above history and peers | Growth or terminal assumptions too generous | Re-run DCF with peer-like growth; reverse-engineer implied growth |
| History far above peers | Business has de-rated (slower growth, higher rates, new risk) | What changed? Is the old multiple still justified? |
| Peers far above history and DCF | Sector-wide enthusiasm | Is the whole group expensive? See [when P/E misleads](/investing/valuation/when-pe-misleads-tsx/) |
| All three low vs price | Market expects something your inputs don't include | Read the latest [earnings call](/investing/analyze/how-to-read-earnings-call-transcript/) and MD&A for the catalyst |

## Weighting the methods

Don't average blindly. Weight by how well each method fits the business:

| Business type | Lean on | Use lightly |
|:--|:--|:--|
| Stable, cash-generative (utilities, pipelines, staples) | DCF, own-history | — |
| Cyclical (energy producers, miners, chemicals) | Mid-cycle peer multiples, NAV | Trailing P/E, own-history at peak |
| Banks and insurers | P/B vs ROE, own-history | DCF on "free cash flow" |
| Fast-changing (early software, turnarounds) | Scenario DCF | Own-history multiples |

## Decision rules you can write down

1. **Buy zone:** price below the low end of the overlap *and* a named reason the market is too pessimistic.
2. **Hold zone:** price inside the overlap; let business results, not price, drive decisions.
3. **Trim/review zone:** price above the high end of every method; re-check your [position size](/investing/process/position-sizing-diy-stock-pickers/).
4. **No-conclusion zone:** methods don't overlap — do more work or pass.

Write the zones into the valuation block of your [stock brief](/investing/analyze/stock-brief-template-bull-bear-watch/), with the date and inputs, so you can review them after each [quarterly report](/investing/analyze/how-to-read-quarterly-earnings-tsx/).

## Common mistakes

- Running the DCF *after* seeing the peer table, then tuning it to match.
- Averaging three ranges into one number and forgetting the spread.
- Using peak-cycle earnings in the history method.
- Picking "peers" that are just in the same sector.

## Soft CTA

A one-page football-field template is planned for the **Valuation Without Fake Precision** ebook. The free method above is complete.

## Media credits

- Hero: “Wild T2 Theodolite, July 1968.jpg” by Queensland State Archives, public domain, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Wild_T2_Theodolite,_July_1968.jpg). Cropped and resized to 1280×720. Real photograph, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
