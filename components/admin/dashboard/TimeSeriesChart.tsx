"use client";

import { useRef, useState } from "react";
import { formatDateShort } from "./types";

export default function TimeSeriesChart({
  title,
  data,
  color,
  valueFormatter,
}: {
  title: string;
  data: { date: string; value: number }[];
  color: string;
  valueFormatter: (n: number) => string;
}) {
  const width = 560;
  const height = 170;
  const padding = { top: 16, right: 10, bottom: 8, left: 10 };
  const innerW = width - padding.left - padding.right;
  const innerH = height - padding.top - padding.bottom;

  const max = Math.max(1, ...data.map((d) => d.value));

  const points = data.map((d, i) => {
    const x = padding.left + (innerW * i) / Math.max(1, data.length - 1);
    const y = padding.top + innerH - (innerH * d.value) / max;
    return { x, y, ...d };
  });

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
  const last = points[points.length - 1];
  const first = points[0];
  const areaPath = `${linePath} L ${last.x.toFixed(1)} ${(padding.top + innerH).toFixed(1)} L ${first.x.toFixed(1)} ${(
    padding.top + innerH
  ).toFixed(1)} Z`;

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const onMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = ((e.clientX - rect.left) / rect.width) * width;
    let closest = 0;
    let closestDist = Infinity;
    points.forEach((p, i) => {
      const dist = Math.abs(p.x - relX);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    setHoverIndex(closest);
  };

  const hovered = hoverIndex !== null ? points[hoverIndex] : null;
  const gridValues = [0, max / 2, max];

  return (
    <div className="rounded-[14px] border border-[#4A1521]/10 bg-white p-[18px]">
      <div className="flex items-baseline justify-between">
        <h3 className="font-body text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-[#8B6816]">{title}</h3>
        <span className="font-body text-[0.72rem] text-[#8B7B7E]">Last 30 days</span>
      </div>

      <div className="relative mt-[6px]">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${width} ${height}`}
          className="w-full cursor-crosshair"
          onMouseMove={onMove}
          onMouseLeave={() => setHoverIndex(null)}
        >
          {gridValues.map((v, i) => {
            const y = padding.top + innerH - (innerH * v) / (max || 1);
            return (
              <line
                key={i}
                x1={padding.left}
                x2={width - padding.right}
                y1={y}
                y2={y}
                stroke="#4A1521"
                strokeOpacity={0.08}
                strokeWidth={1}
              />
            );
          })}

          <path d={areaPath} fill={color} fillOpacity={0.1} stroke="none" />
          <path d={linePath} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />

          {hovered && (
            <line
              x1={hovered.x}
              x2={hovered.x}
              y1={padding.top}
              y2={padding.top + innerH}
              stroke="#4A1521"
              strokeOpacity={0.25}
              strokeWidth={1}
            />
          )}

          <circle cx={last.x} cy={last.y} r={4} fill={color} stroke="#fff" strokeWidth={2} />
          {hovered && hoverIndex !== data.length - 1 && (
            <circle cx={hovered.x} cy={hovered.y} r={4} fill={color} stroke="#fff" strokeWidth={2} />
          )}
        </svg>

        {hovered && (
          <div
            className="pointer-events-none absolute top-0 z-10 -translate-x-1/2 -translate-y-full rounded-[6px] border border-[#4A1521]/10 bg-[#3A101A] px-[10px] py-[6px] text-center shadow-[0_6px_16px_rgba(0,0,0,0.18)]"
            style={{ left: `${(hovered.x / width) * 100}%` }}
          >
            <div className="font-body text-[0.78rem] font-semibold text-[#FFF9EF]">{valueFormatter(hovered.value)}</div>
            <div className="font-body text-[0.64rem] text-[#FFF9EF]/70">{formatDateShort(hovered.date)}</div>
          </div>
        )}

        <div className="mt-[2px] flex justify-between font-body text-[0.68rem] text-[#8B7B7E]">
          <span>{formatDateShort(first?.date)}</span>
          <span className="font-semibold text-[#3A101A]">{valueFormatter(last?.value || 0)}</span>
          <span>{formatDateShort(last?.date)}</span>
        </div>
      </div>

      <details className="mt-[10px]">
        <summary className="cursor-pointer font-body text-[0.72rem] text-[#8B6816]">View as table</summary>
        <div className="mt-[8px] max-h-[160px] overflow-y-auto">
          <table className="w-full text-left font-body text-[0.74rem]">
            <thead>
              <tr className="text-[#8B7B7E]">
                <th className="pb-[4px] font-medium">Date</th>
                <th className="pb-[4px] font-medium">Value</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => (
                <tr key={d.date} className="border-t border-[#4A1521]/5">
                  <td className="py-[3px] tabular-nums text-[#66575A]">{d.date}</td>
                  <td className="py-[3px] tabular-nums text-[#3A101A]">{valueFormatter(d.value)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  );
}
