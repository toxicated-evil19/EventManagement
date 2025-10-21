Event Management
A small Next.js + TypeScript + Tailwind project that provides an event booking and landing UI.

This repository contains a responsive front-end built with Next.js (App Router), TypeScript, and Tailwind CSS. It includes reusable UI components and a multi-step booking form.

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- PostCSS

## Prerequisites

- Node.js 18+ (recommended)
- A package manager: npm, yarn, or pnpm

## Install

Install dependencies in the project root:

```powershell
# using npm
npm install

# or using pnpm
pnpm install

# or using yarn
yarn install
```

## Development

Start the development server:

```powershell
npm run dev
# or pnpm dev
# or yarn dev
```

Open http://localhost:3000 in your browser.

## Build

```powershell
npm run build
npm run start
```

## Project structure (key files)

- `src/app/` - Next.js App Router entry points and global styles
	- `page.tsx` - homepage
	- `layout.tsx` - root layout
- `src/components/` - UI components and booking step components
	- `user-interface/` - page sections (Hero, Navbar, Footer, etc.)
	- `booking-separations/` - multi-step booking form components
	- `ui/` - small reusable primitives (button, input, card, etc.)
- `src/lib/utils.ts` - utility helpers
- `public/images/` - static images

## Development notes

- The project uses Tailwind for styling and PostCSS for processing styles.
- Components are designed to be reusable and composition-friendly.
- Booking steps are defined under `src/app/constants/bookingSteps.ts` and used by the booking flow components.

## How to contribute

1. Fork the repository and create a feature branch.
2. Implement changes and add tests where applicable.
3. Open a pull request with a clear description of the change.

## License

Specify your license here (e.g. MIT). If you don't have a license yet, add one to the repo root as `LICENSE`.

---

If you'd like, I can also:

- Add scripts to `package.json` (lint, format, test) if you'd like those included.
- Expand the README with screenshots or an architecture diagram.

Tell me what else to include and I'll update it.