# Rohan Fozdar

Personal site for Rohan Fozdar: a short bio, work history, and selected projects. The layout follows a quiet academic page — a single reading column, Petrona, and a faint Game of Life background.

The portrait is a monogram placeholder. To use a photo, add `public/photo.jpg` and change the image `src` in `index.html` from `%BASE_URL%photo.svg` to `%BASE_URL%photo.jpg`.

## Run locally

```bash
npm install
npm run dev
```

The dev server is at [http://127.0.0.1:43123](http://127.0.0.1:43123).

```bash
npm run build
npm run preview
```

## Publish on GitHub Pages

The workflow in `.github/workflows/pages.yml` builds the site and deploys it on every push to `main`.

1. In the repository settings, open **Pages** and set the source to **GitHub Actions**.
2. Push to `main`.

For a user site (`https://rohanfozdar.github.io/`), keep the default base path of `/`. Put this project in a repository named `rohanfozdar.github.io`.

For a project site (`https://<user>.github.io/<repo>/`), set the repository variable `BASE_PATH` to `/<repo>/` (Settings → Secrets and variables → Actions → Variables). The workflow passes that value into the Vite build.

The CV button links to `public/resume.pdf`, published with the site.
