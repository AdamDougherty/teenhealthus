"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

interface Partner {
  name: string;
  logo: string;
  invertLogo?: boolean;
  darken?: boolean;
  highQuality?: boolean;
  size?: "sm-lg" | "sm-md" | "md" | "lg";  // for logos with excessive whitespace in source image
}

const PARTNERS: Partner[] = [
  { name: "Whole Foods Market", logo: "/partners/wholefood.png" },
  { name: "Betty Lou's", logo: "/partners/bettylous.png", size: "md" },
  { name: "Intake", logo: "/partners/intake.png", invertLogo: true },
  { name: "Marquis", logo: "/partners/marquis.svg" },
  { name: "Oceanblue", logo: "/images/shared/oceanblue-logo.png", size: "lg" },
  { name: "Perfect Hydration", logo: "/partners/perfecthydration.png", size: "md" },
  { name: "Primal Kitchen", logo: "/partners/primalkitchen.png", size: "sm-lg" },
  { name: "Purely Elizabeth", logo: "/partners/purelyelizabeth.png" },
  { name: "Boost Oxygen", logo: "/partners/boostoxygen.png" },
  { name: "Carlson", logo: "/partners/carlson.png", size: "sm-md" },
  { name: "Emergen-C", logo: "/partners/emergenc.png" },
  { name: "Gatorade", logo: "/partners/gatorade.png" },
  { name: "Guayakí", logo: "/partners/guayaki.png" },
  { name: "Kate's Real Food", logo: "/partners/katesrealfood.png" },
  { name: "Olyra", logo: "/partners/olyra.png" },
  { name: "OWYN", logo: "/partners/owyn.png" },
  { name: "Nature's Turn", logo: "/images/shared/natures-turn-logo.jpg", size: "sm-lg" },
  { name: "Trace", logo: "/partners/trace.png" },
  { name: "VenturePal", logo: "/partners/venturepal.png" },
  { name: "Zahler", logo: "/partners/zahler.png" },
  { name: "Earth Harmony", logo: "/partners/earthharmony.png" },
  { name: "Food for Life", logo: "/images/shared/food-for-life-logo.jpg" },
  { name: "Ancient Nutrition", logo: "/images/shared/ancient-nutrition-logo.png", size: "lg" },
  { name: "Giboard by Gibbon", logo: "/images/shared/giboard-by-gibson-logo.png" },
  { name: "Nui Snacks", logo: "/images/shared/nui-snacks-logo.png", size: "md" },
  { name: "Orgain", logo: "/images/shared/orgain-logo-transparent.png" },
  { name: "Orzax", logo: "/images/shared/orzax-logo.jpg" },
  { name: "Nordic Naturals", logo: "/images/shared/nordic-naturals-logo.png", size: "md" },
  { name: "Melin", logo: "/images/shared/melin-logo.png" },
  { name: "LightStim", logo: "/images/shared/lightstim-logo.png" },
  { name: "Flax4Life", logo: "/images/shared/flax4life-logo.png" },
  { name: "Koia", logo: "/images/shared/koia-logo.png" },
  { name: "Laird Superfood", logo: "/images/shared/laird-superfood-logo.png", darken: true },
  { name: "Conscious Step", logo: "/images/shared/conscious-step-logo-v2.png" },
  { name: "Bosu", logo: "/images/shared/bosu-logo.png" },
  { name: "Mellanmal Inc.", logo: "/images/shared/mellanmal-inc-logo.png" },
  { name: "Hito Pak", logo: "/images/shared/hito-pak-logo.png", highQuality: true },
  { name: "Forager Project", logo: "/images/shared/forager-project-logo-v2.png" },
  { name: "Dr. Bronner's", logo: "/images/shared/dr-bronners-logo.png", size: "lg" },
  { name: "Protein Puck", logo: "/images/shared/protein-puck-logo.jpg", highQuality: true },
  { name: "Goodstack", logo: "/images/shared/goodstack-logo.png" },
  { name: "Salesforce", logo: "/partners/salesforce.png", size: "lg" },
  { name: "Google", logo: "/partners/google.svg" },
  { name: "Slack", logo: "/images/shared/slack-logo.png" },
  { name: "NetSuite", logo: "/images/shared/netsuite-logo.png" },
];

