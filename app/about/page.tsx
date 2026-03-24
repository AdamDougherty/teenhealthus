
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";

import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="bg-transparent">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden" style={{ minHeight: "70vh", background: "linear-gradient(135deg, #1a2a6e 0%, #1e3a8a 40%, #2563c8 100%)" }}>
        <div className="absolute inset-0 bg-white/[0.04]" />
        <Container className="relative z-10 flex min-h-[70vh] items-center">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#FDCF6A" }}>
                About
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-4 font-serif text-3xl font-normal tracking-tight text-white sm:text-4xl lg:text-5xl" style={{ lineHeight: 1.1 }}>
                A simple mission with real-world logistics
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65">
                Teen Health focuses on practical essentials for vulnerable youth — delivered
                through partners that already have trust in the community.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-16">

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
              foot: "View our 990 and annual reports at teenhealth.org.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <Card className="h-full">
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
          <Reveal>
            <section className="space-y-4">
              <h2 className="text-2xl font-normal tracking-tight text-ink">
                Our story
              </h2>
              <p className="text-base leading-relaxed text-ink/80">
                We started in 2022 with a simple question: what happens when a young person
                doesn't have access to the basics — clean food, water, hygiene products,
                personal care? The answer wasn't hard to find, but the solution required
                a new approach.
              </p>
              <p className="text-base leading-relaxed text-ink/80">
                Today Teen Health rescues surplus product from brands and
                distributors, assembles essentials kits, and delivers them through a
                growing network of local agencies that already have trust in the
                community. Based in Southern California, our reach extends nationally
                through strategic logistics partnerships.
              </p>
            </section>
          </Reveal>


          <aside className="space-y-6">
            <Card>
              <div className="text-sm font-normal tracking-tight text-ink">Contact</div>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Use this form for partners, volunteers, and general inquiries.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Card>

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
                  <a href="/our-why" className="block hover:text-ink">
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
