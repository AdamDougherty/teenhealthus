import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Stat } from "@/components/Stat";
import { HeroSection } from "@/components/HeroSection";
import { programs } from "@/content/programs";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Why */}
      <section className="bg-transparent py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why it matters"
              title="Because access changes everything"
              description="When youth have stable essentials, they can focus on school, work, safety, and long-term health."
            />
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-10 mb-10 grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-3xl" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/shared/boys-nighttime.jpeg"
                  alt="Youth supported by Teen Health at night"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 600px"
                />
              </div>
              <div className="relative overflow-hidden rounded-3xl" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/shared/girls-sunset.jpeg"
                  alt="Youth supported by Teen Health at sunset"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 600px"
                />
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Health",
                desc: "Nutrition and hygiene reduce avoidable risks.",
              },
              {
                title: "Education",
                desc: "Food and stability support focus and attendance.",
              },
              {
                title: "Safety",
                desc: "Basics reduce urgent vulnerabilities.",
              },
              {
                title: "Stability",
                desc: "Consistent essentials make the next step possible.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <Card>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
                    {item.title}
                  </div>
                  <div className="mt-3 text-base font-normal tracking-tight text-ink">
                    {item.desc}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Programs */}
      <section className="bg-transparent py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="Three ways we show up"
              description="Direct support, rescued resources, and rapid response — built around partners who know their communities."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {programs.map((p, index) => (
              <Reveal key={p.slug} delay={index * 0.08} className="h-full">
                <Card className="flex flex-col overflow-hidden p-0 h-full">
                  <div className="relative" style={{ aspectRatio: "3/2" }}>
                    <Image
                      src={p.image.src}
                      alt={p.image.alt}
                      fill
                      className="object-cover"
                      style={{ objectPosition: p.image.position ?? "center" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
                      {p.eyebrow}
                    </div>
                    <h3 className="mt-3 text-xl font-normal tracking-tight text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">
                      {p.description}
                    </p>
                    <ul className="mt-5 space-y-2 text-sm text-ink/70">
                      {p.bullets.slice(0, 3).map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sun" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex-1" />
                    <div className="mt-6">
                      <Link
                        href={p.href ?? "/programs"}
                        className="text-sm font-semibold text-sky hover:underline"
                      >
                        Learn more →
                      </Link>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Impact */}
      <section className="bg-transparent py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Impact"
              title="Make it easy to trust the work"
              description="Real numbers. Real results. Real lives changed."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Reveal delay={0.05}>
              <Stat label="kits distributed" value="800" />
            </Reveal>
            <Reveal delay={0.13}>
              <Stat
                label="partner agencies"
                value="—"
              />
            </Reveal>
            <Reveal delay={0.21}>
              <Stat
                label="products rescued"
                value="—"
              />
            </Reveal>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="https://www.classy.org/give/665776/#!/donation/checkout" variant="primary" style={{ backgroundColor: '#FF8005', color: 'white' }}>
              Donate
            </Button>
            <Button
              href="/about"
              variant="secondary"
            >
              Transparency & story
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-transparent py-16 sm:py-20">
        <Container>
          <div className="rounded-3xl border border-border bg-white overflow-hidden shadow-soft sm:p-0">
            <div className="grid gap-0 lg:grid-cols-2 lg:items-stretch">
              <div className="relative hidden lg:block bg-mist" style={{ minHeight: "400px" }}>
                <Image
                  src="/images/shared/olive-crest.jpeg"
                  alt="Teen Health team with backpack kits ready for distribution"
                  fill
                  className="object-contain"
                  sizes="50vw"
                />
              </div>

              <div className="p-8 sm:p-10">
                <Reveal>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
                      Ready to take action?
                    </p>
                    <h2 className="mt-4 text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                      Give essentials. Reduce waste. Help youth take the next step.
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-ink/70">
                      Whether you’re donating funds, donating product, or volunteering time,
                      your support helps youth stabilize today and plan for tomorrow.
                    </p>

                    <div className="mt-7 mb-8 flex flex-col gap-3 sm:flex-row">
                      <Button href="https://www.classy.org/give/665776/#!/donation/checkout" variant="primary" style={{ backgroundColor: '#FF8005', color: 'white' }}>
                        Give today
                      </Button>
                      <Button href="/get-involved#volunteer" variant="secondary">
                        Volunteer
                      </Button>
                    </div>
                  </div>
                </Reveal>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Donate funds",
                      desc: "Support shipping, packing, and kits where they’re needed most.",
                    },
                    {
                      title: "Donate product",
                      desc: "Partner with us to rescue high-quality surplus.",
                    },
                    {
                      title: "Partner locally",
                      desc: "Agencies distribute kits directly to youth they serve.",
                    },
                    {
                      title: "Share the story",
                      desc: "Bring awareness and help connect more partners.",
                    },
                  ].map((item, index) => (
                    <Reveal key={item.title} delay={index * 0.06}>
                      <Card>
                        <div className="text-sm font-normal tracking-tight text-ink">
                          {item.title}
                        </div>
                        <p className="mt-2 text-sm text-ink/70">{item.desc}</p>
                      </Card>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
