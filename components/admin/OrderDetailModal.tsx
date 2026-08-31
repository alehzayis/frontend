"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import api from "@/lib/api";
import Pill from "./OrdersPill";

type OrderDetail = {
  _id: string;
  user: { name: string; email: string } | null;
  items: { title: string; price: number; quantity: number; format: string }[];
  subtotal: number;
  currency: string;
  status: string;
  fulfillmentStatus: string;
  createdAt: string;
};

type Props = {
  orderId: string;
  onClose: () => void;
  onUpdated: () => void;
};

const formatMoney = (amount: number, currency: string) =>
  new Intl.NumberFormat(undefined, { style: "currency", currency: currency.toUpperCase() }).format(amount);

export default function OrderDetailModal({ orderId, onClose, onUpdated }: Props) {
  const [order, setOrder] = useState<OrderDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  const load = () => {
    setLoading(true);
    api
      .get(`/api/orders/admin/${orderId}`)
      .then((res) => setOrder(res.data.data))
      .catch(() => toast.error("Unable to load order"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, [orderId]);

  const runAction = async (fn: () => Promise<unknown>, successMessage: string) => {
    setActionLoading(true);
    try {
      await fn();
      toast.success(successMessage);
      load();
      onUpdated();
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    } finally {
      setActionLoading(false);
    }
  };

  const markFulfillment = (fulfillmentStatus: string) =>
    runAction(() => api.patch(`/api/orders/admin/${orderId}/fulfillment`, { fulfillmentStatus }), "Order updated");

  const cancelOrder = () => runAction(() => api.post(`/api/orders/admin/${orderId}/cancel`), "Order cancelled");

  const refundOrder = () => {
    if (!window.confirm("Refund this order through Stripe? This cannot be undone.")) return;
    runAction(() => api.post(`/api/orders/admin/${orderId}/refund`), "Order refunded");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6" onClick={(e) => e.stopPropagation()}>
        {loading || !order ? (
          <p className="text-sm text-slate-400">Loading...</p>
        ) : (
          <>
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Order #{order._id.slice(-8)}</h2>
                <p className="mt-1 text-sm text-slate-500">{new Date(order.createdAt).toLocaleString()}</p>
              </div>
              <button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-600">
                ✕
              </button>
            </div>

            <div className="mt-4 flex gap-2">
              <Pill value={order.status} />
              <Pill value={order.fulfillmentStatus} />
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-slate-700">Customer</h3>
              {order.user ? (
                <p className="mt-1 text-sm text-slate-600">
                  {order.user.name} — {order.user.email}
                </p>
              ) : (
                <p className="mt-1 text-sm text-slate-400">Account no longer exists</p>
              )}
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-slate-700">Items</h3>
              <div className="mt-2 divide-y divide-slate-100 rounded-lg border border-slate-100">
                {order.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between px-3 py-2 text-sm">
                    <div>
                      <div className="text-slate-900">{item.title}</div>
                      <div className="text-xs capitalize text-slate-400">
                        {item.format} · Qty {item.quantity}
                      </div>
                    </div>
                    <div className="text-slate-700">{formatMoney(item.price * item.quantity, order.currency)}</div>
                  </div>
                ))}
              </div>
              <div className="mt-2 flex justify-end text-sm font-semibold text-slate-900">
                Total: {formatMoney(order.subtotal, order.currency)}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
              {order.status === "paid" && order.fulfillmentStatus === "unfulfilled" && (
                <button
                  type="button"
                  disabled={actionLoading}
                  onClick={() => markFulfillment("shipped")}
                  className="rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white disabled:opacity-50"
                >
                  Mark as Shipped
                </button>
              )}
              {order.status === "paid" && order.fulfillmentStatus === "shipped" && (
                <button
                  type="button"
                  disabled={actionLoading}
                  onClick={() => markFulfillment("delivered")}
                  className="rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white disabled:opacity-50"
                >
                  Mark as Delivered
                </button>
              )}
              {order.status === "pending" && (
                <button
                  type="button"
                  disabled={actionLoading}
                  onClick={cancelOrder}
                  className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 disabled:opacity-50"
                >
                  Cancel Order
                </button>
              )}
              {order.status === "paid" && (
                <button
                  type="button"
                  disabled={actionLoading}
                  onClick={refundOrder}
                  className="rounded-md border border-red-200 px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 disabled:opacity-50"
                >
                  Refund
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}