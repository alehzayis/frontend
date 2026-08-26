"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import api from "@/lib/api";

type Rates = { heavyEditing: number; midLevel: number; proofreading: number };
type Pricing = { english: Rates; hebrew: Rates };

export default function PricingPage() {
  const [pricing, setPricing] = useState<Pricing | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    api
      .get("/api/pricing")
      .then((res) => setPricing(res.data.data))
      .catch(() => toast.error("Unable to load pricing"));
  }, []);

  const updateRate = (lang: "english" | "hebrew", tier: keyof Rates, value: string) => {
    if (!pricing) return;
    setPricing({ ...pricing, [lang]: { ...pricing[lang], [tier]: Number(value) } });
  };

  const save = async () => {
    if (!pricing) return;
    setSaving(true);
    try {
      const response = await api.patch("/api/pricing", pricing);
      setPricing(response.data.data);
      toast.success("Pricing updated");
    } catch {
      toast.error("Unable to update pricing");
    } finally {
      setSaving(false);
    }
  };

  if (!pricing) return <p className="font-body text-sm text-[#66575A]">Loading...</p>;

  const renderField = (lang: "english" | "hebrew", tier: keyof Rates, label: string) => (
    <div>
      <label className="mb-1 block font-body text-xs font-semibold uppercase tracking-wide text-[#4A1521]">{label}</label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B7B7E]">$</span>
        <input
          type="number"
          step="0.001"
          min="0"
          value={pricing[lang][tier]}
          onChange={(e) => updateRate(lang, tier, e.target.value)}
          className="h-11 w-full rounded-sm border border-[#4A1521]/20 bg-white pl-7 pr-3 font-body text-sm outline-none focus:border-[#4A1521]"
        />
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <h1 className="font-display text-3xl text-[#3A101A]">Pricing</h1>
        <p className="mt-1 font-body text-sm text-[#66575A]">Per-word rates used to calculate submission costs.</p>
      </div>

      <div className="rounded-sm border border-[#4A1521]/10 bg-white p-6">
        <h2 className="font-display text-xl text-[#3A101A]">English</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {renderField("english", "heavyEditing", "Heavy Editing")}
          {renderField("english", "midLevel", "Mid-Level")}
          {renderField("english", "proofreading", "Proofreading")}
        </div>
      </div>

      <div className="rounded-sm border border-[#4A1521]/10 bg-white p-6">
        <h2 className="font-display text-xl text-[#3A101A]">Hebrew</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {renderField("hebrew", "heavyEditing", "Heavy Editing")}
          {renderField("hebrew", "midLevel", "Mid-Level")}
          {renderField("hebrew", "proofreading", "Proofreading")}
        </div>
      </div>

      <button
        onClick={save}
        disabled={saving}
        className="h-12 rounded-sm bg-[#4A1521] px-8 font-body text-sm font-semibold uppercase tracking-wide text-[#FFF9EF] hover:bg-[#310B13] disabled:opacity-60"
      >
        {saving ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
}