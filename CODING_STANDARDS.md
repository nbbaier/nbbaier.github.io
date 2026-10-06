# Coding standards

## Expandable sections

Build as `<button aria-expanded aria-controls>` toggling `hidden` on the target (`<details>/<summary>` caused layout and margin regressions).

- Caret: two inline SVGs stacked in one `display: inline-grid` cell; CSS swaps visibility on `[aria-expanded="true"]`, so the JS handler stays icon-free. Chevron-right collapsed, chevron-down expanded (Font Awesome Free style).
- Button reset: targeted properties (`all: unset` breaks SVG sizing/painting).
- Caret alignment: `inline-flex` + `align-items: baseline`, `1em` icon box, small `top` nudge on the caret wrapper if needed.
- Label: plain text in its own span, no underline; it is a button, not a link.

## Layout grid

`<section>` is `display: contents`, so its children join the parent grid (`min-content 1fr`). Section rules are `section::after` spanning `grid-column: 1 / -1`.

## Media queries

Write the breakpoint as the literal `768px`. The CSS linter rejects `var()` in media conditions, so a `--breakpoint-*` token can't work.

## Typeface switcher

The fixed radio group toggles `body.typeset-original`, which overrides the typography custom properties. Change fonts through those properties, not per-element.
