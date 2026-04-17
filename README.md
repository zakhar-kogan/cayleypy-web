# CayleyPy website

Static marketing and project website for [CayleyPy](https://github.com/cayleypy/cayleypy), built with Preact and Vite for GitHub Pages project-site deployment.

## Stack

- Preact
- Vite
- TypeScript
- Plain CSS

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Content maintenance

Version one keeps content manual and code-adjacent.

- Site copy and links live in `src/content/site.ts`
- Research/news feed items live in `src/content/feed.ts`

Edit those files to update hero copy, examples, docs links, or feed entries.

## GitHub Pages deployment

This repository is configured as a GitHub Pages project site, so Vite uses the repository base path:

- `vite.config.ts` sets `base` to `/cayleypy-web/`
- The deployment workflow lives at `.github/workflows/deploy.yml`

To enable deployment in GitHub:

1. Push this repository to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Ensure the default branch is `main`, or update `.github/workflows/deploy.yml` if you deploy from a different branch.
4. Push to `main` or run the workflow manually from the Actions tab.

The published URL shape for this setup is:

```text
https://<owner>.github.io/cayleypy-web/
```

## Notes

- This is intentionally a single-page static site with anchor navigation.
- External docs and notebooks remain canonical; this site curates and points to them.
- If the repository name changes, update the Vite `base` path to match the new GitHub Pages project-site URL.
