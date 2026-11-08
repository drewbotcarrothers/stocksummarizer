---
title: "How to Analyze Inventory Turns and Receivables Quality"
description: "Learn to analyze inventory turns, DSO and receivables quality: the formulas, note checklists, a hypothetical cash conversion cycle example, and red flags to log. Educational, not advice."
category: "analyze"
role: "Spoke"
pubDate: 2026-11-08
image: "/images/investing/analyze-inventory-turns-receivables-quality.jpg"
imageAlt: "Warehouse aisle with pallets of raw materials stacked on red racking"
imageCredit: "Warehouse photograph by Cjp24, CC BY-SA 3.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Inventory and receivables are where accounting estimates meet real cash. A company can report rising revenue while inventory piles up in a warehouse or customers stretch their payments. **Inventory turns** and **receivables quality** are two of the quickest ways to tell whether reported earnings are turning into cash.

Educational only, not financial advice. Treat this as a literacy framework, not a forensic accounting course. It goes deeper on two lines covered by [working capital swings](/investing/analyze/analyze-working-capital-swings-quarterly/) and [CFO vs net income](/investing/analyze/read-cfo-vs-net-income/). Pair it with [revenue quality](/investing/analyze/analyze-revenue-quality-canadian-issuers/) and [gross margin trends](/investing/analyze/analyze-gross-margin-trends/).

## Direct answer

Calculate **inventory turns** (COGS ÷ average inventory) and **days sales outstanding** (receivables ÷ revenue × 365) on a trailing basis, then compare them with the company's own history and two or three close peers. Flag it when inventory or receivables grow meaningfully faster than revenue for several quarters, when the receivables allowance shrinks while receivables balloon, or when the notes show write-downs, longer payment terms or factoring. Then read the MD&A for management's explanation and decide whether it fits your thesis.

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Five-step flow from statements to inventory and receivables quality" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Revenue &amp; COGS</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Income statement</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">(trailing 4Q)</text><line x1="134.4" y1="60" x2="151.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Inventory &amp; AR</text><text x="215.6" y="69" font-size="10.9" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Balance sheet</text><text x="215.6" y="83" font-size="10.9" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">(avg of open/close)</text><line x1="278.8" y1="60" x2="295.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Turns &amp; days</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">DIO, DSO,</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">DPO</text><line x1="423.2" y1="60" x2="440.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Cash cycle</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">DIO + DSO</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">− DPO</text><line x1="567.6" y1="60" x2="584.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Read the notes</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Allowances, NRV</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">write-downs, aging</text></svg>
<figcaption>Compute the ratios first, then read the notes that explain why they moved.</figcaption>
</figure>

## The core ratios

| Metric | Formula (simplified) | What a worsening trend can mean |
|:--|:--|:--|
| Inventory turns | COGS ÷ average inventory | Slower sell-through, over-ordering, obsolete stock |
| Days inventory outstanding (DIO) | 365 ÷ inventory turns | More cash tied up on shelves |
| Days sales outstanding (DSO) | Trade receivables ÷ revenue × 365 | Looser credit terms, slower collection, channel stuffing |
| Days payables outstanding (DPO) | Trade payables ÷ COGS × 365 | Stretching suppliers can flatter cash flow temporarily |
| Cash conversion cycle | DIO + DSO − DPO | Overall working-capital drag |
| Allowance ratio | Loss allowance ÷ gross receivables | Falling allowance plus rising AR deserves a question |

Use averages (opening + closing ÷ 2) and trailing-twelve-month revenue and COGS so seasonality doesn't fool you. Retailers, distributors, manufacturers and miners all carry inventory differently. Compare against the company's own history and a fair peer set, as in [peer tables without cherry-picking](/investing/analyze/use-peer-tables-without-cherry-picking/).

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical: receivables growing faster than revenue for five quarters" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0%</text><line x1="70" y1="198" x2="710" y2="198" stroke="#e2e8f0"/><text x="62" y="201.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">5%</text><line x1="70" y1="145" x2="710" y2="145" stroke="#e2e8f0"/><text x="62" y="149" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">10%</text><line x1="70" y1="92" x2="710" y2="92" stroke="#e2e8f0"/><text x="62" y="96.5" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">15%</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">20%</text><rect x="84" y="187" width="49" height="63" rx="3" fill="#0d9488"/><text x="108" y="181" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">6%</text><rect x="136" y="198" width="49" height="52" rx="3" fill="#f59e0b"/><text x="160" y="191.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">5%</text><text x="134" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Q1</text><rect x="212" y="187" width="49" height="63" rx="3" fill="#0d9488"/><text x="236" y="181" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">6%</text><rect x="264" y="166" width="49" height="84" rx="3" fill="#f59e0b"/><text x="288" y="160" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">8%</text><text x="262" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Q2</text><rect x="340" y="198" width="49" height="52" rx="3" fill="#0d9488"/><text x="364" y="191.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">5%</text><rect x="392" y="124" width="49" height="126" rx="3" fill="#f59e0b"/><text x="416" y="118" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">12%</text><text x="390" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Q3</text><rect x="468" y="208" width="49" height="42" rx="3" fill="#0d9488"/><text x="492" y="202" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">4%</text><rect x="520" y="92" width="49" height="158" rx="3" fill="#f59e0b"/><text x="544" y="86.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">15%</text><text x="518" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Q4</text><rect x="596" y="218" width="49" height="32" rx="3" fill="#0d9488"/><text x="620" y="212.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">3%</text><rect x="648" y="50" width="49" height="200" rx="3" fill="#f59e0b"/><text x="672" y="44.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">19%</text><text x="646" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Q5</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Revenue growth %</text><rect x="232" y="10" width="14" height="14" rx="3" fill="#f59e0b"/><text x="252" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Receivables growth %</text></svg>
<figcaption>Hypothetical issuer. When receivables growth persistently outruns revenue growth, ask whether terms were loosened or collections are slipping.</figcaption>
</figure>

