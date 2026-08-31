"use client";

import { useEffect, useState, createContext, useContext } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import api from "@/lib/api";
import { LayoutDashboard, Package, UserCircle, HelpCircle, LogOut } from "lucide-react";

type Me = { name: string; email: string };

const MeContext = createContext<Me | null>(null);
export const useMe = () => useContext(MeContext);

const NAV_ITEMS = [
  { label: "Overview", href: "/account", icon: LayoutDashboard },
  { label: "My Orders", href: "/account/orders", icon: Package },
  { label: "Account Details", href: "/account/settings", icon: UserCircle },
];

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [me, setMe] = useState<Me | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    api
      .get("/api/auth/me")
      .then((res) => {
        if (!cancelled) setMe(res.data.data);
      })
      .catch((err) => {
        if (cancelled) return;
        if (err?.response?.status === 401) {
          router.replace("/login");
          return;
        }
        toast.error("Unable to load your account");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [router]);

  const logout = async () => {
    try {
      await api.post("/api/auth/logout");
    } catch {
      // ignore, redirecting regardless
    }
    router.replace("/login");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F8F3EA] font-body text-sm text-[#8B7B7E]">
        Loading your account...
      </div>
    );
  }

  if (!me) return null;

  const initials = me.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <MeContext.Provider value={me}>
      <div className="flex min-h-screen bg-[#F8F3EA]">
        <aside className="hidden w-64 shrink-0 flex-col bg-[#1B2740] px-4 py-8 sm:flex">
          <Link href="/" className="mb-10 px-2 font-display text-lg font-semibold text-white">
            Machon Aleh Zayis
          </Link>

          <nav className="flex flex-1 flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 font-body text-sm font-medium transition-colors ${
                    active ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className="h-[18px] w-[18px]" />
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/#contact"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-body text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white"
            >
              <HelpCircle className="h-[18px] w-[18px]" />
              Help &amp; Support
            </Link>
          </nav>

          <button
            type="button"
            onClick={logout}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-body text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white"
          >
            <LogOut className="h-[18px] w-[18px]" />
            Logout
          </button>
        </aside>

        <div className="flex-1">
          <header className="flex items-center justify-between border-b border-[#4A1521]/10 bg-white px-6 py-4 sm:px-8">
            <p className="font-display text-sm text-[#3A101A] sm:hidden">Machon Aleh Zayis</p>
            <div className="hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C59B27]/20 font-body text-xs font-semibold text-[#3A101A]">
                {initials}
              </div>
              <div className="hidden text-right sm:block">
                <p className="font-body text-sm font-medium text-[#3A101A]">{me.name}</p>
                <p className="font-body text-xs text-[#8B7B7E]">{me.email}</p>
              </div>
            </div>
          </header>

          <main className="px-6 py-8 sm:px-10">{children}</main>
        </div>
      </div>
    </MeContext.Provider>
  );
}