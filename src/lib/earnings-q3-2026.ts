// Q3 2026 TSX earnings-season dataset (/data/q3-2026-earnings/ + .csv).
// Every figure below is copied from the matching published StockSummarizer
// summary (src/content/briefs). Nothing is looked up or recalculated: if a post
// does not state a value, the field is left as 'n/a'. Company, sector, ticker and
// URL come from the post frontmatter at build time.
import { getCollection } from 'astro:content';

export const DATASET_AS_OF = new Date('2026-11-26T12:00:00Z');
export const DATASET_PATH = '/data/q3-2026-earnings/';
export const DATASET_CSV = '/data/q3-2026-earnings.csv';
const WINDOW_START = new Date('2026-10-22T00:00:00Z');
const WINDOW_END = new Date('2026-11-26T23:59:59Z');

type Verdict = 'Beat' | 'Miss' | 'Mixed' | 'n/a';

interface Curated {
  /** Period covered by the results in the post. */
  period: string;
  /** Results release date as stated in the post (ISO), or 'n/a'. */
  reported: string;
  headline: string;
  beatMiss: Verdict;
  beatMissDetail: string;
  reaction: string;
  /** What the post was mainly about. */
  focus: string;
}

const NA = 'n/a';
const NO_Q3 = 'No Q3 figures in our post';

