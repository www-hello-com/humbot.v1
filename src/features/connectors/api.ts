import { z } from 'zod';
import type { ConnectorCredential } from './schemas';
import { Connector } from './schemas';

// TODO: Replace with real Hummingbot API calls
const MOCK_CONNECTORS: Connector[] = [
  {
    id: 'binance',
    name: 'Binance',
    type: 'centralized_exchange',
    status: 'connected',
    lastConnected: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
  },
  {
    id: 'coinbase_pro',
    name: 'Coinbase Pro',
    type: 'centralized_exchange', 
    status: 'connected',
    lastConnected: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
  },
  {
    id: 'uniswap',
    name: 'Uniswap V3',
    type: 'decentralized_exchange',
    status: 'disconnected',
  },
  {
    id: 'kucoin',
    name: 'KuCoin',
    type: 'centralized_exchange',
    status: 'error',
    lastConnected: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  },
];

/**
 * Fetch all available connectors
 */
export async function fetchConnectors(): Promise<Connector[]> {
  try {
    // TODO: Uncomment when real API is ready
    // const response = await api<Connector[]>('/api/connectors');
    // return z.array(Connector).parse(response);
    
    // Mock implementation
    await new Promise(resolve => setTimeout(resolve, 300));
    return z.array(Connector).parse(MOCK_CONNECTORS);
  } catch (error) {
    console.error('Failed to fetch connectors:', error);
    throw error;
  }
}

/**
 * Add credentials for a connector
 */
export async function addCredential(credential: ConnectorCredential): Promise<void> {
  try {
    // TODO: Implement real API call
    // await api('/api/connectors/credentials', {
    //   method: 'POST',
    //   body: JSON.stringify(credential),
    // });
    
    // Mock implementation
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log('Added credentials for connector:', credential.connectorId);
  } catch (error) {
    console.error('Failed to add credentials:', error);
    throw error;
  }
}
