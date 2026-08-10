"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

const INTEREST_OPTIONS = [
  "Corporate Sponsorship",
  "Foundation / Grant Funding",
  "School or Youth Program Partnership",
  "Individual Giving",
  "Other",
];

const STEPS = [
  {
    num: "01",
    title: "Share your interest",
    desc: "Tell us about your organization and what you're hoping to explore.",
  },
  {
    num: "02",
    title: "We'll connect",
    desc: "Our team follows up to discuss next steps and opportunities to engage.",
  },
  {
    num: "03",
    title: "Launch the partnership",
    desc: "Move forward with a sponsorship or program partnership that fits your goals.",
  },
];

type Status = "idle" | "sending" | "error";

export function InterestForm() {
  const [interests, setInterests] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function toggleInterest(value: string) {
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
    if (status === "error") {
      setStatus("idle");
      setMessage("");
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;

    if (interests.length === 0) {
      setStatus("error");
      setMessage("Please select at least one area you're interested in.");
      return;
    }

    setStatus("sending");
    setMessage("");

    const payload: Record<string, FormDataEntryValue> = Object.fromEntries(
      new FormData(formEl).entries()
    );
    payload.interests = interests.join(", ");
    payload.formType = "yni-interest";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");
      formEl.reset();
      // Full page load (not client-side nav) so the Google tag reliably
      // records the thank-you visit for conversion tracking.
      window.location.assign("/program-sponsor/youth-nutrition-initiative/thank-you");
    } catch {
      setStatus("error");
      setMessage(
        "Something went wrong. Please try again or email us at info@teenhealth.us."
      );
    }
  }

  const labelClass =
    "text-xs font-bold uppercase tracking-[0.18em] text-ink/60";
  const inputClass =
    "mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-sky";

  return (
    <section id="interest-form" className="bg-[#F2F6FC] py-16 sm:py-24">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[380px_1fr] lg:gap-16">
          {/* Left — intro & steps */}
          <div>
            <Reveal>
              <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sky">
                <span className="inline-block h-[2px] w-6 bg-sky" />
                Interest Form
              </p>
              <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                Partner with the Youth Nutrition Initiative.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink/80">
                Tell us a bit about your organization and how you&apos;d like to
                be involved. Together we can bring nutritious food and support
                to more at-risk youth and young adults in need.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-9">
                {STEPS.map((step, i) => (
                  <div
                    key={step.num}
                    className={`py-5 ${i === 0 ? "" : "border-t border-border"}`}
                  >
                    <p className="font-serif text-2xl text-navy/60">{step.num}</p>
                    <p className="mt-1 text-base font-bold text-ink">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl bg-sky/10 p-5">
                <p className="text-sm leading-relaxed text-navy">
                  <strong className="block">Every partnership expands access.</strong>
                  Together we can bring nutritious food to more youth across the
                  country.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right — form card */}
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-10">
              <form onSubmit={onSubmit}>
                <h3 className="text-lg font-semibold text-ink">
                  1. Contact Information
                </h3>
                <hr className="mb-5 mt-3 border-border" />

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className={labelClass}>
                      Name <span className="text-sun">*</span>
                    </span>
                    <input
                      required
                      name="contactName"
                      autoComplete="name"
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className={labelClass}>
                      Organization / Company <span className="text-sun">*</span>
                    </span>
                    <input
                      required
                      name="organization"
                      autoComplete="organization"
                      className={inputClass}
                      placeholder="Organization name"
                    />
                  </label>
                  <label className="block">
                    <span className={labelClass}>
                      Email <span className="text-sun">*</span>
                    </span>
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      className={inputClass}
                      placeholder="you@example.com"
                    />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Phone</span>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      className={inputClass}
                      placeholder="(555) 555-5555"
                    />
                  </label>
                </div>

                <h3 className="mt-9 text-lg font-semibold text-ink">2. Interest</h3>
                <hr className="mb-5 mt-3 border-border" />

                <span className={labelClass}>
                  I&apos;m interested in <span className="text-sun">*</span>
                </span>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {INTEREST_OPTIONS.map((option) => {
                    const selected = interests.includes(option);
                    return (
                      <label
                        key={option}
                        className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm text-ink transition ${
                          selected
                            ? "border-sky bg-sky/10"
                            : "border-border bg-white hover:border-sky/60"
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={selected}
                          onChange={() => toggleInterest(option)}
                        />
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border-2 transition ${
                            selected ? "border-sky bg-sky" : "border-ink/25 bg-white"
                          }`}
                          aria-hidden
                        >
                          {selected ? (
                            <svg
                              className="h-3 w-3 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          ) : null}
                        </span>
                        {option}
                      </label>
                    );
                  })}
                </div>

                <h3 className="mt-9 text-lg font-semibold text-ink">3. Location</h3>
                <hr className="mb-5 mt-3 border-border" />

                <label className="block">
                  <span className={labelClass}>Location(s) of interest</span>
                  <p className="mt-1 text-xs text-ink/50">
                    Region, city, or a specific school/organization you have in
                    mind.
                  </p>
                  <input
                    name="location"
                    className={inputClass}
                    placeholder="e.g. Los Angeles, CA or a specific school district"
                  />
                </label>

                <h3 className="mt-9 text-lg font-semibold text-ink">
                  4. Additional Information
                </h3>
                <hr className="mb-5 mt-3 border-border" />

                <label className="block">
                  <span className={labelClass}>Anything else?</span>
                  <textarea
                    name="additionalInfo"
                    rows={4}
                    className={inputClass}
                    placeholder="Anything else you'd like us to know?"
                  />
                </label>

                <Button
                  variant="primary"
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-8 w-full"
                  style={{ backgroundColor: "#FF8005", color: "#fff" }}
                >
                  {status === "sending" ? "Submitting…" : "Submit interest form"}
                </Button>

                <p aria-live="polite" className="mt-4 text-center text-sm text-red-600">
                  {status === "error" ? message : null}
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
