import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '../config/site';
import { trackEvent } from '../telemetry/tracker';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    if (isOpening) trackEvent('section_viewed', { section: 'faq_item', index });
  };

  return (
    <section id="faq" className="relative py-32 sm:py-40 bg-[#050505] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="glow-white-medium top-[35%] left-1/2 -translate-x-1/2 w-[700px] h-[500px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-mono mb-4">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Pertanyaan umum.
          </h2>
        </div>

        <div className="space-y-2">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="glass-card rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 px-5 flex items-center justify-between text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs text-zinc-500 leading-relaxed border-t border-white/[0.08] pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
