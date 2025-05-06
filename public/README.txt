Lab 5b: Flex Navbar Updates

- Moved the image of myself (me.png) out of the <header> element across all pages (index.html, about.html, hobbies.html, projects.html) as recommended.
- Ensured all text within the navbar remains vertically aligned using Flexbox (`align-items: center`).
- Added a CSS reset at the top of styles.css:
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
- Re-applied spacing with padding and margins to body and main content areas to maintain clean layout after the reset.
- Verified that the navbar is present and consistent across all subpages.

Lab 6b: CSS Variables and Grid Updates

- Created a new `tokens.css` and defined design tokens under `:root` for:
    - Colors (`--color-bg-body`, `--color-bg-header`, `--color-bg-divider`, `--color-text-main`, `--color-text-header`, `--color-link`)
    - Fonts (`--font-heading`, `--font-body`)
    - Spacing (`--spacing-gap-large`, `--spacing-gap-medium`, `--spacing-gap-small`)
    - Sizing (`--image-width`)
- Imported `tokens.css` at the top of `styles.css` (`@import url("tokens.css");`)
- Replaced every hard‑coded color, font, gap, padding, and image size in `styles.css` with corresponding `var(--…)` references
- Wrapped the photo and contact `<dl>` in a two‑column grid (`#top-grid`) so that:
    - **Left column** contains the circular image and a `dl.info-grid` rendered with `grid-template-columns: max-content auto;`
    - **Right column** contains the “About Me” heading, paragraph, fun‑facts `<dl>`, and additional factoids
- Styled `dl.info-grid` as a neat two‑column layout for Phone, Email, and GitHub entries
- Kept the fun‑facts `<dl class="fun-facts">` separate so its bullets and spacing render correctly without affecting the contact grid