const LOGOS_PER_PAGE = 15;
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

  const rows = [
    pagePartners.slice(0, 5),
    pagePartners.slice(5, 10),
    pagePartners.slice(10, 15),
  ];

  return (
    <section className="bg-[#f9f6f2] py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              In good company
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink/80">
              Since 2022, we&apos;ve teamed up with 250+ companies to turn
              surplus into life-changing impact—across every aisle,
              from nutrition to wellness and beyond. Our partnerships are as
              unique as every company in our community. Whether you&apos;re a
              national brand or a local artisan, it&apos;s never been easier to
              make generosity on&#8209;brand.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-16 max-w-5xl">
          {/* Mobile: single 3-col grid for all 15 logos, arrows centered vertically */}
          <div className="relative sm:hidden">
            <button
              onClick={prev}
              aria-label="Previous page"
              className="absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-ink/30 transition-colors hover:text-ink/70"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            <div key={`m-${page}`} className="grid grid-cols-3 gap-x-2 gap-y-6 px-10">
              {pagePartners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex h-20 items-center justify-center"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={60}
                    quality={partner.highQuality ? 100 : 75}
                    unoptimized={partner.highQuality}
                    className={`h-auto max-w-full object-contain mix-blend-multiply opacity-90 transition-opacity duration-200 hover:opacity-100 ${
                      partner.size === "lg" ? "max-h-[80px]" : partner.size === "md" ? "max-h-[68px]" : partner.size === "sm-md" ? "max-h-[64px]" : partner.size === "sm-lg" ? "max-h-[60px]" : "max-h-[50px]"
                    } ${partner.invertLogo ? "invert" : ""} ${partner.darken ? "brightness-0" : ""} ${partner.name === "Oceanblue" ? "rounded-md" : ""}`}
                  />
                </div>
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next page"
              className="absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-ink/30 transition-colors hover:text-ink/70"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Desktop: 3 rows × 5 cols with arrows on the middle row */}
          <div className="hidden sm:block">
            {rows.map((row, rowIdx) => (
              <div
                key={`d-${page}-${rowIdx}`}
                className="relative flex items-center justify-center"
              >
                {rowIdx === 1 && (
                  <button
                    onClick={prev}
                    aria-label="Previous page"
                    className="absolute -left-12 z-10 flex h-10 w-10 items-center justify-center text-ink/30 transition-colors hover:text-ink/70"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                  </button>
                )}

                <div className="grid w-full grid-cols-5">
                  {row.map((partner) => (
                    <div
                      key={partner.name}
                      className="flex h-28 items-center justify-center px-4"
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={140}
                        height={60}
                        quality={partner.highQuality ? 100 : 75}
                        unoptimized={partner.highQuality}
                        className={`h-auto w-auto object-contain mix-blend-multiply opacity-90 transition-opacity duration-200 hover:opacity-100 ${
                          partner.size === "lg" ? "max-h-[140px] max-w-[250px]" : partner.size === "md" ? "max-h-[100px] max-w-[180px]" : partner.size === "sm-md" ? "max-h-[91px] max-w-[170px]" : partner.size === "sm-lg" ? "max-h-[82px] max-w-[160px]" : "max-h-[66px] max-w-[145px]"
                        } ${partner.invertLogo ? "invert" : ""} ${partner.darken ? "brightness-0" : ""} ${partner.name === "Oceanblue" ? "rounded-md" : ""}`}
                      />
                    </div>
                  ))}
                </div>

                {rowIdx === 1 && (
                  <button
                    onClick={next}
                    aria-label="Next page"
                    className="absolute -right-12 z-10 flex h-10 w-10 items-center justify-center text-ink/30 transition-colors hover:text-ink/70"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>

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
