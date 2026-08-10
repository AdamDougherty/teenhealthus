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

// The dedicated monthly campaign. Links with a `monthly` query param
// (e.g. /donate?monthly=1&amount=25) open this form instead of the one-time one.
const MONTHLY_FORM_URL =
  "https://www.zeffy.com/embed/donation-form/give-monthly-to-support-at-risk-youth";

// Zeffy's iframe uses this id to tell the parent page the donation is done.
const MESSAGE_ID = "zeffy-iframe";

function buildFormUrl(amount: string | null, monthly: boolean) {
  const url = new URL(monthly ? MONTHLY_FORM_URL : BASE_FORM_URL);
  if (amount && /^\d{1,6}$/.test(amount) && Number(amount) > 0) {
    url.searchParams.set("amount", amount);
  }
  // Matches Zeffy's own embed: a fresh form each open, never a cached one.
  url.searchParams.set("cachebust", String(Date.now()));
  return url.toString();
}

type ActiveForm = { url: string; monthly: boolean };

export function DonatePopup() {
  const pathname = usePathname();
  const [activeForm, setActiveForm] = useState<ActiveForm | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setActiveForm(null), []);

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
      const params = new URLSearchParams(query);
      const amount = params.get("amount");
      const monthly = params.has("monthly");

      // Preventing the default here, in the capture phase, is what stops the
      // navigation: next/link's own handler returns early when the default is
      // already prevented, and a plain <a> won't follow its href either. We
      // deliberately don't stopPropagation, so other handlers on the way down
      // (the mobile menu closing itself, for one) still get to run.
      event.preventDefault();
      lastFocused.current = document.activeElement as HTMLElement | null;
      setActiveForm({ url: buildFormUrl(amount, monthly), monthly });
    }

    // Capture phase: must run before next/link's onClick, which would otherwise
    // navigate to /donate before this listener ever sees the event.
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [pathname]);

  // Close on Escape, and lock the page behind the overlay.
  useEffect(() => {
    if (!activeForm) return;

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
  }, [activeForm, close]);

  // Zeffy posts a close message when the donation finishes.
  useEffect(() => {
    if (!activeForm) return;

    function handleMessage(event: MessageEvent) {
      // Only trust the frame we opened, whatever origin Zeffy serves it from.
      if (!event.isTrusted || event.source !== iframeRef.current?.contentWindow) return;
      if (event.data?.id === MESSAGE_ID && event.data?.close) close();
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [activeForm, close]);

  if (!activeForm) return null;

  return (
    <div
      className="fixed inset-0 z-[10000]"
      role="dialog"
      aria-modal="true"
      aria-label={activeForm.monthly ? "Give monthly to Teen Health" : "Donate to Teen Health"}
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
          className="relative flex h-full w-full flex-col overflow-hidden bg-white md:h-[88vh] md:max-w-6xl md:flex-row md:rounded-lg md:shadow-soft"
          onClick={(event) => event.stopPropagation()}
        >
          {/* Zeffy strips the campaign description out of its embedded form,
              so the case for giving has to live on our side of the iframe. */}
          {/* pr-14 on phones keeps the headline clear of the close button. */}
          <div className="shrink-0 bg-white pb-5 pl-6 pr-14 pt-6 md:w-[38%] md:overflow-y-auto md:px-8 md:py-10">
            {activeForm.monthly ? (
              <>
                <h2 className="font-serif text-xl font-normal leading-snug tracking-tight text-ink md:text-2xl">
                  {/* text-sun is #FF8005, the same orange as the Donate buttons. */}
                  100% of your monthly gift reaches a{" "}
                  <span className="text-sun">young person</span>.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/70 md:mt-5">
                  Steady monthly support lets us plan ahead &mdash; keeping
                  healthy food, hydration, and personal care essentials flowing
                  to vulnerable youth every single month.
                </p>
                {/* Held back on phones so the amount buttons stay above the fold. */}
                <div className="hidden md:block">
                  <p className="mt-4 text-pretty text-sm leading-relaxed text-ink/70">
                    Because brand partners cover our overhead, 100% of every
                    dollar you give goes into the monthly kits we distribute
                    through 100+ partner agencies. Change or cancel your
                    monthly amount anytime &mdash; no fees, no commitments.
                  </p>
                  {/* text-pretty keeps the last line from stranding a single word,
                      whatever width the column ends up at. */}
                  <p className="mt-4 text-pretty text-sm font-semibold leading-relaxed text-ink">
                    You&rsquo;re not funding an organization. You&rsquo;re
                    funding a kit that a specific young person opens &mdash;
                    every month.
                  </p>
                </div>
              </>
            ) : (
              <>
                <h2 className="font-serif text-xl font-normal leading-snug tracking-tight text-ink md:text-2xl">
                  {/* text-sun is #FF8005, the same orange as the Donate buttons. */}
                  100% of your donation reaches a{" "}
                  <span className="text-sun">young person</span>.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/70 md:mt-5">
                  More than 250 natural products companies donate what fills our
                  kits and cover the cost of running Teen Health. Your gift goes to
                  work assembling those kits and getting them into a young
                  person&rsquo;s hands.
                </p>
                {/* Held back on phones so the amount buttons stay above the fold. */}
                <div className="hidden md:block">
                  <p className="mt-4 text-pretty text-sm leading-relaxed text-ink/70">
                    Here&rsquo;s what that buys: nourishing food, hydration, and
                    personal care items &mdash; the things a young person needs to
                    stay healthy and walk into a room with dignity. We move them
                    through our partner agencies across Southern California,
                    reaching more than 5,000 youth ages 13&ndash;24 every year.
                  </p>
                  {/* text-pretty keeps the last line from stranding a single word,
                      whatever width the column ends up at. */}
                  <p className="mt-4 text-pretty text-sm font-semibold leading-relaxed text-ink">
                    You&rsquo;re not funding an organization. You&rsquo;re funding a
                    kit that a specific young person opens.
                  </p>
                </div>
              </>
            )}
          </div>

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

          {/* min-h-0 so the iframe takes the leftover height on phones
              instead of pushing the panel past the bottom of the screen. */}
          <div className="min-h-0 flex-1">
            <iframe
              ref={iframeRef}
              title="Donation form powered and secured by Zeffy"
              src={activeForm.url}
              allow="payment"
              className="h-full w-full border-0"
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
    </div>
  );
}
