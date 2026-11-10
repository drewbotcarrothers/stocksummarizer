---
title: "How to Analyze Telecoms Using ARPU, Churn, and Capex Cycles"
description: "How to analyze telecom stocks: subscriber adds, ARPU, churn, service revenue and capital intensity across the network build cycle. Educational, not advice."
category: "analyze"
role: "Spoke"
pubDate: 2026-11-10
image: "/images/investing/analyze-telecoms-arpu-churn-capex.jpg"
imageAlt: "Mobile phone mast and base station equipment cabinet beside trees"
imageCredit: "Mobile phone mast photograph by Diacius, CC BY-SA 4.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Canadian telecoms (wireless, internet, TV and home phone, often with media assets) look stable: subscribers pay monthly bills and most people do not cancel their phone plan in a recession. But the numbers that matter are not in the headline revenue line. They are in **subscriber metrics, pricing per user, churn and the capex cycle**. A telecom can grow revenue while losing pricing power, or show weak free cash flow simply because it is in the middle of a network build.

This post is an **analysis checklist** for telecoms. It links our explainer on [how telecoms make money](/investing/sectors/how-telecoms-make-money/) rather than repeating it, and works like the [bond-proxy checklist for pipelines and utilities](/investing/analyze/analyze-pipelines-utilities-bond-proxies/). It is educational and does not rate any company.

## Direct answer

Track four operating numbers and one cycle: (1) **net subscriber additions** by product; (2) **ARPU** (average revenue per user, or average billing per user where reported); (3) **churn** (the monthly share of customers who leave); (4) **service revenue vs equipment revenue**; and (5) **capital intensity** (capex divided by revenue) across the network build cycle, plus spectrum auction spending. Then check leverage and the dividend payout against free cash flow after leases and spectrum.

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="How subscribers, ARPU, churn and capex connect in a telecom model" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Subscribers</text><text x="71.2" y="69" font-size="9.9" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Net adds</text><text x="71.2" y="83" font-size="9.9" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Mix: postpaid/prepaid</text><line x1="134.4" y1="60" x2="151.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">ARPU</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Price and plan mix</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Roaming, overage</text><line x1="278.8" y1="60" x2="295.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Churn</text><text x="360" y="69" font-size="10.9" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Monthly %</text><text x="360" y="83" font-size="10.9" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Switching to rivals</text><line x1="423.2" y1="60" x2="440.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="12.9" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Service revenue</text><text x="504.4" y="69" font-size="10.4" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Subs x ARPU</text><text x="504.4" y="83" font-size="10.4" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Less churned revenue</text><line x1="567.6" y1="60" x2="584.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Capex</text><text x="648.8" y="69" font-size="10.9" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Spectrum, 5G, fibre</text><text x="648.8" y="83" font-size="10.9" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Capital intensity</text></svg>
<figcaption>Telecom revenue is subscribers times average revenue per user, minus what churn takes away. Capex and spectrum spending decide how much of that reaches free cash flow.</figcaption>
</figure>

## Telecom metrics glossary

| Metric | What it measures | What to watch |
|:--|:--|:--|
| Net adds | New subscribers minus disconnections | Quality of adds (postpaid vs prepaid, promotions) |
| ARPU / ABPU | Average monthly revenue (or billing) per user | Direction over several quarters; definition changes |
| Churn | Monthly share of subscribers who leave | Rising churn can signal price competition |
| Service revenue | Recurring plan revenue | Better trend signal than total revenue |
| Equipment revenue | Phone and device sales | Low margin; swings with device launches |
| Capital intensity | Capex / revenue | Build cycle phase |
| Spectrum spend | Licences bought at auction | Lumpy; often outside "capex" |

