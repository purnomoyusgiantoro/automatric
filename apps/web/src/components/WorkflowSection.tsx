import React from 'react';
import { siteConfig, WorkflowStep } from '../config/site';
import { ScrollReveal } from './ScrollReveal';

export const WorkflowSection: React.FC = () => {
  return (
    <section id="cara-kerja" className="relative py-14 sm:py-20 bg-[#050505] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="glow-white-wide top-[25%] left-1/2 -translate-x-1/2 w-[850px] h-[500px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10 sm:mb-12">
          <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-mono mb-3">
            Alur Pengerjaan Sprint
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Empat langkah. Selesai.
          </h2>
        </ScrollReveal>

        {/* Workflow Cards Grid dengan Garis Penegas Alur di Tengah-Tengah Body */}
        <div className="relative">
          {/* Garis horizontal kontinu dari ujung ke ujung menembus tengah body */}
          <div className="hidden lg:block absolute top-[40%] left-[-1.5rem] right-[-1.5rem] h-[2px] bg-gradient-to-r from-emerald-500/30 via-white/30 to-emerald-500/30 -translate-y-1/2 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {siteConfig.workflow.map((item: WorkflowStep, index: number) => (
              <ScrollReveal key={item.step} delay={index * 100}>
                <div className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full border border-white/[0.12] hover:border-white/25 transition-all">
                  {/* Bagian Atas: Step & Hari */}
                  <div className="flex items-center justify-between pb-3">
                    <span className="text-3xl font-extrabold font-mono text-white/35">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-emerald-400">
                      {item.day}
                    </span>
                  </div>

                  {/* Tengah-Tengah Body: Garis & Badge Tahap 01..04 */}
                  <div className="my-5 relative flex items-center justify-center">
                    {/* Garis penghubung menembus kartu */}
                    <div className="absolute inset-x-[-28px] top-1/2 h-[2px] bg-gradient-to-r from-emerald-500/40 via-white/40 to-emerald-500/40 -translate-y-1/2 hidden lg:block pointer-events-none" />
                    <div className="relative z-10 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#050505] border border-emerald-500/40 shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-mono font-bold text-white tracking-wider uppercase">
                        Tahap {item.step}
                      </span>
                    </div>
                  </div>

                  {/* Bagian Bawah: Judul & Rincian */}
                  <div>
                    <h3 className="text-base font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-2.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
