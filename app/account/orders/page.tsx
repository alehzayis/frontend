"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import api from "@/lib/api";

type Order = {
  _id: string;
  items: { quantity: number }[];
  subtotal: number;
  currency: string;
  status: string;
  createdAt: string;
};

const formatMoney = (amount: number, currency: string) =>
  new Intl.NumberFormat(undefined, { style: "currency", currency: currency.toUpperCase() }).format(amount);

const STATUS_STYLES: Record<string, string> = {
  pending: "bg-amber-100 text-amber-800",
  paid: "bg-emerald-100 text-emerald-800",
  failed: "bg-red-100 text-red-800",
  cancelled: "bg-slate-200 text-slate-700",
  refunded: "bg-violet-100 text-violet-800",
};

export default function MyOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    api
      .get("/api/orders")
      .then((res) => {
        if (!cancelled) setOrders(res.data.data);
      })
      .catch(() => {
        if (!cancelled) toast.error("Unable to load your orders");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      <h1 className="font-display text-2xl text-[#3A101A]">My Orders</h1>

      {loading ? (
        <p className="mt-6 font-body text-sm text-[#8B7B7E]">Loading...</p>
      ) : orders.length === 0 ? (
        <p className="mt-6 font-body text-sm text-[#8B7B7E]">You haven&apos;t placed any orders yet.</p>
      ) : (
        <div className="mt-6 divide-y divide-[#4A1521]/5 rounded-xl border border-[#4A1521]/10 bg-white">
          {orders.map((order) => {
            const itemCount = order.items.reduce((n, i) => n + i.quantity, 0);
            return (
              <Link
                key={order._id}
                href={`/account/orders/${order._id}`}
                className="flex items-center justify-between px-5 py-4 hover:bg-[#F8F3EA]"
              >
                <div>
                  <p className="font-body text-sm font-medium text-[#3A101A]">Order #{order._id.slice(-8)}</p>
                  <p className="mt-0.5 font-body text-xs text-[#8B7B7E]">
                    {new Date(order.createdAt).toLocaleDateString()} · {itemCount} item{itemCount === 1 ? "" : "s"}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-body text-sm font-medium text-[#3A101A]">
                    {formatMoney(order.subtotal, order.currency)}
                  </span>
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 font-body text-xs font-medium capitalize ${
                      STATUS_STYLES[order.status] || "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}