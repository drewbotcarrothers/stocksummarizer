---
title: "How to Calculate Dividend Yield in CAD from Filings"
description: "A dividend yield worksheet for TSX stocks: finding the declared dividend, regular vs special, indicated vs trailing, key dates, and converting US-dollar dividends. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-14
image: "/images/investing/calculate-dividend-yield-in-cad-from-filings.jpg"
imageAlt: "A display at the Hockey Hall of Fame in Toronto showing the Lucky Loonie coin set into a piece of centre ice"
imageCredit: "Lucky Loonie display at the Hockey Hall of Fame photograph by Evan Delshaw, CC BY 2.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Dividend yield looks like the simplest ratio in investing: dividend over price. In practice the numerator has several versions (regular, special, trailing, indicated), the dividend and the price are sometimes in different currencies, and stock splits and DRIPs change per-share figures. This post is the worksheet for getting it right from primary sources.

What the number means as a valuation measure is in [what dividend yield means for Canadian DIY investors](/investing/valuation/what-dividend-yield-means-canadian-diy/). Whether the dividend is affordable is a separate question, covered in [payout ratio explained for Canadian companies](/investing/dividends/payout-ratio-explained-canadian-companies/) and [FCF coverage of dividends](/investing/dividends/fcf-coverage-of-dividends/). It is educational; all figures are hypothetical.

## Direct answer

1. Find the **latest regular dividend declared**, from the company's dividend news release (or the MD&A and financial statement notes).
2. **Separate** special or one-time dividends; show them on their own line.
3. **Annualize**: latest regular payment × payments per year (4 quarterly, 12 monthly) for an **indicated** yield; or add the last twelve months of regular payments for a **trailing** yield.
4. Put the dividend and the price **in the same currency**. If the dividend is declared in US dollars and you use the TSX price, convert the dividend at a current exchange rate.
5. Divide by the current share price.

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Five-step flow for calculating indicated dividend yield" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Declared</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Latest regular</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">dividend notice</text><line x1="134.4" y1="60" x2="149.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Regular only</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Specials shown</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">separately</text><line x1="278.8" y1="60" x2="293.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Annualize</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">× payments</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">per year</text><line x1="423.2" y1="60" x2="438.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Same currency</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Dividend and</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">price match</text><line x1="567.6" y1="60" x2="582.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Yield</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Annual dividend</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">÷ price</text></svg>
<figcaption>Five steps from a dividend notice to an indicated yield. The currency step is the one most often skipped.</figcaption>
</figure>

## Where to find the dividend

| Source | What it gives you | Notes |
|:--|:--|:--|
| Dividend declaration news release | Amount, currency, record and payment dates, eligible-dividend designation | Usually issued with quarterly results; also on SEDAR+ |
| MD&A | Dividends declared and paid in the period, policy statements | Look for payout policy language |
| Financial statement notes (equity) | Dividends declared per share for the period | Restated for splits |
| Subsequent events note | Dividends declared after the period end | Not yet a liability at the balance-sheet date |
| Annual information form | Dividend history and policy, usually three years | Good for checking cuts and raises |

Search filings on SEDAR+ as described in [how to use SEDAR+ for stock research](/investing/analyze/use-sedar-plus-for-stock-research/).

## The key dates

| Date | What happens |
|:--|:--|
| Declaration date | The board announces the amount and dates |
| Ex-dividend date | Buy on or after this date and you do not get this payment |
| Record date | Shareholders on the register this day are paid |
| Payment date | Cash arrives |

Since Canadian and US markets moved to T+1 settlement in May 2024, the ex-dividend date is generally the same business day as the record date. For yield, the date that matters is declaration: the indicated yield should reflect the most recent declared rate, including a raise announced yesterday.

## Worked example: a US-dollar dividend on a TSX share price

Several TSX-listed companies declare dividends in US dollars. Dividing a US-dollar dividend by a Canadian-dollar price is the most common yield error. Hypothetical figures, with a hypothetical rate of 1.38 CAD per USD:

