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

#### Step 1 — Find a client
- [ ] Use MapGrade to find a detailing business with no website and an active Google Business Profile

#### Step 2 — Create client repo from template
- [ ] Go to github.com/znecesito/detailing-template → click **"Use this template"** → **"Create a new repository"**
  - (If you don't see that button: go to Settings → check "Template repository" → save — one-time setup)
- [ ] Name it `detailing-[client-slug]` (e.g. `detailing-apex-auto`)
- [ ] Set to **Private**
- [ ] Click **Create repository**
- [ ] Clone it locally: `git clone https://github.com/znecesito/detailing-[slug].git`

#### Step 3 — Fill in client.ts
Open `src/client.ts` and replace every placeholder value:
- [ ] `businessName`, `phone`, `phoneHref`, `email`, `address`, `serviceArea`, `instagramHandle`
- [ ] `hours` array — pull from their GBP listing
- [ ] `trust` — Google rating + review count from GBP, years in business, insured
- [ ] `hero` — headline, subheadline you write; images come in Step 4
- [ ] `services` — their actual package names, features, and prices
- [ ] `testimonials` — copy 3 reviews word-for-word from their Google reviews
- [ ] `howItWorks` — customize the 3 steps to their actual process
- [ ] `faq` — 5 questions relevant to their business/area
- [ ] `googleMapsEmbedUrl` — Google Maps → find their location → Share → Embed a map → copy the `src="..."` URL from the iframe code
- [ ] `ga4MeasurementId` — see Step 6 below

#### Step 4 — Replace photos
- [ ] Drop their before/after photos into `public/clients/placeholder/` as `before.png` and `after.png`
- [ ] Drop 6 gallery photos in as `gallery-1.png` through `gallery-6.png`
- [ ] (You can rename the folder from `placeholder` to `[slug]` and update paths in `client.ts` — optional but cleaner)

#### Step 5 — Set up Resend (contact form emails)
- [ ] Go to **resend.com** → create a free account → go to API Keys → create a key
- [ ] Keep the key somewhere safe — you'll need it in Vercel
- [ ] Make sure `client.email` in `client.ts` is the client's real email address (that's where booking requests get sent)
- [ ] You'll add the API key to Vercel in Step 7 — nothing to do in the code

#### Step 6 — Set up GA4 (call tracking)
- [ ] Go to **analytics.google.com** → Create → Property → fill in the business name
- [ ] Under **Data Streams** → Web → enter the site's URL → create stream
- [ ] Copy the **Measurement ID** (looks like `G-AB12CD34EF`)
- [ ] Paste it into `client.ts` → `ga4MeasurementId: "G-AB12CD34EF"`
- [ ] That's it — phone click tracking fires automatically once the ID is real

#### Step 7 — Deploy to Vercel
- [ ] Go to **vercel.com** → Add New Project → import the client's GitHub fork
- [ ] Under **Environment Variables**, add: `RESEND_API_KEY` = your key from Step 5
- [ ] Deploy
- [ ] Assign a custom domain (~$12/yr from Namecheap or similar) in Vercel → Domains

#### Step 8 — Go live
- [ ] Add the live URL to their Google Business Profile listing (Website field)
- [ ] Test the contact form end-to-end — submit it yourself and confirm you get the email
- [ ] Test click-to-call on mobile — check GA4 Real-Time to confirm the event fires

#### Step 9 — Outreach
- [ ] Warm up on Instagram: follow their account, like 2–3 recent posts
- [ ] DM: "Hey — I'm a web developer and I actually built a site for your business already. It's live and showing your Google reviews. Want to see it? Happy to give you 30 days free."
- [ ] Log the client in your tracking table: Business, Domain, Live date, GBP added, Form leads, Call clicks, Follow-up date

---

### Phase 5 — Iterate (Clients 2–9)
**Goal:** Repeat Phase 4 up to 5 businesses/month. Each client is its own repo created from the template.

- Template improvements go to the template repo first, then apply manually to any existing client repos that need them.
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
- Use the template: github.com/znecesito/detailing-template → **"Use this template"** → **"Create a new repository"** → private
  - Note: GitHub doesn't allow forking your own repo to the same account — "Use this template" is the correct approach
- Connect the new repo to Vercel for deployment
- You can change anything in the client repo — it's a fully independent copy
- Client-specific changes stay in the client repo and never come back to the template

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
