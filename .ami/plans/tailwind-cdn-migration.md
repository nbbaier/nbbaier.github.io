---
name: "Tailwind CDN Migration"
overview: "Create a new branch that replaces custom CSS with Tailwind CDN while preserving the exact same visual styling."
todos:
  - id: "create-branch"
    content: "Create new git branch for Tailwind migration"
    status: not_started
  - id: "add-tailwind-cdn"
    content: "Add Tailwind CDN script with custom theme config"
    status: not_started
  - id: "convert-classes"
    content: "Replace CSS classes with Tailwind utility classes on all elements"
    status: not_started
  - id: "add-divider-styles"
    content: "Add minimal style block for section dividers"
    status: not_started
  - id: "remove-css"
    content: "Remove style.css link and optionally delete the file"
    status: not_started
createdAt: "2025-12-08T18:57:39.497Z"
updatedAt: "2025-12-08T18:57:39.497Z"
---

# Tailwind CDN Migration

## Changes to `index.html`

1. **Add Tailwind CDN** - Add the Tailwind Play CDN script with custom config for:
   - Colors: `primary: #111`, `bg: #fffffc`, `border: #898989`
   - Fonts: `heading: Recursive`, `mono: Geist Mono`

2. **Remove CSS link** - Delete `<link rel="stylesheet" href="style.css" />`

3. **Fix font link** - Line 22-24 has a typo (`<lin` instead of `<link>`)

4. **Add Tailwind classes** to elements:
   - `body`: `mx-auto max-w-[52rem] p-4 text-[0.975rem] font-mono leading-7 text-primary bg-bg`
   - `header`: `border-b-2 border-border`
   - `.header-container`: `pb-3`
   - `.header-title`: `font-heading text-3xl font-bold`
   - `.header-subtitle`: `flex gap-2`
   - `main`: `grid grid-cols-[min-content_1fr] gap-x-8 pt-4` (with responsive `md:grid-cols-1`)
   - `section`: `contents` + pseudo-element dividers via custom class
   - `.section-title`: `font-heading font-semibold text-lg leading-tight`
   - `.section-content`: `flex flex-col gap-4`
   - `.paper-title`: `font-semibold`
   - `.paper-details`, `.abstract`: `text-[0.9375rem]`

5. **Handle section dividers** - Add a small `<style>` block for the `section::after` pseudo-element (Tailwind can't do this inline)

## Files Modified
- `index.html` - Add Tailwind CDN, inline classes
- `style.css` - Can be deleted or left empty
