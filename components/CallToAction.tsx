import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function QuoteBanner() {
  return (
    <section className="bg-[#F6EFE1] px-6 py-16 sm:py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 overflow-hidden rounded-[20px] border border-[#C59B27]/20 bg-[#FFFDF8] shadow-[0_34px_70px_-36px_rgba(43,11,18,0.4)] lg:grid-cols-[1.4fr_1fr]">
        {/* Message */}
        <div className="flex flex-col items-center justify-center px-8 py-12 text-center sm:px-12 lg:items-start lg:px-16 lg:py-16 lg:text-left">
          <span className="inline-flex items-center gap-4 font-body text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-[#9C7A1E]">
            Let&apos;s bring your vision to life
            <span aria-hidden="true" className="hidden h-px w-9 bg-[#C59B27]/70 sm:block" />
          </span>

          <h2 className="mt-5 font-display text-[2.4rem] font-medium leading-[1.1] text-[#3A101A] sm:text-[2.9rem] lg:text-[3.2rem]">
            Your Vision Is Entrusted in
            <span className="block italic text-[#B8912A]">Good Hands</span>
          </h2>

          <span aria-hidden="true" className="mt-7 block h-[2px] w-14 bg-[#C59B27]" />

          <p className="mt-6 font-body text-[1.08rem] leading-[1.8] text-[#5C4B46]">
            We&apos;re here to help, every step of the way.
          </p>
        </div>

        {/* Quote action */}
        <div className="flex flex-col items-center justify-center border-t border-[#4A1521]/[0.08] bg-[#FBF6EA] px-8 py-12 text-center sm:px-12 lg:border-l lg:border-t-0 lg:px-12 lg:py-16">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#C59B27]/25 bg-[#FFFDF8] text-[#B8912A]">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
              <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
              <path d="M14 3v5h5" />
              <path d="M9 13h6M9 17h4" />
            </svg>
          </span>

          <h3 className="mt-5 font-display text-[1.75rem] font-medium leading-tight text-[#3A101A]">Request a Quote</h3>
          <p className="mt-2 max-w-[19rem] font-body text-[1rem] leading-[1.6] text-[#6E5D57]">
            Tell us about your sefer or manuscript and we&apos;ll take it from there.
          </p>

          <a
            href="https://alehzayissubmissin.netlify.app/submit"
            className="group mt-7 flex w-full max-w-[20rem] items-center justify-center gap-3 rounded-md border border-[#C59B27]/60 bg-[#4A1521] px-7 py-[17px] font-body text-[0.82rem] font-bold uppercase tracking-[0.22em] text-[#FFFDF8] shadow-[0_16px_30px_-16px_rgba(43,11,18,0.75)] transition-colors duration-200 hover:bg-[#3A101A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B27]"
          >
            Get a Quote
            <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          {/* Change #contact to wherever your contact page or section lives */}
          <p className="mt-6 font-body text-[0.98rem] text-[#6E5D57]">
            Have a question first?{" "}
            <Link
              href="/contact"
              className="border-b border-[#C59B27] pb-0.5 text-[#3A101A] transition-colors duration-200 hover:text-[#9C7A1E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C59B27]"
            >
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}