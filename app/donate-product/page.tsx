"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

type Status = "idle" | "sending" | "sent" | "error";

export default function DonateProductPage() {
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
        <div className="absolute inset-0">
          <Image
            src="/images/programs/food-rescue/IMG_0889.jpeg"
            alt="Food rescue products ready for distribution"
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
                Donate product
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-serif text-5xl font-normal leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Give product a{" "}
                <span className="hero-highlight">second life.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/70">
                Instead of disposing of surplus, short-dated, or discontinued
                inventory, partner with Teen Health to get quality products into
                the hands of youth who need them.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10">
                <Button href="#donate-product-form" variant="primary">
                  Start a product donation
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
