import { BookOpen, Users, FileText, DollarSign } from "lucide-react";
import StatCard from "@/components/StatCard";
const stats = [
  { label: "Total Books", value: 48, icon: BookOpen },
  { label: "Active Users", value: 312, icon: Users },
  { label: "Manuscripts", value: 15, icon: FileText },
  { label: "Revenue", value: "$12,480", icon: DollarSign },
];

export default function AdminDashboardPage() {
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

      <div className="rounded-sm border border-[#4A1521]/10 bg-white p-6">
        <h2 className="font-display text-xl text-[#3A101A]">Recent Activity</h2>
        <p className="mt-2 font-body text-sm text-[#66575A]">Nothing to show yet.</p>
      </div>
    </div>
  );
}