import Image from "next/image";

const aboutFeatures = [
  {
    title: "Expert Guidance",
    line1: "From concept",
    line2: "to completion",
    italic2: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    title: "Personal Service",
    line1: "Your vision,",
    line2: "our dedication",
    italic2: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M20.5 3.5c-3 0-9 2-13 6s-6 10-6 13c3 0 9-2 13-6s6-10 6-13z" />
        <path d="M14 10 4.5 19.5" />
      </svg>
    ),
  },
  {
    title: "Lasting Impact",
    line1: "Beautiful seforim",
    line2: "for generations",
    italic2: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M6 2h12l4 6-10 13L2 8z" />
        <path d="M2 8h20M8 2l4 6-4 12M16 2l-4 6 4 12" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#F6EFE1] py-20 lg:py-28">
      <svg aria-hidden="true" className="pointer-events-none absolute -left-24 top-0 hidden h-full w-[420px] text-[#4A1521]/[0.05] lg:block" viewBox="0 0 300 700" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M40 700V260c0-77 62-140 139-140s139 63 139 140v440" />
        <path d="M75 700V270c0-58 46-105 104-105s104 47 104 105v430" />
      </svg>

      <span aria-hidden="true" className="pointer-events-none absolute right-[4%] top-1/2 hidden -translate-y-1/2 select-none font-hebrew text-[18rem] leading-none text-[#4A1521]/[0.035] xl:block">
        ל
      </span>

      <div className="relative mx-auto grid max-w-[1360px] grid-cols-1 gap-20 px-6 lg:grid-cols-[0.8fr_1fr] lg:items-center lg:gap-14 lg:px-10">
        <div className="relative mx-auto mt-[86px] h-[440px] w-[300px] lg:mx-0 lg:ml-8">
          <div aria-hidden="true" className="absolute -right-7 -top-7 h-full w-full border border-[#C59B27]/70" />

          <div className="group relative h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5">
            <Image src="/assets/bookcover.png" alt="A hand-bound sefer" fill priority sizes="300px" className="object-cover shadow-[20px_26px_50px_-20px_rgba(43,11,18,0.5)] transition-shadow duration-500 group-hover:shadow-[26px_32px_60px_-18px_rgba(43,11,18,0.6)]" />
          </div>

          <span aria-hidden="true" className="absolute -top-[26px] left-1/2 h-[26px] w-px -translate-x-1/2 bg-[#C59B27]/60" />
          <div className="absolute -top-[146px] left-1/2 flex h-[130px] w-[130px] -translate-x-1/2 flex-col items-center justify-center gap-1 rounded-full border border-[#C59B27]/50 bg-[#F6EFE1] text-center shadow-[0_16px_36px_-14px_rgba(43,11,18,0.3)]">
            <span className="mb-0.5 h-px w-4 bg-[#C59B27]" />
            <span className="font-body text-[0.6rem] uppercase tracking-[0.15em] text-[#4A1521]/75">Ideas</span>
            <span className="font-body text-[0.6rem] uppercase tracking-[0.15em] text-[#4A1521]/75">Words</span>
            <span className="font-body text-[0.6rem] uppercase tracking-[0.15em] text-[#4A1521]/75">Legacy</span>
            <span className="font-body text-[0.6rem] uppercase tracking-[0.15em] text-[#4A1521]/75">Forever</span>
            <span className="mt-0.5 h-px w-4 bg-[#C59B27]" />
          </div>

          <div className="absolute -bottom-8 -right-10 text-right font-body text-[0.66rem] uppercase leading-relaxed tracking-[0.14em] text-[#4A1521]/55">
            <p>More</p>
            <p>Than</p>
            <p>A Book</p>
            <p className="text-[#9C7A1E]">A Legacy</p>
            <span className="ml-auto mt-2 block h-px w-7 bg-[#C59B27]" />
          </div>
        </div>

        <div className="text-center lg:text-left">
          <span className="mb-4 inline-flex items-center gap-2.5 font-body text-xs font-semibold uppercase tracking-[0.24em] text-[#9C7A1E]">
            <span className="h-px w-5 bg-current opacity-60" />
            About the Atelier
          </span>

          <h2 className="mb-6 font-display text-[2.75rem] font-medium leading-[1.18] text-[#4A1521]">
            Publishing your sefer,
            <br />
            <em className="italic text-[#C08A1E]">personal manuscripts, and books.</em>
          </h2>

          <div className="font-body text-[1.05rem] leading-[1.85] text-[#241A1D]">
            <p className="mb-[18px] first-letter:float-none first-letter:pr-2 first-letter:pt-2 first-letter:font-display first-letter:text-[3.6rem] first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-[#4A1521] lg:first-letter:float-left">
              Publishing a sefer or a family manuscript is a momentous occasion — the process should be a stress-free celebration of a significant goal. Our team of skilled professionals shares your excitement and enthusiasm, guiding you through a smooth production process with precision and dedication throughout.
            </p>
            <p>
              We specialize in publishing seforim in Hebrew and English, as well as all types of books, and will step in at any stage of the process based on your needs. Together, we&apos;ll work to create your vision in print.
            </p>
          </div>

          <div className="my-8 h-px w-16 bg-[#C59B27]/50 mx-auto lg:mx-0" />

          <div className="flex flex-wrap items-start justify-center gap-x-6 gap-y-6 lg:flex-nowrap lg:justify-start lg:divide-x lg:divide-[#4A1521]/10">
            {aboutFeatures.map((f, i) => (
              <div key={f.title} className={`flex max-w-[190px] items-start gap-3 ${i > 0 ? "lg:pl-6" : ""}`}>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C59B27]/40 bg-[#F7ECD9] text-[#4A1521]">{f.icon}</span>
                <div>
                  <p className="font-body text-[0.76rem] font-semibold uppercase tracking-[0.08em] text-[#4A1521]">{f.title}</p>
                  <p className="mt-1 font-body text-[0.85rem] leading-snug text-[#4A3A38]">
                    {f.line1}
                    <br />
                    {f.italic2 ? <em className="italic">{f.line2}</em> : f.line2}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-1 text-right font-body text-[0.62rem] uppercase leading-relaxed tracking-[0.15em] text-[#4A1521]/45 xl:flex">
        <span>Tradition</span>
        <span>In Print</span>
        <span>For A</span>
        <span>Brighter</span>
        <span>Tomorrow</span>
        <span className="mt-3 h-px w-8 bg-[#C59B27]/50" />
      </div>
    </section>
  );
}