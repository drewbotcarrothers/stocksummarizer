---
title: "Withholding Tax on US Dividends: TFSA vs RRSP vs Taxable"
description: "How the 15% US withholding tax on dividends works for Canadian DIY stock investors in a TFSA, RRSP and taxable account — W-8BEN, the treaty RRSP exemption, foreign tax credits, US-listed vs Canadian-listed ETFs and interlisted Canadian stocks. Educational, not tax advice."
category: "dividends"
role: "Hub"
pubDate: 2026-10-30
image: "/images/investing/us-dividend-withholding-tax-tfsa-rrsp-taxable.jpg"
imageAlt: "The columned facade of the New York Stock Exchange at Broad Street and Wall Street, with Federal Hall and crowds of pedestrians"
imageCredit: "New York Stock Exchange and Federal Hall at Broad and Wall Streets, New York, August 2017. Photo by Arild Vågen, CC BY-SA 4.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "mixed"
---

Canadian DIY investors who buy US dividend stocks — or ETFs that hold them — run into the same question sooner or later: why is the dividend that lands in my account smaller than the one the company declared? The answer is **US withholding tax**, and whether you get it back depends almost entirely on **which account** holds the stock and **how** you hold it.

Educational only — not tax or financial advice. Tax rules change and personal situations differ; confirm current rules with the CRA, your broker or a tax professional. Dollar examples are **hypothetical**.

## Direct answer

Under the Canada–US tax treaty, US dividends paid to a Canadian resident are generally withheld at **15%** (instead of the 30% default) once your broker has a **W-8BEN** form on file. What happens next depends on the account:

- **RRSP / RRIF:** US-listed stocks and US-listed ETFs are generally **exempt** — no withholding.
- **TFSA:** the 15% is withheld and **not recoverable**.
- **Taxable (non-registered):** the 15% is withheld, but you can usually claim a **foreign tax credit** on your Canadian return, so it's largely recovered.

Canadian-listed ETFs that hold US stocks have the 15% withheld inside the fund, which an RRSP **cannot** avoid.

## The account comparison

| Account | US withholding on a US-listed stock | Recoverable? | Net effect (hypothetical $1,000 US dividend) |
|:--|:--|:--|--:|
| RRSP / RRIF | Generally 0% (treaty retirement-plan exemption) | n/a | $1,000 received |
| TFSA | 15% | No | $850 received, $150 lost |
| RESP | 15% | No | $850 received, $150 lost |
| Taxable account | 15% | Usually yes, via foreign tax credit | $850 received; $150 credited against Canadian tax |

<figure class="diagram">
<svg viewBox="0 0 720 300" role="img" aria-label="Hypothetical US dividend kept after withholding tax by account, before Canadian tax" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0 $</text><line x1="70" y1="206" x2="710" y2="206" stroke="#e2e8f0"/><text x="62" y="210" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">250 $</text><line x1="70" y1="162" x2="710" y2="162" stroke="#e2e8f0"/><text x="62" y="166" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">500 $</text><line x1="70" y1="118" x2="710" y2="118" stroke="#e2e8f0"/><text x="62" y="122" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">750 $</text><line x1="70" y1="74" x2="710" y2="74" stroke="#e2e8f0"/><text x="62" y="78" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">1000 $</text><line x1="70" y1="30" x2="710" y2="30" stroke="#e2e8f0"/><text x="62" y="34" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">1250 $</text><rect x="103" y="74" width="91" height="176" rx="4" fill="#0d9488"/><text x="149" y="66" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">1000 $</text><text x="149" y="276" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">RRSP</text><rect x="261" y="100" width="91" height="150" rx="4" fill="#94a3b8"/><text x="306" y="92" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">850 $</text><text x="306" y="276" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">TFSA</text><rect x="418" y="100" width="91" height="150" rx="4" fill="#94a3b8"/><text x="464" y="92" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">850 $</text><text x="464" y="270" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Taxable before</text><text x="464" y="282" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">tax credit</text><rect x="576" y="74" width="91" height="176" rx="4" fill="#0d9488"/><text x="621" y="66" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">1000 $</text><text x="621" y="270" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Taxable after</text><text x="621" y="282" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">credit (approx.)</text></svg>
<figcaption>Hypothetical $1,000 US dividend. In a taxable account the $150 withheld is usually credited back against Canadian tax owing, but the whole dividend is still taxed at your full marginal rate as foreign income.</figcaption>
</figure>

*In a taxable account, the 15% isn't lost, but US dividends are taxed as ordinary foreign income at your full marginal rate — they don't get the Canadian [dividend tax credit](/investing/dividends/eligible-vs-ordinary-dividends/). So "recovered" means the withholding is credited, not that US dividends are tax-efficient there.*

