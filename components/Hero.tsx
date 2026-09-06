// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// const slides = [
//   {
//     index: "01",
//     label: "MANUSCRIPTS",
//     title: "A Legacy of Torah",
//     subtitle: "From timeless manuscripts to a brighter tomorrow.",
//     image: "/assets/manuscripts.png",
//   },
//   {
//     index: "02",
//     label: "SEFORIM",
//     title: "Bound With Devotion",
//     subtitle: "Every sefer, crafted to be treasured for generations.",
//     image: "/assets/printing.png",
//   },
//   {
//     index: "03",
//     label: "PUBLISHING",
//     title: "Crafted With Purpose",
//     subtitle: "Every sefer deserves the highest level of care.",
//     image: "/assets/editing.png",
//   },
// ];

// const features = [
//   {
//     text: "Complete services for every stage of your sefer",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
//         <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
//         <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
//       </svg>
//     ),
//   },
//   {
//     text: "Publishing seforim in Hebrew, English, and Yiddish",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
//         <circle cx="12" cy="12" r="10" />
//         <line x1="2" y1="12" x2="22" y2="12" />
//         <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
//       </svg>
//     ),
//   },
//   {
//     text: "Online seforim store showcasing your work for sale",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
//         <path d="M20.5 3.5c-3 0-9 2-13 6s-6 10-6 13c3 0 9-2 13-6s6-10 6-13z" />
//         <path d="M14 10 4.5 19.5" />
//       </svg>
//     ),
//   },
// ];

// export default function Hero() {
//   const [active, setActive] = useState(0);

//   const nextSlide = () => setActive((current) => (current + 1) % slides.length);
//   const prevSlide = () => setActive((current) => (current - 1 + slides.length) % slides.length);

//   useEffect(() => {
//     const timer = setInterval(nextSlide, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   if (slides.length === 0) return null;
//   const slide = slides[active] ?? slides[0];

//   return (
//     <section id="home" className="relative overflow-hidden bg-[#FBF3E6]">
//       <div className="mx-auto flex w-full max-w-none flex-col lg:flex-row lg:items-center lg:pt-4">
//         <div className="relative z-10 flex w-full flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:w-[46%] lg:px-14 xl:px-20">
//           <div className="mb-5 flex items-center gap-3 text-[#9C7A1E]">
//             <span className="h-px w-6 bg-current" />
//             <span dir="rtl" lang="he" className="font-hebrew text-[0.95rem]">עריכת ספרים מרישא עד גמירא</span>
//           </div>

//           <h1 className="max-w-[560px] font-display text-[3rem] font-normal leading-[1.05] tracking-[-0.02em] text-[#3A101A] sm:text-[3.5rem] lg:text-[3.9rem]">
//             Torah Publishing,
//             <br />
//             <em className="font-medium  text-[#C08A1E]">Crafted.</em>
//           </h1>

//           <div className="my-7 h-[2px] w-[58px] bg-[#C59B27]" />

//           <p className="max-w-[460px] font-display text-[1.1rem]  leading-[1.55] text-[#55474A]">
//             To every mechaber, a sefer is like an only child. We treat it that way.
//           </p>

//           <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:items-stretch sm:divide-x sm:divide-[#4A1521]/10">
//             {features.map((feature, i) => (
//               <div key={feature.text} className={`flex items-start gap-3 ${i > 0 ? "sm:pl-6" : ""}`}>
//                 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C59B27]/40 bg-[#F7ECD9] text-[#4A1521]">{feature.icon}</span>
//                 <p className="font-body text-[0.86rem] leading-[1.45] text-[#4A3A38]">{feature.text}</p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-10 flex flex-wrap items-center gap-4">
//             <Link href="#quote" className="group relative inline-flex h-[54px] items-center justify-center overflow-hidden rounded-[6px] bg-[#4A1521] px-8 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#FBF7EF] shadow-[0_14px_28px_-16px_rgba(43,11,18,0.6)] transition-colors duration-300 hover:bg-[#3A101A]">
//               <span className="invisible flex items-center gap-3">
//                 Request Quote
//                 <ArrowRight size={15} strokeWidth={2} />
//               </span>
//               <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center gap-3 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full">
//                 Request Quote
//                 <ArrowRight size={15} strokeWidth={2} />
//               </span>
//               <span aria-hidden="true" className="absolute inset-0 flex translate-y-full items-center justify-center gap-3 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0">
//                 Request Quote
//                 <ArrowRight size={15} strokeWidth={2} />
//               </span>
//             </Link>

