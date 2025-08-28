import ConnectorList from "@/features/connectors/components/ConnectorList/ConnectorList";

const mock = [
  { name: "Binance", type: "cex" as const, desc: "Spot & Perp" },
  { name: "OKX",     type: "cex" as const, desc: "Spot & Perp" },
  { name: "Bybit",   type: "cex" as const, desc: "Perp" },
  { name: "Uniswap", type: "dex" as const, desc: "Ethereum" },
];

export default function ConnectorsPage(){
  return (
    <main>
      <h1>Connectors</h1>
      <ConnectorList items={mock}/>
    </main>
  );
}
