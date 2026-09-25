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
* **Model Penetapan Harga**: Paket Sprint Sekali Bayar (Starter Rp 2.9jt, Growth Rp 5.9jt [Featured], Scale Sprint Rp 9.9jt)
* **Alur Konversi**: Tombol paket terhubung langsung ke WhatsApp dengan pesan pre-filled otomatis.

---

## 2. Technical Stack & Arsitektur
* **Framework**: React 19 + TypeScript
* **Build Tool**: Vite 6
* **CSS & Styling**: Tailwind CSS 3
  * *Theme*: Deep Black Dominant (`#030508` / `#050811` / `#090d16`)
  * *Style*: Matte Solid Surfaces (`#0b0b0d` / `#0e0e12`, subtle `bg-white/[0.03]` tint, navbar-only `backdrop-blur-md`)
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
* [x] **Task 7 Selesai (Anti-Slop Audit & Refinement)**: Instalasi global plugin anti-slop, pembuatan `DESIGN.md` (dials ENERGY 2 / RHYTHM 2 / MOTION 2), penghapusan seluruh em dash (`—`), eliminasi link mati `#keunggulan`, penggantian generic AI icons dengan semantic icons (`Layers`, `Flame`, `ShieldCheck`), pembatasan glassmorphism dan multi-glow, transparent case-study labeling, dan pembuatan laporan `anti-slop/audit-001-2026-09-24.md`.
* [x] **Task 8 Selesai (Anti-Slop Copywriting Rewrite)**: Penulisan ulang 100% teks di seluruh landing page (`src/config/site.ts`, `HeroSection.tsx`, `ComparisonSection.tsx`, `PillarsSection.tsx`, `WorkflowSection.tsx`, `PricingSection.tsx`, `FaqSection.tsx`, `Footer.tsx`, `Navbar.tsx`, `index.html`). Menghapus seluruh buzzword AI kosong, melarang formula negatif paralel (*bukan sekadar X tapi Y*), mengganti metrik fabrikasi dengan deliverable riil, menyelaraskan bahasa percakapan WhatsApp agar natural, dan memverifikasi 0 em dash.
* [x] **Asset Logo Resmi & Integrasi UI**: Menyinkronkan file logo JPG/JPEG (`hitam pada logo.jpeg`, `putih pada logo.jpg`) dan memasangnya langsung ke komponen Navbar, Footer, serta Favicon (`apps/web/index.html`).
* [x] **Informasi Kontak & Navigasi Footer**: Menambahkan bagian informasi kontak terstruktur (WhatsApp, Email, Waktu Layanan, Lokasi) di footer dan menghubungkan tautan navigasi Kontak di Navbar agar langsung melakukan smooth scroll ke Footer.
* [x] **Showcase Desain Cepat & Terjangkau (Sliding Glass Cards)**: Mengubah showcase desain promosi di Pilar 2 menjadi kartu geser interaktif berlatar glassmorphism siap pakai untuk foto desain pengguna, menghapus kartu WhatsApp duplikat di footer, mempertegas headline hero identity perusahaan, dan meningkatkan kontras seluruh teks chat simulator.

---

## 4. Change Log / Riwayat Perubahan

### [2026-09-25 23:35] - Navigasi Ukuran Interaktif Bagian Atas & Penghapusan Kartu Ads pada Pilar Desain
* **Tipe**: UI / Feature / Cleanup
* **File Terkait**: `apps/web/src/components/PillarsSection.tsx`
* **Detail**:
  - Menghapus item kartu ke-5 (`Display Iklan Meta & Google Ads`, `1080 x 1080 px (1:1 Persegi)`) dari showcase pilar desain sesuai instruksi pengguna, menyisakan 4 varian ukuran baku yang unik (`1:1`, `9:16`, `16:9`, `4:5`).
  - Menambahkan bilah navigasi interaktif tepat di bagian atas display kartu yang menampilkan dimensi ukuran desain (`1080 x 1080`, `1080 x 1920`, `1920 x 1080`, `1080 x 1350`). Setiap tab ukuran dapat diklik langsung untuk memilih kartu secara instan dengan indikator visual aktif dan tombol navigasi panah kiri/kanan.
  - Menyederhanakan bagian bawah kartu agar menampilkan informasi judul dan deskripsi kartu aktif secara bersih dan fokus tanpa tombol ganda.

