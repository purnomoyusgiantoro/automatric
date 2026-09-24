import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PillarsSection } from './components/PillarsSection';
import { WorkflowSection } from './components/WorkflowSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { initObservability } from './telemetry/tracker';

export const App: React.FC = () => {
  useEffect(() => {
    initObservability();
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 flex flex-col font-sans selection:bg-white/20 selection:text-white relative overflow-hidden">
      {/* Radiant Global Ambient Lighting (Cahaya Putih Blur Background) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-center prominent glow wash */}
        <div className="absolute -top-[12%] left-1/2 -translate-x-1/2 w-[1000px] h-[650px] rounded-full bg-gradient-to-b from-white/[0.08] via-white/[0.035] to-transparent blur-[150px]" />

        {/* Upper-left luminous orb */}
        <div className="absolute top-[20%] -left-[12%] w-[700px] h-[700px] rounded-full bg-white/[0.055] blur-[160px]" />

        {/* Center-right luminous orb */}
        <div className="absolute top-[45%] -right-[10%] w-[750px] h-[750px] rounded-full bg-white/[0.05] blur-[170px]" />

        {/* Mid-center subtle bridge glow */}
        <div className="absolute top-[60%] left-[25%] w-[650px] h-[650px] rounded-full bg-white/[0.045] blur-[150px]" />

        {/* Lower-left luminous orb */}
        <div className="absolute bottom-[18%] -left-[5%] w-[600px] h-[600px] rounded-full bg-white/[0.05] blur-[160px]" />

        {/* Bottom prominent glow behind contact & footer */}
        <div className="absolute -bottom-[10%] right-[15%] w-[800px] h-[600px] rounded-full bg-gradient-to-t from-white/[0.07] via-white/[0.035] to-transparent blur-[160px]" />
      </div>

      <Navbar />
      <main className="flex-grow relative z-10">
        <HeroSection />
        <PillarsSection />
        <WorkflowSection />
        <PricingSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
