# marchin.ru

Official-ish source for **marchin.ru**: releases, covers, badges, and a healthy amount of pop chaos.

## What lives here

- `src/pages/` routes and page templates
- `src/releases/*.json` release metadata (title, year, streaming links, etc.)
- `public/covers/` release cover images
- `public/badges/` streaming platform badges

## Requirements

- Node.js `>= 22.12.0` (CI is pinned to `22.12.0`)
- npm (comes with Node)

## Run locally

```bash
npm install
npm run dev
```

Site will be available at `http://localhost:4321`.

## Build and check

```bash
npm run build
```

This runs:

- `astro check` for Astro/TypeScript diagnostics
- `astro build` for production output in `dist/`

## Add a new release

1. Create `src/releases/<id>.json`
2. Add cover image `public/covers/<id>.jpg`
3. Ensure JSON has at least:
   - `data.id`
   - `data.title`
   - `data.year`
   - `data.kind`
   - `streaming` links object
4. Run `npm run build`

If it builds, it ships.

## CI

GitHub Actions workflow:

- [`.github/workflows/build.yml`](.github/workflows/build.yml)

It installs dependencies and runs `npm run build` on pull requests to `master`.
