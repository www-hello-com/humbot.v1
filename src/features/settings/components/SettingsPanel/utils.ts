export function loadBase(): string {
  if (typeof window === "undefined") return "";
  return localStorage.getItem("apiBase") ?? "";
}
export function saveBase(v: string){
  if (typeof window === "undefined") return;
  localStorage.setItem("apiBase", v);
}
