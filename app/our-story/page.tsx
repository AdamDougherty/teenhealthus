import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export const metadata = {
    title: "Our Story",
};

export default function OurStoryPage() {
    return (
        <div className="bg-transparent">
            {/* ─── HERO ─── */}
            <section className="relative min-h-[50vh] overflow-hidden sm:min-h-[70vh]">
                <Image
                    src="/images/shared/dream-center-natures-turn.jpg"
                    alt="Teen Health nutrition distribution at the Dream Center, Los Angeles"
                    fill
                    priority
                    className="object-cover object-[center_28%]"
                    sizes="100vw"
                />
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 50%, transparent 80%)",
                    }}
                />
                <div className="absolute bottom-4 right-4 z-10 sm:bottom-6 sm:right-6">
                    <span className="flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        Dream Center, Los Angeles, CA
                    </span>
                </div>
                <div className="absolute inset-0 z-10 flex items-center justify-start px-6 sm:px-10 lg:px-16">
                    <div className="max-w-3xl text-left" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>
                        <Reveal>
                            <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#FDCF6A" }}>
                                Our Story
                            </p>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h1 className="mt-4 font-serif text-3xl font-normal tracking-tight text-white sm:text-4xl lg:text-5xl" style={{ lineHeight: 1.1 }}>
                                Our Mission: Health &amp; Wellness<br className="hidden md:inline" /> for At-Risk Youth
                            </h1>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ─── THE REALITY WE STARTED FROM ─── */}
            <section className="bg-[#F4F5F7] py-12 sm:py-16">
                <Container>
                    <div className="mx-auto max-w-3xl">
                        <Reveal>
                            <div className="mb-4 h-1 w-10 rounded-full bg-sun" />
                            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                                The Reality We Started From
                            </h2>
                        </Reveal>
                        <Reveal delay={0.08}>
                            <p className="mt-6 text-lg leading-relaxed text-ink/70">
                                Thousands of teenagers and young adults are growing
                                up without the basics most people take for granted:
                                enough nutritious food, stable housing, and the daily
                                care that makes health possible. They&apos;re
                                navigating school, work, and adulthood while facing
                                food insecurity, neurological challenges, and
                                economic hardship — often all at once.
                            </p>
                        </Reveal>
                        <Reveal delay={0.10}>
                            <p className="mt-6 text-lg leading-relaxed text-ink/70">
                                Many are doing it on their own. They&apos;re being
                                asked to regulate themselves in bodies that are
                                biologically under-supported, with little margin for
                                error. The cost compounds quickly — in concentration,
                                in mood, and in long-term health outcomes that follow
                                them for decades.
                            </p>
                        </Reveal>
                        <Reveal delay={0.12}>
                            <p className="mt-6 text-lg leading-relaxed text-ink/70">
                                These are the young people Teen Health exists to support.
                            </p>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* ─── PARTNER SPOTLIGHT — JUST IN TIME FOR FOSTER YOUTH ─── */}
            <section className="pt-12 sm:pt-16">
                <Container>
                    <div className="mx-auto max-w-3xl">
                        <Reveal>
                            <div className="overflow-hidden rounded-2xl shadow-sm">
                                <Image
                                    src="/images/shared/just-in-time-foster-youth-nordic-naturals-focus-support.jpeg"
                                    alt="Just in Time for Foster Youth team receiving Nordic Naturals Focus Support from Teen Health"
                                    width={3000}
                                    height={2250}
                                    className="w-full object-cover"
                                    style={{ aspectRatio: "4/3", objectPosition: "center 30%" }}
                                />
                            </div>
                            <div className="mt-4 flex justify-center">
                                <span className="flex items-center gap-1.5 rounded-full bg-black/5 px-3 py-1 text-xs font-medium tracking-wide text-ink/50">
                                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    Just in Time for Foster Youth, San Diego, CA
                                </span>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* ─── WHERE IT STARTED ─── */}
            <section className="py-12 sm:py-16">
                <Container>
                    <div className="mx-auto max-w-3xl">
                        <Reveal>
                            <div className="mb-4 h-1 w-10 rounded-full bg-sun" />
                            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                                Where It Started
                            </h2>
                        </Reveal>
                        <Reveal delay={0.08}>
                            <p className="mt-6 text-lg leading-relaxed text-ink/70">
                                Teen Health is a nonprofit dedicated to helping vulnerable youth
                                and young adults overcome barriers to accessing healthy, nutritious
                                food, beverages, supplements, and related support. We believe that
                                every young person deserves the foundation of good health —
                                regardless of their circumstances.
                            </p>
                        </Reveal>
                        <Reveal delay={0.10}>
                            <p className="mt-6 text-lg leading-relaxed text-ink/70">
                                Teen Health was born from a simple but powerful realization:
                                many young people, especially those facing neurological,
                                emotional, and social challenges, are being asked to regulate
                                themselves in bodies that are biologically under-supported.
                            </p>
                        </Reveal>
                        <Reveal delay={0.12}>
                            <p className="mt-6 text-lg leading-relaxed text-ink/70">
                                We launched Autism Support in 2019 to serve families navigating
                                autism — including my son Bradley, diagnosed in 2004. What began
                                as a personal mission quickly revealed a broader reality: the
                                families we supported were also facing housing instability, food
                                insecurity, and economic hardship. Health challenges rarely exist
                                in isolation.
                            </p>
                        </Reveal>
                        <Reveal delay={0.16}>
                            <div className="mt-8 overflow-hidden rounded-2xl shadow-sm">
                                <Image
                                    src="/images/shared/soap-lipbalm-electrolytes-supplements.jpeg"
                                    alt="Teen Health hygiene and supplement supplies for at-risk youth at YMCA TAY Center, Escondido, CA"
                                    width={3000}
                                    height={2000}
                                    className="w-full object-cover"
                                    style={{ aspectRatio: "4/3", objectPosition: "center 15%" }}
                                />
                            </div>
                            <div className="mt-4 flex justify-center">
                                <span className="flex items-center gap-1.5 rounded-full bg-black/5 px-3 py-1 text-xs font-medium tracking-wide text-ink/50">
                                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    YMCA TAY Center of San Diego County, Escondido, CA
                                </span>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* ─── FROM AUTISM SUPPORT TO TEEN HEALTH ─── */}
            <section className="bg-mist py-12 sm:py-16">
                <Container>
                    <div className="mx-auto max-w-3xl">
                        <Reveal>
                            <div className="mb-4 h-1 w-10 rounded-full bg-sun" />
                            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                                From Autism Support to Teen Health
                            </h2>
                        </Reveal>
                        <Reveal delay={0.08}>
                            <p className="mt-6 text-lg leading-relaxed text-ink/70">
                                By 2022, it was clear we needed to expand beyond a single-focus
                                program. We rebranded as Teen Health, Inc., a 501(c)(3)
                                nonprofit, to address the interconnected drivers of youth
                                vulnerability across California — recognizing that at-risk youth
                                and young adults (ages 13–24) need holistic support integrating
                                health, nutrition, stability, and opportunity.
                            </p>
                        </Reveal>
                        <Reveal delay={0.12}>
                            <div className="mt-8 overflow-hidden rounded-2xl shadow-sm">
                                <Image
                                    src="/images/shared/uci-health-center-for-autism.jpeg"
                                    alt="Teen Health partnership with UCI Health Center for Autism & Neurodevelopmental Disorders, Irvine, CA"
                                    width={3000}
                                    height={2000}
                                    className="w-full object-cover"
                                    style={{ aspectRatio: "4/3", objectPosition: "center 15%" }}
                                />
                            </div>
                            <div className="mt-4 flex justify-center">
                                <span className="rounded-full bg-black/5 px-3 py-1 text-center text-xs font-medium tracking-wide text-ink/50">
                                    <svg className="mr-1 inline-block h-3.5 w-3.5 align-text-bottom" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    UCI Health Center for Autism &amp; Neurodevelopmental Disorders, Irvine, CA
                                </span>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* ─── WHAT WE DO TODAY ─── */}
            <section className="pt-12 pb-4 sm:pt-16 sm:pb-6">
                <Container>
                    <div className="mx-auto max-w-3xl">
                        <Reveal>
                            <div className="mb-4 h-1 w-10 rounded-full bg-sun" />
                            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                                What We Do Today
                            </h2>
                        </Reveal>
                        <Reveal delay={0.08}>
                            <p className="mt-6 text-lg leading-relaxed text-ink/70">
                                Today, Teen Health serves homeless, food-insecure, and
                                low-income youth through three core programs:
                            </p>
                        </Reveal>
                        <Reveal delay={0.10}>
                            <ul className="mt-6 space-y-4">
                                {[
                                    { label: "Distribution", desc: "High-quality nutrition and supplements." },
                                    { label: "Wellness", desc: "Hygiene and wellness kits for local shelters." },
                                    { label: "Programs", desc: "Fitness and healthy living initiatives." },
                                ].map((item) => (
                                    <li key={item.label} className="flex gap-4 text-lg leading-relaxed text-ink/70">
                                        <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-sun" />
                                        <span>
                                            <strong className="font-semibold text-ink">{item.label}:</strong>{" "}
                                            {item.desc}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                        <Reveal delay={0.14}>
                            <p className="mt-6 text-lg leading-relaxed text-ink/70">
                                We work alongside nonprofit partners, schools, shelters,
                                and community organizations across Los Angeles, Orange
                                County, and San Diego to strengthen the safety net for
                                young people in poverty or without stable housing.
                            </p>
                        </Reveal>
                        <Reveal delay={0.16}>
                            <p className="mt-6 text-lg leading-relaxed text-ink/70">
                                And the momentum is growing. Today, we are taking in product by
                                the truckload — because the need is real, and the community is
                                responding.
                            </p>
                        </Reveal>
                        <Reveal delay={0.16}>
                            <div className="mt-8 overflow-hidden rounded-2xl shadow-sm">
                                <Image
                                    src="/images/shared/truck-unloading.jpg"
                                    alt="Teen Health nutrition distribution truck unloading product at Skid Row, Los Angeles"
                                    width={3000}
                                    height={2000}
                                    className="w-full object-cover"
                                    style={{ aspectRatio: "4/3", objectPosition: "center 15%" }}
                                />
                            </div>
                            <p className="mt-4 text-center text-sm italic text-ink/70">
                                Donated supplies arrive by the truckload — fueling Teen Health&apos;s ongoing distribution to vulnerable youth.
                            </p>
                            <div className="mt-2 flex justify-center">
                                <span className="flex items-center gap-1.5 rounded-full bg-black/5 px-3 py-1 text-xs font-medium tracking-wide text-ink/50">
                                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        Skid Row, Los Angeles, CA
                                    </span>
                            </div>
                        </Reveal>
                        <Reveal delay={0.20}>
                            <div className="mt-10 flex justify-center">
                                <Button
                                    href="https://www.classy.org/give/665776/#!/donation/checkout"
                                    variant="primary"
                                    style={{ backgroundColor: '#FF8005', color: '#fff' }}
                                >
                                    Donate Now
                                </Button>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* ─── THE MISSION AHEAD ─── */}
            <section className="bg-mist py-12 sm:py-16">
                <Container>
                    <div className="mx-auto max-w-3xl">
                        <Reveal>
                            <div className="mb-4 h-1 w-10 rounded-full bg-sun" />
                            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                                The Mission Ahead
                            </h2>
                        </Reveal>
                        <Reveal delay={0.08}>
                            <p className="mt-6 text-lg leading-relaxed text-ink/70">
                                We are currently seeking both product and monetary donations to
                                support our ongoing distribution efforts across Southern
                                California — especially some of the healthiest products on the
                                market, items that can genuinely raise the level of health and
                                wellness for at-risk youth.
                            </p>
                        </Reveal>
                        <Reveal delay={0.12}>
                            <p className="mt-6 text-lg leading-relaxed text-ink/70">
                                Our mission is to promote health and wellness through nutrition,
                                fitness, and healthy living — not as standalone services, but as
                                foundational pillars that help vulnerable youth stabilize,
                                rebuild, and move toward independence. By broadening from a
                                single program to a comprehensive youth health organization,
                                Teen Health addresses both immediate needs and systemic
                                barriers — empowering the next generation to lead healthier,
                                safer, and more fulfilling lives.
                            </p>
                        </Reveal>
                        <Reveal delay={0.16}>
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="overflow-hidden rounded-2xl shadow-sm" style={{ aspectRatio: "2/3" }}>
                                    <Image
                                        src="/images/shared/man-supplements-2.jpg"
                                        alt="At-risk youth receiving Teen Health nutrition supplements at Living Word of Upland, CA"
                                        width={1500}
                                        height={2250}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="overflow-hidden rounded-2xl shadow-sm" style={{ aspectRatio: "2/3" }}>
                                    <Image
                                        src="/images/shared/young-man-supplements.jpg"
                                        alt="Young adult with Teen Health nutrition supplements at Living Word of Upland, CA"
                                        width={1500}
                                        height={2250}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="mt-4 flex justify-center">
                                <span className="flex items-center gap-1.5 rounded-full bg-black/5 px-3 py-1 text-xs font-medium tracking-wide text-ink/50">
                                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    Living Word of Upland, Upland, CA
                                </span>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* ─── CTA ─── */}
            <Container className="py-16 sm:py-20">
                <Reveal>
                    <div className="rounded-3xl p-8 text-center sm:p-10" style={{ backgroundColor: '#E5EEFB' }}>
                        <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                            Be Part of the Story
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/65">
                            Whether you&apos;re a brand, an agency, or an individual —
                            there&apos;s a way to help youth access the essentials they
                            deserve.
                        </p>
                        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                            <Button href="/brand-partner" variant="primary" style={{ color: '#fff' }}>
                                Partner With Us
                            </Button>
                            <Button
                                href="/get-involved"
                                variant="primary"
                                style={{ backgroundColor: 'rgba(255,255,255,0.4)', color: '#231F20' }}
                            >
                                Get Involved
                            </Button>
                        </div>
                    </div>
                </Reveal>
            </Container>
        </div>
    );
}
