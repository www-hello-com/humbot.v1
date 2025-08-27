import { z } from 'zod';

export const BotStatus = z.enum(['running', 'stopped', 'idle']);

export const Bot = z.object({
  id: z.string(),
  name: z.string(),
  status: BotStatus,
  pnl: z.number().optional(),
  updatedAt: z.string().optional(),
});

export type Bot = z.infer<typeof Bot>;
export type BotStatus = z.infer<typeof BotStatus>;
