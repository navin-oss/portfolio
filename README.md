<div align="center">

# 🚀 Navin Karavade — Developer Portfolio

### A premium, scrollytelling developer portfolio showcasing AI/ML projects, backend engineering, and open-source contributions.
### Built with React, Tailwind CSS, and Framer Motion — designed to make an impression.

![3d Portfolio Screenshot GitHub](https://github.com/user-attachments/assets/9b0ed20e-074e-4f2a-81d8-20c9da751e9e)
<br />

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://navin-dev-portfolio.netlify.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<br />

[🌐 Live Demo](#-live-demo) • [✨ Features](#-features) • [🛠 Tech Stack](#-tech-stack) • [📁 Structure](#-project-structure) • [⚡ Getting Started](#-getting-started) • [🔌 Live Integrations](#-live-integrations) • [📫 Contact](#-contact)

</div>

---

## 🎯 Overview

This is my **personal developer portfolio** — a production-grade, fully animated web application built to showcase my work in AI/ML engineering, backend development, and open-source contributions.

It features live GitHub stats, smooth scroll animations, a custom interactive cursor, a technical blog section, and a working contact form — all in a single sleek React application deployed on Netlify.

> Built by a 3rd-year B.Tech student in AI & ML, Dean's List — for developers who refuse to settle for a boring portfolio.

---

## 🌐 Live Demo

> 🔗 **[View Live Portfolio → navin-dev-portfolio.netlify.app](https://navin-dev-portfolio.netlify.app/)**

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎯 **Custom Interactive Cursor** | Spring-physics animated dot and ring that scales and morphs on hover |
| 🎞️ **Premium Scroll Animations** | Smooth reveal effects and staggered entrance transitions via Framer Motion |
| 📊 **Live GitHub Stats** | Real-time data from the GitHub API — repos, PRs merged, followers, and a contribution heatmap |
| 🌍 **Scrollytelling Tech Stack** | Animated tech stack marquee and globe-inspired display |
| ✍️ **Technical Blog Section** | Cards highlighting deep dives into AI/ML and software engineering topics |
| 💌 **Functional Contact Form** | EmailJS-powered form — works with zero backend |
| 🧩 **Modular Architecture** | Clean separation of components, constants, and page sections |
| 📱 **Fully Responsive** | Glassmorphism UI that adapts beautifully to any screen size |
| 🌙 **Dark-First Design** | Elegant dark aesthetic with carefully chosen color accents |
| ⚡ **Blazing Fast** | Vite-powered builds with near-instant HMR in development |

---

## 🛠 Tech Stack

<div align="center">

| Technology | Role | Version |
|---|---|---|
| ⚛️ **React** | Core UI library | 18.x |
| ⚡ **Vite** | Build tool & dev server | Latest |
| 🎨 **Tailwind CSS** | Utility-first styling framework | v4 |
| 🎭 **Framer Motion** | Scroll & hover animations | Latest |
| 📧 **EmailJS** | Client-side contact form delivery | Latest |
| 🐙 **GitHub REST API** | Live contribution stats & repo data | v3 |
| 📅 **React GitHub Calendar** | SVG contribution heatmap | Latest |

</div>

---

## 📁 Project Structure

```
navin-dev-portfolio/
│
├── 📂 public/
│   └── 📂 assets/              # Images, icons, and resume PDF
│
├── 📂 src/
│   ├── 📂 components/          # Reusable UI elements
│   │   ├── CustomCursor.jsx    # Spring-physics animated cursor
│   │   ├── ScrollReveal.jsx    # Scroll-triggered reveal wrapper
│   │   └── ProjectDetails.jsx  # Project modal/card component
│   │
│   ├── 📂 constants/           # Site content and static configuration
│   │   └── index.js            # Projects, skills, blog posts, nav links
│   │
│   ├── 📂 sections/            # Full-page portfolio sections
│   │   ├── Hero.jsx            # Intro with animated headline
│   │   ├── About.jsx           # Bio and tech stack display
│   │   ├── Projects.jsx        # Featured project showcase
│   │   ├── GitHubStats.jsx     # Live GitHub API integration
│   │   ├── Blog.jsx            # Technical writing cards
│   │   └── Contact.jsx         # EmailJS-powered form
│   │
│   ├── App.jsx                 # Root layout and section assembly
│   ├── index.css               # Global Tailwind directives and custom CSS
│   └── main.jsx                # Application entry point
│
├── eslint.config.js            # Linting rules
├── vite.config.js              # Vite bundler configuration
└── tailwind.config.js          # Tailwind theme and custom plugins
```

---

## ⚡ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) `v18+`
- [npm](https://www.npmjs.com/) `v9+` or [yarn](https://yarnpkg.com/)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/navin-oss/portfolio.git
cd portfolio
```

**2. Install dependencies**
```bash
npm install
```

**3. Set up environment variables**

Create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
> 🔑 Get your free keys at [emailjs.com](https://www.emailjs.com/)

**4. Start the development server**
```bash
npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** in your browser 🎉

### Build for Production

```bash
npm run build
```
Output lands in the `dist/` folder — ready to deploy.

### Preview Production Build Locally

```bash
npm run preview
```

---

## 🌐 Deployment

This portfolio is live on **Netlify**. You can deploy your fork on any static hosting platform:

| Platform | How to Deploy |
|---|---|
| **Netlify** | Connect your GitHub repo at [netlify.com](https://netlify.com) or drag & drop `dist/` |
| **Vercel** | Run `npx vercel` or import via [vercel.com](https://vercel.com) |
| **GitHub Pages** | Use `vite-plugin-gh-pages` |

> ⚠️ Don't forget to add your `.env` variables in your hosting platform's environment settings.

---

## 🔌 Live Integrations

This portfolio connects to live external services at runtime:

| Service | What it does |
|---|---|
| **GitHub REST API** (`api.github.com/users/navin-oss`) | Fetches live repo count, follower count, and contribution data |
| **ghchart.rshah.org** | Generates the dynamic SVG GitHub contribution heatmap |
| **EmailJS** | Routes contact form submissions directly to my inbox — no server required |

---

## 🎨 Customization (Fork This!)

If you're using this as a base for your own portfolio, here's what to update:

- **Your info & projects** → `src/constants/index.js`
- **Color scheme** → `tailwind.config.js` and CSS variables in `index.css`
- **Sections** → Add/remove in `src/sections/` and register in `App.jsx`
- **GitHub username** → Update the API URL in `GitHubStats.jsx`
- **EmailJS credentials** → Your `.env` file

---


## 📫 Contact

I'm always open to collaborations, internship opportunities, and interesting projects — let's connect!

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/navin-karavade-2baa912b6/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/navin-oss)
[![X (Twitter)](https://img.shields.io/badge/X_(Twitter)-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/NavinKaravade)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://navin-dev-portfolio.netlify.app/)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — free to use, modify, and distribute with attribution.

---

<div align="center">

Made with ❤️ by **Navin Karavade** — AI/ML Engineer · Open Source Contributor · Chess Champion 🏆

<br />

⭐ **Star this repo** if you found it useful — it helps others discover it too!

</div>
