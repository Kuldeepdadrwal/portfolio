import nodemailer from "nodemailer";

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, subject, message } = req.body ?? {};
  const trimmed = {
    name: String(name ?? "").trim(),
    email: String(email ?? "").trim(),
    phone: String(phone ?? "").trim(),
    subject: String(subject ?? "").trim(),
    message: String(message ?? "").trim(),
  };

  if (!trimmed.name || !trimmed.email || !trimmed.phone || !trimmed.subject || !trimmed.message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const {
    SMTP_HOST,
    SMTP_PORT = "587",
    SMTP_SECURE = "false",
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO_EMAIL,
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
    return res.status(500).json({ error: "SMTP is not configured." });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const textBody = [
    "New contact form submission",
    `Name: ${trimmed.name}`,
    `Email: ${trimmed.email}`,
    `Phone: ${trimmed.phone}`,
    `Subject: ${trimmed.subject}`,
    "Message:",
    trimmed.message,
  ].join("\n");

  const htmlBody = `
    <div style="margin:0;padding:24px;background:#f4f7fb;font-family:Arial,sans-serif;color:#111827;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e5e7eb;">
        <tr>
          <td style="padding:20px 24px;background:linear-gradient(135deg,#0f172a,#1e3a8a);color:#ffffff;">
            <h2 style="margin:0;font-size:20px;line-height:1.3;">New Portfolio Contact</h2>
            <p style="margin:8px 0 0;font-size:13px;opacity:.9;">You received a new message from your website form.</p>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 24px;">
            <p style="margin:0 0 12px;font-size:14px;"><strong>Name:</strong> ${escapeHtml(trimmed.name)}</p>
            <p style="margin:0 0 12px;font-size:14px;"><strong>Email:</strong> <a href="mailto:${escapeHtml(trimmed.email)}" style="color:#2563eb;text-decoration:none;">${escapeHtml(trimmed.email)}</a></p>
            <p style="margin:0 0 12px;font-size:14px;"><strong>Phone:</strong> ${escapeHtml(trimmed.phone)}</p>
            <p style="margin:0 0 16px;font-size:14px;"><strong>Subject:</strong> ${escapeHtml(trimmed.subject)}</p>
            <div style="padding:14px 16px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;">
              <p style="margin:0 0 8px;font-size:13px;color:#374151;"><strong>Message</strong></p>
              <p style="margin:0;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(trimmed.message)}</p>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding:14px 24px;background:#f9fafb;border-top:1px solid #e5e7eb;color:#6b7280;font-size:12px;">
            Submitted from portfolio contact form.
          </td>
        </tr>
      </table>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: trimmed.email,
      subject: `Portfolio Contact: ${trimmed.subject}`,
      text: textBody,
      html: htmlBody,
    });

    return res.status(201).json({ success: true });
  } catch {
    return res.status(502).json({ error: "Email delivery failed." });
  }
}
