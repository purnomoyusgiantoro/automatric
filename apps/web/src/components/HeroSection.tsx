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
    <section className="relative min-h-screen flex items-center justify-center bg-[#050505]">
      {/* Subtle gradient glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-mono">
          Otomasi Bisnis
        </p>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
          WhatsApp. Desain. Iklan.
          <br />
          <span className="text-zinc-500">Selesai dalam 7 hari.</span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-500 max-w-lg mx-auto leading-relaxed">
          Sistem otomasi WhatsApp 24 jam, desain promosi kilat, dan kampanye iklan digital. Sekali bayar, tanpa langganan.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#pricing"
            onClick={handlePricingClick}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium text-black bg-white hover:bg-zinc-200 transition-colors cursor-pointer"
          >
            <span>Lihat Paket</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${defaultWaMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium text-zinc-400 glass hover:text-white transition-colors cursor-pointer"
          >
            <span>Konsultasi</span>
          </a>
        </div>

        {/* Minimal metrics */}
        <div className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/[0.06] max-w-xl mx-auto">
          {[
            { value: '<1s', label: 'Respon' },
            { value: '<24h', label: 'Desain' },
            { value: '7 Hari', label: 'Sprint' },
            { value: '1x', label: 'Bayar' },
          ].map((m, i) => (
            <div key={i} className="pt-6 text-center">
              <span className="text-xl font-bold font-mono text-white block">{m.value}</span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-zinc-600 mt-1 block">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
