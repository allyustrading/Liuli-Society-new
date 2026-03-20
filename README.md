
# Liuli Society Website

GitHub-ready React + Vite project for the Liuli Society nonprofit website.

## Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

## Deploy

This project uses hash-based routing and `base: './'` in Vite, so it can be deployed easily to GitHub Pages or other static hosting.

## Image assets included

The project includes section-specific images in `src/assets/`:

- `hero_home.jpg`
- `hero_research.jpg`
- `hero_community.jpg`
- `wellness_pathways.jpg`
- `wellness_lab.jpg`

## Project structure

```text
liuli-society-site/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── assets/
    │   ├── hero_community.jpg
    │   ├── hero_home.jpg
    │   ├── hero_research.jpg
    │   ├── wellness_lab.jpg
    │   └── wellness_pathways.jpg
    ├── components/
    │   ├── Layout.jsx
    │   └── UI.jsx
    ├── data/
    │   └── siteData.js
    └── pages/
        ├── AboutPage.jsx
        ├── ApproachPage.jsx
        ├── CommunityPage.jsx
        ├── ContactPage.jsx
        ├── HomePage.jsx
        ├── NotFoundPage.jsx
        ├── PathwaysPage.jsx
        ├── ResearchPage.jsx
        ├── SupportPage.jsx
        └── UpdatesPage.jsx
```

## Notes

- This site uses hash-based routing so it can be deployed easily on static hosting.
- The messaging is intentionally nonprofit-focused and avoids commercial product language.
- The contact form is a design placeholder and is not wired to a backend yet.
- The included images are integrated into the Home, Pathways, Research, and Community pages.
