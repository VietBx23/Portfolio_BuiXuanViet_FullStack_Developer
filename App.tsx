import React, { useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

// Background Meteors Component
const Meteors = () => {
  const meteors = new Array(20).fill(true);
  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={"meteor" + idx}
          className="absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] animate-meteor"
          style={{
            top: Math.floor(Math.random() * 100) + "%", // Random top position
            left: Math.floor(Math.random() * 100) + "%", // Random left position
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 w-[50px] h-[1px] bg-gradient-to-r from-slate-500 to-transparent" />
        </span>
      ))}
    </>
  );
};

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mouse movement effect
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = event;
      containerRef.current.style.setProperty('--x', `${clientX}px`);
      containerRef.current.style.setProperty('--y', `${clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 relative overflow-x-hidden"
    >
      {/* Global Texture */}
      <div className="bg-noise"></div>

      {/* Dynamic Background with Mouse Spotlight */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* The Grid */}
        <div 
            className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
            style={{
                maskImage: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), black 0%, transparent 45%)',
                WebkitMaskImage: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), black 0%, transparent 45%)'
            }}
        ></div>
        
        {/* Dimmer Grid for the rest */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Scanning Beam Effect - Adds dynamic movement to the grid */}
        <div className="absolute inset-0 z-0 overflow-hidden">
             <div className="w-full h-[5px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent blur-sm absolute top-[-10%] animate-scan"></div>
        </div>

        {/* Glow Spots */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>

        {/* Shooting Stars */}
        <Meteors />
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          {/* Hero section */}
          <Hero />
          
          <Skills />
          <Experience />
          <Projects />
          <About />
          <Education />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </div>
  );
}

export default App;