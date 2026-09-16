"use client";

import { useRef, useState } from "react";
import { formatDateShort } from "./types";

export default function Sparkline({ data, color }: { data: { date: string; value: number }[]; color: string }) {
  const width = 240;
  const height = 40;
  const max = Math.max(1, ...data.map((d) => d.value));
  const min = Math.min(0, ...data.map((d) => d.value));

  const points = data.map((d, i) => {
    const x = (width * i) / Math.max(1, data.length - 1);
    const y = height - ((d.value - min) / (max - min || 1)) * height;
    return { x, y, ...d };
  });

  const linePoints = points.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");

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

  return (
    <div className="relative mt-[10px]">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        className="h-[36px] w-full cursor-crosshair"
        onMouseMove={onMove}
        onMouseLeave={() => setHoverIndex(null)}
      >
        <polyline
          points={linePoints}
          fill="none"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {hovered && (
          <>
            <line x1={hovered.x} x2={hovered.x} y1={0} y2={height} stroke={color} strokeOpacity={0.2} strokeWidth={1} />
            <circle cx={hovered.x} cy={hovered.y} r={4} fill={color} stroke="#fff" strokeWidth={2} />
          </>
        )}
      </svg>

      {hovered && (
        <div
          className="pointer-events-none absolute top-0 z-10 -translate-x-1/2 -translate-y-full rounded-[6px] border border-[#4A1521]/10 bg-[#3A101A] px-[9px] py-[5px] text-center shadow-[0_6px_16px_rgba(0,0,0,0.18)]"
          style={{ left: `${(hovered.x / width) * 100}%` }}
        >
          <div className="font-body text-[0.72rem] font-semibold text-[#FFF9EF]">${hovered.value.toLocaleString()}</div>
          <div className="font-body text-[0.6rem] text-[#FFF9EF]/70">{formatDateShort(hovered.date)}</div>
        </div>
      )}
    </div>
  );
}
