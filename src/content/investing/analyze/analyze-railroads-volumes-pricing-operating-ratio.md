---
title: "How to Analyze Railroads Using Volumes, Pricing, and Operating Ratio"
description: "How to analyze railroad stocks: carloads, RTMs, revenue per RTM, service metrics and the operating ratio, read in order. Educational, not advice."
category: "analyze"
role: "Spoke"
pubDate: 2026-11-10
image: "/images/investing/analyze-railroads-volumes-pricing-operating-ratio.jpg"
imageAlt: "CN Rail freight locomotive passing a GO station platform in Brampton, Ontario"
imageCredit: "CN Rail freight train in Brampton photograph by Milan Suvajac, CC BY-SA 4.0, via Wikimedia Commons. Cropped and resized."
draft: false
author: "Andrew"
monetization: "ebook"
---

Railroads are among the most studied businesses on the TSX. Canada's two Class I railroads run long networks with high fixed costs, so small changes in **volume, price and efficiency** can move profits a lot. The standard industrial checklist is a start, but rails have their own vocabulary: **carloads, revenue ton-miles (RTMs), revenue per RTM, train velocity, terminal dwell and the operating ratio**.

This post is an **analysis checklist** that turns that vocabulary into a reading order. It links, rather than repeats, our explainers on [how railroads make money](/investing/sectors/how-railroads-make-money/) and the [Canadian Class I railroads primer](/investing/primers/canadian-class-i-railroads-primer/). It is educational and does not rate either railroad. All figures are hypothetical.

## Direct answer

Read a railroad's quarter in this order: (1) **volume** by commodity group (carloads and RTMs); (2) **pricing** (revenue per RTM, with and without fuel surcharge); (3) **service metrics** (velocity, dwell, car miles per day); (4) **cost lines** (labour, fuel, purchased services, depreciation); and (5) the **operating ratio**, compared with the railroad's own history and its peer. Then check capex as a share of revenue and the debt load.

<figure class="diagram">
<svg viewBox="0 0 720 142" role="img" aria-label="Hypothetical revenue split into cost lines and operating income for two railroads" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="8" width="14" height="14" rx="3" fill="#0d9488"/><text x="30" y="19" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Labour</text><rect x="83.6" y="8" width="14" height="14" rx="3" fill="#94a3b8"/><text x="103.6" y="19" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Fuel</text><rect x="144.0" y="8" width="14" height="14" rx="3" fill="#f59e0b"/><text x="164" y="19" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Other operating costs</text><rect x="316.6" y="8" width="14" height="14" rx="3" fill="#0ea5e9"/><text x="336.6" y="19" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Depreciation</text><rect x="429.8" y="8" width="14" height="14" rx="3" fill="#a855f7"/><text x="449.8" y="19" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="start" font-family="system-ui, sans-serif">Operating income</text><text x="180" y="59" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Railroad A (OR 60%)</text><rect x="190.0" y="40" width="112.2" height="28" fill="#0d9488"/><text x="246.1" y="58.5" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">22%</text><rect x="302.2" y="40" width="61.2" height="28" fill="#94a3b8"/><text x="332.8" y="58.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">12%</text><rect x="363.4" y="40" width="81.6" height="28" fill="#f59e0b"/><text x="404.2" y="58.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">16%</text><rect x="445.0" y="40" width="51.0" height="28" fill="#0ea5e9"/><text x="470.5" y="58.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">10%</text><rect x="496.0" y="40" width="204.0" height="28" fill="#a855f7"/><text x="598" y="58.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">40%</text><text x="180" y="105" font-size="12" font-weight="600" fill="#0f172a" text-anchor="end" font-family="system-ui, sans-serif">Railroad B (OR 68%)</text><rect x="190.0" y="86" width="127.5" height="28" fill="#0d9488"/><text x="253.75" y="104.5" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="system-ui, sans-serif">25%</text><rect x="317.5" y="86" width="71.4" height="28" fill="#94a3b8"/><text x="353.2" y="104.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">14%</text><rect x="388.9" y="86" width="91.8" height="28" fill="#f59e0b"/><text x="434.8" y="104.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">18%</text><rect x="480.7" y="86" width="56.1" height="28" fill="#0ea5e9"/><text x="508.75" y="104.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">11%</text><rect x="536.8" y="86" width="163.2" height="28" fill="#a855f7"/><text x="618.4" y="104.5" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">32%</text></svg>
<figcaption>Hypothetical: each bar is 100% of revenue. The operating ratio is operating expenses divided by revenue, so a lower OR leaves more operating income per dollar of revenue.</figcaption>
</figure>

## Railroad metrics glossary

| Metric | What it measures | Why it matters |
|:--|:--|:--|
| Carloads | Number of loaded cars (or containers) moved | Simple volume signal by commodity |
| RTMs | Tons x miles of paying freight | Volume adjusted for weight and distance |
| Revenue per RTM | Price and mix per unit of work | Pricing power, but mix can distort it |
| Fuel surcharge | Pass-through of fuel costs | Inflates revenue when fuel is high |
| Train velocity / dwell | Network speed and time in yards | Service quality and cost efficiency |
| Operating ratio (OR) | Operating expenses / revenue | Overall efficiency; lower is better |
| Capital intensity | Capex / revenue | How much the network needs to stay safe and grow |

