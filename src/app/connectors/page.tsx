'use client';

import ConnectorForm from '@/features/connectors/components/ConnectorForm/ConnectorForm';
import { useConnectors } from '@/features/connectors/hooks';

export default function ConnectorsPage() {
  const { connectors, loading, error, refetch } = useConnectors();

  if (loading) {
    return <div>Loading connectors...</div>;
  }

  if (error) {
    return (
      <div>
        <h1>Connectors</h1>
        <div className="card" style={{ textAlign: 'center', color: 'var(--color-danger)' }}>
          Error loading connectors: {error}
          <br />
          <button onClick={refetch} className="btn btn-primary" style={{ marginTop: 'var(--spacing-md)' }}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Exchange Connectors</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-xl)' }}>
        Connect your exchange accounts to enable automated trading. Your credentials are stored securely.
      </p>
      
      <ConnectorForm connectors={connectors} onSuccess={refetch} />
    </div>
  );
}
