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
          <div className="text-center">
            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              In good company
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ink/60">
              Our partnerships are as unique as every company in our community.
              Whether you&apos;re a national brand or a local artisan, it&apos;s
              never been easier to make generosity on-brand.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-3 border-t border-l border-border">
            {PARTNERS.map((partner) => {
              const inner = (
                <div className="flex items-center justify-center border-b border-r border-border p-8 transition-all duration-300 grayscale hover:grayscale-0 sm:p-10" style={{ aspectRatio: "3/2" }}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={60}
                    className="max-h-10 w-auto object-contain opacity-60 transition-opacity duration-300 hover:opacity-100 sm:max-h-12"
                  />
                </div>
              );

              return partner.link ? (
                <a key={partner.name} href={partner.link} target="_blank" rel="noopener noreferrer" title={partner.name}>
                  {inner}
                </a>
              ) : (
                <div key={partner.name}>{inner}</div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
