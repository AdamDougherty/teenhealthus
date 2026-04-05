"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

interface Partner {
  name: string;
  logo: string;
  skipBlend?: boolean;  // skip mix-blend-multiply (for logos with intentional colored backgrounds)
  invertLogo?: boolean; // invert colors (for white-on-transparent logos)
  rounded?: boolean;    // apply rounded corners
  size?: "lg" | "xl";   // "lg" = ~45% larger, "xl" = ~75% larger
}

const PARTNERS: Partner[] = [
  { name: "Whole Foods Market", logo: "/partners/wholefood.png" },
  { name: "Betty Lou's", logo: "/partners/bettylous.png", size: "lg" },
  { name: "Intake", logo: "/partners/intake.png", skipBlend: true, invertLogo: true },
  { name: "Google", logo: "/partners/google.svg" },
  { name: "Salesforce", logo: "/images/shared/salesforce-logo.jpg" },
  { name: "Marquis", logo: "/partners/marquis.svg" },
  { name: "Oceanblue", logo: "/partners/oceanblue.jpg", skipBlend: true, rounded: true },
  { name: "Perfect Hydration", logo: "/partners/perfecthydration.png" },
  { name: "Primal Kitchen", logo: "/partners/primalkitchen.png" },
  { name: "Purely Elizabeth", logo: "/partners/purelyelizabeth.png" },
  { name: "Boost Oxygen", logo: "/partners/boostoxygen.png" },
  { name: "Carlson", logo: "/partners/carlson.png" },
  { name: "Emergen-C", logo: "/partners/emergenc.png" },
  { name: "Gatorade", logo: "/partners/gatorade.png" },
  { name: "Guayakí", logo: "/partners/guayaki.png" },
  { name: "Kate's Real Food", logo: "/partners/katesrealfood.png" },
  { name: "Olyra", logo: "/partners/olyra.png" },
  { name: "OWYN", logo: "/partners/owyn.png" },
  { name: "Partake", logo: "/partners/partake.png" },
  { name: "Trace", logo: "/partners/trace.png" },
  { name: "VenturePal", logo: "/partners/venturepal.png" },
  { name: "Zahler", logo: "/partners/zahler.png" },
  { name: "Earth Harmony", logo: "/partners/earthharmony.png" },
  { name: "Anthropic", logo: "/partners/anthropic.png", size: "xl" },
];

const LOGOS_PER_PAGE = 15; // 5 columns × 3 rows
const TOTAL_PAGES = Math.ceil(PARTNERS.length / LOGOS_PER_PAGE);

export function PartnerLogoGrid() {
  const [page, setPage] = useState(0);

  const next = useCallback(
    () => setPage((p) => (p + 1) % TOTAL_PAGES),
    [],
  );
  const prev = useCallback(
    () => setPage((p) => (p - 1 + TOTAL_PAGES) % TOTAL_PAGES),
    [],
  );

  const pagePartners = PARTNERS.slice(
    page * LOGOS_PER_PAGE,
    page * LOGOS_PER_PAGE + LOGOS_PER_PAGE,
  );

  // Split into 3 rows of 5
  const rows = [
    pagePartners.slice(0, 5),
    pagePartners.slice(5, 10),
    pagePartners.slice(10, 15),
  ];

  return (
    <section className="bg-[#f5f0eb] py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              In good company
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink/60">
              Our partnerships are as unique as every company in our community.
              Whether you&apos;re a national brand or a local artisan,
              it&apos;s never been easier to make generosity on&#8209;brand.
            </p>
          </div>
        </Reveal>

        {/* Logo slider */}
        <div className="mx-auto mt-16 max-w-5xl">
          {rows.map((row, rowIdx) => (
            <div
              key={`${page}-${rowIdx}`}
              className="relative flex items-center justify-center"
            >
              {/* Left arrow — only on middle row */}
              {rowIdx === 1 && (
                <button
                  onClick={prev}
                  aria-label="Previous page"
                  className="absolute -left-4 z-10 flex h-10 w-10 items-center justify-center text-ink/30 transition-colors hover:text-ink/70 sm:-left-12"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Logo cells */}
              <div className="grid w-full grid-cols-3 sm:grid-cols-5">
                {row.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex h-24 items-center justify-center px-4 sm:h-28"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={140}
                      height={60}
                      className={`h-auto w-auto object-contain opacity-90 transition-opacity duration-200 hover:opacity-100 ${
                        partner.size === "xl" ? "max-h-[115px] max-w-[210px]" : partner.size === "lg" ? "max-h-[96px] max-w-[180px]" : "max-h-[66px] max-w-[145px]"
                      } ${partner.skipBlend ? "" : "mix-blend-multiply"} ${
                        partner.invertLogo ? "invert" : ""
                      } ${partner.rounded ? "rounded-md" : ""}`}
                    />
                  </div>
                ))}
              </div>

              {/* Right arrow — only on middle row */}
              {rowIdx === 1 && (
                <button
                  onClick={next}
                  aria-label="Next page"
                  className="absolute -right-4 z-10 flex h-10 w-10 items-center justify-center text-ink/30 transition-colors hover:text-ink/70 sm:-right-12"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          ))}

          {/* Pagination dots */}
          <div className="mt-8 flex items-center justify-center gap-2.5">
            {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                  i === page ? "bg-ink/70" : "bg-ink/20 hover:bg-ink/40"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
