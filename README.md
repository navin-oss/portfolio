<div align="center">
  <h1 align="center">🚀 Navin Karavade — Developer Portfolio</h1>
  <p align="center">
    A premium, scrollytelling developer portfolio showcasing AI/ML projects, backend engineering, and open-source contributions. Built with React, Tailwind CSS, and Framer Motion.
  </p>
</div>

---

## 📚 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Live Integrations](#-live-integrations)
- [Contact](#-contact)

---

## ✨ Features

- 🔥 **Premium Scroll Animations:** Smooth reveal effects and staggered transitions using **Framer Motion**.
- 🎯 **Custom Interactive Cursor:** Spring-physics based animated dot and ring that scales on hover.
- 📊 **Dynamic GitHub Stats:** Live fetching from the GitHub API showing repositories, PRs merged, followers, and a live contribution heatmap.
- 💻 **Scrollytelling Tech Stack Display:** 3D-like spinning globe and tech stack marquee.
- ✍️ **Technical Blog Section:** Cards highlighting deep dives into AI/ML and software engineering.
- 💌 **Functional Contact Form:** Working form handling powered by **EmailJS**.
- 📱 **Mobile Responsive:** Fully responsive glassmorphism UI built with **Tailwind CSS**.

---

## 🛠 Tech Stack

| Technology | Description |
|---|---|
| **React (v18)** | Core JavaScript library for UI |
| **Vite** | Lightning-fast build tool and dev server |
| **Tailwind CSS (v4)** | Utility-first CSS framework for rapid UI styling |
| **Motion (Framer)** | Robust animation library for scroll/hover effects |
| **EmailJS** | Client-side email integration for the contact form |
| **GitHub API** | Real-time fetching of open-source contribution stats |
| **React GitHub Calendar** | Visual heatmap of GitHub activity |

---

## 📁 Project Structure

```bash
├── public/
│   └── assets/             # Images, icons, and resume PDF
├── src/
│   ├── components/         # Reusable UI elements (CustomCursor, ScrollReveal, ProjectDetails)
│   ├── constants/          # Site content, project data, and configurations
│   ├── sections/           # Major page sections (Hero, About, Projects, GitHubStats, Blog, Contact)
│   ├── App.jsx             # Main application layout
│   ├── index.css           # Global Tailwind and custom CSS overrides
│   └── main.jsx            # Application entry point
├── eslint.config.js        # ESLint configuration
├── vite.config.js          # Vite configuration
└── tailwind.config.js      # Tailwind theme and custom plugins
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/navin-oss/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory to configure the EmailJS contact form:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Run the Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

---

## 🔌 Live Integrations

This portfolio connects to live external services:
1. **GitHub API (`api.github.com/users/navin-oss`)**: Fetches public repos and followers dynamically.
2. **ghchart.rshah.org**: Generates the dynamic SVG contribution graph.
3. **EmailJS**: Forwards contact form submissions directly to email.

---

## 📫 Contact

- **GitHub:** [@navin-oss](https://github.com/navin-oss)
- **LinkedIn:** [Navin Karavade](https://www.linkedin.com/in/navin-karavade-2baa912b6/)
- **X (Twitter):** [@NavinKaravade](https://x.com/NavinKaravade)

---
<div align="center">
  <i>Designed and built with clean code and modern aesthetics.</i>
</div>
