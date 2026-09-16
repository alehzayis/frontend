import { DashboardData } from "./types";

export default function LowStockTable({ items }: { items: DashboardData["lowStock"] }) {
  return (
    <div className="rounded-[14px] border border-[#4A1521]/10 bg-white p-[18px]">
      <h3 className="font-body text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-[#8B6816]">Low Stock</h3>

      {items.length === 0 ? (
        <p className="mt-[10px] font-body text-[0.82rem] text-[#8B7B7E]">Everything is well stocked.</p>
      ) : (
        <ul className="mt-[12px] space-y-[10px]">
          {items.map((item) => (
            <li key={item.productId} className="flex items-center justify-between gap-[10px] font-body text-[0.8rem]">
              <span className="truncate text-[#3A101A]">{item.title}</span>
              <span
                className="shrink-0 rounded-full px-[8px] py-[3px] font-semibold tabular-nums"
                style={{
                  backgroundColor: item.stock === 0 ? "#A03B3B1A" : "#C59B271A",
                  color: item.stock === 0 ? "#A03B3B" : "#8B6816",
                }}
              >
                {item.stock === 0 ? "Out of stock" : `${item.stock} left`}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
