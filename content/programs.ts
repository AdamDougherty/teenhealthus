export type Program = {
  title: string;
  slug: string;
  eyebrow: string;
  description: string;
  bullets: string[];
  image: { src: string; alt: string };
};

export const programs: Program[] = [
  {
    title: "Essential Kits",
    slug: "essential-kits",
    eyebrow: "Direct support",
    description:
      "We assemble and distribute kits that include nourishing foods, hydration, supplements, and natural personal care—so youth can focus on school, work, and safety.",
    bullets: [
      "Food + hydration that travels well",
      "Basic hygiene and personal care",
      "Supplements where appropriate",
      "Packaged with dignity and consistency",
    ],
    image: {
      src: "/images/programs/essential-kits/IMG_5095.jpeg",
      alt: "Essential kits laid out and ready for distribution",
    },
  },
  {
    title: "Food Rescue",
    slug: "food-rescue",
    eyebrow: "Waste → wellness",
    description:
      "We partner with brands and distributors to divert quality surplus products away from landfills and into the hands of youth who need them most.",
    bullets: [
      "Rescues healthy products that would otherwise go to waste",
      "Improves access for high-need youth",
      "Moves truckloads efficiently through partners",
      "Supports programs already serving youth locally",
    ],
    image: {
      src: "/images/programs/food-rescue/IMG_0731.jpeg",
      alt: "Food rescue delivery at the Orangewood Foundation",
    },
  },
  {
    title: "Disaster Relief",
    slug: "disaster-relief",
    eyebrow: "Rapid response",
    description:
      "When emergencies hit, youth facing homelessness or food insecurity are impacted first. We mobilize essential supplies fast through our partner network.",
    bullets: [
      "Fast, flexible shipments",
      "Works alongside local agencies",
      "Focus on youth and young adults",
      "Built for unpredictable needs",
    ],
    image: {
      src: "/images/events/IMG_0475.jpeg",
      alt: "Teen Health team with supplies ready for rapid response",
    },
  },
];
