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
      <Container className="py-14 sm:py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Programs"
            title="Built around what youth actually need"
            description="Three programs, one goal: get healthy essentials into the hands of youth who need them most — through partners who already have trust in the community."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
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
              <Button href="/learn" variant="primary">
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
