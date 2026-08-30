"use client";

import { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

type BaseProps = {
  label: string;
  hint?: string;
};

export function TextField({ label, hint, ...props }: BaseProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block font-medium text-[#1B2430]">{label}</span>
      <input
        {...props}
        className="w-full rounded-lg border border-black/10 px-3 py-2 text-sm outline-none focus:border-[#C77D3D]"
      />
      {hint && <span className="mt-1 block text-xs text-[#1B2430]/45">{hint}</span>}
    </label>
  );
}

export function TextAreaField({ label, hint, ...props }: BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block font-medium text-[#1B2430]">{label}</span>
      <textarea
        {...props}
        className="w-full rounded-lg border border-black/10 px-3 py-2 text-sm outline-none focus:border-[#C77D3D]"
      />
      {hint && <span className="mt-1 block text-xs text-[#1B2430]/45">{hint}</span>}
    </label>
  );
}

export function SelectField({
  label,
  hint,
  children,
  ...props
}: BaseProps & SelectHTMLAttributes<HTMLSelectElement> & { children: ReactNode }) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block font-medium text-[#1B2430]">{label}</span>
      <select
        {...props}
        className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-[#C77D3D]"
      >
        {children}
      </select>
      {hint && <span className="mt-1 block text-xs text-[#1B2430]/45">{hint}</span>}
    </label>
  );
}