---
name: testing-athiya-app
description: Test the Athiya Developers real estate app end-to-end. Use when verifying UI changes, project detail pages, or slideshow/marquee behavior.
---

# Testing the Athiya Developers App

## Tech Stack
- React 19 + TypeScript + Vite 8 + Tailwind CSS 4
- React Router DOM for routing
- Framer Motion for animations
- No backend — static data in `src/data/projects.ts`

## Local Dev Setup
```bash
cd /home/ubuntu/project1
npm install
npm run dev
# or: npx vite --host 0.0.0.0 --port 5173
# Note: if ports are in use, Vite auto-picks the next available port
```

## Build & Lint
```bash
npm run build   # tsc -b && vite build
npm run lint    # eslint .
```

## Vercel Preview
- Vercel deploys previews automatically on PRs
- Preview may be SSO-protected (returns 401). If so, test locally instead.
- Preview URL pattern: `project1-git-<branch>-swar-s-projects1.vercel.app`

## App Structure
- `/` — Homepage with Hero, Projects marquee slideshow, About section
- `/project/:id` — Project detail page
- `/admin` — Admin dashboard placeholder

## Key Components
- `src/components/sections/ProjectsSection.tsx` — Marquee slideshow of project cards
- `src/pages/ProjectDetailPage.tsx` — Detail page with Key Features & Amenities
- `src/data/projects.ts` — All project data (static)
- `src/types/content.ts` — TypeScript types for projects

## Testing the Marquee/Slideshow
- The project cards auto-scroll in a marquee animation
- Hover over the marquee to pause the animation (CSS `animation-play-state: paused`)
- Each card has a "View Details" link that navigates to `/project/:id`

## Testing Project Detail Pages
- Navigate directly via URL: `http://localhost:<port>/project/<project-id>`
- Valid project IDs: `maha-mumbai-hub`, `green-valley-heights`, `athiya-business-park`, `riverside-residencies`, `the-farm-dale`, `dapoli-712`
- Invalid IDs show a "Project Not Found" page with a back link
- Check that the "Back to Projects" link returns to `/`

## Common Issues
- Apostrophes in data strings (e.g. "Children's") must use double quotes in `.ts` files
- Vite 8 may need Node 22+; the environment has Node 22.12.0
- Multiple ports may be in use; check Vite output for actual port number

## Devin Secrets Needed
None required for local testing. Vercel preview access may require SSO credentials.
