import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-white p-6 shadow-[0_1px_0_rgba(35,31,32,0.04)]",
        className
      )}
    >
      {children}
    </div>
  );
}
