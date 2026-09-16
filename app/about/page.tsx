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
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const STATS = [
    { value: "500+", label: "Seforim Published" },
    { value: "15+", label: "Years of Experience" },
    { value: "3", label: "Languages Served" },
    { value: "1,000+", label: "Mechaberim Served" },
];

const VALUES = [
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
    {
        label: "Every Language",
        icon: Languages,
        text: "Hebrew, English and Yiddish, transcribed, edited and typeset with the same exacting care.",
    },
];

const GROWTH = [
    { year: "2010", text: "Machon Aleh Zayis is founded, transcribing and typesetting seforim for local mechaberim." },
    { year: "2012", text: "Our first bound sefer leaves the shop, cover to cover." },
    { year: "2014", text: "We take on our first multi-volume set." },
    { year: "2017", text: "A dedicated English editing and translation department opens." },
    { year: "2019", text: "We reach our 50th published title." },
    { year: "2020", text: "Printing and binding move in-house, end to end under one roof." },
    { year: "2022", text: "Yiddish transcription and editing joins our services." },
    { year: "2024", text: "We pass 100 seforim published, with copies on shelves around the world." },
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
            className={`transition-all duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
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
        <>
            <Navbar />
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

                    <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
                        <Reveal>
                            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#C59B27]">
                                About Machon Aleh Zayis
                            </span>
                            <h1 className="mt-5 font-display text-5xl leading-[1.12] text-[#F7E9C2] sm:text-6xl">
                                Every sefer,
                                <br />
                                <span className="text-[#C59B27]">a legacy.</span>
                            </h1>
                            <p className="mt-6 max-w-lg font-body text-[0.98rem] leading-relaxed text-[#D6C6C2]">
                                Machon Aleh Zayis was founded to give every mechaber — whether a first-time author or a posek
                                publishing a multi-volume set — the same gold-standard production, from the first transcribed page
                                to the final bound copy.
                            </p>
                        </Reveal>

                        <Reveal delay={120}>
                            <div className="relative ml-auto max-w-sm rounded-sm border border-[#C59B27]/40 bg-[#4A1521]/40 p-7">
                                <div dir="rtl" className="font-body text-lg leading-relaxed text-[#F7E9C2]">
                                    הוצאה לאור מרישא עד גמירא
                                </div>
                                <span className="mt-4 block h-px w-14 bg-[#C59B27]/50" />
                                <p className="mt-4 font-body text-sm italic text-[#D6C6C2]">Publishing, from beginning to end.</p>
                                <div className="mt-3 font-body text-xs uppercase tracking-[0.1em] text-[#C59B27]">Our Motto</div>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="bg-white px-6 py-14 lg:px-10">
                    <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-10 sm:grid-cols-4">
                        {STATS.map((stat, i) => (
                            <Reveal key={stat.label} delay={i * 90} className="text-center sm:text-left">
                                <div className="font-display text-4xl text-[#C59B27]">{stat.value}</div>
                                <div className="mt-1 font-body text-sm text-[#66575A]">{stat.label}</div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                <section className="bg-[#F8F3EA] px-6 py-24 lg:px-10">
                    <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-16 lg:grid-cols-2">
                        <Reveal>
                            <span className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-[#8B6816]">
                                Our Mission
                            </span>
                            <h2 className="mt-3 font-display text-3xl leading-tight text-[#3A101A] sm:text-4xl">
                                Giving every mechaber the publishing house their sefer deserves.
                            </h2>
                        </Reveal>

                        <Reveal delay={100}>
                            <p className="font-body text-[0.95rem] leading-relaxed text-[#66575A]">
                                Publishing a sefer, a personal manuscript, or a book is a momentous occasion. Machon Aleh Zayis
                                exists to make it a stress-free one — a complete publishing house for today's Torah community,
                                offering transcription, typesetting, editing, translation, graphics, printing and binding, all
                                under one roof, in Hebrew, English and Yiddish.
                            </p>
                            <p className="mt-4 font-body text-[0.95rem] leading-relaxed text-[#66575A]">
                                We work directly with the mechaber at every stage, because a sefer isn't a print job — it's a
                                legacy, and it only gets one first printing.
                            </p>

                            <div className="mt-7 flex flex-wrap items-center gap-4">
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
                        </Reveal>
                    </div>
                </section>

                <section className="bg-white px-6 py-24 lg:px-10">
                    <div className="mx-auto max-w-[1240px]">
                        <Reveal>
                            <span className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-[#8B6816]">
                                What We Stand For
                            </span>
                            <h2 className="mt-3 font-display text-3xl text-[#3A101A] sm:text-4xl">Our values</h2>
                        </Reveal>

                        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {VALUES.map((item, i) => (
                                <Reveal key={item.label} delay={i * 100}>
                                    <div className="group h-full rounded-sm border border-[#4A1521]/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(58,16,26,0.08)]">
                                        <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#F8F3EA] text-[#8B6816] transition-colors group-hover:bg-[#3A101A] group-hover:text-[#F7E9C2]">
                                            <item.icon size={19} strokeWidth={1.7} />
                                        </span>
                                        <div className="mt-5 font-display text-lg text-[#3A101A]">{item.label}</div>
                                        <p className="mt-2 font-body text-[0.85rem] leading-relaxed text-[#66575A]">{item.text}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-[#3A101A] px-6 py-24 lg:px-10">
                    <div className="mx-auto max-w-[900px]">
                        <Reveal>
                            <h2 className="font-display text-3xl text-[#F7E9C2] sm:text-4xl">A decade of growth</h2>
                        </Reveal>

                        <div className="mt-14">
                            {GROWTH.map((item, i) => (
                                <Reveal key={item.year} delay={i * 70}>
                                    <div className="flex gap-5 sm:gap-8">
                                        <div className="flex flex-col items-center">
                                            <span className="h-[10px] w-[10px] shrink-0 rounded-full border-2 border-[#C59B27] bg-[#3A101A]" />
                                            {i !== GROWTH.length - 1 && <span className="w-px flex-1 bg-[#C59B27]/20" />}
                                        </div>
                                        <div className={i !== GROWTH.length - 1 ? "pb-9" : ""}>
                                            <div className="font-display text-lg text-[#C59B27]">{item.year}</div>
                                            <p className="mt-1 font-body text-[0.92rem] leading-relaxed text-[#D6C6C2]">{item.text}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-[#F8F3EA] px-6 py-24 lg:px-10">
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
                                    <div className="group h-full rounded-sm border border-[#4A1521]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C59B27]/40 hover:shadow-[0_16px_32px_rgba(58,16,26,0.08)]">
                                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F3EA] text-[#8B6816] transition-colors group-hover:bg-[#C59B27]/15">
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

                <section className="bg-white px-6 py-24 lg:px-10">
                    <div className="mx-auto max-w-[1240px]">
                        <Reveal className="max-w-2xl">
                            <span className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-[#8B6816]">
                                The People Behind Machon Aleh Zayis
                            </span>
                            <h2 className="mt-3 font-display text-3xl text-[#3A101A] sm:text-4xl">Our team</h2>
                            <p className="mt-3 font-body text-[0.95rem] text-[#66575A]">
                                A dedicated group of editors, typesetters and printers — spanning transcription, design and
                                production.
                            </p>
                        </Reveal>

                        <Reveal delay={80}>
                            <span className="mt-14 block font-body text-xs font-semibold uppercase tracking-[0.14em] text-[#8B6816]">
                                Leadership
                            </span>
                        </Reveal>

                        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
                            {TEAM.map((member, i) => (
                                <TeamCard key={member.role} name={member.name} role={member.role} delay={(i % 6) * 90} />
                            ))}
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
            <Footer />
        </>
    );
}