"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { Category } from "@/components/shop/shopTypes";

const FORMAT_OPTIONS = [
  { key: "hardcover", label: "Hardcover" },
  { key: "softcover", label: "Softcover" },
  { key: "digital", label: "Digital" },
];

const LANGUAGE_OPTIONS = [
  { key: "hebrew", label: "Hebrew" },
  { key: "english", label: "English" },
  { key: "yiddish", label: "Yiddish" },
];

type Props = {
  formats: string[];
  onFormatsChange: (formats: string[]) => void;
  languages: string[];
  onLanguagesChange: (languages: string[]) => void;
  category: string;
  onCategoryChange: (categoryId: string) => void;
};

export default function ProductFilters({
  formats,
  onFormatsChange,
  languages,
  onLanguagesChange,
  category,
  onCategoryChange,
}: Props) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    api
      .get("/api/categories")
      .then((res) => setCategories(res.data.data))
      .catch(() => setCategories([]));
  }, []);

  const toggle = (list: string[], value: string, onChange: (next: string[]) => void) => {
    onChange(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  return (
    <div className="space-y-[26px]">
      <div>
        <div className="mb-[10px] font-body text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#8B6816]">
          Format
        </div>
        <div className="space-y-[7px]">
          {FORMAT_OPTIONS.map((opt) => (
            <label key={opt.key} className="flex cursor-pointer items-center gap-[8px] font-body text-[0.86rem] text-[#3A101A]">
              <input
                type="checkbox"
                checked={formats.includes(opt.key)}
                onChange={() => toggle(formats, opt.key, onFormatsChange)}
                className="h-[15px] w-[15px] accent-[#4A1521]"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-[10px] font-body text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#8B6816]">
          Language
        </div>
        <div className="space-y-[7px]">
          {LANGUAGE_OPTIONS.map((opt) => (
            <label key={opt.key} className="flex cursor-pointer items-center gap-[8px] font-body text-[0.86rem] text-[#3A101A]">
              <input
                type="checkbox"
                checked={languages.includes(opt.key)}
                onChange={() => toggle(languages, opt.key, onLanguagesChange)}
                className="h-[15px] w-[15px] accent-[#4A1521]"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-[10px] font-body text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#8B6816]">
          Categories
        </div>
        <div className="space-y-[5px]">
          <button
            type="button"
            onClick={() => onCategoryChange("")}
            className={`block w-full rounded-[2px] px-[8px] py-[5px] text-left font-body text-[0.86rem] ${
              category === "" ? "bg-[#4A1521] text-[#FFF9EF]" : "text-[#3A101A] hover:bg-[#F8F3EA]"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat._id}
              type="button"
              onClick={() => onCategoryChange(cat._id)}
              className={`block w-full rounded-[2px] px-[8px] py-[5px] text-left font-body text-[0.86rem] ${
                category === cat._id ? "bg-[#4A1521] text-[#FFF9EF]" : "text-[#3A101A] hover:bg-[#F8F3EA]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}