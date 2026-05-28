import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export const metadata = {
  title: "Youth Nutrition Initiative",
  description:
    "A 20-day daily intervention delivering low-glycemic, whole-food snacks to 50,000 at-risk youth across Southern California.",
};

const faqs = [
  {
    q: "How much does the Youth Nutrition Initiative cost per child?",
    a: "$40 covers the full 20-day intervention for one youth — all-inclusive, with no additional implementation costs for partners or schools.",
  },
  {
    q: "What does the $40 per child include?",
    a: "It covers all 20 daily snack servings, distribution logistics, and program implementation. There are no separate setup, equipment, or per-site fees.",
  },
  {
    q: "How does the cost of prevention compare to treating diabetes?",
    a: "$40 per youth for prevention versus $10,000+ annually per patient for ongoing Type 2 diabetes treatment — a roughly 250× cost differential.",
  },
  {
    q: "How many youth does the Phase 1 program serve?",
    a: "Phase 1 reaches 50,000 at-risk youth across Southern California through 10–30+ distribution sites over 20 days, with $2M in total funding.",
  },
  {
    q: "What kinds of foods does the program provide?",
    a: "Plant-based, low-glycemic snacks designed for sustained energy and blood-sugar stability — all ADA Better Choices for Life designated and USDA Smart Snack compliant.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function YouthNutritionInitiativeLandingPage() {
  return (
    <div className="bg-transparent">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-[#F2F6FC]">
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-16 lg:py-24">
          {/* Left */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-mintDark/50 bg-mintDark/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-ink/75">
                <span className="h-2 w-2 animate-pulse rounded-full bg-mintDark" />
                ADA-Aligned Nutrition Intervention
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1
                className="mt-7 font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl lg:text-[2.5rem]"
                style={{ lineHeight: 1.1 }}
              >
                Expanding Access to
                <br />
                <span className="text-mintDark">
                  Healthy Youth Nutrition
                </span>
                <br />
                in Southern California
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/80">
                A 20-day daily intervention delivering low-glycemic, whole-food
                snacks to 50,000 at-risk youth across Southern California — through
                schools, nonprofits, and community programs.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex gap-10">
                <div>
                  <p className="font-serif text-4xl font-normal text-mintDark">50K</p>
                  <p className="mt-1 text-xs text-ink/70">At-Risk Youth Served</p>
                </div>
                <div>
                  <p className="font-serif text-4xl font-normal text-sky">1M</p>
                  <p className="mt-1 text-xs text-ink/70">Total Servings</p>
                </div>
                <div>
                  <p className="font-serif text-4xl font-normal text-navy">20</p>
                  <p className="mt-1 text-xs text-ink/70">Days of Daily Access</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — impact card */}
          <Reveal delay={0.25}>
            <div className="rounded-3xl border border-border bg-white p-8 shadow-soft sm:p-10">
              <h3 className="font-serif text-xl font-normal tracking-tight text-ink">
                Designed for Measurable Impact
              </h3>

              <div className="mt-6 space-y-0 divide-y divide-border">
                {[
                  { icon: "↑", color: "mintDark", text: <><strong className="text-ink">Sustained energy</strong> throughout program hours.</> },
                  { icon: "↓", color: "sky", text: <><strong className="text-ink">Mid-day crashes</strong> and hunger-related disruptions.</> },
                  { icon: "↑", color: "mintDark", text: <><strong className="text-ink">Focus, participation</strong> and cognitive engagement.</> },
                  { icon: "↓", color: "sky", text: <><strong className="text-ink">Long-term diabetes risk</strong> through metabolic stability.</> },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-4 py-4">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-base ${
                        row.color === "mintDark" ? "bg-mintDark/20" : "bg-sky/15"
                      }`}
                    >
                      {row.icon}
                    </span>
                    <p className="text-sm leading-snug text-ink/80">{row.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

      </section>

      {/* ═══ THE PROBLEM ═══ */}
      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sky">
              <span className="inline-block h-[2px] w-6 bg-sky" />
              The Problem
            </p>
            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              Nutrition Inequity Is Driving
              {" "}<br className="hidden sm:inline" />
              Long-Term Health Outcomes
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/80">
              Access — not awareness — is the core issue. Limited access to
              healthy food, high-sugar daily environments, and early dietary
              habits are driving lifelong metabolic risk, including Type 2
              diabetes and reduced insulin sensitivity in teens.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              { stat: "1 in 5", color: "text-mintDark", title: "Youth Face Food Insecurity", desc: "Millions of young people lack reliable access to nutritious meals, creating a foundation for poor health outcomes." },
              { stat: "1 in 3", color: "text-sky", title: "Youth Face Metabolic Risk", desc: "High-sugar, low-fiber environments lead to blood sugar spikes, energy crashes, and reduced cognitive performance." },
              { stat: "100K+", color: "text-navy", title: "At Elevated Risk in San Diego", desc: "Over 500,000 students in the county, ~60% qualify for Free & Reduced Lunch, and 30%+ face overweight or obesity risk." },
            ].map((card) => (
              <Reveal key={card.title} delay={0.05}>
                <div className="h-full rounded-2xl border border-border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                  <p className={`font-serif text-4xl font-normal tracking-tight ${card.color}`}>
                    {card.stat}
                  </p>
                  <h4 className="mt-2 text-sm font-bold text-ink">{card.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink/80">{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══ THE SOLUTION ═══ */}
      <section className="bg-[#F8F9FA] py-16 sm:py-24">
        <Container>
          <Reveal>
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sky">
              <span className="inline-block h-[2px] w-6 bg-sky" />
              The Solution
            </p>
            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              A Daily, Low-Glycemic
              {" "}<br className="hidden sm:inline" />
              Nutrition Intervention
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/80">
              One snack per day, per youth — delivered through existing programs.
              Shelf-stable, portion-controlled, and clinically designed for
              sustained energy.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-12 flex justify-center">
              <Image
                src="/images/shared/nui-ada-usda.png"
                alt="USDA Smart Snack and ADA Better Choices for Life — NUI Snacks product line"
                width={2858}
                height={1200}
                className="h-auto w-full max-w-3xl rounded-2xl shadow-soft"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </Reveal>

          <div className="mt-14 grid items-start gap-10 lg:grid-cols-2">
            {/* Features */}
            <div className="space-y-12">
              {[
                { emoji: "🌾", bg: "bg-mintDark/15", title: "Whole-Food Snacks", desc: "Nutritious, plant-based products delivering measurable energy and focus benefits in youth programs." },
                { emoji: "📦", bg: "bg-sky/10", title: "Simple Daily Distribution", desc: "Shelf-stable, ready-to-eat snacks that remove prep and refrigeration barriers for any program site." },
                { emoji: "⚖️", bg: "bg-mintDark/15", title: "Portion Controlled", desc: "Pre-portioned to prevent waste and manage calorie intake for optimal daily nutrition." },
                { emoji: "📊", bg: "bg-sky/10", title: "Balanced for Blood Sugar", desc: "Low-glycemic design supports steady glucose levels and prevents energy crashes that affect concentration." },
              ].map((f) => (
                <Reveal key={f.title} delay={0.05}>
                  <div className="flex gap-6 rounded-2xl border border-border bg-white p-8 transition hover:translate-x-1 hover:shadow-sm">
                    <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl ${f.bg}`}>
                      {f.emoji}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-ink">{f.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-ink/80">{f.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Credentials */}
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-white px-8 py-5 shadow-soft sm:px-10 sm:py-6">
                <h3 className="font-serif text-xl font-normal tracking-tight text-ink">
                  Program Credentials
                </h3>
                <div className="mt-4 divide-y divide-border">
                  {[
                    {
                      title: "ADA Better Choices for Life Designated",
                      desc: "Snacks meet American Diabetes Association nutrition standards for blood-sugar-friendly choices.",
                    },
                    {
                      title: "USDA Smart Snack Compliant",
                      desc: "Meets the federal USDA Smart Snacks in School nutrition standards for foods sold during the school day.",
                    },
                    {
                      title: "Shelf-Stable — No Refrigeration Needed",
                      desc: "Removes prep, refrigeration, and cold-chain barriers at any program site.",
                    },
                    {
                      title: "250+ Food & Beverage Partners",
                      desc: "Established supplier network ensures consistent product availability.",
                    },
                    {
                      title: "100+ Nonprofit Agency Partners",
                      desc: "Distributed through trusted organizations already serving at-risk youth.",
                    },
                    {
                      title: "Daily On-Site Services",
                      desc: "Hand-to-hand distribution at schools, community centers, and youth programs.",
                    },
                  ].map((cred) => (
                    <div key={cred.title} className="flex items-start gap-4 py-4">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-sky to-sky/80 text-xs font-bold text-white">
                        ✓
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink/80">{cred.title}</p>
                        {cred.desc && (
                          <p className="mt-1 text-sm leading-relaxed text-ink/80">{cred.desc}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══ WHO WE SERVE ═══ */}
      <section className="py-12 sm:py-16">
        <Container>
          <Reveal>
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sky">
              <span className="inline-block h-[2px] w-6 bg-sky" />
              Who We Serve
            </p>
            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              Reaching Youth Where They Already Are
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/80">
              Teen Health serves vulnerable populations across multiple
              pathways — strengthening outcomes through consistent, reliable
              nutrition access.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Vulnerable Youth", desc: "Youth ages 13–18 facing food insecurity, housing instability, or limited access to daily support." },
              { title: "Foster Care", desc: "Youth ages 12–18 in foster care who need stable nutrition, support, and a reliable foundation." },
              { title: "System-Impacted", desc: "Teens and young adults (13–24) exiting the justice system who benefit from structure and stability." },
              { title: "Schools", desc: "Students in Special Ed or with mental health challenges who benefit from consistent nutrition." },
            ].map((pop) => (
              <Reveal key={pop.title} delay={0.05}>
                <div className="rounded-2xl border border-border bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-soft">
                  <h4 className="text-sm font-bold text-ink">{pop.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink/80">{pop.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══ COST + ROI ═══ */}
      <section className="bg-[#F2F6FC] py-16 sm:py-24">
        <Container>
          <Reveal>
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sky">
              <span className="inline-block h-[2px] w-6 bg-sky" />
              Cost + ROI
            </p>
            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              A High-Impact, Cost-Efficient
              {" "}<br className="hidden sm:inline" />
              Prevention Model
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/80">
              Early intervention significantly reduces long-term cost burden.
              Phase 1 collects reach, adherence, engagement, and health impact
              metrics.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              { num: "$40", color: "text-mintDark", title: "Per Child", desc: "Covers the full 20-day intervention — all-inclusive with no additional implementation costs." },
              { num: "$2M", color: "text-sky", title: "Total Phase 1", desc: "Full funding for 50,000 youth across 10–30+ distribution sites over 20 days." },
              { num: "20", color: "text-navy", title: "Daily Servings Per Youth", desc: "Consistent daily exposure — not one-time consumption. Consistency drives outcomes." },
            ].map((card) => (
              <Reveal key={card.title} delay={0.05}>
                <div className="h-full rounded-2xl border border-border bg-white p-8 text-center shadow-sm">
                  <p className={`font-serif text-5xl font-normal tracking-tight ${card.color}`}>
                    {card.num}
                  </p>
                  <h4 className="mt-2 text-sm font-semibold text-ink">{card.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink/80">{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-10 rounded-2xl border border-mintDark/40 bg-mintDark/15 p-6 sm:p-8">
              <div className="grid items-center gap-6 sm:grid-cols-[1fr_auto_1fr] sm:gap-8">
                <div className="text-center sm:text-right">
                  <p className="font-serif text-3xl font-normal tracking-tight text-navy sm:text-4xl">
                    $40
                  </p>
                  <p className="mt-2 text-sm leading-snug text-ink/80">
                    per child for prevention
                  </p>
                </div>

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-mintDark/40 bg-white text-sm font-semibold uppercase tracking-wider text-ink/70">
                  vs.
                </div>

                <div className="text-center sm:text-left">
                  <p className="font-serif text-3xl font-normal tracking-tight text-navy sm:text-4xl">
                    $10,000+
                  </p>
                  <p className="mt-2 text-sm leading-snug text-ink/80">
                    annually per diabetes patient for treatment
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mx-auto mt-16 max-w-3xl">
              <h3 className="text-center font-serif text-2xl font-normal tracking-tight text-ink sm:text-3xl">
                Frequently Asked Questions
              </h3>
              <div className="mt-8 space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-2xl border border-border bg-white p-6"
                  >
                    <h4 className="text-base font-bold text-ink">{faq.q}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink/80">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══ SCALE ═══ */}
      <section className="bg-[#F8F9FA] py-16 sm:py-24">
        <Container>
          <Reveal>
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sky">
              <span className="inline-block h-[2px] w-6 bg-sky" />
              Scale
            </p>
            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              From Community Initiative to
              {" "}<br className="hidden sm:inline" />
              Scalable Prevention Model
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/80">
              Phase 1 represents a repeatable intervention model designed to
              scale through programs like Medi-Cal and managed care.
            </p>
          </Reveal>

          <div className="mt-14 grid items-center gap-6 sm:grid-cols-[1fr_auto_1fr]">
            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                <span className="inline-block rounded-full bg-mintDark/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-mintDark">
                  Phase 1 — Now
                </span>
                <h4 className="mt-5 font-serif text-xl font-normal tracking-tight text-ink">
                  Community Deployment
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">
                  50,000 at-risk youth across Southern California. Daily
                  distribution through existing school and nonprofit partner
                  sites.
                </p>
              </div>
            </Reveal>

            <div className="flex items-center justify-center text-4xl font-semibold text-navy/70" aria-hidden>
              <span className="sm:hidden">↓</span>
              <span className="hidden sm:inline">→</span>
            </div>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                <span className="inline-block rounded-full bg-sky/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-sky">
                  Phase 2 — Next
                </span>
                <h4 className="mt-5 font-serif text-xl font-normal tracking-tight text-ink">
                  Population Health Expansion
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">
                  Scale through Medi-Cal, managed care, and broader healthcare
                  system integration across California.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="mx-auto mt-12 max-w-xl rounded-2xl bg-mint/40 p-8 text-center">
              <p className="font-serif text-4xl font-normal tracking-tight text-ink">
                2.5–3.5M+
              </p>
              <p className="mt-2 text-base text-ink">
                Youth at elevated metabolic risk statewide in California
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sky">
                <span className="inline-block h-[2px] w-6 bg-sky" />
                Get Involved
              </p>
              <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                A Unique Opportunity to Lead in Preventative Nutrition
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink/80">
                We&apos;re seeking mission-aligned partners to launch and scale
                this initiative. We would welcome the opportunity to explore next
                steps together.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-white p-7 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                  <p className="text-xs font-bold uppercase tracking-wide text-sky">
                    Teen Health Inc.
                  </p>
                  <h4 className="mt-3 font-serif text-lg font-normal text-ink">
                    Scott Swift
                  </h4>
                  <a
                    href="mailto:info@teenhealth.us"
                    className="mt-1 block text-sm font-medium text-ink/80 hover:underline"
                  >
                    info@teenhealth.us
                  </a>
                  <a
                    href="https://teenhealth.us"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-ink/70 hover:underline"
                  >
                    teenhealth.us
                  </a>
                </div>

                <div className="rounded-2xl border border-border bg-white p-7 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                  <p className="text-xs font-bold uppercase tracking-wide text-mintDark">
                    NUI Foundation
                  </p>
                  <h4 className="mt-3 font-serif text-lg font-normal text-ink">
                    Daron Stetner
                  </h4>
                  <a
                    href="mailto:info@nuifoundation.org"
                    className="mt-1 block text-sm font-medium text-ink/80 hover:underline"
                  >
                    info@nuifoundation.org
                  </a>
                  <a
                    href="https://nuifoundation.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-ink/70 hover:underline"
                  >
                    nuifoundation.org
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6">
                <div className="flex w-56 flex-col items-center gap-4 sm:mx-auto">
                  <Button
                    href="https://mygoodness.benevity.org/community/cause/840-874628884"
                    variant="primary"
                    className="w-56"
                    style={{ backgroundColor: "#2E9DF7", color: "#fff" }}
                  >
                    Sponsor on Benevity
                  </Button>
                  <div className="relative h-10 w-40 sm:h-12 sm:w-48">
                    <Image
                      src="/images/shared/benevity-logo.png"
                      alt="Benevity"
                      fill
                      className="object-contain"
                      sizes="224px"
                    />
                  </div>
                </div>
                <div className="flex w-56 flex-col items-center gap-4 sm:mx-auto">
                  <Button
                    href="https://www.classy.org/give/665776/#!/donation/checkout"
                    variant="primary"
                    className="w-56"
                    style={{ backgroundColor: "#4D9D93", color: "#fff" }}
                  >
                    Donate Now
                  </Button>
                  <a
                    href="https://nuifoundation.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative -mt-2 h-14 w-14 sm:h-16 sm:w-16"
                    aria-label="Visit NUI Foundation"
                  >
                    <Image
                      src="/images/shared/nui-foundation-logo.png"
                      alt="NUI Foundation"
                      fill
                      className="object-contain"
                      sizes="56px"
                    />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Footer note */}
          <Reveal delay={0.2}>
            <p className="mt-16 text-center text-xs text-ink/60">
              Teen Health Inc. and the NUI Foundation are registered 501(c)(3)
              nonprofit organizations. Contributions to this program may be
              tax-deductible as allowed by law.
            </p>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
