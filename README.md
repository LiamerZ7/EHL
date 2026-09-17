# Emotional Health for Longevity

Interactive companion to the Emotional Health for Longevity framework, presentation and workbook.

Live website: https://emotional-health-practice.liamerz.chatgpt.site

## Features

- Four pillars: social health, emotional intelligence, generative drive and purpose.
- Ten practical exercises per pillar, plus integration and weekly reflection exercises.
- Guided breathing timer, personal action plans and seven-day practice tracking.
- Signed-in users can save and delete reflections and mark planned actions complete.
- Founder profile and portrait for Liam Maher, Health Promotion Lead.
- Responsive navy and gold interface, with UK English content.

## Technical overview

React 19 and TypeScript with a Vinext/Vite build, Cloudflare Workers and D1 SQLite. The UI uses Radix components and Lucide icons. Database schema and migrations are included in `db/` and `drizzle/`.

Use Node.js 22.13 or newer and the pnpm version pinned in `package.json`.

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

To build the application:

```sh
pnpm build
```

The hosted application uses the Sites platform for deployment, a D1 binding named `DB`, and ChatGPT sign-in. `app/chatgpt-auth.ts` reads identity headers supplied by that trusted platform. A standalone deployment must implement trusted authentication and database provisioning before enabling saved progress; it must never trust arbitrary client-supplied identity headers. Without a signed-in identity, visitors can explore content but cannot save entries.

## Source map

- `app/content.ts`: framework explanations and exercise library.
- `app/companion.tsx`: interactive application and founder profile.
- `app/globals.css`: visual styling and responsive layouts.
- `app/api/entries/route.ts`: account-scoped history and action API.
- `public/liam-maher.jpg`: founder portrait.
- `.openai/hosting.json`: existing Sites project and logical runtime bindings.

This repository contains application source and assets, not participants' saved reflections or production data. Pushing to GitHub alone does not update the existing hosted site; publication is a separate step.
