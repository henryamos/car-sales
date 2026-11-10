# 🏎️ Aura Motors — Luxury Automotive Platform (Next.js 15)

A bespoke, high-performance car sales platform built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed from the ground up with custom design tokens, modern rounded UI aesthetics, subtle glassmorphism, mobile-first responsiveness, and lightweight hardware-accelerated animations.

---

## 🌟 Key Highlights & Architectural Features

### 1. 🎨 Design Tokens & Aesthetic System
- **Obsidian & Slate Theme**: Deep dark palette (`#06080D`, `#0B0F19`, `#101624`) engineered for high-contrast luxury automotive photography.
- **Glassmorphism**: Subtle backdrop blurs (`backdrop-blur-xl`, `backdrop-blur-2xl`), delicate border gradients (`border-white/10`), inner specular highlights, and glowing accents without visual noise.
- **Rounded Cockpit UI**: Consistent squircle and curved geometry (`rounded-2xl`, `rounded-3xl`, `rounded-4xl`, `rounded-full`) inspired by modern supercar digital instrument clusters.
- **Metallic Typography**: Custom gradient text treatments (`text-metallic`, `text-gradient-cyan`, `text-gradient-gold`).

### 2. 📱 Mobile Responsiveness (Utmost Priority)
- Fluid layout tested from **320px mobile screens** up to **4K ultra-wide displays**.
- Mobile slide-out drawer navigation with frosted glass backdrop.
- Horizontally scrollable touch strips for category filters and image gallery thumbnails.
- **Sticky Mobile Bottom Bar** on car details pages for instant one-tap calling and test-drive booking.
- Touch-friendly tap targets exceeding 44px for accessibility.

### 3. 🎬 Smart, Lightweight Animations (Zero Heavy Bloat)
- **Hero Image Cross-Fade**: Smooth automatic slide rotation with scale-out and fade transitions between premier supercars.
- **Side Indicator Progress Bar**: An interactive vertical indicator tracking the active slide with an animated progress fill, pause-on-hover, and direct slide jumping.
- **Silky Scroll Reveal**: Custom IntersectionObserver hook (`useScrollReveal`) delivering staggered hardware-accelerated transforms without heavy external animation libraries.

### 4. 🎛️ Comprehensive Homepage Sections
1. **Glassmorphic Navigation Bar**: Sticky header with scroll detection, wishlist counter badge, concierge dialer, and mobile drawer.
2. **Flagship Animated Hero Section**: Dynamic background cross-fade, side progress bar, performance matrix, and docked quick-search widget.
3. **Curated Inventory Section**: Real-time multi-attribute search, body style selector pills, sorting dropdown (price, horsepower, 0-60, year), and reset filters.
4. **Bespoke Car Cards**: 16:10 aspect ratio imagery with zoom effect, verification badges, interactive heart wishlist toggle, 4-item quick specs ribbon, pricing, and monthly financing estimate.
5. **The Aura Standard (Why Us)**: 4 glass feature cards highlighting 150-Point Inspection, Enclosed White-Glove Delivery, 7-Day Money-Back Trial, and Bespoke Financing.
6. **360° & Cockpit Feature Spotlight**: Interactive perspective switcher (Exterior Aero, Driver Cockpit, Executive Interior) with animated hotspot pins.
7. **Financing Estimator**: Real-time interactive loan payment calculator with down payment, loan term, and APR sliders.
8. **Client Testimonials**: Verified luxury car buyer reviews with star ratings and purchased vehicle badges.
9. **VIP Concierge CTA & Footer**: Commission inquiries, showroom locations, hours, and private drop newsletter.

### 5. 🔍 Dedicated Car Details Page (`/cars/[id]`)
- **Multi-Image Gallery**: High-definition main picture, thumbnail strip, and **Fullscreen Lightbox Modal** with keyboard navigation (Esc, Left/Right arrows).
- **Quick Performance Bar**: 0-60 mph, horsepower, torque, top speed, odometer, and drivetrain.
- **Comprehensive Technical Spec Sheet**: Powertrain & Engineering, Cosmetics & Identity, and Provenance & CARFAX history.
- **Bespoke Equipment Checklist**: Grouped by Cockpit & Telemetry, Driver Assistance, Performance, and Luxury Appointments.
- **Vehicle-Specific Financing Tool**: Live loan payment calculation preloaded with the car's actual asking price.
- **Direct Concierge Booking Card**: Schedule private test drives, reserve with deposit, or request trade-in appraisal.
- **Similar Vehicles Carousel**: Related inventory recommendations based on body style and performance tier.

---

## 📁 Project Structure

```
car-sales/
├── next.config.mjs            # Remote image patterns & Next.js config
├── package.json               # Dependencies (Next 15, React 19, Lucide, Tailwind)
├── postcss.config.mjs         # PostCSS configuration
├── tailwind.config.ts         # Custom design tokens, colors, radiuses, shadows
├── tsconfig.json              # TypeScript strict configuration
└── src/
    ├── app/
    │   ├── globals.css        # Glass tokens, custom scrollbars, animations
    │   ├── layout.tsx         # Root layout with WishlistProvider, Navbar, Footer
    │   ├── page.tsx           # Home page orchestrating all sections
    │   └── cars/
    │       └── [id]/
    │           └── page.tsx   # Rich dynamic car details page
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx     # Glassmorphic header & mobile drawer
    │   │   └── Footer.tsx     # Showroom details & newsletter form
    │   ├── hero/
    │   │   └── HeroSection.tsx# Animated background carousel & side progress bar
    │   ├── cards/
    │   │   └── CarCard.tsx    # Bespoke rounded glass car card
    │   ├── sections/
    │   │   ├── FeaturedInventory.tsx  # Dynamic search, filtering & inventory grid
    │   │   ├── ExperienceShowcase.tsx # Why Aura 4 glass cards
    │   │   ├── FeatureSpotlight.tsx   # Interactive 360/cockpit perspective viewer
    │   │   ├── FinancingEstimator.tsx # Interactive loan payment calculator
    │   │   └── Testimonials.tsx       # Verified owner reviews
    │   └── car-details/
    │       ├── ImageGallery.tsx       # Multi-image viewer & fullscreen lightbox
    │       ├── QuickSpecsBar.tsx      # Performance metrics ribbon
    │       ├── DetailedSpecsTable.tsx # Grouped engineering & history table
    │       ├── FeaturesList.tsx       # Equipment checklists with check icons
    │       ├── VehicleFinancingCalc.tsx# Vehicle-specific loan calculator
    │       ├── InquiryCard.tsx        # Booking & concierge form
    │       └── SimilarCars.tsx        # Comparable alternatives
    ├── context/
    │   └── WishlistContext.tsx# Saved vehicles state with local storage
    ├── data/
    │   └── cars.ts            # High-resolution curated vehicle dataset
    ├── hooks/
    │   └── useScrollReveal.ts # Lightweight IntersectionObserver hook
    ├── lib/
    │   └── utils.ts           # Styling & price formatting utilities
    └── types/
        └── car.ts             # Complete TypeScript interfaces
```

---

## 🚀 Running the Project

```bash
# Navigate to the car-sales directory
cd car-sales

# Install dependencies (already installed)
pnpm install

# Start the development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to explore the platform.