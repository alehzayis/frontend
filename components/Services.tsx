// import { Layers3, BookOpen, PenLine, Keyboard, Mic, Languages, Circle, BookMarked, Printer, Globe2, Users, ArrowRight } from "lucide-react";

// const services = [
//   { title: "Full Service", description: "Meticulous transcription, typesetting, and editing across every genre, fully customized layouts.", color: "#4A1521", icon: Layers3 },
//   { title: "Content", description: "In-house talmidei chachamim advising on content across derush, halacha, machshava, chassidus, and Kabbalah.", color: "#1C3326", icon: BookOpen },
//   { title: "Editing, Hebrew & English", description: "Skilled editors polish manuscripts while preserving personal style and authenticity.", color: "#1B2740", icon: PenLine },
//   { title: "Typing, Hebrew & English", description: "Dedicated typists convert handwritten notes into distribution-ready manuscripts.", color: "#1C3326", icon: Keyboard },
//   { title: "Transcriptions", description: "Audio (family interviews, shiurim, lectures) transcribed in English, Hebrew, or Yiddish.", color: "#4A1521", icon: Mic },
//   { title: "Translations", description: "Between English, Hebrew, and Yiddish, reviewed for accuracy and style.", color: "#C08A1E", icon: Languages },
//   { title: "Graphics", description: "Custom covers, dedication pages, and flyers.", color: "#1B2740", icon: Circle },
//   { title: "Covers", description: "Hard/soft, foil-stamped, antique leather, and more.", color: "#4A2A1B", icon: BookMarked },
//   { title: "Printing & Binding", description: "Digital or offset, sewn/spiral/saddle-stitched binding options.", color: "#4A1521", icon: Printer },
//   { title: "Shipping & Distribution", description: "Strong distributor relationships for international reach.", color: "#1C3326", icon: Globe2 },
//   { title: "Fiction, Non-Fiction & Family Memorial Books", description: "Full-service research through final design.", color: "#1B2740", icon: Users, wide: true },
// ];

// export default function Services() {
//   return (
//     <section id="services" className="bg-[#FBF7EF] py-4 lg:py-[40px]">
//       <div className="mx-auto w-full max-w-[1200px] px-6">
//         <div className="mb-[60px] text-center">
//           <div className="mb-4 inline-flex items-center justify-center gap-[10px] font-body text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#9C7A1E]">
//             <span className="h-px w-5 bg-current opacity-60" />
//             Master Craftsmen
//             <span className="h-px w-5 bg-current opacity-60" />
//           </div>

//           <h2 className="mb-6 font-display text-[2.85rem] font-normal leading-tight text-[#4A1521]">
//             Our <em className="italic text-[#C08A1E]">Services</em>
//           </h2>

//           <p className="mx-auto max-w-[560px] font-display text-[1.05rem] italic leading-[1.6] text-[#6E5D57]">
//             A complete range of publishing services, tailored to your sefer.
//             <br />
//             From the first idea to the final printed volume, we are with you at every step.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 gap-[26px] sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((service, i) => {
//             const Icon = service.icon;
//             return (
//               <div
//                 key={service.title}
//                 style={{ borderTopColor: service.color }}
//                 className={`group relative flex min-w-0 flex-col border border-[#4A1521]/[0.13] border-t-2 bg-[#FAF4E6] px-7 pb-[30px] pt-[34px] transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[5px] hover:bg-[#FFFDF8] hover:shadow-[0_20px_34px_-18px_rgba(74,21,33,0.28)] ${service.wide ? "lg:col-span-2" : ""}`}
//               >
//                 <span className="pointer-events-none absolute left-[7px] top-[7px] h-[9px] w-[9px] border-l border-t border-[#4A1521]/40" />
//                 <span className="pointer-events-none absolute bottom-[7px] right-[7px] h-[9px] w-[9px] border-b border-r border-[#4A1521]/40" />
//                 <span className="absolute right-7 top-[34px] font-display text-[0.85rem] italic text-[#4A1521]/30">{String(i + 1).padStart(2, "0")}</span>

//                 <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#F3E6C8]">
//                   <Icon size={28} strokeWidth={1.3} className="text-[#8B5E2F] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08] group-hover:-rotate-2" />
//                 </span>

//                 <h3 className="mb-[11px] font-display text-[1.34rem] font-semibold leading-tight text-[#4A1521]">{service.title}</h3>
//                 <p className="mb-6 font-body text-[0.95rem] leading-[1.65] text-[#6E5D57]">{service.description}</p>

