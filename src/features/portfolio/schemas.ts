import { z } from 'zod';

export const Balance = z.object({
  exchange: z.string(),
  asset: z.string(),
  free: z.number(),
  locked: z.number(),
  usdValue: z.number().optional(),
});

export type Balance = z.infer<typeof Balance>;
