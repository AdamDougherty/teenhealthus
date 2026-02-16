import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";
import { MobileMenu } from "@/components/MobileMenu";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span
            aria-hidden
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sun text-ink font-black"
          >
            TH
          </span>
          <span className="text-sm font-black tracking-tight text-ink">
            {site.name}
            <span className="ml-2 hidden text-ink/60 sm:inline">{site.tagline}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-ink/80 md:flex">
          <Link href="/programs" className="hover:text-ink">
            Programs
          </Link>
          <Link href="/learn" className="hover:text-ink">
            Learn
          </Link>
          <Link href="/get-involved" className="hover:text-ink">
            Get involved
          </Link>
          <Link href="/about" className="hover:text-ink">
            About
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
