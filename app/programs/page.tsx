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
      <section className="relative overflow-hidden" style={{ minHeight: "70vh" }}>
        {/* Background image */}
        <Image
          src="/images/shared/program-sponsor-hero-banner-young-girl.png"
          alt="Program Sponsor hero"
          fill
          priority
          className="object-cover"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/50 to-transparent" />

        {/* Text overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-end px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl text-right" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#FDCF6A" }}>
                Become a Program Sponsor
              </p>
              <h1 className="mt-6 font-serif text-3xl font-normal tracking-tight text-white sm:text-4xl lg:text-5xl" style={{ lineHeight: 1.1 }}>
                Built around what youth <br />actually&nbsp;need
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white">
                Fund a program that puts healthy essentials directly into the hands of youth<br />
                who need them most — and help keep every kit stocked and ready.
              </p>
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
              Program sponsors make it possible for Teen Health to sustain its
              mission year-round. Choose a program below to fund directly
              through our Benevity campaigns.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-col gap-6">
            {/* Top row — two smaller campaigns side by side */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Campaign 0 — Youth Nutrition Initiative */}
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
                    <Button href="#" variant="primary" style={{ color: 'white' }}>
                      Sponsor This Program
                    </Button>
                  </div>
                </Card>
              </Reveal>

              {/* Campaign 1 — The Dignity Kit Program */}
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
                    <Button href="https://mygoodness.benevity.org/community/cause/840-874628884/project/5X9ZLPQV7M" variant="primary" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                      Sponsor This Program
                    </Button>
                  </div>
                </Card>
              </Reveal>
            </div>{/* end top 2-col grid */}

            {/* Campaign 2 — California Regenerative Youth Land Initiative */}
            <Reveal delay={0.16}>
              <LandInitiativeCard />
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
