import React from 'react';
import { 
  Check, 
  Search, 
  Cpu, 
  ShieldCheck, 
  Send, 
  MessageSquare,
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
      source: 'workflow_footer',
      destination: `https://wa.me/${siteConfig.whatsappNumber}`,
    });
  };

  const defaultWaMessage = encodeURIComponent(
    "Halo Automatric! Saya ingin menanyakan estimasi waktu dan alur pengerjaan sprint AI untuk bisnis saya."
  );

  return (
    <section id="cara-kerja" className="py-24 sm:py-32 bg-[#050505] text-zinc-100 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-3">
            Alur Kerja Cepat
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Sprint Terstruktur. Beres dalam 3-7 Hari Kerja.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            Tanpa instalasi rumit yang membingungkan Anda. Tim spesialis Automatric mengurus seluruh setup teknis dari nol sampai sistem aktif menghasilkan pesanan.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.workflow.map((item: WorkflowStep, index: number) => {
            const StepIcon = stepIcons[index] || Send;
            const points = stepKeyPoints[index] || [];

            return (
              <div
                key={item.step}
                className="bg-[#0b0b0d] border border-white/[0.08] rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                    <span className="text-sm font-mono font-bold text-emerald-400">
                      PHASE {item.step}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400">
                      {item.day}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="space-y-2 mb-4">
                    <div className="w-8 h-8 rounded bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-300">
                      <StepIcon className="w-4 h-4 text-emerald-400" />
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-4 border-t border-white/[0.06] space-y-2">
                  {points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Fast-Track Assurance Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-[#0b0b0d] border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Tidak Perlu Merekrut Tim IT atau Desainer Tambahan
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              Seluruh proses integrasi kami kerjakan secara penuh. Anda hanya memberikan materi bisnis dasar dan langsung menerima sistem yang sudah dites siap pakai.
            </p>
          </div>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${defaultWaMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleConsultClick}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold text-black bg-emerald-400 hover:bg-emerald-300 transition-colors shrink-0 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-black/20" />
            <span>Tanya Jadwal Sprint</span>
          </a>
        </div>

      </div>
    </section>
  );
};
