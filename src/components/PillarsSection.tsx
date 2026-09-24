import React, { useState } from 'react';
import {
  Zap,
  TrendingUp,
  CheckCircle2,
  Clock,
  ArrowRight,
  Send,
  CheckCheck,
  Layers,
  BarChart3,
  Bot,
  Activity,
  Image as ImageIcon,
  ShieldCheck,
} from 'lucide-react';
import { siteConfig } from '../config/site';
import { trackEvent } from '../telemetry/tracker';

export const PillarsSection: React.FC = () => {
  // Scenario state for Pillar 1 (WhatsApp Chat Simulator)
  const [activeChatScenario, setActiveChatScenario] = useState<'catalog' | 'order' | 'followup'>('catalog');

  // Format switcher for Pillar 2 (Creative Speed Simulator)
  const [activeCreativeFormat, setActiveCreativeFormat] = useState<'feed' | 'story' | 'banner'>('feed');

  // Timeframe filter for Pillar 3 (Ads Analytics)
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
      source: 'hero',
      destination: `https://wa.me/${siteConfig.whatsappNumber}`,
      planId: pillarId,
    });
  };

  // WhatsApp Dialogues for Realistic Indonesian UMKM Scenarios
  const chatDialogues = {
    catalog: [
      {
        sender: 'user',
        text: 'Malam min, kemeja batik modern navy size XL ready gak ya? Buat acara Sabtu besok ke Surabaya.',
        time: '23:14',
      },
      {
        sender: 'bot',
        text: 'Malam kak! Ready kak untuk Batik Navy size XL (tersisa 3 pcs terakhir). Pengiriman via Paxel/JNE YES bisa sampai Jumat sore kak. Mau kami pesankan sekarang?',
        time: '23:14',
      },
      {
        sender: 'user',
        text: 'Wah cepet banget balesnya jam segini! Boleh min, minta foto detail motif bahannya dong.',
        time: '23:15',
      },
      {
        sender: 'bot',
        text: 'Tentu kak! Ini foto detail katun primisima premium kami 📸. Bahannya adem, tidak mudah kusut, dan jahitan lapis furing rapi kak.',
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
        text: 'Siap kak! Berikut rekap pesanannya ya:\n• 2x Kopi Susu 1 Liter (Rp 130.000)\n• 1x Fudgy Brownies (Rp 65.000)\n• Ongkir Tebet (Rp 12.000)\nTotal: Rp 207.000',
        time: '14:20',
      },
      {
        sender: 'bot',
        text: 'Pesanan sudah otomatis tercatat di sistem rekap toko #ORD-4921. Pembayaran bisa transfer ke BCA 883019281 a/n Kedai Rasa atau scan QRIS berikut ya kak 💳',
        time: '14:21',
      },
      {
        sender: 'user',
        text: 'Sudah saya transfer via QRIS ya min barusan.',
        time: '14:22',
      },
      {
        sender: 'bot',
        text: 'Pembayaran terverifikasi lunas otomatis! Pesanan langsung masuk antrean barista ya kak. Estimasi pickup 15 menit lagi 🚀',
        time: '14:22',
      },
    ],
    followup: [
      {
        sender: 'bot',
        text: 'Halo Kak Sarah! Kami perhatikan Kakak kemarin sempat checkout Paket Skincare Glowing tapi belum sempat menyelesaikan pembayaran 😊',
        time: '09:00',
      },
      {
        sender: 'bot',
        text: 'Khusus hari ini ada voucher subsidi ongkir Rp 15.000 dengan kode ONSALE15. Apakah mau kami bantu proseskan sekarang sebelum kuota promonya habis kak?',
        time: '09:00',
      },
      {
        sender: 'user',
        text: 'Eh iya kemarin lupa keburu meeting! Makasih udah diingetin min, mau dong vouchernya.',
        time: '09:05',
      },
      {
        sender: 'bot',
        text: 'Alhamdulillah siap kak! Totalnya sudah kami potong otomatis jadi Rp 185.000 ya kak. Link pembayarannya sudah diperbarui di sini 🔗',
        time: '09:06',
      },
    ],
  };

  return (
    <section id="layanan" className="relative py-24 sm:py-32 bg-[#030508] text-slate-100 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/5 blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 right-0 w-96 h-96 bg-cyan-500/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-purple-500/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 mb-4">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
              Solusi Terpadu Automatric
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            3 Pilar Layanan Utama untuk{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Percepatan Bisnis Anda
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Bukan sekadar seminar atau template generik. Kami mengimplementasikan sistem AI bekerja nyata yang langsung menghasilkan uang dan memangkas beban operasional Anda.
          </p>
        </div>

        {/* 3 Pillars Deep Glass Cards */}
        <div className="space-y-16 lg:space-y-24">
          
          {/* ========================================================
              PILAR 1: WhatsApp AI & CS Automation
             ======================================================== */}
          <div className="backdrop-blur-xl bg-black/70 border border-white/[0.09] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-300">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 blur-[90px] rounded-full pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Explanations */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  <Bot className="w-3.5 h-3.5" />
                  <span>{p1.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {p1.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {p1.description}
                </p>

                {/* Metrics Highlight */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-medium block">
                      Dampak Terukur
                    </span>
                    <span className="text-base font-bold text-emerald-300">
                      {p1.metrics}
                    </span>
                  </div>
                </div>

                {/* Feature Highlights List */}
                <ul className="space-y-3 pt-2">
                  {p1.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* WhatsApp Consultation Action */}
                <div className="pt-4">
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                      'Halo Automatric! Saya tertarik konsultasi Otomasi CS & Chatbot WhatsApp AI untuk bisnis saya.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handlePillarWaClick(p1.id)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-semibold tracking-wide transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <span>Konsultasi Otomasi WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive WhatsApp Chat Mockup */}
              <div className="lg:col-span-6">
                <div className="backdrop-blur-2xl bg-[#080d16] border border-white/[0.12] rounded-2xl overflow-hidden shadow-2xl">
                  {/* WhatsApp Simulation Top Bar */}
                  <div className="bg-[#111b2b] px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white text-xs">
                          AT
                        </div>
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#111b2b] rounded-full" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-white">CS AI Automatric</span>
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <span className="text-[10px] text-emerald-400 block font-medium">
                          Online 24/7 • Respons &lt; 1 Detik
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-slate-400 border border-white/[0.06]">
                      LIVE DEMO
                    </span>
                  </div>

                  {/* Scenario Toggle Tabs */}
                  <div className="bg-[#0b121e] px-3 py-2 border-b border-white/[0.06] flex items-center gap-2 overflow-x-auto">
                    <span className="text-[11px] text-slate-400 font-medium shrink-0 pl-1">
                      Uji Skenario:
                    </span>
                    <button
                      type="button"
                      onClick={() => handleScenarioChange('catalog')}
                      className={`text-xs px-2.5 py-1 rounded-md font-medium transition-colors shrink-0 cursor-pointer ${
                        activeChatScenario === 'catalog'
                          ? 'bg-emerald-500 text-black font-bold shadow'
                          : 'bg-white/[0.05] text-slate-300 hover:text-white'
                      }`}
                    >
                      1. Cek Stok &amp; Foto
                    </button>
                    <button
                      type="button"
                      onClick={() => handleScenarioChange('order')}
                      className={`text-xs px-2.5 py-1 rounded-md font-medium transition-colors shrink-0 cursor-pointer ${
                        activeChatScenario === 'order'
                          ? 'bg-emerald-500 text-black font-bold shadow'
                          : 'bg-white/[0.05] text-slate-300 hover:text-white'
                      }`}
                    >
                      2. Rekap &amp; QRIS
                    </button>
                    <button
                      type="button"
                      onClick={() => handleScenarioChange('followup')}
                      className={`text-xs px-2.5 py-1 rounded-md font-medium transition-colors shrink-0 cursor-pointer ${
                        activeChatScenario === 'followup'
                          ? 'bg-emerald-500 text-black font-bold shadow'
                          : 'bg-white/[0.05] text-slate-300 hover:text-white'
                      }`}
                    >
                      3. Follow-Up
                    </button>
                  </div>

                  {/* Chat Message Stream */}
                  <div className="p-4 sm:p-5 space-y-3.5 min-h-[300px] max-h-[360px] overflow-y-auto bg-gradient-to-b from-[#080d16] to-[#050810]">
                    {chatDialogues[activeChatScenario].map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex flex-col ${
                          msg.sender === 'user' ? 'items-end' : 'items-start'
                        } animate-in fade-in duration-300`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-[13px] leading-relaxed relative ${
                            msg.sender === 'user'
                              ? 'bg-[#005c4b] text-white rounded-tr-none'
                              : 'bg-[#202c33] text-slate-100 rounded-tl-none border border-white/[0.06]'
                          }`}
                        >
                          <p className="whitespace-pre-line">{msg.text}</p>
                          <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-slate-400">
                            <span>{msg.time}</span>
                            {msg.sender === 'user' && (
                              <CheckCheck className="w-3 h-3 text-cyan-400" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* WhatsApp Input Simulation Footer */}
                  <div className="bg-[#111b2b] px-4 py-3 border-t border-white/[0.08] flex items-center gap-2 text-slate-400">
                    <div className="flex-1 bg-[#202c33] px-3.5 py-1.5 rounded-full text-xs text-slate-400 flex items-center justify-between border border-white/[0.05]">
                      <span>Ketik pesan balasan...</span>
                      <Bot className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow">
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
          <div className="backdrop-blur-xl bg-black/70 border border-white/[0.09] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/10 blur-[90px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Visual Showcase Left (Multi-Format Design Pipeline) */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="backdrop-blur-2xl bg-[#080d16] border border-white/[0.12] rounded-2xl p-5 shadow-2xl space-y-4">
                  
                  {/* Pipeline Header */}
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                    <div className="flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-bold text-white tracking-wide">
                        Prompt-to-Asset Pipeline
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      &lt; 24 Jam Delivery
                    </span>
                  </div>

                  {/* Format Selector */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleCreativeFormatChange('feed')}
                      className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                        activeCreativeFormat === 'feed'
                          ? 'bg-cyan-500 text-black font-bold'
                          : 'bg-white/[0.05] text-slate-300 hover:text-white'
                      }`}
                    >
                      Feed IG (1:1)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCreativeFormatChange('story')}
                      className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                        activeCreativeFormat === 'story'
                          ? 'bg-cyan-500 text-black font-bold'
                          : 'bg-white/[0.05] text-slate-300 hover:text-white'
                      }`}
                    >
                      Story/Reels (9:16)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCreativeFormatChange('banner')}
                      className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                        activeCreativeFormat === 'banner'
                          ? 'bg-cyan-500 text-black font-bold'
                          : 'bg-white/[0.05] text-slate-300 hover:text-white'
                      }`}
                    >
                      Banner Ads (16:9)
                    </button>
                  </div>

                  {/* Dynamic Asset Preview Card */}
                  <div className="relative rounded-xl overflow-hidden border border-white/[0.1] bg-gradient-to-br from-slate-900 via-neutral-900 to-[#0c1322] p-5 shadow-inner">
                    {/* Simulated Creative Graphic */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono tracking-wider text-cyan-400 uppercase font-semibold">
                          [AI SYNTHESIS • BRAND READY]
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                          HIGH CONVERSION
                        </span>
                      </div>

                      <div className="py-6 px-4 rounded-lg bg-gradient-to-r from-emerald-950/40 via-cyan-950/30 to-purple-950/40 border border-white/[0.08] text-center relative overflow-hidden">
                        <div className="absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500 text-black shadow">
                          FLASH SALE 50%
                        </div>
                        <p className="text-[11px] text-cyan-300 uppercase tracking-widest font-semibold">
                          Spesial Gajian UMKM
                        </p>
                        <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-1">
                          UPGRADE BISNIS ANDA
                        </h4>
                        <p className="text-xs text-slate-300 mt-1 max-w-xs mx-auto">
                          Materi promosi tajam, estetis, dan teruji psikologis meningkatkan klik pembeli.
                        </p>
                        <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-white text-black font-bold text-xs shadow-md">
                          Order Sekarang
                        </div>
                      </div>

                      {/* Specs Row */}
                      <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                        <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                          <span className="text-[10px] text-slate-400 block">Waktu Buat</span>
                          <span className="text-xs font-bold text-emerald-400">3.5 Jam</span>
                        </div>
                        <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                          <span className="text-[10px] text-slate-400 block">Resolusi</span>
                          <span className="text-xs font-bold text-cyan-400">High-Res (4K)</span>
                        </div>
                        <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                          <span className="text-[10px] text-slate-400 block">Estimasi CTR</span>
                          <span className="text-xs font-bold text-amber-400">+4.2%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Micro Step indicator */}
                  <div className="text-[11px] text-slate-400 flex items-center justify-between px-1">
                    <span>Brief Diterima &bull; Draft Visual AI &bull; Quality Check &bull; Siap Tayang</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Explanations */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{p2.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {p2.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {p2.description}
                </p>

                {/* Metrics Highlight */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    <Layers className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-medium block">
                      Kecepatan Eksekusi
                    </span>
                    <span className="text-base font-bold text-cyan-300">
                      {p2.metrics}
                    </span>
                  </div>
                </div>

                {/* Feature Highlights List */}
                <ul className="space-y-3 pt-2">
                  {p2.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* WhatsApp Consultation Action */}
                <div className="pt-4">
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                      'Halo Automatric! Saya butuh materi Desain Promosi Kilat (<24 jam) untuk kampanye bisnis saya.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handlePillarWaClick(p2.id)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500/40 text-cyan-300 text-xs font-semibold tracking-wide transition-all hover:scale-[1.02] cursor-pointer"
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
          <div className="backdrop-blur-xl bg-black/70 border border-white/[0.09] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden group hover:border-purple-500/30 transition-all duration-300">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-500/10 blur-[90px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Explanations */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{p3.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {p3.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {p3.description}
                </p>

                {/* Metrics Highlight */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-medium block">
                      Efisiensi Pengiklanan
                    </span>
                    <span className="text-base font-bold text-purple-300">
                      {p3.metrics}
                    </span>
                  </div>
                </div>

                {/* Feature Highlights List */}
                <ul className="space-y-3 pt-2">
                  {p3.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* WhatsApp Consultation Action */}
                <div className="pt-4">
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                      'Halo Automatric! Saya ingin konsultasi Setup Iklan Berbasis AI (Meta/TikTok Ads) untuk meningkatkan ROAS toko saya.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handlePillarWaClick(p3.id)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 text-purple-300 text-xs font-semibold tracking-wide transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <span>Konsultasi Iklan Berbasis AI</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Simulated Meta/TikTok Ads Analytics Card */}
              <div className="lg:col-span-6">
                <div className="backdrop-blur-2xl bg-[#080d16] border border-white/[0.12] rounded-2xl p-5 sm:p-6 shadow-2xl space-y-5">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">
                          AI Ads Intelligence Dashboard
                        </h4>
                        <span className="text-[10px] text-slate-400">
                          [Simulasi Studi Kasus Retail UMKM Fashion]
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1.5 bg-white/[0.04] p-1 rounded-lg border border-white/[0.06] text-[10px]">
                      <button
                        type="button"
                        onClick={() => setAdsTimeframe('30d')}
                        className={`px-2 py-0.5 rounded cursor-pointer ${
                          adsTimeframe === '30d' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400'
                        }`}
                      >
                        30H
                      </button>
                      <button
                        type="button"
                        onClick={() => setAdsTimeframe('60d')}
                        className={`px-2 py-0.5 rounded cursor-pointer ${
                          adsTimeframe === '60d' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400'
                        }`}
                      >
                        60H
                      </button>
                    </div>
                  </div>

                  {/* Primary Performance Highlight: ROAS +4.2x */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-purple-950/40 via-[#101428] to-emerald-950/40 border border-purple-500/30">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-300 font-medium">
                        Blended Return on Ad Spend (ROAS)
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        +185% vs Benchmark
                      </span>
                    </div>
                    <div className="mt-2 flex items-baseline gap-3">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        4.20x
                      </span>
                      <span className="text-xs text-slate-400">
                        (Tiap Rp 1jt modal iklan = Rp 4.2jt omset)
                      </span>
                    </div>
                  </div>

                  {/* 3 Secondary Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="text-[10px] text-slate-400 block font-medium">Omset Tercipta</span>
                      <span className="text-xs sm:text-sm font-bold text-white mt-0.5 block">
                        Rp 142.8Jt
                      </span>
                      <span className="text-[10px] text-emerald-400 font-medium">Ad spend: 34Jt</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="text-[10px] text-slate-400 block font-medium">Cost per Order</span>
                      <span className="text-xs sm:text-sm font-bold text-emerald-400 mt-0.5 block">
                        Rp 24.500
                      </span>
                      <span className="text-[10px] text-slate-400">-38% hemat</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="text-[10px] text-slate-400 block font-medium">CTR Iklan</span>
                      <span className="text-xs sm:text-sm font-bold text-cyan-400 mt-0.5 block">
                        3.84%
                      </span>
                      <span className="text-[10px] text-slate-400">Top 5% UMKM</span>
                    </div>
                  </div>

                  {/* Visual Scaling Progression Chart */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Progres Skalabilitas Sprint (Minggu 1 &rarr; Minggu 4)</span>
                      <span className="text-emerald-400 font-mono font-bold">+133% kenaikan</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 h-14 items-end bg-black/40 p-2.5 rounded-lg border border-white/[0.05]">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-full bg-slate-700/60 rounded-t h-5" />
                        <span className="text-[9px] text-slate-400 font-mono">W1: 1.8x</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-full bg-purple-600/70 rounded-t h-7" />
                        <span className="text-[9px] text-slate-400 font-mono">W2: 2.7x</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-full bg-cyan-500/80 rounded-t h-10" />
                        <span className="text-[9px] text-slate-400 font-mono">W3: 3.6x</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-full bg-emerald-500 rounded-t h-12 shadow-lg shadow-emerald-500/30" />
                        <span className="text-[9px] text-emerald-400 font-mono font-bold">W4: 4.2x</span>
                      </div>
                    </div>
                  </div>

                  {/* AI Smart Insight Alert Box */}
                  <div className="p-3 rounded-lg bg-emerald-500/[0.06] border border-emerald-500/20 flex items-start gap-2.5">
                    <Activity className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-slate-300 leading-snug">
                      <strong className="text-emerald-300 font-semibold">AI Auto-Optimizer Aktif:</strong> Anggaran otomatis dialihkan ke segmen pembeli berulang di kota-kota dengan margin profit tertinggi.
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
