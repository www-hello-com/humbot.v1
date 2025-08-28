"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./Header.module.css";
import { isActive } from "./utils";

export default function Header() {
  const pathname = usePathname();
  const items = [
    { href: "/bots", label: "Bots" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/connectors", label: "Connectors" },
    { href: "/settings", label: "Settings" },
  ];

  return (
    <header className={s.wrap}>
      <div className={s.inner}>
        <div className={s.brand}>Hummingbot Dashboard</div>
        <div className={s.spacer} />
        <nav className={s.nav}>
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className={`${s.link} ${isActive(pathname, it.href) ? s.linkActive : ""}`}
            >
              {it.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
