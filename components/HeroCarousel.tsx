"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Feather,
  Languages,
  Printer,
} from "lucide-react";

const slides = [
  {
    number: "01",
    title: "Complete Publishing",
    description:
      "From manuscript preparation to final production, every stage handled with precision and care.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Scholarly Editorial",
    description:
      "Meticulous review and scholarly refinement by our in-house talmidei chachamim.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Hebrew & English",
    description:
      "Expert editing, typing, and translation across Hebrew, English, and Yiddish.",
    icon: Languages,
  },
  {
    number: "04",
    title: "Design & Typesetting",
    description:
      "Thoughtful typography, custom layouts, covers, and visual presentation for every sefer.",
    icon: Feather,
  },
  {
    number: "05",
    title: "Printing & Binding",
    description:
      "From digital and offset printing to refined binding, we bring your manuscript to life.",
    icon: Printer,
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(1);

  const slide = slides[active];
  const Icon = slide.icon;

  const previous = () => {
    setActive((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  const next = () => {
    setActive((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="w-full">
      {/* =========================================================
          OUTER EDITORIAL FRAME
      ========================================================= */}
      <div
        className="
          relative
          border
          border-[#D7B65C]
          bg-[#F8F3E9]
          p-[16px]
          shadow-[0_18px_45px_-28px_rgba(43,11,18,0.42)]
          sm:p-[20px]
          lg:p-[25px]
        "
      >
        {/* Top-left corner */}
        <span
          className="
            absolute
            left-[8px]
            top-[8px]
            h-[10px]
            w-[10px]
            border-l
            border-t
            border-[#C59B27]
          "
        />

        {/* Bottom-right corner */}
        <span
          className="
            absolute
            bottom-[8px]
            right-[8px]
            h-[10px]
            w-[10px]
            border-b
            border-r
            border-[#C59B27]
          "
        />

        {/* =======================================================
            MAIN BURGUNDY PANEL
        ======================================================= */}
        <div
          className="
            relative
            flex
            min-h-[300px]
            items-center
            justify-center
            overflow-hidden
            bg-[#410F1C]
            px-6
            py-12
            sm:min-h-[340px]
            sm:px-10
            lg:min-h-[388px]
          "
        >
          {/* Subtle inner glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              bg-[radial-gradient(ellipse_500px_280px_at_50%_40%,rgba(197,155,39,0.10),transparent_65%)]
              opacity-30
            "
          />

          {/* Top decorative line */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-8
              right-8
              top-5
              h-px
              bg-gradient-to-r
              from-transparent
              via-[rgba(224,186,83,0.28)]
              to-transparent
            "
          />

          {/* Bottom decorative line */}
          <div
            aria-hidden="true"
            className="
              absolute
              bottom-5
              left-8
              right-8
              h-px
              bg-gradient-to-r
              from-transparent
              via-[rgba(224,186,83,0.18)]
              to-transparent
            "
          />

          {/* =====================================================
              CONTENT
          ===================================================== */}
          <div
            key={active}
            className="
              relative
              z-10
              flex
              max-w-[440px]
              flex-col
              items-center
              text-center
            "
          >
            {/* Icon */}
            <div
              className="
                mb-7
                flex
                h-[48px]
                w-[48px]
                items-center
                justify-center
                text-[#E0D5C8]
              "
            >
              <Icon
                size={43}
                strokeWidth={1.25}
              />
            </div>

            {/* Title */}
            <h2
              className="
                font-display
                text-[1.65rem]
                font-normal
                tracking-[0.02em]
                text-[#D0A63A]
                sm:text-[1.85rem]
                lg:text-[1.9rem]
              "
            >
              {slide.number}. {slide.title}
            </h2>
          </div>
        </div>

        {/* =======================================================
            DESCRIPTION
        ======================================================= */}
        <div
          key={`description-${active}`}
          className="
            flex
            min-h-[94px]
            items-center
            justify-center
            px-4
            py-5
            text-center
            sm:px-8
          "
        >
          <p
            className="
              max-w-[520px]
              font-display
              text-[1rem]
              font-normal
              italic
              leading-[1.55]
              text-[#705F59]
              sm:text-[1.05rem]
              lg:text-[1.08rem]
            "
          >
            {slide.description}
          </p>
        </div>

        {/* =======================================================
            DIVIDER
        ======================================================= */}
        <div className="h-px w-full bg-[rgba(74,21,33,0.14)]" />

        {/* =======================================================
            CAROUSEL CONTROLS
        ======================================================= */}
        <div
          className="
            flex
            items-center
            justify-between
            gap-4
            pt-4
            sm:pt-[15px]
          "
        >
          {/* Pagination */}
          <div
            className="
              font-body
              text-[0.75rem]
              uppercase
              tracking-[0.16em]
              text-[#241A1D]
            "
          >
            <span className="text-[#4A1521]">
              {String(active + 1).padStart(2, "0")}
            </span>

            <span className="mx-2 text-[#C59B27]">
              /
            </span>

            <span className="text-[#241A1D]">
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-[9px]">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous slide"
              className="
                flex
                h-[40px]
                w-[40px]
                items-center
                justify-center
                rounded-[2px]
                border
                border-[rgba(74,21,33,0.14)]
                bg-transparent
                text-[#4A1521]
                transition-all
                duration-200
                hover:border-[#4A1521]
                hover:bg-[rgba(74,21,33,0.04)]
              "
            >
              <ArrowLeft
                size={17}
                strokeWidth={1.25}
              />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="
                flex
                h-[40px]
                w-[40px]
                items-center
                justify-center
                rounded-[2px]
                border
                border-[rgba(74,21,33,0.14)]
                bg-transparent
                text-[#4A1521]
                transition-all
                duration-200
                hover:border-[#4A1521]
                hover:bg-[rgba(74,21,33,0.04)]
              "
            >
              <ArrowRight
                size={17}
                strokeWidth={1.25}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}