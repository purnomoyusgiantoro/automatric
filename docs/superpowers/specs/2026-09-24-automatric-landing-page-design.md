# Design Specification: Automatric Landing Page & Observability

**Document Date**: 2026-09-24  
**Project**: Automatric AI Growth Agency  
**Target Repository**: `D:\Documents\automatric`  
**Status**: Approved by User  

---

## 1. Executive Summary & Brand Positioning

**Automatric** adalah agensi pertumbuhan berbasis AI (*Next-Gen AI Growth Agency*) yang berfokus membantu UMKM, retail, dan pemilik bisnis online melipatgandakan omset dan efisiensi operasional tanpa kerumitan teknis.

Tiga pilar layanan utama yang ditawarkan:
1. **Otomasi CS & Chatbot WhatsApp AI 24/7**: Layanan pesan otomatis cerdas yang memahami konteks pembeli, menjawab katalog/FAQ produk, mencatat pesanan, dan melakukan follow-up prospek secara otomatis.
2. **Creative Design & Promosi Super Cepat**: Pembuatan materi visual (banner iklan, feed, story, katalog promosi, video motion pendek) berbasis AI dengan kecepatan pengerjaan di bawah 24 jam.
3. **Iklan Presisi Berbasis AI**: Riset tren dan audiens cerdas, pembuatan copywriting berkonversi tinggi, dan penataan kampanye iklan terarah di Meta Ads & TikTok Ads.

Model penetapan harga mengadopsi skema **Project Sprint Sekali Bayar** (tanpa ikatan kontrak bulanan), dengan alur konversi utama mengarah langsung ke **WhatsApp** dengan format pesan terisi otomatis (*pre-filled*).

---

## 2. Technical Stack & Architecture

* **Framework**: React 19 + TypeScript
* **Build Tool**: Vite 6
* **Styling & Aesthetic (Anti-Slop UI/UX Standards via `ui-ux-pro-max`)**:
  * **Deep Black Dominance**: Palet warna dominan hitam pekat (`#030508` / `#050811` / `#090d16`) untuk menghadirkan kesan mewah, eksklusif, dan modern, bukan abu-abu kusam.
  * **Ultra Glassmorphism**: Kartu dan container menggunakan efek kaca buram (*frosted glass* dengan `backdrop-blur-xl`, background translusen `bg-white/[0.03]` atau `bg-black/70`, serta border tipis presisi `border-white/[0.09]` dengan glow halo halus).
  * **Anti-Slop Design Principles**:
    * Zero generic placeholders: Semua teks, mockup WhatsApp, dan contoh materi promosi menggunakan kasus nyata bisnis UMKM/Retail Indonesia (F&B, fashion, skincare, jasa).
    * No emojis as icons: Menggunakan 100% ikon SVG terkurasi dari `lucide-react`.
    * Strict High Contrast: Memenuhi standar WCAG AA (rasio kontras minimal 4.5:1 untuk body text, teks putih `#ffffff` untuk judul, dan aksen emerald `#22c55e` / cyan `#06b6d4` yang tajam dan terbaca).
    * Tactile Micro-Interactions: Efek hover halus (150-200ms), kursor pointer eksplisit, dan *focus-visible* ring untuk navigasi keyboard.
  * **Interactive Choose Plan System**:
    * Pengunjung dapat mengklik paket mana saja untuk memilihnya (*select plan*).
    * Paket yang aktif terpilih mendapatkan penekanan visual instan: border glowing emerald, badge *"Paket Terpilih"*, dan kartu ringkasan dinamis di bagian bawah dengan tombol WhatsApp yang langsung disesuaikan.
* **Icons**: `lucide-react`
* **Observability**: Custom lightweight, zero-dependency Telemetry Logger & PerformanceObserver module
* **Deployment Target**: Static Web (GitHub Pages / Vercel ready)

---

## 3. Page Layout & Component Structure

Susunan *Single-Page Application* dari atas ke bawah:

### 3.1 `Navbar.tsx` (Sticky Navigation Header)
* Logo Automatric dengan badge status live pulse neon emerald.
* Menu navigasi cepat dengan *smooth scrolling*:
  * Layanan
  * Keunggulan
  * Cara Kerja
  * Paket Harga
  * FAQ
* Tombol CTA cepat: *"Hubungi via WhatsApp"* dengan tautan langsung ke WhatsApp bisnis.

