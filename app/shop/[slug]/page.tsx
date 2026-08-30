"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import {
  BookOpen,
  Headphones,
  Heart,
  Languages,
  Minus,
  Plus,
  RotateCcw,
  Share2,
  ShieldCheck,
  ShoppingCart,
  Star,
  Tag,
  Truck,
  User,
  X,
} from "lucide-react";
import api from "@/lib/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/shop/Breadcrumb";
import ProductCard from "@/components/shop/ProductCard";
import { ProductDetail, ShopProduct } from "@/components/shop/shopTypes";
import { useCartStore } from "@/lib/store/cartStore";

const CURRENCY_SYMBOLS: Record<string, string> = {
  usd: "$",
  ils: "₪",
};

const formatPrice = (amount: number, currency = "usd") => {
  const symbol = CURRENCY_SYMBOLS[currency] || "$";
  return amount === 0 ? "Free" : `${symbol}${amount.toFixed(2)}`;
};

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

const formatLabel = (product: ProductDetail) => {
  if (product.format === "ebook") return "Digital";
  if (product.binding) return capitalize(product.binding);
  return product.format === "both" ? "Physical + Digital" : "Physical";
};

const getBadge = (product: ProductDetail) => {
  const onSale = product.compareAtPrice && product.compareAtPrice > product.price;
  if (onSale) return { label: product.language === "hebrew" ? "מבצע" : "Sale", tone: "gold" as const };

  if ((product.ratingCount || 0) >= 50) {
    return { label: product.language === "hebrew" ? "בסטסלר" : "Bestseller", tone: "gold" as const };
  }

  if (product.createdAt) {
    const ageInDays = (Date.now() - new Date(product.createdAt).getTime()) / (1000 * 60 * 60 * 24);
    if (ageInDays <= 30) return { label: product.language === "hebrew" ? "חדש" : "New", tone: "wine" as const };
  }

  return null;
};