## Receivables quality checklist

| Question | Where to look | Green / amber |
|:--|:--|:--|
| Is AR growing faster than revenue? | Balance sheet + income statement | Matches revenue / outruns it for 3+ quarters |
| Has the expected credit loss allowance moved sensibly? | Financial instruments note (IFRS 9) | Moves with AR and risk / shrinks as AR grows |
| Any aging schedule disclosed? | Credit risk note | Stable buckets / growing 90+ day bucket |
| Customer concentration in AR? | Concentration disclosure | Diversified / one customer dominates |
| Factoring or receivable sales? | Notes, liquidity section of MD&A | None or stable / new programme flattering CFO |
| Contract assets or unbilled revenue rising? | Revenue note (IFRS 15) | Stable / growing faster than billings |

## Inventory quality checklist

| Question | Where to look | Why it matters |
|:--|:--|:--|
| Raw materials vs WIP vs finished goods mix | Inventory note | Finished-goods build-up is often the warning sign |
| Write-downs to net realizable value | Inventory note (IAS 2) | Recurring write-downs = recurring cost, not one-time |
| Reversals of prior write-downs | Inventory note | Can flatter margins in a recovery quarter |
| Inventory vs backlog or orders | MD&A, [backlog post](/investing/analyze/read-order-backlog-book-to-bill/) | Building for confirmed orders is healthier than building on hope |
| Management explanation | MD&A results discussion | "Strategic build ahead of season" should reverse next season |

<figure class="diagram">
<svg viewBox="0 0 720 166" role="img" aria-label="Hypothetical cash conversion cycle breakdown in days" xmlns="http://www.w3.org/2000/svg"><text x="240" y="32" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">DIO (days inventory)</text><rect x="250" y="16" width="348" height="22" rx="3" fill="#0d9488"/><text x="606.235" y="32" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">74 d</text><text x="240" y="66" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">DSO (days sales outstanding)</text><rect x="250" y="50" width="245" height="22" rx="3" fill="#0d9488"/><text x="502.706" y="66" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">52 d</text><text x="240" y="100" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">DPO (days payables)</text><rect x="250" y="84" width="193" height="22" rx="3" fill="#0d9488"/><text x="450.941" y="100" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">41 d</text><text x="240" y="134" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Cash conversion cycle</text><rect x="250" y="118" width="400" height="22" rx="3" fill="#0d9488"/><text x="658" y="134" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">85 d</text></svg>
<figcaption>Hypothetical distributor: 74 + 52 − 41 = 85 days of cash tied up in working capital.</figcaption>
</figure>

## Worked example (hypothetical)

A hypothetical distributor reports trailing revenue of $1,000M, COGS of $780M, average inventory of $158M and average receivables of $142M.

| Item | Calculation | Result |
|:--|:--|--:|
| Inventory turns | 780 ÷ 158 | 4.9x |
| DIO | 365 ÷ 4.9 | ~74 days |
| DSO | 142 ÷ 1,000 × 365 | ~52 days |
| Prior-year DSO (given) | n/a | 41 days |
| Cash tied up by the DSO change | (52 − 41) ÷ 365 × 1,000 | ~$30M |

Eleven extra days of receivables is about $30M of cash that hasn't arrived. Whether that matters depends on free cash flow and leverage. Cross-check with the [FCF checklist](/investing/analyze/fcf-stock-decisions-quick-checklist/) and [debt notes](/investing/analyze/read-debt-notes-covenant-language/).

## Common misreads

- **Every inventory build is bad.** Not true. Companies sometimes build ahead of a launch or a known seasonal peak. The question is whether it unwinds on schedule.
- **Ignoring the business model.** Subscription and software businesses carry little inventory, and banks and insurers don't use these ratios at all.
- **One-quarter panic.** Quarter-end timing can swing DSO. Look for a multi-quarter pattern and record it in your [quarter-over-quarter thesis log](/investing/analyze/track-stock-thesis-over-quarters/).

## Related reading

- [How to analyze working capital swings in quarterly results](/investing/analyze/analyze-working-capital-swings-quarterly/)
- [How to read cash flow from operations vs net income](/investing/analyze/read-cfo-vs-net-income/)
- [How to analyze revenue quality for Canadian issuers](/investing/analyze/analyze-revenue-quality-canadian-issuers/)
- [How to analyze customer concentration risk](/investing/analyze/analyze-customer-concentration-risk/)
- [How to spot one-time items in Canadian financial statements](/investing/analyze/spot-one-time-items-canadian-statements/)

## Sources

- IAS 2 *Inventories* (measurement at the lower of cost and net realizable value; write-downs and reversals).
- IFRS 9 *Financial Instruments* (expected credit loss allowance for trade receivables) and IFRS 7 (credit risk disclosures).
- IFRS 15 *Revenue from Contracts with Customers* (contract assets and receivables).
- NI 51-102 and Form 51-102F1 (MD&A discussion of liquidity and working capital). Confirm the current text on the CSA website.

## Media credits

- Hero: "Warehouse-plastic industry.jpg" by Cjp24, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Warehouse-plastic_industry.jpg). Cropped and resized to 1280x720. Real photograph, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