### 3.2 `HeroSection.tsx`
* **Headline**: *"Tingkatkan Omset & Efisiensi Bisnis Anda 10x Lebih Cepat dengan Ekosistem AI"*
* **Subheadline**: *"Solusi lengkap untuk UMKM & Retail: CS WhatsApp pintar 24/7, produksi materi promosi & desain kilat dalam hitungan jam, serta strategi iklan berbasis kecerdasan buatan."*
* **Feature Badges**:
  * `⚡ Desain <24 Jam`
  * `🤖 Chatbot WA 24/7`
  * `📈 Iklan Berbasis AI`
  * `💰 Sprint Sekali Bayar`
* **CTA Buttons**:
  * *"Lihat Paket Harga"* $\rightarrow$ smooth scroll ke `#pricing`
  * *"Konsultasi WhatsApp Sekarang"* $\rightarrow$ direct link ke WhatsApp
* **Metrics & Social Proof Bar**:
  * `+350%` Kecepatan Respon CS
  * `5x` Kapasitas Produksi Konten Promosi
  * `<24 Jam` Rata-Rata Waktu Desain Selesai
  * `3-7 Hari` Durasi Sprint Setup Beres

### 3.3 `PillarsSection.tsx` (3 Pilar Layanan Utama)
* **Card 1: WhatsApp AI & CS Automation**
  * Fitur: Auto-reply ramah 24/7, panduan katalog produk pintar, pencatatan pesanan ke spreadsheet otomatis, follow-up prospek belum bayar.
  * Preview visual: Mockup chat bubble interaktif WhatsApp.
* **Card 2: Super-Fast Creative Design**
  * Fitur: Banner promosi, story promo kilat, katalog produk digital, video motion reels berkecepatan tinggi.
  * Preview visual: Mockup galeri aset visual berkecepatan tinggi.
* **Card 3: Precision AI Ads & Promotion**
  * Fitur: Riset audiens machine learning, copywriting iklan formula AIDA/PAS terbukti, setup kampanye Meta & TikTok Ads terukur.
  * Preview visual: Kartu metrik analitik iklan dan grafik performa ROI.

### 3.4 `WorkflowSection.tsx` (Alur Sprint 3–7 Hari)
1. **Langkah 1 - Quick Discovery (Hari 1)**: Analisis kebutuhan bisnis, penentuan produk utama, dan target pasar via sesi singkat.
2. **Langkah 2 - AI Setup & Creative Sprint (Hari 2–4)**: Pelatihan bot WhatsApp sesuai data produk Anda dan produksi paket desain promosi kilat.
3. **Langkah 3 - Testing & Polishing (Hari 5)**: Uji coba alur chat, koreksi copywriting, dan finalisasi seluruh aset.
4. **Langkah 4 - Go-Live & Handover (Hari 6–7)**: Peluncuran resmi, serah terima data, dan pendampingan operasional.

### 3.5 `PricingSection.tsx` (Pricelist dengan Interactive "Choose Plan")
Tiga paket harga transparan sekali bayar dengan sistem seleksi interaktif (*Choose Plan*):
* **Mekanisme Choose Plan**:
  * Pengunjung dapat mengklik paket mana saja untuk memilihnya (*select plan*).
  * Paket yang dipilih akan mendapatkan penekanan visual: border emerald menyala (*glow*), tag *"Paket Terpilih"*, dan animasi transisi halus.
  * Di bawah kartu harga terdapat bar status dinamis: *"Anda sedang memilih paket: [Nama Paket]"* dengan rincian singkat dan tombol utama *"Klaim Paket Ini via WhatsApp"*.

1. **Starter AI Sprint — Rp 2.900.000**
   * Target: Pemilik bisnis yang ingin respon CS instan dan punya materi promosi rapi.
   * Fitur:
     * Setup 1 Nomor WhatsApp Business AI (FAQ & Info Toko Cerdas)
     * 10 Desain Promosi Kilat (Feed & Story)
     * 5 Template Copywriting Promosi AI
     * Durasi Pengerjaan: 3–5 Hari Kerja
     * Garansi Pendampingan: 7 Hari
   * Pesan WhatsApp: *"Halo Automatric! Saya tertarik dengan paket Starter AI Sprint (Rp 2.9jt) untuk bisnis saya. Mohon info langkah awalnya."*

