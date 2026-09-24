import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Layers } from 'lucide-react';
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

  const handleNavLinkClick = (name: string) => {
    trackEvent('section_viewed', { section: name.toLowerCase() });
    setMobileMenuOpen(false);
  };

  const defaultWaMessage = encodeURIComponent(
    "Halo Automatric! Saya ingin konsultasi."
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight text-white">
            <Layers className="w-5 h-5" />
            <span>{siteConfig.name}</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavLinkClick(link.name)}
                className="text-[11px] uppercase tracking-[0.15em] text-zinc-500 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${defaultWaMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick('navbar_desktop')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-medium text-black bg-white hover:bg-zinc-200 transition-colors cursor-pointer"
            >
              <span>Hubungi Kami</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-zinc-400 hover:text-white cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden glass-strong px-6 pt-3 pb-5 space-y-1">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavLinkClick(link.name)}
              className="block px-3 py-2.5 rounded-lg text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${defaultWaMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick('navbar_mobile')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full text-xs font-medium text-black bg-white"
            >
              <span>Hubungi Kami</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
