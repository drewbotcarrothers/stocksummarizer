---
title: "Ex-Dividend Date Mechanics for TSX Stocks"
description: "How the TSX ex-dividend date works under T+1: chart price gaps, adjusted vs unadjusted data, DRIP cutoffs, option adjustments and due bills. Educational."
category: "dividends"
role: "Spoke"
pubDate: 2026-11-22
image: "/images/investing/ex-dividend-date-mechanics-tsx.jpg"
imageAlt: "Stone facade of the former Toronto Stock Exchange building on Bay Street with its carved name above the windows"
imageCredit: "Former Toronto Stock Exchange building photograph by Wladyslaw, CC BY-SA 3.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

The ex-dividend date is the day a stock starts trading without the right to its next dividend. That single date drives several mechanical effects investors run into: a gap on the price chart, DRIP enrolment deadlines, option contract adjustments and, for very large payments, a different set of TSX rules. This post focuses on those mechanics for TSX-listed stocks.

It's educational and not trading advice. For why buying just before the ex-date to "capture" a dividend rarely works, and the full declaration-to-payment timeline, see [dividend capture strategies](/investing/dividends/dividend-capture-strategies-why-skip/); this post doesn't repeat that case.

## Direct answer

Since Canada moved to **T+1 settlement in May 2024**, the TSX ex-dividend date for a regular cash dividend is normally the **same business day as the record date**. Buy on or after the ex-date and the seller gets the dividend. On the ex-date the market typically prices the stock lower by roughly the dividend, which shows up as a **step down on unadjusted charts**. Data providers often show **dividend-adjusted** prices that hide that step. DRIPs have their own **enrolment cutoffs** before the record date. Regular dividends usually don't change listed option terms, but **special dividends can trigger option adjustments**, and very large distributions can follow **due bill** trading rules where the ex-date is deferred.

## The sequence

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Ex-dividend sequence on the TSX from declaration to payment" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10.0" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Declared</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">board sets</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">amount, dates</text><line x1="134.4" y1="60" x2="149.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah2)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Ex-date</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">= record date</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">under T+1</text><line x1="278.8" y1="60" x2="293.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah2)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Price</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">market prices</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">out dividend</text><line x1="423.2" y1="60" x2="438.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah2)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">DRIP cutoff</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">enrol before</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">record date</text><line x1="567.6" y1="60" x2="582.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah2)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Paid</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">cash or shares</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">weeks later</text></svg>
<figcaption>Under T+1, the ex-dividend date and record date fall on the same business day; DRIP enrolment and payment follow their own deadlines.</figcaption>
</figure>

| Date | What happens | Why it matters |
|:--|:--|:--|
| Declaration | Board announces amount, record date and payment date | Starts the clock; check whether it's a regular or special dividend |
| Ex-dividend date | First trading day without the dividend; same day as record date under T+1 | You must own the shares before this day |
| Record date | Company's transfer agent identifies shareholders entitled to the payment | DRIP elections usually need to be in place before this |
| Payment date | Cash (or DRIP shares) delivered | Often two to four weeks after the record date |

## What happens to the price on charts

The exchange doesn't mechanically cut a stock's price for a regular dividend; buyers and sellers simply value the shares without the upcoming payment. On a chart of actual closing prices, that looks like a gap down of roughly the dividend amount, which can be mistaken for bad news.

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical unadjusted and dividend-adjusted closing prices around an ex-dividend date with a 50 cent dividend" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="690" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$49.00</text><line x1="70" y1="176.667" x2="690" y2="176.667" stroke="#e2e8f0"/><text x="62" y="180.667" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$49.50</text><line x1="70" y1="103.333" x2="690" y2="103.333" stroke="#e2e8f0"/><text x="62" y="107.333" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$50.00</text><line x1="70" y1="30" x2="690" y2="30" stroke="#e2e8f0"/><text x="62" y="34" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">$50.50</text><text x="70" y="272" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">D-3</text><text x="173.333" y="272" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">D-2</text><text x="276.667" y="272" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">D-1</text><text x="380" y="272" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Ex</text><text x="483.333" y="272" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">D+1</text><text x="586.667" y="272" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">D+2</text><text x="690" y="272" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">D+3</text><polyline points="70.0,74.0 173.3,103.3 276.7,88.7 380.0,162.0 483.3,147.3 586.7,176.7 690.0,132.7" fill="none" stroke="#0d9488" stroke-width="3"/><circle cx="70.0" cy="74.0" r="3.5" fill="#0d9488"/><circle cx="173.3" cy="103.3" r="3.5" fill="#0d9488"/><circle cx="276.7" cy="88.7" r="3.5" fill="#0d9488"/><circle cx="380.0" cy="162.0" r="3.5" fill="#0d9488"/><circle cx="483.3" cy="147.3" r="3.5" fill="#0d9488"/><circle cx="586.7" cy="176.7" r="3.5" fill="#0d9488"/><circle cx="690.0" cy="132.7" r="3.5" fill="#0d9488"/><text x="690" y="123.667" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$49.80</text><polyline points="70.0,147.3 173.3,176.7 276.7,162.0 380.0,162.0 483.3,147.3 586.7,176.7 690.0,132.7" fill="none" stroke="#f59e0b" stroke-width="3"/><circle cx="70.0" cy="147.3" r="3.5" fill="#f59e0b"/><circle cx="173.3" cy="176.7" r="3.5" fill="#f59e0b"/><circle cx="276.7" cy="162.0" r="3.5" fill="#f59e0b"/><circle cx="380.0" cy="162.0" r="3.5" fill="#f59e0b"/><circle cx="483.3" cy="147.3" r="3.5" fill="#f59e0b"/><circle cx="586.7" cy="176.7" r="3.5" fill="#f59e0b"/><circle cx="690.0" cy="132.7" r="3.5" fill="#f59e0b"/><text x="690" y="123.667" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">$49.80</text><rect x="80" y="292" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="303" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Unadjusted close</text><rect x="225.2" y="292" width="14" height="14" rx="3" fill="#f59e0b"/><text x="245.2" y="303" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Dividend-adjusted close</text></svg>
<figcaption>Hypothetical: a C$0.50 dividend. The unadjusted series shows a step down on the ex-date; adjusted series shift earlier prices down so the gap disappears.</figcaption>
</figure>

