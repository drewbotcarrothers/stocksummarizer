/** Sitewide SEO helpers: dates, JSON-LD, related-reading matching (2026-11-01). */
import { execFileSync } from 'node:child_process';

export const SITE = 'https://stocksummarizer.com';
export const AUTHOR_NAME = 'Andrew';
export const AUTHOR_URL = `${SITE}/author/andrew/`;
export const AUTHOR_BIO =
  'Andrew is a personal finance expert, DIY investor and life optimizer based in Toronto, Canada. With over 19 years of corporate experience at a leading Canadian company, Andrew combines deep industry knowledge with a passion for technology to help others navigate personal finance and streamline their daily lives.';
export const LOGO_URL = `${SITE}/logo.png`;

export const fmtLong = (d: Date) =>
  d.toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

const gitCache = new Map<string, { first?: Date; last?: Date }>();
/** First/last commit dates for a content file (empty when git is unavailable, e.g. shallow host build). */
export function gitDates(filePath?: string): { first?: Date; last?: Date } {
  if (!filePath) return {};
  if (gitCache.has(filePath)) return gitCache.get(filePath)!;
  let out: { first?: Date; last?: Date } = {};
  try {
    const log = execFileSync('git', ['log', '--follow', '--format=%aI', '--', filePath], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    })
      .trim()
      .split('\n')
      .filter(Boolean);
    if (log.length) out = { last: new Date(log[0]), first: new Date(log[log.length - 1]) };
  } catch {
    /* no git */
  }
  gitCache.set(filePath, out);
  return out;
}

const slugDate = (id: string) => {
  const m = id.match(/(\d{4}-\d{2}-\d{2})/);
  return m ? new Date(`${m[1]}T12:00:00Z`) : undefined;
};

/** Resolve published + updated dates: frontmatter first, then git, then slug date. */
export function resolveDates(opts: { id: string; filePath?: string; pub?: Date; updated?: Date }) {
  const g = gitDates(opts.filePath);
  const published = opts.pub ?? g.first ?? slugDate(opts.id) ?? new Date();
  let updated = opts.updated ?? g.last ?? published;
  if (updated < published) updated = published;
  return { published, updated };
}

export function articleLd(o: {
  url: string;
  headline: string;
  description: string;
  image?: string;
  published: Date;
  updated: Date;
  section?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: o.headline.slice(0, 110),
    description: o.description,
    image: [new URL(o.image ?? '/logo.png', SITE).toString()],
    datePublished: o.published.toISOString(),
    dateModified: o.updated.toISOString(),
    author: { '@type': 'Person', name: AUTHOR_NAME, url: AUTHOR_URL },
    publisher: {
      '@type': 'Organization',
      name: 'StockSummarizer',
      url: SITE,
      logo: { '@type': 'ImageObject', url: LOGO_URL },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': new URL(o.url, SITE).toString() },
    ...(o.section ? { articleSection: o.section } : {}),
  };
}

export function breadcrumbLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: new URL(it.url, SITE).toString(),
    })),
  };
}

/**
 * FAQPage only when the post body already has an FAQ section ("## FAQ" / "Frequently asked questions")
 * with "### Question" subheads. Never invents questions.
 */
export function faqLd(body?: string) {
  if (!body) return undefined;
  const sec = body.match(/^##\s+[^\n]*(FAQ|Frequently asked questions|Common questions)[^\n]*\n([\s\S]*?)(?=^##\s|(?![\s\S]))/im);
  if (!sec) return undefined;
  const qas: { q: string; a: string }[] = [];
  const re = /^###\s+(.+)\n([\s\S]*?)(?=^###\s|(?![\s\S]))/gm;
  let m;
  while ((m = re.exec(sec[2]))) {
    const a = m[2].replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*_`>]/g, '').trim();
    if (a) qas.push({ q: m[1].replace(/[*_`]/g, '').trim(), a });
  }
  if (!qas.length) return undefined;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qas.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })),
  };
}

/** Brief "sector" (screener taxonomy) → sector deep-dive slugs. */
const BRIEF_SECTOR_MAP: Record<string, string[]> = {
  Finance: ['banks', 'insurers'],
  'Energy minerals': ['oil-gas-producers'],
  'Non-energy minerals': ['gold-precious-metals', 'base-metals-mining'],
  Utilities: ['utilities'],
  Communications: ['telecom'],
  Transportation: ['transportation'],
  'Retail trade': ['retail-consumer'],
  'Consumer services': ['retail-consumer'],
  'Technology services': ['software-tech'],
  'Electronic technology': ['software-tech'],
  'Industrial services': ['midstream-pipelines'],
};

/** Sector deep-dive slug → evergreen investing ids (category/slug). */
export const SECTOR_EVERGREEN: Record<string, string[]> = {
  banks: ['sectors/how-canadian-banks-make-money', 'sectors/bank-operating-metrics-to-track', 'valuation/valuing-canadian-banks-pb-roe'],
  insurers: ['sectors/how-insurers-make-money', 'sectors/how-diversified-financials-make-money'],
  'oil-gas-producers': ['sectors/how-oil-gas-producers-make-money', 'sectors/how-energy-services-make-money'],
  'gold-precious-metals': ['sectors/how-gold-miners-make-money'],
  'base-metals-mining': ['sectors/how-base-metals-miners-make-money'],
  utilities: ['sectors/how-utilities-make-money'],
  telecom: ['sectors/how-telecoms-make-money'],
  transportation: ['sectors/how-railroads-make-money'],
  'real-estate-reits': ['sectors/how-reits-make-money', 'valuation/valuing-reits-nav-ffo-affo', 'dividends/reit-distributions-vs-corporate-dividends'],
  'software-tech': ['sectors/how-tech-companies-make-money'],
  'midstream-pipelines': ['sectors/how-midstream-pipelines-make-money'],
  'retail-consumer': [],
};

/** Generic research evergreens used to fill related-reading blocks. */
export const GENERIC_EVERGREEN = [
  'analyze/research-tsx-stock-from-scratch',
  'analyze/how-to-read-quarterly-earnings-tsx',
  'analyze/compare-two-tsx-peers',
  'valuation/what-pe-means-canadian-diy',
  'dividends/avoid-dividend-traps-tsx',
  'valuation/ev-ebitda-for-canadian-diy-investors',
  'analyze/free-cash-flow-analysis',
  'pathways/canadian-diy-stock-investing-start-here',
];

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
/** Does the text mention this ticker as a ticker (e.g. "(TD)" or "**TD**")? */
export const mentionsTicker = (text: string | undefined, ticker: string) =>
  !!text && new RegExp(`[(*]${esc(ticker)}[)*]`).test(text);

/** Sector slugs relevant to a brief: deep dives that mention the ticker, then the sector map. */
export function sectorsForBrief(
  brief: { data: { ticker: string; sector: string } },
  sectors: { id: string; body?: string }[],
): string[] {
  const hits = sectors.filter((s) => mentionsTicker(s.body, brief.data.ticker)).map((s) => s.id);
  for (const s of BRIEF_SECTOR_MAP[brief.data.sector] ?? []) if (!hits.includes(s)) hits.push(s);
  return hits.filter((id) => sectors.some((s) => s.id === id));
}

export interface LinkItem {
  href: string;
  title: string;
  kind: string;
}
export function uniqLinks(items: LinkItem[], exclude: string, max = 10): LinkItem[] {
  const seen = new Set([exclude]);
  const out: LinkItem[] = [];
  for (const it of items) {
    if (seen.has(it.href)) continue;
    seen.add(it.href);
    out.push(it);
    if (out.length >= max) break;
  }
  return out;
}
