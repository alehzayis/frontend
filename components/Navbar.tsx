"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Search } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", dropdown: true },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-[100] bg-[#FBF7EF]">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-6 px-6 py-3 sm:px-8 sm:py-3.5">
          <Link href="/" className="flex shrink-0 items-center" aria-label="Machon Aleh Zayis — Home">
            <Image src="/assets/logo.png" alt="Machon Aleh Zayis" width={260} height={72} priority className="h-12 w-auto sm:h-14" />
          </Link>

          <nav aria-label="Primary">
            <ul className="hidden items-center gap-9 md:flex">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`group relative flex items-center gap-1 font-display text-[0.95rem] uppercase tracking-[0.12em] transition-colors ${active ? "text-[#9C7A1E]" : "text-[#241A1D] hover:text-[#9C7A1E]"}`}
                    >
                      {link.label}
                      {link.dropdown && <ChevronDown size={14} strokeWidth={2} className="mt-[1px]" />}
                      <span className={`absolute -bottom-[6px] left-0 h-px bg-[#C59B27] transition-all duration-300 ease-out ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-4 sm:gap-5">
            <button type="button" aria-label="Search" className="hidden h-10 w-10 items-center justify-center text-[#241A1D] transition-colors hover:text-[#9C7A1E] sm:flex">
              <Search size={18} strokeWidth={1.6} />
            </button>

            <Link
              href="/cart"
              aria-label="Shopping cart"
              className="relative hidden h-10 w-10 items-center justify-center text-[#241A1D] sm:flex"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-b from-[#E8C264] to-[#B8891F] text-[0.6rem] font-bold text-[#2B1A05]">
                0
              </span>
            </Link>

            <span aria-hidden="true" className="hidden h-6 w-px bg-[#4A1521]/15 sm:block" />

            <Link
              href="/register"
              className="hidden items-center gap-2 rounded-full bg-[#4A1521] px-6 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#FBF7EF] transition-colors duration-200 hover:bg-[#3A101A] md:inline-flex"
            >
              Sign Up
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#4A1521] md:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[200] flex flex-col bg-[#FBF7EF] transition-opacity duration-200 md:hidden ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex h-[82px] items-center justify-between border-b border-[#4A1521]/10 px-6">
          <Image src="/assets/logo.png" alt="Machon Aleh Zayis" width={200} height={56} className="h-10 w-auto" />
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#4A1521]/10 text-[#4A1521]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col gap-1.5 px-8 py-10">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setMobileOpen(false)} className="block border-b border-[#4A1521]/10 py-3 font-display text-3xl text-[#4A1521]">
                <span className="mr-3 font-body text-xs tracking-[0.2em] text-[#C59B27]">{String(i + 1).padStart(2, "0")}</span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}