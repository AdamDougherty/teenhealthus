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
  "@type": "NGO",
  name: site.name,
  url: site.url,
  logo: `${site.url}/teenhealthlogohoriz.png`,
  description: site.description,
  nonprofitStatus: "Nonprofit501c3",
  areaServed: [{ "@type": "Country", name: "United States" }],
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
