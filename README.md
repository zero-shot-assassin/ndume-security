# Ndume Security — Official Website

> **"Guarding What Matters Most"**
> Kenya's professional private security company website — built with React + Tailwind CSS.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 5 | Build tool & dev server |
| Tailwind CSS 3 | Styling |
| React Router 6 | Client-side routing |
| Lucide React | Icons |

---

## Pages

| Route | Page |
|---|---|
| `/` | Home (Hero, Services, Trust Indicators, Testimonials, FAQ, CTA) |
| `/about` | About Us (Story, Mission/Vision/Values, Leadership, Milestones) |
| `/services` | Services (7 detailed service sections) |
| `/industries` | Industries (5 sector pages with challenges & solutions) |
| `/contact` | Contact (Quote form, Contact form, Map, Office info) |
| `/careers` | Careers (6 job listings, Application form) |

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser at http://localhost:5173
```

---

## Production Build

```bash
npm run build
# Output in ./dist folder
```

---

## Deploy to Netlify

### Option A – Netlify CLI

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir dist
```

### Option B – Netlify Dashboard (Drag & Drop)

1. Run `npm run build`
2. Go to [app.netlify.com](https://app.netlify.com)
3. Drag the `dist/` folder onto the Netlify dashboard
4. Your site is live instantly

### Option C – Git Integration (Recommended)

1. Push this repo to GitHub
2. Log in to [app.netlify.com](https://app.netlify.com) → **New site from Git**
3. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy site**

> The `public/_redirects` file is already included to handle React Router's client-side routing on Netlify.

---

## Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

Or connect via [vercel.com](https://vercel.com) → **Import Git Repository**.

> Add a `vercel.json` with rewrites if needed for SPA routing.

---

## Brand Assets

- **Company Name:** Ndume Security
- **Tagline:** Guarding What Matters Most
- **Colour Palette:**
  - Navy (Primary): `#0d1b4b`
  - Gold (Accent): `#c9a84c`
  - Dark BG: `#060d21`
- **Fonts:** Montserrat (headings), Inter (body)
- **PSRA Licence:** PSRA/2008/0471 *(mock — update before launch)*

---

## Contact Details (Mock — Update Before Launch)

- **Address:** 7th Floor, Westlands Commerce Centre, Waiyaki Way, Westlands, Nairobi
- **Phone:** +254 725 290 785 / +254 733 456 789
- **Email:** info@ndumesecurity.co.ke
- **Emergency Line:** +254 725 290 785 (24/7)

---

## Pre-Launch Checklist

- [ ] Replace all mock phone numbers and emails
- [ ] Update PSRA licence number
- [ ] Replace Unsplash images with real photography
- [ ] Connect contact forms to a backend (e.g. Netlify Forms, Formspree, or custom API)
- [ ] Add Google Analytics / Meta Pixel
- [ ] Update Google Maps embed with actual office coordinates
- [ ] Register domain: `ndumesecurity.co.ke`

---

*© 2025 Ndume Security Limited. All rights reserved.*
# ndume-security
