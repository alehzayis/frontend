const values = [
  {
    label: "We Believe",
    quote: "\"Bnei Torah should have the opportunity to disseminate their work with pride and precision.\"",
    from: "#4A1521",
    to: "#2B0B12",
  },
  {
    label: "We Strive",
    quote: "\"To complement high-caliber Torah writing with gold-standard production.\"",
    from: "#1C3326",
    to: "#10201A",
  },
  {
    label: "We Deliver",
    quote: "\"An all-encompassing experience of professionalism and dedication.\"",
    from: "#1B2740",
    to: "#0F1729",
  },
];

export default function Values() {
  return (
    <section className="border-y border-[#C59B27]">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {values.map((v) => (
          <div
            key={v.label}
            style={{ backgroundImage: `linear-gradient(160deg, ${v.from} 0%, ${v.to} 100%)` }}
            className="relative overflow-hidden px-10 py-16 text-center lg:px-11 lg:py-[100px] lg:text-left"
          >
            <div
              style={{
                backgroundImage:
                  "repeating-linear-gradient(180deg, rgba(255,255,255,0.035) 0px 2px, transparent 2px 28px)",
              }}
              className="pointer-events-none absolute inset-0"
            />
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#E0BA53] via-[#C59B27] to-[#E0BA53] opacity-85" />

            <div className="relative">
              <div className="mb-[18px] font-display text-[1.65rem] font-normal tracking-[0.04em] text-[#E0BA53] [text-shadow:0_1px_0_rgba(0,0,0,0.35)]">
                {v.label}
              </div>
              <p className="font-body text-[1.06rem] font-light italic leading-[1.75] text-[#FBF7EF]/[0.92]">
                {v.quote}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}