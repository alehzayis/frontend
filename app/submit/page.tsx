"use client";

import { useState } from "react";
import { toast } from "sonner";
import { UploadCloud } from "lucide-react";
import api from "@/lib/api";
import Navbar from "@/components/Navbar";

const services = [
  { key: "heavyEditing", label: "Heavy Editing" },
  { key: "midLevel", label: "Mid-Level" },
  { key: "proofreading", label: "Proofreading" },
] as const;

export default function SubmitPage() {
  const [file, setFile] = useState<File | null>(null);
  const [language, setLanguage] = useState<"english" | "hebrew">("english");
  const [service, setService] = useState<(typeof services)[number]["key"]>("proofreading");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ wordCount: number; estimatedCost: number } | null>(null);

  const onSubmit = async () => {
    if (!file) {
      toast.error("Please choose a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("language", language);
    formData.append("service", service);

    try {
      setLoading(true);
      const response = await api.post("/api/submissions", formData);

      setResult({
        wordCount: response.data.data.wordCount,
        estimatedCost: response.data.data.estimatedCost,
      });

      toast.success("Manuscript submitted for review");
      setFile(null);
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Unable to submit your file");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F3EA] text-[#3A101A]">
      <Navbar />

      <div className="mx-auto max-w-xl px-6 py-16">
        <h1 className="font-display text-3xl text-[#3A101A]">Submit Your Manuscript</h1>
        <p className="mt-2 font-body text-sm text-[#66575A]">
          Upload a PDF or DOCX file and choose the service you need. Your cost is calculated automatically from the document's word count.
        </p>

        <div className="mt-8 space-y-6 rounded-sm border border-[#4A1521]/10 bg-white p-6">
          <div>
            <label className="mb-2 block font-body text-xs font-semibold uppercase tracking-wide text-[#4A1521]">Language</label>
            <div className="flex gap-3">
              {(["english", "hebrew"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`flex-1 rounded-sm border px-4 py-2.5 font-body text-sm capitalize ${
                    language === lang ? "border-[#4A1521] bg-[#4A1521] text-[#FFF9EF]" : "border-[#4A1521]/20 text-[#66575A]"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block font-body text-xs font-semibold uppercase tracking-wide text-[#4A1521]">Service</label>
            <div className="flex flex-col gap-2">
              {services.map((s) => (
                <button
                  key={s.key}
                  onClick={() => setService(s.key)}
                  className={`rounded-sm border px-4 py-2.5 text-left font-body text-sm ${
                    service === s.key ? "border-[#4A1521] bg-[#4A1521] text-[#FFF9EF]" : "border-[#4A1521]/20 text-[#66575A]"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block font-body text-xs font-semibold uppercase tracking-wide text-[#4A1521]">File</label>
            <label className="flex h-32 cursor-pointer flex-col items-center justify-center gap-2 rounded-sm border border-dashed border-[#4A1521]/30 text-[#8B7B7E] hover:border-[#4A1521]">
              <UploadCloud size={22} strokeWidth={1.5} />
              <span className="font-body text-sm">{file ? file.name : "Click to choose a PDF or DOCX file"}</span>
              <input type="file" accept=".pdf,.docx" className="hidden" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
            </label>
          </div>

          <button
            onClick={onSubmit}
            disabled={loading}
            className="h-12 w-full rounded-sm bg-[#4A1521] font-body text-sm font-semibold uppercase tracking-wide text-[#FFF9EF] hover:bg-[#310B13] disabled:opacity-60"
          >
            {loading ? "Uploading..." : "Submit for Review"}
          </button>
        </div>

        {result && (
          <div className="mt-6 rounded-sm border border-[#C59B27]/30 bg-[#C59B27]/5 p-5">
            <p className="font-body text-sm text-[#3A101A]">
              Word count: <strong>{result.wordCount.toLocaleString()}</strong>
            </p>
            <p className="mt-1 font-body text-sm text-[#3A101A]">
              Estimated cost: <strong>${result.estimatedCost.toFixed(2)}</strong>
            </p>
          </div>
        )}
      </div>
    </main>
  );
}