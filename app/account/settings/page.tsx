"use client";

import { FormEvent, useState } from "react";
import { toast } from "sonner";
import api from "@/lib/api";
import { useMe } from "../layout";

export default function AccountSettingsPage() {
  const me = useMe();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.post("/api/auth/change-password", { currentPassword, newPassword });
      toast.success("Password updated");
      setCurrentPassword("");
      setNewPassword("");
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Could not update your password");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="font-display text-2xl text-[#3A101A]">Account Details</h1>

      <div className="mt-6 max-w-md rounded-xl border border-[#4A1521]/10 bg-white p-6">
        <p className="font-body text-sm text-[#8B7B7E]">Name</p>
        <p className="font-body text-sm text-[#3A101A]">{me?.name}</p>
        <p className="mt-4 font-body text-sm text-[#8B7B7E]">Email</p>
        <p className="font-body text-sm text-[#3A101A]">{me?.email}</p>
      </div>

      <div className="mt-6 max-w-md rounded-xl border border-[#4A1521]/10 bg-white p-6">
        <h2 className="font-display text-lg text-[#3A101A]">Change Password</h2>
        <form onSubmit={onSubmit} className="mt-4 space-y-4">
          <div>
            <label className="font-body text-xs text-[#66575A]">Current Password</label>
            <input
              type="password"
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="mt-1 w-full rounded-md border border-[#4A1521]/15 px-3 py-2 font-body text-sm outline-none focus:border-[#4A1521]/40"
            />
          </div>
          <div>
            <label className="font-body text-xs text-[#66575A]">New Password</label>
            <input
              type="password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 w-full rounded-md border border-[#4A1521]/15 px-3 py-2 font-body text-sm outline-none focus:border-[#4A1521]/40"
            />
            <p className="mt-1 font-body text-xs text-[#8B7B7E]">
              At least 8 characters, with an uppercase letter, lowercase letter, number, and symbol.
            </p>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="rounded-md bg-[#4A1521] px-5 py-2.5 font-body text-sm font-semibold text-white disabled:opacity-50"
          >
            {submitting ? "Updating..." : "Update Password"}
          </button>
        </form>
      </div>
    </div>
  );
}