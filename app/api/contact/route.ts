import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const FORM_LABELS: Record<string, string> = {
  volunteer: "Volunteer signup",
  "product-donation": "Brand partner inquiry",
  contact: "Contact form",
  "yni-interest": "Youth Nutrition Initiative interest",
};

const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  firstName: "First name",
  lastName: "Last name",
  contactName: "Contact name",
  email: "Email",
  phone: "Phone",
  company: "Company",
  organization: "Organization",
  role: "Role",
  website: "Website",
  message: "Message",
  interest: "Area of interest",
  interests: "Interested in",
  location: "Location(s) of interest",
  additionalInfo: "Additional information",
  availability: "Availability",
  ageConfirmation: "Confirmed 18 or older",
  formType: "Form",
};

function humanize(key: string): string {
  if (FIELD_LABELS[key]) return FIELD_LABELS[key];
  return key
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  let payload: Record<string, unknown> | null = null;

  try {
    payload = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON" }, { status: 400 });
  }

  const entries = Object.entries(payload ?? {}).map(([k, v]) => [k, String(v ?? "").trim()] as const);
  const fields = Object.fromEntries(entries);

  const firstName = fields.firstName ?? "";
  const lastName = fields.lastName ?? "";
  const name =
    fields.name ||
    fields.contactName ||
    [firstName, lastName].filter(Boolean).join(" ");
  const email = fields.email ?? "";
  const formType = fields.formType ?? "contact";

  if (!name || !email) {
    return NextResponse.json(
      { ok: false, message: "Name and email are required." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Please provide a valid email." },
      { status: 400 }
    );
  }

  const totalLength = entries.reduce((sum, [, v]) => sum + v.length, 0);
  if (totalLength > 20000) {
    return NextResponse.json(
      { ok: false, message: "Submission too large." },
      { status: 400 }
    );
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error("[contact] missing email config", {
      hasApiKey: !!apiKey,
      hasTo: !!toEmail,
      hasFrom: !!fromEmail,
    });
    return NextResponse.json(
      { ok: false, message: "Email service is not configured." },
      { status: 500 }
    );
  }

  const label = FORM_LABELS[formType] ?? "Website submission";
  const subject = `${label} — ${name}`;

  const displayEntries = entries.filter(([k, v]) => k !== "formType" && v.length > 0);

  const textBody = [
    `New ${label.toLowerCase()} from teenhealthus.org`,
    "",
    ...displayEntries.map(([k, v]) => `${humanize(k)}: ${v}`),
  ].join("\n");

  const htmlBody = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;font-size:15px;color:#222;">
      <p style="margin:0 0 16px;">New <strong>${escapeHtml(label.toLowerCase())}</strong> from teenhealthus.org</p>
      <table style="border-collapse:collapse;">
        ${displayEntries
          .map(
            ([k, v]) => `
          <tr>
            <td style="padding:6px 12px 6px 0;vertical-align:top;color:#666;white-space:nowrap;">${escapeHtml(humanize(k))}</td>
            <td style="padding:6px 0;vertical-align:top;white-space:pre-wrap;">${escapeHtml(v)}</td>
          </tr>`
          )
          .join("")}
      </table>
    </div>
  `;

  sgMail.setApiKey(apiKey);

  try {
    const [response] = await sgMail.send({
      to: toEmail,
      from: fromEmail,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    });
    console.log(
      `[contact] sent formType=${formType} email=${email} status=${response.statusCode} msgId=${response.headers["x-message-id"] ?? "?"}`
    );
  } catch (err) {
    const detail = err instanceof Error ? err.message : "unknown error";
    const body =
      err && typeof err === "object" && "response" in err
        ? JSON.stringify((err as { response?: { body?: unknown } }).response?.body)
        : "";
    console.error("[contact] sendgrid error:", detail, body);
    return NextResponse.json(
      { ok: false, message: "Could not send your message. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, message: "Thanks — we received your message." });
}
