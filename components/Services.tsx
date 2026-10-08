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
import type { CSSProperties } from "react";
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
  Plus,
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
    text: "In-house talmidei chachamim advising on content across derush, halacha, machshava, chassidus, and Kabbalah.",
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
    title: "Fiction, Non-Fiction & Family Memorial Books",
    icon: Sparkles,
    tags: ["Fiction", "Non-Fiction", "Memorial"],
    text: "Research, editing, layout, and design for your family's story, at whatever stage you need.",
  },
];

const QUOTE_HREF = "/contact";

// Each card takes the next colour in turn: top edge and icon at rest, the whole card on hover.
const ACCENTS = ["#4A1521", "#1C3326", "#1B2740", "#4A2A1B"];

// Faint ruled lines drawn over the card's colour on hover (1px line every 17.5px).
const RULED_LINES =
  "repeating-linear-gradient(to bottom, transparent 0, transparent 16.5px, rgba(255,255,255,0.036) 16.5px, rgba(255,255,255,0.036) 17.5px)";

/*
  How the hover works
  - At rest a card shows its icon, title and keywords.
  - On hover (or keyboard focus) the card takes its colour and the description appears where the
    keywords were. Nothing moves and nothing animates: there is no transition on any of it.
  - The [@media(hover:hover)] classes apply only on devices with a real pointer. Phones and tablets
    have no hover, so there the description is simply always shown.
*/

export default function Services() {
  return (
    <section id="services" className="bg-[#FAF6EE] px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <span className="mb-4 inline-flex items-center gap-2.5 font-body text-xs font-semibold uppercase tracking-[0.24em] text-[#9C7A1E]">
            <span className="h-px w-5 bg-current opacity-60" />
            What We Offer
            <span className="h-px w-5 bg-current opacity-60" />
          </span>
          <h2 className="font-display text-[2.55rem] font-medium leading-[1.2] text-[#4A1521]">Every service, in-house.</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <article
              key={service.title}
              tabIndex={0}
              style={{ "--accent": ACCENTS[i % ACCENTS.length], "--ruled": RULED_LINES } as CSSProperties}
              className="group relative flex flex-col border border-t-[3px] border-[#4A1521]/[0.12] border-t-[color:var(--accent)] bg-[#FAF2E5] px-7 pb-6 pt-8 outline-none !transition-none !animate-none focus-visible:bg-[color:var(--accent)] focus-visible:bg-[image:var(--ruled)] [&_*]:!transition-none [&_*]:!animate-none [@media(hover:hover)]:hover:bg-[color:var(--accent)] [@media(hover:hover)]:hover:bg-[image:var(--ruled)]"
            >
              {/* Corner ticks */}
              <span aria-hidden="true" className="absolute left-2.5 top-2.5 h-2.5 w-2.5 border-l border-t border-[#C59B27]" />
              <span aria-hidden="true" className="absolute bottom-2.5 right-2.5 h-2.5 w-2.5 border-b border-r border-[#C59B27]" />

              {/* Small "+" that tells the visitor there is more to see */}
              <Plus
                aria-hidden="true"
                size={16}
                strokeWidth={1.6}
                className="absolute right-6 top-8 hidden text-[#9C7A1E] group-focus-visible:opacity-0 [@media(hover:hover)]:block [@media(hover:hover)]:group-hover:opacity-0"
              />

              <service.icon
                size={32}
                strokeWidth={1.4}
                className="text-[color:var(--accent)] group-focus-visible:text-[#E0BA53] [@media(hover:hover)]:group-hover:text-[#E0BA53]"
              />

              <h3 className="mt-5 font-display text-[1.45rem] font-medium leading-snug text-[#3A101A] group-focus-visible:text-[#F7E9C2] [@media(hover:hover)]:group-hover:text-[#F7E9C2]">
                {service.title}
              </h3>

              {/* Keywords and description share the same space, so the card never changes size */}
              <div className="mt-3 grid flex-1">
                <ul className="col-start-1 row-start-1 hidden flex-wrap items-center gap-x-3 gap-y-1.5 self-end border-t border-[#4A1521]/[0.12] pt-4 font-body text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#9C7A1E] group-focus-visible:opacity-0 [@media(hover:hover)]:flex [@media(hover:hover)]:group-hover:opacity-0">
                  {service.tags.map((tag, t) => (
                    <li key={tag} className="flex items-center gap-3">
                      {t > 0 && <span aria-hidden="true" className="h-[5px] w-[5px] rotate-45 bg-[#C59B27]" />}
                      {tag}
                    </li>
                  ))}
                </ul>

                <p className="col-start-1 row-start-1 font-body text-[1rem] leading-[1.65] text-[#5C4B46] group-focus-visible:text-[#F1E6DA] group-focus-visible:opacity-100 [@media(hover:hover)]:text-[#F1E6DA] [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100">
                  {service.text}
                </p>
              </div>
            </article>
          ))}

          {/* Twelfth tile: call to action */}
          <div className="flex flex-col justify-center border border-[#C59B27]/50 bg-[#3A101A] px-7 py-7">
            <div className="font-display text-[1.45rem] font-medium leading-snug text-[#F7E9C2]">Not sure where to start?</div>
            <p className="mt-2 font-body text-[1rem] leading-[1.65] text-[#EDE1D3]">Tell us about your sefer or manuscript.</p>
            <Link
              href={QUOTE_HREF}
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-sm bg-[#C59B27] px-6 py-3 font-body text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[#2B0B12] hover:bg-[#D6AE3C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7E9C2]"
            >
              Request a quote
              <ArrowRight size={15} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}