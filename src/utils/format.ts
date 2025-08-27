/**
 * Format a number as USD currency
 */
export function formatUsd(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/**
 * Format a number as a quantity with appropriate decimal places
 */
export function formatQty(value: number, decimals: number = 6): string {
  // Remove trailing zeros after formatting
  return parseFloat(value.toFixed(decimals)).toString();
}

/**
 * Format a percentage value
 */
export function formatPercent(value: number): string {
  return `${(value * 100).toFixed(2)}%`;
}

/**
 * Format a timestamp to a readable date string
 */
export function formatDate(timestamp: string | number | Date): string {
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}
