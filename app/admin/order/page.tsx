"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import api from "@/lib/api";
import OrdersFilters from "@/components/admin/OrdersFilters";
import OrdersTable from "@/components/admin/OrdersTable";
import OrderDetailModal from "@/components/admin/OrderDetailModal";


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

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 400);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    setPage(1);
  }, [status, debouncedSearch]);

  useEffect(() => {
    setLoading(true);
    api
      .get("/api/orders/admin", {
        params: { status: status || undefined, search: debouncedSearch || undefined, page },
      })
      .then((res) => {
        setOrders(res.data.data);
        setPages(res.data.pagination.pages);
      })
      .catch(() => toast.error("Unable to load orders"))
      .finally(() => setLoading(false));
  }, [status, debouncedSearch, page, refreshKey]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-slate-900">Orders</h1>

      <OrdersFilters status={status} onStatusChange={setStatus} search={search} onSearchChange={setSearch} />

      <OrdersTable
        orders={orders}
        loading={loading}
        onSelect={setSelectedId}
        page={page}
        pages={pages}
        onPageChange={setPage}
      />

      {selectedId && (
        <OrderDetailModal
          orderId={selectedId}
          onClose={() => setSelectedId(null)}
          onUpdated={() => setRefreshKey((k) => k + 1)}
        />
      )}
    </div>
  );
}