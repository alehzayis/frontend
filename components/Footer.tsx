import { Phone, Mail, Printer } from "lucide-react";

const quickLinks = [
  { label: "Our Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Get a Quote", href: "#quote" },
  { label: "Submit Your Work", href: "#quote" },
  { label: "Shop", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1B060B] pt-16 text-[#FBF7EF] lg:pt-[76px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-[60px]">
          <div>
            <span className="mb-4 block font-display text-[1.4rem] font-semibold uppercase tracking-[0.04em] text-[#FBF7EF]">
              Machon Aleh Zayis
            </span>
            <p className="max-w-[300px] font-body text-[0.95rem] leading-[1.65] text-[#FBF8F3]/[0.66]">
              Complete publishing services for today&apos;s Torah community.
            </p>
          </div>

          <div>
            <h4 className="mb-5 font-display text-[1.18rem] uppercase tracking-[0.08em] text-[#E0BA53]">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="font-body text-[0.9rem] text-[#FBF8F3]/[0.78] transition-colors hover:text-[#E0BA53]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-display text-[1.18rem] uppercase tracking-[0.08em] text-[#E0BA53]">Contact</h4>
            <ul className="space-y-3 font-body text-[0.9rem] text-[#FBF8F3]/[0.78]">
              <li className="flex items-center gap-2.5">
                <Phone size={16} strokeWidth={1.6} className="shrink-0 text-[#E0BA53]" />
                Phone: 732-513-3466
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} strokeWidth={1.6} className="shrink-0 text-[#E0BA53]" />
                Email: publish@alehzayis.com
              </li>
              <li className="flex items-center gap-2.5">
                <Printer size={16} strokeWidth={1.6} className="shrink-0 text-[#E0BA53]" />
                Fax: 732-865-7002
              </li>
            </ul>
          </div>
        </div>

        <div aria-hidden="true" className="flex h-[5px] w-full">
          <span className="flex-1 bg-[#4A1521]" />
          <span className="flex-1 bg-[#1C3326]" />
          <span className="flex-1 bg-[#1B2740]" />
          <span className="flex-1 bg-[#4A2A1B]" />
          <span className="flex-1 bg-gradient-to-r from-[#C59B27] to-[#E0BA53]" />
        </div>

        <div className="border-t border-[#FBF8F3]/[0.12] py-[26px] text-center font-body text-[0.8rem] tracking-[0.05em] text-[#FBF8F3]/50">
          &copy; Machon Aleh Zayis. All rights reserved. Crafting timeless seforim with excellence.
        </div>
      </div>
    </footer>
  );
}