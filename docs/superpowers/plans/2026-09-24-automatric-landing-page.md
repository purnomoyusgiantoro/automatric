# Automatric Landing Page & Observability Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a high-converting, single-page website for Automatric AI Growth Agency featuring a Deep Black Glassmorphism aesthetic, interactive "Choose Plan" pricelist, direct WhatsApp booking integration, and background observability telemetry.

**Architecture:** Single-page application built on React 19 + TypeScript + Vite with Tailwind CSS 3. Modular component architecture with isolated business data configuration (`src/config/site.ts`) and a zero-dependency telemetry engine (`src/telemetry/tracker.ts`). Every change must be recorded to `MEMORY.md` per `SKILL.md`.

**Tech Stack:** React 19, TypeScript 5.7, Vite 6, Tailwind CSS 3, Lucide React 1.16, native Web APIs (PerformanceObserver, crypto.randomUUID).

**Spec:** `docs/superpowers/specs/2026-09-24-automatric-landing-page-design.md`

## Global Constraints

- **Theme**: Dominant Deep Black (`#030508` to `#090d16`) with frosted glass (`backdrop-blur-xl`, `border-white/[0.09]`, translucent dark cards).
- **Anti-Slop UI/UX Standards**: 100% Lucide SVG icons (no emoji icons), strict WCAG AA 4.5:1+ contrast on all text, real Indonesian UMKM case studies (no lorem ipsum), tactile micro-interactions (150–200ms).
- **Pricing Model**: Project Sprint Sekali Bayar (Starter Rp 2.9jt, Growth Rp 5.9jt [Featured], Domination Rp 9.9jt).
- **Conversion Flow**: Direct WhatsApp integration with pre-filled dynamic messages.
- **Observability**: Structured JSON logging (`page_view`, `pricing_plan_clicked`, `whatsapp_redirect`, `web_vitals`) with correlation `sessionId` and zero PII.
- **Memory Sync**: Update `MEMORY.md` after completion of tasks.

---

### Task 1: Site Configuration & Telemetry Engine (Core Observability)

**Files:**
- Create: `src/config/site.ts`
- Create: `src/telemetry/types.ts`
- Create: `src/telemetry/tracker.ts`
- Modify: `MEMORY.md`

**Interfaces:**
- Produces:
  - `siteConfig`: Business details, WhatsApp number (`628...`), navigation items, service pillars, sprint workflow steps, pricing plans, and FAQs.
  - `trackEvent(eventName: TelemetryEventName, payload?: Record<string, unknown>, level?: LogLevel)`: Function to emit structured telemetry logs with correlation ID.
  - `initObservability()`: Initializes Core Web Vitals observers and page view tracking.
  - `getTelemetrySessionId()`: Returns active correlation session ID.

- [ ] **Step 1: Create `src/config/site.ts` with centralized business and pricing data**
  - Define all texts in Indonesian tailored to UMKM/retail.
  - Define 3 project sprint plans with pricing, feature lists, badge, and pre-filled WhatsApp templates.
  - Set default WhatsApp number (easily changeable).

- [ ] **Step 2: Create `src/telemetry/types.ts` for structured telemetry schema**
  - Define `TelemetryEventName` enum: `'page_view' | 'section_viewed' | 'pricing_plan_clicked' | 'whatsapp_redirect' | 'web_vitals' | 'client_error'`.
  - Define `LogLevel` (`'info' | 'warn' | 'error'`).
  - Define `TelemetryEvent` interface with `timestamp`, `sessionId`, `event`, `level`, `payload`.

- [ ] **Step 3: Implement `src/telemetry/tracker.ts`**
  - Initialize session ID via `crypto.randomUUID()`.
  - Implement structured JSON logging to `console.log` in development and internal memory ring buffer (max 100 events).
  - Implement Web Vitals collection (FCP, LCP, CLS, TTFB) via `PerformanceObserver`.
  - Sanitize all payloads to guarantee zero PII.

