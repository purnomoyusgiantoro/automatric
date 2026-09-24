import React from 'react';
import { ArrowUp, ArrowUpRight, MessageCircle, Mail, Phone, MapPin, Layers } from 'lucide-react';
import { siteConfig } from '../config/site';
import { trackEvent } from '../telemetry/tracker';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const defaultWaMessage = encodeURIComponent(
    "Halo Automatric! Saya ingin berdiskusi mengenai bot WhatsApp dan desain promosi untuk toko saya."
  );

  const handleFooterWaClick = () => {
    trackEvent('whatsapp_redirect', {
      source: 'footer_contact',
      destination: `https://wa.me/${siteConfig.whatsappNumber}`,
    });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      {/* Background glow at the very bottom */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-white/[0.04] blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/[0.08]">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white/[0.08] border border-white/[0.14] flex items-center justify-center text-white">
                <Layers className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Otomasi WhatsApp 24 jam, produksi materi promosi visual kilat (&lt;24 jam), dan setup iklan digital. Sprint selesai dalam 3–7 hari kerja tanpa biaya bulanan.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${defaultWaMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleFooterWaClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-black bg-white hover:bg-zinc-200 transition-colors shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Konsultasi Cepat via WhatsApp</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Contact Details (Bagian Paling Bawah) */}
          <div className="md:col-span-4 space-y-3.5">
            <h4 className="text-[11px] font-mono font-semibold uppercase tracking-[0.18em] text-zinc-300">
              Informasi Kontak
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${defaultWaMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleFooterWaClick}
                  className="flex items-center gap-2.5 text-zinc-300 hover:text-white transition-colors group"
                >
                  <Phone className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                  <span className="font-mono">{siteConfig.contact.whatsapp}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded glass text-zinc-400">WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2.5 text-zinc-300 hover:text-white transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address} • Seluruh Indonesia</span>
              </li>
              <li className="pt-1 text-[11px] text-zinc-500 font-mono">
                🕒 {siteConfig.contact.hours}
              </li>
            </ul>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-[11px] font-mono font-semibold uppercase tracking-[0.18em] text-zinc-300">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              {siteConfig.navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Seluruh hak cipta dilindungi undang-undang.
          </div>
          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Kembali ke atas"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
