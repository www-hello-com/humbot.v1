import type { Bot } from '@/features/bots/schemas';
import { formatUsd } from '@/utils/format';

/**
 * Get CSS class name for PnL value
 */
export function pnlClass(pnl?: number): string {
  if (pnl === undefined || pnl === null) return 'pnl-neutral';
  if (pnl > 0) return 'pnl-positive';
  if (pnl < 0) return 'pnl-negative';
  return 'pnl-neutral';
}

/**
 * Format PnL value for display
 */
export function pnlText(pnl?: number): string {
  if (pnl === undefined || pnl === null) return 'N/A';
  const formatted = formatUsd(pnl);
  return pnl > 0 ? `+${formatted}` : formatted;
}

/**
 * Get status badge className
 */
export function getStatusClassName(status: Bot['status']): string {
  return `status-badge ${status}`;
}