Railroads sometimes report an adjusted operating ratio that excludes certain items. Compare the reported and adjusted figures and read the reconciliation; see [how to spot one-time items](/investing/analyze/spot-one-time-items-canadian-statements/).

<figure class="diagram">
<svg viewBox="0 0 720 120" role="img" aria-label="How railroad volume, pricing and efficiency feed the operating ratio" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0d9488"/></marker></defs><rect x="10" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="71.2" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Volume</text><text x="71.2" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Carloads, RTMs</text><text x="71.2" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">By commodity</text><line x1="134.4" y1="60" x2="151.4" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="154.4" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="215.6" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Price</text><text x="215.6" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Revenue per RTM</text><text x="215.6" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Ex fuel surcharge</text><line x1="278.8" y1="60" x2="295.8" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="298.8" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Revenue</text><text x="360" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Volume x price</text><text x="360" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Plus surcharges</text><line x1="423.2" y1="60" x2="440.2" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="443.2" y="14" width="122.4" height="92" rx="10" fill="#f1f5f9" stroke="#0d9488" stroke-width="1.5"/><text x="504.4" y="38" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Efficiency</text><text x="504.4" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Velocity, dwell</text><text x="504.4" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Train length</text><line x1="567.6" y1="60" x2="584.6" y2="60" stroke="#0d9488" stroke-width="2" marker-end="url(#ah)"/><rect x="587.6" y="14" width="122.4" height="92" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/><text x="648.8" y="38" font-size="12.9" font-weight="700" fill="#0f172a" text-anchor="middle" font-family="system-ui, sans-serif">Operating ratio</text><text x="648.8" y="69" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Opex / revenue</text><text x="648.8" y="83" font-size="11.5" font-weight="400" fill="#475569" text-anchor="middle" font-family="system-ui, sans-serif">Lower is better</text></svg>
<figcaption>Read rails left to right: volume and price build revenue, service efficiency drives cost, and the operating ratio sums up the result.</figcaption>
</figure>

## Habit swap table

| Default habit | Why it misleads for rails | Better check |
|:--|:--|:--|
| Total revenue growth | Fuel surcharge and FX move it | Revenue per RTM ex fuel; volume by commodity |
| Gross margin | Not reported this way | Operating ratio and cost per GTM |
| One-quarter OR | Weather, labour disruption and fuel swing it | OR over several years and vs peer |
| Volume as one number | Mix shifts (grain, intermodal, coal, potash) change profit | Commodity-group table |
| Treating capex as optional | Network safety needs steady spending | Capex as % of revenue over time |

## Where to look

| Item | Where |
|:--|:--|
| Volumes, RTMs, revenue per RTM by commodity | Quarterly press release and supplementary data |
| Service metrics | Weekly or quarterly performance metrics on the company website |
| Cost lines and OR | MD&A operating expenses section |
| Regulation (grain revenue cap, interswitching) | AIF and MD&A risk sections; Canadian Transportation Agency |
| Capex plan | MD&A outlook; [how to read capex plans](/investing/analyze/read-capex-plans-mdna/) |

## Checklist

| Step | Done when |
|:--|:--|
| Volume by commodity logged | Carloads and RTMs for eight quarters |
| Pricing isolated | Revenue per RTM with fuel surcharge removed where possible |
| Service metrics noted | Velocity and dwell trend |
| OR compared | Own history and peer, reported and adjusted |
| Capex and leverage checked | Capital intensity and net debt to EBITDA |
| Regulatory items noted | Grain revenue cap, interswitching, labour agreements |

## Go deeper

For other cyclical, backlog-driven industrials, see [how to analyze industrials using cycle and backlog clues](/investing/analyze/analyze-industrials-cycle-backlog-clues/). To compare a Canadian railroad with a US peer, read [how to compare a TSX stock to its US peer fairly](/investing/valuation/compare-tsx-stock-to-us-peer/). All sector checklists are in the [sector-aware checklist library](/investing/analyze/build-sector-research-checklist-library/).

## Related reading

- [Industrials – Rails: industry structure and how money is made](/investing/sectors/how-railroads-make-money/)
- [Industry primer: Canadian Class I railroads](/investing/primers/canadian-class-i-railroads-primer/)
- [How to analyze operating leverage](/investing/analyze/analyze-operating-leverage/)
- [How to analyze same-store sales and volume metrics](/investing/analyze/analyze-same-store-sales-volume-metrics/)

## Sources

- Canada Transportation Act (maximum grain revenue entitlement; interswitching provisions) and Canadian Transportation Agency publications.
- Transport Canada, Railway Safety Act.
- Company quarterly reports and performance metrics pages. Confirm current rules with the Canadian Transportation Agency.

## Media credits

- Hero: "Brampton ON CN-Rail Freight-Train 2026-07-29.jpg" by Milan Suvajac, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Brampton_ON_CN-Rail_Freight-Train_2026-07-29.jpg). Cropped and resized to 1280x720. Real photograph of a CN freight train passing through Brampton, Ontario, not AI-generated.

By **Andrew** · [stocksummarizer.com](https://stocksummarizer.com)
