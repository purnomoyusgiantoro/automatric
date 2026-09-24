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
  const [adsTimeframe, setAdsTimeframe] = useState<'30d' | '60d' | '90d'>('30d');

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
        text: 'Malam min, kemeja batik navy size XL ready gak ya? Buat acara Sabtu besok ke Surabaya.',
        time: '23:14',
      },
      {
        sender: 'bot',
        text: 'Malam kak! Ready kak untuk Batik Navy size XL (tersisa 3 pcs terakhir). Pengiriman via Paxel/JNE YES bisa sampai Jumat sore kak. Mau kami pesankan sekarang?',
        time: '23:14',
      },
      {
        sender: 'user',
        text: 'Boleh min, minta foto detail motif bahannya dong.',
        time: '23:15',
      },
      {
        sender: 'bot',
        text: 'Tentu kak! Ini foto detail katun primisima premium kami. Bahannya adem, tidak mudah kusut, dan jahitan lapis furing rapi.',
        time: '23:15',
      },
    ],
    order: [
      {
        sender: 'user',
        text: 'Min, saya mau pesan Paket Kopi Susu Literan (2 btl) sama Brownies Fudgy (1 box) kirim ke Tebet.',
        time: '14:20',
      },
      {
        sender: 'bot',
        text: 'Siap kak! Rekap pesanannya:\n• 2x Kopi Susu 1 Liter (Rp 130.000)\n• 1x Fudgy Brownies (Rp 65.000)\n• Ongkir Tebet (Rp 12.000)\nTotal: Rp 207.000',
        time: '14:20',
      },
      {
        sender: 'bot',
        text: 'Pesanan sudah otomatis tercatat di rekap toko #ORD-4921. Pembayaran transfer ke BCA 883019281 a/n Kedai Rasa atau scan QRIS.',
        time: '14:21',
      },
      {
        sender: 'user',
        text: 'Sudah saya transfer via QRIS ya min barusan.',
        time: '14:22',
      },
      {
        sender: 'bot',
        text: 'Pembayaran terverifikasi lunas otomatis! Pesanan langsung masuk antrean barista ya kak. Estimasi pickup 15 menit lagi.',
        time: '14:22',
      },
    ],
    followup: [
      {
        sender: 'bot',
        text: 'Halo Kak Sarah! Kami perhatikan Kakak kemarin sempat checkout Paket Skincare tapi belum sempat menyelesaikan pembayaran.',
        time: '09:00',
      },
      {
        sender: 'bot',
        text: 'Khusus hari ini ada voucher subsidi ongkir Rp 15.000 dengan kode ONSALE15. Mau kami bantu proseskan sekarang sebelum kuota promo berakhir kak?',
        time: '09:00',
      },
      {
        sender: 'user',
        text: 'Eh iya kemarin lupa keburu meeting! Makasih udah diingetin min, mau dong vouchernya.',
        time: '09:05',
      },
      {
        sender: 'bot',
        text: 'Siap kak! Totalnya sudah kami potong otomatis jadi Rp 185.000 ya kak. Link pembayaran sudah diperbarui.',
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
            Pilar Layanan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Tiga Sistem Inti untuk Akselerasi Bisnis Anda.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            Bukan sekadar rekomendasi atau teori. Kami mengimplementasikan sistem AI bekerja nyata yang langsung memangkas beban kerja operasional dan menaikkan konversi penjualan.
          </p>
        </div>

        {/* Pillars Stack */}
        <div className="space-y-12 sm:space-y-16">
          
          {/* ========================================================
              PILAR 1: WhatsApp AI & CS Automation
             ======================================================== */}
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
                      Dampak Operasional
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
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                      'Halo Automatric! Saya tertarik konsultasi Otomasi CS & Chatbot WhatsApp AI untuk bisnis saya.'
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
                          <span className="text-xs font-bold text-white">CS AI Automatric</span>
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <span className="text-[10px] text-zinc-400 block">
                          Online 24/7 • Respons &lt; 1 Detik
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
                      className={`text-xs px-2.5 py-1 rounded font-medium transition-colors shrink-0 cursor-pointer ${
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
                      className={`text-xs px-2.5 py-1 rounded font-medium transition-colors shrink-0 cursor-pointer ${
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
                      className={`text-xs px-2.5 py-1 rounded font-medium transition-colors shrink-0 cursor-pointer ${
                        activeChatScenario === 'followup'
                          ? 'bg-emerald-400 text-black font-semibold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      3. Follow-Up
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


          {/* ========================================================
              PILAR 2: Desain & Konten Promosi Kilat (<24 Jam)
             ======================================================== */}
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
                        Prompt-to-Asset Pipeline
                      </span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-zinc-300 border border-white/[0.06] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-400" />
                      &lt;24 Jam Delivery
                    </span>
                  </div>

                  {/* Selector */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleCreativeFormatChange('feed')}
                      className={`text-xs px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
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
                      className={`text-xs px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                        activeCreativeFormat === 'story'
                          ? 'bg-emerald-400 text-black font-semibold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Story/Reels (9:16)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCreativeFormatChange('banner')}
                      className={`text-xs px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                        activeCreativeFormat === 'banner'
                          ? 'bg-emerald-400 text-black font-semibold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Banner Ads (16:9)
                    </button>
                  </div>

                  {/* Preview Box */}
                  <div className="rounded-xl border border-white/[0.08] bg-[#08080a] p-5">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                        <span>ASSET IDENTIFIER #CRT-204</span>
                        <span className="text-emerald-400 font-semibold">HIGH-CONVERSION</span>
                      </div>

                      <div className="py-5 px-4 rounded-lg bg-[#141418] border border-white/[0.06] text-center">
                        <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">
                          Spesial Gajian UMKM
                        </span>
                        <h4 className="text-lg font-bold text-white mt-1">
                          UPGRADE SISTEM BISNIS ANDA
                        </h4>
                        <p className="text-xs text-zinc-400 mt-1 max-w-xs mx-auto">
                          Materi promosi tajam, estetis, dan teruji psikologis meningkatkan konversi pelanggan.
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                        <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                          <span className="text-[10px] text-zinc-400 block">Waktu Produksi</span>
                          <span className="text-xs font-mono font-semibold text-white">3.5 Jam</span>
                        </div>
                        <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                          <span className="text-[10px] text-zinc-400 block">Resolusi</span>
                          <span className="text-xs font-mono font-semibold text-white">High-Res (4K)</span>
                        </div>
                        <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                          <span className="text-[10px] text-zinc-400 block">Estimasi CTR</span>
                          <span className="text-xs font-mono font-semibold text-emerald-400">+4.2%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] font-mono text-zinc-400 flex items-center justify-between px-1">
                    <span>Brief Diterima • Draft AI • Quality Check • Serah Terima</span>
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
                      Kecepatan Eksekusi
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {p2.metrics}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 pt-1">
                  {p2.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                      'Halo Automatric! Saya butuh materi Desain Promosi Kilat (<24 jam) untuk kampanye bisnis saya.'
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


          {/* ========================================================
              PILAR 3: Iklan Berbasis AI & Growth Marketing
             ======================================================== */}
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
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                      'Halo Automatric! Saya ingin konsultasi Setup Iklan Berbasis AI (Meta/TikTok Ads) untuk bisnis saya.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handlePillarWaClick(p3.id)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>Konsultasi Iklan Berbasis AI</span>
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
                        AI Ads Intelligence Dashboard
                      </h4>
                      <span className="text-[10px] font-mono text-zinc-400">
                        [Simulasi Studi Kasus Retail Fashion]
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-white/[0.04] p-0.5 rounded text-[10px]">
                      <button
                        type="button"
                        onClick={() => setAdsTimeframe('30d')}
                        className={`px-2 py-0.5 rounded cursor-pointer font-mono ${
                          adsTimeframe === '30d' ? 'bg-emerald-400 text-black font-semibold' : 'text-zinc-400'
                        }`}
                      >
                        30H
                      </button>
                      <button
                        type="button"
                        onClick={() => setAdsTimeframe('60d')}
                        className={`px-2 py-0.5 rounded cursor-pointer font-mono ${
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
                      Blended Return on Ad Spend (ROAS)
                    </span>
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-bold font-mono text-emerald-400">
                        4.20x
                      </span>
                      <span className="text-xs text-zinc-400">
                        (Tiap Rp 1jt modal iklan = Rp 4.2jt omset)
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-[#08080a] border border-white/[0.04]">
                      <span className="text-[10px] text-zinc-400 block font-mono">Omset Tercipta</span>
                      <span className="text-sm font-bold font-mono text-white mt-0.5 block">Rp 142.8Jt</span>
                      <span className="text-[10px] text-zinc-400">Modal iklan: 34Jt</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#08080a] border border-white/[0.04]">
                      <span className="text-[10px] text-zinc-400 block font-mono">Cost per Order</span>
                      <span className="text-sm font-bold font-mono text-emerald-400 mt-0.5 block">Rp 24.500</span>
                      <span className="text-[10px] text-zinc-400">Total order: 1.380</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5">
                    <Activity className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-zinc-300 leading-snug">
                      <strong className="text-white font-semibold">AI Auto-Optimizer Aktif:</strong> Anggaran otomatis dialihkan ke segmen pembeli berulang di kota-kota dengan margin profit tertinggi.
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
