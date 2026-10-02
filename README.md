# Kinza Khan — Portfolio

Full-stack developer portfolio built with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_WHATSAPP` | Yes | WhatsApp number in international format, no `+` or spaces (e.g. `923223091979`). |
| `LEAD_WEBHOOK_URL` | No | Webhook that also receives each lead as JSON (Zapier, Make, CRM). |
| `RESEND_API_KEY` | No | Resend API key. Without it the form still validates and logs the lead server-side. |
| `RESEND_FROM_EMAIL` | With Resend | Must be an address on a domain verified in Resend. |
| `RESEND_FROM_NAME` | No | Display name for the sender. Defaults to `Kinza Khan Portfolio`. |
| `RECEIPT_EMAIL` | No | Where submissions are delivered. Defaults to `CONTACT_EMAIL` in `lib/data.ts`. |

Contact form submissions are emailed via [Resend](https://resend.com) with a plaintext and HTML
body, and `Reply-To` set to the sender so you can answer straight from your inbox.

## Editing content

All site content lives in `lib/data.ts`:

- `PROJECTS` — case-study entries with `live` and `code` links
- `BLOG`, `BOOK` — writing and technical publication sections
- `SERVICES`, `SKILLS`, `JOURNEY`, `ABOUT` — copy and structure
- `SOCIALS` — confirmed accounts only; there are no placeholder links

## Deploying

Deploy to Vercel and set the environment variables from `.env.example` in the project settings.