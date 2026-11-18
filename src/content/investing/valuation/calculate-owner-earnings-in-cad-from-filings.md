---
title: "How to Calculate Owner Earnings in CAD from Filings"
description: "An owner earnings worksheet for a TSX company: net income, D&A, maintenance capex estimated four ways, lease principal, working capital, SBC kept as a cost, and P/OE. Educational."
category: "valuation"
role: "Spoke"
pubDate: 2026-11-18
image: "/images/investing/calculate-owner-earnings-in-cad-from-filings.jpg"
imageAlt: "Two diesel locomotives, one red and white and one orange, standing in a rail yard in Dartmouth, Nova Scotia"
imageCredit: "CN diesels at Dartmouth Yard photograph by kitmasterbloke, CC BY 2.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Owner earnings is a simple idea with one hard input. Warren Buffett defined it in his 1986 letter to Berkshire Hathaway shareholders as reported earnings plus depreciation, amortization and other non-cash charges, minus the average annual capital spending needed to keep the business's competitive position and unit volume, plus or minus any working capital that requires. Everything except the maintenance capex is printed in the annual report. This worksheet builds the number for a hypothetical TSX-listed industrial services company in Canadian dollars and turns it into a per-share figure and a price-to-owner-earnings ratio.

The concept and how it compares with EBITDA and free cash flow are in the glossary entry [what is owner earnings?](/investing/glossary/what-is-owner-earnings/). This post is the filings worksheet. It is educational, and all figures are hypothetical.

## Direct answer

(1) Start from **net income attributable to common shareholders**. (2) Add **depreciation and amortization** from the cash flow statement, and note how much is right-of-use (lease) depreciation and how much is amortization of acquired intangibles. (3) Add other **non-cash charges** that will not turn into cash costs (for example, deferred tax that is not expected to reverse). Do **not** add back share-based compensation; treat it as a real cost. (4) Subtract your estimate of **maintenance capex**. (5) Subtract **lease principal payments**, because IFRS 16 moved lease costs below EBITDA. (6) Subtract the **working capital** needed just to hold volume. (7) Divide by **diluted shares** and compare with the share price.

## Where each input lives

| Input | Where to find it |
|:--|:--|
| Net income to common, diluted shares | Income statement; EPS note (IAS 33) |
| Depreciation, amortization, impairment | Cash flow statement (operating section); PP&E note (IAS 16); intangibles note (IAS 38) |
| Right-of-use depreciation and lease principal paid | Leases note (IFRS 16); financing section of the cash flow statement |
| Deferred tax expense | Income tax note (IAS 12) |
| Share-based compensation | Share-based payment note (IFRS 2) and cash flow add-backs |
| Total capex, "sustaining" vs "growth" capex | Investing section of the cash flow statement; MD&A capital program discussion |
| Working capital changes | Cash flow statement; MD&A liquidity section |

Many TSX issuers in mining, energy, utilities and pipelines split "sustaining" or "maintenance" capital from "growth" capital in the MD&A. Those are company definitions under NI 52-112 (non-GAAP and other financial measures), so read the definition before you use the number.

## Steps 1 to 3: earnings and non-cash charges

| Line (latest year, hypothetical) | C$M |
|:--|--:|
| Revenue | 2,000 |
| Net income to common | 180 |
| Depreciation of property, plant and equipment | 172 |
| Right-of-use (lease) depreciation | 28 |
| Amortization of acquired customer lists | 60 |
| **Total D&A** | **260** |
| Deferred tax expense | 15 |
| Share-based compensation (kept as a cost) | 25 |
| Diluted weighted average shares | 100M |

Adding back amortization of acquired intangibles was Buffett's point in 1986: purchase accounting creates charges that do not reflect a cash cost of running the business. That holds for a company that made one acquisition. For a serial acquirer whose growth depends on buying more customer lists every year, those acquisitions are closer to a recurring cost; see [how to analyze M&A track records of serial acquirers](/investing/analyze/analyze-ma-track-records-serial-acquirers/).

## Step 4: estimate maintenance capex

Total capex was C$330M. Maintenance capex is the part needed to stand still, and nobody reports it under IFRS, so estimate it several ways.

