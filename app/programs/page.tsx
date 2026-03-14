import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";


export const metadata = {
  title: "Programs",
};

export default function ProgramsPage() {
  return (
    <div className="bg-transparent">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden" style={{ minHeight: "50vh", background: "linear-gradient(135deg, #1a2a6e 0%, #1e3a8a 40%, #2563c8 100%)" }}>

        {/* Text overlay */}
        <Container className="relative z-10 flex min-h-[50vh] items-center pb-0">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-sun">
                Become a Program Sponsor
              </p>
              <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Built Around What Youth Actually&nbsp;Need
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
                Fund a program that puts healthy essentials directly into the hands of
                youth who need them most — and help keep every kit stocked and ready.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-16">

        {/* ─── SPONSOR A PROGRAM ─── */}
        <div className="mt-10 text-center">
          <Reveal>
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-sun" />
            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              Sponsor a Program
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
              Program sponsors make it possible for Teen Health to sustain its
              mission year-round. Choose a program below to fund directly
              through our Benevity campaigns.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-2xl gap-6">
            {/* Campaign 0 — Easter Gift Bag Project */}
            <Reveal delay={0.08}>
              <Card className="flex h-full flex-col p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-sun">
                  Campaign
                </p>
                <h3 className="mt-3 font-serif text-2xl font-normal tracking-tight text-ink">
                  Easter Gift Bag Project
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">
                  Running through March and into the first week of April, our
                  Easter Gift Bag Project delivers nourishing products and a
                  message of care to youth and young adults across Southern
                  California. We are actively seeking product and monetary
                  donations — especially wholesome snacks, functional beverages,
                  vitamins, and supplements — to bring health, wellness, and
                  community to at-risk youth who need it most.
                </p>
                <div className="mt-6">
                  <Button href="#" variant="primary">
                    Sponsor This Program
                  </Button>
                </div>
              </Card>
            </Reveal>

            {/* Campaign 1 — The Dignity Kit Program */}
            <Reveal delay={0.08}>
              <Card className="flex h-full flex-col p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-sun">
                  Campaign
                </p>
                <h3 className="mt-3 font-serif text-2xl font-normal tracking-tight text-ink">
                  The Dignity Kit Program
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">
                  We are delivering 500 backpacks filled with healthy
                  snacks, hydration, and essential supplies to young people
                  experiencing homelessness across Los Angeles. Each backpack
                  costs just $25 to assemble but delivers $50 in retail value —
                  doubling every dollar you give. It&apos;s immediate
                  nourishment, dignity, and stability for youth who need it
                  most.
                </p>
                <div className="mt-6">
                  <Button href="#" variant="primary">
                    Sponsor This Program
                  </Button>
                </div>
              </Card>
            </Reveal>

            {/* Campaign 2 — California Regenerative Youth Land Initiative */}
            <Reveal delay={0.16}>
              <Card className="flex h-full flex-col overflow-hidden p-0">
                {/* Header band */}
                <div className="bg-ink px-8 py-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-sun">
                    Signature Campaign · $5M Goal
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-normal tracking-tight text-white">
                    The California Regenerative Youth Land&nbsp;Initiative
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    We are acquiring two working ranch properties in Southern
                    California where unhoused young adults ages 18–29 live
                    on-site, earn wages, build real skills, and prepare for
                    permanent housing — at their own pace, with real support
                    behind them.
                  </p>
                </div>

                <div className="flex flex-col gap-8 p-8">
                  {/* 4 Pillars */}
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {[
                      { icon: "🌱", label: "Regenerative Agriculture", sub: "Soil-first production, orchards & livestock" },
                      { icon: "💼", label: "Paid Apprenticeships", sub: "12–18 month structured workforce track" },
                      { icon: "📈", label: "Enterprise Revenue", sub: "CSA, farmers markets & agritourism" },
                      { icon: "🏡", label: "Permanent Housing", sub: "Graduate when genuinely ready" },
                    ].map(({ icon, label, sub }) => (
                      <div key={label} className="rounded-xl bg-mist p-4 text-center">
                        <div className="text-2xl">{icon}</div>
                        <p className="mt-2 text-xs font-bold leading-tight text-ink">{label}</p>
                        <p className="mt-1 text-xs leading-snug text-ink/60">{sub}</p>
                      </div>
                    ))}
                  </div>

                  {/* Apprenticeship Track */}
                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-ink/50">The Apprenticeship Track</p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {[
                        { phase: "Foundation", months: "Months 1–3", desc: "On-site housing, life skills & farm orientation." },
                        { phase: "Apprentice", months: "Months 4–9", desc: "Hands-on work in produce, livestock, or sales." },
                        { phase: "Senior Apprentice", months: "Months 10–15", desc: "Crop planning, team leadership & enterprise management." },
                        { phase: "Graduate", months: "When Ready", desc: "Job placement, housing navigation & alumni support." },
                      ].map(({ phase, months, desc }) => (
                        <div key={phase} className="flex gap-3 rounded-lg border border-ink/10 p-3">
                          <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-sun" />
                          <div>
                            <p className="text-xs font-bold text-ink">{phase} <span className="font-normal text-ink/50">· {months}</span></p>
                            <p className="mt-0.5 text-xs leading-snug text-ink/60">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 5-Year Plan */}
                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-ink/50">5-Year Plan</p>
                    <div className="flex flex-col gap-2 sm:flex-row">
                      {[
                        { phase: "Phase I", detail: "80-acre Fallbrook ranch · 8–12 beds · CSA launch" },
                        { phase: "Phase II", detail: "Second 100+ acre ranch · 30–40 combined beds" },
                        { phase: "Phase III", detail: "60–80 beds · $3.5–4M annual enterprise revenue" },
                      ].map(({ phase, detail }) => (
                        <div key={phase} className="flex-1 rounded-lg bg-sun/10 px-4 py-3">
                          <p className="text-xs font-bold text-ink">{phase}</p>
                          <p className="mt-0.5 text-xs leading-snug text-ink/70">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Giving ladder */}
                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-ink/50">Your Contribution</p>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {[
                        { amount: "$100", desc: "Tools & supplies for one apprentice's first month" },
                        { amount: "$500", desc: "One week of on-farm housing & meals" },
                        { amount: "$1,000", desc: "One orchard tree — a 30-year asset that feeds and earns" },
                      ].map(({ amount, desc }) => (
                        <div key={amount} className="rounded-lg border border-ink/10 p-3">
                          <p className="text-sm font-bold text-ink">{amount}</p>
                          <p className="mt-0.5 text-xs leading-snug text-ink/60">{desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button href="#" variant="primary">
                      Sponsor This Program
                    </Button>
                    <Button href="mailto:partnerships@teenhealth.us" variant="ghost" className="text-ink hover:bg-ink/5">
                      Corporate Tiers — Contact Us
                    </Button>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>



        <Reveal delay={0.1}>
          <div className="mt-12 rounded-3xl bg-ink p-8 text-white sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
              Go deeper
            </p>
            <h2 className="mt-4 text-3xl font-normal tracking-tight sm:text-4xl">
              Every kit starts with a conversation.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
              Our programs are built on relationships — with the brands that donate, the
              volunteers that pack, and the agencies that distribute. Learn more about the
              issues youth face or find a way to help.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/our-why" variant="primary">
                Learn more
              </Button>
              <Button
                href="/get-involved"
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                Ways to help
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
