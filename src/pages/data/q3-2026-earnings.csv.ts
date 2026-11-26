import type { APIRoute } from 'astro';
import { getEarningsRows, toCsv } from '../../lib/earnings-q3-2026';

export const GET: APIRoute = async () => {
  const rows = await getEarningsRows();
  return new Response(toCsv(rows), {
    headers: { 'Content-Type': 'text/csv; charset=utf-8' },
  });
};