<figure class="diagram">
<svg viewBox="0 0 720 206" role="img" aria-label="Hypothetical: four estimates of maintenance capital spending for the same company, in Canadian dollar millions, with the chosen figure" xmlns="http://www.w3.org/2000/svg"><text x="240" y="47" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Company "sustaining" capex</text><rect x="250" y="30" width="281.154" height="24" rx="4" fill="#0ea5e9"/><text x="539.154" y="47" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">C$170M</text><text x="240" y="81" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Depreciation of PP&amp;E (ex ROU)</text><rect x="250" y="64" width="284.462" height="24" rx="4" fill="#0ea5e9"/><text x="542.462" y="81" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">C$172M</text><text x="240" y="115" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Flat-volume capex ratio × revenue</text><rect x="250" y="98" width="297.692" height="24" rx="4" fill="#0ea5e9"/><text x="555.692" y="115" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">C$180M</text><text x="240" y="149" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Peer asset-intensity check</text><rect x="250" y="132" width="355.577" height="24" rx="4" fill="#0ea5e9"/><text x="613.577" y="149" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">C$215M</text><line x1="555.962" y1="22" x2="555.962" y2="166" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5 4"/><text x="555.962" y="184" font-size="11.5" font-weight="700" fill="#b45309" text-anchor="middle" font-family="system-ui, sans-serif">Chosen: C$185M</text></svg>
<figcaption>Hypothetical: four estimates of maintenance capex land between C$170M and C$215M. The worksheet uses C$185M, close to the average, and writes down why.</figcaption>
</figure>

| Method (hypothetical) | Calculation | C$M |
|:--|:--|--:|
| Company "sustaining" capital (MD&A) | As disclosed | 170 |
| Depreciation of PP&E, excluding right-of-use assets | From the PP&E note | 172 |
| Capex-to-revenue in flat-volume years × revenue | 9.0% × 2,000 | 180 |
| Peer asset intensity check | Peer maintenance capex ÷ revenue 10.75% × 2,000 | 215 |
| **Chosen** | Average of the four, rounded | **185** |

Two checks before you accept the figure. First, compare maintenance capex with PP&E depreciation over five years: if "sustaining" spending is persistently below depreciation while the asset base ages, the company may be under-investing. Second, look at the PP&E note for average asset age (accumulated depreciation ÷ gross PP&E). Rising age with flat spending usually means a catch-up bill later.

## Steps 5 to 7: leases, working capital, per share

Under IFRS 16, lease payments no longer run through operating expenses. Part becomes right-of-use depreciation (already added back in step 2) and part becomes interest. If you add back the depreciation, subtract the principal portion of lease payments, or you will overstate owner earnings.

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical company: bridge from net income to owner earnings, in Canadian dollar millions" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0</text><line x1="70" y1="195" x2="710" y2="195" stroke="#e2e8f0"/><text x="62" y="199" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">125</text><line x1="70" y1="140" x2="710" y2="140" stroke="#e2e8f0"/><text x="62" y="144" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">250</text><line x1="70" y1="85" x2="710" y2="85" stroke="#e2e8f0"/><text x="62" y="89" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">375</text><line x1="70" y1="30" x2="710" y2="30" stroke="#e2e8f0"/><text x="62" y="34" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">500</text><rect x="87.3714" y="170.8" width="56.6857" height="79.2" rx="3" fill="#0d9488"/><text x="115.714" y="164.8" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">180</text><text x="115.714" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Net</text><text x="115.714" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">income</text><rect x="178.8" y="56.4" width="56.6857" height="114.4" rx="3" fill="#f59e0b"/><text x="207.143" y="50.4" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+260</text><text x="207.143" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">D&amp;A incl.</text><text x="207.143" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">ROU</text><rect x="270.229" y="49.8" width="56.6857" height="6.6" rx="3" fill="#f59e0b"/><text x="298.571" y="43.8" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">+15</text><text x="298.571" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Deferred</text><text x="298.571" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">tax</text><rect x="361.657" y="49.8" width="56.6857" height="81.4" rx="3" fill="#0ea5e9"/><text x="390" y="43.8" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−185</text><text x="390" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Maintenance</text><text x="390" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">capex</text><rect x="453.086" y="131.2" width="56.6857" height="13.2" rx="3" fill="#0ea5e9"/><text x="481.429" y="125.2" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−30</text><text x="481.429" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Lease</text><text x="481.429" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">principal</text><rect x="544.514" y="144.4" width="56.6857" height="4.4" rx="3" fill="#0ea5e9"/><text x="572.857" y="138.4" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">−10</text><text x="572.857" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Working</text><text x="572.857" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">capital</text><rect x="635.943" y="148.8" width="56.6857" height="101.2" rx="3" fill="#0f172a"/><text x="664.286" y="142.8" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">230</text><text x="664.286" y="270" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Owner</text><text x="664.286" y="284" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">earnings</text></svg>
<figcaption>Hypothetical, C$ millions: net income of 180 plus non-cash charges, less maintenance capex, lease principal and working capital needed to hold volume, gives owner earnings of 230.</figcaption>
</figure>

