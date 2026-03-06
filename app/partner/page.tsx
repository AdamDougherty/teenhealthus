"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { PartnerLogoGrid } from "@/components/PartnerLogoGrid";

type Status = "idle" | "sending" | "sent" | "error";

export default function PartnerPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

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
      setMessage("Thanks for your interest! We'll be in touch soon.");
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
                <Button href="#become-a-partner" variant="primary">
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

      {/* ─── MISSION STATEMENT ─── */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/50">
                  Engage and join our mission
                </p>
                <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                  Building a powerful coalition to break through barriers.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-ink/70">
                  Our collaborative approach transforms lives and also rescues
                  perfectly good food from being thrown away. In this way, we
                  provide sustainable solutions to social challenges.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/images/partnerships/IMG_4664.jpg"
                    alt="Teen Health delivering kits to the Center for Autism"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative mt-8 overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/images/partnerships/IMG_1710.jpeg"
                    alt="Partnership distribution in action"
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

      {/* ─── HOW TO PARTNER — NUMBERED SECTIONS ─── */}
      <section className="bg-ink py-20 text-white sm:py-28">
        <Container>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sun">
              How your company can partner with us
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-3xl font-normal tracking-tight sm:text-4xl">
              Three ways to make a difference.
            </h2>
          </Reveal>

          <div className="mt-16 space-y-0">
            {/* 01 — Product Donation */}
            <Reveal delay={0.05}>
              <div className="grid items-center gap-10 border-t border-white/10 py-14 lg:grid-cols-[100px_1fr_1fr] lg:gap-16">
                <div className="font-serif text-6xl font-normal text-white/15 lg:text-7xl">
                  01
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-normal tracking-tight">
                    Product donation
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-white/65">
                    Our partners provide tax-exempt donations of packaged and bulk
                    healthy foods, beverages, and other products — and we ensure these
                    resources quickly and efficiently get where they are needed.
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "16/10" }}>
                  <Image
                    src="/images/programs/food-rescue/IMG_0889.jpeg"
                    alt="Food rescue products ready for distribution"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>
            </Reveal>

            {/* 02 — Charitable Giving */}
            <Reveal delay={0.05}>
              <div className="grid items-center gap-10 border-t border-white/10 py-14 lg:grid-cols-[100px_1fr_1fr] lg:gap-16">
                <div className="font-serif text-6xl font-normal text-white/15 lg:text-7xl">
                  02
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-normal tracking-tight">
                    Charitable giving
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-white/65">
                    Your donations and investments support this humanitarian mission
                    through a scalable and tech-driven model that is incredibly
                    efficient, transparent, and cost-effective. Together, we can change
                    the trajectory of young lives.
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "16/10" }}>
                  <Image
                    src="/images/programs/essential-kits/IMG_5095.jpeg"
                    alt="Essential kits assembled and ready to distribute"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>
            </Reveal>

            {/* 03 — Strategic Support */}
            <Reveal delay={0.05}>
              <div className="grid items-center gap-10 border-t border-white/10 py-14 lg:grid-cols-[100px_1fr_1fr] lg:gap-16">
                <div className="font-serif text-6xl font-normal text-white/15 lg:text-7xl">
                  03
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-normal tracking-tight">
                    Strategic support
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-white/65">
                    Our communities, volunteers, and organization can benefit from
                    the expertise of our partners. Our partners provide guidance in
                    optimizing operations, finances, supply chains, and resource
                    management.
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "16/10" }}>
                  <Image
                    src="/images/partnerships/IMG_5267.jpeg"
                    alt="Strategic partnership planning session"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── PARTNER LOGOS ─── */}
      <PartnerLogoGrid />


      {/* ─── OFFSET IMAGE GRID (charity:water style) ─── */}
      <section className="pb-10">
        <Container>
          <Reveal>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/images/youth/IMG_6160.jpeg"
                  alt="Youth supported by Teen Health"
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
              <div className="relative mt-12 overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/images/events/IMG_4150.jpeg"
                  alt="Volunteers preparing supplies at an event"
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
              <div className="relative -mt-4 overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/images/partnerships/IMG_5266.jpeg"
                  alt="Teen Health team at partnership distribution"
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ─── USE CASES — WHAT PARTNERS DONATE ─── */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/50">
                What partners contribute
              </p>
              <h2 className="mx-auto mt-4 max-w-xl font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                Think of us as your go-to partner for excess inventory.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/60">
                Product discontinuation, packaging changes, seasonal closeouts,
                and short-dated items — with these donations, products go to the
                most vulnerable instead of being disposed of.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "🍎", label: "Healthy foods" },
              { icon: "💧", label: "Hydration" },
              { icon: "💊", label: "Supplements" },
              { icon: "🧴", label: "Personal care" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.06}>
                <Card className="text-center">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="mt-3 text-sm font-semibold tracking-tight text-ink">
                    {item.label}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── BECOME A PARTNER FORM ─── */}
      <section id="become-a-partner" className="bg-ink py-20 text-white sm:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_420px]">
            {/* Left — Text */}
            <div>
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-sun">
                  Get started
                </p>
                <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight sm:text-4xl">
                  Become a corporate partner.
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-white/65">
                  Fill out the form and our partnerships team will follow up within
                  a few business days to explore how we can work together.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-12 grid gap-8 sm:grid-cols-3">
                  {[
                    {
                      num: "01",
                      title: "Tell us about you",
                      desc: "Share your organization details and partnership interest.",
                    },
                    {
                      num: "02",
                      title: "We'll connect",
                      desc: "Our team reviews and reaches out within a few days.",
                    },
                    {
                      num: "03",
                      title: "Make an impact",
                      desc: "Start delivering essentials to youth who need them.",
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
                        We got your message!
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
                          First name <span className="text-sky">*</span>
                        </span>
                        <input required name="firstName" className={inputClass} placeholder="First name" />
                      </label>
                      <label className="block">
                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-ink/50">
                          Last name <span className="text-sky">*</span>
                        </span>
                        <input required name="lastName" className={inputClass} placeholder="Last name" />
                      </label>
                    </div>

                    <label className="block">
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-ink/50">
                        Email <span className="text-sky">*</span>
                      </span>
                      <input required type="email" name="email" className={inputClass} placeholder="you@example.com" />
                    </label>

                    <label className="block">
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-ink/50">
                        Organization <span className="text-sky">*</span>
                      </span>
                      <input required name="organization" className={inputClass} placeholder="Company or organization" />
                    </label>

                    <fieldset>
                      <legend className="text-xs font-bold uppercase tracking-[0.18em] text-ink/50">
                        Interest <span className="text-sky">*</span>
                      </legend>
                      <div className="mt-2 space-y-2">
                        {[
                          "Product Donation",
                          "Charitable Giving",
                          "Strategic Support",
                          "Other",
                        ].map((type) => (
                          <label
                            key={type}
                            className="flex cursor-pointer items-center gap-3 rounded-xl border border-border px-4 py-2.5 text-sm text-ink transition-colors hover:border-sun has-[:checked]:border-sun has-[:checked]:bg-sun/5"
                          >
                            <input
                              type="radio"
                              name="partnerType"
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
                        Message
                      </span>
                      <textarea
                        name="message"
                        rows={3}
                        className={inputClass}
                        placeholder="How would you like to partner?"
                      />
                    </label>

                    <Button
                      variant="primary"
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full"
                    >
                      {status === "sending" ? "Sending…" : "Become a partner"}
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
