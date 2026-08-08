import { NextResponse } from "next/server";
import { getTransporter, buildContactEmail, type ContactPayload } from "@/lib/email";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Partial<ContactPayload> & { website?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot — real users never fill this hidden field.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });
  }

  const payload: ContactPayload = {
    name,
    email,
    message,
    company: body.company?.trim(),
    phone: body.phone?.trim(),
    budget: body.budget?.trim(),
  };

  const toAddress = process.env.CONTACT_TO_EMAIL;
  if (!toAddress) {
    console.error("CONTACT_TO_EMAIL is not configured");
    return NextResponse.json(
      { ok: false, error: "The contact form isn't configured yet. Please email us directly." },
      { status: 500 }
    );
  }

  try {
    const transporter = getTransporter();
    const { text, html } = buildContactEmail(payload);

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: toAddress,
      replyTo: payload.email,
      subject: `New inquiry from ${payload.name}`,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json(
      { ok: false, error: "The contact form isn't configured yet. Please email us directly." },
      { status: 500 }
    );
  }
}
