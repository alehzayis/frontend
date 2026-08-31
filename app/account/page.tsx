"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import api from "@/lib/api";
import { useMe } from "./layout";
import { Package, Truck, CheckCircle2, Clock, LucideIcon } from "lucide-react";

type OrderItem = {
  product: { _id: string; images?: { url: string }[]; slug?: string } | string | null;
  title: string;
  price: number;
  quantity: number;
  format: string;
};

type Order = {
  _id: string;
  items: OrderItem[];
  subtotal: number;
  currency: string;
  status: string;
  fulfillmentStatus: string;
  createdAt: string;
};

type Product = {
  _id: string;
  slug: string;
  title: string;
  price: number;
  images: { url: string }[];
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

const greeting = () => {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
};

export default function AccountOverviewPage() {
  const me = useMe();
  const [orders, setOrders] = useState<Order[]>([]);
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    Promise.all([api.get("/api/orders"), api.get("/api/products", { params: { sort: "newest", limit: 4 } })])
      .then(([ordersRes, productsRes]) => {
        if (cancelled) return;
        setOrders(ordersRes.data.data);
        setNewArrivals(productsRes.data.data);
      })
      .catch(() => {
        if (!cancelled) toast.error("Unable to load your dashboard");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return <p className="font-body text-sm text-[#8B7B7E]">Loading...</p>;
  }

  const totalOrders = orders.length;
  const inTransit = orders.filter((o) => o.status === "paid" && o.fulfillmentStatus === "shipped").length;
  const delivered = orders.filter((o) => o.fulfillmentStatus === "delivered").length;
  const pendingPayment = orders.filter((o) => o.status === "pending").length;

  const currentOrder = orders.find((o) => o.status === "paid" && o.fulfillmentStatus !== "delivered");
  const recent = orders.slice(0, 5);

  const firstItem = currentOrder?.items[0];
  const currentOrderCover =
    firstItem?.product && typeof firstItem.product === "object" ? firstItem.product.images?.[0]?.url : undefined;

  return (
    <div>
      <h1 className="font-display text-2xl text-[#3A101A]">
        {greeting()}, {me?.name?.split(" ")[0]} 👋
      </h1>
      <p className="mt-1 font-body text-sm text-[#8B7B7E]">Here&apos;s what&apos;s happening with your account.</p>

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard icon={Package} label="Total Orders" value={totalOrders} />
        <StatCard icon={Truck} label="In Transit" value={inTransit} />
        <StatCard icon={CheckCircle2} label="Delivered" value={delivered} />
        <StatCard icon={Clock} label="Pending Payment" value={pendingPayment} />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-[#4A1521]/10 bg-white p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg text-[#3A101A]">Current Order</h2>
            <Link href="/account/orders" className="font-body text-xs font-medium text-[#4A1521] hover:underline">
              View all orders →
            </Link>
          </div>

          {currentOrder ? (
            <Link
              href={`/account/orders/${currentOrder._id}`}
              className="mt-4 flex items-center gap-4 rounded-lg border border-[#4A1521]/10 p-4 hover:bg-[#F8F3EA]"
            >
              <div className="h-20 w-14 shrink-0 overflow-hidden rounded bg-[#F8F3EA]">
                {currentOrderCover && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={currentOrderCover} alt="" className="h-full w-full object-cover" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-body text-sm font-medium text-[#3A101A]">{firstItem?.title}</p>
                <p className="mt-1 font-body text-xs text-[#8B7B7E]">
                  Order #{currentOrder._id.slice(-8)} · {new Date(currentOrder.createdAt).toLocaleDateString()}
                </p>
                <span
                  className={`mt-2 inline-flex rounded-full px-2.5 py-0.5 font-body text-xs font-medium capitalize ${
                    currentOrder.fulfillmentStatus === "shipped"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {currentOrder.fulfillmentStatus}
                </span>
              </div>
            </Link>
          ) : (
            <p className="mt-4 font-body text-sm text-[#8B7B7E]">Nothing currently in progress.</p>
          )}
        </div>

        <div className="rounded-xl border border-[#4A1521]/10 bg-white p-6">
          <h2 className="font-display text-lg text-[#3A101A]">New Arrivals</h2>
          <div className="mt-4 space-y-3">
            {newArrivals.length === 0 && (
              <p className="font-body text-sm text-[#8B7B7E]">Nothing new right now.</p>
            )}
            {newArrivals.slice(0, 4).map((p) => (
              <Link key={p._id} href={`/shop/${p.slug}`} className="flex items-center gap-3 hover:opacity-80">
                <div className="h-14 w-10 shrink-0 overflow-hidden rounded bg-[#F8F3EA]">
                  {p.images?.[0]?.url && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.images[0].url} alt="" className="h-full w-full object-cover" />
                  )}
                </div>
                <div className="min-w-0">
                  <p className="truncate font-body text-sm text-[#3A101A]">{p.title}</p>
                  <p className="font-body text-xs text-[#8B7B7E]">{formatMoney(p.price, "usd")}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-[#4A1521]/10 bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg text-[#3A101A]">Recent Orders</h2>
          <Link href="/account/orders" className="font-body text-xs font-medium text-[#4A1521] hover:underline">
            View all →
          </Link>
        </div>

        {recent.length === 0 ? (
          <p className="mt-4 font-body text-sm text-[#8B7B7E]">You haven&apos;t placed any orders yet.</p>
        ) : (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full font-body text-sm">
              <thead>
                <tr className="border-b border-[#4A1521]/10 text-left text-xs uppercase tracking-wide text-[#8B7B7E]">
                  <th className="pb-2">Order</th>
                  <th className="pb-2">Date</th>
                  <th className="pb-2">Amount</th>
                  <th className="pb-2">Status</th>
                  <th className="pb-2" />
                </tr>
              </thead>
              <tbody className="divide-y divide-[#4A1521]/5">
                {recent.map((order) => (
                  <tr key={order._id}>
                    <td className="py-3 text-[#3A101A]">#{order._id.slice(-8)}</td>
                    <td className="py-3 text-[#66575A]">{new Date(order.createdAt).toLocaleDateString()}</td>
                    <td className="py-3 text-[#3A101A]">{formatMoney(order.subtotal, order.currency)}</td>
                    <td className="py-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${
                          STATUS_STYLES[order.status] || "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 text-right">
                      <Link
                        href={`/account/orders/${order._id}`}
                        className="text-xs font-medium text-[#4A1521] hover:underline"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: number }) {
  return (
    <div className="rounded-xl border border-[#4A1521]/10 bg-white p-5">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#C59B27]/15 text-[#4A1521]">
        <Icon className="h-[18px] w-[18px]" />
      </div>
      <p className="mt-3 font-display text-2xl text-[#3A101A]">{value}</p>
      <p className="font-body text-xs text-[#8B7B7E]">{label}</p>
    </div>
  );
}