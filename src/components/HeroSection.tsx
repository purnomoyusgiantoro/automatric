import React from 'react';
import {
  ArrowRight,
  MessageSquare,
  Zap,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';
import { siteConfig } from '../config/site';
import { trackEvent } from '../telemetry/tracker';

export const HeroSection: React.FC = () => {
  const defaultWaMessage = encodeURIComponent(
    'Halo Automatric! Saya tertarik untuk konsultasi ekosistem AI (Chatbot WhatsApp 24/7, Desain Kilat & Iklan Berbasis AI) untuk meningkatkan omset bisnis saya.'
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

  const featureBadges = [
    {
      label: 'Desain <24 Jam',
      icon: Zap,
      color: 'text-amber-400',
      bg: 'bg-amber-400/10',
      border: 'border-amber-400/20',
    },
    {
      label: 'Chatbot WA 24/7',
      icon: MessageSquare,
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10',
      border: 'border-emerald-400/20',
    },
    {
      label: 'Iklan Berbasis AI',
      icon: TrendingUp,
      color: 'text-cyan-400',
      bg: 'bg-cyan-400/10',
      border: 'border-cyan-400/20',
    },
    {
      label: 'Sprint Sekali Bayar',
      icon: ShieldCheck,
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10',
      border: 'border-emerald-400/20',
    },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#030508]">
      {/* Background Subtle Gradient Halos & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/[0.07] blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Top Tag Announcement */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/25 mb-8 animate-in fade-in duration-700">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-xs font-semibold tracking-wide text-emerald-300">
            Slot Sprint Q4: Tersedia 4 Klien Bisnis & UMKM
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.12]">
          Tingkatkan Omset & Efisiensi Bisnis Anda{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent underline decoration-emerald-500/30 decoration-wavy underline-offset-8">
            10x Lebih Cepat
          </span>{' '}
          dengan Ekosistem AI
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          Solusi terintegrasi untuk <strong className="text-white font-semibold">UMKM & Retail</strong>: CS WhatsApp pintar siaga 24/7, materi promosi kilat &lt;24 jam, dan strategi iklan berbasis AI untuk melejitkan profit tanpa pusing biaya operasional.
        </p>

        {/* 4 Feature Badges Pill */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-3xl mx-auto">
          {featureBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.label}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105 ${badge.bg} ${badge.border} border text-slate-200 shadow-sm`}
              >
                <Icon className={`w-3.5 h-3.5 ${badge.color}`} />
                <span className="font-semibold tracking-wide">{badge.label}</span>
              </div>
            );
          })}
        </div>

        {/* Dual CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          {/* Primary CTA: Lihat Paket Harga */}
          <a
            href="#pricing"
            onClick={handlePricingClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold tracking-wide text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-xl shadow-emerald-950/60 hover:shadow-emerald-900/80 border border-emerald-400/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
          >
            <span>Lihat Paket Harga</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          {/* Secondary CTA: WhatsApp Direct */}
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${defaultWaMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold tracking-wide text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-emerald-500/40 backdrop-blur-xl transition-all duration-200 hover:text-white cursor-pointer shadow-lg"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Konsultasi WhatsApp Sekarang</span>
          </a>
        </div>

        {/* Trust Guarantees */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Sprint Beres 3-7 Hari</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Sekali Bayar (Tanpa Biaya Bulanan)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Garansi Pendampingan & Revisi</span>
          </div>
        </div>

        {/* Metrics Ticker Bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.08]">
          <div className="backdrop-blur-xl bg-black/60 border border-white/[0.09] rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-emerald-500/[0.02] pointer-events-none" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative z-10">
              {siteConfig.heroMetrics.map((metric, idx) => (
                <div
                  key={metric.label}
                  className={`flex flex-col items-center justify-center ${
                    idx !== siteConfig.heroMetrics.length - 1
                      ? 'md:border-r md:border-white/[0.08]'
                      : ''
                  }`}
                >
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                    {metric.value}
                  </span>
                  <span className="mt-2 text-xs sm:text-sm font-medium text-slate-400 text-center max-w-[150px]">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
