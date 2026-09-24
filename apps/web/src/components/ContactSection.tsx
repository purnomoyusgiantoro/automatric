import React, { useState } from 'react';
import { ArrowUpRight, MessageCircle, Mail, MapPin, Clock, Send, Check } from 'lucide-react';
import { siteConfig } from '../config/site';
import { trackEvent } from '../telemetry/tracker';

export const ContactSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('WhatsApp Bot & Otomasi');
  const [storeName, setStoreName] = useState<string>('');
  const [customNote, setCustomNote] = useState<string>('');

  const services = [
    'WhatsApp Bot & Otomasi',
    'Desain Promosi Kilat (<24 Jam)',
    'Setup Iklan Digital (Meta/TikTok)',
    'Konsultasi Umum Toko',
  ];

  const buildWaUrl = () => {
    const text = `Halo Automatric!\n\nNama/Toko: ${storeName.trim() || '-'}\nLayanan yang diminati: ${selectedService}\nCatatan: ${customNote.trim() || 'Mohon informasi alur pengerjaan dan estimasi jadwal.'}`;
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('whatsapp_redirect', {
      source: 'contact_section_builder',
      service: selectedService,
      destination: `https://wa.me/${siteConfig.whatsappNumber}`,
    });
    window.open(buildWaUrl(), '_blank', 'noopener,noreferrer');
  };

  const handleDirectClick = (type: 'wa' | 'email') => {
    trackEvent('section_viewed', {
      section: 'contact_direct',
      type,
    });
  };

  return (
    <section id="kontak" className="relative py-28 sm:py-36 bg-[#050505] overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full bg-white/[0.045] blur-[150px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] rounded-full bg-white/[0.035] blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-mono mb-4">
            Kontak &amp; Konsultasi
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Mulai dalam hitungan hari.
          </h2>
          <p className="mt-4 text-sm text-zinc-500 max-w-lg mx-auto leading-relaxed">
            Diskusikan kebutuhan toko Anda langsung bersama tim kami. Respon cepat tanpa bot pihak ketiga yang lambat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Quick Connect */}
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Halo Automatric! Saya ingin konsultasi sistem bisnis untuk toko saya.')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleDirectClick('wa')}
              className="glass-card rounded-2xl p-6 flex items-start gap-4 group cursor-pointer block"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.07] border border-white/[0.12] flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-all">
                <MessageCircle className="w-5 h-5 text-white group-hover:text-black transition-colors" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-mono text-zinc-500 block">WhatsApp Resmi</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <div className="text-base font-bold text-white mt-0.5">{siteConfig.contact.whatsapp}</div>
                <span className="text-[11px] text-zinc-400 mt-1 block">Aktif chat 24 jam nonstop</span>
              </div>
            </a>

            {/* Email Contact */}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              onClick={() => handleDirectClick('email')}
              className="glass-card rounded-2xl p-6 flex items-start gap-4 group cursor-pointer block"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.07] border border-white/[0.12] flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-all">
                <Mail className="w-5 h-5 text-white group-hover:text-black transition-colors" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-mono text-zinc-500 block">Email Bisnis</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <div className="text-base font-bold text-white mt-0.5">{siteConfig.contact.email}</div>
                <span className="text-[11px] text-zinc-400 mt-1 block">Tawaran kerjasama &amp; pertanyaan formal</span>
              </div>
            </a>

            {/* Operating info & guarantees */}
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3.5">
                <Clock className="w-4 h-4 text-white/70 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-white block">Jam Layanan</span>
                  <span className="text-xs text-zinc-400 block mt-0.5">{siteConfig.contact.hours}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 border-t border-white/[0.06] pt-3.5">
                <MapPin className="w-4 h-4 text-white/70 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-white block">Lokasi Operasional</span>
                  <span className="text-xs text-zinc-400 block mt-0.5">{siteConfig.contact.address} • Layanan Seluruh Indonesia</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                <span className="text-xs text-zinc-300 font-medium">Slot sprint pengerjaan minggu ini: <strong className="text-white">Tersedia</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Consultation Message Composer */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-7 sm:p-9">
              <div className="border-b border-white/[0.08] pb-5 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white/60" />
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Pesan Konsultasi Cepat</span>
                </div>
                <h3 className="text-xl font-bold text-white mt-1.5">
                  Kirim Rincian Toko Anda
                </h3>
                <p className="text-xs text-zinc-500 mt-1">
                  Format pesan akan otomatis terisi dan langsung dialihkan ke WhatsApp resmi kami.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                {/* Service selector */}
                <div>
                  <label className="text-xs font-semibold text-zinc-300 block mb-2">
                    Pilih Layanan Utama:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {services.map((svc) => {
                      const isSelected = selectedService === svc;
                      return (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => setSelectedService(svc)}
                          className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between border cursor-pointer ${
                            isSelected
                              ? 'bg-white text-black border-white'
                              : 'glass text-zinc-400 hover:text-white border-white/[0.08] hover:border-white/[0.18]'
                          }`}
                        >
                          <span className="truncate pr-1">{svc}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 shrink-0 stroke-[2.5]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Store Name input */}
                <div>
                  <label htmlFor="store-name" className="text-xs font-semibold text-zinc-300 block mb-1.5">
                    Nama Toko / Bisnis:
                  </label>
                  <input
                    id="store-name"
                    type="text"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    placeholder="Contoh: Toko Kopi Senja / Brand Fashion"
                    className="w-full px-4 py-3 rounded-xl text-xs bg-white/[0.04] border border-white/[0.1] text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all"
                  />
                </div>

                {/* Custom Note input */}
                <div>
                  <label htmlFor="custom-note" className="text-xs font-semibold text-zinc-300 block mb-1.5">
                    Kebutuhan atau Pertanyaan (Opsional):
                  </label>
                  <textarea
                    id="custom-note"
                    rows={3}
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="Tuliskan kendala yang dihadapi (misal: admin slow respon saat malam, butuh banner gajian, dll.)"
                    className="w-full px-4 py-3 rounded-xl text-xs bg-white/[0.04] border border-white/[0.1] text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold text-black bg-white hover:bg-zinc-200 transition-colors shadow-lg cursor-pointer"
                  >
                    <span>Kirim &amp; Hubungi via WhatsApp</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] text-zinc-600 text-center block mt-2">
                    Tanpa spam • Respon langsung oleh konsultan sprint Automatric
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
