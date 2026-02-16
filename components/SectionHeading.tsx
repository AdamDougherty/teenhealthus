import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-normal tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink/70 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
