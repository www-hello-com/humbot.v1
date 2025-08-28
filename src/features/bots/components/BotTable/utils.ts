export type BotRow = { id: string; name: string; status: "running"|"stopped"|"error"; pnl?: number; updatedAt?: string };

export function pnlClass(n?: number){
  if (n == null) return "";
  return n >= 0 ? "pos" : "neg";
}
export function fmtUsd(n?: number){
  if (n == null) return "—";
  return new Intl.NumberFormat(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(n);
}
