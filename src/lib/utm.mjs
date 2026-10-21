const SOURCE = "free-tools";

export function toolMedium(href) {
  const path = String(href).split(/[?#]/)[0];
  const tool = path.match(/\/tools\/([a-z0-9-]+)\/?$/);
  if (tool) return tool[1];
  if (/\/tools\/?$/.test(path)) return "hub";
  if (/\/guides(\/[^/]+)?\/?$/.test(path)) return "guides";
  if (/\/results(\/[^/]+)?\/?$/.test(path)) return "results";
  return "site";
}

export function withUtm(href, position) {
  const value = String(href);
  if (!value.startsWith("/")) return value;
  const hashAt = value.indexOf("#");
  const hash = hashAt >= 0 ? value.slice(hashAt) : "";
  const head = hashAt >= 0 ? value.slice(0, hashAt) : value;
  const queryAt = head.indexOf("?");
  const path = queryAt >= 0 ? head.slice(0, queryAt) : head;
  const query = queryAt >= 0 ? head.slice(queryAt + 1) : "";
  const params = new URLSearchParams(query);
  params.set("utm_source", SOURCE);
  params.set("utm_medium", toolMedium(value));
  params.set("utm_content", position);
  return `${path}?${params.toString()}${hash}`;
}