//                 <a href="#" className="mt-auto flex items-center gap-2 font-body text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#4A1521] transition-colors hover:text-[#9C7A1E]">
//                   <span className="h-px w-8 bg-[#C59B27]" />
//                   Learn More
//                   <ArrowRight size={13} strokeWidth={2} />
//                 </a>
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-14 flex items-center justify-center gap-4">
//           <span className="h-px w-10 bg-[#C59B27]/50" />
//           <p className="font-display text-[0.95rem] italic text-[#9C7A1E]">&ldquo;Great seforim build greater generations.&rdquo;</p>
//           <span className="h-px w-10 bg-[#C59B27]/50" />
//         </div>
//       </div>
//     </section>
//   );
// }

import { Layers3, BookOpen, PenLine, Keyboard, Mic, Languages, Circle, BookMarked, Printer, Globe2, Users, ArrowRight } from "lucide-react";

const themes = {
  maroon: { from: "#4A1521", to: "#2B0B12" },
  green: { from: "#1C3326", to: "#10201A" },
  navy: { from: "#1B2740", to: "#0F1729" },
};

const services = [
  { title: "Full Service", description: "Meticulous transcription, typesetting, and editing across every genre, fully customized layouts.", detail: "One dedicated team guiding your sefer from first draft to final print.", tags: ["Transcription", "Typesetting", "Editing"], theme: "maroon", icon: Layers3 },
  { title: "Content", description: "In-house talmidei chachamim advising on content across derush, halacha, machshava, chassidus, and Kabbalah.", detail: "Guidance on structure, sources, and clarity from experienced talmidei chachamim.", tags: ["Derush", "Halacha", "Machshava"], theme: "green", icon: BookOpen },
  { title: "Editing, Hebrew & English", description: "Skilled editors polish manuscripts while preserving personal style and authenticity.", detail: "Language, flow, and footnotes refined while your voice stays your own.", tags: ["Polish", "Proofread", "Style"], theme: "navy", icon: PenLine },
  { title: "Typing, Hebrew & English", description: "Dedicated typists convert handwritten notes into distribution-ready manuscripts.", detail: "Clean, accurate manuscripts from even the most difficult handwriting.", tags: ["Hebrew", "English", "Handwritten"], theme: "green", icon: Keyboard },
  { title: "Transcriptions", description: "Audio (family interviews, shiurim, lectures) transcribed in English, Hebrew, or Yiddish.", detail: "Every word captured faithfully, from recording to readable page.", tags: ["Interviews", "Shiurim", "Lectures"], theme: "maroon", icon: Mic },
  { title: "Translations", description: "Between English, Hebrew, and Yiddish, reviewed for accuracy and style.", detail: "Faithful to the source, natural in the language it is translated into.", tags: ["English", "Hebrew", "Yiddish"], theme: "navy", icon: Languages },
  { title: "Graphics", description: "Custom covers, dedication pages, and flyers.", detail: "Designs that reflect the character and spirit of your sefer.", tags: ["Covers", "Dedications", "Flyers"], theme: "navy", icon: Circle },
  { title: "Covers", description: "Hard/soft, foil-stamped, antique leather, and more.", detail: "Choose the finish that suits your sefer, from classic to luxurious.", tags: ["Hard", "Soft", "Foil-Stamped"], theme: "green", icon: BookMarked },
  { title: "Printing & Binding", description: "Digital or offset, sewn/spiral/saddle-stitched binding options.", detail: "Print runs of any size, bound to last for generations.", tags: ["Digital", "Offset", "Sewn"], theme: "maroon", icon: Printer },
  { title: "Shipping & Distribution", description: "Strong distributor relationships for international reach.", detail: "Your sefer, delivered to shops and homes around the world.", tags: ["Distributors", "International", "Delivery"], theme: "green", icon: Globe2 },
  { title: "Fiction, Non-Fiction & Family Memorial Books", description: "Full-service research through final design.", detail: "A complete journey from research and writing to design and print.", tags: ["Fiction", "Non-Fiction", "Memorial"], theme: "navy", icon: Users, wide: true },
] as const;

