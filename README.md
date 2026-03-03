# Insomnia Icon Set

Standalone preview for the **Insomnia** animated 5×5 dot grid icon set (163 icons).

- **Single and mixed colors**: white, neon cyan, magenta, green, plus two-color variants (cyan+magenta, cyan+green, magenta+green).
- **Hero**: breathing-dots animation (CSS).
- **Showcase**: all icons by category with click-to-open detail modal.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001).

## Build

```bash
npm run build
npm start
```

## Structure

- `app/page.tsx` — main page (preview)
- `app/preview/` — color variants, preview root, client components
- `app/insomnia/` — BreathingDotsHero, DotMatrixAnimations, IconDetailModal

This project was extracted from the Portfolio app to be independent (no Three.js or other portfolio dependencies).
