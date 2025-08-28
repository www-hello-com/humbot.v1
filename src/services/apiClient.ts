export class ApiError extends Error {
  status: number; body?: unknown;
  constructor(status:number, message:string, body?:unknown){
    super(message); this.status=status; this.body=body;
  }
}

const BASE = process.env.NEXT_PUBLIC_API_BASE ?? "http://localhost:8080";

async function safeJson(res: Response){
  try { return await res.json(); } catch { return await res.text(); }
}

export async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });
  if (!res.ok) throw new ApiError(res.status, res.statusText, await safeJson(res));
  return res.json() as Promise<T>;
}
