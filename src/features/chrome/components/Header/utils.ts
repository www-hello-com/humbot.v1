export function isActive(pathname: string, href: string) {
  if (href === "/" && pathname === "/") return true;
  if (href !== "/" && pathname.startsWith(href)) return true;
  return false;
}
