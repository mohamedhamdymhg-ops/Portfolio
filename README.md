# Mohamed Hamdy Sayed Gouda — Professional Portfolio

A modern, production-ready personal portfolio website for **Mohamed Hamdy Sayed Gouda**, Digital Marketer based in Giza, Egypt. Built with **Next.js 14 (App Router)**, **TypeScript**, **React 18**, and **Tailwind CSS**.

Designed following an **elegant monochrome** aesthetic with amber/yellow primary highlights, high-contrast dark & light modes, comprehensive accessibility (WCAG compliant), technical SEO, and an interactive case study showcase utilizing verified project assets.

---

## 🚀 Live Demo & Quick Start

### Prerequisites
- **Node.js**: v18.17+ or v20+ / v22+ / v24+ (Tested and built on Node.js v24 LTS)
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Local Development Setup

1. **Clone or navigate to the repository:**
   ```bash
   cd "g:/Digital markting CLS/Portfolio"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000).

### Production Build

To test the optimized production build locally:
```bash
npm run build
npm run start
```

---

## 🎨 Design System & Palette

- **Aesthetic Direction**: Elegant Monochrome with balanced warm yellow accents.
- **Palette**:
  - **Primary**: Amber Yellow (`#F59E0B` / `#FBBF24` / `#D97706`)
  - **Dark Mode Background**: Charcoal & Deep Slate (`#090A0C`, `#131418`, `#1D2024`)
  - **Light Mode Background**: Crisp Clean White & Soft Slate (`#FDFDFD`, `#FFFFFF`, `#F7F8F9`)
  - **Text & Borders**: High-contrast neutral tones (`#F4F4F5`, `#121316`, `#24272E`, `#E5E7EB`)
- **Theme Support**: Seamless persistent toggle between Light and Dark mode with `localStorage` memory and system preference fallback.
- **Typography**: Clean, geometric sans-serif system stack optimized for performance and instant render without external font render blocking.
- **Micro-Interactions**: Smooth scroll navigation, active section indicators, interactive case study drawer with slide viewer and fullscreen lightbox.

---

## 📂 Project Architecture

```
Portfolio/
├── public/
│   ├── favicon.svg                          # Custom SVG monogram favicon
│   ├── favicon.ico                          # Standard favicon fallback
│   └── images/
│       ├── mohamed-hamdy.jpeg               # Verified profile portrait
│       └── projects/
│           ├── dental-clinic/
│           │   └── benefits-post.png        # Dental clinic service graphic
│           ├── nutrition/
│           │   ├── page-1-overview.png      # Nutrition slide deck (18 slides)
│           │   ├── buyer-persona.png
│           │   ├── gym-fitness-persona.png
│           │   └── ...                      # Additional strategy slides
│           ├── video-editor/
│           │   ├── opening-page.png         # Video editor strategy (11 slides)
│           │   ├── platform-strategy.png
│           │   └── ...                      # Additional strategy slides
│           └── logos/                       # Brand and agency marks
├── src/
│   ├── app/
│   │   ├── layout.tsx                       # Root layout with SEO metadata & theme wrapper
│   │   ├── page.tsx                         # Homepage assembling all prioritized sections
│   │   ├── globals.css                      # Tailwind styling, theme vars, accessibility rules
│   │   ├── robots.ts                        # Dynamic robots.txt generation
│   │   ├── sitemap.ts                       # Dynamic XML sitemap generator
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts                 # Production-ready contact form handler
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx                   # Responsive header with scrollspy & mobile drawer
│   │   │   ├── MobileNav.tsx                # Accessible slide-out mobile menu
│   │   │   ├── Footer.tsx                   # Comprehensive footer with links & back-to-top
│   │   │   └── ThemeToggle.tsx              # Dark/light mode switcher
│   │   ├── providers/
│   │   │   └── ThemeProvider.tsx            # Context provider for theme persistence
│   │   ├── sections/
│   │   │   ├── Hero.tsx                     # Identity, headline, avatar & primary CTAs
│   │   │   ├── PersonalInfo.tsx             # Snapshot card grid with 1-click copy actions
│   │   │   ├── About.tsx                    # DEPI background, client history & working philosophy
│   │   │   ├── Skills.tsx                   # 4 categories of marketing, creative & AI skills
│   │   │   ├── Experience.tsx               # Verified client projects & delivered work
│   │   │   ├── Education.tsx                # Beni-Suef Law Degree & DEPI (In Progress)
│   │   │   ├── Projects.tsx                 # Filterable project showcase & case studies
│   │   │   ├── Services.tsx                 # 6 core offered services & capabilities
│   │   │   ├── Certifications.tsx           # Oracle AI for You credential
│   │   │   └── Contact.tsx                  # Interactive contact form & direct reach-outs
│   │   └── ui/
│   │       ├── Badge.tsx                    # Status pills & tags
│   │       ├── Button.tsx                   # Reusable button with variants & accessibility
│   │       ├── SectionHeading.tsx           # Consistent section headers with eyebrow badges
│   │       ├── CvModal.tsx                  # Interactive modal handling CV requests
│   │       └── ProjectModal.tsx             # Comprehensive case study drawer with slide gallery
│   ├── data/
│   │   ├── portfolioData.ts                 # Single source of truth for personal information
│   │   └── projectsData.ts                  # Case study data, slides, and deliverables
│   └── types/
│       └── portfolio.ts                     # TypeScript data interfaces
├── .env.example                             # Environment variable template
├── next.config.mjs                          # Next.js optimization configuration
├── tailwind.config.ts                       # Tailwind theme extensions
├── tsconfig.json                            # TypeScript configuration
└── package.json                             # Dependencies & scripts
```

