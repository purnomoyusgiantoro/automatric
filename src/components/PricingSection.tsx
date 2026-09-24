import React, { useState } from 'react';
import { 
  Check, 
  MessageSquare, 
  ArrowRight, 
} from 'lucide-react';
import { siteConfig, PricingPlan } from '../config/site';
import { trackEvent } from '../telemetry/tracker';

export const PricingSection: React.FC = () => {
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
    <section id="pricing" className="py-24 sm:py-32 bg-[#050505] text-zinc-100 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-3">
            Investasi Sekali Bayar
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Pilihan Paket Sprint Sesuai Kebutuhan Toko Anda.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            Seluruh paket menggunakan sistem satu kali bayar untuk pengerjaan awal. Tidak ada biaya langganan bulanan wajib dari kami.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-12 sm:mb-16">
          {siteConfig.pricing.map((plan: PricingPlan) => {
            const isSelected = plan.id === selectedPlanId;
            const isFeatured = !!plan.popular;

            return (
              <div
                key={plan.id}
                onClick={() => handleSelectPlan(plan)}
                className={`relative rounded-xl transition-all duration-150 cursor-pointer flex flex-col justify-between p-6 sm:p-8 ${
                  isSelected
                    ? 'bg-[#0f0f13] border-2 border-emerald-400 shadow-sm'
                    : isFeatured
                    ? 'bg-[#0b0b0e] border border-white/[0.14] hover:border-white/[0.24]'
                    : 'bg-[#0b0b0e] border border-white/[0.08] hover:border-white/[0.16]'
                }`}
              >
                <div>
                  {/* Top Identifier & Status */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/[0.06]">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
                      {plan.id === 'starter-sprint' && 'PAKET 01 • DASAR'}
                      {plan.id === 'growth-sprint' && 'PAKET 02 • PILIHAN UTAMA'}
                      {plan.id === 'domination-sprint' && 'PAKET 03 • SKALA LENGKAP'}
                    </span>
                    {isSelected && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-400/20 text-emerald-300 font-bold border border-emerald-400/30">
                        DIPILIH
                      </span>
                    )}
                  </div>

                  {/* Plan Name & Tagline */}
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-400 leading-relaxed min-h-[36px]">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-6 mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-bold font-mono text-white">
                        {plan.formattedPrice}
                      </span>
                      <span className="text-xs text-zinc-400 font-medium">
                        / sprint
                      </span>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 block mt-1">
                      {plan.duration}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2 font-semibold">
                      Cakupan Pengerjaan:
                    </span>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Action */}
                <div className="pt-6 mt-8 border-t border-white/[0.06]">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectPlan(plan);
                    }}
                    className={`w-full py-3 px-4 rounded-lg text-xs font-semibold tracking-wide transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-400 text-black font-bold hover:bg-emerald-300'
                        : 'bg-white/[0.06] text-zinc-200 border border-white/[0.1] hover:bg-white/[0.1] hover:text-white'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-4 h-4 stroke-[3]" />
                        <span>Paket Dipilih: Siap Pesan</span>
                      </>
                    ) : (
                      <>
                        <span>Pilih Paket Ini</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Confirmation & WhatsApp Action Bar */}
        <div className="rounded-xl p-6 sm:p-8 bg-[#0b0b0e] border border-white/[0.12]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            {/* Left Summary */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  Konfirmasi Pilihan Paket
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {selectedPlan.name} ({selectedPlan.formattedPrice})
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
                {selectedPlan.duration} • Pengerjaan menyeluruh oleh tim Automatric, dilengkapi masa pendampingan operasional.
              </p>
            </div>

            {/* Right WhatsApp Direct CTA Button */}
            <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={barWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsAppRedirect(selectedPlan, 'pricing_bar')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs sm:text-sm font-semibold text-black bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-sm cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-black/20" />
                <span>Pesan Paket via WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