export default function ProductDetailPage() {
  const params = useParams<{ slug: string }>();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [related, setRelated] = useState<ShopProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<"description" | "reviews">("description");

  const addItem = useCartStore((s) => s.addItem);

  useEffect(() => {
    if (!params?.slug) return;

    setLoading(true);
    setNotFound(false);
    setQty(1);

    api
      .get(`/api/products/${params.slug}`)
      .then((res) => {
        if (!res.data?.data) {
          setNotFound(true);
          return;
        }
        setProduct(res.data.data);
        setActiveImage(0);
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [params?.slug]);

  useEffect(() => {
    if (!product?.categories?.[0]?._id) {
      setRelated([]);
      return;
    }

    api
      .get("/api/products", { params: { category: product.categories[0]._id, limit: 6 } })
      .then((res) => setRelated((res.data.data as ShopProduct[]).filter((p) => p._id !== product._id)))
      .catch(() => setRelated([]));
  }, [product?._id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-[#FBF7EF] py-[100px] text-center">
          <p className="font-body text-[0.9rem] text-[#8B7B7E]">Loading...</p>
        </main>
        <Footer />
      </>
    );
  }

  if (notFound || !product) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-[#FBF7EF]">
          <div className="mx-auto max-w-[1280px] px-6 py-[100px] text-center sm:px-10">
            <h1 className="font-display text-[1.8rem] text-[#3A101A]">Book not found</h1>
            <p className="mt-[8px] font-body text-[0.92rem] text-[#66575A]">
              It may have been removed or is no longer available.
            </p>
            <Link
              href="/shop"
              className="mt-[20px] inline-block rounded-[2px] bg-[#4A1521] px-[26px] py-[13px] font-body text-[0.78rem] font-semibold uppercase tracking-[0.15em] text-[#FFF9EF] hover:bg-[#310B13]"
            >
              Back to Shop
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const isHebrew = product.language === "hebrew";
  const currency = product.currency || "usd";
  const images = product.images?.length ? product.images : [];
  const badge = getBadge(product);
  const rating = product.ratingAverage || 0;
  const isDigitalOnly = product.format === "ebook";
  const inStock = isDigitalOnly || (product.stock ?? 0) > 0;

  const addToCart = () => {
    addItem(
      {
        _id: product._id,
        title: product.title,
        slug: product.slug,
        author: product.author,
        price: product.price,
        compareAtPrice: product.compareAtPrice,
        currency,
        image: images[0]?.url || null,
        format: product.format,
      },
      qty
    );
    toast.success(isHebrew ? "נוסף לסל" : "Added to cart");
  };

  const toggleWishlist = () => {
    setWishlisted((v) => !v);
    toast("Wishlists aren't wired up yet — this will save for later once they are.");
  };

  const share = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: product.title, url });
      } catch {
        // user cancelled the share sheet — nothing to do
      }
      return;
    }
    await navigator.clipboard.writeText(url);
    toast.success("Link copied");
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FBF7EF]">
        <div className="mx-auto max-w-[1280px] px-6 py-[28px] sm:px-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Shop", href: "/shop" },
              { label: product.title },
            ]}
          />

          <div className="mt-[22px] grid grid-cols-1 gap-[40px] lg:grid-cols-[100px_400px_1fr]">
            <div className="order-2 flex gap-[8px] lg:order-1 lg:flex-col">
              {images.map((img, i) => (
                <button
                  key={img.url + i}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={`h-[64px] w-[64px] shrink-0 overflow-hidden rounded-[8px] border ${
                    i === activeImage ? "border-[#4A1521]" : "border-[#4A1521]/15"
                  }`}
                >
                  <img src={img.url} alt={img.alt || product.title} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>

            <div className="order-1 lg:order-2">
              <button
                type="button"
                onClick={() => images[activeImage] && setLightboxOpen(true)}
                className="aspect-square w-full overflow-hidden rounded-[14px] border border-[#4A1521]/10 bg-[#F8F3EA]"
              >
                {images[activeImage] ? (
                  <img
                    src={images[activeImage].url}
                    alt={images[activeImage].alt || product.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <BookOpen size={48} strokeWidth={1.2} className="text-[#8B7B7E]" />
                  </div>
                )}
              </button>
            </div>

            <div dir={isHebrew ? "rtl" : "ltr"} className={`order-3 ${isHebrew ? "text-right" : ""}`}>
              <div className={`flex items-start justify-between gap-[10px] ${isHebrew ? "flex-row-reverse" : ""}`}>
                <div>
                  <h1 className="font-display text-[2rem] font-normal leading-tight text-[#3A101A]">{product.title}</h1>
                  <p className="mt-[6px] font-body text-[1rem] text-[#66575A]">{product.author}</p>
                </div>

                {badge && (
                  <span
                    className={`shrink-0 rounded-full px-[12px] py-[5px] font-body text-[0.72rem] font-semibold ${
                      badge.tone === "gold" ? "bg-[#C59B27] text-[#3A101A]" : "bg-[#4A1521] text-[#FFF9EF]"
                    }`}
                  >
                    {badge.label}
                  </span>
                )}
              </div>

              {product.ratingCount ? (
                <div className={`mt-[10px] flex items-center gap-[6px] ${isHebrew ? "justify-end" : ""}`}>
                  <div className="flex items-center gap-[1px]">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star
                        key={n}
                        size={14}
                        strokeWidth={0}
                        className={n <= Math.round(rating) ? "fill-[#C59B27] text-[#C59B27]" : "fill-[#E5DCCB] text-[#E5DCCB]"}
                      />
                    ))}
                  </div>
                  <span className="font-body text-[0.8rem] text-[#8B7B7E]">({product.ratingCount})</span>
                </div>
              ) : null}

              <div className="mt-[18px] grid grid-cols-4 gap-[10px] border-y border-[#4A1521]/10 py-[16px]">
                <MetaItem icon={User} label="Author" value={product.author} />
                <MetaItem icon={Languages} label="Language" value={capitalize(product.language)} />
                <MetaItem icon={BookOpen} label="Format" value={formatLabel(product)} />
                <MetaItem icon={Tag} label="Category" value={product.categories?.[0]?.name || "—"} />
              </div>

              <div className="mt-[20px] rounded-[14px] border border-[#4A1521]/10 bg-white p-[18px]">
                <div className={`flex items-baseline gap-[10px] ${isHebrew ? "justify-end" : ""}`}>
                  <span className="font-body text-[1.6rem] font-semibold text-[#4A1521]">
                    {formatPrice(product.price, currency)}
                  </span>
                  {badge?.label && product.compareAtPrice && product.compareAtPrice > product.price && (
                    <span className="font-body text-[1rem] text-[#8B7B7E] line-through">
                      {formatPrice(product.compareAtPrice, currency)}
                    </span>
                  )}
                </div>

                <div className={`mt-[6px] font-body text-[0.82rem] ${inStock ? "text-[#3F7D4B]" : "text-[#A03B3B]"}`}>
                  {isDigitalOnly ? "Instant digital download" : inStock ? "In stock" : "Out of stock"}
                </div>

                {inStock && (
                  <div className={`mt-[16px] flex items-center gap-[12px] ${isHebrew ? "flex-row-reverse" : ""}`}>
                    <div className="flex items-center gap-[14px] rounded-[2px] border border-[#4A1521]/20 px-[14px] py-[12px]">
                      <button
                        type="button"
                        onClick={() => setQty((q) => Math.max(1, q - 1))}
                        aria-label="Decrease quantity"
                        className="text-[#4A1521]"
                      >
                        <Minus size={14} strokeWidth={2.2} />
                      </button>
                      <span className="min-w-[16px] text-center font-body text-[0.9rem] font-semibold text-[#3A101A]">
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQty((q) => q + 1)}
                        aria-label="Increase quantity"
                        className="text-[#4A1521]"
                      >
                        <Plus size={14} strokeWidth={2.2} />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={addToCart}
                      className="flex h-[46px] flex-1 items-center justify-center gap-[10px] rounded-[2px] bg-[#4A1521] font-body text-[0.78rem] font-semibold uppercase tracking-[0.15em] text-[#FFF9EF] hover:bg-[#310B13]"
                    >
                      <ShoppingCart size={16} strokeWidth={1.8} />
                      Add to Cart
                    </button>
                  </div>
                )}

                <div className={`mt-[10px] flex gap-[10px] ${isHebrew ? "flex-row-reverse" : ""}`}>
                  <button
                    type="button"
                    onClick={toggleWishlist}
                    className="flex h-[42px] flex-1 items-center justify-center gap-[8px] rounded-[2px] border border-[#4A1521]/20 font-body text-[0.76rem] font-semibold text-[#4A1521] hover:border-[#4A1521]"
                  >
                    <Heart size={14} strokeWidth={1.8} className={wishlisted ? "fill-[#4A1521]" : ""} />
                    Wishlist
                  </button>
                  <button
                    type="button"
                    onClick={share}
                    className="flex h-[42px] flex-1 items-center justify-center gap-[8px] rounded-[2px] border border-[#4A1521]/20 font-body text-[0.76rem] font-semibold text-[#4A1521] hover:border-[#4A1521]"
                  >
                    <Share2 size={14} strokeWidth={1.8} />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[36px] grid grid-cols-2 gap-[14px] rounded-[14px] border border-[#4A1521]/10 bg-white p-[20px] sm:grid-cols-4">
            <TrustItem icon={Headphones} label="Customer Support" />
            <TrustItem icon={RotateCcw} label="Easy Returns" />
            <TrustItem icon={ShieldCheck} label="Secure Checkout" />
            <TrustItem icon={Truck} label="Fast Shipping" />
          </div>

          <div className="mt-[36px] rounded-[14px] border border-[#4A1521]/10 bg-white">
            <div className="flex border-b border-[#4A1521]/10">
              <TabButton active={tab === "description"} onClick={() => setTab("description")}>
                Description
              </TabButton>
              <TabButton active={tab === "reviews"} onClick={() => setTab("reviews")}>
                Reviews {product.ratingCount ? `(${product.ratingCount})` : ""}
              </TabButton>
            </div>

            {tab === "description" ? (
              <div className="grid grid-cols-1 gap-[30px] p-[24px] lg:grid-cols-[1fr_300px]">
                <p
                  dir={isHebrew ? "rtl" : "ltr"}
                  className={`font-body text-[0.94rem] leading-[1.75] text-[#3A101A] ${isHebrew ? "text-right" : ""}`}
                >
                  {product.description || "No description available yet."}
                </p>

                <dl className="grid grid-cols-2 gap-x-[16px] gap-y-[10px] border-t border-[#4A1521]/10 pt-[16px] font-body text-[0.85rem] lg:border-t-0 lg:border-s lg:ps-[24px] lg:pt-0">
                  <DetailRow label="Author" value={product.author} />
                  <DetailRow label="Title" value={product.title} />
                  <DetailRow label="Language" value={capitalize(product.language)} />
                  <DetailRow label="Format" value={formatLabel(product)} />
                  {product.publisher && <DetailRow label="Publisher" value={product.publisher} />}
                  {product.publishedDate && (
                    <DetailRow label="Published" value={new Date(product.publishedDate).getFullYear().toString()} />
                  )}
                  {product.isbn && <DetailRow label="ISBN" value={product.isbn} />}
                </dl>
              </div>
            ) : (
              <div className="p-[24px]">
                {product.ratingCount ? (
                  <div className="flex items-center gap-[10px]">
                    <div className="flex items-center gap-[2px]">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Star
                          key={n}
                          size={18}
                          strokeWidth={0}
                          className={n <= Math.round(rating) ? "fill-[#C59B27] text-[#C59B27]" : "fill-[#E5DCCB] text-[#E5DCCB]"}
                        />
                      ))}
                    </div>
                    <span className="font-body text-[0.9rem] text-[#66575A]">
                      {rating.toFixed(1)} average from {product.ratingCount} readers
                    </span>
                  </div>
                ) : (
                  <p className="font-body text-[0.9rem] text-[#8B7B7E]">No reviews yet.</p>
                )}
                <p className="mt-[10px] font-body text-[0.82rem] text-[#8B7B7E]">
                  Written reviews aren't available yet — this section shows the overall rating only for now.
                </p>
              </div>
            )}
          </div>

          {related.length > 0 && (
            <div className="mt-[40px]">
              <h2 className="font-display text-[1.4rem] text-[#3A101A]">You might also like</h2>
              <div className="mt-[16px] flex gap-[16px] overflow-x-auto pb-[8px]">
                {related.map((p) => (
                  <div key={p._id} className="w-[220px] shrink-0">
                    <ProductCard product={p} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />

      {lightboxOpen && images[activeImage] && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/80 p-6"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightboxOpen(false)}
            className="absolute right-6 top-6 text-white"
          >
            <X size={26} strokeWidth={1.8} />
          </button>
          <img
            src={images[activeImage].url}
            alt={images[activeImage].alt || product.title}
            className="max-h-full max-w-full rounded-[8px] object-contain"
          />
        </div>
      )}
    </>
  );
}

function MetaItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof User;
  label: string;
  value: string;
}) {
  return (
    <div className="text-center">
      <Icon size={18} strokeWidth={1.4} className="mx-auto text-[#8B6816]" />
      <div className="mt-[6px] font-body text-[0.68rem] uppercase tracking-[0.1em] text-[#8B7B7E]">{label}</div>
      <div className="mt-[2px] font-body text-[0.82rem] font-semibold text-[#3A101A] line-clamp-1">{value}</div>
    </div>
  );
}

function TrustItem({ icon: Icon, label }: { icon: typeof Truck; label: string }) {
  return (
    <div className="flex items-center gap-[10px]">
      <Icon size={20} strokeWidth={1.4} className="shrink-0 text-[#8B6816]" />
      <span className="font-body text-[0.82rem] text-[#3A101A]">{label}</span>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-[20px] py-[14px] font-body text-[0.84rem] font-semibold ${
        active ? "border-b-2 border-[#4A1521] text-[#4A1521]" : "text-[#8B7B7E]"
      }`}
    >
      {children}
    </button>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[#8B7B7E]">{label}</dt>
      <dd className="text-[#3A101A]">{value}</dd>
    </div>
  );
}