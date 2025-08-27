'use client';

import BotTable from '@/features/bots/components/BotTable/BotTable';
import { useBots } from '@/features/bots/hooks';

export default function BotsPage() {
  const { bots, loading, error, refetch } = useBots();

  return (
    <div>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: 'var(--spacing-lg)' 
      }}>
        <h1>Trading Bots</h1>
        <button onClick={refetch} className="btn btn-primary">
          Refresh
        </button>
      </div>
      
      <BotTable 
        bots={bots} 
        loading={loading} 
        error={error} 
        onRetry={refetch} 
      />
    </div>
  );
}