2. **Growth Sprint Suite — Rp 5.900.000 (Rekomendasi / Most Popular)**
   * Target: Bisnis yang ingin lonjakan penjualan tanpa menambah banyak admin dan biaya operasional.
   * Fitur:
     * Smart CS WhatsApp AI (Paham bahasa santai, cek stok, rekap pesanan otomatis)
     * 25 Desain Promosi Kilat + 3 Video Motion Promo Pendek
     * Setup Kampanye Iklan Berbasis AI (Meta/TikTok Ads)
     * Sistem Follow-Up Prospek Otomatis
     * Durasi Pengerjaan: 5–7 Hari Kerja
     * Garansi Pendampingan: 14 Hari
   * Pesan WhatsApp: *"Halo Automatric! Saya ingin mengambil paket Growth Sprint Suite (Rp 5.9jt). Bisnis saya bergerak di bidang [Nama Bisnis]. Bagaimana proses pengerjaannya?"*

3. **Domination Scale Sprint — Rp 9.900.000**
   * Target: Brand & Retail yang ingin mendominasi pasar dan otomasi promosi masif.
   * Fitur:
     * Multi-Agent AI Workflow (CS + Closing Penjualan + Eskalasi Manusia)
     * Unlimited Desain Promosi Kilat selama Sprint 14 Hari
     * 10 Video Promosi AI (Voiceover AI + Sinematik)
     * Full Setup Iklan AI Multi-Platform + Analitik Audiens Cerdas
     * Sesi Training Khusus untuk tim internal
     * Durasi Pengerjaan: 10–14 Hari Kerja
     * Garansi Pendampingan: 30 Hari
   * Pesan WhatsApp: *"Halo Automatric! Saya tertarik untuk transformasi penuh lewat paket Domination Scale Sprint (Rp 9.9jt). Mari jadwalkan diskusi lebih lanjut."*

### 3.6 `FaqSection.tsx`
* FAQ seputar kemudahan penggunaan, keamanan nomor WhatsApp, kepemilikan aset desain, dan ketiadaan biaya tersembunyi.

### 3.7 `Footer.tsx`
* Identitas Automatric, tautan media sosial, link GitHub repository `purnomoyusgiantoro/automatric`, dan hak cipta.

---

## 4. Observability & Telemetry Architecture

Sesuai panduan `/agent-skills:observability-and-instrumentation`:

### 4.1 On-Call & Business Questions
1. **Funnel Konversi**: Berapa rasio pengunjung yang melihat halaman $\rightarrow$ mencapai section harga $\rightarrow$ mengklik WhatsApp?
2. **Paket Terpopuler**: Paket mana yang paling sering diklik pengunjung (*Starter*, *Growth*, atau *Domination*)?
3. **Kesehatan Performa (Core Web Vitals)**: Apakah performa halaman memenuhi standar (*LCP < 2.5s*, *CLS < 0.1*, *FID/INP responsif*)?
4. **Error Tracking**: Apakah ada kegagalan link atau eksekusi JavaScript pada browser pengunjung?

### 4.2 Data Models & Structured Logging
* **Correlation ID**: `sessionId` di-generate via `crypto.randomUUID()` saat halaman dimuat dan disertakan di setiap event.
* **Event Names**:
  * `page_view` (timestamp, path, referrer, userAgent)
  * `section_viewed` (sectionId, timeSpentMs)
  * `pricing_plan_clicked` (planId, price, planName)
  * `whatsapp_redirect` (source, planId)
  * `web_vitals` (metricName: LCP/CLS/FCP/TTFB, value, rating)
  * `client_error` (errorMessage, componentStack)
* **Log Sanitization**: Menjamin zero PII (tidak ada nomor telepon, email, atau kredensial yang dicatat).
* **Storage Buffer**: Disimpan di audit buffer memory & console terstruktur, siap untuk disambungkan ke backend analytics endpoints.

---

## 5. Verification & Acceptance Criteria

1. **Visual & Responsiveness**: Tampilan rapi, tipografi presisi, dan responsive di perangkat mobile (320px–420px), tablet, dan desktop.
2. **Interactivity**: Smooth scrolling navigasi berjalan mulus ke setiap section target.
3. **WhatsApp Link**: Setiap tombol WhatsApp membuka link `https://wa.me/{phone}?text={encodedText}` dengan teks sesuai paket.
4. **Telemetry Verification**:
   * Event `page_view` dan `web_vitals` tercatat otomatis saat halaman dibuka.
   * Event `pricing_plan_clicked` dan `whatsapp_redirect` tercatat saat paket diklik.
   * Tidak ada error di browser console.
5. **Build Check**: `npm run build` sukses tanpa error TypeScript maupun linting.
