"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal and smooth anchor scrolling for the Food as Medicine page.
 *
 * Ported from the inline <script> of the original standalone
 * public/food-as-medicine.html so the page behaves exactly as before.
 * The rest of the site uses <Reveal>, but this page has ~40 .rv elements
 * driven by its own CSS, so the original observer is kept intact.
 */
export function FamEffects() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".fam .rv"));

    // If the browser can't observe intersections, just show everything.
    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("in"));
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (!entry.isIntersecting) return;
          timers.push(setTimeout(() => entry.target.classList.add("in"), i * 60));
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08 }
    );

    targets.forEach((el) => observer.observe(el));

    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest<HTMLAnchorElement>(
        '.fam a[href^="#"]'
      );
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    document.addEventListener("click", onClick);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", onClick);
      timers.forEach(clearTimeout);
    };
  }, []);

  return null;
}
