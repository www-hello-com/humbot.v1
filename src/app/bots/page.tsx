import BotTable from "@/features/bots/components/BotTable/BotTable";

const mock = [
  { id: "1", name: "mm-BTC-USDT", status: "running" as const, pnl: 103.78, updatedAt: "2025-08-28 02:05" },
  { id: "2", name: "arb-ETH-BNB",  status: "stopped" as const, pnl: -12.41, updatedAt: "2025-08-27 18:10" },
  { id: "3", name: "grid-SOL-USDC", status: "running" as const, pnl: 4.19, updatedAt: "2025-08-28 01:59" },
];

export default function BotsPage(){
  return (
    <main>
      <h1>Bots</h1>
      <BotTable rows={mock}/>
    </main>
  );
}
