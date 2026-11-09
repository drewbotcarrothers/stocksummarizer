---
title: "US Withholding Tax Inside Canadian-Listed vs US-Listed ETFs"
description: "How US and foreign withholding tax works inside Canadian-listed vs US-listed ETFs: Level I and Level II layers, wrap vs direct-holding structures, which accounts can recover each layer, how to identify a fund's structure, and when the less efficient option still wins. Educational, not tax advice."
category: "indexes-etfs"
role: "Spoke"
pubDate: 2026-11-02
image: "/images/investing/us-withholding-tax-canadian-vs-us-listed-etfs.jpg"
imageAlt: "A set of painted wooden nesting dolls in decreasing sizes standing in a row on a white background"
imageCredit: "Matryoshka nesting dolls from Hungary, February 2021. Photo by Wilfredor, CC0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "mixed"
---

The basic rule — US dividends lose 15% in a TFSA, are exempt in an RRSP, and are creditable in a taxable account — is covered in [withholding tax on US dividends: TFSA vs RRSP vs taxable](/investing/dividends/us-dividend-withholding-tax-tfsa-rrsp-taxable/). Funds add a twist that stock pickers running a core-satellite portfolio need to understand: withholding can happen **inside** the fund, sometimes in **two layers**, and where it happens decides whether any account can recover it.

Educational only — not tax advice. Fund structures change; always check the current factsheet and holdings. All yields and rates in the charts are **hypothetical**. No specific fund is recommended.

## Direct answer

For **US equity**: a US-listed ETF held directly in an RRSP avoids the 15% US withholding; a Canadian-listed ETF of US stocks loses that 15% inside the fund in both RRSP and TFSA, whether it holds the stocks directly or wraps a US-listed ETF. In a taxable account, the 15% is usually recoverable either way. For **international equity**, there's an extra layer: the foreign company's home country withholds first (Level I), and if a US-listed fund is in the chain, the US withholds again (Level II). Level I generally can't be recovered in registered accounts; it can be in taxable only when a Canadian-listed fund holds the foreign stocks **directly**. The drag is usually a fraction of a percent a year — real, but often smaller than FX conversion costs and simplicity trade-offs.

## Two layers, explained

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="How two layers of foreign withholding tax stack for international stocks held through a US-listed ETF" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="12.9" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Foreign company</text><text x="71.2" y="69" font-size="9.9" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Pays a dividend</text><text x="71.2" y="83" font-size="9.9" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">(e.g., Europe, Japan)</text><line x1="134.4" y1="60" x2="151.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Level I</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Home-country tax</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">withheld</text><line x1="278.8" y1="60" x2="295.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">US-listed ETF</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Receives the</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">net dividend</text><line x1="423.2" y1="60" x2="440.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Level II</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">15% US tax</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">withheld</text><line x1="567.6" y1="60" x2="584.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="10.8" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Canadian ETF / you</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Receives what&#x27;s</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">left</text></svg>
<figcaption>Layer names follow the PWL Capital framework. US stocks only face one layer (US withholding); international stocks held through a US-listed fund can face two.</figcaption>
</figure>

| Layer | Who withholds | Rate | Recoverable? |
|:--|:--|:--|:--|
| Level I | The foreign company's home country (e.g., a European or Japanese issuer) | Varies by country and treaty | Only in a taxable account, and only if a **Canadian**-listed fund holds the stocks directly (passed through on the T3) |
| Level II | The US, when a US-listed fund pays a Canadian holder | 15% under the treaty | Exempt if a US-listed fund is held directly in an RRSP; recoverable in taxable; lost in TFSA and inside Canadian funds held in registered accounts |