| Owner earnings worksheet (hypothetical) | C$M |
|:--|--:|
| Net income to common | 180 |
| + D&A (incl. right-of-use and acquired amortization) | 260 |
| + Deferred tax not expected to reverse | 15 |
| − Maintenance capex (estimate) | −185 |
| − Lease principal payments | −30 |
| − Working capital to hold volume (inflation on a C$330M base at ~3%) | −10 |
| **Owner earnings** | **230** |
| **Per diluted share (÷ 100M)** | **$2.30** |
| Share price | $46.00 |
| **Price to owner earnings** | **20.0x** |
| Owner earnings yield | 5.0% |

## How it compares with the cash flow numbers

| Measure (hypothetical) | C$M | Per share | Multiple at $46 |
|:--|--:|--:|--:|
| Net income | 180 | $1.80 | 25.6x P/E |
| Free cash flow (CFO 440 − all capex 330 − lease principal 30) | 80 | $0.80 | 57.5x P/FCF |
| **Owner earnings (your estimate)** | **230** | **$2.30** | **20.0x** |
| Owner earnings with SBC added back (not recommended) | 255 | $2.55 | 18.0x |

Free cash flow is low because the company spent C$145M on growth projects this year. That is the reason owner earnings exists: it separates the cost of standing still from the choice to grow. It is also the reason to be careful. Owner earnings is only as good as your maintenance capex estimate, and growth capex is only worth excluding if it earns a return. [How to calculate P/FCF in CAD from filings](/investing/valuation/calculate-p-fcf-in-cad-from-filings/) and [how to calculate EV/FCF](/investing/valuation/calculate-ev-fcf-in-cad-from-filings/) cover the reported cash versions.

## Variants

| Situation | What to change |
|:--|:--|
| Company reports in US dollars | Build owner earnings in US$, then convert per-share figures at one stated rate before dividing into a C$ price |
| Miner or energy producer | Start from disclosed sustaining capital, then add items it excludes (for example capitalized stripping or decline-replacement drilling) |
| Serial acquirer | Do not add back acquired amortization, or subtract average annual acquisition spend as a cost |
| Cyclical business | Use mid-cycle net income; see [how to calculate normalized EPS](/investing/valuation/calculate-normalized-eps-in-cad-from-filings/) |

## Go deeper

[When owner earnings misleads on TSX stocks](/investing/valuation/when-owner-earnings-misleads-tsx/) shows how much the three judgment calls above can move the answer. To turn the per-share figure into a price range, use [how to use owner earnings in a simple valuation checklist](/investing/valuation/use-owner-earnings-simple-valuation-checklist/).

## Related reading

- [What is owner earnings?](/investing/glossary/what-is-owner-earnings/)
- [How to read capex plans in the MD&A](/investing/analyze/read-capex-plans-mdna/)
- [How to read cash from operations vs net income](/investing/analyze/read-cfo-vs-net-income/)
- [How to analyze working capital swings in quarterly results](/investing/analyze/analyze-working-capital-swings-quarterly/)

## Sources

- Warren E. Buffett, Berkshire Hathaway Inc. 1986 Chairman's Letter, appendix on purchase-price accounting and owner earnings: [berkshirehathaway.com/letters/1986.html](https://www.berkshirehathaway.com/letters/1986.html).
- IAS 16 *Property, Plant and Equipment*; IAS 38 *Intangible Assets*; IFRS 16 *Leases*; IFRS 2 *Share-based Payment*; IAS 12 *Income Taxes*; IAS 33 *Earnings per Share*.
- National Instrument 52-112 *Non-GAAP and Other Financial Measures Disclosure*.

## Media credits

- Hero: "CN Diesels at Dartmouth Yard NS.jpg" by kitmasterbloke, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:CN_Diesels_at_Dartmouth_Yard_NS.jpg). Cropped and resized to 1280x720. Real photograph of CN diesel locomotives at Dartmouth Yard, Nova Scotia, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
