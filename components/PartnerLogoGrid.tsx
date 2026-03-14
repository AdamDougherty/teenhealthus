import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/Container";

interface Partner {
  name: string;
  logo: string;
  invertLogo?: boolean;
}

const PARTNERS: Partner[] = [
  { name: "Whole Foods Market", logo: "/partners/wholefood.png" },
  { name: "Betty Lou's", logo: "/partners/bettylous.png" },
  { name: "Intake", logo: "/partners/intake.png", invertLogo: true },
  { name: "Google", logo: "/partners/google.svg" },
  { name: "Salesforce", logo: "/partners/salesforce.svg" },
  { name: "Marquis", logo: "/partners/marquis.svg" },
  { name: "Oceanblue", logo: "/partners/oceanblue.jpg" },
  { name: "Perfect Hydration", logo: "/partners/perfecthydration.png" },
  { name: "Primal Kitchen", logo: "/partners/primalkitchen.png" },
  { name: "Purely Elizabeth", logo: "/partners/purelyelizabeth.png" },
  { name: "Boost Oxygen", logo: "/partners/boostoxygen.png" },
  { name: "Carlson", logo: "/partners/carlson.png" },
  { name: "Emergen-C", logo: "/partners/emergenc.png" },
  { name: "Gatorade", logo: "/partners/gatorade.png" },
  { name: "Guayakí", logo: "/partners/guayaki.png" },
  { name: "Kate's Real Food", logo: "/partners/katesrealfood.png" },
  { name: "Olyra", logo: "/partners/olyra.png" },
  { name: "OWYN", logo: "/partners/owyn.png" },
  { name: "Partake", logo: "/partners/partake.png" },
  { name: "Trace", logo: "/partners/trace.png" },
  { name: "VenturePal", logo: "/partners/venturepal.png" },
  { name: "Zahler", logo: "/partners/zahler.png" },
  { name: "Earth Harmony", logo: "/partners/earthharmony.png" },
  { name: "Anthropic", logo: "/partners/anthropic.png" },
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
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {PARTNERS.map((partner, i) => {
            const inner = (
              <div className="group flex h-[7.5rem] items-center justify-center rounded-xl bg-white p-7 opacity-[0.92] shadow-[0_1px_4px_rgba(0,0,0,0.06)] ring-1 ring-ink/[0.05] transition-all duration-[250ms] ease-out hover:opacity-100 hover:-translate-y-0.5 hover:shadow-lg">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={160}
                  className={`h-auto w-auto max-h-[65px] max-w-[75%] object-contain transition-all duration-[250ms] ease-out group-hover:scale-[1.03] ${partner.name === "Oceanblue" ? "rounded-lg" : ""} ${partner.invertLogo ? "invert" : ""}`}
                />
              </div>
            );

            return (
              <Reveal key={partner.name} delay={i * 0.04}>
                {inner}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
