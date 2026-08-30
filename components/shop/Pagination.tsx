type Props = {
  page: number;
  pages: number;
  onChange: (page: number) => void;
};

export default function Pagination({ page, pages, onChange }: Props) {
  if (pages <= 1) return null;

  const nums = Array.from({ length: pages }, (_, i) => i + 1).filter(
    (n) => n === 1 || n === pages || Math.abs(n - page) <= 1
  );

  return (
    <div className="flex items-center justify-center gap-[6px] pt-[8px]">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="h-[36px] rounded-[2px] border border-[#4A1521]/20 px-[12px] font-body text-[0.82rem] text-[#4A1521] disabled:opacity-40"
      >
        Prev
      </button>

      {nums.map((n, i) => (
        <span key={n} className="flex items-center gap-[6px]">
          {i > 0 && nums[i - 1] !== n - 1 && <span className="text-[#8B7B7E]">…</span>}
          <button
            type="button"
            onClick={() => onChange(n)}
            className={`h-[36px] w-[36px] rounded-[2px] font-body text-[0.82rem] ${
              n === page ? "bg-[#4A1521] text-[#FFF9EF]" : "border border-[#4A1521]/20 text-[#4A1521]"
            }`}
          >
            {n}
          </button>
        </span>
      ))}

      <button
        type="button"
        onClick={() => onChange(Math.min(pages, page + 1))}
        disabled={page === pages}
        className="h-[36px] rounded-[2px] border border-[#4A1521]/20 px-[12px] font-body text-[0.82rem] text-[#4A1521] disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}