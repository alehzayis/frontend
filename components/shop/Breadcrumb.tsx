import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-[6px] font-body text-[0.8rem] text-[#8B7B7E]">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={`${item.label}-${index}`} className="flex items-center gap-[6px]">
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-[#4A1521]">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-[#4A1521]" : ""}>{item.label}</span>
            )}
            {!isLast && <ChevronRight size={13} strokeWidth={1.6} />}
          </span>
        );
      })}
    </nav>
  );
}