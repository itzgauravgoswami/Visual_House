# Visual House

A luxury digital creative studio and full-service agency platform engineered with Next.js, React, Tailwind CSS, Framer Motion, and Express. Visual House delivers high-converting digital products, cinematic video editing, custom brand identity systems, motion graphics, and viral social media assets for high-growth global brands.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Architecture & Tech Stack](#architecture--tech-stack)
  - [Frontend Architecture](#frontend-architecture)
  - [Backend Architecture](#backend-architecture)
- [Project Directory Structure](#project-directory-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Configuration](#environment-configuration)
  - [Running Development Servers](#running-development-servers)
- [Available Scripts](#available-scripts)
- [Design System & Aesthetics](#design-system--aesthetics)
- [Performance & Engineering Highlights](#performance--engineering-highlights)
- [SEO, Metadata & Accessibility](#seo-metadata--accessibility)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)
- [Author & Contact](#author--contact)

---

## Overview

Visual House is designed to showcase creative capability with an editorial luxury aesthetic. Built on a monorepo foundation, the platform integrates high-performance motion graphics, custom canvas-based sequence animations, and an interactive multi-page structure.

The client layer leverages Next.js App Router, React 19, and Tailwind CSS v4, delivering sub-second page transitions, dynamic ambient lighting effects, and conversion-optimized inquiry flows.

---

## Key Features

- **Cinematic Canvas Frame Sequence Intro**: A custom 300-frame canvas engine featuring real-time image preloading, progress tracking, high-DPI resolution scaling, and responsive cover rendering with skip functionality.
- **Ambient Lighting & Atmospheric Effects**: Dynamic multi-layer gradient orbs, animated ambient light sweeps, moving grid geometry, and floating particle dust systems powered by Framer Motion.
- **Editorial Typography System**: Paired hierarchy using Google Newsreader serif for luxury editorial headlines alongside Geist Sans and Geist Mono for high-legibility interface typography.
- **Full Service Catalog**: Interactive breakdown of eight specialized creative practices with comprehensive scope definitions, deliverable breakdowns, and technology specifications.
- **Filterable Creative Portfolio**: Multi-category showcase supporting video production, web applications, 3D motion design, brand identities, and high-CTR thumbnail designs.
- **Conversion-Optimized Contact Flow**: Interactive project estimation form with budget tiers, multi-service selection, form validation, and interactive submission feedback.
- **Interactive UI Utilities**: Custom dynamic cursor, floating call-to-action triggers, continuous marquee tickers, and responsive mobile navigation drawer.
- **Modular Monorepo Structure**: Isolated workspaces for frontend presentation and backend API services.

---

## Architecture & Tech Stack

### Frontend Architecture

- **Framework**: Next.js 16 (App Router architecture with React Server Components)
- **Library**: React 19 & React DOM 19
- **Styling**: Tailwind CSS v4, `@tailwindcss/postcss`, custom CSS variables
- **Animation**: Framer Motion 13
- **Icons**: Lucide React
- **Typography**: Next.js Font Optimization (`next/font/google` with Geist Sans, Geist Mono, Newsreader)
- **Interactive Utilities**: Canvas-confetti, clsx, tailwind-merge
- **Compiler**: Babel React Compiler plugin

### Backend Architecture

- **Runtime**: Node.js
- **Server Framework**: Express.js 5
- **Development Tooling**: Nodemon for hot module replacement and process monitoring
- **Module System**: CommonJS

---

## Project Directory Structure

```text
Visual_House/
|-- .github/
|   |-- ISSUE_TEMPLATE/
|   |   |-- bug_report.md
|   |   `-- feature_request.md
|   `-- pull_request_template.md
|-- backend/
|   |-- node_modules/
|   |-- .gitignore
|   |-- package.json
|   `-- package-lock.json
|-- frontend/
|   |-- public/
|   |   |-- frames/           # 300-frame preloader sequence
|   |   |-- logo/             # Brand logos and vector assets
|   |   |-- favicon.ico
|   |   `-- *.svg
|   |-- src/
|   |   |-- app/
|   |   |   |-- about/        # Studio story, philosophy & values
|   |   |   |-- contact/      # Discovery & inquiry booking
|   |   |   |-- services/     # Detailed practice offerings
|   |   |   |-- work/         # Filterable case studies & portfolio
|   |   |   |-- globals.css   # Theme variables, tokens, and keyframes
|   |   |   |-- layout.js     # Root layout, fonts, SEO, and shell
|   |   |   `-- page.js       # Homepage section assembly
|   |   |-- components/
|   |   |   |-- AboutSection.jsx
|   |   |   |-- ContactSection.jsx
|   |   |   |-- CreativeShowcase.jsx
|   |   |   |-- CreativeStatement.jsx
|   |   |   |-- CustomCursor.jsx
|   |   |   |-- CTASection.jsx
|   |   |   |-- FAQ.jsx
|   |   |   |-- FloatingCTA.jsx
|   |   |   |-- Footer.jsx
|   |   |   |-- Hero.jsx
|   |   |   |-- IntroAnimation.jsx
|   |   |   |-- Marquee.jsx
|   |   |   |-- Navbar.jsx
|   |   |   |-- Portfolio.jsx
|   |   |   |-- Process.jsx
|   |   |   |-- SectionDivider.jsx
|   |   |   |-- Services.jsx
|   |   |   |-- Stats.jsx
|   |   |   |-- Testimonials.jsx
|   |   |   |-- TrustBar.jsx
|   |   |   `-- WhyVisualHouse.jsx
|   |   `-- lib/
|   |       `-- utils.js      # Class merging and utility helpers
|   |-- eslint.config.mjs
|   |-- jsconfig.json
|   |-- next.config.mjs
|   |-- package.json
|   |-- package-lock.json
|   |-- postcss.config.mjs
|   `-- README.md
|-- .gitignore
|-- CODE_OF_CONDUCT.md
|-- CONTRIBUTING.md
|-- LICENSE
|-- README.md
`-- SECURITY.md
```

---

## Getting Started

### Prerequisites

Ensure the following tools are installed on your workstation:

- **Node.js**: v18.18.0 or higher (v20.x recommended)
- **npm**: v9.0.0 or higher (or pnpm / yarn)
- **Git**: v2.30.0 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/itzgauravgoswami/Visual_House.git
   cd Visual_House
   ```

2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd ../backend
   npm install
   ```

### Environment Configuration

For the frontend application, copy the example environment configuration (or create `.env.local` inside `frontend/`):

```bash
cd frontend
cp .env.example .env.local
```

Example configuration options:

```ini
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_AGENCY_NAME=Visual House
```

### Running Development Servers

#### Running the Frontend Client

```bash
cd frontend
npm run dev
```

The web application will be accessible at `http://localhost:3000`.

#### Running the Backend Service

```bash
cd backend
npm run dev
```

---

## Available Scripts

### Frontend (`/frontend`)

- `npm run dev`: Starts the Next.js development server with hot module replacement on `http://localhost:3000`.
- `npm run build`: Compiles production-optimized client bundles and static pages.
- `npm run start`: Boots the Next.js production server.
- `npm run lint`: Runs ESLint checks using the Next.js linting configuration.

### Backend (`/backend`)

- `npm start`: Runs the Node.js application entry point (`index.js`).
- `npm run dev`: Runs the service with Nodemon for automatic restarts upon code modification.

---

## Design System & Aesthetics

Visual House adopts a luxury dark palette with balanced gold and neutral accents:

- **Core Background**: Deep Obsidian (`#000000`) and Obsidian Elevated (`#030305`, `#111111`)
- **Accent Palette**: Artisan Gold (`#c5a059`), Soft Amber (`#fef08a`), Deep Gold Bronze (`#9a7b38`)
- **Text Tiers**: Pure White (`#ffffff`), Zinc Secondary (`#d4d4d8`), Zinc Muted (`#a1a1aa`)
- **Status Accents**: Emerald (`#10b981`), Sky Blue (`#0284c7`), Indigo (`#6366f1`)
- **Typography Pairing**:
  - Headings: `Newsreader` (italic and normal weights for high-editorial luxury feel)
  - Interface & Body: `Geist Sans`
  - Code & Data Metrics: `Geist Mono`

---

## Performance & Engineering Highlights

- **Hardware-Accelerated Frame Playback**: The intro canvas sequence implements an off-thread memory buffer and draws with `requestAnimationFrame`, avoiding layout thrashing.
- **Dynamic Device Pixel Ratio Adaption**: The animation canvas queries `window.devicePixelRatio` dynamically, ensuring crisp rendering across Retina and 4K displays.
- **Font Optimization**: Google Fonts are loaded at build time via `next/font`, eliminating external network hops and cumulative layout shifts (CLS).
- **Tree-Shaken Iconography**: Lucide React icons are imported individually to maintain minimal bundle footprints.

---

## SEO, Metadata & Accessibility

- **Open Graph & Twitter Cards**: Comprehensive social card tags pre-configured in `frontend/src/app/layout.js`.
- **Semantic Structure**: Proper single `h1` per page, semantic landmark containers (`main`, `nav`, `section`, `footer`), and clean heading hierarchies.
- **Reduced Motion Support**: Animations respect reduced-motion user preferences where applicable.
- **Accessibility Attributes**: Screen-reader accessible buttons, descriptive aria labels, and high contrast text ratios.

---

## Roadmap

- [ ] Complete Express backend REST endpoints for contact submission persistence.
- [ ] Implement rate limiting and CAPTCHA protection for contact forms.
- [ ] Connect headless CMS (Sanity or Strapi) for dynamic portfolio management.
- [ ] Add automated end-to-end testing with Playwright.
- [ ] Set up GitHub Actions CI/CD pipeline for automated testing and Vercel preview deployments.

---

## Contributing

Contributions, issues, and feature proposals are welcome. Please read our [CONTRIBUTING.md](CONTRIBUTING.md) guide for details on our code of conduct, branch conventions, and submission workflow.

---

## Security

For security vulnerability disclosures, please review our [SECURITY.md](SECURITY.md) policy. Do not file public GitHub issues for security vulnerabilities.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for full details.

---

## Author & Contact

- **Author**: Gaurav Goswami
- **GitHub**: [@itzgauravgoswami](https://github.com/itzgauravgoswami)
- **Repository**: [Visual_House](https://github.com/itzgauravgoswami/Visual_House)
