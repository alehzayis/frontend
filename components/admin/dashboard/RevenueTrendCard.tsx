"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import Sparkline from "./Sparkline";
import { DashboardStats, formatCurrency } from "./types";

export default function RevenueTrendCard({
  stats,
  series,
}: {
  stats: DashboardStats;
  series: { date: string; value: number }[];
}) {
  const isUp = stats.revenueChangePct >= 0;
  const trendColor = isUp ? "#3F7D4B" : "#A03B3B";

  return (
    <div className="h-full rounded-[14px] border border-[#4A1521]/10 bg-white p-[18px]">
      <div className="flex items-start justify-between gap-[10px]">
        <div>
          <div className="font-body text-[0.72rem] uppercase tracking-[0.08em] text-[#8B7B7E]">Revenue this month</div>
          <div className="mt-[4px] font-display text-[1.9rem] text-[#3A101A]">
            {formatCurrency(stats.revenueThisMonth)}
          </div>
        </div>
        <span
          className="mt-[2px] inline-flex shrink-0 items-center gap-[4px] rounded-full px-[9px] py-[4px] font-body text-[0.76rem] font-semibold"
          style={{ backgroundColor: `${trendColor}1A`, color: trendColor }}
        >
          {isUp ? <TrendingUp size={13} strokeWidth={2.2} /> : <TrendingDown size={13} strokeWidth={2.2} />}
          {Math.abs(stats.revenueChangePct)}%
        </span>
      </div>

      <div className="mt-[8px] font-body text-[0.78rem] text-[#8B7B7E]">
        vs {formatCurrency(stats.revenueLastMonth)} last month &middot; {stats.ordersThisMonth} orders this month
      </div>

      <Sparkline data={series} color={trendColor} />
    </div>
  );
}