## US equity: where the 15% lands

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical unrecoverable withholding drag for a US equity fund by structure and account" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0.0%</text><line x1="70" y1="180" x2="710" y2="180" stroke="#e2e8f0"/><text x="62" y="184" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0.1%</text><line x1="70" y1="110" x2="710" y2="110" stroke="#e2e8f0"/><text x="62" y="114" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0.2%</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0.3%</text><rect x="84" y="250" width="60" height="0" rx="3" fill="#0d9488"/><text x="113.667" y="244" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">0</text><rect x="147" y="92" width="60" height="158" rx="3" fill="#94a3b8"/><text x="176.667" y="86.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">0.225%</text><rect x="210" y="250" width="60" height="0" rx="3" fill="#f59e0b"/><text x="239.667" y="244" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">0</text><text x="176.667" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">US-listed ETF</text><rect x="297" y="92" width="60" height="158" rx="3" fill="#0d9488"/><text x="327" y="86.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">0.225%</text><rect x="360" y="92" width="60" height="158" rx="3" fill="#94a3b8"/><text x="390" y="86.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">0.225%</text><rect x="423" y="250" width="60" height="0" rx="3" fill="#f59e0b"/><text x="453" y="244" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">0</text><text x="390" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Cdn ETF, holds stocks</text><rect x="510" y="92" width="60" height="158" rx="3" fill="#0d9488"/><text x="540.333" y="86.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">0.225%</text><rect x="573" y="92" width="60" height="158" rx="3" fill="#94a3b8"/><text x="603.333" y="86.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">0.225%</text><rect x="636" y="250" width="60" height="0" rx="3" fill="#f59e0b"/><text x="666.333" y="244" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">0</text><text x="603.333" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Cdn ETF, wraps US ETF</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">RRSP</text><rect x="148" y="10" width="14" height="14" rx="3" fill="#94a3b8"/><text x="168" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">TFSA</text><rect x="216" y="10" width="14" height="14" rx="3" fill="#f59e0b"/><text x="236" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Taxable</text></svg>
<figcaption>Hypothetical US equity fund with a 1.5% yield: one 15% layer = 0.225% a year. Taxable shows zero because the withholding is usually recoverable as a foreign tax credit (directly, or via the fund&#x27;s T3).</figcaption>
</figure>

| Structure | RRSP | TFSA | Taxable |
|:--|:--|:--|:--|
| US-listed ETF of US stocks | Exempt (treaty Art. XXI) | 15% lost | 15% withheld, foreign tax credit |
| Canadian-listed ETF holding US stocks directly | 15% lost inside the fund | 15% lost | Withheld in fund; passed through on T3, creditable |
| Canadian-listed ETF that wraps a US-listed ETF | 15% lost | 15% lost | Same as above — creditable |

In a **TFSA**, structure doesn't matter for US equity: the 15% is lost either way, so Canadian-listed funds are usually simpler (no FX conversion). The structure choice matters mostly in the **RRSP**.

## International equity: up to two layers

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical unrecoverable withholding drag for an international equity fund by structure and account" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0.0%</text><line x1="70" y1="198" x2="710" y2="198" stroke="#e2e8f0"/><text x="62" y="201.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0.2%</text><line x1="70" y1="145" x2="710" y2="145" stroke="#e2e8f0"/><text x="62" y="149" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0.4%</text><line x1="70" y1="92" x2="710" y2="92" stroke="#e2e8f0"/><text x="62" y="96.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0.6%</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0.8%</text><rect x="84" y="187" width="60" height="63" rx="3" fill="#0d9488"/><text x="113.667" y="181" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">0.24%</text><rect x="147" y="78" width="60" height="172" rx="3" fill="#94a3b8"/><text x="176.667" y="72.325" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">0.65%</text><rect x="210" y="187" width="60" height="63" rx="3" fill="#f59e0b"/><text x="239.667" y="181" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">0.24%</text><text x="176.667" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">US-listed intl ETF</text><rect x="297" y="187" width="60" height="63" rx="3" fill="#0d9488"/><text x="327" y="181" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">0.24%</text><rect x="360" y="187" width="60" height="63" rx="3" fill="#94a3b8"/><text x="390" y="181" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">0.24%</text><rect x="423" y="250" width="60" height="0" rx="3" fill="#f59e0b"/><text x="453" y="244" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">0</text><text x="390" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Cdn ETF, holds stocks</text><rect x="510" y="78" width="60" height="172" rx="3" fill="#0d9488"/><text x="540.333" y="72.325" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">0.65%</text><rect x="573" y="78" width="60" height="172" rx="3" fill="#94a3b8"/><text x="603.333" y="72.325" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">0.65%</text><rect x="636" y="187" width="60" height="63" rx="3" fill="#f59e0b"/><text x="666.333" y="181" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">0.24%</text><text x="603.333" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Cdn ETF, wraps US ETF</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">RRSP</text><rect x="148" y="10" width="14" height="14" rx="3" fill="#94a3b8"/><text x="168" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">TFSA</text><rect x="216" y="10" width="14" height="14" rx="3" fill="#f59e0b"/><text x="236" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Taxable</text></svg>
<figcaption>Hypothetical international fund with a 3% yield and an assumed 8% average Level I rate (real rates vary by country and treaty): Level I ≈ 0.24%, Level II ≈ 0.41%, both ≈ 0.65% a year.</figcaption>
</figure>

| Structure | RRSP | TFSA | Taxable |
|:--|:--|:--|:--|
| US-listed international ETF | Level I lost; Level II exempt | Both lost | Level I lost; Level II creditable |
| Canadian-listed ETF holding international stocks directly | Level I lost | Level I lost | Level I passed through, creditable |
| Canadian-listed ETF wrapping a US-listed international ETF | Both lost | Both lost | Level I lost; Level II creditable |

The pattern for international funds: a Canadian-listed fund that holds foreign stocks **directly** is usually the most tax-efficient choice in a TFSA and in a taxable account; in an RRSP, a US-listed international fund and a direct-holding Canadian fund both lose only one layer.

## How to tell which structure a fund uses

| Check | Where | What it tells you |
|:--|:--|:--|
| Top holdings | Fund website, holdings file | One or a few US ETF tickers = wrap structure; hundreds of companies = direct |
| Fund description | Factsheet or ETF Facts | Phrases like "invests in units of" another ETF |
| Annual tax breakdown | Fund's T3 / distribution tax information | Foreign tax paid shows up for direct-holding funds |
| Distribution yield | Factsheet | Higher yield = bigger withholding drag |

Background on reading these documents: [how to read an ETF factsheet before you buy](/investing/indexes-etfs/how-to-read-etf-factsheet/) and [MER, TER and tracking difference](/investing/indexes-etfs/mer-ter-tracking-difference/). Withholding drag is part of the fund's tracking difference — it won't appear in the MER.

## When the "less efficient" structure still wins

| Situation | Why a Canadian-listed fund can still make sense |
|:--|:--|
| Small RRSP | Converting CAD to USD to buy US-listed funds can cost more than years of withholding savings; see [commission-free trading: FX and spreads](/investing/brokers-tools/commission-free-trading-fx-spreads/) |
| TFSA | For US equity, the 15% is lost either way |
| Simplicity and rebalancing | One currency, fewer moving parts |
| US estate-tax concerns | Canadian-listed funds are not US-situs assets |
| Taxable account | Withholding is usually recoverable regardless |

## Common mistakes

| Mistake | Why it hurts | Fix |
|:--|:--|:--|
| Assuming the RRSP exemption covers Canadian-listed US funds | Withholding happens inside the fund | Hold US-listed funds or US stocks directly if exemption matters |
| Ignoring Level I on international funds | Can be the larger layer | Prefer direct-holding Canadian funds in TFSA and taxable |
| Chasing a few basis points with expensive FX | Costs exceed the saving | Use Norbert's gambit or USD cash, or accept the drag |
| Comparing funds on MER alone | Withholding drag is extra | Compare tracking difference and structure |

## Go deeper

A one-page fund-structure-by-account chart is planned for the **DIY Process** ebook. If you're placing US *stocks* rather than funds, see [account location for US dividend stocks](/investing/accounts/account-location-us-dividend-stocks/).

## Related reading

- [Withholding tax on US dividends: TFSA vs RRSP vs taxable](/investing/dividends/us-dividend-withholding-tax-tfsa-rrsp-taxable/)
- [Account location for US dividend stocks](/investing/accounts/account-location-us-dividend-stocks/)
- [Canadian equity ETFs vs owning individual TSX stocks](/investing/indexes-etfs/canadian-equity-etfs-vs-individual-stocks/)
- [Core-satellite portfolio design for Canadian accounts](/investing/accounts/core-satellite-canadian-accounts/)

## Sources

- Convention Between Canada and the United States of America With Respect to Taxes on Income and on Capital, Article X (15% portfolio dividend rate) and Article XXI (retirement trusts such as RRSPs).
- Bender, J. and Bortolotti, D., *Foreign Withholding Taxes: How to estimate the hidden tax drag on US and international equity index funds and ETFs*, PWL Capital (Level I / Level II framework).
- Canada Revenue Agency, federal foreign tax credit (Form T2209) and T3 reporting of foreign tax paid.

## Media credits

- Hero: “Matryoshka from Hungary.jpg” by Wilfredor, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Matryoshka_from_Hungary.jpg). Cropped and resized to 1280×720. Real photograph, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
