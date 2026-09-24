import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  Cpu, 
  ShieldCheck, 
  Send, 
  MessageSquare,
  Clock
} from 'lucide-react';
import { siteConfig, WorkflowStep } from '../config/site';
import { trackEvent } from '../telemetry/tracker';

const stepIcons = [
  Search,       // 01 Discovery & Briefing
  Cpu,          // 02 AI Training & Creative Sprint
  ShieldCheck,  // 03 Testing & Polishing
  Send,         // 04 Go-Live & Handover
];

const stepKeyPoints = [
  ['Konsultasi produk unggulan', 'Pemetaan karakter pembeli', 'Konfigurasi nomor WhatsApp'],
  ['Training bot dengan data bisnis', 'Integrasi Google Sheets', 'Produksi visual & copywriting kilat'],
  ['Uji coba alur percakapan nyata', 'Simulasi order pelanggan', 'Penyempurnaan copywriting'],
  ['Peluncuran sistem bot 24/7', 'Serah terima akun & aset', 'Masa pendampingan aktif'],
];

export const WorkflowSection: React.FC = () => {
  const handleConsultClick = () => {
    trackEvent('whatsapp_redirect', {
      source: 'hero',
      destination: `https://wa.me/${siteConfig.whatsappNumber}`,
    });
  };

  const defaultWaMessage = encodeURIComponent(
    "Halo Automatric! Saya ingin menanyakan estimasi waktu dan alur pengerjaan sprint AI untuk bisnis saya."
  );

  return (
    <section id="cara-kerja" className="py-24 sm:py-32 relative bg-[#030508] overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-emerald-600/10 via-cyan-600/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md shadow-sm shadow-emerald-950/30">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span className="tracking-wide uppercase">Alur Kerja Cepat • Sprint 3-7 Hari Beres</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Dari Ide Sampai AI Aktif Bekerja,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Hanya Dalam Hitungan Hari
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Tidak ada setup teknis rumit yang memusingkan Anda. Tim spesialis Automatric mengurus seluruh integrasi dari nol hingga bisnis Anda siap melipatgandakan omset.
          </p>
        </div>

        {/* Progressive Timeline Grid */}
        <div className="relative">
          {/* Glowing connecting line on large desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-emerald-500/20 via-cyan-500/50 to-emerald-500/20 pointer-events-none z-0">
            {/* Animated glowing pulse along the track */}
            <div className="w-24 h-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent blur-[1px] animate-pulse" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {siteConfig.workflow.map((item: WorkflowStep, index: number) => {
              const StepIcon = stepIcons[index] || Send;
              const points = stepKeyPoints[index] || [];

              return (
                <div
                  key={item.step}
                  className="group relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 backdrop-blur-xl bg-black/70 border border-white/[0.09] hover:border-emerald-500/40 transition-all duration-300 shadow-xl shadow-black/50 hover:shadow-emerald-950/30 hover:-translate-y-1.5"
                >
                  {/* Subtle card top gradient light */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Top Bar: Number Badge + Day Pill */}
                    <div className="flex items-center justify-between mb-6">
                      {/* Glowing Number Badge */}
                      <div className="relative flex items-center justify-center">
                        <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 group-hover:border-emerald-400 flex items-center justify-center font-mono font-black text-lg text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)] group-hover:shadow-[0_0_30px_rgba(16,185,129,0.45)] transition-all duration-300">
                          {item.step}
                        </div>
                        {/* Glow halo */}
                        <div className="absolute inset-0 rounded-2xl bg-emerald-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>

                      {/* Day Pill */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {item.day}
                      </span>
                    </div>

                    {/* Step Icon & Title */}
                    <div className="space-y-3 mb-4">
                      <div className="inline-flex p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-300 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all duration-200">
                        <StepIcon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Key deliverables per step */}
                  <div className="pt-5 mt-4 border-t border-white/[0.06] space-y-2">
                    {points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Fast-Track Assurance Banner */}
        <div className="mt-14 sm:mt-16 p-6 sm:p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-r from-emerald-950/30 via-black/80 to-cyan-950/30 border border-emerald-500/20 shadow-2xl shadow-emerald-950/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Garansi Serah Terima Siap Pakai</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Tidak Perlu Sewa Programmer atau Desainer Tambahan
            </h4>
            <p className="text-slate-400 text-sm max-w-xl">
              Seluruh pengerjaan dikerjakan end-to-end oleh tim kami. Anda hanya memberikan bahan &amp; langsung menerima hasil final yang sudah diuji coba.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold tracking-wide text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-emerald-500/40 transition-all duration-200"
            >
              <span>Pilih Paket Sprint</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${defaultWaMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleConsultClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold tracking-wide text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 shadow-lg shadow-emerald-950/50 hover:shadow-emerald-900/60 border border-emerald-400/30 transition-all duration-200 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              <span>Tanya Alur di WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
