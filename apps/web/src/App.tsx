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
      {/* Global background glow orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-[150px]" />
        <div className="absolute top-[50%] right-[10%] w-[400px] h-[400px] rounded-full bg-white/[0.015] blur-[130px]" />
        <div className="absolute bottom-[20%] left-[40%] w-[350px] h-[350px] rounded-full bg-white/[0.02] blur-[120px]" />
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
