"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookMarked,
  BookOpen,
  Image as ImageIcon,
  Languages,
  Lightbulb,
  Mic,
  PenLine,
  Phone,
  Printer,
  Quote,
  Sparkles,
  Truck,
  Type,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SERVICES = [
  {
    title: "Full Service",
    icon: BookOpen,
    text: "With Machon Aleh Zayis, you will receive a full service experience. We offer meticulous transcription, typesetting and editing of all genres of writing. In addition, we offer fully customized layouts to perfectly suit your personal style and objectives.",
  },
  {
    title: "Content",
    icon: Lightbulb,
    text: "At Machon Aleh Zayis, we have an in-house team of talmidei chachamim who can advise and assist in producing quality content for you in many areas of lomdus including Derush, halacha, machshava, chasidus, kabbala etc.",
  },
  {
    title: "Editing in Hebrew and English",
    icon: PenLine,
    text: "Utilize our skilled editors to ensure that your manuscript is transformed into an easy to read, well-written final product. Whether written in Hebrew or English, our team of editors will maintain your style while providing expert editing and proofreading skills.",
  },
  {
    title: "Typing in Hebrew and English",
    icon: Type,
    text: "Convert hand-written documents into easy to read and distributable materials. At Machon Aleh Zayis, we have a team of dedicated typists who can transform handwritten notes and documents in Hebrew or English into accurately typed manuscripts.",
  },
  {
    title: "Transcriptions",
    icon: Mic,
    text: "Transcription services are available by language experts in English, Hebrew, and Yiddish. Provide us with audio recordings and we will have them transcribed quickly, accurately and professionally for easy and convenient access. Whether you have family interviews, shiurim or lectures, we will transcribe them expertly and precisely.",
  },
  {
    title: "Translations",
    icon: Languages,
    text: "We offer translation services between English, Hebrew, and Yiddish, allowing your work to be enjoyed by a wider audience. Your documents will be reviewed by several members of our translation team to ensure accuracy of translations while maintaining the underlying message and style.",
  },
  {
    title: "Graphics",
    icon: ImageIcon,
    text: "Our talented design staff is available to assist you with customized covers, dedication pages, flyers and more. We will work with you to understand your vision and goals and ensure that your publication is aesthetically pleasing, well-laid out and is personalized to meet your individual preferences.",
  },
  {
    title: "Covers",
    icon: BookMarked,
    text: "With hard and soft covers, foil-stamped or printed covers, antique leather covers and more, there are endless possibilities to make your sefer stand out amongst the crowd. Select the unique options and design to achieve the personalized and desired look for your final masterpiece.",
  },
  {
    title: "Printing and Binding",
    icon: Printer,
    text: "Digital, offset, black and white or color, our printing services utilize the latest technologies to provide the highest quality product. We also offer a variety of binding options, including sewn, spiral, saddle stitched and more ensuring quality construction and long-lasting products.",
  },
  {
    title: "Shipping and Distribution",
    icon: Truck,
    text: "Let us assist you in ensuring your sefer reaches destinations across the globe. Our strong rapport with leading book distributors enables your masterpiece to be shared internationally.",
  },
  {
    title: "Fiction, Non-Fiction and Family Memorial Books",
    icon: Sparkles,
    text: "Sharing your passion for the project, we'll cover all aspects of imparting your family's message in a smooth and enjoyable process. We will assist you with whatever stage of the process you need. We will provide research expertise, transcription, translation, editing, typesetting, layout, graphics and design to ensure your finished project exceeds your expectation.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Content & Manuscript",
    text: "Starting from a draft, handwritten notes, or an audio recording, our talmidei chachamim and editors shape it into a polished, well-written manuscript in Hebrew, English or Yiddish.",
  },
  {
    step: "02",
    title: "Design & Layout",
    text: "Custom layouts, cover design, dedication pages and flyers — built around your vision, not a template.",
  },
  {
    step: "03",
    title: "Print & Bind",
    text: "Digital or offset printing, in whatever binding and cover finish fits your sefer, from soft cover to antique leather.",
  },
  {
    step: "04",
    title: "Ship & Distribute",
    text: "From our shop to shelves around the world, through our relationships with leading book distributors.",
  },
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

export default function ServicesPage() {
  return (
    <>
    <Navbar/>
    <div className="bg-[#F8F3EA]">
      <section className="relative overflow-hidden bg-[#3A101A] px-6 pb-20 pt-24 lg:px-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#F7E9C2 1px, transparent 1px), linear-gradient(90deg, #F7E9C2 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        <div className="relative mx-auto max-w-[1240px] text-center">
          <Reveal>
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#C59B27]">
              Our Services
            </span>
            <h1 className="mx-auto mt-5 max-w-3xl font-display text-5xl leading-[1.12] text-[#F7E9C2] sm:text-6xl">
              Complete publishing, <span className="text-[#C59B27]">cover to cover.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl font-body text-[0.98rem] leading-relaxed text-[#D6C6C2]">
              Complete publishing services for today's Torah community — transcription, typesetting, editing,
              translation, graphics, printing and binding, all under one roof.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-sm bg-[#C59B27] px-7 py-3.5 font-body text-sm font-semibold uppercase tracking-[0.05em] text-[#3A101A] transition-colors hover:bg-[#D6AE3C]"
              >
                Request Quote
                <ArrowRight size={16} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center rounded-sm border border-[#F7E9C2]/25 px-7 py-3.5 font-body text-sm font-semibold uppercase tracking-[0.05em] text-[#F7E9C2] transition-colors hover:border-[#F7E9C2]/50"
              >
                View Services
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-[#8B6816]">
              How It Comes Together
            </span>
            <h2 className="mt-3 font-display text-3xl text-[#3A101A] sm:text-4xl">From manuscript to shelf.</h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((item, i) => (
              <Reveal key={item.step} delay={i * 110}>
                <div className="relative">
                  <div className="font-display text-4xl text-[#C59B27]/30">{item.step}</div>
                  <div className="mt-2 font-display text-lg text-[#3A101A]">{item.title}</div>
                  <p className="mt-2 font-body text-[0.85rem] leading-relaxed text-[#66575A]">{item.text}</p>
                  {i !== PROCESS.length - 1 && (
                    <span className="absolute right-[-16px] top-[18px] hidden h-px w-8 bg-[#C59B27]/30 lg:block" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-20 bg-[#F8F3EA] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-[#8B6816]">
              What We Offer
            </span>
            <h2 className="mt-3 font-display text-3xl text-[#3A101A] sm:text-4xl">Every service, in-house.</h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={(i % 3) * 100}>
                <div className="group h-full rounded-sm border border-[#4A1521]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C59B27]/40 hover:shadow-[0_16px_32px_rgba(58,16,26,0.08)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#F8F3EA] text-[#8B6816] transition-colors group-hover:bg-[#3A101A] group-hover:text-[#F7E9C2]">
                    <service.icon size={19} strokeWidth={1.7} />
                  </span>
                  <div className="mt-5 font-display text-lg text-[#3A101A]">{service.title}</div>
                  <p className="mt-2 font-body text-[0.85rem] leading-relaxed text-[#66575A]">{service.text}</p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={(SERVICES.length % 3) * 100}>
              <div className="flex h-full flex-col justify-center rounded-sm border border-[#C59B27]/40 bg-[#3A101A] p-7">
                <div className="font-display text-xl text-[#F7E9C2]">Not sure where to start?</div>
                <p className="mt-2 font-body text-[0.85rem] leading-relaxed text-[#D6C6C2]">
                  Tell us about your sefer or manuscript and we'll put together a quote that covers exactly what
                  you need.
                </p>
                <Link
                  href="/contact"
                  className="group mt-5 inline-flex w-fit items-center gap-2 rounded-sm bg-[#C59B27] px-5 py-2.5 font-body text-sm font-semibold uppercase tracking-[0.05em] text-[#3A101A] transition-colors hover:bg-[#D6AE3C]"
                >
                  Request Quote
                  <ArrowRight size={15} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
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
          <h2 className="font-display text-3xl text-[#3A101A] sm:text-4xl">Let's talk about your sefer.</h2>
          <p className="mx-auto mt-3 max-w-md font-body text-[0.95rem] text-[#66575A]">
            Reach out for a quote, or call us directly to talk through what your project needs.
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
            <a
              href="tel:+17325133466"
              className="inline-flex items-center gap-2 rounded-sm border border-[#4A1521]/15 bg-white px-7 py-3.5 font-body text-sm font-semibold uppercase tracking-[0.05em] text-[#3A101A] transition-colors hover:border-[#4A1521]/30"
            >
              <Phone size={15} strokeWidth={2} />
              732-513-3466
            </a>
          </div>
        </Reveal>
      </section>
    </div>
    <Footer/>
    </>
  );
}