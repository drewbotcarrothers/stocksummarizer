import { getCollection } from 'astro:content';
import { SECTOR_EVERGREEN, GENERIC_EVERGREEN, sectorsForBrief, mentionsTicker, uniqLinks, type LinkItem } from './seo';

async function load() {
  const [briefs, sectors, investing, wraps] = await Promise.all([
    getCollection('briefs', ({ data }) => !data.draft),
    getCollection('sectors', ({ data }) => !data.draft),
    getCollection('investing', ({ data }) => !data.draft),
    getCollection('marketWrap', ({ data }) => !data.draft),
  ]);
  briefs.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  wraps.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return { briefs, sectors, investing, wraps };
}
type All = Awaited<ReturnType<typeof load>>;
const bLink = (b: All['briefs'][number]): LinkItem => ({ href: `/summaries/${b.id}/`, title: b.data.title, kind: `${b.data.ticker} summary` });
const sLink = (s: All['sectors'][number]): LinkItem => ({ href: `/sectors/${s.id}/`, title: s.data.title, kind: 'Sector deep dive' });
const iLink = (p: All['investing'][number]): LinkItem => ({ href: `/investing/${p.id}/`, title: p.data.title, kind: 'Investing guide' });
const iById = (all: All, ids: string[]) => ids.map((id) => all.investing.find((p) => p.id === id)).filter(Boolean).map((p) => iLink(p!));
const briefsInSector = (all: All, slug: string) => all.briefs.filter((b) => sectorsForBrief(b, all.sectors).includes(slug));

export async function relatedForBrief(id: string): Promise<LinkItem[]> {
  const all = await load();
  const brief = all.briefs.find((b) => b.id === id)!;
  const sec = sectorsForBrief(brief, all.sectors);
  const items: LinkItem[] = [];
  sec.forEach((s) => items.push(sLink(all.sectors.find((x) => x.id === s)!)));
  sec.forEach((s) => items.push(...iById(all, SECTOR_EVERGREEN[s] ?? [])));
  sec.forEach((s) => items.push(...briefsInSector(all, s).slice(0, 2).map(bLink)));
  items.push(...iById(all, GENERIC_EVERGREEN));
  return uniqLinks(items, `/summaries/${id}/`, 9);
}

export async function relatedForSector(id: string): Promise<LinkItem[]> {
  const all = await load();
  const items: LinkItem[] = [...briefsInSector(all, id).slice(0, 5).map(bLink), ...iById(all, SECTOR_EVERGREEN[id] ?? [])];
  items.push(...all.sectors.filter((s) => s.id !== id).slice(0, 3).map(sLink));
  items.push(...iById(all, GENERIC_EVERGREEN));
  return uniqLinks(items, `/sectors/${id}/`, 10);
}

export async function relatedForInvesting(id: string): Promise<LinkItem[]> {
  const all = await load();
  const items: LinkItem[] = [];
  const sec = Object.entries(SECTOR_EVERGREEN).filter(([, ids]) => ids.includes(id)).map(([s]) => s);
  sec.forEach((s) => {
    const sd = all.sectors.find((x) => x.id === s);
    if (sd) items.push(sLink(sd));
    items.push(...briefsInSector(all, s).slice(0, 3).map(bLink));
  });
  const cat = id.split('/')[0];
  items.push(...all.investing.filter((p) => p.id.startsWith(`${cat}/`) && p.id !== id).slice(0, 3).map(iLink));
  // Rotate through summaries/sectors so every evergreen links to some live examples.
  const h = [...id].reduce((a, c) => a + c.charCodeAt(0), 0);
  if (all.briefs.length) items.push(bLink(all.briefs[h % all.briefs.length]), bLink(all.briefs[(h + 7) % all.briefs.length]));
  if (all.sectors.length) items.push(sLink(all.sectors[h % all.sectors.length]));
  items.push(...iById(all, GENERIC_EVERGREEN));
  return uniqLinks(items, `/investing/${id}/`, 9);
}

export async function relatedForWrap(id: string, body?: string): Promise<LinkItem[]> {
  const all = await load();
  const items: LinkItem[] = [];
  items.push(...all.briefs.filter((b) => mentionsTicker(body, b.data.ticker)).slice(0, 4).map(bLink));
  const secHits = all.sectors.filter((s) => body?.toLowerCase().includes(s.data.sector.toLowerCase().split(/[ &/]/)[0]));
  items.push(...secHits.slice(0, 3).map(sLink));
  items.push(...all.wraps.filter((w) => w.id !== id).slice(0, 2).map((w) => ({ href: `/market-wrap/${w.id}/`, title: w.data.title, kind: 'Market wrap' })));
  items.push(...all.briefs.slice(0, 3).map(bLink));
  items.push(...iById(all, ['indexes-etfs/what-sp-tsx-composite-measures', 'indexes-etfs/canada-vs-sp-500-sector-weights', ...GENERIC_EVERGREEN]));
  return uniqLinks(items, `/market-wrap/${id}/`, 8);
}
