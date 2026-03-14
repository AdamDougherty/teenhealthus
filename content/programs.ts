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
      "Rescues surplus from the waste stream",
      "Gets products to high-need youth",
      "Ships truckloads via local partners",
      "Reaches youth through local programs",
    ],
    image: {
      src: "/images/programs/food-rescue/IMG_0731.jpeg",
      alt: "Food rescue delivery at the Orangewood Foundation",
    },
  },
  {
    title: "Regenerative Farm",
    slug: "regenerative-farm",
    eyebrow: "Land + livelihood",
    description:
      "Working ranch properties in Southern California where unhoused young adults live on-site, earn wages in regenerative agriculture, and prepare for permanent housing when ready.",
    bullets: [
      "On-site housing, meals & life skills",
      "Paid apprenticeships in farming & sales",
      "CSA, farmers markets & agritourism revenue",
      "Graduate to permanent housing when ready",
    ],
    image: {
      src: "/images/shared/ch la.jpeg",
      alt: "California landscape for the Regenerative Youth Land Initiative",
    },
  },
];
