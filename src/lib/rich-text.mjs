const LINK = /\[([^\]\n]+)\]\((https:\/\/[^)\s]+)\)/g;

export function splitRichText(text) {
  const parts = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    parts.push({ label: match[1], href: match[2] });
    last = match.index + match[0].length;
  }
  if (last < text.length || parts.length === 0) parts.push(text.slice(last));
  return parts;
}
