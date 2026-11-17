---
title: "How to Calculate Tangible Book in CAD from Filings"
description: "A tangible book worksheet for TSX lenders: total equity less NCI, preferred shares, LRCNs, goodwill and intangibles, period-end shares, P/TBV and ROTCE. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-17
image: "/images/investing/calculate-tangible-book-in-cad-from-filings.jpg"
imageAlt: "The marble banking hall of the Bank of Montreal's main Montreal branch, with columns, a coffered ceiling and teller counters"
imageCredit: "Bank of Montreal main branch interior photograph by Canmenwalker, CC BY 4.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Tangible book value per share looks like a single line in a bank's investor deck, but you can build it yourself from the balance sheet and two notes. Doing so is worth the ten minutes: it shows which claims sit ahead of common shareholders, how much of equity is acquisition premium, and whether the company's own "tangible" figure deducts the same things as its peers'.

This worksheet walks through a hypothetical TSX-listed lender in Canadian dollars. The concept is in [what tangible book means](/investing/valuation/what-tangible-book-means-canadian-diy/); the ordinary P/B worksheet is in [how to calculate P/B in CAD from filings](/investing/valuation/calculate-pb-in-cad-from-filings/). It is educational; all figures are hypothetical.

## Direct answer

(1) Start from **total equity** on the consolidated balance sheet. (2) Remove **non-controlling interests**, **preferred shares** and **other equity instruments** such as limited recourse capital notes (LRCNs) to get **common equity**. (3) Subtract **goodwill** and **other intangible assets**, including capitalized software, from the goodwill and intangibles note. (4) Decide whether to add back **deferred tax liabilities** tied to those intangibles, and apply the choice to every peer. (5) Divide by **common shares outstanding at period end** (not the weighted average) for TBV per share, in CAD. (6) Divide the share price by it for **P/TBV**, and compute **ROTCE** on the same base.

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Five-step flow for calculating tangible book value per share in Canadian dollars from filings" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Equity</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Balance sheet,</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">total equity</text><line x1="134.4" y1="60" x2="149.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Claims</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">NCI, preferred,</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">LRCNs out</text><line x1="278.8" y1="60" x2="293.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Intangibles</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Goodwill and</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">intangibles note</text><line x1="423.2" y1="60" x2="438.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Per share</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Period-end</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">shares, CAD</text><line x1="567.6" y1="60" x2="582.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Ratios</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">P/TBV and</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">ROTCE</text></svg>
<figcaption>The five steps. The claims step matters most for Canadian financials, which often carry preferred shares and LRCNs inside equity.</figcaption>
</figure>

## Where each input lives

| Input | Where to find it | Watch for |
|:--|:--|:--|
| Total equity | Consolidated balance sheet (statement of financial position) | Use the period-end figure |
| Non-controlling interests | Balance sheet, equity section | Shown separately at the bottom of equity |
| Preferred shares, LRCNs, other equity instruments | Balance sheet and share capital note | Banks and insurers classify LRCNs as equity, not debt |
| Goodwill | Goodwill note (IFRS 3, IAS 36 impairment testing by cash-generating unit) | Goodwill inside equity-accounted investments may sit in the investment line |
| Other intangible assets | Intangible assets note (IAS 38) | Split into software, customer relationships, brands, core deposit intangibles |
| Deferred tax liabilities on intangibles | Income tax note | Not always disclosed separately |
| Common shares outstanding at period end | Share capital note or MD&A | Not the weighted average used for EPS |
| Net income to common, amortization of acquired intangibles | Income statement, MD&A non-GAAP section | Banks often disclose after-tax amortization of acquired intangibles in their adjusted results |

## Steps 1 to 5: the worksheet

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical lender: worksheet from total equity to tangible common equity, in Canadian dollar millions" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0</text><line x1="70" y1="195" x2="710" y2="195" stroke="#e2e8f0"/><text x="62" y="199" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">1,400</text><line x1="70" y1="140" x2="710" y2="140" stroke="#e2e8f0"/><text x="62" y="144" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">2,800</text><line x1="70" y1="85" x2="710" y2="85" stroke="#e2e8f0"/><text x="62" y="89" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">4,200</text><line x1="70" y1="30" x2="710" y2="30" stroke="#e2e8f0"/><text x="62" y="34" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">5,600</text><rect x="85.2" y="45.7143" width="49.6" height="204.286" rx="3" fill="#0d9488"/><text x="110" y="39.7143" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">5,200</text><text x="110" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Total</text><text x="110" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">equity</text><rect x="165.2" y="45.7143" width="49.6" height="1.96429" rx="3" fill="#0ea5e9"/><text x="190" y="39.7143" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−50</text><text x="190" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">NCI</text><rect x="245.2" y="47.6786" width="49.6" height="15.7143" rx="3" fill="#0ea5e9"/><text x="270" y="41.6786" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−400</text><text x="270" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Preferred</text><text x="270" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">shares</text><rect x="325.2" y="63.3929" width="49.6" height="9.82143" rx="3" fill="#0ea5e9"/><text x="350" y="57.3929" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−250</text><text x="350" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">LRCNs /</text><text x="350" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">other eq.</text><rect x="405.2" y="73.2143" width="49.6" height="35.3571" rx="3" fill="#0ea5e9"/><text x="430" y="67.2143" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−900</text><text x="430" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Goodwill</text><rect x="485.2" y="108.571" width="49.6" height="5.89286" rx="3" fill="#0ea5e9"/><text x="510" y="102.571" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−150</text><text x="510" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Software</text><rect x="565.2" y="114.464" width="49.6" height="13.75" rx="3" fill="#0ea5e9"/><text x="590" y="108.464" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−350</text><text x="590" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Acquired</text><text x="590" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">intangibles</text><rect x="645.2" y="128.214" width="49.6" height="121.786" rx="3" fill="#0f172a"/><text x="670" y="122.214" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">3,100</text><text x="670" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Tangible</text><text x="670" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">common</text></svg>
<figcaption>Hypothetical lender, C$ millions: total equity of 5,200 less claims ahead of common shareholders (700) and goodwill and intangibles (1,400) leaves tangible common equity of 3,100.</figcaption>
</figure>

