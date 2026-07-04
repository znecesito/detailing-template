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
git clone git@github.com:znecesito/detailing-[slug].git ~/Documents/Coding/ai-test/DETAILING/detailing-[slug]
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

## Step 5 — Summary

Tell the user:
1. What was set up (repo URL, fields filled)
2. What still needs to be done before the site is ready to show a client:
   - Replace photos in `public/clients/placeholder/`
   - Fill in services/pricing, testimonials, FAQ in `client.ts`
   - Add logo to `public/clients/placeholder/logo.png`
   - Set `googleMapsEmbedUrl`
   - Deploy to Vercel and set `RESEND_API_KEY`
   - Set `ga4MeasurementId` (optional)
