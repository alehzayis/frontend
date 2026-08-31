"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/shop/Breadcrumb";
import { useCartStore, useCartSubtotal } from "@/lib/store/cartStore";

const CURRENCY_SYMBOLS: Record<string, string> = {
  usd: "$",
  ils: "₪",
};

const formatPrice = (amount: number, currency = "usd") => {
  const symbol = CURRENCY_SYMBOLS[currency] || "$";
  return amount === 0 ? "Free" : `${symbol}${amount.toFixed(2)}`;
};

export default function CartPage() {
  const router = useRouter();
  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const isLoggedIn = useCartStore((s) => s.isLoggedIn);
  const subtotal = useCartSubtotal();
  const currency = items[0]?.product.currency || "usd";

  const checkout = () => {
    if (!isLoggedIn) {
      toast.error("Please sign in to check out");
      return;
    }
    router.push("/checkout");
  };

  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-[#FBF7EF]">
          <div className="mx-auto max-w-[1280px] px-6 py-[28px] sm:px-10">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Cart" }]} />

            <div className="flex flex-col items-center justify-center gap-[16px] py-[100px] text-center">
              <ShoppingBag size={40} strokeWidth={1.2} className="text-[#8B7B7E]" />
              <h1 className="font-display text-[1.8rem] text-[#3A101A]">Your cart is empty</h1>
              <p className="font-body text-[0.92rem] text-[#66575A]">
                Browse the shop to find something worth reading.
              </p>
              <Link
                href="/shop"
                className="mt-[8px] rounded-[2px] bg-[#4A1521] px-[26px] py-[13px] font-body text-[0.78rem] font-semibold uppercase tracking-[0.15em] text-[#FFF9EF] hover:bg-[#310B13]"
              >
                Go to Shop
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FBF7EF]">
        <div className="mx-auto max-w-[1280px] px-6 py-[28px] sm:px-10">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Cart" }]} />

          <h1 className="mt-[10px] font-display text-[2.1rem] font-normal text-[#3A101A]">Your Cart</h1>

          <div className="mt-[22px] grid grid-cols-1 gap-[28px] lg:grid-cols-[1fr_320px]">
            <div className="divide-y divide-[#4A1521]/10 rounded-[14px] border border-[#4A1521]/10 bg-white">
              {items.map((item) => {
                const lineTotal = item.product.price * item.quantity;
                return (
                  <div key={item.product._id} className="flex items-center gap-[16px] p-[16px]">
                    <Link href={`/shop/${item.product.slug}`} className="shrink-0">
                      <div className="h-[76px] w-[76px] overflow-hidden rounded-[8px] bg-[#F8F3EA]">
                        {item.product.image && (
                          <img
                            src={item.product.image}
                            alt={item.product.title}
                            className="h-full w-full object-cover"
                          />
                        )}
                      </div>
                    </Link>

                    <div className="min-w-0 flex-1">
                      <Link
                        href={`/shop/${item.product.slug}`}
                        className="font-display text-[1rem] text-[#3A101A] line-clamp-1 hover:underline"
                      >
                        {item.product.title}
                      </Link>
                      <div className="mt-[2px] font-body text-[0.82rem] text-[#66575A]">{item.product.author}</div>
                      <div className="mt-[6px] font-body text-[0.88rem] font-semibold text-[#4A1521]">
                        {formatPrice(item.product.price, item.product.currency)}
                      </div>
                    </div>

                    <div className="flex items-center gap-[10px] rounded-full border border-[#4A1521]/15 px-[10px] py-[6px]">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product._id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                        className="flex h-[20px] w-[20px] items-center justify-center rounded-full text-[#4A1521] hover:bg-[#F8F3EA]"
                      >
                        <Minus size={13} strokeWidth={2} />
                      </button>
                      <span className="min-w-[16px] text-center font-body text-[0.85rem] font-semibold text-[#3A101A]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product._id, item.quantity + 1)}
                        aria-label="Increase quantity"
                        className="flex h-[20px] w-[20px] items-center justify-center rounded-full text-[#4A1521] hover:bg-[#F8F3EA]"
                      >
                        <Plus size={13} strokeWidth={2} />
                      </button>
                    </div>

                    <div className="w-[80px] text-right font-body text-[0.9rem] font-semibold text-[#3A101A]">
                      {formatPrice(lineTotal, item.product.currency)}
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.product._id)}
                      aria-label="Remove item"
                      className="text-[#8B7B7E] hover:text-[#4A1521]"
                    >
                      <Trash2 size={17} strokeWidth={1.6} />
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="h-fit rounded-[14px] border border-[#4A1521]/10 bg-white p-[20px]">
              <h2 className="font-display text-[1.2rem] text-[#3A101A]">Order Summary</h2>

              <div className="mt-[16px] flex items-center justify-between font-body text-[0.92rem] text-[#66575A]">
                <span>Subtotal</span>
                <span className="font-semibold text-[#3A101A]">{formatPrice(subtotal, currency)}</span>
              </div>

              <p className="mt-[6px] font-body text-[0.78rem] text-[#8B7B7E]">
                Shipping and tax are calculated at checkout.
              </p>

              <button
                type="button"
                onClick={checkout}
                className="mt-[18px] h-[48px] w-full rounded-[2px] bg-[#4A1521] font-body text-[0.78rem] font-semibold uppercase tracking-[0.15em] text-[#FFF9EF] hover:bg-[#310B13]"
              >
                Proceed to Checkout
              </button>

              <Link
                href="/shop"
                className="mt-[12px] block text-center font-body text-[0.82rem] text-[#8B6816] hover:text-[#4A1521]"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}