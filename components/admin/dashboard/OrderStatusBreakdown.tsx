"use client";

import { useState } from "react";
import { ORDER_STATUS_META } from "./types";

export default function OrderStatusBreakdown({ data }: { data: { status: string; count: number }[] }) {
  const total = data.reduce((sum, d) => sum + d.count, 0);
  const [hoveredStatus, setHoveredStatus] = useState<string | null>(null);

  return (
    <div className="rounded-[14px] border border-[#4A1521]/10 bg-white p-[18px]">
      <h3 className="font-body text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-[#8B6816]">Orders by Status</h3>

      {total === 0 ? (
        <p className="mt-[10px] font-body text-[0.82rem] text-[#8B7B7E]">No orders yet.</p>
      ) : (
        <>
          <div className="mt-[16px] flex h-[22px] w-full overflow-hidden rounded-[4px]">
            {data.map((d, i) => {
              const meta = ORDER_STATUS_META[d.status] || { label: d.status, color: "#8B7B7E" };
              const pct = (d.count / total) * 100;
              if (pct <= 0) return null;
              return (
                <div
                  key={d.status}
                  onMouseEnter={() => setHoveredStatus(d.status)}
                  onMouseLeave={() => setHoveredStatus(null)}
                  className="h-full transition-opacity"
                  style={{
                    width: `${pct}%`,
                    backgroundColor: meta.color,
                    opacity: hoveredStatus === null || hoveredStatus === d.status ? 1 : 0.4,
                    marginLeft: i === 0 ? 0 : "2px",
                  }}
                  title={`${meta.label}: ${d.count}`}
                />
              );
            })}
          </div>

          <div className="mt-[14px] flex flex-wrap gap-x-[16px] gap-y-[8px]">
            {data.map((d) => {
              const meta = ORDER_STATUS_META[d.status] || { label: d.status, color: "#8B7B7E" };
              return (
                <div key={d.status} className="flex items-center gap-[6px] font-body text-[0.76rem]">
                  <span className="h-[8px] w-[8px] shrink-0 rounded-full" style={{ backgroundColor: meta.color }} />
                  <span className="text-[#3A101A]">{meta.label}</span>
                  <span className="text-[#8B7B7E]">({d.count})</span>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
