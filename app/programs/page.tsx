import Image from "next/image";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { programs } from "@/content/programs";
import { Button } from "@/components/Button";

export const metadata = {
  title: "Programs",
};

export default function ProgramsPage() {
  return (
    <div className="bg-transparent">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-ink" style={{ minHeight: "50vh" }}>
        {/* Full-width image placeholder */}
        <div className="absolute inset-0 bg-white/[0.04]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/30">
          <svg className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Zm16.5-13.5h.008v.008h-.008V7.5Zm0 0a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0Z" />
          </svg>
          <span className="text-sm font-medium tracking-wide">Hero Image</span>
        </div>

        {/* Text overlay */}
        <Container className="relative z-10 flex min-h-[50vh] items-center justify-center pb-0 text-center">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-sun">
                Become a Program Sponsor
              </p>
              <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Built Around What Youth Actually&nbsp;Need
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
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

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
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
                  Teen Health is delivering 500 backpacks filled with healthy
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
              <Card className="flex h-full flex-col p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-sun">
                  Campaign
                </p>
                <h3 className="mt-3 font-serif text-2xl font-normal tracking-tight text-ink">
                  The California Regenerative Youth Land&nbsp;Initiative
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">
                  Teen Health is acquiring two regenerative ranch properties in
                  Southern California where unhoused young adults ages 18–29
                  live on-site, earn wages, and build real skills through a paid
                  12–18 month apprenticeship. Residents graduate to stable
                  housing on their own timeline — no artificial deadlines, just
                  genuine readiness. The farm itself generates revenue through
                  CSA subscriptions, farmers markets, and branded products,
                  creating a model designed to outlast its founders.
                </p>
                <div className="mt-6">
                  <Button href="#" variant="primary">
                    Sponsor This Program
                  </Button>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>

        {/* ─── ALL PROGRAMS ─── */}
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {programs.map((p, index) => (
            <Reveal key={p.slug} delay={index * 0.08}>
              <Card className="flex flex-col overflow-hidden p-0">
                <div className="relative" style={{ aspectRatio: "3/2" }}>
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
                    {p.eyebrow}
                  </div>
                  <h3 className="mt-3 text-2xl font-normal tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{p.description}</p>

                  <div className="mt-6">
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
                      What this includes
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-ink/70">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sun" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
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
