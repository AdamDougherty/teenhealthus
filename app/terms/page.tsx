import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Terms of Use",
  description:
    "The terms that govern your use of teenhealth.us, including acceptable use, donations, intellectual property, disclaimers, and contact information.",
};

const linkClass =
  "font-medium text-ink underline decoration-ink/40 underline-offset-2 transition hover:decoration-ink";

export default function TermsPage() {
  return (
    <div className="bg-transparent">
      <Container className="py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Legal"
            title="Terms of Use"
            description="Last updated: July 15, 2026"
          />
        </Reveal>

        <div className="mt-10 max-w-3xl space-y-10 text-base leading-relaxed text-ink/70">
          <p>
            Welcome to teenhealth.us (the &ldquo;Site&rdquo;), operated by Teen
            Health, Inc. (&ldquo;Teen Health,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;), a 501(c)(3) nonprofit
            organization. By accessing or using the Site, you agree to these
            Terms of Use. If you do not agree, please do not use the Site.
          </p>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal tracking-tight text-ink">
              Use of the Site
            </h2>
            <p>
              You may use the Site for lawful, personal, and non-commercial
              purposes, such as learning about Teen Health, contacting us,
              volunteering, partnering, or donating. You agree not to:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                use the Site in any way that violates applicable law or these
                Terms;
              </li>
              <li>interfere with or disrupt the Site or its servers;</li>
              <li>
                attempt to gain unauthorized access to any part of the Site;
              </li>
              <li>
                collect or harvest information from the Site using automated
                means without our permission; or
              </li>
              <li>
                use the Site to transmit harmful, fraudulent, or unlawful
                content.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal tracking-tight text-ink">
              Donations
            </h2>
            <p>
              Donations made through the Site are processed by our third-party
              donation platform, Zeffy, and are subject to Zeffy&rsquo;s
              terms.
              Teen Health is a registered 501(c)(3) nonprofit (EIN 87-4628884),
              and donations are tax-deductible to the extent allowed by law;
              please consult your tax advisor. If you have a question about a
              donation or believe a donation was made in error, contact us at{" "}
              <a href="mailto:info@teenhealth.us" className={linkClass}>
                info@teenhealth.us
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal tracking-tight text-ink">
              Intellectual property
            </h2>
            <p>
              Unless otherwise noted, the content on the Site &mdash; including
              text, graphics, logos, images, and design &mdash; is owned by or
              licensed to Teen Health and is protected by intellectual property
              laws. You may view and share this content for personal,
              non-commercial purposes, but you may not copy, modify, distribute,
              or use it for commercial purposes without our prior written
              permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal tracking-tight text-ink">
              No medical or professional advice
            </h2>
            <p>
              Information on the Site, including any content about nutrition,
              hydration, wellness, or health, is provided for general
              informational purposes only and is not medical, nutritional, or
              professional advice. It is not a substitute for advice from a
              qualified professional. Always seek the guidance of a qualified
              provider with any questions you may have regarding a medical or
              health condition.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal tracking-tight text-ink">
              Third-party links and services
            </h2>
            <p>
              The Site may link to or rely on third-party websites and services
              (such as Zeffy). We do not control and are not responsible for the
              content, policies, or practices of those third parties. Your use of
              them is at your own risk and subject to their terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal tracking-tight text-ink">
              Disclaimers
            </h2>
            <p>
              The Site is provided on an &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; basis, without warranties of any kind, whether
              express or implied, including warranties of merchantability,
              fitness for a particular purpose, and non-infringement. We do not
              warrant that the Site will be uninterrupted, error-free, or free of
              harmful components.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal tracking-tight text-ink">
              Limitation of liability
            </h2>
            <p>
              To the fullest extent permitted by law, Teen Health and its
              officers, directors, employees, and volunteers will not be liable
              for any indirect, incidental, special, consequential, or punitive
              damages, or any loss of data or goodwill, arising from or related
              to your use of the Site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal tracking-tight text-ink">
              Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless Teen Health and its
              officers, directors, employees, and volunteers from any claims,
              damages, or expenses arising out of your use of the Site or your
              violation of these Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal tracking-tight text-ink">
              Governing law
            </h2>
            <p>
              These Terms are governed by the laws of the State of California,
              without regard to its conflict-of-laws rules. Any dispute relating
              to these Terms or the Site will be subject to the exclusive
              jurisdiction of the state and federal courts located in California.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal tracking-tight text-ink">
              Changes to these Terms
            </h2>
            <p>
              We may update these Terms from time to time. When we do, we will
              revise the &ldquo;Last updated&rdquo; date at the top of this page.
              Your continued use of the Site after changes are posted means you
              accept the updated Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal tracking-tight text-ink">
              Contact us
            </h2>
            <p>If you have questions about these Terms, contact us at:</p>
            <p className="not-prose">
              Teen Health, Inc.
              <br />
              Apple Valley, California
              <br />
              <a href="mailto:info@teenhealth.us" className={linkClass}>
                info@teenhealth.us
              </a>
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
