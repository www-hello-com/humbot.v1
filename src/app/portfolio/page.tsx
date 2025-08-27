'use client';

import Balance from '@/features/portfolio/components/Balance/Balance';
import { usePortfolio } from '@/features/portfolio/hooks';

export default function PortfolioPage() {
  const { balances, loading, error, refetch } = usePortfolio();

  return (
    <div>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: 'var(--spacing-lg)' 
      }}>
        <h1>Portfolio</h1>
        <button onClick={refetch} className="btn btn-primary">
          Refresh
        </button>
      </div>
      
      <Balance 
        balances={balances} 
        loading={loading} 
        error={error} 
        onRetry={refetch} 
      />
    </div>
  );
}
