'use client';

import { useState, useEffect } from 'react';
import env from '@/config/env';

export default function SettingsPage() {
  const [apiBaseUrl, setApiBaseUrl] = useState(env.apiBaseUrl);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // Load saved API URL from localStorage
    const savedUrl = localStorage.getItem('apiBaseUrl');
    if (savedUrl) {
      setApiBaseUrl(savedUrl);
    }
  }, []);

  const handleSave = () => {
    if (apiBaseUrl === env.apiBaseUrl) {
      // Remove from localStorage if using default
      localStorage.removeItem('apiBaseUrl');
    } else {
      // Save custom URL to localStorage
      localStorage.setItem('apiBaseUrl', apiBaseUrl);
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = () => {
    setApiBaseUrl(env.apiBaseUrl);
    localStorage.removeItem('apiBaseUrl');
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <h1>Settings</h1>
      
      <div className="card" style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h3>API Configuration</h3>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-md)' }}>
          Configure the base URL for your Hummingbot API server.
        </p>
        
        <div className="form-group">
          <label className="form-label">API Base URL</label>
          <input
            type="url"
            className="form-input"
            value={apiBaseUrl}
            onChange={(e) => setApiBaseUrl(e.target.value)}
            placeholder="http://localhost:8080"
          />
          <small style={{ color: 'var(--color-text-secondary)' }}>
            Default: {env.apiBaseUrl}
          </small>
        </div>

        <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-md)' }}>
          <button onClick={handleSave} className="btn btn-primary">
            Save Changes
          </button>
          <button onClick={handleReset} className="btn">
            Reset to Default
          </button>
        </div>

        {saved && (
          <div style={{ 
            marginTop: 'var(--spacing-md)', 
            color: 'var(--color-success)',
            fontSize: 'var(--font-size-sm)' 
          }}>
            ✓ Settings saved successfully
          </div>
        )}
      </div>

      <div className="card">
        <h3>Telegram Notifications</h3>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Configure Telegram bot notifications for trading alerts and status updates.
        </p>
        <div style={{ 
          marginTop: 'var(--spacing-md)', 
          padding: 'var(--spacing-md)', 
          backgroundColor: 'var(--color-warning-bg)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-warning)',
          color: 'var(--color-warning)'
        }}>
          🚧 Telegram integration coming soon
        </div>
      </div>
    </div>
  );
}
