import React, { useState } from 'react';
import {
  ArrowUpRight,
  MessageCircle,
  Palette,
  BarChart2,
  Check,
} from 'lucide-react';
import { siteConfig } from '../config/site';
import { trackEvent } from '../telemetry/tracker';
import { ScrollReveal } from './ScrollReveal';

export const PillarsSection: React.FC = () => {
  const [activeChatScenario, setActiveChatScenario] = useState<'catalog' | 'order' | 'followup'>('catalog');
  const [activeCreativeFormat, setActiveCreativeFormat] = useState<'feed' | 'story' | 'banner'>('feed');
  const [adsTimeframe, setAdsTimeframe] = useState<'30d' | '60d'>('30d');

  const p1 = siteConfig.pillars[0];
  const p2 = siteConfig.pillars[1];
  const p3 = siteConfig.pillars[2];

  const handlePillarWaClick = (pillarId: string) => {
    trackEvent('whatsapp_redirect', {
      source: 'pillar_cta',
      destination: `https://wa.me/${siteConfig.whatsappNumber}`,
      planId: pillarId,
    });
  };

  const chatDialogues = {
    catalog: [
      { sender: 'user', text: 'Malam min, kemeja batik navy XL masih ada?', time: '23:14' },
      { sender: 'bot', text: 'Malam kak! Masih ada 3 potong. Pengiriman kilat bisa tiba Jumat sore. Mau kami pesankan?', time: '23:14' },
      { sender: 'user', text: 'Boleh min, minta foto detail bahannya ya.', time: '23:15' },
      { sender: 'bot', text: 'Baik kak! Ini foto detail bahan katun primisima. Adem dan sudah dilapisi furing rapi.', time: '23:15' },
    ],
    order: [
      { sender: 'user', text: 'Min, pesan Kopi Susu 1L (2 botol) dan Brownies (1 kotak) kirim ke Tebet.', time: '14:20' },
      { sender: 'bot', text: '2x Kopi Susu 1L (Rp 130.000)\n1x Brownies (Rp 65.000)\nOngkir Tebet (Rp 12.000)\nTotal: Rp 207.000', time: '14:20' },
      { sender: 'bot', text: 'Pesanan #ORD-4921 tercatat. Bayar via BCA atau QRIS.', time: '14:21' },
      { sender: 'user', text: 'Sudah bayar lewat QRIS barusan.', time: '14:22' },
      { sender: 'bot', text: 'Pembayaran diterima. Estimasi kurir 15 menit lagi kak.', time: '14:22' },
    ],
    followup: [
      { sender: 'bot', text: 'Halo Kak Sarah! Pesanan Paket Skincare kemarin masih di keranjang Kakak.', time: '09:00' },
      { sender: 'bot', text: 'Hari ini ada potongan ongkir Rp 15.000. Mau kami proseskan?', time: '09:00' },
      { sender: 'user', text: 'Boleh min, kemarin lupa. Lanjutkan pesanannya ya.', time: '09:05' },
      { sender: 'bot', text: 'Baik kak! Total jadi Rp 185.000 dengan potongan ongkir. Tautan pembayaran siap.', time: '09:06' },
    ],
  };

  const tabBtn = (active: boolean) =>
    `text-[11px] px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer min-h-[36px] ${
      active ? 'bg-white text-black' : 'text-zinc-500 hover:text-white'
    }`;

  return (
    <section id="layanan" className="relative py-14 sm:py-20 bg-[#050505] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="glow-white-intense top-[10%] right-[10%] w-[650px] h-[650px]" />
        <div className="glow-white-wide top-[45%] left-[5%] w-[700px] h-[700px]" />
        <div className="glow-white-medium bottom-[8%] right-[15%] w-[600px] h-[600px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal className="text-center mb-12 sm:mb-14">
          <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-mono mb-3">Layanan</p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Tiga pilar untuk bisnis Anda.
          </h2>
        </ScrollReveal>

        <div className="space-y-10 sm:space-y-12">

          {/* ─── Pilar 1: Bot WhatsApp ─── */}
          <ScrollReveal>
          <div className="glass-card rounded-2xl p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

              {/* Left: Penjelasan */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-[11px] font-mono text-zinc-400">
                  <MessageCircle className="w-3.5 h-3.5 text-white" />
                  <span>{p1.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{p1.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{p1.description}</p>

                <ul className="space-y-2 pt-2">
                  {p1.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-400">
                      <Check className="w-3.5 h-3.5 text-zinc-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Halo Automatric! Saya tertarik Otomasi WhatsApp.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handlePillarWaClick(p1.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-white/70 hover:text-white transition-colors pt-1"
                >
                  <span>Konsultasi WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              {/* Right: Chat Simulator */}
              <div className="lg:col-span-7">
                <div className="glass-card rounded-xl overflow-hidden">
                  {/* Chat Header */}
                  <div className="glass-strong px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-white font-mono">AT</div>
                      <div>
                        <span className="text-xs font-bold text-white block">Bot WhatsApp Toko</span>
                        <span className="text-[10px] text-zinc-500">Online 24 Jam</span>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded glass text-zinc-500">SIMULASI</span>
                  </div>

                  {/* Scenario Tabs */}
                  <div className="px-3 py-2 flex items-center gap-1.5 border-b border-white/[0.06] bg-black/20">
                    <button type="button" onClick={() => setActiveChatScenario('catalog')} className={tabBtn(activeChatScenario === 'catalog')}>Cek Stok</button>
                    <button type="button" onClick={() => setActiveChatScenario('order')} className={tabBtn(activeChatScenario === 'order')}>Rekap Pesanan</button>
                    <button type="button" onClick={() => setActiveChatScenario('followup')} className={tabBtn(activeChatScenario === 'followup')}>Pengingat</button>
                  </div>

                  {/* Messages */}
                  <div className="p-4 space-y-2.5 min-h-[260px] max-h-[300px] overflow-y-auto bg-black/10">
                    {chatDialogues[activeChatScenario].map((msg, idx) => (
                      <div key={idx} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                        <div className={`max-w-[80%] rounded-xl px-3 py-2 text-xs leading-relaxed ${
                          msg.sender === 'user'
                            ? 'glass-strong text-zinc-200'
                            : 'glass text-zinc-300'
                        }`}>
                          <p className="whitespace-pre-line">{msg.text}</p>
                          <span className="text-[10px] text-zinc-600 block text-right mt-0.5">{msg.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input bar */}
                  <div className="glass-strong px-4 py-2.5 flex items-center justify-between text-zinc-600 text-xs">
                    <span>Ketik pesan...</span>
                    <div className="w-6 h-6 rounded-lg bg-white text-black flex items-center justify-center">
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* ─── Pilar 2: Desain Promosi ─── */}
          <ScrollReveal>
          <div className="glass-card rounded-2xl p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

              {/* Left: Design Showcase */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="glass-card rounded-xl p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <span className="text-xs font-bold text-white">Alur Pembuatan Materi</span>
                    <span className="text-[10px] font-mono text-zinc-500 glass px-2 py-0.5 rounded">&lt; 24 Jam</span>
                  </div>

                  {/* Format Tabs */}
                  <div className="flex items-center gap-1.5">
                    <button type="button" onClick={() => setActiveCreativeFormat('feed')} className={tabBtn(activeCreativeFormat === 'feed')}>Feed (1:1)</button>
                    <button type="button" onClick={() => setActiveCreativeFormat('story')} className={tabBtn(activeCreativeFormat === 'story')}>Story (9:16)</button>
                    <button type="button" onClick={() => setActiveCreativeFormat('banner')} className={tabBtn(activeCreativeFormat === 'banner')}>Banner (16:9)</button>
                  </div>

                  {/* Preview */}
                  <div className="rounded-xl glass p-5 text-center">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Materi #{activeCreativeFormat === 'feed' ? 'CRT-204' : activeCreativeFormat === 'story' ? 'CRT-205' : 'CRT-206'}</span>
                    <h4 className="text-base font-bold text-white mt-2">PROMO SPESIAL PRODUK</h4>
                    <p className="text-xs text-zinc-500 mt-1 max-w-xs mx-auto">
                      Visual promosi {activeCreativeFormat === 'feed' ? 'feed 1:1' : activeCreativeFormat === 'story' ? 'story 9:16' : 'banner 16:9'} siap tayang.
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono glass text-white/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      SIAP PASANG
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: 'Waktu', value: '< 24 Jam' },
                      { label: 'Kualitas', value: 'Hi-Res' },
                      { label: 'Hak Cipta', value: 'Milik Anda' },
                    ].map((s, i) => (
                      <div key={i} className="glass rounded-lg p-2.5 text-center">
                        <span className="text-[10px] text-zinc-600 block">{s.label}</span>
                        <span className="text-xs font-mono font-medium text-white">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Penjelasan */}
              <div className="lg:col-span-5 order-1 lg:order-2 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-[11px] font-mono text-zinc-400">
                  <Palette className="w-3.5 h-3.5 text-white" />
                  <span>{p2.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{p2.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{p2.description}</p>

                <ul className="space-y-2 pt-2">
                  {p2.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-400">
                      <Check className="w-3.5 h-3.5 text-zinc-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Halo Automatric! Saya butuh Desain Promosi Kilat.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handlePillarWaClick(p2.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-white/70 hover:text-white transition-colors pt-1"
                >
                  <span>Pesan Desain Kilat</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* ─── Pilar 3: Setup Iklan ─── */}
          <ScrollReveal>
          <div className="glass-card rounded-2xl p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

              {/* Left: Penjelasan */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-[11px] font-mono text-zinc-400">
                  <BarChart2 className="w-3.5 h-3.5 text-white" />
                  <span>{p3.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{p3.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{p3.description}</p>

                <ul className="space-y-2 pt-2">
                  {p3.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-400">
                      <Check className="w-3.5 h-3.5 text-zinc-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Halo Automatric! Saya ingin Setup Iklan Digital.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handlePillarWaClick(p3.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-white/70 hover:text-white transition-colors pt-1"
                >
                  <span>Konsultasi Setup Iklan</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              {/* Right: Ads Dashboard */}
              <div className="lg:col-span-7">
                <div className="glass-card rounded-xl p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <div>
                      <span className="text-xs font-bold text-white block">Laporan Hasil Iklan</span>
                      <span className="text-[10px] font-mono text-zinc-600">[Simulasi Retail]</span>
                    </div>
                    <div className="flex items-center gap-1 glass p-0.5 rounded text-[10px]">
                      <button type="button" onClick={() => setAdsTimeframe('30d')} className={`px-2.5 py-1 rounded cursor-pointer font-mono min-h-[28px] ${adsTimeframe === '30d' ? 'bg-white text-black font-medium' : 'text-zinc-500'}`}>30H</button>
                      <button type="button" onClick={() => setAdsTimeframe('60d')} className={`px-2.5 py-1 rounded cursor-pointer font-mono min-h-[28px] ${adsTimeframe === '60d' ? 'bg-white text-black font-medium' : 'text-zinc-500'}`}>60H</button>
                    </div>
                  </div>

                  {/* ROAS */}
                  <div className="glass rounded-xl p-4">
                    <span className="text-xs text-zinc-500 block mb-1">Target ROAS</span>
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-bold font-mono text-white">{adsTimeframe === '30d' ? '4.20x' : '4.85x'}</span>
                      <span className="text-xs text-zinc-500">Rp 1jt iklan = Rp {adsTimeframe === '30d' ? '4.2' : '4.85'}jt omset</span>
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="glass rounded-lg p-3">
                      <span className="text-[10px] text-zinc-600 block font-mono">Penjualan</span>
                      <span className="text-sm font-bold font-mono text-white block mt-0.5">{adsTimeframe === '30d' ? 'Rp 142.8Jt' : 'Rp 291.6Jt'}</span>
                      <span className="text-[10px] text-zinc-600">Modal: {adsTimeframe === '30d' ? '34Jt' : '60Jt'}</span>
                    </div>
                    <div className="glass rounded-lg p-3">
                      <span className="text-[10px] text-zinc-600 block font-mono">Biaya/Pesanan</span>
                      <span className="text-sm font-bold font-mono text-white block mt-0.5">Rp {adsTimeframe === '30d' ? '24.500' : '22.100'}</span>
                      <span className="text-[10px] text-zinc-600">Total: {adsTimeframe === '30d' ? '1.380' : '2.714'} order</span>
                    </div>
                  </div>

                  <div className="glass rounded-lg p-3 text-[11px] text-zinc-500">
                    <strong className="text-white/80">Target Audiens Relevan:</strong> Anggaran dialokasikan pada produk dan wilayah dengan pembelian berulang tertinggi.
                  </div>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
