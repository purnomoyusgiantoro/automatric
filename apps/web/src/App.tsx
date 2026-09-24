import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PillarsSection } from './components/PillarsSection';
import { WorkflowSection } from './components/WorkflowSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { initObservability } from './telemetry/tracker';

export const App: React.FC = () => {
  useEffect(() => {
    initObservability();
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 flex flex-col font-sans selection:bg-white/20 selection:text-white relative overflow-hidden">
      {/* Radiant Global Ambient Lighting (Cahaya Putih Blur Background Halus & Bebas Glitch) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        {/* Top-center luminous light wash */}
        <div className="glow-white-wide -top-[5%] left-1/2 -translate-x-1/2 w-[1100px] h-[750px]" />

        {/* Upper-left bright white orb */}
        <div className="glow-white-intense top-[18%] -left-[10%] w-[750px] h-[750px]" />

        {/* Mid-right bright white ambient orb */}
        <div className="glow-white-intense top-[42%] -right-[8%] w-[800px] h-[800px]" />

        {/* Center atmospheric glow pool */}
        <div className="glow-white-medium top-[58%] left-[20%] w-[700px] h-[700px]" />

        {/* Lower-left bright luminous orb */}
        <div className="glow-white-intense bottom-[15%] -left-[6%] w-[680px] h-[680px]" />

        {/* Bottom prominent glow wash for footer */}
        <div className="glow-white-wide bottom-[2%] right-[10%] w-[900px] h-[700px]" />
      </div>

      <Navbar />
      <main className="flex-grow relative z-10">
        <HeroSection />
        <PillarsSection />
        <WorkflowSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
