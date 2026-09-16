"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, X } from "lucide-react";
import { navItems } from "./admin/nav-items";

type AdminUser = {
  name?: string;
  email: string;
  role: string;
};

export default function Sidebar({
  open,
  onClose,
  user,
  onLogout,
}: {
  open: boolean;
  onClose: () => void;
  user: AdminUser | null;
  onLogout: () => void;
}) {
  const pathname = usePathname();

  const initials = (user?.name || user?.email || "?")
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <>
      {open && <div onClick={onClose} className="fixed inset-0 z-40 bg-black/40 lg:hidden" />}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-[#350C17] transition-transform duration-200 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <Link href="/admin" className="font-display text-lg font-semibold uppercase tracking-wide text-[#F7E9C2]">
            Machon Aleh Zayis
          </Link>
          <button onClick={onClose} className="text-[#D6C6C2] lg:hidden">
            <X size={20} />
          </button>
        </div>

        <div className="mx-6 h-px bg-[#C59B27]/20" />

        <nav className="flex-1 space-y-1 px-4 py-6">
          {navItems.map(({ label, href, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-sm px-3 py-2.5 font-body text-sm transition-colors ${
                  active ? "bg-[#4A1521] text-[#F7E9C2]" : "text-[#D6C6C2] hover:bg-[#4A1521]/50 hover:text-[#F7E9C2]"
                }`}
              >
                <Icon size={17} strokeWidth={1.6} />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-[#C59B27]/20 px-4 py-4">
          <div className="flex items-center gap-3 rounded-sm px-2 py-2">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#4A1521] font-body text-xs font-semibold text-[#F7E9C2]">
              {initials}
            </span>
            <div className="min-w-0">
              <div className="truncate font-body text-sm font-medium text-[#F7E9C2]">{user?.name || "Admin"}</div>
              <div className="truncate font-body text-xs text-[#8B7B7E]">{user?.email}</div>
            </div>
          </div>
          <button
            type="button"
            onClick={onLogout}
            className="mt-2 flex w-full items-center gap-2 rounded-sm px-2 py-2 font-body text-sm text-[#D6C6C2] transition-colors hover:bg-[#4A1521]/50 hover:text-[#F7E9C2]"
          >
            <LogOut size={16} strokeWidth={1.8} />
            Log out
          </button>
        </div>
      </aside>
    </>
  );
}