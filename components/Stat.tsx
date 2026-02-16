export function Stat({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6">
      <div className="text-3xl font-normal tracking-tight text-ink">{value}</div>
      <div className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
        {label}
      </div>
      {note ? <div className="mt-3 text-sm text-ink/70">{note}</div> : null}
    </div>
  );
}