//             <Link href="/shop" className="group relative inline-flex h-[54px] items-center justify-center overflow-hidden rounded-[6px] border border-[#4A1521]/20 bg-[#FFFDF8] px-8 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#4A1521] transition-colors duration-300 hover:border-[#4A1521]/40">
//               <span className="invisible">Shop Seforim</span>
//               <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full">
//                 Shop Seforim
//               </span>
//               <span aria-hidden="true" className="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0">
//                 Shop Seforim
//               </span>
//             </Link>
//           </div>
//         </div>

//         <div className="relative h-[320px] w-full sm:h-[420px] lg:hidden">
//           <Image key={slide.image} src={slide.image} alt={slide.title} fill priority className="object-cover" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40" />
//           <div className="absolute bottom-6 left-6 right-6 text-white">
//             <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#E0BA53] [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">{slide.label}</span>
//             <h3 className="mt-1 font-display text-[1.5rem] [text-shadow:0_2px_10px_rgba(0,0,0,0.6)]">{slide.title}</h3>
//           </div>
//         </div>

//         <div className="group relative hidden items-center justify-center lg:flex lg:w-[54%] lg:pr-10 xl:pr-16">
//           <div className="relative w-[88%] border border-[#C59B27]/45 bg-[#F3ECDC] p-5 pb-6 shadow-[0_30px_70px_-30px_rgba(43,11,18,0.45)]">
//             <span aria-hidden="true" className="pointer-events-none absolute left-2 top-2 h-6 w-6 border-l-2 border-t-2 border-[#C59B27]/80" />
//             <span aria-hidden="true" className="pointer-events-none absolute bottom-2 right-2 h-6 w-6 border-b-2 border-r-2 border-[#C59B27]/80" />

//             <div className="relative aspect-[4/3] w-full border border-black/85 overflow-hidden">
//               <div className="relative h-full w-full overflow-hidden">
//                 <Image key={slide.image} src={slide.image} alt={slide.title} fill priority sizes="60vw" className="object-cover" />
//                 <div className="absolute inset-0 bg-[#F3ECDC]/[0.12]" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
//               </div>

//               {/* Maroon caption band — a gradient scrim so the photo still shows through behind the text, instead of a solid block that hides it */}
//               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2B0B12] from-55% via-[#2B0B12]/80 to-transparent px-6 pb-4 pt-10 transition-[padding] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:pb-5">
//                 <div className="flex items-center gap-2 text-[#E0BA53]">
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="h-3.5 w-3.5 shrink-0">
//                     <rect x="3" y="4" width="18" height="16" rx="2" />
//                     <path d="M7 9h.01M11 9h.01M15 9h.01M7 13h10" strokeLinecap="round" />
//                   </svg>
//                   <span className="text-[0.64rem] font-semibold uppercase tracking-[0.22em]">Machon Aleh Zayis</span>
//                 </div>

//                 <h3 className="mt-1.5 font-display text-[1.55rem]  leading-[1.15] text-[#F5E9D0] transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-1">
//                   {slide.title}
//                 </h3>

//                 <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:grid-rows-[1fr]">
//                   <div className="overflow-hidden">
//                     <p className="pt-2 font-body text-[0.85rem]  leading-snug text-white">{slide.subtitle}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Controls row — sits in the outer cream margin, below the framed card, like the reference */}
//             <div className="mt-4 flex items-center justify-between gap-4">
//               <div className="flex items-center gap-3">
//                 <span className="font-display text-[0.8rem] text-[#4A1521]/70">
//                   {slide.index} / {String(slides.length).padStart(2, "0")}
//                 </span>
//                 <div className="h-px w-20 bg-[#4A1521]/15">
//                   <div className="h-px bg-[#C59B27] transition-all duration-500" style={{ width: `${((active + 1) / slides.length) * 100}%` }} />
//                 </div>
//               </div>