| Item | Value |
|:--|--:|
| Quarterly dividend declared | US$0.40 |
| Indicated annual dividend | US$1.60 |
| TSX share price | C$62.00 |
| Exchange rate | 1.38 |
| Annual dividend in C$ (US$1.60 × 1.38) | C$2.208 |
| **Indicated yield (C$2.208 ÷ C$62.00)** | **3.56%** |
| Wrong: US$1.60 ÷ C$62.00 | 2.58% |
| Check: US$1.60 ÷ US-listed price (C$62.00 ÷ 1.38 = US$44.93) | 3.56% |

<figure class="diagram">
<svg viewBox="0 0 720 152" role="img" aria-label="Hypothetical: dividing a US-dollar dividend by a Canadian-dollar price understates the yield" xmlns="http://www.w3.org/2000/svg"><text x="240" y="47" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">USD dividend ÷ CAD price</text><rect x="250" y="30" width="252.136" height="24" rx="4" fill="#dc2626"/><text x="510.136" y="47" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">2.58%</text><text x="240" y="81" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">CAD dividend ÷ CAD price</text><rect x="250" y="64" width="347.909" height="24" rx="4" fill="#0d9488"/><text x="605.909" y="81" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">3.56%</text><text x="240" y="115" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">USD dividend ÷ USD price</text><rect x="250" y="98" width="347.909" height="24" rx="4" fill="#0d9488"/><text x="605.909" y="115" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">3.56%</text></svg>
<figcaption>Hypothetical: dividing the US-dollar dividend by the Canadian-dollar price understates the yield by about a quarter. Either convert the dividend or use the price in the same currency.</figcaption>
</figure>

The reverse error happens with Canadian companies whose shares are also listed in New York: a Canadian-dollar dividend divided by a US-dollar price overstates the yield. The currency mechanics are in [how to handle currency when analyzing CAD vs USD results](/investing/analyze/handle-currency-cad-vs-usd-results/).

## Specials, variable dividends and splits

| Situation (hypothetical) | Trailing incl. special | Regular only | Use |
|:--|--:|--:|:--|
| $2.00 regular + $1.00 special, price $50 | 6.0% | 4.0% | 4.0% for valuation; note the special |
| Base dividend plus a variable dividend tied to free cash flow | Varies | Base only | Base yield, with the variable shown as a range |
| 2-for-1 split last year | Old per-share history overstates | Restated | Use restated per-share figures (IAS 33) |
| Stock dividend instead of cash | Counts as dividend | Note dilution | Treat as cash only if you would sell the shares |

## Trailing vs indicated: when to use which

| Use | Why |
|:--|:--|
| **Indicated** for current valuation | Reflects the latest declared rate |
| **Trailing** for history and comparisons with old data | What was actually paid |
| **Forward** only with a stated policy | E.g. a company that announces annual raises on a schedule |

After a cut, the trailing yield will overstate the real yield for up to a year. After a raise, it will understate it. Always check the latest declaration.

## Go deeper

The traps of reading yield as a valuation signal, from price-driven spikes to return-of-capital distributions, are in [when dividend yield misleads on TSX stocks](/investing/valuation/when-dividend-yield-misleads-tsx/). For the account and tax side, see [US dividend withholding tax by account](/investing/dividends/us-dividend-withholding-tax-tfsa-rrsp-taxable/).

## Related reading

- [Why yield alone is a terrible screen](/investing/dividends/why-yield-alone-is-a-terrible-screen/)
- [Eligible vs ordinary dividends](/investing/dividends/eligible-vs-ordinary-dividends/)
- [REIT distributions vs corporate dividends](/investing/dividends/reit-distributions-vs-corporate-dividends/)
- [How to research dual-listed Canadian stocks](/investing/analyze/research-dual-listed-canadian-stocks/)

## Sources

- IAS 10 *Events after the Reporting Period* (dividends declared after period end); IAS 33 *Earnings per Share* (restatement for splits).
- TSX Company Manual, dividend notice requirements; SEDAR+.
- Canadian Securities Administrators, transition to T+1 settlement (2024); Bank of Canada exchange rates.

## Media credits

- Hero: "Lucky Loonie (20111391984).jpg" by Evan Delshaw, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Lucky_Loonie_(20111391984).jpg). Cropped and resized to 1280x720. Real photograph of the Lucky Loonie display at the Hockey Hall of Fame in Toronto, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
