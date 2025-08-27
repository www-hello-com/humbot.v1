import { useState, useEffect } from 'react';
import type { Bot } from './schemas';
import { fetchBots } from './api';

/**
 * Hook to fetch and manage bots data
 */
export function useBots() {
  const [bots, setBots] = useState<Bot[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadBots = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchBots();
      setBots(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load bots');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBots();
  }, []);

  return {
    bots,
    loading,
    error,
    refetch: loadBots,
  };
}
