// "use client";

// import { ChevronDown } from "lucide-react";

// const ANNOUNCEMENTS = ["Preserving Torah", "Publishing Seforim", "Building for Generations"];

// export default function TopBar() {
//   return (
//     <div className="hidden items-center justify-between bg-[#2B0B12] px-8 py-2 text-[0.72rem] tracking-[0.06em] text-[#F4E4B8] sm:flex">
//       <div className="flex items-center gap-2">
//         {ANNOUNCEMENTS.map((item, i) => (
//           <span key={item} className="flex items-center gap-2">
//             {i > 0 && <span className="text-[#C59B27]">•</span>}
//             {item}
//           </span>
//         ))}
//       </div>

//       <div className="flex items-center gap-3 text-[#EFE3D6]">
//         <a href="/about" className="transition-colors hover:text-white">About Our Mission</a>
//         <span className="text-[#5C3A44]">|</span>
//         <a href="/contact" className="transition-colors hover:text-white">Contact</a>
//         <span className="text-[#5C3A44]">|</span>
//         <button type="button" className="flex items-center gap-1 transition-colors hover:text-white">
//           English
//           <ChevronDown size={13} strokeWidth={2} />
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import { Menu } from "lucide-react";

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-[#4A1521]/10 bg-white px-5 lg:px-8">
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Open menu"
        className="flex h-9 w-9 items-center justify-center rounded-md text-[#4A1521] hover:bg-[#F8F3EA] lg:hidden"
      >
        <Menu size={20} strokeWidth={1.8} />
      </button>

      <span className="font-display text-[1.05rem] text-[#4A1521] lg:hidden">Admin</span>

      <div className="hidden flex-1 lg:block" />
    </header>
  );
}