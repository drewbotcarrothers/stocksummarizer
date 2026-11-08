---
title: "How to Triangulate Filings, Sell-Side Notes, and Your Own Model"
description: "How to reconcile filings, sell-side research and your own model line by line, explain each gap and treat analyst notes as context rather than conclusions. Educational, not advice."
category: "analyze"
role: "Spoke"
pubDate: 2026-11-08
image: "/images/investing/triangulate-filings-sell-side-notes-own-model.jpg"
imageAlt: "White concrete triangulation pillar on a grassy hilltop with a wide valley view"
imageCredit: "Triangulation pillar photograph by Anthony O'Neil, CC BY-SA 2.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

You have three views of the same company. The **filings** say what happened. **Sell-side research notes** (from brokerage analysts) say what the market expects and why. **Your own model** says what you think. Triangulating means comparing the three on purpose, line by line, and writing down where they disagree. Those disagreements are either your edge or your error, and you need to know which.

Educational only, not financial advice. This is a workflow for reconciling sources. It applies the [source hierarchy framework](/investing/frameworks/source-hierarchy-filings-transcripts-commentary/) to numbers. For triangulating *valuation methods* (multiples vs DCF vs peers), see [triangulating multiples, DCF and peer checks](/investing/valuation/triangulating-multiples-dcf-peer-checks/).

## Direct answer

Build your model from the filings first, so your starting numbers are audited facts. Then compare it line by line with whatever sell-side or consensus information you can access: revenue growth, margins, capex, share count, and FCF. For each meaningful gap, write one sentence on why you differ. If you can't explain a gap, assume it's your error until you can. Treat sell-side notes as context. Read the analyst's conflict disclosures, and never use a price target in place of your own reasoning.

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="Triangulating filings, sell-side notes and your own model" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Filings</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">What happened</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">(audited / filed)</text><line x1="134.4" y1="60" x2="151.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="12.9" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Sell-side notes</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">What consensus</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">expects + why</text><line x1="278.8" y1="60" x2="295.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Your model</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">What you think</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">and why</text><line x1="423.2" y1="60" x2="440.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Reconcile</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Where do the</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">three disagree?</text><line x1="567.6" y1="60" x2="584.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Log the gap</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Variant view or</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">your error?</text></svg>
<figcaption>The useful output is the list of disagreements and whether you can explain each one.</figcaption>
</figure>

## What each source is good and bad at

| Source | Good for | Weak at | Check |
|:--|:--|:--|:--|
| Filings (FS, MD&A, AIF) | Facts, definitions, segment data, risks | Forward view (limited to forward-looking info) | Reconcile non-GAAP to GAAP |
| Sell-side notes | Industry context, model structure, consensus expectations | Independence; tendency to cluster | Conflict disclosures; date of estimate |
| Your model | Explicit assumptions you understand | Blind spots; overconfidence | Compare to history and to peers |
| Consensus aggregates | Quick read of expectations | Stale or mixed estimates; hides dispersion | Number of estimates; range |

<figure class="diagram">
<svg viewBox="0 0 720 250" role="img" aria-label="Reliability ladder for the three inputs plus derivatives" xmlns="http://www.w3.org/2000/svg"><rect x="170" y="10" width="380" height="38" rx="6" fill="#0d9488"/><text x="360" y="26" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Audited filings &amp; MD&amp;A</text><text x="360" y="41" font-size="11" font-weight="400" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Facts and management&#x27;s required discussion</text><rect x="130" y="56" width="460" height="38" rx="6" fill="#14b8a6"/><text x="360" y="72" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Your model (built on filings)</text><text x="360" y="87" font-size="11" font-weight="400" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">Your assumptions, explicitly written</text><rect x="90" y="102" width="540" height="38" rx="6" fill="#5eead4"/><text x="360" y="118" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Sell-side research notes</text><text x="360" y="133" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Useful context; check the conflict disclosures</text><rect x="50" y="148" width="620" height="38" rx="6" fill="#cbd5e1"/><text x="360" y="164" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Consensus aggregates</text><text x="360" y="179" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Averages hide the spread and stale estimates</text><rect x="10" y="194" width="700" height="38" rx="6" fill="#e2e8f0"/><text x="360" y="210" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Headlines &amp; price targets</text><text x="360" y="225" font-size="11" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Lowest signal for decisions</text></svg>
<figcaption>This is a variant of the source hierarchy framework, applied to reconciling numbers rather than reading documents.</figcaption>
</figure>

