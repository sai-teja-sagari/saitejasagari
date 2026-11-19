# Sai Teja Sagari - Logo Kit

Every file is generated from the same vector outlines. No fonts are used anywhere (all lettering is converted to curves),
so nothing can substitute, reflow, or break on another machine.

## Which file do I use?

| Need | File |
|---|---|
| Website header (light/dark theme aware) | `svg/logo-horizontal-currentcolor.svg` (inline it; it inherits CSS `color`) |
| Website hero / large display | `svg/logo-full-black.svg` or `-white.svg` |
| Monogram only (avatars, loaders, watermarks) | `svg/logo-mark-*.svg` |
| Browser tab icon | `favicon/` folder |
| Print (business cards, posters) | `pdf/*-K100.pdf` (pure black, vector) or `eps/` |
| Slides / Word / Canva | `png/transparent/*-2048w.png` or larger |
| Social sharing preview (og:image) | `social/og-image-1200x630-light.png` / `-dark.png` |
| LinkedIn / X / GitHub / Instagram | `social/` folder |
| Phone home-screen / PWA | `app-icons/` folder |

Variants: **full** (monogram + name + tagline), **stacked** (monogram + name), **horizontal** (monogram left, name right),
**mark** (monogram only), **wordmark** (name only).
Colours: black `#0B0B0B`, white `#FFFFFF`, and `currentcolor` (SVG only) for CSS theming.

## Website setup (paste in `<head>`)

```html
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0B0B0B">
<meta name="theme-color" content="#F7F6F3" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0B0B0B" media="(prefers-color-scheme: dark)">
<meta property="og:image" content="https://YOUR-DOMAIN/og-image-1200x630-light.png">
<meta name="twitter:card" content="summary_large_image">
```

Next.js: put `favicon.ico`, `apple-touch-icon.png`, and `og-image` in `app/` (App Router picks them up automatically).

Theme-aware logo in React / Tailwind (paste the SVG markup inline, then):

```jsx
<span className="text-black dark:text-white"> {/* inline logo-horizontal-currentcolor.svg here */} </span>
```

## Usage rules
- Keep clear space around the logo of at least the height of the "T" crossbar.
- Minimum size: monogram 24 px wide, full lockup 160 px wide (tagline becomes unreadable below this; use stacked or mark instead).
- Use black on light backgrounds and white on dark. Don't stretch, recolour, or add effects.

## Note on source quality
This kit was vectorized from the 1158 x 743 px image supplied. Curves were smoothed and fitted as Bezier outlines, so the
monogram is crisp at any size. For pixel-perfect lettering at billboard scale, supply the original vector/high-res file.
