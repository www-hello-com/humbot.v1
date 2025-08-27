import { useState, useEffect } from 'react';
import type { Connector } from './schemas';
import { fetchConnectors } from './api';

/**
 * Hook to fetch and manage connectors data
 */
export function useConnectors() {
  const [connectors, setConnectors] = useState<Connector[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadConnectors = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchConnectors();
      setConnectors(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load connectors');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadConnectors();
  }, []);

  return {
    connectors,
    loading,
    error,
    refetch: loadConnectors,
  };
}
