"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

type Status = "idle" | "sending" | "sent" | "error";

export default function DonateProductPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  /* ── Partner carousel state ── */
  const partners = Array.from({ length: 10 }, (_, i) => `Partner ${i + 1}`);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const CARD_W = 540; // px width of each card + gap (shows ~2 at a time)

  const updateActiveIndex = useCallback(() => {
    if (!scrollRef.current) return;
    const idx = Math.round(scrollRef.current.scrollLeft / CARD_W);
    setActiveIdx(idx);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateActiveIndex, { passive: true });
    return () => el.removeEventListener("scroll", updateActiveIndex);
  }, [updateActiveIndex]);

  const scrollTo = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = CARD_W * 2;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const scrollToDot = (idx: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      left: idx * CARD_W,
      behavior: "smooth",
    });
  };

  const totalDots = Math.max(1, partners.length - 1);

  /* ── Our Partners grid carousel state ── */
  const allPartners = Array.from({ length: 36 }, (_, i) => `Logo ${i + 1}`);
  const GRID_SIZE = 12; // 4 cols × 3 rows per page
  const partnerPages = Array.from(
    { length: Math.ceil(allPartners.length / GRID_SIZE) },
    (_, i) => allPartners.slice(i * GRID_SIZE, i * GRID_SIZE + GRID_SIZE)
  );
  const opScrollRef = useRef<HTMLDivElement>(null);
  const [opActiveIdx, setOpActiveIdx] = useState(0);

  const updateOpIndex = useCallback(() => {
    if (!opScrollRef.current) return;
    const pageW = opScrollRef.current.clientWidth;
    const idx = Math.round(opScrollRef.current.scrollLeft / pageW);
    setOpActiveIdx(idx);
  }, []);

  useEffect(() => {
    const el = opScrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateOpIndex, { passive: true });
    return () => el.removeEventListener("scroll", updateOpIndex);
  }, [updateOpIndex]);

  const opScrollTo = (dir: "left" | "right") => {
    if (!opScrollRef.current) return;
    const pageW = opScrollRef.current.clientWidth;
    opScrollRef.current.scrollBy({
      left: dir === "left" ? -pageW : pageW,
      behavior: "smooth",
    });
  };

  const opScrollToDot = (idx: number) => {
    if (!opScrollRef.current) return;
    const pageW = opScrollRef.current.clientWidth;
    opScrollRef.current.scrollTo({
      left: idx * pageW,
      behavior: "smooth",
    });
  };

  const opTotalDots = partnerPages.length;

  /* ── FAQ accordion state ── */
  const faqs = [
    { q: "Question", a: "Answer" },
    { q: "Question", a: "Answer" },
    { q: "Question", a: "Answer" },
    { q: "Question", a: "Answer" },
    { q: "Question", a: "Answer" },
    { q: "Question", a: "Answer" },
  ];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setMessage("Thanks for your interest in donating product! We'll be in touch soon.");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-sun focus:ring-2 focus:ring-sun/20";

  return (
    <div className="bg-transparent">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-ink" style={{ minHeight: "85vh" }}>
        <Container className="relative z-10 grid min-h-[85vh] items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — Text */}
          <div className="py-20 lg:py-28">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-sun">
                Partner with Teen Health
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-serif text-5xl font-normal leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Corporate Partnerships
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 text-xl font-medium leading-snug tracking-tight text-white/85 sm:text-2xl">
                Partner With Us to Transform Youth Health and Wellness
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg sm:leading-relaxed">
                Since 2022, we&apos;ve teamed up with 250+ companies to turn
                donations into life-changing impact&mdash;across every aisle,
                from nutrition to wellness and beyond.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10">
                <Button href="#donate-product-form" variant="primary">
                  Partner With Us
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right — Image Placeholder */}
          <Reveal delay={0.2}>
            <div className="relative hidden overflow-hidden rounded-2xl lg:block" style={{ aspectRatio: "4/3" }}>
              <div className="absolute inset-0 bg-white/[0.06] backdrop-blur-sm" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/30">
                <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Zm16.5-13.5h.008v.008h-.008V7.5Zm0 0a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0Z" />
                </svg>
                <span className="text-sm font-medium tracking-wide">Partner Image</span>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ─── IMPACT STATS ─── */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <h2 className="text-center font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              Our Impact, Powered by Partnerships
            </h2>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
            {[
              { stat: "X", label: "Units/lbs of products rescued to date" },
              { stat: "5,000", label: "Youth reached per year" },
              { stat: "$25", label: "Delivers a gift bag or kit worth $50" },
            ].map((item, i) => (
              <Reveal key={item.stat} delay={i * 0.08}>
                <Card className="h-full text-center">
                  <div className="font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                    {item.stat}
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-ink/60">
                    {item.label}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── FEATURED PARTNERS ─── */}
      <section className="bg-ink py-20 text-white sm:py-28">
        <Container>
          <Reveal>
            <h2 className="text-center font-serif text-3xl font-normal tracking-tight sm:text-4xl">
              Featured Partners
            </h2>
          </Reveal>

          {/* Carousel */}
          <div className="mt-14">
            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {partners.map((name, i) => (
                <div
                  key={i}
                  className="flex h-64 w-[520px] shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] ring-1 ring-inset ring-white/10 transition hover:bg-white/10"
                >
                  <span className="text-base font-medium text-white/40">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows + Dots */}
          <div className="mt-6 flex items-center justify-center gap-4">
            {/* Left arrow */}
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollTo("left")}
              className="flex items-center justify-center rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: totalDots }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to partner ${i + 1}`}
                  onClick={() => scrollToDot(i)}
                  className={`h-2 rounded-full transition-all ${i === activeIdx
                    ? "w-6 bg-sun"
                    : "w-2 bg-white/25 hover:bg-white/40"
                    }`}
                />
              ))}
            </div>

            {/* Right arrow */}
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollTo("right")}
              className="flex items-center justify-center rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </Container>
      </section>

      {/* ─── READY TO BEGIN ─── */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image placeholder */}
            <Reveal>
              <div className="flex aspect-[4/3] items-center justify-center rounded-3xl border-2 border-dashed border-ink/20 bg-mist">
                <span className="text-sm font-medium text-ink/30">
                  Image Placeholder
                </span>
              </div>
            </Reveal>

            {/* Text + CTA */}
            <div>
              <Reveal delay={0.08}>
                <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                  Ready to Begin?
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 text-lg leading-relaxed text-ink/60">
                  We help you move closeout, distressed, mislabeled, and
                  short-dated products quickly—through donations or opportunity
                  buys—turning your excess inventory into meaningful impact for
                  at-risk youth.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-8">
                  <Button href="#donate-product-form" variant="primary">
                    Become a Partner
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CORPORATE GIVING ─── */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <h2 className="text-center font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              Corporate Giving &amp; Sponsorship
            </h2>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-2">
            <Reveal delay={0.08}>
              <Card className="h-full">
                <h3 className="font-serif text-2xl font-normal tracking-tight text-ink">
                  In-Kind Support
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink/60">
                  We accept excess inventory, discontinued items, and short-dated
                  bulk food—turning potential waste into essential nutrition and
                  supporting circular economy goals.
                </p>
              </Card>
            </Reveal>

            <Reveal delay={0.16}>
              <Card className="h-full">
                <h3 className="font-serif text-2xl font-normal tracking-tight text-ink">
                  Program Sponsorship
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink/60">
                  Support our monthly food projects or our upcoming Q4 2025
                  expansion into Northern California and the Central Valley.
                </p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── EMPLOYEE ENGAGEMENT ─── */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Text */}
            <div>
              <Reveal>
                <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                  Employee Engagement
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-6 text-lg leading-relaxed text-ink/60">
                  Host professional &ldquo;Product Kitting&rdquo; events where
                  corporate teams can assemble dignity kits for foster youth.
                  These events boost employee morale while making a tangible
                  difference.
                </p>
              </Reveal>
            </div>

            {/* Image placeholder */}
            <Reveal delay={0.16}>
              <div className="flex aspect-[4/3] items-center justify-center rounded-3xl border-2 border-dashed border-ink/20 bg-mist">
                <span className="text-sm font-medium text-ink/30">
                  Image Placeholder
                </span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── WHY PARTNER WITH US ─── */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <h2 className="text-center font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              Why Partner With Us?
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {/* Card 1 */}
            <Reveal delay={0.08}>
              <Container className="rounded-3xl bg-mist p-8 sm:p-10">
                <h3 className="font-serif text-xl font-normal tracking-tight text-ink sm:text-2xl">
                  Intentional, Health-Focused Products
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink/60">
                  We ensure these products reach at-risk youth and young adults
                  (13–29). Unlike a traditional food bank, we&rsquo;re
                  intentional about the food, beverages, hydration, and
                  supplements we provide, raising the level of health and
                  wellness for those we support.
                </p>
              </Container>
            </Reveal>

            {/* Card 2 */}
            <Reveal delay={0.16}>
              <Container className="rounded-3xl bg-mist p-8 sm:p-10">
                <h3 className="font-serif text-xl font-normal tracking-tight text-ink sm:text-2xl">
                  Tech-Driven Efficiency
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink/60">
                  We use Salesforce, NetSuite, and AI to automate operations and
                  manage inventory seamlessly. This ensures your contributions
                  reach those in need quickly and effectively.
                </p>
              </Container>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── PURPOSE-DRIVEN PARTNERSHIPS ─── */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image placeholder — left */}
            <Reveal>
              <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border-2 border-dashed border-ink/20 bg-mist">
                <span className="text-sm text-ink/30">Image Placeholder</span>
              </div>
            </Reveal>

            {/* Text — right */}
            <div>
              <Reveal delay={0.08}>
                <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                  Purpose-Driven Partnerships
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 text-base leading-relaxed text-ink/60">
                  In an era of increased ESG (Environmental, Social, and
                  Governance) scrutiny, partnering with Teen Health offers a
                  transparent, measurable way to fulfill your Social (S) pillar.
                  Our work helps you reduce waste, convert operational surplus
                  into community resilience, support vulnerable youth, and drive
                  measurable social impact.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── OUR PARTNERS ─── */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <h2 className="text-center font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              Our Partners
            </h2>
          </Reveal>

          {/* Scrollable grid pages */}
          <div
            ref={opScrollRef}
            className="mt-14 flex snap-x snap-mandatory overflow-x-auto scroll-smooth scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {partnerPages.map((page, pageIdx) => (
              <div
                key={pageIdx}
                className="grid w-full shrink-0 snap-start grid-cols-4 gap-4"
              >
                {page.map((name, i) => (
                  <div
                    key={i}
                    className="flex h-24 items-center justify-center rounded-xl border border-dashed border-ink/15 bg-mist"
                  >
                    <span className="text-xs font-medium text-ink/30">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Arrows + Dots */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => opScrollTo("left")}
              aria-label="Previous partners"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 text-ink/50 transition hover:bg-ink/10"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path
                  d="M15 19l-7-7 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="flex gap-2">
              {Array.from({ length: opTotalDots }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => opScrollToDot(i)}
                  aria-label={`Go to partner page ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${i === opActiveIdx
                    ? "w-7 bg-ink/60"
                    : "w-2.5 bg-ink/15 hover:bg-ink/25"
                    }`}
                />
              ))}
            </div>

            <button
              onClick={() => opScrollTo("right")}
              aria-label="Next partners"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 text-ink/50 transition hover:bg-ink/10"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path
                  d="M9 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </Container>
      </section>

      {/* ─── FREQUENTLY ASKED QUESTIONS ─── */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <h2 className="text-center font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </Reveal>

          <div className="mx-auto mt-14 max-w-3xl divide-y divide-ink/10">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-medium text-ink">
                    {faq.q}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    className={`shrink-0 text-ink/40 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""
                      }`}
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-60 pb-5" : "max-h-0"
                    }`}
                >
                  <p className="text-sm leading-relaxed text-ink/60">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── LET'S BUILD A HEALTHIER FUTURE TOGETHER ─── */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                Let&rsquo;s Build a Healthier Future Together
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-ink/60">
                More at-risk youth with access to nutritious food and wellness
                products means more young people thriving. More teens and young
                adults with the support they need to focus on education, personal
                growth, and building a bright future.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10">
                <Button href="#donate-product-form" variant="primary">
                  Become a Partner
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── WHAT WE ACCEPT ─── */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/50">
                  What we accept
                </p>
                <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                  Quality products that make a real difference.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-ink/70">
                  We accept packaged, shelf-stable products that meet our quality
                  standards. Every donated item is sorted, kitted, and
                  distributed through our trusted partner network.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/images/programs/food-rescue/IMG_0731.jpeg"
                    alt="Food products ready for rescue"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative mt-8 overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/images/programs/food-rescue/IMG_0733.jpeg"
                    alt="Rescued food products organized"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── PRODUCT CATEGORIES ─── */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/50">
                Product categories
              </p>
              <h2 className="mx-auto mt-4 max-w-xl font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                We accept a wide range of healthy products.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "🍎", label: "Healthy foods", desc: "Snacks, bars, cereals, and shelf-stable meals." },
              { icon: "💧", label: "Hydration", desc: "Water, electrolyte drinks, and functional beverages." },
              { icon: "💊", label: "Supplements", desc: "Vitamins, minerals, and wellness products." },
              { icon: "🧴", label: "Personal care", desc: "Hygiene products, skincare, and dental care." },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.06}>
                <Card className="text-center">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="mt-3 text-sm font-semibold tracking-tight text-ink">
                    {item.label}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-ink/60">{item.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-ink py-20 text-white sm:py-28">
        <Container>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sun">
              How it works
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-3xl font-normal tracking-tight sm:text-4xl">
              From your warehouse to youth in need.
            </h2>
          </Reveal>

          <div className="mt-16 space-y-0">
            {[
              {
                num: "01",
                title: "Tell us what you have",
                desc: "Share product details, quantities, and any timing constraints. We'll confirm what fits our current needs.",
                image: "/images/programs/essential-kits/IMG_5095.jpeg",
                imageAlt: "Essential kits being assembled",
              },
              {
                num: "02",
                title: "We coordinate logistics",
                desc: "We arrange pickup or provide shipping guidance. Our team handles intake, quality checks, and sorting.",
                image: "/images/programs/essential-kits/IMG_5096.jpeg",
                imageAlt: "Products sorted and organized",
              },
              {
                num: "03",
                title: "Products reach youth fast",
                desc: "Donated products are kitted and distributed through our partner agencies to vulnerable youth across the country.",
                image: "/images/partnerships/IMG_4664.jpg",
                imageAlt: "Teen Health delivering kits",
              },
            ].map((step) => (
              <Reveal key={step.num} delay={0.05}>
                <div className="grid items-center gap-10 border-t border-white/10 py-14 lg:grid-cols-[100px_1fr_1fr] lg:gap-16">
                  <div className="font-serif text-6xl font-normal text-white/15 lg:text-7xl">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-normal tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-md text-base leading-relaxed text-white/65">
                      {step.desc}
                    </p>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "16/10" }}>
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── DONATION REASONS ─── */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/50">
                Common donation scenarios
              </p>
              <h2 className="mx-auto mt-4 max-w-xl font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                Think of us as your go-to partner for excess inventory.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/60">
                Products go to the most vulnerable instead of being disposed of.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Discontinued items", desc: "Products you're no longer selling but are still high quality." },
              { title: "Packaging changes", desc: "Old packaging that's perfectly good but being replaced." },
              { title: "Short-dated inventory", desc: "Products approaching best-by dates with shelf life remaining." },
              { title: "Seasonal closeouts", desc: "Seasonal products that didn't sell through but are still great." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <Card>
                  <div className="text-sm font-semibold tracking-tight text-ink">{item.title}</div>
                  <p className="mt-2 text-xs leading-relaxed text-ink/60">{item.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── PRODUCT DONATION FORM ─── */}
      <section id="donate-product-form" className="scroll-mt-24 bg-ink py-20 text-white sm:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_420px]">
            {/* Left — Text */}
            <div>
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-sun">
                  Get started
                </p>
                <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight sm:text-4xl">
                  Start a product donation.
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-white/65">
                  Tell us about your product and our team will follow up within a
                  few business days to coordinate logistics.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-12 grid gap-8 sm:grid-cols-3">
                  {[
                    {
                      num: "01",
                      title: "Describe your product",
                      desc: "Share details about the type, quantity, and condition of your inventory.",
                    },
                    {
                      num: "02",
                      title: "We'll review & connect",
                      desc: "Our team evaluates the fit and reaches out to coordinate next steps.",
                    },
                    {
                      num: "03",
                      title: "Schedule pickup or ship",
                      desc: "We arrange logistics so your product reaches youth quickly.",
                    },
                  ].map((step) => (
                    <div key={step.num}>
                      <div className="font-serif text-3xl font-normal text-white/20">
                        {step.num}
                      </div>
                      <div className="mt-3 text-sm font-semibold">{step.title}</div>
                      <p className="mt-2 text-xs leading-relaxed text-white/50">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right — Form Card */}
            <Reveal delay={0.05}>
              {status === "sent" ? (
                <Card className="border-mint/20 bg-mint/10">
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mint/20">
                      <svg className="h-5 w-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-normal tracking-tight text-ink">
                        We got your submission!
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/70">
                        {message}
                      </p>
                    </div>
                  </div>
                </Card>
              ) : (
                <Card className="bg-white text-ink">
                  <form onSubmit={onSubmit} className="space-y-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-ink/50">
                          Contact name <span className="text-sky">*</span>
                        </span>
                        <input required name="contactName" className={inputClass} placeholder="Your name" />
                      </label>
                      <label className="block">
                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-ink/50">
                          Company <span className="text-sky">*</span>
                        </span>
                        <input required name="company" className={inputClass} placeholder="Company name" />
                      </label>
                    </div>

                    <label className="block">
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-ink/50">
                        Email <span className="text-sky">*</span>
                      </span>
                      <input required type="email" name="email" className={inputClass} placeholder="you@example.com" />
                    </label>

                    <fieldset>
                      <legend className="text-xs font-bold uppercase tracking-[0.18em] text-ink/50">
                        Product type <span className="text-sky">*</span>
                      </legend>
                      <div className="mt-2 space-y-2">
                        {[
                          "Healthy Foods",
                          "Beverages / Hydration",
                          "Supplements",
                          "Personal Care",
                          "Mixed / Other",
                        ].map((type) => (
                          <label
                            key={type}
                            className="flex cursor-pointer items-center gap-3 rounded-xl border border-border px-4 py-2.5 text-sm text-ink transition-colors hover:border-sun has-[:checked]:border-sun has-[:checked]:bg-sun/5"
                          >
                            <input
                              type="radio"
                              name="productType"
                              value={type}
                              required
                              className="h-4 w-4 accent-sun"
                            />
                            {type}
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <label className="block">
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-ink/50">
                        Tell us about the product
                      </span>
                      <textarea
                        name="message"
                        rows={3}
                        className={inputClass}
                        placeholder="Quantity, condition, timing, and any other details…"
                      />
                    </label>

                    <input type="hidden" name="formType" value="product-donation" />

                    <Button
                      variant="primary"
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full"
                    >
                      {status === "sending" ? "Sending…" : "Submit donation inquiry"}
                    </Button>

                    {status === "error" && (
                      <p className="text-sm text-red-500">{message}</p>
                    )}
                  </form>
                </Card>
              )}
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
