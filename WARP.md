# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project overview

This repository backs the GitHub Pages site `ksdbh.github.io`. It is a fully static single-page personal site implemented in plain HTML, CSS, and a small amount of vanilla JavaScript. There is no build pipeline, dependency manager, or test framework configured.

Key files:
- `index.html` — single-page site containing markup, styles, and scripts.
- `README.md` — project name only.

## Development & runtime commands

There are no project-specific scripts; everything is static. From the repo root:

- **Open the site directly (macOS):**
  - `open index.html`
- **Run a simple local HTTP server (recommended for testing changes):**
  - Using Python 3: `python -m http.server 8000`
  - Then visit `http://localhost:8000` in a browser.

There is no configured build, lint, or test command in this repo. If you add tooling (e.g., npm, ESLint, tests), document the new commands here.

## High-level structure & architecture

The entire site is implemented in `index.html`:

- **Head section**
  - SEO and social tags: `title`, `meta description`, and Open Graph tags for sharing.
  - Theme color and social preview image: `meta name="theme-color"` and `og:image` (`/social-card.png`).
  - A `<style>` block defines all visual design in one place, including:
    - CSS custom properties (`:root` and `:root.light`) for colors, shadows, and layout.
    - Utility classes for layout (`.container`, `.grid`, `.row`) and components (`.card`, `.badge`, `.chip`, `.btn`).
    - Responsive behavior via a single `@media (max-width: 960px)` rule.

- **Body layout**
  - `header` with sticky navigation:
    - Name and role badge.
    - Navigation links (`#experience`, `#projects`, `#skills`, `#interests`, `#contact`). If you add/remove sections, keep these anchors in sync.
    - Theme toggle button with `id="themeToggle"`.
  - `main.container` with major sections:
    - **Hero**: headline, summary, primary CTAs (email, LinkedIn, GitHub, resume), and highlighted tech badges.
    - **Experience**: employment history and responsibilities.
    - **Selected Projects**: placeholder project entries and writing examples; links currently use `onclick` alerts as stubs.
    - **Skills**: grouped by category using `.chip` components.
    - **Interests**: personal-interest chips.
    - **Contact**: email, LinkedIn, and GitHub.
  - Footer displays the current year and a short note about the stack (vanilla HTML/CSS, dark-mode friendly).

## JavaScript behavior

All JavaScript lives in a single `<script>` tag at the end of `index.html` and assumes the DOM has already been parsed:

- **Theme toggle / dark–light mode**
  - Uses `document.documentElement` and toggles the `light` class on the `<html>` element.
  - Persists the theme in `localStorage` under the key `theme` with values `"light"` or `"dark"` (implicit default).
  - Updates the toggle button text content between `🌙` and `☀️` to reflect the current mode.
  - On page load, reads the stored theme and applies it before user interaction.

- **Dynamic year**
  - Sets the text content of the `#year` span in the footer to `new Date().getFullYear()`.

When modifying or extending behavior, prefer keeping small enhancements in this script block. If JavaScript grows beyond simple UI state, consider extracting it to a dedicated `.js` file and updating this document.

## Extensibility notes

- To add new sections, follow the existing pattern:
  - Wrap in a `.card.section` and, when appropriate, include `id` attributes for navigation.
  - Reuse `.grid`, `.row`, `.badge`, and `.chip` classes to maintain visual consistency.
- If you adjust color themes, update both `:root` and `:root.light` variable definitions so dark and light modes remain balanced.
- Social and SEO metadata (title, description, Open Graph tags) are centralized in the `<head>`; update those when changing branding or scope of the site.
