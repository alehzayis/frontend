"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, Phone, Printer as FaxIcon } from "lucide-react";
import api from "@/lib/api";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const PROJECT_TYPES = ["General Inquiry", "Request a Quote", "An Existing Project", "Something Else"];

type FormState = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: PROJECT_TYPES[0],
  message: "",
};

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

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Please tell us your name.";
    if (!form.email.trim()) nextErrors.email = "Please add an email address.";
    else if (!isValidEmail(form.email)) nextErrors.email = "That email doesn't look right.";
    if (!form.message.trim()) nextErrors.message = "Tell us a bit about your project.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      await api.post("/api/contact", form);
      setStatus("success");
      setForm(EMPTY_FORM);
    } catch {
      setStatus("error");
    }
  };

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
              Contact Us
            </span>
            <h1 className="mx-auto mt-5 max-w-2xl font-display text-5xl leading-[1.12] text-[#F7E9C2] sm:text-6xl">
              Your vision is entrusted <span className="text-[#C59B27]">in good hands.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg font-body text-[0.98rem] leading-relaxed text-[#D6C6C2]">
              We're here to help every step of the way. Tell us about your sefer or manuscript and a member of
              our team will reach out as soon as possible.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 lg:grid-cols-[1fr_360px]">
          <Reveal>
            <div className="rounded-sm border border-[#4A1521]/10 bg-white p-7 sm:p-10">
              {status === "success" ? (
                <div className="flex flex-col items-center py-14 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3F7D4B]/10 text-[#3F7D4B]">
                    <CheckCircle2 size={26} strokeWidth={1.8} />
                  </span>
                  <h2 className="mt-5 font-display text-2xl text-[#3A101A]">Message sent.</h2>
                  <p className="mt-2 max-w-sm font-body text-[0.9rem] text-[#66575A]">
                    Thank you for reaching out — a member of our team will get back to you as soon as possible.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 font-body text-sm font-semibold text-[#8B6816] underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="font-body text-sm font-medium text-[#3A101A]">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        className="mt-2 w-full rounded-sm border border-[#4A1521]/15 bg-[#F8F3EA] px-4 py-2.5 font-body text-sm text-[#3A101A] outline-none transition-colors focus:border-[#C59B27]"
                      />
                      {errors.name && <p className="mt-1.5 font-body text-xs text-[#A03B3B]">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="font-body text-sm font-medium text-[#3A101A]">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className="mt-2 w-full rounded-sm border border-[#4A1521]/15 bg-[#F8F3EA] px-4 py-2.5 font-body text-sm text-[#3A101A] outline-none transition-colors focus:border-[#C59B27]"
                      />
                      {errors.email && <p className="mt-1.5 font-body text-xs text-[#A03B3B]">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="font-body text-sm font-medium text-[#3A101A]">
                        Phone <span className="text-[#8B7B7E]">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        className="mt-2 w-full rounded-sm border border-[#4A1521]/15 bg-[#F8F3EA] px-4 py-2.5 font-body text-sm text-[#3A101A] outline-none transition-colors focus:border-[#C59B27]"
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="font-body text-sm font-medium text-[#3A101A]">
                        What's This About?
                      </label>
                      <select
                        id="projectType"
                        value={form.projectType}
                        onChange={(e) => updateField("projectType", e.target.value)}
                        className="mt-2 w-full rounded-sm border border-[#4A1521]/15 bg-[#F8F3EA] px-4 py-2.5 font-body text-sm text-[#3A101A] outline-none transition-colors focus:border-[#C59B27]"
                      >
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="font-body text-sm font-medium text-[#3A101A]">
                        Tell Us About Your Project
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={form.message}
                        onChange={(e) => updateField("message", e.target.value)}
                        className="mt-2 w-full resize-none rounded-sm border border-[#4A1521]/15 bg-[#F8F3EA] px-4 py-2.5 font-body text-sm text-[#3A101A] outline-none transition-colors focus:border-[#C59B27]"
                      />
                      {errors.message && (
                        <p className="mt-1.5 font-body text-xs text-[#A03B3B]">{errors.message}</p>
                      )}
                    </div>
                  </div>

                  {status === "error" && (
                    <p className="mt-5 font-body text-sm text-[#A03B3B]">
                      Something went wrong sending your message. Please try again, or reach us directly at
                      732-513-3466.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group mt-7 inline-flex items-center gap-2 rounded-sm bg-[#3A101A] px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-[0.05em] text-[#F7E9C2] transition-colors hover:bg-[#4A1521] disabled:opacity-60"
                  >
                    {status === "submitting" ? "Sending..." : "Get a Quote"}
                    {status !== "submitting" && (
                      <ArrowRight size={16} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-5">
              <a
                href="tel:+17325133466"
                className="group flex items-start gap-4 rounded-sm border border-[#4A1521]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C59B27]/40 hover:shadow-[0_16px_32px_rgba(58,16,26,0.08)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-[#F8F3EA] text-[#8B6816] transition-colors group-hover:bg-[#3A101A] group-hover:text-[#F7E9C2]">
                  <Phone size={18} strokeWidth={1.8} />
                </span>
                <div>
                  <div className="font-body text-xs font-semibold uppercase tracking-[0.1em] text-[#8B7B7E]">
                    Call Us
                  </div>
                  <div className="mt-1 font-display text-lg text-[#3A101A]">732-513-3466</div>
                </div>
              </a>

              <a
                href="mailto:publish@alehzayis.com"
                className="group flex items-start gap-4 rounded-sm border border-[#4A1521]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C59B27]/40 hover:shadow-[0_16px_32px_rgba(58,16,26,0.08)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-[#F8F3EA] text-[#8B6816] transition-colors group-hover:bg-[#3A101A] group-hover:text-[#F7E9C2]">
                  <Mail size={18} strokeWidth={1.8} />
                </span>
                <div>
                  <div className="font-body text-xs font-semibold uppercase tracking-[0.1em] text-[#8B7B7E]">
                    Email Us
                  </div>
                  <div className="mt-1 break-all font-display text-lg text-[#3A101A]">publish@alehzayis.com</div>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-sm border border-[#4A1521]/10 bg-white p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-[#F8F3EA] text-[#8B6816]">
                  <FaxIcon size={18} strokeWidth={1.8} />
                </span>
                <div>
                  <div className="font-body text-xs font-semibold uppercase tracking-[0.1em] text-[#8B7B7E]">
                    Fax
                  </div>
                  <div className="mt-1 font-display text-lg text-[#3A101A]">732-865-7002</div>
                </div>
              </div>

              <div className="rounded-sm border border-[#C59B27]/30 bg-[#3A101A] p-6">
                <div className="font-display text-lg text-[#F7E9C2]">Prefer to talk it through?</div>
                <p className="mt-2 font-body text-[0.85rem] leading-relaxed text-[#D6C6C2]">
                  Give us a call — we're happy to walk through what your sefer or manuscript needs before you put
                  anything in writing.
                </p>
                <Link
                  href="/services"
                  className="mt-4 inline-block font-body text-sm font-semibold text-[#C59B27] underline underline-offset-4"
                >
                  See what we offer
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}