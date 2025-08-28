import "@/styles/globals.css";
import Header from "@/features/chrome/components/Header/Header";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Hummingbot Dashboard" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
