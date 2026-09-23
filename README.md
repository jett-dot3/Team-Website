# Matthew Jett — Personal Resume & Portfolio Website

A clean, responsive, two-page personal website for **Matthew Jett**, an Information Systems and Decision Sciences (ISDS) student at Louisiana State University (LSU).

---

## 🚀 Website Pages & Features

- **Resume (Single-Page Design)**: [`index.html`](./index.html)
  - Centered executive resume document layout matching Matthew's formal resume.
  - Complete education details (LSU ISDS '26) and related business/analytics coursework.
  - Experience timeline with exact bullet points (ZEA Rotisserie, Scotts Miracle-Gro, C&M Outdoor Power, Carter Plantation).
  - Categorized technical & operational skills.
  - Interactive "Contact Me" modal revealing direct phone `(225) 788-1050` and email `matthewpjett@gmail.com`.
  - Clean "Print / Save PDF" mode formatted for 1-page paper printouts (`@media print`).
  - Dark/Light document theme toggle.
- **Project Showcase (Case Study)**: [`project.html`](./project.html)
  - Deep-dive into *Retail Inventory Optimization & Decision Support Analytics*.
  - System architecture diagrams and interactive dashboard mockups.
  - Python safety-stock and dynamic reorder threshold logic.
  - Quantifiable metrics: 98.5% inventory accuracy, 40% reduction in stockouts.

---

## ⚡ How to Publish Using Cloudflare Pages

Cloudflare Pages is ultra-fast, free, and hosts your static website globally.

### Option A: Connect to GitHub (Automatic Continuous Deployment — Recommended)

1. Log into your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left navigation menu, click **Workers & Pages**.
3. Click the **Create application** button (or **Create** > **Pages**).
4. Click the **Connect to Git** button.
5. Select your GitHub account (`jett-dot3`) and choose the repository: **`Team-Website`**.
6. Set the build configuration:
   - **Project name**: `matthew-jett` (or `team-website`)
   - **Production branch**: `main`
   - **Framework preset**: `None`
   - **Build command**: *(Leave blank)*
   - **Build output directory**: `/` *(Leave blank or `/`)*
7. Click **Save and Deploy**.

Cloudflare will deploy your site in ~15 seconds and give you a live URL:  
👉 **`https://matthew-jett.pages.dev`** (or `https://team-website.pages.dev`).  
Any future `git push` to your repository will automatically update your live site!

---

### Option B: Direct Upload (Deploy in 10 seconds without connecting Git)

1. In your Cloudflare Dashboard, go to **Workers & Pages** > **Create application** > **Pages**.
2. Select the **Upload assets** tab.
3. Enter your project name (e.g. `matthew-jett`).
4. Drag and drop this whole **`Team-Website`** folder into the upload box.
5. Click **Deploy site**.
6. Your website is immediately live on your `.pages.dev` URL!

---

## 💻 Local Testing

You can preview the website locally at any time:
- Double-click [`index.html`](./index.html) to open it directly in Edge, Chrome, or Firefox.
