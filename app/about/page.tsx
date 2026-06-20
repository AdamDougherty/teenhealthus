import Image from "next/image";
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
      <section className="relative min-h-[50vh] overflow-hidden sm:min-h-[70vh]">
        <Image
          src="/images/shared/triumph-foundation-gift-bags-mobile.jpg"
          alt="Triumph Foundation"
          fill
          priority
          className="object-cover sm:hidden"
        />
        <Image
          src="/images/shared/triumph-foundation.jpeg"
          alt="Triumph Foundation"
          fill
          priority
          className="hidden object-cover sm:block"
          style={{ objectPosition: 'center 32%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10" />
        <div className="relative z-10 flex min-h-[50vh] items-center sm:min-h-[70vh]">
          <div className="w-full pl-6 sm:pl-10 lg:w-1/2 lg:pl-16 py-16">
            <div className="max-w-3xl">
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#FDCF6A" }}>
                  About
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-4 font-serif text-3xl font-normal tracking-tight text-white sm:text-4xl lg:text-5xl" style={{ lineHeight: 1.1 }}>
                  A Simple Mission with<br />Real-World Logistics
                </h1>
              </Reveal>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 z-10 sm:bottom-6 sm:right-6">
          <span className="flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            Triumph Foundation, Irvine, CA
          </span>
        </div>
      </section>

      {/* ─── ANSWER-FIRST OVERVIEW (built for AI Overviews / featured snippets) ─── */}
      <section className="border-b border-ink/10 bg-transparent">
        <Container className="py-14 sm:py-16">
          <Reveal>
            <h2 className="font-serif text-2xl font-normal tracking-tight text-ink sm:text-3xl">
              Food &amp; support for at-risk youth in Southern California
            </h2>
          </Reveal>
          <dl className="mt-10 border-t border-ink/10">
            {[
              {
                h: "Who we serve",
                p: "Teen Health serves teens and young adults ages 13–24 across Southern California — including those facing homelessness, food insecurity, and poverty.",
              },
              {
                h: "What we provide",
                p: "We deliver nourishing food, hydration, supplements where appropriate, and hygiene and personal care products — assembled into dignity kits and distributed through trusted local partners.",
              },
              {
                h: "Where we operate",
                p: "Based in Apple Valley, California, we serve communities across Southern California — including San Diego, Riverside, San Bernardino, Los Angeles, and Orange counties — through partner schools, shelters, churches, and community outreach organizations.",
              },
              {
                h: "How to access services",
                p: "At-risk youth reach Teen Health through partner agencies that distribute our kits directly. Teens, caregivers, and partner organizations can email info@teenhealth.us to connect with support nearby.",
              },
              {
                h: "How to get involved",
                p: "You can help by donating food and hygiene products, volunteering, giving monthly, or partnering as a brand. Visit our Get Involved page or email info@teenhealth.us to start.",
              },
            ].map((item, index) => (
              <Reveal key={item.h} delay={Math.min(index * 0.05, 0.2)}>
                <div className="grid gap-1.5 border-b border-ink/10 py-6 sm:grid-cols-[180px_1fr] sm:gap-8">
                  <dt className="text-sm font-bold uppercase tracking-[0.14em] text-ink/60 sm:pt-1">
                    {item.h}
                  </dt>
                  <dd className="text-base leading-relaxed text-ink/80">
                    {item.p}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      <Container className="py-14 sm:py-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "16/11" }}>
            <Image
              src="/images/shared/covenant-house-supplements.jpeg"
              alt="Covenant House supplements"
              fill
              className="object-cover object-bottom"
              sizes="100vw"
              priority
            />
          </div>
          <div className="mt-4 flex justify-center">
            <span className="flex max-w-full items-center gap-1.5 rounded-full bg-black/5 px-3 py-1 text-center text-xs font-medium tracking-wide text-ink/50">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              Covenant House, Los Angeles, CA
            </span>
          </div>
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
              body: (
                <>
                  At Teen Health, we believe trust starts with transparency. You can learn more about our organization and impact on{" "}
                  <a
                    href="https://app.candid.org/profile/14074133/teen-health-inc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
                  >
                    Candid.org
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://mygoodness.benevity.org/community/cause/840-874628884"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
                  >
                    Benevity.com
                  </a>{" "}
                  — two trusted platforms dedicated to nonprofit accountability.
                </>
              ),
              foot: "",
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


        {/* Our story — full width */}
        <Reveal>
          <section className="mt-14 space-y-10">
            <div className="space-y-6">
              <h2 className="text-3xl font-normal tracking-tight text-ink">
                Our Story
              </h2>

              {/* Our beginning */}
              <div className="space-y-4">
                <h3 className="text-xl font-normal tracking-tight text-ink">
                  Our Beginning
                </h3>
                <p className="text-base leading-relaxed text-ink/80">
                  We launched Teen Health in 2022 with a simple question: what happens when a
                  young person lacks access to basic essentials—healthy food, water, hygiene,
                  and personal care? The answer was clear. Without these, everything else
                  begins to unravel. But solving it required a new approach.
                </p>
                <p className="text-base leading-relaxed text-ink/80">
                  Today, we rescue surplus product from brands and distributors, assemble
                  essential kits, and deliver them through trusted local agencies. What might
                  otherwise go to waste becomes something vital—reaching young people who are
                  too often overlooked. Based in Southern California, we&apos;ve built a model
                  to scale nationally through strategic logistics partnerships, delivering
                  critical resources efficiently and with dignity.
                </p>
              </div>
            </div>

            {/* Who we serve */}
            <div className="space-y-4">
              <h3 className="text-xl font-normal tracking-tight text-ink">
                Who We Serve
              </h3>
              <p className="text-base leading-relaxed text-ink/80">
                We founded Teen Health to ensure at-risk youth and young adults have
                consistent access to the basics—so they can stabilize their lives, build
                resilience, and begin to see a path forward.
              </p>
              <p className="text-base leading-relaxed text-ink/80">
                We serve youth ages 13–24 including those experiencing food insecurity,
                homelessness, foster care transitions, justice system involvement, and
                mental health challenges. Many are navigating circumstances they
                didn&apos;t choose, without the support systems they need. We believe
                access to basic needs isn&apos;t just about survival—it&apos;s the
                foundation for health, safety, confidence, and opportunity.
              </p>
            </div>

            {/* How we work */}
            <div className="space-y-4">
              <h3 className="text-xl font-normal tracking-tight text-ink">
                How We Work
              </h3>
              <p className="text-base leading-relaxed text-ink/80">
                Our approach is both practical and deeply human. We work with more than
                250 natural products companies to source high-quality food, hydration, and
                personal care essentials, ensuring what we provide supports real
                well-being—not just temporary relief. Through a network of 100+ trusted
                community partners, we reach youth where they are, when they need it most.
              </p>
              <p className="text-base leading-relaxed text-ink/80">
                But this work goes beyond meeting immediate needs. We are committed to
                helping young people move forward—through workforce development,
                partnerships, and pathways that lead to stability, independence, and hope.
              </p>
              <p className="text-base leading-relaxed text-ink/80">
                As we grow, we&apos;re expanding into new markets—building a national,
                partnership-driven platform that transforms surplus into measurable impact
                and gives more young people the chance not just to get by, but to truly
                thrive.
              </p>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="relative overflow-hidden rounded-2xl" style={{ height: "675px" }}>
                  <div className="absolute inset-0" style={{ top: "-10%", height: "110%" }}>
                    <Image
                      src="/images/shared/perfect-hydration-warehouse.jpeg"
                      alt="Perfect Hydration warehouse"
                      fill
                      className="object-cover object-bottom"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl" style={{ height: "675px" }}>
                  <div className="absolute inset-0" style={{ top: "-10%", height: "110%" }}>
                    <Image
                      src="/images/shared/gu-stroopwafel-boxes.jpg"
                      alt="GU Stroopwafel energy products ready for distribution"
                      fill
                      className="object-cover object-left"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Contact + Quick Links — footer box */}
        <Reveal>
          <div id="contact" className="mt-16 scroll-mt-24 rounded-3xl p-8 sm:p-10" style={{ backgroundColor: '#E5EEFB' }}>
            <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-start">
              <div>
                <div className="text-sm font-normal tracking-tight text-ink">Contact</div>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  Use this form for partners, volunteers, and general inquiries.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>

              <div>
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
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
