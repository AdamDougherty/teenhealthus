import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export const metadata = {
    title: "Our Work",
};

export default function OurWorkPage() {
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
                    <div className="max-w-3xl">
                        <Reveal>
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sun">
                                Our Work
                            </p>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h1 className="mt-6 font-serif text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Impact &amp; Insights: Youth Health and Stability
                            </h1>
                        </Reveal>
                        <Reveal delay={0.15}>
                            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg sm:leading-relaxed">
                                Too many young people are navigating life without proper
                                nutrition, mental health resources, or stable housing.
                                Together, we&apos;re creating pathways to stability and
                                well-being.
                            </p>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* ─── OUR GROWING IMPACT ─── */}
            <section className="py-16 sm:py-20">
                <Container>
                    <div className="mx-auto max-w-4xl text-center">
                        <Reveal>
                            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-sun" />
                            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                                Our Growing Impact
                            </h2>
                        </Reveal>

                        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <Reveal delay={0.08}>
                                <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                                    <p className="font-serif text-4xl font-normal tracking-tight text-ink sm:text-5xl">
                                        50,000+
                                    </p>
                                    <p className="mt-3 text-base font-medium text-ink/60">
                                        Vulnerable Youth / Young Adults
                                    </p>
                                </div>
                            </Reveal>
                            <Reveal delay={0.12}>
                                <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                                    <p className="font-serif text-4xl font-normal tracking-tight text-ink sm:text-5xl">
                                        250+
                                    </p>
                                    <p className="mt-3 text-base font-medium text-ink/60">
                                        Company Partners
                                    </p>
                                </div>
                            </Reveal>
                            <Reveal delay={0.16}>
                                <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                                    <p className="font-serif text-4xl font-normal tracking-tight text-ink sm:text-5xl">
                                        100
                                    </p>
                                    <p className="mt-3 text-base font-medium text-ink/60">
                                        &ldquo;Superhero&rdquo; Social Service Partners
                                    </p>
                                </div>
                            </Reveal>
                            <Reveal delay={0.2}>
                                <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                                    <p className="font-serif text-4xl font-normal tracking-tight text-ink sm:text-5xl">
                                        $1 million+
                                    </p>
                                    <p className="mt-3 text-base font-medium text-ink/60">
                                        Groceries
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ─── YOUTH HEALTH & HOUSING DATA ─── */}
            <section className="bg-mist py-16 sm:py-20">
                <Container>
                    <div className="mx-auto max-w-4xl text-center">
                        <Reveal>
                            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-sun" />
                            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                                Youth Health &amp; Housing Data
                            </h2>
                        </Reveal>

                        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <Reveal delay={0.08}>
                                <div className="h-full rounded-2xl border border-border bg-white p-8 shadow-sm">
                                    <p className="font-serif text-4xl font-normal tracking-tight text-ink sm:text-5xl">
                                        40%
                                    </p>
                                    <p className="mt-4 text-sm leading-relaxed text-ink/60">
                                        of foster youth will be homeless or incarcerated within
                                        3 years of leaving the foster care system
                                    </p>
                                </div>
                            </Reveal>
                            <Reveal delay={0.12}>
                                <div className="h-full rounded-2xl border border-border bg-white p-8 shadow-sm">
                                    <p className="font-serif text-4xl font-normal tracking-tight text-ink sm:text-5xl">
                                        27%
                                    </p>
                                    <p className="mt-4 text-sm leading-relaxed text-ink/60">
                                        of youth transitioning out of foster care in California
                                        have been incarcerated
                                    </p>
                                </div>
                            </Reveal>
                            <Reveal delay={0.16}>
                                <div className="h-full rounded-2xl border border-border bg-white p-8 shadow-sm">
                                    <p className="font-serif text-4xl font-normal tracking-tight text-ink sm:text-5xl">
                                        14%
                                    </p>
                                    <p className="mt-4 text-sm leading-relaxed text-ink/60">
                                        of youth transitioning out of foster care in California
                                        had experienced homelessness
                                    </p>
                                </div>
                            </Reveal>
                            <Reveal delay={0.2}>
                                <div className="h-full rounded-2xl border border-border bg-white p-8 shadow-sm">
                                    <p className="font-serif text-4xl font-normal tracking-tight text-ink sm:text-5xl">
                                        376,900
                                    </p>
                                    <p className="mt-4 text-sm leading-relaxed text-ink/60">
                                        individuals in foster care in the US — 44,400 in
                                        California alone
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ─── RESEARCH & EVIDENCE BASED ─── */}
            <section className="py-16 sm:py-20">
                <Container>
                    <div className="mx-auto max-w-3xl">
                        <Reveal>
                            <div className="mb-4 h-1 w-10 rounded-full bg-sun" />
                            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                                Research &amp; Evidence Based
                            </h2>
                        </Reveal>
                        <Reveal delay={0.06}>
                            <h3 className="mt-6 text-lg font-semibold text-ink/80">
                                Nutrition, Mental Health, and Youth Stability in California
                            </h3>
                        </Reveal>

                        {/* Intro */}
                        <Reveal delay={0.1}>
                            <p className="mt-6 text-lg leading-relaxed text-ink/70">
                                In California, thousands of young people experience
                                homelessness, untreated mental health challenges, and exposure
                                to violence or gangs each year. These issues are deeply
                                connected — and nutrition plays a critical but often overlooked
                                role.
                            </p>
                        </Reveal>

                        {/* Body */}
                        <Reveal delay={0.14}>
                            <p className="mt-6 text-lg leading-relaxed text-ink/70">
                                The brain requires a steady supply of essential nutrients to
                                regulate mood, manage stress, control impulses, and make safe
                                decisions. For youth facing food insecurity, unstable housing,
                                or trauma, diets are often inconsistent and nutrient-poor,
                                weakening the brain&apos;s ability to cope under pressure.
                            </p>
                        </Reveal>
                        <Reveal delay={0.18}>
                            <p className="mt-6 text-lg leading-relaxed text-ink/70">
                                When the brain is undernourished and chronically stressed,
                                young people are more likely to experience anxiety, depression,
                                emotional dysregulation, and impaired judgment. In survival
                                mode, short-term safety and belonging can outweigh long-term
                                goals — making youth more vulnerable to gang involvement,
                                substance use, and continued housing instability.
                            </p>
                        </Reveal>

                        {/* Pull quote */}
                        <Reveal delay={0.22}>
                            <blockquote className="my-10 border-l-4 border-sun py-4 pl-6">
                                <p className="font-serif text-xl font-normal italic leading-relaxed text-ink sm:text-2xl">
                                    This is not a failure of character. It is a predictable
                                    outcome of unmet biological and social needs.
                                </p>
                            </blockquote>
                        </Reveal>

                        {/* Solution */}
                        <Reveal delay={0.26}>
                            <p className="mt-6 text-lg leading-relaxed text-ink/70">
                                Supporting nutrition alongside mental health care, housing
                                stability, and community connection strengthens the foundation
                                youth need to regulate emotions, resist high-risk pathways, and
                                build safer, healthier futures.
                            </p>
                        </Reveal>

                        {/* Closing statement */}
                        <Reveal delay={0.3}>
                            <p className="mt-8 text-lg font-semibold leading-relaxed text-ink">
                                Mental wellness, homelessness prevention, and violence
                                prevention start with meeting basic biological needs.
                            </p>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* ─── EVERY TEEN DESERVES ─── */}
            <section className="bg-mist py-16 sm:py-20">
                <Container>
                    <div className="mx-auto max-w-3xl">
                        <Reveal>
                            <div className="mb-4 h-1 w-10 rounded-full bg-sun" />
                            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                                Every Teen Deserves a Brain That Can Keep Up With Their Dreams
                            </h2>
                        </Reveal>

                        <Reveal delay={0.08}>
                            <p className="mt-6 text-lg leading-relaxed text-ink/70">
                                So many young people today are fighting battles no one can
                                see — stress that never shuts off, moods that swing without
                                warning, fog that makes school and relationships feel
                                impossible. These aren&apos;t character flaws. They&apos;re
                                signs of a brain struggling to get what it needs.
                            </p>
                        </Reveal>

                        {/* Mission pull quote */}
                        <Reveal delay={0.12}>
                            <blockquote className="my-10 border-l-4 border-sun py-4 pl-6">
                                <p className="font-serif text-xl font-normal italic leading-relaxed text-ink sm:text-2xl">
                                    At TeenHealth, we believe mental wellness isn&apos;t a
                                    mystery. It&apos;s biology. And biology can be supported.
                                </p>
                            </blockquote>
                        </Reveal>

                        <Reveal delay={0.16}>
                            <p className="mt-6 text-lg leading-relaxed text-ink/70">
                                Modern food systems have changed. Stress has changed. The world
                                teens are growing up in has changed. But the brain&apos;s
                                nutritional needs haven&apos;t. When those needs aren&apos;t
                                met, everything becomes harder — focus, emotional regulation,
                                resilience, hope.
                            </p>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <p className="mt-6 text-base font-semibold uppercase tracking-wide text-ink/50">
                                That&apos;s why we champion a simple, powerful idea:
                            </p>
                        </Reveal>

                        {/* Key idea */}
                        <Reveal delay={0.24}>
                            <blockquote className="my-10 border-l-4 border-sun py-4 pl-6">
                                <p className="font-serif text-xl font-normal italic leading-relaxed text-ink sm:text-2xl">
                                    Give the brain the full spectrum of nutrients it needs, and
                                    it becomes more capable of healing, learning, and thriving.
                                </p>
                            </blockquote>
                        </Reveal>

                        <Reveal delay={0.28}>
                            <p className="mt-6 text-lg leading-relaxed text-ink/70">
                                This isn&apos;t about quick fixes or one-size-fits-all
                                solutions. It&apos;s about restoring the biological foundation
                                that makes every other intervention — therapy, school support,
                                community care — more effective.
                            </p>
                        </Reveal>

                        <Reveal delay={0.32}>
                            <p className="mt-6 text-lg font-semibold leading-relaxed text-ink">
                                We partner with evidence-based, broad-spectrum micronutrient
                                approaches because they help teens regain clarity, stability,
                                and strength from the inside out. When the brain is nourished,
                                everything else becomes possible.
                            </p>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* ─── ANNUAL IMPACT SNAPSHOT ─── */}
            <section className="py-16 sm:py-20">
                <Container>
                    <div className="mx-auto max-w-4xl text-center">
                        <Reveal>
                            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-sun" />
                            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                                Annual Impact Snapshot
                            </h2>
                        </Reveal>

                        <div className="mt-12 flex justify-center">
                            <Reveal delay={0.08}>
                                <div className="rounded-2xl border border-border bg-mist px-16 py-10 shadow-sm">
                                    <p className="font-serif text-5xl font-normal tracking-tight text-ink sm:text-6xl">
                                        5,000
                                    </p>
                                    <p className="mt-4 text-sm leading-relaxed text-ink/60">
                                        Youth Served
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ─── CTA ─── */}
            <section className="bg-ink py-16 text-white sm:py-20">
                <Container>
                    <div className="mx-auto max-w-3xl text-center">
                        <Reveal>
                            <h2 className="font-serif text-3xl font-normal tracking-tight sm:text-4xl">
                                Help Us Expand Our Impact
                            </h2>
                        </Reveal>
                        <Reveal delay={0.08}>
                            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/65">
                                Every contribution helps us reach more young people with the
                                essentials they need to stabilize and thrive.
                            </p>
                        </Reveal>
                        <Reveal delay={0.16}>
                            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                                <Button href="https://www.classy.org/give/665776/#!/donation/checkout" variant="primary">
                                    Donate
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
