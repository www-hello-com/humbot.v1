import type { Bot } from '@/features/bots/schemas';
import { formatDate } from '@/utils/format';
import { pnlClass, pnlText, getStatusClassName } from './utils';
import styles from './BotTable.module.css';

interface BotTableProps {
  bots: Bot[];
  loading?: boolean;
  error?: string | null;
  onRetry?: () => void;
}

export default function BotTable({ bots, loading, error, onRetry }: BotTableProps) {
  if (loading) {
    return (
      <div className={styles.tableContainer}>
        <div className={styles.loadingState}>
          Loading bots...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorState}>
        <div>Error loading bots: {error}</div>
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

  if (bots.length === 0) {
    return (
      <div className={styles.tableContainer}>
        <div className={styles.emptyState}>
          <div className={styles.emptyStateTitle}>No bots found</div>
          <div>Start by creating your first trading bot.</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.tableContainer}>
      <table className={`table ${styles.table}`}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>PnL</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {bots.map((bot) => (
            <tr key={bot.id}>
              <td className={styles.nameCell}>{bot.name}</td>
              <td>
                <span className={getStatusClassName(bot.status)}>
                  {bot.status}
                </span>
              </td>
              <td className={`${styles.pnlCell} ${pnlClass(bot.pnl)}`}>
                {pnlText(bot.pnl)}
              </td>
              <td className={styles.timeCell}>
                {bot.updatedAt ? formatDate(bot.updatedAt) : 'N/A'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
