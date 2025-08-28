export default function Home() {
  const cards = [
    { title: "Active Bots", value: "3", delta: "+1" },
    { title: "Total PnL", value: "$103.78", delta: "+12.3%" },
    { title: "Portfolio Value", value: "$30,232.24", delta: "+2.1%" },
    { title: "Connected Exchanges", value: "2", delta: "" },
  ];

  return (
    <main>
      <h1>Dashboard Overview</h1>
      <div className="grid" style={{ marginTop: 16 }}>
        {cards.map((c, i) => (
          <div key={i} className="card col-3" style={{ padding: 16 }}>
            <h2>{c.title}</h2>
            <div style={{ fontSize: 24, fontWeight: 800, marginTop: 8 }}>{c.value}</div>
            {c.delta && <div style={{ color: "#8fe1a0", marginTop: 6 }}>{c.delta}</div>}
          </div>
        ))}
      </div>

      <div className="grid" style={{ marginTop: 20 }}>
        <div className="card col-6" style={{ padding: 16 }}>
          <h2>Quick Actions</h2>
          <p><a href="/bots">View Bots</a> · <a href="/portfolio">Check Portfolio</a></p>
        </div>
        <div className="card col-6" style={{ padding: 16 }}>
          <h2>Setup</h2>
          <p><a href="/connectors">Add Exchange</a> · <a href="/settings">Settings</a></p>
        </div>
      </div>
    </main>
  );
}
