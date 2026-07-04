You are setting up a new detailing client website from the template. Work through these steps in order, pausing for user input where indicated.

## Step 1 — Client slug

Ask the user: "What's the client slug? (lowercase, no spaces — e.g. `newlifesupreme` → repo will be named `detailing-newlifesupreme`)"

## Step 2 — Create and clone the repo

Run these two commands, waiting for each to succeed before continuing:

```bash
gh repo create detailing-[slug] --template znecesito/detailing-template --private
```

Then clone into the DETAILING folder:

```bash
git clone https://github.com/znecesito/detailing-[slug].git ~/Documents/Coding/ai-test/DETAILING/detailing-[slug]
```

If either command fails, stop and report the error.

## Step 3 — Gather client info

Ask the user for the following in one go (tell them to share whatever they have — they can skip anything they don't know yet):

- Business name
- Phone — display format (e.g. `(555) 012-3456`) and raw format for tel: link (e.g. `+15550123456`)
- Booking email (remind them: use their own email during the trial period, swap to client's later)
- Address / city
- Service area (e.g. "Greater Phoenix Area")
- Instagram handle (without @)
- Google rating (e.g. 4.9) and number of reviews
- Years in business
- Insured? (yes/no)
- Notification email — the owner's email for BCC on every booking (this never changes)

## Step 4 — Fill in client.ts

Edit `~/Documents/Coding/ai-test/DETAILING/detailing-[slug]/src/client.ts` with the values provided. Only update the fields the user gave you — leave everything else as the placeholder values (logo, hero images, gallery, services/pricing, testimonials, howItWorks, FAQ, googleMapsEmbedUrl, ga4MeasurementId).

For `tagline` and `hero.headline` / `hero.subheadline`: generate reasonable placeholder copy from the business name and service area if the user didn't provide them. They can be overridden later.

## Step 5 — Write CLAUDE.md

Overwrite `~/Documents/Coding/ai-test/DETAILING/detailing-[slug]/CLAUDE.md` with the following structure (fill in the actual client values):

```
@AGENTS.md

# [Business Name] — Client Site

This is a client deployment of the detailing template (github.com/znecesito/detailing-template). It is NOT the template itself — changes here are client-specific and do not flow back.

## How this works

`src/client.ts` is the single file that controls everything — business name, phone, prices, reviews, photos, hours, FAQ, all of it. Every component reads from it. To customize the site, edit `client.ts` only.

## Brand color

Three lines in `src/app/globals.css` inside the `.dark` block: `--primary`, `--accent`, and `--ring`. All three use the same `oklch()` value. Change all three to match the client's brand.

## What's been filled in

[List the fields that were actually filled in from the info provided]

## Still needs doing

- [ ] Hours (update from placeholder in client.ts)
- [ ] Services & pricing (3 tiers)
- [ ] Testimonials (pull from their Google reviews)
- [ ] FAQ (customize for this business)
- [ ] Photos → replace everything in `public/clients/placeholder/`
- [ ] Logo → `public/clients/placeholder/logo.png`
- [ ] `googleMapsEmbedUrl` → Google Maps → Share → Embed → copy src
- [ ] Deploy to Vercel + set `RESEND_API_KEY` env var
- [ ] Brand color → update `globals.css`
- [ ] `ga4MeasurementId` (optional)
```

## Step 6 — Write project memory

Determine the memory directory path by converting the repo path to a slug:
`/Users/znecesito/Documents/Coding/ai-test/DETAILING/detailing-[slug]` → `-Users-znecesito-Documents-Coding-ai-test-DETAILING-detailing-[slug]`

Create the memory directory:
```bash
mkdir -p ~/.claude/projects/-Users-znecesito-Documents-Coding-ai-test-DETAILING-detailing-[slug]/memory
```

Write `~/.claude/projects/-Users-znecesito-Documents-Coding-ai-test-DETAILING-detailing-[slug]/memory/project.md`:

```
---
name: project
description: "Context for the [Business Name] client site — what it is, what's done, what's left"
metadata:
  type: project
---

This is a client deployment of the auto detailing website template (github.com/znecesito/detailing-template). The owner (Zack) builds these sites for detailing businesses with no web presence, deploys them, then reaches out with a 30-day free trial offer.

**Why:** Location-first discovery, high margins, solo operators who need leads but can't build sites themselves.

## Client Details

[Fill in all the details provided by the user]

## How the template works

`src/client.ts` is the single config file — every component reads from it. Brand color is three `oklch()` values in `src/app/globals.css` (`.dark` block: `--primary`, `--accent`, `--ring`).

## Status

**Done:** [list filled fields]

**Still needed:**
- Hours (update placeholder in client.ts)
- Services & pricing (3 tiers)
- Testimonials (from their Google reviews)
- FAQ
- Photos → `public/clients/placeholder/`
- Logo → `public/clients/placeholder/logo.png`
- `googleMapsEmbedUrl`
- Brand color → `globals.css`
- Deploy to Vercel + `RESEND_API_KEY`
- `ga4MeasurementId` (optional)
```

Write `~/.claude/projects/-Users-znecesito-Documents-Coding-ai-test-DETAILING-detailing-[slug]/memory/MEMORY.md`:

```
# Memory Index

- [Project](project.md) — [Business Name] client site — what's done, what's left, client details
```

## Step 7 — Summary

Tell the user:
1. What was set up (repo URL, fields filled)
2. Confirm that CLAUDE.md and memory are written so the new session will have full context
3. What still needs to be done before the site is ready to show a client:
   - Hours in client.ts
   - Services/pricing, testimonials, FAQ in client.ts
   - Photos + logo in `public/clients/placeholder/`
   - `googleMapsEmbedUrl`
   - Deploy to Vercel + `RESEND_API_KEY`
   - Brand color in `globals.css`
   - `ga4MeasurementId` (optional)
