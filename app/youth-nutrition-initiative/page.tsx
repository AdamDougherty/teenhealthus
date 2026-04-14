import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export const metadata = {
  title: "Youth Nutrition Initiative",
  description:
    "A 20-day daily intervention delivering low-glycemic, whole-food snacks to 50,000 at-risk youth across San Diego County.",
};

export default function YouthNutritionInitiativeLandingPage() {
  return (
    <div className="bg-transparent">
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-[#1B2A4A]" style={{ minHeight: "90vh" }}>
        {/* subtle radial accents */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(43,159,224,0.15) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(245,146,27,0.1) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-16 lg:py-32">
          {/* Left */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-sun/30 bg-sun/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-sun">
                <span className="h-2 w-2 animate-pulse rounded-full bg-sun" />
                ADA-Aligned Nutrition Intervention
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1
                className="mt-7 font-serif text-3xl font-normal tracking-tight text-white sm:text-4xl lg:text-5xl"
                style={{ lineHeight: 1.1 }}
              >
                Expanding Access to{" "}
                <span className="bg-gradient-to-r from-sun to-[#FFB347] bg-clip-text text-transparent">
                  Healthy Nutrition
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
                A 20-day daily intervention delivering low-glycemic, whole-food
                snacks to 50,000 at-risk youth across San Diego County — through
                schools, nonprofits, and community programs.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex gap-10">
                <div>
                  <p className="font-serif text-4xl font-normal text-sun">50K</p>
                  <p className="mt-1 text-xs text-white/50">At-Risk Youth Served</p>
                </div>
                <div>
                  <p className="font-serif text-4xl font-normal text-sky">1M</p>
                  <p className="mt-1 text-xs text-white/50">Total Servings</p>
                </div>
                <div>
                  <p className="font-serif text-4xl font-normal text-white">20</p>
                  <p className="mt-1 text-xs text-white/50">Days of Daily Access</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — impact card */}
          <Reveal delay={0.25}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl sm:p-10">
              <h3 className="font-serif text-xl font-normal tracking-tight text-white">
                Designed for Measurable Impact
              </h3>

              <div className="mt-6 space-y-0 divide-y divide-white/[0.06]">
                {[
                  { icon: "↑", color: "sun", text: <><strong className="text-white">Sustained energy</strong> throughout program hours</> },
                  { icon: "↓", color: "sky", text: <><strong className="text-white">Mid-day crashes</strong> and hunger-related disruptions</> },
                  { icon: "↑", color: "sun", text: <><strong className="text-white">Focus, participation</strong> and cognitive engagement</> },
                  { icon: "↓", color: "sky", text: <><strong className="text-white">Long-term diabetes risk</strong> through metabolic stability</> },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-4 py-4">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-base ${
                        row.color === "sun" ? "bg-sun/15" : "bg-sky/15"
                      }`}
                    >
                      {row.icon}
                    </span>
                    <p className="text-sm leading-snug text-white/80">{row.text}</p>
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
              <br />
              Long-Term Health Outcomes
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
              Access — not awareness — is the core issue. Limited access to
              healthy food, high-sugar daily environments, and early dietary
              habits are driving lifelong metabolic risk.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              { stat: "1 in 5", color: "text-sun", title: "Youth Face Food Insecurity", desc: "Millions of young people lack reliable access to nutritious meals, creating a foundation for poor health outcomes." },
              { stat: "1 in 3", color: "text-sky", title: "Youth Face Metabolic Risk", desc: "High-sugar, low-fiber environments lead to blood sugar spikes, energy crashes, and reduced cognitive performance." },
              { stat: "100K+", color: "text-ink", title: "At Elevated Risk in San Diego", desc: "Over 500,000 students in the county, ~60% qualify for Free & Reduced Lunch, and 30%+ face overweight or obesity risk." },
            ].map((card) => (
              <Reveal key={card.title} delay={0.05}>
                <div className="rounded-2xl border border-border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                  <p className={`font-serif text-4xl font-normal tracking-tight ${card.color}`}>
                    {card.stat}
                  </p>
                  <h4 className="mt-2 text-sm font-bold text-ink">{card.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{card.desc}</p>
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
              <br />
              Nutrition Intervention
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
              One snack per day, per youth — delivered through existing programs.
              Shelf-stable, portion-controlled, and clinically designed for
              sustained energy.
            </p>
          </Reveal>

          <div className="mt-14 grid items-start gap-10 lg:grid-cols-2">
            {/* Features */}
            <div className="space-y-5">
              {[
                { emoji: "🌾", bg: "bg-sun/10", title: "Whole-Food Snacks", desc: "Nutritious, plant-based products delivering measurable energy and focus benefits in youth programs." },
                { emoji: "📦", bg: "bg-sky/10", title: "Simple Daily Distribution", desc: "Shelf-stable, ready-to-eat snacks that remove prep and refrigeration barriers for any program site." },
                { emoji: "⚖️", bg: "bg-sun/10", title: "Portion Controlled", desc: "Pre-portioned to prevent waste and manage calorie intake for optimal daily nutrition." },
                { emoji: "📊", bg: "bg-sky/10", title: "Balanced for Blood Sugar", desc: "Low-glycemic design supports steady glucose levels and prevents energy crashes that affect concentration." },
              ].map((f) => (
                <Reveal key={f.title} delay={0.05}>
                  <div className="flex gap-5 rounded-2xl border border-border bg-white p-5 transition hover:translate-x-1 hover:shadow-sm">
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl ${f.bg}`}>
                      {f.emoji}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-ink">{f.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-ink/60">{f.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Credentials */}
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-white p-8 shadow-soft sm:p-10">
                <h3 className="font-serif text-xl font-normal tracking-tight text-ink">
                  Program Credentials
                </h3>
                <div className="mt-6 divide-y divide-border">
                  {[
                    "ADA Better Choices for Life Designated",
                    "USDA Smart Snack Compliant",
                    "Shelf-Stable — No Refrigeration Needed",
                    "250+ Food & Beverage Partners",
                    "100+ Nonprofit Agency Partners",
                    "Daily On-Site Services",
                  ].map((cred) => (
                    <div key={cred} className="flex items-center gap-4 py-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-sky to-sky/80 text-xs font-bold text-white">
                        ✓
                      </span>
                      <span className="text-sm font-semibold text-ink/80">{cred}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══ WHO WE SERVE ═══ */}
      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sky">
              <span className="inline-block h-[2px] w-6 bg-sky" />
              Who We Serve
            </p>
            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              Reaching Youth Where They Already Are
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
              Teen Health serves vulnerable populations across multiple
              pathways — strengthening outcomes through consistent, reliable
              nutrition access.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { emoji: "🏠", bg: "bg-sun/10", title: "Vulnerable Youth", desc: "Youth ages 13–18 facing food insecurity, housing instability, or limited access to daily support." },
              { emoji: "💙", bg: "bg-sky/10", title: "Foster Care", desc: "Youth ages 12–18 in foster care who need stable nutrition, support, and a reliable foundation." },
              { emoji: "🤝", bg: "bg-sun/10", title: "System-Impacted", desc: "Teens and young adults (13–24) exiting the justice system who benefit from structure and stability." },
              { emoji: "🏫", bg: "bg-sky/10", title: "Schools", desc: "Students in Special Ed or with mental health challenges who benefit from consistent nutrition." },
            ].map((pop) => (
              <Reveal key={pop.title} delay={0.05}>
                <div className="rounded-2xl border border-border bg-white p-7 text-center transition hover:-translate-y-1 hover:shadow-soft">
                  <span className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${pop.bg}`}>
                    {pop.emoji}
                  </span>
                  <h4 className="mt-5 text-sm font-bold text-ink">{pop.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{pop.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══ COST + ROI ═══ */}
      <section className="bg-[#1B2A4A] py-16 sm:py-24">
        <Container>
          <Reveal>
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sun">
              <span className="inline-block h-[2px] w-6 bg-sun" />
              Cost + ROI
            </p>
            <h2 className="font-serif text-3xl font-normal tracking-tight text-white sm:text-4xl">
              A High-Impact, Cost-Efficient
              <br />
              Prevention Model
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
              Early intervention significantly reduces long-term cost burden.
              Phase 1 collects reach, adherence, engagement, and health impact
              metrics.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              { num: "$40", color: "text-sun", title: "Per Child", desc: "Covers the full 20-day intervention — all-inclusive with no additional implementation costs." },
              { num: "$2M", color: "text-sky", title: "Total Phase 1", desc: "Full funding for 50,000 youth across 10–30+ distribution sites over 20 days." },
              { num: "20", color: "text-white", title: "Daily Servings Per Youth", desc: "Consistent daily exposure — not one-time consumption. Consistency drives outcomes." },
            ].map((card) => (
              <Reveal key={card.title} delay={0.05}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-8 text-center backdrop-blur-sm">
                  <p className={`font-serif text-5xl font-normal tracking-tight ${card.color}`}>
                    {card.num}
                  </p>
                  <h4 className="mt-2 text-sm font-semibold text-white/90">{card.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-10 rounded-2xl border border-sun/20 bg-sun/[0.08] p-6 text-center">
              <p className="text-base font-medium text-white/85">
                <strong className="text-sun">$40 per child</strong> for
                prevention &nbsp;vs.&nbsp;{" "}
                <strong className="text-sun">$10,000+</strong> annually per
                diabetes patient for treatment
              </p>
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
              <br />
              Scalable Prevention Model
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
              Phase 1 represents a repeatable intervention model designed to
              scale through programs like Medi-Cal and managed care.
            </p>
          </Reveal>

          <div className="mt-14 grid items-center gap-6 sm:grid-cols-[1fr_auto_1fr]">
            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                <span className="inline-block rounded-full bg-sun/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-sun">
                  Phase 1 — Now
                </span>
                <h4 className="mt-5 font-serif text-xl font-normal tracking-tight text-ink">
                  Community Deployment
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  50,000 at-risk youth across San Diego County. Daily
                  distribution through existing school and nonprofit partner
                  sites.
                </p>
              </div>
            </Reveal>

            <span className="hidden text-3xl text-ink/20 sm:block" aria-hidden>
              →
            </span>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                <span className="inline-block rounded-full bg-sky/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-sky">
                  Phase 2 — Next
                </span>
                <h4 className="mt-5 font-serif text-xl font-normal tracking-tight text-ink">
                  Population Health Expansion
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  Scale through Medi-Cal, managed care, and broader healthcare
                  system integration across California.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="mx-auto mt-12 max-w-xl rounded-2xl bg-gradient-to-r from-sky to-sky/80 p-8 text-center">
              <p className="font-serif text-4xl font-normal tracking-tight text-white">
                2.5–3.5M+
              </p>
              <p className="mt-2 text-base text-white/80">
                youth at elevated metabolic risk statewide in California
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
              <p className="mt-4 text-base leading-relaxed text-ink/70">
                We&apos;re seeking mission-aligned partners to launch and scale
                this initiative. We would welcome the opportunity to explore next
                steps together.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
                <div className="rounded-2xl border border-border bg-white p-7 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                  <p className="text-xs font-bold uppercase tracking-wide text-sun">
                    Teen Health Inc.
                  </p>
                  <h4 className="mt-3 font-serif text-lg font-normal text-ink">
                    Scott Swift
                  </h4>
                  <a
                    href="mailto:sswift@teenhealth.us"
                    className="mt-1 block text-sm font-medium text-sky hover:underline"
                  >
                    sswift@teenhealth.us
                  </a>
                  <span className="mt-1 block text-sm text-ink/50">teenhealth.us</span>
                </div>

                <div className="rounded-2xl border border-border bg-white p-7 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                  <p className="text-xs font-bold uppercase tracking-wide text-sky">
                    NUI Foundation
                  </p>
                  <h4 className="mt-3 font-serif text-lg font-normal text-ink">
                    Daron Stetner
                  </h4>
                  <a
                    href="mailto:daron@nuifoundation.org"
                    className="mt-1 block text-sm font-medium text-sky hover:underline"
                  >
                    daron@nuifoundation.org
                  </a>
                  <span className="mt-1 block text-sm text-ink/50">nuifoundation.org</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10">
                <Button
                  href="https://www.classy.org/give/665776/#!/donation/checkout"
                  variant="primary"
                  style={{ backgroundColor: "#FF8005", color: "#fff" }}
                >
                  Donate Now
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Footer note */}
          <Reveal delay={0.2}>
            <p className="mt-16 text-center text-xs text-ink/40">
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
