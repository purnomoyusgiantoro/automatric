import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/site';
import { trackEvent } from '../telemetry/tracker';

export const HeroSection: React.FC = () => {
  const defaultWaMessage = encodeURIComponent(
    'Halo Automatric! Saya ingin konsultasi.'
  );

  const handlePricingClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent('section_viewed', { section: 'pricing', source: 'hero_primary_cta' });
    const el = document.getElementById('pricing');
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
  };

  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_redirect', { source: 'hero', destination: `https://wa.me/${siteConfig.whatsappNumber}` });
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 bg-[#050505]">
      {/* Subtle glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/[0.015] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left: Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-mono">
              Otomasi Bisnis • Sprint 3–7 Hari
            </p>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              WhatsApp. Desain. Iklan.
              <br />
              <span className="text-zinc-500">Selesai dalam 7 hari.</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-500 max-w-xl leading-relaxed">
              Sistem otomasi WhatsApp 24 jam, desain promosi kilat, dan kampanye iklan digital. Sekali bayar, tanpa langganan.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md pt-2">
              <a
                href="#pricing"
                onClick={handlePricingClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-black bg-white hover:bg-zinc-200 transition-colors cursor-pointer"
              >
                <span>Lihat Paket</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${defaultWaMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-zinc-400 glass hover:text-white transition-colors cursor-pointer"
              >
                <span>Konsultasi</span>
              </a>
            </div>

            {/* Micro metrics */}
            <div className="pt-6 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: '<1s', label: 'Respon Bot' },
                { value: '<24h', label: 'Desain Jadi' },
                { value: '7 Hari', label: 'Sprint' },
                { value: '1x', label: 'Bayar' },
              ].map((m, i) => (
                <div key={i} className="text-center sm:text-left">
                  <span className="text-lg font-bold font-mono text-white block">{m.value}</span>
                  <span className="text-[10px] uppercase tracking-[0.12em] text-zinc-600 block">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Live Console Preview */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl overflow-hidden">
              {/* Console Header */}
              <div className="glass-strong px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white/40" />
                  <span className="text-xs font-bold text-white">Bot WhatsApp Toko</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-500">Aktif 24 Jam</span>
              </div>

              {/* Chat Messages */}
              <div className="p-4 space-y-3 bg-black/20 min-h-[300px]">
                <div className="flex flex-col items-end">
                  <div className="max-w-[85%] rounded-xl px-3.5 py-2.5 text-xs glass-strong text-zinc-200">
                    <p>Malam min, kemeja batik navy ukuran XL masih ada?</p>
                    <span className="text-[10px] text-zinc-600 block text-right mt-1">23:14</span>
                  </div>
                </div>

                <div className="flex flex-col items-start">
                  <div className="max-w-[85%] rounded-xl px-3.5 py-2.5 text-xs glass text-zinc-300 border-white/[0.1]">
                    <p>Malam kak! Masih ada 3 potong untuk Batik Navy XL. Pengiriman kilat bisa tiba hari Jumat sore. Mau kami pesankan?</p>
                    <span className="text-[10px] text-zinc-600 block text-right mt-1">23:14 ✓✓</span>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className="max-w-[85%] rounded-xl px-3.5 py-2.5 text-xs glass-strong text-zinc-200">
                    <p>Boleh min, minta foto detail bahannya ya.</p>
                    <span className="text-[10px] text-zinc-600 block text-right mt-1">23:15</span>
                  </div>
                </div>

                <div className="flex flex-col items-start">
                  <div className="max-w-[85%] rounded-xl px-3.5 py-2.5 text-xs glass text-zinc-300 border-white/[0.1]">
                    <p>Baik kak! Ini foto detail bahan katun primisima. Adem, tidak kaku, sudah dilapisi furing rapi.</p>
                    <span className="text-[10px] text-zinc-600 block text-right mt-1">23:15 ✓✓</span>
                  </div>
                </div>

                {/* Status bar */}
                <div className="glass rounded-lg p-2 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>Pengecekan Stok: Otomatis</span>
                  <span className="text-white/60">Terhubung</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
