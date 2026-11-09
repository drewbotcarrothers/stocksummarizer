---
title: "How to Analyze Banks Differently from Operating Companies"
description: "Which operating-company habits to switch off for banks (EV/EBITDA, FCF, net debt) and what to use instead: P/B, ROE, NIM, CET1, credit. Educational, not advice."
category: "analyze"
role: "Spoke"
pubDate: 2026-11-09
image: "/images/investing/analyze-banks-vs-operating-companies.jpg"
imageAlt: "Stone facade of the Bank of Nova Scotia building in downtown Toronto"
imageCredit: "Bank of Nova Scotia Building photograph by Ken Lund, CC BY-SA 2.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Most of the tools on this site start from the operating-company default: revenue, margins, capex, free cash flow and EV/EBITDA. Banks break almost all of them. Borrowed money is a bank's raw material, so "net debt" means nothing. Revenue is mostly the spread between what a bank earns on loans and pays on deposits. Free cash flow is not a meaningful number. And a regulator, not management alone, decides how much capital must stay in the business.

This post is an **analysis checklist** that tells you which habits to switch off and which bank posts to use instead. It does not repeat our bank explainers; it links them. It is educational and does not rate any bank.

## Direct answer

When you open a bank's report, replace five operating-company habits: (1) swap EV multiples for **P/B, P/TBV and ROE**; (2) replace margin analysis with **net interest margin and fee mix**; (3) replace capex and FCF with **capital ratios (CET1)** and payout capacity; (4) replace working-capital checks with **credit quality (PCLs, impaired loans, IFRS 9 stages)**; and (5) replace leverage covenants with **liquidity and funding (LCR, deposit mix)**. The detailed metrics are in [bank operating metrics to track](/investing/sectors/bank-operating-metrics-to-track/) and the valuation logic is in [valuing Canadian banks with P/B and ROE](/investing/valuation/valuing-canadian-banks-pb-roe/).

<figure class="diagram">
<svg viewBox="0 0 720 144" role="img" aria-label="Default operating-company lens versus the bank lens" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="6" width="343" height="132" rx="10" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/><rect x="10" y="6" width="343" height="34" rx="10" fill="#94a3b8"/><rect x="10" y="30" width="343" height="10" fill="#94a3b8"/><text x="181.5" y="28" font-size="13.5" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Operating company</text><text x="22" y="64" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">EV/EBITDA, P/E, P/FCF</text><text x="22" y="84" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Debt = financing choice</text><text x="22" y="104" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Margins and capex</text><text x="22" y="124" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">FCF to equity</text><rect x="367" y="6" width="343" height="132" rx="10" fill="#ffffff" stroke="#0d9488" stroke-width="2"/><rect x="367" y="6" width="343" height="34" rx="10" fill="#0d9488"/><rect x="367" y="30" width="343" height="10" fill="#0d9488"/><text x="538.5" y="28" font-size="13.5" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Bank</text><text x="379" y="64" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">P/B, P/TBV, ROE</text><text x="379" y="84" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Debt = raw material</text><text x="379" y="104" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">NIM, PCLs, efficiency</text><text x="379" y="124" font-size="12" font-weight="400" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Capital (CET1) to equity</text></svg>
<figcaption>Swap the toolkit, not just the numbers: for banks, deposits and borrowing are inventory, and regulatory capital decides what can be paid out.</figcaption>
</figure>

## Habit swap table

| Operating-company habit | Why it fails for banks | Bank replacement | Read this |
|:--|:--|:--|:--|
| EV/EBITDA | Debt is operating inventory; EV is meaningless | P/B, P/TBV, P/E with ROE | [Bank valuation](/investing/valuation/valuing-canadian-banks-pb-roe/) |
| Gross margin | No cost of goods | Net interest margin, fee share of revenue | [What is NIM?](/investing/glossary/what-is-net-interest-margin/) |
| Free cash flow | Loan growth is "investment"; cash flow statement is not useful | Earnings retained vs capital needed | [Bank metrics](/investing/sectors/bank-operating-metrics-to-track/) |
| Net debt / EBITDA | Leverage is the business model | CET1 ratio, leverage ratio | [Schedule I primer](/investing/primers/canadian-schedule-i-banking-primer/) |
| Receivables quality | Loans are the main asset | PCL ratio, impaired loans, stage migration | [Bank playbook](/investing/pathways/first-canadian-bank-analysis-playbook/) |
| Operating leverage | Still useful, under another name | Efficiency ratio and adjusted operating leverage | [Bank metrics](/investing/sectors/bank-operating-metrics-to-track/) |
| Segment margins | Still useful | Segment net income and ROE by segment | [Segment reporting](/investing/analyze/read-segment-reporting-canadian-filings/) |

