import Image from "next/image";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

export const metadata = {
  title: "Get involved",
};

export default function GetInvolvedPage() {
  return (
    <div className="bg-transparent">
      <Container className="py-14 sm:py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Get involved"
            title="There are lots of ways to help"
            description="This page combines donation, volunteering, and partnerships in one place (instead of many smaller pages)."
          />
        </Reveal>

        {/* Donate */}
        <section id="donate" className="mt-12 scroll-mt-24">
          <Reveal>
            <div className="rounded-3xl bg-ink p-8 text-white sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                Donate
              </p>
              <h2 className="mt-4 text-3xl font-normal tracking-tight sm:text-4xl">
                Fund essentials that move fast
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
                Use this section to connect to your real donation flow (Stripe, Donorbox,
                Classy, etc.). The CTA stays bold and simple.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href="https://www.classy.org/give/665776/#!/donation/checkout" variant="primary">
                  Donate now
                </Button>
                <Button href="#partner" variant="ghost" className="text-white hover:bg-white/10">
                  Partner with us
                </Button>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  {
                    amount: "$25",
                    desc: "Helps assemble a basic essentials kit.",
                  },
                  {
                    amount: "$100",
                    desc: "Supports bulk shipping and distribution.",
                  },
                  {
                    amount: "$500",
                    desc: "Helps move emergency supplies quickly.",
                  },
                ].map((item, index) => (
                  <Reveal key={item.amount} delay={index * 0.06}>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <div className="text-sm font-normal">{item.amount}</div>
                      <div className="mt-2 text-sm text-white/80">{item.desc}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Volunteer */}
        <section id="volunteer" className="mt-14 scroll-mt-24">
          <Reveal>
            <SectionHeading
              eyebrow="Volunteer"
              title="Hands-on help that matters"
              description="Packing, sorting, kitting, and logistics support — organized with partners."
            />
          </Reveal>

          <Reveal delay={0.05}>
            <div className="relative mt-8 mb-8 overflow-hidden rounded-2xl" style={{ aspectRatio: "21/9" }}>
              <Image
                src="/images/events/IMG_4150.jpeg"
                alt="Volunteers sorting and preparing supplies"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                eyebrow: "Warehouse / packing",
                title: "Pack essentials kits",
                desc: "Help sort product, assemble kits, and prep shipments for partner agencies.",
              },
              {
                eyebrow: "Logistics",
                title: "Move supplies efficiently",
                desc: "Support pickup, inventory, and coordination with distribution partners.",
              },
              {
                eyebrow: "Skills-based",
                title: "Lend your expertise",
                desc:
                  "Design, development, ops, fundraising, partnerships, grant writing, and more.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <Card>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
                    {item.eyebrow}
                  </div>
                  <h3 className="mt-3 text-xl font-normal tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-8">
            <Button href="/volunteer#volunteer-form" variant="secondary">
              Volunteer interest form
            </Button>
          </div>
        </section>

        {/* Partner */}
        <section id="partner" className="mt-14 scroll-mt-24">
          <Reveal>
            <SectionHeading
              eyebrow="Partner"
              title="Brands, distributors, and agencies"
              description="Partnerships make it possible to rescue quality products and distribute them where they’re needed most."
            />
          </Reveal>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Card className="overflow-hidden p-0">
                <div className="relative" style={{ aspectRatio: "3/2" }}>
                  <Image
                    src="/images/partnerships/IMG_4664.jpg"
                    alt="Teen Health delivering kits to the Center for Autism"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                <h3 className="text-xl font-normal tracking-tight text-ink">Donate product</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  If you're a brand or distributor, we can accept eligible products and
                  coordinate logistics. This is where you'd outline product criteria,
                  packaging rules, and intake process.
                </p>
                <div className="mt-5 space-y-2 text-sm text-ink/70">
                  <div>• Healthy food & beverage</div>
                  <div>• Hydration products</div>
                  <div>• Natural personal care</div>
                </div>
                <div className="mt-6">
                  <Button href="/donate-product#donate-product-form" variant="primary">
                    Start a product donation
                  </Button>
                </div>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.08}>
              <Card className="overflow-hidden p-0">
                <div className="relative" style={{ aspectRatio: "3/2" }}>
                  <Image
                    src="/images/partnerships/IMG_1710.jpeg"
                    alt="Partnership distribution in action"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                <h3 className="text-xl font-normal tracking-tight text-ink">
                  Agency distribution
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  If you serve vulnerable youth and want to distribute kits, this is the
                  intake path: location, population served, distribution plan, and reporting.
                </p>
                <div className="mt-6">
                  <Button href="/distribute#distribution-form" variant="secondary">
                    Become a distribution partner
                  </Button>
                </div>
                </div>
              </Card>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="mt-6 rounded-3xl border border-border bg-ink p-8 text-white shadow-soft sm:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-sun">
                    Corporate partnerships
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-normal tracking-tight sm:text-3xl">
                    Become a corporate partner
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/70">
                    250+ companies in the natural products industry already partner with Teen Health.
                    Donate product, fund operations, or lend strategic expertise — and help essentials
                    reach the youth who need them most.
                  </p>
                </div>
                <div className="shrink-0">
                  <Button href="/partner#become-a-partner" variant="primary">
                    Learn more &amp; apply
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

      </Container>
    </div>
  );
}
