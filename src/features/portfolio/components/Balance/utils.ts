export type Bal = { exchange: string; asset: string; free: number; locked: number; usdValue?: number };

export const assetName = (sym: string) => ({
  USDT: "Tether USD", BTC: "Bitcoin", ETH: "Ethereum", BNB: "Binance Coin", SOL: "Solana", USDC: "USD Coin"
}[sym] ?? sym);

export const fmt = (n: number, max=8) => new Intl.NumberFormat(undefined, { maximumFractionDigits: max }).format(n);
export const usd = (n?: number) => n == null ? "—" : new Intl.NumberFormat(undefined,{style:"currency",currency:"USD"}).format(n);
