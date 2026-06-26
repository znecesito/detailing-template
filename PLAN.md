# Detailing Template — Project Plan

## The Goal

Build a reusable auto detailing website template. Each client deployment is a fork of this repo where only `client.ts` and `/public/clients/slug/` photos change. Outreach angle: "I already built it — try it free for 30 days."

---

## Phases

### ✅ Phase 1 — Foundation
**Goal:** Repo is set up and the data contract is defined before any UI is touched.

- [x] Initialize shadcn/ui (`npx shadcn@latest init`)
- [x] Define `client.ts` — the full TypeScript type + a placeholder object with every field
- [x] Create `/public/clients/placeholder/` with sample photos
- [x] Confirm dev server runs clean

---

### ✅ Phase 2 — Design (v0.dev)
**Goal:** Get a complete, polished visual design without hand-crafting CSS.

- [x] Designed full page in v0.dev (dark theme, amber/gold accents, mobile-first)
- [x] Downloaded zip and imported all components into the repo
- [x] Confirmed it renders with placeholder data

**All 10 sections built:**
1. Header — sticky, logo left, phone + Book Now right
2. Hero — custom before/after drag slider + headline + CTA
3. Trust bar — Google rating, review count, years in business, insured
4. Services — 3 pricing cards (Basic / Full / Ceramic) with Sedan/SUV/Truck rows
5. Gallery — masonry grid, 6 photos
6. Testimonials — 3 Google review cards with stars
7. How It Works — 3 numbered steps
8. FAQ — accordion, 5 questions
9. Contact/Book — form (name, phone, vehicle type, date) + map placeholder
10. Footer — phone, hours, service area, Instagram

**Notes:**
- v0 built the before/after slider from scratch (no external library needed)
- The `field.tsx` component is a custom v0 component copied into `src/components/ui/`

---

### ✅ Phase 3 — Wire the Config
**Goal:** Every hardcoded value in the UI is replaced with a read from `client.ts`. The template is complete.

- [x] All 10 sections reading from `client.ts`
- [x] Photos wired to `/public/clients/placeholder/`
- [x] Google Maps embed shows real iframe when URL is set, fallback placeholder otherwise
- [x] Base UI button warnings fixed (`nativeButton={false}` on link-style buttons)
- [x] Dark theme + amber/gold primary color applied globally
- [x] Mobile layout confirmed via Puppeteer screenshots

**Note on forks:** When you fork per client, you can change anything — not just `client.ts`. Swap colors, add a section, remove one, change copy. The fork is fully yours. `client.ts` just handles the data so you don't have to dig through component files for basic info.

**Resend + GA4 moved to Phase 4** — both require a real client before they're useful (Resend needs a destination email, GA4 needs a per-client Measurement ID). No point wiring them now.

**Push to GitHub:** ✅ Done. Template is complete.

---

### Phase 4 — First Client Deployment
**Goal:** Ship the template for one real business end-to-end.

- [ ] Find a business via MapGrade (no website, active GBP)
- [ ] Fork the template repo on GitHub → rename to `detailing-[client-slug]`
- [ ] Fill `client.ts` with their GBP data + scraped reviews
- [ ] Replace photos in `/public/clients/placeholder/` with their real before/after + gallery shots
- [ ] Set `googleMapsEmbedUrl` in `client.ts` (Google Maps → Share → Embed → copy iframe src)
- [ ] Deploy to Vercel, assign domain (~$12/yr)
- [ ] Add `client.email` and `ga4MeasurementId` to `client.ts` for this client
- [ ] Wire contact form → Resend (send leads to `client.email`)
- [ ] Wire GA4 Measurement ID (create a property in Google Analytics, paste the ID into `client.ts`)
- [ ] Add the URL to their GBP listing
- [ ] Warm outreach (Instagram DM — comment/like first, then DM)
- [ ] Log in tracking table (Business, Domain, Live date, GBP added, Form leads, Call clicks, Follow-up date)

---

### Phase 5 — Iterate (Clients 2–9)
**Goal:** Repeat Phase 4 up to 5 businesses/month. Each client is its own forked repo.

- Template improvements go to the template repo first, then apply manually to any existing forks that need them.
- Track clients in Notion or Airtable.

---

### Phase 6 — Scale (10+ clients)
**Not yet.** At 10+ clients, convert from per-client forks to a monorepo with `/clients/[slug]` dynamic routing. Revisit this decision then.

---

## What to Replace Per Client

| Asset | Where |
|-------|-------|
| Business name, phone, address, tagline | `src/client.ts` |
| Hours, service area, Instagram handle | `src/client.ts` |
| Google rating, review count, years in business | `src/client.ts` |
| Service names, features, prices | `src/client.ts` |
| Google reviews (word for word) | `src/client.ts` |
| FAQ questions & answers | `src/client.ts` |
| Hero headline + subheadline + CTA label | `src/client.ts` |
| Google Maps embed URL | `src/client.ts` |
| Before/after photo + 6 gallery photos | `public/clients/placeholder/` → replace files |

---

## Git & GitHub Practice

### Template repo (this one)
- Lives at `github.com/znecesito/detailing-template`
- This is the upstream source of truth — never edited via a client fork
- Push improvements here first, then apply to affected client forks manually

### Per-client repos
- Fork on GitHub (UI: "Fork" button → rename to `detailing-[slug]`) → set to **private**
- Connect the fork to Vercel for deployment
- You can change anything in the fork — it's your own copy
- Client-specific changes stay in the fork and never come back to the template

### Branch strategy
- `main` = always deployable/demo-ready
- Work directly on `main` for now (no need for branches until Phase 5+)

---

## Tooling Summary

| Tool | Purpose | When |
|------|---------|------|
| v0.dev | Generate UI from a prompt | ✅ Phase 2 done |
| shadcn/ui | Component library (copied into repo) | ✅ Initialized |
| Resend | Contact form → email notification | Phase 4 (per client) |
| GA4 | Click-to-call tracking | Phase 4 (per client) |
| Vercel | Hosting (per client fork) | Phase 4 |
| Puppeteer MCP | Visual QA screenshots | ✅ Quick pass done |
| Claude Code | Wiring config, building | Throughout |