| Line (hypothetical, period end) | C$M | Note |
|:--|--:|:--|
| Total equity | 5,200 | Balance sheet |
| Less non-controlling interests | −50 | |
| Less preferred shares | −400 | Share capital note |
| Less LRCNs and other equity instruments | −250 | Classified as equity |
| **Common equity** | **4,500** | |
| Less goodwill | −900 | Goodwill note |
| Less software | −150 | Intangibles note; regulators deduct it too |
| Less acquired customer relationships and brand | −350 | Intangibles note |
| **Tangible common equity (TCE)** | **3,100** | |
| Optional: add back deferred tax liabilities on intangibles | +60 | Income tax note |
| TCE incl. DTL add-back | 3,160 | Use only if applied to all peers |

| Per share and multiples (200M shares at period end, price $27.00) | Without add-back | With add-back |
|:--|--:|--:|
| Book value per share | $22.50 | $22.50 |
| Tangible book value per share | $15.50 | $15.80 |
| P/B | 1.20x | 1.20x |
| **P/TBV** | **1.74x** | **1.71x** |

Two things stand out. Nearly a third of common equity (1,400 of 4,500) is goodwill and intangibles, so P/TBV is about 45% higher than P/B. And the DTL choice moves P/TBV by only 0.03x here, which is why consistency across peers matters more than which choice you make.

## Step 6: ROTCE on the same base

| Line (hypothetical) | Value |
|:--|--:|
| Net income to common (after preferred dividends and LRCN distributions) | C$520M |
| Add after-tax amortization of acquired intangibles | C$30M |
| ROTCE numerator | C$550M |
| Average TCE ((2,950 + 3,100) ÷ 2) | C$3,025M |
| **ROTCE** | **18.2%** |
| ROE for comparison (520 ÷ average common equity of 4,400) | 11.8% |

Only amortization of **acquired** intangibles is usually added back. Amortization of software the company builds or buys for its own use is a real, recurring cost of running a bank, so leave it in. If the company reports ROTCE itself, check its definition in the non-GAAP section of the MD&A, which NI 52-112 requires it to reconcile.

## Variants

| Situation | What to change |
|:--|:--|
| Company reports in US dollars | Convert TCE at the period-end rate. Example: US$2,000M × an illustrative 1.40 = C$2,800M; ÷ 150M shares = C$18.67 per share |
| Life insurer | Also read the contractual service margin (CSM) under IFRS 17 and any adjusted book value the company reports; see [when tangible book misleads](/investing/valuation/when-tangible-book-misleads-tsx/) |
| Large unrealized losses in AOCI | Note how much of equity is accumulated other comprehensive income; it can swing with rates |
| Material share issuance or buyback after period end | Adjust the share count, or flag the timing gap |
| Goodwill in equity-accounted associates | Usually left in; flag it if large |

## Checks before you use the number

| Check | Pass if |
|:--|:--|
| Common equity matches the company's own book value per share × shares | Within rounding |
| Your TBV per share close to any TBV the company discloses | Difference explained (DTL, software, other items) |
| Same deductions applied to every peer | Yes |
| Period-end share count used | Yes |
| Price and TBV in the same currency | Yes |

## Go deeper

Once TBV is built, compare it fairly in [tangible book vs peers](/investing/valuation/tangible-book-vs-peers-canada-first-comparison/). For the bank context behind ROTCE and capital, read [how to analyze banks vs operating companies](/investing/analyze/analyze-banks-vs-operating-companies/).

## Related reading

- [What tangible book means for Canadian DIY investors](/investing/valuation/what-tangible-book-means-canadian-diy/)
- [Valuing Canadian banks with P/B and ROE](/investing/valuation/valuing-canadian-banks-pb-roe/)
- [How to analyze preferred shares and hybrid capital](/investing/analyze/analyze-preferred-shares-hybrid-capital/)
- [Bank operating metrics to track](/investing/sectors/bank-operating-metrics-to-track/)

## Sources

- IFRS 3 *Business Combinations*; IAS 38 *Intangible Assets*; IAS 36 *Impairment of Assets*; IAS 12 *Income Taxes*; IAS 33 *Earnings per Share*.
- Office of the Superintendent of Financial Institutions (OSFI), *Capital Adequacy Requirements (CAR) Guideline*, Chapter 2.
- National Instrument 52-112 *Non-GAAP and Other Financial Measures Disclosure*.

## Media credits

- Hero: "Bank of Montreal Head Office interior 2026.jpg" by Canmenwalker, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bank_of_Montreal_Head_Office_interior_2026.jpg). Cropped and resized to 1280x720. Real photograph of the banking hall of the Bank of Montreal's main branch in Montreal, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
