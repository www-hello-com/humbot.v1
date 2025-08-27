import { useState, useEffect } from 'react';
import type { Balance } from './schemas';
import { fetchPortfolio } from './api';

/**
 * Hook to fetch and manage portfolio data
 */
export function usePortfolio() {
  const [balances, setBalances] = useState<Balance[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPortfolio = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchPortfolio();
      setBalances(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load portfolio');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPortfolio();
  }, []);

  return {
    balances,
    loading,
    error,
    refetch: loadPortfolio,
  };
}
