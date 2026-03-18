# Portfolio — Tra Nguyen

Personal developer portfolio built with **Next.js**. Terminal-style hero, intro tabs (Hello / About / GitHub), and CV content in the About tab.

**Live:** Deploy on [Vercel](https://vercel.com) or any Node host after `npm run build`.

---

## Features

- **Terminal hero** — Typewriter-style contact output
- **Intro tabs** — Hello (CSS robot), About (summary, skills, experience, education), GitHub projects
- **Dark dev/terminal theme** — Monospace typography, accent greens
- **Effects** — Scroll progress, back-to-top, hover states, tech footprint on experience cards

---

## Tech stack

| Layer     | Technology        |
| --------- | ----------------- |
| Framework | Next.js 14 (App Router) |
| Language  | TypeScript        |
| Styling   | Tailwind CSS      |
| Content   | Structured in `data/cv.ts` |

---

## Getting started

### Prerequisites

- **Node.js** 18+ (recommended: LTS)
- **npm** (or pnpm / yarn)

### Install & run locally

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## Project structure

```
portfolio/
├── app/                 # App Router: layout, page, globals.css
├── components/          # UI (Terminal, IntroTabs, Experience, etc.)
├── data/cv.ts           # Profile, skills, experience, GitHub projects
├── hooks/               # e.g. useInView
└── public/              # Static assets
```

Update your CV and links in **`data/cv.ts`**.

---

## Deploy to GitHub + Vercel (example)

1. Push this repo to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js** — deploy with defaults.

Environment variables are not required for the static CV flow.

---

## Author

**Tra Nguyen** — Software Engineer  

- GitHub: [@travan](https://github.com/travan)
- LinkedIn: [profile](https://www.linkedin.com/in/tra-n-516b361b1/)

---

## License

This project is open for personal portfolio use. You may fork and adapt for your own site; attribution is appreciated.
