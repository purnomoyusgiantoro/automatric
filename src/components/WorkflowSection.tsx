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
  Search,       // 01 Konsultasi Alur dan Produk
  Cpu,          // 02 Pemasangan Bot dan Produksi Desain
  ShieldCheck,  // 03 Uji Coba Alur dan Pemeriksaan Bersama
  Send,         // 04 Peluncuran dan Serah Terima Sistem
];

const stepKeyPoints = [
  ['Konsultasi daftar produk utama', 'Pemetaan pertanyaan umum pembeli', 'Konfigurasi nomor WhatsApp toko'],
  ['Pemasangan data ke dalam bot', 'Integrasi Google Sheets toko', 'Produksi paket materi desain promosi'],
  ['Uji coba simulasi pesan nyata', 'Pemeriksaan alur pesanan pembeli', 'Penyesuaian teks dan info stok'],
  ['Peluncuran sistem bot toko', 'Serah terima file materi promosi', 'Masa pendampingan operasional aktif'],
];

export const WorkflowSection: React.FC = () => {
  const handleConsultClick = () => {
    trackEvent('whatsapp_redirect', {
      source: 'workflow_footer',
      destination: `https://wa.me/${siteConfig.whatsappNumber}`,
    });
  };

  const defaultWaMessage = encodeURIComponent(
    "Halo Automatric! Saya ingin menanyakan ketersediaan jadwal pengerjaan sprint untuk toko saya."
  );

  return (
    <section id="cara-kerja" className="py-24 sm:py-32 bg-[#050505] text-zinc-100 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-3">
            Alur Pengerjaan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Empat Tahap Pengerjaan. Selesai dalam 3 Sampai 7 Hari Kerja.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            Anda tidak perlu melakukan instalasi teknis sendiri. Tim kami menyiapkan dan menguji coba seluruh alur sistem hingga siap digunakan.
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
                      TAHAP {item.step}
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
              Tidak Perlu Merekrut Tim Teknis Baru
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              Kami mengurus seluruh konfigurasi teknis dan persiapan materi desain. Anda cukup memberikan informasi produk dan panduan toko yang ingin digunakan.
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
            <span>Tanya Jadwal Pengerjaan</span>
          </a>
        </div>

      </div>
    </section>
  );
};
