import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export const metadata = {
    title: "How We Work",
};

export default function HowWeWorkPage() {
    return (
        <div className="bg-transparent">
            {/* ─── HERO ─── */}
            <section className="relative overflow-hidden bg-ink" style={{ minHeight: "70vh" }}>
                {/* Full-width image placeholder */}
                <div className="absolute inset-0 bg-white/[0.04]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/30">
                    <svg className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Zm16.5-13.5h.008v.008h-.008V7.5Zm0 0a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0Z" />
                    </svg>
                    <span className="text-sm font-medium tracking-wide">Hero Image</span>
                </div>

                {/* Text overlay */}
                <Container className="relative z-10 flex min-h-[70vh] items-center justify-center pb-0 text-center">
                    <div className="max-w-4xl">
                        <Reveal>
                            <h1 className="font-serif text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Fueling Youth Well-Being and&nbsp;Stability
                            </h1>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* ─── WHERE TEEN HEALTH STEPS IN ─── */}
            <section className="py-16 sm:py-20">
                <Container>
                    <div className="mx-auto max-w-4xl text-center">
                        <Reveal>
                            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-sun" />
                            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                                Where Teen Health Steps&nbsp;In
                            </h2>
                        </Reveal>
                    </div>

                    <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
                        {/* Pillar 1 */}
                        <Reveal delay={0.08}>
                            <div className="h-full rounded-2xl border border-border bg-mist p-8">
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sun/20 text-sm font-bold text-sun">
                                    1
                                </span>
                                <h3 className="mt-5 font-serif text-xl font-normal tracking-tight text-ink">
                                    Nutrition as Foundation
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-ink/80">
                                    We provide essential vitamins and healthy food that support brain
                                    function, emotional regulation, and stress management. When youth
                                    are nourished, they&apos;re better equipped to engage in care, make
                                    safer decisions, and resist high-risk survival pathways.
                                </p>
                            </div>
                        </Reveal>

                        {/* Pillar 2 */}
                        <Reveal delay={0.16}>
                            <div className="h-full rounded-2xl border border-border bg-mist p-8">
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sun/20 text-sm font-bold text-sun">
                                    2
                                </span>
                                <h3 className="mt-5 font-serif text-xl font-normal tracking-tight text-ink">
                                    Dignity &amp; Immediate Stability
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-ink/80">
                                    Hygiene kits and basic essentials reduce daily stress and restore
                                    dignity during moments of transition. Meeting core needs builds
                                    stability when youth are most vulnerable to exploitation,
                                    violence, or gang exposure.
                                </p>
                            </div>
                        </Reveal>

                        {/* Pillar 3 */}
                        <Reveal delay={0.24}>
                            <div className="h-full rounded-2xl border border-border bg-mist p-8">
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sun/20 text-sm font-bold text-sun">
                                    3
                                </span>
                                <h3 className="mt-5 font-serif text-xl font-normal tracking-tight text-ink">
                                    Connection Before Crisis
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-ink/80">
                                    We show up at shelters, transitional housing, and points of
                                    system exit to connect youth to care and community. By
                                    intervening early, we replace isolation with support—before
                                    the street becomes the safety net.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </section>
        </div>
    );
}
