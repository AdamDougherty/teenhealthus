import type { Metadata } from "next";
import { ThankYouContent } from "@/components/ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You",
  description: "We received your volunteer application and will be in touch soon.",
  robots: { index: false, follow: true },
};

export default function VolunteerThankYouPage() {
  return (
    <ThankYouContent
      title="Thank You for Signing Up"
      message="We’ve received your volunteer application and we’re excited to have you on board. Our team will follow up with opportunities that match your interests and availability."
    />
  );
}
