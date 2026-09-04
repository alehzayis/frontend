"use client";

import Link from "next/link";

export default function QuoteBanner() {
  return (
    <section className="bg-[#F3ECDC] px-6 py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 rounded-[20px] border border-[#C59B27]/25 bg-[#FFFDF8] px-8 py-10 shadow-[0_24px_50px_-24px_rgba(43,11,18,0.35)] sm:px-10 md:flex-row md:items-center md:justify-between md:gap-10 md:px-12">
        <div className="flex flex-col items-center gap-5 text-center md:flex-row md:text-left">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#E8C264] to-[#B8891F] text-[#2B1A05] shadow-[0_12px_26px_-10px_rgba(197,155,39,0.65)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
              <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
              <path d="M10.5 9.5a1.5 1.5 0 1 1 2.5 1.1c-.7.6-1 1-1 1.9" />
              <circle cx="12" cy="15.2" r="0.1" fill="currentColor" />
            </svg>
          </span>

          <div>
            <h2 className="font-display text-[1.95rem] font-semibold leading-tight text-[#4A1521] sm:text-[2.2rem]">
              Your Vision Is Entrusted In Good Hands
            </h2>
            <p className="mt-2 font-body text-[1.02rem] text-[#6E5D57]">
              We're here to help, every step of the way.
            </p>
          </div>
        </div>

        <Link
          href="#quote"
          className="group inline-flex shrink-0 items-center gap-4 rounded-full bg-gradient-to-b from-[#E8C264] to-[#B8891F] py-2 pl-7 pr-2 font-body text-[0.85rem] font-bold uppercase tracking-[0.08em] text-[#2B1A05] shadow-[0_14px_28px_-10px_rgba(197,155,39,0.65)] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_18px_32px_-10px_rgba(197,155,39,0.75)]"
        >
          Get a Quote
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4A1521] text-[#FBF7EF] transition-transform duration-200 group-hover:translate-x-[3px]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}