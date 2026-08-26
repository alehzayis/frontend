"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Download } from "lucide-react";
import api from "@/lib/api";

type Submission = {
  _id: string;
  originalName: string;
  user: { name: string; email: string };
  language: "english" | "hebrew";
  service: "heavyEditing" | "midLevel" | "proofreading";
  wordCount: number;
  estimatedCost: number;
  status: "new" | "reviewed" | "sent";
};

const tabs = [
  { key: "new", label: "New" },
  { key: "reviewed", label: "Reviewed" },
  { key: "sent", label: "Sent" },
  { key: "all", label: "Show All" },
] as const;

const serviceLabels: Record<string, string> = {
  heavyEditing: "Heavy Editing",
  midLevel: "Mid-Level",
  proofreading: "Proofreading",
};

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["key"]>("new");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/api/submissions")
      .then((res) => setSubmissions(res.data.data))
      .catch(() => toast.error("Unable to load submissions"))
      .finally(() => setLoading(false));
  }, []);

  const changeStatus = async (id: string, status: string) => {
    const prev = submissions;
    setSubmissions((current) => current.map((s) => (s._id === id ? { ...s, status: status as Submission["status"] } : s)));

    try {
      await api.patch(`/api/submissions/${id}/status`, { status });
      toast.success("Status updated");
    } catch {
      setSubmissions(prev);
      toast.error("Unable to update status");
    }
  };

  const downloadFile = async (id: string, name: string) => {
    try {
      const response = await api.get(`/api/submissions/${id}/file`, { responseType: "blob" });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.download = name;
      link.click();
      window.URL.revokeObjectURL(url);
    } catch {
      toast.error("Unable to download file");
    }
  };

  const countFor = (key: (typeof tabs)[number]["key"]) =>
    key === "all" ? submissions.length : submissions.filter((s) => s.status === key).length;

  const visible = activeTab === "all" ? submissions : submissions.filter((s) => s.status === activeTab);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl text-[#3A101A]">Submissions</h1>
        <p className="mt-1 font-body text-sm text-[#66575A]">Review and manage uploaded manuscripts.</p>
      </div>

      <div className="flex items-center gap-2 border-b border-[#4A1521]/10">
        {tabs.map((tab) => {
          const active = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2.5 font-body text-sm ${
                active ? "border-b-2 border-[#4A1521] font-semibold text-[#4A1521]" : "text-[#8B7B7E] hover:text-[#4A1521]"
              }`}
            >
              {tab.label} ({countFor(tab.key)})
            </button>
          );
        })}
      </div>

      {loading ? (
        <p className="font-body text-sm text-[#66575A]">Loading...</p>
      ) : visible.length === 0 ? (
        <p className="font-body text-sm text-[#66575A]">No submissions here.</p>
      ) : (
        <div className="overflow-x-auto rounded-sm border border-[#4A1521]/10 bg-white">
          <table className="w-full text-left font-body text-sm">
            <thead className="border-b border-[#4A1521]/10 text-xs uppercase tracking-wide text-[#8B6816]">
              <tr>
                <th className="px-4 py-3">File</th>
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3">Language</th>
                <th className="px-4 py-3">Service</th>
                <th className="px-4 py-3">Words</th>
                <th className="px-4 py-3">Cost</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {visible.map((s) => (
                <tr key={s._id} className="border-b border-[#4A1521]/5 last:border-0">
                  <td className="px-4 py-3 text-[#3A101A]">{s.originalName}</td>
                  <td className="px-4 py-3 text-[#66575A]">{s.user?.name}</td>
                  <td className="px-4 py-3 capitalize text-[#66575A]">{s.language}</td>
                  <td className="px-4 py-3 text-[#66575A]">{serviceLabels[s.service]}</td>
                  <td className="px-4 py-3 text-[#66575A]">{s.wordCount.toLocaleString()}</td>
                  <td className="px-4 py-3 text-[#66575A]">${s.estimatedCost.toFixed(2)}</td>
                  <td className="px-4 py-3">
                    <select
                      value={s.status}
                      onChange={(e) => changeStatus(s._id, e.target.value)}
                      className="rounded-sm border border-[#4A1521]/20 bg-transparent px-2 py-1 text-sm"
                    >
                      <option value="new">New</option>
                      <option value="reviewed">Reviewed</option>
                      <option value="sent">Sent</option>
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <button onClick={() => downloadFile(s._id, s.originalName)} className="text-[#8B6816] hover:text-[#4A1521]">
                      <Download size={16} strokeWidth={1.6} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}