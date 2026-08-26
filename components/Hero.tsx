"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Keyboard,
  ScrollText,
  Mic,
  PenLine,
  Users,
  Printer,
  Globe2,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const slides = [
  {
    title: "Typing",
    caption:
      "Turning handwritten pages into a clear, carefully typed file, ready for editing.",
    icon: Keyboard,
    image: "/assets/typing.png",
  },
  {
    title: "Manuscripts",
    caption:
      "Deciphering and preparing old kisvei yad and writings of gedolim for publication.",
    icon: ScrollText,
    image: "/assets/manuscripts.png",
  },
  {
    title: "Transcribing",
    caption:
      "Turning recordings into accurate text while preserving the speaker's original voice.",
    icon: Mic,
    image: "/assets/transcribing.png",
  },
  {
    title: "Editing",
    caption:
      "Working through the document line by line, refining the mechaber's language and intent.",
    icon: PenLine,
    image: "/assets/editing.png",
  },
  {
    title: "Consultations",
    caption:
      "Guiding mechabrim through decisions involving content, layout, printing, and more.",
    icon: Users,
    image: "/assets/consultations.png",
  },
  {
    title: "Printing",
    caption:
      "Overseeing every stage of the printing process, ensuring the highest quality sefer.",
    icon: Printer,
    image: "/assets/printing.png",
  },
  {
    title: "Distribution",
    caption:
      "Bringing finished seforim to stores, batei medrash, and the hands of lomdim worldwide.",
    icon: Globe2,
    image: "/assets/distribution.png",
  },
  {
    title: "Contact",
    caption:
      "Have a project in mind? Speak with us about bringing it to life.",
    icon: Mail,
    image: "/assets/contact.png",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[active];
  const Icon = slide.icon;

  return (
    <section className="relative overflow-hidden bg-[#FBF7EF] px-6 py-20 md:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
        {/* Left Content */}
        <div>
          <span className="mb-5 inline-block font-body text-[0.8rem] uppercase tracking-[0.25em] text-[#C59B27]">
            Machon Aleh Zayis
          </span>

          <h1 className="mb-6 font-display text-[2.75rem] leading-[1.1] text-[#241A1D] md:text-[3.5rem]">
            Bringing Your Torah Manuscript to Print
          </h1>

          <div className="mb-8 h-[2px] w-[70px] bg-[#C59B27]" />

          <p className="mb-10 max-w-[480px] font-body text-[1.1rem] leading-[1.7] text-[#6E5D57]">
            From the first handwritten page to the finished sefer on the
            shelf, we walk with you through every stage of typing, editing,
            and publication.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/submit"
              className="rounded-sm bg-[#4A1521] px-8 py-4 font-body text-[0.95rem] uppercase tracking-[0.1em] text-[#FBF7EF] transition-colors duration-300 hover:bg-[#2B0B12]"
            >
              Start Your Project
            </a>

            <a
              href="/services"
              className="rounded-sm border border-[#4A1521] px-8 py-4 font-body text-[0.95rem] uppercase tracking-[0.1em] text-[#4A1521] transition-colors duration-300 hover:bg-[#4A1521] hover:text-[#FBF7EF]"
            >
              Our Services
            </a>
          </div>

          <p className="mt-8 font-body text-[0.85rem] text-[#8B7C74]">
            Trusted by authors, publishers, and batei medrash worldwide.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="relative rounded-sm border border-[#C59B27]/30 bg-[#FBF7EF] p-3">
            <div className="group relative h-[380px] w-full overflow-hidden rounded-sm bg-[#320C14] md:h-[460px]">
              <Image
                key={active}
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={active === 0}
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B060B]/90 via-[#1B060B]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Decorative Border */}
              <div className="pointer-events-none absolute inset-0 border border-[#C59B27]/20" />

              <div className="pointer-events-none absolute left-6 top-6 h-10 w-10 border-l border-t border-[#C59B27]/40" />

              <div className="pointer-events-none absolute bottom-6 right-6 h-10 w-10 border-b border-r border-[#C59B27]/40" />

              {/* Slide Content */}
              <div className="invisible absolute inset-x-0 bottom-0 translate-y-full opacity-0 transition-all duration-500 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div
                  key={`content-${active}`}
                  className="px-8 pb-8 pt-14"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#C59B27]/50 bg-[#4A1521]/60">
                    <Icon className="h-5 w-5 text-[#E0BA53]" />
                  </div>

                  <span className="mb-2 block font-body text-[0.75rem] uppercase tracking-[0.2em] text-[#E0BA53]">
                    Machon Aleh Zayis
                  </span>

                  <h2 className="mb-3 font-display text-[1.8rem] leading-tight text-[#FBF7EF]">
                    {slide.title}
                  </h2>

                  <p className="font-body text-[0.9rem] leading-[1.6] text-[#F3ECDC]/90">
                    {slide.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="mt-6 flex items-center justify-between">
            <span className="font-body text-[0.85rem] tracking-[0.1em] text-[#8B7C74]">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </span>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#4A1521]/30 text-[#4A1521] transition-colors duration-300 hover:bg-[#4A1521] hover:text-[#FBF7EF]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#4A1521]/30 text-[#4A1521] transition-colors duration-300 hover:bg-[#4A1521] hover:text-[#FBF7EF]"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}