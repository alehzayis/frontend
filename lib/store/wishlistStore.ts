import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "@/lib/api";
import { toast } from "sonner";
import { ShopProduct } from "@/components/shop/shopTypes";

type WishlistState = {
  items: ShopProduct[];
  isLoggedIn: boolean;
  ready: boolean;
  init: () => Promise<void>;
  addItem: (product: ShopProduct) => Promise<void>;
  removeItem: (productId: string) => Promise<void>;
  clearWishlist: () => Promise<void>;
  mergeIntoAccount: () => Promise<void>;
};

const fromServer = (products: ShopProduct[]): ShopProduct[] =>
  products.map((product) => ({
    _id: product._id,
    title: product.title,
    slug: product.slug,
    author: product.author,
    price: product.price,
    compareAtPrice: product.compareAtPrice ?? null,
    currency: product.currency,
    language: product.language,
    format: product.format,
    binding: product.binding ?? null,
    images: product.images ?? [],
    ratingAverage: product.ratingAverage,
    ratingCount: product.ratingCount,
    categories: product.categories ?? [],
    createdAt: product.createdAt,
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

          const serverItems = res.data?.data?.items;

          if (!Array.isArray(serverItems)) {
            throw new Error("Invalid wishlist response");
          }

          set({
            items: fromServer(serverItems),
            isLoggedIn: true,
            ready: true,
          });
        } catch {
          set({
            isLoggedIn: false,
            ready: true,
          });
        }
      },

      addItem: async (product) => {
        const { items, isLoggedIn } = get();

        if (items.some((item) => item._id === product._id)) {
          return;
        }

        const previousItems = items;

        set({
          items: [...items, product],
        });

        if (!isLoggedIn) {
          return;
        }

        try {
          const res = await api.post("/api/wishlist/items", {
            productId: product._id,
          });

          const serverItems = res.data?.data?.items;

          if (!Array.isArray(serverItems)) {
            throw new Error("Invalid wishlist response");
          }

          set({
            items: fromServer(serverItems),
          });
        } catch (err: unknown) {
          set({
            items: previousItems,
          });

          const message =
            typeof err === "object" &&
            err !== null &&
            "response" in err &&
            typeof err.response === "object" &&
            err.response !== null &&
            "data" in err.response &&
            typeof err.response.data === "object" &&
            err.response.data !== null &&
            "message" in err.response.data &&
            typeof err.response.data.message === "string"
              ? err.response.data.message
              : "Couldn't save that item";

          toast.error(message);
        }
      },

      removeItem: async (productId) => {
        const { items, isLoggedIn } = get();

        const previousItems = items;

        set({
          items: items.filter((item) => item._id !== productId),
        });

        if (!isLoggedIn) {
          return;
        }

        try {
          const res = await api.delete(
            `/api/wishlist/items/${encodeURIComponent(productId)}`
          );

          const serverItems = res.data?.data?.items;

          if (!Array.isArray(serverItems)) {
            throw new Error("Invalid wishlist response");
          }

          set({
            items: fromServer(serverItems),
          });
        } catch (err: unknown) {
          set({
            items: previousItems,
          });

          const message =
            typeof err === "object" &&
            err !== null &&
            "response" in err &&
            typeof err.response === "object" &&
            err.response !== null &&
            "data" in err.response &&
            typeof err.response.data === "object" &&
            err.response.data !== null &&
            "message" in err.response.data &&
            typeof err.response.data.message === "string"
              ? err.response.data.message
              : "Couldn't remove that item";

          toast.error(message);
        }
      },

      clearWishlist: async () => {
        const { items, isLoggedIn } = get();

        if (items.length === 0) {
          return;
        }

        const previousItems = items;

        set({
          items: [],
        });

        if (!isLoggedIn) {
          return;
        }

        try {
          await api.delete("/api/wishlist");
        } catch {
          set({
            items: previousItems,
          });

          toast.error("Couldn't clear your wishlist");
        }
      },

      mergeIntoAccount: async () => {
        const guestItems = get().items;

        try {
          const res = await api.post("/api/wishlist/merge", {
            productIds: guestItems.map((item) => item._id),
          });

          const serverItems = res.data?.data?.items;

          if (!Array.isArray(serverItems)) {
            throw new Error("Invalid wishlist response");
          }

          set({
            items: fromServer(serverItems),
            isLoggedIn: true,
          });
        } catch {
          set({
            isLoggedIn: true,
          });
        }
      },
    }),
    {
      name: "maz-wishlist",
    }
  )
);

export const useWishlistCount = () =>
  useWishlistStore((state) => state.items.length);