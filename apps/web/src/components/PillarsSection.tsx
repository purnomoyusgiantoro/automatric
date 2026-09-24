import React from 'react';
import { MessageCircle, Palette, BarChart2 } from 'lucide-react';


const services = [
  {
    icon: MessageCircle,
    title: 'Bot WhatsApp 24 Jam',
    desc: 'Balas pesan, cek stok, dan catat pesanan secara otomatis.',
  },
  {
    icon: Palette,
    title: 'Desain Promosi Kilat',
    desc: 'Materi visual siap tayang dalam waktu kurang dari 24 jam.',
  },
  {
    icon: BarChart2,
    title: 'Setup Iklan Digital',
    desc: 'Kampanye Meta Ads & TikTok Ads yang terarah dan terukur.',
  },
];

export const PillarsSection: React.FC = () => {
  return (
    <section id="layanan" className="py-32 sm:py-40 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-mono mb-4">
            Layanan
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Tiga pilar untuk bisnis Anda.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 sm:p-10 flex flex-col items-start gap-5 hover:border-white/[0.16] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center">
                <s.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">{s.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
