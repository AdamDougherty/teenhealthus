"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/Button";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  const anim = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 30, filter: "blur(8px)" },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          transition: { duration: 1.1, ease, delay },
        };

  return (
    <section className="hero-section relative flex min-h-[90vh] items-center overflow-hidden">
      {/* Full-width background image */}
      <Image
        src="/hero.jpg"
        alt="Young person supported by Teen Health"
        fill
        priority
        className="object-cover object-[center_15%]"
        sizes="100vw"
        quality={90}
      />

      {/* Gradient overlays */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(35,31,32,0.92) 0%, rgba(35,31,32,0.55) 45%, rgba(35,31,32,0.15) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "linear-gradient(135deg, rgba(46,157,247,0.25) 0%, transparent 50%, rgba(255,201,7,0.2) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-6 pb-16 pt-32 sm:px-8 sm:pb-20 md:px-12 lg:max-w-3xl lg:px-16 lg:pb-24">
        <motion.p
          {...anim(0.2)}
          className="hero-eyebrow hidden text-xs font-bold uppercase tracking-[0.22em] text-white/60 sm:block"
        >
          Essential support · Youth-centered · Built to scale
        </motion.p>

        <motion.h1
          {...anim(0.4)}
          className="mt-5 font-serif text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Healthy essentials.
          <br />
          <span className="hero-highlight">Delivered with Love.</span>
        </motion.h1>

        <motion.p
          {...anim(0.65)}
          className="mt-6 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg"
        >
          Teen Health supports vulnerable youth and young adults with nourishing
          food, hydration, and personal care — plus a next step through trusted
          local partners.
        </motion.p>

        <motion.div
          {...anim(0.85)}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Button href="https://www.classy.org/give/665776/#!/donation/checkout" variant="primary">
            Give today
          </Button>
          <Button
            href="/programs"
            variant="ghost"
            className="text-white hover:bg-white/10"
          >
            Explore programs
          </Button>
        </motion.div>
      </div>

      {/* Decorative bottom edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
    </section>
  );
}
