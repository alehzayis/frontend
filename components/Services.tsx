"use client";

import {
  Layers3,
  BookOpen,
  PenLine,
  Keyboard,
  Mic,
  Languages,
  Circle,
  BookMarked,
  Printer,
  Globe2,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Full Service",
    description:
      "Meticulous transcription, typesetting, and editing across every genre, fully customized layouts.",
    icon: Layers3,
    color: "#4A1521",
  },
  {
    title: "Content",
    description:
      "In-house talmidei chachamim advising on content across derush, halacha, machshava, chassidus, and Kabbalah.",
    icon: BookOpen,
    color: "#1C3326",
  },
  {
    title: "Editing, Hebrew & English",
    description:
      "Skilled editors polish manuscripts while preserving personal style.",
    icon: PenLine,
    color: "#1B2740",
  },
  {
    title: "Typing, Hebrew & English",
    description:
      "Dedicated typists convert handwritten notes into distribution-ready manuscripts.",
    icon: Keyboard,
    color: "#4A2A1B",
  },
  {
    title: "Transcriptions",
    description:
      "Audio (family interviews, shiurim, lectures) transcribed in English, Hebrew, or Yiddish.",
    icon: Mic,
    color: "#4A1521",
  },
  {
    title: "Translations",
    description:
      "Between English, Hebrew, and Yiddish, reviewed for accuracy and style.",
    icon: Languages,
    color: "#1C3326",
  },
  {
    title: "Graphics",
    description:
      "Custom covers, dedication pages, and flyers.",
    icon: Circle,
    color: "#1B2740",
  },
  {
    title: "Covers",
    description:
      "Hard/soft, foil-stamped, antique leather, and more.",
    icon: BookMarked,
    color: "#4A2A1B",
  },
  {
    title: "Printing & Binding",
    description:
      "Digital or offset, sewn/spiral/saddle-stitched binding options.",
    icon: Printer,
    color: "#4A1521",
  },
  {
    title: "Shipping & Distribution",
    description:
      "Strong distributor relationships for international reach.",
    icon: Globe2,
    color: "#1C3326",
  },
  {
    title: "Fiction, Non-Fiction & Family Memorial Books",
    description:
      "Full-service research through final design.",
    icon: Users,
    color: "#1B2740",
    wide: true,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBF7EF]">
      <section
        id="services"
        className="py-[108px] max-[640px]:py-16"
      >
        <div className="mx-auto w-full max-w-[1200px] px-6">

          {/* ================= HEADER ================= */}
          <div className="mb-[60px] text-center">

            {/* Eyebrow */}
            <div className="mb-4 inline-flex items-center justify-center gap-[10px] font-[var(--font-spectral)] text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#9C7A1E]">
              <span className="h-px w-5 bg-current opacity-60" />

              <span>Master Craftsmen</span>

              <span className="h-px w-5 bg-current opacity-60" />
            </div>

            {/* Heading */}
            <h2 className="font-[var(--font-cormorant)] text-[2.85rem] font-normal leading-tight text-[#4A1521] max-[640px]:text-[2.35rem]">
              Our Services
            </h2>

            {/* Ornament */}
            <div className="my-7 flex items-center justify-center gap-3">
              <span className="h-px w-[50px] bg-gradient-to-r from-transparent via-[#C59B27] to-transparent" />

              <svg
                viewBox="0 0 24 24"
                className="h-[13px] w-[13px] fill-[#C59B27]"
              >
                <polygon points="12,2 15,9 22,12 15,15 12,22 9,15 2,12 9,9" />
              </svg>

              <span className="h-px w-[50px] bg-gradient-to-r from-transparent via-[#C59B27] to-transparent" />
            </div>
          </div>

          {/* ================= SERVICES ================= */}
          <div className="grid grid-cols-3 gap-[26px] max-[992px]:grid-cols-2 max-[640px]:grid-cols-1">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className={`
                    group
                    relative
                    flex
                    min-w-0
                    flex-col
                    border
                    border-[rgba(74,21,33,0.13)]
                    border-t-[3px]
                    bg-[#FAF4E6]
                    px-7
                    pb-[30px]
                    pt-[34px]
                    transition-all
                    duration-[350ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    hover:-translate-y-[5px]
                    hover:bg-[#FFFDF8]
                    hover:shadow-[0_20px_34px_-18px_rgba(74,21,33,0.28)]
                    ${
                      service.wide
                        ? "col-span-2 max-[992px]:col-span-1"
                        : ""
                    }
                  `}
                  style={{
                    borderTopColor: service.color,
                  }}
                >

                  {/* Top-left corner decoration */}
                  <span
                    className="pointer-events-none absolute left-[7px] top-[7px] h-[9px] w-[9px] border-l border-t opacity-85"
                    style={{
                      borderColor: service.color,
                    }}
                  />

                  {/* Bottom-right corner decoration */}
                  <span
                    className="pointer-events-none absolute bottom-[7px] right-[7px] h-[9px] w-[9px] border-b border-r opacity-85"
                    style={{
                      borderColor: service.color,
                    }}
                  />

                  {/* Icon */}
                  <Icon
                    size={36}
                    strokeWidth={1.25}
                    className="
                      mb-5
                      transition-transform
                      duration-300
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:scale-[1.08]
                      group-hover:-rotate-2
                    "
                    style={{
                      color: service.color,
                    }}
                  />

                  {/* Title */}
                  <h3 className="mb-[11px] font-[var(--font-cormorant)] text-[1.34rem] font-semibold leading-tight text-[#4A1521]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-[var(--font-spectral)] text-[0.95rem] leading-[1.65] text-[#6E5D57]">
                    {service.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>
    </main>
  );
}

