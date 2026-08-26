"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Globe2,
  Layers3,
  PenLine,
} from "lucide-react";

const slides = [
  {
    title: "I. The Manuscript",
    caption: "From handwritten notes and early drafts...",
    icon: PenLine,
  },
  {
    title: "II. Scholarly Editorial",
    caption:
      "Meticulous review and scholarly refinement by our in-house talmidei chachamim.",
    icon: BookOpen,
  },
  {
    title: "III. Gilding & Binding",
    caption:
      "Precision crafting — custom typography, foil stamping, and archival binding.",
    icon: Layers3,
  },
  {
    title: "IV. The Masterpiece",
    caption:
      "A finished masterpiece, built to endure for generations.",
    icon: BookOpen,
  },
  {
    title: "V. Dissemination",
    caption:
      "Brought to life and shared with the global Torah community.",
    icon: Globe2,
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[active];
  const Icon = slide.icon;

  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-[#F8F3EA]
        pb-[90px]
        pt-[72px]
        sm:pb-[105px]
        sm:pt-[82px]
        lg:pb-[115px]
        lg:pt-[88px]
      "
    >
      {/* Very subtle background structure */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[-180px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#4A1521]/[0.035]
          blur-[2px]
        "
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1240px]
          px-6
          sm:px-8
          lg:px-10
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-[52px]
            lg:grid-cols-[1.02fr_0.98fr]
            lg:gap-[70px]
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div
            className="
              relative
              z-10
              text-center
              lg:text-left
            "
          >
            {/* Eyebrow */}
            <div
              className="
                mb-[18px]
                flex
                items-center
                justify-center
                gap-[11px]
                lg:justify-start
              "
            >
              <span className="h-px w-[25px] bg-[#C59B27]" />

              <span
                className="
                  font-body
                  text-[0.76rem]
                  font-semibold
                  uppercase
                  tracking-[0.27em]
                  text-[#8B6816]
                "
              >
                Torah Publishing, Cover to Cover
              </span>
            </div>

            {/* Main heading */}
            <h1
              className="
                max-w-[680px]
                font-display
                text-[3.35rem]
                font-normal
                leading-[0.98]
                tracking-[-0.025em]
                text-[#3A101A]
                sm:text-[4rem]
                lg:text-[4.55rem]
              "
            >
              Your Vision,
              <br />
              <em
                className="
                  font-medium
                  italic
                  text-[#A77B18]
                "
              >
                In Print.
              </em>
            </h1>

            {/* Gold rule */}
            <div
              className="
                my-[24px]
                h-[2px]
                w-[58px]
                bg-[#C59B27]
              "
            />

            {/* Hebrew */}
            <div
              dir="rtl"
              className="
                mb-[22px]
                inline-block
                border-r-[2px]
                border-[#C59B27]
                pr-[15px]
                font-hebrew
                text-[1.45rem]
                font-medium
                leading-none
                text-[#4A1521]
                sm:text-[1.6rem]
              "
            >
              הוצאה לאור מרישא עד גמירא
            </div>

            {/* Description */}
            <p
              className="
                mx-auto
                mb-[32px]
                max-w-[560px]
                font-body
                text-[1.04rem]
                font-normal
                leading-[1.72]
                text-[#55474A]
                sm:text-[1.1rem]
                lg:mx-0
              "
            >
              Complete publishing services for today's Torah
              community — from first draft to finished sefer,
              with precision and dedication at every stage.
            </p>

            {/* Buttons */}
            <div
              className="
                mb-[25px]
                flex
                flex-wrap
                items-center
                justify-center
                gap-[12px]
                lg:justify-start
              "
            >
              <a
                href="#quote"
                className="
                  inline-flex
                  h-[49px]
                  items-center
                  justify-center
                  rounded-[2px]
                  border
                  border-[#4A1521]
                  bg-[#4A1521]
                  px-[28px]
                  font-body
                  text-[0.76rem]
                  font-semibold
                  uppercase
                  tracking-[0.17em]
                  text-[#FFF9EF]
                  shadow-[0_8px_20px_rgba(74,21,33,0.14)]
                  transition-all
                  duration-200
                  hover:-translate-y-[1px]
                  hover:bg-[#310B13]
                  hover:shadow-[0_10px_25px_rgba(74,21,33,0.2)]
                "
              >
                Get a Quote
              </a>

              <a
                href="#work"
                className="
                  inline-flex
                  h-[49px]
                  items-center
                  justify-center
                  rounded-[2px]
                  border
                  border-[#4A1521]/25
                  bg-[#FFF9EF]
                  px-[28px]
                  font-body
                  text-[0.76rem]
                  font-semibold
                  uppercase
                  tracking-[0.17em]
                  text-[#4A1521]
                  transition-all
                  duration-200
                  hover:-translate-y-[1px]
                  hover:border-[#4A1521]
                  hover:bg-white
                "
              >
                Our Work
              </a>
            </div>

            {/* Footnote */}
            <div
              className="
                flex
                items-center
                justify-center
                gap-[9px]
                font-body
                text-[0.79rem]
                italic
                text-[#65575A]
                lg:justify-start
              "
            >
              <span className="font-normal text-[#C59B27]">
                ◆
              </span>

              Publishing seforim & manuscripts in Hebrew,
              English & Yiddish.
            </div>
          </div>

          {/* =====================================================
              RIGHT — EDITORIAL CAROUSEL
          ===================================================== */}
          <div className="relative mx-auto w-full max-w-[500px]">
            {/* Outer gold frame */}
            <div
              className="
                relative
                border
                border-[#C59B27]/55
                bg-[#EFE7D9]
                p-[13px]
                shadow-[0_22px_45px_rgba(50,12,20,0.16)]
                sm:p-[17px]
              "
            >
              {/* Corner ornaments */}
              <span
                className="
                  absolute
                  left-[6px]
                  top-[6px]
                  z-20
                  h-[13px]
                  w-[13px]
                  border-l
                  border-t
                  border-[#C59B27]
                "
              />

              <span
                className="
                  absolute
                  bottom-[6px]
                  right-[6px]
                  z-20
                  h-[13px]
                  w-[13px]
                  border-b
                  border-r
                  border-[#C59B27]
                "
              />

              {/* =================================================
                  DARK SLIDE
              ================================================= */}
              <div
                className="
                  relative
                  h-[320px]
                  overflow-hidden
                  border
                  border-[#C59B27]/25
                  bg-[#320C14]
                  sm:h-[340px]
                "
              >
                {/* Dark wine gradient */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_50%_42%,#591B2A_0%,#410F1C_42%,#26080F_100%)]
                  "
                />

                {/* Center glow */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[180px]
                    w-[180px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#C59B27]/[0.045]
                    blur-[25px]
                  "
                />

                {/* Decorative lines */}
                <div
                  className="
                    absolute
                    left-[28px]
                    right-[28px]
                    top-[25px]
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-[#C59B27]/50
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    bottom-[25px]
                    left-[28px]
                    right-[28px]
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-[#C59B27]/30
                    to-transparent
                  "
                />

                {/* Slide content */}
                <div
                  key={active}
                  className="
                    relative
                    flex
                    h-full
                    w-full
                    flex-col
                    items-center
                    justify-center
                    px-8
                    text-center
                  "
                >
                  {/* Icon circle */}
                  <div
                    className="
                      mb-[25px]
                      flex
                      h-[74px]
                      w-[74px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#C59B27]/60
                      bg-[#C59B27]/[0.035]
                    "
                  >
                    <Icon
                      size={39}
                      strokeWidth={1.15}
                      className="text-[#E0BA53]"
                    />
                  </div>

                  {/* Small label */}
                  <span
                    className="
                      mb-[10px]
                      font-body
                      text-[0.67rem]
                      uppercase
                      tracking-[0.3em]
                      text-[#C59B27]
                    "
                  >
                    Machon Aleh Zayis
                  </span>

                  {/* Slide title */}
                  <h2
                    className="
                      font-display
                      text-[1.7rem]
                      font-normal
                      tracking-[0.035em]
                      text-[#F2D890]
                      sm:text-[1.85rem]
                    "
                  >
                    {slide.title}
                  </h2>
                </div>
              </div>

              {/* =================================================
                  CAPTION
              ================================================= */}
              <div
                className="
                  flex
                  min-h-[72px]
                  items-center
                  justify-center
                  px-3
                  py-[13px]
                  text-center
                "
              >
                <p
                  className="
                    max-w-[430px]
                    font-body
                    text-[0.88rem]
                    italic
                    leading-[1.5]
                    text-[#5C4D50]
                  "
                >
                  {slide.caption}
                </p>
              </div>

              {/* =================================================
                  CONTROLS
              ================================================= */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-t
                  border-[#4A1521]/15
                  pt-[12px]
                "
              >
                <span
                  className="
                    font-display
                    text-[0.86rem]
                    font-semibold
                    tracking-[0.16em]
                    text-[#4A1521]
                  "
                >
                  {String(active + 1).padStart(2, "0")}
                  <span className="mx-[7px] text-[#C59B27]">
                    /
                  </span>
                  {String(slides.length).padStart(2, "0")}
                </span>

                <div className="flex gap-[7px]">
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    className="
                      flex
                      h-[34px]
                      w-[34px]
                      items-center
                      justify-center
                      rounded-[2px]
                      border
                      border-[#4A1521]/20
                      bg-[#F8F3EA]
                      text-[#4A1521]
                      transition-all
                      duration-200
                      hover:border-[#C59B27]
                      hover:bg-[#4A1521]
                      hover:text-[#F8F3EA]
                    "
                  >
                    <ArrowLeft
                      size={15}
                      strokeWidth={1.4}
                    />
                  </button>

                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="
                      flex
                      h-[34px]
                      w-[34px]
                      items-center
                      justify-center
                      rounded-[2px]
                      border
                      border-[#4A1521]/20
                      bg-[#F8F3EA]
                      text-[#4A1521]
                      transition-all
                      duration-200
                      hover:border-[#C59B27]
                      hover:bg-[#4A1521]
                      hover:text-[#F8F3EA]
                    "
                  >
                    <ArrowRight
                      size={15}
                      strokeWidth={1.4}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}