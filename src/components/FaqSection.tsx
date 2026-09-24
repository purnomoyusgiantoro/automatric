import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/site';
import { trackEvent } from '../telemetry/tracker';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    if (isOpening) {
      trackEvent('section_viewed', { section: 'faq_item', index });
    }
  };

  const handleWaHelpClick = () => {
    trackEvent('whatsapp_redirect', {
      source: 'faq_footer',
      destination: `https://wa.me/${siteConfig.whatsappNumber}`,
    });
  };

  const defaultWaMessage = encodeURIComponent(
    "Halo Automatric! Saya punya beberapa pertanyaan seputar solusi AI untuk bisnis saya sebelum memesan."
  );

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#050505] text-zinc-100 border-b border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-3">
            Pertanyaan Umum
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Kerap Ditanyakan Seputar Automatric.
          </h2>
          <p className="mt-3 text-base text-zinc-400 font-normal">
            Informasi transparan seputar keamanan data, estimasi pengerjaan, dan garansi operasional sistem AI bisnis Anda.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-[#0b0b0e] border border-white/[0.08] rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center bg-white/[0.04] border border-white/[0.08] text-zinc-300 transition-transform duration-150 shrink-0 ${
                      isOpen ? 'rotate-180 text-emerald-400 border-emerald-400/30' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-white/[0.06] pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-[#0b0b0e] border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-1">
              Punya Pertanyaan Spesifik Tentang Bisnis Anda?
            </h3>
            <p className="text-xs text-zinc-400">
              Tim konsultan kami siap memberikan simulasi alur AI khusus untuk jenis produk dan model operasional Anda.
            </p>
          </div>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${defaultWaMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWaHelpClick}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold text-zinc-200 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] transition-colors shrink-0 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>Diskusi Langsung via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
