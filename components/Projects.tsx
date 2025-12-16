import React from 'react';
import { Github, ExternalLink, Smartphone, Server, Globe, Box, Layers } from 'lucide-react';
import { PROJECTS } from '../constants';
import { LinkData } from '../types';

const Projects: React.FC = () => {
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  const renderLinkIcon = (type: LinkData['type']) => {
    switch (type) {
      case 'github': return <Github className="h-4 w-4 mr-2" />;
      case 'android': return <Smartphone className="h-4 w-4 mr-2" />;
      case 'ios': return <Smartphone className="h-4 w-4 mr-2" />;
      default: return <ExternalLink className="h-4 w-4 mr-2" />;
    }
  };

  // Improved Visual Frame - Cleaner, Schematic Look
  const getProjectVisual = (title: string, index: number) => {
    const isMobile = title.toLowerCase().includes('mobile') || title.toLowerCase().includes('app');
    
    // Abstract patterns - Cleaner background
    const pattern = "bg-slate-950/50";

    if (isMobile) {
        return (
            <div className={`w-full h-full ${pattern} flex items-center justify-center p-8 relative overflow-hidden border-l border-slate-800/50`}>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                
                {/* Mobile Frame - Sleeker */}
                <div className="relative w-[180px] h-[360px] bg-slate-900 rounded-[2.5rem] border-[4px] border-slate-800 shadow-2xl group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-500 z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-800 rounded-b-lg"></div>
                    <div className="w-full h-full bg-[#0B1120] rounded-[2.2rem] overflow-hidden flex flex-col relative">
                        {/* UI Elements */}
                        <div className="p-5 pt-10 space-y-4 opacity-80">
                            <div className="w-full h-32 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-500/10"></div>
                            <div className="space-y-2">
                                <div className="w-2/3 h-2 rounded-full bg-slate-700"></div>
                                <div className="w-full h-2 rounded-full bg-slate-800"></div>
                                <div className="w-5/6 h-2 rounded-full bg-slate-800"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 pt-2">
                                <div className="h-16 rounded-lg bg-slate-800/50 border border-slate-700/30"></div>
                                <div className="h-16 rounded-lg bg-slate-800/50 border border-slate-700/30"></div>
                            </div>
                        </div>
                    </div>
                </div>
                 {/* Glow */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/20 blur-[60px] rounded-full -z-0"></div>
            </div>
        );
    } 
    
    // Web Browser Frame - Schematic
    return (
        <div className={`w-full h-full ${pattern} flex items-center justify-center px-10 relative overflow-hidden border-l border-slate-800/50`}>
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
             
             {/* Browser Window */}
             <div className="w-full aspect-[16/10] bg-[#0B1120] rounded-lg border border-slate-700/50 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 relative z-10 flex flex-col">
                <div className="h-8 bg-slate-900 border-b border-slate-800 flex items-center px-3 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                </div>
                
                <div className="flex-1 p-6 relative overflow-hidden flex gap-6">
                    <div className="w-1/4 h-full hidden md:flex flex-col gap-3 opacity-50">
                        <div className="w-full h-4 rounded bg-slate-800"></div>
                        <div className="w-full h-2 rounded bg-slate-800/50 mt-2"></div>
                        <div className="w-3/4 h-2 rounded bg-slate-800/50"></div>
                        <div className="w-full h-2 rounded bg-slate-800/50"></div>
                    </div>
                    <div className="flex-1 h-full flex flex-col gap-4">
                        <div className="w-full h-1/2 rounded-lg bg-gradient-to-r from-emerald-900/10 to-blue-900/10 border border-emerald-500/10 flex items-center justify-center">
                            <Server className="w-10 h-10 text-slate-700" />
                        </div>
                        <div className="flex-1 grid grid-cols-3 gap-3">
                             <div className="rounded-lg bg-slate-800/30"></div>
                             <div className="rounded-lg bg-slate-800/30"></div>
                             <div className="rounded-lg bg-slate-800/30"></div>
                        </div>
                    </div>
                </div>
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full -z-0"></div>
        </div>
    );
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-6">
          <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-emerald-500 font-mono text-sm font-bold tracking-wider uppercase mb-4">
                <span className="w-8 h-[2px] bg-emerald-500"></span>
                Selected Works
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                Featured Projects
              </h2>
          </div>
          <div className="hidden md:block">
              <p className="text-slate-400 text-right max-w-sm leading-relaxed">
                  Deep dive into my key projects, showcasing backend architecture and full-stack capabilities.
              </p>
          </div>
        </div>

        <div className="space-y-32">
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              onMouseMove={handleMouseMove}
              className="group relative"
            >
               {/* Background Numbering */}
               <div className="absolute -top-20 -left-10 text-[12rem] font-black text-slate-800/20 select-none z-0">
                  0{index + 1}
               </div>

               <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                  
                  {/* Visual Frame (Reordered on alternate) */}
                  <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/30 aspect-[16/10] shadow-2xl group-hover:border-emerald-500/30 transition-colors duration-500">
                          {getProjectVisual(project.title, index)}
                      </div>
                  </div>

                  {/* Text Content */}
                  <div className={`order-1 ${index % 2 === 0 ? 'lg:order-1 lg:pr-12' : 'lg:order-2 lg:pl-12'}`}>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-emerald-400 font-mono text-xs font-bold px-2 py-1 rounded bg-emerald-950/30 border border-emerald-500/20 uppercase tracking-wider">
                            {project.period}
                        </span>
                        {index === 0 && (
                            <span className="flex items-center gap-1.5 text-blue-400 font-mono text-xs font-bold px-2 py-1 rounded bg-blue-950/30 border border-blue-500/20 uppercase tracking-wider">
                                Latest
                            </span>
                        )}
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-emerald-400 transition-colors duration-300">
                        {project.title}
                    </h3>
                    
                    <p className="text-slate-400 text-lg leading-relaxed mb-8 border-l-2 border-slate-800 pl-6">
                        {project.description}
                    </p>

                    <div className="mb-8">
                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t, i) => (
                            <span key={i} className="px-3 py-1.5 bg-[#0B1120] text-slate-300 text-xs font-bold font-mono rounded border border-slate-800 hover:text-white hover:border-slate-600 transition-colors cursor-default">
                                {t}
                            </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {project.links.length > 0 ? (
                            project.links.map((link, i) => (
                            <a 
                                key={i} 
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-slate-950 hover:bg-emerald-400 font-bold text-sm transition-all transform hover:-translate-y-1 shadow-lg shadow-white/5 hover:shadow-emerald-400/20"
                            >
                                {renderLinkIcon(link.type)}
                                {link.label}
                            </a>
                            ))
                        ) : (
                            <span className="inline-flex items-center text-slate-500 text-sm font-medium px-5 py-3 border border-dashed border-slate-700 rounded-lg bg-slate-900/50 cursor-not-allowed">
                                <Server className="w-4 h-4 mr-2" />
                                Private Internal System
                            </span>
                        )}
                    </div>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;