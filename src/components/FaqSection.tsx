import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
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
      source: 'floating',
      destination: `https://wa.me/${siteConfig.whatsappNumber}`,
    });
  };

  const defaultWaMessage = encodeURIComponent(
    "Halo Automatric! Saya punya beberapa pertanyaan seputar solusi AI untuk bisnis saya sebelum memesan."
  );

  return (
    <section id="faq" className="py-24 relative bg-[#030508] overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Pertanyaan Umum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kerap Ditanyakan Seputar <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Automatric</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Semua yang perlu Anda ketahui tentang keamanan, proses pengerjaan, dan jaminan hasil otomasi AI untuk bisnis Anda.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl transition-all duration-200 border backdrop-blur-xl ${
                  isOpen
                    ? 'bg-white/[0.04] border-emerald-500/30 shadow-lg shadow-black/40'
                    : 'bg-black/50 border-white/[0.08] hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-2xl cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200 shrink-0 ${
                      isOpen
                        ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400 rotate-180'
                        : 'bg-white/[0.05] border-white/10 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/[0.05] pt-4 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/30 via-black to-cyan-950/30 border border-white/[0.1] backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">
              Masih Punya Pertanyaan Spesifik Tentang Bisnis Anda?
            </h3>
            <p className="text-slate-400 text-sm">
              Tim konsultan kami siap memberikan simulasi alur AI khusus untuk jenis produk Anda.
            </p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${defaultWaMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWaHelpClick}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all duration-150 shadow-lg shadow-emerald-950/50 shrink-0 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white/20" />
            <span>Tanya Langsung di WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
