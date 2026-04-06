# ruchipatel1.github.io

Personal site built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui** (Radix primitives + CVA). Content-driven **Work** page: edit `src/data/projects.ts` to list projects, tags, links, and optional images in `public/work/`.

## Local development

```bash
npm install
npm run dev
```

## Contact form

Copy `.env.example` to `.env`, set `VITE_FORMSPREE_FORM_ID` from your [Formspree](https://formspree.io/) form URL (`…/f/your_id`), then restart the dev server.

## Resume (recommended: link to GitHub Release PDF)

Keep the PDF in your **LaTeX repo** and expose it through a **GitHub Release** with a stable asset name (e.g. `resume.pdf`). This site only stores a URL.

1. In the LaTeX repo, use Actions (TeX Live + `latexmk`, etc.) to build the PDF and attach it to a release when you push (or tag).
2. Set **`VITE_RESUME_PDF_URL`** to  
   `https://github.com/OWNER/REPO/releases/latest/download/resume.pdf`  
   GitHub redirects that to the **latest** release’s asset, so **new PDFs go live when you publish a release**—no rebuild of this site.
3. Optionally set **`VITE_RESUME_SOURCE_REPO_URL`** for the “LaTeX source” button on `/resume`.
4. For **GitHub Pages**, add the same keys as **Actions variables** (`Settings → Secrets and variables → Actions → Variables`). The deploy workflow passes `VITE_*` into `npm run build`.

**Alternatives (optional):** To **bundle** the PDF into this repo on each deploy, set variable **`RESUME_PDF_FETCH_URL`** (see `.github/workflows/deploy.yml`). To **trigger a redeploy** from the LaTeX repo, use `repository_dispatch` with event type **`resume-updated`** (useful mainly if you bundle the PDF; you typically skip this when using the release link only).

## Deploy (GitHub Pages)

1. In the repository **Settings → Pages**, set **Source** to **GitHub Actions**.
2. Push to `master` or `main` (or trigger **`resume-updated`** if you use that optional hook). The workflow builds the app, copies `index.html` to `404.html` for client-side routing, and publishes the `dist` folder.

For a user site (`username.github.io`), no `base` path change is required.

## shadcn/ui

The project follows the [shadcn/ui](https://ui.shadcn.com/) pattern: tokens in `src/index.css`, components under `src/components/ui/`, and `cn()` from `src/lib/utils.ts`. Add more blocks with `npx shadcn@latest add …` if you extend the CLI config in `components.json`.