### [2026-09-25 23:33] - Optimasi Vite Fast Refresh pada Showcase Pilar Desain
* **Tipe**: Code Quality / DX
* **File Terkait**: `apps/web/src/components/PillarsSection.tsx`
* **Detail**: Mengubah `DesignShowcaseCard` dan `designShowcaseCards` menjadi scope internal (tanpa `export`) di `PillarsSection.tsx` agar modul memenuhi standar Vite React Fast Refresh secara optimal tanpa peringatan HMR.

### [2026-09-25 23:32] - Penghapusan Simbol Sekop & Rank Kartu pada Pilar Desain, serta Penghapusan Badge Hari Alur Kerja
* **Tipe**: UI / Copywriting / Cleanup
* **File Terkait**: `apps/web/src/components/PillarsSection.tsx`, `apps/web/src/components/WorkflowSection.tsx`
* **Detail**:
  - Menghapus simbol sekop (`♠`) dan huruf rank kartu remi (`A`, `K`, `Q`, `J`, `10`) pada showcase pilar desain cepat, menggantinya dengan penomoran format bersih (`01..05`) dan format badge minimalis sehingga tetap berbentuk kartu display modern untuk gambar karya tanpa nuansa kartu remi/judi.
  - Menghapus teks badge hari (`Hari ke-1`, `Hari ke 2 - 4`, `Hari ke-5`, `Hari ke 6 - 7`) pada kartu alur kerja (`WorkflowSection`) agar kartu berfokus tegas pada nomor langkah, judul, dan penjelasan aktivitas.

### [2026-09-25 23:30] - Pemulihan Tampilan Kartu Alur Kerja Bersih Tanpa Garis (Clean Workflow Cards)
* **Tipe**: UI / Layout / Simplifikasi
* **File Terkait**: `apps/web/src/components/WorkflowSection.tsx`
* **Detail**: Menghapus seluruh garis horizontal penghubung dan badge timeline tengah pada alur kerja sprint 4-langkah, mengembalikannya ke tampilan kartu matte solid yang bersih, elegan, dan rapi tanpa ornamen garis sesuai instruksi pengguna, dengan mempertahankan nomor langkah `01..04`, badge durasi hari beraksen emerald, judul, serta deskripsi pengerjaan.

### [2026-09-25 23:28] - Penataan Garis Timeline di Tengah Body Alur & Pembersihan Elemen Redundan Pilar Desain
* **Tipe**: UI / Layout / Refactor
* **File Terkait**: `apps/web/src/components/WorkflowSection.tsx`, `apps/web/src/components/PillarsSection.tsx`
* **Detail**:
  - Memindahkan garis alur kontinu dan badge `Tahap 01`, `Tahap 02`, `Tahap 03`, `Tahap 04` tepat ke tengah-tengah body kartu langkah kerja (bukan di atas kartu) dengan garis horizontal yang menembus kartu secara mulus dari ujung ke ujung.
  - Menghapus tab tombol format navigasi yang menjelaskan format kartu (`A Feed (1:1)`, `K Story (9:16)`, dll) pada pilar desain agar tampilan fanned cards tetap bersih dan fokus.
  - Menghapus teks indikator kartu (`Kartu 03 / 05 : Klik kartu mana saja...`), badge `Slot Gambar Siap Dipasang`, serta grid metrik statistik (`Waktu 24 Jam`, `Kualitas Hi-Res`, `Hak Cipta Milik Anda`) dari showcase pilar desain sesuai arahan pengguna.

### [2026-09-25 23:25] - Garis Timeline Penegas Alur End-to-End di WorkflowSection & Pembersihan Badge Hero
* **Tipe**: UI / Feature / Layout
* **File Terkait**: `apps/web/src/components/WorkflowSection.tsx`, `apps/web/src/components/HeroSection.tsx`
* **Detail**:
  - Menambahkan garis penegas alur horizontal kontinu dari ujung ke ujung (end-to-end) di bagian atas 4 langkah alur sprint (Tahap 01 Diskusi Alur, Tahap 02 Pemasangan Bot & Desain, Tahap 03 Uji Coba, Tahap 04 Peluncuran) lengkap dengan stepper node berpulsasi emerald pada desktop dan track penghubung pada tampilan mobile.
  - Memperkaya kartu langkah kerja dengan badge hari beraksen emerald (`Hari ke-1`, `Hari ke 2 - 4`, `Hari ke-5`, `Hari ke 6 - 7`) dan deskripsi detail pengerjaan.
  - Menghapus badge pill 'Automatric : AI Growth Agency' di atas headline HeroSection sesuai permintaan pengguna agar fokus langsung ke judul utama.

