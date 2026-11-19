# Sai Teja Sagari — Portfolio

A personal portfolio built with Next.js and TypeScript.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project files

- `src/app/page.tsx` — homepage sections
- `src/app/portfolio-content.ts` — editable capability, experience, and featured website content
- `src/app/globals.css` — shared theme tokens and responsive styles
- `src/components/SiteHeader.tsx` — navigation and persistent theme control
- `public/images/portrait-placeholder.png` — replaceable transparent stock portrait
- `public/brand-kit/` — supplied logos, icons, social graphics, and print assets

Replace `public/images/portrait-placeholder.png` with a personal transparent
portrait when ready, keeping the same filename or updating the image path in
`src/app/page.tsx`. Experience details are based on the latest résumé available
locally. The featured website description summarizes its public content.

## Validate

```bash
npm run lint
npm run build
```
