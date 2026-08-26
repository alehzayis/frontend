"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { ArrowRight, Eye, EyeOff, LockKeyhole } from "lucide-react";
import api from "@/lib/api";
import Navbar from "@/components/Navbar";

type ChangePasswordData = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const passwordPolicy = [
  { test: (v: string) => v.length >= 8, message: "Password must contain at least 8 characters." },
  { test: (v: string) => v.length <= 128, message: "Password is too long." },
  { test: (v: string) => /[A-Z]/.test(v), message: "Password must contain at least one uppercase letter." },
  { test: (v: string) => /[a-z]/.test(v), message: "Password must contain at least one lowercase letter." },
  { test: (v: string) => /[0-9]/.test(v), message: "Password must contain at least one number." },
  { test: (v: string) => /[^A-Za-z0-9]/.test(v), message: "Password must contain at least one special character." },
];

export default function ChangePasswordPage() {
  const router = useRouter();

  const [data, setData] = useState<ChangePasswordData>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!data.currentPassword) return "Please enter your current password.";
    if (!data.newPassword) return "Please enter a new password.";

    for (const rule of passwordPolicy) {
      if (!rule.test(data.newPassword)) return rule.message;
    }

    if (data.newPassword === data.currentPassword) {
      return "New password must be different from your current password.";
    }

    if (data.newPassword !== data.confirmPassword) return "Passwords do not match.";

    return null;
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    const validationError = validateForm();
    if (validationError) {
      toast.error(validationError);
      return;
    }

    try {
      setLoading(true);

      await api.post("/api/auth/change-password", {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      });

      toast.success("Password updated successfully. Please sign in again.");
      setData({ currentPassword: "", newPassword: "", confirmPassword: "" });

      router.push("/login");
    } catch (err: any) {
      const message =
        err?.response?.data?.message ||
        "Unable to update your password. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F3EA] text-[#3A101A]">
      <Navbar />

      <div className="flex min-h-[calc(100vh-96px)] items-center justify-center px-6 py-12 sm:px-10">
        <div className="w-full max-w-[440px]">
          <div className="mb-8">
            <span className="mb-3 block font-body text-[0.72rem] font-semibold uppercase tracking-[0.25em] text-[#9A741A]">
              Account Security
            </span>

            <h1 className="font-display text-[2.6rem] leading-none text-[#3A101A] sm:text-[3rem]">
              Set a new password.
            </h1>

            <p className="mt-4 font-body text-[0.95rem] leading-[1.6] text-[#66575A]">
              For your security, you must change your password before continuing.
            </p>
          </div>

          <form onSubmit={onSubmitHandler} noValidate className="space-y-5">
            <div>
              <label
                htmlFor="currentPassword"
                className="mb-2 block font-body text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-[#4A1521]"
              >
                Current Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={17}
                  strokeWidth={1.4}
                  className="absolute left-0 top-1/2 -translate-y-1/2 text-[#A77B18]"
                />

                <input
                  id="currentPassword"
                  name="currentPassword"
                  type={showCurrent ? "text" : "password"}
                  autoComplete="current-password"
                  value={data.currentPassword}
                  onChange={onChangeHandler}
                  placeholder="Enter your current password"
                  disabled={loading}
                  className="h-[52px] w-full border-0 border-b border-[#4A1521]/20 bg-transparent pl-8 pr-10 font-body text-[1rem] text-[#3A101A] outline-none placeholder:text-[#9A8B8D] focus:border-[#4A1521] focus:ring-0 disabled:cursor-not-allowed disabled:opacity-60"
                />

                <button
                  type="button"
                  onClick={() => setShowCurrent((v) => !v)}
                  aria-label={showCurrent ? "Hide password" : "Show password"}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-[#6B5B5E] hover:text-[#4A1521]"
                >
                  {showCurrent ? <EyeOff size={18} strokeWidth={1.4} /> : <Eye size={18} strokeWidth={1.4} />}
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="newPassword"
                className="mb-2 block font-body text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-[#4A1521]"
              >
                New Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={17}
                  strokeWidth={1.4}
                  className="absolute left-0 top-1/2 -translate-y-1/2 text-[#A77B18]"
                />

                <input
                  id="newPassword"
                  name="newPassword"
                  type={showNew ? "text" : "password"}
                  autoComplete="new-password"
                  value={data.newPassword}
                  onChange={onChangeHandler}
                  placeholder="Create a new password"
                  disabled={loading}
                  className="h-[52px] w-full border-0 border-b border-[#4A1521]/20 bg-transparent pl-8 pr-10 font-body text-[1rem] text-[#3A101A] outline-none placeholder:text-[#9A8B8D] focus:border-[#4A1521] focus:ring-0 disabled:cursor-not-allowed disabled:opacity-60"
                />

                <button
                  type="button"
                  onClick={() => setShowNew((v) => !v)}
                  aria-label={showNew ? "Hide password" : "Show password"}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-[#6B5B5E] hover:text-[#4A1521]"
                >
                  {showNew ? <EyeOff size={18} strokeWidth={1.4} /> : <Eye size={18} strokeWidth={1.4} />}
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block font-body text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-[#4A1521]"
              >
                Confirm New Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={17}
                  strokeWidth={1.4}
                  className="absolute left-0 top-1/2 -translate-y-1/2 text-[#A77B18]"
                />

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  autoComplete="new-password"
                  value={data.confirmPassword}
                  onChange={onChangeHandler}
                  placeholder="Confirm your new password"
                  disabled={loading}
                  className="h-[52px] w-full border-0 border-b border-[#4A1521]/20 bg-transparent pl-8 pr-10 font-body text-[1rem] text-[#3A101A] outline-none placeholder:text-[#9A8B8D] focus:border-[#4A1521] focus:ring-0 disabled:cursor-not-allowed disabled:opacity-60"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm((v) => !v)}
                  aria-label={showConfirm ? "Hide password" : "Show password"}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-[#6B5B5E] hover:text-[#4A1521]"
                >
                  {showConfirm ? <EyeOff size={18} strokeWidth={1.4} /> : <Eye size={18} strokeWidth={1.4} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group mt-2 flex h-[54px] w-full items-center justify-center gap-3 rounded-[2px] border border-[#4A1521] bg-[#4A1521] font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-[#FFF9EF] shadow-[0_10px_25px_rgba(74,21,33,0.15)] transition-all duration-200 hover:bg-[#310B13] hover:shadow-[0_12px_30px_rgba(74,21,33,0.22)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#FFF9EF]/30 border-t-[#FFF9EF]" />
                  Updating...
                </>
              ) : (
                <>
                  Update Password
                  <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>

          <p className="mt-8 text-center font-body text-[0.85rem] text-[#66575A]">
            <Link href="/login" className="underline decoration-[#C59B27] underline-offset-4 hover:text-[#4A1521]">
              Back to sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}