### [2026-09-25 23:20] - Showcase Desain Model Kartu Remi Interaktif (Fanned Playing Cards) & Slot Gambar
* **Tipe**: UI / Feature / Component
* **File Terkait**: `apps/web/src/components/PillarsSection.tsx`
* **Detail**: Mengubah showcase pilar 2 (Pembuatan Desain Cepat & Terjangkau) menjadi tampilan dek kartu remi (fanned playing cards: As, King, Queen, Jack, 10 ♠) terinspirasi dari referensi visual permainan kartu dengan proporsi kartu otentik (indeks rank di sudut atas dan sudut bawah terbalik 180°), sebaran sudut kipas lengkung dinamis, efek hover/active angkat kartu bercahaya emerald (lift up + scale), dan slot foto desain siap pakai (`image?: string`) dengan instruksi panduan penggantian foto untuk pengguna.

### [2026-09-25 23:15] - Relokasi WhatsApp di Bawah Email pada Informasi Kontak Footer
* **Tipe**: UI / Layout
* **File Terkait**: `apps/web/src/components/Footer.tsx`
* **Detail**: Memindahkan kartu tautan WhatsApp resmi ke kolom Informasi Kontak tepat di bawah kartu Email Resmi dengan icon MessageCircle emerald, tampilan matte surface seragam, dan link langsung ke nomor WhatsApp bisnis Automatric. Menghapus tombol WhatsApp di kolom deskripsi brand kiri sehingga footer memiliki tepat satu entri WhatsApp yang tertata rapi dan presisi di bawah email.

### [2026-09-25 23:10] - Showcase Desain Sliding Glass Cards, Refactor Headline Hero, & Pembersihan Duplikasi Footer
* **Tipe**: UI / Feature / Copywriting
* **File Terkait**: `apps/web/src/components/PillarsSection.tsx`, `apps/web/src/components/HeroSection.tsx`, `apps/web/src/components/Footer.tsx`, `apps/web/src/config/site.ts`
* **Detail**:
  - Mengubah showcase desain pilar 2 menjadi sliding glass card container (Feed 1:1, Story 9:16, Banner 16:9) dengan tombol navigasi geser kartu dan slot gambar siap pasang.
  - Memperbarui headline HeroSection menjadi judul ringkas dan fokus ('Agensi Otomasi & Pertumbuhan Bisnis Anda.') serta menghapus subteks 7 hari sesuai permintaan user.
  - Menghapus kartu WhatsApp duplikat di bawah Informasi Kontak pada Footer agar tombol WhatsApp terpusat tunggal.
  - Menghapus simbol '<' pada metrik dan badge pilar agar penulisan lebih elegan.
  - Meningkatkan kontras warna teks pada Chat Simulator WhatsApp dan tabel metrik iklan agar lolos standar WCAG AA.

### [2026-09-25 23:04] - Penyempurnaan Bottom Bar Footer & Copyright Bersih
* **Tipe**: UI / Copywriting
* **File Terkait**: `apps/web/src/components/Footer.tsx`
* **Detail**: Menghapus badge status 'Sistem Otomasi Aktif' dari footer, merapikan kalimat hak cipta menjadi format standar industri yang ringkas dan profesional ('Automatric. All rights reserved.'), serta menengahkan posisinya di bagian paling bawah halaman.

