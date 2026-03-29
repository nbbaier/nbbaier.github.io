## Learned User Preferences

- For nicobaier.com, prefers the dissertation abstract as a `<button>` with the existing JS toggle (`aria-expanded` and toggling `hidden` on the abstract block) rather than native `<details>/<summary>` after layout and margin regressions with the latter.
- Wants the abstract control to show a Font Awesome Free–style chevron-right when collapsed and chevron-down when expanded, driven by `aria-expanded` via CSS (e.g. two inline SVGs with show/hide rules), without extra JS beyond the current handler.
- Do not underline the abstract control’s label text; it is a `<button>`, not a link. Keep a label span for structure; do not underline the caret.
- For inline SVG inside compact meta-line buttons, avoid `all: unset` on the button; use a targeted reset so SVGs size and paint reliably.
- When tuning the caret, match optical alignment to the metadata line (e.g. `inline-flex` with `align-items: baseline`, `1em` icon box, optional small `top` nudge on the caret wrapper); stack both SVGs in one fixed grid cell so swapping icons does not jump layout.
- For design context documentation, keep the full write-up in `.impeccable.md` and only a short summary in `CLAUDE.md` (avoid duplicating the long Design Context block in both files).

## Learned Workspace Facts

- Site is static HTML/CSS (`index.html`, `style.css`), deployed as a simple GitHub Pages–style site (includes `CNAME`).
- In `style.css`, use a literal `768px` in `@media (max-width: 768px)`; do not use `var()` in the media condition (the CSS linter rejects custom properties there), so do not add a `--breakpoint-md`-style token just for that query.
- `CLAUDE.md` includes a short **Design Context (summary)** after the project map; `.impeccable.md` holds the full teach-impeccable / design notes.
- Dissertation abstract: `.abstract-btn` uses `aria-controls` for `#diss-abstract`; bottom-of-page script toggles `aria-expanded` and the `hidden` attribute on `.abstract`.
- Abstract caret: paired SVGs with classes such as `abstract-caret-svg--hidden` and `abstract-caret-svg--revealed`; CSS toggles visibility on `.abstract-btn[aria-expanded="true"]`.
