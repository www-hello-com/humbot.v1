import { z } from 'zod';
import { Balance } from './schemas';

// TODO: Replace with real Hummingbot API calls
const MOCK_BALANCES: Balance[] = [
  {
    exchange: 'Binance',
    asset: 'BTC',
    free: 0.15234567,
    locked: 0.0,
    usdValue: 9876.23,
  },
  {
    exchange: 'Binance',
    asset: 'ETH',
    free: 2.45678901,
    locked: 0.1,
    usdValue: 8234.56,
  },
  {
    exchange: 'Binance',
    asset: 'USDT',
    free: 5000.0,
    locked: 1500.0,
    usdValue: 6500.0,
  },
  {
    exchange: 'Coinbase',
    asset: 'SOL',
    free: 45.67890123,
    locked: 0.0,
    usdValue: 3421.45,
  },
  {
    exchange: 'Coinbase',
    asset: 'USDC',
    free: 2000.0,
    locked: 0.0,
    usdValue: 2000.0,
  },
];

/**
 * Fetch portfolio balances across all exchanges
 */
export async function fetchPortfolio(): Promise<Balance[]> {
  try {
    // TODO: Uncomment when real API is ready
    // const response = await api<Balance[]>('/api/portfolio');
    // return z.array(Balance).parse(response);
    
    // Mock implementation
    await new Promise(resolve => setTimeout(resolve, 400)); // Simulate API delay
    return z.array(Balance).parse(MOCK_BALANCES);
  } catch (error) {
    console.error('Failed to fetch portfolio:', error);
    throw error;
  }
}
