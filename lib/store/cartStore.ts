import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "@/lib/api";
import { toast } from "sonner";

export type CartProduct = {
  _id: string;
  title: string;
  slug: string;
  author: string;
  price: number;
  compareAtPrice?: number | null;
  currency?: string;
  image?: string | null;
  format: "physical" | "ebook" | "both";
  stock?: number;
};

export type CartItem = {
  product: CartProduct;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  isLoggedIn: boolean;
  ready: boolean;
  init: () => Promise<void>;
  addItem: (product: CartProduct, quantity?: number) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  removeItem: (productId: string) => Promise<void>;
  clearCart: () => Promise<void>;
  mergeIntoAccount: () => Promise<void>;
};

const fromServer = (items: CartItem[]) => items.map((i) => ({ product: i.product, quantity: i.quantity }));

// Guards against out-of-order network responses when a user clicks +/- rapidly.
// Each mutation on a given product gets a version number; a response only gets
// applied if it's still the latest in-flight request for that product.
const requestVersions = new Map<string, number>();

const nextVersion = (productId: string) => {
  const version = (requestVersions.get(productId) || 0) + 1;
  requestVersions.set(productId, version);
  return version;
};

const isStale = (productId: string, version: number) => requestVersions.get(productId) !== version;

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isLoggedIn: false,
      ready: false,

      init: async () => {
        try {
          const res = await api.get("/api/cart");
          set({ items: fromServer(res.data.data.items), isLoggedIn: true, ready: true });
        } catch {
          set({ isLoggedIn: false, ready: true });
        }
      },

      addItem: async (product, quantity = 1) => {
        const { items, isLoggedIn } = get();
        const existing = items.find((i) => i.product._id === product._id);
        const nextItems = existing
          ? items.map((i) => (i.product._id === product._id ? { ...i, quantity: i.quantity + quantity } : i))
          : [...items, { product, quantity }];

        set({ items: nextItems });
        if (!isLoggedIn) return;

        const version = nextVersion(product._id);

        try {
          const res = await api.post("/api/cart/items", { productId: product._id, quantity });
          if (isStale(product._id, version)) return;
          set({ items: fromServer(res.data.data.items) });
        } catch (err: any) {
          if (isStale(product._id, version)) return;
          set({ items });
          toast.error(err?.response?.data?.message || "Couldn't add that to your cart");
        }
      },

      updateQuantity: async (productId, quantity) => {
        const { items, isLoggedIn } = get();
        const nextItems =
          quantity <= 0
            ? items.filter((i) => i.product._id !== productId)
            : items.map((i) => (i.product._id === productId ? { ...i, quantity } : i));

        set({ items: nextItems });
        if (!isLoggedIn) return;

        const version = nextVersion(productId);

        try {
          const res = await api.patch(`/api/cart/items/${productId}`, { quantity });
          if (isStale(productId, version)) return;
          set({ items: fromServer(res.data.data.items) });
        } catch (err: any) {
          if (isStale(productId, version)) return;
          set({ items });
          toast.error(err?.response?.data?.message || "Couldn't update that item");
        }
      },

      removeItem: async (productId) => {
        const { items, isLoggedIn } = get();
        set({ items: items.filter((i) => i.product._id !== productId) });
        if (!isLoggedIn) return;

        const version = nextVersion(productId);

        try {
          const res = await api.delete(`/api/cart/items/${productId}`);
          if (isStale(productId, version)) return;
          set({ items: fromServer(res.data.data.items) });
        } catch (err: any) {
          if (isStale(productId, version)) return;
          set({ items });
          toast.error(err?.response?.data?.message || "Couldn't remove that item");
        }
      },

      clearCart: async () => {
        const { items, isLoggedIn } = get();
        set({ items: [] });
        if (!isLoggedIn) return;

        try {
          await api.delete("/api/cart");
        } catch {
          set({ items });
          toast.error("Couldn't clear your cart");
        }
      },

      mergeIntoAccount: async () => {
        const guestItems = get().items.map((i) => ({ productId: i.product._id, quantity: i.quantity }));
        try {
          const res = await api.post("/api/cart/merge", { items: guestItems });
          set({ items: fromServer(res.data.data.items), isLoggedIn: true });
        } catch {
          set({ isLoggedIn: true });
        }
      }
    }),
    { name: "maz-cart" }
  )
);

export const useCartCount = () => useCartStore((s) => s.items.reduce((n, i) => n + i.quantity, 0));

export const useCartSubtotal = () =>
  useCartStore((s) => s.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0));