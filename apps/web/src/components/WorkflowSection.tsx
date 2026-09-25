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

        {/* End-to-End Timeline Flow Line (Garis Ujung ke Ujung Penegas Alur) */}
        <div className="relative mb-8 hidden lg:block">
          {/* Continuous Line from End to End */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500/40 via-white/30 to-emerald-500/40 -translate-y-1/2 z-0" />

          {/* Stepper Nodes resting in the middle of the line */}
          <div className="relative grid grid-cols-4 gap-6 z-10">
            {siteConfig.workflow.map((item: WorkflowStep) => (
              <div key={item.step} className="flex items-center justify-center">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#050505] border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.06)] backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-white tracking-widest uppercase">
                    Tahap {item.step}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Timeline Line */}
        <div className="lg:hidden flex items-center justify-between mb-8 px-4 relative">
          <div className="absolute top-1/2 left-4 right-4 h-[2px] bg-gradient-to-r from-emerald-500/30 via-white/30 to-emerald-500/30 -translate-y-1/2 z-0" />
          {siteConfig.workflow.map((item: WorkflowStep) => (
            <div key={item.step} className="relative z-10 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-[#050505] border border-white/25 flex items-center justify-center text-xs font-mono font-bold text-white shadow-md">
                {item.step}
              </div>
            </div>
          ))}
        </div>

        {/* Workflow Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.workflow.map((item: WorkflowStep, index: number) => (
            <ScrollReveal key={item.step} delay={index * 100}>
              <div className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full border border-white/[0.12] hover:border-white/25 transition-all">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white/40">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-emerald-400">
                      {item.day}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mt-4 leading-snug">
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
    </section>
  );
};
