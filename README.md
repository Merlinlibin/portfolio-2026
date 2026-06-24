# Merlin Libin — Portfolio

A premium, animated personal portfolio for **Merlin Libin**, Full Stack Developer.
Built with **React + TypeScript + Vite**, styled with a dark glassmorphism / bento aesthetic.

## ✨ Features

- **Dark glassmorphism + bento** layout with an animated aurora background
- **Light / dark mode** toggle (remembers your choice, respects system preference)
- **Typewriter** hero headline, animated gradient text, morphing avatar ring
- **Scroll-reveal** sections (IntersectionObserver), **count-up** stats, **3D tilt** cards
- **Working contact form** (Netlify Forms) with inline validation, loading + success states
- **Download CV** button and **WhatsApp** quick-contact
- Project cards with gradient **monogram banners** and optional Live/Code links
- **Cursor glow** + **scroll progress** bar
- Fully **responsive** (mobile-first) with a mobile nav drawer
- **Accessible**: keyboard focus rings, `prefers-reduced-motion`, `aria-live` form errors, SVG icons (no emoji)
- Zero UI dependencies beyond React — fast (~55 KB gzipped JS)

## 🧱 Tech Stack

| Area      | Tech                                            |
|-----------|-------------------------------------------------|
| Framework | React 18 + TypeScript                           |
| Tooling   | Vite 5                                           |
| Styling   | Hand-crafted CSS (custom properties, glass, grid) |
| Fonts     | Space Grotesk · Inter · JetBrains Mono          |

## 🚀 Getting Started

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check + production build -> dist/
npm run preview  # preview the production build
```

## 🖼️ Add your photo & CV

```
public/assets/profile.jpg                  # hero portrait (fallback: "ML" avatar)
public/assets/Merlin-Libin-Resume.pdf      # used by the "Download CV" button
```

If the photo is missing, a styled **"ML"** gradient avatar is shown as a fallback.

## ✉️ Contact form

The contact form uses **[Formspree](https://formspree.io)** — real emails, no backend,
and it works on localhost too.

**Setup (one time):**
1. Sign up at [formspree.io](https://formspree.io) with `merlinlibinmerlin@gmail.com`.
2. Create a **New Form** → copy its endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
3. Paste just the ID (`abcdwxyz`) into `formspreeId` in `src/data/content.ts`.
4. Submit the form once and confirm the verification email from Formspree.

Until `formspreeId` is set, the form **simulates** success (validates + shows the
success state) but sends nothing. Free tier: 50 submissions/month.

> Note: a web form can't send WhatsApp messages — the WhatsApp button is a
> click-to-chat shortcut. Email is the delivery channel.

## ✏️ Editing content

All copy lives in one typed file — no need to touch JSX:

```
src/data/content.ts
```

Update `profile` (name, email, phone, GitHub & LinkedIn URLs), `skills`,
`experience`, `projects`, `education`, and `stats` there.

> Note: update the `github` and `linkedin` URLs in `content.ts` to your real profiles.

## 📁 Structure

```
src/
├─ components/        # Navbar, Hero, About, Skills, Experience, Projects, Education, Contact, Footer
│  └─ ui/             # Reveal wrapper + SVG icon set
├─ hooks/             # useReveal, useCountUp, useTilt, useTypewriter
├─ data/content.ts    # all editable content (typed)
├─ index.css          # design system + all styles
├─ App.tsx
└─ main.tsx
```

## ☁️ Deploy (Netlify)

This repo includes `netlify.toml` and a SPA `_redirects` file.

- **Build command:** `npm run build`
- **Publish directory:** `dist`

Drag-and-drop the `dist/` folder onto Netlify, or connect the repo and it
deploys automatically. Vercel / GitHub Pages work too (`base: './'` is already set).

---

© Merlin Libin
