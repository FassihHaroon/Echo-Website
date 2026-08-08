import nodemailer from "nodemailer";

export function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP environment variables are not configured");
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

export type ContactPayload = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  budget?: string;
  message: string;
};

export function buildContactEmail(payload: ContactPayload) {
  const rows: [string, string][] = [
    ["Name", payload.name],
    ["Company", payload.company || "—"],
    ["Email", payload.email],
    ["Phone", payload.phone || "—"],
    ["Budget", payload.budget || "—"],
  ];

  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    payload.message,
  ].join("\n");

  const html = `
    <div style="font-family: sans-serif; color: #111;">
      <h2 style="margin: 0 0 16px;">New inquiry from ${escapeHtml(payload.name)}</h2>
      <table cellpadding="4" cellspacing="0">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="color:#666;padding-right:12px;">${escapeHtml(label)}</td><td>${escapeHtml(value)}</td></tr>`
          )
          .join("")}
      </table>
      <p style="margin-top:16px;white-space:pre-wrap;">${escapeHtml(payload.message)}</p>
    </div>
  `;

  return { text, html };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
