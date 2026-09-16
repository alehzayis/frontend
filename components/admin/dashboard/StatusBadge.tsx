import { ORDER_STATUS_META } from "./types";

export default function StatusBadge({ status }: { status: string }) {
  const meta = ORDER_STATUS_META[status] || { label: status, color: "#8B7B7E" };
  return (
    <span className="inline-flex items-center gap-[6px] rounded-full border border-[#4A1521]/10 px-[8px] py-[3px] font-body text-[0.72rem] font-medium text-[#3A101A]">
      <span className="h-[7px] w-[7px] shrink-0 rounded-full" style={{ backgroundColor: meta.color }} />
      {meta.label}
    </span>
  );
}
