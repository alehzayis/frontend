export type Category = {
  _id: string;
  name: string;
  slug: string;
};

export type ShopProduct = {
  _id: string;
  title: string;
  slug: string;
  author: string;
  price: number;
  compareAtPrice?: number | null;
  currency?: string;
  language: "english" | "hebrew" | "yiddish";
  format: "physical" | "ebook" | "both";
  binding?: "hardcover" | "softcover" | null;
  images?: { url: string; alt?: string }[];
  ratingAverage?: number;
  ratingCount?: number;
  categories?: Category[];
  createdAt?: string;
};