// Turns a paragraph that starts with a "Watch on YouTube" link to a landscape
// video (youtu.be/<id> or youtube.com/watch?v=<id>) into a responsive embedded
// player, keeping the original paragraph as a small caption. Shorts links are
// left alone.
const ID_RE = /(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([A-Za-z0-9_-]{11})/;

function textOf(node) {
  if (node.type === 'text') return node.value;
  return (node.children || []).map(textOf).join('');
}

function walk(node) {
  if (!node.children) return;
  node.children = node.children.map((child) => {
    if (child.type === 'element' && child.tagName === 'p') {
      const first = (child.children || []).find((c) => !(c.type === 'text' && !c.value.trim()));
      if (first && first.type === 'element' && first.tagName === 'a' &&
          /watch on youtube/i.test(textOf(first))) {
        const m = String(first.properties?.href || '').match(ID_RE);
        if (m) {
          const id = m[1];
          const title = (child.children.find((c) => c.type === 'element' && c.tagName === 'em') &&
            textOf(child.children.find((c) => c.type === 'element' && c.tagName === 'em'))) ||
            'StockSummarizer video';
          return {
            type: 'element', tagName: 'figure', properties: { className: ['video-embed'] },
            children: [
              {
                type: 'element', tagName: 'div', properties: { className: ['video-frame'] },
                children: [{
                  type: 'element', tagName: 'iframe',
                  properties: {
                    src: `https://www.youtube-nocookie.com/embed/${id}?rel=0`,
                    title, loading: 'lazy', frameBorder: '0',
                    allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
                    referrerPolicy: 'strict-origin-when-cross-origin', allowFullScreen: true,
                  },
                  children: [],
                }],
              },
              { type: 'element', tagName: 'figcaption', properties: {}, children: child.children },
            ],
          };
        }
      }
    }
    walk(child);
    return child;
  });
}

export default function rehypeYoutubeEmbed() {
  return (tree) => walk(tree);
}
