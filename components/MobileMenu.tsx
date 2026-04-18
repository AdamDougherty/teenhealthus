"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/Button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function toggleSection(section: string) {
    setExpandedSection((prev) => (prev === section ? null : section));
  }

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

        <nav className="mt-6 space-y-1 text-sm font-semibold">
          {/* Get Involved — expandable */}
          <div>
            <button
              type="button"
              onClick={() => toggleSection("get-involved")}
              className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-ink hover:bg-black/5"
            >
              Get Involved
              <svg
                className={cn(
                  "h-3.5 w-3.5 opacity-50 transition-transform",
                  expandedSection === "get-involved" && "rotate-180"
                )}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-200",
                expandedSection === "get-involved" ? "max-h-60" : "max-h-0"
              )}
            >
              <div className="space-y-1 pb-1 pl-3">
                {[
                  ["/get-involved", "Overview"],
                  ["/give-monthly", "Give Monthly"],
                  ["/program-sponsor", "Become a Program Sponsor"],
                  ["/brand-partner", "Become a Brand Partner"],
                  ["/volunteer", "Volunteer"],
                ].map(([href, label]) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink/70 hover:bg-black/5 hover:text-ink"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* About — expandable */}
          <div>
            <button
              type="button"
              onClick={() => toggleSection("about")}
              className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-ink hover:bg-black/5"
            >
              About
              <svg
                className={cn(
                  "h-3.5 w-3.5 opacity-50 transition-transform",
                  expandedSection === "about" && "rotate-180"
                )}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-200",
                expandedSection === "about" ? "max-h-60" : "max-h-0"
              )}
            >
              <div className="space-y-1 pb-1 pl-3">
                {[
                  ["/about", "Overview"],
                  ["/our-work", "Our Work"],
                  ["/how-we-work", "How We Work"],
                  ["/our-story", "Our Story"],
                  ["/leadership", "Leadership & Advisors"],
                ].map(([href, label]) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink/70 hover:bg-black/5 hover:text-ink"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Standalone links */}
          <Link
            href="/our-why"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-3 py-3 text-ink hover:bg-black/5"
          >
            Our Why
          </Link>
          <Link
            href="/youth-nutrition-initiative"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-3 py-3 text-ink hover:bg-black/5"
          >
            Youth Nutrition
          </Link>
        </nav>

        <div className="mt-8">
          <Button href="https://www.classy.org/give/665776/#!/donation/checkout" variant="primary" className="w-full" style={{ backgroundColor: '#FF6B00', color: 'white' }}>
            Donate
          </Button>
        </div>
      </div>
    </div>
  );
}
