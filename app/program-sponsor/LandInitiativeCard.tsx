"use client";

import { useState } from "react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export function LandInitiativeCard() {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card className="flex h-full flex-col overflow-hidden p-0">
            {/* Header band */}
            <div className="px-8 py-6" style={{ backgroundColor: '#E5EEFB' }}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/50">
                    Signature Campaign
                </p>
                <h3 className="mt-3 font-serif text-2xl font-normal tracking-tight text-ink">
                    The California Regenerative Youth Land&nbsp;Initiative
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    We are acquiring two working ranch properties in Southern California where unhoused young adults ages 18–29 live on-site,<br className="hidden sm:inline" />{" "}
                    earn wages, build real skills, and prepare for permanent housing — at their own pace, with real support behind them.
                </p>
            </div>

            <div className="flex flex-col gap-6 px-8 pb-8 pt-4">
                {/* 4 Pillars — always visible */}
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {[
                        { icon: "🌱", label: "Regenerative Agriculture", sub: <>Soil-first production,<br />orchards, & livestock</> },
                        { icon: "💼", label: "Paid Apprenticeships", sub: <>12–18 month structured<br />workforce track</> },
                        { icon: "📈", label: "Enterprise Revenue", sub: <>CSA, farmers markets,<br />& agritourism</> },
                        { icon: "🏡", label: "Permanent Housing", sub: <>Graduate when<br />genuinely ready</> },
                    ].map(({ icon, label, sub }, i) => (
                        <div key={i} className="rounded-xl bg-mist p-4 text-center">
                            <div className="text-2xl">{icon}</div>
                            <p className="mt-2 text-sm font-bold leading-tight text-ink">{label}</p>
                            <p className="mt-1 text-sm leading-snug text-ink/60">{sub}</p>
                        </div>
                    ))}
                </div>

                {/* Expand / collapse toggle */}
                <button
                    onClick={() => setExpanded((v) => !v)}
                    className="flex items-center justify-center gap-2 text-sm font-semibold text-ink hover:text-ink/70 transition-colors w-full"
                    aria-expanded={expanded}
                >
                    <span>{expanded ? "Show less" : "Learn more about this program"}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                    >
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </button>

                {/* Expandable content */}
                {expanded && (
                    <div className="flex flex-col gap-8">
                        {/* Apprenticeship Track */}
                        <div>
                            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-ink/50">The Apprenticeship Track</p>
                            <div className="grid gap-2 sm:grid-cols-2">
                                {[
                                    { phase: "Foundation", months: "Months 1–3", desc: "On-site housing, life skills, & farm orientation." },
                                    { phase: "Apprentice", months: "Months 4–9", desc: "Hands-on work in produce, livestock, or sales." },
                                    { phase: "Senior Apprentice", months: "Months 10–15", desc: "Crop planning, team leadership, & enterprise management." },
                                    { phase: "Graduate", months: "When Ready", desc: "Job placement, housing navigation, & alumni support." },
                                ].map(({ phase, months, desc }) => (
                                    <div key={phase} className="rounded-lg border border-ink/10 p-4">
                                        <p className="text-sm font-bold text-ink">
                                            {phase} <span className="font-normal text-ink/50">· {months}</span>
                                        </p>
                                        <p className="mt-1 text-sm leading-snug text-ink/60">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 5-Year Plan */}
                        <div>
                            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-ink/50">5-Year Plan</p>
                            <div className="flex flex-col gap-2 sm:flex-row">
                                {[
                                    { phase: "Phase I", detail: "80-acre Fallbrook ranch · 8–12 beds · CSA\u00a0launch" },
                                    { phase: "Phase II", detail: "Second 100+ acre ranch · 30–40 combined\u00a0beds" },
                                    { phase: "Phase III", detail: "60–80 beds · $3.5–4M annual enterprise\u00a0revenue" },
                                ].map(({ phase, detail }) => (
                                    <div key={phase} className="flex-1 rounded-lg bg-sun/10 px-4 py-3">
                                        <p className="text-sm font-bold text-ink">{phase}</p>
                                        <p className="mt-1 text-sm leading-snug text-ink/70">{detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Giving ladder */}
                        <div>
                            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-ink/50">Your Contribution</p>
                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                                {[
                                    { amount: "$100", desc: "Tools & supplies for one apprentice's first month" },
                                    { amount: "$500", desc: "One week of on-farm housing & meals" },
                                    { amount: "$1,000", desc: "One orchard tree — a 30-year asset that feeds and earns" },
                                ].map(({ amount, desc }) => (
                                    <div key={amount} className="rounded-lg border border-ink/10 p-3">
                                        <p className="text-base font-bold text-ink">{amount}</p>
                                        <p className="mt-1 text-sm leading-snug text-ink/60">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Always-visible buttons */}
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                    <Button href="/program-sponsor/land-initiative" variant="primary" style={{ color: 'white' }}>
                        Learn More
                    </Button>
                </div>
            </div>
        </Card>
    );
}
