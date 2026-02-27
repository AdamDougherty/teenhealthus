import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";
import { MobileMenu } from "@/components/MobileMenu";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="/teenhealthlogohoriz.png"
            alt={site.name}
            className="h-7 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-ink/80 md:flex">
          {/* Get involved dropdown */}
          <div className="group relative">
            <Link href="/get-involved" className="flex items-center gap-1 hover:text-ink">
              Get involved
              <svg className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </Link>
            <div className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="min-w-[200px] rounded-xl border border-border bg-white p-2 shadow-lg">
                <Link href="/give-monthly" className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-ink/80 hover:bg-black/5 hover:text-ink">
                  Give monthly
                </Link>
                <Link href="/partner" className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-ink/80 hover:bg-black/5 hover:text-ink">
                  Become a Program Sponsor
                </Link>
                <Link href="/donate-product" className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-ink/80 hover:bg-black/5 hover:text-ink">
                  Become a Brand Partner
                </Link>
                <Link href="/volunteer" className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-ink/80 hover:bg-black/5 hover:text-ink">
                  Volunteer
                </Link>
              </div>
            </div>
          </div>
          <Link href="/programs" className="hover:text-ink">
            Programs
          </Link>
          <Link href="/about" className="hover:text-ink">
            About
          </Link>
          <Link href="/learn" className="hover:text-ink">
            Our Why
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <Button href="https://www.classy.org/give/665776/#!/donation/checkout" variant="primary" className="px-4 py-2">
              Donate
            </Button>
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
