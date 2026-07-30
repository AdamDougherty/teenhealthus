import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { articles } from "@/content/articles";

export const metadata = {
  title: "Why Nutrition Matters",
};

const categoryOrder = ["Context", "Programs", "Partnerships"] as const;

function FootnoteRef({ n }: { n: number }) {
  return (
    <sup>
      <a
        href={`#source-${n}`}
        className="ml-0.5 text-[0.7em] font-semibold text-sun hover:underline"
        aria-label={`Source ${n}`}
      >
        [{n}]
      </a>
    </sup>
  );
}

export default function LearnPage() {
  const byCategory = categoryOrder.map((cat) => ({
    cat,
    items: articles.filter((a) => a.category === cat),
  }));

  return (
    <div className="bg-transparent">
      {/* Hero banner */}
      <section className="relative min-h-[50vh] overflow-hidden sm:min-h-[70vh]">
        <Image
          src="/images/shared/girls-lavelle-mod-marathon.jpeg"
          alt="Girls at Lavelle Mod Marathon"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: 'center 50%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10" />
        <div className="relative z-10 pl-6 sm:pl-10 lg:pl-16 py-16 min-h-[50vh] flex items-center sm:min-h-[70vh]">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#FDCF6A" }}>
                Our Why
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-4 max-w-3xl font-serif text-3xl font-normal tracking-tight text-white sm:text-4xl lg:text-5xl" style={{ lineHeight: 1.1 }}>
                Survive{" "}
                <span className="mx-2 inline-block sm:mx-4" style={{ color: "#FF8005" }}>→</span>{" "}
                <span style={{ color: "#FFA10A" }}>Thrive</span>
                <span className="mt-3 block font-sans text-base font-normal tracking-normal text-white/90 sm:text-lg lg:text-xl">
                  Bridging the Systemic Gap in Youth Nutrition
                </span>
              </h1>
            </Reveal>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 z-10 sm:bottom-6 sm:right-6">
          <span className="flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            Lavelle School for the Blind, Bronx, NY
          </span>
        </div>
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
            The Post-Pandemic Cliff: California Youth Poverty &amp; Food Insecurity
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
                  src="/images/shared/young-guy-2.jpg"
                  alt="Children living in persistent poverty"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">
                Persistent Poverty
              </h3>
              <p className="mt-2 font-serif text-2xl font-bold leading-none tracking-tight sm:text-3xl" style={{ color: "#FF8005" }}>
                18.6%
              </p>
              <p className="mx-auto mt-2 max-w-[17rem] text-center text-sm leading-relaxed text-ink/70">
                of California&rsquo;s children &mdash; 1.6&nbsp;million &mdash;
                now live in poverty, more than double the 2021 rate.<FootnoteRef n={7} />
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
              <p className="mt-2 font-serif text-2xl font-bold leading-none tracking-tight sm:text-3xl" style={{ color: "#FF8005" }}>
                43,095
              </p>
              <p className="mx-auto mt-2 max-w-[17rem] text-center text-sm leading-relaxed text-ink/70">
                California children are in foster care<FootnoteRef n={9} /> &mdash;
                nearly 1 in 3 face homelessness after aging out.<FootnoteRef n={10} />
              </p>
            </div>
            {/* Photo 3 */}
            <div>
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src="/images/shared/young-guy-3.jpg"
                  alt="Young person supported by Teen Health"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">
                Mental Health
              </h3>
              <p className="mt-2 font-serif text-2xl font-bold leading-none tracking-tight sm:text-3xl" style={{ color: "#FF8005" }}>
                1 in 5
              </p>
              <p className="mx-auto mt-2 max-w-[17rem] text-center text-sm leading-relaxed text-ink/70">
                U.S. adolescents experienced a major depressive episode in the
                past year, and transition-age youth (TAY) often go untreated.<FootnoteRef n={6} />
              </p>
            </div>
            {/* Photo 4 */}
            <div>
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src="/images/shared/young-guy.jpg"
                  alt="Young man supported by Teen Health"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">
                Food Insecurity
              </h3>
              <p className="mt-2 font-serif text-2xl font-bold leading-none tracking-tight sm:text-3xl" style={{ color: "#FF8005" }}>
                27%
              </p>
              <p className="mx-auto mt-2 max-w-[17rem] text-center text-sm leading-relaxed text-ink/70">
                of California households with children are food insecure,
                hindering educational and developmental outcomes.<FootnoteRef n={8} />
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
              The Nutritional Psychiatry of Youth Trauma: The Brain&ndash;Body Connection
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="mx-auto mt-8 max-w-3xl border-l-4 border-sun bg-white/40 px-6 py-6 text-left sm:px-8 sm:py-8">
              <p className="font-serif text-lg italic leading-relaxed text-ink/85 sm:text-xl sm:leading-relaxed">
                For young people, consistent nutrition is key to brain function.
                The brain relies on essential nutrients to regulate mood, manage
                stress, control impulses, and make sound decisions.<FootnoteRef n={1} />{" "}
                Housing instability and food insecurity lead to nutrient-poor
                diets, weakening the brain&rsquo;s ability to cope under pressure.
                When undernourishment combines with trauma, anxiety, depression,
                and emotional dysregulation become more likely&mdash;making it
                harder for youth to stay safe, focused, and hopeful.
              </p>
            </blockquote>
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
              {/* EKG / pulse icon */}
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-sun/20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-ink/70">
                  <polyline points="2 12 6 12 8 5 10 19 12 12 14 15 16 9 18 12 22 12" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-ink/80">
                Chronic stress puts the body in survival mode, elevating
                cortisol levels and disrupting metabolism.<FootnoteRef n={2} />{" "}
                Over time, this raises the risk of obesity, hypertension, and
                insulin resistance, making it harder for youth to thrive.<FootnoteRef n={12} />
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="h-full rounded-2xl border border-border bg-surface px-6 py-8">
              {/* Shield icon */}
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-sun/20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-ink/70">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-ink/80">
                Food insecurity weakens immune function. Deficiencies in key
                nutrients like vitamins C, D, and protein lower the
                body&rsquo;s defenses, increasing young people&rsquo;s
                vulnerability to illness.<FootnoteRef n={3} />
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="h-full rounded-2xl border border-border bg-surface px-6 py-8">
              {/* Brain icon */}
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-sun/20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-ink/70">
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.66Z" />
                  <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.66Z" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-ink/80">
                Poor nutrition impacts brain health. Diets high in
                ultra-processed foods fuel inflammation and oxidative stress,
                impairing cognitive function and increasing the risk of
                depression and other mental health challenges.<FootnoteRef n={11} />
              </p>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Visual divider — carey kitchen */}
      <Container className="pb-12 sm:pb-16">
        <Reveal>
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/images/shared/carey-kitchen.jpeg"
                alt="Carey kitchen supporting youth with meals"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
            <div className="mt-4 flex justify-center">
              <span className="flex max-w-full items-center gap-1.5 rounded-full bg-black/5 px-3 py-1 text-center text-xs font-medium tracking-wide text-ink/50">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                Dream Center, Los Angeles, CA
              </span>
            </div>
          </div>
        </Reveal>
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
                  outcomes. Deficiencies in nutrients like vitamin B12, B6, and
                  omega-3 fatty acids can impair cognition, emotional regulation,
                  and mental health.<FootnoteRef n={4} /> Youth exposed to Adverse
                  Childhood Experiences (ACEs)&mdash;including poverty and
                  trauma&mdash;face elevated risks of depression and anxiety,
                  often struggling with focus, school performance, and
                  resilience.<FootnoteRef n={5} /> Without a stable biological
                  foundation, these challenges compound into higher rates of
                  dropout, unemployment, and housing instability.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="h-full border-t-2 border-ink/20 pt-8 sm:border-l-2 sm:border-t-0 sm:pl-8 sm:pt-0">
                <h3 className="mb-3 text-lg font-semibold tracking-tight text-ink">
                  Reaching Transition-Age Youth (TAY) Before Systemic Crisis
                </h3>
                <p className="text-sm leading-relaxed text-ink/80 sm:text-base sm:leading-relaxed">
                  When basic needs go unmet, young people often seek safety and
                  belonging wherever they can find it. Homelessness raises exposure
                  to gang recruitment and street violence. Gangs can appear to
                  offer food, protection, and community&mdash;needs the system
                  no longer provides. Without early intervention, these pathways
                  dramatically increase the risk of trauma, substance use,
                  incarceration, and long-term instability&mdash;making it
                  critical to reach youth before crisis becomes the norm.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </div>

      {/* Visual divider — product photos */}
      <Container className="pt-16 sm:pt-20">
        <Reveal>
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/shared/body-armor-pallet.jpg"
                alt="Pallet of Body Armor drinks ready for distribution"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/shared/teen-health-protein-products.jpeg"
                alt="Teen Health team with protein products"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            </div>
          </div>
        </Reveal>
      </Container>

      {/* Why This Matters to Society */}
      <Container className="py-16 text-center sm:py-20">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-serif text-2xl font-normal leading-snug tracking-tight text-ink">
            Why This Matters to Southern California Communities
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

      {/* Visual divider — North County San Diego distribution */}
      <Container>
        <Reveal>
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "11/8" }}>
              <Image
                src="/images/shared/distribution-north-county-san-diego.jpg"
                alt="Teen Health volunteer handing a beverage to a young man during distribution"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
            <div className="mt-4 flex justify-center">
              <span className="flex max-w-full items-center gap-1.5 rounded-full bg-black/5 px-3 py-1 text-center text-xs font-medium tracking-wide text-ink/50">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                North County, San Diego, CA
              </span>
            </div>
          </div>
        </Reveal>
      </Container>

      <Container className="py-14 sm:py-16">
        <Reveal delay={0.08}>
          <div className="rounded-3xl p-8 text-center sm:p-10" style={{ backgroundColor: '#E5EEFB' }}>
            <h2 className="mx-auto max-w-2xl font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              You&rsquo;ve seen the gap. Now help close it.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ink/70">
              Your support gives youth the nutrition and care they need to stay safe,
              stay focused, and keep moving forward.
            </p>
            <div className="mt-8">
              <Link
                href="https://www.zeffy.com/en-US/donation-form/c471ed6d-57e8-41bf-85a6-7afce185e939"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
                style={{ backgroundColor: '#FF8005' }}
              >
                Fund a Stable Foundation — Donate Today
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>

      {/* Sources */}
      <Container className="border-t border-border/60 pb-12 pt-10 sm:pb-16 sm:pt-12">
        <div className="mx-auto max-w-3xl">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
            Sources
          </h3>
          <ol className="mt-4 space-y-2 text-xs leading-relaxed text-ink/65 sm:text-sm">
            <li id="source-1">
              <span className="font-semibold text-ink/80">[1]</span>{" "}
              <a
                href="https://www.health.harvard.edu/blog/nutritional-psychiatry-your-brain-on-food-201511168626"
                className="underline decoration-ink/30 hover:text-sun hover:decoration-sun"
                target="_blank"
                rel="noopener noreferrer"
              >
                Harvard Health Publishing &mdash; Nutritional psychiatry: Your brain on food
              </a>
            </li>
            <li id="source-2">
              <span className="font-semibold text-ink/80">[2]</span>{" "}
              <a
                href="https://www.apa.org/topics/stress/body"
                className="underline decoration-ink/30 hover:text-sun hover:decoration-sun"
                target="_blank"
                rel="noopener noreferrer"
              >
                American Psychological Association &mdash; Stress effects on the body
              </a>
            </li>
            <li id="source-3">
              <span className="font-semibold text-ink/80">[3]</span>{" "}
              <a
                href="https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/"
                className="underline decoration-ink/30 hover:text-sun hover:decoration-sun"
                target="_blank"
                rel="noopener noreferrer"
              >
                NIH Office of Dietary Supplements &mdash; Vitamin C Fact Sheet for Health Professionals
              </a>
            </li>
            <li id="source-4">
              <span className="font-semibold text-ink/80">[4]</span>{" "}
              <a
                href="https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/"
                className="underline decoration-ink/30 hover:text-sun hover:decoration-sun"
                target="_blank"
                rel="noopener noreferrer"
              >
                NIH Office of Dietary Supplements &mdash; Omega-3 Fatty Acids Fact Sheet for Health Professionals
              </a>
            </li>
            <li id="source-5">
              <span className="font-semibold text-ink/80">[5]</span>{" "}
              <a
                href="https://www.cdc.gov/aces/about/"
                className="underline decoration-ink/30 hover:text-sun hover:decoration-sun"
                target="_blank"
                rel="noopener noreferrer"
              >
                U.S. Centers for Disease Control and Prevention &mdash; About Adverse Childhood Experiences (ACEs)
              </a>
            </li>
            <li id="source-6">
              <span className="font-semibold text-ink/80">[6]</span>{" "}
              <a
                href="https://www.nimh.nih.gov/health/statistics/major-depression"
                className="underline decoration-ink/30 hover:text-sun hover:decoration-sun"
                target="_blank"
                rel="noopener noreferrer"
              >
                National Institute of Mental Health &mdash; Major Depression statistics (adolescents 12&ndash;17, past year)
              </a>
            </li>
            <li id="source-7">
              <span className="font-semibold text-ink/80">[7]</span>{" "}
              <a
                href="https://calbudgetcenter.org/resources/californias-persistent-poverty-crisis-2024-rates-remain-alarmingly-high/"
                className="underline decoration-ink/30 hover:text-sun hover:decoration-sun"
                target="_blank"
                rel="noopener noreferrer"
              >
                California Budget &amp; Policy Center &mdash; California&rsquo;s Persistent Poverty Crisis: 2024 Rates Remain Alarmingly High
              </a>
            </li>
            <li id="source-8">
              <span className="font-semibold text-ink/80">[8]</span>{" "}
              <a
                href="https://www.cafoodbanks.org/hunger-data-reports/"
                className="underline decoration-ink/30 hover:text-sun hover:decoration-sun"
                target="_blank"
                rel="noopener noreferrer"
              >
                California Association of Food Banks &mdash; Hunger Data &amp; Research (Census Pulse data)
              </a>
            </li>
            <li id="source-9">
              <span className="font-semibold text-ink/80">[9]</span>{" "}
              <a
                href="https://acf.gov/cb/map/afcars-state-reports"
                className="underline decoration-ink/30 hover:text-sun hover:decoration-sun"
                target="_blank"
                rel="noopener noreferrer"
              >
                Administration for Children &amp; Families &mdash; AFCARS State Reports (California, FY2023)
              </a>
            </li>
            <li id="source-10">
              <span className="font-semibold text-ink/80">[10]</span>{" "}
              <a
                href="https://www.chapinhall.org/research/calyouth/"
                className="underline decoration-ink/30 hover:text-sun hover:decoration-sun"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chapin Hall at the University of Chicago &mdash; California Youth Transitions to Adulthood Study (CalYOUTH)
              </a>
            </li>
            <li id="source-11">
              <span className="font-semibold text-ink/80">[11]</span>{" "}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9268228/"
                className="underline decoration-ink/30 hover:text-sun hover:decoration-sun"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lane et&nbsp;al. &mdash; Ultra-Processed Food Consumption and Mental Health: A Systematic Review and Meta-Analysis of Observational Studies (<em>Nutrients</em>, 2022)
              </a>
            </li>
            <li id="source-12">
              <span className="font-semibold text-ink/80">[12]</span>{" "}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11907100/"
                className="underline decoration-ink/30 hover:text-sun hover:decoration-sun"
                target="_blank"
                rel="noopener noreferrer"
              >
                Glucocorticoids and HPA axis regulation in the stress&ndash;obesity connection (<em>Clinical Obesity</em>, 2025)
              </a>
            </li>
          </ol>
        </div>
      </Container>
    </div>
  );
}
