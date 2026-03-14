import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export const metadata = {
    title: "Leadership & Advisors",
};

export default function LeadershipPage() {
    return (
        <div className="bg-transparent">
            {/* ─── HERO ─── */}
            <section className="relative overflow-hidden" style={{ minHeight: "70vh", background: "linear-gradient(135deg, #1a2a6e 0%, #1e3a8a 40%, #2563c8 100%)" }}>
                <div className="absolute inset-0 bg-white/[0.04]" />

                {/* Text overlay */}
                <Container className="relative z-10 flex min-h-[70vh] items-center pb-0">
                    <div className="max-w-4xl">
                        <Reveal>
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sun">
                                Leadership &amp; Advisors
                            </p>
                            <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                                A Huge-Hearted, Innovative&nbsp;Team
                            </h1>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* ─── LEADERSHIP ─── */}
            <section className="py-16 sm:py-20">
                <Container>
                    <div className="mx-auto max-w-4xl text-center">
                        <Reveal>
                            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-sun" />
                            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                                Leadership
                            </h2>
                        </Reveal>
                    </div>

                    <div className="mt-14 space-y-16">
                        {/* Scott Swift */}
                        <Reveal delay={0.08}>
                            <div className="flex flex-col items-start gap-8 md:flex-row">
                                <div className="w-full flex-shrink-0 md:w-80">
                                    <div className="aspect-[4/5] w-full rounded-2xl border border-border bg-mist flex flex-col items-center justify-center gap-3 text-ink/30">
                                        <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Zm16.5-13.5h.008v.008h-.008V7.5Zm0 0a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0Z" />
                                        </svg>
                                        <span className="text-sm font-medium tracking-wide">Photo</span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-sun">
                                        President
                                    </p>
                                    <h3 className="mt-1 font-serif text-2xl font-normal tracking-tight text-ink">
                                        Scott Swift
                                    </h3>
                                    <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink/80">
                                        <p>
                                            Scott Swift co-founded Teen Health after realizing that the problem
                                            wasn&apos;t a lack of products — it was a lack of systems to get them to
                                            youth-serving organizations that needed them.
                                        </p>
                                        <p>
                                            With a background in technology startups and systems building,
                                            Scott brings a practical, operations-driven mindset to nonprofit work.
                                            He focuses on partnerships, logistics, and scalable infrastructure
                                            that strengthen existing youth services rather than duplicating them.
                                        </p>
                                        <p>
                                            Scott&apos;s perspective was shaped by work with families and
                                            community organizations, as well as conversations at autism and
                                            epilepsy conferences where nutrition and dietary therapy
                                            consistently emerged as central topics because of their real-world
                                            impact.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Lisa Carlson */}
                        <Reveal delay={0.16}>
                            <div className="flex flex-col items-start gap-8 md:flex-row">
                                <div className="w-full flex-shrink-0 md:w-80">
                                    <div className="aspect-[4/5] w-full rounded-2xl border border-border bg-mist flex flex-col items-center justify-center gap-3 text-ink/30">
                                        <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Zm16.5-13.5h.008v.008h-.008V7.5Zm0 0a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0Z" />
                                        </svg>
                                        <span className="text-sm font-medium tracking-wide">Photo</span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-sun">
                                        Vice-President
                                    </p>
                                    <h3 className="mt-1 font-serif text-2xl font-normal tracking-tight text-ink">
                                        Lisa Carlson
                                    </h3>
                                    <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink/80">
                                        <p>
                                            Lisa Carlson co-founded Teen Health after seeing firsthand how
                                            foundational health support affects daily functioning and emotional
                                            regulation.
                                        </p>
                                        <p>
                                            With more than 20 years in the natural products industry and lived
                                            experience as the parent of a son with autism, Lisa brings both
                                            professional and personal insight into Teen Health&apos;s mission.
                                        </p>
                                        <p>
                                            She has seen how nutrition, hydration, inflammation, and biological
                                            stress shape behavior, stability, and recovery — and how limited
                                            the tools often are beyond pharmaceutical or behavioral
                                            interventions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* ─── BOARD AND ADVISORY ─── */}
            <section className="bg-mist py-16 sm:py-20">
                <Container>
                    <div className="mx-auto max-w-4xl text-center">
                        <Reveal>
                            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-sun" />
                            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                                Board and Advisory
                            </h2>
                        </Reveal>
                    </div>

                    <Reveal delay={0.08}>
                        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-6 sm:grid-cols-2">
                            <p className="text-base font-semibold text-ink">Name</p>
                            <p className="text-base font-semibold text-ink">Name</p>
                            <p className="text-base font-semibold text-ink">Name</p>
                            <p className="text-base font-semibold text-ink">Name</p>
                            <p className="text-base font-semibold text-ink">Name</p>
                            <p className="text-base font-semibold text-ink">Name</p>
                        </div>
                    </Reveal>
                </Container>
            </section>
        </div>
    );
}
