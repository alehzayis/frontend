export default function About() {
  return (
    <section
      id="about"
      className="border-y border-[#4A1521]/[0.13] bg-[#F3ECDC] py-16 lg:py-[108px]"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-11 px-6 text-center lg:grid-cols-[0.82fr_1.18fr] lg:gap-[74px] lg:text-left">
        <div className="flex justify-center">
          <div className="relative flex h-[392px] w-[272px] items-center justify-center rounded-tl-[3px] rounded-tr-[9px] rounded-br-[9px] rounded-bl-[3px] bg-[linear-gradient(155deg,#4A1521_0%,#2B0B12_100%)] p-6 shadow-[16px_20px_40px_-14px_rgba(43,11,18,0.45),inset_-5px_0_10px_rgba(0,0,0,0.3)]">
            <div className="absolute bottom-[10px] right-[-14px] top-[10px] hidden w-5 rounded-r-[3px] bg-[repeating-linear-gradient(115deg,#1C3326_0px_6px,#1B2740_6px_12px,#4A2A1B_12px_18px)] opacity-55 [filter:saturate(0.8)] lg:block" />
            <div className="absolute bottom-0 left-[13px] top-0 w-[2px] bg-black/30 shadow-[1px_0_0_rgba(255,255,255,0.06)]" />

            <div className="relative flex h-full w-full items-center justify-center border border-[#C59B27] p-4">
              <div className="flex h-full w-full items-center justify-center border border-dashed border-[#C59B27]/45">
                <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-[1.5px] border-[#C59B27] bg-[#C59B27]/[0.08]">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E0BA53" strokeWidth="1.2">
                    <path d="M12 3v18M3 12h18M5.5 5.5l13 13M18.5 5.5l-13 13" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="mb-4 inline-flex items-center gap-2.5 font-body text-xs font-semibold uppercase tracking-[0.24em] text-[#9C7A1E]">
            <span className="h-px w-5 bg-current opacity-60" />
            About the Atelier
          </span>

          <h2 className="mb-6 font-display text-[2.55rem] font-medium leading-[1.2] text-[#4A1521]">
            Publishing your sefer, personal manuscripts, and books
          </h2>

          <div className="font-body text-[1.05rem] leading-[1.85] text-[#241A1D]">
            <p className="mb-[18px] first-letter:float-none first-letter:pr-2 first-letter:pt-2 first-letter:font-display first-letter:text-[3.6rem] first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-[#4A1521] lg:first-letter:float-left">
              Publishing a sefer or a family manuscript is a momentous occasion — the process should be a stress-free celebration of a significant goal. Our team of skilled professionals shares your excitement and enthusiasm, guiding you through a smooth production process with precision and dedication throughout.
            </p>
            <p>
              We specialize in publishing seforim in Hebrew and English, as well as all types of books, and will step in at any stage of the process based on your needs. Together, we&apos;ll work to create your vision in print.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">
            <span className="h-px w-[50px] bg-gradient-to-r from-transparent via-[#C59B27] to-transparent" />
            <svg className="h-[13px] w-[13px] fill-[#C59B27]" viewBox="0 0 24 24">
              <polygon points="12,2 15,9 22,12 15,15 12,22 9,15 2,12 9,9" />
            </svg>
            <span className="h-px w-[50px] bg-gradient-to-r from-transparent via-[#C59B27] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}