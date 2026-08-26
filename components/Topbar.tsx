"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Menu, LogOut } from "lucide-react";
import api from "@/lib/api";

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  const router = useRouter();

  const logout = async () => {
    try {
      await api.post("/api/auth/logout");
      router.push("/login");
    } catch {
      toast.error("Unable to log out. Please try again.");
    }
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-[#4A1521]/10 bg-[#F8F3EA] px-5 lg:px-8">
      <button onClick={onMenuClick} className="text-[#4A1521] lg:hidden">
        <Menu size={22} />
      </button>

      <div className="hidden font-display text-lg text-[#3A101A] lg:block">Dashboard</div>

      <button onClick={logout} className="flex items-center gap-2 font-body text-sm text-[#66575A] hover:text-[#4A1521]">
        <LogOut size={16} strokeWidth={1.6} />
        Logout
      </button>
    </header>
  );
}