- [ ] **Step 4: Verify telemetry engine functionality**
  - Create a quick verification test script or test runner to confirm event serialization and session persistence.
  - Update `MEMORY.md` with Task 1 completion.
  - Commit Task 1.

---

### Task 2: Sticky Glass Navbar & Hero Section with Live Metrics

**Files:**
- Create: `src/components/Navbar.tsx`
- Create: `src/components/HeroSection.tsx`

**Interfaces:**
- Consumes:
  - `siteConfig` from `src/config/site.ts`
  - `trackEvent` from `src/telemetry/tracker.ts`
- Produces:
  - `<Navbar />`: Sticky glassmorphic navbar with smooth scroll links and direct WhatsApp CTA.
  - `<HeroSection />`: High-impact hero with headline, badges, dual CTA, and animated stat metric bar.

- [ ] **Step 1: Implement `src/components/Navbar.tsx`**
  - Glassmorphic container with `backdrop-blur-xl`, `bg-black/60`, and `border-b border-white/[0.08]`.
  - Brand logo with green live pulse indicator.
  - Desktop nav links (Layanan, Keunggulan, Cara Kerja, Harga, FAQ) + Mobile hamburger toggle.
  - WhatsApp CTA button that triggers `trackEvent('whatsapp_redirect', { source: 'navbar' })`.

- [ ] **Step 2: Implement `src/components/HeroSection.tsx`**
  - Compelling headline: *"Tingkatkan Omset & Efisiensi Bisnis Anda 10x Lebih Cepat dengan Ekosistem AI"*.
  - Subheadline explaining the 3 pillars for Indonesian UMKM.
  - Glowing feature pill badges (`⚡ Desain <24 Jam`, `🤖 Chatbot WA 24/7`, `📈 Iklan Berbasis AI`, `💰 Sprint Sekali Bayar`).
  - Dual action buttons: Primary "Pilih Paket Sprint" (scroll to `#pricing`) and Secondary "Konsultasi WhatsApp".
  - Metrics ticker bar: +350% Response Speed, 5x Content Output, <24h Turnaround, 3-7 Days Sprint.

- [ ] **Step 3: Verify responsive layout and interactions**
  - Check mobile view (375px) and desktop view (1440px).
  - Confirm buttons trigger correct telemetry events.
  - Commit Task 2.

---

### Task 3: Three Service Pillars & Sprint Workflow Section

**Files:**
- Create: `src/components/PillarsSection.tsx`
- Create: `src/components/WorkflowSection.tsx`

**Interfaces:**
- Consumes:
  - `siteConfig.pillars` and `siteConfig.workflow` from `src/config/site.ts`
  - `trackEvent` from `src/telemetry/tracker.ts`
- Produces:
  - `<PillarsSection />`: 3 deep black glass cards with realistic Indonesian UMKM visual simulations (WhatsApp chat mockup, fast creative gallery preview, AI ad metrics).
  - `<WorkflowSection />`: 4-step sprint timeline showing how Automatric delivers in 3–7 days.

- [ ] **Step 1: Implement `src/components/PillarsSection.tsx`**
  - Glass cards with subtle gradient borders and hover glow.
  - **Pilar 1 (WhatsApp AI)**: Interactive chat simulation mockup showing realistic Indonesian customer service conversation.
  - **Pilar 2 (Creative Speed)**: Grid showing prompt-to-banner pipeline with `<24 Jam` turnaround badge.
  - **Pilar 3 (AI Ads)**: Analytical card showing simulated ROAS metrics (+4.2x ROAS, -38% CPA).

- [ ] **Step 2: Implement `src/components/WorkflowSection.tsx`**
  - 4-step progressive timeline: Discovery (H-1), AI Setup & Creative Sprint (H-2 s/d H-4), Testing & Polishing (H-5), Go-Live & Handover (H-6 s/d H-7).
  - Step counter badges with glowing connectors.

- [ ] **Step 3: Verify visual hierarchy and contrast**
  - Validate WCAG AA contrast (text-white headers, text-slate-300 body).
  - Commit Task 3.

---

### Task 4: Interactive Pricing Section with "Choose Plan" & WhatsApp Sync

