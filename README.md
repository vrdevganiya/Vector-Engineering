# Vector Engineering - Industrial CNC Router & Fabrication Website

A complete, high-converting industrial website for **Vector Engineering**, featuring both a standalone single-page implementation (Tailwind CSS CDN + vanilla JS) and a modular **React + Vite** web app connected to a live **Supabase** backend for lead capture and quote inquiries.

---

## 🌟 Key Features

- **Exact Industrial Architecture:** High-contrast slate/charcoal palette (`#0f172a`, `#1e293b`), safety-amber accents (`#f97316`), sticky navigation with operating hours, phone, and quote triggers.
- **Flagship Machine Showcase:** Features the **ProCut 4x8 Wood Router** (24,000 RPM / 6KW spindle, 49" x 97" vacuum envelope, NC Studio/Mach3/DSP/DDCS controller options, 1-year warranty).
- **Live Supabase Backend:** Directly connected to PostgreSQL on Supabase (`inquiries` table with Row-Level Security) capturing form inquiries and quote requests in real time.
- **Interactive RFQ & Lead Gen Form:** Material selector, table size options, timeline, and file format validation.
- **Complete Business Identity:**
  - **Location:** Udhana, Surat, Gujarat-395006, India.
  - **Phone:** `+91 9712266167`
  - **Hours:** Mon–Fri: 9:00 AM – 7:00 PM | Sunday: Production Closed

---

## 🛠 Tech Stack

- **Frontend (Vite/React):** React 18, Vite 5, Tailwind CSS, Lucide React
- **Frontend (Standalone):** Standalone `index.html` with Tailwind CSS CDN, FontAwesome, Google Fonts
- **Backend / Database:** Supabase (PostgreSQL 15, REST API, Row Level Security)

---

## 🚀 Getting Started

### 1. Standalone Single-Page (No build needed)
Simply double-click or serve `index.html` directly in any web browser.

### 2. React + Vite Development Server
```bash
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Production Build
```bash
npm run build
```
Creates an optimized, minified production build in the `dist/` directory.

---

## 🗄 Supabase Backend Configuration

- **Project Name:** CNC Router
- **Project Ref:** `kbkurzriqgddnepmlnnt`
- **Table:** `public.inquiries`
  - Fields: `id`, `full_name`, `email`, `phone`, `company`, `machine_model`, `primary_material`, `bed_size`, `urgency`, `project_details`, `files_info`, `status`, `created_at`
- **Security:** RLS enabled with anonymous insert policy for web inquiries.

---

## 📂 Project Structure

```
VECTOR ENGINEERING/
├── index.html                   # High-converting standalone industrial page
├── vite.config.js               # Vite configuration (port 3000)
├── tailwind.config.js           # Industrial color scheme & fonts
├── package.json                 # Dependencies & scripts
├── public/                      # Static assets & images
│   ├── logo.jpg                 # Vector Engineering official logo
│   └── procut-router.jpg        # ProCut 4x8 CNC router machine image
└── src/
    ├── main.jsx                 # React DOM root
    ├── App.jsx                  # Main application component
    ├── supabaseClient.js        # Supabase client integration
    ├── index.css                # Tailwind directives
    └── components/
        ├── Navbar.jsx           # Header, operating hours, phone & CTA
        ├── Hero.jsx             # Flagship router showcase & trust badges
        ├── Capabilities.jsx     # CNC machining services & technical specs
        ├── MaterialsMatrix.jsx  # Woods, plastics, metals & composites
        ├── Equipment.jsx        # Machine lineup & controller specs
        ├── Portfolio.jsx        # Project gallery & case studies
        ├── Process.jsx          # 4-step CAD-to-crate workflow
        ├── RfqSection.jsx       # Supabase-connected quote inquiry form
        ├── Faq.jsx              # Technical & commercial FAQ accordion
        └── Footer.jsx           # Surat factory address, hours & credentials
```
