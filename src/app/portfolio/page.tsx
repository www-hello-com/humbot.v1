import Balance from "@/features/portfolio/components/Balance/Balance";

const mock = [
  { exchange: "binance", asset: "USDT", free: 10123.45, locked: 0, usdValue: 10123.45 },
  { exchange: "binance", asset: "BTC",  free: 0.1423,   locked: 0.001, usdValue: 9153.21 },
  { exchange: "okx",     asset: "ETH",  free: 1.87,     locked: 0, usdValue: 6350.58 },
  { exchange: "bybit",   asset: "SOL",  free: 23.4,     locked: 0, usdValue: 604.99 },
];

export default function PortfolioPage(){
  return (
    <main>
      <h1>Portfolio</h1>
      <Balance rows={mock}/>
    </main>
  );
}
