import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <Container className="py-20">
      <h1 className="text-4xl font-black tracking-tight text-ink">Page not found</h1>
      <p className="mt-4 max-w-xl text-base text-ink/70">
        This route doesn’t exist (yet). Head back home or explore the Learn hub.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/" variant="primary">
          Home
        </Button>
        <Button href="/learn" variant="secondary">
          Learn
        </Button>
        <Link href="https://www.classy.org/give/665776/#!/donation/checkout" className="text-sm font-semibold text-sky hover:underline">
          Donate →
        </Link>
      </div>
    </Container>
  );
}