## How you hold it matters as much as where

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Three ways to own US dividend stocks and where withholding applies" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="158" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="89" y="30" font-size="12.2" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">US stock</text><text x="89" y="46" font-size="12.2" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">held directly</text><text x="89" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Withholding at</text><text x="89" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">your account</text><line x1="170" y1="60" x2="188" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="190" y="14" width="158" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="270" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">US-listed ETF</text><text x="270" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Withholding at</text><text x="270" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">your account</text><line x1="351" y1="60" x2="368" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="371" y="14" width="158" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="450" y="30" font-size="10.5" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Canadian-listed ETF</text><text x="450" y="46" font-size="10.5" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">holding US stocks</text><text x="450" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">15% withheld</text><text x="450" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">inside the fund</text><line x1="532" y1="60" x2="548" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="552" y="14" width="158" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="631" y="30" font-size="10.5" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Interlisted</text><text x="631" y="46" font-size="10.5" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Canadian stock</text><text x="631" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Canadian dividend,</text><text x="631" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">no US withholding</text></svg>
<figcaption>Simplified. The RRSP exemption only reaches US-listed securities held directly in the plan; it can&#x27;t remove withholding that happens inside a Canadian-listed fund.</figcaption>
</figure>

| Structure | RRSP | TFSA | Taxable |
|:--|:--|:--|:--|
| US-listed stock (e.g. bought on NYSE/Nasdaq) | Generally exempt | 15% lost | 15% withheld; foreign tax credit usually available |
| US-listed ETF of US stocks | Generally exempt | 15% lost | 15% withheld; credit usually available |
| Canadian-listed ETF holding US stocks (directly or via a US ETF) | 15% lost inside the fund | 15% lost inside the fund | Withheld in fund; foreign tax paid usually reported on your T3 and creditable |
| Canadian company listed on both TSX and NYSE | No US withholding — it's a Canadian dividend | No US withholding | Canadian dividend; may be eligible for the dividend tax credit |

That last row surprises people: buying a Canadian bank or pipeline on the NYSE in US dollars doesn't make its dividend a US dividend.

## What 15% costs over time (hypothetical)

| Assumption | Value |
|:--|--:|
| Portfolio | $50,000 in US dividend stocks |
| Dividend yield | 2.5% |
| Annual dividends | $1,250 |
| Lost to withholding in a TFSA (15%) | ≈ $188 a year |
| Drag on total return | ≈ 0.375 percentage points a year |

The drag scales with yield: it matters a lot for a high-yield US portfolio and very little for low-yield growth stocks whose returns come mainly from price. That's why many investors treat the TFSA as reasonable for low-yield US growth names and the RRSP as the better home for higher-yield US payers — but account location is a whole-portfolio decision, not a per-stock rule. See [TFSA for stock investors](/investing/accounts/tfsa-for-stock-investors/).

## Practical checklist

1. **Confirm a W-8BEN is on file** with your broker for every account type that holds US securities. Without it you may see 30% withheld.
2. **Check the first dividend** in each account: RRSP should normally show no US withholding; TFSA and taxable should show 15%.
3. **Keep your T5/T3 and broker tax slips** — the foreign tax paid line is what supports a foreign tax credit in a taxable account.
4. **Mind the FX cost.** Buying US stocks means converting CAD to USD. Spreads can cost more than withholding in the first year; our [broker comparison](/investing/brokers-tools/compare-canadian-discount-brokers/) covers FX options.
5. **Don't let tax drive the pick.** A good business in the "wrong" account still beats a weak one in the right account. Valuation first — see [comparing a TSX stock with its US peer](/investing/valuation/compare-tsx-stock-to-us-peer/).

## Common mistakes

- Assuming the TFSA is tax-free for US dividends (it isn't, for the withholding).
- Holding a Canadian-listed US-equity ETF in an RRSP to "avoid" withholding.
- Forgetting the W-8BEN after opening a new account.
- Judging a US stock by gross yield in a TFSA — see [why yield alone is a terrible screen](/investing/dividends/why-yield-alone-is-a-terrible-screen/).

## Soft CTA

An account-location worksheet for Canadian and US dividend stocks is planned for the **Dividend Safety** ebook. This guide covers the essentials for free.

## Media credits

- Hero: “New York Stock Exchange August 2017 02.jpg” by Arild Vågen, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:New_York_Stock_Exchange_August_2017_02.jpg). Cropped and resized to 1280×720. Real photograph, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
