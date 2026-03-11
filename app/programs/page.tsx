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
      <section className="relative overflow-hidden section-dark" style={{ minHeight: "50vh" }}>


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

          <div className="mx-auto mt-10 grid max-w-2xl gap-6">
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
                  This initiative connects unhoused young adults to working
                  ranch properties in Southern California, building resilience
                  through regenerative agriculture, paid apprenticeships, and
                  hands-on workforce development. Residents earn wages, gain
                  real skills, and transition to stable housing on their own
                  timeline — creating a self-sustaining model rooted in land,
                  community, and long-term healing.
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
