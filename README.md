# Just Churchy — Landing Page & Consultation Funnel

A landing page and consultation booking funnel for **Just Churchy**, built with Next.js 16, TypeScript, Tailwind CSS 4, and Framer Motion.

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Landing | `/` | Main landing page with profile, resource cards, social links, and email opt-in |
| Team Advantage | `/` (state) | Team-building resource page with email capture |
| Productivity Stack | `/` (state) | Free productivity tools page with email capture |
| Consultation | `/` (state) | 4-step booking flow — overview, calendar, payment, confirmation |

## Design

- **Background**: Black (`#000000`)
- **Accent**: Orange (`#F97316`)
- **Typography**: Montserrat
- **Fully responsive** — mobile-first layout

## Tech Stack

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — page transitions and animations
- [Lucide React](https://lucide.dev/) — icons

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy on Vercel

This project is ready for [Vercel](https://vercel.com/) deployment:

1. Push this repo to GitHub
2. Import the repo in Vercel
3. Deploy — no extra configuration needed

## Project Structure

```
├── public/
│   └── profile.png          # Profile photo
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles + CSS variables
│   │   ├── layout.tsx       # Root layout with Montserrat font
│   │   └── page.tsx         # All pages (landing, team, productivity, consultation)
│   └── lib/
│       └── utils.ts         # Utility functions
├── next.config.ts           # Next.js config
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Notes

- This is a **demo/prototype** — the consultation booking form is a UI mockup. In production, connect it to [Systeme.io](https://systeme.io/) for real calendar booking, payment processing, and email automation.
- The profile photo (`/public/profile.png`) should be replaced with the client's actual photo.
