import React, { useState } from 'react';
import { MessageSquare, Menu, X, Layers } from 'lucide-react';
import { siteConfig } from '../config/site';
import { trackEvent } from '../telemetry/tracker';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = (source: 'navbar_desktop' | 'navbar_mobile') => {
    trackEvent('whatsapp_redirect', {
      source: source === 'navbar_desktop' ? 'navbar' : 'navbar',
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
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl bg-[#030508]/85 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center relative overflow-hidden group-hover:border-emerald-500/60 transition-colors">
              <Layers className="w-5 h-5 text-emerald-400 group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white font-sans">
                  {siteConfig.name}
                </span>
                <span className="inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-mono font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                  LIVE
                </span>
              </div>
              <span className="text-[10px] tracking-wider uppercase text-emerald-400/90 font-medium">
                {siteConfig.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavLinkClick(link.name)}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150 focus:outline-none focus-visible:text-emerald-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop WhatsApp CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${defaultWaMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick('navbar_desktop')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 transition-all duration-200 shadow-lg shadow-emerald-950/50 hover:shadow-emerald-900/60 border border-emerald-400/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white/20" />
              <span>Konsultasi WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050811]/95 border-b border-white/[0.08] backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-200">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavLinkClick(link.name)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-white/[0.05] transition-colors"
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
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-950/40"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat WhatsApp Sekarang</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
