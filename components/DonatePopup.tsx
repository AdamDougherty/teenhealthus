"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Opens the Zeffy donation form in an overlay instead of sending the visitor
 * to zeffy.com.
 *
 * Mounted once in the root layout, it listens for clicks on ANY link to
 * /donate anywhere on the site — nav, footer, hero, program pages — and opens
 * the form over the current page.
 *
 * Why not Zeffy's own embed-form-script.min.js: it wires up its buttons inside
 * a DOMContentLoaded handler, which has already fired by the time Next.js
 * loads third-party scripts, and it binds handlers one time to the buttons
 * present at that moment. Buttons rendered by a later client-side navigation
 * would never get a handler. Delegating from the document avoids both traps.
 *
 * The links stay real hrefs to /donate, so cmd/ctrl-click, "open in new tab",
 * and a JS failure all still land the visitor on a working donation page.
 */

const BASE_FORM_URL =
  "https://www.zeffy.com/embed/donation-form/donate-to-support-at-risk-youth-2";

// Zeffy's iframe uses this id to tell the parent page the donation is done.
const MESSAGE_ID = "zeffy-iframe";

function buildFormUrl(amount: string | null) {
  const url = new URL(BASE_FORM_URL);
  if (amount && /^\d{1,6}$/.test(amount) && Number(amount) > 0) {
    url.searchParams.set("amount", amount);
  }
  // Matches Zeffy's own embed: a fresh form each open, never a cached one.
  url.searchParams.set("cachebust", String(Date.now()));
  return url.toString();
}

export function DonatePopup() {
  const pathname = usePathname();
  const [formUrl, setFormUrl] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setFormUrl(null), []);

  useEffect(() => {
    // /donate already renders the form inline — don't stack a popup on it.
    if (pathname === "/donate") return;

    function handleClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0) return;
      // Let people deliberately open the donate page in a new tab/window.
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target as Element | null;
      const link = target?.closest?.('a[href^="/donate"]') as HTMLAnchorElement | null;
      if (!link) return;
      if (link.target && link.target !== "_self") return;

      const query = (link.getAttribute("href") || "").split("?")[1] || "";
      const amount = new URLSearchParams(query).get("amount");

      // Preventing the default here, in the capture phase, is what stops the
      // navigation: next/link's own handler returns early when the default is
      // already prevented, and a plain <a> won't follow its href either. We
      // deliberately don't stopPropagation, so other handlers on the way down
      // (the mobile menu closing itself, for one) still get to run.
      event.preventDefault();
      lastFocused.current = document.activeElement as HTMLElement | null;
      setFormUrl(buildFormUrl(amount));
    }

    // Capture phase: must run before next/link's onClick, which would otherwise
    // navigate to /donate before this listener ever sees the event.
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [pathname]);

  // Close on Escape, and lock the page behind the overlay.
  useEffect(() => {
    if (!formUrl) return;

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    closeButtonRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
      lastFocused.current?.focus?.();
    };
  }, [formUrl, close]);

  // Zeffy posts a close message when the donation finishes.
  useEffect(() => {
    if (!formUrl) return;

    function handleMessage(event: MessageEvent) {
      // Only trust the frame we opened, whatever origin Zeffy serves it from.
      if (!event.isTrusted || event.source !== iframeRef.current?.contentWindow) return;
      if (event.data?.id === MESSAGE_ID && event.data?.close) close();
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [formUrl, close]);

  if (!formUrl) return null;

  return (
    <div
      className="fixed inset-0 z-[10000]"
      role="dialog"
      aria-modal="true"
      aria-label="Donate to Teen Health"
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* Full-screen on phones; a centred panel on desktop, sized to the form
          rather than stretched across the viewport. Clicking the space around
          it closes, the same as clicking the backdrop. */}
      <div
        className="absolute inset-0 md:flex md:items-center md:justify-center md:p-8"
        onClick={close}
      >
        <div
          className="relative h-full w-full md:h-[90vh] md:max-w-2xl"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            aria-label="Close donation form"
            className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-ink shadow-soft transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sun"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <iframe
            ref={iframeRef}
            title="Donation form powered and secured by Zeffy"
            src={formUrl}
            allow="payment"
            className="h-full w-full border-0 md:rounded-lg"
            onLoad={() =>
              iframeRef.current?.contentWindow?.postMessage(
                { id: MESSAGE_ID, open: true },
                "*"
              )
            }
          />
        </div>
      </div>
    </div>
  );
}
