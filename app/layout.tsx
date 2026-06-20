import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(site.url),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["NGO", "NonprofitOrganization", "LocalBusiness"],
  name: site.name,
  url: site.url,
  logo: `${site.url}/teenhealthlogohoriz.png`,
  description:
    "Teen Health is an Apple Valley, CA nonprofit delivering food, hydration, supplements, and hygiene and personal care support to at-risk youth ages 13–24 across Southern California, including Orange, Los Angeles, San Bernardino, Riverside, and San Diego counties.",
  email: site.contactEmail,
  nonprofitStatus: "Nonprofit501c3",
  // Mailing address: street + phone still pending verification from Teen Health.
  address: {
    "@type": "PostalAddress",
    addressLocality: "Apple Valley",
    addressRegion: "CA",
    postalCode: "92307",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Orange County" },
    { "@type": "AdministrativeArea", name: "Los Angeles County" },
    { "@type": "AdministrativeArea", name: "San Bernardino County" },
    { "@type": "AdministrativeArea", name: "Riverside County" },
    { "@type": "AdministrativeArea", name: "San Diego County" },
    { "@type": "AdministrativeArea", name: "Southern California" },
    { "@type": "Country", name: "United States" },
  ],
  // After Yelp, Bing Places, Idealist, GreatNonprofits, and Google Business
  // Profile listings go live, add each verified URL to this array.
  sameAs: [
    "https://www.charitynavigator.org/ein/874628884",
    "https://app.candid.org/profile/14074133/teen-health-inc/",
    "https://mygoodness.benevity.org/community/cause/840-874628884",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Brand Partnership",
      email: site.contactEmail,
      url: `${site.url}/brand-partner`,
      areaServed: "US",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: site.contactEmail,
      areaServed: "US",
      availableLanguage: ["English"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.variable}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16724035587"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16724035587');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
