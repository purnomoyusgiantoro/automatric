import React from 'react';
import { Layers } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Footer: React.FC = () => {
  return (
    <footer id="kontak" className="relative bg-[#050505] border-t border-white/[0.08] pt-12 pb-10 overflow-hidden">
      {/* Background glow at the very bottom */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="glow-white-wide bottom-[-15%] left-1/2 -translate-x-1/2 w-[950px] h-[450px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-white/[0.08] border border-white/[0.14] flex items-center justify-center text-white">
              <Layers className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white font-sans">
              {siteConfig.name}
            </span>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-xs text-zinc-400">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 text-xs text-zinc-500 text-center sm:text-left">
          &copy; {new Date().getFullYear()} {siteConfig.name}. Seluruh hak cipta dilindungi undang-undang.
        </div>
      </div>
    </footer>
  );
};
