# Vector Engineering & CNC Fabrication Web App

A high-converting, responsive industrial website built with **React**, **Vite.js**, and **Tailwind CSS**.

---

## 🚀 Getting Started

### 1. Development Server
To start the live Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port specified in terminal).

### 2. Production Build
To create an optimized, minified production build:
```bash
npm run build
```
This generates the standalone production bundle inside the `dist/` directory.

### 3. Preview Production Build
To preview the generated production build locally:
```bash
npm run preview
```

---

## 🛠 Tech Stack & Architecture

- **React 18** – Modular, high-performance UI components
- **Vite 5** – Sub-millisecond HMR and lightning-fast ES module bundling
- **Tailwind CSS 3** – Industrial color system (slate/charcoal `#121417` and safety-orange `#F97316`)
- **Lucide React** – Clean, modern engineering and mechanical icons

---

## 📂 Project Structure

```
VECTOR ENGINEERING/
├── index.html                   # HTML Entry point with Google Fonts
├── vite.config.js               # Vite configuration (port 3000)
├── tailwind.config.js           # Industrial color scheme & font definitions
├── postcss.config.js            # PostCSS Autoprefixer configuration
├── package.json                 # Project dependencies & scripts
└── src/
    ├── main.jsx                 # React root DOM mount
    ├── App.jsx                  # Main application assembly
    ├── index.css                # Tailwind directives & custom industrial patterns
    └── components/
        ├── Navbar.jsx           # Sticky nav, utility status bar & mobile drawer
        ├── Hero.jsx             # Value prop, live spindle graphic & trust bar
        ├── Capabilities.jsx     # 5 core CNC services with technical specs
        ├── MaterialsMatrix.jsx  # Categorized woods, plastics, metals & foams
        ├── Equipment.jsx        # 5x10 & 4x8 router specs, vacuum, and metrology
        ├── Portfolio.jsx        # Interactive filterable case studies
        ├── Process.jsx          # 4-step CAD-to-crate workflow
        ├── RfqSection.jsx       # Interactive RFQ form with drag-and-drop files
        ├── Faq.jsx              # Interactive animated FAQ accordion
        └── Footer.jsx           # Shop facility dock, hours, and legal notes
```
