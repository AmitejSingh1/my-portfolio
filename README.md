# Amitej Singh Datta — Personal Portfolio Website

A personal portfolio and research index for **Amitej Singh Datta** (AI/ML Engineer & Researcher at the National University of Singapore).

Designed with a minimalist, editorial aesthetic inspired by fine typography and high-end publication design. Built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🏛️ Architecture & Stack Rationale

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router) — Provides instant static page generation (`SSG`), top-tier Lighthouse scores, and automatic font/image optimization.
- **Language**: [TypeScript](https://www.typescriptlang.org/) — Ensures end-to-end type safety for all project benchmarks, metrics, and content interfaces.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) — High-performance utility CSS configured with custom editorial color tokens, hairline borders, and fluid typography.
- **Centralized Content Store**: All data (projects, experience, education, metrics, social links) is decoupled from the presentation components and lives in `src/data/portfolio.ts`.
- **Accessibility & Performance**: Native semantic HTML5 landmarks, zero unnecessary client-side runtime bloat, ARIA labels, visible keyboard focus rings, and strict `prefers-reduced-motion` support.

---

## 📂 Project Structure

```
my-portfolio/
├── public/
│   ├── AmitejSinghDatta_Resume.pdf  # Downloadable public resume
│   └── og-image.svg                 # OpenGraph preview banner
├── src/
│   ├── app/
│   │   ├── globals.css              # Custom editorial design system & CSS variables
│   │   ├── icon.svg                 # Dynamic browser favicon
│   │   ├── layout.tsx               # Root layout, font definitions, and Schema.org JSON-LD
│   │   ├── not-found.tsx            # Custom editorial 404 page
│   │   └── page.tsx                 # Composed single-page portfolio layout
│   ├── components/
│   │   ├── icons/
│   │   │   └── SocialIcons.tsx      # SVG icons for GitHub and LinkedIn
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # Sticky editorial navbar with mobile navigation
│   │   │   └── Footer.tsx           # Minimalist footer with time and scroll-to-top
│   │   └── sections/
│   │       ├── Hero.tsx             # Typography-led intro & factual metric callouts
│   │       ├── NowSection.tsx       # 01 / Now: Current rotations & terminal ticker
│   │       ├── SelectedWork.tsx     # 02 / Work: Flagship case studies & benchmark tables
│   │       ├── About.tsx            # 03 / About: Background, principles & education narrative
│   │       ├── Experience.tsx       # 04 / Trajectory: Internships, degrees, and leadership
│   │       ├── Playground.tsx       # 05 / Lab: Hackathon prototypes and small tools
│   │       ├── Skills.tsx           # 06 / Stack: Restrained categorized competencies
│   │       └── Contact.tsx          # 07 / Contact: One-click email copy and verified channels
│   └── data/
│       └── portfolio.ts             # SINGLE SOURCE OF TRUTH for all site copy & data
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js** 18.18+ or 20+ (tested on Node v22.14.0)
- **npm**, **yarn**, or **pnpm**

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally (Development)
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```
To preview the production build locally:
```bash
npm run start
```

---

## ✏️ How to Edit Content

All portfolio content is centralized in **`src/data/portfolio.ts`**. You do **not** need to touch any UI components to update your information.

### Updating Personal Information & Bio
Edit `portfolioData.personal`:
```typescript
personal: {
  name: "Amitej Singh Datta",
  currentRole: "M.S. in Data Science & Machine Learning",
  affiliation: "National University of Singapore (NUS)",
  email: "amitejsingh5@gmail.com",
  // ...
}
```

### Adding or Updating a Featured Work Case Study
Edit `portfolioData.featuredProjects`. Each project supports:
- `id`, `number`, `title`, `subtitle`, `badge`
- `problem` statement
- `architecture` (array of technical implementation points)
- `keyInnovation`
- `benchmarks` (metrics, values, and comparison baseline)
- `technologies` (tags array)
- `githubUrl`, `articleUrl`, `paperUrl`

### Updating Current Status ("01 / Now")
Edit `portfolioData.now.items` and `portfolioData.now.tickerLogs` to update what you are actively exploring, studying, or coding.

### Updating Resume
Replace `public/AmitejSinghDatta_Resume.pdf` with your updated resume PDF. The website links automatically resolve to this file.

---

## 🚢 Deployment

The repository is structured for zero-configuration deployment to any modern web platform:

### Deploying to Vercel (Recommended)
1. Push this repository to GitHub.
2. Import the repository on [Vercel](https://vercel.com).
3. Framework Preset will automatically detect **Next.js**.
4. Click **Deploy**.

### Deploying to Netlify
1. Connect the repository to [Netlify](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `.next` (or `out` if static export is enabled)

---

## 📄 License

MIT © [Amitej Singh Datta](https://github.com/AmitejSingh1)

