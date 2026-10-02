# Detailing Template

A production-ready auto detailing website template. Find a detailing business with no web presence, create a repo from this template, fill in `src/client.ts`, swap the photos, and deploy. Pitch a 30-day free trial.

## Quick start

```bash
npm install
npm run dev
```

## Per-client setup

1. **Use this template** on GitHub to create a private client repo
2. Clone the new repo locally
3. Edit `src/client.ts` — all business data lives here (name, phone, hours, services, testimonials, etc.)
4. Drop photos into `public/clients/placeholder/` (`before.png`, `after.png`, `gallery-1.png` through `gallery-6.png`)
5. Add `RESEND_API_KEY` env var in Vercel
6. Set `ga4MeasurementId` in `client.ts` from Google Analytics
7. Deploy to Vercel, assign a custom domain

See `PLAN.md` for the full step-by-step deployment checklist.

## Stack

- Next.js 16 (App Router) — React 19, TypeScript
- Tailwind v4 + tw-animate-css
- shadcn/ui (base-ui)
- Resend (contact form emails)
- GA4 (click-to-call + form submit tracking)

## What's in the template

- Sticky header with logo and click-to-call
- Hero with before/after drag slider + entrance stagger animation
- Signature foam/suds windshield wiper animation (desktop)
- Trust bar with animated count-up (Google rating, reviews, years in business)
- Services & pricing — 3 tiers with Sedan / SUV / Truck rows
- Gallery — 6 photos, eager/lazy loading
- Testimonials — scroll-reveal cards
- How It Works — 3 steps
- FAQ — accordion
- Contact/booking form with validation
- Footer with hours, service area, Instagram

## Automation

The `/new-client` Claude Code skill automates repo creation, cloning, and client data entry. Run it with `/new-client` from the template directory in a Claude Code session.
<!-- git connectivity test: 2026-10-01 -->
