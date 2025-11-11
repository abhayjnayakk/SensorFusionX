# Automotive Sensor Fusion Platform

Modern Vite + React + TypeScript dashboard for automotive sensor fusion and perception quality visualization for autonomous and connected vehicles.

## Getting Started

Prerequisites:
- Node.js 18+ and npm

Install and run in development:

```sh
npm install
npm run dev
```

Build for production:

```sh
npm run build
npm run preview
```

## Deploy on GitHub Pages

This repo is preconfigured to deploy to GitHub Pages using Actions.

Steps:
- Create a new GitHub repository and push this code.
- In repository Settings → Pages, set Source to GitHub Actions.
- Ensure your default branch is `main` or `master`.
- On push, the workflow `.github/workflows/deploy.yml` will build and publish `dist/`.

If your repository name is not `sensor-fusion-vehicles`, update the `base` in `vite.config.ts` to `"/<your-repo>/"`.

## Tech Stack
- Vite
- React 18
- TypeScript
- shadcn-ui
- Tailwind CSS
- React Router
- Recharts

## License
MIT
