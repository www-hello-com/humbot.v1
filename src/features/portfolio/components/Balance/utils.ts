import type { Balance } from '@/features/portfolio/schemas';
import { formatUsd, formatQty } from '@/utils/format';

/**
 * Calculate total balance (free + locked)
 */
export function getTotalBalance(balance: Balance): number {
  return balance.free + balance.locked;
}

/**
 * Format asset quantity for display
 */
export function formatAssetQty(balance: Balance): string {
  const total = getTotalBalance(balance);
  return formatQty(total, getDecimalPlaces(balance.asset));
}

/**
 * Get appropriate decimal places for different assets
 */
function getDecimalPlaces(asset: string): number {
  // Common decimal places for different asset types
  const stablecoins = ['USDT', 'USDC', 'BUSD', 'DAI'];
  const majorCoins = ['BTC', 'ETH'];
  
  if (stablecoins.includes(asset)) return 2;
  if (majorCoins.includes(asset)) return 8;
  return 6; // Default for altcoins
}

/**
 * Calculate total USD value of all balances
 */
export function getTotalUsdValue(balances: Balance[]): number {
  return balances.reduce((sum, balance) => {
    return sum + (balance.usdValue || 0);
  }, 0);
}
