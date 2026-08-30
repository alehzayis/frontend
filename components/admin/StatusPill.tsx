const styles: Record<string, string> = {
  published: "bg-green-50 text-green-700",
  draft: "bg-amber-50 text-amber-700",
  archived: "bg-black/5 text-[#1B2430]/50",
};

export default function StatusPill({ status }: { status: string }) {
  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-medium capitalize ${styles[status] || styles.archived}`}>
      {status}
    </span>
  );
}