"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookMarked,
  BookOpen,
  Image as ImageIcon,
  Languages,
  Lightbulb,
  Mic,
  PenLine,
  Printer,
  Quote,
  Sparkles,
  Target,
  Truck,
  Type,
} from "lucide-react";

const MISSION = [
  {
    label: "We Believe",
    icon: BookOpen,
    text: "Bnei Torah should have the opportunity to disseminate their work with pride and precision.",
  },
  {
    label: "We Strive",
    icon: Target,
    text: "To complement high-caliber Torah writing with gold-standard production.",
  },
  {
    label: "We Deliver",
    icon: Award,
    text: "An all-encompassing experience of professionalism and dedication.",
  },
];

const JOURNEY = [
  { year: "2010", title: "Founded", text: "Machon Aleh Zayis opens its doors, transcribing and typesetting seforim for local mechaberim." },
  { year: "2014", title: "First Multi-Volume Set", text: "Our editing and design team takes on its first multi-volume sefer, cover to cover." },
  { year: "2017", title: "English Department", text: "A dedicated English editing and translation team joins, opening our doors to English seforim and memoirs." },
  { year: "2020", title: "In-House Bindery", text: "Printing, binding and cover work move in-house, end to end under one roof." },
  { year: "2024", title: "100+ Seforim", text: "We reach our 100th published sefer, with copies on shelves around the world." },
];

const TEAM = [
  { name: "Team Member", role: "Founder & Sofer" },
  { name: "Team Member", role: "Head Editor" },
  { name: "Team Member", role: "Typesetting Lead" },
  { name: "Team Member", role: "Design & Print" },
  { name: "Team Member", role: "Translations" },
  { name: "Team Member", role: "Client Relations" },
];

