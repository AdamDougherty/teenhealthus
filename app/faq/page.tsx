import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Teen Health — who we serve, where we operate, how to donate or volunteer, and how at-risk youth access food, hydration, supplements, and hygiene support.",
};

const linkClass =
  "font-medium text-ink underline decoration-ink/40 underline-offset-2 transition hover:decoration-ink";

// Wording approved by Scott 2026-06-20. `answer` is the plain-text version used
// for the FAQPage schema (kept plain so AI/search engines read clean text);
// `body` is the on-page version with hyperlinks. Keep the two in sync.
const faqs: { question: string; answer: string; body?: ReactNode }[] = [
  {
    question: "Who does Teen Health serve?",
    answer:
      "Teen Health serves at-risk teens (ages 13–17) and young adults (ages 18–24) across Southern California, including those facing homelessness, food insecurity, and poverty. We focus on individuals working to meet basic survival needs so they can put their energy into school, safety, and long-term health.",
  },
  {
    question: "How can I donate food or hygiene products to Teen Health?",
    answer:
      "You can donate healthy food, beverages, hydration, supplements, and personal care products by contacting us through our website or by emailing us at info@teenhealth.us. Brands and businesses can also contribute products in bulk through our Brand Partner program.",
    body: (
      <>
        You can donate healthy food, beverages, hydration, supplements, and
        personal care products by contacting us through our website or by
        emailing us at{" "}
        <a href="mailto:info@teenhealth.us" className={linkClass}>
          info@teenhealth.us
        </a>
        . Brands and businesses can also contribute products in bulk through our{" "}
        <Link href="/brand-partner" className={linkClass}>
          Brand Partner
        </Link>{" "}
        program.
      </>
    ),
  },
  {
    question: "Where does Teen Health operate?",
    answer:
      "Teen Health is based in Apple Valley, California and serves at-risk youth across Southern California, including San Diego, Riverside, San Bernardino, Los Angeles, and Orange counties. We work alongside nonprofit partners — respite centers, shelters, churches, and community outreach organizations throughout the region.",
  },
  {
    question: "How do at-risk teens access Teen Health services?",
    answer:
      "At-risk youth typically reach Teen Health through our partner network that distributes our food and dignity kits directly. Teens, young adults, and caregivers can also email info@teenhealth.us to learn where support is available.",
    body: (
      <>
        At-risk youth typically reach Teen Health through our partner network
        that distributes our food and dignity kits directly. Teens, young
        adults, and caregivers can also email{" "}
        <a href="mailto:info@teenhealth.us" className={linkClass}>
          info@teenhealth.us
        </a>{" "}
        to learn where support is available.
      </>
    ),
  },
  {
    question: "What types of food does Teen Health distribute?",
    answer:
      "Teen Health distributes nourishing, nutrient-dense food and hydration — not just shelf-stable calories — to support health and focus. Through programs like our Youth Nutrition Initiative, we prioritize fresh, healthy options.",
    body: (
      <>
        Teen Health distributes nourishing, nutrient-dense food and hydration —
        not just shelf-stable calories — to support health and focus. Through
        programs like our{" "}
        <Link href="/youth-nutrition-initiative" className={linkClass}>
          Youth Nutrition Initiative
        </Link>
        , we prioritize fresh, healthy options.
      </>
    ),
  },
  {
    question: "How can I volunteer with Teen Health?",
    answer:
      "You can volunteer with Teen Health by visiting our Volunteer page and sharing your interest, or by emailing info@teenhealth.us.",
    body: (
      <>
        You can volunteer with Teen Health by visiting our{" "}
        <Link href="/volunteer" className={linkClass}>
          Volunteer
        </Link>{" "}
        page and sharing your interest, or by emailing{" "}
        <a href="mailto:info@teenhealth.us" className={linkClass}>
          info@teenhealth.us
        </a>
        .
      </>
    ),
  },
  {
    question: "Is Teen Health a 501(c)(3) nonprofit?",
    answer:
      "Yes. Teen Health is a registered 501(c)(3) nonprofit organization (EIN 87-4628884), so donations are tax-deductible to the extent allowed by law.",
  },
  {
    question: "How is Teen Health different from a food bank?",
    answer:
      "Unlike a traditional food bank, Teen Health focuses specifically on at-risk youth and young adults (ages 13–24) and pairs nutrition with hydration, supplements, and hygiene — delivered with dignity. Our goal is not just a meal, but providing ongoing support and nutrition education delivered through our network of partners.",
  },
  {
    question: "What areas of Southern California does Teen Health serve?",
    answer:
      "Teen Health is based in Apple Valley and serves communities across Southern California, including San Diego, Riverside, San Bernardino, Los Angeles, and Orange counties. To find out whether services are available in your area, email info@teenhealth.us.",
    body: (
      <>
        Teen Health is based in Apple Valley and serves communities across
        Southern California, including San Diego, Riverside, San Bernardino, Los
        Angeles, and Orange counties. To find out whether services are available
        in your area, email{" "}
        <a href="mailto:info@teenhealth.us" className={linkClass}>
          info@teenhealth.us
        </a>
        .
      </>
    ),
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <div className="bg-transparent">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Container className="py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description={
              <>
                Quick, direct answers about who {site.name} serves, where we
                operate, and how to get food, hygiene, and essential support to
                at-risk youth&nbsp;&mdash; or how&nbsp;to&nbsp;help.
              </>
            }
          />
        </Reveal>

        <dl className="mt-12 max-w-3xl divide-y divide-ink/10 border-t border-ink/10">
          {faqs.map((f, i) => (
            <Reveal key={f.question} delay={Math.min(i * 0.04, 0.2)}>
              <div className="py-7">
                <dt className="text-lg font-semibold text-ink sm:text-xl">
                  {f.question}
                </dt>
                <dd className="mt-3 text-base leading-relaxed text-ink/70">
                  {f.body ?? f.answer}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </div>
  );
}
