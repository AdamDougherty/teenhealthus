import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export const metadata = {
  title: "The Dignity Kit Program",
};

export default function DignityKitProgramPage() {
  return (
    <div className="bg-transparent">
      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "70vh" }}
      >
        <Image
          src="/images/shared/humanity-heroes-booth-6.jpeg"
          alt="Humanity Heroes booth at community event"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10" />
        <div className="relative z-10 pl-6 sm:pl-10 lg:pl-16 py-16 min-h-[70vh] flex items-center">
          <div className="max-w-3xl">
            <Reveal>
              <p
                className="text-xs font-bold uppercase tracking-[0.22em]"
                style={{ color: "#FDCF6A" }}
              >
                Campaign
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1
                className="mt-4 font-serif text-3xl font-normal tracking-tight text-white sm:text-4xl lg:text-5xl"
                style={{ lineHeight: 1.1 }}
              >
                The Dignity Kit Program
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white">
                Nourishment, dignity, and stability in every backpack.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-sun" />
              <h2 className="text-center font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                About This Program
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              <Reveal delay={0.05}>
                <div>
                  <h3 className="font-serif text-xl font-normal tracking-tight text-ink">
                    What We&apos;re Doing
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/70">
                    Teen Health is providing 500 backpacks filled with healthy
                    snacks, hydration, and essential supplies to young people
                    experiencing homelessness across Los Angeles, assembled
                    and distributed through local community partners.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div>
                  <h3 className="font-serif text-xl font-normal tracking-tight text-ink">
                    Why It Matters
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/70">
                    This program delivers immediate nourishment, dignity, and
                    stability to youth who often lack consistent access to basic
                    essentials — meeting them where they are with what they need
                    right now.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div
                className="mt-10 rounded-2xl p-6 sm:p-8"
                style={{ backgroundColor: "#F0F6FF" }}
              >
                <p className="text-center text-base leading-relaxed text-ink/80">
                  Each backpack delivers approximately{" "}
                  <strong className="text-ink">$50 in retail value</strong>{" "}
                  through donated and discounted products, while costing just{" "}
                  <strong className="text-ink">$25 to assemble and distribute</strong>{" "}
                  — effectively doubling donor impact.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── PHOTO ─── */}
      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="mx-auto max-w-4xl grid gap-4 sm:grid-cols-2">
            <Reveal className="h-full">
              <div className="overflow-hidden rounded-2xl h-full relative" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/shared/humanity-heroes-backpacks-2.jpg"
                  alt="Backpacks filled with essentials ready for distribution"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="h-full">
              <div className="overflow-hidden rounded-2xl h-full relative" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/shared/humanity-heroes-booth-backpacks.jpg"
                  alt="Humanity Heroes booth with backpacks ready for distribution"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── IMPACT PER DOLLAR ─── */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: "#f5f0eb" }}>
        <Container>
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-sun" />
              <h2 className="text-center font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                Impact per Dollar
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-ink/70">
                Every dollar goes directly toward assembling and distributing
                backpacks to the youth who need them most.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                {
                  amount: "$25",
                  description:
                    "Provides 1 fully stocked backpack with nutritious food and hydration.",
                },
                {
                  amount: "$250",
                  description:
                    "Supports 10 young people with essential supplies.",
                },
                {
                  amount: "$2,500",
                  description:
                    "Funds 100 backpacks for youth experiencing homelessness.",
                },
                {
                  amount: "$12,500",
                  description:
                    "Fully funds the program, reaching 500 youth across Los Angeles.",
                },
              ].map((tier) => (
                <Reveal key={tier.amount} delay={0.05} className="flex">
                  <div className="flex-1 rounded-2xl bg-white p-6">
                    <p
                      className="font-serif text-2xl font-normal tracking-tight"
                      style={{ color: "#3D75D0" }}
                    >
                      {tier.amount}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">
                      {tier.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15}>
              <p className="mt-8 text-center text-sm text-ink/50">
                This program is eligible for corporate matching gifts and
                supports youth development, homelessness services, and{" "}
                food security&nbsp;initiatives.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <div
              className="rounded-3xl p-8 text-center sm:p-10"
              style={{ backgroundColor: "#E5EEFB" }}
            >
              <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                Sponsor This Program
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ink/70">
                Every $25 puts a fully stocked backpack into the hands of a
                young person who needs it — fund this program directly through
                our Benevity campaign.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button
                  href="https://mygoodness.benevity.org/community/cause/840-874628884/project/5X9ZLPQV7M"
                  variant="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  Sponsor on Benevity
                </Button>
                <Button
                  href="/program-sponsor"
                  variant="ghost"
                  className="text-ink hover:bg-ink/10"
                >
                  Back to Programs
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
