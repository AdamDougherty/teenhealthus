"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export function HeroSection() {
  return (
    <section className="hero-section relative flex min-h-[90vh] items-center overflow-hidden">
      {/* Full-width background image */}
      <Image
        src="/hero.jpg"
        alt="Young person supported by Teen Health"
        fill
        priority
        className="object-cover object-[center_35%]"
        sizes="100vw"
        quality={90}
      />


      {/* Subtle dark gradient for text readability */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 40%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-6 pb-16 pt-32 sm:px-8 sm:pb-20 md:px-12 lg:max-w-3xl lg:px-16 lg:pb-24">
        <Reveal>
          <p className="hero-eyebrow hidden text-xs font-bold uppercase tracking-[0.22em] sm:block" style={{ color: "#FDCF6A" }}>
            Essential support · Youth-centered · Built to scale
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-5 font-serif text-3xl font-normal leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Healthy Essentials.
            <br />
            <span className="hero-highlight" style={{ color: "#FFA10A" }}>Delivered with Dignity.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/90 sm:text-base">
            Teen Health supports vulnerable youth and young adults with nourishing
            food, hydration, and personal care — delivered<br />
            through trusted local partners.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="https://www.classy.org/give/665776/#!/donation/checkout" variant="primary" style={{ backgroundColor: '#FF8005', color: 'white' }}>
              Give today
            </Button>
            <Button
              href="/programs"
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
