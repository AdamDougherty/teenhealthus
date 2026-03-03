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
                    <div className="max-w-3xl">
                        <Reveal>
                            <h1 className="font-serif text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Fueling Youth Well-Being and Stability
                            </h1>
                        </Reveal>
                    </div>
                </Container>
            </section>
        </div>
    );
}
