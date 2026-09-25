import React from 'react';
import { MessageCircle, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/site';
import { trackEvent } from '../telemetry/tracker';

export const Footer: React.FC = () => {
  const defaultWaMessage = encodeURIComponent(
    "Halo Automatric! Saya ingin info sistem bot WhatsApp dan materi promosi untuk bisnis saya."
  );

  const handleContactClick = (channel: 'whatsapp' | 'email') => {
    trackEvent('whatsapp_redirect', {
      source: `footer_${channel}`,
      destination: channel === 'whatsapp' ? `https://wa.me/${siteConfig.whatsappNumber}` : siteConfig.contact.email,
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="kontak" className="scroll-mt-20 relative bg-[#050505] border-t border-white/[0.08] pt-14 pb-10 overflow-hidden">
      {/* Background glow at the very bottom */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="glow-white-wide bottom-[-15%] left-1/2 -translate-x-1/2 w-[950px] h-[450px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Main Contact & Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand & Value Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-black border border-white/[0.14] flex items-center justify-center overflow-hidden p-1">
                <img
                  src={`${import.meta.env.BASE_URL}putih pada logo.jpg`}
                  alt={siteConfig.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Otomasi WhatsApp 24 jam nonstop, produksi materi promosi visual kilat siap tayang, dan setup iklan digital terarah untuk UMKM dan bisnis online.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${defaultWaMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleContactClick('whatsapp')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-black bg-white hover:bg-zinc-200 transition-colors shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Contact Details Information */}
          <div className="md:col-span-4 space-y-3.5">
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-white">
              Informasi Kontak
            </h4>
            <div className="space-y-3 text-sm">
              {/* Email Card */}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                onClick={() => handleContactClick('email')}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-colors group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-zinc-300 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-400">Email Resmi</div>
                  <div className="text-white font-medium text-xs group-hover:text-zinc-200 transition-colors">
                    {siteConfig.contact.email}
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links & Location */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-white">
              Navigasi Halaman
            </h4>
            <nav className="flex flex-col space-y-2 text-xs text-zinc-400">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-white transition-colors py-0.5 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