export default function Services() {
  return (
    <section id="services" className="bg-[#FBF7EF] py-4 lg:py-[40px]">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="mb-[60px] text-center">
          <div className="mb-4 inline-flex items-center justify-center gap-[10px] font-body text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#9C7A1E]">
            <span className="h-px w-5 bg-current opacity-60" />
            Master Craftsmen
            <span className="h-px w-5 bg-current opacity-60" />
          </div>

          <h2 className="mb-6 font-display text-[2.85rem] font-normal leading-tight text-[#4A1521]">
            Our <em className="italic text-[#C08A1E]">Services</em>
          </h2>

          <p className="mx-auto max-w-[560px] font-display text-[1.05rem] italic leading-[1.6] text-[#6E5D57]">
            A complete range of publishing services, tailored to your sefer.
            <br />
            From the first idea to the final printed volume, we are with you at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[26px] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            const theme = themes[service.theme];
            return (
              <div
                key={service.title}
                style={{ borderTopColor: theme.from }}
                className={`group relative flex min-w-0 flex-col overflow-hidden border border-[#4A1521]/[0.13] border-t-2 bg-[#FAF4E6] px-7 pb-[30px] pt-[34px] transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[5px] hover:shadow-[0_20px_34px_-18px_rgba(74,21,33,0.28)] ${"wide" in service ? "lg:col-span-2" : ""}`}
              >
                <div
                  aria-hidden="true"
                  style={{
                    backgroundImage: `repeating-linear-gradient(180deg, rgba(255,255,255,0.035) 0px 2px, transparent 2px 28px), linear-gradient(160deg, ${theme.from} 0%, ${theme.to} 100%)`,
                  }}
                  className="pointer-events-none absolute inset-0 [clip-path:inset(100%_0_0_0)] transition-[clip-path] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:[clip-path:inset(0_0_0_0)]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#E0BA53] via-[#C59B27] to-[#E0BA53] opacity-85" />
                </div>

                <span className="pointer-events-none absolute left-[7px] top-[7px] z-10 h-[9px] w-[9px] border-l border-t border-[#4A1521]/40 transition-colors duration-300 group-hover:border-[#E0BA53]/70" />
                <span className="pointer-events-none absolute bottom-[7px] right-[7px] z-10 h-[9px] w-[9px] border-b border-r border-[#4A1521]/40 transition-colors duration-300 group-hover:border-[#E0BA53]/70" />
                <span className="absolute right-7 top-[34px] z-10 font-display text-[0.85rem] italic text-[#4A1521]/30 transition-colors duration-300 group-hover:text-[#E0BA53]/60 group-hover:delay-200">{String(i + 1).padStart(2, "0")}</span>

                <div className="relative z-10 flex flex-1 flex-col">
                  <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#F3E6C8] transition-colors duration-300 group-hover:bg-[#E0BA53]/15 group-hover:delay-200">
                    <Icon size={28} strokeWidth={1.3} className="text-[#8B5E2F] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08] group-hover:-rotate-2 group-hover:text-[#E0BA53] group-hover:delay-200" />
                  </span>

                  <h3 className="mb-[11px] font-display text-[1.34rem] font-semibold leading-tight text-[#4A1521] transition-colors duration-300 group-hover:text-[#E0BA53] group-hover:delay-200">{service.title}</h3>
                  <p className="mb-6 font-body text-[0.95rem] leading-[1.65] text-[#6E5D57] transition-colors duration-300 group-hover:text-[#FBF7EF]/90 group-hover:delay-200">{service.description}</p>

                  <div className="mt-auto grid">
                    <div className="col-start-1 row-start-1 flex flex-wrap items-center gap-x-3 gap-y-1 self-end border-t border-[#4A1521]/10 pt-4 font-body text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#9C7A1E] transition-opacity duration-200 group-focus-within:opacity-0 group-hover:opacity-0 [@media(hover:none)]:hidden">
                      {service.tags.map((tag, t) => (
                        <span key={tag} className="flex items-center gap-3">
                          {t > 0 && <span className="h-[5px] w-[5px] rotate-45 bg-[#C59B27]" />}
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="col-start-1 row-start-1 translate-y-2 opacity-0 transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100">
                      <p className="mb-4 font-display text-[0.95rem] italic leading-[1.5] text-[#9C7A1E] transition-colors duration-300 group-hover:text-[#E0BA53] group-hover:delay-200">{service.detail}</p>

                      <a href="#" className="flex items-center gap-2 font-body text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#4A1521] transition-colors duration-300 hover:!text-[#E0BA53] group-hover:text-[#FBF7EF] group-hover:delay-200">
                        <span className="h-px w-8 bg-[#C59B27]" />
                        Learn More
                        <ArrowRight size={13} strokeWidth={2} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-[#C59B27]/50" />
          <p className="font-display text-[0.95rem] italic text-[#9C7A1E]">&ldquo;Great seforim build greater generations.&rdquo;</p>
          <span className="h-px w-10 bg-[#C59B27]/50" />
        </div>
      </div>
    </section>
  );
}