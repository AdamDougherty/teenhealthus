import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export const metadata = {
    title: "Transparent Monthly Charity Donations",
    description:
        "Set up a transparent recurring donation to a direct-impact youth non-profit serving Southern California. 100% of every dollar funds nutrition and hygiene essentials for vulnerable youth.",
};

const impactTiers = [
    {
        amount: "$500",
        value: 500,
        label: "/month",
        theme: "Sustaining Partnership",
        impact:
            "Sustains a full month of dignified care for an entire partner agency — reaching dozens of youth, consistently.",
    },
    {
        amount: "$100",
        value: 100,
        label: "/month",
        theme: "Predictable Stability",
        impact: "Fuels continuous monthly distribution to a partner agency serving Southern California youth.",
    },
    {
        amount: "$50",
        value: 50,
        label: "/month",
        theme: "Direct Impact",
        impact: "Delivers a reliable month of nutrition and hygiene essentials to two youth in need.",
    },
    {
        amount: "$25",
        value: 25,
        label: "/month",
        theme: "Fuel Continuous Care",
        impact: "Assembles and ships a monthly kit of nutrition and hygiene dignity to one youth.",
    },
];

const stats = [
    { value: "5000+", label: "Youth supported annually" },
    { value: "250+", label: "Brand partners" },
    { value: "100+", label: "Agency partners" },
    { value: "100%", label: "Goes to the mission" },
];

const reasons = [
    {
        title: "Consistent supply",
        description:
            "Monthly gifts let us plan ahead — pre-ordering products, scheduling shipments, and keeping shelves stocked at partner agencies year-round.",
    },
    {
        title: "Deeper partnerships",
        description:
            "Reliable funding means we can commit to long-term distribution partnerships with agencies serving the most vulnerable youth.",
    },
    {
        title: "Faster response",
        description:
            "When urgent needs arise — a new shelter opening, a disaster, a surge in demand — monthly funds let us move immediately.",
    },
];

const testimonials = [
    {
        quote:
            "I switched my one-time donations to monthly and it just feels better knowing kits are going out every single month because of my support.",
        name: "Monthly supporter",
    },
    {
        quote:
            "Teen Health showed me exactly what my $25 a month does. It's not abstract — it's a real kit going to a real kid.",
        name: "Monthly supporter",
    },
];

const faqs = [
    {
        q: "Why give monthly instead of a one-time donation?",
        a: "Monthly gifts let us plan ahead — pre-ordering products, scheduling shipments, and keeping shelves stocked at partner agencies across Southern California year-round. Reliable funding also means we can commit to long-term distribution partnerships and respond faster when urgent needs arise.",
    },
    {
        q: "How does Teen Health send 100% of every dollar to the mission?",
        a: "Our 100% model is sustained by corporate brand partners who donate inventory and cover operational overhead. Because partners absorb those costs, every dollar donors give goes directly into the nutrition and hygiene essentials that fill our monthly kits for youth.",
    },
    {
        q: "Can I cancel or change my monthly amount?",
        a: "Yes — you can cancel or change your monthly amount anytime, with no fees and no commitments. Sign in to your Zeffy donor account with the email address you used to give, and from the My transactions tab you can adjust your amount, update your card, or cancel your renewal in a few clicks.",
    },
    {
        q: "Where does my monthly donation go?",
        a: "Funds go toward food, hydration, and personal care products; assembling them into kits; and distributing through 100+ partner agencies serving vulnerable youth from Skid Row in Los Angeles to downtown San Diego.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
    })),
};

