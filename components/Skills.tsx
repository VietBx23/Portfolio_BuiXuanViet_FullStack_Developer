import React from 'react';
import { SKILLS } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const Skills: React.FC = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  const getSkillColor = (skill: string) => {
    const s = skill.toLowerCase();
    if (s.includes('react') || s.includes('typescript')) return 'text-blue-300 border-blue-500/20 hover:bg-blue-500/10 hover:border-blue-500/40';
    if (s.includes('java') || s.includes('spring')) return 'text-orange-300 border-orange-500/20 hover:bg-orange-500/10 hover:border-orange-500/40';
    if (s.includes('.net') || s.includes('c#')) return 'text-purple-300 border-purple-500/20 hover:bg-purple-500/10 hover:border-purple-500/40';
    if (s.includes('node') || s.includes('mongo') || s.includes('emerald')) return 'text-green-300 border-green-500/20 hover:bg-green-500/10 hover:border-green-500/40';
    if (s.includes('sql') || s.includes('data')) return 'text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/10 hover:border-cyan-500/40';
    return 'text-slate-300 border-slate-800 hover:border-emerald-500/20 hover:text-emerald-200';
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <RevealOnScroll direction="bottom">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
               Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Proficiency</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={200} direction="bottom">
            <p className="text-slate-400 text-lg">
               A complete toolkit for building end-to-end solutions. From database architecture to pixel-perfect UIs.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((category, index) => {
            const Icon = category.icon;
            return (
              <RevealOnScroll key={index} delay={index * 100} direction="bottom">
                <div 
                  onMouseMove={handleMouseMove}
                  className="group spotlight-card relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/50 transition-all duration-300 backdrop-blur-sm overflow-hidden h-full"
                >
                  {/* Internal Grid Pattern on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                  
                  <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                      <div className="p-3.5 rounded-xl bg-slate-800/80 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-900 transition-all duration-300 shadow-lg shadow-emerald-900/10 border border-slate-700 group-hover:border-emerald-400">
                          <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">{category.title}</h3>
                      </div>
                      
                      <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill, idx) => (
                          <span 
                          key={idx} 
                          className={`px-3 py-1.5 text-sm border rounded-lg transition-all duration-300 cursor-default ${getSkillColor(skill)} bg-slate-950/80 shadow-sm hover:scale-105`}
                          >
                          {skill}
                          </span>
                      ))}
                      </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;