import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export const metadata = {
  title: "Youth Nutrition Initiative",
};

export default function YouthNutritionInitiativePage() {
  return (
    <div className="bg-transparent">
      {/* ─── HERO ─── */}
      <section
        className="relative min-h-[50vh] overflow-hidden sm:min-h-[70vh]"
        style={{ background: "#3D75D0" }}
      >
        <div className="relative z-10 pl-6 sm:pl-10 lg:pl-16 py-16 min-h-[50vh] flex items-center sm:min-h-[70vh]">
          <div className="max-w-3xl">
            <Reveal>
              <p
                className="text-xs font-bold uppercase tracking-[0.22em]"
                style={{ color: "#FDCF6A" }}
              >
                Campaign
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1
                className="mt-4 font-serif text-3xl font-normal tracking-tight text-white sm:text-4xl lg:text-5xl"
                style={{ lineHeight: 1.1 }}
              >
                Youth Nutrition Initiative
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white">
                Reliable nutrition for the youth who need it most.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      {/* TODO: Replace placeholder content below with final copy */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-sun" />
              <h2 className="text-center font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                About This Program
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-ink/70">
                Food insecurity undermines the programs youth depend on for
                education, job training, and housing support. We partner with
                youth-serving organizations to provide consistent,
                allergen-friendly snacks that keep energy up and engagement
                strong throughout the day. The initiative is designed to scale
                rapidly through corporate sponsors and community
                partners — delivering reliable nutrition across multiple cities
                to the youth who need it most.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── DAILY LOW-GLYCEMIC INTERVENTION ─── */}
      <section className="py-16 sm:py-20 bg-sky/5">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-sun" />
              <h2 className="text-center font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                A Daily, Low-Glycemic Nutrition Intervention
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-10 sm:grid-cols-3">
              {/* What it is */}
              <Reveal delay={0.05}>
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <h3 className="font-serif text-xl font-normal tracking-tight text-ink">
                    What It Is
                  </h3>
                  <ul className="mt-4 space-y-2 text-base leading-relaxed text-ink/70">
                    <li>1 snack per day, per youth</li>
                    <li>Delivered through existing youth programs</li>
                  </ul>
                </div>
              </Reveal>

              {/* Why it's different */}
              <Reveal delay={0.1}>
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <h3 className="font-serif text-xl font-normal tracking-tight text-ink">
                    Why It&#39;s Different
                  </h3>
                  <ul className="mt-4 space-y-2 text-base leading-relaxed text-ink/70">
                    <li>ADA Better Choices for Life-designated</li>
                    <li>USDA Smart Snack compliant</li>
                    <li>Shelf-stable, no refrigeration needed</li>
                  </ul>
                </div>
              </Reveal>

              {/* Clinical framing */}
              <Reveal delay={0.15}>
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <h3 className="font-serif text-xl font-normal tracking-tight text-ink">
                    Clinical Framing
                  </h3>
                  <p className="mt-4 text-sm font-medium text-ink/50 uppercase tracking-wide">
                    Designed to:
                  </p>
                  <ul className="mt-2 space-y-2 text-base leading-relaxed text-ink/70">
                    <li>Support stable blood glucose</li>
                    <li>Improve sustained energy</li>
                    <li>Increase cognitive engagement</li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 20-DAY MODEL ─── */}
      <section className="py-16 sm:py-20 bg-sky/5">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-sun" />
              <h2 className="text-center font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                20-Day Daily Nutrition Intervention
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              {/* Deployment Model */}
              <Reveal delay={0.05}>
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <h3 className="font-serif text-xl font-normal tracking-tight text-ink">
                    Deployment Model
                  </h3>
                  <ul className="mt-4 space-y-2 text-base leading-relaxed text-ink/70">
                    <li>Daily distribution across 10–30+ sites</li>
                    <li>Concentrated delivery → consistent daily intake</li>
                    <li>High-frequency exposure → stronger outcomes</li>
                  </ul>
                </div>
              </Reveal>

              {/* Immediate Outcomes */}
              <Reveal delay={0.1}>
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <h3 className="font-serif text-xl font-normal tracking-tight text-ink">
                    Immediate Outcomes
                  </h3>
                  <ul className="mt-4 space-y-2 text-base leading-relaxed text-ink/70">
                    <li>↑ Sustained energy throughout program hours</li>
                    <li>↓ Mid-day crashes</li>
                    <li>↑ Focus, participation, and engagement</li>
                    <li>↓ Staff intervention for hunger-related disruptions</li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── SIMPLE WHOLE-FOOD SNACK ─── */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-sun" />
              <h2 className="text-center font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                A Simple, Whole-Food Snack Intervention
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-ink/70">
                Delivered daily during program hours — designed to support stable
                energy and nervous system regulation without clinical complexity.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── WHY SPEED MATTERS ─── */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-sun" />
              <h2 className="text-center font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                Why Speed Matters
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-ink/70">
                High-frequency, short-duration nutrition interventions produce
                faster behavioral and physiological signals than diluted
                long-term programs.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── SCALABLE PREVENTION MODEL ─── */}
      <section className="py-16 sm:py-20 bg-sky/5">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-sun" />
              <h2 className="text-center font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                From Community Initiative to Scalable Prevention Model
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              <Reveal delay={0.05}>
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <h3 className="font-serif text-xl font-normal tracking-tight text-ink">
                    Phase 1 → Community Deployment
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-ink/70">
                    A repeatable intervention model reaching 50,000 youth —
                    proving impact at the community level before scaling.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <h3 className="font-serif text-xl font-normal tracking-tight text-ink">
                    Phase 2 → Population Health Expansion
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-ink/70">
                    Integration potential with broader healthcare systems.
                    Designed to scale through programs like Medi-Cal and managed
                    care.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="mt-10 rounded-2xl border border-sun/30 bg-sun/5 p-6 text-center">
                <p className="text-lg font-medium text-ink">
                  2.5–3.5M+ youth likely at elevated metabolic risk in California
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── CTA ─── */}
      <section className="pb-16 sm:pb-20">
        <Container>
          <Reveal>
            <div
              className="rounded-3xl p-8 text-center sm:p-10"
              style={{ backgroundColor: "#E5EEFB" }}
            >
              <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                Sponsor This Program
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ink/70">
                Your contribution helps keep youth fueled and focused — fund
                this program directly through our Benevity campaign.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button
                  href="https://mygoodness.benevity.org/community/cause/840-874628884"
                  variant="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  Sponsor on Benevity
                </Button>
                <Button
                  href="/program-sponsor"
                  variant="ghost"
                  className="text-ink hover:bg-ink/10"
                >
                  Back to Programs
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
