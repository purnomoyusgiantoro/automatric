import React, { useState } from 'react';
import {
  Clock,
  ArrowRight,
  Send,
  CheckCheck,
  Check,
  BarChart3,
  Bot,
  Activity,
  Image as ImageIcon,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { siteConfig } from '../config/site';
import { trackEvent } from '../telemetry/tracker';

export const PillarsSection: React.FC = () => {
  const [activeChatScenario, setActiveChatScenario] = useState<'catalog' | 'order' | 'followup'>('catalog');
  const [activeCreativeFormat, setActiveCreativeFormat] = useState<'feed' | 'story' | 'banner'>('feed');
  const [adsTimeframe, setAdsTimeframe] = useState<'30d' | '60d'>('30d');

  const p1 = siteConfig.pillars[0]; // WhatsApp AI
  const p2 = siteConfig.pillars[1]; // Creative Speed
  const p3 = siteConfig.pillars[2]; // AI Ads

  const handleScenarioChange = (scenario: 'catalog' | 'order' | 'followup') => {
    setActiveChatScenario(scenario);
    trackEvent('section_viewed', {
      section: 'pillar_whatsapp_scenario',
      scenario,
    });
  };

  const handleCreativeFormatChange = (format: 'feed' | 'story' | 'banner') => {
    setActiveCreativeFormat(format);
    trackEvent('section_viewed', {
      section: 'pillar_creative_format',
      format,
    });
  };

  const handlePillarWaClick = (pillarId: string) => {
    trackEvent('whatsapp_redirect', {
      source: 'pillar_cta',
      destination: `https://wa.me/${siteConfig.whatsappNumber}`,
      planId: pillarId,
    });
  };

  const chatDialogues = {
    catalog: [
      {
        sender: 'user',
        text: 'Malam min, kemeja batik navy ukuran XL masih ada? Butuh untuk acara hari Sabtu di Surabaya.',
        time: '23:14',
      },
      {
        sender: 'bot',
        text: 'Malam kak! Masih ada 3 potong untuk Batik Navy ukuran XL. Pengiriman kilat bisa tiba hari Jumat sore. Mau kami pesankan sekarang?',
        time: '23:14',
      },
      {
        sender: 'user',
        text: 'Boleh min, minta foto detail bahan kainnya ya.',
        time: '23:15',
      },
      {
        sender: 'bot',
        text: 'Baik kak! Ini foto detail bahan katun primisima. Bahannya adem, tidak kaku, dan sudah dilapisi furing rapi.',
        time: '23:15',
      },
    ],
    order: [
      {
        sender: 'user',
        text: 'Min, saya mau pesan Kopi Susu 1 Liter (2 botol) dan Brownies Fudgy (1 kotak) kirim ke Tebet ya.',
        time: '14:20',
      },
      {
        sender: 'bot',
        text: 'Baik kak, berikut rincian pesanannya:\n• 2x Kopi Susu 1 Liter (Rp 130.000)\n• 1x Brownies Fudgy (Rp 65.000)\n• Ongkir kurir lokal Tebet (Rp 12.000)\nTotal: Rp 207.000',
        time: '14:20',
      },
      {
        sender: 'bot',
        text: 'Pesanan sudah tercatat di sistem toko #ORD-4921. Pembayaran bisa transfer ke rekening BCA atau scan kode QRIS.',
        time: '14:21',
      },
      {
        sender: 'user',
        text: 'Sudah saya bayar lewat QRIS ya min barusan.',
        time: '14:22',
      },
      {
        sender: 'bot',
        text: 'Pembayaran sudah kami terima. Pesanan langsung diteruskan ke tim peracik untuk disiapkan. Estimasi penjemputan kurir 15 menit lagi ya kak.',
        time: '14:22',
      },
    ],
    followup: [
      {
        sender: 'bot',
        text: 'Halo Kak Sarah! Kami mengabarkan bahwa pesanan Paket Skincare kemarin masih tersimpan di keranjang belanja Kakak.',
        time: '09:00',
      },
      {
        sender: 'bot',
        text: 'Khusus hari ini ada kupon potongan ongkos kirim Rp 15.000. Apakah mau kami bantu proseskan sekarang sebelum kuota promo berakhir kak?',
        time: '09:00',
      },
      {
        sender: 'user',
        text: 'Halo min, kemarin sempat lupa karena ada rapat kerja. Boleh dibantu lanjutkan pesanannya ya.',
        time: '09:05',
      },
      {
        sender: 'bot',
        text: 'Baik kak! Rincian pembayaran sudah kami perbarui dengan potongan ongkir menjadi Rp 185.000. Tautan pembayaran sudah siap digunakan.',
        time: '09:06',
      },
    ],
  };

  return (
    <section id="layanan" className="py-24 sm:py-32 bg-[#050505] text-zinc-100 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-3">
            Layanan Utama
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Tiga Layanan untuk Memperlancar Operasional Toko Anda.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            Kami merancang dan memasang sistem yang langsung menangani percakapan pembeli, materi promosi, dan pengaturan iklan produk Anda.
          </p>
        </div>

        {/* Pillars Stack */}
        <div className="space-y-12 sm:space-y-16">
          
          {/* Pilar 1: Otomasi Percakapan WhatsApp */}
          <div className="bg-[#0b0b0d] border border-white/[0.08] rounded-2xl p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Explanations */}
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.06] border border-white/[0.08] text-emerald-400 text-xs font-mono font-medium">
                  <Bot className="w-3.5 h-3.5" />
                  <span>{p1.badge}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {p1.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                  {p1.description}
                </p>

                {/* Metrics Highlight */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono block">
                      Keandalan Sistem
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {p1.metrics}
                    </span>
                  </div>
                </div>

                {/* Checklist */}
                <ul className="space-y-2.5 pt-1">
                  {p1.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                      'Halo Automatric! Saya tertarik konsultasi Otomasi Percakapan WhatsApp untuk toko saya.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handlePillarWaClick(p1.id)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>Konsultasi Otomasi WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right: WhatsApp Chat Simulator */}
              <div className="lg:col-span-6">
                <div className="bg-[#101014] border border-white/[0.08] rounded-xl overflow-hidden shadow-lg">
                  {/* WhatsApp Top Bar */}
                  <div className="bg-[#16161c] px-4 py-3 border-b border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-black text-xs font-mono">
                        AT
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-white">Bot WhatsApp Toko</span>
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <span className="text-[10px] text-zinc-400 block">
                          Online 24 Jam • Respons &lt; 1 Detik
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-zinc-300 border border-white/[0.06]">
                      SIMULASI NYATA
                    </span>
                  </div>

                  {/* Scenarios Tabs */}
                  <div className="bg-[#121217] px-3 py-2 border-b border-white/[0.06] flex items-center gap-2 overflow-x-auto">
                    <button
                      type="button"
                      onClick={() => handleScenarioChange('catalog')}
                      className={`text-xs px-2.5 py-1 rounded font-medium transition-colors shrink-0 cursor-pointer min-h-[44px] focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none ${
                        activeChatScenario === 'catalog'
                          ? 'bg-emerald-400 text-black font-semibold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      1. Cek Stok &amp; Foto
                    </button>
                    <button
                      type="button"
                      onClick={() => handleScenarioChange('order')}
                      className={`text-xs px-2.5 py-1 rounded font-medium transition-colors shrink-0 cursor-pointer min-h-[44px] focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none ${
                        activeChatScenario === 'order'
                          ? 'bg-emerald-400 text-black font-semibold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      2. Rekap &amp; QRIS
                    </button>
                    <button
                      type="button"
                      onClick={() => handleScenarioChange('followup')}
                      className={`text-xs px-2.5 py-1 rounded font-medium transition-colors shrink-0 cursor-pointer min-h-[44px] focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none ${
                        activeChatScenario === 'followup'
                          ? 'bg-emerald-400 text-black font-semibold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      3. Pengingat Pembayaran
                    </button>
                  </div>

                  {/* Message Stream */}
                  <div className="p-4 space-y-3 min-h-[280px] max-h-[320px] overflow-y-auto bg-[#0a0a0d]">
                    {chatDialogues[activeChatScenario].map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex flex-col ${
                          msg.sender === 'user' ? 'items-end' : 'items-start'
                        }`}
                      >
                        <div
                          className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-xs leading-relaxed ${
                            msg.sender === 'user'
                              ? 'bg-emerald-950/70 border border-emerald-500/30 text-emerald-100'
                              : 'bg-[#18181f] text-zinc-200 border border-white/[0.06]'
                          }`}
                        >
                          <p className="whitespace-pre-line">{msg.text}</p>
                          <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-zinc-400">
                            <span>{msg.time}</span>
                            {msg.sender === 'user' && (
                              <CheckCheck className="w-3 h-3 text-emerald-400" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chat Input Bar */}
                  <div className="bg-[#16161c] px-4 py-2.5 border-t border-white/[0.06] flex items-center justify-between text-zinc-400 text-xs">
                    <span className="text-zinc-500">Ketik pesan balasan...</span>
                    <div className="w-7 h-7 rounded-lg bg-emerald-400 text-black flex items-center justify-center">
                      <Send className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>


          {/* Pilar 2: Pembuatan Desain Promosi Kilat (<24 Jam) */}
          <div className="bg-[#0b0b0d] border border-white/[0.08] rounded-2xl p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Visual Showcase Left */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="bg-[#101014] border border-white/[0.08] rounded-xl p-5 space-y-4">
                  
                  {/* Format Header */}
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <div className="flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-bold text-white tracking-wide">
                        Alur Pembuatan Materi Promosi
                      </span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-zinc-300 border border-white/[0.06] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-400" />
                      &lt; 24 Jam Pengerjaan
                    </span>
                  </div>

                  {/* Selector */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleCreativeFormatChange('feed')}
                      className={`text-xs px-2.5 py-1 rounded font-medium transition-colors cursor-pointer min-h-[44px] focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none ${
                        activeCreativeFormat === 'feed'
                          ? 'bg-emerald-400 text-black font-semibold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Feed IG (1:1)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCreativeFormatChange('story')}
                      className={`text-xs px-2.5 py-1 rounded font-medium transition-colors cursor-pointer min-h-[44px] focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none ${
                        activeCreativeFormat === 'story'
                          ? 'bg-emerald-400 text-black font-semibold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Story / Reels (9:16)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCreativeFormatChange('banner')}
                      className={`text-xs px-2.5 py-1 rounded font-medium transition-colors cursor-pointer min-h-[44px] focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none ${
                        activeCreativeFormat === 'banner'
                          ? 'bg-emerald-400 text-black font-semibold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Banner Iklan (16:9)
                    </button>
                  </div>

                  {/* Preview Box */}
                  <div className="rounded-xl border border-white/[0.08] bg-[#08080a] p-5">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                        <span>MATERI PROMOSI #CRT-204</span>
                        <span className="text-emerald-400 font-semibold">SIAP PASANG</span>
                      </div>

                      <div className="py-5 px-4 rounded-lg bg-[#141418] border border-white/[0.06] text-center">
                        <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">
                          Periode Gajian Toko
                        </span>
                        <h4 className="text-lg font-bold text-white mt-1">
                          PROMO SPESIAL PRODUK RETAIL
                        </h4>
                        <p className="text-xs text-zinc-400 mt-1 max-w-xs mx-auto">
                          Materi visual promosi dibuat jelas dan proporsional untuk menarik perhatian pelanggan di media sosial.
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                        <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                          <span className="text-[10px] text-zinc-400 block">Waktu Buat</span>
                          <span className="text-xs font-mono font-semibold text-white">&lt; 24 Jam</span>
                        </div>
                        <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                          <span className="text-[10px] text-zinc-400 block">Kualitas</span>
                          <span className="text-xs font-mono font-semibold text-white">Resolusi Tinggi</span>
                        </div>
                        <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                          <span className="text-[10px] text-zinc-400 block">Hak Penggunaan</span>
                          <span className="text-xs font-mono font-semibold text-emerald-400">Milik Anda</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] font-mono text-zinc-400 flex items-center justify-between px-1">
                    <span>Materi Diterima • Draf Desain • Pengecekan • Serah Terima File</span>
                  </div>
                </div>
              </div>

              {/* Explanations Right */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.06] border border-white/[0.08] text-emerald-400 text-xs font-mono font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{p2.badge}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {p2.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                  {p2.description}
                </p>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono block">
                      Kecepatan Penyerahan
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {p2.metrics}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 pt-1">
                  {p2.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                      'Halo Automatric! Saya butuh materi Desain Promosi Kilat (<24 jam) untuk toko saya.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handlePillarWaClick(p2.id)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>Pesan Desain Promosi Kilat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>


          {/* Pilar 3: Setup Iklan Digital Terarah */}
          <div className="bg-[#0b0b0d] border border-white/[0.08] rounded-2xl p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Explanations Left */}
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.06] border border-white/[0.08] text-emerald-400 text-xs font-mono font-medium">
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>{p3.badge}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {p3.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                  {p3.description}
                </p>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center shrink-0">
                    <Activity className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono block">
                      Efisiensi Pengiklanan
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {p3.metrics}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 pt-1">
                  {p3.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                      'Halo Automatric! Saya ingin konsultasi Setup Iklan Digital (Meta/TikTok Ads) untuk toko saya.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handlePillarWaClick(p3.id)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>Konsultasi Setup Iklan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right: Ads Dashboard Simulation */}
              <div className="lg:col-span-6">
                <div className="bg-[#101014] border border-white/[0.08] rounded-xl p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <div>
                      <h4 className="text-xs font-bold text-white">
                        Contoh Format Laporan Iklan
                      </h4>
                      <span className="text-[10px] font-mono text-zinc-400">
                        [Simulasi Toko Retail Fashion]
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-white/[0.04] p-0.5 rounded text-[10px]">
                      <button
                        type="button"
                        onClick={() => setAdsTimeframe('30d')}
                        className={`px-2 py-0.5 rounded cursor-pointer font-mono min-h-[44px] focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none ${
                          adsTimeframe === '30d' ? 'bg-emerald-400 text-black font-semibold' : 'text-zinc-400'
                        }`}
                      >
                        30H
                      </button>
                      <button
                        type="button"
                        onClick={() => setAdsTimeframe('60d')}
                        className={`px-2 py-0.5 rounded cursor-pointer font-mono min-h-[44px] focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none ${
                          adsTimeframe === '60d' ? 'bg-emerald-400 text-black font-semibold' : 'text-zinc-400'
                        }`}
                      >
                        60H
                      </button>
                    </div>
                  </div>

                  {/* Primary Highlight */}
                  <div className="p-4 rounded-xl bg-[#08080a] border border-white/[0.06]">
                    <span className="text-xs text-zinc-400 block mb-1">
                      Rasio Pendapatan Iklan (Target ROAS)
                    </span>
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-bold font-mono text-emerald-400">
                        4.20x
                      </span>
                      <span className="text-xs text-zinc-400">
                        (Tiap Rp 1jt modal iklan = Rp 4.2jt penjualan)
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-[#08080a] border border-white/[0.04]">
                      <span className="text-[10px] text-zinc-400 block font-mono">Nilai Penjualan</span>
                      <span className="text-sm font-bold font-mono text-white mt-0.5 block">Rp 142.8Jt</span>
                      <span className="text-[10px] text-zinc-400">Modal iklan: 34Jt</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#08080a] border border-white/[0.04]">
                      <span className="text-[10px] text-zinc-400 block font-mono">Biaya per Pesanan</span>
                      <span className="text-sm font-bold font-mono text-emerald-400 mt-0.5 block">Rp 24.500</span>
                      <span className="text-[10px] text-zinc-400">Total order: 1.380</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5">
                    <Activity className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-zinc-300 leading-snug">
                      <strong className="text-white font-semibold">Target Audiens Relevan:</strong> Anggaran dialokasikan pada kategori produk dan wilayah kota dengan tingkat pembelian berulang tertinggi.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
