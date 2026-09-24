import React, { useState } from 'react';
import { ArrowRight, MessageSquare, Check, Shield, Bot, Image as ImageIcon, TrendingUp, CheckCheck } from 'lucide-react';
import { siteConfig } from '../config/site';
import { trackEvent } from '../telemetry/tracker';

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'wa' | 'design' | 'ads'>('wa');

  const defaultWaMessage = encodeURIComponent(
    'Halo Automatric! Saya ingin konsultasi sistem bot WhatsApp, pembuatan desain promosi, dan setup iklan untuk bisnis saya.'
  );

  const handlePricingClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent('section_viewed', {
      section: 'pricing',
      source: 'hero_primary_cta',
    });
    const pricingElem = document.getElementById('pricing');
    if (pricingElem) {
      e.preventDefault();
      pricingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_redirect', {
      source: 'hero',
      destination: `https://wa.me/${siteConfig.whatsappNumber}`,
    });
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 bg-[#050505] text-zinc-100 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Status Line */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                Otomasi Bisnis • Sprint 3-7 Hari Kerja
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              Otomasi WhatsApp dan Desain Promosi Siap Kerja dalam 3-7 Hari.
            </h1>

            {/* Lead Text */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed font-normal">
              Kami membantu toko dan bisnis Anda melayani pesanan di WhatsApp selama 24 jam nonstop, memproduksi materi promosi visual dalam waktu kurang dari 24 jam, dan menyiapkan kampanye iklan digital. Sistem jadi sekali bayar tanpa biaya langganan bulanan.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 max-w-md pt-2">
              <a
                href="#pricing"
                onClick={handlePricingClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-black bg-emerald-400 hover:bg-emerald-300 transition-colors cursor-pointer shadow-sm text-center"
              >
                <span>Pilih Paket Sprint</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${defaultWaMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-zinc-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] transition-colors cursor-pointer text-center"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Konsultasi WhatsApp</span>
              </a>
            </div>

            {/* Micro Guarantees */}
            <div className="pt-4 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-white shrink-0" />
                <span>Pengerjaan &lt;24 jam</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-white shrink-0" />
                <span>Biaya tetap sekali bayar</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pendampingan 14-30 hari</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Proof Console */}
          <div className="lg:col-span-5">
            <div className="bg-[#0b0b0e] border border-white/[0.12] rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Console Tabs */}
              <div className="bg-[#121216] px-3 py-2 border-b border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setActiveTab('wa')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 min-h-[44px] rounded-lg text-xs font-mono font-medium transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none ${
                      activeTab === 'wa'
                        ? 'bg-emerald-400 text-black font-semibold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Bot className="w-3.5 h-3.5" />
                    <span>Bot WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('design')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 min-h-[44px] rounded-lg text-xs font-mono font-medium transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none ${
                      activeTab === 'design'
                        ? 'bg-emerald-400 text-black font-semibold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Desain &lt;24 Jam</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('ads')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 min-h-[44px] rounded-lg text-xs font-mono font-medium transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none ${
                      activeTab === 'ads'
                        ? 'bg-emerald-400 text-black font-semibold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Laporan Iklan</span>
                  </button>
                </div>

                <span className="text-[10px] font-mono text-zinc-400 pr-1 hidden sm:inline-block">
                  CONTOH SISTEM
                </span>
              </div>

              {/* Console Body */}
              <div className="p-5 min-h-[340px] flex flex-col justify-between bg-[#08080a]">
                
                {/* TAB 1: WhatsApp Bot */}
                {activeTab === 'wa' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="font-bold text-white">Bot WhatsApp Toko (Aktif 24 Jam)</span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400">Respon: &lt; 1 detik</span>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div className="bg-[#141418] p-3 rounded-xl border border-white/[0.06] text-zinc-300">
                        <span className="text-[10px] text-zinc-400 block mb-1">Pelanggan (23:14):</span>
                        <p>Malam min, kemeja batik navy ukuran XL masih ada? Butuh untuk acara hari Sabtu besok.</p>
                      </div>

                      <div className="bg-emerald-950/40 p-3 rounded-xl border border-emerald-500/20 text-emerald-100">
                        <div className="flex items-center justify-between text-[10px] text-emerald-400 mb-1">
                          <span>Bot WhatsApp Toko:</span>
                          <CheckCheck className="w-3 h-3" />
                        </div>
                        <p>Malam kak! Masih ada untuk Batik Navy ukuran XL (tersisa 3 potong terakhir). Pengiriman kilat bisa tiba hari Jumat sore. Boleh kami bantu buatkan pesanannya sekarang?</p>
                      </div>

                      <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] text-[11px] text-zinc-400 flex items-center justify-between font-mono">
                        <span>Pengecekan Stok: Otomatis</span>
                        <span className="text-emerald-400">Terhubung ke Data Toko</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: Fast Design */}
                {activeTab === 'design' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs">
                      <div className="flex items-center gap-2">
                        <ImageIcon className="w-4 h-4 text-emerald-400" />
                        <span className="font-bold text-white">Produksi Desain Promosi</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 font-semibold">&lt;24 Jam</span>
                    </div>

                    <div className="p-4 rounded-xl bg-[#121217] border border-white/[0.08] space-y-2 text-center">
                      <span className="text-[10px] font-mono uppercase text-emerald-400 tracking-wider block">
                        Materi Siap Tayang
                      </span>
                      <h4 className="text-base font-bold text-white">
                        BANNER PROMO DISKON TOKO RETAIL
                      </h4>
                      <p className="text-xs text-zinc-400">
                        Materi visual dibuat tajam dan proporsional untuk feed, story Instagram, maupun materi iklan berbayar.
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                      <div className="p-2 rounded bg-white/[0.03] border border-white/[0.04]">
                        <span className="text-[10px] text-zinc-400 block">Format</span>
                        <span className="text-white font-semibold">Feed &amp; Story</span>
                      </div>
                      <div className="p-2 rounded bg-white/[0.03] border border-white/[0.04]">
                        <span className="text-[10px] text-zinc-400 block">Waktu Buat</span>
                        <span className="text-emerald-400 font-semibold">&lt; 24 Jam</span>
                      </div>
                      <div className="p-2 rounded bg-white/[0.03] border border-white/[0.04]">
                        <span className="text-[10px] text-zinc-400 block">Hak Cipta</span>
                        <span className="text-white font-semibold">Milik Anda Penuh</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: Ads Analytics */}
                {activeTab === 'ads' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                        <span className="font-bold text-white">Format Laporan Hasil Iklan</span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400">[Simulasi Usaha Retail]</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#121217] border border-white/[0.08]">
                      <span className="text-[11px] text-zinc-400 block">Rasio Pendapatan Iklan (Target ROAS)</span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-3xl font-bold font-mono text-emerald-400">4.20x</span>
                        <span className="text-xs text-zinc-400">Tiap Rp 1jt iklan = Rp 4.2jt omset</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.04]">
                        <span className="text-[10px] text-zinc-400 block">Nilai Penjualan</span>
                        <span className="text-white font-semibold">Rp 142.8 Juta</span>
                      </div>
                      <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.04]">
                        <span className="text-[10px] text-zinc-400 block">Biaya per Pesanan</span>
                        <span className="text-emerald-400 font-semibold">Rp 24.500</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Console Footer */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400">
                  <span>Alur disesuaikan dengan kebutuhan toko Anda</span>
                  <a
                    href="#layanan"
                    className="text-emerald-400 hover:text-emerald-300 font-medium"
                  >
                    Rincian Layanan &rarr;
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