<figure class="diagram">
<svg viewBox="0 0 720 166" role="img" aria-label="Hypothetical justified price-to-book at different ROEs" xmlns="http://www.w3.org/2000/svg"><text x="220" y="32" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">ROE 9% vs 10% cost of equity</text><rect x="230" y="16" width="210" height="22" rx="3" fill="#0d9488"/><text x="448" y="32" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">0.9x P/B</text><text x="220" y="66" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">ROE 10% vs 10%</text><rect x="230" y="50" width="233" height="22" rx="3" fill="#0d9488"/><text x="471.333" y="66" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">1x P/B</text><text x="220" y="100" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">ROE 13% vs 10%</text><rect x="230" y="84" width="303" height="22" rx="3" fill="#0d9488"/><text x="541.333" y="100" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">1.3x P/B</text><text x="220" y="134" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">ROE 16% vs 10%</text><rect x="230" y="118" width="373" height="22" rx="3" fill="#0d9488"/><text x="611.333" y="134" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">1.6x P/B</text></svg>
<figcaption>Hypothetical, zero-growth simplification: justified P/B is roughly ROE divided by the cost of equity. A bank earning below its cost of equity tends to trade below book.</figcaption>
</figure>

## Questions that are unique to banks

| Question | Where to look |
|:--|:--|
| How much excess capital above the regulator's expectation? | Quarterly report capital section; Pillar 3 disclosures |
| What drives provisions: performing (stage 1 and 2) or impaired (stage 3)? | Credit risk section, ACL tables |
| How sensitive is net interest income to rate moves? | MD&A interest rate risk sensitivity table |
| How are deposits funded and how sticky are they? | Liquidity and funding section, LCR |
| Which segments earn above the cost of equity? | Segment results, ROE by segment |

## Where to start

If you have never read a bank's quarterly report, follow the step-by-step [first Canadian bank analysis playbook](/investing/pathways/first-canadian-bank-analysis-playbook/). For background on how money is made, read [how Canadian banks make money](/investing/sectors/how-canadian-banks-make-money/) and the [RBC primer](/investing/primers/how-royal-bank-rbc-makes-money/).

## Checklist

| Step | Done when |
|:--|:--|
| Operating-company metrics switched off | No EV/EBITDA or FCF in your bank notes |
| P/B and ROE logged | Compared with the bank's own history and peers |
| CET1 buffer noted | Excess over the regulatory expectation |
| Credit trend noted | PCL ratio and stage migration over four quarters |
| Rate sensitivity noted | NII sensitivity to a 100 bp move |
| Segment ROE compared | Weak segments flagged |

## Go deeper

Insurers look like banks from a distance but work very differently; see [how to analyze insurers differently from banks](/investing/analyze/analyze-insurers-vs-banks/). For the diversified financials group, see [how diversified financials make money](/investing/sectors/how-diversified-financials-make-money/).

## Related reading

- [Financials – Banks: key operating metrics to track](/investing/sectors/bank-operating-metrics-to-track/)
- [Valuation for banks: P/B, ROE, and why P/E alone fails](/investing/valuation/valuing-canadian-banks-pb-roe/)
- [Playbook: your first Canadian bank analysis](/investing/pathways/first-canadian-bank-analysis-playbook/)
- [What is ROE?](/investing/glossary/what-is-roe/)

## Sources

- OSFI *Capital Adequacy Requirements* (CAR) and *Liquidity Adequacy Requirements* (LAR) guidelines; OSFI Pillar 3 disclosure guidelines.
- IFRS 9 *Financial Instruments* (expected credit loss model and stages).
- Bank Act (Canada). Confirm current requirements on the OSFI website.

## Media credits

- Hero: "Bank of Nova Scotia Building, Toronto, Ontario (29968794766).jpg" by Ken Lund, [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bank_of_Nova_Scotia_Building,_Toronto,_Ontario_(29968794766).jpg). Cropped and resized to 1280x720. Real photograph, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
