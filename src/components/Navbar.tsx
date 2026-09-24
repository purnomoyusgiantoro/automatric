import React, { useState } from 'react';
import { MessageSquare, Menu, X, Layers } from 'lucide-react';
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
    "Halo Automatric! Saya ingin konsultasi solusi AI (Chatbot WA, Desain Kilat & Iklan) untuk meningkatkan bisnis saya."
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Identity */}
          <a
            href="#"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg"
          >
            <div className="w-8 h-8 rounded-lg bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-white">
              <Layers className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold tracking-tight text-white font-sans">
                {siteConfig.name}
              </span>
              <span className="hidden sm:inline-block text-[11px] text-zinc-400 font-medium">
                {siteConfig.tagline}
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavLinkClick(link.name)}
                className="text-xs uppercase tracking-wider font-semibold text-zinc-400 hover:text-white transition-colors duration-150 focus:outline-none focus-visible:text-emerald-400"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${defaultWaMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick('navbar_desktop')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-black bg-emerald-400 hover:bg-emerald-300 transition-colors duration-150 cursor-pointer shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-black/20" />
              <span>Konsultasi WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0c] border-b border-white/[0.08] px-4 pt-3 pb-5 space-y-2">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavLinkClick(link.name)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${defaultWaMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick('navbar_mobile')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-semibold text-black bg-emerald-400 hover:bg-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Konsultasi WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
