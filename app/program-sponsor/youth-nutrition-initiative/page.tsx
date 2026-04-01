import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export const metadata = {
  title: "Youth Nutrition Initiative",
};

export default function YouthNutritionInitiativePage() {
  return (
    <div className="bg-transparent">
      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "70vh", background: "#3D75D0" }}
      >
        <div className="relative z-10 pl-6 sm:pl-10 lg:pl-16 py-16 min-h-[70vh] flex items-center">
          <div className="max-w-3xl">
            <Reveal>
              <p
                className="text-xs font-bold uppercase tracking-[0.22em]"
                style={{ color: "#FDCF6A" }}
              >
                Campaign
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1
                className="mt-4 font-serif text-3xl font-normal tracking-tight text-white sm:text-4xl lg:text-5xl"
                style={{ lineHeight: 1.1 }}
              >
                Youth Nutrition Initiative
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white">
                Reliable nutrition for the youth who need it most.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      {/* TODO: Replace placeholder content below with final copy */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-sun" />
              <h2 className="text-center font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                About This Program
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-ink/70">
                Food insecurity undermines the programs youth depend on for
                education, job training, and housing support. We partner with
                youth-serving organizations to provide consistent,
                allergen-friendly snacks that keep energy up and engagement
                strong throughout the day. The initiative is designed to scale
                rapidly through corporate sponsors and community
                partners — delivering reliable nutrition across multiple cities
                to the youth who need it most.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── CTA ─── */}
      <section className="pb-16 sm:pb-20">
        <Container>
          <Reveal>
            <div
              className="rounded-3xl p-8 text-center sm:p-10"
              style={{ backgroundColor: "#E5EEFB" }}
            >
              <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                Sponsor This Program
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ink/70">
                Your contribution helps keep youth fueled and focused — fund
                this program directly through our Benevity campaign.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button
                  href="https://mygoodness.benevity.org/community/cause/840-874628884"
                  variant="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  Sponsor on Benevity
                </Button>
                <Button
                  href="/program-sponsor"
                  variant="ghost"
                  className="text-ink hover:bg-ink/10"
                >
                  Back to Programs
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
