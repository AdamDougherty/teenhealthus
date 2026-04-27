import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export function HeroSection() {
  return (
    <section className="hero-section relative flex min-h-[50vh] items-end overflow-hidden sm:min-h-[90vh] sm:items-center">
      {/* Full-width background image */}
      <Image
        src="/images/shared/homepage-hero-banner.png"
        alt="Young person supported by Teen Health"
        fill
        priority
        className="object-cover object-[center_35%]"
        sizes="100vw"
        quality={90}
      />

      {/* Bottom scrim for text legibility */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-6 pb-6 pt-32 sm:px-8 sm:pb-20 md:px-12 lg:max-w-3xl lg:px-16 lg:pb-24">
        <Reveal>
          <p className="hero-eyebrow hidden text-xs font-bold uppercase tracking-[0.22em] sm:block" style={{ color: "#FFE08A", textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>
            Essential support · Youth-centered · Built to scale
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <h1 className="mt-5 font-serif text-3xl font-normal leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Healthy Essentials.
            <br />
            <span className="hero-highlight">Delivered with Dignity.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-row gap-3">
            <Button href="https://www.classy.org/give/665776/#!/donation/checkout" variant="primary" style={{ backgroundColor: '#FF8005', color: '#fff' }}>
              Give today
            </Button>
            <Button
              href="/program-sponsor"
              variant="ghost"
              className="text-white hover:bg-white/10"
            >
              Explore programs
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Decorative bottom edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
    </section>
  );
}
