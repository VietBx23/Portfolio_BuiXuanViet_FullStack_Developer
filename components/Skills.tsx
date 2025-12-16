import React, { useRef, useState } from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Expertise
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Technical Arsenal
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
             A curated stack of technologies I use to architect robust, scalable, and high-performance applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((category, index) => (
             <SpotlightCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SpotlightCard = ({ category }: { category: any }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const Icon = category.icon;

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden"
    >
      {/* Spotlight Gradient */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.15), transparent 40%)`,
        }}
      />
      
      <div className="relative h-full p-8 z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
             <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-100">{category.title}</h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill: string, idx: number) => (
            <span 
              key={idx} 
              className="px-3 py-1 text-sm text-slate-400 bg-slate-950/50 border border-slate-800 rounded-md group-hover:border-emerald-500/20 group-hover:text-emerald-100 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;