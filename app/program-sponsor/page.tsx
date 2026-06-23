import Image from "next/image";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";


export const metadata = {
  title: "Programs",
  description:
    "Explore Teen Health's programs — the Dignity Kit Program, Youth Nutrition Initiative, and California Regenerative Youth Land Initiative — and how sponsors can fund food and essentials for at-risk youth.",
};

export default function ProgramsPage() {
  return (
    <div className="bg-transparent">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[50vh] overflow-hidden sm:min-h-[70vh]">
        {/* Background image */}
        <Image
          src="/images/shared/program-sponsor-hero-banner-young-girl.jpg"
          alt="Program Sponsor hero"
          fill
          priority
          className="object-cover"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 hidden sm:block bg-gradient-to-r from-black/30 to-black/10" />
        {/* Mobile: bottom-darkening gradient so text reads cleanly over the photo */}
        <div className="absolute inset-0 sm:hidden bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div className="relative z-10 pl-6 pb-16 sm:pl-10 sm:pb-0 lg:pl-16 min-h-[50vh] flex items-end sm:items-center sm:min-h-[70vh]">
          <div className="max-w-2xl" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#FDCF6A" }}>
                Become a Program Sponsor
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-4 font-serif text-3xl font-normal tracking-tight text-white sm:text-4xl lg:text-5xl" style={{ lineHeight: 1.1 }}>
                Built Around<br className="sm:hidden" />{" "}What Youth<br /><span style={{ color: "#FFA10A" }}>Actually Need</span>
              </h1>
            </Reveal>
          </div>
        </div>
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
              Program sponsors fund the essentials that go directly into the hands of
              youth who need them most — keeping every kit stocked, ready, and moving
              year-round. Choose a program below to fund directly through our Benevity campaigns.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {/* Campaign 0 — The Dignity Kit Program */}
            <Reveal delay={0.08}>
              <Card className="flex h-full flex-col p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-eyebrow">
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
                  nourishment, dignity, and stability for the youth who
                  need it the most.
                </p>
                <div className="mt-6">
                  <Button href="/program-sponsor/dignity-kit-program" variant="primary" style={{ color: 'white' }}>
                    Learn More
                  </Button>
                </div>
              </Card>
            </Reveal>

            {/* Campaign 1 — Youth Nutrition Initiative */}
            <Reveal delay={0.08}>
              <Card className="flex h-full flex-col p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-eyebrow">
                  Campaign
                </p>
                <h3 className="mt-3 font-serif text-2xl font-normal tracking-tight text-ink">
                  Youth Nutrition Initiative
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">
                  Food insecurity undermines the programs youth depend on for
                  education, job training, and housing support. We partner with
                  youth-serving organizations to provide consistent, allergen-friendly
                  snacks that keep energy up and engagement strong throughout the
                  day. The initiative is designed to scale rapidly through
                  corporate sponsors and community partners — delivering reliable
                  nutrition across multiple cities to the youth who need it most.
                </p>
                <div className="mt-6">
                  <Button href="/youth-nutrition-initiative" variant="primary" style={{ color: 'white' }}>
                    Learn More
                  </Button>
                </div>
              </Card>
            </Reveal>

            {/* Campaign 2 — California Regenerative Youth Land Initiative */}
            <Reveal delay={0.16}>
              <Card className="flex h-full flex-col p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-eyebrow">
                  Campaign
                </p>
                <h3 className="mt-3 font-serif text-2xl font-normal tracking-tight text-ink">
                  California Regenerative Youth Land Initiative
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">
                  We are acquiring two working ranch properties in Southern
                  California where unhoused young adults ages 18–24 live on-site,
                  earn wages, build real skills, and prepare for permanent
                  housing — at their own pace, with real support behind them.
                  Regenerative agriculture, paid apprenticeships, enterprise
                  revenue, and a clear path to graduation when each youth is
                  genuinely ready.
                </p>
                <div className="mt-6">
                  <Button href="/program-sponsor/land-initiative" variant="primary" style={{ color: 'white' }}>
                    Learn More
                  </Button>
                </div>
              </Card>
            </Reveal>

            {/* Campaign 3 — Food as Medicine (MTG) */}
            <Reveal delay={0.16}>
              <Card className="flex h-full flex-col p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-eyebrow">
                  Campaign
                </p>
                <h3 className="mt-3 font-serif text-2xl font-normal tracking-tight text-ink">
                  Food as Medicine
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">
                  We&rsquo;re launching a Medically Tailored Groceries (MTG)
                  program — assembling clinically validated food boxes and
                  delivering them to Medi-Cal members, homeless youth, and
                  young adults managing chronic illness across Southern California.
                  Sourced from natural products partners, built with registered
                  dietitians, and positioned to participate in CalAIM&rsquo;s
                  food-as-medicine benefit.
                </p>
                <div className="mt-6">
                  <Button href="/food-as-medicine.html" variant="primary" style={{ color: 'white' }}>
                    Learn More
                  </Button>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>



        <Reveal delay={0.1}>
          <div className="mt-16 rounded-3xl p-8 text-center sm:p-10" style={{ backgroundColor: '#E5EEFB' }}>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/50">
              Go deeper
            </p>
            <h2 className="mx-auto max-w-2xl mt-4 font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              Every kit starts with a conversation.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ink/70">
              Our programs are built on relationships — with the brands that donate, the
              volunteers that pack, and the agencies that distribute. Learn more about the
              issues youth face or find a way to help.
            </p>
            <div className="mt-8 flex flex-row items-center justify-center gap-3">
              <Button
                href="/our-why"
                variant="primary"
                style={{ color: 'white' }}
                className="!text-xs !px-4 sm:!text-sm sm:!px-5"
              >
                Learn more
              </Button>
              <Button
                href="/get-involved"
                variant="ghost"
                className="text-ink hover:bg-ink/10 !text-xs !px-4 sm:!text-sm sm:!px-5"
              >
                Ways to help
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex justify-center">
            <div className="relative h-10 w-44 sm:h-12 sm:w-52">
              <Image
                src="/images/shared/benevity-logo.png"
                alt="Benevity"
                fill
                className="object-contain"
                sizes="208px"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
