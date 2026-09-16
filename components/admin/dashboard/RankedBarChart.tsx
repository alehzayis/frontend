"use client";

import { useState } from "react";

export default function RankedBarChart({
  title,
  data,
  color,
  valueFormatter,
}: {
  title: string;
  data: { label: string; value: number; secondary?: string }[];
  color: string;
  valueFormatter: (n: number) => string;
}) {
  const max = Math.max(1, ...data.map((d) => d.value));
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="rounded-[14px] border border-[#4A1521]/10 bg-white p-[18px]">
      <h3 className="font-body text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-[#8B6816]">{title}</h3>

      {data.length === 0 ? (
        <p className="mt-[10px] font-body text-[0.82rem] text-[#8B7B7E]">No sales yet.</p>
      ) : (
        <div className="mt-[14px] space-y-[12px]">
          {data.map((d, i) => (
            <div key={d.label + i} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
              <div className="mb-[3px] flex items-baseline justify-between gap-[8px] font-body text-[0.78rem]">
                <span className="truncate text-[#3A101A]">{d.label}</span>
                <span className="shrink-0 font-semibold tabular-nums text-[#3A101A]">{valueFormatter(d.value)}</span>
              </div>
              <div className="h-[10px] w-full overflow-hidden rounded-full bg-[#F8F3EA]">
                <div
                  className="h-full rounded-full transition-[width,opacity] duration-300"
                  style={{
                    width: `${Math.max(4, (d.value / max) * 100)}%`,
                    backgroundColor: color,
                    opacity: hovered === null || hovered === i ? 1 : 0.45,
                  }}
                />
              </div>
              {d.secondary && <div className="mt-[2px] font-body text-[0.68rem] text-[#8B7B7E]">{d.secondary}</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
