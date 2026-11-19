// Pulls the peer comparison tables out of a sector deep-dive's markdown body
// so they can be shown as standalone, embeddable pages (/peer-tables/).
export interface PeerTable {
  key: string;
  title: string;
  header: string[];
  align: ('left' | 'right' | 'center')[];
  rows: string[][];
  note?: string;
}

const KEYS: [RegExp, string][] = [
  [/overview/i, 'overview'],
  [/performance|returns/i, 'performance'],
  [/valuation|multiples/i, 'valuation'],
  [/dividend|yield|distribution/i, 'dividends'],
  [/analyst|target/i, 'analysts'],
];

function splitRow(line: string): string[] {
  return line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());
}

export function extractPeerTables(body: string): PeerTable[] {
  const lines = body.split('\n');
  const start = lines.findIndex((l) => /^## .*peer comparison/i.test(l));
  if (start < 0) return [];
  let end = lines.findIndex((l, i) => i > start && /^## /.test(l));
  if (end < 0) end = lines.length;
  const out: PeerTable[] = [];
  const used = new Set<string>();
  let title = '';
  for (let i = start + 1; i < end; i++) {
    const l = lines[i];
    if (/^### /.test(l)) { title = l.replace(/^### /, '').trim(); continue; }
    if (/^\|/.test(l) && i + 1 < end && /^\|\s*:?-/.test(lines[i + 1])) {
      const header = splitRow(l);
      const align = splitRow(lines[i + 1]).map((c) =>
        c.startsWith(':') && c.endsWith(':') ? 'center' : c.endsWith(':') ? 'right' : 'left',
      ) as PeerTable['align'];
      const rows: string[][] = [];
      let j = i + 2;
      for (; j < end && /^\|/.test(lines[j]); j++) rows.push(splitRow(lines[j]));
      let note: string | undefined;
      for (let k = j; k < end && k < j + 3; k++) {
        const t = lines[k].trim();
        if (!t) continue;
        if (/^\*[^*].*\*$/.test(t)) note = t.slice(1, -1);
        break;
      }
      let key = KEYS.find(([re]) => re.test(title))?.[1] ?? `table-${out.length + 1}`;
      if (used.has(key)) key = `${key}-${out.length + 1}`;
      used.add(key);
      out.push({ key, title: title || `Table ${out.length + 1}`, header, align, rows, note });
      i = j - 1;
    }
  }
  return out;
}

// Minimal inline markdown: escape HTML, then **bold**, *italic*, `code`.
export function inlineMd(s: string): string {
  return s
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>');
}
