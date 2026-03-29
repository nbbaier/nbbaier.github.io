# CLAUDE.md

Static personal website (nicobaier.com) — plain HTML/CSS, no build system, deployed via GitHub Pages.

## Project map

- `index.html` — Single-page site (header, about, experience, interests, dissertation, papers, presentations)
- `style.css` — All styles; CSS custom properties, two-column grid layout, responsive breakpoint at 768px
- `papers/` — Static PDF files linked from papers/presentations sections
- `redesigns/` — Standalone design exploration directories
- `sandbox/` — Scratch files for style experiments
- `CNAME` — Custom domain config (nicobaier.com)

## Design Context (summary)

Personal academic/engineering portfolio: visitors scan for credibility, papers, and PDFs (resume/CV). Tone is clear, scholarly, and engineered—warm paper (`#fffffc`), restrained neutrals, grid + hairline rules instead of card chrome. Typography carries identity (Figtree + Recursive; optional “original” typeset via design switcher). Full notes: `.impeccable.md`.

<important if="you need to run a dev server or preview the site locally">

No build step. Serve the directory directly:

```sh
bun run index.html
```

</important>

<important if="you are modifying the dissertation abstract toggle or adding new expandable/collapsible sections">

- Use `<button>` with `aria-expanded` + `aria-controls` toggling `hidden` on the target — do NOT use `<details>/<summary>` (caused layout/margin regressions).
- Caret icons: paired inline SVGs stacked in a single fixed grid cell (`display: inline-grid`). CSS swaps visibility based on `[aria-expanded="true"]` — no extra JS for icon swap.
- Avoid `all: unset` on buttons containing inline SVGs — use targeted resets so SVGs size and paint reliably.
- Caret alignment: `inline-flex` + `align-items: baseline`, `1em` icon box, optional small `top` nudge on the caret wrapper.
  </important>

<important if="you are editing sections or the page layout grid">

- Each `<section>` uses `display: contents` to participate in the parent two-column grid (`min-content 1fr`).
- Horizontal rules between sections are `section::after` pseudo-elements spanning `grid-column: 1 / -1`.
- On mobile the grid collapses to single column.
  </important>

<important if="you are modifying typography or the design switcher">

- A fixed-position radio group toggles `body.typeset-original` class for alternate typography.
- Default fonts: Figtree (body), Recursive (headings/mono with variable font settings).
- The "original" style overrides CSS custom properties on `body.typeset-original`.
  </important>
