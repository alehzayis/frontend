// "use client";

// // // import type { CSSProperties } from "react";
// // // import Link from "next/link";
// // // import {
// // //   ArrowRight,
// // //   Book,
// // //   BookMarked,
// // //   Keyboard,
// // //   Languages,
// // //   Layers,
// // //   Mic,
// // //   Palette,
// // //   PenLine,
// // //   Printer,
// // //   Sparkles,
// // //   Truck,
// // // } from "lucide-react";

// // // const SERVICES = [
// // //   {
// // //     title: "Full Service",
// // //     icon: Layers,
// // //     text: "Meticulous transcription, typesetting, and editing across every genre, fully customized layouts.",
// // //   },
// // //   {
// // //     title: "Content",
// // //     icon: Book,
// // //     text: "In-house talmidei chachamim advising on content across derush, halacha, machshava, chassidus, and Kabbalah.",
// // //   },
// // //   {
// // //     title: "Editing, Hebrew & English",
// // //     icon: PenLine,
// // //     text: "Skilled editors polish manuscripts while preserving personal style.",
// // //   },
// // //   {
// // //     title: "Typing, Hebrew & English",
// // //     icon: Keyboard,
// // //     text: "Dedicated typists convert handwritten notes into distribution-ready manuscripts.",
// // //   },
// // //   {
// // //     title: "Transcriptions",
// // //     icon: Mic,
// // //     text: "Audio (family interviews, shiurim, lectures) transcribed in English, Hebrew, or Yiddish.",
// // //   },
// // //   {
// // //     title: "Translations",
// // //     icon: Languages,
// // //     text: "Between English, Hebrew, and Yiddish, reviewed for accuracy and style.",
// // //   },
// // //   {
// // //     title: "Graphics",
// // //     icon: Palette,
// // //     text: "Custom covers, dedication pages, flyers and more, designed around your vision.",
// // //   },
// // //   {
// // //     title: "Covers",
// // //     icon: BookMarked,
// // //     text: "Hard or soft, foil-stamped or printed, antique leather and more to make your sefer stand out.",
// // //   },
// // //   {
// // //     title: "Printing & Binding",
// // //     icon: Printer,
// // //     text: "Digital or offset, black and white or color, with sewn, spiral, or saddle-stitched binding.",
// // //   },
// // //   {
// // //     title: "Shipping & Distribution",
// // //     icon: Truck,
// // //     text: "Your sefer delivered across the globe through leading book distributors.",
// // //   },
// // //   {
// // //     title: "Fiction, Non-Fiction & Family Memorial Books",
// // //     icon: Sparkles,
// // //     text: "Research, transcription, translation, editing, layout, and design for your family's story, at whatever stage you need.",
// // //   },
// // // ];

// // // const QUOTE_HREF = "/contact";

// // // // Each card takes the next colour in turn: top edge and icon at rest, the whole card on hover.
// // // const ACCENTS = ["#4A1521", "#1C3326", "#1B2740", "#4A2A1B"];

// // // export default function Services() {
// // //   return (
// // //     <section id="services" className="bg-[#FAF6EE] px-6 py-16 lg:py-24">
// // //       <div className="mx-auto max-w-[1200px]">
// // //         <div className="text-center">
// // //           <span className="mb-4 inline-flex items-center gap-2.5 font-body text-xs font-semibold uppercase tracking-[0.24em] text-[#9C7A1E]">
// // //             <span className="h-px w-5 bg-current opacity-60" />
// // //             What We Offer
// // //             <span className="h-px w-5 bg-current opacity-60" />
// // //           </span>
// // //           <h2 className="font-display text-[2.55rem] font-medium leading-[1.2] text-[#4A1521]">Every service, in-house.</h2>
// // //         </div>

// // //         <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
// // //           {SERVICES.map((service, i) => (
// // //             <article
// // //               key={service.title}
// // //               style={{ "--accent": ACCENTS[i % ACCENTS.length] } as CSSProperties}
// // //               // No transition anywhere on the card: on hover the colour simply appears.
// // //               // The ! classes also switch off any transition or animation coming from global styles.
// // //               className="group relative border border-t-[3px] border-[#4A1521]/[0.12] border-t-[color:var(--accent)] bg-[#FAF2E5] px-7 pb-8 pt-9 !transition-none !animate-none hover:bg-[color:var(--accent)] [&_*]:!transition-none [&_*]:!animate-none"
// // //             >
// // //               {/* Corner ticks */}
// // //               <span aria-hidden="true" className="absolute left-2.5 top-2.5 h-2.5 w-2.5 border-l border-t border-[#C59B27]" />
// // //               <span aria-hidden="true" className="absolute bottom-2.5 right-2.5 h-2.5 w-2.5 border-b border-r border-[#C59B27]" />

// // //               <service.icon size={34} strokeWidth={1.4} className="text-[color:var(--accent)] group-hover:text-[#E0BA53]" />

// // //               <h3 className="mt-6 font-display text-[1.45rem] font-medium leading-snug text-[#3A101A] group-hover:text-[#F7E9C2]">
// // //                 {service.title}
// // //               </h3>
// // //               <p className="mt-3 font-body text-[1rem] leading-[1.75] text-[#5C4B46] group-hover:text-[#EDE1D3]">{service.text}</p>
// // //             </article>
// // //           ))}

// // //           {/* Twelfth tile: call to action */}
// // //           <div className="flex flex-col justify-center border border-[#C59B27]/50 bg-[#3A101A] px-7 py-8">
// // //             <div className="font-display text-[1.45rem] font-medium leading-snug text-[#F7E9C2]">Not sure where to start?</div>
// // //             <p className="mt-3 font-body text-[1rem] leading-[1.75] text-[#EDE1D3]">
// // //               Tell us about your sefer or manuscript and we&apos;ll put together a quote.
// // //             </p>
// // //             <Link
// // //               href={QUOTE_HREF}
// // //               className="mt-5 inline-flex w-fit items-center gap-2 rounded-sm bg-[#C59B27] px-6 py-3 font-body text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[#2B0B12] hover:bg-[#D6AE3C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7E9C2]"
// // //             >
// // //               Request a quote
// // //               <ArrowRight size={15} strokeWidth={2} />
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // import type { CSSProperties } from "react";
// // import Link from "next/link";
// // import {
// //   ArrowRight,
// //   Book,
// //   BookMarked,
// //   Keyboard,
// //   Languages,
// //   Layers,
// //   Mic,
// //   Palette,
// //   PenLine,
// //   Printer,
// //   Sparkles,
// //   Truck,
// // } from "lucide-react";

// // const SERVICES = [
// //   {
// //     title: "Full Service",
// //     icon: Layers,
// //     text: "Meticulous transcription, typesetting, and editing across every genre, fully customized layouts.",
// //   },
// //   {
// //     title: "Content",
// //     icon: Book,
// //     text: "In-house talmidei chachamim advising on content across derush, halacha, machshava, chassidus, and Kabbalah.",
// //   },
// //   {
// //     title: "Editing, Hebrew & English",
// //     icon: PenLine,
// //     text: "Skilled editors polish manuscripts while preserving personal style.",
// //   },
// //   {
// //     title: "Typing, Hebrew & English",
// //     icon: Keyboard,
// //     text: "Dedicated typists convert handwritten notes into distribution-ready manuscripts.",
// //   },
// //   {
// //     title: "Transcriptions",
// //     icon: Mic,
// //     text: "Audio (family interviews, shiurim, lectures) transcribed in English, Hebrew, or Yiddish.",
// //   },
// //   {
// //     title: "Translations",
// //     icon: Languages,
// //     text: "Between English, Hebrew, and Yiddish, reviewed for accuracy and style.",
// //   },
// //   {
// //     title: "Graphics",
// //     icon: Palette,
// //     text: "Custom covers, dedication pages, flyers and more, designed around your vision.",
// //   },
// //   {
// //     title: "Covers",
// //     icon: BookMarked,
// //     text: "Hard or soft, foil-stamped or printed, antique leather and more to make your sefer stand out.",
// //   },
// //   {
// //     title: "Printing & Binding",
// //     icon: Printer,
// //     text: "Digital or offset, black and white or color, with sewn, spiral, or saddle-stitched binding.",
// //   },
// //   {
// //     title: "Shipping & Distribution",
// //     icon: Truck,
// //     text: "Your sefer delivered across the globe through leading book distributors.",
// //   },
// //   {
// //     title: "Fiction, Non-Fiction & Family Memorial Books",
// //     icon: Sparkles,
// //     text: "Research, transcription, translation, editing, layout, and design for your family's story, at whatever stage you need.",
// //   },
// // ];

// // const QUOTE_HREF = "/contact";

// // // Each card takes the next colour in turn: top edge and icon at rest, the whole card on hover.
// // const ACCENTS = ["#4A1521", "#1C3326", "#1B2740", "#4A2A1B"];

// // export default function Services() {
// //   return (
// //     <section id="services" className="bg-[#FAF6EE] px-6 py-16 lg:py-24">
// //       <div className="mx-auto max-w-[1200px]">
// //         <div className="text-center">
// //           <span className="mb-4 inline-flex items-center gap-2.5 font-body text-xs font-semibold uppercase tracking-[0.24em] text-[#9C7A1E]">
// //             <span className="h-px w-5 bg-current opacity-60" />
// //             What We Offer
// //             <span className="h-px w-5 bg-current opacity-60" />
// //           </span>
// //           <h2 className="font-display text-[2.55rem] font-medium leading-[1.2] text-[#4A1521]">Every service, in-house.</h2>
// //         </div>

