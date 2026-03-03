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

            {/* ─── THE BEGINNING ─── */}
            <section className="py-20 sm:py-28">
                <Container>
                    <div className="mx-auto max-w-3xl">
                        <Reveal>
                            <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
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
                    </div>
                </Container>
            </section>

            {/* ─── WHERE WE ARE TODAY ─── */}
            <section className="bg-mist py-20 sm:py-28">
                <Container>
                    <div className="mx-auto max-w-3xl">
                        <Reveal>
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/50">
                                Where we are today
                            </p>
                            <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                                A growing network with real impact
                            </h2>
                        </Reveal>
                        <Reveal delay={0.08}>
                            <p className="mt-6 text-lg leading-relaxed text-ink/70">
                                Today, Teen Health works with 250+ brand partners to rescue
                                surplus products — from nutrition and hydration to personal
                                care and wellness. Based in Southern California, our reach
                                extends nationally through strategic logistics partnerships and
                                a growing network of local distribution agencies.
                            </p>
                        </Reveal>
                        <Reveal delay={0.12}>
                            <p className="mt-6 text-lg leading-relaxed text-ink/70">
                                Every product we rescue is sorted, quality-checked, and
                                assembled into kits designed for youth aged 13–29. These kits
                                are distributed through agencies that already have trust and
                                presence in their communities — shelters, foster care
                                organizations, schools, and transitional programs.
                            </p>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* ─── LOOKING AHEAD ─── */}
            <section className="py-20 sm:py-28">
                <Container>
                    <div className="mx-auto max-w-3xl">
                        <Reveal>
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/50">
                                Looking ahead
                            </p>
                            <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                                What&apos;s next for Teen Health
                            </h2>
                        </Reveal>
                        <Reveal delay={0.08}>
                            <p className="mt-6 text-lg leading-relaxed text-ink/70">
                                We&apos;re expanding into Northern California and the Central
                                Valley, building new brand partnerships, and investing in
                                technology to make our operations even more efficient. Our
                                goal is simple: reach more youth, rescue more products, and
                                make the model easy to replicate.
                            </p>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* ─── CTA ─── */}
            <section className="bg-ink py-20 text-white sm:py-28">
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
