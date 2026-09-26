import React, { useState } from 'react';
import {
  ArrowUpRight,
  MessageCircle,
  Palette,
  Globe,
  Check,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
} from 'lucide-react';
import { siteConfig } from '../config/site';
import { ScrollReveal } from './ScrollReveal';

// =========================================================================
// PANDUAN PENGGUNA UNTUK MEMASUKKAN GAMBAR:
// Letakkan foto/gambar Anda di folder `public/` (misal: public/desain-1.jpg)
// lalu masukkan path-nya pada properti `image` di bawah ini (misal: image: '/desain-1.jpg').
// Jika belum ada gambar, sistem otomatis menampilkan template artwork desain visual.
// =========================================================================
interface DesignShowcaseCard {
  id: string;
  stepNum: string;
  ratio: string;
  format: string;
  dimensions: string;
  title: string;
  desc: string;
  image?: string; // <-- Masukkan URL atau path file foto di sini
  theme: 'fashion' | 'sale' | 'skincare' | 'coffee';
}

const designShowcaseCards: DesignShowcaseCard[] = [
  {
    id: 'card-1',
    stepNum: '01',
    ratio: '1:1',
    format: 'Persegi Feed',
    dimensions: '1080 x 1080 px',
    title: 'Katalog Produk & Feed Instagram',
    desc: 'Desain feed produk beresolusi tinggi dengan tipografi elegan dan komposisi visual siap upload.',
    image: `${import.meta.env.BASE_URL}11.webp`,
    theme: 'fashion',
  },
  {
    id: 'card-2',
    stepNum: '02',
    ratio: '9:16',
    format: 'Vertikal Story',
    dimensions: '1080 x 1920 px',
    title: 'Flash Sale & Promo Story',
    desc: 'Format vertikal dinamis untuk penawaran kilat di Instagram Story, TikTok, dan WhatsApp Status.',
    image: `${import.meta.env.BASE_URL}916.webp`,
    theme: 'sale',
  },
  {
    id: 'card-3',
    stepNum: '03',
    ratio: '16:9',
    format: 'Landscape Banner',
    dimensions: '1920 x 1080 px',
    title: 'Banner Marketplace & Web Hero',
    desc: 'Visual header display berkualitas tajam untuk etalase Tokopedia, Shopee, dan promo berbayar.',
    image: `${import.meta.env.BASE_URL}169.webp`,
    theme: 'skincare',
  },
  {
    id: 'card-4',
    stepNum: '04',
    ratio: '4:5',
    format: 'Portrait Poster',
    dimensions: '1080 x 1350 px',
    title: 'Poster Promosi F&B & Retail',
    desc: 'Proporsi portrait yang mendominasi timeline media sosial untuk engagement dan klik maksimal.',
    image: `${import.meta.env.BASE_URL}45.webp`,
    theme: 'coffee',
  },
];

const getCardDimensions = (ratio: string, isSelected: boolean): string => {
  if (!isSelected) {
    return 'w-[120px] h-[175px] sm:w-[145px] sm:h-[210px] opacity-75 hover:opacity-95';
  }
  switch (ratio) {
    case '16:9':
      return 'w-[280px] h-[195px] sm:w-[380px] sm:h-[250px] opacity-100';
    case '9:16':
      return 'w-[145px] h-[265px] sm:w-[170px] sm:h-[315px] opacity-100';
    case '1:1':
      return 'w-[195px] h-[235px] sm:w-[240px] sm:h-[280px] opacity-100';
    case '4:5':
    default:
      return 'w-[180px] h-[245px] sm:w-[220px] sm:h-[295px] opacity-100';
  }
};

