# Mechanical Engineering Portfolio

A simple React + Vite + Tailwind CSS portfolio site with an image gallery / lightbox for showcasing mechanical projects.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## How to personalize

1. **Your info & projects** — edit `src/data/profile.js`. This one file holds your name, bio, contact details, skills, and the project list.
2. **Your images** — drop image files into `public/images/`, then reference them in `profile.js` like `"/images/my-photo.jpg"`. Each project can have multiple images (they show in a swipeable lightbox).
3. **Colors / vibe** — tweak the theme colors in `src/index.css` (the `@theme` block).

## Build for production

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build
```
