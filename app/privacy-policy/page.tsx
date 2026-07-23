import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Teen Health collects, uses, and protects the personal information you share through teenhealth.us, including form submissions, donations, cookies, and your choices.",
};

const linkClass =
  "font-medium text-ink underline decoration-ink/40 underline-offset-2 transition hover:decoration-ink";

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
    </a>
  );
}

export default function PrivacyPage() {
  return (
    <div className="bg-transparent">
      <Container className="py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Legal"
            title="Privacy Policy"
            description="Last updated: July 15, 2026"
          />
        </Reveal>

        <div className="mt-10 max-w-3xl space-y-10 text-base leading-relaxed text-ink/70">
          <p>
            Teen Health, Inc. (&ldquo;Teen Health,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a 501(c)(3) nonprofit
            organization (EIN 87-4628884) based in Apple Valley, California. We
            respect your privacy and are committed to protecting the personal
            information you share with us. This Privacy Policy explains what
            information we collect through our website at teenhealth.us (the
            &ldquo;Site&rdquo;), how we use and share it, and the choices you
            have.
          </p>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal tracking-tight text-ink">
              Information we collect
            </h2>
            <p>We collect information in the following ways:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="font-semibold text-ink">
                  Information you provide directly.
                </strong>{" "}
                When you contact us or submit one of our forms &mdash; such as
                our contact, volunteer, or Brand Partner forms &mdash; we collect
                the information you choose to give us. This typically includes
                your name, email address, organization or company name, phone
                number (if you provide it), and any details you include in your
                message.
              </li>
              <li>
                <strong className="font-semibold text-ink">Donations.</strong>{" "}
                Donations are processed by our third-party donation platform,
                Classy. When you donate, your payment card details are entered on
                and handled by Classy&rsquo;s secure platform &mdash; we do not
                collect or store your full payment card information. We may
                receive donation details such as your name, email address, and
                donation amount so we can acknowledge your gift and provide tax
                receipts.
              </li>
              <li>
                <strong className="font-semibold text-ink">
                  Information collected automatically.
                </strong>{" "}
                Like most websites, when you visit the Site our systems and
                certain third-party tools may automatically collect limited
                technical information, such as your IP address, browser type,
                device information, referring pages, and the pages you view. We
                use this information to operate, secure, and improve the Site and
                to measure our outreach.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal tracking-tight text-ink">
              Cookies and advertising
            </h2>
            <p>
              Our Site uses cookies and similar technologies. In particular, we
              use Google&rsquo;s advertising and conversion-tracking tag (Google
              Ads). This tag may set cookies that help us measure how our ads
              perform and, in some cases, show Teen Health ads to you on other
              websites (a practice known as remarketing).
            </p>
            <p>
              You can control cookies through your browser settings, and you can
              manage Google&rsquo;s use of advertising cookies through Google
              Ads Settings (
              <ExternalLink href="https://adssettings.google.com">
                adssettings.google.com
              </ExternalLink>
              ) or opt out of interest-based advertising through the Digital
              Advertising Alliance (
              <ExternalLink href="https://optout.aboutads.info">
                optout.aboutads.info
              </ExternalLink>
              ). Blocking cookies may affect how parts of the Site function.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal tracking-tight text-ink">
              How we use your information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>respond to your questions, messages, and requests;</li>
              <li>
                coordinate volunteering, brand partnerships, product donations,
                and other ways of getting involved;
              </li>
              <li>
                process and acknowledge donations and provide tax receipts;
              </li>
              <li>operate, maintain, secure, and improve the Site;</li>
              <li>measure and improve our outreach and advertising; and</li>
              <li>
                comply with legal obligations and protect our rights and the
                safety of others.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal tracking-tight text-ink">
              How we share your information
            </h2>
            <p>
              We do not sell your personal information. We share personal
              information only in these limited circumstances:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="font-semibold text-ink">
                  Service providers.
                </strong>{" "}
                We share information with trusted companies that help us operate
                &mdash; for example, Twilio SendGrid (which delivers our form
                submissions and email), Classy (which processes donations), and
                Google (which provides advertising and measurement tools). These
                providers may use your information only to perform services for
                us.
              </li>
              <li>
                <strong className="font-semibold text-ink">
                  Legal reasons.
                </strong>{" "}
                We may disclose information if required by law, subpoena, or legal
                process, or to protect the rights, safety, or property of Teen
                Health, our users, or others.
              </li>
              <li>
                <strong className="font-semibold text-ink">
                  Organizational changes.
                </strong>{" "}
                If Teen Health is involved in a merger, acquisition, or transfer
                of assets, information may be transferred as part of that
                transaction.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal tracking-tight text-ink">
              Third-party services
            </h2>
            <p>
              Our Site relies on third-party services that have their own privacy
              policies. We encourage you to review them:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Classy &mdash;{" "}
                <ExternalLink href="https://www.classy.org/privacy-policy/">
                  classy.org/privacy-policy
                </ExternalLink>
              </li>
              <li>
                Twilio SendGrid &mdash;{" "}
                <ExternalLink href="https://www.twilio.com/legal/privacy">
                  twilio.com/legal/privacy
                </ExternalLink>
              </li>
              <li>
                Google &mdash;{" "}
                <ExternalLink href="https://policies.google.com/privacy">
                  policies.google.com/privacy
                </ExternalLink>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal tracking-tight text-ink">
              Data retention
            </h2>
            <p>
              We keep personal information for as long as needed to fulfill the
              purposes described in this policy, to maintain our records
              (including donation records), and to comply with our legal
              obligations. When information is no longer needed, we take
              reasonable steps to delete or de-identify it.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal tracking-tight text-ink">
              Your choices and rights
            </h2>
            <p>You may:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                ask us to access, correct, or delete the personal information we
                hold about you;
              </li>
              <li>
                unsubscribe from our emails by following the unsubscribe link or
                contacting us; and
              </li>
              <li>
                manage cookies through your browser and the advertising controls
                described above.
              </li>
            </ul>
            <p>
              To make a request, email us at{" "}
              <a href="mailto:info@teenhealth.us" className={linkClass}>
                info@teenhealth.us
              </a>
              . Depending on where you live, you may have additional rights under
              applicable privacy laws, and we will honor those rights as
              required.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal tracking-tight text-ink">
              Children&rsquo;s privacy
            </h2>
            <p>
              The Site is intended for donors, volunteers, partners, and other
              supporters, and is not directed to children under 13. We do not
              knowingly collect personal information from children under 13
              through the Site. If you believe a child has provided us personal
              information through the Site, please contact us at{" "}
              <a href="mailto:info@teenhealth.us" className={linkClass}>
                info@teenhealth.us
              </a>{" "}
              and we will delete it.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal tracking-tight text-ink">
              Security
            </h2>
            <p>
              We use reasonable administrative, technical, and physical
              safeguards to protect the information we collect. However, no
              method of transmission over the internet or electronic storage is
              completely secure, so we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal tracking-tight text-ink">
              Links to other websites
            </h2>
            <p>
              Our Site may contain links to other websites. We are not
              responsible for the privacy practices or content of those sites,
              and we encourage you to read their privacy policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal tracking-tight text-ink">
              Changes to this policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we
              will revise the &ldquo;Last updated&rdquo; date at the top of this
              page. Significant changes will be posted on this page.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-normal tracking-tight text-ink">
              Contact us
            </h2>
            <p>
              If you have questions about this Privacy Policy or how we handle
              your information, contact us at:
            </p>
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
