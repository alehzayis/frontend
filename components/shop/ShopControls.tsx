"use client";

import { LayoutGrid, List, ClipboardList, Search } from "lucide-react";

export type ViewMode = "grid" | "rows" | "orderForm";

export const SORT_OPTIONS = [
  { value: "newest", label: "Newest" },
  { value: "popular", label: "Popular" },
  { value: "bestSellers", label: "Best Sellers" },
  { value: "freeDownloads", label: "Free Downloads" },
  { value: "titleAsc", label: "A–Z" },
  { value: "titleDesc", label: "Z–A" },
  { value: "priceDesc", label: "Price: High to Low" },
  { value: "priceAsc", label: "Price: Low to High" },
] as const;

type Props = {
  search: string;
  onSearchChange: (value: string) => void;
  sort: string;
  onSortChange: (value: string) => void;
  view: ViewMode;
  onViewChange: (view: ViewMode) => void;
};

export default function ShopControls({ search, onSearchChange, sort, onSortChange, view, onViewChange }: Props) {
  return (
    <div className="flex flex-col gap-[12px] sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full sm:max-w-[320px]">
        <Search size={16} strokeWidth={1.6} className="absolute left-[12px] top-1/2 -translate-y-1/2 text-[#8B7B7E]" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search books, authors..."
          className="h-[42px] w-full rounded-[2px] border border-[#4A1521]/20 bg-white pl-[36px] pr-[12px] font-body text-[0.88rem] text-[#3A101A] outline-none focus:border-[#C59B27]"
        />
      </div>

      <div className="flex items-center gap-[10px]">
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="h-[42px] rounded-[2px] border border-[#4A1521]/20 bg-white px-[10px] font-body text-[0.85rem] text-[#3A101A] outline-none focus:border-[#C59B27]"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <div className="flex items-center rounded-[2px] border border-[#4A1521]/20 bg-white">
          {[
            { key: "grid" as const, icon: LayoutGrid },
            { key: "rows" as const, icon: List },
            { key: "orderForm" as const, icon: ClipboardList },
          ].map(({ key, icon: Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => onViewChange(key)}
              aria-label={key}
              className={`flex h-[40px] w-[40px] items-center justify-center ${
                view === key ? "bg-[#4A1521] text-[#FFF9EF]" : "text-[#4A1521]/60 hover:text-[#4A1521]"
              }`}
            >
              <Icon size={16} strokeWidth={1.6} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}