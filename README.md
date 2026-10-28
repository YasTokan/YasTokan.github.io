# yastokan.github.io

Personal site of Yasine Tokan, Tech Lead. Built with Next.js (App Router), TypeScript and Tailwind CSS, and exported as static HTML for GitHub Pages.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content

All copy lives in [`src/content/profile.ts`](src/content/profile.ts): the hero, about text, case studies, experience, skills, education and links. The section components in `src/components/` only render it.

To update the CV, replace `public/Yasine_Tokan_CV.pdf` and keep the same file name.

## Build

```bash
npm run lint
npm run build
```

`npm run build` writes the static site to `out/`. To preview the exported build locally:

```bash
npx serve out
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `out/` to GitHub Pages.

One-time setup in the GitHub repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
