"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Keyboard,
  ScrollText,
  Mic,
  PenLine,
  Users,
  Printer,
  Globe2,
  Mail,
} from "lucide-react";

const slides = [
  {
    title: "Typing",
    caption:
      "Turning handwritten pages into a clear, carefully typed file, ready for editing.",
    icon: Keyboard,
    image: "/assets/Typing.png",
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
  const [isHovering, setIsHovering] = useState(false);

  const nextSlide = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    if (isHovering) return;

    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovering]);

  const slide = slides[active];
  const Icon = slide.icon;

  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-[#F8F3EA]
        pb-[80px]
        pt-[62px]
        sm:pb-[95px]
        sm:pt-[72px]
        lg:pb-[105px]
        lg:pt-[78px]
      "
    >
      {/* =========================================================
          BACKGROUND DETAIL
      ========================================================= */}

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
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-220px]
          left-[-180px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#C59B27]/[0.025]
        "
      />

      <div className="relative mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-10">
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-[48px]
            lg:grid-cols-[1.02fr_0.98fr]
            lg:gap-[70px]
          "
        >
          {/* =====================================================
              LEFT SIDE
          ===================================================== */}

          <div className="relative z-10 text-center lg:text-left">
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

            {/* Heading */}

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

              <em className="font-medium italic text-[#A77B18]">
                In Print.
              </em>
            </h1>

            {/* Gold divider */}

            <div className="my-[24px] h-[2px] w-[58px] bg-[#C59B27]" />

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
              Complete publishing services for today&apos;s Torah
              community — from first draft to finished sefer, with
              precision and dedication at every stage.
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

            {/* Small tagline */}

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

              <span>
                Publishing seforim &amp; manuscripts in Hebrew,
                English &amp; Yiddish.
              </span>
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE — IMAGE CAROUSEL
          ===================================================== */}

          <div className="relative mx-auto w-full max-w-[500px]">
            <div
              className="
                relative
                border
                border-[#C59B27]/55
                bg-[#EFE7D9]
                p-[11px]
                shadow-[0_22px_45px_rgba(50,12,20,0.16)]
                sm:p-[15px]
              "
            >
              {/* Corner decorations */}

              <span
                aria-hidden="true"
                className="
                  absolute
                  left-[5px]
                  top-[5px]
                  z-30
                  h-[13px]
                  w-[13px]
                  border-l
                  border-t
                  border-[#C59B27]
                "
              />

              <span
                aria-hidden="true"
                className="
                  absolute
                  bottom-[5px]
                  right-[5px]
                  z-30
                  h-[13px]
                  w-[13px]
                  border-b
                  border-r
                  border-[#C59B27]
                "
              />

              {/* =================================================
                  IMAGE
              ================================================= */}

              <div
                className="
                  group
                  relative
                  h-[330px]
                  cursor-pointer
                  overflow-hidden
                  border
                  border-[#C59B27]/25
                  bg-[#320C14]
                  sm:h-[370px]
                  lg:h-[400px]
                "
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <Image
                  key={slide.image}
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 500px"
                  priority={active === 0}
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.045]
                  "
                />

                {/* Base image contrast */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#16070B]/55
                    via-transparent
                    to-[#16070B]/10
                  "
                />

                {/* =================================================
                    HOVER PANEL
                    slides UP from bottom
                ================================================= */}

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    z-10
                    translate-y-[calc(100%-82px)]
                    transition-transform
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:translate-y-0
                  "
                >
                  {/* Dark panel */}

                  <div
                    className="
                      border-t
                      border-[#D0A63A]/35
                      bg-[#350C17]/[0.96]
                      px-[24px]
                      pb-[25px]
                      pt-[20px]
                      backdrop-blur-[6px]
                      sm:px-[30px]
                    "
                  >
                    {/* Small label */}

                    <div
                      className="
                        mb-[9px]
                        flex
                        items-center
                        gap-[9px]
                        font-body
                        text-[0.65rem]
                        font-semibold
                        uppercase
                        tracking-[0.27em]
                        text-[#C59B27]
                      "
                    >
                      <Icon
                        size={14}
                        strokeWidth={1.3}
                      />

                      Machon Aleh Zayis
                    </div>

                    {/* Title */}

                    <h2
                      className="
                        font-display
                        text-[1.8rem]
                        font-normal
                        tracking-[0.02em]
                        text-[#F4D98C]
                        sm:text-[2rem]
                      "
                    >
                      {slide.title}
                    </h2>

                    {/* Description */}

                    <p
                      className="
                        mt-[10px]
                        max-w-[420px]
                        font-body
                        text-[0.88rem]
                        leading-[1.55]
                        text-[#E0D2CC]
                      "
                    >
                      {slide.caption}
                    </p>
                  </div>
                </div>

                {/* =================================================
                    RESTING STATE TITLE
                ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    right-0
                    z-[5]
                    flex
                    h-[82px]
                    items-end
                    bg-gradient-to-t
                    from-[#16070B]/85
                    to-transparent
                    px-[24px]
                    pb-[34px]
                    transition-opacity
                    duration-300
                    group-hover:opacity-0
                  "
                >
                  <h2
                    className="
    relative
    -top-[6px]
    font-display
    text-[1.75rem]
    font-normal
    text-[#F2D890]
  "
                  >
                    {slide.title}
                  </h2>
                </div>

                {/* Top decorative line */}

                <div
                  className="
                    absolute
                    left-[25px]
                    right-[25px]
                    top-[24px]
                    z-20
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-[#C59B27]/55
                    to-transparent
                  "
                />
              </div>

              {/* =================================================
                  CONTROLS
              ================================================= */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  pt-[12px]
                "
              >
                {/* Number */}

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

                {/* Progress */}

                <div className="hidden flex-1 items-center justify-center px-6 sm:flex">
                  <div className="h-px w-full max-w-[180px] bg-[#4A1521]/10">
                    <div
                      className="
                        h-px
                        bg-[#C59B27]
                        transition-all
                        duration-500
                      "
                      style={{
                        width: `${((active + 1) / slides.length) * 100
                          }%`,
                      }}
                    />
                  </div>
                </div>

                {/* Navigation */}

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