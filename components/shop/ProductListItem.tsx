"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { ShopProduct } from "@/components/shop/shopTypes";

type Props = {
  product: ShopProduct;
  variant: "row" | "orderForm";
  onQuantityChange?: (productId: string, quantity: number) => void;
};

export default function ProductListItem({ product, variant, onQuantityChange }: Props) {
  const [quantity, setQuantity] = useState(0);
  const cover = product.images?.[0]?.url;

  const updateQuantity = (next: number) => {
    const clamped = Math.max(0, next);
    setQuantity(clamped);
    onQuantityChange?.(product._id, clamped);
  };

  return (
    <div className="flex items-center gap-[16px] border-b border-[#4A1521]/10 py-[14px]">
      <Link href={`/shop/${product.slug}`} className="flex h-[64px] w-[48px] shrink-0 items-center justify-center bg-[#F8F3EA]">
        {cover ? (
          <img src={cover} alt={product.title} className="h-full w-full object-cover" />
        ) : (
          <BookOpen size={18} strokeWidth={1.4} className="text-[#8B7B7E]" />
        )}
      </Link>

      <Link href={`/shop/${product.slug}`} className="min-w-0 flex-1">
        <div className="truncate font-display text-[0.98rem] text-[#3A101A]">{product.title}</div>
        <div className="font-body text-[0.8rem] text-[#66575A]">{product.author}</div>
      </Link>

      <div className="w-[90px] shrink-0 font-body text-[0.9rem] font-semibold text-[#4A1521]">
        {product.price === 0 ? "Free" : `$${product.price.toFixed(2)}`}
      </div>

      {variant === "row" && (
        <Link
          href={`/shop/${product.slug}`}
          className="shrink-0 rounded-[2px] border border-[#4A1521]/25 px-[14px] py-[7px] font-body text-[0.76rem] font-semibold uppercase tracking-[0.1em] text-[#4A1521] hover:border-[#4A1521]"
        >
          View
        </Link>
      )}

      {variant === "orderForm" && (
        <div className="flex shrink-0 items-center gap-[6px]">
          <button
            type="button"
            onClick={() => updateQuantity(quantity - 1)}
            className="h-[28px] w-[28px] rounded-[2px] border border-[#4A1521]/20 text-[#4A1521]"
          >
            −
          </button>
          <input
            type="number"
            min={0}
            value={quantity}
            onChange={(e) => updateQuantity(Number(e.target.value) || 0)}
            className="h-[28px] w-[46px] rounded-[2px] border border-[#4A1521]/20 text-center font-body text-[0.85rem]"
          />
          <button
            type="button"
            onClick={() => updateQuantity(quantity + 1)}
            className="h-[28px] w-[28px] rounded-[2px] border border-[#4A1521]/20 text-[#4A1521]"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}