// //         <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
// //           {SERVICES.map((service, i) => (
// //             <article
// //               key={service.title}
// //               style={{ "--accent": ACCENTS[i % ACCENTS.length] } as CSSProperties}
// //               // No transition anywhere on the card: on hover the colour simply appears.
// //               // The ! classes also switch off any transition or animation coming from global styles.
// //               className="group relative border border-t-[3px] border-[#4A1521]/[0.12] border-t-[color:var(--accent)] bg-[#FAF2E5] px-7 pb-8 pt-9 transition-none! animate-none! hover:bg-(--accent) **:transition-none! **:animate-none!"
// //             >
// //               {/* Corner ticks */}
// //               <span aria-hidden="true" className="absolute left-2.5 top-2.5 h-2.5 w-2.5 border-l border-t border-[#C59B27]" />
// //               <span aria-hidden="true" className="absolute bottom-2.5 right-2.5 h-2.5 w-2.5 border-b border-r border-[#C59B27]" />

// //               <service.icon size={34} strokeWidth={1.4} className="text-(--accent) group-hover:text-brass-light" />

// //               <h3 className="mt-6 font-display text-[1.45rem] font-medium leading-snug text-[#3A101A] group-hover:text-[#F7E9C2]">
// //                 {service.title}
// //               </h3>
// //               <p className="mt-3 font-body text-[1rem] leading-[1.75] text-[#5C4B46] group-hover:text-[#EDE1D3]">{service.text}</p>
// //             </article>
// //           ))}

// //           {/* Twelfth tile: call to action */}
// //           <div className="flex flex-col justify-center border border-[#C59B27]/50 bg-[#3A101A] px-7 py-8">
// //             <div className="font-display text-[1.45rem] font-medium leading-snug text-[#F7E9C2]">Not sure where to start?</div>
// //             <p className="mt-3 font-body text-[1rem] leading-[1.75] text-[#EDE1D3]">
// //               Tell us about your sefer or manuscript and we&apos;ll put together a quote.
// //             </p>
// //             <Link
// //               href={QUOTE_HREF}
// //               className="mt-5 inline-flex w-fit items-center gap-2 rounded-sm bg-[#C59B27] px-6 py-3 font-body text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[#2B0B12] hover:bg-[#D6AE3C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7E9C2]"
// //             >
// //               Request a quote
// //               <ArrowRight size={15} strokeWidth={2} />
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// // import { useEffect, useRef, useState } from "react";
// // import type { CSSProperties } from "react";
// // import Link from "next/link";
// // import {
// //   ArrowRight,
// //   Book,
// //   BookMarked,
// //   Keyboard,
// //   Languages,
// //   Layers,
// //   Mic,
// //   Palette,
// //   PenLine,
// //   Plus,
// //   Printer,
// //   Sparkles,
// //   Truck,
// // } from "lucide-react";

// // const SERVICES = [
// //   {
// //     title: "Full Service",
// //     icon: Layers,
// //     tags: ["Transcription", "Editing"],
// //     text: "Meticulous transcription, typesetting, and editing across every genre, fully customized layouts.",
// //   },
// //   {
// //     title: "Content",
// //     icon: Book,
// //     tags: ["Derush", "Halacha", "Machshava"],
// //     text: "In-house talmidei chachamim advising on derush, halacha, machshava, chassidus, and Kabbalah.",
// //   },
// //   {
// //     title: "Editing, Hebrew & English",
// //     icon: PenLine,
// //     tags: ["Polish", "Proofread", "Style"],
// //     text: "Skilled editors polish manuscripts while preserving personal style.",
// //   },
// //   {
// //     title: "Typing, Hebrew & English",
// //     icon: Keyboard,
// //     tags: ["Hebrew", "English", "Handwritten"],
// //     text: "Dedicated typists convert handwritten notes into distribution-ready manuscripts.",
// //   },
// //   {
// //     title: "Transcriptions",
// //     icon: Mic,
// //     tags: ["Interviews", "Shiurim", "Lectures"],
// //     text: "Audio (family interviews, shiurim, lectures) transcribed in English, Hebrew, or Yiddish.",
// //   },
// //   {
// //     title: "Translations",
// //     icon: Languages,
// //     tags: ["English", "Hebrew", "Yiddish"],
// //     text: "Between English, Hebrew, and Yiddish, reviewed for accuracy and style.",
// //   },
// //   {
// //     title: "Graphics",
// //     icon: Palette,
// //     tags: ["Covers", "Dedications", "Flyers"],
// //     text: "Custom covers, dedication pages, flyers and more, designed around your vision.",
// //   },
// //   {
// //     title: "Covers",
// //     icon: BookMarked,
// //     tags: ["Hard & Soft", "Foil", "Leather"],
// //     text: "Hard or soft, foil-stamped or printed, antique leather and more to make your sefer stand out.",
// //   },
// //   {
// //     title: "Printing & Binding",
// //     icon: Printer,
// //     tags: ["Digital", "Offset", "Sewn"],
// //     text: "Digital or offset, black and white or color, with sewn, spiral, or saddle-stitched binding.",
// //   },
// //   {
// //     title: "Shipping & Distribution",
// //     icon: Truck,
// //     tags: ["Worldwide", "Distributors"],
// //     text: "Your sefer delivered across the globe through leading book distributors.",
// //   },
// //   {
// //     title: "Fiction, Non-Fiction & Memorials",
// //     icon: Sparkles,
// //     tags: ["Fiction", "Non-Fiction", "Memorial"],
// //     text: "Research, editing, layout, and design for your family's story, at whatever stage you need.",
// //   },
// // ];

// // const QUOTE_HREF = "/contact";

// // // Each card takes the next colour in turn: top edge and icon at rest, the whole card when active.
// // const ACCENTS = ["#4A1521", "#1C3326", "#1B2740", "#4A2A1B"];

// // // Faint ruled lines drawn over the card's colour when it is active (1px line every 17.5px).
// // const RULED_LINES =
// //   "repeating-linear-gradient(to bottom, transparent 0, transparent 16.5px, rgba(255,255,255,0.036) 16.5px, rgba(255,255,255,0.036) 17.5px)";

// // // Set to false to switch the scroll highlight off; cards then only react to the mouse and keyboard.
// // const HIGHLIGHT_ON_SCROLL = true;

// // // The card crossing this point of the screen is the one lit while scrolling (0.5 = the middle).
// // const SCROLL_LINE = 0.5;

// // // SPEED. The shortest time, in milliseconds, each card stays lit while scrolling.
// // // Bigger = slower (1000 = one second per card). 0 = follow the scroll exactly, however fast.
// // // When a visitor scrolls faster than this, the highlight follows behind and catches up one card
// // // at a time, so no card is skipped.
// // const MIN_TIME_PER_CARD = 600;

// // /*
// //   How a card becomes "active"
// //   - At rest a card shows its icon, title and keywords. The active card takes its colour and shows
// //     its description where the keywords were. Nothing moves and nothing animates.
// //   - Scrolling: as the grid passes the middle of the screen, the cards light up one after another,
// //     left to right and row by row, so every visitor sees each description without having to hover.
// //     Each card stays lit for at least MIN_TIME_PER_CARD, so a fast scroll cannot rush through them.
// //   - Mouse and keyboard still work: moving the mouse over a card, or tabbing to it, makes that card
// //     the active one. Only one card is ever active at a time.
// //   - Phones and tablets have no hover, so the descriptions are always shown there; the scroll
// //     highlight just adds the colour.
// // */

// // export default function Services() {
// //   const gridRef = useRef<HTMLDivElement>(null);
// //   const [pointed, setPointed] = useState<number | null>(null); // card under the mouse / keyboard focus
// //   const [scrolled, setScrolled] = useState<number | null>(null); // card picked by the scroll position
// //   const active = pointed ?? scrolled;

// //   useEffect(() => {
// //     if (!HIGHLIGHT_ON_SCROLL) return;
// //     // Visitors who ask their device for less motion don't get the automatic highlight.
// //     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

// //     const count = SERVICES.length;
// //     // Positions along the tour: -1 = before the first card, 0..count-1 = a card, count = after the last.
// //     let position: number | null = null; // where the highlight is now
// //     let target = -1; // where the scroll position says it should be
// //     let lastStep = 0;
// //     let frame = 0;
// //     let timer: ReturnType<typeof setTimeout> | undefined;

// //     const show = (next: number) => {
// //       position = next;
// //       lastStep = performance.now();
// //       setScrolled(next >= 0 && next < count ? next : null);
// //     };

// //     // Move one card towards the target, but never sooner than MIN_TIME_PER_CARD after the last move.
// //     const advance = () => {
// //       timer = undefined;
// //       if (position === null || position === target) return;

// //       const wait = MIN_TIME_PER_CARD - (performance.now() - lastStep);
// //       const onACard = position >= 0 && position < count;
// //       if (onACard && wait > 0) {
// //         timer = setTimeout(advance, wait);
// //         return;
// //       }

