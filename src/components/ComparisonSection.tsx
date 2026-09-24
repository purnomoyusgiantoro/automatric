import React from 'react';
import { X, Check } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const comparisons = [
    {
      aspect: 'Model Biaya & Komitmen',
      conventional: 'Biaya langganan bulanan rutin yang mengikat kontrak panjang meskipun volume kerja sedang sedikit.',
      automatric: 'Satu kali bayar per sprint pengerjaan. Seluruh materi dan bot menjadi milik Anda tanpa biaya bulanan wajib.',
    },
    {
      aspect: 'Pelayanan Pesan Pelanggan',
      conventional: 'Pesan pelanggan di malam hari atau hari libur sering tidak terbalas cepat karena keterbatasan jam kerja admin.',
      automatric: 'Bot WhatsApp aktif menjawab info produk, mengecek katalog, dan mencatat pesanan selama 24 jam nonstop.',
    },
    {
      aspect: 'Waktu Pengerjaan Desain',
      conventional: 'Antrean pengerjaan agensi sering memakan waktu 5 sampai 10 hari kerja hanya untuk satu materi promosi.',
      automatric: 'Materi desain selesai dalam waktu kurang dari 24 jam agar langsung siap dipasang untuk promosi toko Anda.',
    },
    {
      aspect: 'Kejelasan Serah Terima',
      conventional: 'Banyak pertemuan koordinasi yang berulang tanpa kepastian kapan sistem benar-benar bisa dipakai.',
      automatric: 'Pengerjaan selesai dalam 3 sampai 7 hari kerja. Sistem langsung diuji coba dan diserahkan dalam kondisi siap pakai.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#08080a] text-zinc-100 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-2">
            Perbandingan Alur Kerja
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Perbedaan Model Pengerjaan Kami dengan Agensi Tradisional.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Kami menghilangkan proses berbelit-belit dan kontrak langganan bulanan agar Anda langsung menerima sistem kerja yang beroperasi.
          </p>
        </div>

        {/* Comparison Table / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Left: Cara Agensi Tradisional */}
          <div className="bg-[#0e0e12] border border-red-500/20 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
              <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-semibold">
                Model Agensi Tradisional
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

          {/* Right: Model Sprint Automatric */}
          <div className="bg-[#0e0e12] border-2 border-emerald-400/80 rounded-2xl p-6 sm:p-8 space-y-6 relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                Model Sprint Automatric
              </span>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-400 text-black">
                PRAKTIS &amp; TRANSPARAN
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
