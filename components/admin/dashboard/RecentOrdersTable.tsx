import StatusBadge from "./StatusBadge";
import { DashboardData, formatDateShort } from "./types";

export default function RecentOrdersTable({ orders }: { orders: DashboardData["recentOrders"] }) {
  return (
    <div className="rounded-[14px] border border-[#4A1521]/10 bg-white p-[18px]">
      <h3 className="font-body text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-[#8B6816]">Recent Orders</h3>

      {orders.length === 0 ? (
        <p className="mt-[10px] font-body text-[0.82rem] text-[#8B7B7E]">No orders yet.</p>
      ) : (
        <div className="mt-[12px] overflow-x-auto">
          <table className="w-full min-w-[440px] text-left font-body text-[0.8rem]">
            <thead>
              <tr className="border-b border-[#4A1521]/10 text-[0.68rem] uppercase tracking-[0.06em] text-[#8B7B7E]">
                <th className="pb-[8px] font-medium">Customer</th>
                <th className="pb-[8px] font-medium">Amount</th>
                <th className="pb-[8px] font-medium">Status</th>
                <th className="pb-[8px] font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o._id} className="border-b border-[#4A1521]/5 last:border-0">
                  <td className="py-[9px] pr-[10px] text-[#3A101A]">{o.customer}</td>
                  <td className="py-[9px] pr-[10px] tabular-nums text-[#3A101A]">${o.subtotal.toFixed(2)}</td>
                  <td className="py-[9px] pr-[10px]">
                    <StatusBadge status={o.status} />
                  </td>
                  <td className="py-[9px] tabular-nums text-[#8B7B7E]">{formatDateShort(o.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
