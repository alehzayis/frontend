"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { BookOpen, Heart, ShoppingCart, Star } from "lucide-react";
import { ShopProduct } from "@/components/shop/shopTypes";

const CURRENCY_SYMBOLS: Record<string, string> = {
  usd: "$",
  ils: "₪",
};

const formatPrice = (amount: number, currency = "usd") => {
  const symbol = CURRENCY_SYMBOLS[currency] || "$";
  return amount === 0 ? "Free" : `${symbol}${amount.toFixed(2)}`;
};

const getBadge = (product: ShopProduct) => {
  const onSale = product.compareAtPrice && product.compareAtPrice > product.price;
  if (onSale) return { label: product.language === "hebrew" ? "מבצע" : "Sale", tone: "gold" as const };

  if (product.createdAt) {
    const ageInDays = (Date.now() - new Date(product.createdAt).getTime()) / (1000 * 60 * 60 * 24);
    if (ageInDays <= 30) return { label: product.language === "hebrew" ? "חדש" : "New", tone: "wine" as const };
  }

  return null;
};

export default function ProductCard({ product }: { product: ShopProduct }) {
  const [wishlisted, setWishlisted] = useState(false);

  const cover = product.images?.[0]?.url;
  const badge = getBadge(product);
  const isHebrew = product.language === "hebrew";
  const rating = product.ratingAverage || 0;
  const currency = product.currency || "usd";

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setWishlisted((prev) => !prev);
    toast("Wishlists aren't wired up yet — this will save for later once they are.");
  };

  const addToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    toast("Cart isn't wired up yet — this button is ready as soon as it is.");
  };

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block overflow-hidden rounded-[14px] border border-[#4A1521]/10 bg-white shadow-[0_4px_14px_rgba(50,12,20,0.06)] transition-shadow duration-200 hover:shadow-[0_14px_30px_rgba(50,12,20,0.12)]"
    >
      <div className="relative aspect-square bg-[#F8F3EA]">
        {badge && (
          <span
            className={`absolute left-[10px] top-[10px] rounded-full px-[10px] py-[4px] font-body text-[0.68rem] font-semibold ${
              badge.tone === "gold" ? "bg-[#C59B27] text-[#3A101A]" : "bg-[#4A1521] text-[#FFF9EF]"
            }`}
          >
            {badge.label}
          </span>
        )}

        <button
          type="button"
          onClick={toggleWishlist}
          aria-label="Save for later"
          className="absolute right-[10px] top-[10px] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
        >
          <Heart
            size={15}
            strokeWidth={1.8}
            className={wishlisted ? "fill-[#4A1521] text-[#4A1521]" : "text-[#4A1521]/60"}
          />
        </button>

        {cover ? (
          <img src={cover} alt={product.title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <BookOpen size={32} strokeWidth={1.4} className="text-[#8B7B7E]" />
          </div>
        )}
      </div>

      <div className="space-y-[6px] p-[14px]">
        <div dir={isHebrew ? "rtl" : "ltr"} className={isHebrew ? "text-right" : ""}>
          <div className="font-display text-[1.02rem] leading-snug text-[#3A101A] line-clamp-2">{product.title}</div>
          <div className="mt-[2px] font-body text-[0.82rem] text-[#66575A] line-clamp-1">{product.author}</div>
        </div>

        {product.ratingCount ? (
          <div dir={isHebrew ? "rtl" : "ltr"} className={`flex items-center gap-[5px] ${isHebrew ? "justify-end" : ""}`}>
            <div className="flex items-center gap-[1px]">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star
                  key={n}
                  size={12}
                  strokeWidth={0}
                  className={n <= Math.round(rating) ? "fill-[#C59B27] text-[#C59B27]" : "fill-[#E5DCCB] text-[#E5DCCB]"}
                />
              ))}
            </div>
            <span className="font-body text-[0.75rem] text-[#8B7B7E]">({product.ratingCount})</span>
          </div>
        ) : null}

        <div className="flex items-center justify-between pt-[4px]">
          <div className="flex items-baseline gap-[8px]">
            <span className="font-body text-[0.95rem] font-semibold text-[#4A1521]">
              {formatPrice(product.price, currency)}
            </span>
            {badge?.tone === "gold" && product.compareAtPrice && (
              <span className="font-body text-[0.78rem] text-[#8B7B7E] line-through">
                {formatPrice(product.compareAtPrice, currency)}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={addToCart}
            className="flex items-center gap-[6px] rounded-full bg-[#C59B27] px-[12px] py-[7px] font-body text-[0.74rem] font-semibold text-[#3A101A] transition-colors duration-200 hover:bg-[#B08820]"
          >
            <ShoppingCart size={13} strokeWidth={1.8} />
            {isHebrew ? "הוסף לסל" : "Add"}
          </button>
        </div>
      </div>
    </Link>
  );
}