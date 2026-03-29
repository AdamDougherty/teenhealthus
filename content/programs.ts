export type Program = {
  title: string;
  slug: string;
  eyebrow: string;
  description: string;
  bullets: string[];
  image: { src: string; alt: string; position?: string };
  href?: string;
};

export const programs: Program[] = [
  {
    title: "Essential Kits",
    slug: "essential-kits",
    eyebrow: "Direct support",
    href: "/how-we-work",
    description:
      "We assemble and distribute kits that include nourishing foods, hydration, supplements, and natural personal care—so youth can focus on school, work, and safety.",
    bullets: [
      "Food + hydration that travels well",
      "Basic hygiene and personal care",
      "Supplements where appropriate",
      "Packaged with dignity and consistency",
    ],
    image: {
      src: "/images/shared/teen-health-bags.jpeg",
      alt: "Essential kits laid out and ready for distribution",
      position: "bottom",
    },
  },
  {
    title: "Food Rescue",
    slug: "food-rescue",
    eyebrow: "Waste → wellness",
    href: "/brand-partner",
    description:
      "We partner with brands and distributors to divert quality surplus products away from landfills and into the hands of youth who need them most.",
    bullets: [
      "Rescues surplus from the waste stream",
      "Gets products to high-need youth",
      "Ships truckloads via local partners",
      "Reaches youth through local programs",
    ],
    image: {
      src: "/images/shared/ymca.jpeg",
      alt: "Food rescue delivery at the Orangewood Foundation",
    },
  },
  {
    title: "Regenerative Farm",
    slug: "regenerative-farm",
    eyebrow: "Land + livelihood",
    href: "/programs#land-initiative",
    description:
      "Working ranch properties in Southern California where unhoused young adults live on-site, earn wages in regenerative agriculture, and prepare for permanent housing when ready.",
    bullets: [
      "On-site housing, meals & life skills",
      "Paid apprenticeships in farming & sales",
      "CSA, farmers markets & agritourism revenue",
      "Graduate to permanent housing when ready",
    ],
    image: {
      src: "/images/shared/regen-farm.png",
      alt: "Regenerative farm with crops and young adult worker in Southern California",
    },
  },
];