// =========================================================================
// PANDUAN PENGGUNA UNTUK MEMASUKKAN GAMBAR WEB DEVELOPMENT:
// Letakkan tangkapan layar (screenshot) website Anda di folder `apps/web/public/`
// (misal: apps/web/public/screenshot-landing.jpg) lalu isi path pada properti
// `image` di bawah ini (misal: image: '/screenshot-landing.jpg').
// Ukuran rekomendasi screenshot desktop: 1920 x 1080 px (16:9) atau 1440 x 900 px.
// Jika belum ada gambar, sistem otomatis menampilkan template artwork interaktif.
// =========================================================================
interface WebDevShowcase {
  id: 'landing' | 'webapp';
  label: string;
  badge: string;
  url: string;
  title: string;
  desc: string;
  dimensions: string;
  image?: string;
  features: string[];
}

const webDevShowcases: Record<'landing' | 'webapp', WebDevShowcase> = {
  landing: {
    id: 'landing',
    label: 'Landing Page',
    badge: 'High-Converting Sales',
    url: 'brandkamu.com/penawaran-eksklusif',
    title: 'Landing Page Fokus Penjualan & Konversi',
    desc: 'Halaman penawaran presisi tanpa distraksi navigasi, dirancang khusus untuk memvalidasi penawaran produk dan melipatgandakan konversi pelanggan.',
    dimensions: '1920 x 1080 px (16:9)',
    image: `${import.meta.env.BASE_URL}web-landing.webp`,
    features: ['Direct Conversion', 'Kecepatan Muat Sub-Detik', 'Copywriting Presisi AIDA', 'Mobile-First Responsive'],
  },
  webapp: {
    id: 'webapp',
    label: 'Web App',
    badge: 'Custom Full-Stack System',
    url: 'app.bisniskamu.com/dashboard',
    title: 'Aplikasi Web & Dashboard Operasional',
    desc: 'Platform digital interaktif untuk otomasi alur kerja, pengelolaan inventaris katalog dinamis, portal klien, dan integrasi API operasional bisnis Anda.',
    dimensions: '1920 x 1080 px (16:9)',
    image: `${import.meta.env.BASE_URL}web-app.webp`,
    features: ['Manajemen Database Real-Time', 'Portal Pelanggan & Dashboard', 'Integrasi API & Webhook', 'Cloud Architecture Skalabel'],
  },
};

