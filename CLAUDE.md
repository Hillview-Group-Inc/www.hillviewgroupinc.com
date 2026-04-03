# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Vite dev server with HMR
npm run server   # Start Express email server (port 3001)
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

> Both `npm run dev` and `npm run server` must be running for the contact form to send emails.

## Architecture

**Stack:** React 19, React Router v7, Tailwind CSS v4, Vite + Express (email server)

**Entry points:**
- `index.html` → `src/main.jsx` (wraps app in `BrowserRouter`) → `src/App.jsx` (route definitions)

**Routes:**
- `/` → `src/Pages/Homepage.jsx`
- `/services` → `src/Pages/Services.jsx`
- `/about-us` → `src/Pages/AboutUs.jsx`
- `/contact` → `src/Pages/Contact.jsx`

**Component organization:**
- `src/Pages/` — top-level page components that compose section components
- `src/Components/` — reusable section components shared or page-specific
- `src/Components/AboutUs/` and `src/Components/Services/` — sub-components for those pages

**Assets:**
- Images live in `public/assets/` (PNG format), referenced as `/assets/filename.png`
- Favicon: `public/favicon.ico`, referenced in `index.html`
- Custom font: ClashGrotesk, loaded via `public/clash-grotesk.css` and font files in `public/fonts/` and `src/Fonts/`
- Background images for sections are set via inline styles or `App.css`, not Tailwind

**Styling:**
- Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin — no `tailwind.config.js` needed)
- Global styles in `src/index.css` (imports Tailwind)
- Section-specific background images and scrollbar overrides in `src/App.css`
- Mobile-first responsive design using Tailwind breakpoints (`sm:`, `md:`, `lg:`, `xl:`)

**State:** Local React state only (`useState`, `useEffect`). No global state manager.

## Navigation & Linking conventions

- All "Let's talk" buttons link to `/contact#contact-form` (scrolls directly to the contact form)
- The Contact page (`src/Pages/Contact.jsx`) uses a `useEffect` + `useLocation` to scroll to `#contact-form` when the hash is present
- The `#contact-form` id is on the form container div in `src/Components/ContactUs.jsx`
- "Learn more" buttons link to `/services`
- The navbar logo links to `/` on all pages
- Footer links (Home, Services, About Us, Contact, logo) all use React Router `<Link>` — no plain `<a href="#">`
- The Industries section "Let's talk" button uses `useNavigate` + a scroll check: scrolls to `#contact-form` if on the contact page, otherwise navigates to `/contact#contact-form`

## Email / Contact Form

- **Backend:** `server.js` — Express server running on port 3001
- **Transport:** Nodemailer via `smtp.gmail.com` (port 465, SSL)
- **Config:** credentials stored in `.env` (gitignored)
  - `SMTP_USER` — Gmail address used to send
  - `SMTP_PASS` — Gmail App Password (not the account password)
  - `ADMIN_EMAIL` — recipient address (`service@hillviewgroupinc.com`)
  - `CLIENT_ORIGIN` — allowed CORS origin (default: `http://localhost:5173`)
  - `PORT` — server port (default: `3001`)
- **Frontend:** `src/Components/ContactUs.jsx` POSTs to `http://localhost:3001/api/contact` and shows inline success/error feedback
- Gmail requires a **App Password** (Google Account → Security → App Passwords); plain account passwords are blocked
