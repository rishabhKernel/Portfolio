# Rishabh Chaurasia - Developer Portfolio

A modern, highly creative developer portfolio website built with React.js, Tailwind CSS, and Framer Motion. Features smooth animations, glassmorphism UI, and a professional design inspired by top developer portfolios.

## 🚀 Quick Start (5 minutes)

### 1. Install Dependencies
```bash
git clone <repository-url>
cd rishabh-portfolio
npm install
```

### 2. Start Development Server
```bash
npm start
```
Your portfolio will open dynamically at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```
This creates an optimized production build in the `build` folder.

---

## ✨ Features Included

- **Modern Design**: Glassmorphism UI components, vibrant gradient typography.
- **Smooth Animations**: Framer Motion implementations globally (Particle background, hover tilts).
- **Responsive Layout**: Mobile-first grid design ensuring symmetry on all displays.
- **EmailJS Integration**: Fully-functioning `/Contact` form mapped to the developer via generic templates.
- **Dark Mode Engine**: Clean, minimal syntax leveraging `Tailwind CSS`.
- **Performance Optimized**: Micro-interactions without heavy DOM repaints.

---

## 🛠️ Tech Stack

**Frontend Framework / Ecosystem:**
- React.js 19.2.4
- Tailwind CSS 4.2.1
- Framer Motion 12.36.0
- React Icons 5.6.0
- React Type Animation 3.2.0

**Tooling & Integration:**
- EmailJS (Message Forms)
- PostCSS 8.5.8 & Autoprefixer
- React Scripts 5.0.1

---

## 🎨 Customization Guide

### Update Your Information
- **Hero.jsx**: Change `Your Name Here`, Update the typing animation sequences, configure Social URIs (`LinkedIn, GitHub, Email`).
- **About.jsx**: Modify your "Who I Am" bio and map relevant technical skills. 
- **Experience.jsx**: Edit `<experiences>` to embed your career timeline metrics cleanly.
- **Projects.jsx**: Insert your best full-stack builds, descriptions, github links, and demo URIs.
- **Achievements.jsx**: Sync your latest practice profiles from competitive platforms (e.g., LeetCode, HackerRank).
- **Education.jsx**: Format `<education>` arrays with recent degrees and CGPAs.
- **Contact.jsx**: Embed your default contact handles inside the mini-glass panels.

### Customize Global Theme Patterns
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#0f172a',      // Primary base background
      secondary: '#1e293b',    // Secondary contrasting background
      accent: '#3b82f6',       // Main core accent (blue default)
      'accent-light': '#60a5fa', // Light scaling accent element
    },
  },
}
```

### Resume Linking
Drop your updated resume PDF neatly naming it `resume.pdf` into `/public/`. The Hero download bind will natively fetch it for recruiters.

---

## ⚙️ Important Setup Actions (EmailJS)

The contact form is configured natively via a generic connection. 
*Current defaults mapped in `Contact.jsx`:*
- Public Key: `X9f4hPmp83dXMHKru`
- Service ID: `service_2jcrd2v`
- Template ID: `template_i6o8s58`

Update `Contact.jsx` constants independently if syncing to a different server instance via your own EmailJS Dashboard.

---

## 🌐 Deployment Rules

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
1. Run `npm run build`
2. Access `netlify.com` deployment engine
3. Just drag & drop the completed `build` chunk directly from the dashboard GUI to serve automatically.

### Option 3: GitHub Pages
1. Attach `"homepage": "https://username.github.io/repo-name"` to `package.json`
2. Install standard GitHub dependencies: `npm install --save-dev gh-pages`
3. Map build parameters in package scripts: 
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Push command payload via `npm run deploy` 

---

## 📁 Source File Structure

```
rishabh-portfolio/
├── public/
│   ├── index.html
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ParticleBackground.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Achievements.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.css
│   └── index.js
├── tailwind.config.js
└── package.json
```

---

## 🐛 Troubleshooting Basics

### Dependency Error (Missing Lib)
If the project breaks on a structural dependency run:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Network Port Overridden 
```bash
npm start -- --port 3001
```

## 📝 License Summary
This template structure operates under the open source MIT License.

---
**Good luck with your portfolio launch! 🚀**