//               <div className="flex gap-2">
//                 <button
//                   type="button"
//                   onClick={prevSlide}
//                   aria-label="Previous slide"
//                   className="flex h-9 w-9 items-center justify-center border border-[#4A1521]/25 text-[#4A1521] outline-none transition-colors hover:border-[#C59B27] hover:text-[#9C7A1E] focus-visible:ring-2 focus-visible:ring-[#C59B27]"
//                 >
//                   <ArrowLeft size={14} strokeWidth={1.6} />
//                 </button>
//                 <button
//                   type="button"
//                   onClick={nextSlide}
//                   aria-label="Next slide"
//                   className="flex h-9 w-9 items-center justify-center border border-[#4A1521]/25 text-[#4A1521] outline-none transition-colors hover:border-[#C59B27] hover:text-[#9C7A1E] focus-visible:ring-2 focus-visible:ring-[#C59B27]"
//                 >
//                   <ArrowRight size={14} strokeWidth={1.6} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="hidden items-center justify-center gap-4 pb-12 pt-0 lg:flex">
//         <span className="h-px w-10 bg-[#C59B27]/50" />
//         <p className="font-display text-[0.95rem] italic text-[#9C7A1E]">&ldquo;A brighter Torah tomorrow&rdquo;</p>
//         <span className="h-px w-10 bg-[#C59B27]/50" />
//       </div>
//     </section>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    index: "01",
    label: "MANUSCRIPTS",
    title: "A Legacy of Torah",
    subtitle: "From timeless manuscripts to a brighter tomorrow.",
    image: "/assets/manuscripts.png",
  },
  {
    index: "02",
    label: "SEFORIM",
    title: "Bound With Devotion",
    subtitle: "Every sefer, crafted to be treasured for generations.",
    image: "/assets/printing.png",
  },
  {
    index: "03",
    label: "PUBLISHING",
    title: "Crafted With Purpose",
    subtitle: "Every sefer deserves the highest level of care.",
    image: "/assets/editing.png",
  },
];

