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
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    // Require at least one area of interest (matches the checkbox group above).
    if (formData.getAll("interests").length === 0) {
      setStatus("error");
      setMessage("Please select at least one area you're interested in.");
      return;
    }

    setStatus("sending");
    setMessage("");

    // Collapse multi-value checkbox groups (interests, availability) into a
    // single comma-separated string per field so the email renders cleanly.
    const payload: Record<string, string> = {};
    for (const key of new Set(formData.keys())) {
      const values = formData
        .getAll(key)
        .map((v) => String(v).trim())
        .filter(Boolean);
      if (values.length) payload[key] = values.join(", ");
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setMessage("Thanks for your interest in volunteering! We'll be in touch soon.");
      formEl.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-sun focus:ring-2 focus:ring-sun/20";

  const tileClass =
    "flex cursor-pointer items-center gap-3 rounded-xl border border-border px-4 py-3 text-sm text-ink transition-colors hover:border-sun has-[:checked]:border-sun has-[:checked]:bg-sun/5";

  const interestOptions = [
    "Warehouse & Packing",
    "Logistics & Delivery",
    "Skills-Based (Design, Dev, Marketing, etc.)",
    "Events & Outreach",
    "Group Volunteering",
    "Administrative Support",
  ];

  const availabilityOptions = [
    "Weekday (morning)",
    "Weekday (evening)",
    "Weekends",
    "Flexible",
  ];

  const volunteerJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Teen Health",
    url: "https://teenhealth.us",
    areaServed: [
      { "@type": "City", name: "Los Angeles", containedInPlace: { "@type": "State", name: "California" } },
      { "@type": "AdministrativeArea", name: "Southern California" },
    ],
    potentialAction: {
      "@type": "VolunteerAction",
      name: "Volunteer with Teen Health in Los Angeles",
      description:
        "Help distribute essential nutrition and wellness kits to at-risk youth across Los Angeles and Southern California. Warehouse packing, logistics, skills-based, events, and group/corporate volunteer opportunities available. Community service hours available for high school and college students.",
      target: "https://teenhealth.us/volunteer#volunteer-form",
      location: {
        "@type": "Place",
        name: "Skid Row, Los Angeles, CA",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Los Angeles",
          addressRegion: "CA",
          addressCountry: "US",
        },
      },
    },
  };

  return (
    <div className="bg-transparent">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(volunteerJsonLd) }}
      />
      {/* ─── HERO ─── */}
      <section className="relative min-h-[50vh] overflow-hidden sm:min-h-[70vh]" style={{ backgroundColor: '#111' }}>
        <div className="absolute inset-0">
          <Image
            src="/images/shared/volunteer-giving-products.jpg"
            alt="Teen Health volunteers distributing nutrition and wellness kits to youth on Skid Row, Los Angeles"
            fill
            className="object-cover object-right sm:object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute bottom-4 right-4 z-10 sm:bottom-6 sm:right-6">
            <span className="flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              Skid Row, Los Angeles, CA
            </span>
          </div>
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 pl-6 sm:pl-10 lg:pl-16 min-h-[50vh] flex items-center sm:min-h-[70vh]">
          <div className="max-w-xl">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#FDCF6A" }}>
                Volunteer
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-serif font-normal tracking-tight text-white" style={{ lineHeight: 1.1 }}>
                <span className="block text-xl font-sans font-medium tracking-wide text-white/90 sm:text-2xl">
                  Volunteer in Los Angeles
                </span>
                <span className="mt-3 block text-3xl sm:text-4xl lg:text-5xl">
                  Your Time Makes a
                  <br />
                  <span className="hero-highlight" style={{ color: "#FDCF6A" }}>Real Difference</span>
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10">
                <Button href="#volunteer-form" variant="primary" style={{ color: 'white' }}>
                  Sign up to volunteer
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── VOLUNTEER ROLES ─── */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/50">
                Ways to help in the Los Angeles community
              </p>
              <h2 className="mx-auto mt-4 max-w-xl font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                Find a role that fits your strengths
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-ink/80">
                Join Teen Health to help distribute essential nutrition and
                wellness kits to youth in need across Southern California. We
                welcome volunteers of all backgrounds and skill levels. Here
                are some of the ways you can contribute:
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
                desc: "Support community events, capture photos and video, and help spread the word in your community.",
              },
              {
                icon: "📋",
                label: "Admin & data",
                desc: "Assist with data entry, donor outreach, scheduling, filing, and behind-the-scenes organizational support.",
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
                  <p className="mt-2 text-base leading-relaxed text-pretty text-ink/80">{item.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/50">
              How it works
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              From sign-up to impact
            </h2>
          </Reveal>

          <div className="mt-16 space-y-0">
            {[
              {
                num: "01",
                title: "Tell us about yourself",
                desc: "Fill out the interest form with your availability, skills, and the type of work you're drawn to.",
                image: "/images/team/IMG_5150.jpeg",
                imageAlt: "Teen Health volunteer team member preparing community hygiene kits in Los Angeles",
              },
              {
                num: "02",
                title: "We'll match you",
                desc: "Our team reaches out with opportunities that fit your schedule and interests.",
                image: "/images/shared/dream-center-volunteers.jpeg",
                imageAlt: "Teen Health volunteers serving youth at the Dream Center in Los Angeles",
                imagePosition: "center 100%",
              },
              {
                num: "03",
                title: "Show up & make an impact",
                desc: "Join a packing session, delivery, or project — and see how your time helps youth.",
                image: "/images/shared/nav-center-2.jpeg",
                imageAlt: "Teen Health volunteers distributing nutrition and wellness products at an LA navigation center",
                imagePosition: "center 42%",
              },
            ].map((step) => (
              <Reveal key={step.num} delay={0.05}>
                <div className="grid items-center gap-10 border-t border-ink/10 py-14 lg:grid-cols-[100px_1fr_1fr] lg:gap-16">
                  <div className="font-serif text-6xl font-normal text-ink/10 lg:text-7xl">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-normal tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-md text-lg leading-relaxed text-pretty text-ink/80">
                      {step.desc}
                    </p>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "16/10" }}>
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover"
                      style={(step as any).imagePosition ? { objectPosition: (step as any).imagePosition } : undefined}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={85}
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
                  It's more than service — it's connection
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-ink/80">
                  Volunteers are the backbone of our operation. You'll work
                  alongside a passionate team, learn about the natural products
                  industry, and directly impact the lives of at-risk youth
                  across Los Angeles and Southern California.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    { label: "Flexible scheduling", text: "Mornings, evenings, weekends" },
                    { label: "Great for groups", text: "Individuals, families, and corporate team-building days in LA" },
                    { label: "No experience required", text: "We'll train you" },
                    { label: "Student volunteer hours", text: "Certified community service hours for local high school and college students" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sun/15 text-xs text-sun">
                        ✓
                      </span>
                      <span className="text-lg text-ink/80">
                        <strong className="font-semibold text-ink">{item.label}:</strong>
                        {" "}
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "1/1" }}>
                <Image
                  src="/images/shared/humanity-heroes-booth-2.jpeg"
                  alt="Teen Health volunteers staffing the Humanity Heroes outreach booth at a Los Angeles community event"
                  fill
                  className="object-cover" style={{ objectPosition: 'center bottom' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── VOLUNTEER FORM ─── */}
      <section id="volunteer-form" className="scroll-mt-24 py-20 sm:py-28">
        <Container>
          <div className="grid items-start gap-16 lg:grid-cols-[360px_1fr]">
            {/* Left — Intro & steps */}
            <div>
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/50">
                  Join us
                </p>
                <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                  Become a volunteer
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-ink/80">
                  Thanks for your interest in volunteering with Teen Health.
                  Share your skills and availability, and we'll follow up with
                  matching opportunities across Los Angeles and Southern
                  California.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-12 grid gap-8">
                  {[
                    {
                      num: "01",
                      title: "Tell us about you",
                      desc: "Share your interests, skills, and availability.",
                    },
                    {
                      num: "02",
                      title: "We'll find your fit",
                      desc: "Our team reaches out with opportunities that match what you're looking for.",
                    },
                    {
                      num: "03",
                      title: "Show up & make a difference",
                      desc: "Join us for a shift, event, or project — and see your impact firsthand.",
                    },
                  ].map((step) => (
                    <div key={step.num}>
                      <div className="font-serif text-3xl font-normal text-ink/20">
                        {step.num}
                      </div>
                      <div className="mt-3 text-lg font-semibold">{step.title}</div>
                      <p className="mt-2 text-base leading-relaxed text-ink/80">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-8 rounded-2xl border border-sky/15 bg-sky/5 p-5">
                  <p className="text-base leading-relaxed text-ink/80">
                    <strong className="mb-1 block font-semibold text-ink">
                      Your time makes a real difference.
                    </strong>
                    Together we can support at-risk youth and young adults across
                    our community.
                  </p>
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
                <Card className="bg-white p-8 text-ink sm:p-10">
                  <form onSubmit={onSubmit} className="space-y-8" noValidate>
                    <input type="hidden" name="formType" value="volunteer" />

                    {/* 1. Contact Information */}
                    <div>
                      <h3 className="text-base font-semibold text-ink">
                        1. Contact information
                      </h3>
                      <hr className="mt-3 mb-5 border-t border-border" />
                      <div className="space-y-5">
                        <div className="grid gap-5 sm:grid-cols-2">
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
                        <div className="grid gap-5 sm:grid-cols-2">
                          <label className="block">
                            <span className="text-xs font-bold uppercase tracking-[0.18em] text-ink/50">
                              Email <span className="text-sky">*</span>
                            </span>
                            <input required type="email" name="email" className={inputClass} placeholder="you@example.com" />
                          </label>
                          <label className="block">
                            <span className="text-xs font-bold uppercase tracking-[0.18em] text-ink/50">
                              City
                            </span>
                            <input name="city" className={inputClass} placeholder="City" />
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* 2. Volunteer Interests */}
                    <div>
                      <h3 className="text-base font-semibold text-ink">
                        2. Volunteer interests
                      </h3>
                      <hr className="mt-3 mb-5 border-t border-border" />
                      <span className="mb-3 block text-xs font-bold uppercase tracking-[0.18em] text-ink/50">
                        I'm interested in <span className="text-sky">*</span>
                      </span>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {interestOptions.map((type) => (
                          <label key={type} className={tileClass}>
                            <input
                              type="checkbox"
                              name="interests"
                              value={type}
                              className="h-4 w-4 accent-sun"
                            />
                            {type}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* 3. Availability */}
                    <div>
                      <h3 className="text-base font-semibold text-ink">
                        3. Availability
                      </h3>
                      <hr className="mt-3 mb-5 border-t border-border" />
                      <span className="mb-3 block text-xs font-bold uppercase tracking-[0.18em] text-ink/50">
                        When are you available?
                      </span>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {availabilityOptions.map((slot) => (
                          <label key={slot} className={tileClass}>
                            <input
                              type="checkbox"
                              name="availability"
                              value={slot}
                              className="h-4 w-4 accent-sun"
                            />
                            {slot}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* 4. Additional Information */}
                    <div>
                      <h3 className="text-base font-semibold text-ink">
                        4. Additional information
                      </h3>
                      <hr className="mt-3 mb-5 border-t border-border" />
                      <label className="block">
                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-ink/50">
                          Anything else?
                        </span>
                        <textarea
                          name="message"
                          rows={4}
                          className={inputClass}
                          placeholder="Anything else you'd like us to know?"
                        />
                      </label>
                    </div>

                    <div>
                      <Button
                        variant="primary"
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full"
                        style={{ color: "white" }}
                      >
                        {status === "sending" ? "Sending…" : "Join the volunteer community"}
                      </Button>
                      {status === "error" && (
                        <p className="mt-3 text-center text-sm text-red-500">{message}</p>
                      )}
                    </div>
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