## The reconciliation table

| Line item | Filings (last FY) | Your model (next FY) | Consensus (next FY) | Gap explained? |
|:--|--:|--:|--:|:--|
| Revenue growth | 5.0% | 6.0% | 4.0% | Yes: contract start in Q2 per MD&A |
| EBITDA margin | 24.0% | 23.5% | 25.0% | Partly: I assume wage inflation; need source |
| Capex / revenue | 9.0% | 12.0% | 9.0% | Yes: capex plan in MD&A ([capex post](/investing/analyze/read-capex-plans-mdna/)) |
| Diluted shares | 100.0M | 101.0M | 100.5M | Yes: RSU vesting ([share-count post](/investing/analyze/read-cap-tables-fully-diluted-share-counts/)) |

All figures are hypothetical. Gaps marked "Partly" go into your [notes](/investing/analyze/keep-stock-research-notes-that-compound/) as open questions, with a date to resolve them.

<figure class="diagram">
<svg viewBox="0 0 720 166" role="img" aria-label="Hypothetical gaps between your model and consensus by line item" xmlns="http://www.w3.org/2000/svg"><text x="280" y="32" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Revenue growth gap (pts)</text><rect x="290" y="16" width="240" height="22" rx="3" fill="#0d9488"/><text x="538" y="32" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">2</text><text x="280" y="66" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">EBITDA margin gap (pts)</text><rect x="290" y="50" width="180" height="22" rx="3" fill="#0d9488"/><text x="478" y="66" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">1.5</text><text x="280" y="100" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Capex / revenue gap (pts)</text><rect x="290" y="84" width="360" height="22" rx="3" fill="#0d9488"/><text x="658" y="100" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">3</text><text x="280" y="134" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Diluted share count gap (%)</text><rect x="290" y="118" width="60" height="22" rx="3" fill="#0d9488"/><text x="358" y="134" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">0.5</text></svg>
<figcaption>Hypothetical. The capex gap is the biggest, so that&#x27;s where to look first: is it your assumption or a timing difference?</figcaption>
</figure>

## Access and independence notes

- Many brokerages give clients some research access. Libraries may offer financial databases too (check with your local library).
- Research reports usually include disclosures about the dealer's relationships with the issuer. Read them before weighing the conclusion.
- Price targets and ratings are outputs. The assumptions in the model are what you should actually compare.
- For peer comparisons, use [peer tables without cherry-picking](/investing/analyze/use-peer-tables-without-cherry-picking/).

## Related reading

- [Framework: Source hierarchy (filings > transcripts > commentary)](/investing/frameworks/source-hierarchy-filings-transcripts-commentary/)
- [Triangulating multiples, DCF, and peer checks](/investing/valuation/triangulating-multiples-dcf-peer-checks/)
- [How to build a simple DCF without fake precision](/investing/valuation/simple-dcf-without-fake-precision/)
- [How to evaluate management guidance language](/investing/analyze/evaluate-management-guidance-language/)
- [How to evaluate third-party stock score apps critically](/investing/brokers-tools/evaluate-stock-score-apps-critically/)

## Sources

- NI 51-102 Part 4A (forward-looking information in filings) and NI 52-112 (non-GAAP reconciliation). Confirm the current text on the CSA website.
- CIRO (Canadian Investment Regulatory Organization) Investment Dealer and Partially Consolidated Rules on research reports and analyst conflict disclosure. Confirm the current rule text on ciro.ca.
- Michaely & Womack (1999), "Conflict of interest and the credibility of underwriter analyst recommendations," *Review of Financial Studies*.

## Media credits

- Hero: "Triangulation pillar, top of Wavering Down - geograph.org.uk - 1855262.jpg" by Anthony O'Neil, [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Triangulation_pillar,_top_of_Wavering_Down_-_geograph.org.uk_-_1855262.jpg). Cropped and resized to 1280x720. Real photograph, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
