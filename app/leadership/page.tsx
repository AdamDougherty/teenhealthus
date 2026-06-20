import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export const metadata = {
    title: "Leadership & Advisors",
    description:
        "Meet the leadership team and advisors behind Teen Health, the Apple Valley, CA nonprofit delivering food, hydration, supplements, and hygiene to at-risk youth across Southern California.",
};

export default function LeadershipPage() {
    return (
        <div className="bg-transparent">
            {/* ─── HERO ─── */}
            <section className="relative min-h-[50vh] overflow-hidden sm:min-h-[70vh]">
                <Image
                    src="/images/shared/volunteers-earth-harmony-boxes.jpeg"
                    alt="Volunteers with Earth Harmony boxes"
                    fill
                    priority
                    className="object-cover"
                    style={{ objectPosition: 'center 20%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10" />
                <div className="relative z-10 flex min-h-[50vh] items-center sm:min-h-[70vh]">
                    <div className="w-full pl-6 sm:pl-10 lg:w-1/2 lg:pl-16 py-16">
                        <div className="max-w-3xl">
                            <Reveal>
                                <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#FDCF6A" }}>
                                    Leadership &amp; Advisors
                                </p>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <h1 className="mt-4 font-serif text-3xl font-normal tracking-tight text-white sm:text-4xl lg:text-5xl" style={{ lineHeight: 1.1 }}>
                                    A Huge-Hearted,<br />Innovative Team
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
                        Interfaith Community Services, Oceanside, CA
                    </span>
                </div>
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
                                <div className="w-full flex-shrink-0 md:w-72">
                                    <div className="aspect-[5/6] w-full overflow-hidden rounded-2xl shadow-sm">
                                        <Image
                                            src="/images/shared/scott-swift-founder.png"
                                            alt="Scott Swift, President"
                                            width={1080}
                                            height={1080}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-eyebrow">
                                        President
                                    </p>
                                    <h3 className="mt-1 font-serif text-2xl font-normal tracking-tight text-ink">
                                        Scott Swift
                                    </h3>
                                    <div className="mt-4 space-y-4 text-base leading-relaxed text-ink/80">
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
                                <div className="w-full flex-shrink-0 md:w-72">
                                    <div className="aspect-[5/6] w-full overflow-hidden rounded-2xl shadow-sm">
                                        <Image
                                            src="/images/shared/lisa-carlson-founder.png"
                                            alt="Lisa Carlson, Vice-President"
                                            width={1080}
                                            height={1080}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-eyebrow">
                                        Vice-President
                                    </p>
                                    <h3 className="mt-1 font-serif text-2xl font-normal tracking-tight text-ink">
                                        Lisa Carlson
                                    </h3>
                                    <div className="mt-4 space-y-4 text-base leading-relaxed text-ink/80">
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
                            <p className="text-base font-semibold text-ink">Lisa Martinez</p>
                            <p className="text-base font-semibold text-ink">Darren Porter</p>
                            <p className="text-base font-semibold text-ink">Corey Swift</p>
                            <p className="text-base font-semibold text-ink">Cathy Kemendy</p>
                            <p className="text-base font-semibold text-ink">Stephen Chee</p>
                        </div>
                    </Reveal>
                </Container>
            </section>
        </div>
    );
}