// //       show(position + Math.sign(target - position));
// //       if (position !== target) timer = setTimeout(advance, MIN_TIME_PER_CARD);
// //     };

// //     const update = () => {
// //       frame = 0;
// //       const grid = gridRef.current;
// //       if (!grid) return;

// //       const rect = grid.getBoundingClientRect();
// //       const line = window.innerHeight * SCROLL_LINE;
// //       const tiles = grid.children.length; // the service cards plus the call-to-action tile
// //       const progress = (line - rect.top) / rect.height;

// //       // All tiles are the same size, so the position along the grid maps straight onto a tile.
// //       if (progress < 0) target = -1;
// //       else if (progress >= 1) target = count;
// //       else target = Math.min(Math.floor(progress * tiles), count);

// //       const gridOnScreen = rect.bottom > 0 && rect.top < window.innerHeight;

// //       // Jump straight there on first load, when the grid is off screen, or when no minimum time is set.
// //       if (position === null || !gridOnScreen || MIN_TIME_PER_CARD <= 0) {
// //         if (timer) clearTimeout(timer);
// //         timer = undefined;
// //         show(target);
// //         return;
// //       }

// //       if (!timer) advance();
// //     };

// //     const onScroll = () => {
// //       setPointed(null); // after a scroll the mouse may be resting on a different card
// //       if (!frame) frame = requestAnimationFrame(update);
// //     };

// //     update();
// //     window.addEventListener("scroll", onScroll, { passive: true });
// //     window.addEventListener("resize", onScroll);
// //     return () => {
// //       window.removeEventListener("scroll", onScroll);
// //       window.removeEventListener("resize", onScroll);
// //       if (frame) cancelAnimationFrame(frame);
// //       if (timer) clearTimeout(timer);
// //     };
// //   }, []);

// //   return (
// //     <section id="services" className="bg-[#FAF6EE] px-6 py-16 lg:py-24">
// //       <div className="mx-auto max-w-[1200px]">
// //         <div className="text-center">
// //           <span className="mb-4 inline-flex items-center gap-2.5 font-body text-xs font-semibold uppercase tracking-[0.24em] text-[#9C7A1E]">
// //             <span className="h-px w-5 bg-current opacity-60" />
// //             What We Offer
// //             <span className="h-px w-5 bg-current opacity-60" />
// //           </span>
// //           <h2 className="font-display text-[2.55rem] font-medium leading-[1.2] text-[#4A1521]">Every service, in-house.</h2>
// //         </div>

// //         <div
// //           ref={gridRef}
// //           onMouseLeave={() => setPointed(null)}
// //           className="mt-10 grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3"
// //         >
// //           {SERVICES.map((service, i) => (
// //             <article
// //               key={service.title}
// //               tabIndex={0}
// //               data-active={active === i}
// //               onMouseMove={() => setPointed(i)}
// //               onFocus={() => setPointed(i)}
// //               onBlur={() => setPointed(null)}
// //               style={{ "--accent": ACCENTS[i % ACCENTS.length], "--ruled": RULED_LINES } as CSSProperties}
// //               className="group relative flex flex-col border border-t-[3px] border-[#4A1521]/[0.12] border-t-[color:var(--accent)] bg-[#FAF2E5] px-7 pb-6 pt-8 outline-none !transition-none !animate-none data-[active=true]:bg-[color:var(--accent)] data-[active=true]:bg-[image:var(--ruled)] [&_*]:!transition-none [&_*]:!animate-none"
// //             >
// //               {/* Corner ticks */}
// //               <span aria-hidden="true" className="absolute left-2.5 top-2.5 h-2.5 w-2.5 border-l border-t border-[#C59B27]" />
// //               <span aria-hidden="true" className="absolute bottom-2.5 right-2.5 h-2.5 w-2.5 border-b border-r border-[#C59B27]" />

// //               {/* Small "+" that tells the visitor there is more to see */}
// //               <Plus
// //                 aria-hidden="true"
// //                 size={16}
// //                 strokeWidth={1.6}
// //                 className="absolute right-6 top-8 hidden text-[#9C7A1E] group-data-[active=true]:opacity-0 [@media(hover:hover)]:block"
// //               />

// //               <service.icon
// //                 size={32}
// //                 strokeWidth={1.4}
// //                 className="text-[color:var(--accent)] group-data-[active=true]:text-[#E0BA53]"
// //               />

// //               <h3 className="mt-5 font-display text-[1.45rem] font-medium leading-snug text-[#3A101A] group-data-[active=true]:text-[#F7E9C2]">
// //                 {service.title}
// //               </h3>

// //               {/* Keywords and description share the same space, so the card never changes size */}
// //               <div className="mt-3 grid flex-1">
// //                 <ul className="col-start-1 row-start-1 hidden flex-wrap items-center gap-x-3 gap-y-1.5 self-end border-t border-[#4A1521]/[0.12] pt-4 font-body text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#9C7A1E] group-data-[active=true]:opacity-0 [@media(hover:hover)]:flex">
// //                   {service.tags.map((tag, t) => (
// //                     <li key={tag} className="flex items-center gap-3">
// //                       {t > 0 && <span aria-hidden="true" className="h-[5px] w-[5px] rotate-45 bg-[#C59B27]" />}
// //                       {tag}
// //                     </li>
// //                   ))}
// //                 </ul>

// //                 <p className="col-start-1 row-start-1 font-body text-[1rem] leading-[1.65] text-[#5C4B46] group-data-[active=true]:text-[#F1E6DA] group-data-[active=true]:opacity-100 [@media(hover:hover)]:opacity-0">
// //                   {service.text}
// //                 </p>
// //               </div>
// //             </article>
// //           ))}

// //           {/* Twelfth tile: call to action */}
// //           <div className="flex flex-col justify-center border border-[#C59B27]/50 bg-[#3A101A] px-7 py-7">
// //             <div className="font-display text-[1.45rem] font-medium leading-snug text-[#F7E9C2]">Not sure where to start?</div>
// //             <p className="mt-2 font-body text-[1rem] leading-[1.65] text-[#EDE1D3]">Tell us about your sefer or manuscript.</p>
// //             <Link
// //               href={QUOTE_HREF}
// //               className="mt-4 inline-flex w-fit items-center gap-2 rounded-sm bg-[#C59B27] px-6 py-3 font-body text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[#2B0B12] hover:bg-[#D6AE3C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7E9C2]"
// //             >
// //               Request a quote
// //               <ArrowRight size={15} strokeWidth={2} />
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// "use client";

// import { useEffect, useRef, useState } from "react";
// import type { CSSProperties } from "react";
// import Link from "next/link";
// import {
//   ArrowRight,
//   Book,
//   BookMarked,
//   Keyboard,
//   Languages,
//   Layers,
//   Mic,
//   Palette,
//   PenLine,
//   Plus,
//   Printer,
//   Sparkles,
//   Truck,
// } from "lucide-react";

// const SERVICES = [
//   {
//     title: "Full Service",
//     icon: Layers,
//     tags: ["Transcription", "Editing"],
//     text: "Meticulous transcription, typesetting, and editing across every genre, fully customized layouts.",
//   },
//   {
//     title: "Content",
//     icon: Book,
//     tags: ["Derush", "Halacha", "Machshava"],
//     text: "In-house talmidei chachamim advising on derush, halacha, machshava, chassidus, and Kabbalah.",
//   },
//   {
//     title: "Editing, Hebrew & English",
//     icon: PenLine,
//     tags: ["Polish", "Proofread", "Style"],
//     text: "Skilled editors polish manuscripts while preserving personal style.",
//   },
//   {
//     title: "Typing, Hebrew & English",
//     icon: Keyboard,
//     tags: ["Hebrew", "English", "Handwritten"],
//     text: "Dedicated typists convert handwritten notes into distribution-ready manuscripts.",
//   },
//   {
//     title: "Transcriptions",
//     icon: Mic,
//     tags: ["Interviews", "Shiurim", "Lectures"],
//     text: "Audio (family interviews, shiurim, lectures) transcribed in English, Hebrew, or Yiddish.",
//   },
//   {
//     title: "Translations",
//     icon: Languages,
//     tags: ["English", "Hebrew", "Yiddish"],
//     text: "Between English, Hebrew, and Yiddish, reviewed for accuracy and style.",
//   },
//   {
//     title: "Graphics",
//     icon: Palette,
//     tags: ["Covers", "Dedications", "Flyers"],
//     text: "Custom covers, dedication pages, flyers and more, designed around your vision.",
//   },
//   {
//     title: "Covers",
//     icon: BookMarked,
//     tags: ["Hard & Soft", "Foil", "Leather"],
//     text: "Hard or soft, foil-stamped or printed, antique leather and more to make your sefer stand out.",
//   },
//   {
//     title: "Printing & Binding",
//     icon: Printer,
//     tags: ["Digital", "Offset", "Sewn"],
//     text: "Digital or offset, black and white or color, with sewn, spiral, or saddle-stitched binding.",
//   },
//   {
//     title: "Shipping & Distribution",
//     icon: Truck,
//     tags: ["Worldwide", "Distributors"],
//     text: "Your sefer delivered across the globe through leading book distributors.",
//   },
//   {
//     title: "Fiction, Non-Fiction & Memorials",
//     icon: Sparkles,
//     tags: ["Fiction", "Non-Fiction", "Memorial"],
//     text: "Research, editing, layout, and design for your family's story, at whatever stage you need.",
//   },
// ];

