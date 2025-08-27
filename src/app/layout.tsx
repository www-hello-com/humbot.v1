import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Hummingbot Dashboard",
  description: "Monitor and control your Hummingbot trading bots",
};

function Navigation() {
  const navItems = [
    { href: "/", label: "Overview" },
    { href: "/bots", label: "Bots" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/connectors", label: "Connectors" },
    { href: "/settings", label: "Settings" },
  ];

  return (
    <nav className="nav">
      <div className="container">
        <ul className="nav-list">
          <li>
            <Link href="/" className="nav-link">
              <strong>Hummingbot Dashboard</strong>
            </Link>
          </li>
          {navItems.slice(1).map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="nav-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="main-content">
          <div className="container">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
