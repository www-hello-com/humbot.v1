import { z } from 'zod';

export const Connector = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  status: z.enum(['connected', 'disconnected', 'error']),
  lastConnected: z.string().optional(),
});

export const ConnectorCredential = z.object({
  connectorId: z.string(),
  apiKey: z.string(),
  apiSecret: z.string(),
  passphrase: z.string().optional(),
  sandbox: z.boolean().optional(),
});

export type Connector = z.infer<typeof Connector>;
export type ConnectorCredential = z.infer<typeof ConnectorCredential>;
