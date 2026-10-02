"use server";

import { sendLeadEmail, type Lead } from "@/lib/mail";

export type LeadResult = { ok: boolean; message: string };

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

export async function sendLead(formData: FormData): Promise<LeadResult> {
  const get = (k: string) => String(formData.get(k) ?? "").trim();
  const lead: Lead = {
    name: get("name"),
    email: get("email"),
    type: get("type"),
    budget: get("budget"),
    message: get("message"),
  };

  if (!lead.name || !EMAIL_PATTERN.test(lead.email) || lead.message.length < 10) {
    return {
      ok: false,
      message: "Add your name, a valid email, and a message of at least 10 characters.",
    };
  }

  try {
    await sendLeadEmail(lead);
  } catch (err) {
    console.error("[contact] email delivery failed:", err);
  }

  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) {
    console.log("New lead:", lead);
    return { ok: true, message: "Message sent. I'll reply within 24 hours." };
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    if (!res.ok) throw new Error(String(res.status));
    return { ok: true, message: "Message sent. I'll reply within 24 hours." };
  } catch {
    return { ok: false, message: "Your message didn't send. Try WhatsApp or email instead." };
  }
}
