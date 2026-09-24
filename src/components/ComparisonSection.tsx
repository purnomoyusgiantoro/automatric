import React from 'react';
import { X, Check } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const comparisons = [
    {
      aspect: 'Model Biaya & Kontrak',
      conventional: 'Retainer bulanan mahal Rp 15-30 juta/bulan yang mengikat kontrak panjang.',
      automatric: 'Sistem Sprint Sekali Bayar. Miliki seluruh aset dan bot tanpa langganan wajib.',
    },
    {
      aspect: 'Respon Pelanggan & CS',
      conventional: 'Admin manusia sering kewalahan, slow respon saat jam istirahat atau malam hari.',
      automatric: 'Chatbot WhatsApp AI siaga 24/7, menjawab katalog & info stok dalam hitungan detik.',
    },
    {
      aspect: 'Kecepatan Produksi Desain',
      conventional: 'Proses antrean agensi 5-10 hari kerja hanya untuk 1 set banner promosi.',
      automatric: 'Turnaround kilat <24 jam. Siap posting saat tren pasar sedang memuncak.',
    },
    {
      aspect: 'Eksekusi & Setup Sistem',
      conventional: 'Rapat berulang-ulang tanpa kejelasan kapan sistem siap berjalan.',
      automatric: 'Sprint selesai dalam 3-7 hari kerja. Langsung serah terima dan siap terima order.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#08080a] text-zinc-100 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-2">
            Perbandingan Nyata
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Mengapa Bisnis Beralih ke Model Sprint Automatric.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Perbandingan langsung antara metode konvensional yang memboroskan anggaran vs implementasi AI terpadu yang berorientasi hasil cepat.
          </p>
        </div>

        {/* Comparison Table / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Left: Cara Konvensional */}
          <div className="bg-[#0e0e12] border border-red-500/20 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
              <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-semibold">
                Agensi Konvensional &amp; Manual
              </span>
              <span className="w-2 h-2 rounded-full bg-red-400/60" />
            </div>

            <div className="space-y-6">
              {comparisons.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <span className="text-xs font-medium text-zinc-400 block font-mono">
                    {item.aspect}
                  </span>
                  <div className="flex items-start gap-3 text-sm text-zinc-300">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{item.conventional}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Cara Automatric */}
          <div className="bg-[#0e0e12] border-2 border-emerald-400/80 rounded-2xl p-6 sm:p-8 space-y-6 relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                Ekosistem Automatric Sprint AI
              </span>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-400 text-black">
                LEBIH EFISIEN
              </span>
            </div>

            <div className="space-y-6">
              {comparisons.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <span className="text-xs font-medium text-zinc-400 block font-mono">
                    {item.aspect}
                  </span>
                  <div className="flex items-start gap-3 text-sm text-white">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="font-medium">{item.automatric}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