// const QUOTE_HREF = "/contact";

// // One colour per column, left to right: top edge and icon at rest, the whole card when active.
// // Every card in a column shares its colour. On narrower screens with fewer columns only the
// // first colours are used (two columns: the first two; one column: the first).
// const COLUMN_COLOURS = ["#4A1521", "#1C3326", "#1B2740"];

// // Faint ruled lines drawn over the card's colour when it is active (1px line every 17.5px).
// const RULED_LINES =
//   "repeating-linear-gradient(to bottom, transparent 0, transparent 16.5px, rgba(255,255,255,0.036) 16.5px, rgba(255,255,255,0.036) 17.5px)";

// // ---------------------------------------------------------------------------------------------
// // Scroll settings
// // ---------------------------------------------------------------------------------------------

// // Pin the section while the visitor scrolls, and let that scrolling light the cards one by one.
// // When the last card has been lit the section lets go and the page scrolls on as usual.
// // Set to false for a normal, unpinned section.
// const PIN_WHILE_SCROLLING = true;

// // SPEED. How many pixels of scrolling each card takes. Bigger = slower.
// // (One click of a mouse wheel is roughly 100.)
// const SCROLL_PER_CARD = 200;

// // Height in pixels of a navbar that stays fixed at the top of the screen, if you have one.
// // The pinned section sits just below it. Leave at 0 if your navbar scrolls away with the page.
// const PIN_TOP_OFFSET = 0;

// // The section is only pinned on screens at least this wide. Narrower screens (phones) scroll
// // normally, and the card passing the middle of the screen is the one that lights up.
// const PIN_MIN_WIDTH = 1024;

// /*
//   How it works
//   - At rest a card shows its icon, title and keywords. The active card takes its colour and shows
//     its description where the keywords were. Nothing animates: the change is instant.
//   - Pinned scrolling (wide screens): when the section reaches the top of the screen it stays there.
//     Scrolling now steps the highlight through the cards, left to right and row by row, exactly in
//     step with the scroll: scroll back and it steps back. If the section is taller than the screen
//     it also glides up slowly so the lit row stays in view. After the last card the section lets go.
//     This works with the mouse wheel, trackpad, touch, keyboard and scrollbar alike.
//   - Moving the mouse over a card, or tabbing to it, makes that card the active one instead.
//     Only one card is ever active at a time.
//   - Visitors who have asked their device for reduced motion get a normal section, hover only.
// */

// type Layout = { pin: boolean; viewport: number };

// export default function Services() {
//   const wrapRef = useRef<HTMLElement>(null);
//   const stickyRef = useRef<HTMLDivElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const gridRef = useRef<HTMLDivElement>(null);

//   const [layout, setLayout] = useState<Layout>({ pin: false, viewport: 0 });
//   const [columns, setColumns] = useState(3); // how many columns the grid currently has
//   const [pointed, setPointed] = useState<number | null>(null); // card under the mouse / keyboard focus
//   const [scrolled, setScrolled] = useState<number | null>(null); // card picked by the scroll position
//   const active = pointed ?? scrolled;

//   const scrollLength = SERVICES.length * SCROLL_PER_CARD;

//   // Keep track of how many columns the grid has, so each column can keep one colour.
//   useEffect(() => {
//     const measure = () => {
//       const grid = gridRef.current;
//       if (!grid) return;
//       const count = getComputedStyle(grid).gridTemplateColumns.split(" ").filter(Boolean).length;
//       setColumns(Math.max(1, count));
//     };
//     measure();
//     window.addEventListener("resize", measure);
//     return () => window.removeEventListener("resize", measure);
//   }, []);

//   useEffect(() => {
//     // Visitors who ask their device for less motion get a normal section with hover only.
//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

//     const count = SERVICES.length;
//     let pin = false;
//     let viewport = 0;
//     let stickyWorks = true; // turned off if something on the page stops the section from sticking
//     let frame = 0;

//     const decideLayout = () => {
//       viewport = window.innerHeight - PIN_TOP_OFFSET;
//       pin = PIN_WHILE_SCROLLING && stickyWorks && window.innerWidth >= PIN_MIN_WIDTH;
//       setLayout((prev) => (prev.pin === pin && prev.viewport === viewport ? prev : { pin, viewport }));
//     };

//     const update = () => {
//       frame = 0;
//       const wrap = wrapRef.current;
//       const sticky = stickyRef.current;
//       const content = contentRef.current;
//       const grid = gridRef.current;
//       if (!wrap || !sticky || !content || !grid) return;

//       if (pin) {
//         const rect = wrap.getBoundingClientRect();
//         const travelled = PIN_TOP_OFFSET - rect.top; // how far the visitor has scrolled into the pin
//         const progress = Math.min(Math.max(travelled / scrollLength, 0), 1);

//         // Safety net: if a parent element (for example one with overflow hidden) stops the
//         // section from sticking, fall back to a normal section instead of leaving a blank gap.
//         const midPin = travelled > 40 && travelled < scrollLength - 40;
//         if (midPin && Math.abs(sticky.getBoundingClientRect().top - PIN_TOP_OFFSET) > 8) {
//           stickyWorks = false;
//           content.style.transform = "";
//           decideLayout();
//           return;
//         }

//         // Shorter than the screen: sit in the middle. Taller: glide up as the cards are stepped through.
//         const height = content.offsetHeight;
//         const offset = height <= viewport ? (viewport - height) / 2 : -progress * (height - viewport);
//         content.style.transform = `translate3d(0, ${Math.round(offset)}px, 0)`;

//         const pinnedNow = travelled >= 0 && travelled < scrollLength;
//         setScrolled(pinnedNow ? Math.min(Math.floor(progress * count), count - 1) : null);
//         return;
//       }

//       // Not pinned: light the card that is passing the middle of the screen.
//       content.style.transform = "";
//       const rect = grid.getBoundingClientRect();
//       const progress = (window.innerHeight / 2 - rect.top) / rect.height;
//       const index = progress >= 0 && progress < 1 ? Math.floor(progress * grid.children.length) : -1;
//       setScrolled(index >= 0 && index < count ? index : null);
//     };

//     const onScroll = () => {
//       setPointed(null); // after a scroll the mouse may be resting on a different card
//       if (!frame) frame = requestAnimationFrame(update);
//     };

//     const onResize = () => {
//       decideLayout();
//       onScroll();
//     };

//     decideLayout();
//     // Wait a frame so the taller, pinned layout is in place before the first measurement.
//     frame = requestAnimationFrame(update);

//     const observer = new ResizeObserver(onScroll); // fonts loading, text wrapping...
//     if (contentRef.current) observer.observe(contentRef.current);

//     window.addEventListener("scroll", onScroll, { passive: true });
//     window.addEventListener("resize", onResize);
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", onResize);
//       observer.disconnect();
//       if (frame) cancelAnimationFrame(frame);
//     };
//   }, [scrollLength]);

//   return (
//     <section
//       id="services"
//       ref={wrapRef}
//       // When pinned, the section is made taller by the scroll distance of the whole tour.
//       style={layout.pin ? { height: layout.viewport + scrollLength } : undefined}
//       className="bg-[#FAF6EE]"
//     >
//       <div
//         ref={stickyRef}
//         style={layout.pin ? { position: "sticky", top: PIN_TOP_OFFSET, height: layout.viewport, overflow: "hidden" } : undefined}
//       >
//         <div ref={contentRef} className="px-6 py-16 lg:py-24">
//           <div className="mx-auto max-w-[1200px]">
//             <div className="text-center">
//               <span className="mb-4 inline-flex items-center gap-2.5 font-body text-xs font-semibold uppercase tracking-[0.24em] text-[#9C7A1E]">
//                 <span className="h-px w-5 bg-current opacity-60" />
//                 What We Offer
//                 <span className="h-px w-5 bg-current opacity-60" />
//               </span>
//               <h2 className="font-display text-[2.55rem] font-medium leading-[1.2] text-[#4A1521]">Every service, in-house.</h2>
//             </div>

//             <div
//               ref={gridRef}
//               onMouseLeave={() => setPointed(null)}
//               className="mt-10 grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3"
//             >
//               {SERVICES.map((service, i) => (
//                 <article
//                   key={service.title}
//                   tabIndex={0}
//                   data-active={active === i}
//                   onMouseMove={() => setPointed(i)}
//                   onFocus={() => setPointed(i)}
//                   onBlur={() => setPointed(null)}
//                   style={{ "--accent": COLUMN_COLOURS[(i % columns) % COLUMN_COLOURS.length], "--ruled": RULED_LINES } as CSSProperties}
//                   className="group relative flex flex-col border border-t-[3px] border-[#4A1521]/[0.12] border-t-[color:var(--accent)] bg-[#FAF2E5] px-7 pb-6 pt-8 outline-none !transition-none !animate-none data-[active=true]:bg-[color:var(--accent)] data-[active=true]:bg-[image:var(--ruled)] [&_*]:!transition-none [&_*]:!animate-none"
//                 >
//                   {/* Corner ticks */}
//                   <span aria-hidden="true" className="absolute left-2.5 top-2.5 h-2.5 w-2.5 border-l border-t border-[#C59B27]" />
//                   <span aria-hidden="true" className="absolute bottom-2.5 right-2.5 h-2.5 w-2.5 border-b border-r border-[#C59B27]" />