### [2026-09-25 23:02] - Konsolidasi Tombol WhatsApp di Navbar & Footer dan Pembersihan Tombol Konsultasi
* **Tipe**: Copywriting / UI Refactor
* **File Terkait**: `apps/web/src/components/Navbar.tsx`, `apps/web/src/components/Footer.tsx`, `apps/web/src/components/HeroSection.tsx`, `apps/web/src/components/PillarsSection.tsx`, `apps/web/src/config/site.ts`
* **Detail**: Mengubah label tombol di Navbar dan Footer menjadi 'WhatsApp' (menggantikan 'Konsultasi'), menghapus tombol konsultasi sekunder di HeroSection dan PillarsSection sehingga tombol tindakan WhatsApp terfokus secara eksklusif di Navbar dan Footer, serta mengganti kata konsultasi pada tahapan alur kerja menjadi diskusi.

### [2026-09-25 22:55] - Implementasi Informasi Kontak di Footer & Navigasi Scroll Kontak Navbar
* **Tipe**: Fitur / UI
* **File Terkait**: `apps/web/src/components/Footer.tsx`, `apps/web/src/components/Navbar.tsx`
* **Detail**: Menambahkan kartu informasi kontak terstruktur di Footer (WhatsApp langsung, email resmi, waktu layanan 24 jam bot, dan lokasi) dengan gaya matte solid surface berstandar anti-slop, serta memperbarui handler navigasi di Navbar agar klik menu Kontak langsung melakukan smooth scroll ke `#kontak` di Footer.

### [2026-09-25 22:52] - Pemasangan Logo Resmi ke Web & Peluncuran Server Lokal
* **Tipe**: Desain / UI / Asset
* **File Terkait**: `apps/web/src/components/Navbar.tsx`, `apps/web/src/components/Footer.tsx`, `apps/web/index.html`, `apps/web/src/vite-env.d.ts`
* **Detail**: Memasang logo resmi varian gelap (`putih pada logo.jpg`) ke header Navbar dan Footer dengan bingkai rapi dan rasio pas, menambahkan file deklarasi tipe `vite-env.d.ts`, membuat aset favicon (`favicon.ico`, `favicon-64.png`, `favicon-192.png`), dan menjalankan server pengembangan lokal di `http://localhost:5173/`.

### [2026-09-25 22:44] - Sinkronisasi Asset Logo JPG/JPEG Resmi dari User
* **Tipe**: Asset / Desain
* **File Terkait**: `public/hitam pada logo.jpeg`, `public/putih pada logo.jpg`, `apps/web/public/*`
* **Detail**: Menyinkronkan logo baru berformat gambar dari user (hitam pada logo.jpeg untuk versi light background, dan putih pada logo.jpg untuk versi dark background) ke dalam `apps/web/public/` serta menyediakan alias nama bersih (`logo-light.jpeg` dan `logo-dark.jpg`) agar mudah digunakan di komponen web.

### [2026-09-24 22:25] - Perbaikan Temuan Audit Anti-Slop (Pricing, Telemetri, & Dokumentasi)
* **Tipe**: Bugfix & Dokumentasi (Anti-Slop Hard Gate)
* **File Terkait**: `src/components/PricingSection.tsx`, `src/telemetry/tracker.ts`, `AGENTS.md`, `DESIGN.md`, `SKILL.md`, `MEMORY.md`
* **Detail**:
  - **F-08**: Mengubah warna icon Check pada daftar fitur paket harga dari `text-emerald-400` menjadi `text-white` untuk membatasi aksen emerald hanya pada elemen interaktif.
  - **F-13**: Menambahkan `focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none` pada tombol pemilih paket di `PricingSection.tsx` untuk aksesibilitas navigasi keyboard.
  - **F-16**: Menyederhanakan komentar naratif pada modul `src/telemetry/tracker.ts` menjadi ringkas dan menghapus komentar yang menyatakan ulang hal yang sudah jelas dari kode.
  - **Penyelarasan Dial & Dokumentasi**: Memperbarui dial pada `AGENTS.md` dan `DESIGN.md` menjadi `ENERGY 2 / RHYTHM 3 / MOTION 1` (jujur terhadap level motion transisi hover), memperbarui deskripsi styling pada `SKILL.md` dan `MEMORY.md` ke Obsidian Black + Matte Solid Surfaces, serta mengganti nama paket lama Domination menjadi Scale Sprint.

