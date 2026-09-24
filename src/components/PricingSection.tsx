import React, { useState } from 'react';
import { 
  Check, 
  MessageSquare, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Flame, 
  Crown,
  HelpCircle,
  Clock
} from 'lucide-react';
import { siteConfig, PricingPlan } from '../config/site';
import { trackEvent } from '../telemetry/tracker';

export const PricingSection: React.FC = () => {
  // State selectedPlanId with default 'growth-sprint'
  const [selectedPlanId, setSelectedPlanId] = useState<string>('growth-sprint');

  const selectedPlan = 
    siteConfig.pricing.find((p) => p.id === selectedPlanId) || siteConfig.pricing[1];

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlanId(plan.id);
    trackEvent('pricing_plan_clicked', {
      planId: plan.id,
      price: plan.price,
      planName: plan.name,
    });
  };

  const handleWhatsAppRedirect = (plan: PricingPlan, source: 'pricing_bar' | 'pricing_card') => {
    const encodedMessage = encodeURIComponent(plan.whatsappMessage);
    const destination = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;

    trackEvent('whatsapp_redirect', {
      source,
      planId: plan.id,
      destination,
    });
  };

  const encodedBarMessage = encodeURIComponent(selectedPlan.whatsappMessage);
  const barWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedBarMessage}`;

  return (
    <section id="pricing" className="py-24 sm:py-32 relative bg-[#030508] overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-b from-emerald-600/10 via-teal-600/5 to-transparent blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-12 right-10 w-[400px] h-[400px] bg-cyan-600/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md shadow-sm shadow-emerald-950/30">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span className="tracking-wide uppercase">Investasi Transparan • Sekali Bayar</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Pilih Paket Sprint AI Sesuai{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Skala Kebutuhan Bisnis Anda
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Tidak ada jebakan langganan bulanan tanpa hasil. Anda hanya membayar sekali untuk sistem jadi yang langsung bekerja menghasilkan penjualan.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12 sm:mb-16">
          {siteConfig.pricing.map((plan: PricingPlan) => {
            const isSelected = plan.id === selectedPlanId;
            const isFeatured = !!plan.popular;

            return (
              <div
                key={plan.id}
                onClick={() => handleSelectPlan(plan)}
                className={`relative rounded-3xl transition-all duration-200 cursor-pointer flex flex-col justify-between p-7 sm:p-9 ${
                  isSelected
                    ? 'bg-[#0b101c] border-2 border-emerald-500 shadow-[0_0_35px_rgba(16,185,129,0.22)] ring-1 ring-emerald-500/40 scale-[1.02] z-20'
                    : isFeatured
                    ? 'bg-[#080c16] border border-emerald-500/25 hover:border-emerald-500/50 shadow-lg shadow-black/60'
                    : 'bg-[#080c16] border border-white/[0.08] hover:border-white/20 shadow-lg shadow-black/60'
                }`}
              >
                {/* Popular / Recommended Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-black bg-emerald-400 border border-emerald-300 shadow-md">
                      <Flame className="w-3.5 h-3.5 fill-black" />
                      <span>Paling Direkomendasikan</span>
                    </div>
                  </div>
                )}

                <div>
                  {/* Top Header: Title + Selected Badge */}
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-black text-white">
                          {plan.name}
                        </h3>
                        {plan.id === 'domination-sprint' && (
                          <Crown className="w-4 h-4 text-amber-400" />
                        )}
                        {plan.id === 'growth-sprint' && (
                          <Flame className="w-4 h-4 text-emerald-400" />
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 mt-2 line-clamp-2 min-h-[40px]">
                        {plan.tagline}
                      </p>
                    </div>

                    {/* Active Selected Tag */}
                    {isSelected && (
                      <span className="shrink-0 inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold text-white bg-emerald-600 shadow-[0_0_12px_rgba(16,185,129,0.5)] animate-in fade-in duration-200">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Paket Terpilih</span>
                      </span>
                    )}
                  </div>

                  {/* Price Tag & Duration */}
                  <div className="py-5 my-3 border-y border-white/[0.07] space-y-1.5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                        {plan.formattedPrice}
                      </span>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        / Sekali Bayar
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{plan.duration}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 my-6">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                      Fitur Termasuk:
                    </span>
                    {plan.features.map((feature: string, fIdx: number) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-emerald-400 stroke-[2.5]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Action */}
                <div className="pt-6 border-t border-white/[0.06] mt-4">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectPlan(plan);
                    }}
                    className={`w-full py-3.5 px-5 rounded-2xl text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/50 hover:bg-emerald-500'
                        : isFeatured
                        ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/25'
                        : 'bg-white/[0.05] text-slate-300 border border-white/10 hover:bg-white/[0.1] hover:text-white'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-4 h-4 stroke-[3]" />
                        <span>Paket Dipilih: Siap Order</span>
                      </>
                    ) : (
                      <>
                        <span>Pilih Paket Ini</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Confirmation & WhatsApp Action Bar */}
        <div className="relative rounded-3xl p-6 sm:p-8 backdrop-blur-2xl bg-black/80 border-2 border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.15)] overflow-hidden">
          {/* Ambient Inner Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[100px] pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 relative z-10">
            {/* Left Info: Selected Plan Summary */}
            <div className="space-y-2 text-center lg:text-left w-full lg:w-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                <Check className="w-3.5 h-3.5" />
                <span>Pilihan Paket Terkonfirmasi</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Paket yang Anda pilih: <span className="text-emerald-400">{selectedPlan.name}</span> ({selectedPlan.formattedPrice})
              </h3>
              <p className="text-sm text-slate-400 max-w-xl">
                {selectedPlan.duration} • Termasuk setup penuh dari nol, konfigurasi WhatsApp, dan garansi pendampingan resmi.
              </p>
            </div>

            {/* Right Action: WhatsApp CTA Button */}
            <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={barWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsAppRedirect(selectedPlan, 'pricing_bar')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-extrabold tracking-wide text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 transition-all duration-200 shadow-xl shadow-emerald-950/60 hover:shadow-emerald-900/80 border border-emerald-300/40 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-white/20 text-white" />
                <span>Ambil Paket Ini via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Reassurance & Trust Badges */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center gap-3 text-slate-300 text-xs sm:text-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Garansi Pendampingan &amp; Revisi Sampai Puas</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center gap-3 text-slate-300 text-xs sm:text-sm">
            <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Tanpa Biaya Bulanan / Komitmen Tersembunyi</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center gap-3 text-slate-300 text-xs sm:text-sm">
            <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Konsultasi Teknis &amp; Strategi Langsung dengan Tim Ahli</span>
          </div>
        </div>
      </div>
    </section>
  );
};