export default function GiveMonthlyPage() {
    return (
        <div className="bg-transparent">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {/* Hero */}
            <section className="relative min-h-[50vh] overflow-hidden sm:min-h-[70vh]" style={{ backgroundColor: '#111' }}>
                <div className="absolute inset-0">
                    <Image
                        src="/images/shared/give-monthly-hero-banner-powerpaks.jpeg"
                        alt="Donated nutritious snacks from brand partners being prepared for Teen Health monthly essentials kits"
                        fill
                        priority
                        className="object-cover object-[center_65%] opacity-80"
                        sizes="100vw"
                    />
                </div>
                {/* Dark bottom gradient — no blue tint, just darkens behind the text */}
                <div className="absolute bottom-4 right-4 z-10 sm:bottom-6 sm:right-6">
                    <span className="flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        Vista Teen Outreach, Vista, CA
                    </span>
                </div>
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to left, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)",
                    }}
                />
                <div className="absolute inset-0 z-10 flex items-center justify-end px-6 sm:px-10 lg:px-16">
                    <div className="max-w-lg text-right" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>
                        <Reveal>
                            <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#FDCF6A" }}>
                                Give monthly
                            </p>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h1 className="mt-6 font-serif text-3xl font-normal tracking-tight text-white sm:text-4xl lg:text-5xl" style={{ lineHeight: 1.0 }}>
                                Fuel Continuous Support{" "}
                                <span style={{ color: "#FFA10A" }}>for <span className="whitespace-nowrap">Vulnerable Youth</span></span>
                            </h1>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <div className="mt-10">
                                <div className="inline-flex flex-col items-center">
                                    <Button
                                        href="/donate?monthly=1"
                                        variant="primary"
                                        style={{ backgroundColor: '#FF8005', color: 'white' }}
                                    >
                                        Join the Monthly Giving Community
                                    </Button>
                                    <p className="mt-3 text-xs font-medium text-white/80">
                                        Cancel or change your amount anytime.
                                    </p>
                                    <p className="mt-1 text-xs font-medium text-white/60">
                                        Secure checkout via Zeffy &amp; Stripe
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Impact stats bar */}
            <section className="border-b border-border bg-white/60 backdrop-blur">
                <Container>
                    <div className="grid grid-cols-2 gap-6 py-10 sm:py-12 md:grid-cols-4">
                        {stats.map((stat, i) => (
                            <Reveal key={stat.label} delay={i * 0.08}>
                                <div className="text-center">
                                    <div className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                                        {stat.value}
                                    </div>
                                    <div className="mt-1 text-sm font-semibold text-ink/60">
                                        {stat.label}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <p className="pb-8 text-center text-xs leading-relaxed text-ink/50 sm:pb-10">
                        Our 100% model is sustained by corporate brand partners who donate inventory and cover operational overhead, so every dollar you give goes directly into kits for youth.
                    </p>
                </Container>
            </section>

            {/* Why monthly */}
            <Container className="py-16 sm:py-20">
                <Reveal>
                    <div>
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
                            Why monthly?
                        </p>
                        <h2 className="text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                            Why sustainable, recurring giving changes the game
                        </h2>
                        <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/70 sm:text-lg">
                            One-time donations help in the moment. Recurring, direct-impact monthly gifts keep essentials kits moving to vulnerable youth across Southern California — from Skid Row in Los Angeles to downtown San Diego — consistently, reliably, and with dignity.
                        </p>
                    </div>
                </Reveal>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {reasons.map((reason, i) => (
                        <Reveal key={reason.title} delay={i * 0.08}>
                            <Card className="h-full">
                                <h3 className="text-xl font-normal tracking-tight text-ink">
                                    {reason.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                                    {reason.description}
                                </p>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </Container>

            {/* Choose your impact — donation tiers */}
            <section style={{ backgroundColor: '#FAF3EB' }}>
                <Container className="py-16 sm:py-20">
                    <Reveal>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/50">
                                Pick your impact
                            </p>
                            <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                                100% of every dollar directly funds youth essentials
                            </h2>
                            <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/70 sm:text-lg">
                                Pick a monthly amount that works for you. Every gift, no matter the size, goes directly toward assembling, shipping, and distributing kits to youth who need them.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {impactTiers.map((tier, i) => (
                            <Reveal key={tier.amount} delay={i * 0.08} className="h-full">
                                <a
                                    href={`/donate?monthly=1&amount=${tier.value}`}
                                    className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white/60 p-6 transition-all hover:-translate-y-1 hover:border-ink/20 hover:shadow-lg"
                                >
                                    <div className="flex items-baseline gap-1">
                                        <span className="font-serif text-3xl font-normal tracking-tight text-ink">
                                            {tier.amount}
                                        </span>
                                        <span className="text-sm text-ink/50">{tier.label}</span>
                                    </div>
                                    <div className="mt-3 text-sm font-semibold text-ink">
                                        {tier.theme}
                                    </div>
                                    <p className="mt-1.5 text-sm leading-relaxed text-ink/70">
                                        {tier.impact}
                                    </p>
                                    <div className="mt-4 text-sm font-semibold opacity-0 transition-opacity group-hover:opacity-100" style={{ color: '#FF8005' }}>
                                        Give {tier.amount}/mo →
                                    </div>
                                </a>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={0.35}>
                        <p className="mt-5 text-center text-xs font-medium text-ink/50">
                            Cancel or change your amount anytime. No commitments.
                        </p>
                    </Reveal>

                    <Reveal delay={0.4}>
                        <div className="mt-8 text-center">
                            <Button
                                href="/donate?monthly=1"
                                variant="primary"
                                style={{ backgroundColor: '#FF8005', color: 'white' }}
                            >
                                Join the Monthly Giving Community
                            </Button>
                            <p className="mt-3 text-xs font-medium text-ink/50">
                                Secure checkout via Zeffy &amp; Stripe
                            </p>
                        </div>
                    </Reveal>
                </Container>
            </section>

            {/* How it works */}
            <Container className="py-16 sm:py-20">
                <Reveal>
                    <SectionHeading
                        eyebrow="How it works"
                        title="How your gift reaches youth"
                    />
                </Reveal>

                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {[
                        {
                            step: "01",
                            title: "You give monthly",
                            desc: "Set up a recurring gift through our secure donation platform. Choose any amount.",
                        },
                        {
                            step: "02",
                            title: "We pack kits",
                            desc: "Your funds go directly toward sourcing healthy food, hydration, and personal care products — then assembling them into essentials kits.",
                        },
                        {
                            step: "03",
                            title: "Youth receive essentials",
                            desc: "Kits are distributed through our 100+ partner agencies across Southern California to vulnerable youth and young adults who need them most.",
                        },
                    ].map((item, i) => (
                        <Reveal key={item.step} delay={i * 0.1}>
                            <div>
                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky/10 font-serif text-sm font-normal text-sky">
                                    {item.step}
                                </div>
                                <h3 className="mt-4 text-xl font-normal tracking-tight text-ink">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                                    {item.desc}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Container>

            {/* Photo break */}
            <Container className="py-10">
                <Reveal>
                    <div className="relative overflow-hidden rounded-3xl" style={{ aspectRatio: "3/2" }}>
                        <Image
                            src="/images/shared/hopics-gift-bags.jpeg"
                            alt="Gift bags lined up at HOPICS community center"
                            fill
                            className="object-cover" style={{ objectPosition: "center 85%" }}
                        />
                    </div>
                    <div className="mt-4 flex justify-center">
                        <span className="flex max-w-full items-center gap-1.5 rounded-full bg-black/5 px-3 py-1 text-center text-xs font-medium tracking-wide text-ink/50">
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            HOPICS NAVIG8 Center, Los Angeles, CA
                        </span>
                    </div>
                </Reveal>
            </Container>

            {/* Testimonials */}
            <section className="border-y border-border bg-white/40">
                <Container className="py-16 sm:py-20">
                    <Reveal>
                        <SectionHeading
                            eyebrow="From our supporters"
                            title="Why people give monthly"
                        />
                    </Reveal>

                    <div className="mt-12 grid gap-8 md:grid-cols-2">
                        {testimonials.map((t, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <Card className="h-full">
                                    <blockquote className="text-base leading-relaxed text-ink/80">
                                        &ldquo;{t.quote}&rdquo;
                                    </blockquote>
                                    <div className="mt-5 text-sm font-semibold text-ink/60">
                                        — {t.name}
                                    </div>
                                </Card>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* FAQ */}
            <section className="border-y border-border bg-white/40">
                <Container className="py-16 sm:py-20">
                    <Reveal>
                        <SectionHeading
                            eyebrow="Common questions"
                            title="What monthly donors ask"
                        />
                    </Reveal>

                    <div className="mt-12 space-y-3">
                        {faqs.map((faq, i) => (
                            <Reveal key={faq.q} delay={i * 0.05}>
                                <details className="group rounded-2xl border border-ink/10 bg-white/60 p-5 transition-colors open:border-ink/20 hover:border-ink/20">
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink">
                                        <span>{faq.q}</span>
                                        <svg
                                            className="h-5 w-5 shrink-0 text-ink/40 transition-transform group-open:rotate-180"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            aria-hidden
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </summary>
                                    <p className="mt-3 text-sm leading-relaxed text-ink/70">
                                        {faq.a}
                                    </p>
                                </details>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Final CTA */}
            <Container className="py-16 sm:py-20">
                <Reveal>
                    <div className="rounded-3xl p-8 text-center sm:p-10" style={{ backgroundColor: '#E5EEFB' }}>
                        <h2 className="mx-auto max-w-2xl font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                            Essentials shouldn&rsquo;t be a luxury.
                            <br className="hidden sm:inline" />{" "}
                            <span>Help us change that.</span>
                        </h2>
                        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-ink/70">
                            Join the community of monthly supporters keeping essentials kits flowing to youth who need them — every single month.
                        </p>
                        <div className="mt-8">
                            <Button
                                href="/donate?monthly=1"
                                variant="primary"
                                style={{ backgroundColor: '#FF8005', color: 'white' }}
                            >
                                Join the Monthly Giving Community
                            </Button>
                            <p className="mt-3 text-xs font-medium text-ink/50">
                                Cancel or change your amount anytime. No commitments.
                            </p>
                            <p className="mt-1 text-xs font-medium text-ink/40">
                                Secure checkout via Zeffy &amp; Stripe
                            </p>
                        </div>
                    </div>
                </Reveal>
            </Container>
        </div>
    );
}
