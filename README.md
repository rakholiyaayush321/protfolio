# AI / ML Engineer Portfolio

A world-class, modern, and interactive developer portfolio built with React, Vite, Framer Motion, and React Three Fiber. Designed for AI/ML Engineers aiming for FAANG-level presentation.

![Portfolio Preview Showcase](https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200)

## 🚀 Features

- **Modern Glassmorphism UI:** Sophisticated dark/light themes with dynamic gradient accents.
- **Interactive 3D Elements:** Animated background particles and a rotating developer cube powered by `three` and `@react-three/fiber`.
- **Smooth Animations:** High-performance, scroll-triggered view transitions built with `framer-motion`.
- **SEO Optimized:** Dynamic meta tags and Open Graph configuration using `react-helmet-async`.
- **Performance Focused:** Lazy-loaded routing and optimized bundle loading.
- **Clean Architecture:** Modular, component-driven React architecture mapped meticulously using Tailwind CSS.

## 🛠️ Built With

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS + Custom Vanilla CSS Variables
- **Animations:** Framer Motion
- **3D Graphics:** React Three Fiber (`@react-three/fiber`, `@react-three/drei`, `three`)
- **Icons:** Lucide React & React Icons
- **SEO:** React Helmet Async

## 📦 Installation & Use

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🧠 Project Architecture

```
src/
├── assets/          # Static files & Images
├── components/      # Reusable React components
│   ├── canvas/      # 3D Elements (BackgroundCanvas, Scene)
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Experience.jsx
│   └── ...
├── index.css        # Global CSS + Theming variables
├── main.jsx         # App entry point with Helmet Context
└── App.jsx          # Component assembly and Suspense router
```

## 🌟 Customization

To personalize this portfolio:
1. **Configuring Info:** Update `src/components/` files (specifically `About.jsx`, `Projects.jsx`, `Experience.jsx`, and `Education.jsx`) to reflect your own information.
2. **Theming:** Modify the color palette variables inside `src/index.css`.
3. **Assets:** Drop your personal photo in `src/assets/` and update references.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