### [2026-09-24 22:15] - Penerapan Menyeluruh Skill Anti-Slop Copywriting pada Seluruh Teks Web
* **Tipe**: Copywriting & Tone Refinement (Anti-Slop Hard Gate)
* **File Terkait**: `src/config/site.ts`, `src/components/HeroSection.tsx`, `src/components/ComparisonSection.tsx`, `src/components/PillarsSection.tsx`, `src/components/WorkflowSection.tsx`, `src/components/PricingSection.tsx`, `src/components/FaqSection.tsx`, `src/components/Footer.tsx`, `src/components/Navbar.tsx`, `index.html`, `MEMORY.md`
* **Detail**:
  - **Eliminasi Total Kosakata AI Kosong (Empty AI Vocabulary & Buzzwords)**: Menghapus seluruh istilah klise AI seperti *ekosistem*, *melejitkan*, *akselerasi*, *solusi cerdas/terpadu*, *revolusioner*, *game-changer*, *next-level*, *domination*. Menggantinya dengan kalimat lugas, membumi, dan berakar pada kenyataan operasional bisnis ritel/toko di Indonesia.
  - **Penghapusan Formula Negatif Paralel (Negative Parallelism)**: Menghapus pola formula AI *"Bukan sekadar X tapi Y"* (misalnya pada header pilar layanan), digantikan dengan pernyataan tindakan langsung apa yang dikerjakan tim.
  - **Penggantian Metrik Fabrikasi dengan Deliverable Operasional Riil (R-17, R-36)**:
    - Metrik hero yang sebelumnya mengklaim "+350% Kecepatan Respon" diganti dengan janji operasional nyata: *"< 1 Detik Waktu Respon Balasan Bot"*, *"< 24 Jam Waktu Pembuatan Desain"*, *"3 - 7 Hari Waktu Pengerjaan Sprint"*, dan *"Sekali Bayar Tanpa Biaya Langganan"*.
    - Memberikan label simulasi jujur `[Simulasi Usaha Retail Fashion]` pada simulasi laporan performa iklan digital.
  - **Dialog Interaktif Asli & Manusiawi (Chat WhatsApp Simulator)**: Menulis ulang percakapan simulasi bot WhatsApp agar 100% menggunakan ragam percakapan transaksi toko Indonesia yang wajar (tanya stok kemeja batik, pesan kopi susu literan ke Tebet via QRIS, dan pengingat keranjang belanja skincare yang belum dibayar).
  - **Larangan Keras Em Dash (R-02 Em Dash Ban)**: Memverifikasi 0 kemunculan karakter em dash (`—`) maupun en-dash (`–`) di seluruh basis kode proyek.
  - **Verifikasi Build**: Berhasil membangun bundle produksi `tsc -b && vite build` (0 error, build selesai dalam 6.56 detik).

### [2026-09-24 22:07] - Full Bespoke Redesign Anti-Slop & Editorial Architecture Refactor
* **Tipe**: Desain & Arsitektur UI
* **File Terkait**: `src/index.css`, `src/App.tsx`, `src/components/HeroSection.tsx`, `src/components/ComparisonSection.tsx`, `src/components/PillarsSection.tsx`, `src/components/WorkflowSection.tsx`, `src/components/PricingSection.tsx`, `src/components/FaqSection.tsx`, `src/components/Footer.tsx`, `DESIGN.md`
* **Detail**:
  - **Pembersihan Total Elemen Slop**: Membuang seluruh background blueprint grid (`.bg-grid-pattern`), menghapus efek glow neon cyan/purple, menghapus teks gradien pelangi (emerald-to-cyan), dan menghilangkan floating capsule badge yang klise.
  - **Arsitektur Editorial Asimetris (RHYTHM 3)**:
    - *Hero Section*: Desain asimetris split-screen dengan Live Interactive Proof Console (Bot WA, Prompt-to-Banner 4K, dan AI Ads ROAS Engine) langsung di area above-the-fold.
    - *Comparison Section Baru*: Komponen perbandingan langsung antara model lama agensi konvensional (boros waktu & biaya) vs model sprint Automatric (sekali bayar, 3-7 hari beres).
    - *Pillars Section*: Penataan ulang 3 pilar layanan dengan palet warna tunggal Electric Emerald (meniadakan skema warna sirkus cyan & ungu), mockup interaktif WhatsApp dengan dialog realistis bisnis UMKM, dan format switcher presisi.
    - *Workflow Section*: Timeline 4-fase sprint yang bersih dan terstruktur tanpa animasi garis kartun yang berlebihan.
    - *Pricing Section*: Kartu paket harga berbasis solid matte surface dengan selektor interaktif Choose Plan dan bar konfirmasi dinamis langsung sinkron ke WhatsApp.
    - *FAQ & Footer*: Tampilan akordeon minimalis dengan hairline border dan footer monokrom yang elegan.
  - **Verifikasi Kontras & Build**: Pengujian kontras warna dengan `contrast-check.py` mencapai rasio 7.95:1 hingga 20.38:1 (WCAG AA PASS). Build produksi `tsc -b && vite build` sukses 100% (ukuran bundle CSS berkurang drastis dari 45kB menjadi 23kB).

