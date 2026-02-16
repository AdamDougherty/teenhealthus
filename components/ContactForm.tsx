"use client";

import { useState } from "react";
import { Button } from "@/components/Button";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");
      const data = (await res.json()) as { ok: boolean; message?: string };
      setStatus("sent");
      setMessage(data.message ?? "Thanks! We’ll be in touch.");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
            Name
          </span>
          <input
            required
            name="name"
            className="mt-2 w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-sun"
            placeholder="Your name"
          />
        </label>

        <label className="block">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
            Email
          </span>
          <input
            required
            type="email"
            name="email"
            className="mt-2 w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-sun"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
          How can we help?
        </span>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-2 w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-sun"
          placeholder="Tell us what you’re looking for…"
        />
      </label>

      <div className="flex items-center gap-3">
        <Button variant="primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </Button>

        <p className="text-sm text-ink/70">
          {status === "sent" ? "Sent." : status === "error" ? "Error." : null}
        </p>
      </div>

      {message ? <p className="text-sm text-ink/70">{message}</p> : null}

      <p className="text-xs text-ink/60">
        This is a starter form. Wire <code>/api/contact</code> to a real email provider.
      </p>
    </form>
  );
}
