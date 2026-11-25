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
  /** Internal planning only — never render in public pages. */
  priority: 'High' | 'Med';
  monetization: string;
  image: string;
  imageAlt: string;
}

export const INVESTING_CATEGORIES: CategoryMeta[] = [
  {
    slug: 'pathways',
    name: 'Beginner → intermediate pathways',
    blurb: 'Ordered playbooks that sequence literacy without replacing stock and sector pillars.',
    priority: 'High',
    monetization: 'Ebook funnel + broker onboarding affiliates',
    image: '/images/investing/categories/pathways.jpg',
    imageAlt: 'Editorial illustration of unmarked books on teal stepping stones along a quiet path toward a bright horizon',
  },
  {
    slug: 'analyze',
    name: 'How to analyze stocks',
    blurb: 'DIY research process using SEDAR+, MD&A, earnings, and peer tables.',
    priority: 'High',
    monetization: 'Soft hooks to brokers, screeners, Research Playbook ebook',
    image: '/images/investing/categories/analyze.jpg',
    imageAlt: 'Editorial illustration of a research desk with an open unmarked notebook, a pencil, and a magnifying glass over a simple unlabelled bar chart',
  },
  {
    slug: 'valuation',
    name: 'Valuation & multiples',
    blurb: 'Plain-English multiples and methods in a CAD/TSX context — relative vs intrinsic without fake precision.',
    priority: 'High',
    monetization: 'Screener affiliates + valuation ebook funnel',
    image: '/images/investing/categories/valuation.jpg',
    imageAlt: 'Editorial illustration of a teal balance scale weighing a generic factory building against coins and abstract bars',
  },
  {
    slug: 'dividends',
    name: 'Dividends & income investing',
    blurb: 'TSX-heavy dividend literacy: coverage, aristocrats rules, traps, and account-location effects.',
    priority: 'High',
    monetization: 'Dividend tracker/broker affiliates + income ebook',
    image: '/images/investing/categories/dividends.jpg',
    imageAlt: 'Editorial illustration of a teal potted plant beside a bowl catching falling unmarked coins',
  },
  {
    slug: 'accounts',
    name: 'Accounts & tax location',
    blurb: 'TFSA/RRSP/FHSA/taxable location for stocks and dividends — investor angle only.',
    priority: 'High',
    monetization: 'Broker transfer affiliates + account-location ebook chapter',
    image: '/images/investing/categories/accounts.jpg',
    imageAlt: 'Editorial illustration of four unmarked teal and slate jars in a row on a cream desk with a faint maple-leaf shadow',
  },
  {
    slug: 'process',
    name: 'Risk, portfolio & DIY process',
    blurb: 'Position sizing, behaviour, concentration, and process risk controls for active DIY pickers.',
    priority: 'High',
    monetization: 'DIY Process ebook + light broker tool hooks',
    image: '/images/investing/categories/process.jpg',
    imageAlt: 'Editorial illustration of a teal compass and smooth stones of different sizes linked by a winding teal thread',
  },
  {
    slug: 'glossary',
    name: 'Metrics glossary',
    blurb: 'One metric or concept per long-form explainer — answer-engine entity pages.',
    priority: 'High',
    monetization: 'AdSense density + soft playbook CTAs',
    image: '/images/investing/categories/glossary.jpg',
    imageAlt: 'Editorial illustration of an open reference book with blank ornamental pages, a mint bookmark, and blank index cards',
  },
  {
    slug: 'sectors',
    name: 'Sector literacy deep-dives',
    blurb: 'Evergreen sector×concept posts that complement living /sectors/ hubs.',
    priority: 'High',
    monetization: 'Sector engagement + screener affiliates',
    image: '/images/investing/categories/sectors.jpg',
    imageAlt: 'Editorial illustration of five small landscape tiles showing a railway, hydro tower, mine headframe, buildings, and forest',
  },
  {
    slug: 'brokers-tools',
    name: 'Brokerages & tools literacy',
    blurb: 'Education-first brokerage and tool literacy — workflows, FX drag, data limits.',
    priority: 'Med',
    monetization: 'Primary affiliate surface (brokers, screeners, charting)',
    image: '/images/investing/categories/brokers-tools.jpg',
    imageAlt: 'Editorial illustration of a teal laptop with an abstract unlabelled dashboard, a calculator, and a blank notepad on a cream desk',
  },
  {
    slug: 'indexes-etfs',
    name: 'Canadian indexes & ETFs',
    blurb: 'Benchmarks and ETF building blocks for stock pickers — not product spam.',
    priority: 'Med',
    monetization: 'Light broker affiliates when discussing how to buy',
    image: '/images/investing/categories/indexes-etfs.jpg',
    imageAlt: 'Editorial illustration of mixed teal and slate building-block tiles gathered into one tidy block inside a shallow basket',
  },
  {
    slug: 'primers',
    name: 'Company / industry primers',
    blurb: 'Evergreen business-model primers for liquid TSX names — parents for dated briefs.',
    priority: 'Med',
    monetization: 'Ads + cross-sell related stock summaries',
    image: '/images/investing/categories/primers.jpg',
    imageAlt: 'Editorial illustration of an unlabelled architectural blueprint of a generic factory and office beside a closed teal booklet',
  },
  {
    slug: 'frameworks',
    name: 'Myths, mistakes & frameworks',
    blurb: 'Debunkings and decision cards that compress judgment lessons into shareable posts.',
    priority: 'Med',
    monetization: 'Soft ebook CTA + brand trust',
    image: '/images/investing/categories/frameworks.jpg',
    imageAlt: 'Editorial illustration of a tangle of loose threads beside a wooden board showing a blank empty decision framework',
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
