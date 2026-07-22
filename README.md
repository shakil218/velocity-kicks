# 👟 Velocity Kicks — Responsive Retail Home Page

> **MOH Technology — Frontend Developer Internship Assessment**  
> *Objective:* Design and develop a highly polished, responsive Home Page for a retail footwear business using React.js.

---

## 🔗 Live Links
- **GitHub Repository:** [https://github.com/shakil218/velocity-kicks](https://github.com/shakil218/velocity-kicks)
- **Live Demo Host:** Hosted on Vercel / Netlify

---

## ⚡ Features Overview

- **Product Showcase (12 Products):** Displays 12 products featuring footwear images, product names, price & discount strikethrough, ratings, review counts, and category tags.
- **Interactive Search Bar & Filtering:** Real-time search query filtering by sneaker name, description, or tag.
- **Category Filter Pills:** Instant filter tabs (`All`, `Running`, `Casual`, `Basketball`, `Skateboarding`, `Training`).
- **Sorting Options:** Sort products by Price (Low to High, High to Low), Highest Rating, or Featured.
- **Quick View Modal:** Interactive pop-up detailing full sneaker descriptions, colorways, US size selection, and stock availability.
- **Hero / Banner Section:** High-converting hero banner with floating shoe showcase, trust metrics, and action CTAs.
- **Features & Trust Bar:** Highlighting free express shipping, 100% authentic guarantee, easy returns, and 24/7 support.
- **Reviews & Testimonials:** authentic customer reviews with rating breakdown and verified badges.
- **Promotional Flash Deal & Newsletter:** 20% discount offer code banner and email subscription mockup with feedback state.
- **Smooth Animations & Micro-interactions:** Built with **Framer Motion** for mobile drawers, hover zoom, and modal transitions.

---

## 🛠️ Technology Stack & Libraries

- **Framework:** React.js 19
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS v4 + Custom Glassmorphism & Glow Utilities
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Typography:** Google Fonts (*Plus Jakarta Sans* & *Space Grotesk*)

---

## 📂 Project Component Architecture

```
src/
├── assets/                  # Static assets & images
├── components/
│   ├── common/              # Atomic reusable elements
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   ├── RatingStars.jsx
│   │   └── SearchInput.jsx
│   ├── layout/              # Structural headers & footers
│   │   ├── Navbar.jsx       # Glassmorphism header & mobile drawer menu
│   │   └── Footer.jsx       # Responsive multi-column footer
│   ├── product/             # Product showcase modules
│   │   ├── CategoryFilter.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   └── ProductQuickViewModal.jsx
│   └── sections/            # Landing page sections
│       ├── Hero.jsx
│       ├── FeaturesBar.jsx
│       ├── PromoBanner.jsx
│       ├── ReviewsSection.jsx
│       └── NewsletterSection.jsx
├── data/
│   └── products.js          # Static dataset of 12 retail sneakers
├── hooks/
│   └── useProductFilter.js  # Custom React hook for category, search, & wishlist state
└── App.jsx                  # Main page composer
```

---

## 💻 Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shakil218/velocity-kicks.git
   cd velocity-kicks
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🎨 Design & Assessment Compliance
- **Responsive Layout:** Tested & verified across Mobile (`375px`), Tablet (`768px`), and Desktop (`1280px+`).
- **Static Mockup Constraint:** Adheres strictly to evaluation constraints — state changes (filtering, search, modal toggle, wishlist) operate client-side without external backend dependencies.
