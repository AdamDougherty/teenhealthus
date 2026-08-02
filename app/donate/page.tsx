import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ZeffyEmbed } from "@/components/ZeffyEmbed";

export const metadata = {
  title: "Donate",
  description:
    "Give directly to Teen Health and fund nutrition, hydration, and personal care essentials for vulnerable youth across Southern California. 100% of every dollar goes to the mission.",
};

const assurances = [
  {
    title: "100% goes to the mission",
    body: "Corporate brand partners donate inventory and cover our operating costs, so every dollar you give funds essentials for youth.",
  },
  {
    title: "Secure checkout",
    body: "Payments are processed by Zeffy and Stripe. Card details are entered on their secure platform — we never see or store them.",
  },
  {
    title: "Tax-deductible",
    body: "Teen Health Inc is a registered 501(c)(3) nonprofit. You'll receive an emailed receipt for your records right after you give.",
  },
];

/**
 * Pages elsewhere on the site link here with a suggested amount
 * (e.g. /donate?amount=50 from the Food as Medicine tiers). Anything that
 * isn't a plain whole-dollar number is ignored and the form opens blank.
 */
function parseAmount(raw: string | string[] | undefined): number | undefined {
  const value = Array.isArray(raw) ? raw[0] : raw;
  if (!value || !/^\d{1,6}$/.test(value)) return undefined;
  const amount = Number(value);
  return amount > 0 ? amount : undefined;
}

export default function DonatePage({
  searchParams,
}: {
  searchParams?: { amount?: string | string[] };
}) {
  const amount = parseAmount(searchParams?.amount);

  return (
    <div className="bg-transparent">
      {/* Header */}
      <section className="pt-16 sm:pt-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p
                className="text-xs font-bold uppercase tracking-[0.22em]"
                style={{ color: "#E08D00" }}
              >
                Donate
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Fund the essentials a{" "}
                <span className="hero-highlight">young person</span> needs today
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
                Your gift puts food, hydration, and personal care essentials
                directly into the hands of young people who need them.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Donation form */}
      <section className="pb-4 pt-10 sm:pt-14">
        <Container>
          <div className="mx-auto max-w-2xl">
            {/* No card wrapper — the Zeffy form renders its own rounded panel
                and caps around 600px, so a wrapper just adds empty gutters. */}
            <Reveal delay={0.1}>
              <ZeffyEmbed amount={amount} />
            </Reveal>
            <p className="mt-4 text-center text-xs font-medium text-ink/50">
              Secure checkout via Zeffy &amp; Stripe. Prefer to give every month?{" "}
              <Link href="/give-monthly" className="font-semibold text-sky hover:underline">
                Set up a monthly gift
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      {/* Assurances */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3">
            {assurances.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div>
                  <h2 className="font-serif text-lg font-normal tracking-tight text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
