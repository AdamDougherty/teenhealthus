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
            <section className="relative overflow-hidden section-dark" style={{ minHeight: "70vh" }}>


                {/* Text overlay */}
                <Container className="relative z-10 flex min-h-[70vh] items-end pb-16 sm:pb-20">
                    <div className="max-w-2xl">
                        <Reveal>
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sun">
                                Our Story
                            </p>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h1 className="mt-6 font-serif text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                                How Teen Health Started — and Where We&apos;re Going
                            </h1>
                        </Reveal>
                        <Reveal delay={0.15}>
                            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg sm:leading-relaxed">
                                From a simple question about access to essentials, to a growing
                                network of partners, brands, and agencies serving youth across
                                the country.
                            </p>
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
                                and young adults (ages 13–29) need holistic support integrating
                                health, nutrition, stability, and opportunity.
                            </p>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* ─── WHAT WE DO TODAY ─── */}
            <section className="py-12 sm:py-16">
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
                                Today, Teen Health serves homeless, food-insecure, and low-income
                                youth through nutrition distribution, hygiene and wellness kits,
                                fitness programming, and partnerships with schools, shelters, and
                                community organizations. We work alongside nonprofit partners and
                                local agencies to strengthen the safety net for young people in
                                poverty or without stable housing.
                            </p>
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
                    </div>
                </Container>
            </section>

            {/* ─── CTA ─── */}
            <section className="section-dark py-20 text-white sm:py-28">
                <Container>
                    <div className="mx-auto max-w-3xl text-center">
                        <Reveal>
                            <h2 className="font-serif text-3xl font-normal tracking-tight sm:text-4xl">
                                Be Part of the Story
                            </h2>
                        </Reveal>
                        <Reveal delay={0.08}>
                            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/65">
                                Whether you&apos;re a brand, an agency, or an individual —
                                there&apos;s a way to help youth access the essentials they
                                deserve.
                            </p>
                        </Reveal>
                        <Reveal delay={0.16}>
                            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                                <Button href="/brand-partner" variant="primary">
                                    Partner With Us
                                </Button>
                                <Button
                                    href="/get-involved"
                                    variant="ghost"
                                    className="text-white hover:bg-white/10"
                                >
                                    Get Involved
                                </Button>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </section>
        </div>
    );
}