// Keyed by brief id (lower-cased filename without extension).
const CURATED: Record<string, Curated> = {
  '2026-10-22-wcn-q3-beat-dividend-hike': {
    period: 'Q3 2026', reported: '2026-10-21',
    headline: 'Revenue US$2.638B (+7.3%); adjusted EPS US$1.58; reported EPS US$1.43',
    beatMiss: 'Beat', beatMissDetail: 'Revenue above ~US$2.61B expected; adjusted EPS ~6 cents above consensus',
    reaction: NA,
    focus: 'Q3 beat, second 2026 outlook raise, 10% dividend hike',
  },
  '2026-10-23-mtl-mullen-record-quarter': {
    period: 'Q3 2026', reported: '2026-10-22',
    headline: 'Revenue C$653.2M (+16.3%); adjusted EPS C$0.52; net income C$51.5M (+55.1%)',
    beatMiss: 'Beat', beatMissDetail: 'Revenue ahead of ~C$615M expected; adjusted EPS vs C$0.41 forecast',
    reaction: '+11.5% to C$32.28 on Oct 22 (five-year high)',
    focus: 'Record quarter; Willson International deal',
  },
  '2026-10-24-fsv-firstservice-buyback': {
    period: 'Q3 2026', reported: '2026-10-22',
    headline: 'Revenue US$1.53B (+6%); adjusted EPS US$1.89 (+7%); GAAP diluted EPS US$0.99',
    beatMiss: 'Beat', beatMissDetail: 'Revenue ahead of ~US$1.50B expected; adjusted EPS vs US$1.87 consensus',
    reaction: '+7.4% to C$206.06 on Oct 22, then −2.5% to C$200.92 on Oct 23',
    focus: 'Q3 beat; 9% of shares bought back since April',
  },
  '2026-10-25-tri-cocounsel-ai-launch': {
    period: NA, reported: NA, headline: NO_Q3, beatMiss: 'n/a', beatMissDetail: NA, reaction: NA,
    focus: 'CoCounsel Tax, Audit & Accounting AI launch (Oct 22); TSX shares rose about 6.5% that day',
  },
  '2026-10-26-csu-chief-ai-officer': {
    period: NA, reported: NA, headline: NO_Q3, beatMiss: 'n/a', beatMissDetail: NA, reaction: NA,
    focus: 'First Chief AI Officer named (Oct 21); shares rose about 5.3% to C$3,408.57 on Oct 22',
  },
  '2026-10-27-cae-flightscape-sale': {
    period: NA, reported: NA, headline: NO_Q3, beatMiss: 'n/a', beatMissDetail: NA, reaction: NA,
    focus: 'Flightscape sold to SITA for US$500M enterprise value (Oct 26); stock +4.6% to C$36.60 that day',
  },
  '2026-10-28-eld-skouries-filter-presses': {
    period: NA, reported: NA, headline: NO_Q3, beatMiss: 'n/a', beatMissDetail: NA, reaction: NA,
    focus: 'First Skouries filter presses running (Oct 26); stock +8.1% to C$48.03 on Oct 27',
  },
  '2026-10-29-cp-q3-fuel-squeeze': {
    period: 'Q3 2026', reported: '2026-10-28',
    headline: 'Revenue C$4.22B (+15%); core adjusted diluted EPS C$1.28 (+16%); reported diluted EPS C$1.04',
    beatMiss: 'Miss', beatMissDetail: 'Core adjusted EPS ~3 cents below ~C$1.31 expected',
    reaction: 'U.S.-listed shares fell about 3.6% after hours (Oct 28)',
    focus: 'Fuel bill up ~61% squeezes the operating ratio',
  },
  '2026-10-30-ala-q3-record-exports': {
    period: 'Q3 2026', reported: '2026-10-29',
    headline: 'Revenue C$3.43B (+32%); normalized EBITDA C$389M (+45%); normalized EPS C$0.29; GAAP loss C$0.07/share',
    beatMiss: 'Beat', beatMissDetail: 'Normalized EBITDA above ~C$335M expected',
    reaction: 'Closed flat at C$56.22 on Oct 29',
    focus: 'Record Q3 on LPG exports; port strike slows loading',
  },
  '2026-10-31-imo-q3-record-refining': {
    period: 'Q3 2026', reported: '2026-10-30',
    headline: 'Revenue and other income C$16.21B; net income C$2,454M (quarterly record); EPS C$5.11',
    beatMiss: 'Beat', beatMissDetail: 'EPS above ~C$4.70 expected',
    reaction: '+5.4% to a 52-week high of C$193.48 on Oct 30',
    focus: 'Record profit on a refining windfall',
  },
  '2026-11-01-tfii-q4-guide-ups-exit': {
    period: 'Q3 2026', reported: '2026-10-29',
    headline: 'Revenue US$2.23B (+13%); net income US$105.7M (+25%); adjusted EPS US$1.67 (+39%)',
    beatMiss: 'Miss', beatMissDetail: 'Adjusted EPS short of ~US$1.74–1.76 expected; Q4 guide US$1.30–1.40 vs ~US$1.65',
    reaction: '−17% to C$130.05 on Oct 30',
    focus: 'Weak Q4 outlook; UPS freight partnership ending',
  },
  '2026-11-02-ap-allied-distribution-cut': {
    period: 'Q3 2026', reported: '2026-10-28',
    headline: 'Rental revenue C$138.1M (−6.6%); FFO/unit C$0.194 (−59%); AFFO/unit C$0.110 (−75%)',
    beatMiss: 'n/a', beatMissDetail: NA,
    reaction: '−19% on Oct 29 and −5% on Oct 30, to C$4.03',
    focus: 'Monthly distribution cut 90%, the second cut in a year',
  },
  '2026-11-03-mx-methanex-q3-windfall': {
    period: 'Q3 2026', reported: '2026-10-29',
    headline: 'Revenue US$1.39B (~+50%); adjusted EPS US$3.69; adjusted EBITDA US$543M',
    beatMiss: 'Beat', beatMissDetail: 'Adjusted EPS vs ~US$2.86 estimates',
    reaction: '+14% to about C$100 on Oct 30, then about −4% on Nov 2',
    focus: 'Methanol supply shock; 5% buyback',
  },
  '2026-11-04-fts-fortis-32b-plan': {
    period: 'Q3 2026', reported: '2026-11-03',
    headline: 'Net earnings C$474M; EPS C$0.92; adjusted EPS C$0.92',
    beatMiss: 'Beat', beatMissDetail: 'Adjusted EPS a little ahead of ~C$0.90 expected',
    reaction: 'Closed C$83.58 on Nov 3 (from C$82.95 on Nov 2) after a 52-week high of C$84.24',
    focus: 'Record C$32.2B 2027–2031 capital plan; 4% dividend raise',
  },
  '2026-11-05-ntr-nutrien-q3-miss': {
    period: 'Q3 2026', reported: '2026-11-04',
    headline: 'Sales US$6.06B (+1%); adjusted EPS US$0.61 (−37%); net earnings US$288M',
    beatMiss: 'Miss', beatMissDetail: 'Adjusted EPS short of ~US$0.74–0.80 expected',
    reaction: 'NYSE shares slipped about 1.5% after hours (Nov 4)',
    focus: 'Sulfur costs hit phosphate; White Springs closure',
  },
  '2026-11-06-tih-toromont-q3-pullback': {
    period: 'Q3 2026', reported: '2026-11-02',
    headline: 'Revenue C$1,652.1M (+26%); net earnings C$192.1M (+37%); EPS C$2.35',
    beatMiss: 'Beat', beatMissDetail: 'Described as a Q3 beat in our post (no consensus figure stated)',
    reaction: 'Down about 15% over the following month',
    focus: 'C$1B of 2027 power-system backlog',
  },
  '2026-11-07-gil-gildan-q3-guide-cut': {
    period: 'Q3 2026 (quarter ended Sep 27)', reported: '2026-11-05',
    headline: 'Net sales US$1.47B (+61.1%); adjusted diluted EPS US$1.54 (+54%); GAAP diluted EPS (continuing ops) US$1.37',
    beatMiss: 'Miss', beatMissDetail: 'Net sales well short of its own ~US$1.65B guide; FY guidance cut',
    reaction: 'Fell nearly 19% to about C$49.04 (Nov 5–6 session)',
    focus: 'Q3 sales miss and full-year guidance cut',
  },
  '2026-11-08-tsu-trisura-runoff-selloff': {
    period: 'Q3 2026', reported: '2026-11-05',
    headline: 'Operating EPS C$0.73 (+2.8%); reported EPS C$0.54; net income C$26.2M (−32.1%)',
    beatMiss: 'n/a', beatMissDetail: NA,
    reaction: '−29.9% to C$29.58 on Nov 6',
    focus: 'Unquantified runoff exposure after a claims-provider bankruptcy',
  },
  '2026-11-09-vnp-5n-plus-q3-jump': {
    period: 'Q3 2026', reported: '2026-11-02',
    headline: 'Revenue US$136.4M (+30%); adjusted EBITDA US$31.1M (+7%); net earnings US$12.3M (−32%)',
    beatMiss: 'Beat', beatMissDetail: 'Revenue beat analyst forecasts',
    reaction: 'About +25% to roughly C$32.62 on Nov 3',
    focus: 'Revenue jump despite lower net earnings',
  },
  '2026-11-10-scr-strathcona-greenfire-deal': {
    period: 'Q3 2026', reported: '2026-11-08',
    headline: 'Operating earnings C$371M (C$1.73/share); free cash flow C$286M; production 123,486 boe/d',
    beatMiss: 'n/a', beatMissDetail: NA,
    reaction: 'About −1% to C$36.00 on Nov 9',
    focus: 'Greenfire acquisition (C$2.7–2.9B incl. debt); 7% dividend raise',
  },
  '2026-11-11-key-keyera-aef-outage': {
    period: 'Q3 2026', reported: '2026-11-10',
    headline: 'Adjusted EBITDA C$462M (+64%); distributable cash flow C$0.83/share; net loss C$68M',
    beatMiss: 'n/a', beatMissDetail: NA,
    reaction: 'Fell as much as 5% intraday on Nov 10, closed slightly higher at C$51.26',
    focus: 'Plains NGL deal lifts EBITDA; AEF iso-octane outage to cost ~C$85M in 2027',
  },
  '2026-11-12-pow-power-corp-nav-discount': {
    period: 'Q3 2026', reported: '2026-11-11',
    headline: 'Adjusted net earnings C$964M (C$1.53/share); reported net earnings C$1,006M (C$1.60/share)',
    beatMiss: 'n/a', beatMissDetail: NA,
    reaction: 'Closed C$95.87 on Nov 11 (C$91.36 on Nov 6)',
    focus: 'Adjusted NAV per share up 32.1% to C$113.28',
  },
  '2026-11-13-cjt-cargojet-record-q3': {
    period: 'Q3 2026', reported: '2026-11-11',
    headline: 'Revenue C$286.5M (+30.3%); adjusted EPS C$1.21; net earnings C$19.1M (+117%)',
    beatMiss: 'Beat', beatMissDetail: 'Adjusted EPS well ahead of ~C$0.81 expected',
    reaction: 'About +10% to C$108.77 on Nov 12',
    focus: 'Record Q3 revenue',
  },
  '2026-11-14-stn-stantec-record-margin': {
    period: 'Q3 2026', reported: '2026-11-12',
    headline: 'Net revenue C$1.86B (+9.4%); adjusted EPS C$1.89 (+23.5%); net income C$179.6M (+19.7%)',
    beatMiss: 'n/a', beatMissDetail: NA,
    reaction: 'About +14% to C$122.20 on Nov 13',
    focus: 'Record 20.2% adjusted EBITDA margin; 2026 targets raised',
  },
  '2026-11-15-eif-exchange-income-billion-guide': {
    period: 'Q3 2026', reported: '2026-11-12',
    headline: 'Revenue C$1.06B (+10%); adjusted EPS C$1.81 (+24%); net earnings C$96M (+39%)',
    beatMiss: 'n/a', beatMissDetail: NA,
    reaction: 'About +2% to C$127.72 on Nov 13',
    focus: 'Record Q3; first C$1B+ adjusted EBITDA guide (2027)',
  },
  '2026-11-16-gmin-g-mining-q3-oko': {
    period: 'Q3 2026', reported: '2026-11-12',
    headline: 'Revenue US$172.7M; adjusted EPS US$0.32; net income US$99.5M',
    beatMiss: 'Mixed', beatMissDetail: 'Revenue short of ~US$209M expected; adjusted EPS ahead of ~US$0.30',
    reaction: '+9.9% to C$46.21 on Nov 13',
    focus: 'Profit beat; Oko build on budget',
  },
  '2026-11-17-kel-kelt-q3-montney-jump': {
    period: 'Q3 2026', reported: '2026-11-13',
    headline: 'Sales C$193.3M (+75%); adjusted funds from operations C$0.51/share (+138%); net income C$26.0M',
    beatMiss: 'n/a', beatMissDetail: NA,
    reaction: '+8.8% to C$11.49 on Nov 13',
    focus: 'Strong Q3, then a Montney takeover next door',
  },
  '2026-11-18-fm-first-quantum-cobre-talks': {
    period: 'Q3 2026', reported: '2026-10-28',
    headline: 'Revenue US$2,086M (+38% vs Q2); EBITDA US$844M; adjusted EPS US$0.29',
    beatMiss: 'n/a', beatMissDetail: NA,
    reaction: NA,
    focus: 'Panama opens formal Cobre Panama talks (Nov 16)',
  },
  '2026-11-19-mru-metro-q4-strike-hit': {
    period: 'Fiscal Q4 2026 (12 weeks ended Sep 26)', reported: '2026-11-18',
    headline: 'Sales C$5,179.5M (+1.4%); adjusted EPS C$0.97 (vs C$1.13, −14.2%); net earnings C$201.9M (−7.0%)',
    beatMiss: 'n/a', beatMissDetail: NA,
    reaction: '−3.31% to C$97.58 on Nov 18',
    focus: 'C$97M strike hit for fiscal 2026',
  },
  '2026-11-20-qbr-quebecor-telus-bid': {
    period: NA, reported: NA, headline: NO_Q3, beatMiss: 'n/a', beatMissDetail: NA, reaction: NA,
    focus: 'Non-binding ~C$31B proposal for Telus (Nov 16); Class B shares −15.3% Nov 16, −12.6% Nov 17, −4.7% Nov 18',
  },
  '2026-11-21-byd-boyd-group-q3-profit-squeeze': {
    period: 'Q3 2026', reported: '2026-11-11',
    headline: 'Sales about US$1.013B (+28.2%); adjusted EPS US$0.68 (vs US$0.83); net earnings US$81,000',
    beatMiss: 'Miss', beatMissDetail: 'Adjusted EPS missed ~US$0.85 expected',
    reaction: 'Fell more than 11% on results day',
    focus: 'Sales up, profit near zero after the Joe Hudson\u2019s deal',
  },
  '2026-11-22-sea-seabridge-ksm-court-ruling': {
    period: NA, reported: NA, headline: NO_Q3, beatMiss: 'n/a', beatMissDetail: NA, reaction: NA,
    focus: 'KSM court ruling (Nov 19); shares −29.3% to C$25.92 that day',
  },
  '2026-11-23-tve-tamarack-valley-headwater-close': {
    period: NA, reported: NA, headline: NO_Q3, beatMiss: 'n/a', beatMissDetail: NA, reaction: NA,
    focus: 'Headwater acquisition closed and dividend raised 20% (Nov 19)',
  },
  '2026-11-25-aden-adentra-accesssmt-deal': {
    period: 'Q3 2026', reported: '2026-11-09',
    headline: 'Sales US$618.7M (+4.5%); adjusted basic EPS US$0.89 (+27.1%); net income US$15.9M (+56.8%)',
    beatMiss: 'n/a', beatMissDetail: NA,
    reaction: NA,
    focus: 'C$230M AccessSMT acquisition (Nov 23); shares +9.61% to C$41.75 on Nov 24',
  },
  '2026-11-26-lnr-linamar-genie-deal': {
    period: 'Q3 2026', reported: '2026-11-04',
    headline: 'Sales C$3.08B (+21%); normalized EPS C$2.59 (+3.2%)',
    beatMiss: 'n/a', beatMissDetail: NA,
    reaction: NA,
    focus: 'US$1.4B Genie acquisition from Terex (Nov 23); stock up about 8% in two sessions',
  },
};