### [2026-09-24 22:01] - Deployment Skill Anti-Slop Lokal & Penguatan Standar Mobile
* **Tipe**: Setup & Desain
* **File Terkait**: `.agents/skills/*`, `src/components/Navbar.tsx`, `AGENTS.md`, `DESIGN.md`
* **Detail**:
  - Menginstal 6 paket skill antislop secara langsung ke repositori lokal `.agents/skills/` (`antislop`, `antislop-code`, `antislop-copywriting`, `antislop-human`, `antislop-layoutmobile`, `antislop-ui`) dan direktori skill global.
  - Menjalankan uji kontras resmi via script `contrast-check.py` untuk seluruh pasangan warna UI (hasil 7.62:1 - 19.5:1, lolos kualifikasi WCAG AA).
  - Penguatan kepatuhan R-03 Mobile Layout: Menstandarkan tombol hamburger dan link navigasi mobile ke target sentuh minimal 44px (`min-w-[44px] min-h-[44px]`).
  - Pembersihan menyeluruh karakter em dash pada dokumen konfigurasi agent.

### [2026-09-24 21:55] - Anti-Slop Audit & UI/UX Hard Gate Refinement
* **Tipe**: Desain, Bugfix & Dokumentasi
* **File Terkait**: `DESIGN.md`, `AGENTS.md`, `anti-slop/audit-001-2026-09-24.md`, `index.html`, `src/config/site.ts`, `src/components/Navbar.tsx`, `src/components/HeroSection.tsx`, `src/components/PillarsSection.tsx`, `src/components/WorkflowSection.tsx`, `src/components/PricingSection.tsx`, `src/components/Footer.tsx`
* **Detail**:
  - **R-02 (Copywriting: Em Dash Ban)**: Menghapus 100% karakter em dash (`—`) dan en-dash di seluruh judul, button, dan deskripsi copy (diubah menjadi `:` atau tanda kurung).
  - **R-24 & R-26 (Navigation & Interactivity)**: Menghapus anchor link mati `#keunggulan` dari navigasi Navbar agar seluruh navigasi 100% memetakan ke section aktif.
  - **R-37 (Design Direction)**: Menerbitkan `DESIGN.md` mendefinisikan identitas brand, palette Obsidian Black dengan single Emerald accent, tipografi Plus Jakarta Sans / JetBrains Mono, dan dial ENERGY 2 / RHYTHM 2 / MOTION 2.
  - **R-04 & R-16 (Generic Icons & AI Buzzwords)**: Menghapus icon generic `Sparkles` dan emoji dekoratif pada badge hero (`⚡`, `🤖`, `📈`, `💰`), menggantinya dengan semantic SVG icons (`Layers`, `Flame`, `ShieldCheck`, `Zap`, `TrendingUp`), serta membersihkan buzzword "Next-Gen".
  - **R-10 & R-13 (Glassmorphism & Glow Dose Cap)**: Mengubah permukaan kartu menjadi dark matte solid (`bg-[#080c16]` / `bg-[#0b101c]`) dan membatasi efek glow hanya pada kartu paket harga yang dipilih pengguna (`isSelected`).
  - **R-17 & R-36 (Data Transparency)**: Memberikan label transparan `[Simulasi Studi Kasus Retail UMKM Fashion]` pada dashboard periklanan AI.
  - **R-35 (Verifikasi)**: Menjalankan `npm run build` dengan hasil 0 error dan memverifikasi dev server `http://localhost:5173/` berjalan lancar.

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
