# lawraa.github.io

Personal site of Shou-Jen (Lawrance) Chen, served by GitHub Pages at https://lawraa.github.io.

React 19, Vite 7, Tailwind CSS v4, TypeScript. Pages are hash routes (`/#/work`), so GitHub Pages only ever serves `index.html`.

## Commands

Node version is in `.nvmrc`.

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Type check and production build into `dist/` |
| `npm run lint` | ESLint over `src/`, `tests/` and `scripts/` |
| `npm test` | Unit tests in `tests/` (Node's built-in runner) |
| `npm run smoke` | Browser checks against a running build (see below) |

The smoke test needs a production build served on port 4173 and a local Chrome:

```sh
npm run build
npx vite preview --port 4173 --strictPort &
npm run smoke
```

It loads every page on a phone and a desktop viewport and checks the mobile menu, the photo lightbox, `/work#<project>` deep links, a failed map download, that every asset path in `src/` exists in `public/`, and that `public/404.html` knows every route. On macOS it finds Chrome on its own; elsewhere set `CHROME_PATH`.

## Deploying

Pushing to `main` deploys: `.github/workflows/deploy.yml` runs lint, unit tests, build and the smoke test, and publishes only if all pass. It can also be rerun from the Actions tab. Pushes to other branches run the same checks without deploying (`ci.yml`).

## Where things live

- `src/data/projects.ts`, `research.ts`, `bouldering.ts`, `drawings.ts`: all page content. The home page's three featured projects are picked by id in `src/components/FeaturedProjects.tsx`.
- `src/pages.ts`: nav order and tab titles. If you add or rename a route, update the list in `public/404.html` too (the smoke test fails until they match).
- `public/`: images, PDFs and `resume.pdf`, served as-is at the same path.
- `DESIGN.md`: colors, type, components and rules for the visual design. `PRODUCT.md`: who the site is for.

## Adding images

Resize before committing and strip metadata, since phone photos carry GPS coordinates. For example, with Python and Pillow:

```python
from PIL import Image, ImageOps
im = ImageOps.exif_transpose(Image.open("in.jpg"))
im.thumbnail((2000, 2000))
im.convert("RGB").save("out.jpg", quality=85, optimize=True, progressive=True)  # no EXIF is written
```

Card thumbnails go in `public/thumbs/` at about 800-1000px wide and are referenced with `thumbUrl`; the full image stays in `imageUrl` for the lightbox.

## Updating the resume

Replace `public/resume.pdf`, keeping the file name: it is linked from the site and from elsewhere. GitHub Pages caches it for up to 10 minutes after a deploy.
