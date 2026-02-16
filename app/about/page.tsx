import Image from "next/image";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="bg-transparent">
      <Container className="py-14 sm:py-16">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="A simple mission with real-world logistics"
            description="Teen Health focuses on practical essentials for vulnerable youth — delivered through partners that already have trust in the community."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Mission",
              body:
                "Help vulnerable youth and young adults access healthy food, hydration, supplements where appropriate, and personal care — packaged with dignity and delivered through trusted partners.",
              foot: "",
            },
            {
              title: "Approach",
              body:
                "Keep the model simple: rescue high-quality products, assemble kits, and distribute through local agencies that already serve youth.",
              foot: "",
            },
            {
              title: "Transparency",
              body: "Teen Health is a 501(c)(3) nonprofit organization. EIN: 87-4628884.",
              foot: "Add your annual reports, financials, and impact reporting here.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <Card>
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
                  {item.title}
                </div>
                <p className="mt-3 text-base leading-relaxed text-ink/80">{item.body}</p>
                {item.foot ? (
                  <p className="mt-3 text-sm text-ink/70">{item.foot}</p>
                ) : null}
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
          <div className="space-y-10">
            <Reveal>
              <section className="space-y-4">
                <h2 className="text-2xl font-normal tracking-tight text-ink">
                  Story (starter)
                </h2>
                <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "21/9" }}>
                  <Image
                    src="/images/youth/IMG_1205.jpeg"
                    alt="Teen Health team holding banner with backpack kits"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
                <p className="text-base leading-relaxed text-ink/80">
                  Since launching in 2022, Teen Health has focused on delivering healthy
                  essentials — not just one-time help, but consistent support that makes a
                  next step possible.
                </p>
                <p className="text-base leading-relaxed text-ink/80">
                  Replace this section with your founder story, geographic footprint, and the
                  partners you work with.
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.08}>
              <section className="space-y-4">
                <h2 className="text-2xl font-normal tracking-tight text-ink">
                  Team & partners
                </h2>
                <p className="text-base leading-relaxed text-ink/80">
                  Keep team bios lightweight. If you have a long “team” page today, consider
                  a short section here plus a downloadable PDF for detail.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { role: "Executive Director", image: "/images/team/IMG_5106.jpeg" },
                    { role: "Operations", image: "/images/team/IMG_5150.jpeg" },
                    { role: "Partnerships", image: "/images/team/IMG_5151.jpeg" },
                    { role: "Programs", image: "/images/team/IMG_5152.jpeg" },
                  ].map(
                    (item, index) => (
                      <Reveal key={item.role} delay={index * 0.06}>
                        <Card className="overflow-hidden p-0">
                          <div className="relative" style={{ aspectRatio: "4/3" }}>
                            <Image
                              src={item.image}
                              alt={`${item.role} team member`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                          <div className="p-5">
                            <div className="text-sm font-normal tracking-tight text-ink">
                              {item.role}
                            </div>
                            <p className="mt-2 text-sm text-ink/70">
                              Name • short bio • link (optional)
                            </p>
                          </div>
                        </Card>
                      </Reveal>
                    )
                  )}
                </div>
              </section>
            </Reveal>
          </div>

          <aside className="space-y-6">
            <Reveal>
              <Card>
                <div className="text-sm font-normal tracking-tight text-ink">Contact</div>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  Use this form for partners, volunteers, and general inquiries.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.08}>
              <Card>
                <div className="text-sm font-normal tracking-tight text-ink">Quick links</div>
                <div className="mt-4 space-y-2 text-sm">
                  <a href="https://www.classy.org/give/665776/#!/donation/checkout" className="block hover:text-ink">
                    Donate
                  </a>
                  <a href="/get-involved#volunteer" className="block hover:text-ink">
                    Volunteer
                  </a>
                  <a href="/learn" className="block hover:text-ink">
                    Learn hub
                  </a>
                </div>
              </Card>
            </Reveal>
          </aside>
        </div>
      </Container>
    </div>
  );
}