//                   {/* Small "+" that tells the visitor there is more to see */}
//                   <Plus
//                     aria-hidden="true"
//                     size={16}
//                     strokeWidth={1.6}
//                     className="absolute right-6 top-8 hidden text-[#9C7A1E] group-data-[active=true]:opacity-0 [@media(hover:hover)]:block"
//                   />

//                   <service.icon
//                     size={32}
//                     strokeWidth={1.4}
//                     className="text-[color:var(--accent)] group-data-[active=true]:text-[#E0BA53]"
//                   />

//                   <h3 className="mt-5 font-display text-[1.45rem] font-medium leading-snug text-[#3A101A] group-data-[active=true]:text-[#F7E9C2]">
//                     {service.title}
//                   </h3>

//                   {/* Keywords and description share the same space, so the card never changes size */}
//                   <div className="mt-3 grid flex-1">
//                     <ul className="col-start-1 row-start-1 hidden flex-wrap items-center gap-x-3 gap-y-1.5 self-end border-t border-[#4A1521]/[0.12] pt-4 font-body text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#9C7A1E] group-data-[active=true]:opacity-0 [@media(hover:hover)]:flex">
//                       {service.tags.map((tag, t) => (
//                         <li key={tag} className="flex items-center gap-3">
//                           {t > 0 && <span aria-hidden="true" className="h-[5px] w-[5px] rotate-45 bg-[#C59B27]" />}
//                           {tag}
//                         </li>
//                       ))}
//                     </ul>

//                     <p className="col-start-1 row-start-1 font-body text-[1rem] leading-[1.65] text-[#5C4B46] group-data-[active=true]:text-[#F1E6DA] group-data-[active=true]:opacity-100 [@media(hover:hover)]:opacity-0">
//                       {service.text}
//                     </p>
//                   </div>
//                 </article>
//               ))}

//               {/* Twelfth tile: call to action */}
//               <div className="flex flex-col justify-center border border-[#C59B27]/50 bg-[#3A101A] px-7 py-7">
//                 <div className="font-display text-[1.45rem] font-medium leading-snug text-[#F7E9C2]">Not sure where to start?</div>
//                 <p className="mt-2 font-body text-[1rem] leading-[1.65] text-[#EDE1D3]">Tell us about your sefer or manuscript.</p>
//                 <Link
//                   href={QUOTE_HREF}
//                   className="mt-4 inline-flex w-fit items-center gap-2 rounded-sm bg-[#C59B27] px-6 py-3 font-body text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[#2B0B12] hover:bg-[#D6AE3C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7E9C2]"
//                 >
//                   Request a quote
//                   <ArrowRight size={15} strokeWidth={2} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

// // import type { CSSProperties } from "react";
// // import Link from "next/link";
// // import {
// //   ArrowRight,
// //   Book,
// //   BookMarked,
// //   Keyboard,
// //   Languages,
// //   Layers,
// //   Mic,
// //   Palette,
// //   PenLine,
// //   Printer,
// //   Sparkles,
// //   Truck,
// // } from "lucide-react";

// // const SERVICES = [
// //   {
// //     title: "Full Service",
// //     icon: Layers,
// //     text: "Meticulous transcription, typesetting, and editing across every genre, fully customized layouts.",
// //   },
// //   {
// //     title: "Content",
// //     icon: Book,
// //     text: "In-house talmidei chachamim advising on content across derush, halacha, machshava, chassidus, and Kabbalah.",
// //   },
// //   {
// //     title: "Editing, Hebrew & English",
// //     icon: PenLine,
// //     text: "Skilled editors polish manuscripts while preserving personal style.",
// //   },
// //   {
// //     title: "Typing, Hebrew & English",
// //     icon: Keyboard,
// //     text: "Dedicated typists convert handwritten notes into distribution-ready manuscripts.",
// //   },
// //   {
// //     title: "Transcriptions",
// //     icon: Mic,
// //     text: "Audio (family interviews, shiurim, lectures) transcribed in English, Hebrew, or Yiddish.",
// //   },
// //   {
// //     title: "Translations",
// //     icon: Languages,
// //     text: "Between English, Hebrew, and Yiddish, reviewed for accuracy and style.",
// //   },
// //   {
// //     title: "Graphics",
// //     icon: Palette,
// //     text: "Custom covers, dedication pages, flyers and more, designed around your vision.",
// //   },
// //   {
// //     title: "Covers",
// //     icon: BookMarked,
// //     text: "Hard or soft, foil-stamped or printed, antique leather and more to make your sefer stand out.",
// //   },
// //   {
// //     title: "Printing & Binding",
// //     icon: Printer,
// //     text: "Digital or offset, black and white or color, with sewn, spiral, or saddle-stitched binding.",
// //   },
// //   {
// //     title: "Shipping & Distribution",
// //     icon: Truck,
// //     text: "Your sefer delivered across the globe through leading book distributors.",
// //   },
// //   {
// //     title: "Fiction, Non-Fiction & Family Memorial Books",
// //     icon: Sparkles,
// //     text: "Research, transcription, translation, editing, layout, and design for your family's story, at whatever stage you need.",
// //   },
// // ];

// // const QUOTE_HREF = "/contact";

// // // Each card takes the next colour in turn: top edge and icon at rest, the whole card on hover.
// // const ACCENTS = ["#4A1521", "#1C3326", "#1B2740", "#4A2A1B"];

// // export default function Services() {
// //   return (
// //     <section id="services" className="bg-[#FAF6EE] px-6 py-16 lg:py-24">
// //       <div className="mx-auto max-w-[1200px]">
// //         <div className="text-center">
// //           <span className="mb-4 inline-flex items-center gap-2.5 font-body text-xs font-semibold uppercase tracking-[0.24em] text-[#9C7A1E]">
// //             <span className="h-px w-5 bg-current opacity-60" />
// //             What We Offer
// //             <span className="h-px w-5 bg-current opacity-60" />
// //           </span>
// //           <h2 className="font-display text-[2.55rem] font-medium leading-[1.2] text-[#4A1521]">Every service, in-house.</h2>
// //         </div>

// //         <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
// //           {SERVICES.map((service, i) => (
// //             <article
// //               key={service.title}
// //               style={{ "--accent": ACCENTS[i % ACCENTS.length] } as CSSProperties}
// //               // No transition anywhere on the card: on hover the colour simply appears.
// //               // The ! classes also switch off any transition or animation coming from global styles.
// //               className="group relative border border-t-[3px] border-[#4A1521]/[0.12] border-t-[color:var(--accent)] bg-[#FAF2E5] px-7 pb-8 pt-9 !transition-none !animate-none hover:bg-[color:var(--accent)] [&_*]:!transition-none [&_*]:!animate-none"
// //             >
// //               {/* Corner ticks */}
// //               <span aria-hidden="true" className="absolute left-2.5 top-2.5 h-2.5 w-2.5 border-l border-t border-[#C59B27]" />
// //               <span aria-hidden="true" className="absolute bottom-2.5 right-2.5 h-2.5 w-2.5 border-b border-r border-[#C59B27]" />

// //               <service.icon size={34} strokeWidth={1.4} className="text-[color:var(--accent)] group-hover:text-[#E0BA53]" />

// //               <h3 className="mt-6 font-display text-[1.45rem] font-medium leading-snug text-[#3A101A] group-hover:text-[#F7E9C2]">
// //                 {service.title}
// //               </h3>
// //               <p className="mt-3 font-body text-[1rem] leading-[1.75] text-[#5C4B46] group-hover:text-[#EDE1D3]">{service.text}</p>
// //             </article>
// //           ))}

// //           {/* Twelfth tile: call to action */}
// //           <div className="flex flex-col justify-center border border-[#C59B27]/50 bg-[#3A101A] px-7 py-8">
// //             <div className="font-display text-[1.45rem] font-medium leading-snug text-[#F7E9C2]">Not sure where to start?</div>
// //             <p className="mt-3 font-body text-[1rem] leading-[1.75] text-[#EDE1D3]">
// //               Tell us about your sefer or manuscript and we&apos;ll put together a quote.
// //             </p>
// //             <Link
// //               href={QUOTE_HREF}
// //               className="mt-5 inline-flex w-fit items-center gap-2 rounded-sm bg-[#C59B27] px-6 py-3 font-body text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[#2B0B12] hover:bg-[#D6AE3C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7E9C2]"
// //             >
// //               Request a quote
// //               <ArrowRight size={15} strokeWidth={2} />
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import type { CSSProperties } from "react";
// import Link from "next/link";
// import {
//   ArrowRight,
//   Book,
//   BookMarked,
//   Keyboard,
//   Languages,
//   Layers,
//   Mic,
//   Palette,
//   PenLine,
//   Printer,
//   Sparkles,
//   Truck,
// } from "lucide-react";

