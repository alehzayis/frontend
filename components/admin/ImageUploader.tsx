"use client";

import { ChangeEvent, useRef, useState } from "react";
import { toast } from "sonner";
import { ImagePlus, Loader2, X } from "lucide-react";
import api from "@/lib/api";

export type ProductImage = { url: string; alt?: string };

type Props = {
  images: ProductImage[];
  onChange: (images: ProductImage[]) => void;
};

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export default function ImageUploader({ images, onChange }: Props) {
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onPick = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      toast.error("Only JPEG, PNG, or WebP images are allowed");
      return;
    }

    try {
      setUploading(true);
      const formData = new FormData();
      formData.append("image", file);

      const response = await api.post("/api/uploads/image", formData);
      onChange([...images, { url: response.data.data.url }]);
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Unable to upload image");
    } finally {
      setUploading(false);
    }
  };

  const remove = (index: number) => onChange(images.filter((_, i) => i !== index));

  return (
    <div>
      <span className="mb-1 block text-sm font-medium text-[#1B2430]">Images</span>

      <div className="flex flex-wrap gap-3">
        {images.map((image, index) => (
          <div key={`${image.url}-${index}`} className="relative h-20 w-20 overflow-hidden rounded-lg border border-black/10">
            <img src={image.url} alt="" className="h-full w-full object-cover" />
            <button
              type="button"
              onClick={() => remove(index)}
              className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/60 text-white"
            >
              <X size={12} strokeWidth={2} />
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-black/20 text-[#1B2430]/50 hover:border-[#C77D3D] hover:text-[#1B2430] disabled:opacity-50"
        >
          {uploading ? <Loader2 size={18} className="animate-spin" /> : <ImagePlus size={18} strokeWidth={1.6} />}
          <span className="text-[0.65rem]">{uploading ? "Uploading" : "Add"}</span>
        </button>

        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={onPick}
        />
      </div>
    </div>
  );
}