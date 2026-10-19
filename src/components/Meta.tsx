import { SITE } from "@/lib/site";

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function Crumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
        <ol className="flex flex-wrap gap-x-2">
          {items.map((item, index) => (
            <li key={item.label} className="flex gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {item.href ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            ...(item.href ? { item: `${SITE.url}${item.href}` } : {}),
          })),
        }}
      />
    </>
  );
}
