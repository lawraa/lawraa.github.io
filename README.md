# lawraa.github.io

Personal site of Shou-Jen (Lawrance) Chen, served by GitHub Pages at https://lawraa.github.io.

React 19, Vite 7, Tailwind CSS v4, TypeScript. Pages are hash routes (`/#/work`), so GitHub Pages only ever serves `index.html`.

## Commands

Node 22.18 or newer (`.nvmrc`); the unit tests rely on Node's built-in TypeScript support.

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Type check and production build into `dist/` |
| `npm run lint` | ESLint over the whole repo (`src/`, `tests/`, `scripts/` and config files) |
| `npm test` | Unit tests in `tests/` (Node's built-in runner) |
| `npm run smoke` | Browser checks against a running build (see below) |

The smoke test needs a production build served on port 4173 and a local Chrome:

```sh
npm run build
npx vite preview --port 4173 --strictPort &
npm run smoke
kill %1   # stop the preview
```

If port 4173 is already taken, `--strictPort` makes the preview exit and the test would check whatever else is on that port. Use another port and point the test at it: `npx vite preview --port 4180 --strictPort & BASE_URL=http://localhost:4180/ npm run smoke`.

It loads every page on a phone and a desktop viewport and checks the mobile menu, the photo lightbox, `/work#<project>` deep links, a failed map download, that every asset path in `src/` exists in `public/`, and that `public/404.html` knows every route. On macOS it finds Chrome on its own; elsewhere set `CHROME_PATH`.

## Deploying

Pushing to `main` deploys: `.github/workflows/deploy.yml` runs lint, unit tests, build and the smoke test, and publishes only if all pass. It can also be rerun from the Actions tab. Pushes to other branches run the same checks without deploying (`ci.yml`).

## Where things live

- `src/data/projects.ts`, `research.ts`, `bouldering.ts`, `drawings.ts`: all page content. `src/data/featured.ts` picks the home page's featured projects by id, each with a short field label and tag tone; a unit test checks the ids exist. A project needs every case-study field (`problem`, `approach`, `architecture`, `results`, `reflection`); TypeScript reports any that are missing.
- `src/pages.ts`: nav order and tab titles. To add or rename a route, also add its `<Route>` in `src/App.tsx` and update the list in `public/404.html`; the smoke test fails until all three agree.
- `public/`: images, PDFs and `resume.pdf`, served as-is at the same path.
- `DESIGN.md`: colors, type, components and rules for the visual design. `PRODUCT.md`: who the site is for.

## Adding images

Resize before committing and strip metadata, since phone photos carry GPS coordinates. For example, with Python and Pillow (`pip install Pillow`):

```python
from PIL import Image, ImageOps
im = ImageOps.exif_transpose(Image.open("in.jpg"))
im.thumbnail((2000, 2000))
im.convert("RGB").save("out.jpg", quality=85, optimize=True, progressive=True)  # no EXIF is written
```

Card thumbnails go in `public/thumbs/` at about 800-1000px wide and are referenced with `thumbUrl`; the full image stays in `imageUrl`, which is required for any card image to show and is what the lightbox opens. A thumbnail is shown whole, never cropped, so either compose it to the card frame (16:10 on the home page, 4:3 on /work) or add `imageFit: 'cover'` to crop it like a photo.

## Updating the resume

Replace `public/resume.pdf`, keeping the file name: it is linked from the site and from elsewhere. GitHub Pages caches it for up to 10 minutes after a deploy.
