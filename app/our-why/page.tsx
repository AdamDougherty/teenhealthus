import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { articles } from "@/content/articles";

export const metadata = {
  title: "Our Why",
};

const categoryOrder = ["Context", "Programs", "Partnerships"] as const;

export default function LearnPage() {
  const byCategory = categoryOrder.map((cat) => ({
    cat,
    items: articles.filter((a) => a.category === cat),
  }));

  return (
    <div className="bg-transparent">
      {/* Hero banner */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a2a6e 0%, #1e3a8a 40%, #2563c8 100%)" }}>
        <Container className="relative z-10 py-20 sm:py-28">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/50">
              Our Why
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 max-w-3xl font-serif text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Survive{" "}
              <span className="mx-2 inline-block text-sun sm:mx-4">→</span>{" "}
              <span className="hero-highlight">Thrive</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Every young person deserves more than survival. We exist to close
              the gap between getting by and growing up with dignity.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Mission statement */}
      <Container className="py-14 text-center sm:py-16">
        <Reveal>
          <h2 className="mx-auto max-w-5xl font-serif text-2xl font-normal leading-snug tracking-tight text-ink sm:text-3xl">
            We rethink and repurpose resources to overcome the toughest
            challenges.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-sun/30 bg-sun/10 px-8 py-6 sm:px-10 sm:py-8">
            <p className="text-base leading-relaxed text-ink sm:text-lg">
              Each day, thousands of youth go without reliable meals, putting
              their bodies, minds, and futures in jeopardy. Many are living with
              food insecurity, poverty, homelessness, and the instability of the
              foster care system.
            </p>
          </div>
        </Reveal>
      </Container>

      {/* The Systemic Gap */}
      <Container className="pb-14 pt-4 text-center sm:pb-16 sm:pt-6">
        <Reveal>
          <h2 className="mx-auto max-w-5xl font-serif text-2xl font-normal leading-snug tracking-tight text-ink">
            The Systemic Gap
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-ink/70 sm:text-lg">
            California is facing a &ldquo;post-pandemic cliff&rdquo; in youth
            stability as federal and state relief programs have expired. The most
            vulnerable young people are seeing a sharp reversal in progress.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Photo 1 */}
            <div>
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src="/images/our-why/staggering_poverty.jpg"
                  alt="Children living in persistent poverty"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">
                Persistent Poverty
              </h3>
              <p className="mx-auto mt-1 max-w-[17rem] text-center text-sm leading-relaxed text-ink/70">
                18.6% of California&rsquo;s children&mdash;1.6 million&mdash;now
                live in poverty, more than double the 2021 rate.
              </p>
            </div>
            {/* Photo 2 */}
            <div>
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src="/images/our-why/foster_care.jpg"
                  alt="Youth in foster care"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">
                Housing &amp; Foster Care
              </h3>
              <p className="mx-auto mt-1 max-w-[17rem] text-center text-sm leading-relaxed text-ink/70">
                Over 44,000 youth are in foster care, and 40% face homelessness
                or incarceration within 3 years of aging out.
              </p>
            </div>
            {/* Photo 3 */}
            <div>
              <div
                className="flex items-center justify-center rounded-2xl border border-border bg-surface"
                style={{ aspectRatio: "4/3" }}
              >
                <span className="text-sm text-ink/30">Photo 3</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">
                Mental Health
              </h3>
              <p className="mx-auto mt-1 max-w-[17rem] text-center text-sm leading-relaxed text-ink/70">
                Transition-age youth (TAY) suffer higher rates of untreated
                anxiety and depression, often worsened by system involvement.
              </p>
            </div>
            {/* Photo 4 */}
            <div>
              <div
                className="flex items-center justify-center rounded-2xl border border-border bg-surface"
                style={{ aspectRatio: "4/3" }}
              >
                <span className="text-sm text-ink/30">Photo 4</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">
                Food Insecurity
              </h3>
              <p className="mx-auto mt-1 max-w-[17rem] text-center text-sm leading-relaxed text-ink/70">
                Over 1 in 4 California households with children (27%) are food
                insecure, hindering educational and developmental outcomes.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>

      {/* The Brain–Body Connection */}
      <div className="bg-sun/5">
        <Container className="py-16 text-center sm:py-20">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-serif text-2xl font-normal leading-snug tracking-tight text-ink">
              The Brain&ndash;Body Connection
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-ink/80 sm:text-lg sm:leading-relaxed">
              For young people, consistent nutrition is key to brain function.
              The brain relies on essential nutrients to regulate mood, manage
              stress, control impulses, and make sound decisions. Housing
              instability and food insecurity lead to nutrient-poor diets,
              weakening the brain&rsquo;s ability to cope under pressure. When
              undernourishment combines with trauma, anxiety, depression, and
              emotional dysregulation become more likely&mdash;making it harder
              for youth to stay safe, focused, and hopeful.
            </p>
          </Reveal>
        </Container>
      </div>

      {/* Mental Health & Daily Functioning */}
      <Container className="py-16 text-center sm:py-20">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-serif text-2xl font-normal leading-snug tracking-tight text-ink">
            Mental Health &amp; Daily Functioning
          </h2>
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-border bg-surface px-6 py-8">
              <p className="text-sm leading-relaxed text-ink/80">
                Chronic stress puts the body in survival mode, elevating
                cortisol levels and disrupting metabolism. Over time, this raises
                the risk of obesity, hypertension, and insulin resistance, making
                it harder for youth to thrive.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="h-full rounded-2xl border border-border bg-surface px-6 py-8">
              <p className="text-sm leading-relaxed text-ink/80">
                Food insecurity weakens immune function. Deficiencies in key
                nutrients like vitamins C, D, and protein lower the
                body&rsquo;s defenses, increasing young people&rsquo;s
                vulnerability to illness.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="h-full rounded-2xl border border-border bg-surface px-6 py-8">
              <p className="text-sm leading-relaxed text-ink/80">
                Poor nutrition impacts brain health. Diets high in
                ultra-processed foods fuel inflammation and oxidative stress,
                impairing cognitive function and increasing the risk of
                depression and other mental health challenges.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Health → Life Outcomes */}
      <div className="bg-sun/5">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <h2 className="text-center font-serif text-2xl font-normal leading-snug tracking-tight text-ink">
              Health &rarr; Life Outcomes
            </h2>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 items-stretch gap-8 sm:grid-cols-2">
            <Reveal delay={0.1}>
              <div>
                <h3 className="mb-3 text-lg font-semibold tracking-tight text-ink">
                  Nutrition, Trauma &amp; Lost Potential
                </h3>
                <p className="text-sm leading-relaxed text-ink/80 sm:text-base sm:leading-relaxed">
                  Unmet biological and emotional needs have lasting effects on life
                  outcomes. Deficiencies in key nutrients like vitamin B12, B6, and
                  omega-3 fatty acids can lead to cognitive impairments, emotional
                  dysregulation, and increased risk of mental health challenges.
                  Children exposed to Adverse Childhood Experiences (ACEs),
                  including poverty and trauma, face elevated risks of depression
                  and anxiety. Without a stable biological foundation, youth may
                  struggle with focus, school performance, and emotional
                  resilience&mdash;leading to a higher risk of dropout,
                  unemployment, housing instability, and justice system
                  involvement.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="h-full border-t-2 border-ink/20 pt-8 sm:border-l-2 sm:border-t-0 sm:pl-8 sm:pt-0">
                <h3 className="mb-3 text-lg font-semibold tracking-tight text-ink">
                  The Pull of the Streets
                </h3>
                <p className="text-sm leading-relaxed text-ink/80 sm:text-base sm:leading-relaxed">
                  When basic needs go unmet, young people often seek safety and
                  belonging wherever they can find it. Homelessness raises exposure
                  to gang recruitment and street violence. Gangs can appear to
                  offer food, protection, and community&mdash;needs the system no
                  longer provides. Without intervention, these pathways increase
                  the risk of trauma, substance use, incarceration, and long-term
                  instability.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </div>

      {/* Why This Matters to Society */}
      <Container className="py-16 text-center sm:py-20">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-serif text-2xl font-normal leading-snug tracking-tight text-ink">
            Why This Matters to Society
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-ink/80 sm:text-lg sm:leading-relaxed">
            Youth homelessness isn&rsquo;t just a personal crisis&mdash;it&rsquo;s
            a public health, safety, and economic issue. When basic needs like
            nutrition and mental stability go unmet, communities bear the costs
            through emergency care, justice involvement, and lost potential. But
            when young people are stabilized early&mdash;with food, mental health
            support, and consistent care&mdash;outcomes improve. Preventing
            homelessness and violence starts by meeting foundational needs and
            investing in youth before crisis leads to lifelong consequences.
          </p>
        </Reveal>
      </Container>
      <Container className="py-14 sm:py-16">
        <Reveal delay={0.08}>
          <div className="mt-14 rounded-3xl border border-border bg-sun p-8 text-ink shadow-soft sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/70">
              Keep it light
            </p>
            <h2 className="mt-4 text-3xl font-normal tracking-tight sm:text-4xl">
              If it doesn’t help someone act, cut it.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/80">
              This page is designed to replace a large “endpoint sprawl.” Each article
              should earn its place by making your mission easier to understand and your
              donation ask easier to say yes to.
            </p>
            <div className="mt-7">
              <Link
                href="https://www.classy.org/give/665776/#!/donation/checkout"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-black"
              >
                Donate →
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
