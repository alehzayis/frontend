type StatCardProps = {
  label: string;
  value: string | number;
  icon: React.ElementType;
};

export default function StatCard({ label, value, icon: Icon }: StatCardProps) {
  return (
    <div className="rounded-sm border border-[#4A1521]/10 bg-white px-6 py-5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="font-body text-xs font-semibold uppercase tracking-wide text-[#8B6816]">{label}</span>
        <Icon size={18} strokeWidth={1.6} className="text-[#C59B27]" />
      </div>
      <div className="mt-3 font-display text-3xl text-[#3A101A]">{value}</div>
    </div>
  );
}