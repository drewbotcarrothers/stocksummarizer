// Featured image helpers. A post's `image` frontmatter is a root-relative JPEG under
// /images/summaries/ (written by /workspace/stocksummarizer/tools/blog_featured_image.py),
// with sibling variants: <id>.webp (1280x720) and <id>-640.jpg / <id>-640.webp (640x360).
import { existsSync } from 'node:fs';
import { join } from 'node:path';

export const FEATURED_W = 1280;
export const FEATURED_H = 720;

const inPublic = (p: string) => existsSync(join(process.cwd(), 'public', p));

export interface FeaturedImage {
  src: string;
  jpgSrcset: string;
  webpSrcset?: string;
}

export function featuredImage(image?: string): FeaturedImage | undefined {
  if (!image) return undefined;
  const base = image.replace(/\.(jpe?g|png)$/i, '');
  const small = `${base}-640.jpg`;
  const jpg = [inPublic(small) ? `${small} 640w` : '', `${image} ${FEATURED_W}w`].filter(Boolean).join(', ');
  const webps = [
    inPublic(`${base}-640.webp`) ? `${base}-640.webp 640w` : '',
    inPublic(`${base}.webp`) ? `${base}.webp ${FEATURED_W}w` : '',
  ].filter(Boolean);
  return { src: image, jpgSrcset: jpg, webpSrcset: webps.length ? webps.join(', ') : undefined };
}
