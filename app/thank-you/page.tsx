import type { Metadata } from "next";
import { ThankYouContent } from "@/components/ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You",
  description: "We received your submission and will be in touch soon.",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <ThankYouContent
      title="Thank You for Reaching Out"
      message="We’ve received your submission and we’re excited to connect. A member of our team will review your information and be in touch with you soon."
    />
  );
}
