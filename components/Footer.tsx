import Link from "next/link";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <Container className="py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="text-sm font-black tracking-tight text-ink">Teen Health</div>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              A focused, scalable approach to getting healthy essentials to vulnerable
              youth—fast, practical, and with dignity.
            </p>
            <p className="mt-4 text-xs text-ink/60">
              Teen Health is a 501(c)(3) nonprofit. EIN: 87-4628884.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm md:grid-cols-3">
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
                Explore
              </div>
              <div className="space-y-2">
                <Link href="/programs" className="block hover:text-ink">
                  Programs
                </Link>
                <Link href="/learn" className="block hover:text-ink">
                  Learn
                </Link>
                <Link href="/about" className="block hover:text-ink">
                  About
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
                Help
              </div>
              <div className="space-y-2">
                <Link href="https://www.classy.org/give/665776/#!/donation/checkout" className="block hover:text-ink">
                  Donate
                </Link>
                <Link href="/get-involved#volunteer" className="block hover:text-ink">
                  Volunteer
                </Link>
                <Link href="/get-involved#partner" className="block hover:text-ink">
                  Partner
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
                Legal
              </div>
              <div className="space-y-2">
                <a href="/privacy" className="block hover:text-ink">
                  Privacy
                </a>
                <a href="/terms" className="block hover:text-ink">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-ink/60 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Teen Health. All rights reserved.</div>
          <div>
            Built with care by <a href="mailto:adam@blizzfull.com" className="underline hover:text-ink">Adam Dougherty</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
