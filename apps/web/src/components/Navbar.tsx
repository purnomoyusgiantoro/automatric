import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/site';
import { trackEvent } from '../telemetry/tracker';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = (source: 'navbar_desktop' | 'navbar_mobile') => {
    trackEvent('whatsapp_redirect', {
      source,
      destination: `https://wa.me/${siteConfig.whatsappNumber}`,
    });
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, name: string, href: string) => {
    trackEvent('section_viewed', { section: name.toLowerCase() });
    setMobileMenuOpen(false);

    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const defaultWaMessage = encodeURIComponent(
    "Halo Automatric! Saya ingin info sistem bot WhatsApp dan materi promosi untuk bisnis saya."
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-white group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-black border border-white/[0.14] flex items-center justify-center overflow-hidden p-1 group-hover:border-white/40 transition-all">
              <img
                src={`${import.meta.env.BASE_URL}putih pada logo.jpg`}
                alt={siteConfig.name}
                className="w-full h-full object-contain"
              />
            </div>
            <span>{siteConfig.name}</span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.name, link.href)}
                className="text-[11px] uppercase tracking-[0.15em] text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact & Action CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${defaultWaMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick('navbar_desktop')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-black bg-white hover:bg-zinc-200 transition-colors shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${defaultWaMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick('navbar_mobile')}
              className="p-2 rounded-full glass text-white text-xs flex items-center justify-center"
              aria-label="Chat WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center text-zinc-400 hover:text-white cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-strong px-6 pt-3 pb-6 space-y-3 border-t border-white/[0.08]">
          <div className="space-y-1">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.name, link.href)}
                className="block px-3 py-2.5 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/[0.04] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/[0.08]">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${defaultWaMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick('navbar_mobile')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full text-xs font-semibold text-black bg-white hover:bg-zinc-200 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
