"use client";

import { FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";
import api from "@/lib/api";
import Modal from "./Modal";
import { TextField, TextAreaField, SelectField } from "@/components/admin/FormField";
import ImageUploader, { ProductImage } from "./ImageUploader";

export type Product = {
  _id: string;
  title: string;
  author: string;
  description?: string;
  isbn?: string;
  language: "english" | "hebrew" | "yiddish";
  format: "physical" | "ebook" | "both";
  price: number;
  compareAtPrice?: number | null;
  stock?: number;
  publisher?: string;
  status: "draft" | "published" | "archived";
  images?: { url: string; alt?: string }[];
  tags?: string[];
};

type Props = {
  open: boolean;
  onClose: () => void;
  product: Product | null;
  onSaved: (product: Product) => void;
};

const emptyForm = {
  title: "",
  author: "",
  description: "",
  isbn: "",
  language: "english",
  format: "physical",
  price: "",
  compareAtPrice: "",
  stock: "",
  publisher: "",
  status: "draft",
  tags: "",
};

export default function ProductFormModal({ open, onClose, product, onSaved }: Props) {
  const [form, setForm] = useState(emptyForm);
  const [images, setImages] = useState<ProductImage[]>([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (product) {
      setForm({
        title: product.title,
        author: product.author,
        description: product.description || "",
        isbn: product.isbn || "",
        language: product.language,
        format: product.format,
        price: String(product.price),
        compareAtPrice: product.compareAtPrice ? String(product.compareAtPrice) : "",
        stock: product.stock !== undefined ? String(product.stock) : "",
        publisher: product.publisher || "",
        status: product.status,
        tags: (product.tags || []).join(", "),
      });
      setImages(product.images || []);
    } else {
      setForm(emptyForm);
      setImages([]);
    }
  }, [product, open]);

  const update = (key: keyof typeof form, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.title.trim() || !form.author.trim() || !form.price) {
      toast.error("Title, author, and price are required");
      return;
    }

    const payload = {
      title: form.title.trim(),
      author: form.author.trim(),
      description: form.description.trim(),
      isbn: form.isbn.trim() || undefined,
      language: form.language,
      format: form.format,
      price: Number(form.price),
      compareAtPrice: form.compareAtPrice ? Number(form.compareAtPrice) : undefined,
      stock: form.stock ? Number(form.stock) : undefined,
      publisher: form.publisher.trim(),
      status: form.status,
      images,
      tags: form.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    };

    try {
      setSaving(true);
      const response = product
        ? await api.patch(`/api/products/${product._id}`, payload)
        : await api.post("/api/products", payload);

      toast.success(product ? "Product updated" : "Product added");
      onSaved(response.data.data);
      onClose();
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Unable to save product");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose} title={product ? "Edit Product" : "Add Product"}>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <TextField label="Title" value={form.title} onChange={(e) => update("title", e.target.value)} required />
          <TextField label="Author" value={form.author} onChange={(e) => update("author", e.target.value)} required />
        </div>

        <TextAreaField
          label="Description"
          rows={3}
          value={form.description}
          onChange={(e) => update("description", e.target.value)}
        />

        <div className="grid grid-cols-3 gap-4">
          <TextField
            label="Price ($)"
            type="number"
            min="0"
            step="0.01"
            value={form.price}
            onChange={(e) => update("price", e.target.value)}
            required
          />
          <TextField
            label="Compare-at Price"
            type="number"
            min="0"
            step="0.01"
            value={form.compareAtPrice}
            onChange={(e) => update("compareAtPrice", e.target.value)}
          />
          <TextField
            label="Stock"
            type="number"
            min="0"
            value={form.stock}
            onChange={(e) => update("stock", e.target.value)}
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <SelectField label="Language" value={form.language} onChange={(e) => update("language", e.target.value)}>
            <option value="english">English</option>
            <option value="hebrew">Hebrew</option>
            <option value="yiddish">Yiddish</option>
          </SelectField>

          <SelectField label="Format" value={form.format} onChange={(e) => update("format", e.target.value)}>
            <option value="physical">Physical</option>
            <option value="ebook">Ebook</option>
            <option value="both">Both</option>
          </SelectField>

          <SelectField label="Status" value={form.status} onChange={(e) => update("status", e.target.value)}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </SelectField>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <TextField label="ISBN" value={form.isbn} onChange={(e) => update("isbn", e.target.value)} />
          <TextField label="Publisher" value={form.publisher} onChange={(e) => update("publisher", e.target.value)} />
        </div>

        <ImageUploader images={images} onChange={setImages} />

        <TextField
          label="Tags"
          hint="Comma-separated"
          value={form.tags}
          onChange={(e) => update("tags", e.target.value)}
        />

        <button
          type="submit"
          disabled={saving}
          className="h-11 w-full rounded-lg bg-[#1B2430] text-sm font-semibold text-white disabled:opacity-60"
        >
          {saving ? "Saving..." : product ? "Save Changes" : "Add Product"}
        </button>
      </form>
    </Modal>
  );
}