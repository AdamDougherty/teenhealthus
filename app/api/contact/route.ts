import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(req: Request) {
  let payload: Payload | null = null;

  try {
    payload = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON" }, { status: 400 });
  }

  const name = (payload?.name ?? "").toString().trim();
  const email = (payload?.email ?? "").toString().trim();
  const message = (payload?.message ?? "").toString().trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, message: "Missing required fields." },
      { status: 400 }
    );
  }

  // Starter behavior:
  // In production, forward to an email provider (Resend/SendGrid/SES) or a ticketing system.
  // Never log sensitive info in production logs.
  console.log("[contact] message received", { name, email, messageLength: message.length });

  return NextResponse.json({
    ok: true,
    message: "Thanks — we received your message (starter endpoint).",
  });
}