const CAPABILITIES = [
  { title: "Full Service", icon: BookOpen, text: "Meticulous transcription, typesetting and editing across every genre, with layouts customized to your sefer." },
  { title: "Content", icon: Lightbulb, text: "In-house guidance on lomdus, derush, halacha, machshava, chassidus and kabbalah." },
  { title: "Editing", icon: PenLine, text: "Skilled editors in Hebrew and English, turning a manuscript into an easy-to-read, well-written final product." },
  { title: "Typing", icon: Type, text: "Handwritten pages converted into accurately typed, ready-to-edit manuscripts." },
  { title: "Transcriptions", icon: Mic, text: "Audio transcription in English, Hebrew and Yiddish." },
  { title: "Translations", icon: Languages, text: "Translation between languages that keeps your accuracy and your voice intact." },
  { title: "Graphics", icon: ImageIcon, text: "Custom cover design, dedication pages and flyers." },
  { title: "Covers", icon: BookMarked, text: "Foil-stamped, leather and printed cover options." },
  { title: "Printing & Binding", icon: Printer, text: "Digital and offset printing with a range of binding options." },
  { title: "Shipping & Distribution", icon: Truck, text: "Help getting your finished seforim wherever they need to go, worldwide." },
  { title: "Specialty Books", icon: Sparkles, text: "Fiction, non-fiction and family memorial books, given the same care as any sefer." },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function JourneyTimeline() {
  return (
    <div className="relative">
      <span className="absolute left-0 right-0 top-[9px] hidden h-px bg-[#4A1521]/15 sm:block" />

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-5 sm:gap-4">
        {JOURNEY.map((step, i) => (
          <Reveal key={step.year} delay={i * 110}>
            <div className="relative flex gap-4 sm:block sm:gap-0">
              <div className="relative z-10 flex h-[19px] w-[19px] shrink-0 items-center justify-center sm:mx-auto">
                <span className="absolute h-[19px] w-[19px] rounded-full bg-[#C59B27]/20" />
                <span className="h-[9px] w-[9px] rounded-full bg-[#C59B27]" />
              </div>

              <div className="sm:mt-4 sm:text-center">
                <div className="font-display text-xl text-[#3A101A]">{step.year}</div>
                <div className="mt-1 font-body text-[0.82rem] font-semibold text-[#8B6816]">{step.title}</div>
                <p className="mt-1.5 font-body text-[0.8rem] leading-relaxed text-[#66575A] sm:mx-auto sm:max-w-[180px]">
                  {step.text}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function TeamCard({ name, role, delay }: { name: string; role: string; delay: number }) {
  const initial = role.trim().charAt(0).toUpperCase();

  return (
    <Reveal delay={delay}>
      <div className="group text-center">
        <div className="relative mx-auto aspect-square w-full max-w-[190px] overflow-hidden rounded-sm border border-[#4A1521]/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_16px_32px_rgba(58,16,26,0.12)]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 25%, rgba(197,155,39,0.16), transparent 60%), linear-gradient(160deg, #F3E7C9, #E4D3A7)",
            }}
          />
          <div className="absolute inset-3 border border-[#C59B27]/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C59B27]/50 bg-[#3A101A]/5 font-display text-xl text-[#8B6816]">
              {initial}
            </span>
          </div>
        </div>

        <div className="mt-4 font-display text-lg text-[#3A101A]">{name}</div>
        <div className="mt-0.5 font-body text-[0.8rem] text-[#8B7B7E]">{role}</div>
      </div>
    </Reveal>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-[#F8F3EA]">
      <section className="mx-auto max-w-3xl px-6 pb-16 pt-24 text-center lg:px-10">
        <Reveal>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#C59B27]" />
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#8B6816]">
              About Us
            </span>
            <span className="h-px w-10 bg-[#C59B27]" />
          </div>

          <div dir="rtl" className="mt-5 font-body text-sm text-[#4A1521]/60">
            הוצאה לאור מרישא עד גמירא
          </div>

          <h1 className="mt-6 font-display text-5xl leading-[1.15] text-[#3A101A] sm:text-6xl">
            Every Sefer,
            <br />
            <span className="italic text-[#C59B27]">A Legacy.</span>
          </h1>

          <div className="mx-auto mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#C59B27]/50" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#C59B27]" />
            <span className="h-px w-16 bg-[#C59B27]/50" />
          </div>

          <p className="mx-auto mt-7 max-w-xl font-body text-lg italic leading-relaxed text-[#4A1521]">
            Every sefer that comes through our doors carries someone's life's work. We publish it like it's our own
            family's simcha.
          </p>

          <p className="mx-auto mt-5 max-w-2xl font-body text-[0.95rem] leading-relaxed text-[#66575A]">
            Machon Aleh Zayis is a complete publishing house for today's Torah community — transcription,
            typesetting, editing, translation, graphics, printing and binding, all under one roof, in Hebrew,
            English and Yiddish.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-sm bg-[#3A101A] px-7 py-3.5 font-body text-sm font-semibold uppercase tracking-[0.05em] text-[#F7E9C2] transition-colors hover:bg-[#4A1521]"
            >
              Request Quote
              <ArrowRight size={16} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-sm border border-[#4A1521]/15 bg-white px-7 py-3.5 font-body text-sm font-semibold uppercase tracking-[0.05em] text-[#3A101A] transition-colors hover:border-[#4A1521]/30"
            >
              Our Services
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {["Hebrew · English · Yiddish", "Transcription to Bound Copy", "Worldwide Shipping"].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-[#4A1521]/10 bg-white px-4 py-1.5 font-body text-[0.75rem] text-[#3A101A]"
              >
                {badge}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 pb-4 lg:px-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {MISSION.map((item, i) => (
            <Reveal key={item.label} delay={i * 120}>
              <div className="group h-full rounded-sm border border-[#4A1521]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(58,16,26,0.08)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#C59B27]/10 text-[#8B6816] transition-colors group-hover:bg-[#3A101A] group-hover:text-[#F7E9C2]">
                  <item.icon size={19} strokeWidth={1.7} />
                </span>
                <div className="mt-5 font-display text-xl text-[#3A101A]">{item.label}</div>
                <p className="mt-2 font-body text-[0.9rem] leading-relaxed text-[#66575A]">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-[#8B6816]">
            Our Journey
          </span>
          <h2 className="mt-3 font-display text-3xl text-[#3A101A] sm:text-4xl">From one manuscript to a legacy.</h2>
        </Reveal>

        <div className="mt-16">
          <JourneyTimeline />
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-[#8B6816]">
              What We Do
            </span>
            <h2 className="mt-3 font-display text-3xl text-[#3A101A] sm:text-4xl">Every step, in house.</h2>
            <p className="mt-3 font-body text-[0.95rem] text-[#66575A]">
              From a handwritten draft to a bound sefer on the shelf.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap.title} delay={(i % 3) * 100}>
                <div className="group h-full rounded-sm border border-[#4A1521]/10 bg-[#F8F3EA] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C59B27]/40 hover:shadow-[0_16px_32px_rgba(58,16,26,0.08)]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#8B6816] transition-colors group-hover:bg-[#C59B27]/15">
                    <cap.icon size={17} strokeWidth={1.7} />
                  </span>
                  <div className="mt-4 font-display text-lg text-[#3A101A]">{cap.title}</div>
                  <p className="mt-1.5 font-body text-[0.85rem] leading-relaxed text-[#66575A]">{cap.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-[#8B6816]">
            Meet the Team
          </span>
          <h2 className="mt-3 font-display text-3xl text-[#3A101A] sm:text-4xl">The people behind the pages.</h2>
          <p className="mt-3 font-body text-[0.95rem] text-[#66575A]">
            Editors, typesetters and printers who treat your sefer like their own.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          {TEAM.map((member, i) => (
            <TeamCard key={member.role} name={member.name} role={member.role} delay={(i % 6) * 90} />
          ))}
        </div>
      </section>

      <section className="bg-[#3A101A] px-6 py-24 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Quote size={30} strokeWidth={1.6} className="mx-auto text-[#C59B27]" />
          <p className="mt-6 font-display text-2xl italic leading-relaxed text-[#F7E9C2] sm:text-3xl">
            "Each person who sees the finished work Aleh Zayis did for me describes it the same —{" "}
            <span className="text-[#C59B27]">it's a masterpiece!</span>"
          </p>
          <div className="mt-6 font-body text-sm uppercase tracking-[0.1em] text-[#D6C6C2]">
            Zvi Solomon <span className="text-[#8B7B7E]">· Author</span>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-24 text-center lg:px-10">
        <Reveal>
          <h2 className="font-display text-3xl text-[#3A101A] sm:text-4xl">Have a manuscript waiting?</h2>
          <p className="mx-auto mt-3 max-w-md font-body text-[0.95rem] text-[#66575A]">
            Tell us about your sefer and we'll put together a quote.
          </p>

          <span className="mx-auto mt-6 block h-px w-16 bg-[#C59B27]" />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-sm bg-[#3A101A] px-7 py-3.5 font-body text-sm font-semibold uppercase tracking-[0.05em] text-[#F7E9C2] transition-colors hover:bg-[#4A1521]"
            >
              Request Quote
              <ArrowRight size={16} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-sm border border-[#4A1521]/15 bg-white px-7 py-3.5 font-body text-sm font-semibold uppercase tracking-[0.05em] text-[#3A101A] transition-colors hover:border-[#4A1521]/30"
            >
              Contact Us
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}