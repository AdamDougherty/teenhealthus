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

        {/* Responsive logo grid */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {PARTNERS.map((partner, i) => (
            <Reveal key={partner.name} delay={i * 0.04}>
              <div className="group flex h-[11rem] items-center justify-center rounded-xl bg-white p-7 opacity-[0.92] shadow-[0_1px_4px_rgba(0,0,0,0.06)] ring-1 ring-ink/[0.05] transition-all duration-[250ms] ease-out hover:opacity-100 hover:-translate-y-0.5 hover:shadow-lg">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={200}
                  className={`h-auto w-auto max-h-[100px] max-w-[85%] object-contain transition-all duration-[250ms] ease-out group-hover:scale-[1.03] ${partner.name === "Oceanblue" ? "rounded-lg" : ""}`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
