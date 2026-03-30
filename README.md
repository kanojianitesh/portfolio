# Nitesh Kanojia — Portfolio Website

Personal academic portfolio for [Nitesh Kanojia](https://kanojianitesh.github.io/portfolio/), PhD Researcher in Electromicrobiology at the University of Queensland – IIT Delhi Research Academy.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** (with SWC)
- **Tailwind CSS v4**
- **shadcn/ui** (Radix UI primitives)
- **React Router v7**
- Deployed on **GitHub Pages**

## Project Structure

```text
src/
├── assets/          # Static assets (images)
├── components/      # Shared UI components
│   ├── ui/          # shadcn/ui primitives
│   └── icons/       # Custom SVG icons
├── data/            # All site content as TypeScript files
│   ├── profile.ts
│   ├── publications.ts
│   ├── education.ts
│   ├── awards.ts
│   ├── conferences.ts
│   ├── news.ts
│   ├── teaching.ts
│   └── skills.ts
├── hooks/           # Custom React hooks
├── lib/             # Utilities
├── pages/           # One folder per route
│   ├── about/
│   ├── research/
│   ├── publications/
│   ├── teaching/
│   └── fun/
├── index.css        # Global styles + theme tokens
└── theme.css        # Tailwind v4 default theme
```

## Updating Content

All site content lives in `src/data/`. Edit the relevant file to update the corresponding section — no JSX changes needed.

| File | Section |
| --- | --- |
| `profile.ts` | Name, bio, links |
| `publications.ts` | Publications list |
| `education.ts` | Education timeline |
| `awards.ts` | Honors & awards |
| `conferences.ts` | Conference presentations |
| `news.ts` | News / updates |
| `teaching.ts` | Teaching experience |
| `skills.ts` | Skills |

## Local Development

```bash
npm install
npm run dev
```

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via the workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

To deploy manually:

```bash
npm run deploy
```
