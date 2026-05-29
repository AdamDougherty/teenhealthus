import Image from "next/image";
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
            <section className="relative min-h-[50vh] overflow-hidden sm:min-h-[70vh]">
                <Image
                    src="/images/shared/young-girl-2.jpg"
                    alt="Young girl supported by Teen Health"
                    fill
                    priority
                    className="object-cover"
                    style={{ objectPosition: 'center 12%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10" />
                <div className="relative z-10 flex min-h-[50vh] items-center sm:min-h-[70vh]">
                    <div className="w-full pl-6 sm:pl-10 lg:w-1/2 lg:pl-16 py-16">
                        <div className="max-w-3xl">
                            <Reveal>
                                <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#FDCF6A" }}>
                                    Our Work
                                </p>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <h1 className="mt-4 font-serif text-3xl font-normal tracking-tight text-white sm:text-4xl lg:text-5xl" style={{ lineHeight: 1.1 }}>
                                    Impact &amp; Insights:<br />Youth Health &amp; Stability
                                </h1>
                            </Reveal>
                        </div>
                    </div>
                </div>
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
                            <p className="mt-6 text-balance text-base leading-relaxed text-ink/60">
                                Too many young people are navigating life without proper nutrition, mental health resources, or stable housing. Together, we&apos;re creating pathways to stability and well-being.
                            </p>
                        </Reveal>

                        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <Reveal delay={0.08}>
                                <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                                    <p className="font-serif text-2xl font-normal tracking-tight text-sky sm:text-3xl">
                                        50,000+
                                    </p>
                                    <p className="mt-3 text-base font-medium text-ink/60">
                                        Vulnerable Youth / Young Adults
                                    </p>
                                </div>
                            </Reveal>
                            <Reveal delay={0.12}>
                                <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                                    <p className="font-serif text-2xl font-normal tracking-tight text-sun sm:text-3xl">
                                        250+
                                    </p>
                                    <p className="mt-3 text-base font-medium text-ink/60">
                                        Company Partners
                                    </p>
                                </div>
                            </Reveal>
                            <Reveal delay={0.16}>
                                <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                                    <p className="font-serif text-2xl font-normal tracking-tight text-slate-600 sm:text-3xl">
                                        100+
                                    </p>
                                    <p className="mt-3 text-base font-medium text-ink/60">
                                        &ldquo;Superhero&rdquo; Social Service Partners
                                    </p>
                                </div>
                            </Reveal>
                            <Reveal delay={0.2}>
                                <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                                    <p className="font-serif text-2xl font-normal tracking-tight text-indigo-500 sm:text-3xl">
                                        $1 million+
                                    </p>
                                    <p className="mt-3 text-base font-medium text-ink/60">
                                        Groceries
                                    </p>
                                </div>
                            </Reveal>
                        </div>

                        {/* Social Service Partner spotlight — Project Kinship */}
                        <Reveal delay={0.24}>
                            <div className="relative mx-auto mt-12 aspect-[4/3] max-w-4xl overflow-hidden rounded-2xl shadow-lg">
                                <Image
                                    src="/images/shared/project-kinship-teen-health.jpeg"
                                    alt="Teen Health partnership with Project Kinship social service partner team"
                                    fill
                                    className="object-cover object-center"
                                    sizes="(max-width: 768px) 100vw, 896px"
                                    quality={85}
                                />
                                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                                    <span className="flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
                                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        Project Kinship, Santa Ana, CA
                                    </span>
                                </div>
                            </div>
                        </Reveal>
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

                        {/* ─── Youth Homelessness — colored accent columns ─── */}
                        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {/* National column — blue accent */}
                            <Reveal delay={0.08}>
                                <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                                    <div className="px-6 py-3" style={{ borderBottom: "3px solid #2E9DF7" }}>
                                        <p className="text-xs font-semibold uppercase tracking-widest text-sky">National</p>
                                    </div>
                                    <div className="border-b border-border p-8">
                                        <p className="font-serif text-2xl font-normal tracking-tight text-ink sm:text-3xl">4.2 million</p>
                                        <p className="mt-3 text-sm leading-relaxed text-ink/60">youth ages 13–25 experience homelessness each year</p>
                                    </div>
                                    <div className="p-8">
                                        <p className="font-serif text-2xl font-normal tracking-tight text-ink sm:text-3xl">34,700</p>
                                        <p className="mt-3 text-sm leading-relaxed text-ink/60">unaccompanied youth under age 25 experience homelessness on any given night</p>
                                    </div>
                                </div>
                            </Reveal>
                            {/* California column — orange accent */}
                            <Reveal delay={0.12}>
                                <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                                    <div className="px-6 py-3" style={{ borderBottom: "3px solid #FF8005" }}>
                                        <p className="text-xs font-semibold uppercase tracking-widest text-sun">California</p>
                                    </div>
                                    <div className="border-b border-border p-8">
                                        <p className="font-serif text-2xl font-normal tracking-tight text-ink sm:text-3xl">200,000</p>
                                        <p className="mt-3 text-sm leading-relaxed text-ink/60">youth ages 12–24 experience homelessness each year</p>
                                    </div>
                                    <div className="p-8">
                                        <p className="font-serif text-2xl font-normal tracking-tight text-ink sm:text-3xl">9,900</p>
                                        <p className="mt-3 text-sm leading-relaxed text-ink/60">unaccompanied youth under age 25 experience homelessness on any given night</p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        {/* Divider: Foster Care Population */}
                        <Reveal delay={0.14}>
                            <div className="my-10 flex items-center gap-4">
                                <div className="h-px flex-1 bg-border" />
                                <p className="text-xs font-semibold uppercase tracking-widest text-ink/40">
                                    Foster Care Population
                                </p>
                                <div className="h-px flex-1 bg-border" />
                            </div>
                        </Reveal>

                        {/* Foster Care Population — tinted number backgrounds */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <Reveal delay={0.18}>
                                <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-sm">
                                    <span aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center select-none font-sans text-[7rem] font-bold leading-none text-sky/[0.06] sm:text-[8rem]">
                                        376K
                                    </span>
                                    <div className="relative">
                                        <p className="font-serif text-2xl font-normal tracking-tight text-ink sm:text-3xl">
                                            376,900
                                        </p>
                                        <p className="mt-4 text-sm leading-relaxed text-ink/60">
                                            individuals in foster care in the US
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                            <Reveal delay={0.22}>
                                <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-sm">
                                    <span aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center select-none font-sans text-[7rem] font-bold leading-none text-sun/[0.06] sm:text-[8rem]">
                                        44K
                                    </span>
                                    <div className="relative">
                                        <p className="font-serif text-2xl font-normal tracking-tight text-ink sm:text-3xl">
                                            44,400
                                        </p>
                                        <p className="mt-4 text-sm leading-relaxed text-ink/60">
                                            individuals in foster care in California alone
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        {/* Divider: Foster Care Outcomes */}
                        <Reveal delay={0.26}>
                            <div className="my-10 flex items-center gap-4">
                                <div className="h-px flex-1 bg-border" />
                                <p className="text-xs font-semibold uppercase tracking-widest text-ink/40">
                                    Foster Care Outcomes
                                </p>
                                <div className="h-px flex-1 bg-border" />
                            </div>
                        </Reveal>

                        {/* 3-column outcomes grid with icons */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                            <Reveal delay={0.3}>
                                <div className="h-full rounded-2xl border border-border bg-white p-8 text-center shadow-sm">
                                    <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sun/10">
                                        <svg className="h-5 w-5 text-sun" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                        </svg>
                                    </div>
                                    <p className="font-serif text-2xl font-normal tracking-tight text-ink sm:text-3xl">
                                        40%
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-ink/60">
                                        of foster youth will be homeless or incarcerated within 3 years of leaving the system
                                    </p>
                                </div>
                            </Reveal>
                            <Reveal delay={0.34}>
                                <div className="h-full rounded-2xl border border-border bg-white p-8 text-center shadow-sm">
                                    <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sky/10">
                                        <svg className="h-5 w-5 text-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                        </svg>
                                    </div>
                                    <p className="font-serif text-2xl font-normal tracking-tight text-ink sm:text-3xl">
                                        27%
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-ink/60">
                                        of youth transitioning out of foster care in California have been incarcerated
                                    </p>
                                </div>
                            </Reveal>
                            <Reveal delay={0.38}>
                                <div className="h-full rounded-2xl border border-border bg-white p-8 text-center shadow-sm">
                                    <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-mint/20">
                                        <svg className="h-5 w-5 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                        </svg>
                                    </div>
                                    <p className="font-serif text-2xl font-normal tracking-tight text-ink sm:text-3xl">
                                        14%
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-ink/60">
                                        of youth transitioning out of foster care in California have experienced homelessness
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
                    <div className="mx-auto max-w-4xl">
                        <Reveal>
                            <div className="mb-4 h-1 w-10 rounded-full bg-sun" />
                            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                                Research &amp; Evidence Based
                            </h2>
                        </Reveal>
                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            <Reveal delay={0.04}>
                                <div className="overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4" }}>
                                    <Image
                                        src="/images/shared/girl-sunset.jpeg"
                                        alt="Young woman at sunset"
                                        width={600}
                                        height={800}
                                        className="h-full w-full object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </Reveal>
                            <Reveal delay={0.08}>
                                <div className="overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4" }}>
                                    <Image
                                        src="/images/shared/young-man-supplements-3.jpg"
                                        alt="Young man with supplements"
                                        width={600}
                                        height={800}
                                        className="h-full w-full object-cover object-top"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </Reveal>
                        </div>
                        <Reveal delay={0.08}>
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
                                Mental wellness and homelessness/violence prevention start with meeting basic biological needs.
                            </p>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* ─── EVERY TEEN DESERVES ─── */}
            <section className="bg-mist py-16 sm:py-20">
                <Container>
                    <div className="mx-auto max-w-4xl">
                        <Reveal>
                            <div className="mb-4 h-1 w-10 rounded-full bg-sun" />
                            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                                Every Young Person Deserves a Brain That Can Keep Up With Their Dreams
                            </h2>
                        </Reveal>

                        <Reveal delay={0.06}>
                            <div className="relative mt-8 max-w-[52rem] overflow-hidden rounded-2xl" style={{ aspectRatio: "16/9" }}>
                                <Image
                                    src="/images/shared/elementary-kids.jpeg"
                                    alt="Elementary school kids at Mission Meadows Elementary School, Oceanside, CA"
                                    width={1200}
                                    height={675}
                                    className="h-full w-full object-cover"
                                    sizes="(max-width: 896px) 100vw, 896px"
                                />
                                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                                    <span className="flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
                                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        Mission Meadows Elementary School, Oceanside, CA
                                    </span>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.1}>
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


            {/* ─── CTA ─── */}
            <Container className="py-16 sm:py-20">
                <Reveal>
                    <div className="rounded-3xl p-8 text-center sm:p-10" style={{ backgroundColor: '#E5EEFB' }}>
                        <h2 className="mx-auto max-w-2xl font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                            Help Us Expand Our Impact
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink/70">
                            Every contribution helps us reach more young people with the
                            essentials they need to stabilize and thrive.
                        </p>
                        <div className="mt-8 flex flex-row items-center justify-center gap-3">
                            <Button href="https://www.classy.org/give/665776/#!/donation/checkout" variant="primary" style={{ color: 'white' }}>
                                Donate
                            </Button>
                            <Button
                                href="/get-involved"
                                variant="ghost"
                                className="text-ink hover:bg-ink/10"
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
