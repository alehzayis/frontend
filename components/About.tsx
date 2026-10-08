"use client";

import { useEffect, useState } from "react";

// Use cut-out images (transparent background). Each one is fitted whole inside the frame, nothing is cropped.
const IMAGES = [
  { src: "/about/book-1.webp", alt: "Sefer Pirchei Levanon" },
  { src: "/about/book-2.webp", alt: "Describe the second book" }, 
  { src: "/about/book-3.webp", alt: "Describe the third book" },
   { src: "/about/book-4.webp", alt: "Describe the third book" },
];

const INTERVAL_MS = 3500; // how long each image stays on screen
const FADE_MS = 800; // cross-fade duration

export default function About() {
  const [active, setActive] = useState(0);
  const count = IMAGES.length;

  // The timer restarts on every change, so a click on an arrow gets a full interval too.
  useEffect(() => {
    if (count < 2) return;
    const id = setTimeout(() => setActive((i) => (i + 1) % count), INTERVAL_MS);
    return () => clearTimeout(id);
  }, [active, count]);

  const go = (step: number) => setActive((i) => (i + step + count) % count);

  const arrow =
    "absolute top-1/2 flex h-11 w-9 -translate-y-1/2 items-center justify-center text-[#4A1521]/30 transition-colors hover:text-[#4A1521] focus-visible:text-[#4A1521]";

  return (
    <section id="about" className="overflow-hidden border-y border-[#4A1521]/[0.13] bg-[#F3ECDC]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-11 px-6 pt-16 text-center lg:grid-cols-[0.82fr_1.18fr] lg:gap-[74px] lg:pt-0 lg:text-left">
        {/* Book carousel: large cut-out book, vertically centred against the text */}
        <div className="relative flex justify-center lg:py-8">
          {count > 0 ? (
            <>
              <div className="relative aspect-[2/3] w-full max-w-[260px] lg:max-w-[300px] xl:max-w-[350px]">
                {IMAGES.map((image, i) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    aria-hidden={i !== active}
                    loading={i === 0 ? "eager" : "lazy"}
                    style={{ transitionDuration: `${FADE_MS}ms` }}
                    className={`absolute inset-0 h-full w-full object-contain transition-opacity ease-in-out ${
                      i === active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>

              {count > 1 && (
                <>
                  <button type="button" aria-label="Previous book" onClick={() => go(-1)} className={`${arrow} left-0`}>
                    <svg width="12" height="22" viewBox="0 0 12 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 2 2 11l8 9" />
                    </svg>
                  </button>
                  <button type="button" aria-label="Next book" onClick={() => go(1)} className={`${arrow} right-0`}>
                    <svg width="12" height="22" viewBox="0 0 12 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m2 2 8 9-8 9" />
                    </svg>
                  </button>
                </>
              )}
            </>
          ) : (
            /* Original placeholder cover, shown while IMAGES is empty */
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
          )}
        </div>

        {/* Text column: unchanged from the original design */}
        <div className="pb-16 lg:py-[108px]">
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

          <div className="mx-auto mt-6 h-[2px] w-10 bg-[#C59B27] lg:mx-0" />
        </div>
      </div>
    </section>
  );
}