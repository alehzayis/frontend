"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    accent: "#4A2A1B",
    headline: "\"Machon Aleh Zayis is a hidden gem\"",
    body: "\"Each person who sees the finished work Aleh Zayis did for me describes it the same — 'It's a masterpiece!'\"",
    author: "— Author",
    stars: false,
  },
  {
    accent: "#C59B27",
    headline: null,
    body: "\"Right from my initial consultation, and all the way until the seforim were delivered to my door, I was able to sense their commitment and interest in seeing my project through.\"",
    author: "Zvi Solomon, Author",
    stars: true,
  },
  {
    accent: "#1B2740",
    headline: "\"I will definitely use Machon Aleh Zayis again\"",
    body: "\"Responsive, responsible, knowledgeable about all aspects of the industry, honest, professional — and most of all, a pleasure to work with.\"",
    author: "— Author",
    stars: false,
  },
];

function Card({ item, center }: { item: (typeof testimonials)[number]; center: boolean }) {
  return (
    <div
      style={{ borderColor: center ? "#C59B27" : undefined, borderLeftColor: center ? undefined : item.accent }}
      className={`relative flex h-full flex-col justify-between text-center transition-all duration-500 ${
        center
          ? "border bg-[#FBF3E2] px-8 py-10 shadow-[0_18px_36px_-20px_rgba(74,21,33,0.22)] lg:scale-105 lg:px-11 lg:py-12"
          : "border border-[#4A1521]/10 border-l-[3px] bg-[#F3ECDC] px-8 py-9 opacity-90 lg:scale-95"
      } before:absolute before:left-[7px] before:top-[7px] before:h-[9px] before:w-[9px] before:border-l before:border-t before:border-[#C59B27]/70 before:content-[''] after:absolute after:bottom-[7px] after:right-[7px] after:h-[9px] after:w-[9px] after:border-b after:border-r after:border-[#C59B27]/70 after:content-['']`}
    >
      <span
        style={{ color: center ? "#C59B27" : item.accent }}
        className="pointer-events-none absolute left-1/2 top-2 -translate-x-1/2 select-none font-display text-6xl leading-none opacity-[0.16]"
      >
        &ldquo;
      </span>

      <div className="relative">
        {item.stars ? (
          <div className="mb-4 flex justify-center gap-1 tracking-[2px] text-[#C59B27]">★★★★★</div>
        ) : (
          <h3 className="mb-4 font-display text-[1.2rem] font-semibold leading-snug text-[#4A1521]">{item.headline}</h3>
        )}
        <p className="font-body text-[0.98rem] italic leading-[1.7] text-[#6E5D57]">{item.body}</p>
      </div>

      <div className="relative mt-6 font-body text-[0.85rem] font-semibold uppercase tracking-[0.12em] text-[#4A1521]">
        {item.author}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const n = testimonials.length;
  const track = [...testimonials, ...testimonials, ...testimonials];

  const [isDesktop, setIsDesktop] = useState(false);
  const [position, setPosition] = useState(n + 1);
  const [animated, setAnimated] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const visibleCount = isDesktop ? 3 : 1;
  const leadOffset = isDesktop ? 1 : 0;

  const goTo = (index: number) => setPosition(n + ((index % n) + n) % n);
  const next = () => setPosition((p) => p + 1);
  const prev = () => setPosition((p) => p - 1);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (position < n || position >= n * 2) {
        setAnimated(false);
        setPosition((((position % n) + n) % n) + n);
      }
    }, 550);
    return () => clearTimeout(timeout);
  }, [position, n]);

  useEffect(() => {
    if (!animated) {
      const raf = requestAnimationFrame(() => setAnimated(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [animated]);

  const centerOriginalIndex = ((position % n) + n) % n;

  return (
    <section id="work" className="py-16 lg:py-[108px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center justify-center gap-2.5 font-body text-xs font-semibold uppercase tracking-[0.24em] text-[#9C7A1E]">
            <span className="h-px w-5 bg-current opacity-60" />
            Words of Appreciation
          </span>

          <h2 className="font-display text-[2.85rem] font-normal text-[#4A1521]">What Authors Say</h2>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-[50px] bg-gradient-to-r from-transparent via-[#C59B27] to-transparent" />
            <svg className="h-[13px] w-[13px] fill-[#C59B27]" viewBox="0 0 24 24">
              <polygon points="12,2 15,9 22,12 15,15 12,22 9,15 2,12 9,9" />
            </svg>
            <span className="h-px w-[50px] bg-gradient-to-r from-transparent via-[#C59B27] to-transparent" />
          </div>
        </div>

        <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="relative">
          <div className="overflow-hidden">
            <div
              className={`flex ${animated ? "transition-transform duration-[550ms] ease-[cubic-bezier(0.65,0,0.35,1)]" : ""}`}
              style={{ transform: `translateX(-${(position - leadOffset) * (100 / visibleCount)}%)` }}
            >
              {track.map((item, i) => (
                <div key={i} style={{ width: `${100 / visibleCount}%` }} className="flex-shrink-0 px-3">
                  <Card item={item} center={i === position} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 flex h-10 w-10 -translate-x-3 -translate-y-1/2 items-center justify-center rounded-full border border-[#4A1521]/20 bg-[#FBF7EF] text-[#4A1521] shadow-sm transition-colors hover:border-[#4A1521] hover:bg-[#4A1521] hover:text-[#FBF7EF] lg:-translate-x-14"
          >
            <ChevronLeft size={18} strokeWidth={1.6} />
          </button>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 flex h-10 w-10 translate-x-3 -translate-y-1/2 items-center justify-center rounded-full border border-[#4A1521]/20 bg-[#FBF7EF] text-[#4A1521] shadow-sm transition-colors hover:border-[#4A1521] hover:bg-[#4A1521] hover:text-[#FBF7EF] lg:translate-x-14"
          >
            <ChevronRight size={18} strokeWidth={1.6} />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Show testimonial ${i + 1} centered`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === centerOriginalIndex ? "w-6 bg-[#4A1521]" : "w-2 bg-[#4A1521]/25 hover:bg-[#4A1521]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}