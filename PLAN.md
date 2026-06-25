# Detailing Template — Project Plan

## The Goal

Build a reusable auto detailing website template. Each client deployment is a fork of this repo where only `client.ts` and `/public/clients/slug/` photos change. Outreach angle: "I already built it — try it free for 30 days."

---

## Phases

### Phase 1 — Foundation
**Goal:** Repo is set up and the data contract is defined before any UI is touched.

- [ ] Initialize shadcn/ui (`npx shadcn@latest init`)
- [ ] Define `client.ts` — the full TypeScript type + a placeholder object with every field
- [ ] Create `/public/clients/placeholder/` with sample photos
- [ ] Confirm dev server runs clean

**Push to GitHub:** Yes — end of Phase 1 is the first push. The schema is the foundation everything else depends on.

---

### Phase 2 — Design (v0.dev)
**Goal:** Get a complete, polished visual design without hand-crafting CSS.

- [ ] Open v0.dev and prompt for the full page (dark theme, before/after hero, 3-tier pricing, shadcn/ui, Next.js, mobile-first)
- [ ] Iterate in v0 until all 10 sections look right
- [ ] Copy the generated component code into the repo
- [ ] Confirm it renders with placeholder data

**10 sections to cover:**
1. Header — logo, phone (tap-to-call), "Book Now" CTA
2. Hero — before/after slider (`react-compare-slider`) + headline + CTA
3. Trust bar — Google rating, review count, years in business, insured badge
4. Services — 3 package cards (Basic / Full / Ceramic) with per-vehicle-size pricing
5. Gallery — 6–12 photos, masonry grid
6. Testimonials — 3 real Google reviews, stars prominent
7. How It Works — 3 steps
8. FAQ — 5 questions
9. Contact/Book — form (name, phone, vehicle type, date) + Google Maps embed
10. Footer — phone, hours, service area, Instagram

**Push to GitHub:** Yes — after v0 code is pasted and confirmed rendering.

---

### Phase 3 — Wire the Config
**Goal:** Every hardcoded value in the UI is replaced with a read from `client.ts`. The template is complete.

- [ ] Replace all hardcoded text, links, phone numbers, etc. with `client.ts` values
- [ ] Wire photos to `/public/clients/slug/`
- [ ] Wire Google Maps embed to client address
- [ ] Wire contact form → Resend (free tier, 3k emails/month)
- [ ] Wire click-to-call → GA4 event
- [ ] Visual QA: Puppeteer MCP screenshots at mobile + desktop breakpoints

**Push to GitHub:** Yes — this is the "template complete" milestone. Tag it `v1.0`.

---

### Phase 4 — First Client Deployment
**Goal:** Ship the template for one real business end-to-end.

- [ ] Find a business via MapGrade (no website, active GBP)
- [ ] Fork the template repo on GitHub → rename to `detailing-[client-slug]`
- [ ] Fill `client.ts` with their GBP data + scraped reviews
- [ ] Add their before/after photos to `/public/clients/[slug]/`
- [ ] Deploy to Vercel, assign domain (~$12/yr)
- [ ] Add the URL to their GBP listing
- [ ] Warm outreach (Instagram DM — comment/like first, then DM)
- [ ] Log in tracking table (Business, Domain, Live date, GBP added, Form leads, Call clicks, Follow-up date)

---

### Phase 5 — Iterate (Clients 2–9)
**Goal:** Repeat Phase 4 up to 5 businesses/month. Each client is its own forked repo.

- If the template needs a fix or improvement, make it in the template repo and note it — don't push template changes via a client fork.
- Track in Notion or Airtable.

---

### Phase 6 — Scale (10+ clients)
**Not yet.** At 10+ clients, convert from per-client forks to a monorepo with `/clients/[slug]` dynamic routing. Revisit this decision then.

---

## Git & GitHub Practice

### Template repo (this one)
- Lives at `github.com/znecesito/detailing-template`
- Push after each phase milestone
- This is the upstream source of truth — never edited via a client fork

### Per-client repos
- Fork the template repo on GitHub (UI: "Fork" button → rename to `detailing-[slug]`)
- Each fork gets its own Vercel deployment connected to that GitHub repo
- Client-specific changes (client.ts, photos) stay in the fork — they never come back to the template
- If you discover a template bug while working on a client fork, fix it in the template repo and manually apply the same fix to the client fork (or re-fork after fixing the template)

### Branch strategy (template repo)
- `main` = always deployable/demo-ready
- Do feature work directly on `main` for now (solo project, no need for branches until Phase 5+)

---

## Tooling Summary

| Tool | Purpose | When |
|------|---------|------|
| v0.dev | Generate UI from a prompt | Phase 2 |
| shadcn/ui | Component library (copied into repo) | Phase 1 init, then as needed |
| `react-compare-slider` | Before/after hero | Phase 2/3 |
| Resend | Contact form → email | Phase 3 |
| GA4 | Click-to-call tracking | Phase 3 |
| Vercel | Hosting (per client fork) | Phase 4 |
| Puppeteer MCP | Visual QA screenshots | Phase 3 |
| Claude Code | Wiring config, building | Throughout |
