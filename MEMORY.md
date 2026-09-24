# Automatric Project Memory

Dokumen memori ini mencatat arsitektur, keputusan teknis, status pengerjaan, dan seluruh riwayat perubahan di repositori `automatric`. Setiap perubahan kode atau konfigurasi wajib dicatat di sini sesuai panduan `SKILL.md`.

---

## 1. Identitas & Profil Proyek
* **Nama Bisnis**: Automatric
* **Positioning**: Next-Gen AI Growth Agency (Fokus UMKM, Retail, & Bisnis Online)
* **Pilar Layanan**:
  1. Otomasi CS & Chatbot WhatsApp AI 24/7 (tanya jawab katalog, rekap pesanan, follow-up)
  2. Desain & Konten Promosi Kilat (Turnaround <24 Jam)
  3. Iklan Presisi Berbasis AI (Meta Ads & TikTok Ads)
* **Model Penetapan Harga**: Paket Sprint Sekali Bayar (Starter Rp 2.9jt, Growth Rp 5.9jt [Featured], Domination Rp 9.9jt)
* **Alur Konversi**: Tombol paket terhubung langsung ke WhatsApp dengan pesan pre-filled otomatis.

---

## 2. Technical Stack & Arsitektur
* **Framework**: React 19 + TypeScript
* **Build Tool**: Vite 6
* **CSS & Styling**: Tailwind CSS 3
  * *Theme*: Deep Black Dominant (`#030508` / `#050811` / `#090d16`)
  * *Style*: Ultra Glassmorphism (`backdrop-blur-xl`, `border-white/[0.09]`, translucent dark glass cards)
  * *UI/UX Standard*: Anti-Slop principles (`ui-ux-pro-max`), no emojis as icons, WCAG AA contrast (4.5:1+), realistic Indonesian UMKM use cases.
* **Icons**: `lucide-react`
* **Observability**: Lightweight Background Telemetry Logger (`page_view`, `pricing_plan_clicked`, `whatsapp_redirect`, `web_vitals`) with correlation `sessionId` and zero PII.
* **Repository**: `https://github.com/purnomoyusgiantoro/automatric`

---

## 3. Status Terkini Proyek
* [x] Inisialisasi repositori Git dan clone ke `D:\Documents\automatric`.
* [x] Konfigurasi environment: Node v24, npm, React 19, Tailwind CSS, Vite.
* [x] Brainstorming & Penyusunan Dokumen Spesifikasi Desain (`docs/superpowers/specs/2026-09-24-automatric-landing-page-design.md`).
* [x] Pembuatan aturan `SKILL.md` dan inisialisasi `MEMORY.md`.
* [x] Pembuatan Implementation Plan (`docs/superpowers/plans/2026-09-24-automatric-landing-page.md`).
* [x] **Task 1 Selesai**: Implementasi site config (`src/config/site.ts`) dan Telemetry Observability Engine (`src/telemetry/tracker.ts`).
* [x] **Task 2 Selesai**: Sticky Glass Navbar (`src/components/Navbar.tsx`) & Hero Section with Live Metrics (`src/components/HeroSection.tsx`).
* [x] **Task 3 Selesai**: Tiga Pilar Layanan (`src/components/PillarsSection.tsx`) dengan simulasi chat WhatsApp interaktif, prompt-to-banner pipeline, dan kartu metrik analitik iklan ROAS +4.2x.
* [x] **Task 4 Selesai**: Interactive Pricing Section with "Choose Plan" & WhatsApp Sync (`src/components/PricingSection.tsx`).
* [x] **Task 5 Selesai**: FAQ Section (`src/components/FaqSection.tsx`), Footer (`src/components/Footer.tsx`), and Full App Assembly (`src/App.tsx`).
* [x] **Task 6 Selesai**: Production Build (`npm run build` 0 error), Telemetry Audit & Final Git Push.

---

## 4. Change Log / Riwayat Perubahan

