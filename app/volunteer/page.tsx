"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

type Status = "idle" | "sending" | "sent" | "error";

export default function VolunteerPage() {
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
      setMessage("Thanks for your interest in volunteering! We'll be in touch soon.");
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
            src="/images/events/IMG_4154.jpeg"
            alt="Teen Health volunteers at an event"
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
                Volunteer
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-serif text-5xl font-normal leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Your time makes a{" "}
                <span className="hero-highlight">real difference.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/70">
                Whether you can give a few hours or a few days, your skills and
                energy help Teen Health sort, kit, and deliver essentials to
                youth across the country.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10">
                <Button href="#volunteer-form" variant="primary">
                  Sign up to volunteer
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── VOLUNTEER ROLES ─── */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/50">
                Ways to help
              </p>
              <h2 className="mx-auto mt-4 max-w-xl font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                Find the role that fits your strengths.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/60">
                We welcome volunteers of all backgrounds and skill levels. Here
                are some of the ways you can contribute.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "📦",
                label: "Warehouse & packing",
                desc: "Sort donated products, assemble essential kits, and prep shipments for partner agencies.",
              },
              {
                icon: "🚚",
                label: "Logistics & delivery",
                desc: "Help coordinate pickups, manage inventory, and deliver kits to distribution partners.",
              },
              {
                icon: "💡",
                label: "Skills-based",
                desc: "Lend expertise in design, development, fundraising, grant writing, marketing, or operations.",
              },
              {
                icon: "📸",
                label: "Events & outreach",
                desc: "Support community events, capture photos and video, and help spread the word.",
              },
              {
                icon: "📋",
                label: "Admin & data",
                desc: "Assist with data entry, donor outreach, filing, and organizational support.",
              },
              {
                icon: "🤝",
                label: "Group volunteering",
                desc: "Organize a team from your company, school, or community group for a packing day.",
              },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.05}>
                <Card className="h-full">
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
              From sign-up to impact.
            </h2>
          </Reveal>

          <div className="mt-16 space-y-0">
            {[
              {
                num: "01",
                title: "Tell us about yourself",
                desc: "Fill out the interest form with your availability, skills, and the type of work you're drawn to.",
                image: "/images/team/IMG_5150.jpeg",
                imageAlt: "Volunteer team member",
              },
              {
                num: "02",
                title: "We'll match you",
                desc: "Our team reviews your submission and reaches out with opportunities that fit your schedule and interests.",
                image: "/images/programs/essential-kits/IMG_5111 2.jpeg",
                imageAlt: "Volunteers packing essentials kits",
              },
              {
                num: "03",
                title: "Show up & make an impact",
                desc: "Join a packing session, delivery run, or project — and see firsthand how your time helps youth in need.",
                image: "/images/events/IMG_0476.jpeg",
                imageAlt: "Teen Health event with volunteers",
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

      {/* ─── WHY VOLUNTEER ─── */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/50">
                  Why volunteer
                </p>
                <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                  It's more than service — it's connection.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-ink/70">
                  Volunteers are the backbone of our operation. You'll work
                  alongside a passionate team, learn about the natural products
                  industry, and directly impact the lives of young people in
                  your community.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    "Flexible scheduling — mornings, evenings, weekends",
                    "Great for individuals, families, and corporate groups",
                    "No experience required — we'll train you",
                    "Community service hours available for students",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sun/15 text-xs text-sun">
                        ✓
                      </span>
                      <span className="text-sm text-ink/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/images/team/IMG_5362.jpeg"
                    alt="Teen Health volunteer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative mt-8 overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/images/events/IMG_0566.jpeg"
                    alt="Volunteers at a Teen Health event"
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

      {/* ─── VOLUNTEER FORM ─── */}
      <section id="volunteer-form" className="scroll-mt-24 bg-ink py-20 text-white sm:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_420px]">
            {/* Left — Text */}
            <div>
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-sun">
                  Get started
                </p>
                <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight sm:text-4xl">
                  Volunteer interest form.
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-white/65">
                  Tell us a bit about yourself and how you'd like to help. We'll
                  reach out with opportunities that match your interests and
                  availability.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-12 grid gap-8 sm:grid-cols-3">
                  {[
                    {
                      num: "01",
                      title: "Share your interests",
                      desc: "Tell us what kind of volunteer work excites you most.",
                    },
                    {
                      num: "02",
                      title: "We'll reach out",
                      desc: "Our team connects you with upcoming opportunities.",
                    },
                    {
                      num: "03",
                      title: "Start volunteering",
                      desc: "Show up, contribute, and see the impact firsthand.",
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

                    <fieldset>
                      <legend className="text-xs font-bold uppercase tracking-[0.18em] text-ink/50">
                        I'm interested in <span className="text-sky">*</span>
                      </legend>
                      <div className="mt-2 space-y-2">
                        {[
                          "Warehouse & Packing",
                          "Logistics & Delivery",
                          "Skills-Based (Design, Dev, Marketing, etc.)",
                          "Events & Outreach",
                          "Group Volunteering",
                          "Whatever's Needed!",
                        ].map((type) => (
                          <label
                            key={type}
                            className="flex cursor-pointer items-center gap-3 rounded-xl border border-border px-4 py-2.5 text-sm text-ink transition-colors hover:border-sun has-[:checked]:border-sun has-[:checked]:bg-sun/5"
                          >
                            <input
                              type="radio"
                              name="volunteerInterest"
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
                        Anything else?
                      </span>
                      <textarea
                        name="message"
                        rows={3}
                        className={inputClass}
                        placeholder="Availability, experience, questions…"
                      />
                    </label>

                    <input type="hidden" name="formType" value="volunteer" />

                    <Button
                      variant="primary"
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full"
                    >
                      {status === "sending" ? "Sending…" : "Submit interest form"}
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
