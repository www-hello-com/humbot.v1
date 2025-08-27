import type { ConnectorCredential } from '@/features/connectors/schemas';

/**
 * Validate form data before submission
 */
export function validateCredentials(data: Partial<ConnectorCredential>): string[] {
  const errors: string[] = [];

  if (!data.connectorId) {
    errors.push('Please select a connector');
  }

  if (!data.apiKey?.trim()) {
    errors.push('API Key is required');
  }

  if (!data.apiSecret?.trim()) {
    errors.push('API Secret is required');
  }

  return errors;
}

/**
 * Get placeholder text for API key field based on connector
 */
export function getApiKeyPlaceholder(connectorId: string): string {
  const placeholders: Record<string, string> = {
    binance: 'Your Binance API Key',
    coinbase_pro: 'Your Coinbase Pro API Key',
    kucoin: 'Your KuCoin API Key',
    uniswap: 'Not required for Uniswap',
  };

  return placeholders[connectorId] || 'Your API Key';
}

/**
 * Check if connector requires passphrase
 */
export function requiresPassphrase(connectorId: string): boolean {
  const requiresPassphraseConnectors = ['coinbase_pro', 'kucoin'];
  return requiresPassphraseConnectors.includes(connectorId);
}

/**
 * Get success message after credential submission
 */
export function getSuccessMessage(connectorId: string): string {
  return `Successfully added credentials for ${connectorId}. The connector will be available for trading shortly.`;
}
