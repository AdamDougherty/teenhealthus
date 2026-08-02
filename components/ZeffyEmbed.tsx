"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

/**
 * Embeds the "Donate to Support At-Risk Youth" Zeffy form in-page, so donors
 * never leave teenhealth.us. This is the same campaign the site used to link
 * out to directly; every Donate button now points at /donate instead.
 *
 * zeffy-embed.js injects the form into the [data-zeffy-embed] div and keeps its
 * height in sync. If that script is blocked or fails, we fall back to a plain
 * iframe pointed at the same form.
 */

const BASE_FORM_PATH = "/embed/donation-form/donate-to-support-at-risk-youth-2";

// How long to wait for the script to paint the form before assuming it never
// will (ad blockers often let the request through, then block the render).
const FALLBACK_AFTER_MS = 8000;

export function ZeffyEmbed({
  className,
  amount,
}: {
  className?: string;
  /** Whole-dollar amount to pre-fill, e.g. 50. Ignored if not a valid amount. */
  amount?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [useFallback, setUseFallback] = useState(false);

  const validAmount =
    typeof amount === "number" && Number.isInteger(amount) && amount > 0 && amount <= 999999;
  const formPath = validAmount ? `${BASE_FORM_PATH}?amount=${amount}` : BASE_FORM_PATH;
  const formUrl = `https://www.zeffy.com${formPath}`;

  useEffect(() => {
    if (useFallback) return;

    const timer = window.setTimeout(() => {
      // The script renders into this div. Still empty means it never arrived.
      if (containerRef.current?.childElementCount === 0) {
        setUseFallback(true);
      }
    }, FALLBACK_AFTER_MS);

    return () => window.clearTimeout(timer);
  }, [useFallback]);

  if (useFallback) {
    return (
      <div className={className}>
        <div
          className="relative w-full overflow-hidden"
          // Fixed height: unlike the script embed, a bare iframe can't
          // auto-resize. Generous enough that the payment step doesn't
          // scroll internally.
          style={{ height: "clamp(600px, 80vh, 780px)" }}
        >
          <iframe
            title="Donation form powered by Zeffy"
            src={formUrl}
            allow="payment"
            allowTransparency
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div ref={containerRef} data-zeffy-embed data-form-url={formPath} />
      <Script
        src="https://www.zeffy.com/embed/v2/zeffy-embed.js"
        strategy="afterInteractive"
        onError={() => setUseFallback(true)}
      />
    </div>
  );
}
