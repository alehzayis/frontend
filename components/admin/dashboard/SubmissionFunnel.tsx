"use client";

import { SUBMISSION_ORDER, SUBMISSION_STATUS_META } from "./types";

export default function SubmissionFunnel({ data }: { data: { status: string; count: number }[] }) {
  const byStatus = new Map(data.map((d) => [d.status, d.count]));
  const max = Math.max(1, ...SUBMISSION_ORDER.map((s) => byStatus.get(s) || 0));

  return (
    <div className="h-full rounded-[14px] border border-[#4A1521]/10 bg-white p-[18px]">
      <h3 className="font-body text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-[#8B6816]">
        Manuscript Pipeline
      </h3>

      <div className="mt-[16px] space-y-[14px]">
        {SUBMISSION_ORDER.map((status) => {
          const meta = SUBMISSION_STATUS_META[status];
          const count = byStatus.get(status) || 0;
          return (
            <div key={status}>
              <div className="mb-[4px] flex items-center justify-between font-body text-[0.78rem]">
                <span className="text-[#3A101A]">{meta.label}</span>
                <span className="font-semibold tabular-nums text-[#3A101A]">{count}</span>
              </div>
              <div className="h-[14px] w-full overflow-hidden rounded-[4px] bg-[#F8F3EA]">
                <div
                  className="h-full rounded-[4px] transition-[width] duration-300"
                  style={{ width: `${Math.max(4, (count / max) * 100)}%`, backgroundColor: meta.color }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
