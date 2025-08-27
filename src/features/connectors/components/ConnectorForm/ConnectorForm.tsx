import { useState } from 'react';
import type { Connector, ConnectorCredential } from '@/features/connectors/schemas';
import { formatDate } from '@/utils/format';
import { addCredential } from '@/features/connectors/api';
import { 
  validateCredentials, 
  getApiKeyPlaceholder, 
  requiresPassphrase,
  getSuccessMessage 
} from './utils';
import styles from './ConnectorForm.module.css';

interface ConnectorFormProps {
  connectors: Connector[];
  onSuccess?: () => void;
}

function ConnectorItem({ connector }: { connector: Connector }) {
  const getStatusClass = (status: Connector['status']) => {
    switch (status) {
      case 'connected': return 'status-badge running';
      case 'disconnected': return 'status-badge idle'; 
      case 'error': return 'status-badge stopped';
      default: return 'status-badge';
    }
  };

  return (
    <div className={styles.connectorItem}>
      <div className={styles.connectorInfo}>
        <div className={styles.connectorName}>{connector.name}</div>
        <div className={styles.connectorType}>
          {connector.type.replace('_', ' ')}
        </div>
      </div>
      <div className={styles.connectorStatus}>
        <span className={getStatusClass(connector.status)}>
          {connector.status}
        </span>
        {connector.lastConnected && (
          <div className={styles.lastConnected}>
            Last: {formatDate(connector.lastConnected)}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ConnectorForm({ connectors, onSuccess }: ConnectorFormProps) {
  const [formData, setFormData] = useState<Partial<ConnectorCredential>>({
    connectorId: '',
    apiKey: '',
    apiSecret: '',
    passphrase: '',
    sandbox: false,
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState<string>('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateCredentials(formData);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setSuccess('');
      return;
    }

    setSubmitting(true);
    setErrors([]);
    setSuccess('');

    try {
      await addCredential(formData as ConnectorCredential);
      setSuccess(getSuccessMessage(formData.connectorId!));
      setFormData({
        connectorId: '',
        apiKey: '',
        apiSecret: '',
        passphrase: '',
        sandbox: false,
      });
      onSuccess?.();
    } catch (error) {
      setErrors([error instanceof Error ? error.message : 'Failed to add credentials']);
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      connectorId: '',
      apiKey: '',
      apiSecret: '',
      passphrase: '',
      sandbox: false,
    });
    setErrors([]);
    setSuccess('');
  };

  const availableConnectors = connectors.filter(c => c.status === 'disconnected');

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h3 className={styles.formTitle}>Add Exchange Credentials</h3>
        
        {errors.length > 0 && (
          <div className={styles.errorList}>
            <div className={styles.errorTitle}>Please fix the following errors:</div>
            {errors.map((error, index) => (
              <div key={index} className={styles.errorItem}>• {error}</div>
            ))}
          </div>
        )}

        {success && (
          <div className={styles.successMessage}>
            {success}
          </div>
        )}

        <div className={styles.formGrid}>
          <div className="form-group">
            <label className="form-label">Exchange</label>
            <select
              className="form-input"
              value={formData.connectorId}
              onChange={(e) => setFormData(prev => ({ ...prev, connectorId: e.target.value }))}
              disabled={submitting}
            >
              <option value="">Select Exchange</option>
              {availableConnectors.map(connector => (
                <option key={connector.id} value={connector.id}>
                  {connector.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formRow}>
            <div className="form-group">
              <label className="form-label">API Key</label>
              <input
                type="text"
                className="form-input"
                value={formData.apiKey}
                onChange={(e) => setFormData(prev => ({ ...prev, apiKey: e.target.value }))}
                placeholder={getApiKeyPlaceholder(formData.connectorId || '')}
                disabled={submitting}
              />
            </div>

            <div className="form-group">
              <label className="form-label">API Secret</label>
              <input
                type="password"
                className="form-input"
                value={formData.apiSecret}
                onChange={(e) => setFormData(prev => ({ ...prev, apiSecret: e.target.value }))}
                placeholder="Your API Secret"
                disabled={submitting}
              />
            </div>
          </div>

          {formData.connectorId && requiresPassphrase(formData.connectorId) && (
            <div className="form-group">
              <label className="form-label">Passphrase</label>
              <input
                type="password"
                className="form-input"
                value={formData.passphrase}
                onChange={(e) => setFormData(prev => ({ ...prev, passphrase: e.target.value }))}
                placeholder="Your API Passphrase"
                disabled={submitting}
              />
            </div>
          )}

          <div className="form-group">
            <label className="form-label">
              <input
                type="checkbox"
                checked={formData.sandbox}
                onChange={(e) => setFormData(prev => ({ ...prev, sandbox: e.target.checked }))}
                disabled={submitting}
                style={{ marginRight: 'var(--spacing-xs)' }}
              />
              Use Sandbox Mode (for testing)
            </label>
          </div>
        </div>

        <div className={styles.formActions}>
          <button 
            type="submit" 
            className={`btn btn-primary ${styles.submitButton}`}
            disabled={submitting}
          >
            {submitting ? 'Adding...' : 'Add Credentials'}
          </button>
          <button 
            type="button" 
            onClick={handleReset}
            className={`btn ${styles.resetButton}`}
            disabled={submitting}
          >
            Reset
          </button>
        </div>
      </form>

      <div className={styles.connectorList}>
        <h3>Available Connectors</h3>
        {connectors.map(connector => (
          <ConnectorItem key={connector.id} connector={connector} />
        ))}
      </div>
    </div>
  );
}
