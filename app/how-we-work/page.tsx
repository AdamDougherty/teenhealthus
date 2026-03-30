import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export const metadata = {
    title: "How We Work",
};

export default function HowWeWorkPage() {
    return (
        <div className="bg-transparent">
            {/* ─── HERO ─── */}
            <section className="relative overflow-hidden" style={{ minHeight: "70vh", background: "#2563C8" }}>
                <div className="absolute inset-0 bg-white/[0.04]" />

                {/* Text overlay */}
                <div className="relative z-10 pl-6 sm:pl-10 lg:pl-16 py-16 min-h-[70vh] flex items-center">
                    <div className="max-w-3xl">
                        <Reveal>
                            <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#FDCF6A" }}>
                                How We Work
                            </p>
                            <h1 className="mt-4 font-serif text-3xl font-normal tracking-tight text-white sm:text-4xl lg:text-5xl" style={{ lineHeight: 1.1 }}>
                                Fueling Youth Well-Being<br />and Stability
                            </h1>
                        </Reveal>
                        <Reveal delay={0.15}>
                            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white">
                                From food rescue to essential kits to mental health support, our programs<br />address the whole person — meeting youth where they are and building<br />toward lasting stability.
                            </p>
                        </Reveal>
                    </div>
                </div>
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
                            <div className="flex h-full flex-col rounded-2xl border border-border bg-mist p-8 text-center">
                                <span className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-sun text-sm font-bold text-white">
                                    1
                                </span>
                                <h3 className="mt-5 font-serif text-xl font-normal tracking-tight text-ink">
                                    Nutrition as Foundation
                                </h3>
                                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/80">
                                    We provide essential vitamins and healthy food that support brain
                                    function, emotional regulation, and stress management — helping
                                    youth engage in care, make safer decisions, and resist high-risk
                                    pathways.
                                </p>
                                <div className="mx-auto mt-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sky/10">
                                    <svg className="h-7 w-7 text-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4-4-8-7.5-8-11a4 4 0 0 1 8 0 4 4 0 0 1 8 0c0 3.5-4 7-8 11Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v5M10 13h4" />
                                    </svg>
                                </div>
                            </div>
                        </Reveal>

                        {/* Pillar 2 */}
                        <Reveal delay={0.16}>
                            <div className="flex h-full flex-col rounded-2xl border border-border bg-mist p-8 text-center">
                                <span className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-sun text-sm font-bold text-white">
                                    2
                                </span>
                                <h3 className="mt-5 font-serif text-xl font-normal tracking-tight text-ink">
                                    Dignity &amp; Immediate Stability
                                </h3>
                                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/80">
                                    Hygiene kits and basic essentials reduce daily stress and restore
                                    dignity during moments of transition. Meeting core needs builds
                                    stability when youth are most vulnerable to exploitation,
                                    violence, or gang exposure.
                                </p>
                                <div className="mx-auto mt-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sky/10">
                                    <svg className="h-7 w-7 text-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                    </svg>
                                </div>
                            </div>
                        </Reveal>

                        {/* Pillar 3 */}
                        <Reveal delay={0.24}>
                            <div className="flex h-full flex-col rounded-2xl border border-border bg-mist p-8 text-center">
                                <span className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-sun text-sm font-bold text-white">
                                    3
                                </span>
                                <h3 className="mt-5 font-serif text-xl font-normal tracking-tight text-ink">
                                    Connection Before Crisis
                                </h3>
                                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/80">
                                    We show up at shelters, transitional housing, and points of
                                    system exit to connect youth to care and community. By
                                    intervening early, we replace isolation with support—before
                                    the street becomes the safety net.
                                </p>
                                <div className="mx-auto mt-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sky/10">
                                    <svg className="h-7 w-7 text-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* ─── IMAGE BREAK ─── */}
            <section className="py-12 sm:py-16">
                <Container>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <Reveal delay={0.08}>
                            <div className="relative overflow-hidden rounded-2xl" style={{ height: "420px" }}>
                                <Image
                                    src="/images/shared/young-people-supplements-opt.jpeg"
                                    alt="Young people receiving supplements"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                />
                            </div>
                        </Reveal>
                        <Reveal delay={0.16}>
                            <div className="relative overflow-hidden rounded-2xl" style={{ height: "420px" }}>
                                <Image
                                    src="/images/shared/young-man-supplements-2-opt.jpg"
                                    alt="Young man with supplements"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                />
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
                                            Increased utilization of mental health services and reduced rates of crisis-level psychological distress
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