---

## 📌 Content Rules & Strict Truthfulness

In compliance with instructions, the website adheres to complete factual accuracy:
- **No Invented Metrics or Clients**: No fake percentages, ROI numbers, or undisclosed client names.
- **Paid Advertising Transparency**: Listed as an area of strength and an offered service, with explicit notice that paid advertising campaigns have not yet been run for clients.
- **DEPI Status**: Clearly presented as **In Progress** (17 July 2026 – 2 December 2026) under Education / Professional Development.
- **CV Download**: Marked as **In Preparation** via an interactive modal with direct email request actions until the final PDF is linked.
- **Oracle Certification**: Official "AI for You" (September 2026) credential highlighted.
- **Excluded Sections**: Testimonials and Blog/Articles sections are omitted as requested.

---

## 🛠️ Customization Guide

### 1. Updating Personal Information
Edit [`src/data/portfolioData.ts`](file:///g:/Digital%20markting%20CLS/Portfolio/src/data/portfolioData.ts):
- Contact information (Email, Phone, Location)
- Social links (LinkedIn, GitHub, Facebook, Instagram)
- Education dates and descriptions
- Service offerings and skill sets

### 2. Updating Projects and Adding New Case Studies
Edit [`src/data/projectsData.ts`](file:///g:/Digital%20markting%20CLS/Portfolio/src/data/projectsData.ts):
- Add new entries to `projectsData` array
- Point `featuredImage` and `slides[].src` to images in `public/images/projects/`
- Categorize by `category: "Content Strategy" | "Social Media Design" | "Visual Identity"`

### 3. Replacing the CV File
When the finalized CV PDF is ready:
1. Place the PDF in `public/cv.pdf`.
2. In [`src/components/ui/CvModal.tsx`](file:///g:/Digital%20markting%20CLS/Portfolio/src/components/ui/CvModal.tsx) or [`src/components/sections/Hero.tsx`](file:///g:/Digital%20markting%20CLS/Portfolio/src/components/sections/Hero.tsx), update the CTA button to link directly to `/cv.pdf` with the `download` attribute.

### 4. Updating the Profile Image
The portfolio uses the authentic photo at `public/images/mohamed-hamdy.jpeg`. If an updated portrait is taken:
1. Replace `public/images/mohamed-hamdy.jpeg`.
2. Next.js will automatically serve the updated image.

---

## 🌐 Connecting an Email Provider for the Contact Form

The contact form sends requests to [`/api/contact`](file:///g:/Digital%20markting%20CLS/Portfolio/src/app/api/contact/route.ts). Currently, it performs validation and logs inquiries.

To receive emails directly in your inbox:

### Option A: Using Resend (Recommended)
1. Sign up at [Resend](https://resend.com) and get an API key.
2. Install the SDK: `npm install resend`
3. Add to `.env.local`:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_NOTIFICATION_EMAIL=mohamed.hamdy.mhg@gmail.com
   ```
4. In [`src/app/api/contact/route.ts`](file:///g:/Digital%20markting%20CLS/Portfolio/src/app/api/contact/route.ts), invoke `resend.emails.send()`.

### Option B: Using Formspree
1. Create a form endpoint at [Formspree](https://formspree.io).
2. Update the `fetch()` call in [`src/components/sections/Contact.tsx`](file:///g:/Digital%20markting%20CLS/Portfolio/src/components/sections/Contact.tsx) to post to `https://formspree.io/f/{your_form_id}`.

---

## 🚢 Deployment Instructions

### Deploy to Vercel (Easiest & Free)
1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete production portfolio for Mohamed Hamdy"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Set the environment variable:
   - `NEXT_PUBLIC_SITE_URL`: `https://your-domain.com`
5. Click **Deploy**. Vercel will build and host your portfolio with instant global CDN distribution.

### Deploy to Netlify
1. Connect your repository in [netlify.com](https://netlify.com).
2. Set Build Command to `npm run build` and Publish Directory to `.next`.
3. Deploy!

---

## 📄 License & Attribution

Designed and developed for **Mohamed Hamdy Sayed Gouda**.
All rights reserved © 2026.
