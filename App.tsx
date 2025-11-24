import React, { Suspense, useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Loading fallback for Three.js
const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-[#0f172a] z-50 text-white font-mono">
    <div className="flex flex-col items-center">
       <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mb-4"></div>
       <div className="animate-pulse tracking-widest text-cyan-400">LOADING SYSTEM...</div>
    </div>
  </div>
);

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen text-slate-200 selection:bg-cyan-500/30">
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* 3D Background Layer */}
      <Suspense fallback={<Loader />}>
        <ThreeBackground />
      </Suspense>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;