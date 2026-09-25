import React, { useState } from 'react';
import {
  ArrowUpRight,
  MessageCircle,
  Palette,
  BarChart2,
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
export interface DesignPlayingCard {
  id: string;
  rank: string;
  suit: string;
  badge: string;
  format: string;
  dimensions: string;
  title: string;
  desc: string;
  image?: string; // <-- Masukkan URL atau path file foto di sini
  theme: 'fashion' | 'sale' | 'skincare' | 'coffee' | 'tech';
}

export const designPlayingCards: DesignPlayingCard[] = [
  {
    id: 'card-ace',
    rank: 'A',
    suit: '♠',
    badge: 'A ♠ Feed (1:1)',
    format: '1:1 Persegi',
    dimensions: '1080 x 1080 px',
    title: 'Katalog Produk & Feed Instagram',
    desc: 'Desain feed produk beresolusi tinggi dengan tipografi elegan dan komposisi visual siap upload.',
    image: '', // USER: Masukkan path gambar di sini, contoh: '/foto-feed.jpg'
    theme: 'fashion',
  },
  {
    id: 'card-king',
    rank: 'K',
    suit: '♠',
    badge: 'K ♠ Story (9:16)',
    format: '9:16 Vertikal',
    dimensions: '1080 x 1920 px',
    title: 'Flash Sale & Promo Story',
    desc: 'Format vertikal dinamis untuk penawaran kilat di Instagram Story, TikTok, dan WhatsApp Status.',
    image: '', // USER: Masukkan path gambar di sini, contoh: '/foto-story.jpg'
    theme: 'sale',
  },
  {
    id: 'card-queen',
    rank: 'Q',
    suit: '♠',
    badge: 'Q ♠ Banner (16:9)',
    format: '16:9 Landscape',
    dimensions: '1920 x 1080 px',
    title: 'Banner Marketplace & Web Hero',
    desc: 'Visual header display berkualitas tajam untuk etalase Tokopedia, Shopee, dan promo berbayar.',
    image: '', // USER: Masukkan path gambar di sini, contoh: '/foto-banner.jpg'
    theme: 'skincare',
  },
  {
    id: 'card-jack',
    rank: 'J',
    suit: '♠',
    badge: 'J ♠ Poster (4:5)',
    format: '4:5 Vertikal Feed',
    dimensions: '1080 x 1350 px',
    title: 'Poster Promosi F&B & Retail',
    desc: 'Proporsi portrait yang mendominasi timeline media sosial untuk engagement dan klik maksimal.',
    image: '', // USER: Masukkan path gambar di sini, contoh: '/foto-poster.jpg'
    theme: 'coffee',
  },
  {
    id: 'card-10',
    rank: '10',
    suit: '♠',
    badge: '10 ♠ Ads Card (1:1)',
    format: '1:1 Persegi',
    dimensions: '1080 x 1080 px',
    title: 'Display Iklan Meta & Google Ads',
    desc: 'Materi visual iklan dengan hierarki penawaran tegas yang lolos standar review Meta Ads.',
    image: '', // USER: Masukkan path gambar di sini, contoh: '/foto-ads.jpg'
    theme: 'tech',
  },
];

export const PillarsSection: React.FC = () => {
  const [activeChatScenario, setActiveChatScenario] = useState<'catalog' | 'order' | 'followup'>('catalog');
  const [activeDesignSlide, setActiveDesignSlide] = useState(0);
  const [adsTimeframe, setAdsTimeframe] = useState<'30d' | '60d'>('30d');

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
                <div className="glass-card rounded-xl p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                    <div>
                      <span className="text-xs font-bold text-white block">Pembuatan Desain Cepat & Terjangkau</span>
                      <span className="text-[10px] text-zinc-400">Tampilan model kartu remi: klik kartu untuk melihat detail</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-300 glass px-2.5 py-1 rounded">24 Jam</span>
                  </div>

                  {/* Format Navigation Tabs */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                    {designPlayingCards.map((card, i) => (
                      <button
                        key={card.id}
                        type="button"
                        onClick={() => setActiveDesignSlide(i)}
                        className={`text-[11px] px-3.5 py-1.5 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap min-h-[32px] ${
                          activeDesignSlide === i
                            ? 'bg-white text-black font-semibold shadow-sm'
                            : 'text-zinc-300 hover:text-white hover:bg-white/[0.08]'
                        }`}
                      >
                        {card.badge}
                      </button>
                    ))}
                  </div>

                  {/* Fanned Playing Cards Showcase Container */}
                  <div className="relative overflow-hidden rounded-2xl bg-black/60 border border-white/[0.08] p-4 sm:p-6 min-h-[430px] flex flex-col justify-between">
                    {/* Background glow behind the cards */}
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                    {/* Fanned Cards Deck (Interactive Spread) */}
                    <div className="relative w-full h-[260px] sm:h-[290px] flex items-center justify-center pt-3 select-none">
                      {designPlayingCards.map((card, i) => {
                        const total = designPlayingCards.length;
                        const center = (total - 1) / 2;
                        const diff = i - center;
                        const isSelected = activeDesignSlide === i;

                        // Rotations & Translations mirroring a hand of playing cards
                        const rotationDeg = diff * 7;
                        const translateY = Math.abs(diff) * 5;

                        return (
                          <div
                            key={card.id}
                            onClick={() => setActiveDesignSlide(i)}
                            style={{
                              transform: isSelected
                                ? `translate3d(calc(${diff} * var(--spread, 44px)), -22px, 0) rotate(0deg) scale(1.08)`
                                : `translate3d(calc(${diff} * var(--spread, 44px)), ${translateY}px, 0) rotate(${rotationDeg}deg) scale(1)`,
                              zIndex: isSelected ? 30 : 10 + i,
                            }}
                            className={`[--spread:28px] xs:[--spread:34px] sm:[--spread:46px] absolute w-[130px] h-[190px] sm:w-[155px] sm:h-[230px] rounded-2xl bg-white text-zinc-900 border-2 transition-all duration-300 ease-out cursor-pointer overflow-hidden flex flex-col justify-between p-2 sm:p-2.5 ${
                              isSelected
                                ? 'border-emerald-400 shadow-[0_22px_45px_rgba(0,0,0,0.85),0_0_25px_rgba(16,185,129,0.35)] ring-2 ring-emerald-400'
                                : 'border-zinc-300 shadow-[0_12px_28px_rgba(0,0,0,0.65)] hover:border-zinc-400 hover:-translate-y-2'
                            }`}
                          >
                            {/* Card Top Left Index */}
                            <div className="flex items-center justify-between leading-none pointer-events-none">
                              <div className="flex flex-col items-center">
                                <span className="font-extrabold text-xs sm:text-sm font-mono text-zinc-950 leading-none">
                                  {card.rank}
                                </span>
                                <span className="text-[10px] sm:text-xs text-zinc-950 leading-none mt-0.5">
                                  {card.suit}
                                </span>
                              </div>
                              <span className="text-[8px] sm:text-[9px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 font-semibold border border-zinc-200">
                                {card.format.split(' ')[0]}
                              </span>
                            </div>

                            {/* Card Center Artwork Slot (Where Image Goes!) */}
                            <div className="relative w-full flex-1 my-1 sm:my-1.5 rounded-xl overflow-hidden bg-zinc-950 border border-zinc-900/20 shadow-inner flex flex-col justify-between p-2">
                              {card.image ? (
                                <img
                                  src={card.image}
                                  alt={card.title}
                                  className="w-full h-full object-cover rounded-lg"
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
                                      {card.theme === 'tech' && 'ORIGINAL TECH GEAR'}
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

                            {/* Card Bottom Right Inverted Index */}
                            <div className="flex items-center justify-between leading-none pointer-events-none">
                              <span className="text-[8px] text-zinc-500 font-mono tracking-wider">
                                SPRINT
                              </span>
                              <div className="flex flex-col items-center rotate-180">
                                <span className="font-extrabold text-xs sm:text-sm font-mono text-zinc-950 leading-none">
                                  {card.rank}
                                </span>
                                <span className="text-[10px] sm:text-xs text-zinc-950 leading-none mt-0.5">
                                  {card.suit}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Active Card Information & Controls */}
                    <div className="pt-3 border-t border-white/[0.08] space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white font-mono px-2 py-0.5 rounded bg-white/10 border border-white/15">
                            {designPlayingCards[activeDesignSlide].rank} {designPlayingCards[activeDesignSlide].suit}
                          </span>
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-white">
                              {designPlayingCards[activeDesignSlide].title}
                            </h4>
                            <span className="text-[10px] text-emerald-400 font-mono">
                              {designPlayingCards[activeDesignSlide].dimensions} ({designPlayingCards[activeDesignSlide].format})
                            </span>
                          </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => setActiveDesignSlide((prev) => (prev - 1 + designPlayingCards.length) % designPlayingCards.length)}
                            className="w-8 h-8 rounded-lg glass flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/15 transition-all cursor-pointer"
                            aria-label="Kartu sebelumnya"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveDesignSlide((prev) => (prev + 1) % designPlayingCards.length)}
                            className="w-8 h-8 rounded-lg glass flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/15 transition-all cursor-pointer"
                            aria-label="Kartu berikutnya"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {designPlayingCards[activeDesignSlide].desc}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                        <span className="text-[10px] font-mono text-zinc-400">
                          Kartu 0{activeDesignSlide + 1} / 0{designPlayingCards.length} : Klik kartu mana saja untuk memilih
                        </span>
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">
                          Slot Gambar Siap Dipasang
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: 'Waktu', value: '24 Jam' },
                      { label: 'Kualitas', value: 'Hi-Res' },
                      { label: 'Hak Cipta', value: 'Milik Anda' },
                    ].map((s, i) => (
                      <div key={i} className="glass rounded-lg p-2.5 text-center">
                        <span className="text-[10px] text-zinc-400 block">{s.label}</span>
                        <span className="text-xs font-mono font-medium text-white">{s.value}</span>
                      </div>
                    ))}
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

          {/* ─── Pilar 3: Setup Iklan ─── */}
          <ScrollReveal>
          <div className="glass-card rounded-2xl p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

              {/* Left: Penjelasan */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-[11px] font-mono text-zinc-400">
                  <BarChart2 className="w-3.5 h-3.5 text-white" />
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

              {/* Right: Ads Dashboard */}
              <div className="lg:col-span-7">
                <div className="glass-card rounded-xl p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <div>
                      <span className="text-xs font-bold text-white block">Laporan Hasil Iklan</span>
                      <span className="text-[10px] font-mono text-zinc-400">[Simulasi Retail]</span>
                    </div>
                    <div className="flex items-center gap-1 glass p-0.5 rounded text-[10px]">
                      <button type="button" onClick={() => setAdsTimeframe('30d')} className={`px-2.5 py-1 rounded cursor-pointer font-mono min-h-[28px] ${adsTimeframe === '30d' ? 'bg-white text-black font-semibold' : 'text-zinc-300 hover:text-white'}`}>30H</button>
                      <button type="button" onClick={() => setAdsTimeframe('60d')} className={`px-2.5 py-1 rounded cursor-pointer font-mono min-h-[28px] ${adsTimeframe === '60d' ? 'bg-white text-black font-semibold' : 'text-zinc-300 hover:text-white'}`}>60H</button>
                    </div>
                  </div>

                  {/* ROAS */}
                  <div className="glass rounded-xl p-4">
                    <span className="text-xs text-zinc-400 block mb-1">Target ROAS</span>
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-bold font-mono text-white">{adsTimeframe === '30d' ? '4.20x' : '4.85x'}</span>
                      <span className="text-xs text-zinc-300">Rp 1jt iklan = Rp {adsTimeframe === '30d' ? '4.2' : '4.85'}jt omset</span>
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="glass rounded-lg p-3">
                      <span className="text-[10px] text-zinc-400 block font-mono">Penjualan</span>
                      <span className="text-sm font-bold font-mono text-white block mt-0.5">{adsTimeframe === '30d' ? 'Rp 142.8Jt' : 'Rp 291.6Jt'}</span>
                      <span className="text-[10px] text-zinc-400">Modal: {adsTimeframe === '30d' ? '34Jt' : '60Jt'}</span>
                    </div>
                    <div className="glass rounded-lg p-3">
                      <span className="text-[10px] text-zinc-400 block font-mono">Biaya/Pesanan</span>
                      <span className="text-sm font-bold font-mono text-white block mt-0.5">Rp {adsTimeframe === '30d' ? '24.500' : '22.100'}</span>
                      <span className="text-[10px] text-zinc-400">Total: {adsTimeframe === '30d' ? '1.380' : '2.714'} order</span>
                    </div>
                  </div>

                  <div className="glass rounded-lg p-3 text-[11px] text-zinc-300">
                    <strong className="text-white">Target Audiens Relevan:</strong> Anggaran dialokasikan pada produk dan wilayah dengan pembelian berulang tertinggi.
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