export interface EarningsRow extends Curated {
  ticker: string;
  company: string;
  sector: string;
  summaryDate: string;
  url: string;
  title: string;
}

const iso = (d: Date) => d.toISOString().slice(0, 10);

export async function getEarningsRows(): Promise<EarningsRow[]> {
  const briefs = await getCollection(
    'briefs',
    ({ data }) => !data.draft && data.pubDate >= WINDOW_START && data.pubDate <= WINDOW_END,
  );
  // Never fail the site build over this page: briefs published later inside the
  // window (e.g. a draft that goes live) are simply left out until a row is curated.
  const missing = briefs.filter((b) => !CURATED[b.id]).map((b) => b.id);
  const stale = Object.keys(CURATED).filter((id) => !briefs.some((b) => b.id === id));
  if (missing.length || stale.length) {
    console.warn(`[q3-2026-earnings] not in dataset: ${missing.join(', ') || 'none'}; curated but not found: ${stale.join(', ') || 'none'}`);
  }
  return briefs
    .filter((b) => CURATED[b.id])
    .map((b) => ({
      ticker: b.data.ticker,
      company: b.data.company,
      sector: b.data.sector,
      summaryDate: iso(b.data.pubDate),
      url: `https://stocksummarizer.com/summaries/${b.id}/`,
      title: b.data.title,
      ...CURATED[b.id],
    }))
    .sort((a, b) =>
      (a.reported === NA ? 1 : 0) - (b.reported === NA ? 1 : 0) ||
      a.reported.localeCompare(b.reported) ||
      a.summaryDate.localeCompare(b.summaryDate),
    );
}

const CSV_COLUMNS: [keyof EarningsRow, string][] = [
  ['ticker', 'ticker'],
  ['company', 'company'],
  ['sector', 'sector'],
  ['period', 'period'],
  ['reported', 'report_date'],
  ['headline', 'headline_result'],
  ['beatMiss', 'beat_miss'],
  ['beatMissDetail', 'beat_miss_detail'],
  ['reaction', 'stock_reaction'],
  ['focus', 'post_focus'],
  ['summaryDate', 'summary_published'],
  ['url', 'summary_url'],
];

export function toCsv(rows: EarningsRow[]): string {
  const esc = (v: string) => (/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);
  const lines = [CSV_COLUMNS.map(([, h]) => h).join(',')];
  for (const r of rows) lines.push(CSV_COLUMNS.map(([k]) => esc(String(r[k]))).join(','));
  return '\uFEFF' + lines.join('\r\n') + '\r\n';
}
