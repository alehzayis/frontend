"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, LogOut, Menu, User as UserIcon } from "lucide-react";

type AdminUser = {
  name?: string;
  email: string;
  role: string;
};

export default function Topbar({
  user,
  onMenuClick,
  onLogout,
}: {
  user: AdminUser | null;
  onMenuClick: () => void;
  onLogout: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const initials = (user?.name || user?.email || "?")
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <header className="flex h-16 items-center justify-between border-b border-[#4A1521]/10 bg-white px-5 lg:px-8">
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Open menu"
        className="flex h-9 w-9 items-center justify-center rounded-md text-[#4A1521] hover:bg-[#F8F3EA] lg:hidden"
      >
        <Menu size={20} strokeWidth={1.8} />
      </button>

      <span className="font-display text-[1.05rem] text-[#4A1521] lg:hidden">Admin</span>

      <div className="hidden flex-1 lg:block" />

      <div className="relative" ref={menuRef}>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-haspopup="menu"
          className="flex items-center gap-2.5 rounded-md px-2 py-1.5 hover:bg-[#F8F3EA]"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4A1521] font-body text-xs font-semibold text-[#F7E9C2]">
            {initials}
          </span>
          <span className="hidden text-left sm:block">
            <span className="block font-body text-sm font-medium text-[#3A101A]">{user?.name || "Admin"}</span>
            <span className="block font-body text-xs text-[#8B7B7E]">{user?.email}</span>
          </span>
          <ChevronDown size={16} strokeWidth={1.8} className="hidden text-[#8B7B7E] sm:block" />
        </button>

        {menuOpen && (
          <div
            role="menu"
            className="absolute right-0 top-[calc(100%+8px)] w-56 rounded-md border border-[#4A1521]/10 bg-white py-2 shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
          >
            <div className="border-b border-[#4A1521]/10 px-4 py-3">
              <div className="flex items-center gap-2 font-body text-sm font-medium text-[#3A101A]">
                <UserIcon size={14} strokeWidth={1.8} />
                {user?.name || "Admin"}
              </div>
              <div className="mt-1 truncate font-body text-xs text-[#8B7B7E]">{user?.email}</div>
              {user?.role && (
                <span className="mt-2 inline-block rounded-full bg-[#C59B27]/15 px-2 py-0.5 font-body text-[0.68rem] font-semibold uppercase tracking-[0.04em] text-[#8B6816]">
                  {user.role}
                </span>
              )}
            </div>
            <button
              type="button"
              role="menuitem"
              onClick={onLogout}
              className="flex w-full items-center gap-2 px-4 py-2.5 text-left font-body text-sm text-[#A03B3B] hover:bg-[#F8F3EA]"
            >
              <LogOut size={15} strokeWidth={1.8} />
              Log out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}