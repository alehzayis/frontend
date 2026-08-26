import Image from "next/image";

const services = [
  {
    title: "Full Service",
    desc: "Meticulous transcription, typesetting, and editing across every genre, fully customized layouts.",
    accent: "#4A1521",
    image: "/images/services/full-service.jpg",
  },
  {
    title: "Content",
    desc: "In-house talmidei chachamim advising on content across derush, halacha, machshava, chassidus, and Kabbalah.",
    accent: "#1C3326",
    image: "/assets/content.png",
  },
  {
    title: "Editing, Hebrew & English",
    desc: "Skilled editors polish manuscripts while preserving personal style.",
    accent: "#1B2740",
    image: "/images/services/editing.jpg",
  },
  {
    title: "Typing, Hebrew & English",
    desc: "Dedicated typists convert handwritten notes into distribution-ready manuscripts.",
    accent: "#4A2A1B",
    image: "/images/services/typing.jpg",
  },
  {
    title: "Transcriptions",
    desc: "Audio (family interviews, shiurim, lectures) transcribed in English, Hebrew, or Yiddish.",
    accent: "#4A1521",
    image: "/images/services/transcriptions.jpg",
  },
  {
    title: "Translations",
    desc: "Between English, Hebrew, and Yiddish, reviewed for accuracy and style.",
    accent: "#1C3326",
    image: "/images/services/translations.jpg",
  },
  {
    title: "Graphics",
    desc: "Custom covers, dedication pages, and flyers.",
    accent: "#1B2740",
    image: "/images/services/graphics.jpg",
  },
  {
    title: "Covers",
    desc: "Hard/soft, foil-stamped, antique leather, and more.",
    accent: "#4A2A1B",
    image: "/images/services/covers.jpg",
  },
  {
    title: "Printing & Binding",
    desc: "Digital or offset, sewn/spiral/saddle-stitched binding options.",
    accent: "#4A1521",
    image: "/images/services/printing.jpg",
  },
  {
    title: "Shipping & Distribution",
    desc: "Strong distributor relationships for international reach.",
    accent: "#1C3326",
    image: "/images/services/shipping.jpg",
  },
  {
    title: "Fiction, Non-Fiction & Family Memorial Books",
    desc: "Full-service research through final design.",
    accent: "#1B2740",
    image: "/images/services/family-books.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-[108px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center justify-center gap-2.5 font-body text-xs font-semibold uppercase tracking-[0.24em] text-[#9C7A1E]">
            <span className="h-px w-5 bg-current opacity-60" />
            Master Craftsmen
          </span>

          <h2 className="font-display text-[2.85rem] font-normal text-[#4A1521]">Our Services</h2>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-[50px] bg-gradient-to-r from-transparent via-[#C59B27] to-transparent" />
            <svg className="h-[13px] w-[13px] fill-[#C59B27]" viewBox="0 0 24 24">
              <polygon points="12,2 15,9 22,12 15,15 12,22 9,15 2,12 9,9" />
            </svg>
            <span className="h-px w-[50px] bg-gradient-to-r from-transparent via-[#C59B27] to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative h-[320px] overflow-hidden border border-[#4A1521]/[0.13] shadow-[0_10px_24px_-16px_rgba(74,21,33,0.3)] ${
                i === services.length - 1 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="absolute inset-0 transition-transform duration-[650ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-full">
                <Image src={s.image} alt={s.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-xl font-semibold text-[#F7E9C2]">{s.title}</h3>
                </div>
              </div>

              <div
                style={{ backgroundColor: s.accent }}
                className="absolute inset-0 flex translate-y-full flex-col justify-center p-8 transition-transform duration-[650ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0"
              >
                <h3 className="mb-3 font-display text-xl font-semibold text-[#F7E9C2]">{s.title}</h3>
                <div className="mb-4 h-[3px] w-8 bg-[#C59B27]" />
                <p className="font-body text-[0.95rem] leading-[1.65] text-white/85">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}