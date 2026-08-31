"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import api from "@/lib/api";

type OrderItem = {
  product: { _id: string; slug?: string } | string | null;
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
  createdAt: string;
};

const formatMoney = (amount: number, currency: string) =>
  new Intl.NumberFormat(undefined, { style: "currency", currency: currency.toUpperCase() }).format(amount);

const productId = (p: OrderItem["product"]) => (typeof p === "string" ? p : p?._id);

export default function OrderDetailPage() {
  const params = useParams<{ id: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    api
      .get(`/api/orders/${params.id}`)
      .then((res) => {
        if (!cancelled) setOrder(res.data.data);
      })
      .catch(() => {
        if (!cancelled) toast.error("Unable to load this order");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [params.id]);

  const download = async (id: string) => {
    setDownloadingId(id);
    try {
      const res = await api.get(`/api/products/${id}/download`);
      window.open(res.data.data.url, "_blank");
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Download link is not available right now");
    } finally {
      setDownloadingId(null);
    }
  };

  if (loading) return <p className="font-body text-sm text-[#8B7B7E]">Loading order...</p>;
  if (!order) return null;

  return (
    <div>
      <Link href="/account/orders" className="font-body text-sm text-[#8B7B7E] hover:text-[#3A101A]">
        ← Back to orders
      </Link>

      <h1 className="mt-4 font-display text-2xl text-[#3A101A]">Order #{order._id.slice(-8)}</h1>
      <p className="mt-1 font-body text-sm text-[#8B7B7E]">{new Date(order.createdAt).toLocaleString()}</p>

      <div className="mt-8 divide-y divide-[#4A1521]/5 rounded-xl border border-[#4A1521]/10 bg-white">
        {order.items.map((item, i) => {
          const id = productId(item.product);
          const canDownload = order.status === "paid" && (item.format === "ebook" || item.format === "both") && id;
          return (
            <div key={i} className="flex items-center justify-between px-5 py-4">
              <div>
                <p className="font-body text-sm font-medium text-[#3A101A]">{item.title}</p>
                <p className="mt-0.5 font-body text-xs capitalize text-[#8B7B7E]">
                  {item.format} · Qty {item.quantity}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-body text-sm text-[#66575A]">
                  {formatMoney(item.price * item.quantity, order.currency)}
                </span>
                {canDownload && (
                  <button
                    type="button"
                    disabled={downloadingId === id}
                    onClick={() => download(id as string)}
                    className="rounded-md bg-[#4A1521] px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-wide text-white disabled:opacity-50"
                  >
                    {downloadingId === id ? "Preparing..." : "Download"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex justify-end font-body text-sm font-semibold text-[#3A101A]">
        Total: {formatMoney(order.subtotal, order.currency)}
      </div>
    </div>
  );
}