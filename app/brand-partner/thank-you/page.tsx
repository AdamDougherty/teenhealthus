import type { Metadata } from "next";
import { ThankYouContent } from "@/components/ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You",
  description: "We received your partnership inquiry and will be in touch soon.",
  robots: { index: false, follow: true },
};

export default function BrandPartnerThankYouPage() {
  return (
    <ThankYouContent
      title="Thank You for Your Interest"
      message="We’ve received your partnership inquiry and we’re excited to connect. Our team will review your information and be in touch with you soon."
    />
  );
}