// const SERVICES = [
//   {
//     title: "Full Service",
//     icon: Layers,
//     text: "Meticulous transcription, typesetting, and editing across every genre, fully customized layouts.",
//   },
//   {
//     title: "Content",
//     icon: Book,
//     text: "In-house talmidei chachamim advising on content across derush, halacha, machshava, chassidus, and Kabbalah.",
//   },
//   {
//     title: "Editing, Hebrew & English",
//     icon: PenLine,
//     text: "Skilled editors polish manuscripts while preserving personal style.",
//   },
//   {
//     title: "Typing, Hebrew & English",
//     icon: Keyboard,
//     text: "Dedicated typists convert handwritten notes into distribution-ready manuscripts.",
//   },
//   {
//     title: "Transcriptions",
//     icon: Mic,
//     text: "Audio (family interviews, shiurim, lectures) transcribed in English, Hebrew, or Yiddish.",
//   },
//   {
//     title: "Translations",
//     icon: Languages,
//     text: "Between English, Hebrew, and Yiddish, reviewed for accuracy and style.",
//   },
//   {
//     title: "Graphics",
//     icon: Palette,
//     text: "Custom covers, dedication pages, flyers and more, designed around your vision.",
//   },
//   {
//     title: "Covers",
//     icon: BookMarked,
//     text: "Hard or soft, foil-stamped or printed, antique leather and more to make your sefer stand out.",
//   },
//   {
//     title: "Printing & Binding",
//     icon: Printer,
//     text: "Digital or offset, black and white or color, with sewn, spiral, or saddle-stitched binding.",
//   },
//   {
//     title: "Shipping & Distribution",
//     icon: Truck,
//     text: "Your sefer delivered across the globe through leading book distributors.",
//   },
//   {
//     title: "Fiction, Non-Fiction & Family Memorial Books",
//     icon: Sparkles,
//     text: "Research, transcription, translation, editing, layout, and design for your family's story, at whatever stage you need.",
//   },
// ];

// const QUOTE_HREF = "/contact";

// // Each card takes the next colour in turn: top edge and icon at rest, the whole card on hover.
// const ACCENTS = ["#4A1521", "#1C3326", "#1B2740", "#4A2A1B"];

// export default function Services() {
//   return (
//     <section id="services" className="bg-[#FAF6EE] px-6 py-16 lg:py-24">
//       <div className="mx-auto max-w-[1200px]">
//         <div className="text-center">
//           <span className="mb-4 inline-flex items-center gap-2.5 font-body text-xs font-semibold uppercase tracking-[0.24em] text-[#9C7A1E]">
//             <span className="h-px w-5 bg-current opacity-60" />
//             What We Offer
//             <span className="h-px w-5 bg-current opacity-60" />
//           </span>
//           <h2 className="font-display text-[2.55rem] font-medium leading-[1.2] text-[#4A1521]">Every service, in-house.</h2>
//         </div>

//         <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
//           {SERVICES.map((service, i) => (
//             <article
//               key={service.title}
//               style={{ "--accent": ACCENTS[i % ACCENTS.length] } as CSSProperties}
//               // No transition anywhere on the card: on hover the colour simply appears.
//               // The ! classes also switch off any transition or animation coming from global styles.
//               className="group relative border border-t-[3px] border-[#4A1521]/[0.12] border-t-[color:var(--accent)] bg-[#FAF2E5] px-7 pb-8 pt-9 transition-none! animate-none! hover:bg-(--accent) **:transition-none! **:animate-none!"
//             >
//               {/* Corner ticks */}
//               <span aria-hidden="true" className="absolute left-2.5 top-2.5 h-2.5 w-2.5 border-l border-t border-[#C59B27]" />
//               <span aria-hidden="true" className="absolute bottom-2.5 right-2.5 h-2.5 w-2.5 border-b border-r border-[#C59B27]" />

//               <service.icon size={34} strokeWidth={1.4} className="text-(--accent) group-hover:text-brass-light" />

//               <h3 className="mt-6 font-display text-[1.45rem] font-medium leading-snug text-[#3A101A] group-hover:text-[#F7E9C2]">
//                 {service.title}
//               </h3>
//               <p className="mt-3 font-body text-[1rem] leading-[1.75] text-[#5C4B46] group-hover:text-[#EDE1D3]">{service.text}</p>
//             </article>
//           ))}

//           {/* Twelfth tile: call to action */}
//           <div className="flex flex-col justify-center border border-[#C59B27]/50 bg-[#3A101A] px-7 py-8">
//             <div className="font-display text-[1.45rem] font-medium leading-snug text-[#F7E9C2]">Not sure where to start?</div>
//             <p className="mt-3 font-body text-[1rem] leading-[1.75] text-[#EDE1D3]">
//               Tell us about your sefer or manuscript and we&apos;ll put together a quote.
//             </p>
//             <Link
//               href={QUOTE_HREF}
//               className="mt-5 inline-flex w-fit items-center gap-2 rounded-sm bg-[#C59B27] px-6 py-3 font-body text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[#2B0B12] hover:bg-[#D6AE3C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7E9C2]"
//             >
//               Request a quote
//               <ArrowRight size={15} strokeWidth={2} />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// import { useEffect, useRef, useState } from "react";
// import type { CSSProperties } from "react";
// import Link from "next/link";
// import {
//   ArrowRight,
//   Book,
//   BookMarked,
//   Keyboard,
//   Languages,
//   Layers,
//   Mic,
//   Palette,
//   PenLine,
//   Plus,
//   Printer,
//   Sparkles,
//   Truck,
// } from "lucide-react";

// const SERVICES = [
//   {
//     title: "Full Service",
//     icon: Layers,
//     tags: ["Transcription", "Editing"],
//     text: "Meticulous transcription, typesetting, and editing across every genre, fully customized layouts.",
//   },
//   {
//     title: "Content",
//     icon: Book,
//     tags: ["Derush", "Halacha", "Machshava"],
//     text: "In-house talmidei chachamim advising on derush, halacha, machshava, chassidus, and Kabbalah.",
//   },
//   {
//     title: "Editing, Hebrew & English",
//     icon: PenLine,
//     tags: ["Polish", "Proofread", "Style"],
//     text: "Skilled editors polish manuscripts while preserving personal style.",
//   },
//   {
//     title: "Typing, Hebrew & English",
//     icon: Keyboard,
//     tags: ["Hebrew", "English", "Handwritten"],
//     text: "Dedicated typists convert handwritten notes into distribution-ready manuscripts.",
//   },
//   {
//     title: "Transcriptions",
//     icon: Mic,
//     tags: ["Interviews", "Shiurim", "Lectures"],
//     text: "Audio (family interviews, shiurim, lectures) transcribed in English, Hebrew, or Yiddish.",
//   },
//   {
//     title: "Translations",
//     icon: Languages,
//     tags: ["English", "Hebrew", "Yiddish"],
//     text: "Between English, Hebrew, and Yiddish, reviewed for accuracy and style.",
//   },
//   {
//     title: "Graphics",
//     icon: Palette,
//     tags: ["Covers", "Dedications", "Flyers"],
//     text: "Custom covers, dedication pages, flyers and more, designed around your vision.",
//   },
//   {
//     title: "Covers",
//     icon: BookMarked,
//     tags: ["Hard & Soft", "Foil", "Leather"],
//     text: "Hard or soft, foil-stamped or printed, antique leather and more to make your sefer stand out.",
//   },
//   {
//     title: "Printing & Binding",
//     icon: Printer,
//     tags: ["Digital", "Offset", "Sewn"],
//     text: "Digital or offset, black and white or color, with sewn, spiral, or saddle-stitched binding.",
//   },
//   {
//     title: "Shipping & Distribution",
//     icon: Truck,
//     tags: ["Worldwide", "Distributors"],
//     text: "Your sefer delivered across the globe through leading book distributors.",
//   },
//   {
//     title: "Fiction, Non-Fiction & Memorials",
//     icon: Sparkles,
//     tags: ["Fiction", "Non-Fiction", "Memorial"],
//     text: "Research, editing, layout, and design for your family's story, at whatever stage you need.",
//   },
// ];

// const QUOTE_HREF = "/contact";

// // Each card takes the next colour in turn: top edge and icon at rest, the whole card when active.
// const ACCENTS = ["#4A1521", "#1C3326", "#1B2740", "#4A2A1B"];

// // Faint ruled lines drawn over the card's colour when it is active (1px line every 17.5px).
// const RULED_LINES =
//   "repeating-linear-gradient(to bottom, transparent 0, transparent 16.5px, rgba(255,255,255,0.036) 16.5px, rgba(255,255,255,0.036) 17.5px)";

// // Set to false to switch the scroll highlight off; cards then only react to the mouse and keyboard.
// const HIGHLIGHT_ON_SCROLL = true;

// // The card crossing this point of the screen is the one lit while scrolling (0.5 = the middle).
// const SCROLL_LINE = 0.5;

// // SPEED. The shortest time, in milliseconds, each card stays lit while scrolling.
// // Bigger = slower (1000 = one second per card). 0 = follow the scroll exactly, however fast.
// // When a visitor scrolls faster than this, the highlight follows behind and catches up one card
// // at a time, so no card is skipped.
// const MIN_TIME_PER_CARD = 600;

// /*
//   How a card becomes "active"
//   - At rest a card shows its icon, title and keywords. The active card takes its colour and shows
//     its description where the keywords were. Nothing moves and nothing animates.
//   - Scrolling: as the grid passes the middle of the screen, the cards light up one after another,
//     left to right and row by row, so every visitor sees each description without having to hover.
//     Each card stays lit for at least MIN_TIME_PER_CARD, so a fast scroll cannot rush through them.
//   - Mouse and keyboard still work: moving the mouse over a card, or tabbing to it, makes that card
//     the active one. Only one card is ever active at a time.
//   - Phones and tablets have no hover, so the descriptions are always shown there; the scroll
//     highlight just adds the colour.
// */

