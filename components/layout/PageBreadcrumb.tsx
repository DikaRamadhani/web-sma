import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageBreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function PageBreadcrumb({ items }: PageBreadcrumbProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-500">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={`${item.label}-${index}`}>
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-red-600 transition">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-gray-800" : ""}>{item.label}</span>
            )}
            {!isLast && <span className="mx-2">&gt;</span>}
          </span>
        );
      })}
    </div>
  );
}