| Chart type | How the ex-date looks | Best used for |
|:--|:--|:--|
| Unadjusted close | Step down of roughly the dividend | Checking what price actually traded |
| Split-adjusted only | Same step down; splits smoothed | Long-run price history |
| Dividend-adjusted (total-return style) | Earlier prices shifted down; no step | Comparing total returns between stocks |

If two websites show different historical prices for the same day, one is usually dividend-adjusted. Check which series a screener or chart uses before calculating returns or drawdowns.

## DRIP cutoffs

Dividend reinvestment plans (DRIPs) don't run on the ex-date. Company-run plans (through a transfer agent) and broker "synthetic" DRIPs typically require you to be enrolled **before the record date**, and brokers can set their own earlier internal cutoffs. Enrol after the cutoff and that payment arrives as cash, with reinvestment starting the next cycle. Mechanics differ between registered and taxable accounts; see [DRIP strategies inside registered accounts](/investing/dividends/drip-strategies-registered-accounts/) and [DRIP strategies in taxable accounts](/investing/dividends/drip-strategies-taxable-accounts-acb/).

| DRIP type | Who runs it | Typical cutoff | Fractional shares |
|:--|:--|:--|:--|
| Company (treasury or market) DRIP | Transfer agent on the company's behalf | Before the record date; check the plan document | Often yes, inside the plan |
| Broker synthetic DRIP | Your broker | Broker-set, often several business days before record | Usually whole shares only |

## Options and special dividends

Listed equity options in Canada aren't normally adjusted for ordinary, regular dividends; option prices already reflect expected dividends. Special or extraordinary dividends can be different: the Canadian Derivatives Clearing Corporation (CDCC) may adjust contract terms, which is published in a notice before the ex-date. If you hold options on a stock that announces a special dividend, read the notice rather than assuming.

| Event | Typical option effect |
|:--|:--|
| Regular quarterly dividend | No contract adjustment; priced into premiums |
| Special cash dividend | May be adjusted; check the CDCC notice |
| Stock dividend or split | Contract terms adjusted (deliverable and strike) |

## Very large distributions: due bills

When a distribution is very large relative to the share price (TSX rules use a threshold of 25% of the security's value), the exchange can use **due bill** trading. The ex-date is then set after the payment date, and shares bought in between trade with a "due bill" attached that entitles the buyer to the distribution. These cases are rare but common in special dividends after asset sales; see [special dividends](/investing/dividends/special-dividends-how-to-treat-in-analysis/).

## Checklist before acting around an ex-date

| Question | Where to check |
|:--|:--|
| Is this a regular or special dividend? | Company news release |
| What are the ex-date, record date and payment date? | News release; TSX daily dividend notices |
| Is my chart dividend-adjusted? | Data provider's methodology note |
| Is my DRIP enrolment in before the cutoff? | Plan document or broker |
| Do I hold options that could be adjusted? | CDCC notices |

## Go deeper

For the history behind a dividend, read [how to read a dividend history chart beyond the streak](/investing/dividends/read-dividend-history-chart-beyond-streak/). For how dividends fit into a broader approach, start with [how dividend investing works for Canadian DIY investors](/investing/dividends/how-dividend-investing-works-canadian-diy/).

## Related reading

- [Monthly vs quarterly dividends: behaviour vs fundamentals](/investing/dividends/monthly-vs-quarterly-dividends/)
- [How stock splits and consolidations affect dividend per share](/investing/dividends/stock-splits-consolidations-dividend-per-share/)
- [Eligible vs ordinary dividends](/investing/dividends/eligible-vs-ordinary-dividends/)

## Sources

- Canadian Securities Administrators and TMX Group notices on the May 2024 move to T+1 settlement.
- TSX Company Manual provisions on dividend record dates and due bill trading.
- Canadian Derivatives Clearing Corporation notices on option contract adjustments.

## Media credits

- Hero: "Toronto - ON - Toronto Stock Exchange.jpg" by Wladyslaw, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Toronto_-_ON_-_Toronto_Stock_Exchange.jpg). Cropped and resized to 1280x720. Real photograph of the former Toronto Stock Exchange building, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
