"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { navItems } from "./admin/nav-items";

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  return (
    <>
      {open && <div onClick={onClose} className="fixed inset-0 z-40 bg-black/40 lg:hidden" />}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 flex flex-col bg-[#350C17] transition-transform duration-200 lg:translate-x-0 ${
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

        <div className="px-6 py-6 font-body text-xs italic text-[#8B7B7E]">Admin Panel</div>
      </aside>
    </>
  );
}