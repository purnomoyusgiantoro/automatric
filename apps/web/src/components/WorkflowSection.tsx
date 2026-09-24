import React from 'react';
import { siteConfig, WorkflowStep } from '../config/site';

export const WorkflowSection: React.FC = () => {
  return (
    <section id="cara-kerja" className="py-32 sm:py-40 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-mono mb-4">
            Cara Kerja
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Empat langkah. Selesai.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.workflow.map((item: WorkflowStep) => (
            <div
              key={item.step}
              className="glass-card rounded-2xl p-8 flex flex-col gap-4"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};
