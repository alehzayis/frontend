"use client";

import Pill from "./OrdersPill";

type Order = {
  _id: string;
  user: { name: string; email: string } | null;
  items: { quantity: number }[];
  subtotal: number;
  currency: string;
  status: string;
  fulfillmentStatus: string;
  createdAt: string;
};

type Props = {
  orders: Order[];
  loading: boolean;
  onSelect: (id: string) => void;
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
};

const formatMoney = (amount: number, currency: string) =>
  new Intl.NumberFormat(undefined, { style: "currency", currency: currency.toUpperCase() }).format(amount);

export default function OrdersTable({ orders, loading, onSelect, page, pages, onPageChange }: Props) {
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
          <tr>
            <th className="px-4 py-3">Order</th>
            <th className="px-4 py-3">Customer</th>
            <th className="px-4 py-3">Items</th>
            <th className="px-4 py-3">Total</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Fulfillment</th>
            <th className="px-4 py-3">Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {loading ? (
            <tr>
              <td colSpan={7} className="px-4 py-6 text-center text-slate-400">
                Loading orders...
              </td>
            </tr>
          ) : orders.length === 0 ? (
            <tr>
              <td colSpan={7} className="px-4 py-6 text-center text-slate-400">
                No orders found
              </td>
            </tr>
          ) : (
            orders.map((order) => {
              const itemCount = order.items.reduce((n, i) => n + i.quantity, 0);
              return (
                <tr key={order._id} onClick={() => onSelect(order._id)} className="cursor-pointer hover:bg-slate-50">
                  <td className="px-4 py-3 font-mono text-xs text-slate-500">#{order._id.slice(-8)}</td>
                  <td className="px-4 py-3 text-slate-900">
                    {order.user ? (
                      <>
                        <div className="font-medium">{order.user.name}</div>
                        <div className="text-xs text-slate-400">{order.user.email}</div>
                      </>
                    ) : (
                      <span className="text-slate-400">Deleted user</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    {itemCount} item{itemCount === 1 ? "" : "s"}
                  </td>
                  <td className="px-4 py-3 font-medium text-slate-900">{formatMoney(order.subtotal, order.currency)}</td>
                  <td className="px-4 py-3">
                    <Pill value={order.status} />
                  </td>
                  <td className="px-4 py-3">
                    <Pill value={order.fulfillmentStatus} />
                  </td>
                  <td className="px-4 py-3 text-slate-500">{new Date(order.createdAt).toLocaleDateString()}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      {pages > 1 && (
        <div className="flex items-center justify-end gap-2 border-t border-slate-100 px-4 py-3">
          <button
            type="button"
            disabled={page === 1}
            onClick={() => onPageChange(page - 1)}
            className="rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-600 disabled:opacity-40"
          >
            Previous
          </button>
          <span className="text-sm text-slate-500">
            Page {page} of {pages}
          </span>
          <button
            type="button"
            disabled={page === pages}
            onClick={() => onPageChange(page + 1)}
            className="rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-600 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}