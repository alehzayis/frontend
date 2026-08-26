import { BookOpen, Feather, ScrollText } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        border-t
        border-[#4A1521]/10
        bg-[#F8F3EA]
        py-[90px]
        sm:py-[105px]
        lg:py-[120px]
      "
    >
      <div
        className="
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
            gap-[55px]
            lg:grid-cols-[0.82fr_1.18fr]
            lg:items-stretch
            lg:gap-[75px]
          "
        >
          {/* =====================================================
              LEFT — EDITORIAL STATEMENT
          ===================================================== */}
          <div
            className="
              relative
              flex
              min-h-[380px]
              items-center
              overflow-hidden
              bg-[#3A0D18]
              px-8
              py-12
              sm:px-12
              lg:min-h-[500px]
              lg:px-14
            "
          >
            {/* Background glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-[100px]
                -top-[100px]
                h-[300px]
                w-[300px]
                rounded-full
                bg-[#C59B27]/[0.08]
                blur-[45px]
              "
            />

            {/* Top decorative rule */}
            <div
              aria-hidden="true"
              className="
                absolute
                left-8
                right-8
                top-8
                h-px
                bg-gradient-to-r
                from-transparent
                via-[#C59B27]/60
                to-transparent
                sm:left-12
                sm:right-12
              "
            />

            {/* Bottom decorative rule */}
            <div
              aria-hidden="true"
              className="
                absolute
                bottom-8
                left-8
                right-8
                h-px
                bg-gradient-to-r
                from-transparent
                via-[#C59B27]/30
                to-transparent
                sm:left-12
                sm:right-12
              "
            />

            {/* Corner ornaments */}
            <span
              className="
                absolute
                left-[9px]
                top-[9px]
                h-[14px]
                w-[14px]
                border-l
                border-t
                border-[#C59B27]
              "
            />

            <span
              className="
                absolute
                bottom-[9px]
                right-[9px]
                h-[14px]
                w-[14px]
                border-b
                border-r
                border-[#C59B27]
              "
            />

            <div className="relative z-10">
              {/* Small label */}
              <div
                className="
                  mb-7
                  flex
                  items-center
                  gap-3
                  font-body
                  text-[0.7rem]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#D0A63A]
                "
              >
                <span className="h-px w-[22px] bg-[#C59B27]" />
                Our Philosophy
              </div>

              {/* Main statement */}
              <h2
                className="
                  font-display
                  text-[2.8rem]
                  font-normal
                  leading-[1.05]
                  text-[#F7E9C2]
                  sm:text-[3.35rem]
                  lg:text-[3.7rem]
                "
              >
                From a
                <br />
                <em className="italic text-[#D0A63A]">
                  manuscript
                </em>
                <br />
                to a masterpiece.
              </h2>

              {/* Gold divider */}
              <div
                className="
                  my-7
                  h-[2px]
                  w-[55px]
                  bg-[#C59B27]
                "
              />

              <p
                className="
                  max-w-[370px]
                  font-body
                  text-[1rem]
                  font-normal
                  leading-[1.7]
                  text-[#D8C9C5]
                "
              >
                Every sefer carries a story, a tradition,
                and a legacy. Our work is to preserve that
                legacy and present it with the care it deserves.
              </p>
            </div>
          </div>

          {/* =====================================================
              RIGHT — ABOUT CONTENT
          ===================================================== */}
          <div
            className="
              flex
              flex-col
              justify-center
            "
          >
            {/* Eyebrow */}
            <div
              className="
                mb-5
                flex
                items-center
                gap-3
                font-body
                text-[0.75rem]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#9A741A]
              "
            >
              <span className="h-px w-[24px] bg-[#C59B27]" />
              About Machon Aleh Zayis
            </div>

            {/* Heading */}
            <h2
              className="
                mb-6
                max-w-[650px]
                font-display
                text-[2.7rem]
                font-normal
                leading-[1.08]
                tracking-[-0.01em]
                text-[#3A101A]
                sm:text-[3.2rem]
                lg:text-[3.7rem]
              "
            >
              Publishing with
              <br />
              <em className="italic text-[#A77B18]">
                purpose and precision.
              </em>
            </h2>

            {/* Intro */}
            <p
              className="
                mb-5
                max-w-[650px]
                font-body
                text-[1.05rem]
                font-semibold
                leading-[1.75]
                text-[#403438]
              "
            >
              Machon Aleh Zayis is a full-service Torah
              publishing house dedicated to bringing
              manuscripts from concept to completion.
            </p>

            <p
              className="
                mb-8
                max-w-[650px]
                font-body
                text-[1rem]
                font-normal
                leading-[1.75]
                text-[#625457]
              "
            >
              From scholarly editing and translation to
              design, typesetting, printing, and binding,
              every stage is handled with the same attention
              to detail. The goal is simple: to create a
              finished sefer worthy of its content and
              enduring for generations.
            </p>

            {/* =================================================
                THREE VALUES
            ================================================= */}
            <div
              className="
                grid
                grid-cols-1
                gap-0
                border-y
                border-[#4A1521]/12
                sm:grid-cols-3
              "
            >
              {/* Value 1 */}
              <div
                className="
                  border-b
                  border-[#4A1521]/12
                  py-6
                  sm:border-b-0
                  sm:border-r
                  sm:pr-6
                "
              >
                <ScrollText
                  size={25}
                  strokeWidth={1.2}
                  className="mb-4 text-[#A77B18]"
                />

                <h3
                  className="
                    mb-2
                    font-display
                    text-[1.3rem]
                    text-[#4A1521]
                  "
                >
                  Tradition
                </h3>

                <p
                  className="
                    font-body
                    text-[0.86rem]
                    leading-[1.55]
                    text-[#6B5B5E]
                  "
                >
                  Rooted in the standards and traditions
                  of Torah publishing.
                </p>
              </div>

              {/* Value 2 */}
              <div
                className="
                  border-b
                  border-[#4A1521]/12
                  py-6
                  sm:border-b-0
                  sm:px-6
                  sm:border-r
                "
              >
                <BookOpen
                  size={25}
                  strokeWidth={1.2}
                  className="mb-4 text-[#A77B18]"
                />

                <h3
                  className="
                    mb-2
                    font-display
                    text-[1.3rem]
                    text-[#4A1521]
                  "
                >
                  Scholarship
                </h3>

                <p
                  className="
                    font-body
                    text-[0.86rem]
                    leading-[1.55]
                    text-[#6B5B5E]
                  "
                >
                  Editorial care grounded in deep
                  scholarly understanding.
                </p>
              </div>

              {/* Value 3 */}
              <div
                className="
                  py-6
                  sm:pl-6
                "
              >
                <Feather
                  size={25}
                  strokeWidth={1.2}
                  className="mb-4 text-[#A77B18]"
                />

                <h3
                  className="
                    mb-2
                    font-display
                    text-[1.3rem]
                    text-[#4A1521]
                  "
                >
                  Craft
                </h3>

                <p
                  className="
                    font-body
                    text-[0.86rem]
                    leading-[1.55]
                    text-[#6B5B5E]
                  "
                >
                  Thoughtful design and craftsmanship
                  from first page to final binding.
                </p>
              </div>
            </div>

            {/* Link */}
            <div className="mt-7">
              <a
                href="#services"
                className="
                  inline-flex
                  items-center
                  gap-3
                  font-body
                  text-[0.76rem]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#4A1521]
                  transition-colors
                  duration-200
                  hover:text-[#A77B18]
                "
              >
                Discover our services

                <span className="text-[#C59B27]">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}