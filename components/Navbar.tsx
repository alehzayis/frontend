"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* =========================================================
          SIGNATURE SPINE KEY
      ========================================================= */}
      <div
        aria-hidden="true"
        className="flex h-[5px] w-full"
      >
        <span className="flex-1 bg-[#4A1521]" />
        <span className="flex-1 bg-[#1C3326]" />
        <span className="flex-1 bg-[#1B2740]" />
        <span className="flex-1 bg-[#4A2A1B]" />
        <span className="flex-1 bg-gradient-to-r from-[#C59B27] to-[#E0BA53]" />
      </div>

      {/* =========================================================
          DESKTOP / MAIN NAVBAR
      ========================================================= */}
      <header
        className="
          sticky top-0 z-[100]
          border-b border-[rgba(74,21,33,0.13)]
          bg-[rgba(251,247,239,0.92)]
          backdrop-blur-[10px]
        "
      >
        <div
          className="
            mx-auto flex min-h-[82px] w-full max-w-[1200px]
            items-center justify-between
            gap-4 px-6 py-[14px]
          "
        >
          {/* BRAND */}
          <a
            href="#home"
            className="flex min-w-0 items-center gap-[13px]"
          >
            {/* Original logo */}
            <svg
              className="
                h-[34px] w-[34px]
                shrink-0
                text-[#4A1521]
              "
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M18 33C18 33 18 10 28 4C28 4 25 15 18 19C11 15 8 4 8 4C18 10 18 33 18 33Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />

              <path
                d="M18 19V33"
                stroke="#C59B27"
                strokeWidth="1.5"
              />

              <path
                d="M18 24C14 22 10 23 10 23"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />

              <path
                d="M18 21C22 19 26 20 26 20"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>

            <span
              className="
                whitespace-nowrap
                font-display
                text-[1.4rem]
                font-semibold
                uppercase
                tracking-[0.04em]
                text-[#4A1521]
              "
            >
              Machon Aleh Zayis
            </span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden sm:block">
            <ul className="flex items-center gap-[30px]">
              <NavItem href="#home">Home</NavItem>
              <NavItem href="#about">About</NavItem>
              <NavItem href="#services">Services</NavItem>
              <NavItem href="#work">Our Work</NavItem>
              <NavItem href="#contact">Contact</NavItem>
            </ul>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-[18px]">
            {/* CART */}
            <button
              type="button"
              aria-label="Shopping Cart"
              className="
                relative flex cursor-pointer
                items-center
                p-1
                text-[#4A1521]
              "
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>

              <span
                className="
                  absolute -right-[6px] -top-[3px]
                  flex h-4 w-4
                  items-center justify-center
                  rounded-full
                  bg-[#C59B27]
                  text-[0.63rem]
                  font-bold
                  text-[#241505]
                "
              >
                0
              </span>
            </button>

            {/* GET A QUOTE */}
            <a
              href="#quote"
              className="
                hidden sm:inline-flex
                items-center justify-center
                gap-2
                border border-[#4A1521]
                bg-[#4A1521]
                px-[30px] py-[15px]
                font-body
                text-[0.8rem]
                font-medium
                uppercase
                tracking-[0.18em]
                text-[#FBF7EF]
                shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_8px_20px_-10px_rgba(43,11,18,0.55)]
                transition-all duration-300
                ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:-translate-y-0.5
                hover:border-[#2B0B12]
                hover:bg-[#2B0B12]
                hover:shadow-[0_14px_26px_-12px_rgba(43,11,18,0.55)]
              "
            >
              Get a Quote
            </a>

            {/* MOBILE TOGGLE */}
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-[2px]
                border border-[rgba(74,21,33,0.13)]
                bg-transparent
                text-[#4A1521]
                sm:hidden
              "
            >
              <svg
                className="h-[18px] w-[18px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================
          MOBILE NAVIGATION
      ========================================================= */}
      {mobileOpen && (
        <div
          className="
            fixed inset-0 z-[200]
            flex flex-col
            bg-[#FBF7EF]
            sm:hidden
          "
        >
          {/* MOBILE TOP */}
          <div
            className="
              flex h-[82px]
              items-center justify-between
              border-b border-[rgba(74,21,33,0.13)]
              px-6
            "
          >
            <span
              className="
                font-display
                text-[1.2rem]
                font-semibold
                uppercase
                tracking-[0.02em]
                text-[#4A1521]
              "
            >
              Machon Aleh Zayis
            </span>

            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMobile}
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-[2px]
                border border-[rgba(74,21,33,0.13)]
                bg-transparent
                text-[#4A1521]
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                className="h-[18px] w-[18px]"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* MOBILE LINKS */}
          <ul className="flex flex-col gap-[6px] px-8 py-10">
            <MobileNavItem
              number="01"
              href="#home"
              onClick={closeMobile}
            >
              Home
            </MobileNavItem>

            <MobileNavItem
              number="02"
              href="#about"
              onClick={closeMobile}
            >
              About
            </MobileNavItem>

            <MobileNavItem
              number="03"
              href="#services"
              onClick={closeMobile}
            >
              Services
            </MobileNavItem>

            <MobileNavItem
              number="04"
              href="#work"
              onClick={closeMobile}
            >
              Our Work
            </MobileNavItem>

            <MobileNavItem
              number="05"
              href="#contact"
              onClick={closeMobile}
            >
              Contact
            </MobileNavItem>
          </ul>
        </div>
      )}
    </>
  );
}

/* ===============================================================
   DESKTOP NAV ITEM
================================================================ */

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="
          group relative
          font-body
          text-[0.84rem]
          uppercase
          tracking-[0.1em]
          text-[#241A1D]
          transition-colors duration-200
          hover:text-[#4A1521]
        "
      >
        {children}

        <span
          className="
            absolute
            -bottom-[5px]
            left-0
            h-px
            w-0
            bg-[#C59B27]
            transition-all duration-300
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:w-full
          "
        />
      </a>
    </li>
  );
}

/* ===============================================================
   MOBILE NAV ITEM
================================================================ */

function MobileNavItem({
  number,
  href,
  children,
  onClick,
}: {
  number: string;
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className="
          block
          border-b border-[rgba(74,21,33,0.13)]
          py-3
          font-display
          text-[2rem]
          text-[#4A1521]
        "
      >
        <span
          className="
            mr-[14px]
            font-body
            text-[0.75rem]
            tracking-[0.2em]
            text-[#C59B27]
          "
        >
          {number}
        </span>

        {children}
      </a>
    </li>
  );
}