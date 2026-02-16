import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type ButtonType = "button" | "submit" | "reset";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sun focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const variants: Record<Variant, string> = {
  primary: "bg-sun text-ink hover:brightness-95 shadow-soft",
  secondary: "bg-ink text-white hover:bg-black",
  ghost: "bg-transparent text-ink hover:bg-black/5",
};

export function Button({
  href,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  className,
  children,
  target,
  rel,
}: {
  href?: string;
  onClick?: () => void;
  type?: ButtonType;
  disabled?: boolean;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}) {
  const classes = cn(
    base,
    variants[variant],
    disabled ? "opacity-60 pointer-events-none" : "",
    className
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        target={target ?? (external ? "_blank" : undefined)}
        rel={rel ?? (external ? "noreferrer" : undefined)}
        aria-disabled={disabled}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
