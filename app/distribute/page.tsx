"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

type Status = "idle" | "sending" | "sent" | "error";

export default function DistributePage() {
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
      setMessage("Thanks for your interest in distributing with us! We'll be in touch soon.");
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
        <div className="absolute inset-0">
          <Image
            src="/images/partnerships/IMG_4664.jpg"
            alt="Teen Health delivering kits to partner agency"
            fill
            className="object-cover opacity-30"
            sizes="100vw"
            priority
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, rgba(35,31,32,0.92) 0%, rgba(35,31,32,0.7) 50%, rgba(35,31,32,0.4) 100%)",
            }}
          />
        </div>

        <Container className="relative z-10 flex min-h-[85vh] items-center">
          <div className="max-w-2xl py-20">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-sun">
                Distribution partners
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-serif text-5xl font-normal leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Get essentials to the{" "}
                <span className="hero-highlight">youth you serve.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/70">
                If your agency serves vulnerable youth, partner with Teen Health
                to distribute essential kits — healthy food, hydration, personal
                care, and more — directly to the young people in your community.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10">
                <Button href="#distribution-form" variant="primary">
                  Apply to distribute
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── WHO WE PARTNER WITH ─── */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/50">
                  Who we partner with
                </p>
                <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                  Agencies that know their communities best.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-ink/70">
                  We work with nonprofits, schools, shelters, community centers,
                  faith-based organizations, and social service agencies that
                  directly serve vulnerable youth and young adults.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/images/events/IMG_4150.jpeg"
                    alt="Volunteers sorting and preparing supplies"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative mt-8 overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/images/partnerships/IMG_5266.jpeg"
                    alt="Teen Health team at partnership distribution"
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

      {/* ─── AGENCY TYPES ─── */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/50">
                Agency types
              </p>
              <h2 className="mx-auto mt-4 max-w-xl font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                We work with organizations across sectors.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "🏫", label: "Schools & districts", desc: "K–12 schools, alternative programs, and school districts." },
              { icon: "🏠", label: "Shelters & housing", desc: "Youth shelters, transitional housing, and foster care programs." },
              { icon: "🤝", label: "Community orgs", desc: "Community centers, faith-based orgs, and mentorship programs." },
              { icon: "🏥", label: "Social services", desc: "Social workers, health clinics, and government agencies." },
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
              From application to distribution.
            </h2>
          </Reveal>

          <div className="mt-16 space-y-0">
            {[
              {
                num: "01",
                title: "Apply to become a partner",
                desc: "Tell us about your organization, the population you serve, and your distribution capacity. We review every application.",
                image: "/images/team/IMG_5106.jpeg",
                imageAlt: "Teen Health team reviewing applications",
              },
              {
                num: "02",
                title: "Onboarding & planning",
                desc: "Once approved, we work together to establish your distribution plan — frequency, kit types, quantities, and logistics.",
                image: "/images/programs/essential-kits/IMG_5280.jpeg",
                imageAlt: "Essential kits prepared for partner agencies",
              },
              {
                num: "03",
                title: "Distribute to youth",
                desc: "Receive kits and distribute them directly to the youth you serve. We provide ongoing support and track impact together.",
                image: "/images/partnerships/IMG_5265.jpeg",
                imageAlt: "Teen Health team with backpack kits",
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

      {/* ─── WHAT PARTNERS RECEIVE ─── */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/50">
                What you receive
              </p>
              <h2 className="mx-auto mt-4 max-w-xl font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                Everything you need to distribute with confidence.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Pre-assembled kits", desc: "Ready-to-distribute kits tailored to youth needs." },
              { title: "Logistics support", desc: "Coordinated shipping and delivery to your location." },
              { title: "Reporting tools", desc: "Simple tracking to measure and share your impact." },
              { title: "Ongoing partnership", desc: "Dedicated support and regular kit replenishment." },
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

      {/* ─── DISTRIBUTION PARTNER FORM ─── */}
      <section id="distribution-form" className="scroll-mt-24 bg-ink py-20 text-white sm:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_420px]">
            {/* Left — Text */}
            <div>
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-sun">
                  Get started
                </p>
                <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight sm:text-4xl">
                  Become a distribution partner.
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-white/65">
                  Fill out the form and our partnerships team will follow up
                  within a few business days to discuss how we can work together.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-12 grid gap-8 sm:grid-cols-3">
                  {[
                    {
                      num: "01",
                      title: "Tell us about you",
                      desc: "Share your organization details and the youth you serve.",
                    },
                    {
                      num: "02",
                      title: "We'll review & connect",
                      desc: "Our team evaluates and reaches out within a few days.",
                    },
                    {
                      num: "03",
                      title: "Start distributing",
                      desc: "Begin receiving and distributing kits to your community.",
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
                        Application received!
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
                          Title / Role <span className="text-sky">*</span>
                        </span>
                        <input required name="title" className={inputClass} placeholder="e.g. Program Director" />
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
                        Organization name <span className="text-sky">*</span>
                      </span>
                      <input required name="organization" className={inputClass} placeholder="Your organization" />
                    </label>

                    <fieldset>
                      <legend className="text-xs font-bold uppercase tracking-[0.18em] text-ink/50">
                        Organization type <span className="text-sky">*</span>
                      </legend>
                      <div className="mt-2 space-y-2">
                        {[
                          "School / School District",
                          "Shelter / Housing Program",
                          "Community Organization",
                          "Social Services / Government",
                          "Faith-Based Organization",
                          "Other",
                        ].map((type) => (
                          <label
                            key={type}
                            className="flex cursor-pointer items-center gap-3 rounded-xl border border-border px-4 py-2.5 text-sm text-ink transition-colors hover:border-sun has-[:checked]:border-sun has-[:checked]:bg-sun/5"
                          >
                            <input
                              type="radio"
                              name="orgType"
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
                        Tell us about your program
                      </span>
                      <textarea
                        name="message"
                        rows={3}
                        className={inputClass}
                        placeholder="Population served, estimated youth count, distribution plan…"
                      />
                    </label>

                    <input type="hidden" name="formType" value="distribution-partner" />

                    <Button
                      variant="primary"
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full"
                    >
                      {status === "sending" ? "Sending…" : "Submit application"}
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
