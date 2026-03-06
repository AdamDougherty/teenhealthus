import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/Container";

interface Partner {
  name: string;
  logo: string;
  link?: string;
}

const PARTNERS: Partner[] = [
  { name: "Whole Foods Market", logo: "/partners/wholefood.png", link: "https://www.wholefoodsmarket.com" },
  { name: "Betty Lou's", logo: "/partners/bettylous.png", link: "https://www.bettylous.com" },
  { name: "Intake", logo: "/images/shared/intake.png", link: "https://www.intakebreathing.com" },
  { name: "Google", logo: "/partners/google.svg", link: "https://www.google.org" },
  { name: "Claude", logo: "/partners/claude.svg", link: "https://www.anthropic.com" },
  { name: "Salesforce", logo: "/partners/salesforce.svg", link: "https://www.salesforce.org" },
  { name: "Marquis", logo: "/partners/marquis.svg", link: "https://drinkmarquis.com" },
  { name: "Oceanblue", logo: "/partners/oceanblue.jpg", link: "https://www.oceanblueomega.com" },
  { name: "Perfect Hydration", logo: "/partners/perfecthydration.png", link: "https://www.perfecthydration.com" },
];

export function PartnerLogoGrid() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              In good company
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink/60">
              Our partnerships are as unique as every company in our community.
              Whether you&apos;re a national brand or a local artisan,
              it&apos;s never been easier to make generosity on&#8209;brand.
            </p>
          </div>
        </Reveal>

        {/* Logo grid — clean white cards */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/8 bg-ink/5 sm:grid-cols-3">
          {PARTNERS.map((partner, i) => {
            const inner = (
              <div className="flex h-32 items-center justify-center bg-white px-8 transition-colors hover:bg-ink/[0.02] sm:h-36">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={80}
                  className="max-h-16 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                />
              </div>
            );

            return partner.link ? (
              <Reveal key={partner.name} delay={i * 0.05}>
                <a href={partner.link} target="_blank" rel="noopener noreferrer" aria-label={partner.name}>
                  {inner}
                </a>
              </Reveal>
            ) : (
              <Reveal key={partner.name} delay={i * 0.05}>
                {inner}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
