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
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden" style={{ minHeight: "70vh", background: "#2563c8" }}>
        <Container className="relative z-10 flex min-h-[70vh] items-center">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#FDCF6A" }}>
                Get Involved
              </p>
              <h1 className="mt-6 font-serif text-3xl font-normal tracking-tight text-white sm:text-4xl lg:text-5xl" style={{ lineHeight: 1.1 }}>
                There are many ways to&nbsp;help
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white">
                Donate, volunteer, or partner with us — everything you need to make<br />
                an impact, all in one place.
              </p>
              <div className="mt-8">
                <Button href="#donate" variant="primary" style={{ backgroundColor: '#FF8005', color: '#fff' }}>
                  Start giving
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-16">
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
                src="/images/shared/IMG_2274.jpeg"
                alt="Volunteers sorting and preparing supplies"
                fill
                className="object-cover" style={{ objectPosition: "center 15%" }}
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
            <Button href="/volunteer#volunteer-form" variant="primary" style={{ backgroundColor: '#FF8005', color: '#fff' }}>
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
            <Reveal className="h-full">
              <Card className="h-full overflow-hidden p-0">
                <div className="relative" style={{ aspectRatio: "3/2" }}>
                  <Image
                    src="/images/partnerships/IMG_4664.jpg"
                    alt="Teen Health delivering kits to the Center for Autism"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col p-6">
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
                  <div className="mt-auto pt-6">
                    <Button href="/brand-partner#donate-product-form" variant="primary" style={{ backgroundColor: '#FF8005', color: '#fff' }}>
                      Start a product donation
                    </Button>
                  </div>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.08} className="h-full">
              <Card className="h-full overflow-hidden p-0">
                <div className="relative" style={{ aspectRatio: "3/2" }}>
                  <Image
                    src="/images/partnerships/IMG_1710.jpeg"
                    alt="Partnership distribution in action"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <h3 className="text-xl font-normal tracking-tight text-ink">
                    Agency distribution
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    If you serve vulnerable youth and want to distribute kits, this is the
                    intake path: location, population served, distribution plan, and reporting.
                  </p>
                  <div className="mt-5 space-y-2 text-sm text-ink/70">
                    <div>• Youth-serving nonprofits</div>
                    <div>• Shelters & transitional housing</div>
                    <div>• Schools & community orgs</div>
                  </div>
                  <div className="mt-auto pt-6">
                    <Button href="/distribute#distribution-form" variant="primary" style={{ backgroundColor: '#FF8005', color: '#fff' }}>
                      Become a distribution partner
                    </Button>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="mt-6 rounded-3xl border border-border p-8 shadow-soft sm:p-10" style={{ backgroundColor: '#E5EEFB', color: '#000000' }}>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: '#000000', opacity: 0.6 }}>
                    Corporate partnerships
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-normal tracking-tight sm:text-3xl" style={{ color: '#000000' }}>
                    Become a corporate partner
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed" style={{ color: '#000000', opacity: 0.7 }}>
                    250+ companies in the natural products industry already partner with Teen Health.
                    Donate product, fund operations, or lend strategic expertise — and help essentials
                    reach the youth who need them most.
                  </p>
                </div>
                <div className="shrink-0">
                  <Button href="/partner#become-a-partner" variant="primary" style={{ backgroundColor: '#FF8005', color: '#fff' }}>
                    Learn more &amp; apply
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Donate */}
        <section id="donate" className="mt-6 scroll-mt-24">
          <Reveal>
            <div className="rounded-3xl p-8 sm:p-10" style={{ backgroundColor: '#E5EEFB', color: '#000000' }}>
              <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: '#000000', opacity: 0.6 }}>
                Donate
              </p>
              <h2 className="mt-3 font-serif text-2xl font-normal tracking-tight sm:text-3xl" style={{ color: '#000000' }}>
                Fund essentials that move fast
              </h2>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: '#000000', opacity: 0.7 }}>
                Every dollar goes toward packing and shipping essentials kits to youth
                through our partner agencies. Donate once or set up a monthly gift to keep
                kits moving.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href="https://www.classy.org/give/665776/#!/donation/checkout" variant="primary" style={{ backgroundColor: '#FF8005', color: '#fff' }}>
                  Donate now
                </Button>
                <Button href="#partner" variant="ghost" style={{ color: '#000000', borderColor: '#000000' }} className="hover:bg-[#000000]/10">
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
                    <div className="rounded-2xl border p-5" style={{ borderColor: 'rgba(27,42,74,0.15)', backgroundColor: 'rgba(255,255,255,0.4)' }}>
                      <div className="text-sm font-normal" style={{ color: '#000000' }}>{item.amount}</div>
                      <div className="mt-2 text-sm" style={{ color: '#000000', opacity: 0.8 }}>{item.desc}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

      </Container>
    </div>
  );
}