export const PillarsSection: React.FC = () => {
  const [activeChatScenario, setActiveChatScenario] = useState<'catalog' | 'order' | 'followup'>('catalog');
  const [activeDesignSlide, setActiveDesignSlide] = useState(0);
  const [activeWebTab, setActiveWebTab] = useState<'landing' | 'webapp'>('landing');

  const currentWeb = webDevShowcases[activeWebTab];

  const p1 = siteConfig.pillars[0];
  const p2 = siteConfig.pillars[1];
  const p3 = siteConfig.pillars[2];

  const chatDialogues = {
    catalog: [
      { sender: 'user', text: 'Malam min, kemeja batik navy XL masih ada?', time: '23:14' },
      { sender: 'bot', text: 'Malam kak! Masih ada 3 potong. Pengiriman kilat bisa tiba Jumat sore. Mau kami pesankan?', time: '23:14' },
      { sender: 'user', text: 'Boleh min, minta foto detail bahannya ya.', time: '23:15' },
      { sender: 'bot', text: 'Baik kak! Ini foto detail bahan katun primisima. Adem dan sudah dilapisi furing rapi.', time: '23:15' },
    ],
    order: [
      { sender: 'user', text: 'Min, pesan Kopi Susu 1L (2 botol) dan Brownies (1 kotak) kirim ke Tebet.', time: '14:20' },
      { sender: 'bot', text: '2x Kopi Susu 1L (Rp 130.000)\n1x Brownies (Rp 65.000)\nOngkir Tebet (Rp 12.000)\nTotal: Rp 207.000', time: '14:20' },
      { sender: 'bot', text: 'Pesanan #ORD-4921 tercatat. Bayar via BCA atau QRIS.', time: '14:21' },
      { sender: 'user', text: 'Sudah bayar lewat QRIS barusan.', time: '14:22' },
      { sender: 'bot', text: 'Pembayaran diterima. Estimasi kurir 15 menit lagi kak.', time: '14:22' },
    ],
    followup: [
      { sender: 'bot', text: 'Halo Kak Sarah! Pesanan Paket Skincare kemarin masih di keranjang Kakak.', time: '09:00' },
      { sender: 'bot', text: 'Hari ini ada potongan ongkir Rp 15.000. Mau kami proseskan?', time: '09:00' },
      { sender: 'user', text: 'Boleh min, kemarin lupa. Lanjutkan pesanannya ya.', time: '09:05' },
      { sender: 'bot', text: 'Baik kak! Total jadi Rp 185.000 dengan potongan ongkir. Tautan pembayaran siap.', time: '09:06' },
    ],
  };

  const tabBtn = (active: boolean) =>
    `text-[11px] px-3.5 py-1.5 rounded-lg font-medium transition-all cursor-pointer min-h-[36px] ${
      active
        ? 'bg-white text-black font-semibold shadow-sm'
        : 'text-zinc-300 hover:text-white hover:bg-white/[0.08]'
    }`;

  return (
    <section id="layanan" className="relative py-14 sm:py-20 bg-[#050505] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="glow-white-intense top-[10%] right-[10%] w-[650px] h-[650px]" />
        <div className="glow-white-wide top-[45%] left-[5%] w-[700px] h-[700px]" />
        <div className="glow-white-medium bottom-[8%] right-[15%] w-[600px] h-[600px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal className="text-center mb-12 sm:mb-14">
          <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-mono mb-3">Layanan</p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Tiga pilar untuk bisnis Anda.
          </h2>
        </ScrollReveal>

        <div className="space-y-10 sm:space-y-12">

          {/* ─── Pilar 1: Bot WhatsApp ─── */}
          <ScrollReveal>
          <div className="glass-card rounded-2xl p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

              {/* Left: Penjelasan */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-[11px] font-mono text-zinc-400">
                  <MessageCircle className="w-3.5 h-3.5 text-white" />
                  <span>{p1.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{p1.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{p1.description}</p>

                <ul className="space-y-2 pt-2">
                  {p1.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Chat Simulator */}
              <div className="lg:col-span-7">
                <div className="glass-card rounded-xl overflow-hidden">
                  {/* Chat Header */}
                  <div className="glass-strong px-4 py-3 flex items-center justify-between border-b border-white/[0.08]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-xs font-bold text-white font-mono">
                        AT
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">Bot WhatsApp Toko</span>
                        <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                          Online 24 Jam
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 border border-white/15 text-zinc-300">
                      SIMULASI
                    </span>
                  </div>

                  {/* Scenario Tabs */}
                  <div className="px-3 py-2 flex items-center gap-1.5 border-b border-white/[0.08] bg-black/40">
                    <button type="button" onClick={() => setActiveChatScenario('catalog')} className={tabBtn(activeChatScenario === 'catalog')}>Cek Stok</button>
                    <button type="button" onClick={() => setActiveChatScenario('order')} className={tabBtn(activeChatScenario === 'order')}>Rekap Pesanan</button>
                    <button type="button" onClick={() => setActiveChatScenario('followup')} className={tabBtn(activeChatScenario === 'followup')}>Pengingat</button>
                  </div>

                  {/* Messages */}
                  <div className="p-4 space-y-3 min-h-[260px] max-h-[300px] overflow-y-auto bg-black/30">
                    {chatDialogues[activeChatScenario].map((msg, idx) => (
                      <div key={idx} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                        <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-white/15 border border-white/20 text-white shadow-sm'
                            : 'bg-zinc-900/90 border border-white/15 text-zinc-100 shadow-sm'
                        }`}>
                          <p className="whitespace-pre-line">{msg.text}</p>
                          <span className={`text-[10px] block text-right mt-1 font-mono ${
                            msg.sender === 'user' ? 'text-zinc-300' : 'text-zinc-400'
                          }`}>
                            {msg.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input bar */}
                  <div className="glass-strong px-4 py-2.5 flex items-center justify-between border-t border-white/[0.08] text-xs">
                    <span className="text-zinc-400 font-normal">Ketik pesan...</span>
                    <div className="w-6 h-6 rounded-lg bg-white text-black flex items-center justify-center">
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* ─── Pilar 2: Desain Promosi ─── */}
          <ScrollReveal>
          <div className="glass-card rounded-2xl p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

              {/* Left: Design Showcase - Fanned Playing Cards Display */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="glass-card rounded-xl p-5 sm:p-6 space-y-3.5">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                    <div>
                      <span className="text-xs font-bold text-white block">Pembuatan Desain Cepat & Terjangkau</span>
                      <span className="text-[10px] text-zinc-400">Pilih ukuran atau klik kartu untuk melihat format</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-300 glass px-2.5 py-1 rounded">24 Jam</span>
                  </div>

                  {/* Navigasi Ukuran & Format (Top Interactive Navigation) */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 scrollbar-none flex-1">
                      {designShowcaseCards.map((card, i) => {
                        const isSelected = activeDesignSlide === i;
                        return (
                          <button
                            key={card.id}
                            type="button"
                            onClick={() => setActiveDesignSlide(i)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer border shrink-0 ${
                              isSelected
                                ? 'bg-white text-zinc-950 font-bold border-white shadow-[0_0_14px_rgba(255,255,255,0.3)]'
                                : 'bg-white/[0.04] text-zinc-300 hover:text-white border-white/[0.08] hover:border-white/20'
                            }`}
                            aria-label={`Pilih rasio ${card.ratio}`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                isSelected ? 'bg-emerald-600' : 'bg-zinc-500'
                              }`}
                            />
                            <span className="font-bold">{card.ratio}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Navigasi Tombol Panah (Prev / Next) */}
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveDesignSlide(
                            (prev) => (prev - 1 + designShowcaseCards.length) % designShowcaseCards.length
                          )
                        }
                        className="w-7 h-7 rounded-lg glass flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/15 transition-all cursor-pointer"
                        aria-label="Desain sebelumnya"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveDesignSlide((prev) => (prev + 1) % designShowcaseCards.length)
                        }
                        className="w-7 h-7 rounded-lg glass flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/15 transition-all cursor-pointer"
                        aria-label="Desain berikutnya"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Fanned Playing Cards Showcase Container */}
                  <div className="relative overflow-hidden rounded-2xl bg-black/60 border border-white/[0.08] p-4 sm:p-6 min-h-[360px] sm:min-h-[410px] flex items-center justify-center">
                    {/* Background glow behind the cards */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                    {/* Fanned Cards Deck (Interactive Spread) */}
                    <div className="relative w-full h-[290px] sm:h-[340px] flex items-center justify-center pt-2 select-none">
                      {designShowcaseCards.map((card, i) => {
                        const total = designShowcaseCards.length;
                        const center = (total - 1) / 2;
                        const diff = i - center;
                        const isSelected = activeDesignSlide === i;

                        // Rotations & Translations mirroring a hand of cards
                        const rotationDeg = diff * 7;
                        const translateY = Math.abs(diff) * 5;

                        return (
                          <div
                            key={card.id}
                            onClick={() => setActiveDesignSlide(i)}
                            style={{
                              transform: isSelected
                                ? `translate3d(calc(${diff} * 10px), -14px, 0) rotate(0deg)`
                                : `translate3d(calc(${diff} * var(--spread, 52px)), ${translateY}px, 0) rotate(${rotationDeg}deg)`,
                              zIndex: isSelected ? 40 : 10 + i,
                            }}
                            className={`[--spread:34px] sm:[--spread:54px] absolute rounded-2xl bg-white text-zinc-900 border-2 transition-all duration-500 ease-out cursor-pointer overflow-hidden flex flex-col justify-between p-2 sm:p-2.5 ${getCardDimensions(
                              card.ratio,
                              isSelected
                            )} ${
                              isSelected
                                ? 'border-emerald-400 shadow-[0_25px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(16,185,129,0.35)] ring-2 ring-emerald-400'
                                : 'border-zinc-300 shadow-[0_12px_28px_rgba(0,0,0,0.65)] hover:border-zinc-400 hover:-translate-y-2'
                            }`}
                          >
                            {/* Card Top Header */}
                            <div className="flex items-center justify-between leading-none pointer-events-none px-1">
                              <span className="font-extrabold text-[11px] sm:text-xs font-mono text-zinc-950 leading-none">
                                {card.stepNum}
                              </span>
                              <span className="text-[8px] sm:text-[9px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-700 font-semibold border border-zinc-200">
                                {card.ratio}
                              </span>
                            </div>

                            {/* Card Center Artwork Slot (Where Image Goes!) */}
                            <div
                              className={`relative w-full flex-1 my-1 sm:my-1.5 rounded-xl overflow-hidden ${
                                card.image
                                  ? 'p-0 bg-transparent'
                                  : 'bg-zinc-950 border border-zinc-900/20 shadow-inner flex items-center justify-center p-2 flex-col justify-between'
                              }`}
                            >
                              {card.image ? (
                                <img
                                  src={card.image}
                                  alt={card.title}
                                  loading="lazy"
                                  decoding="async"
                                  width={card.ratio === '16:9' ? 1600 : card.ratio === '9:16' ? 768 : 1080}
                                  height={card.ratio === '16:9' ? 893 : card.ratio === '9:16' ? 1376 : 1080}
                                  className="w-full h-full object-cover object-top rounded-xl transition-all duration-500"
                                />
                              ) : (
                                <div className="w-full h-full flex flex-col justify-between text-left relative z-10">
                                  {/* Template Artwork Preview */}
                                  <div className="flex items-center justify-between">
                                    <span className="text-[7px] sm:text-[8px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                                      AUTOMATRIC
                                    </span>
                                    <span className="text-[7px] sm:text-[8px] font-mono text-zinc-400">
                                      24H
                                    </span>
                                  </div>

                                  <div className="my-auto py-1">
                                    <div className="text-[10px] sm:text-xs font-black tracking-tight text-white leading-tight uppercase font-sans">
                                      {card.theme === 'fashion' && 'NEW SEASON COLLECTION'}
                                      {card.theme === 'sale' && 'FLASH SALE 50% OFF'}
                                      {card.theme === 'skincare' && 'GLOWING ESSENTIALS'}
                                      {card.theme === 'coffee' && 'ARTISAN COFFEE ROAST'}
                                    </div>
                                    <div className="text-[7px] sm:text-[8px] text-zinc-400 mt-0.5 line-clamp-1 font-mono">
                                      {card.format}
                                    </div>
                                  </div>

                                  {/* Slot indicator */}
                                  <div className="py-0.5 px-1 rounded bg-white/10 border border-white/15 text-center">
                                    <span className="text-[7px] sm:text-[8px] font-mono text-zinc-200 flex items-center justify-center gap-1">
                                      <ImageIcon className="w-2.5 h-2.5 text-emerald-400" />
                                      Slot Foto Siap Pasang
                                    </span>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Card Bottom Footer */}
                            <div className="flex items-center justify-between leading-none pointer-events-none px-1 text-[8px] font-mono text-zinc-400">
                              <span>AUTOMATRIC</span>
                              <span>24H</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>


                  </div>
                </div>
              </div>

              {/* Right: Penjelasan */}
              <div className="lg:col-span-5 order-1 lg:order-2 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-[11px] font-mono text-zinc-400">
                  <Palette className="w-3.5 h-3.5 text-white" />
                  <span>{p2.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{p2.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{p2.description}</p>

                <ul className="space-y-2 pt-2">
                  {p2.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* ─── Pilar 3: Web Development ─── */}
          <ScrollReveal>
          <div className="glass-card rounded-2xl p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

              {/* Left: Penjelasan */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-[11px] font-mono text-zinc-400">
                  <Globe className="w-3.5 h-3.5 text-white" />
                  <span>{p3.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{p3.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{p3.description}</p>

                <ul className="space-y-2 pt-2">
                  {p3.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Web Dev Interactive Showcase */}
              <div className="lg:col-span-7">
                <div className="glass-card rounded-xl p-5 sm:p-6 space-y-4">
                  {/* Header bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-3">
                    <div>
                      <span className="text-xs font-bold text-white block">Simulasi Tampilan Website</span>
                      <span className="text-[10px] font-mono text-zinc-400">[Standar Kilat & Responsif]</span>
                    </div>
                    {/* Mode Tabs */}
                    <div className="flex items-center gap-1 glass p-0.5 rounded-lg text-[10px]">
                      <button
                        type="button"
                        onClick={() => setActiveWebTab('landing')}
                        className={`px-3.5 py-1.5 rounded-md cursor-pointer font-medium min-h-[32px] transition-all ${
                          activeWebTab === 'landing'
                            ? 'bg-white text-black font-semibold shadow-sm'
                            : 'text-zinc-300 hover:text-white'
                        }`}
                      >
                        Landing Page
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveWebTab('webapp')}
                        className={`px-3.5 py-1.5 rounded-md cursor-pointer font-medium min-h-[32px] transition-all ${
                          activeWebTab === 'webapp'
                            ? 'bg-white text-black font-semibold shadow-sm'
                            : 'text-zinc-300 hover:text-white'
                        }`}
                      >
                        Web App
                      </button>
                    </div>
                  </div>

                  {/* Browser Mockup Window */}
                  <div className="glass rounded-xl overflow-hidden border border-white/[0.08]">
                    {/* Window Controls Header */}
                    <div className="flex items-center px-3.5 py-2.5 border-b border-white/[0.08] bg-black/40">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      </div>
                    </div>

                    {/* Screenshot Image or Template Preview */}
                    {currentWeb.image ? (
                      <div className="relative w-full aspect-[1547/752] overflow-hidden bg-zinc-950">
                        <img
                          key={currentWeb.id}
                          src={currentWeb.image}
                          alt={currentWeb.title}
                          loading="lazy"
                          decoding="async"
                          width={1547}
                          height={752}
                          className="w-full h-full object-cover object-top transition-opacity duration-300"
                        />
                      </div>
                    ) : (
                      <div className="p-4 sm:p-5 bg-gradient-to-b from-black/50 to-black/30 space-y-3.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                            {currentWeb.badge}
                          </span>
                          <span className="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08]">
                            {currentWeb.dimensions}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                            {currentWeb.title}
                          </h4>
                          <p className="text-xs text-zinc-400 leading-relaxed mt-1">
                            {currentWeb.desc}
                          </p>
                        </div>


                        {/* Feature Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {currentWeb.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-zinc-300"
                            >
                              ✓ {feature}
                            </span>
                          ))}
                        </div>

                        {/* Image Slot Notification */}
                        <div className="pt-2">
                          <div className="py-2 px-3 rounded-lg bg-white/[0.03] border border-dashed border-white/20 text-center">
                            <span className="text-[10px] font-mono text-zinc-400 flex items-center justify-center gap-1.5">
                              <ImageIcon className="w-3 h-3 text-emerald-400 shrink-0" />
                              Slot Foto Screenshot Siap Pasang ({currentWeb.dimensions})
                            </span>
                          </div>
                        </div>
                      </div>
                    )}


                  </div>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
