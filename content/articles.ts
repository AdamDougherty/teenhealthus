export type ArticleSection = {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  deck: string;
  category: "Context" | "Programs" | "Partnerships";
  updated: string; // ISO date
  image: { src: string; alt: string };
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "barriers-to-access",
    title: "Barriers to access aren’t about choices — they’re about options",
    deck:
      "Good nutrition isn’t just about making healthy choices. It’s about having the ability to make them.",
    category: "Context",
    updated: "2026-01-01",
    image: {
      src: "/images/youth/IMG_6160.jpeg",
      alt: "Youth receiving essential support from Teen Health",
    },
    sections: [
      {
        heading: "Why access matters",
        paragraphs: [
          "For teens and young adults facing housing instability, foster care transitions, or poverty, the hardest part is often consistency: consistent meals, consistent hygiene, consistent support.",
          "When access breaks down, health risks stack up fast — and the path back can feel impossible without a next step.",
        ],
      },
      {
        heading: "What we do about it",
        paragraphs: [
          "Teen Health focuses on essentials that are practical, portable, and actually used. We work with partner agencies that already know their communities.",
        ],
        bullets: [
          "Healthy products that are easy to distribute",
          "Personal care that supports daily life and dignity",
          "Partnerships that scale impact without adding red tape",
        ],
      },
    ],
  },
  {
    slug: "food-insecurity",
    title: "Food insecurity is common — and it’s not always visible",
    deck:
      "You can be in school, have friends, and still not know where your next meal is coming from.",
    category: "Context",
    updated: "2026-01-01",
    image: {
      src: "/images/programs/food-rescue/IMG_0889.jpeg",
      alt: "Food rescue supplies ready for distribution",
    },
    sections: [
      {
        heading: "What food insecurity can look like",
        paragraphs: [
          "Skipping meals, relying on cheap calories, or avoiding situations where food is expected (because it’s stressful or uncertain).",
          "For youth, these patterns can show up as fatigue, anxiety, missed school days, or trouble concentrating.",
        ],
      },
      {
        heading: "How food rescue helps",
        paragraphs: [
          "When quality surplus products are rescued and redirected, it reduces waste and strengthens local programs supporting youth.",
        ],
      },
    ],
  },
  {
    slug: "relentless-homelessness",
    title: "When teens lose housing, risk finds them fast",
    deck:
      "Housing instability isn’t just “no home.” It can mean couch surfing, unsafe situations, and constant stress.",
    category: "Context",
    updated: "2026-01-01",
    image: {
      src: "/images/youth/IMG_1541.jpeg",
      alt: "Youth in need of stable housing support",
    },
    sections: [
      {
        heading: "Why the first 72 hours matter",
        paragraphs: [
          "Youth who lose stable housing often face immediate risks: exploitation, hunger, untreated health needs, and isolation.",
          "Support that is fast and practical can reduce harm and help stabilize the next step.",
        ],
      },
      {
        heading: "What stabilization looks like",
        paragraphs: [
          "A kit of essentials can’t solve homelessness — but it can reduce the burden while a youth connects to shelter, services, or a safer plan.",
        ],
      },
    ],
  },
  {
    slug: "nutrition-matters",
    title: "Nutrition matters — for the body and the brain",
    deck:
      "For growing teens, consistent nutrition supports learning, mood, energy, and long-term health.",
    category: "Context",
    updated: "2026-01-01",
    image: {
      src: "/images/programs/essential-kits/IMG_5097.jpeg",
      alt: "Nutrient-dense products included in essential kits",
    },
    sections: [
      {
        heading: "Why it’s bigger than calories",
        paragraphs: [
          "Nutrition affects sleep, focus, stress tolerance, and immune health. When resources are limited, it’s common to have too few nutrients even if calories are available.",
          "That’s why we prioritize products that are practical and nutrient-dense — especially for youth who are constantly on the move.",
        ],
      },
    ],
  },
  {
    slug: "personal-care-is-health-care",
    title: "Personal care is health care",
    deck:
      "Hygiene and personal care aren’t “nice-to-haves.” They’re foundational to health, confidence, and safety.",
    category: "Programs",
    updated: "2026-01-01",
    image: {
      src: "/images/programs/essential-kits/IMG_4206.jpeg",
      alt: "Personal care items assembled for essential kits",
    },
    sections: [
      {
        heading: "Dignity changes outcomes",
        paragraphs: [
          "When someone has the basics — soap, toothpaste, deodorant, menstrual supplies — it’s easier to show up for school, work, and appointments with less stress.",
          "We include personal care items because they remove friction from daily life and reduce health risks.",
        ],
      },
    ],
  },
  {
    slug: "partnerships-scale-impact",
    title: "Partnerships that scale impact",
    deck:
      "We work with natural product brands, distributors, and local agencies to move essentials efficiently — without reinventing what already works.",
    category: "Partnerships",
    updated: "2026-01-01",
    image: {
      src: "/images/partnerships/IMG_5266.jpeg",
      alt: "Teen Health partnership distribution event",
    },
    sections: [
      {
        heading: "Why partners matter",
        paragraphs: [
          "No single organization can reach every youth who needs support. Partners help us move faster, reach farther, and stay efficient.",
        ],
        bullets: [
          "Brand and logistics partners help rescue quality surplus",
          "Agency partners help distribute locally with trust",
          "Volunteers power packing, sorting, and delivery",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
