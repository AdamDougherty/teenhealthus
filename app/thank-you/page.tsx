import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Thank You",
  description: "We received your submission and will be in touch soon.",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <div className="bg-transparent">
      <section className="flex min-h-[70vh] items-center py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-mint/20">
                <svg
                  className="h-8 w-8 text-mintDark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-ink/50">
                Submission received
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <h1 className="mt-6 font-serif text-4xl font-normal tracking-tight text-ink sm:text-5xl">
                Thank You for Reaching Out
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-ink/60 sm:text-lg">
                We&rsquo;ve received your submission and we&rsquo;re excited to
                connect. A member of our team will review your information and
                be in touch with you soon.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-4 text-base leading-relaxed text-ink/60 sm:text-lg">
                Together, we can make sure more young people have the healthy
                food, hydration, and personal care essentials they need to
                thrive.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button href="/" variant="primary" style={{ backgroundColor: "#FF8005", color: "white" }}>
                  Back to Home
                </Button>
                <Button href="/our-work" variant="ghost">
                  See Our Work
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
