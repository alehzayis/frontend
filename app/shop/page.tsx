"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import api from "@/lib/api";
import Breadcrumb from "@/components/shop/Breadcrumb";
import ShopControls, { ViewMode } from "@/components/shop/ShopControls";
import ProductFilters from "@/components/shop/ProductFilters";
import ProductCard from "@/components/shop/ProductCard";
import ProductListItem from "@/components/shop/ProductListItem";
import Pagination from "@/components/shop/Pagination";
import { ShopProduct } from "@/components/shop/shopTypes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ShopPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [products, setProducts] = useState<ShopProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({ page: 1, pages: 1, total: 0 });
  const [view, setView] = useState<ViewMode>("grid");
  const [searchInput, setSearchInput] = useState(searchParams.get("search") || "");
  const [orderQuantities, setOrderQuantities] = useState<Record<string, number>>({});

  const sort = searchParams.get("sort") || "newest";
  const search = searchParams.get("search") || "";
  const formats = useMemo(() => (searchParams.get("formats") || "").split(",").filter(Boolean), [searchParams]);
  const languages = useMemo(() => (searchParams.get("languages") || "").split(",").filter(Boolean), [searchParams]);
  const category = searchParams.get("category") || "";
  const page = Number(searchParams.get("page")) || 1;

  const updateParams = useCallback(
    (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(updates).forEach(([key, value]) => {
        if (!value) params.delete(key);
        else params.set(key, value);
      });
      if (!("page" in updates)) params.delete("page");
      router.push(`/shop?${params.toString()}`);
    },
    [router, searchParams]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput !== search) updateParams({ search: searchInput || null });
    }, 400);
    return () => clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    setLoading(true);
    api
      .get("/api/products", {
        params: {
          sort,
          search: search || undefined,
          formats: formats.length ? formats.join(",") : undefined,
          languages: languages.length ? languages.join(",") : undefined,
          category: category || undefined,
          page,
        },
      })
      .then((res) => {
        setProducts(res.data.data);
        setPagination(res.data.pagination);
      })
      .catch(() => toast.error("Unable to load books"))
      .finally(() => setLoading(false));
  }, [sort, search, formats, languages, category, page]);

  const addSelectedToCart = () => {
    const selected = Object.entries(orderQuantities).filter(([, qty]) => qty > 0);
    if (selected.length === 0) {
      toast.error("Select a quantity for at least one book");
      return;
    }
    toast("Cart isn't wired up yet — this order form is ready as soon as it is.");
  };

  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-[#FBF7EF]">
      <div className="mx-auto max-w-[1280px] px-6 py-[28px] sm:px-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Shop" }]} />

        <h1 className="mt-[10px] font-display text-[2.1rem] font-normal text-[#3A101A]">Shop</h1>

        <div className="mt-[22px] grid grid-cols-1 gap-[28px] lg:grid-cols-[220px_1fr]">
          <aside className="lg:sticky lg:top-[20px] lg:self-start">
            <ProductFilters
              formats={formats}
              onFormatsChange={(next) => updateParams({ formats: next.join(",") || null })}
              languages={languages}
              onLanguagesChange={(next) => updateParams({ languages: next.join(",") || null })}
              category={category}
              onCategoryChange={(next) => updateParams({ category: next || null })}
            />
          </aside>

          <div className="space-y-[20px]">
            <ShopControls
              search={searchInput}
              onSearchChange={setSearchInput}
              sort={sort}
              onSortChange={(next) => updateParams({ sort: next })}
              view={view}
              onViewChange={setView}
            />

            {loading ? (
              <p className="font-body text-[0.88rem] text-[#8B7B7E]">Loading books...</p>
            ) : products.length === 0 ? (
              <p className="font-body text-[0.88rem] text-[#8B7B7E]">No books match these filters.</p>
            ) : view === "grid" ? (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-[18px]">
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <div>
                {products.map((product) => (
                  <ProductListItem
                    key={product._id}
                    product={product}
                    variant={view === "orderForm" ? "orderForm" : "row"}
                    onQuantityChange={(id, qty) => setOrderQuantities((prev) => ({ ...prev, [id]: qty }))}
                  />
                ))}
                {view === "orderForm" && (
                  <button
                    type="button"
                    onClick={addSelectedToCart}
                    className="mt-[16px] h-[46px] rounded-[2px] bg-[#4A1521] px-[24px] font-body text-[0.78rem] font-semibold uppercase tracking-[0.15em] text-[#FFF9EF] hover:bg-[#310B13]"
                  >
                    Add Selected to Cart
                  </button>
                )}
              </div>
            )}

            <Pagination page={pagination.page} pages={pagination.pages} onChange={(next) => updateParams({ page: String(next) })} />
          </div>
        </div>
      </div>
    </main>
    <Footer/>
     </>
  );
}