# Portfolio — React (Vite)

Professional portfolio for Dhananjay Davhale built with React + Vite.

## Run locally
```bash
npm install
npm run dev
```
Then open http://localhost:5173

## Build for production
```bash
npm run build
npm run preview
```

## Structure
- `src/App.jsx` — layout & state (theme, modal, toast)
- `src/components/` — Navbar, Hero, About, Experience, Skills, Projects, ProjectModal, Contact, Footer
- `src/data/projects.js` — projects, experience, skills data
- `src/hooks/hooks.js` — useTheme, useReveal, useCounter
- `src/index.css` — all styles (light + dark via `[data-theme]`)

## Features
- Dark / light mode toggle (persisted, system-aware)
- Stats with big numbers + matching SVG icons
- Project case-study modal — demo video, problem, solution, tech stack, basic details
- Filters, accordion experience, animated skill bars, contact form validation
- Fully responsive
