import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { articles, getArticle } from "@/content/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.deck,
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) return notFound();

  return (
    <div className="bg-transparent">
      <Container className="py-14 sm:py-16">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
              {article.category} • Updated {new Date(article.updated).toLocaleDateString()}
            </p>
            <h1 className="mt-4 text-4xl font-normal tracking-tight text-ink sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
              {article.deck}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
          <article className="space-y-10">
            {article.sections.map((s, idx) => (
              <Reveal key={idx} delay={idx * 0.06}>
                <section className="space-y-4">
                  {s.heading ? (
                    <h2 className="text-2xl font-normal tracking-tight text-ink">
                      {s.heading}
                    </h2>
                  ) : null}
                  {s.paragraphs.map((p) => (
                    <p key={p} className="text-base leading-relaxed text-ink/80">
                      {p}
                    </p>
                  ))}
                  {s.bullets ? (
                    <ul className="mt-4 space-y-2 text-sm text-ink/80">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sun" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              </Reveal>
            ))}

            <Reveal delay={0.08}>
              <div className="rounded-3xl bg-ink p-8 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                  Take action
                </p>
                <h3 className="mt-3 text-2xl font-normal tracking-tight">
                  Help deliver essentials to youth who need them most.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  A clean, focused site should always make the next step obvious.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href="https://www.classy.org/give/665776/#!/donation/checkout" variant="primary">
                    Donate
                  </Button>
                  <Button
                    href="/get-involved#volunteer"
                    variant="ghost"
                    className="text-white hover:bg-white/10"
                  >
                    Volunteer
                  </Button>
                </div>
              </div>
            </Reveal>
          </article>

          <aside className="space-y-6">
            <Reveal>
              <Card>
                <div className="text-sm font-normal tracking-tight text-ink">More to read</div>
                <div className="mt-4 space-y-3">
                  {articles
                    .filter((a) => a.slug !== article.slug)
                    .slice(0, 5)
                    .map((a) => (
                      <Link
                        key={a.slug}
                        href={`/learn/${a.slug}`}
                        className="block text-sm font-semibold text-sky hover:underline"
                      >
                        {a.title}
                      </Link>
                    ))}
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.08}>
              <Card>
                <div className="text-sm font-normal tracking-tight text-ink">Navigation</div>
                <div className="mt-4 space-y-2 text-sm">
                  <Link href="/learn" className="block hover:text-ink">
                    ← Back to Learn hub
                  </Link>
                  <Link href="/programs" className="block hover:text-ink">
                    Programs
                  </Link>
                  <Link href="/get-involved" className="block hover:text-ink">
                    Get involved
                  </Link>
                </div>
              </Card>
            </Reveal>
          </aside>
        </div>
      </Container>
    </div>
  );
}
