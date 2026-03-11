"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { PartnerLogoGrid } from "@/components/PartnerLogoGrid";

type Status = "idle" | "sending" | "sent" | "error";



export default function BrandPartnerPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What types of products can we donate?",
      a: "We accept packaged, shelf-stable food and beverages, supplements, vitamins, personal care products, and hygiene items. Products should be in good condition with reasonable remaining shelf life.",
    },
    {
      q: "Is there a minimum donation quantity?",
      a: "We're flexible. Whether it's a single pallet or a full truckload, we'll work with you to coordinate pickup and distribution. Larger donations may qualify for additional impact reporting.",
    },
    {
      q: "How do I receive a tax receipt?",
      a: "Teen Health is a registered 501(c)(3) nonprofit. We provide a formal donation acknowledgment letter for all in-kind contributions, which you can use for tax deduction purposes.",
    },
    {
      q: "Where are donated products distributed?",
      a: "Products are distributed through our partner agency network to at-risk youth and young adults (ages 13–29) across California, with expansion planned into Northern California and the Central Valley.",
    },
    {
      q: "Can we do an employee volunteer event?",
      a: `Absolutely! We host professional \u201cProduct Kitting\u201d events where corporate teams assemble dignity kits for foster youth. It\u2019s a hands-on way to boost morale while making tangible impact.`,
    },
    {
      q: "How is impact measured and reported?",
      a: "We use Salesforce and NetSuite to track every donated unit from intake to distribution. Partners receive a custom impact report including total units distributed, youth reached, and geography served.",
    },
  ];

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
      setMessage("Thanks for your interest in partnering with us! We'll be in touch soon.");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-sun focus:ring-2 focus:ring-sun/20";

  return (
    <div className="bg-white">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden" style={{ minHeight: "85vh" }}>
        <Image
          src="/images/partnerships/IMG_5265.jpeg"
          alt="Teen Health youth partnership event"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        {/* Gradient overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to left, rgba(35,31,32,0.92) 0%, rgba(35,31,32,0.70) 50%, rgba(35,31,32,0.15) 100%)",
          }}
        />

        <Container className="relative z-10 flex min-h-[85vh] items-end justify-end pb-16 sm:pb-24 lg:pb-28">
          <div className="max-w-2xl text-right">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-sun">
                Brand Partnerships
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 font-serif text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Make generosity
                <br />
                on&#8209;brand.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg sm:leading-relaxed">
                Since 2022, we&apos;ve teamed up with 250+ companies to turn
                surplus into life-changing impact&mdash;across every aisle,
                from nutrition to wellness and beyond.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-end">
                <Button href="#donate-product-form" variant="primary">
                  Partner With Us
                </Button>
                <Button
                  href="#how-it-works"
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  See how it works
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── IMPACT STATS ─── */}
      <section className="border-b border-ink/5 py-20 sm:py-28">
        <Container>
          <Reveal>
            <h2 className="text-center font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              Our Impact, Powered by Partnerships
            </h2>
          </Reveal>

          <div className="mx-auto mt-16 grid max-w-4xl gap-12 sm:grid-cols-3">
            {[
              { stat: "250+", label: "Brand partners to date" },
              { stat: "5,000", label: "Youth reached per year" },
              { stat: "$25", label: "Delivers a kit worth $50" },
            ].map((item, i) => (
              <Reveal key={item.stat} delay={i * 0.08}>
                <div className="text-center">
                  <div className="font-serif text-5xl font-normal tracking-tight text-ink sm:text-6xl">
                    {item.stat}
                  </div>
                  <p className="mt-4 text-sm font-medium uppercase tracking-[0.15em] text-ink/40">
                    {item.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── IN GOOD COMPANY — Logo Grid ─── */}
      <PartnerLogoGrid />

      {/* ─── FULL-WIDTH PHOTO CTA ─── */}
      <section className="relative overflow-hidden" style={{ minHeight: "50vh" }}>
        <Image
          src="/images/partnerships/IMG_4664.jpg"
          alt="Teen Health delivering kits to youth"
          fill
          className="object-cover object-top"
          sizes="100vw"
          quality={85}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(35,31,32,0.85) 0%, rgba(35,31,32,0.55) 60%, rgba(35,31,32,0.25) 100%)",
          }}
        />
        <Container className="relative z-10 flex min-h-[50vh] items-center py-16">
          <div className="max-w-lg">
            <Reveal>
              <h2 className="font-serif text-3xl font-normal tracking-tight text-white sm:text-4xl md:text-5xl">
                Ready to make
                <br />
                an impact?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                We help you move closeout, distressed, mislabeled, and
                short-dated products quickly&mdash;turning your excess inventory
                into meaningful impact for at-risk youth.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8">
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
                <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/images/shared/IMG_3800.jpeg"
                    alt="Products ready for youth distribution"
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
      <section className="border-y border-ink/5 py-20 sm:py-28">
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
              { icon: "⚡", label: "Supplements", desc: "Vitamins, minerals, and wellness products." },
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
      <section id="how-it-works" className="scroll-mt-20 py-20 sm:py-28">
        <Container>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/50">
              How it works
            </p>
            <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              From your warehouse to youth in need.
            </h2>
          </Reveal>

          <div className="mt-16 space-y-0">
            {[
              {
                num: "01",
                title: "Tell us what you have",
                desc: "Share product details, quantities, and any timing constraints. We'll confirm what fits our current needs. We work with a wide range of products across food, hydration, supplements, and personal care, so don't hesitate to reach out even if you're unsure.",
                image: "/images/programs/essential-kits/IMG_5095.jpeg",
                imageAlt: "Essential kits being assembled",
              },
              {
                num: "02",
                title: "We coordinate logistics",
                desc: "We arrange pickup or provide shipping guidance. Our team handles intake, quality checks, and sorting — your products arrive organized and ready to be put to use. We handle the heavy lifting.",
                image: "/images/shared/IMG_4151.jpeg",
                imageAlt: "Logistics coordination for product donation",
              },
              {
                num: "03",
                title: "Products reach youth fast",
                desc: "Donated products are kitted and distributed through our partner agencies to at-risk youth ages 13–29 across California. Every item goes directly to someone who needs it.",
                image: "/images/shared/ch la.jpeg",
                imageAlt: "Teen Health delivering products to youth",
              },
            ].map((step) => (
              <Reveal key={step.num} delay={0.05}>
                <div className="grid items-center gap-10 border-t border-ink/10 py-5 lg:grid-cols-[100px_1fr_1fr] lg:gap-16">
                  <div className="font-serif text-6xl font-normal text-ink/10 lg:text-7xl">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-normal tracking-tight text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-md text-base leading-relaxed text-ink/60">
                      {step.desc}
                    </p>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "16/10" }}>
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      quality={90}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── DONATION REASONS ─── */}
      <section className="border-t border-ink/5 py-20 sm:py-28">
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

      {/* ─── WHY PARTNER WITH US ─── */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <h2 className="text-center font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              Why Partner With Us?
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <Reveal delay={0.08}>
              <div className="rounded-3xl bg-[#f8f7f5] p-8 sm:p-10">
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
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="rounded-3xl bg-[#f8f7f5] p-8 sm:p-10">
                <h3 className="font-serif text-xl font-normal tracking-tight text-ink sm:text-2xl">
                  Tech-Driven Efficiency
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink/60">
                  We use Salesforce, NetSuite, and AI to automate operations and
                  manage inventory seamlessly. This ensures your contributions
                  reach those in need quickly and effectively.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="rounded-3xl bg-[#f8f7f5] p-8 sm:p-10">
                <h3 className="font-serif text-xl font-normal tracking-tight text-ink sm:text-2xl">
                  Purpose-Driven Partnerships
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink/60">
                  In an era of increased ESG scrutiny, partnering with Teen
                  Health offers a transparent, measurable way to fulfill your
                  Social pillar. Our work helps you reduce waste, support
                  vulnerable youth, and drive measurable social impact.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="rounded-3xl bg-[#f8f7f5] p-8 sm:p-10">
                <h3 className="font-serif text-xl font-normal tracking-tight text-ink sm:text-2xl">
                  Employee Engagement
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink/60">
                  Host professional &ldquo;Product Kitting&rdquo; events where
                  corporate teams assemble dignity kits for foster youth.
                  These events boost employee morale while making a tangible
                  difference.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── FREQUENTLY ASKED QUESTIONS ─── */}
      <section className="border-t border-ink/5 py-20 sm:py-28">
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

      {/* ─── FINAL CTA ─── */}
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
