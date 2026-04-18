import Image from "next/image";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { LandInitiativeCard } from "./LandInitiativeCard";


export const metadata = {
  title: "Programs",
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10" />

        <div className="relative z-10 pl-6 sm:pl-10 lg:pl-16 min-h-[50vh] flex items-center sm:min-h-[70vh]">
          <div className="max-w-2xl" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#FDCF6A" }}>
                Become a Program Sponsor
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-4 font-serif text-3xl font-normal tracking-tight text-white sm:text-4xl lg:text-5xl" style={{ lineHeight: 1.1 }}>
                Built Around What Youth<br /><span style={{ color: "#FFA10A" }}>Actually Need</span>
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

          <div className="mt-10 flex flex-col gap-6">
            {/* Top row — two smaller campaigns side by side */}
            <div className="grid gap-6 sm:grid-cols-2">
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
                    <Button href="/program-sponsor/youth-nutrition-initiative" variant="primary" style={{ color: 'white' }}>
                      Learn More
                    </Button>
                  </div>
                </Card>
              </Reveal>
            </div>{/* end top 2-col grid */}

            {/* Campaign 2 — California Regenerative Youth Land Initiative */}
            <div id="land-initiative">
              <Reveal delay={0.16}>
                <LandInitiativeCard />
              </Reveal>
            </div>
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
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button href="/our-why" variant="primary" style={{ color: 'white' }}>
                Learn more
              </Button>
              <Button
                href="/get-involved"
                variant="ghost"
                className="text-ink hover:bg-ink/10"
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