// export default function Services() {
//   const gridRef = useRef<HTMLDivElement>(null);
//   const [pointed, setPointed] = useState<number | null>(null); // card under the mouse / keyboard focus
//   const [scrolled, setScrolled] = useState<number | null>(null); // card picked by the scroll position
//   const active = pointed ?? scrolled;

//   useEffect(() => {
//     if (!HIGHLIGHT_ON_SCROLL) return;
//     // Visitors who ask their device for less motion don't get the automatic highlight.
//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

//     const count = SERVICES.length;
//     // Positions along the tour: -1 = before the first card, 0..count-1 = a card, count = after the last.
//     let position: number | null = null; // where the highlight is now
//     let target = -1; // where the scroll position says it should be
//     let lastStep = 0;
//     let frame = 0;
//     let timer: ReturnType<typeof setTimeout> | undefined;

//     const show = (next: number) => {
//       position = next;
//       lastStep = performance.now();
//       setScrolled(next >= 0 && next < count ? next : null);
//     };

//     // Move one card towards the target, but never sooner than MIN_TIME_PER_CARD after the last move.
//     const advance = () => {
//       timer = undefined;
//       if (position === null || position === target) return;

//       const wait = MIN_TIME_PER_CARD - (performance.now() - lastStep);
//       const onACard = position >= 0 && position < count;
//       if (onACard && wait > 0) {
//         timer = setTimeout(advance, wait);
//         return;
//       }

//       show(position + Math.sign(target - position));
//       if (position !== target) timer = setTimeout(advance, MIN_TIME_PER_CARD);
//     };

//     const update = () => {
//       frame = 0;
//       const grid = gridRef.current;
//       if (!grid) return;

//       const rect = grid.getBoundingClientRect();
//       const line = window.innerHeight * SCROLL_LINE;
//       const tiles = grid.children.length; // the service cards plus the call-to-action tile
//       const progress = (line - rect.top) / rect.height;

//       // All tiles are the same size, so the position along the grid maps straight onto a tile.
//       if (progress < 0) target = -1;
//       else if (progress >= 1) target = count;
//       else target = Math.min(Math.floor(progress * tiles), count);

//       const gridOnScreen = rect.bottom > 0 && rect.top < window.innerHeight;

//       // Jump straight there on first load, when the grid is off screen, or when no minimum time is set.
//       if (position === null || !gridOnScreen || MIN_TIME_PER_CARD <= 0) {
//         if (timer) clearTimeout(timer);
//         timer = undefined;
//         show(target);
//         return;
//       }

//       if (!timer) advance();
//     };

//     const onScroll = () => {
//       setPointed(null); // after a scroll the mouse may be resting on a different card
//       if (!frame) frame = requestAnimationFrame(update);
//     };

//     update();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     window.addEventListener("resize", onScroll);
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", onScroll);
//       if (frame) cancelAnimationFrame(frame);
//       if (timer) clearTimeout(timer);
//     };
//   }, []);

//   return (
//     <section id="services" className="bg-[#FAF6EE] px-6 py-16 lg:py-24">
//       <div className="mx-auto max-w-[1200px]">
//         <div className="text-center">
//           <span className="mb-4 inline-flex items-center gap-2.5 font-body text-xs font-semibold uppercase tracking-[0.24em] text-[#9C7A1E]">
//             <span className="h-px w-5 bg-current opacity-60" />
//             What We Offer
//             <span className="h-px w-5 bg-current opacity-60" />
//           </span>
//           <h2 className="font-display text-[2.55rem] font-medium leading-[1.2] text-[#4A1521]">Every service, in-house.</h2>
//         </div>

//         <div
//           ref={gridRef}
//           onMouseLeave={() => setPointed(null)}
//           className="mt-10 grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3"
//         >
//           {SERVICES.map((service, i) => (
//             <article
//               key={service.title}
//               tabIndex={0}
//               data-active={active === i}
//               onMouseMove={() => setPointed(i)}
//               onFocus={() => setPointed(i)}
//               onBlur={() => setPointed(null)}
//               style={{ "--accent": ACCENTS[i % ACCENTS.length], "--ruled": RULED_LINES } as CSSProperties}
//               className="group relative flex flex-col border border-t-[3px] border-[#4A1521]/[0.12] border-t-[color:var(--accent)] bg-[#FAF2E5] px-7 pb-6 pt-8 outline-none !transition-none !animate-none data-[active=true]:bg-[color:var(--accent)] data-[active=true]:bg-[image:var(--ruled)] [&_*]:!transition-none [&_*]:!animate-none"
//             >
//               {/* Corner ticks */}
//               <span aria-hidden="true" className="absolute left-2.5 top-2.5 h-2.5 w-2.5 border-l border-t border-[#C59B27]" />
//               <span aria-hidden="true" className="absolute bottom-2.5 right-2.5 h-2.5 w-2.5 border-b border-r border-[#C59B27]" />

//               {/* Small "+" that tells the visitor there is more to see */}
//               <Plus
//                 aria-hidden="true"
//                 size={16}
//                 strokeWidth={1.6}
//                 className="absolute right-6 top-8 hidden text-[#9C7A1E] group-data-[active=true]:opacity-0 [@media(hover:hover)]:block"
//               />

//               <service.icon
//                 size={32}
//                 strokeWidth={1.4}
//                 className="text-[color:var(--accent)] group-data-[active=true]:text-[#E0BA53]"
//               />

//               <h3 className="mt-5 font-display text-[1.45rem] font-medium leading-snug text-[#3A101A] group-data-[active=true]:text-[#F7E9C2]">
//                 {service.title}
//               </h3>

//               {/* Keywords and description share the same space, so the card never changes size */}
//               <div className="mt-3 grid flex-1">
//                 <ul className="col-start-1 row-start-1 hidden flex-wrap items-center gap-x-3 gap-y-1.5 self-end border-t border-[#4A1521]/[0.12] pt-4 font-body text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#9C7A1E] group-data-[active=true]:opacity-0 [@media(hover:hover)]:flex">
//                   {service.tags.map((tag, t) => (
//                     <li key={tag} className="flex items-center gap-3">
//                       {t > 0 && <span aria-hidden="true" className="h-[5px] w-[5px] rotate-45 bg-[#C59B27]" />}
//                       {tag}
//                     </li>
//                   ))}
//                 </ul>

//                 <p className="col-start-1 row-start-1 font-body text-[1rem] leading-[1.65] text-[#5C4B46] group-data-[active=true]:text-[#F1E6DA] group-data-[active=true]:opacity-100 [@media(hover:hover)]:opacity-0">
//                   {service.text}
//                 </p>
//               </div>
//             </article>
//           ))}

//           {/* Twelfth tile: call to action */}
//           <div className="flex flex-col justify-center border border-[#C59B27]/50 bg-[#3A101A] px-7 py-7">
//             <div className="font-display text-[1.45rem] font-medium leading-snug text-[#F7E9C2]">Not sure where to start?</div>
//             <p className="mt-2 font-body text-[1rem] leading-[1.65] text-[#EDE1D3]">Tell us about your sefer or manuscript.</p>
//             <Link
//               href={QUOTE_HREF}
//               className="mt-4 inline-flex w-fit items-center gap-2 rounded-sm bg-[#C59B27] px-6 py-3 font-body text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[#2B0B12] hover:bg-[#D6AE3C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7E9C2]"
//             >
//               Request a quote
//               <ArrowRight size={15} strokeWidth={2} />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Book,
  BookMarked,
  Keyboard,
  Languages,
  Layers,
  Mic,
  Palette,
  PenLine,
  Printer,
  Sparkles,
  Truck,
} from "lucide-react";

const SERVICES = [
  {
    title: "Full Service",
    icon: Layers,
    tags: ["Transcription", "Editing"],
    text: "Meticulous transcription, typesetting, and editing across every genre, fully customized layouts.",
  },
  {
    title: "Content",
    icon: Book,
    tags: ["Derush", "Halacha", "Machshava"],
    text: "In-house talmidei chachamim advising on derush, halacha, machshava, chassidus, and Kabbalah.",
  },
  {
    title: "Editing, Hebrew & English",
    icon: PenLine,
    tags: ["Polish", "Proofread", "Style"],
    text: "Skilled editors polish manuscripts while preserving personal style.",
  },
  {
    title: "Typing, Hebrew & English",
    icon: Keyboard,
    tags: ["Hebrew", "English", "Handwritten"],
    text: "Dedicated typists convert handwritten notes into distribution-ready manuscripts.",
  },
  {
    title: "Transcriptions",
    icon: Mic,
    tags: ["Interviews", "Shiurim", "Lectures"],
    text: "Audio (family interviews, shiurim, lectures) transcribed in English, Hebrew, or Yiddish.",
  },
  {
    title: "Translations",
    icon: Languages,
    tags: ["English", "Hebrew", "Yiddish"],
    text: "Between English, Hebrew, and Yiddish, reviewed for accuracy and style.",
  },
  {
    title: "Graphics",
    icon: Palette,
    tags: ["Covers", "Dedications", "Flyers"],
    text: "Custom covers, dedication pages, flyers and more, designed around your vision.",
  },
  {
    title: "Covers",
    icon: BookMarked,
    tags: ["Hard & Soft", "Foil", "Leather"],
    text: "Hard or soft, foil-stamped or printed, antique leather and more to make your sefer stand out.",
  },
  {
    title: "Printing & Binding",
    icon: Printer,
    tags: ["Digital", "Offset", "Sewn"],
    text: "Digital or offset, black and white or color, with sewn, spiral, or saddle-stitched binding.",
  },
  {
    title: "Shipping & Distribution",
    icon: Truck,
    tags: ["Worldwide", "Distributors"],
    text: "Your sefer delivered across the globe through leading book distributors.",
  },
  {
    title: "Fiction, Non-Fiction & Memorials",
    icon: Sparkles,
    tags: ["Fiction", "Non-Fiction", "Memorial"],
    text: "Research, editing, layout, and design for your family's story, at whatever stage you need.",
  },
];

