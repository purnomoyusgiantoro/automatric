import React from 'react';
import { ArrowUp } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/[0.06] py-10">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <div className="text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </div>
        <button
          onClick={scrollToTop}
          type="button"
          className="p-2 rounded-full glass text-zinc-500 hover:text-white transition-colors cursor-pointer"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};
