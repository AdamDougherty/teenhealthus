"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/Button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white text-ink hover:bg-black/5"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <span className="text-xl leading-none">{open ? "×" : "≡"}</span>
      </button>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <div
        className={cn(
          "fixed right-0 top-0 z-[60] h-full w-[86vw] max-w-sm border-l border-border bg-white p-6 shadow-soft transition-transform",
          open ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between">
          <div className="text-sm font-black tracking-tight text-ink">Menu</div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-xl px-3 py-2 text-sm font-semibold text-ink hover:bg-black/5"
          >
            Close
          </button>
        </div>

        <nav className="mt-6 space-y-2 text-sm font-semibold">
          {[
            ["/get-involved", "Get involved"],
            ["/programs", "Programs"],
            ["/learn", "Our Why"],
            ["/about", "About"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 text-ink hover:bg-black/5"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="mt-8">
          <Button href="https://www.classy.org/give/665776/#!/donation/checkout" variant="primary" className="w-full">
            Donate
          </Button>
        </div>

        <p className="mt-6 text-xs text-ink/60">
          Tip: keep mobile nav short and action-oriented.
        </p>
      </div>
    </div>
  );
}
