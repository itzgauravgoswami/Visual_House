# Visual House — Frontend Application

This directory contains the client-side web application for Visual House, built using Next.js 16 (App Router), React 19, Tailwind CSS v4, and Framer Motion.

For overall project architecture, monorepo instructions, and full guidelines, refer to the root [README.md](../README.md).

---

## Directory Overview

- `public/`: Static files, favicon, SVGs, brand assets, and the 300-frame preloader sequence (`/frames`).
- `src/app/`: Next.js App Router pages, global styling (`globals.css`), root metadata, and layout wrapper (`layout.js`).
  - `/about`: Studio story, creative philosophy, values, and leadership statistics.
  - `/contact`: Interactive project discovery form and discovery booking flow.
  - `/services`: Deep dive into agency practices, deliverables, and capabilities.
  - `/work`: Interactive, filterable portfolio showcase.
- `src/components/`: Reusable presentation and interactive UI components.
- `src/lib/`: Helper utilities (e.g., class merge helpers).

---

## Getting Started

### Prerequisites

- Node.js v18.18.0 or higher
- npm v9.0.0 or higher

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`.

---

## Available Scripts

- `npm run dev`: Runs Next.js with hot reload on port 3000.
- `npm run build`: Compiles production assets and optimizes static pages.
- `npm run start`: Starts the production server.
- `npm run lint`: Executes ESLint code quality checks.

---

## Key Technologies

- **Framework**: Next.js 16 (App Router, Server Components)
- **Library**: React 19
- **Styling**: Tailwind CSS v4, CSS Variables
- **Motion**: Framer Motion 13
- **Icons**: Lucide React
- **Typography**: Newsreader (Serif), Geist Sans, Geist Mono
- **Canvas Animations**: HTML5 Canvas with frame preloading and dynamic DPI scaling
