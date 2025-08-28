export type Conn = { name: string; type: "cex"|"dex"; desc?: string };
export const caption = (c: Conn) => (c.type === "cex" ? "Centralized Exchange" : "Decentralized Exchange");
