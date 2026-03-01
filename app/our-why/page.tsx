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
      <section className="relative overflow-hidden bg-ink">
        {/* Decorative gradient accent */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 120%, rgba(243,196,41,0.15) 0%, transparent 70%)",
          }}
        />
        <Container className="relative z-10 py-20 text-center sm:py-28">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/50">
              Our Why
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Survive{" "}
              <span className="mx-2 inline-block text-sun sm:mx-4">→</span>{" "}
              <span className="hero-highlight">Thrive</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
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
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="flex items-center justify-center rounded-2xl border border-border bg-surface"
                style={{ aspectRatio: "4/3" }}
              >
                <span className="text-sm text-ink/30">Photo {n}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>

      <Container className="py-14 sm:py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Learn"
            title="The essentials, simplified"
            description="Instead of dozens of small pages, keep a single Learn hub with a handful of high-signal articles."
          />
        </Reveal>

        <div className="mt-10 space-y-12">
          {byCategory.map(({ cat, items }) => (
            <div key={cat}>
              <Reveal>
                <div className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
                  {cat}
                </div>
              </Reveal>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((a, index) => (
                  <Reveal key={a.slug} delay={index * 0.07}>
                    <Card className="flex flex-col overflow-hidden p-0">
                      <div className="relative" style={{ aspectRatio: "3/2" }}>
                        <Image
                          src={a.image.src}
                          alt={a.image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-normal tracking-tight text-ink">
                          {a.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-ink/70">{a.deck}</p>
                        <div className="mt-5 flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
                            Updated {new Date(a.updated).getFullYear()}
                          </span>
                          <Link
                            href={`/our-why/${a.slug}`}
                            className="text-sm font-semibold text-sky hover:underline"
                          >
                            Read →
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

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
