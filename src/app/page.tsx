import Link from "next/link";

export default function Home() {
  const stats = [
    { label: "Active Bots", value: "3", change: "+1" },
    { label: "Total PnL", value: "$103.78", change: "+12.3%" },
    { label: "Portfolio Value", value: "$30,232.24", change: "+2.1%" },
    { label: "Connected Exchanges", value: "2", change: "0" },
  ];

  const quickActions = [
    { href: "/bots", label: "View Bots", description: "Monitor your trading bots" },
    { href: "/portfolio", label: "Check Portfolio", description: "View your balances" },
    { href: "/connectors", label: "Add Exchange", description: "Connect new exchanges" },
    { href: "/settings", label: "Settings", description: "Configure your dashboard" },
  ];

  return (
    <div>
      <h1>Dashboard Overview</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: 'var(--spacing-md)', 
        marginBottom: 'var(--spacing-xl)' 
      }}>
        {stats.map((stat) => (
          <div key={stat.label} className="card">
            <div style={{ 
              fontSize: 'var(--font-size-sm)', 
              color: 'var(--color-text-secondary)', 
              marginBottom: 'var(--spacing-xs)' 
            }}>
              {stat.label}
            </div>
            <div style={{ 
              fontSize: 'var(--font-size-2xl)', 
              fontWeight: '700', 
              marginBottom: 'var(--spacing-xs)' 
            }}>
              {stat.value}
            </div>
            <div style={{ 
              fontSize: 'var(--font-size-sm)', 
              color: stat.change.startsWith('+') ? 'var(--color-success)' : 'var(--color-text-secondary)' 
            }}>
              {stat.change !== "0" && stat.change}
            </div>
          </div>
        ))}
      </div>

      <h2>Quick Actions</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: 'var(--spacing-md)' 
      }}>
        {quickActions.map((action) => (
          <Link key={action.href} href={action.href} className="card" style={{ textDecoration: 'none' }}>
            <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>
              {action.label}
            </h3>
            <p style={{ 
              color: 'var(--color-text-secondary)', 
              margin: 0,
              fontSize: 'var(--font-size-sm)' 
            }}>
              {action.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
