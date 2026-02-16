import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { articles } from "@/content/articles";

export const metadata = {
  title: "Learn",
};

const categoryOrder = ["Context", "Programs", "Partnerships"] as const;

export default function LearnPage() {
  const byCategory = categoryOrder.map((cat) => ({
    cat,
    items: articles.filter((a) => a.category === cat),
  }));

  return (
    <div className="bg-transparent">
      <Container className="py-14 sm:py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Learn"
            title="The essentials, simplified"
            description="Instead of dozens of small pages, keep a single Learn hub with a handful of high-signal articles."
          />
        </Reveal>

        <div className="mt-10 space-y-12">
          {byCategory.map(({ cat, items }) => (
            <div key={cat}>
              <Reveal>
                <div className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
                  {cat}
                </div>
              </Reveal>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((a, index) => (
                  <Reveal key={a.slug} delay={index * 0.07}>
                    <Card className="flex flex-col overflow-hidden p-0">
                      <div className="relative" style={{ aspectRatio: "3/2" }}>
                        <Image
                          src={a.image.src}
                          alt={a.image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-6">
                      <h3 className="text-lg font-normal tracking-tight text-ink">
                        {a.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink/70">{a.deck}</p>
                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
                          Updated {new Date(a.updated).getFullYear()}
                        </span>
                        <Link
                          href={`/learn/${a.slug}`}
                          className="text-sm font-semibold text-sky hover:underline"
                        >
                          Read →
                        </Link>
                      </div>
                      </div>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-14 rounded-3xl border border-border bg-sun p-8 text-ink shadow-soft sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/70">
              Keep it light
            </p>
            <h2 className="mt-4 text-3xl font-normal tracking-tight sm:text-4xl">
              If it doesn’t help someone act, cut it.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/80">
              This page is designed to replace a large “endpoint sprawl.” Each article
              should earn its place by making your mission easier to understand and your
              donation ask easier to say yes to.
            </p>
            <div className="mt-7">
              <Link
                href="https://www.classy.org/give/665776/#!/donation/checkout"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-black"
              >
                Donate →
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