**Files:**
- Create: `src/components/PricingSection.tsx`

**Interfaces:**
- Consumes:
  - `siteConfig.pricing` from `src/config/site.ts`
  - `trackEvent` from `src/telemetry/tracker.ts`
- Produces:
  - `<PricingSection />`: Complete pricing section with interactive plan selection state, visual highlight, and direct WhatsApp redirect.

- [ ] **Step 1: Implement interactive Choose Plan state management**
  - State: `selectedPlanId` (default: `'growth-sprint'`).
  - Clicking any card selects that plan and triggers `trackEvent('pricing_plan_clicked', { planId, price })`.

- [ ] **Step 2: Build 3 Glass Pricing Cards**
  - **Starter AI Sprint** (Rp 2.900.000)
  - **Growth Sprint Suite** (Rp 5.900.000) - Marked with glowing badge "Paling Direkomendasikan" and emerald ring.
  - **Domination Scale Sprint** (Rp 9.900.000)
  - Checkmark icon list for each feature.
  - "Pilih Paket" button with radio/active toggle indicator.

- [ ] **Step 3: Build Dynamic Confirmation & WhatsApp Bar**
  - Bottom sticky/inline bar: *"Paket yang Anda pilih: [Nama Paket] — [Harga]"*.
  - Direct WhatsApp button: *"Lanjutkan Pemesanan via WhatsApp"* generating the exact pre-filled URL:
    `https://wa.me/{phone}?text={encodeURIComponent(plan.whatsappMessage)}`.
  - Triggers `trackEvent('whatsapp_redirect', { planId, source: 'pricing_bar' })`.

- [ ] **Step 4: Verify plan selection and URL generation**
  - Click between all 3 plans, verify selection state changes instantly and WhatsApp link encodes properly.
  - Commit Task 4.

---

### Task 5: FAQ, Footer, and Full App Assembly

**Files:**
- Create: `src/components/FaqSection.tsx`
- Create: `src/components/Footer.tsx`
- Modify: `src/App.tsx`
- Modify: `src/main.tsx`

**Interfaces:**
- Consumes:
  - All component modules (`Navbar`, `HeroSection`, `PillarsSection`, `WorkflowSection`, `PricingSection`, `FaqSection`, `Footer`)
  - `initObservability` from `src/telemetry/tracker.ts`
- Produces:
  - Complete, functional single-page application.

- [ ] **Step 1: Implement `src/components/FaqSection.tsx`**
  - Accordion / collapsible or clean glass card layout answering top 5 UMKM questions.
  - Fast smooth transition on expand/collapse.

- [ ] **Step 2: Implement `src/components/Footer.tsx`**
  - Automatric logo, tagline, quick navigation links, GitHub repo link (`purnomoyusgiantoro/automatric`), and copyright.

- [ ] **Step 3: Assemble `src/App.tsx`**
  - Call `initObservability()` inside `useEffect`.
  - Render all sections in sequence with smooth scroll anchor IDs (`#layanan`, `#keunggulan`, `#cara-kerja`, `#pricing`, `#faq`).

- [ ] **Step 4: Verify end-to-end user journey**
  - Test scrolling from top to bottom, clicking navigation links, selecting pricing plans, and verifying all button targets.
  - Commit Task 5.

---

### Task 6: Production Build, Telemetry Audit & Memory Sync

**Files:**
- Modify: `MEMORY.md`

- [ ] **Step 1: Run production build verification**
  - Run `npm run build` in `D:\Documents\automatric`.
  - Ensure zero TypeScript compiler errors (`tsc -b`), zero Tailwind errors, and optimized bundle output.

- [ ] **Step 2: Audit browser telemetry output**
  - Start preview server with `npm run preview`.
  - Check browser console to confirm structured JSON logs are emitted with valid `sessionId`, event names, and latency metrics.

- [ ] **Step 3: Update `MEMORY.md` and commit final project state**
  - Update `MEMORY.md` with full change log, final component inventory, and verification results per `SKILL.md`.
  - Commit and push to GitHub repository.