### [2026-09-24 21:43] - Implementasi WorkflowSection & PricingSection (Choose Plan)
* **Tipe**: Fitur & Desain
* **File Terkait**: `src/components/WorkflowSection.tsx`, `src/components/PricingSection.tsx`
* **Detail**:
  - `WorkflowSection.tsx`: Menampilkan timeline progresif alur kerja sprint 3–7 hari dengan badge nomor bercahaya, garis penghubung glow, dan kartu jaminan serah terima.
  - `PricingSection.tsx`: Menghadirkan 3 paket harga Sekali Bayar (*Starter*, *Growth [Featured]*, dan *Domination*) dengan sistem interaktif *Choose Plan*, highlight border emerald bercahaya pada paket aktif, dan bar konfirmasi dinamis yang langsung membuka WhatsApp dengan format pesan otomatis terisi.
  - Verifikasi: `npm run build` sukses 100% tanpa error.


### [2026-09-24 21:42] - Implementasi HeroSection & PillarsSection
* **Tipe**: Fitur & Desain
* **File Terkait**: `src/components/HeroSection.tsx`, `src/components/PillarsSection.tsx`, `src/components/Footer.tsx`, `src/App.tsx`
* **Detail**:
  - `HeroSection.tsx`: Menghadirkan hero section bertema Deep Black Glassmorphism (`#030508`), 4 feature badges pill (⚡ Desain <24 Jam, 🤖 Chatbot WA 24/7, 📈 Iklan Berbasis AI, 💰 Sprint Sekali Bayar), dual CTA (smooth scroll ke #pricing dan direct WhatsApp sync dengan telemetry tracking), serta metrics ticker bar live (+350%, 5x, <24 Jam, 3-7 Hari).
  - `PillarsSection.tsx`: Menampilkan 3 pilar layanan utama dari `siteConfig.pillars` dengan ultra glassmorphism (`backdrop-blur-xl`, `bg-black/70`, `border-white/[0.09]`), mockup chat bubble WhatsApp interaktif dengan 3 skenario nyata UMKM (cek stok, rekap order, follow-up), visual showcase prompt-to-banner <24 jam dengan multi-format switcher, serta kartu analitik iklan dengan ROAS +4.2x.
  - Perbaikan SVG GitHub icon di `Footer.tsx` dan perakitan `App.tsx` yang menginisialisasi telemetry engine.
  - Verifikasi: `tsc -b` dan `vite build` sukses 100% tanpa error TypeScript maupun linting.

### [2026-09-24 21:37] - Task 1: Konfigurasi Bisnis & Telemetry Engine
* **Tipe**: Fitur & Telemetri
* **File Terkait**: `src/config/site.ts`, `src/telemetry/types.ts`, `src/telemetry/tracker.ts`
* **Detail**: Membuat konfigurasi terpusat untuk profil Automatric, 3 pilar layanan, rincian paket harga sekali bayar, serta mesin telemetri observabilitas (correlation session ID, structured JSON logging, zero-PII sanitization, dan Core Web Vitals observers). Lolos uji `tsc --noEmit`.

### [2026-09-24 21:30] - Inisialisasi Fondasi & Desain Spec
* **Tipe**: Setup & Desain
* **File Terkait**: `package.json`, `tailwind.config.js`, `docs/superpowers/specs/2026-09-24-automatric-landing-page-design.md`
* **Detail**: Menyelesaikan riset preferensi pengguna, menetapkan model harga Sekali Bayar, styling Deep Black Glassmorphism dengan Anti-Slop UI/UX, dan meng-commit dokumen spesifikasi desain.

### [2026-09-24 21:35] - Pembuatan Aturan Skill & Memory Log
* **Tipe**: Dokumentasi & Aturan Agent
* **File Terkait**: `SKILL.md`, `MEMORY.md`
* **Detail**: Menerapkan aturan wajib sinkronisasi perubahan ke `MEMORY.md` sesuai permintaan pengguna dan mendokumentasikan baseline memori proyek.
