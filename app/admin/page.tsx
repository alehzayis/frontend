"use client";

import { useEffect, useState } from "react";
import { BookOpen, DollarSign, FileText, Users } from "lucide-react";
import StatCard from "@/components/StatCard";
import api from "@/lib/api";
import RevenueTrendCard from "@/components/admin/dashboard/RevenueTrendCard";
import TimeSeriesChart from "@/components/admin/dashboard/TimeSeriesChart";
import RankedBarChart from "@/components/admin/dashboard/RankedBarChart";
import OrderStatusBreakdown from "@/components/admin/dashboard/OrderStatusBreakdown";
import SubmissionFunnel from "@/components/admin/dashboard/SubmissionFunnel";
import RecentOrdersTable from "@/components/admin/dashboard/RecentOrdersTable";
import LowStockTable from "@/components/admin/dashboard/LowStockTable";
import { DashboardData , formatCurrency, formatNumber} from "@/components/admin/dashboard/types";


export default function AdminDashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    api
      .get("/api/dashboard")
      .then((res) => setData(res.data.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="font-display text-3xl text-[#3A101A]">Overview</h1>
          <p className="mt-1 font-body text-sm text-[#66575A]">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="font-display text-3xl text-[#3A101A]">Overview</h1>
          <p className="mt-1 font-body text-sm text-[#A03B3B]">Unable to load dashboard data. Please refresh.</p>
        </div>
      </div>
    );
  }

  const stats = [
    { label: "Total Books", value: data.stats.totalBooks, icon: BookOpen },
    { label: "Active Users", value: data.stats.activeUsers, icon: Users },
    { label: "Manuscripts", value: data.stats.manuscripts, icon: FileText },
    { label: "Revenue", value: formatCurrency(data.stats.revenue), icon: DollarSign },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl text-[#3A101A]">Overview</h1>
        <p className="mt-1 font-body text-sm text-[#66575A]">A quick look at what's happening across the platform.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueTrendCard
            stats={data.stats}
            series={data.revenueByDay.map((d) => ({ date: d.date, value: d.revenue }))}
          />
        </div>
        <SubmissionFunnel data={data.submissionStatusBreakdown} />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <TimeSeriesChart
          title="Revenue"
          data={data.revenueByDay.map((d) => ({ date: d.date, value: d.revenue }))}
          color="#C59B27"
          valueFormatter={(n) => `$${n.toLocaleString()}`}
        />
        <TimeSeriesChart
          title="New Users"
          data={data.newUsersByDay.map((d) => ({ date: d.date, value: d.count }))}
          color="#4A1521"
          valueFormatter={formatNumber}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <RankedBarChart
          title="Top Selling Books"
          data={data.topProducts.map((p) => ({ label: p.title, value: p.revenue, secondary: `${p.unitsSold} sold` }))}
          color="#C59B27"
          valueFormatter={(n) => `$${n.toLocaleString()}`}
        />
        <OrderStatusBreakdown data={data.orderStatusBreakdown} />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <RecentOrdersTable orders={data.recentOrders} />
        <LowStockTable items={data.lowStock} />
      </div>
    </div>
  );
}