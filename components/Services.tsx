import { Layers3, BookOpen, PenLine, Keyboard, Mic, Languages, Circle, BookMarked, Printer, Globe2, Users, ArrowRight } from "lucide-react";

const services = [
  { title: "Full Service", description: "Meticulous transcription, typesetting, and editing across every genre, fully customized layouts.", color: "#4A1521", icon: Layers3 },
  { title: "Content", description: "In-house talmidei chachamim advising on content across derush, halacha, machshava, chassidus, and Kabbalah.", color: "#1C3326", icon: BookOpen },
  { title: "Editing, Hebrew & English", description: "Skilled editors polish manuscripts while preserving personal style and authenticity.", color: "#1B2740", icon: PenLine },
  { title: "Typing, Hebrew & English", description: "Dedicated typists convert handwritten notes into distribution-ready manuscripts.", color: "#1C3326", icon: Keyboard },
  { title: "Transcriptions", description: "Audio (family interviews, shiurim, lectures) transcribed in English, Hebrew, or Yiddish.", color: "#4A1521", icon: Mic },
  { title: "Translations", description: "Between English, Hebrew, and Yiddish, reviewed for accuracy and style.", color: "#C08A1E", icon: Languages },
  { title: "Graphics", description: "Custom covers, dedication pages, and flyers.", color: "#1B2740", icon: Circle },
  { title: "Covers", description: "Hard/soft, foil-stamped, antique leather, and more.", color: "#4A2A1B", icon: BookMarked },
  { title: "Printing & Binding", description: "Digital or offset, sewn/spiral/saddle-stitched binding options.", color: "#4A1521", icon: Printer },
  { title: "Shipping & Distribution", description: "Strong distributor relationships for international reach.", color: "#1C3326", icon: Globe2 },
  { title: "Fiction, Non-Fiction & Family Memorial Books", description: "Full-service research through final design.", color: "#1B2740", icon: Users, wide: true },
];

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
            return (
              <div
                key={service.title}
                style={{ borderTopColor: service.color }}
                className={`group relative flex min-w-0 flex-col border border-[#4A1521]/[0.13] border-t-2 bg-[#FAF4E6] px-7 pb-[30px] pt-[34px] transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[5px] hover:bg-[#FFFDF8] hover:shadow-[0_20px_34px_-18px_rgba(74,21,33,0.28)] ${service.wide ? "lg:col-span-2" : ""}`}
              >
                <span className="pointer-events-none absolute left-[7px] top-[7px] h-[9px] w-[9px] border-l border-t border-[#4A1521]/40" />
                <span className="pointer-events-none absolute bottom-[7px] right-[7px] h-[9px] w-[9px] border-b border-r border-[#4A1521]/40" />
                <span className="absolute right-7 top-[34px] font-display text-[0.85rem] italic text-[#4A1521]/30">{String(i + 1).padStart(2, "0")}</span>

                <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#F3E6C8]">
                  <Icon size={28} strokeWidth={1.3} className="text-[#8B5E2F] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08] group-hover:-rotate-2" />
                </span>

                <h3 className="mb-[11px] font-display text-[1.34rem] font-semibold leading-tight text-[#4A1521]">{service.title}</h3>
                <p className="mb-6 font-body text-[0.95rem] leading-[1.65] text-[#6E5D57]">{service.description}</p>

                <a href="#" className="mt-auto flex items-center gap-2 font-body text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#4A1521] transition-colors hover:text-[#9C7A1E]">
                  <span className="h-px w-8 bg-[#C59B27]" />
                  Learn More
                  <ArrowRight size={13} strokeWidth={2} />
                </a>
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