Definitions vary across companies and can change over time. Always read the definition in the MD&A before comparing two telecoms; see [how to read non-GAAP metrics critically](/investing/analyze/read-non-gaap-metrics-critically/).

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-label="Hypothetical capital intensity over a network build cycle" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="250" x2="710" y2="250" stroke="#e2e8f0"/><text x="62" y="254" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">0%</text><line x1="70" y1="208" x2="710" y2="208" stroke="#e2e8f0"/><text x="62" y="212" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">5%</text><line x1="70" y1="166" x2="710" y2="166" stroke="#e2e8f0"/><text x="62" y="170" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">10%</text><line x1="70" y1="124" x2="710" y2="124" stroke="#e2e8f0"/><text x="62" y="128" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">15%</text><line x1="70" y1="82" x2="710" y2="82" stroke="#e2e8f0"/><text x="62" y="86" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">20%</text><line x1="70" y1="40" x2="710" y2="40" stroke="#e2e8f0"/><text x="62" y="44" font-size="11" font-weight="400" fill="#475569" text-anchor="end" font-family="system-ui, sans-serif">25%</text><rect x="104" y="90" width="60" height="160" rx="3" fill="#0d9488"/><text x="134" y="84.4" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">19%</text><text x="134" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Year 1</text><rect x="232" y="65" width="60" height="185" rx="3" fill="#0d9488"/><text x="262" y="59.2" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">22%</text><text x="262" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Year 2</text><rect x="360" y="99" width="60" height="151" rx="3" fill="#0d9488"/><text x="390" y="92.8" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">18%</text><text x="390" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Year 3</text><rect x="488" y="124" width="60" height="126" rx="3" fill="#0d9488"/><text x="518" y="118" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">15%</text><text x="518" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Year 4</text><rect x="616" y="132" width="60" height="118" rx="3" fill="#0d9488"/><text x="646" y="126.4" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">14%</text><text x="646" y="272" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Year 5</text><rect x="80" y="10" width="14" height="14" rx="3" fill="#0d9488"/><text x="100" y="21" font-size="12" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Capital intensity %</text></svg>
<figcaption>Hypothetical: capex as a share of revenue rises during a network build, then falls. Free cash flow often looks weakest during the build and stronger after it; compare across the cycle, not one year.</figcaption>
</figure>

## Habit swap table

| Default habit | Why it misleads for telecoms | Better check |
|:--|:--|:--|
| Total revenue growth | Device sales distort it | Service revenue growth |
| Subscriber growth alone | Growth bought with discounts | ARPU and churn together |
| One-year FCF | Capex and spectrum are lumpy | FCF over a build cycle, after leases and spectrum |
| Dividend yield | Payout can exceed FCF | Dividend vs FCF after spectrum; leverage trend |
| Ignoring regulation | CRTC and ISED decisions affect pricing and access | Regulatory section of the [AIF](/investing/analyze/analyze-regulatory-risk-disclosures-aif/) |

## Checklist

| Step | Done when |
|:--|:--|
| Subscriber trend logged | Net adds by product for eight quarters |
| ARPU and churn paired | Both trends in the same table |
| Service revenue isolated | Equipment revenue separated |
| Capex cycle placed | Capital intensity vs prior years; spectrum spend noted |
| Leverage and payout checked | Net debt to EBITDA; dividend vs FCF after spectrum |
| Regulatory risks noted | Key CRTC or ISED decisions in the AIF |

## Go deeper

Telecoms are often compared with utilities as income stocks; the [bond-proxy checklist](/investing/analyze/analyze-pipelines-utilities-bond-proxies/) explains when that comparison helps and when it does not. For dividend safety, see [free cash flow coverage of dividends](/investing/dividends/fcf-coverage-of-dividends/). All sector checklists are in the [sector-aware checklist library](/investing/analyze/build-sector-research-checklist-library/).

## Related reading

- [Telecom: industry structure and how money is made](/investing/sectors/how-telecoms-make-money/)
- [How to analyze customer concentration risk](/investing/analyze/analyze-customer-concentration-risk/)
- [How to read capex plans in an MD&A](/investing/analyze/read-capex-plans-mdna/)
- [How to read debt notes and covenant language](/investing/analyze/read-debt-notes-covenant-language/)

## Sources

- CRTC (Canadian Radio-television and Telecommunications Commission) decisions and *Communications Market Reports*.
- Innovation, Science and Economic Development Canada (ISED) spectrum auction results.
- IFRS 15 (bundled device and service contracts) and IFRS 16 (leases). Confirm current figures with the CRTC and ISED.

## Media credits

- Hero: "Mobile phone mast.jpg" by Diacius, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mobile_phone_mast.jpg). Cropped and resized to 1280x720. Real photograph of a mobile phone base station, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
