import { z } from 'zod';
import { api } from '@/services/apiClient';
import { Bot } from './schemas';

// TODO: Replace with real Hummingbot API calls
const MOCK_BOTS: Bot[] = [
  {
    id: '1',
    name: 'BTCUSDT_PMM_v1',
    status: 'running',
    pnl: 127.45,
    updatedAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 minutes ago
  },
  {
    id: '2', 
    name: 'ETHUSDT_Grid_v2',
    status: 'stopped',
    pnl: -23.67,
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
  },
  {
    id: '3',
    name: 'SOLUSDT_Arbitrage',
    status: 'idle',
    pnl: 0,
    updatedAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
  },
];

/**
 * Fetch all bots
 */
export async function fetchBots(): Promise<Bot[]> {
  try {
    // TODO: Uncomment when real API is ready
    // const response = await api<Bot[]>('/api/bots');
    // return z.array(Bot).parse(response);
    
    // Mock implementation
    await new Promise(resolve => setTimeout(resolve, 300)); // Simulate API delay
    return z.array(Bot).parse(MOCK_BOTS);
  } catch (error) {
    console.error('Failed to fetch bots:', error);
    throw error;
  }
}

/**
 * Start a bot (TODO: implement when actions are needed)
 */
export async function startBot(id: string): Promise<void> {
  try {
    // TODO: Implement real API call
    // await api(`/api/bots/${id}/start`, { method: 'POST' });
    console.log(`Starting bot ${id} (mock)`);
  } catch (error) {
    console.error('Failed to start bot:', error);
    throw error;
  }
}

/**
 * Stop a bot (TODO: implement when actions are needed)
 */
export async function stopBot(id: string): Promise<void> {
  try {
    // TODO: Implement real API call
    // await api(`/api/bots/${id}/stop`, { method: 'POST' });
    console.log(`Stopping bot ${id} (mock)`);
  } catch (error) {
    console.error('Failed to stop bot:', error);
    throw error;
  }
}
