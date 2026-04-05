import nodemailer from "nodemailer";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function normalizeSmtpPass(pass: string) {
  return pass.trim().replace(/\s+/g, "");
}

export async function sendContactEmail(payload: {
  name: string;
  email: string;
  message: string;
}) {
  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT) || 587;
  const secure =
    process.env.SMTP_SECURE === "true" ||
    (!process.env.SMTP_SECURE && port === 465);
  const user = process.env.SMTP_USER?.trim();
  const passRaw = process.env.SMTP_PASS;
  const pass = passRaw ? normalizeSmtpPass(passRaw) : "";
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const from = (process.env.SMTP_FROM?.trim() || user) ?? "";

  if (!host || !user || !pass || !to) {
    throw new Error("Missing SMTP configuration");
  }

  const useGmailPreset =
    process.env.SMTP_SERVICE === "gmail" ||
    host === "smtp.gmail.com" ||
    host === "smtp.googlemail.com";

  const transporter = useGmailPreset
    ? nodemailer.createTransport({
        service: "gmail",
        auth: { user, pass },
      })
    : nodemailer.createTransport({
        host,
        port,
        secure,
        auth: { user, pass },
        ...(port === 587 && !secure ? { requireTLS: true } : {}),
      });

  const { name, email, message } = payload;

  await transporter.sendMail({
    from: `"Portfolio" <${from}>`,
    to,
    replyTo: `${name} <${email}>`,
    subject: `Portfolio: message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
    html: `<p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
  });
}
