"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { PartnerLogoGrid } from "@/components/PartnerLogoGrid";

type Status = "idle" | "sending" | "error";



export default function BrandPartnerPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [storageTypes, setStorageTypes] = useState<string[]>([]);

  function toggleStorageType(type: string, checked: boolean) {
    setStorageTypes((prev) => {
      if (!checked) return prev.filter((t) => t !== type);
      // "Not Applicable" can't be combined with real storage conditions
      if (type === "Not Applicable") return ["Not Applicable"];
      return [...prev.filter((t) => t !== "Not Applicable"), type];
    });
  }

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
      a: "Products are distributed through our partner agency network to at-risk youth and young adults (ages 13–24) across California, with expansion planned into Northern California and the Central Valley.",
    },
    {
      q: "Can we do an employee volunteer event?",
      a: `Absolutely! We host professional “Product Kitting” events where corporate teams assemble dignity kits for foster youth. It’s a hands-on way to boost morale while making tangible impact.`,
    },
    {
      q: "How is impact measured and reported?",
      a: "We use Salesforce and NetSuite to track every donated unit from intake to distribution. Partners receive a custom impact report including total units distributed, youth reached, and geography served.",
    },
  ];

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;

    const formData = new FormData(formEl);
    const productTypes = formData.getAll("productType");
    if (productTypes.length === 0) {
      setStatus("error");
      setMessage("Please select at least one product type.");
      return;
    }
    const selectedStorageTypes = formData.getAll("storageType");
    if (selectedStorageTypes.length === 0) {
      setStatus("error");
      setMessage("Please select at least one food storage type.");
      return;
    }

    setStatus("sending");
    setMessage("");

    const payload: Record<string, FormDataEntryValue> = Object.fromEntries(formData.entries());
    payload.productType = productTypes.map(String).join(", ");
    payload.storageType = selectedStorageTypes.map(String).join(", ");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");
      formEl.reset();
      // Full page load (not client-side nav) so the Google tag reliably
      // records the thank-you visit for conversion tracking.
      window.location.assign("/brand-partner/thank-you");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="bg-white">
      {/* ——— HERO ——— */}
      <section className="relative min-h-[50vh] overflow-hidden sm:min-h-[70vh]">
        <Image
          src="/images/shared/two-women-volunteering.jpeg"
          alt="Teen Health youth partnership event"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: 'center 15%' }}
          sizes="100vw"
          quality={90}
        />
        {/* Gradient overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(35,31,32,0.40) 0%, rgba(35,31,32,0.10) 100%)",
          }}
        />

        {/* Location label */}
        <div className="absolute bottom-4 right-4 z-10 sm:bottom-6 sm:right-6">
          <span className="flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            Skid Row, Los Angeles, CA
          </span>
        </div>

        <div className="relative z-10 w-full px-6 pb-16 pt-32 sm:px-8 sm:pb-20 md:px-12 lg:max-w-3xl lg:px-16 lg:pb-24 flex min-h-[50vh] items-center sm:min-h-[70vh]">
          <div className="max-w-2xl text-left">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#FDCF6A" }}>
                Become a Brand Partner
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-serif text-3xl font-normal tracking-tight text-white sm:text-4xl lg:text-5xl" style={{ lineHeight: 1.1 }}>
                Make Generosity
                <br />
                <span style={{ color: "#FFA10A" }}>On‑Brand</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-row gap-3 sm:justify-start">
                <Button href="#donate-product-form" variant="primary" style={{ backgroundColor: '#FF8005', color: 'white' }}>
                  Partner with us
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
        </div>
      </section>

      {/* ——— SEO LEDE + CREDIBILITY ——— */}
      <section className="py-12 sm:py-16">
        <Container>
          <Reveal>
            <h2 className="mx-auto max-w-4xl text-center font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              Strategic Partnerships for Food &amp; Beverage Brands:
              <br className="hidden lg:block" />{" "}
              Join the Youth Nutrition Initiative
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-ink/70 sm:text-lg">
              A social impact opportunity for purpose-driven brands. Placing your products inside nutrition programs with vetted distribution at scale.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ——— IN GOOD COMPANY — Logo Grid ——— */}
      <PartnerLogoGrid />

      {/* ——— PARTNER TESTIMONIAL ——— */}
      <section className="bg-[#f9f6f2] pb-20 sm:pb-28">
        <Container>
          <Reveal>
            <figure className="mx-auto max-w-3xl border-t border-ink/10 pt-16 text-center sm:pt-20">
              <blockquote>
                <p className="font-serif text-xl font-normal italic leading-relaxed text-ink sm:text-2xl">
                  &ldquo;We&rsquo;re excited to partner with Teen Health! Empowering our youth and nourishing our community are not just acts of kindness; they&rsquo;re investments in a brighter tomorrow. Partnering with Teen Health allows us to turn hope into action and ensure that our at-risk young adults have the support and sustenance they need to flourish. Teen Health exemplifies our core values that Help is Here!&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold uppercase tracking-wide text-ink/60">
                Joseph Underhill, Boost Oxygen
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </section>

      {/* ——— FULL-WIDTH PHOTO ——— */}
      <section className="relative aspect-[4/3] overflow-hidden sm:aspect-auto sm:min-h-[95vh]">
        <Image
          src="/images/shared/mural.jpeg"
          alt="Mural artwork"
          fill
          className="object-cover object-center sm:[object-position:center_25%]"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute bottom-4 right-4 z-10 sm:bottom-6 sm:right-6">
          <span className="flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            Ruth&apos;s Place, Los Angeles, CA
          </span>
        </div>
      </section>

      {/* ——— PARTNER TESTIMONIAL — OceanBlue ——— */}
      <section className="bg-[#f8f7f4] pt-20 sm:pt-28">
        <Container>
          <Reveal>
            <figure className="mx-auto max-w-3xl text-center">
              <blockquote>
                <p className="font-serif text-xl font-normal italic leading-relaxed text-ink sm:text-2xl">
                  &ldquo;Partnering with Teen Health allows OceanBlue to help vulnerable teens and young adults access high-quality omega-3 nutrition so they can thrive. Turning our commitment to giving into real-world impact for at-risk youth is deeply meaningful for our team and our community.&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold uppercase tracking-wide text-ink/60">
                Sarah Syed, OceanBlue
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </section>

      {/* ——— PARTNERSHIP PHOTO — UCI Health Autism Center / Nordic Naturals ——— */}
      <section className="bg-[#f8f7f4] pt-16 sm:pt-20">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 md:gap-8">
            <Reveal>
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/shared/uci-health-autism-center-nordic-naturals-teen-health.jpeg"
                    alt="Teen Health partnership with UCI Health Center for Autism, featuring Nordic Naturals Focus and Prebiotic products"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 560px"
                    quality={85}
                  />
                </div>
                <figcaption className="mt-4 flex justify-center">
                  <span className="flex max-w-full items-center gap-1.5 rounded-full bg-black/5 px-3 py-1 text-center text-xs font-medium tracking-wide text-ink/50">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    UCI Health Center for Autism &amp; Neurodevelopmental Disorders, Irvine, CA
                  </span>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.08}>
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/shared/project-kinship-nordic-naturals-teen-health.jpeg"
                    alt="Teen Health partnership with Project Kinship, featuring Nordic Naturals Focus and Prebiotic products"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 560px"
                    quality={85}
                  />
                </div>
                <figcaption className="mt-4 flex justify-center">
                  <span className="flex max-w-full items-center gap-1.5 rounded-full bg-black/5 px-3 py-1 text-center text-xs font-medium tracking-wide text-ink/50">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    Project Kinship, Santa Ana, CA
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ——— PHOTO CTA TEXT ——— */}
      <section className="bg-[#f8f7f4] py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                Ready to make an impact?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-balance text-base leading-relaxed text-ink/80">
                We help you move closeout, distressed, mislabeled, and
                short-dated products quickly—turning your excess inventory
                into meaningful impact for at-risk youth.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10">
                <Button href="#donate-product-form" variant="primary" style={{ backgroundColor: '#FF8005', color: 'white' }}>
                  Become a Partner
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ——— WHAT WE ACCEPT ——— */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/50">
                  What we accept
                </p>
                <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                  Quality products that make a{" "}
                  <br className="hidden sm:block" />
                  real difference.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-ink/70">
                  We accept packaged, shelf-stable products that meet our quality
                  standards. Every donated item is sorted, kitted, and
                  distributed through our trusted partner network.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "1/1" }}>
                <Image
                  src="/images/shared/yerba-mate-pallet.jpeg"
                  alt="Products ready for youth distribution"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 70%' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ——— PRODUCT CATEGORIES ——— */}
      <section className="border-y border-ink/5 py-12 sm:py-16">
        <Container>
          <Reveal>
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/50">
                Product categories
              </p>
              <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                We accept a wide range of quality products.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Healthy foods", desc: "Snacks, bars, cereals, and shelf-stable meals." },
              { label: "Beverages", desc: "Water, electrolyte drinks, and functional beverages." },
              { label: "Supplements", desc: "Vitamins, minerals, and wellness products." },
              { label: "Natural personal care", desc: "Natural hygiene products, skincare, and dental care." },
              { label: "Hydration mixes", desc: "Electrolyte powders, hydration packets, and drink mixes." },
              { label: "Apparel & clothing", desc: "Clothing, outerwear, and accessories for youth in need." },
              { label: "Backpacks", desc: "Everyday carry essentials for youth on the move." },
              { label: "Tents & sleeping bags", desc: "Shelter essentials for homeless and at-risk youth." },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.06}>
                <Card className="text-center">
                  <div className="text-sm font-semibold tracking-tight text-ink">
                    {item.label}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink text-pretty">{item.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ——— HOW IT WORKS ——— */}
      <section id="how-it-works" className="scroll-mt-20 py-12 sm:py-16">
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
                image: "/images/shared/teen-health-supplements.jpeg",
                imageAlt: "Teen Health products ready to help youth",
                imagePosition: "center 45%",
              },
              {
                num: "02",
                title: "We coordinate logistics",
                desc: "We arrange pickup or provide shipping guidance. Our team handles intake, quality checks, and sorting — your products arrive organized and ready to be put to use. We handle the heavy lifting.",
                image: "/images/shared/purely-elizabeth-granola.jpg",
                imageAlt: "Purely Elizabeth granola ready for donation",
                imagePosition: "30% 35%",
              },
              {
                num: "03",
                title: "Products reach youth fast",
                desc: "Donated products are kitted and distributed through our partner agencies to at-risk youth ages 13–24 across California. Every item goes directly to someone who needs it.",
                image: "/images/shared/young-people-products.jpg",
                imageAlt: "Teen Health delivering kits to youth",
              },
            ].map((step) => (
              <Reveal key={step.num} delay={0.05}>
                <div className="grid items-center gap-10 border-t border-ink/10 py-5 lg:grid-cols-[100px_1fr_1fr] lg:gap-16">
                  <div className="font-serif text-6xl font-normal text-navy/40 lg:text-7xl">
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
                  <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover"
                      style={{ objectPosition: (step as any).imagePosition ?? 'top' }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={100}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ——— DONATION REASONS ——— */}
      <section className="border-t border-ink/5 py-12 sm:py-16">
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
                  <p className="mt-2 text-sm leading-relaxed text-ink text-pretty">{item.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ——— WHY PARTNER WITH US ——— */}
      <section className="py-12 sm:py-16">
        <Container>
          <Reveal>
            <h2 className="text-center font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              Why Partner With Us?
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <Reveal delay={0.08} className="h-full">
              <div className="h-full rounded-3xl bg-[#f8f7f5] p-8 sm:p-10">
                <h3 className="font-serif text-xl font-normal tracking-tight text-ink sm:text-2xl">
                  Intentional, Health-Focused Products
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink/60">
                  We ensure these products reach at-risk youth and young adults
                  (13–24). Unlike a traditional food bank, we’re
                  intentional about the food, beverages, hydration, and
                  supplements we provide, raising the level of health and
                  wellness for those we support.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16} className="h-full">
              <div className="h-full rounded-3xl bg-[#f8f7f5] p-8 sm:p-10">
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

            <Reveal delay={0.24} className="h-full">
              <div className="h-full rounded-3xl bg-[#f8f7f5] p-8 sm:p-10">
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

            <Reveal delay={0.32} className="h-full">
              <div className="h-full rounded-3xl bg-[#f8f7f5] p-8 sm:p-10">
                <h3 className="font-serif text-xl font-normal tracking-tight text-ink sm:text-2xl">
                  Employee Engagement
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink/60">
                  Host professional “Product Kitting” events where
                  corporate teams assemble dignity kits for foster youth.
                  These events boost employee morale while making a tangible
                  difference.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ——— DELIVERABLES ——— */}
      <section className="border-t border-ink/5 py-12 sm:py-16">
        <Container>
          <Reveal>
            <h2 className="text-center font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              Doing Good is Good Business
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-ink/70">
              Concrete deliverables for every brand partner — built for marketing, ESG reporting, and corporate finance teams.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 max-w-4xl divide-y divide-border">
            {[
              { num: "01", title: "Brand Integration", desc: <>Product sampling in youth nutrition packs across <a href="/youth-nutrition-initiative" className="underline decoration-ink/30 underline-offset-2 hover:decoration-ink">the Youth Nutrition Initiative</a> — measurable reach with the audiences your purpose-driven marketing is built to serve.</> },
              { num: "02", title: "Data Insights", desc: "Quarterly impact reports formatted for your ESG and CSR filings — units distributed, youth reached, and geographies served, ready to drop into your annual disclosures." },
              { num: "03", title: "Content Assets", desc: "Professional photography and “Social Impact” stories from the field, licensed for brand use across owned and earned channels." },
              { num: "04", title: "Tax-Deductible Contributions", desc: "Formal 501(c)(3) acknowledgment letter for every donation — a clean documentation trail for your corporate finance and accounting teams." },
            ].map((item, i) => (
              <Reveal key={item.num} delay={i * 0.06}>
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 py-6 sm:grid-cols-[5rem_14rem_1fr] sm:gap-x-8 sm:py-8">
                  <span className="font-serif text-2xl text-navy/65 sm:text-3xl">{item.num}</span>
                  <h3 className="col-span-1 font-serif text-xl font-normal tracking-tight text-ink sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="col-span-2 text-base leading-relaxed text-ink/70 sm:col-span-1">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── PHOTO BREAK ─── */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Reveal delay={0.08}>
              <div className="relative overflow-hidden rounded-2xl" style={{ height: "560px" }}>
                <Image
                  src="/images/shared/gu-box.jpeg"
                  alt="GU energy boxes staged for distribution alongside other partner products"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="relative overflow-hidden rounded-2xl" style={{ height: "560px" }}>
                <Image
                  src="/images/shared/ruths-place-earth-harmony-opt.jpeg"
                  alt="Plant-based protein donations staged at Ruth's Place"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* â”€â”€â”€ FREQUENTLY ASKED QUESTIONS â”€â”€â”€ */}
      <section className="border-t border-ink/5 py-12 sm:py-16">
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

      {/* â”€â”€â”€ PRODUCT DONATION FORM â”€â”€â”€ */}
      <section id="donate-product-form" className="scroll-mt-24">
        <style
          dangerouslySetInnerHTML={{
            __html: `
              #donate-product-form {
                --navy: #1c3a6e;
                --navy-dark: #14294f;
                --blue-accent: #2f5db3;
                --orange: #f0781f;
                --orange-dark: #d9660f;
                --bg: #f7f6f3;
                --card-bg: #ffffff;
                --border: #dfe2e7;
                --text: #1f2430;
                --text-muted: #5b6270;
                padding: 64px 24px;
                background: var(--bg);
                color: var(--text);
              }
              #donate-product-form .dpf-wrap { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 380px 1fr; gap: 48px; align-items: start; }
              @media (max-width: 900px) { #donate-product-form .dpf-wrap { grid-template-columns: 1fr; } }
              #donate-product-form .dpf-eyebrow { font-size: 13px; font-weight: 700; letter-spacing: 0.12em; color: var(--blue-accent); margin-bottom: 12px; }
              #donate-product-form .dpf-heading { font-family: Georgia, "Times New Roman", serif; font-size: 36px; font-weight: 400; letter-spacing: -0.01em; line-height: 1.15; color: var(--navy-dark); margin: 0 0 18px; }
              #donate-product-form .dpf-sub { font-size: 16px; line-height: 1.6; color: var(--text-muted); margin: 0 0 36px; }
              #donate-product-form .dpf-step { display: flex; gap: 18px; padding: 22px 0; border-top: 1px solid var(--border); }
              #donate-product-form .dpf-step:first-of-type { border-top: none; padding-top: 0; }
              #donate-product-form .dpf-step-num { font-family: Georgia, serif; font-size: 24px; color: rgba(28, 58, 110, 0.65); font-weight: 400; margin: 0 0 4px; }
              #donate-product-form .dpf-step-title { font-size: 17px; font-weight: 600; color: var(--text); margin: 0 0 6px; }
              #donate-product-form .dpf-step-desc { font-size: 14px; line-height: 1.55; color: var(--text-muted); margin: 0; }
              #donate-product-form .dpf-callout { margin-top: 28px; background: #e7edf9; border-radius: 12px; padding: 20px; display: flex; gap: 14px; align-items: flex-start; }
              #donate-product-form .dpf-callout p { margin: 0; font-size: 14px; line-height: 1.55; color: var(--navy-dark); }
              #donate-product-form .dpf-callout strong { display: block; margin-bottom: 2px; }
              #donate-product-form .dpf-card { background: var(--card-bg); border-radius: 16px; box-shadow: 0 10px 40px rgba(20, 41, 79, 0.08); padding: 40px; }
              @media (max-width: 560px) { #donate-product-form .dpf-card { padding: 24px; } }
              #donate-product-form .dpf-section-head { display: flex; align-items: center; gap: 10px; margin: 0 0 6px; }
              #donate-product-form .dpf-section-head:not(:first-child) { margin-top: 34px; }
              #donate-product-form .dpf-section-head h3 { font-size: 18px; font-weight: 600; color: var(--navy-dark); margin: 0; }
              #donate-product-form .dpf-section-sub { font-size: 13px; color: var(--text-muted); margin: 0 0 16px; }
              #donate-product-form .dpf-hr { border: none; border-top: 1px solid var(--border); margin: 0 0 20px; }
              #donate-product-form .dpf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 18px; }
              @media (max-width: 700px) { #donate-product-form .dpf-row { grid-template-columns: 1fr; } }
              #donate-product-form .dpf-field label, #donate-product-form .dpf-group > .dpf-group-label { display: block; font-size: 12px; font-weight: 700; letter-spacing: 0.03em; text-transform: uppercase; color: var(--navy-dark); margin-bottom: 8px; }
              #donate-product-form .dpf-required { color: var(--orange); }
              #donate-product-form .dpf-hint { font-size: 12.5px; color: var(--text-muted); margin: -3px 0 8px; }
              #donate-product-form .dpf-field input[type="text"], #donate-product-form .dpf-field input[type="email"], #donate-product-form .dpf-field input[type="tel"], #donate-product-form .dpf-field select, #donate-product-form .dpf-field textarea { width: 100%; font-size: 14.5px; padding: 12px 14px; border: 1px solid var(--border); border-radius: 8px; background: #fff; color: var(--text); font-family: inherit; transition: border-color 0.15s, box-shadow 0.15s; }
              #donate-product-form .dpf-field input:focus, #donate-product-form .dpf-field select:focus, #donate-product-form .dpf-field textarea:focus { outline: none; border-color: var(--blue-accent); box-shadow: 0 0 0 3px rgba(47, 93, 179, 0.15); }
              #donate-product-form .dpf-field textarea { resize: vertical; min-height: 100px; }
              #donate-product-form .dpf-select-wrap { position: relative; }
              #donate-product-form .dpf-select-wrap select { appearance: none; -webkit-appearance: none; padding-right: 36px; }
              #donate-product-form .dpf-select-wrap::after { content: ""; position: absolute; right: 14px; top: 50%; width: 8px; height: 8px; border-right: 2px solid var(--text-muted); border-bottom: 2px solid var(--text-muted); transform: translateY(-70%) rotate(45deg); pointer-events: none; }
              #donate-product-form .dpf-tiles { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
              @media (max-width: 560px) { #donate-product-form .dpf-tiles { grid-template-columns: 1fr; } }
              #donate-product-form .dpf-tile { position: relative; display: flex; align-items: center; gap: 10px; border: 1px solid var(--border); border-radius: 10px; padding: 12px 14px; cursor: pointer; font-size: 14px; color: var(--text); background: #fff; transition: border-color 0.15s, background 0.15s; }
              #donate-product-form .dpf-tile:hover { border-color: var(--blue-accent); }
              #donate-product-form .dpf-tile input { position: absolute; opacity: 0; pointer-events: none; }
              #donate-product-form .dpf-tile .dpf-radio { flex: 0 0 auto; width: 16px; height: 16px; border-radius: 50%; border: 2px solid #c6cbd3; display: inline-block; position: relative; }
              #donate-product-form .dpf-tile input:checked ~ .dpf-radio { border-color: var(--blue-accent); }
              #donate-product-form .dpf-tile input:checked ~ .dpf-radio::after { content: ""; position: absolute; inset: 2px; border-radius: 50%; background: var(--blue-accent); }
              #donate-product-form .dpf-tile .dpf-check { flex: 0 0 auto; width: 16px; height: 16px; border-radius: 4px; border: 2px solid #c6cbd3; display: inline-block; position: relative; }
              #donate-product-form .dpf-tile input:checked ~ .dpf-check { border-color: var(--blue-accent); background: var(--blue-accent); }
              #donate-product-form .dpf-tile input:checked ~ .dpf-check::after { content: ""; position: absolute; left: 4px; top: 1px; width: 4px; height: 8px; border-right: 2px solid #fff; border-bottom: 2px solid #fff; transform: rotate(45deg); }
              #donate-product-form .dpf-tile:has(input:checked) { border-color: var(--blue-accent); background: #eef3fc; }
              #donate-product-form .dpf-submit { width: 100%; margin-top: 28px; background: var(--orange); color: #fff; border: none; border-radius: 10px; padding: 16px 20px; font-size: 15.5px; font-weight: 700; letter-spacing: 0.01em; cursor: pointer; transition: background 0.15s; }
              #donate-product-form .dpf-submit:hover { background: var(--orange-dark); }
              #donate-product-form .dpf-submit:disabled { opacity: 0.6; cursor: not-allowed; }
              #donate-product-form .dpf-status { margin-top: 14px; font-size: 13.5px; text-align: center; }
              #donate-product-form .dpf-status.dpf-err { color: #b3261e; }
              #donate-product-form .dpf-success { text-align: center; padding: 24px 0; }
              #donate-product-form .dpf-success-icon { width: 48px; height: 48px; border-radius: 50%; background: #e7f6ec; color: #1b7a3d; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; }
              #donate-product-form .dpf-success h3 { font-family: Georgia, serif; font-weight: 400; font-size: 22px; color: var(--navy-dark); margin: 0 0 8px; }
              #donate-product-form .dpf-success p { font-size: 14px; line-height: 1.6; color: var(--text-muted); margin: 0; }
            `,
          }}
        />
        <div className="dpf-wrap">
          {/* LEFT: intro / steps */}
          <div className="dpf-intro">
            <div className="dpf-eyebrow">GET STARTED</div>
            <h2 className="dpf-heading">Start a product donation.</h2>
            <p className="dpf-sub">
              Tell us about your product and our team will follow up within a few
              business days to coordinate logistics and connect you with the right
              partners.
            </p>

            <div className="dpf-step">
              <div>
                <p className="dpf-step-num">01</p>
                <p className="dpf-step-title">Tell us about your donation</p>
                <p className="dpf-step-desc">Share details about your product, storage type, quantity, and how you&rsquo;d like to donate.</p>
              </div>
            </div>

            <div className="dpf-step">
              <div>
                <p className="dpf-step-num">02</p>
                <p className="dpf-step-title">We&rsquo;ll review &amp; connect</p>
                <p className="dpf-step-desc">Our team evaluates the fit and reaches out to coordinate next steps and find the best match.</p>
              </div>
            </div>

            <div className="dpf-step">
              <div>
                <p className="dpf-step-num">03</p>
                <p className="dpf-step-title">Schedule pickup or delivery</p>
                <p className="dpf-step-desc">We arrange logistics so your donation reaches those who need it quickly and safely.</p>
              </div>
            </div>

            <div className="dpf-callout">
              <p><strong>Your donations make a real difference.</strong>Together we can fight hunger and strengthen our community.</p>
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="dpf-card">
            <form onSubmit={onSubmit}>
                <input type="hidden" name="formType" value="product-donation" />

                <div className="dpf-section-head">
                  <h3>1. Contact Information</h3>
                </div>
                <hr className="dpf-hr" />

                <div className="dpf-row">
                  <div className="dpf-field">
                    <label htmlFor="dpfName">Contact name <span className="dpf-required">*</span></label>
                    <input type="text" id="dpfName" name="contactName" placeholder="Your name" required />
                  </div>
                  <div className="dpf-field">
                    <label htmlFor="dpfCompany">Company <span className="dpf-required">*</span></label>
                    <input type="text" id="dpfCompany" name="company" placeholder="Company name" required />
                  </div>
                </div>
                <div className="dpf-row">
                  <div className="dpf-field">
                    <label htmlFor="dpfEmail">Email <span className="dpf-required">*</span></label>
                    <input type="email" id="dpfEmail" name="email" placeholder="you@example.com" required />
                  </div>
                  <div className="dpf-field">
                    <label htmlFor="dpfPhone">Phone number</label>
                    <input type="tel" id="dpfPhone" name="phone" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div className="dpf-section-head">
                  <h3>2. Organization &amp; Interests</h3>
                </div>
                <hr className="dpf-hr" />

                <div className="dpf-row">
                  <div className="dpf-field">
                    <label htmlFor="dpfIndustry">Industry <span className="dpf-required">*</span></label>
                    <div className="dpf-select-wrap">
                      <select id="dpfIndustry" name="industry" defaultValue="" required>
                        <option value="" disabled>Select industry…</option>
                        <option>Food &amp; Beverage</option>
                        <option>Supplements &amp; Nutrition</option>
                        <option>Personal Care / Hygiene</option>
                        <option>Apparel / Lifestyle</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="dpf-field">
                    <label htmlFor="dpfInterest">Partnership interest <span className="dpf-required">*</span></label>
                    <div className="dpf-select-wrap">
                      <select id="dpfInterest" name="partnershipInterest" defaultValue="" required>
                        <option value="" disabled>Select interest…</option>
                        <option>Product donation (excess inventory)</option>
                        <option>Marketing &amp; brand integration</option>
                        <option>ESG / CSR reporting sponsor</option>
                        <option>Employee engagement / volunteer events</option>
                        <option>Other / multiple</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="dpf-group" style={{ marginBottom: "18px" }}>
                  <span className="dpf-group-label">Product type <span className="dpf-required">*</span></span>
                  <div className="dpf-tiles">
                    {[
                      "Healthy Foods",
                      "Beverages / Hydration",
                      "Supplements",
                      "Personal Care",
                      "Mixed / Other",
                    ].map((type) => (
                      <label className="dpf-tile" key={type}>
                        <input type="checkbox" name="productType" value={type} />
                        <span className="dpf-check" />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="dpf-section-head">
                  <h3>3. Donation Details</h3>
                </div>
                <p className="dpf-section-sub">This helps us plan handling and logistics.</p>
                <hr className="dpf-hr" style={{ marginTop: "-10px" }} />

                <div className="dpf-row">
                  <div className="dpf-group">
                    <span className="dpf-group-label">Food storage type <span className="dpf-required">*</span></span>
                    <p className="dpf-hint">Select all storage conditions that apply.</p>
                    <div className="dpf-tiles" style={{ gridTemplateColumns: "1fr" }}>
                      {["Dry Goods", "Refrigerated", "Frozen", "Not Applicable"].map((type) => (
                        <label className="dpf-tile" key={type}>
                          <input
                            type="checkbox"
                            name="storageType"
                            value={type}
                            checked={storageTypes.includes(type)}
                            onChange={(e) => toggleStorageType(type, e.target.checked)}
                          />
                          <span className="dpf-check" />
                          {type}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="dpf-group">
                    <span className="dpf-group-label">Donor type <span className="dpf-required">*</span></span>
                    <p className="dpf-hint">Are you donating as a business or individual?</p>
                    <div className="dpf-tiles" style={{ gridTemplateColumns: "1fr" }}>
                      {["Business", "Farm", "Individual"].map((type, i) => (
                        <label className="dpf-tile" key={type}>
                          <input type="radio" name="donorType" value={type} required={i === 0} />
                          <span className="dpf-radio" />
                          {type}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="dpf-section-head">
                  <h3>4. Product Information</h3>
                </div>
                <hr className="dpf-hr" />

                <div className="dpf-field" style={{ marginBottom: "6px" }}>
                  <label htmlFor="dpfDetails">Additional Information</label>
                  <textarea id="dpfDetails" name="productDetails" placeholder="Quantity, condition, timing, and any other details that will help us understand your donation." />
                </div>

                <button type="submit" className="dpf-submit" disabled={status === "sending"}>
                  {status === "sending" ? "Submitting…" : "Submit donation inquiry"}
                </button>
                {status === "error" && <p className="dpf-status dpf-err">{message}</p>}
              </form>
          </div>
        </div>
      </section>

      {/* ——— FINAL CTA ——— */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="rounded-3xl p-8 text-center sm:p-10" style={{ backgroundColor: '#E5EEFB' }}>
            <Reveal>
              <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                Let’s Build a Healthier Future Together
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
                <Button href="#donate-product-form" variant="primary" style={{ backgroundColor: '#FF8005', color: 'white' }}>
                  Become a Partner
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}

