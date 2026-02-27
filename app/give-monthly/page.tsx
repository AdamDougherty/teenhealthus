import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export const metadata = {
    title: "Give Monthly — Teen Health",
    description:
        "Your monthly gift keeps essentials kits moving to vulnerable youth year-round. Join the community of monthly supporters powering Teen Health.",
};

const impactTiers = [
    {
        amount: "$15",
        label: "/month",
        impact: "Keeps hygiene essentials stocked for one youth every month.",
    },
    {
        amount: "$25",
        label: "/month",
        impact: "Assembles and ships a full essentials kit every month.",
        featured: true,
    },
    {
        amount: "$50",
        label: "/month",
        impact: "Covers kit assembly, shipping, and partner coordination monthly.",
    },
    {
        amount: "$100",
        label: "/month",
        impact:
            "Funds bulk distribution to an entire partner agency every month.",
    },
];

const stats = [
    { value: "800+", label: "Kits distributed" },
    { value: "250+", label: "Brand partners" },
    { value: "30+", label: "Agency partners" },
    { value: "100%", label: "Goes to the mission" },
];

const reasons = [
    {
        icon: "📦",
        title: "Consistent supply",
        description:
            "Monthly gifts let us plan ahead — pre-ordering products, scheduling shipments, and keeping shelves stocked at partner agencies year-round.",
    },
    {
        icon: "🤝",
        title: "Deeper partnerships",
        description:
            "Reliable funding means we can commit to long-term distribution partnerships with agencies serving the most vulnerable youth.",
    },
    {
        icon: "⚡",
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

export default function GiveMonthlyPage() {
    return (
        <div className="bg-transparent">
            {/* Hero */}
            <section className="relative overflow-hidden bg-ink">
                <div className="absolute inset-0">
                    <Image
                        src="/images/events/IMG_4150.jpeg"
                        alt="Volunteers preparing essentials kits"
                        fill
                        priority
                        className="object-cover opacity-30"
                        sizes="100vw"
                    />
                </div>
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to top, rgba(35,31,32,0.95) 0%, rgba(35,31,32,0.6) 50%, rgba(35,31,32,0.4) 100%)",
                    }}
                />
                <Container className="relative z-10 pb-20 pt-28 sm:pb-28 sm:pt-36">
                    <Reveal>
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/50">
                            Monthly giving
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="mt-5 max-w-3xl font-serif text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
                            Give essentials to youth{" "}
                            <span className="hero-highlight">every month</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                            Healthy food, hydration, and personal care are not one-time needs.
                            Your monthly gift keeps essentials kits moving to vulnerable youth
                            and young adults — consistently, reliably, and with dignity.
                        </p>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <div className="mt-8">
                            <Button
                                href="https://www.classy.org/give/665776/#!/donation/checkout"
                                variant="primary"
                            >
                                Start giving monthly
                            </Button>
                        </div>
                    </Reveal>
                </Container>
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
                </Container>
            </section>

            {/* Why monthly */}
            <Container className="py-16 sm:py-20">
                <Reveal>
                    <SectionHeading
                        eyebrow="Why monthly"
                        title="Recurring gifts change the game"
                        description="One-time donations help in the moment. Monthly gifts build the foundation for sustained, scalable impact — month after month."
                    />
                </Reveal>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {reasons.map((reason, i) => (
                        <Reveal key={reason.title} delay={i * 0.08}>
                            <Card className="h-full">
                                <div className="text-3xl">{reason.icon}</div>
                                <h3 className="mt-4 text-xl font-normal tracking-tight text-ink">
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
            <section className="bg-ink text-white">
                <Container className="py-16 sm:py-20">
                    <Reveal>
                        <div className="max-w-2xl">
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/50">
                                Choose your impact
                            </p>
                            <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight sm:text-4xl">
                                Every dollar funds essentials
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
                                Pick a monthly amount that works for you. Every gift — no matter
                                the size — goes directly toward assembling, shipping, and
                                distributing kits to youth who need them.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {impactTiers.map((tier, i) => (
                            <Reveal key={tier.amount} delay={i * 0.08}>
                                <a
                                    href="https://www.classy.org/give/665776/#!/donation/checkout"
                                    className={`group block rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-lg ${tier.featured
                                            ? "border-sun bg-white/10 shadow-md"
                                            : "border-white/10 bg-white/5 hover:border-white/20"
                                        }`}
                                >
                                    {tier.featured && (
                                        <div className="mb-3 inline-block rounded-full bg-sun px-3 py-0.5 text-xs font-bold text-ink">
                                            Most popular
                                        </div>
                                    )}
                                    <div className="flex items-baseline gap-1">
                                        <span className="font-serif text-3xl font-normal tracking-tight">
                                            {tier.amount}
                                        </span>
                                        <span className="text-sm text-white/50">{tier.label}</span>
                                    </div>
                                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                                        {tier.impact}
                                    </p>
                                    <div className="mt-4 text-sm font-semibold text-sun opacity-0 transition-opacity group-hover:opacity-100">
                                        Give {tier.amount}/mo →
                                    </div>
                                </a>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={0.4}>
                        <div className="mt-10 text-center">
                            <Button
                                href="https://www.classy.org/give/665776/#!/donation/checkout"
                                variant="primary"
                            >
                                Start giving monthly
                            </Button>
                            <p className="mt-4 text-xs text-white/40">
                                Cancel or change your amount anytime. No commitments.
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
                        title="From your gift to their hands"
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
                            desc: "Kits are distributed through our 30+ partner agencies to vulnerable youth and young adults who need them most.",
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

            {/* Final CTA */}
            <section className="bg-ink text-white">
                <Container className="py-16 text-center sm:py-20">
                    <Reveal>
                        <h2 className="mx-auto max-w-2xl font-serif text-3xl font-normal tracking-tight sm:text-4xl md:text-5xl">
                            Essentials shouldn&rsquo;t be a luxury.{" "}
                            <span className="hero-highlight">Help us change that.</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/70">
                            Join the community of monthly supporters keeping essentials kits
                            flowing to youth who need them — every single month.
                        </p>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <div className="mt-8">
                            <Button
                                href="https://www.classy.org/give/665776/#!/donation/checkout"
                                variant="primary"
                            >
                                Give monthly now
                            </Button>
                        </div>
                    </Reveal>
                </Container>
            </section>
        </div>
    );
}
