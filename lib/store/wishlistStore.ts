import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "@/lib/api";
import { toast } from "sonner";

export type WishlistProduct = {
  _id: string;
  title: string;
  slug: string;
  author: string;
  price: number;
  compareAtPrice?: number | null;
  currency?: string;
  image?: string | null;
  format: "physical" | "ebook" | "both";
  language?: string;
};

type WishlistState = {
  items: WishlistProduct[];
  isLoggedIn: boolean;
  ready: boolean;
  init: () => Promise<void>;
  addItem: (product: WishlistProduct) => Promise<void>;
  removeItem: (productId: string) => Promise<void>;
  clearWishlist: () => Promise<void>;
  mergeIntoAccount: () => Promise<void>;
};

const fromServer = (products: any[]): WishlistProduct[] =>
  products.map((p) => ({
    _id: p._id,
    title: p.title,
    slug: p.slug,
    author: p.author,
    price: p.price,
    compareAtPrice: p.compareAtPrice,
    currency: p.currency,
    image: p.images?.[0]?.url || null,
    format: p.format,
    language: p.language
  }));

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      isLoggedIn: false,
      ready: false,

      init: async () => {
        try {
          const res = await api.get("/api/wishlist");
          set({ items: fromServer(res.data.data.items), isLoggedIn: true, ready: true });
        } catch {
          set({ isLoggedIn: false, ready: true });
        }
      },

      addItem: async (product) => {
        const { items, isLoggedIn } = get();
        if (items.some((i) => i._id === product._id)) return;

        set({ items: [...items, product] });
        if (!isLoggedIn) return;

        try {
          const res = await api.post("/api/wishlist/items", { productId: product._id });
          set({ items: fromServer(res.data.data.items) });
        } catch (err: any) {
          set({ items });
          toast.error(err?.response?.data?.message || "Couldn't save that item");
        }
      },

      removeItem: async (productId) => {
        const { items, isLoggedIn } = get();
        set({ items: items.filter((i) => i._id !== productId) });
        if (!isLoggedIn) return;

        try {
          const res = await api.delete(`/api/wishlist/items/${productId}`);
          set({ items: fromServer(res.data.data.items) });
        } catch (err: any) {
          set({ items });
          toast.error(err?.response?.data?.message || "Couldn't remove that item");
        }
      },

      clearWishlist: async () => {
        const { items, isLoggedIn } = get();
        set({ items: [] });
        if (!isLoggedIn) return;

        try {
          await api.delete("/api/wishlist");
        } catch {
          set({ items });
          toast.error("Couldn't clear your wishlist");
        }
      },

      mergeIntoAccount: async () => {
        const guestItems = get().items;
        try {
          const res = await api.post("/api/wishlist/merge", {
            productIds: guestItems.map((i) => i._id)
          });
          set({ items: fromServer(res.data.data.items), isLoggedIn: true });
        } catch {
          set({ isLoggedIn: true });
        }
      }
    }),
    { name: "maz-wishlist" }
  )
);

export const useWishlistCount = () => useWishlistStore((s) => s.items.length);