const features = [
  {
    text: "Complete services for every stage of your sefer",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    text: "Publishing seforim in Hebrew, English, and Yiddish",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    text: "Online seforim store showcasing your work for sale",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M20.5 3.5c-3 0-9 2-13 6s-6 10-6 13c3 0 9-2 13-6s6-10 6-13z" />
        <path d="M14 10 4.5 19.5" />
      </svg>
    ),
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  const nextSlide = () => setActive((current) => (current + 1) % slides.length);
  const prevSlide = () => setActive((current) => (current - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);

  if (slides.length === 0) return null;
  const slide = slides[active] ?? slides[0];

  return (
    <section id="home" className="relative overflow-hidden bg-[#FBF3E6] pt-6 lg:pt-10">
      <div className="mx-auto flex w-full max-w-none flex-col lg:flex-row lg:items-center">
        <div className="relative z-10 flex w-full flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:w-[46%] lg:px-14 lg:py-6 xl:px-20">
          <div className="mb-4 flex items-center gap-3 text-[#9C7A1E]">
            <span className="h-px w-6 bg-current" />
            <span dir="rtl" lang="he" className="font-hebrew text-[0.95rem]">עריכת ספרים מרישא עד גמירא</span>
          </div>

          <h1 className="max-w-[560px] font-display text-[2.5rem] font-normal leading-[1.05] tracking-[-0.02em] text-[#3A101A] sm:text-[2.9rem] lg:text-[3.1rem]">
            Torah Publishing,
            <br />
            <em className="font-medium italic text-[#C08A1E]">Crafted.</em>
          </h1>

          <div className="my-5 h-[2px] w-[58px] bg-[#C59B27]" />

          <p className="max-w-[460px] font-display text-[1.05rem] italic leading-[1.5] text-[#55474A]">
            To every mechaber, a sefer is like an only child. We treat it that way.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:items-stretch sm:divide-x sm:divide-[#4A1521]/10">
            {features.map((feature, i) => (
              <div key={feature.text} className={`flex items-start gap-3 ${i > 0 ? "sm:pl-6" : ""}`}>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C59B27]/40 bg-[#F7ECD9] text-[#4A1521]">{feature.icon}</span>
                <p className="font-body text-[0.86rem] leading-[1.45] text-[#4A3A38]">{feature.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link href="#quote" className="group relative inline-flex h-[54px] items-center justify-center overflow-hidden rounded-[6px] bg-[#4A1521] px-8 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#FBF7EF] shadow-[0_14px_28px_-16px_rgba(43,11,18,0.6)] transition-colors duration-300 hover:bg-[#3A101A]">
              <span className="invisible flex items-center gap-3">
                Request Quote
                <ArrowRight size={15} strokeWidth={2} />
              </span>
              <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center gap-3 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full">
                Request Quote
                <ArrowRight size={15} strokeWidth={2} />
              </span>
              <span aria-hidden="true" className="absolute inset-0 flex translate-y-full items-center justify-center gap-3 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0">
                Request Quote
                <ArrowRight size={15} strokeWidth={2} />
              </span>
            </Link>

            <Link href="/shop" className="group relative inline-flex h-[54px] items-center justify-center overflow-hidden rounded-[6px] border border-[#4A1521]/20 bg-[#FFFDF8] px-8 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#4A1521] transition-colors duration-300 hover:border-[#4A1521]/40">
              <span className="invisible">Shop Seforim</span>
              <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full">
                Shop Seforim
              </span>
              <span aria-hidden="true" className="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0">
                Shop Seforim
              </span>
            </Link>
          </div>
        </div>

        <div className="relative h-[240px] w-full sm:h-[320px] lg:hidden">
          <Image key={slide.image} src={slide.image} alt={slide.title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#E0BA53] [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">{slide.label}</span>
            <h3 className="mt-1 font-display text-[1.5rem] [text-shadow:0_2px_10px_rgba(0,0,0,0.6)]">{slide.title}</h3>
          </div>
        </div>

        <div className="group relative hidden items-center justify-center lg:flex lg:w-[59%] lg:pr-10 xl:pr-16">
          <div className="relative w-[61%] border border-[#C59B27]/45 bg-[#F3ECDC] p-3 pb-4 shadow-[0_30px_70px_-30px_rgba(43,11,18,0.45)]">
            <span aria-hidden="true" className="pointer-events-none absolute left-2 top-2 h-6 w-6 border-l-2 border-t-2 border-[#C59B27]/80" />
            <span aria-hidden="true" className="pointer-events-none absolute bottom-2 right-2 h-6 w-6 border-b-2 border-r-2 border-[#C59B27]/80" />

            <div className="relative w-full border border-black/85 overflow-hidden">
              {/* Photo fills the card; band sits on top of it, anchored to the bottom */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image key={slide.image} src={slide.image} alt={slide.title} fill priority sizes="60vw" className="object-cover" />
                <div className="absolute inset-0 bg-[#F3ECDC]/[0.12]" />
              </div>

              {/* Maroon caption band — pinned to the bottom; growing to reveal the subtitle pushes its top edge up over the photo */}
              <div className="absolute inset-x-0 bottom-0 bg-[#2B0B12] px-6 pb-4 pt-4">
                <div className="flex items-center gap-2 text-[#E0BA53]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="h-3.5 w-3.5 shrink-0">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M7 9h.01M11 9h.01M15 9h.01M7 13h10" strokeLinecap="round" />
                  </svg>
                  <span className="text-[0.64rem] font-semibold uppercase tracking-[0.22em]">Machon Aleh Zayis</span>
                </div>

                <h3 className="mt-1.5 font-display text-[1.55rem] italic leading-[1.15] text-[#F5E9D0]">
                  {slide.title}
                </h3>

                {/* Subtitle sits below the title, revealed as the band grows upward on hover */}
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="pt-2 font-body text-[0.98rem] leading-snug text-white">{slide.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls row — sits in the outer cream margin, below the framed card, like the reference */}
            <div className="mt-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-display text-[0.8rem] text-[#4A1521]/70">
                  {slide.index} / {String(slides.length).padStart(2, "0")}
                </span>
                <div className="h-px w-20 bg-[#4A1521]/15">
                  <div className="h-px bg-[#C59B27] transition-all duration-500" style={{ width: `${((active + 1) / slides.length) * 100}%` }} />
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="flex h-9 w-9 items-center justify-center border border-[#4A1521]/25 text-[#4A1521] outline-none transition-colors hover:border-[#C59B27] hover:text-[#9C7A1E] focus-visible:ring-2 focus-visible:ring-[#C59B27]"
                >
                  <ArrowLeft size={14} strokeWidth={1.6} />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="flex h-9 w-9 items-center justify-center border border-[#4A1521]/25 text-[#4A1521] outline-none transition-colors hover:border-[#C59B27] hover:text-[#9C7A1E] focus-visible:ring-2 focus-visible:ring-[#C59B27]"
                >
                  <ArrowRight size={14} strokeWidth={1.6} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden items-center justify-center gap-4 pb-5 pt-0 lg:flex">
        <span className="h-px w-10 bg-[#C59B27]/50" />
        <p className="font-display text-[0.95rem] italic text-[#9C7A1E]">&ldquo;A brighter Torah tomorrow&rdquo;</p>
        <span className="h-px w-10 bg-[#C59B27]/50" />
      </div>
    </section>
  );
}