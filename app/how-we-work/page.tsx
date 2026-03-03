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
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sun text-sm font-bold text-white">
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
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sun text-sm font-bold text-white">
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
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sun text-sm font-bold text-white">
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

            {/* ─── PRODUCT DISTRIBUTION MODEL ─── */}
            <section className="bg-mist py-16 sm:py-20">
                <Container>
                    <div className="mx-auto max-w-4xl text-center">
                        <Reveal>
                            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-sun" />
                            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                                Product Distribution Model
                            </h2>
                            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
                                A Smarter, Faster Way to Get Health Essentials to&nbsp;Youth
                            </p>
                        </Reveal>
                    </div>

                    {/* Desktop table */}
                    <Reveal delay={0.1}>
                        <div className="mt-14 hidden overflow-hidden rounded-2xl border border-border bg-white shadow-sm md:block">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="border-b border-border bg-ink">
                                        <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-white/60" />
                                        <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-white">
                                            The Dignity Kit Program
                                        </th>
                                        <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-white">
                                            Food Security &amp; Monthly Nutrition Projects
                                        </th>
                                        <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-white">
                                            Mental Health &amp; Care Navigation
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-border">
                                        <td className="px-6 py-5 font-semibold text-ink">Who It Serves</td>
                                        <td className="px-6 py-5 text-ink/80">
                                            Youth and young adults (ages 13–29) exiting foster care or juvenile detention
                                        </td>
                                        <td className="px-6 py-5 text-ink/80">
                                            High-need households in Orange, San Diego, and Los Angeles Counties; expanding to Fresno and the Bay Area
                                        </td>
                                        <td className="px-6 py-5 text-ink/80">
                                            Transition-age youth (TAY) dealing with anxiety, depression, or post-system trauma
                                        </td>
                                    </tr>
                                    <tr className="border-b border-border bg-mist/50">
                                        <td className="px-6 py-5 font-semibold text-ink">Problem Addressed</td>
                                        <td className="px-6 py-5 text-ink/80">
                                            The &ldquo;aging out&rdquo; crisis, where youth are often released from systems with nothing but their belongings in a trash bag
                                        </td>
                                        <td className="px-6 py-5 text-ink/80">
                                            Systemic food insecurity and &ldquo;nutrition gaps&rdquo; that prevent youth from succeeding in school or work
                                        </td>
                                        <td className="px-6 py-5 text-ink/80">
                                            Fragmented care systems that make mental health support difficult to access for unhoused or foster youth
                                        </td>
                                    </tr>
                                    <tr className="border-b border-border">
                                        <td className="px-6 py-5 font-semibold text-ink">How It Works</td>
                                        <td className="px-6 py-5 text-ink/80">
                                            We partner with corporate vendors to kit backpacks filled with healthy food, personal care items, and clothing
                                        </td>
                                        <td className="px-6 py-5 text-ink/80">
                                            Ongoing monthly projects deliver bulk healthy food and supplements to community-based distribution hubs
                                        </td>
                                        <td className="px-6 py-5 text-ink/80">
                                            We use our distribution touchpoints to provide mental health education and facilitate direct &ldquo;warm hand-offs&rdquo; to clinical care partners
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-5 font-semibold text-ink">Intended Outcomes</td>
                                        <td className="px-6 py-5 text-ink/80">
                                            Immediate reduction in material hardship and an increased sense of self-worth during critical life transitions
                                        </td>
                                        <td className="px-6 py-5 text-ink/80">
                                            Consistent access to nutritious meals and stabilized physical health for 13–29 year-olds
                                        </td>
                                        <td className="px-6 py-5 text-ink/80">
                                            Increased utilization of mental health services and reduced rates of crisis-level psychological events
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Reveal>

                    {/* Mobile cards */}
                    <div className="mt-14 space-y-8 md:hidden">
                        {/* Card 1 */}
                        <Reveal delay={0.08}>
                            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                                <h3 className="font-serif text-lg font-normal tracking-tight text-ink">
                                    The Dignity Kit Program
                                </h3>
                                <dl className="mt-4 space-y-4 text-sm">
                                    <div>
                                        <dt className="font-semibold text-ink">Who It Serves</dt>
                                        <dd className="mt-1 text-ink/80">Youth and young adults (ages 13–29) exiting foster care or juvenile detention</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-ink">Problem Addressed</dt>
                                        <dd className="mt-1 text-ink/80">The &ldquo;aging out&rdquo; crisis, where youth are often released from systems with nothing but their belongings in a trash bag</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-ink">How It Works</dt>
                                        <dd className="mt-1 text-ink/80">We partner with corporate vendors to kit backpacks filled with healthy food, personal care items, and clothing</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-ink">Intended Outcomes</dt>
                                        <dd className="mt-1 text-ink/80">Immediate reduction in material hardship and an increased sense of self-worth during critical life transitions</dd>
                                    </div>
                                </dl>
                            </div>
                        </Reveal>

                        {/* Card 2 */}
                        <Reveal delay={0.16}>
                            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                                <h3 className="font-serif text-lg font-normal tracking-tight text-ink">
                                    Food Security &amp; Monthly Nutrition Projects
                                </h3>
                                <dl className="mt-4 space-y-4 text-sm">
                                    <div>
                                        <dt className="font-semibold text-ink">Who It Serves</dt>
                                        <dd className="mt-1 text-ink/80">High-need households in Orange, San Diego, and Los Angeles Counties; expanding to Fresno and the Bay Area</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-ink">Problem Addressed</dt>
                                        <dd className="mt-1 text-ink/80">Systemic food insecurity and &ldquo;nutrition gaps&rdquo; that prevent youth from succeeding in school or work</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-ink">How It Works</dt>
                                        <dd className="mt-1 text-ink/80">Ongoing monthly projects deliver bulk healthy food and supplements to community-based distribution hubs</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-ink">Intended Outcomes</dt>
                                        <dd className="mt-1 text-ink/80">Consistent access to nutritious meals and stabilized physical health for 13–29 year-olds</dd>
                                    </div>
                                </dl>
                            </div>
                        </Reveal>

                        {/* Card 3 */}
                        <Reveal delay={0.24}>
                            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                                <h3 className="font-serif text-lg font-normal tracking-tight text-ink">
                                    Mental Health &amp; Care Navigation
                                </h3>
                                <dl className="mt-4 space-y-4 text-sm">
                                    <div>
                                        <dt className="font-semibold text-ink">Who It Serves</dt>
                                        <dd className="mt-1 text-ink/80">Transition-age youth (TAY) dealing with anxiety, depression, or post-system trauma</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-ink">Problem Addressed</dt>
                                        <dd className="mt-1 text-ink/80">Fragmented care systems that make mental health support difficult to access for unhoused or foster youth</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-ink">How It Works</dt>
                                        <dd className="mt-1 text-ink/80">We use our distribution touchpoints to provide mental health education and facilitate direct &ldquo;warm hand-offs&rdquo; to clinical care partners</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-ink">Intended Outcomes</dt>
                                        <dd className="mt-1 text-ink/80">Increased utilization of mental health services and reduced rates of crisis-level psychological distress</dd>
                                    </div>
                                </dl>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </section>
        </div>
    );
}
