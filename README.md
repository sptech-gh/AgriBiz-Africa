# AgriBiz Africa

AgriBiz Africa is a production-grade, highly-optimized web application built to showcase premium agricultural products, advisory services, and farming equipment in Ghana. The platform is designed with a mobile-first philosophy, utilizing responsive design, dual-channel lead capture systems, and technical SEO foundations.

[![Staging Status](https://img.shields.io/website?down_message=offline&label=staging&up_message=online&url=https%3A%2F%2Fagribiz-africa.netlify.app)](https://agribiz-africa.netlify.app)
[![Production Status](https://img.shields.io/website?down_message=offline&label=production&up_message=online&url=https%3A%2F%2Fagribiz.africa)](https://agribiz.africa)

---

## 🚀 Key Features

*   **Premium Agricultural Directory**: Rich, categorized product lists covering premium seeds (maize, vegetable), organic fertilizers (NPK, Urea), organic pesticides, and modern farming equipment.
*   **Dual-Channel Lead Capture**:
    *   **Interactive Netlify Form**: Clean, accessible inputs for custom inquiries and quotes.
    *   **Context-Aware WhatsApp Click-to-Chat**: Smart links embedded directly under each product to open WhatsApp with pre-filled messages (e.g., *"I'm interested in ordering Premium Maize Seeds"*).
*   **QUALISEED Community**: Embedded links to join the official QUALISEED WhatsApp Channel for real-time farming tips, seed selection advice, and community engagement.
*   **Performance Optimization**:
    *   **Zero External Requests**: All media assets, fonts, and scripts are self-hosted to eliminate render-blocking HTTP requests.
    *   **Responsive Multi-format Image Pipeline**: Custom component serving AVIF, WebP, and high-quality fallbacks at multiple responsive breakpoints (`320w`, `480w`, `640w`, `768w`, `1024w`, `1440w`, `1920w`).
    *   **Vite Code-Splitting**: Vendor dependency splitting to ensure rapid first-contentful-paint (FCP).
*   **Agronomy & Business Blog**: Detailed articles on crop optimization, soil health, and pest management.
*   **Accessible Modern UI**: Premium glassmorphism design, custom animations, responsive layouts, and full accessibility compliance (minimum `44px` touch targets).

---

## 🛠️ Technology Stack

*   **Framework**: [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Host/Form Handling**: [Netlify](https://www.netlify.com/)

---

## 📂 Project Structure

```text
agribiz-africa-main/
├── public/                 # Static assets
│   ├── images/             # Source and optimized assets
│   │   └── optimized/      # AVIF/WebP responsive image outputs
│   └── videos/             # Optimised product/background videos
├── scripts/                # Development utility scripts
│   ├── optimize-images.js  # Node.js sharp image optimization script
│   └── analyze-video.js   # Video aspect ratio and resolution analyzer
├── src/
│   ├── components/         # Modular React components
│   │   ├── ResponsiveImage.tsx # Source-set responsive media handler
│   │   ├── OurWork.tsx     # Impact and case studies section
│   │   └── WhatsAppFloat.tsx # Floating click-to-chat overlay
│   ├── data/
│   │   └── blogData.ts     # Blog posts content store and metadata
│   ├── utils/
│   │   ├── analytics.ts    # GA4 hooks and conversion tracking helpers
│   │   └── webVitals.ts    # Core Web Vitals reporting
│   ├── App.tsx             # App entry point
│   ├── index.css           # Custom utilities and Tailwind directives
│   └── main.tsx            # DOM mounting
└── vite.config.ts          # Vite build, code-splitting and output configuration
```

---

## 🧑‍💻 Getting Started

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm (v9 or higher recommended)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/sptech-gh/AgriBiz-Africa.git
    cd AgriBiz-Africa
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server locally:
    ```bash
    npm run dev
    ```
    Access the local environment at `http://localhost:5173`.

---

## 📦 Production & Deployment

### Build Compilation

Compile the optimized production bundle with type-checking:
```bash
npm run build
```

The output bundle will be generated under the `dist/` directory. You can preview the production bundle locally with:
```bash
npm run preview
```

### Image Optimization Pipeline

To regenerate responsive image sizes (`-320w`, `-480w`, etc.) and modern formats (`.webp`, `.avif`) for public images:
```bash
node scripts/optimize-images.js
```
This utility uses `sharp` to process PNG/JPEG inputs in the `public/images` folder, outputting optimized compressed files inside `public/images/optimized/` and updating the `manifest.json`.

---

## 📈 Technical SEO

*   **Semantic Elements**: Correct usage of standard HTML5 elements (`<header>`, `<section>`, `<article>`, `<main>`).
*   **Structured Data**: Integrated JSON-LD LocalBusiness schemas on search-facing routes.
*   **Search Engine Crawling**: Hand-crafted [sitemap.xml](https://agribiz.africa/sitemap.xml) and custom [robots.txt](https://agribiz.africa/robots.txt) rules.
*   **Metadata**: Page-specific titles, keywords, canonical tags, and Open Graph / Twitter Cards configuration.