const QUOTE_HREF = "/contact";

// ---------------------------------------------------------------------------------------------
// Scroll settings
// ---------------------------------------------------------------------------------------------

// Pin the section while the visitor scrolls, and let that scrolling light the cards one by one.
// When the last card has been lit the section lets go and the page scrolls on as usual.
// Set to false for a normal, unpinned section.
const PIN_WHILE_SCROLLING = true;

// SPEED. How many pixels of scrolling each card takes. Bigger = slower.
// (One click of a mouse wheel is roughly 100.)
const SCROLL_PER_CARD = 200;

// Height in pixels of a navbar that stays fixed at the top of the screen, if you have one.
// The pinned section sits just below it. Leave at 0 if your navbar scrolls away with the page.
const PIN_TOP_OFFSET = 0;

// The section is only pinned on screens at least this wide. Narrower screens (phones) scroll
// normally, and the card passing the middle of the screen is the one that lights up.
const PIN_MIN_WIDTH = 1024;

/*
  How it works
  - The cards use the same design as the cards on the services page: icon, title and description,
    always visible. The active card gets that card's hover look (slight lift, gold border, shadow,
    dark icon tile).
  - Pinned scrolling (wide screens): when the section reaches the top of the screen it stays there.
    Scrolling now steps the highlight through the cards, left to right and row by row, exactly in
    step with the scroll: scroll back and it steps back. If the section is taller than the screen
    it also glides up slowly so the lit row stays in view. After the last card the section lets go.
    This works with the mouse wheel, trackpad, touch, keyboard and scrollbar alike.
  - Moving the mouse over a card, or tabbing to it, makes that card the active one instead.
    Only one card is ever active at a time.
  - Visitors who have asked their device for reduced motion get a normal section, hover only.
*/

type Layout = { pin: boolean; viewport: number };

export default function Services() {
  const wrapRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const [layout, setLayout] = useState<Layout>({ pin: false, viewport: 0 });
  const [pointed, setPointed] = useState<number | null>(null); // card under the mouse / keyboard focus
  const [scrolled, setScrolled] = useState<number | null>(null); // card picked by the scroll position
  const active = pointed ?? scrolled;

  const scrollLength = SERVICES.length * SCROLL_PER_CARD;

  useEffect(() => {
    // Visitors who ask their device for less motion get a normal section with hover only.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const count = SERVICES.length;
    let pin = false;
    let viewport = 0;
    let stickyWorks = true; // turned off if something on the page stops the section from sticking
    let frame = 0;

    const decideLayout = () => {
      viewport = window.innerHeight - PIN_TOP_OFFSET;
      pin = PIN_WHILE_SCROLLING && stickyWorks && window.innerWidth >= PIN_MIN_WIDTH;
      setLayout((prev) => (prev.pin === pin && prev.viewport === viewport ? prev : { pin, viewport }));
    };

    const update = () => {
      frame = 0;
      const wrap = wrapRef.current;
      const sticky = stickyRef.current;
      const content = contentRef.current;
      const grid = gridRef.current;
      if (!wrap || !sticky || !content || !grid) return;

      if (pin) {
        const rect = wrap.getBoundingClientRect();
        const travelled = PIN_TOP_OFFSET - rect.top; // how far the visitor has scrolled into the pin
        const progress = Math.min(Math.max(travelled / scrollLength, 0), 1);

        // Safety net: if a parent element (for example one with overflow hidden) stops the
        // section from sticking, fall back to a normal section instead of leaving a blank gap.
        const midPin = travelled > 40 && travelled < scrollLength - 40;
        if (midPin && Math.abs(sticky.getBoundingClientRect().top - PIN_TOP_OFFSET) > 8) {
          stickyWorks = false;
          content.style.transform = "";
          decideLayout();
          return;
        }

        // Shorter than the screen: sit in the middle. Taller: glide up as the cards are stepped through.
        const height = content.offsetHeight;
        const offset = height <= viewport ? (viewport - height) / 2 : -progress * (height - viewport);
        content.style.transform = `translate3d(0, ${Math.round(offset)}px, 0)`;

        const pinnedNow = travelled >= 0 && travelled < scrollLength;
        setScrolled(pinnedNow ? Math.min(Math.floor(progress * count), count - 1) : null);
        return;
      }

      // Not pinned: light the card that is passing the middle of the screen.
      content.style.transform = "";
      const rect = grid.getBoundingClientRect();
      const progress = (window.innerHeight / 2 - rect.top) / rect.height;
      const index = progress >= 0 && progress < 1 ? Math.floor(progress * grid.children.length) : -1;
      setScrolled(index >= 0 && index < count ? index : null);
    };

    const onScroll = () => {
      setPointed(null); // after a scroll the mouse may be resting on a different card
      if (!frame) frame = requestAnimationFrame(update);
    };

    const onResize = () => {
      decideLayout();
      onScroll();
    };

    decideLayout();
    // Wait a frame so the taller, pinned layout is in place before the first measurement.
    frame = requestAnimationFrame(update);

    const observer = new ResizeObserver(onScroll); // fonts loading, text wrapping...
    if (contentRef.current) observer.observe(contentRef.current);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [scrollLength]);

  return (
    <section
      id="services"
      ref={wrapRef}
      // When pinned, the section is made taller by the scroll distance of the whole tour.
      style={layout.pin ? { height: layout.viewport + scrollLength } : undefined}
      className="bg-[#FAF6EE]"
    >
      <div
        ref={stickyRef}
        style={layout.pin ? { position: "sticky", top: PIN_TOP_OFFSET, height: layout.viewport, overflow: "hidden" } : undefined}
      >
        <div ref={contentRef} className="px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center">
              <span className="mb-4 inline-flex items-center gap-2.5 font-body text-xs font-semibold uppercase tracking-[0.24em] text-[#9C7A1E]">
                <span className="h-px w-5 bg-current opacity-60" />
                What We Offer
                <span className="h-px w-5 bg-current opacity-60" />
              </span>
              <h2 className="font-display text-[2.55rem] font-medium leading-[1.2] text-[#4A1521]">Every service, in-house.</h2>
            </div>

            <div
              ref={gridRef}
              onMouseLeave={() => setPointed(null)}
              className="mt-10 grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3"
            >
              {SERVICES.map((service, i) => (
                // Same design as the card on the services page. Its hover look is applied through
                // data-active, so hovering, keyboard focus and the scroll highlight all look the same.
                <article
                  key={service.title}
                  tabIndex={0}
                  data-active={active === i}
                  onMouseMove={() => setPointed(i)}
                  onFocus={() => setPointed(i)}
                  onBlur={() => setPointed(null)}
                  className="group h-full rounded-sm border border-[#4A1521]/10 bg-white p-7 outline-none transition-all duration-300 data-[active=true]:-translate-y-1 data-[active=true]:border-[#C59B27]/40 data-[active=true]:shadow-[0_16px_32px_rgba(58,16,26,0.08)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#F8F3EA] text-[#8B6816] transition-colors group-data-[active=true]:bg-[#3A101A] group-data-[active=true]:text-[#F7E9C2]">
                    <service.icon size={19} strokeWidth={1.7} />
                  </span>
                  <div className="mt-5 font-display text-lg text-[#3A101A]">{service.title}</div>
                  <p className="mt-2 font-body text-[0.85rem] leading-relaxed text-[#66575A]">{service.text}</p>
                </article>
              ))}

              {/* Twelfth tile: call to action (same design as on the services page) */}
              <div className="flex h-full flex-col justify-center rounded-sm border border-[#C59B27]/40 bg-[#3A101A] p-7">
                <div className="font-display text-xl text-[#F7E9C2]">Not sure where to start?</div>
                <p className="mt-2 font-body text-[0.85rem] leading-relaxed text-[#D6C6C2]">
                  Tell us about your sefer or manuscript and we&apos;ll put together a quote that covers exactly what
                  you need.
                </p>
                <Link
                  href={QUOTE_HREF}
                  className="group mt-5 inline-flex w-fit items-center gap-2 rounded-sm bg-[#C59B27] px-5 py-2.5 font-body text-sm font-semibold uppercase tracking-[0.05em] text-[#3A101A] transition-colors hover:bg-[#D6AE3C]"
                >
                  Request Quote
                  <ArrowRight size={15} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}