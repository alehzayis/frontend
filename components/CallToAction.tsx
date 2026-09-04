import Link from "next/link";
import { ArrowRight } from "lucide-react";

const hebrewFiller = "בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר וַיְהִי אוֹר וַיַּרְא אֱלֹהִים אֶת הָאוֹר כִּי טוֹב";

export default function QuoteBanner() {
  return (
    <section className="relative overflow-hidden bg-[#F6EFE1] px-6 py-16 sm:py-20">
      <div aria-hidden="true" dir="rtl" className="pointer-events-none absolute -left-6 top-0 hidden h-full w-[240px] select-none font-hebrew text-[0.92rem] leading-[2] text-[#4A1521]/[0.05] xl:block">
        {hebrewFiller}
      </div>
      <div aria-hidden="true" dir="rtl" className="pointer-events-none absolute -right-6 top-0 hidden h-full w-[240px] select-none font-hebrew text-[0.92rem] leading-[2] text-[#4A1521]/[0.05] xl:block">
        {hebrewFiller}
      </div>

      <div className="relative mx-auto max-w-[1200px]">
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-[#C59B27]/60" />
          <span className="font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-[#9C7A1E]">Let&apos;s Bring Your Vision To Life</span>
          <span className="h-px w-10 bg-[#C59B27]/60" />
        </div>

        <div className="flex flex-col items-center gap-8 rounded-[20px] border border-[#C59B27]/25 bg-[#FFFDF8] px-8 py-10 shadow-[0_24px_50px_-24px_rgba(43,11,18,0.35)] sm:px-10 md:flex-row md:items-center md:justify-between md:gap-10 md:px-12">
          <div className="flex flex-col items-center gap-5 text-center md:flex-row md:text-left">
            <span className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#E8C264] to-[#B8891F] text-[#3A101A] shadow-[0_12px_26px_-10px_rgba(197,155,39,0.65)]">
              <span aria-hidden="true" className="absolute -inset-1 rounded-full border border-[#C59B27]/35" />
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                <path d="M10.5 9.5a1.5 1.5 0 1 1 2.5 1.1c-.7.6-1 1-1 1.9" />
                <circle cx="12" cy="15.2" r="0.1" fill="currentColor" />
              </svg>
            </span>

            <span aria-hidden="true" className="hidden h-14 w-px bg-[#4A1521]/10 md:block" />

            <div>
              <h2 className="font-display text-[1.95rem] font-semibold leading-tight text-[#4A1521] sm:text-[2.2rem]">Your Vision Is Entrusted In Good Hands</h2>
              <p className="mt-2 font-body text-[1.02rem] italic text-[#6E5D57]">We&apos;re here to help, every step of the way.</p>
            </div>
          </div>

          <Link href="#quote" className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#3A101A] px-7 py-3.5 font-body text-[0.8rem] font-bold uppercase tracking-[0.12em] text-[#E8C264] transition-colors duration-200 hover:bg-[#2B0B12]">
            Get a Quote
            <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}