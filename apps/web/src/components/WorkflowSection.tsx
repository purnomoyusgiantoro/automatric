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
        <ScrollReveal className="text-center mb-12 sm:mb-14">
          <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-mono mb-3">
            Cara Kerja
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Empat langkah. Selesai.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.workflow.map((item: WorkflowStep, index: number) => (
            <ScrollReveal key={item.step} delay={index * 120}>
              <div className="glass-card rounded-2xl p-8 flex flex-col gap-4 h-full">
                <span className="text-3xl font-bold font-mono text-white/20">
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {item.day}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
