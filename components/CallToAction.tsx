export default function CallToAction() {
  return (
    <section
      id="quote"
      className="relative overflow-hidden py-20 lg:py-[110px]"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 700px 400px at 50% 0%, rgba(197,155,39,0.14), transparent 60%), linear-gradient(180deg, #2B0B12 0%, #1B060B 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="relative mx-auto max-w-[760px] border border-[#C59B27]/[0.38] bg-[#FBF7EF]/[0.03] px-8 py-12 text-center before:absolute before:left-[7px] before:top-[7px] before:h-[9px] before:w-[9px] before:border-l before:border-t before:border-[#E0BA53] before:content-[''] after:absolute after:bottom-[7px] after:right-[7px] after:h-[9px] after:w-[9px] after:border-b after:border-r after:border-[#E0BA53] after:content-['']">
          <h2 className="mb-4 font-display text-[2.4rem] font-normal text-[#FBF7EF] sm:text-[2.85rem]">
            Your Vision Is Entrusted in Good Hands
          </h2>

          <p className="mb-9 font-body text-[1.1rem] text-[#FBF7EF]/[0.72]">
            We&apos;re here to help, every step of the way — from manuscript to masterpiece.
          </p>

          <a
            href="mailto:publish@alehzayis.com"
            className="inline-flex items-center justify-center gap-2 rounded-[1px] border border-[#C59B27] bg-gradient-to-b from-[#E0BA53] to-[#C59B27] px-8 py-4 font-body text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-[#241505] shadow-[0_1px_0_rgba(255,255,255,0.35)_inset,0_10px_22px_-10px_rgba(197,155,39,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_16px_28px_-12px_rgba(197,155,39,0.6)]"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}