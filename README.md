# Che-Wei Lin — Recruiter Portfolio

Minimal responsive React + Vite + Tailwind CSS portfolio with scroll reveal, projects, resume download, and GitHub Pages deployment.

## Run locally

Install Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173).

## Customize before publishing

1. Edit `src/data.js`: email, GitHub, LinkedIn, and project URLs. Empty URLs intentionally hide unavailable links.
2. Replace `public/resume.pdf` with your real resume (same filename).
3. Review all descriptions, experience details, and skills for accuracy.
4. Optionally adjust `index.html` metadata and text in `src/main.jsx`.

## Deploy to GitHub Pages

1. Create a **public** GitHub repository named `YOUR_USERNAME.github.io` (replace YOUR_USERNAME with your exact GitHub username).
2. In this folder, run:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```

3. GitHub repository **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Check the **Actions** tab for the deployment. Your site will be at `https://YOUR_USERNAME.github.io/`.
5. Subsequent pushes to `main` deploy automatically.

**Important:** `vite.config.js` uses `base: '/'` for a user/organization site (`YOUR_USERNAME.github.io`). If instead publishing to `https://YOUR_USERNAME.github.io/REPO/`, change `base` to `'/REPO/'`.

## Production build

```bash
npm run build
npm run preview
```

## Notes

- `public/resume.pdf` is a placeholder PDF. Replace it before sharing the site with recruiters.
- The Google Fonts import requires an internet connection; system fonts are the fallback.
- This is a static site, so no backend is required.
