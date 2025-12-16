import React from 'react';
import { SKILLS } from '../constants';

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
    if (s.includes('react') || s.includes('typescript')) return 'text-blue-300 border-blue-500/20 hover:bg-blue-500/10';
    if (s.includes('java') || s.includes('spring')) return 'text-orange-300 border-orange-500/20 hover:bg-orange-500/10';
    if (s.includes('.net') || s.includes('c#')) return 'text-purple-300 border-purple-500/20 hover:bg-purple-500/10';
    if (s.includes('node') || s.includes('mongo') || s.includes('emerald')) return 'text-green-300 border-green-500/20 hover:bg-green-500/10';
    if (s.includes('sql') || s.includes('data')) return 'text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/10';
    return 'text-slate-300 border-slate-800 hover:border-emerald-500/20 hover:text-emerald-200';
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Technical Proficiency</h2>
          <p className="text-slate-400 text-lg">
             A complete toolkit for building end-to-end solutions. From database architecture to pixel-perfect UIs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                onMouseMove={handleMouseMove}
                className="group spotlight-card relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                    <div className="p-3.5 rounded-xl bg-slate-800/80 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-900 transition-all duration-300 shadow-lg shadow-emerald-900/10">
                        <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">{category.title}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, idx) => (
                        <span 
                        key={idx} 
                        className={`px-3 py-1.5 text-sm border rounded-lg transition-colors cursor-default ${getSkillColor(skill)} bg-slate-950/80`}
                        >
                        {skill}
                        </span>
                    ))}
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;