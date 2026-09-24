import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { siteConfig, PricingPlan } from '../config/site';
import { trackEvent } from '../telemetry/tracker';

export const PricingSection: React.FC = () => {
  const handleWhatsAppRedirect = (plan: PricingPlan) => {
    const msg = encodeURIComponent(plan.whatsappMessage);
    trackEvent('whatsapp_redirect', {
      source: 'pricing_card',
      planId: plan.id,
      destination: `https://wa.me/${siteConfig.whatsappNumber}?text=${msg}`,
    });
  };

  return (
    <section id="pricing" className="relative py-32 sm:py-40 bg-[#050505] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="glow-white-intense top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[550px]" />
        <div className="glow-white-medium bottom-[10%] right-[15%] w-[500px] h-[500px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-mono mb-4">
            Investasi
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Pilih paket Anda.
          </h2>
          <p className="mt-4 text-sm text-zinc-500 max-w-md mx-auto">
            Sekali bayar. Tanpa langganan bulanan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {siteConfig.pricing.map((plan: PricingPlan) => (
            <div
              key={plan.id}
              className={`relative ${plan.popular ? 'lg:-translate-y-2' : ''}`}
            >
              {plan.popular && (
                <div className="glow-white-spot top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px]" />
              )}
              <div
                className={`relative z-10 h-full glass-card rounded-2xl p-8 sm:p-10 flex flex-col justify-between ${
                  plan.popular ? 'border-white/[0.3] shadow-[0_0_50px_rgba(255,255,255,0.08)]' : ''
                }`}
              >
              <div>
                {plan.popular && (
                  <span className="text-[10px] uppercase tracking-[0.15em] text-zinc-400 font-mono mb-4 block">
                    Populer
                  </span>
                )}
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <div className="mt-4 mb-8">
                  <span className="text-3xl font-bold font-mono text-white">
                    {plan.formattedPrice}
                  </span>
                  <span className="text-xs text-zinc-500 ml-2">/ sprint</span>
                </div>

                <div className="space-y-3 border-t border-white/[0.08] pt-6">
                  {plan.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-400">
                      <Check className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(plan.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleWhatsAppRedirect(plan)}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                    plan.popular
                      ? 'bg-white text-black hover:bg-zinc-200'
                      : 'glass-strong text-zinc-300 hover:bg-white/[0.12] hover:text-white'
                  }`}
                >
                  <span>Pesan Paket</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};
