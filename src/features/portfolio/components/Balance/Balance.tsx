import type { Balance as BalanceType } from '@/features/portfolio/schemas';
import { formatUsd, formatQty } from '@/utils/format';
import { formatAssetQty, getTotalUsdValue } from './utils';
import styles from './Balance.module.css';

interface BalanceProps {
  balances: BalanceType[];
  loading?: boolean;
  error?: string | null;
  onRetry?: () => void;
}

function BalanceCard({ balance }: { balance: BalanceType }) {
  return (
    <div className={styles.balanceCard}>
      <div className={styles.balanceHeader}>
        <div>
          <div className={styles.exchangeName}>{balance.exchange}</div>
          <div className={styles.assetSymbol}>{balance.asset}</div>
        </div>
        {balance.usdValue && (
          <div className={styles.usdValue}>
            {formatUsd(balance.usdValue)}
          </div>
        )}
      </div>
      
      <div className={styles.balanceDetails}>
        <div className={styles.balanceItem}>
          <div className={styles.balanceLabel}>Total</div>
          <div className={styles.balanceValue}>
            {formatAssetQty(balance)}
          </div>
        </div>
        
        <div className={styles.balanceItem}>
          <div className={styles.balanceLabel}>Free</div>
          <div className={styles.balanceValue}>
            {formatQty(balance.free)}
          </div>
        </div>
        
        <div className={styles.balanceItem}>
          <div className={styles.balanceLabel}>Locked</div>
          <div className={styles.balanceValue}>
            {formatQty(balance.locked)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Balance({ balances, loading, error, onRetry }: BalanceProps) {
  if (loading) {
    return (
      <div className={styles.loadingState}>
        Loading portfolio...
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorState}>
        <div>Error loading portfolio: {error}</div>
        {onRetry && (
          <button 
            onClick={onRetry} 
            className={`btn btn-primary ${styles.retryButton}`}
          >
            Retry
          </button>
        )}
      </div>
    );
  }

  if (balances.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div>No balances found</div>
        <div>Connect your exchanges to view your portfolio.</div>
      </div>
    );
  }

  const totalUsdValue = getTotalUsdValue(balances);

  return (
    <div>
      {totalUsdValue > 0 && (
        <div className={styles.totalValue}>
          <div className={styles.totalLabel}>Total Portfolio Value</div>
          <div className={styles.totalAmount}>
            {formatUsd(totalUsdValue)}
          </div>
        </div>
      )}
      
      {balances.map((balance) => (
        <BalanceCard 
          key={`${balance.exchange}-${balance.asset}`} 
          balance={balance} 
        />
      ))}
    </div>
  );
}
