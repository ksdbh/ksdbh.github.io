# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project overview

This repository backs the `ksdbh.github.io` portfolio. Phase 1 migrates the site to a
statically exported Next.js App Router application with strict TypeScript, evidence-first
content, shared layout primitives, and automated quality gates.

Key paths:

- `src/app/` — routes, metadata, sitemap, and root layout.
- `src/components/` — shared structural and UI primitives.
- `src/content/` — evidence-first types and route indexes.
- `src/styles/` — design tokens and global layout primitives.
- `docs/` — content inventory, gaps, editorial rules, and visual-storytelling rules.
- `legacy/index.html` — preserved pre-migration single-page site.

## Development & runtime commands

Use `npm run dev` for local development. Use `npm run check` before handoff; it checks
formatting, linting, strict types, tests, and the static production build. `npm run build`
writes the deployable site to `out/`.

## High-level structure & architecture

- Server Components are the default. Add a client boundary only for browser APIs or
  interaction that requires it.
- Content facts remain separate from presentation under `src/content/`.
- `src/content/schema.ts` requires known, unknown, confidential, or not-applicable states
  instead of vague missing prose.
- Static metadata is defined per route. `sitemap.ts` and `robots.ts` are generated from
  the same route and site configuration.
- `next.config.ts` uses static export so the application can deploy to GitHub Pages or a
  static Vercel project.
- Browser animation engines will later live under `src/features/animation-lab/` and load
  only through narrow client adapters.

## Extensibility notes

- Follow `docs/editorial-style-guide.md` for all copy.
- Do not fill P0 gaps in `docs/content-gaps.md` with assumptions.
- Add case-study slugs to `src/content/projects/index.ts` so static params, navigation,
  and sitemap generation stay aligned.
- Use tokens from `src/styles/tokens.css`; avoid one-off visual values before the design
  system is approved.
- Preserve reduced-motion and keyboard behavior as interaction is added.
- Keep the legacy site read-only under `legacy/` until the migration is accepted.
