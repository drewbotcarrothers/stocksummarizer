/** Investing Literacy category stems for /investing/<category>/<slug>/ */
export type InvestingCategory =
  | 'analyze'
  | 'valuation'
  | 'dividends'
  | 'indexes-etfs'
  | 'sectors'
  | 'process'
  | 'accounts'
  | 'brokers-tools'
  | 'glossary'
  | 'primers'
  | 'pathways'
  | 'frameworks';

export interface CategoryMeta {
  slug: InvestingCategory;
  name: string;
  blurb: string;
  priority: 'High' | 'Med';
  monetization: string;
}

export const INVESTING_CATEGORIES: CategoryMeta[] = [
  {
    slug: 'pathways',
    name: 'Beginner → intermediate pathways',
    blurb: 'Ordered playbooks that sequence literacy without replacing stock and sector pillars.',
    priority: 'High',
    monetization: 'Ebook funnel + broker onboarding affiliates',
  },
  {
    slug: 'analyze',
    name: 'How to analyze stocks',
    blurb: 'DIY research process using SEDAR+, MD&A, earnings, and peer tables.',
    priority: 'High',
    monetization: 'Soft hooks to brokers, screeners, Research Playbook ebook',
  },
  {
    slug: 'valuation',
    name: 'Valuation & multiples',
    blurb: 'Plain-English multiples and methods in a CAD/TSX context — relative vs intrinsic without fake precision.',
    priority: 'High',
    monetization: 'Screener affiliates + valuation ebook funnel',
  },
  {
    slug: 'dividends',
    name: 'Dividends & income investing',
    blurb: 'TSX-heavy dividend literacy: coverage, aristocrats rules, traps, and account-location effects.',
    priority: 'High',
    monetization: 'Dividend tracker/broker affiliates + income ebook',
  },
  {
    slug: 'accounts',
    name: 'Accounts & tax location',
    blurb: 'TFSA/RRSP/FHSA/taxable location for stocks and dividends — investor angle only.',
    priority: 'High',
    monetization: 'Broker transfer affiliates + account-location ebook chapter',
  },
  {
    slug: 'process',
    name: 'Risk, portfolio & DIY process',
    blurb: 'Position sizing, behaviour, concentration, and process risk controls for active DIY pickers.',
    priority: 'High',
    monetization: 'DIY Process ebook + light broker tool hooks',
  },
  {
    slug: 'glossary',
    name: 'Metrics glossary',
    blurb: 'One metric or concept per long-form explainer — answer-engine entity pages.',
    priority: 'High',
    monetization: 'AdSense density + soft playbook CTAs',
  },
  {
    slug: 'sectors',
    name: 'Sector literacy deep-dives',
    blurb: 'Evergreen sector×concept posts that complement living /sectors/ hubs.',
    priority: 'High',
    monetization: 'Sector engagement + screener affiliates',
  },
  {
    slug: 'brokers-tools',
    name: 'Brokerages & tools literacy',
    blurb: 'Education-first brokerage and tool literacy — workflows, FX drag, data limits.',
    priority: 'Med',
    monetization: 'Primary affiliate surface (brokers, screeners, charting)',
  },
  {
    slug: 'indexes-etfs',
    name: 'Canadian indexes & ETFs',
    blurb: 'Benchmarks and ETF building blocks for stock pickers — not product spam.',
    priority: 'Med',
    monetization: 'Light broker affiliates when discussing how to buy',
  },
  {
    slug: 'primers',
    name: 'Company / industry primers',
    blurb: 'Evergreen business-model primers for liquid TSX names — parents for dated briefs.',
    priority: 'Med',
    monetization: 'Ads + cross-sell related stock summaries',
  },
  {
    slug: 'frameworks',
    name: 'Myths, mistakes & frameworks',
    blurb: 'Debunkings and decision cards that compress judgment lessons into shareable posts.',
    priority: 'Med',
    monetization: 'Soft ebook CTA + brand trust',
  },
];

export function categoryBySlug(slug: string): CategoryMeta | undefined {
  return INVESTING_CATEGORIES.find((c) => c.slug === slug);
}

/** Parse Astro content id `category/slug` from nested investing collection. */
export function splitInvestingId(id: string): { category: string; slug: string } {
  const i = id.indexOf('/');
  if (i === -1) return { category: 'pathways', slug: id };
  return { category: id.slice(0, i), slug: id.slice(i + 1) };
}
