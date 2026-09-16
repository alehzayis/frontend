"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Heart, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useWishlistStore } from "@/lib/store/wishlistStore";
import Breadcrumb from "@/components/shop/Breadcrumb";
import ProductCard from "@/components/shop/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WishlistPage() {
  const items = useWishlistStore((s) => s.items);
  const ready = useWishlistStore((s) => s.ready);
  const init = useWishlistStore((s) => s.init);
  const clearWishlist = useWishlistStore((s) => s.clearWishlist);

  useEffect(() => {
    init();
  }, [init]);

  const handleClear = async () => {
    if (items.length === 0) return;
    try {
      await clearWishlist();
      toast.success("Wishlist cleared");
    } catch {
      toast.error("Couldn't clear your wishlist. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FBF7EF]">
        <div className="mx-auto max-w-[1280px] px-6 py-[28px] sm:px-10">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Wishlist" }]} />

          <div className="mt-[10px] flex flex-wrap items-end justify-between gap-[12px]">
            <div>
              <h1 className="font-display text-[2.1rem] font-normal text-[#3A101A]">Wishlist</h1>
              {ready && items.length > 0 && (
                <p className="mt-[4px] font-body text-[0.85rem] text-[#8B7B7E]">
                  {items.length} {items.length === 1 ? "book" : "books"} saved
                </p>
              )}
            </div>

            {ready && items.length > 0 && (
              <button
                type="button"
                onClick={handleClear}
                className="flex items-center gap-[6px] rounded-[2px] border border-[#4A1521]/20 px-[14px] py-[8px] font-body text-[0.76rem] font-semibold uppercase tracking-[0.1em] text-[#4A1521] hover:border-[#4A1521]"
              >
                <Trash2 size={14} strokeWidth={1.8} />
                Clear Wishlist
              </button>
            )}
          </div>

          <div className="mt-[26px]">
            {!ready ? (
              <p className="font-body text-[0.88rem] text-[#8B7B7E]">Loading your wishlist...</p>
            ) : items.length === 0 ? (
              <div className="flex flex-col items-center rounded-[4px] border border-[#4A1521]/10 bg-white py-[64px] text-center">
                <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#F8F3EA] text-[#8B7B7E]">
                  <Heart size={22} strokeWidth={1.6} />
                </span>
                <h2 className="mt-[16px] font-display text-[1.3rem] text-[#3A101A]">Your wishlist is empty</h2>
                <p className="mt-[6px] max-w-[320px] font-body text-[0.85rem] text-[#66575A]">
                  Save books you're interested in by tapping the heart icon while you browse.
                </p>
                <Link
                  href="/shop"
                  className="mt-[20px] rounded-[2px] bg-[#4A1521] px-[22px] py-[11px] font-body text-[0.78rem] font-semibold uppercase tracking-[0.15em] text-[#FFF9EF] hover:bg-[#310B13]"
                >
                  Browse the Shop
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-[18px]">
                {items.map((item) => (
                  <ProductCard key={item._id} product={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}