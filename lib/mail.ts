import { Resend } from "resend";
import { CONTACT_EMAIL, PROFILE_NAME } from "@/lib/data";

export interface Lead {
  name: string;
  email: string;
  type: string;
  budget: string;
  message: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildHtml(lead: Lead): string {
  const name = escapeHtml(lead.name);
  const email = escapeHtml(lead.email);
  const type = escapeHtml(lead.type);
  const budget = escapeHtml(lead.budget);
  const message = escapeHtml(lead.message);

  return `
    <div style="margin:0;padding:24px;background:#0B0D0C;border-radius:14px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
      <div style="max-width:560px;margin:0 auto;">
        <p style="margin:0 0 18px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#B7F34A;">New portfolio enquiry</p>
        <h1 style="margin:0 0 22px;font-size:21px;line-height:1.35;color:#F4F5F2;">New lead from ${name}</h1>
        <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:10px 0;border-top:1px solid rgba(255,255,255,.08);font-size:13px;color:#A6ADA7;width:110px;">Name</td>
            <td style="padding:10px 0;border-top:1px solid rgba(255,255,255,.08);font-size:14px;color:#F4F5F2;">${name}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-top:1px solid rgba(255,255,255,.08);font-size:13px;color:#A6ADA7;">Email</td>
            <td style="padding:10px 0;border-top:1px solid rgba(255,255,255,.08);font-size:14px;">
              <a href="mailto:${email}" style="color:#C8FF69;text-decoration:none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-top:1px solid rgba(255,255,255,.08);font-size:13px;color:#A6ADA7;">Project</td>
            <td style="padding:10px 0;border-top:1px solid rgba(255,255,255,.08);font-size:14px;color:#F4F5F2;">${type}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-top:1px solid rgba(255,255,255,.08);font-size:13px;color:#A6ADA7;">Budget</td>
            <td style="padding:10px 0;border-top:1px solid rgba(255,255,255,.08);font-size:14px;color:#F4F5F2;">${budget}</td>
          </tr>
        </table>
        <div style="margin-top:20px;padding:16px 18px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.08);border-radius:12px;">
          <p style="margin:0 0 8px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#A6ADA7;">Message</p>
          <p style="margin:0;font-size:14px;line-height:1.65;color:#F4F5F2;white-space:pre-wrap;">${message}</p>
        </div>
        <p style="margin:22px 0 0;font-size:12px;color:#707872;">Reply directly to ${email} to answer this enquiry.</p>
      </div>
    </div>
  `;
}

function buildText(lead: Lead): string {
  return [
    `New portfolio enquiry from ${lead.name}`,
    "",
    `Name:    ${lead.name}`,
    `Email:   ${lead.email}`,
    `Project: ${lead.type}`,
    `Budget:  ${lead.budget}`,
    "",
    "Message:",
    lead.message,
    "",
    `Reply directly to ${lead.email} to answer this enquiry.`,
  ].join("\n");
}

export async function sendLeadEmail(lead: Lead): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not set");

  const resend = new Resend(apiKey);

  // The From address must use a domain verified in Resend.
  const fromName = process.env.RESEND_FROM_NAME ?? `${PROFILE_NAME} Portfolio`;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  if (!fromEmail) throw new Error("RESEND_FROM_EMAIL is not set");

  const to = process.env.RECEIPT_EMAIL ?? CONTACT_EMAIL;

  const { error } = await resend.emails.send({
    from: `${fromName} <${fromEmail}>`,
    to,
    replyTo: lead.email,
    subject: `New lead: ${lead.name} — ${lead.type}`,
    html: buildHtml(lead),
    text: buildText(lead),
  });

  if (error) throw new Error(error.message);
}