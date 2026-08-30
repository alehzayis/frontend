"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Pencil, Plus, Trash2 } from "lucide-react";
import api from "@/lib/api";

import StatusPill from "@/components/admin/StatusPill";
import ProductFormModal, { Product } from "@/components/admin/ProductFormModal";


const tabs = [
  { key: "all", label: "All" },
  { key: "published", label: "Published" },
  { key: "draft", label: "Draft" },
  { key: "archived", label: "Archived" },
] as const;

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["key"]>("all");
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Product | null>(null);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    api
      .get("/api/products/admin")
      .then((res) => setProducts(res.data.data))
      .catch(() => toast.error("Unable to load products"))
      .finally(() => setLoading(false));
  }, []);

  const remove = async (id: string) => {
    if (!window.confirm("Delete this product? This cannot be undone.")) return;

    const prev = products;
    setProducts((current) => current.filter((p) => p._id !== id));

    try {
      await api.delete(`/api/products/${id}`);
      toast.success("Product deleted");
    } catch {
      setProducts(prev);
      toast.error("Unable to delete product");
    }
  };

  const onSaved = (product: Product) => {
    setProducts((current) => {
      const exists = current.some((p) => p._id === product._id);
      return exists ? current.map((p) => (p._id === product._id ? product : p)) : [product, ...current];
    });
  };

  const openAdd = () => {
    setEditing(null);
    setFormOpen(true);
  };

  const openEdit = (product: Product) => {
    setEditing(product);
    setFormOpen(true);
  };

    const countFor = (key: (typeof tabs)[number]["key"]) =>
    key === "all" ? products.length : products.filter((p) => p.status === key).length;

  const visible = activeTab === "all" ? products : products.filter((p) => p.status === activeTab);

  return (
    <>
      {/* <Topbar title="Products" /> */}

      <div className="space-y-6 p-8">
        <div className="flex items-center justify-between border-b border-black/5">
          <div className="flex items-center gap-2">
            {tabs.map((tab) => {
              const active = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2.5 text-sm ${
                    active ? "border-b-2 border-[#1B2430] font-semibold text-[#1B2430]" : "text-[#1B2430]/50 hover:text-[#1B2430]"
                  }`}
                >
                                   {tab.label} ({countFor(tab.key)})
                </button>
              );
            })}
          </div>

          <button
            onClick={openAdd}
            className="mb-2 flex items-center gap-1.5 rounded-lg bg-[#1B2430] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            <Plus size={15} strokeWidth={2} />
            Add Product
          </button>
        </div>

        {loading ? (
          <p className="text-sm text-[#1B2430]/55">Loading...</p>
        ) : visible.length === 0 ? (
          <p className="text-sm text-[#1B2430]/55">No products here.</p>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-black/5 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-black/5 text-xs uppercase tracking-wide text-[#1B2430]/45">
                <tr>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Author</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Stock</th>
                  <th className="px-4 py-3">Format</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {visible.map((p) => (
                  <tr key={p._id} className="border-b border-black/5 last:border-0">
                    <td className="px-4 py-3 text-[#1B2430]">{p.title}</td>
                    <td className="px-4 py-3 text-[#1B2430]/60">{p.author}</td>
                    <td className="px-4 py-3 text-[#1B2430]/60">${p.price.toFixed(2)}</td>
                    <td className="px-4 py-3 text-[#1B2430]/60">{p.format === "ebook" ? "—" : p.stock ?? 0}</td>
                    <td className="px-4 py-3 capitalize text-[#1B2430]/60">{p.format}</td>
                    <td className="px-4 py-3">
                      <StatusPill status={p.status} />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <button onClick={() => openEdit(p)} className="text-[#1B2430]/40 hover:text-[#1B2430]">
                          <Pencil size={16} strokeWidth={1.6} />
                        </button>
                        <button onClick={() => remove(p._id)} className="text-[#1B2430]/40 hover:text-red-600">
                          <Trash2 size={16} strokeWidth={1.6} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <ProductFormModal open={formOpen} onClose={() => setFormOpen(false)} product={editing} onSaved={onSaved} />
    </>
  );
}